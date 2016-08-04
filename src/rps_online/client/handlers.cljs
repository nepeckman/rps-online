(ns rps-online.client.handlers
  (:require [taoensso.sente  :as sente]))

(enable-console-print!)

(let [{:keys [chsk ch-recv send-fn state]} (sente/make-channel-socket! "/chsk" {:type :auto})]
              (def chsk       chsk)
              (def ch-chsk    ch-recv)
              (def chsk-send! send-fn)
              (def chsk-state state))

(defmulti event-msg-handler :id)

(defmethod event-msg-handler :chsk/recv
           [{:as ev-msg :keys [event ?data]}]
           (println (get ?data 1)))

(defmethod event-msg-handler :chsk/handshake
           [{:as ev-msg :keys [event ?data]}]
           (println "Connection started!"))

(defmethod event-msg-handler :chsk/state
           [{:as ev-msg :keys [event ?data]}]
           (println "Channel socket state change"))

(defmethod event-msg-handler :default
           [{:as ev-msg :keys [event]}]
           (println "Unhandled Event")
           (println event))

(sente/start-client-chsk-router! ch-chsk event-msg-handler)
