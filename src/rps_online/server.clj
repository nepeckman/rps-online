(ns rps-online.server
  (:require [org.httpkit.server :as http]
            [com.stuartsierra.component :as component]))

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
