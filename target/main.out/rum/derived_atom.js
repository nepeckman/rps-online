// Compiled by ClojureScript 1.9.14 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var args7678 = [];
var len__7622__auto___7692 = arguments.length;
var i__7623__auto___7693 = (0);
while(true){
if((i__7623__auto___7693 < len__7622__auto___7692)){
args7678.push((arguments[i__7623__auto___7693]));

var G__7694 = (i__7623__auto___7693 + (1));
i__7623__auto___7693 = G__7694;
continue;
} else {
}
break;
}

var G__7680 = args7678.length;
switch (G__7680) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7678.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__7681 = opts;
var map__7681__$1 = ((((!((map__7681 == null)))?((((map__7681.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7681.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7681):map__7681);
var ref = cljs.core.get.call(null,map__7681__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__7681__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__7683 = cljs.core.count.call(null,refs);
switch (G__7683) {
case (1):
var vec__7684 = refs;
var a = cljs.core.nth.call(null,vec__7684,(0),null);
return ((function (vec__7684,a,G__7683,map__7681,map__7681__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__7684,a,G__7683,map__7681,map__7681__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__7685 = refs;
var a = cljs.core.nth.call(null,vec__7685,(0),null);
var b = cljs.core.nth.call(null,vec__7685,(1),null);
return ((function (vec__7685,a,b,G__7683,map__7681,map__7681__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__7685,a,b,G__7683,map__7681,map__7681__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__7686 = refs;
var a = cljs.core.nth.call(null,vec__7686,(0),null);
var b = cljs.core.nth.call(null,vec__7686,(1),null);
var c = cljs.core.nth.call(null,vec__7686,(2),null);
return ((function (vec__7686,a,b,c,G__7683,map__7681,map__7681__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__7686,a,b,c,G__7683,map__7681,map__7681__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__7683,map__7681,map__7681__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__7683,map__7681,map__7681__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__7687 = ref;
cljs.core.reset_BANG_.call(null,G__7687,recalc.call(null));

return G__7687;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__7681,map__7681__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__7681,map__7681__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__7681,map__7681__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__7681,map__7681__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__7688_7697 = cljs.core.seq.call(null,refs);
var chunk__7689_7698 = null;
var count__7690_7699 = (0);
var i__7691_7700 = (0);
while(true){
if((i__7691_7700 < count__7690_7699)){
var ref_7701__$1 = cljs.core._nth.call(null,chunk__7689_7698,i__7691_7700);
cljs.core.add_watch.call(null,ref_7701__$1,key,watch);

var G__7702 = seq__7688_7697;
var G__7703 = chunk__7689_7698;
var G__7704 = count__7690_7699;
var G__7705 = (i__7691_7700 + (1));
seq__7688_7697 = G__7702;
chunk__7689_7698 = G__7703;
count__7690_7699 = G__7704;
i__7691_7700 = G__7705;
continue;
} else {
var temp__4657__auto___7706 = cljs.core.seq.call(null,seq__7688_7697);
if(temp__4657__auto___7706){
var seq__7688_7707__$1 = temp__4657__auto___7706;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7688_7707__$1)){
var c__7358__auto___7708 = cljs.core.chunk_first.call(null,seq__7688_7707__$1);
var G__7709 = cljs.core.chunk_rest.call(null,seq__7688_7707__$1);
var G__7710 = c__7358__auto___7708;
var G__7711 = cljs.core.count.call(null,c__7358__auto___7708);
var G__7712 = (0);
seq__7688_7697 = G__7709;
chunk__7689_7698 = G__7710;
count__7690_7699 = G__7711;
i__7691_7700 = G__7712;
continue;
} else {
var ref_7713__$1 = cljs.core.first.call(null,seq__7688_7707__$1);
cljs.core.add_watch.call(null,ref_7713__$1,key,watch);

var G__7714 = cljs.core.next.call(null,seq__7688_7707__$1);
var G__7715 = null;
var G__7716 = (0);
var G__7717 = (0);
seq__7688_7697 = G__7714;
chunk__7689_7698 = G__7715;
count__7690_7699 = G__7716;
i__7691_7700 = G__7717;
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