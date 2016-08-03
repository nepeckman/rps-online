(ns rps-online.endpoints.chat
  (:require [compojure.core :as compojure]
            [com.stuartsierra.component :as component]
            [rps-online.views.chat :as view]))

(defrecord ChatEndpoint []
  component/Lifecycle
  (start [this]
         (assoc this :route (compojure/routes
                              (compojure/GET "/chat" [] (str view/app-markup view/js-files)))))
  (stop [this]
        (dissoc this :route)))

(defn new-chat-endpoint []
  (map->ChatEndpoint {}))
