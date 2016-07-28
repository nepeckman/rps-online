// Compiled by ClojureScript 1.9.14 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it
 */
rum.core.state = (function rum$core$state(comp){
return (comp.state[":rum/state"]);
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,render__$1,wrap_render){
return (function (p1__8988_SHARP_,p2__8987_SHARP_){
return p2__8987_SHARP_.call(null,p1__8988_SHARP_);
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var will_unmount = rum.util.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
return React.createClass(cljs.core.clj__GT_js.call(null,rum.util.filter_vals.call(null,cljs.core.some_QMARK_,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"displayName","displayName",-809144601),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"getChildContext","getChildContext",-1321948108),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[((cljs.core.empty_QMARK_.call(null,did_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,___$1){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),display_name,((cljs.core.empty_QMARK_.call(null,will_unmount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var state = cljs.core.merge.call(null,old_state,(next_props[":rum/initial-state"]));
var next_state = cljs.core.reduce.call(null,((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__8990_SHARP_,p2__8989_SHARP_){
return p2__8989_SHARP_.call(null,old_state,p1__8990_SHARP_);
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,state,did_remount);
return this$.setState({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)});
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,should_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,(next_state[":rum/state"]));
var or__6547__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__8991_SHARP_){
return p1__8991_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,should_update);
if(cljs.core.truth_(or__6547__auto__)){
return or__6547__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__8994 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__8994,(0),null);
var next_state = cljs.core.nth.call(null,vec__8994,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__8992_SHARP_){
return p1__8992_SHARP_.call(null,state);
});})(state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_.call(null,will_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,next_state){
var this$ = this;
var new_state = (next_state[":rum/state"]);
return cljs.core._vreset_BANG_.call(null,new_state,rum.util.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var props = this$.props;
var state = rum.util.call_all.call(null,cljs.core.assoc.call(null,(props[":rum/initial-state"]),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,props);
return {":rum/state": cljs.core.volatile_BANG_.call(null,state)};
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,did_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_.call(null,will_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
)]),class_props))));
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class.call(null,render,mixins,display_name);
var key_fn = cljs.core.first.call(null,rum.util.collect.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = ((cljs.core.some_QMARK_.call(null,key_fn))?((function (class$,key_fn){
return (function() { 
var G__8995__delegate = function (args){
var props = {":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)};
return React.createElement(class$,props);
};
var G__8995 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8996__i = 0, G__8996__a = new Array(arguments.length -  0);
while (G__8996__i < G__8996__a.length) {G__8996__a[G__8996__i] = arguments[G__8996__i + 0]; ++G__8996__i;}
  args = new cljs.core.IndexedSeq(G__8996__a,0);
} 
return G__8995__delegate.call(this,args);};
G__8995.cljs$lang$maxFixedArity = 0;
G__8995.cljs$lang$applyTo = (function (arglist__8997){
var args = cljs.core.seq(arglist__8997);
return G__8995__delegate(args);
});
G__8995.cljs$core$IFn$_invoke$arity$variadic = G__8995__delegate;
return G__8995;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__8998__delegate = function (args){
var props = {":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)};
return React.createElement(class$,props);
};
var G__8998 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8999__i = 0, G__8999__a = new Array(arguments.length -  0);
while (G__8999__i < G__8999__a.length) {G__8999__a[G__8999__i] = arguments[G__8999__i + 0]; ++G__8999__i;}
  args = new cljs.core.IndexedSeq(G__8999__a,0);
} 
return G__8998__delegate.call(this,args);};
G__8998.cljs$lang$maxFixedArity = 0;
G__8998.cljs$lang$applyTo = (function (arglist__9000){
var args = cljs.core.seq(arglist__9000);
return G__8998__delegate(args);
});
G__8998.cljs$core$IFn$_invoke$arity$variadic = G__8998__delegate;
return G__8998;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_.call(null,mixins)){
var class$ = (function (props){
return cljs.core.apply.call(null,render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__9001__delegate = function (args){
return React.createElement(class$,{":rum/args": args});
};
var G__9001 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9002__i = 0, G__9002__a = new Array(arguments.length -  0);
while (G__9002__i < G__9002__a.length) {G__9002__a[G__9002__i] = arguments[G__9002__i + 0]; ++G__9002__i;}
  args = new cljs.core.IndexedSeq(G__9002__a,0);
} 
return G__9001__delegate.call(this,args);};
G__9001.cljs$lang$maxFixedArity = 0;
G__9001.cljs$lang$applyTo = (function (arglist__9003){
var args = cljs.core.seq(arglist__9003);
return G__9001__delegate(args);
});
G__9001.cljs$core$IFn$_invoke$arity$variadic = G__9001__delegate;
return G__9001;
})()
;})(class$,_))
;
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.schedule = (function (){var or__6547__auto__ = (function (){var and__6535__auto__ = typeof window !== 'undefined';
if(and__6535__auto__){
var or__6547__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__6547__auto__)){
return or__6547__auto__;
} else {
var or__6547__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__6547__auto____$1)){
return or__6547__auto____$1;
} else {
var or__6547__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__6547__auto____$2)){
return or__6547__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__6535__auto__;
}
})();
if(cljs.core.truth_(or__6547__auto__)){
return or__6547__auto__;
} else {
return ((function (or__6547__auto__){
return (function (p1__9004_SHARP_){
return setTimeout(p1__9004_SHARP_,(16));
});
;})(or__6547__auto__))
}
})();
rum.core.batch = (function (){var or__6547__auto__ = ((typeof ReactNative !== 'undefined')?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__6547__auto__)){
return or__6547__auto__;
} else {
var or__6547__auto____$1 = ((typeof ReactDOM !== 'undefined')?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__6547__auto____$1)){
return or__6547__auto____$1;
} else {
return ((function (or__6547__auto____$1,or__6547__auto__){
return (function (f,a){
return f.call(null,a);
});
;})(or__6547__auto____$1,or__6547__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__9011 = cljs.core.seq.call(null,queue);
var chunk__9013 = null;
var count__9014 = (0);
var i__9015 = (0);
while(true){
if((i__9015 < count__9014)){
var comp = cljs.core._nth.call(null,chunk__9013,i__9015);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__9017 = seq__9011;
var G__9018 = chunk__9013;
var G__9019 = count__9014;
var G__9020 = (i__9015 + (1));
seq__9011 = G__9017;
chunk__9013 = G__9018;
count__9014 = G__9019;
i__9015 = G__9020;
continue;
} else {
var G__9021 = seq__9011;
var G__9022 = chunk__9013;
var G__9023 = count__9014;
var G__9024 = (i__9015 + (1));
seq__9011 = G__9021;
chunk__9013 = G__9022;
count__9014 = G__9023;
i__9015 = G__9024;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9011);
if(temp__4657__auto__){
var seq__9011__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9011__$1)){
var c__7358__auto__ = cljs.core.chunk_first.call(null,seq__9011__$1);
var G__9025 = cljs.core.chunk_rest.call(null,seq__9011__$1);
var G__9026 = c__7358__auto__;
var G__9027 = cljs.core.count.call(null,c__7358__auto__);
var G__9028 = (0);
seq__9011 = G__9025;
chunk__9013 = G__9026;
count__9014 = G__9027;
i__9015 = G__9028;
continue;
} else {
var comp = cljs.core.first.call(null,seq__9011__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__9029 = cljs.core.next.call(null,seq__9011__$1);
var G__9030 = null;
var G__9031 = (0);
var G__9032 = (0);
seq__9011 = G__9029;
chunk__9013 = G__9030;
count__9014 = G__9031;
i__9015 = G__9032;
continue;
} else {
var G__9033 = cljs.core.next.call(null,seq__9011__$1);
var G__9034 = null;
var G__9035 = (0);
var G__9036 = (0);
seq__9011 = G__9033;
chunk__9013 = G__9034;
count__9014 = G__9035;
i__9015 = G__9036;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

return rum.core.batch.call(null,rum.core.render_all,queue);
});
/**
 * Schedules react component to be rendered on next animation frame
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
/**
 * Add component to the DOM tree. Idempotent. Subsequent mounts will just update component
 */
rum.core.mount = (function rum$core$mount(component,node){
ReactDOM.render(component,node);

return null;
});
/**
 * Removes component from the DOM tree
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Adds React key to component
 */
rum.core.with_key = (function rum$core$with_key(component,key){
return React.cloneElement(component,{"key": key},null);
});
/**
 * Adds React ref (string or callback) to component
 */
rum.core.with_ref = (function rum$core$with_ref(component,ref){
return React.cloneElement(component,{"ref": ref},null);
});
/**
 * Given state, returns top-level DOM node. Can’t be called during render
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name.call(null,key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref.call(null,state,cljs.core.name.call(null,key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed.
 * Does equality check (=) on all arguments
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff
 * during component’s lifecycle. Component will be re-rendered if atom’s value changes.
 * Atom is stored under user-provided key or under `:rum/local` by default
 */
rum.core.local = (function rum$core$local(var_args){
var args9037 = [];
var len__7622__auto___9040 = arguments.length;
var i__7623__auto___9041 = (0);
while(true){
if((i__7623__auto___9041 < len__7622__auto___9040)){
args9037.push((arguments[i__7623__auto___9041]));

var G__9042 = (i__7623__auto___9041 + (1));
i__7623__auto___9041 = G__9042;
continue;
} else {
}
break;
}

var G__9039 = args9037.length;
switch (G__9039) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9037.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.call(null,initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component))
);

return cljs.core.assoc.call(null,state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;
/**
 * Mixin. Works in conjunction with `rum.core/react`
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid.call(null));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_9044 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__9045 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__9045,(0),null);
var next_state = cljs.core.nth.call(null,vec__9045,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__9046_9058 = cljs.core.seq.call(null,old_reactions);
var chunk__9047_9059 = null;
var count__9048_9060 = (0);
var i__9049_9061 = (0);
while(true){
if((i__9049_9061 < count__9048_9060)){
var ref_9062 = cljs.core._nth.call(null,chunk__9047_9059,i__9049_9061);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_9062)){
} else {
cljs.core.remove_watch.call(null,ref_9062,key);
}

var G__9063 = seq__9046_9058;
var G__9064 = chunk__9047_9059;
var G__9065 = count__9048_9060;
var G__9066 = (i__9049_9061 + (1));
seq__9046_9058 = G__9063;
chunk__9047_9059 = G__9064;
count__9048_9060 = G__9065;
i__9049_9061 = G__9066;
continue;
} else {
var temp__4657__auto___9067 = cljs.core.seq.call(null,seq__9046_9058);
if(temp__4657__auto___9067){
var seq__9046_9068__$1 = temp__4657__auto___9067;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9046_9068__$1)){
var c__7358__auto___9069 = cljs.core.chunk_first.call(null,seq__9046_9068__$1);
var G__9070 = cljs.core.chunk_rest.call(null,seq__9046_9068__$1);
var G__9071 = c__7358__auto___9069;
var G__9072 = cljs.core.count.call(null,c__7358__auto___9069);
var G__9073 = (0);
seq__9046_9058 = G__9070;
chunk__9047_9059 = G__9071;
count__9048_9060 = G__9072;
i__9049_9061 = G__9073;
continue;
} else {
var ref_9074 = cljs.core.first.call(null,seq__9046_9068__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_9074)){
} else {
cljs.core.remove_watch.call(null,ref_9074,key);
}

var G__9075 = cljs.core.next.call(null,seq__9046_9068__$1);
var G__9076 = null;
var G__9077 = (0);
var G__9078 = (0);
seq__9046_9058 = G__9075;
chunk__9047_9059 = G__9076;
count__9048_9060 = G__9077;
i__9049_9061 = G__9078;
continue;
}
} else {
}
}
break;
}

var seq__9050_9079 = cljs.core.seq.call(null,new_reactions);
var chunk__9051_9080 = null;
var count__9052_9081 = (0);
var i__9053_9082 = (0);
while(true){
if((i__9053_9082 < count__9052_9081)){
var ref_9083 = cljs.core._nth.call(null,chunk__9051_9080,i__9053_9082);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_9083)){
} else {
cljs.core.add_watch.call(null,ref_9083,key,((function (seq__9050_9079,chunk__9051_9080,count__9052_9081,i__9053_9082,ref_9083,comp,old_reactions,vec__9045,dom,next_state,new_reactions,key,_STAR_reactions_STAR_9044){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__9050_9079,chunk__9051_9080,count__9052_9081,i__9053_9082,ref_9083,comp,old_reactions,vec__9045,dom,next_state,new_reactions,key,_STAR_reactions_STAR_9044))
);
}

var G__9084 = seq__9050_9079;
var G__9085 = chunk__9051_9080;
var G__9086 = count__9052_9081;
var G__9087 = (i__9053_9082 + (1));
seq__9050_9079 = G__9084;
chunk__9051_9080 = G__9085;
count__9052_9081 = G__9086;
i__9053_9082 = G__9087;
continue;
} else {
var temp__4657__auto___9088 = cljs.core.seq.call(null,seq__9050_9079);
if(temp__4657__auto___9088){
var seq__9050_9089__$1 = temp__4657__auto___9088;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9050_9089__$1)){
var c__7358__auto___9090 = cljs.core.chunk_first.call(null,seq__9050_9089__$1);
var G__9091 = cljs.core.chunk_rest.call(null,seq__9050_9089__$1);
var G__9092 = c__7358__auto___9090;
var G__9093 = cljs.core.count.call(null,c__7358__auto___9090);
var G__9094 = (0);
seq__9050_9079 = G__9091;
chunk__9051_9080 = G__9092;
count__9052_9081 = G__9093;
i__9053_9082 = G__9094;
continue;
} else {
var ref_9095 = cljs.core.first.call(null,seq__9050_9089__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_9095)){
} else {
cljs.core.add_watch.call(null,ref_9095,key,((function (seq__9050_9079,chunk__9051_9080,count__9052_9081,i__9053_9082,ref_9095,seq__9050_9089__$1,temp__4657__auto___9088,comp,old_reactions,vec__9045,dom,next_state,new_reactions,key,_STAR_reactions_STAR_9044){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__9050_9079,chunk__9051_9080,count__9052_9081,i__9053_9082,ref_9095,seq__9050_9089__$1,temp__4657__auto___9088,comp,old_reactions,vec__9045,dom,next_state,new_reactions,key,_STAR_reactions_STAR_9044))
);
}

var G__9096 = cljs.core.next.call(null,seq__9050_9089__$1);
var G__9097 = null;
var G__9098 = (0);
var G__9099 = (0);
seq__9050_9079 = G__9096;
chunk__9051_9080 = G__9097;
count__9052_9081 = G__9098;
i__9053_9082 = G__9099;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_9044;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_9100 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__9054_9101 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__9055_9102 = null;
var count__9056_9103 = (0);
var i__9057_9104 = (0);
while(true){
if((i__9057_9104 < count__9056_9103)){
var ref_9105 = cljs.core._nth.call(null,chunk__9055_9102,i__9057_9104);
cljs.core.remove_watch.call(null,ref_9105,key_9100);

var G__9106 = seq__9054_9101;
var G__9107 = chunk__9055_9102;
var G__9108 = count__9056_9103;
var G__9109 = (i__9057_9104 + (1));
seq__9054_9101 = G__9106;
chunk__9055_9102 = G__9107;
count__9056_9103 = G__9108;
i__9057_9104 = G__9109;
continue;
} else {
var temp__4657__auto___9110 = cljs.core.seq.call(null,seq__9054_9101);
if(temp__4657__auto___9110){
var seq__9054_9111__$1 = temp__4657__auto___9110;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9054_9111__$1)){
var c__7358__auto___9112 = cljs.core.chunk_first.call(null,seq__9054_9111__$1);
var G__9113 = cljs.core.chunk_rest.call(null,seq__9054_9111__$1);
var G__9114 = c__7358__auto___9112;
var G__9115 = cljs.core.count.call(null,c__7358__auto___9112);
var G__9116 = (0);
seq__9054_9101 = G__9113;
chunk__9055_9102 = G__9114;
count__9056_9103 = G__9115;
i__9057_9104 = G__9116;
continue;
} else {
var ref_9117 = cljs.core.first.call(null,seq__9054_9111__$1);
cljs.core.remove_watch.call(null,ref_9117,key_9100);

var G__9118 = cljs.core.next.call(null,seq__9054_9111__$1);
var G__9119 = null;
var G__9120 = (0);
var G__9121 = (0);
seq__9054_9101 = G__9118;
chunk__9055_9102 = G__9119;
count__9056_9103 = G__9120;
i__9057_9104 = G__9121;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142));
})], null);
/**
 * Works in conjunction with `rum.core/reactive` mixin. Use this function instead of
 * `deref` inside render, and your component will subscribe to changes happening
 * to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("rum.core/react is only supported in conjunction with rum.core/reactive"),cljs.core.str("\n"),cljs.core.str("*reactions*")].join('')));
}

cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * `derived-atom` will:
 *  - Take N “source” refs
 *  - Set up a watch on each of them
 *  - Create “sink” atom
 *  - When any of source refs changes:
 *     - re-run function `f`, passing N dereferenced values of source refs
 *     - `reset!` result of `f` to the sink atom
 *  - return sink atom
 * 
 *  (def *a (atom 0))
 *  (def *b (atom 1))
 *  (def *x (derived-atom [*a *b] ::key
 *            (fn [a b]
 *              (str a ":" b))))
 *  (type *x) ;; => clojure.lang.Atom
 *  \@*x     ;; => 0:1
 *  (swap! *a inc)
 *  \@*x     ;; => 1:1
 *  (reset! *b 7)
 *  \@*x     ;; => 1:7
 * 
 * Arguments:
 *   refs - sequence of source refs
 *   key  - unique key to register watcher, see `clojure.core/add-watch`
 *   f    - function that must accept N arguments (same as number of source refs)
 *          and return a value to be written to the sink ref.
 *          Note: `f` will be called with already dereferenced values
 *   opts - optional. Map of:
 *     :ref           - Use this as sink ref. By default creates new atom
 *     :check-equals? - Do an equality check on each update: `(= @sink (f new-vals))`.
 *                      If result of `f` is equal to the old one, do not call `reset!`.
 *                      Defaults to `true`. Set to false if calling `=` would be expensive
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 *   (def db (atom { :users { "Ivan" { :age 30 }}}))
 *   (def ivan (rum/cursor db [:users "Ivan"]))
 *   \@ivan ;; => { :age 30 }
 *   (swap! ivan update :age inc) ;; => { :age 31 }
 *   \@db ;; => { :users { "Ivan" { :age 31 }}}
 *   (swap! db update-in [:users "Ivan" :age] inc) ;; => { :users { "Ivan" { :age 32 }}}
 *   \@ivan ;; => { :age 32 }
 *   
 *   Returned value supports deref, swap!, reset!, watches and metadata.
 *   The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__7629__auto__ = [];
var len__7622__auto___9128 = arguments.length;
var i__7623__auto___9129 = (0);
while(true){
if((i__7623__auto___9129 < len__7622__auto___9128)){
args__7629__auto__.push((arguments[i__7623__auto___9129]));

var G__9130 = (i__7623__auto___9129 + (1));
i__7623__auto___9129 = G__9130;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((2) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7630__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__9125){
var map__9126 = p__9125;
var map__9126__$1 = ((((!((map__9126 == null)))?((((map__9126.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9126.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9126):map__9126);
var options = map__9126__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

rum.core.cursor_in.cljs$lang$applyTo = (function (seq9122){
var G__9123 = cljs.core.first.call(null,seq9122);
var seq9122__$1 = cljs.core.next.call(null,seq9122);
var G__9124 = cljs.core.first.call(null,seq9122__$1);
var seq9122__$2 = cljs.core.next.call(null,seq9122__$1);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__9123,G__9124,seq9122__$2);
});
/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__7629__auto__ = [];
var len__7622__auto___9134 = arguments.length;
var i__7623__auto___9135 = (0);
while(true){
if((i__7623__auto___9135 < len__7622__auto___9134)){
args__7629__auto__.push((arguments[i__7623__auto___9135]));

var G__9136 = (i__7623__auto___9135 + (1));
i__7623__auto___9135 = G__9136;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((2) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7630__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

rum.core.cursor.cljs$lang$applyTo = (function (seq9131){
var G__9132 = cljs.core.first.call(null,seq9131);
var seq9131__$1 = cljs.core.next.call(null,seq9131);
var G__9133 = cljs.core.first.call(null,seq9131__$1);
var seq9131__$2 = cljs.core.next.call(null,seq9131__$1);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__9132,G__9133,seq9131__$2);
});

//# sourceMappingURL=core.js.map