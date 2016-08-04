(ns rps-online.websockets
  (:require [taoensso.sente :as sente]
            [taoensso.sente.server-adapters.http-kit :refer (get-sch-adapter)]
            [com.stuartsierra.component :as component]))

(defn id-user
  [ring-req]
  (:client-id ring-req))

(defrecord ChannelSocketServer [user-id-fn]
  component/Lifecycle
  (start [this]
         (let [{:keys [ch-recv send-fn connected-uids ajax-post-fn ajax-get-or-ws-handshake-fn]}
               (sente/make-channel-socket! (get-sch-adapter) {:user-id-fn user-id-fn})]
           (assoc this :ring-ajax-post ajax-post-fn
                       :ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn
                       :ch-chsk ch-recv
                       :chsk-send! send-fn
                       :connected-uids connected-uids)))
  (stop [this]
        this))

(defn new-channel-socket-server [user-id-fn]
  (map->ChannelSocketServer {:user-id-fn user-id-fn}))
