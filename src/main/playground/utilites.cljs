(ns playground.utilites
  (:require
   ["@mui/material" :refer [colors]]
   [clojure.walk :as walk]))

(defn color
  "Specify the vector of color and intensity (keys)"
  [[color intensity]]
  (get-in (js->clj colors :keywordize-keys true) [color intensity]))

;;
(defn associate-by [f coll]
  (into {} (map (juxt f identity) coll)))

;;
(defn- coerced-to-keyword
  [k]
  (when (string? k)
    (keyword k)))

;;
(defn keywordize-at-keys
  "Coerces String values to keyword at specific keys in a nested data structure.

  Given:
  - `enum-typed-keys`: a Set of keys
  - `x`: a (potentially nested) data structure

  Replaces any Map entry [k v] where k is in `enum-typed-keys`
  so that v gets transformed to a Keyword."
  [enum-typed-keys x]
  (walk/postwalk
   (fn [e]
     (or
      (and
       (map-entry? e)
       (let [[k v] e]
         (when (contains? enum-typed-keys k)
           (when-some [v1 (coerced-to-keyword v)]
             [k v1]))))
      e))
   x))
