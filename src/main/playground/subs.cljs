(ns playground.subs
  (:require [re-frame.core :as rf]))

(rf/reg-sub
 :article/url
 (fn [db _]
   (get-in db [:article :url])))
