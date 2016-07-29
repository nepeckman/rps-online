(ns dev
  (:require [com.stuartsierra.component :as component]
            [clojure.tools.namespace.repl :refer (refresh refresh-all)]
            [rps-online.core :as rps]))

(def dev-system (rps/server-system {:port 3000}))

(defn init
  []
  (println "Trying to init the system")
  (alter-var-root #'dev-system (constantly (rps/server-system {:port 3000}))))

(defn start
  []
  (println "Trying to start the system")
  (alter-var-root #'dev-system component/start))

(defn stop
  []
  (println "Trying to stop the system")
  (alter-var-root #'dev-system component/stop))

(defn go
  []
  (init)
  (start))

(defn reset
  []
  (stop)
  (require '[rps-online.core :as rps] :reload)
  (go))
