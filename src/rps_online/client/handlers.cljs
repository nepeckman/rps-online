(ns rps-online.client.handlers
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

(def server-pub (async/pub ch-chsk :id))

(def message-chan (chan))

(async/sub server-pub :chsk/recv message-chan)
