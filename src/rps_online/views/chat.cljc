(ns rps-online.views.chat
  #?(:clj (:require [rum.core :as rum]
                    [rps-online.client.data :as data]
                    [clojure.core.async :as async]
                    [clj-time.core :as t]
                    [clj-time.coerce :as c])
     :cljs (:require [rum.core :as rum]
                     [rps-online.client.data :as data]
                     [cljs.core.async :as async]
                     [rps-online.client.subscribers :as subscibers :refer [fire-event message-chan]]
                     [cljs-time.core :as t]
                     [cljs-time.coerce :as c])))

#?(:cljs (enable-console-print!))

#?(:clj (declare fire-event getElementById))

#?(:clj (def message-chan (async/chan)))


#?(:cljs (defn getElementById
           [id]
           (.getElementById js/document id)))

(defn message-data
  []
  (let [msg (.-value (getElementById "msg-box"))
        date (c/to-long (t/now))]
    {:msg msg
     :date date}))

(rum/defc title
          []
          [:div "Send a message!"])

(rum/defc msg-box
          []
          [:input#msg-box])

(rum/defc send-btn
          []
          [:button {:on-click #(fire-event {:event :send-message :data [:client/message (message-data)]})} "Send!"])

(rum/defc message-comp < rum/reactive
          []
          [:div (let [db (rum/react data/conn)
                      message-set (data/query-db '[:find ?text ?time :where [?e :message/text ?text] [?e :message/date ?time]] db)
                      messages (into [] message-set)]
                  (for [message messages
                        :let [n (.indexOf messages message)]]
                    [:div {:key n} (-> (get message 1) (c/from-long) (c/to-date) (.toTimeString)) " someone: " (first message)]))])

(rum/defc app
          []
          [:div
            [:h1 "Chat app"]
            [:div (title) (msg-box) (send-btn) (message-comp)]])

#?(:clj (def js-files "<script type=\"text/javascript\" src=\"main.js\"></script>"))

#?(:clj  (def app-markup (rum/render-html (app)))
   :cljs (rum/mount (app) (js/document.querySelector "[data-reactroot]")))
