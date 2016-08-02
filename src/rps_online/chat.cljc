(ns rps-online.chat
  (:require [rum.core :as rum]
            [taoensso.sente  :as sente]))

#?(:cljs (enable-console-print!))

(declare chsk ch-chsk chsk-send! getElementById)
(defmulti event-msg-handler :id)

#?(:cljs (let [{:keys [chsk ch-recv send-fn state]} (sente/make-channel-socket! "/chsk" {:type :auto})]
              (def chsk       chsk)
              (def ch-chsk    ch-recv)
              (def chsk-send! send-fn)
              (def chsk-state state)))

#?(:cljs (defmethod event-msg-handler :chsk/recv
           [{:as ev-msg :keys [event ?data]}]
           (println (get ?data 1))))

#?(:cljs (defmethod event-msg-handler :chsk/handshake
           [{:as ev-msg :keys [event ?data]}]
           (println "Connection started!")))

#?(:cljs (defmethod event-msg-handler :chsk/state
           [{:as ev-msg :keys [event ?data]}]
           (println "Channel socket state change")))

#?(:cljs (defmethod event-msg-handler :default
           [{:as ev-msg :keys [event]}]
           (println "Unhandled Event")
           (println event)))

#?(:cljs (sente/start-client-chsk-router! ch-chsk event-msg-handler))

#?(:cljs (defn getElementById
           [id]
           (.getElementById js/document id)))

(rum/defc title
          []
          [:div "Send a message!"])

(rum/defc msg-box
          []
          [:input#msg-box])

(rum/defc send-btn
          []
          [:button {:on-click #(chsk-send! [:client/message {:msg (.-value (getElementById "msg-box"))}])} "Send!"])

(rum/defc app
          []
          [:div
            [:h1 "Chat app"]
            [:div (title) (msg-box) (send-btn)]])

#?(:clj (def js-files "<script type=\"text/javascript\" src=\"main.js\"></script>"))

#?(:clj  (def app-markup (rum/render-html (app)))
   :cljs (rum/mount (app) (js/document.querySelector "[data-reactroot]")))
