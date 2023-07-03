goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__42700 = arguments.length;
switch (G__42700) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42702 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42702 = (function (f,blockable,meta42703){
this.f = f;
this.blockable = blockable;
this.meta42703 = meta42703;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42704,meta42703__$1){
var self__ = this;
var _42704__$1 = this;
return (new cljs.core.async.t_cljs$core$async42702(self__.f,self__.blockable,meta42703__$1));
}));

(cljs.core.async.t_cljs$core$async42702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42704){
var self__ = this;
var _42704__$1 = this;
return self__.meta42703;
}));

(cljs.core.async.t_cljs$core$async42702.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42702.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42702.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async42702.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async42702.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta42703","meta42703",1317732631,null)], null);
}));

(cljs.core.async.t_cljs$core$async42702.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42702.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42702");

(cljs.core.async.t_cljs$core$async42702.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async42702");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42702.
 */
cljs.core.async.__GT_t_cljs$core$async42702 = (function cljs$core$async$__GT_t_cljs$core$async42702(f__$1,blockable__$1,meta42703){
return (new cljs.core.async.t_cljs$core$async42702(f__$1,blockable__$1,meta42703));
});

}

return (new cljs.core.async.t_cljs$core$async42702(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__42713 = arguments.length;
switch (G__42713) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__42716 = arguments.length;
switch (G__42716) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__42722 = arguments.length;
switch (G__42722) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_45362 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_45362) : fn1.call(null,val_45362));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_45362) : fn1.call(null,val_45362));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__42734 = arguments.length;
switch (G__42734) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___45364 = n;
var x_45365 = (0);
while(true){
if((x_45365 < n__5636__auto___45364)){
(a[x_45365] = x_45365);

var G__45366 = (x_45365 + (1));
x_45365 = G__45366;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42738 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42738 = (function (flag,meta42739){
this.flag = flag;
this.meta42739 = meta42739;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42740,meta42739__$1){
var self__ = this;
var _42740__$1 = this;
return (new cljs.core.async.t_cljs$core$async42738(self__.flag,meta42739__$1));
}));

(cljs.core.async.t_cljs$core$async42738.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42740){
var self__ = this;
var _42740__$1 = this;
return self__.meta42739;
}));

(cljs.core.async.t_cljs$core$async42738.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42738.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async42738.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42738.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async42738.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta42739","meta42739",-1553401874,null)], null);
}));

(cljs.core.async.t_cljs$core$async42738.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42738.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42738");

(cljs.core.async.t_cljs$core$async42738.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async42738");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42738.
 */
cljs.core.async.__GT_t_cljs$core$async42738 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async42738(flag__$1,meta42739){
return (new cljs.core.async.t_cljs$core$async42738(flag__$1,meta42739));
});

}

return (new cljs.core.async.t_cljs$core$async42738(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42747 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42747 = (function (flag,cb,meta42748){
this.flag = flag;
this.cb = cb;
this.meta42748 = meta42748;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42749,meta42748__$1){
var self__ = this;
var _42749__$1 = this;
return (new cljs.core.async.t_cljs$core$async42747(self__.flag,self__.cb,meta42748__$1));
}));

(cljs.core.async.t_cljs$core$async42747.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42749){
var self__ = this;
var _42749__$1 = this;
return self__.meta42748;
}));

(cljs.core.async.t_cljs$core$async42747.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42747.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async42747.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42747.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async42747.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta42748","meta42748",-202032111,null)], null);
}));

(cljs.core.async.t_cljs$core$async42747.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42747.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42747");

(cljs.core.async.t_cljs$core$async42747.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async42747");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42747.
 */
cljs.core.async.__GT_t_cljs$core$async42747 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async42747(flag__$1,cb__$1,meta42748){
return (new cljs.core.async.t_cljs$core$async42747(flag__$1,cb__$1,meta42748));
});

}

return (new cljs.core.async.t_cljs$core$async42747(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42752_SHARP_){
var G__42759 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42752_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42759) : fret.call(null,G__42759));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42753_SHARP_){
var G__42761 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42753_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42761) : fret.call(null,G__42761));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__45375 = (i + (1));
i = G__45375;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45376 = arguments.length;
var i__5770__auto___45377 = (0);
while(true){
if((i__5770__auto___45377 < len__5769__auto___45376)){
args__5775__auto__.push((arguments[i__5770__auto___45377]));

var G__45378 = (i__5770__auto___45377 + (1));
i__5770__auto___45377 = G__45378;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__42765){
var map__42766 = p__42765;
var map__42766__$1 = cljs.core.__destructure_map(map__42766);
var opts = map__42766__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq42762){
var G__42763 = cljs.core.first(seq42762);
var seq42762__$1 = cljs.core.next(seq42762);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42763,seq42762__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__42772 = arguments.length;
switch (G__42772) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__42630__auto___45385 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42631__auto__ = (function (){var switch__42355__auto__ = (function (state_42807){
var state_val_42808 = (state_42807[(1)]);
if((state_val_42808 === (7))){
var inst_42799 = (state_42807[(2)]);
var state_42807__$1 = state_42807;
var statearr_42821_45386 = state_42807__$1;
(statearr_42821_45386[(2)] = inst_42799);

(statearr_42821_45386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42808 === (1))){
var state_42807__$1 = state_42807;
var statearr_42822_45387 = state_42807__$1;
(statearr_42822_45387[(2)] = null);

(statearr_42822_45387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42808 === (4))){
var inst_42781 = (state_42807[(7)]);
var inst_42781__$1 = (state_42807[(2)]);
var inst_42782 = (inst_42781__$1 == null);
var state_42807__$1 = (function (){var statearr_42826 = state_42807;
(statearr_42826[(7)] = inst_42781__$1);

return statearr_42826;
})();
if(cljs.core.truth_(inst_42782)){
var statearr_42827_45388 = state_42807__$1;
(statearr_42827_45388[(1)] = (5));

} else {
var statearr_42828_45389 = state_42807__$1;
(statearr_42828_45389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42808 === (13))){
var state_42807__$1 = state_42807;
var statearr_42830_45390 = state_42807__$1;
(statearr_42830_45390[(2)] = null);

(statearr_42830_45390[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42808 === (6))){
var inst_42781 = (state_42807[(7)]);
var state_42807__$1 = state_42807;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42807__$1,(11),to,inst_42781);
} else {
if((state_val_42808 === (3))){
var inst_42802 = (state_42807[(2)]);
var state_42807__$1 = state_42807;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42807__$1,inst_42802);
} else {
if((state_val_42808 === (12))){
var state_42807__$1 = state_42807;
var statearr_42834_45391 = state_42807__$1;
(statearr_42834_45391[(2)] = null);

(statearr_42834_45391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42808 === (2))){
var state_42807__$1 = state_42807;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42807__$1,(4),from);
} else {
if((state_val_42808 === (11))){
var inst_42792 = (state_42807[(2)]);
var state_42807__$1 = state_42807;
if(cljs.core.truth_(inst_42792)){
var statearr_42836_45392 = state_42807__$1;
(statearr_42836_45392[(1)] = (12));

} else {
var statearr_42837_45393 = state_42807__$1;
(statearr_42837_45393[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42808 === (9))){
var state_42807__$1 = state_42807;
var statearr_42838_45394 = state_42807__$1;
(statearr_42838_45394[(2)] = null);

(statearr_42838_45394[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42808 === (5))){
var state_42807__$1 = state_42807;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42839_45395 = state_42807__$1;
(statearr_42839_45395[(1)] = (8));

} else {
var statearr_42841_45396 = state_42807__$1;
(statearr_42841_45396[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42808 === (14))){
var inst_42797 = (state_42807[(2)]);
var state_42807__$1 = state_42807;
var statearr_42842_45397 = state_42807__$1;
(statearr_42842_45397[(2)] = inst_42797);

(statearr_42842_45397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42808 === (10))){
var inst_42789 = (state_42807[(2)]);
var state_42807__$1 = state_42807;
var statearr_42843_45398 = state_42807__$1;
(statearr_42843_45398[(2)] = inst_42789);

(statearr_42843_45398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42808 === (8))){
var inst_42786 = cljs.core.async.close_BANG_(to);
var state_42807__$1 = state_42807;
var statearr_42844_45399 = state_42807__$1;
(statearr_42844_45399[(2)] = inst_42786);

(statearr_42844_45399[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42356__auto__ = null;
var cljs$core$async$state_machine__42356__auto____0 = (function (){
var statearr_42845 = [null,null,null,null,null,null,null,null];
(statearr_42845[(0)] = cljs$core$async$state_machine__42356__auto__);

(statearr_42845[(1)] = (1));

return statearr_42845;
});
var cljs$core$async$state_machine__42356__auto____1 = (function (state_42807){
while(true){
var ret_value__42357__auto__ = (function (){try{while(true){
var result__42358__auto__ = switch__42355__auto__(state_42807);
if(cljs.core.keyword_identical_QMARK_(result__42358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42358__auto__;
}
break;
}
}catch (e42846){var ex__42359__auto__ = e42846;
var statearr_42848_45400 = state_42807;
(statearr_42848_45400[(2)] = ex__42359__auto__);


if(cljs.core.seq((state_42807[(4)]))){
var statearr_42850_45401 = state_42807;
(statearr_42850_45401[(1)] = cljs.core.first((state_42807[(4)])));

} else {
throw ex__42359__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45402 = state_42807;
state_42807 = G__45402;
continue;
} else {
return ret_value__42357__auto__;
}
break;
}
});
cljs$core$async$state_machine__42356__auto__ = function(state_42807){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42356__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42356__auto____1.call(this,state_42807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42356__auto____0;
cljs$core$async$state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42356__auto____1;
return cljs$core$async$state_machine__42356__auto__;
})()
})();
var state__42632__auto__ = (function (){var statearr_42852 = f__42631__auto__();
(statearr_42852[(6)] = c__42630__auto___45385);

return statearr_42852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42632__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__42857){
var vec__42858 = p__42857;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42858,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42858,(1),null);
var job = vec__42858;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__42630__auto___45403 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42631__auto__ = (function (){var switch__42355__auto__ = (function (state_42866){
var state_val_42867 = (state_42866[(1)]);
if((state_val_42867 === (1))){
var state_42866__$1 = state_42866;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42866__$1,(2),res,v);
} else {
if((state_val_42867 === (2))){
var inst_42863 = (state_42866[(2)]);
var inst_42864 = cljs.core.async.close_BANG_(res);
var state_42866__$1 = (function (){var statearr_42869 = state_42866;
(statearr_42869[(7)] = inst_42863);

return statearr_42869;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42866__$1,inst_42864);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42356__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42356__auto____0 = (function (){
var statearr_42870 = [null,null,null,null,null,null,null,null];
(statearr_42870[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42356__auto__);

(statearr_42870[(1)] = (1));

return statearr_42870;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42356__auto____1 = (function (state_42866){
while(true){
var ret_value__42357__auto__ = (function (){try{while(true){
var result__42358__auto__ = switch__42355__auto__(state_42866);
if(cljs.core.keyword_identical_QMARK_(result__42358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42358__auto__;
}
break;
}
}catch (e42871){var ex__42359__auto__ = e42871;
var statearr_42872_45404 = state_42866;
(statearr_42872_45404[(2)] = ex__42359__auto__);


if(cljs.core.seq((state_42866[(4)]))){
var statearr_42873_45405 = state_42866;
(statearr_42873_45405[(1)] = cljs.core.first((state_42866[(4)])));

} else {
throw ex__42359__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45406 = state_42866;
state_42866 = G__45406;
continue;
} else {
return ret_value__42357__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42356__auto__ = function(state_42866){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42356__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42356__auto____1.call(this,state_42866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42356__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42356__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42356__auto__;
})()
})();
var state__42632__auto__ = (function (){var statearr_42876 = f__42631__auto__();
(statearr_42876[(6)] = c__42630__auto___45403);

return statearr_42876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42632__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__42877){
var vec__42878 = p__42877;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42878,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42878,(1),null);
var job = vec__42878;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___45407 = n;
var __45408 = (0);
while(true){
if((__45408 < n__5636__auto___45407)){
var G__42882_45409 = type;
var G__42882_45410__$1 = (((G__42882_45409 instanceof cljs.core.Keyword))?G__42882_45409.fqn:null);
switch (G__42882_45410__$1) {
case "compute":
var c__42630__auto___45412 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__45408,c__42630__auto___45412,G__42882_45409,G__42882_45410__$1,n__5636__auto___45407,jobs,results,process__$1,async){
return (function (){
var f__42631__auto__ = (function (){var switch__42355__auto__ = ((function (__45408,c__42630__auto___45412,G__42882_45409,G__42882_45410__$1,n__5636__auto___45407,jobs,results,process__$1,async){
return (function (state_42895){
var state_val_42896 = (state_42895[(1)]);
if((state_val_42896 === (1))){
var state_42895__$1 = state_42895;
var statearr_42898_45413 = state_42895__$1;
(statearr_42898_45413[(2)] = null);

(statearr_42898_45413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42896 === (2))){
var state_42895__$1 = state_42895;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42895__$1,(4),jobs);
} else {
if((state_val_42896 === (3))){
var inst_42893 = (state_42895[(2)]);
var state_42895__$1 = state_42895;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42895__$1,inst_42893);
} else {
if((state_val_42896 === (4))){
var inst_42885 = (state_42895[(2)]);
var inst_42886 = process__$1(inst_42885);
var state_42895__$1 = state_42895;
if(cljs.core.truth_(inst_42886)){
var statearr_42899_45414 = state_42895__$1;
(statearr_42899_45414[(1)] = (5));

} else {
var statearr_42900_45415 = state_42895__$1;
(statearr_42900_45415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42896 === (5))){
var state_42895__$1 = state_42895;
var statearr_42901_45416 = state_42895__$1;
(statearr_42901_45416[(2)] = null);

(statearr_42901_45416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42896 === (6))){
var state_42895__$1 = state_42895;
var statearr_42903_45417 = state_42895__$1;
(statearr_42903_45417[(2)] = null);

(statearr_42903_45417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42896 === (7))){
var inst_42891 = (state_42895[(2)]);
var state_42895__$1 = state_42895;
var statearr_42904_45419 = state_42895__$1;
(statearr_42904_45419[(2)] = inst_42891);

(statearr_42904_45419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__45408,c__42630__auto___45412,G__42882_45409,G__42882_45410__$1,n__5636__auto___45407,jobs,results,process__$1,async))
;
return ((function (__45408,switch__42355__auto__,c__42630__auto___45412,G__42882_45409,G__42882_45410__$1,n__5636__auto___45407,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42356__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42356__auto____0 = (function (){
var statearr_42905 = [null,null,null,null,null,null,null];
(statearr_42905[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42356__auto__);

(statearr_42905[(1)] = (1));

return statearr_42905;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42356__auto____1 = (function (state_42895){
while(true){
var ret_value__42357__auto__ = (function (){try{while(true){
var result__42358__auto__ = switch__42355__auto__(state_42895);
if(cljs.core.keyword_identical_QMARK_(result__42358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42358__auto__;
}
break;
}
}catch (e42906){var ex__42359__auto__ = e42906;
var statearr_42908_45426 = state_42895;
(statearr_42908_45426[(2)] = ex__42359__auto__);


if(cljs.core.seq((state_42895[(4)]))){
var statearr_42909_45427 = state_42895;
(statearr_42909_45427[(1)] = cljs.core.first((state_42895[(4)])));

} else {
throw ex__42359__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45428 = state_42895;
state_42895 = G__45428;
continue;
} else {
return ret_value__42357__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42356__auto__ = function(state_42895){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42356__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42356__auto____1.call(this,state_42895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42356__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42356__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42356__auto__;
})()
;})(__45408,switch__42355__auto__,c__42630__auto___45412,G__42882_45409,G__42882_45410__$1,n__5636__auto___45407,jobs,results,process__$1,async))
})();
var state__42632__auto__ = (function (){var statearr_42910 = f__42631__auto__();
(statearr_42910[(6)] = c__42630__auto___45412);

return statearr_42910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42632__auto__);
});})(__45408,c__42630__auto___45412,G__42882_45409,G__42882_45410__$1,n__5636__auto___45407,jobs,results,process__$1,async))
);


break;
case "async":
var c__42630__auto___45429 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__45408,c__42630__auto___45429,G__42882_45409,G__42882_45410__$1,n__5636__auto___45407,jobs,results,process__$1,async){
return (function (){
var f__42631__auto__ = (function (){var switch__42355__auto__ = ((function (__45408,c__42630__auto___45429,G__42882_45409,G__42882_45410__$1,n__5636__auto___45407,jobs,results,process__$1,async){
return (function (state_42923){
var state_val_42924 = (state_42923[(1)]);
if((state_val_42924 === (1))){
var state_42923__$1 = state_42923;
var statearr_42926_45430 = state_42923__$1;
(statearr_42926_45430[(2)] = null);

(statearr_42926_45430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42924 === (2))){
var state_42923__$1 = state_42923;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42923__$1,(4),jobs);
} else {
if((state_val_42924 === (3))){
var inst_42921 = (state_42923[(2)]);
var state_42923__$1 = state_42923;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42923__$1,inst_42921);
} else {
if((state_val_42924 === (4))){
var inst_42913 = (state_42923[(2)]);
var inst_42914 = async(inst_42913);
var state_42923__$1 = state_42923;
if(cljs.core.truth_(inst_42914)){
var statearr_42927_45431 = state_42923__$1;
(statearr_42927_45431[(1)] = (5));

} else {
var statearr_42929_45432 = state_42923__$1;
(statearr_42929_45432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42924 === (5))){
var state_42923__$1 = state_42923;
var statearr_42930_45434 = state_42923__$1;
(statearr_42930_45434[(2)] = null);

(statearr_42930_45434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42924 === (6))){
var state_42923__$1 = state_42923;
var statearr_42931_45435 = state_42923__$1;
(statearr_42931_45435[(2)] = null);

(statearr_42931_45435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42924 === (7))){
var inst_42919 = (state_42923[(2)]);
var state_42923__$1 = state_42923;
var statearr_42932_45437 = state_42923__$1;
(statearr_42932_45437[(2)] = inst_42919);

(statearr_42932_45437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__45408,c__42630__auto___45429,G__42882_45409,G__42882_45410__$1,n__5636__auto___45407,jobs,results,process__$1,async))
;
return ((function (__45408,switch__42355__auto__,c__42630__auto___45429,G__42882_45409,G__42882_45410__$1,n__5636__auto___45407,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42356__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42356__auto____0 = (function (){
var statearr_42933 = [null,null,null,null,null,null,null];
(statearr_42933[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42356__auto__);

(statearr_42933[(1)] = (1));

return statearr_42933;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42356__auto____1 = (function (state_42923){
while(true){
var ret_value__42357__auto__ = (function (){try{while(true){
var result__42358__auto__ = switch__42355__auto__(state_42923);
if(cljs.core.keyword_identical_QMARK_(result__42358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42358__auto__;
}
break;
}
}catch (e42934){var ex__42359__auto__ = e42934;
var statearr_42936_45438 = state_42923;
(statearr_42936_45438[(2)] = ex__42359__auto__);


if(cljs.core.seq((state_42923[(4)]))){
var statearr_42937_45439 = state_42923;
(statearr_42937_45439[(1)] = cljs.core.first((state_42923[(4)])));

} else {
throw ex__42359__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45440 = state_42923;
state_42923 = G__45440;
continue;
} else {
return ret_value__42357__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42356__auto__ = function(state_42923){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42356__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42356__auto____1.call(this,state_42923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42356__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42356__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42356__auto__;
})()
;})(__45408,switch__42355__auto__,c__42630__auto___45429,G__42882_45409,G__42882_45410__$1,n__5636__auto___45407,jobs,results,process__$1,async))
})();
var state__42632__auto__ = (function (){var statearr_42939 = f__42631__auto__();
(statearr_42939[(6)] = c__42630__auto___45429);

return statearr_42939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42632__auto__);
});})(__45408,c__42630__auto___45429,G__42882_45409,G__42882_45410__$1,n__5636__auto___45407,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42882_45410__$1)].join('')));

}

var G__45441 = (__45408 + (1));
__45408 = G__45441;
continue;
} else {
}
break;
}

var c__42630__auto___45442 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42631__auto__ = (function (){var switch__42355__auto__ = (function (state_42965){
var state_val_42966 = (state_42965[(1)]);
if((state_val_42966 === (7))){
var inst_42961 = (state_42965[(2)]);
var state_42965__$1 = state_42965;
var statearr_42970_45447 = state_42965__$1;
(statearr_42970_45447[(2)] = inst_42961);

(statearr_42970_45447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42966 === (1))){
var state_42965__$1 = state_42965;
var statearr_42971_45448 = state_42965__$1;
(statearr_42971_45448[(2)] = null);

(statearr_42971_45448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42966 === (4))){
var inst_42942 = (state_42965[(7)]);
var inst_42942__$1 = (state_42965[(2)]);
var inst_42944 = (inst_42942__$1 == null);
var state_42965__$1 = (function (){var statearr_42974 = state_42965;
(statearr_42974[(7)] = inst_42942__$1);

return statearr_42974;
})();
if(cljs.core.truth_(inst_42944)){
var statearr_42975_45450 = state_42965__$1;
(statearr_42975_45450[(1)] = (5));

} else {
var statearr_42976_45452 = state_42965__$1;
(statearr_42976_45452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42966 === (6))){
var inst_42942 = (state_42965[(7)]);
var inst_42948 = (state_42965[(8)]);
var inst_42948__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_42951 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42953 = [inst_42942,inst_42948__$1];
var inst_42954 = (new cljs.core.PersistentVector(null,2,(5),inst_42951,inst_42953,null));
var state_42965__$1 = (function (){var statearr_42978 = state_42965;
(statearr_42978[(8)] = inst_42948__$1);

return statearr_42978;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42965__$1,(8),jobs,inst_42954);
} else {
if((state_val_42966 === (3))){
var inst_42963 = (state_42965[(2)]);
var state_42965__$1 = state_42965;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42965__$1,inst_42963);
} else {
if((state_val_42966 === (2))){
var state_42965__$1 = state_42965;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42965__$1,(4),from);
} else {
if((state_val_42966 === (9))){
var inst_42958 = (state_42965[(2)]);
var state_42965__$1 = (function (){var statearr_42982 = state_42965;
(statearr_42982[(9)] = inst_42958);

return statearr_42982;
})();
var statearr_42983_45454 = state_42965__$1;
(statearr_42983_45454[(2)] = null);

(statearr_42983_45454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42966 === (5))){
var inst_42946 = cljs.core.async.close_BANG_(jobs);
var state_42965__$1 = state_42965;
var statearr_42986_45455 = state_42965__$1;
(statearr_42986_45455[(2)] = inst_42946);

(statearr_42986_45455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42966 === (8))){
var inst_42948 = (state_42965[(8)]);
var inst_42956 = (state_42965[(2)]);
var state_42965__$1 = (function (){var statearr_43000 = state_42965;
(statearr_43000[(10)] = inst_42956);

return statearr_43000;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42965__$1,(9),results,inst_42948);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42356__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42356__auto____0 = (function (){
var statearr_43014 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43014[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42356__auto__);

(statearr_43014[(1)] = (1));

return statearr_43014;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42356__auto____1 = (function (state_42965){
while(true){
var ret_value__42357__auto__ = (function (){try{while(true){
var result__42358__auto__ = switch__42355__auto__(state_42965);
if(cljs.core.keyword_identical_QMARK_(result__42358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42358__auto__;
}
break;
}
}catch (e43020){var ex__42359__auto__ = e43020;
var statearr_43021_45457 = state_42965;
(statearr_43021_45457[(2)] = ex__42359__auto__);


if(cljs.core.seq((state_42965[(4)]))){
var statearr_43023_45458 = state_42965;
(statearr_43023_45458[(1)] = cljs.core.first((state_42965[(4)])));

} else {
throw ex__42359__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45459 = state_42965;
state_42965 = G__45459;
continue;
} else {
return ret_value__42357__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42356__auto__ = function(state_42965){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42356__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42356__auto____1.call(this,state_42965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42356__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42356__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42356__auto__;
})()
})();
var state__42632__auto__ = (function (){var statearr_43024 = f__42631__auto__();
(statearr_43024[(6)] = c__42630__auto___45442);

return statearr_43024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42632__auto__);
}));


var c__42630__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42631__auto__ = (function (){var switch__42355__auto__ = (function (state_43063){
var state_val_43064 = (state_43063[(1)]);
if((state_val_43064 === (7))){
var inst_43059 = (state_43063[(2)]);
var state_43063__$1 = state_43063;
var statearr_43075_45460 = state_43063__$1;
(statearr_43075_45460[(2)] = inst_43059);

(statearr_43075_45460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43064 === (20))){
var state_43063__$1 = state_43063;
var statearr_43077_45464 = state_43063__$1;
(statearr_43077_45464[(2)] = null);

(statearr_43077_45464[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43064 === (1))){
var state_43063__$1 = state_43063;
var statearr_43078_45468 = state_43063__$1;
(statearr_43078_45468[(2)] = null);

(statearr_43078_45468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43064 === (4))){
var inst_43027 = (state_43063[(7)]);
var inst_43027__$1 = (state_43063[(2)]);
var inst_43028 = (inst_43027__$1 == null);
var state_43063__$1 = (function (){var statearr_43079 = state_43063;
(statearr_43079[(7)] = inst_43027__$1);

return statearr_43079;
})();
if(cljs.core.truth_(inst_43028)){
var statearr_43080_45471 = state_43063__$1;
(statearr_43080_45471[(1)] = (5));

} else {
var statearr_43081_45472 = state_43063__$1;
(statearr_43081_45472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43064 === (15))){
var inst_43041 = (state_43063[(8)]);
var state_43063__$1 = state_43063;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43063__$1,(18),to,inst_43041);
} else {
if((state_val_43064 === (21))){
var inst_43054 = (state_43063[(2)]);
var state_43063__$1 = state_43063;
var statearr_43087_45473 = state_43063__$1;
(statearr_43087_45473[(2)] = inst_43054);

(statearr_43087_45473[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43064 === (13))){
var inst_43056 = (state_43063[(2)]);
var state_43063__$1 = (function (){var statearr_43093 = state_43063;
(statearr_43093[(9)] = inst_43056);

return statearr_43093;
})();
var statearr_43098_45474 = state_43063__$1;
(statearr_43098_45474[(2)] = null);

(statearr_43098_45474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43064 === (6))){
var inst_43027 = (state_43063[(7)]);
var state_43063__$1 = state_43063;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43063__$1,(11),inst_43027);
} else {
if((state_val_43064 === (17))){
var inst_43049 = (state_43063[(2)]);
var state_43063__$1 = state_43063;
if(cljs.core.truth_(inst_43049)){
var statearr_43114_45476 = state_43063__$1;
(statearr_43114_45476[(1)] = (19));

} else {
var statearr_43115_45477 = state_43063__$1;
(statearr_43115_45477[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43064 === (3))){
var inst_43061 = (state_43063[(2)]);
var state_43063__$1 = state_43063;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43063__$1,inst_43061);
} else {
if((state_val_43064 === (12))){
var inst_43037 = (state_43063[(10)]);
var state_43063__$1 = state_43063;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43063__$1,(14),inst_43037);
} else {
if((state_val_43064 === (2))){
var state_43063__$1 = state_43063;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43063__$1,(4),results);
} else {
if((state_val_43064 === (19))){
var state_43063__$1 = state_43063;
var statearr_43117_45480 = state_43063__$1;
(statearr_43117_45480[(2)] = null);

(statearr_43117_45480[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43064 === (11))){
var inst_43037 = (state_43063[(2)]);
var state_43063__$1 = (function (){var statearr_43122 = state_43063;
(statearr_43122[(10)] = inst_43037);

return statearr_43122;
})();
var statearr_43124_45481 = state_43063__$1;
(statearr_43124_45481[(2)] = null);

(statearr_43124_45481[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43064 === (9))){
var state_43063__$1 = state_43063;
var statearr_43140_45482 = state_43063__$1;
(statearr_43140_45482[(2)] = null);

(statearr_43140_45482[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43064 === (5))){
var state_43063__$1 = state_43063;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43146_45483 = state_43063__$1;
(statearr_43146_45483[(1)] = (8));

} else {
var statearr_43147_45484 = state_43063__$1;
(statearr_43147_45484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43064 === (14))){
var inst_43041 = (state_43063[(8)]);
var inst_43043 = (state_43063[(11)]);
var inst_43041__$1 = (state_43063[(2)]);
var inst_43042 = (inst_43041__$1 == null);
var inst_43043__$1 = cljs.core.not(inst_43042);
var state_43063__$1 = (function (){var statearr_43148 = state_43063;
(statearr_43148[(8)] = inst_43041__$1);

(statearr_43148[(11)] = inst_43043__$1);

return statearr_43148;
})();
if(inst_43043__$1){
var statearr_43153_45486 = state_43063__$1;
(statearr_43153_45486[(1)] = (15));

} else {
var statearr_43155_45489 = state_43063__$1;
(statearr_43155_45489[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43064 === (16))){
var inst_43043 = (state_43063[(11)]);
var state_43063__$1 = state_43063;
var statearr_43169_45490 = state_43063__$1;
(statearr_43169_45490[(2)] = inst_43043);

(statearr_43169_45490[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43064 === (10))){
var inst_43034 = (state_43063[(2)]);
var state_43063__$1 = state_43063;
var statearr_43175_45492 = state_43063__$1;
(statearr_43175_45492[(2)] = inst_43034);

(statearr_43175_45492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43064 === (18))){
var inst_43046 = (state_43063[(2)]);
var state_43063__$1 = state_43063;
var statearr_43181_45493 = state_43063__$1;
(statearr_43181_45493[(2)] = inst_43046);

(statearr_43181_45493[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43064 === (8))){
var inst_43031 = cljs.core.async.close_BANG_(to);
var state_43063__$1 = state_43063;
var statearr_43182_45494 = state_43063__$1;
(statearr_43182_45494[(2)] = inst_43031);

(statearr_43182_45494[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42356__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42356__auto____0 = (function (){
var statearr_43184 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43184[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42356__auto__);

(statearr_43184[(1)] = (1));

return statearr_43184;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42356__auto____1 = (function (state_43063){
while(true){
var ret_value__42357__auto__ = (function (){try{while(true){
var result__42358__auto__ = switch__42355__auto__(state_43063);
if(cljs.core.keyword_identical_QMARK_(result__42358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42358__auto__;
}
break;
}
}catch (e43185){var ex__42359__auto__ = e43185;
var statearr_43186_45507 = state_43063;
(statearr_43186_45507[(2)] = ex__42359__auto__);


if(cljs.core.seq((state_43063[(4)]))){
var statearr_43193_45508 = state_43063;
(statearr_43193_45508[(1)] = cljs.core.first((state_43063[(4)])));

} else {
throw ex__42359__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45509 = state_43063;
state_43063 = G__45509;
continue;
} else {
return ret_value__42357__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42356__auto__ = function(state_43063){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42356__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42356__auto____1.call(this,state_43063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42356__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42356__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42356__auto__;
})()
})();
var state__42632__auto__ = (function (){var statearr_43200 = f__42631__auto__();
(statearr_43200[(6)] = c__42630__auto__);

return statearr_43200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42632__auto__);
}));

return c__42630__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__43203 = arguments.length;
switch (G__43203) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__43225 = arguments.length;
switch (G__43225) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__43238 = arguments.length;
switch (G__43238) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__42630__auto___45513 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42631__auto__ = (function (){var switch__42355__auto__ = (function (state_43267){
var state_val_43268 = (state_43267[(1)]);
if((state_val_43268 === (7))){
var inst_43263 = (state_43267[(2)]);
var state_43267__$1 = state_43267;
var statearr_43269_45514 = state_43267__$1;
(statearr_43269_45514[(2)] = inst_43263);

(statearr_43269_45514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43268 === (1))){
var state_43267__$1 = state_43267;
var statearr_43270_45515 = state_43267__$1;
(statearr_43270_45515[(2)] = null);

(statearr_43270_45515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43268 === (4))){
var inst_43243 = (state_43267[(7)]);
var inst_43243__$1 = (state_43267[(2)]);
var inst_43244 = (inst_43243__$1 == null);
var state_43267__$1 = (function (){var statearr_43271 = state_43267;
(statearr_43271[(7)] = inst_43243__$1);

return statearr_43271;
})();
if(cljs.core.truth_(inst_43244)){
var statearr_43272_45516 = state_43267__$1;
(statearr_43272_45516[(1)] = (5));

} else {
var statearr_43273_45517 = state_43267__$1;
(statearr_43273_45517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43268 === (13))){
var state_43267__$1 = state_43267;
var statearr_43275_45518 = state_43267__$1;
(statearr_43275_45518[(2)] = null);

(statearr_43275_45518[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43268 === (6))){
var inst_43243 = (state_43267[(7)]);
var inst_43250 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_43243) : p.call(null,inst_43243));
var state_43267__$1 = state_43267;
if(cljs.core.truth_(inst_43250)){
var statearr_43276_45520 = state_43267__$1;
(statearr_43276_45520[(1)] = (9));

} else {
var statearr_43277_45521 = state_43267__$1;
(statearr_43277_45521[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43268 === (3))){
var inst_43265 = (state_43267[(2)]);
var state_43267__$1 = state_43267;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43267__$1,inst_43265);
} else {
if((state_val_43268 === (12))){
var state_43267__$1 = state_43267;
var statearr_43278_45523 = state_43267__$1;
(statearr_43278_45523[(2)] = null);

(statearr_43278_45523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43268 === (2))){
var state_43267__$1 = state_43267;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43267__$1,(4),ch);
} else {
if((state_val_43268 === (11))){
var inst_43243 = (state_43267[(7)]);
var inst_43254 = (state_43267[(2)]);
var state_43267__$1 = state_43267;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43267__$1,(8),inst_43254,inst_43243);
} else {
if((state_val_43268 === (9))){
var state_43267__$1 = state_43267;
var statearr_43282_45524 = state_43267__$1;
(statearr_43282_45524[(2)] = tc);

(statearr_43282_45524[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43268 === (5))){
var inst_43247 = cljs.core.async.close_BANG_(tc);
var inst_43248 = cljs.core.async.close_BANG_(fc);
var state_43267__$1 = (function (){var statearr_43283 = state_43267;
(statearr_43283[(8)] = inst_43247);

return statearr_43283;
})();
var statearr_43284_45525 = state_43267__$1;
(statearr_43284_45525[(2)] = inst_43248);

(statearr_43284_45525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43268 === (14))){
var inst_43261 = (state_43267[(2)]);
var state_43267__$1 = state_43267;
var statearr_43289_45526 = state_43267__$1;
(statearr_43289_45526[(2)] = inst_43261);

(statearr_43289_45526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43268 === (10))){
var state_43267__$1 = state_43267;
var statearr_43294_45527 = state_43267__$1;
(statearr_43294_45527[(2)] = fc);

(statearr_43294_45527[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43268 === (8))){
var inst_43256 = (state_43267[(2)]);
var state_43267__$1 = state_43267;
if(cljs.core.truth_(inst_43256)){
var statearr_43299_45528 = state_43267__$1;
(statearr_43299_45528[(1)] = (12));

} else {
var statearr_43300_45529 = state_43267__$1;
(statearr_43300_45529[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42356__auto__ = null;
var cljs$core$async$state_machine__42356__auto____0 = (function (){
var statearr_43309 = [null,null,null,null,null,null,null,null,null];
(statearr_43309[(0)] = cljs$core$async$state_machine__42356__auto__);

(statearr_43309[(1)] = (1));

return statearr_43309;
});
var cljs$core$async$state_machine__42356__auto____1 = (function (state_43267){
while(true){
var ret_value__42357__auto__ = (function (){try{while(true){
var result__42358__auto__ = switch__42355__auto__(state_43267);
if(cljs.core.keyword_identical_QMARK_(result__42358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42358__auto__;
}
break;
}
}catch (e43310){var ex__42359__auto__ = e43310;
var statearr_43311_45531 = state_43267;
(statearr_43311_45531[(2)] = ex__42359__auto__);


if(cljs.core.seq((state_43267[(4)]))){
var statearr_43312_45532 = state_43267;
(statearr_43312_45532[(1)] = cljs.core.first((state_43267[(4)])));

} else {
throw ex__42359__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45533 = state_43267;
state_43267 = G__45533;
continue;
} else {
return ret_value__42357__auto__;
}
break;
}
});
cljs$core$async$state_machine__42356__auto__ = function(state_43267){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42356__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42356__auto____1.call(this,state_43267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42356__auto____0;
cljs$core$async$state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42356__auto____1;
return cljs$core$async$state_machine__42356__auto__;
})()
})();
var state__42632__auto__ = (function (){var statearr_43313 = f__42631__auto__();
(statearr_43313[(6)] = c__42630__auto___45513);

return statearr_43313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42632__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__42630__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42631__auto__ = (function (){var switch__42355__auto__ = (function (state_43337){
var state_val_43338 = (state_43337[(1)]);
if((state_val_43338 === (7))){
var inst_43333 = (state_43337[(2)]);
var state_43337__$1 = state_43337;
var statearr_43339_45537 = state_43337__$1;
(statearr_43339_45537[(2)] = inst_43333);

(statearr_43339_45537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (1))){
var inst_43314 = init;
var inst_43315 = inst_43314;
var state_43337__$1 = (function (){var statearr_43340 = state_43337;
(statearr_43340[(7)] = inst_43315);

return statearr_43340;
})();
var statearr_43341_45538 = state_43337__$1;
(statearr_43341_45538[(2)] = null);

(statearr_43341_45538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (4))){
var inst_43318 = (state_43337[(8)]);
var inst_43318__$1 = (state_43337[(2)]);
var inst_43319 = (inst_43318__$1 == null);
var state_43337__$1 = (function (){var statearr_43342 = state_43337;
(statearr_43342[(8)] = inst_43318__$1);

return statearr_43342;
})();
if(cljs.core.truth_(inst_43319)){
var statearr_43343_45539 = state_43337__$1;
(statearr_43343_45539[(1)] = (5));

} else {
var statearr_43344_45540 = state_43337__$1;
(statearr_43344_45540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (6))){
var inst_43318 = (state_43337[(8)]);
var inst_43322 = (state_43337[(9)]);
var inst_43315 = (state_43337[(7)]);
var inst_43322__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_43315,inst_43318) : f.call(null,inst_43315,inst_43318));
var inst_43323 = cljs.core.reduced_QMARK_(inst_43322__$1);
var state_43337__$1 = (function (){var statearr_43345 = state_43337;
(statearr_43345[(9)] = inst_43322__$1);

return statearr_43345;
})();
if(inst_43323){
var statearr_43346_45541 = state_43337__$1;
(statearr_43346_45541[(1)] = (8));

} else {
var statearr_43347_45542 = state_43337__$1;
(statearr_43347_45542[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (3))){
var inst_43335 = (state_43337[(2)]);
var state_43337__$1 = state_43337;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43337__$1,inst_43335);
} else {
if((state_val_43338 === (2))){
var state_43337__$1 = state_43337;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43337__$1,(4),ch);
} else {
if((state_val_43338 === (9))){
var inst_43322 = (state_43337[(9)]);
var inst_43315 = inst_43322;
var state_43337__$1 = (function (){var statearr_43348 = state_43337;
(statearr_43348[(7)] = inst_43315);

return statearr_43348;
})();
var statearr_43349_45544 = state_43337__$1;
(statearr_43349_45544[(2)] = null);

(statearr_43349_45544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (5))){
var inst_43315 = (state_43337[(7)]);
var state_43337__$1 = state_43337;
var statearr_43358_45545 = state_43337__$1;
(statearr_43358_45545[(2)] = inst_43315);

(statearr_43358_45545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (10))){
var inst_43331 = (state_43337[(2)]);
var state_43337__$1 = state_43337;
var statearr_43363_45547 = state_43337__$1;
(statearr_43363_45547[(2)] = inst_43331);

(statearr_43363_45547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (8))){
var inst_43322 = (state_43337[(9)]);
var inst_43325 = cljs.core.deref(inst_43322);
var state_43337__$1 = state_43337;
var statearr_43372_45548 = state_43337__$1;
(statearr_43372_45548[(2)] = inst_43325);

(statearr_43372_45548[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__42356__auto__ = null;
var cljs$core$async$reduce_$_state_machine__42356__auto____0 = (function (){
var statearr_43373 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43373[(0)] = cljs$core$async$reduce_$_state_machine__42356__auto__);

(statearr_43373[(1)] = (1));

return statearr_43373;
});
var cljs$core$async$reduce_$_state_machine__42356__auto____1 = (function (state_43337){
while(true){
var ret_value__42357__auto__ = (function (){try{while(true){
var result__42358__auto__ = switch__42355__auto__(state_43337);
if(cljs.core.keyword_identical_QMARK_(result__42358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42358__auto__;
}
break;
}
}catch (e43374){var ex__42359__auto__ = e43374;
var statearr_43375_45549 = state_43337;
(statearr_43375_45549[(2)] = ex__42359__auto__);


if(cljs.core.seq((state_43337[(4)]))){
var statearr_43376_45550 = state_43337;
(statearr_43376_45550[(1)] = cljs.core.first((state_43337[(4)])));

} else {
throw ex__42359__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45551 = state_43337;
state_43337 = G__45551;
continue;
} else {
return ret_value__42357__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__42356__auto__ = function(state_43337){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__42356__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__42356__auto____1.call(this,state_43337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__42356__auto____0;
cljs$core$async$reduce_$_state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__42356__auto____1;
return cljs$core$async$reduce_$_state_machine__42356__auto__;
})()
})();
var state__42632__auto__ = (function (){var statearr_43377 = f__42631__auto__();
(statearr_43377[(6)] = c__42630__auto__);

return statearr_43377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42632__auto__);
}));

return c__42630__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__42630__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42631__auto__ = (function (){var switch__42355__auto__ = (function (state_43383){
var state_val_43384 = (state_43383[(1)]);
if((state_val_43384 === (1))){
var inst_43378 = cljs.core.async.reduce(f__$1,init,ch);
var state_43383__$1 = state_43383;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43383__$1,(2),inst_43378);
} else {
if((state_val_43384 === (2))){
var inst_43380 = (state_43383[(2)]);
var inst_43381 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_43380) : f__$1.call(null,inst_43380));
var state_43383__$1 = state_43383;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43383__$1,inst_43381);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__42356__auto__ = null;
var cljs$core$async$transduce_$_state_machine__42356__auto____0 = (function (){
var statearr_43385 = [null,null,null,null,null,null,null];
(statearr_43385[(0)] = cljs$core$async$transduce_$_state_machine__42356__auto__);

(statearr_43385[(1)] = (1));

return statearr_43385;
});
var cljs$core$async$transduce_$_state_machine__42356__auto____1 = (function (state_43383){
while(true){
var ret_value__42357__auto__ = (function (){try{while(true){
var result__42358__auto__ = switch__42355__auto__(state_43383);
if(cljs.core.keyword_identical_QMARK_(result__42358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42358__auto__;
}
break;
}
}catch (e43386){var ex__42359__auto__ = e43386;
var statearr_43387_45553 = state_43383;
(statearr_43387_45553[(2)] = ex__42359__auto__);


if(cljs.core.seq((state_43383[(4)]))){
var statearr_43388_45554 = state_43383;
(statearr_43388_45554[(1)] = cljs.core.first((state_43383[(4)])));

} else {
throw ex__42359__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45555 = state_43383;
state_43383 = G__45555;
continue;
} else {
return ret_value__42357__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__42356__auto__ = function(state_43383){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__42356__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__42356__auto____1.call(this,state_43383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__42356__auto____0;
cljs$core$async$transduce_$_state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__42356__auto____1;
return cljs$core$async$transduce_$_state_machine__42356__auto__;
})()
})();
var state__42632__auto__ = (function (){var statearr_43390 = f__42631__auto__();
(statearr_43390[(6)] = c__42630__auto__);

return statearr_43390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42632__auto__);
}));

return c__42630__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__43392 = arguments.length;
switch (G__43392) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__42630__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42631__auto__ = (function (){var switch__42355__auto__ = (function (state_43417){
var state_val_43418 = (state_43417[(1)]);
if((state_val_43418 === (7))){
var inst_43399 = (state_43417[(2)]);
var state_43417__$1 = state_43417;
var statearr_43421_45558 = state_43417__$1;
(statearr_43421_45558[(2)] = inst_43399);

(statearr_43421_45558[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43418 === (1))){
var inst_43393 = cljs.core.seq(coll);
var inst_43394 = inst_43393;
var state_43417__$1 = (function (){var statearr_43422 = state_43417;
(statearr_43422[(7)] = inst_43394);

return statearr_43422;
})();
var statearr_43423_45559 = state_43417__$1;
(statearr_43423_45559[(2)] = null);

(statearr_43423_45559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43418 === (4))){
var inst_43394 = (state_43417[(7)]);
var inst_43397 = cljs.core.first(inst_43394);
var state_43417__$1 = state_43417;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43417__$1,(7),ch,inst_43397);
} else {
if((state_val_43418 === (13))){
var inst_43411 = (state_43417[(2)]);
var state_43417__$1 = state_43417;
var statearr_43424_45561 = state_43417__$1;
(statearr_43424_45561[(2)] = inst_43411);

(statearr_43424_45561[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43418 === (6))){
var inst_43402 = (state_43417[(2)]);
var state_43417__$1 = state_43417;
if(cljs.core.truth_(inst_43402)){
var statearr_43425_45562 = state_43417__$1;
(statearr_43425_45562[(1)] = (8));

} else {
var statearr_43426_45563 = state_43417__$1;
(statearr_43426_45563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43418 === (3))){
var inst_43415 = (state_43417[(2)]);
var state_43417__$1 = state_43417;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43417__$1,inst_43415);
} else {
if((state_val_43418 === (12))){
var state_43417__$1 = state_43417;
var statearr_43427_45564 = state_43417__$1;
(statearr_43427_45564[(2)] = null);

(statearr_43427_45564[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43418 === (2))){
var inst_43394 = (state_43417[(7)]);
var state_43417__$1 = state_43417;
if(cljs.core.truth_(inst_43394)){
var statearr_43428_45566 = state_43417__$1;
(statearr_43428_45566[(1)] = (4));

} else {
var statearr_43429_45567 = state_43417__$1;
(statearr_43429_45567[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43418 === (11))){
var inst_43408 = cljs.core.async.close_BANG_(ch);
var state_43417__$1 = state_43417;
var statearr_43430_45568 = state_43417__$1;
(statearr_43430_45568[(2)] = inst_43408);

(statearr_43430_45568[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43418 === (9))){
var state_43417__$1 = state_43417;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43433_45569 = state_43417__$1;
(statearr_43433_45569[(1)] = (11));

} else {
var statearr_43434_45570 = state_43417__$1;
(statearr_43434_45570[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43418 === (5))){
var inst_43394 = (state_43417[(7)]);
var state_43417__$1 = state_43417;
var statearr_43435_45572 = state_43417__$1;
(statearr_43435_45572[(2)] = inst_43394);

(statearr_43435_45572[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43418 === (10))){
var inst_43413 = (state_43417[(2)]);
var state_43417__$1 = state_43417;
var statearr_43438_45573 = state_43417__$1;
(statearr_43438_45573[(2)] = inst_43413);

(statearr_43438_45573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43418 === (8))){
var inst_43394 = (state_43417[(7)]);
var inst_43404 = cljs.core.next(inst_43394);
var inst_43394__$1 = inst_43404;
var state_43417__$1 = (function (){var statearr_43439 = state_43417;
(statearr_43439[(7)] = inst_43394__$1);

return statearr_43439;
})();
var statearr_43440_45575 = state_43417__$1;
(statearr_43440_45575[(2)] = null);

(statearr_43440_45575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42356__auto__ = null;
var cljs$core$async$state_machine__42356__auto____0 = (function (){
var statearr_43442 = [null,null,null,null,null,null,null,null];
(statearr_43442[(0)] = cljs$core$async$state_machine__42356__auto__);

(statearr_43442[(1)] = (1));

return statearr_43442;
});
var cljs$core$async$state_machine__42356__auto____1 = (function (state_43417){
while(true){
var ret_value__42357__auto__ = (function (){try{while(true){
var result__42358__auto__ = switch__42355__auto__(state_43417);
if(cljs.core.keyword_identical_QMARK_(result__42358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42358__auto__;
}
break;
}
}catch (e43443){var ex__42359__auto__ = e43443;
var statearr_43444_45576 = state_43417;
(statearr_43444_45576[(2)] = ex__42359__auto__);


if(cljs.core.seq((state_43417[(4)]))){
var statearr_43445_45582 = state_43417;
(statearr_43445_45582[(1)] = cljs.core.first((state_43417[(4)])));

} else {
throw ex__42359__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45583 = state_43417;
state_43417 = G__45583;
continue;
} else {
return ret_value__42357__auto__;
}
break;
}
});
cljs$core$async$state_machine__42356__auto__ = function(state_43417){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42356__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42356__auto____1.call(this,state_43417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42356__auto____0;
cljs$core$async$state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42356__auto____1;
return cljs$core$async$state_machine__42356__auto__;
})()
})();
var state__42632__auto__ = (function (){var statearr_43450 = f__42631__auto__();
(statearr_43450[(6)] = c__42630__auto__);

return statearr_43450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42632__auto__);
}));

return c__42630__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__43452 = arguments.length;
switch (G__43452) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_45588 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_45588(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_45593 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_45593(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_45598 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_45598(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_45600 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_45600(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43462 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43462 = (function (ch,cs,meta43463){
this.ch = ch;
this.cs = cs;
this.meta43463 = meta43463;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43464,meta43463__$1){
var self__ = this;
var _43464__$1 = this;
return (new cljs.core.async.t_cljs$core$async43462(self__.ch,self__.cs,meta43463__$1));
}));

(cljs.core.async.t_cljs$core$async43462.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43464){
var self__ = this;
var _43464__$1 = this;
return self__.meta43463;
}));

(cljs.core.async.t_cljs$core$async43462.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43462.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async43462.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43462.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async43462.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async43462.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async43462.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta43463","meta43463",-1840645171,null)], null);
}));

(cljs.core.async.t_cljs$core$async43462.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43462.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43462");

(cljs.core.async.t_cljs$core$async43462.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async43462");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43462.
 */
cljs.core.async.__GT_t_cljs$core$async43462 = (function cljs$core$async$mult_$___GT_t_cljs$core$async43462(ch__$1,cs__$1,meta43463){
return (new cljs.core.async.t_cljs$core$async43462(ch__$1,cs__$1,meta43463));
});

}

return (new cljs.core.async.t_cljs$core$async43462(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__42630__auto___45602 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42631__auto__ = (function (){var switch__42355__auto__ = (function (state_43620){
var state_val_43625 = (state_43620[(1)]);
if((state_val_43625 === (7))){
var inst_43616 = (state_43620[(2)]);
var state_43620__$1 = state_43620;
var statearr_43627_45603 = state_43620__$1;
(statearr_43627_45603[(2)] = inst_43616);

(statearr_43627_45603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (20))){
var inst_43505 = (state_43620[(7)]);
var inst_43521 = cljs.core.first(inst_43505);
var inst_43522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43521,(0),null);
var inst_43523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43521,(1),null);
var state_43620__$1 = (function (){var statearr_43628 = state_43620;
(statearr_43628[(8)] = inst_43522);

return statearr_43628;
})();
if(cljs.core.truth_(inst_43523)){
var statearr_43633_45606 = state_43620__$1;
(statearr_43633_45606[(1)] = (22));

} else {
var statearr_43634_45610 = state_43620__$1;
(statearr_43634_45610[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (27))){
var inst_43566 = (state_43620[(9)]);
var inst_43561 = (state_43620[(10)]);
var inst_43474 = (state_43620[(11)]);
var inst_43559 = (state_43620[(12)]);
var inst_43566__$1 = cljs.core._nth(inst_43559,inst_43561);
var inst_43567 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43566__$1,inst_43474,done);
var state_43620__$1 = (function (){var statearr_43635 = state_43620;
(statearr_43635[(9)] = inst_43566__$1);

return statearr_43635;
})();
if(cljs.core.truth_(inst_43567)){
var statearr_43636_45612 = state_43620__$1;
(statearr_43636_45612[(1)] = (30));

} else {
var statearr_43637_45613 = state_43620__$1;
(statearr_43637_45613[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (1))){
var state_43620__$1 = state_43620;
var statearr_43638_45614 = state_43620__$1;
(statearr_43638_45614[(2)] = null);

(statearr_43638_45614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (24))){
var inst_43505 = (state_43620[(7)]);
var inst_43532 = (state_43620[(2)]);
var inst_43533 = cljs.core.next(inst_43505);
var inst_43483 = inst_43533;
var inst_43484 = null;
var inst_43485 = (0);
var inst_43486 = (0);
var state_43620__$1 = (function (){var statearr_43643 = state_43620;
(statearr_43643[(13)] = inst_43532);

(statearr_43643[(14)] = inst_43483);

(statearr_43643[(15)] = inst_43484);

(statearr_43643[(16)] = inst_43486);

(statearr_43643[(17)] = inst_43485);

return statearr_43643;
})();
var statearr_43644_45615 = state_43620__$1;
(statearr_43644_45615[(2)] = null);

(statearr_43644_45615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (39))){
var state_43620__$1 = state_43620;
var statearr_43648_45616 = state_43620__$1;
(statearr_43648_45616[(2)] = null);

(statearr_43648_45616[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (4))){
var inst_43474 = (state_43620[(11)]);
var inst_43474__$1 = (state_43620[(2)]);
var inst_43475 = (inst_43474__$1 == null);
var state_43620__$1 = (function (){var statearr_43649 = state_43620;
(statearr_43649[(11)] = inst_43474__$1);

return statearr_43649;
})();
if(cljs.core.truth_(inst_43475)){
var statearr_43650_45617 = state_43620__$1;
(statearr_43650_45617[(1)] = (5));

} else {
var statearr_43651_45619 = state_43620__$1;
(statearr_43651_45619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (15))){
var inst_43483 = (state_43620[(14)]);
var inst_43484 = (state_43620[(15)]);
var inst_43486 = (state_43620[(16)]);
var inst_43485 = (state_43620[(17)]);
var inst_43501 = (state_43620[(2)]);
var inst_43502 = (inst_43486 + (1));
var tmp43645 = inst_43483;
var tmp43646 = inst_43484;
var tmp43647 = inst_43485;
var inst_43483__$1 = tmp43645;
var inst_43484__$1 = tmp43646;
var inst_43485__$1 = tmp43647;
var inst_43486__$1 = inst_43502;
var state_43620__$1 = (function (){var statearr_43652 = state_43620;
(statearr_43652[(14)] = inst_43483__$1);

(statearr_43652[(15)] = inst_43484__$1);

(statearr_43652[(16)] = inst_43486__$1);

(statearr_43652[(17)] = inst_43485__$1);

(statearr_43652[(18)] = inst_43501);

return statearr_43652;
})();
var statearr_43653_45620 = state_43620__$1;
(statearr_43653_45620[(2)] = null);

(statearr_43653_45620[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (21))){
var inst_43536 = (state_43620[(2)]);
var state_43620__$1 = state_43620;
var statearr_43657_45621 = state_43620__$1;
(statearr_43657_45621[(2)] = inst_43536);

(statearr_43657_45621[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (31))){
var inst_43566 = (state_43620[(9)]);
var inst_43570 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43566);
var state_43620__$1 = state_43620;
var statearr_43661_45622 = state_43620__$1;
(statearr_43661_45622[(2)] = inst_43570);

(statearr_43661_45622[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (32))){
var inst_43558 = (state_43620[(19)]);
var inst_43561 = (state_43620[(10)]);
var inst_43559 = (state_43620[(12)]);
var inst_43560 = (state_43620[(20)]);
var inst_43572 = (state_43620[(2)]);
var inst_43573 = (inst_43561 + (1));
var tmp43654 = inst_43558;
var tmp43655 = inst_43559;
var tmp43656 = inst_43560;
var inst_43558__$1 = tmp43654;
var inst_43559__$1 = tmp43655;
var inst_43560__$1 = tmp43656;
var inst_43561__$1 = inst_43573;
var state_43620__$1 = (function (){var statearr_43662 = state_43620;
(statearr_43662[(21)] = inst_43572);

(statearr_43662[(19)] = inst_43558__$1);

(statearr_43662[(10)] = inst_43561__$1);

(statearr_43662[(12)] = inst_43559__$1);

(statearr_43662[(20)] = inst_43560__$1);

return statearr_43662;
})();
var statearr_43663_45623 = state_43620__$1;
(statearr_43663_45623[(2)] = null);

(statearr_43663_45623[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (40))){
var inst_43589 = (state_43620[(22)]);
var inst_43593 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43589);
var state_43620__$1 = state_43620;
var statearr_43664_45624 = state_43620__$1;
(statearr_43664_45624[(2)] = inst_43593);

(statearr_43664_45624[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (33))){
var inst_43576 = (state_43620[(23)]);
var inst_43578 = cljs.core.chunked_seq_QMARK_(inst_43576);
var state_43620__$1 = state_43620;
if(inst_43578){
var statearr_43665_45625 = state_43620__$1;
(statearr_43665_45625[(1)] = (36));

} else {
var statearr_43666_45626 = state_43620__$1;
(statearr_43666_45626[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (13))){
var inst_43495 = (state_43620[(24)]);
var inst_43498 = cljs.core.async.close_BANG_(inst_43495);
var state_43620__$1 = state_43620;
var statearr_43668_45627 = state_43620__$1;
(statearr_43668_45627[(2)] = inst_43498);

(statearr_43668_45627[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (22))){
var inst_43522 = (state_43620[(8)]);
var inst_43529 = cljs.core.async.close_BANG_(inst_43522);
var state_43620__$1 = state_43620;
var statearr_43670_45628 = state_43620__$1;
(statearr_43670_45628[(2)] = inst_43529);

(statearr_43670_45628[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (36))){
var inst_43576 = (state_43620[(23)]);
var inst_43580 = cljs.core.chunk_first(inst_43576);
var inst_43581 = cljs.core.chunk_rest(inst_43576);
var inst_43582 = cljs.core.count(inst_43580);
var inst_43558 = inst_43581;
var inst_43559 = inst_43580;
var inst_43560 = inst_43582;
var inst_43561 = (0);
var state_43620__$1 = (function (){var statearr_43671 = state_43620;
(statearr_43671[(19)] = inst_43558);

(statearr_43671[(10)] = inst_43561);

(statearr_43671[(12)] = inst_43559);

(statearr_43671[(20)] = inst_43560);

return statearr_43671;
})();
var statearr_43675_45633 = state_43620__$1;
(statearr_43675_45633[(2)] = null);

(statearr_43675_45633[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (41))){
var inst_43576 = (state_43620[(23)]);
var inst_43595 = (state_43620[(2)]);
var inst_43596 = cljs.core.next(inst_43576);
var inst_43558 = inst_43596;
var inst_43559 = null;
var inst_43560 = (0);
var inst_43561 = (0);
var state_43620__$1 = (function (){var statearr_43678 = state_43620;
(statearr_43678[(25)] = inst_43595);

(statearr_43678[(19)] = inst_43558);

(statearr_43678[(10)] = inst_43561);

(statearr_43678[(12)] = inst_43559);

(statearr_43678[(20)] = inst_43560);

return statearr_43678;
})();
var statearr_43679_45638 = state_43620__$1;
(statearr_43679_45638[(2)] = null);

(statearr_43679_45638[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (43))){
var state_43620__$1 = state_43620;
var statearr_43680_45639 = state_43620__$1;
(statearr_43680_45639[(2)] = null);

(statearr_43680_45639[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (29))){
var inst_43604 = (state_43620[(2)]);
var state_43620__$1 = state_43620;
var statearr_43681_45640 = state_43620__$1;
(statearr_43681_45640[(2)] = inst_43604);

(statearr_43681_45640[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (44))){
var inst_43613 = (state_43620[(2)]);
var state_43620__$1 = (function (){var statearr_43682 = state_43620;
(statearr_43682[(26)] = inst_43613);

return statearr_43682;
})();
var statearr_43683_45641 = state_43620__$1;
(statearr_43683_45641[(2)] = null);

(statearr_43683_45641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (6))){
var inst_43547 = (state_43620[(27)]);
var inst_43546 = cljs.core.deref(cs);
var inst_43547__$1 = cljs.core.keys(inst_43546);
var inst_43548 = cljs.core.count(inst_43547__$1);
var inst_43549 = cljs.core.reset_BANG_(dctr,inst_43548);
var inst_43557 = cljs.core.seq(inst_43547__$1);
var inst_43558 = inst_43557;
var inst_43559 = null;
var inst_43560 = (0);
var inst_43561 = (0);
var state_43620__$1 = (function (){var statearr_43685 = state_43620;
(statearr_43685[(28)] = inst_43549);

(statearr_43685[(27)] = inst_43547__$1);

(statearr_43685[(19)] = inst_43558);

(statearr_43685[(10)] = inst_43561);

(statearr_43685[(12)] = inst_43559);

(statearr_43685[(20)] = inst_43560);

return statearr_43685;
})();
var statearr_43687_45642 = state_43620__$1;
(statearr_43687_45642[(2)] = null);

(statearr_43687_45642[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (28))){
var inst_43576 = (state_43620[(23)]);
var inst_43558 = (state_43620[(19)]);
var inst_43576__$1 = cljs.core.seq(inst_43558);
var state_43620__$1 = (function (){var statearr_43688 = state_43620;
(statearr_43688[(23)] = inst_43576__$1);

return statearr_43688;
})();
if(inst_43576__$1){
var statearr_43689_45646 = state_43620__$1;
(statearr_43689_45646[(1)] = (33));

} else {
var statearr_43690_45647 = state_43620__$1;
(statearr_43690_45647[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (25))){
var inst_43561 = (state_43620[(10)]);
var inst_43560 = (state_43620[(20)]);
var inst_43563 = (inst_43561 < inst_43560);
var inst_43564 = inst_43563;
var state_43620__$1 = state_43620;
if(cljs.core.truth_(inst_43564)){
var statearr_43693_45648 = state_43620__$1;
(statearr_43693_45648[(1)] = (27));

} else {
var statearr_43694_45649 = state_43620__$1;
(statearr_43694_45649[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (34))){
var state_43620__$1 = state_43620;
var statearr_43695_45650 = state_43620__$1;
(statearr_43695_45650[(2)] = null);

(statearr_43695_45650[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (17))){
var state_43620__$1 = state_43620;
var statearr_43700_45651 = state_43620__$1;
(statearr_43700_45651[(2)] = null);

(statearr_43700_45651[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (3))){
var inst_43618 = (state_43620[(2)]);
var state_43620__$1 = state_43620;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43620__$1,inst_43618);
} else {
if((state_val_43625 === (12))){
var inst_43541 = (state_43620[(2)]);
var state_43620__$1 = state_43620;
var statearr_43701_45658 = state_43620__$1;
(statearr_43701_45658[(2)] = inst_43541);

(statearr_43701_45658[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (2))){
var state_43620__$1 = state_43620;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43620__$1,(4),ch);
} else {
if((state_val_43625 === (23))){
var state_43620__$1 = state_43620;
var statearr_43702_45659 = state_43620__$1;
(statearr_43702_45659[(2)] = null);

(statearr_43702_45659[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (35))){
var inst_43602 = (state_43620[(2)]);
var state_43620__$1 = state_43620;
var statearr_43704_45663 = state_43620__$1;
(statearr_43704_45663[(2)] = inst_43602);

(statearr_43704_45663[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (19))){
var inst_43505 = (state_43620[(7)]);
var inst_43509 = cljs.core.chunk_first(inst_43505);
var inst_43510 = cljs.core.chunk_rest(inst_43505);
var inst_43511 = cljs.core.count(inst_43509);
var inst_43483 = inst_43510;
var inst_43484 = inst_43509;
var inst_43485 = inst_43511;
var inst_43486 = (0);
var state_43620__$1 = (function (){var statearr_43706 = state_43620;
(statearr_43706[(14)] = inst_43483);

(statearr_43706[(15)] = inst_43484);

(statearr_43706[(16)] = inst_43486);

(statearr_43706[(17)] = inst_43485);

return statearr_43706;
})();
var statearr_43709_45664 = state_43620__$1;
(statearr_43709_45664[(2)] = null);

(statearr_43709_45664[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (11))){
var inst_43483 = (state_43620[(14)]);
var inst_43505 = (state_43620[(7)]);
var inst_43505__$1 = cljs.core.seq(inst_43483);
var state_43620__$1 = (function (){var statearr_43712 = state_43620;
(statearr_43712[(7)] = inst_43505__$1);

return statearr_43712;
})();
if(inst_43505__$1){
var statearr_43713_45671 = state_43620__$1;
(statearr_43713_45671[(1)] = (16));

} else {
var statearr_43715_45672 = state_43620__$1;
(statearr_43715_45672[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (9))){
var inst_43543 = (state_43620[(2)]);
var state_43620__$1 = state_43620;
var statearr_43717_45673 = state_43620__$1;
(statearr_43717_45673[(2)] = inst_43543);

(statearr_43717_45673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (5))){
var inst_43481 = cljs.core.deref(cs);
var inst_43482 = cljs.core.seq(inst_43481);
var inst_43483 = inst_43482;
var inst_43484 = null;
var inst_43485 = (0);
var inst_43486 = (0);
var state_43620__$1 = (function (){var statearr_43719 = state_43620;
(statearr_43719[(14)] = inst_43483);

(statearr_43719[(15)] = inst_43484);

(statearr_43719[(16)] = inst_43486);

(statearr_43719[(17)] = inst_43485);

return statearr_43719;
})();
var statearr_43720_45674 = state_43620__$1;
(statearr_43720_45674[(2)] = null);

(statearr_43720_45674[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (14))){
var state_43620__$1 = state_43620;
var statearr_43721_45675 = state_43620__$1;
(statearr_43721_45675[(2)] = null);

(statearr_43721_45675[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (45))){
var inst_43610 = (state_43620[(2)]);
var state_43620__$1 = state_43620;
var statearr_43725_45676 = state_43620__$1;
(statearr_43725_45676[(2)] = inst_43610);

(statearr_43725_45676[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (26))){
var inst_43547 = (state_43620[(27)]);
var inst_43606 = (state_43620[(2)]);
var inst_43607 = cljs.core.seq(inst_43547);
var state_43620__$1 = (function (){var statearr_43727 = state_43620;
(statearr_43727[(29)] = inst_43606);

return statearr_43727;
})();
if(inst_43607){
var statearr_43728_45681 = state_43620__$1;
(statearr_43728_45681[(1)] = (42));

} else {
var statearr_43729_45682 = state_43620__$1;
(statearr_43729_45682[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (16))){
var inst_43505 = (state_43620[(7)]);
var inst_43507 = cljs.core.chunked_seq_QMARK_(inst_43505);
var state_43620__$1 = state_43620;
if(inst_43507){
var statearr_43730_45683 = state_43620__$1;
(statearr_43730_45683[(1)] = (19));

} else {
var statearr_43731_45684 = state_43620__$1;
(statearr_43731_45684[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (38))){
var inst_43599 = (state_43620[(2)]);
var state_43620__$1 = state_43620;
var statearr_43733_45688 = state_43620__$1;
(statearr_43733_45688[(2)] = inst_43599);

(statearr_43733_45688[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (30))){
var state_43620__$1 = state_43620;
var statearr_43737_45689 = state_43620__$1;
(statearr_43737_45689[(2)] = null);

(statearr_43737_45689[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (10))){
var inst_43484 = (state_43620[(15)]);
var inst_43486 = (state_43620[(16)]);
var inst_43494 = cljs.core._nth(inst_43484,inst_43486);
var inst_43495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43494,(0),null);
var inst_43496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43494,(1),null);
var state_43620__$1 = (function (){var statearr_43741 = state_43620;
(statearr_43741[(24)] = inst_43495);

return statearr_43741;
})();
if(cljs.core.truth_(inst_43496)){
var statearr_43742_45694 = state_43620__$1;
(statearr_43742_45694[(1)] = (13));

} else {
var statearr_43744_45695 = state_43620__$1;
(statearr_43744_45695[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (18))){
var inst_43539 = (state_43620[(2)]);
var state_43620__$1 = state_43620;
var statearr_43745_45696 = state_43620__$1;
(statearr_43745_45696[(2)] = inst_43539);

(statearr_43745_45696[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (42))){
var state_43620__$1 = state_43620;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43620__$1,(45),dchan);
} else {
if((state_val_43625 === (37))){
var inst_43576 = (state_43620[(23)]);
var inst_43589 = (state_43620[(22)]);
var inst_43474 = (state_43620[(11)]);
var inst_43589__$1 = cljs.core.first(inst_43576);
var inst_43590 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43589__$1,inst_43474,done);
var state_43620__$1 = (function (){var statearr_43747 = state_43620;
(statearr_43747[(22)] = inst_43589__$1);

return statearr_43747;
})();
if(cljs.core.truth_(inst_43590)){
var statearr_43748_45700 = state_43620__$1;
(statearr_43748_45700[(1)] = (39));

} else {
var statearr_43749_45701 = state_43620__$1;
(statearr_43749_45701[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (8))){
var inst_43486 = (state_43620[(16)]);
var inst_43485 = (state_43620[(17)]);
var inst_43488 = (inst_43486 < inst_43485);
var inst_43489 = inst_43488;
var state_43620__$1 = state_43620;
if(cljs.core.truth_(inst_43489)){
var statearr_43750_45705 = state_43620__$1;
(statearr_43750_45705[(1)] = (10));

} else {
var statearr_43752_45706 = state_43620__$1;
(statearr_43752_45706[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__42356__auto__ = null;
var cljs$core$async$mult_$_state_machine__42356__auto____0 = (function (){
var statearr_43753 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43753[(0)] = cljs$core$async$mult_$_state_machine__42356__auto__);

(statearr_43753[(1)] = (1));

return statearr_43753;
});
var cljs$core$async$mult_$_state_machine__42356__auto____1 = (function (state_43620){
while(true){
var ret_value__42357__auto__ = (function (){try{while(true){
var result__42358__auto__ = switch__42355__auto__(state_43620);
if(cljs.core.keyword_identical_QMARK_(result__42358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42358__auto__;
}
break;
}
}catch (e43754){var ex__42359__auto__ = e43754;
var statearr_43756_45708 = state_43620;
(statearr_43756_45708[(2)] = ex__42359__auto__);


if(cljs.core.seq((state_43620[(4)]))){
var statearr_43757_45709 = state_43620;
(statearr_43757_45709[(1)] = cljs.core.first((state_43620[(4)])));

} else {
throw ex__42359__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45710 = state_43620;
state_43620 = G__45710;
continue;
} else {
return ret_value__42357__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__42356__auto__ = function(state_43620){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__42356__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__42356__auto____1.call(this,state_43620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__42356__auto____0;
cljs$core$async$mult_$_state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__42356__auto____1;
return cljs$core$async$mult_$_state_machine__42356__auto__;
})()
})();
var state__42632__auto__ = (function (){var statearr_43760 = f__42631__auto__();
(statearr_43760[(6)] = c__42630__auto___45602);

return statearr_43760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42632__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__43765 = arguments.length;
switch (G__43765) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_45715 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_45715(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_45729 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_45729(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_45730 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_45730(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_45731 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_45731(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_45733 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_45733(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45737 = arguments.length;
var i__5770__auto___45738 = (0);
while(true){
if((i__5770__auto___45738 < len__5769__auto___45737)){
args__5775__auto__.push((arguments[i__5770__auto___45738]));

var G__45739 = (i__5770__auto___45738 + (1));
i__5770__auto___45738 = G__45739;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__43824){
var map__43826 = p__43824;
var map__43826__$1 = cljs.core.__destructure_map(map__43826);
var opts = map__43826__$1;
var statearr_43828_45744 = state;
(statearr_43828_45744[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_43843_45746 = state;
(statearr_43843_45746[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_43845_45747 = state;
(statearr_43845_45747[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq43811){
var G__43812 = cljs.core.first(seq43811);
var seq43811__$1 = cljs.core.next(seq43811);
var G__43813 = cljs.core.first(seq43811__$1);
var seq43811__$2 = cljs.core.next(seq43811__$1);
var G__43814 = cljs.core.first(seq43811__$2);
var seq43811__$3 = cljs.core.next(seq43811__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43812,G__43813,G__43814,seq43811__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43898 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43898 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta43899){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta43899 = meta43899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43900,meta43899__$1){
var self__ = this;
var _43900__$1 = this;
return (new cljs.core.async.t_cljs$core$async43898(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta43899__$1));
}));

(cljs.core.async.t_cljs$core$async43898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43900){
var self__ = this;
var _43900__$1 = this;
return self__.meta43899;
}));

(cljs.core.async.t_cljs$core$async43898.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43898.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async43898.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43898.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43898.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43898.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43898.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43898.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43898.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta43899","meta43899",334566355,null)], null);
}));

(cljs.core.async.t_cljs$core$async43898.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43898.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43898");

(cljs.core.async.t_cljs$core$async43898.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async43898");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43898.
 */
cljs.core.async.__GT_t_cljs$core$async43898 = (function cljs$core$async$mix_$___GT_t_cljs$core$async43898(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43899){
return (new cljs.core.async.t_cljs$core$async43898(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43899));
});

}

return (new cljs.core.async.t_cljs$core$async43898(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42630__auto___45761 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42631__auto__ = (function (){var switch__42355__auto__ = (function (state_44027){
var state_val_44028 = (state_44027[(1)]);
if((state_val_44028 === (7))){
var inst_43987 = (state_44027[(2)]);
var state_44027__$1 = state_44027;
if(cljs.core.truth_(inst_43987)){
var statearr_44029_45763 = state_44027__$1;
(statearr_44029_45763[(1)] = (8));

} else {
var statearr_44031_45764 = state_44027__$1;
(statearr_44031_45764[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (20))){
var inst_43980 = (state_44027[(7)]);
var state_44027__$1 = state_44027;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44027__$1,(23),out,inst_43980);
} else {
if((state_val_44028 === (1))){
var inst_43963 = calc_state();
var inst_43964 = cljs.core.__destructure_map(inst_43963);
var inst_43965 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43964,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43966 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43964,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43967 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43964,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_43968 = inst_43963;
var state_44027__$1 = (function (){var statearr_44035 = state_44027;
(statearr_44035[(8)] = inst_43966);

(statearr_44035[(9)] = inst_43968);

(statearr_44035[(10)] = inst_43965);

(statearr_44035[(11)] = inst_43967);

return statearr_44035;
})();
var statearr_44036_45766 = state_44027__$1;
(statearr_44036_45766[(2)] = null);

(statearr_44036_45766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (24))){
var inst_43971 = (state_44027[(12)]);
var inst_43968 = inst_43971;
var state_44027__$1 = (function (){var statearr_44037 = state_44027;
(statearr_44037[(9)] = inst_43968);

return statearr_44037;
})();
var statearr_44038_45767 = state_44027__$1;
(statearr_44038_45767[(2)] = null);

(statearr_44038_45767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (4))){
var inst_43982 = (state_44027[(13)]);
var inst_43980 = (state_44027[(7)]);
var inst_43979 = (state_44027[(2)]);
var inst_43980__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43979,(0),null);
var inst_43981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43979,(1),null);
var inst_43982__$1 = (inst_43980__$1 == null);
var state_44027__$1 = (function (){var statearr_44040 = state_44027;
(statearr_44040[(13)] = inst_43982__$1);

(statearr_44040[(7)] = inst_43980__$1);

(statearr_44040[(14)] = inst_43981);

return statearr_44040;
})();
if(cljs.core.truth_(inst_43982__$1)){
var statearr_44045_45771 = state_44027__$1;
(statearr_44045_45771[(1)] = (5));

} else {
var statearr_44046_45772 = state_44027__$1;
(statearr_44046_45772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (15))){
var inst_43972 = (state_44027[(15)]);
var inst_44001 = (state_44027[(16)]);
var inst_44001__$1 = cljs.core.empty_QMARK_(inst_43972);
var state_44027__$1 = (function (){var statearr_44047 = state_44027;
(statearr_44047[(16)] = inst_44001__$1);

return statearr_44047;
})();
if(inst_44001__$1){
var statearr_44048_45774 = state_44027__$1;
(statearr_44048_45774[(1)] = (17));

} else {
var statearr_44049_45776 = state_44027__$1;
(statearr_44049_45776[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (21))){
var inst_43971 = (state_44027[(12)]);
var inst_43968 = inst_43971;
var state_44027__$1 = (function (){var statearr_44050 = state_44027;
(statearr_44050[(9)] = inst_43968);

return statearr_44050;
})();
var statearr_44051_45778 = state_44027__$1;
(statearr_44051_45778[(2)] = null);

(statearr_44051_45778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (13))){
var inst_43994 = (state_44027[(2)]);
var inst_43995 = calc_state();
var inst_43968 = inst_43995;
var state_44027__$1 = (function (){var statearr_44052 = state_44027;
(statearr_44052[(17)] = inst_43994);

(statearr_44052[(9)] = inst_43968);

return statearr_44052;
})();
var statearr_44053_45780 = state_44027__$1;
(statearr_44053_45780[(2)] = null);

(statearr_44053_45780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (22))){
var inst_44021 = (state_44027[(2)]);
var state_44027__$1 = state_44027;
var statearr_44054_45782 = state_44027__$1;
(statearr_44054_45782[(2)] = inst_44021);

(statearr_44054_45782[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (6))){
var inst_43981 = (state_44027[(14)]);
var inst_43985 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43981,change);
var state_44027__$1 = state_44027;
var statearr_44060_45784 = state_44027__$1;
(statearr_44060_45784[(2)] = inst_43985);

(statearr_44060_45784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (25))){
var state_44027__$1 = state_44027;
var statearr_44061_45786 = state_44027__$1;
(statearr_44061_45786[(2)] = null);

(statearr_44061_45786[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (17))){
var inst_43973 = (state_44027[(18)]);
var inst_43981 = (state_44027[(14)]);
var inst_44003 = (inst_43973.cljs$core$IFn$_invoke$arity$1 ? inst_43973.cljs$core$IFn$_invoke$arity$1(inst_43981) : inst_43973.call(null,inst_43981));
var inst_44004 = cljs.core.not(inst_44003);
var state_44027__$1 = state_44027;
var statearr_44062_45787 = state_44027__$1;
(statearr_44062_45787[(2)] = inst_44004);

(statearr_44062_45787[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (3))){
var inst_44025 = (state_44027[(2)]);
var state_44027__$1 = state_44027;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44027__$1,inst_44025);
} else {
if((state_val_44028 === (12))){
var state_44027__$1 = state_44027;
var statearr_44063_45791 = state_44027__$1;
(statearr_44063_45791[(2)] = null);

(statearr_44063_45791[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (2))){
var inst_43968 = (state_44027[(9)]);
var inst_43971 = (state_44027[(12)]);
var inst_43971__$1 = cljs.core.__destructure_map(inst_43968);
var inst_43972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43971__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43971__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43974 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43971__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_44027__$1 = (function (){var statearr_44064 = state_44027;
(statearr_44064[(15)] = inst_43972);

(statearr_44064[(12)] = inst_43971__$1);

(statearr_44064[(18)] = inst_43973);

return statearr_44064;
})();
return cljs.core.async.ioc_alts_BANG_(state_44027__$1,(4),inst_43974);
} else {
if((state_val_44028 === (23))){
var inst_44012 = (state_44027[(2)]);
var state_44027__$1 = state_44027;
if(cljs.core.truth_(inst_44012)){
var statearr_44065_45794 = state_44027__$1;
(statearr_44065_45794[(1)] = (24));

} else {
var statearr_44066_45795 = state_44027__$1;
(statearr_44066_45795[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (19))){
var inst_44007 = (state_44027[(2)]);
var state_44027__$1 = state_44027;
var statearr_44067_45796 = state_44027__$1;
(statearr_44067_45796[(2)] = inst_44007);

(statearr_44067_45796[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (11))){
var inst_43981 = (state_44027[(14)]);
var inst_43991 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_43981);
var state_44027__$1 = state_44027;
var statearr_44068_45799 = state_44027__$1;
(statearr_44068_45799[(2)] = inst_43991);

(statearr_44068_45799[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (9))){
var inst_43998 = (state_44027[(19)]);
var inst_43972 = (state_44027[(15)]);
var inst_43981 = (state_44027[(14)]);
var inst_43998__$1 = (inst_43972.cljs$core$IFn$_invoke$arity$1 ? inst_43972.cljs$core$IFn$_invoke$arity$1(inst_43981) : inst_43972.call(null,inst_43981));
var state_44027__$1 = (function (){var statearr_44069 = state_44027;
(statearr_44069[(19)] = inst_43998__$1);

return statearr_44069;
})();
if(cljs.core.truth_(inst_43998__$1)){
var statearr_44070_45802 = state_44027__$1;
(statearr_44070_45802[(1)] = (14));

} else {
var statearr_44071_45803 = state_44027__$1;
(statearr_44071_45803[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (5))){
var inst_43982 = (state_44027[(13)]);
var state_44027__$1 = state_44027;
var statearr_44072_45805 = state_44027__$1;
(statearr_44072_45805[(2)] = inst_43982);

(statearr_44072_45805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (14))){
var inst_43998 = (state_44027[(19)]);
var state_44027__$1 = state_44027;
var statearr_44073_45806 = state_44027__$1;
(statearr_44073_45806[(2)] = inst_43998);

(statearr_44073_45806[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (26))){
var inst_44017 = (state_44027[(2)]);
var state_44027__$1 = state_44027;
var statearr_44074_45808 = state_44027__$1;
(statearr_44074_45808[(2)] = inst_44017);

(statearr_44074_45808[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (16))){
var inst_44009 = (state_44027[(2)]);
var state_44027__$1 = state_44027;
if(cljs.core.truth_(inst_44009)){
var statearr_44075_45809 = state_44027__$1;
(statearr_44075_45809[(1)] = (20));

} else {
var statearr_44076_45814 = state_44027__$1;
(statearr_44076_45814[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (10))){
var inst_44023 = (state_44027[(2)]);
var state_44027__$1 = state_44027;
var statearr_44078_45815 = state_44027__$1;
(statearr_44078_45815[(2)] = inst_44023);

(statearr_44078_45815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (18))){
var inst_44001 = (state_44027[(16)]);
var state_44027__$1 = state_44027;
var statearr_44081_45816 = state_44027__$1;
(statearr_44081_45816[(2)] = inst_44001);

(statearr_44081_45816[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44028 === (8))){
var inst_43980 = (state_44027[(7)]);
var inst_43989 = (inst_43980 == null);
var state_44027__$1 = state_44027;
if(cljs.core.truth_(inst_43989)){
var statearr_44082_45817 = state_44027__$1;
(statearr_44082_45817[(1)] = (11));

} else {
var statearr_44083_45819 = state_44027__$1;
(statearr_44083_45819[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__42356__auto__ = null;
var cljs$core$async$mix_$_state_machine__42356__auto____0 = (function (){
var statearr_44084 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44084[(0)] = cljs$core$async$mix_$_state_machine__42356__auto__);

(statearr_44084[(1)] = (1));

return statearr_44084;
});
var cljs$core$async$mix_$_state_machine__42356__auto____1 = (function (state_44027){
while(true){
var ret_value__42357__auto__ = (function (){try{while(true){
var result__42358__auto__ = switch__42355__auto__(state_44027);
if(cljs.core.keyword_identical_QMARK_(result__42358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42358__auto__;
}
break;
}
}catch (e44086){var ex__42359__auto__ = e44086;
var statearr_44088_45820 = state_44027;
(statearr_44088_45820[(2)] = ex__42359__auto__);


if(cljs.core.seq((state_44027[(4)]))){
var statearr_44089_45821 = state_44027;
(statearr_44089_45821[(1)] = cljs.core.first((state_44027[(4)])));

} else {
throw ex__42359__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45825 = state_44027;
state_44027 = G__45825;
continue;
} else {
return ret_value__42357__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__42356__auto__ = function(state_44027){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__42356__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__42356__auto____1.call(this,state_44027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__42356__auto____0;
cljs$core$async$mix_$_state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__42356__auto____1;
return cljs$core$async$mix_$_state_machine__42356__auto__;
})()
})();
var state__42632__auto__ = (function (){var statearr_44090 = f__42631__auto__();
(statearr_44090[(6)] = c__42630__auto___45761);

return statearr_44090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42632__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_45827 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_45827(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_45828 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_45828(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_45837 = (function() {
var G__45838 = null;
var G__45838__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__45838__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__45838 = function(p,v){
switch(arguments.length){
case 1:
return G__45838__1.call(this,p);
case 2:
return G__45838__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45838.cljs$core$IFn$_invoke$arity$1 = G__45838__1;
G__45838.cljs$core$IFn$_invoke$arity$2 = G__45838__2;
return G__45838;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__44111 = arguments.length;
switch (G__44111) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_45837(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_45837(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__44127 = arguments.length;
switch (G__44127) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__44119_SHARP_){
if(cljs.core.truth_((p1__44119_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__44119_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__44119_SHARP_.call(null,topic)))){
return p1__44119_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__44119_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44141 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44141 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta44142){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta44142 = meta44142;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44143,meta44142__$1){
var self__ = this;
var _44143__$1 = this;
return (new cljs.core.async.t_cljs$core$async44141(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta44142__$1));
}));

(cljs.core.async.t_cljs$core$async44141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44143){
var self__ = this;
var _44143__$1 = this;
return self__.meta44142;
}));

(cljs.core.async.t_cljs$core$async44141.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44141.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44141.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44141.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async44141.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async44141.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async44141.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async44141.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta44142","meta44142",121226712,null)], null);
}));

(cljs.core.async.t_cljs$core$async44141.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44141.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44141");

(cljs.core.async.t_cljs$core$async44141.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async44141");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44141.
 */
cljs.core.async.__GT_t_cljs$core$async44141 = (function cljs$core$async$__GT_t_cljs$core$async44141(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44142){
return (new cljs.core.async.t_cljs$core$async44141(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44142));
});

}

return (new cljs.core.async.t_cljs$core$async44141(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42630__auto___45859 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42631__auto__ = (function (){var switch__42355__auto__ = (function (state_44250){
var state_val_44251 = (state_44250[(1)]);
if((state_val_44251 === (7))){
var inst_44246 = (state_44250[(2)]);
var state_44250__$1 = state_44250;
var statearr_44255_45860 = state_44250__$1;
(statearr_44255_45860[(2)] = inst_44246);

(statearr_44255_45860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44251 === (20))){
var state_44250__$1 = state_44250;
var statearr_44256_45861 = state_44250__$1;
(statearr_44256_45861[(2)] = null);

(statearr_44256_45861[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44251 === (1))){
var state_44250__$1 = state_44250;
var statearr_44257_45868 = state_44250__$1;
(statearr_44257_45868[(2)] = null);

(statearr_44257_45868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44251 === (24))){
var inst_44226 = (state_44250[(7)]);
var inst_44237 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_44226);
var state_44250__$1 = state_44250;
var statearr_44260_45869 = state_44250__$1;
(statearr_44260_45869[(2)] = inst_44237);

(statearr_44260_45869[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44251 === (4))){
var inst_44171 = (state_44250[(8)]);
var inst_44171__$1 = (state_44250[(2)]);
var inst_44172 = (inst_44171__$1 == null);
var state_44250__$1 = (function (){var statearr_44262 = state_44250;
(statearr_44262[(8)] = inst_44171__$1);

return statearr_44262;
})();
if(cljs.core.truth_(inst_44172)){
var statearr_44263_45872 = state_44250__$1;
(statearr_44263_45872[(1)] = (5));

} else {
var statearr_44265_45873 = state_44250__$1;
(statearr_44265_45873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44251 === (15))){
var inst_44220 = (state_44250[(2)]);
var state_44250__$1 = state_44250;
var statearr_44268_45874 = state_44250__$1;
(statearr_44268_45874[(2)] = inst_44220);

(statearr_44268_45874[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44251 === (21))){
var inst_44242 = (state_44250[(2)]);
var state_44250__$1 = (function (){var statearr_44269 = state_44250;
(statearr_44269[(9)] = inst_44242);

return statearr_44269;
})();
var statearr_44270_45875 = state_44250__$1;
(statearr_44270_45875[(2)] = null);

(statearr_44270_45875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44251 === (13))){
var inst_44200 = (state_44250[(10)]);
var inst_44202 = cljs.core.chunked_seq_QMARK_(inst_44200);
var state_44250__$1 = state_44250;
if(inst_44202){
var statearr_44273_45876 = state_44250__$1;
(statearr_44273_45876[(1)] = (16));

} else {
var statearr_44274_45877 = state_44250__$1;
(statearr_44274_45877[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44251 === (22))){
var inst_44234 = (state_44250[(2)]);
var state_44250__$1 = state_44250;
if(cljs.core.truth_(inst_44234)){
var statearr_44276_45878 = state_44250__$1;
(statearr_44276_45878[(1)] = (23));

} else {
var statearr_44277_45879 = state_44250__$1;
(statearr_44277_45879[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44251 === (6))){
var inst_44229 = (state_44250[(11)]);
var inst_44226 = (state_44250[(7)]);
var inst_44171 = (state_44250[(8)]);
var inst_44226__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_44171) : topic_fn.call(null,inst_44171));
var inst_44228 = cljs.core.deref(mults);
var inst_44229__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44228,inst_44226__$1);
var state_44250__$1 = (function (){var statearr_44283 = state_44250;
(statearr_44283[(11)] = inst_44229__$1);

(statearr_44283[(7)] = inst_44226__$1);

return statearr_44283;
})();
if(cljs.core.truth_(inst_44229__$1)){
var statearr_44284_45880 = state_44250__$1;
(statearr_44284_45880[(1)] = (19));

} else {
var statearr_44286_45881 = state_44250__$1;
(statearr_44286_45881[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44251 === (25))){
var inst_44239 = (state_44250[(2)]);
var state_44250__$1 = state_44250;
var statearr_44287_45882 = state_44250__$1;
(statearr_44287_45882[(2)] = inst_44239);

(statearr_44287_45882[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44251 === (17))){
var inst_44200 = (state_44250[(10)]);
var inst_44211 = cljs.core.first(inst_44200);
var inst_44212 = cljs.core.async.muxch_STAR_(inst_44211);
var inst_44213 = cljs.core.async.close_BANG_(inst_44212);
var inst_44214 = cljs.core.next(inst_44200);
var inst_44184 = inst_44214;
var inst_44185 = null;
var inst_44186 = (0);
var inst_44187 = (0);
var state_44250__$1 = (function (){var statearr_44288 = state_44250;
(statearr_44288[(12)] = inst_44187);

(statearr_44288[(13)] = inst_44185);

(statearr_44288[(14)] = inst_44213);

(statearr_44288[(15)] = inst_44184);

(statearr_44288[(16)] = inst_44186);

return statearr_44288;
})();
var statearr_44289_45884 = state_44250__$1;
(statearr_44289_45884[(2)] = null);

(statearr_44289_45884[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44251 === (3))){
var inst_44248 = (state_44250[(2)]);
var state_44250__$1 = state_44250;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44250__$1,inst_44248);
} else {
if((state_val_44251 === (12))){
var inst_44222 = (state_44250[(2)]);
var state_44250__$1 = state_44250;
var statearr_44290_45887 = state_44250__$1;
(statearr_44290_45887[(2)] = inst_44222);

(statearr_44290_45887[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44251 === (2))){
var state_44250__$1 = state_44250;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44250__$1,(4),ch);
} else {
if((state_val_44251 === (23))){
var state_44250__$1 = state_44250;
var statearr_44291_45888 = state_44250__$1;
(statearr_44291_45888[(2)] = null);

(statearr_44291_45888[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44251 === (19))){
var inst_44229 = (state_44250[(11)]);
var inst_44171 = (state_44250[(8)]);
var inst_44232 = cljs.core.async.muxch_STAR_(inst_44229);
var state_44250__$1 = state_44250;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44250__$1,(22),inst_44232,inst_44171);
} else {
if((state_val_44251 === (11))){
var inst_44200 = (state_44250[(10)]);
var inst_44184 = (state_44250[(15)]);
var inst_44200__$1 = cljs.core.seq(inst_44184);
var state_44250__$1 = (function (){var statearr_44294 = state_44250;
(statearr_44294[(10)] = inst_44200__$1);

return statearr_44294;
})();
if(inst_44200__$1){
var statearr_44295_45892 = state_44250__$1;
(statearr_44295_45892[(1)] = (13));

} else {
var statearr_44296_45893 = state_44250__$1;
(statearr_44296_45893[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44251 === (9))){
var inst_44224 = (state_44250[(2)]);
var state_44250__$1 = state_44250;
var statearr_44297_45894 = state_44250__$1;
(statearr_44297_45894[(2)] = inst_44224);

(statearr_44297_45894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44251 === (5))){
var inst_44181 = cljs.core.deref(mults);
var inst_44182 = cljs.core.vals(inst_44181);
var inst_44183 = cljs.core.seq(inst_44182);
var inst_44184 = inst_44183;
var inst_44185 = null;
var inst_44186 = (0);
var inst_44187 = (0);
var state_44250__$1 = (function (){var statearr_44300 = state_44250;
(statearr_44300[(12)] = inst_44187);

(statearr_44300[(13)] = inst_44185);

(statearr_44300[(15)] = inst_44184);

(statearr_44300[(16)] = inst_44186);

return statearr_44300;
})();
var statearr_44303_45895 = state_44250__$1;
(statearr_44303_45895[(2)] = null);

(statearr_44303_45895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44251 === (14))){
var state_44250__$1 = state_44250;
var statearr_44308_45896 = state_44250__$1;
(statearr_44308_45896[(2)] = null);

(statearr_44308_45896[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44251 === (16))){
var inst_44200 = (state_44250[(10)]);
var inst_44204 = cljs.core.chunk_first(inst_44200);
var inst_44206 = cljs.core.chunk_rest(inst_44200);
var inst_44207 = cljs.core.count(inst_44204);
var inst_44184 = inst_44206;
var inst_44185 = inst_44204;
var inst_44186 = inst_44207;
var inst_44187 = (0);
var state_44250__$1 = (function (){var statearr_44309 = state_44250;
(statearr_44309[(12)] = inst_44187);

(statearr_44309[(13)] = inst_44185);

(statearr_44309[(15)] = inst_44184);

(statearr_44309[(16)] = inst_44186);

return statearr_44309;
})();
var statearr_44310_45897 = state_44250__$1;
(statearr_44310_45897[(2)] = null);

(statearr_44310_45897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44251 === (10))){
var inst_44187 = (state_44250[(12)]);
var inst_44185 = (state_44250[(13)]);
var inst_44184 = (state_44250[(15)]);
var inst_44186 = (state_44250[(16)]);
var inst_44192 = cljs.core._nth(inst_44185,inst_44187);
var inst_44194 = cljs.core.async.muxch_STAR_(inst_44192);
var inst_44195 = cljs.core.async.close_BANG_(inst_44194);
var inst_44197 = (inst_44187 + (1));
var tmp44304 = inst_44185;
var tmp44305 = inst_44184;
var tmp44306 = inst_44186;
var inst_44184__$1 = tmp44305;
var inst_44185__$1 = tmp44304;
var inst_44186__$1 = tmp44306;
var inst_44187__$1 = inst_44197;
var state_44250__$1 = (function (){var statearr_44312 = state_44250;
(statearr_44312[(12)] = inst_44187__$1);

(statearr_44312[(13)] = inst_44185__$1);

(statearr_44312[(15)] = inst_44184__$1);

(statearr_44312[(16)] = inst_44186__$1);

(statearr_44312[(17)] = inst_44195);

return statearr_44312;
})();
var statearr_44313_45904 = state_44250__$1;
(statearr_44313_45904[(2)] = null);

(statearr_44313_45904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44251 === (18))){
var inst_44217 = (state_44250[(2)]);
var state_44250__$1 = state_44250;
var statearr_44314_45905 = state_44250__$1;
(statearr_44314_45905[(2)] = inst_44217);

(statearr_44314_45905[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44251 === (8))){
var inst_44187 = (state_44250[(12)]);
var inst_44186 = (state_44250[(16)]);
var inst_44189 = (inst_44187 < inst_44186);
var inst_44190 = inst_44189;
var state_44250__$1 = state_44250;
if(cljs.core.truth_(inst_44190)){
var statearr_44315_45906 = state_44250__$1;
(statearr_44315_45906[(1)] = (10));

} else {
var statearr_44316_45907 = state_44250__$1;
(statearr_44316_45907[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42356__auto__ = null;
var cljs$core$async$state_machine__42356__auto____0 = (function (){
var statearr_44317 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44317[(0)] = cljs$core$async$state_machine__42356__auto__);

(statearr_44317[(1)] = (1));

return statearr_44317;
});
var cljs$core$async$state_machine__42356__auto____1 = (function (state_44250){
while(true){
var ret_value__42357__auto__ = (function (){try{while(true){
var result__42358__auto__ = switch__42355__auto__(state_44250);
if(cljs.core.keyword_identical_QMARK_(result__42358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42358__auto__;
}
break;
}
}catch (e44318){var ex__42359__auto__ = e44318;
var statearr_44319_45908 = state_44250;
(statearr_44319_45908[(2)] = ex__42359__auto__);


if(cljs.core.seq((state_44250[(4)]))){
var statearr_44320_45909 = state_44250;
(statearr_44320_45909[(1)] = cljs.core.first((state_44250[(4)])));

} else {
throw ex__42359__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45910 = state_44250;
state_44250 = G__45910;
continue;
} else {
return ret_value__42357__auto__;
}
break;
}
});
cljs$core$async$state_machine__42356__auto__ = function(state_44250){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42356__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42356__auto____1.call(this,state_44250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42356__auto____0;
cljs$core$async$state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42356__auto____1;
return cljs$core$async$state_machine__42356__auto__;
})()
})();
var state__42632__auto__ = (function (){var statearr_44333 = f__42631__auto__();
(statearr_44333[(6)] = c__42630__auto___45859);

return statearr_44333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42632__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__44335 = arguments.length;
switch (G__44335) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__44344 = arguments.length;
switch (G__44344) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__44347 = arguments.length;
switch (G__44347) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__42630__auto___45916 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42631__auto__ = (function (){var switch__42355__auto__ = (function (state_44403){
var state_val_44404 = (state_44403[(1)]);
if((state_val_44404 === (7))){
var state_44403__$1 = state_44403;
var statearr_44410_45917 = state_44403__$1;
(statearr_44410_45917[(2)] = null);

(statearr_44410_45917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44404 === (1))){
var state_44403__$1 = state_44403;
var statearr_44411_45918 = state_44403__$1;
(statearr_44411_45918[(2)] = null);

(statearr_44411_45918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44404 === (4))){
var inst_44356 = (state_44403[(7)]);
var inst_44357 = (state_44403[(8)]);
var inst_44359 = (inst_44357 < inst_44356);
var state_44403__$1 = state_44403;
if(cljs.core.truth_(inst_44359)){
var statearr_44412_45920 = state_44403__$1;
(statearr_44412_45920[(1)] = (6));

} else {
var statearr_44413_45922 = state_44403__$1;
(statearr_44413_45922[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44404 === (15))){
var inst_44388 = (state_44403[(9)]);
var inst_44394 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_44388);
var state_44403__$1 = state_44403;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44403__$1,(17),out,inst_44394);
} else {
if((state_val_44404 === (13))){
var inst_44388 = (state_44403[(9)]);
var inst_44388__$1 = (state_44403[(2)]);
var inst_44389 = cljs.core.some(cljs.core.nil_QMARK_,inst_44388__$1);
var state_44403__$1 = (function (){var statearr_44417 = state_44403;
(statearr_44417[(9)] = inst_44388__$1);

return statearr_44417;
})();
if(cljs.core.truth_(inst_44389)){
var statearr_44418_45929 = state_44403__$1;
(statearr_44418_45929[(1)] = (14));

} else {
var statearr_44419_45930 = state_44403__$1;
(statearr_44419_45930[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44404 === (6))){
var state_44403__$1 = state_44403;
var statearr_44427_45931 = state_44403__$1;
(statearr_44427_45931[(2)] = null);

(statearr_44427_45931[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44404 === (17))){
var inst_44396 = (state_44403[(2)]);
var state_44403__$1 = (function (){var statearr_44429 = state_44403;
(statearr_44429[(10)] = inst_44396);

return statearr_44429;
})();
var statearr_44431_45932 = state_44403__$1;
(statearr_44431_45932[(2)] = null);

(statearr_44431_45932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44404 === (3))){
var inst_44401 = (state_44403[(2)]);
var state_44403__$1 = state_44403;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44403__$1,inst_44401);
} else {
if((state_val_44404 === (12))){
var _ = (function (){var statearr_44436 = state_44403;
(statearr_44436[(4)] = cljs.core.rest((state_44403[(4)])));

return statearr_44436;
})();
var state_44403__$1 = state_44403;
var ex44428 = (state_44403__$1[(2)]);
var statearr_44437_45937 = state_44403__$1;
(statearr_44437_45937[(5)] = ex44428);


if((ex44428 instanceof Object)){
var statearr_44439_45938 = state_44403__$1;
(statearr_44439_45938[(1)] = (11));

(statearr_44439_45938[(5)] = null);

} else {
throw ex44428;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44404 === (2))){
var inst_44355 = cljs.core.reset_BANG_(dctr,cnt);
var inst_44356 = cnt;
var inst_44357 = (0);
var state_44403__$1 = (function (){var statearr_44440 = state_44403;
(statearr_44440[(7)] = inst_44356);

(statearr_44440[(11)] = inst_44355);

(statearr_44440[(8)] = inst_44357);

return statearr_44440;
})();
var statearr_44443_45939 = state_44403__$1;
(statearr_44443_45939[(2)] = null);

(statearr_44443_45939[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44404 === (11))){
var inst_44366 = (state_44403[(2)]);
var inst_44367 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_44403__$1 = (function (){var statearr_44446 = state_44403;
(statearr_44446[(12)] = inst_44366);

return statearr_44446;
})();
var statearr_44447_45940 = state_44403__$1;
(statearr_44447_45940[(2)] = inst_44367);

(statearr_44447_45940[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44404 === (9))){
var inst_44357 = (state_44403[(8)]);
var _ = (function (){var statearr_44448 = state_44403;
(statearr_44448[(4)] = cljs.core.cons((12),(state_44403[(4)])));

return statearr_44448;
})();
var inst_44373 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_44357) : chs__$1.call(null,inst_44357));
var inst_44374 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_44357) : done.call(null,inst_44357));
var inst_44375 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_44373,inst_44374);
var ___$1 = (function (){var statearr_44451 = state_44403;
(statearr_44451[(4)] = cljs.core.rest((state_44403[(4)])));

return statearr_44451;
})();
var state_44403__$1 = state_44403;
var statearr_44452_45943 = state_44403__$1;
(statearr_44452_45943[(2)] = inst_44375);

(statearr_44452_45943[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44404 === (5))){
var inst_44385 = (state_44403[(2)]);
var state_44403__$1 = (function (){var statearr_44456 = state_44403;
(statearr_44456[(13)] = inst_44385);

return statearr_44456;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44403__$1,(13),dchan);
} else {
if((state_val_44404 === (14))){
var inst_44392 = cljs.core.async.close_BANG_(out);
var state_44403__$1 = state_44403;
var statearr_44458_45944 = state_44403__$1;
(statearr_44458_45944[(2)] = inst_44392);

(statearr_44458_45944[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44404 === (16))){
var inst_44399 = (state_44403[(2)]);
var state_44403__$1 = state_44403;
var statearr_44461_45945 = state_44403__$1;
(statearr_44461_45945[(2)] = inst_44399);

(statearr_44461_45945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44404 === (10))){
var inst_44357 = (state_44403[(8)]);
var inst_44378 = (state_44403[(2)]);
var inst_44379 = (inst_44357 + (1));
var inst_44357__$1 = inst_44379;
var state_44403__$1 = (function (){var statearr_44462 = state_44403;
(statearr_44462[(14)] = inst_44378);

(statearr_44462[(8)] = inst_44357__$1);

return statearr_44462;
})();
var statearr_44463_45946 = state_44403__$1;
(statearr_44463_45946[(2)] = null);

(statearr_44463_45946[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44404 === (8))){
var inst_44383 = (state_44403[(2)]);
var state_44403__$1 = state_44403;
var statearr_44468_45947 = state_44403__$1;
(statearr_44468_45947[(2)] = inst_44383);

(statearr_44468_45947[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42356__auto__ = null;
var cljs$core$async$state_machine__42356__auto____0 = (function (){
var statearr_44469 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44469[(0)] = cljs$core$async$state_machine__42356__auto__);

(statearr_44469[(1)] = (1));

return statearr_44469;
});
var cljs$core$async$state_machine__42356__auto____1 = (function (state_44403){
while(true){
var ret_value__42357__auto__ = (function (){try{while(true){
var result__42358__auto__ = switch__42355__auto__(state_44403);
if(cljs.core.keyword_identical_QMARK_(result__42358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42358__auto__;
}
break;
}
}catch (e44470){var ex__42359__auto__ = e44470;
var statearr_44471_45948 = state_44403;
(statearr_44471_45948[(2)] = ex__42359__auto__);


if(cljs.core.seq((state_44403[(4)]))){
var statearr_44473_45949 = state_44403;
(statearr_44473_45949[(1)] = cljs.core.first((state_44403[(4)])));

} else {
throw ex__42359__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45950 = state_44403;
state_44403 = G__45950;
continue;
} else {
return ret_value__42357__auto__;
}
break;
}
});
cljs$core$async$state_machine__42356__auto__ = function(state_44403){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42356__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42356__auto____1.call(this,state_44403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42356__auto____0;
cljs$core$async$state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42356__auto____1;
return cljs$core$async$state_machine__42356__auto__;
})()
})();
var state__42632__auto__ = (function (){var statearr_44477 = f__42631__auto__();
(statearr_44477[(6)] = c__42630__auto___45916);

return statearr_44477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42632__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__44482 = arguments.length;
switch (G__44482) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42630__auto___45960 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42631__auto__ = (function (){var switch__42355__auto__ = (function (state_44529){
var state_val_44530 = (state_44529[(1)]);
if((state_val_44530 === (7))){
var inst_44503 = (state_44529[(7)]);
var inst_44504 = (state_44529[(8)]);
var inst_44503__$1 = (state_44529[(2)]);
var inst_44504__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44503__$1,(0),null);
var inst_44505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44503__$1,(1),null);
var inst_44509 = (inst_44504__$1 == null);
var state_44529__$1 = (function (){var statearr_44531 = state_44529;
(statearr_44531[(7)] = inst_44503__$1);

(statearr_44531[(8)] = inst_44504__$1);

(statearr_44531[(9)] = inst_44505);

return statearr_44531;
})();
if(cljs.core.truth_(inst_44509)){
var statearr_44532_45968 = state_44529__$1;
(statearr_44532_45968[(1)] = (8));

} else {
var statearr_44533_45969 = state_44529__$1;
(statearr_44533_45969[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44530 === (1))){
var inst_44486 = cljs.core.vec(chs);
var inst_44487 = inst_44486;
var state_44529__$1 = (function (){var statearr_44534 = state_44529;
(statearr_44534[(10)] = inst_44487);

return statearr_44534;
})();
var statearr_44535_45970 = state_44529__$1;
(statearr_44535_45970[(2)] = null);

(statearr_44535_45970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44530 === (4))){
var inst_44487 = (state_44529[(10)]);
var state_44529__$1 = state_44529;
return cljs.core.async.ioc_alts_BANG_(state_44529__$1,(7),inst_44487);
} else {
if((state_val_44530 === (6))){
var inst_44525 = (state_44529[(2)]);
var state_44529__$1 = state_44529;
var statearr_44542_45971 = state_44529__$1;
(statearr_44542_45971[(2)] = inst_44525);

(statearr_44542_45971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44530 === (3))){
var inst_44527 = (state_44529[(2)]);
var state_44529__$1 = state_44529;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44529__$1,inst_44527);
} else {
if((state_val_44530 === (2))){
var inst_44487 = (state_44529[(10)]);
var inst_44496 = cljs.core.count(inst_44487);
var inst_44497 = (inst_44496 > (0));
var state_44529__$1 = state_44529;
if(cljs.core.truth_(inst_44497)){
var statearr_44549_45973 = state_44529__$1;
(statearr_44549_45973[(1)] = (4));

} else {
var statearr_44550_45974 = state_44529__$1;
(statearr_44550_45974[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44530 === (11))){
var inst_44487 = (state_44529[(10)]);
var inst_44518 = (state_44529[(2)]);
var tmp44543 = inst_44487;
var inst_44487__$1 = tmp44543;
var state_44529__$1 = (function (){var statearr_44551 = state_44529;
(statearr_44551[(10)] = inst_44487__$1);

(statearr_44551[(11)] = inst_44518);

return statearr_44551;
})();
var statearr_44552_45975 = state_44529__$1;
(statearr_44552_45975[(2)] = null);

(statearr_44552_45975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44530 === (9))){
var inst_44504 = (state_44529[(8)]);
var state_44529__$1 = state_44529;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44529__$1,(11),out,inst_44504);
} else {
if((state_val_44530 === (5))){
var inst_44523 = cljs.core.async.close_BANG_(out);
var state_44529__$1 = state_44529;
var statearr_44557_45977 = state_44529__$1;
(statearr_44557_45977[(2)] = inst_44523);

(statearr_44557_45977[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44530 === (10))){
var inst_44521 = (state_44529[(2)]);
var state_44529__$1 = state_44529;
var statearr_44558_45978 = state_44529__$1;
(statearr_44558_45978[(2)] = inst_44521);

(statearr_44558_45978[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44530 === (8))){
var inst_44487 = (state_44529[(10)]);
var inst_44503 = (state_44529[(7)]);
var inst_44504 = (state_44529[(8)]);
var inst_44505 = (state_44529[(9)]);
var inst_44513 = (function (){var cs = inst_44487;
var vec__44499 = inst_44503;
var v = inst_44504;
var c = inst_44505;
return (function (p1__44480_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__44480_SHARP_);
});
})();
var inst_44514 = cljs.core.filterv(inst_44513,inst_44487);
var inst_44487__$1 = inst_44514;
var state_44529__$1 = (function (){var statearr_44570 = state_44529;
(statearr_44570[(10)] = inst_44487__$1);

return statearr_44570;
})();
var statearr_44571_45979 = state_44529__$1;
(statearr_44571_45979[(2)] = null);

(statearr_44571_45979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42356__auto__ = null;
var cljs$core$async$state_machine__42356__auto____0 = (function (){
var statearr_44574 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44574[(0)] = cljs$core$async$state_machine__42356__auto__);

(statearr_44574[(1)] = (1));

return statearr_44574;
});
var cljs$core$async$state_machine__42356__auto____1 = (function (state_44529){
while(true){
var ret_value__42357__auto__ = (function (){try{while(true){
var result__42358__auto__ = switch__42355__auto__(state_44529);
if(cljs.core.keyword_identical_QMARK_(result__42358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42358__auto__;
}
break;
}
}catch (e44577){var ex__42359__auto__ = e44577;
var statearr_44582_45984 = state_44529;
(statearr_44582_45984[(2)] = ex__42359__auto__);


if(cljs.core.seq((state_44529[(4)]))){
var statearr_44585_45985 = state_44529;
(statearr_44585_45985[(1)] = cljs.core.first((state_44529[(4)])));

} else {
throw ex__42359__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45988 = state_44529;
state_44529 = G__45988;
continue;
} else {
return ret_value__42357__auto__;
}
break;
}
});
cljs$core$async$state_machine__42356__auto__ = function(state_44529){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42356__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42356__auto____1.call(this,state_44529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42356__auto____0;
cljs$core$async$state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42356__auto____1;
return cljs$core$async$state_machine__42356__auto__;
})()
})();
var state__42632__auto__ = (function (){var statearr_44586 = f__42631__auto__();
(statearr_44586[(6)] = c__42630__auto___45960);

return statearr_44586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42632__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__44605 = arguments.length;
switch (G__44605) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42630__auto___45991 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42631__auto__ = (function (){var switch__42355__auto__ = (function (state_44644){
var state_val_44645 = (state_44644[(1)]);
if((state_val_44645 === (7))){
var inst_44623 = (state_44644[(7)]);
var inst_44623__$1 = (state_44644[(2)]);
var inst_44624 = (inst_44623__$1 == null);
var inst_44625 = cljs.core.not(inst_44624);
var state_44644__$1 = (function (){var statearr_44656 = state_44644;
(statearr_44656[(7)] = inst_44623__$1);

return statearr_44656;
})();
if(inst_44625){
var statearr_44657_45995 = state_44644__$1;
(statearr_44657_45995[(1)] = (8));

} else {
var statearr_44658_45996 = state_44644__$1;
(statearr_44658_45996[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44645 === (1))){
var inst_44618 = (0);
var state_44644__$1 = (function (){var statearr_44661 = state_44644;
(statearr_44661[(8)] = inst_44618);

return statearr_44661;
})();
var statearr_44662_45998 = state_44644__$1;
(statearr_44662_45998[(2)] = null);

(statearr_44662_45998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44645 === (4))){
var state_44644__$1 = state_44644;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44644__$1,(7),ch);
} else {
if((state_val_44645 === (6))){
var inst_44636 = (state_44644[(2)]);
var state_44644__$1 = state_44644;
var statearr_44663_46000 = state_44644__$1;
(statearr_44663_46000[(2)] = inst_44636);

(statearr_44663_46000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44645 === (3))){
var inst_44638 = (state_44644[(2)]);
var inst_44639 = cljs.core.async.close_BANG_(out);
var state_44644__$1 = (function (){var statearr_44665 = state_44644;
(statearr_44665[(9)] = inst_44638);

return statearr_44665;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44644__$1,inst_44639);
} else {
if((state_val_44645 === (2))){
var inst_44618 = (state_44644[(8)]);
var inst_44620 = (inst_44618 < n);
var state_44644__$1 = state_44644;
if(cljs.core.truth_(inst_44620)){
var statearr_44667_46002 = state_44644__$1;
(statearr_44667_46002[(1)] = (4));

} else {
var statearr_44668_46003 = state_44644__$1;
(statearr_44668_46003[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44645 === (11))){
var inst_44618 = (state_44644[(8)]);
var inst_44628 = (state_44644[(2)]);
var inst_44629 = (inst_44618 + (1));
var inst_44618__$1 = inst_44629;
var state_44644__$1 = (function (){var statearr_44669 = state_44644;
(statearr_44669[(8)] = inst_44618__$1);

(statearr_44669[(10)] = inst_44628);

return statearr_44669;
})();
var statearr_44670_46004 = state_44644__$1;
(statearr_44670_46004[(2)] = null);

(statearr_44670_46004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44645 === (9))){
var state_44644__$1 = state_44644;
var statearr_44675_46005 = state_44644__$1;
(statearr_44675_46005[(2)] = null);

(statearr_44675_46005[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44645 === (5))){
var state_44644__$1 = state_44644;
var statearr_44681_46007 = state_44644__$1;
(statearr_44681_46007[(2)] = null);

(statearr_44681_46007[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44645 === (10))){
var inst_44633 = (state_44644[(2)]);
var state_44644__$1 = state_44644;
var statearr_44686_46008 = state_44644__$1;
(statearr_44686_46008[(2)] = inst_44633);

(statearr_44686_46008[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44645 === (8))){
var inst_44623 = (state_44644[(7)]);
var state_44644__$1 = state_44644;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44644__$1,(11),out,inst_44623);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42356__auto__ = null;
var cljs$core$async$state_machine__42356__auto____0 = (function (){
var statearr_44693 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44693[(0)] = cljs$core$async$state_machine__42356__auto__);

(statearr_44693[(1)] = (1));

return statearr_44693;
});
var cljs$core$async$state_machine__42356__auto____1 = (function (state_44644){
while(true){
var ret_value__42357__auto__ = (function (){try{while(true){
var result__42358__auto__ = switch__42355__auto__(state_44644);
if(cljs.core.keyword_identical_QMARK_(result__42358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42358__auto__;
}
break;
}
}catch (e44694){var ex__42359__auto__ = e44694;
var statearr_44695_46009 = state_44644;
(statearr_44695_46009[(2)] = ex__42359__auto__);


if(cljs.core.seq((state_44644[(4)]))){
var statearr_44696_46010 = state_44644;
(statearr_44696_46010[(1)] = cljs.core.first((state_44644[(4)])));

} else {
throw ex__42359__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46011 = state_44644;
state_44644 = G__46011;
continue;
} else {
return ret_value__42357__auto__;
}
break;
}
});
cljs$core$async$state_machine__42356__auto__ = function(state_44644){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42356__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42356__auto____1.call(this,state_44644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42356__auto____0;
cljs$core$async$state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42356__auto____1;
return cljs$core$async$state_machine__42356__auto__;
})()
})();
var state__42632__auto__ = (function (){var statearr_44697 = f__42631__auto__();
(statearr_44697[(6)] = c__42630__auto___45991);

return statearr_44697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42632__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44702 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44702 = (function (f,ch,meta44703){
this.f = f;
this.ch = ch;
this.meta44703 = meta44703;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44704,meta44703__$1){
var self__ = this;
var _44704__$1 = this;
return (new cljs.core.async.t_cljs$core$async44702(self__.f,self__.ch,meta44703__$1));
}));

(cljs.core.async.t_cljs$core$async44702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44704){
var self__ = this;
var _44704__$1 = this;
return self__.meta44703;
}));

(cljs.core.async.t_cljs$core$async44702.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44702.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44702.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44702.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44702.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44708 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44708 = (function (f,ch,meta44703,_,fn1,meta44709){
this.f = f;
this.ch = ch;
this.meta44703 = meta44703;
this._ = _;
this.fn1 = fn1;
this.meta44709 = meta44709;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44710,meta44709__$1){
var self__ = this;
var _44710__$1 = this;
return (new cljs.core.async.t_cljs$core$async44708(self__.f,self__.ch,self__.meta44703,self__._,self__.fn1,meta44709__$1));
}));

(cljs.core.async.t_cljs$core$async44708.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44710){
var self__ = this;
var _44710__$1 = this;
return self__.meta44709;
}));

(cljs.core.async.t_cljs$core$async44708.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44708.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async44708.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44708.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__44701_SHARP_){
var G__44715 = (((p1__44701_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__44701_SHARP_) : self__.f.call(null,p1__44701_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__44715) : f1.call(null,G__44715));
});
}));

(cljs.core.async.t_cljs$core$async44708.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44703","meta44703",1803239595,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async44702","cljs.core.async/t_cljs$core$async44702",1692047908,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta44709","meta44709",1595727686,null)], null);
}));

(cljs.core.async.t_cljs$core$async44708.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44708.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44708");

(cljs.core.async.t_cljs$core$async44708.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async44708");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44708.
 */
cljs.core.async.__GT_t_cljs$core$async44708 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44708(f__$1,ch__$1,meta44703__$1,___$2,fn1__$1,meta44709){
return (new cljs.core.async.t_cljs$core$async44708(f__$1,ch__$1,meta44703__$1,___$2,fn1__$1,meta44709));
});

}

return (new cljs.core.async.t_cljs$core$async44708(self__.f,self__.ch,self__.meta44703,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__44722 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__44722) : self__.f.call(null,G__44722));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async44702.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44702.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async44702.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44703","meta44703",1803239595,null)], null);
}));

(cljs.core.async.t_cljs$core$async44702.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44702.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44702");

(cljs.core.async.t_cljs$core$async44702.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async44702");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44702.
 */
cljs.core.async.__GT_t_cljs$core$async44702 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44702(f__$1,ch__$1,meta44703){
return (new cljs.core.async.t_cljs$core$async44702(f__$1,ch__$1,meta44703));
});

}

return (new cljs.core.async.t_cljs$core$async44702(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44726 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44726 = (function (f,ch,meta44727){
this.f = f;
this.ch = ch;
this.meta44727 = meta44727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44728,meta44727__$1){
var self__ = this;
var _44728__$1 = this;
return (new cljs.core.async.t_cljs$core$async44726(self__.f,self__.ch,meta44727__$1));
}));

(cljs.core.async.t_cljs$core$async44726.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44728){
var self__ = this;
var _44728__$1 = this;
return self__.meta44727;
}));

(cljs.core.async.t_cljs$core$async44726.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44726.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44726.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44726.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async44726.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44726.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async44726.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44727","meta44727",1579586196,null)], null);
}));

(cljs.core.async.t_cljs$core$async44726.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44726.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44726");

(cljs.core.async.t_cljs$core$async44726.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async44726");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44726.
 */
cljs.core.async.__GT_t_cljs$core$async44726 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async44726(f__$1,ch__$1,meta44727){
return (new cljs.core.async.t_cljs$core$async44726(f__$1,ch__$1,meta44727));
});

}

return (new cljs.core.async.t_cljs$core$async44726(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44736 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44736 = (function (p,ch,meta44737){
this.p = p;
this.ch = ch;
this.meta44737 = meta44737;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44738,meta44737__$1){
var self__ = this;
var _44738__$1 = this;
return (new cljs.core.async.t_cljs$core$async44736(self__.p,self__.ch,meta44737__$1));
}));

(cljs.core.async.t_cljs$core$async44736.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44738){
var self__ = this;
var _44738__$1 = this;
return self__.meta44737;
}));

(cljs.core.async.t_cljs$core$async44736.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44736.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44736.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44736.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44736.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async44736.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44736.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async44736.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44737","meta44737",214104142,null)], null);
}));

(cljs.core.async.t_cljs$core$async44736.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44736.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44736");

(cljs.core.async.t_cljs$core$async44736.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async44736");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44736.
 */
cljs.core.async.__GT_t_cljs$core$async44736 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async44736(p__$1,ch__$1,meta44737){
return (new cljs.core.async.t_cljs$core$async44736(p__$1,ch__$1,meta44737));
});

}

return (new cljs.core.async.t_cljs$core$async44736(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__44754 = arguments.length;
switch (G__44754) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42630__auto___46038 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42631__auto__ = (function (){var switch__42355__auto__ = (function (state_44777){
var state_val_44778 = (state_44777[(1)]);
if((state_val_44778 === (7))){
var inst_44773 = (state_44777[(2)]);
var state_44777__$1 = state_44777;
var statearr_44780_46043 = state_44777__$1;
(statearr_44780_46043[(2)] = inst_44773);

(statearr_44780_46043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44778 === (1))){
var state_44777__$1 = state_44777;
var statearr_44784_46044 = state_44777__$1;
(statearr_44784_46044[(2)] = null);

(statearr_44784_46044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44778 === (4))){
var inst_44759 = (state_44777[(7)]);
var inst_44759__$1 = (state_44777[(2)]);
var inst_44760 = (inst_44759__$1 == null);
var state_44777__$1 = (function (){var statearr_44786 = state_44777;
(statearr_44786[(7)] = inst_44759__$1);

return statearr_44786;
})();
if(cljs.core.truth_(inst_44760)){
var statearr_44787_46045 = state_44777__$1;
(statearr_44787_46045[(1)] = (5));

} else {
var statearr_44788_46046 = state_44777__$1;
(statearr_44788_46046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44778 === (6))){
var inst_44759 = (state_44777[(7)]);
var inst_44764 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44759) : p.call(null,inst_44759));
var state_44777__$1 = state_44777;
if(cljs.core.truth_(inst_44764)){
var statearr_44789_46048 = state_44777__$1;
(statearr_44789_46048[(1)] = (8));

} else {
var statearr_44790_46049 = state_44777__$1;
(statearr_44790_46049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44778 === (3))){
var inst_44775 = (state_44777[(2)]);
var state_44777__$1 = state_44777;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44777__$1,inst_44775);
} else {
if((state_val_44778 === (2))){
var state_44777__$1 = state_44777;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44777__$1,(4),ch);
} else {
if((state_val_44778 === (11))){
var inst_44767 = (state_44777[(2)]);
var state_44777__$1 = state_44777;
var statearr_44794_46050 = state_44777__$1;
(statearr_44794_46050[(2)] = inst_44767);

(statearr_44794_46050[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44778 === (9))){
var state_44777__$1 = state_44777;
var statearr_44795_46051 = state_44777__$1;
(statearr_44795_46051[(2)] = null);

(statearr_44795_46051[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44778 === (5))){
var inst_44762 = cljs.core.async.close_BANG_(out);
var state_44777__$1 = state_44777;
var statearr_44796_46052 = state_44777__$1;
(statearr_44796_46052[(2)] = inst_44762);

(statearr_44796_46052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44778 === (10))){
var inst_44770 = (state_44777[(2)]);
var state_44777__$1 = (function (){var statearr_44797 = state_44777;
(statearr_44797[(8)] = inst_44770);

return statearr_44797;
})();
var statearr_44798_46053 = state_44777__$1;
(statearr_44798_46053[(2)] = null);

(statearr_44798_46053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44778 === (8))){
var inst_44759 = (state_44777[(7)]);
var state_44777__$1 = state_44777;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44777__$1,(11),out,inst_44759);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42356__auto__ = null;
var cljs$core$async$state_machine__42356__auto____0 = (function (){
var statearr_44800 = [null,null,null,null,null,null,null,null,null];
(statearr_44800[(0)] = cljs$core$async$state_machine__42356__auto__);

(statearr_44800[(1)] = (1));

return statearr_44800;
});
var cljs$core$async$state_machine__42356__auto____1 = (function (state_44777){
while(true){
var ret_value__42357__auto__ = (function (){try{while(true){
var result__42358__auto__ = switch__42355__auto__(state_44777);
if(cljs.core.keyword_identical_QMARK_(result__42358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42358__auto__;
}
break;
}
}catch (e44801){var ex__42359__auto__ = e44801;
var statearr_44802_46056 = state_44777;
(statearr_44802_46056[(2)] = ex__42359__auto__);


if(cljs.core.seq((state_44777[(4)]))){
var statearr_44803_46057 = state_44777;
(statearr_44803_46057[(1)] = cljs.core.first((state_44777[(4)])));

} else {
throw ex__42359__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46058 = state_44777;
state_44777 = G__46058;
continue;
} else {
return ret_value__42357__auto__;
}
break;
}
});
cljs$core$async$state_machine__42356__auto__ = function(state_44777){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42356__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42356__auto____1.call(this,state_44777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42356__auto____0;
cljs$core$async$state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42356__auto____1;
return cljs$core$async$state_machine__42356__auto__;
})()
})();
var state__42632__auto__ = (function (){var statearr_44804 = f__42631__auto__();
(statearr_44804[(6)] = c__42630__auto___46038);

return statearr_44804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42632__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__44811 = arguments.length;
switch (G__44811) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__42630__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42631__auto__ = (function (){var switch__42355__auto__ = (function (state_44895){
var state_val_44896 = (state_44895[(1)]);
if((state_val_44896 === (7))){
var inst_44891 = (state_44895[(2)]);
var state_44895__$1 = state_44895;
var statearr_44901_46061 = state_44895__$1;
(statearr_44901_46061[(2)] = inst_44891);

(statearr_44901_46061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44896 === (20))){
var inst_44854 = (state_44895[(7)]);
var inst_44872 = (state_44895[(2)]);
var inst_44873 = cljs.core.next(inst_44854);
var inst_44840 = inst_44873;
var inst_44841 = null;
var inst_44842 = (0);
var inst_44843 = (0);
var state_44895__$1 = (function (){var statearr_44902 = state_44895;
(statearr_44902[(8)] = inst_44841);

(statearr_44902[(9)] = inst_44840);

(statearr_44902[(10)] = inst_44872);

(statearr_44902[(11)] = inst_44842);

(statearr_44902[(12)] = inst_44843);

return statearr_44902;
})();
var statearr_44904_46062 = state_44895__$1;
(statearr_44904_46062[(2)] = null);

(statearr_44904_46062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44896 === (1))){
var state_44895__$1 = state_44895;
var statearr_44905_46063 = state_44895__$1;
(statearr_44905_46063[(2)] = null);

(statearr_44905_46063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44896 === (4))){
var inst_44828 = (state_44895[(13)]);
var inst_44828__$1 = (state_44895[(2)]);
var inst_44830 = (inst_44828__$1 == null);
var state_44895__$1 = (function (){var statearr_44906 = state_44895;
(statearr_44906[(13)] = inst_44828__$1);

return statearr_44906;
})();
if(cljs.core.truth_(inst_44830)){
var statearr_44908_46064 = state_44895__$1;
(statearr_44908_46064[(1)] = (5));

} else {
var statearr_44910_46065 = state_44895__$1;
(statearr_44910_46065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44896 === (15))){
var state_44895__$1 = state_44895;
var statearr_44917_46066 = state_44895__$1;
(statearr_44917_46066[(2)] = null);

(statearr_44917_46066[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44896 === (21))){
var state_44895__$1 = state_44895;
var statearr_44920_46067 = state_44895__$1;
(statearr_44920_46067[(2)] = null);

(statearr_44920_46067[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44896 === (13))){
var inst_44841 = (state_44895[(8)]);
var inst_44840 = (state_44895[(9)]);
var inst_44842 = (state_44895[(11)]);
var inst_44843 = (state_44895[(12)]);
var inst_44850 = (state_44895[(2)]);
var inst_44851 = (inst_44843 + (1));
var tmp44913 = inst_44841;
var tmp44914 = inst_44840;
var tmp44915 = inst_44842;
var inst_44840__$1 = tmp44914;
var inst_44841__$1 = tmp44913;
var inst_44842__$1 = tmp44915;
var inst_44843__$1 = inst_44851;
var state_44895__$1 = (function (){var statearr_44922 = state_44895;
(statearr_44922[(8)] = inst_44841__$1);

(statearr_44922[(9)] = inst_44840__$1);

(statearr_44922[(11)] = inst_44842__$1);

(statearr_44922[(12)] = inst_44843__$1);

(statearr_44922[(14)] = inst_44850);

return statearr_44922;
})();
var statearr_44924_46068 = state_44895__$1;
(statearr_44924_46068[(2)] = null);

(statearr_44924_46068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44896 === (22))){
var state_44895__$1 = state_44895;
var statearr_44925_46069 = state_44895__$1;
(statearr_44925_46069[(2)] = null);

(statearr_44925_46069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44896 === (6))){
var inst_44828 = (state_44895[(13)]);
var inst_44838 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_44828) : f.call(null,inst_44828));
var inst_44839 = cljs.core.seq(inst_44838);
var inst_44840 = inst_44839;
var inst_44841 = null;
var inst_44842 = (0);
var inst_44843 = (0);
var state_44895__$1 = (function (){var statearr_44927 = state_44895;
(statearr_44927[(8)] = inst_44841);

(statearr_44927[(9)] = inst_44840);

(statearr_44927[(11)] = inst_44842);

(statearr_44927[(12)] = inst_44843);

return statearr_44927;
})();
var statearr_44929_46070 = state_44895__$1;
(statearr_44929_46070[(2)] = null);

(statearr_44929_46070[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44896 === (17))){
var inst_44854 = (state_44895[(7)]);
var inst_44864 = cljs.core.chunk_first(inst_44854);
var inst_44865 = cljs.core.chunk_rest(inst_44854);
var inst_44866 = cljs.core.count(inst_44864);
var inst_44840 = inst_44865;
var inst_44841 = inst_44864;
var inst_44842 = inst_44866;
var inst_44843 = (0);
var state_44895__$1 = (function (){var statearr_44930 = state_44895;
(statearr_44930[(8)] = inst_44841);

(statearr_44930[(9)] = inst_44840);

(statearr_44930[(11)] = inst_44842);

(statearr_44930[(12)] = inst_44843);

return statearr_44930;
})();
var statearr_44935_46079 = state_44895__$1;
(statearr_44935_46079[(2)] = null);

(statearr_44935_46079[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44896 === (3))){
var inst_44893 = (state_44895[(2)]);
var state_44895__$1 = state_44895;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44895__$1,inst_44893);
} else {
if((state_val_44896 === (12))){
var inst_44881 = (state_44895[(2)]);
var state_44895__$1 = state_44895;
var statearr_44937_46085 = state_44895__$1;
(statearr_44937_46085[(2)] = inst_44881);

(statearr_44937_46085[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44896 === (2))){
var state_44895__$1 = state_44895;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44895__$1,(4),in$);
} else {
if((state_val_44896 === (23))){
var inst_44889 = (state_44895[(2)]);
var state_44895__$1 = state_44895;
var statearr_44938_46086 = state_44895__$1;
(statearr_44938_46086[(2)] = inst_44889);

(statearr_44938_46086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44896 === (19))){
var inst_44876 = (state_44895[(2)]);
var state_44895__$1 = state_44895;
var statearr_44940_46087 = state_44895__$1;
(statearr_44940_46087[(2)] = inst_44876);

(statearr_44940_46087[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44896 === (11))){
var inst_44840 = (state_44895[(9)]);
var inst_44854 = (state_44895[(7)]);
var inst_44854__$1 = cljs.core.seq(inst_44840);
var state_44895__$1 = (function (){var statearr_44941 = state_44895;
(statearr_44941[(7)] = inst_44854__$1);

return statearr_44941;
})();
if(inst_44854__$1){
var statearr_44942_46091 = state_44895__$1;
(statearr_44942_46091[(1)] = (14));

} else {
var statearr_44943_46092 = state_44895__$1;
(statearr_44943_46092[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44896 === (9))){
var inst_44883 = (state_44895[(2)]);
var inst_44884 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_44895__$1 = (function (){var statearr_44944 = state_44895;
(statearr_44944[(15)] = inst_44883);

return statearr_44944;
})();
if(cljs.core.truth_(inst_44884)){
var statearr_44945_46093 = state_44895__$1;
(statearr_44945_46093[(1)] = (21));

} else {
var statearr_44946_46094 = state_44895__$1;
(statearr_44946_46094[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44896 === (5))){
var inst_44832 = cljs.core.async.close_BANG_(out);
var state_44895__$1 = state_44895;
var statearr_44947_46098 = state_44895__$1;
(statearr_44947_46098[(2)] = inst_44832);

(statearr_44947_46098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44896 === (14))){
var inst_44854 = (state_44895[(7)]);
var inst_44862 = cljs.core.chunked_seq_QMARK_(inst_44854);
var state_44895__$1 = state_44895;
if(inst_44862){
var statearr_44949_46100 = state_44895__$1;
(statearr_44949_46100[(1)] = (17));

} else {
var statearr_44950_46101 = state_44895__$1;
(statearr_44950_46101[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44896 === (16))){
var inst_44879 = (state_44895[(2)]);
var state_44895__$1 = state_44895;
var statearr_44951_46102 = state_44895__$1;
(statearr_44951_46102[(2)] = inst_44879);

(statearr_44951_46102[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44896 === (10))){
var inst_44841 = (state_44895[(8)]);
var inst_44843 = (state_44895[(12)]);
var inst_44848 = cljs.core._nth(inst_44841,inst_44843);
var state_44895__$1 = state_44895;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44895__$1,(13),out,inst_44848);
} else {
if((state_val_44896 === (18))){
var inst_44854 = (state_44895[(7)]);
var inst_44870 = cljs.core.first(inst_44854);
var state_44895__$1 = state_44895;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44895__$1,(20),out,inst_44870);
} else {
if((state_val_44896 === (8))){
var inst_44842 = (state_44895[(11)]);
var inst_44843 = (state_44895[(12)]);
var inst_44845 = (inst_44843 < inst_44842);
var inst_44846 = inst_44845;
var state_44895__$1 = state_44895;
if(cljs.core.truth_(inst_44846)){
var statearr_44954_46104 = state_44895__$1;
(statearr_44954_46104[(1)] = (10));

} else {
var statearr_44955_46108 = state_44895__$1;
(statearr_44955_46108[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__42356__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__42356__auto____0 = (function (){
var statearr_44960 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44960[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__42356__auto__);

(statearr_44960[(1)] = (1));

return statearr_44960;
});
var cljs$core$async$mapcat_STAR__$_state_machine__42356__auto____1 = (function (state_44895){
while(true){
var ret_value__42357__auto__ = (function (){try{while(true){
var result__42358__auto__ = switch__42355__auto__(state_44895);
if(cljs.core.keyword_identical_QMARK_(result__42358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42358__auto__;
}
break;
}
}catch (e44962){var ex__42359__auto__ = e44962;
var statearr_44966_46110 = state_44895;
(statearr_44966_46110[(2)] = ex__42359__auto__);


if(cljs.core.seq((state_44895[(4)]))){
var statearr_44967_46118 = state_44895;
(statearr_44967_46118[(1)] = cljs.core.first((state_44895[(4)])));

} else {
throw ex__42359__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46119 = state_44895;
state_44895 = G__46119;
continue;
} else {
return ret_value__42357__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__42356__auto__ = function(state_44895){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__42356__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__42356__auto____1.call(this,state_44895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__42356__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__42356__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__42356__auto__;
})()
})();
var state__42632__auto__ = (function (){var statearr_44970 = f__42631__auto__();
(statearr_44970[(6)] = c__42630__auto__);

return statearr_44970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42632__auto__);
}));

return c__42630__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__44972 = arguments.length;
switch (G__44972) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__44978 = arguments.length;
switch (G__44978) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__44982 = arguments.length;
switch (G__44982) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42630__auto___46127 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42631__auto__ = (function (){var switch__42355__auto__ = (function (state_45012){
var state_val_45013 = (state_45012[(1)]);
if((state_val_45013 === (7))){
var inst_45007 = (state_45012[(2)]);
var state_45012__$1 = state_45012;
var statearr_45015_46128 = state_45012__$1;
(statearr_45015_46128[(2)] = inst_45007);

(statearr_45015_46128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45013 === (1))){
var inst_44988 = null;
var state_45012__$1 = (function (){var statearr_45017 = state_45012;
(statearr_45017[(7)] = inst_44988);

return statearr_45017;
})();
var statearr_45019_46129 = state_45012__$1;
(statearr_45019_46129[(2)] = null);

(statearr_45019_46129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45013 === (4))){
var inst_44991 = (state_45012[(8)]);
var inst_44991__$1 = (state_45012[(2)]);
var inst_44992 = (inst_44991__$1 == null);
var inst_44993 = cljs.core.not(inst_44992);
var state_45012__$1 = (function (){var statearr_45024 = state_45012;
(statearr_45024[(8)] = inst_44991__$1);

return statearr_45024;
})();
if(inst_44993){
var statearr_45025_46130 = state_45012__$1;
(statearr_45025_46130[(1)] = (5));

} else {
var statearr_45026_46131 = state_45012__$1;
(statearr_45026_46131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45013 === (6))){
var state_45012__$1 = state_45012;
var statearr_45030_46132 = state_45012__$1;
(statearr_45030_46132[(2)] = null);

(statearr_45030_46132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45013 === (3))){
var inst_45009 = (state_45012[(2)]);
var inst_45010 = cljs.core.async.close_BANG_(out);
var state_45012__$1 = (function (){var statearr_45031 = state_45012;
(statearr_45031[(9)] = inst_45009);

return statearr_45031;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45012__$1,inst_45010);
} else {
if((state_val_45013 === (2))){
var state_45012__$1 = state_45012;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45012__$1,(4),ch);
} else {
if((state_val_45013 === (11))){
var inst_44991 = (state_45012[(8)]);
var inst_45001 = (state_45012[(2)]);
var inst_44988 = inst_44991;
var state_45012__$1 = (function (){var statearr_45032 = state_45012;
(statearr_45032[(7)] = inst_44988);

(statearr_45032[(10)] = inst_45001);

return statearr_45032;
})();
var statearr_45033_46137 = state_45012__$1;
(statearr_45033_46137[(2)] = null);

(statearr_45033_46137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45013 === (9))){
var inst_44991 = (state_45012[(8)]);
var state_45012__$1 = state_45012;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45012__$1,(11),out,inst_44991);
} else {
if((state_val_45013 === (5))){
var inst_44988 = (state_45012[(7)]);
var inst_44991 = (state_45012[(8)]);
var inst_44995 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44991,inst_44988);
var state_45012__$1 = state_45012;
if(inst_44995){
var statearr_45039_46138 = state_45012__$1;
(statearr_45039_46138[(1)] = (8));

} else {
var statearr_45040_46139 = state_45012__$1;
(statearr_45040_46139[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45013 === (10))){
var inst_45004 = (state_45012[(2)]);
var state_45012__$1 = state_45012;
var statearr_45044_46140 = state_45012__$1;
(statearr_45044_46140[(2)] = inst_45004);

(statearr_45044_46140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45013 === (8))){
var inst_44988 = (state_45012[(7)]);
var tmp45037 = inst_44988;
var inst_44988__$1 = tmp45037;
var state_45012__$1 = (function (){var statearr_45045 = state_45012;
(statearr_45045[(7)] = inst_44988__$1);

return statearr_45045;
})();
var statearr_45046_46141 = state_45012__$1;
(statearr_45046_46141[(2)] = null);

(statearr_45046_46141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42356__auto__ = null;
var cljs$core$async$state_machine__42356__auto____0 = (function (){
var statearr_45049 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45049[(0)] = cljs$core$async$state_machine__42356__auto__);

(statearr_45049[(1)] = (1));

return statearr_45049;
});
var cljs$core$async$state_machine__42356__auto____1 = (function (state_45012){
while(true){
var ret_value__42357__auto__ = (function (){try{while(true){
var result__42358__auto__ = switch__42355__auto__(state_45012);
if(cljs.core.keyword_identical_QMARK_(result__42358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42358__auto__;
}
break;
}
}catch (e45053){var ex__42359__auto__ = e45053;
var statearr_45054_46152 = state_45012;
(statearr_45054_46152[(2)] = ex__42359__auto__);


if(cljs.core.seq((state_45012[(4)]))){
var statearr_45055_46153 = state_45012;
(statearr_45055_46153[(1)] = cljs.core.first((state_45012[(4)])));

} else {
throw ex__42359__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46154 = state_45012;
state_45012 = G__46154;
continue;
} else {
return ret_value__42357__auto__;
}
break;
}
});
cljs$core$async$state_machine__42356__auto__ = function(state_45012){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42356__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42356__auto____1.call(this,state_45012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42356__auto____0;
cljs$core$async$state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42356__auto____1;
return cljs$core$async$state_machine__42356__auto__;
})()
})();
var state__42632__auto__ = (function (){var statearr_45059 = f__42631__auto__();
(statearr_45059[(6)] = c__42630__auto___46127);

return statearr_45059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42632__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__45063 = arguments.length;
switch (G__45063) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42630__auto___46157 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42631__auto__ = (function (){var switch__42355__auto__ = (function (state_45114){
var state_val_45115 = (state_45114[(1)]);
if((state_val_45115 === (7))){
var inst_45110 = (state_45114[(2)]);
var state_45114__$1 = state_45114;
var statearr_45117_46158 = state_45114__$1;
(statearr_45117_46158[(2)] = inst_45110);

(statearr_45117_46158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45115 === (1))){
var inst_45068 = (new Array(n));
var inst_45070 = inst_45068;
var inst_45071 = (0);
var state_45114__$1 = (function (){var statearr_45118 = state_45114;
(statearr_45118[(7)] = inst_45071);

(statearr_45118[(8)] = inst_45070);

return statearr_45118;
})();
var statearr_45121_46159 = state_45114__$1;
(statearr_45121_46159[(2)] = null);

(statearr_45121_46159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45115 === (4))){
var inst_45075 = (state_45114[(9)]);
var inst_45075__$1 = (state_45114[(2)]);
var inst_45076 = (inst_45075__$1 == null);
var inst_45077 = cljs.core.not(inst_45076);
var state_45114__$1 = (function (){var statearr_45122 = state_45114;
(statearr_45122[(9)] = inst_45075__$1);

return statearr_45122;
})();
if(inst_45077){
var statearr_45125_46163 = state_45114__$1;
(statearr_45125_46163[(1)] = (5));

} else {
var statearr_45126_46164 = state_45114__$1;
(statearr_45126_46164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45115 === (15))){
var inst_45104 = (state_45114[(2)]);
var state_45114__$1 = state_45114;
var statearr_45130_46165 = state_45114__$1;
(statearr_45130_46165[(2)] = inst_45104);

(statearr_45130_46165[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45115 === (13))){
var state_45114__$1 = state_45114;
var statearr_45132_46166 = state_45114__$1;
(statearr_45132_46166[(2)] = null);

(statearr_45132_46166[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45115 === (6))){
var inst_45071 = (state_45114[(7)]);
var inst_45099 = (inst_45071 > (0));
var state_45114__$1 = state_45114;
if(cljs.core.truth_(inst_45099)){
var statearr_45137_46173 = state_45114__$1;
(statearr_45137_46173[(1)] = (12));

} else {
var statearr_45138_46174 = state_45114__$1;
(statearr_45138_46174[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45115 === (3))){
var inst_45112 = (state_45114[(2)]);
var state_45114__$1 = state_45114;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45114__$1,inst_45112);
} else {
if((state_val_45115 === (12))){
var inst_45070 = (state_45114[(8)]);
var inst_45102 = cljs.core.vec(inst_45070);
var state_45114__$1 = state_45114;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45114__$1,(15),out,inst_45102);
} else {
if((state_val_45115 === (2))){
var state_45114__$1 = state_45114;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45114__$1,(4),ch);
} else {
if((state_val_45115 === (11))){
var inst_45089 = (state_45114[(2)]);
var inst_45090 = (new Array(n));
var inst_45070 = inst_45090;
var inst_45071 = (0);
var state_45114__$1 = (function (){var statearr_45142 = state_45114;
(statearr_45142[(7)] = inst_45071);

(statearr_45142[(8)] = inst_45070);

(statearr_45142[(10)] = inst_45089);

return statearr_45142;
})();
var statearr_45143_46175 = state_45114__$1;
(statearr_45143_46175[(2)] = null);

(statearr_45143_46175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45115 === (9))){
var inst_45070 = (state_45114[(8)]);
var inst_45087 = cljs.core.vec(inst_45070);
var state_45114__$1 = state_45114;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45114__$1,(11),out,inst_45087);
} else {
if((state_val_45115 === (5))){
var inst_45071 = (state_45114[(7)]);
var inst_45081 = (state_45114[(11)]);
var inst_45070 = (state_45114[(8)]);
var inst_45075 = (state_45114[(9)]);
var inst_45079 = (inst_45070[inst_45071] = inst_45075);
var inst_45081__$1 = (inst_45071 + (1));
var inst_45082 = (inst_45081__$1 < n);
var state_45114__$1 = (function (){var statearr_45146 = state_45114;
(statearr_45146[(12)] = inst_45079);

(statearr_45146[(11)] = inst_45081__$1);

return statearr_45146;
})();
if(cljs.core.truth_(inst_45082)){
var statearr_45147_46176 = state_45114__$1;
(statearr_45147_46176[(1)] = (8));

} else {
var statearr_45148_46177 = state_45114__$1;
(statearr_45148_46177[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45115 === (14))){
var inst_45107 = (state_45114[(2)]);
var inst_45108 = cljs.core.async.close_BANG_(out);
var state_45114__$1 = (function (){var statearr_45152 = state_45114;
(statearr_45152[(13)] = inst_45107);

return statearr_45152;
})();
var statearr_45154_46178 = state_45114__$1;
(statearr_45154_46178[(2)] = inst_45108);

(statearr_45154_46178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45115 === (10))){
var inst_45094 = (state_45114[(2)]);
var state_45114__$1 = state_45114;
var statearr_45155_46179 = state_45114__$1;
(statearr_45155_46179[(2)] = inst_45094);

(statearr_45155_46179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45115 === (8))){
var inst_45081 = (state_45114[(11)]);
var inst_45070 = (state_45114[(8)]);
var tmp45151 = inst_45070;
var inst_45070__$1 = tmp45151;
var inst_45071 = inst_45081;
var state_45114__$1 = (function (){var statearr_45162 = state_45114;
(statearr_45162[(7)] = inst_45071);

(statearr_45162[(8)] = inst_45070__$1);

return statearr_45162;
})();
var statearr_45163_46183 = state_45114__$1;
(statearr_45163_46183[(2)] = null);

(statearr_45163_46183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42356__auto__ = null;
var cljs$core$async$state_machine__42356__auto____0 = (function (){
var statearr_45168 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45168[(0)] = cljs$core$async$state_machine__42356__auto__);

(statearr_45168[(1)] = (1));

return statearr_45168;
});
var cljs$core$async$state_machine__42356__auto____1 = (function (state_45114){
while(true){
var ret_value__42357__auto__ = (function (){try{while(true){
var result__42358__auto__ = switch__42355__auto__(state_45114);
if(cljs.core.keyword_identical_QMARK_(result__42358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42358__auto__;
}
break;
}
}catch (e45172){var ex__42359__auto__ = e45172;
var statearr_45174_46191 = state_45114;
(statearr_45174_46191[(2)] = ex__42359__auto__);


if(cljs.core.seq((state_45114[(4)]))){
var statearr_45175_46192 = state_45114;
(statearr_45175_46192[(1)] = cljs.core.first((state_45114[(4)])));

} else {
throw ex__42359__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46193 = state_45114;
state_45114 = G__46193;
continue;
} else {
return ret_value__42357__auto__;
}
break;
}
});
cljs$core$async$state_machine__42356__auto__ = function(state_45114){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42356__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42356__auto____1.call(this,state_45114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42356__auto____0;
cljs$core$async$state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42356__auto____1;
return cljs$core$async$state_machine__42356__auto__;
})()
})();
var state__42632__auto__ = (function (){var statearr_45179 = f__42631__auto__();
(statearr_45179[(6)] = c__42630__auto___46157);

return statearr_45179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42632__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__45183 = arguments.length;
switch (G__45183) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42630__auto___46203 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42631__auto__ = (function (){var switch__42355__auto__ = (function (state_45231){
var state_val_45233 = (state_45231[(1)]);
if((state_val_45233 === (7))){
var inst_45227 = (state_45231[(2)]);
var state_45231__$1 = state_45231;
var statearr_45236_46209 = state_45231__$1;
(statearr_45236_46209[(2)] = inst_45227);

(statearr_45236_46209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45233 === (1))){
var inst_45186 = [];
var inst_45187 = inst_45186;
var inst_45188 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_45231__$1 = (function (){var statearr_45239 = state_45231;
(statearr_45239[(7)] = inst_45188);

(statearr_45239[(8)] = inst_45187);

return statearr_45239;
})();
var statearr_45241_46212 = state_45231__$1;
(statearr_45241_46212[(2)] = null);

(statearr_45241_46212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45233 === (4))){
var inst_45191 = (state_45231[(9)]);
var inst_45191__$1 = (state_45231[(2)]);
var inst_45192 = (inst_45191__$1 == null);
var inst_45193 = cljs.core.not(inst_45192);
var state_45231__$1 = (function (){var statearr_45243 = state_45231;
(statearr_45243[(9)] = inst_45191__$1);

return statearr_45243;
})();
if(inst_45193){
var statearr_45245_46216 = state_45231__$1;
(statearr_45245_46216[(1)] = (5));

} else {
var statearr_45246_46217 = state_45231__$1;
(statearr_45246_46217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45233 === (15))){
var inst_45187 = (state_45231[(8)]);
var inst_45219 = cljs.core.vec(inst_45187);
var state_45231__$1 = state_45231;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45231__$1,(18),out,inst_45219);
} else {
if((state_val_45233 === (13))){
var inst_45214 = (state_45231[(2)]);
var state_45231__$1 = state_45231;
var statearr_45251_46221 = state_45231__$1;
(statearr_45251_46221[(2)] = inst_45214);

(statearr_45251_46221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45233 === (6))){
var inst_45187 = (state_45231[(8)]);
var inst_45216 = inst_45187.length;
var inst_45217 = (inst_45216 > (0));
var state_45231__$1 = state_45231;
if(cljs.core.truth_(inst_45217)){
var statearr_45253_46222 = state_45231__$1;
(statearr_45253_46222[(1)] = (15));

} else {
var statearr_45254_46223 = state_45231__$1;
(statearr_45254_46223[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45233 === (17))){
var inst_45224 = (state_45231[(2)]);
var inst_45225 = cljs.core.async.close_BANG_(out);
var state_45231__$1 = (function (){var statearr_45255 = state_45231;
(statearr_45255[(10)] = inst_45224);

return statearr_45255;
})();
var statearr_45256_46224 = state_45231__$1;
(statearr_45256_46224[(2)] = inst_45225);

(statearr_45256_46224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45233 === (3))){
var inst_45229 = (state_45231[(2)]);
var state_45231__$1 = state_45231;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45231__$1,inst_45229);
} else {
if((state_val_45233 === (12))){
var inst_45187 = (state_45231[(8)]);
var inst_45207 = cljs.core.vec(inst_45187);
var state_45231__$1 = state_45231;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45231__$1,(14),out,inst_45207);
} else {
if((state_val_45233 === (2))){
var state_45231__$1 = state_45231;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45231__$1,(4),ch);
} else {
if((state_val_45233 === (11))){
var inst_45191 = (state_45231[(9)]);
var inst_45187 = (state_45231[(8)]);
var inst_45195 = (state_45231[(11)]);
var inst_45203 = inst_45187.push(inst_45191);
var tmp45259 = inst_45187;
var inst_45187__$1 = tmp45259;
var inst_45188 = inst_45195;
var state_45231__$1 = (function (){var statearr_45263 = state_45231;
(statearr_45263[(7)] = inst_45188);

(statearr_45263[(8)] = inst_45187__$1);

(statearr_45263[(12)] = inst_45203);

return statearr_45263;
})();
var statearr_45264_46232 = state_45231__$1;
(statearr_45264_46232[(2)] = null);

(statearr_45264_46232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45233 === (9))){
var inst_45188 = (state_45231[(7)]);
var inst_45199 = cljs.core.keyword_identical_QMARK_(inst_45188,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_45231__$1 = state_45231;
var statearr_45268_46234 = state_45231__$1;
(statearr_45268_46234[(2)] = inst_45199);

(statearr_45268_46234[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45233 === (5))){
var inst_45191 = (state_45231[(9)]);
var inst_45188 = (state_45231[(7)]);
var inst_45196 = (state_45231[(13)]);
var inst_45195 = (state_45231[(11)]);
var inst_45195__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45191) : f.call(null,inst_45191));
var inst_45196__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45195__$1,inst_45188);
var state_45231__$1 = (function (){var statearr_45277 = state_45231;
(statearr_45277[(13)] = inst_45196__$1);

(statearr_45277[(11)] = inst_45195__$1);

return statearr_45277;
})();
if(inst_45196__$1){
var statearr_45278_46239 = state_45231__$1;
(statearr_45278_46239[(1)] = (8));

} else {
var statearr_45279_46240 = state_45231__$1;
(statearr_45279_46240[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45233 === (14))){
var inst_45191 = (state_45231[(9)]);
var inst_45195 = (state_45231[(11)]);
var inst_45209 = (state_45231[(2)]);
var inst_45210 = [];
var inst_45211 = inst_45210.push(inst_45191);
var inst_45187 = inst_45210;
var inst_45188 = inst_45195;
var state_45231__$1 = (function (){var statearr_45280 = state_45231;
(statearr_45280[(14)] = inst_45209);

(statearr_45280[(7)] = inst_45188);

(statearr_45280[(8)] = inst_45187);

(statearr_45280[(15)] = inst_45211);

return statearr_45280;
})();
var statearr_45281_46241 = state_45231__$1;
(statearr_45281_46241[(2)] = null);

(statearr_45281_46241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45233 === (16))){
var state_45231__$1 = state_45231;
var statearr_45282_46242 = state_45231__$1;
(statearr_45282_46242[(2)] = null);

(statearr_45282_46242[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45233 === (10))){
var inst_45201 = (state_45231[(2)]);
var state_45231__$1 = state_45231;
if(cljs.core.truth_(inst_45201)){
var statearr_45283_46243 = state_45231__$1;
(statearr_45283_46243[(1)] = (11));

} else {
var statearr_45284_46244 = state_45231__$1;
(statearr_45284_46244[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45233 === (18))){
var inst_45221 = (state_45231[(2)]);
var state_45231__$1 = state_45231;
var statearr_45287_46246 = state_45231__$1;
(statearr_45287_46246[(2)] = inst_45221);

(statearr_45287_46246[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45233 === (8))){
var inst_45196 = (state_45231[(13)]);
var state_45231__$1 = state_45231;
var statearr_45290_46249 = state_45231__$1;
(statearr_45290_46249[(2)] = inst_45196);

(statearr_45290_46249[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42356__auto__ = null;
var cljs$core$async$state_machine__42356__auto____0 = (function (){
var statearr_45292 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45292[(0)] = cljs$core$async$state_machine__42356__auto__);

(statearr_45292[(1)] = (1));

return statearr_45292;
});
var cljs$core$async$state_machine__42356__auto____1 = (function (state_45231){
while(true){
var ret_value__42357__auto__ = (function (){try{while(true){
var result__42358__auto__ = switch__42355__auto__(state_45231);
if(cljs.core.keyword_identical_QMARK_(result__42358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42358__auto__;
}
break;
}
}catch (e45296){var ex__42359__auto__ = e45296;
var statearr_45300_46250 = state_45231;
(statearr_45300_46250[(2)] = ex__42359__auto__);


if(cljs.core.seq((state_45231[(4)]))){
var statearr_45301_46252 = state_45231;
(statearr_45301_46252[(1)] = cljs.core.first((state_45231[(4)])));

} else {
throw ex__42359__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46256 = state_45231;
state_45231 = G__46256;
continue;
} else {
return ret_value__42357__auto__;
}
break;
}
});
cljs$core$async$state_machine__42356__auto__ = function(state_45231){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42356__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42356__auto____1.call(this,state_45231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42356__auto____0;
cljs$core$async$state_machine__42356__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42356__auto____1;
return cljs$core$async$state_machine__42356__auto__;
})()
})();
var state__42632__auto__ = (function (){var statearr_45302 = f__42631__auto__();
(statearr_45302[(6)] = c__42630__auto___46203);

return statearr_45302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42632__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
