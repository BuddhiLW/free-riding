goog.provide('cljs.tools.reader.impl.errors');
cljs.tools.reader.impl.errors.ex_details = (function cljs$tools$reader$impl$errors$ex_details(rdr,ex_type){
var details = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098),new cljs.core.Keyword(null,"ex-kind","ex-kind",1581199296),ex_type], null);
if(cljs.tools.reader.reader_types.indexing_reader_QMARK_(rdr)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(details,new cljs.core.Keyword(null,"file","file",-1269645878),cljs.tools.reader.reader_types.get_file_name(rdr),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"line","line",212345235),cljs.tools.reader.reader_types.get_line_number(rdr),new cljs.core.Keyword(null,"col","col",-1959363084),cljs.tools.reader.reader_types.get_column_number(rdr)], 0));
} else {
return details;
}
});
/**
 * Throw an ex-info error.
 */
cljs.tools.reader.impl.errors.throw_ex = (function cljs$tools$reader$impl$errors$throw_ex(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34248 = arguments.length;
var i__5770__auto___34249 = (0);
while(true){
if((i__5770__auto___34249 < len__5769__auto___34248)){
args__5775__auto__.push((arguments[i__5770__auto___34249]));

var G__34250 = (i__5770__auto___34249 + (1));
i__5770__auto___34249 = G__34250;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return cljs.tools.reader.impl.errors.throw_ex.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(cljs.tools.reader.impl.errors.throw_ex.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,ex_type,msg){
var details = cljs.tools.reader.impl.errors.ex_details(rdr,ex_type);
var file = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(details);
var line = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(details);
var col = new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(details);
var msg1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)," "].join(''):null);
var msg2 = (cljs.core.truth_(line)?["[line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", col ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col),"]"].join(''):null);
var msg3 = (cljs.core.truth_((function (){var or__5045__auto__ = msg1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return msg2;
}
})())?" ":null);
var full_msg = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.str,msg1,msg2,msg3,msg);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(full_msg,details);
}));

(cljs.tools.reader.impl.errors.throw_ex.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.tools.reader.impl.errors.throw_ex.cljs$lang$applyTo = (function (seq34145){
var G__34146 = cljs.core.first(seq34145);
var seq34145__$1 = cljs.core.next(seq34145);
var G__34147 = cljs.core.first(seq34145__$1);
var seq34145__$2 = cljs.core.next(seq34145__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34146,G__34147,seq34145__$2);
}));

/**
 * Throws an ExceptionInfo with the given message.
 * If rdr is an IndexingReader, additional information about column and line number is provided
 */
cljs.tools.reader.impl.errors.reader_error = (function cljs$tools$reader$impl$errors$reader_error(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34251 = arguments.length;
var i__5770__auto___34253 = (0);
while(true){
if((i__5770__auto___34253 < len__5769__auto___34251)){
args__5775__auto__.push((arguments[i__5770__auto___34253]));

var G__34254 = (i__5770__auto___34253 + (1));
i__5770__auto___34253 = G__34254;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,msgs){
return cljs.tools.reader.impl.errors.throw_ex.cljs$core$IFn$_invoke$arity$variadic(rdr,new cljs.core.Keyword(null,"reader-error","reader-error",1610253121),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msgs)], 0));
}));

(cljs.tools.reader.impl.errors.reader_error.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.tools.reader.impl.errors.reader_error.cljs$lang$applyTo = (function (seq34152){
var G__34153 = cljs.core.first(seq34152);
var seq34152__$1 = cljs.core.next(seq34152);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34153,seq34152__$1);
}));

/**
 * Throws an ExceptionInfo with the given message.
 * If rdr is an IndexingReader, additional information about column and line number is provided
 */
cljs.tools.reader.impl.errors.illegal_arg_error = (function cljs$tools$reader$impl$errors$illegal_arg_error(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34265 = arguments.length;
var i__5770__auto___34266 = (0);
while(true){
if((i__5770__auto___34266 < len__5769__auto___34265)){
args__5775__auto__.push((arguments[i__5770__auto___34266]));

var G__34267 = (i__5770__auto___34266 + (1));
i__5770__auto___34266 = G__34267;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.tools.reader.impl.errors.illegal_arg_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.tools.reader.impl.errors.illegal_arg_error.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,msgs){
return cljs.tools.reader.impl.errors.throw_ex.cljs$core$IFn$_invoke$arity$variadic(rdr,new cljs.core.Keyword(null,"illegal-argument","illegal-argument",-1845493170),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msgs)], 0));
}));

(cljs.tools.reader.impl.errors.illegal_arg_error.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.tools.reader.impl.errors.illegal_arg_error.cljs$lang$applyTo = (function (seq34168){
var G__34169 = cljs.core.first(seq34168);
var seq34168__$1 = cljs.core.next(seq34168);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34169,seq34168__$1);
}));

/**
 * Throws an ExceptionInfo with the given message.
 * If rdr is an IndexingReader, additional information about column and line number is provided
 */
cljs.tools.reader.impl.errors.eof_error = (function cljs$tools$reader$impl$errors$eof_error(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34268 = arguments.length;
var i__5770__auto___34269 = (0);
while(true){
if((i__5770__auto___34269 < len__5769__auto___34268)){
args__5775__auto__.push((arguments[i__5770__auto___34269]));

var G__34270 = (i__5770__auto___34269 + (1));
i__5770__auto___34269 = G__34270;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,msgs){
return cljs.tools.reader.impl.errors.throw_ex.cljs$core$IFn$_invoke$arity$variadic(rdr,new cljs.core.Keyword(null,"eof","eof",-489063237),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msgs)], 0));
}));

(cljs.tools.reader.impl.errors.eof_error.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.tools.reader.impl.errors.eof_error.cljs$lang$applyTo = (function (seq34172){
var G__34173 = cljs.core.first(seq34172);
var seq34172__$1 = cljs.core.next(seq34172);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34173,seq34172__$1);
}));

cljs.tools.reader.impl.errors.throw_eof_delimited = (function cljs$tools$reader$impl$errors$throw_eof_delimited(var_args){
var G__34180 = arguments.length;
switch (G__34180) {
case 4:
return cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$core$IFn$_invoke$arity$4 = (function (rdr,kind,column,line){
return cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$core$IFn$_invoke$arity$5(rdr,kind,line,column,null);
}));

(cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$core$IFn$_invoke$arity$5 = (function (rdr,kind,line,column,n){
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unexpected EOF while reading ",(cljs.core.truth_(n)?["item ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)," of "].join(''):null),cljs.core.name(kind),(cljs.core.truth_(line)?[", starting at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," and column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):null),"."], 0));
}));

(cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$lang$maxFixedArity = 5);

cljs.tools.reader.impl.errors.throw_odd_map = (function cljs$tools$reader$impl$errors$throw_odd_map(rdr,line,col,elements){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["The map literal starting with ",cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$1(cljs.core.first(elements)),(cljs.core.truth_(line)?[" on line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join(''):null)," contains ",cljs.core.count(elements)," form(s). Map literals must contain an even number of forms."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid_number = (function cljs$tools$reader$impl$errors$throw_invalid_number(rdr,token){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid number: ",token,"."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid_unicode_literal = (function cljs$tools$reader$impl$errors$throw_invalid_unicode_literal(rdr,token){
throw cljs.tools.reader.impl.errors.illegal_arg_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid unicode literal: \\",token,"."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid_unicode_escape = (function cljs$tools$reader$impl$errors$throw_invalid_unicode_escape(rdr,ch){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid unicode escape: \\u",ch,"."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid = (function cljs$tools$reader$impl$errors$throw_invalid(rdr,kind,token){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid ",cljs.core.name(kind),": ",token,"."], 0));
});
cljs.tools.reader.impl.errors.throw_eof_at_start = (function cljs$tools$reader$impl$errors$throw_eof_at_start(rdr,kind){
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unexpected EOF while reading start of ",cljs.core.name(kind),"."], 0));
});
cljs.tools.reader.impl.errors.throw_bad_char = (function cljs$tools$reader$impl$errors$throw_bad_char(rdr,kind,ch){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid character: ",ch," found while reading ",cljs.core.name(kind),"."], 0));
});
cljs.tools.reader.impl.errors.throw_eof_at_dispatch = (function cljs$tools$reader$impl$errors$throw_eof_at_dispatch(rdr){
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unexpected EOF while reading dispatch character."], 0));
});
cljs.tools.reader.impl.errors.throw_unmatch_delimiter = (function cljs$tools$reader$impl$errors$throw_unmatch_delimiter(rdr,ch){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unmatched delimiter ",ch,"."], 0));
});
cljs.tools.reader.impl.errors.throw_eof_reading = (function cljs$tools$reader$impl$errors$throw_eof_reading(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34275 = arguments.length;
var i__5770__auto___34276 = (0);
while(true){
if((i__5770__auto___34276 < len__5769__auto___34275)){
args__5775__auto__.push((arguments[i__5770__auto___34276]));

var G__34277 = (i__5770__auto___34276 + (1));
i__5770__auto___34276 = G__34277;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return cljs.tools.reader.impl.errors.throw_eof_reading.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(cljs.tools.reader.impl.errors.throw_eof_reading.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,kind,start){
var init = (function (){var G__34204 = kind;
var G__34204__$1 = (((G__34204 instanceof cljs.core.Keyword))?G__34204.fqn:null);
switch (G__34204__$1) {
case "regex":
return "#\"";

break;
case "string":
return "\"";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34204__$1)].join('')));

}
})();
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unexpected EOF reading ",cljs.core.name(kind)," starting ",cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,init,start),"."], 0));
}));

(cljs.tools.reader.impl.errors.throw_eof_reading.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.tools.reader.impl.errors.throw_eof_reading.cljs$lang$applyTo = (function (seq34196){
var G__34197 = cljs.core.first(seq34196);
var seq34196__$1 = cljs.core.next(seq34196);
var G__34198 = cljs.core.first(seq34196__$1);
var seq34196__$2 = cljs.core.next(seq34196__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34197,G__34198,seq34196__$2);
}));

cljs.tools.reader.impl.errors.throw_invalid_unicode_char = (function cljs$tools$reader$impl$errors$throw_invalid_unicode_char(rdr,token){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid unicode character \\",token,"."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid_unicode_digit_in_token = (function cljs$tools$reader$impl$errors$throw_invalid_unicode_digit_in_token(rdr,ch,token){
return cljs.tools.reader.impl.errors.illegal_arg_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid digit ",ch," in unicode character \\",token,"."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid_unicode_digit = (function cljs$tools$reader$impl$errors$throw_invalid_unicode_digit(rdr,ch){
return cljs.tools.reader.impl.errors.illegal_arg_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid digit ",ch," in unicode character."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid_unicode_len = (function cljs$tools$reader$impl$errors$throw_invalid_unicode_len(rdr,actual,expected){
return cljs.tools.reader.impl.errors.illegal_arg_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid unicode literal. Unicode literals should be ",expected,"characters long. ","Value supplied is ",actual," characters long."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid_character_literal = (function cljs$tools$reader$impl$errors$throw_invalid_character_literal(rdr,token){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid character literal \\u",token,"."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid_octal_len = (function cljs$tools$reader$impl$errors$throw_invalid_octal_len(rdr,token){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid octal escape sequence in a character literal: ",token,". Octal escape sequences must be 3 or fewer digits."], 0));
});
cljs.tools.reader.impl.errors.throw_bad_octal_number = (function cljs$tools$reader$impl$errors$throw_bad_octal_number(rdr){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Octal escape sequence must be in range [0, 377]."], 0));
});
cljs.tools.reader.impl.errors.throw_unsupported_character = (function cljs$tools$reader$impl$errors$throw_unsupported_character(rdr,token){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unsupported character: ",token,"."], 0));
});
cljs.tools.reader.impl.errors.throw_eof_in_character = (function cljs$tools$reader$impl$errors$throw_eof_in_character(rdr){
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unexpected EOF while reading character."], 0));
});
cljs.tools.reader.impl.errors.throw_bad_escape_char = (function cljs$tools$reader$impl$errors$throw_bad_escape_char(rdr,ch){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unsupported escape character: \\",ch,"."], 0));
});
cljs.tools.reader.impl.errors.throw_single_colon = (function cljs$tools$reader$impl$errors$throw_single_colon(rdr){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["A single colon is not a valid keyword."], 0));
});
cljs.tools.reader.impl.errors.throw_bad_metadata = (function cljs$tools$reader$impl$errors$throw_bad_metadata(rdr,x){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Metadata cannot be ",cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$1(x),". Metadata must be a Symbol, Keyword, String or Map."], 0));
});
cljs.tools.reader.impl.errors.throw_bad_metadata_target = (function cljs$tools$reader$impl$errors$throw_bad_metadata_target(rdr,target){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Metadata can not be applied to ",cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$1(target),". ","Metadata can only be applied to IMetas."], 0));
});
cljs.tools.reader.impl.errors.throw_feature_not_keyword = (function cljs$tools$reader$impl$errors$throw_feature_not_keyword(rdr,feature){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Feature cannot be ",cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$1(feature),". Features must be keywords."], 0));
});
cljs.tools.reader.impl.errors.throw_ns_map_no_map = (function cljs$tools$reader$impl$errors$throw_ns_map_no_map(rdr,ns_name){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Namespaced map with namespace ",ns_name," does not specify a map."], 0));
});
cljs.tools.reader.impl.errors.throw_bad_ns = (function cljs$tools$reader$impl$errors$throw_bad_ns(rdr,ns_name){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid value used as namespace in namespaced map: ",ns_name,"."], 0));
});
cljs.tools.reader.impl.errors.throw_bad_reader_tag = (function cljs$tools$reader$impl$errors$throw_bad_reader_tag(rdr,tag){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid reader tag: ",cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$1(tag),". Reader tags must be symbols."], 0));
});
cljs.tools.reader.impl.errors.throw_unknown_reader_tag = (function cljs$tools$reader$impl$errors$throw_unknown_reader_tag(rdr,tag){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No reader function for tag ",cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$1(tag),"."], 0));
});
cljs.tools.reader.impl.errors.duplicate_keys_error = (function cljs$tools$reader$impl$errors$duplicate_keys_error(msg,coll){
var duplicates = (function cljs$tools$reader$impl$errors$duplicate_keys_error_$_duplicates(seq){
var iter__5523__auto__ = (function cljs$tools$reader$impl$errors$duplicate_keys_error_$_duplicates_$_iter__34236(s__34237){
return (new cljs.core.LazySeq(null,(function (){
var s__34237__$1 = s__34237;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__34237__$1);
if(temp__5804__auto__){
var s__34237__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34237__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__34237__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__34239 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__34238 = (0);
while(true){
if((i__34238 < size__5522__auto__)){
var vec__34241 = cljs.core._nth(c__5521__auto__,i__34238);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34241,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34241,(1),null);
if((freq > (1))){
cljs.core.chunk_append(b__34239,id);

var G__34286 = (i__34238 + (1));
i__34238 = G__34286;
continue;
} else {
var G__34287 = (i__34238 + (1));
i__34238 = G__34287;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34239),cljs$tools$reader$impl$errors$duplicate_keys_error_$_duplicates_$_iter__34236(cljs.core.chunk_rest(s__34237__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34239),null);
}
} else {
var vec__34244 = cljs.core.first(s__34237__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34244,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34244,(1),null);
if((freq > (1))){
return cljs.core.cons(id,cljs$tools$reader$impl$errors$duplicate_keys_error_$_duplicates_$_iter__34236(cljs.core.rest(s__34237__$2)));
} else {
var G__34288 = cljs.core.rest(s__34237__$2);
s__34237__$1 = G__34288;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.frequencies(seq));
});
var dups = duplicates(coll);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.str,msg,(((cljs.core.count(dups) > (1)))?"s":null),": ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",dups));
});
cljs.tools.reader.impl.errors.throw_dup_keys = (function cljs$tools$reader$impl$errors$throw_dup_keys(rdr,kind,ks){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.tools.reader.impl.errors.duplicate_keys_error([clojure.string.capitalize(cljs.core.name(kind))," literal contains duplicate key"].join(''),ks)], 0));
});
cljs.tools.reader.impl.errors.throw_eof_error = (function cljs$tools$reader$impl$errors$throw_eof_error(rdr,line){
if(cljs.core.truth_(line)){
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["EOF while reading, starting at line ",line,"."], 0));
} else {
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["EOF while reading."], 0));
}
});

//# sourceMappingURL=cljs.tools.reader.impl.errors.js.map
