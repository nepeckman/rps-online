// Compiled by ClojureScript 1.9.14 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__9581){
var map__9600 = p__9581;
var map__9600__$1 = ((((!((map__9600 == null)))?((((map__9600.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9600.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9600):map__9600);
var m = map__9600__$1;
var n = cljs.core.get.call(null,map__9600__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__9600__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
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
var seq__9602_9618 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9603_9619 = null;
var count__9604_9620 = (0);
var i__9605_9621 = (0);
while(true){
if((i__9605_9621 < count__9604_9620)){
var f_9622 = cljs.core._nth.call(null,chunk__9603_9619,i__9605_9621);
cljs.core.println.call(null,"  ",f_9622);

var G__9623 = seq__9602_9618;
var G__9624 = chunk__9603_9619;
var G__9625 = count__9604_9620;
var G__9626 = (i__9605_9621 + (1));
seq__9602_9618 = G__9623;
chunk__9603_9619 = G__9624;
count__9604_9620 = G__9625;
i__9605_9621 = G__9626;
continue;
} else {
var temp__4657__auto___9627 = cljs.core.seq.call(null,seq__9602_9618);
if(temp__4657__auto___9627){
var seq__9602_9628__$1 = temp__4657__auto___9627;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9602_9628__$1)){
var c__7358__auto___9629 = cljs.core.chunk_first.call(null,seq__9602_9628__$1);
var G__9630 = cljs.core.chunk_rest.call(null,seq__9602_9628__$1);
var G__9631 = c__7358__auto___9629;
var G__9632 = cljs.core.count.call(null,c__7358__auto___9629);
var G__9633 = (0);
seq__9602_9618 = G__9630;
chunk__9603_9619 = G__9631;
count__9604_9620 = G__9632;
i__9605_9621 = G__9633;
continue;
} else {
var f_9634 = cljs.core.first.call(null,seq__9602_9628__$1);
cljs.core.println.call(null,"  ",f_9634);

var G__9635 = cljs.core.next.call(null,seq__9602_9628__$1);
var G__9636 = null;
var G__9637 = (0);
var G__9638 = (0);
seq__9602_9618 = G__9635;
chunk__9603_9619 = G__9636;
count__9604_9620 = G__9637;
i__9605_9621 = G__9638;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_9639 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6547__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6547__auto__)){
return or__6547__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_9639);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_9639)))?cljs.core.second.call(null,arglists_9639):arglists_9639));
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
var seq__9606_9640 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9607_9641 = null;
var count__9608_9642 = (0);
var i__9609_9643 = (0);
while(true){
if((i__9609_9643 < count__9608_9642)){
var vec__9610_9644 = cljs.core._nth.call(null,chunk__9607_9641,i__9609_9643);
var name_9645 = cljs.core.nth.call(null,vec__9610_9644,(0),null);
var map__9611_9646 = cljs.core.nth.call(null,vec__9610_9644,(1),null);
var map__9611_9647__$1 = ((((!((map__9611_9646 == null)))?((((map__9611_9646.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9611_9646.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9611_9646):map__9611_9646);
var doc_9648 = cljs.core.get.call(null,map__9611_9647__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_9649 = cljs.core.get.call(null,map__9611_9647__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_9645);

cljs.core.println.call(null," ",arglists_9649);

if(cljs.core.truth_(doc_9648)){
cljs.core.println.call(null," ",doc_9648);
} else {
}

var G__9650 = seq__9606_9640;
var G__9651 = chunk__9607_9641;
var G__9652 = count__9608_9642;
var G__9653 = (i__9609_9643 + (1));
seq__9606_9640 = G__9650;
chunk__9607_9641 = G__9651;
count__9608_9642 = G__9652;
i__9609_9643 = G__9653;
continue;
} else {
var temp__4657__auto___9654 = cljs.core.seq.call(null,seq__9606_9640);
if(temp__4657__auto___9654){
var seq__9606_9655__$1 = temp__4657__auto___9654;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9606_9655__$1)){
var c__7358__auto___9656 = cljs.core.chunk_first.call(null,seq__9606_9655__$1);
var G__9657 = cljs.core.chunk_rest.call(null,seq__9606_9655__$1);
var G__9658 = c__7358__auto___9656;
var G__9659 = cljs.core.count.call(null,c__7358__auto___9656);
var G__9660 = (0);
seq__9606_9640 = G__9657;
chunk__9607_9641 = G__9658;
count__9608_9642 = G__9659;
i__9609_9643 = G__9660;
continue;
} else {
var vec__9613_9661 = cljs.core.first.call(null,seq__9606_9655__$1);
var name_9662 = cljs.core.nth.call(null,vec__9613_9661,(0),null);
var map__9614_9663 = cljs.core.nth.call(null,vec__9613_9661,(1),null);
var map__9614_9664__$1 = ((((!((map__9614_9663 == null)))?((((map__9614_9663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9614_9663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9614_9663):map__9614_9663);
var doc_9665 = cljs.core.get.call(null,map__9614_9664__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_9666 = cljs.core.get.call(null,map__9614_9664__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_9662);

cljs.core.println.call(null," ",arglists_9666);

if(cljs.core.truth_(doc_9665)){
cljs.core.println.call(null," ",doc_9665);
} else {
}

var G__9667 = cljs.core.next.call(null,seq__9606_9655__$1);
var G__9668 = null;
var G__9669 = (0);
var G__9670 = (0);
seq__9606_9640 = G__9667;
chunk__9607_9641 = G__9668;
count__9608_9642 = G__9669;
i__9609_9643 = G__9670;
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
var temp__4657__auto__ = cljs.spec.fn_specs.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var specs = temp__4657__auto__;
cljs.core.println.call(null,"Spec");

return cljs.core.run_BANG_.call(null,((function (specs,temp__4657__auto__,map__9600,map__9600__$1,m,n,nm){
return (function (p__9616){
var vec__9617 = p__9616;
var role = cljs.core.nth.call(null,vec__9617,(0),null);
var spec = cljs.core.nth.call(null,vec__9617,(1),null);
if(cljs.core.truth_((function (){var and__6535__auto__ = spec;
if(cljs.core.truth_(and__6535__auto__)){
return !(cljs.core._EQ_.call(null,spec,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582)));
} else {
return and__6535__auto__;
}
})())){
return cljs.core.println.call(null," ",[cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec));
} else {
return null;
}
});})(specs,temp__4657__auto__,map__9600,map__9600__$1,m,n,nm))
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