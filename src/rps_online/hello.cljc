(ns rps-online.hello
  (:require [rum.core :as rum]))

#?(:clj (def js-files "<script type=\"text/javascript\" src=\"main.js\"></script>"))

(rum/defc title
          []
          [:div "This is the title"])

(rum/defcs counter < (rum/local 0 ::key)
          [state label]
          (let [local-atom (::key state)]
            [:div {:on-click #(swap! local-atom inc)}
             label ": " @local-atom]))

(rum/defc app
          []
          [:div
            [:h1 "hello"]
            [:div (title) (counter "Clicks")]])

#?(:clj  (def app-markup (rum/render-html (app)))
   :cljs (rum/mount (app) (js/document.querySelector "[data-reactroot]")))
