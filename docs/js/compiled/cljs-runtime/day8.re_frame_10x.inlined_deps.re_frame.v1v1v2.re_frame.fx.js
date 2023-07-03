goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,id,handler);
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__32427 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__32429 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__32429);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___32691 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___32691)){
var new_db_32692 = temp__5804__auto___32691;
var fexpr__32441_32693 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__32441_32693.cljs$core$IFn$_invoke$arity$1 ? fexpr__32441_32693.cljs$core$IFn$_invoke$arity$1(new_db_32692) : fexpr__32441_32693.call(null,new_db_32692));
} else {
}

var seq__32443 = cljs.core.seq(effects_without_db);
var chunk__32444 = null;
var count__32445 = (0);
var i__32446 = (0);
while(true){
if((i__32446 < count__32445)){
var vec__32489 = chunk__32444.cljs$core$IIndexed$_nth$arity$2(null,i__32446);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32489,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32489,(1),null);
var temp__5802__auto___32695 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___32695)){
var effect_fn_32696 = temp__5802__auto___32695;
(effect_fn_32696.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32696.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32696.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32697 = seq__32443;
var G__32698 = chunk__32444;
var G__32699 = count__32445;
var G__32700 = (i__32446 + (1));
seq__32443 = G__32697;
chunk__32444 = G__32698;
count__32445 = G__32699;
i__32446 = G__32700;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32443);
if(temp__5804__auto__){
var seq__32443__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32443__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__32443__$1);
var G__32702 = cljs.core.chunk_rest(seq__32443__$1);
var G__32703 = c__5568__auto__;
var G__32704 = cljs.core.count(c__5568__auto__);
var G__32705 = (0);
seq__32443 = G__32702;
chunk__32444 = G__32703;
count__32445 = G__32704;
i__32446 = G__32705;
continue;
} else {
var vec__32494 = cljs.core.first(seq__32443__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32494,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32494,(1),null);
var temp__5802__auto___32710 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___32710)){
var effect_fn_32711 = temp__5802__auto___32710;
(effect_fn_32711.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32711.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32711.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32712 = cljs.core.next(seq__32443__$1);
var G__32713 = null;
var G__32714 = (0);
var G__32715 = (0);
seq__32443 = G__32712;
chunk__32444 = G__32713;
count__32445 = G__32714;
i__32446 = G__32715;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__31616__auto___32716 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__31617__auto___32717 = (end__31616__auto___32716 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__31617__auto___32717,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__31616__auto___32716);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__32427);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___32723 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___32723)){
var new_db_32724 = temp__5804__auto___32723;
var fexpr__32501_32725 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__32501_32725.cljs$core$IFn$_invoke$arity$1 ? fexpr__32501_32725.cljs$core$IFn$_invoke$arity$1(new_db_32724) : fexpr__32501_32725.call(null,new_db_32724));
} else {
}

var seq__32504 = cljs.core.seq(effects_without_db);
var chunk__32505 = null;
var count__32506 = (0);
var i__32507 = (0);
while(true){
if((i__32507 < count__32506)){
var vec__32535 = chunk__32505.cljs$core$IIndexed$_nth$arity$2(null,i__32507);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32535,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32535,(1),null);
var temp__5802__auto___32731 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___32731)){
var effect_fn_32732 = temp__5802__auto___32731;
(effect_fn_32732.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32732.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32732.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32733 = seq__32504;
var G__32734 = chunk__32505;
var G__32735 = count__32506;
var G__32736 = (i__32507 + (1));
seq__32504 = G__32733;
chunk__32505 = G__32734;
count__32506 = G__32735;
i__32507 = G__32736;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32504);
if(temp__5804__auto__){
var seq__32504__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32504__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__32504__$1);
var G__32738 = cljs.core.chunk_rest(seq__32504__$1);
var G__32739 = c__5568__auto__;
var G__32740 = cljs.core.count(c__5568__auto__);
var G__32741 = (0);
seq__32504 = G__32738;
chunk__32505 = G__32739;
count__32506 = G__32740;
i__32507 = G__32741;
continue;
} else {
var vec__32542 = cljs.core.first(seq__32504__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32542,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32542,(1),null);
var temp__5802__auto___32744 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___32744)){
var effect_fn_32745 = temp__5802__auto___32744;
(effect_fn_32745.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32745.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32745.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32746 = cljs.core.next(seq__32504__$1);
var G__32747 = null;
var G__32748 = (0);
var G__32749 = (0);
seq__32504 = G__32746;
chunk__32505 = G__32747;
count__32506 = G__32748;
i__32507 = G__32749;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__32545){
var map__32546 = p__32545;
var map__32546__$1 = cljs.core.__destructure_map(map__32546);
var effect = map__32546__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32546__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32546__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(value);
} else {
var seq__32554 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__32555 = null;
var count__32556 = (0);
var i__32557 = (0);
while(true){
if((i__32557 < count__32556)){
var effect = chunk__32555.cljs$core$IIndexed$_nth$arity$2(null,i__32557);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__32756 = seq__32554;
var G__32757 = chunk__32555;
var G__32758 = count__32556;
var G__32759 = (i__32557 + (1));
seq__32554 = G__32756;
chunk__32555 = G__32757;
count__32556 = G__32758;
i__32557 = G__32759;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32554);
if(temp__5804__auto__){
var seq__32554__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32554__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__32554__$1);
var G__32765 = cljs.core.chunk_rest(seq__32554__$1);
var G__32766 = c__5568__auto__;
var G__32767 = cljs.core.count(c__5568__auto__);
var G__32768 = (0);
seq__32554 = G__32765;
chunk__32555 = G__32766;
count__32556 = G__32767;
i__32557 = G__32768;
continue;
} else {
var effect = cljs.core.first(seq__32554__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__32771 = cljs.core.next(seq__32554__$1);
var G__32772 = null;
var G__32773 = (0);
var G__32774 = (0);
seq__32554 = G__32771;
chunk__32555 = G__32772;
count__32556 = G__32773;
i__32557 = G__32774;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__32586 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__32587 = null;
var count__32588 = (0);
var i__32589 = (0);
while(true){
if((i__32589 < count__32588)){
var vec__32615 = chunk__32587.cljs$core$IIndexed$_nth$arity$2(null,i__32589);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32615,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32615,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___32781 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___32781)){
var effect_fn_32782 = temp__5802__auto___32781;
(effect_fn_32782.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32782.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32782.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__32788 = seq__32586;
var G__32789 = chunk__32587;
var G__32790 = count__32588;
var G__32791 = (i__32589 + (1));
seq__32586 = G__32788;
chunk__32587 = G__32789;
count__32588 = G__32790;
i__32589 = G__32791;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32586);
if(temp__5804__auto__){
var seq__32586__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32586__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__32586__$1);
var G__32793 = cljs.core.chunk_rest(seq__32586__$1);
var G__32794 = c__5568__auto__;
var G__32795 = cljs.core.count(c__5568__auto__);
var G__32796 = (0);
seq__32586 = G__32793;
chunk__32587 = G__32794;
count__32588 = G__32795;
i__32589 = G__32796;
continue;
} else {
var vec__32626 = cljs.core.first(seq__32586__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32626,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32626,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___32802 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___32802)){
var effect_fn_32803 = temp__5802__auto___32802;
(effect_fn_32803.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32803.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32803.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__32806 = cljs.core.next(seq__32586__$1);
var G__32807 = null;
var G__32808 = (0);
var G__32809 = (0);
seq__32586 = G__32806;
chunk__32587 = G__32807;
count__32588 = G__32808;
i__32589 = G__32809;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__32640 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__32641 = null;
var count__32642 = (0);
var i__32643 = (0);
while(true){
if((i__32643 < count__32642)){
var event = chunk__32641.cljs$core$IIndexed$_nth$arity$2(null,i__32643);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__32817 = seq__32640;
var G__32818 = chunk__32641;
var G__32819 = count__32642;
var G__32820 = (i__32643 + (1));
seq__32640 = G__32817;
chunk__32641 = G__32818;
count__32642 = G__32819;
i__32643 = G__32820;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32640);
if(temp__5804__auto__){
var seq__32640__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32640__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__32640__$1);
var G__32824 = cljs.core.chunk_rest(seq__32640__$1);
var G__32825 = c__5568__auto__;
var G__32826 = cljs.core.count(c__5568__auto__);
var G__32827 = (0);
seq__32640 = G__32824;
chunk__32641 = G__32825;
count__32642 = G__32826;
i__32643 = G__32827;
continue;
} else {
var event = cljs.core.first(seq__32640__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__32828 = cljs.core.next(seq__32640__$1);
var G__32829 = null;
var G__32830 = (0);
var G__32831 = (0);
seq__32640 = G__32828;
chunk__32641 = G__32829;
count__32642 = G__32830;
i__32643 = G__32831;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__32649 = cljs.core.seq(value);
var chunk__32650 = null;
var count__32651 = (0);
var i__32652 = (0);
while(true){
if((i__32652 < count__32651)){
var event = chunk__32650.cljs$core$IIndexed$_nth$arity$2(null,i__32652);
clear_event(event);


var G__32837 = seq__32649;
var G__32838 = chunk__32650;
var G__32839 = count__32651;
var G__32840 = (i__32652 + (1));
seq__32649 = G__32837;
chunk__32650 = G__32838;
count__32651 = G__32839;
i__32652 = G__32840;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32649);
if(temp__5804__auto__){
var seq__32649__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32649__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__32649__$1);
var G__32841 = cljs.core.chunk_rest(seq__32649__$1);
var G__32842 = c__5568__auto__;
var G__32843 = cljs.core.count(c__5568__auto__);
var G__32844 = (0);
seq__32649 = G__32841;
chunk__32650 = G__32842;
count__32651 = G__32843;
i__32652 = G__32844;
continue;
} else {
var event = cljs.core.first(seq__32649__$1);
clear_event(event);


var G__32848 = cljs.core.next(seq__32649__$1);
var G__32849 = null;
var G__32850 = (0);
var G__32851 = (0);
seq__32649 = G__32848;
chunk__32650 = G__32849;
count__32651 = G__32850;
i__32652 = G__32851;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.js.map
