(ns rps-online.core
  (:require [com.stuartsierra.component :as component]
            [rps-online.server :as server]
            [rps-online.endpoints.chat :as chat]
            [rps-online.endpoints.chsk :as chsk]
            [rps-online.handler :as handler]
            [rps-online.websockets :as websockets]
            [rps-online.events :as events])
  (:gen-class))

(defn server-system
  [config]
  (component/system-map
    :channel-socket-server (websockets/new-channel-socket-server (get-in config [:channel-socket-server :user-id-fn]))
    :websocket-event-handler (component/using (events/new-websocket-event-handler (get-in config [:websocket-event-handler :event-handler]))
                                              [:channel-socket-server])
    :chat-endpoint (chat/new-chat-endpoint)
    :channel-socket-endpoint (component/using (chsk/new-channel-socket-endpoint)
                                              [:channel-socket-server])
    :app (component/using (handler/new-app-handler)
                          [:chat-endpoint :channel-socket-endpoint])
    :server (component/using (server/new-server (get-in config [:server :port] 3000))
                             [:app])))


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
