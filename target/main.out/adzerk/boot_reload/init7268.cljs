(ns adzerk.boot-reload.init7268 (:require [adzerk.boot-reload.client :as client]))
(client/connect "ws://localhost:56535" {:ws-host nil, :asset-host nil, :on-jsload (fn* [] (+))})