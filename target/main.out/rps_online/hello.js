// Compiled by ClojureScript 1.9.14 {}
goog.provide('rps_online.hello');
goog.require('cljs.core');
goog.require('rum.core');
rps_online.hello.getElementById = (function rps_online$hello$getElementById(element){
return document.getElementById(element);
});
rps_online.hello.title = rum.core.build_defc.call(null,(function (){
return React.createElement("div",null,"This is the title");
}),null,"title");
rps_online.hello.counter = rum.core.build_defcs.call(null,(function (state,label){
var local_atom = new cljs.core.Keyword("rps-online.hello","key","rps-online.hello/key",-1850369956).cljs$core$IFn$_invoke$arity$1(state);
return React.createElement("div",{"onClick": ((function (local_atom){
return (function (){
return cljs.core.swap_BANG_.call(null,local_atom,cljs.core.inc);
});})(local_atom))
},sablono.interpreter.interpret.call(null,label),": ",sablono.interpreter.interpret.call(null,cljs.core.deref.call(null,local_atom)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.call(null,(0),new cljs.core.Keyword("rps-online.hello","key","rps-online.hello/key",-1850369956))], null),"counter");
rps_online.hello.r_app = rum.core.build_defc.call(null,(function (){
var attrs11332 = rps_online.hello.title.call(null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs11332))?sablono.interpreter.attributes.call(null,attrs11332):null),((cljs.core.map_QMARK_.call(null,attrs11332))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,rps_online.hello.counter.call(null,"Clicks"))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11332),sablono.interpreter.interpret.call(null,rps_online.hello.counter.call(null,"Clicks"))], null)));
}),null,"r-app");
rps_online.hello.page = rum.core.build_defc.call(null,(function (){
return React.createElement("div",null,React.createElement("h1",null,"hello"),React.createElement("div",{"id": "app"},sablono.interpreter.interpret.call(null,rps_online.hello.r_app.call(null))));
}),null,"page");
rum.core.mount.call(null,rps_online.hello.page.call(null),document.querySelector("[data-reactroot]"));

//# sourceMappingURL=hello.js.map