(ns rps-online.views.chat
  #?(:clj (:require [rum.core :as rum])
     :cljs (:require [rum.core :as rum]
                     [cljs.core.async :as async]
                     [rps-online.client.handlers  :as handlers :refer [chsk-send!]]))
  #?(:require-macros [cljs.core.async.macros :refer [go go-loop]]))

#?(:cljs (enable-console-print!))

#?(:clj (declare chsk-send! getElementById))


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
