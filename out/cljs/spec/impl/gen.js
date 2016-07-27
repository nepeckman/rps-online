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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__18496__auto__,writer__18497__auto__,opt__18498__auto__){
return cljs.core._write.call(null,writer__18497__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__18972__auto__ = [];
var len__18965__auto___20440 = arguments.length;
var i__18966__auto___20441 = (0);
while(true){
if((i__18966__auto___20441 < len__18965__auto___20440)){
args__18972__auto__.push((arguments[i__18966__auto___20441]));

var G__20442 = (i__18966__auto___20441 + (1));
i__18966__auto___20441 = G__20442;
continue;
} else {
}
break;
}

var argseq__18973__auto__ = ((((0) < args__18972__auto__.length))?(new cljs.core.IndexedSeq(args__18972__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__18973__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq20439){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20439));
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
var args__18972__auto__ = [];
var len__18965__auto___20444 = arguments.length;
var i__18966__auto___20445 = (0);
while(true){
if((i__18966__auto___20445 < len__18965__auto___20444)){
args__18972__auto__.push((arguments[i__18966__auto___20445]));

var G__20446 = (i__18966__auto___20445 + (1));
i__18966__auto___20445 = G__20446;
continue;
} else {
}
break;
}

var argseq__18973__auto__ = ((((0) < args__18972__auto__.length))?(new cljs.core.IndexedSeq(args__18972__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__18973__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq20443){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20443));
});
var g_QMARK__20447 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_20448 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__20447){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__20447))
,null));
var mkg_20449 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__20447,g_20448){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__20447,g_20448))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__20447,g_20448,mkg_20449){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__20447).call(null,x);
});})(g_QMARK__20447,g_20448,mkg_20449))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__20447,g_20448,mkg_20449){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_20449).call(null,gfn);
});})(g_QMARK__20447,g_20448,mkg_20449))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__20447,g_20448,mkg_20449){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_20448).call(null,generator);
});})(g_QMARK__20447,g_20448,mkg_20449))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__19041__auto___20465 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__19041__auto___20465){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__18972__auto__ = [];
var len__18965__auto___20466 = arguments.length;
var i__18966__auto___20467 = (0);
while(true){
if((i__18966__auto___20467 < len__18965__auto___20466)){
args__18972__auto__.push((arguments[i__18966__auto___20467]));

var G__20468 = (i__18966__auto___20467 + (1));
i__18966__auto___20467 = G__20468;
continue;
} else {
}
break;
}

var argseq__18973__auto__ = ((((0) < args__18972__auto__.length))?(new cljs.core.IndexedSeq(args__18972__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__18973__auto__);
});})(g__19041__auto___20465))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19041__auto___20465){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19041__auto___20465),args);
});})(g__19041__auto___20465))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__19041__auto___20465){
return (function (seq20450){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20450));
});})(g__19041__auto___20465))
;

var g__19041__auto___20469 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__19041__auto___20469){
return (function cljs$spec$impl$gen$list(var_args){
var args__18972__auto__ = [];
var len__18965__auto___20470 = arguments.length;
var i__18966__auto___20471 = (0);
while(true){
if((i__18966__auto___20471 < len__18965__auto___20470)){
args__18972__auto__.push((arguments[i__18966__auto___20471]));

var G__20472 = (i__18966__auto___20471 + (1));
i__18966__auto___20471 = G__20472;
continue;
} else {
}
break;
}

var argseq__18973__auto__ = ((((0) < args__18972__auto__.length))?(new cljs.core.IndexedSeq(args__18972__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__18973__auto__);
});})(g__19041__auto___20469))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19041__auto___20469){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19041__auto___20469),args);
});})(g__19041__auto___20469))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__19041__auto___20469){
return (function (seq20451){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20451));
});})(g__19041__auto___20469))
;

var g__19041__auto___20473 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__19041__auto___20473){
return (function cljs$spec$impl$gen$map(var_args){
var args__18972__auto__ = [];
var len__18965__auto___20474 = arguments.length;
var i__18966__auto___20475 = (0);
while(true){
if((i__18966__auto___20475 < len__18965__auto___20474)){
args__18972__auto__.push((arguments[i__18966__auto___20475]));

var G__20476 = (i__18966__auto___20475 + (1));
i__18966__auto___20475 = G__20476;
continue;
} else {
}
break;
}

var argseq__18973__auto__ = ((((0) < args__18972__auto__.length))?(new cljs.core.IndexedSeq(args__18972__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__18973__auto__);
});})(g__19041__auto___20473))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19041__auto___20473){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19041__auto___20473),args);
});})(g__19041__auto___20473))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__19041__auto___20473){
return (function (seq20452){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20452));
});})(g__19041__auto___20473))
;

var g__19041__auto___20477 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__19041__auto___20477){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__18972__auto__ = [];
var len__18965__auto___20478 = arguments.length;
var i__18966__auto___20479 = (0);
while(true){
if((i__18966__auto___20479 < len__18965__auto___20478)){
args__18972__auto__.push((arguments[i__18966__auto___20479]));

var G__20480 = (i__18966__auto___20479 + (1));
i__18966__auto___20479 = G__20480;
continue;
} else {
}
break;
}

var argseq__18973__auto__ = ((((0) < args__18972__auto__.length))?(new cljs.core.IndexedSeq(args__18972__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__18973__auto__);
});})(g__19041__auto___20477))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19041__auto___20477){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19041__auto___20477),args);
});})(g__19041__auto___20477))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__19041__auto___20477){
return (function (seq20453){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20453));
});})(g__19041__auto___20477))
;

var g__19041__auto___20481 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__19041__auto___20481){
return (function cljs$spec$impl$gen$set(var_args){
var args__18972__auto__ = [];
var len__18965__auto___20482 = arguments.length;
var i__18966__auto___20483 = (0);
while(true){
if((i__18966__auto___20483 < len__18965__auto___20482)){
args__18972__auto__.push((arguments[i__18966__auto___20483]));

var G__20484 = (i__18966__auto___20483 + (1));
i__18966__auto___20483 = G__20484;
continue;
} else {
}
break;
}

var argseq__18973__auto__ = ((((0) < args__18972__auto__.length))?(new cljs.core.IndexedSeq(args__18972__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__18973__auto__);
});})(g__19041__auto___20481))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19041__auto___20481){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19041__auto___20481),args);
});})(g__19041__auto___20481))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__19041__auto___20481){
return (function (seq20454){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20454));
});})(g__19041__auto___20481))
;

var g__19041__auto___20485 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__19041__auto___20485){
return (function cljs$spec$impl$gen$vector(var_args){
var args__18972__auto__ = [];
var len__18965__auto___20486 = arguments.length;
var i__18966__auto___20487 = (0);
while(true){
if((i__18966__auto___20487 < len__18965__auto___20486)){
args__18972__auto__.push((arguments[i__18966__auto___20487]));

var G__20488 = (i__18966__auto___20487 + (1));
i__18966__auto___20487 = G__20488;
continue;
} else {
}
break;
}

var argseq__18973__auto__ = ((((0) < args__18972__auto__.length))?(new cljs.core.IndexedSeq(args__18972__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__18973__auto__);
});})(g__19041__auto___20485))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19041__auto___20485){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19041__auto___20485),args);
});})(g__19041__auto___20485))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__19041__auto___20485){
return (function (seq20455){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20455));
});})(g__19041__auto___20485))
;

var g__19041__auto___20489 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__19041__auto___20489){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__18972__auto__ = [];
var len__18965__auto___20490 = arguments.length;
var i__18966__auto___20491 = (0);
while(true){
if((i__18966__auto___20491 < len__18965__auto___20490)){
args__18972__auto__.push((arguments[i__18966__auto___20491]));

var G__20492 = (i__18966__auto___20491 + (1));
i__18966__auto___20491 = G__20492;
continue;
} else {
}
break;
}

var argseq__18973__auto__ = ((((0) < args__18972__auto__.length))?(new cljs.core.IndexedSeq(args__18972__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__18973__auto__);
});})(g__19041__auto___20489))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19041__auto___20489){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19041__auto___20489),args);
});})(g__19041__auto___20489))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__19041__auto___20489){
return (function (seq20456){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20456));
});})(g__19041__auto___20489))
;

var g__19041__auto___20493 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__19041__auto___20493){
return (function cljs$spec$impl$gen$elements(var_args){
var args__18972__auto__ = [];
var len__18965__auto___20494 = arguments.length;
var i__18966__auto___20495 = (0);
while(true){
if((i__18966__auto___20495 < len__18965__auto___20494)){
args__18972__auto__.push((arguments[i__18966__auto___20495]));

var G__20496 = (i__18966__auto___20495 + (1));
i__18966__auto___20495 = G__20496;
continue;
} else {
}
break;
}

var argseq__18973__auto__ = ((((0) < args__18972__auto__.length))?(new cljs.core.IndexedSeq(args__18972__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__18973__auto__);
});})(g__19041__auto___20493))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19041__auto___20493){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19041__auto___20493),args);
});})(g__19041__auto___20493))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__19041__auto___20493){
return (function (seq20457){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20457));
});})(g__19041__auto___20493))
;

var g__19041__auto___20497 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__19041__auto___20497){
return (function cljs$spec$impl$gen$bind(var_args){
var args__18972__auto__ = [];
var len__18965__auto___20498 = arguments.length;
var i__18966__auto___20499 = (0);
while(true){
if((i__18966__auto___20499 < len__18965__auto___20498)){
args__18972__auto__.push((arguments[i__18966__auto___20499]));

var G__20500 = (i__18966__auto___20499 + (1));
i__18966__auto___20499 = G__20500;
continue;
} else {
}
break;
}

var argseq__18973__auto__ = ((((0) < args__18972__auto__.length))?(new cljs.core.IndexedSeq(args__18972__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__18973__auto__);
});})(g__19041__auto___20497))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19041__auto___20497){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19041__auto___20497),args);
});})(g__19041__auto___20497))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__19041__auto___20497){
return (function (seq20458){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20458));
});})(g__19041__auto___20497))
;

var g__19041__auto___20501 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__19041__auto___20501){
return (function cljs$spec$impl$gen$choose(var_args){
var args__18972__auto__ = [];
var len__18965__auto___20502 = arguments.length;
var i__18966__auto___20503 = (0);
while(true){
if((i__18966__auto___20503 < len__18965__auto___20502)){
args__18972__auto__.push((arguments[i__18966__auto___20503]));

var G__20504 = (i__18966__auto___20503 + (1));
i__18966__auto___20503 = G__20504;
continue;
} else {
}
break;
}

var argseq__18973__auto__ = ((((0) < args__18972__auto__.length))?(new cljs.core.IndexedSeq(args__18972__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__18973__auto__);
});})(g__19041__auto___20501))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19041__auto___20501){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19041__auto___20501),args);
});})(g__19041__auto___20501))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__19041__auto___20501){
return (function (seq20459){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20459));
});})(g__19041__auto___20501))
;

var g__19041__auto___20505 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__19041__auto___20505){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__18972__auto__ = [];
var len__18965__auto___20506 = arguments.length;
var i__18966__auto___20507 = (0);
while(true){
if((i__18966__auto___20507 < len__18965__auto___20506)){
args__18972__auto__.push((arguments[i__18966__auto___20507]));

var G__20508 = (i__18966__auto___20507 + (1));
i__18966__auto___20507 = G__20508;
continue;
} else {
}
break;
}

var argseq__18973__auto__ = ((((0) < args__18972__auto__.length))?(new cljs.core.IndexedSeq(args__18972__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__18973__auto__);
});})(g__19041__auto___20505))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19041__auto___20505){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19041__auto___20505),args);
});})(g__19041__auto___20505))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__19041__auto___20505){
return (function (seq20460){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20460));
});})(g__19041__auto___20505))
;

var g__19041__auto___20509 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__19041__auto___20509){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__18972__auto__ = [];
var len__18965__auto___20510 = arguments.length;
var i__18966__auto___20511 = (0);
while(true){
if((i__18966__auto___20511 < len__18965__auto___20510)){
args__18972__auto__.push((arguments[i__18966__auto___20511]));

var G__20512 = (i__18966__auto___20511 + (1));
i__18966__auto___20511 = G__20512;
continue;
} else {
}
break;
}

var argseq__18973__auto__ = ((((0) < args__18972__auto__.length))?(new cljs.core.IndexedSeq(args__18972__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__18973__auto__);
});})(g__19041__auto___20509))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19041__auto___20509){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19041__auto___20509),args);
});})(g__19041__auto___20509))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__19041__auto___20509){
return (function (seq20461){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20461));
});})(g__19041__auto___20509))
;

var g__19041__auto___20513 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__19041__auto___20513){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__18972__auto__ = [];
var len__18965__auto___20514 = arguments.length;
var i__18966__auto___20515 = (0);
while(true){
if((i__18966__auto___20515 < len__18965__auto___20514)){
args__18972__auto__.push((arguments[i__18966__auto___20515]));

var G__20516 = (i__18966__auto___20515 + (1));
i__18966__auto___20515 = G__20516;
continue;
} else {
}
break;
}

var argseq__18973__auto__ = ((((0) < args__18972__auto__.length))?(new cljs.core.IndexedSeq(args__18972__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__18973__auto__);
});})(g__19041__auto___20513))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19041__auto___20513){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19041__auto___20513),args);
});})(g__19041__auto___20513))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__19041__auto___20513){
return (function (seq20462){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20462));
});})(g__19041__auto___20513))
;

var g__19041__auto___20517 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__19041__auto___20517){
return (function cljs$spec$impl$gen$sample(var_args){
var args__18972__auto__ = [];
var len__18965__auto___20518 = arguments.length;
var i__18966__auto___20519 = (0);
while(true){
if((i__18966__auto___20519 < len__18965__auto___20518)){
args__18972__auto__.push((arguments[i__18966__auto___20519]));

var G__20520 = (i__18966__auto___20519 + (1));
i__18966__auto___20519 = G__20520;
continue;
} else {
}
break;
}

var argseq__18973__auto__ = ((((0) < args__18972__auto__.length))?(new cljs.core.IndexedSeq(args__18972__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__18973__auto__);
});})(g__19041__auto___20517))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19041__auto___20517){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19041__auto___20517),args);
});})(g__19041__auto___20517))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__19041__auto___20517){
return (function (seq20463){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20463));
});})(g__19041__auto___20517))
;

var g__19041__auto___20521 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__19041__auto___20521){
return (function cljs$spec$impl$gen$return(var_args){
var args__18972__auto__ = [];
var len__18965__auto___20522 = arguments.length;
var i__18966__auto___20523 = (0);
while(true){
if((i__18966__auto___20523 < len__18965__auto___20522)){
args__18972__auto__.push((arguments[i__18966__auto___20523]));

var G__20524 = (i__18966__auto___20523 + (1));
i__18966__auto___20523 = G__20524;
continue;
} else {
}
break;
}

var argseq__18973__auto__ = ((((0) < args__18972__auto__.length))?(new cljs.core.IndexedSeq(args__18972__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__18973__auto__);
});})(g__19041__auto___20521))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19041__auto___20521){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19041__auto___20521),args);
});})(g__19041__auto___20521))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__19041__auto___20521){
return (function (seq20464){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20464));
});})(g__19041__auto___20521))
;
var g__19054__auto___20546 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__19054__auto___20546){
return (function cljs$spec$impl$gen$any(var_args){
var args__18972__auto__ = [];
var len__18965__auto___20547 = arguments.length;
var i__18966__auto___20548 = (0);
while(true){
if((i__18966__auto___20548 < len__18965__auto___20547)){
args__18972__auto__.push((arguments[i__18966__auto___20548]));

var G__20549 = (i__18966__auto___20548 + (1));
i__18966__auto___20548 = G__20549;
continue;
} else {
}
break;
}

var argseq__18973__auto__ = ((((0) < args__18972__auto__.length))?(new cljs.core.IndexedSeq(args__18972__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__18973__auto__);
});})(g__19054__auto___20546))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19054__auto___20546){
return (function (args){
return cljs.core.deref.call(null,g__19054__auto___20546);
});})(g__19054__auto___20546))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__19054__auto___20546){
return (function (seq20525){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20525));
});})(g__19054__auto___20546))
;

var g__19054__auto___20550 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__19054__auto___20550){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__18972__auto__ = [];
var len__18965__auto___20551 = arguments.length;
var i__18966__auto___20552 = (0);
while(true){
if((i__18966__auto___20552 < len__18965__auto___20551)){
args__18972__auto__.push((arguments[i__18966__auto___20552]));

var G__20553 = (i__18966__auto___20552 + (1));
i__18966__auto___20552 = G__20553;
continue;
} else {
}
break;
}

var argseq__18973__auto__ = ((((0) < args__18972__auto__.length))?(new cljs.core.IndexedSeq(args__18972__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__18973__auto__);
});})(g__19054__auto___20550))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19054__auto___20550){
return (function (args){
return cljs.core.deref.call(null,g__19054__auto___20550);
});})(g__19054__auto___20550))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__19054__auto___20550){
return (function (seq20526){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20526));
});})(g__19054__auto___20550))
;

var g__19054__auto___20554 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__19054__auto___20554){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__18972__auto__ = [];
var len__18965__auto___20555 = arguments.length;
var i__18966__auto___20556 = (0);
while(true){
if((i__18966__auto___20556 < len__18965__auto___20555)){
args__18972__auto__.push((arguments[i__18966__auto___20556]));

var G__20557 = (i__18966__auto___20556 + (1));
i__18966__auto___20556 = G__20557;
continue;
} else {
}
break;
}

var argseq__18973__auto__ = ((((0) < args__18972__auto__.length))?(new cljs.core.IndexedSeq(args__18972__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__18973__auto__);
});})(g__19054__auto___20554))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19054__auto___20554){
return (function (args){
return cljs.core.deref.call(null,g__19054__auto___20554);
});})(g__19054__auto___20554))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__19054__auto___20554){
return (function (seq20527){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20527));
});})(g__19054__auto___20554))
;

var g__19054__auto___20558 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__19054__auto___20558){
return (function cljs$spec$impl$gen$char(var_args){
var args__18972__auto__ = [];
var len__18965__auto___20559 = arguments.length;
var i__18966__auto___20560 = (0);
while(true){
if((i__18966__auto___20560 < len__18965__auto___20559)){
args__18972__auto__.push((arguments[i__18966__auto___20560]));

var G__20561 = (i__18966__auto___20560 + (1));
i__18966__auto___20560 = G__20561;
continue;
} else {
}
break;
}

var argseq__18973__auto__ = ((((0) < args__18972__auto__.length))?(new cljs.core.IndexedSeq(args__18972__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__18973__auto__);
});})(g__19054__auto___20558))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19054__auto___20558){
return (function (args){
return cljs.core.deref.call(null,g__19054__auto___20558);
});})(g__19054__auto___20558))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__19054__auto___20558){
return (function (seq20528){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20528));
});})(g__19054__auto___20558))
;

var g__19054__auto___20562 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__19054__auto___20562){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__18972__auto__ = [];
var len__18965__auto___20563 = arguments.length;
var i__18966__auto___20564 = (0);
while(true){
if((i__18966__auto___20564 < len__18965__auto___20563)){
args__18972__auto__.push((arguments[i__18966__auto___20564]));

var G__20565 = (i__18966__auto___20564 + (1));
i__18966__auto___20564 = G__20565;
continue;
} else {
}
break;
}

var argseq__18973__auto__ = ((((0) < args__18972__auto__.length))?(new cljs.core.IndexedSeq(args__18972__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__18973__auto__);
});})(g__19054__auto___20562))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19054__auto___20562){
return (function (args){
return cljs.core.deref.call(null,g__19054__auto___20562);
});})(g__19054__auto___20562))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__19054__auto___20562){
return (function (seq20529){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20529));
});})(g__19054__auto___20562))
;

var g__19054__auto___20566 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__19054__auto___20566){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__18972__auto__ = [];
var len__18965__auto___20567 = arguments.length;
var i__18966__auto___20568 = (0);
while(true){
if((i__18966__auto___20568 < len__18965__auto___20567)){
args__18972__auto__.push((arguments[i__18966__auto___20568]));

var G__20569 = (i__18966__auto___20568 + (1));
i__18966__auto___20568 = G__20569;
continue;
} else {
}
break;
}

var argseq__18973__auto__ = ((((0) < args__18972__auto__.length))?(new cljs.core.IndexedSeq(args__18972__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__18973__auto__);
});})(g__19054__auto___20566))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19054__auto___20566){
return (function (args){
return cljs.core.deref.call(null,g__19054__auto___20566);
});})(g__19054__auto___20566))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__19054__auto___20566){
return (function (seq20530){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20530));
});})(g__19054__auto___20566))
;

var g__19054__auto___20570 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__19054__auto___20570){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__18972__auto__ = [];
var len__18965__auto___20571 = arguments.length;
var i__18966__auto___20572 = (0);
while(true){
if((i__18966__auto___20572 < len__18965__auto___20571)){
args__18972__auto__.push((arguments[i__18966__auto___20572]));

var G__20573 = (i__18966__auto___20572 + (1));
i__18966__auto___20572 = G__20573;
continue;
} else {
}
break;
}

var argseq__18973__auto__ = ((((0) < args__18972__auto__.length))?(new cljs.core.IndexedSeq(args__18972__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__18973__auto__);
});})(g__19054__auto___20570))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19054__auto___20570){
return (function (args){
return cljs.core.deref.call(null,g__19054__auto___20570);
});})(g__19054__auto___20570))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__19054__auto___20570){
return (function (seq20531){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20531));
});})(g__19054__auto___20570))
;

var g__19054__auto___20574 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__19054__auto___20574){
return (function cljs$spec$impl$gen$double(var_args){
var args__18972__auto__ = [];
var len__18965__auto___20575 = arguments.length;
var i__18966__auto___20576 = (0);
while(true){
if((i__18966__auto___20576 < len__18965__auto___20575)){
args__18972__auto__.push((arguments[i__18966__auto___20576]));

var G__20577 = (i__18966__auto___20576 + (1));
i__18966__auto___20576 = G__20577;
continue;
} else {
}
break;
}

var argseq__18973__auto__ = ((((0) < args__18972__auto__.length))?(new cljs.core.IndexedSeq(args__18972__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__18973__auto__);
});})(g__19054__auto___20574))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19054__auto___20574){
return (function (args){
return cljs.core.deref.call(null,g__19054__auto___20574);
});})(g__19054__auto___20574))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__19054__auto___20574){
return (function (seq20532){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20532));
});})(g__19054__auto___20574))
;

var g__19054__auto___20578 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__19054__auto___20578){
return (function cljs$spec$impl$gen$int(var_args){
var args__18972__auto__ = [];
var len__18965__auto___20579 = arguments.length;
var i__18966__auto___20580 = (0);
while(true){
if((i__18966__auto___20580 < len__18965__auto___20579)){
args__18972__auto__.push((arguments[i__18966__auto___20580]));

var G__20581 = (i__18966__auto___20580 + (1));
i__18966__auto___20580 = G__20581;
continue;
} else {
}
break;
}

var argseq__18973__auto__ = ((((0) < args__18972__auto__.length))?(new cljs.core.IndexedSeq(args__18972__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__18973__auto__);
});})(g__19054__auto___20578))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19054__auto___20578){
return (function (args){
return cljs.core.deref.call(null,g__19054__auto___20578);
});})(g__19054__auto___20578))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__19054__auto___20578){
return (function (seq20533){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20533));
});})(g__19054__auto___20578))
;

var g__19054__auto___20582 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__19054__auto___20582){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__18972__auto__ = [];
var len__18965__auto___20583 = arguments.length;
var i__18966__auto___20584 = (0);
while(true){
if((i__18966__auto___20584 < len__18965__auto___20583)){
args__18972__auto__.push((arguments[i__18966__auto___20584]));

var G__20585 = (i__18966__auto___20584 + (1));
i__18966__auto___20584 = G__20585;
continue;
} else {
}
break;
}

var argseq__18973__auto__ = ((((0) < args__18972__auto__.length))?(new cljs.core.IndexedSeq(args__18972__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__18973__auto__);
});})(g__19054__auto___20582))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19054__auto___20582){
return (function (args){
return cljs.core.deref.call(null,g__19054__auto___20582);
});})(g__19054__auto___20582))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__19054__auto___20582){
return (function (seq20534){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20534));
});})(g__19054__auto___20582))
;

var g__19054__auto___20586 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__19054__auto___20586){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__18972__auto__ = [];
var len__18965__auto___20587 = arguments.length;
var i__18966__auto___20588 = (0);
while(true){
if((i__18966__auto___20588 < len__18965__auto___20587)){
args__18972__auto__.push((arguments[i__18966__auto___20588]));

var G__20589 = (i__18966__auto___20588 + (1));
i__18966__auto___20588 = G__20589;
continue;
} else {
}
break;
}

var argseq__18973__auto__ = ((((0) < args__18972__auto__.length))?(new cljs.core.IndexedSeq(args__18972__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__18973__auto__);
});})(g__19054__auto___20586))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19054__auto___20586){
return (function (args){
return cljs.core.deref.call(null,g__19054__auto___20586);
});})(g__19054__auto___20586))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__19054__auto___20586){
return (function (seq20535){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20535));
});})(g__19054__auto___20586))
;

var g__19054__auto___20590 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__19054__auto___20590){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__18972__auto__ = [];
var len__18965__auto___20591 = arguments.length;
var i__18966__auto___20592 = (0);
while(true){
if((i__18966__auto___20592 < len__18965__auto___20591)){
args__18972__auto__.push((arguments[i__18966__auto___20592]));

var G__20593 = (i__18966__auto___20592 + (1));
i__18966__auto___20592 = G__20593;
continue;
} else {
}
break;
}

var argseq__18973__auto__ = ((((0) < args__18972__auto__.length))?(new cljs.core.IndexedSeq(args__18972__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__18973__auto__);
});})(g__19054__auto___20590))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19054__auto___20590){
return (function (args){
return cljs.core.deref.call(null,g__19054__auto___20590);
});})(g__19054__auto___20590))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__19054__auto___20590){
return (function (seq20536){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20536));
});})(g__19054__auto___20590))
;

var g__19054__auto___20594 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__19054__auto___20594){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__18972__auto__ = [];
var len__18965__auto___20595 = arguments.length;
var i__18966__auto___20596 = (0);
while(true){
if((i__18966__auto___20596 < len__18965__auto___20595)){
args__18972__auto__.push((arguments[i__18966__auto___20596]));

var G__20597 = (i__18966__auto___20596 + (1));
i__18966__auto___20596 = G__20597;
continue;
} else {
}
break;
}

var argseq__18973__auto__ = ((((0) < args__18972__auto__.length))?(new cljs.core.IndexedSeq(args__18972__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__18973__auto__);
});})(g__19054__auto___20594))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19054__auto___20594){
return (function (args){
return cljs.core.deref.call(null,g__19054__auto___20594);
});})(g__19054__auto___20594))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__19054__auto___20594){
return (function (seq20537){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20537));
});})(g__19054__auto___20594))
;

var g__19054__auto___20598 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__19054__auto___20598){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__18972__auto__ = [];
var len__18965__auto___20599 = arguments.length;
var i__18966__auto___20600 = (0);
while(true){
if((i__18966__auto___20600 < len__18965__auto___20599)){
args__18972__auto__.push((arguments[i__18966__auto___20600]));

var G__20601 = (i__18966__auto___20600 + (1));
i__18966__auto___20600 = G__20601;
continue;
} else {
}
break;
}

var argseq__18973__auto__ = ((((0) < args__18972__auto__.length))?(new cljs.core.IndexedSeq(args__18972__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__18973__auto__);
});})(g__19054__auto___20598))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19054__auto___20598){
return (function (args){
return cljs.core.deref.call(null,g__19054__auto___20598);
});})(g__19054__auto___20598))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__19054__auto___20598){
return (function (seq20538){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20538));
});})(g__19054__auto___20598))
;

var g__19054__auto___20602 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__19054__auto___20602){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__18972__auto__ = [];
var len__18965__auto___20603 = arguments.length;
var i__18966__auto___20604 = (0);
while(true){
if((i__18966__auto___20604 < len__18965__auto___20603)){
args__18972__auto__.push((arguments[i__18966__auto___20604]));

var G__20605 = (i__18966__auto___20604 + (1));
i__18966__auto___20604 = G__20605;
continue;
} else {
}
break;
}

var argseq__18973__auto__ = ((((0) < args__18972__auto__.length))?(new cljs.core.IndexedSeq(args__18972__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__18973__auto__);
});})(g__19054__auto___20602))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19054__auto___20602){
return (function (args){
return cljs.core.deref.call(null,g__19054__auto___20602);
});})(g__19054__auto___20602))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__19054__auto___20602){
return (function (seq20539){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20539));
});})(g__19054__auto___20602))
;

var g__19054__auto___20606 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__19054__auto___20606){
return (function cljs$spec$impl$gen$string(var_args){
var args__18972__auto__ = [];
var len__18965__auto___20607 = arguments.length;
var i__18966__auto___20608 = (0);
while(true){
if((i__18966__auto___20608 < len__18965__auto___20607)){
args__18972__auto__.push((arguments[i__18966__auto___20608]));

var G__20609 = (i__18966__auto___20608 + (1));
i__18966__auto___20608 = G__20609;
continue;
} else {
}
break;
}

var argseq__18973__auto__ = ((((0) < args__18972__auto__.length))?(new cljs.core.IndexedSeq(args__18972__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__18973__auto__);
});})(g__19054__auto___20606))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19054__auto___20606){
return (function (args){
return cljs.core.deref.call(null,g__19054__auto___20606);
});})(g__19054__auto___20606))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__19054__auto___20606){
return (function (seq20540){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20540));
});})(g__19054__auto___20606))
;

var g__19054__auto___20610 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__19054__auto___20610){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__18972__auto__ = [];
var len__18965__auto___20611 = arguments.length;
var i__18966__auto___20612 = (0);
while(true){
if((i__18966__auto___20612 < len__18965__auto___20611)){
args__18972__auto__.push((arguments[i__18966__auto___20612]));

var G__20613 = (i__18966__auto___20612 + (1));
i__18966__auto___20612 = G__20613;
continue;
} else {
}
break;
}

var argseq__18973__auto__ = ((((0) < args__18972__auto__.length))?(new cljs.core.IndexedSeq(args__18972__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__18973__auto__);
});})(g__19054__auto___20610))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19054__auto___20610){
return (function (args){
return cljs.core.deref.call(null,g__19054__auto___20610);
});})(g__19054__auto___20610))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__19054__auto___20610){
return (function (seq20541){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20541));
});})(g__19054__auto___20610))
;

var g__19054__auto___20614 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__19054__auto___20614){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__18972__auto__ = [];
var len__18965__auto___20615 = arguments.length;
var i__18966__auto___20616 = (0);
while(true){
if((i__18966__auto___20616 < len__18965__auto___20615)){
args__18972__auto__.push((arguments[i__18966__auto___20616]));

var G__20617 = (i__18966__auto___20616 + (1));
i__18966__auto___20616 = G__20617;
continue;
} else {
}
break;
}

var argseq__18973__auto__ = ((((0) < args__18972__auto__.length))?(new cljs.core.IndexedSeq(args__18972__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__18973__auto__);
});})(g__19054__auto___20614))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19054__auto___20614){
return (function (args){
return cljs.core.deref.call(null,g__19054__auto___20614);
});})(g__19054__auto___20614))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__19054__auto___20614){
return (function (seq20542){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20542));
});})(g__19054__auto___20614))
;

var g__19054__auto___20618 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__19054__auto___20618){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__18972__auto__ = [];
var len__18965__auto___20619 = arguments.length;
var i__18966__auto___20620 = (0);
while(true){
if((i__18966__auto___20620 < len__18965__auto___20619)){
args__18972__auto__.push((arguments[i__18966__auto___20620]));

var G__20621 = (i__18966__auto___20620 + (1));
i__18966__auto___20620 = G__20621;
continue;
} else {
}
break;
}

var argseq__18973__auto__ = ((((0) < args__18972__auto__.length))?(new cljs.core.IndexedSeq(args__18972__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__18973__auto__);
});})(g__19054__auto___20618))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19054__auto___20618){
return (function (args){
return cljs.core.deref.call(null,g__19054__auto___20618);
});})(g__19054__auto___20618))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__19054__auto___20618){
return (function (seq20543){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20543));
});})(g__19054__auto___20618))
;

var g__19054__auto___20622 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__19054__auto___20622){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__18972__auto__ = [];
var len__18965__auto___20623 = arguments.length;
var i__18966__auto___20624 = (0);
while(true){
if((i__18966__auto___20624 < len__18965__auto___20623)){
args__18972__auto__.push((arguments[i__18966__auto___20624]));

var G__20625 = (i__18966__auto___20624 + (1));
i__18966__auto___20624 = G__20625;
continue;
} else {
}
break;
}

var argseq__18973__auto__ = ((((0) < args__18972__auto__.length))?(new cljs.core.IndexedSeq(args__18972__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__18973__auto__);
});})(g__19054__auto___20622))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19054__auto___20622){
return (function (args){
return cljs.core.deref.call(null,g__19054__auto___20622);
});})(g__19054__auto___20622))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__19054__auto___20622){
return (function (seq20544){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20544));
});})(g__19054__auto___20622))
;

var g__19054__auto___20626 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__19054__auto___20626){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__18972__auto__ = [];
var len__18965__auto___20627 = arguments.length;
var i__18966__auto___20628 = (0);
while(true){
if((i__18966__auto___20628 < len__18965__auto___20627)){
args__18972__auto__.push((arguments[i__18966__auto___20628]));

var G__20629 = (i__18966__auto___20628 + (1));
i__18966__auto___20628 = G__20629;
continue;
} else {
}
break;
}

var argseq__18973__auto__ = ((((0) < args__18972__auto__.length))?(new cljs.core.IndexedSeq(args__18972__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__18973__auto__);
});})(g__19054__auto___20626))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19054__auto___20626){
return (function (args){
return cljs.core.deref.call(null,g__19054__auto___20626);
});})(g__19054__auto___20626))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__19054__auto___20626){
return (function (seq20545){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20545));
});})(g__19054__auto___20626))
;
/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__18972__auto__ = [];
var len__18965__auto___20632 = arguments.length;
var i__18966__auto___20633 = (0);
while(true){
if((i__18966__auto___20633 < len__18965__auto___20632)){
args__18972__auto__.push((arguments[i__18966__auto___20633]));

var G__20634 = (i__18966__auto___20633 + (1));
i__18966__auto___20633 = G__20634;
continue;
} else {
}
break;
}

var argseq__18973__auto__ = ((((0) < args__18972__auto__.length))?(new cljs.core.IndexedSeq(args__18972__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__18973__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__20630_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__20630_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq20631){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20631));
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