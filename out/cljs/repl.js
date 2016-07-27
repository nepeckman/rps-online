// Compiled by ClojureScript 1.9.14 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19754){
var map__19773 = p__19754;
var map__19773__$1 = ((((!((map__19773 == null)))?((((map__19773.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19773.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19773):map__19773);
var m = map__19773__$1;
var n = cljs.core.get.call(null,map__19773__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__19773__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19775_19791 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19776_19792 = null;
var count__19777_19793 = (0);
var i__19778_19794 = (0);
while(true){
if((i__19778_19794 < count__19777_19793)){
var f_19795 = cljs.core._nth.call(null,chunk__19776_19792,i__19778_19794);
cljs.core.println.call(null,"  ",f_19795);

var G__19796 = seq__19775_19791;
var G__19797 = chunk__19776_19792;
var G__19798 = count__19777_19793;
var G__19799 = (i__19778_19794 + (1));
seq__19775_19791 = G__19796;
chunk__19776_19792 = G__19797;
count__19777_19793 = G__19798;
i__19778_19794 = G__19799;
continue;
} else {
var temp__4425__auto___19800 = cljs.core.seq.call(null,seq__19775_19791);
if(temp__4425__auto___19800){
var seq__19775_19801__$1 = temp__4425__auto___19800;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19775_19801__$1)){
var c__18701__auto___19802 = cljs.core.chunk_first.call(null,seq__19775_19801__$1);
var G__19803 = cljs.core.chunk_rest.call(null,seq__19775_19801__$1);
var G__19804 = c__18701__auto___19802;
var G__19805 = cljs.core.count.call(null,c__18701__auto___19802);
var G__19806 = (0);
seq__19775_19791 = G__19803;
chunk__19776_19792 = G__19804;
count__19777_19793 = G__19805;
i__19778_19794 = G__19806;
continue;
} else {
var f_19807 = cljs.core.first.call(null,seq__19775_19801__$1);
cljs.core.println.call(null,"  ",f_19807);

var G__19808 = cljs.core.next.call(null,seq__19775_19801__$1);
var G__19809 = null;
var G__19810 = (0);
var G__19811 = (0);
seq__19775_19791 = G__19808;
chunk__19776_19792 = G__19809;
count__19777_19793 = G__19810;
i__19778_19794 = G__19811;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19812 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__17890__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__17890__auto__)){
return or__17890__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_19812);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_19812)))?cljs.core.second.call(null,arglists_19812):arglists_19812));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19779_19813 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19780_19814 = null;
var count__19781_19815 = (0);
var i__19782_19816 = (0);
while(true){
if((i__19782_19816 < count__19781_19815)){
var vec__19783_19817 = cljs.core._nth.call(null,chunk__19780_19814,i__19782_19816);
var name_19818 = cljs.core.nth.call(null,vec__19783_19817,(0),null);
var map__19784_19819 = cljs.core.nth.call(null,vec__19783_19817,(1),null);
var map__19784_19820__$1 = ((((!((map__19784_19819 == null)))?((((map__19784_19819.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19784_19819.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19784_19819):map__19784_19819);
var doc_19821 = cljs.core.get.call(null,map__19784_19820__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19822 = cljs.core.get.call(null,map__19784_19820__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19818);

cljs.core.println.call(null," ",arglists_19822);

if(cljs.core.truth_(doc_19821)){
cljs.core.println.call(null," ",doc_19821);
} else {
}

var G__19823 = seq__19779_19813;
var G__19824 = chunk__19780_19814;
var G__19825 = count__19781_19815;
var G__19826 = (i__19782_19816 + (1));
seq__19779_19813 = G__19823;
chunk__19780_19814 = G__19824;
count__19781_19815 = G__19825;
i__19782_19816 = G__19826;
continue;
} else {
var temp__4425__auto___19827 = cljs.core.seq.call(null,seq__19779_19813);
if(temp__4425__auto___19827){
var seq__19779_19828__$1 = temp__4425__auto___19827;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19779_19828__$1)){
var c__18701__auto___19829 = cljs.core.chunk_first.call(null,seq__19779_19828__$1);
var G__19830 = cljs.core.chunk_rest.call(null,seq__19779_19828__$1);
var G__19831 = c__18701__auto___19829;
var G__19832 = cljs.core.count.call(null,c__18701__auto___19829);
var G__19833 = (0);
seq__19779_19813 = G__19830;
chunk__19780_19814 = G__19831;
count__19781_19815 = G__19832;
i__19782_19816 = G__19833;
continue;
} else {
var vec__19786_19834 = cljs.core.first.call(null,seq__19779_19828__$1);
var name_19835 = cljs.core.nth.call(null,vec__19786_19834,(0),null);
var map__19787_19836 = cljs.core.nth.call(null,vec__19786_19834,(1),null);
var map__19787_19837__$1 = ((((!((map__19787_19836 == null)))?((((map__19787_19836.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19787_19836.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19787_19836):map__19787_19836);
var doc_19838 = cljs.core.get.call(null,map__19787_19837__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19839 = cljs.core.get.call(null,map__19787_19837__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19835);

cljs.core.println.call(null," ",arglists_19839);

if(cljs.core.truth_(doc_19838)){
cljs.core.println.call(null," ",doc_19838);
} else {
}

var G__19840 = cljs.core.next.call(null,seq__19779_19828__$1);
var G__19841 = null;
var G__19842 = (0);
var G__19843 = (0);
seq__19779_19813 = G__19840;
chunk__19780_19814 = G__19841;
count__19781_19815 = G__19842;
i__19782_19816 = G__19843;
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
var temp__4425__auto__ = cljs.spec.fn_specs.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4425__auto__)){
var specs = temp__4425__auto__;
cljs.core.println.call(null,"Spec");

return cljs.core.run_BANG_.call(null,((function (specs,temp__4425__auto__,map__19773,map__19773__$1,m,n,nm){
return (function (p__19789){
var vec__19790 = p__19789;
var role = cljs.core.nth.call(null,vec__19790,(0),null);
var spec = cljs.core.nth.call(null,vec__19790,(1),null);
if(cljs.core.truth_((function (){var and__17878__auto__ = spec;
if(cljs.core.truth_(and__17878__auto__)){
return !(cljs.core._EQ_.call(null,spec,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582)));
} else {
return and__17878__auto__;
}
})())){
return cljs.core.println.call(null," ",[cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec));
} else {
return null;
}
});})(specs,temp__4425__auto__,map__19773,map__19773__$1,m,n,nm))
,specs);
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map