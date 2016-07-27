// Compiled by ClojureScript 1.9.14 {}
goog.provide('adzerk.boot_cljs_repl');
goog.require('cljs.core');
goog.require('weasel.repl');
var repl_conn_11321 = "ws://localhost:52139";
if(cljs.core.truth_((function (){var and__6535__auto__ = repl_conn_11321;
if(cljs.core.truth_(and__6535__auto__)){
return cljs.core.not.call(null,weasel.repl.alive_QMARK_.call(null));
} else {
return and__6535__auto__;
}
})())){
weasel.repl.connect.call(null,"ws://localhost:52139");
} else {
}

//# sourceMappingURL=boot_cljs_repl.js.map