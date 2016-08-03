(ns rps-online.handler
  (:require [compojure.core :as routing]
            [compojure.route :as route]
            [ring.middleware.defaults]
            [com.stuartsierra.component :as component]))

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
