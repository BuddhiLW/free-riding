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
var _STAR_current_trace_STAR__orig_val__33193 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__33194 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__33194);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___33356 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___33356)){
var new_db_33357 = temp__5804__auto___33356;
var fexpr__33198_33358 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__33198_33358.cljs$core$IFn$_invoke$arity$1 ? fexpr__33198_33358.cljs$core$IFn$_invoke$arity$1(new_db_33357) : fexpr__33198_33358.call(null,new_db_33357));
} else {
}

var seq__33199 = cljs.core.seq(effects_without_db);
var chunk__33200 = null;
var count__33201 = (0);
var i__33202 = (0);
while(true){
if((i__33202 < count__33201)){
var vec__33214 = chunk__33200.cljs$core$IIndexed$_nth$arity$2(null,i__33202);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33214,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33214,(1),null);
var temp__5802__auto___33362 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___33362)){
var effect_fn_33363 = temp__5802__auto___33362;
(effect_fn_33363.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33363.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33363.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__33364 = seq__33199;
var G__33365 = chunk__33200;
var G__33366 = count__33201;
var G__33367 = (i__33202 + (1));
seq__33199 = G__33364;
chunk__33200 = G__33365;
count__33201 = G__33366;
i__33202 = G__33367;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33199);
if(temp__5804__auto__){
var seq__33199__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33199__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33199__$1);
var G__33370 = cljs.core.chunk_rest(seq__33199__$1);
var G__33371 = c__5568__auto__;
var G__33372 = cljs.core.count(c__5568__auto__);
var G__33373 = (0);
seq__33199 = G__33370;
chunk__33200 = G__33371;
count__33201 = G__33372;
i__33202 = G__33373;
continue;
} else {
var vec__33217 = cljs.core.first(seq__33199__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33217,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33217,(1),null);
var temp__5802__auto___33374 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___33374)){
var effect_fn_33375 = temp__5802__auto___33374;
(effect_fn_33375.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33375.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33375.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__33378 = cljs.core.next(seq__33199__$1);
var G__33379 = null;
var G__33380 = (0);
var G__33381 = (0);
seq__33199 = G__33378;
chunk__33200 = G__33379;
count__33201 = G__33380;
i__33202 = G__33381;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__32563__auto___33382 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__32564__auto___33383 = (end__32563__auto___33382 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32564__auto___33383,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__32563__auto___33382);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__33193);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___33387 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___33387)){
var new_db_33389 = temp__5804__auto___33387;
var fexpr__33227_33390 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__33227_33390.cljs$core$IFn$_invoke$arity$1 ? fexpr__33227_33390.cljs$core$IFn$_invoke$arity$1(new_db_33389) : fexpr__33227_33390.call(null,new_db_33389));
} else {
}

var seq__33233 = cljs.core.seq(effects_without_db);
var chunk__33234 = null;
var count__33235 = (0);
var i__33236 = (0);
while(true){
if((i__33236 < count__33235)){
var vec__33256 = chunk__33234.cljs$core$IIndexed$_nth$arity$2(null,i__33236);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33256,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33256,(1),null);
var temp__5802__auto___33393 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___33393)){
var effect_fn_33394 = temp__5802__auto___33393;
(effect_fn_33394.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33394.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33394.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__33395 = seq__33233;
var G__33396 = chunk__33234;
var G__33397 = count__33235;
var G__33398 = (i__33236 + (1));
seq__33233 = G__33395;
chunk__33234 = G__33396;
count__33235 = G__33397;
i__33236 = G__33398;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33233);
if(temp__5804__auto__){
var seq__33233__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33233__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33233__$1);
var G__33399 = cljs.core.chunk_rest(seq__33233__$1);
var G__33400 = c__5568__auto__;
var G__33401 = cljs.core.count(c__5568__auto__);
var G__33402 = (0);
seq__33233 = G__33399;
chunk__33234 = G__33400;
count__33235 = G__33401;
i__33236 = G__33402;
continue;
} else {
var vec__33265 = cljs.core.first(seq__33233__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33265,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33265,(1),null);
var temp__5802__auto___33405 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___33405)){
var effect_fn_33407 = temp__5802__auto___33405;
(effect_fn_33407.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33407.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33407.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__33409 = cljs.core.next(seq__33233__$1);
var G__33410 = null;
var G__33411 = (0);
var G__33412 = (0);
seq__33233 = G__33409;
chunk__33234 = G__33410;
count__33235 = G__33411;
i__33236 = G__33412;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__33272){
var map__33273 = p__33272;
var map__33273__$1 = cljs.core.__destructure_map(map__33273);
var effect = map__33273__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33273__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33273__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__33274 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__33275 = null;
var count__33276 = (0);
var i__33277 = (0);
while(true){
if((i__33277 < count__33276)){
var effect = chunk__33275.cljs$core$IIndexed$_nth$arity$2(null,i__33277);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__33417 = seq__33274;
var G__33418 = chunk__33275;
var G__33419 = count__33276;
var G__33420 = (i__33277 + (1));
seq__33274 = G__33417;
chunk__33275 = G__33418;
count__33276 = G__33419;
i__33277 = G__33420;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33274);
if(temp__5804__auto__){
var seq__33274__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33274__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33274__$1);
var G__33421 = cljs.core.chunk_rest(seq__33274__$1);
var G__33422 = c__5568__auto__;
var G__33423 = cljs.core.count(c__5568__auto__);
var G__33424 = (0);
seq__33274 = G__33421;
chunk__33275 = G__33422;
count__33276 = G__33423;
i__33277 = G__33424;
continue;
} else {
var effect = cljs.core.first(seq__33274__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__33425 = cljs.core.next(seq__33274__$1);
var G__33426 = null;
var G__33427 = (0);
var G__33428 = (0);
seq__33274 = G__33425;
chunk__33275 = G__33426;
count__33276 = G__33427;
i__33277 = G__33428;
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
var seq__33282 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__33283 = null;
var count__33284 = (0);
var i__33285 = (0);
while(true){
if((i__33285 < count__33284)){
var vec__33308 = chunk__33283.cljs$core$IIndexed$_nth$arity$2(null,i__33285);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33308,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33308,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___33432 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___33432)){
var effect_fn_33434 = temp__5802__auto___33432;
(effect_fn_33434.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33434.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33434.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__33435 = seq__33282;
var G__33436 = chunk__33283;
var G__33437 = count__33284;
var G__33438 = (i__33285 + (1));
seq__33282 = G__33435;
chunk__33283 = G__33436;
count__33284 = G__33437;
i__33285 = G__33438;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33282);
if(temp__5804__auto__){
var seq__33282__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33282__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33282__$1);
var G__33439 = cljs.core.chunk_rest(seq__33282__$1);
var G__33440 = c__5568__auto__;
var G__33441 = cljs.core.count(c__5568__auto__);
var G__33442 = (0);
seq__33282 = G__33439;
chunk__33283 = G__33440;
count__33284 = G__33441;
i__33285 = G__33442;
continue;
} else {
var vec__33316 = cljs.core.first(seq__33282__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33316,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33316,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___33444 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___33444)){
var effect_fn_33445 = temp__5802__auto___33444;
(effect_fn_33445.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33445.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33445.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__33446 = cljs.core.next(seq__33282__$1);
var G__33447 = null;
var G__33448 = (0);
var G__33449 = (0);
seq__33282 = G__33446;
chunk__33283 = G__33447;
count__33284 = G__33448;
i__33285 = G__33449;
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
var seq__33321 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__33322 = null;
var count__33323 = (0);
var i__33324 = (0);
while(true){
if((i__33324 < count__33323)){
var event = chunk__33322.cljs$core$IIndexed$_nth$arity$2(null,i__33324);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__33451 = seq__33321;
var G__33452 = chunk__33322;
var G__33453 = count__33323;
var G__33454 = (i__33324 + (1));
seq__33321 = G__33451;
chunk__33322 = G__33452;
count__33323 = G__33453;
i__33324 = G__33454;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33321);
if(temp__5804__auto__){
var seq__33321__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33321__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33321__$1);
var G__33455 = cljs.core.chunk_rest(seq__33321__$1);
var G__33456 = c__5568__auto__;
var G__33457 = cljs.core.count(c__5568__auto__);
var G__33458 = (0);
seq__33321 = G__33455;
chunk__33322 = G__33456;
count__33323 = G__33457;
i__33324 = G__33458;
continue;
} else {
var event = cljs.core.first(seq__33321__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__33459 = cljs.core.next(seq__33321__$1);
var G__33460 = null;
var G__33461 = (0);
var G__33462 = (0);
seq__33321 = G__33459;
chunk__33322 = G__33460;
count__33323 = G__33461;
i__33324 = G__33462;
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
var seq__33333 = cljs.core.seq(value);
var chunk__33334 = null;
var count__33335 = (0);
var i__33336 = (0);
while(true){
if((i__33336 < count__33335)){
var event = chunk__33334.cljs$core$IIndexed$_nth$arity$2(null,i__33336);
clear_event(event);


var G__33465 = seq__33333;
var G__33466 = chunk__33334;
var G__33467 = count__33335;
var G__33468 = (i__33336 + (1));
seq__33333 = G__33465;
chunk__33334 = G__33466;
count__33335 = G__33467;
i__33336 = G__33468;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33333);
if(temp__5804__auto__){
var seq__33333__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33333__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33333__$1);
var G__33469 = cljs.core.chunk_rest(seq__33333__$1);
var G__33470 = c__5568__auto__;
var G__33471 = cljs.core.count(c__5568__auto__);
var G__33472 = (0);
seq__33333 = G__33469;
chunk__33334 = G__33470;
count__33335 = G__33471;
i__33336 = G__33472;
continue;
} else {
var event = cljs.core.first(seq__33333__$1);
clear_event(event);


var G__33473 = cljs.core.next(seq__33333__$1);
var G__33474 = null;
var G__33475 = (0);
var G__33476 = (0);
seq__33333 = G__33473;
chunk__33334 = G__33474;
count__33335 = G__33475;
i__33336 = G__33476;
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
