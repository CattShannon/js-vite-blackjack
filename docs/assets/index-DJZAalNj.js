(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))e(u);new MutationObserver(u=>{for(const i of u)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&e(f)}).observe(document,{childList:!0,subtree:!0});function t(u){const i={};return u.integrity&&(i.integrity=u.integrity),u.referrerPolicy&&(i.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?i.credentials="include":u.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(u){if(u.ep)return;u.ep=!0;const i=t(u);fetch(u.href,i)}})();const $n=n=>{const r=document.createElement("img");return r.src=`assets/cartas/${n}.png`,r.classList.add("carta"),r};var Cn="1.13.7",Mn=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global||Function("return this")()||{},Y=Array.prototype,an=Object.prototype,In=typeof Symbol<"u"?Symbol.prototype:null,Jr=Y.push,C=Y.slice,R=an.toString,Ur=an.hasOwnProperty,zn=typeof ArrayBuffer<"u",Wr=typeof DataView<"u",Gr=Array.isArray,Pn=Object.keys,Tn=Object.create,Sn=zn&&ArrayBuffer.isView,Xr=isNaN,Qr=isFinite,Hn=!{toString:null}.propertyIsEnumerable("toString"),Bn=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],Yr=Math.pow(2,53)-1;function d(n,r){return r=r==null?n.length-1:+r,function(){for(var t=Math.max(arguments.length-r,0),e=Array(t),u=0;u<t;u++)e[u]=arguments[u+r];switch(r){case 0:return n.call(this,e);case 1:return n.call(this,arguments[0],e);case 2:return n.call(this,arguments[0],arguments[1],e)}var i=Array(r+1);for(u=0;u<r;u++)i[u]=arguments[u];return i[r]=e,n.apply(this,i)}}function I(n){var r=typeof n;return r==="function"||r==="object"&&!!n}function Zr(n){return n===null}function Jn(n){return n===void 0}function Un(n){return n===!0||n===!1||R.call(n)==="[object Boolean]"}function Kr(n){return!!(n&&n.nodeType===1)}function p(n){var r="[object "+n+"]";return function(t){return R.call(t)===r}}const ln=p("String"),Wn=p("Number"),xr=p("Date"),kr=p("RegExp"),br=p("Error"),Gn=p("Symbol"),Xn=p("ArrayBuffer");var Qn=p("Function"),jr=Mn.document&&Mn.document.childNodes;typeof/./!="function"&&typeof Int8Array!="object"&&typeof jr!="function"&&(Qn=function(n){return typeof n=="function"||!1});const g=Qn,Yn=p("Object");var Zn=Wr&&(!/\[native code\]/.test(String(DataView))||Yn(new DataView(new ArrayBuffer(8)))),on=typeof Map<"u"&&Yn(new Map),nt=p("DataView");function rt(n){return n!=null&&g(n.getInt8)&&Xn(n.buffer)}const W=Zn?rt:nt,P=Gr||p("Array");function E(n,r){return n!=null&&Ur.call(n,r)}var b=p("Arguments");(function(){b(arguments)||(b=function(n){return E(n,"callee")})})();const cn=b;function tt(n){return!Gn(n)&&Qr(n)&&!isNaN(parseFloat(n))}function Kn(n){return Wn(n)&&Xr(n)}function xn(n){return function(){return n}}function kn(n){return function(r){var t=n(r);return typeof t=="number"&&t>=0&&t<=Yr}}function bn(n){return function(r){return r==null?void 0:r[n]}}const G=bn("byteLength"),et=kn(G);var ut=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;function it(n){return Sn?Sn(n)&&!W(n):et(n)&&ut.test(R.call(n))}const jn=zn?it:xn(!1),m=bn("length");function ft(n){for(var r={},t=n.length,e=0;e<t;++e)r[n[e]]=!0;return{contains:function(u){return r[u]===!0},push:function(u){return r[u]=!0,n.push(u)}}}function nr(n,r){r=ft(r);var t=Bn.length,e=n.constructor,u=g(e)&&e.prototype||an,i="constructor";for(E(n,i)&&!r.contains(i)&&r.push(i);t--;)i=Bn[t],i in n&&n[i]!==u[i]&&!r.contains(i)&&r.push(i)}function v(n){if(!I(n))return[];if(Pn)return Pn(n);var r=[];for(var t in n)E(n,t)&&r.push(t);return Hn&&nr(n,r),r}function at(n){if(n==null)return!0;var r=m(n);return typeof r=="number"&&(P(n)||ln(n)||cn(n))?r===0:m(v(n))===0}function rr(n,r){var t=v(r),e=t.length;if(n==null)return!e;for(var u=Object(n),i=0;i<e;i++){var f=t[i];if(r[f]!==u[f]||!(f in u))return!1}return!0}function c(n){if(n instanceof c)return n;if(!(this instanceof c))return new c(n);this._wrapped=n}c.VERSION=Cn;c.prototype.value=function(){return this._wrapped};c.prototype.valueOf=c.prototype.toJSON=c.prototype.value;c.prototype.toString=function(){return String(this._wrapped)};function Ln(n){return new Uint8Array(n.buffer||n,n.byteOffset||0,G(n))}var Dn="[object DataView]";function j(n,r,t,e){if(n===r)return n!==0||1/n===1/r;if(n==null||r==null)return!1;if(n!==n)return r!==r;var u=typeof n;return u!=="function"&&u!=="object"&&typeof r!="object"?!1:tr(n,r,t,e)}function tr(n,r,t,e){n instanceof c&&(n=n._wrapped),r instanceof c&&(r=r._wrapped);var u=R.call(n);if(u!==R.call(r))return!1;if(Zn&&u=="[object Object]"&&W(n)){if(!W(r))return!1;u=Dn}switch(u){case"[object RegExp]":case"[object String]":return""+n==""+r;case"[object Number]":return+n!=+n?+r!=+r:+n==0?1/+n===1/r:+n==+r;case"[object Date]":case"[object Boolean]":return+n==+r;case"[object Symbol]":return In.valueOf.call(n)===In.valueOf.call(r);case"[object ArrayBuffer]":case Dn:return tr(Ln(n),Ln(r),t,e)}var i=u==="[object Array]";if(!i&&jn(n)){var f=G(n);if(f!==G(r))return!1;if(n.buffer===r.buffer&&n.byteOffset===r.byteOffset)return!0;i=!0}if(!i){if(typeof n!="object"||typeof r!="object")return!1;var a=n.constructor,o=r.constructor;if(a!==o&&!(g(a)&&a instanceof a&&g(o)&&o instanceof o)&&"constructor"in n&&"constructor"in r)return!1}t=t||[],e=e||[];for(var l=t.length;l--;)if(t[l]===n)return e[l]===r;if(t.push(n),e.push(r),i){if(l=n.length,l!==r.length)return!1;for(;l--;)if(!j(n[l],r[l],t,e))return!1}else{var s=v(n),h;if(l=s.length,v(r).length!==l)return!1;for(;l--;)if(h=s[l],!(E(r,h)&&j(n[h],r[h],t,e)))return!1}return t.pop(),e.pop(),!0}function lt(n,r){return j(n,r)}function z(n){if(!I(n))return[];var r=[];for(var t in n)r.push(t);return Hn&&nr(n,r),r}function sn(n){var r=m(n);return function(t){if(t==null)return!1;var e=z(t);if(m(e))return!1;for(var u=0;u<r;u++)if(!g(t[n[u]]))return!1;return n!==ir||!g(t[vn])}}var vn="forEach",er="has",pn=["clear","delete"],ur=["get",er,"set"],ot=pn.concat(vn,ur),ir=pn.concat(ur),ct=["add"].concat(pn,vn,er);const st=on?sn(ot):p("Map"),vt=on?sn(ir):p("WeakMap"),pt=on?sn(ct):p("Set"),ht=p("WeakSet");function L(n){for(var r=v(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=n[r[u]];return e}function gt(n){for(var r=v(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=[r[u],n[r[u]]];return e}function fr(n){for(var r={},t=v(n),e=0,u=t.length;e<u;e++)r[n[t[e]]]=t[e];return r}function nn(n){var r=[];for(var t in n)g(n[t])&&r.push(t);return r.sort()}function hn(n,r){return function(t){var e=arguments.length;if(r&&(t=Object(t)),e<2||t==null)return t;for(var u=1;u<e;u++)for(var i=arguments[u],f=n(i),a=f.length,o=0;o<a;o++){var l=f[o];(!r||t[l]===void 0)&&(t[l]=i[l])}return t}}const ar=hn(z),X=hn(v),lr=hn(z,!0);function dt(){return function(){}}function or(n){if(!I(n))return{};if(Tn)return Tn(n);var r=dt();r.prototype=n;var t=new r;return r.prototype=null,t}function mt(n,r){var t=or(n);return r&&X(t,r),t}function yt(n){return I(n)?P(n)?n.slice():ar({},n):n}function wt(n,r){return r(n),n}function cr(n){return P(n)?n:[n]}c.toPath=cr;function H(n){return c.toPath(n)}function gn(n,r){for(var t=r.length,e=0;e<t;e++){if(n==null)return;n=n[r[e]]}return t?n:void 0}function sr(n,r,t){var e=gn(n,H(r));return Jn(e)?t:e}function _t(n,r){r=H(r);for(var t=r.length,e=0;e<t;e++){var u=r[e];if(!E(n,u))return!1;n=n[u]}return!!t}function dn(n){return n}function q(n){return n=X({},n),function(r){return rr(r,n)}}function mn(n){return n=H(n),function(r){return gn(r,n)}}function J(n,r,t){if(r===void 0)return n;switch(t??3){case 1:return function(e){return n.call(r,e)};case 3:return function(e,u,i){return n.call(r,e,u,i)};case 4:return function(e,u,i,f){return n.call(r,e,u,i,f)}}return function(){return n.apply(r,arguments)}}function vr(n,r,t){return n==null?dn:g(n)?J(n,r,t):I(n)&&!P(n)?q(n):mn(n)}function yn(n,r){return vr(n,r,1/0)}c.iteratee=yn;function y(n,r,t){return c.iteratee!==yn?c.iteratee(n,r):vr(n,r,t)}function At(n,r,t){r=y(r,t);for(var e=v(n),u=e.length,i={},f=0;f<u;f++){var a=e[f];i[a]=r(n[a],a,n)}return i}function pr(){}function Ot(n){return n==null?pr:function(r){return sr(n,r)}}function Et(n,r,t){var e=Array(Math.max(0,n));r=J(r,t,1);for(var u=0;u<n;u++)e[u]=r(u);return e}function rn(n,r){return r==null&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))}const F=Date.now||function(){return new Date().getTime()};function hr(n){var r=function(i){return n[i]},t="(?:"+v(n).join("|")+")",e=RegExp(t),u=RegExp(t,"g");return function(i){return i=i==null?"":""+i,e.test(i)?i.replace(u,r):i}}const gr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},Nt=hr(gr),Mt=fr(gr),It=hr(Mt),Pt=c.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,Tt={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},St=/\\|'|\r|\n|\u2028|\u2029/g;function Bt(n){return"\\"+Tt[n]}var Lt=/^\s*(\w|\$)+\s*$/;function Dt(n,r,t){!r&&t&&(r=t),r=lr({},r,c.templateSettings);var e=RegExp([(r.escape||K).source,(r.interpolate||K).source,(r.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(l,s,h,En,Nn){return i+=n.slice(u,Nn).replace(St,Bt),u=Nn+l.length,s?i+=`'+
((__t=(`+s+`))==null?'':_.escape(__t))+
'`:h?i+=`'+
((__t=(`+h+`))==null?'':__t)+
'`:En&&(i+=`';
`+En+`
__p+='`),l}),i+=`';
`;var f=r.variable;if(f){if(!Lt.test(f))throw new Error("variable is not a bare identifier: "+f)}else i=`with(obj||{}){
`+i+`}
`,f="obj";i=`var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
`+i+`return __p;
`;var a;try{a=new Function(f,"_",i)}catch(l){throw l.source=i,l}var o=function(l){return a.call(this,l,c)};return o.source="function("+f+`){
`+i+"}",o}function Vt(n,r,t){r=H(r);var e=r.length;if(!e)return g(t)?t.call(n):t;for(var u=0;u<e;u++){var i=n==null?void 0:n[r[u]];i===void 0&&(i=t,u=e),n=g(i)?i.call(n):i}return n}var Rt=0;function qt(n){var r=++Rt+"";return n?n+r:r}function Ft(n){var r=c(n);return r._chain=!0,r}function dr(n,r,t,e,u){if(!(e instanceof r))return n.apply(t,u);var i=or(n.prototype),f=n.apply(i,u);return I(f)?f:i}var D=d(function(n,r){var t=D.placeholder,e=function(){for(var u=0,i=r.length,f=Array(i),a=0;a<i;a++)f[a]=r[a]===t?arguments[u++]:r[a];for(;u<arguments.length;)f.push(arguments[u++]);return dr(n,e,this,this,f)};return e});D.placeholder=c;const mr=d(function(n,r,t){if(!g(n))throw new TypeError("Bind must be called on a function");var e=d(function(u){return dr(n,e,r,this,t.concat(u))});return e}),w=kn(m);function T(n,r,t,e){if(e=e||[],!r&&r!==0)r=1/0;else if(r<=0)return e.concat(n);for(var u=e.length,i=0,f=m(n);i<f;i++){var a=n[i];if(w(a)&&(P(a)||cn(a)))if(r>1)T(a,r-1,t,e),u=e.length;else for(var o=0,l=a.length;o<l;)e[u++]=a[o++];else t||(e[u++]=a)}return e}const $t=d(function(n,r){r=T(r,!1,!1);var t=r.length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var e=r[t];n[e]=mr(n[e],n)}return n});function Ct(n,r){var t=function(e){var u=t.cache,i=""+(r?r.apply(this,arguments):e);return E(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return t.cache={},t}const yr=d(function(n,r,t){return setTimeout(function(){return n.apply(null,t)},r)}),zt=D(yr,c,1);function Ht(n,r,t){var e,u,i,f,a=0;t||(t={});var o=function(){a=t.leading===!1?0:F(),e=null,f=n.apply(u,i),e||(u=i=null)},l=function(){var s=F();!a&&t.leading===!1&&(a=s);var h=r-(s-a);return u=this,i=arguments,h<=0||h>r?(e&&(clearTimeout(e),e=null),a=s,f=n.apply(u,i),e||(u=i=null)):!e&&t.trailing!==!1&&(e=setTimeout(o,h)),f};return l.cancel=function(){clearTimeout(e),a=0,e=u=i=null},l}function Jt(n,r,t){var e,u,i,f,a,o=function(){var s=F()-u;r>s?e=setTimeout(o,r-s):(e=null,t||(f=n.apply(a,i)),e||(i=a=null))},l=d(function(s){return a=this,i=s,u=F(),e||(e=setTimeout(o,r),t&&(f=n.apply(a,i))),f});return l.cancel=function(){clearTimeout(e),e=i=a=null},l}function Ut(n,r){return D(r,n)}function wn(n){return function(){return!n.apply(this,arguments)}}function Wt(){var n=arguments,r=n.length-1;return function(){for(var t=r,e=n[r].apply(this,arguments);t--;)e=n[t].call(this,e);return e}}function Gt(n,r){return function(){if(--n<1)return r.apply(this,arguments)}}function wr(n,r){var t;return function(){return--n>0&&(t=r.apply(this,arguments)),n<=1&&(r=null),t}}const Xt=D(wr,2);function _r(n,r,t){r=y(r,t);for(var e=v(n),u,i=0,f=e.length;i<f;i++)if(u=e[i],r(n[u],u,n))return u}function Ar(n){return function(r,t,e){t=y(t,e);for(var u=m(r),i=n>0?0:u-1;i>=0&&i<u;i+=n)if(t(r[i],i,r))return i;return-1}}const _n=Ar(1),Or=Ar(-1);function Er(n,r,t,e){t=y(t,e,1);for(var u=t(r),i=0,f=m(n);i<f;){var a=Math.floor((i+f)/2);t(n[a])<u?i=a+1:f=a}return i}function Nr(n,r,t){return function(e,u,i){var f=0,a=m(e);if(typeof i=="number")n>0?f=i>=0?i:Math.max(i+a,f):a=i>=0?Math.min(i+1,a):i+a+1;else if(t&&i&&a)return i=t(e,u),e[i]===u?i:-1;if(u!==u)return i=r(C.call(e,f,a),Kn),i>=0?i+f:-1;for(i=n>0?f:a-1;i>=0&&i<a;i+=n)if(e[i]===u)return i;return-1}}const Mr=Nr(1,_n,Er),Qt=Nr(-1,Or);function tn(n,r,t){var e=w(n)?_n:_r,u=e(n,r,t);if(u!==void 0&&u!==-1)return n[u]}function Yt(n,r){return tn(n,q(r))}function O(n,r,t){r=J(r,t);var e,u;if(w(n))for(e=0,u=n.length;e<u;e++)r(n[e],e,n);else{var i=v(n);for(e=0,u=i.length;e<u;e++)r(n[i[e]],i[e],n)}return n}function M(n,r,t){r=y(r,t);for(var e=!w(n)&&v(n),u=(e||n).length,i=Array(u),f=0;f<u;f++){var a=e?e[f]:f;i[f]=r(n[a],a,n)}return i}function Ir(n){var r=function(t,e,u,i){var f=!w(t)&&v(t),a=(f||t).length,o=n>0?0:a-1;for(i||(u=t[f?f[o]:o],o+=n);o>=0&&o<a;o+=n){var l=f?f[o]:o;u=e(u,t[l],l,t)}return u};return function(t,e,u,i){var f=arguments.length>=3;return r(t,J(e,i,4),u,f)}}const x=Ir(1),Vn=Ir(-1);function B(n,r,t){var e=[];return r=y(r,t),O(n,function(u,i,f){r(u,i,f)&&e.push(u)}),e}function Zt(n,r,t){return B(n,wn(y(r)),t)}function Rn(n,r,t){r=y(r,t);for(var e=!w(n)&&v(n),u=(e||n).length,i=0;i<u;i++){var f=e?e[i]:i;if(!r(n[f],f,n))return!1}return!0}function qn(n,r,t){r=y(r,t);for(var e=!w(n)&&v(n),u=(e||n).length,i=0;i<u;i++){var f=e?e[i]:i;if(r(n[f],f,n))return!0}return!1}function A(n,r,t,e){return w(n)||(n=L(n)),(typeof t!="number"||e)&&(t=0),Mr(n,r,t)>=0}const Kt=d(function(n,r,t){var e,u;return g(r)?u=r:(r=H(r),e=r.slice(0,-1),r=r[r.length-1]),M(n,function(i){var f=u;if(!f){if(e&&e.length&&(i=gn(i,e)),i==null)return;f=i[r]}return f==null?f:f.apply(i,t)})});function An(n,r){return M(n,mn(r))}function xt(n,r){return B(n,q(r))}function Pr(n,r,t){var e=-1/0,u=-1/0,i,f;if(r==null||typeof r=="number"&&typeof n[0]!="object"&&n!=null){n=w(n)?n:L(n);for(var a=0,o=n.length;a<o;a++)i=n[a],i!=null&&i>e&&(e=i)}else r=y(r,t),O(n,function(l,s,h){f=r(l,s,h),(f>u||f===-1/0&&e===-1/0)&&(e=l,u=f)});return e}function kt(n,r,t){var e=1/0,u=1/0,i,f;if(r==null||typeof r=="number"&&typeof n[0]!="object"&&n!=null){n=w(n)?n:L(n);for(var a=0,o=n.length;a<o;a++)i=n[a],i!=null&&i<e&&(e=i)}else r=y(r,t),O(n,function(l,s,h){f=r(l,s,h),(f<u||f===1/0&&e===1/0)&&(e=l,u=f)});return e}var bt=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function Tr(n){return n?P(n)?C.call(n):ln(n)?n.match(bt):w(n)?M(n,dn):L(n):[]}function Sr(n,r,t){if(r==null||t)return w(n)||(n=L(n)),n[rn(n.length-1)];var e=Tr(n),u=m(e);r=Math.max(Math.min(r,u),0);for(var i=u-1,f=0;f<r;f++){var a=rn(f,i),o=e[f];e[f]=e[a],e[a]=o}return e.slice(0,r)}function Br(n){return Sr(n,1/0)}function jt(n,r,t){var e=0;return r=y(r,t),An(M(n,function(u,i,f){return{value:u,index:e++,criteria:r(u,i,f)}}).sort(function(u,i){var f=u.criteria,a=i.criteria;if(f!==a){if(f>a||f===void 0)return 1;if(f<a||a===void 0)return-1}return u.index-i.index}),"value")}function Z(n,r){return function(t,e,u){var i=r?[[],[]]:{};return e=y(e,u),O(t,function(f,a){var o=e(f,a,t);n(i,f,o)}),i}}const ne=Z(function(n,r,t){E(n,t)?n[t].push(r):n[t]=[r]}),re=Z(function(n,r,t){n[t]=r}),te=Z(function(n,r,t){E(n,t)?n[t]++:n[t]=1}),ee=Z(function(n,r,t){n[t?0:1].push(r)},!0);function ue(n){return n==null?0:w(n)?n.length:v(n).length}function ie(n,r,t){return r in t}const Lr=d(function(n,r){var t={},e=r[0];if(n==null)return t;g(e)?(r.length>1&&(e=J(e,r[1])),r=z(n)):(e=ie,r=T(r,!1,!1),n=Object(n));for(var u=0,i=r.length;u<i;u++){var f=r[u],a=n[f];e(a,f,n)&&(t[f]=a)}return t}),fe=d(function(n,r){var t=r[0],e;return g(t)?(t=wn(t),r.length>1&&(e=r[1])):(r=M(T(r,!1,!1),String),t=function(u,i){return!A(r,i)}),Lr(n,t,e)});function Dr(n,r,t){return C.call(n,0,Math.max(0,n.length-(r==null||t?1:r)))}function k(n,r,t){return n==null||n.length<1?r==null||t?void 0:[]:r==null||t?n[0]:Dr(n,n.length-r)}function U(n,r,t){return C.call(n,r==null||t?1:r)}function ae(n,r,t){return n==null||n.length<1?r==null||t?void 0:[]:r==null||t?n[n.length-1]:U(n,Math.max(0,n.length-r))}function le(n){return B(n,Boolean)}function oe(n,r){return T(n,r,!1)}const Vr=d(function(n,r){return r=T(r,!0,!0),B(n,function(t){return!A(r,t)})}),ce=d(function(n,r){return Vr(n,r)});function en(n,r,t,e){Un(r)||(e=t,t=r,r=!1),t!=null&&(t=y(t,e));for(var u=[],i=[],f=0,a=m(n);f<a;f++){var o=n[f],l=t?t(o,f,n):o;r&&!t?((!f||i!==l)&&u.push(o),i=l):t?A(i,l)||(i.push(l),u.push(o)):A(u,o)||u.push(o)}return u}const se=d(function(n){return en(T(n,!0,!0))});function ve(n){for(var r=[],t=arguments.length,e=0,u=m(n);e<u;e++){var i=n[e];if(!A(r,i)){var f;for(f=1;f<t&&A(arguments[f],i);f++);f===t&&r.push(i)}}return r}function un(n){for(var r=n&&Pr(n,m).length||0,t=Array(r),e=0;e<r;e++)t[e]=An(n,e);return t}const pe=d(un);function he(n,r){for(var t={},e=0,u=m(n);e<u;e++)r?t[n[e]]=r[e]:t[n[e][0]]=n[e][1];return t}function ge(n,r,t){r==null&&(r=n||0,n=0),t||(t=r<n?-1:1);for(var e=Math.max(Math.ceil((r-n)/t),0),u=Array(e),i=0;i<e;i++,n+=t)u[i]=n;return u}function de(n,r){if(r==null||r<1)return[];for(var t=[],e=0,u=n.length;e<u;)t.push(C.call(n,e,e+=r));return t}function On(n,r){return n._chain?c(r).chain():r}function Rr(n){return O(nn(n),function(r){var t=c[r]=n[r];c.prototype[r]=function(){var e=[this._wrapped];return Jr.apply(e,arguments),On(this,t.apply(c,e))}}),c}O(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var r=Y[n];c.prototype[n]=function(){var t=this._wrapped;return t!=null&&(r.apply(t,arguments),(n==="shift"||n==="splice")&&t.length===0&&delete t[0]),On(this,t)}});O(["concat","join","slice"],function(n){var r=Y[n];c.prototype[n]=function(){var t=this._wrapped;return t!=null&&(t=r.apply(t,arguments)),On(this,t)}});const me=Object.freeze(Object.defineProperty({__proto__:null,VERSION:Cn,after:Gt,all:Rn,allKeys:z,any:qn,assign:X,before:wr,bind:mr,bindAll:$t,chain:Ft,chunk:de,clone:yt,collect:M,compact:le,compose:Wt,constant:xn,contains:A,countBy:te,create:mt,debounce:Jt,default:c,defaults:lr,defer:zt,delay:yr,detect:tn,difference:Vr,drop:U,each:O,escape:Nt,every:Rn,extend:ar,extendOwn:X,filter:B,find:tn,findIndex:_n,findKey:_r,findLastIndex:Or,findWhere:Yt,first:k,flatten:oe,foldl:x,foldr:Vn,forEach:O,functions:nn,get:sr,groupBy:ne,has:_t,head:k,identity:dn,include:A,includes:A,indexBy:re,indexOf:Mr,initial:Dr,inject:x,intersection:ve,invert:fr,invoke:Kt,isArguments:cn,isArray:P,isArrayBuffer:Xn,isBoolean:Un,isDataView:W,isDate:xr,isElement:Kr,isEmpty:at,isEqual:lt,isError:br,isFinite:tt,isFunction:g,isMap:st,isMatch:rr,isNaN:Kn,isNull:Zr,isNumber:Wn,isObject:I,isRegExp:kr,isSet:pt,isString:ln,isSymbol:Gn,isTypedArray:jn,isUndefined:Jn,isWeakMap:vt,isWeakSet:ht,iteratee:yn,keys:v,last:ae,lastIndexOf:Qt,map:M,mapObject:At,matcher:q,matches:q,max:Pr,memoize:Ct,methods:nn,min:kt,mixin:Rr,negate:wn,noop:pr,now:F,object:he,omit:fe,once:Xt,pairs:gt,partial:D,partition:ee,pick:Lr,pluck:An,property:mn,propertyOf:Ot,random:rn,range:ge,reduce:x,reduceRight:Vn,reject:Zt,rest:U,restArguments:d,result:Vt,sample:Sr,select:B,shuffle:Br,size:ue,some:qn,sortBy:jt,sortedIndex:Er,tail:U,take:k,tap:wt,template:Dt,templateSettings:Pt,throttle:Ht,times:Et,toArray:Tr,toPath:cr,transpose:un,unescape:It,union:se,uniq:en,unique:en,uniqueId:qt,unzip:un,values:L,where:xt,without:ce,wrap:Ut,zip:pe},Symbol.toStringTag,{value:"Module"}));var Fn=Rr(me);Fn._=Fn;const ye="nombreDeck",qr=(n,r)=>{if(!n||n.length===0)throw new Error("tiposDeCarta es obligatorio como un arreglo de string");if(!r||r.length===0)throw new Error("tiposEspeciales es obligatorio como un arreglo de string");let t=[];for(let e=2;e<=10;e++)for(let u of n)t.push(e+u);for(let e of n)for(let u of r)t.push(u+e);return t=Br(t),t},Fr=n=>{if(n.length===0)throw"No hay cartas en el deck";return n.pop()},fn=(n,r,t,e)=>{let u=0;do{const i=Fr(e);if(u=u+$r(i),r.innerText=u,t.append($n(i)),n>21)break}while(u<n&&n<=21);setTimeout(()=>{u===n?alert("Nadie gana :("):n>21?alert("Computadora gana"):u>21?alert("Jugador Gana"):alert("Computadora Gana")},100)},$r=n=>{const r=n.substring(0,n.length-1);return isNaN(r)?r==="A"?11:10:r*1};let N=[];const Cr=["C","D","H","S"],zr=["A","J","Q","K"];let _=0;const V=document.querySelector("#btnPedir"),$=document.querySelector("#btnDetener"),we=document.querySelector("#btnNuevo"),Hr=document.querySelector("#jugador-cartas"),Q=document.querySelector("#computadora-cartas"),S=document.querySelectorAll("small");N=qr(Cr,zr);console.log("Individual export nombre: "+ye);V.addEventListener("click",()=>{const n=Fr(N);_=_+$r(n),S[0].innerText=_,Hr.append($n(n)),_>21?(console.warn("Lo siento mucho, perdiste"),V.disabled=!0,$.disabled=!0,fn(_,S[1],Q,N)):_===21&&(console.warn("21, genial!"),V.disabled=!0,$.disabled=!0,fn(_,S[1],Q,N))});$.addEventListener("click",()=>{V.disabled=!0,$.disabled=!0,fn(_,S[1],Q,N)});we.addEventListener("click",()=>{console.clear(),N=[],N=qr(Cr,zr),_=0,S[0].innerText=0,S[1].innerText=0,Q.innerHTML="",Hr.innerHTML="",V.disabled=!1,$.disabled=!1});