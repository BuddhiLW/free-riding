goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__36659 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__36660 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__36660);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___36894 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___36894)){
var new_db_36895 = temp__5804__auto___36894;
var fexpr__36677_36897 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__36677_36897.cljs$core$IFn$_invoke$arity$1 ? fexpr__36677_36897.cljs$core$IFn$_invoke$arity$1(new_db_36895) : fexpr__36677_36897.call(null,new_db_36895));
} else {
}

var seq__36678 = cljs.core.seq(effects_without_db);
var chunk__36679 = null;
var count__36680 = (0);
var i__36681 = (0);
while(true){
if((i__36681 < count__36680)){
var vec__36708 = chunk__36679.cljs$core$IIndexed$_nth$arity$2(null,i__36681);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36708,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36708,(1),null);
var temp__5802__auto___36904 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___36904)){
var effect_fn_36905 = temp__5802__auto___36904;
(effect_fn_36905.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36905.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36905.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__36906 = seq__36678;
var G__36907 = chunk__36679;
var G__36908 = count__36680;
var G__36909 = (i__36681 + (1));
seq__36678 = G__36906;
chunk__36679 = G__36907;
count__36680 = G__36908;
i__36681 = G__36909;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36678);
if(temp__5804__auto__){
var seq__36678__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36678__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36678__$1);
var G__36910 = cljs.core.chunk_rest(seq__36678__$1);
var G__36911 = c__5568__auto__;
var G__36912 = cljs.core.count(c__5568__auto__);
var G__36913 = (0);
seq__36678 = G__36910;
chunk__36679 = G__36911;
count__36680 = G__36912;
i__36681 = G__36913;
continue;
} else {
var vec__36722 = cljs.core.first(seq__36678__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36722,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36722,(1),null);
var temp__5802__auto___36914 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___36914)){
var effect_fn_36916 = temp__5802__auto___36914;
(effect_fn_36916.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36916.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36916.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__36922 = cljs.core.next(seq__36678__$1);
var G__36923 = null;
var G__36924 = (0);
var G__36925 = (0);
seq__36678 = G__36922;
chunk__36679 = G__36923;
count__36680 = G__36924;
i__36681 = G__36925;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__35875__auto___36928 = re_frame.interop.now();
var duration__35876__auto___36929 = (end__35875__auto___36928 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__35876__auto___36929,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__35875__auto___36928);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__36659);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___36932 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___36932)){
var new_db_36933 = temp__5804__auto___36932;
var fexpr__36734_36934 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__36734_36934.cljs$core$IFn$_invoke$arity$1 ? fexpr__36734_36934.cljs$core$IFn$_invoke$arity$1(new_db_36933) : fexpr__36734_36934.call(null,new_db_36933));
} else {
}

var seq__36737 = cljs.core.seq(effects_without_db);
var chunk__36738 = null;
var count__36739 = (0);
var i__36740 = (0);
while(true){
if((i__36740 < count__36739)){
var vec__36761 = chunk__36738.cljs$core$IIndexed$_nth$arity$2(null,i__36740);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36761,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36761,(1),null);
var temp__5802__auto___36935 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___36935)){
var effect_fn_36937 = temp__5802__auto___36935;
(effect_fn_36937.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36937.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36937.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__36938 = seq__36737;
var G__36939 = chunk__36738;
var G__36940 = count__36739;
var G__36941 = (i__36740 + (1));
seq__36737 = G__36938;
chunk__36738 = G__36939;
count__36739 = G__36940;
i__36740 = G__36941;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36737);
if(temp__5804__auto__){
var seq__36737__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36737__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36737__$1);
var G__36944 = cljs.core.chunk_rest(seq__36737__$1);
var G__36945 = c__5568__auto__;
var G__36946 = cljs.core.count(c__5568__auto__);
var G__36947 = (0);
seq__36737 = G__36944;
chunk__36738 = G__36945;
count__36739 = G__36946;
i__36740 = G__36947;
continue;
} else {
var vec__36773 = cljs.core.first(seq__36737__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36773,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36773,(1),null);
var temp__5802__auto___36954 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___36954)){
var effect_fn_36955 = temp__5802__auto___36954;
(effect_fn_36955.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36955.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36955.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__36956 = cljs.core.next(seq__36737__$1);
var G__36957 = null;
var G__36958 = (0);
var G__36959 = (0);
seq__36737 = G__36956;
chunk__36738 = G__36957;
count__36739 = G__36958;
i__36740 = G__36959;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__36783){
var map__36785 = p__36783;
var map__36785__$1 = cljs.core.__destructure_map(map__36785);
var effect = map__36785__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36785__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36785__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__36787 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__36788 = null;
var count__36789 = (0);
var i__36790 = (0);
while(true){
if((i__36790 < count__36789)){
var effect = chunk__36788.cljs$core$IIndexed$_nth$arity$2(null,i__36790);
re_frame.fx.dispatch_later(effect);


var G__36967 = seq__36787;
var G__36968 = chunk__36788;
var G__36969 = count__36789;
var G__36970 = (i__36790 + (1));
seq__36787 = G__36967;
chunk__36788 = G__36968;
count__36789 = G__36969;
i__36790 = G__36970;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36787);
if(temp__5804__auto__){
var seq__36787__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36787__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36787__$1);
var G__36971 = cljs.core.chunk_rest(seq__36787__$1);
var G__36972 = c__5568__auto__;
var G__36973 = cljs.core.count(c__5568__auto__);
var G__36974 = (0);
seq__36787 = G__36971;
chunk__36788 = G__36972;
count__36789 = G__36973;
i__36790 = G__36974;
continue;
} else {
var effect = cljs.core.first(seq__36787__$1);
re_frame.fx.dispatch_later(effect);


var G__36978 = cljs.core.next(seq__36787__$1);
var G__36979 = null;
var G__36980 = (0);
var G__36981 = (0);
seq__36787 = G__36978;
chunk__36788 = G__36979;
count__36789 = G__36980;
i__36790 = G__36981;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__36793 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__36794 = null;
var count__36795 = (0);
var i__36796 = (0);
while(true){
if((i__36796 < count__36795)){
var vec__36812 = chunk__36794.cljs$core$IIndexed$_nth$arity$2(null,i__36796);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36812,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36812,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___36988 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___36988)){
var effect_fn_36989 = temp__5802__auto___36988;
(effect_fn_36989.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36989.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36989.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__36990 = seq__36793;
var G__36991 = chunk__36794;
var G__36992 = count__36795;
var G__36993 = (i__36796 + (1));
seq__36793 = G__36990;
chunk__36794 = G__36991;
count__36795 = G__36992;
i__36796 = G__36993;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36793);
if(temp__5804__auto__){
var seq__36793__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36793__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36793__$1);
var G__36999 = cljs.core.chunk_rest(seq__36793__$1);
var G__37000 = c__5568__auto__;
var G__37001 = cljs.core.count(c__5568__auto__);
var G__37002 = (0);
seq__36793 = G__36999;
chunk__36794 = G__37000;
count__36795 = G__37001;
i__36796 = G__37002;
continue;
} else {
var vec__36832 = cljs.core.first(seq__36793__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36832,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36832,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___37008 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___37008)){
var effect_fn_37009 = temp__5802__auto___37008;
(effect_fn_37009.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37009.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37009.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__37010 = cljs.core.next(seq__36793__$1);
var G__37011 = null;
var G__37012 = (0);
var G__37013 = (0);
seq__36793 = G__37010;
chunk__36794 = G__37011;
count__36795 = G__37012;
i__36796 = G__37013;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__36840 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__36841 = null;
var count__36842 = (0);
var i__36843 = (0);
while(true){
if((i__36843 < count__36842)){
var event = chunk__36841.cljs$core$IIndexed$_nth$arity$2(null,i__36843);
re_frame.router.dispatch(event);


var G__37016 = seq__36840;
var G__37017 = chunk__36841;
var G__37018 = count__36842;
var G__37019 = (i__36843 + (1));
seq__36840 = G__37016;
chunk__36841 = G__37017;
count__36842 = G__37018;
i__36843 = G__37019;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36840);
if(temp__5804__auto__){
var seq__36840__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36840__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36840__$1);
var G__37022 = cljs.core.chunk_rest(seq__36840__$1);
var G__37023 = c__5568__auto__;
var G__37024 = cljs.core.count(c__5568__auto__);
var G__37025 = (0);
seq__36840 = G__37022;
chunk__36841 = G__37023;
count__36842 = G__37024;
i__36843 = G__37025;
continue;
} else {
var event = cljs.core.first(seq__36840__$1);
re_frame.router.dispatch(event);


var G__37028 = cljs.core.next(seq__36840__$1);
var G__37029 = null;
var G__37030 = (0);
var G__37031 = (0);
seq__36840 = G__37028;
chunk__36841 = G__37029;
count__36842 = G__37030;
i__36843 = G__37031;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__36859 = cljs.core.seq(value);
var chunk__36860 = null;
var count__36861 = (0);
var i__36862 = (0);
while(true){
if((i__36862 < count__36861)){
var event = chunk__36860.cljs$core$IIndexed$_nth$arity$2(null,i__36862);
clear_event(event);


var G__37033 = seq__36859;
var G__37034 = chunk__36860;
var G__37035 = count__36861;
var G__37036 = (i__36862 + (1));
seq__36859 = G__37033;
chunk__36860 = G__37034;
count__36861 = G__37035;
i__36862 = G__37036;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36859);
if(temp__5804__auto__){
var seq__36859__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36859__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36859__$1);
var G__37037 = cljs.core.chunk_rest(seq__36859__$1);
var G__37038 = c__5568__auto__;
var G__37039 = cljs.core.count(c__5568__auto__);
var G__37040 = (0);
seq__36859 = G__37037;
chunk__36860 = G__37038;
count__36861 = G__37039;
i__36862 = G__37040;
continue;
} else {
var event = cljs.core.first(seq__36859__$1);
clear_event(event);


var G__37041 = cljs.core.next(seq__36859__$1);
var G__37042 = null;
var G__37043 = (0);
var G__37044 = (0);
seq__36859 = G__37041;
chunk__36860 = G__37042;
count__36861 = G__37043;
i__36862 = G__37044;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
