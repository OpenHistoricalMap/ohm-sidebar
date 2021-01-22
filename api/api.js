var openhistoricalmap=function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/api/",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n(1),n(2),n(3);var i=n(4);t.default=i},function(e,t){var n,i,o,s;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;if(!document.documentElement.contains(t))return null;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null}),"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(e){"use strict";if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),n=1;n<arguments.length;n++){var i=arguments[n];if(null!=i)for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},writable:!0,configurable:!0}),Array.prototype.forEach||(Array.prototype.forEach=function(e){var t,n;if(null==this)throw new TypeError("this is null or not defined");var i=Object(this),o=i.length>>>0;if("function"!=typeof e)throw new TypeError(e+" is not a function");for(arguments.length>1&&(t=arguments[1]),n=0;n<o;){var s;n in i&&(s=i[n],e.call(t,s,n,i)),n++}}),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),Array.from||(Array.from=(n=Object.prototype.toString,i=function(e){return"function"==typeof e||"[object Function]"===n.call(e)},o=Math.pow(2,53)-1,s=function(e){var t=function(e){var t=Number(e);return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t}(e);return Math.min(Math.max(t,0),o)},function(e){var t=this,n=Object(e);if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined");var o,a=arguments.length>1?arguments[1]:void 0;if(void 0!==a){if(!i(a))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(o=arguments[2])}for(var r,l=s(n.length),c=i(t)?Object(new t(l)):new Array(l),p=0;p<l;)r=n[p],c[p]=a?void 0===o?a(r,p):a.call(o,r,p):r,p+=1;return c.length=l,c}))},function(e,t){},function(e,t,n){},function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}n.r(t),n.d(t,"OpenHistoricaMapInspector",(function(){return s}));var o=n(5);n(6);var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=Object.assign({apiBaseUrl:"https://openhistoricalmap.org/api/",apiVersion:"0.6",classicDivSelector:"#sidebar_content div.browse-section",classicFooterSelector:"#sidebar_content div.secondary-actions",classicTitleBar:"#sidebar_content > h2",onFeatureLoaded:function(){},onFeatureFail:function(){},debug:!1},t),this.options.debug&&console.debug(["OpenHistoricaMapInspector loaded options",this.options]),this.oldpanel=document.querySelector(this.options.classicDivSelector),this.oldfooter=document.querySelector(this.options.classicFooterSelector),this.classicTitleBar=document.querySelector(this.options.classicTitleBar),this.initFooter(),this.initPanel(),this.hideClassicPanel()}var t,n,s;return t=e,(n=[{key:"initPanel",value:function(){this.mainpanel=document.createElement("DIV"),this.mainpanel.classList.add("openhistoricalmap-inspector-panel"),this.oldpanel.parentNode.insertBefore(this.mainpanel,this.oldpanel.nextSibling)}},{key:"initFooter",value:function(){var e=this;this.footer=document.createElement("DIV"),this.footer.classList.add("openhistoricalmap-inspector-footer"),this.oldpanel.parentNode.insertBefore(this.footer,this.oldfooter.nextSibling),this.footer.innerHTML='\n            <a href="javascript:void(0);" data-link="openhistoricalmap-inspector-classicview">Switch to Classic Inspector</a>\n            <br/>\n            <a href="javascript:void(0);" data-link="openhistoricalmap-inspector-newinspector">Switch to OHM Inspector</a>\n            <br/>\n        ',this.footer_classicviewbutton=this.footer.querySelector('a[data-link="openhistoricalmap-inspector-classicview"]'),this.footer_inspectorviewbutton=this.footer.querySelector('a[data-link="openhistoricalmap-inspector-newinspector"]'),this.footer_classicviewbutton.addEventListener("click",(function(){e.showClassicPanel()})),this.footer_inspectorviewbutton.addEventListener("click",(function(){e.hideClassicPanel()}))}},{key:"selectFeatureFromUrl",value:function(){var e=document.location.href.match(/\/(way|node|relation)\/(\d+)/);if(!e)return console.debug("selectFeatureFromUrl() page address does not look like a OSM /type/id URL");var t=e[1],n=e[2];this.options.debug&&console.debug("selectFeatureFromUrl found ".concat(t," ").concat(n)),this.selectFeature(t,n)}},{key:"selectFeature",value:function(e,t){var n=this,i="".concat(this.options.apiBaseUrl,"/").concat(this.options.apiVersion,"/").concat(e,"/").concat(t);this.options.debug&&console.debug("OpenHistoricaMapInspector selectFeature(".concat(e,", ").concat(t,") => ").concat(i)),this.fetchXmlData(i,(function(i){n.renderFeatureDetails(e,t,i),n.options.onFeatureLoaded.call(n,e,t,i)}),(function(){n.renderNotFound(e,t),n.options.onFeatureFail.call(n,e,t)}),(function(){n.renderNetworkError(),n.options.onFeatureFail.call(n,e,t)}))}},{key:"renderNetworkError",value:function(){this.classicTitleBar.innerHTML="Error",this.footer.style.display="none",this.mainpanel.innerHTML="<p>Unable to contact the OHM server at this time. Please try again later.</p>"}},{key:"renderNotFound",value:function(e,t){this.classicTitleBar.innerHTML="Not Found",this.footer.style.display="none",this.mainpanel.innerHTML="<p>No such feature: ".concat(e," ").concat(t,"</p>")}},{key:"fetchXmlData",value:function(e,t,n,i){var o=new XMLHttpRequest;o.open("GET",e),o.onload=function(){if(404==o.status)return n();var e=(new DOMParser).parseFromString(o.response,"text/xml");t(e)},o.onerror=function(){i()},o.send()}},{key:"renderFeatureDetails",value:function(e,t,n){var i=document.createElement("H2");i.classList.add("openhistoricalmap-inspector-panel-title");var s=this.getTagValue(n,"name");i.textContent=s,this.mainpanel.appendChild(i);for(var a=[],r=1;r<=99;r++){var l=this.getTagValue(n,"image:".concat(r)),c=this.getTagValue(n,"image:".concat(r,":caption"))||" ",p=this.getTagValue(n,"image:".concat(r,":src_text"))||" ";if(!l)break;a.push({imageurl:l,captiontext:c,attribtext:p})}if(this.options.debug&&console.debug(["renderFeatureDetails(type, id) images:",a]),a.length){var d=document.createElement("DIV");d.classList.add("openhistoricalmap-inspector-panel-slideshow"),d.innerHTML='\n                <a class="openhistoricalmap-inspector-panel-slideshow-prevnext openhistoricalmap-inspector-panel-slideshow-prev" href="javascript:void(0);"><span></span></a>\n                <a class="openhistoricalmap-inspector-panel-slideshow-prevnext openhistoricalmap-inspector-panel-slideshow-next" href="javascript:void(0);"><span></span></a>\n            ',a.forEach((function(e,t){var n=document.createElement("DIV");if(n.classList.add("openhistoricalmap-inspector-panel-slideshow-slide"),n.setAttribute("data-slide-number",t),n.innerHTML='<a href="'.concat(e.imageurl,'" target="_blank"><img src="').concat(e.imageurl,'" title="').concat(e.captiontext,'" /></a>'),e.captiontext){var i=document.createElement("SPAN");i.classList.add("openhistoricalmap-inspector-panel-slideshow-caption"),i.textContent=e.captiontext,n.appendChild(i)}if(e.attribtext){var o=document.createElement("SPAN");o.classList.add("openhistoricalmap-inspector-panel-slideshow-credits"),o.textContent=e.attribtext,n.appendChild(o)}d.appendChild(n)}));var h=d.querySelectorAll(".openhistoricalmap-inspector-panel-slideshow div.openhistoricalmap-inspector-panel-slideshow-slide"),u=function(e){h.forEach((function(t,n){n==e?t.classList.remove("openhistoricalmap-inspector-panel-slideshow-hidden"):t.classList.add("openhistoricalmap-inspector-panel-slideshow-hidden"),g=e})),0==e?m.classList.add("openhistoricalmap-inspector-panel-slideshow-hidden"):m.classList.remove("openhistoricalmap-inspector-panel-slideshow-hidden"),e+1>=h.length?f.classList.add("openhistoricalmap-inspector-panel-slideshow-hidden"):f.classList.remove("openhistoricalmap-inspector-panel-slideshow-hidden")},m=d.querySelector(".openhistoricalmap-inspector-panel-slideshow .openhistoricalmap-inspector-panel-slideshow-prev"),f=d.querySelector(".openhistoricalmap-inspector-panel-slideshow .openhistoricalmap-inspector-panel-slideshow-next");m.addEventListener("click",(function(){u(g-1)})),f.addEventListener("click",(function(){u(g+1)})),this.mainpanel.appendChild(d);var v=d.querySelectorAll("div.openhistoricalmap-inspector-panel-slideshow-slide a");v.forEach((function(e){var t=e.querySelector("img").title||"";e.setAttribute("title",t)})),new o({elements:v});var g=0;u(g)}var b=this.getTagValue(n,"start_date"),y=this.getTagValue(n,"end_date"),w=this.getTagValue(n,"wikipedia"),C=this.getTagValue(n,"followed_by");if(this.options.debug&&console.debug(["renderFeatureDetails(type, id) start/end date:",b,y]),b&&"-1000000-01-01"!=b){var x=document.createElement("DIV");x.classList.add("openhistoricalmap-inspector-panel-paragraph");var E=document.createElement("STRONG");E.textContent="Start Date: ",x.appendChild(E);var k=document.createElement("SPAN");k.textContent=b,x.appendChild(k),this.mainpanel.appendChild(x)}if(y&&"1000000-01-01"!=y){var L=document.createElement("DIV");L.classList.add("openhistoricalmap-inspector-panel-paragraph");var T=document.createElement("STRONG");T.textContent="End Date: ",L.appendChild(T);var S=document.createElement("SPAN");S.textContent=b,L.appendChild(S),this.mainpanel.appendChild(L)}if(w){var P=document.createElement("DIV");P.classList.add("openhistoricalmap-inspector-panel-paragraph");var O=document.createElement("STRONG");O.textContent="Wikipedia: ",P.appendChild(O);var I=document.createElement("SPAN");P.appendChild(I),this.getWikipediaExcerpt(w,(function(e){I.textContent=e})),P.appendChild(document.createTextNode(" "));var A=document.createElement("A");A.textContent="(link)",A.target="_blank",A.rel="nofollow",A.href=this.convertWikipediaLink(w),P.appendChild(A),this.mainpanel.appendChild(P)}if(C){var N=this.getTagValue(n,"followed_by:source");if(N&&N.match(/^http/i)){var D=document.createElement("DIV");D.classList.add("openhistoricalmap-inspector-panel-paragraph");var F=document.createElement("STRONG");F.textContent="Followed By: ",D.appendChild(F);var M=document.createElement("A");M.href=N,M.target="_blank",M.rel="nofollow",M.textContent=C,D.appendChild(M),this.mainpanel.appendChild(D)}else{var B=document.createElement("DIV");B.classList.add("openhistoricalmap-inspector-panel-paragraph");var H=document.createElement("STRONG");H.textContent="Followed By: ",B.appendChild(H);var j=document.createElement("SPAN");if(j.textContent=C,B.appendChild(j),this.mainpanel.appendChild(B),N){var $=document.createElement("SPAN");$.textContent=". Source: ".concat(N),B.appendChild($)}}}}},{key:"getTagValue",value:function(e,t){for(var n=e.getElementsByTagName("tag"),i=0;i<n.length;i++){var o=n[i].getAttribute("k"),s=n[i].getAttribute("v");if(o==t)return s}}},{key:"showClassicPanel",value:function(){this.oldpanel.style.display="block",this.oldfooter.style.display="block",this.classicTitleBar.style.display="block",this.mainpanel.style.display="none",this.footer_classicviewbutton.style.display="none",this.footer_inspectorviewbutton.style.display="inline"}},{key:"hideClassicPanel",value:function(){this.oldpanel.style.display="none",this.oldfooter.style.display="none",this.classicTitleBar.style.display="none",this.mainpanel.style.display="block",this.footer_classicviewbutton.style.display="inline",this.footer_inspectorviewbutton.style.display="none"}},{key:"parseWikipediaLink",value:function(e){var t,n,i,o=e.match(/^https?:\/\/(\w\w)\.wikipedia\.org\/wiki\/(\w+)#?(.*)$/i),s=e.match(/(\w\w):(\w+)#?(.*)$/);if(o)t=o[1],n=o[2],i=o[3];else{if(!s)return;t=s[1],n=s[2],i=s[3]}return{lang:t,name:n,hash:i}}},{key:"getWikipediaExcerpt",value:function(e,t){var n=this.parseWikipediaLink(e),i="https://".concat(n.lang,".wikipedia.org/w/api.php?action=query&prop=extracts&exsentences=2&exlimit=1&format=xml&explaintext=true&exintro=true&origin=*&titles=").concat(encodeURIComponent(n.name)),o=new XMLHttpRequest;o.open("GET",i),o.onload=function(){var e=(new DOMParser).parseFromString(o.response,"text/xml").getElementsByTagName("extract")[0].textContent;e=e.replace(/\(\s*\(\s*listen\s*\)\s*\)/,""),t(e)},o.send()}},{key:"convertWikipediaLink",value:function(e){var t=this.parseWikipediaLink(e),n="https://".concat(t.lang,".wikipedia.org/wiki/").concat(t.name);return t.hash&&(n+="#".concat(t.hash)),n}}])&&i(t.prototype,n),s&&i(t,s),e}()},function(e,t,n){var i,o,s;o=[],void 0===(s="function"==typeof(i=function(){function e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];if(n)for(var i in n)n.hasOwnProperty(i)&&(e[i]=n[i])}return e}function t(e,t){e&&t&&(e.className+=" "+t)}function n(e,t){e&&t&&(e.className=e.className.replace(new RegExp("(\\s|^)"+t+"(\\s|$)")," ").trim())}function i(e){var t=document.createElement("div");return t.innerHTML=e.trim(),t.childNodes[0]}function o(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector).call(e,t)}function s(e){this.init.apply(this,arguments)}return s.defaults={elementClass:"",elementLoadingClass:"slbLoading",htmlClass:"slbActive",closeBtnClass:"",nextBtnClass:"",prevBtnClass:"",loadingTextClass:"",closeBtnCaption:"Close",nextBtnCaption:"Next",prevBtnCaption:"Previous",loadingCaption:"Loading...",bindToItems:!0,closeOnOverlayClick:!0,closeOnEscapeKey:!0,nextOnImageClick:!0,showCaptions:!0,captionAttribute:"title",urlAttribute:"href",startAt:0,loadingTimeout:100,appendTarget:"body",beforeSetContent:null,beforeClose:null,afterClose:null,beforeDestroy:null,afterDestroy:null,videoRegex:new RegExp(/youtube.com|vimeo.com/)},e(s.prototype,{init:function(t){t=this.options=e({},s.defaults,t);var n,i=this;t.$items&&(n=t.$items.get()),t.elements&&(n=[].slice.call("string"==typeof t.elements?document.querySelectorAll(t.elements):t.elements)),this.eventRegistry={lightbox:[],thumbnails:[]},this.items=[],this.captions=[],n&&n.forEach((function(e,n){i.items.push(e.getAttribute(t.urlAttribute)),i.captions.push(e.getAttribute(t.captionAttribute)),t.bindToItems&&i.addEvent(e,"click",(function(e){e.preventDefault(),i.showPosition(n)}),"thumbnails")})),t.items&&(this.items=t.items),t.captions&&(this.captions=t.captions)},addEvent:function(e,t,n,i){return this.eventRegistry[i||"lightbox"].push({element:e,eventName:t,callback:n}),e.addEventListener(t,n),this},removeEvents:function(e){return this.eventRegistry[e].forEach((function(e){e.element.removeEventListener(e.eventName,e.callback)})),this.eventRegistry[e]=[],this},next:function(){return this.showPosition(this.currentPosition+1)},prev:function(){return this.showPosition(this.currentPosition-1)},normalizePosition:function(e){return e>=this.items.length?e=0:e<0&&(e=this.items.length-1),e},showPosition:function(e){var t=this.normalizePosition(e);return void 0!==this.currentPosition&&(this.direction=t>this.currentPosition?"next":"prev"),this.currentPosition=t,this.setupLightboxHtml().prepareItem(this.currentPosition,this.setContent).show()},loading:function(e){var i=this,o=this.options;e?this.loadingTimeout=setTimeout((function(){t(i.$el,o.elementLoadingClass),i.$content.innerHTML='<p class="slbLoadingText '+o.loadingTextClass+'">'+o.loadingCaption+"</p>",i.show()}),o.loadingTimeout):(n(this.$el,o.elementLoadingClass),clearTimeout(this.loadingTimeout))},prepareItem:function(e,t){var n=this,o=this.items[e];if(this.loading(!0),this.options.videoRegex.test(o))t.call(n,i('<div class="slbIframeCont"><iframe class="slbIframe" frameborder="0" allowfullscreen src="'+o+'"></iframe></div>'));else{var s=i('<div class="slbImageWrap"><img class="slbImage" src="'+o+'" /></div>');this.$currentImage=s.querySelector(".slbImage"),this.options.showCaptions&&this.captions[e]&&s.appendChild(i('<div class="slbCaption">'+this.captions[e]+"</div>")),this.loadImage(o,(function(){n.setImageDimensions(),t.call(n,s),n.loadImage(n.items[n.normalizePosition(n.currentPosition+1)])}))}return this},loadImage:function(e,t){if(!this.options.videoRegex.test(e)){var n=new Image;t&&(n.onload=t),n.src=e}},setupLightboxHtml:function(){var e=this.options;return this.$el||(this.$el=i('<div class="slbElement '+e.elementClass+'"><div class="slbOverlay"></div><div class="slbWrapOuter"><div class="slbWrap"><div class="slbContentOuter"><div class="slbContent"></div><button type="button" title="'+e.closeBtnCaption+'" class="slbCloseBtn '+e.closeBtnClass+'">×</button>'+(this.items.length>1?'<div class="slbArrows"><button type="button" title="'+e.prevBtnCaption+'" class="prev slbArrow'+e.prevBtnClass+'">'+e.prevBtnCaption+'</button><button type="button" title="'+e.nextBtnCaption+'" class="next slbArrow'+e.nextBtnClass+'">'+e.nextBtnCaption+"</button></div>":"")+"</div></div></div></div>"),this.$content=this.$el.querySelector(".slbContent")),this.$content.innerHTML="",this},show:function(){return this.modalInDom||(document.querySelector(this.options.appendTarget).appendChild(this.$el),t(document.documentElement,this.options.htmlClass),this.setupLightboxEvents(),this.modalInDom=!0),this},setContent:function(e){var o="string"==typeof e?i(e):e;return this.loading(!1),this.setupLightboxHtml(),n(this.$content,"slbDirectionNext"),n(this.$content,"slbDirectionPrev"),this.direction&&t(this.$content,"next"===this.direction?"slbDirectionNext":"slbDirectionPrev"),this.options.beforeSetContent&&this.options.beforeSetContent(o,this),this.$content.appendChild(o),this},setImageDimensions:function(){this.$currentImage&&(this.$currentImage.style.maxHeight=("innerHeight"in window?window.innerHeight:document.documentElement.offsetHeight)+"px")},setupLightboxEvents:function(){var e=this;return this.eventRegistry.lightbox.length?this:(this.addEvent(this.$el,"click",(function(t){var n=t.target;o(n,".slbCloseBtn")||e.options.closeOnOverlayClick&&o(n,".slbWrap")?e.close():o(n,".slbArrow")?o(n,".next")?e.next():e.prev():e.options.nextOnImageClick&&e.items.length>1&&o(n,".slbImage")&&e.next()})).addEvent(document,"keyup",(function(t){e.options.closeOnEscapeKey&&27===t.keyCode&&e.close(),e.items.length>1&&((39===t.keyCode||68===t.keyCode)&&e.next(),(37===t.keyCode||65===t.keyCode)&&e.prev())})).addEvent(window,"resize",(function(){e.setImageDimensions()})),this)},close:function(){this.modalInDom&&(this.runHook("beforeClose"),this.removeEvents("lightbox"),this.$el&&this.$el.parentNode.removeChild(this.$el),n(document.documentElement,this.options.htmlClass),this.modalInDom=!1,this.runHook("afterClose")),this.direction=void 0,this.currentPosition=this.options.startAt},destroy:function(){this.close(),this.runHook("beforeDestroy"),this.removeEvents("thumbnails"),this.runHook("afterDestroy")},runHook:function(e){this.options[e]&&this.options[e](this)}}),s.open=function(e){var t=new s(e);return e.content?t.setContent(e.content).show():t.showPosition(t.options.startAt)},s.registerAsJqueryPlugin=function(e){e.fn.simpleLightbox=function(t){var n,i=this;return this.each((function(){e.data(this,"simpleLightbox")||(n=n||new s(e.extend({},t,{$items:i})),e.data(this,"simpleLightbox",n))}))},e.SimpleLightbox=s},"undefined"!=typeof window&&window.jQuery&&s.registerAsJqueryPlugin(window.jQuery),s})?i.apply(t,o):i)||(e.exports=s)},function(e,t,n){}]).default;
//# sourceMappingURL=api.js.map