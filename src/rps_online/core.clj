(ns rps-online.core
  (:require [compojure.core :as routing]
            [compojure.route :as route]
            [org.httpkit.server :as http]
            [com.stuartsierra.component :as component]
            [rps-online.hello :as hello])
  (:gen-class))

(defn hello-handler
  []
  (routing/routes
    (routing/GET "/hello" [] (str hello/app-markup hello/js-files))))

(defn base-handler
  []
  (routing/routes
    (route/files "" {:root "target"})
    (route/not-found "Not Found!!")))

(defrecord AppHandler []
  component/Lifecycle
  (start [this]
         (assoc this :handler (routing/routes (hello-handler) (base-handler))))
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
