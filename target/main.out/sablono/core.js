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
var G__10489__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__10488 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__10488,(0),null);
var body = cljs.core.nthnext.call(null,vec__10488,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__10489 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10490__i = 0, G__10490__a = new Array(arguments.length -  0);
while (G__10490__i < G__10490__a.length) {G__10490__a[G__10490__i] = arguments[G__10490__i + 0]; ++G__10490__i;}
  args = new cljs.core.IndexedSeq(G__10490__a,0);
} 
return G__10489__delegate.call(this,args);};
G__10489.cljs$lang$maxFixedArity = 0;
G__10489.cljs$lang$applyTo = (function (arglist__10491){
var args = cljs.core.seq(arglist__10491);
return G__10489__delegate(args);
});
G__10489.cljs$core$IFn$_invoke$arity$variadic = G__10489__delegate;
return G__10489;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__7327__auto__ = (function sablono$core$update_arglists_$_iter__10496(s__10497){
return (new cljs.core.LazySeq(null,(function (){
var s__10497__$1 = s__10497;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__10497__$1);
if(temp__4657__auto__){
var s__10497__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10497__$2)){
var c__7325__auto__ = cljs.core.chunk_first.call(null,s__10497__$2);
var size__7326__auto__ = cljs.core.count.call(null,c__7325__auto__);
var b__10499 = cljs.core.chunk_buffer.call(null,size__7326__auto__);
if((function (){var i__10498 = (0);
while(true){
if((i__10498 < size__7326__auto__)){
var args = cljs.core._nth.call(null,c__7325__auto__,i__10498);
cljs.core.chunk_append.call(null,b__10499,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__10500 = (i__10498 + (1));
i__10498 = G__10500;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10499),sablono$core$update_arglists_$_iter__10496.call(null,cljs.core.chunk_rest.call(null,s__10497__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10499),null);
}
} else {
var args = cljs.core.first.call(null,s__10497__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__10496.call(null,cljs.core.rest.call(null,s__10497__$2)));
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
var len__7622__auto___10506 = arguments.length;
var i__7623__auto___10507 = (0);
while(true){
if((i__7623__auto___10507 < len__7622__auto___10506)){
args__7629__auto__.push((arguments[i__7623__auto___10507]));

var G__10508 = (i__7623__auto___10507 + (1));
i__7623__auto___10507 = G__10508;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((0) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__7630__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__7327__auto__ = (function sablono$core$iter__10502(s__10503){
return (new cljs.core.LazySeq(null,(function (){
var s__10503__$1 = s__10503;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__10503__$1);
if(temp__4657__auto__){
var s__10503__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10503__$2)){
var c__7325__auto__ = cljs.core.chunk_first.call(null,s__10503__$2);
var size__7326__auto__ = cljs.core.count.call(null,c__7325__auto__);
var b__10505 = cljs.core.chunk_buffer.call(null,size__7326__auto__);
if((function (){var i__10504 = (0);
while(true){
if((i__10504 < size__7326__auto__)){
var style = cljs.core._nth.call(null,c__7325__auto__,i__10504);
cljs.core.chunk_append.call(null,b__10505,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__10509 = (i__10504 + (1));
i__10504 = G__10509;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10505),sablono$core$iter__10502.call(null,cljs.core.chunk_rest.call(null,s__10503__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10505),null);
}
} else {
var style = cljs.core.first.call(null,s__10503__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__10502.call(null,cljs.core.rest.call(null,s__10503__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq10501){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10501));
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
sablono.core.link_to10510 = (function sablono$core$link_to10510(var_args){
var args__7629__auto__ = [];
var len__7622__auto___10513 = arguments.length;
var i__7623__auto___10514 = (0);
while(true){
if((i__7623__auto___10514 < len__7622__auto___10513)){
args__7629__auto__.push((arguments[i__7623__auto___10514]));

var G__10515 = (i__7623__auto___10514 + (1));
i__7623__auto___10514 = G__10515;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((1) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to10510.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7630__auto__);
});

sablono.core.link_to10510.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to10510.cljs$lang$maxFixedArity = (1);

sablono.core.link_to10510.cljs$lang$applyTo = (function (seq10511){
var G__10512 = cljs.core.first.call(null,seq10511);
var seq10511__$1 = cljs.core.next.call(null,seq10511);
return sablono.core.link_to10510.cljs$core$IFn$_invoke$arity$variadic(G__10512,seq10511__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to10510);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to10516 = (function sablono$core$mail_to10516(var_args){
var args__7629__auto__ = [];
var len__7622__auto___10521 = arguments.length;
var i__7623__auto___10522 = (0);
while(true){
if((i__7623__auto___10522 < len__7622__auto___10521)){
args__7629__auto__.push((arguments[i__7623__auto___10522]));

var G__10523 = (i__7623__auto___10522 + (1));
i__7623__auto___10522 = G__10523;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((1) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to10516.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7630__auto__);
});

sablono.core.mail_to10516.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__10519){
var vec__10520 = p__10519;
var content = cljs.core.nth.call(null,vec__10520,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__6547__auto__ = content;
if(cljs.core.truth_(or__6547__auto__)){
return or__6547__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to10516.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to10516.cljs$lang$applyTo = (function (seq10517){
var G__10518 = cljs.core.first.call(null,seq10517);
var seq10517__$1 = cljs.core.next.call(null,seq10517);
return sablono.core.mail_to10516.cljs$core$IFn$_invoke$arity$variadic(G__10518,seq10517__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to10516);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list10524 = (function sablono$core$unordered_list10524(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__7327__auto__ = (function sablono$core$unordered_list10524_$_iter__10529(s__10530){
return (new cljs.core.LazySeq(null,(function (){
var s__10530__$1 = s__10530;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__10530__$1);
if(temp__4657__auto__){
var s__10530__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10530__$2)){
var c__7325__auto__ = cljs.core.chunk_first.call(null,s__10530__$2);
var size__7326__auto__ = cljs.core.count.call(null,c__7325__auto__);
var b__10532 = cljs.core.chunk_buffer.call(null,size__7326__auto__);
if((function (){var i__10531 = (0);
while(true){
if((i__10531 < size__7326__auto__)){
var x = cljs.core._nth.call(null,c__7325__auto__,i__10531);
cljs.core.chunk_append.call(null,b__10532,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__10533 = (i__10531 + (1));
i__10531 = G__10533;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10532),sablono$core$unordered_list10524_$_iter__10529.call(null,cljs.core.chunk_rest.call(null,s__10530__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10532),null);
}
} else {
var x = cljs.core.first.call(null,s__10530__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list10524_$_iter__10529.call(null,cljs.core.rest.call(null,s__10530__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list10524);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list10534 = (function sablono$core$ordered_list10534(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__7327__auto__ = (function sablono$core$ordered_list10534_$_iter__10539(s__10540){
return (new cljs.core.LazySeq(null,(function (){
var s__10540__$1 = s__10540;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__10540__$1);
if(temp__4657__auto__){
var s__10540__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10540__$2)){
var c__7325__auto__ = cljs.core.chunk_first.call(null,s__10540__$2);
var size__7326__auto__ = cljs.core.count.call(null,c__7325__auto__);
var b__10542 = cljs.core.chunk_buffer.call(null,size__7326__auto__);
if((function (){var i__10541 = (0);
while(true){
if((i__10541 < size__7326__auto__)){
var x = cljs.core._nth.call(null,c__7325__auto__,i__10541);
cljs.core.chunk_append.call(null,b__10542,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__10543 = (i__10541 + (1));
i__10541 = G__10543;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10542),sablono$core$ordered_list10534_$_iter__10539.call(null,cljs.core.chunk_rest.call(null,s__10540__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10542),null);
}
} else {
var x = cljs.core.first.call(null,s__10540__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list10534_$_iter__10539.call(null,cljs.core.rest.call(null,s__10540__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list10534);
/**
 * Create an image element.
 */
sablono.core.image10544 = (function sablono$core$image10544(var_args){
var args10545 = [];
var len__7622__auto___10548 = arguments.length;
var i__7623__auto___10549 = (0);
while(true){
if((i__7623__auto___10549 < len__7622__auto___10548)){
args10545.push((arguments[i__7623__auto___10549]));

var G__10550 = (i__7623__auto___10549 + (1));
i__7623__auto___10549 = G__10550;
continue;
} else {
}
break;
}

var G__10547 = args10545.length;
switch (G__10547) {
case 1:
return sablono.core.image10544.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image10544.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10545.length)].join('')));

}
});

sablono.core.image10544.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image10544.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image10544.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image10544);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__10552_SHARP_,p2__10553_SHARP_){
return [cljs.core.str(p1__10552_SHARP_),cljs.core.str("["),cljs.core.str(p2__10553_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__10554_SHARP_,p2__10555_SHARP_){
return [cljs.core.str(p1__10554_SHARP_),cljs.core.str("-"),cljs.core.str(p2__10555_SHARP_)].join('');
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
sablono.core.color_field10556 = (function sablono$core$color_field10556(var_args){
var args10557 = [];
var len__7622__auto___10624 = arguments.length;
var i__7623__auto___10625 = (0);
while(true){
if((i__7623__auto___10625 < len__7622__auto___10624)){
args10557.push((arguments[i__7623__auto___10625]));

var G__10626 = (i__7623__auto___10625 + (1));
i__7623__auto___10625 = G__10626;
continue;
} else {
}
break;
}

var G__10559 = args10557.length;
switch (G__10559) {
case 1:
return sablono.core.color_field10556.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field10556.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10557.length)].join('')));

}
});

sablono.core.color_field10556.cljs$core$IFn$_invoke$arity$1 = (function (name__10477__auto__){
return sablono.core.color_field10556.call(null,name__10477__auto__,null);
});

sablono.core.color_field10556.cljs$core$IFn$_invoke$arity$2 = (function (name__10477__auto__,value__10478__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__10477__auto__,value__10478__auto__);
});

sablono.core.color_field10556.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field10556);

/**
 * Creates a date input field.
 */
sablono.core.date_field10560 = (function sablono$core$date_field10560(var_args){
var args10561 = [];
var len__7622__auto___10628 = arguments.length;
var i__7623__auto___10629 = (0);
while(true){
if((i__7623__auto___10629 < len__7622__auto___10628)){
args10561.push((arguments[i__7623__auto___10629]));

var G__10630 = (i__7623__auto___10629 + (1));
i__7623__auto___10629 = G__10630;
continue;
} else {
}
break;
}

var G__10563 = args10561.length;
switch (G__10563) {
case 1:
return sablono.core.date_field10560.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field10560.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10561.length)].join('')));

}
});

sablono.core.date_field10560.cljs$core$IFn$_invoke$arity$1 = (function (name__10477__auto__){
return sablono.core.date_field10560.call(null,name__10477__auto__,null);
});

sablono.core.date_field10560.cljs$core$IFn$_invoke$arity$2 = (function (name__10477__auto__,value__10478__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__10477__auto__,value__10478__auto__);
});

sablono.core.date_field10560.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field10560);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field10564 = (function sablono$core$datetime_field10564(var_args){
var args10565 = [];
var len__7622__auto___10632 = arguments.length;
var i__7623__auto___10633 = (0);
while(true){
if((i__7623__auto___10633 < len__7622__auto___10632)){
args10565.push((arguments[i__7623__auto___10633]));

var G__10634 = (i__7623__auto___10633 + (1));
i__7623__auto___10633 = G__10634;
continue;
} else {
}
break;
}

var G__10567 = args10565.length;
switch (G__10567) {
case 1:
return sablono.core.datetime_field10564.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field10564.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10565.length)].join('')));

}
});

sablono.core.datetime_field10564.cljs$core$IFn$_invoke$arity$1 = (function (name__10477__auto__){
return sablono.core.datetime_field10564.call(null,name__10477__auto__,null);
});

sablono.core.datetime_field10564.cljs$core$IFn$_invoke$arity$2 = (function (name__10477__auto__,value__10478__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__10477__auto__,value__10478__auto__);
});

sablono.core.datetime_field10564.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field10564);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field10568 = (function sablono$core$datetime_local_field10568(var_args){
var args10569 = [];
var len__7622__auto___10636 = arguments.length;
var i__7623__auto___10637 = (0);
while(true){
if((i__7623__auto___10637 < len__7622__auto___10636)){
args10569.push((arguments[i__7623__auto___10637]));

var G__10638 = (i__7623__auto___10637 + (1));
i__7623__auto___10637 = G__10638;
continue;
} else {
}
break;
}

var G__10571 = args10569.length;
switch (G__10571) {
case 1:
return sablono.core.datetime_local_field10568.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field10568.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10569.length)].join('')));

}
});

sablono.core.datetime_local_field10568.cljs$core$IFn$_invoke$arity$1 = (function (name__10477__auto__){
return sablono.core.datetime_local_field10568.call(null,name__10477__auto__,null);
});

sablono.core.datetime_local_field10568.cljs$core$IFn$_invoke$arity$2 = (function (name__10477__auto__,value__10478__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__10477__auto__,value__10478__auto__);
});

sablono.core.datetime_local_field10568.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field10568);

/**
 * Creates a email input field.
 */
sablono.core.email_field10572 = (function sablono$core$email_field10572(var_args){
var args10573 = [];
var len__7622__auto___10640 = arguments.length;
var i__7623__auto___10641 = (0);
while(true){
if((i__7623__auto___10641 < len__7622__auto___10640)){
args10573.push((arguments[i__7623__auto___10641]));

var G__10642 = (i__7623__auto___10641 + (1));
i__7623__auto___10641 = G__10642;
continue;
} else {
}
break;
}

var G__10575 = args10573.length;
switch (G__10575) {
case 1:
return sablono.core.email_field10572.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field10572.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10573.length)].join('')));

}
});

sablono.core.email_field10572.cljs$core$IFn$_invoke$arity$1 = (function (name__10477__auto__){
return sablono.core.email_field10572.call(null,name__10477__auto__,null);
});

sablono.core.email_field10572.cljs$core$IFn$_invoke$arity$2 = (function (name__10477__auto__,value__10478__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__10477__auto__,value__10478__auto__);
});

sablono.core.email_field10572.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field10572);

/**
 * Creates a file input field.
 */
sablono.core.file_field10576 = (function sablono$core$file_field10576(var_args){
var args10577 = [];
var len__7622__auto___10644 = arguments.length;
var i__7623__auto___10645 = (0);
while(true){
if((i__7623__auto___10645 < len__7622__auto___10644)){
args10577.push((arguments[i__7623__auto___10645]));

var G__10646 = (i__7623__auto___10645 + (1));
i__7623__auto___10645 = G__10646;
continue;
} else {
}
break;
}

var G__10579 = args10577.length;
switch (G__10579) {
case 1:
return sablono.core.file_field10576.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field10576.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10577.length)].join('')));

}
});

sablono.core.file_field10576.cljs$core$IFn$_invoke$arity$1 = (function (name__10477__auto__){
return sablono.core.file_field10576.call(null,name__10477__auto__,null);
});

sablono.core.file_field10576.cljs$core$IFn$_invoke$arity$2 = (function (name__10477__auto__,value__10478__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__10477__auto__,value__10478__auto__);
});

sablono.core.file_field10576.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field10576);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field10580 = (function sablono$core$hidden_field10580(var_args){
var args10581 = [];
var len__7622__auto___10648 = arguments.length;
var i__7623__auto___10649 = (0);
while(true){
if((i__7623__auto___10649 < len__7622__auto___10648)){
args10581.push((arguments[i__7623__auto___10649]));

var G__10650 = (i__7623__auto___10649 + (1));
i__7623__auto___10649 = G__10650;
continue;
} else {
}
break;
}

var G__10583 = args10581.length;
switch (G__10583) {
case 1:
return sablono.core.hidden_field10580.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field10580.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10581.length)].join('')));

}
});

sablono.core.hidden_field10580.cljs$core$IFn$_invoke$arity$1 = (function (name__10477__auto__){
return sablono.core.hidden_field10580.call(null,name__10477__auto__,null);
});

sablono.core.hidden_field10580.cljs$core$IFn$_invoke$arity$2 = (function (name__10477__auto__,value__10478__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__10477__auto__,value__10478__auto__);
});

sablono.core.hidden_field10580.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field10580);

/**
 * Creates a month input field.
 */
sablono.core.month_field10584 = (function sablono$core$month_field10584(var_args){
var args10585 = [];
var len__7622__auto___10652 = arguments.length;
var i__7623__auto___10653 = (0);
while(true){
if((i__7623__auto___10653 < len__7622__auto___10652)){
args10585.push((arguments[i__7623__auto___10653]));

var G__10654 = (i__7623__auto___10653 + (1));
i__7623__auto___10653 = G__10654;
continue;
} else {
}
break;
}

var G__10587 = args10585.length;
switch (G__10587) {
case 1:
return sablono.core.month_field10584.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field10584.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10585.length)].join('')));

}
});

sablono.core.month_field10584.cljs$core$IFn$_invoke$arity$1 = (function (name__10477__auto__){
return sablono.core.month_field10584.call(null,name__10477__auto__,null);
});

sablono.core.month_field10584.cljs$core$IFn$_invoke$arity$2 = (function (name__10477__auto__,value__10478__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__10477__auto__,value__10478__auto__);
});

sablono.core.month_field10584.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field10584);

/**
 * Creates a number input field.
 */
sablono.core.number_field10588 = (function sablono$core$number_field10588(var_args){
var args10589 = [];
var len__7622__auto___10656 = arguments.length;
var i__7623__auto___10657 = (0);
while(true){
if((i__7623__auto___10657 < len__7622__auto___10656)){
args10589.push((arguments[i__7623__auto___10657]));

var G__10658 = (i__7623__auto___10657 + (1));
i__7623__auto___10657 = G__10658;
continue;
} else {
}
break;
}

var G__10591 = args10589.length;
switch (G__10591) {
case 1:
return sablono.core.number_field10588.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field10588.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10589.length)].join('')));

}
});

sablono.core.number_field10588.cljs$core$IFn$_invoke$arity$1 = (function (name__10477__auto__){
return sablono.core.number_field10588.call(null,name__10477__auto__,null);
});

sablono.core.number_field10588.cljs$core$IFn$_invoke$arity$2 = (function (name__10477__auto__,value__10478__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__10477__auto__,value__10478__auto__);
});

sablono.core.number_field10588.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field10588);

/**
 * Creates a password input field.
 */
sablono.core.password_field10592 = (function sablono$core$password_field10592(var_args){
var args10593 = [];
var len__7622__auto___10660 = arguments.length;
var i__7623__auto___10661 = (0);
while(true){
if((i__7623__auto___10661 < len__7622__auto___10660)){
args10593.push((arguments[i__7623__auto___10661]));

var G__10662 = (i__7623__auto___10661 + (1));
i__7623__auto___10661 = G__10662;
continue;
} else {
}
break;
}

var G__10595 = args10593.length;
switch (G__10595) {
case 1:
return sablono.core.password_field10592.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field10592.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10593.length)].join('')));

}
});

sablono.core.password_field10592.cljs$core$IFn$_invoke$arity$1 = (function (name__10477__auto__){
return sablono.core.password_field10592.call(null,name__10477__auto__,null);
});

sablono.core.password_field10592.cljs$core$IFn$_invoke$arity$2 = (function (name__10477__auto__,value__10478__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__10477__auto__,value__10478__auto__);
});

sablono.core.password_field10592.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field10592);

/**
 * Creates a range input field.
 */
sablono.core.range_field10596 = (function sablono$core$range_field10596(var_args){
var args10597 = [];
var len__7622__auto___10664 = arguments.length;
var i__7623__auto___10665 = (0);
while(true){
if((i__7623__auto___10665 < len__7622__auto___10664)){
args10597.push((arguments[i__7623__auto___10665]));

var G__10666 = (i__7623__auto___10665 + (1));
i__7623__auto___10665 = G__10666;
continue;
} else {
}
break;
}

var G__10599 = args10597.length;
switch (G__10599) {
case 1:
return sablono.core.range_field10596.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field10596.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10597.length)].join('')));

}
});

sablono.core.range_field10596.cljs$core$IFn$_invoke$arity$1 = (function (name__10477__auto__){
return sablono.core.range_field10596.call(null,name__10477__auto__,null);
});

sablono.core.range_field10596.cljs$core$IFn$_invoke$arity$2 = (function (name__10477__auto__,value__10478__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__10477__auto__,value__10478__auto__);
});

sablono.core.range_field10596.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field10596);

/**
 * Creates a search input field.
 */
sablono.core.search_field10600 = (function sablono$core$search_field10600(var_args){
var args10601 = [];
var len__7622__auto___10668 = arguments.length;
var i__7623__auto___10669 = (0);
while(true){
if((i__7623__auto___10669 < len__7622__auto___10668)){
args10601.push((arguments[i__7623__auto___10669]));

var G__10670 = (i__7623__auto___10669 + (1));
i__7623__auto___10669 = G__10670;
continue;
} else {
}
break;
}

var G__10603 = args10601.length;
switch (G__10603) {
case 1:
return sablono.core.search_field10600.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field10600.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10601.length)].join('')));

}
});

sablono.core.search_field10600.cljs$core$IFn$_invoke$arity$1 = (function (name__10477__auto__){
return sablono.core.search_field10600.call(null,name__10477__auto__,null);
});

sablono.core.search_field10600.cljs$core$IFn$_invoke$arity$2 = (function (name__10477__auto__,value__10478__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__10477__auto__,value__10478__auto__);
});

sablono.core.search_field10600.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field10600);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field10604 = (function sablono$core$tel_field10604(var_args){
var args10605 = [];
var len__7622__auto___10672 = arguments.length;
var i__7623__auto___10673 = (0);
while(true){
if((i__7623__auto___10673 < len__7622__auto___10672)){
args10605.push((arguments[i__7623__auto___10673]));

var G__10674 = (i__7623__auto___10673 + (1));
i__7623__auto___10673 = G__10674;
continue;
} else {
}
break;
}

var G__10607 = args10605.length;
switch (G__10607) {
case 1:
return sablono.core.tel_field10604.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field10604.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10605.length)].join('')));

}
});

sablono.core.tel_field10604.cljs$core$IFn$_invoke$arity$1 = (function (name__10477__auto__){
return sablono.core.tel_field10604.call(null,name__10477__auto__,null);
});

sablono.core.tel_field10604.cljs$core$IFn$_invoke$arity$2 = (function (name__10477__auto__,value__10478__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__10477__auto__,value__10478__auto__);
});

sablono.core.tel_field10604.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field10604);

/**
 * Creates a text input field.
 */
sablono.core.text_field10608 = (function sablono$core$text_field10608(var_args){
var args10609 = [];
var len__7622__auto___10676 = arguments.length;
var i__7623__auto___10677 = (0);
while(true){
if((i__7623__auto___10677 < len__7622__auto___10676)){
args10609.push((arguments[i__7623__auto___10677]));

var G__10678 = (i__7623__auto___10677 + (1));
i__7623__auto___10677 = G__10678;
continue;
} else {
}
break;
}

var G__10611 = args10609.length;
switch (G__10611) {
case 1:
return sablono.core.text_field10608.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field10608.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10609.length)].join('')));

}
});

sablono.core.text_field10608.cljs$core$IFn$_invoke$arity$1 = (function (name__10477__auto__){
return sablono.core.text_field10608.call(null,name__10477__auto__,null);
});

sablono.core.text_field10608.cljs$core$IFn$_invoke$arity$2 = (function (name__10477__auto__,value__10478__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__10477__auto__,value__10478__auto__);
});

sablono.core.text_field10608.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field10608);

/**
 * Creates a time input field.
 */
sablono.core.time_field10612 = (function sablono$core$time_field10612(var_args){
var args10613 = [];
var len__7622__auto___10680 = arguments.length;
var i__7623__auto___10681 = (0);
while(true){
if((i__7623__auto___10681 < len__7622__auto___10680)){
args10613.push((arguments[i__7623__auto___10681]));

var G__10682 = (i__7623__auto___10681 + (1));
i__7623__auto___10681 = G__10682;
continue;
} else {
}
break;
}

var G__10615 = args10613.length;
switch (G__10615) {
case 1:
return sablono.core.time_field10612.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field10612.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10613.length)].join('')));

}
});

sablono.core.time_field10612.cljs$core$IFn$_invoke$arity$1 = (function (name__10477__auto__){
return sablono.core.time_field10612.call(null,name__10477__auto__,null);
});

sablono.core.time_field10612.cljs$core$IFn$_invoke$arity$2 = (function (name__10477__auto__,value__10478__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__10477__auto__,value__10478__auto__);
});

sablono.core.time_field10612.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field10612);

/**
 * Creates a url input field.
 */
sablono.core.url_field10616 = (function sablono$core$url_field10616(var_args){
var args10617 = [];
var len__7622__auto___10684 = arguments.length;
var i__7623__auto___10685 = (0);
while(true){
if((i__7623__auto___10685 < len__7622__auto___10684)){
args10617.push((arguments[i__7623__auto___10685]));

var G__10686 = (i__7623__auto___10685 + (1));
i__7623__auto___10685 = G__10686;
continue;
} else {
}
break;
}

var G__10619 = args10617.length;
switch (G__10619) {
case 1:
return sablono.core.url_field10616.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field10616.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10617.length)].join('')));

}
});

sablono.core.url_field10616.cljs$core$IFn$_invoke$arity$1 = (function (name__10477__auto__){
return sablono.core.url_field10616.call(null,name__10477__auto__,null);
});

sablono.core.url_field10616.cljs$core$IFn$_invoke$arity$2 = (function (name__10477__auto__,value__10478__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__10477__auto__,value__10478__auto__);
});

sablono.core.url_field10616.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field10616);

/**
 * Creates a week input field.
 */
sablono.core.week_field10620 = (function sablono$core$week_field10620(var_args){
var args10621 = [];
var len__7622__auto___10688 = arguments.length;
var i__7623__auto___10689 = (0);
while(true){
if((i__7623__auto___10689 < len__7622__auto___10688)){
args10621.push((arguments[i__7623__auto___10689]));

var G__10690 = (i__7623__auto___10689 + (1));
i__7623__auto___10689 = G__10690;
continue;
} else {
}
break;
}

var G__10623 = args10621.length;
switch (G__10623) {
case 1:
return sablono.core.week_field10620.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field10620.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10621.length)].join('')));

}
});

sablono.core.week_field10620.cljs$core$IFn$_invoke$arity$1 = (function (name__10477__auto__){
return sablono.core.week_field10620.call(null,name__10477__auto__,null);
});

sablono.core.week_field10620.cljs$core$IFn$_invoke$arity$2 = (function (name__10477__auto__,value__10478__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__10477__auto__,value__10478__auto__);
});

sablono.core.week_field10620.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field10620);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box10692 = (function sablono$core$check_box10692(var_args){
var args10693 = [];
var len__7622__auto___10696 = arguments.length;
var i__7623__auto___10697 = (0);
while(true){
if((i__7623__auto___10697 < len__7622__auto___10696)){
args10693.push((arguments[i__7623__auto___10697]));

var G__10698 = (i__7623__auto___10697 + (1));
i__7623__auto___10697 = G__10698;
continue;
} else {
}
break;
}

var G__10695 = args10693.length;
switch (G__10695) {
case 1:
return sablono.core.check_box10692.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box10692.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box10692.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10693.length)].join('')));

}
});

sablono.core.check_box10692.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box10692.call(null,name,null);
});

sablono.core.check_box10692.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box10692.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box10692.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__6547__auto__ = value;
if(cljs.core.truth_(or__6547__auto__)){
return or__6547__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box10692.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box10692);
/**
 * Creates a radio button.
 */
sablono.core.radio_button10700 = (function sablono$core$radio_button10700(var_args){
var args10701 = [];
var len__7622__auto___10704 = arguments.length;
var i__7623__auto___10705 = (0);
while(true){
if((i__7623__auto___10705 < len__7622__auto___10704)){
args10701.push((arguments[i__7623__auto___10705]));

var G__10706 = (i__7623__auto___10705 + (1));
i__7623__auto___10705 = G__10706;
continue;
} else {
}
break;
}

var G__10703 = args10701.length;
switch (G__10703) {
case 1:
return sablono.core.radio_button10700.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button10700.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button10700.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10701.length)].join('')));

}
});

sablono.core.radio_button10700.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button10700.call(null,group,null);
});

sablono.core.radio_button10700.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button10700.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button10700.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__6547__auto__ = value;
if(cljs.core.truth_(or__6547__auto__)){
return or__6547__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button10700.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button10700);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options10708 = (function sablono$core$select_options10708(coll){
var iter__7327__auto__ = (function sablono$core$select_options10708_$_iter__10717(s__10718){
return (new cljs.core.LazySeq(null,(function (){
var s__10718__$1 = s__10718;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__10718__$1);
if(temp__4657__auto__){
var s__10718__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10718__$2)){
var c__7325__auto__ = cljs.core.chunk_first.call(null,s__10718__$2);
var size__7326__auto__ = cljs.core.count.call(null,c__7325__auto__);
var b__10720 = cljs.core.chunk_buffer.call(null,size__7326__auto__);
if((function (){var i__10719 = (0);
while(true){
if((i__10719 < size__7326__auto__)){
var x = cljs.core._nth.call(null,c__7325__auto__,i__10719);
cljs.core.chunk_append.call(null,b__10720,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__10723 = x;
var text = cljs.core.nth.call(null,vec__10723,(0),null);
var val = cljs.core.nth.call(null,vec__10723,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__10723,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options10708.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__10725 = (i__10719 + (1));
i__10719 = G__10725;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10720),sablono$core$select_options10708_$_iter__10717.call(null,cljs.core.chunk_rest.call(null,s__10718__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10720),null);
}
} else {
var x = cljs.core.first.call(null,s__10718__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__10724 = x;
var text = cljs.core.nth.call(null,vec__10724,(0),null);
var val = cljs.core.nth.call(null,vec__10724,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__10724,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options10708.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options10708_$_iter__10717.call(null,cljs.core.rest.call(null,s__10718__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options10708);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down10726 = (function sablono$core$drop_down10726(var_args){
var args10727 = [];
var len__7622__auto___10730 = arguments.length;
var i__7623__auto___10731 = (0);
while(true){
if((i__7623__auto___10731 < len__7622__auto___10730)){
args10727.push((arguments[i__7623__auto___10731]));

var G__10732 = (i__7623__auto___10731 + (1));
i__7623__auto___10731 = G__10732;
continue;
} else {
}
break;
}

var G__10729 = args10727.length;
switch (G__10729) {
case 2:
return sablono.core.drop_down10726.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down10726.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10727.length)].join('')));

}
});

sablono.core.drop_down10726.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down10726.call(null,name,options,null);
});

sablono.core.drop_down10726.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down10726.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down10726);
/**
 * Creates a text area element.
 */
sablono.core.text_area10734 = (function sablono$core$text_area10734(var_args){
var args10735 = [];
var len__7622__auto___10738 = arguments.length;
var i__7623__auto___10739 = (0);
while(true){
if((i__7623__auto___10739 < len__7622__auto___10738)){
args10735.push((arguments[i__7623__auto___10739]));

var G__10740 = (i__7623__auto___10739 + (1));
i__7623__auto___10739 = G__10740;
continue;
} else {
}
break;
}

var G__10737 = args10735.length;
switch (G__10737) {
case 1:
return sablono.core.text_area10734.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area10734.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10735.length)].join('')));

}
});

sablono.core.text_area10734.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area10734.call(null,name,null);
});

sablono.core.text_area10734.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__6547__auto__ = value;
if(cljs.core.truth_(or__6547__auto__)){
return or__6547__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area10734.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area10734);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label10742 = (function sablono$core$label10742(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label10742);
/**
 * Creates a submit button.
 */
sablono.core.submit_button10743 = (function sablono$core$submit_button10743(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button10743);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button10744 = (function sablono$core$reset_button10744(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button10744);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to10745 = (function sablono$core$form_to10745(var_args){
var args__7629__auto__ = [];
var len__7622__auto___10750 = arguments.length;
var i__7623__auto___10751 = (0);
while(true){
if((i__7623__auto___10751 < len__7622__auto___10750)){
args__7629__auto__.push((arguments[i__7623__auto___10751]));

var G__10752 = (i__7623__auto___10751 + (1));
i__7623__auto___10751 = G__10752;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((1) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to10745.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7630__auto__);
});

sablono.core.form_to10745.cljs$core$IFn$_invoke$arity$variadic = (function (p__10748,body){
var vec__10749 = p__10748;
var method = cljs.core.nth.call(null,vec__10749,(0),null);
var action = cljs.core.nth.call(null,vec__10749,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to10745.cljs$lang$maxFixedArity = (1);

sablono.core.form_to10745.cljs$lang$applyTo = (function (seq10746){
var G__10747 = cljs.core.first.call(null,seq10746);
var seq10746__$1 = cljs.core.next.call(null,seq10746);
return sablono.core.form_to10745.cljs$core$IFn$_invoke$arity$variadic(G__10747,seq10746__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to10745);

//# sourceMappingURL=core.js.map