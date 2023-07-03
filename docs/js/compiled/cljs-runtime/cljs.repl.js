goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__43460){
var map__43461 = p__43460;
var map__43461__$1 = cljs.core.__destructure_map(map__43461);
var m = map__43461__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43461__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43461__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__43466_43815 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43467_43816 = null;
var count__43468_43817 = (0);
var i__43469_43818 = (0);
while(true){
if((i__43469_43818 < count__43468_43817)){
var f_43819 = chunk__43467_43816.cljs$core$IIndexed$_nth$arity$2(null,i__43469_43818);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_43819], 0));


var G__43820 = seq__43466_43815;
var G__43821 = chunk__43467_43816;
var G__43822 = count__43468_43817;
var G__43823 = (i__43469_43818 + (1));
seq__43466_43815 = G__43820;
chunk__43467_43816 = G__43821;
count__43468_43817 = G__43822;
i__43469_43818 = G__43823;
continue;
} else {
var temp__5804__auto___43825 = cljs.core.seq(seq__43466_43815);
if(temp__5804__auto___43825){
var seq__43466_43827__$1 = temp__5804__auto___43825;
if(cljs.core.chunked_seq_QMARK_(seq__43466_43827__$1)){
var c__5568__auto___43829 = cljs.core.chunk_first(seq__43466_43827__$1);
var G__43830 = cljs.core.chunk_rest(seq__43466_43827__$1);
var G__43831 = c__5568__auto___43829;
var G__43832 = cljs.core.count(c__5568__auto___43829);
var G__43833 = (0);
seq__43466_43815 = G__43830;
chunk__43467_43816 = G__43831;
count__43468_43817 = G__43832;
i__43469_43818 = G__43833;
continue;
} else {
var f_43835 = cljs.core.first(seq__43466_43827__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_43835], 0));


var G__43836 = cljs.core.next(seq__43466_43827__$1);
var G__43837 = null;
var G__43838 = (0);
var G__43839 = (0);
seq__43466_43815 = G__43836;
chunk__43467_43816 = G__43837;
count__43468_43817 = G__43838;
i__43469_43818 = G__43839;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_43844 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_43844], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_43844)))?cljs.core.second(arglists_43844):arglists_43844)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__43517_43846 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43518_43847 = null;
var count__43519_43848 = (0);
var i__43520_43849 = (0);
while(true){
if((i__43520_43849 < count__43519_43848)){
var vec__43621_43850 = chunk__43518_43847.cljs$core$IIndexed$_nth$arity$2(null,i__43520_43849);
var name_43851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43621_43850,(0),null);
var map__43624_43852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43621_43850,(1),null);
var map__43624_43853__$1 = cljs.core.__destructure_map(map__43624_43852);
var doc_43854 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43624_43853__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43855 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43624_43853__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_43851], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_43855], 0));

if(cljs.core.truth_(doc_43854)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_43854], 0));
} else {
}


var G__43856 = seq__43517_43846;
var G__43857 = chunk__43518_43847;
var G__43858 = count__43519_43848;
var G__43859 = (i__43520_43849 + (1));
seq__43517_43846 = G__43856;
chunk__43518_43847 = G__43857;
count__43519_43848 = G__43858;
i__43520_43849 = G__43859;
continue;
} else {
var temp__5804__auto___43860 = cljs.core.seq(seq__43517_43846);
if(temp__5804__auto___43860){
var seq__43517_43861__$1 = temp__5804__auto___43860;
if(cljs.core.chunked_seq_QMARK_(seq__43517_43861__$1)){
var c__5568__auto___43862 = cljs.core.chunk_first(seq__43517_43861__$1);
var G__43863 = cljs.core.chunk_rest(seq__43517_43861__$1);
var G__43864 = c__5568__auto___43862;
var G__43865 = cljs.core.count(c__5568__auto___43862);
var G__43866 = (0);
seq__43517_43846 = G__43863;
chunk__43518_43847 = G__43864;
count__43519_43848 = G__43865;
i__43520_43849 = G__43866;
continue;
} else {
var vec__43629_43867 = cljs.core.first(seq__43517_43861__$1);
var name_43868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43629_43867,(0),null);
var map__43632_43869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43629_43867,(1),null);
var map__43632_43870__$1 = cljs.core.__destructure_map(map__43632_43869);
var doc_43871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43632_43870__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43872 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43632_43870__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_43868], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_43872], 0));

if(cljs.core.truth_(doc_43871)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_43871], 0));
} else {
}


var G__43879 = cljs.core.next(seq__43517_43861__$1);
var G__43880 = null;
var G__43881 = (0);
var G__43882 = (0);
seq__43517_43846 = G__43879;
chunk__43518_43847 = G__43880;
count__43519_43848 = G__43881;
i__43520_43849 = G__43882;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__43639 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__43640 = null;
var count__43641 = (0);
var i__43642 = (0);
while(true){
if((i__43642 < count__43641)){
var role = chunk__43640.cljs$core$IIndexed$_nth$arity$2(null,i__43642);
var temp__5804__auto___43887__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___43887__$1)){
var spec_43888 = temp__5804__auto___43887__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_43888)], 0));
} else {
}


var G__43889 = seq__43639;
var G__43890 = chunk__43640;
var G__43891 = count__43641;
var G__43892 = (i__43642 + (1));
seq__43639 = G__43889;
chunk__43640 = G__43890;
count__43641 = G__43891;
i__43642 = G__43892;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__43639);
if(temp__5804__auto____$1){
var seq__43639__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__43639__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__43639__$1);
var G__43894 = cljs.core.chunk_rest(seq__43639__$1);
var G__43895 = c__5568__auto__;
var G__43896 = cljs.core.count(c__5568__auto__);
var G__43897 = (0);
seq__43639 = G__43894;
chunk__43640 = G__43895;
count__43641 = G__43896;
i__43642 = G__43897;
continue;
} else {
var role = cljs.core.first(seq__43639__$1);
var temp__5804__auto___43901__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___43901__$2)){
var spec_43902 = temp__5804__auto___43901__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_43902)], 0));
} else {
}


var G__43903 = cljs.core.next(seq__43639__$1);
var G__43904 = null;
var G__43905 = (0);
var G__43906 = (0);
seq__43639 = G__43903;
chunk__43640 = G__43904;
count__43641 = G__43905;
i__43642 = G__43906;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__43908 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__43909 = cljs.core.ex_cause(t);
via = G__43908;
t = G__43909;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__43696 = datafied_throwable;
var map__43696__$1 = cljs.core.__destructure_map(map__43696);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43696__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43696__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43696__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__43697 = cljs.core.last(via);
var map__43697__$1 = cljs.core.__destructure_map(map__43697);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43697__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43697__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43697__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__43698 = data;
var map__43698__$1 = cljs.core.__destructure_map(map__43698);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43698__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43698__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43698__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__43699 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__43699__$1 = cljs.core.__destructure_map(map__43699);
var top_data = map__43699__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43699__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__43703 = phase;
var G__43703__$1 = (((G__43703 instanceof cljs.core.Keyword))?G__43703.fqn:null);
switch (G__43703__$1) {
case "read-source":
var map__43705 = data;
var map__43705__$1 = cljs.core.__destructure_map(map__43705);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43705__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43705__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__43707 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__43707__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43707,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__43707);
var G__43707__$2 = (cljs.core.truth_((function (){var fexpr__43710 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__43710.cljs$core$IFn$_invoke$arity$1 ? fexpr__43710.cljs$core$IFn$_invoke$arity$1(source) : fexpr__43710.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__43707__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__43707__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43707__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__43707__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__43716 = top_data;
var G__43716__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43716,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__43716);
var G__43716__$2 = (cljs.core.truth_((function (){var fexpr__43718 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__43718.cljs$core$IFn$_invoke$arity$1 ? fexpr__43718.cljs$core$IFn$_invoke$arity$1(source) : fexpr__43718.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__43716__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__43716__$1);
var G__43716__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43716__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__43716__$2);
var G__43716__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43716__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__43716__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43716__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__43716__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__43722 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43722,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43722,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43722,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43722,(3),null);
var G__43726 = top_data;
var G__43726__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43726,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__43726);
var G__43726__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43726__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__43726__$1);
var G__43726__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43726__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__43726__$2);
var G__43726__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43726__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__43726__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43726__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__43726__$4;
}

break;
case "execution":
var vec__43738 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43738,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43738,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43738,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43738,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__43692_SHARP_){
var or__5045__auto__ = (p1__43692_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__43743 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__43743.cljs$core$IFn$_invoke$arity$1 ? fexpr__43743.cljs$core$IFn$_invoke$arity$1(p1__43692_SHARP_) : fexpr__43743.call(null,p1__43692_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__43746 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__43746__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43746,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__43746);
var G__43746__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43746__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__43746__$1);
var G__43746__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43746__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__43746__$2);
var G__43746__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43746__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__43746__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43746__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__43746__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43703__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__43759){
var map__43761 = p__43759;
var map__43761__$1 = cljs.core.__destructure_map(map__43761);
var triage_data = map__43761__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43761__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43761__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43761__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43761__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43761__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43761__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43761__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43761__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__43768 = phase;
var G__43768__$1 = (((G__43768 instanceof cljs.core.Keyword))?G__43768.fqn:null);
switch (G__43768__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__43769 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__43770 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43771 = loc;
var G__43772 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43773_44041 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43774_44042 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43775_44043 = true;
var _STAR_print_fn_STAR__temp_val__43776_44044 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43775_44043);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43776_44044);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43755_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__43755_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43774_44042);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43773_44041);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__43769,G__43770,G__43771,G__43772) : format.call(null,G__43769,G__43770,G__43771,G__43772));

break;
case "macroexpansion":
var G__43777 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__43778 = cause_type;
var G__43779 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43780 = loc;
var G__43781 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43777,G__43778,G__43779,G__43780,G__43781) : format.call(null,G__43777,G__43778,G__43779,G__43780,G__43781));

break;
case "compile-syntax-check":
var G__43782 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__43783 = cause_type;
var G__43784 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43785 = loc;
var G__43786 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43782,G__43783,G__43784,G__43785,G__43786) : format.call(null,G__43782,G__43783,G__43784,G__43785,G__43786));

break;
case "compilation":
var G__43787 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__43788 = cause_type;
var G__43789 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43790 = loc;
var G__43791 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43787,G__43788,G__43789,G__43790,G__43791) : format.call(null,G__43787,G__43788,G__43789,G__43790,G__43791));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__43792 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__43793 = symbol;
var G__43795 = loc;
var G__43796 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43797_44056 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43798_44057 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43799_44058 = true;
var _STAR_print_fn_STAR__temp_val__43800_44059 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43799_44058);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43800_44059);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43758_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__43758_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43798_44057);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43797_44056);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__43792,G__43793,G__43795,G__43796) : format.call(null,G__43792,G__43793,G__43795,G__43796));
} else {
var G__43801 = "Execution error%s at %s(%s).\n%s\n";
var G__43802 = cause_type;
var G__43803 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43804 = loc;
var G__43805 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43801,G__43802,G__43803,G__43804,G__43805) : format.call(null,G__43801,G__43802,G__43803,G__43804,G__43805));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43768__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
