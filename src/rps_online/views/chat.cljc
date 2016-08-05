(ns rps-online.views.chat
  #?(:clj (:require [rum.core :as rum]
                    [rps-online.client.data :as data]
                    [clojure.core.async :as async :refer [go go-loop]])
     :cljs (:require [rum.core :as rum]
                     [rps-online.client.data :as data]
                     [cljs.core.async :as async]
                     [rps-online.client.subscribers  :as subscibers :refer [chsk-send! message-chan]]))
  #?(:cljs (:require-macros [cljs.core.async.macros :refer [go go-loop]])))

#?(:cljs (enable-console-print!))

#?(:clj (declare chsk-send! getElementById))

#?(:clj (def message-chan (async/chan)))


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
          [:div (let [db (rum/react data/conn)]
                  (data/query-db '[:find ?t :where [_ :message/text ?t]] db))])

(rum/defc app
          []
          [:div
            [:h1 "Chat app"]
            [:div (title) (msg-box) (send-btn) (message-comp)]])

#?(:clj (def js-files "<script type=\"text/javascript\" src=\"main.js\"></script>"))

#?(:clj  (def app-markup (rum/render-html (app)))
   :cljs (rum/mount (app) (js/document.querySelector "[data-reactroot]")))
