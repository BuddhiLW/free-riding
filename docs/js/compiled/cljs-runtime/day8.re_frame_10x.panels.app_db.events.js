goog.provide('day8.re_frame_10x.panels.app_db.events');
day8.re_frame_10x.panels.app_db.events.paths_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"paths","paths",-1807389588)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("app-db-paths")], null);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","create-path","day8.re-frame-10x.panels.app-db.events/create-path",-383624398),day8.re_frame_10x.panels.app_db.events.paths_interceptors,(function (paths,p__36804){
var vec__36808 = p__36804;
var open_new_inspectors_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36808,(0),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(paths,Date.now(),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"diff?","diff?",117225601),false,new cljs.core.Keyword(null,"open?","open?",1238443125),open_new_inspectors_QMARK_,new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"path-str","path-str",259306316),"",new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226),true], null));
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","create-path-and-skip-to","day8.re-frame-10x.panels.app-db.events/create-path-and-skip-to",-195622997),day8.re_frame_10x.panels.app_db.events.paths_interceptors,(function (p__36815,p__36816){
var map__36821 = p__36815;
var map__36821__$1 = cljs.core.__destructure_map(map__36821);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36821__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__36822 = p__36816;
var skip_to_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36822,(0),null);
var open_new_inspectors_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36822,(1),null);
var path_id = Date.now();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,path_id,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"diff?","diff?",117225601),false,new cljs.core.Keyword(null,"open?","open?",1238443125),open_new_inspectors_QMARK_,new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"path-str","path-str",259306316),"",new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226),true], null)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","update-path","day8.re-frame-10x.panels.app-db.events/update-path",-928809458),path_id,skip_to_path], null)], null);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","update-path","day8.re-frame-10x.panels.app-db.events/update-path",-928809458),day8.re_frame_10x.panels.app_db.events.paths_interceptors,(function (paths,p__36835){
var vec__36836 = p__36835;
var path_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36836,(0),null);
var path_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36836,(1),null);
var path = day8.re_frame_10x.tools.reader.edn.read_string_maybe(path_str);
var paths__$1 = cljs.core.assoc_in(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"path-str","path-str",259306316)], null),path_str);
if((((((!((path == null)))) && (cljs.core.sequential_QMARK_(path)))) || (clojure.string.blank_QMARK_(path_str)))){
return cljs.core.assoc_in(cljs.core.assoc_in(paths__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"path","path",-188191168)], null),path),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226)], null),true);
} else {
return cljs.core.assoc_in(paths__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226)], null),false);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","update-path-blur","day8.re-frame-10x.panels.app-db.events/update-path-blur",1529838565),day8.re_frame_10x.panels.app_db.events.paths_interceptors,(function (paths,p__36847){
var vec__36848 = p__36847;
var path_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36848,(0),null);
var map__36857 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,path_id);
var map__36857__$1 = cljs.core.__destructure_map(map__36857);
var valid_path_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36857__$1,new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36857__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_(valid_path_QMARK_)){
return paths;
} else {
return cljs.core.assoc_in(cljs.core.assoc_in(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"path-str","path-str",259306316)], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226)], null),true);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","set-path-visibility","day8.re-frame-10x.panels.app-db.events/set-path-visibility",1839643949),day8.re_frame_10x.panels.app_db.events.paths_interceptors,(function (paths,p__36858){
var vec__36863 = p__36858;
var path_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36863,(0),null);
var open_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36863,(1),null);
return cljs.core.assoc_in(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","set-diff-visibility","day8.re-frame-10x.panels.app-db.events/set-diff-visibility",-1750368278),day8.re_frame_10x.panels.app_db.events.paths_interceptors,(function (paths,p__36868){
var vec__36869 = p__36868;
var path_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36869,(0),null);
var diff_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36869,(1),null);
var open_QMARK_ = (cljs.core.truth_(diff_QMARK_)?true:cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null)));
return cljs.core.assoc_in(cljs.core.assoc_in(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"diff?","diff?",117225601)], null),diff_QMARK_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","remove-path","day8.re-frame-10x.panels.app-db.events/remove-path",-333596006),day8.re_frame_10x.panels.app_db.events.paths_interceptors,(function (paths,p__36873){
var vec__36874 = p__36873;
var path_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36874,(0),null);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(paths,path_id);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","paths","day8.re-frame-10x.panels.app-db.events/paths",-421005801),day8.re_frame_10x.panels.app_db.events.paths_interceptors,(function (_,p__36884){
var vec__36885 = p__36884;
var paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36885,(0),null);
return paths;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","set-search-string","day8.re-frame-10x.panels.app-db.events/set-search-string",25437329),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"search-string","search-string",68818394)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.trim_v], null),(function (_,p__36888){
var vec__36889 = p__36888;
var search_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36889,(0),null);
return search_string;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","set-json-ml-paths","day8.re-frame-10x.panels.app-db.events/set-json-ml-paths",389660155),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("app-db-json-ml-expansions")], null),(function (_,p__36899){
var vec__36901 = p__36899;
var paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36901,(0),null);
return paths;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","toggle-expansion","day8.re-frame-10x.panels.app-db.events/toggle-expansion",-1806345875),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("app-db-json-ml-expansions")], null),(function (paths,p__36915){
var vec__36917 = p__36915;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36917,(0),null);
if(cljs.core.contains_QMARK_(paths,path)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(paths,path);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(paths,path);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","reagent-id","day8.re-frame-10x.panels.app-db.events/reagent-id",-337600458),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415)], null)], 0))], null),(function (_,___$1){
return re_frame.interop.reagent_id(re_frame.db.app_db);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","set-sort-form?","day8.re-frame-10x.panels.app-db.events/set-sort-form?",-483190972),day8.re_frame_10x.panels.app_db.events.paths_interceptors,(function (paths,p__36943){
var vec__36950 = p__36943;
var path_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36950,(0),null);
var sort = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36950,(1),null);
return cljs.core.assoc_in(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"sort?","sort?",-567661924)], null),sort);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","set-data-path-annotations?","day8.re-frame-10x.panels.app-db.events/set-data-path-annotations?",881696237),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"data-path-annotations?","data-path-annotations?",-381525058)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("data-path-annotations?")], null),(function (_,p__36961){
var vec__36964 = p__36961;
var data_path_annotations_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36964,(0),null);
return data_path_annotations_QMARK_;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","set-expand-all?","day8.re-frame-10x.panels.app-db.events/set-expand-all?",-703125874),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"expand-all?","expand-all?",2129393886)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.trim_v], null),(function (db,p__36984){
var vec__36985 = p__36984;
var path_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36985,(0),null);
var expand_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36985,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,path_id,expand_QMARK_);
}));

//# sourceMappingURL=day8.re_frame_10x.panels.app_db.events.js.map
