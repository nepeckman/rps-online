// Compiled by ClojureScript 1.9.14 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__8341__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__8340 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__8340,(0),null);
var body = cljs.core.nthnext.call(null,vec__8340,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__8341 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8342__i = 0, G__8342__a = new Array(arguments.length -  0);
while (G__8342__i < G__8342__a.length) {G__8342__a[G__8342__i] = arguments[G__8342__i + 0]; ++G__8342__i;}
  args = new cljs.core.IndexedSeq(G__8342__a,0);
} 
return G__8341__delegate.call(this,args);};
G__8341.cljs$lang$maxFixedArity = 0;
G__8341.cljs$lang$applyTo = (function (arglist__8343){
var args = cljs.core.seq(arglist__8343);
return G__8341__delegate(args);
});
G__8341.cljs$core$IFn$_invoke$arity$variadic = G__8341__delegate;
return G__8341;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__7327__auto__ = (function sablono$core$update_arglists_$_iter__8348(s__8349){
return (new cljs.core.LazySeq(null,(function (){
var s__8349__$1 = s__8349;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__8349__$1);
if(temp__4657__auto__){
var s__8349__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8349__$2)){
var c__7325__auto__ = cljs.core.chunk_first.call(null,s__8349__$2);
var size__7326__auto__ = cljs.core.count.call(null,c__7325__auto__);
var b__8351 = cljs.core.chunk_buffer.call(null,size__7326__auto__);
if((function (){var i__8350 = (0);
while(true){
if((i__8350 < size__7326__auto__)){
var args = cljs.core._nth.call(null,c__7325__auto__,i__8350);
cljs.core.chunk_append.call(null,b__8351,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__8352 = (i__8350 + (1));
i__8350 = G__8352;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8351),sablono$core$update_arglists_$_iter__8348.call(null,cljs.core.chunk_rest.call(null,s__8349__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8351),null);
}
} else {
var args = cljs.core.first.call(null,s__8349__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__8348.call(null,cljs.core.rest.call(null,s__8349__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7327__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__7629__auto__ = [];
var len__7622__auto___8358 = arguments.length;
var i__7623__auto___8359 = (0);
while(true){
if((i__7623__auto___8359 < len__7622__auto___8358)){
args__7629__auto__.push((arguments[i__7623__auto___8359]));

var G__8360 = (i__7623__auto___8359 + (1));
i__7623__auto___8359 = G__8360;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((0) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__7630__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__7327__auto__ = (function sablono$core$iter__8354(s__8355){
return (new cljs.core.LazySeq(null,(function (){
var s__8355__$1 = s__8355;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__8355__$1);
if(temp__4657__auto__){
var s__8355__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8355__$2)){
var c__7325__auto__ = cljs.core.chunk_first.call(null,s__8355__$2);
var size__7326__auto__ = cljs.core.count.call(null,c__7325__auto__);
var b__8357 = cljs.core.chunk_buffer.call(null,size__7326__auto__);
if((function (){var i__8356 = (0);
while(true){
if((i__8356 < size__7326__auto__)){
var style = cljs.core._nth.call(null,c__7325__auto__,i__8356);
cljs.core.chunk_append.call(null,b__8357,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__8361 = (i__8356 + (1));
i__8356 = G__8361;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8357),sablono$core$iter__8354.call(null,cljs.core.chunk_rest.call(null,s__8355__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8357),null);
}
} else {
var style = cljs.core.first.call(null,s__8355__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__8354.call(null,cljs.core.rest.call(null,s__8355__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7327__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq8353){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8353));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to8362 = (function sablono$core$link_to8362(var_args){
var args__7629__auto__ = [];
var len__7622__auto___8365 = arguments.length;
var i__7623__auto___8366 = (0);
while(true){
if((i__7623__auto___8366 < len__7622__auto___8365)){
args__7629__auto__.push((arguments[i__7623__auto___8366]));

var G__8367 = (i__7623__auto___8366 + (1));
i__7623__auto___8366 = G__8367;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((1) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to8362.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7630__auto__);
});

sablono.core.link_to8362.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to8362.cljs$lang$maxFixedArity = (1);

sablono.core.link_to8362.cljs$lang$applyTo = (function (seq8363){
var G__8364 = cljs.core.first.call(null,seq8363);
var seq8363__$1 = cljs.core.next.call(null,seq8363);
return sablono.core.link_to8362.cljs$core$IFn$_invoke$arity$variadic(G__8364,seq8363__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to8362);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to8368 = (function sablono$core$mail_to8368(var_args){
var args__7629__auto__ = [];
var len__7622__auto___8373 = arguments.length;
var i__7623__auto___8374 = (0);
while(true){
if((i__7623__auto___8374 < len__7622__auto___8373)){
args__7629__auto__.push((arguments[i__7623__auto___8374]));

var G__8375 = (i__7623__auto___8374 + (1));
i__7623__auto___8374 = G__8375;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((1) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to8368.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7630__auto__);
});

sablono.core.mail_to8368.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__8371){
var vec__8372 = p__8371;
var content = cljs.core.nth.call(null,vec__8372,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__6547__auto__ = content;
if(cljs.core.truth_(or__6547__auto__)){
return or__6547__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to8368.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to8368.cljs$lang$applyTo = (function (seq8369){
var G__8370 = cljs.core.first.call(null,seq8369);
var seq8369__$1 = cljs.core.next.call(null,seq8369);
return sablono.core.mail_to8368.cljs$core$IFn$_invoke$arity$variadic(G__8370,seq8369__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to8368);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list8376 = (function sablono$core$unordered_list8376(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__7327__auto__ = (function sablono$core$unordered_list8376_$_iter__8381(s__8382){
return (new cljs.core.LazySeq(null,(function (){
var s__8382__$1 = s__8382;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__8382__$1);
if(temp__4657__auto__){
var s__8382__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8382__$2)){
var c__7325__auto__ = cljs.core.chunk_first.call(null,s__8382__$2);
var size__7326__auto__ = cljs.core.count.call(null,c__7325__auto__);
var b__8384 = cljs.core.chunk_buffer.call(null,size__7326__auto__);
if((function (){var i__8383 = (0);
while(true){
if((i__8383 < size__7326__auto__)){
var x = cljs.core._nth.call(null,c__7325__auto__,i__8383);
cljs.core.chunk_append.call(null,b__8384,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__8385 = (i__8383 + (1));
i__8383 = G__8385;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8384),sablono$core$unordered_list8376_$_iter__8381.call(null,cljs.core.chunk_rest.call(null,s__8382__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8384),null);
}
} else {
var x = cljs.core.first.call(null,s__8382__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list8376_$_iter__8381.call(null,cljs.core.rest.call(null,s__8382__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7327__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list8376);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list8386 = (function sablono$core$ordered_list8386(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__7327__auto__ = (function sablono$core$ordered_list8386_$_iter__8391(s__8392){
return (new cljs.core.LazySeq(null,(function (){
var s__8392__$1 = s__8392;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__8392__$1);
if(temp__4657__auto__){
var s__8392__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8392__$2)){
var c__7325__auto__ = cljs.core.chunk_first.call(null,s__8392__$2);
var size__7326__auto__ = cljs.core.count.call(null,c__7325__auto__);
var b__8394 = cljs.core.chunk_buffer.call(null,size__7326__auto__);
if((function (){var i__8393 = (0);
while(true){
if((i__8393 < size__7326__auto__)){
var x = cljs.core._nth.call(null,c__7325__auto__,i__8393);
cljs.core.chunk_append.call(null,b__8394,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__8395 = (i__8393 + (1));
i__8393 = G__8395;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8394),sablono$core$ordered_list8386_$_iter__8391.call(null,cljs.core.chunk_rest.call(null,s__8392__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8394),null);
}
} else {
var x = cljs.core.first.call(null,s__8392__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list8386_$_iter__8391.call(null,cljs.core.rest.call(null,s__8392__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7327__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list8386);
/**
 * Create an image element.
 */
sablono.core.image8396 = (function sablono$core$image8396(var_args){
var args8397 = [];
var len__7622__auto___8400 = arguments.length;
var i__7623__auto___8401 = (0);
while(true){
if((i__7623__auto___8401 < len__7622__auto___8400)){
args8397.push((arguments[i__7623__auto___8401]));

var G__8402 = (i__7623__auto___8401 + (1));
i__7623__auto___8401 = G__8402;
continue;
} else {
}
break;
}

var G__8399 = args8397.length;
switch (G__8399) {
case 1:
return sablono.core.image8396.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image8396.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8397.length)].join('')));

}
});

sablono.core.image8396.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image8396.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image8396.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image8396);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__8404_SHARP_,p2__8405_SHARP_){
return [cljs.core.str(p1__8404_SHARP_),cljs.core.str("["),cljs.core.str(p2__8405_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__8406_SHARP_,p2__8407_SHARP_){
return [cljs.core.str(p1__8406_SHARP_),cljs.core.str("-"),cljs.core.str(p2__8407_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__6547__auto__ = value;
if(cljs.core.truth_(or__6547__auto__)){
return or__6547__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field8408 = (function sablono$core$color_field8408(var_args){
var args8409 = [];
var len__7622__auto___8476 = arguments.length;
var i__7623__auto___8477 = (0);
while(true){
if((i__7623__auto___8477 < len__7622__auto___8476)){
args8409.push((arguments[i__7623__auto___8477]));

var G__8478 = (i__7623__auto___8477 + (1));
i__7623__auto___8477 = G__8478;
continue;
} else {
}
break;
}

var G__8411 = args8409.length;
switch (G__8411) {
case 1:
return sablono.core.color_field8408.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field8408.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8409.length)].join('')));

}
});

sablono.core.color_field8408.cljs$core$IFn$_invoke$arity$1 = (function (name__8329__auto__){
return sablono.core.color_field8408.call(null,name__8329__auto__,null);
});

sablono.core.color_field8408.cljs$core$IFn$_invoke$arity$2 = (function (name__8329__auto__,value__8330__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__8329__auto__,value__8330__auto__);
});

sablono.core.color_field8408.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field8408);

/**
 * Creates a date input field.
 */
sablono.core.date_field8412 = (function sablono$core$date_field8412(var_args){
var args8413 = [];
var len__7622__auto___8480 = arguments.length;
var i__7623__auto___8481 = (0);
while(true){
if((i__7623__auto___8481 < len__7622__auto___8480)){
args8413.push((arguments[i__7623__auto___8481]));

var G__8482 = (i__7623__auto___8481 + (1));
i__7623__auto___8481 = G__8482;
continue;
} else {
}
break;
}

var G__8415 = args8413.length;
switch (G__8415) {
case 1:
return sablono.core.date_field8412.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field8412.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8413.length)].join('')));

}
});

sablono.core.date_field8412.cljs$core$IFn$_invoke$arity$1 = (function (name__8329__auto__){
return sablono.core.date_field8412.call(null,name__8329__auto__,null);
});

sablono.core.date_field8412.cljs$core$IFn$_invoke$arity$2 = (function (name__8329__auto__,value__8330__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__8329__auto__,value__8330__auto__);
});

sablono.core.date_field8412.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field8412);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field8416 = (function sablono$core$datetime_field8416(var_args){
var args8417 = [];
var len__7622__auto___8484 = arguments.length;
var i__7623__auto___8485 = (0);
while(true){
if((i__7623__auto___8485 < len__7622__auto___8484)){
args8417.push((arguments[i__7623__auto___8485]));

var G__8486 = (i__7623__auto___8485 + (1));
i__7623__auto___8485 = G__8486;
continue;
} else {
}
break;
}

var G__8419 = args8417.length;
switch (G__8419) {
case 1:
return sablono.core.datetime_field8416.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field8416.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8417.length)].join('')));

}
});

sablono.core.datetime_field8416.cljs$core$IFn$_invoke$arity$1 = (function (name__8329__auto__){
return sablono.core.datetime_field8416.call(null,name__8329__auto__,null);
});

sablono.core.datetime_field8416.cljs$core$IFn$_invoke$arity$2 = (function (name__8329__auto__,value__8330__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__8329__auto__,value__8330__auto__);
});

sablono.core.datetime_field8416.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field8416);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field8420 = (function sablono$core$datetime_local_field8420(var_args){
var args8421 = [];
var len__7622__auto___8488 = arguments.length;
var i__7623__auto___8489 = (0);
while(true){
if((i__7623__auto___8489 < len__7622__auto___8488)){
args8421.push((arguments[i__7623__auto___8489]));

var G__8490 = (i__7623__auto___8489 + (1));
i__7623__auto___8489 = G__8490;
continue;
} else {
}
break;
}

var G__8423 = args8421.length;
switch (G__8423) {
case 1:
return sablono.core.datetime_local_field8420.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field8420.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8421.length)].join('')));

}
});

sablono.core.datetime_local_field8420.cljs$core$IFn$_invoke$arity$1 = (function (name__8329__auto__){
return sablono.core.datetime_local_field8420.call(null,name__8329__auto__,null);
});

sablono.core.datetime_local_field8420.cljs$core$IFn$_invoke$arity$2 = (function (name__8329__auto__,value__8330__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__8329__auto__,value__8330__auto__);
});

sablono.core.datetime_local_field8420.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field8420);

/**
 * Creates a email input field.
 */
sablono.core.email_field8424 = (function sablono$core$email_field8424(var_args){
var args8425 = [];
var len__7622__auto___8492 = arguments.length;
var i__7623__auto___8493 = (0);
while(true){
if((i__7623__auto___8493 < len__7622__auto___8492)){
args8425.push((arguments[i__7623__auto___8493]));

var G__8494 = (i__7623__auto___8493 + (1));
i__7623__auto___8493 = G__8494;
continue;
} else {
}
break;
}

var G__8427 = args8425.length;
switch (G__8427) {
case 1:
return sablono.core.email_field8424.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field8424.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8425.length)].join('')));

}
});

sablono.core.email_field8424.cljs$core$IFn$_invoke$arity$1 = (function (name__8329__auto__){
return sablono.core.email_field8424.call(null,name__8329__auto__,null);
});

sablono.core.email_field8424.cljs$core$IFn$_invoke$arity$2 = (function (name__8329__auto__,value__8330__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__8329__auto__,value__8330__auto__);
});

sablono.core.email_field8424.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field8424);

/**
 * Creates a file input field.
 */
sablono.core.file_field8428 = (function sablono$core$file_field8428(var_args){
var args8429 = [];
var len__7622__auto___8496 = arguments.length;
var i__7623__auto___8497 = (0);
while(true){
if((i__7623__auto___8497 < len__7622__auto___8496)){
args8429.push((arguments[i__7623__auto___8497]));

var G__8498 = (i__7623__auto___8497 + (1));
i__7623__auto___8497 = G__8498;
continue;
} else {
}
break;
}

var G__8431 = args8429.length;
switch (G__8431) {
case 1:
return sablono.core.file_field8428.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field8428.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8429.length)].join('')));

}
});

sablono.core.file_field8428.cljs$core$IFn$_invoke$arity$1 = (function (name__8329__auto__){
return sablono.core.file_field8428.call(null,name__8329__auto__,null);
});

sablono.core.file_field8428.cljs$core$IFn$_invoke$arity$2 = (function (name__8329__auto__,value__8330__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__8329__auto__,value__8330__auto__);
});

sablono.core.file_field8428.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field8428);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field8432 = (function sablono$core$hidden_field8432(var_args){
var args8433 = [];
var len__7622__auto___8500 = arguments.length;
var i__7623__auto___8501 = (0);
while(true){
if((i__7623__auto___8501 < len__7622__auto___8500)){
args8433.push((arguments[i__7623__auto___8501]));

var G__8502 = (i__7623__auto___8501 + (1));
i__7623__auto___8501 = G__8502;
continue;
} else {
}
break;
}

var G__8435 = args8433.length;
switch (G__8435) {
case 1:
return sablono.core.hidden_field8432.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field8432.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8433.length)].join('')));

}
});

sablono.core.hidden_field8432.cljs$core$IFn$_invoke$arity$1 = (function (name__8329__auto__){
return sablono.core.hidden_field8432.call(null,name__8329__auto__,null);
});

sablono.core.hidden_field8432.cljs$core$IFn$_invoke$arity$2 = (function (name__8329__auto__,value__8330__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__8329__auto__,value__8330__auto__);
});

sablono.core.hidden_field8432.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field8432);

/**
 * Creates a month input field.
 */
sablono.core.month_field8436 = (function sablono$core$month_field8436(var_args){
var args8437 = [];
var len__7622__auto___8504 = arguments.length;
var i__7623__auto___8505 = (0);
while(true){
if((i__7623__auto___8505 < len__7622__auto___8504)){
args8437.push((arguments[i__7623__auto___8505]));

var G__8506 = (i__7623__auto___8505 + (1));
i__7623__auto___8505 = G__8506;
continue;
} else {
}
break;
}

var G__8439 = args8437.length;
switch (G__8439) {
case 1:
return sablono.core.month_field8436.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field8436.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8437.length)].join('')));

}
});

sablono.core.month_field8436.cljs$core$IFn$_invoke$arity$1 = (function (name__8329__auto__){
return sablono.core.month_field8436.call(null,name__8329__auto__,null);
});

sablono.core.month_field8436.cljs$core$IFn$_invoke$arity$2 = (function (name__8329__auto__,value__8330__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__8329__auto__,value__8330__auto__);
});

sablono.core.month_field8436.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field8436);

/**
 * Creates a number input field.
 */
sablono.core.number_field8440 = (function sablono$core$number_field8440(var_args){
var args8441 = [];
var len__7622__auto___8508 = arguments.length;
var i__7623__auto___8509 = (0);
while(true){
if((i__7623__auto___8509 < len__7622__auto___8508)){
args8441.push((arguments[i__7623__auto___8509]));

var G__8510 = (i__7623__auto___8509 + (1));
i__7623__auto___8509 = G__8510;
continue;
} else {
}
break;
}

var G__8443 = args8441.length;
switch (G__8443) {
case 1:
return sablono.core.number_field8440.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field8440.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8441.length)].join('')));

}
});

sablono.core.number_field8440.cljs$core$IFn$_invoke$arity$1 = (function (name__8329__auto__){
return sablono.core.number_field8440.call(null,name__8329__auto__,null);
});

sablono.core.number_field8440.cljs$core$IFn$_invoke$arity$2 = (function (name__8329__auto__,value__8330__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__8329__auto__,value__8330__auto__);
});

sablono.core.number_field8440.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field8440);

/**
 * Creates a password input field.
 */
sablono.core.password_field8444 = (function sablono$core$password_field8444(var_args){
var args8445 = [];
var len__7622__auto___8512 = arguments.length;
var i__7623__auto___8513 = (0);
while(true){
if((i__7623__auto___8513 < len__7622__auto___8512)){
args8445.push((arguments[i__7623__auto___8513]));

var G__8514 = (i__7623__auto___8513 + (1));
i__7623__auto___8513 = G__8514;
continue;
} else {
}
break;
}

var G__8447 = args8445.length;
switch (G__8447) {
case 1:
return sablono.core.password_field8444.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field8444.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8445.length)].join('')));

}
});

sablono.core.password_field8444.cljs$core$IFn$_invoke$arity$1 = (function (name__8329__auto__){
return sablono.core.password_field8444.call(null,name__8329__auto__,null);
});

sablono.core.password_field8444.cljs$core$IFn$_invoke$arity$2 = (function (name__8329__auto__,value__8330__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__8329__auto__,value__8330__auto__);
});

sablono.core.password_field8444.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field8444);

/**
 * Creates a range input field.
 */
sablono.core.range_field8448 = (function sablono$core$range_field8448(var_args){
var args8449 = [];
var len__7622__auto___8516 = arguments.length;
var i__7623__auto___8517 = (0);
while(true){
if((i__7623__auto___8517 < len__7622__auto___8516)){
args8449.push((arguments[i__7623__auto___8517]));

var G__8518 = (i__7623__auto___8517 + (1));
i__7623__auto___8517 = G__8518;
continue;
} else {
}
break;
}

var G__8451 = args8449.length;
switch (G__8451) {
case 1:
return sablono.core.range_field8448.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field8448.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8449.length)].join('')));

}
});

sablono.core.range_field8448.cljs$core$IFn$_invoke$arity$1 = (function (name__8329__auto__){
return sablono.core.range_field8448.call(null,name__8329__auto__,null);
});

sablono.core.range_field8448.cljs$core$IFn$_invoke$arity$2 = (function (name__8329__auto__,value__8330__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__8329__auto__,value__8330__auto__);
});

sablono.core.range_field8448.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field8448);

/**
 * Creates a search input field.
 */
sablono.core.search_field8452 = (function sablono$core$search_field8452(var_args){
var args8453 = [];
var len__7622__auto___8520 = arguments.length;
var i__7623__auto___8521 = (0);
while(true){
if((i__7623__auto___8521 < len__7622__auto___8520)){
args8453.push((arguments[i__7623__auto___8521]));

var G__8522 = (i__7623__auto___8521 + (1));
i__7623__auto___8521 = G__8522;
continue;
} else {
}
break;
}

var G__8455 = args8453.length;
switch (G__8455) {
case 1:
return sablono.core.search_field8452.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field8452.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8453.length)].join('')));

}
});

sablono.core.search_field8452.cljs$core$IFn$_invoke$arity$1 = (function (name__8329__auto__){
return sablono.core.search_field8452.call(null,name__8329__auto__,null);
});

sablono.core.search_field8452.cljs$core$IFn$_invoke$arity$2 = (function (name__8329__auto__,value__8330__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__8329__auto__,value__8330__auto__);
});

sablono.core.search_field8452.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field8452);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field8456 = (function sablono$core$tel_field8456(var_args){
var args8457 = [];
var len__7622__auto___8524 = arguments.length;
var i__7623__auto___8525 = (0);
while(true){
if((i__7623__auto___8525 < len__7622__auto___8524)){
args8457.push((arguments[i__7623__auto___8525]));

var G__8526 = (i__7623__auto___8525 + (1));
i__7623__auto___8525 = G__8526;
continue;
} else {
}
break;
}

var G__8459 = args8457.length;
switch (G__8459) {
case 1:
return sablono.core.tel_field8456.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field8456.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8457.length)].join('')));

}
});

sablono.core.tel_field8456.cljs$core$IFn$_invoke$arity$1 = (function (name__8329__auto__){
return sablono.core.tel_field8456.call(null,name__8329__auto__,null);
});

sablono.core.tel_field8456.cljs$core$IFn$_invoke$arity$2 = (function (name__8329__auto__,value__8330__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__8329__auto__,value__8330__auto__);
});

sablono.core.tel_field8456.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field8456);

/**
 * Creates a text input field.
 */
sablono.core.text_field8460 = (function sablono$core$text_field8460(var_args){
var args8461 = [];
var len__7622__auto___8528 = arguments.length;
var i__7623__auto___8529 = (0);
while(true){
if((i__7623__auto___8529 < len__7622__auto___8528)){
args8461.push((arguments[i__7623__auto___8529]));

var G__8530 = (i__7623__auto___8529 + (1));
i__7623__auto___8529 = G__8530;
continue;
} else {
}
break;
}

var G__8463 = args8461.length;
switch (G__8463) {
case 1:
return sablono.core.text_field8460.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field8460.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8461.length)].join('')));

}
});

sablono.core.text_field8460.cljs$core$IFn$_invoke$arity$1 = (function (name__8329__auto__){
return sablono.core.text_field8460.call(null,name__8329__auto__,null);
});

sablono.core.text_field8460.cljs$core$IFn$_invoke$arity$2 = (function (name__8329__auto__,value__8330__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__8329__auto__,value__8330__auto__);
});

sablono.core.text_field8460.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field8460);

/**
 * Creates a time input field.
 */
sablono.core.time_field8464 = (function sablono$core$time_field8464(var_args){
var args8465 = [];
var len__7622__auto___8532 = arguments.length;
var i__7623__auto___8533 = (0);
while(true){
if((i__7623__auto___8533 < len__7622__auto___8532)){
args8465.push((arguments[i__7623__auto___8533]));

var G__8534 = (i__7623__auto___8533 + (1));
i__7623__auto___8533 = G__8534;
continue;
} else {
}
break;
}

var G__8467 = args8465.length;
switch (G__8467) {
case 1:
return sablono.core.time_field8464.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field8464.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8465.length)].join('')));

}
});

sablono.core.time_field8464.cljs$core$IFn$_invoke$arity$1 = (function (name__8329__auto__){
return sablono.core.time_field8464.call(null,name__8329__auto__,null);
});

sablono.core.time_field8464.cljs$core$IFn$_invoke$arity$2 = (function (name__8329__auto__,value__8330__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__8329__auto__,value__8330__auto__);
});

sablono.core.time_field8464.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field8464);

/**
 * Creates a url input field.
 */
sablono.core.url_field8468 = (function sablono$core$url_field8468(var_args){
var args8469 = [];
var len__7622__auto___8536 = arguments.length;
var i__7623__auto___8537 = (0);
while(true){
if((i__7623__auto___8537 < len__7622__auto___8536)){
args8469.push((arguments[i__7623__auto___8537]));

var G__8538 = (i__7623__auto___8537 + (1));
i__7623__auto___8537 = G__8538;
continue;
} else {
}
break;
}

var G__8471 = args8469.length;
switch (G__8471) {
case 1:
return sablono.core.url_field8468.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field8468.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8469.length)].join('')));

}
});

sablono.core.url_field8468.cljs$core$IFn$_invoke$arity$1 = (function (name__8329__auto__){
return sablono.core.url_field8468.call(null,name__8329__auto__,null);
});

sablono.core.url_field8468.cljs$core$IFn$_invoke$arity$2 = (function (name__8329__auto__,value__8330__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__8329__auto__,value__8330__auto__);
});

sablono.core.url_field8468.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field8468);

/**
 * Creates a week input field.
 */
sablono.core.week_field8472 = (function sablono$core$week_field8472(var_args){
var args8473 = [];
var len__7622__auto___8540 = arguments.length;
var i__7623__auto___8541 = (0);
while(true){
if((i__7623__auto___8541 < len__7622__auto___8540)){
args8473.push((arguments[i__7623__auto___8541]));

var G__8542 = (i__7623__auto___8541 + (1));
i__7623__auto___8541 = G__8542;
continue;
} else {
}
break;
}

var G__8475 = args8473.length;
switch (G__8475) {
case 1:
return sablono.core.week_field8472.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field8472.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8473.length)].join('')));

}
});

sablono.core.week_field8472.cljs$core$IFn$_invoke$arity$1 = (function (name__8329__auto__){
return sablono.core.week_field8472.call(null,name__8329__auto__,null);
});

sablono.core.week_field8472.cljs$core$IFn$_invoke$arity$2 = (function (name__8329__auto__,value__8330__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__8329__auto__,value__8330__auto__);
});

sablono.core.week_field8472.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field8472);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box8544 = (function sablono$core$check_box8544(var_args){
var args8545 = [];
var len__7622__auto___8548 = arguments.length;
var i__7623__auto___8549 = (0);
while(true){
if((i__7623__auto___8549 < len__7622__auto___8548)){
args8545.push((arguments[i__7623__auto___8549]));

var G__8550 = (i__7623__auto___8549 + (1));
i__7623__auto___8549 = G__8550;
continue;
} else {
}
break;
}

var G__8547 = args8545.length;
switch (G__8547) {
case 1:
return sablono.core.check_box8544.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box8544.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box8544.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8545.length)].join('')));

}
});

sablono.core.check_box8544.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box8544.call(null,name,null);
});

sablono.core.check_box8544.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box8544.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box8544.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__6547__auto__ = value;
if(cljs.core.truth_(or__6547__auto__)){
return or__6547__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box8544.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box8544);
/**
 * Creates a radio button.
 */
sablono.core.radio_button8552 = (function sablono$core$radio_button8552(var_args){
var args8553 = [];
var len__7622__auto___8556 = arguments.length;
var i__7623__auto___8557 = (0);
while(true){
if((i__7623__auto___8557 < len__7622__auto___8556)){
args8553.push((arguments[i__7623__auto___8557]));

var G__8558 = (i__7623__auto___8557 + (1));
i__7623__auto___8557 = G__8558;
continue;
} else {
}
break;
}

var G__8555 = args8553.length;
switch (G__8555) {
case 1:
return sablono.core.radio_button8552.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button8552.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button8552.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8553.length)].join('')));

}
});

sablono.core.radio_button8552.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button8552.call(null,group,null);
});

sablono.core.radio_button8552.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button8552.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button8552.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__6547__auto__ = value;
if(cljs.core.truth_(or__6547__auto__)){
return or__6547__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button8552.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button8552);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options8560 = (function sablono$core$select_options8560(coll){
var iter__7327__auto__ = (function sablono$core$select_options8560_$_iter__8569(s__8570){
return (new cljs.core.LazySeq(null,(function (){
var s__8570__$1 = s__8570;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__8570__$1);
if(temp__4657__auto__){
var s__8570__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8570__$2)){
var c__7325__auto__ = cljs.core.chunk_first.call(null,s__8570__$2);
var size__7326__auto__ = cljs.core.count.call(null,c__7325__auto__);
var b__8572 = cljs.core.chunk_buffer.call(null,size__7326__auto__);
if((function (){var i__8571 = (0);
while(true){
if((i__8571 < size__7326__auto__)){
var x = cljs.core._nth.call(null,c__7325__auto__,i__8571);
cljs.core.chunk_append.call(null,b__8572,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__8575 = x;
var text = cljs.core.nth.call(null,vec__8575,(0),null);
var val = cljs.core.nth.call(null,vec__8575,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__8575,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options8560.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__8577 = (i__8571 + (1));
i__8571 = G__8577;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8572),sablono$core$select_options8560_$_iter__8569.call(null,cljs.core.chunk_rest.call(null,s__8570__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8572),null);
}
} else {
var x = cljs.core.first.call(null,s__8570__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__8576 = x;
var text = cljs.core.nth.call(null,vec__8576,(0),null);
var val = cljs.core.nth.call(null,vec__8576,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__8576,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options8560.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options8560_$_iter__8569.call(null,cljs.core.rest.call(null,s__8570__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7327__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options8560);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down8578 = (function sablono$core$drop_down8578(var_args){
var args8579 = [];
var len__7622__auto___8582 = arguments.length;
var i__7623__auto___8583 = (0);
while(true){
if((i__7623__auto___8583 < len__7622__auto___8582)){
args8579.push((arguments[i__7623__auto___8583]));

var G__8584 = (i__7623__auto___8583 + (1));
i__7623__auto___8583 = G__8584;
continue;
} else {
}
break;
}

var G__8581 = args8579.length;
switch (G__8581) {
case 2:
return sablono.core.drop_down8578.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down8578.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8579.length)].join('')));

}
});

sablono.core.drop_down8578.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down8578.call(null,name,options,null);
});

sablono.core.drop_down8578.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down8578.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down8578);
/**
 * Creates a text area element.
 */
sablono.core.text_area8586 = (function sablono$core$text_area8586(var_args){
var args8587 = [];
var len__7622__auto___8590 = arguments.length;
var i__7623__auto___8591 = (0);
while(true){
if((i__7623__auto___8591 < len__7622__auto___8590)){
args8587.push((arguments[i__7623__auto___8591]));

var G__8592 = (i__7623__auto___8591 + (1));
i__7623__auto___8591 = G__8592;
continue;
} else {
}
break;
}

var G__8589 = args8587.length;
switch (G__8589) {
case 1:
return sablono.core.text_area8586.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area8586.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8587.length)].join('')));

}
});

sablono.core.text_area8586.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area8586.call(null,name,null);
});

sablono.core.text_area8586.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__6547__auto__ = value;
if(cljs.core.truth_(or__6547__auto__)){
return or__6547__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area8586.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area8586);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label8594 = (function sablono$core$label8594(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label8594);
/**
 * Creates a submit button.
 */
sablono.core.submit_button8595 = (function sablono$core$submit_button8595(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button8595);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button8596 = (function sablono$core$reset_button8596(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button8596);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to8597 = (function sablono$core$form_to8597(var_args){
var args__7629__auto__ = [];
var len__7622__auto___8602 = arguments.length;
var i__7623__auto___8603 = (0);
while(true){
if((i__7623__auto___8603 < len__7622__auto___8602)){
args__7629__auto__.push((arguments[i__7623__auto___8603]));

var G__8604 = (i__7623__auto___8603 + (1));
i__7623__auto___8603 = G__8604;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((1) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to8597.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7630__auto__);
});

sablono.core.form_to8597.cljs$core$IFn$_invoke$arity$variadic = (function (p__8600,body){
var vec__8601 = p__8600;
var method = cljs.core.nth.call(null,vec__8601,(0),null);
var action = cljs.core.nth.call(null,vec__8601,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to8597.cljs$lang$maxFixedArity = (1);

sablono.core.form_to8597.cljs$lang$applyTo = (function (seq8598){
var G__8599 = cljs.core.first.call(null,seq8598);
var seq8598__$1 = cljs.core.next.call(null,seq8598);
return sablono.core.form_to8597.cljs$core$IFn$_invoke$arity$variadic(G__8599,seq8598__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to8597);

//# sourceMappingURL=core.js.map