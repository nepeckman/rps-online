(set-env!
 :source-paths #{"src"}
 :resource-paths #{"resources"}
 :dependencies
 '[[adzerk/boot-cljs "1.7.228-1" :scope "test"]
   [adzerk/boot-cljs-repl "0.3.2" :scope "test"]
   [adzerk/boot-reload "0.4.11" :scope "test"]
   [weasel "0.7.0" :scope "test"] ;; Websocket Server
   [reloaded.repl "0.2.1" :scope "test"]

   [org.clojure/clojure "1.8.0"]
   [org.clojure/clojurescript "1.9.14"]

   [org.clojure/tools.nrepl "0.2.12"]

   ;; Needed for start-repl in cljs repl
   [com.cemerick/piggieback "0.2.1" :scope "test"]

   ;; Server deps
   [http-kit "2.2.0"]
   [compojure "1.5.1"]
   [com.stuartsierra/component "0.3.1"]

   ;; App deps
   [rum "0.10.5"]
   ])

(require '[adzerk.boot-cljs :refer [cljs]]
         '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
         '[adzerk.boot-reload :refer [reload]]
         '[com.stuartsierra.component :as component]
         'rps-online.core)

(deftask dev-front
  []
  (comp
    (component/start (rps-online.core/server-system {:port 3000}))
    (watch)
    (reload)
    (cljs)
    (target :dir #{"target"})))

(deftask dev-repl
  []
  (repl :init-ns 'rps-online.core))
