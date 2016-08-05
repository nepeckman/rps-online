(ns rps-online.client.data
  #?(:clj (:require [datascript.core :as d]
                    [clojure.core.async :as async :refer [go go-loop]])
     :cljs (:require [datascript.core :as d]
                     [rps-online.client.subscribers :refer [message-chan]]
                     [cljs.core.async :as async]))
  #?(:cljs (:require-macros [cljs.core.async.macros :refer [go go-loop]])))

#?(:clj (def message-chan (async/chan)))

(def conn (d/create-conn {:message/id {:db/unique :db.unique/identity}}))

(defn query-db
  [query db]
  (d/q query db))

(defn create-entity
  [entity db]
  (d/transact! db [entity]))

(go-loop []
         (let [{:keys [event ?data]} (async/<! message-chan)]
           (create-entity {:message/id (rand-int 1000) :message/text (get ?data 1)} @conn))
         (recur))