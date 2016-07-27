// Compiled by ClojureScript 1.9.14 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var args9947 = [];
var len__7622__auto___9961 = arguments.length;
var i__7623__auto___9962 = (0);
while(true){
if((i__7623__auto___9962 < len__7622__auto___9961)){
args9947.push((arguments[i__7623__auto___9962]));

var G__9963 = (i__7623__auto___9962 + (1));
i__7623__auto___9962 = G__9963;
continue;
} else {
}
break;
}

var G__9949 = args9947.length;
switch (G__9949) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9947.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__9950 = opts;
var map__9950__$1 = ((((!((map__9950 == null)))?((((map__9950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9950):map__9950);
var ref = cljs.core.get.call(null,map__9950__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__9950__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__9952 = cljs.core.count.call(null,refs);
switch (G__9952) {
case (1):
var vec__9953 = refs;
var a = cljs.core.nth.call(null,vec__9953,(0),null);
return ((function (vec__9953,a,G__9952,map__9950,map__9950__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__9953,a,G__9952,map__9950,map__9950__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__9954 = refs;
var a = cljs.core.nth.call(null,vec__9954,(0),null);
var b = cljs.core.nth.call(null,vec__9954,(1),null);
return ((function (vec__9954,a,b,G__9952,map__9950,map__9950__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__9954,a,b,G__9952,map__9950,map__9950__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__9955 = refs;
var a = cljs.core.nth.call(null,vec__9955,(0),null);
var b = cljs.core.nth.call(null,vec__9955,(1),null);
var c = cljs.core.nth.call(null,vec__9955,(2),null);
return ((function (vec__9955,a,b,c,G__9952,map__9950,map__9950__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__9955,a,b,c,G__9952,map__9950,map__9950__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__9952,map__9950,map__9950__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__9952,map__9950,map__9950__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__9956 = ref;
cljs.core.reset_BANG_.call(null,G__9956,recalc.call(null));

return G__9956;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__9950,map__9950__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__9950,map__9950__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__9950,map__9950__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__9950,map__9950__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__9957_9966 = cljs.core.seq.call(null,refs);
var chunk__9958_9967 = null;
var count__9959_9968 = (0);
var i__9960_9969 = (0);
while(true){
if((i__9960_9969 < count__9959_9968)){
var ref_9970__$1 = cljs.core._nth.call(null,chunk__9958_9967,i__9960_9969);
cljs.core.add_watch.call(null,ref_9970__$1,key,watch);

var G__9971 = seq__9957_9966;
var G__9972 = chunk__9958_9967;
var G__9973 = count__9959_9968;
var G__9974 = (i__9960_9969 + (1));
seq__9957_9966 = G__9971;
chunk__9958_9967 = G__9972;
count__9959_9968 = G__9973;
i__9960_9969 = G__9974;
continue;
} else {
var temp__4657__auto___9975 = cljs.core.seq.call(null,seq__9957_9966);
if(temp__4657__auto___9975){
var seq__9957_9976__$1 = temp__4657__auto___9975;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9957_9976__$1)){
var c__7358__auto___9977 = cljs.core.chunk_first.call(null,seq__9957_9976__$1);
var G__9978 = cljs.core.chunk_rest.call(null,seq__9957_9976__$1);
var G__9979 = c__7358__auto___9977;
var G__9980 = cljs.core.count.call(null,c__7358__auto___9977);
var G__9981 = (0);
seq__9957_9966 = G__9978;
chunk__9958_9967 = G__9979;
count__9959_9968 = G__9980;
i__9960_9969 = G__9981;
continue;
} else {
var ref_9982__$1 = cljs.core.first.call(null,seq__9957_9976__$1);
cljs.core.add_watch.call(null,ref_9982__$1,key,watch);

var G__9983 = cljs.core.next.call(null,seq__9957_9976__$1);
var G__9984 = null;
var G__9985 = (0);
var G__9986 = (0);
seq__9957_9966 = G__9983;
chunk__9958_9967 = G__9984;
count__9959_9968 = G__9985;
i__9960_9969 = G__9986;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;

//# sourceMappingURL=derived_atom.js.map