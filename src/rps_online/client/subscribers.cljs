(ns rps-online.client.subscribers
  (:require [taoensso.sente  :as sente]
            [cljs.core.async :as async :refer [>! <! put! chan]]
            [datascript.core :as d])
  (:require-macros [cljs.core.async.macros :as asyncm :refer [go go-loop]]))

(enable-console-print!)

(let [{:keys [chsk ch-recv send-fn state]} (sente/make-channel-socket! "/chsk" {:type :auto})]
              (def chsk       chsk)
              (def ch-chsk    ch-recv)
              (def chsk-send! send-fn)
              (def chsk-state state))

(def message-chan (chan))

(def server-pub (async/pub ch-chsk :id))
(async/sub server-pub :chsk/recv message-chan)

(def event-input-chan (chan))
(def new-message-chan (chan))

(def event-pub (async/pub event-input-chan :event))
(async/sub event-pub :send-message new-message-chan)

(go-loop []
         (let [data (:data (<! new-message-chan))]
           (chsk-send! data))
         (recur))

(defn fire-event
  [event]
  (go (>! event-input-chan event)))
