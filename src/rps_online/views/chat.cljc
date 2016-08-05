(ns rps-online.views.chat
  #?(:clj (:require [rum.core :as rum]
                    [datascript.core :as d]
                    [clojure.core.async :as async :refer [go go-loop]])
     :cljs (:require [rum.core :as rum]
                     [datascript.core :as d]
                     [cljs.core.async :as async]
                     [rps-online.client.handlers  :as handlers :refer [chsk-send! message-chan]]))
  #?(:cljs (:require-macros [cljs.core.async.macros :refer [go go-loop]])))

#?(:cljs (enable-console-print!))

#?(:clj (declare chsk-send! getElementById))

#?(:clj (def message-chan (async/chan)))

(def messages (atom []))

(go-loop []
         (let [{:keys [event ?data]} (async/<! message-chan)]
           (swap! messages conj (get ?data 1)))
         (recur))

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

(rum/defc message-comp < rum/reactive
          []
          [:div (for [message (rum/react messages)
                      :let [n (.indexOf (rum/react messages) message)]]
                  [:div {:key n} message])])

(rum/defc app
          []
          [:div
            [:h1 "Chat app"]
            [:div (title) (msg-box) (send-btn) (message-comp)]])

#?(:clj (def js-files "<script type=\"text/javascript\" src=\"main.js\"></script>"))

#?(:clj  (def app-markup (rum/render-html (app)))
   :cljs (rum/mount (app) (js/document.querySelector "[data-reactroot]")))
