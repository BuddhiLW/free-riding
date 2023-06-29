(ns playground.db
  (:require
   [reagent.core :as r]))
  ;; (:require
  ;;  [playground.auth.events]))
   ;; [playground.spec :refer [check-spec-interceptor]]
   ;; [re-frame.core :as rf]))

(def db
  (r/atom
   {:article {:url "https://www.estadao.com.br/politica/blog-do-fausto-macedo/dia-d-julgamento-bolsonaro-inelegivel-tse-reuniao-embaixadores/"
              :text ""}
    :errors []}))
