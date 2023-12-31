(ns playground.core
  (:require
   ["@mui/material" :refer [Box Card colors Grid
                            Typography Button]]
   [goog.dom :as gdom]
   [playground.db]
   [playground.events]
   [playground.subs]
   [re-frame.core :as rf]
   [reagent.core :as r]
   [reagent.dom :as rdom]
   [playground.components.form-group :refer [form-group]]))

(defn title
  []
  [:> Grid {:position "relative"
            :border-radius "12px"
           ;; :width 400
            :mb 3}
   [:> Box {:sx {:width "100 vw"
                 ;; :height
                 :display "flex"
                 :align-items "center"
                 :justify-content "center"
                 :bgcolor (get-in (js->clj colors :keywordize-keys true) [:indigo :50])
                 :border 1
                 :border-radius 1}
            :my "auto"}
    [:> Typography
     {:variant "h5"}
     [:p
      "Read your news article..."]
     [:p
      "Provided by " [:b "Lynx!"]]]]])

(defn upload-file-page
  []
  (let [url @(rf/subscribe [:article/url])
        initial-values {:url url}
        values (r/atom initial-values)]
    (fn []
      (let [text @(rf/subscribe [:article/text])]
        [:<>
         [:> Typography {:variant "h4"
                         :align "center"
                         :my 2}
          "Free your pay-wall"]
         [:> Grid
          {:container true
           :sx {:min-width "70vw"
                :margin "auto"
                :mb "2em"}
           :sm {:min-width "90vw"}
           :md {:min-width "80vw"}
           :lg {:min-width "60vw"}}
          [form-group {:id :url
                       :label "Website url:"
                       :type "text"
                       :values values}]
          [:> Button {:variant "contained"
                      :color "primary"
                      :onClick #(rf/dispatch [:article/fetch-url @values])}
           "Fetch article"]]

         [title]
         [:> Card {:sx {:min-width "95vw"
                        :height "65vh"
                        :margin "auto"
                        :mb "2em"
                        :inline-size "50vw"
                        :overflow-wrap "break-word"
                        :overflow-y "scroll"}
                   :sm {:min-width "90vw"}
                   :md {:min-width "80vw"}
                   :lg {:min-width "60vw"}}
          [:> Grid
           {:container true
            :direction "column"
            :align-items "left"
            :justify-content "left"
            :max-width "95vw"
            :sx {:min-width "95vw"
                 :height "65vh"
                 :margin "auto"
                 :mb "2em"
                 :word-break "break-all"
                 :inline-size "50vw"
                 :overflow-wrap "break-word"
                 :overflow-y "scroll"}
            :sm {:min-width "90vw"}
            :md {:min-width "80vw"}
            :lg {:min-width "60vw"}
            :class-name "article-text"}
           [:> Box
            [:> Typography {:align "left"
                            :font-size "1em"}
             [:pre.article-text
              {:style {:white-space "pre-wrap"
                       :word-break "break-all"
                       :overflow-wrap "break-word"
                       :max-width "100%"}}
              text]]]]]]))))

(defn- main []
  [:main.container.mx-auto.pt-5
   [upload-file-page]])

;; -----------------------------------------------------------------------------

(defn get-app-element []
  (gdom/getElement "app"))

(defn mount-view
  [view el]
  (rdom/unmount-component-at-node el)
  (rdom/render view el))

(defn ^:dev/after-load inicialize
  []
  (rf/dispatch-sync [:prod/inicialize-db])
  (let [root-el (get-app-element)]
    (mount-view [main] root-el)))

(defn ^:export init
  []
  ;; (rf/clear-subscription-cache!)
  (inicialize))

;; (init)
