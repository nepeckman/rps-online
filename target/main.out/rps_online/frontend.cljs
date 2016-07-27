(ns rps-online.frontend
  (:require [rum.core :as rum]))

(defn getElementById
  [element]
  (.getElementById js/document element))

(rum/defc title
          []
          [:div "This is the title"])

(rum/defcs counter < (rum/local 0 ::key)
          [state label]
          (let [local-atom (::key state)]
            [:div {:on-click #(swap! local-atom inc)}
             label ": " @local-atom]))

(rum/defc r-app
          []
          [:div (title) (counter "Clicks")])

(rum/defc page
          []
          [:div
            [:h1 "hello"]
            [:div {:id "app"} (r-app)]])

(rum/mount (page) (js/document.querySelector "[data-reactroot]"))
