goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__42949,res){
var map__42950 = p__42949;
var map__42950__$1 = cljs.core.__destructure_map(map__42950);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42950__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42950__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__42952 = res;
var G__42952__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42952,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__42952);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42952__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__42952__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__42969 = arguments.length;
switch (G__42969) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__42972,msg,handlers,timeout_after_ms){
var map__42973 = p__42972;
var map__42973__$1 = cljs.core.__destructure_map(map__42973);
var runtime = map__42973__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42973__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43279 = arguments.length;
var i__5770__auto___43280 = (0);
while(true){
if((i__5770__auto___43280 < len__5769__auto___43279)){
args__5775__auto__.push((arguments[i__5770__auto___43280]));

var G__43281 = (i__5770__auto___43280 + (1));
i__5770__auto___43280 = G__43281;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__42984,ev,args){
var map__42985 = p__42984;
var map__42985__$1 = cljs.core.__destructure_map(map__42985);
var runtime = map__42985__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42985__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__42991 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__42994 = null;
var count__42995 = (0);
var i__42996 = (0);
while(true){
if((i__42996 < count__42995)){
var ext = chunk__42994.cljs$core$IIndexed$_nth$arity$2(null,i__42996);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__43285 = seq__42991;
var G__43286 = chunk__42994;
var G__43287 = count__42995;
var G__43288 = (i__42996 + (1));
seq__42991 = G__43285;
chunk__42994 = G__43286;
count__42995 = G__43287;
i__42996 = G__43288;
continue;
} else {
var G__43290 = seq__42991;
var G__43291 = chunk__42994;
var G__43292 = count__42995;
var G__43293 = (i__42996 + (1));
seq__42991 = G__43290;
chunk__42994 = G__43291;
count__42995 = G__43292;
i__42996 = G__43293;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__42991);
if(temp__5804__auto__){
var seq__42991__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42991__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__42991__$1);
var G__43295 = cljs.core.chunk_rest(seq__42991__$1);
var G__43296 = c__5568__auto__;
var G__43297 = cljs.core.count(c__5568__auto__);
var G__43298 = (0);
seq__42991 = G__43295;
chunk__42994 = G__43296;
count__42995 = G__43297;
i__42996 = G__43298;
continue;
} else {
var ext = cljs.core.first(seq__42991__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__43301 = cljs.core.next(seq__42991__$1);
var G__43302 = null;
var G__43303 = (0);
var G__43304 = (0);
seq__42991 = G__43301;
chunk__42994 = G__43302;
count__42995 = G__43303;
i__42996 = G__43304;
continue;
} else {
var G__43305 = cljs.core.next(seq__42991__$1);
var G__43306 = null;
var G__43307 = (0);
var G__43308 = (0);
seq__42991 = G__43305;
chunk__42994 = G__43306;
count__42995 = G__43307;
i__42996 = G__43308;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq42977){
var G__42979 = cljs.core.first(seq42977);
var seq42977__$1 = cljs.core.next(seq42977);
var G__42980 = cljs.core.first(seq42977__$1);
var seq42977__$2 = cljs.core.next(seq42977__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42979,G__42980,seq42977__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__43071,p__43072){
var map__43073 = p__43071;
var map__43073__$1 = cljs.core.__destructure_map(map__43073);
var runtime = map__43073__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43073__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__43074 = p__43072;
var map__43074__$1 = cljs.core.__destructure_map(map__43074);
var msg = map__43074__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43074__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__43076 = cljs.core.deref(state_ref);
var map__43076__$1 = cljs.core.__destructure_map(map__43076);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43076__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43076__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__43082){
var map__43083 = p__43082;
var map__43083__$1 = cljs.core.__destructure_map(map__43083);
var runtime = map__43083__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43083__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__43101,msg){
var map__43103 = p__43101;
var map__43103__$1 = cljs.core.__destructure_map(map__43103);
var runtime = map__43103__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43103__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__43129,key,p__43130){
var map__43132 = p__43129;
var map__43132__$1 = cljs.core.__destructure_map(map__43132);
var state = map__43132__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43132__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__43133 = p__43130;
var map__43133__$1 = cljs.core.__destructure_map(map__43133);
var spec = map__43133__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43133__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__43162,key,spec){
var map__43168 = p__43162;
var map__43168__$1 = cljs.core.__destructure_map(map__43168);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43168__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__43176_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__43176_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__43177_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__43177_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__43178_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__43178_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__43179_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__43179_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__43180_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__43180_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__43196,key){
var map__43201 = p__43196;
var map__43201__$1 = cljs.core.__destructure_map(map__43201);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43201__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__43204,msg){
var map__43205 = p__43204;
var map__43205__$1 = cljs.core.__destructure_map(map__43205);
var runtime = map__43205__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43205__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__43211,p__43212){
var map__43214 = p__43211;
var map__43214__$1 = cljs.core.__destructure_map(map__43214);
var runtime = map__43214__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43214__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__43215 = p__43212;
var map__43215__$1 = cljs.core.__destructure_map(map__43215);
var msg = map__43215__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43215__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43215__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__43228 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__43230 = null;
var count__43231 = (0);
var i__43232 = (0);
while(true){
if((i__43232 < count__43231)){
var map__43240 = chunk__43230.cljs$core$IIndexed$_nth$arity$2(null,i__43232);
var map__43240__$1 = cljs.core.__destructure_map(map__43240);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43240__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__43350 = seq__43228;
var G__43351 = chunk__43230;
var G__43352 = count__43231;
var G__43353 = (i__43232 + (1));
seq__43228 = G__43350;
chunk__43230 = G__43351;
count__43231 = G__43352;
i__43232 = G__43353;
continue;
} else {
var G__43354 = seq__43228;
var G__43355 = chunk__43230;
var G__43356 = count__43231;
var G__43357 = (i__43232 + (1));
seq__43228 = G__43354;
chunk__43230 = G__43355;
count__43231 = G__43356;
i__43232 = G__43357;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__43228);
if(temp__5804__auto__){
var seq__43228__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43228__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__43228__$1);
var G__43359 = cljs.core.chunk_rest(seq__43228__$1);
var G__43360 = c__5568__auto__;
var G__43361 = cljs.core.count(c__5568__auto__);
var G__43362 = (0);
seq__43228 = G__43359;
chunk__43230 = G__43360;
count__43231 = G__43361;
i__43232 = G__43362;
continue;
} else {
var map__43245 = cljs.core.first(seq__43228__$1);
var map__43245__$1 = cljs.core.__destructure_map(map__43245);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43245__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__43364 = cljs.core.next(seq__43228__$1);
var G__43365 = null;
var G__43366 = (0);
var G__43367 = (0);
seq__43228 = G__43364;
chunk__43230 = G__43365;
count__43231 = G__43366;
i__43232 = G__43367;
continue;
} else {
var G__43368 = cljs.core.next(seq__43228__$1);
var G__43369 = null;
var G__43370 = (0);
var G__43371 = (0);
seq__43228 = G__43368;
chunk__43230 = G__43369;
count__43231 = G__43370;
i__43232 = G__43371;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
