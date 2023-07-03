goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__37722 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__37723 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__37723);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__37729 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__37730 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__37730);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__37729);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__37722);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__37750 = arguments.length;
switch (G__37750) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__37760 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37760,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37760,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__37784_37841 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__37785_37842 = null;
var count__37786_37843 = (0);
var i__37787_37844 = (0);
while(true){
if((i__37787_37844 < count__37786_37843)){
var vec__37811_37845 = chunk__37785_37842.cljs$core$IIndexed$_nth$arity$2(null,i__37787_37844);
var container_37846 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37811_37845,(0),null);
var comp_37847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37811_37845,(1),null);
reagent.dom.re_render_component(comp_37847,container_37846);


var G__37849 = seq__37784_37841;
var G__37850 = chunk__37785_37842;
var G__37851 = count__37786_37843;
var G__37852 = (i__37787_37844 + (1));
seq__37784_37841 = G__37849;
chunk__37785_37842 = G__37850;
count__37786_37843 = G__37851;
i__37787_37844 = G__37852;
continue;
} else {
var temp__5804__auto___37857 = cljs.core.seq(seq__37784_37841);
if(temp__5804__auto___37857){
var seq__37784_37858__$1 = temp__5804__auto___37857;
if(cljs.core.chunked_seq_QMARK_(seq__37784_37858__$1)){
var c__5568__auto___37859 = cljs.core.chunk_first(seq__37784_37858__$1);
var G__37861 = cljs.core.chunk_rest(seq__37784_37858__$1);
var G__37862 = c__5568__auto___37859;
var G__37863 = cljs.core.count(c__5568__auto___37859);
var G__37864 = (0);
seq__37784_37841 = G__37861;
chunk__37785_37842 = G__37862;
count__37786_37843 = G__37863;
i__37787_37844 = G__37864;
continue;
} else {
var vec__37816_37866 = cljs.core.first(seq__37784_37858__$1);
var container_37867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37816_37866,(0),null);
var comp_37868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37816_37866,(1),null);
reagent.dom.re_render_component(comp_37868,container_37867);


var G__37871 = cljs.core.next(seq__37784_37858__$1);
var G__37872 = null;
var G__37873 = (0);
var G__37874 = (0);
seq__37784_37841 = G__37871;
chunk__37785_37842 = G__37872;
count__37786_37843 = G__37873;
i__37787_37844 = G__37874;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
