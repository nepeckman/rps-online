(set-env!
 :source-paths #{"src"}
 :resource-paths #{"resources" "src"}
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
   [ring "1.5.0"]
   [ring/ring-defaults "0.2.1"]
   [compojure "1.5.1"]
   [com.stuartsierra/component "0.3.1"]
   [org.clojure/core.async "0.2.385"]

   ;; App deps
   [rum "0.10.5"]
   [com.taoensso/sente "1.10.0"]
   ])

(require '[adzerk.boot-cljs :refer [cljs]]
         '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
         '[adzerk.boot-reload :refer [reload]]
         'rps-online.core
         'dev)

(task-options!
  pom {:project 'rps-online
       :version "0.0.1"}
  aot {:all true}
  uber {:as-jars true}
  web {:serve 'rps-online.core/main}
  jar {:main 'rps-online.core
       :manifest {"Description" "RPS ONLINE"}})

(deftask dev
  []
  (comp
    (watch)
    (reload)
    (cljs)
    (target :dir #{"target"})))

(deftask dev-repl
  []
  (repl :init-ns 'dev))

(deftask build
  []
  (comp
    (cljs :optimizations :advanced)
    (target :dir #{"target"})))

(deftask uberjar
  []
  (comp (aot) (pom) (uber) (jar) (target :dir #{"deploy-test"})))
