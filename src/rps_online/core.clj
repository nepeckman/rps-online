(ns rps-online.core
  (:require [compojure.core :as routing]
            [compojure.route :as route]
            [aleph.http :as http]
            [hello]))

(println hello/app)

(def js-files "<script type=\"text/javascript\" src=\"main.js\"></script>")

(routing/defroutes app
                   (route/files "" {:root "target"})
                   (routing/GET "/hello" [] (str (rum/render-html (hello/app)) js-files))
                   (route/not-found "Not found"))

(defn main
  []
  (println "Server starting on port 3000")
  (http/start-server app {:port 3000}))
