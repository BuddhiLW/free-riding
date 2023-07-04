goog.provide('playground.events');
playground.events.lynx_endpoint = "http://localhost:8181";
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("prod","inicialize-db","prod/inicialize-db",-823795759),(function (_,___$1){
return cljs.core.deref(playground.db.db);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("article","fetch-url","article/fetch-url",-311882007),(function (p__36922,p__36923){
var map__36924 = p__36922;
var map__36924__$1 = cljs.core.__destructure_map(map__36924);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36924__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__36925 = p__36923;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36925,(0),null);
var map__36928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36925,(1),null);
var map__36928__$1 = cljs.core.__destructure_map(map__36928);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36928__$1,new cljs.core.Keyword(null,"url","url",276297046));
console.log("fetching url: ",[playground.events.lynx_endpoint,"/free-riding/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(url))].join(''));

console.log("fetching url (should be): ",["http://161.35.96.204:8181","/free-riding/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(url))].join(''));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.Keyword(null,"url","url",276297046)], null),url),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[playground.events.lynx_endpoint,"/free-riding/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(url))].join(''),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(ajax.core.text_response_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.text_response_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.text_response_format.call(null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("article","set-text","article/set-text",1041083495)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","endpoint-request","error/endpoint-request",1605492732),new cljs.core.Keyword(null,"get-article","get-article",515632287)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("article","set-text","article/set-text",1041083495),(function (db,p__36929){
var vec__36930 = p__36929;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36930,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36930,(1),null);
console.log("response: ",response);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.Keyword(null,"text","text",-1790561697)], null),response);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("error","endpoint-request","error/endpoint-request",1605492732),(function (db,p__36933){
var vec__36934 = p__36933;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36934,(0),null);
var request_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36934,(1),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36934,(2),null);
console.error("error: ",request_type,": ",response);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),request_type], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478)));
}));

//# sourceMappingURL=playground.events.js.map
