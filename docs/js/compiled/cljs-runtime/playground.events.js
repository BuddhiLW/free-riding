goog.provide('playground.events');
playground.events.lynx_endpoint = "http://localhost:8080";
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("prod","inicialize-db","prod/inicialize-db",-823795759),(function (_,___$1){
return cljs.core.deref(playground.db.db);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("article","fetch-url","article/fetch-url",-311882007),(function (p__47747,p__47748){
var map__47749 = p__47747;
var map__47749__$1 = cljs.core.__destructure_map(map__47749);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47749__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47750 = p__47748;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47750,(0),null);
var map__47753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47750,(1),null);
var map__47753__$1 = cljs.core.__destructure_map(map__47753);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47753__$1,new cljs.core.Keyword(null,"url","url",276297046));
console.log("fetching url: ",[playground.events.lynx_endpoint,"/free-riding/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(url))].join(''));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.Keyword(null,"url","url",276297046)], null),url),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[playground.events.lynx_endpoint,"/free-riding/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(url))].join(''),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(ajax.core.text_response_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.text_response_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.text_response_format.call(null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("article","set-text","article/set-text",1041083495)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","endpoint-request","error/endpoint-request",1605492732),new cljs.core.Keyword(null,"get-article","get-article",515632287)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("article","set-text","article/set-text",1041083495),(function (db,p__47763){
var vec__47765 = p__47763;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47765,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47765,(1),null);
console.log("response: ",response);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.Keyword(null,"text","text",-1790561697)], null),response);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("error","endpoint-request","error/endpoint-request",1605492732),(function (db,p__47770){
var vec__47772 = p__47770;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47772,(0),null);
var request_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47772,(1),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47772,(2),null);
console.error("error: ",request_type,": ",response);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),request_type], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478)));
}));
playground.events.handler = (function playground$events$handler(response){
return console.log(cljs.core.str.cljs$core$IFn$_invoke$arity$1(response));
});
cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(["http://localhost:8080/free-riding/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent("https://davidbacisin.com/writing/using-fasthttp-for-api-requests-golang"))].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),playground.events.handler], null)], 0)));

//# sourceMappingURL=playground.events.js.map
