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

(defn send-message!
  [channel-send-fn connected-uids message]
  (doseq [uid (:any @connected-uids)]
    (channel-send-fn uid [:server/message message])))

(defn dispatcher
  [send-fn connected-uids event]
  (:id event))

(defmulti -event-msg-handler dispatcher)

(defmethod -event-msg-handler :client/message
  [channel-send-fn connected-uids {:as ev-msg :keys [event id ?data uid]}]
  (println ?data)
  (println uid)
  (send-message! channel-send-fn connected-uids (:msg ?data)))

(defmethod -event-msg-handler :default
  [channel-send-fn connected-uids {:as ev-msg :keys [event id]}]
  (println event)
  (println id))

(defn event-msg-handler
  [channel-send-fn connected-uids event]
  (-event-msg-handler channel-send-fn connected-uids event))

(defrecord ChannelSocketServer []
  component/Lifecycle
  (start [this]
         (let [{:keys [ch-recv send-fn connected-uids ajax-post-fn ajax-get-or-ws-handshake-fn]}
               (sente/make-channel-socket! (get-sch-adapter) {:user-id-fn (fn [ring-req] (:client-id ring-req))})]
           (assoc this :ring-ajax-post ajax-post-fn
                       :ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn
                       :ch-chsk ch-recv
                       :chsk-send! send-fn
                       :connected-uids connected-uids)))
  (stop [this]
        this))

(defn new-channel-socket-server []
  (map->ChannelSocketServer {}))

(defrecord WebsocketEventHandler [channel-socket-server event-handler]
  component/Lifecycle
  (start [this]
         (println "Starting websocket event handler")
         (assoc this :router (sente/start-server-chsk-router! (:ch-chsk channel-socket-server) (partial event-handler (:chsk-send! channel-socket-server) (:connected-uids channel-socket-server)))))
  (stop [this]
        (when-let [router (:router this)]
          (println "Stopping websocket event handler")
          (router))))

(defn new-websocket-event-handler [event-handler]
  (map->WebsocketEventHandler {:event-handler event-handler}))

(defrecord ChatEndpoint []
  component/Lifecycle
  (start [this]
         (assoc this :route (routing/routes
                              (routing/GET "/chat" [] (str chat/app-markup chat/js-files)))))
  (stop [this]
        (dissoc this :route)))

(defn new-chat-endpoint []
  (map->ChatEndpoint {}))

(defrecord ChannelSocketEndpoint [channel-socket-server]
  component/Lifecycle
  (start [this]
         (assoc this :route (routing/routes
                              (routing/GET  "/chsk" req ((:ring-ajax-get-or-ws-handshake channel-socket-server) req))
                              (routing/POST "/chsk" req ((:ring-ajax-post channel-socket-server)                req)))))
  (stop [this]
        (dissoc this :route)))

(defn new-channel-socket-endpoint []
  (map->ChannelSocketEndpoint {}))

(defrecord AppHandler [chat-endpoint channel-socket-endpoint]
  component/Lifecycle
  (start [this]
         (assoc this :handler (ring.middleware.defaults/wrap-defaults (routing/routes
                                                                        (:route chat-endpoint)
                                                                        (:route channel-socket-endpoint)
                                                                        (route/files "" {:root "target"})
                                                                        (route/not-found "Not Found!!!"))
                                                                      ring.middleware.defaults/site-defaults)))
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
    :channel-socket-server (new-channel-socket-server)
    :websocket-event-handler (component/using (new-websocket-event-handler (get-in config [:websocket-event-handler :event-handler]))
                                              [:channel-socket-server])
    :chat-endpoint (new-chat-endpoint)
    :channel-socket-endpoint (component/using (new-channel-socket-endpoint)
                                              [:channel-socket-server])
    :app (component/using (new-app-handler)
                          [:chat-endpoint :channel-socket-endpoint])
    :server (component/using (new-server (get-in config [:server :port] 3000))
                             [:app])))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def system-config
  {})

(defn recieve-input
  []
  (let [input (read-line)]
    (println input))
  (recieve-input))

(defn -main
  []
  (component/start (server-system system-config))
  (recieve-input))
