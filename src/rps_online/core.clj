(ns rps-online.core
  (:require [org.httpkit.server :as http]
            [ring.middleware.defaults]
            [compojure.core :as routing]
            [compojure.route :as route]
            [taoensso.sente :as sente]
            [taoensso.sente.server-adapters.http-kit :refer (get-sch-adapter)]
            [com.stuartsierra.component :as component]
            [rps-online.chat :as chat])
  (:gen-class))

(let [{:keys [ch-recv send-fn connected-uids ajax-post-fn ajax-get-or-ws-handshake-fn]}
      (sente/make-channel-socket! (get-sch-adapter) {:user-id-fn (fn [ring-req] (:client-id ring-req))})]
  (def ring-ajax-post                ajax-post-fn)
  (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
  (def ch-chsk                       ch-recv) ; ChannelSocket's receive channel
  (def chsk-send!                    send-fn) ; ChannelSocket's send API fn
  (def connected-uids                connected-uids) ; Watchable, read-only atom
  )

(defn send-message!
  [message]
  (doseq [uid (:any @connected-uids)]
    (chsk-send! uid [:server/message message])))

(defmulti event-msg-handler :id)

(defmethod event-msg-handler :client/message
  [{:as ev-msg :keys [event id ?data uid]}]
  (println ?data)
  (println uid)
  (send-message! (:msg ?data)))

(defmethod event-msg-handler :default
  [{:as ev-msg :keys [event id]}]
  (println event)
  (println id))

(def sente-router (sente/start-server-chsk-router! ch-chsk event-msg-handler))

(routing/defroutes ring-routes
  (routing/GET "/chat" [] (str chat/app-markup chat/js-files))
  (routing/GET  "/chsk" req (ring-ajax-get-or-ws-handshake req))
  (routing/POST "/chsk" req (ring-ajax-post                req))
  (route/files "" {:root "target"})
  (route/not-found "Not Found!!"))

(defn main-ring-handler
  []
  (ring.middleware.defaults/wrap-defaults ring-routes ring.middleware.defaults/site-defaults))

(defrecord AppHandler []
  component/Lifecycle
  (start [this]
         (assoc this :handler (main-ring-handler)))
  (stop [this]
        this))

(defn new-app-handler []
  (map->AppHandler {}))

(defrecord WebServer [app port]
  component/Lifecycle
  (start [this]
         (println (str "Starting server on port " port))
         (assoc this :http-server (http/run-server (:handler app) {:port port})))
  (stop [this]
        (when-let [http-server (:http-server this)]
          (println "Stopping server")
          (http-server)
          (dissoc this :http-server))))

(defn new-server
  [port]
  (map->WebServer {:port port}))

(defn server-system
  [config]
  (component/system-map
    :app (new-app-handler)
    :server (component/using (new-server (:port config))
                             [:app])))

(defn recieve-input
  []
  (let [input (read-line)]
    (println input))
  (recieve-input))

(defn -main
  []
  (component/start (server-system {:port 3000}))
  (recieve-input))
