(ns playground.components.form-group
  (:require
   ["@mui/material" :refer [FormControl Grid Input Typography]]
   [clojure.string :as str]
   [playground.utilites :as util]
   [re-frame.core :as rf]
   [reagent.core :as r]))

(def r-input
  (r/reactify-component
   (fn [props]
     [:input (dissoc props :ref)])))

(defn form-group
  [{:keys [id label type values  & not-deref? text-area? on-key-down]}]
  [:> FormControl {:full-width true}
   [:> Grid {:container true
             :display "flex"
             :flex-direction "column"}
    [:> Grid {:item true
              :sx {:justify-content "center"}
              :class-name "pl-1 text-slate-700"
              :html-for id
              :font-weight 500
              :component "h4"}
     [:p label
      [:> Grid {:item true}
       [:> Input {:variant "outlined"
                  :inputComponent r-input
                  :value (if not-deref? (id values) (id @values))
                  :type type
                  :on-change #(swap! values assoc id (.. % -target -value))
                  :full-width true
                  :multiline true
                  :rows (if text-area? 4 1)
                  :on-key-down on-key-down}]]]]]])
                  ;; :on-key-up (when-not (str/blank? (id @values)) validate)}]]]]]])
                  ;; :on-blur validate
                  ;; :error error}]]]]]])

       ;; (when error
       ;;   [:> Typography {:variant "caption"
       ;;                   :color (util/color [:red :600])
       ;;                   :sx {:mt 1}}])]]]]])
          ;; [:p input-error]])]]]]])
