goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_46631 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_46631(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_46634 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_46634(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__45383 = coll;
var G__45384 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__45383,G__45384) : shadow.dom.lazy_native_coll_seq.call(null,G__45383,G__45384));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__45436 = arguments.length;
switch (G__45436) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__45453 = arguments.length;
switch (G__45453) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__45470 = arguments.length;
switch (G__45470) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__45491 = arguments.length;
switch (G__45491) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__45522 = arguments.length;
switch (G__45522) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__45546 = arguments.length;
switch (G__45546) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e45557){if((e45557 instanceof Object)){
var e = e45557;
return console.log("didnt support attachEvent",el,e);
} else {
throw e45557;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__45577 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__45578 = null;
var count__45579 = (0);
var i__45580 = (0);
while(true){
if((i__45580 < count__45579)){
var el = chunk__45578.cljs$core$IIndexed$_nth$arity$2(null,i__45580);
var handler_46668__$1 = ((function (seq__45577,chunk__45578,count__45579,i__45580,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__45577,chunk__45578,count__45579,i__45580,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_46668__$1);


var G__46669 = seq__45577;
var G__46670 = chunk__45578;
var G__46671 = count__45579;
var G__46672 = (i__45580 + (1));
seq__45577 = G__46669;
chunk__45578 = G__46670;
count__45579 = G__46671;
i__45580 = G__46672;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__45577);
if(temp__5804__auto__){
var seq__45577__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45577__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__45577__$1);
var G__46673 = cljs.core.chunk_rest(seq__45577__$1);
var G__46674 = c__5568__auto__;
var G__46675 = cljs.core.count(c__5568__auto__);
var G__46676 = (0);
seq__45577 = G__46673;
chunk__45578 = G__46674;
count__45579 = G__46675;
i__45580 = G__46676;
continue;
} else {
var el = cljs.core.first(seq__45577__$1);
var handler_46677__$1 = ((function (seq__45577,chunk__45578,count__45579,i__45580,el,seq__45577__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__45577,chunk__45578,count__45579,i__45580,el,seq__45577__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_46677__$1);


var G__46680 = cljs.core.next(seq__45577__$1);
var G__46681 = null;
var G__46682 = (0);
var G__46683 = (0);
seq__45577 = G__46680;
chunk__45578 = G__46681;
count__45579 = G__46682;
i__45580 = G__46683;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__45611 = arguments.length;
switch (G__45611) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__45629 = cljs.core.seq(events);
var chunk__45630 = null;
var count__45631 = (0);
var i__45632 = (0);
while(true){
if((i__45632 < count__45631)){
var vec__45655 = chunk__45630.cljs$core$IIndexed$_nth$arity$2(null,i__45632);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45655,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45655,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__46694 = seq__45629;
var G__46695 = chunk__45630;
var G__46696 = count__45631;
var G__46697 = (i__45632 + (1));
seq__45629 = G__46694;
chunk__45630 = G__46695;
count__45631 = G__46696;
i__45632 = G__46697;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__45629);
if(temp__5804__auto__){
var seq__45629__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45629__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__45629__$1);
var G__46698 = cljs.core.chunk_rest(seq__45629__$1);
var G__46699 = c__5568__auto__;
var G__46700 = cljs.core.count(c__5568__auto__);
var G__46701 = (0);
seq__45629 = G__46698;
chunk__45630 = G__46699;
count__45631 = G__46700;
i__45632 = G__46701;
continue;
} else {
var vec__45665 = cljs.core.first(seq__45629__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45665,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45665,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__46702 = cljs.core.next(seq__45629__$1);
var G__46703 = null;
var G__46704 = (0);
var G__46705 = (0);
seq__45629 = G__46702;
chunk__45630 = G__46703;
count__45631 = G__46704;
i__45632 = G__46705;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__45677 = cljs.core.seq(styles);
var chunk__45678 = null;
var count__45679 = (0);
var i__45680 = (0);
while(true){
if((i__45680 < count__45679)){
var vec__45711 = chunk__45678.cljs$core$IIndexed$_nth$arity$2(null,i__45680);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45711,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45711,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__46712 = seq__45677;
var G__46713 = chunk__45678;
var G__46714 = count__45679;
var G__46715 = (i__45680 + (1));
seq__45677 = G__46712;
chunk__45678 = G__46713;
count__45679 = G__46714;
i__45680 = G__46715;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__45677);
if(temp__5804__auto__){
var seq__45677__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45677__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__45677__$1);
var G__46728 = cljs.core.chunk_rest(seq__45677__$1);
var G__46729 = c__5568__auto__;
var G__46730 = cljs.core.count(c__5568__auto__);
var G__46731 = (0);
seq__45677 = G__46728;
chunk__45678 = G__46729;
count__45679 = G__46730;
i__45680 = G__46731;
continue;
} else {
var vec__45719 = cljs.core.first(seq__45677__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45719,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45719,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__46739 = cljs.core.next(seq__45677__$1);
var G__46740 = null;
var G__46741 = (0);
var G__46742 = (0);
seq__45677 = G__46739;
chunk__45678 = G__46740;
count__45679 = G__46741;
i__45680 = G__46742;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__45732_46750 = key;
var G__45732_46751__$1 = (((G__45732_46750 instanceof cljs.core.Keyword))?G__45732_46750.fqn:null);
switch (G__45732_46751__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_46759 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_46759,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_46759,"aria-");
}
})())){
el.setAttribute(ks_46759,value);
} else {
(el[ks_46759] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__45781){
var map__45783 = p__45781;
var map__45783__$1 = cljs.core.__destructure_map(map__45783);
var props = map__45783__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45783__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__45788 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45788,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45788,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45788,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__45793 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__45793,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__45793;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__45807 = arguments.length;
switch (G__45807) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__45833){
var vec__45834 = p__45833;
var seq__45835 = cljs.core.seq(vec__45834);
var first__45836 = cljs.core.first(seq__45835);
var seq__45835__$1 = cljs.core.next(seq__45835);
var nn = first__45836;
var first__45836__$1 = cljs.core.first(seq__45835__$1);
var seq__45835__$2 = cljs.core.next(seq__45835__$1);
var np = first__45836__$1;
var nc = seq__45835__$2;
var node = vec__45834;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45843 = nn;
var G__45844 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__45843,G__45844) : create_fn.call(null,G__45843,G__45844));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45848 = nn;
var G__45849 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__45848,G__45849) : create_fn.call(null,G__45848,G__45849));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__45851 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45851,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45851,(1),null);
var seq__45854_46769 = cljs.core.seq(node_children);
var chunk__45855_46770 = null;
var count__45856_46771 = (0);
var i__45857_46772 = (0);
while(true){
if((i__45857_46772 < count__45856_46771)){
var child_struct_46773 = chunk__45855_46770.cljs$core$IIndexed$_nth$arity$2(null,i__45857_46772);
var children_46774 = shadow.dom.dom_node(child_struct_46773);
if(cljs.core.seq_QMARK_(children_46774)){
var seq__45923_46775 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_46774));
var chunk__45925_46776 = null;
var count__45926_46777 = (0);
var i__45927_46778 = (0);
while(true){
if((i__45927_46778 < count__45926_46777)){
var child_46780 = chunk__45925_46776.cljs$core$IIndexed$_nth$arity$2(null,i__45927_46778);
if(cljs.core.truth_(child_46780)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46780);


var G__46783 = seq__45923_46775;
var G__46784 = chunk__45925_46776;
var G__46785 = count__45926_46777;
var G__46786 = (i__45927_46778 + (1));
seq__45923_46775 = G__46783;
chunk__45925_46776 = G__46784;
count__45926_46777 = G__46785;
i__45927_46778 = G__46786;
continue;
} else {
var G__46787 = seq__45923_46775;
var G__46788 = chunk__45925_46776;
var G__46789 = count__45926_46777;
var G__46790 = (i__45927_46778 + (1));
seq__45923_46775 = G__46787;
chunk__45925_46776 = G__46788;
count__45926_46777 = G__46789;
i__45927_46778 = G__46790;
continue;
}
} else {
var temp__5804__auto___46791 = cljs.core.seq(seq__45923_46775);
if(temp__5804__auto___46791){
var seq__45923_46792__$1 = temp__5804__auto___46791;
if(cljs.core.chunked_seq_QMARK_(seq__45923_46792__$1)){
var c__5568__auto___46793 = cljs.core.chunk_first(seq__45923_46792__$1);
var G__46794 = cljs.core.chunk_rest(seq__45923_46792__$1);
var G__46795 = c__5568__auto___46793;
var G__46796 = cljs.core.count(c__5568__auto___46793);
var G__46797 = (0);
seq__45923_46775 = G__46794;
chunk__45925_46776 = G__46795;
count__45926_46777 = G__46796;
i__45927_46778 = G__46797;
continue;
} else {
var child_46798 = cljs.core.first(seq__45923_46792__$1);
if(cljs.core.truth_(child_46798)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46798);


var G__46799 = cljs.core.next(seq__45923_46792__$1);
var G__46800 = null;
var G__46801 = (0);
var G__46802 = (0);
seq__45923_46775 = G__46799;
chunk__45925_46776 = G__46800;
count__45926_46777 = G__46801;
i__45927_46778 = G__46802;
continue;
} else {
var G__46803 = cljs.core.next(seq__45923_46792__$1);
var G__46804 = null;
var G__46805 = (0);
var G__46806 = (0);
seq__45923_46775 = G__46803;
chunk__45925_46776 = G__46804;
count__45926_46777 = G__46805;
i__45927_46778 = G__46806;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_46774);
}


var G__46808 = seq__45854_46769;
var G__46809 = chunk__45855_46770;
var G__46810 = count__45856_46771;
var G__46811 = (i__45857_46772 + (1));
seq__45854_46769 = G__46808;
chunk__45855_46770 = G__46809;
count__45856_46771 = G__46810;
i__45857_46772 = G__46811;
continue;
} else {
var temp__5804__auto___46812 = cljs.core.seq(seq__45854_46769);
if(temp__5804__auto___46812){
var seq__45854_46816__$1 = temp__5804__auto___46812;
if(cljs.core.chunked_seq_QMARK_(seq__45854_46816__$1)){
var c__5568__auto___46817 = cljs.core.chunk_first(seq__45854_46816__$1);
var G__46818 = cljs.core.chunk_rest(seq__45854_46816__$1);
var G__46819 = c__5568__auto___46817;
var G__46820 = cljs.core.count(c__5568__auto___46817);
var G__46821 = (0);
seq__45854_46769 = G__46818;
chunk__45855_46770 = G__46819;
count__45856_46771 = G__46820;
i__45857_46772 = G__46821;
continue;
} else {
var child_struct_46822 = cljs.core.first(seq__45854_46816__$1);
var children_46823 = shadow.dom.dom_node(child_struct_46822);
if(cljs.core.seq_QMARK_(children_46823)){
var seq__45961_46824 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_46823));
var chunk__45963_46825 = null;
var count__45964_46826 = (0);
var i__45965_46827 = (0);
while(true){
if((i__45965_46827 < count__45964_46826)){
var child_46828 = chunk__45963_46825.cljs$core$IIndexed$_nth$arity$2(null,i__45965_46827);
if(cljs.core.truth_(child_46828)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46828);


var G__46829 = seq__45961_46824;
var G__46830 = chunk__45963_46825;
var G__46831 = count__45964_46826;
var G__46832 = (i__45965_46827 + (1));
seq__45961_46824 = G__46829;
chunk__45963_46825 = G__46830;
count__45964_46826 = G__46831;
i__45965_46827 = G__46832;
continue;
} else {
var G__46833 = seq__45961_46824;
var G__46834 = chunk__45963_46825;
var G__46835 = count__45964_46826;
var G__46836 = (i__45965_46827 + (1));
seq__45961_46824 = G__46833;
chunk__45963_46825 = G__46834;
count__45964_46826 = G__46835;
i__45965_46827 = G__46836;
continue;
}
} else {
var temp__5804__auto___46839__$1 = cljs.core.seq(seq__45961_46824);
if(temp__5804__auto___46839__$1){
var seq__45961_46840__$1 = temp__5804__auto___46839__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45961_46840__$1)){
var c__5568__auto___46841 = cljs.core.chunk_first(seq__45961_46840__$1);
var G__46842 = cljs.core.chunk_rest(seq__45961_46840__$1);
var G__46843 = c__5568__auto___46841;
var G__46844 = cljs.core.count(c__5568__auto___46841);
var G__46845 = (0);
seq__45961_46824 = G__46842;
chunk__45963_46825 = G__46843;
count__45964_46826 = G__46844;
i__45965_46827 = G__46845;
continue;
} else {
var child_46847 = cljs.core.first(seq__45961_46840__$1);
if(cljs.core.truth_(child_46847)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46847);


var G__46851 = cljs.core.next(seq__45961_46840__$1);
var G__46852 = null;
var G__46853 = (0);
var G__46854 = (0);
seq__45961_46824 = G__46851;
chunk__45963_46825 = G__46852;
count__45964_46826 = G__46853;
i__45965_46827 = G__46854;
continue;
} else {
var G__46855 = cljs.core.next(seq__45961_46840__$1);
var G__46856 = null;
var G__46857 = (0);
var G__46858 = (0);
seq__45961_46824 = G__46855;
chunk__45963_46825 = G__46856;
count__45964_46826 = G__46857;
i__45965_46827 = G__46858;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_46823);
}


var G__46859 = cljs.core.next(seq__45854_46816__$1);
var G__46860 = null;
var G__46861 = (0);
var G__46862 = (0);
seq__45854_46769 = G__46859;
chunk__45855_46770 = G__46860;
count__45856_46771 = G__46861;
i__45857_46772 = G__46862;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__46030 = cljs.core.seq(node);
var chunk__46031 = null;
var count__46032 = (0);
var i__46033 = (0);
while(true){
if((i__46033 < count__46032)){
var n = chunk__46031.cljs$core$IIndexed$_nth$arity$2(null,i__46033);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__46872 = seq__46030;
var G__46873 = chunk__46031;
var G__46874 = count__46032;
var G__46875 = (i__46033 + (1));
seq__46030 = G__46872;
chunk__46031 = G__46873;
count__46032 = G__46874;
i__46033 = G__46875;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46030);
if(temp__5804__auto__){
var seq__46030__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46030__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46030__$1);
var G__46878 = cljs.core.chunk_rest(seq__46030__$1);
var G__46879 = c__5568__auto__;
var G__46880 = cljs.core.count(c__5568__auto__);
var G__46881 = (0);
seq__46030 = G__46878;
chunk__46031 = G__46879;
count__46032 = G__46880;
i__46033 = G__46881;
continue;
} else {
var n = cljs.core.first(seq__46030__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__46886 = cljs.core.next(seq__46030__$1);
var G__46887 = null;
var G__46888 = (0);
var G__46889 = (0);
seq__46030 = G__46886;
chunk__46031 = G__46887;
count__46032 = G__46888;
i__46033 = G__46889;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__46039 = arguments.length;
switch (G__46039) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__46055 = arguments.length;
switch (G__46055) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__46083 = arguments.length;
switch (G__46083) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___46906 = arguments.length;
var i__5770__auto___46907 = (0);
while(true){
if((i__5770__auto___46907 < len__5769__auto___46906)){
args__5775__auto__.push((arguments[i__5770__auto___46907]));

var G__46911 = (i__5770__auto___46907 + (1));
i__5770__auto___46907 = G__46911;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__46142_46912 = cljs.core.seq(nodes);
var chunk__46143_46913 = null;
var count__46144_46914 = (0);
var i__46145_46915 = (0);
while(true){
if((i__46145_46915 < count__46144_46914)){
var node_46916 = chunk__46143_46913.cljs$core$IIndexed$_nth$arity$2(null,i__46145_46915);
fragment.appendChild(shadow.dom._to_dom(node_46916));


var G__46919 = seq__46142_46912;
var G__46920 = chunk__46143_46913;
var G__46921 = count__46144_46914;
var G__46922 = (i__46145_46915 + (1));
seq__46142_46912 = G__46919;
chunk__46143_46913 = G__46920;
count__46144_46914 = G__46921;
i__46145_46915 = G__46922;
continue;
} else {
var temp__5804__auto___46923 = cljs.core.seq(seq__46142_46912);
if(temp__5804__auto___46923){
var seq__46142_46924__$1 = temp__5804__auto___46923;
if(cljs.core.chunked_seq_QMARK_(seq__46142_46924__$1)){
var c__5568__auto___46925 = cljs.core.chunk_first(seq__46142_46924__$1);
var G__46926 = cljs.core.chunk_rest(seq__46142_46924__$1);
var G__46927 = c__5568__auto___46925;
var G__46928 = cljs.core.count(c__5568__auto___46925);
var G__46929 = (0);
seq__46142_46912 = G__46926;
chunk__46143_46913 = G__46927;
count__46144_46914 = G__46928;
i__46145_46915 = G__46929;
continue;
} else {
var node_46930 = cljs.core.first(seq__46142_46924__$1);
fragment.appendChild(shadow.dom._to_dom(node_46930));


var G__46931 = cljs.core.next(seq__46142_46924__$1);
var G__46932 = null;
var G__46933 = (0);
var G__46934 = (0);
seq__46142_46912 = G__46931;
chunk__46143_46913 = G__46932;
count__46144_46914 = G__46933;
i__46145_46915 = G__46934;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq46136){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46136));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__46184_46941 = cljs.core.seq(scripts);
var chunk__46185_46942 = null;
var count__46186_46943 = (0);
var i__46187_46944 = (0);
while(true){
if((i__46187_46944 < count__46186_46943)){
var vec__46218_46950 = chunk__46185_46942.cljs$core$IIndexed$_nth$arity$2(null,i__46187_46944);
var script_tag_46951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46218_46950,(0),null);
var script_body_46952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46218_46950,(1),null);
eval(script_body_46952);


var G__46957 = seq__46184_46941;
var G__46958 = chunk__46185_46942;
var G__46959 = count__46186_46943;
var G__46960 = (i__46187_46944 + (1));
seq__46184_46941 = G__46957;
chunk__46185_46942 = G__46958;
count__46186_46943 = G__46959;
i__46187_46944 = G__46960;
continue;
} else {
var temp__5804__auto___46961 = cljs.core.seq(seq__46184_46941);
if(temp__5804__auto___46961){
var seq__46184_46962__$1 = temp__5804__auto___46961;
if(cljs.core.chunked_seq_QMARK_(seq__46184_46962__$1)){
var c__5568__auto___46963 = cljs.core.chunk_first(seq__46184_46962__$1);
var G__46964 = cljs.core.chunk_rest(seq__46184_46962__$1);
var G__46965 = c__5568__auto___46963;
var G__46966 = cljs.core.count(c__5568__auto___46963);
var G__46967 = (0);
seq__46184_46941 = G__46964;
chunk__46185_46942 = G__46965;
count__46186_46943 = G__46966;
i__46187_46944 = G__46967;
continue;
} else {
var vec__46229_46968 = cljs.core.first(seq__46184_46962__$1);
var script_tag_46969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46229_46968,(0),null);
var script_body_46970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46229_46968,(1),null);
eval(script_body_46970);


var G__46973 = cljs.core.next(seq__46184_46962__$1);
var G__46974 = null;
var G__46975 = (0);
var G__46976 = (0);
seq__46184_46941 = G__46973;
chunk__46185_46942 = G__46974;
count__46186_46943 = G__46975;
i__46187_46944 = G__46976;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__46235){
var vec__46236 = p__46235;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46236,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46236,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__46264 = arguments.length;
switch (G__46264) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__46274 = cljs.core.seq(style_keys);
var chunk__46275 = null;
var count__46276 = (0);
var i__46277 = (0);
while(true){
if((i__46277 < count__46276)){
var it = chunk__46275.cljs$core$IIndexed$_nth$arity$2(null,i__46277);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__46994 = seq__46274;
var G__46995 = chunk__46275;
var G__46996 = count__46276;
var G__46997 = (i__46277 + (1));
seq__46274 = G__46994;
chunk__46275 = G__46995;
count__46276 = G__46996;
i__46277 = G__46997;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46274);
if(temp__5804__auto__){
var seq__46274__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46274__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46274__$1);
var G__46998 = cljs.core.chunk_rest(seq__46274__$1);
var G__46999 = c__5568__auto__;
var G__47000 = cljs.core.count(c__5568__auto__);
var G__47001 = (0);
seq__46274 = G__46998;
chunk__46275 = G__46999;
count__46276 = G__47000;
i__46277 = G__47001;
continue;
} else {
var it = cljs.core.first(seq__46274__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__47002 = cljs.core.next(seq__46274__$1);
var G__47003 = null;
var G__47004 = (0);
var G__47005 = (0);
seq__46274 = G__47002;
chunk__46275 = G__47003;
count__46276 = G__47004;
i__46277 = G__47005;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k46287,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__46298 = k46287;
var G__46298__$1 = (((G__46298 instanceof cljs.core.Keyword))?G__46298.fqn:null);
switch (G__46298__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46287,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__46302){
var vec__46303 = p__46302;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46303,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46303,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46286){
var self__ = this;
var G__46286__$1 = this;
return (new cljs.core.RecordIter((0),G__46286__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46288,other46289){
var self__ = this;
var this46288__$1 = this;
return (((!((other46289 == null)))) && ((((this46288__$1.constructor === other46289.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46288__$1.x,other46289.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46288__$1.y,other46289.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46288__$1.__extmap,other46289.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k46287){
var self__ = this;
var this__5350__auto____$1 = this;
var G__46321 = k46287;
var G__46321__$1 = (((G__46321 instanceof cljs.core.Keyword))?G__46321.fqn:null);
switch (G__46321__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46287);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__46286){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__46322 = cljs.core.keyword_identical_QMARK_;
var expr__46323 = k__5352__auto__;
if(cljs.core.truth_((pred__46322.cljs$core$IFn$_invoke$arity$2 ? pred__46322.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__46323) : pred__46322.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__46323)))){
return (new shadow.dom.Coordinate(G__46286,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46322.cljs$core$IFn$_invoke$arity$2 ? pred__46322.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__46323) : pred__46322.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__46323)))){
return (new shadow.dom.Coordinate(self__.x,G__46286,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__46286),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__46286){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__46286,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__46294){
var extmap__5385__auto__ = (function (){var G__46329 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46294,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__46294)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46329);
} else {
return G__46329;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__46294),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__46294),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k46347,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__46369 = k46347;
var G__46369__$1 = (((G__46369 instanceof cljs.core.Keyword))?G__46369.fqn:null);
switch (G__46369__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46347,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__46372){
var vec__46373 = p__46372;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46373,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46373,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46346){
var self__ = this;
var G__46346__$1 = this;
return (new cljs.core.RecordIter((0),G__46346__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46348,other46349){
var self__ = this;
var this46348__$1 = this;
return (((!((other46349 == null)))) && ((((this46348__$1.constructor === other46349.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46348__$1.w,other46349.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46348__$1.h,other46349.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46348__$1.__extmap,other46349.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k46347){
var self__ = this;
var this__5350__auto____$1 = this;
var G__46394 = k46347;
var G__46394__$1 = (((G__46394 instanceof cljs.core.Keyword))?G__46394.fqn:null);
switch (G__46394__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46347);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__46346){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__46395 = cljs.core.keyword_identical_QMARK_;
var expr__46396 = k__5352__auto__;
if(cljs.core.truth_((pred__46395.cljs$core$IFn$_invoke$arity$2 ? pred__46395.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__46396) : pred__46395.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__46396)))){
return (new shadow.dom.Size(G__46346,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46395.cljs$core$IFn$_invoke$arity$2 ? pred__46395.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__46396) : pred__46395.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__46396)))){
return (new shadow.dom.Size(self__.w,G__46346,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__46346),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__46346){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__46346,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__46350){
var extmap__5385__auto__ = (function (){var G__46410 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46350,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__46350)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46410);
} else {
return G__46410;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__46350),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__46350),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__47081 = (i + (1));
var G__47082 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__47081;
ret = G__47082;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46436){
var vec__46437 = p__46436;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46437,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46437,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__46451 = arguments.length;
switch (G__46451) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__47088 = ps;
var G__47089 = (i + (1));
el__$1 = G__47088;
i = G__47089;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__46462 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46462,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46462,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46462,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__46465_47094 = cljs.core.seq(props);
var chunk__46466_47095 = null;
var count__46467_47096 = (0);
var i__46468_47097 = (0);
while(true){
if((i__46468_47097 < count__46467_47096)){
var vec__46479_47098 = chunk__46466_47095.cljs$core$IIndexed$_nth$arity$2(null,i__46468_47097);
var k_47099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46479_47098,(0),null);
var v_47100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46479_47098,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_47099);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_47099),v_47100);


var G__47104 = seq__46465_47094;
var G__47105 = chunk__46466_47095;
var G__47106 = count__46467_47096;
var G__47107 = (i__46468_47097 + (1));
seq__46465_47094 = G__47104;
chunk__46466_47095 = G__47105;
count__46467_47096 = G__47106;
i__46468_47097 = G__47107;
continue;
} else {
var temp__5804__auto___47108 = cljs.core.seq(seq__46465_47094);
if(temp__5804__auto___47108){
var seq__46465_47109__$1 = temp__5804__auto___47108;
if(cljs.core.chunked_seq_QMARK_(seq__46465_47109__$1)){
var c__5568__auto___47110 = cljs.core.chunk_first(seq__46465_47109__$1);
var G__47111 = cljs.core.chunk_rest(seq__46465_47109__$1);
var G__47112 = c__5568__auto___47110;
var G__47113 = cljs.core.count(c__5568__auto___47110);
var G__47114 = (0);
seq__46465_47094 = G__47111;
chunk__46466_47095 = G__47112;
count__46467_47096 = G__47113;
i__46468_47097 = G__47114;
continue;
} else {
var vec__46485_47115 = cljs.core.first(seq__46465_47109__$1);
var k_47116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46485_47115,(0),null);
var v_47117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46485_47115,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_47116);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_47116),v_47117);


var G__47118 = cljs.core.next(seq__46465_47109__$1);
var G__47119 = null;
var G__47120 = (0);
var G__47121 = (0);
seq__46465_47094 = G__47118;
chunk__46466_47095 = G__47119;
count__46467_47096 = G__47120;
i__46468_47097 = G__47121;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__46494 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46494,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46494,(1),null);
var seq__46497_47123 = cljs.core.seq(node_children);
var chunk__46499_47124 = null;
var count__46500_47125 = (0);
var i__46501_47126 = (0);
while(true){
if((i__46501_47126 < count__46500_47125)){
var child_struct_47130 = chunk__46499_47124.cljs$core$IIndexed$_nth$arity$2(null,i__46501_47126);
if((!((child_struct_47130 == null)))){
if(typeof child_struct_47130 === 'string'){
var text_47131 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_47131),child_struct_47130].join(''));
} else {
var children_47132 = shadow.dom.svg_node(child_struct_47130);
if(cljs.core.seq_QMARK_(children_47132)){
var seq__46538_47133 = cljs.core.seq(children_47132);
var chunk__46540_47134 = null;
var count__46541_47135 = (0);
var i__46542_47136 = (0);
while(true){
if((i__46542_47136 < count__46541_47135)){
var child_47140 = chunk__46540_47134.cljs$core$IIndexed$_nth$arity$2(null,i__46542_47136);
if(cljs.core.truth_(child_47140)){
node.appendChild(child_47140);


var G__47141 = seq__46538_47133;
var G__47142 = chunk__46540_47134;
var G__47143 = count__46541_47135;
var G__47144 = (i__46542_47136 + (1));
seq__46538_47133 = G__47141;
chunk__46540_47134 = G__47142;
count__46541_47135 = G__47143;
i__46542_47136 = G__47144;
continue;
} else {
var G__47145 = seq__46538_47133;
var G__47146 = chunk__46540_47134;
var G__47147 = count__46541_47135;
var G__47148 = (i__46542_47136 + (1));
seq__46538_47133 = G__47145;
chunk__46540_47134 = G__47146;
count__46541_47135 = G__47147;
i__46542_47136 = G__47148;
continue;
}
} else {
var temp__5804__auto___47149 = cljs.core.seq(seq__46538_47133);
if(temp__5804__auto___47149){
var seq__46538_47150__$1 = temp__5804__auto___47149;
if(cljs.core.chunked_seq_QMARK_(seq__46538_47150__$1)){
var c__5568__auto___47151 = cljs.core.chunk_first(seq__46538_47150__$1);
var G__47152 = cljs.core.chunk_rest(seq__46538_47150__$1);
var G__47153 = c__5568__auto___47151;
var G__47154 = cljs.core.count(c__5568__auto___47151);
var G__47155 = (0);
seq__46538_47133 = G__47152;
chunk__46540_47134 = G__47153;
count__46541_47135 = G__47154;
i__46542_47136 = G__47155;
continue;
} else {
var child_47156 = cljs.core.first(seq__46538_47150__$1);
if(cljs.core.truth_(child_47156)){
node.appendChild(child_47156);


var G__47157 = cljs.core.next(seq__46538_47150__$1);
var G__47158 = null;
var G__47159 = (0);
var G__47160 = (0);
seq__46538_47133 = G__47157;
chunk__46540_47134 = G__47158;
count__46541_47135 = G__47159;
i__46542_47136 = G__47160;
continue;
} else {
var G__47161 = cljs.core.next(seq__46538_47150__$1);
var G__47162 = null;
var G__47163 = (0);
var G__47164 = (0);
seq__46538_47133 = G__47161;
chunk__46540_47134 = G__47162;
count__46541_47135 = G__47163;
i__46542_47136 = G__47164;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_47132);
}
}


var G__47165 = seq__46497_47123;
var G__47166 = chunk__46499_47124;
var G__47167 = count__46500_47125;
var G__47168 = (i__46501_47126 + (1));
seq__46497_47123 = G__47165;
chunk__46499_47124 = G__47166;
count__46500_47125 = G__47167;
i__46501_47126 = G__47168;
continue;
} else {
var G__47172 = seq__46497_47123;
var G__47173 = chunk__46499_47124;
var G__47174 = count__46500_47125;
var G__47175 = (i__46501_47126 + (1));
seq__46497_47123 = G__47172;
chunk__46499_47124 = G__47173;
count__46500_47125 = G__47174;
i__46501_47126 = G__47175;
continue;
}
} else {
var temp__5804__auto___47176 = cljs.core.seq(seq__46497_47123);
if(temp__5804__auto___47176){
var seq__46497_47177__$1 = temp__5804__auto___47176;
if(cljs.core.chunked_seq_QMARK_(seq__46497_47177__$1)){
var c__5568__auto___47178 = cljs.core.chunk_first(seq__46497_47177__$1);
var G__47179 = cljs.core.chunk_rest(seq__46497_47177__$1);
var G__47180 = c__5568__auto___47178;
var G__47181 = cljs.core.count(c__5568__auto___47178);
var G__47182 = (0);
seq__46497_47123 = G__47179;
chunk__46499_47124 = G__47180;
count__46500_47125 = G__47181;
i__46501_47126 = G__47182;
continue;
} else {
var child_struct_47183 = cljs.core.first(seq__46497_47177__$1);
if((!((child_struct_47183 == null)))){
if(typeof child_struct_47183 === 'string'){
var text_47184 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_47184),child_struct_47183].join(''));
} else {
var children_47185 = shadow.dom.svg_node(child_struct_47183);
if(cljs.core.seq_QMARK_(children_47185)){
var seq__46557_47186 = cljs.core.seq(children_47185);
var chunk__46559_47187 = null;
var count__46560_47188 = (0);
var i__46561_47189 = (0);
while(true){
if((i__46561_47189 < count__46560_47188)){
var child_47190 = chunk__46559_47187.cljs$core$IIndexed$_nth$arity$2(null,i__46561_47189);
if(cljs.core.truth_(child_47190)){
node.appendChild(child_47190);


var G__47191 = seq__46557_47186;
var G__47192 = chunk__46559_47187;
var G__47193 = count__46560_47188;
var G__47194 = (i__46561_47189 + (1));
seq__46557_47186 = G__47191;
chunk__46559_47187 = G__47192;
count__46560_47188 = G__47193;
i__46561_47189 = G__47194;
continue;
} else {
var G__47195 = seq__46557_47186;
var G__47196 = chunk__46559_47187;
var G__47197 = count__46560_47188;
var G__47198 = (i__46561_47189 + (1));
seq__46557_47186 = G__47195;
chunk__46559_47187 = G__47196;
count__46560_47188 = G__47197;
i__46561_47189 = G__47198;
continue;
}
} else {
var temp__5804__auto___47199__$1 = cljs.core.seq(seq__46557_47186);
if(temp__5804__auto___47199__$1){
var seq__46557_47200__$1 = temp__5804__auto___47199__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46557_47200__$1)){
var c__5568__auto___47201 = cljs.core.chunk_first(seq__46557_47200__$1);
var G__47202 = cljs.core.chunk_rest(seq__46557_47200__$1);
var G__47203 = c__5568__auto___47201;
var G__47204 = cljs.core.count(c__5568__auto___47201);
var G__47205 = (0);
seq__46557_47186 = G__47202;
chunk__46559_47187 = G__47203;
count__46560_47188 = G__47204;
i__46561_47189 = G__47205;
continue;
} else {
var child_47206 = cljs.core.first(seq__46557_47200__$1);
if(cljs.core.truth_(child_47206)){
node.appendChild(child_47206);


var G__47207 = cljs.core.next(seq__46557_47200__$1);
var G__47208 = null;
var G__47209 = (0);
var G__47210 = (0);
seq__46557_47186 = G__47207;
chunk__46559_47187 = G__47208;
count__46560_47188 = G__47209;
i__46561_47189 = G__47210;
continue;
} else {
var G__47211 = cljs.core.next(seq__46557_47200__$1);
var G__47212 = null;
var G__47213 = (0);
var G__47214 = (0);
seq__46557_47186 = G__47211;
chunk__46559_47187 = G__47212;
count__46560_47188 = G__47213;
i__46561_47189 = G__47214;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_47185);
}
}


var G__47218 = cljs.core.next(seq__46497_47177__$1);
var G__47219 = null;
var G__47220 = (0);
var G__47221 = (0);
seq__46497_47123 = G__47218;
chunk__46499_47124 = G__47219;
count__46500_47125 = G__47220;
i__46501_47126 = G__47221;
continue;
} else {
var G__47222 = cljs.core.next(seq__46497_47177__$1);
var G__47223 = null;
var G__47224 = (0);
var G__47225 = (0);
seq__46497_47123 = G__47222;
chunk__46499_47124 = G__47223;
count__46500_47125 = G__47224;
i__46501_47126 = G__47225;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___47227 = arguments.length;
var i__5770__auto___47228 = (0);
while(true){
if((i__5770__auto___47228 < len__5769__auto___47227)){
args__5775__auto__.push((arguments[i__5770__auto___47228]));

var G__47229 = (i__5770__auto___47228 + (1));
i__5770__auto___47228 = G__47229;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq46567){
var G__46568 = cljs.core.first(seq46567);
var seq46567__$1 = cljs.core.next(seq46567);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46568,seq46567__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__46578 = arguments.length;
switch (G__46578) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__42630__auto___47235 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42631__auto__ = (function (){var switch__42355__auto__ = (function (state_46589){
var state_val_46590 = (state_46589[(1)]);
if((state_val_46590 === (1))){
var state_46589__$1 = state_46589;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46589__$1,(2),once_or_cleanup);
} else {
if((state_val_46590 === (2))){
var inst_46586 = (state_46589[(2)]);
var inst_46587 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_46589__$1 = (function (){var statearr_46598 = state_46589;
(statearr_46598[(7)] = inst_46586);

return statearr_46598;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46589__$1,inst_46587);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__42356__auto__ = null;
var shadow$dom$state_machine__42356__auto____0 = (function (){
var statearr_46599 = [null,null,null,null,null,null,null,null];
(statearr_46599[(0)] = shadow$dom$state_machine__42356__auto__);

(statearr_46599[(1)] = (1));

return statearr_46599;
});
var shadow$dom$state_machine__42356__auto____1 = (function (state_46589){
while(true){
var ret_value__42357__auto__ = (function (){try{while(true){
var result__42358__auto__ = switch__42355__auto__(state_46589);
if(cljs.core.keyword_identical_QMARK_(result__42358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42358__auto__;
}
break;
}
}catch (e46603){var ex__42359__auto__ = e46603;
var statearr_46606_47236 = state_46589;
(statearr_46606_47236[(2)] = ex__42359__auto__);


if(cljs.core.seq((state_46589[(4)]))){
var statearr_46608_47237 = state_46589;
(statearr_46608_47237[(1)] = cljs.core.first((state_46589[(4)])));

} else {
throw ex__42359__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47238 = state_46589;
state_46589 = G__47238;
continue;
} else {
return ret_value__42357__auto__;
}
break;
}
});
shadow$dom$state_machine__42356__auto__ = function(state_46589){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__42356__auto____0.call(this);
case 1:
return shadow$dom$state_machine__42356__auto____1.call(this,state_46589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__42356__auto____0;
shadow$dom$state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__42356__auto____1;
return shadow$dom$state_machine__42356__auto__;
})()
})();
var state__42632__auto__ = (function (){var statearr_46611 = f__42631__auto__();
(statearr_46611[(6)] = c__42630__auto___47235);

return statearr_46611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42632__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
