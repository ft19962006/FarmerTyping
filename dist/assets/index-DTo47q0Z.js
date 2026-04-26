var ld=Object.defineProperty;var ud=(e,t,n)=>t in e?ld(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var pe=(e,t,n)=>ud(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();function Ol(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $l={exports:{}},_o={},Al={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xr=Symbol.for("react.element"),cd=Symbol.for("react.portal"),dd=Symbol.for("react.fragment"),fd=Symbol.for("react.strict_mode"),pd=Symbol.for("react.profiler"),md=Symbol.for("react.provider"),hd=Symbol.for("react.context"),gd=Symbol.for("react.forward_ref"),yd=Symbol.for("react.suspense"),vd=Symbol.for("react.memo"),xd=Symbol.for("react.lazy"),hi=Symbol.iterator;function wd(e){return e===null||typeof e!="object"?null:(e=hi&&e[hi]||e["@@iterator"],typeof e=="function"?e:null)}var Wl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bl=Object.assign,Ul={};function Tn(e,t,n){this.props=e,this.context=t,this.refs=Ul,this.updater=n||Wl}Tn.prototype.isReactComponent={};Tn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Tn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Hl(){}Hl.prototype=Tn.prototype;function xs(e,t,n){this.props=e,this.context=t,this.refs=Ul,this.updater=n||Wl}var ws=xs.prototype=new Hl;ws.constructor=xs;Bl(ws,Tn.prototype);ws.isPureReactComponent=!0;var gi=Array.isArray,Vl=Object.prototype.hasOwnProperty,ks={current:null},Gl={key:!0,ref:!0,__self:!0,__source:!0};function Xl(e,t,n){var r,o={},a=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(a=""+t.key),t)Vl.call(t,r)&&!Gl.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:xr,type:e,key:a,ref:s,props:o,_owner:ks.current}}function kd(e,t){return{$$typeof:xr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ss(e){return typeof e=="object"&&e!==null&&e.$$typeof===xr}function Sd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var yi=/\/+/g;function Yo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Sd(""+e.key):t.toString(36)}function Yr(e,t,n,r,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case xr:case cd:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+Yo(s,0):r,gi(o)?(n="",e!=null&&(n=e.replace(yi,"$&/")+"/"),Yr(o,t,n,"",function(c){return c})):o!=null&&(Ss(o)&&(o=kd(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(yi,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",gi(e))for(var l=0;l<e.length;l++){a=e[l];var u=r+Yo(a,l);s+=Yr(a,t,n,u,o)}else if(u=wd(e),typeof u=="function")for(e=u.call(e),l=0;!(a=e.next()).done;)a=a.value,u=r+Yo(a,l++),s+=Yr(a,t,n,u,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Tr(e,t,n){if(e==null)return e;var r=[],o=0;return Yr(e,r,"","",function(a){return t.call(n,a,o++)}),r}function bd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ke={current:null},Qr={transition:null},jd={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:Qr,ReactCurrentOwner:ks};function Yl(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:Tr,forEach:function(e,t,n){Tr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Tr(e,function(){t++}),t},toArray:function(e){return Tr(e,function(t){return t})||[]},only:function(e){if(!Ss(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=Tn;R.Fragment=dd;R.Profiler=pd;R.PureComponent=xs;R.StrictMode=fd;R.Suspense=yd;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jd;R.act=Yl;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Bl({},e.props),o=e.key,a=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,s=ks.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)Vl.call(t,u)&&!Gl.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:xr,type:e.type,key:o,ref:a,props:r,_owner:s}};R.createContext=function(e){return e={$$typeof:hd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:md,_context:e},e.Consumer=e};R.createElement=Xl;R.createFactory=function(e){var t=Xl.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:gd,render:e}};R.isValidElement=Ss;R.lazy=function(e){return{$$typeof:xd,_payload:{_status:-1,_result:e},_init:bd}};R.memo=function(e,t){return{$$typeof:vd,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=Qr.transition;Qr.transition={};try{e()}finally{Qr.transition=t}};R.unstable_act=Yl;R.useCallback=function(e,t){return ke.current.useCallback(e,t)};R.useContext=function(e){return ke.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return ke.current.useDeferredValue(e)};R.useEffect=function(e,t){return ke.current.useEffect(e,t)};R.useId=function(){return ke.current.useId()};R.useImperativeHandle=function(e,t,n){return ke.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return ke.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return ke.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return ke.current.useMemo(e,t)};R.useReducer=function(e,t,n){return ke.current.useReducer(e,t,n)};R.useRef=function(e){return ke.current.useRef(e)};R.useState=function(e){return ke.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return ke.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return ke.current.useTransition()};R.version="18.3.1";Al.exports=R;var S=Al.exports;const Ql=Ol(S);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nd=S,Cd=Symbol.for("react.element"),Ed=Symbol.for("react.fragment"),Td=Object.prototype.hasOwnProperty,zd=Nd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pd={key:!0,ref:!0,__self:!0,__source:!0};function Kl(e,t,n){var r,o={},a=null,s=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Td.call(t,r)&&!Pd.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Cd,type:e,key:a,ref:s,props:o,_owner:zd.current}}_o.Fragment=Ed;_o.jsx=Kl;_o.jsxs=Kl;$l.exports=_o;var i=$l.exports,ba={},ql={exports:{}},Le={},Zl={exports:{}},Jl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,L){var I=T.length;T.push(L);e:for(;0<I;){var Q=I-1>>>1,O=T[Q];if(0<o(O,L))T[Q]=L,T[I]=O,I=Q;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var L=T[0],I=T.pop();if(I!==L){T[0]=I;e:for(var Q=0,O=T.length,K=O>>>1;Q<K;){var ie=2*(Q+1)-1,U=T[ie],re=ie+1,qt=T[re];if(0>o(U,I))re<O&&0>o(qt,U)?(T[Q]=qt,T[re]=I,Q=re):(T[Q]=U,T[ie]=I,Q=ie);else if(re<O&&0>o(qt,I))T[Q]=qt,T[re]=I,Q=re;else break e}}return L}function o(T,L){var I=T.sortIndex-L.sortIndex;return I!==0?I:T.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var u=[],c=[],p=1,h=null,m=3,k=!1,y=!1,v=!1,j=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(T){for(var L=n(c);L!==null;){if(L.callback===null)r(c);else if(L.startTime<=T)r(c),L.sortIndex=L.expirationTime,t(u,L);else break;L=n(c)}}function w(T){if(v=!1,g(T),!y)if(n(u)!==null)y=!0,F(N);else{var L=n(c);L!==null&&W(w,L.startTime-T)}}function N(T,L){y=!1,v&&(v=!1,f(C),C=-1),k=!0;var I=m;try{for(g(L),h=n(u);h!==null&&(!(h.expirationTime>L)||T&&!A());){var Q=h.callback;if(typeof Q=="function"){h.callback=null,m=h.priorityLevel;var O=Q(h.expirationTime<=L);L=e.unstable_now(),typeof O=="function"?h.callback=O:h===n(u)&&r(u),g(L)}else r(u);h=n(u)}if(h!==null)var K=!0;else{var ie=n(c);ie!==null&&W(w,ie.startTime-L),K=!1}return K}finally{h=null,m=I,k=!1}}var x=!1,b=null,C=-1,M=5,P=-1;function A(){return!(e.unstable_now()-P<M)}function D(){if(b!==null){var T=e.unstable_now();P=T;var L=!0;try{L=b(!0,T)}finally{L?V():(x=!1,b=null)}}else x=!1}var V;if(typeof d=="function")V=function(){d(D)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,z=G.port2;G.port1.onmessage=D,V=function(){z.postMessage(null)}}else V=function(){j(D,0)};function F(T){b=T,x||(x=!0,V())}function W(T,L){C=j(function(){T(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){y||k||(y=!0,F(N))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(T){switch(m){case 1:case 2:case 3:var L=3;break;default:L=m}var I=m;m=L;try{return T()}finally{m=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,L){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var I=m;m=T;try{return L()}finally{m=I}},e.unstable_scheduleCallback=function(T,L,I){var Q=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?Q+I:Q):I=Q,T){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=I+O,T={id:p++,callback:L,priorityLevel:T,startTime:I,expirationTime:O,sortIndex:-1},I>Q?(T.sortIndex=I,t(c,T),n(u)===null&&T===n(c)&&(v?(f(C),C=-1):v=!0,W(w,I-Q))):(T.sortIndex=O,t(u,T),y||k||(y=!0,F(N))),T},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(T){var L=m;return function(){var I=m;m=L;try{return T.apply(this,arguments)}finally{m=I}}}})(Jl);Zl.exports=Jl;var _d=Zl.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Md=S,Me=_d;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var eu=new Set,er={};function Qt(e,t){wn(e,t),wn(e+"Capture",t)}function wn(e,t){for(er[e]=t,e=0;e<t.length;e++)eu.add(t[e])}var ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ja=Object.prototype.hasOwnProperty,Ld=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vi={},xi={};function Id(e){return ja.call(xi,e)?!0:ja.call(vi,e)?!1:Ld.test(e)?xi[e]=!0:(vi[e]=!0,!1)}function Fd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Dd(e,t,n,r){if(t===null||typeof t>"u"||Fd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Se(e,t,n,r,o,a,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=s}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new Se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];fe[t]=new Se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new Se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new Se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new Se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new Se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new Se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new Se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new Se(e,5,!1,e.toLowerCase(),null,!1,!1)});var bs=/[\-:]([a-z])/g;function js(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(bs,js);fe[t]=new Se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(bs,js);fe[t]=new Se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(bs,js);fe[t]=new Se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new Se(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new Se(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ns(e,t,n,r){var o=fe.hasOwnProperty(t)?fe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Dd(t,n,o,r)&&(n=null),r||o===null?Id(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pt=Md.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zr=Symbol.for("react.element"),en=Symbol.for("react.portal"),tn=Symbol.for("react.fragment"),Cs=Symbol.for("react.strict_mode"),Na=Symbol.for("react.profiler"),tu=Symbol.for("react.provider"),nu=Symbol.for("react.context"),Es=Symbol.for("react.forward_ref"),Ca=Symbol.for("react.suspense"),Ea=Symbol.for("react.suspense_list"),Ts=Symbol.for("react.memo"),gt=Symbol.for("react.lazy"),ru=Symbol.for("react.offscreen"),wi=Symbol.iterator;function _n(e){return e===null||typeof e!="object"?null:(e=wi&&e[wi]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,Qo;function $n(e){if(Qo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Qo=t&&t[1]||""}return`
`+Qo+e}var Ko=!1;function qo(e,t){if(!e||Ko)return"";Ko=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),a=r.stack.split(`
`),s=o.length-1,l=a.length-1;1<=s&&0<=l&&o[s]!==a[l];)l--;for(;1<=s&&0<=l;s--,l--)if(o[s]!==a[l]){if(s!==1||l!==1)do if(s--,l--,0>l||o[s]!==a[l]){var u=`
`+o[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=l);break}}}finally{Ko=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?$n(e):""}function Rd(e){switch(e.tag){case 5:return $n(e.type);case 16:return $n("Lazy");case 13:return $n("Suspense");case 19:return $n("SuspenseList");case 0:case 2:case 15:return e=qo(e.type,!1),e;case 11:return e=qo(e.type.render,!1),e;case 1:return e=qo(e.type,!0),e;default:return""}}function Ta(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case tn:return"Fragment";case en:return"Portal";case Na:return"Profiler";case Cs:return"StrictMode";case Ca:return"Suspense";case Ea:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case nu:return(e.displayName||"Context")+".Consumer";case tu:return(e._context.displayName||"Context")+".Provider";case Es:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ts:return t=e.displayName||null,t!==null?t:Ta(e.type)||"Memo";case gt:t=e._payload,e=e._init;try{return Ta(e(t))}catch{}}return null}function Od(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ta(t);case 8:return t===Cs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Pt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ou(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $d(e){var t=ou(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,a.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pr(e){e._valueTracker||(e._valueTracker=$d(e))}function au(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ou(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function so(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function za(e,t){var n=t.checked;return ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ki(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Pt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function su(e,t){t=t.checked,t!=null&&Ns(e,"checked",t,!1)}function Pa(e,t){su(e,t);var n=Pt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?_a(e,t.type,n):t.hasOwnProperty("defaultValue")&&_a(e,t.type,Pt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Si(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function _a(e,t,n){(t!=="number"||so(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var An=Array.isArray;function pn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Pt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ma(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function bi(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(An(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Pt(n)}}function iu(e,t){var n=Pt(t.value),r=Pt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ji(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function lu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function La(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?lu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _r,uu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(_r=_r||document.createElement("div"),_r.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_r.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function tr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Hn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ad=["Webkit","ms","Moz","O"];Object.keys(Hn).forEach(function(e){Ad.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Hn[t]=Hn[e]})});function cu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Hn.hasOwnProperty(e)&&Hn[e]?(""+t).trim():t+"px"}function du(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=cu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Wd=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ia(e,t){if(t){if(Wd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function Fa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Da=null;function zs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ra=null,mn=null,hn=null;function Ni(e){if(e=Sr(e)){if(typeof Ra!="function")throw Error(E(280));var t=e.stateNode;t&&(t=Do(t),Ra(e.stateNode,e.type,t))}}function fu(e){mn?hn?hn.push(e):hn=[e]:mn=e}function pu(){if(mn){var e=mn,t=hn;if(hn=mn=null,Ni(e),t)for(e=0;e<t.length;e++)Ni(t[e])}}function mu(e,t){return e(t)}function hu(){}var Zo=!1;function gu(e,t,n){if(Zo)return e(t,n);Zo=!0;try{return mu(e,t,n)}finally{Zo=!1,(mn!==null||hn!==null)&&(hu(),pu())}}function nr(e,t){var n=e.stateNode;if(n===null)return null;var r=Do(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var Oa=!1;if(ut)try{var Mn={};Object.defineProperty(Mn,"passive",{get:function(){Oa=!0}}),window.addEventListener("test",Mn,Mn),window.removeEventListener("test",Mn,Mn)}catch{Oa=!1}function Bd(e,t,n,r,o,a,s,l,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(p){this.onError(p)}}var Vn=!1,io=null,lo=!1,$a=null,Ud={onError:function(e){Vn=!0,io=e}};function Hd(e,t,n,r,o,a,s,l,u){Vn=!1,io=null,Bd.apply(Ud,arguments)}function Vd(e,t,n,r,o,a,s,l,u){if(Hd.apply(this,arguments),Vn){if(Vn){var c=io;Vn=!1,io=null}else throw Error(E(198));lo||(lo=!0,$a=c)}}function Kt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function yu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ci(e){if(Kt(e)!==e)throw Error(E(188))}function Gd(e){var t=e.alternate;if(!t){if(t=Kt(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return Ci(o),e;if(a===r)return Ci(o),t;a=a.sibling}throw Error(E(188))}if(n.return!==r.return)n=o,r=a;else{for(var s=!1,l=o.child;l;){if(l===n){s=!0,n=o,r=a;break}if(l===r){s=!0,r=o,n=a;break}l=l.sibling}if(!s){for(l=a.child;l;){if(l===n){s=!0,n=a,r=o;break}if(l===r){s=!0,r=a,n=o;break}l=l.sibling}if(!s)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function vu(e){return e=Gd(e),e!==null?xu(e):null}function xu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=xu(e);if(t!==null)return t;e=e.sibling}return null}var wu=Me.unstable_scheduleCallback,Ei=Me.unstable_cancelCallback,Xd=Me.unstable_shouldYield,Yd=Me.unstable_requestPaint,ne=Me.unstable_now,Qd=Me.unstable_getCurrentPriorityLevel,Ps=Me.unstable_ImmediatePriority,ku=Me.unstable_UserBlockingPriority,uo=Me.unstable_NormalPriority,Kd=Me.unstable_LowPriority,Su=Me.unstable_IdlePriority,Mo=null,et=null;function qd(e){if(et&&typeof et.onCommitFiberRoot=="function")try{et.onCommitFiberRoot(Mo,e,void 0,(e.current.flags&128)===128)}catch{}}var Xe=Math.clz32?Math.clz32:ef,Zd=Math.log,Jd=Math.LN2;function ef(e){return e>>>=0,e===0?32:31-(Zd(e)/Jd|0)|0}var Mr=64,Lr=4194304;function Wn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function co(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~o;l!==0?r=Wn(l):(a&=s,a!==0&&(r=Wn(a)))}else s=n&~o,s!==0?r=Wn(s):a!==0&&(r=Wn(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Xe(t),o=1<<n,r|=e[n],t&=~o;return r}function tf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var s=31-Xe(a),l=1<<s,u=o[s];u===-1?(!(l&n)||l&r)&&(o[s]=tf(l,t)):u<=t&&(e.expiredLanes|=l),a&=~l}}function Aa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function bu(){var e=Mr;return Mr<<=1,!(Mr&4194240)&&(Mr=64),e}function Jo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function wr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Xe(t),e[t]=n}function rf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Xe(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}function _s(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Xe(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var B=0;function ju(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Nu,Ms,Cu,Eu,Tu,Wa=!1,Ir=[],St=null,bt=null,jt=null,rr=new Map,or=new Map,vt=[],of="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ti(e,t){switch(e){case"focusin":case"focusout":St=null;break;case"dragenter":case"dragleave":bt=null;break;case"mouseover":case"mouseout":jt=null;break;case"pointerover":case"pointerout":rr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":or.delete(t.pointerId)}}function Ln(e,t,n,r,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},t!==null&&(t=Sr(t),t!==null&&Ms(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function af(e,t,n,r,o){switch(t){case"focusin":return St=Ln(St,e,t,n,r,o),!0;case"dragenter":return bt=Ln(bt,e,t,n,r,o),!0;case"mouseover":return jt=Ln(jt,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return rr.set(a,Ln(rr.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,or.set(a,Ln(or.get(a)||null,e,t,n,r,o)),!0}return!1}function zu(e){var t=$t(e.target);if(t!==null){var n=Kt(t);if(n!==null){if(t=n.tag,t===13){if(t=yu(n),t!==null){e.blockedOn=t,Tu(e.priority,function(){Cu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Kr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ba(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Da=r,n.target.dispatchEvent(r),Da=null}else return t=Sr(n),t!==null&&Ms(t),e.blockedOn=n,!1;t.shift()}return!0}function zi(e,t,n){Kr(e)&&n.delete(t)}function sf(){Wa=!1,St!==null&&Kr(St)&&(St=null),bt!==null&&Kr(bt)&&(bt=null),jt!==null&&Kr(jt)&&(jt=null),rr.forEach(zi),or.forEach(zi)}function In(e,t){e.blockedOn===t&&(e.blockedOn=null,Wa||(Wa=!0,Me.unstable_scheduleCallback(Me.unstable_NormalPriority,sf)))}function ar(e){function t(o){return In(o,e)}if(0<Ir.length){In(Ir[0],e);for(var n=1;n<Ir.length;n++){var r=Ir[n];r.blockedOn===e&&(r.blockedOn=null)}}for(St!==null&&In(St,e),bt!==null&&In(bt,e),jt!==null&&In(jt,e),rr.forEach(t),or.forEach(t),n=0;n<vt.length;n++)r=vt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<vt.length&&(n=vt[0],n.blockedOn===null);)zu(n),n.blockedOn===null&&vt.shift()}var gn=pt.ReactCurrentBatchConfig,fo=!0;function lf(e,t,n,r){var o=B,a=gn.transition;gn.transition=null;try{B=1,Ls(e,t,n,r)}finally{B=o,gn.transition=a}}function uf(e,t,n,r){var o=B,a=gn.transition;gn.transition=null;try{B=4,Ls(e,t,n,r)}finally{B=o,gn.transition=a}}function Ls(e,t,n,r){if(fo){var o=Ba(e,t,n,r);if(o===null)ua(e,t,r,po,n),Ti(e,r);else if(af(o,e,t,n,r))r.stopPropagation();else if(Ti(e,r),t&4&&-1<of.indexOf(e)){for(;o!==null;){var a=Sr(o);if(a!==null&&Nu(a),a=Ba(e,t,n,r),a===null&&ua(e,t,r,po,n),a===o)break;o=a}o!==null&&r.stopPropagation()}else ua(e,t,r,null,n)}}var po=null;function Ba(e,t,n,r){if(po=null,e=zs(r),e=$t(e),e!==null)if(t=Kt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=yu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return po=e,null}function Pu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qd()){case Ps:return 1;case ku:return 4;case uo:case Kd:return 16;case Su:return 536870912;default:return 16}default:return 16}}var wt=null,Is=null,qr=null;function _u(){if(qr)return qr;var e,t=Is,n=t.length,r,o="value"in wt?wt.value:wt.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[a-r];r++);return qr=o.slice(e,1<r?1-r:void 0)}function Zr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fr(){return!0}function Pi(){return!1}function Ie(e){function t(n,r,o,a,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Fr:Pi,this.isPropagationStopped=Pi,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fr)},persist:function(){},isPersistent:Fr}),t}var zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fs=Ie(zn),kr=ee({},zn,{view:0,detail:0}),cf=Ie(kr),ea,ta,Fn,Lo=ee({},kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ds,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fn&&(Fn&&e.type==="mousemove"?(ea=e.screenX-Fn.screenX,ta=e.screenY-Fn.screenY):ta=ea=0,Fn=e),ea)},movementY:function(e){return"movementY"in e?e.movementY:ta}}),_i=Ie(Lo),df=ee({},Lo,{dataTransfer:0}),ff=Ie(df),pf=ee({},kr,{relatedTarget:0}),na=Ie(pf),mf=ee({},zn,{animationName:0,elapsedTime:0,pseudoElement:0}),hf=Ie(mf),gf=ee({},zn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yf=Ie(gf),vf=ee({},zn,{data:0}),Mi=Ie(vf),xf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=kf[e])?!!t[e]:!1}function Ds(){return Sf}var bf=ee({},kr,{key:function(e){if(e.key){var t=xf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ds,charCode:function(e){return e.type==="keypress"?Zr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jf=Ie(bf),Nf=ee({},Lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Li=Ie(Nf),Cf=ee({},kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ds}),Ef=Ie(Cf),Tf=ee({},zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),zf=Ie(Tf),Pf=ee({},Lo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_f=Ie(Pf),Mf=[9,13,27,32],Rs=ut&&"CompositionEvent"in window,Gn=null;ut&&"documentMode"in document&&(Gn=document.documentMode);var Lf=ut&&"TextEvent"in window&&!Gn,Mu=ut&&(!Rs||Gn&&8<Gn&&11>=Gn),Ii=" ",Fi=!1;function Lu(e,t){switch(e){case"keyup":return Mf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Iu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var nn=!1;function If(e,t){switch(e){case"compositionend":return Iu(t);case"keypress":return t.which!==32?null:(Fi=!0,Ii);case"textInput":return e=t.data,e===Ii&&Fi?null:e;default:return null}}function Ff(e,t){if(nn)return e==="compositionend"||!Rs&&Lu(e,t)?(e=_u(),qr=Is=wt=null,nn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mu&&t.locale!=="ko"?null:t.data;default:return null}}var Df={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Di(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Df[e.type]:t==="textarea"}function Fu(e,t,n,r){fu(r),t=mo(t,"onChange"),0<t.length&&(n=new Fs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Xn=null,sr=null;function Rf(e){Gu(e,0)}function Io(e){var t=an(e);if(au(t))return e}function Of(e,t){if(e==="change")return t}var Du=!1;if(ut){var ra;if(ut){var oa="oninput"in document;if(!oa){var Ri=document.createElement("div");Ri.setAttribute("oninput","return;"),oa=typeof Ri.oninput=="function"}ra=oa}else ra=!1;Du=ra&&(!document.documentMode||9<document.documentMode)}function Oi(){Xn&&(Xn.detachEvent("onpropertychange",Ru),sr=Xn=null)}function Ru(e){if(e.propertyName==="value"&&Io(sr)){var t=[];Fu(t,sr,e,zs(e)),gu(Rf,t)}}function $f(e,t,n){e==="focusin"?(Oi(),Xn=t,sr=n,Xn.attachEvent("onpropertychange",Ru)):e==="focusout"&&Oi()}function Af(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Io(sr)}function Wf(e,t){if(e==="click")return Io(t)}function Bf(e,t){if(e==="input"||e==="change")return Io(t)}function Uf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Qe=typeof Object.is=="function"?Object.is:Uf;function ir(e,t){if(Qe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ja.call(t,o)||!Qe(e[o],t[o]))return!1}return!0}function $i(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ai(e,t){var n=$i(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$i(n)}}function Ou(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ou(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $u(){for(var e=window,t=so();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=so(e.document)}return t}function Os(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Hf(e){var t=$u(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ou(n.ownerDocument.documentElement,n)){if(r!==null&&Os(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=r.end===void 0?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=Ai(n,a);var s=Ai(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vf=ut&&"documentMode"in document&&11>=document.documentMode,rn=null,Ua=null,Yn=null,Ha=!1;function Wi(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ha||rn==null||rn!==so(r)||(r=rn,"selectionStart"in r&&Os(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yn&&ir(Yn,r)||(Yn=r,r=mo(Ua,"onSelect"),0<r.length&&(t=new Fs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rn)))}function Dr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var on={animationend:Dr("Animation","AnimationEnd"),animationiteration:Dr("Animation","AnimationIteration"),animationstart:Dr("Animation","AnimationStart"),transitionend:Dr("Transition","TransitionEnd")},aa={},Au={};ut&&(Au=document.createElement("div").style,"AnimationEvent"in window||(delete on.animationend.animation,delete on.animationiteration.animation,delete on.animationstart.animation),"TransitionEvent"in window||delete on.transitionend.transition);function Fo(e){if(aa[e])return aa[e];if(!on[e])return e;var t=on[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Au)return aa[e]=t[n];return e}var Wu=Fo("animationend"),Bu=Fo("animationiteration"),Uu=Fo("animationstart"),Hu=Fo("transitionend"),Vu=new Map,Bi="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mt(e,t){Vu.set(e,t),Qt(t,[e])}for(var sa=0;sa<Bi.length;sa++){var ia=Bi[sa],Gf=ia.toLowerCase(),Xf=ia[0].toUpperCase()+ia.slice(1);Mt(Gf,"on"+Xf)}Mt(Wu,"onAnimationEnd");Mt(Bu,"onAnimationIteration");Mt(Uu,"onAnimationStart");Mt("dblclick","onDoubleClick");Mt("focusin","onFocus");Mt("focusout","onBlur");Mt(Hu,"onTransitionEnd");wn("onMouseEnter",["mouseout","mouseover"]);wn("onMouseLeave",["mouseout","mouseover"]);wn("onPointerEnter",["pointerout","pointerover"]);wn("onPointerLeave",["pointerout","pointerover"]);Qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bn));function Ui(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Vd(r,t,void 0,e),e.currentTarget=null}function Gu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==a&&o.isPropagationStopped())break e;Ui(o,l,c),a=u}else for(s=0;s<r.length;s++){if(l=r[s],u=l.instance,c=l.currentTarget,l=l.listener,u!==a&&o.isPropagationStopped())break e;Ui(o,l,c),a=u}}}if(lo)throw e=$a,lo=!1,$a=null,e}function X(e,t){var n=t[Qa];n===void 0&&(n=t[Qa]=new Set);var r=e+"__bubble";n.has(r)||(Xu(t,e,2,!1),n.add(r))}function la(e,t,n){var r=0;t&&(r|=4),Xu(n,e,r,t)}var Rr="_reactListening"+Math.random().toString(36).slice(2);function lr(e){if(!e[Rr]){e[Rr]=!0,eu.forEach(function(n){n!=="selectionchange"&&(Yf.has(n)||la(n,!1,e),la(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Rr]||(t[Rr]=!0,la("selectionchange",!1,t))}}function Xu(e,t,n,r){switch(Pu(t)){case 1:var o=lf;break;case 4:o=uf;break;default:o=Ls}n=o.bind(null,t,n,e),o=void 0,!Oa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ua(e,t,n,r,o){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;s=s.return}for(;l!==null;){if(s=$t(l),s===null)return;if(u=s.tag,u===5||u===6){r=a=s;continue e}l=l.parentNode}}r=r.return}gu(function(){var c=a,p=zs(n),h=[];e:{var m=Vu.get(e);if(m!==void 0){var k=Fs,y=e;switch(e){case"keypress":if(Zr(n)===0)break e;case"keydown":case"keyup":k=jf;break;case"focusin":y="focus",k=na;break;case"focusout":y="blur",k=na;break;case"beforeblur":case"afterblur":k=na;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=_i;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=ff;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Ef;break;case Wu:case Bu:case Uu:k=hf;break;case Hu:k=zf;break;case"scroll":k=cf;break;case"wheel":k=_f;break;case"copy":case"cut":case"paste":k=yf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Li}var v=(t&4)!==0,j=!v&&e==="scroll",f=v?m!==null?m+"Capture":null:m;v=[];for(var d=c,g;d!==null;){g=d;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,f!==null&&(w=nr(d,f),w!=null&&v.push(ur(d,w,g)))),j)break;d=d.return}0<v.length&&(m=new k(m,y,null,n,p),h.push({event:m,listeners:v}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",m&&n!==Da&&(y=n.relatedTarget||n.fromElement)&&($t(y)||y[ct]))break e;if((k||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,k?(y=n.relatedTarget||n.toElement,k=c,y=y?$t(y):null,y!==null&&(j=Kt(y),y!==j||y.tag!==5&&y.tag!==6)&&(y=null)):(k=null,y=c),k!==y)){if(v=_i,w="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(v=Li,w="onPointerLeave",f="onPointerEnter",d="pointer"),j=k==null?m:an(k),g=y==null?m:an(y),m=new v(w,d+"leave",k,n,p),m.target=j,m.relatedTarget=g,w=null,$t(p)===c&&(v=new v(f,d+"enter",y,n,p),v.target=g,v.relatedTarget=j,w=v),j=w,k&&y)t:{for(v=k,f=y,d=0,g=v;g;g=Jt(g))d++;for(g=0,w=f;w;w=Jt(w))g++;for(;0<d-g;)v=Jt(v),d--;for(;0<g-d;)f=Jt(f),g--;for(;d--;){if(v===f||f!==null&&v===f.alternate)break t;v=Jt(v),f=Jt(f)}v=null}else v=null;k!==null&&Hi(h,m,k,v,!1),y!==null&&j!==null&&Hi(h,j,y,v,!0)}}e:{if(m=c?an(c):window,k=m.nodeName&&m.nodeName.toLowerCase(),k==="select"||k==="input"&&m.type==="file")var N=Of;else if(Di(m))if(Du)N=Bf;else{N=Af;var x=$f}else(k=m.nodeName)&&k.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(N=Wf);if(N&&(N=N(e,c))){Fu(h,N,n,p);break e}x&&x(e,m,c),e==="focusout"&&(x=m._wrapperState)&&x.controlled&&m.type==="number"&&_a(m,"number",m.value)}switch(x=c?an(c):window,e){case"focusin":(Di(x)||x.contentEditable==="true")&&(rn=x,Ua=c,Yn=null);break;case"focusout":Yn=Ua=rn=null;break;case"mousedown":Ha=!0;break;case"contextmenu":case"mouseup":case"dragend":Ha=!1,Wi(h,n,p);break;case"selectionchange":if(Vf)break;case"keydown":case"keyup":Wi(h,n,p)}var b;if(Rs)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else nn?Lu(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Mu&&n.locale!=="ko"&&(nn||C!=="onCompositionStart"?C==="onCompositionEnd"&&nn&&(b=_u()):(wt=p,Is="value"in wt?wt.value:wt.textContent,nn=!0)),x=mo(c,C),0<x.length&&(C=new Mi(C,e,null,n,p),h.push({event:C,listeners:x}),b?C.data=b:(b=Iu(n),b!==null&&(C.data=b)))),(b=Lf?If(e,n):Ff(e,n))&&(c=mo(c,"onBeforeInput"),0<c.length&&(p=new Mi("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:c}),p.data=b))}Gu(h,t)})}function ur(e,t,n){return{instance:e,listener:t,currentTarget:n}}function mo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=nr(e,n),a!=null&&r.unshift(ur(e,a,o)),a=nr(e,t),a!=null&&r.push(ur(e,a,o))),e=e.return}return r}function Jt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Hi(e,t,n,r,o){for(var a=t._reactName,s=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,o?(u=nr(n,a),u!=null&&s.unshift(ur(n,u,l))):o||(u=nr(n,a),u!=null&&s.push(ur(n,u,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Qf=/\r\n?/g,Kf=/\u0000|\uFFFD/g;function Vi(e){return(typeof e=="string"?e:""+e).replace(Qf,`
`).replace(Kf,"")}function Or(e,t,n){if(t=Vi(t),Vi(e)!==t&&n)throw Error(E(425))}function ho(){}var Va=null,Ga=null;function Xa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ya=typeof setTimeout=="function"?setTimeout:void 0,qf=typeof clearTimeout=="function"?clearTimeout:void 0,Gi=typeof Promise=="function"?Promise:void 0,Zf=typeof queueMicrotask=="function"?queueMicrotask:typeof Gi<"u"?function(e){return Gi.resolve(null).then(e).catch(Jf)}:Ya;function Jf(e){setTimeout(function(){throw e})}function ca(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),ar(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);ar(t)}function Nt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Xi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Pn=Math.random().toString(36).slice(2),Je="__reactFiber$"+Pn,cr="__reactProps$"+Pn,ct="__reactContainer$"+Pn,Qa="__reactEvents$"+Pn,ep="__reactListeners$"+Pn,tp="__reactHandles$"+Pn;function $t(e){var t=e[Je];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ct]||n[Je]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Xi(e);e!==null;){if(n=e[Je])return n;e=Xi(e)}return t}e=n,n=e.parentNode}return null}function Sr(e){return e=e[Je]||e[ct],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function an(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Do(e){return e[cr]||null}var Ka=[],sn=-1;function Lt(e){return{current:e}}function Y(e){0>sn||(e.current=Ka[sn],Ka[sn]=null,sn--)}function H(e,t){sn++,Ka[sn]=e.current,e.current=t}var _t={},ye=Lt(_t),Ce=Lt(!1),Ht=_t;function kn(e,t){var n=e.type.contextTypes;if(!n)return _t;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ee(e){return e=e.childContextTypes,e!=null}function go(){Y(Ce),Y(ye)}function Yi(e,t,n){if(ye.current!==_t)throw Error(E(168));H(ye,t),H(Ce,n)}function Yu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(E(108,Od(e)||"Unknown",o));return ee({},n,r)}function yo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_t,Ht=ye.current,H(ye,e),H(Ce,Ce.current),!0}function Qi(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=Yu(e,t,Ht),r.__reactInternalMemoizedMergedChildContext=e,Y(Ce),Y(ye),H(ye,e)):Y(Ce),H(Ce,n)}var rt=null,Ro=!1,da=!1;function Qu(e){rt===null?rt=[e]:rt.push(e)}function np(e){Ro=!0,Qu(e)}function It(){if(!da&&rt!==null){da=!0;var e=0,t=B;try{var n=rt;for(B=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}rt=null,Ro=!1}catch(o){throw rt!==null&&(rt=rt.slice(e+1)),wu(Ps,It),o}finally{B=t,da=!1}}return null}var ln=[],un=0,vo=null,xo=0,Fe=[],De=0,Vt=null,ot=1,at="";function Rt(e,t){ln[un++]=xo,ln[un++]=vo,vo=e,xo=t}function Ku(e,t,n){Fe[De++]=ot,Fe[De++]=at,Fe[De++]=Vt,Vt=e;var r=ot;e=at;var o=32-Xe(r)-1;r&=~(1<<o),n+=1;var a=32-Xe(t)+o;if(30<a){var s=o-o%5;a=(r&(1<<s)-1).toString(32),r>>=s,o-=s,ot=1<<32-Xe(t)+o|n<<o|r,at=a+e}else ot=1<<a|n<<o|r,at=e}function $s(e){e.return!==null&&(Rt(e,1),Ku(e,1,0))}function As(e){for(;e===vo;)vo=ln[--un],ln[un]=null,xo=ln[--un],ln[un]=null;for(;e===Vt;)Vt=Fe[--De],Fe[De]=null,at=Fe[--De],Fe[De]=null,ot=Fe[--De],Fe[De]=null}var _e=null,Pe=null,q=!1,Ge=null;function qu(e,t){var n=Re(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ki(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,_e=e,Pe=Nt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,_e=e,Pe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Vt!==null?{id:ot,overflow:at}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Re(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,_e=e,Pe=null,!0):!1;default:return!1}}function qa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Za(e){if(q){var t=Pe;if(t){var n=t;if(!Ki(e,t)){if(qa(e))throw Error(E(418));t=Nt(n.nextSibling);var r=_e;t&&Ki(e,t)?qu(r,n):(e.flags=e.flags&-4097|2,q=!1,_e=e)}}else{if(qa(e))throw Error(E(418));e.flags=e.flags&-4097|2,q=!1,_e=e}}}function qi(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;_e=e}function $r(e){if(e!==_e)return!1;if(!q)return qi(e),q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Xa(e.type,e.memoizedProps)),t&&(t=Pe)){if(qa(e))throw Zu(),Error(E(418));for(;t;)qu(e,t),t=Nt(t.nextSibling)}if(qi(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Pe=Nt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Pe=null}}else Pe=_e?Nt(e.stateNode.nextSibling):null;return!0}function Zu(){for(var e=Pe;e;)e=Nt(e.nextSibling)}function Sn(){Pe=_e=null,q=!1}function Ws(e){Ge===null?Ge=[e]:Ge.push(e)}var rp=pt.ReactCurrentBatchConfig;function Dn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var o=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(s){var l=o.refs;s===null?delete l[a]:l[a]=s},t._stringRef=a,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function Ar(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Zi(e){var t=e._init;return t(e._payload)}function Ju(e){function t(f,d){if(e){var g=f.deletions;g===null?(f.deletions=[d],f.flags|=16):g.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function o(f,d){return f=zt(f,d),f.index=0,f.sibling=null,f}function a(f,d,g){return f.index=g,e?(g=f.alternate,g!==null?(g=g.index,g<d?(f.flags|=2,d):g):(f.flags|=2,d)):(f.flags|=1048576,d)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,d,g,w){return d===null||d.tag!==6?(d=va(g,f.mode,w),d.return=f,d):(d=o(d,g),d.return=f,d)}function u(f,d,g,w){var N=g.type;return N===tn?p(f,d,g.props.children,w,g.key):d!==null&&(d.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===gt&&Zi(N)===d.type)?(w=o(d,g.props),w.ref=Dn(f,d,g),w.return=f,w):(w=ao(g.type,g.key,g.props,null,f.mode,w),w.ref=Dn(f,d,g),w.return=f,w)}function c(f,d,g,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=xa(g,f.mode,w),d.return=f,d):(d=o(d,g.children||[]),d.return=f,d)}function p(f,d,g,w,N){return d===null||d.tag!==7?(d=Ut(g,f.mode,w,N),d.return=f,d):(d=o(d,g),d.return=f,d)}function h(f,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=va(""+d,f.mode,g),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case zr:return g=ao(d.type,d.key,d.props,null,f.mode,g),g.ref=Dn(f,null,d),g.return=f,g;case en:return d=xa(d,f.mode,g),d.return=f,d;case gt:var w=d._init;return h(f,w(d._payload),g)}if(An(d)||_n(d))return d=Ut(d,f.mode,g,null),d.return=f,d;Ar(f,d)}return null}function m(f,d,g,w){var N=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return N!==null?null:l(f,d,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case zr:return g.key===N?u(f,d,g,w):null;case en:return g.key===N?c(f,d,g,w):null;case gt:return N=g._init,m(f,d,N(g._payload),w)}if(An(g)||_n(g))return N!==null?null:p(f,d,g,w,null);Ar(f,g)}return null}function k(f,d,g,w,N){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(g)||null,l(d,f,""+w,N);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case zr:return f=f.get(w.key===null?g:w.key)||null,u(d,f,w,N);case en:return f=f.get(w.key===null?g:w.key)||null,c(d,f,w,N);case gt:var x=w._init;return k(f,d,g,x(w._payload),N)}if(An(w)||_n(w))return f=f.get(g)||null,p(d,f,w,N,null);Ar(d,w)}return null}function y(f,d,g,w){for(var N=null,x=null,b=d,C=d=0,M=null;b!==null&&C<g.length;C++){b.index>C?(M=b,b=null):M=b.sibling;var P=m(f,b,g[C],w);if(P===null){b===null&&(b=M);break}e&&b&&P.alternate===null&&t(f,b),d=a(P,d,C),x===null?N=P:x.sibling=P,x=P,b=M}if(C===g.length)return n(f,b),q&&Rt(f,C),N;if(b===null){for(;C<g.length;C++)b=h(f,g[C],w),b!==null&&(d=a(b,d,C),x===null?N=b:x.sibling=b,x=b);return q&&Rt(f,C),N}for(b=r(f,b);C<g.length;C++)M=k(b,f,C,g[C],w),M!==null&&(e&&M.alternate!==null&&b.delete(M.key===null?C:M.key),d=a(M,d,C),x===null?N=M:x.sibling=M,x=M);return e&&b.forEach(function(A){return t(f,A)}),q&&Rt(f,C),N}function v(f,d,g,w){var N=_n(g);if(typeof N!="function")throw Error(E(150));if(g=N.call(g),g==null)throw Error(E(151));for(var x=N=null,b=d,C=d=0,M=null,P=g.next();b!==null&&!P.done;C++,P=g.next()){b.index>C?(M=b,b=null):M=b.sibling;var A=m(f,b,P.value,w);if(A===null){b===null&&(b=M);break}e&&b&&A.alternate===null&&t(f,b),d=a(A,d,C),x===null?N=A:x.sibling=A,x=A,b=M}if(P.done)return n(f,b),q&&Rt(f,C),N;if(b===null){for(;!P.done;C++,P=g.next())P=h(f,P.value,w),P!==null&&(d=a(P,d,C),x===null?N=P:x.sibling=P,x=P);return q&&Rt(f,C),N}for(b=r(f,b);!P.done;C++,P=g.next())P=k(b,f,C,P.value,w),P!==null&&(e&&P.alternate!==null&&b.delete(P.key===null?C:P.key),d=a(P,d,C),x===null?N=P:x.sibling=P,x=P);return e&&b.forEach(function(D){return t(f,D)}),q&&Rt(f,C),N}function j(f,d,g,w){if(typeof g=="object"&&g!==null&&g.type===tn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case zr:e:{for(var N=g.key,x=d;x!==null;){if(x.key===N){if(N=g.type,N===tn){if(x.tag===7){n(f,x.sibling),d=o(x,g.props.children),d.return=f,f=d;break e}}else if(x.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===gt&&Zi(N)===x.type){n(f,x.sibling),d=o(x,g.props),d.ref=Dn(f,x,g),d.return=f,f=d;break e}n(f,x);break}else t(f,x);x=x.sibling}g.type===tn?(d=Ut(g.props.children,f.mode,w,g.key),d.return=f,f=d):(w=ao(g.type,g.key,g.props,null,f.mode,w),w.ref=Dn(f,d,g),w.return=f,f=w)}return s(f);case en:e:{for(x=g.key;d!==null;){if(d.key===x)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){n(f,d.sibling),d=o(d,g.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=xa(g,f.mode,w),d.return=f,f=d}return s(f);case gt:return x=g._init,j(f,d,x(g._payload),w)}if(An(g))return y(f,d,g,w);if(_n(g))return v(f,d,g,w);Ar(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(n(f,d.sibling),d=o(d,g),d.return=f,f=d):(n(f,d),d=va(g,f.mode,w),d.return=f,f=d),s(f)):n(f,d)}return j}var bn=Ju(!0),ec=Ju(!1),wo=Lt(null),ko=null,cn=null,Bs=null;function Us(){Bs=cn=ko=null}function Hs(e){var t=wo.current;Y(wo),e._currentValue=t}function Ja(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function yn(e,t){ko=e,Bs=cn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ne=!0),e.firstContext=null)}function We(e){var t=e._currentValue;if(Bs!==e)if(e={context:e,memoizedValue:t,next:null},cn===null){if(ko===null)throw Error(E(308));cn=e,ko.dependencies={lanes:0,firstContext:e}}else cn=cn.next=e;return t}var At=null;function Vs(e){At===null?At=[e]:At.push(e)}function tc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Vs(t)):(n.next=o.next,o.next=n),t.interleaved=n,dt(e,r)}function dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var yt=!1;function Gs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function lt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ct(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,dt(e,n)}return o=r.interleaved,o===null?(t.next=t,Vs(r)):(t.next=o.next,o.next=t),r.interleaved=t,dt(e,n)}function Jr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_s(e,n)}}function Ji(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=s:a=a.next=s,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function So(e,t,n,r){var o=e.updateQueue;yt=!1;var a=o.firstBaseUpdate,s=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var u=l,c=u.next;u.next=null,s===null?a=c:s.next=c,s=u;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==s&&(l===null?p.firstBaseUpdate=c:l.next=c,p.lastBaseUpdate=u))}if(a!==null){var h=o.baseState;s=0,p=c=u=null,l=a;do{var m=l.lane,k=l.eventTime;if((r&m)===m){p!==null&&(p=p.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,v=l;switch(m=t,k=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(k,h,m);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,m=typeof y=="function"?y.call(k,h,m):y,m==null)break e;h=ee({},h,m);break e;case 2:yt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[l]:m.push(l))}else k={eventTime:k,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(c=p=k,u=h):p=p.next=k,s|=m;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;m=l,l=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(p===null&&(u=h),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);Xt|=s,e.lanes=s,e.memoizedState=h}}function el(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(E(191,o));o.call(r)}}}var br={},tt=Lt(br),dr=Lt(br),fr=Lt(br);function Wt(e){if(e===br)throw Error(E(174));return e}function Xs(e,t){switch(H(fr,t),H(dr,e),H(tt,br),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:La(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=La(t,e)}Y(tt),H(tt,t)}function jn(){Y(tt),Y(dr),Y(fr)}function rc(e){Wt(fr.current);var t=Wt(tt.current),n=La(t,e.type);t!==n&&(H(dr,e),H(tt,n))}function Ys(e){dr.current===e&&(Y(tt),Y(dr))}var Z=Lt(0);function bo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var fa=[];function Qs(){for(var e=0;e<fa.length;e++)fa[e]._workInProgressVersionPrimary=null;fa.length=0}var eo=pt.ReactCurrentDispatcher,pa=pt.ReactCurrentBatchConfig,Gt=0,J=null,ae=null,le=null,jo=!1,Qn=!1,pr=0,op=0;function me(){throw Error(E(321))}function Ks(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Qe(e[n],t[n]))return!1;return!0}function qs(e,t,n,r,o,a){if(Gt=a,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,eo.current=e===null||e.memoizedState===null?lp:up,e=n(r,o),Qn){a=0;do{if(Qn=!1,pr=0,25<=a)throw Error(E(301));a+=1,le=ae=null,t.updateQueue=null,eo.current=cp,e=n(r,o)}while(Qn)}if(eo.current=No,t=ae!==null&&ae.next!==null,Gt=0,le=ae=J=null,jo=!1,t)throw Error(E(300));return e}function Zs(){var e=pr!==0;return pr=0,e}function qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?J.memoizedState=le=e:le=le.next=e,le}function Be(){if(ae===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=le===null?J.memoizedState:le.next;if(t!==null)le=t,ae=e;else{if(e===null)throw Error(E(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},le===null?J.memoizedState=le=e:le=le.next=e}return le}function mr(e,t){return typeof t=="function"?t(e):t}function ma(e){var t=Be(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=ae,o=r.baseQueue,a=n.pending;if(a!==null){if(o!==null){var s=o.next;o.next=a.next,a.next=s}r.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,r=r.baseState;var l=s=null,u=null,c=a;do{var p=c.lane;if((Gt&p)===p)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=h,s=r):u=u.next=h,J.lanes|=p,Xt|=p}c=c.next}while(c!==null&&c!==a);u===null?s=r:u.next=l,Qe(r,t.memoizedState)||(Ne=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do a=o.lane,J.lanes|=a,Xt|=a,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ha(e){var t=Be(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do a=e(a,s.action),s=s.next;while(s!==o);Qe(a,t.memoizedState)||(Ne=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function oc(){}function ac(e,t){var n=J,r=Be(),o=t(),a=!Qe(r.memoizedState,o);if(a&&(r.memoizedState=o,Ne=!0),r=r.queue,Js(lc.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,hr(9,ic.bind(null,n,r,o,t),void 0,null),ue===null)throw Error(E(349));Gt&30||sc(n,t,o)}return o}function sc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ic(e,t,n,r){t.value=n,t.getSnapshot=r,uc(t)&&cc(e)}function lc(e,t,n){return n(function(){uc(t)&&cc(e)})}function uc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Qe(e,n)}catch{return!0}}function cc(e){var t=dt(e,1);t!==null&&Ye(t,e,1,-1)}function tl(e){var t=qe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mr,lastRenderedState:e},t.queue=e,e=e.dispatch=ip.bind(null,J,e),[t.memoizedState,e]}function hr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function dc(){return Be().memoizedState}function to(e,t,n,r){var o=qe();J.flags|=e,o.memoizedState=hr(1|t,n,void 0,r===void 0?null:r)}function Oo(e,t,n,r){var o=Be();r=r===void 0?null:r;var a=void 0;if(ae!==null){var s=ae.memoizedState;if(a=s.destroy,r!==null&&Ks(r,s.deps)){o.memoizedState=hr(t,n,a,r);return}}J.flags|=e,o.memoizedState=hr(1|t,n,a,r)}function nl(e,t){return to(8390656,8,e,t)}function Js(e,t){return Oo(2048,8,e,t)}function fc(e,t){return Oo(4,2,e,t)}function pc(e,t){return Oo(4,4,e,t)}function mc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hc(e,t,n){return n=n!=null?n.concat([e]):null,Oo(4,4,mc.bind(null,t,e),n)}function ei(){}function gc(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ks(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function yc(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ks(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function vc(e,t,n){return Gt&21?(Qe(n,t)||(n=bu(),J.lanes|=n,Xt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ne=!0),e.memoizedState=n)}function ap(e,t){var n=B;B=n!==0&&4>n?n:4,e(!0);var r=pa.transition;pa.transition={};try{e(!1),t()}finally{B=n,pa.transition=r}}function xc(){return Be().memoizedState}function sp(e,t,n){var r=Tt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},wc(e))kc(t,n);else if(n=tc(e,t,n,r),n!==null){var o=we();Ye(n,e,r,o),Sc(n,t,r)}}function ip(e,t,n){var r=Tt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(wc(e))kc(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var s=t.lastRenderedState,l=a(s,n);if(o.hasEagerState=!0,o.eagerState=l,Qe(l,s)){var u=t.interleaved;u===null?(o.next=o,Vs(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=tc(e,t,o,r),n!==null&&(o=we(),Ye(n,e,r,o),Sc(n,t,r))}}function wc(e){var t=e.alternate;return e===J||t!==null&&t===J}function kc(e,t){Qn=jo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Sc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_s(e,n)}}var No={readContext:We,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},lp={readContext:We,useCallback:function(e,t){return qe().memoizedState=[e,t===void 0?null:t],e},useContext:We,useEffect:nl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,to(4194308,4,mc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return to(4194308,4,e,t)},useInsertionEffect:function(e,t){return to(4,2,e,t)},useMemo:function(e,t){var n=qe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=qe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=sp.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=qe();return e={current:e},t.memoizedState=e},useState:tl,useDebugValue:ei,useDeferredValue:function(e){return qe().memoizedState=e},useTransition:function(){var e=tl(!1),t=e[0];return e=ap.bind(null,e[1]),qe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=J,o=qe();if(q){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),ue===null)throw Error(E(349));Gt&30||sc(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,nl(lc.bind(null,r,a,e),[e]),r.flags|=2048,hr(9,ic.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=qe(),t=ue.identifierPrefix;if(q){var n=at,r=ot;n=(r&~(1<<32-Xe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=pr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=op++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},up={readContext:We,useCallback:gc,useContext:We,useEffect:Js,useImperativeHandle:hc,useInsertionEffect:fc,useLayoutEffect:pc,useMemo:yc,useReducer:ma,useRef:dc,useState:function(){return ma(mr)},useDebugValue:ei,useDeferredValue:function(e){var t=Be();return vc(t,ae.memoizedState,e)},useTransition:function(){var e=ma(mr)[0],t=Be().memoizedState;return[e,t]},useMutableSource:oc,useSyncExternalStore:ac,useId:xc,unstable_isNewReconciler:!1},cp={readContext:We,useCallback:gc,useContext:We,useEffect:Js,useImperativeHandle:hc,useInsertionEffect:fc,useLayoutEffect:pc,useMemo:yc,useReducer:ha,useRef:dc,useState:function(){return ha(mr)},useDebugValue:ei,useDeferredValue:function(e){var t=Be();return ae===null?t.memoizedState=e:vc(t,ae.memoizedState,e)},useTransition:function(){var e=ha(mr)[0],t=Be().memoizedState;return[e,t]},useMutableSource:oc,useSyncExternalStore:ac,useId:xc,unstable_isNewReconciler:!1};function He(e,t){if(e&&e.defaultProps){t=ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function es(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var $o={isMounted:function(e){return(e=e._reactInternals)?Kt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=we(),o=Tt(e),a=lt(r,o);a.payload=t,n!=null&&(a.callback=n),t=Ct(e,a,o),t!==null&&(Ye(t,e,o,r),Jr(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=we(),o=Tt(e),a=lt(r,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Ct(e,a,o),t!==null&&(Ye(t,e,o,r),Jr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=we(),r=Tt(e),o=lt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Ct(e,o,r),t!==null&&(Ye(t,e,r,n),Jr(t,e,r))}};function rl(e,t,n,r,o,a,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,s):t.prototype&&t.prototype.isPureReactComponent?!ir(n,r)||!ir(o,a):!0}function bc(e,t,n){var r=!1,o=_t,a=t.contextType;return typeof a=="object"&&a!==null?a=We(a):(o=Ee(t)?Ht:ye.current,r=t.contextTypes,a=(r=r!=null)?kn(e,o):_t),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=$o,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function ol(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&$o.enqueueReplaceState(t,t.state,null)}function ts(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Gs(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=We(a):(a=Ee(t)?Ht:ye.current,o.context=kn(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(es(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&$o.enqueueReplaceState(o,o.state,null),So(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Nn(e,t){try{var n="",r=t;do n+=Rd(r),r=r.return;while(r);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function ga(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ns(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var dp=typeof WeakMap=="function"?WeakMap:Map;function jc(e,t,n){n=lt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Eo||(Eo=!0,fs=r),ns(e,t)},n}function Nc(e,t,n){n=lt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ns(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){ns(e,t),typeof r!="function"&&(Et===null?Et=new Set([this]):Et.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function al(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new dp;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Np.bind(null,e,t,n),t.then(e,e))}function sl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function il(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=lt(-1,1),t.tag=2,Ct(n,t,1))),n.lanes|=1),e)}var fp=pt.ReactCurrentOwner,Ne=!1;function ve(e,t,n,r){t.child=e===null?ec(t,null,n,r):bn(t,e.child,n,r)}function ll(e,t,n,r,o){n=n.render;var a=t.ref;return yn(t,o),r=qs(e,t,n,r,a,o),n=Zs(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ft(e,t,o)):(q&&n&&$s(t),t.flags|=1,ve(e,t,r,o),t.child)}function ul(e,t,n,r,o){if(e===null){var a=n.type;return typeof a=="function"&&!li(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Cc(e,t,a,r,o)):(e=ao(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&o)){var s=a.memoizedProps;if(n=n.compare,n=n!==null?n:ir,n(s,r)&&e.ref===t.ref)return ft(e,t,o)}return t.flags|=1,e=zt(a,r),e.ref=t.ref,e.return=t,t.child=e}function Cc(e,t,n,r,o){if(e!==null){var a=e.memoizedProps;if(ir(a,r)&&e.ref===t.ref)if(Ne=!1,t.pendingProps=r=a,(e.lanes&o)!==0)e.flags&131072&&(Ne=!0);else return t.lanes=e.lanes,ft(e,t,o)}return rs(e,t,n,r,o)}function Ec(e,t,n){var r=t.pendingProps,o=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(fn,ze),ze|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(fn,ze),ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,H(fn,ze),ze|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,H(fn,ze),ze|=r;return ve(e,t,o,n),t.child}function Tc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function rs(e,t,n,r,o){var a=Ee(n)?Ht:ye.current;return a=kn(t,a),yn(t,o),n=qs(e,t,n,r,a,o),r=Zs(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ft(e,t,o)):(q&&r&&$s(t),t.flags|=1,ve(e,t,n,o),t.child)}function cl(e,t,n,r,o){if(Ee(n)){var a=!0;yo(t)}else a=!1;if(yn(t,o),t.stateNode===null)no(e,t),bc(t,n,r),ts(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var u=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=We(c):(c=Ee(n)?Ht:ye.current,c=kn(t,c));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||u!==c)&&ol(t,s,r,c),yt=!1;var m=t.memoizedState;s.state=m,So(t,r,s,o),u=t.memoizedState,l!==r||m!==u||Ce.current||yt?(typeof p=="function"&&(es(t,n,p,r),u=t.memoizedState),(l=yt||rl(t,n,l,r,m,u,c))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),s.props=r,s.state=u,s.context=c,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,nc(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:He(t.type,l),s.props=c,h=t.pendingProps,m=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=We(u):(u=Ee(n)?Ht:ye.current,u=kn(t,u));var k=n.getDerivedStateFromProps;(p=typeof k=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==h||m!==u)&&ol(t,s,r,u),yt=!1,m=t.memoizedState,s.state=m,So(t,r,s,o);var y=t.memoizedState;l!==h||m!==y||Ce.current||yt?(typeof k=="function"&&(es(t,n,k,r),y=t.memoizedState),(c=yt||rl(t,n,c,r,m,y,u)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=u,r=c):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return os(e,t,n,r,a,o)}function os(e,t,n,r,o,a){Tc(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&Qi(t,n,!1),ft(e,t,a);r=t.stateNode,fp.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=bn(t,e.child,null,a),t.child=bn(t,null,l,a)):ve(e,t,l,a),t.memoizedState=r.state,o&&Qi(t,n,!0),t.child}function zc(e){var t=e.stateNode;t.pendingContext?Yi(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Yi(e,t.context,!1),Xs(e,t.containerInfo)}function dl(e,t,n,r,o){return Sn(),Ws(o),t.flags|=256,ve(e,t,n,r),t.child}var as={dehydrated:null,treeContext:null,retryLane:0};function ss(e){return{baseLanes:e,cachePool:null,transitions:null}}function Pc(e,t,n){var r=t.pendingProps,o=Z.current,a=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),H(Z,o&1),e===null)return Za(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,a?(r=t.mode,a=t.child,s={mode:"hidden",children:s},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=Bo(s,r,0,null),e=Ut(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=ss(n),t.memoizedState=as,e):ti(t,s));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return pp(e,t,s,r,l,o,n);if(a){a=r.fallback,s=t.mode,o=e.child,l=o.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=zt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?a=zt(l,a):(a=Ut(a,s,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,s=e.child.memoizedState,s=s===null?ss(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=e.childLanes&~n,t.memoizedState=as,r}return a=e.child,e=a.sibling,r=zt(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ti(e,t){return t=Bo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Wr(e,t,n,r){return r!==null&&Ws(r),bn(t,e.child,null,n),e=ti(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pp(e,t,n,r,o,a,s){if(n)return t.flags&256?(t.flags&=-257,r=ga(Error(E(422))),Wr(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=Bo({mode:"visible",children:r.children},o,0,null),a=Ut(a,o,s,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&bn(t,e.child,null,s),t.child.memoizedState=ss(s),t.memoizedState=as,a);if(!(t.mode&1))return Wr(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(E(419)),r=ga(a,r,void 0),Wr(e,t,s,r)}if(l=(s&e.childLanes)!==0,Ne||l){if(r=ue,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,dt(e,o),Ye(r,e,o,-1))}return ii(),r=ga(Error(E(421))),Wr(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Cp.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,Pe=Nt(o.nextSibling),_e=t,q=!0,Ge=null,e!==null&&(Fe[De++]=ot,Fe[De++]=at,Fe[De++]=Vt,ot=e.id,at=e.overflow,Vt=t),t=ti(t,r.children),t.flags|=4096,t)}function fl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ja(e.return,t,n)}function ya(e,t,n,r,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function _c(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(ve(e,t,r.children,n),r=Z.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fl(e,n,t);else if(e.tag===19)fl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(Z,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&bo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ya(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&bo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ya(t,!0,n,null,a);break;case"together":ya(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function no(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function mp(e,t,n){switch(t.tag){case 3:zc(t),Sn();break;case 5:rc(t);break;case 1:Ee(t.type)&&yo(t);break;case 4:Xs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;H(wo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(H(Z,Z.current&1),t.flags|=128,null):n&t.child.childLanes?Pc(e,t,n):(H(Z,Z.current&1),e=ft(e,t,n),e!==null?e.sibling:null);H(Z,Z.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return _c(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),H(Z,Z.current),r)break;return null;case 22:case 23:return t.lanes=0,Ec(e,t,n)}return ft(e,t,n)}var Mc,is,Lc,Ic;Mc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};is=function(){};Lc=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Wt(tt.current);var a=null;switch(n){case"input":o=za(e,o),r=za(e,r),a=[];break;case"select":o=ee({},o,{value:void 0}),r=ee({},r,{value:void 0}),a=[];break;case"textarea":o=Ma(e,o),r=Ma(e,r),a=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ho)}Ia(n,r);var s;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var l=o[c];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(er.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in r){var u=r[c];if(l=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(s in l)!l.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&l[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(a||(a=[]),a.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(a=a||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(a=a||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(er.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&X("scroll",e),a||l===u||(a=[])):(a=a||[]).push(c,u))}n&&(a=a||[]).push("style",n);var c=a;(t.updateQueue=c)&&(t.flags|=4)}};Ic=function(e,t,n,r){n!==r&&(t.flags|=4)};function Rn(e,t){if(!q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hp(e,t,n){var r=t.pendingProps;switch(As(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return Ee(t.type)&&go(),he(t),null;case 3:return r=t.stateNode,jn(),Y(Ce),Y(ye),Qs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&($r(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ge!==null&&(hs(Ge),Ge=null))),is(e,t),he(t),null;case 5:Ys(t);var o=Wt(fr.current);if(n=t.type,e!==null&&t.stateNode!=null)Lc(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return he(t),null}if(e=Wt(tt.current),$r(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Je]=t,r[cr]=a,e=(t.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(o=0;o<Bn.length;o++)X(Bn[o],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":ki(r,a),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},X("invalid",r);break;case"textarea":bi(r,a),X("invalid",r)}Ia(n,a),o=null;for(var s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&Or(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&Or(r.textContent,l,e),o=["children",""+l]):er.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&X("scroll",r)}switch(n){case"input":Pr(r),Si(r,a,!0);break;case"textarea":Pr(r),ji(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=ho)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=lu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Je]=t,e[cr]=r,Mc(e,t,!1,!1),t.stateNode=e;e:{switch(s=Fa(n,r),n){case"dialog":X("cancel",e),X("close",e),o=r;break;case"iframe":case"object":case"embed":X("load",e),o=r;break;case"video":case"audio":for(o=0;o<Bn.length;o++)X(Bn[o],e);o=r;break;case"source":X("error",e),o=r;break;case"img":case"image":case"link":X("error",e),X("load",e),o=r;break;case"details":X("toggle",e),o=r;break;case"input":ki(e,r),o=za(e,r),X("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ee({},r,{value:void 0}),X("invalid",e);break;case"textarea":bi(e,r),o=Ma(e,r),X("invalid",e);break;default:o=r}Ia(n,o),l=o;for(a in l)if(l.hasOwnProperty(a)){var u=l[a];a==="style"?du(e,u):a==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&uu(e,u)):a==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&tr(e,u):typeof u=="number"&&tr(e,""+u):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(er.hasOwnProperty(a)?u!=null&&a==="onScroll"&&X("scroll",e):u!=null&&Ns(e,a,u,s))}switch(n){case"input":Pr(e),Si(e,r,!1);break;case"textarea":Pr(e),ji(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Pt(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?pn(e,!!r.multiple,a,!1):r.defaultValue!=null&&pn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ho)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return he(t),null;case 6:if(e&&t.stateNode!=null)Ic(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=Wt(fr.current),Wt(tt.current),$r(t)){if(r=t.stateNode,n=t.memoizedProps,r[Je]=t,(a=r.nodeValue!==n)&&(e=_e,e!==null))switch(e.tag){case 3:Or(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Or(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Je]=t,t.stateNode=r}return he(t),null;case 13:if(Y(Z),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&Pe!==null&&t.mode&1&&!(t.flags&128))Zu(),Sn(),t.flags|=98560,a=!1;else if(a=$r(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(E(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(E(317));a[Je]=t}else Sn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;he(t),a=!1}else Ge!==null&&(hs(Ge),Ge=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Z.current&1?se===0&&(se=3):ii())),t.updateQueue!==null&&(t.flags|=4),he(t),null);case 4:return jn(),is(e,t),e===null&&lr(t.stateNode.containerInfo),he(t),null;case 10:return Hs(t.type._context),he(t),null;case 17:return Ee(t.type)&&go(),he(t),null;case 19:if(Y(Z),a=t.memoizedState,a===null)return he(t),null;if(r=(t.flags&128)!==0,s=a.rendering,s===null)if(r)Rn(a,!1);else{if(se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=bo(e),s!==null){for(t.flags|=128,Rn(a,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(Z,Z.current&1|2),t.child}e=e.sibling}a.tail!==null&&ne()>Cn&&(t.flags|=128,r=!0,Rn(a,!1),t.lanes=4194304)}else{if(!r)if(e=bo(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Rn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!q)return he(t),null}else 2*ne()-a.renderingStartTime>Cn&&n!==1073741824&&(t.flags|=128,r=!0,Rn(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(n=a.last,n!==null?n.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ne(),t.sibling=null,n=Z.current,H(Z,r?n&1|2:n&1),t):(he(t),null);case 22:case 23:return si(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ze&1073741824&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function gp(e,t){switch(As(t),t.tag){case 1:return Ee(t.type)&&go(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return jn(),Y(Ce),Y(ye),Qs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ys(t),null;case 13:if(Y(Z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Sn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(Z),null;case 4:return jn(),null;case 10:return Hs(t.type._context),null;case 22:case 23:return si(),null;case 24:return null;default:return null}}var Br=!1,ge=!1,yp=typeof WeakSet=="function"?WeakSet:Set,_=null;function dn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(e,t,r)}else n.current=null}function ls(e,t,n){try{n()}catch(r){te(e,t,r)}}var pl=!1;function vp(e,t){if(Va=fo,e=$u(),Os(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var s=0,l=-1,u=-1,c=0,p=0,h=e,m=null;t:for(;;){for(var k;h!==n||o!==0&&h.nodeType!==3||(l=s+o),h!==a||r!==0&&h.nodeType!==3||(u=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(k=h.firstChild)!==null;)m=h,h=k;for(;;){if(h===e)break t;if(m===n&&++c===o&&(l=s),m===a&&++p===r&&(u=s),(k=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=k}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ga={focusedElem:e,selectionRange:n},fo=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,j=y.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:He(t.type,v),j);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){te(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return y=pl,pl=!1,y}function Kn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&ls(t,n,a)}o=o.next}while(o!==r)}}function Ao(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function us(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Fc(e){var t=e.alternate;t!==null&&(e.alternate=null,Fc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Je],delete t[cr],delete t[Qa],delete t[ep],delete t[tp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Dc(e){return e.tag===5||e.tag===3||e.tag===4}function ml(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ho));else if(r!==4&&(e=e.child,e!==null))for(cs(e,t,n),e=e.sibling;e!==null;)cs(e,t,n),e=e.sibling}function ds(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ds(e,t,n),e=e.sibling;e!==null;)ds(e,t,n),e=e.sibling}var ce=null,Ve=!1;function mt(e,t,n){for(n=n.child;n!==null;)Rc(e,t,n),n=n.sibling}function Rc(e,t,n){if(et&&typeof et.onCommitFiberUnmount=="function")try{et.onCommitFiberUnmount(Mo,n)}catch{}switch(n.tag){case 5:ge||dn(n,t);case 6:var r=ce,o=Ve;ce=null,mt(e,t,n),ce=r,Ve=o,ce!==null&&(Ve?(e=ce,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ce.removeChild(n.stateNode));break;case 18:ce!==null&&(Ve?(e=ce,n=n.stateNode,e.nodeType===8?ca(e.parentNode,n):e.nodeType===1&&ca(e,n),ar(e)):ca(ce,n.stateNode));break;case 4:r=ce,o=Ve,ce=n.stateNode.containerInfo,Ve=!0,mt(e,t,n),ce=r,Ve=o;break;case 0:case 11:case 14:case 15:if(!ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var a=o,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&ls(n,t,s),o=o.next}while(o!==r)}mt(e,t,n);break;case 1:if(!ge&&(dn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){te(n,t,l)}mt(e,t,n);break;case 21:mt(e,t,n);break;case 22:n.mode&1?(ge=(r=ge)||n.memoizedState!==null,mt(e,t,n),ge=r):mt(e,t,n);break;default:mt(e,t,n)}}function hl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new yp),t.forEach(function(r){var o=Ep.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ue(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:ce=l.stateNode,Ve=!1;break e;case 3:ce=l.stateNode.containerInfo,Ve=!0;break e;case 4:ce=l.stateNode.containerInfo,Ve=!0;break e}l=l.return}if(ce===null)throw Error(E(160));Rc(a,s,o),ce=null,Ve=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){te(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Oc(t,e),t=t.sibling}function Oc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ue(t,e),Ke(e),r&4){try{Kn(3,e,e.return),Ao(3,e)}catch(v){te(e,e.return,v)}try{Kn(5,e,e.return)}catch(v){te(e,e.return,v)}}break;case 1:Ue(t,e),Ke(e),r&512&&n!==null&&dn(n,n.return);break;case 5:if(Ue(t,e),Ke(e),r&512&&n!==null&&dn(n,n.return),e.flags&32){var o=e.stateNode;try{tr(o,"")}catch(v){te(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,s=n!==null?n.memoizedProps:a,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&su(o,a),Fa(l,s);var c=Fa(l,a);for(s=0;s<u.length;s+=2){var p=u[s],h=u[s+1];p==="style"?du(o,h):p==="dangerouslySetInnerHTML"?uu(o,h):p==="children"?tr(o,h):Ns(o,p,h,c)}switch(l){case"input":Pa(o,a);break;case"textarea":iu(o,a);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var k=a.value;k!=null?pn(o,!!a.multiple,k,!1):m!==!!a.multiple&&(a.defaultValue!=null?pn(o,!!a.multiple,a.defaultValue,!0):pn(o,!!a.multiple,a.multiple?[]:"",!1))}o[cr]=a}catch(v){te(e,e.return,v)}}break;case 6:if(Ue(t,e),Ke(e),r&4){if(e.stateNode===null)throw Error(E(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(v){te(e,e.return,v)}}break;case 3:if(Ue(t,e),Ke(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ar(t.containerInfo)}catch(v){te(e,e.return,v)}break;case 4:Ue(t,e),Ke(e);break;case 13:Ue(t,e),Ke(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(oi=ne())),r&4&&hl(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(ge=(c=ge)||p,Ue(t,e),ge=c):Ue(t,e),Ke(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&e.mode&1)for(_=e,p=e.child;p!==null;){for(h=_=p;_!==null;){switch(m=_,k=m.child,m.tag){case 0:case 11:case 14:case 15:Kn(4,m,m.return);break;case 1:dn(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){te(r,n,v)}}break;case 5:dn(m,m.return);break;case 22:if(m.memoizedState!==null){yl(h);continue}}k!==null?(k.return=m,_=k):yl(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{o=h.stateNode,c?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=h.stateNode,u=h.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=cu("display",s))}catch(v){te(e,e.return,v)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(v){te(e,e.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ue(t,e),Ke(e),r&4&&hl(e);break;case 21:break;default:Ue(t,e),Ke(e)}}function Ke(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Dc(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(tr(o,""),r.flags&=-33);var a=ml(e);ds(e,a,o);break;case 3:case 4:var s=r.stateNode.containerInfo,l=ml(e);cs(e,l,s);break;default:throw Error(E(161))}}catch(u){te(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xp(e,t,n){_=e,$c(e)}function $c(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var o=_,a=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||Br;if(!s){var l=o.alternate,u=l!==null&&l.memoizedState!==null||ge;l=Br;var c=ge;if(Br=s,(ge=u)&&!c)for(_=o;_!==null;)s=_,u=s.child,s.tag===22&&s.memoizedState!==null?vl(o):u!==null?(u.return=s,_=u):vl(o);for(;a!==null;)_=a,$c(a),a=a.sibling;_=o,Br=l,ge=c}gl(e)}else o.subtreeFlags&8772&&a!==null?(a.return=o,_=a):gl(e)}}function gl(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ge||Ao(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ge)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:He(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&el(t,a,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}el(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&ar(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}ge||t.flags&512&&us(t)}catch(m){te(t,t.return,m)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function yl(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function vl(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ao(4,t)}catch(u){te(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){te(t,o,u)}}var a=t.return;try{us(t)}catch(u){te(t,a,u)}break;case 5:var s=t.return;try{us(t)}catch(u){te(t,s,u)}}}catch(u){te(t,t.return,u)}if(t===e){_=null;break}var l=t.sibling;if(l!==null){l.return=t.return,_=l;break}_=t.return}}var wp=Math.ceil,Co=pt.ReactCurrentDispatcher,ni=pt.ReactCurrentOwner,$e=pt.ReactCurrentBatchConfig,$=0,ue=null,oe=null,de=0,ze=0,fn=Lt(0),se=0,gr=null,Xt=0,Wo=0,ri=0,qn=null,be=null,oi=0,Cn=1/0,nt=null,Eo=!1,fs=null,Et=null,Ur=!1,kt=null,To=0,Zn=0,ps=null,ro=-1,oo=0;function we(){return $&6?ne():ro!==-1?ro:ro=ne()}function Tt(e){return e.mode&1?$&2&&de!==0?de&-de:rp.transition!==null?(oo===0&&(oo=bu()),oo):(e=B,e!==0||(e=window.event,e=e===void 0?16:Pu(e.type)),e):1}function Ye(e,t,n,r){if(50<Zn)throw Zn=0,ps=null,Error(E(185));wr(e,n,r),(!($&2)||e!==ue)&&(e===ue&&(!($&2)&&(Wo|=n),se===4&&xt(e,de)),Te(e,r),n===1&&$===0&&!(t.mode&1)&&(Cn=ne()+500,Ro&&It()))}function Te(e,t){var n=e.callbackNode;nf(e,t);var r=co(e,e===ue?de:0);if(r===0)n!==null&&Ei(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ei(n),t===1)e.tag===0?np(xl.bind(null,e)):Qu(xl.bind(null,e)),Zf(function(){!($&6)&&It()}),n=null;else{switch(ju(r)){case 1:n=Ps;break;case 4:n=ku;break;case 16:n=uo;break;case 536870912:n=Su;break;default:n=uo}n=Xc(n,Ac.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ac(e,t){if(ro=-1,oo=0,$&6)throw Error(E(327));var n=e.callbackNode;if(vn()&&e.callbackNode!==n)return null;var r=co(e,e===ue?de:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=zo(e,r);else{t=r;var o=$;$|=2;var a=Bc();(ue!==e||de!==t)&&(nt=null,Cn=ne()+500,Bt(e,t));do try{bp();break}catch(l){Wc(e,l)}while(!0);Us(),Co.current=a,$=o,oe!==null?t=0:(ue=null,de=0,t=se)}if(t!==0){if(t===2&&(o=Aa(e),o!==0&&(r=o,t=ms(e,o))),t===1)throw n=gr,Bt(e,0),xt(e,r),Te(e,ne()),n;if(t===6)xt(e,r);else{if(o=e.current.alternate,!(r&30)&&!kp(o)&&(t=zo(e,r),t===2&&(a=Aa(e),a!==0&&(r=a,t=ms(e,a))),t===1))throw n=gr,Bt(e,0),xt(e,r),Te(e,ne()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:Ot(e,be,nt);break;case 3:if(xt(e,r),(r&130023424)===r&&(t=oi+500-ne(),10<t)){if(co(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){we(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ya(Ot.bind(null,e,be,nt),t);break}Ot(e,be,nt);break;case 4:if(xt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-Xe(r);a=1<<s,s=t[s],s>o&&(o=s),r&=~a}if(r=o,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wp(r/1960))-r,10<r){e.timeoutHandle=Ya(Ot.bind(null,e,be,nt),r);break}Ot(e,be,nt);break;case 5:Ot(e,be,nt);break;default:throw Error(E(329))}}}return Te(e,ne()),e.callbackNode===n?Ac.bind(null,e):null}function ms(e,t){var n=qn;return e.current.memoizedState.isDehydrated&&(Bt(e,t).flags|=256),e=zo(e,t),e!==2&&(t=be,be=n,t!==null&&hs(t)),e}function hs(e){be===null?be=e:be.push.apply(be,e)}function kp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!Qe(a(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xt(e,t){for(t&=~ri,t&=~Wo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Xe(t),r=1<<n;e[n]=-1,t&=~r}}function xl(e){if($&6)throw Error(E(327));vn();var t=co(e,0);if(!(t&1))return Te(e,ne()),null;var n=zo(e,t);if(e.tag!==0&&n===2){var r=Aa(e);r!==0&&(t=r,n=ms(e,r))}if(n===1)throw n=gr,Bt(e,0),xt(e,t),Te(e,ne()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ot(e,be,nt),Te(e,ne()),null}function ai(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(Cn=ne()+500,Ro&&It())}}function Yt(e){kt!==null&&kt.tag===0&&!($&6)&&vn();var t=$;$|=1;var n=$e.transition,r=B;try{if($e.transition=null,B=1,e)return e()}finally{B=r,$e.transition=n,$=t,!($&6)&&It()}}function si(){ze=fn.current,Y(fn)}function Bt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qf(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(As(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&go();break;case 3:jn(),Y(Ce),Y(ye),Qs();break;case 5:Ys(r);break;case 4:jn();break;case 13:Y(Z);break;case 19:Y(Z);break;case 10:Hs(r.type._context);break;case 22:case 23:si()}n=n.return}if(ue=e,oe=e=zt(e.current,null),de=ze=t,se=0,gr=null,ri=Wo=Xt=0,be=qn=null,At!==null){for(t=0;t<At.length;t++)if(n=At[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,a=n.pending;if(a!==null){var s=a.next;a.next=o,r.next=s}n.pending=r}At=null}return e}function Wc(e,t){do{var n=oe;try{if(Us(),eo.current=No,jo){for(var r=J.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}jo=!1}if(Gt=0,le=ae=J=null,Qn=!1,pr=0,ni.current=null,n===null||n.return===null){se=1,gr=t,oe=null;break}e:{var a=e,s=n.return,l=n,u=t;if(t=de,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,p=l,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var k=sl(s);if(k!==null){k.flags&=-257,il(k,s,l,a,t),k.mode&1&&al(a,c,t),t=k,u=c;var y=t.updateQueue;if(y===null){var v=new Set;v.add(u),t.updateQueue=v}else y.add(u);break e}else{if(!(t&1)){al(a,c,t),ii();break e}u=Error(E(426))}}else if(q&&l.mode&1){var j=sl(s);if(j!==null){!(j.flags&65536)&&(j.flags|=256),il(j,s,l,a,t),Ws(Nn(u,l));break e}}a=u=Nn(u,l),se!==4&&(se=2),qn===null?qn=[a]:qn.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var f=jc(a,u,t);Ji(a,f);break e;case 1:l=u;var d=a.type,g=a.stateNode;if(!(a.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Et===null||!Et.has(g)))){a.flags|=65536,t&=-t,a.lanes|=t;var w=Nc(a,l,t);Ji(a,w);break e}}a=a.return}while(a!==null)}Hc(n)}catch(N){t=N,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(!0)}function Bc(){var e=Co.current;return Co.current=No,e===null?No:e}function ii(){(se===0||se===3||se===2)&&(se=4),ue===null||!(Xt&268435455)&&!(Wo&268435455)||xt(ue,de)}function zo(e,t){var n=$;$|=2;var r=Bc();(ue!==e||de!==t)&&(nt=null,Bt(e,t));do try{Sp();break}catch(o){Wc(e,o)}while(!0);if(Us(),$=n,Co.current=r,oe!==null)throw Error(E(261));return ue=null,de=0,se}function Sp(){for(;oe!==null;)Uc(oe)}function bp(){for(;oe!==null&&!Xd();)Uc(oe)}function Uc(e){var t=Gc(e.alternate,e,ze);e.memoizedProps=e.pendingProps,t===null?Hc(e):oe=t,ni.current=null}function Hc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=gp(n,t),n!==null){n.flags&=32767,oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,oe=null;return}}else if(n=hp(n,t,ze),n!==null){oe=n;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);se===0&&(se=5)}function Ot(e,t,n){var r=B,o=$e.transition;try{$e.transition=null,B=1,jp(e,t,n,r)}finally{$e.transition=o,B=r}return null}function jp(e,t,n,r){do vn();while(kt!==null);if($&6)throw Error(E(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(rf(e,a),e===ue&&(oe=ue=null,de=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ur||(Ur=!0,Xc(uo,function(){return vn(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=$e.transition,$e.transition=null;var s=B;B=1;var l=$;$|=4,ni.current=null,vp(e,n),Oc(n,e),Hf(Ga),fo=!!Va,Ga=Va=null,e.current=n,xp(n),Yd(),$=l,B=s,$e.transition=a}else e.current=n;if(Ur&&(Ur=!1,kt=e,To=o),a=e.pendingLanes,a===0&&(Et=null),qd(n.stateNode),Te(e,ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Eo)throw Eo=!1,e=fs,fs=null,e;return To&1&&e.tag!==0&&vn(),a=e.pendingLanes,a&1?e===ps?Zn++:(Zn=0,ps=e):Zn=0,It(),null}function vn(){if(kt!==null){var e=ju(To),t=$e.transition,n=B;try{if($e.transition=null,B=16>e?16:e,kt===null)var r=!1;else{if(e=kt,kt=null,To=0,$&6)throw Error(E(331));var o=$;for($|=4,_=e.current;_!==null;){var a=_,s=a.child;if(_.flags&16){var l=a.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(_=c;_!==null;){var p=_;switch(p.tag){case 0:case 11:case 15:Kn(8,p,a)}var h=p.child;if(h!==null)h.return=p,_=h;else for(;_!==null;){p=_;var m=p.sibling,k=p.return;if(Fc(p),p===c){_=null;break}if(m!==null){m.return=k,_=m;break}_=k}}}var y=a.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var j=v.sibling;v.sibling=null,v=j}while(v!==null)}}_=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,_=s;else e:for(;_!==null;){if(a=_,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Kn(9,a,a.return)}var f=a.sibling;if(f!==null){f.return=a.return,_=f;break e}_=a.return}}var d=e.current;for(_=d;_!==null;){s=_;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,_=g;else e:for(s=d;_!==null;){if(l=_,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ao(9,l)}}catch(N){te(l,l.return,N)}if(l===s){_=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,_=w;break e}_=l.return}}if($=o,It(),et&&typeof et.onPostCommitFiberRoot=="function")try{et.onPostCommitFiberRoot(Mo,e)}catch{}r=!0}return r}finally{B=n,$e.transition=t}}return!1}function wl(e,t,n){t=Nn(n,t),t=jc(e,t,1),e=Ct(e,t,1),t=we(),e!==null&&(wr(e,1,t),Te(e,t))}function te(e,t,n){if(e.tag===3)wl(e,e,n);else for(;t!==null;){if(t.tag===3){wl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Et===null||!Et.has(r))){e=Nn(n,e),e=Nc(t,e,1),t=Ct(t,e,1),e=we(),t!==null&&(wr(t,1,e),Te(t,e));break}}t=t.return}}function Np(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=we(),e.pingedLanes|=e.suspendedLanes&n,ue===e&&(de&n)===n&&(se===4||se===3&&(de&130023424)===de&&500>ne()-oi?Bt(e,0):ri|=n),Te(e,t)}function Vc(e,t){t===0&&(e.mode&1?(t=Lr,Lr<<=1,!(Lr&130023424)&&(Lr=4194304)):t=1);var n=we();e=dt(e,t),e!==null&&(wr(e,t,n),Te(e,n))}function Cp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Vc(e,n)}function Ep(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),Vc(e,n)}var Gc;Gc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ce.current)Ne=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ne=!1,mp(e,t,n);Ne=!!(e.flags&131072)}else Ne=!1,q&&t.flags&1048576&&Ku(t,xo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;no(e,t),e=t.pendingProps;var o=kn(t,ye.current);yn(t,n),o=qs(null,t,r,e,o,n);var a=Zs();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(r)?(a=!0,yo(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Gs(t),o.updater=$o,t.stateNode=o,o._reactInternals=t,ts(t,r,e,n),t=os(null,t,r,!0,a,n)):(t.tag=0,q&&a&&$s(t),ve(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(no(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=zp(r),e=He(r,e),o){case 0:t=rs(null,t,r,e,n);break e;case 1:t=cl(null,t,r,e,n);break e;case 11:t=ll(null,t,r,e,n);break e;case 14:t=ul(null,t,r,He(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),rs(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),cl(e,t,r,o,n);case 3:e:{if(zc(t),e===null)throw Error(E(387));r=t.pendingProps,a=t.memoizedState,o=a.element,nc(e,t),So(t,r,null,n);var s=t.memoizedState;if(r=s.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=Nn(Error(E(423)),t),t=dl(e,t,r,n,o);break e}else if(r!==o){o=Nn(Error(E(424)),t),t=dl(e,t,r,n,o);break e}else for(Pe=Nt(t.stateNode.containerInfo.firstChild),_e=t,q=!0,Ge=null,n=ec(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Sn(),r===o){t=ft(e,t,n);break e}ve(e,t,r,n)}t=t.child}return t;case 5:return rc(t),e===null&&Za(t),r=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,s=o.children,Xa(r,o)?s=null:a!==null&&Xa(r,a)&&(t.flags|=32),Tc(e,t),ve(e,t,s,n),t.child;case 6:return e===null&&Za(t),null;case 13:return Pc(e,t,n);case 4:return Xs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=bn(t,null,r,n):ve(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),ll(e,t,r,o,n);case 7:return ve(e,t,t.pendingProps,n),t.child;case 8:return ve(e,t,t.pendingProps.children,n),t.child;case 12:return ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,s=o.value,H(wo,r._currentValue),r._currentValue=s,a!==null)if(Qe(a.value,s)){if(a.children===o.children&&!Ce.current){t=ft(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){s=a.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(a.tag===1){u=lt(-1,n&-n),u.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?u.next=u:(u.next=p.next,p.next=u),c.pending=u}}a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),Ja(a.return,n,t),l.lanes|=n;break}u=u.next}}else if(a.tag===10)s=a.type===t.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(E(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ja(s,n,t),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}ve(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,yn(t,n),o=We(o),r=r(o),t.flags|=1,ve(e,t,r,n),t.child;case 14:return r=t.type,o=He(r,t.pendingProps),o=He(r.type,o),ul(e,t,r,o,n);case 15:return Cc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),no(e,t),t.tag=1,Ee(r)?(e=!0,yo(t)):e=!1,yn(t,n),bc(t,r,o),ts(t,r,o,n),os(null,t,r,!0,e,n);case 19:return _c(e,t,n);case 22:return Ec(e,t,n)}throw Error(E(156,t.tag))};function Xc(e,t){return wu(e,t)}function Tp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Re(e,t,n,r){return new Tp(e,t,n,r)}function li(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zp(e){if(typeof e=="function")return li(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Es)return 11;if(e===Ts)return 14}return 2}function zt(e,t){var n=e.alternate;return n===null?(n=Re(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ao(e,t,n,r,o,a){var s=2;if(r=e,typeof e=="function")li(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case tn:return Ut(n.children,o,a,t);case Cs:s=8,o|=8;break;case Na:return e=Re(12,n,t,o|2),e.elementType=Na,e.lanes=a,e;case Ca:return e=Re(13,n,t,o),e.elementType=Ca,e.lanes=a,e;case Ea:return e=Re(19,n,t,o),e.elementType=Ea,e.lanes=a,e;case ru:return Bo(n,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case tu:s=10;break e;case nu:s=9;break e;case Es:s=11;break e;case Ts:s=14;break e;case gt:s=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Re(s,n,t,o),t.elementType=e,t.type=r,t.lanes=a,t}function Ut(e,t,n,r){return e=Re(7,e,r,t),e.lanes=n,e}function Bo(e,t,n,r){return e=Re(22,e,r,t),e.elementType=ru,e.lanes=n,e.stateNode={isHidden:!1},e}function va(e,t,n){return e=Re(6,e,null,t),e.lanes=n,e}function xa(e,t,n){return t=Re(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Pp(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jo(0),this.expirationTimes=Jo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ui(e,t,n,r,o,a,s,l,u){return e=new Pp(e,t,n,l,u),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Re(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gs(a),e}function _p(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:en,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Yc(e){if(!e)return _t;e=e._reactInternals;e:{if(Kt(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(Ee(n))return Yu(e,n,t)}return t}function Qc(e,t,n,r,o,a,s,l,u){return e=ui(n,r,!0,e,o,a,s,l,u),e.context=Yc(null),n=e.current,r=we(),o=Tt(n),a=lt(r,o),a.callback=t??null,Ct(n,a,o),e.current.lanes=o,wr(e,o,r),Te(e,r),e}function Uo(e,t,n,r){var o=t.current,a=we(),s=Tt(o);return n=Yc(n),t.context===null?t.context=n:t.pendingContext=n,t=lt(a,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ct(o,t,s),e!==null&&(Ye(e,o,s,a),Jr(e,o,s)),s}function Po(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function kl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ci(e,t){kl(e,t),(e=e.alternate)&&kl(e,t)}function Mp(){return null}var Kc=typeof reportError=="function"?reportError:function(e){console.error(e)};function di(e){this._internalRoot=e}Ho.prototype.render=di.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Uo(e,t,null,null)};Ho.prototype.unmount=di.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Yt(function(){Uo(null,e,null,null)}),t[ct]=null}};function Ho(e){this._internalRoot=e}Ho.prototype.unstable_scheduleHydration=function(e){if(e){var t=Eu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<vt.length&&t!==0&&t<vt[n].priority;n++);vt.splice(n,0,e),n===0&&zu(e)}};function fi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Vo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Sl(){}function Lp(e,t,n,r,o){if(o){if(typeof r=="function"){var a=r;r=function(){var c=Po(s);a.call(c)}}var s=Qc(t,r,e,0,null,!1,!1,"",Sl);return e._reactRootContainer=s,e[ct]=s.current,lr(e.nodeType===8?e.parentNode:e),Yt(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var c=Po(u);l.call(c)}}var u=ui(e,0,!1,null,null,!1,!1,"",Sl);return e._reactRootContainer=u,e[ct]=u.current,lr(e.nodeType===8?e.parentNode:e),Yt(function(){Uo(t,u,n,r)}),u}function Go(e,t,n,r,o){var a=n._reactRootContainer;if(a){var s=a;if(typeof o=="function"){var l=o;o=function(){var u=Po(s);l.call(u)}}Uo(t,s,e,o)}else s=Lp(n,t,e,o,r);return Po(s)}Nu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Wn(t.pendingLanes);n!==0&&(_s(t,n|1),Te(t,ne()),!($&6)&&(Cn=ne()+500,It()))}break;case 13:Yt(function(){var r=dt(e,1);if(r!==null){var o=we();Ye(r,e,1,o)}}),ci(e,1)}};Ms=function(e){if(e.tag===13){var t=dt(e,134217728);if(t!==null){var n=we();Ye(t,e,134217728,n)}ci(e,134217728)}};Cu=function(e){if(e.tag===13){var t=Tt(e),n=dt(e,t);if(n!==null){var r=we();Ye(n,e,t,r)}ci(e,t)}};Eu=function(){return B};Tu=function(e,t){var n=B;try{return B=e,t()}finally{B=n}};Ra=function(e,t,n){switch(t){case"input":if(Pa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Do(r);if(!o)throw Error(E(90));au(r),Pa(r,o)}}}break;case"textarea":iu(e,n);break;case"select":t=n.value,t!=null&&pn(e,!!n.multiple,t,!1)}};mu=ai;hu=Yt;var Ip={usingClientEntryPoint:!1,Events:[Sr,an,Do,fu,pu,ai]},On={findFiberByHostInstance:$t,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Fp={bundleType:On.bundleType,version:On.version,rendererPackageName:On.rendererPackageName,rendererConfig:On.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=vu(e),e===null?null:e.stateNode},findFiberByHostInstance:On.findFiberByHostInstance||Mp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hr.isDisabled&&Hr.supportsFiber)try{Mo=Hr.inject(Fp),et=Hr}catch{}}Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ip;Le.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fi(t))throw Error(E(200));return _p(e,t,null,n)};Le.createRoot=function(e,t){if(!fi(e))throw Error(E(299));var n=!1,r="",o=Kc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ui(e,1,!1,null,null,n,!1,r,o),e[ct]=t.current,lr(e.nodeType===8?e.parentNode:e),new di(t)};Le.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=vu(t),e=e===null?null:e.stateNode,e};Le.flushSync=function(e){return Yt(e)};Le.hydrate=function(e,t,n){if(!Vo(t))throw Error(E(200));return Go(null,e,t,!0,n)};Le.hydrateRoot=function(e,t,n){if(!fi(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,o=!1,a="",s=Kc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Qc(t,null,e,1,n??null,o,!1,a,s),e[ct]=t.current,lr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ho(t)};Le.render=function(e,t,n){if(!Vo(t))throw Error(E(200));return Go(null,e,t,!1,n)};Le.unmountComponentAtNode=function(e){if(!Vo(e))throw Error(E(40));return e._reactRootContainer?(Yt(function(){Go(null,null,e,!1,function(){e._reactRootContainer=null,e[ct]=null})}),!0):!1};Le.unstable_batchedUpdates=ai;Le.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Vo(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Go(e,t,n,!1,r)};Le.version="18.3.1-next-f1338f8080-20240426";function qc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qc)}catch(e){console.error(e)}}qc(),ql.exports=Le;var Dp=ql.exports,bl=Dp;ba.createRoot=bl.createRoot,ba.hydrateRoot=bl.hydrateRoot;const Rp={},jl=e=>{let t;const n=new Set,r=(p,h)=>{const m=typeof p=="function"?p(t):p;if(!Object.is(m,t)){const k=t;t=h??(typeof m!="object"||m===null)?m:Object.assign({},t,m),n.forEach(y=>y(t,k))}},o=()=>t,u={setState:r,getState:o,getInitialState:()=>c,subscribe:p=>(n.add(p),()=>n.delete(p)),destroy:()=>{(Rp?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=t=e(r,o,u);return u},Op=e=>e?jl(e):jl;var Zc={exports:{}},Jc={},ed={exports:{}},td={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var En=S;function $p(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ap=typeof Object.is=="function"?Object.is:$p,Wp=En.useState,Bp=En.useEffect,Up=En.useLayoutEffect,Hp=En.useDebugValue;function Vp(e,t){var n=t(),r=Wp({inst:{value:n,getSnapshot:t}}),o=r[0].inst,a=r[1];return Up(function(){o.value=n,o.getSnapshot=t,wa(o)&&a({inst:o})},[e,n,t]),Bp(function(){return wa(o)&&a({inst:o}),e(function(){wa(o)&&a({inst:o})})},[e]),Hp(n),n}function wa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ap(e,n)}catch{return!0}}function Gp(e,t){return t()}var Xp=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Gp:Vp;td.useSyncExternalStore=En.useSyncExternalStore!==void 0?En.useSyncExternalStore:Xp;ed.exports=td;var Yp=ed.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xo=S,Qp=Yp;function Kp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qp=typeof Object.is=="function"?Object.is:Kp,Zp=Qp.useSyncExternalStore,Jp=Xo.useRef,em=Xo.useEffect,tm=Xo.useMemo,nm=Xo.useDebugValue;Jc.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var a=Jp(null);if(a.current===null){var s={hasValue:!1,value:null};a.current=s}else s=a.current;a=tm(function(){function u(k){if(!c){if(c=!0,p=k,k=r(k),o!==void 0&&s.hasValue){var y=s.value;if(o(y,k))return h=y}return h=k}if(y=h,qp(p,k))return y;var v=r(k);return o!==void 0&&o(y,v)?(p=k,y):(p=k,h=v)}var c=!1,p,h,m=n===void 0?null:n;return[function(){return u(t())},m===null?void 0:function(){return u(m())}]},[t,n,r,o]);var l=Zp(e,a[0],a[1]);return em(function(){s.hasValue=!0,s.value=l},[l]),nm(l),l};Zc.exports=Jc;var rm=Zc.exports;const om=Ol(rm),nd={},{useDebugValue:am}=Ql,{useSyncExternalStoreWithSelector:sm}=om;let Nl=!1;const im=e=>e;function lm(e,t=im,n){(nd?"production":void 0)!=="production"&&n&&!Nl&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Nl=!0);const r=sm(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return am(r),r}const Cl=e=>{(nd?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?Op(e):e,n=(r,o)=>lm(t,r,o);return Object.assign(n,t),n},jr=e=>e?Cl(e):Cl,um={};function cm(e,t){let n;try{n=e()}catch{return}return{getItem:o=>{var a;const s=u=>u===null?null:JSON.parse(u,void 0),l=(a=n.getItem(o))!=null?a:null;return l instanceof Promise?l.then(s):s(l)},setItem:(o,a)=>n.setItem(o,JSON.stringify(a,void 0)),removeItem:o=>n.removeItem(o)}}const yr=e=>t=>{try{const n=e(t);return n instanceof Promise?n:{then(r){return yr(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return yr(r)(n)}}}},dm=(e,t)=>(n,r,o)=>{let a={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:j=>j,version:0,merge:(j,f)=>({...f,...j}),...t},s=!1;const l=new Set,u=new Set;let c;try{c=a.getStorage()}catch{}if(!c)return e((...j)=>{console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),n(...j)},r,o);const p=yr(a.serialize),h=()=>{const j=a.partialize({...r()});let f;const d=p({state:j,version:a.version}).then(g=>c.setItem(a.name,g)).catch(g=>{f=g});if(f)throw f;return d},m=o.setState;o.setState=(j,f)=>{m(j,f),h()};const k=e((...j)=>{n(...j),h()},r,o);let y;const v=()=>{var j;if(!c)return;s=!1,l.forEach(d=>d(r()));const f=((j=a.onRehydrateStorage)==null?void 0:j.call(a,r()))||void 0;return yr(c.getItem.bind(c))(a.name).then(d=>{if(d)return a.deserialize(d)}).then(d=>{if(d)if(typeof d.version=="number"&&d.version!==a.version){if(a.migrate)return a.migrate(d.state,d.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return d.state}).then(d=>{var g;return y=a.merge(d,(g=r())!=null?g:k),n(y,!0),h()}).then(()=>{f==null||f(y,void 0),s=!0,u.forEach(d=>d(y))}).catch(d=>{f==null||f(void 0,d)})};return o.persist={setOptions:j=>{a={...a,...j},j.getStorage&&(c=j.getStorage())},clearStorage:()=>{c==null||c.removeItem(a.name)},getOptions:()=>a,rehydrate:()=>v(),hasHydrated:()=>s,onHydrate:j=>(l.add(j),()=>{l.delete(j)}),onFinishHydration:j=>(u.add(j),()=>{u.delete(j)})},v(),y||k},fm=(e,t)=>(n,r,o)=>{let a={storage:cm(()=>localStorage),partialize:v=>v,version:0,merge:(v,j)=>({...j,...v}),...t},s=!1;const l=new Set,u=new Set;let c=a.storage;if(!c)return e((...v)=>{console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),n(...v)},r,o);const p=()=>{const v=a.partialize({...r()});return c.setItem(a.name,{state:v,version:a.version})},h=o.setState;o.setState=(v,j)=>{h(v,j),p()};const m=e((...v)=>{n(...v),p()},r,o);o.getInitialState=()=>m;let k;const y=()=>{var v,j;if(!c)return;s=!1,l.forEach(d=>{var g;return d((g=r())!=null?g:m)});const f=((j=a.onRehydrateStorage)==null?void 0:j.call(a,(v=r())!=null?v:m))||void 0;return yr(c.getItem.bind(c))(a.name).then(d=>{if(d)if(typeof d.version=="number"&&d.version!==a.version){if(a.migrate)return[!0,a.migrate(d.state,d.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,d.state];return[!1,void 0]}).then(d=>{var g;const[w,N]=d;if(k=a.merge(N,(g=r())!=null?g:m),n(k,!0),w)return p()}).then(()=>{f==null||f(k,void 0),k=r(),s=!0,u.forEach(d=>d(k))}).catch(d=>{f==null||f(void 0,d)})};return o.persist={setOptions:v=>{a={...a,...v},v.storage&&(c=v.storage)},clearStorage:()=>{c==null||c.removeItem(a.name)},getOptions:()=>a,rehydrate:()=>y(),hasHydrated:()=>s,onHydrate:v=>(l.add(v),()=>{l.delete(v)}),onFinishHydration:v=>(u.add(v),()=>{u.delete(v)})},a.skipHydration||y(),k||m},pm=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?((um?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),dm(e,t)):fm(e,t),pi=pm,El={sunny:40,rainy:25,stormy:10,snowy:5,foggy:15,rainbow:5};function Tl(){const e=Object.values(El).reduce((n,r)=>n+r,0);let t=Math.random()*e;for(const[n,r]of Object.entries(El))if(t-=r,t<=0)return n;return"sunny"}const je=jr()(pi((e,t)=>({phase:"menu",weather:"sunny",dayNumber:1,timeOfDay:0,isPaused:!1,lastUpdateTime:Date.now(),activeCrows:[],hasScarecrow:!1,setPhase:n=>e({phase:n}),setWeather:n=>e({weather:n}),advanceDay:()=>e(n=>({dayNumber:n.dayNumber+1,timeOfDay:0,weather:Tl()})),updateTimeOfDay:n=>e(r=>{const o=r.timeOfDay+n;return o>=100?{timeOfDay:0,dayNumber:r.dayNumber+1,weather:Tl()}:{timeOfDay:o}}),togglePause:()=>e(n=>({isPaused:!n.isPaused,phase:n.isPaused?"playing":"paused"})),startGame:()=>e({phase:"playing",isPaused:!1,lastUpdateTime:Date.now()}),endGame:()=>e({phase:"gameover",isPaused:!1}),resetGame:()=>e({phase:"menu",weather:"sunny",dayNumber:1,timeOfDay:0,isPaused:!1,lastUpdateTime:Date.now(),activeCrows:[]}),addCrow:n=>e(r=>({activeCrows:[...r.activeCrows,n]})),removeCrow:n=>e(r=>({activeCrows:r.activeCrows.filter(o=>o.id!==n)})),updateCrow:(n,r)=>e(o=>({activeCrows:o.activeCrows.map(a=>a.id===n?{...a,...r}:a)})),clearCrows:()=>e({activeCrows:[]}),setScarecrow:n=>e({hasScarecrow:n})}),{name:"game-storage",partialize:e=>({weather:e.weather,dayNumber:e.dayNumber,hasScarecrow:e.hasScarecrow})}));function mm(){return`notif-${Date.now()}-${Math.random().toString(36).substr(2,9)}`}const Ft=jr((e,t)=>({currentScreen:"title",isModalOpen:!1,modalContent:null,notifications:[],isLoading:!1,showTutorial:!0,setScreen:n=>{e({currentScreen:n})},openModal:n=>{e({isModalOpen:!0,modalContent:n})},closeModal:()=>{e({isModalOpen:!1,modalContent:null})},addNotification:(n,r="info",o=3e3)=>{const a={id:mm(),message:n,type:r,duration:o,createdAt:Date.now()};e(s=>({notifications:[...s.notifications,a]})),o>0&&setTimeout(()=>{t().removeNotification(a.id)},o)},removeNotification:n=>{e(r=>({notifications:r.notifications.filter(o=>o.id!==n)}))},clearNotifications:()=>{e({notifications:[]})},setLoading:n=>{e({isLoading:n})},setShowTutorial:n=>{e({showTutorial:n})},resetUI:()=>{e({currentScreen:"title",isModalOpen:!1,modalContent:null,notifications:[],isLoading:!1})}})),Ae={carrot:{id:"carrot",name:"紅蘿蔔",emoji:"🥕",difficulty:1,minWordLength:3,maxWordLength:4,growthTime:3e4,harvestTimeLimit:8,sellPrice:5},onion:{id:"onion",name:"洋蔥",emoji:"🧅",difficulty:1,minWordLength:3,maxWordLength:5,growthTime:45e3,harvestTimeLimit:8,sellPrice:8},tomato:{id:"tomato",name:"番茄",emoji:"🍅",difficulty:2,minWordLength:4,maxWordLength:5,growthTime:6e4,harvestTimeLimit:7,sellPrice:10},lettuce:{id:"lettuce",name:"生菜",emoji:"🥬",difficulty:2,minWordLength:4,maxWordLength:6,growthTime:5e4,harvestTimeLimit:7,sellPrice:12},corn:{id:"corn",name:"粟米",emoji:"🌽",difficulty:3,minWordLength:5,maxWordLength:7,growthTime:9e4,harvestTimeLimit:6,sellPrice:20},pumpkin:{id:"pumpkin",name:"南瓜",emoji:"🎃",difficulty:3,minWordLength:6,maxWordLength:8,growthTime:15e4,harvestTimeLimit:5,sellPrice:40}},vr={carrot:2,onion:3,tomato:5,lettuce:6,corn:10,pumpkin:20},zl=["carrot","onion"],ht={rows:3,cols:4},Pl={rows:5,cols:6},_l=50,hm={carrot:5,onion:3},Vr={3:["cat","dog","sun","red","big","run","hat","cup","bed","pen"],4:["tree","farm","corn","seed","grow","rain","soil","leaf","root","stem"],5:["plant","water","earth","green","fruit","bloom","field","grain","wheat","berry"],6:["garden","flower","tomato","carrot","pepper","squash","sprout","branch","forest","meadow"],7:["harvest","pumpkin","farming","growing","seedling","cabbage","sunlight","organic","fertile","compost"],8:["gardener","cucumber","eggplant","broccoli","mushroom","radishes","beetroot","zucchini","parsley","spinach"]};function gm(e,t){const n=Object.keys(Vr).map(Number).filter(a=>a>=e&&a<=t);if(n.length===0){const s=Object.keys(Vr).map(Number).reduce((u,c)=>{const p=Math.min(Math.abs(u-e),Math.abs(u-t));return Math.min(Math.abs(c-e),Math.abs(c-t))<p?c:u}),l=Vr[s];return l[Math.floor(Math.random()*l.length)]}const r=n[Math.floor(Math.random()*n.length)],o=Vr[r];return o[Math.floor(Math.random()*o.length)]}function Un(e){return gm(e.minWordLength,e.maxWordLength)}function ym(e,t){const n=t.split("").map((a,s)=>a===e[s]),r=t.length===e.length,o=r&&n.every(a=>a);return{isComplete:r,isCorrect:o,correctChars:n}}function rd(e,t,n,r){const o=(t-e)/6e4,a=n/5,s=o>0?Math.round(a/o):0,l=n+r,u=l>0?Math.round(n/l*100):100;return{wpm:s,accuracy:u}}const Gr={sunny:40,rainy:25,stormy:10,snowy:5,foggy:15,rainbow:5},Ml={sunny:{growthMultiplier:1,harvestTimeMultiplier:1,wateringEffect:"none",typingEffect:"normal"},rainy:{growthMultiplier:1.2,harvestTimeMultiplier:1,wateringEffect:"auto",typingEffect:"normal"},stormy:{growthMultiplier:1,harvestTimeMultiplier:1,wateringEffect:"auto",typingEffect:"shaking"},snowy:{growthMultiplier:.8,harvestTimeMultiplier:.5,wateringEffect:"none",typingEffect:"normal"},foggy:{growthMultiplier:1,harvestTimeMultiplier:1,wateringEffect:"none",typingEffect:"foggy"},rainbow:{growthMultiplier:1,harvestTimeMultiplier:2,wateringEffect:"none",typingEffect:"normal"}},gs={sunny:{emoji:"☀️",name:"Sunny",effect:"Normal conditions"},rainy:{emoji:"🌧️",name:"Rainy",effect:"Crops grow 20% faster, auto-water"},stormy:{emoji:"⛈️",name:"Stormy",effect:"Text shakes while typing!"},snowy:{emoji:"❄️",name:"Snowy",effect:"Time limits reduced by 50%"},foggy:{emoji:"🌫️",name:"Foggy",effect:"Some letters hidden/blurred"},rainbow:{emoji:"🌈",name:"Rainbow",effect:"Harvest time doubled!"}};class vm{constructor(){pe(this,"weatherChangeInterval",null);pe(this,"isRunning",!1);pe(this,"lastWeatherChange",0);pe(this,"MIN_CHANGE_INTERVAL",2*60*1e3);pe(this,"MAX_CHANGE_INTERVAL",5*60*1e3)}start(){this.isRunning||(this.isRunning=!0,this.lastWeatherChange=Date.now(),this.scheduleNextWeatherChange(),console.log("[WeatherSystem] Started"))}stop(){this.isRunning=!1,this.weatherChangeInterval!==null&&(clearTimeout(this.weatherChangeInterval),this.weatherChangeInterval=null),console.log("[WeatherSystem] Stopped")}scheduleNextWeatherChange(){if(!this.isRunning)return;const t=this.MIN_CHANGE_INTERVAL+Math.random()*(this.MAX_CHANGE_INTERVAL-this.MIN_CHANGE_INTERVAL);this.weatherChangeInterval=window.setTimeout(()=>{this.changeWeather(),this.scheduleNextWeatherChange()},t)}changeWeather(){const t=this.getRandomWeather();this.setWeather(t),this.lastWeatherChange=Date.now(),console.log(`[WeatherSystem] Weather changed to: ${t}`)}setWeather(t){je.getState().setWeather(t)}getCurrentWeather(){return je.getState().weather}getCurrentEffects(){const t=this.getCurrentWeather();return Ml[t]}getEffectsForWeather(t){return Ml[t]}getWeatherDescription(t){return gs[t]}getRandomWeather(){const t=Object.values(Gr).reduce((r,o)=>r+o,0);let n=Math.random()*t;for(const[r,o]of Object.entries(Gr))if(n-=o,n<=0)return r;return"sunny"}getForecast(){const t=Object.values(Gr).reduce((n,r)=>n+r,0);return Object.entries(Gr).map(([n,r])=>({weather:n,probability:Math.round(r/t*100)})).sort((n,r)=>r.probability-n.probability).slice(0,3)}getTimeUntilChange(){const t=Date.now()-this.lastWeatherChange,n=this.MIN_CHANGE_INTERVAL-t;return Math.max(0,n)}hasAutoWatering(){return this.getCurrentEffects().wateringEffect==="auto"}getGrowthMultiplier(){return this.getCurrentEffects().growthMultiplier}getHarvestTimeMultiplier(){return this.getCurrentEffects().harvestTimeMultiplier}getTypingEffect(){return this.getCurrentEffects().typingEffect}}const xn=new vm,Xr=[{rows:3,cols:4},{rows:3,cols:5},{rows:4,cols:5},{rows:5,cols:6}];function ka(e,t){return Array(e).fill(null).map(()=>Array(t).fill(null))}function xm(e,t){return t<=0?"withered":e>=120?"overripe":e>=100?"mature":e>=60?"growing":e>=30?"sprout":"seed"}function wm(){return`crop-${Date.now()}-${Math.random().toString(36).substr(2,9)}`}const xe=jr()(pi((e,t)=>({grid:ka(ht.rows,ht.cols),gridSize:{...ht},selectedSlot:null,expansionLevel:0,hasSprinkler:!1,hasScarecrow:!1,initializeGrid:(n=ht.rows,r=ht.cols)=>{e({grid:ka(n,r),gridSize:{rows:n,cols:r},selectedSlot:null})},plantCrop:(n,r,o)=>{const{grid:a,gridSize:s}=t();if(n<0||n>=s.rows||r<0||r>=s.cols||a[n][r]!==null)return!1;const l={id:wm(),cropType:o,plantedAt:Date.now(),growthStage:"seed",waterLevel:50,fertilizerLevel:0,health:100,wordToHarvest:Un(o),growthProgress:0},u=a.map((c,p)=>c.map((h,m)=>p===n&&m===r?l:h));return e({grid:u}),!0},harvestCrop:(n,r)=>{const{grid:o,gridSize:a}=t();if(n<0||n>=a.rows||r<0||r>=a.cols)return null;const s=o[n][r];if(!s||s.growthStage!=="mature")return null;const l=o.map((u,c)=>u.map((p,h)=>c===n&&h===r?null:p));return e({grid:l,selectedSlot:null}),s},removeCrop:(n,r)=>{const{grid:o,gridSize:a}=t();if(n<0||n>=a.rows||r<0||r>=a.cols)return;const s=o.map((l,u)=>l.map((c,p)=>u===n&&p===r?null:c));e({grid:s})},updateCropGrowth:n=>{const{grid:r,hasSprinkler:o}=t(),a=xn.getCurrentEffects(),s=a.growthMultiplier,l=a.wateringEffect==="auto"||o,u=r.map(c=>c.map(p=>{if(!p)return null;const h=p.waterLevel>30?1:.5,m=1+p.fertilizerLevel/200,k=n/p.cropType.growthTime*100*h*m*s,y=l?n/2e4:n/1e4,v=l?n/15e3:0,j=Math.min(150,p.growthProgress+k),f=Math.min(100,Math.max(0,p.waterLevel-y+v)),d=Math.max(0,p.fertilizerLevel-n/6e4);let g=p.health;return f<=0&&(g=Math.max(0,p.health-n/5e3)),j>120&&(g=Math.max(0,p.health-n/1e4)),{...p,growthProgress:j,waterLevel:f,fertilizerLevel:d,health:g,growthStage:xm(j,g)}}));e({grid:u})},waterCrop:(n,r)=>{const{grid:o,gridSize:a}=t();if(n<0||n>=a.rows||r<0||r>=a.cols||!o[n][r])return;const l=o.map((u,c)=>u.map((p,h)=>c===n&&h===r&&p?{...p,waterLevel:Math.min(100,p.waterLevel+30)}:p));e({grid:l})},fertilizeCrop:(n,r)=>{const{grid:o,gridSize:a}=t();if(n<0||n>=a.rows||r<0||r>=a.cols||!o[n][r])return;const l=o.map((u,c)=>u.map((p,h)=>c===n&&h===r&&p?{...p,fertilizerLevel:Math.min(100,p.fertilizerLevel+25)}:p));e({grid:l})},selectSlot:(n,r)=>{e({selectedSlot:{row:n,col:r}})},clearSelection:()=>{e({selectedSlot:null})},getCropAt:(n,r)=>{const{grid:o,gridSize:a}=t();return n<0||n>=a.rows||r<0||r>=a.cols?null:o[n][r]},getMatureCrops:()=>{const{grid:n}=t(),r=[];return n.forEach((o,a)=>{o.forEach((s,l)=>{s&&s.growthStage==="mature"&&r.push({row:a,col:l,crop:s})})}),r},expandFarm:(n,r)=>{const{grid:o,gridSize:a,expansionLevel:s}=t();if(n<a.rows||r<a.cols||n>Pl.rows||r>Pl.cols)return!1;const l=[];for(let c=0;c<n;c++){const p=[];for(let h=0;h<r;h++)c<a.rows&&h<a.cols?p.push(o[c][h]):p.push(null);l.push(p)}const u=Xr.findIndex(c=>c.rows===n&&c.cols===r);return e({grid:l,gridSize:{rows:n,cols:r},expansionLevel:u>=0?u:s+1}),!0},canExpand:()=>{const{expansionLevel:n}=t();return n<Xr.length-1},getNextExpansion:()=>{const{expansionLevel:n}=t();return n<Xr.length-1?Xr[n+1]:null},setSprinkler:n=>{e({hasSprinkler:n})},setScarecrow:n=>{e({hasScarecrow:n})},resetFarm:()=>{e({grid:ka(ht.rows,ht.cols),gridSize:{...ht},selectedSlot:null,expansionLevel:0,hasSprinkler:!1,hasScarecrow:!1})}}),{name:"farm-typing-farm",partialize:e=>({grid:e.grid,gridSize:e.gridSize,expansionLevel:e.expansionLevel,hasSprinkler:e.hasSprinkler,hasScarecrow:e.hasScarecrow})})),km=Object.values(Ae).map(e=>({id:`seed_${e.id}`,type:"seed",name:`${e.emoji} ${e.name}種子`,description:`難度 ${"⭐".repeat(e.difficulty)} · 成長時間 ${Math.round(e.growthTime/1e3)}秒`,price:vr[e.id]||Math.round(e.sellPrice/2),currency:"gold",icon:e.emoji,cropTypeId:e.id,unlockLevel:e.difficulty<=1?1:e.difficulty<=2?2:5})),Sm=[{id:"scarecrow",type:"tool",name:"🎃 稻草人",description:"減少 50% 烏鴉出現機率",price:100,currency:"gold",icon:"🎃",effect:"reduceCrows",unlockLevel:1},{id:"sprinkler",type:"tool",name:"💧 自動灑水器",description:"自動保持作物水分",price:200,currency:"gold",icon:"💧",effect:"autoWater",unlockLevel:3},{id:"fertilizer_pack",type:"tool",name:"🧪 肥料包",description:"加速作物生長 20%",price:50,currency:"gold",icon:"🧪",effect:"fertilize",unlockLevel:1},{id:"quality_seeds",type:"tool",name:"✨ 優質種子增強劑",description:"下次收穫價值 +50%",price:30,currency:"gold",icon:"✨",effect:"qualityBoost",unlockLevel:2}],bm=[{id:"expand_3x5",type:"upgrade",name:"📐 擴建 3×5",description:"將農田擴大至 15 格",price:500,currency:"gold",icon:"📐",effect:"expandTo3x5",unlockLevel:2},{id:"expand_4x5",type:"upgrade",name:"📐 擴建 4×5",description:"將農田擴大至 20 格",price:1200,currency:"gold",icon:"📐",effect:"expandTo4x5",unlockLevel:5},{id:"expand_5x6",type:"upgrade",name:"📐 擴建 5×6",description:"將農田擴大至 30 格（最大）",price:2500,currency:"gold",icon:"📐",effect:"expandTo5x6",unlockLevel:8}],jm=[{id:"lantern",type:"decoration",name:"🏮 燈籠",description:"農場裝飾，增添氣氛",price:50,currency:"gold",icon:"🏮",unlockLevel:1},{id:"windmill",type:"decoration",name:"🎡 風車",description:"農場裝飾，轉啊轉",price:150,currency:"gold",icon:"🎡",unlockLevel:3}],Jn=[...km,...Sm,...bm,...jm],Sa=e=>Jn.filter(t=>t.type===e),Nm=e=>Jn.find(t=>t.id===e),Ll=[{name:"王大媽",emoji:"👵"},{name:"李廚師",emoji:"👨‍🍳"},{name:"陳老闆",emoji:"🧑‍💼"},{name:"小明",emoji:"👦"},{name:"美美阿姨",emoji:"👩"},{name:"餐廳經理",emoji:"🧑‍💼"},{name:"市場攤販",emoji:"🧑‍🌾"},{name:"學校廚房",emoji:"🏫"}],od=100,ys={harvest:5,perfectHarvest:20,orderComplete:10,orderBonus:5},Il={wpm:0,accuracy:100,totalWordsTyped:0,totalCropsHarvested:0,bestCombo:0,totalGoldEarned:0};function Fl(){return Object.entries(hm).map(([e,t],n)=>({id:`seed-${e}-${n}`,type:"seed",cropTypeId:e,quantity:t}))}const Oe=jr()(pi((e,t)=>({gold:_l,gems:0,reputation:0,level:1,xp:0,stats:{...Il},inventory:Fl(),unlockedCrops:[...zl],activeOrders:[],completedOrdersCount:0,totalEarnings:0,purchasedUpgrades:[],purchasedTools:[],addGold:n=>e(r=>({gold:r.gold+n,totalEarnings:r.totalEarnings+n,stats:{...r.stats,totalGoldEarned:r.stats.totalGoldEarned+n}})),spendGold:n=>{const{gold:r}=t();return r>=n?(e({gold:r-n}),!0):!1},addGems:n=>e(r=>({gems:r.gems+n})),spendGems:n=>{const{gems:r}=t();return r>=n?(e({gems:r-n}),!0):!1},addReputation:n=>e(r=>({reputation:r.reputation+n})),addXP:n=>e(r=>{let o=r.xp+n,a=r.level;const s=od*a;for(;o>=s;)o-=s,a++;return{xp:o,level:a}}),updateStats:n=>e(r=>({stats:{...r.stats,...n}})),addToInventory:n=>e(r=>{const o=r.inventory.findIndex(s=>s.type===n.type&&s.cropTypeId===n.cropTypeId);if(o>=0){const s=[...r.inventory];return s[o]={...s[o],quantity:s[o].quantity+n.quantity},{inventory:s}}const a={...n,id:`${n.type}-${n.cropTypeId||"generic"}-${Date.now()}`};return{inventory:[...r.inventory,a]}}),removeFromInventory:(n,r=1)=>{const{inventory:o}=t(),a=o.findIndex(u=>u.id===n);if(a<0)return!1;const s=o[a];if(s.quantity<r)return!1;const l=[...o];return s.quantity===r?l.splice(a,1):l[a]={...s,quantity:s.quantity-r},e({inventory:l}),!0},removeFromInventoryByType:(n,r,o)=>{const{inventory:a}=t(),s=a.findIndex(c=>c.type===n&&c.cropTypeId===r);if(s<0)return!1;const l=a[s];if(l.quantity<o)return!1;const u=[...a];return l.quantity===o?u.splice(s,1):u[s]={...l,quantity:l.quantity-o},e({inventory:u}),!0},getInventoryItem:(n,r)=>{const{inventory:o}=t();return o.find(a=>a.type===n&&(r?a.cropTypeId===r:!0))},getInventoryItemsByType:n=>{const{inventory:r}=t();return r.filter(o=>o.type===n)},unlockCrop:n=>e(r=>r.unlockedCrops.includes(n)?r:{unlockedCrops:[...r.unlockedCrops,n]}),addOrder:n=>e(r=>({activeOrders:[...r.activeOrders,n]})),removeOrder:n=>e(r=>({activeOrders:r.activeOrders.filter(o=>o.id!==n)})),completeOrder:(n,r,o=0)=>e(a=>{const s=r+o;return{activeOrders:a.activeOrders.filter(l=>l.id!==n),gold:a.gold+s,totalEarnings:a.totalEarnings+s,completedOrdersCount:a.completedOrdersCount+1,stats:{...a.stats,totalGoldEarned:a.stats.totalGoldEarned+s}}}),failOrder:n=>e(r=>({activeOrders:r.activeOrders.filter(o=>o.id!==n)})),addPurchasedUpgrade:n=>e(r=>({purchasedUpgrades:[...r.purchasedUpgrades,n]})),hasPurchasedUpgrade:n=>t().purchasedUpgrades.includes(n),addPurchasedTool:n=>e(r=>({purchasedTools:[...r.purchasedTools,n]})),hasPurchasedTool:n=>t().purchasedTools.includes(n),resetPlayer:()=>e({gold:_l,gems:0,reputation:0,level:1,xp:0,stats:{...Il},inventory:Fl(),unlockedCrops:[...zl],activeOrders:[],completedOrdersCount:0,totalEarnings:0,purchasedUpgrades:[],purchasedTools:[]})}),{name:"farm-typing-player",partialize:e=>({gold:e.gold,gems:e.gems,reputation:e.reputation,level:e.level,xp:e.xp,stats:e.stats,inventory:e.inventory,unlockedCrops:e.unlockedCrops,activeOrders:e.activeOrders,completedOrdersCount:e.completedOrdersCount,totalEarnings:e.totalEarnings,purchasedUpgrades:e.purchasedUpgrades,purchasedTools:e.purchasedTools})})),ad=jr((e,t)=>({activeSession:null,currentWPM:0,currentAccuracy:100,combo:0,maxCombo:0,errorCount:0,recentWPMs:[],sessionHistory:[],pendingSoundEffect:null,startSession:(n,r,o)=>{const a={targetWord:n,typedText:"",startTime:Date.now(),timeLimit:r,cropSlotId:o};e({activeSession:a,errorCount:0})},updateTypedText:n=>{const{activeSession:r,errorCount:o}=t();if(!r)return{isComplete:!1,isCorrect:!1};const a=ym(r.targetWord,n);let s=0;const l=r.typedText.length;if(n.length>l)for(let u=l;u<n.length;u++)n[u]!==r.targetWord[u]&&s++;return e({activeSession:{...r,typedText:n},errorCount:o+s}),a},endSession:n=>{const{activeSession:r,errorCount:o,combo:a,maxCombo:s,recentWPMs:l,sessionHistory:u}=t();if(!r)return null;const c=Date.now(),p=rd(r.startTime,c,r.targetWord.length,o),h={word:r.targetWord,wpm:p.wpm,accuracy:p.accuracy,time:(c-r.startTime)/1e3,success:n,timestamp:c},m=[...l,p.wpm].slice(-10),k=Math.round(m.reduce((v,j)=>v+j,0)/m.length),y=[...u,h].slice(-100);if(n){const v=a+1;e({activeSession:null,currentWPM:k,currentAccuracy:p.accuracy,combo:v,maxCombo:Math.max(s,v),errorCount:0,recentWPMs:m,sessionHistory:y,pendingSoundEffect:o===0?"perfect":"complete"})}else e({activeSession:null,currentWPM:k,currentAccuracy:p.accuracy,combo:0,errorCount:0,recentWPMs:m,sessionHistory:y,pendingSoundEffect:"timeout"});return p},cancelSession:()=>{e({activeSession:null,errorCount:0})},incrementCombo:()=>{const{combo:n,maxCombo:r}=t(),o=n+1;e({combo:o,maxCombo:Math.max(r,o)})},resetCombo:()=>{e({combo:0})},getSessionTimeRemaining:()=>{const{activeSession:n}=t();if(!n)return 0;const r=(Date.now()-n.startTime)/1e3;return Math.max(0,n.timeLimit-r)},resetTypingState:()=>{e({activeSession:null,currentWPM:0,currentAccuracy:100,combo:0,maxCombo:0,errorCount:0,recentWPMs:[],sessionHistory:[],pendingSoundEffect:null})},calculateAverageWPM:()=>{const{sessionHistory:n}=t();if(n.length===0)return 0;const r=n.filter(a=>a.success);if(r.length===0)return 0;const o=r.reduce((a,s)=>a+s.wpm,0);return Math.round(o/r.length)},calculateOverallAccuracy:()=>{const{sessionHistory:n}=t();if(n.length===0)return 100;const r=n.reduce((o,a)=>o+a.accuracy,0);return Math.round(r/n.length)},getSessionHistory:()=>t().sessionHistory,clearSessionHistory:()=>{e({sessionHistory:[]})},triggerSoundEffect:n=>{e({pendingSoundEffect:n})},clearSoundEffect:()=>{e({pendingSoundEffect:null})}})),Cm=[10,25,50,100];function Em(e){const{targetWord:t,timeLimit:n,cropSlotId:r,onComplete:o,onTimeout:a,onComboMilestone:s}=e,l=ad(),[u,c]=S.useState(""),[p,h]=S.useState([]),[m,k]=S.useState(n),[y,v]=S.useState(0),[j,f]=S.useState(100),[d,g]=S.useState(!1),[w,N]=S.useState(!1),[x,b]=S.useState(null),[C,M]=S.useState(!1),P=S.useRef(0),A=S.useRef(0),D=S.useRef(null),V=S.useRef(0),G=S.useCallback(O=>t.split("").map((K,ie)=>ie<O.length?O[ie]===K?"correct":"wrong":ie===O.length?"current":"pending"),[t]),z=S.useCallback(O=>{if(P.current===0||O===0)return 0;const ie=(Date.now()-P.current)/6e4;return ie===0?0:Math.round(O/5/ie)},[]),F=S.useCallback((O,K)=>K===0?100:Math.round(O/K*100),[]),W=S.useCallback(()=>{M(!0),P.current=Date.now(),A.current=0,V.current=0,c(""),h(G("")),k(n),v(0),f(100),g(!1),N(!1),b(null),l.startSession(t,n,r)},[t,n,r,l,G]),T=S.useCallback(O=>{if(!C||d||w||O.length!==1)return;const K=u+O,ie=u.length;O===t[ie]||(A.current+=1,b("miss"),setTimeout(()=>b(null),300)),c(K),h(G(K)),l.updateTypedText(K);const re=K.split("").filter((Nr,Cr)=>Nr===t[Cr]).length,qt=z(K.length),id=F(re,K.length);if(v(qt),f(id),K.length===t.length){const Nr=K===t;g(!0),M(!1),D.current&&(clearInterval(D.current),D.current=null);const Cr=rd(P.current,Date.now(),t.length,A.current),Zt=l.endSession(Nr);if(Nr){b(A.current===0?"perfect":"good");const mi=l.combo;for(const Er of Cm)mi>=Er&&V.current<Er&&(V.current=Er,s==null||s(Er));o==null||o({wpm:(Zt==null?void 0:Zt.wpm)??Cr.wpm,accuracy:(Zt==null?void 0:Zt.accuracy)??Cr.accuracy,combo:mi})}else b("miss"),l.resetCombo(),a==null||a()}},[C,d,w,u,t,G,z,F,l,o,s,a]),L=S.useCallback(()=>{M(!1),c(""),h(G("")),k(n),v(0),f(100),g(!1),N(!1),b(null),P.current=0,A.current=0,D.current&&(clearInterval(D.current),D.current=null),l.cancelSession()},[n,G,l]);return S.useEffect(()=>{if(!C||d||w){D.current&&(clearInterval(D.current),D.current=null);return}return D.current=setInterval(()=>{const O=(Date.now()-P.current)/1e3,K=Math.max(0,n-O);k(K),K<=0&&(N(!0),M(!1),b("miss"),D.current&&(clearInterval(D.current),D.current=null),l.endSession(!1),l.resetCombo(),a==null||a())},100),()=>{D.current&&(clearInterval(D.current),D.current=null)}},[C,d,w,n,l,a]),S.useEffect(()=>{h(G(""))},[G]),S.useEffect(()=>()=>{D.current&&clearInterval(D.current)},[]),[{typedChars:u,charStatuses:p,timeRemaining:m,wpm:y,accuracy:j,combo:l.combo,isComplete:d,isTimeout:w,feedbackMessage:x},{handleKeyPress:T,reset:L,start:W}]}const Tm={perfect:{color:"#FFD700",textShadow:"0 0 10px #FFD700, 0 0 20px #FFA500"},good:{color:"#4CAF50",textShadow:"0 0 10px #4CAF50"},miss:{color:"#FF4444",textShadow:"0 0 10px #FF4444"}},zm={perfect:"✨ Perfect! ✨",good:"👍 Good!",miss:"❌ Miss!"},Pm=({message:e,combo:t,showCombo:n=!0,onAnimationEnd:r})=>{const[o,a]=S.useState(!1),[s,l]=S.useState(!1),[u,c]=S.useState(t);return S.useEffect(()=>{if(e){a(!0);const p=setTimeout(()=>{a(!1),r==null||r()},1e3);return()=>clearTimeout(p)}},[e,r]),S.useEffect(()=>{if(t>u&&t>0){l(!0);const p=setTimeout(()=>l(!1),150);return c(t),()=>clearTimeout(p)}c(t)},[t,u]),i.jsxs("div",{className:"typing-feedback-container",children:[e&&o&&i.jsx("div",{className:"feedback-message",style:{...Tm[e],animation:"feedbackPop 0.5s ease-out forwards"},children:zm[e]}),n&&t>0&&i.jsxs("div",{className:`combo-display ${s?"bump":""}`,style:{color:t>=50?"#FFD700":t>=25?"#FFA500":t>=10?"#4CAF50":"#666"},children:[i.jsx("span",{className:"combo-icon",children:"🔥"}),i.jsxs("span",{className:"combo-text",children:["Combo x",t]}),t>=10&&i.jsx("span",{className:"combo-milestone",children:t>=100?"🏆":t>=50?"⭐":t>=25?"🌟":"✨"})]}),i.jsx("style",{children:`
        .typing-feedback-container {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          min-height: 80px;
        }

        .feedback-message {
          font-size: 32px;
          font-weight: bold;
          text-align: center;
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
        }

        @keyframes feedbackPop {
          0% {
            opacity: 0;
            transform: translateX(-50%) scale(0.5) translateY(20px);
          }
          50% {
            opacity: 1;
            transform: translateX(-50%) scale(1.2) translateY(-10px);
          }
          100% {
            opacity: 0;
            transform: translateX(-50%) scale(1) translateY(-30px);
          }
        }

        .combo-display {
          font-size: 24px;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: transform 0.1s ease-out;
          padding: 8px 16px;
          border-radius: 20px;
          background: rgba(0, 0, 0, 0.1);
        }

        .combo-display.bump {
          transform: scale(1.2);
        }

        .combo-icon {
          animation: flame 0.5s infinite alternate;
        }

        @keyframes flame {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }

        .combo-milestone {
          animation: sparkle 0.8s infinite;
        }

        @keyframes sparkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        /* Screen shake effect for errors */
        .screen-shake {
          animation: shake 0.3s ease-in-out;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-5px); }
          40% { transform: translateX(5px); }
          60% { transform: translateX(-5px); }
          80% { transform: translateX(5px); }
        }
      `})]})},vs=({targetWord:e,timeLimit:t,cropSlotId:n,cropType:r,autoStart:o=!0,weatherOverride:a,onComplete:s,onTimeout:l,onComboMilestone:u})=>{const c=S.useRef(null),p=S.useRef(null),h=je(x=>x.weather),m=a||h,k=S.useMemo(()=>xn.getEffectsForWeather(m),[m]),y=t*k.harvestTimeMultiplier,v={targetWord:e,timeLimit:y,cropSlotId:n,onComplete:s,onTimeout:l,onComboMilestone:u},[j,f]=Em(v);S.useEffect(()=>{c.current&&c.current.focus()},[]),S.useEffect(()=>{o&&f.start()},[o,f]);const d=S.useCallback(x=>{if(x.key!=="Tab"&&x.key!=="Escape"&&x.preventDefault(),x.key.length===1){f.handleKeyPress(x.key);const b=j.typedChars.length;x.key!==e[b]&&p.current&&(p.current.classList.add("screen-shake"),setTimeout(()=>{var C;(C=p.current)==null||C.classList.remove("screen-shake")},300))}},[f,j.typedChars.length,e]),g=S.useCallback(()=>{var x;(x=c.current)==null||x.focus()},[]),w=x=>x.toFixed(1),N=j.timeRemaining<=3&&j.timeRemaining>0;return i.jsxs("div",{ref:p,className:"typing-area",onClick:g,children:[r&&i.jsxs("div",{className:"crop-header",children:[i.jsx("span",{className:"crop-emoji",children:r.emoji}),i.jsx("span",{className:"crop-label",children:"目前作物："}),i.jsx("span",{className:"crop-name",children:r.name})]}),i.jsxs("div",{className:`word-container ${k.typingEffect==="shaking"?"weather-shaking":""} ${m==="rainbow"?"rainbow-shimmer":""}`,children:[i.jsx("div",{className:"target-word",children:e.split("").map((x,b)=>{const C=k.typingEffect==="foggy"&&b>j.typedChars.length&&Math.random()<.3;return i.jsx("span",{className:`char char-${j.charStatuses[b]||"pending"} ${C?"foggy-hidden":""}`,children:C?"█":x},b)})}),i.jsx("div",{className:`hint-text ${k.typingEffect==="foggy"?"foggy-hint":""}`,children:k.typingEffect==="foggy"?"(some letters hidden)":e})]}),i.jsx("input",{ref:c,type:"text",className:"hidden-input",onKeyDown:d,autoComplete:"off",autoCapitalize:"off",autoCorrect:"off",spellCheck:!1,"aria-label":"Type the word"}),i.jsx(Pm,{message:j.feedbackMessage,combo:j.combo,showCombo:!0}),m!=="sunny"&&i.jsxs("div",{className:`weather-indicator weather-${m}`,children:[i.jsxs("span",{className:"weather-emoji",children:[m==="rainy"&&"🌧️",m==="stormy"&&"⛈️",m==="snowy"&&"❄️",m==="foggy"&&"🌫️",m==="rainbow"&&"🌈"]}),i.jsxs("span",{className:"weather-effect",children:[m==="stormy"&&"Text shaking!",m==="snowy"&&`Time: ${Math.round(k.harvestTimeMultiplier*100)}%`,m==="foggy"&&"Letters hidden!",m==="rainbow"&&`Time: x${k.harvestTimeMultiplier}`,m==="rainy"&&"Growth +20%"]})]}),i.jsxs("div",{className:"stats-row",children:[i.jsxs("div",{className:`stat timer ${N?"timer-warning":""}`,children:[i.jsx("span",{className:"stat-icon",children:"⏱️"}),i.jsx("span",{className:"stat-label",children:"剩餘"}),i.jsxs("span",{className:"stat-value",children:[w(j.timeRemaining)," 秒"]})]}),i.jsxs("div",{className:"stat accuracy",children:[i.jsx("span",{className:"stat-icon",children:"✅"}),i.jsx("span",{className:"stat-label",children:"正確率"}),i.jsxs("span",{className:"stat-value",children:[j.accuracy,"%"]})]})]}),i.jsxs("div",{className:"stats-row",children:[i.jsxs("div",{className:"stat combo",children:[i.jsx("span",{className:"stat-icon",children:"🔥"}),i.jsx("span",{className:"stat-label",children:"Combo"}),i.jsxs("span",{className:"stat-value",children:["x",j.combo]})]}),i.jsxs("div",{className:"stat wpm",children:[i.jsx("span",{className:"stat-icon",children:"⚡"}),i.jsx("span",{className:"stat-label",children:"WPM"}),i.jsx("span",{className:"stat-value",children:j.wpm})]})]}),j.isComplete&&i.jsx("div",{className:"status-complete",children:"✅ 完成!"}),j.isTimeout&&i.jsx("div",{className:"status-timeout",children:"⏰ 時間到!"}),i.jsx("style",{children:`
        .typing-area {
          background: linear-gradient(135deg, #f5e6d3 0%, #e8d5b7 100%);
          border: 4px solid #8B7355;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 
            inset 0 2px 4px rgba(0,0,0,0.1),
            0 4px 12px rgba(0,0,0,0.2);
          cursor: text;
          user-select: none;
          min-width: 400px;
          max-width: 600px;
          margin: 0 auto;
        }

        .crop-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
          font-size: 18px;
          color: #5a4a3a;
        }

        .crop-emoji {
          font-size: 32px;
        }

        .crop-label {
          color: #8B7355;
        }

        .crop-name {
          font-weight: bold;
          color: #2d5a27;
        }

        .word-container {
          background: rgba(255, 255, 255, 0.8);
          border: 2px solid #c4b59d;
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 16px;
          text-align: center;
        }

        .target-word {
          font-family: 'Courier New', monospace;
          font-size: 48px;
          letter-spacing: 8px;
          text-align: center;
          margin-bottom: 8px;
        }

        .hint-text {
          font-family: 'Courier New', monospace;
          font-size: 16px;
          color: #999;
          letter-spacing: 4px;
        }

        .char {
          display: inline-block;
          padding: 4px 2px;
          transition: all 0.1s ease;
        }

        .char-correct {
          color: #2d5a27;
        }

        .char-wrong {
          color: #8b0000;
          text-decoration: underline;
          text-decoration-color: #8b0000;
        }

        .char-pending {
          color: #999;
        }

        .char-current {
          background: rgba(76, 175, 80, 0.3);
          animation: cursor-blink 1s infinite;
          border-radius: 4px;
        }

        @keyframes cursor-blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0.5; }
        }

        .hidden-input {
          position: absolute;
          left: -9999px;
          opacity: 0;
          width: 1px;
          height: 1px;
        }

        .stats-row {
          display: flex;
          justify-content: space-between;
          margin-top: 12px;
          gap: 16px;
        }

        .stat {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 16px;
          color: #5a4a3a;
          background: rgba(255, 255, 255, 0.5);
          padding: 8px 12px;
          border-radius: 8px;
          flex: 1;
        }

        .stat-icon {
          font-size: 20px;
        }

        .stat-label {
          color: #8B7355;
        }

        .stat-value {
          font-weight: bold;
          margin-left: auto;
        }

        .timer-warning {
          color: #ff4444;
          animation: pulse 0.5s infinite;
          background: rgba(255, 68, 68, 0.1);
        }

        .timer-warning .stat-value {
          color: #ff4444;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .status-complete {
          text-align: center;
          font-size: 24px;
          color: #2d5a27;
          font-weight: bold;
          margin-top: 16px;
          animation: fadeIn 0.3s ease;
        }

        .status-timeout {
          text-align: center;
          font-size: 24px;
          color: #ff4444;
          font-weight: bold;
          margin-top: 16px;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Screen shake effect */
        .screen-shake {
          animation: shake 0.3s ease-in-out;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-5px); }
          40% { transform: translateX(5px); }
          60% { transform: translateX(-5px); }
          80% { transform: translateX(5px); }
        }

        /* Weather effects */
        .weather-shaking {
          animation: text-shake 0.1s infinite;
        }

        @keyframes text-shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-3px) rotate(-1deg); }
          75% { transform: translateX(3px) rotate(1deg); }
        }

        .foggy-hidden {
          color: #999 !important;
          filter: blur(2px);
          user-select: none;
        }

        .foggy-hint {
          font-style: italic;
          color: #bbb;
        }

        .rainbow-shimmer {
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0.8),
            rgba(255,200,200,0.8),
            rgba(255,255,200,0.8),
            rgba(200,255,200,0.8),
            rgba(200,200,255,0.8),
            rgba(255,200,255,0.8),
            rgba(255,255,255,0.8)
          );
          background-size: 200% 100%;
          animation: rainbow-slide 3s linear infinite;
        }

        @keyframes rainbow-slide {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }

        .weather-indicator {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 8px 16px;
          margin-bottom: 12px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: bold;
        }

        .weather-rainy {
          background: linear-gradient(135deg, rgba(100,150,200,0.3), rgba(80,120,180,0.3));
          color: #4a6a8a;
        }

        .weather-stormy {
          background: linear-gradient(135deg, rgba(80,80,100,0.4), rgba(60,60,80,0.4));
          color: #4a4a6a;
          animation: stormy-flash 3s infinite;
        }

        @keyframes stormy-flash {
          0%, 90%, 100% { opacity: 1; }
          92%, 94% { opacity: 0.6; }
        }

        .weather-snowy {
          background: linear-gradient(135deg, rgba(200,220,255,0.4), rgba(180,200,240,0.4));
          color: #5a6a8a;
        }

        .weather-foggy {
          background: linear-gradient(135deg, rgba(180,180,180,0.4), rgba(160,160,160,0.4));
          color: #6a6a6a;
        }

        .weather-rainbow {
          background: linear-gradient(
            90deg,
            rgba(255,0,0,0.2),
            rgba(255,127,0,0.2),
            rgba(255,255,0,0.2),
            rgba(0,255,0,0.2),
            rgba(0,0,255,0.2),
            rgba(148,0,211,0.2)
          );
          color: #6a4a8a;
        }

        .weather-emoji {
          font-size: 20px;
        }

        .weather-effect {
          font-size: 12px;
        }
      `})]})},_m={seed:{icon:"🟤",bgColor:"#8B4513",animation:"animate-seed-wiggle",label:"種子"},sprout:{icon:"🌱",bgColor:"#90EE90",animation:"animate-sprout-grow",label:"發芽"},growing:{icon:"🌿",bgColor:"#32CD32",animation:"animate-leaf-sway",label:"生長中"},mature:{icon:"",bgColor:"#FFD700",animation:"animate-mature-glow",label:"成熟!",particleColor:"#FFD700"},overripe:{icon:"",bgColor:"#FFA500",animation:"animate-overripe-shake",label:"過熟!"},withered:{icon:"🥀",bgColor:"#808080",animation:"animate-wither-fade",label:"枯萎"}},Mm=({crop:e,row:t,col:n,isSelected:r,onClick:o,onHarvest:a})=>{const[s,l]=S.useState(null),[u,c]=S.useState(!1),[p,h]=S.useState(!1);S.useEffect(()=>{e&&s!==e.growthStage&&(s!==null&&(c(!0),setTimeout(()=>c(!1),500)),l(e.growthStage))},[e==null?void 0:e.growthStage,s]);const m=e?_m[e.growthStage]:null,k=S.useMemo(()=>e?e.growthStage==="mature"||e.growthStage==="overripe"?e.cropType.emoji:e.growthStage==="withered"?"🥀":(m==null?void 0:m.icon)||"🟤":null,[e,m]),y=e&&e.waterLevel<20,v=(e==null?void 0:e.growthStage)==="mature",j=(e==null?void 0:e.growthStage)==="overripe",f=()=>{v&&a?(h(!0),setTimeout(()=>{a(),h(!1)},800)):o()},d=()=>p?"harvesting":u?"transitioning":(m==null?void 0:m.animation)||"";return i.jsxs("div",{className:`crop-slot ${r?"selected":""} ${e?"has-crop":"empty"}`,onClick:f,"data-row":t,"data-col":n,children:[!e&&i.jsxs("div",{className:"empty-slot",children:[i.jsx("span",{className:"plus-icon",children:"+"}),i.jsx("span",{className:"dirt-texture",children:"🟫"})]}),e&&i.jsxs("div",{className:`crop-display ${d()}`,children:[v&&i.jsxs("div",{className:"sparkle-container",children:[i.jsx("span",{className:"sparkle s1",children:"✨"}),i.jsx("span",{className:"sparkle s2",children:"⭐"}),i.jsx("span",{className:"sparkle s3",children:"✨"})]}),i.jsx("span",{className:`crop-emoji ${p?"harvest-fly":""}`,children:k}),i.jsx("div",{className:"progress-bar-container",children:i.jsx("div",{className:`progress-bar ${e.growthStage}`,style:{width:`${Math.min(100,e.growthProgress)}%`}})}),i.jsx("span",{className:`stage-label ${u?"stage-change":""}`,children:m==null?void 0:m.label}),y&&i.jsx("div",{className:"water-warning",children:"💧"}),v&&!p&&i.jsx("div",{className:"ready-indicator",children:i.jsx("span",{className:"harvest-text",children:"Click!"})}),j&&i.jsx("div",{className:"warning-indicator",children:"⚠️"})]}),i.jsx("style",{children:`
        .crop-slot {
          width: 100px;
          height: 120px;
          border: 3px solid var(--color-earth-brown, #8B7355);
          border-radius: 8px;
          background: linear-gradient(180deg, #D2B48C 0%, #8B7355 100%);
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .crop-slot:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .crop-slot.selected {
          border-color: #FFD700;
          box-shadow: 0 0 15px rgba(255, 215, 0, 0.6);
        }

        .crop-slot.empty:hover .plus-icon {
          opacity: 1;
          transform: scale(1.2);
        }

        .empty-slot {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }

        .plus-icon {
          font-size: 32px;
          color: rgba(255, 255, 255, 0.5);
          opacity: 0;
          transition: all 0.2s ease;
          position: absolute;
          z-index: 1;
        }

        .dirt-texture {
          font-size: 40px;
          opacity: 0.7;
        }

        .crop-display {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          padding: 8px;
          position: relative;
        }

        .crop-display.transitioning {
          animation: stage-transition 0.5s ease-out;
        }

        @keyframes stage-transition {
          0% { transform: scale(1); }
          50% { transform: scale(1.15); }
          100% { transform: scale(1); }
        }

        .crop-emoji {
          font-size: 40px;
          margin-bottom: 4px;
          transition: transform 0.3s ease;
        }

        .crop-emoji.harvest-fly {
          animation: harvest-fly 0.8s ease-out forwards;
        }

        @keyframes harvest-fly {
          0% { 
            transform: scale(1) translateY(0) rotate(0deg); 
            opacity: 1; 
          }
          30% {
            transform: scale(1.3) translateY(-20px) rotate(-10deg);
            opacity: 1;
          }
          100% { 
            transform: scale(0.3) translateY(-150px) translateX(80px) rotate(360deg); 
            opacity: 0; 
          }
        }

        /* Sparkle container for mature crops */
        .sparkle-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .sparkle {
          position: absolute;
          font-size: 14px;
          opacity: 0;
          animation: sparkle-float 2s ease-in-out infinite;
        }

        .sparkle.s1 {
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .sparkle.s2 {
          top: 20%;
          right: 15%;
          animation-delay: 0.7s;
        }

        .sparkle.s3 {
          bottom: 30%;
          left: 20%;
          animation-delay: 1.4s;
        }

        @keyframes sparkle-float {
          0%, 100% { 
            opacity: 0; 
            transform: translateY(0) scale(0.5); 
          }
          50% { 
            opacity: 1; 
            transform: translateY(-10px) scale(1); 
          }
        }

        .progress-bar-container {
          width: 80%;
          height: 8px;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 4px;
          overflow: hidden;
          margin: 4px 0;
        }

        .progress-bar {
          height: 100%;
          transition: width 0.3s ease;
          border-radius: 4px;
          position: relative;
        }

        .progress-bar::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 100%);
        }

        .progress-bar.seed {
          background: linear-gradient(90deg, #6B4423 0%, #8B4513 100%);
        }

        .progress-bar.sprout {
          background: linear-gradient(90deg, #7CCD7C 0%, #90EE90 100%);
        }

        .progress-bar.growing {
          background: linear-gradient(90deg, #228B22 0%, #32CD32 100%);
        }

        .progress-bar.mature {
          background: linear-gradient(90deg, #FFD700 0%, #FFA500 50%, #FFD700 100%);
          animation: shimmer 1.5s ease-in-out infinite;
        }

        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .progress-bar.overripe {
          background: linear-gradient(90deg, #FF8C00 0%, #FFA500 100%);
        }

        .progress-bar.withered {
          background: linear-gradient(90deg, #696969 0%, #808080 100%);
        }

        .stage-label {
          font-size: 12px;
          color: #FFF;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
          font-weight: bold;
          transition: all 0.3s ease;
        }

        .stage-label.stage-change {
          animation: label-pop 0.5s ease-out;
        }

        @keyframes label-pop {
          0% { transform: scale(1); }
          50% { transform: scale(1.3); color: #FFD700; }
          100% { transform: scale(1); }
        }

        .water-warning {
          position: absolute;
          top: 4px;
          left: 4px;
          font-size: 16px;
          animation: water-bounce 0.6s infinite alternate;
        }

        @keyframes water-bounce {
          from {
            transform: translateY(0) scale(1);
          }
          to {
            transform: translateY(-4px) scale(1.1);
          }
        }

        .ready-indicator {
          position: absolute;
          top: 4px;
          right: 4px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .harvest-text {
          font-size: 10px;
          color: #FFD700;
          font-weight: bold;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
          animation: pulse-text 0.8s ease-in-out infinite;
        }

        @keyframes pulse-text {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }

        .warning-indicator {
          position: absolute;
          top: 4px;
          right: 4px;
          font-size: 16px;
          animation: warning-shake 0.3s infinite;
        }

        @keyframes warning-shake {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-10deg); }
          75% { transform: rotate(10deg); }
        }

        /* Growth stage animations */
        .animate-seed-wiggle {
          animation: seed-wiggle 2s ease-in-out infinite;
        }

        @keyframes seed-wiggle {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }

        .animate-sprout-grow .crop-emoji {
          animation: sprout-emerge 0.5s ease-out;
        }

        @keyframes sprout-emerge {
          0% { transform: scaleY(0.3) translateY(10px); opacity: 0.3; }
          100% { transform: scaleY(1) translateY(0); opacity: 1; }
        }

        .animate-leaf-sway .crop-emoji {
          animation: leaf-sway 3s ease-in-out infinite;
          transform-origin: bottom center;
        }

        @keyframes leaf-sway {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }

        .animate-mature-glow {
          animation: mature-glow-bg 1.5s ease-in-out infinite;
        }

        @keyframes mature-glow-bg {
          0%, 100% { 
            box-shadow: inset 0 0 10px rgba(255, 215, 0, 0.3);
          }
          50% { 
            box-shadow: inset 0 0 20px rgba(255, 215, 0, 0.6);
          }
        }

        .animate-mature-glow .crop-emoji {
          animation: mature-glow-emoji 1.5s ease-in-out infinite;
        }

        @keyframes mature-glow-emoji {
          0%, 100% { 
            filter: drop-shadow(0 0 5px rgba(255, 215, 0, 0.6)); 
          }
          50% { 
            filter: drop-shadow(0 0 15px rgba(255, 215, 0, 0.9)); 
          }
        }

        .animate-overripe-shake {
          animation: overripe-shake 0.5s ease-in-out infinite;
        }

        @keyframes overripe-shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-2px); }
          75% { transform: translateX(2px); }
        }

        .animate-wither-fade {
          filter: saturate(0.3) brightness(0.7);
        }

        .animate-wither-fade .crop-emoji {
          animation: wither-droop 2s ease-in-out infinite;
        }

        @keyframes wither-droop {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }

        /* Harvesting state */
        .harvesting {
          pointer-events: none;
        }
      `})]})};class Lm{constructor(){pe(this,"updateInterval",null);pe(this,"lastUpdateTime",0);pe(this,"isRunning",!1)}start(){this.isRunning||(this.isRunning=!0,this.lastUpdateTime=Date.now(),console.log("[CropSystem] Started"))}stop(){this.isRunning=!1,this.updateInterval!==null&&(clearInterval(this.updateInterval),this.updateInterval=null),console.log("[CropSystem] Stopped")}updateCrops(){if(!this.isRunning)return;const t=Date.now(),n=t-this.lastUpdateTime;this.lastUpdateTime=t,xe.getState().updateCropGrowth(n)}plantCrop(t,n,r){const o=xe.getState();return o.plantCrop(t,n,r)?o.getCropAt(t,n):null}calculateGrowthStage(t){if(t.health<=0)return"withered";const n=t.growthProgress;return n>=140?"withered":n>=120?"overripe":n>=80?"mature":n>=40?"growing":n>=20?"sprout":"seed"}calculateGrowthProgress(t){const n=Date.now()-t.plantedAt,r=t.cropType.growthTime;let o=n/r*100;return t.waterLevel<20&&(o*=.5),t.fertilizerLevel>0&&(o*=1+t.fertilizerLevel/400),Math.min(150,o)}isHarvestable(t){return t.growthStage==="mature"}canHarvest(t){return t.growthStage==="mature"||t.growthStage==="overripe"}getSellPriceMultiplier(t){switch(t.growthStage){case"mature":return 1;case"overripe":return .5;case"withered":return 0;default:return 0}}calculateSellPrice(t){const n=t.cropType.sellPrice,r=this.getSellPriceMultiplier(t);return Math.floor(n*r)}harvestCrop(t,n){const r=xe.getState(),o=r.getCropAt(t,n);if(!o)return{success:!1};if(!this.canHarvest(o))return{success:!1};const a=this.calculateSellPrice(o),s=r.harvestCrop(t,n);return s?{success:!0,crop:s,price:a}:{success:!1}}waterCrop(t,n){xe.getState().waterCrop(t,n)}fertilizeCrop(t,n){xe.getState().fertilizeCrop(t,n)}getTimeToNextStage(t){const n=t.growthProgress;let r;if(n<20)r=20;else if(n<40)r=40;else if(n<80)r=80;else if(n<100)r=100;else return 0;const o=r-n;let s=100/t.cropType.growthTime;return t.waterLevel<20&&(s*=.5),t.fertilizerLevel>0&&(s*=1+t.fertilizerLevel/400),o/s/1e3}getCropsNeedingAttention(){const t=xe.getState(),{grid:n}=t,r=[];return n.forEach((o,a)=>{o.forEach((s,l)=>{s&&(s.waterLevel<20&&r.push({row:a,col:l,crop:s,reason:"needs_water"}),s.growthStage==="overripe"&&r.push({row:a,col:l,crop:s,reason:"overripe"}),s.growthStage==="mature"&&r.push({row:a,col:l,crop:s,reason:"ready_harvest"}))})}),r}getCropById(t){return Ae[t]}}const st=new Lm,Im={seed:{label:"種子",color:"#8B4513",emoji:"🟤"},sprout:{label:"發芽",color:"#90EE90",emoji:"🌱"},growing:{label:"生長中",color:"#32CD32",emoji:"🌿"},mature:{label:"成熟",color:"#FFD700",emoji:"✨"},overripe:{label:"過熟",color:"#FFA500",emoji:"⚠️"},withered:{label:"枯萎",color:"#808080",emoji:"💀"}},Fm=({crop:e,onHarvest:t,onWater:n,onFertilize:r,onClose:o})=>{const a=Im[e.growthStage],s=st.calculateSellPrice(e),l=st.canHarvest(e),u=st.getTimeToNextStage(e),c=e.waterLevel<20,p=m=>{if(m<=0)return"準備完成!";const k=Math.floor(m/60),y=Math.floor(m%60);return`${k}:${y.toString().padStart(2,"0")}`},h=()=>"⭐".repeat(e.cropType.difficulty);return i.jsxs("div",{className:"crop-info-card",children:[i.jsxs("div",{className:"card-header",children:[i.jsxs("div",{className:"crop-identity",children:[i.jsx("span",{className:"crop-emoji-large",children:e.cropType.emoji}),i.jsxs("div",{className:"crop-details",children:[i.jsx("h3",{className:"crop-name",children:e.cropType.name}),i.jsx("span",{className:"difficulty",children:h()})]})]}),o&&i.jsx("button",{className:"close-btn",onClick:o,children:"✕"})]}),i.jsxs("div",{className:"info-section",children:[i.jsx("div",{className:"section-label",children:"生長階段"}),i.jsxs("div",{className:"growth-stage",style:{color:a.color},children:[i.jsx("span",{className:"stage-emoji",children:a.emoji}),i.jsx("span",{className:"stage-label",children:a.label})]}),i.jsxs("div",{className:"progress-container",children:[i.jsx("div",{className:"progress-track",children:i.jsx("div",{className:"progress-fill",style:{width:`${Math.min(100,e.growthProgress)}%`,backgroundColor:a.color}})}),i.jsxs("span",{className:"progress-text",children:[Math.floor(e.growthProgress),"%"]})]}),e.growthStage!=="mature"&&e.growthStage!=="overripe"&&e.growthStage!=="withered"&&i.jsxs("div",{className:"time-remaining",children:[i.jsx("span",{className:"time-icon",children:"⏱️"}),i.jsxs("span",{children:["下一階段: ",p(u)]})]})]}),i.jsxs("div",{className:"info-section",children:[i.jsx("div",{className:"section-label",children:"狀態"}),i.jsxs("div",{className:`status-row ${c?"warning":""}`,children:[i.jsx("span",{className:"status-icon",children:"💧"}),i.jsx("span",{className:"status-label",children:"水分"}),i.jsx("div",{className:"status-bar",children:i.jsx("div",{className:"status-fill water",style:{width:`${e.waterLevel}%`}})}),i.jsxs("span",{className:"status-value",children:[Math.floor(e.waterLevel),"%"]})]}),i.jsxs("div",{className:"status-row",children:[i.jsx("span",{className:"status-icon",children:"🌿"}),i.jsx("span",{className:"status-label",children:"肥料"}),i.jsx("div",{className:"status-bar",children:i.jsx("div",{className:"status-fill fertilizer",style:{width:`${e.fertilizerLevel}%`}})}),i.jsxs("span",{className:"status-value",children:[Math.floor(e.fertilizerLevel),"%"]})]}),i.jsxs("div",{className:`status-row ${e.health<50?"warning":""}`,children:[i.jsx("span",{className:"status-icon",children:"❤️"}),i.jsx("span",{className:"status-label",children:"健康"}),i.jsx("div",{className:"status-bar",children:i.jsx("div",{className:"status-fill health",style:{width:`${e.health}%`}})}),i.jsxs("span",{className:"status-value",children:[Math.floor(e.health),"%"]})]})]}),i.jsxs("div",{className:"info-section",children:[i.jsx("div",{className:"section-label",children:"收成資訊"}),i.jsxs("div",{className:"sell-info",children:[i.jsx("span",{className:"sell-icon",children:"💰"}),i.jsx("span",{className:"sell-label",children:"預計售價:"}),i.jsxs("span",{className:`sell-price ${e.growthStage==="overripe"?"reduced":""}`,children:[s," 金幣",e.growthStage==="overripe"&&i.jsx("span",{className:"price-note",children:"(減半)"})]})]}),l&&i.jsxs("div",{className:"harvest-word",children:[i.jsx("span",{className:"word-label",children:"收成打字:"}),i.jsx("span",{className:"word-preview",children:e.wordToHarvest})]})]}),i.jsxs("div",{className:"action-buttons",children:[i.jsx("button",{className:"action-btn water-btn",onClick:n,disabled:e.waterLevel>=100,children:"💧 澆水"}),i.jsx("button",{className:"action-btn fertilize-btn",onClick:r,disabled:e.fertilizerLevel>=100,children:"🌿 施肥"}),l&&i.jsx("button",{className:"action-btn harvest-btn",onClick:t,children:"🌾 收成"})]}),c&&i.jsx("div",{className:"warning-banner water-warning",children:"💧 需要澆水！生長速度已減慢"}),e.growthStage==="overripe"&&i.jsx("div",{className:"warning-banner overripe-warning",children:"⚠️ 過熟中！快收成否則會枯萎"}),e.growthStage==="withered"&&i.jsx("div",{className:"warning-banner withered-warning",children:"💀 已枯萎，無法收成"}),i.jsx("style",{children:`
        .crop-info-card {
          background: linear-gradient(135deg, #f5e6d3 0%, #e8d5b7 100%);
          border: 3px solid #8B7355;
          border-radius: 12px;
          padding: 16px;
          width: 280px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
          padding-bottom: 12px;
          border-bottom: 2px solid rgba(139, 115, 85, 0.3);
        }

        .crop-identity {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .crop-emoji-large {
          font-size: 48px;
        }

        .crop-details {
          display: flex;
          flex-direction: column;
        }

        .crop-name {
          margin: 0;
          font-size: 18px;
          color: #5D4037;
        }

        .difficulty {
          font-size: 14px;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 18px;
          cursor: pointer;
          color: #8B7355;
          padding: 4px 8px;
        }

        .close-btn:hover {
          color: #5D4037;
        }

        .info-section {
          margin-bottom: 12px;
          padding: 8px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 8px;
        }

        .section-label {
          font-size: 12px;
          color: #8B7355;
          font-weight: bold;
          margin-bottom: 8px;
          text-transform: uppercase;
        }

        .growth-stage {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 8px;
        }

        .stage-emoji {
          font-size: 20px;
        }

        .progress-container {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .progress-track {
          flex: 1;
          height: 12px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 6px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          transition: width 0.3s ease;
          border-radius: 6px;
        }

        .progress-text {
          font-size: 12px;
          font-weight: bold;
          color: #5D4037;
          min-width: 40px;
        }

        .time-remaining {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 8px;
          font-size: 13px;
          color: #666;
        }

        .status-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
        }

        .status-row.warning {
          animation: pulse-warning 1s infinite;
        }

        .status-icon {
          font-size: 16px;
          width: 20px;
        }

        .status-label {
          font-size: 12px;
          color: #666;
          width: 36px;
        }

        .status-bar {
          flex: 1;
          height: 8px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 4px;
          overflow: hidden;
        }

        .status-fill {
          height: 100%;
          transition: width 0.3s ease;
          border-radius: 4px;
        }

        .status-fill.water {
          background: linear-gradient(90deg, #87CEEB, #4169E1);
        }

        .status-fill.fertilizer {
          background: linear-gradient(90deg, #90EE90, #228B22);
        }

        .status-fill.health {
          background: linear-gradient(90deg, #FF6B6B, #FF4444);
        }

        .status-value {
          font-size: 11px;
          font-weight: bold;
          color: #5D4037;
          min-width: 32px;
          text-align: right;
        }

        .sell-info {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }

        .sell-icon {
          font-size: 18px;
        }

        .sell-label {
          font-size: 13px;
          color: #666;
        }

        .sell-price {
          font-size: 16px;
          font-weight: bold;
          color: #FFD700;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }

        .sell-price.reduced {
          color: #FFA500;
        }

        .price-note {
          font-size: 11px;
          color: #FF6B6B;
          margin-left: 4px;
        }

        .harvest-word {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .word-label {
          font-size: 12px;
          color: #666;
        }

        .word-preview {
          font-family: 'Courier New', monospace;
          font-size: 14px;
          font-weight: bold;
          color: #5D4037;
          background: rgba(255, 255, 255, 0.5);
          padding: 2px 8px;
          border-radius: 4px;
        }

        .action-buttons {
          display: flex;
          gap: 8px;
          margin-top: 12px;
        }

        .action-btn {
          flex: 1;
          padding: 10px 12px;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .action-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .water-btn {
          background: linear-gradient(135deg, #87CEEB, #4169E1);
          color: white;
        }

        .water-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(65, 105, 225, 0.4);
        }

        .fertilize-btn {
          background: linear-gradient(135deg, #90EE90, #228B22);
          color: white;
        }

        .fertilize-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(34, 139, 34, 0.4);
        }

        .harvest-btn {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          color: #5D4037;
        }

        .harvest-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(255, 165, 0, 0.4);
        }

        .warning-banner {
          margin-top: 12px;
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: bold;
          text-align: center;
        }

        .water-warning {
          background: rgba(65, 105, 225, 0.2);
          color: #4169E1;
        }

        .overripe-warning {
          background: rgba(255, 165, 0, 0.2);
          color: #FF8C00;
        }

        .withered-warning {
          background: rgba(128, 128, 128, 0.2);
          color: #666;
        }

        @keyframes pulse-warning {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
      `})]})},Dm=({row:e,col:t,onPlant:n,onClose:r})=>{const{gold:o,inventory:a,unlockedCrops:s}=Oe(),l=y=>{const v=a.find(j=>j.type==="seed"&&j.cropTypeId===y);return(v==null?void 0:v.quantity)||0},u=y=>{if(!s.includes(y))return!1;if(l(y)>0)return!0;const j=vr[y]||0;return o>=j},c=y=>"⭐".repeat(y),p=y=>{const v=y/1e3;return v<60?`${v}秒`:`${Math.floor(v/60)}分鐘`},h=y=>{u(y.id)&&n(y)},m=Object.values(Ae).filter(y=>s.includes(y.id)).sort((y,v)=>y.difficulty-v.difficulty),k=Object.values(Ae).filter(y=>!s.includes(y.id)).sort((y,v)=>y.difficulty-v.difficulty);return i.jsx("div",{className:"modal-overlay",onClick:r,children:i.jsxs("div",{className:"modal-content",onClick:y=>y.stopPropagation(),children:[i.jsxs("div",{className:"modal-header",children:[i.jsx("h2",{children:"🌱 選擇種子"}),i.jsxs("span",{className:"slot-info",children:["種植位置: (",e+1,", ",t+1,")"]}),i.jsx("button",{className:"close-btn",onClick:r,children:"✕"})]}),i.jsxs("div",{className:"gold-display",children:[i.jsx("span",{className:"gold-icon",children:"💰"}),i.jsxs("span",{className:"gold-amount",children:[o," 金幣"]})]}),i.jsx("div",{className:"crop-grid",children:m.map(y=>{const v=l(y.id),j=vr[y.id]||0,f=v>0||o>=j,d=u(y.id);return i.jsxs("div",{className:`crop-card ${d?"":"disabled"}`,onClick:()=>h(y),children:[i.jsx("span",{className:"crop-emoji",children:y.emoji}),i.jsx("span",{className:"crop-name",children:y.name}),i.jsx("span",{className:"difficulty",children:c(y.difficulty)}),i.jsxs("div",{className:"crop-stats",children:[i.jsxs("div",{className:"stat",children:[i.jsx("span",{className:"stat-icon",children:"⏱️"}),i.jsx("span",{children:p(y.growthTime)})]}),i.jsxs("div",{className:"stat",children:[i.jsx("span",{className:"stat-icon",children:"💰"}),i.jsx("span",{children:y.sellPrice})]})]}),i.jsx("div",{className:"seed-info",children:v>0?i.jsxs("span",{className:"seed-count",children:["🌱 擁有: ",v]}):i.jsxs("span",{className:`seed-price ${f?"":"expensive"}`,children:["購買: ",j," 💰"]})}),d&&i.jsx("div",{className:"plant-indicator",children:"點擊種植"})]},y.id)})}),k.length>0&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"section-divider",children:i.jsx("span",{children:"🔒 未解鎖的作物"})}),i.jsx("div",{className:"crop-grid locked",children:k.map(y=>i.jsxs("div",{className:"crop-card locked",children:[i.jsx("span",{className:"crop-emoji",children:y.emoji}),i.jsx("span",{className:"crop-name",children:y.name}),i.jsx("span",{className:"difficulty",children:c(y.difficulty)}),i.jsx("div",{className:"lock-overlay",children:i.jsx("span",{className:"lock-icon",children:"🔒"})})]},y.id))})]}),i.jsx("div",{className:"modal-footer",children:i.jsx("span",{className:"tip",children:"💡 提示: 難度越高的作物，打字時間越短但售價越高！"})}),i.jsx("style",{children:`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            animation: fade-in 0.2s ease;
          }

          .modal-content {
            background: linear-gradient(135deg, #f5e6d3 0%, #e8d5b7 100%);
            border: 4px solid #8B7355;
            border-radius: 16px;
            padding: 24px;
            max-width: 500px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            animation: slide-up 0.3s ease;
          }

          .modal-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 16px;
            padding-bottom: 12px;
            border-bottom: 2px solid rgba(139, 115, 85, 0.3);
          }

          .modal-header h2 {
            margin: 0;
            font-size: 24px;
            color: #5D4037;
            flex: 1;
          }

          .slot-info {
            font-size: 12px;
            color: #8B7355;
            background: rgba(255, 255, 255, 0.5);
            padding: 4px 8px;
            border-radius: 4px;
          }

          .close-btn {
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: #8B7355;
            padding: 4px 8px;
            transition: color 0.2s;
          }

          .close-btn:hover {
            color: #5D4037;
          }

          .gold-display {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            margin-bottom: 16px;
            padding: 8px;
            background: rgba(255, 215, 0, 0.2);
            border-radius: 8px;
          }

          .gold-icon {
            font-size: 24px;
          }

          .gold-amount {
            font-size: 20px;
            font-weight: bold;
            color: #B8860B;
          }

          .crop-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
            gap: 12px;
            margin-bottom: 16px;
          }

          .crop-card {
            background: rgba(255, 255, 255, 0.5);
            border: 2px solid #8B7355;
            border-radius: 12px;
            padding: 12px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 6px;
            cursor: pointer;
            transition: all 0.2s ease;
            position: relative;
          }

          .crop-card:hover:not(.disabled):not(.locked) {
            transform: translateY(-4px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            border-color: #FFD700;
          }

          .crop-card.disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }

          .crop-card.locked {
            opacity: 0.6;
            cursor: not-allowed;
          }

          .crop-emoji {
            font-size: 40px;
          }

          .crop-name {
            font-size: 14px;
            font-weight: bold;
            color: #5D4037;
          }

          .difficulty {
            font-size: 12px;
          }

          .crop-stats {
            display: flex;
            gap: 12px;
            margin-top: 4px;
          }

          .stat {
            display: flex;
            align-items: center;
            gap: 4px;
            font-size: 11px;
            color: #666;
          }

          .stat-icon {
            font-size: 12px;
          }

          .seed-info {
            margin-top: 8px;
            font-size: 12px;
          }

          .seed-count {
            color: #228B22;
            font-weight: bold;
          }

          .seed-price {
            color: #B8860B;
          }

          .seed-price.expensive {
            color: #CC0000;
          }

          .plant-indicator {
            position: absolute;
            bottom: -2px;
            left: 50%;
            transform: translateX(-50%);
            background: #4CAF50;
            color: white;
            font-size: 10px;
            padding: 2px 8px;
            border-radius: 4px;
            opacity: 0;
            transition: opacity 0.2s;
          }

          .crop-card:hover:not(.disabled) .plant-indicator {
            opacity: 1;
          }

          .lock-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .lock-icon {
            font-size: 32px;
          }

          .section-divider {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 16px 0;
            color: #8B7355;
            font-size: 14px;
          }

          .section-divider::before,
          .section-divider::after {
            content: '';
            flex: 1;
            height: 1px;
            background: rgba(139, 115, 85, 0.3);
            margin: 0 12px;
          }

          .modal-footer {
            margin-top: 16px;
            padding-top: 12px;
            border-top: 2px solid rgba(139, 115, 85, 0.3);
            text-align: center;
          }

          .tip {
            font-size: 12px;
            color: #8B7355;
          }

          @keyframes fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes slide-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `})]})})},Rm=({crop:e,row:t,col:n,onClose:r,onSuccess:o,onFail:a})=>{const[s,l]=S.useState("ready"),[u,c]=S.useState(0),[p,h]=S.useState({wpm:0,accuracy:0,combo:0}),{addGold:m,updateStats:k,addToInventory:y,addXP:v}=Oe(),{removeCrop:j}=xe(),f=st.calculateSellPrice(e),d=S.useCallback(x=>{l("success"),h(x);const b=Math.floor(f*(x.combo*.1)),C=f+b;c(C),m(C);const P=x.accuracy>=100?20:5;v(P),k({totalWordsTyped:Oe.getState().stats.totalWordsTyped+1,totalCropsHarvested:Oe.getState().stats.totalCropsHarvested+1,bestCombo:Math.max(Oe.getState().stats.bestCombo,x.combo)}),y({type:"crop",cropTypeId:e.cropType.id,quantity:1}),j(t,n),o(C,e)},[f,m,v,k,y,j,t,n,e,o]),g=S.useCallback(()=>{l("failed"),xe.getState().getCropAt(t,n),a()},[t,n,a]),w=S.useCallback(x=>{console.log(`Combo milestone reached: ${x}!`)},[]),N=()=>{l("typing")};return i.jsx("div",{className:"modal-overlay",children:i.jsxs("div",{className:"harvest-modal",children:[s==="ready"&&i.jsxs("div",{className:"ready-content",children:[i.jsxs("div",{className:"crop-preview",children:[i.jsx("span",{className:"crop-emoji-large",children:e.cropType.emoji}),i.jsx("h2",{children:e.cropType.name})]}),i.jsxs("div",{className:"harvest-info",children:[i.jsxs("p",{className:"word-preview",children:["打字收成: ",i.jsx("strong",{children:e.wordToHarvest})]}),i.jsxs("p",{className:"time-limit",children:["時間限制: ",i.jsxs("strong",{children:[e.cropType.harvestTimeLimit,"秒"]})]}),i.jsxs("p",{className:"reward",children:["獎勵: ",i.jsxs("strong",{children:[f," 💰"]})]})]}),i.jsxs("div",{className:"action-buttons",children:[i.jsx("button",{className:"start-btn",onClick:N,children:"🌾 開始收成!"}),i.jsx("button",{className:"cancel-btn",onClick:r,children:"取消"})]})]}),s==="typing"&&i.jsx("div",{className:"typing-content",children:i.jsx(vs,{targetWord:e.wordToHarvest,timeLimit:e.cropType.harvestTimeLimit,cropSlotId:e.id,cropType:e.cropType,autoStart:!0,onComplete:d,onTimeout:g,onComboMilestone:w})}),s==="success"&&i.jsxs("div",{className:"success-content",children:[i.jsx("div",{className:"success-icon",children:"🎉"}),i.jsx("h2",{children:"收成成功!"}),i.jsx("div",{className:"crop-harvested",children:i.jsx("span",{className:"crop-emoji-large",children:e.cropType.emoji})}),i.jsxs("div",{className:"rewards-summary",children:[i.jsxs("div",{className:"reward-row",children:[i.jsx("span",{children:"基本獎勵:"}),i.jsxs("span",{className:"gold",children:[f," 💰"]})]}),p.combo>1&&i.jsxs("div",{className:"reward-row bonus",children:[i.jsxs("span",{children:["連擊加成 (x",p.combo,"):"]}),i.jsxs("span",{className:"gold",children:["+",u-f," 💰"]})]}),i.jsxs("div",{className:"reward-row total",children:[i.jsx("span",{children:"總計:"}),i.jsxs("span",{className:"gold",children:[u," 💰"]})]})]}),i.jsxs("div",{className:"typing-stats",children:[i.jsxs("div",{className:"stat",children:[i.jsx("span",{className:"stat-label",children:"速度"}),i.jsxs("span",{className:"stat-value",children:[p.wpm," WPM"]})]}),i.jsxs("div",{className:"stat",children:[i.jsx("span",{className:"stat-label",children:"正確率"}),i.jsxs("span",{className:"stat-value",children:[p.accuracy,"%"]})]}),i.jsxs("div",{className:"stat",children:[i.jsx("span",{className:"stat-label",children:"連擊"}),i.jsxs("span",{className:"stat-value",children:["x",p.combo]})]})]}),i.jsx("button",{className:"close-btn-primary",onClick:r,children:"繼續"})]}),s==="failed"&&i.jsxs("div",{className:"failed-content",children:[i.jsx("div",{className:"failed-icon",children:"😢"}),i.jsx("h2",{children:"時間到!"}),i.jsx("p",{className:"failed-message",children:"收成失敗，作物狀態已下降"}),i.jsx("button",{className:"close-btn-primary",onClick:r,children:"再試一次"})]}),i.jsx("style",{children:`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            animation: fade-in 0.2s ease;
          }

          .harvest-modal {
            background: linear-gradient(135deg, #f5e6d3 0%, #e8d5b7 100%);
            border: 4px solid #8B7355;
            border-radius: 16px;
            padding: 24px;
            min-width: 420px;
            max-width: 600px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            animation: slide-up 0.3s ease;
          }

          .ready-content,
          .success-content,
          .failed-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .crop-preview {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 20px;
          }

          .crop-emoji-large {
            font-size: 80px;
            margin-bottom: 8px;
          }

          .crop-preview h2 {
            margin: 0;
            color: #5D4037;
            font-size: 28px;
          }

          .harvest-info {
            background: rgba(255, 255, 255, 0.5);
            padding: 16px 24px;
            border-radius: 12px;
            margin-bottom: 20px;
          }

          .harvest-info p {
            margin: 8px 0;
            font-size: 16px;
            color: #666;
          }

          .harvest-info strong {
            color: #5D4037;
            font-size: 18px;
          }

          .word-preview strong {
            font-family: 'Courier New', monospace;
            background: rgba(0, 0, 0, 0.1);
            padding: 4px 12px;
            border-radius: 6px;
            display: inline-block;
            margin-left: 8px;
          }

          .action-buttons {
            display: flex;
            gap: 12px;
          }

          .start-btn {
            background: linear-gradient(135deg, #FFD700, #FFA500);
            color: #5D4037;
            border: none;
            padding: 14px 32px;
            font-size: 18px;
            font-weight: bold;
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.2s ease;
          }

          .start-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(255, 165, 0, 0.4);
          }

          .cancel-btn {
            background: rgba(0, 0, 0, 0.1);
            color: #666;
            border: none;
            padding: 14px 24px;
            font-size: 16px;
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.2s ease;
          }

          .cancel-btn:hover {
            background: rgba(0, 0, 0, 0.2);
          }

          .typing-content {
            width: 100%;
          }

          .success-icon,
          .failed-icon {
            font-size: 64px;
            margin-bottom: 12px;
          }

          .success-content h2,
          .failed-content h2 {
            margin: 0 0 16px 0;
            color: #5D4037;
            font-size: 28px;
          }

          .crop-harvested {
            margin: 16px 0;
            animation: bounce-in 0.5s ease;
          }

          .rewards-summary {
            background: rgba(255, 255, 255, 0.5);
            padding: 16px 24px;
            border-radius: 12px;
            margin-bottom: 16px;
            width: 100%;
          }

          .reward-row {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            font-size: 16px;
            color: #666;
          }

          .reward-row.bonus {
            color: #4CAF50;
          }

          .reward-row.total {
            border-top: 2px solid rgba(0, 0, 0, 0.1);
            margin-top: 8px;
            padding-top: 12px;
            font-weight: bold;
            font-size: 20px;
            color: #5D4037;
          }

          .gold {
            color: #B8860B;
            font-weight: bold;
          }

          .typing-stats {
            display: flex;
            gap: 24px;
            margin-bottom: 20px;
          }

          .typing-stats .stat {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .stat-label {
            font-size: 12px;
            color: #8B7355;
            text-transform: uppercase;
          }

          .stat-value {
            font-size: 20px;
            font-weight: bold;
            color: #5D4037;
          }

          .close-btn-primary {
            background: linear-gradient(135deg, #4CAF50, #388E3C);
            color: white;
            border: none;
            padding: 14px 48px;
            font-size: 18px;
            font-weight: bold;
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.2s ease;
          }

          .close-btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(76, 175, 80, 0.4);
          }

          .failed-message {
            font-size: 16px;
            color: #666;
            margin-bottom: 20px;
          }

          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes slide-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes bounce-in {
            0% { transform: scale(0); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
          }
        `})]})})},Om=()=>{const{grid:e,gridSize:t,selectedSlot:n,selectSlot:r,clearSelection:o,plantCrop:a,waterCrop:s,fertilizeCrop:l}=xe(),{spendGold:u,inventory:c,removeFromInventory:p}=Oe(),[h,m]=S.useState(!1),[k,y]=S.useState(!1),[v,j]=S.useState(null),[f,d]=S.useState(null),[g,w]=S.useState(null),N=S.useCallback((z,F="info")=>{w({message:z,type:F}),setTimeout(()=>w(null),3e3)},[]),x=S.useCallback((z,F)=>{e[z][F]?(n==null?void 0:n.row)===z&&(n==null?void 0:n.col)===F?o():r(z,F):(j({row:z,col:F}),m(!0))},[e,n,r,o]),b=S.useCallback(z=>{if(!v)return;const{row:F,col:W}=v,T=c.find(I=>I.type==="seed"&&I.cropTypeId===z.id);if(T&&T.quantity>0)p(T.id,1);else{const I=vr[z.id]||0;if(!u(I)){N("金幣不足!","error");return}}a(F,W,z)?N(`種植了 ${z.emoji} ${z.name}!`,"success"):N("種植失敗!","error"),m(!1),j(null)},[v,c,p,u,a,N]),C=S.useCallback(()=>{n&&(s(n.row,n.col),N("💧 澆水完成!","info"))},[n,s,N]),M=S.useCallback(()=>{n&&(l(n.row,n.col),N("🌿 施肥完成!","info"))},[n,l,N]),P=S.useCallback(()=>{if(!n)return;const z=e[n.row][n.col];!z||!st.canHarvest(z)||(d({crop:z,row:n.row,col:n.col}),y(!0))},[n,e]),A=S.useCallback((z,F)=>{N(`🎉 收成 ${F.cropType.emoji} 獲得 ${z} 金幣!`,"success"),o()},[N,o]),D=S.useCallback(()=>{N("😢 收成失敗，下次加油!","error")},[N]),V=S.useCallback(()=>{y(!1),d(null)},[]),G=n?e[n.row][n.col]:null;return i.jsxs("div",{className:"farm-container",children:[g&&i.jsx("div",{className:`notification ${g.type}`,children:g.message}),i.jsxs("div",{className:"farm-layout",children:[i.jsxs("div",{className:"farm-grid-container",children:[i.jsx("h2",{className:"farm-title",children:"🌾 我的農場"}),i.jsx("div",{className:"farm-grid",style:{gridTemplateColumns:`repeat(${t.cols}, 1fr)`,gridTemplateRows:`repeat(${t.rows}, 1fr)`},children:e.map((z,F)=>z.map((W,T)=>i.jsx(Mm,{crop:W,row:F,col:T,isSelected:(n==null?void 0:n.row)===F&&(n==null?void 0:n.col)===T,onClick:()=>x(F,T)},`${F}-${T}`)))})]}),i.jsx("div",{className:"info-panel",children:G?i.jsx(Fm,{crop:G,onHarvest:P,onWater:C,onFertilize:M,onClose:o}):i.jsxs("div",{className:"no-selection",children:[i.jsx("div",{className:"hint-icon",children:"👆"}),i.jsx("p",{children:"選擇一個農田格子"}),i.jsxs("p",{className:"hint",children:["點擊空格子種植",i.jsx("br",{}),"點擊作物查看資訊"]})]})})]}),h&&v&&i.jsx(Dm,{row:v.row,col:v.col,onPlant:b,onClose:()=>{m(!1),j(null)}}),k&&f&&i.jsx(Rm,{crop:f.crop,row:f.row,col:f.col,onClose:V,onSuccess:A,onFail:D}),i.jsx("style",{children:`
        .farm-container {
          width: 100%;
          padding: 20px;
          position: relative;
        }

        .notification {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: bold;
          z-index: 1100;
          animation: slide-down 0.3s ease, fade-out 0.3s ease 2.7s;
        }

        .notification.success {
          background: linear-gradient(135deg, #4CAF50, #388E3C);
          color: white;
        }

        .notification.error {
          background: linear-gradient(135deg, #f44336, #c62828);
          color: white;
        }

        .notification.info {
          background: linear-gradient(135deg, #2196F3, #1976D2);
          color: white;
        }

        .farm-layout {
          display: flex;
          gap: 24px;
          justify-content: center;
          align-items: flex-start;
        }

        .farm-grid-container {
          background: linear-gradient(180deg, #87CEEB 0%, #98D8C8 50%, #90EE90 100%);
          padding: 24px;
          border-radius: 16px;
          border: 4px solid #8B7355;
          box-shadow: 
            inset 0 2px 4px rgba(255, 255, 255, 0.3),
            0 8px 24px rgba(0, 0, 0, 0.2);
        }

        .farm-title {
          margin: 0 0 16px 0;
          text-align: center;
          color: #5D4037;
          font-size: 24px;
          text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
        }

        .farm-grid {
          display: grid;
          gap: 8px;
        }

        .info-panel {
          min-width: 280px;
        }

        .no-selection {
          background: linear-gradient(135deg, #f5e6d3 0%, #e8d5b7 100%);
          border: 3px solid #8B7355;
          border-radius: 12px;
          padding: 32px 24px;
          text-align: center;
          color: #8B7355;
        }

        .hint-icon {
          font-size: 48px;
          margin-bottom: 12px;
        }

        .no-selection p {
          margin: 8px 0;
          font-size: 16px;
        }

        .hint {
          font-size: 13px !important;
          color: #A0826D;
          line-height: 1.5;
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        @keyframes fade-out {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
      `})]})},$m=({weather:e})=>i.jsxs("div",{className:`weather-overlay weather-${e}`,children:[e==="sunny"&&i.jsxs("div",{className:"sunny-effects",children:[i.jsx("div",{className:"sun-rays"}),[...Array(20)].map((t,n)=>i.jsx("div",{className:"sun-particle",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*5}s`,animationDuration:`${3+Math.random()*4}s`}},n))]}),e==="rainy"&&i.jsx("div",{className:"rain-effects",children:[...Array(100)].map((t,n)=>i.jsx("div",{className:"raindrop",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*2}s`,animationDuration:`${.5+Math.random()*.5}s`}},n))}),e==="stormy"&&i.jsxs("div",{className:"storm-effects",children:[i.jsx("div",{className:"storm-overlay"}),[...Array(150)].map((t,n)=>i.jsx("div",{className:"storm-rain",style:{left:`${Math.random()*120}%`,animationDelay:`${Math.random()*1}s`,animationDuration:`${.3+Math.random()*.3}s`}},n)),i.jsx("div",{className:"lightning"})]}),e==="snowy"&&i.jsx("div",{className:"snow-effects",children:[...Array(50)].map((t,n)=>i.jsx("div",{className:"snowflake",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*5}s`,animationDuration:`${3+Math.random()*4}s`,fontSize:`${8+Math.random()*12}px`},children:"❄"},n))}),e==="foggy"&&i.jsxs("div",{className:"fog-effects",children:[i.jsx("div",{className:"fog-layer fog-layer-1"}),i.jsx("div",{className:"fog-layer fog-layer-2"}),i.jsx("div",{className:"fog-layer fog-layer-3"})]}),e==="rainbow"&&i.jsxs("div",{className:"rainbow-effects",children:[i.jsx("div",{className:"rainbow-arc"}),[...Array(30)].map((t,n)=>i.jsx("div",{className:"sparkle",style:{left:`${Math.random()*100}%`,top:`${Math.random()*60}%`,animationDelay:`${Math.random()*3}s`},children:"✨"},n))]}),i.jsx("style",{children:`
        .weather-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 100;
          overflow: hidden;
        }

        /* ============ SUNNY ============ */
        .sunny-effects {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .sun-rays {
          position: absolute;
          top: -50px;
          right: -50px;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(255,200,50,0.4) 0%, transparent 70%);
          animation: pulse-glow 4s ease-in-out infinite;
        }

        .sun-particle {
          position: absolute;
          top: -20px;
          width: 4px;
          height: 4px;
          background: rgba(255, 200, 50, 0.6);
          border-radius: 50%;
          animation: float-down 5s linear infinite;
        }

        @keyframes pulse-glow {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.2); opacity: 1; }
        }

        @keyframes float-down {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }

        /* ============ RAINY ============ */
        .rain-effects {
          width: 100%;
          height: 100%;
          position: relative;
          background: linear-gradient(180deg, rgba(100,100,120,0.1) 0%, transparent 50%);
        }

        .raindrop {
          position: absolute;
          top: -20px;
          width: 2px;
          height: 20px;
          background: linear-gradient(180deg, transparent, rgba(150,180,255,0.6));
          animation: rain-fall linear infinite;
        }

        @keyframes rain-fall {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0.5; }
        }

        /* ============ STORMY ============ */
        .storm-effects {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .storm-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(30, 30, 50, 0.3);
        }

        .storm-rain {
          position: absolute;
          top: -30px;
          width: 2px;
          height: 30px;
          background: linear-gradient(180deg, transparent, rgba(150,180,255,0.8));
          transform: rotate(15deg);
          animation: storm-rain-fall linear infinite;
        }

        @keyframes storm-rain-fall {
          0% { transform: translateY(0) translateX(0) rotate(15deg); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(100vh) translateX(-50px) rotate(15deg); opacity: 0; }
        }

        .lightning {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: white;
          opacity: 0;
          animation: lightning-flash 8s infinite;
        }

        @keyframes lightning-flash {
          0%, 89%, 91%, 93%, 100% { opacity: 0; }
          90%, 92% { opacity: 0.3; }
        }

        /* ============ SNOWY ============ */
        .snow-effects {
          width: 100%;
          height: 100%;
          position: relative;
          background: linear-gradient(180deg, rgba(200,210,255,0.1) 0%, transparent 30%);
        }

        .snowflake {
          position: absolute;
          top: -20px;
          color: white;
          text-shadow: 0 0 5px rgba(255,255,255,0.8);
          animation: snow-fall linear infinite;
        }

        @keyframes snow-fall {
          0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.9; }
          100% { 
            transform: translateY(100vh) translateX(50px) rotate(720deg); 
            opacity: 0; 
          }
        }

        /* ============ FOGGY ============ */
        .fog-effects {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .fog-layer {
          position: absolute;
          width: 200%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent 0%,
            rgba(255,255,255,0.3) 30%,
            rgba(255,255,255,0.5) 50%,
            rgba(255,255,255,0.3) 70%,
            transparent 100%
          );
        }

        .fog-layer-1 {
          animation: fog-drift 15s linear infinite;
          opacity: 0.3;
        }

        .fog-layer-2 {
          animation: fog-drift 20s linear infinite reverse;
          opacity: 0.2;
          top: 30%;
        }

        .fog-layer-3 {
          animation: fog-drift 25s linear infinite;
          opacity: 0.4;
          top: 60%;
        }

        @keyframes fog-drift {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        /* ============ RAINBOW ============ */
        .rainbow-effects {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .rainbow-arc {
          position: absolute;
          top: -200px;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 300px;
          border-radius: 300px 300px 0 0;
          background: linear-gradient(
            180deg,
            rgba(255,0,0,0.2) 0%,
            rgba(255,127,0,0.2) 16%,
            rgba(255,255,0,0.2) 33%,
            rgba(0,255,0,0.2) 50%,
            rgba(0,0,255,0.2) 66%,
            rgba(75,0,130,0.2) 83%,
            rgba(148,0,211,0.2) 100%
          );
          animation: rainbow-pulse 3s ease-in-out infinite;
        }

        @keyframes rainbow-pulse {
          0%, 100% { opacity: 0.5; transform: translateX(-50%) scale(1); }
          50% { opacity: 0.8; transform: translateX(-50%) scale(1.05); }
        }

        .sparkle {
          position: absolute;
          font-size: 16px;
          animation: sparkle-twinkle 2s ease-in-out infinite;
        }

        @keyframes sparkle-twinkle {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1); }
        }
      `})]}),Am=({weather:e,showForecast:t=!0,forecast:n=[]})=>{const[r,o]=S.useState(!1),[a,s]=S.useState(!1),l=gs[e];return i.jsxs("div",{className:"weather-icon-container",onMouseEnter:()=>o(!0),onMouseLeave:()=>{o(!1),s(!1)},onClick:()=>t&&s(!a),children:[i.jsx("div",{className:`weather-icon weather-${e}`,children:i.jsx("span",{className:"weather-emoji",children:l.emoji})}),r&&!a&&i.jsxs("div",{className:"weather-tooltip",children:[i.jsxs("div",{className:"tooltip-header",children:[i.jsx("span",{className:"tooltip-emoji",children:l.emoji}),i.jsx("span",{className:"tooltip-name",children:l.name})]}),i.jsx("div",{className:"tooltip-effect",children:l.effect}),t&&i.jsx("div",{className:"tooltip-hint",children:"Click for forecast"})]}),a&&n.length>0&&i.jsxs("div",{className:"forecast-panel",children:[i.jsx("div",{className:"forecast-title",children:"Weather Forecast"}),i.jsx("div",{className:"forecast-list",children:n.map(({weather:u,probability:c})=>{const p=gs[u];return i.jsxs("div",{className:"forecast-item",children:[i.jsx("span",{className:"forecast-emoji",children:p.emoji}),i.jsx("span",{className:"forecast-name",children:p.name}),i.jsxs("span",{className:"forecast-probability",children:[c,"%"]})]},u)})})]}),i.jsx("style",{children:`
        .weather-icon-container {
          position: relative;
          cursor: pointer;
        }

        .weather-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.9);
          border: 3px solid #8B7355;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .weather-icon:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        }

        .weather-sunny {
          background: linear-gradient(135deg, #fff8dc, #ffeeba);
        }

        .weather-rainy {
          background: linear-gradient(135deg, #e0e8f0, #c8d8e8);
        }

        .weather-stormy {
          background: linear-gradient(135deg, #6c7a89, #4a5568);
        }

        .weather-snowy {
          background: linear-gradient(135deg, #ffffff, #e0e8ff);
        }

        .weather-foggy {
          background: linear-gradient(135deg, #f0f0f0, #d0d0d0);
        }

        .weather-rainbow {
          background: linear-gradient(135deg, 
            rgba(255,0,0,0.2),
            rgba(255,127,0,0.2),
            rgba(255,255,0,0.2),
            rgba(0,255,0,0.2),
            rgba(0,0,255,0.2),
            rgba(148,0,211,0.2)
          );
        }

        .weather-emoji {
          font-size: 28px;
        }

        .weather-tooltip {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 8px;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.95);
          border: 2px solid #8B7355;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          white-space: nowrap;
          z-index: 1000;
          animation: tooltip-fade-in 0.2s ease;
        }

        @keyframes tooltip-fade-in {
          from { opacity: 0; transform: translateX(-50%) translateY(-5px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }

        .tooltip-header {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: bold;
          color: #5a4a3a;
          margin-bottom: 4px;
        }

        .tooltip-emoji {
          font-size: 24px;
        }

        .tooltip-name {
          font-size: 16px;
        }

        .tooltip-effect {
          font-size: 14px;
          color: #666;
        }

        .tooltip-hint {
          font-size: 12px;
          color: #999;
          margin-top: 8px;
          font-style: italic;
        }

        .forecast-panel {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 8px;
          padding: 16px;
          background: rgba(255, 255, 255, 0.95);
          border: 2px solid #8B7355;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          z-index: 1000;
          min-width: 180px;
          animation: tooltip-fade-in 0.2s ease;
        }

        .forecast-title {
          font-weight: bold;
          color: #5a4a3a;
          margin-bottom: 12px;
          text-align: center;
          font-size: 14px;
        }

        .forecast-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .forecast-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 8px;
          background: rgba(139, 115, 85, 0.1);
          border-radius: 4px;
        }

        .forecast-emoji {
          font-size: 20px;
        }

        .forecast-name {
          flex: 1;
          font-size: 14px;
          color: #5a4a3a;
        }

        .forecast-probability {
          font-size: 14px;
          font-weight: bold;
          color: #2d5a27;
        }
      `})]})},Dl=["crow","bird","shoo","away","scat","flee","chase","scary","quick","fast","guard","help","watch","alert","save","crops","farm","pest"];class Wm{constructor(){pe(this,"crows",[]);pe(this,"spawnInterval",null);pe(this,"updateInterval",null);pe(this,"isRunning",!1);pe(this,"MIN_SPAWN_INTERVAL",30*1e3);pe(this,"MAX_SPAWN_INTERVAL",60*1e3);pe(this,"STEAL_TIME",10*1e3)}start(){this.isRunning||(this.isRunning=!0,this.scheduleNextSpawn(),this.startUpdateLoop(),console.log("[CrowSystem] Started"))}stop(){this.isRunning=!1,this.spawnInterval!==null&&(clearTimeout(this.spawnInterval),this.spawnInterval=null),this.updateInterval!==null&&(clearInterval(this.updateInterval),this.updateInterval=null),console.log("[CrowSystem] Stopped")}scheduleNextSpawn(){if(!this.isRunning)return;let t=this.MIN_SPAWN_INTERVAL+Math.random()*(this.MAX_SPAWN_INTERVAL-this.MIN_SPAWN_INTERVAL);je.getState().hasScarecrow&&(t*=2),this.spawnInterval=window.setTimeout(()=>{this.spawnCrow(),this.scheduleNextSpawn()},t)}startUpdateLoop(){this.updateInterval=window.setInterval(()=>{this.update()},1e3)}spawnCrow(){const n=xe.getState().getMatureCrops();if(n.length===0)return console.log("[CrowSystem] No mature crops to attack"),null;const r=n[Math.floor(Math.random()*n.length)];if(this.crows.find(s=>s.targetSlot.row===r.row&&s.targetSlot.col===r.col))return console.log("[CrowSystem] Slot already has a crow"),null;const a={id:`crow-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,targetSlot:{row:r.row,col:r.col},landedAt:Date.now(),wordToChase:Dl[Math.floor(Math.random()*Dl.length)],isBeingChased:!1};return this.crows.push(a),je.getState().addCrow(a),console.log(`[CrowSystem] Crow spawned at (${r.row}, ${r.col})`),a}getCrows(){return[...this.crows]}getCrow(t){return this.crows.find(n=>n.id===t)}getCrowAtSlot(t,n){return this.crows.find(r=>r.targetSlot.row===t&&r.targetSlot.col===n)}startChasing(t){const n=this.crows.find(r=>r.id===t);n&&(n.isBeingChased=!0,console.log(`[CrowSystem] Started chasing crow ${t}`))}chaseCrow(t){const n=this.crows.findIndex(r=>r.id===t);n!==-1&&(this.crows.splice(n,1),je.getState().removeCrow(t),console.log(`[CrowSystem] Crow ${t} chased away!`))}crowSteals(t){const n=this.crows.find(o=>o.id===t);if(!n)return;xe.getState().removeCrop(n.targetSlot.row,n.targetSlot.col),this.crows=this.crows.filter(o=>o.id!==t),je.getState().removeCrow(t),console.log(`[CrowSystem] Crow ${t} stole crop at (${n.targetSlot.row}, ${n.targetSlot.col})!`)}update(){if(!this.isRunning)return;const t=Date.now();for(const n of[...this.crows]){if(n.isBeingChased)continue;t-n.landedAt>=this.STEAL_TIME&&this.crowSteals(n.id)}}getTimeRemaining(t){const n=this.crows.find(a=>a.id===t);if(!n)return 0;const r=Date.now()-n.landedAt,o=this.STEAL_TIME-r;return Math.max(0,Math.ceil(o/1e3))}clearAllCrows(){this.crows=[];const t=je.getState();for(const n of t.activeCrows)t.removeCrow(n.id);console.log("[CrowSystem] All crows cleared")}hasActiveCrows(){return this.crows.length>0}}const it=new Wm,Bm=({crow:e,onChase:t,onDismiss:n})=>{const[r,o]=S.useState(10),a=xe(u=>u.getCropAt(e.targetSlot.row,e.targetSlot.col));S.useEffect(()=>{const u=setInterval(()=>{const c=it.getTimeRemaining(e.id);o(c),c<=0&&(clearInterval(u),n==null||n(e.id))},100);return()=>clearInterval(u)},[e.id,n]);const s=(a==null?void 0:a.cropType.name)||"crop",l=(a==null?void 0:a.cropType.emoji)||"🌱";return i.jsxs("div",{className:`crow-alert ${r<=3?"urgent":""}`,children:[i.jsxs("div",{className:"alert-header",children:[i.jsx("span",{className:"alert-icon",children:"🐦"}),i.jsx("span",{className:"alert-title",children:"Crow Attack!"})]}),i.jsxs("div",{className:"alert-message",children:["A crow is attacking your ",l," ",s,"!"]}),i.jsxs("div",{className:"alert-timer",children:[i.jsx("div",{className:"timer-bar",style:{width:`${r/10*100}%`}}),i.jsxs("span",{className:"timer-text",children:[r,"s"]})]}),i.jsxs("div",{className:"alert-word",children:['Type "',i.jsx("span",{className:"word",children:e.wordToChase}),'" to chase!']}),i.jsx("button",{className:"chase-button",onClick:()=>t(e.id),children:"🏃 Chase Crow"}),i.jsx("style",{children:`
        .crow-alert {
          background: linear-gradient(135deg, #fff8dc, #ffeeba);
          border: 3px solid #d4a520;
          border-radius: 12px;
          padding: 16px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.3);
          animation: alert-bounce 0.5s ease;
          max-width: 280px;
        }

        .crow-alert.urgent {
          border-color: #ff4444;
          animation: alert-shake 0.3s infinite;
        }

        @keyframes alert-bounce {
          0% { transform: scale(0.8) translateY(-20px); opacity: 0; }
          50% { transform: scale(1.05) translateY(0); }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }

        @keyframes alert-shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-3px); }
          75% { transform: translateX(3px); }
        }

        .alert-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }

        .alert-icon {
          font-size: 28px;
          animation: crow-hop 0.5s ease infinite;
        }

        @keyframes crow-hop {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .alert-title {
          font-size: 18px;
          font-weight: bold;
          color: #8b4513;
        }

        .alert-message {
          font-size: 14px;
          color: #5a4a3a;
          margin-bottom: 12px;
        }

        .alert-timer {
          position: relative;
          height: 24px;
          background: rgba(0,0,0,0.1);
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 12px;
        }

        .timer-bar {
          height: 100%;
          background: linear-gradient(90deg, #ff6b6b, #feca57);
          border-radius: 12px;
          transition: width 0.1s linear;
        }

        .crow-alert.urgent .timer-bar {
          background: linear-gradient(90deg, #ff0000, #ff4444);
        }

        .timer-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-weight: bold;
          color: #333;
          font-size: 12px;
        }

        .alert-word {
          text-align: center;
          font-size: 14px;
          color: #5a4a3a;
          margin-bottom: 12px;
        }

        .alert-word .word {
          font-family: 'Courier New', monospace;
          font-size: 18px;
          font-weight: bold;
          color: #2d5a27;
          background: rgba(45, 90, 39, 0.1);
          padding: 2px 8px;
          border-radius: 4px;
        }

        .chase-button {
          width: 100%;
          padding: 12px 24px;
          font-size: 16px;
          font-weight: bold;
          color: white;
          background: linear-gradient(135deg, #4CAF50, #45a049);
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .chase-button:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(76, 175, 80, 0.4);
        }

        .chase-button:active {
          transform: scale(0.98);
        }
      `})]})},Um=({className:e=""})=>{const{gold:t,gems:n,reputation:r,level:o,xp:a}=Oe(),{setScreen:s}=Ft(),[l,u]=S.useState(t),[c,p]=S.useState(0),[h,m]=S.useState(!1),[k,y]=S.useState(null),[v,j]=S.useState(a),[f,d]=S.useState(0),[g,w]=S.useState(!1),[N,x]=S.useState(!1),[b,C]=S.useState(!1),M=S.useRef(o);S.useEffect(()=>{if(t!==l){const D=t-l;p(D),m(!0),y(D>0?"positive":"negative");const V=10,G=D/V;let z=l,F=0;const W=setInterval(()=>{F++,F>=V?(u(t),clearInterval(W)):(z+=G,u(Math.round(z)))},50),T=setTimeout(()=>{m(!1),y(null)},1500);return()=>{clearInterval(W),clearTimeout(T)}}},[t,l]),S.useEffect(()=>{if(a!==v){const D=a-v;D>0&&(d(D),w(!0),x(!0));const V=15,G=(a-v)/V;let z=v,F=0;const W=setInterval(()=>{F++,F>=V?(j(a),clearInterval(W)):(z+=G,j(Math.round(z)))},40),T=setTimeout(()=>{w(!1),x(!1)},1500);return()=>{clearInterval(W),clearTimeout(T)}}},[a,v]),S.useEffect(()=>{o>M.current&&(C(!0),setTimeout(()=>C(!1),1e3)),M.current=o},[o]);const P=od*o,A=v/P*100;return i.jsxs("div",{className:`stats-bar ${e}`,children:[i.jsxs("div",{className:`stat-item gold-stat ${k?`flash-${k}`:""}`,children:[i.jsx("span",{className:"stat-icon coin-icon",children:"🪙"}),i.jsx("span",{className:"stat-value",children:l.toLocaleString()}),h&&i.jsxs("span",{className:`stat-delta ${c>=0?"positive":"negative"}`,children:[c>=0?"+":"",c]}),h&&c>0&&i.jsxs("div",{className:"floating-coins",children:[i.jsx("span",{className:"floating-coin fc1",children:"🪙"}),i.jsx("span",{className:"floating-coin fc2",children:"🪙"}),i.jsx("span",{className:"floating-coin fc3",children:"🪙"})]})]}),i.jsxs("div",{className:"stat-item gems-stat",children:[i.jsx("span",{className:"stat-icon gem-icon",children:"💎"}),i.jsx("span",{className:"stat-value",children:n})]}),i.jsxs("div",{className:"stat-item reputation-stat",children:[i.jsx("span",{className:"stat-icon star-icon",children:"🌟"}),i.jsx("span",{className:"stat-value",children:r})]}),i.jsxs("div",{className:`stat-item level-stat ${b?"level-up-burst":""}`,children:[i.jsxs("div",{className:"level-header",children:[i.jsx("span",{className:"stat-icon",children:"📊"}),i.jsxs("span",{className:"stat-label",children:["Lv.",o]}),b&&i.jsx("span",{className:"level-up-text",children:"LEVEL UP!"})]}),i.jsxs("div",{className:`xp-bar ${N?"xp-glow":""}`,children:[i.jsx("div",{className:"xp-fill",style:{width:`${Math.min(100,A)}%`}}),i.jsxs("span",{className:"xp-text",children:[v,"/",P]})]}),g&&i.jsxs("span",{className:"xp-delta",children:["+",f," XP"]})]}),i.jsxs("div",{className:"stat-buttons",children:[i.jsx("button",{className:"stat-btn shop-btn",onClick:()=>s("shop"),title:"商店",children:"🏪"}),i.jsx("button",{className:"stat-btn inventory-btn",onClick:()=>s("inventory"),title:"背包",children:"🎒"})]}),i.jsx("style",{children:`
        .stats-bar {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.5rem 1rem;
          background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.5));
          border-radius: 0.5rem;
          color: white;
          font-family: 'Press Start 2P', 'Comic Sans MS', monospace;
          font-size: 0.75rem;
          flex-wrap: wrap;
          position: relative;
          z-index: 100;
        }
        
        .stat-item {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          position: relative;
          transition: all 0.3s ease;
        }
        
        .stat-icon {
          font-size: 1.25rem;
          transition: transform 0.3s ease;
        }
        
        .stat-value {
          font-weight: bold;
          min-width: 3rem;
          transition: all 0.3s ease;
        }
        
        /* Gold stat styles */
        .gold-stat .stat-value {
          color: #ffd700;
        }
        
        .gold-stat.flash-positive {
          animation: flash-green 0.5s ease-out;
        }
        
        .gold-stat.flash-negative {
          animation: flash-red 0.5s ease-out;
        }
        
        .gold-stat.flash-positive .coin-icon {
          animation: coin-bounce 0.5s ease-out;
        }
        
        @keyframes flash-green {
          0%, 100% { background: transparent; }
          50% { background: rgba(74, 222, 128, 0.3); }
        }
        
        @keyframes flash-red {
          0%, 100% { background: transparent; }
          50% { background: rgba(248, 113, 113, 0.3); }
        }
        
        @keyframes coin-bounce {
          0%, 100% { transform: scale(1) rotate(0deg); }
          25% { transform: scale(1.3) rotate(-10deg); }
          50% { transform: scale(1.2) rotate(10deg); }
          75% { transform: scale(1.1) rotate(-5deg); }
        }
        
        /* Floating coins */
        .floating-coins {
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          pointer-events: none;
        }
        
        .floating-coin {
          position: absolute;
          font-size: 0.875rem;
          animation: float-up 1s ease-out forwards;
        }
        
        .floating-coin.fc1 { animation-delay: 0s; left: -10px; }
        .floating-coin.fc2 { animation-delay: 0.15s; left: 0px; }
        .floating-coin.fc3 { animation-delay: 0.3s; left: 10px; }
        
        @keyframes float-up {
          0% { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
          100% { 
            opacity: 0; 
            transform: translateY(-30px) scale(0.5); 
          }
        }
        
        .stat-delta {
          position: absolute;
          top: -1.25rem;
          right: 0;
          font-size: 0.75rem;
          font-weight: bold;
          animation: floatUp 1.5s ease-out forwards;
          white-space: nowrap;
        }
        
        .stat-delta.positive {
          color: #4ade80;
          text-shadow: 0 0 8px rgba(74, 222, 128, 0.6);
        }
        
        .stat-delta.negative {
          color: #f87171;
          text-shadow: 0 0 8px rgba(248, 113, 113, 0.6);
        }
        
        @keyframes floatUp {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-1.5rem);
          }
        }
        
        /* Gems stat */
        .gems-stat .stat-value {
          color: #60a5fa;
        }
        
        .gem-icon {
          animation: gem-shimmer 3s ease-in-out infinite;
        }
        
        @keyframes gem-shimmer {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.3); }
        }
        
        /* Reputation stat */
        .reputation-stat .stat-value {
          color: #fbbf24;
        }
        
        .star-icon {
          animation: star-pulse 2s ease-in-out infinite;
        }
        
        @keyframes star-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        /* Level stat */
        .level-stat {
          flex-direction: column;
          align-items: flex-start;
          gap: 0.125rem;
          position: relative;
        }
        
        .level-header {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        
        .level-stat.level-up-burst {
          animation: level-burst 1s ease-out;
        }
        
        @keyframes level-burst {
          0% { 
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.8);
          }
          50% { 
            transform: scale(1.1);
            box-shadow: 0 0 0 15px rgba(255, 215, 0, 0);
          }
          100% { 
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(255, 215, 0, 0);
          }
        }
        
        .level-up-text {
          font-size: 0.625rem;
          color: #ffd700;
          animation: level-text-pop 1s ease-out forwards;
          text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
        }
        
        @keyframes level-text-pop {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.3); opacity: 1; }
          100% { transform: scale(1); opacity: 0; }
        }
        
        .stat-label {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        
        .xp-bar {
          width: 5rem;
          height: 0.625rem;
          background: rgba(255,255,255,0.2);
          border-radius: 0.25rem;
          overflow: hidden;
          position: relative;
          transition: box-shadow 0.3s ease;
        }
        
        .xp-bar.xp-glow {
          box-shadow: 0 0 10px rgba(138, 43, 226, 0.6), 0 0 20px rgba(138, 43, 226, 0.3);
        }
        
        .xp-fill {
          height: 100%;
          background: linear-gradient(90deg, #9b59b6 0%, #8e44ad 50%, #a569bd 100%);
          border-radius: 0.25rem;
          transition: width 0.3s ease;
          position: relative;
        }
        
        .xp-fill::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 100%);
        }
        
        .xp-bar.xp-glow .xp-fill {
          animation: xp-fill-pulse 0.5s ease-out;
        }
        
        @keyframes xp-fill-pulse {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.5); }
        }
        
        .xp-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 0.5rem;
          text-shadow: 1px 1px 1px rgba(0,0,0,0.5);
          white-space: nowrap;
        }
        
        .xp-delta {
          position: absolute;
          top: -1rem;
          right: 0;
          font-size: 0.625rem;
          color: #a78bfa;
          text-shadow: 0 0 8px rgba(167, 139, 250, 0.6);
          animation: xp-float 1.5s ease-out forwards;
        }
        
        @keyframes xp-float {
          0% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-1rem); }
        }
        
        /* Quick buttons */
        .stat-buttons {
          display: flex;
          gap: 0.5rem;
          margin-left: auto;
        }
        
        .stat-btn {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 0.5rem;
          border: 2px solid rgba(255,255,255,0.3);
          background: rgba(255,255,255,0.1);
          cursor: pointer;
          font-size: 1.25rem;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .stat-btn:hover {
          background: rgba(255,255,255,0.2);
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
        
        .stat-btn:active {
          transform: translateY(0);
          box-shadow: none;
        }
        
        .shop-btn:hover {
          border-color: #ffd700;
          box-shadow: 0 0 10px rgba(255, 215, 0, 0.4);
        }
        
        .inventory-btn:hover {
          border-color: #a78bfa;
          box-shadow: 0 0 10px rgba(167, 139, 250, 0.4);
        }
      `})]})};class Hm{getShopItems(){return Jn}getShopItemsByType(t){return Jn.filter(n=>n.type===t)}getShopItem(t){return Nm(t)}canAfford(t,n,r,o=0){return n==="gold"?r>=t:o>=t}calculateSellPrice(t,n=1){const r=t.cropType.sellPrice,o=t.health>=90?1.2:t.health>=70?1.1:1,a=Math.round(r*(o-1)),s=t.growthStage==="mature"?1:t.growthStage==="overripe"?.7:.5,l=Math.round(r*(s-1)),u=Math.round(r*(n-1)*.1),c=Math.max(1,Math.round(r*o*s+u));return{basePrice:r,healthBonus:a,qualityBonus:l,comboBonus:u,total:c}}calculateInventorySellPrice(t,n=1){const r=Ae[t];return r?r.sellPrice*n:0}getSeedPrice(t){return vr[t]||5}generateOrder(t){const n=Ll[Math.floor(Math.random()*Ll.length)],r=Object.keys(Ae);let o,a,s,l,u;switch(t){case"easy":o=Math.random()<.5?1:2,a=[3,5],s=300,l=!1,u=1;break;case"medium":o=2+Math.floor(Math.random()*2),a=[5,10],s=180,l=Math.random()<.3,u=1.5;break;case"hard":o=3+Math.floor(Math.random()*2),a=[10,20],s=120,l=Math.random()<.5,u=2;break}const h=[...r].sort(()=>Math.random()-.5).slice(0,Math.min(o,r.length)).map(v=>({cropId:v,quantity:a[0]+Math.floor(Math.random()*(a[1]-a[0]+1))})),m=h.reduce((v,j)=>{var d;const f=((d=Ae[j.cropId])==null?void 0:d.sellPrice)||10;return v+f*j.quantity},0),k=Math.round(m*u),y=l?Math.round(k*.5):void 0;return{id:`order-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,customerName:n.name,customerEmoji:n.emoji,items:h,reward:k,bonusReward:y,timeLimit:s,startedAt:Date.now(),isUrgent:l}}canFulfillOrder(t,n){return t.items.every(r=>{const o=n.find(a=>a.type==="crop"&&a.cropTypeId===r.cropId);return o&&o.quantity>=r.quantity})}getMissingItems(t,n){return t.items.map(r=>{const o=n.find(s=>s.type==="crop"&&s.cropTypeId===r.cropId),a=(o==null?void 0:o.quantity)||0;return{cropId:r.cropId,needed:r.quantity,have:a}}).filter(r=>r.have<r.needed)}calculateOrderReward(t){const r=(Date.now()-t.startedAt)/1e3,s=(t.timeLimit-r)/t.timeLimit>.5?Math.round(t.reward*.2):0,l=t.bonusReward||0;return{reward:t.reward,bonus:l,timeBonus:s}}isOrderExpired(t){return(Date.now()-t.startedAt)/1e3>t.timeLimit}getOrderTimeRemaining(t){const r=(Date.now()-t.startedAt)/1e3;return Math.max(0,t.timeLimit-r)}formatTime(t){const n=Math.floor(t/60),r=Math.floor(t%60);return`${n}:${r.toString().padStart(2,"0")}`}getXPReward(t){return ys[t]}calculateLevel(t,n,r=100){let o=n,a=t;for(;a>=r;)a-=r,o++;return{level:o,xpProgress:a}}isUnlockedAtLevel(t,n){return(t.unlockLevel||1)<=n}getItemsUnlockedAtLevel(t){return Jn.filter(n=>n.unlockLevel===t)}}const Ze=new Hm,Vm=({onClose:e})=>{const[t,n]=S.useState("seeds"),[r,o]=S.useState(null),[a,s]=S.useState(1),{gold:l,gems:u,level:c,addToInventory:p,spendGold:h,unlockCrop:m,hasPurchasedUpgrade:k,addPurchasedUpgrade:y,hasPurchasedTool:v,addPurchasedTool:j}=Oe(),{expandFarm:f,canExpand:d,getNextExpansion:g,setSprinkler:w,setScarecrow:N}=xe(),{addNotification:x,setScreen:b}=Ft(),C=S.useMemo(()=>{switch(t){case"seeds":return Sa("seed");case"tools":return Sa("tool");case"upgrades":return Sa("upgrade");default:return[]}},[t]),M=z=>!(!Ze.isUnlockedAtLevel(z,c)||z.type==="upgrade"&&k(z.id)||z.type==="tool"&&(z.effect==="autoWater"||z.effect==="reduceCrows")&&v(z.id)),P=(z,F=1)=>{const W=z.price*F;return Ze.canAfford(W,z.currency,l,u)},A=(z,F=1)=>{const W=z.price*F;if(!P(z,F)){x("金幣不足！","error");return}if(!(z.currency==="gold"?h(W):!1)){x("購買失敗！","error");return}switch(z.type){case"seed":z.cropTypeId&&(p({type:"seed",cropTypeId:z.cropTypeId,quantity:F}),m(z.cropTypeId),x(`購買了 ${F}x ${z.name}！`,"success"));break;case"tool":D(z);break;case"upgrade":V(z);break;default:p({type:z.type,quantity:F}),x(`購買了 ${z.name}！`,"success")}o(null),s(1)},D=z=>{switch(z.effect){case"autoWater":w(!0),j(z.id),x("安裝了自動灑水器！作物會自動澆水","success");break;case"reduceCrows":N(!0),j(z.id),x("安裝了稻草人！烏鴉出現機率減少 50%","success");break;case"fertilize":p({type:"tool",cropTypeId:"fertilizer",quantity:5}),x("購買了肥料包 x5！","success");break;case"qualityBoost":p({type:"tool",cropTypeId:"quality_boost",quantity:3}),x("購買了優質種子增強劑 x3！","success");break;default:p({type:"tool",quantity:1}),x(`購買了 ${z.name}！`,"success")}},V=z=>{var F;if((F=z.effect)!=null&&F.startsWith("expandTo")){const W=g();W&&d()?(f(W.rows,W.cols),y(z.id),x(`農場擴建至 ${W.rows}×${W.cols}！`,"success")):x("無法擴建！","error")}},G=()=>{e?e():b("game")};return i.jsxs("div",{className:"shop-container",children:[i.jsxs("div",{className:"shop-panel",children:[i.jsxs("div",{className:"shop-header",children:[i.jsx("h2",{children:"🏪 商店"}),i.jsxs("div",{className:"shop-currency",children:[i.jsxs("span",{className:"gold",children:["🪙 ",l.toLocaleString()]}),i.jsxs("span",{className:"gems",children:["💎 ",u]})]}),i.jsx("button",{className:"close-btn",onClick:G,children:"✕"})]}),i.jsxs("div",{className:"shop-tabs",children:[i.jsx("button",{className:`tab ${t==="seeds"?"active":""}`,onClick:()=>n("seeds"),children:"🌱 種子"}),i.jsx("button",{className:`tab ${t==="tools"?"active":""}`,onClick:()=>n("tools"),children:"🔧 工具"}),i.jsx("button",{className:`tab ${t==="upgrades"?"active":""}`,onClick:()=>n("upgrades"),children:"📐 升級"})]}),i.jsx("div",{className:"shop-items",children:C.map(z=>{const F=M(z),W=P(z),T=!Ze.isUnlockedAtLevel(z,c),L=z.type==="upgrade"&&k(z.id);return i.jsxs("div",{className:`shop-item ${F?"":"unavailable"} ${(r==null?void 0:r.id)===z.id?"selected":""}`,onClick:()=>F&&o(z),children:[i.jsx("div",{className:"item-icon",children:z.icon}),i.jsxs("div",{className:"item-info",children:[i.jsx("span",{className:"item-name",children:z.name}),i.jsx("span",{className:"item-desc",children:z.description}),i.jsxs("span",{className:`item-price ${W?"":"cant-afford"}`,children:[z.currency==="gold"?"🪙":"💎"," ",z.price]})]}),T&&i.jsxs("div",{className:"item-lock",children:["🔒 Lv.",z.unlockLevel]}),L&&i.jsx("div",{className:"item-purchased",children:"✓ 已購買"})]},z.id)})}),r&&i.jsxs("div",{className:"purchase-panel",children:[i.jsxs("div",{className:"purchase-info",children:[i.jsx("span",{className:"purchase-icon",children:r.icon}),i.jsx("span",{className:"purchase-name",children:r.name})]}),r.type==="seed"&&i.jsxs("div",{className:"quantity-selector",children:[i.jsx("button",{onClick:()=>s(Math.max(1,a-1)),disabled:a<=1,children:"-"}),i.jsx("span",{children:a}),i.jsx("button",{onClick:()=>s(Math.min(99,a+1)),disabled:!P(r,a+1),children:"+"})]}),i.jsxs("div",{className:"purchase-total",children:["總價: ",r.currency==="gold"?"🪙":"💎"," ",r.price*a]}),i.jsx("button",{className:"buy-btn",onClick:()=>A(r,a),disabled:!P(r,a),children:"購買"})]})]}),i.jsx("style",{children:`
        .shop-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
          padding: 1rem;
        }
        
        .shop-panel {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          border: 3px solid #4a5568;
          border-radius: 1rem;
          padding: 1.5rem;
          max-width: 600px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          color: white;
          font-family: 'Press Start 2P', monospace;
        }
        
        .shop-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #4a5568;
        }
        
        .shop-header h2 {
          margin: 0;
          font-size: 1.25rem;
        }
        
        .shop-currency {
          display: flex;
          gap: 1rem;
          font-size: 0.875rem;
        }
        
        .shop-currency .gold {
          color: #ffd700;
        }
        
        .shop-currency .gems {
          color: #60a5fa;
        }
        
        .close-btn {
          background: #ef4444;
          border: none;
          color: white;
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          cursor: pointer;
          font-size: 1rem;
          transition: transform 0.2s;
        }
        
        .close-btn:hover {
          transform: scale(1.1);
        }
        
        .shop-tabs {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        
        .tab {
          flex: 1;
          padding: 0.75rem;
          background: rgba(255,255,255,0.1);
          border: 2px solid transparent;
          border-radius: 0.5rem;
          color: white;
          cursor: pointer;
          font-size: 0.75rem;
          font-family: inherit;
          transition: all 0.2s;
        }
        
        .tab:hover {
          background: rgba(255,255,255,0.2);
        }
        
        .tab.active {
          background: rgba(74, 222, 128, 0.2);
          border-color: #4ade80;
        }
        
        .shop-items {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 0.75rem;
          margin-bottom: 1rem;
          max-height: 300px;
          overflow-y: auto;
          padding: 0.5rem;
        }
        
        .shop-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem;
          background: rgba(255,255,255,0.05);
          border: 2px solid rgba(255,255,255,0.1);
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.2s;
          position: relative;
        }
        
        .shop-item:hover:not(.unavailable) {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.3);
        }
        
        .shop-item.selected {
          background: rgba(74, 222, 128, 0.2);
          border-color: #4ade80;
        }
        
        .shop-item.unavailable {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .item-icon {
          font-size: 2rem;
        }
        
        .item-info {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          flex: 1;
        }
        
        .item-name {
          font-size: 0.75rem;
          font-weight: bold;
        }
        
        .item-desc {
          font-size: 0.5rem;
          color: #9ca3af;
        }
        
        .item-price {
          font-size: 0.625rem;
          color: #ffd700;
        }
        
        .item-price.cant-afford {
          color: #ef4444;
        }
        
        .item-lock, .item-purchased {
          position: absolute;
          top: 0.25rem;
          right: 0.25rem;
          font-size: 0.5rem;
          padding: 0.25rem;
          border-radius: 0.25rem;
        }
        
        .item-lock {
          background: rgba(239, 68, 68, 0.5);
        }
        
        .item-purchased {
          background: rgba(74, 222, 128, 0.5);
        }
        
        .purchase-panel {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: rgba(255,255,255,0.1);
          border-radius: 0.5rem;
          flex-wrap: wrap;
        }
        
        .purchase-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .purchase-icon {
          font-size: 1.5rem;
        }
        
        .purchase-name {
          font-size: 0.75rem;
        }
        
        .quantity-selector {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .quantity-selector button {
          width: 1.5rem;
          height: 1.5rem;
          background: #4a5568;
          border: none;
          border-radius: 0.25rem;
          color: white;
          cursor: pointer;
          font-family: inherit;
        }
        
        .quantity-selector button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .purchase-total {
          font-size: 0.75rem;
          color: #ffd700;
          margin-left: auto;
        }
        
        .buy-btn {
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, #4ade80, #22c55e);
          border: none;
          border-radius: 0.5rem;
          color: white;
          cursor: pointer;
          font-family: inherit;
          font-size: 0.75rem;
          transition: transform 0.2s;
        }
        
        .buy-btn:hover:not(:disabled) {
          transform: scale(1.05);
        }
        
        .buy-btn:disabled {
          background: #4a5568;
          cursor: not-allowed;
        }
      `})]})},Gm=({onClose:e})=>{const[t,n]=S.useState("seeds"),[r,o]=S.useState(null),[a,s]=S.useState(1),{inventory:l,gold:u,addGold:c,removeFromInventoryByType:p,getInventoryItemsByType:h}=Oe(),{addNotification:m,setScreen:k}=Ft(),y=S.useMemo(()=>h(t==="seeds"?"seed":t==="crops"?"crop":"tool"),[t,l,h]),v=x=>x?Ae[x]:null,j=(x,b=1)=>x.type!=="crop"||!x.cropTypeId?0:Ze.calculateInventorySellPrice(x.cropTypeId,b),f=(x,b)=>{if(x.type!=="crop"||!x.cropTypeId){m("只能出售農作物！","error");return}if(b>x.quantity){m("數量不足！","error");return}const C=j(x,b),M=v(x.cropTypeId);p("crop",x.cropTypeId,b)?(c(C),m(`賣出 ${b}x ${(M==null?void 0:M.emoji)||""} ${(M==null?void 0:M.name)||"農作物"} 獲得 ${C} 金幣！`,"success"),b>=x.quantity&&o(null),s(1)):m("出售失敗！","error")},d=x=>{f(x,x.quantity)},g=()=>{const x=h("crop");let b=0;x.forEach(C=>{if(C.cropTypeId){const M=j(C,C.quantity);p("crop",C.cropTypeId,C.quantity)&&(b+=M)}}),b>0?(c(b),m(`賣出所有農作物獲得 ${b} 金幣！`,"success"),o(null)):m("沒有可出售的農作物！","info")},w=()=>{e?e():k("game")},N=x=>{const b=v(x.cropTypeId);switch(x.type){case"seed":return{icon:(b==null?void 0:b.emoji)||"🌱",name:`${(b==null?void 0:b.name)||"未知"}種子`,subtitle:b?`難度 ${"⭐".repeat(b.difficulty)}`:""};case"crop":return{icon:(b==null?void 0:b.emoji)||"🥬",name:(b==null?void 0:b.name)||"農作物",subtitle:`售價: 🪙 ${(b==null?void 0:b.sellPrice)||0}`};case"tool":return x.cropTypeId==="fertilizer"?{icon:"🧪",name:"肥料",subtitle:"加速生長"}:x.cropTypeId==="quality_boost"?{icon:"✨",name:"優質增強劑",subtitle:"+50% 售價"}:{icon:"🔧",name:"工具",subtitle:""};default:return{icon:"❓",name:"未知物品",subtitle:""}}};return i.jsxs("div",{className:"inventory-container",children:[i.jsxs("div",{className:"inventory-panel",children:[i.jsxs("div",{className:"inventory-header",children:[i.jsx("h2",{children:"🎒 背包"}),i.jsxs("div",{className:"inventory-gold",children:["🪙 ",u.toLocaleString()]}),i.jsx("button",{className:"close-btn",onClick:w,children:"✕"})]}),i.jsxs("div",{className:"inventory-tabs",children:[i.jsxs("button",{className:`tab ${t==="seeds"?"active":""}`,onClick:()=>{n("seeds"),o(null)},children:["🌱 種子 (",h("seed").reduce((x,b)=>x+b.quantity,0),")"]}),i.jsxs("button",{className:`tab ${t==="crops"?"active":""}`,onClick:()=>{n("crops"),o(null)},children:["🥬 農作物 (",h("crop").reduce((x,b)=>x+b.quantity,0),")"]}),i.jsxs("button",{className:`tab ${t==="tools"?"active":""}`,onClick:()=>{n("tools"),o(null)},children:["🔧 工具 (",h("tool").reduce((x,b)=>x+b.quantity,0),")"]})]}),i.jsx("div",{className:"inventory-items",children:y.length===0?i.jsxs("div",{className:"empty-message",children:[t==="seeds"&&"沒有種子，去商店購買吧！",t==="crops"&&"沒有農作物，收穫後會出現在這裡！",t==="tools"&&"沒有工具，去商店購買吧！"]}):y.map(x=>{const b=N(x),C=(r==null?void 0:r.id)===x.id;return i.jsxs("div",{className:`inventory-item ${C?"selected":""}`,onClick:()=>o(x),children:[i.jsx("div",{className:"item-icon",children:b.icon}),i.jsxs("div",{className:"item-info",children:[i.jsx("span",{className:"item-name",children:b.name}),i.jsx("span",{className:"item-subtitle",children:b.subtitle})]}),i.jsxs("div",{className:"item-quantity",children:["×",x.quantity]})]},x.id)})}),t==="crops"&&y.length>0&&i.jsxs("div",{className:"sell-panel",children:[r&&r.type==="crop"?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"sell-info",children:[i.jsx("span",{className:"sell-icon",children:N(r).icon}),i.jsx("span",{className:"sell-name",children:N(r).name}),i.jsxs("span",{className:"sell-owned",children:["擁有: ",r.quantity]})]}),i.jsxs("div",{className:"quantity-selector",children:[i.jsx("button",{onClick:()=>s(Math.max(1,a-1)),disabled:a<=1,children:"-"}),i.jsx("span",{children:a}),i.jsx("button",{onClick:()=>s(Math.min(r.quantity,a+1)),disabled:a>=r.quantity,children:"+"})]}),i.jsxs("div",{className:"sell-total",children:["獲得: 🪙 ",j(r,a)]}),i.jsx("button",{className:"sell-btn",onClick:()=>f(r,a),children:"出售"}),i.jsx("button",{className:"sell-all-btn",onClick:()=>d(r),children:"全部出售"})]}):i.jsx("div",{className:"sell-hint",children:"選擇農作物進行出售"}),i.jsx("button",{className:"sell-all-crops-btn",onClick:g,children:"💰 出售所有農作物"})]})]}),i.jsx("style",{children:`
        .inventory-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
          padding: 1rem;
        }
        
        .inventory-panel {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          border: 3px solid #4a5568;
          border-radius: 1rem;
          padding: 1.5rem;
          max-width: 550px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          color: white;
          font-family: 'Press Start 2P', monospace;
        }
        
        .inventory-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #4a5568;
        }
        
        .inventory-header h2 {
          margin: 0;
          font-size: 1.25rem;
        }
        
        .inventory-gold {
          font-size: 0.875rem;
          color: #ffd700;
        }
        
        .close-btn {
          background: #ef4444;
          border: none;
          color: white;
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          cursor: pointer;
          font-size: 1rem;
          transition: transform 0.2s;
        }
        
        .close-btn:hover {
          transform: scale(1.1);
        }
        
        .inventory-tabs {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        
        .tab {
          flex: 1;
          padding: 0.75rem 0.5rem;
          background: rgba(255,255,255,0.1);
          border: 2px solid transparent;
          border-radius: 0.5rem;
          color: white;
          cursor: pointer;
          font-size: 0.625rem;
          font-family: inherit;
          transition: all 0.2s;
        }
        
        .tab:hover {
          background: rgba(255,255,255,0.2);
        }
        
        .tab.active {
          background: rgba(74, 222, 128, 0.2);
          border-color: #4ade80;
        }
        
        .inventory-items {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 0.5rem;
          margin-bottom: 1rem;
          max-height: 250px;
          overflow-y: auto;
          padding: 0.5rem;
        }
        
        .empty-message {
          grid-column: 1 / -1;
          text-align: center;
          color: #9ca3af;
          padding: 2rem;
          font-size: 0.75rem;
        }
        
        .inventory-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem;
          background: rgba(255,255,255,0.05);
          border: 2px solid rgba(255,255,255,0.1);
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .inventory-item:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.3);
        }
        
        .inventory-item.selected {
          background: rgba(74, 222, 128, 0.2);
          border-color: #4ade80;
        }
        
        .item-icon {
          font-size: 1.75rem;
        }
        
        .item-info {
          display: flex;
          flex-direction: column;
          gap: 0.125rem;
          flex: 1;
        }
        
        .item-name {
          font-size: 0.625rem;
          font-weight: bold;
        }
        
        .item-subtitle {
          font-size: 0.5rem;
          color: #9ca3af;
        }
        
        .item-quantity {
          font-size: 0.875rem;
          font-weight: bold;
          color: #fbbf24;
        }
        
        .sell-panel {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          background: rgba(255,255,255,0.1);
          border-radius: 0.5rem;
          flex-wrap: wrap;
        }
        
        .sell-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .sell-icon {
          font-size: 1.5rem;
        }
        
        .sell-name {
          font-size: 0.625rem;
        }
        
        .sell-owned {
          font-size: 0.5rem;
          color: #9ca3af;
        }
        
        .sell-hint {
          font-size: 0.625rem;
          color: #9ca3af;
          flex: 1;
        }
        
        .quantity-selector {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .quantity-selector button {
          width: 1.5rem;
          height: 1.5rem;
          background: #4a5568;
          border: none;
          border-radius: 0.25rem;
          color: white;
          cursor: pointer;
          font-family: inherit;
        }
        
        .quantity-selector button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .sell-total {
          font-size: 0.625rem;
          color: #ffd700;
        }
        
        .sell-btn, .sell-all-btn {
          padding: 0.5rem 1rem;
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          border: none;
          border-radius: 0.5rem;
          color: white;
          cursor: pointer;
          font-family: inherit;
          font-size: 0.625rem;
          transition: transform 0.2s;
        }
        
        .sell-btn:hover, .sell-all-btn:hover {
          transform: scale(1.05);
        }
        
        .sell-all-crops-btn {
          width: 100%;
          margin-top: 0.5rem;
          padding: 0.75rem;
          background: linear-gradient(135deg, #ef4444, #dc2626);
          border: none;
          border-radius: 0.5rem;
          color: white;
          cursor: pointer;
          font-family: inherit;
          font-size: 0.75rem;
          transition: transform 0.2s;
        }
        
        .sell-all-crops-btn:hover {
          transform: scale(1.02);
        }
      `})]})},Xm=({maxOrders:e=3,onClose:t})=>{const{activeOrders:n,inventory:r,addOrder:o,removeOrder:a,completeOrder:s,failOrder:l,removeFromInventoryByType:u,addXP:c,addReputation:p}=Oe(),{addNotification:h,setScreen:m}=Ft(),[,k]=S.useState(0);S.useEffect(()=>{const w=setInterval(()=>{k(N=>N+1),n.forEach(N=>{Ze.isOrderExpired(N)&&(l(N.id),h(`訂單已過期！${N.customerEmoji} ${N.customerName} 很失望...`,"warning"))})},1e3);return()=>clearInterval(w)},[n,l,h]),S.useEffect(()=>{if(n.length<e){const w=n.length===0||Math.random()<.6?"easy":Math.random()<.8?"medium":"hard",N=Ze.generateOrder(w);o(N)}},[n.length,e,o]);const y=S.useCallback(w=>Ze.canFulfillOrder(w,r),[r]),v=w=>{if(!y(w)){h("材料不足！","error");return}let N=!0;if(w.items.forEach(P=>{u("crop",P.cropId,P.quantity)||(N=!1)}),!N){h("交付失敗！","error");return}const{reward:x,bonus:b,timeBonus:C}=Ze.calculateOrderReward(w);s(w.id,x,b+C),c(ys.orderComplete),w.isUrgent?(c(ys.orderBonus),p(2)):p(1);let M=`訂單完成！獲得 🪙 ${x}`;b>0&&(M+=` + 緊急獎勵 ${b}`),C>0&&(M+=` + 時間獎勵 ${C}`),h(M,"success")},j=w=>{a(w),h("已跳過訂單","info")},f=()=>{n.forEach(w=>a(w.id)),h("訂單已刷新！","info")},d=()=>{t?t():m("game")},g=w=>Ae[w];return i.jsxs("div",{className:"order-board-container",children:[i.jsxs("div",{className:"order-board-panel",children:[i.jsxs("div",{className:"order-header",children:[i.jsx("h2",{children:"📋 訂單看板"}),i.jsx("button",{className:"refresh-btn",onClick:f,title:"刷新訂單",children:"🔄"}),i.jsx("button",{className:"close-btn",onClick:d,children:"✕"})]}),i.jsx("div",{className:"orders-list",children:n.length===0?i.jsx("div",{className:"no-orders",children:"沒有訂單，稍等一下..."}):n.map(w=>{const N=Ze.getOrderTimeRemaining(w),x=y(w),b=N<30;return i.jsxs("div",{className:`order-card ${w.isUrgent?"urgent":""} ${b?"expiring":""}`,children:[i.jsxs("div",{className:"order-customer",children:[i.jsx("span",{className:"customer-emoji",children:w.customerEmoji}),i.jsx("span",{className:"customer-name",children:w.customerName}),w.isUrgent&&i.jsx("span",{className:"urgent-badge",children:"🔥 緊急"})]}),i.jsx("div",{className:"order-items",children:w.items.map((C,M)=>{var V;const P=g(C.cropId),A=((V=r.find(G=>G.type==="crop"&&G.cropTypeId===C.cropId))==null?void 0:V.quantity)||0,D=A>=C.quantity;return i.jsxs("div",{className:`order-item ${D?"has-enough":"missing"}`,children:[i.jsx("span",{className:"item-emoji",children:(P==null?void 0:P.emoji)||"❓"}),i.jsx("span",{className:"item-name",children:(P==null?void 0:P.name)||"未知"}),i.jsxs("span",{className:"item-qty",children:[A,"/",C.quantity]})]},M)})}),i.jsxs("div",{className:"order-reward",children:[i.jsx("span",{className:"reward-label",children:"獎勵:"}),i.jsxs("span",{className:"reward-amount",children:["🪙 ",w.reward]}),w.bonusReward&&i.jsxs("span",{className:"bonus-amount",children:["+",w.bonusReward]})]}),i.jsxs("div",{className:`order-time ${b?"warning":""}`,children:["⏱️ ",Ze.formatTime(N)]}),i.jsxs("div",{className:"order-actions",children:[i.jsx("button",{className:`deliver-btn ${x?"ready":""}`,onClick:()=>v(w),disabled:!x,children:x?"✓ 交付":"材料不足"}),i.jsx("button",{className:"skip-btn",onClick:()=>j(w.id),children:"跳過"})]})]},w.id)})}),i.jsx("div",{className:"order-help",children:"💡 收穫農作物後可以在這裡交付訂單獲得金幣獎勵！"})]}),i.jsx("style",{children:`
        .order-board-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
          padding: 1rem;
        }
        
        .order-board-panel {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          border: 3px solid #4a5568;
          border-radius: 1rem;
          padding: 1.5rem;
          max-width: 500px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          color: white;
          font-family: 'Press Start 2P', monospace;
        }
        
        .order-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #4a5568;
        }
        
        .order-header h2 {
          margin: 0;
          font-size: 1.125rem;
          flex: 1;
        }
        
        .refresh-btn {
          background: #3b82f6;
          border: none;
          color: white;
          width: 2rem;
          height: 2rem;
          border-radius: 0.5rem;
          cursor: pointer;
          font-size: 1rem;
          transition: transform 0.2s;
        }
        
        .refresh-btn:hover {
          transform: rotate(180deg);
        }
        
        .close-btn {
          background: #ef4444;
          border: none;
          color: white;
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          cursor: pointer;
          font-size: 1rem;
          transition: transform 0.2s;
        }
        
        .close-btn:hover {
          transform: scale(1.1);
        }
        
        .orders-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        
        .no-orders {
          text-align: center;
          color: #9ca3af;
          padding: 2rem;
          font-size: 0.75rem;
        }
        
        .order-card {
          background: rgba(255,255,255,0.05);
          border: 2px solid rgba(255,255,255,0.1);
          border-radius: 0.75rem;
          padding: 1rem;
          transition: all 0.2s;
        }
        
        .order-card:hover {
          border-color: rgba(255,255,255,0.3);
        }
        
        .order-card.urgent {
          border-color: #ef4444;
          background: rgba(239, 68, 68, 0.1);
          animation: urgentPulse 2s infinite;
        }
        
        .order-card.expiring {
          animation: expiringFlash 0.5s infinite;
        }
        
        @keyframes urgentPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4); }
          50% { box-shadow: 0 0 10px 5px rgba(239, 68, 68, 0.2); }
        }
        
        @keyframes expiringFlash {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        .order-customer {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }
        
        .customer-emoji {
          font-size: 1.5rem;
        }
        
        .customer-name {
          font-size: 0.75rem;
          font-weight: bold;
        }
        
        .urgent-badge {
          font-size: 0.5rem;
          background: #ef4444;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          margin-left: auto;
        }
        
        .order-items {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }
        
        .order-item {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.5rem;
          background: rgba(0,0,0,0.2);
          border-radius: 0.5rem;
          font-size: 0.625rem;
        }
        
        .order-item.has-enough {
          background: rgba(74, 222, 128, 0.2);
          border: 1px solid #4ade80;
        }
        
        .order-item.missing {
          background: rgba(239, 68, 68, 0.2);
          border: 1px solid #ef4444;
        }
        
        .item-emoji {
          font-size: 1rem;
        }
        
        .item-name {
          color: #e5e7eb;
        }
        
        .item-qty {
          font-weight: bold;
          color: #fbbf24;
        }
        
        .order-reward {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          font-size: 0.75rem;
        }
        
        .reward-label {
          color: #9ca3af;
        }
        
        .reward-amount {
          color: #ffd700;
          font-weight: bold;
        }
        
        .bonus-amount {
          color: #4ade80;
          font-size: 0.625rem;
        }
        
        .order-time {
          font-size: 0.75rem;
          margin-bottom: 0.75rem;
        }
        
        .order-time.warning {
          color: #ef4444;
          animation: timeWarning 0.5s infinite;
        }
        
        @keyframes timeWarning {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .order-actions {
          display: flex;
          gap: 0.5rem;
        }
        
        .deliver-btn {
          flex: 1;
          padding: 0.5rem;
          background: #4a5568;
          border: none;
          border-radius: 0.5rem;
          color: white;
          cursor: not-allowed;
          font-family: inherit;
          font-size: 0.625rem;
          transition: all 0.2s;
        }
        
        .deliver-btn.ready {
          background: linear-gradient(135deg, #4ade80, #22c55e);
          cursor: pointer;
        }
        
        .deliver-btn.ready:hover {
          transform: scale(1.02);
        }
        
        .skip-btn {
          padding: 0.5rem 1rem;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 0.5rem;
          color: white;
          cursor: pointer;
          font-family: inherit;
          font-size: 0.625rem;
          transition: all 0.2s;
        }
        
        .skip-btn:hover {
          background: rgba(255,255,255,0.2);
        }
        
        .order-help {
          text-align: center;
          font-size: 0.5rem;
          color: #9ca3af;
          padding-top: 0.5rem;
          border-top: 1px solid #4a5568;
        }
      `})]})},Ym={morning:"linear-gradient(180deg, #FFE4B5 0%, #FFDAB9 20%, #87CEEB 60%, #ADD8E6 100%)",afternoon:"linear-gradient(180deg, #87CEEB 0%, #ADD8E6 50%, #B0E0E6 100%)",evening:"linear-gradient(180deg, #FF7F50 0%, #FF6347 15%, #DA70D6 45%, #8A2BE2 80%, #4B0082 100%)",night:"linear-gradient(180deg, #191970 0%, #000033 40%, #0C0C2E 100%)"},Qm={sunny:"transparent",rainy:"rgba(100, 100, 120, 0.3)",stormy:"rgba(50, 50, 70, 0.5)",foggy:"rgba(200, 200, 200, 0.4)",snowy:"rgba(220, 230, 240, 0.3)",rainbow:"transparent"},Km=e=>Array.from({length:e},(t,n)=>({id:n,left:Math.random()*100,top:Math.random()*40,size:Math.random()*2+1,delay:Math.random()*3,duration:1.5+Math.random()*2})),qm=e=>Array.from({length:e},(t,n)=>({id:n,top:5+Math.random()*25,size:40+Math.random()*60,opacity:.6+Math.random()*.4,duration:60+Math.random()*40,delay:Math.random()*-100})),Zm=({timeOfDay:e,weather:t})=>{const n=S.useMemo(()=>Km(50),[]),r=S.useMemo(()=>qm(5),[]),o=e==="night",a=!o&&t!=="stormy"&&t!=="rainy",s=o,l=t!=="sunny"||e==="morning",u=o&&t!=="stormy"&&t!=="foggy",c=t==="rainbow",p=S.useMemo(()=>{switch(e){case"morning":return{x:20,y:30};case"afternoon":return{x:70,y:15};case"evening":return{x:85,y:40};case"night":return{x:80,y:20};default:return{x:50,y:20}}},[e]);return i.jsxs("div",{className:"background-scene",children:[i.jsx("div",{className:"sky-layer",style:{background:Ym[e]}}),i.jsx("div",{className:"weather-overlay-bg",style:{backgroundColor:Qm[t]}}),u&&i.jsx("div",{className:"stars-layer",children:n.map(h=>i.jsx("div",{className:"star",style:{left:`${h.left}%`,top:`${h.top}%`,width:`${h.size}px`,height:`${h.size}px`,animationDelay:`${h.delay}s`,animationDuration:`${h.duration}s`}},h.id))}),a&&i.jsxs("div",{className:"sun",style:{left:`${p.x}%`,top:`${p.y}%`},children:[i.jsx("div",{className:"sun-core"}),i.jsx("div",{className:"sun-rays"})]}),s&&i.jsxs("div",{className:"moon",style:{left:`${p.x}%`,top:`${p.y}%`},children:[i.jsx("div",{className:"moon-surface"}),i.jsx("div",{className:"moon-glow"})]}),c&&i.jsx("div",{className:"rainbow",children:i.jsx("div",{className:"rainbow-arc"})}),l&&i.jsx("div",{className:"clouds-layer",children:r.map(h=>i.jsx("div",{className:`cloud ${t==="stormy"?"storm-cloud":""}`,style:{top:`${h.top}%`,width:`${h.size}px`,opacity:h.opacity,animationDuration:`${h.duration}s`,animationDelay:`${h.delay}s`}},h.id))}),i.jsx("div",{className:"mountains-layer",children:i.jsxs("svg",{viewBox:"0 0 1200 200",preserveAspectRatio:"none",className:"mountains-svg",children:[i.jsx("path",{d:"M0,200 L0,120 Q100,80 200,100 T400,90 T600,110 T800,85 T1000,100 T1200,95 L1200,200 Z",className:`mountain-back ${o?"night":""}`}),i.jsx("path",{d:"M0,200 L0,140 Q150,100 300,130 T600,115 T900,135 T1200,120 L1200,200 Z",className:`mountain-front ${o?"night":""}`})]})}),i.jsxs("div",{className:"trees-layer",children:[i.jsx("div",{className:"tree tree-1"}),i.jsx("div",{className:"tree tree-2"}),i.jsx("div",{className:"tree tree-3"}),i.jsx("div",{className:"tree tree-4"}),i.jsx("div",{className:"tree tree-5"})]}),i.jsxs("div",{className:"ground-layer",children:[i.jsx("div",{className:"grass-strip"}),i.jsx("div",{className:"dirt-path"})]}),i.jsx("style",{children:`
        .background-scene {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden;
        }

        .sky-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transition: background 2s ease;
        }

        .weather-overlay-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transition: background-color 1s ease;
          pointer-events: none;
        }

        /* Stars */
        .stars-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 50%;
        }

        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          animation: star-twinkle ease-in-out infinite;
        }

        @keyframes star-twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        /* Sun */
        .sun {
          position: absolute;
          width: 80px;
          height: 80px;
          transform: translate(-50%, -50%);
          transition: left 2s ease, top 2s ease;
        }

        .sun-core {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, #FFD700 0%, #FFA500 70%, transparent 100%);
          border-radius: 50%;
          animation: sun-pulse 3s ease-in-out infinite;
        }

        .sun-rays {
          position: absolute;
          width: 150%;
          height: 150%;
          top: -25%;
          left: -25%;
          background: radial-gradient(circle, rgba(255, 200, 50, 0.3) 0%, transparent 70%);
          animation: sun-rays-rotate 20s linear infinite;
        }

        @keyframes sun-pulse {
          0%, 100% { 
            transform: scale(1);
            filter: drop-shadow(0 0 20px rgba(255, 200, 50, 0.6));
          }
          50% { 
            transform: scale(1.05);
            filter: drop-shadow(0 0 30px rgba(255, 200, 50, 0.8));
          }
        }

        @keyframes sun-rays-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Moon */
        .moon {
          position: absolute;
          width: 60px;
          height: 60px;
          transform: translate(-50%, -50%);
          transition: left 2s ease, top 2s ease;
        }

        .moon-surface {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 30% 30%, #F5F5F5 0%, #D3D3D3 50%, #A9A9A9 100%);
          border-radius: 50%;
          box-shadow: inset -10px -5px 20px rgba(0, 0, 0, 0.3);
        }

        .moon-glow {
          position: absolute;
          width: 150%;
          height: 150%;
          top: -25%;
          left: -25%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
        }

        /* Rainbow */
        .rainbow {
          position: absolute;
          top: 10%;
          left: 10%;
          width: 80%;
          height: 40%;
          pointer-events: none;
        }

        .rainbow-arc {
          position: absolute;
          width: 100%;
          height: 200%;
          border-radius: 50%;
          background: conic-gradient(
            from 180deg,
            transparent 0deg,
            red 0deg,
            orange 30deg,
            yellow 60deg,
            green 90deg,
            blue 120deg,
            indigo 150deg,
            violet 180deg,
            transparent 180deg
          );
          opacity: 0.4;
          mask: radial-gradient(
            ellipse 50% 100% at 50% 100%,
            transparent 70%,
            black 70%,
            black 75%,
            transparent 75%
          );
          -webkit-mask: radial-gradient(
            ellipse 50% 100% at 50% 100%,
            transparent 70%,
            black 70%,
            black 75%,
            transparent 75%
          );
        }

        /* Clouds */
        .clouds-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 50%;
          overflow: hidden;
        }

        .cloud {
          position: absolute;
          left: -20%;
          height: 40px;
          background: white;
          border-radius: 50px;
          animation: cloud-drift linear infinite;
          filter: blur(2px);
        }

        .cloud::before,
        .cloud::after {
          content: '';
          position: absolute;
          background: white;
          border-radius: 50%;
        }

        .cloud::before {
          width: 50%;
          height: 120%;
          top: -50%;
          left: 20%;
        }

        .cloud::after {
          width: 40%;
          height: 100%;
          top: -40%;
          left: 55%;
        }

        .storm-cloud {
          background: #4A4A4A;
        }

        .storm-cloud::before,
        .storm-cloud::after {
          background: #4A4A4A;
        }

        @keyframes cloud-drift {
          from { transform: translateX(-100%); }
          to { transform: translateX(calc(100vw + 100%)); }
        }

        /* Mountains */
        .mountains-layer {
          position: absolute;
          bottom: 25%;
          left: 0;
          width: 100%;
          height: 30%;
        }

        .mountains-svg {
          width: 100%;
          height: 100%;
        }

        .mountain-back {
          fill: #6B8E23;
          opacity: 0.6;
        }

        .mountain-back.night {
          fill: #2F4F4F;
        }

        .mountain-front {
          fill: #556B2F;
          opacity: 0.8;
        }

        .mountain-front.night {
          fill: #1C3A1C;
        }

        /* Trees */
        .trees-layer {
          position: absolute;
          bottom: 15%;
          left: 0;
          width: 100%;
          height: 20%;
          display: flex;
          justify-content: space-around;
          align-items: flex-end;
        }

        .tree {
          width: 30px;
          height: 60px;
          position: relative;
          animation: tree-sway 4s ease-in-out infinite;
        }

        .tree::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 8px;
          height: 20px;
          background: #8B4513;
          border-radius: 2px;
        }

        .tree::after {
          content: '';
          position: absolute;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 20px solid transparent;
          border-right: 20px solid transparent;
          border-bottom: 50px solid #228B22;
          filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.2));
        }

        .tree-1 { height: 50px; animation-delay: 0s; }
        .tree-2 { height: 70px; animation-delay: 0.5s; }
        .tree-3 { height: 55px; animation-delay: 1s; }
        .tree-4 { height: 65px; animation-delay: 1.5s; }
        .tree-5 { height: 45px; animation-delay: 2s; }

        @keyframes tree-sway {
          0%, 100% { transform: rotate(-1deg); }
          50% { transform: rotate(1deg); }
        }

        /* Ground */
        .ground-layer {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 20%;
        }

        .grass-strip {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 40%;
          background: linear-gradient(180deg, #7CB342 0%, #689F38 100%);
        }

        .dirt-path {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 60%;
          background: linear-gradient(180deg, #8D6E63 0%, #6D4C41 100%);
        }
      `})]})},Jm=()=>`toast-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,e0={success:3e3,error:4e3,info:3e3,reward:3500,levelUp:5e3,achievement:5e3},t0={success:"✅",error:"❌",info:"ℹ️",reward:"🪙",levelUp:"🎉",achievement:"🏆"},n0=S.createContext(null),r0=({children:e})=>{const[t,n]=S.useState([]),r=S.useCallback(s=>{const l={...s,id:Jm(),icon:s.icon||t0[s.type],duration:s.duration||e0[s.type]};n(u=>[...u,l])},[]),o=S.useCallback(s=>{n(l=>l.filter(u=>u.id!==s))},[]),a=S.useCallback(()=>{n([])},[]);return i.jsxs(n0.Provider,{value:{toasts:t,addToast:r,removeToast:o,clearAll:a},children:[e,i.jsx(o0,{toasts:t,removeToast:o})]})},o0=({toasts:e,removeToast:t})=>i.jsxs("div",{className:"toast-container",children:[e.map((n,r)=>i.jsx(a0,{toast:n,index:r,onRemove:()=>t(n.id)},n.id)),i.jsx("style",{children:`
        .toast-container {
          position: fixed;
          top: 80px;
          right: 20px;
          z-index: 10000;
          display: flex;
          flex-direction: column;
          gap: 10px;
          max-width: 350px;
          pointer-events: none;
        }
      `})]}),a0=({toast:e,index:t,onRemove:n})=>{const[r,o]=S.useState(!1);S.useEffect(()=>{const l=setTimeout(()=>{o(!0)},(e.duration||3e3)-300),u=setTimeout(()=>{n()},e.duration||3e3);return()=>{clearTimeout(l),clearTimeout(u)}},[e.duration,n]);const s=(()=>{switch(e.type){case"success":return{background:"linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)",borderColor:"#1e8449"};case"error":return{background:"linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)",borderColor:"#922b21"};case"info":return{background:"linear-gradient(135deg, #2980b9 0%, #3498db 100%)",borderColor:"#1a5276"};case"reward":return{background:"linear-gradient(135deg, #d4a017 0%, #f1c40f 100%)",borderColor:"#9a7d0a"};case"levelUp":return{background:"linear-gradient(135deg, #8e44ad 0%, #9b59b6 100%)",borderColor:"#6c3483"};case"achievement":return{background:"linear-gradient(135deg, #e67e22 0%, #f39c12 100%)",borderColor:"#b9770e"};default:return{background:"linear-gradient(135deg, #34495e 0%, #5d6d7e 100%)",borderColor:"#283747"}}})();return i.jsxs("div",{className:`toast-item ${r?"exiting":""} toast-${e.type}`,style:{...s,animationDelay:`${t*50}ms`},onClick:()=>{o(!0),setTimeout(n,300)},children:[i.jsxs("div",{className:"toast-content",children:[i.jsx("span",{className:"toast-icon",children:e.icon}),i.jsxs("div",{className:"toast-text",children:[i.jsx("span",{className:"toast-message",children:e.message}),e.amount!==void 0&&i.jsx("span",{className:"toast-amount",children:e.type==="reward"||e.type==="levelUp"?`+${e.amount}`:e.amount})]})]}),e.amount!==void 0&&(e.type==="reward"||e.type==="levelUp")&&i.jsxs("div",{className:"toast-float-number",children:["+",e.amount]}),i.jsx("style",{children:`
        .toast-item {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          border-radius: 12px;
          border: 3px solid;
          box-shadow: 
            0 4px 12px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          color: white;
          font-family: 'Comic Sans MS', cursive, sans-serif;
          cursor: pointer;
          pointer-events: auto;
          animation: toast-bounce-in 0.4s ease-out forwards;
          position: relative;
          overflow: visible;
          transform-origin: right center;
        }

        .toast-item.exiting {
          animation: toast-slide-out 0.3s ease-in forwards;
        }

        @keyframes toast-bounce-in {
          0% { 
            transform: translateX(100%) scale(0.8);
            opacity: 0;
          }
          50% {
            transform: translateX(-10%) scale(1.05);
            opacity: 1;
          }
          100% { 
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }

        @keyframes toast-slide-out {
          0% { 
            transform: translateX(0) scale(1);
            opacity: 1;
          }
          100% { 
            transform: translateX(100%) scale(0.8);
            opacity: 0;
          }
        }

        .toast-content {
          display: flex;
          align-items: center;
          gap: 10px;
          flex: 1;
        }

        .toast-icon {
          font-size: 24px;
          flex-shrink: 0;
        }

        .toast-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .toast-message {
          font-size: 14px;
          font-weight: bold;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }

        .toast-amount {
          font-size: 18px;
          font-weight: bold;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }

        .toast-float-number {
          position: absolute;
          top: -10px;
          right: 10px;
          font-size: 20px;
          font-weight: bold;
          color: #FFD700;
          text-shadow: 
            0 0 10px rgba(255, 215, 0, 0.8),
            2px 2px 2px rgba(0, 0, 0, 0.5);
          animation: reward-float 1s ease-out forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }

        @keyframes reward-float {
          0% { 
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% { 
            transform: translateY(-30px) scale(1.3);
            opacity: 0;
          }
        }

        /* Type-specific animations */
        .toast-levelUp .toast-icon {
          animation: level-up-bounce 0.5s ease-out infinite;
        }

        @keyframes level-up-bounce {
          0%, 100% { transform: scale(1) rotate(0deg); }
          25% { transform: scale(1.2) rotate(-10deg); }
          75% { transform: scale(1.2) rotate(10deg); }
        }

        .toast-achievement {
          animation: toast-bounce-in 0.4s ease-out forwards, achievement-glow 1s ease-in-out infinite;
        }

        @keyframes achievement-glow {
          0%, 100% { box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3), 0 0 20px rgba(243, 156, 18, 0.3); }
          50% { box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3), 0 0 30px rgba(243, 156, 18, 0.6); }
        }

        .toast-reward .toast-icon {
          animation: coin-spin 1s ease-in-out infinite;
        }

        @keyframes coin-spin {
          0%, 100% { transform: rotateY(0deg); }
          50% { transform: rotateY(180deg); }
        }
      `})]})},s0=50,Dt=(e,t)=>Math.random()*(t-e)+e,sd=()=>`particle-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,i0=e=>{switch(e){case"harvest":return{count:12,colors:["#FFD700","#FFA500","#90EE90","#32CD32"],emojis:["✨","⭐","🌟","💫"],duration:{min:600,max:1e3},spread:{x:80,y:80},size:{min:12,max:20}};case"levelUp":return{count:20,colors:["#FFD700","#FF6B6B","#4ECDC4","#45B7D1","#96CEB4"],emojis:["⭐","🌟","✨","💫","🎉"],duration:{min:800,max:1200},spread:{x:150,y:200},size:{min:16,max:28}};case"combo":return{count:8,colors:["#FF4500","#FF6600","#FF8C00","#FFA500"],emojis:["🔥","💥","⚡","✨"],duration:{min:400,max:800},spread:{x:60,y:60},size:{min:14,max:22}};case"gold":return{count:6,colors:["#FFD700","#FFC800","#FFB700"],emojis:["🪙","💰","✨"],duration:{min:600,max:900},spread:{x:40,y:100},size:{min:16,max:24}};case"confetti":return{count:30,colors:["#FF6B6B","#4ECDC4","#45B7D1","#96CEB4","#FFEAA7","#DDA0DD","#98D8C8"],emojis:[],duration:{min:1e3,max:2e3},spread:{x:200,y:300},size:{min:8,max:14}};case"sparkle":default:return{count:8,colors:["#FFD700","#FFFFFF","#FFF8DC"],emojis:["✨","⭐"],duration:{min:400,max:700},spread:{x:50,y:50},size:{min:10,max:18}}}},l0=({type:e,position:t={x:50,y:50},count:n,onComplete:r})=>{const[o,a]=S.useState([]),s=S.useRef(null),l=S.useRef(null),u=S.useCallback(()=>{const c=i0(e),p=Math.min(n??c.count,s0),h=[];for(let k=0;k<p;k++){const y=c.emojis.length>0&&Math.random()>.3;h.push({id:sd(),x:t.x+Dt(-20,20),y:t.y+Dt(-20,20),size:Dt(c.size.min,c.size.max),color:c.colors[Math.floor(Math.random()*c.colors.length)],emoji:y?c.emojis[Math.floor(Math.random()*c.emojis.length)]:void 0,duration:Dt(c.duration.min,c.duration.max),delay:Dt(0,200),tx:Dt(-c.spread.x,c.spread.x),ty:Dt(-c.spread.y,-c.spread.y/4)})}a(h);const m=Math.max(...h.map(k=>k.duration+k.delay));l.current=window.setTimeout(()=>{a([]),r==null||r()},m+100)},[e,t,n,r]);return S.useEffect(()=>(u(),()=>{l.current&&clearTimeout(l.current)}),[u]),o.length===0?null:i.jsxs("div",{ref:s,className:"particle-container",style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:9999,overflow:"hidden"},children:[o.map(c=>i.jsx("div",{className:"particle",style:{position:"absolute",left:`${c.x}%`,top:`${c.y}%`,width:c.emoji?"auto":`${c.size}px`,height:c.emoji?"auto":`${c.size}px`,fontSize:c.emoji?`${c.size}px`:void 0,backgroundColor:c.emoji?"transparent":c.color,borderRadius:c.emoji?void 0:"50%",opacity:0,transform:"translate(-50%, -50%) scale(0)",animation:`particle-burst ${c.duration}ms ease-out ${c.delay}ms forwards`,"--tx":`${c.tx}px`,"--ty":`${c.ty}px`},children:c.emoji},c.id)),i.jsx("style",{children:`
        @keyframes particle-burst {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0);
          }
          20% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.2);
          }
          100% {
            opacity: 0;
            transform: translate(
              calc(-50% + var(--tx, 50px)), 
              calc(-50% + var(--ty, -50px))
            ) scale(0.5);
          }
        }
      `})]})},u0=()=>{const[e,t]=S.useState([]),n=S.useCallback((s,l)=>{const u=sd();t(c=>[...c,{id:u,type:s,position:l}])},[]),r=S.useCallback(s=>{t(l=>l.filter(u=>u.id!==s))},[]),o=S.useCallback(()=>{t([])},[]),a=S.useCallback(()=>i.jsx(i.Fragment,{children:e.map(s=>i.jsx(l0,{type:s.type,position:s.position,onComplete:()=>r(s.id)},s.id))}),[e,r]);return{emit:n,clearAll:o,ParticleLayer:a,activeCount:e.length}};function c0(){const e=je(c=>c.phase),t=je(c=>c.isPaused),n=je(c=>c.updateTimeOfDay),r=S.useRef(),o=S.useRef(0),a=S.useRef(0),s=1e3,l=100/300,u=S.useCallback(c=>{o.current===0&&(o.current=c);const p=c-o.current;if(a.current+=p,o.current=c,a.current>=s){const h=Math.floor(a.current/s);a.current%=s,st.updateCrops(),it.update(),n(l*h)}r.current=requestAnimationFrame(u)},[n]);return S.useEffect(()=>{if(e!=="playing"||t){r.current&&(cancelAnimationFrame(r.current),r.current=void 0),st.stop(),xn.stop(),it.stop();return}return st.start(),xn.start(),it.start(),o.current=0,a.current=0,r.current=requestAnimationFrame(u),()=>{st.stop(),xn.stop(),it.stop(),r.current&&(cancelAnimationFrame(r.current),r.current=void 0)}},[e,t,u]),{isRunning:e==="playing"&&!t}}const Rl=()=>{const{startGame:e}=je(),{setScreen:t}=Ft(),n=()=>{e(),t("game")};return i.jsx("div",{className:"screen title-screen",children:i.jsxs("div",{className:"title-content",children:[i.jsx("h1",{className:"game-title",children:"🌾 耕種收割 🌾"}),i.jsx("p",{className:"game-subtitle",children:"Farm Typing Game"}),i.jsx("p",{className:"game-description",children:"Plant crops, type to harvest, and build your farming empire!"}),i.jsxs("div",{className:"menu-buttons",children:[i.jsx("button",{className:"btn btn-primary",onClick:n,children:"🚜 Start Game"}),i.jsx("button",{className:"btn btn-secondary",onClick:()=>t("settings"),children:"⚙️ Settings"})]}),i.jsxs("div",{className:"instructions",children:[i.jsx("h3",{children:"How to Play:"}),i.jsxs("ul",{children:[i.jsx("li",{children:"🌱 Plant seeds in empty farm plots"}),i.jsx("li",{children:"⏳ Wait for crops to grow"}),i.jsx("li",{children:"⌨️ Type the word correctly to harvest"}),i.jsx("li",{children:"💰 Sell crops to earn gold"}),i.jsx("li",{children:"🌟 Build combos for bonus rewards!"})]})]})]})})},d0=()=>{const{phase:e,weather:t,dayNumber:n,timeOfDay:r,togglePause:o,activeCrows:a}=je(),{setScreen:s}=Ft(),{stats:l}=Oe(),{currentWPM:u,currentAccuracy:c,combo:p,calculateAverageWPM:h,calculateOverallAccuracy:m}=ad(),[k,y]=S.useState(!1),{isRunning:v}=c0(),[j,f]=S.useState("farm"),[d,g]=S.useState(!1),[w,N]=S.useState("tomato"),[x,b]=S.useState(Ae.tomato),[C,M]=S.useState(0),[P,A]=S.useState(null),D=xn.getForecast(),{emit:V,ParticleLayer:G}=u0(),z=S.useMemo(()=>r<25?"morning":r<50?"afternoon":r<75?"evening":"night",[r]),F=()=>{const U=Un(x);N(U),g(!0)},W=U=>{console.log("Typing complete!",U),M(re=>re+1),setTimeout(()=>{const re=Un(x);N(re)},1500)},T=()=>{console.log("Typing timeout!"),setTimeout(()=>{const U=Un(x);N(U)},1500)},L=S.useCallback(U=>{console.log(`Combo milestone reached: ${U}!`),V("combo",{x:50,y:50})},[V]),I=U=>{const re=Ae[U];re&&(b(re),N(Un(re)))},Q=S.useCallback(U=>{const re=it.getCrow(U);re&&(it.startChasing(U),A(re))},[]),O=S.useCallback(()=>{P&&(it.chaseCrow(P.id),A(null))},[P]),K=S.useCallback(()=>{P&&(it.crowSteals(P.id),A(null))},[P]),ie=()=>r<25?"🌅":r<50?"☀️":r<75?"🌇":"🌙";return i.jsxs("div",{className:"screen game-screen",children:[i.jsx(Zm,{timeOfDay:z,weather:t}),i.jsx(G,{}),i.jsx($m,{weather:t}),i.jsx(Um,{className:"game-stats-bar"}),i.jsxs("header",{className:"game-header",children:[i.jsxs("div",{className:"header-left",children:[i.jsxs("span",{className:"day-counter",children:["🗓️ Day ",n]}),i.jsx("span",{className:"time-indicator",children:ie()}),i.jsx(Am,{weather:t,forecast:D,showForecast:!0})]}),i.jsx("div",{className:"header-center",children:i.jsx("button",{className:"btn btn-small order-btn",onClick:()=>y(!0),children:"📋 Orders"})}),i.jsxs("div",{className:"header-right",children:[v&&i.jsx("span",{className:"running-indicator",children:"🟢"}),i.jsx("button",{className:"btn btn-small",onClick:o,children:e==="paused"?"▶️":"⏸️"}),i.jsx("button",{className:"btn btn-small",onClick:()=>s("title"),children:"🏠"})]})]}),i.jsxs("nav",{className:"game-tabs",children:[i.jsx("button",{className:`tab-btn ${j==="farm"?"active":""}`,onClick:()=>f("farm"),children:"🌾 Farm"}),i.jsx("button",{className:`tab-btn ${j==="typing-test"?"active":""}`,onClick:()=>f("typing-test"),children:"⌨️ Typing Test"})]}),i.jsxs("main",{className:"game-main",children:[j==="farm"&&i.jsx(Om,{}),j==="typing-test"&&i.jsx("div",{className:"typing-test-container",children:d?i.jsxs("div",{className:"typing-test-active",children:[i.jsx(vs,{targetWord:w,timeLimit:x.harvestTimeLimit,cropSlotId:"test-slot",cropType:x,autoStart:!0,onComplete:W,onTimeout:T,onComboMilestone:L}),i.jsxs("div",{className:"typing-test-controls",children:[i.jsx("button",{className:"btn btn-secondary",onClick:()=>g(!1),children:"⏹️ Stop Test"}),i.jsxs("span",{className:"completed-count",children:["✅ Completed: ",C]})]})]}):i.jsxs("div",{className:"typing-test-start",children:[i.jsx("h2",{children:"⌨️ Typing Test Demo"}),i.jsx("p",{children:"Test the typing engine with different crop difficulties:"}),i.jsx("div",{className:"crop-selector",children:Object.values(Ae).map(U=>i.jsxs("button",{className:`btn crop-btn ${x.id===U.id?"active":""}`,onClick:()=>I(U.id),children:[U.emoji," ",U.name," (Lv.",U.difficulty,")"]},U.id))}),i.jsx("button",{className:"btn btn-primary btn-large",onClick:F,children:"🚀 Start Typing Test"})]})}),i.jsxs("aside",{className:"game-sidebar",children:[i.jsxs("div",{className:"stats-panel",children:[i.jsx("h3",{children:"📊 Stats"}),i.jsxs("div",{className:"stat-row",children:[i.jsx("span",{children:"Current WPM:"}),i.jsx("span",{className:"stat-value",children:u})]}),i.jsxs("div",{className:"stat-row",children:[i.jsx("span",{children:"Accuracy:"}),i.jsxs("span",{className:"stat-value",children:[c,"%"]})]}),i.jsxs("div",{className:"stat-row",children:[i.jsx("span",{children:"Combo:"}),i.jsxs("span",{className:"stat-value combo",children:["x",p]})]}),i.jsx("hr",{}),i.jsxs("div",{className:"stat-row",children:[i.jsx("span",{children:"Avg WPM:"}),i.jsx("span",{className:"stat-value",children:h()})]}),i.jsxs("div",{className:"stat-row",children:[i.jsx("span",{children:"Overall:"}),i.jsxs("span",{className:"stat-value",children:[m(),"%"]})]})]}),i.jsxs("div",{className:"player-stats-panel",children:[i.jsx("h3",{children:"🏆 Progress"}),i.jsxs("div",{className:"stat-row",children:[i.jsx("span",{children:"Crops Harvested:"}),i.jsx("span",{className:"stat-value",children:l.totalCropsHarvested})]}),i.jsxs("div",{className:"stat-row",children:[i.jsx("span",{children:"Words Typed:"}),i.jsx("span",{className:"stat-value",children:l.totalWordsTyped})]}),i.jsxs("div",{className:"stat-row",children:[i.jsx("span",{children:"Best Combo:"}),i.jsxs("span",{className:"stat-value",children:["x",l.bestCombo]})]}),i.jsxs("div",{className:"stat-row",children:[i.jsx("span",{children:"Total Earned:"}),i.jsxs("span",{className:"stat-value gold",children:[l.totalGoldEarned," 💰"]})]})]})]})]}),a.length>0&&!P&&i.jsx("div",{className:"crow-alerts-container",children:a.map(U=>i.jsx(Bm,{crow:U,onChase:Q},U.id))}),P&&i.jsx("div",{className:"crow-chase-modal",children:i.jsxs("div",{className:"crow-chase-content",children:[i.jsxs("div",{className:"crow-chase-header",children:[i.jsx("span",{className:"crow-icon",children:"🐦"}),i.jsx("h3",{children:"Chase the Crow!"})]}),i.jsx(vs,{targetWord:P.wordToChase,timeLimit:5,cropSlotId:`crow-${P.id}`,autoStart:!0,onComplete:O,onTimeout:K}),i.jsx("button",{className:"btn btn-secondary",onClick:()=>A(null),children:"Give Up 😢"})]})}),k&&i.jsx(Xm,{onClose:()=>y(!1)}),e==="paused"&&i.jsx("div",{className:"pause-overlay",children:i.jsxs("div",{className:"pause-menu",children:[i.jsx("h2",{children:"⏸️ Paused"}),i.jsx("button",{className:"btn btn-primary",onClick:o,children:"▶️ Resume"}),i.jsx("button",{className:"btn btn-secondary",onClick:()=>s("shop"),children:"🏪 Shop"}),i.jsx("button",{className:"btn btn-secondary",onClick:()=>s("inventory"),children:"🎒 Inventory"}),i.jsx("button",{className:"btn btn-secondary",onClick:()=>s("title"),children:"🏠 Quit to Menu"})]})})]})},f0=()=>{const{setScreen:e}=Ft(),{resetPlayer:t}=Oe(),{resetFarm:n}=xe(),{resetGame:r}=je(),o=()=>{window.confirm("Are you sure you want to reset all progress? This cannot be undone!")&&(t(),n(),r(),e("title"))};return i.jsxs("div",{className:"screen settings-screen",children:[i.jsx("h2",{children:"⚙️ Settings"}),i.jsxs("div",{className:"settings-content",children:[i.jsxs("div",{className:"settings-section",children:[i.jsx("h3",{children:"Game Controls"}),i.jsx("p",{children:"Keyboard: Type displayed words to harvest crops"}),i.jsx("p",{children:"Mouse: Click farm slots to plant/view crops"})]}),i.jsxs("div",{className:"settings-section danger-zone",children:[i.jsx("h3",{children:"⚠️ Danger Zone"}),i.jsx("button",{className:"btn btn-danger",onClick:o,children:"🗑️ Reset All Progress"})]}),i.jsx("button",{className:"btn btn-secondary",onClick:()=>e("title"),children:"← Back to Menu"})]})]})},p0=()=>{const{currentScreen:e,setScreen:t}=Ft(),{initializeGrid:n}=xe();S.useEffect(()=>{n()},[]);const r=()=>{switch(e){case"title":return i.jsx(Rl,{});case"game":return i.jsx(d0,{});case"settings":return i.jsx(f0,{});case"shop":return i.jsx(Vm,{onClose:()=>t("game")});case"inventory":return i.jsx(Gm,{onClose:()=>t("game")});default:return i.jsx(Rl,{})}};return i.jsxs("div",{className:"app-container",children:[r(),i.jsx("style",{children:`
        /* Crow alerts container */
        .crow-alerts-container {
          position: fixed;
          top: 80px;
          right: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          z-index: 200;
          max-height: calc(100vh - 100px);
          overflow-y: auto;
        }
        
        /* Crow chase modal */
        .crow-chase-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 300;
          animation: fade-in 0.2s ease;
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .crow-chase-content {
          background: linear-gradient(135deg, #fff8dc, #ffeeba);
          border: 4px solid #8B7355;
          border-radius: 16px;
          padding: 24px;
          max-width: 500px;
          width: 90%;
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
          animation: slide-up 0.3s ease;
        }
        
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        .crow-chase-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 20px;
        }
        
        .crow-chase-header .crow-icon {
          font-size: 48px;
          animation: crow-flap 0.3s infinite alternate;
        }
        
        @keyframes crow-flap {
          from { transform: rotate(-10deg); }
          to { transform: rotate(10deg); }
        }
        
        .crow-chase-header h3 {
          font-size: 24px;
          color: #5a4a3a;
          margin: 0;
        }
        
        .crow-chase-content .btn-secondary {
          margin-top: 16px;
          width: 100%;
        }
      `})]})},m0=()=>i.jsx(r0,{children:i.jsx(p0,{})});ba.createRoot(document.getElementById("root")).render(i.jsx(Ql.StrictMode,{children:i.jsx(m0,{})}));
//# sourceMappingURL=index-DTo47q0Z.js.map
