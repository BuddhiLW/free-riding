goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = true;
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__35900){
var map__35903 = p__35900;
var map__35903__$1 = cljs.core.__destructure_map(map__35903);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35903__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35903__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35903__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35903__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__35909_35947 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__35910_35948 = null;
var count__35911_35949 = (0);
var i__35912_35950 = (0);
while(true){
if((i__35912_35950 < count__35911_35949)){
var vec__35926_35951 = chunk__35910_35948.cljs$core$IIndexed$_nth$arity$2(null,i__35912_35950);
var k_35952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35926_35951,(0),null);
var cb_35953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35926_35951,(1),null);
try{var G__35930_35958 = cljs.core.deref(re_frame.trace.traces);
(cb_35953.cljs$core$IFn$_invoke$arity$1 ? cb_35953.cljs$core$IFn$_invoke$arity$1(G__35930_35958) : cb_35953.call(null,G__35930_35958));
}catch (e35929){var e_35962 = e35929;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_35952,"while storing",cljs.core.deref(re_frame.trace.traces),e_35962], 0));
}

var G__35963 = seq__35909_35947;
var G__35964 = chunk__35910_35948;
var G__35965 = count__35911_35949;
var G__35966 = (i__35912_35950 + (1));
seq__35909_35947 = G__35963;
chunk__35910_35948 = G__35964;
count__35911_35949 = G__35965;
i__35912_35950 = G__35966;
continue;
} else {
var temp__5804__auto___35967 = cljs.core.seq(seq__35909_35947);
if(temp__5804__auto___35967){
var seq__35909_35968__$1 = temp__5804__auto___35967;
if(cljs.core.chunked_seq_QMARK_(seq__35909_35968__$1)){
var c__5568__auto___35969 = cljs.core.chunk_first(seq__35909_35968__$1);
var G__35970 = cljs.core.chunk_rest(seq__35909_35968__$1);
var G__35971 = c__5568__auto___35969;
var G__35972 = cljs.core.count(c__5568__auto___35969);
var G__35973 = (0);
seq__35909_35947 = G__35970;
chunk__35910_35948 = G__35971;
count__35911_35949 = G__35972;
i__35912_35950 = G__35973;
continue;
} else {
var vec__35933_35974 = cljs.core.first(seq__35909_35968__$1);
var k_35975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35933_35974,(0),null);
var cb_35976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35933_35974,(1),null);
try{var G__35938_35977 = cljs.core.deref(re_frame.trace.traces);
(cb_35976.cljs$core$IFn$_invoke$arity$1 ? cb_35976.cljs$core$IFn$_invoke$arity$1(G__35938_35977) : cb_35976.call(null,G__35938_35977));
}catch (e35937){var e_35981 = e35937;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_35975,"while storing",cljs.core.deref(re_frame.trace.traces),e_35981], 0));
}

var G__35983 = cljs.core.next(seq__35909_35968__$1);
var G__35984 = null;
var G__35985 = (0);
var G__35986 = (0);
seq__35909_35947 = G__35983;
chunk__35910_35948 = G__35984;
count__35911_35949 = G__35985;
i__35912_35950 = G__35986;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
