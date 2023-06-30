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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__45040,res){
var map__45044 = p__45040;
var map__45044__$1 = cljs.core.__destructure_map(map__45044);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45044__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45044__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__45045 = res;
var G__45045__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45045,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__45045);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45045__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__45045__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__45047 = arguments.length;
switch (G__45047) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__45048,msg,handlers,timeout_after_ms){
var map__45049 = p__45048;
var map__45049__$1 = cljs.core.__destructure_map(map__45049);
var runtime = map__45049__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45049__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45243 = arguments.length;
var i__5770__auto___45245 = (0);
while(true){
if((i__5770__auto___45245 < len__5769__auto___45243)){
args__5775__auto__.push((arguments[i__5770__auto___45245]));

var G__45246 = (i__5770__auto___45245 + (1));
i__5770__auto___45245 = G__45246;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__45053,ev,args){
var map__45054 = p__45053;
var map__45054__$1 = cljs.core.__destructure_map(map__45054);
var runtime = map__45054__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45054__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__45055 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__45058 = null;
var count__45059 = (0);
var i__45060 = (0);
while(true){
if((i__45060 < count__45059)){
var ext = chunk__45058.cljs$core$IIndexed$_nth$arity$2(null,i__45060);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__45249 = seq__45055;
var G__45250 = chunk__45058;
var G__45251 = count__45059;
var G__45252 = (i__45060 + (1));
seq__45055 = G__45249;
chunk__45058 = G__45250;
count__45059 = G__45251;
i__45060 = G__45252;
continue;
} else {
var G__45253 = seq__45055;
var G__45254 = chunk__45058;
var G__45255 = count__45059;
var G__45256 = (i__45060 + (1));
seq__45055 = G__45253;
chunk__45058 = G__45254;
count__45059 = G__45255;
i__45060 = G__45256;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__45055);
if(temp__5804__auto__){
var seq__45055__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45055__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__45055__$1);
var G__45257 = cljs.core.chunk_rest(seq__45055__$1);
var G__45258 = c__5568__auto__;
var G__45259 = cljs.core.count(c__5568__auto__);
var G__45260 = (0);
seq__45055 = G__45257;
chunk__45058 = G__45258;
count__45059 = G__45259;
i__45060 = G__45260;
continue;
} else {
var ext = cljs.core.first(seq__45055__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__45262 = cljs.core.next(seq__45055__$1);
var G__45263 = null;
var G__45264 = (0);
var G__45265 = (0);
seq__45055 = G__45262;
chunk__45058 = G__45263;
count__45059 = G__45264;
i__45060 = G__45265;
continue;
} else {
var G__45266 = cljs.core.next(seq__45055__$1);
var G__45267 = null;
var G__45268 = (0);
var G__45269 = (0);
seq__45055 = G__45266;
chunk__45058 = G__45267;
count__45059 = G__45268;
i__45060 = G__45269;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq45050){
var G__45051 = cljs.core.first(seq45050);
var seq45050__$1 = cljs.core.next(seq45050);
var G__45052 = cljs.core.first(seq45050__$1);
var seq45050__$2 = cljs.core.next(seq45050__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45051,G__45052,seq45050__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__45091,p__45092){
var map__45093 = p__45091;
var map__45093__$1 = cljs.core.__destructure_map(map__45093);
var runtime = map__45093__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45093__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__45094 = p__45092;
var map__45094__$1 = cljs.core.__destructure_map(map__45094);
var msg = map__45094__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45094__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__45095 = cljs.core.deref(state_ref);
var map__45095__$1 = cljs.core.__destructure_map(map__45095);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45095__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45095__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__45096){
var map__45097 = p__45096;
var map__45097__$1 = cljs.core.__destructure_map(map__45097);
var runtime = map__45097__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45097__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__45098,msg){
var map__45099 = p__45098;
var map__45099__$1 = cljs.core.__destructure_map(map__45099);
var runtime = map__45099__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45099__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__45113,key,p__45114){
var map__45123 = p__45113;
var map__45123__$1 = cljs.core.__destructure_map(map__45123);
var state = map__45123__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45123__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__45125 = p__45114;
var map__45125__$1 = cljs.core.__destructure_map(map__45125);
var spec = map__45125__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45125__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__45151,key,spec){
var map__45152 = p__45151;
var map__45152__$1 = cljs.core.__destructure_map(map__45152);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45152__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__45153_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__45153_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__45154_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__45154_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__45155_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__45155_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__45156_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__45156_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__45157_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__45157_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__45162,key){
var map__45164 = p__45162;
var map__45164__$1 = cljs.core.__destructure_map(map__45164);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45164__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__45171,msg){
var map__45173 = p__45171;
var map__45173__$1 = cljs.core.__destructure_map(map__45173);
var runtime = map__45173__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45173__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__45182,p__45183){
var map__45184 = p__45182;
var map__45184__$1 = cljs.core.__destructure_map(map__45184);
var runtime = map__45184__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45184__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__45185 = p__45183;
var map__45185__$1 = cljs.core.__destructure_map(map__45185);
var msg = map__45185__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45185__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45185__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__45191 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__45193 = null;
var count__45194 = (0);
var i__45195 = (0);
while(true){
if((i__45195 < count__45194)){
var map__45210 = chunk__45193.cljs$core$IIndexed$_nth$arity$2(null,i__45195);
var map__45210__$1 = cljs.core.__destructure_map(map__45210);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45210__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__45285 = seq__45191;
var G__45286 = chunk__45193;
var G__45287 = count__45194;
var G__45288 = (i__45195 + (1));
seq__45191 = G__45285;
chunk__45193 = G__45286;
count__45194 = G__45287;
i__45195 = G__45288;
continue;
} else {
var G__45289 = seq__45191;
var G__45290 = chunk__45193;
var G__45291 = count__45194;
var G__45292 = (i__45195 + (1));
seq__45191 = G__45289;
chunk__45193 = G__45290;
count__45194 = G__45291;
i__45195 = G__45292;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__45191);
if(temp__5804__auto__){
var seq__45191__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45191__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__45191__$1);
var G__45294 = cljs.core.chunk_rest(seq__45191__$1);
var G__45295 = c__5568__auto__;
var G__45296 = cljs.core.count(c__5568__auto__);
var G__45297 = (0);
seq__45191 = G__45294;
chunk__45193 = G__45295;
count__45194 = G__45296;
i__45195 = G__45297;
continue;
} else {
var map__45214 = cljs.core.first(seq__45191__$1);
var map__45214__$1 = cljs.core.__destructure_map(map__45214);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45214__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__45299 = cljs.core.next(seq__45191__$1);
var G__45300 = null;
var G__45301 = (0);
var G__45302 = (0);
seq__45191 = G__45299;
chunk__45193 = G__45300;
count__45194 = G__45301;
i__45195 = G__45302;
continue;
} else {
var G__45303 = cljs.core.next(seq__45191__$1);
var G__45304 = null;
var G__45305 = (0);
var G__45306 = (0);
seq__45191 = G__45303;
chunk__45193 = G__45304;
count__45194 = G__45305;
i__45195 = G__45306;
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
