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
return (function (p1__11136_SHARP_,p2__11135_SHARP_){
return p2__11135_SHARP_.call(null,p1__11136_SHARP_);
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
return (function (p1__11138_SHARP_,p2__11137_SHARP_){
return p2__11137_SHARP_.call(null,old_state,p1__11138_SHARP_);
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
return (function (p1__11139_SHARP_){
return p1__11139_SHARP_.call(null,old_state,new_state);
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
var vec__11142 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__11142,(0),null);
var next_state = cljs.core.nth.call(null,vec__11142,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__11140_SHARP_){
return p1__11140_SHARP_.call(null,state);
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
var G__11143__delegate = function (args){
var props = {":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)};
return React.createElement(class$,props);
};
var G__11143 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11144__i = 0, G__11144__a = new Array(arguments.length -  0);
while (G__11144__i < G__11144__a.length) {G__11144__a[G__11144__i] = arguments[G__11144__i + 0]; ++G__11144__i;}
  args = new cljs.core.IndexedSeq(G__11144__a,0);
} 
return G__11143__delegate.call(this,args);};
G__11143.cljs$lang$maxFixedArity = 0;
G__11143.cljs$lang$applyTo = (function (arglist__11145){
var args = cljs.core.seq(arglist__11145);
return G__11143__delegate(args);
});
G__11143.cljs$core$IFn$_invoke$arity$variadic = G__11143__delegate;
return G__11143;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__11146__delegate = function (args){
var props = {":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)};
return React.createElement(class$,props);
};
var G__11146 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11147__i = 0, G__11147__a = new Array(arguments.length -  0);
while (G__11147__i < G__11147__a.length) {G__11147__a[G__11147__i] = arguments[G__11147__i + 0]; ++G__11147__i;}
  args = new cljs.core.IndexedSeq(G__11147__a,0);
} 
return G__11146__delegate.call(this,args);};
G__11146.cljs$lang$maxFixedArity = 0;
G__11146.cljs$lang$applyTo = (function (arglist__11148){
var args = cljs.core.seq(arglist__11148);
return G__11146__delegate(args);
});
G__11146.cljs$core$IFn$_invoke$arity$variadic = G__11146__delegate;
return G__11146;
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
var G__11149__delegate = function (args){
return React.createElement(class$,{":rum/args": args});
};
var G__11149 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11150__i = 0, G__11150__a = new Array(arguments.length -  0);
while (G__11150__i < G__11150__a.length) {G__11150__a[G__11150__i] = arguments[G__11150__i + 0]; ++G__11150__i;}
  args = new cljs.core.IndexedSeq(G__11150__a,0);
} 
return G__11149__delegate.call(this,args);};
G__11149.cljs$lang$maxFixedArity = 0;
G__11149.cljs$lang$applyTo = (function (arglist__11151){
var args = cljs.core.seq(arglist__11151);
return G__11149__delegate(args);
});
G__11149.cljs$core$IFn$_invoke$arity$variadic = G__11149__delegate;
return G__11149;
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
return (function (p1__11152_SHARP_){
return setTimeout(p1__11152_SHARP_,(16));
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
var seq__11159 = cljs.core.seq.call(null,queue);
var chunk__11161 = null;
var count__11162 = (0);
var i__11163 = (0);
while(true){
if((i__11163 < count__11162)){
var comp = cljs.core._nth.call(null,chunk__11161,i__11163);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__11165 = seq__11159;
var G__11166 = chunk__11161;
var G__11167 = count__11162;
var G__11168 = (i__11163 + (1));
seq__11159 = G__11165;
chunk__11161 = G__11166;
count__11162 = G__11167;
i__11163 = G__11168;
continue;
} else {
var G__11169 = seq__11159;
var G__11170 = chunk__11161;
var G__11171 = count__11162;
var G__11172 = (i__11163 + (1));
seq__11159 = G__11169;
chunk__11161 = G__11170;
count__11162 = G__11171;
i__11163 = G__11172;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11159);
if(temp__4657__auto__){
var seq__11159__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11159__$1)){
var c__7358__auto__ = cljs.core.chunk_first.call(null,seq__11159__$1);
var G__11173 = cljs.core.chunk_rest.call(null,seq__11159__$1);
var G__11174 = c__7358__auto__;
var G__11175 = cljs.core.count.call(null,c__7358__auto__);
var G__11176 = (0);
seq__11159 = G__11173;
chunk__11161 = G__11174;
count__11162 = G__11175;
i__11163 = G__11176;
continue;
} else {
var comp = cljs.core.first.call(null,seq__11159__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__11177 = cljs.core.next.call(null,seq__11159__$1);
var G__11178 = null;
var G__11179 = (0);
var G__11180 = (0);
seq__11159 = G__11177;
chunk__11161 = G__11178;
count__11162 = G__11179;
i__11163 = G__11180;
continue;
} else {
var G__11181 = cljs.core.next.call(null,seq__11159__$1);
var G__11182 = null;
var G__11183 = (0);
var G__11184 = (0);
seq__11159 = G__11181;
chunk__11161 = G__11182;
count__11162 = G__11183;
i__11163 = G__11184;
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
var args11185 = [];
var len__7622__auto___11188 = arguments.length;
var i__7623__auto___11189 = (0);
while(true){
if((i__7623__auto___11189 < len__7622__auto___11188)){
args11185.push((arguments[i__7623__auto___11189]));

var G__11190 = (i__7623__auto___11189 + (1));
i__7623__auto___11189 = G__11190;
continue;
} else {
}
break;
}

var G__11187 = args11185.length;
switch (G__11187) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11185.length)].join('')));

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
var _STAR_reactions_STAR_11192 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__11193 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__11193,(0),null);
var next_state = cljs.core.nth.call(null,vec__11193,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__11194_11206 = cljs.core.seq.call(null,old_reactions);
var chunk__11195_11207 = null;
var count__11196_11208 = (0);
var i__11197_11209 = (0);
while(true){
if((i__11197_11209 < count__11196_11208)){
var ref_11210 = cljs.core._nth.call(null,chunk__11195_11207,i__11197_11209);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_11210)){
} else {
cljs.core.remove_watch.call(null,ref_11210,key);
}

var G__11211 = seq__11194_11206;
var G__11212 = chunk__11195_11207;
var G__11213 = count__11196_11208;
var G__11214 = (i__11197_11209 + (1));
seq__11194_11206 = G__11211;
chunk__11195_11207 = G__11212;
count__11196_11208 = G__11213;
i__11197_11209 = G__11214;
continue;
} else {
var temp__4657__auto___11215 = cljs.core.seq.call(null,seq__11194_11206);
if(temp__4657__auto___11215){
var seq__11194_11216__$1 = temp__4657__auto___11215;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11194_11216__$1)){
var c__7358__auto___11217 = cljs.core.chunk_first.call(null,seq__11194_11216__$1);
var G__11218 = cljs.core.chunk_rest.call(null,seq__11194_11216__$1);
var G__11219 = c__7358__auto___11217;
var G__11220 = cljs.core.count.call(null,c__7358__auto___11217);
var G__11221 = (0);
seq__11194_11206 = G__11218;
chunk__11195_11207 = G__11219;
count__11196_11208 = G__11220;
i__11197_11209 = G__11221;
continue;
} else {
var ref_11222 = cljs.core.first.call(null,seq__11194_11216__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_11222)){
} else {
cljs.core.remove_watch.call(null,ref_11222,key);
}

var G__11223 = cljs.core.next.call(null,seq__11194_11216__$1);
var G__11224 = null;
var G__11225 = (0);
var G__11226 = (0);
seq__11194_11206 = G__11223;
chunk__11195_11207 = G__11224;
count__11196_11208 = G__11225;
i__11197_11209 = G__11226;
continue;
}
} else {
}
}
break;
}

var seq__11198_11227 = cljs.core.seq.call(null,new_reactions);
var chunk__11199_11228 = null;
var count__11200_11229 = (0);
var i__11201_11230 = (0);
while(true){
if((i__11201_11230 < count__11200_11229)){
var ref_11231 = cljs.core._nth.call(null,chunk__11199_11228,i__11201_11230);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_11231)){
} else {
cljs.core.add_watch.call(null,ref_11231,key,((function (seq__11198_11227,chunk__11199_11228,count__11200_11229,i__11201_11230,ref_11231,comp,old_reactions,vec__11193,dom,next_state,new_reactions,key,_STAR_reactions_STAR_11192){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__11198_11227,chunk__11199_11228,count__11200_11229,i__11201_11230,ref_11231,comp,old_reactions,vec__11193,dom,next_state,new_reactions,key,_STAR_reactions_STAR_11192))
);
}

var G__11232 = seq__11198_11227;
var G__11233 = chunk__11199_11228;
var G__11234 = count__11200_11229;
var G__11235 = (i__11201_11230 + (1));
seq__11198_11227 = G__11232;
chunk__11199_11228 = G__11233;
count__11200_11229 = G__11234;
i__11201_11230 = G__11235;
continue;
} else {
var temp__4657__auto___11236 = cljs.core.seq.call(null,seq__11198_11227);
if(temp__4657__auto___11236){
var seq__11198_11237__$1 = temp__4657__auto___11236;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11198_11237__$1)){
var c__7358__auto___11238 = cljs.core.chunk_first.call(null,seq__11198_11237__$1);
var G__11239 = cljs.core.chunk_rest.call(null,seq__11198_11237__$1);
var G__11240 = c__7358__auto___11238;
var G__11241 = cljs.core.count.call(null,c__7358__auto___11238);
var G__11242 = (0);
seq__11198_11227 = G__11239;
chunk__11199_11228 = G__11240;
count__11200_11229 = G__11241;
i__11201_11230 = G__11242;
continue;
} else {
var ref_11243 = cljs.core.first.call(null,seq__11198_11237__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_11243)){
} else {
cljs.core.add_watch.call(null,ref_11243,key,((function (seq__11198_11227,chunk__11199_11228,count__11200_11229,i__11201_11230,ref_11243,seq__11198_11237__$1,temp__4657__auto___11236,comp,old_reactions,vec__11193,dom,next_state,new_reactions,key,_STAR_reactions_STAR_11192){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__11198_11227,chunk__11199_11228,count__11200_11229,i__11201_11230,ref_11243,seq__11198_11237__$1,temp__4657__auto___11236,comp,old_reactions,vec__11193,dom,next_state,new_reactions,key,_STAR_reactions_STAR_11192))
);
}

var G__11244 = cljs.core.next.call(null,seq__11198_11237__$1);
var G__11245 = null;
var G__11246 = (0);
var G__11247 = (0);
seq__11198_11227 = G__11244;
chunk__11199_11228 = G__11245;
count__11200_11229 = G__11246;
i__11201_11230 = G__11247;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_11192;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_11248 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__11202_11249 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__11203_11250 = null;
var count__11204_11251 = (0);
var i__11205_11252 = (0);
while(true){
if((i__11205_11252 < count__11204_11251)){
var ref_11253 = cljs.core._nth.call(null,chunk__11203_11250,i__11205_11252);
cljs.core.remove_watch.call(null,ref_11253,key_11248);

var G__11254 = seq__11202_11249;
var G__11255 = chunk__11203_11250;
var G__11256 = count__11204_11251;
var G__11257 = (i__11205_11252 + (1));
seq__11202_11249 = G__11254;
chunk__11203_11250 = G__11255;
count__11204_11251 = G__11256;
i__11205_11252 = G__11257;
continue;
} else {
var temp__4657__auto___11258 = cljs.core.seq.call(null,seq__11202_11249);
if(temp__4657__auto___11258){
var seq__11202_11259__$1 = temp__4657__auto___11258;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11202_11259__$1)){
var c__7358__auto___11260 = cljs.core.chunk_first.call(null,seq__11202_11259__$1);
var G__11261 = cljs.core.chunk_rest.call(null,seq__11202_11259__$1);
var G__11262 = c__7358__auto___11260;
var G__11263 = cljs.core.count.call(null,c__7358__auto___11260);
var G__11264 = (0);
seq__11202_11249 = G__11261;
chunk__11203_11250 = G__11262;
count__11204_11251 = G__11263;
i__11205_11252 = G__11264;
continue;
} else {
var ref_11265 = cljs.core.first.call(null,seq__11202_11259__$1);
cljs.core.remove_watch.call(null,ref_11265,key_11248);

var G__11266 = cljs.core.next.call(null,seq__11202_11259__$1);
var G__11267 = null;
var G__11268 = (0);
var G__11269 = (0);
seq__11202_11249 = G__11266;
chunk__11203_11250 = G__11267;
count__11204_11251 = G__11268;
i__11205_11252 = G__11269;
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
var len__7622__auto___11276 = arguments.length;
var i__7623__auto___11277 = (0);
while(true){
if((i__7623__auto___11277 < len__7622__auto___11276)){
args__7629__auto__.push((arguments[i__7623__auto___11277]));

var G__11278 = (i__7623__auto___11277 + (1));
i__7623__auto___11277 = G__11278;
continue;
} else {
}
break;
}

var argseq__7630__auto__ = ((((2) < args__7629__auto__.length))?(new cljs.core.IndexedSeq(args__7629__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7630__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__11273){
var map__11274 = p__11273;
var map__11274__$1 = ((((!((map__11274 == null)))?((((map__11274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11274):map__11274);
var options = map__11274__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

rum.core.cursor_in.cljs$lang$applyTo = (function (seq11270){
var G__11271 = cljs.core.first.call(null,seq11270);
var seq11270__$1 = cljs.core.next.call(null,seq11270);
var G__11272 = cljs.core.first.call(null,seq11270__$1);
var seq11270__$2 = cljs.core.next.call(null,seq11270__$1);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__11271,G__11272,seq11270__$2);
});
/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__7629__auto__ = [];
var len__7622__auto___11282 = arguments.length;
var i__7623__auto___11283 = (0);
while(true){
if((i__7623__auto___11283 < len__7622__auto___11282)){
args__7629__auto__.push((arguments[i__7623__auto___11283]));

var G__11284 = (i__7623__auto___11283 + (1));
i__7623__auto___11283 = G__11284;
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

rum.core.cursor.cljs$lang$applyTo = (function (seq11279){
var G__11280 = cljs.core.first.call(null,seq11279);
var seq11279__$1 = cljs.core.next.call(null,seq11279);
var G__11281 = cljs.core.first.call(null,seq11279__$1);
var seq11279__$2 = cljs.core.next.call(null,seq11279__$1);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__11280,G__11281,seq11279__$2);
});

//# sourceMappingURL=core.js.map