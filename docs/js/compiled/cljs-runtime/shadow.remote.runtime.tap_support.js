goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__44544,p__44545){
var map__44546 = p__44544;
var map__44546__$1 = cljs.core.__destructure_map(map__44546);
var svc = map__44546__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44546__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44546__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44546__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__44547 = p__44545;
var map__44547__$1 = cljs.core.__destructure_map(map__44547);
var msg = map__44547__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44547__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44547__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44547__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44547__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__44553,p__44554){
var map__44555 = p__44553;
var map__44555__$1 = cljs.core.__destructure_map(map__44555);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44555__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__44556 = p__44554;
var map__44556__$1 = cljs.core.__destructure_map(map__44556);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44556__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__44560,p__44561){
var map__44568 = p__44560;
var map__44568__$1 = cljs.core.__destructure_map(map__44568);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44568__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44568__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__44569 = p__44561;
var map__44569__$1 = cljs.core.__destructure_map(map__44569);
var msg = map__44569__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44569__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__44572,tid){
var map__44573 = p__44572;
var map__44573__$1 = cljs.core.__destructure_map(map__44573);
var svc = map__44573__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44573__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__44588 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__44589 = null;
var count__44590 = (0);
var i__44591 = (0);
while(true){
if((i__44591 < count__44590)){
var vec__44607 = chunk__44589.cljs$core$IIndexed$_nth$arity$2(null,i__44591);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44607,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44607,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__44671 = seq__44588;
var G__44672 = chunk__44589;
var G__44673 = count__44590;
var G__44674 = (i__44591 + (1));
seq__44588 = G__44671;
chunk__44589 = G__44672;
count__44590 = G__44673;
i__44591 = G__44674;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__44588);
if(temp__5804__auto__){
var seq__44588__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44588__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__44588__$1);
var G__44676 = cljs.core.chunk_rest(seq__44588__$1);
var G__44677 = c__5568__auto__;
var G__44678 = cljs.core.count(c__5568__auto__);
var G__44679 = (0);
seq__44588 = G__44676;
chunk__44589 = G__44677;
count__44590 = G__44678;
i__44591 = G__44679;
continue;
} else {
var vec__44615 = cljs.core.first(seq__44588__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44615,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44615,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__44682 = cljs.core.next(seq__44588__$1);
var G__44683 = null;
var G__44684 = (0);
var G__44685 = (0);
seq__44588 = G__44682;
chunk__44589 = G__44683;
count__44590 = G__44684;
i__44591 = G__44685;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__44578_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__44578_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__44579_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__44579_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__44580_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__44580_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__44581_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__44581_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__44650){
var map__44651 = p__44650;
var map__44651__$1 = cljs.core.__destructure_map(map__44651);
var svc = map__44651__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44651__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44651__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
