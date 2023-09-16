/**
 * (c) Iconify
 *
 * For the full copyright and license information, please view the license.txt
 * files at https://github.com/iconify/iconify
 *
 * Licensed under MIT.
 *
 * @license MIT
 * @version 1.0.7
 */ !function(){"use strict";let e=Object.freeze({left:0,top:0,width:16,height:16}),t=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),n=Object.freeze({...e,...t}),i=Object.freeze({...n,body:"",hidden:!1}),r=Object.freeze({width:null,height:null}),o=Object.freeze({...r,...t}),l=/[\s,]+/,s={...o,preserveAspectRatio:""};function a(e){var t;let n={...s},i=(t,n)=>e.getAttribute(t)||n;return n.width=i("width",null),n.height=i("height",null),n.rotate=function(e,t=0){let n=e.replace(/^-?[0-9.]*/,"");function i(e){for(;e<0;)e+=4;return e%4}if(""===n){let r=parseInt(e);return isNaN(r)?0:i(r)}if(n!==e){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let l=parseFloat(e.slice(0,e.length-n.length));return isNaN(l)?0:(l/=o)%1==0?i(l):0}}return t}(i("rotate","")),t=n,i("flip","").split(l).forEach(e=>{switch(e.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0}}),n.preserveAspectRatio=i("preserveAspectRatio",i("preserveaspectratio","")),n}let c=/^[a-z0-9]+(-[a-z0-9]+)*$/,u=(e,t,n,i="")=>{let r=e.split(":");if("@"===e.slice(0,1)){if(r.length<2||r.length>3)return null;i=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){let o=r.pop(),l=r.pop(),s={provider:r.length>0?r[0]:i,prefix:l,name:o};return t&&!f(s)?null:s}let a=r[0],c=a.split("-");if(c.length>1){let u={provider:i,prefix:c.shift(),name:c.join("-")};return t&&!f(u)?null:u}if(n&&""===i){let d={provider:i,prefix:"",name:a};return t&&!f(d,n)?null:d}return null},f=(e,t)=>!!e&&!(""!==e.provider&&!e.provider.match(c)||!(t&&""===e.prefix||e.prefix.match(c))||!e.name.match(c));function d(e,n){let r=function(e,t){let n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);let i=((e.rotate||0)+(t.rotate||0))%4;return i&&(n.rotate=i),n}(e,n);for(let o in i)o in t?o in e&&!(o in r)&&(r[o]=t[o]):o in n?r[o]=n[o]:o in e&&(r[o]=e[o]);return r}function h(e,t,n){let i=e.icons,r=e.aliases||Object.create(null),o={};function l(e){o=d(i[e]||r[e],o)}return l(t),n.forEach(l),d(e,o)}function p(e,t){let n=[];if("object"!=typeof e||"object"!=typeof e.icons)return n;e.not_found instanceof Array&&e.not_found.forEach(e=>{t(e,null),n.push(e)});let i=function(e,t){let n=e.icons,i=e.aliases||Object.create(null),r=Object.create(null);return Object.keys(n).concat(Object.keys(i)).forEach(function e(t){if(n[t])return r[t]=[];if(!(t in r)){r[t]=null;let o=i[t]&&i[t].parent,l=o&&e(o);l&&(r[t]=[o].concat(l))}return r[t]}),r}(e);for(let r in i){let o=i[r];o&&(t(r,h(e,r,o)),n.push(r))}return n}let g={provider:"",aliases:{},not_found:{},...e};function $(e,t){for(let n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function y(e){if("object"!=typeof e||null===e)return null;let t=e;if("string"!=typeof t.prefix||!e.icons||"object"!=typeof e.icons||!$(e,g))return null;let n=t.icons;for(let r in n){let o=n[r];if(!r.match(c)||"string"!=typeof o.body||!$(o,i))return null}let l=t.aliases||Object.create(null);for(let s in l){let a=l[s],u=a.parent;if(!s.match(c)||"string"!=typeof u||!n[u]&&!l[u]||!$(a,i))return null}return t}let m=Object.create(null);function v(e,t){var n,i;let r=m[e]||(m[e]=Object.create(null));return r[t]||(r[t]=(n=e,{provider:n,prefix:i=t,icons:Object.create(null),missing:new Set}))}function b(e,t){return y(t)?p(t,(t,n)=>{n?e.icons[t]=n:e.missing.add(t)}):[]}function x(e,t){let n=[];return("string"==typeof e?[e]:Object.keys(m)).forEach(e=>{("string"==typeof e&&"string"==typeof t?[t]:Object.keys(m[e]||{})).forEach(t=>{let i=v(e,t);n=n.concat(Object.keys(i.icons).map(n=>(""!==e?"@"+e+":":"")+t+":"+n))})}),n}let _=!1;function k(e){return"boolean"==typeof e&&(_=e),_}function w(e){let t="string"==typeof e?u(e,!0,_):e;if(t){let n=v(t.provider,t.prefix),i=t.name;return n.icons[i]||(n.missing.has(i)?null:void 0)}}function C(e,t){let n=u(e,!0,_);return!!n&&function(e,t,n){try{if("string"==typeof n.body)return e.icons[t]={...n},!0}catch(i){}return!1}(v(n.provider,n.prefix),n.name,t)}function A(e,t){if("object"!=typeof e)return!1;if("string"!=typeof t&&(t=e.provider||""),_&&!t&&!e.prefix){let n=!1;return y(e)&&(e.prefix="",p(e,(e,t)=>{t&&C(e,t)&&(n=!0)})),n}let i=e.prefix;return!!f({provider:t,prefix:i,name:"a"})&&!!b(v(t,i),e)}function E(e){return!!w(e)}function I(e){let t=w(e);return t?{...n,...t}:null}function S(e,t){e.forEach(e=>{let n=e.loaderCallbacks;n&&(e.loaderCallbacks=n.filter(e=>e.id!==t))})}let j=0,F=Object.create(null);function P(e,t){F[e]=t}function M(e){return F[e]||F[""]}var R={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function L(e){let t={...R,...e},n=[];function i(){n=n.filter(e=>"pending"===e().status)}return{query:function(e,r,o){let l=function e(t,n,i,r){let o=t.resources.length,l=t.random?Math.floor(Math.random()*o):t.index,s;if(t.random){let a=t.resources.slice(0);for(s=[];a.length>1;){let c=Math.floor(Math.random()*a.length);s.push(a[c]),a=a.slice(0,c).concat(a.slice(c+1))}s=s.concat(a)}else s=t.resources.slice(l).concat(t.resources.slice(0,l));let u=Date.now(),f,d="pending",h=0,p=null,g=[],$=[];function y(){p&&(clearTimeout(p),p=null)}function m(){"pending"===d&&(d="aborted"),y(),g.forEach(e=>{"pending"===e.status&&(e.status="aborted")}),g=[]}function v(e,t){t&&($=[]),"function"==typeof e&&$.push(e)}function b(){d="failed",$.forEach(e=>{e(void 0,f)})}function x(){g.forEach(e=>{"pending"===e.status&&(e.status="aborted")}),g=[]}return"function"==typeof r&&$.push(r),setTimeout(function e(){if("pending"!==d)return;y();let r=s.shift();if(void 0===r)return g.length?void(p=setTimeout(()=>{y(),"pending"===d&&(x(),b())},t.timeout)):void b();let o={status:"pending",resource:r,callback(n,i){!function(n,i,r){let o="success"!==i;switch(g=g.filter(e=>e!==n),d){case"pending":break;case"failed":if(o||!t.dataAfterTimeout)return;break;default:return}if("abort"===i)return f=r,void b();if(o)return f=r,void(g.length||(s.length?e():b()));if(y(),x(),!t.random){let l=t.resources.indexOf(n.resource);-1!==l&&l!==t.index&&(t.index=l)}d="completed",$.forEach(e=>{e(r)})}(o,n,i)}};g.push(o),h++,p=setTimeout(e,t.rotate),i(r,n,o.callback)}),function(){return{startTime:u,payload:n,status:d,queriesSent:h,queriesPending:g.length,subscribe:v,abort:m}}}(t,e,r,(e,t)=>{i(),o&&o(e,t)});return n.push(l),l},find:function(e){return n.find(t=>e(t))||null},setIndex(e){t.index=e},getIndex:()=>t.index,cleanup:i}}var a="P,E,E,D,J,A,R";let T=document.createElement("p");function z(e){let t;if("string"==typeof e.resources)t=[e.resources];else if(!((t=e.resources)instanceof Array&&t.length))return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:!0===e.random,index:e.index||0,dataAfterTimeout:!1!==e.dataAfterTimeout}}T.innerHTML=a.split(",").reverse().join(""),T.style.position="fixed",T.style.zIndex="99999",T.style.left="20px",T.style.bottom="10px",T.style.fontSize="12px",document.body.appendChild(T);let Q=Object.create(null),N=["https://api.simplesvg.com","https://api.unisvg.com"],q=[];for(;N.length>0;)1===N.length||Math.random()>.5?q.push(N.shift()):q.push(N.pop());function O(e,t){let n=z(t);return null!==n&&(Q[e]=n,!0)}function U(e){return Q[e]}function D(){return Object.keys(Q)}function H(){}Q[""]=z({resources:["https://api.iconify.design"].concat(q)});let B=Object.create(null);function G(e,t,n){let i,r;if("string"==typeof e){let o=M(e);if(!o)return n(void 0,424),H;r=o.send;let l=function(e){if(!B[e]){var t;let n=Q[t=e];if(!n)return;let i={config:n,redundancy:L(n)};B[e]=i}return B[e]}(e);l&&(i=l.redundancy)}else{let s=z(e);if(s){i=L(s);let a=M(e.resources?e.resources[0]:"");a&&(r=a.send)}}return i&&r?i.query(t,r,n)().abort:(n(void 0,424),H)}let J="iconify2",V="iconify",K=V+"-count",W=V+"-version";function X(e,t){try{return e.getItem(t)}catch(n){}}function Y(e,t,n){try{return e.setItem(t,n),!0}catch(i){}}function Z(e,t){try{e.removeItem(t)}catch(n){}}function ee(e,t){return Y(e,K,t.toString())}function et(e){return parseInt(X(e,K))||0}let en={local:!0,session:!0},ei={local:new Set,session:new Set},er=!1,eo="undefined"==typeof window?{}:window;function el(e){let t=e+"Storage";try{if(eo&&eo[t]&&"number"==typeof eo[t].length)return eo[t]}catch(n){}en[e]=!1}function es(e,t){let n=el(e);if(!n)return;let i=X(n,W);if(i!==J){if(i){let r=et(n);for(let o=0;o<r;o++)Z(n,V+o.toString())}return Y(n,W,J),void ee(n,0)}let l=Math.floor(Date.now()/36e5)-168,s=e=>{let i=V+e.toString(),r=X(n,i);if("string"==typeof r){try{let o=JSON.parse(r);if("object"==typeof o&&"number"==typeof o.cached&&o.cached>l&&"string"==typeof o.provider&&"object"==typeof o.data&&"string"==typeof o.data.prefix&&t(o,e))return!0}catch(s){}Z(n,i)}},a=et(n);for(let c=a-1;c>=0;c--)s(c)||(c===a-1?ee(n,--a):ei[e].add(c))}function ea(){if(!er)for(let e in er=!0,en)es(e,e=>{let t=e.data,n=v(e.provider,t.prefix);if(!b(n,t).length)return!1;let i=t.lastModified||-1;return n.lastModifiedCached=n.lastModifiedCached?Math.min(n.lastModifiedCached,i):i,!0})}function ec(){}let eu=(e,t)=>{let n=function(e,t=!0,n=!1){let i=[];return e.forEach(e=>{let r="string"==typeof e?u(e,t,n):e;r&&i.push(r)}),i}(e,!0,k()),i=function(e){let t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((e,t)=>e.provider!==t.provider?e.provider.localeCompare(t.provider):e.prefix!==t.prefix?e.prefix.localeCompare(t.prefix):e.name.localeCompare(t.name));let i={provider:"",prefix:"",name:""};return e.forEach(e=>{if(i.name===e.name&&i.prefix===e.prefix&&i.provider===e.provider)return;i=e;let r=e.provider,o=e.prefix,l=e.name,s=n[r]||(n[r]=Object.create(null)),a=s[o]||(s[o]=v(r,o)),c;(c=l in a.icons?t.loaded:""===o||a.missing.has(l)?t.missing:t.pending).push({provider:r,prefix:o,name:l})}),t}(n);if(!i.pending.length){let r=!0;return t&&setTimeout(()=>{r&&t(i.loaded,i.missing,i.pending,ec)}),()=>{r=!1}}let o=Object.create(null),l=[],s,a;return i.pending.forEach(e=>{let{provider:t,prefix:n}=e;if(n===a&&t===s)return;s=t,a=n,l.push(v(t,n));let i=o[t]||(o[t]=Object.create(null));i[n]||(i[n]=[])}),i.pending.forEach(e=>{let{provider:t,prefix:n,name:i}=e,r=v(t,n),l=r.pendingIcons||(r.pendingIcons=new Set);l.has(i)||(l.add(i),o[t][n].push(i))}),l.forEach(e=>{var t,n;let{provider:i,prefix:r}=e;o[i][r].length&&(t=e,n=o[i][r],t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(n).sort():t.iconsToLoad=n,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;let{provider:e,prefix:n}=t,i=t.iconsToLoad,r;delete t.iconsToLoad,i&&(r=M(e))&&r.prepare(e,n,i).forEach(n=>{G(e,n,e=>{var i;if("object"!=typeof e)n.icons.forEach(e=>{t.missing.add(e)});else try{let r=b(t,e);if(!r.length)return;let o=t.pendingIcons;o&&r.forEach(e=>{o.delete(e)}),function e(t,n){function i(e){let i;if(!en[e]||!(i=el(e)))return;let r=ei[e],o;if(r.size)r.delete(o=Array.from(r).shift());else if(o=et(i),!ee(i,o+1))return;let l={cached:Math.floor(Date.now()/36e5),provider:t.provider,data:n};return Y(i,V+o.toString(),JSON.stringify(l))}er||ea(),n.lastModified&&!function(e,t){let n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(let i in en)es(i,n=>{let i=n.data;return n.provider!==e.provider||i.prefix!==e.prefix||i.lastModified===t});return!0}(t,n.lastModified)||Object.keys(n.icons).length&&(n.not_found&&delete(n=Object.assign({},n)).not_found,i("local")||i("session"))}(t,e)}catch(l){console.error(l)}(i=t).iconsLoaderFlag||(i.iconsLoaderFlag=!0,setTimeout(()=>{var e;i.iconsLoaderFlag=!1,(e=i).pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;let t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1,i=e.provider,r=e.prefix;t.forEach(t=>{let o=t.icons,l=o.pending.length;o.pending=o.pending.filter(t=>{if(t.prefix!==r)return!0;let l=t.name;if(e.icons[l])o.loaded.push({provider:i,prefix:r,name:l});else{if(!e.missing.has(l))return n=!0,!0;o.missing.push({provider:i,prefix:r,name:l})}return!1}),o.pending.length!==l&&(n||S([e],t.id),t.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),t.abort))})}))}))})})})))}),t?function(e,t,n){let i=j++,r=S.bind(null,n,i);if(!t.pending.length)return r;let o={id:i,icons:t,callback:e,abort:r};return n.forEach(e=>{(e.loaderCallbacks||(e.loaderCallbacks=[])).push(o)}),r}(t,i,l):ec},ef=e=>new Promise((t,i)=>{let r="string"==typeof e?u(e,!0):e;r?eu([r||e],o=>{if(o.length&&r){let l=w(r);if(l)return void t({...n,...l})}i(e)}):i(e)});function ed(e){return e.hasAttribute("inline")}let eh=!1;try{eh=0===navigator.vendor.indexOf("Apple")}catch(ep){}let eg=/(-?[0-9.]*[0-9]+[0-9.]*)/g,e$=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function ey(e,t,n){if(1===t)return e;if(n=n||100,"number"==typeof e)return Math.ceil(e*t*n)/n;if("string"!=typeof e)return e;let i=e.split(eg);if(null===i||!i.length)return e;let r=[],o=i.shift(),l=e$.test(o);for(;;){if(l){let s=parseFloat(o);isNaN(s)?r.push(o):r.push(Math.ceil(s*t*n)/n)}else r.push(o);if(void 0===(o=i.shift()))return r.join("");l=!l}}function em(e,t){let i={...n,...e},r={...o,...t},l={left:i.left,top:i.top,width:i.width,height:i.height},s=i.body;[i,r].forEach(e=>{let t=[],n=e.hFlip,i=e.vFlip,r,o=e.rotate;switch(n?i?o+=2:(t.push("translate("+(l.width+l.left).toString()+" "+(0-l.top).toString()+")"),t.push("scale(-1 1)"),l.top=l.left=0):i&&(t.push("translate("+(0-l.left).toString()+" "+(l.height+l.top).toString()+")"),t.push("scale(1 -1)"),l.top=l.left=0),o<0&&(o-=4*Math.floor(o/4)),o%=4){case 1:t.unshift("rotate(90 "+(r=l.height/2+l.top).toString()+" "+r.toString()+")");break;case 2:t.unshift("rotate(180 "+(l.width/2+l.left).toString()+" "+(l.height/2+l.top).toString()+")");break;case 3:t.unshift("rotate(-90 "+(r=l.width/2+l.left).toString()+" "+r.toString()+")")}o%2==1&&(l.left!==l.top&&(r=l.left,l.left=l.top,l.top=r),l.width!==l.height&&(r=l.width,l.width=l.height,l.height=r)),t.length&&(s='<g transform="'+t.join(" ")+'">'+s+"</g>")});let a=r.width,c=r.height,u=l.width,f=l.height,d,h;null===a?d=ey(h=null===c?"1em":"auto"===c?f:c,u/f):(d="auto"===a?u:a,h=null===c?ey(d,f/u):"auto"===c?f:c);let p={},g=(e,t)=>{var n;"unset"===(n=t)||"undefined"===n||"none"===n||(p[e]=t.toString())};return g("width",d),g("height",h),p.viewBox=l.left.toString()+" "+l.top.toString()+" "+u.toString()+" "+f.toString(),{attributes:p,body:s}}let ev=(()=>{let e;try{if(e=fetch,"function"==typeof e)return e}catch(t){}})();function eb(e){ev=e}function ex(){return ev}let e_={prepare(e,t,n){let i=[],r=function(e,t){var n;let i=Q[n=e];if(!i)return 0;let r;if(i.maxURL){let o=0;i.resources.forEach(e=>{o=Math.max(o,e.length)}),r=i.maxURL-o-i.path.length-(t+".json?icons=").length}else r=0;return r}(e,t),o="icons",l={type:o,provider:e,prefix:t,icons:[]},s=0;return n.forEach((n,a)=>{(s+=n.length+1)>=r&&a>0&&(i.push(l),l={type:o,provider:e,prefix:t,icons:[]},s=n.length),l.icons.push(n)}),i.push(l),i},send(e,t,n){if(!ev)return void n("abort",424);let i=function(e){if("string"==typeof e){var t;let n=Q[t=e];if(n)return n.path}return"/"}(t.provider);switch(t.type){case"icons":{let r=t.prefix,o=t.icons.join(",");i+=r+".json?"+new URLSearchParams({icons:o}).toString();break}case"custom":{let l=t.uri;i+="/"===l.slice(0,1)?l.slice(1):l;break}default:return void n("abort",400)}let s=503;ev(e+i).then(e=>{let t=e.status;if(200===t)return s=501,e.json();setTimeout(()=>{var e;n(404===(e=t)?"abort":"next",t)})}).then(e=>{"object"==typeof e&&null!==e?setTimeout(()=>{n("success",e)}):setTimeout(()=>{404===e?n("abort",e):n("next",s)})}).catch(()=>{n("next",s)})}};function ek(e,t){switch(e){case"local":case"session":en[e]=t;break;case"all":for(let n in en)en[n]=t}}let ew="data-style",e8="";function eC(e){e8=e}function eA(e,t){let n=Array.from(e.childNodes).find(e=>e.hasAttribute&&e.hasAttribute(ew));n||((n=document.createElement("style")).setAttribute(ew,ew),e.appendChild(n)),n.textContent=":host{display:inline-block;vertical-align:"+(t?"-0.125em":"0")+"}span,svg{display:block}"+e8}function eE(e,t){let n=-1===e.indexOf("xlink:")?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(let i in t)n+=" "+i+'="'+t[i]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}let eI={"background-color":"currentColor"},eS={"background-color":"transparent"},ej={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},eF={"-webkit-mask":eI,mask:eI,background:eS};for(let e0 in eF){let e7=eF[e0];for(let eP in ej)e7[e0+"-"+eP]=ej[eP]}function eM(e){return e?e+(e.match(/^[-0-9.]+$/)?"px":""):"inherit"}function eR(e,t){let i=t.icon.data,r=t.customisations,o=em(i,r);r.preserveAspectRatio&&(o.attributes.preserveAspectRatio=r.preserveAspectRatio);let l=t.renderedMode,s;s="svg"===l?function(e){let t=document.createElement("span"),n=e.attributes,i="";return n.width||(i="width: inherit;"),n.height||(i+="height: inherit;"),i&&(n.style=i),t.innerHTML=eE(e.body,n),t.firstChild}(o):function(e,t,n){var i,r;let o=document.createElement("span"),l=e.body;-1!==l.indexOf("<a")&&(l+="<!-- "+Date.now()+" -->");let s=e.attributes,a='url("data:image/svg+xml,'+(r=i=eE(l,{...s,width:t.width+"",height:t.height+""})).replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")+'")',c=o.style,u={"--svg":a,width:eM(s.width),height:eM(s.height),...n?eI:eS};for(let f in u)c.setProperty(f,u[f]);return o}(o,{...n,...i},"mask"===l);let a=Array.from(e.childNodes).find(e=>{let t=e.tagName&&e.tagName.toUpperCase();return"SPAN"===t||"SVG"===t});a?"SPAN"===s.tagName&&a.tagName===s.tagName?a.setAttribute("style",s.getAttribute("style")):e.replaceChild(s,a):e.appendChild(s)}function e2(e,t,n){return{rendered:!1,inline:t,icon:e,lastRender:n&&(n.rendered?n:n.lastRender)}}!function(e="iconify-icon"){let t,n;try{t=window.customElements,n=window.HTMLElement}catch(i){return}if(!t||!n)return;let r=t.get(e);if(r)return r;let o=["icon","mode","inline","width","height","rotate","flip"],l=class extends n{_shadowRoot;_state;_checkQueued=!1;constructor(){super();let e=this._shadowRoot=this.attachShadow({mode:"open"}),t=ed(this);eA(e,t),this._state=e2({value:""},t),this._queueCheck()}static get observedAttributes(){return o.slice(0)}attributeChangedCallback(e){if("inline"===e){let t=ed(this),n=this._state;t!==n.inline&&(n.inline=t,eA(this._shadowRoot,t))}else this._queueCheck()}get icon(){let e=this.getAttribute("icon");if(e&&"{"===e.slice(0,1))try{return JSON.parse(e)}catch(t){}return e}set icon(e){"object"==typeof e&&(e=JSON.stringify(e)),this.setAttribute("icon",e)}get inline(){return ed(this)}set inline(e){e?this.setAttribute("inline","true"):this.removeAttribute("inline")}restartAnimation(){let e=this._state;if(e.rendered){let t=this._shadowRoot;if("svg"===e.renderedMode)try{return void t.lastChild.setCurrentTime(0)}catch(n){}eR(t,e)}}get status(){let e=this._state;return e.rendered?"rendered":null===e.icon.data?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;let e=this._state,t=this.getAttribute("icon");if(t!==e.icon.value)return void this._iconChanged(t);if(!e.rendered)return;let n=this.getAttribute("mode"),i=a(this);(e.attrMode!==n||function(e,t){for(let n in s)if(e[n]!==t[n])return!0;return!1}(e.customisations,i))&&this._renderIcon(e.icon,i,n)}_iconChanged(e){let t=function e(t,n){let i="string"==typeof t?u(t,!0,!0):null;if(!i){let r=function(e){try{let t="string"==typeof e?JSON.parse(e):e;if("string"==typeof t.body)return{...t}}catch(n){}}(t);return{value:t,data:r}}let o=w(i);if(void 0!==o||!i.prefix)return{value:t,name:i,data:o};let l=eu([i],()=>n(t,i,w(i)));return{value:t,name:i,loading:l}}(e,(e,t,n)=>{let i=this._state;if(i.rendered||this.getAttribute("icon")!==e)return;let r={value:e,name:t,data:n};r.data?this._gotIconData(r):i.icon=r});t.data?this._gotIconData(t):this._state=e2(t,this._state.inline,this._state)}_gotIconData(e){this._checkQueued=!1,this._renderIcon(e,a(this),this.getAttribute("mode"))}_renderIcon(e,t,n){let i=function(e,t){switch(t){case"svg":case"bg":case"mask":return t}return"style"!==t&&(eh||-1===e.indexOf("<a"))?"svg":-1===e.indexOf("currentColor")?"bg":"mask"}(e.data.body,n),r=this._state.inline;eR(this._shadowRoot,this._state={rendered:!0,icon:e,inline:r,customisations:t,attrMode:n,renderedMode:i})}};o.forEach(e=>{e in l.prototype||Object.defineProperty(l.prototype,e,{get:function(){return this.getAttribute(e)},set:function(t){null!==t?this.setAttribute(e,t):this.removeAttribute(e)}})});let c=function(){var e;let t;e=e_,F[""]=e,k(!0);try{t=window}catch(n){}if(t){if(ea(),void 0!==t.IconifyPreload){let i=t.IconifyPreload,r="Invalid IconifyPreload syntax.";"object"==typeof i&&null!==i&&(i instanceof Array?i:[i]).forEach(e=>{try{("object"!=typeof e||null===e||e instanceof Array||"object"!=typeof e.icons||"string"!=typeof e.prefix||!A(e))&&console.error(r)}catch(t){console.error(r)}})}if(void 0!==t.IconifyProviders){let o=t.IconifyProviders;if("object"==typeof o&&null!==o)for(let l in o){let s="IconifyProviders["+l+"] is invalid.";try{let a=o[l];if("object"!=typeof a||!a||void 0===a.resources)continue;O(l,a)||console.error(s)}catch(c){console.error(s)}}}}return{enableCache:e=>ek(e,!0),disableCache:e=>ek(e,!1),iconExists:E,getIcon:I,listIcons:x,addIcon:C,addCollection:A,calculateSize:ey,buildIcon:em,loadIcons:eu,loadIcon:ef,addAPIProvider:O,appendCustomStyle:eC,_api:{getAPIConfig:U,setAPIModule:P,sendAPIQuery:G,setFetch:eb,getFetch:ex,listAPIProviders:D}}}();for(let f in c)l[f]=l.prototype[f]=c[f];t.define(e,l)}()}();