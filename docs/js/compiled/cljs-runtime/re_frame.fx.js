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
var _STAR_current_trace_STAR__orig_val__36657 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__36658 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__36658);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___36842 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___36842)){
var new_db_36843 = temp__5804__auto___36842;
var fexpr__36671_36844 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__36671_36844.cljs$core$IFn$_invoke$arity$1 ? fexpr__36671_36844.cljs$core$IFn$_invoke$arity$1(new_db_36843) : fexpr__36671_36844.call(null,new_db_36843));
} else {
}

var seq__36675 = cljs.core.seq(effects_without_db);
var chunk__36676 = null;
var count__36677 = (0);
var i__36678 = (0);
while(true){
if((i__36678 < count__36677)){
var vec__36708 = chunk__36676.cljs$core$IIndexed$_nth$arity$2(null,i__36678);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36708,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36708,(1),null);
var temp__5802__auto___36851 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___36851)){
var effect_fn_36852 = temp__5802__auto___36851;
(effect_fn_36852.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36852.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36852.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__36853 = seq__36675;
var G__36854 = chunk__36676;
var G__36855 = count__36677;
var G__36856 = (i__36678 + (1));
seq__36675 = G__36853;
chunk__36676 = G__36854;
count__36677 = G__36855;
i__36678 = G__36856;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36675);
if(temp__5804__auto__){
var seq__36675__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36675__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36675__$1);
var G__36857 = cljs.core.chunk_rest(seq__36675__$1);
var G__36858 = c__5568__auto__;
var G__36859 = cljs.core.count(c__5568__auto__);
var G__36860 = (0);
seq__36675 = G__36857;
chunk__36676 = G__36858;
count__36677 = G__36859;
i__36678 = G__36860;
continue;
} else {
var vec__36719 = cljs.core.first(seq__36675__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36719,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36719,(1),null);
var temp__5802__auto___36861 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___36861)){
var effect_fn_36863 = temp__5802__auto___36861;
(effect_fn_36863.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36863.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36863.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__36864 = cljs.core.next(seq__36675__$1);
var G__36865 = null;
var G__36866 = (0);
var G__36867 = (0);
seq__36675 = G__36864;
chunk__36676 = G__36865;
count__36677 = G__36866;
i__36678 = G__36867;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__35900__auto___36868 = re_frame.interop.now();
var duration__35901__auto___36869 = (end__35900__auto___36868 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__35901__auto___36869,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__35900__auto___36868);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__36657);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___36870 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___36870)){
var new_db_36871 = temp__5804__auto___36870;
var fexpr__36726_36872 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__36726_36872.cljs$core$IFn$_invoke$arity$1 ? fexpr__36726_36872.cljs$core$IFn$_invoke$arity$1(new_db_36871) : fexpr__36726_36872.call(null,new_db_36871));
} else {
}

var seq__36727 = cljs.core.seq(effects_without_db);
var chunk__36728 = null;
var count__36729 = (0);
var i__36730 = (0);
while(true){
if((i__36730 < count__36729)){
var vec__36738 = chunk__36728.cljs$core$IIndexed$_nth$arity$2(null,i__36730);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36738,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36738,(1),null);
var temp__5802__auto___36877 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___36877)){
var effect_fn_36879 = temp__5802__auto___36877;
(effect_fn_36879.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36879.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36879.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__36882 = seq__36727;
var G__36883 = chunk__36728;
var G__36884 = count__36729;
var G__36885 = (i__36730 + (1));
seq__36727 = G__36882;
chunk__36728 = G__36883;
count__36729 = G__36884;
i__36730 = G__36885;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36727);
if(temp__5804__auto__){
var seq__36727__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36727__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36727__$1);
var G__36886 = cljs.core.chunk_rest(seq__36727__$1);
var G__36887 = c__5568__auto__;
var G__36888 = cljs.core.count(c__5568__auto__);
var G__36889 = (0);
seq__36727 = G__36886;
chunk__36728 = G__36887;
count__36729 = G__36888;
i__36730 = G__36889;
continue;
} else {
var vec__36742 = cljs.core.first(seq__36727__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36742,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36742,(1),null);
var temp__5802__auto___36890 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___36890)){
var effect_fn_36891 = temp__5802__auto___36890;
(effect_fn_36891.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36891.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36891.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__36893 = cljs.core.next(seq__36727__$1);
var G__36894 = null;
var G__36895 = (0);
var G__36896 = (0);
seq__36727 = G__36893;
chunk__36728 = G__36894;
count__36729 = G__36895;
i__36730 = G__36896;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__36746){
var map__36747 = p__36746;
var map__36747__$1 = cljs.core.__destructure_map(map__36747);
var effect = map__36747__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36747__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36747__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__36756 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__36757 = null;
var count__36758 = (0);
var i__36759 = (0);
while(true){
if((i__36759 < count__36758)){
var effect = chunk__36757.cljs$core$IIndexed$_nth$arity$2(null,i__36759);
re_frame.fx.dispatch_later(effect);


var G__36899 = seq__36756;
var G__36900 = chunk__36757;
var G__36901 = count__36758;
var G__36902 = (i__36759 + (1));
seq__36756 = G__36899;
chunk__36757 = G__36900;
count__36758 = G__36901;
i__36759 = G__36902;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36756);
if(temp__5804__auto__){
var seq__36756__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36756__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36756__$1);
var G__36904 = cljs.core.chunk_rest(seq__36756__$1);
var G__36905 = c__5568__auto__;
var G__36906 = cljs.core.count(c__5568__auto__);
var G__36907 = (0);
seq__36756 = G__36904;
chunk__36757 = G__36905;
count__36758 = G__36906;
i__36759 = G__36907;
continue;
} else {
var effect = cljs.core.first(seq__36756__$1);
re_frame.fx.dispatch_later(effect);


var G__36908 = cljs.core.next(seq__36756__$1);
var G__36909 = null;
var G__36910 = (0);
var G__36911 = (0);
seq__36756 = G__36908;
chunk__36757 = G__36909;
count__36758 = G__36910;
i__36759 = G__36911;
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
var seq__36769 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__36770 = null;
var count__36771 = (0);
var i__36772 = (0);
while(true){
if((i__36772 < count__36771)){
var vec__36789 = chunk__36770.cljs$core$IIndexed$_nth$arity$2(null,i__36772);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36789,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36789,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___36912 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___36912)){
var effect_fn_36913 = temp__5802__auto___36912;
(effect_fn_36913.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36913.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36913.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__36920 = seq__36769;
var G__36921 = chunk__36770;
var G__36922 = count__36771;
var G__36923 = (i__36772 + (1));
seq__36769 = G__36920;
chunk__36770 = G__36921;
count__36771 = G__36922;
i__36772 = G__36923;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36769);
if(temp__5804__auto__){
var seq__36769__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36769__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36769__$1);
var G__36924 = cljs.core.chunk_rest(seq__36769__$1);
var G__36925 = c__5568__auto__;
var G__36926 = cljs.core.count(c__5568__auto__);
var G__36927 = (0);
seq__36769 = G__36924;
chunk__36770 = G__36925;
count__36771 = G__36926;
i__36772 = G__36927;
continue;
} else {
var vec__36799 = cljs.core.first(seq__36769__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36799,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36799,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___36928 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___36928)){
var effect_fn_36929 = temp__5802__auto___36928;
(effect_fn_36929.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36929.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36929.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__36930 = cljs.core.next(seq__36769__$1);
var G__36931 = null;
var G__36932 = (0);
var G__36933 = (0);
seq__36769 = G__36930;
chunk__36770 = G__36931;
count__36771 = G__36932;
i__36772 = G__36933;
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
var seq__36804 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__36805 = null;
var count__36806 = (0);
var i__36807 = (0);
while(true){
if((i__36807 < count__36806)){
var event = chunk__36805.cljs$core$IIndexed$_nth$arity$2(null,i__36807);
re_frame.router.dispatch(event);


var G__36935 = seq__36804;
var G__36936 = chunk__36805;
var G__36937 = count__36806;
var G__36938 = (i__36807 + (1));
seq__36804 = G__36935;
chunk__36805 = G__36936;
count__36806 = G__36937;
i__36807 = G__36938;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36804);
if(temp__5804__auto__){
var seq__36804__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36804__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36804__$1);
var G__36939 = cljs.core.chunk_rest(seq__36804__$1);
var G__36940 = c__5568__auto__;
var G__36941 = cljs.core.count(c__5568__auto__);
var G__36942 = (0);
seq__36804 = G__36939;
chunk__36805 = G__36940;
count__36806 = G__36941;
i__36807 = G__36942;
continue;
} else {
var event = cljs.core.first(seq__36804__$1);
re_frame.router.dispatch(event);


var G__36943 = cljs.core.next(seq__36804__$1);
var G__36944 = null;
var G__36945 = (0);
var G__36946 = (0);
seq__36804 = G__36943;
chunk__36805 = G__36944;
count__36806 = G__36945;
i__36807 = G__36946;
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
var seq__36819 = cljs.core.seq(value);
var chunk__36820 = null;
var count__36821 = (0);
var i__36822 = (0);
while(true){
if((i__36822 < count__36821)){
var event = chunk__36820.cljs$core$IIndexed$_nth$arity$2(null,i__36822);
clear_event(event);


var G__36948 = seq__36819;
var G__36949 = chunk__36820;
var G__36950 = count__36821;
var G__36951 = (i__36822 + (1));
seq__36819 = G__36948;
chunk__36820 = G__36949;
count__36821 = G__36950;
i__36822 = G__36951;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36819);
if(temp__5804__auto__){
var seq__36819__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36819__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36819__$1);
var G__36953 = cljs.core.chunk_rest(seq__36819__$1);
var G__36954 = c__5568__auto__;
var G__36955 = cljs.core.count(c__5568__auto__);
var G__36956 = (0);
seq__36819 = G__36953;
chunk__36820 = G__36954;
count__36821 = G__36955;
i__36822 = G__36956;
continue;
} else {
var event = cljs.core.first(seq__36819__$1);
clear_event(event);


var G__36957 = cljs.core.next(seq__36819__$1);
var G__36958 = null;
var G__36959 = (0);
var G__36960 = (0);
seq__36819 = G__36957;
chunk__36820 = G__36958;
count__36821 = G__36959;
i__36822 = G__36960;
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
