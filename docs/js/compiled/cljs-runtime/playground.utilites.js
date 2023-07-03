goog.provide('playground.utilites');
var module$node_modules$$mui$material$node$index=shadow.js.require("module$node_modules$$mui$material$node$index", {});
/**
 * Specify the vector of color and intensity (keys)
 */
playground.utilites.color = (function playground$utilites$color(p__47242){
var vec__47243 = p__47242;
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47243,(0),null);
var intensity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47243,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(module$node_modules$$mui$material$node$index.colors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color,intensity], null));
});
playground.utilites.associate_by = (function playground$utilites$associate_by(f,coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(f,cljs.core.identity),coll));
});
playground.utilites.coerced_to_keyword = (function playground$utilites$coerced_to_keyword(k){
if(typeof k === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
} else {
return null;
}
});
/**
 * Coerces String values to keyword at specific keys in a nested data structure.
 * 
 *   Given:
 *   - `enum-typed-keys`: a Set of keys
 *   - `x`: a (potentially nested) data structure
 * 
 *   Replaces any Map entry [k v] where k is in `enum-typed-keys`
 *   so that v gets transformed to a Keyword.
 */
playground.utilites.keywordize_at_keys = (function playground$utilites$keywordize_at_keys(enum_typed_keys,x){
return clojure.walk.postwalk((function (e){
var or__5045__auto__ = (function (){var and__5043__auto__ = cljs.core.map_entry_QMARK_(e);
if(and__5043__auto__){
var vec__47249 = e;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47249,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47249,(1),null);
if(cljs.core.contains_QMARK_(enum_typed_keys,k)){
var temp__5808__auto__ = playground.utilites.coerced_to_keyword(v);
if((temp__5808__auto__ == null)){
return null;
} else {
var v1 = temp__5808__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null);
}
} else {
return null;
}
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return e;
}
}),x);
});

//# sourceMappingURL=playground.utilites.js.map
