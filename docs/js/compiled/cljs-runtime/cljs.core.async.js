goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__43572 = arguments.length;
switch (G__43572) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43577 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43577 = (function (f,blockable,meta43578){
this.f = f;
this.blockable = blockable;
this.meta43578 = meta43578;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43579,meta43578__$1){
var self__ = this;
var _43579__$1 = this;
return (new cljs.core.async.t_cljs$core$async43577(self__.f,self__.blockable,meta43578__$1));
}));

(cljs.core.async.t_cljs$core$async43577.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43579){
var self__ = this;
var _43579__$1 = this;
return self__.meta43578;
}));

(cljs.core.async.t_cljs$core$async43577.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43577.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43577.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async43577.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async43577.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta43578","meta43578",430207323,null)], null);
}));

(cljs.core.async.t_cljs$core$async43577.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43577.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43577");

(cljs.core.async.t_cljs$core$async43577.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async43577");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43577.
 */
cljs.core.async.__GT_t_cljs$core$async43577 = (function cljs$core$async$__GT_t_cljs$core$async43577(f__$1,blockable__$1,meta43578){
return (new cljs.core.async.t_cljs$core$async43577(f__$1,blockable__$1,meta43578));
});

}

return (new cljs.core.async.t_cljs$core$async43577(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__43594 = arguments.length;
switch (G__43594) {
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
var G__43598 = arguments.length;
switch (G__43598) {
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
var G__43610 = arguments.length;
switch (G__43610) {
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
var val_46185 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46185) : fn1.call(null,val_46185));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46185) : fn1.call(null,val_46185));
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
var G__43612 = arguments.length;
switch (G__43612) {
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
var n__5636__auto___46188 = n;
var x_46189 = (0);
while(true){
if((x_46189 < n__5636__auto___46188)){
(a[x_46189] = x_46189);

var G__46190 = (x_46189 + (1));
x_46189 = G__46190;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43618 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43618 = (function (flag,meta43619){
this.flag = flag;
this.meta43619 = meta43619;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43620,meta43619__$1){
var self__ = this;
var _43620__$1 = this;
return (new cljs.core.async.t_cljs$core$async43618(self__.flag,meta43619__$1));
}));

(cljs.core.async.t_cljs$core$async43618.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43620){
var self__ = this;
var _43620__$1 = this;
return self__.meta43619;
}));

(cljs.core.async.t_cljs$core$async43618.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43618.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async43618.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43618.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async43618.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta43619","meta43619",-1748664547,null)], null);
}));

(cljs.core.async.t_cljs$core$async43618.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43618.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43618");

(cljs.core.async.t_cljs$core$async43618.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async43618");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43618.
 */
cljs.core.async.__GT_t_cljs$core$async43618 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async43618(flag__$1,meta43619){
return (new cljs.core.async.t_cljs$core$async43618(flag__$1,meta43619));
});

}

return (new cljs.core.async.t_cljs$core$async43618(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43623 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43623 = (function (flag,cb,meta43624){
this.flag = flag;
this.cb = cb;
this.meta43624 = meta43624;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43625,meta43624__$1){
var self__ = this;
var _43625__$1 = this;
return (new cljs.core.async.t_cljs$core$async43623(self__.flag,self__.cb,meta43624__$1));
}));

(cljs.core.async.t_cljs$core$async43623.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43625){
var self__ = this;
var _43625__$1 = this;
return self__.meta43624;
}));

(cljs.core.async.t_cljs$core$async43623.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43623.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async43623.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43623.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async43623.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta43624","meta43624",-937848168,null)], null);
}));

(cljs.core.async.t_cljs$core$async43623.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43623.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43623");

(cljs.core.async.t_cljs$core$async43623.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async43623");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43623.
 */
cljs.core.async.__GT_t_cljs$core$async43623 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async43623(flag__$1,cb__$1,meta43624){
return (new cljs.core.async.t_cljs$core$async43623(flag__$1,cb__$1,meta43624));
});

}

return (new cljs.core.async.t_cljs$core$async43623(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__43626_SHARP_){
var G__43628 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43626_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43628) : fret.call(null,G__43628));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43627_SHARP_){
var G__43629 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43627_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43629) : fret.call(null,G__43629));
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
var G__46194 = (i + (1));
i = G__46194;
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
var len__5769__auto___46195 = arguments.length;
var i__5770__auto___46196 = (0);
while(true){
if((i__5770__auto___46196 < len__5769__auto___46195)){
args__5775__auto__.push((arguments[i__5770__auto___46196]));

var G__46197 = (i__5770__auto___46196 + (1));
i__5770__auto___46196 = G__46197;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__43644){
var map__43646 = p__43644;
var map__43646__$1 = cljs.core.__destructure_map(map__43646);
var opts = map__43646__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq43636){
var G__43637 = cljs.core.first(seq43636);
var seq43636__$1 = cljs.core.next(seq43636);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43637,seq43636__$1);
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
var G__43663 = arguments.length;
switch (G__43663) {
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
var c__43467__auto___46206 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43468__auto__ = (function (){var switch__43290__auto__ = (function (state_43724){
var state_val_43725 = (state_43724[(1)]);
if((state_val_43725 === (7))){
var inst_43717 = (state_43724[(2)]);
var state_43724__$1 = state_43724;
var statearr_43737_46207 = state_43724__$1;
(statearr_43737_46207[(2)] = inst_43717);

(statearr_43737_46207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43725 === (1))){
var state_43724__$1 = state_43724;
var statearr_43738_46208 = state_43724__$1;
(statearr_43738_46208[(2)] = null);

(statearr_43738_46208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43725 === (4))){
var inst_43688 = (state_43724[(7)]);
var inst_43688__$1 = (state_43724[(2)]);
var inst_43697 = (inst_43688__$1 == null);
var state_43724__$1 = (function (){var statearr_43739 = state_43724;
(statearr_43739[(7)] = inst_43688__$1);

return statearr_43739;
})();
if(cljs.core.truth_(inst_43697)){
var statearr_43740_46209 = state_43724__$1;
(statearr_43740_46209[(1)] = (5));

} else {
var statearr_43741_46210 = state_43724__$1;
(statearr_43741_46210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43725 === (13))){
var state_43724__$1 = state_43724;
var statearr_43742_46211 = state_43724__$1;
(statearr_43742_46211[(2)] = null);

(statearr_43742_46211[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43725 === (6))){
var inst_43688 = (state_43724[(7)]);
var state_43724__$1 = state_43724;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43724__$1,(11),to,inst_43688);
} else {
if((state_val_43725 === (3))){
var inst_43719 = (state_43724[(2)]);
var state_43724__$1 = state_43724;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43724__$1,inst_43719);
} else {
if((state_val_43725 === (12))){
var state_43724__$1 = state_43724;
var statearr_43743_46214 = state_43724__$1;
(statearr_43743_46214[(2)] = null);

(statearr_43743_46214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43725 === (2))){
var state_43724__$1 = state_43724;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43724__$1,(4),from);
} else {
if((state_val_43725 === (11))){
var inst_43710 = (state_43724[(2)]);
var state_43724__$1 = state_43724;
if(cljs.core.truth_(inst_43710)){
var statearr_43745_46215 = state_43724__$1;
(statearr_43745_46215[(1)] = (12));

} else {
var statearr_43746_46216 = state_43724__$1;
(statearr_43746_46216[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43725 === (9))){
var state_43724__$1 = state_43724;
var statearr_43747_46217 = state_43724__$1;
(statearr_43747_46217[(2)] = null);

(statearr_43747_46217[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43725 === (5))){
var state_43724__$1 = state_43724;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43750_46218 = state_43724__$1;
(statearr_43750_46218[(1)] = (8));

} else {
var statearr_43751_46219 = state_43724__$1;
(statearr_43751_46219[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43725 === (14))){
var inst_43715 = (state_43724[(2)]);
var state_43724__$1 = state_43724;
var statearr_43752_46221 = state_43724__$1;
(statearr_43752_46221[(2)] = inst_43715);

(statearr_43752_46221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43725 === (10))){
var inst_43707 = (state_43724[(2)]);
var state_43724__$1 = state_43724;
var statearr_43753_46222 = state_43724__$1;
(statearr_43753_46222[(2)] = inst_43707);

(statearr_43753_46222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43725 === (8))){
var inst_43703 = cljs.core.async.close_BANG_(to);
var state_43724__$1 = state_43724;
var statearr_43754_46223 = state_43724__$1;
(statearr_43754_46223[(2)] = inst_43703);

(statearr_43754_46223[(1)] = (10));


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
var cljs$core$async$state_machine__43291__auto__ = null;
var cljs$core$async$state_machine__43291__auto____0 = (function (){
var statearr_43755 = [null,null,null,null,null,null,null,null];
(statearr_43755[(0)] = cljs$core$async$state_machine__43291__auto__);

(statearr_43755[(1)] = (1));

return statearr_43755;
});
var cljs$core$async$state_machine__43291__auto____1 = (function (state_43724){
while(true){
var ret_value__43292__auto__ = (function (){try{while(true){
var result__43293__auto__ = switch__43290__auto__(state_43724);
if(cljs.core.keyword_identical_QMARK_(result__43293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43293__auto__;
}
break;
}
}catch (e43756){var ex__43294__auto__ = e43756;
var statearr_43757_46226 = state_43724;
(statearr_43757_46226[(2)] = ex__43294__auto__);


if(cljs.core.seq((state_43724[(4)]))){
var statearr_43760_46227 = state_43724;
(statearr_43760_46227[(1)] = cljs.core.first((state_43724[(4)])));

} else {
throw ex__43294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46228 = state_43724;
state_43724 = G__46228;
continue;
} else {
return ret_value__43292__auto__;
}
break;
}
});
cljs$core$async$state_machine__43291__auto__ = function(state_43724){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43291__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43291__auto____1.call(this,state_43724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43291__auto____0;
cljs$core$async$state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43291__auto____1;
return cljs$core$async$state_machine__43291__auto__;
})()
})();
var state__43469__auto__ = (function (){var statearr_43761 = f__43468__auto__();
(statearr_43761[(6)] = c__43467__auto___46206);

return statearr_43761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43469__auto__);
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
var process__$1 = (function (p__43765){
var vec__43766 = p__43765;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43766,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43766,(1),null);
var job = vec__43766;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__43467__auto___46235 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43468__auto__ = (function (){var switch__43290__auto__ = (function (state_43775){
var state_val_43776 = (state_43775[(1)]);
if((state_val_43776 === (1))){
var state_43775__$1 = state_43775;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43775__$1,(2),res,v);
} else {
if((state_val_43776 === (2))){
var inst_43772 = (state_43775[(2)]);
var inst_43773 = cljs.core.async.close_BANG_(res);
var state_43775__$1 = (function (){var statearr_43779 = state_43775;
(statearr_43779[(7)] = inst_43772);

return statearr_43779;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43775__$1,inst_43773);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43291__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43291__auto____0 = (function (){
var statearr_43780 = [null,null,null,null,null,null,null,null];
(statearr_43780[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43291__auto__);

(statearr_43780[(1)] = (1));

return statearr_43780;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43291__auto____1 = (function (state_43775){
while(true){
var ret_value__43292__auto__ = (function (){try{while(true){
var result__43293__auto__ = switch__43290__auto__(state_43775);
if(cljs.core.keyword_identical_QMARK_(result__43293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43293__auto__;
}
break;
}
}catch (e43781){var ex__43294__auto__ = e43781;
var statearr_43782_46239 = state_43775;
(statearr_43782_46239[(2)] = ex__43294__auto__);


if(cljs.core.seq((state_43775[(4)]))){
var statearr_43783_46240 = state_43775;
(statearr_43783_46240[(1)] = cljs.core.first((state_43775[(4)])));

} else {
throw ex__43294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46241 = state_43775;
state_43775 = G__46241;
continue;
} else {
return ret_value__43292__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43291__auto__ = function(state_43775){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43291__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43291__auto____1.call(this,state_43775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43291__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43291__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43291__auto__;
})()
})();
var state__43469__auto__ = (function (){var statearr_43784 = f__43468__auto__();
(statearr_43784[(6)] = c__43467__auto___46235);

return statearr_43784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43469__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__43785){
var vec__43787 = p__43785;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43787,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43787,(1),null);
var job = vec__43787;
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
var n__5636__auto___46242 = n;
var __46243 = (0);
while(true){
if((__46243 < n__5636__auto___46242)){
var G__43790_46244 = type;
var G__43790_46245__$1 = (((G__43790_46244 instanceof cljs.core.Keyword))?G__43790_46244.fqn:null);
switch (G__43790_46245__$1) {
case "compute":
var c__43467__auto___46247 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__46243,c__43467__auto___46247,G__43790_46244,G__43790_46245__$1,n__5636__auto___46242,jobs,results,process__$1,async){
return (function (){
var f__43468__auto__ = (function (){var switch__43290__auto__ = ((function (__46243,c__43467__auto___46247,G__43790_46244,G__43790_46245__$1,n__5636__auto___46242,jobs,results,process__$1,async){
return (function (state_43803){
var state_val_43804 = (state_43803[(1)]);
if((state_val_43804 === (1))){
var state_43803__$1 = state_43803;
var statearr_43805_46250 = state_43803__$1;
(statearr_43805_46250[(2)] = null);

(statearr_43805_46250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (2))){
var state_43803__$1 = state_43803;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43803__$1,(4),jobs);
} else {
if((state_val_43804 === (3))){
var inst_43801 = (state_43803[(2)]);
var state_43803__$1 = state_43803;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43803__$1,inst_43801);
} else {
if((state_val_43804 === (4))){
var inst_43793 = (state_43803[(2)]);
var inst_43794 = process__$1(inst_43793);
var state_43803__$1 = state_43803;
if(cljs.core.truth_(inst_43794)){
var statearr_43810_46252 = state_43803__$1;
(statearr_43810_46252[(1)] = (5));

} else {
var statearr_43811_46253 = state_43803__$1;
(statearr_43811_46253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (5))){
var state_43803__$1 = state_43803;
var statearr_43815_46254 = state_43803__$1;
(statearr_43815_46254[(2)] = null);

(statearr_43815_46254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (6))){
var state_43803__$1 = state_43803;
var statearr_43816_46255 = state_43803__$1;
(statearr_43816_46255[(2)] = null);

(statearr_43816_46255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (7))){
var inst_43799 = (state_43803[(2)]);
var state_43803__$1 = state_43803;
var statearr_43821_46256 = state_43803__$1;
(statearr_43821_46256[(2)] = inst_43799);

(statearr_43821_46256[(1)] = (3));


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
});})(__46243,c__43467__auto___46247,G__43790_46244,G__43790_46245__$1,n__5636__auto___46242,jobs,results,process__$1,async))
;
return ((function (__46243,switch__43290__auto__,c__43467__auto___46247,G__43790_46244,G__43790_46245__$1,n__5636__auto___46242,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43291__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43291__auto____0 = (function (){
var statearr_43822 = [null,null,null,null,null,null,null];
(statearr_43822[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43291__auto__);

(statearr_43822[(1)] = (1));

return statearr_43822;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43291__auto____1 = (function (state_43803){
while(true){
var ret_value__43292__auto__ = (function (){try{while(true){
var result__43293__auto__ = switch__43290__auto__(state_43803);
if(cljs.core.keyword_identical_QMARK_(result__43293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43293__auto__;
}
break;
}
}catch (e43823){var ex__43294__auto__ = e43823;
var statearr_43824_46257 = state_43803;
(statearr_43824_46257[(2)] = ex__43294__auto__);


if(cljs.core.seq((state_43803[(4)]))){
var statearr_43825_46258 = state_43803;
(statearr_43825_46258[(1)] = cljs.core.first((state_43803[(4)])));

} else {
throw ex__43294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46259 = state_43803;
state_43803 = G__46259;
continue;
} else {
return ret_value__43292__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43291__auto__ = function(state_43803){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43291__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43291__auto____1.call(this,state_43803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43291__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43291__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43291__auto__;
})()
;})(__46243,switch__43290__auto__,c__43467__auto___46247,G__43790_46244,G__43790_46245__$1,n__5636__auto___46242,jobs,results,process__$1,async))
})();
var state__43469__auto__ = (function (){var statearr_43826 = f__43468__auto__();
(statearr_43826[(6)] = c__43467__auto___46247);

return statearr_43826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43469__auto__);
});})(__46243,c__43467__auto___46247,G__43790_46244,G__43790_46245__$1,n__5636__auto___46242,jobs,results,process__$1,async))
);


break;
case "async":
var c__43467__auto___46260 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__46243,c__43467__auto___46260,G__43790_46244,G__43790_46245__$1,n__5636__auto___46242,jobs,results,process__$1,async){
return (function (){
var f__43468__auto__ = (function (){var switch__43290__auto__ = ((function (__46243,c__43467__auto___46260,G__43790_46244,G__43790_46245__$1,n__5636__auto___46242,jobs,results,process__$1,async){
return (function (state_43839){
var state_val_43840 = (state_43839[(1)]);
if((state_val_43840 === (1))){
var state_43839__$1 = state_43839;
var statearr_43841_46265 = state_43839__$1;
(statearr_43841_46265[(2)] = null);

(statearr_43841_46265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43840 === (2))){
var state_43839__$1 = state_43839;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43839__$1,(4),jobs);
} else {
if((state_val_43840 === (3))){
var inst_43837 = (state_43839[(2)]);
var state_43839__$1 = state_43839;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43839__$1,inst_43837);
} else {
if((state_val_43840 === (4))){
var inst_43829 = (state_43839[(2)]);
var inst_43830 = async(inst_43829);
var state_43839__$1 = state_43839;
if(cljs.core.truth_(inst_43830)){
var statearr_43842_46267 = state_43839__$1;
(statearr_43842_46267[(1)] = (5));

} else {
var statearr_43843_46268 = state_43839__$1;
(statearr_43843_46268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43840 === (5))){
var state_43839__$1 = state_43839;
var statearr_43844_46269 = state_43839__$1;
(statearr_43844_46269[(2)] = null);

(statearr_43844_46269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43840 === (6))){
var state_43839__$1 = state_43839;
var statearr_43845_46270 = state_43839__$1;
(statearr_43845_46270[(2)] = null);

(statearr_43845_46270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43840 === (7))){
var inst_43835 = (state_43839[(2)]);
var state_43839__$1 = state_43839;
var statearr_43848_46271 = state_43839__$1;
(statearr_43848_46271[(2)] = inst_43835);

(statearr_43848_46271[(1)] = (3));


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
});})(__46243,c__43467__auto___46260,G__43790_46244,G__43790_46245__$1,n__5636__auto___46242,jobs,results,process__$1,async))
;
return ((function (__46243,switch__43290__auto__,c__43467__auto___46260,G__43790_46244,G__43790_46245__$1,n__5636__auto___46242,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43291__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43291__auto____0 = (function (){
var statearr_43850 = [null,null,null,null,null,null,null];
(statearr_43850[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43291__auto__);

(statearr_43850[(1)] = (1));

return statearr_43850;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43291__auto____1 = (function (state_43839){
while(true){
var ret_value__43292__auto__ = (function (){try{while(true){
var result__43293__auto__ = switch__43290__auto__(state_43839);
if(cljs.core.keyword_identical_QMARK_(result__43293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43293__auto__;
}
break;
}
}catch (e43851){var ex__43294__auto__ = e43851;
var statearr_43852_46274 = state_43839;
(statearr_43852_46274[(2)] = ex__43294__auto__);


if(cljs.core.seq((state_43839[(4)]))){
var statearr_43853_46275 = state_43839;
(statearr_43853_46275[(1)] = cljs.core.first((state_43839[(4)])));

} else {
throw ex__43294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46277 = state_43839;
state_43839 = G__46277;
continue;
} else {
return ret_value__43292__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43291__auto__ = function(state_43839){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43291__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43291__auto____1.call(this,state_43839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43291__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43291__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43291__auto__;
})()
;})(__46243,switch__43290__auto__,c__43467__auto___46260,G__43790_46244,G__43790_46245__$1,n__5636__auto___46242,jobs,results,process__$1,async))
})();
var state__43469__auto__ = (function (){var statearr_43854 = f__43468__auto__();
(statearr_43854[(6)] = c__43467__auto___46260);

return statearr_43854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43469__auto__);
});})(__46243,c__43467__auto___46260,G__43790_46244,G__43790_46245__$1,n__5636__auto___46242,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43790_46245__$1)].join('')));

}

var G__46279 = (__46243 + (1));
__46243 = G__46279;
continue;
} else {
}
break;
}

var c__43467__auto___46280 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43468__auto__ = (function (){var switch__43290__auto__ = (function (state_43876){
var state_val_43877 = (state_43876[(1)]);
if((state_val_43877 === (7))){
var inst_43872 = (state_43876[(2)]);
var state_43876__$1 = state_43876;
var statearr_43878_46281 = state_43876__$1;
(statearr_43878_46281[(2)] = inst_43872);

(statearr_43878_46281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43877 === (1))){
var state_43876__$1 = state_43876;
var statearr_43879_46282 = state_43876__$1;
(statearr_43879_46282[(2)] = null);

(statearr_43879_46282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43877 === (4))){
var inst_43857 = (state_43876[(7)]);
var inst_43857__$1 = (state_43876[(2)]);
var inst_43858 = (inst_43857__$1 == null);
var state_43876__$1 = (function (){var statearr_43880 = state_43876;
(statearr_43880[(7)] = inst_43857__$1);

return statearr_43880;
})();
if(cljs.core.truth_(inst_43858)){
var statearr_43881_46284 = state_43876__$1;
(statearr_43881_46284[(1)] = (5));

} else {
var statearr_43882_46285 = state_43876__$1;
(statearr_43882_46285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43877 === (6))){
var inst_43862 = (state_43876[(8)]);
var inst_43857 = (state_43876[(7)]);
var inst_43862__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_43863 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43864 = [inst_43857,inst_43862__$1];
var inst_43865 = (new cljs.core.PersistentVector(null,2,(5),inst_43863,inst_43864,null));
var state_43876__$1 = (function (){var statearr_43885 = state_43876;
(statearr_43885[(8)] = inst_43862__$1);

return statearr_43885;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43876__$1,(8),jobs,inst_43865);
} else {
if((state_val_43877 === (3))){
var inst_43874 = (state_43876[(2)]);
var state_43876__$1 = state_43876;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43876__$1,inst_43874);
} else {
if((state_val_43877 === (2))){
var state_43876__$1 = state_43876;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43876__$1,(4),from);
} else {
if((state_val_43877 === (9))){
var inst_43869 = (state_43876[(2)]);
var state_43876__$1 = (function (){var statearr_43886 = state_43876;
(statearr_43886[(9)] = inst_43869);

return statearr_43886;
})();
var statearr_43887_46287 = state_43876__$1;
(statearr_43887_46287[(2)] = null);

(statearr_43887_46287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43877 === (5))){
var inst_43860 = cljs.core.async.close_BANG_(jobs);
var state_43876__$1 = state_43876;
var statearr_43890_46288 = state_43876__$1;
(statearr_43890_46288[(2)] = inst_43860);

(statearr_43890_46288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43877 === (8))){
var inst_43862 = (state_43876[(8)]);
var inst_43867 = (state_43876[(2)]);
var state_43876__$1 = (function (){var statearr_43892 = state_43876;
(statearr_43892[(10)] = inst_43867);

return statearr_43892;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43876__$1,(9),results,inst_43862);
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
var cljs$core$async$pipeline_STAR__$_state_machine__43291__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43291__auto____0 = (function (){
var statearr_43906 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43906[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43291__auto__);

(statearr_43906[(1)] = (1));

return statearr_43906;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43291__auto____1 = (function (state_43876){
while(true){
var ret_value__43292__auto__ = (function (){try{while(true){
var result__43293__auto__ = switch__43290__auto__(state_43876);
if(cljs.core.keyword_identical_QMARK_(result__43293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43293__auto__;
}
break;
}
}catch (e43907){var ex__43294__auto__ = e43907;
var statearr_43908_46292 = state_43876;
(statearr_43908_46292[(2)] = ex__43294__auto__);


if(cljs.core.seq((state_43876[(4)]))){
var statearr_43909_46293 = state_43876;
(statearr_43909_46293[(1)] = cljs.core.first((state_43876[(4)])));

} else {
throw ex__43294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46294 = state_43876;
state_43876 = G__46294;
continue;
} else {
return ret_value__43292__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43291__auto__ = function(state_43876){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43291__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43291__auto____1.call(this,state_43876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43291__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43291__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43291__auto__;
})()
})();
var state__43469__auto__ = (function (){var statearr_43910 = f__43468__auto__();
(statearr_43910[(6)] = c__43467__auto___46280);

return statearr_43910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43469__auto__);
}));


var c__43467__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43468__auto__ = (function (){var switch__43290__auto__ = (function (state_43952){
var state_val_43953 = (state_43952[(1)]);
if((state_val_43953 === (7))){
var inst_43948 = (state_43952[(2)]);
var state_43952__$1 = state_43952;
var statearr_43956_46295 = state_43952__$1;
(statearr_43956_46295[(2)] = inst_43948);

(statearr_43956_46295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43953 === (20))){
var state_43952__$1 = state_43952;
var statearr_43957_46296 = state_43952__$1;
(statearr_43957_46296[(2)] = null);

(statearr_43957_46296[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43953 === (1))){
var state_43952__$1 = state_43952;
var statearr_43958_46297 = state_43952__$1;
(statearr_43958_46297[(2)] = null);

(statearr_43958_46297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43953 === (4))){
var inst_43913 = (state_43952[(7)]);
var inst_43913__$1 = (state_43952[(2)]);
var inst_43914 = (inst_43913__$1 == null);
var state_43952__$1 = (function (){var statearr_43959 = state_43952;
(statearr_43959[(7)] = inst_43913__$1);

return statearr_43959;
})();
if(cljs.core.truth_(inst_43914)){
var statearr_43960_46298 = state_43952__$1;
(statearr_43960_46298[(1)] = (5));

} else {
var statearr_43961_46299 = state_43952__$1;
(statearr_43961_46299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43953 === (15))){
var inst_43930 = (state_43952[(8)]);
var state_43952__$1 = state_43952;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43952__$1,(18),to,inst_43930);
} else {
if((state_val_43953 === (21))){
var inst_43943 = (state_43952[(2)]);
var state_43952__$1 = state_43952;
var statearr_43962_46302 = state_43952__$1;
(statearr_43962_46302[(2)] = inst_43943);

(statearr_43962_46302[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43953 === (13))){
var inst_43945 = (state_43952[(2)]);
var state_43952__$1 = (function (){var statearr_43963 = state_43952;
(statearr_43963[(9)] = inst_43945);

return statearr_43963;
})();
var statearr_43964_46303 = state_43952__$1;
(statearr_43964_46303[(2)] = null);

(statearr_43964_46303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43953 === (6))){
var inst_43913 = (state_43952[(7)]);
var state_43952__$1 = state_43952;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43952__$1,(11),inst_43913);
} else {
if((state_val_43953 === (17))){
var inst_43938 = (state_43952[(2)]);
var state_43952__$1 = state_43952;
if(cljs.core.truth_(inst_43938)){
var statearr_43965_46306 = state_43952__$1;
(statearr_43965_46306[(1)] = (19));

} else {
var statearr_43966_46308 = state_43952__$1;
(statearr_43966_46308[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43953 === (3))){
var inst_43950 = (state_43952[(2)]);
var state_43952__$1 = state_43952;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43952__$1,inst_43950);
} else {
if((state_val_43953 === (12))){
var inst_43927 = (state_43952[(10)]);
var state_43952__$1 = state_43952;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43952__$1,(14),inst_43927);
} else {
if((state_val_43953 === (2))){
var state_43952__$1 = state_43952;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43952__$1,(4),results);
} else {
if((state_val_43953 === (19))){
var state_43952__$1 = state_43952;
var statearr_43967_46309 = state_43952__$1;
(statearr_43967_46309[(2)] = null);

(statearr_43967_46309[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43953 === (11))){
var inst_43927 = (state_43952[(2)]);
var state_43952__$1 = (function (){var statearr_43968 = state_43952;
(statearr_43968[(10)] = inst_43927);

return statearr_43968;
})();
var statearr_43969_46311 = state_43952__$1;
(statearr_43969_46311[(2)] = null);

(statearr_43969_46311[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43953 === (9))){
var state_43952__$1 = state_43952;
var statearr_43970_46313 = state_43952__$1;
(statearr_43970_46313[(2)] = null);

(statearr_43970_46313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43953 === (5))){
var state_43952__$1 = state_43952;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43971_46315 = state_43952__$1;
(statearr_43971_46315[(1)] = (8));

} else {
var statearr_43972_46316 = state_43952__$1;
(statearr_43972_46316[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43953 === (14))){
var inst_43930 = (state_43952[(8)]);
var inst_43932 = (state_43952[(11)]);
var inst_43930__$1 = (state_43952[(2)]);
var inst_43931 = (inst_43930__$1 == null);
var inst_43932__$1 = cljs.core.not(inst_43931);
var state_43952__$1 = (function (){var statearr_43973 = state_43952;
(statearr_43973[(8)] = inst_43930__$1);

(statearr_43973[(11)] = inst_43932__$1);

return statearr_43973;
})();
if(inst_43932__$1){
var statearr_43974_46317 = state_43952__$1;
(statearr_43974_46317[(1)] = (15));

} else {
var statearr_43975_46321 = state_43952__$1;
(statearr_43975_46321[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43953 === (16))){
var inst_43932 = (state_43952[(11)]);
var state_43952__$1 = state_43952;
var statearr_43976_46322 = state_43952__$1;
(statearr_43976_46322[(2)] = inst_43932);

(statearr_43976_46322[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43953 === (10))){
var inst_43924 = (state_43952[(2)]);
var state_43952__$1 = state_43952;
var statearr_43977_46323 = state_43952__$1;
(statearr_43977_46323[(2)] = inst_43924);

(statearr_43977_46323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43953 === (18))){
var inst_43935 = (state_43952[(2)]);
var state_43952__$1 = state_43952;
var statearr_43978_46324 = state_43952__$1;
(statearr_43978_46324[(2)] = inst_43935);

(statearr_43978_46324[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43953 === (8))){
var inst_43917 = cljs.core.async.close_BANG_(to);
var state_43952__$1 = state_43952;
var statearr_43979_46329 = state_43952__$1;
(statearr_43979_46329[(2)] = inst_43917);

(statearr_43979_46329[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__43291__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43291__auto____0 = (function (){
var statearr_43986 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43986[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43291__auto__);

(statearr_43986[(1)] = (1));

return statearr_43986;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43291__auto____1 = (function (state_43952){
while(true){
var ret_value__43292__auto__ = (function (){try{while(true){
var result__43293__auto__ = switch__43290__auto__(state_43952);
if(cljs.core.keyword_identical_QMARK_(result__43293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43293__auto__;
}
break;
}
}catch (e43987){var ex__43294__auto__ = e43987;
var statearr_43988_46331 = state_43952;
(statearr_43988_46331[(2)] = ex__43294__auto__);


if(cljs.core.seq((state_43952[(4)]))){
var statearr_43989_46333 = state_43952;
(statearr_43989_46333[(1)] = cljs.core.first((state_43952[(4)])));

} else {
throw ex__43294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46334 = state_43952;
state_43952 = G__46334;
continue;
} else {
return ret_value__43292__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43291__auto__ = function(state_43952){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43291__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43291__auto____1.call(this,state_43952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43291__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43291__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43291__auto__;
})()
})();
var state__43469__auto__ = (function (){var statearr_43990 = f__43468__auto__();
(statearr_43990[(6)] = c__43467__auto__);

return statearr_43990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43469__auto__);
}));

return c__43467__auto__;
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
var G__43994 = arguments.length;
switch (G__43994) {
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
var G__43998 = arguments.length;
switch (G__43998) {
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
var G__44009 = arguments.length;
switch (G__44009) {
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
var c__43467__auto___46342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43468__auto__ = (function (){var switch__43290__auto__ = (function (state_44048){
var state_val_44049 = (state_44048[(1)]);
if((state_val_44049 === (7))){
var inst_44043 = (state_44048[(2)]);
var state_44048__$1 = state_44048;
var statearr_44050_46343 = state_44048__$1;
(statearr_44050_46343[(2)] = inst_44043);

(statearr_44050_46343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44049 === (1))){
var state_44048__$1 = state_44048;
var statearr_44051_46345 = state_44048__$1;
(statearr_44051_46345[(2)] = null);

(statearr_44051_46345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44049 === (4))){
var inst_44020 = (state_44048[(7)]);
var inst_44020__$1 = (state_44048[(2)]);
var inst_44021 = (inst_44020__$1 == null);
var state_44048__$1 = (function (){var statearr_44052 = state_44048;
(statearr_44052[(7)] = inst_44020__$1);

return statearr_44052;
})();
if(cljs.core.truth_(inst_44021)){
var statearr_44056_46347 = state_44048__$1;
(statearr_44056_46347[(1)] = (5));

} else {
var statearr_44057_46348 = state_44048__$1;
(statearr_44057_46348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44049 === (13))){
var state_44048__$1 = state_44048;
var statearr_44058_46350 = state_44048__$1;
(statearr_44058_46350[(2)] = null);

(statearr_44058_46350[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44049 === (6))){
var inst_44020 = (state_44048[(7)]);
var inst_44026 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44020) : p.call(null,inst_44020));
var state_44048__$1 = state_44048;
if(cljs.core.truth_(inst_44026)){
var statearr_44059_46351 = state_44048__$1;
(statearr_44059_46351[(1)] = (9));

} else {
var statearr_44060_46352 = state_44048__$1;
(statearr_44060_46352[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44049 === (3))){
var inst_44045 = (state_44048[(2)]);
var state_44048__$1 = state_44048;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44048__$1,inst_44045);
} else {
if((state_val_44049 === (12))){
var state_44048__$1 = state_44048;
var statearr_44068_46353 = state_44048__$1;
(statearr_44068_46353[(2)] = null);

(statearr_44068_46353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44049 === (2))){
var state_44048__$1 = state_44048;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44048__$1,(4),ch);
} else {
if((state_val_44049 === (11))){
var inst_44020 = (state_44048[(7)]);
var inst_44031 = (state_44048[(2)]);
var state_44048__$1 = state_44048;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44048__$1,(8),inst_44031,inst_44020);
} else {
if((state_val_44049 === (9))){
var state_44048__$1 = state_44048;
var statearr_44069_46355 = state_44048__$1;
(statearr_44069_46355[(2)] = tc);

(statearr_44069_46355[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44049 === (5))){
var inst_44023 = cljs.core.async.close_BANG_(tc);
var inst_44024 = cljs.core.async.close_BANG_(fc);
var state_44048__$1 = (function (){var statearr_44070 = state_44048;
(statearr_44070[(8)] = inst_44023);

return statearr_44070;
})();
var statearr_44071_46356 = state_44048__$1;
(statearr_44071_46356[(2)] = inst_44024);

(statearr_44071_46356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44049 === (14))){
var inst_44041 = (state_44048[(2)]);
var state_44048__$1 = state_44048;
var statearr_44074_46358 = state_44048__$1;
(statearr_44074_46358[(2)] = inst_44041);

(statearr_44074_46358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44049 === (10))){
var state_44048__$1 = state_44048;
var statearr_44075_46359 = state_44048__$1;
(statearr_44075_46359[(2)] = fc);

(statearr_44075_46359[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44049 === (8))){
var inst_44036 = (state_44048[(2)]);
var state_44048__$1 = state_44048;
if(cljs.core.truth_(inst_44036)){
var statearr_44077_46360 = state_44048__$1;
(statearr_44077_46360[(1)] = (12));

} else {
var statearr_44078_46361 = state_44048__$1;
(statearr_44078_46361[(1)] = (13));

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
var cljs$core$async$state_machine__43291__auto__ = null;
var cljs$core$async$state_machine__43291__auto____0 = (function (){
var statearr_44081 = [null,null,null,null,null,null,null,null,null];
(statearr_44081[(0)] = cljs$core$async$state_machine__43291__auto__);

(statearr_44081[(1)] = (1));

return statearr_44081;
});
var cljs$core$async$state_machine__43291__auto____1 = (function (state_44048){
while(true){
var ret_value__43292__auto__ = (function (){try{while(true){
var result__43293__auto__ = switch__43290__auto__(state_44048);
if(cljs.core.keyword_identical_QMARK_(result__43293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43293__auto__;
}
break;
}
}catch (e44084){var ex__43294__auto__ = e44084;
var statearr_44085_46362 = state_44048;
(statearr_44085_46362[(2)] = ex__43294__auto__);


if(cljs.core.seq((state_44048[(4)]))){
var statearr_44088_46363 = state_44048;
(statearr_44088_46363[(1)] = cljs.core.first((state_44048[(4)])));

} else {
throw ex__43294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46364 = state_44048;
state_44048 = G__46364;
continue;
} else {
return ret_value__43292__auto__;
}
break;
}
});
cljs$core$async$state_machine__43291__auto__ = function(state_44048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43291__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43291__auto____1.call(this,state_44048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43291__auto____0;
cljs$core$async$state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43291__auto____1;
return cljs$core$async$state_machine__43291__auto__;
})()
})();
var state__43469__auto__ = (function (){var statearr_44091 = f__43468__auto__();
(statearr_44091[(6)] = c__43467__auto___46342);

return statearr_44091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43469__auto__);
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
var c__43467__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43468__auto__ = (function (){var switch__43290__auto__ = (function (state_44128){
var state_val_44129 = (state_44128[(1)]);
if((state_val_44129 === (7))){
var inst_44123 = (state_44128[(2)]);
var state_44128__$1 = state_44128;
var statearr_44130_46372 = state_44128__$1;
(statearr_44130_46372[(2)] = inst_44123);

(statearr_44130_46372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44129 === (1))){
var inst_44098 = init;
var inst_44099 = inst_44098;
var state_44128__$1 = (function (){var statearr_44131 = state_44128;
(statearr_44131[(7)] = inst_44099);

return statearr_44131;
})();
var statearr_44132_46373 = state_44128__$1;
(statearr_44132_46373[(2)] = null);

(statearr_44132_46373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44129 === (4))){
var inst_44105 = (state_44128[(8)]);
var inst_44105__$1 = (state_44128[(2)]);
var inst_44106 = (inst_44105__$1 == null);
var state_44128__$1 = (function (){var statearr_44133 = state_44128;
(statearr_44133[(8)] = inst_44105__$1);

return statearr_44133;
})();
if(cljs.core.truth_(inst_44106)){
var statearr_44134_46375 = state_44128__$1;
(statearr_44134_46375[(1)] = (5));

} else {
var statearr_44135_46376 = state_44128__$1;
(statearr_44135_46376[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44129 === (6))){
var inst_44112 = (state_44128[(9)]);
var inst_44105 = (state_44128[(8)]);
var inst_44099 = (state_44128[(7)]);
var inst_44112__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_44099,inst_44105) : f.call(null,inst_44099,inst_44105));
var inst_44113 = cljs.core.reduced_QMARK_(inst_44112__$1);
var state_44128__$1 = (function (){var statearr_44136 = state_44128;
(statearr_44136[(9)] = inst_44112__$1);

return statearr_44136;
})();
if(inst_44113){
var statearr_44137_46381 = state_44128__$1;
(statearr_44137_46381[(1)] = (8));

} else {
var statearr_44144_46382 = state_44128__$1;
(statearr_44144_46382[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44129 === (3))){
var inst_44125 = (state_44128[(2)]);
var state_44128__$1 = state_44128;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44128__$1,inst_44125);
} else {
if((state_val_44129 === (2))){
var state_44128__$1 = state_44128;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44128__$1,(4),ch);
} else {
if((state_val_44129 === (9))){
var inst_44112 = (state_44128[(9)]);
var inst_44099 = inst_44112;
var state_44128__$1 = (function (){var statearr_44145 = state_44128;
(statearr_44145[(7)] = inst_44099);

return statearr_44145;
})();
var statearr_44146_46386 = state_44128__$1;
(statearr_44146_46386[(2)] = null);

(statearr_44146_46386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44129 === (5))){
var inst_44099 = (state_44128[(7)]);
var state_44128__$1 = state_44128;
var statearr_44151_46388 = state_44128__$1;
(statearr_44151_46388[(2)] = inst_44099);

(statearr_44151_46388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44129 === (10))){
var inst_44121 = (state_44128[(2)]);
var state_44128__$1 = state_44128;
var statearr_44152_46389 = state_44128__$1;
(statearr_44152_46389[(2)] = inst_44121);

(statearr_44152_46389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44129 === (8))){
var inst_44112 = (state_44128[(9)]);
var inst_44117 = cljs.core.deref(inst_44112);
var state_44128__$1 = state_44128;
var statearr_44153_46390 = state_44128__$1;
(statearr_44153_46390[(2)] = inst_44117);

(statearr_44153_46390[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__43291__auto__ = null;
var cljs$core$async$reduce_$_state_machine__43291__auto____0 = (function (){
var statearr_44157 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44157[(0)] = cljs$core$async$reduce_$_state_machine__43291__auto__);

(statearr_44157[(1)] = (1));

return statearr_44157;
});
var cljs$core$async$reduce_$_state_machine__43291__auto____1 = (function (state_44128){
while(true){
var ret_value__43292__auto__ = (function (){try{while(true){
var result__43293__auto__ = switch__43290__auto__(state_44128);
if(cljs.core.keyword_identical_QMARK_(result__43293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43293__auto__;
}
break;
}
}catch (e44160){var ex__43294__auto__ = e44160;
var statearr_44161_46394 = state_44128;
(statearr_44161_46394[(2)] = ex__43294__auto__);


if(cljs.core.seq((state_44128[(4)]))){
var statearr_44162_46395 = state_44128;
(statearr_44162_46395[(1)] = cljs.core.first((state_44128[(4)])));

} else {
throw ex__43294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46397 = state_44128;
state_44128 = G__46397;
continue;
} else {
return ret_value__43292__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__43291__auto__ = function(state_44128){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__43291__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__43291__auto____1.call(this,state_44128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__43291__auto____0;
cljs$core$async$reduce_$_state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__43291__auto____1;
return cljs$core$async$reduce_$_state_machine__43291__auto__;
})()
})();
var state__43469__auto__ = (function (){var statearr_44169 = f__43468__auto__();
(statearr_44169[(6)] = c__43467__auto__);

return statearr_44169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43469__auto__);
}));

return c__43467__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__43467__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43468__auto__ = (function (){var switch__43290__auto__ = (function (state_44177){
var state_val_44178 = (state_44177[(1)]);
if((state_val_44178 === (1))){
var inst_44171 = cljs.core.async.reduce(f__$1,init,ch);
var state_44177__$1 = state_44177;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44177__$1,(2),inst_44171);
} else {
if((state_val_44178 === (2))){
var inst_44173 = (state_44177[(2)]);
var inst_44175 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_44173) : f__$1.call(null,inst_44173));
var state_44177__$1 = state_44177;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44177__$1,inst_44175);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__43291__auto__ = null;
var cljs$core$async$transduce_$_state_machine__43291__auto____0 = (function (){
var statearr_44187 = [null,null,null,null,null,null,null];
(statearr_44187[(0)] = cljs$core$async$transduce_$_state_machine__43291__auto__);

(statearr_44187[(1)] = (1));

return statearr_44187;
});
var cljs$core$async$transduce_$_state_machine__43291__auto____1 = (function (state_44177){
while(true){
var ret_value__43292__auto__ = (function (){try{while(true){
var result__43293__auto__ = switch__43290__auto__(state_44177);
if(cljs.core.keyword_identical_QMARK_(result__43293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43293__auto__;
}
break;
}
}catch (e44188){var ex__43294__auto__ = e44188;
var statearr_44189_46407 = state_44177;
(statearr_44189_46407[(2)] = ex__43294__auto__);


if(cljs.core.seq((state_44177[(4)]))){
var statearr_44190_46408 = state_44177;
(statearr_44190_46408[(1)] = cljs.core.first((state_44177[(4)])));

} else {
throw ex__43294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46409 = state_44177;
state_44177 = G__46409;
continue;
} else {
return ret_value__43292__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__43291__auto__ = function(state_44177){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__43291__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__43291__auto____1.call(this,state_44177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__43291__auto____0;
cljs$core$async$transduce_$_state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__43291__auto____1;
return cljs$core$async$transduce_$_state_machine__43291__auto__;
})()
})();
var state__43469__auto__ = (function (){var statearr_44192 = f__43468__auto__();
(statearr_44192[(6)] = c__43467__auto__);

return statearr_44192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43469__auto__);
}));

return c__43467__auto__;
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
var G__44194 = arguments.length;
switch (G__44194) {
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
var c__43467__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43468__auto__ = (function (){var switch__43290__auto__ = (function (state_44219){
var state_val_44220 = (state_44219[(1)]);
if((state_val_44220 === (7))){
var inst_44201 = (state_44219[(2)]);
var state_44219__$1 = state_44219;
var statearr_44224_46416 = state_44219__$1;
(statearr_44224_46416[(2)] = inst_44201);

(statearr_44224_46416[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44220 === (1))){
var inst_44195 = cljs.core.seq(coll);
var inst_44196 = inst_44195;
var state_44219__$1 = (function (){var statearr_44225 = state_44219;
(statearr_44225[(7)] = inst_44196);

return statearr_44225;
})();
var statearr_44226_46423 = state_44219__$1;
(statearr_44226_46423[(2)] = null);

(statearr_44226_46423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44220 === (4))){
var inst_44196 = (state_44219[(7)]);
var inst_44199 = cljs.core.first(inst_44196);
var state_44219__$1 = state_44219;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44219__$1,(7),ch,inst_44199);
} else {
if((state_val_44220 === (13))){
var inst_44213 = (state_44219[(2)]);
var state_44219__$1 = state_44219;
var statearr_44227_46425 = state_44219__$1;
(statearr_44227_46425[(2)] = inst_44213);

(statearr_44227_46425[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44220 === (6))){
var inst_44204 = (state_44219[(2)]);
var state_44219__$1 = state_44219;
if(cljs.core.truth_(inst_44204)){
var statearr_44234_46426 = state_44219__$1;
(statearr_44234_46426[(1)] = (8));

} else {
var statearr_44235_46427 = state_44219__$1;
(statearr_44235_46427[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44220 === (3))){
var inst_44217 = (state_44219[(2)]);
var state_44219__$1 = state_44219;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44219__$1,inst_44217);
} else {
if((state_val_44220 === (12))){
var state_44219__$1 = state_44219;
var statearr_44236_46428 = state_44219__$1;
(statearr_44236_46428[(2)] = null);

(statearr_44236_46428[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44220 === (2))){
var inst_44196 = (state_44219[(7)]);
var state_44219__$1 = state_44219;
if(cljs.core.truth_(inst_44196)){
var statearr_44238_46432 = state_44219__$1;
(statearr_44238_46432[(1)] = (4));

} else {
var statearr_44239_46433 = state_44219__$1;
(statearr_44239_46433[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44220 === (11))){
var inst_44210 = cljs.core.async.close_BANG_(ch);
var state_44219__$1 = state_44219;
var statearr_44240_46435 = state_44219__$1;
(statearr_44240_46435[(2)] = inst_44210);

(statearr_44240_46435[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44220 === (9))){
var state_44219__$1 = state_44219;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44241_46436 = state_44219__$1;
(statearr_44241_46436[(1)] = (11));

} else {
var statearr_44242_46437 = state_44219__$1;
(statearr_44242_46437[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44220 === (5))){
var inst_44196 = (state_44219[(7)]);
var state_44219__$1 = state_44219;
var statearr_44243_46438 = state_44219__$1;
(statearr_44243_46438[(2)] = inst_44196);

(statearr_44243_46438[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44220 === (10))){
var inst_44215 = (state_44219[(2)]);
var state_44219__$1 = state_44219;
var statearr_44244_46439 = state_44219__$1;
(statearr_44244_46439[(2)] = inst_44215);

(statearr_44244_46439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44220 === (8))){
var inst_44196 = (state_44219[(7)]);
var inst_44206 = cljs.core.next(inst_44196);
var inst_44196__$1 = inst_44206;
var state_44219__$1 = (function (){var statearr_44245 = state_44219;
(statearr_44245[(7)] = inst_44196__$1);

return statearr_44245;
})();
var statearr_44246_46441 = state_44219__$1;
(statearr_44246_46441[(2)] = null);

(statearr_44246_46441[(1)] = (2));


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
var cljs$core$async$state_machine__43291__auto__ = null;
var cljs$core$async$state_machine__43291__auto____0 = (function (){
var statearr_44253 = [null,null,null,null,null,null,null,null];
(statearr_44253[(0)] = cljs$core$async$state_machine__43291__auto__);

(statearr_44253[(1)] = (1));

return statearr_44253;
});
var cljs$core$async$state_machine__43291__auto____1 = (function (state_44219){
while(true){
var ret_value__43292__auto__ = (function (){try{while(true){
var result__43293__auto__ = switch__43290__auto__(state_44219);
if(cljs.core.keyword_identical_QMARK_(result__43293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43293__auto__;
}
break;
}
}catch (e44258){var ex__43294__auto__ = e44258;
var statearr_44259_46443 = state_44219;
(statearr_44259_46443[(2)] = ex__43294__auto__);


if(cljs.core.seq((state_44219[(4)]))){
var statearr_44260_46444 = state_44219;
(statearr_44260_46444[(1)] = cljs.core.first((state_44219[(4)])));

} else {
throw ex__43294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46445 = state_44219;
state_44219 = G__46445;
continue;
} else {
return ret_value__43292__auto__;
}
break;
}
});
cljs$core$async$state_machine__43291__auto__ = function(state_44219){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43291__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43291__auto____1.call(this,state_44219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43291__auto____0;
cljs$core$async$state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43291__auto____1;
return cljs$core$async$state_machine__43291__auto__;
})()
})();
var state__43469__auto__ = (function (){var statearr_44262 = f__43468__auto__();
(statearr_44262[(6)] = c__43467__auto__);

return statearr_44262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43469__auto__);
}));

return c__43467__auto__;
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
var G__44270 = arguments.length;
switch (G__44270) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_46448 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_46448(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_46450 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_46450(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_46451 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_46451(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_46452 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_46452(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44291 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44291 = (function (ch,cs,meta44292){
this.ch = ch;
this.cs = cs;
this.meta44292 = meta44292;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44293,meta44292__$1){
var self__ = this;
var _44293__$1 = this;
return (new cljs.core.async.t_cljs$core$async44291(self__.ch,self__.cs,meta44292__$1));
}));

(cljs.core.async.t_cljs$core$async44291.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44293){
var self__ = this;
var _44293__$1 = this;
return self__.meta44292;
}));

(cljs.core.async.t_cljs$core$async44291.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44291.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44291.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44291.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async44291.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async44291.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async44291.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta44292","meta44292",1153992887,null)], null);
}));

(cljs.core.async.t_cljs$core$async44291.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44291.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44291");

(cljs.core.async.t_cljs$core$async44291.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async44291");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44291.
 */
cljs.core.async.__GT_t_cljs$core$async44291 = (function cljs$core$async$mult_$___GT_t_cljs$core$async44291(ch__$1,cs__$1,meta44292){
return (new cljs.core.async.t_cljs$core$async44291(ch__$1,cs__$1,meta44292));
});

}

return (new cljs.core.async.t_cljs$core$async44291(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__43467__auto___46456 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43468__auto__ = (function (){var switch__43290__auto__ = (function (state_44464){
var state_val_44465 = (state_44464[(1)]);
if((state_val_44465 === (7))){
var inst_44458 = (state_44464[(2)]);
var state_44464__$1 = state_44464;
var statearr_44466_46458 = state_44464__$1;
(statearr_44466_46458[(2)] = inst_44458);

(statearr_44466_46458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (20))){
var inst_44345 = (state_44464[(7)]);
var inst_44362 = cljs.core.first(inst_44345);
var inst_44363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44362,(0),null);
var inst_44364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44362,(1),null);
var state_44464__$1 = (function (){var statearr_44473 = state_44464;
(statearr_44473[(8)] = inst_44363);

return statearr_44473;
})();
if(cljs.core.truth_(inst_44364)){
var statearr_44474_46460 = state_44464__$1;
(statearr_44474_46460[(1)] = (22));

} else {
var statearr_44475_46461 = state_44464__$1;
(statearr_44475_46461[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (27))){
var inst_44303 = (state_44464[(9)]);
var inst_44400 = (state_44464[(10)]);
var inst_44398 = (state_44464[(11)]);
var inst_44405 = (state_44464[(12)]);
var inst_44405__$1 = cljs.core._nth(inst_44398,inst_44400);
var inst_44406 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44405__$1,inst_44303,done);
var state_44464__$1 = (function (){var statearr_44477 = state_44464;
(statearr_44477[(12)] = inst_44405__$1);

return statearr_44477;
})();
if(cljs.core.truth_(inst_44406)){
var statearr_44478_46462 = state_44464__$1;
(statearr_44478_46462[(1)] = (30));

} else {
var statearr_44480_46463 = state_44464__$1;
(statearr_44480_46463[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (1))){
var state_44464__$1 = state_44464;
var statearr_44482_46464 = state_44464__$1;
(statearr_44482_46464[(2)] = null);

(statearr_44482_46464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (24))){
var inst_44345 = (state_44464[(7)]);
var inst_44369 = (state_44464[(2)]);
var inst_44370 = cljs.core.next(inst_44345);
var inst_44312 = inst_44370;
var inst_44313 = null;
var inst_44314 = (0);
var inst_44315 = (0);
var state_44464__$1 = (function (){var statearr_44483 = state_44464;
(statearr_44483[(13)] = inst_44312);

(statearr_44483[(14)] = inst_44315);

(statearr_44483[(15)] = inst_44313);

(statearr_44483[(16)] = inst_44369);

(statearr_44483[(17)] = inst_44314);

return statearr_44483;
})();
var statearr_44491_46465 = state_44464__$1;
(statearr_44491_46465[(2)] = null);

(statearr_44491_46465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (39))){
var state_44464__$1 = state_44464;
var statearr_44495_46467 = state_44464__$1;
(statearr_44495_46467[(2)] = null);

(statearr_44495_46467[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (4))){
var inst_44303 = (state_44464[(9)]);
var inst_44303__$1 = (state_44464[(2)]);
var inst_44304 = (inst_44303__$1 == null);
var state_44464__$1 = (function (){var statearr_44497 = state_44464;
(statearr_44497[(9)] = inst_44303__$1);

return statearr_44497;
})();
if(cljs.core.truth_(inst_44304)){
var statearr_44498_46469 = state_44464__$1;
(statearr_44498_46469[(1)] = (5));

} else {
var statearr_44504_46470 = state_44464__$1;
(statearr_44504_46470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (15))){
var inst_44312 = (state_44464[(13)]);
var inst_44315 = (state_44464[(14)]);
var inst_44313 = (state_44464[(15)]);
var inst_44314 = (state_44464[(17)]);
var inst_44340 = (state_44464[(2)]);
var inst_44341 = (inst_44315 + (1));
var tmp44492 = inst_44312;
var tmp44493 = inst_44313;
var tmp44494 = inst_44314;
var inst_44312__$1 = tmp44492;
var inst_44313__$1 = tmp44493;
var inst_44314__$1 = tmp44494;
var inst_44315__$1 = inst_44341;
var state_44464__$1 = (function (){var statearr_44512 = state_44464;
(statearr_44512[(13)] = inst_44312__$1);

(statearr_44512[(14)] = inst_44315__$1);

(statearr_44512[(15)] = inst_44313__$1);

(statearr_44512[(18)] = inst_44340);

(statearr_44512[(17)] = inst_44314__$1);

return statearr_44512;
})();
var statearr_44513_46474 = state_44464__$1;
(statearr_44513_46474[(2)] = null);

(statearr_44513_46474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (21))){
var inst_44373 = (state_44464[(2)]);
var state_44464__$1 = state_44464;
var statearr_44517_46476 = state_44464__$1;
(statearr_44517_46476[(2)] = inst_44373);

(statearr_44517_46476[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (31))){
var inst_44405 = (state_44464[(12)]);
var inst_44415 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44405);
var state_44464__$1 = state_44464;
var statearr_44522_46477 = state_44464__$1;
(statearr_44522_46477[(2)] = inst_44415);

(statearr_44522_46477[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (32))){
var inst_44400 = (state_44464[(10)]);
var inst_44397 = (state_44464[(19)]);
var inst_44399 = (state_44464[(20)]);
var inst_44398 = (state_44464[(11)]);
var inst_44417 = (state_44464[(2)]);
var inst_44418 = (inst_44400 + (1));
var tmp44514 = inst_44397;
var tmp44515 = inst_44399;
var tmp44516 = inst_44398;
var inst_44397__$1 = tmp44514;
var inst_44398__$1 = tmp44516;
var inst_44399__$1 = tmp44515;
var inst_44400__$1 = inst_44418;
var state_44464__$1 = (function (){var statearr_44527 = state_44464;
(statearr_44527[(21)] = inst_44417);

(statearr_44527[(10)] = inst_44400__$1);

(statearr_44527[(19)] = inst_44397__$1);

(statearr_44527[(20)] = inst_44399__$1);

(statearr_44527[(11)] = inst_44398__$1);

return statearr_44527;
})();
var statearr_44528_46480 = state_44464__$1;
(statearr_44528_46480[(2)] = null);

(statearr_44528_46480[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (40))){
var inst_44431 = (state_44464[(22)]);
var inst_44435 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44431);
var state_44464__$1 = state_44464;
var statearr_44532_46482 = state_44464__$1;
(statearr_44532_46482[(2)] = inst_44435);

(statearr_44532_46482[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (33))){
var inst_44421 = (state_44464[(23)]);
var inst_44423 = cljs.core.chunked_seq_QMARK_(inst_44421);
var state_44464__$1 = state_44464;
if(inst_44423){
var statearr_44533_46483 = state_44464__$1;
(statearr_44533_46483[(1)] = (36));

} else {
var statearr_44534_46484 = state_44464__$1;
(statearr_44534_46484[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (13))){
var inst_44334 = (state_44464[(24)]);
var inst_44337 = cljs.core.async.close_BANG_(inst_44334);
var state_44464__$1 = state_44464;
var statearr_44535_46485 = state_44464__$1;
(statearr_44535_46485[(2)] = inst_44337);

(statearr_44535_46485[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (22))){
var inst_44363 = (state_44464[(8)]);
var inst_44366 = cljs.core.async.close_BANG_(inst_44363);
var state_44464__$1 = state_44464;
var statearr_44538_46487 = state_44464__$1;
(statearr_44538_46487[(2)] = inst_44366);

(statearr_44538_46487[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (36))){
var inst_44421 = (state_44464[(23)]);
var inst_44425 = cljs.core.chunk_first(inst_44421);
var inst_44427 = cljs.core.chunk_rest(inst_44421);
var inst_44428 = cljs.core.count(inst_44425);
var inst_44397 = inst_44427;
var inst_44398 = inst_44425;
var inst_44399 = inst_44428;
var inst_44400 = (0);
var state_44464__$1 = (function (){var statearr_44539 = state_44464;
(statearr_44539[(10)] = inst_44400);

(statearr_44539[(19)] = inst_44397);

(statearr_44539[(20)] = inst_44399);

(statearr_44539[(11)] = inst_44398);

return statearr_44539;
})();
var statearr_44547_46488 = state_44464__$1;
(statearr_44547_46488[(2)] = null);

(statearr_44547_46488[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (41))){
var inst_44421 = (state_44464[(23)]);
var inst_44437 = (state_44464[(2)]);
var inst_44438 = cljs.core.next(inst_44421);
var inst_44397 = inst_44438;
var inst_44398 = null;
var inst_44399 = (0);
var inst_44400 = (0);
var state_44464__$1 = (function (){var statearr_44561 = state_44464;
(statearr_44561[(25)] = inst_44437);

(statearr_44561[(10)] = inst_44400);

(statearr_44561[(19)] = inst_44397);

(statearr_44561[(20)] = inst_44399);

(statearr_44561[(11)] = inst_44398);

return statearr_44561;
})();
var statearr_44562_46490 = state_44464__$1;
(statearr_44562_46490[(2)] = null);

(statearr_44562_46490[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (43))){
var state_44464__$1 = state_44464;
var statearr_44563_46491 = state_44464__$1;
(statearr_44563_46491[(2)] = null);

(statearr_44563_46491[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (29))){
var inst_44446 = (state_44464[(2)]);
var state_44464__$1 = state_44464;
var statearr_44567_46492 = state_44464__$1;
(statearr_44567_46492[(2)] = inst_44446);

(statearr_44567_46492[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (44))){
var inst_44455 = (state_44464[(2)]);
var state_44464__$1 = (function (){var statearr_44568 = state_44464;
(statearr_44568[(26)] = inst_44455);

return statearr_44568;
})();
var statearr_44569_46493 = state_44464__$1;
(statearr_44569_46493[(2)] = null);

(statearr_44569_46493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (6))){
var inst_44385 = (state_44464[(27)]);
var inst_44384 = cljs.core.deref(cs);
var inst_44385__$1 = cljs.core.keys(inst_44384);
var inst_44390 = cljs.core.count(inst_44385__$1);
var inst_44391 = cljs.core.reset_BANG_(dctr,inst_44390);
var inst_44396 = cljs.core.seq(inst_44385__$1);
var inst_44397 = inst_44396;
var inst_44398 = null;
var inst_44399 = (0);
var inst_44400 = (0);
var state_44464__$1 = (function (){var statearr_44570 = state_44464;
(statearr_44570[(10)] = inst_44400);

(statearr_44570[(19)] = inst_44397);

(statearr_44570[(20)] = inst_44399);

(statearr_44570[(11)] = inst_44398);

(statearr_44570[(27)] = inst_44385__$1);

(statearr_44570[(28)] = inst_44391);

return statearr_44570;
})();
var statearr_44571_46494 = state_44464__$1;
(statearr_44571_46494[(2)] = null);

(statearr_44571_46494[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (28))){
var inst_44421 = (state_44464[(23)]);
var inst_44397 = (state_44464[(19)]);
var inst_44421__$1 = cljs.core.seq(inst_44397);
var state_44464__$1 = (function (){var statearr_44572 = state_44464;
(statearr_44572[(23)] = inst_44421__$1);

return statearr_44572;
})();
if(inst_44421__$1){
var statearr_44574_46495 = state_44464__$1;
(statearr_44574_46495[(1)] = (33));

} else {
var statearr_44575_46496 = state_44464__$1;
(statearr_44575_46496[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (25))){
var inst_44400 = (state_44464[(10)]);
var inst_44399 = (state_44464[(20)]);
var inst_44402 = (inst_44400 < inst_44399);
var inst_44403 = inst_44402;
var state_44464__$1 = state_44464;
if(cljs.core.truth_(inst_44403)){
var statearr_44582_46498 = state_44464__$1;
(statearr_44582_46498[(1)] = (27));

} else {
var statearr_44583_46499 = state_44464__$1;
(statearr_44583_46499[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (34))){
var state_44464__$1 = state_44464;
var statearr_44584_46503 = state_44464__$1;
(statearr_44584_46503[(2)] = null);

(statearr_44584_46503[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (17))){
var state_44464__$1 = state_44464;
var statearr_44585_46504 = state_44464__$1;
(statearr_44585_46504[(2)] = null);

(statearr_44585_46504[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (3))){
var inst_44460 = (state_44464[(2)]);
var state_44464__$1 = state_44464;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44464__$1,inst_44460);
} else {
if((state_val_44465 === (12))){
var inst_44378 = (state_44464[(2)]);
var state_44464__$1 = state_44464;
var statearr_44586_46505 = state_44464__$1;
(statearr_44586_46505[(2)] = inst_44378);

(statearr_44586_46505[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (2))){
var state_44464__$1 = state_44464;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44464__$1,(4),ch);
} else {
if((state_val_44465 === (23))){
var state_44464__$1 = state_44464;
var statearr_44588_46506 = state_44464__$1;
(statearr_44588_46506[(2)] = null);

(statearr_44588_46506[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (35))){
var inst_44444 = (state_44464[(2)]);
var state_44464__$1 = state_44464;
var statearr_44589_46507 = state_44464__$1;
(statearr_44589_46507[(2)] = inst_44444);

(statearr_44589_46507[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (19))){
var inst_44345 = (state_44464[(7)]);
var inst_44354 = cljs.core.chunk_first(inst_44345);
var inst_44355 = cljs.core.chunk_rest(inst_44345);
var inst_44356 = cljs.core.count(inst_44354);
var inst_44312 = inst_44355;
var inst_44313 = inst_44354;
var inst_44314 = inst_44356;
var inst_44315 = (0);
var state_44464__$1 = (function (){var statearr_44590 = state_44464;
(statearr_44590[(13)] = inst_44312);

(statearr_44590[(14)] = inst_44315);

(statearr_44590[(15)] = inst_44313);

(statearr_44590[(17)] = inst_44314);

return statearr_44590;
})();
var statearr_44592_46511 = state_44464__$1;
(statearr_44592_46511[(2)] = null);

(statearr_44592_46511[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (11))){
var inst_44345 = (state_44464[(7)]);
var inst_44312 = (state_44464[(13)]);
var inst_44345__$1 = cljs.core.seq(inst_44312);
var state_44464__$1 = (function (){var statearr_44593 = state_44464;
(statearr_44593[(7)] = inst_44345__$1);

return statearr_44593;
})();
if(inst_44345__$1){
var statearr_44594_46515 = state_44464__$1;
(statearr_44594_46515[(1)] = (16));

} else {
var statearr_44595_46516 = state_44464__$1;
(statearr_44595_46516[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (9))){
var inst_44380 = (state_44464[(2)]);
var state_44464__$1 = state_44464;
var statearr_44602_46520 = state_44464__$1;
(statearr_44602_46520[(2)] = inst_44380);

(statearr_44602_46520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (5))){
var inst_44310 = cljs.core.deref(cs);
var inst_44311 = cljs.core.seq(inst_44310);
var inst_44312 = inst_44311;
var inst_44313 = null;
var inst_44314 = (0);
var inst_44315 = (0);
var state_44464__$1 = (function (){var statearr_44603 = state_44464;
(statearr_44603[(13)] = inst_44312);

(statearr_44603[(14)] = inst_44315);

(statearr_44603[(15)] = inst_44313);

(statearr_44603[(17)] = inst_44314);

return statearr_44603;
})();
var statearr_44606_46524 = state_44464__$1;
(statearr_44606_46524[(2)] = null);

(statearr_44606_46524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (14))){
var state_44464__$1 = state_44464;
var statearr_44608_46525 = state_44464__$1;
(statearr_44608_46525[(2)] = null);

(statearr_44608_46525[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (45))){
var inst_44452 = (state_44464[(2)]);
var state_44464__$1 = state_44464;
var statearr_44609_46526 = state_44464__$1;
(statearr_44609_46526[(2)] = inst_44452);

(statearr_44609_46526[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (26))){
var inst_44385 = (state_44464[(27)]);
var inst_44448 = (state_44464[(2)]);
var inst_44449 = cljs.core.seq(inst_44385);
var state_44464__$1 = (function (){var statearr_44610 = state_44464;
(statearr_44610[(29)] = inst_44448);

return statearr_44610;
})();
if(inst_44449){
var statearr_44611_46531 = state_44464__$1;
(statearr_44611_46531[(1)] = (42));

} else {
var statearr_44613_46532 = state_44464__$1;
(statearr_44613_46532[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (16))){
var inst_44345 = (state_44464[(7)]);
var inst_44347 = cljs.core.chunked_seq_QMARK_(inst_44345);
var state_44464__$1 = state_44464;
if(inst_44347){
var statearr_44614_46536 = state_44464__$1;
(statearr_44614_46536[(1)] = (19));

} else {
var statearr_44622_46537 = state_44464__$1;
(statearr_44622_46537[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (38))){
var inst_44441 = (state_44464[(2)]);
var state_44464__$1 = state_44464;
var statearr_44623_46538 = state_44464__$1;
(statearr_44623_46538[(2)] = inst_44441);

(statearr_44623_46538[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (30))){
var state_44464__$1 = state_44464;
var statearr_44624_46539 = state_44464__$1;
(statearr_44624_46539[(2)] = null);

(statearr_44624_46539[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (10))){
var inst_44315 = (state_44464[(14)]);
var inst_44313 = (state_44464[(15)]);
var inst_44333 = cljs.core._nth(inst_44313,inst_44315);
var inst_44334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44333,(0),null);
var inst_44335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44333,(1),null);
var state_44464__$1 = (function (){var statearr_44626 = state_44464;
(statearr_44626[(24)] = inst_44334);

return statearr_44626;
})();
if(cljs.core.truth_(inst_44335)){
var statearr_44627_46540 = state_44464__$1;
(statearr_44627_46540[(1)] = (13));

} else {
var statearr_44629_46541 = state_44464__$1;
(statearr_44629_46541[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (18))){
var inst_44376 = (state_44464[(2)]);
var state_44464__$1 = state_44464;
var statearr_44633_46542 = state_44464__$1;
(statearr_44633_46542[(2)] = inst_44376);

(statearr_44633_46542[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (42))){
var state_44464__$1 = state_44464;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44464__$1,(45),dchan);
} else {
if((state_val_44465 === (37))){
var inst_44303 = (state_44464[(9)]);
var inst_44421 = (state_44464[(23)]);
var inst_44431 = (state_44464[(22)]);
var inst_44431__$1 = cljs.core.first(inst_44421);
var inst_44432 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44431__$1,inst_44303,done);
var state_44464__$1 = (function (){var statearr_44635 = state_44464;
(statearr_44635[(22)] = inst_44431__$1);

return statearr_44635;
})();
if(cljs.core.truth_(inst_44432)){
var statearr_44636_46544 = state_44464__$1;
(statearr_44636_46544[(1)] = (39));

} else {
var statearr_44639_46545 = state_44464__$1;
(statearr_44639_46545[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (8))){
var inst_44315 = (state_44464[(14)]);
var inst_44314 = (state_44464[(17)]);
var inst_44317 = (inst_44315 < inst_44314);
var inst_44318 = inst_44317;
var state_44464__$1 = state_44464;
if(cljs.core.truth_(inst_44318)){
var statearr_44641_46546 = state_44464__$1;
(statearr_44641_46546[(1)] = (10));

} else {
var statearr_44642_46547 = state_44464__$1;
(statearr_44642_46547[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__43291__auto__ = null;
var cljs$core$async$mult_$_state_machine__43291__auto____0 = (function (){
var statearr_44650 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44650[(0)] = cljs$core$async$mult_$_state_machine__43291__auto__);

(statearr_44650[(1)] = (1));

return statearr_44650;
});
var cljs$core$async$mult_$_state_machine__43291__auto____1 = (function (state_44464){
while(true){
var ret_value__43292__auto__ = (function (){try{while(true){
var result__43293__auto__ = switch__43290__auto__(state_44464);
if(cljs.core.keyword_identical_QMARK_(result__43293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43293__auto__;
}
break;
}
}catch (e44662){var ex__43294__auto__ = e44662;
var statearr_44665_46548 = state_44464;
(statearr_44665_46548[(2)] = ex__43294__auto__);


if(cljs.core.seq((state_44464[(4)]))){
var statearr_44675_46551 = state_44464;
(statearr_44675_46551[(1)] = cljs.core.first((state_44464[(4)])));

} else {
throw ex__43294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46556 = state_44464;
state_44464 = G__46556;
continue;
} else {
return ret_value__43292__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__43291__auto__ = function(state_44464){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__43291__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__43291__auto____1.call(this,state_44464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__43291__auto____0;
cljs$core$async$mult_$_state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__43291__auto____1;
return cljs$core$async$mult_$_state_machine__43291__auto__;
})()
})();
var state__43469__auto__ = (function (){var statearr_44681 = f__43468__auto__();
(statearr_44681[(6)] = c__43467__auto___46456);

return statearr_44681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43469__auto__);
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
var G__44685 = arguments.length;
switch (G__44685) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_46559 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_46559(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_46564 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_46564(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_46565 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_46565(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_46566 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_46566(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_46570 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_46570(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___46571 = arguments.length;
var i__5770__auto___46572 = (0);
while(true){
if((i__5770__auto___46572 < len__5769__auto___46571)){
args__5775__auto__.push((arguments[i__5770__auto___46572]));

var G__46573 = (i__5770__auto___46572 + (1));
i__5770__auto___46572 = G__46573;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__44792){
var map__44793 = p__44792;
var map__44793__$1 = cljs.core.__destructure_map(map__44793);
var opts = map__44793__$1;
var statearr_44794_46575 = state;
(statearr_44794_46575[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_44801_46576 = state;
(statearr_44801_46576[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_44802_46577 = state;
(statearr_44802_46577[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq44788){
var G__44789 = cljs.core.first(seq44788);
var seq44788__$1 = cljs.core.next(seq44788);
var G__44790 = cljs.core.first(seq44788__$1);
var seq44788__$2 = cljs.core.next(seq44788__$1);
var G__44791 = cljs.core.first(seq44788__$2);
var seq44788__$3 = cljs.core.next(seq44788__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44789,G__44790,G__44791,seq44788__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44816 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44816 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta44817){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta44817 = meta44817;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44818,meta44817__$1){
var self__ = this;
var _44818__$1 = this;
return (new cljs.core.async.t_cljs$core$async44816(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta44817__$1));
}));

(cljs.core.async.t_cljs$core$async44816.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44818){
var self__ = this;
var _44818__$1 = this;
return self__.meta44817;
}));

(cljs.core.async.t_cljs$core$async44816.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44816.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async44816.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44816.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44816.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44816.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44816.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44816.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44816.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta44817","meta44817",1701203254,null)], null);
}));

(cljs.core.async.t_cljs$core$async44816.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44816.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44816");

(cljs.core.async.t_cljs$core$async44816.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async44816");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44816.
 */
cljs.core.async.__GT_t_cljs$core$async44816 = (function cljs$core$async$mix_$___GT_t_cljs$core$async44816(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44817){
return (new cljs.core.async.t_cljs$core$async44816(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44817));
});

}

return (new cljs.core.async.t_cljs$core$async44816(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43467__auto___46600 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43468__auto__ = (function (){var switch__43290__auto__ = (function (state_44903){
var state_val_44904 = (state_44903[(1)]);
if((state_val_44904 === (7))){
var inst_44861 = (state_44903[(2)]);
var state_44903__$1 = state_44903;
if(cljs.core.truth_(inst_44861)){
var statearr_44906_46601 = state_44903__$1;
(statearr_44906_46601[(1)] = (8));

} else {
var statearr_44907_46602 = state_44903__$1;
(statearr_44907_46602[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44904 === (20))){
var inst_44850 = (state_44903[(7)]);
var state_44903__$1 = state_44903;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44903__$1,(23),out,inst_44850);
} else {
if((state_val_44904 === (1))){
var inst_44831 = calc_state();
var inst_44832 = cljs.core.__destructure_map(inst_44831);
var inst_44834 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44832,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44835 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44832,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44832,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_44837 = inst_44831;
var state_44903__$1 = (function (){var statearr_44908 = state_44903;
(statearr_44908[(8)] = inst_44835);

(statearr_44908[(9)] = inst_44836);

(statearr_44908[(10)] = inst_44837);

(statearr_44908[(11)] = inst_44834);

return statearr_44908;
})();
var statearr_44912_46604 = state_44903__$1;
(statearr_44912_46604[(2)] = null);

(statearr_44912_46604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44904 === (24))){
var inst_44841 = (state_44903[(12)]);
var inst_44837 = inst_44841;
var state_44903__$1 = (function (){var statearr_44913 = state_44903;
(statearr_44913[(10)] = inst_44837);

return statearr_44913;
})();
var statearr_44914_46606 = state_44903__$1;
(statearr_44914_46606[(2)] = null);

(statearr_44914_46606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44904 === (4))){
var inst_44855 = (state_44903[(13)]);
var inst_44850 = (state_44903[(7)]);
var inst_44849 = (state_44903[(2)]);
var inst_44850__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44849,(0),null);
var inst_44853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44849,(1),null);
var inst_44855__$1 = (inst_44850__$1 == null);
var state_44903__$1 = (function (){var statearr_44922 = state_44903;
(statearr_44922[(13)] = inst_44855__$1);

(statearr_44922[(7)] = inst_44850__$1);

(statearr_44922[(14)] = inst_44853);

return statearr_44922;
})();
if(cljs.core.truth_(inst_44855__$1)){
var statearr_44930_46607 = state_44903__$1;
(statearr_44930_46607[(1)] = (5));

} else {
var statearr_44931_46609 = state_44903__$1;
(statearr_44931_46609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44904 === (15))){
var inst_44875 = (state_44903[(15)]);
var inst_44842 = (state_44903[(16)]);
var inst_44875__$1 = cljs.core.empty_QMARK_(inst_44842);
var state_44903__$1 = (function (){var statearr_44946 = state_44903;
(statearr_44946[(15)] = inst_44875__$1);

return statearr_44946;
})();
if(inst_44875__$1){
var statearr_44954_46610 = state_44903__$1;
(statearr_44954_46610[(1)] = (17));

} else {
var statearr_44956_46611 = state_44903__$1;
(statearr_44956_46611[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44904 === (21))){
var inst_44841 = (state_44903[(12)]);
var inst_44837 = inst_44841;
var state_44903__$1 = (function (){var statearr_44957 = state_44903;
(statearr_44957[(10)] = inst_44837);

return statearr_44957;
})();
var statearr_44958_46612 = state_44903__$1;
(statearr_44958_46612[(2)] = null);

(statearr_44958_46612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44904 === (13))){
var inst_44868 = (state_44903[(2)]);
var inst_44869 = calc_state();
var inst_44837 = inst_44869;
var state_44903__$1 = (function (){var statearr_44969 = state_44903;
(statearr_44969[(17)] = inst_44868);

(statearr_44969[(10)] = inst_44837);

return statearr_44969;
})();
var statearr_44970_46613 = state_44903__$1;
(statearr_44970_46613[(2)] = null);

(statearr_44970_46613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44904 === (22))){
var inst_44897 = (state_44903[(2)]);
var state_44903__$1 = state_44903;
var statearr_44976_46614 = state_44903__$1;
(statearr_44976_46614[(2)] = inst_44897);

(statearr_44976_46614[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44904 === (6))){
var inst_44853 = (state_44903[(14)]);
var inst_44859 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44853,change);
var state_44903__$1 = state_44903;
var statearr_44980_46615 = state_44903__$1;
(statearr_44980_46615[(2)] = inst_44859);

(statearr_44980_46615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44904 === (25))){
var state_44903__$1 = state_44903;
var statearr_44981_46616 = state_44903__$1;
(statearr_44981_46616[(2)] = null);

(statearr_44981_46616[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44904 === (17))){
var inst_44843 = (state_44903[(18)]);
var inst_44853 = (state_44903[(14)]);
var inst_44879 = (inst_44843.cljs$core$IFn$_invoke$arity$1 ? inst_44843.cljs$core$IFn$_invoke$arity$1(inst_44853) : inst_44843.call(null,inst_44853));
var inst_44880 = cljs.core.not(inst_44879);
var state_44903__$1 = state_44903;
var statearr_44986_46617 = state_44903__$1;
(statearr_44986_46617[(2)] = inst_44880);

(statearr_44986_46617[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44904 === (3))){
var inst_44901 = (state_44903[(2)]);
var state_44903__$1 = state_44903;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44903__$1,inst_44901);
} else {
if((state_val_44904 === (12))){
var state_44903__$1 = state_44903;
var statearr_44988_46618 = state_44903__$1;
(statearr_44988_46618[(2)] = null);

(statearr_44988_46618[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44904 === (2))){
var inst_44841 = (state_44903[(12)]);
var inst_44837 = (state_44903[(10)]);
var inst_44841__$1 = cljs.core.__destructure_map(inst_44837);
var inst_44842 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44841__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44843 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44841__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44841__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_44903__$1 = (function (){var statearr_44989 = state_44903;
(statearr_44989[(12)] = inst_44841__$1);

(statearr_44989[(16)] = inst_44842);

(statearr_44989[(18)] = inst_44843);

return statearr_44989;
})();
return cljs.core.async.ioc_alts_BANG_(state_44903__$1,(4),inst_44844);
} else {
if((state_val_44904 === (23))){
var inst_44888 = (state_44903[(2)]);
var state_44903__$1 = state_44903;
if(cljs.core.truth_(inst_44888)){
var statearr_44990_46619 = state_44903__$1;
(statearr_44990_46619[(1)] = (24));

} else {
var statearr_44991_46620 = state_44903__$1;
(statearr_44991_46620[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44904 === (19))){
var inst_44883 = (state_44903[(2)]);
var state_44903__$1 = state_44903;
var statearr_44992_46621 = state_44903__$1;
(statearr_44992_46621[(2)] = inst_44883);

(statearr_44992_46621[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44904 === (11))){
var inst_44853 = (state_44903[(14)]);
var inst_44865 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_44853);
var state_44903__$1 = state_44903;
var statearr_44994_46622 = state_44903__$1;
(statearr_44994_46622[(2)] = inst_44865);

(statearr_44994_46622[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44904 === (9))){
var inst_44872 = (state_44903[(19)]);
var inst_44842 = (state_44903[(16)]);
var inst_44853 = (state_44903[(14)]);
var inst_44872__$1 = (inst_44842.cljs$core$IFn$_invoke$arity$1 ? inst_44842.cljs$core$IFn$_invoke$arity$1(inst_44853) : inst_44842.call(null,inst_44853));
var state_44903__$1 = (function (){var statearr_44996 = state_44903;
(statearr_44996[(19)] = inst_44872__$1);

return statearr_44996;
})();
if(cljs.core.truth_(inst_44872__$1)){
var statearr_44998_46631 = state_44903__$1;
(statearr_44998_46631[(1)] = (14));

} else {
var statearr_45002_46633 = state_44903__$1;
(statearr_45002_46633[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44904 === (5))){
var inst_44855 = (state_44903[(13)]);
var state_44903__$1 = state_44903;
var statearr_45004_46634 = state_44903__$1;
(statearr_45004_46634[(2)] = inst_44855);

(statearr_45004_46634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44904 === (14))){
var inst_44872 = (state_44903[(19)]);
var state_44903__$1 = state_44903;
var statearr_45005_46635 = state_44903__$1;
(statearr_45005_46635[(2)] = inst_44872);

(statearr_45005_46635[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44904 === (26))){
var inst_44893 = (state_44903[(2)]);
var state_44903__$1 = state_44903;
var statearr_45010_46636 = state_44903__$1;
(statearr_45010_46636[(2)] = inst_44893);

(statearr_45010_46636[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44904 === (16))){
var inst_44885 = (state_44903[(2)]);
var state_44903__$1 = state_44903;
if(cljs.core.truth_(inst_44885)){
var statearr_45011_46638 = state_44903__$1;
(statearr_45011_46638[(1)] = (20));

} else {
var statearr_45012_46640 = state_44903__$1;
(statearr_45012_46640[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44904 === (10))){
var inst_44899 = (state_44903[(2)]);
var state_44903__$1 = state_44903;
var statearr_45014_46641 = state_44903__$1;
(statearr_45014_46641[(2)] = inst_44899);

(statearr_45014_46641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44904 === (18))){
var inst_44875 = (state_44903[(15)]);
var state_44903__$1 = state_44903;
var statearr_45015_46642 = state_44903__$1;
(statearr_45015_46642[(2)] = inst_44875);

(statearr_45015_46642[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44904 === (8))){
var inst_44850 = (state_44903[(7)]);
var inst_44863 = (inst_44850 == null);
var state_44903__$1 = state_44903;
if(cljs.core.truth_(inst_44863)){
var statearr_45016_46643 = state_44903__$1;
(statearr_45016_46643[(1)] = (11));

} else {
var statearr_45017_46644 = state_44903__$1;
(statearr_45017_46644[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__43291__auto__ = null;
var cljs$core$async$mix_$_state_machine__43291__auto____0 = (function (){
var statearr_45019 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45019[(0)] = cljs$core$async$mix_$_state_machine__43291__auto__);

(statearr_45019[(1)] = (1));

return statearr_45019;
});
var cljs$core$async$mix_$_state_machine__43291__auto____1 = (function (state_44903){
while(true){
var ret_value__43292__auto__ = (function (){try{while(true){
var result__43293__auto__ = switch__43290__auto__(state_44903);
if(cljs.core.keyword_identical_QMARK_(result__43293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43293__auto__;
}
break;
}
}catch (e45021){var ex__43294__auto__ = e45021;
var statearr_45022_46647 = state_44903;
(statearr_45022_46647[(2)] = ex__43294__auto__);


if(cljs.core.seq((state_44903[(4)]))){
var statearr_45023_46648 = state_44903;
(statearr_45023_46648[(1)] = cljs.core.first((state_44903[(4)])));

} else {
throw ex__43294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46651 = state_44903;
state_44903 = G__46651;
continue;
} else {
return ret_value__43292__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__43291__auto__ = function(state_44903){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__43291__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__43291__auto____1.call(this,state_44903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__43291__auto____0;
cljs$core$async$mix_$_state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__43291__auto____1;
return cljs$core$async$mix_$_state_machine__43291__auto__;
})()
})();
var state__43469__auto__ = (function (){var statearr_45024 = f__43468__auto__();
(statearr_45024[(6)] = c__43467__auto___46600);

return statearr_45024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43469__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_46654 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_46654(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_46657 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_46657(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_46660 = (function() {
var G__46662 = null;
var G__46662__1 = (function (p){
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
var G__46662__2 = (function (p,v){
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
G__46662 = function(p,v){
switch(arguments.length){
case 1:
return G__46662__1.call(this,p);
case 2:
return G__46662__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46662.cljs$core$IFn$_invoke$arity$1 = G__46662__1;
G__46662.cljs$core$IFn$_invoke$arity$2 = G__46662__2;
return G__46662;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__45035 = arguments.length;
switch (G__45035) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_46660(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_46660(p,v);
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
var G__45038 = arguments.length;
switch (G__45038) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__45036_SHARP_){
if(cljs.core.truth_((p1__45036_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__45036_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__45036_SHARP_.call(null,topic)))){
return p1__45036_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__45036_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45041 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45041 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta45042){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta45042 = meta45042;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45043,meta45042__$1){
var self__ = this;
var _45043__$1 = this;
return (new cljs.core.async.t_cljs$core$async45041(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta45042__$1));
}));

(cljs.core.async.t_cljs$core$async45041.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45043){
var self__ = this;
var _45043__$1 = this;
return self__.meta45042;
}));

(cljs.core.async.t_cljs$core$async45041.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45041.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45041.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45041.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async45041.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async45041.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async45041.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async45041.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta45042","meta45042",-2040460668,null)], null);
}));

(cljs.core.async.t_cljs$core$async45041.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45041.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45041");

(cljs.core.async.t_cljs$core$async45041.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async45041");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45041.
 */
cljs.core.async.__GT_t_cljs$core$async45041 = (function cljs$core$async$__GT_t_cljs$core$async45041(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45042){
return (new cljs.core.async.t_cljs$core$async45041(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45042));
});

}

return (new cljs.core.async.t_cljs$core$async45041(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43467__auto___46679 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43468__auto__ = (function (){var switch__43290__auto__ = (function (state_45149){
var state_val_45150 = (state_45149[(1)]);
if((state_val_45150 === (7))){
var inst_45145 = (state_45149[(2)]);
var state_45149__$1 = state_45149;
var statearr_45158_46680 = state_45149__$1;
(statearr_45158_46680[(2)] = inst_45145);

(statearr_45158_46680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45150 === (20))){
var state_45149__$1 = state_45149;
var statearr_45159_46681 = state_45149__$1;
(statearr_45159_46681[(2)] = null);

(statearr_45159_46681[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45150 === (1))){
var state_45149__$1 = state_45149;
var statearr_45160_46683 = state_45149__$1;
(statearr_45160_46683[(2)] = null);

(statearr_45160_46683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45150 === (24))){
var inst_45128 = (state_45149[(7)]);
var inst_45137 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_45128);
var state_45149__$1 = state_45149;
var statearr_45161_46685 = state_45149__$1;
(statearr_45161_46685[(2)] = inst_45137);

(statearr_45161_46685[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45150 === (4))){
var inst_45065 = (state_45149[(8)]);
var inst_45065__$1 = (state_45149[(2)]);
var inst_45066 = (inst_45065__$1 == null);
var state_45149__$1 = (function (){var statearr_45163 = state_45149;
(statearr_45163[(8)] = inst_45065__$1);

return statearr_45163;
})();
if(cljs.core.truth_(inst_45066)){
var statearr_45165_46689 = state_45149__$1;
(statearr_45165_46689[(1)] = (5));

} else {
var statearr_45166_46690 = state_45149__$1;
(statearr_45166_46690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45150 === (15))){
var inst_45120 = (state_45149[(2)]);
var state_45149__$1 = state_45149;
var statearr_45167_46691 = state_45149__$1;
(statearr_45167_46691[(2)] = inst_45120);

(statearr_45167_46691[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45150 === (21))){
var inst_45142 = (state_45149[(2)]);
var state_45149__$1 = (function (){var statearr_45170 = state_45149;
(statearr_45170[(9)] = inst_45142);

return statearr_45170;
})();
var statearr_45172_46692 = state_45149__$1;
(statearr_45172_46692[(2)] = null);

(statearr_45172_46692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45150 === (13))){
var inst_45100 = (state_45149[(10)]);
var inst_45102 = cljs.core.chunked_seq_QMARK_(inst_45100);
var state_45149__$1 = state_45149;
if(inst_45102){
var statearr_45174_46694 = state_45149__$1;
(statearr_45174_46694[(1)] = (16));

} else {
var statearr_45175_46695 = state_45149__$1;
(statearr_45175_46695[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45150 === (22))){
var inst_45134 = (state_45149[(2)]);
var state_45149__$1 = state_45149;
if(cljs.core.truth_(inst_45134)){
var statearr_45180_46700 = state_45149__$1;
(statearr_45180_46700[(1)] = (23));

} else {
var statearr_45181_46701 = state_45149__$1;
(statearr_45181_46701[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45150 === (6))){
var inst_45065 = (state_45149[(8)]);
var inst_45130 = (state_45149[(11)]);
var inst_45128 = (state_45149[(7)]);
var inst_45128__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_45065) : topic_fn.call(null,inst_45065));
var inst_45129 = cljs.core.deref(mults);
var inst_45130__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45129,inst_45128__$1);
var state_45149__$1 = (function (){var statearr_45186 = state_45149;
(statearr_45186[(11)] = inst_45130__$1);

(statearr_45186[(7)] = inst_45128__$1);

return statearr_45186;
})();
if(cljs.core.truth_(inst_45130__$1)){
var statearr_45187_46704 = state_45149__$1;
(statearr_45187_46704[(1)] = (19));

} else {
var statearr_45188_46705 = state_45149__$1;
(statearr_45188_46705[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45150 === (25))){
var inst_45139 = (state_45149[(2)]);
var state_45149__$1 = state_45149;
var statearr_45189_46707 = state_45149__$1;
(statearr_45189_46707[(2)] = inst_45139);

(statearr_45189_46707[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45150 === (17))){
var inst_45100 = (state_45149[(10)]);
var inst_45109 = cljs.core.first(inst_45100);
var inst_45110 = cljs.core.async.muxch_STAR_(inst_45109);
var inst_45111 = cljs.core.async.close_BANG_(inst_45110);
var inst_45112 = cljs.core.next(inst_45100);
var inst_45076 = inst_45112;
var inst_45077 = null;
var inst_45078 = (0);
var inst_45079 = (0);
var state_45149__$1 = (function (){var statearr_45190 = state_45149;
(statearr_45190[(12)] = inst_45079);

(statearr_45190[(13)] = inst_45076);

(statearr_45190[(14)] = inst_45111);

(statearr_45190[(15)] = inst_45078);

(statearr_45190[(16)] = inst_45077);

return statearr_45190;
})();
var statearr_45197_46710 = state_45149__$1;
(statearr_45197_46710[(2)] = null);

(statearr_45197_46710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45150 === (3))){
var inst_45147 = (state_45149[(2)]);
var state_45149__$1 = state_45149;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45149__$1,inst_45147);
} else {
if((state_val_45150 === (12))){
var inst_45122 = (state_45149[(2)]);
var state_45149__$1 = state_45149;
var statearr_45199_46711 = state_45149__$1;
(statearr_45199_46711[(2)] = inst_45122);

(statearr_45199_46711[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45150 === (2))){
var state_45149__$1 = state_45149;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45149__$1,(4),ch);
} else {
if((state_val_45150 === (23))){
var state_45149__$1 = state_45149;
var statearr_45205_46713 = state_45149__$1;
(statearr_45205_46713[(2)] = null);

(statearr_45205_46713[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45150 === (19))){
var inst_45065 = (state_45149[(8)]);
var inst_45130 = (state_45149[(11)]);
var inst_45132 = cljs.core.async.muxch_STAR_(inst_45130);
var state_45149__$1 = state_45149;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45149__$1,(22),inst_45132,inst_45065);
} else {
if((state_val_45150 === (11))){
var inst_45076 = (state_45149[(13)]);
var inst_45100 = (state_45149[(10)]);
var inst_45100__$1 = cljs.core.seq(inst_45076);
var state_45149__$1 = (function (){var statearr_45211 = state_45149;
(statearr_45211[(10)] = inst_45100__$1);

return statearr_45211;
})();
if(inst_45100__$1){
var statearr_45212_46717 = state_45149__$1;
(statearr_45212_46717[(1)] = (13));

} else {
var statearr_45213_46718 = state_45149__$1;
(statearr_45213_46718[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45150 === (9))){
var inst_45126 = (state_45149[(2)]);
var state_45149__$1 = state_45149;
var statearr_45219_46719 = state_45149__$1;
(statearr_45219_46719[(2)] = inst_45126);

(statearr_45219_46719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45150 === (5))){
var inst_45073 = cljs.core.deref(mults);
var inst_45074 = cljs.core.vals(inst_45073);
var inst_45075 = cljs.core.seq(inst_45074);
var inst_45076 = inst_45075;
var inst_45077 = null;
var inst_45078 = (0);
var inst_45079 = (0);
var state_45149__$1 = (function (){var statearr_45224 = state_45149;
(statearr_45224[(12)] = inst_45079);

(statearr_45224[(13)] = inst_45076);

(statearr_45224[(15)] = inst_45078);

(statearr_45224[(16)] = inst_45077);

return statearr_45224;
})();
var statearr_45225_46724 = state_45149__$1;
(statearr_45225_46724[(2)] = null);

(statearr_45225_46724[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45150 === (14))){
var state_45149__$1 = state_45149;
var statearr_45229_46725 = state_45149__$1;
(statearr_45229_46725[(2)] = null);

(statearr_45229_46725[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45150 === (16))){
var inst_45100 = (state_45149[(10)]);
var inst_45104 = cljs.core.chunk_first(inst_45100);
var inst_45105 = cljs.core.chunk_rest(inst_45100);
var inst_45106 = cljs.core.count(inst_45104);
var inst_45076 = inst_45105;
var inst_45077 = inst_45104;
var inst_45078 = inst_45106;
var inst_45079 = (0);
var state_45149__$1 = (function (){var statearr_45234 = state_45149;
(statearr_45234[(12)] = inst_45079);

(statearr_45234[(13)] = inst_45076);

(statearr_45234[(15)] = inst_45078);

(statearr_45234[(16)] = inst_45077);

return statearr_45234;
})();
var statearr_45235_46729 = state_45149__$1;
(statearr_45235_46729[(2)] = null);

(statearr_45235_46729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45150 === (10))){
var inst_45079 = (state_45149[(12)]);
var inst_45076 = (state_45149[(13)]);
var inst_45078 = (state_45149[(15)]);
var inst_45077 = (state_45149[(16)]);
var inst_45085 = cljs.core._nth(inst_45077,inst_45079);
var inst_45086 = cljs.core.async.muxch_STAR_(inst_45085);
var inst_45087 = cljs.core.async.close_BANG_(inst_45086);
var inst_45088 = (inst_45079 + (1));
var tmp45226 = inst_45076;
var tmp45227 = inst_45078;
var tmp45228 = inst_45077;
var inst_45076__$1 = tmp45226;
var inst_45077__$1 = tmp45228;
var inst_45078__$1 = tmp45227;
var inst_45079__$1 = inst_45088;
var state_45149__$1 = (function (){var statearr_45241 = state_45149;
(statearr_45241[(12)] = inst_45079__$1);

(statearr_45241[(13)] = inst_45076__$1);

(statearr_45241[(17)] = inst_45087);

(statearr_45241[(15)] = inst_45078__$1);

(statearr_45241[(16)] = inst_45077__$1);

return statearr_45241;
})();
var statearr_45242_46734 = state_45149__$1;
(statearr_45242_46734[(2)] = null);

(statearr_45242_46734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45150 === (18))){
var inst_45117 = (state_45149[(2)]);
var state_45149__$1 = state_45149;
var statearr_45244_46735 = state_45149__$1;
(statearr_45244_46735[(2)] = inst_45117);

(statearr_45244_46735[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45150 === (8))){
var inst_45079 = (state_45149[(12)]);
var inst_45078 = (state_45149[(15)]);
var inst_45081 = (inst_45079 < inst_45078);
var inst_45082 = inst_45081;
var state_45149__$1 = state_45149;
if(cljs.core.truth_(inst_45082)){
var statearr_45247_46738 = state_45149__$1;
(statearr_45247_46738[(1)] = (10));

} else {
var statearr_45248_46739 = state_45149__$1;
(statearr_45248_46739[(1)] = (11));

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
var cljs$core$async$state_machine__43291__auto__ = null;
var cljs$core$async$state_machine__43291__auto____0 = (function (){
var statearr_45261 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45261[(0)] = cljs$core$async$state_machine__43291__auto__);

(statearr_45261[(1)] = (1));

return statearr_45261;
});
var cljs$core$async$state_machine__43291__auto____1 = (function (state_45149){
while(true){
var ret_value__43292__auto__ = (function (){try{while(true){
var result__43293__auto__ = switch__43290__auto__(state_45149);
if(cljs.core.keyword_identical_QMARK_(result__43293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43293__auto__;
}
break;
}
}catch (e45270){var ex__43294__auto__ = e45270;
var statearr_45271_46748 = state_45149;
(statearr_45271_46748[(2)] = ex__43294__auto__);


if(cljs.core.seq((state_45149[(4)]))){
var statearr_45272_46749 = state_45149;
(statearr_45272_46749[(1)] = cljs.core.first((state_45149[(4)])));

} else {
throw ex__43294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46750 = state_45149;
state_45149 = G__46750;
continue;
} else {
return ret_value__43292__auto__;
}
break;
}
});
cljs$core$async$state_machine__43291__auto__ = function(state_45149){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43291__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43291__auto____1.call(this,state_45149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43291__auto____0;
cljs$core$async$state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43291__auto____1;
return cljs$core$async$state_machine__43291__auto__;
})()
})();
var state__43469__auto__ = (function (){var statearr_45273 = f__43468__auto__();
(statearr_45273[(6)] = c__43467__auto___46679);

return statearr_45273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43469__auto__);
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
var G__45275 = arguments.length;
switch (G__45275) {
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
var G__45277 = arguments.length;
switch (G__45277) {
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
var G__45293 = arguments.length;
switch (G__45293) {
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
var c__43467__auto___46755 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43468__auto__ = (function (){var switch__43290__auto__ = (function (state_45365){
var state_val_45366 = (state_45365[(1)]);
if((state_val_45366 === (7))){
var state_45365__$1 = state_45365;
var statearr_45369_46756 = state_45365__$1;
(statearr_45369_46756[(2)] = null);

(statearr_45369_46756[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45366 === (1))){
var state_45365__$1 = state_45365;
var statearr_45370_46757 = state_45365__$1;
(statearr_45370_46757[(2)] = null);

(statearr_45370_46757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45366 === (4))){
var inst_45318 = (state_45365[(7)]);
var inst_45319 = (state_45365[(8)]);
var inst_45321 = (inst_45319 < inst_45318);
var state_45365__$1 = state_45365;
if(cljs.core.truth_(inst_45321)){
var statearr_45371_46758 = state_45365__$1;
(statearr_45371_46758[(1)] = (6));

} else {
var statearr_45372_46759 = state_45365__$1;
(statearr_45372_46759[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45366 === (15))){
var inst_45349 = (state_45365[(9)]);
var inst_45354 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_45349);
var state_45365__$1 = state_45365;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45365__$1,(17),out,inst_45354);
} else {
if((state_val_45366 === (13))){
var inst_45349 = (state_45365[(9)]);
var inst_45349__$1 = (state_45365[(2)]);
var inst_45350 = cljs.core.some(cljs.core.nil_QMARK_,inst_45349__$1);
var state_45365__$1 = (function (){var statearr_45378 = state_45365;
(statearr_45378[(9)] = inst_45349__$1);

return statearr_45378;
})();
if(cljs.core.truth_(inst_45350)){
var statearr_45383_46760 = state_45365__$1;
(statearr_45383_46760[(1)] = (14));

} else {
var statearr_45384_46761 = state_45365__$1;
(statearr_45384_46761[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45366 === (6))){
var state_45365__$1 = state_45365;
var statearr_45385_46763 = state_45365__$1;
(statearr_45385_46763[(2)] = null);

(statearr_45385_46763[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45366 === (17))){
var inst_45356 = (state_45365[(2)]);
var state_45365__$1 = (function (){var statearr_45410 = state_45365;
(statearr_45410[(10)] = inst_45356);

return statearr_45410;
})();
var statearr_45411_46765 = state_45365__$1;
(statearr_45411_46765[(2)] = null);

(statearr_45411_46765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45366 === (3))){
var inst_45361 = (state_45365[(2)]);
var state_45365__$1 = state_45365;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45365__$1,inst_45361);
} else {
if((state_val_45366 === (12))){
var _ = (function (){var statearr_45412 = state_45365;
(statearr_45412[(4)] = cljs.core.rest((state_45365[(4)])));

return statearr_45412;
})();
var state_45365__$1 = state_45365;
var ex45405 = (state_45365__$1[(2)]);
var statearr_45418_46766 = state_45365__$1;
(statearr_45418_46766[(5)] = ex45405);


if((ex45405 instanceof Object)){
var statearr_45419_46767 = state_45365__$1;
(statearr_45419_46767[(1)] = (11));

(statearr_45419_46767[(5)] = null);

} else {
throw ex45405;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45366 === (2))){
var inst_45317 = cljs.core.reset_BANG_(dctr,cnt);
var inst_45318 = cnt;
var inst_45319 = (0);
var state_45365__$1 = (function (){var statearr_45420 = state_45365;
(statearr_45420[(11)] = inst_45317);

(statearr_45420[(7)] = inst_45318);

(statearr_45420[(8)] = inst_45319);

return statearr_45420;
})();
var statearr_45421_46771 = state_45365__$1;
(statearr_45421_46771[(2)] = null);

(statearr_45421_46771[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45366 === (11))){
var inst_45328 = (state_45365[(2)]);
var inst_45329 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_45365__$1 = (function (){var statearr_45422 = state_45365;
(statearr_45422[(12)] = inst_45328);

return statearr_45422;
})();
var statearr_45423_46776 = state_45365__$1;
(statearr_45423_46776[(2)] = inst_45329);

(statearr_45423_46776[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45366 === (9))){
var inst_45319 = (state_45365[(8)]);
var _ = (function (){var statearr_45428 = state_45365;
(statearr_45428[(4)] = cljs.core.cons((12),(state_45365[(4)])));

return statearr_45428;
})();
var inst_45335 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_45319) : chs__$1.call(null,inst_45319));
var inst_45336 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_45319) : done.call(null,inst_45319));
var inst_45337 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_45335,inst_45336);
var ___$1 = (function (){var statearr_45435 = state_45365;
(statearr_45435[(4)] = cljs.core.rest((state_45365[(4)])));

return statearr_45435;
})();
var state_45365__$1 = state_45365;
var statearr_45442_46777 = state_45365__$1;
(statearr_45442_46777[(2)] = inst_45337);

(statearr_45442_46777[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45366 === (5))){
var inst_45347 = (state_45365[(2)]);
var state_45365__$1 = (function (){var statearr_45449 = state_45365;
(statearr_45449[(13)] = inst_45347);

return statearr_45449;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45365__$1,(13),dchan);
} else {
if((state_val_45366 === (14))){
var inst_45352 = cljs.core.async.close_BANG_(out);
var state_45365__$1 = state_45365;
var statearr_45460_46778 = state_45365__$1;
(statearr_45460_46778[(2)] = inst_45352);

(statearr_45460_46778[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45366 === (16))){
var inst_45359 = (state_45365[(2)]);
var state_45365__$1 = state_45365;
var statearr_45466_46779 = state_45365__$1;
(statearr_45466_46779[(2)] = inst_45359);

(statearr_45466_46779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45366 === (10))){
var inst_45319 = (state_45365[(8)]);
var inst_45340 = (state_45365[(2)]);
var inst_45341 = (inst_45319 + (1));
var inst_45319__$1 = inst_45341;
var state_45365__$1 = (function (){var statearr_45483 = state_45365;
(statearr_45483[(14)] = inst_45340);

(statearr_45483[(8)] = inst_45319__$1);

return statearr_45483;
})();
var statearr_45488_46780 = state_45365__$1;
(statearr_45488_46780[(2)] = null);

(statearr_45488_46780[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45366 === (8))){
var inst_45345 = (state_45365[(2)]);
var state_45365__$1 = state_45365;
var statearr_45496_46781 = state_45365__$1;
(statearr_45496_46781[(2)] = inst_45345);

(statearr_45496_46781[(1)] = (5));


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
var cljs$core$async$state_machine__43291__auto__ = null;
var cljs$core$async$state_machine__43291__auto____0 = (function (){
var statearr_45507 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45507[(0)] = cljs$core$async$state_machine__43291__auto__);

(statearr_45507[(1)] = (1));

return statearr_45507;
});
var cljs$core$async$state_machine__43291__auto____1 = (function (state_45365){
while(true){
var ret_value__43292__auto__ = (function (){try{while(true){
var result__43293__auto__ = switch__43290__auto__(state_45365);
if(cljs.core.keyword_identical_QMARK_(result__43293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43293__auto__;
}
break;
}
}catch (e45508){var ex__43294__auto__ = e45508;
var statearr_45511_46782 = state_45365;
(statearr_45511_46782[(2)] = ex__43294__auto__);


if(cljs.core.seq((state_45365[(4)]))){
var statearr_45512_46783 = state_45365;
(statearr_45512_46783[(1)] = cljs.core.first((state_45365[(4)])));

} else {
throw ex__43294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46784 = state_45365;
state_45365 = G__46784;
continue;
} else {
return ret_value__43292__auto__;
}
break;
}
});
cljs$core$async$state_machine__43291__auto__ = function(state_45365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43291__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43291__auto____1.call(this,state_45365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43291__auto____0;
cljs$core$async$state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43291__auto____1;
return cljs$core$async$state_machine__43291__auto__;
})()
})();
var state__43469__auto__ = (function (){var statearr_45514 = f__43468__auto__();
(statearr_45514[(6)] = c__43467__auto___46755);

return statearr_45514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43469__auto__);
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
var G__45522 = arguments.length;
switch (G__45522) {
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
var c__43467__auto___46786 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43468__auto__ = (function (){var switch__43290__auto__ = (function (state_45559){
var state_val_45560 = (state_45559[(1)]);
if((state_val_45560 === (7))){
var inst_45534 = (state_45559[(7)]);
var inst_45533 = (state_45559[(8)]);
var inst_45533__$1 = (state_45559[(2)]);
var inst_45534__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45533__$1,(0),null);
var inst_45535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45533__$1,(1),null);
var inst_45536 = (inst_45534__$1 == null);
var state_45559__$1 = (function (){var statearr_45565 = state_45559;
(statearr_45565[(9)] = inst_45535);

(statearr_45565[(7)] = inst_45534__$1);

(statearr_45565[(8)] = inst_45533__$1);

return statearr_45565;
})();
if(cljs.core.truth_(inst_45536)){
var statearr_45566_46787 = state_45559__$1;
(statearr_45566_46787[(1)] = (8));

} else {
var statearr_45567_46788 = state_45559__$1;
(statearr_45567_46788[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (1))){
var inst_45523 = cljs.core.vec(chs);
var inst_45524 = inst_45523;
var state_45559__$1 = (function (){var statearr_45568 = state_45559;
(statearr_45568[(10)] = inst_45524);

return statearr_45568;
})();
var statearr_45569_46794 = state_45559__$1;
(statearr_45569_46794[(2)] = null);

(statearr_45569_46794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (4))){
var inst_45524 = (state_45559[(10)]);
var state_45559__$1 = state_45559;
return cljs.core.async.ioc_alts_BANG_(state_45559__$1,(7),inst_45524);
} else {
if((state_val_45560 === (6))){
var inst_45555 = (state_45559[(2)]);
var state_45559__$1 = state_45559;
var statearr_45570_46795 = state_45559__$1;
(statearr_45570_46795[(2)] = inst_45555);

(statearr_45570_46795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (3))){
var inst_45557 = (state_45559[(2)]);
var state_45559__$1 = state_45559;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45559__$1,inst_45557);
} else {
if((state_val_45560 === (2))){
var inst_45524 = (state_45559[(10)]);
var inst_45526 = cljs.core.count(inst_45524);
var inst_45527 = (inst_45526 > (0));
var state_45559__$1 = state_45559;
if(cljs.core.truth_(inst_45527)){
var statearr_45572_46799 = state_45559__$1;
(statearr_45572_46799[(1)] = (4));

} else {
var statearr_45574_46800 = state_45559__$1;
(statearr_45574_46800[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (11))){
var inst_45524 = (state_45559[(10)]);
var inst_45548 = (state_45559[(2)]);
var tmp45571 = inst_45524;
var inst_45524__$1 = tmp45571;
var state_45559__$1 = (function (){var statearr_45575 = state_45559;
(statearr_45575[(10)] = inst_45524__$1);

(statearr_45575[(11)] = inst_45548);

return statearr_45575;
})();
var statearr_45579_46802 = state_45559__$1;
(statearr_45579_46802[(2)] = null);

(statearr_45579_46802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (9))){
var inst_45534 = (state_45559[(7)]);
var state_45559__$1 = state_45559;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45559__$1,(11),out,inst_45534);
} else {
if((state_val_45560 === (5))){
var inst_45553 = cljs.core.async.close_BANG_(out);
var state_45559__$1 = state_45559;
var statearr_45580_46806 = state_45559__$1;
(statearr_45580_46806[(2)] = inst_45553);

(statearr_45580_46806[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (10))){
var inst_45551 = (state_45559[(2)]);
var state_45559__$1 = state_45559;
var statearr_45581_46807 = state_45559__$1;
(statearr_45581_46807[(2)] = inst_45551);

(statearr_45581_46807[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (8))){
var inst_45535 = (state_45559[(9)]);
var inst_45534 = (state_45559[(7)]);
var inst_45524 = (state_45559[(10)]);
var inst_45533 = (state_45559[(8)]);
var inst_45543 = (function (){var cs = inst_45524;
var vec__45529 = inst_45533;
var v = inst_45534;
var c = inst_45535;
return (function (p1__45520_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__45520_SHARP_);
});
})();
var inst_45544 = cljs.core.filterv(inst_45543,inst_45524);
var inst_45524__$1 = inst_45544;
var state_45559__$1 = (function (){var statearr_45582 = state_45559;
(statearr_45582[(10)] = inst_45524__$1);

return statearr_45582;
})();
var statearr_45583_46811 = state_45559__$1;
(statearr_45583_46811[(2)] = null);

(statearr_45583_46811[(1)] = (2));


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
var cljs$core$async$state_machine__43291__auto__ = null;
var cljs$core$async$state_machine__43291__auto____0 = (function (){
var statearr_45584 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45584[(0)] = cljs$core$async$state_machine__43291__auto__);

(statearr_45584[(1)] = (1));

return statearr_45584;
});
var cljs$core$async$state_machine__43291__auto____1 = (function (state_45559){
while(true){
var ret_value__43292__auto__ = (function (){try{while(true){
var result__43293__auto__ = switch__43290__auto__(state_45559);
if(cljs.core.keyword_identical_QMARK_(result__43293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43293__auto__;
}
break;
}
}catch (e45585){var ex__43294__auto__ = e45585;
var statearr_45586_46812 = state_45559;
(statearr_45586_46812[(2)] = ex__43294__auto__);


if(cljs.core.seq((state_45559[(4)]))){
var statearr_45587_46813 = state_45559;
(statearr_45587_46813[(1)] = cljs.core.first((state_45559[(4)])));

} else {
throw ex__43294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46817 = state_45559;
state_45559 = G__46817;
continue;
} else {
return ret_value__43292__auto__;
}
break;
}
});
cljs$core$async$state_machine__43291__auto__ = function(state_45559){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43291__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43291__auto____1.call(this,state_45559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43291__auto____0;
cljs$core$async$state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43291__auto____1;
return cljs$core$async$state_machine__43291__auto__;
})()
})();
var state__43469__auto__ = (function (){var statearr_45588 = f__43468__auto__();
(statearr_45588[(6)] = c__43467__auto___46786);

return statearr_45588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43469__auto__);
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
var G__45591 = arguments.length;
switch (G__45591) {
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
var c__43467__auto___46823 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43468__auto__ = (function (){var switch__43290__auto__ = (function (state_45615){
var state_val_45616 = (state_45615[(1)]);
if((state_val_45616 === (7))){
var inst_45597 = (state_45615[(7)]);
var inst_45597__$1 = (state_45615[(2)]);
var inst_45598 = (inst_45597__$1 == null);
var inst_45599 = cljs.core.not(inst_45598);
var state_45615__$1 = (function (){var statearr_45617 = state_45615;
(statearr_45617[(7)] = inst_45597__$1);

return statearr_45617;
})();
if(inst_45599){
var statearr_45618_46824 = state_45615__$1;
(statearr_45618_46824[(1)] = (8));

} else {
var statearr_45619_46825 = state_45615__$1;
(statearr_45619_46825[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45616 === (1))){
var inst_45592 = (0);
var state_45615__$1 = (function (){var statearr_45621 = state_45615;
(statearr_45621[(8)] = inst_45592);

return statearr_45621;
})();
var statearr_45622_46826 = state_45615__$1;
(statearr_45622_46826[(2)] = null);

(statearr_45622_46826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45616 === (4))){
var state_45615__$1 = state_45615;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45615__$1,(7),ch);
} else {
if((state_val_45616 === (6))){
var inst_45610 = (state_45615[(2)]);
var state_45615__$1 = state_45615;
var statearr_45627_46827 = state_45615__$1;
(statearr_45627_46827[(2)] = inst_45610);

(statearr_45627_46827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45616 === (3))){
var inst_45612 = (state_45615[(2)]);
var inst_45613 = cljs.core.async.close_BANG_(out);
var state_45615__$1 = (function (){var statearr_45628 = state_45615;
(statearr_45628[(9)] = inst_45612);

return statearr_45628;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45615__$1,inst_45613);
} else {
if((state_val_45616 === (2))){
var inst_45592 = (state_45615[(8)]);
var inst_45594 = (inst_45592 < n);
var state_45615__$1 = state_45615;
if(cljs.core.truth_(inst_45594)){
var statearr_45631_46828 = state_45615__$1;
(statearr_45631_46828[(1)] = (4));

} else {
var statearr_45632_46829 = state_45615__$1;
(statearr_45632_46829[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45616 === (11))){
var inst_45592 = (state_45615[(8)]);
var inst_45602 = (state_45615[(2)]);
var inst_45603 = (inst_45592 + (1));
var inst_45592__$1 = inst_45603;
var state_45615__$1 = (function (){var statearr_45635 = state_45615;
(statearr_45635[(10)] = inst_45602);

(statearr_45635[(8)] = inst_45592__$1);

return statearr_45635;
})();
var statearr_45636_46830 = state_45615__$1;
(statearr_45636_46830[(2)] = null);

(statearr_45636_46830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45616 === (9))){
var state_45615__$1 = state_45615;
var statearr_45637_46831 = state_45615__$1;
(statearr_45637_46831[(2)] = null);

(statearr_45637_46831[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45616 === (5))){
var state_45615__$1 = state_45615;
var statearr_45638_46832 = state_45615__$1;
(statearr_45638_46832[(2)] = null);

(statearr_45638_46832[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45616 === (10))){
var inst_45607 = (state_45615[(2)]);
var state_45615__$1 = state_45615;
var statearr_45639_46835 = state_45615__$1;
(statearr_45639_46835[(2)] = inst_45607);

(statearr_45639_46835[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45616 === (8))){
var inst_45597 = (state_45615[(7)]);
var state_45615__$1 = state_45615;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45615__$1,(11),out,inst_45597);
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
var cljs$core$async$state_machine__43291__auto__ = null;
var cljs$core$async$state_machine__43291__auto____0 = (function (){
var statearr_45640 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45640[(0)] = cljs$core$async$state_machine__43291__auto__);

(statearr_45640[(1)] = (1));

return statearr_45640;
});
var cljs$core$async$state_machine__43291__auto____1 = (function (state_45615){
while(true){
var ret_value__43292__auto__ = (function (){try{while(true){
var result__43293__auto__ = switch__43290__auto__(state_45615);
if(cljs.core.keyword_identical_QMARK_(result__43293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43293__auto__;
}
break;
}
}catch (e45641){var ex__43294__auto__ = e45641;
var statearr_45642_46838 = state_45615;
(statearr_45642_46838[(2)] = ex__43294__auto__);


if(cljs.core.seq((state_45615[(4)]))){
var statearr_45643_46839 = state_45615;
(statearr_45643_46839[(1)] = cljs.core.first((state_45615[(4)])));

} else {
throw ex__43294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46840 = state_45615;
state_45615 = G__46840;
continue;
} else {
return ret_value__43292__auto__;
}
break;
}
});
cljs$core$async$state_machine__43291__auto__ = function(state_45615){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43291__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43291__auto____1.call(this,state_45615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43291__auto____0;
cljs$core$async$state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43291__auto____1;
return cljs$core$async$state_machine__43291__auto__;
})()
})();
var state__43469__auto__ = (function (){var statearr_45644 = f__43468__auto__();
(statearr_45644[(6)] = c__43467__auto___46823);

return statearr_45644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43469__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45646 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45646 = (function (f,ch,meta45647){
this.f = f;
this.ch = ch;
this.meta45647 = meta45647;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45648,meta45647__$1){
var self__ = this;
var _45648__$1 = this;
return (new cljs.core.async.t_cljs$core$async45646(self__.f,self__.ch,meta45647__$1));
}));

(cljs.core.async.t_cljs$core$async45646.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45648){
var self__ = this;
var _45648__$1 = this;
return self__.meta45647;
}));

(cljs.core.async.t_cljs$core$async45646.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45646.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45646.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45646.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45646.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45650 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45650 = (function (f,ch,meta45647,_,fn1,meta45651){
this.f = f;
this.ch = ch;
this.meta45647 = meta45647;
this._ = _;
this.fn1 = fn1;
this.meta45651 = meta45651;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45652,meta45651__$1){
var self__ = this;
var _45652__$1 = this;
return (new cljs.core.async.t_cljs$core$async45650(self__.f,self__.ch,self__.meta45647,self__._,self__.fn1,meta45651__$1));
}));

(cljs.core.async.t_cljs$core$async45650.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45652){
var self__ = this;
var _45652__$1 = this;
return self__.meta45651;
}));

(cljs.core.async.t_cljs$core$async45650.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45650.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async45650.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45650.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__45645_SHARP_){
var G__45656 = (((p1__45645_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__45645_SHARP_) : self__.f.call(null,p1__45645_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__45656) : f1.call(null,G__45656));
});
}));

(cljs.core.async.t_cljs$core$async45650.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45647","meta45647",1257288112,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async45646","cljs.core.async/t_cljs$core$async45646",832570770,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta45651","meta45651",-804698924,null)], null);
}));

(cljs.core.async.t_cljs$core$async45650.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45650.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45650");

(cljs.core.async.t_cljs$core$async45650.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async45650");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45650.
 */
cljs.core.async.__GT_t_cljs$core$async45650 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45650(f__$1,ch__$1,meta45647__$1,___$2,fn1__$1,meta45651){
return (new cljs.core.async.t_cljs$core$async45650(f__$1,ch__$1,meta45647__$1,___$2,fn1__$1,meta45651));
});

}

return (new cljs.core.async.t_cljs$core$async45650(self__.f,self__.ch,self__.meta45647,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__45661 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__45661) : self__.f.call(null,G__45661));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async45646.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45646.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async45646.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45647","meta45647",1257288112,null)], null);
}));

(cljs.core.async.t_cljs$core$async45646.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45646.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45646");

(cljs.core.async.t_cljs$core$async45646.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async45646");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45646.
 */
cljs.core.async.__GT_t_cljs$core$async45646 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45646(f__$1,ch__$1,meta45647){
return (new cljs.core.async.t_cljs$core$async45646(f__$1,ch__$1,meta45647));
});

}

return (new cljs.core.async.t_cljs$core$async45646(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45670 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45670 = (function (f,ch,meta45671){
this.f = f;
this.ch = ch;
this.meta45671 = meta45671;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45672,meta45671__$1){
var self__ = this;
var _45672__$1 = this;
return (new cljs.core.async.t_cljs$core$async45670(self__.f,self__.ch,meta45671__$1));
}));

(cljs.core.async.t_cljs$core$async45670.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45672){
var self__ = this;
var _45672__$1 = this;
return self__.meta45671;
}));

(cljs.core.async.t_cljs$core$async45670.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45670.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45670.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45670.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async45670.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45670.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async45670.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45671","meta45671",1135197695,null)], null);
}));

(cljs.core.async.t_cljs$core$async45670.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45670.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45670");

(cljs.core.async.t_cljs$core$async45670.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async45670");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45670.
 */
cljs.core.async.__GT_t_cljs$core$async45670 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async45670(f__$1,ch__$1,meta45671){
return (new cljs.core.async.t_cljs$core$async45670(f__$1,ch__$1,meta45671));
});

}

return (new cljs.core.async.t_cljs$core$async45670(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45678 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45678 = (function (p,ch,meta45679){
this.p = p;
this.ch = ch;
this.meta45679 = meta45679;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45680,meta45679__$1){
var self__ = this;
var _45680__$1 = this;
return (new cljs.core.async.t_cljs$core$async45678(self__.p,self__.ch,meta45679__$1));
}));

(cljs.core.async.t_cljs$core$async45678.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45680){
var self__ = this;
var _45680__$1 = this;
return self__.meta45679;
}));

(cljs.core.async.t_cljs$core$async45678.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45678.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45678.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45678.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45678.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async45678.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45678.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async45678.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45679","meta45679",-1881443642,null)], null);
}));

(cljs.core.async.t_cljs$core$async45678.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45678.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45678");

(cljs.core.async.t_cljs$core$async45678.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async45678");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45678.
 */
cljs.core.async.__GT_t_cljs$core$async45678 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async45678(p__$1,ch__$1,meta45679){
return (new cljs.core.async.t_cljs$core$async45678(p__$1,ch__$1,meta45679));
});

}

return (new cljs.core.async.t_cljs$core$async45678(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__45687 = arguments.length;
switch (G__45687) {
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
var c__43467__auto___46858 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43468__auto__ = (function (){var switch__43290__auto__ = (function (state_45714){
var state_val_45715 = (state_45714[(1)]);
if((state_val_45715 === (7))){
var inst_45710 = (state_45714[(2)]);
var state_45714__$1 = state_45714;
var statearr_45716_46863 = state_45714__$1;
(statearr_45716_46863[(2)] = inst_45710);

(statearr_45716_46863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45715 === (1))){
var state_45714__$1 = state_45714;
var statearr_45717_46864 = state_45714__$1;
(statearr_45717_46864[(2)] = null);

(statearr_45717_46864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45715 === (4))){
var inst_45696 = (state_45714[(7)]);
var inst_45696__$1 = (state_45714[(2)]);
var inst_45697 = (inst_45696__$1 == null);
var state_45714__$1 = (function (){var statearr_45718 = state_45714;
(statearr_45718[(7)] = inst_45696__$1);

return statearr_45718;
})();
if(cljs.core.truth_(inst_45697)){
var statearr_45719_46866 = state_45714__$1;
(statearr_45719_46866[(1)] = (5));

} else {
var statearr_45720_46867 = state_45714__$1;
(statearr_45720_46867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45715 === (6))){
var inst_45696 = (state_45714[(7)]);
var inst_45701 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_45696) : p.call(null,inst_45696));
var state_45714__$1 = state_45714;
if(cljs.core.truth_(inst_45701)){
var statearr_45721_46869 = state_45714__$1;
(statearr_45721_46869[(1)] = (8));

} else {
var statearr_45722_46870 = state_45714__$1;
(statearr_45722_46870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45715 === (3))){
var inst_45712 = (state_45714[(2)]);
var state_45714__$1 = state_45714;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45714__$1,inst_45712);
} else {
if((state_val_45715 === (2))){
var state_45714__$1 = state_45714;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45714__$1,(4),ch);
} else {
if((state_val_45715 === (11))){
var inst_45704 = (state_45714[(2)]);
var state_45714__$1 = state_45714;
var statearr_45723_46871 = state_45714__$1;
(statearr_45723_46871[(2)] = inst_45704);

(statearr_45723_46871[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45715 === (9))){
var state_45714__$1 = state_45714;
var statearr_45724_46872 = state_45714__$1;
(statearr_45724_46872[(2)] = null);

(statearr_45724_46872[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45715 === (5))){
var inst_45699 = cljs.core.async.close_BANG_(out);
var state_45714__$1 = state_45714;
var statearr_45725_46873 = state_45714__$1;
(statearr_45725_46873[(2)] = inst_45699);

(statearr_45725_46873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45715 === (10))){
var inst_45707 = (state_45714[(2)]);
var state_45714__$1 = (function (){var statearr_45726 = state_45714;
(statearr_45726[(8)] = inst_45707);

return statearr_45726;
})();
var statearr_45727_46874 = state_45714__$1;
(statearr_45727_46874[(2)] = null);

(statearr_45727_46874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45715 === (8))){
var inst_45696 = (state_45714[(7)]);
var state_45714__$1 = state_45714;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45714__$1,(11),out,inst_45696);
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
var cljs$core$async$state_machine__43291__auto__ = null;
var cljs$core$async$state_machine__43291__auto____0 = (function (){
var statearr_45731 = [null,null,null,null,null,null,null,null,null];
(statearr_45731[(0)] = cljs$core$async$state_machine__43291__auto__);

(statearr_45731[(1)] = (1));

return statearr_45731;
});
var cljs$core$async$state_machine__43291__auto____1 = (function (state_45714){
while(true){
var ret_value__43292__auto__ = (function (){try{while(true){
var result__43293__auto__ = switch__43290__auto__(state_45714);
if(cljs.core.keyword_identical_QMARK_(result__43293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43293__auto__;
}
break;
}
}catch (e45732){var ex__43294__auto__ = e45732;
var statearr_45733_46876 = state_45714;
(statearr_45733_46876[(2)] = ex__43294__auto__);


if(cljs.core.seq((state_45714[(4)]))){
var statearr_45734_46877 = state_45714;
(statearr_45734_46877[(1)] = cljs.core.first((state_45714[(4)])));

} else {
throw ex__43294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46878 = state_45714;
state_45714 = G__46878;
continue;
} else {
return ret_value__43292__auto__;
}
break;
}
});
cljs$core$async$state_machine__43291__auto__ = function(state_45714){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43291__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43291__auto____1.call(this,state_45714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43291__auto____0;
cljs$core$async$state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43291__auto____1;
return cljs$core$async$state_machine__43291__auto__;
})()
})();
var state__43469__auto__ = (function (){var statearr_45735 = f__43468__auto__();
(statearr_45735[(6)] = c__43467__auto___46858);

return statearr_45735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43469__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__45737 = arguments.length;
switch (G__45737) {
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
var c__43467__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43468__auto__ = (function (){var switch__43290__auto__ = (function (state_45799){
var state_val_45800 = (state_45799[(1)]);
if((state_val_45800 === (7))){
var inst_45795 = (state_45799[(2)]);
var state_45799__$1 = state_45799;
var statearr_45804_46885 = state_45799__$1;
(statearr_45804_46885[(2)] = inst_45795);

(statearr_45804_46885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45800 === (20))){
var inst_45765 = (state_45799[(7)]);
var inst_45776 = (state_45799[(2)]);
var inst_45777 = cljs.core.next(inst_45765);
var inst_45751 = inst_45777;
var inst_45752 = null;
var inst_45753 = (0);
var inst_45754 = (0);
var state_45799__$1 = (function (){var statearr_45809 = state_45799;
(statearr_45809[(8)] = inst_45776);

(statearr_45809[(9)] = inst_45751);

(statearr_45809[(10)] = inst_45752);

(statearr_45809[(11)] = inst_45754);

(statearr_45809[(12)] = inst_45753);

return statearr_45809;
})();
var statearr_45810_46886 = state_45799__$1;
(statearr_45810_46886[(2)] = null);

(statearr_45810_46886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45800 === (1))){
var state_45799__$1 = state_45799;
var statearr_45812_46887 = state_45799__$1;
(statearr_45812_46887[(2)] = null);

(statearr_45812_46887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45800 === (4))){
var inst_45740 = (state_45799[(13)]);
var inst_45740__$1 = (state_45799[(2)]);
var inst_45741 = (inst_45740__$1 == null);
var state_45799__$1 = (function (){var statearr_45813 = state_45799;
(statearr_45813[(13)] = inst_45740__$1);

return statearr_45813;
})();
if(cljs.core.truth_(inst_45741)){
var statearr_45814_46889 = state_45799__$1;
(statearr_45814_46889[(1)] = (5));

} else {
var statearr_45815_46890 = state_45799__$1;
(statearr_45815_46890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45800 === (15))){
var state_45799__$1 = state_45799;
var statearr_45819_46891 = state_45799__$1;
(statearr_45819_46891[(2)] = null);

(statearr_45819_46891[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45800 === (21))){
var state_45799__$1 = state_45799;
var statearr_45820_46895 = state_45799__$1;
(statearr_45820_46895[(2)] = null);

(statearr_45820_46895[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45800 === (13))){
var inst_45751 = (state_45799[(9)]);
var inst_45752 = (state_45799[(10)]);
var inst_45754 = (state_45799[(11)]);
var inst_45753 = (state_45799[(12)]);
var inst_45761 = (state_45799[(2)]);
var inst_45762 = (inst_45754 + (1));
var tmp45816 = inst_45751;
var tmp45817 = inst_45752;
var tmp45818 = inst_45753;
var inst_45751__$1 = tmp45816;
var inst_45752__$1 = tmp45817;
var inst_45753__$1 = tmp45818;
var inst_45754__$1 = inst_45762;
var state_45799__$1 = (function (){var statearr_45821 = state_45799;
(statearr_45821[(9)] = inst_45751__$1);

(statearr_45821[(10)] = inst_45752__$1);

(statearr_45821[(14)] = inst_45761);

(statearr_45821[(11)] = inst_45754__$1);

(statearr_45821[(12)] = inst_45753__$1);

return statearr_45821;
})();
var statearr_45822_46896 = state_45799__$1;
(statearr_45822_46896[(2)] = null);

(statearr_45822_46896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45800 === (22))){
var state_45799__$1 = state_45799;
var statearr_45823_46898 = state_45799__$1;
(statearr_45823_46898[(2)] = null);

(statearr_45823_46898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45800 === (6))){
var inst_45740 = (state_45799[(13)]);
var inst_45749 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45740) : f.call(null,inst_45740));
var inst_45750 = cljs.core.seq(inst_45749);
var inst_45751 = inst_45750;
var inst_45752 = null;
var inst_45753 = (0);
var inst_45754 = (0);
var state_45799__$1 = (function (){var statearr_45826 = state_45799;
(statearr_45826[(9)] = inst_45751);

(statearr_45826[(10)] = inst_45752);

(statearr_45826[(11)] = inst_45754);

(statearr_45826[(12)] = inst_45753);

return statearr_45826;
})();
var statearr_45827_46901 = state_45799__$1;
(statearr_45827_46901[(2)] = null);

(statearr_45827_46901[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45800 === (17))){
var inst_45765 = (state_45799[(7)]);
var inst_45769 = cljs.core.chunk_first(inst_45765);
var inst_45770 = cljs.core.chunk_rest(inst_45765);
var inst_45771 = cljs.core.count(inst_45769);
var inst_45751 = inst_45770;
var inst_45752 = inst_45769;
var inst_45753 = inst_45771;
var inst_45754 = (0);
var state_45799__$1 = (function (){var statearr_45830 = state_45799;
(statearr_45830[(9)] = inst_45751);

(statearr_45830[(10)] = inst_45752);

(statearr_45830[(11)] = inst_45754);

(statearr_45830[(12)] = inst_45753);

return statearr_45830;
})();
var statearr_45831_46902 = state_45799__$1;
(statearr_45831_46902[(2)] = null);

(statearr_45831_46902[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45800 === (3))){
var inst_45797 = (state_45799[(2)]);
var state_45799__$1 = state_45799;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45799__$1,inst_45797);
} else {
if((state_val_45800 === (12))){
var inst_45785 = (state_45799[(2)]);
var state_45799__$1 = state_45799;
var statearr_45834_46903 = state_45799__$1;
(statearr_45834_46903[(2)] = inst_45785);

(statearr_45834_46903[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45800 === (2))){
var state_45799__$1 = state_45799;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45799__$1,(4),in$);
} else {
if((state_val_45800 === (23))){
var inst_45793 = (state_45799[(2)]);
var state_45799__$1 = state_45799;
var statearr_45837_46904 = state_45799__$1;
(statearr_45837_46904[(2)] = inst_45793);

(statearr_45837_46904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45800 === (19))){
var inst_45780 = (state_45799[(2)]);
var state_45799__$1 = state_45799;
var statearr_45838_46907 = state_45799__$1;
(statearr_45838_46907[(2)] = inst_45780);

(statearr_45838_46907[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45800 === (11))){
var inst_45751 = (state_45799[(9)]);
var inst_45765 = (state_45799[(7)]);
var inst_45765__$1 = cljs.core.seq(inst_45751);
var state_45799__$1 = (function (){var statearr_45840 = state_45799;
(statearr_45840[(7)] = inst_45765__$1);

return statearr_45840;
})();
if(inst_45765__$1){
var statearr_45842_46908 = state_45799__$1;
(statearr_45842_46908[(1)] = (14));

} else {
var statearr_45843_46910 = state_45799__$1;
(statearr_45843_46910[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45800 === (9))){
var inst_45787 = (state_45799[(2)]);
var inst_45788 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_45799__$1 = (function (){var statearr_45844 = state_45799;
(statearr_45844[(15)] = inst_45787);

return statearr_45844;
})();
if(cljs.core.truth_(inst_45788)){
var statearr_45845_46911 = state_45799__$1;
(statearr_45845_46911[(1)] = (21));

} else {
var statearr_45846_46913 = state_45799__$1;
(statearr_45846_46913[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45800 === (5))){
var inst_45743 = cljs.core.async.close_BANG_(out);
var state_45799__$1 = state_45799;
var statearr_45847_46914 = state_45799__$1;
(statearr_45847_46914[(2)] = inst_45743);

(statearr_45847_46914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45800 === (14))){
var inst_45765 = (state_45799[(7)]);
var inst_45767 = cljs.core.chunked_seq_QMARK_(inst_45765);
var state_45799__$1 = state_45799;
if(inst_45767){
var statearr_45852_46915 = state_45799__$1;
(statearr_45852_46915[(1)] = (17));

} else {
var statearr_45853_46916 = state_45799__$1;
(statearr_45853_46916[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45800 === (16))){
var inst_45783 = (state_45799[(2)]);
var state_45799__$1 = state_45799;
var statearr_45854_46917 = state_45799__$1;
(statearr_45854_46917[(2)] = inst_45783);

(statearr_45854_46917[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45800 === (10))){
var inst_45752 = (state_45799[(10)]);
var inst_45754 = (state_45799[(11)]);
var inst_45759 = cljs.core._nth(inst_45752,inst_45754);
var state_45799__$1 = state_45799;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45799__$1,(13),out,inst_45759);
} else {
if((state_val_45800 === (18))){
var inst_45765 = (state_45799[(7)]);
var inst_45774 = cljs.core.first(inst_45765);
var state_45799__$1 = state_45799;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45799__$1,(20),out,inst_45774);
} else {
if((state_val_45800 === (8))){
var inst_45754 = (state_45799[(11)]);
var inst_45753 = (state_45799[(12)]);
var inst_45756 = (inst_45754 < inst_45753);
var inst_45757 = inst_45756;
var state_45799__$1 = state_45799;
if(cljs.core.truth_(inst_45757)){
var statearr_45855_46920 = state_45799__$1;
(statearr_45855_46920[(1)] = (10));

} else {
var statearr_45858_46921 = state_45799__$1;
(statearr_45858_46921[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__43291__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__43291__auto____0 = (function (){
var statearr_45861 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45861[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__43291__auto__);

(statearr_45861[(1)] = (1));

return statearr_45861;
});
var cljs$core$async$mapcat_STAR__$_state_machine__43291__auto____1 = (function (state_45799){
while(true){
var ret_value__43292__auto__ = (function (){try{while(true){
var result__43293__auto__ = switch__43290__auto__(state_45799);
if(cljs.core.keyword_identical_QMARK_(result__43293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43293__auto__;
}
break;
}
}catch (e45862){var ex__43294__auto__ = e45862;
var statearr_45863_46926 = state_45799;
(statearr_45863_46926[(2)] = ex__43294__auto__);


if(cljs.core.seq((state_45799[(4)]))){
var statearr_45865_46927 = state_45799;
(statearr_45865_46927[(1)] = cljs.core.first((state_45799[(4)])));

} else {
throw ex__43294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46928 = state_45799;
state_45799 = G__46928;
continue;
} else {
return ret_value__43292__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__43291__auto__ = function(state_45799){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__43291__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__43291__auto____1.call(this,state_45799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__43291__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__43291__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__43291__auto__;
})()
})();
var state__43469__auto__ = (function (){var statearr_45869 = f__43468__auto__();
(statearr_45869[(6)] = c__43467__auto__);

return statearr_45869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43469__auto__);
}));

return c__43467__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__45872 = arguments.length;
switch (G__45872) {
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
var G__45878 = arguments.length;
switch (G__45878) {
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
var G__45882 = arguments.length;
switch (G__45882) {
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
var c__43467__auto___46932 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43468__auto__ = (function (){var switch__43290__auto__ = (function (state_45910){
var state_val_45911 = (state_45910[(1)]);
if((state_val_45911 === (7))){
var inst_45905 = (state_45910[(2)]);
var state_45910__$1 = state_45910;
var statearr_45912_46933 = state_45910__$1;
(statearr_45912_46933[(2)] = inst_45905);

(statearr_45912_46933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45911 === (1))){
var inst_45883 = null;
var state_45910__$1 = (function (){var statearr_45913 = state_45910;
(statearr_45913[(7)] = inst_45883);

return statearr_45913;
})();
var statearr_45914_46934 = state_45910__$1;
(statearr_45914_46934[(2)] = null);

(statearr_45914_46934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45911 === (4))){
var inst_45888 = (state_45910[(8)]);
var inst_45888__$1 = (state_45910[(2)]);
var inst_45891 = (inst_45888__$1 == null);
var inst_45892 = cljs.core.not(inst_45891);
var state_45910__$1 = (function (){var statearr_45915 = state_45910;
(statearr_45915[(8)] = inst_45888__$1);

return statearr_45915;
})();
if(inst_45892){
var statearr_45916_46935 = state_45910__$1;
(statearr_45916_46935[(1)] = (5));

} else {
var statearr_45917_46936 = state_45910__$1;
(statearr_45917_46936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45911 === (6))){
var state_45910__$1 = state_45910;
var statearr_45919_46937 = state_45910__$1;
(statearr_45919_46937[(2)] = null);

(statearr_45919_46937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45911 === (3))){
var inst_45907 = (state_45910[(2)]);
var inst_45908 = cljs.core.async.close_BANG_(out);
var state_45910__$1 = (function (){var statearr_45921 = state_45910;
(statearr_45921[(9)] = inst_45907);

return statearr_45921;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45910__$1,inst_45908);
} else {
if((state_val_45911 === (2))){
var state_45910__$1 = state_45910;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45910__$1,(4),ch);
} else {
if((state_val_45911 === (11))){
var inst_45888 = (state_45910[(8)]);
var inst_45899 = (state_45910[(2)]);
var inst_45883 = inst_45888;
var state_45910__$1 = (function (){var statearr_45922 = state_45910;
(statearr_45922[(10)] = inst_45899);

(statearr_45922[(7)] = inst_45883);

return statearr_45922;
})();
var statearr_45923_46939 = state_45910__$1;
(statearr_45923_46939[(2)] = null);

(statearr_45923_46939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45911 === (9))){
var inst_45888 = (state_45910[(8)]);
var state_45910__$1 = state_45910;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45910__$1,(11),out,inst_45888);
} else {
if((state_val_45911 === (5))){
var inst_45883 = (state_45910[(7)]);
var inst_45888 = (state_45910[(8)]);
var inst_45894 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45888,inst_45883);
var state_45910__$1 = state_45910;
if(inst_45894){
var statearr_45925_46940 = state_45910__$1;
(statearr_45925_46940[(1)] = (8));

} else {
var statearr_45926_46941 = state_45910__$1;
(statearr_45926_46941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45911 === (10))){
var inst_45902 = (state_45910[(2)]);
var state_45910__$1 = state_45910;
var statearr_45927_46942 = state_45910__$1;
(statearr_45927_46942[(2)] = inst_45902);

(statearr_45927_46942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45911 === (8))){
var inst_45883 = (state_45910[(7)]);
var tmp45924 = inst_45883;
var inst_45883__$1 = tmp45924;
var state_45910__$1 = (function (){var statearr_45930 = state_45910;
(statearr_45930[(7)] = inst_45883__$1);

return statearr_45930;
})();
var statearr_45931_46943 = state_45910__$1;
(statearr_45931_46943[(2)] = null);

(statearr_45931_46943[(1)] = (2));


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
var cljs$core$async$state_machine__43291__auto__ = null;
var cljs$core$async$state_machine__43291__auto____0 = (function (){
var statearr_45932 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45932[(0)] = cljs$core$async$state_machine__43291__auto__);

(statearr_45932[(1)] = (1));

return statearr_45932;
});
var cljs$core$async$state_machine__43291__auto____1 = (function (state_45910){
while(true){
var ret_value__43292__auto__ = (function (){try{while(true){
var result__43293__auto__ = switch__43290__auto__(state_45910);
if(cljs.core.keyword_identical_QMARK_(result__43293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43293__auto__;
}
break;
}
}catch (e45933){var ex__43294__auto__ = e45933;
var statearr_45935_46944 = state_45910;
(statearr_45935_46944[(2)] = ex__43294__auto__);


if(cljs.core.seq((state_45910[(4)]))){
var statearr_45937_46945 = state_45910;
(statearr_45937_46945[(1)] = cljs.core.first((state_45910[(4)])));

} else {
throw ex__43294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46946 = state_45910;
state_45910 = G__46946;
continue;
} else {
return ret_value__43292__auto__;
}
break;
}
});
cljs$core$async$state_machine__43291__auto__ = function(state_45910){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43291__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43291__auto____1.call(this,state_45910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43291__auto____0;
cljs$core$async$state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43291__auto____1;
return cljs$core$async$state_machine__43291__auto__;
})()
})();
var state__43469__auto__ = (function (){var statearr_45938 = f__43468__auto__();
(statearr_45938[(6)] = c__43467__auto___46932);

return statearr_45938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43469__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__45940 = arguments.length;
switch (G__45940) {
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
var c__43467__auto___46948 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43468__auto__ = (function (){var switch__43290__auto__ = (function (state_45978){
var state_val_45979 = (state_45978[(1)]);
if((state_val_45979 === (7))){
var inst_45974 = (state_45978[(2)]);
var state_45978__$1 = state_45978;
var statearr_45985_46953 = state_45978__$1;
(statearr_45985_46953[(2)] = inst_45974);

(statearr_45985_46953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45979 === (1))){
var inst_45941 = (new Array(n));
var inst_45942 = inst_45941;
var inst_45943 = (0);
var state_45978__$1 = (function (){var statearr_45986 = state_45978;
(statearr_45986[(7)] = inst_45943);

(statearr_45986[(8)] = inst_45942);

return statearr_45986;
})();
var statearr_45987_46954 = state_45978__$1;
(statearr_45987_46954[(2)] = null);

(statearr_45987_46954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45979 === (4))){
var inst_45946 = (state_45978[(9)]);
var inst_45946__$1 = (state_45978[(2)]);
var inst_45947 = (inst_45946__$1 == null);
var inst_45948 = cljs.core.not(inst_45947);
var state_45978__$1 = (function (){var statearr_45992 = state_45978;
(statearr_45992[(9)] = inst_45946__$1);

return statearr_45992;
})();
if(inst_45948){
var statearr_45993_46956 = state_45978__$1;
(statearr_45993_46956[(1)] = (5));

} else {
var statearr_45994_46957 = state_45978__$1;
(statearr_45994_46957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45979 === (15))){
var inst_45968 = (state_45978[(2)]);
var state_45978__$1 = state_45978;
var statearr_45997_46958 = state_45978__$1;
(statearr_45997_46958[(2)] = inst_45968);

(statearr_45997_46958[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45979 === (13))){
var state_45978__$1 = state_45978;
var statearr_45999_46959 = state_45978__$1;
(statearr_45999_46959[(2)] = null);

(statearr_45999_46959[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45979 === (6))){
var inst_45943 = (state_45978[(7)]);
var inst_45964 = (inst_45943 > (0));
var state_45978__$1 = state_45978;
if(cljs.core.truth_(inst_45964)){
var statearr_46005_46960 = state_45978__$1;
(statearr_46005_46960[(1)] = (12));

} else {
var statearr_46006_46961 = state_45978__$1;
(statearr_46006_46961[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45979 === (3))){
var inst_45976 = (state_45978[(2)]);
var state_45978__$1 = state_45978;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45978__$1,inst_45976);
} else {
if((state_val_45979 === (12))){
var inst_45942 = (state_45978[(8)]);
var inst_45966 = cljs.core.vec(inst_45942);
var state_45978__$1 = state_45978;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45978__$1,(15),out,inst_45966);
} else {
if((state_val_45979 === (2))){
var state_45978__$1 = state_45978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45978__$1,(4),ch);
} else {
if((state_val_45979 === (11))){
var inst_45958 = (state_45978[(2)]);
var inst_45959 = (new Array(n));
var inst_45942 = inst_45959;
var inst_45943 = (0);
var state_45978__$1 = (function (){var statearr_46015 = state_45978;
(statearr_46015[(10)] = inst_45958);

(statearr_46015[(7)] = inst_45943);

(statearr_46015[(8)] = inst_45942);

return statearr_46015;
})();
var statearr_46016_46963 = state_45978__$1;
(statearr_46016_46963[(2)] = null);

(statearr_46016_46963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45979 === (9))){
var inst_45942 = (state_45978[(8)]);
var inst_45956 = cljs.core.vec(inst_45942);
var state_45978__$1 = state_45978;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45978__$1,(11),out,inst_45956);
} else {
if((state_val_45979 === (5))){
var inst_45951 = (state_45978[(11)]);
var inst_45946 = (state_45978[(9)]);
var inst_45943 = (state_45978[(7)]);
var inst_45942 = (state_45978[(8)]);
var inst_45950 = (inst_45942[inst_45943] = inst_45946);
var inst_45951__$1 = (inst_45943 + (1));
var inst_45952 = (inst_45951__$1 < n);
var state_45978__$1 = (function (){var statearr_46020 = state_45978;
(statearr_46020[(11)] = inst_45951__$1);

(statearr_46020[(12)] = inst_45950);

return statearr_46020;
})();
if(cljs.core.truth_(inst_45952)){
var statearr_46024_46964 = state_45978__$1;
(statearr_46024_46964[(1)] = (8));

} else {
var statearr_46025_46965 = state_45978__$1;
(statearr_46025_46965[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45979 === (14))){
var inst_45971 = (state_45978[(2)]);
var inst_45972 = cljs.core.async.close_BANG_(out);
var state_45978__$1 = (function (){var statearr_46029 = state_45978;
(statearr_46029[(13)] = inst_45971);

return statearr_46029;
})();
var statearr_46033_46966 = state_45978__$1;
(statearr_46033_46966[(2)] = inst_45972);

(statearr_46033_46966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45979 === (10))){
var inst_45962 = (state_45978[(2)]);
var state_45978__$1 = state_45978;
var statearr_46036_46971 = state_45978__$1;
(statearr_46036_46971[(2)] = inst_45962);

(statearr_46036_46971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45979 === (8))){
var inst_45951 = (state_45978[(11)]);
var inst_45942 = (state_45978[(8)]);
var tmp46027 = inst_45942;
var inst_45942__$1 = tmp46027;
var inst_45943 = inst_45951;
var state_45978__$1 = (function (){var statearr_46037 = state_45978;
(statearr_46037[(7)] = inst_45943);

(statearr_46037[(8)] = inst_45942__$1);

return statearr_46037;
})();
var statearr_46038_46973 = state_45978__$1;
(statearr_46038_46973[(2)] = null);

(statearr_46038_46973[(1)] = (2));


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
var cljs$core$async$state_machine__43291__auto__ = null;
var cljs$core$async$state_machine__43291__auto____0 = (function (){
var statearr_46048 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46048[(0)] = cljs$core$async$state_machine__43291__auto__);

(statearr_46048[(1)] = (1));

return statearr_46048;
});
var cljs$core$async$state_machine__43291__auto____1 = (function (state_45978){
while(true){
var ret_value__43292__auto__ = (function (){try{while(true){
var result__43293__auto__ = switch__43290__auto__(state_45978);
if(cljs.core.keyword_identical_QMARK_(result__43293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43293__auto__;
}
break;
}
}catch (e46049){var ex__43294__auto__ = e46049;
var statearr_46050_46974 = state_45978;
(statearr_46050_46974[(2)] = ex__43294__auto__);


if(cljs.core.seq((state_45978[(4)]))){
var statearr_46051_46975 = state_45978;
(statearr_46051_46975[(1)] = cljs.core.first((state_45978[(4)])));

} else {
throw ex__43294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46976 = state_45978;
state_45978 = G__46976;
continue;
} else {
return ret_value__43292__auto__;
}
break;
}
});
cljs$core$async$state_machine__43291__auto__ = function(state_45978){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43291__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43291__auto____1.call(this,state_45978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43291__auto____0;
cljs$core$async$state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43291__auto____1;
return cljs$core$async$state_machine__43291__auto__;
})()
})();
var state__43469__auto__ = (function (){var statearr_46055 = f__43468__auto__();
(statearr_46055[(6)] = c__43467__auto___46948);

return statearr_46055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43469__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__46064 = arguments.length;
switch (G__46064) {
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
var c__43467__auto___46981 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43468__auto__ = (function (){var switch__43290__auto__ = (function (state_46111){
var state_val_46112 = (state_46111[(1)]);
if((state_val_46112 === (7))){
var inst_46107 = (state_46111[(2)]);
var state_46111__$1 = state_46111;
var statearr_46113_46982 = state_46111__$1;
(statearr_46113_46982[(2)] = inst_46107);

(statearr_46113_46982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46112 === (1))){
var inst_46067 = [];
var inst_46068 = inst_46067;
var inst_46069 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_46111__$1 = (function (){var statearr_46114 = state_46111;
(statearr_46114[(7)] = inst_46068);

(statearr_46114[(8)] = inst_46069);

return statearr_46114;
})();
var statearr_46115_46983 = state_46111__$1;
(statearr_46115_46983[(2)] = null);

(statearr_46115_46983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46112 === (4))){
var inst_46072 = (state_46111[(9)]);
var inst_46072__$1 = (state_46111[(2)]);
var inst_46073 = (inst_46072__$1 == null);
var inst_46074 = cljs.core.not(inst_46073);
var state_46111__$1 = (function (){var statearr_46116 = state_46111;
(statearr_46116[(9)] = inst_46072__$1);

return statearr_46116;
})();
if(inst_46074){
var statearr_46121_46984 = state_46111__$1;
(statearr_46121_46984[(1)] = (5));

} else {
var statearr_46122_46985 = state_46111__$1;
(statearr_46122_46985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46112 === (15))){
var inst_46068 = (state_46111[(7)]);
var inst_46099 = cljs.core.vec(inst_46068);
var state_46111__$1 = state_46111;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46111__$1,(18),out,inst_46099);
} else {
if((state_val_46112 === (13))){
var inst_46094 = (state_46111[(2)]);
var state_46111__$1 = state_46111;
var statearr_46131_46986 = state_46111__$1;
(statearr_46131_46986[(2)] = inst_46094);

(statearr_46131_46986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46112 === (6))){
var inst_46068 = (state_46111[(7)]);
var inst_46096 = inst_46068.length;
var inst_46097 = (inst_46096 > (0));
var state_46111__$1 = state_46111;
if(cljs.core.truth_(inst_46097)){
var statearr_46132_46987 = state_46111__$1;
(statearr_46132_46987[(1)] = (15));

} else {
var statearr_46133_46988 = state_46111__$1;
(statearr_46133_46988[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46112 === (17))){
var inst_46104 = (state_46111[(2)]);
var inst_46105 = cljs.core.async.close_BANG_(out);
var state_46111__$1 = (function (){var statearr_46134 = state_46111;
(statearr_46134[(10)] = inst_46104);

return statearr_46134;
})();
var statearr_46135_46989 = state_46111__$1;
(statearr_46135_46989[(2)] = inst_46105);

(statearr_46135_46989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46112 === (3))){
var inst_46109 = (state_46111[(2)]);
var state_46111__$1 = state_46111;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46111__$1,inst_46109);
} else {
if((state_val_46112 === (12))){
var inst_46068 = (state_46111[(7)]);
var inst_46087 = cljs.core.vec(inst_46068);
var state_46111__$1 = state_46111;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46111__$1,(14),out,inst_46087);
} else {
if((state_val_46112 === (2))){
var state_46111__$1 = state_46111;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46111__$1,(4),ch);
} else {
if((state_val_46112 === (11))){
var inst_46068 = (state_46111[(7)]);
var inst_46076 = (state_46111[(11)]);
var inst_46072 = (state_46111[(9)]);
var inst_46084 = inst_46068.push(inst_46072);
var tmp46136 = inst_46068;
var inst_46068__$1 = tmp46136;
var inst_46069 = inst_46076;
var state_46111__$1 = (function (){var statearr_46137 = state_46111;
(statearr_46137[(7)] = inst_46068__$1);

(statearr_46137[(12)] = inst_46084);

(statearr_46137[(8)] = inst_46069);

return statearr_46137;
})();
var statearr_46138_46990 = state_46111__$1;
(statearr_46138_46990[(2)] = null);

(statearr_46138_46990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46112 === (9))){
var inst_46069 = (state_46111[(8)]);
var inst_46080 = cljs.core.keyword_identical_QMARK_(inst_46069,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_46111__$1 = state_46111;
var statearr_46139_46991 = state_46111__$1;
(statearr_46139_46991[(2)] = inst_46080);

(statearr_46139_46991[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46112 === (5))){
var inst_46076 = (state_46111[(11)]);
var inst_46072 = (state_46111[(9)]);
var inst_46077 = (state_46111[(13)]);
var inst_46069 = (state_46111[(8)]);
var inst_46076__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46072) : f.call(null,inst_46072));
var inst_46077__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46076__$1,inst_46069);
var state_46111__$1 = (function (){var statearr_46140 = state_46111;
(statearr_46140[(11)] = inst_46076__$1);

(statearr_46140[(13)] = inst_46077__$1);

return statearr_46140;
})();
if(inst_46077__$1){
var statearr_46141_46992 = state_46111__$1;
(statearr_46141_46992[(1)] = (8));

} else {
var statearr_46142_46993 = state_46111__$1;
(statearr_46142_46993[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46112 === (14))){
var inst_46076 = (state_46111[(11)]);
var inst_46072 = (state_46111[(9)]);
var inst_46089 = (state_46111[(2)]);
var inst_46090 = [];
var inst_46091 = inst_46090.push(inst_46072);
var inst_46068 = inst_46090;
var inst_46069 = inst_46076;
var state_46111__$1 = (function (){var statearr_46143 = state_46111;
(statearr_46143[(7)] = inst_46068);

(statearr_46143[(14)] = inst_46089);

(statearr_46143[(15)] = inst_46091);

(statearr_46143[(8)] = inst_46069);

return statearr_46143;
})();
var statearr_46144_46995 = state_46111__$1;
(statearr_46144_46995[(2)] = null);

(statearr_46144_46995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46112 === (16))){
var state_46111__$1 = state_46111;
var statearr_46145_46996 = state_46111__$1;
(statearr_46145_46996[(2)] = null);

(statearr_46145_46996[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46112 === (10))){
var inst_46082 = (state_46111[(2)]);
var state_46111__$1 = state_46111;
if(cljs.core.truth_(inst_46082)){
var statearr_46146_46997 = state_46111__$1;
(statearr_46146_46997[(1)] = (11));

} else {
var statearr_46147_46998 = state_46111__$1;
(statearr_46147_46998[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46112 === (18))){
var inst_46101 = (state_46111[(2)]);
var state_46111__$1 = state_46111;
var statearr_46148_46999 = state_46111__$1;
(statearr_46148_46999[(2)] = inst_46101);

(statearr_46148_46999[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46112 === (8))){
var inst_46077 = (state_46111[(13)]);
var state_46111__$1 = state_46111;
var statearr_46149_47003 = state_46111__$1;
(statearr_46149_47003[(2)] = inst_46077);

(statearr_46149_47003[(1)] = (10));


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
var cljs$core$async$state_machine__43291__auto__ = null;
var cljs$core$async$state_machine__43291__auto____0 = (function (){
var statearr_46153 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46153[(0)] = cljs$core$async$state_machine__43291__auto__);

(statearr_46153[(1)] = (1));

return statearr_46153;
});
var cljs$core$async$state_machine__43291__auto____1 = (function (state_46111){
while(true){
var ret_value__43292__auto__ = (function (){try{while(true){
var result__43293__auto__ = switch__43290__auto__(state_46111);
if(cljs.core.keyword_identical_QMARK_(result__43293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43293__auto__;
}
break;
}
}catch (e46154){var ex__43294__auto__ = e46154;
var statearr_46155_47005 = state_46111;
(statearr_46155_47005[(2)] = ex__43294__auto__);


if(cljs.core.seq((state_46111[(4)]))){
var statearr_46156_47006 = state_46111;
(statearr_46156_47006[(1)] = cljs.core.first((state_46111[(4)])));

} else {
throw ex__43294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47007 = state_46111;
state_46111 = G__47007;
continue;
} else {
return ret_value__43292__auto__;
}
break;
}
});
cljs$core$async$state_machine__43291__auto__ = function(state_46111){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43291__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43291__auto____1.call(this,state_46111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43291__auto____0;
cljs$core$async$state_machine__43291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43291__auto____1;
return cljs$core$async$state_machine__43291__auto__;
})()
})();
var state__43469__auto__ = (function (){var statearr_46157 = f__43468__auto__();
(statearr_46157[(6)] = c__43467__auto___46981);

return statearr_46157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43469__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
