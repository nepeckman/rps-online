(ns dev
  (:require [com.stuartsierra.component :as component]
            [clojure.tools.namespace.repl :refer (refresh refresh-all)]
            [rps-online.core :as rps]))

(def dev-system {})

(def namespace-deps
  [
    {:name "rps-online.chat" :deps []}
    {:name "rps-online.core" :deps ['[rps-online.chat :as chat]]}
    {:name "dev" :deps ['[rps-online.core :as rps]]}])

(defn reload-namespaces
  "Uses the namespace dependancy map to reload every namespace, and reload their dependancies"
  []
  (require 'dev :reload)
  (doseq [namespace-map namespace-deps]
    (eval `(ns ~(symbol (:name namespace-map))))
    (require (symbol (:name namespace-map)) :reload)
    (doseq [dep (:deps namespace-map)]
      (require dep :reload)))
  (ns dev))

(def system-config
  {:server {:port 3000}
   :websocket-event-handler {:event-handler rps/event-msg-handler}})

(defn init
  "Load a new server system into the dev-system var"
  []
  (println "Trying to init the system")
  (alter-var-root #'dev-system (constantly (rps/server-system system-config))))

(defn start
  "Starts the server system in the dev-system var"
  []
  (println "Trying to start the system")
  (alter-var-root #'dev-system component/start))

(defn stop
  []
  "Stops the server system in the dev-system var"
  (println "Trying to stop the system")
  (alter-var-root #'dev-system component/stop))

(defn go
  []
  "Initializes a new server system and starts it"
  (init)
  (start))

(defn reset
  []
  "Stops the existing server system, reloads the namespaces, and starts a new server system"
  (stop)
  (reload-namespaces)
  (go))
