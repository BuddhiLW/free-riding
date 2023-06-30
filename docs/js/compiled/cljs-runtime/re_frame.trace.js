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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__35924){
var map__35925 = p__35924;
var map__35925__$1 = cljs.core.__destructure_map(map__35925);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35925__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35925__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35925__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35925__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__35927_35955 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__35928_35956 = null;
var count__35929_35957 = (0);
var i__35930_35958 = (0);
while(true){
if((i__35930_35958 < count__35929_35957)){
var vec__35942_35959 = chunk__35928_35956.cljs$core$IIndexed$_nth$arity$2(null,i__35930_35958);
var k_35960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35942_35959,(0),null);
var cb_35961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35942_35959,(1),null);
try{var G__35946_35962 = cljs.core.deref(re_frame.trace.traces);
(cb_35961.cljs$core$IFn$_invoke$arity$1 ? cb_35961.cljs$core$IFn$_invoke$arity$1(G__35946_35962) : cb_35961.call(null,G__35946_35962));
}catch (e35945){var e_35963 = e35945;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_35960,"while storing",cljs.core.deref(re_frame.trace.traces),e_35963], 0));
}

var G__35964 = seq__35927_35955;
var G__35965 = chunk__35928_35956;
var G__35966 = count__35929_35957;
var G__35967 = (i__35930_35958 + (1));
seq__35927_35955 = G__35964;
chunk__35928_35956 = G__35965;
count__35929_35957 = G__35966;
i__35930_35958 = G__35967;
continue;
} else {
var temp__5804__auto___35968 = cljs.core.seq(seq__35927_35955);
if(temp__5804__auto___35968){
var seq__35927_35969__$1 = temp__5804__auto___35968;
if(cljs.core.chunked_seq_QMARK_(seq__35927_35969__$1)){
var c__5568__auto___35970 = cljs.core.chunk_first(seq__35927_35969__$1);
var G__35971 = cljs.core.chunk_rest(seq__35927_35969__$1);
var G__35972 = c__5568__auto___35970;
var G__35973 = cljs.core.count(c__5568__auto___35970);
var G__35974 = (0);
seq__35927_35955 = G__35971;
chunk__35928_35956 = G__35972;
count__35929_35957 = G__35973;
i__35930_35958 = G__35974;
continue;
} else {
var vec__35947_35975 = cljs.core.first(seq__35927_35969__$1);
var k_35976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35947_35975,(0),null);
var cb_35977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35947_35975,(1),null);
try{var G__35951_35978 = cljs.core.deref(re_frame.trace.traces);
(cb_35977.cljs$core$IFn$_invoke$arity$1 ? cb_35977.cljs$core$IFn$_invoke$arity$1(G__35951_35978) : cb_35977.call(null,G__35951_35978));
}catch (e35950){var e_35979 = e35950;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_35976,"while storing",cljs.core.deref(re_frame.trace.traces),e_35979], 0));
}

var G__35980 = cljs.core.next(seq__35927_35969__$1);
var G__35981 = null;
var G__35982 = (0);
var G__35983 = (0);
seq__35927_35955 = G__35980;
chunk__35928_35956 = G__35981;
count__35929_35957 = G__35982;
i__35930_35958 = G__35983;
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
