(ns playground.subs
  (:require [re-frame.core :as rf]))

(rf/reg-sub
 :article
 (fn [db _]
   (:article db)))

(rf/reg-sub
 :article/url
 :<- [:article]
 (fn [article _]
   (:url article)))

(rf/reg-sub
 :article/text
 :<- [:article]
 (fn [article _]
   (js/console.log "texto: " (clj->js (:text article)))
   (:text article)))
