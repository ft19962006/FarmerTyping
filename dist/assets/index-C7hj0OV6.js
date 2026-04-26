var pd=Object.defineProperty;var md=(e,t,n)=>t in e?pd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var pe=(e,t,n)=>md(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();function Wl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Bl={exports:{}},Ma={},Ul={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var br=Symbol.for("react.element"),hd=Symbol.for("react.portal"),gd=Symbol.for("react.fragment"),yd=Symbol.for("react.strict_mode"),vd=Symbol.for("react.profiler"),xd=Symbol.for("react.provider"),wd=Symbol.for("react.context"),kd=Symbol.for("react.forward_ref"),Sd=Symbol.for("react.suspense"),bd=Symbol.for("react.memo"),jd=Symbol.for("react.lazy"),vi=Symbol.iterator;function Nd(e){return e===null||typeof e!="object"?null:(e=vi&&e[vi]||e["@@iterator"],typeof e=="function"?e:null)}var Hl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gl=Object.assign,Vl={};function _n(e,t,n){this.props=e,this.context=t,this.refs=Vl,this.updater=n||Hl}_n.prototype.isReactComponent={};_n.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};_n.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xl(){}Xl.prototype=_n.prototype;function ko(e,t,n){this.props=e,this.context=t,this.refs=Vl,this.updater=n||Hl}var So=ko.prototype=new Xl;So.constructor=ko;Gl(So,_n.prototype);So.isPureReactComponent=!0;var xi=Array.isArray,Yl=Object.prototype.hasOwnProperty,bo={current:null},Ql={key:!0,ref:!0,__self:!0,__source:!0};function Kl(e,t,n){var r,a={},s=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(s=""+t.key),t)Yl.call(t,r)&&!Ql.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(l===1)a.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)a[r]===void 0&&(a[r]=l[r]);return{$$typeof:br,type:e,key:s,ref:i,props:a,_owner:bo.current}}function Cd(e,t){return{$$typeof:br,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function jo(e){return typeof e=="object"&&e!==null&&e.$$typeof===br}function Ed(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var wi=/\/+/g;function Qa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ed(""+e.key):t.toString(36)}function Qr(e,t,n,r,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case br:case hd:i=!0}}if(i)return i=e,a=a(i),e=r===""?"."+Qa(i,0):r,xi(a)?(n="",e!=null&&(n=e.replace(wi,"$&/")+"/"),Qr(a,t,n,"",function(u){return u})):a!=null&&(jo(a)&&(a=Cd(a,n+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(wi,"$&/")+"/")+e)),t.push(a)),1;if(i=0,r=r===""?".":r+":",xi(e))for(var l=0;l<e.length;l++){s=e[l];var c=r+Qa(s,l);i+=Qr(s,t,n,c,a)}else if(c=Nd(e),typeof c=="function")for(e=c.call(e),l=0;!(s=e.next()).done;)s=s.value,c=r+Qa(s,l++),i+=Qr(s,t,n,c,a);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function zr(e,t,n){if(e==null)return e;var r=[],a=0;return Qr(e,r,"","",function(s){return t.call(n,s,a++)}),r}function Td(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ke={current:null},Kr={transition:null},zd={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:Kr,ReactCurrentOwner:bo};function ql(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:zr,forEach:function(e,t,n){zr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return zr(e,function(){t++}),t},toArray:function(e){return zr(e,function(t){return t})||[]},only:function(e){if(!jo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=_n;R.Fragment=gd;R.Profiler=vd;R.PureComponent=ko;R.StrictMode=yd;R.Suspense=Sd;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zd;R.act=ql;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Gl({},e.props),a=e.key,s=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,i=bo.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Yl.call(t,c)&&!Ql.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:br,type:e.type,key:a,ref:s,props:r,_owner:i}};R.createContext=function(e){return e={$$typeof:wd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:xd,_context:e},e.Consumer=e};R.createElement=Kl;R.createFactory=function(e){var t=Kl.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:kd,render:e}};R.isValidElement=jo;R.lazy=function(e){return{$$typeof:jd,_payload:{_status:-1,_result:e},_init:Td}};R.memo=function(e,t){return{$$typeof:bd,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=Kr.transition;Kr.transition={};try{e()}finally{Kr.transition=t}};R.unstable_act=ql;R.useCallback=function(e,t){return ke.current.useCallback(e,t)};R.useContext=function(e){return ke.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return ke.current.useDeferredValue(e)};R.useEffect=function(e,t){return ke.current.useEffect(e,t)};R.useId=function(){return ke.current.useId()};R.useImperativeHandle=function(e,t,n){return ke.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return ke.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return ke.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return ke.current.useMemo(e,t)};R.useReducer=function(e,t,n){return ke.current.useReducer(e,t,n)};R.useRef=function(e){return ke.current.useRef(e)};R.useState=function(e){return ke.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return ke.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return ke.current.useTransition()};R.version="18.3.1";Ul.exports=R;var S=Ul.exports;const Zl=Wl(S);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pd=S,Md=Symbol.for("react.element"),_d=Symbol.for("react.fragment"),Ld=Object.prototype.hasOwnProperty,Id=Pd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fd={key:!0,ref:!0,__self:!0,__source:!0};function Jl(e,t,n){var r,a={},s=null,i=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Ld.call(t,r)&&!Fd.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:Md,type:e,key:s,ref:i,props:a,_owner:Id.current}}Ma.Fragment=_d;Ma.jsx=Jl;Ma.jsxs=Jl;Bl.exports=Ma;var o=Bl.exports,js={},ec={exports:{}},Le={},tc={exports:{}},nc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,I){var F=T.length;T.push(I);e:for(;0<F;){var Q=F-1>>>1,O=T[Q];if(0<a(O,I))T[Q]=I,T[F]=O,F=Q;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var I=T[0],F=T.pop();if(F!==I){T[0]=F;e:for(var Q=0,O=T.length,K=O>>>1;Q<K;){var oe=2*(Q+1)-1,en=T[oe],Ue=oe+1,ht=T[Ue];if(0>a(en,F))Ue<O&&0>a(ht,en)?(T[Q]=ht,T[Ue]=F,Q=Ue):(T[Q]=en,T[oe]=F,Q=oe);else if(Ue<O&&0>a(ht,F))T[Q]=ht,T[Ue]=F,Q=Ue;else break e}}return I}function a(T,I){var F=T.sortIndex-I.sortIndex;return F!==0?F:T.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var i=Date,l=i.now();e.unstable_now=function(){return i.now()-l}}var c=[],u=[],p=1,h=null,m=3,w=!1,y=!1,v=!1,j=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(T){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=T)r(u),I.sortIndex=I.expirationTime,t(c,I);else break;I=n(u)}}function x(T){if(v=!1,g(T),!y)if(n(c)!==null)y=!0,_(N);else{var I=n(u);I!==null&&$(x,I.startTime-T)}}function N(T,I){y=!1,v&&(v=!1,f(C),C=-1),w=!0;var F=m;try{for(g(I),h=n(c);h!==null&&(!(h.expirationTime>I)||T&&!W());){var Q=h.callback;if(typeof Q=="function"){h.callback=null,m=h.priorityLevel;var O=Q(h.expirationTime<=I);I=e.unstable_now(),typeof O=="function"?h.callback=O:h===n(c)&&r(c),g(I)}else r(c);h=n(c)}if(h!==null)var K=!0;else{var oe=n(u);oe!==null&&$(x,oe.startTime-I),K=!1}return K}finally{h=null,m=F,w=!1}}var k=!1,b=null,C=-1,L=5,P=-1;function W(){return!(e.unstable_now()-P<L)}function D(){if(b!==null){var T=e.unstable_now();P=T;var I=!0;try{I=b(!0,T)}finally{I?Y():(k=!1,b=null)}}else k=!1}var Y;if(typeof d=="function")Y=function(){d(D)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,z=G.port2;G.port1.onmessage=D,Y=function(){z.postMessage(null)}}else Y=function(){j(D,0)};function _(T){b=T,k||(k=!0,Y())}function $(T,I){C=j(function(){T(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){y||w||(y=!0,_(N))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(T){switch(m){case 1:case 2:case 3:var I=3;break;default:I=m}var F=m;m=I;try{return T()}finally{m=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,I){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var F=m;m=T;try{return I()}finally{m=F}},e.unstable_scheduleCallback=function(T,I,F){var Q=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?Q+F:Q):F=Q,T){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=F+O,T={id:p++,callback:I,priorityLevel:T,startTime:F,expirationTime:O,sortIndex:-1},F>Q?(T.sortIndex=F,t(u,T),n(c)===null&&T===n(u)&&(v?(f(C),C=-1):v=!0,$(x,F-Q))):(T.sortIndex=O,t(c,T),y||w||(y=!0,_(N))),T},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(T){var I=m;return function(){var F=m;m=I;try{return T.apply(this,arguments)}finally{m=F}}}})(nc);tc.exports=nc;var Dd=tc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rd=S,_e=Dd;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rc=new Set,ar={};function Zt(e,t){jn(e,t),jn(e+"Capture",t)}function jn(e,t){for(ar[e]=t,e=0;e<t.length;e++)rc.add(t[e])}var ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ns=Object.prototype.hasOwnProperty,Od=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ki={},Si={};function $d(e){return Ns.call(Si,e)?!0:Ns.call(ki,e)?!1:Od.test(e)?Si[e]=!0:(ki[e]=!0,!1)}function Ad(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Wd(e,t,n,r){if(t===null||typeof t>"u"||Ad(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Se(e,t,n,r,a,s,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=i}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new Se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];fe[t]=new Se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new Se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new Se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new Se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new Se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new Se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new Se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new Se(e,5,!1,e.toLowerCase(),null,!1,!1)});var No=/[\-:]([a-z])/g;function Co(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(No,Co);fe[t]=new Se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(No,Co);fe[t]=new Se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(No,Co);fe[t]=new Se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new Se(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new Se(e,1,!1,e.toLowerCase(),null,!0,!0)});function Eo(e,t,n,r){var a=fe.hasOwnProperty(t)?fe[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Wd(t,n,a,r)&&(n=null),r||a===null?$d(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var mt=Rd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pr=Symbol.for("react.element"),an=Symbol.for("react.portal"),sn=Symbol.for("react.fragment"),To=Symbol.for("react.strict_mode"),Cs=Symbol.for("react.profiler"),ac=Symbol.for("react.provider"),sc=Symbol.for("react.context"),zo=Symbol.for("react.forward_ref"),Es=Symbol.for("react.suspense"),Ts=Symbol.for("react.suspense_list"),Po=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),oc=Symbol.for("react.offscreen"),bi=Symbol.iterator;function Fn(e){return e===null||typeof e!="object"?null:(e=bi&&e[bi]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,Ka;function Un(e){if(Ka===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ka=t&&t[1]||""}return`
`+Ka+e}var qa=!1;function Za(e,t){if(!e||qa)return"";qa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),s=r.stack.split(`
`),i=a.length-1,l=s.length-1;1<=i&&0<=l&&a[i]!==s[l];)l--;for(;1<=i&&0<=l;i--,l--)if(a[i]!==s[l]){if(i!==1||l!==1)do if(i--,l--,0>l||a[i]!==s[l]){var c=`
`+a[i].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=i&&0<=l);break}}}finally{qa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Un(e):""}function Bd(e){switch(e.tag){case 5:return Un(e.type);case 16:return Un("Lazy");case 13:return Un("Suspense");case 19:return Un("SuspenseList");case 0:case 2:case 15:return e=Za(e.type,!1),e;case 11:return e=Za(e.type.render,!1),e;case 1:return e=Za(e.type,!0),e;default:return""}}function zs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case sn:return"Fragment";case an:return"Portal";case Cs:return"Profiler";case To:return"StrictMode";case Es:return"Suspense";case Ts:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case sc:return(e.displayName||"Context")+".Consumer";case ac:return(e._context.displayName||"Context")+".Provider";case zo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Po:return t=e.displayName||null,t!==null?t:zs(e.type)||"Memo";case xt:t=e._payload,e=e._init;try{return zs(e(t))}catch{}}return null}function Ud(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zs(t);case 8:return t===To?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Lt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ic(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hd(e){var t=ic(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(i){r=""+i,s.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mr(e){e._valueTracker||(e._valueTracker=Hd(e))}function lc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ic(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ia(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ps(e,t){var n=t.checked;return ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ji(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Lt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function cc(e,t){t=t.checked,t!=null&&Eo(e,"checked",t,!1)}function Ms(e,t){cc(e,t);var n=Lt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?_s(e,t.type,n):t.hasOwnProperty("defaultValue")&&_s(e,t.type,Lt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ni(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function _s(e,t,n){(t!=="number"||ia(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Hn=Array.isArray;function yn(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Lt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Ls(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ci(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(Hn(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Lt(n)}}function uc(e,t){var n=Lt(t.value),r=Lt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ei(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function dc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Is(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?dc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _r,fc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(_r=_r||document.createElement("div"),_r.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_r.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function sr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Yn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gd=["Webkit","ms","Moz","O"];Object.keys(Yn).forEach(function(e){Gd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Yn[t]=Yn[e]})});function pc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Yn.hasOwnProperty(e)&&Yn[e]?(""+t).trim():t+"px"}function mc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=pc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var Vd=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fs(e,t){if(t){if(Vd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function Ds(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rs=null;function Mo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Os=null,vn=null,xn=null;function Ti(e){if(e=Cr(e)){if(typeof Os!="function")throw Error(E(280));var t=e.stateNode;t&&(t=Da(t),Os(e.stateNode,e.type,t))}}function hc(e){vn?xn?xn.push(e):xn=[e]:vn=e}function gc(){if(vn){var e=vn,t=xn;if(xn=vn=null,Ti(e),t)for(e=0;e<t.length;e++)Ti(t[e])}}function yc(e,t){return e(t)}function vc(){}var Ja=!1;function xc(e,t,n){if(Ja)return e(t,n);Ja=!0;try{return yc(e,t,n)}finally{Ja=!1,(vn!==null||xn!==null)&&(vc(),gc())}}function or(e,t){var n=e.stateNode;if(n===null)return null;var r=Da(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var $s=!1;if(ut)try{var Dn={};Object.defineProperty(Dn,"passive",{get:function(){$s=!0}}),window.addEventListener("test",Dn,Dn),window.removeEventListener("test",Dn,Dn)}catch{$s=!1}function Xd(e,t,n,r,a,s,i,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var Qn=!1,la=null,ca=!1,As=null,Yd={onError:function(e){Qn=!0,la=e}};function Qd(e,t,n,r,a,s,i,l,c){Qn=!1,la=null,Xd.apply(Yd,arguments)}function Kd(e,t,n,r,a,s,i,l,c){if(Qd.apply(this,arguments),Qn){if(Qn){var u=la;Qn=!1,la=null}else throw Error(E(198));ca||(ca=!0,As=u)}}function Jt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function wc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function zi(e){if(Jt(e)!==e)throw Error(E(188))}function qd(e){var t=e.alternate;if(!t){if(t=Jt(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return zi(a),e;if(s===r)return zi(a),t;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=a,r=s;else{for(var i=!1,l=a.child;l;){if(l===n){i=!0,n=a,r=s;break}if(l===r){i=!0,r=a,n=s;break}l=l.sibling}if(!i){for(l=s.child;l;){if(l===n){i=!0,n=s,r=a;break}if(l===r){i=!0,r=s,n=a;break}l=l.sibling}if(!i)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function kc(e){return e=qd(e),e!==null?Sc(e):null}function Sc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Sc(e);if(t!==null)return t;e=e.sibling}return null}var bc=_e.unstable_scheduleCallback,Pi=_e.unstable_cancelCallback,Zd=_e.unstable_shouldYield,Jd=_e.unstable_requestPaint,ne=_e.unstable_now,ef=_e.unstable_getCurrentPriorityLevel,_o=_e.unstable_ImmediatePriority,jc=_e.unstable_UserBlockingPriority,ua=_e.unstable_NormalPriority,tf=_e.unstable_LowPriority,Nc=_e.unstable_IdlePriority,_a=null,tt=null;function nf(e){if(tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(_a,e,void 0,(e.current.flags&128)===128)}catch{}}var Ye=Math.clz32?Math.clz32:sf,rf=Math.log,af=Math.LN2;function sf(e){return e>>>=0,e===0?32:31-(rf(e)/af|0)|0}var Lr=64,Ir=4194304;function Gn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function da(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,s=e.pingedLanes,i=n&268435455;if(i!==0){var l=i&~a;l!==0?r=Gn(l):(s&=i,s!==0&&(r=Gn(s)))}else i=n&~a,i!==0?r=Gn(i):s!==0&&(r=Gn(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,s=t&-t,a>=s||a===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ye(t),a=1<<n,r|=e[n],t&=~a;return r}function of(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes;0<s;){var i=31-Ye(s),l=1<<i,c=a[i];c===-1?(!(l&n)||l&r)&&(a[i]=of(l,t)):c<=t&&(e.expiredLanes|=l),s&=~l}}function Ws(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cc(){var e=Lr;return Lr<<=1,!(Lr&4194240)&&(Lr=64),e}function es(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function jr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ye(t),e[t]=n}function cf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-Ye(n),s=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~s}}function Lo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ye(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var B=0;function Ec(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Tc,Io,zc,Pc,Mc,Bs=!1,Fr=[],Nt=null,Ct=null,Et=null,ir=new Map,lr=new Map,kt=[],uf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mi(e,t){switch(e){case"focusin":case"focusout":Nt=null;break;case"dragenter":case"dragleave":Ct=null;break;case"mouseover":case"mouseout":Et=null;break;case"pointerover":case"pointerout":ir.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":lr.delete(t.pointerId)}}function Rn(e,t,n,r,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[a]},t!==null&&(t=Cr(t),t!==null&&Io(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function df(e,t,n,r,a){switch(t){case"focusin":return Nt=Rn(Nt,e,t,n,r,a),!0;case"dragenter":return Ct=Rn(Ct,e,t,n,r,a),!0;case"mouseover":return Et=Rn(Et,e,t,n,r,a),!0;case"pointerover":var s=a.pointerId;return ir.set(s,Rn(ir.get(s)||null,e,t,n,r,a)),!0;case"gotpointercapture":return s=a.pointerId,lr.set(s,Rn(lr.get(s)||null,e,t,n,r,a)),!0}return!1}function _c(e){var t=Bt(e.target);if(t!==null){var n=Jt(t);if(n!==null){if(t=n.tag,t===13){if(t=wc(n),t!==null){e.blockedOn=t,Mc(e.priority,function(){zc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Us(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Rs=r,n.target.dispatchEvent(r),Rs=null}else return t=Cr(n),t!==null&&Io(t),e.blockedOn=n,!1;t.shift()}return!0}function _i(e,t,n){qr(e)&&n.delete(t)}function ff(){Bs=!1,Nt!==null&&qr(Nt)&&(Nt=null),Ct!==null&&qr(Ct)&&(Ct=null),Et!==null&&qr(Et)&&(Et=null),ir.forEach(_i),lr.forEach(_i)}function On(e,t){e.blockedOn===t&&(e.blockedOn=null,Bs||(Bs=!0,_e.unstable_scheduleCallback(_e.unstable_NormalPriority,ff)))}function cr(e){function t(a){return On(a,e)}if(0<Fr.length){On(Fr[0],e);for(var n=1;n<Fr.length;n++){var r=Fr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Nt!==null&&On(Nt,e),Ct!==null&&On(Ct,e),Et!==null&&On(Et,e),ir.forEach(t),lr.forEach(t),n=0;n<kt.length;n++)r=kt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<kt.length&&(n=kt[0],n.blockedOn===null);)_c(n),n.blockedOn===null&&kt.shift()}var wn=mt.ReactCurrentBatchConfig,fa=!0;function pf(e,t,n,r){var a=B,s=wn.transition;wn.transition=null;try{B=1,Fo(e,t,n,r)}finally{B=a,wn.transition=s}}function mf(e,t,n,r){var a=B,s=wn.transition;wn.transition=null;try{B=4,Fo(e,t,n,r)}finally{B=a,wn.transition=s}}function Fo(e,t,n,r){if(fa){var a=Us(e,t,n,r);if(a===null)us(e,t,r,pa,n),Mi(e,r);else if(df(a,e,t,n,r))r.stopPropagation();else if(Mi(e,r),t&4&&-1<uf.indexOf(e)){for(;a!==null;){var s=Cr(a);if(s!==null&&Tc(s),s=Us(e,t,n,r),s===null&&us(e,t,r,pa,n),s===a)break;a=s}a!==null&&r.stopPropagation()}else us(e,t,r,null,n)}}var pa=null;function Us(e,t,n,r){if(pa=null,e=Mo(r),e=Bt(e),e!==null)if(t=Jt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=wc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return pa=e,null}function Lc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ef()){case _o:return 1;case jc:return 4;case ua:case tf:return 16;case Nc:return 536870912;default:return 16}default:return 16}}var bt=null,Do=null,Zr=null;function Ic(){if(Zr)return Zr;var e,t=Do,n=t.length,r,a="value"in bt?bt.value:bt.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===a[s-r];r++);return Zr=a.slice(e,1<r?1-r:void 0)}function Jr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Dr(){return!0}function Li(){return!1}function Ie(e){function t(n,r,a,s,i){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=s,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Dr:Li,this.isPropagationStopped=Li,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Dr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Dr)},persist:function(){},isPersistent:Dr}),t}var Ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ro=Ie(Ln),Nr=ee({},Ln,{view:0,detail:0}),hf=Ie(Nr),ts,ns,$n,La=ee({},Nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$n&&($n&&e.type==="mousemove"?(ts=e.screenX-$n.screenX,ns=e.screenY-$n.screenY):ns=ts=0,$n=e),ts)},movementY:function(e){return"movementY"in e?e.movementY:ns}}),Ii=Ie(La),gf=ee({},La,{dataTransfer:0}),yf=Ie(gf),vf=ee({},Nr,{relatedTarget:0}),rs=Ie(vf),xf=ee({},Ln,{animationName:0,elapsedTime:0,pseudoElement:0}),wf=Ie(xf),kf=ee({},Ln,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sf=Ie(kf),bf=ee({},Ln,{data:0}),Fi=Ie(bf),jf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ef(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cf[e])?!!t[e]:!1}function Oo(){return Ef}var Tf=ee({},Nr,{key:function(e){if(e.key){var t=jf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Jr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oo,charCode:function(e){return e.type==="keypress"?Jr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zf=Ie(Tf),Pf=ee({},La,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Di=Ie(Pf),Mf=ee({},Nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oo}),_f=Ie(Mf),Lf=ee({},Ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),If=Ie(Lf),Ff=ee({},La,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Df=Ie(Ff),Rf=[9,13,27,32],$o=ut&&"CompositionEvent"in window,Kn=null;ut&&"documentMode"in document&&(Kn=document.documentMode);var Of=ut&&"TextEvent"in window&&!Kn,Fc=ut&&(!$o||Kn&&8<Kn&&11>=Kn),Ri=" ",Oi=!1;function Dc(e,t){switch(e){case"keyup":return Rf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var on=!1;function $f(e,t){switch(e){case"compositionend":return Rc(t);case"keypress":return t.which!==32?null:(Oi=!0,Ri);case"textInput":return e=t.data,e===Ri&&Oi?null:e;default:return null}}function Af(e,t){if(on)return e==="compositionend"||!$o&&Dc(e,t)?(e=Ic(),Zr=Do=bt=null,on=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fc&&t.locale!=="ko"?null:t.data;default:return null}}var Wf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $i(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Wf[e.type]:t==="textarea"}function Oc(e,t,n,r){hc(r),t=ma(t,"onChange"),0<t.length&&(n=new Ro("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qn=null,ur=null;function Bf(e){Qc(e,0)}function Ia(e){var t=un(e);if(lc(t))return e}function Uf(e,t){if(e==="change")return t}var $c=!1;if(ut){var as;if(ut){var ss="oninput"in document;if(!ss){var Ai=document.createElement("div");Ai.setAttribute("oninput","return;"),ss=typeof Ai.oninput=="function"}as=ss}else as=!1;$c=as&&(!document.documentMode||9<document.documentMode)}function Wi(){qn&&(qn.detachEvent("onpropertychange",Ac),ur=qn=null)}function Ac(e){if(e.propertyName==="value"&&Ia(ur)){var t=[];Oc(t,ur,e,Mo(e)),xc(Bf,t)}}function Hf(e,t,n){e==="focusin"?(Wi(),qn=t,ur=n,qn.attachEvent("onpropertychange",Ac)):e==="focusout"&&Wi()}function Gf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ia(ur)}function Vf(e,t){if(e==="click")return Ia(t)}function Xf(e,t){if(e==="input"||e==="change")return Ia(t)}function Yf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ke=typeof Object.is=="function"?Object.is:Yf;function dr(e,t){if(Ke(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!Ns.call(t,a)||!Ke(e[a],t[a]))return!1}return!0}function Bi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ui(e,t){var n=Bi(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bi(n)}}function Wc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bc(){for(var e=window,t=ia();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ia(e.document)}return t}function Ao(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Qf(e){var t=Bc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Wc(n.ownerDocument.documentElement,n)){if(r!==null&&Ao(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,s=Math.min(r.start,a);r=r.end===void 0?s:Math.min(r.end,a),!e.extend&&s>r&&(a=r,r=s,s=a),a=Ui(n,s);var i=Ui(n,r);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Kf=ut&&"documentMode"in document&&11>=document.documentMode,ln=null,Hs=null,Zn=null,Gs=!1;function Hi(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gs||ln==null||ln!==ia(r)||(r=ln,"selectionStart"in r&&Ao(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zn&&dr(Zn,r)||(Zn=r,r=ma(Hs,"onSelect"),0<r.length&&(t=new Ro("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ln)))}function Rr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cn={animationend:Rr("Animation","AnimationEnd"),animationiteration:Rr("Animation","AnimationIteration"),animationstart:Rr("Animation","AnimationStart"),transitionend:Rr("Transition","TransitionEnd")},os={},Uc={};ut&&(Uc=document.createElement("div").style,"AnimationEvent"in window||(delete cn.animationend.animation,delete cn.animationiteration.animation,delete cn.animationstart.animation),"TransitionEvent"in window||delete cn.transitionend.transition);function Fa(e){if(os[e])return os[e];if(!cn[e])return e;var t=cn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Uc)return os[e]=t[n];return e}var Hc=Fa("animationend"),Gc=Fa("animationiteration"),Vc=Fa("animationstart"),Xc=Fa("transitionend"),Yc=new Map,Gi="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ft(e,t){Yc.set(e,t),Zt(t,[e])}for(var is=0;is<Gi.length;is++){var ls=Gi[is],qf=ls.toLowerCase(),Zf=ls[0].toUpperCase()+ls.slice(1);Ft(qf,"on"+Zf)}Ft(Hc,"onAnimationEnd");Ft(Gc,"onAnimationIteration");Ft(Vc,"onAnimationStart");Ft("dblclick","onDoubleClick");Ft("focusin","onFocus");Ft("focusout","onBlur");Ft(Xc,"onTransitionEnd");jn("onMouseEnter",["mouseout","mouseover"]);jn("onMouseLeave",["mouseout","mouseover"]);jn("onPointerEnter",["pointerout","pointerover"]);jn("onPointerLeave",["pointerout","pointerover"]);Zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vn));function Vi(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Kd(r,t,void 0,e),e.currentTarget=null}function Qc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&a.isPropagationStopped())break e;Vi(a,l,u),s=c}else for(i=0;i<r.length;i++){if(l=r[i],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&a.isPropagationStopped())break e;Vi(a,l,u),s=c}}}if(ca)throw e=As,ca=!1,As=null,e}function V(e,t){var n=t[Ks];n===void 0&&(n=t[Ks]=new Set);var r=e+"__bubble";n.has(r)||(Kc(t,e,2,!1),n.add(r))}function cs(e,t,n){var r=0;t&&(r|=4),Kc(n,e,r,t)}var Or="_reactListening"+Math.random().toString(36).slice(2);function fr(e){if(!e[Or]){e[Or]=!0,rc.forEach(function(n){n!=="selectionchange"&&(Jf.has(n)||cs(n,!1,e),cs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Or]||(t[Or]=!0,cs("selectionchange",!1,t))}}function Kc(e,t,n,r){switch(Lc(t)){case 1:var a=pf;break;case 4:a=mf;break;default:a=Fo}n=a.bind(null,t,n,e),a=void 0,!$s||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function us(e,t,n,r,a){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var l=r.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(i===4)for(i=r.return;i!==null;){var c=i.tag;if((c===3||c===4)&&(c=i.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;i=i.return}for(;l!==null;){if(i=Bt(l),i===null)return;if(c=i.tag,c===5||c===6){r=s=i;continue e}l=l.parentNode}}r=r.return}xc(function(){var u=s,p=Mo(n),h=[];e:{var m=Yc.get(e);if(m!==void 0){var w=Ro,y=e;switch(e){case"keypress":if(Jr(n)===0)break e;case"keydown":case"keyup":w=zf;break;case"focusin":y="focus",w=rs;break;case"focusout":y="blur",w=rs;break;case"beforeblur":case"afterblur":w=rs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Ii;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=yf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=_f;break;case Hc:case Gc:case Vc:w=wf;break;case Xc:w=If;break;case"scroll":w=hf;break;case"wheel":w=Df;break;case"copy":case"cut":case"paste":w=Sf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Di}var v=(t&4)!==0,j=!v&&e==="scroll",f=v?m!==null?m+"Capture":null:m;v=[];for(var d=u,g;d!==null;){g=d;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,f!==null&&(x=or(d,f),x!=null&&v.push(pr(d,x,g)))),j)break;d=d.return}0<v.length&&(m=new w(m,y,null,n,p),h.push({event:m,listeners:v}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&n!==Rs&&(y=n.relatedTarget||n.fromElement)&&(Bt(y)||y[dt]))break e;if((w||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,w?(y=n.relatedTarget||n.toElement,w=u,y=y?Bt(y):null,y!==null&&(j=Jt(y),y!==j||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=u),w!==y)){if(v=Ii,x="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(v=Di,x="onPointerLeave",f="onPointerEnter",d="pointer"),j=w==null?m:un(w),g=y==null?m:un(y),m=new v(x,d+"leave",w,n,p),m.target=j,m.relatedTarget=g,x=null,Bt(p)===u&&(v=new v(f,d+"enter",y,n,p),v.target=g,v.relatedTarget=j,x=v),j=x,w&&y)t:{for(v=w,f=y,d=0,g=v;g;g=rn(g))d++;for(g=0,x=f;x;x=rn(x))g++;for(;0<d-g;)v=rn(v),d--;for(;0<g-d;)f=rn(f),g--;for(;d--;){if(v===f||f!==null&&v===f.alternate)break t;v=rn(v),f=rn(f)}v=null}else v=null;w!==null&&Xi(h,m,w,v,!1),y!==null&&j!==null&&Xi(h,j,y,v,!0)}}e:{if(m=u?un(u):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var N=Uf;else if($i(m))if($c)N=Xf;else{N=Gf;var k=Hf}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(N=Vf);if(N&&(N=N(e,u))){Oc(h,N,n,p);break e}k&&k(e,m,u),e==="focusout"&&(k=m._wrapperState)&&k.controlled&&m.type==="number"&&_s(m,"number",m.value)}switch(k=u?un(u):window,e){case"focusin":($i(k)||k.contentEditable==="true")&&(ln=k,Hs=u,Zn=null);break;case"focusout":Zn=Hs=ln=null;break;case"mousedown":Gs=!0;break;case"contextmenu":case"mouseup":case"dragend":Gs=!1,Hi(h,n,p);break;case"selectionchange":if(Kf)break;case"keydown":case"keyup":Hi(h,n,p)}var b;if($o)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else on?Dc(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Fc&&n.locale!=="ko"&&(on||C!=="onCompositionStart"?C==="onCompositionEnd"&&on&&(b=Ic()):(bt=p,Do="value"in bt?bt.value:bt.textContent,on=!0)),k=ma(u,C),0<k.length&&(C=new Fi(C,e,null,n,p),h.push({event:C,listeners:k}),b?C.data=b:(b=Rc(n),b!==null&&(C.data=b)))),(b=Of?$f(e,n):Af(e,n))&&(u=ma(u,"onBeforeInput"),0<u.length&&(p=new Fi("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:u}),p.data=b))}Qc(h,t)})}function pr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ma(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,s=a.stateNode;a.tag===5&&s!==null&&(a=s,s=or(e,n),s!=null&&r.unshift(pr(e,s,a)),s=or(e,t),s!=null&&r.push(pr(e,s,a))),e=e.return}return r}function rn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xi(e,t,n,r,a){for(var s=t._reactName,i=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,a?(c=or(n,s),c!=null&&i.unshift(pr(n,c,l))):a||(c=or(n,s),c!=null&&i.push(pr(n,c,l)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var ep=/\r\n?/g,tp=/\u0000|\uFFFD/g;function Yi(e){return(typeof e=="string"?e:""+e).replace(ep,`
`).replace(tp,"")}function $r(e,t,n){if(t=Yi(t),Yi(e)!==t&&n)throw Error(E(425))}function ha(){}var Vs=null,Xs=null;function Ys(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Qs=typeof setTimeout=="function"?setTimeout:void 0,np=typeof clearTimeout=="function"?clearTimeout:void 0,Qi=typeof Promise=="function"?Promise:void 0,rp=typeof queueMicrotask=="function"?queueMicrotask:typeof Qi<"u"?function(e){return Qi.resolve(null).then(e).catch(ap)}:Qs;function ap(e){setTimeout(function(){throw e})}function ds(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),cr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);cr(t)}function Tt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ki(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var In=Math.random().toString(36).slice(2),et="__reactFiber$"+In,mr="__reactProps$"+In,dt="__reactContainer$"+In,Ks="__reactEvents$"+In,sp="__reactListeners$"+In,op="__reactHandles$"+In;function Bt(e){var t=e[et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dt]||n[et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ki(e);e!==null;){if(n=e[et])return n;e=Ki(e)}return t}e=n,n=e.parentNode}return null}function Cr(e){return e=e[et]||e[dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function un(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Da(e){return e[mr]||null}var qs=[],dn=-1;function Dt(e){return{current:e}}function X(e){0>dn||(e.current=qs[dn],qs[dn]=null,dn--)}function H(e,t){dn++,qs[dn]=e.current,e.current=t}var It={},ye=Dt(It),Ce=Dt(!1),Xt=It;function Nn(e,t){var n=e.type.contextTypes;if(!n)return It;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},s;for(s in n)a[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Ee(e){return e=e.childContextTypes,e!=null}function ga(){X(Ce),X(ye)}function qi(e,t,n){if(ye.current!==It)throw Error(E(168));H(ye,t),H(Ce,n)}function qc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(E(108,Ud(e)||"Unknown",a));return ee({},n,r)}function ya(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||It,Xt=ye.current,H(ye,e),H(Ce,Ce.current),!0}function Zi(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=qc(e,t,Xt),r.__reactInternalMemoizedMergedChildContext=e,X(Ce),X(ye),H(ye,e)):X(Ce),H(Ce,n)}var at=null,Ra=!1,fs=!1;function Zc(e){at===null?at=[e]:at.push(e)}function ip(e){Ra=!0,Zc(e)}function Rt(){if(!fs&&at!==null){fs=!0;var e=0,t=B;try{var n=at;for(B=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}at=null,Ra=!1}catch(a){throw at!==null&&(at=at.slice(e+1)),bc(_o,Rt),a}finally{B=t,fs=!1}}return null}var fn=[],pn=0,va=null,xa=0,Fe=[],De=0,Yt=null,st=1,ot="";function At(e,t){fn[pn++]=xa,fn[pn++]=va,va=e,xa=t}function Jc(e,t,n){Fe[De++]=st,Fe[De++]=ot,Fe[De++]=Yt,Yt=e;var r=st;e=ot;var a=32-Ye(r)-1;r&=~(1<<a),n+=1;var s=32-Ye(t)+a;if(30<s){var i=a-a%5;s=(r&(1<<i)-1).toString(32),r>>=i,a-=i,st=1<<32-Ye(t)+a|n<<a|r,ot=s+e}else st=1<<s|n<<a|r,ot=e}function Wo(e){e.return!==null&&(At(e,1),Jc(e,1,0))}function Bo(e){for(;e===va;)va=fn[--pn],fn[pn]=null,xa=fn[--pn],fn[pn]=null;for(;e===Yt;)Yt=Fe[--De],Fe[De]=null,ot=Fe[--De],Fe[De]=null,st=Fe[--De],Fe[De]=null}var Me=null,Pe=null,q=!1,Xe=null;function eu(e,t){var n=Re(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ji(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Me=e,Pe=Tt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Me=e,Pe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Yt!==null?{id:st,overflow:ot}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Re(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Me=e,Pe=null,!0):!1;default:return!1}}function Zs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Js(e){if(q){var t=Pe;if(t){var n=t;if(!Ji(e,t)){if(Zs(e))throw Error(E(418));t=Tt(n.nextSibling);var r=Me;t&&Ji(e,t)?eu(r,n):(e.flags=e.flags&-4097|2,q=!1,Me=e)}}else{if(Zs(e))throw Error(E(418));e.flags=e.flags&-4097|2,q=!1,Me=e}}}function el(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Me=e}function Ar(e){if(e!==Me)return!1;if(!q)return el(e),q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ys(e.type,e.memoizedProps)),t&&(t=Pe)){if(Zs(e))throw tu(),Error(E(418));for(;t;)eu(e,t),t=Tt(t.nextSibling)}if(el(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Pe=Tt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Pe=null}}else Pe=Me?Tt(e.stateNode.nextSibling):null;return!0}function tu(){for(var e=Pe;e;)e=Tt(e.nextSibling)}function Cn(){Pe=Me=null,q=!1}function Uo(e){Xe===null?Xe=[e]:Xe.push(e)}var lp=mt.ReactCurrentBatchConfig;function An(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var a=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(i){var l=a.refs;i===null?delete l[s]:l[s]=i},t._stringRef=s,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function Wr(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function tl(e){var t=e._init;return t(e._payload)}function nu(e){function t(f,d){if(e){var g=f.deletions;g===null?(f.deletions=[d],f.flags|=16):g.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function a(f,d){return f=_t(f,d),f.index=0,f.sibling=null,f}function s(f,d,g){return f.index=g,e?(g=f.alternate,g!==null?(g=g.index,g<d?(f.flags|=2,d):g):(f.flags|=2,d)):(f.flags|=1048576,d)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,d,g,x){return d===null||d.tag!==6?(d=xs(g,f.mode,x),d.return=f,d):(d=a(d,g),d.return=f,d)}function c(f,d,g,x){var N=g.type;return N===sn?p(f,d,g.props.children,x,g.key):d!==null&&(d.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===xt&&tl(N)===d.type)?(x=a(d,g.props),x.ref=An(f,d,g),x.return=f,x):(x=oa(g.type,g.key,g.props,null,f.mode,x),x.ref=An(f,d,g),x.return=f,x)}function u(f,d,g,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=ws(g,f.mode,x),d.return=f,d):(d=a(d,g.children||[]),d.return=f,d)}function p(f,d,g,x,N){return d===null||d.tag!==7?(d=Vt(g,f.mode,x,N),d.return=f,d):(d=a(d,g),d.return=f,d)}function h(f,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=xs(""+d,f.mode,g),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Pr:return g=oa(d.type,d.key,d.props,null,f.mode,g),g.ref=An(f,null,d),g.return=f,g;case an:return d=ws(d,f.mode,g),d.return=f,d;case xt:var x=d._init;return h(f,x(d._payload),g)}if(Hn(d)||Fn(d))return d=Vt(d,f.mode,g,null),d.return=f,d;Wr(f,d)}return null}function m(f,d,g,x){var N=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return N!==null?null:l(f,d,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Pr:return g.key===N?c(f,d,g,x):null;case an:return g.key===N?u(f,d,g,x):null;case xt:return N=g._init,m(f,d,N(g._payload),x)}if(Hn(g)||Fn(g))return N!==null?null:p(f,d,g,x,null);Wr(f,g)}return null}function w(f,d,g,x,N){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(g)||null,l(d,f,""+x,N);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Pr:return f=f.get(x.key===null?g:x.key)||null,c(d,f,x,N);case an:return f=f.get(x.key===null?g:x.key)||null,u(d,f,x,N);case xt:var k=x._init;return w(f,d,g,k(x._payload),N)}if(Hn(x)||Fn(x))return f=f.get(g)||null,p(d,f,x,N,null);Wr(d,x)}return null}function y(f,d,g,x){for(var N=null,k=null,b=d,C=d=0,L=null;b!==null&&C<g.length;C++){b.index>C?(L=b,b=null):L=b.sibling;var P=m(f,b,g[C],x);if(P===null){b===null&&(b=L);break}e&&b&&P.alternate===null&&t(f,b),d=s(P,d,C),k===null?N=P:k.sibling=P,k=P,b=L}if(C===g.length)return n(f,b),q&&At(f,C),N;if(b===null){for(;C<g.length;C++)b=h(f,g[C],x),b!==null&&(d=s(b,d,C),k===null?N=b:k.sibling=b,k=b);return q&&At(f,C),N}for(b=r(f,b);C<g.length;C++)L=w(b,f,C,g[C],x),L!==null&&(e&&L.alternate!==null&&b.delete(L.key===null?C:L.key),d=s(L,d,C),k===null?N=L:k.sibling=L,k=L);return e&&b.forEach(function(W){return t(f,W)}),q&&At(f,C),N}function v(f,d,g,x){var N=Fn(g);if(typeof N!="function")throw Error(E(150));if(g=N.call(g),g==null)throw Error(E(151));for(var k=N=null,b=d,C=d=0,L=null,P=g.next();b!==null&&!P.done;C++,P=g.next()){b.index>C?(L=b,b=null):L=b.sibling;var W=m(f,b,P.value,x);if(W===null){b===null&&(b=L);break}e&&b&&W.alternate===null&&t(f,b),d=s(W,d,C),k===null?N=W:k.sibling=W,k=W,b=L}if(P.done)return n(f,b),q&&At(f,C),N;if(b===null){for(;!P.done;C++,P=g.next())P=h(f,P.value,x),P!==null&&(d=s(P,d,C),k===null?N=P:k.sibling=P,k=P);return q&&At(f,C),N}for(b=r(f,b);!P.done;C++,P=g.next())P=w(b,f,C,P.value,x),P!==null&&(e&&P.alternate!==null&&b.delete(P.key===null?C:P.key),d=s(P,d,C),k===null?N=P:k.sibling=P,k=P);return e&&b.forEach(function(D){return t(f,D)}),q&&At(f,C),N}function j(f,d,g,x){if(typeof g=="object"&&g!==null&&g.type===sn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Pr:e:{for(var N=g.key,k=d;k!==null;){if(k.key===N){if(N=g.type,N===sn){if(k.tag===7){n(f,k.sibling),d=a(k,g.props.children),d.return=f,f=d;break e}}else if(k.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===xt&&tl(N)===k.type){n(f,k.sibling),d=a(k,g.props),d.ref=An(f,k,g),d.return=f,f=d;break e}n(f,k);break}else t(f,k);k=k.sibling}g.type===sn?(d=Vt(g.props.children,f.mode,x,g.key),d.return=f,f=d):(x=oa(g.type,g.key,g.props,null,f.mode,x),x.ref=An(f,d,g),x.return=f,f=x)}return i(f);case an:e:{for(k=g.key;d!==null;){if(d.key===k)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){n(f,d.sibling),d=a(d,g.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=ws(g,f.mode,x),d.return=f,f=d}return i(f);case xt:return k=g._init,j(f,d,k(g._payload),x)}if(Hn(g))return y(f,d,g,x);if(Fn(g))return v(f,d,g,x);Wr(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(n(f,d.sibling),d=a(d,g),d.return=f,f=d):(n(f,d),d=xs(g,f.mode,x),d.return=f,f=d),i(f)):n(f,d)}return j}var En=nu(!0),ru=nu(!1),wa=Dt(null),ka=null,mn=null,Ho=null;function Go(){Ho=mn=ka=null}function Vo(e){var t=wa.current;X(wa),e._currentValue=t}function eo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function kn(e,t){ka=e,Ho=mn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ne=!0),e.firstContext=null)}function We(e){var t=e._currentValue;if(Ho!==e)if(e={context:e,memoizedValue:t,next:null},mn===null){if(ka===null)throw Error(E(308));mn=e,ka.dependencies={lanes:0,firstContext:e}}else mn=mn.next=e;return t}var Ut=null;function Xo(e){Ut===null?Ut=[e]:Ut.push(e)}function au(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,Xo(t)):(n.next=a.next,a.next=n),t.interleaved=n,ft(e,r)}function ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var wt=!1;function Yo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function su(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ct(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function zt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,A&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,ft(e,n)}return a=r.interleaved,a===null?(t.next=t,Xo(r)):(t.next=a.next,a.next=t),r.interleaved=t,ft(e,n)}function ea(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Lo(e,n)}}function nl(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?a=s=i:s=s.next=i,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Sa(e,t,n,r){var a=e.updateQueue;wt=!1;var s=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var c=l,u=c.next;c.next=null,i===null?s=u:i.next=u,i=c;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==i&&(l===null?p.firstBaseUpdate=u:l.next=u,p.lastBaseUpdate=c))}if(s!==null){var h=a.baseState;i=0,p=u=c=null,l=s;do{var m=l.lane,w=l.eventTime;if((r&m)===m){p!==null&&(p=p.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,v=l;switch(m=t,w=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(w,h,m);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,m=typeof y=="function"?y.call(w,h,m):y,m==null)break e;h=ee({},h,m);break e;case 2:wt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=a.effects,m===null?a.effects=[l]:m.push(l))}else w={eventTime:w,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(u=p=w,c=h):p=p.next=w,i|=m;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;m=l,l=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(!0);if(p===null&&(c=h),a.baseState=c,a.firstBaseUpdate=u,a.lastBaseUpdate=p,t=a.shared.interleaved,t!==null){a=t;do i|=a.lane,a=a.next;while(a!==t)}else s===null&&(a.shared.lanes=0);Kt|=i,e.lanes=i,e.memoizedState=h}}function rl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(E(191,a));a.call(r)}}}var Er={},nt=Dt(Er),hr=Dt(Er),gr=Dt(Er);function Ht(e){if(e===Er)throw Error(E(174));return e}function Qo(e,t){switch(H(gr,t),H(hr,e),H(nt,Er),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Is(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Is(t,e)}X(nt),H(nt,t)}function Tn(){X(nt),X(hr),X(gr)}function ou(e){Ht(gr.current);var t=Ht(nt.current),n=Is(t,e.type);t!==n&&(H(hr,e),H(nt,n))}function Ko(e){hr.current===e&&(X(nt),X(hr))}var Z=Dt(0);function ba(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ps=[];function qo(){for(var e=0;e<ps.length;e++)ps[e]._workInProgressVersionPrimary=null;ps.length=0}var ta=mt.ReactCurrentDispatcher,ms=mt.ReactCurrentBatchConfig,Qt=0,J=null,ae=null,ie=null,ja=!1,Jn=!1,yr=0,cp=0;function me(){throw Error(E(321))}function Zo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ke(e[n],t[n]))return!1;return!0}function Jo(e,t,n,r,a,s){if(Qt=s,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ta.current=e===null||e.memoizedState===null?pp:mp,e=n(r,a),Jn){s=0;do{if(Jn=!1,yr=0,25<=s)throw Error(E(301));s+=1,ie=ae=null,t.updateQueue=null,ta.current=hp,e=n(r,a)}while(Jn)}if(ta.current=Na,t=ae!==null&&ae.next!==null,Qt=0,ie=ae=J=null,ja=!1,t)throw Error(E(300));return e}function ei(){var e=yr!==0;return yr=0,e}function Ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?J.memoizedState=ie=e:ie=ie.next=e,ie}function Be(){if(ae===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=ie===null?J.memoizedState:ie.next;if(t!==null)ie=t,ae=e;else{if(e===null)throw Error(E(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},ie===null?J.memoizedState=ie=e:ie=ie.next=e}return ie}function vr(e,t){return typeof t=="function"?t(e):t}function hs(e){var t=Be(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=ae,a=r.baseQueue,s=n.pending;if(s!==null){if(a!==null){var i=a.next;a.next=s.next,s.next=i}r.baseQueue=a=s,n.pending=null}if(a!==null){s=a.next,r=r.baseState;var l=i=null,c=null,u=s;do{var p=u.lane;if((Qt&p)===p)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=h,i=r):c=c.next=h,J.lanes|=p,Kt|=p}u=u.next}while(u!==null&&u!==s);c===null?i=r:c.next=l,Ke(r,t.memoizedState)||(Ne=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do s=a.lane,J.lanes|=s,Kt|=s,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function gs(e){var t=Be(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var i=a=a.next;do s=e(s,i.action),i=i.next;while(i!==a);Ke(s,t.memoizedState)||(Ne=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function iu(){}function lu(e,t){var n=J,r=Be(),a=t(),s=!Ke(r.memoizedState,a);if(s&&(r.memoizedState=a,Ne=!0),r=r.queue,ti(du.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,xr(9,uu.bind(null,n,r,a,t),void 0,null),le===null)throw Error(E(349));Qt&30||cu(n,t,a)}return a}function cu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function uu(e,t,n,r){t.value=n,t.getSnapshot=r,fu(t)&&pu(e)}function du(e,t,n){return n(function(){fu(t)&&pu(e)})}function fu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ke(e,n)}catch{return!0}}function pu(e){var t=ft(e,1);t!==null&&Qe(t,e,1,-1)}function al(e){var t=Ze();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vr,lastRenderedState:e},t.queue=e,e=e.dispatch=fp.bind(null,J,e),[t.memoizedState,e]}function xr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function mu(){return Be().memoizedState}function na(e,t,n,r){var a=Ze();J.flags|=e,a.memoizedState=xr(1|t,n,void 0,r===void 0?null:r)}function Oa(e,t,n,r){var a=Be();r=r===void 0?null:r;var s=void 0;if(ae!==null){var i=ae.memoizedState;if(s=i.destroy,r!==null&&Zo(r,i.deps)){a.memoizedState=xr(t,n,s,r);return}}J.flags|=e,a.memoizedState=xr(1|t,n,s,r)}function sl(e,t){return na(8390656,8,e,t)}function ti(e,t){return Oa(2048,8,e,t)}function hu(e,t){return Oa(4,2,e,t)}function gu(e,t){return Oa(4,4,e,t)}function yu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vu(e,t,n){return n=n!=null?n.concat([e]):null,Oa(4,4,yu.bind(null,t,e),n)}function ni(){}function xu(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function wu(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ku(e,t,n){return Qt&21?(Ke(n,t)||(n=Cc(),J.lanes|=n,Kt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ne=!0),e.memoizedState=n)}function up(e,t){var n=B;B=n!==0&&4>n?n:4,e(!0);var r=ms.transition;ms.transition={};try{e(!1),t()}finally{B=n,ms.transition=r}}function Su(){return Be().memoizedState}function dp(e,t,n){var r=Mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},bu(e))ju(t,n);else if(n=au(e,t,n,r),n!==null){var a=we();Qe(n,e,r,a),Nu(n,t,r)}}function fp(e,t,n){var r=Mt(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(bu(e))ju(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var i=t.lastRenderedState,l=s(i,n);if(a.hasEagerState=!0,a.eagerState=l,Ke(l,i)){var c=t.interleaved;c===null?(a.next=a,Xo(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}n=au(e,t,a,r),n!==null&&(a=we(),Qe(n,e,r,a),Nu(n,t,r))}}function bu(e){var t=e.alternate;return e===J||t!==null&&t===J}function ju(e,t){Jn=ja=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Nu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Lo(e,n)}}var Na={readContext:We,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},pp={readContext:We,useCallback:function(e,t){return Ze().memoizedState=[e,t===void 0?null:t],e},useContext:We,useEffect:sl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,na(4194308,4,yu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return na(4194308,4,e,t)},useInsertionEffect:function(e,t){return na(4,2,e,t)},useMemo:function(e,t){var n=Ze();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ze();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=dp.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=Ze();return e={current:e},t.memoizedState=e},useState:al,useDebugValue:ni,useDeferredValue:function(e){return Ze().memoizedState=e},useTransition:function(){var e=al(!1),t=e[0];return e=up.bind(null,e[1]),Ze().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=J,a=Ze();if(q){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),le===null)throw Error(E(349));Qt&30||cu(r,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,sl(du.bind(null,r,s,e),[e]),r.flags|=2048,xr(9,uu.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Ze(),t=le.identifierPrefix;if(q){var n=ot,r=st;n=(r&~(1<<32-Ye(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=yr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=cp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},mp={readContext:We,useCallback:xu,useContext:We,useEffect:ti,useImperativeHandle:vu,useInsertionEffect:hu,useLayoutEffect:gu,useMemo:wu,useReducer:hs,useRef:mu,useState:function(){return hs(vr)},useDebugValue:ni,useDeferredValue:function(e){var t=Be();return ku(t,ae.memoizedState,e)},useTransition:function(){var e=hs(vr)[0],t=Be().memoizedState;return[e,t]},useMutableSource:iu,useSyncExternalStore:lu,useId:Su,unstable_isNewReconciler:!1},hp={readContext:We,useCallback:xu,useContext:We,useEffect:ti,useImperativeHandle:vu,useInsertionEffect:hu,useLayoutEffect:gu,useMemo:wu,useReducer:gs,useRef:mu,useState:function(){return gs(vr)},useDebugValue:ni,useDeferredValue:function(e){var t=Be();return ae===null?t.memoizedState=e:ku(t,ae.memoizedState,e)},useTransition:function(){var e=gs(vr)[0],t=Be().memoizedState;return[e,t]},useMutableSource:iu,useSyncExternalStore:lu,useId:Su,unstable_isNewReconciler:!1};function Ge(e,t){if(e&&e.defaultProps){t=ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function to(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var $a={isMounted:function(e){return(e=e._reactInternals)?Jt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=we(),a=Mt(e),s=ct(r,a);s.payload=t,n!=null&&(s.callback=n),t=zt(e,s,a),t!==null&&(Qe(t,e,a,r),ea(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=we(),a=Mt(e),s=ct(r,a);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=zt(e,s,a),t!==null&&(Qe(t,e,a,r),ea(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=we(),r=Mt(e),a=ct(n,r);a.tag=2,t!=null&&(a.callback=t),t=zt(e,a,r),t!==null&&(Qe(t,e,r,n),ea(t,e,r))}};function ol(e,t,n,r,a,s,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,i):t.prototype&&t.prototype.isPureReactComponent?!dr(n,r)||!dr(a,s):!0}function Cu(e,t,n){var r=!1,a=It,s=t.contextType;return typeof s=="object"&&s!==null?s=We(s):(a=Ee(t)?Xt:ye.current,r=t.contextTypes,s=(r=r!=null)?Nn(e,a):It),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=$a,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=s),t}function il(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&$a.enqueueReplaceState(t,t.state,null)}function no(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Yo(e);var s=t.contextType;typeof s=="object"&&s!==null?a.context=We(s):(s=Ee(t)?Xt:ye.current,a.context=Nn(e,s)),a.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(to(e,t,s,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&$a.enqueueReplaceState(a,a.state,null),Sa(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function zn(e,t){try{var n="",r=t;do n+=Bd(r),r=r.return;while(r);var a=n}catch(s){a=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:a,digest:null}}function ys(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ro(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var gp=typeof WeakMap=="function"?WeakMap:Map;function Eu(e,t,n){n=ct(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ea||(Ea=!0,mo=r),ro(e,t)},n}function Tu(e,t,n){n=ct(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){ro(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ro(e,t),typeof r!="function"&&(Pt===null?Pt=new Set([this]):Pt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function ll(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new gp;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Pp.bind(null,e,t,n),t.then(e,e))}function cl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ul(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ct(-1,1),t.tag=2,zt(n,t,1))),n.lanes|=1),e)}var yp=mt.ReactCurrentOwner,Ne=!1;function ve(e,t,n,r){t.child=e===null?ru(t,null,n,r):En(t,e.child,n,r)}function dl(e,t,n,r,a){n=n.render;var s=t.ref;return kn(t,a),r=Jo(e,t,n,r,s,a),n=ei(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,pt(e,t,a)):(q&&n&&Wo(t),t.flags|=1,ve(e,t,r,a),t.child)}function fl(e,t,n,r,a){if(e===null){var s=n.type;return typeof s=="function"&&!ui(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,zu(e,t,s,r,a)):(e=oa(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&a)){var i=s.memoizedProps;if(n=n.compare,n=n!==null?n:dr,n(i,r)&&e.ref===t.ref)return pt(e,t,a)}return t.flags|=1,e=_t(s,r),e.ref=t.ref,e.return=t,t.child=e}function zu(e,t,n,r,a){if(e!==null){var s=e.memoizedProps;if(dr(s,r)&&e.ref===t.ref)if(Ne=!1,t.pendingProps=r=s,(e.lanes&a)!==0)e.flags&131072&&(Ne=!0);else return t.lanes=e.lanes,pt(e,t,a)}return ao(e,t,n,r,a)}function Pu(e,t,n){var r=t.pendingProps,a=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(gn,ze),ze|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(gn,ze),ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,H(gn,ze),ze|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,H(gn,ze),ze|=r;return ve(e,t,a,n),t.child}function Mu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ao(e,t,n,r,a){var s=Ee(n)?Xt:ye.current;return s=Nn(t,s),kn(t,a),n=Jo(e,t,n,r,s,a),r=ei(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,pt(e,t,a)):(q&&r&&Wo(t),t.flags|=1,ve(e,t,n,a),t.child)}function pl(e,t,n,r,a){if(Ee(n)){var s=!0;ya(t)}else s=!1;if(kn(t,a),t.stateNode===null)ra(e,t),Cu(t,n,r),no(t,n,r,a),r=!0;else if(e===null){var i=t.stateNode,l=t.memoizedProps;i.props=l;var c=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=We(u):(u=Ee(n)?Xt:ye.current,u=Nn(t,u));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function";h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==r||c!==u)&&il(t,i,r,u),wt=!1;var m=t.memoizedState;i.state=m,Sa(t,r,i,a),c=t.memoizedState,l!==r||m!==c||Ce.current||wt?(typeof p=="function"&&(to(t,n,p,r),c=t.memoizedState),(l=wt||ol(t,n,l,r,m,c,u))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),i.props=r,i.state=c,i.context=u,r=l):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,su(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Ge(t.type,l),i.props=u,h=t.pendingProps,m=i.context,c=n.contextType,typeof c=="object"&&c!==null?c=We(c):(c=Ee(n)?Xt:ye.current,c=Nn(t,c));var w=n.getDerivedStateFromProps;(p=typeof w=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==h||m!==c)&&il(t,i,r,c),wt=!1,m=t.memoizedState,i.state=m,Sa(t,r,i,a);var y=t.memoizedState;l!==h||m!==y||Ce.current||wt?(typeof w=="function"&&(to(t,n,w,r),y=t.memoizedState),(u=wt||ol(t,n,u,r,m,y,c)||!1)?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,y,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,y,c)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),i.props=r,i.state=y,i.context=c,r=u):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return so(e,t,n,r,s,a)}function so(e,t,n,r,a,s){Mu(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return a&&Zi(t,n,!1),pt(e,t,s);r=t.stateNode,yp.current=t;var l=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=En(t,e.child,null,s),t.child=En(t,null,l,s)):ve(e,t,l,s),t.memoizedState=r.state,a&&Zi(t,n,!0),t.child}function _u(e){var t=e.stateNode;t.pendingContext?qi(e,t.pendingContext,t.pendingContext!==t.context):t.context&&qi(e,t.context,!1),Qo(e,t.containerInfo)}function ml(e,t,n,r,a){return Cn(),Uo(a),t.flags|=256,ve(e,t,n,r),t.child}var oo={dehydrated:null,treeContext:null,retryLane:0};function io(e){return{baseLanes:e,cachePool:null,transitions:null}}function Lu(e,t,n){var r=t.pendingProps,a=Z.current,s=!1,i=(t.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),H(Z,a&1),e===null)return Js(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,s?(r=t.mode,s=t.child,i={mode:"hidden",children:i},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=i):s=Ba(i,r,0,null),e=Vt(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=io(n),t.memoizedState=oo,e):ri(t,i));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return vp(e,t,i,r,l,a,n);if(s){s=r.fallback,i=t.mode,a=e.child,l=a.sibling;var c={mode:"hidden",children:r.children};return!(i&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=_t(a,c),r.subtreeFlags=a.subtreeFlags&14680064),l!==null?s=_t(l,s):(s=Vt(s,i,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,i=e.child.memoizedState,i=i===null?io(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},s.memoizedState=i,s.childLanes=e.childLanes&~n,t.memoizedState=oo,r}return s=e.child,e=s.sibling,r=_t(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ri(e,t){return t=Ba({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Br(e,t,n,r){return r!==null&&Uo(r),En(t,e.child,null,n),e=ri(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vp(e,t,n,r,a,s,i){if(n)return t.flags&256?(t.flags&=-257,r=ys(Error(E(422))),Br(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,a=t.mode,r=Ba({mode:"visible",children:r.children},a,0,null),s=Vt(s,a,i,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&En(t,e.child,null,i),t.child.memoizedState=io(i),t.memoizedState=oo,s);if(!(t.mode&1))return Br(e,t,i,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(E(419)),r=ys(s,r,void 0),Br(e,t,i,r)}if(l=(i&e.childLanes)!==0,Ne||l){if(r=le,r!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|i)?0:a,a!==0&&a!==s.retryLane&&(s.retryLane=a,ft(e,a),Qe(r,e,a,-1))}return ci(),r=ys(Error(E(421))),Br(e,t,i,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Mp.bind(null,e),a._reactRetry=t,null):(e=s.treeContext,Pe=Tt(a.nextSibling),Me=t,q=!0,Xe=null,e!==null&&(Fe[De++]=st,Fe[De++]=ot,Fe[De++]=Yt,st=e.id,ot=e.overflow,Yt=t),t=ri(t,r.children),t.flags|=4096,t)}function hl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),eo(e.return,t,n)}function vs(e,t,n,r,a){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=a)}function Iu(e,t,n){var r=t.pendingProps,a=r.revealOrder,s=r.tail;if(ve(e,t,r.children,n),r=Z.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hl(e,n,t);else if(e.tag===19)hl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(Z,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&ba(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),vs(t,!1,a,n,s);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&ba(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}vs(t,!0,n,null,s);break;case"together":vs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ra(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function pt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=_t(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_t(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function xp(e,t,n){switch(t.tag){case 3:_u(t),Cn();break;case 5:ou(t);break;case 1:Ee(t.type)&&ya(t);break;case 4:Qo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;H(wa,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(H(Z,Z.current&1),t.flags|=128,null):n&t.child.childLanes?Lu(e,t,n):(H(Z,Z.current&1),e=pt(e,t,n),e!==null?e.sibling:null);H(Z,Z.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Iu(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),H(Z,Z.current),r)break;return null;case 22:case 23:return t.lanes=0,Pu(e,t,n)}return pt(e,t,n)}var Fu,lo,Du,Ru;Fu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};lo=function(){};Du=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Ht(nt.current);var s=null;switch(n){case"input":a=Ps(e,a),r=Ps(e,r),s=[];break;case"select":a=ee({},a,{value:void 0}),r=ee({},r,{value:void 0}),s=[];break;case"textarea":a=Ls(e,a),r=Ls(e,r),s=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ha)}Fs(n,r);var i;n=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var l=a[u];for(i in l)l.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ar.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(l=a!=null?a[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(i in l)!l.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in c)c.hasOwnProperty(i)&&l[i]!==c[i]&&(n||(n={}),n[i]=c[i])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ar.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&V("scroll",e),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Ru=function(e,t,n,r){n!==r&&(t.flags|=4)};function Wn(e,t){if(!q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function wp(e,t,n){var r=t.pendingProps;switch(Bo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return Ee(t.type)&&ga(),he(t),null;case 3:return r=t.stateNode,Tn(),X(Ce),X(ye),qo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ar(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xe!==null&&(yo(Xe),Xe=null))),lo(e,t),he(t),null;case 5:Ko(t);var a=Ht(gr.current);if(n=t.type,e!==null&&t.stateNode!=null)Du(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return he(t),null}if(e=Ht(nt.current),Ar(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[et]=t,r[mr]=s,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(a=0;a<Vn.length;a++)V(Vn[a],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":ji(r,s),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},V("invalid",r);break;case"textarea":Ci(r,s),V("invalid",r)}Fs(n,s),a=null;for(var i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&$r(r.textContent,l,e),a=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&$r(r.textContent,l,e),a=["children",""+l]):ar.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&V("scroll",r)}switch(n){case"input":Mr(r),Ni(r,s,!0);break;case"textarea":Mr(r),Ei(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ha)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=dc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[et]=t,e[mr]=r,Fu(e,t,!1,!1),t.stateNode=e;e:{switch(i=Ds(n,r),n){case"dialog":V("cancel",e),V("close",e),a=r;break;case"iframe":case"object":case"embed":V("load",e),a=r;break;case"video":case"audio":for(a=0;a<Vn.length;a++)V(Vn[a],e);a=r;break;case"source":V("error",e),a=r;break;case"img":case"image":case"link":V("error",e),V("load",e),a=r;break;case"details":V("toggle",e),a=r;break;case"input":ji(e,r),a=Ps(e,r),V("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=ee({},r,{value:void 0}),V("invalid",e);break;case"textarea":Ci(e,r),a=Ls(e,r),V("invalid",e);break;default:a=r}Fs(n,a),l=a;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?mc(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&fc(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&sr(e,c):typeof c=="number"&&sr(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ar.hasOwnProperty(s)?c!=null&&s==="onScroll"&&V("scroll",e):c!=null&&Eo(e,s,c,i))}switch(n){case"input":Mr(e),Ni(e,r,!1);break;case"textarea":Mr(e),Ei(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Lt(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?yn(e,!!r.multiple,s,!1):r.defaultValue!=null&&yn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=ha)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return he(t),null;case 6:if(e&&t.stateNode!=null)Ru(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=Ht(gr.current),Ht(nt.current),Ar(t)){if(r=t.stateNode,n=t.memoizedProps,r[et]=t,(s=r.nodeValue!==n)&&(e=Me,e!==null))switch(e.tag){case 3:$r(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&$r(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[et]=t,t.stateNode=r}return he(t),null;case 13:if(X(Z),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&Pe!==null&&t.mode&1&&!(t.flags&128))tu(),Cn(),t.flags|=98560,s=!1;else if(s=Ar(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(E(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[et]=t}else Cn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;he(t),s=!1}else Xe!==null&&(yo(Xe),Xe=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Z.current&1?se===0&&(se=3):ci())),t.updateQueue!==null&&(t.flags|=4),he(t),null);case 4:return Tn(),lo(e,t),e===null&&fr(t.stateNode.containerInfo),he(t),null;case 10:return Vo(t.type._context),he(t),null;case 17:return Ee(t.type)&&ga(),he(t),null;case 19:if(X(Z),s=t.memoizedState,s===null)return he(t),null;if(r=(t.flags&128)!==0,i=s.rendering,i===null)if(r)Wn(s,!1);else{if(se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=ba(e),i!==null){for(t.flags|=128,Wn(s,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,i=s.alternate,i===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=i.childLanes,s.lanes=i.lanes,s.child=i.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=i.memoizedProps,s.memoizedState=i.memoizedState,s.updateQueue=i.updateQueue,s.type=i.type,e=i.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(Z,Z.current&1|2),t.child}e=e.sibling}s.tail!==null&&ne()>Pn&&(t.flags|=128,r=!0,Wn(s,!1),t.lanes=4194304)}else{if(!r)if(e=ba(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Wn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!i.alternate&&!q)return he(t),null}else 2*ne()-s.renderingStartTime>Pn&&n!==1073741824&&(t.flags|=128,r=!0,Wn(s,!1),t.lanes=4194304);s.isBackwards?(i.sibling=t.child,t.child=i):(n=s.last,n!==null?n.sibling=i:t.child=i,s.last=i)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ne(),t.sibling=null,n=Z.current,H(Z,r?n&1|2:n&1),t):(he(t),null);case 22:case 23:return li(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ze&1073741824&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function kp(e,t){switch(Bo(t),t.tag){case 1:return Ee(t.type)&&ga(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Tn(),X(Ce),X(ye),qo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ko(t),null;case 13:if(X(Z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Cn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(Z),null;case 4:return Tn(),null;case 10:return Vo(t.type._context),null;case 22:case 23:return li(),null;case 24:return null;default:return null}}var Ur=!1,ge=!1,Sp=typeof WeakSet=="function"?WeakSet:Set,M=null;function hn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(e,t,r)}else n.current=null}function co(e,t,n){try{n()}catch(r){te(e,t,r)}}var gl=!1;function bp(e,t){if(Vs=fa,e=Bc(),Ao(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var i=0,l=-1,c=-1,u=0,p=0,h=e,m=null;t:for(;;){for(var w;h!==n||a!==0&&h.nodeType!==3||(l=i+a),h!==s||r!==0&&h.nodeType!==3||(c=i+r),h.nodeType===3&&(i+=h.nodeValue.length),(w=h.firstChild)!==null;)m=h,h=w;for(;;){if(h===e)break t;if(m===n&&++u===a&&(l=i),m===s&&++p===r&&(c=i),(w=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=w}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xs={focusedElem:e,selectionRange:n},fa=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,j=y.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:Ge(t.type,v),j);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(x){te(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return y=gl,gl=!1,y}function er(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var s=a.destroy;a.destroy=void 0,s!==void 0&&co(t,n,s)}a=a.next}while(a!==r)}}function Aa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function uo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ou(e){var t=e.alternate;t!==null&&(e.alternate=null,Ou(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[et],delete t[mr],delete t[Ks],delete t[sp],delete t[op])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $u(e){return e.tag===5||e.tag===3||e.tag===4}function yl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$u(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ha));else if(r!==4&&(e=e.child,e!==null))for(fo(e,t,n),e=e.sibling;e!==null;)fo(e,t,n),e=e.sibling}function po(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(po(e,t,n),e=e.sibling;e!==null;)po(e,t,n),e=e.sibling}var ue=null,Ve=!1;function yt(e,t,n){for(n=n.child;n!==null;)Au(e,t,n),n=n.sibling}function Au(e,t,n){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(_a,n)}catch{}switch(n.tag){case 5:ge||hn(n,t);case 6:var r=ue,a=Ve;ue=null,yt(e,t,n),ue=r,Ve=a,ue!==null&&(Ve?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Ve?(e=ue,n=n.stateNode,e.nodeType===8?ds(e.parentNode,n):e.nodeType===1&&ds(e,n),cr(e)):ds(ue,n.stateNode));break;case 4:r=ue,a=Ve,ue=n.stateNode.containerInfo,Ve=!0,yt(e,t,n),ue=r,Ve=a;break;case 0:case 11:case 14:case 15:if(!ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var s=a,i=s.destroy;s=s.tag,i!==void 0&&(s&2||s&4)&&co(n,t,i),a=a.next}while(a!==r)}yt(e,t,n);break;case 1:if(!ge&&(hn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){te(n,t,l)}yt(e,t,n);break;case 21:yt(e,t,n);break;case 22:n.mode&1?(ge=(r=ge)||n.memoizedState!==null,yt(e,t,n),ge=r):yt(e,t,n);break;default:yt(e,t,n)}}function vl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Sp),t.forEach(function(r){var a=_p.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function He(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var s=e,i=t,l=i;e:for(;l!==null;){switch(l.tag){case 5:ue=l.stateNode,Ve=!1;break e;case 3:ue=l.stateNode.containerInfo,Ve=!0;break e;case 4:ue=l.stateNode.containerInfo,Ve=!0;break e}l=l.return}if(ue===null)throw Error(E(160));Au(s,i,a),ue=null,Ve=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(u){te(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wu(t,e),t=t.sibling}function Wu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(He(t,e),qe(e),r&4){try{er(3,e,e.return),Aa(3,e)}catch(v){te(e,e.return,v)}try{er(5,e,e.return)}catch(v){te(e,e.return,v)}}break;case 1:He(t,e),qe(e),r&512&&n!==null&&hn(n,n.return);break;case 5:if(He(t,e),qe(e),r&512&&n!==null&&hn(n,n.return),e.flags&32){var a=e.stateNode;try{sr(a,"")}catch(v){te(e,e.return,v)}}if(r&4&&(a=e.stateNode,a!=null)){var s=e.memoizedProps,i=n!==null?n.memoizedProps:s,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&cc(a,s),Ds(l,i);var u=Ds(l,s);for(i=0;i<c.length;i+=2){var p=c[i],h=c[i+1];p==="style"?mc(a,h):p==="dangerouslySetInnerHTML"?fc(a,h):p==="children"?sr(a,h):Eo(a,p,h,u)}switch(l){case"input":Ms(a,s);break;case"textarea":uc(a,s);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?yn(a,!!s.multiple,w,!1):m!==!!s.multiple&&(s.defaultValue!=null?yn(a,!!s.multiple,s.defaultValue,!0):yn(a,!!s.multiple,s.multiple?[]:"",!1))}a[mr]=s}catch(v){te(e,e.return,v)}}break;case 6:if(He(t,e),qe(e),r&4){if(e.stateNode===null)throw Error(E(162));a=e.stateNode,s=e.memoizedProps;try{a.nodeValue=s}catch(v){te(e,e.return,v)}}break;case 3:if(He(t,e),qe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{cr(t.containerInfo)}catch(v){te(e,e.return,v)}break;case 4:He(t,e),qe(e);break;case 13:He(t,e),qe(e),a=e.child,a.flags&8192&&(s=a.memoizedState!==null,a.stateNode.isHidden=s,!s||a.alternate!==null&&a.alternate.memoizedState!==null||(oi=ne())),r&4&&vl(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(ge=(u=ge)||p,He(t,e),ge=u):He(t,e),qe(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(M=e,p=e.child;p!==null;){for(h=M=p;M!==null;){switch(m=M,w=m.child,m.tag){case 0:case 11:case 14:case 15:er(4,m,m.return);break;case 1:hn(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){te(r,n,v)}}break;case 5:hn(m,m.return);break;case 22:if(m.memoizedState!==null){wl(h);continue}}w!==null?(w.return=m,M=w):wl(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{a=h.stateNode,u?(s=a.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=h.stateNode,c=h.memoizedProps.style,i=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=pc("display",i))}catch(v){te(e,e.return,v)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){te(e,e.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:He(t,e),qe(e),r&4&&vl(e);break;case 21:break;default:He(t,e),qe(e)}}function qe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if($u(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(sr(a,""),r.flags&=-33);var s=yl(e);po(e,s,a);break;case 3:case 4:var i=r.stateNode.containerInfo,l=yl(e);fo(e,l,i);break;default:throw Error(E(161))}}catch(c){te(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function jp(e,t,n){M=e,Bu(e)}function Bu(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var a=M,s=a.child;if(a.tag===22&&r){var i=a.memoizedState!==null||Ur;if(!i){var l=a.alternate,c=l!==null&&l.memoizedState!==null||ge;l=Ur;var u=ge;if(Ur=i,(ge=c)&&!u)for(M=a;M!==null;)i=M,c=i.child,i.tag===22&&i.memoizedState!==null?kl(a):c!==null?(c.return=i,M=c):kl(a);for(;s!==null;)M=s,Bu(s),s=s.sibling;M=a,Ur=l,ge=u}xl(e)}else a.subtreeFlags&8772&&s!==null?(s.return=a,M=s):xl(e)}}function xl(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ge||Aa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ge)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Ge(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&rl(t,s,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}rl(t,i,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&cr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}ge||t.flags&512&&uo(t)}catch(m){te(t,t.return,m)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function wl(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function kl(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Aa(4,t)}catch(c){te(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(c){te(t,a,c)}}var s=t.return;try{uo(t)}catch(c){te(t,s,c)}break;case 5:var i=t.return;try{uo(t)}catch(c){te(t,i,c)}}}catch(c){te(t,t.return,c)}if(t===e){M=null;break}var l=t.sibling;if(l!==null){l.return=t.return,M=l;break}M=t.return}}var Np=Math.ceil,Ca=mt.ReactCurrentDispatcher,ai=mt.ReactCurrentOwner,$e=mt.ReactCurrentBatchConfig,A=0,le=null,re=null,de=0,ze=0,gn=Dt(0),se=0,wr=null,Kt=0,Wa=0,si=0,tr=null,be=null,oi=0,Pn=1/0,rt=null,Ea=!1,mo=null,Pt=null,Hr=!1,jt=null,Ta=0,nr=0,ho=null,aa=-1,sa=0;function we(){return A&6?ne():aa!==-1?aa:aa=ne()}function Mt(e){return e.mode&1?A&2&&de!==0?de&-de:lp.transition!==null?(sa===0&&(sa=Cc()),sa):(e=B,e!==0||(e=window.event,e=e===void 0?16:Lc(e.type)),e):1}function Qe(e,t,n,r){if(50<nr)throw nr=0,ho=null,Error(E(185));jr(e,n,r),(!(A&2)||e!==le)&&(e===le&&(!(A&2)&&(Wa|=n),se===4&&St(e,de)),Te(e,r),n===1&&A===0&&!(t.mode&1)&&(Pn=ne()+500,Ra&&Rt()))}function Te(e,t){var n=e.callbackNode;lf(e,t);var r=da(e,e===le?de:0);if(r===0)n!==null&&Pi(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Pi(n),t===1)e.tag===0?ip(Sl.bind(null,e)):Zc(Sl.bind(null,e)),rp(function(){!(A&6)&&Rt()}),n=null;else{switch(Ec(r)){case 1:n=_o;break;case 4:n=jc;break;case 16:n=ua;break;case 536870912:n=Nc;break;default:n=ua}n=Ku(n,Uu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Uu(e,t){if(aa=-1,sa=0,A&6)throw Error(E(327));var n=e.callbackNode;if(Sn()&&e.callbackNode!==n)return null;var r=da(e,e===le?de:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=za(e,r);else{t=r;var a=A;A|=2;var s=Gu();(le!==e||de!==t)&&(rt=null,Pn=ne()+500,Gt(e,t));do try{Tp();break}catch(l){Hu(e,l)}while(!0);Go(),Ca.current=s,A=a,re!==null?t=0:(le=null,de=0,t=se)}if(t!==0){if(t===2&&(a=Ws(e),a!==0&&(r=a,t=go(e,a))),t===1)throw n=wr,Gt(e,0),St(e,r),Te(e,ne()),n;if(t===6)St(e,r);else{if(a=e.current.alternate,!(r&30)&&!Cp(a)&&(t=za(e,r),t===2&&(s=Ws(e),s!==0&&(r=s,t=go(e,s))),t===1))throw n=wr,Gt(e,0),St(e,r),Te(e,ne()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:Wt(e,be,rt);break;case 3:if(St(e,r),(r&130023424)===r&&(t=oi+500-ne(),10<t)){if(da(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){we(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Qs(Wt.bind(null,e,be,rt),t);break}Wt(e,be,rt);break;case 4:if(St(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var i=31-Ye(r);s=1<<i,i=t[i],i>a&&(a=i),r&=~s}if(r=a,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Np(r/1960))-r,10<r){e.timeoutHandle=Qs(Wt.bind(null,e,be,rt),r);break}Wt(e,be,rt);break;case 5:Wt(e,be,rt);break;default:throw Error(E(329))}}}return Te(e,ne()),e.callbackNode===n?Uu.bind(null,e):null}function go(e,t){var n=tr;return e.current.memoizedState.isDehydrated&&(Gt(e,t).flags|=256),e=za(e,t),e!==2&&(t=be,be=n,t!==null&&yo(t)),e}function yo(e){be===null?be=e:be.push.apply(be,e)}function Cp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],s=a.getSnapshot;a=a.value;try{if(!Ke(s(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function St(e,t){for(t&=~si,t&=~Wa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ye(t),r=1<<n;e[n]=-1,t&=~r}}function Sl(e){if(A&6)throw Error(E(327));Sn();var t=da(e,0);if(!(t&1))return Te(e,ne()),null;var n=za(e,t);if(e.tag!==0&&n===2){var r=Ws(e);r!==0&&(t=r,n=go(e,r))}if(n===1)throw n=wr,Gt(e,0),St(e,t),Te(e,ne()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Wt(e,be,rt),Te(e,ne()),null}function ii(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&(Pn=ne()+500,Ra&&Rt())}}function qt(e){jt!==null&&jt.tag===0&&!(A&6)&&Sn();var t=A;A|=1;var n=$e.transition,r=B;try{if($e.transition=null,B=1,e)return e()}finally{B=r,$e.transition=n,A=t,!(A&6)&&Rt()}}function li(){ze=gn.current,X(gn)}function Gt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,np(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(Bo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ga();break;case 3:Tn(),X(Ce),X(ye),qo();break;case 5:Ko(r);break;case 4:Tn();break;case 13:X(Z);break;case 19:X(Z);break;case 10:Vo(r.type._context);break;case 22:case 23:li()}n=n.return}if(le=e,re=e=_t(e.current,null),de=ze=t,se=0,wr=null,si=Wa=Kt=0,be=tr=null,Ut!==null){for(t=0;t<Ut.length;t++)if(n=Ut[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,s=n.pending;if(s!==null){var i=s.next;s.next=a,r.next=i}n.pending=r}Ut=null}return e}function Hu(e,t){do{var n=re;try{if(Go(),ta.current=Na,ja){for(var r=J.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}ja=!1}if(Qt=0,ie=ae=J=null,Jn=!1,yr=0,ai.current=null,n===null||n.return===null){se=1,wr=t,re=null;break}e:{var s=e,i=n.return,l=n,c=t;if(t=de,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,p=l,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var w=cl(i);if(w!==null){w.flags&=-257,ul(w,i,l,s,t),w.mode&1&&ll(s,u,t),t=w,c=u;var y=t.updateQueue;if(y===null){var v=new Set;v.add(c),t.updateQueue=v}else y.add(c);break e}else{if(!(t&1)){ll(s,u,t),ci();break e}c=Error(E(426))}}else if(q&&l.mode&1){var j=cl(i);if(j!==null){!(j.flags&65536)&&(j.flags|=256),ul(j,i,l,s,t),Uo(zn(c,l));break e}}s=c=zn(c,l),se!==4&&(se=2),tr===null?tr=[s]:tr.push(s),s=i;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var f=Eu(s,c,t);nl(s,f);break e;case 1:l=c;var d=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Pt===null||!Pt.has(g)))){s.flags|=65536,t&=-t,s.lanes|=t;var x=Tu(s,l,t);nl(s,x);break e}}s=s.return}while(s!==null)}Xu(n)}catch(N){t=N,re===n&&n!==null&&(re=n=n.return);continue}break}while(!0)}function Gu(){var e=Ca.current;return Ca.current=Na,e===null?Na:e}function ci(){(se===0||se===3||se===2)&&(se=4),le===null||!(Kt&268435455)&&!(Wa&268435455)||St(le,de)}function za(e,t){var n=A;A|=2;var r=Gu();(le!==e||de!==t)&&(rt=null,Gt(e,t));do try{Ep();break}catch(a){Hu(e,a)}while(!0);if(Go(),A=n,Ca.current=r,re!==null)throw Error(E(261));return le=null,de=0,se}function Ep(){for(;re!==null;)Vu(re)}function Tp(){for(;re!==null&&!Zd();)Vu(re)}function Vu(e){var t=Qu(e.alternate,e,ze);e.memoizedProps=e.pendingProps,t===null?Xu(e):re=t,ai.current=null}function Xu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=kp(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,re=null;return}}else if(n=wp(n,t,ze),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);se===0&&(se=5)}function Wt(e,t,n){var r=B,a=$e.transition;try{$e.transition=null,B=1,zp(e,t,n,r)}finally{$e.transition=a,B=r}return null}function zp(e,t,n,r){do Sn();while(jt!==null);if(A&6)throw Error(E(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(cf(e,s),e===le&&(re=le=null,de=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Hr||(Hr=!0,Ku(ua,function(){return Sn(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=$e.transition,$e.transition=null;var i=B;B=1;var l=A;A|=4,ai.current=null,bp(e,n),Wu(n,e),Qf(Xs),fa=!!Vs,Xs=Vs=null,e.current=n,jp(n),Jd(),A=l,B=i,$e.transition=s}else e.current=n;if(Hr&&(Hr=!1,jt=e,Ta=a),s=e.pendingLanes,s===0&&(Pt=null),nf(n.stateNode),Te(e,ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Ea)throw Ea=!1,e=mo,mo=null,e;return Ta&1&&e.tag!==0&&Sn(),s=e.pendingLanes,s&1?e===ho?nr++:(nr=0,ho=e):nr=0,Rt(),null}function Sn(){if(jt!==null){var e=Ec(Ta),t=$e.transition,n=B;try{if($e.transition=null,B=16>e?16:e,jt===null)var r=!1;else{if(e=jt,jt=null,Ta=0,A&6)throw Error(E(331));var a=A;for(A|=4,M=e.current;M!==null;){var s=M,i=s.child;if(M.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(M=u;M!==null;){var p=M;switch(p.tag){case 0:case 11:case 15:er(8,p,s)}var h=p.child;if(h!==null)h.return=p,M=h;else for(;M!==null;){p=M;var m=p.sibling,w=p.return;if(Ou(p),p===u){M=null;break}if(m!==null){m.return=w,M=m;break}M=w}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var j=v.sibling;v.sibling=null,v=j}while(v!==null)}}M=s}}if(s.subtreeFlags&2064&&i!==null)i.return=s,M=i;else e:for(;M!==null;){if(s=M,s.flags&2048)switch(s.tag){case 0:case 11:case 15:er(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,M=f;break e}M=s.return}}var d=e.current;for(M=d;M!==null;){i=M;var g=i.child;if(i.subtreeFlags&2064&&g!==null)g.return=i,M=g;else e:for(i=d;M!==null;){if(l=M,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Aa(9,l)}}catch(N){te(l,l.return,N)}if(l===i){M=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,M=x;break e}M=l.return}}if(A=a,Rt(),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(_a,e)}catch{}r=!0}return r}finally{B=n,$e.transition=t}}return!1}function bl(e,t,n){t=zn(n,t),t=Eu(e,t,1),e=zt(e,t,1),t=we(),e!==null&&(jr(e,1,t),Te(e,t))}function te(e,t,n){if(e.tag===3)bl(e,e,n);else for(;t!==null;){if(t.tag===3){bl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pt===null||!Pt.has(r))){e=zn(n,e),e=Tu(t,e,1),t=zt(t,e,1),e=we(),t!==null&&(jr(t,1,e),Te(t,e));break}}t=t.return}}function Pp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=we(),e.pingedLanes|=e.suspendedLanes&n,le===e&&(de&n)===n&&(se===4||se===3&&(de&130023424)===de&&500>ne()-oi?Gt(e,0):si|=n),Te(e,t)}function Yu(e,t){t===0&&(e.mode&1?(t=Ir,Ir<<=1,!(Ir&130023424)&&(Ir=4194304)):t=1);var n=we();e=ft(e,t),e!==null&&(jr(e,t,n),Te(e,n))}function Mp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Yu(e,n)}function _p(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),Yu(e,n)}var Qu;Qu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ce.current)Ne=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ne=!1,xp(e,t,n);Ne=!!(e.flags&131072)}else Ne=!1,q&&t.flags&1048576&&Jc(t,xa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ra(e,t),e=t.pendingProps;var a=Nn(t,ye.current);kn(t,n),a=Jo(null,t,r,e,a,n);var s=ei();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(r)?(s=!0,ya(t)):s=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Yo(t),a.updater=$a,t.stateNode=a,a._reactInternals=t,no(t,r,e,n),t=so(null,t,r,!0,s,n)):(t.tag=0,q&&s&&Wo(t),ve(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ra(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=Ip(r),e=Ge(r,e),a){case 0:t=ao(null,t,r,e,n);break e;case 1:t=pl(null,t,r,e,n);break e;case 11:t=dl(null,t,r,e,n);break e;case 14:t=fl(null,t,r,Ge(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Ge(r,a),ao(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Ge(r,a),pl(e,t,r,a,n);case 3:e:{if(_u(t),e===null)throw Error(E(387));r=t.pendingProps,s=t.memoizedState,a=s.element,su(e,t),Sa(t,r,null,n);var i=t.memoizedState;if(r=i.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){a=zn(Error(E(423)),t),t=ml(e,t,r,n,a);break e}else if(r!==a){a=zn(Error(E(424)),t),t=ml(e,t,r,n,a);break e}else for(Pe=Tt(t.stateNode.containerInfo.firstChild),Me=t,q=!0,Xe=null,n=ru(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cn(),r===a){t=pt(e,t,n);break e}ve(e,t,r,n)}t=t.child}return t;case 5:return ou(t),e===null&&Js(t),r=t.type,a=t.pendingProps,s=e!==null?e.memoizedProps:null,i=a.children,Ys(r,a)?i=null:s!==null&&Ys(r,s)&&(t.flags|=32),Mu(e,t),ve(e,t,i,n),t.child;case 6:return e===null&&Js(t),null;case 13:return Lu(e,t,n);case 4:return Qo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=En(t,null,r,n):ve(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Ge(r,a),dl(e,t,r,a,n);case 7:return ve(e,t,t.pendingProps,n),t.child;case 8:return ve(e,t,t.pendingProps.children,n),t.child;case 12:return ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,s=t.memoizedProps,i=a.value,H(wa,r._currentValue),r._currentValue=i,s!==null)if(Ke(s.value,i)){if(s.children===a.children&&!Ce.current){t=pt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){i=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=ct(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?c.next=c:(c.next=p.next,p.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),eo(s.return,n,t),l.lanes|=n;break}c=c.next}}else if(s.tag===10)i=s.type===t.type?null:s.child;else if(s.tag===18){if(i=s.return,i===null)throw Error(E(341));i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),eo(i,n,t),i=s.sibling}else i=s.child;if(i!==null)i.return=s;else for(i=s;i!==null;){if(i===t){i=null;break}if(s=i.sibling,s!==null){s.return=i.return,i=s;break}i=i.return}s=i}ve(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,kn(t,n),a=We(a),r=r(a),t.flags|=1,ve(e,t,r,n),t.child;case 14:return r=t.type,a=Ge(r,t.pendingProps),a=Ge(r.type,a),fl(e,t,r,a,n);case 15:return zu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Ge(r,a),ra(e,t),t.tag=1,Ee(r)?(e=!0,ya(t)):e=!1,kn(t,n),Cu(t,r,a),no(t,r,a,n),so(null,t,r,!0,e,n);case 19:return Iu(e,t,n);case 22:return Pu(e,t,n)}throw Error(E(156,t.tag))};function Ku(e,t){return bc(e,t)}function Lp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Re(e,t,n,r){return new Lp(e,t,n,r)}function ui(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ip(e){if(typeof e=="function")return ui(e)?1:0;if(e!=null){if(e=e.$$typeof,e===zo)return 11;if(e===Po)return 14}return 2}function _t(e,t){var n=e.alternate;return n===null?(n=Re(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function oa(e,t,n,r,a,s){var i=2;if(r=e,typeof e=="function")ui(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case sn:return Vt(n.children,a,s,t);case To:i=8,a|=8;break;case Cs:return e=Re(12,n,t,a|2),e.elementType=Cs,e.lanes=s,e;case Es:return e=Re(13,n,t,a),e.elementType=Es,e.lanes=s,e;case Ts:return e=Re(19,n,t,a),e.elementType=Ts,e.lanes=s,e;case oc:return Ba(n,a,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ac:i=10;break e;case sc:i=9;break e;case zo:i=11;break e;case Po:i=14;break e;case xt:i=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Re(i,n,t,a),t.elementType=e,t.type=r,t.lanes=s,t}function Vt(e,t,n,r){return e=Re(7,e,r,t),e.lanes=n,e}function Ba(e,t,n,r){return e=Re(22,e,r,t),e.elementType=oc,e.lanes=n,e.stateNode={isHidden:!1},e}function xs(e,t,n){return e=Re(6,e,null,t),e.lanes=n,e}function ws(e,t,n){return t=Re(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fp(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=es(0),this.expirationTimes=es(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=es(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function di(e,t,n,r,a,s,i,l,c){return e=new Fp(e,t,n,l,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Re(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yo(s),e}function Dp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:an,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function qu(e){if(!e)return It;e=e._reactInternals;e:{if(Jt(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(Ee(n))return qc(e,n,t)}return t}function Zu(e,t,n,r,a,s,i,l,c){return e=di(n,r,!0,e,a,s,i,l,c),e.context=qu(null),n=e.current,r=we(),a=Mt(n),s=ct(r,a),s.callback=t??null,zt(n,s,a),e.current.lanes=a,jr(e,a,r),Te(e,r),e}function Ua(e,t,n,r){var a=t.current,s=we(),i=Mt(a);return n=qu(n),t.context===null?t.context=n:t.pendingContext=n,t=ct(s,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=zt(a,t,i),e!==null&&(Qe(e,a,i,s),ea(e,a,i)),i}function Pa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function jl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function fi(e,t){jl(e,t),(e=e.alternate)&&jl(e,t)}function Rp(){return null}var Ju=typeof reportError=="function"?reportError:function(e){console.error(e)};function pi(e){this._internalRoot=e}Ha.prototype.render=pi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Ua(e,t,null,null)};Ha.prototype.unmount=pi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qt(function(){Ua(null,e,null,null)}),t[dt]=null}};function Ha(e){this._internalRoot=e}Ha.prototype.unstable_scheduleHydration=function(e){if(e){var t=Pc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<kt.length&&t!==0&&t<kt[n].priority;n++);kt.splice(n,0,e),n===0&&_c(e)}};function mi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ga(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Nl(){}function Op(e,t,n,r,a){if(a){if(typeof r=="function"){var s=r;r=function(){var u=Pa(i);s.call(u)}}var i=Zu(t,r,e,0,null,!1,!1,"",Nl);return e._reactRootContainer=i,e[dt]=i.current,fr(e.nodeType===8?e.parentNode:e),qt(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var l=r;r=function(){var u=Pa(c);l.call(u)}}var c=di(e,0,!1,null,null,!1,!1,"",Nl);return e._reactRootContainer=c,e[dt]=c.current,fr(e.nodeType===8?e.parentNode:e),qt(function(){Ua(t,c,n,r)}),c}function Va(e,t,n,r,a){var s=n._reactRootContainer;if(s){var i=s;if(typeof a=="function"){var l=a;a=function(){var c=Pa(i);l.call(c)}}Ua(t,i,e,a)}else i=Op(n,t,e,a,r);return Pa(i)}Tc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Gn(t.pendingLanes);n!==0&&(Lo(t,n|1),Te(t,ne()),!(A&6)&&(Pn=ne()+500,Rt()))}break;case 13:qt(function(){var r=ft(e,1);if(r!==null){var a=we();Qe(r,e,1,a)}}),fi(e,1)}};Io=function(e){if(e.tag===13){var t=ft(e,134217728);if(t!==null){var n=we();Qe(t,e,134217728,n)}fi(e,134217728)}};zc=function(e){if(e.tag===13){var t=Mt(e),n=ft(e,t);if(n!==null){var r=we();Qe(n,e,t,r)}fi(e,t)}};Pc=function(){return B};Mc=function(e,t){var n=B;try{return B=e,t()}finally{B=n}};Os=function(e,t,n){switch(t){case"input":if(Ms(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=Da(r);if(!a)throw Error(E(90));lc(r),Ms(r,a)}}}break;case"textarea":uc(e,n);break;case"select":t=n.value,t!=null&&yn(e,!!n.multiple,t,!1)}};yc=ii;vc=qt;var $p={usingClientEntryPoint:!1,Events:[Cr,un,Da,hc,gc,ii]},Bn={findFiberByHostInstance:Bt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ap={bundleType:Bn.bundleType,version:Bn.version,rendererPackageName:Bn.rendererPackageName,rendererConfig:Bn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=kc(e),e===null?null:e.stateNode},findFiberByHostInstance:Bn.findFiberByHostInstance||Rp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gr.isDisabled&&Gr.supportsFiber)try{_a=Gr.inject(Ap),tt=Gr}catch{}}Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$p;Le.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mi(t))throw Error(E(200));return Dp(e,t,null,n)};Le.createRoot=function(e,t){if(!mi(e))throw Error(E(299));var n=!1,r="",a=Ju;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=di(e,1,!1,null,null,n,!1,r,a),e[dt]=t.current,fr(e.nodeType===8?e.parentNode:e),new pi(t)};Le.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=kc(t),e=e===null?null:e.stateNode,e};Le.flushSync=function(e){return qt(e)};Le.hydrate=function(e,t,n){if(!Ga(t))throw Error(E(200));return Va(null,e,t,!0,n)};Le.hydrateRoot=function(e,t,n){if(!mi(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,a=!1,s="",i=Ju;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Zu(t,null,e,1,n??null,a,!1,s,i),e[dt]=t.current,fr(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Ha(t)};Le.render=function(e,t,n){if(!Ga(t))throw Error(E(200));return Va(null,e,t,!1,n)};Le.unmountComponentAtNode=function(e){if(!Ga(e))throw Error(E(40));return e._reactRootContainer?(qt(function(){Va(null,null,e,!1,function(){e._reactRootContainer=null,e[dt]=null})}),!0):!1};Le.unstable_batchedUpdates=ii;Le.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ga(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Va(e,t,n,!1,r)};Le.version="18.3.1-next-f1338f8080-20240426";function ed(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ed)}catch(e){console.error(e)}}ed(),ec.exports=Le;var Wp=ec.exports,Cl=Wp;js.createRoot=Cl.createRoot,js.hydrateRoot=Cl.hydrateRoot;const Bp={},El=e=>{let t;const n=new Set,r=(p,h)=>{const m=typeof p=="function"?p(t):p;if(!Object.is(m,t)){const w=t;t=h??(typeof m!="object"||m===null)?m:Object.assign({},t,m),n.forEach(y=>y(t,w))}},a=()=>t,c={setState:r,getState:a,getInitialState:()=>u,subscribe:p=>(n.add(p),()=>n.delete(p)),destroy:()=>{(Bp?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(r,a,c);return c},Up=e=>e?El(e):El;var td={exports:{}},nd={},rd={exports:{}},ad={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mn=S;function Hp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Gp=typeof Object.is=="function"?Object.is:Hp,Vp=Mn.useState,Xp=Mn.useEffect,Yp=Mn.useLayoutEffect,Qp=Mn.useDebugValue;function Kp(e,t){var n=t(),r=Vp({inst:{value:n,getSnapshot:t}}),a=r[0].inst,s=r[1];return Yp(function(){a.value=n,a.getSnapshot=t,ks(a)&&s({inst:a})},[e,n,t]),Xp(function(){return ks(a)&&s({inst:a}),e(function(){ks(a)&&s({inst:a})})},[e]),Qp(n),n}function ks(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Gp(e,n)}catch{return!0}}function qp(e,t){return t()}var Zp=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?qp:Kp;ad.useSyncExternalStore=Mn.useSyncExternalStore!==void 0?Mn.useSyncExternalStore:Zp;rd.exports=ad;var Jp=rd.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xa=S,em=Jp;function tm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nm=typeof Object.is=="function"?Object.is:tm,rm=em.useSyncExternalStore,am=Xa.useRef,sm=Xa.useEffect,om=Xa.useMemo,im=Xa.useDebugValue;nd.useSyncExternalStoreWithSelector=function(e,t,n,r,a){var s=am(null);if(s.current===null){var i={hasValue:!1,value:null};s.current=i}else i=s.current;s=om(function(){function c(w){if(!u){if(u=!0,p=w,w=r(w),a!==void 0&&i.hasValue){var y=i.value;if(a(y,w))return h=y}return h=w}if(y=h,nm(p,w))return y;var v=r(w);return a!==void 0&&a(y,v)?(p=w,y):(p=w,h=v)}var u=!1,p,h,m=n===void 0?null:n;return[function(){return c(t())},m===null?void 0:function(){return c(m())}]},[t,n,r,a]);var l=rm(e,s[0],s[1]);return sm(function(){i.hasValue=!0,i.value=l},[l]),im(l),l};td.exports=nd;var lm=td.exports;const cm=Wl(lm),sd={},{useDebugValue:um}=Zl,{useSyncExternalStoreWithSelector:dm}=cm;let Tl=!1;const fm=e=>e;function pm(e,t=fm,n){(sd?"production":void 0)!=="production"&&n&&!Tl&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Tl=!0);const r=dm(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return um(r),r}const zl=e=>{(sd?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?Up(e):e,n=(r,a)=>pm(t,r,a);return Object.assign(n,t),n},Tr=e=>e?zl(e):zl,mm={};function hm(e,t){let n;try{n=e()}catch{return}return{getItem:a=>{var s;const i=c=>c===null?null:JSON.parse(c,void 0),l=(s=n.getItem(a))!=null?s:null;return l instanceof Promise?l.then(i):i(l)},setItem:(a,s)=>n.setItem(a,JSON.stringify(s,void 0)),removeItem:a=>n.removeItem(a)}}const kr=e=>t=>{try{const n=e(t);return n instanceof Promise?n:{then(r){return kr(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return kr(r)(n)}}}},gm=(e,t)=>(n,r,a)=>{let s={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:j=>j,version:0,merge:(j,f)=>({...f,...j}),...t},i=!1;const l=new Set,c=new Set;let u;try{u=s.getStorage()}catch{}if(!u)return e((...j)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),n(...j)},r,a);const p=kr(s.serialize),h=()=>{const j=s.partialize({...r()});let f;const d=p({state:j,version:s.version}).then(g=>u.setItem(s.name,g)).catch(g=>{f=g});if(f)throw f;return d},m=a.setState;a.setState=(j,f)=>{m(j,f),h()};const w=e((...j)=>{n(...j),h()},r,a);let y;const v=()=>{var j;if(!u)return;i=!1,l.forEach(d=>d(r()));const f=((j=s.onRehydrateStorage)==null?void 0:j.call(s,r()))||void 0;return kr(u.getItem.bind(u))(s.name).then(d=>{if(d)return s.deserialize(d)}).then(d=>{if(d)if(typeof d.version=="number"&&d.version!==s.version){if(s.migrate)return s.migrate(d.state,d.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return d.state}).then(d=>{var g;return y=s.merge(d,(g=r())!=null?g:w),n(y,!0),h()}).then(()=>{f==null||f(y,void 0),i=!0,c.forEach(d=>d(y))}).catch(d=>{f==null||f(void 0,d)})};return a.persist={setOptions:j=>{s={...s,...j},j.getStorage&&(u=j.getStorage())},clearStorage:()=>{u==null||u.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>v(),hasHydrated:()=>i,onHydrate:j=>(l.add(j),()=>{l.delete(j)}),onFinishHydration:j=>(c.add(j),()=>{c.delete(j)})},v(),y||w},ym=(e,t)=>(n,r,a)=>{let s={storage:hm(()=>localStorage),partialize:v=>v,version:0,merge:(v,j)=>({...j,...v}),...t},i=!1;const l=new Set,c=new Set;let u=s.storage;if(!u)return e((...v)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),n(...v)},r,a);const p=()=>{const v=s.partialize({...r()});return u.setItem(s.name,{state:v,version:s.version})},h=a.setState;a.setState=(v,j)=>{h(v,j),p()};const m=e((...v)=>{n(...v),p()},r,a);a.getInitialState=()=>m;let w;const y=()=>{var v,j;if(!u)return;i=!1,l.forEach(d=>{var g;return d((g=r())!=null?g:m)});const f=((j=s.onRehydrateStorage)==null?void 0:j.call(s,(v=r())!=null?v:m))||void 0;return kr(u.getItem.bind(u))(s.name).then(d=>{if(d)if(typeof d.version=="number"&&d.version!==s.version){if(s.migrate)return[!0,s.migrate(d.state,d.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,d.state];return[!1,void 0]}).then(d=>{var g;const[x,N]=d;if(w=s.merge(N,(g=r())!=null?g:m),n(w,!0),x)return p()}).then(()=>{f==null||f(w,void 0),w=r(),i=!0,c.forEach(d=>d(w))}).catch(d=>{f==null||f(void 0,d)})};return a.persist={setOptions:v=>{s={...s,...v},v.storage&&(u=v.storage)},clearStorage:()=>{u==null||u.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>y(),hasHydrated:()=>i,onHydrate:v=>(l.add(v),()=>{l.delete(v)}),onFinishHydration:v=>(c.add(v),()=>{c.delete(v)})},s.skipHydration||y(),w||m},vm=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?((mm?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),gm(e,t)):ym(e,t),hi=vm,Pl={sunny:40,rainy:25,stormy:10,snowy:5,foggy:15,rainbow:5};function Ml(){const e=Object.values(Pl).reduce((n,r)=>n+r,0);let t=Math.random()*e;for(const[n,r]of Object.entries(Pl))if(t-=r,t<=0)return n;return"sunny"}const je=Tr()(hi((e,t)=>({phase:"menu",weather:"sunny",dayNumber:1,timeOfDay:0,isPaused:!1,lastUpdateTime:Date.now(),activeCrows:[],hasScarecrow:!1,setPhase:n=>e({phase:n}),setWeather:n=>e({weather:n}),advanceDay:()=>e(n=>({dayNumber:n.dayNumber+1,timeOfDay:0,weather:Ml()})),updateTimeOfDay:n=>e(r=>{const a=r.timeOfDay+n;return a>=100?{timeOfDay:0,dayNumber:r.dayNumber+1,weather:Ml()}:{timeOfDay:a}}),togglePause:()=>e(n=>({isPaused:!n.isPaused,phase:n.isPaused?"playing":"paused"})),startGame:()=>e({phase:"playing",isPaused:!1,lastUpdateTime:Date.now()}),endGame:()=>e({phase:"gameover",isPaused:!1}),resetGame:()=>e({phase:"menu",weather:"sunny",dayNumber:1,timeOfDay:0,isPaused:!1,lastUpdateTime:Date.now(),activeCrows:[]}),addCrow:n=>e(r=>({activeCrows:[...r.activeCrows,n]})),removeCrow:n=>e(r=>({activeCrows:r.activeCrows.filter(a=>a.id!==n)})),updateCrow:(n,r)=>e(a=>({activeCrows:a.activeCrows.map(s=>s.id===n?{...s,...r}:s)})),clearCrows:()=>e({activeCrows:[]}),setScarecrow:n=>e({hasScarecrow:n})}),{name:"game-storage",partialize:e=>({weather:e.weather,dayNumber:e.dayNumber,hasScarecrow:e.hasScarecrow})}));function xm(){return`notif-${Date.now()}-${Math.random().toString(36).substr(2,9)}`}const Ot=Tr((e,t)=>({currentScreen:"title",isModalOpen:!1,modalContent:null,notifications:[],isLoading:!1,showTutorial:!0,setScreen:n=>{e({currentScreen:n})},openModal:n=>{e({isModalOpen:!0,modalContent:n})},closeModal:()=>{e({isModalOpen:!1,modalContent:null})},addNotification:(n,r="info",a=3e3)=>{const s={id:xm(),message:n,type:r,duration:a,createdAt:Date.now()};e(i=>({notifications:[...i.notifications,s]})),a>0&&setTimeout(()=>{t().removeNotification(s.id)},a)},removeNotification:n=>{e(r=>({notifications:r.notifications.filter(a=>a.id!==n)}))},clearNotifications:()=>{e({notifications:[]})},setLoading:n=>{e({isLoading:n})},setShowTutorial:n=>{e({showTutorial:n})},resetUI:()=>{e({currentScreen:"title",isModalOpen:!1,modalContent:null,notifications:[],isLoading:!1})}})),Ae={carrot:{id:"carrot",name:"紅蘿蔔",emoji:"🥕",difficulty:1,minWordLength:3,maxWordLength:4,growthTime:3e4,harvestTimeLimit:8,sellPrice:5},onion:{id:"onion",name:"洋蔥",emoji:"🧅",difficulty:1,minWordLength:3,maxWordLength:5,growthTime:45e3,harvestTimeLimit:8,sellPrice:8},tomato:{id:"tomato",name:"番茄",emoji:"🍅",difficulty:2,minWordLength:4,maxWordLength:5,growthTime:6e4,harvestTimeLimit:7,sellPrice:10},lettuce:{id:"lettuce",name:"生菜",emoji:"🥬",difficulty:2,minWordLength:4,maxWordLength:6,growthTime:5e4,harvestTimeLimit:7,sellPrice:12},corn:{id:"corn",name:"粟米",emoji:"🌽",difficulty:3,minWordLength:5,maxWordLength:7,growthTime:9e4,harvestTimeLimit:6,sellPrice:20},pumpkin:{id:"pumpkin",name:"南瓜",emoji:"🎃",difficulty:3,minWordLength:6,maxWordLength:8,growthTime:15e4,harvestTimeLimit:5,sellPrice:40}},Sr={carrot:2,onion:3,tomato:5,lettuce:6,corn:10,pumpkin:20},_l=["carrot","onion"],vt={rows:3,cols:4},Ll={rows:5,cols:6},Il=50,wm={carrot:5,onion:3},Vr={3:["cat","dog","sun","red","big","run","hat","cup","bed","pen"],4:["tree","farm","corn","seed","grow","rain","soil","leaf","root","stem"],5:["plant","water","earth","green","fruit","bloom","field","grain","wheat","berry"],6:["garden","flower","tomato","carrot","pepper","squash","sprout","branch","forest","meadow"],7:["harvest","pumpkin","farming","growing","seedling","cabbage","sunlight","organic","fertile","compost"],8:["gardener","cucumber","eggplant","broccoli","mushroom","radishes","beetroot","zucchini","parsley","spinach"]};function km(e,t){const n=Object.keys(Vr).map(Number).filter(s=>s>=e&&s<=t);if(n.length===0){const i=Object.keys(Vr).map(Number).reduce((c,u)=>{const p=Math.min(Math.abs(c-e),Math.abs(c-t));return Math.min(Math.abs(u-e),Math.abs(u-t))<p?u:c}),l=Vr[i];return l[Math.floor(Math.random()*l.length)]}const r=n[Math.floor(Math.random()*n.length)],a=Vr[r];return a[Math.floor(Math.random()*a.length)]}function Xn(e){return km(e.minWordLength,e.maxWordLength)}function Sm(e,t){const n=t.split("").map((s,i)=>s===e[i]),r=t.length===e.length,a=r&&n.every(s=>s);return{isComplete:r,isCorrect:a,correctChars:n}}function od(e,t,n,r){const a=(t-e)/6e4,s=n/5,i=a>0?Math.round(s/a):0,l=n+r,c=l>0?Math.round(n/l*100):100;return{wpm:i,accuracy:c}}const Xr={sunny:40,rainy:25,stormy:10,snowy:5,foggy:15,rainbow:5},Fl={sunny:{growthMultiplier:1,harvestTimeMultiplier:1,wateringEffect:"none",typingEffect:"normal"},rainy:{growthMultiplier:1.2,harvestTimeMultiplier:1,wateringEffect:"auto",typingEffect:"normal"},stormy:{growthMultiplier:1,harvestTimeMultiplier:1,wateringEffect:"auto",typingEffect:"shaking"},snowy:{growthMultiplier:.8,harvestTimeMultiplier:.5,wateringEffect:"none",typingEffect:"normal"},foggy:{growthMultiplier:1,harvestTimeMultiplier:1,wateringEffect:"none",typingEffect:"foggy"},rainbow:{growthMultiplier:1,harvestTimeMultiplier:2,wateringEffect:"none",typingEffect:"normal"}},vo={sunny:{emoji:"☀️",name:"Sunny",effect:"Normal conditions"},rainy:{emoji:"🌧️",name:"Rainy",effect:"Crops grow 20% faster, auto-water"},stormy:{emoji:"⛈️",name:"Stormy",effect:"Text shakes while typing!"},snowy:{emoji:"❄️",name:"Snowy",effect:"Time limits reduced by 50%"},foggy:{emoji:"🌫️",name:"Foggy",effect:"Some letters hidden/blurred"},rainbow:{emoji:"🌈",name:"Rainbow",effect:"Harvest time doubled!"}};class bm{constructor(){pe(this,"weatherChangeInterval",null);pe(this,"isRunning",!1);pe(this,"lastWeatherChange",0);pe(this,"MIN_CHANGE_INTERVAL",2*60*1e3);pe(this,"MAX_CHANGE_INTERVAL",5*60*1e3)}start(){this.isRunning||(this.isRunning=!0,this.lastWeatherChange=Date.now(),this.scheduleNextWeatherChange(),console.log("[WeatherSystem] Started"))}stop(){this.isRunning=!1,this.weatherChangeInterval!==null&&(clearTimeout(this.weatherChangeInterval),this.weatherChangeInterval=null),console.log("[WeatherSystem] Stopped")}scheduleNextWeatherChange(){if(!this.isRunning)return;const t=this.MIN_CHANGE_INTERVAL+Math.random()*(this.MAX_CHANGE_INTERVAL-this.MIN_CHANGE_INTERVAL);this.weatherChangeInterval=window.setTimeout(()=>{this.changeWeather(),this.scheduleNextWeatherChange()},t)}changeWeather(){const t=this.getRandomWeather();this.setWeather(t),this.lastWeatherChange=Date.now(),console.log(`[WeatherSystem] Weather changed to: ${t}`)}setWeather(t){je.getState().setWeather(t)}getCurrentWeather(){return je.getState().weather}getCurrentEffects(){const t=this.getCurrentWeather();return Fl[t]}getEffectsForWeather(t){return Fl[t]}getWeatherDescription(t){return vo[t]}getRandomWeather(){const t=Object.values(Xr).reduce((r,a)=>r+a,0);let n=Math.random()*t;for(const[r,a]of Object.entries(Xr))if(n-=a,n<=0)return r;return"sunny"}getForecast(){const t=Object.values(Xr).reduce((n,r)=>n+r,0);return Object.entries(Xr).map(([n,r])=>({weather:n,probability:Math.round(r/t*100)})).sort((n,r)=>r.probability-n.probability).slice(0,3)}getTimeUntilChange(){const t=Date.now()-this.lastWeatherChange,n=this.MIN_CHANGE_INTERVAL-t;return Math.max(0,n)}hasAutoWatering(){return this.getCurrentEffects().wateringEffect==="auto"}getGrowthMultiplier(){return this.getCurrentEffects().growthMultiplier}getHarvestTimeMultiplier(){return this.getCurrentEffects().harvestTimeMultiplier}getTypingEffect(){return this.getCurrentEffects().typingEffect}}const bn=new bm,Yr=[{rows:3,cols:4},{rows:3,cols:5},{rows:4,cols:5},{rows:5,cols:6}];function Ss(e,t){return Array(e).fill(null).map(()=>Array(t).fill(null))}function jm(e,t){return t<=0?"withered":e>=120?"overripe":e>=100?"mature":e>=60?"growing":e>=30?"sprout":"seed"}function Nm(){return`crop-${Date.now()}-${Math.random().toString(36).substr(2,9)}`}const xe=Tr()(hi((e,t)=>({grid:Ss(vt.rows,vt.cols),gridSize:{...vt},selectedSlot:null,expansionLevel:0,hasSprinkler:!1,hasScarecrow:!1,initializeGrid:(n=vt.rows,r=vt.cols)=>{e({grid:Ss(n,r),gridSize:{rows:n,cols:r},selectedSlot:null})},plantCrop:(n,r,a)=>{const{grid:s,gridSize:i}=t();if(n<0||n>=i.rows||r<0||r>=i.cols||s[n][r]!==null)return!1;const l={id:Nm(),cropType:a,plantedAt:Date.now(),growthStage:"seed",waterLevel:50,fertilizerLevel:0,health:100,wordToHarvest:Xn(a),growthProgress:0},c=s.map((u,p)=>u.map((h,m)=>p===n&&m===r?l:h));return e({grid:c}),!0},harvestCrop:(n,r)=>{const{grid:a,gridSize:s}=t();if(n<0||n>=s.rows||r<0||r>=s.cols)return null;const i=a[n][r];if(!i||i.growthStage!=="mature")return null;const l=a.map((c,u)=>c.map((p,h)=>u===n&&h===r?null:p));return e({grid:l,selectedSlot:null}),i},removeCrop:(n,r)=>{const{grid:a,gridSize:s}=t();if(n<0||n>=s.rows||r<0||r>=s.cols)return;const i=a.map((l,c)=>l.map((u,p)=>c===n&&p===r?null:u));e({grid:i})},updateCropGrowth:n=>{const{grid:r,hasSprinkler:a}=t(),s=bn.getCurrentEffects(),i=s.growthMultiplier,l=s.wateringEffect==="auto"||a,c=r.map(u=>u.map(p=>{if(!p)return null;const h=p.waterLevel>30?1:.5,m=1+p.fertilizerLevel/200,w=n/p.cropType.growthTime*100*h*m*i,y=l?n/2e4:n/1e4,v=l?n/15e3:0,j=Math.min(150,p.growthProgress+w),f=Math.min(100,Math.max(0,p.waterLevel-y+v)),d=Math.max(0,p.fertilizerLevel-n/6e4);let g=p.health;return f<=0&&(g=Math.max(0,p.health-n/5e3)),j>120&&(g=Math.max(0,p.health-n/1e4)),{...p,growthProgress:j,waterLevel:f,fertilizerLevel:d,health:g,growthStage:jm(j,g)}}));e({grid:c})},waterCrop:(n,r)=>{const{grid:a,gridSize:s}=t();if(n<0||n>=s.rows||r<0||r>=s.cols||!a[n][r])return;const l=a.map((c,u)=>c.map((p,h)=>u===n&&h===r&&p?{...p,waterLevel:Math.min(100,p.waterLevel+30)}:p));e({grid:l})},fertilizeCrop:(n,r)=>{const{grid:a,gridSize:s}=t();if(n<0||n>=s.rows||r<0||r>=s.cols||!a[n][r])return;const l=a.map((c,u)=>c.map((p,h)=>u===n&&h===r&&p?{...p,fertilizerLevel:Math.min(100,p.fertilizerLevel+25)}:p));e({grid:l})},selectSlot:(n,r)=>{e({selectedSlot:{row:n,col:r}})},clearSelection:()=>{e({selectedSlot:null})},getCropAt:(n,r)=>{const{grid:a,gridSize:s}=t();return n<0||n>=s.rows||r<0||r>=s.cols?null:a[n][r]},getMatureCrops:()=>{const{grid:n}=t(),r=[];return n.forEach((a,s)=>{a.forEach((i,l)=>{i&&i.growthStage==="mature"&&r.push({row:s,col:l,crop:i})})}),r},expandFarm:(n,r)=>{const{grid:a,gridSize:s,expansionLevel:i}=t();if(n<s.rows||r<s.cols||n>Ll.rows||r>Ll.cols)return!1;const l=[];for(let u=0;u<n;u++){const p=[];for(let h=0;h<r;h++)u<s.rows&&h<s.cols?p.push(a[u][h]):p.push(null);l.push(p)}const c=Yr.findIndex(u=>u.rows===n&&u.cols===r);return e({grid:l,gridSize:{rows:n,cols:r},expansionLevel:c>=0?c:i+1}),!0},canExpand:()=>{const{expansionLevel:n}=t();return n<Yr.length-1},getNextExpansion:()=>{const{expansionLevel:n}=t();return n<Yr.length-1?Yr[n+1]:null},setSprinkler:n=>{e({hasSprinkler:n})},setScarecrow:n=>{e({hasScarecrow:n})},resetFarm:()=>{e({grid:Ss(vt.rows,vt.cols),gridSize:{...vt},selectedSlot:null,expansionLevel:0,hasSprinkler:!1,hasScarecrow:!1})}}),{name:"farm-typing-farm",partialize:e=>({grid:e.grid,gridSize:e.gridSize,expansionLevel:e.expansionLevel,hasSprinkler:e.hasSprinkler,hasScarecrow:e.hasScarecrow})})),Cm=Object.values(Ae).map(e=>({id:`seed_${e.id}`,type:"seed",name:`${e.emoji} ${e.name}種子`,description:`難度 ${"⭐".repeat(e.difficulty)} · 成長時間 ${Math.round(e.growthTime/1e3)}秒`,price:Sr[e.id]||Math.round(e.sellPrice/2),currency:"gold",icon:e.emoji,cropTypeId:e.id,unlockLevel:e.difficulty<=1?1:e.difficulty<=2?2:5})),Em=[{id:"scarecrow",type:"tool",name:"🎃 稻草人",description:"減少 50% 烏鴉出現機率",price:100,currency:"gold",icon:"🎃",effect:"reduceCrows",unlockLevel:1},{id:"sprinkler",type:"tool",name:"💧 自動灑水器",description:"自動保持作物水分",price:200,currency:"gold",icon:"💧",effect:"autoWater",unlockLevel:3},{id:"fertilizer_pack",type:"tool",name:"🧪 肥料包",description:"加速作物生長 20%",price:50,currency:"gold",icon:"🧪",effect:"fertilize",unlockLevel:1},{id:"quality_seeds",type:"tool",name:"✨ 優質種子增強劑",description:"下次收穫價值 +50%",price:30,currency:"gold",icon:"✨",effect:"qualityBoost",unlockLevel:2}],Tm=[{id:"expand_3x5",type:"upgrade",name:"📐 擴建 3×5",description:"將農田擴大至 15 格",price:500,currency:"gold",icon:"📐",effect:"expandTo3x5",unlockLevel:2},{id:"expand_4x5",type:"upgrade",name:"📐 擴建 4×5",description:"將農田擴大至 20 格",price:1200,currency:"gold",icon:"📐",effect:"expandTo4x5",unlockLevel:5},{id:"expand_5x6",type:"upgrade",name:"📐 擴建 5×6",description:"將農田擴大至 30 格（最大）",price:2500,currency:"gold",icon:"📐",effect:"expandTo5x6",unlockLevel:8}],zm=[{id:"lantern",type:"decoration",name:"🏮 燈籠",description:"農場裝飾，增添氣氛",price:50,currency:"gold",icon:"🏮",unlockLevel:1},{id:"windmill",type:"decoration",name:"🎡 風車",description:"農場裝飾，轉啊轉",price:150,currency:"gold",icon:"🎡",unlockLevel:3}],rr=[...Cm,...Em,...Tm,...zm],bs=e=>rr.filter(t=>t.type===e),Pm=e=>rr.find(t=>t.id===e),Dl=[{name:"王大媽",emoji:"👵"},{name:"李廚師",emoji:"👨‍🍳"},{name:"陳老闆",emoji:"🧑‍💼"},{name:"小明",emoji:"👦"},{name:"美美阿姨",emoji:"👩"},{name:"餐廳經理",emoji:"🧑‍💼"},{name:"市場攤販",emoji:"🧑‍🌾"},{name:"學校廚房",emoji:"🏫"}],id=100,xo={harvest:5,perfectHarvest:20,orderComplete:10,orderBonus:5},Rl={wpm:0,accuracy:100,totalWordsTyped:0,totalCropsHarvested:0,bestCombo:0,totalGoldEarned:0};function Ol(){return Object.entries(wm).map(([e,t],n)=>({id:`seed-${e}-${n}`,type:"seed",cropTypeId:e,quantity:t}))}const Oe=Tr()(hi((e,t)=>({gold:Il,gems:0,reputation:0,level:1,xp:0,stats:{...Rl},inventory:Ol(),unlockedCrops:[..._l],activeOrders:[],completedOrdersCount:0,totalEarnings:0,purchasedUpgrades:[],purchasedTools:[],addGold:n=>e(r=>({gold:r.gold+n,totalEarnings:r.totalEarnings+n,stats:{...r.stats,totalGoldEarned:r.stats.totalGoldEarned+n}})),spendGold:n=>{const{gold:r}=t();return r>=n?(e({gold:r-n}),!0):!1},addGems:n=>e(r=>({gems:r.gems+n})),spendGems:n=>{const{gems:r}=t();return r>=n?(e({gems:r-n}),!0):!1},addReputation:n=>e(r=>({reputation:r.reputation+n})),addXP:n=>e(r=>{let a=r.xp+n,s=r.level;const i=id*s;for(;a>=i;)a-=i,s++;return{xp:a,level:s}}),updateStats:n=>e(r=>({stats:{...r.stats,...n}})),addToInventory:n=>e(r=>{const a=r.inventory.findIndex(i=>i.type===n.type&&i.cropTypeId===n.cropTypeId);if(a>=0){const i=[...r.inventory];return i[a]={...i[a],quantity:i[a].quantity+n.quantity},{inventory:i}}const s={...n,id:`${n.type}-${n.cropTypeId||"generic"}-${Date.now()}`};return{inventory:[...r.inventory,s]}}),removeFromInventory:(n,r=1)=>{const{inventory:a}=t(),s=a.findIndex(c=>c.id===n);if(s<0)return!1;const i=a[s];if(i.quantity<r)return!1;const l=[...a];return i.quantity===r?l.splice(s,1):l[s]={...i,quantity:i.quantity-r},e({inventory:l}),!0},removeFromInventoryByType:(n,r,a)=>{const{inventory:s}=t(),i=s.findIndex(u=>u.type===n&&u.cropTypeId===r);if(i<0)return!1;const l=s[i];if(l.quantity<a)return!1;const c=[...s];return l.quantity===a?c.splice(i,1):c[i]={...l,quantity:l.quantity-a},e({inventory:c}),!0},getInventoryItem:(n,r)=>{const{inventory:a}=t();return a.find(s=>s.type===n&&(r?s.cropTypeId===r:!0))},getInventoryItemsByType:n=>{const{inventory:r}=t();return r.filter(a=>a.type===n)},unlockCrop:n=>e(r=>r.unlockedCrops.includes(n)?r:{unlockedCrops:[...r.unlockedCrops,n]}),addOrder:n=>e(r=>({activeOrders:[...r.activeOrders,n]})),removeOrder:n=>e(r=>({activeOrders:r.activeOrders.filter(a=>a.id!==n)})),completeOrder:(n,r,a=0)=>e(s=>{const i=r+a;return{activeOrders:s.activeOrders.filter(l=>l.id!==n),gold:s.gold+i,totalEarnings:s.totalEarnings+i,completedOrdersCount:s.completedOrdersCount+1,stats:{...s.stats,totalGoldEarned:s.stats.totalGoldEarned+i}}}),failOrder:n=>e(r=>({activeOrders:r.activeOrders.filter(a=>a.id!==n)})),addPurchasedUpgrade:n=>e(r=>({purchasedUpgrades:[...r.purchasedUpgrades,n]})),hasPurchasedUpgrade:n=>t().purchasedUpgrades.includes(n),addPurchasedTool:n=>e(r=>({purchasedTools:[...r.purchasedTools,n]})),hasPurchasedTool:n=>t().purchasedTools.includes(n),resetPlayer:()=>e({gold:Il,gems:0,reputation:0,level:1,xp:0,stats:{...Rl},inventory:Ol(),unlockedCrops:[..._l],activeOrders:[],completedOrdersCount:0,totalEarnings:0,purchasedUpgrades:[],purchasedTools:[]})}),{name:"farm-typing-player",partialize:e=>({gold:e.gold,gems:e.gems,reputation:e.reputation,level:e.level,xp:e.xp,stats:e.stats,inventory:e.inventory,unlockedCrops:e.unlockedCrops,activeOrders:e.activeOrders,completedOrdersCount:e.completedOrdersCount,totalEarnings:e.totalEarnings,purchasedUpgrades:e.purchasedUpgrades,purchasedTools:e.purchasedTools})})),ld=Tr((e,t)=>({activeSession:null,currentWPM:0,currentAccuracy:100,combo:0,maxCombo:0,errorCount:0,recentWPMs:[],sessionHistory:[],pendingSoundEffect:null,startSession:(n,r,a)=>{const s={targetWord:n,typedText:"",startTime:Date.now(),timeLimit:r,cropSlotId:a};e({activeSession:s,errorCount:0})},updateTypedText:n=>{const{activeSession:r,errorCount:a}=t();if(!r)return{isComplete:!1,isCorrect:!1};const s=Sm(r.targetWord,n);let i=0;const l=r.typedText.length;if(n.length>l)for(let c=l;c<n.length;c++)n[c]!==r.targetWord[c]&&i++;return e({activeSession:{...r,typedText:n},errorCount:a+i}),s},endSession:n=>{const{activeSession:r,errorCount:a,combo:s,maxCombo:i,recentWPMs:l,sessionHistory:c}=t();if(!r)return null;const u=Date.now(),p=od(r.startTime,u,r.targetWord.length,a),h={word:r.targetWord,wpm:p.wpm,accuracy:p.accuracy,time:(u-r.startTime)/1e3,success:n,timestamp:u},m=[...l,p.wpm].slice(-10),w=Math.round(m.reduce((v,j)=>v+j,0)/m.length),y=[...c,h].slice(-100);if(n){const v=s+1;e({activeSession:null,currentWPM:w,currentAccuracy:p.accuracy,combo:v,maxCombo:Math.max(i,v),errorCount:0,recentWPMs:m,sessionHistory:y,pendingSoundEffect:a===0?"perfect":"complete"})}else e({activeSession:null,currentWPM:w,currentAccuracy:p.accuracy,combo:0,errorCount:0,recentWPMs:m,sessionHistory:y,pendingSoundEffect:"timeout"});return p},cancelSession:()=>{e({activeSession:null,errorCount:0})},incrementCombo:()=>{const{combo:n,maxCombo:r}=t(),a=n+1;e({combo:a,maxCombo:Math.max(r,a)})},resetCombo:()=>{e({combo:0})},getSessionTimeRemaining:()=>{const{activeSession:n}=t();if(!n)return 0;const r=(Date.now()-n.startTime)/1e3;return Math.max(0,n.timeLimit-r)},resetTypingState:()=>{e({activeSession:null,currentWPM:0,currentAccuracy:100,combo:0,maxCombo:0,errorCount:0,recentWPMs:[],sessionHistory:[],pendingSoundEffect:null})},calculateAverageWPM:()=>{const{sessionHistory:n}=t();if(n.length===0)return 0;const r=n.filter(s=>s.success);if(r.length===0)return 0;const a=r.reduce((s,i)=>s+i.wpm,0);return Math.round(a/r.length)},calculateOverallAccuracy:()=>{const{sessionHistory:n}=t();if(n.length===0)return 100;const r=n.reduce((a,s)=>a+s.accuracy,0);return Math.round(r/n.length)},getSessionHistory:()=>t().sessionHistory,clearSessionHistory:()=>{e({sessionHistory:[]})},triggerSoundEffect:n=>{e({pendingSoundEffect:n})},clearSoundEffect:()=>{e({pendingSoundEffect:null})}})),Mm=[10,25,50,100];function _m(e){const{targetWord:t,timeLimit:n,cropSlotId:r,onComplete:a,onTimeout:s,onComboMilestone:i}=e,l=ld(),[c,u]=S.useState(""),[p,h]=S.useState([]),[m,w]=S.useState(n),[y,v]=S.useState(0),[j,f]=S.useState(100),[d,g]=S.useState(!1),[x,N]=S.useState(!1),[k,b]=S.useState(null),[C,L]=S.useState(!1),P=S.useRef(0),W=S.useRef(0),D=S.useRef(null),Y=S.useRef(0),G=S.useCallback(O=>t.split("").map((K,oe)=>oe<O.length?O[oe]===K?"correct":"wrong":oe===O.length?"current":"pending"),[t]),z=S.useCallback(O=>{if(P.current===0||O===0)return 0;const oe=(Date.now()-P.current)/6e4;return oe===0?0:Math.round(O/5/oe)},[]),_=S.useCallback((O,K)=>K===0?100:Math.round(O/K*100),[]),$=S.useCallback(()=>{L(!0),P.current=Date.now(),W.current=0,Y.current=0,u(""),h(G("")),w(n),v(0),f(100),g(!1),N(!1),b(null),l.startSession(t,n,r)},[t,n,r,l,G]),T=S.useCallback(O=>{if(!C||d||x||O.length!==1)return;const K=c+O,oe=c.length;O===t[oe]||(W.current+=1,b("miss"),setTimeout(()=>b(null),300)),u(K),h(G(K)),l.updateTypedText(K);const Ue=K.split("").filter((tn,nn)=>tn===t[nn]).length,ht=z(K.length),Ya=_(Ue,K.length);if(v(ht),f(Ya),K.length===t.length){const tn=K===t;g(!0),L(!1),D.current&&(clearInterval(D.current),D.current=null);const nn=od(P.current,Date.now(),t.length,W.current),gt=l.endSession(tn);if(tn){b(W.current===0?"perfect":"good");const U=l.combo;for(const ce of Mm)U>=ce&&Y.current<ce&&(Y.current=ce,i==null||i(ce));a==null||a({wpm:(gt==null?void 0:gt.wpm)??nn.wpm,accuracy:(gt==null?void 0:gt.accuracy)??nn.accuracy,combo:U})}else b("miss"),l.resetCombo(),s==null||s()}},[C,d,x,c,t,G,z,_,l,a,i,s]),I=S.useCallback(()=>{L(!1),u(""),h(G("")),w(n),v(0),f(100),g(!1),N(!1),b(null),P.current=0,W.current=0,D.current&&(clearInterval(D.current),D.current=null),l.cancelSession()},[n,G,l]);return S.useEffect(()=>{if(!C||d||x){D.current&&(clearInterval(D.current),D.current=null);return}return D.current=setInterval(()=>{const O=(Date.now()-P.current)/1e3,K=Math.max(0,n-O);w(K),K<=0&&(N(!0),L(!1),b("miss"),D.current&&(clearInterval(D.current),D.current=null),l.endSession(!1),l.resetCombo(),s==null||s())},100),()=>{D.current&&(clearInterval(D.current),D.current=null)}},[C,d,x,n,l,s]),S.useEffect(()=>{h(G(""))},[G]),S.useEffect(()=>()=>{D.current&&clearInterval(D.current)},[]),[{typedChars:c,charStatuses:p,timeRemaining:m,wpm:y,accuracy:j,combo:l.combo,isComplete:d,isTimeout:x,feedbackMessage:k},{handleKeyPress:T,reset:I,start:$}]}const Lm={perfect:{color:"#FFD700",textShadow:"0 0 10px #FFD700, 0 0 20px #FFA500"},good:{color:"#4CAF50",textShadow:"0 0 10px #4CAF50"},miss:{color:"#FF4444",textShadow:"0 0 10px #FF4444"}},Im={perfect:"✨ Perfect! ✨",good:"👍 Good!",miss:"❌ Miss!"},Fm=({message:e,combo:t,showCombo:n=!0,onAnimationEnd:r})=>{const[a,s]=S.useState(!1),[i,l]=S.useState(!1),[c,u]=S.useState(t);return S.useEffect(()=>{if(e){s(!0);const p=setTimeout(()=>{s(!1),r==null||r()},1e3);return()=>clearTimeout(p)}},[e,r]),S.useEffect(()=>{if(t>c&&t>0){l(!0);const p=setTimeout(()=>l(!1),150);return u(t),()=>clearTimeout(p)}u(t)},[t,c]),o.jsxs("div",{className:"typing-feedback-container",children:[e&&a&&o.jsx("div",{className:"feedback-message",style:{...Lm[e],animation:"feedbackPop 0.5s ease-out forwards"},children:Im[e]}),n&&t>0&&o.jsxs("div",{className:`combo-display ${i?"bump":""}`,style:{color:t>=50?"#FFD700":t>=25?"#FFA500":t>=10?"#4CAF50":"#666"},children:[o.jsx("span",{className:"combo-icon",children:"🔥"}),o.jsxs("span",{className:"combo-text",children:["Combo x",t]}),t>=10&&o.jsx("span",{className:"combo-milestone",children:t>=100?"🏆":t>=50?"⭐":t>=25?"🌟":"✨"})]}),o.jsx("style",{children:`
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
      `})]})},wo=({targetWord:e,timeLimit:t,cropSlotId:n,cropType:r,autoStart:a=!0,weatherOverride:s,onComplete:i,onTimeout:l,onComboMilestone:c})=>{const u=S.useRef(null),p=S.useRef(null),h=je(k=>k.weather),m=s||h,w=S.useMemo(()=>bn.getEffectsForWeather(m),[m]),y=t*w.harvestTimeMultiplier,v={targetWord:e,timeLimit:y,cropSlotId:n,onComplete:i,onTimeout:l,onComboMilestone:c},[j,f]=_m(v);S.useEffect(()=>{u.current&&u.current.focus()},[]),S.useEffect(()=>{a&&f.start()},[a,f]);const d=S.useCallback(k=>{if(k.key!=="Tab"&&k.key!=="Escape"&&k.preventDefault(),k.key.length===1){f.handleKeyPress(k.key);const b=j.typedChars.length;k.key!==e[b]&&p.current&&(p.current.classList.add("screen-shake"),setTimeout(()=>{var C;(C=p.current)==null||C.classList.remove("screen-shake")},300))}},[f,j.typedChars.length,e]),g=S.useCallback(()=>{var k;(k=u.current)==null||k.focus()},[]),x=k=>k.toFixed(1),N=j.timeRemaining<=3&&j.timeRemaining>0;return o.jsxs("div",{ref:p,className:"typing-area",onClick:g,children:[r&&o.jsxs("div",{className:"crop-header",children:[o.jsx("span",{className:"crop-emoji",children:r.emoji}),o.jsx("span",{className:"crop-label",children:"目前作物："}),o.jsx("span",{className:"crop-name",children:r.name})]}),o.jsxs("div",{className:`word-container ${w.typingEffect==="shaking"?"weather-shaking":""} ${m==="rainbow"?"rainbow-shimmer":""}`,children:[o.jsx("div",{className:"target-word",children:e.split("").map((k,b)=>{const C=w.typingEffect==="foggy"&&b>j.typedChars.length&&Math.random()<.3;return o.jsx("span",{className:`char char-${j.charStatuses[b]||"pending"} ${C?"foggy-hidden":""}`,children:C?"█":k},b)})}),o.jsx("div",{className:`hint-text ${w.typingEffect==="foggy"?"foggy-hint":""}`,children:w.typingEffect==="foggy"?"(some letters hidden)":e})]}),o.jsx("input",{ref:u,type:"text",className:"hidden-input",onKeyDown:d,autoComplete:"off",autoCapitalize:"off",autoCorrect:"off",spellCheck:!1,"aria-label":"Type the word"}),o.jsx(Fm,{message:j.feedbackMessage,combo:j.combo,showCombo:!0}),m!=="sunny"&&o.jsxs("div",{className:`weather-indicator weather-${m}`,children:[o.jsxs("span",{className:"weather-emoji",children:[m==="rainy"&&"🌧️",m==="stormy"&&"⛈️",m==="snowy"&&"❄️",m==="foggy"&&"🌫️",m==="rainbow"&&"🌈"]}),o.jsxs("span",{className:"weather-effect",children:[m==="stormy"&&"Text shaking!",m==="snowy"&&`Time: ${Math.round(w.harvestTimeMultiplier*100)}%`,m==="foggy"&&"Letters hidden!",m==="rainbow"&&`Time: x${w.harvestTimeMultiplier}`,m==="rainy"&&"Growth +20%"]})]}),o.jsxs("div",{className:"stats-row",children:[o.jsxs("div",{className:`stat timer ${N?"timer-warning":""}`,children:[o.jsx("span",{className:"stat-icon",children:"⏱️"}),o.jsx("span",{className:"stat-label",children:"剩餘"}),o.jsxs("span",{className:"stat-value",children:[x(j.timeRemaining)," 秒"]})]}),o.jsxs("div",{className:"stat accuracy",children:[o.jsx("span",{className:"stat-icon",children:"✅"}),o.jsx("span",{className:"stat-label",children:"正確率"}),o.jsxs("span",{className:"stat-value",children:[j.accuracy,"%"]})]})]}),o.jsxs("div",{className:"stats-row",children:[o.jsxs("div",{className:"stat combo",children:[o.jsx("span",{className:"stat-icon",children:"🔥"}),o.jsx("span",{className:"stat-label",children:"Combo"}),o.jsxs("span",{className:"stat-value",children:["x",j.combo]})]}),o.jsxs("div",{className:"stat wpm",children:[o.jsx("span",{className:"stat-icon",children:"⚡"}),o.jsx("span",{className:"stat-label",children:"WPM"}),o.jsx("span",{className:"stat-value",children:j.wpm})]})]}),j.isComplete&&o.jsx("div",{className:"status-complete",children:"✅ 完成!"}),j.isTimeout&&o.jsx("div",{className:"status-timeout",children:"⏰ 時間到!"}),o.jsx("style",{children:`
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
      `})]})},Dm={seed:{icon:"🟤",bgColor:"#8B4513",animation:"animate-seed-wiggle",label:"種子"},sprout:{icon:"🌱",bgColor:"#90EE90",animation:"animate-sprout-grow",label:"發芽"},growing:{icon:"🌿",bgColor:"#32CD32",animation:"animate-leaf-sway",label:"生長中"},mature:{icon:"",bgColor:"#FFD700",animation:"animate-mature-glow",label:"成熟!",particleColor:"#FFD700"},overripe:{icon:"",bgColor:"#FFA500",animation:"animate-overripe-shake",label:"過熟!"},withered:{icon:"🥀",bgColor:"#808080",animation:"animate-wither-fade",label:"枯萎"}},Rm=({crop:e,row:t,col:n,isSelected:r,onClick:a,onHarvest:s})=>{const[i,l]=S.useState(null),[c,u]=S.useState(!1),[p,h]=S.useState(!1);S.useEffect(()=>{e&&i!==e.growthStage&&(i!==null&&(u(!0),setTimeout(()=>u(!1),500)),l(e.growthStage))},[e==null?void 0:e.growthStage,i]);const m=e?Dm[e.growthStage]:null,w=S.useMemo(()=>e?e.growthStage==="mature"||e.growthStage==="overripe"?e.cropType.emoji:e.growthStage==="withered"?"🥀":(m==null?void 0:m.icon)||"🟤":null,[e,m]),y=e&&e.waterLevel<20,v=(e==null?void 0:e.growthStage)==="mature",j=(e==null?void 0:e.growthStage)==="overripe",f=()=>{v&&s?(h(!0),setTimeout(()=>{s(),h(!1)},800)):a()},d=()=>p?"harvesting":c?"transitioning":(m==null?void 0:m.animation)||"";return o.jsxs("div",{className:`crop-slot ${r?"selected":""} ${e?"has-crop":"empty"}`,onClick:f,"data-row":t,"data-col":n,children:[!e&&o.jsxs("div",{className:"empty-slot",children:[o.jsx("span",{className:"plus-icon",children:"+"}),o.jsx("span",{className:"dirt-texture",children:"🟫"})]}),e&&o.jsxs("div",{className:`crop-display ${d()}`,children:[v&&o.jsxs("div",{className:"sparkle-container",children:[o.jsx("span",{className:"sparkle s1",children:"✨"}),o.jsx("span",{className:"sparkle s2",children:"⭐"}),o.jsx("span",{className:"sparkle s3",children:"✨"})]}),o.jsx("span",{className:`crop-emoji ${p?"harvest-fly":""}`,children:w}),o.jsx("div",{className:"progress-bar-container",children:o.jsx("div",{className:`progress-bar ${e.growthStage}`,style:{width:`${Math.min(100,e.growthProgress)}%`}})}),o.jsx("span",{className:`stage-label ${c?"stage-change":""}`,children:m==null?void 0:m.label}),y&&o.jsx("div",{className:"water-warning",children:"💧"}),v&&!p&&o.jsx("div",{className:"ready-indicator",children:o.jsx("span",{className:"harvest-text",children:"Click!"})}),j&&o.jsx("div",{className:"warning-indicator",children:"⚠️"})]}),o.jsx("style",{children:`
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
      `})]})};class Om{constructor(){pe(this,"updateInterval",null);pe(this,"lastUpdateTime",0);pe(this,"isRunning",!1)}start(){this.isRunning||(this.isRunning=!0,this.lastUpdateTime=Date.now(),console.log("[CropSystem] Started"))}stop(){this.isRunning=!1,this.updateInterval!==null&&(clearInterval(this.updateInterval),this.updateInterval=null),console.log("[CropSystem] Stopped")}updateCrops(){if(!this.isRunning)return;const t=Date.now(),n=t-this.lastUpdateTime;this.lastUpdateTime=t,xe.getState().updateCropGrowth(n)}plantCrop(t,n,r){const a=xe.getState();return a.plantCrop(t,n,r)?a.getCropAt(t,n):null}calculateGrowthStage(t){if(t.health<=0)return"withered";const n=t.growthProgress;return n>=140?"withered":n>=120?"overripe":n>=80?"mature":n>=40?"growing":n>=20?"sprout":"seed"}calculateGrowthProgress(t){const n=Date.now()-t.plantedAt,r=t.cropType.growthTime;let a=n/r*100;return t.waterLevel<20&&(a*=.5),t.fertilizerLevel>0&&(a*=1+t.fertilizerLevel/400),Math.min(150,a)}isHarvestable(t){return t.growthStage==="mature"}canHarvest(t){return t.growthStage==="mature"||t.growthStage==="overripe"}getSellPriceMultiplier(t){switch(t.growthStage){case"mature":return 1;case"overripe":return .5;case"withered":return 0;default:return 0}}calculateSellPrice(t){const n=t.cropType.sellPrice,r=this.getSellPriceMultiplier(t);return Math.floor(n*r)}harvestCrop(t,n){const r=xe.getState(),a=r.getCropAt(t,n);if(!a)return{success:!1};if(!this.canHarvest(a))return{success:!1};const s=this.calculateSellPrice(a),i=r.harvestCrop(t,n);return i?{success:!0,crop:i,price:s}:{success:!1}}waterCrop(t,n){xe.getState().waterCrop(t,n)}fertilizeCrop(t,n){xe.getState().fertilizeCrop(t,n)}getTimeToNextStage(t){const n=t.growthProgress;let r;if(n<20)r=20;else if(n<40)r=40;else if(n<80)r=80;else if(n<100)r=100;else return 0;const a=r-n;let i=100/t.cropType.growthTime;return t.waterLevel<20&&(i*=.5),t.fertilizerLevel>0&&(i*=1+t.fertilizerLevel/400),a/i/1e3}getCropsNeedingAttention(){const t=xe.getState(),{grid:n}=t,r=[];return n.forEach((a,s)=>{a.forEach((i,l)=>{i&&(i.waterLevel<20&&r.push({row:s,col:l,crop:i,reason:"needs_water"}),i.growthStage==="overripe"&&r.push({row:s,col:l,crop:i,reason:"overripe"}),i.growthStage==="mature"&&r.push({row:s,col:l,crop:i,reason:"ready_harvest"}))})}),r}getCropById(t){return Ae[t]}}const it=new Om,$m={seed:{label:"種子",color:"#8B4513",emoji:"🟤"},sprout:{label:"發芽",color:"#90EE90",emoji:"🌱"},growing:{label:"生長中",color:"#32CD32",emoji:"🌿"},mature:{label:"成熟",color:"#FFD700",emoji:"✨"},overripe:{label:"過熟",color:"#FFA500",emoji:"⚠️"},withered:{label:"枯萎",color:"#808080",emoji:"💀"}},Am=({crop:e,onHarvest:t,onWater:n,onFertilize:r,onClose:a})=>{const s=$m[e.growthStage],i=it.calculateSellPrice(e),l=it.canHarvest(e),c=it.getTimeToNextStage(e),u=e.waterLevel<20,p=m=>{if(m<=0)return"準備完成!";const w=Math.floor(m/60),y=Math.floor(m%60);return`${w}:${y.toString().padStart(2,"0")}`},h=()=>"⭐".repeat(e.cropType.difficulty);return o.jsxs("div",{className:"crop-info-card",children:[o.jsxs("div",{className:"card-header",children:[o.jsxs("div",{className:"crop-identity",children:[o.jsx("span",{className:"crop-emoji-large",children:e.cropType.emoji}),o.jsxs("div",{className:"crop-details",children:[o.jsx("h3",{className:"crop-name",children:e.cropType.name}),o.jsx("span",{className:"difficulty",children:h()})]})]}),a&&o.jsx("button",{className:"close-btn",onClick:a,children:"✕"})]}),o.jsxs("div",{className:"info-section",children:[o.jsx("div",{className:"section-label",children:"生長階段"}),o.jsxs("div",{className:"growth-stage",style:{color:s.color},children:[o.jsx("span",{className:"stage-emoji",children:s.emoji}),o.jsx("span",{className:"stage-label",children:s.label})]}),o.jsxs("div",{className:"progress-container",children:[o.jsx("div",{className:"progress-track",children:o.jsx("div",{className:"progress-fill",style:{width:`${Math.min(100,e.growthProgress)}%`,backgroundColor:s.color}})}),o.jsxs("span",{className:"progress-text",children:[Math.floor(e.growthProgress),"%"]})]}),e.growthStage!=="mature"&&e.growthStage!=="overripe"&&e.growthStage!=="withered"&&o.jsxs("div",{className:"time-remaining",children:[o.jsx("span",{className:"time-icon",children:"⏱️"}),o.jsxs("span",{children:["下一階段: ",p(c)]})]})]}),o.jsxs("div",{className:"info-section",children:[o.jsx("div",{className:"section-label",children:"狀態"}),o.jsxs("div",{className:`status-row ${u?"warning":""}`,children:[o.jsx("span",{className:"status-icon",children:"💧"}),o.jsx("span",{className:"status-label",children:"水分"}),o.jsx("div",{className:"status-bar",children:o.jsx("div",{className:"status-fill water",style:{width:`${e.waterLevel}%`}})}),o.jsxs("span",{className:"status-value",children:[Math.floor(e.waterLevel),"%"]})]}),o.jsxs("div",{className:"status-row",children:[o.jsx("span",{className:"status-icon",children:"🌿"}),o.jsx("span",{className:"status-label",children:"肥料"}),o.jsx("div",{className:"status-bar",children:o.jsx("div",{className:"status-fill fertilizer",style:{width:`${e.fertilizerLevel}%`}})}),o.jsxs("span",{className:"status-value",children:[Math.floor(e.fertilizerLevel),"%"]})]}),o.jsxs("div",{className:`status-row ${e.health<50?"warning":""}`,children:[o.jsx("span",{className:"status-icon",children:"❤️"}),o.jsx("span",{className:"status-label",children:"健康"}),o.jsx("div",{className:"status-bar",children:o.jsx("div",{className:"status-fill health",style:{width:`${e.health}%`}})}),o.jsxs("span",{className:"status-value",children:[Math.floor(e.health),"%"]})]})]}),o.jsxs("div",{className:"info-section",children:[o.jsx("div",{className:"section-label",children:"收成資訊"}),o.jsxs("div",{className:"sell-info",children:[o.jsx("span",{className:"sell-icon",children:"💰"}),o.jsx("span",{className:"sell-label",children:"預計售價:"}),o.jsxs("span",{className:`sell-price ${e.growthStage==="overripe"?"reduced":""}`,children:[i," 金幣",e.growthStage==="overripe"&&o.jsx("span",{className:"price-note",children:"(減半)"})]})]}),l&&o.jsxs("div",{className:"harvest-word",children:[o.jsx("span",{className:"word-label",children:"收成打字:"}),o.jsx("span",{className:"word-preview",children:e.wordToHarvest})]})]}),o.jsxs("div",{className:"action-buttons",children:[o.jsx("button",{className:"action-btn water-btn",onClick:n,disabled:e.waterLevel>=100,children:"💧 澆水"}),o.jsx("button",{className:"action-btn fertilize-btn",onClick:r,disabled:e.fertilizerLevel>=100,children:"🌿 施肥"}),l&&o.jsx("button",{className:"action-btn harvest-btn",onClick:t,children:"🌾 收成"})]}),u&&o.jsx("div",{className:"warning-banner water-warning",children:"💧 需要澆水！生長速度已減慢"}),e.growthStage==="overripe"&&o.jsx("div",{className:"warning-banner overripe-warning",children:"⚠️ 過熟中！快收成否則會枯萎"}),e.growthStage==="withered"&&o.jsx("div",{className:"warning-banner withered-warning",children:"💀 已枯萎，無法收成"}),o.jsx("style",{children:`
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
      `})]})},Wm=({row:e,col:t,onPlant:n,onClose:r})=>{const{gold:a,inventory:s,unlockedCrops:i}=Oe(),l=y=>{const v=s.find(j=>j.type==="seed"&&j.cropTypeId===y);return(v==null?void 0:v.quantity)||0},c=y=>{if(!i.includes(y))return!1;if(l(y)>0)return!0;const j=Sr[y]||0;return a>=j},u=y=>"⭐".repeat(y),p=y=>{const v=y/1e3;return v<60?`${v}秒`:`${Math.floor(v/60)}分鐘`},h=y=>{c(y.id)&&n(y)},m=Object.values(Ae).filter(y=>i.includes(y.id)).sort((y,v)=>y.difficulty-v.difficulty),w=Object.values(Ae).filter(y=>!i.includes(y.id)).sort((y,v)=>y.difficulty-v.difficulty);return o.jsx("div",{className:"modal-overlay",onClick:r,children:o.jsxs("div",{className:"modal-content",onClick:y=>y.stopPropagation(),children:[o.jsxs("div",{className:"modal-header",children:[o.jsx("h2",{children:"🌱 選擇種子"}),o.jsxs("span",{className:"slot-info",children:["種植位置: (",e+1,", ",t+1,")"]}),o.jsx("button",{className:"close-btn",onClick:r,children:"✕"})]}),o.jsxs("div",{className:"gold-display",children:[o.jsx("span",{className:"gold-icon",children:"💰"}),o.jsxs("span",{className:"gold-amount",children:[a," 金幣"]})]}),o.jsx("div",{className:"crop-grid",children:m.map(y=>{const v=l(y.id),j=Sr[y.id]||0,f=v>0||a>=j,d=c(y.id);return o.jsxs("div",{className:`crop-card ${d?"":"disabled"}`,onClick:()=>h(y),children:[o.jsx("span",{className:"crop-emoji",children:y.emoji}),o.jsx("span",{className:"crop-name",children:y.name}),o.jsx("span",{className:"difficulty",children:u(y.difficulty)}),o.jsxs("div",{className:"crop-stats",children:[o.jsxs("div",{className:"stat",children:[o.jsx("span",{className:"stat-icon",children:"⏱️"}),o.jsx("span",{children:p(y.growthTime)})]}),o.jsxs("div",{className:"stat",children:[o.jsx("span",{className:"stat-icon",children:"💰"}),o.jsx("span",{children:y.sellPrice})]})]}),o.jsx("div",{className:"seed-info",children:v>0?o.jsxs("span",{className:"seed-count",children:["🌱 擁有: ",v]}):o.jsxs("span",{className:`seed-price ${f?"":"expensive"}`,children:["購買: ",j," 💰"]})}),d&&o.jsx("div",{className:"plant-indicator",children:"點擊種植"})]},y.id)})}),w.length>0&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"section-divider",children:o.jsx("span",{children:"🔒 未解鎖的作物"})}),o.jsx("div",{className:"crop-grid locked",children:w.map(y=>o.jsxs("div",{className:"crop-card locked",children:[o.jsx("span",{className:"crop-emoji",children:y.emoji}),o.jsx("span",{className:"crop-name",children:y.name}),o.jsx("span",{className:"difficulty",children:u(y.difficulty)}),o.jsx("div",{className:"lock-overlay",children:o.jsx("span",{className:"lock-icon",children:"🔒"})})]},y.id))})]}),o.jsx("div",{className:"modal-footer",children:o.jsx("span",{className:"tip",children:"💡 提示: 難度越高的作物，打字時間越短但售價越高！"})}),o.jsx("style",{children:`
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
        `})]})})},Bm=({crop:e,row:t,col:n,onClose:r,onSuccess:a,onFail:s})=>{const[i,l]=S.useState("ready"),[c,u]=S.useState(0),[p,h]=S.useState({wpm:0,accuracy:0,combo:0}),{addGold:m,updateStats:w,addToInventory:y,addXP:v}=Oe(),{removeCrop:j}=xe(),f=it.calculateSellPrice(e),d=S.useCallback(k=>{l("success"),h(k);const b=Math.floor(f*(k.combo*.1)),C=f+b;u(C),m(C);const P=k.accuracy>=100?20:5;v(P),w({totalWordsTyped:Oe.getState().stats.totalWordsTyped+1,totalCropsHarvested:Oe.getState().stats.totalCropsHarvested+1,bestCombo:Math.max(Oe.getState().stats.bestCombo,k.combo)}),y({type:"crop",cropTypeId:e.cropType.id,quantity:1}),j(t,n),a(C,e)},[f,m,v,w,y,j,t,n,e,a]),g=S.useCallback(()=>{l("failed"),xe.getState().getCropAt(t,n),s()},[t,n,s]),x=S.useCallback(k=>{console.log(`Combo milestone reached: ${k}!`)},[]),N=()=>{l("typing")};return o.jsx("div",{className:"modal-overlay",children:o.jsxs("div",{className:"harvest-modal",children:[i==="ready"&&o.jsxs("div",{className:"ready-content",children:[o.jsxs("div",{className:"crop-preview",children:[o.jsx("span",{className:"crop-emoji-large",children:e.cropType.emoji}),o.jsx("h2",{children:e.cropType.name})]}),o.jsxs("div",{className:"harvest-info",children:[o.jsxs("p",{className:"word-preview",children:["打字收成: ",o.jsx("strong",{children:e.wordToHarvest})]}),o.jsxs("p",{className:"time-limit",children:["時間限制: ",o.jsxs("strong",{children:[e.cropType.harvestTimeLimit,"秒"]})]}),o.jsxs("p",{className:"reward",children:["獎勵: ",o.jsxs("strong",{children:[f," 💰"]})]})]}),o.jsxs("div",{className:"action-buttons",children:[o.jsx("button",{className:"start-btn",onClick:N,children:"🌾 開始收成!"}),o.jsx("button",{className:"cancel-btn",onClick:r,children:"取消"})]})]}),i==="typing"&&o.jsx("div",{className:"typing-content",children:o.jsx(wo,{targetWord:e.wordToHarvest,timeLimit:e.cropType.harvestTimeLimit,cropSlotId:e.id,cropType:e.cropType,autoStart:!0,onComplete:d,onTimeout:g,onComboMilestone:x})}),i==="success"&&o.jsxs("div",{className:"success-content",children:[o.jsx("div",{className:"success-icon",children:"🎉"}),o.jsx("h2",{children:"收成成功!"}),o.jsx("div",{className:"crop-harvested",children:o.jsx("span",{className:"crop-emoji-large",children:e.cropType.emoji})}),o.jsxs("div",{className:"rewards-summary",children:[o.jsxs("div",{className:"reward-row",children:[o.jsx("span",{children:"基本獎勵:"}),o.jsxs("span",{className:"gold",children:[f," 💰"]})]}),p.combo>1&&o.jsxs("div",{className:"reward-row bonus",children:[o.jsxs("span",{children:["連擊加成 (x",p.combo,"):"]}),o.jsxs("span",{className:"gold",children:["+",c-f," 💰"]})]}),o.jsxs("div",{className:"reward-row total",children:[o.jsx("span",{children:"總計:"}),o.jsxs("span",{className:"gold",children:[c," 💰"]})]})]}),o.jsxs("div",{className:"typing-stats",children:[o.jsxs("div",{className:"stat",children:[o.jsx("span",{className:"stat-label",children:"速度"}),o.jsxs("span",{className:"stat-value",children:[p.wpm," WPM"]})]}),o.jsxs("div",{className:"stat",children:[o.jsx("span",{className:"stat-label",children:"正確率"}),o.jsxs("span",{className:"stat-value",children:[p.accuracy,"%"]})]}),o.jsxs("div",{className:"stat",children:[o.jsx("span",{className:"stat-label",children:"連擊"}),o.jsxs("span",{className:"stat-value",children:["x",p.combo]})]})]}),o.jsx("button",{className:"close-btn-primary",onClick:r,children:"繼續"})]}),i==="failed"&&o.jsxs("div",{className:"failed-content",children:[o.jsx("div",{className:"failed-icon",children:"😢"}),o.jsx("h2",{children:"時間到!"}),o.jsx("p",{className:"failed-message",children:"收成失敗，作物狀態已下降"}),o.jsx("button",{className:"close-btn-primary",onClick:r,children:"再試一次"})]}),o.jsx("style",{children:`
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
        `})]})})},Um=()=>{const{grid:e,gridSize:t,selectedSlot:n,selectSlot:r,clearSelection:a,plantCrop:s,waterCrop:i,fertilizeCrop:l}=xe(),{spendGold:c,inventory:u,removeFromInventory:p}=Oe(),[h,m]=S.useState(!1),[w,y]=S.useState(!1),[v,j]=S.useState(null),[f,d]=S.useState(null),[g,x]=S.useState(null),N=S.useCallback((z,_="info")=>{x({message:z,type:_}),setTimeout(()=>x(null),3e3)},[]),k=S.useCallback((z,_)=>{e[z][_]?(n==null?void 0:n.row)===z&&(n==null?void 0:n.col)===_?a():r(z,_):(j({row:z,col:_}),m(!0))},[e,n,r,a]),b=S.useCallback(z=>{if(!v)return;const{row:_,col:$}=v,T=u.find(F=>F.type==="seed"&&F.cropTypeId===z.id);if(T&&T.quantity>0)p(T.id,1);else{const F=Sr[z.id]||0;if(!c(F)){N("金幣不足!","error");return}}s(_,$,z)?N(`種植了 ${z.emoji} ${z.name}!`,"success"):N("種植失敗!","error"),m(!1),j(null)},[v,u,p,c,s,N]),C=S.useCallback(()=>{n&&(i(n.row,n.col),N("💧 澆水完成!","info"))},[n,i,N]),L=S.useCallback(()=>{n&&(l(n.row,n.col),N("🌿 施肥完成!","info"))},[n,l,N]),P=S.useCallback(()=>{if(!n)return;const z=e[n.row][n.col];!z||!it.canHarvest(z)||(d({crop:z,row:n.row,col:n.col}),y(!0))},[n,e]),W=S.useCallback((z,_)=>{N(`🎉 收成 ${_.cropType.emoji} 獲得 ${z} 金幣!`,"success"),a()},[N,a]),D=S.useCallback(()=>{N("😢 收成失敗，下次加油!","error")},[N]),Y=S.useCallback(()=>{y(!1),d(null)},[]),G=n?e[n.row][n.col]:null;return o.jsxs("div",{className:"farm-container",children:[g&&o.jsx("div",{className:`notification ${g.type}`,children:g.message}),o.jsxs("div",{className:"farm-layout",children:[o.jsxs("div",{className:"farm-grid-container",children:[o.jsx("h2",{className:"farm-title",children:"🌾 我的農場"}),o.jsx("div",{className:"farm-grid",style:{gridTemplateColumns:`repeat(${t.cols}, 1fr)`,gridTemplateRows:`repeat(${t.rows}, 1fr)`},children:e.map((z,_)=>z.map(($,T)=>o.jsx(Rm,{crop:$,row:_,col:T,isSelected:(n==null?void 0:n.row)===_&&(n==null?void 0:n.col)===T,onClick:()=>k(_,T)},`${_}-${T}`)))})]}),o.jsx("div",{className:"info-panel",children:G?o.jsx(Am,{crop:G,onHarvest:P,onWater:C,onFertilize:L,onClose:a}):o.jsxs("div",{className:"no-selection",children:[o.jsx("div",{className:"hint-icon",children:"👆"}),o.jsx("p",{children:"選擇一個農田格子"}),o.jsxs("p",{className:"hint",children:["點擊空格子種植",o.jsx("br",{}),"點擊作物查看資訊"]})]})})]}),h&&v&&o.jsx(Wm,{row:v.row,col:v.col,onPlant:b,onClose:()=>{m(!1),j(null)}}),w&&f&&o.jsx(Bm,{crop:f.crop,row:f.row,col:f.col,onClose:Y,onSuccess:W,onFail:D}),o.jsx("style",{children:`
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
      `})]})},Hm=({weather:e})=>o.jsxs("div",{className:`weather-overlay weather-${e}`,children:[e==="sunny"&&o.jsxs("div",{className:"sunny-effects",children:[o.jsx("div",{className:"sun-rays"}),[...Array(20)].map((t,n)=>o.jsx("div",{className:"sun-particle",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*5}s`,animationDuration:`${3+Math.random()*4}s`}},n))]}),e==="rainy"&&o.jsx("div",{className:"rain-effects",children:[...Array(100)].map((t,n)=>o.jsx("div",{className:"raindrop",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*2}s`,animationDuration:`${.5+Math.random()*.5}s`}},n))}),e==="stormy"&&o.jsxs("div",{className:"storm-effects",children:[o.jsx("div",{className:"storm-overlay"}),[...Array(150)].map((t,n)=>o.jsx("div",{className:"storm-rain",style:{left:`${Math.random()*120}%`,animationDelay:`${Math.random()*1}s`,animationDuration:`${.3+Math.random()*.3}s`}},n)),o.jsx("div",{className:"lightning"})]}),e==="snowy"&&o.jsx("div",{className:"snow-effects",children:[...Array(50)].map((t,n)=>o.jsx("div",{className:"snowflake",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*5}s`,animationDuration:`${3+Math.random()*4}s`,fontSize:`${8+Math.random()*12}px`},children:"❄"},n))}),e==="foggy"&&o.jsxs("div",{className:"fog-effects",children:[o.jsx("div",{className:"fog-layer fog-layer-1"}),o.jsx("div",{className:"fog-layer fog-layer-2"}),o.jsx("div",{className:"fog-layer fog-layer-3"})]}),e==="rainbow"&&o.jsxs("div",{className:"rainbow-effects",children:[o.jsx("div",{className:"rainbow-arc"}),[...Array(30)].map((t,n)=>o.jsx("div",{className:"sparkle",style:{left:`${Math.random()*100}%`,top:`${Math.random()*60}%`,animationDelay:`${Math.random()*3}s`},children:"✨"},n))]}),o.jsx("style",{children:`
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
      `})]}),Gm=({weather:e,showForecast:t=!0,forecast:n=[]})=>{const[r,a]=S.useState(!1),[s,i]=S.useState(!1),l=vo[e];return o.jsxs("div",{className:"weather-icon-container",onMouseEnter:()=>a(!0),onMouseLeave:()=>{a(!1),i(!1)},onClick:()=>t&&i(!s),children:[o.jsx("div",{className:`weather-icon weather-${e}`,children:o.jsx("span",{className:"weather-emoji",children:l.emoji})}),r&&!s&&o.jsxs("div",{className:"weather-tooltip",children:[o.jsxs("div",{className:"tooltip-header",children:[o.jsx("span",{className:"tooltip-emoji",children:l.emoji}),o.jsx("span",{className:"tooltip-name",children:l.name})]}),o.jsx("div",{className:"tooltip-effect",children:l.effect}),t&&o.jsx("div",{className:"tooltip-hint",children:"Click for forecast"})]}),s&&n.length>0&&o.jsxs("div",{className:"forecast-panel",children:[o.jsx("div",{className:"forecast-title",children:"Weather Forecast"}),o.jsx("div",{className:"forecast-list",children:n.map(({weather:c,probability:u})=>{const p=vo[c];return o.jsxs("div",{className:"forecast-item",children:[o.jsx("span",{className:"forecast-emoji",children:p.emoji}),o.jsx("span",{className:"forecast-name",children:p.name}),o.jsxs("span",{className:"forecast-probability",children:[u,"%"]})]},c)})})]}),o.jsx("style",{children:`
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
      `})]})},$l=["crow","bird","shoo","away","scat","flee","chase","scary","quick","fast","guard","help","watch","alert","save","crops","farm","pest"];class Vm{constructor(){pe(this,"crows",[]);pe(this,"spawnInterval",null);pe(this,"updateInterval",null);pe(this,"isRunning",!1);pe(this,"MIN_SPAWN_INTERVAL",30*1e3);pe(this,"MAX_SPAWN_INTERVAL",60*1e3);pe(this,"STEAL_TIME",10*1e3)}start(){this.isRunning||(this.isRunning=!0,this.scheduleNextSpawn(),this.startUpdateLoop(),console.log("[CrowSystem] Started"))}stop(){this.isRunning=!1,this.spawnInterval!==null&&(clearTimeout(this.spawnInterval),this.spawnInterval=null),this.updateInterval!==null&&(clearInterval(this.updateInterval),this.updateInterval=null),console.log("[CrowSystem] Stopped")}scheduleNextSpawn(){if(!this.isRunning)return;let t=this.MIN_SPAWN_INTERVAL+Math.random()*(this.MAX_SPAWN_INTERVAL-this.MIN_SPAWN_INTERVAL);je.getState().hasScarecrow&&(t*=2),this.spawnInterval=window.setTimeout(()=>{this.spawnCrow(),this.scheduleNextSpawn()},t)}startUpdateLoop(){this.updateInterval=window.setInterval(()=>{this.update()},1e3)}spawnCrow(){const n=xe.getState().getMatureCrops();if(n.length===0)return console.log("[CrowSystem] No mature crops to attack"),null;const r=n[Math.floor(Math.random()*n.length)];if(this.crows.find(i=>i.targetSlot.row===r.row&&i.targetSlot.col===r.col))return console.log("[CrowSystem] Slot already has a crow"),null;const s={id:`crow-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,targetSlot:{row:r.row,col:r.col},landedAt:Date.now(),wordToChase:$l[Math.floor(Math.random()*$l.length)],isBeingChased:!1};return this.crows.push(s),je.getState().addCrow(s),console.log(`[CrowSystem] Crow spawned at (${r.row}, ${r.col})`),s}getCrows(){return[...this.crows]}getCrow(t){return this.crows.find(n=>n.id===t)}getCrowAtSlot(t,n){return this.crows.find(r=>r.targetSlot.row===t&&r.targetSlot.col===n)}startChasing(t){const n=this.crows.find(r=>r.id===t);n&&(n.isBeingChased=!0,console.log(`[CrowSystem] Started chasing crow ${t}`))}chaseCrow(t){const n=this.crows.findIndex(r=>r.id===t);n!==-1&&(this.crows.splice(n,1),je.getState().removeCrow(t),console.log(`[CrowSystem] Crow ${t} chased away!`))}crowSteals(t){const n=this.crows.find(a=>a.id===t);if(!n)return;xe.getState().removeCrop(n.targetSlot.row,n.targetSlot.col),this.crows=this.crows.filter(a=>a.id!==t),je.getState().removeCrow(t),console.log(`[CrowSystem] Crow ${t} stole crop at (${n.targetSlot.row}, ${n.targetSlot.col})!`)}update(){if(!this.isRunning)return;const t=Date.now();for(const n of[...this.crows]){if(n.isBeingChased)continue;t-n.landedAt>=this.STEAL_TIME&&this.crowSteals(n.id)}}getTimeRemaining(t){const n=this.crows.find(s=>s.id===t);if(!n)return 0;const r=Date.now()-n.landedAt,a=this.STEAL_TIME-r;return Math.max(0,Math.ceil(a/1e3))}clearAllCrows(){this.crows=[];const t=je.getState();for(const n of t.activeCrows)t.removeCrow(n.id);console.log("[CrowSystem] All crows cleared")}hasActiveCrows(){return this.crows.length>0}}const lt=new Vm,Xm=({crow:e,onChase:t,onDismiss:n})=>{const[r,a]=S.useState(10),s=xe(c=>c.getCropAt(e.targetSlot.row,e.targetSlot.col));S.useEffect(()=>{const c=setInterval(()=>{const u=lt.getTimeRemaining(e.id);a(u),u<=0&&(clearInterval(c),n==null||n(e.id))},100);return()=>clearInterval(c)},[e.id,n]);const i=(s==null?void 0:s.cropType.name)||"crop",l=(s==null?void 0:s.cropType.emoji)||"🌱";return o.jsxs("div",{className:`crow-alert ${r<=3?"urgent":""}`,children:[o.jsxs("div",{className:"alert-header",children:[o.jsx("span",{className:"alert-icon",children:"🐦"}),o.jsx("span",{className:"alert-title",children:"Crow Attack!"})]}),o.jsxs("div",{className:"alert-message",children:["A crow is attacking your ",l," ",i,"!"]}),o.jsxs("div",{className:"alert-timer",children:[o.jsx("div",{className:"timer-bar",style:{width:`${r/10*100}%`}}),o.jsxs("span",{className:"timer-text",children:[r,"s"]})]}),o.jsxs("div",{className:"alert-word",children:['Type "',o.jsx("span",{className:"word",children:e.wordToChase}),'" to chase!']}),o.jsx("button",{className:"chase-button",onClick:()=>t(e.id),children:"🏃 Chase Crow"}),o.jsx("style",{children:`
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
      `})]})},Ym=({className:e=""})=>{const{gold:t,gems:n,reputation:r,level:a,xp:s}=Oe(),{setScreen:i}=Ot(),[l,c]=S.useState(t),[u,p]=S.useState(0),[h,m]=S.useState(!1),[w,y]=S.useState(null),[v,j]=S.useState(s),[f,d]=S.useState(0),[g,x]=S.useState(!1),[N,k]=S.useState(!1),[b,C]=S.useState(!1),L=S.useRef(a);S.useEffect(()=>{if(t!==l){const D=t-l;p(D),m(!0),y(D>0?"positive":"negative");const Y=10,G=D/Y;let z=l,_=0;const $=setInterval(()=>{_++,_>=Y?(c(t),clearInterval($)):(z+=G,c(Math.round(z)))},50),T=setTimeout(()=>{m(!1),y(null)},1500);return()=>{clearInterval($),clearTimeout(T)}}},[t,l]),S.useEffect(()=>{if(s!==v){const D=s-v;D>0&&(d(D),x(!0),k(!0));const Y=15,G=(s-v)/Y;let z=v,_=0;const $=setInterval(()=>{_++,_>=Y?(j(s),clearInterval($)):(z+=G,j(Math.round(z)))},40),T=setTimeout(()=>{x(!1),k(!1)},1500);return()=>{clearInterval($),clearTimeout(T)}}},[s,v]),S.useEffect(()=>{a>L.current&&(C(!0),setTimeout(()=>C(!1),1e3)),L.current=a},[a]);const P=id*a,W=v/P*100;return o.jsxs("div",{className:`stats-bar ${e}`,children:[o.jsxs("div",{className:`stat-item gold-stat ${w?`flash-${w}`:""}`,children:[o.jsx("span",{className:"stat-icon coin-icon",children:"🪙"}),o.jsx("span",{className:"stat-value",children:l.toLocaleString()}),h&&o.jsxs("span",{className:`stat-delta ${u>=0?"positive":"negative"}`,children:[u>=0?"+":"",u]}),h&&u>0&&o.jsxs("div",{className:"floating-coins",children:[o.jsx("span",{className:"floating-coin fc1",children:"🪙"}),o.jsx("span",{className:"floating-coin fc2",children:"🪙"}),o.jsx("span",{className:"floating-coin fc3",children:"🪙"})]})]}),o.jsxs("div",{className:"stat-item gems-stat",children:[o.jsx("span",{className:"stat-icon gem-icon",children:"💎"}),o.jsx("span",{className:"stat-value",children:n})]}),o.jsxs("div",{className:"stat-item reputation-stat",children:[o.jsx("span",{className:"stat-icon star-icon",children:"🌟"}),o.jsx("span",{className:"stat-value",children:r})]}),o.jsxs("div",{className:`stat-item level-stat ${b?"level-up-burst":""}`,children:[o.jsxs("div",{className:"level-header",children:[o.jsx("span",{className:"stat-icon",children:"📊"}),o.jsxs("span",{className:"stat-label",children:["Lv.",a]}),b&&o.jsx("span",{className:"level-up-text",children:"LEVEL UP!"})]}),o.jsxs("div",{className:`xp-bar ${N?"xp-glow":""}`,children:[o.jsx("div",{className:"xp-fill",style:{width:`${Math.min(100,W)}%`}}),o.jsxs("span",{className:"xp-text",children:[v,"/",P]})]}),g&&o.jsxs("span",{className:"xp-delta",children:["+",f," XP"]})]}),o.jsxs("div",{className:"stat-buttons",children:[o.jsx("button",{className:"stat-btn shop-btn",onClick:()=>i("shop"),title:"商店",children:"🏪"}),o.jsx("button",{className:"stat-btn inventory-btn",onClick:()=>i("inventory"),title:"背包",children:"🎒"})]}),o.jsx("style",{children:`
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
      `})]})};class Qm{getShopItems(){return rr}getShopItemsByType(t){return rr.filter(n=>n.type===t)}getShopItem(t){return Pm(t)}canAfford(t,n,r,a=0){return n==="gold"?r>=t:a>=t}calculateSellPrice(t,n=1){const r=t.cropType.sellPrice,a=t.health>=90?1.2:t.health>=70?1.1:1,s=Math.round(r*(a-1)),i=t.growthStage==="mature"?1:t.growthStage==="overripe"?.7:.5,l=Math.round(r*(i-1)),c=Math.round(r*(n-1)*.1),u=Math.max(1,Math.round(r*a*i+c));return{basePrice:r,healthBonus:s,qualityBonus:l,comboBonus:c,total:u}}calculateInventorySellPrice(t,n=1){const r=Ae[t];return r?r.sellPrice*n:0}getSeedPrice(t){return Sr[t]||5}generateOrder(t){const n=Dl[Math.floor(Math.random()*Dl.length)],r=Object.keys(Ae);let a,s,i,l,c;switch(t){case"easy":a=Math.random()<.5?1:2,s=[3,5],i=300,l=!1,c=1;break;case"medium":a=2+Math.floor(Math.random()*2),s=[5,10],i=180,l=Math.random()<.3,c=1.5;break;case"hard":a=3+Math.floor(Math.random()*2),s=[10,20],i=120,l=Math.random()<.5,c=2;break}const h=[...r].sort(()=>Math.random()-.5).slice(0,Math.min(a,r.length)).map(v=>({cropId:v,quantity:s[0]+Math.floor(Math.random()*(s[1]-s[0]+1))})),m=h.reduce((v,j)=>{var d;const f=((d=Ae[j.cropId])==null?void 0:d.sellPrice)||10;return v+f*j.quantity},0),w=Math.round(m*c),y=l?Math.round(w*.5):void 0;return{id:`order-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,customerName:n.name,customerEmoji:n.emoji,items:h,reward:w,bonusReward:y,timeLimit:i,startedAt:Date.now(),isUrgent:l}}canFulfillOrder(t,n){return t.items.every(r=>{const a=n.find(s=>s.type==="crop"&&s.cropTypeId===r.cropId);return a&&a.quantity>=r.quantity})}getMissingItems(t,n){return t.items.map(r=>{const a=n.find(i=>i.type==="crop"&&i.cropTypeId===r.cropId),s=(a==null?void 0:a.quantity)||0;return{cropId:r.cropId,needed:r.quantity,have:s}}).filter(r=>r.have<r.needed)}calculateOrderReward(t){const r=(Date.now()-t.startedAt)/1e3,i=(t.timeLimit-r)/t.timeLimit>.5?Math.round(t.reward*.2):0,l=t.bonusReward||0;return{reward:t.reward,bonus:l,timeBonus:i}}isOrderExpired(t){return(Date.now()-t.startedAt)/1e3>t.timeLimit}getOrderTimeRemaining(t){const r=(Date.now()-t.startedAt)/1e3;return Math.max(0,t.timeLimit-r)}formatTime(t){const n=Math.floor(t/60),r=Math.floor(t%60);return`${n}:${r.toString().padStart(2,"0")}`}getXPReward(t){return xo[t]}calculateLevel(t,n,r=100){let a=n,s=t;for(;s>=r;)s-=r,a++;return{level:a,xpProgress:s}}isUnlockedAtLevel(t,n){return(t.unlockLevel||1)<=n}getItemsUnlockedAtLevel(t){return rr.filter(n=>n.unlockLevel===t)}}const Je=new Qm,cd=({onClose:e})=>{const[t,n]=S.useState("seeds"),[r,a]=S.useState(null),[s,i]=S.useState(1),{gold:l,gems:c,level:u,addToInventory:p,spendGold:h,unlockCrop:m,hasPurchasedUpgrade:w,addPurchasedUpgrade:y,hasPurchasedTool:v,addPurchasedTool:j}=Oe(),{expandFarm:f,canExpand:d,getNextExpansion:g,setSprinkler:x,setScarecrow:N}=xe(),{addNotification:k,setScreen:b}=Ot(),C=S.useMemo(()=>{switch(t){case"seeds":return bs("seed");case"tools":return bs("tool");case"upgrades":return bs("upgrade");default:return[]}},[t]),L=z=>!(!Je.isUnlockedAtLevel(z,u)||z.type==="upgrade"&&w(z.id)||z.type==="tool"&&(z.effect==="autoWater"||z.effect==="reduceCrows")&&v(z.id)),P=(z,_=1)=>{const $=z.price*_;return Je.canAfford($,z.currency,l,c)},W=(z,_=1)=>{const $=z.price*_;if(!P(z,_)){k("金幣不足！","error");return}if(!(z.currency==="gold"?h($):!1)){k("購買失敗！","error");return}switch(z.type){case"seed":z.cropTypeId&&(p({type:"seed",cropTypeId:z.cropTypeId,quantity:_}),m(z.cropTypeId),k(`購買了 ${_}x ${z.name}！`,"success"));break;case"tool":D(z);break;case"upgrade":Y(z);break;default:p({type:z.type,quantity:_}),k(`購買了 ${z.name}！`,"success")}a(null),i(1)},D=z=>{switch(z.effect){case"autoWater":x(!0),j(z.id),k("安裝了自動灑水器！作物會自動澆水","success");break;case"reduceCrows":N(!0),j(z.id),k("安裝了稻草人！烏鴉出現機率減少 50%","success");break;case"fertilize":p({type:"tool",cropTypeId:"fertilizer",quantity:5}),k("購買了肥料包 x5！","success");break;case"qualityBoost":p({type:"tool",cropTypeId:"quality_boost",quantity:3}),k("購買了優質種子增強劑 x3！","success");break;default:p({type:"tool",quantity:1}),k(`購買了 ${z.name}！`,"success")}},Y=z=>{var _;if((_=z.effect)!=null&&_.startsWith("expandTo")){const $=g();$&&d()?(f($.rows,$.cols),y(z.id),k(`農場擴建至 ${$.rows}×${$.cols}！`,"success")):k("無法擴建！","error")}},G=()=>{e?e():b("game")};return o.jsxs("div",{className:"shop-container",children:[o.jsxs("div",{className:"shop-panel",children:[o.jsxs("div",{className:"shop-header",children:[o.jsx("h2",{children:"🏪 商店"}),o.jsxs("div",{className:"shop-currency",children:[o.jsxs("span",{className:"gold",children:["🪙 ",l.toLocaleString()]}),o.jsxs("span",{className:"gems",children:["💎 ",c]})]}),o.jsx("button",{className:"close-btn",onClick:G,children:"✕"})]}),o.jsxs("div",{className:"shop-tabs",children:[o.jsx("button",{className:`tab ${t==="seeds"?"active":""}`,onClick:()=>n("seeds"),children:"🌱 種子"}),o.jsx("button",{className:`tab ${t==="tools"?"active":""}`,onClick:()=>n("tools"),children:"🔧 工具"}),o.jsx("button",{className:`tab ${t==="upgrades"?"active":""}`,onClick:()=>n("upgrades"),children:"📐 升級"})]}),o.jsx("div",{className:"shop-items",children:C.map(z=>{const _=L(z),$=P(z),T=!Je.isUnlockedAtLevel(z,u),I=z.type==="upgrade"&&w(z.id);return o.jsxs("div",{className:`shop-item ${_?"":"unavailable"} ${(r==null?void 0:r.id)===z.id?"selected":""}`,onClick:()=>_&&a(z),children:[o.jsx("div",{className:"item-icon",children:z.icon}),o.jsxs("div",{className:"item-info",children:[o.jsx("span",{className:"item-name",children:z.name}),o.jsx("span",{className:"item-desc",children:z.description}),o.jsxs("span",{className:`item-price ${$?"":"cant-afford"}`,children:[z.currency==="gold"?"🪙":"💎"," ",z.price]})]}),T&&o.jsxs("div",{className:"item-lock",children:["🔒 Lv.",z.unlockLevel]}),I&&o.jsx("div",{className:"item-purchased",children:"✓ 已購買"})]},z.id)})}),r&&o.jsxs("div",{className:"purchase-panel",children:[o.jsxs("div",{className:"purchase-info",children:[o.jsx("span",{className:"purchase-icon",children:r.icon}),o.jsx("span",{className:"purchase-name",children:r.name})]}),r.type==="seed"&&o.jsxs("div",{className:"quantity-selector",children:[o.jsx("button",{onClick:()=>i(Math.max(1,s-1)),disabled:s<=1,children:"-"}),o.jsx("span",{children:s}),o.jsx("button",{onClick:()=>i(Math.min(99,s+1)),disabled:!P(r,s+1),children:"+"})]}),o.jsxs("div",{className:"purchase-total",children:["總價: ",r.currency==="gold"?"🪙":"💎"," ",r.price*s]}),o.jsx("button",{className:"buy-btn",onClick:()=>W(r,s),disabled:!P(r,s),children:"購買"})]})]}),o.jsx("style",{children:`
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
      `})]})},ud=({onClose:e})=>{const[t,n]=S.useState("seeds"),[r,a]=S.useState(null),[s,i]=S.useState(1),{inventory:l,gold:c,addGold:u,removeFromInventoryByType:p,getInventoryItemsByType:h}=Oe(),{addNotification:m,setScreen:w}=Ot(),y=S.useMemo(()=>h(t==="seeds"?"seed":t==="crops"?"crop":"tool"),[t,l,h]),v=k=>k?Ae[k]:null,j=(k,b=1)=>k.type!=="crop"||!k.cropTypeId?0:Je.calculateInventorySellPrice(k.cropTypeId,b),f=(k,b)=>{if(k.type!=="crop"||!k.cropTypeId){m("只能出售農作物！","error");return}if(b>k.quantity){m("數量不足！","error");return}const C=j(k,b),L=v(k.cropTypeId);p("crop",k.cropTypeId,b)?(u(C),m(`賣出 ${b}x ${(L==null?void 0:L.emoji)||""} ${(L==null?void 0:L.name)||"農作物"} 獲得 ${C} 金幣！`,"success"),b>=k.quantity&&a(null),i(1)):m("出售失敗！","error")},d=k=>{f(k,k.quantity)},g=()=>{const k=h("crop");let b=0;k.forEach(C=>{if(C.cropTypeId){const L=j(C,C.quantity);p("crop",C.cropTypeId,C.quantity)&&(b+=L)}}),b>0?(u(b),m(`賣出所有農作物獲得 ${b} 金幣！`,"success"),a(null)):m("沒有可出售的農作物！","info")},x=()=>{e?e():w("game")},N=k=>{const b=v(k.cropTypeId);switch(k.type){case"seed":return{icon:(b==null?void 0:b.emoji)||"🌱",name:`${(b==null?void 0:b.name)||"未知"}種子`,subtitle:b?`難度 ${"⭐".repeat(b.difficulty)}`:""};case"crop":return{icon:(b==null?void 0:b.emoji)||"🥬",name:(b==null?void 0:b.name)||"農作物",subtitle:`售價: 🪙 ${(b==null?void 0:b.sellPrice)||0}`};case"tool":return k.cropTypeId==="fertilizer"?{icon:"🧪",name:"肥料",subtitle:"加速生長"}:k.cropTypeId==="quality_boost"?{icon:"✨",name:"優質增強劑",subtitle:"+50% 售價"}:{icon:"🔧",name:"工具",subtitle:""};default:return{icon:"❓",name:"未知物品",subtitle:""}}};return o.jsxs("div",{className:"inventory-container",children:[o.jsxs("div",{className:"inventory-panel",children:[o.jsxs("div",{className:"inventory-header",children:[o.jsx("h2",{children:"🎒 背包"}),o.jsxs("div",{className:"inventory-gold",children:["🪙 ",c.toLocaleString()]}),o.jsx("button",{className:"close-btn",onClick:x,children:"✕"})]}),o.jsxs("div",{className:"inventory-tabs",children:[o.jsxs("button",{className:`tab ${t==="seeds"?"active":""}`,onClick:()=>{n("seeds"),a(null)},children:["🌱 種子 (",h("seed").reduce((k,b)=>k+b.quantity,0),")"]}),o.jsxs("button",{className:`tab ${t==="crops"?"active":""}`,onClick:()=>{n("crops"),a(null)},children:["🥬 農作物 (",h("crop").reduce((k,b)=>k+b.quantity,0),")"]}),o.jsxs("button",{className:`tab ${t==="tools"?"active":""}`,onClick:()=>{n("tools"),a(null)},children:["🔧 工具 (",h("tool").reduce((k,b)=>k+b.quantity,0),")"]})]}),o.jsx("div",{className:"inventory-items",children:y.length===0?o.jsxs("div",{className:"empty-message",children:[t==="seeds"&&"沒有種子，去商店購買吧！",t==="crops"&&"沒有農作物，收穫後會出現在這裡！",t==="tools"&&"沒有工具，去商店購買吧！"]}):y.map(k=>{const b=N(k),C=(r==null?void 0:r.id)===k.id;return o.jsxs("div",{className:`inventory-item ${C?"selected":""}`,onClick:()=>a(k),children:[o.jsx("div",{className:"item-icon",children:b.icon}),o.jsxs("div",{className:"item-info",children:[o.jsx("span",{className:"item-name",children:b.name}),o.jsx("span",{className:"item-subtitle",children:b.subtitle})]}),o.jsxs("div",{className:"item-quantity",children:["×",k.quantity]})]},k.id)})}),t==="crops"&&y.length>0&&o.jsxs("div",{className:"sell-panel",children:[r&&r.type==="crop"?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"sell-info",children:[o.jsx("span",{className:"sell-icon",children:N(r).icon}),o.jsx("span",{className:"sell-name",children:N(r).name}),o.jsxs("span",{className:"sell-owned",children:["擁有: ",r.quantity]})]}),o.jsxs("div",{className:"quantity-selector",children:[o.jsx("button",{onClick:()=>i(Math.max(1,s-1)),disabled:s<=1,children:"-"}),o.jsx("span",{children:s}),o.jsx("button",{onClick:()=>i(Math.min(r.quantity,s+1)),disabled:s>=r.quantity,children:"+"})]}),o.jsxs("div",{className:"sell-total",children:["獲得: 🪙 ",j(r,s)]}),o.jsx("button",{className:"sell-btn",onClick:()=>f(r,s),children:"出售"}),o.jsx("button",{className:"sell-all-btn",onClick:()=>d(r),children:"全部出售"})]}):o.jsx("div",{className:"sell-hint",children:"選擇農作物進行出售"}),o.jsx("button",{className:"sell-all-crops-btn",onClick:g,children:"💰 出售所有農作物"})]})]}),o.jsx("style",{children:`
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
      `})]})},Km=({maxOrders:e=3,onClose:t})=>{const{activeOrders:n,inventory:r,addOrder:a,removeOrder:s,completeOrder:i,failOrder:l,removeFromInventoryByType:c,addXP:u,addReputation:p}=Oe(),{addNotification:h,setScreen:m}=Ot(),[,w]=S.useState(0);S.useEffect(()=>{const x=setInterval(()=>{w(N=>N+1),n.forEach(N=>{Je.isOrderExpired(N)&&(l(N.id),h(`訂單已過期！${N.customerEmoji} ${N.customerName} 很失望...`,"warning"))})},1e3);return()=>clearInterval(x)},[n,l,h]),S.useEffect(()=>{if(n.length<e){const x=n.length===0||Math.random()<.6?"easy":Math.random()<.8?"medium":"hard",N=Je.generateOrder(x);a(N)}},[n.length,e,a]);const y=S.useCallback(x=>Je.canFulfillOrder(x,r),[r]),v=x=>{if(!y(x)){h("材料不足！","error");return}let N=!0;if(x.items.forEach(P=>{c("crop",P.cropId,P.quantity)||(N=!1)}),!N){h("交付失敗！","error");return}const{reward:k,bonus:b,timeBonus:C}=Je.calculateOrderReward(x);i(x.id,k,b+C),u(xo.orderComplete),x.isUrgent?(u(xo.orderBonus),p(2)):p(1);let L=`訂單完成！獲得 🪙 ${k}`;b>0&&(L+=` + 緊急獎勵 ${b}`),C>0&&(L+=` + 時間獎勵 ${C}`),h(L,"success")},j=x=>{s(x),h("已跳過訂單","info")},f=()=>{n.forEach(x=>s(x.id)),h("訂單已刷新！","info")},d=()=>{t?t():m("game")},g=x=>Ae[x];return o.jsxs("div",{className:"order-board-container",children:[o.jsxs("div",{className:"order-board-panel",children:[o.jsxs("div",{className:"order-header",children:[o.jsx("h2",{children:"📋 訂單看板"}),o.jsx("button",{className:"refresh-btn",onClick:f,title:"刷新訂單",children:"🔄"}),o.jsx("button",{className:"close-btn",onClick:d,children:"✕"})]}),o.jsx("div",{className:"orders-list",children:n.length===0?o.jsx("div",{className:"no-orders",children:"沒有訂單，稍等一下..."}):n.map(x=>{const N=Je.getOrderTimeRemaining(x),k=y(x),b=N<30;return o.jsxs("div",{className:`order-card ${x.isUrgent?"urgent":""} ${b?"expiring":""}`,children:[o.jsxs("div",{className:"order-customer",children:[o.jsx("span",{className:"customer-emoji",children:x.customerEmoji}),o.jsx("span",{className:"customer-name",children:x.customerName}),x.isUrgent&&o.jsx("span",{className:"urgent-badge",children:"🔥 緊急"})]}),o.jsx("div",{className:"order-items",children:x.items.map((C,L)=>{var Y;const P=g(C.cropId),W=((Y=r.find(G=>G.type==="crop"&&G.cropTypeId===C.cropId))==null?void 0:Y.quantity)||0,D=W>=C.quantity;return o.jsxs("div",{className:`order-item ${D?"has-enough":"missing"}`,children:[o.jsx("span",{className:"item-emoji",children:(P==null?void 0:P.emoji)||"❓"}),o.jsx("span",{className:"item-name",children:(P==null?void 0:P.name)||"未知"}),o.jsxs("span",{className:"item-qty",children:[W,"/",C.quantity]})]},L)})}),o.jsxs("div",{className:"order-reward",children:[o.jsx("span",{className:"reward-label",children:"獎勵:"}),o.jsxs("span",{className:"reward-amount",children:["🪙 ",x.reward]}),x.bonusReward&&o.jsxs("span",{className:"bonus-amount",children:["+",x.bonusReward]})]}),o.jsxs("div",{className:`order-time ${b?"warning":""}`,children:["⏱️ ",Je.formatTime(N)]}),o.jsxs("div",{className:"order-actions",children:[o.jsx("button",{className:`deliver-btn ${k?"ready":""}`,onClick:()=>v(x),disabled:!k,children:k?"✓ 交付":"材料不足"}),o.jsx("button",{className:"skip-btn",onClick:()=>j(x.id),children:"跳過"})]})]},x.id)})}),o.jsx("div",{className:"order-help",children:"💡 收穫農作物後可以在這裡交付訂單獲得金幣獎勵！"})]}),o.jsx("style",{children:`
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
      `})]})},qm={morning:"linear-gradient(180deg, #FFE4B5 0%, #FFDAB9 20%, #87CEEB 60%, #ADD8E6 100%)",afternoon:"linear-gradient(180deg, #87CEEB 0%, #ADD8E6 50%, #B0E0E6 100%)",evening:"linear-gradient(180deg, #FF7F50 0%, #FF6347 15%, #DA70D6 45%, #8A2BE2 80%, #4B0082 100%)",night:"linear-gradient(180deg, #191970 0%, #000033 40%, #0C0C2E 100%)"},Zm={sunny:"transparent",rainy:"rgba(100, 100, 120, 0.3)",stormy:"rgba(50, 50, 70, 0.5)",foggy:"rgba(200, 200, 200, 0.4)",snowy:"rgba(220, 230, 240, 0.3)",rainbow:"transparent"},Jm=e=>Array.from({length:e},(t,n)=>({id:n,left:Math.random()*100,top:Math.random()*40,size:Math.random()*2+1,delay:Math.random()*3,duration:1.5+Math.random()*2})),e0=e=>Array.from({length:e},(t,n)=>({id:n,top:5+Math.random()*25,size:40+Math.random()*60,opacity:.6+Math.random()*.4,duration:60+Math.random()*40,delay:Math.random()*-100})),t0=({timeOfDay:e,weather:t})=>{const n=S.useMemo(()=>Jm(50),[]),r=S.useMemo(()=>e0(5),[]),a=e==="night",s=!a&&t!=="stormy"&&t!=="rainy",i=a,l=t!=="sunny"||e==="morning",c=a&&t!=="stormy"&&t!=="foggy",u=t==="rainbow",p=S.useMemo(()=>{switch(e){case"morning":return{x:20,y:30};case"afternoon":return{x:70,y:15};case"evening":return{x:85,y:40};case"night":return{x:80,y:20};default:return{x:50,y:20}}},[e]);return o.jsxs("div",{className:"background-scene",children:[o.jsx("div",{className:"sky-layer",style:{background:qm[e]}}),o.jsx("div",{className:"weather-overlay-bg",style:{backgroundColor:Zm[t]}}),c&&o.jsx("div",{className:"stars-layer",children:n.map(h=>o.jsx("div",{className:"star",style:{left:`${h.left}%`,top:`${h.top}%`,width:`${h.size}px`,height:`${h.size}px`,animationDelay:`${h.delay}s`,animationDuration:`${h.duration}s`}},h.id))}),s&&o.jsxs("div",{className:"sun",style:{left:`${p.x}%`,top:`${p.y}%`},children:[o.jsx("div",{className:"sun-core"}),o.jsx("div",{className:"sun-rays"})]}),i&&o.jsxs("div",{className:"moon",style:{left:`${p.x}%`,top:`${p.y}%`},children:[o.jsx("div",{className:"moon-surface"}),o.jsx("div",{className:"moon-glow"})]}),u&&o.jsx("div",{className:"rainbow",children:o.jsx("div",{className:"rainbow-arc"})}),l&&o.jsx("div",{className:"clouds-layer",children:r.map(h=>o.jsx("div",{className:`cloud ${t==="stormy"?"storm-cloud":""}`,style:{top:`${h.top}%`,width:`${h.size}px`,opacity:h.opacity,animationDuration:`${h.duration}s`,animationDelay:`${h.delay}s`}},h.id))}),o.jsx("div",{className:"mountains-layer",children:o.jsxs("svg",{viewBox:"0 0 1200 200",preserveAspectRatio:"none",className:"mountains-svg",children:[o.jsx("path",{d:"M0,200 L0,120 Q100,80 200,100 T400,90 T600,110 T800,85 T1000,100 T1200,95 L1200,200 Z",className:`mountain-back ${a?"night":""}`}),o.jsx("path",{d:"M0,200 L0,140 Q150,100 300,130 T600,115 T900,135 T1200,120 L1200,200 Z",className:`mountain-front ${a?"night":""}`})]})}),o.jsxs("div",{className:"trees-layer",children:[o.jsx("div",{className:"tree tree-1"}),o.jsx("div",{className:"tree tree-2"}),o.jsx("div",{className:"tree tree-3"}),o.jsx("div",{className:"tree tree-4"}),o.jsx("div",{className:"tree tree-5"})]}),o.jsxs("div",{className:"ground-layer",children:[o.jsx("div",{className:"grass-strip"}),o.jsx("div",{className:"dirt-path"})]}),o.jsx("style",{children:`
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
      `})]})},n0=()=>`toast-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,r0={success:3e3,error:4e3,info:3e3,reward:3500,levelUp:5e3,achievement:5e3},a0={success:"✅",error:"❌",info:"ℹ️",reward:"🪙",levelUp:"🎉",achievement:"🏆"},s0=S.createContext(null),o0=({children:e})=>{const[t,n]=S.useState([]),r=S.useCallback(i=>{const l={...i,id:n0(),icon:i.icon||a0[i.type],duration:i.duration||r0[i.type]};n(c=>[...c,l])},[]),a=S.useCallback(i=>{n(l=>l.filter(c=>c.id!==i))},[]),s=S.useCallback(()=>{n([])},[]);return o.jsxs(s0.Provider,{value:{toasts:t,addToast:r,removeToast:a,clearAll:s},children:[e,o.jsx(i0,{toasts:t,removeToast:a})]})},i0=({toasts:e,removeToast:t})=>o.jsxs("div",{className:"toast-container",children:[e.map((n,r)=>o.jsx(l0,{toast:n,index:r,onRemove:()=>t(n.id)},n.id)),o.jsx("style",{children:`
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
      `})]}),l0=({toast:e,index:t,onRemove:n})=>{const[r,a]=S.useState(!1);S.useEffect(()=>{const l=setTimeout(()=>{a(!0)},(e.duration||3e3)-300),c=setTimeout(()=>{n()},e.duration||3e3);return()=>{clearTimeout(l),clearTimeout(c)}},[e.duration,n]);const i=(()=>{switch(e.type){case"success":return{background:"linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)",borderColor:"#1e8449"};case"error":return{background:"linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)",borderColor:"#922b21"};case"info":return{background:"linear-gradient(135deg, #2980b9 0%, #3498db 100%)",borderColor:"#1a5276"};case"reward":return{background:"linear-gradient(135deg, #d4a017 0%, #f1c40f 100%)",borderColor:"#9a7d0a"};case"levelUp":return{background:"linear-gradient(135deg, #8e44ad 0%, #9b59b6 100%)",borderColor:"#6c3483"};case"achievement":return{background:"linear-gradient(135deg, #e67e22 0%, #f39c12 100%)",borderColor:"#b9770e"};default:return{background:"linear-gradient(135deg, #34495e 0%, #5d6d7e 100%)",borderColor:"#283747"}}})();return o.jsxs("div",{className:`toast-item ${r?"exiting":""} toast-${e.type}`,style:{...i,animationDelay:`${t*50}ms`},onClick:()=>{a(!0),setTimeout(n,300)},children:[o.jsxs("div",{className:"toast-content",children:[o.jsx("span",{className:"toast-icon",children:e.icon}),o.jsxs("div",{className:"toast-text",children:[o.jsx("span",{className:"toast-message",children:e.message}),e.amount!==void 0&&o.jsx("span",{className:"toast-amount",children:e.type==="reward"||e.type==="levelUp"?`+${e.amount}`:e.amount})]})]}),e.amount!==void 0&&(e.type==="reward"||e.type==="levelUp")&&o.jsxs("div",{className:"toast-float-number",children:["+",e.amount]}),o.jsx("style",{children:`
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
      `})]})},c0=50,$t=(e,t)=>Math.random()*(t-e)+e,dd=()=>`particle-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,u0=e=>{switch(e){case"harvest":return{count:12,colors:["#FFD700","#FFA500","#90EE90","#32CD32"],emojis:["✨","⭐","🌟","💫"],duration:{min:600,max:1e3},spread:{x:80,y:80},size:{min:12,max:20}};case"levelUp":return{count:20,colors:["#FFD700","#FF6B6B","#4ECDC4","#45B7D1","#96CEB4"],emojis:["⭐","🌟","✨","💫","🎉"],duration:{min:800,max:1200},spread:{x:150,y:200},size:{min:16,max:28}};case"combo":return{count:8,colors:["#FF4500","#FF6600","#FF8C00","#FFA500"],emojis:["🔥","💥","⚡","✨"],duration:{min:400,max:800},spread:{x:60,y:60},size:{min:14,max:22}};case"gold":return{count:6,colors:["#FFD700","#FFC800","#FFB700"],emojis:["🪙","💰","✨"],duration:{min:600,max:900},spread:{x:40,y:100},size:{min:16,max:24}};case"confetti":return{count:30,colors:["#FF6B6B","#4ECDC4","#45B7D1","#96CEB4","#FFEAA7","#DDA0DD","#98D8C8"],emojis:[],duration:{min:1e3,max:2e3},spread:{x:200,y:300},size:{min:8,max:14}};case"sparkle":default:return{count:8,colors:["#FFD700","#FFFFFF","#FFF8DC"],emojis:["✨","⭐"],duration:{min:400,max:700},spread:{x:50,y:50},size:{min:10,max:18}}}},d0=({type:e,position:t={x:50,y:50},count:n,onComplete:r})=>{const[a,s]=S.useState([]),i=S.useRef(null),l=S.useRef(null),c=S.useCallback(()=>{const u=u0(e),p=Math.min(n??u.count,c0),h=[];for(let w=0;w<p;w++){const y=u.emojis.length>0&&Math.random()>.3;h.push({id:dd(),x:t.x+$t(-20,20),y:t.y+$t(-20,20),size:$t(u.size.min,u.size.max),color:u.colors[Math.floor(Math.random()*u.colors.length)],emoji:y?u.emojis[Math.floor(Math.random()*u.emojis.length)]:void 0,duration:$t(u.duration.min,u.duration.max),delay:$t(0,200),tx:$t(-u.spread.x,u.spread.x),ty:$t(-u.spread.y,-u.spread.y/4)})}s(h);const m=Math.max(...h.map(w=>w.duration+w.delay));l.current=window.setTimeout(()=>{s([]),r==null||r()},m+100)},[e,t,n,r]);return S.useEffect(()=>(c(),()=>{l.current&&clearTimeout(l.current)}),[c]),a.length===0?null:o.jsxs("div",{ref:i,className:"particle-container",style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:9999,overflow:"hidden"},children:[a.map(u=>o.jsx("div",{className:"particle",style:{position:"absolute",left:`${u.x}%`,top:`${u.y}%`,width:u.emoji?"auto":`${u.size}px`,height:u.emoji?"auto":`${u.size}px`,fontSize:u.emoji?`${u.size}px`:void 0,backgroundColor:u.emoji?"transparent":u.color,borderRadius:u.emoji?void 0:"50%",opacity:0,transform:"translate(-50%, -50%) scale(0)",animation:`particle-burst ${u.duration}ms ease-out ${u.delay}ms forwards`,"--tx":`${u.tx}px`,"--ty":`${u.ty}px`},children:u.emoji},u.id)),o.jsx("style",{children:`
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
      `})]})},f0=()=>{const[e,t]=S.useState([]),n=S.useCallback((i,l)=>{const c=dd();t(u=>[...u,{id:c,type:i,position:l}])},[]),r=S.useCallback(i=>{t(l=>l.filter(c=>c.id!==i))},[]),a=S.useCallback(()=>{t([])},[]),s=S.useCallback(()=>o.jsx(o.Fragment,{children:e.map(i=>o.jsx(d0,{type:i.type,position:i.position,onComplete:()=>r(i.id)},i.id))}),[e,r]);return{emit:n,clearAll:a,ParticleLayer:s,activeCount:e.length}};function p0(){const e=je(u=>u.phase),t=je(u=>u.isPaused),n=je(u=>u.updateTimeOfDay),r=S.useRef(),a=S.useRef(0),s=S.useRef(0),i=1e3,l=100/300,c=S.useCallback(u=>{a.current===0&&(a.current=u);const p=u-a.current;if(s.current+=p,a.current=u,s.current>=i){const h=Math.floor(s.current/i);s.current%=i,it.updateCrops(),lt.update(),n(l*h)}r.current=requestAnimationFrame(c)},[n]);return S.useEffect(()=>{if(e!=="playing"||t){r.current&&(cancelAnimationFrame(r.current),r.current=void 0),it.stop(),bn.stop(),lt.stop();return}return it.start(),bn.start(),lt.start(),a.current=0,s.current=0,r.current=requestAnimationFrame(c),()=>{it.stop(),bn.stop(),lt.stop(),r.current&&(cancelAnimationFrame(r.current),r.current=void 0)}},[e,t,c]),{isRunning:e==="playing"&&!t}}const m0=()=>{var e,t,n,r;try{const a=localStorage.getItem("farm-typing-player");if(a){const s=JSON.parse(a);return((t=(e=s.state)==null?void 0:e.stats)==null?void 0:t.totalCropsHarvested)>0||((r=(n=s.state)==null?void 0:n.stats)==null?void 0:r.totalGoldEarned)>0}return!1}catch{return!1}},h0=({onComplete:e})=>{const[t,n]=S.useState(0),r=[{title:"🌾 歡迎來到耕種收割!",content:"這是一個結合打字練習和農場經營的遊戲。讓我們開始教學吧！",icon:"👋"},{title:"🌱 種植作物",content:"點擊空的農田格子來種植作物。不同作物有不同的生長時間和獎勵。",icon:"🌱"},{title:"⏳ 等待生長",content:"作物需要時間生長。當它們成熟時會發光提示你收成。",icon:"⏳"},{title:"⌨️ 打字收成",content:"點擊成熟的作物，然後正確打出顯示的文字來收成。打字越快越準確，獎勵越多！",icon:"⌨️"},{title:"💰 賺取金幣",content:"收成的作物會自動加入背包。你可以在背包中賣掉它們換取金幣。",icon:"💰"},{title:"🛒 商店購物",content:"用金幣購買更多種子、工具和農場升級。升級你的農場來種植更多作物！",icon:"🛒"},{title:"🎮 準備開始",content:"小提示：連續正確打字可以建立連擊，獲得額外獎勵！祝你農耕愉快！",icon:"🎉"}],a=r[t],s=t===r.length-1;return o.jsx("div",{className:"tutorial-overlay",children:o.jsxs("div",{className:"tutorial-modal",children:[o.jsx("div",{className:"tutorial-icon",children:a.icon}),o.jsx("h2",{children:a.title}),o.jsx("p",{children:a.content}),o.jsx("div",{className:"tutorial-progress",children:r.map((i,l)=>o.jsx("span",{className:`progress-dot ${l===t?"active":""} ${l<t?"completed":""}`},l))}),o.jsxs("div",{className:"tutorial-buttons",children:[t>0&&o.jsx("button",{className:"btn btn-secondary",onClick:()=>n(i=>i-1),children:"← 上一步"}),o.jsx("button",{className:"btn btn-primary",onClick:()=>s?e():n(i=>i+1),children:s?"開始遊戲！":"下一步 →"})]}),o.jsx("button",{className:"skip-tutorial",onClick:e,children:"跳過教學"})]})})},Al=()=>{const{startGame:e}=je(),{setScreen:t,showTutorial:n,setShowTutorial:r}=Ot(),[a,s]=S.useState(!1);S.useEffect(()=>{s(m0())},[]);const i=()=>{!a&&n?(t("game"),e()):(e(),t("game"))},l=()=>{e(),t("game"),r(!1)};return o.jsx("div",{className:"screen title-screen",children:o.jsxs("div",{className:"title-content",children:[o.jsxs("div",{className:"title-logo",children:[o.jsx("span",{className:"logo-icon",children:"🌾"}),o.jsx("h1",{className:"game-title",children:"耕種收割"}),o.jsx("span",{className:"logo-icon",children:"🌾"})]}),o.jsx("p",{className:"game-subtitle",children:"Farm Typing Game"}),o.jsxs("p",{className:"game-description",children:["Plant crops, type to harvest, and build your farming empire!",o.jsx("br",{}),"種植作物、打字收成，打造你的農場帝國！"]}),o.jsxs("div",{className:"menu-buttons",children:[a&&o.jsx("button",{className:"btn btn-primary btn-large",onClick:l,children:"▶️ 繼續遊戲 Continue"}),o.jsxs("button",{className:`btn ${a?"btn-secondary":"btn-primary btn-large"}`,onClick:i,children:["🚜 ",a?"新遊戲 New Game":"開始遊戲 Start Game"]}),o.jsx("button",{className:"btn btn-secondary",onClick:()=>t("settings"),children:"⚙️ 設定 Settings"})]}),o.jsxs("div",{className:"instructions",children:[o.jsx("h3",{children:"🎮 How to Play 遊戲方式:"}),o.jsxs("ul",{children:[o.jsx("li",{children:"🌱 Plant seeds in empty farm plots 在空格種植種子"}),o.jsx("li",{children:"⏳ Wait for crops to grow 等待作物生長"}),o.jsx("li",{children:"⌨️ Type correctly to harvest 正確打字來收成"}),o.jsx("li",{children:"💰 Sell crops to earn gold 賣出作物賺取金幣"}),o.jsx("li",{children:"🌟 Build combos for bonus rewards! 連擊獲得額外獎勵!"})]})]}),o.jsx("div",{className:"version-info",children:"v1.0.0 MVP"})]})})},g0=()=>{const{phase:e,weather:t,dayNumber:n,timeOfDay:r,togglePause:a,activeCrows:s}=je(),{setScreen:i,showTutorial:l,setShowTutorial:c}=Ot(),{stats:u}=Oe(),{currentWPM:p,currentAccuracy:h,combo:m,calculateAverageWPM:w,calculateOverallAccuracy:y}=ld(),[v,j]=S.useState(!1),[f,d]=S.useState(!1),[g,x]=S.useState(!1),{isRunning:N}=p0(),[k,b]=S.useState("farm"),[C,L]=S.useState(!1),[P,W]=S.useState("tomato"),[D,Y]=S.useState(Ae.tomato),[G,z]=S.useState(0),[_,$]=S.useState(null),T=bn.getForecast(),{emit:I,ParticleLayer:F}=f0();S.useEffect(()=>{const U=ce=>{var gi,yi;const fd=((gi=document.activeElement)==null?void 0:gi.tagName)==="INPUT"||((yi=document.activeElement)==null?void 0:yi.classList.contains("typing-input"));ce.key==="Escape"&&!fd&&!_&&a()};return window.addEventListener("keydown",U),()=>window.removeEventListener("keydown",U)},[a,_]);const Q=S.useCallback(()=>{c(!1)},[c]),O=S.useMemo(()=>r<25?"morning":r<50?"afternoon":r<75?"evening":"night",[r]),K=()=>{const U=Xn(D);W(U),L(!0)},oe=U=>{console.log("Typing complete!",U),z(ce=>ce+1),setTimeout(()=>{const ce=Xn(D);W(ce)},1500)},en=()=>{console.log("Typing timeout!"),setTimeout(()=>{const U=Xn(D);W(U)},1500)},Ue=S.useCallback(U=>{console.log(`Combo milestone reached: ${U}!`),I("combo",{x:50,y:50})},[I]),ht=U=>{const ce=Ae[U];ce&&(Y(ce),W(Xn(ce)))},Ya=S.useCallback(U=>{const ce=lt.getCrow(U);ce&&(lt.startChasing(U),$(ce))},[]),tn=S.useCallback(()=>{_&&(lt.chaseCrow(_.id),$(null))},[_]),nn=S.useCallback(()=>{_&&(lt.crowSteals(_.id),$(null))},[_]),gt=()=>r<25?"🌅":r<50?"☀️":r<75?"🌇":"🌙";return o.jsxs("div",{className:"screen game-screen",children:[o.jsx(t0,{timeOfDay:O,weather:t}),o.jsx(F,{}),o.jsx(Hm,{weather:t}),o.jsx(Ym,{className:"game-stats-bar"}),o.jsxs("header",{className:"game-header",children:[o.jsxs("div",{className:"header-left",children:[o.jsxs("span",{className:"day-counter",children:["🗓️ Day ",n]}),o.jsx("span",{className:"time-indicator",children:gt()}),o.jsx(Gm,{weather:t,forecast:T,showForecast:!0})]}),o.jsx("div",{className:"header-center",children:o.jsx("button",{className:"btn btn-small order-btn",onClick:()=>j(!0),children:"📋 Orders"})}),o.jsxs("div",{className:"header-right",children:[N&&o.jsx("span",{className:"running-indicator",children:"🟢"}),o.jsx("button",{className:"btn btn-small",onClick:a,children:e==="paused"?"▶️":"⏸️"}),o.jsx("button",{className:"btn btn-small",onClick:()=>i("title"),children:"🏠"})]})]}),o.jsxs("nav",{className:"game-tabs",children:[o.jsx("button",{className:`tab-btn ${k==="farm"?"active":""}`,onClick:()=>b("farm"),children:"🌾 Farm"}),o.jsx("button",{className:`tab-btn ${k==="typing-test"?"active":""}`,onClick:()=>b("typing-test"),children:"⌨️ Typing Test"})]}),o.jsxs("main",{className:"game-main",children:[k==="farm"&&o.jsx(Um,{}),k==="typing-test"&&o.jsx("div",{className:"typing-test-container",children:C?o.jsxs("div",{className:"typing-test-active",children:[o.jsx(wo,{targetWord:P,timeLimit:D.harvestTimeLimit,cropSlotId:"test-slot",cropType:D,autoStart:!0,onComplete:oe,onTimeout:en,onComboMilestone:Ue}),o.jsxs("div",{className:"typing-test-controls",children:[o.jsx("button",{className:"btn btn-secondary",onClick:()=>L(!1),children:"⏹️ Stop Test"}),o.jsxs("span",{className:"completed-count",children:["✅ Completed: ",G]})]})]}):o.jsxs("div",{className:"typing-test-start",children:[o.jsx("h2",{children:"⌨️ Typing Test Demo"}),o.jsx("p",{children:"Test the typing engine with different crop difficulties:"}),o.jsx("div",{className:"crop-selector",children:Object.values(Ae).map(U=>o.jsxs("button",{className:`btn crop-btn ${D.id===U.id?"active":""}`,onClick:()=>ht(U.id),children:[U.emoji," ",U.name," (Lv.",U.difficulty,")"]},U.id))}),o.jsx("button",{className:"btn btn-primary btn-large",onClick:K,children:"🚀 Start Typing Test"})]})}),o.jsxs("aside",{className:"game-sidebar",children:[o.jsxs("div",{className:"stats-panel",children:[o.jsx("h3",{children:"📊 Stats"}),o.jsxs("div",{className:"stat-row",children:[o.jsx("span",{children:"Current WPM:"}),o.jsx("span",{className:"stat-value",children:p})]}),o.jsxs("div",{className:"stat-row",children:[o.jsx("span",{children:"Accuracy:"}),o.jsxs("span",{className:"stat-value",children:[h,"%"]})]}),o.jsxs("div",{className:"stat-row",children:[o.jsx("span",{children:"Combo:"}),o.jsxs("span",{className:"stat-value combo",children:["x",m]})]}),o.jsx("hr",{}),o.jsxs("div",{className:"stat-row",children:[o.jsx("span",{children:"Avg WPM:"}),o.jsx("span",{className:"stat-value",children:w()})]}),o.jsxs("div",{className:"stat-row",children:[o.jsx("span",{children:"Overall:"}),o.jsxs("span",{className:"stat-value",children:[y(),"%"]})]})]}),o.jsxs("div",{className:"player-stats-panel",children:[o.jsx("h3",{children:"🏆 Progress"}),o.jsxs("div",{className:"stat-row",children:[o.jsx("span",{children:"Crops Harvested:"}),o.jsx("span",{className:"stat-value",children:u.totalCropsHarvested})]}),o.jsxs("div",{className:"stat-row",children:[o.jsx("span",{children:"Words Typed:"}),o.jsx("span",{className:"stat-value",children:u.totalWordsTyped})]}),o.jsxs("div",{className:"stat-row",children:[o.jsx("span",{children:"Best Combo:"}),o.jsxs("span",{className:"stat-value",children:["x",u.bestCombo]})]}),o.jsxs("div",{className:"stat-row",children:[o.jsx("span",{children:"Total Earned:"}),o.jsxs("span",{className:"stat-value gold",children:[u.totalGoldEarned," 💰"]})]})]})]})]}),s.length>0&&!_&&o.jsx("div",{className:"crow-alerts-container",children:s.map(U=>o.jsx(Xm,{crow:U,onChase:Ya},U.id))}),_&&o.jsx("div",{className:"crow-chase-modal",children:o.jsxs("div",{className:"crow-chase-content",children:[o.jsxs("div",{className:"crow-chase-header",children:[o.jsx("span",{className:"crow-icon",children:"🐦"}),o.jsx("h3",{children:"Chase the Crow!"})]}),o.jsx(wo,{targetWord:_.wordToChase,timeLimit:5,cropSlotId:`crow-${_.id}`,autoStart:!0,onComplete:tn,onTimeout:nn}),o.jsx("button",{className:"btn btn-secondary",onClick:()=>$(null),children:"Give Up 😢"})]})}),v&&o.jsx(Km,{onClose:()=>j(!1)}),f&&o.jsx(cd,{onClose:()=>{d(!1),a()}}),g&&o.jsx(ud,{onClose:()=>{x(!1),a()}}),e==="paused"&&!f&&!g&&o.jsx("div",{className:"pause-overlay",children:o.jsxs("div",{className:"pause-menu",children:[o.jsx("h2",{children:"⏸️ 暫停 Paused"}),o.jsx("p",{className:"pause-hint",children:"按 ESC 繼續遊戲"}),o.jsx("button",{className:"btn btn-primary",onClick:a,children:"▶️ 繼續 Resume"}),o.jsx("button",{className:"btn btn-secondary",onClick:()=>{d(!0)},children:"🏪 商店 Shop"}),o.jsx("button",{className:"btn btn-secondary",onClick:()=>{x(!0)},children:"🎒 背包 Inventory"}),o.jsx("button",{className:"btn btn-secondary",onClick:()=>j(!0),children:"📋 訂單 Orders"}),o.jsx("button",{className:"btn btn-secondary",onClick:()=>i("settings"),children:"⚙️ 設定 Settings"}),o.jsx("button",{className:"btn btn-danger",onClick:()=>i("title"),children:"🏠 退出 Quit to Menu"})]})}),l&&e==="playing"&&o.jsx(h0,{onComplete:Q})]})},y0=()=>{const{setScreen:e,setShowTutorial:t}=Ot(),{resetPlayer:n,stats:r,level:a,gold:s}=Oe(),{resetFarm:i,gridSize:l}=xe(),{resetGame:c,dayNumber:u}=je(),[p,h]=S.useState(!0),[m,w]=S.useState(!1),[y,v]=S.useState(!1),j=()=>{n(),i(),c(),t(!0),v(!1),e("title")};return o.jsxs("div",{className:"screen settings-screen",children:[o.jsx("div",{className:"settings-header",children:o.jsx("h2",{children:"⚙️ 設定 Settings"})}),o.jsxs("div",{className:"settings-content",children:[o.jsxs("div",{className:"settings-section stats-summary",children:[o.jsx("h3",{children:"📊 遊戲統計 Game Stats"}),o.jsxs("div",{className:"stats-grid",children:[o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{className:"stat-label",children:"Level 等級"}),o.jsx("span",{className:"stat-value",children:a})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{className:"stat-label",children:"Day 天數"}),o.jsx("span",{className:"stat-value",children:u})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{className:"stat-label",children:"Gold 金幣"}),o.jsxs("span",{className:"stat-value gold",children:["🪙 ",s.toLocaleString()]})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{className:"stat-label",children:"Farm Size 農場大小"}),o.jsxs("span",{className:"stat-value",children:[l.rows,"×",l.cols]})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{className:"stat-label",children:"Harvested 已收成"}),o.jsx("span",{className:"stat-value",children:r.totalCropsHarvested})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{className:"stat-label",children:"Best Combo 最佳連擊"}),o.jsxs("span",{className:"stat-value",children:["x",r.bestCombo]})]})]})]}),o.jsxs("div",{className:"settings-section",children:[o.jsx("h3",{children:"🔊 音效 Audio"}),o.jsxs("div",{className:"setting-row",children:[o.jsx("span",{children:"音效 Sound Effects"}),o.jsx("button",{className:`toggle-btn ${p?"active":""}`,onClick:()=>h(!p),children:p?"🔊 On":"🔇 Off"})]}),o.jsx("p",{className:"setting-note",children:"⚠️ 音效功能尚未實現 (Sound not yet implemented)"})]}),o.jsxs("div",{className:"settings-section",children:[o.jsx("h3",{children:"♿ 無障礙 Accessibility"}),o.jsxs("div",{className:"setting-row",children:[o.jsx("span",{children:"減少動態效果 Reduced Motion"}),o.jsx("button",{className:`toggle-btn ${m?"active":""}`,onClick:()=>w(!m),children:m?"✓ On":"✗ Off"})]})]}),o.jsxs("div",{className:"settings-section",children:[o.jsx("h3",{children:"🎮 操作說明 Controls"}),o.jsxs("div",{className:"controls-list",children:[o.jsxs("div",{className:"control-item",children:[o.jsx("span",{className:"key",children:"Click 點擊"}),o.jsx("span",{children:"Select farm slot 選擇農田格子"})]}),o.jsxs("div",{className:"control-item",children:[o.jsx("span",{className:"key",children:"Type 打字"}),o.jsx("span",{children:"Harvest mature crops 收成成熟作物"})]}),o.jsxs("div",{className:"control-item",children:[o.jsx("span",{className:"key",children:"ESC"}),o.jsx("span",{children:"Pause game 暫停遊戲"})]})]})]}),o.jsxs("div",{className:"settings-section",children:[o.jsx("h3",{children:"📖 教學 Tutorial"}),o.jsx("button",{className:"btn btn-secondary",onClick:()=>{t(!0),e("game")},children:"🔄 重新觀看教學 Replay Tutorial"})]}),o.jsxs("div",{className:"settings-section danger-zone",children:[o.jsx("h3",{children:"⚠️ 危險區域 Danger Zone"}),y?o.jsxs("div",{className:"confirm-reset",children:[o.jsxs("p",{className:"warning-text",children:["⚠️ 確定要刪除所有遊戲進度嗎？此操作無法撤銷！",o.jsx("br",{}),"Are you sure? This cannot be undone!"]}),o.jsxs("div",{className:"confirm-buttons",children:[o.jsx("button",{className:"btn btn-danger",onClick:j,children:"✓ 確定刪除 Yes, Reset"}),o.jsx("button",{className:"btn btn-secondary",onClick:()=>v(!1),children:"✗ 取消 Cancel"})]})]}):o.jsx("button",{className:"btn btn-danger",onClick:()=>v(!0),children:"🗑️ 重置進度 Reset All Progress"})]}),o.jsx("button",{className:"btn btn-primary back-btn",onClick:()=>e("title"),children:"← 返回主選單 Back to Menu"})]})]})},v0=()=>{const{currentScreen:e,setScreen:t}=Ot(),{initializeGrid:n}=xe();S.useEffect(()=>{n()},[]);const r=()=>{switch(e){case"title":return o.jsx(Al,{});case"game":return o.jsx(g0,{});case"settings":return o.jsx(y0,{});case"shop":return o.jsx(cd,{onClose:()=>t("game")});case"inventory":return o.jsx(ud,{onClose:()=>t("game")});default:return o.jsx(Al,{})}};return o.jsxs("div",{className:"app-container",children:[r(),o.jsx("style",{children:`
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
        
        /* Tutorial Overlay Styles */
        .tutorial-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 500;
          animation: fade-in 0.3s ease;
        }
        
        .tutorial-modal {
          background: linear-gradient(135deg, #fff8dc, #ffeeba);
          border: 4px solid #4a7c59;
          border-radius: 20px;
          padding: 32px;
          max-width: 500px;
          width: 90%;
          text-align: center;
          box-shadow: 0 12px 48px rgba(0,0,0,0.4);
          animation: slide-up 0.4s ease;
        }
        
        .tutorial-icon {
          font-size: 64px;
          margin-bottom: 16px;
          animation: bounce 0.5s ease infinite alternate;
        }
        
        @keyframes bounce {
          from { transform: translateY(0); }
          to { transform: translateY(-10px); }
        }
        
        .tutorial-modal h2 {
          color: #4a7c59;
          margin-bottom: 16px;
          font-size: 24px;
        }
        
        .tutorial-modal p {
          color: #5a4a3a;
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 24px;
        }
        
        .tutorial-progress {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-bottom: 24px;
        }
        
        .progress-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #ccc;
          transition: all 0.3s ease;
        }
        
        .progress-dot.active {
          background: #4a7c59;
          transform: scale(1.3);
        }
        
        .progress-dot.completed {
          background: #8bc34a;
        }
        
        .tutorial-buttons {
          display: flex;
          gap: 12px;
          justify-content: center;
        }
        
        .skip-tutorial {
          margin-top: 16px;
          background: none;
          border: none;
          color: #888;
          cursor: pointer;
          font-size: 14px;
          text-decoration: underline;
        }
        
        .skip-tutorial:hover {
          color: #666;
        }
        
        /* Pause Menu Enhanced Styles */
        .pause-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 400;
          animation: fade-in 0.2s ease;
        }
        
        .pause-menu {
          background: linear-gradient(135deg, #fff8dc, #ffeeba);
          border: 4px solid #8B7355;
          border-radius: 16px;
          padding: 32px;
          min-width: 300px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          text-align: center;
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        }
        
        .pause-menu h2 {
          color: #5a4a3a;
          margin-bottom: 8px;
        }
        
        .pause-hint {
          color: #888;
          font-size: 14px;
          margin-bottom: 16px;
        }
        
        /* Title Screen Enhanced Styles */
        .title-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 16px;
        }
        
        .logo-icon {
          font-size: 48px;
          animation: sway 2s ease-in-out infinite;
        }
        
        @keyframes sway {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
        
        .btn-large {
          padding: 16px 32px;
          font-size: 18px;
        }
        
        .btn-danger {
          background-color: #e74c3c;
          color: white;
        }
        
        .btn-danger:hover {
          background-color: #c0392b;
        }
        
        .version-info {
          margin-top: 24px;
          color: #888;
          font-size: 12px;
        }
        
        /* Settings Screen Enhanced Styles */
        .settings-screen {
          max-width: 600px;
        }
        
        .settings-header {
          text-align: center;
          margin-bottom: 24px;
        }
        
        .settings-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        
        .settings-section {
          background: white;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        
        .settings-section h3 {
          color: #4a7c59;
          margin-bottom: 16px;
          padding-bottom: 8px;
          border-bottom: 2px solid #e8dcc4;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        
        .stat-item {
          text-align: center;
          padding: 12px;
          background: #f8f4e8;
          border-radius: 8px;
        }
        
        .stat-item .stat-label {
          display: block;
          font-size: 12px;
          color: #888;
          margin-bottom: 4px;
        }
        
        .stat-item .stat-value {
          display: block;
          font-size: 18px;
          font-weight: bold;
          color: #4a7c59;
        }
        
        .stat-item .stat-value.gold {
          color: #daa520;
        }
        
        .setting-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 0;
          border-bottom: 1px solid #eee;
        }
        
        .setting-row:last-child {
          border-bottom: none;
        }
        
        .toggle-btn {
          padding: 8px 16px;
          border: 2px solid #4a7c59;
          border-radius: 20px;
          background: white;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .toggle-btn.active {
          background: #4a7c59;
          color: white;
        }
        
        .setting-note {
          font-size: 12px;
          color: #888;
          margin-top: 8px;
          font-style: italic;
        }
        
        .controls-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .control-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .control-item .key {
          background: #333;
          color: white;
          padding: 4px 12px;
          border-radius: 4px;
          font-family: monospace;
          font-size: 14px;
          min-width: 80px;
          text-align: center;
        }
        
        .danger-zone {
          border: 2px solid #e74c3c;
        }
        
        .danger-zone h3 {
          color: #e74c3c;
          border-color: #f8d7da;
        }
        
        .confirm-reset {
          text-align: center;
        }
        
        .warning-text {
          color: #e74c3c;
          margin-bottom: 16px;
          font-weight: bold;
        }
        
        .confirm-buttons {
          display: flex;
          gap: 12px;
          justify-content: center;
        }
        
        .back-btn {
          margin-top: 8px;
        }
        
        /* Responsive adjustments */
        @media (max-width: 600px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .tutorial-modal {
            padding: 24px 16px;
          }
          
          .pause-menu {
            min-width: 260px;
            padding: 24px;
          }
        }
      `})]})},x0=()=>o.jsx(o0,{children:o.jsx(v0,{})});js.createRoot(document.getElementById("root")).render(o.jsx(Zl.StrictMode,{children:o.jsx(x0,{})}));
//# sourceMappingURL=index-C7hj0OV6.js.map
