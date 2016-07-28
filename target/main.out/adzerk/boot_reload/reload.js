// Compiled by ClojureScript 1.9.14 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (function adzerk$boot_reload$reload$page_uri(){
return (new goog.Uri(window.location.href));
});
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.call(null).resolve(uri).getPath();
});
/**
 * Produce the changed goog.Uri iff the (relative) path is different
 *   compared to the content of changed (a string). Return nil otherwise.
 */
adzerk.boot_reload.reload.changed_uri = (function adzerk$boot_reload$reload$changed_uri(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__9218_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__9218_SHARP_),path);
});})(path))
,changed));
if(cljs.core.truth_(temp__4657__auto__)){
var changed__$1 = temp__4657__auto__;
return goog.Uri.parse(changed__$1);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__9223 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__9224 = null;
var count__9225 = (0);
var i__9226 = (0);
while(true){
if((i__9226 < count__9225)){
var s = cljs.core._nth.call(null,chunk__9224,i__9226);
var temp__4657__auto___9227 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___9227)){
var sheet_9228 = temp__4657__auto___9227;
var temp__4657__auto___9229__$1 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_9228.href,changed);
if(cljs.core.truth_(temp__4657__auto___9229__$1)){
var href_uri_9230 = temp__4657__auto___9229__$1;
sheet_9228.ownerNode.href = href_uri_9230.makeUnique().toString();
} else {
}
} else {
}

var G__9231 = seq__9223;
var G__9232 = chunk__9224;
var G__9233 = count__9225;
var G__9234 = (i__9226 + (1));
seq__9223 = G__9231;
chunk__9224 = G__9232;
count__9225 = G__9233;
i__9226 = G__9234;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9223);
if(temp__4657__auto__){
var seq__9223__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9223__$1)){
var c__7358__auto__ = cljs.core.chunk_first.call(null,seq__9223__$1);
var G__9235 = cljs.core.chunk_rest.call(null,seq__9223__$1);
var G__9236 = c__7358__auto__;
var G__9237 = cljs.core.count.call(null,c__7358__auto__);
var G__9238 = (0);
seq__9223 = G__9235;
chunk__9224 = G__9236;
count__9225 = G__9237;
i__9226 = G__9238;
continue;
} else {
var s = cljs.core.first.call(null,seq__9223__$1);
var temp__4657__auto___9239__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___9239__$1)){
var sheet_9240 = temp__4657__auto___9239__$1;
var temp__4657__auto___9241__$2 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_9240.href,changed);
if(cljs.core.truth_(temp__4657__auto___9241__$2)){
var href_uri_9242 = temp__4657__auto___9241__$2;
sheet_9240.ownerNode.href = href_uri_9242.makeUnique().toString();
} else {
}
} else {
}

var G__9243 = cljs.core.next.call(null,seq__9223__$1);
var G__9244 = null;
var G__9245 = (0);
var G__9246 = (0);
seq__9223 = G__9243;
chunk__9224 = G__9244;
count__9225 = G__9245;
i__9226 = G__9246;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__9251 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__9252 = null;
var count__9253 = (0);
var i__9254 = (0);
while(true){
if((i__9254 < count__9253)){
var s = cljs.core._nth.call(null,chunk__9252,i__9254);
var temp__4657__auto___9255 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___9255)){
var image_9256 = temp__4657__auto___9255;
var temp__4657__auto___9257__$1 = adzerk.boot_reload.reload.changed_uri.call(null,image_9256.src,changed);
if(cljs.core.truth_(temp__4657__auto___9257__$1)){
var href_uri_9258 = temp__4657__auto___9257__$1;
image_9256.src = href_uri_9258.makeUnique().toString();
} else {
}
} else {
}

var G__9259 = seq__9251;
var G__9260 = chunk__9252;
var G__9261 = count__9253;
var G__9262 = (i__9254 + (1));
seq__9251 = G__9259;
chunk__9252 = G__9260;
count__9253 = G__9261;
i__9254 = G__9262;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9251);
if(temp__4657__auto__){
var seq__9251__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9251__$1)){
var c__7358__auto__ = cljs.core.chunk_first.call(null,seq__9251__$1);
var G__9263 = cljs.core.chunk_rest.call(null,seq__9251__$1);
var G__9264 = c__7358__auto__;
var G__9265 = cljs.core.count.call(null,c__7358__auto__);
var G__9266 = (0);
seq__9251 = G__9263;
chunk__9252 = G__9264;
count__9253 = G__9265;
i__9254 = G__9266;
continue;
} else {
var s = cljs.core.first.call(null,seq__9251__$1);
var temp__4657__auto___9267__$1 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___9267__$1)){
var image_9268 = temp__4657__auto___9267__$1;
var temp__4657__auto___9269__$2 = adzerk.boot_reload.reload.changed_uri.call(null,image_9268.src,changed);
if(cljs.core.truth_(temp__4657__auto___9269__$2)){
var href_uri_9270 = temp__4657__auto___9269__$2;
image_9268.src = href_uri_9270.makeUnique().toString();
} else {
}
} else {
}

var G__9271 = cljs.core.next.call(null,seq__9251__$1);
var G__9272 = null;
var G__9273 = (0);
var G__9274 = (0);
seq__9251 = G__9271;
chunk__9252 = G__9272;
count__9253 = G__9273;
i__9254 = G__9274;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__9277){
var map__9280 = p__9277;
var map__9280__$1 = ((((!((map__9280 == null)))?((((map__9280.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9280.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9280):map__9280);
var on_jsload = cljs.core.get.call(null,map__9280__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__9280,map__9280__$1,on_jsload){
return (function (p1__9275_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__9275_SHARP_,".js");
});})(map__9280,map__9280__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.net.jsloader.loadMany(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__9280,map__9280__$1,on_jsload){
return (function (p1__9276_SHARP_){
return goog.Uri.parse(p1__9276_SHARP_).makeUnique();
});})(js_files,map__9280,map__9280__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__9280,map__9280__$1,on_jsload){
return (function() { 
var G__9282__delegate = function (_){
return on_jsload.call(null);
};
var G__9282 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__9283__i = 0, G__9283__a = new Array(arguments.length -  0);
while (G__9283__i < G__9283__a.length) {G__9283__a[G__9283__i] = arguments[G__9283__i + 0]; ++G__9283__i;}
  _ = new cljs.core.IndexedSeq(G__9283__a,0);
} 
return G__9282__delegate.call(this,_);};
G__9282.cljs$lang$maxFixedArity = 0;
G__9282.cljs$lang$applyTo = (function (arglist__9284){
var _ = cljs.core.seq(arglist__9284);
return G__9282__delegate(_);
});
G__9282.cljs$core$IFn$_invoke$arity$variadic = G__9282__delegate;
return G__9282;
})()
;})(js_files,map__9280,map__9280__$1,on_jsload))
,((function (js_files,map__9280,map__9280__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__9280,map__9280__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.call(null).getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_uri.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__9289_9293 = cljs.core.seq.call(null,things_to_log);
var chunk__9290_9294 = null;
var count__9291_9295 = (0);
var i__9292_9296 = (0);
while(true){
if((i__9292_9296 < count__9291_9295)){
var t_9297 = cljs.core._nth.call(null,chunk__9290_9294,i__9292_9296);
console.log(t_9297);

var G__9298 = seq__9289_9293;
var G__9299 = chunk__9290_9294;
var G__9300 = count__9291_9295;
var G__9301 = (i__9292_9296 + (1));
seq__9289_9293 = G__9298;
chunk__9290_9294 = G__9299;
count__9291_9295 = G__9300;
i__9292_9296 = G__9301;
continue;
} else {
var temp__4657__auto___9302 = cljs.core.seq.call(null,seq__9289_9293);
if(temp__4657__auto___9302){
var seq__9289_9303__$1 = temp__4657__auto___9302;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9289_9303__$1)){
var c__7358__auto___9304 = cljs.core.chunk_first.call(null,seq__9289_9303__$1);
var G__9305 = cljs.core.chunk_rest.call(null,seq__9289_9303__$1);
var G__9306 = c__7358__auto___9304;
var G__9307 = cljs.core.count.call(null,c__7358__auto___9304);
var G__9308 = (0);
seq__9289_9293 = G__9305;
chunk__9290_9294 = G__9306;
count__9291_9295 = G__9307;
i__9292_9296 = G__9308;
continue;
} else {
var t_9309 = cljs.core.first.call(null,seq__9289_9303__$1);
console.log(t_9309);

var G__9310 = cljs.core.next.call(null,seq__9289_9303__$1);
var G__9311 = null;
var G__9312 = (0);
var G__9313 = (0);
seq__9289_9293 = G__9310;
chunk__9290_9294 = G__9311;
count__9291_9295 = G__9312;
i__9292_9296 = G__9313;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
/**
 * Perform heuristics to check if a non-shimmed DOM is available
 */
adzerk.boot_reload.reload.has_dom_QMARK_ = (function adzerk$boot_reload$reload$has_dom_QMARK_(){
return (typeof window !== 'undefined') && (typeof window.document !== 'undefined') && (typeof window.document.documentURI !== 'undefined');
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
var changed_STAR_ = cljs.core.map.call(null,(function (p1__9314_SHARP_){
return [cljs.core.str(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(p1__9314_SHARP_)].join('');
}),changed);
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed_STAR_);

adzerk.boot_reload.reload.reload_js.call(null,changed_STAR_,opts);

if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
var G__9316 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__9316);

adzerk.boot_reload.reload.reload_css.call(null,G__9316);

adzerk.boot_reload.reload.reload_img.call(null,G__9316);

return G__9316;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map