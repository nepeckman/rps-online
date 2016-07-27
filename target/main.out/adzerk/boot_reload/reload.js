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
return (function (p1__7814_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__7814_SHARP_),path);
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
var seq__7819 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__7820 = null;
var count__7821 = (0);
var i__7822 = (0);
while(true){
if((i__7822 < count__7821)){
var s = cljs.core._nth.call(null,chunk__7820,i__7822);
var temp__4657__auto___7823 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___7823)){
var sheet_7824 = temp__4657__auto___7823;
var temp__4657__auto___7825__$1 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_7824.href,changed);
if(cljs.core.truth_(temp__4657__auto___7825__$1)){
var href_uri_7826 = temp__4657__auto___7825__$1;
sheet_7824.ownerNode.href = href_uri_7826.makeUnique().toString();
} else {
}
} else {
}

var G__7827 = seq__7819;
var G__7828 = chunk__7820;
var G__7829 = count__7821;
var G__7830 = (i__7822 + (1));
seq__7819 = G__7827;
chunk__7820 = G__7828;
count__7821 = G__7829;
i__7822 = G__7830;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__7819);
if(temp__4657__auto__){
var seq__7819__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7819__$1)){
var c__7358__auto__ = cljs.core.chunk_first.call(null,seq__7819__$1);
var G__7831 = cljs.core.chunk_rest.call(null,seq__7819__$1);
var G__7832 = c__7358__auto__;
var G__7833 = cljs.core.count.call(null,c__7358__auto__);
var G__7834 = (0);
seq__7819 = G__7831;
chunk__7820 = G__7832;
count__7821 = G__7833;
i__7822 = G__7834;
continue;
} else {
var s = cljs.core.first.call(null,seq__7819__$1);
var temp__4657__auto___7835__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___7835__$1)){
var sheet_7836 = temp__4657__auto___7835__$1;
var temp__4657__auto___7837__$2 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_7836.href,changed);
if(cljs.core.truth_(temp__4657__auto___7837__$2)){
var href_uri_7838 = temp__4657__auto___7837__$2;
sheet_7836.ownerNode.href = href_uri_7838.makeUnique().toString();
} else {
}
} else {
}

var G__7839 = cljs.core.next.call(null,seq__7819__$1);
var G__7840 = null;
var G__7841 = (0);
var G__7842 = (0);
seq__7819 = G__7839;
chunk__7820 = G__7840;
count__7821 = G__7841;
i__7822 = G__7842;
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
var seq__7847 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__7848 = null;
var count__7849 = (0);
var i__7850 = (0);
while(true){
if((i__7850 < count__7849)){
var s = cljs.core._nth.call(null,chunk__7848,i__7850);
var temp__4657__auto___7851 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___7851)){
var image_7852 = temp__4657__auto___7851;
var temp__4657__auto___7853__$1 = adzerk.boot_reload.reload.changed_uri.call(null,image_7852.src,changed);
if(cljs.core.truth_(temp__4657__auto___7853__$1)){
var href_uri_7854 = temp__4657__auto___7853__$1;
image_7852.src = href_uri_7854.makeUnique().toString();
} else {
}
} else {
}

var G__7855 = seq__7847;
var G__7856 = chunk__7848;
var G__7857 = count__7849;
var G__7858 = (i__7850 + (1));
seq__7847 = G__7855;
chunk__7848 = G__7856;
count__7849 = G__7857;
i__7850 = G__7858;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__7847);
if(temp__4657__auto__){
var seq__7847__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7847__$1)){
var c__7358__auto__ = cljs.core.chunk_first.call(null,seq__7847__$1);
var G__7859 = cljs.core.chunk_rest.call(null,seq__7847__$1);
var G__7860 = c__7358__auto__;
var G__7861 = cljs.core.count.call(null,c__7358__auto__);
var G__7862 = (0);
seq__7847 = G__7859;
chunk__7848 = G__7860;
count__7849 = G__7861;
i__7850 = G__7862;
continue;
} else {
var s = cljs.core.first.call(null,seq__7847__$1);
var temp__4657__auto___7863__$1 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___7863__$1)){
var image_7864 = temp__4657__auto___7863__$1;
var temp__4657__auto___7865__$2 = adzerk.boot_reload.reload.changed_uri.call(null,image_7864.src,changed);
if(cljs.core.truth_(temp__4657__auto___7865__$2)){
var href_uri_7866 = temp__4657__auto___7865__$2;
image_7864.src = href_uri_7866.makeUnique().toString();
} else {
}
} else {
}

var G__7867 = cljs.core.next.call(null,seq__7847__$1);
var G__7868 = null;
var G__7869 = (0);
var G__7870 = (0);
seq__7847 = G__7867;
chunk__7848 = G__7868;
count__7849 = G__7869;
i__7850 = G__7870;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__7873){
var map__7876 = p__7873;
var map__7876__$1 = ((((!((map__7876 == null)))?((((map__7876.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7876.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7876):map__7876);
var on_jsload = cljs.core.get.call(null,map__7876__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__7876,map__7876__$1,on_jsload){
return (function (p1__7871_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__7871_SHARP_,".js");
});})(map__7876,map__7876__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.net.jsloader.loadMany(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__7876,map__7876__$1,on_jsload){
return (function (p1__7872_SHARP_){
return goog.Uri.parse(p1__7872_SHARP_).makeUnique();
});})(js_files,map__7876,map__7876__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__7876,map__7876__$1,on_jsload){
return (function() { 
var G__7878__delegate = function (_){
return on_jsload.call(null);
};
var G__7878 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__7879__i = 0, G__7879__a = new Array(arguments.length -  0);
while (G__7879__i < G__7879__a.length) {G__7879__a[G__7879__i] = arguments[G__7879__i + 0]; ++G__7879__i;}
  _ = new cljs.core.IndexedSeq(G__7879__a,0);
} 
return G__7878__delegate.call(this,_);};
G__7878.cljs$lang$maxFixedArity = 0;
G__7878.cljs$lang$applyTo = (function (arglist__7880){
var _ = cljs.core.seq(arglist__7880);
return G__7878__delegate(_);
});
G__7878.cljs$core$IFn$_invoke$arity$variadic = G__7878__delegate;
return G__7878;
})()
;})(js_files,map__7876,map__7876__$1,on_jsload))
,((function (js_files,map__7876,map__7876__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__7876,map__7876__$1,on_jsload))
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

var seq__7885_7889 = cljs.core.seq.call(null,things_to_log);
var chunk__7886_7890 = null;
var count__7887_7891 = (0);
var i__7888_7892 = (0);
while(true){
if((i__7888_7892 < count__7887_7891)){
var t_7893 = cljs.core._nth.call(null,chunk__7886_7890,i__7888_7892);
console.log(t_7893);

var G__7894 = seq__7885_7889;
var G__7895 = chunk__7886_7890;
var G__7896 = count__7887_7891;
var G__7897 = (i__7888_7892 + (1));
seq__7885_7889 = G__7894;
chunk__7886_7890 = G__7895;
count__7887_7891 = G__7896;
i__7888_7892 = G__7897;
continue;
} else {
var temp__4657__auto___7898 = cljs.core.seq.call(null,seq__7885_7889);
if(temp__4657__auto___7898){
var seq__7885_7899__$1 = temp__4657__auto___7898;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7885_7899__$1)){
var c__7358__auto___7900 = cljs.core.chunk_first.call(null,seq__7885_7899__$1);
var G__7901 = cljs.core.chunk_rest.call(null,seq__7885_7899__$1);
var G__7902 = c__7358__auto___7900;
var G__7903 = cljs.core.count.call(null,c__7358__auto___7900);
var G__7904 = (0);
seq__7885_7889 = G__7901;
chunk__7886_7890 = G__7902;
count__7887_7891 = G__7903;
i__7888_7892 = G__7904;
continue;
} else {
var t_7905 = cljs.core.first.call(null,seq__7885_7899__$1);
console.log(t_7905);

var G__7906 = cljs.core.next.call(null,seq__7885_7899__$1);
var G__7907 = null;
var G__7908 = (0);
var G__7909 = (0);
seq__7885_7889 = G__7906;
chunk__7886_7890 = G__7907;
count__7887_7891 = G__7908;
i__7888_7892 = G__7909;
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
var changed_STAR_ = cljs.core.map.call(null,(function (p1__7910_SHARP_){
return [cljs.core.str(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(p1__7910_SHARP_)].join('');
}),changed);
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed_STAR_);

adzerk.boot_reload.reload.reload_js.call(null,changed_STAR_,opts);

if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
var G__7912 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__7912);

adzerk.boot_reload.reload.reload_css.call(null,G__7912);

adzerk.boot_reload.reload.reload_img.call(null,G__7912);

return G__7912;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map