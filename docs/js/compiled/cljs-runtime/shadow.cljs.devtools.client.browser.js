goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___48625 = arguments.length;
var i__5770__auto___48626 = (0);
while(true){
if((i__5770__auto___48626 < len__5769__auto___48625)){
args__5775__auto__.push((arguments[i__5770__auto___48626]));

var G__48627 = (i__5770__auto___48626 + (1));
i__5770__auto___48626 = G__48627;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq48343){
var G__48344 = cljs.core.first(seq48343);
var seq48343__$1 = cljs.core.next(seq48343);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48344,seq48343__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__48347 = cljs.core.seq(sources);
var chunk__48348 = null;
var count__48349 = (0);
var i__48350 = (0);
while(true){
if((i__48350 < count__48349)){
var map__48355 = chunk__48348.cljs$core$IIndexed$_nth$arity$2(null,i__48350);
var map__48355__$1 = cljs.core.__destructure_map(map__48355);
var src = map__48355__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48355__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48355__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48355__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48355__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e48356){var e_48628 = e48356;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_48628);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_48628.message)].join('')));
}

var G__48629 = seq__48347;
var G__48630 = chunk__48348;
var G__48631 = count__48349;
var G__48632 = (i__48350 + (1));
seq__48347 = G__48629;
chunk__48348 = G__48630;
count__48349 = G__48631;
i__48350 = G__48632;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48347);
if(temp__5804__auto__){
var seq__48347__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48347__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__48347__$1);
var G__48633 = cljs.core.chunk_rest(seq__48347__$1);
var G__48634 = c__5568__auto__;
var G__48635 = cljs.core.count(c__5568__auto__);
var G__48636 = (0);
seq__48347 = G__48633;
chunk__48348 = G__48634;
count__48349 = G__48635;
i__48350 = G__48636;
continue;
} else {
var map__48357 = cljs.core.first(seq__48347__$1);
var map__48357__$1 = cljs.core.__destructure_map(map__48357);
var src = map__48357__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48357__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48357__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48357__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48357__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e48358){var e_48637 = e48358;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_48637);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_48637.message)].join('')));
}

var G__48638 = cljs.core.next(seq__48347__$1);
var G__48639 = null;
var G__48640 = (0);
var G__48641 = (0);
seq__48347 = G__48638;
chunk__48348 = G__48639;
count__48349 = G__48640;
i__48350 = G__48641;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__48359 = cljs.core.seq(js_requires);
var chunk__48360 = null;
var count__48361 = (0);
var i__48362 = (0);
while(true){
if((i__48362 < count__48361)){
var js_ns = chunk__48360.cljs$core$IIndexed$_nth$arity$2(null,i__48362);
var require_str_48642 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_48642);


var G__48643 = seq__48359;
var G__48644 = chunk__48360;
var G__48645 = count__48361;
var G__48646 = (i__48362 + (1));
seq__48359 = G__48643;
chunk__48360 = G__48644;
count__48361 = G__48645;
i__48362 = G__48646;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48359);
if(temp__5804__auto__){
var seq__48359__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48359__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__48359__$1);
var G__48647 = cljs.core.chunk_rest(seq__48359__$1);
var G__48648 = c__5568__auto__;
var G__48649 = cljs.core.count(c__5568__auto__);
var G__48650 = (0);
seq__48359 = G__48647;
chunk__48360 = G__48648;
count__48361 = G__48649;
i__48362 = G__48650;
continue;
} else {
var js_ns = cljs.core.first(seq__48359__$1);
var require_str_48651 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_48651);


var G__48652 = cljs.core.next(seq__48359__$1);
var G__48653 = null;
var G__48654 = (0);
var G__48655 = (0);
seq__48359 = G__48652;
chunk__48360 = G__48653;
count__48361 = G__48654;
i__48362 = G__48655;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__48364){
var map__48365 = p__48364;
var map__48365__$1 = cljs.core.__destructure_map(map__48365);
var msg = map__48365__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48365__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48365__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48366(s__48367){
return (new cljs.core.LazySeq(null,(function (){
var s__48367__$1 = s__48367;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__48367__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__48372 = cljs.core.first(xs__6360__auto__);
var map__48372__$1 = cljs.core.__destructure_map(map__48372);
var src = map__48372__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48372__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48372__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__48367__$1,map__48372,map__48372__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__48365,map__48365__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48366_$_iter__48368(s__48369){
return (new cljs.core.LazySeq(null,((function (s__48367__$1,map__48372,map__48372__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__48365,map__48365__$1,msg,info,reload_info){
return (function (){
var s__48369__$1 = s__48369;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__48369__$1);
if(temp__5804__auto____$1){
var s__48369__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48369__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__48369__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__48371 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__48370 = (0);
while(true){
if((i__48370 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__48370);
cljs.core.chunk_append(b__48371,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__48656 = (i__48370 + (1));
i__48370 = G__48656;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48371),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48366_$_iter__48368(cljs.core.chunk_rest(s__48369__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48371),null);
}
} else {
var warning = cljs.core.first(s__48369__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48366_$_iter__48368(cljs.core.rest(s__48369__$2)));
}
} else {
return null;
}
break;
}
});})(s__48367__$1,map__48372,map__48372__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__48365,map__48365__$1,msg,info,reload_info))
,null,null));
});})(s__48367__$1,map__48372,map__48372__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__48365,map__48365__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48366(cljs.core.rest(s__48367__$1)));
} else {
var G__48657 = cljs.core.rest(s__48367__$1);
s__48367__$1 = G__48657;
continue;
}
} else {
var G__48658 = cljs.core.rest(s__48367__$1);
s__48367__$1 = G__48658;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__48373_48659 = cljs.core.seq(warnings);
var chunk__48374_48660 = null;
var count__48375_48661 = (0);
var i__48376_48662 = (0);
while(true){
if((i__48376_48662 < count__48375_48661)){
var map__48379_48663 = chunk__48374_48660.cljs$core$IIndexed$_nth$arity$2(null,i__48376_48662);
var map__48379_48664__$1 = cljs.core.__destructure_map(map__48379_48663);
var w_48665 = map__48379_48664__$1;
var msg_48666__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48379_48664__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_48667 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48379_48664__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_48668 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48379_48664__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_48669 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48379_48664__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_48669)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48667),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_48668),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_48666__$1)].join(''));


var G__48670 = seq__48373_48659;
var G__48671 = chunk__48374_48660;
var G__48672 = count__48375_48661;
var G__48673 = (i__48376_48662 + (1));
seq__48373_48659 = G__48670;
chunk__48374_48660 = G__48671;
count__48375_48661 = G__48672;
i__48376_48662 = G__48673;
continue;
} else {
var temp__5804__auto___48674 = cljs.core.seq(seq__48373_48659);
if(temp__5804__auto___48674){
var seq__48373_48675__$1 = temp__5804__auto___48674;
if(cljs.core.chunked_seq_QMARK_(seq__48373_48675__$1)){
var c__5568__auto___48676 = cljs.core.chunk_first(seq__48373_48675__$1);
var G__48677 = cljs.core.chunk_rest(seq__48373_48675__$1);
var G__48678 = c__5568__auto___48676;
var G__48679 = cljs.core.count(c__5568__auto___48676);
var G__48680 = (0);
seq__48373_48659 = G__48677;
chunk__48374_48660 = G__48678;
count__48375_48661 = G__48679;
i__48376_48662 = G__48680;
continue;
} else {
var map__48380_48681 = cljs.core.first(seq__48373_48675__$1);
var map__48380_48682__$1 = cljs.core.__destructure_map(map__48380_48681);
var w_48683 = map__48380_48682__$1;
var msg_48684__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48380_48682__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_48685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48380_48682__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_48686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48380_48682__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_48687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48380_48682__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_48687)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48685),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_48686),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_48684__$1)].join(''));


var G__48688 = cljs.core.next(seq__48373_48675__$1);
var G__48689 = null;
var G__48690 = (0);
var G__48691 = (0);
seq__48373_48659 = G__48688;
chunk__48374_48660 = G__48689;
count__48375_48661 = G__48690;
i__48376_48662 = G__48691;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__48363_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__48363_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__48381){
var map__48382 = p__48381;
var map__48382__$1 = cljs.core.__destructure_map(map__48382);
var msg = map__48382__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48382__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48382__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__48383 = cljs.core.seq(updates);
var chunk__48385 = null;
var count__48386 = (0);
var i__48387 = (0);
while(true){
if((i__48387 < count__48386)){
var path = chunk__48385.cljs$core$IIndexed$_nth$arity$2(null,i__48387);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__48497_48692 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__48501_48693 = null;
var count__48502_48694 = (0);
var i__48503_48695 = (0);
while(true){
if((i__48503_48695 < count__48502_48694)){
var node_48696 = chunk__48501_48693.cljs$core$IIndexed$_nth$arity$2(null,i__48503_48695);
if(cljs.core.not(node_48696.shadow$old)){
var path_match_48697 = shadow.cljs.devtools.client.browser.match_paths(node_48696.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48697)){
var new_link_48698 = (function (){var G__48529 = node_48696.cloneNode(true);
G__48529.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48697),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48529;
})();
(node_48696.shadow$old = true);

(new_link_48698.onload = ((function (seq__48497_48692,chunk__48501_48693,count__48502_48694,i__48503_48695,seq__48383,chunk__48385,count__48386,i__48387,new_link_48698,path_match_48697,node_48696,path,map__48382,map__48382__$1,msg,updates,reload_info){
return (function (e){
var seq__48530_48699 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__48532_48700 = null;
var count__48533_48701 = (0);
var i__48534_48702 = (0);
while(true){
if((i__48534_48702 < count__48533_48701)){
var map__48538_48703 = chunk__48532_48700.cljs$core$IIndexed$_nth$arity$2(null,i__48534_48702);
var map__48538_48704__$1 = cljs.core.__destructure_map(map__48538_48703);
var task_48705 = map__48538_48704__$1;
var fn_str_48706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48538_48704__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48538_48704__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48708 = goog.getObjectByName(fn_str_48706,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48707)].join(''));

(fn_obj_48708.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48708.cljs$core$IFn$_invoke$arity$2(path,new_link_48698) : fn_obj_48708.call(null,path,new_link_48698));


var G__48709 = seq__48530_48699;
var G__48710 = chunk__48532_48700;
var G__48711 = count__48533_48701;
var G__48712 = (i__48534_48702 + (1));
seq__48530_48699 = G__48709;
chunk__48532_48700 = G__48710;
count__48533_48701 = G__48711;
i__48534_48702 = G__48712;
continue;
} else {
var temp__5804__auto___48713 = cljs.core.seq(seq__48530_48699);
if(temp__5804__auto___48713){
var seq__48530_48714__$1 = temp__5804__auto___48713;
if(cljs.core.chunked_seq_QMARK_(seq__48530_48714__$1)){
var c__5568__auto___48715 = cljs.core.chunk_first(seq__48530_48714__$1);
var G__48716 = cljs.core.chunk_rest(seq__48530_48714__$1);
var G__48717 = c__5568__auto___48715;
var G__48718 = cljs.core.count(c__5568__auto___48715);
var G__48719 = (0);
seq__48530_48699 = G__48716;
chunk__48532_48700 = G__48717;
count__48533_48701 = G__48718;
i__48534_48702 = G__48719;
continue;
} else {
var map__48539_48720 = cljs.core.first(seq__48530_48714__$1);
var map__48539_48721__$1 = cljs.core.__destructure_map(map__48539_48720);
var task_48722 = map__48539_48721__$1;
var fn_str_48723 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48539_48721__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48724 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48539_48721__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48725 = goog.getObjectByName(fn_str_48723,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48724)].join(''));

(fn_obj_48725.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48725.cljs$core$IFn$_invoke$arity$2(path,new_link_48698) : fn_obj_48725.call(null,path,new_link_48698));


var G__48726 = cljs.core.next(seq__48530_48714__$1);
var G__48727 = null;
var G__48728 = (0);
var G__48729 = (0);
seq__48530_48699 = G__48726;
chunk__48532_48700 = G__48727;
count__48533_48701 = G__48728;
i__48534_48702 = G__48729;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_48696);
});})(seq__48497_48692,chunk__48501_48693,count__48502_48694,i__48503_48695,seq__48383,chunk__48385,count__48386,i__48387,new_link_48698,path_match_48697,node_48696,path,map__48382,map__48382__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48697], 0));

goog.dom.insertSiblingAfter(new_link_48698,node_48696);


var G__48730 = seq__48497_48692;
var G__48731 = chunk__48501_48693;
var G__48732 = count__48502_48694;
var G__48733 = (i__48503_48695 + (1));
seq__48497_48692 = G__48730;
chunk__48501_48693 = G__48731;
count__48502_48694 = G__48732;
i__48503_48695 = G__48733;
continue;
} else {
var G__48734 = seq__48497_48692;
var G__48735 = chunk__48501_48693;
var G__48736 = count__48502_48694;
var G__48737 = (i__48503_48695 + (1));
seq__48497_48692 = G__48734;
chunk__48501_48693 = G__48735;
count__48502_48694 = G__48736;
i__48503_48695 = G__48737;
continue;
}
} else {
var G__48738 = seq__48497_48692;
var G__48739 = chunk__48501_48693;
var G__48740 = count__48502_48694;
var G__48741 = (i__48503_48695 + (1));
seq__48497_48692 = G__48738;
chunk__48501_48693 = G__48739;
count__48502_48694 = G__48740;
i__48503_48695 = G__48741;
continue;
}
} else {
var temp__5804__auto___48742 = cljs.core.seq(seq__48497_48692);
if(temp__5804__auto___48742){
var seq__48497_48743__$1 = temp__5804__auto___48742;
if(cljs.core.chunked_seq_QMARK_(seq__48497_48743__$1)){
var c__5568__auto___48744 = cljs.core.chunk_first(seq__48497_48743__$1);
var G__48745 = cljs.core.chunk_rest(seq__48497_48743__$1);
var G__48746 = c__5568__auto___48744;
var G__48747 = cljs.core.count(c__5568__auto___48744);
var G__48748 = (0);
seq__48497_48692 = G__48745;
chunk__48501_48693 = G__48746;
count__48502_48694 = G__48747;
i__48503_48695 = G__48748;
continue;
} else {
var node_48749 = cljs.core.first(seq__48497_48743__$1);
if(cljs.core.not(node_48749.shadow$old)){
var path_match_48750 = shadow.cljs.devtools.client.browser.match_paths(node_48749.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48750)){
var new_link_48751 = (function (){var G__48540 = node_48749.cloneNode(true);
G__48540.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48750),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48540;
})();
(node_48749.shadow$old = true);

(new_link_48751.onload = ((function (seq__48497_48692,chunk__48501_48693,count__48502_48694,i__48503_48695,seq__48383,chunk__48385,count__48386,i__48387,new_link_48751,path_match_48750,node_48749,seq__48497_48743__$1,temp__5804__auto___48742,path,map__48382,map__48382__$1,msg,updates,reload_info){
return (function (e){
var seq__48541_48752 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__48543_48753 = null;
var count__48544_48754 = (0);
var i__48545_48755 = (0);
while(true){
if((i__48545_48755 < count__48544_48754)){
var map__48549_48756 = chunk__48543_48753.cljs$core$IIndexed$_nth$arity$2(null,i__48545_48755);
var map__48549_48757__$1 = cljs.core.__destructure_map(map__48549_48756);
var task_48758 = map__48549_48757__$1;
var fn_str_48759 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48549_48757__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48549_48757__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48761 = goog.getObjectByName(fn_str_48759,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48760)].join(''));

(fn_obj_48761.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48761.cljs$core$IFn$_invoke$arity$2(path,new_link_48751) : fn_obj_48761.call(null,path,new_link_48751));


var G__48762 = seq__48541_48752;
var G__48763 = chunk__48543_48753;
var G__48764 = count__48544_48754;
var G__48765 = (i__48545_48755 + (1));
seq__48541_48752 = G__48762;
chunk__48543_48753 = G__48763;
count__48544_48754 = G__48764;
i__48545_48755 = G__48765;
continue;
} else {
var temp__5804__auto___48766__$1 = cljs.core.seq(seq__48541_48752);
if(temp__5804__auto___48766__$1){
var seq__48541_48767__$1 = temp__5804__auto___48766__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48541_48767__$1)){
var c__5568__auto___48768 = cljs.core.chunk_first(seq__48541_48767__$1);
var G__48769 = cljs.core.chunk_rest(seq__48541_48767__$1);
var G__48770 = c__5568__auto___48768;
var G__48771 = cljs.core.count(c__5568__auto___48768);
var G__48772 = (0);
seq__48541_48752 = G__48769;
chunk__48543_48753 = G__48770;
count__48544_48754 = G__48771;
i__48545_48755 = G__48772;
continue;
} else {
var map__48550_48773 = cljs.core.first(seq__48541_48767__$1);
var map__48550_48774__$1 = cljs.core.__destructure_map(map__48550_48773);
var task_48775 = map__48550_48774__$1;
var fn_str_48776 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48550_48774__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48777 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48550_48774__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48778 = goog.getObjectByName(fn_str_48776,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48777)].join(''));

(fn_obj_48778.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48778.cljs$core$IFn$_invoke$arity$2(path,new_link_48751) : fn_obj_48778.call(null,path,new_link_48751));


var G__48779 = cljs.core.next(seq__48541_48767__$1);
var G__48780 = null;
var G__48781 = (0);
var G__48782 = (0);
seq__48541_48752 = G__48779;
chunk__48543_48753 = G__48780;
count__48544_48754 = G__48781;
i__48545_48755 = G__48782;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_48749);
});})(seq__48497_48692,chunk__48501_48693,count__48502_48694,i__48503_48695,seq__48383,chunk__48385,count__48386,i__48387,new_link_48751,path_match_48750,node_48749,seq__48497_48743__$1,temp__5804__auto___48742,path,map__48382,map__48382__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48750], 0));

goog.dom.insertSiblingAfter(new_link_48751,node_48749);


var G__48783 = cljs.core.next(seq__48497_48743__$1);
var G__48784 = null;
var G__48785 = (0);
var G__48786 = (0);
seq__48497_48692 = G__48783;
chunk__48501_48693 = G__48784;
count__48502_48694 = G__48785;
i__48503_48695 = G__48786;
continue;
} else {
var G__48787 = cljs.core.next(seq__48497_48743__$1);
var G__48788 = null;
var G__48789 = (0);
var G__48790 = (0);
seq__48497_48692 = G__48787;
chunk__48501_48693 = G__48788;
count__48502_48694 = G__48789;
i__48503_48695 = G__48790;
continue;
}
} else {
var G__48791 = cljs.core.next(seq__48497_48743__$1);
var G__48792 = null;
var G__48793 = (0);
var G__48794 = (0);
seq__48497_48692 = G__48791;
chunk__48501_48693 = G__48792;
count__48502_48694 = G__48793;
i__48503_48695 = G__48794;
continue;
}
}
} else {
}
}
break;
}


var G__48795 = seq__48383;
var G__48796 = chunk__48385;
var G__48797 = count__48386;
var G__48798 = (i__48387 + (1));
seq__48383 = G__48795;
chunk__48385 = G__48796;
count__48386 = G__48797;
i__48387 = G__48798;
continue;
} else {
var G__48799 = seq__48383;
var G__48800 = chunk__48385;
var G__48801 = count__48386;
var G__48802 = (i__48387 + (1));
seq__48383 = G__48799;
chunk__48385 = G__48800;
count__48386 = G__48801;
i__48387 = G__48802;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48383);
if(temp__5804__auto__){
var seq__48383__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48383__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__48383__$1);
var G__48803 = cljs.core.chunk_rest(seq__48383__$1);
var G__48804 = c__5568__auto__;
var G__48805 = cljs.core.count(c__5568__auto__);
var G__48806 = (0);
seq__48383 = G__48803;
chunk__48385 = G__48804;
count__48386 = G__48805;
i__48387 = G__48806;
continue;
} else {
var path = cljs.core.first(seq__48383__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__48551_48807 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__48555_48808 = null;
var count__48556_48809 = (0);
var i__48557_48810 = (0);
while(true){
if((i__48557_48810 < count__48556_48809)){
var node_48811 = chunk__48555_48808.cljs$core$IIndexed$_nth$arity$2(null,i__48557_48810);
if(cljs.core.not(node_48811.shadow$old)){
var path_match_48812 = shadow.cljs.devtools.client.browser.match_paths(node_48811.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48812)){
var new_link_48813 = (function (){var G__48583 = node_48811.cloneNode(true);
G__48583.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48812),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48583;
})();
(node_48811.shadow$old = true);

(new_link_48813.onload = ((function (seq__48551_48807,chunk__48555_48808,count__48556_48809,i__48557_48810,seq__48383,chunk__48385,count__48386,i__48387,new_link_48813,path_match_48812,node_48811,path,seq__48383__$1,temp__5804__auto__,map__48382,map__48382__$1,msg,updates,reload_info){
return (function (e){
var seq__48584_48814 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__48586_48815 = null;
var count__48587_48816 = (0);
var i__48588_48817 = (0);
while(true){
if((i__48588_48817 < count__48587_48816)){
var map__48592_48818 = chunk__48586_48815.cljs$core$IIndexed$_nth$arity$2(null,i__48588_48817);
var map__48592_48819__$1 = cljs.core.__destructure_map(map__48592_48818);
var task_48820 = map__48592_48819__$1;
var fn_str_48821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48592_48819__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48822 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48592_48819__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48823 = goog.getObjectByName(fn_str_48821,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48822)].join(''));

(fn_obj_48823.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48823.cljs$core$IFn$_invoke$arity$2(path,new_link_48813) : fn_obj_48823.call(null,path,new_link_48813));


var G__48824 = seq__48584_48814;
var G__48825 = chunk__48586_48815;
var G__48826 = count__48587_48816;
var G__48827 = (i__48588_48817 + (1));
seq__48584_48814 = G__48824;
chunk__48586_48815 = G__48825;
count__48587_48816 = G__48826;
i__48588_48817 = G__48827;
continue;
} else {
var temp__5804__auto___48828__$1 = cljs.core.seq(seq__48584_48814);
if(temp__5804__auto___48828__$1){
var seq__48584_48829__$1 = temp__5804__auto___48828__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48584_48829__$1)){
var c__5568__auto___48830 = cljs.core.chunk_first(seq__48584_48829__$1);
var G__48831 = cljs.core.chunk_rest(seq__48584_48829__$1);
var G__48832 = c__5568__auto___48830;
var G__48833 = cljs.core.count(c__5568__auto___48830);
var G__48834 = (0);
seq__48584_48814 = G__48831;
chunk__48586_48815 = G__48832;
count__48587_48816 = G__48833;
i__48588_48817 = G__48834;
continue;
} else {
var map__48593_48835 = cljs.core.first(seq__48584_48829__$1);
var map__48593_48836__$1 = cljs.core.__destructure_map(map__48593_48835);
var task_48837 = map__48593_48836__$1;
var fn_str_48838 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48593_48836__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48839 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48593_48836__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48840 = goog.getObjectByName(fn_str_48838,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48839)].join(''));

(fn_obj_48840.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48840.cljs$core$IFn$_invoke$arity$2(path,new_link_48813) : fn_obj_48840.call(null,path,new_link_48813));


var G__48841 = cljs.core.next(seq__48584_48829__$1);
var G__48842 = null;
var G__48843 = (0);
var G__48844 = (0);
seq__48584_48814 = G__48841;
chunk__48586_48815 = G__48842;
count__48587_48816 = G__48843;
i__48588_48817 = G__48844;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_48811);
});})(seq__48551_48807,chunk__48555_48808,count__48556_48809,i__48557_48810,seq__48383,chunk__48385,count__48386,i__48387,new_link_48813,path_match_48812,node_48811,path,seq__48383__$1,temp__5804__auto__,map__48382,map__48382__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48812], 0));

goog.dom.insertSiblingAfter(new_link_48813,node_48811);


var G__48845 = seq__48551_48807;
var G__48846 = chunk__48555_48808;
var G__48847 = count__48556_48809;
var G__48848 = (i__48557_48810 + (1));
seq__48551_48807 = G__48845;
chunk__48555_48808 = G__48846;
count__48556_48809 = G__48847;
i__48557_48810 = G__48848;
continue;
} else {
var G__48849 = seq__48551_48807;
var G__48850 = chunk__48555_48808;
var G__48851 = count__48556_48809;
var G__48852 = (i__48557_48810 + (1));
seq__48551_48807 = G__48849;
chunk__48555_48808 = G__48850;
count__48556_48809 = G__48851;
i__48557_48810 = G__48852;
continue;
}
} else {
var G__48853 = seq__48551_48807;
var G__48854 = chunk__48555_48808;
var G__48855 = count__48556_48809;
var G__48856 = (i__48557_48810 + (1));
seq__48551_48807 = G__48853;
chunk__48555_48808 = G__48854;
count__48556_48809 = G__48855;
i__48557_48810 = G__48856;
continue;
}
} else {
var temp__5804__auto___48857__$1 = cljs.core.seq(seq__48551_48807);
if(temp__5804__auto___48857__$1){
var seq__48551_48858__$1 = temp__5804__auto___48857__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48551_48858__$1)){
var c__5568__auto___48859 = cljs.core.chunk_first(seq__48551_48858__$1);
var G__48860 = cljs.core.chunk_rest(seq__48551_48858__$1);
var G__48861 = c__5568__auto___48859;
var G__48862 = cljs.core.count(c__5568__auto___48859);
var G__48863 = (0);
seq__48551_48807 = G__48860;
chunk__48555_48808 = G__48861;
count__48556_48809 = G__48862;
i__48557_48810 = G__48863;
continue;
} else {
var node_48864 = cljs.core.first(seq__48551_48858__$1);
if(cljs.core.not(node_48864.shadow$old)){
var path_match_48865 = shadow.cljs.devtools.client.browser.match_paths(node_48864.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48865)){
var new_link_48866 = (function (){var G__48594 = node_48864.cloneNode(true);
G__48594.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48865),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48594;
})();
(node_48864.shadow$old = true);

(new_link_48866.onload = ((function (seq__48551_48807,chunk__48555_48808,count__48556_48809,i__48557_48810,seq__48383,chunk__48385,count__48386,i__48387,new_link_48866,path_match_48865,node_48864,seq__48551_48858__$1,temp__5804__auto___48857__$1,path,seq__48383__$1,temp__5804__auto__,map__48382,map__48382__$1,msg,updates,reload_info){
return (function (e){
var seq__48595_48867 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__48597_48868 = null;
var count__48598_48869 = (0);
var i__48599_48870 = (0);
while(true){
if((i__48599_48870 < count__48598_48869)){
var map__48603_48871 = chunk__48597_48868.cljs$core$IIndexed$_nth$arity$2(null,i__48599_48870);
var map__48603_48872__$1 = cljs.core.__destructure_map(map__48603_48871);
var task_48873 = map__48603_48872__$1;
var fn_str_48874 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48603_48872__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48875 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48603_48872__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48876 = goog.getObjectByName(fn_str_48874,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48875)].join(''));

(fn_obj_48876.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48876.cljs$core$IFn$_invoke$arity$2(path,new_link_48866) : fn_obj_48876.call(null,path,new_link_48866));


var G__48877 = seq__48595_48867;
var G__48878 = chunk__48597_48868;
var G__48879 = count__48598_48869;
var G__48880 = (i__48599_48870 + (1));
seq__48595_48867 = G__48877;
chunk__48597_48868 = G__48878;
count__48598_48869 = G__48879;
i__48599_48870 = G__48880;
continue;
} else {
var temp__5804__auto___48881__$2 = cljs.core.seq(seq__48595_48867);
if(temp__5804__auto___48881__$2){
var seq__48595_48882__$1 = temp__5804__auto___48881__$2;
if(cljs.core.chunked_seq_QMARK_(seq__48595_48882__$1)){
var c__5568__auto___48883 = cljs.core.chunk_first(seq__48595_48882__$1);
var G__48884 = cljs.core.chunk_rest(seq__48595_48882__$1);
var G__48885 = c__5568__auto___48883;
var G__48886 = cljs.core.count(c__5568__auto___48883);
var G__48887 = (0);
seq__48595_48867 = G__48884;
chunk__48597_48868 = G__48885;
count__48598_48869 = G__48886;
i__48599_48870 = G__48887;
continue;
} else {
var map__48604_48888 = cljs.core.first(seq__48595_48882__$1);
var map__48604_48889__$1 = cljs.core.__destructure_map(map__48604_48888);
var task_48890 = map__48604_48889__$1;
var fn_str_48891 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48604_48889__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48892 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48604_48889__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48893 = goog.getObjectByName(fn_str_48891,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48892)].join(''));

(fn_obj_48893.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48893.cljs$core$IFn$_invoke$arity$2(path,new_link_48866) : fn_obj_48893.call(null,path,new_link_48866));


var G__48894 = cljs.core.next(seq__48595_48882__$1);
var G__48895 = null;
var G__48896 = (0);
var G__48897 = (0);
seq__48595_48867 = G__48894;
chunk__48597_48868 = G__48895;
count__48598_48869 = G__48896;
i__48599_48870 = G__48897;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_48864);
});})(seq__48551_48807,chunk__48555_48808,count__48556_48809,i__48557_48810,seq__48383,chunk__48385,count__48386,i__48387,new_link_48866,path_match_48865,node_48864,seq__48551_48858__$1,temp__5804__auto___48857__$1,path,seq__48383__$1,temp__5804__auto__,map__48382,map__48382__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48865], 0));

goog.dom.insertSiblingAfter(new_link_48866,node_48864);


var G__48898 = cljs.core.next(seq__48551_48858__$1);
var G__48899 = null;
var G__48900 = (0);
var G__48901 = (0);
seq__48551_48807 = G__48898;
chunk__48555_48808 = G__48899;
count__48556_48809 = G__48900;
i__48557_48810 = G__48901;
continue;
} else {
var G__48902 = cljs.core.next(seq__48551_48858__$1);
var G__48903 = null;
var G__48904 = (0);
var G__48905 = (0);
seq__48551_48807 = G__48902;
chunk__48555_48808 = G__48903;
count__48556_48809 = G__48904;
i__48557_48810 = G__48905;
continue;
}
} else {
var G__48906 = cljs.core.next(seq__48551_48858__$1);
var G__48907 = null;
var G__48908 = (0);
var G__48909 = (0);
seq__48551_48807 = G__48906;
chunk__48555_48808 = G__48907;
count__48556_48809 = G__48908;
i__48557_48810 = G__48909;
continue;
}
}
} else {
}
}
break;
}


var G__48910 = cljs.core.next(seq__48383__$1);
var G__48911 = null;
var G__48912 = (0);
var G__48913 = (0);
seq__48383 = G__48910;
chunk__48385 = G__48911;
count__48386 = G__48912;
i__48387 = G__48913;
continue;
} else {
var G__48914 = cljs.core.next(seq__48383__$1);
var G__48915 = null;
var G__48916 = (0);
var G__48917 = (0);
seq__48383 = G__48914;
chunk__48385 = G__48915;
count__48386 = G__48916;
i__48387 = G__48917;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__48605){
var map__48606 = p__48605;
var map__48606__$1 = cljs.core.__destructure_map(map__48606);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48606__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__48607){
var map__48608 = p__48607;
var map__48608__$1 = cljs.core.__destructure_map(map__48608);
var _ = map__48608__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48608__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__48609,done,error){
var map__48610 = p__48609;
var map__48610__$1 = cljs.core.__destructure_map(map__48610);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48610__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__48611,done,error){
var map__48612 = p__48611;
var map__48612__$1 = cljs.core.__destructure_map(map__48612);
var msg = map__48612__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48612__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48612__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48612__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__48613){
var map__48614 = p__48613;
var map__48614__$1 = cljs.core.__destructure_map(map__48614);
var src = map__48614__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48614__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__48615 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__48615) : done.call(null,G__48615));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__48616){
var map__48617 = p__48616;
var map__48617__$1 = cljs.core.__destructure_map(map__48617);
var msg__$1 = map__48617__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48617__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e48618){var ex = e48618;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__48619){
var map__48620 = p__48619;
var map__48620__$1 = cljs.core.__destructure_map(map__48620);
var env = map__48620__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48620__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__48621){
var map__48622 = p__48621;
var map__48622__$1 = cljs.core.__destructure_map(map__48622);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48622__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48622__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__48623){
var map__48624 = p__48623;
var map__48624__$1 = cljs.core.__destructure_map(map__48624);
var svc = map__48624__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48624__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
