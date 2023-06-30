goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__45980,p__45981){
var map__45982 = p__45980;
var map__45982__$1 = cljs.core.__destructure_map(map__45982);
var svc = map__45982__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45982__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45982__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45982__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__45983 = p__45981;
var map__45983__$1 = cljs.core.__destructure_map(map__45983);
var msg = map__45983__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45983__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45983__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45983__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45983__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__46000,p__46001){
var map__46003 = p__46000;
var map__46003__$1 = cljs.core.__destructure_map(map__46003);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46003__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__46004 = p__46001;
var map__46004__$1 = cljs.core.__destructure_map(map__46004);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46004__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__46010,p__46011){
var map__46013 = p__46010;
var map__46013__$1 = cljs.core.__destructure_map(map__46013);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46013__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46013__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__46014 = p__46011;
var map__46014__$1 = cljs.core.__destructure_map(map__46014);
var msg = map__46014__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46014__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__46022,tid){
var map__46023 = p__46022;
var map__46023__$1 = cljs.core.__destructure_map(map__46023);
var svc = map__46023__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46023__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__46039 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__46040 = null;
var count__46041 = (0);
var i__46042 = (0);
while(true){
if((i__46042 < count__46041)){
var vec__46056 = chunk__46040.cljs$core$IIndexed$_nth$arity$2(null,i__46042);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46056,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46056,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__46117 = seq__46039;
var G__46118 = chunk__46040;
var G__46119 = count__46041;
var G__46120 = (i__46042 + (1));
seq__46039 = G__46117;
chunk__46040 = G__46118;
count__46041 = G__46119;
i__46042 = G__46120;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46039);
if(temp__5804__auto__){
var seq__46039__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46039__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46039__$1);
var G__46123 = cljs.core.chunk_rest(seq__46039__$1);
var G__46124 = c__5568__auto__;
var G__46125 = cljs.core.count(c__5568__auto__);
var G__46126 = (0);
seq__46039 = G__46123;
chunk__46040 = G__46124;
count__46041 = G__46125;
i__46042 = G__46126;
continue;
} else {
var vec__46061 = cljs.core.first(seq__46039__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46061,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46061,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__46127 = cljs.core.next(seq__46039__$1);
var G__46128 = null;
var G__46129 = (0);
var G__46130 = (0);
seq__46039 = G__46127;
chunk__46040 = G__46128;
count__46041 = G__46129;
i__46042 = G__46130;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__46028_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__46028_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__46030_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__46030_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__46031_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__46031_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__46032_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__46032_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__46065){
var map__46066 = p__46065;
var map__46066__$1 = cljs.core.__destructure_map(map__46066);
var svc = map__46066__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46066__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46066__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
