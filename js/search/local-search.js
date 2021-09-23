"use strict";function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}window.addEventListener("load",function(){var t=!1,e=function(){var e;document.body.style.cssText="width: 100%;overflow: hidden",document.querySelector("#local-search .search-dialog").style.display="block",document.querySelector("#local-search-input input").focus(),btf.fadeIn(document.getElementById("search-mask"),.5),t||(e=GLOBAL_CONFIG.localSearch.path,fetch(GLOBAL_CONFIG.root+e).then(function(e){return e.text()}).then(function(e){return(new window.DOMParser).parseFromString(e,"text/xml")}).then(function(e){var t=[].concat(_toConsumableArray(e.querySelectorAll("entry"))).map(function(e){return{title:e.querySelector("title").textContent,content:e.querySelector("content").textContent,url:e.querySelector("url").textContent}}),r=document.querySelector("#local-search-input input"),n=document.getElementById("local-search-results");r.addEventListener("input",function(){var h='<div class="search-result-list">',m=this.value.trim().toLowerCase().split(/[\s]+/);if(n.innerHTML="",!(this.value.trim().length<=0)){var y=0;t.forEach(function(e){var r=!0;e.title&&""!==e.title.trim()||(e.title="Untitled");var n=e.title.trim().toLowerCase(),a=e.content.trim().replace(/<[^>]+>/g,"").toLowerCase(),t=e.url.startsWith("/")?e.url:GLOBAL_CONFIG.root+e.url,c=-1,o=-1,l=-1;if(""!==n||""!==a?m.forEach(function(e,t){c=n.indexOf(e),o=a.indexOf(e),c<0&&o<0?r=!1:(o<0&&(o=0),0===t&&(l=o))}):r=!1,r){var s=e.content.trim().replace(/<[^>]+>/g,"");if(0<=l){var i=l-30,u=l+100;i<0&&(i=0),0===i&&(u=100),u>s.length&&(u=s.length);var d=s.substring(i,u);m.forEach(function(e){var t=new RegExp(e,"gi");d=d.replace(t,'<span class="search-keyword">'+e+"</span>"),n=n.replace(t,'<span class="search-keyword">'+e+"</span>")}),h+='<div class="local-search__hit-item"><a href="'+t+'" class="search-result-title">'+n+"</a>",y+=1,""!==a&&(h+='<p class="search-result">'+d+"...</p>")}h+="</div>"}}),0===y&&(h+='<div id="local-search__hits-empty">'+GLOBAL_CONFIG.localSearch.languages.hits_empty.replace(/\$\{query}/,this.value.trim())+"</div>"),h+="</div>",n.innerHTML=h,window.pjax&&window.pjax.refresh(n)}})}),t=!0),document.addEventListener("keydown",function e(t){"Escape"===t.code&&(r(),document.removeEventListener("keydown",e))})},r=function(){document.body.style.cssText="width: '';overflow: ''";var e=document.querySelector("#local-search .search-dialog");e.style.animation="search_close .5s",setTimeout(function(){e.style.cssText="display: none; animation: ''"},500),btf.fadeOut(document.getElementById("search-mask"),.5)},n=function(){document.querySelector("#search-button > .search").addEventListener("click",e),document.getElementById("search-mask").addEventListener("click",r),document.querySelector("#local-search .search-close-button").addEventListener("click",r)};n(),window.addEventListener("pjax:complete",function(){"block"===getComputedStyle(document.querySelector("#local-search .search-dialog")).display&&r(),n()})});