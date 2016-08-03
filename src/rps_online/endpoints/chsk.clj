(ns rps-online.endpoints.chsk
  (:require [compojure.core :as compojure]
            [com.stuartsierra.component :as component]))

(defrecord ChannelSocketEndpoint [channel-socket-server]
  component/Lifecycle
  (start [this]
         (assoc this :route (compojure/routes
                              (compojure/GET  "/chsk" req ((:ring-ajax-get-or-ws-handshake channel-socket-server) req))
                              (compojure/POST "/chsk" req ((:ring-ajax-post channel-socket-server)                req)))))
  (stop [this]
        (dissoc this :route)))

(defn new-channel-socket-endpoint []
  (map->ChannelSocketEndpoint {}))
