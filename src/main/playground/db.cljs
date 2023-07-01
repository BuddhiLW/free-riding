(ns playground.db
  (:require
   [reagent.core :as r]))
  ;; (:require
  ;;  [playground.auth.events]))
   ;; [playground.spec :refer [check-spec-interceptor]]
   ;; [re-frame.core :as rf]))

(def db
  (r/atom
   {:article {:url "duckduckgo.com"
              :text ""}
    :errors []}))
