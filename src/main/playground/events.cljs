(ns playground.events
  (:require
   [playground.db :refer [db]]
   [re-frame.core :as rf]))

(rf/reg-event-db
 :prod/inicialize-db
 ;; [(rf/inject-cofx :local-store-user)
 ;;  check-spec-interceptor]
 (fn [_ _]
   @db))  ;; [{:keys [local-store-user]} _]
   ;; {:db (assoc initial-app-db :auth local-store-user)}
