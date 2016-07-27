(ns adzerk.boot-reload.init12867 (:require [adzerk.boot-reload.client :as client]))
(client/connect "ws://localhost:52100" {:ws-host nil, :asset-host nil, :on-jsload (fn* [] (+))})