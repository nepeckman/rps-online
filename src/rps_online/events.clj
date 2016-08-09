(ns rps-online.events
  (:require [taoensso.sente :as sente]
            [com.stuartsierra.component :as component]))

(defn send-message!
  [channel-send-fn connected-uids data]
  (doseq [uid (:any @connected-uids)]
    (channel-send-fn uid [:server/message data])))

(defn dispatcher
  [channel-socket-server event]
  (:id event))

(defmulti -event-msg-handler dispatcher)

(defmethod -event-msg-handler :client/message
  [channel-socket-server {:as ev-msg :keys [event id ?data uid]}]
  (println ?data)
  (println uid)
  (send-message! (:chsk-send! channel-socket-server) (:connected-uids channel-socket-server) ?data))

(defmethod -event-msg-handler :default
  [channel-socket-server {:as ev-msg :keys [event id]}]
  (println event)
  (println id))

(defn event-msg-handler
  [channel-socket-server event]
  (-event-msg-handler channel-socket-server event))

(defrecord WebsocketEventHandler [channel-socket-server event-handler]
  component/Lifecycle
  (start [this]
         (println "Starting websocket event handler")
         (assoc this :router (sente/start-server-chsk-router! (:ch-chsk channel-socket-server) (partial event-handler channel-socket-server))))
  (stop [this]
        (when-let [router (:router this)]
          (println "Stopping websocket event handler")
          (router))))

(defn new-websocket-event-handler [event-handler]
  (map->WebsocketEventHandler {:event-handler event-handler}))
