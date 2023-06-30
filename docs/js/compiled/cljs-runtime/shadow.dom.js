goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_47142 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_47142(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_47143 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_47143(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__46191 = coll;
var G__46192 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__46191,G__46192) : shadow.dom.lazy_native_coll_seq.call(null,G__46191,G__46192));
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
var G__46213 = arguments.length;
switch (G__46213) {
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
var G__46225 = arguments.length;
switch (G__46225) {
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
var G__46238 = arguments.length;
switch (G__46238) {
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
var G__46249 = arguments.length;
switch (G__46249) {
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
var G__46273 = arguments.length;
switch (G__46273) {
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
var G__46291 = arguments.length;
switch (G__46291) {
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
}catch (e46304){if((e46304 instanceof Object)){
var e = e46304;
return console.log("didnt support attachEvent",el,e);
} else {
throw e46304;

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
var seq__46325 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__46326 = null;
var count__46327 = (0);
var i__46328 = (0);
while(true){
if((i__46328 < count__46327)){
var el = chunk__46326.cljs$core$IIndexed$_nth$arity$2(null,i__46328);
var handler_47161__$1 = ((function (seq__46325,chunk__46326,count__46327,i__46328,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__46325,chunk__46326,count__46327,i__46328,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_47161__$1);


var G__47164 = seq__46325;
var G__47165 = chunk__46326;
var G__47166 = count__46327;
var G__47167 = (i__46328 + (1));
seq__46325 = G__47164;
chunk__46326 = G__47165;
count__46327 = G__47166;
i__46328 = G__47167;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46325);
if(temp__5804__auto__){
var seq__46325__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46325__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46325__$1);
var G__47168 = cljs.core.chunk_rest(seq__46325__$1);
var G__47169 = c__5568__auto__;
var G__47170 = cljs.core.count(c__5568__auto__);
var G__47171 = (0);
seq__46325 = G__47168;
chunk__46326 = G__47169;
count__46327 = G__47170;
i__46328 = G__47171;
continue;
} else {
var el = cljs.core.first(seq__46325__$1);
var handler_47172__$1 = ((function (seq__46325,chunk__46326,count__46327,i__46328,el,seq__46325__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__46325,chunk__46326,count__46327,i__46328,el,seq__46325__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_47172__$1);


var G__47173 = cljs.core.next(seq__46325__$1);
var G__47174 = null;
var G__47175 = (0);
var G__47176 = (0);
seq__46325 = G__47173;
chunk__46326 = G__47174;
count__46327 = G__47175;
i__46328 = G__47176;
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
var G__46349 = arguments.length;
switch (G__46349) {
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
var seq__46365 = cljs.core.seq(events);
var chunk__46366 = null;
var count__46367 = (0);
var i__46368 = (0);
while(true){
if((i__46368 < count__46367)){
var vec__46383 = chunk__46366.cljs$core$IIndexed$_nth$arity$2(null,i__46368);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46383,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46383,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__47184 = seq__46365;
var G__47185 = chunk__46366;
var G__47186 = count__46367;
var G__47187 = (i__46368 + (1));
seq__46365 = G__47184;
chunk__46366 = G__47185;
count__46367 = G__47186;
i__46368 = G__47187;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46365);
if(temp__5804__auto__){
var seq__46365__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46365__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46365__$1);
var G__47189 = cljs.core.chunk_rest(seq__46365__$1);
var G__47190 = c__5568__auto__;
var G__47191 = cljs.core.count(c__5568__auto__);
var G__47192 = (0);
seq__46365 = G__47189;
chunk__46366 = G__47190;
count__46367 = G__47191;
i__46368 = G__47192;
continue;
} else {
var vec__46391 = cljs.core.first(seq__46365__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46391,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46391,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__47194 = cljs.core.next(seq__46365__$1);
var G__47195 = null;
var G__47196 = (0);
var G__47197 = (0);
seq__46365 = G__47194;
chunk__46366 = G__47195;
count__46367 = G__47196;
i__46368 = G__47197;
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
var seq__46398 = cljs.core.seq(styles);
var chunk__46399 = null;
var count__46400 = (0);
var i__46401 = (0);
while(true){
if((i__46401 < count__46400)){
var vec__46420 = chunk__46399.cljs$core$IIndexed$_nth$arity$2(null,i__46401);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46420,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46420,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__47200 = seq__46398;
var G__47201 = chunk__46399;
var G__47202 = count__46400;
var G__47203 = (i__46401 + (1));
seq__46398 = G__47200;
chunk__46399 = G__47201;
count__46400 = G__47202;
i__46401 = G__47203;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46398);
if(temp__5804__auto__){
var seq__46398__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46398__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46398__$1);
var G__47204 = cljs.core.chunk_rest(seq__46398__$1);
var G__47205 = c__5568__auto__;
var G__47206 = cljs.core.count(c__5568__auto__);
var G__47207 = (0);
seq__46398 = G__47204;
chunk__46399 = G__47205;
count__46400 = G__47206;
i__46401 = G__47207;
continue;
} else {
var vec__46429 = cljs.core.first(seq__46398__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46429,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46429,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__47210 = cljs.core.next(seq__46398__$1);
var G__47211 = null;
var G__47212 = (0);
var G__47213 = (0);
seq__46398 = G__47210;
chunk__46399 = G__47211;
count__46400 = G__47212;
i__46401 = G__47213;
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
var G__46442_47214 = key;
var G__46442_47215__$1 = (((G__46442_47214 instanceof cljs.core.Keyword))?G__46442_47214.fqn:null);
switch (G__46442_47215__$1) {
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
var ks_47217 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_47217,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_47217,"aria-");
}
})())){
el.setAttribute(ks_47217,value);
} else {
(el[ks_47217] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__46466){
var map__46468 = p__46466;
var map__46468__$1 = cljs.core.__destructure_map(map__46468);
var props = map__46468__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46468__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__46471 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46471,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46471,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46471,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__46475 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__46475,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__46475;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__46481 = arguments.length;
switch (G__46481) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__46497){
var vec__46500 = p__46497;
var seq__46501 = cljs.core.seq(vec__46500);
var first__46502 = cljs.core.first(seq__46501);
var seq__46501__$1 = cljs.core.next(seq__46501);
var nn = first__46502;
var first__46502__$1 = cljs.core.first(seq__46501__$1);
var seq__46501__$2 = cljs.core.next(seq__46501__$1);
var np = first__46502__$1;
var nc = seq__46501__$2;
var node = vec__46500;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__46508 = nn;
var G__46509 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__46508,G__46509) : create_fn.call(null,G__46508,G__46509));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__46512 = nn;
var G__46513 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__46512,G__46513) : create_fn.call(null,G__46512,G__46513));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__46527 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46527,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46527,(1),null);
var seq__46530_47228 = cljs.core.seq(node_children);
var chunk__46533_47229 = null;
var count__46534_47230 = (0);
var i__46535_47231 = (0);
while(true){
if((i__46535_47231 < count__46534_47230)){
var child_struct_47232 = chunk__46533_47229.cljs$core$IIndexed$_nth$arity$2(null,i__46535_47231);
var children_47233 = shadow.dom.dom_node(child_struct_47232);
if(cljs.core.seq_QMARK_(children_47233)){
var seq__46594_47234 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_47233));
var chunk__46596_47235 = null;
var count__46597_47236 = (0);
var i__46598_47237 = (0);
while(true){
if((i__46598_47237 < count__46597_47236)){
var child_47238 = chunk__46596_47235.cljs$core$IIndexed$_nth$arity$2(null,i__46598_47237);
if(cljs.core.truth_(child_47238)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47238);


var G__47239 = seq__46594_47234;
var G__47240 = chunk__46596_47235;
var G__47241 = count__46597_47236;
var G__47242 = (i__46598_47237 + (1));
seq__46594_47234 = G__47239;
chunk__46596_47235 = G__47240;
count__46597_47236 = G__47241;
i__46598_47237 = G__47242;
continue;
} else {
var G__47243 = seq__46594_47234;
var G__47244 = chunk__46596_47235;
var G__47245 = count__46597_47236;
var G__47246 = (i__46598_47237 + (1));
seq__46594_47234 = G__47243;
chunk__46596_47235 = G__47244;
count__46597_47236 = G__47245;
i__46598_47237 = G__47246;
continue;
}
} else {
var temp__5804__auto___47247 = cljs.core.seq(seq__46594_47234);
if(temp__5804__auto___47247){
var seq__46594_47248__$1 = temp__5804__auto___47247;
if(cljs.core.chunked_seq_QMARK_(seq__46594_47248__$1)){
var c__5568__auto___47249 = cljs.core.chunk_first(seq__46594_47248__$1);
var G__47250 = cljs.core.chunk_rest(seq__46594_47248__$1);
var G__47251 = c__5568__auto___47249;
var G__47252 = cljs.core.count(c__5568__auto___47249);
var G__47253 = (0);
seq__46594_47234 = G__47250;
chunk__46596_47235 = G__47251;
count__46597_47236 = G__47252;
i__46598_47237 = G__47253;
continue;
} else {
var child_47254 = cljs.core.first(seq__46594_47248__$1);
if(cljs.core.truth_(child_47254)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47254);


var G__47255 = cljs.core.next(seq__46594_47248__$1);
var G__47256 = null;
var G__47257 = (0);
var G__47258 = (0);
seq__46594_47234 = G__47255;
chunk__46596_47235 = G__47256;
count__46597_47236 = G__47257;
i__46598_47237 = G__47258;
continue;
} else {
var G__47259 = cljs.core.next(seq__46594_47248__$1);
var G__47260 = null;
var G__47261 = (0);
var G__47262 = (0);
seq__46594_47234 = G__47259;
chunk__46596_47235 = G__47260;
count__46597_47236 = G__47261;
i__46598_47237 = G__47262;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_47233);
}


var G__47263 = seq__46530_47228;
var G__47264 = chunk__46533_47229;
var G__47265 = count__46534_47230;
var G__47266 = (i__46535_47231 + (1));
seq__46530_47228 = G__47263;
chunk__46533_47229 = G__47264;
count__46534_47230 = G__47265;
i__46535_47231 = G__47266;
continue;
} else {
var temp__5804__auto___47267 = cljs.core.seq(seq__46530_47228);
if(temp__5804__auto___47267){
var seq__46530_47268__$1 = temp__5804__auto___47267;
if(cljs.core.chunked_seq_QMARK_(seq__46530_47268__$1)){
var c__5568__auto___47270 = cljs.core.chunk_first(seq__46530_47268__$1);
var G__47271 = cljs.core.chunk_rest(seq__46530_47268__$1);
var G__47272 = c__5568__auto___47270;
var G__47273 = cljs.core.count(c__5568__auto___47270);
var G__47274 = (0);
seq__46530_47228 = G__47271;
chunk__46533_47229 = G__47272;
count__46534_47230 = G__47273;
i__46535_47231 = G__47274;
continue;
} else {
var child_struct_47275 = cljs.core.first(seq__46530_47268__$1);
var children_47276 = shadow.dom.dom_node(child_struct_47275);
if(cljs.core.seq_QMARK_(children_47276)){
var seq__46624_47278 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_47276));
var chunk__46626_47279 = null;
var count__46627_47280 = (0);
var i__46628_47281 = (0);
while(true){
if((i__46628_47281 < count__46627_47280)){
var child_47282 = chunk__46626_47279.cljs$core$IIndexed$_nth$arity$2(null,i__46628_47281);
if(cljs.core.truth_(child_47282)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47282);


var G__47283 = seq__46624_47278;
var G__47284 = chunk__46626_47279;
var G__47285 = count__46627_47280;
var G__47286 = (i__46628_47281 + (1));
seq__46624_47278 = G__47283;
chunk__46626_47279 = G__47284;
count__46627_47280 = G__47285;
i__46628_47281 = G__47286;
continue;
} else {
var G__47287 = seq__46624_47278;
var G__47288 = chunk__46626_47279;
var G__47289 = count__46627_47280;
var G__47290 = (i__46628_47281 + (1));
seq__46624_47278 = G__47287;
chunk__46626_47279 = G__47288;
count__46627_47280 = G__47289;
i__46628_47281 = G__47290;
continue;
}
} else {
var temp__5804__auto___47291__$1 = cljs.core.seq(seq__46624_47278);
if(temp__5804__auto___47291__$1){
var seq__46624_47292__$1 = temp__5804__auto___47291__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46624_47292__$1)){
var c__5568__auto___47293 = cljs.core.chunk_first(seq__46624_47292__$1);
var G__47294 = cljs.core.chunk_rest(seq__46624_47292__$1);
var G__47295 = c__5568__auto___47293;
var G__47296 = cljs.core.count(c__5568__auto___47293);
var G__47297 = (0);
seq__46624_47278 = G__47294;
chunk__46626_47279 = G__47295;
count__46627_47280 = G__47296;
i__46628_47281 = G__47297;
continue;
} else {
var child_47298 = cljs.core.first(seq__46624_47292__$1);
if(cljs.core.truth_(child_47298)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47298);


var G__47299 = cljs.core.next(seq__46624_47292__$1);
var G__47300 = null;
var G__47301 = (0);
var G__47302 = (0);
seq__46624_47278 = G__47299;
chunk__46626_47279 = G__47300;
count__46627_47280 = G__47301;
i__46628_47281 = G__47302;
continue;
} else {
var G__47303 = cljs.core.next(seq__46624_47292__$1);
var G__47304 = null;
var G__47305 = (0);
var G__47306 = (0);
seq__46624_47278 = G__47303;
chunk__46626_47279 = G__47304;
count__46627_47280 = G__47305;
i__46628_47281 = G__47306;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_47276);
}


var G__47307 = cljs.core.next(seq__46530_47268__$1);
var G__47308 = null;
var G__47309 = (0);
var G__47310 = (0);
seq__46530_47228 = G__47307;
chunk__46533_47229 = G__47308;
count__46534_47230 = G__47309;
i__46535_47231 = G__47310;
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
var seq__46671 = cljs.core.seq(node);
var chunk__46672 = null;
var count__46673 = (0);
var i__46674 = (0);
while(true){
if((i__46674 < count__46673)){
var n = chunk__46672.cljs$core$IIndexed$_nth$arity$2(null,i__46674);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__47311 = seq__46671;
var G__47312 = chunk__46672;
var G__47313 = count__46673;
var G__47314 = (i__46674 + (1));
seq__46671 = G__47311;
chunk__46672 = G__47312;
count__46673 = G__47313;
i__46674 = G__47314;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46671);
if(temp__5804__auto__){
var seq__46671__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46671__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46671__$1);
var G__47315 = cljs.core.chunk_rest(seq__46671__$1);
var G__47316 = c__5568__auto__;
var G__47317 = cljs.core.count(c__5568__auto__);
var G__47318 = (0);
seq__46671 = G__47315;
chunk__46672 = G__47316;
count__46673 = G__47317;
i__46674 = G__47318;
continue;
} else {
var n = cljs.core.first(seq__46671__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__47319 = cljs.core.next(seq__46671__$1);
var G__47320 = null;
var G__47321 = (0);
var G__47322 = (0);
seq__46671 = G__47319;
chunk__46672 = G__47320;
count__46673 = G__47321;
i__46674 = G__47322;
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
var G__46708 = arguments.length;
switch (G__46708) {
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
var G__46716 = arguments.length;
switch (G__46716) {
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
var G__46737 = arguments.length;
switch (G__46737) {
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
var len__5769__auto___47330 = arguments.length;
var i__5770__auto___47331 = (0);
while(true){
if((i__5770__auto___47331 < len__5769__auto___47330)){
args__5775__auto__.push((arguments[i__5770__auto___47331]));

var G__47334 = (i__5770__auto___47331 + (1));
i__5770__auto___47331 = G__47334;
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
var seq__46772_47338 = cljs.core.seq(nodes);
var chunk__46773_47340 = null;
var count__46774_47341 = (0);
var i__46775_47342 = (0);
while(true){
if((i__46775_47342 < count__46774_47341)){
var node_47343 = chunk__46773_47340.cljs$core$IIndexed$_nth$arity$2(null,i__46775_47342);
fragment.appendChild(shadow.dom._to_dom(node_47343));


var G__47344 = seq__46772_47338;
var G__47345 = chunk__46773_47340;
var G__47346 = count__46774_47341;
var G__47347 = (i__46775_47342 + (1));
seq__46772_47338 = G__47344;
chunk__46773_47340 = G__47345;
count__46774_47341 = G__47346;
i__46775_47342 = G__47347;
continue;
} else {
var temp__5804__auto___47348 = cljs.core.seq(seq__46772_47338);
if(temp__5804__auto___47348){
var seq__46772_47350__$1 = temp__5804__auto___47348;
if(cljs.core.chunked_seq_QMARK_(seq__46772_47350__$1)){
var c__5568__auto___47351 = cljs.core.chunk_first(seq__46772_47350__$1);
var G__47352 = cljs.core.chunk_rest(seq__46772_47350__$1);
var G__47353 = c__5568__auto___47351;
var G__47354 = cljs.core.count(c__5568__auto___47351);
var G__47355 = (0);
seq__46772_47338 = G__47352;
chunk__46773_47340 = G__47353;
count__46774_47341 = G__47354;
i__46775_47342 = G__47355;
continue;
} else {
var node_47356 = cljs.core.first(seq__46772_47350__$1);
fragment.appendChild(shadow.dom._to_dom(node_47356));


var G__47358 = cljs.core.next(seq__46772_47350__$1);
var G__47359 = null;
var G__47360 = (0);
var G__47361 = (0);
seq__46772_47338 = G__47358;
chunk__46773_47340 = G__47359;
count__46774_47341 = G__47360;
i__46775_47342 = G__47361;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq46762){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46762));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__46790_47363 = cljs.core.seq(scripts);
var chunk__46791_47364 = null;
var count__46792_47365 = (0);
var i__46793_47366 = (0);
while(true){
if((i__46793_47366 < count__46792_47365)){
var vec__46808_47367 = chunk__46791_47364.cljs$core$IIndexed$_nth$arity$2(null,i__46793_47366);
var script_tag_47368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46808_47367,(0),null);
var script_body_47369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46808_47367,(1),null);
eval(script_body_47369);


var G__47370 = seq__46790_47363;
var G__47371 = chunk__46791_47364;
var G__47372 = count__46792_47365;
var G__47373 = (i__46793_47366 + (1));
seq__46790_47363 = G__47370;
chunk__46791_47364 = G__47371;
count__46792_47365 = G__47372;
i__46793_47366 = G__47373;
continue;
} else {
var temp__5804__auto___47374 = cljs.core.seq(seq__46790_47363);
if(temp__5804__auto___47374){
var seq__46790_47375__$1 = temp__5804__auto___47374;
if(cljs.core.chunked_seq_QMARK_(seq__46790_47375__$1)){
var c__5568__auto___47376 = cljs.core.chunk_first(seq__46790_47375__$1);
var G__47377 = cljs.core.chunk_rest(seq__46790_47375__$1);
var G__47378 = c__5568__auto___47376;
var G__47379 = cljs.core.count(c__5568__auto___47376);
var G__47380 = (0);
seq__46790_47363 = G__47377;
chunk__46791_47364 = G__47378;
count__46792_47365 = G__47379;
i__46793_47366 = G__47380;
continue;
} else {
var vec__46814_47381 = cljs.core.first(seq__46790_47375__$1);
var script_tag_47382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46814_47381,(0),null);
var script_body_47383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46814_47381,(1),null);
eval(script_body_47383);


var G__47384 = cljs.core.next(seq__46790_47375__$1);
var G__47385 = null;
var G__47386 = (0);
var G__47387 = (0);
seq__46790_47363 = G__47384;
chunk__46791_47364 = G__47385;
count__46792_47365 = G__47386;
i__46793_47366 = G__47387;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__46818){
var vec__46820 = p__46818;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46820,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46820,(1),null);
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
var G__46837 = arguments.length;
switch (G__46837) {
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
var seq__46846 = cljs.core.seq(style_keys);
var chunk__46847 = null;
var count__46848 = (0);
var i__46849 = (0);
while(true){
if((i__46849 < count__46848)){
var it = chunk__46847.cljs$core$IIndexed$_nth$arity$2(null,i__46849);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__47396 = seq__46846;
var G__47397 = chunk__46847;
var G__47398 = count__46848;
var G__47399 = (i__46849 + (1));
seq__46846 = G__47396;
chunk__46847 = G__47397;
count__46848 = G__47398;
i__46849 = G__47399;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46846);
if(temp__5804__auto__){
var seq__46846__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46846__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46846__$1);
var G__47400 = cljs.core.chunk_rest(seq__46846__$1);
var G__47401 = c__5568__auto__;
var G__47402 = cljs.core.count(c__5568__auto__);
var G__47403 = (0);
seq__46846 = G__47400;
chunk__46847 = G__47401;
count__46848 = G__47402;
i__46849 = G__47403;
continue;
} else {
var it = cljs.core.first(seq__46846__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__47404 = cljs.core.next(seq__46846__$1);
var G__47405 = null;
var G__47406 = (0);
var G__47407 = (0);
seq__46846 = G__47404;
chunk__46847 = G__47405;
count__46848 = G__47406;
i__46849 = G__47407;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k46855,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__46875 = k46855;
var G__46875__$1 = (((G__46875 instanceof cljs.core.Keyword))?G__46875.fqn:null);
switch (G__46875__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46855,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__46879){
var vec__46881 = p__46879;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46881,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46881,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46854){
var self__ = this;
var G__46854__$1 = this;
return (new cljs.core.RecordIter((0),G__46854__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46856,other46857){
var self__ = this;
var this46856__$1 = this;
return (((!((other46857 == null)))) && ((((this46856__$1.constructor === other46857.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46856__$1.x,other46857.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46856__$1.y,other46857.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46856__$1.__extmap,other46857.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k46855){
var self__ = this;
var this__5350__auto____$1 = this;
var G__46918 = k46855;
var G__46918__$1 = (((G__46918 instanceof cljs.core.Keyword))?G__46918.fqn:null);
switch (G__46918__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46855);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__46854){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__46922 = cljs.core.keyword_identical_QMARK_;
var expr__46923 = k__5352__auto__;
if(cljs.core.truth_((pred__46922.cljs$core$IFn$_invoke$arity$2 ? pred__46922.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__46923) : pred__46922.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__46923)))){
return (new shadow.dom.Coordinate(G__46854,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46922.cljs$core$IFn$_invoke$arity$2 ? pred__46922.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__46923) : pred__46922.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__46923)))){
return (new shadow.dom.Coordinate(self__.x,G__46854,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__46854),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__46854){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__46854,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__46865){
var extmap__5385__auto__ = (function (){var G__46938 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46865,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__46865)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46938);
} else {
return G__46938;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__46865),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__46865),null,cljs.core.not_empty(extmap__5385__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k46950,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__46962 = k46950;
var G__46962__$1 = (((G__46962 instanceof cljs.core.Keyword))?G__46962.fqn:null);
switch (G__46962__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46950,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__46967){
var vec__46968 = p__46967;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46968,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46968,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46949){
var self__ = this;
var G__46949__$1 = this;
return (new cljs.core.RecordIter((0),G__46949__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46951,other46952){
var self__ = this;
var this46951__$1 = this;
return (((!((other46952 == null)))) && ((((this46951__$1.constructor === other46952.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46951__$1.w,other46952.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46951__$1.h,other46952.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46951__$1.__extmap,other46952.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k46950){
var self__ = this;
var this__5350__auto____$1 = this;
var G__46994 = k46950;
var G__46994__$1 = (((G__46994 instanceof cljs.core.Keyword))?G__46994.fqn:null);
switch (G__46994__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46950);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__46949){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__47000 = cljs.core.keyword_identical_QMARK_;
var expr__47001 = k__5352__auto__;
if(cljs.core.truth_((pred__47000.cljs$core$IFn$_invoke$arity$2 ? pred__47000.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__47001) : pred__47000.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__47001)))){
return (new shadow.dom.Size(G__46949,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47000.cljs$core$IFn$_invoke$arity$2 ? pred__47000.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__47001) : pred__47000.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__47001)))){
return (new shadow.dom.Size(self__.w,G__46949,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__46949),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__46949){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__46949,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__46955){
var extmap__5385__auto__ = (function (){var G__47008 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46955,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__46955)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47008);
} else {
return G__47008;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__46955),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__46955),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var G__47466 = (i + (1));
var G__47467 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__47466;
ret = G__47467;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47026){
var vec__47027 = p__47026;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47027,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47027,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__47031 = arguments.length;
switch (G__47031) {
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
var G__47480 = ps;
var G__47481 = (i + (1));
el__$1 = G__47480;
i = G__47481;
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
var vec__47035 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47035,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47035,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47035,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__47038_47483 = cljs.core.seq(props);
var chunk__47039_47484 = null;
var count__47040_47485 = (0);
var i__47041_47486 = (0);
while(true){
if((i__47041_47486 < count__47040_47485)){
var vec__47051_47487 = chunk__47039_47484.cljs$core$IIndexed$_nth$arity$2(null,i__47041_47486);
var k_47488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47051_47487,(0),null);
var v_47489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47051_47487,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_47488);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_47488),v_47489);


var G__47493 = seq__47038_47483;
var G__47494 = chunk__47039_47484;
var G__47495 = count__47040_47485;
var G__47496 = (i__47041_47486 + (1));
seq__47038_47483 = G__47493;
chunk__47039_47484 = G__47494;
count__47040_47485 = G__47495;
i__47041_47486 = G__47496;
continue;
} else {
var temp__5804__auto___47497 = cljs.core.seq(seq__47038_47483);
if(temp__5804__auto___47497){
var seq__47038_47499__$1 = temp__5804__auto___47497;
if(cljs.core.chunked_seq_QMARK_(seq__47038_47499__$1)){
var c__5568__auto___47500 = cljs.core.chunk_first(seq__47038_47499__$1);
var G__47501 = cljs.core.chunk_rest(seq__47038_47499__$1);
var G__47502 = c__5568__auto___47500;
var G__47503 = cljs.core.count(c__5568__auto___47500);
var G__47504 = (0);
seq__47038_47483 = G__47501;
chunk__47039_47484 = G__47502;
count__47040_47485 = G__47503;
i__47041_47486 = G__47504;
continue;
} else {
var vec__47054_47506 = cljs.core.first(seq__47038_47499__$1);
var k_47507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47054_47506,(0),null);
var v_47508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47054_47506,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_47507);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_47507),v_47508);


var G__47517 = cljs.core.next(seq__47038_47499__$1);
var G__47518 = null;
var G__47519 = (0);
var G__47520 = (0);
seq__47038_47483 = G__47517;
chunk__47039_47484 = G__47518;
count__47040_47485 = G__47519;
i__47041_47486 = G__47520;
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
var vec__47063 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47063,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47063,(1),null);
var seq__47066_47536 = cljs.core.seq(node_children);
var chunk__47068_47537 = null;
var count__47069_47538 = (0);
var i__47070_47539 = (0);
while(true){
if((i__47070_47539 < count__47069_47538)){
var child_struct_47540 = chunk__47068_47537.cljs$core$IIndexed$_nth$arity$2(null,i__47070_47539);
if((!((child_struct_47540 == null)))){
if(typeof child_struct_47540 === 'string'){
var text_47541 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_47541),child_struct_47540].join(''));
} else {
var children_47546 = shadow.dom.svg_node(child_struct_47540);
if(cljs.core.seq_QMARK_(children_47546)){
var seq__47092_47547 = cljs.core.seq(children_47546);
var chunk__47094_47548 = null;
var count__47095_47549 = (0);
var i__47096_47550 = (0);
while(true){
if((i__47096_47550 < count__47095_47549)){
var child_47551 = chunk__47094_47548.cljs$core$IIndexed$_nth$arity$2(null,i__47096_47550);
if(cljs.core.truth_(child_47551)){
node.appendChild(child_47551);


var G__47552 = seq__47092_47547;
var G__47553 = chunk__47094_47548;
var G__47554 = count__47095_47549;
var G__47555 = (i__47096_47550 + (1));
seq__47092_47547 = G__47552;
chunk__47094_47548 = G__47553;
count__47095_47549 = G__47554;
i__47096_47550 = G__47555;
continue;
} else {
var G__47556 = seq__47092_47547;
var G__47557 = chunk__47094_47548;
var G__47558 = count__47095_47549;
var G__47559 = (i__47096_47550 + (1));
seq__47092_47547 = G__47556;
chunk__47094_47548 = G__47557;
count__47095_47549 = G__47558;
i__47096_47550 = G__47559;
continue;
}
} else {
var temp__5804__auto___47560 = cljs.core.seq(seq__47092_47547);
if(temp__5804__auto___47560){
var seq__47092_47561__$1 = temp__5804__auto___47560;
if(cljs.core.chunked_seq_QMARK_(seq__47092_47561__$1)){
var c__5568__auto___47562 = cljs.core.chunk_first(seq__47092_47561__$1);
var G__47564 = cljs.core.chunk_rest(seq__47092_47561__$1);
var G__47565 = c__5568__auto___47562;
var G__47566 = cljs.core.count(c__5568__auto___47562);
var G__47567 = (0);
seq__47092_47547 = G__47564;
chunk__47094_47548 = G__47565;
count__47095_47549 = G__47566;
i__47096_47550 = G__47567;
continue;
} else {
var child_47568 = cljs.core.first(seq__47092_47561__$1);
if(cljs.core.truth_(child_47568)){
node.appendChild(child_47568);


var G__47569 = cljs.core.next(seq__47092_47561__$1);
var G__47570 = null;
var G__47571 = (0);
var G__47572 = (0);
seq__47092_47547 = G__47569;
chunk__47094_47548 = G__47570;
count__47095_47549 = G__47571;
i__47096_47550 = G__47572;
continue;
} else {
var G__47576 = cljs.core.next(seq__47092_47561__$1);
var G__47577 = null;
var G__47578 = (0);
var G__47579 = (0);
seq__47092_47547 = G__47576;
chunk__47094_47548 = G__47577;
count__47095_47549 = G__47578;
i__47096_47550 = G__47579;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_47546);
}
}


var G__47580 = seq__47066_47536;
var G__47581 = chunk__47068_47537;
var G__47582 = count__47069_47538;
var G__47583 = (i__47070_47539 + (1));
seq__47066_47536 = G__47580;
chunk__47068_47537 = G__47581;
count__47069_47538 = G__47582;
i__47070_47539 = G__47583;
continue;
} else {
var G__47584 = seq__47066_47536;
var G__47585 = chunk__47068_47537;
var G__47586 = count__47069_47538;
var G__47587 = (i__47070_47539 + (1));
seq__47066_47536 = G__47584;
chunk__47068_47537 = G__47585;
count__47069_47538 = G__47586;
i__47070_47539 = G__47587;
continue;
}
} else {
var temp__5804__auto___47588 = cljs.core.seq(seq__47066_47536);
if(temp__5804__auto___47588){
var seq__47066_47589__$1 = temp__5804__auto___47588;
if(cljs.core.chunked_seq_QMARK_(seq__47066_47589__$1)){
var c__5568__auto___47590 = cljs.core.chunk_first(seq__47066_47589__$1);
var G__47591 = cljs.core.chunk_rest(seq__47066_47589__$1);
var G__47592 = c__5568__auto___47590;
var G__47593 = cljs.core.count(c__5568__auto___47590);
var G__47594 = (0);
seq__47066_47536 = G__47591;
chunk__47068_47537 = G__47592;
count__47069_47538 = G__47593;
i__47070_47539 = G__47594;
continue;
} else {
var child_struct_47595 = cljs.core.first(seq__47066_47589__$1);
if((!((child_struct_47595 == null)))){
if(typeof child_struct_47595 === 'string'){
var text_47596 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_47596),child_struct_47595].join(''));
} else {
var children_47597 = shadow.dom.svg_node(child_struct_47595);
if(cljs.core.seq_QMARK_(children_47597)){
var seq__47101_47598 = cljs.core.seq(children_47597);
var chunk__47103_47599 = null;
var count__47104_47600 = (0);
var i__47105_47601 = (0);
while(true){
if((i__47105_47601 < count__47104_47600)){
var child_47602 = chunk__47103_47599.cljs$core$IIndexed$_nth$arity$2(null,i__47105_47601);
if(cljs.core.truth_(child_47602)){
node.appendChild(child_47602);


var G__47603 = seq__47101_47598;
var G__47604 = chunk__47103_47599;
var G__47605 = count__47104_47600;
var G__47606 = (i__47105_47601 + (1));
seq__47101_47598 = G__47603;
chunk__47103_47599 = G__47604;
count__47104_47600 = G__47605;
i__47105_47601 = G__47606;
continue;
} else {
var G__47607 = seq__47101_47598;
var G__47608 = chunk__47103_47599;
var G__47609 = count__47104_47600;
var G__47610 = (i__47105_47601 + (1));
seq__47101_47598 = G__47607;
chunk__47103_47599 = G__47608;
count__47104_47600 = G__47609;
i__47105_47601 = G__47610;
continue;
}
} else {
var temp__5804__auto___47611__$1 = cljs.core.seq(seq__47101_47598);
if(temp__5804__auto___47611__$1){
var seq__47101_47612__$1 = temp__5804__auto___47611__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47101_47612__$1)){
var c__5568__auto___47613 = cljs.core.chunk_first(seq__47101_47612__$1);
var G__47614 = cljs.core.chunk_rest(seq__47101_47612__$1);
var G__47615 = c__5568__auto___47613;
var G__47616 = cljs.core.count(c__5568__auto___47613);
var G__47617 = (0);
seq__47101_47598 = G__47614;
chunk__47103_47599 = G__47615;
count__47104_47600 = G__47616;
i__47105_47601 = G__47617;
continue;
} else {
var child_47618 = cljs.core.first(seq__47101_47612__$1);
if(cljs.core.truth_(child_47618)){
node.appendChild(child_47618);


var G__47619 = cljs.core.next(seq__47101_47612__$1);
var G__47620 = null;
var G__47621 = (0);
var G__47622 = (0);
seq__47101_47598 = G__47619;
chunk__47103_47599 = G__47620;
count__47104_47600 = G__47621;
i__47105_47601 = G__47622;
continue;
} else {
var G__47623 = cljs.core.next(seq__47101_47612__$1);
var G__47624 = null;
var G__47625 = (0);
var G__47626 = (0);
seq__47101_47598 = G__47623;
chunk__47103_47599 = G__47624;
count__47104_47600 = G__47625;
i__47105_47601 = G__47626;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_47597);
}
}


var G__47627 = cljs.core.next(seq__47066_47589__$1);
var G__47628 = null;
var G__47629 = (0);
var G__47630 = (0);
seq__47066_47536 = G__47627;
chunk__47068_47537 = G__47628;
count__47069_47538 = G__47629;
i__47070_47539 = G__47630;
continue;
} else {
var G__47631 = cljs.core.next(seq__47066_47589__$1);
var G__47632 = null;
var G__47633 = (0);
var G__47634 = (0);
seq__47066_47536 = G__47631;
chunk__47068_47537 = G__47632;
count__47069_47538 = G__47633;
i__47070_47539 = G__47634;
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
var len__5769__auto___47638 = arguments.length;
var i__5770__auto___47639 = (0);
while(true){
if((i__5770__auto___47639 < len__5769__auto___47638)){
args__5775__auto__.push((arguments[i__5770__auto___47639]));

var G__47640 = (i__5770__auto___47639 + (1));
i__5770__auto___47639 = G__47640;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq47114){
var G__47115 = cljs.core.first(seq47114);
var seq47114__$1 = cljs.core.next(seq47114);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47115,seq47114__$1);
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
var G__47123 = arguments.length;
switch (G__47123) {
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
var c__43467__auto___47644 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43468__auto__ = (function (){var switch__43290__auto__ = (function (state_47128){
var state_val_47129 = (state_47128[(1)]);
if((state_val_47129 === (1))){
var state_47128__$1 = state_47128;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47128__$1,(2),once_or_cleanup);
} else {
if((state_val_47129 === (2))){
var inst_47125 = (state_47128[(2)]);
var inst_47126 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_47128__$1 = (function (){var statearr_47133 = state_47128;
(statearr_47133[(7)] = inst_47125);

return statearr_47133;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47128__$1,inst_47126);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__43291__auto__ = null;
var shadow$dom$state_machine__43291__auto____0 = (function (){
var statearr_47134 = [null,null,null,null,null,null,null,null];
(statearr_47134[(0)] = shadow$dom$state_machine__43291__auto__);

(statearr_47134[(1)] = (1));

return statearr_47134;
});
var shadow$dom$state_machine__43291__auto____1 = (function (state_47128){
while(true){
var ret_value__43292__auto__ = (function (){try{while(true){
var result__43293__auto__ = switch__43290__auto__(state_47128);
if(cljs.core.keyword_identical_QMARK_(result__43293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43293__auto__;
}
break;
}
}catch (e47135){var ex__43294__auto__ = e47135;
var statearr_47136_47645 = state_47128;
(statearr_47136_47645[(2)] = ex__43294__auto__);


if(cljs.core.seq((state_47128[(4)]))){
var statearr_47137_47646 = state_47128;
(statearr_47137_47646[(1)] = cljs.core.first((state_47128[(4)])));

} else {
throw ex__43294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47647 = state_47128;
state_47128 = G__47647;
continue;
} else {
return ret_value__43292__auto__;
}
break;
}
});
shadow$dom$state_machine__43291__auto__ = function(state_47128){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__43291__auto____0.call(this);
case 1:
return shadow$dom$state_machine__43291__auto____1.call(this,state_47128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__43291__auto____0;
shadow$dom$state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__43291__auto____1;
return shadow$dom$state_machine__43291__auto__;
})()
})();
var state__43469__auto__ = (function (){var statearr_47138 = f__43468__auto__();
(statearr_47138[(6)] = c__43467__auto___47644);

return statearr_47138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43469__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
