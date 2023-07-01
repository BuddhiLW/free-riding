(ns playground.events
  (:require
   [ajax.core :as ajax :refer [GET POST]]
   [day8.re-frame.http-fx]
   [playground.db :refer [db]]
   [re-frame.core :as rf]))

(def lynx-endpoint "http://localhost:8181")

(rf/reg-event-db
 :prod/inicialize-db
 ;; [(rf/inject-cofx :local-store-user)
 ;;  check-spec-interceptor]
 (fn [_ _]
   @db))  ;; [{:keys [local-store-user]} _]
   ;; {:db (assoc initial-app-db :auth local-store-user)}

(rf/reg-event-fx
 :article/fetch-url
 (fn [{:keys [db]} [_ {:keys [url]}]]
   (js/console.log "fetching url: " (str lynx-endpoint "/free-riding/" (js/encodeURIComponent url)))
   {:db (assoc-in db [:article :url] url)
    :http-xhrio {:method          :get
                 :uri             (str lynx-endpoint "/free-riding/" (js/encodeURIComponent url))
                 :timeout          8000
                 :response-format (ajax/text-response-format)
                 :on-success      [:article/set-text]
                 :on-failure      [:error/endpoint-request :get-article]}}))

(rf/reg-event-db
 :article/set-text
 (fn [db [_ response]]
   (js/console.log "response: " response)
   (assoc-in db [:article :text] response)))

(rf/reg-event-db
 :error/endpoint-request
 (fn [db [_ request-type response]]
   (js/console.error "error: " request-type ": " response)
   (-> db
       (assoc-in [:errors request-type] (get response :status-text)))))

(comment
  (defn handler [response]
    (.log js/console (str response)))
  (js->clj
   (GET (str "https://free-riding-paywalls.onrender.com" (js/encodeURIComponent "https://davidbacisin.com/writing/using-fasthttp-for-api-requests-golang"))
     {:handler handler})))
