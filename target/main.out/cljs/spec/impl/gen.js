// Compiled by ClojureScript 1.9.14 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__7153__auto__,writer__7154__auto__,opt__7155__auto__){
return cljs.core._write.call(null,writer__7154__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__7629__auto__ = [];
var len__7622__auto___8012 = arguments.length;
var i__7623__auto___8013 = (0);
while(true){
if((i__7623__auto___8013 < len__7622__auto___8012)){
args__7629__auto__.push((arguments[i__7623__auto___8013]));

var G__8014 = (i__7623__auto___8013 + (1));
i__7623__auto___8013 = G__8014;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((0) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__7630__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq8011){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8011));
});
cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__7629__auto__ = [];
var len__7622__auto___8016 = arguments.length;
var i__7623__auto___8017 = (0);
while(true){
if((i__7623__auto___8017 < len__7622__auto___8016)){
args__7629__auto__.push((arguments[i__7623__auto___8017]));

var G__8018 = (i__7623__auto___8017 + (1));
i__7623__auto___8017 = G__8018;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((0) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__7630__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq8015){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8015));
});
var g_QMARK__8019 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_8020 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__8019){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__8019))
,null));
var mkg_8021 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__8019,g_8020){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__8019,g_8020))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__8019,g_8020,mkg_8021){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__8019).call(null,x);
});})(g_QMARK__8019,g_8020,mkg_8021))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__8019,g_8020,mkg_8021){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_8021).call(null,gfn);
});})(g_QMARK__8019,g_8020,mkg_8021))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__8019,g_8020,mkg_8021){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_8020).call(null,generator);
});})(g_QMARK__8019,g_8020,mkg_8021))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__7983__auto___8037 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__7983__auto___8037){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__7629__auto__ = [];
var len__7622__auto___8038 = arguments.length;
var i__7623__auto___8039 = (0);
while(true){
if((i__7623__auto___8039 < len__7622__auto___8038)){
args__7629__auto__.push((arguments[i__7623__auto___8039]));

var G__8040 = (i__7623__auto___8039 + (1));
i__7623__auto___8039 = G__8040;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((0) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__7630__auto__);
});})(g__7983__auto___8037))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7983__auto___8037){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7983__auto___8037),args);
});})(g__7983__auto___8037))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__7983__auto___8037){
return (function (seq8022){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8022));
});})(g__7983__auto___8037))
;

var g__7983__auto___8041 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__7983__auto___8041){
return (function cljs$spec$impl$gen$list(var_args){
var args__7629__auto__ = [];
var len__7622__auto___8042 = arguments.length;
var i__7623__auto___8043 = (0);
while(true){
if((i__7623__auto___8043 < len__7622__auto___8042)){
args__7629__auto__.push((arguments[i__7623__auto___8043]));

var G__8044 = (i__7623__auto___8043 + (1));
i__7623__auto___8043 = G__8044;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((0) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__7630__auto__);
});})(g__7983__auto___8041))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7983__auto___8041){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7983__auto___8041),args);
});})(g__7983__auto___8041))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__7983__auto___8041){
return (function (seq8023){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8023));
});})(g__7983__auto___8041))
;

var g__7983__auto___8045 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__7983__auto___8045){
return (function cljs$spec$impl$gen$map(var_args){
var args__7629__auto__ = [];
var len__7622__auto___8046 = arguments.length;
var i__7623__auto___8047 = (0);
while(true){
if((i__7623__auto___8047 < len__7622__auto___8046)){
args__7629__auto__.push((arguments[i__7623__auto___8047]));

var G__8048 = (i__7623__auto___8047 + (1));
i__7623__auto___8047 = G__8048;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((0) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__7630__auto__);
});})(g__7983__auto___8045))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7983__auto___8045){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7983__auto___8045),args);
});})(g__7983__auto___8045))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__7983__auto___8045){
return (function (seq8024){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8024));
});})(g__7983__auto___8045))
;

var g__7983__auto___8049 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__7983__auto___8049){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__7629__auto__ = [];
var len__7622__auto___8050 = arguments.length;
var i__7623__auto___8051 = (0);
while(true){
if((i__7623__auto___8051 < len__7622__auto___8050)){
args__7629__auto__.push((arguments[i__7623__auto___8051]));

var G__8052 = (i__7623__auto___8051 + (1));
i__7623__auto___8051 = G__8052;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((0) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__7630__auto__);
});})(g__7983__auto___8049))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7983__auto___8049){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7983__auto___8049),args);
});})(g__7983__auto___8049))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__7983__auto___8049){
return (function (seq8025){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8025));
});})(g__7983__auto___8049))
;

var g__7983__auto___8053 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__7983__auto___8053){
return (function cljs$spec$impl$gen$set(var_args){
var args__7629__auto__ = [];
var len__7622__auto___8054 = arguments.length;
var i__7623__auto___8055 = (0);
while(true){
if((i__7623__auto___8055 < len__7622__auto___8054)){
args__7629__auto__.push((arguments[i__7623__auto___8055]));

var G__8056 = (i__7623__auto___8055 + (1));
i__7623__auto___8055 = G__8056;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((0) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__7630__auto__);
});})(g__7983__auto___8053))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7983__auto___8053){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7983__auto___8053),args);
});})(g__7983__auto___8053))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__7983__auto___8053){
return (function (seq8026){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8026));
});})(g__7983__auto___8053))
;

var g__7983__auto___8057 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__7983__auto___8057){
return (function cljs$spec$impl$gen$vector(var_args){
var args__7629__auto__ = [];
var len__7622__auto___8058 = arguments.length;
var i__7623__auto___8059 = (0);
while(true){
if((i__7623__auto___8059 < len__7622__auto___8058)){
args__7629__auto__.push((arguments[i__7623__auto___8059]));

var G__8060 = (i__7623__auto___8059 + (1));
i__7623__auto___8059 = G__8060;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((0) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__7630__auto__);
});})(g__7983__auto___8057))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7983__auto___8057){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7983__auto___8057),args);
});})(g__7983__auto___8057))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__7983__auto___8057){
return (function (seq8027){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8027));
});})(g__7983__auto___8057))
;

var g__7983__auto___8061 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__7983__auto___8061){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__7629__auto__ = [];
var len__7622__auto___8062 = arguments.length;
var i__7623__auto___8063 = (0);
while(true){
if((i__7623__auto___8063 < len__7622__auto___8062)){
args__7629__auto__.push((arguments[i__7623__auto___8063]));

var G__8064 = (i__7623__auto___8063 + (1));
i__7623__auto___8063 = G__8064;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((0) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__7630__auto__);
});})(g__7983__auto___8061))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7983__auto___8061){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7983__auto___8061),args);
});})(g__7983__auto___8061))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__7983__auto___8061){
return (function (seq8028){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8028));
});})(g__7983__auto___8061))
;

var g__7983__auto___8065 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__7983__auto___8065){
return (function cljs$spec$impl$gen$elements(var_args){
var args__7629__auto__ = [];
var len__7622__auto___8066 = arguments.length;
var i__7623__auto___8067 = (0);
while(true){
if((i__7623__auto___8067 < len__7622__auto___8066)){
args__7629__auto__.push((arguments[i__7623__auto___8067]));

var G__8068 = (i__7623__auto___8067 + (1));
i__7623__auto___8067 = G__8068;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((0) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__7630__auto__);
});})(g__7983__auto___8065))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7983__auto___8065){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7983__auto___8065),args);
});})(g__7983__auto___8065))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__7983__auto___8065){
return (function (seq8029){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8029));
});})(g__7983__auto___8065))
;

var g__7983__auto___8069 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__7983__auto___8069){
return (function cljs$spec$impl$gen$bind(var_args){
var args__7629__auto__ = [];
var len__7622__auto___8070 = arguments.length;
var i__7623__auto___8071 = (0);
while(true){
if((i__7623__auto___8071 < len__7622__auto___8070)){
args__7629__auto__.push((arguments[i__7623__auto___8071]));

var G__8072 = (i__7623__auto___8071 + (1));
i__7623__auto___8071 = G__8072;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((0) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__7630__auto__);
});})(g__7983__auto___8069))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7983__auto___8069){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7983__auto___8069),args);
});})(g__7983__auto___8069))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__7983__auto___8069){
return (function (seq8030){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8030));
});})(g__7983__auto___8069))
;

var g__7983__auto___8073 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__7983__auto___8073){
return (function cljs$spec$impl$gen$choose(var_args){
var args__7629__auto__ = [];
var len__7622__auto___8074 = arguments.length;
var i__7623__auto___8075 = (0);
while(true){
if((i__7623__auto___8075 < len__7622__auto___8074)){
args__7629__auto__.push((arguments[i__7623__auto___8075]));

var G__8076 = (i__7623__auto___8075 + (1));
i__7623__auto___8075 = G__8076;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((0) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__7630__auto__);
});})(g__7983__auto___8073))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7983__auto___8073){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7983__auto___8073),args);
});})(g__7983__auto___8073))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__7983__auto___8073){
return (function (seq8031){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8031));
});})(g__7983__auto___8073))
;

var g__7983__auto___8077 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__7983__auto___8077){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__7629__auto__ = [];
var len__7622__auto___8078 = arguments.length;
var i__7623__auto___8079 = (0);
while(true){
if((i__7623__auto___8079 < len__7622__auto___8078)){
args__7629__auto__.push((arguments[i__7623__auto___8079]));

var G__8080 = (i__7623__auto___8079 + (1));
i__7623__auto___8079 = G__8080;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((0) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__7630__auto__);
});})(g__7983__auto___8077))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7983__auto___8077){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7983__auto___8077),args);
});})(g__7983__auto___8077))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__7983__auto___8077){
return (function (seq8032){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8032));
});})(g__7983__auto___8077))
;

var g__7983__auto___8081 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__7983__auto___8081){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__7629__auto__ = [];
var len__7622__auto___8082 = arguments.length;
var i__7623__auto___8083 = (0);
while(true){
if((i__7623__auto___8083 < len__7622__auto___8082)){
args__7629__auto__.push((arguments[i__7623__auto___8083]));

var G__8084 = (i__7623__auto___8083 + (1));
i__7623__auto___8083 = G__8084;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((0) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__7630__auto__);
});})(g__7983__auto___8081))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7983__auto___8081){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7983__auto___8081),args);
});})(g__7983__auto___8081))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__7983__auto___8081){
return (function (seq8033){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8033));
});})(g__7983__auto___8081))
;

var g__7983__auto___8085 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__7983__auto___8085){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__7629__auto__ = [];
var len__7622__auto___8086 = arguments.length;
var i__7623__auto___8087 = (0);
while(true){
if((i__7623__auto___8087 < len__7622__auto___8086)){
args__7629__auto__.push((arguments[i__7623__auto___8087]));

var G__8088 = (i__7623__auto___8087 + (1));
i__7623__auto___8087 = G__8088;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((0) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__7630__auto__);
});})(g__7983__auto___8085))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7983__auto___8085){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7983__auto___8085),args);
});})(g__7983__auto___8085))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__7983__auto___8085){
return (function (seq8034){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8034));
});})(g__7983__auto___8085))
;

var g__7983__auto___8089 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__7983__auto___8089){
return (function cljs$spec$impl$gen$sample(var_args){
var args__7629__auto__ = [];
var len__7622__auto___8090 = arguments.length;
var i__7623__auto___8091 = (0);
while(true){
if((i__7623__auto___8091 < len__7622__auto___8090)){
args__7629__auto__.push((arguments[i__7623__auto___8091]));

var G__8092 = (i__7623__auto___8091 + (1));
i__7623__auto___8091 = G__8092;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((0) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__7630__auto__);
});})(g__7983__auto___8089))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7983__auto___8089){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7983__auto___8089),args);
});})(g__7983__auto___8089))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__7983__auto___8089){
return (function (seq8035){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8035));
});})(g__7983__auto___8089))
;

var g__7983__auto___8093 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__7983__auto___8093){
return (function cljs$spec$impl$gen$return(var_args){
var args__7629__auto__ = [];
var len__7622__auto___8094 = arguments.length;
var i__7623__auto___8095 = (0);
while(true){
if((i__7623__auto___8095 < len__7622__auto___8094)){
args__7629__auto__.push((arguments[i__7623__auto___8095]));

var G__8096 = (i__7623__auto___8095 + (1));
i__7623__auto___8095 = G__8096;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((0) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__7630__auto__);
});})(g__7983__auto___8093))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7983__auto___8093){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7983__auto___8093),args);
});})(g__7983__auto___8093))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__7983__auto___8093){
return (function (seq8036){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8036));
});})(g__7983__auto___8093))
;
var g__7996__auto___8118 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__7996__auto___8118){
return (function cljs$spec$impl$gen$any(var_args){
var args__7629__auto__ = [];
var len__7622__auto___8119 = arguments.length;
var i__7623__auto___8120 = (0);
while(true){
if((i__7623__auto___8120 < len__7622__auto___8119)){
args__7629__auto__.push((arguments[i__7623__auto___8120]));

var G__8121 = (i__7623__auto___8120 + (1));
i__7623__auto___8120 = G__8121;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((0) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__7630__auto__);
});})(g__7996__auto___8118))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7996__auto___8118){
return (function (args){
return cljs.core.deref.call(null,g__7996__auto___8118);
});})(g__7996__auto___8118))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__7996__auto___8118){
return (function (seq8097){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8097));
});})(g__7996__auto___8118))
;

var g__7996__auto___8122 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__7996__auto___8122){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__7629__auto__ = [];
var len__7622__auto___8123 = arguments.length;
var i__7623__auto___8124 = (0);
while(true){
if((i__7623__auto___8124 < len__7622__auto___8123)){
args__7629__auto__.push((arguments[i__7623__auto___8124]));

var G__8125 = (i__7623__auto___8124 + (1));
i__7623__auto___8124 = G__8125;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((0) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__7630__auto__);
});})(g__7996__auto___8122))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7996__auto___8122){
return (function (args){
return cljs.core.deref.call(null,g__7996__auto___8122);
});})(g__7996__auto___8122))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__7996__auto___8122){
return (function (seq8098){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8098));
});})(g__7996__auto___8122))
;

var g__7996__auto___8126 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__7996__auto___8126){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__7629__auto__ = [];
var len__7622__auto___8127 = arguments.length;
var i__7623__auto___8128 = (0);
while(true){
if((i__7623__auto___8128 < len__7622__auto___8127)){
args__7629__auto__.push((arguments[i__7623__auto___8128]));

var G__8129 = (i__7623__auto___8128 + (1));
i__7623__auto___8128 = G__8129;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((0) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__7630__auto__);
});})(g__7996__auto___8126))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7996__auto___8126){
return (function (args){
return cljs.core.deref.call(null,g__7996__auto___8126);
});})(g__7996__auto___8126))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__7996__auto___8126){
return (function (seq8099){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8099));
});})(g__7996__auto___8126))
;

var g__7996__auto___8130 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__7996__auto___8130){
return (function cljs$spec$impl$gen$char(var_args){
var args__7629__auto__ = [];
var len__7622__auto___8131 = arguments.length;
var i__7623__auto___8132 = (0);
while(true){
if((i__7623__auto___8132 < len__7622__auto___8131)){
args__7629__auto__.push((arguments[i__7623__auto___8132]));

var G__8133 = (i__7623__auto___8132 + (1));
i__7623__auto___8132 = G__8133;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((0) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__7630__auto__);
});})(g__7996__auto___8130))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7996__auto___8130){
return (function (args){
return cljs.core.deref.call(null,g__7996__auto___8130);
});})(g__7996__auto___8130))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__7996__auto___8130){
return (function (seq8100){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8100));
});})(g__7996__auto___8130))
;

var g__7996__auto___8134 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__7996__auto___8134){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__7629__auto__ = [];
var len__7622__auto___8135 = arguments.length;
var i__7623__auto___8136 = (0);
while(true){
if((i__7623__auto___8136 < len__7622__auto___8135)){
args__7629__auto__.push((arguments[i__7623__auto___8136]));

var G__8137 = (i__7623__auto___8136 + (1));
i__7623__auto___8136 = G__8137;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((0) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__7630__auto__);
});})(g__7996__auto___8134))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7996__auto___8134){
return (function (args){
return cljs.core.deref.call(null,g__7996__auto___8134);
});})(g__7996__auto___8134))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__7996__auto___8134){
return (function (seq8101){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8101));
});})(g__7996__auto___8134))
;

var g__7996__auto___8138 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__7996__auto___8138){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__7629__auto__ = [];
var len__7622__auto___8139 = arguments.length;
var i__7623__auto___8140 = (0);
while(true){
if((i__7623__auto___8140 < len__7622__auto___8139)){
args__7629__auto__.push((arguments[i__7623__auto___8140]));

var G__8141 = (i__7623__auto___8140 + (1));
i__7623__auto___8140 = G__8141;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((0) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__7630__auto__);
});})(g__7996__auto___8138))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7996__auto___8138){
return (function (args){
return cljs.core.deref.call(null,g__7996__auto___8138);
});})(g__7996__auto___8138))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__7996__auto___8138){
return (function (seq8102){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8102));
});})(g__7996__auto___8138))
;

var g__7996__auto___8142 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__7996__auto___8142){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__7629__auto__ = [];
var len__7622__auto___8143 = arguments.length;
var i__7623__auto___8144 = (0);
while(true){
if((i__7623__auto___8144 < len__7622__auto___8143)){
args__7629__auto__.push((arguments[i__7623__auto___8144]));

var G__8145 = (i__7623__auto___8144 + (1));
i__7623__auto___8144 = G__8145;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((0) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__7630__auto__);
});})(g__7996__auto___8142))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7996__auto___8142){
return (function (args){
return cljs.core.deref.call(null,g__7996__auto___8142);
});})(g__7996__auto___8142))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__7996__auto___8142){
return (function (seq8103){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8103));
});})(g__7996__auto___8142))
;

var g__7996__auto___8146 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__7996__auto___8146){
return (function cljs$spec$impl$gen$double(var_args){
var args__7629__auto__ = [];
var len__7622__auto___8147 = arguments.length;
var i__7623__auto___8148 = (0);
while(true){
if((i__7623__auto___8148 < len__7622__auto___8147)){
args__7629__auto__.push((arguments[i__7623__auto___8148]));

var G__8149 = (i__7623__auto___8148 + (1));
i__7623__auto___8148 = G__8149;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((0) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__7630__auto__);
});})(g__7996__auto___8146))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7996__auto___8146){
return (function (args){
return cljs.core.deref.call(null,g__7996__auto___8146);
});})(g__7996__auto___8146))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__7996__auto___8146){
return (function (seq8104){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8104));
});})(g__7996__auto___8146))
;

var g__7996__auto___8150 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__7996__auto___8150){
return (function cljs$spec$impl$gen$int(var_args){
var args__7629__auto__ = [];
var len__7622__auto___8151 = arguments.length;
var i__7623__auto___8152 = (0);
while(true){
if((i__7623__auto___8152 < len__7622__auto___8151)){
args__7629__auto__.push((arguments[i__7623__auto___8152]));

var G__8153 = (i__7623__auto___8152 + (1));
i__7623__auto___8152 = G__8153;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((0) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__7630__auto__);
});})(g__7996__auto___8150))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7996__auto___8150){
return (function (args){
return cljs.core.deref.call(null,g__7996__auto___8150);
});})(g__7996__auto___8150))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__7996__auto___8150){
return (function (seq8105){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8105));
});})(g__7996__auto___8150))
;

var g__7996__auto___8154 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__7996__auto___8154){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__7629__auto__ = [];
var len__7622__auto___8155 = arguments.length;
var i__7623__auto___8156 = (0);
while(true){
if((i__7623__auto___8156 < len__7622__auto___8155)){
args__7629__auto__.push((arguments[i__7623__auto___8156]));

var G__8157 = (i__7623__auto___8156 + (1));
i__7623__auto___8156 = G__8157;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((0) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__7630__auto__);
});})(g__7996__auto___8154))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7996__auto___8154){
return (function (args){
return cljs.core.deref.call(null,g__7996__auto___8154);
});})(g__7996__auto___8154))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__7996__auto___8154){
return (function (seq8106){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8106));
});})(g__7996__auto___8154))
;

var g__7996__auto___8158 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__7996__auto___8158){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__7629__auto__ = [];
var len__7622__auto___8159 = arguments.length;
var i__7623__auto___8160 = (0);
while(true){
if((i__7623__auto___8160 < len__7622__auto___8159)){
args__7629__auto__.push((arguments[i__7623__auto___8160]));

var G__8161 = (i__7623__auto___8160 + (1));
i__7623__auto___8160 = G__8161;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((0) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__7630__auto__);
});})(g__7996__auto___8158))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7996__auto___8158){
return (function (args){
return cljs.core.deref.call(null,g__7996__auto___8158);
});})(g__7996__auto___8158))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__7996__auto___8158){
return (function (seq8107){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8107));
});})(g__7996__auto___8158))
;

var g__7996__auto___8162 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__7996__auto___8162){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__7629__auto__ = [];
var len__7622__auto___8163 = arguments.length;
var i__7623__auto___8164 = (0);
while(true){
if((i__7623__auto___8164 < len__7622__auto___8163)){
args__7629__auto__.push((arguments[i__7623__auto___8164]));

var G__8165 = (i__7623__auto___8164 + (1));
i__7623__auto___8164 = G__8165;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((0) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__7630__auto__);
});})(g__7996__auto___8162))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7996__auto___8162){
return (function (args){
return cljs.core.deref.call(null,g__7996__auto___8162);
});})(g__7996__auto___8162))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__7996__auto___8162){
return (function (seq8108){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8108));
});})(g__7996__auto___8162))
;

var g__7996__auto___8166 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__7996__auto___8166){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__7629__auto__ = [];
var len__7622__auto___8167 = arguments.length;
var i__7623__auto___8168 = (0);
while(true){
if((i__7623__auto___8168 < len__7622__auto___8167)){
args__7629__auto__.push((arguments[i__7623__auto___8168]));

var G__8169 = (i__7623__auto___8168 + (1));
i__7623__auto___8168 = G__8169;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((0) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__7630__auto__);
});})(g__7996__auto___8166))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7996__auto___8166){
return (function (args){
return cljs.core.deref.call(null,g__7996__auto___8166);
});})(g__7996__auto___8166))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__7996__auto___8166){
return (function (seq8109){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8109));
});})(g__7996__auto___8166))
;

var g__7996__auto___8170 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__7996__auto___8170){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__7629__auto__ = [];
var len__7622__auto___8171 = arguments.length;
var i__7623__auto___8172 = (0);
while(true){
if((i__7623__auto___8172 < len__7622__auto___8171)){
args__7629__auto__.push((arguments[i__7623__auto___8172]));

var G__8173 = (i__7623__auto___8172 + (1));
i__7623__auto___8172 = G__8173;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((0) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__7630__auto__);
});})(g__7996__auto___8170))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7996__auto___8170){
return (function (args){
return cljs.core.deref.call(null,g__7996__auto___8170);
});})(g__7996__auto___8170))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__7996__auto___8170){
return (function (seq8110){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8110));
});})(g__7996__auto___8170))
;

var g__7996__auto___8174 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__7996__auto___8174){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__7629__auto__ = [];
var len__7622__auto___8175 = arguments.length;
var i__7623__auto___8176 = (0);
while(true){
if((i__7623__auto___8176 < len__7622__auto___8175)){
args__7629__auto__.push((arguments[i__7623__auto___8176]));

var G__8177 = (i__7623__auto___8176 + (1));
i__7623__auto___8176 = G__8177;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((0) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__7630__auto__);
});})(g__7996__auto___8174))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7996__auto___8174){
return (function (args){
return cljs.core.deref.call(null,g__7996__auto___8174);
});})(g__7996__auto___8174))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__7996__auto___8174){
return (function (seq8111){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8111));
});})(g__7996__auto___8174))
;

var g__7996__auto___8178 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__7996__auto___8178){
return (function cljs$spec$impl$gen$string(var_args){
var args__7629__auto__ = [];
var len__7622__auto___8179 = arguments.length;
var i__7623__auto___8180 = (0);
while(true){
if((i__7623__auto___8180 < len__7622__auto___8179)){
args__7629__auto__.push((arguments[i__7623__auto___8180]));

var G__8181 = (i__7623__auto___8180 + (1));
i__7623__auto___8180 = G__8181;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((0) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__7630__auto__);
});})(g__7996__auto___8178))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7996__auto___8178){
return (function (args){
return cljs.core.deref.call(null,g__7996__auto___8178);
});})(g__7996__auto___8178))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__7996__auto___8178){
return (function (seq8112){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8112));
});})(g__7996__auto___8178))
;

var g__7996__auto___8182 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__7996__auto___8182){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__7629__auto__ = [];
var len__7622__auto___8183 = arguments.length;
var i__7623__auto___8184 = (0);
while(true){
if((i__7623__auto___8184 < len__7622__auto___8183)){
args__7629__auto__.push((arguments[i__7623__auto___8184]));

var G__8185 = (i__7623__auto___8184 + (1));
i__7623__auto___8184 = G__8185;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((0) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__7630__auto__);
});})(g__7996__auto___8182))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7996__auto___8182){
return (function (args){
return cljs.core.deref.call(null,g__7996__auto___8182);
});})(g__7996__auto___8182))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__7996__auto___8182){
return (function (seq8113){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8113));
});})(g__7996__auto___8182))
;

var g__7996__auto___8186 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__7996__auto___8186){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__7629__auto__ = [];
var len__7622__auto___8187 = arguments.length;
var i__7623__auto___8188 = (0);
while(true){
if((i__7623__auto___8188 < len__7622__auto___8187)){
args__7629__auto__.push((arguments[i__7623__auto___8188]));

var G__8189 = (i__7623__auto___8188 + (1));
i__7623__auto___8188 = G__8189;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((0) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__7630__auto__);
});})(g__7996__auto___8186))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7996__auto___8186){
return (function (args){
return cljs.core.deref.call(null,g__7996__auto___8186);
});})(g__7996__auto___8186))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__7996__auto___8186){
return (function (seq8114){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8114));
});})(g__7996__auto___8186))
;

var g__7996__auto___8190 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__7996__auto___8190){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__7629__auto__ = [];
var len__7622__auto___8191 = arguments.length;
var i__7623__auto___8192 = (0);
while(true){
if((i__7623__auto___8192 < len__7622__auto___8191)){
args__7629__auto__.push((arguments[i__7623__auto___8192]));

var G__8193 = (i__7623__auto___8192 + (1));
i__7623__auto___8192 = G__8193;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((0) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__7630__auto__);
});})(g__7996__auto___8190))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7996__auto___8190){
return (function (args){
return cljs.core.deref.call(null,g__7996__auto___8190);
});})(g__7996__auto___8190))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__7996__auto___8190){
return (function (seq8115){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8115));
});})(g__7996__auto___8190))
;

var g__7996__auto___8194 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__7996__auto___8194){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__7629__auto__ = [];
var len__7622__auto___8195 = arguments.length;
var i__7623__auto___8196 = (0);
while(true){
if((i__7623__auto___8196 < len__7622__auto___8195)){
args__7629__auto__.push((arguments[i__7623__auto___8196]));

var G__8197 = (i__7623__auto___8196 + (1));
i__7623__auto___8196 = G__8197;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((0) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__7630__auto__);
});})(g__7996__auto___8194))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7996__auto___8194){
return (function (args){
return cljs.core.deref.call(null,g__7996__auto___8194);
});})(g__7996__auto___8194))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__7996__auto___8194){
return (function (seq8116){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8116));
});})(g__7996__auto___8194))
;

var g__7996__auto___8198 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__7996__auto___8198){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__7629__auto__ = [];
var len__7622__auto___8199 = arguments.length;
var i__7623__auto___8200 = (0);
while(true){
if((i__7623__auto___8200 < len__7622__auto___8199)){
args__7629__auto__.push((arguments[i__7623__auto___8200]));

var G__8201 = (i__7623__auto___8200 + (1));
i__7623__auto___8200 = G__8201;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((0) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__7630__auto__);
});})(g__7996__auto___8198))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7996__auto___8198){
return (function (args){
return cljs.core.deref.call(null,g__7996__auto___8198);
});})(g__7996__auto___8198))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__7996__auto___8198){
return (function (seq8117){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8117));
});})(g__7996__auto___8198))
;
/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__7629__auto__ = [];
var len__7622__auto___8204 = arguments.length;
var i__7623__auto___8205 = (0);
while(true){
if((i__7623__auto___8205 < len__7622__auto___8204)){
args__7629__auto__.push((arguments[i__7623__auto___8205]));

var G__8206 = (i__7623__auto___8205 + (1));
i__7623__auto___8205 = G__8206;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((0) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__7630__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__8202_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__8202_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq8203){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8203));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.char_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.zero_QMARK_,cljs.core.nil_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.number_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map