var Qc=Object.defineProperty;var Gc=(e,t,n)=>t in e?Qc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var wr=(e,t,n)=>Gc(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function Sa(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ka={exports:{}},Sl={},Ca={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cr=Symbol.for("react.element"),bc=Symbol.for("react.portal"),Yc=Symbol.for("react.fragment"),Kc=Symbol.for("react.strict_mode"),Xc=Symbol.for("react.profiler"),Zc=Symbol.for("react.provider"),Jc=Symbol.for("react.context"),qc=Symbol.for("react.forward_ref"),ed=Symbol.for("react.suspense"),td=Symbol.for("react.memo"),nd=Symbol.for("react.lazy"),rs=Symbol.iterator;function rd(e){return e===null||typeof e!="object"?null:(e=rs&&e[rs]||e["@@iterator"],typeof e=="function"?e:null)}var Na={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ja=Object.assign,Ea={};function Sn(e,t,n){this.props=e,this.context=t,this.refs=Ea,this.updater=n||Na}Sn.prototype.isReactComponent={};Sn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Sn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ta(){}Ta.prototype=Sn.prototype;function ai(e,t,n){this.props=e,this.context=t,this.refs=Ea,this.updater=n||Na}var ui=ai.prototype=new Ta;ui.constructor=ai;ja(ui,Sn.prototype);ui.isPureReactComponent=!0;var ls=Array.isArray,za=Object.prototype.hasOwnProperty,ci={current:null},_a={key:!0,ref:!0,__self:!0,__source:!0};function Pa(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)za.call(t,r)&&!_a.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:cr,type:e,key:o,ref:i,props:l,_owner:ci.current}}function ld(e,t){return{$$typeof:cr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function di(e){return typeof e=="object"&&e!==null&&e.$$typeof===cr}function od(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var os=/\/+/g;function Wl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?od(""+e.key):t.toString(36)}function Wr(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case cr:case bc:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+Wl(i,0):r,ls(l)?(n="",e!=null&&(n=e.replace(os,"$&/")+"/"),Wr(l,t,n,"",function(d){return d})):l!=null&&(di(l)&&(l=ld(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(os,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",ls(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+Wl(o,s);i+=Wr(o,t,n,u,l)}else if(u=rd(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+Wl(o,s++),i+=Wr(o,t,n,u,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Sr(e,t,n){if(e==null)return e;var r=[],l=0;return Wr(e,r,"","",function(o){return t.call(n,o,l++)}),r}function id(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var he={current:null},$r={transition:null},sd={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:$r,ReactCurrentOwner:ci};function La(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:Sr,forEach:function(e,t,n){Sr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Sr(e,function(){t++}),t},toArray:function(e){return Sr(e,function(t){return t})||[]},only:function(e){if(!di(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=Sn;D.Fragment=Yc;D.Profiler=Xc;D.PureComponent=ai;D.StrictMode=Kc;D.Suspense=ed;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sd;D.act=La;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ja({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=ci.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)za.call(t,u)&&!_a.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:cr,type:e.type,key:l,ref:o,props:r,_owner:i}};D.createContext=function(e){return e={$$typeof:Jc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Zc,_context:e},e.Consumer=e};D.createElement=Pa;D.createFactory=function(e){var t=Pa.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:qc,render:e}};D.isValidElement=di;D.lazy=function(e){return{$$typeof:nd,_payload:{_status:-1,_result:e},_init:id}};D.memo=function(e,t){return{$$typeof:td,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=$r.transition;$r.transition={};try{e()}finally{$r.transition=t}};D.unstable_act=La;D.useCallback=function(e,t){return he.current.useCallback(e,t)};D.useContext=function(e){return he.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return he.current.useDeferredValue(e)};D.useEffect=function(e,t){return he.current.useEffect(e,t)};D.useId=function(){return he.current.useId()};D.useImperativeHandle=function(e,t,n){return he.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return he.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return he.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return he.current.useMemo(e,t)};D.useReducer=function(e,t,n){return he.current.useReducer(e,t,n)};D.useRef=function(e){return he.current.useRef(e)};D.useState=function(e){return he.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return he.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return he.current.useTransition()};D.version="18.3.1";Ca.exports=D;var E=Ca.exports;const Ma=Sa(E);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ad=E,ud=Symbol.for("react.element"),cd=Symbol.for("react.fragment"),dd=Object.prototype.hasOwnProperty,fd=ad.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pd={key:!0,ref:!0,__self:!0,__source:!0};function Da(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)dd.call(t,r)&&!pd.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:ud,type:e,key:o,ref:i,props:l,_owner:fd.current}}Sl.Fragment=cd;Sl.jsx=Da;Sl.jsxs=Da;ka.exports=Sl;var a=ka.exports,mo={},Ra={exports:{}},Te={},Fa={exports:{}},Ia={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,L){var M=N.length;N.push(L);e:for(;0<M;){var K=M-1>>>1,F=N[K];if(0<l(F,L))N[K]=L,N[M]=F,M=K;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var L=N[0],M=N.pop();if(M!==L){N[0]=M;e:for(var K=0,F=N.length,X=F>>>1;K<X;){var ae=2*(K+1)-1,gr=N[ae],Ke=ae+1,Ht=N[Ke];if(0>l(gr,M))Ke<F&&0>l(Ht,gr)?(N[K]=Ht,N[Ke]=M,K=Ke):(N[K]=gr,N[ae]=M,K=ae);else if(Ke<F&&0>l(Ht,M))N[K]=Ht,N[Ke]=M,K=Ke;else break e}}return L}function l(N,L){var M=N.sortIndex-L.sortIndex;return M!==0?M:N.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var u=[],d=[],m=1,h=null,g=3,x=!1,v=!1,y=!1,C=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var L=n(d);L!==null;){if(L.callback===null)r(d);else if(L.startTime<=N)r(d),L.sortIndex=L.expirationTime,t(u,L);else break;L=n(d)}}function w(N){if(y=!1,p(N),!v)if(n(u)!==null)v=!0,Y(k);else{var L=n(d);L!==null&&He(w,L.startTime-N)}}function k(N,L){v=!1,y&&(y=!1,f(_),_=-1),x=!0;var M=g;try{for(p(L),h=n(u);h!==null&&(!(h.expirationTime>L)||N&&!J());){var K=h.callback;if(typeof K=="function"){h.callback=null,g=h.priorityLevel;var F=K(h.expirationTime<=L);L=e.unstable_now(),typeof F=="function"?h.callback=F:h===n(u)&&r(u),p(L)}else r(u);h=n(u)}if(h!==null)var X=!0;else{var ae=n(d);ae!==null&&He(w,ae.startTime-L),X=!1}return X}finally{h=null,g=M,x=!1}}var z=!1,j=null,_=-1,A=5,P=-1;function J(){return!(e.unstable_now()-P<A)}function $(){if(j!==null){var N=e.unstable_now();P=N;var L=!0;try{L=j(!0,N)}finally{L?ke():(z=!1,j=null)}}else z=!1}var ke;if(typeof c=="function")ke=function(){c($)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,R=O.port2;O.port1.onmessage=$,ke=function(){R.postMessage(null)}}else ke=function(){C($,0)};function Y(N){j=N,z||(z=!0,ke())}function He(N,L){_=C(function(){N(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){v||x||(v=!0,Y(k))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(N){switch(g){case 1:case 2:case 3:var L=3;break;default:L=g}var M=g;g=L;try{return N()}finally{g=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,L){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var M=g;g=N;try{return L()}finally{g=M}},e.unstable_scheduleCallback=function(N,L,M){var K=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?K+M:K):M=K,N){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=M+F,N={id:m++,callback:L,priorityLevel:N,startTime:M,expirationTime:F,sortIndex:-1},M>K?(N.sortIndex=M,t(d,N),n(u)===null&&N===n(d)&&(y?(f(_),_=-1):y=!0,He(w,M-K))):(N.sortIndex=F,t(u,N),v||x||(v=!0,Y(k))),N},e.unstable_shouldYield=J,e.unstable_wrapCallback=function(N){var L=g;return function(){var M=g;g=L;try{return N.apply(this,arguments)}finally{g=M}}}})(Ia);Fa.exports=Ia;var md=Fa.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hd=E,Ee=md;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Oa=new Set,Gn={};function Ut(e,t){pn(e,t),pn(e+"Capture",t)}function pn(e,t){for(Gn[e]=t,e=0;e<t.length;e++)Oa.add(t[e])}var nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ho=Object.prototype.hasOwnProperty,gd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,is={},ss={};function vd(e){return ho.call(ss,e)?!0:ho.call(is,e)?!1:gd.test(e)?ss[e]=!0:(is[e]=!0,!1)}function yd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function xd(e,t,n,r){if(t===null||typeof t>"u"||yd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ge(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var fi=/[\-:]([a-z])/g;function pi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(fi,pi);se[t]=new ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(fi,pi);se[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(fi,pi);se[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function mi(e,t,n,r){var l=se.hasOwnProperty(t)?se[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(xd(t,n,l,r)&&(n=null),r||l===null?vd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var it=hd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,kr=Symbol.for("react.element"),Gt=Symbol.for("react.portal"),bt=Symbol.for("react.fragment"),hi=Symbol.for("react.strict_mode"),go=Symbol.for("react.profiler"),Aa=Symbol.for("react.provider"),Wa=Symbol.for("react.context"),gi=Symbol.for("react.forward_ref"),vo=Symbol.for("react.suspense"),yo=Symbol.for("react.suspense_list"),vi=Symbol.for("react.memo"),ut=Symbol.for("react.lazy"),$a=Symbol.for("react.offscreen"),as=Symbol.iterator;function Nn(e){return e===null||typeof e!="object"?null:(e=as&&e[as]||e["@@iterator"],typeof e=="function"?e:null)}var b=Object.assign,$l;function Mn(e){if($l===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);$l=t&&t[1]||""}return`
`+$l+e}var Ul=!1;function Bl(e,t){if(!e||Ul)return"";Ul=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,s=o.length-1;1<=i&&0<=s&&l[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==o[s]){var u=`
`+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=s);break}}}finally{Ul=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Mn(e):""}function wd(e){switch(e.tag){case 5:return Mn(e.type);case 16:return Mn("Lazy");case 13:return Mn("Suspense");case 19:return Mn("SuspenseList");case 0:case 2:case 15:return e=Bl(e.type,!1),e;case 11:return e=Bl(e.type.render,!1),e;case 1:return e=Bl(e.type,!0),e;default:return""}}function xo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case bt:return"Fragment";case Gt:return"Portal";case go:return"Profiler";case hi:return"StrictMode";case vo:return"Suspense";case yo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Wa:return(e.displayName||"Context")+".Consumer";case Aa:return(e._context.displayName||"Context")+".Provider";case gi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vi:return t=e.displayName||null,t!==null?t:xo(e.type)||"Memo";case ut:t=e._payload,e=e._init;try{return xo(e(t))}catch{}}return null}function Sd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xo(t);case 8:return t===hi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Nt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ua(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function kd(e){var t=Ua(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Cr(e){e._valueTracker||(e._valueTracker=kd(e))}function Ba(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ua(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Zr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function wo(e,t){var n=t.checked;return b({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function us(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Nt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ha(e,t){t=t.checked,t!=null&&mi(e,"checked",t,!1)}function So(e,t){Ha(e,t);var n=Nt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ko(e,t.type,n):t.hasOwnProperty("defaultValue")&&ko(e,t.type,Nt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function cs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ko(e,t,n){(t!=="number"||Zr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Dn=Array.isArray;function ln(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Nt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Co(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return b({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ds(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Dn(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Nt(n)}}function Va(e,t){var n=Nt(t.value),r=Nt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function fs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Qa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function No(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Qa(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Nr,Ga=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Nr=Nr||document.createElement("div"),Nr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Nr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function bn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var On={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Cd=["Webkit","ms","Moz","O"];Object.keys(On).forEach(function(e){Cd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),On[t]=On[e]})});function ba(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||On.hasOwnProperty(e)&&On[e]?(""+t).trim():t+"px"}function Ya(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=ba(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Nd=b({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jo(e,t){if(t){if(Nd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Eo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var To=null;function yi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zo=null,on=null,sn=null;function ps(e){if(e=pr(e)){if(typeof zo!="function")throw Error(S(280));var t=e.stateNode;t&&(t=El(t),zo(e.stateNode,e.type,t))}}function Ka(e){on?sn?sn.push(e):sn=[e]:on=e}function Xa(){if(on){var e=on,t=sn;if(sn=on=null,ps(e),t)for(e=0;e<t.length;e++)ps(t[e])}}function Za(e,t){return e(t)}function Ja(){}var Hl=!1;function qa(e,t,n){if(Hl)return e(t,n);Hl=!0;try{return Za(e,t,n)}finally{Hl=!1,(on!==null||sn!==null)&&(Ja(),Xa())}}function Yn(e,t){var n=e.stateNode;if(n===null)return null;var r=El(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var _o=!1;if(nt)try{var jn={};Object.defineProperty(jn,"passive",{get:function(){_o=!0}}),window.addEventListener("test",jn,jn),window.removeEventListener("test",jn,jn)}catch{_o=!1}function jd(e,t,n,r,l,o,i,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(m){this.onError(m)}}var An=!1,Jr=null,qr=!1,Po=null,Ed={onError:function(e){An=!0,Jr=e}};function Td(e,t,n,r,l,o,i,s,u){An=!1,Jr=null,jd.apply(Ed,arguments)}function zd(e,t,n,r,l,o,i,s,u){if(Td.apply(this,arguments),An){if(An){var d=Jr;An=!1,Jr=null}else throw Error(S(198));qr||(qr=!0,Po=d)}}function Bt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function eu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ms(e){if(Bt(e)!==e)throw Error(S(188))}function _d(e){var t=e.alternate;if(!t){if(t=Bt(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return ms(l),e;if(o===r)return ms(l),t;o=o.sibling}throw Error(S(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function tu(e){return e=_d(e),e!==null?nu(e):null}function nu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=nu(e);if(t!==null)return t;e=e.sibling}return null}var ru=Ee.unstable_scheduleCallback,hs=Ee.unstable_cancelCallback,Pd=Ee.unstable_shouldYield,Ld=Ee.unstable_requestPaint,q=Ee.unstable_now,Md=Ee.unstable_getCurrentPriorityLevel,xi=Ee.unstable_ImmediatePriority,lu=Ee.unstable_UserBlockingPriority,el=Ee.unstable_NormalPriority,Dd=Ee.unstable_LowPriority,ou=Ee.unstable_IdlePriority,kl=null,be=null;function Rd(e){if(be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(kl,e,void 0,(e.current.flags&128)===128)}catch{}}var $e=Math.clz32?Math.clz32:Od,Fd=Math.log,Id=Math.LN2;function Od(e){return e>>>=0,e===0?32:31-(Fd(e)/Id|0)|0}var jr=64,Er=4194304;function Rn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function tl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~l;s!==0?r=Rn(s):(o&=i,o!==0&&(r=Rn(o)))}else i=n&~l,i!==0?r=Rn(i):o!==0&&(r=Rn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-$e(t),l=1<<n,r|=e[n],t&=~l;return r}function Ad(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-$e(o),s=1<<i,u=l[i];u===-1?(!(s&n)||s&r)&&(l[i]=Ad(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function Lo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function iu(){var e=jr;return jr<<=1,!(jr&4194240)&&(jr=64),e}function Vl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function dr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-$e(t),e[t]=n}function $d(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-$e(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function wi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-$e(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var W=0;function su(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var au,Si,uu,cu,du,Mo=!1,Tr=[],gt=null,vt=null,yt=null,Kn=new Map,Xn=new Map,dt=[],Ud="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gs(e,t){switch(e){case"focusin":case"focusout":gt=null;break;case"dragenter":case"dragleave":vt=null;break;case"mouseover":case"mouseout":yt=null;break;case"pointerover":case"pointerout":Kn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xn.delete(t.pointerId)}}function En(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=pr(t),t!==null&&Si(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Bd(e,t,n,r,l){switch(t){case"focusin":return gt=En(gt,e,t,n,r,l),!0;case"dragenter":return vt=En(vt,e,t,n,r,l),!0;case"mouseover":return yt=En(yt,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return Kn.set(o,En(Kn.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Xn.set(o,En(Xn.get(o)||null,e,t,n,r,l)),!0}return!1}function fu(e){var t=Lt(e.target);if(t!==null){var n=Bt(t);if(n!==null){if(t=n.tag,t===13){if(t=eu(n),t!==null){e.blockedOn=t,du(e.priority,function(){uu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ur(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Do(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);To=r,n.target.dispatchEvent(r),To=null}else return t=pr(n),t!==null&&Si(t),e.blockedOn=n,!1;t.shift()}return!0}function vs(e,t,n){Ur(e)&&n.delete(t)}function Hd(){Mo=!1,gt!==null&&Ur(gt)&&(gt=null),vt!==null&&Ur(vt)&&(vt=null),yt!==null&&Ur(yt)&&(yt=null),Kn.forEach(vs),Xn.forEach(vs)}function Tn(e,t){e.blockedOn===t&&(e.blockedOn=null,Mo||(Mo=!0,Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority,Hd)))}function Zn(e){function t(l){return Tn(l,e)}if(0<Tr.length){Tn(Tr[0],e);for(var n=1;n<Tr.length;n++){var r=Tr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(gt!==null&&Tn(gt,e),vt!==null&&Tn(vt,e),yt!==null&&Tn(yt,e),Kn.forEach(t),Xn.forEach(t),n=0;n<dt.length;n++)r=dt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<dt.length&&(n=dt[0],n.blockedOn===null);)fu(n),n.blockedOn===null&&dt.shift()}var an=it.ReactCurrentBatchConfig,nl=!0;function Vd(e,t,n,r){var l=W,o=an.transition;an.transition=null;try{W=1,ki(e,t,n,r)}finally{W=l,an.transition=o}}function Qd(e,t,n,r){var l=W,o=an.transition;an.transition=null;try{W=4,ki(e,t,n,r)}finally{W=l,an.transition=o}}function ki(e,t,n,r){if(nl){var l=Do(e,t,n,r);if(l===null)eo(e,t,r,rl,n),gs(e,r);else if(Bd(l,e,t,n,r))r.stopPropagation();else if(gs(e,r),t&4&&-1<Ud.indexOf(e)){for(;l!==null;){var o=pr(l);if(o!==null&&au(o),o=Do(e,t,n,r),o===null&&eo(e,t,r,rl,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else eo(e,t,r,null,n)}}var rl=null;function Do(e,t,n,r){if(rl=null,e=yi(r),e=Lt(e),e!==null)if(t=Bt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=eu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return rl=e,null}function pu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Md()){case xi:return 1;case lu:return 4;case el:case Dd:return 16;case ou:return 536870912;default:return 16}default:return 16}}var pt=null,Ci=null,Br=null;function mu(){if(Br)return Br;var e,t=Ci,n=t.length,r,l="value"in pt?pt.value:pt.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return Br=l.slice(e,1<r?1-r:void 0)}function Hr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zr(){return!0}function ys(){return!1}function ze(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?zr:ys,this.isPropagationStopped=ys,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zr)},persist:function(){},isPersistent:zr}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ni=ze(kn),fr=b({},kn,{view:0,detail:0}),Gd=ze(fr),Ql,Gl,zn,Cl=b({},fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ji,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zn&&(zn&&e.type==="mousemove"?(Ql=e.screenX-zn.screenX,Gl=e.screenY-zn.screenY):Gl=Ql=0,zn=e),Ql)},movementY:function(e){return"movementY"in e?e.movementY:Gl}}),xs=ze(Cl),bd=b({},Cl,{dataTransfer:0}),Yd=ze(bd),Kd=b({},fr,{relatedTarget:0}),bl=ze(Kd),Xd=b({},kn,{animationName:0,elapsedTime:0,pseudoElement:0}),Zd=ze(Xd),Jd=b({},kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qd=ze(Jd),ef=b({},kn,{data:0}),ws=ze(ef),tf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rf[e])?!!t[e]:!1}function ji(){return lf}var of=b({},fr,{key:function(e){if(e.key){var t=tf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ji,charCode:function(e){return e.type==="keypress"?Hr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sf=ze(of),af=b({},Cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ss=ze(af),uf=b({},fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ji}),cf=ze(uf),df=b({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ff=ze(df),pf=b({},Cl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mf=ze(pf),hf=[9,13,27,32],Ei=nt&&"CompositionEvent"in window,Wn=null;nt&&"documentMode"in document&&(Wn=document.documentMode);var gf=nt&&"TextEvent"in window&&!Wn,hu=nt&&(!Ei||Wn&&8<Wn&&11>=Wn),ks=" ",Cs=!1;function gu(e,t){switch(e){case"keyup":return hf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yt=!1;function vf(e,t){switch(e){case"compositionend":return vu(t);case"keypress":return t.which!==32?null:(Cs=!0,ks);case"textInput":return e=t.data,e===ks&&Cs?null:e;default:return null}}function yf(e,t){if(Yt)return e==="compositionend"||!Ei&&gu(e,t)?(e=mu(),Br=Ci=pt=null,Yt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return hu&&t.locale!=="ko"?null:t.data;default:return null}}var xf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ns(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xf[e.type]:t==="textarea"}function yu(e,t,n,r){Ka(r),t=ll(t,"onChange"),0<t.length&&(n=new Ni("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var $n=null,Jn=null;function wf(e){_u(e,0)}function Nl(e){var t=Zt(e);if(Ba(t))return e}function Sf(e,t){if(e==="change")return t}var xu=!1;if(nt){var Yl;if(nt){var Kl="oninput"in document;if(!Kl){var js=document.createElement("div");js.setAttribute("oninput","return;"),Kl=typeof js.oninput=="function"}Yl=Kl}else Yl=!1;xu=Yl&&(!document.documentMode||9<document.documentMode)}function Es(){$n&&($n.detachEvent("onpropertychange",wu),Jn=$n=null)}function wu(e){if(e.propertyName==="value"&&Nl(Jn)){var t=[];yu(t,Jn,e,yi(e)),qa(wf,t)}}function kf(e,t,n){e==="focusin"?(Es(),$n=t,Jn=n,$n.attachEvent("onpropertychange",wu)):e==="focusout"&&Es()}function Cf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Nl(Jn)}function Nf(e,t){if(e==="click")return Nl(t)}function jf(e,t){if(e==="input"||e==="change")return Nl(t)}function Ef(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Be=typeof Object.is=="function"?Object.is:Ef;function qn(e,t){if(Be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!ho.call(t,l)||!Be(e[l],t[l]))return!1}return!0}function Ts(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zs(e,t){var n=Ts(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ts(n)}}function Su(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Su(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ku(){for(var e=window,t=Zr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Zr(e.document)}return t}function Ti(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Tf(e){var t=ku(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Su(n.ownerDocument.documentElement,n)){if(r!==null&&Ti(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=zs(n,o);var i=zs(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var zf=nt&&"documentMode"in document&&11>=document.documentMode,Kt=null,Ro=null,Un=null,Fo=!1;function _s(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fo||Kt==null||Kt!==Zr(r)||(r=Kt,"selectionStart"in r&&Ti(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Un&&qn(Un,r)||(Un=r,r=ll(Ro,"onSelect"),0<r.length&&(t=new Ni("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Kt)))}function _r(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Xt={animationend:_r("Animation","AnimationEnd"),animationiteration:_r("Animation","AnimationIteration"),animationstart:_r("Animation","AnimationStart"),transitionend:_r("Transition","TransitionEnd")},Xl={},Cu={};nt&&(Cu=document.createElement("div").style,"AnimationEvent"in window||(delete Xt.animationend.animation,delete Xt.animationiteration.animation,delete Xt.animationstart.animation),"TransitionEvent"in window||delete Xt.transitionend.transition);function jl(e){if(Xl[e])return Xl[e];if(!Xt[e])return e;var t=Xt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Cu)return Xl[e]=t[n];return e}var Nu=jl("animationend"),ju=jl("animationiteration"),Eu=jl("animationstart"),Tu=jl("transitionend"),zu=new Map,Ps="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Et(e,t){zu.set(e,t),Ut(t,[e])}for(var Zl=0;Zl<Ps.length;Zl++){var Jl=Ps[Zl],_f=Jl.toLowerCase(),Pf=Jl[0].toUpperCase()+Jl.slice(1);Et(_f,"on"+Pf)}Et(Nu,"onAnimationEnd");Et(ju,"onAnimationIteration");Et(Eu,"onAnimationStart");Et("dblclick","onDoubleClick");Et("focusin","onFocus");Et("focusout","onBlur");Et(Tu,"onTransitionEnd");pn("onMouseEnter",["mouseout","mouseover"]);pn("onMouseLeave",["mouseout","mouseover"]);pn("onPointerEnter",["pointerout","pointerover"]);pn("onPointerLeave",["pointerout","pointerover"]);Ut("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ut("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ut("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ut("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fn));function Ls(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,zd(r,t,void 0,e),e.currentTarget=null}function _u(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==o&&l.isPropagationStopped())break e;Ls(l,s,d),o=u}else for(i=0;i<r.length;i++){if(s=r[i],u=s.instance,d=s.currentTarget,s=s.listener,u!==o&&l.isPropagationStopped())break e;Ls(l,s,d),o=u}}}if(qr)throw e=Po,qr=!1,Po=null,e}function B(e,t){var n=t[$o];n===void 0&&(n=t[$o]=new Set);var r=e+"__bubble";n.has(r)||(Pu(t,e,2,!1),n.add(r))}function ql(e,t,n){var r=0;t&&(r|=4),Pu(n,e,r,t)}var Pr="_reactListening"+Math.random().toString(36).slice(2);function er(e){if(!e[Pr]){e[Pr]=!0,Oa.forEach(function(n){n!=="selectionchange"&&(Lf.has(n)||ql(n,!1,e),ql(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Pr]||(t[Pr]=!0,ql("selectionchange",!1,t))}}function Pu(e,t,n,r){switch(pu(t)){case 1:var l=Vd;break;case 4:l=Qd;break;default:l=ki}n=l.bind(null,t,n,e),l=void 0,!_o||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function eo(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;i=i.return}for(;s!==null;){if(i=Lt(s),i===null)return;if(u=i.tag,u===5||u===6){r=o=i;continue e}s=s.parentNode}}r=r.return}qa(function(){var d=o,m=yi(n),h=[];e:{var g=zu.get(e);if(g!==void 0){var x=Ni,v=e;switch(e){case"keypress":if(Hr(n)===0)break e;case"keydown":case"keyup":x=sf;break;case"focusin":v="focus",x=bl;break;case"focusout":v="blur",x=bl;break;case"beforeblur":case"afterblur":x=bl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=xs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Yd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=cf;break;case Nu:case ju:case Eu:x=Zd;break;case Tu:x=ff;break;case"scroll":x=Gd;break;case"wheel":x=mf;break;case"copy":case"cut":case"paste":x=qd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Ss}var y=(t&4)!==0,C=!y&&e==="scroll",f=y?g!==null?g+"Capture":null:g;y=[];for(var c=d,p;c!==null;){p=c;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,f!==null&&(w=Yn(c,f),w!=null&&y.push(tr(c,w,p)))),C)break;c=c.return}0<y.length&&(g=new x(g,v,null,n,m),h.push({event:g,listeners:y}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&n!==To&&(v=n.relatedTarget||n.fromElement)&&(Lt(v)||v[rt]))break e;if((x||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,x?(v=n.relatedTarget||n.toElement,x=d,v=v?Lt(v):null,v!==null&&(C=Bt(v),v!==C||v.tag!==5&&v.tag!==6)&&(v=null)):(x=null,v=d),x!==v)){if(y=xs,w="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(y=Ss,w="onPointerLeave",f="onPointerEnter",c="pointer"),C=x==null?g:Zt(x),p=v==null?g:Zt(v),g=new y(w,c+"leave",x,n,m),g.target=C,g.relatedTarget=p,w=null,Lt(m)===d&&(y=new y(f,c+"enter",v,n,m),y.target=p,y.relatedTarget=C,w=y),C=w,x&&v)t:{for(y=x,f=v,c=0,p=y;p;p=Qt(p))c++;for(p=0,w=f;w;w=Qt(w))p++;for(;0<c-p;)y=Qt(y),c--;for(;0<p-c;)f=Qt(f),p--;for(;c--;){if(y===f||f!==null&&y===f.alternate)break t;y=Qt(y),f=Qt(f)}y=null}else y=null;x!==null&&Ms(h,g,x,y,!1),v!==null&&C!==null&&Ms(h,C,v,y,!0)}}e:{if(g=d?Zt(d):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var k=Sf;else if(Ns(g))if(xu)k=jf;else{k=Cf;var z=kf}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=Nf);if(k&&(k=k(e,d))){yu(h,k,n,m);break e}z&&z(e,g,d),e==="focusout"&&(z=g._wrapperState)&&z.controlled&&g.type==="number"&&ko(g,"number",g.value)}switch(z=d?Zt(d):window,e){case"focusin":(Ns(z)||z.contentEditable==="true")&&(Kt=z,Ro=d,Un=null);break;case"focusout":Un=Ro=Kt=null;break;case"mousedown":Fo=!0;break;case"contextmenu":case"mouseup":case"dragend":Fo=!1,_s(h,n,m);break;case"selectionchange":if(zf)break;case"keydown":case"keyup":_s(h,n,m)}var j;if(Ei)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Yt?gu(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(hu&&n.locale!=="ko"&&(Yt||_!=="onCompositionStart"?_==="onCompositionEnd"&&Yt&&(j=mu()):(pt=m,Ci="value"in pt?pt.value:pt.textContent,Yt=!0)),z=ll(d,_),0<z.length&&(_=new ws(_,e,null,n,m),h.push({event:_,listeners:z}),j?_.data=j:(j=vu(n),j!==null&&(_.data=j)))),(j=gf?vf(e,n):yf(e,n))&&(d=ll(d,"onBeforeInput"),0<d.length&&(m=new ws("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:d}),m.data=j))}_u(h,t)})}function tr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ll(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Yn(e,n),o!=null&&r.unshift(tr(e,o,l)),o=Yn(e,t),o!=null&&r.push(tr(e,o,l))),e=e.return}return r}function Qt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ms(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,l?(u=Yn(n,o),u!=null&&i.unshift(tr(n,u,s))):l||(u=Yn(n,o),u!=null&&i.push(tr(n,u,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Mf=/\r\n?/g,Df=/\u0000|\uFFFD/g;function Ds(e){return(typeof e=="string"?e:""+e).replace(Mf,`
`).replace(Df,"")}function Lr(e,t,n){if(t=Ds(t),Ds(e)!==t&&n)throw Error(S(425))}function ol(){}var Io=null,Oo=null;function Ao(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wo=typeof setTimeout=="function"?setTimeout:void 0,Rf=typeof clearTimeout=="function"?clearTimeout:void 0,Rs=typeof Promise=="function"?Promise:void 0,Ff=typeof queueMicrotask=="function"?queueMicrotask:typeof Rs<"u"?function(e){return Rs.resolve(null).then(e).catch(If)}:Wo;function If(e){setTimeout(function(){throw e})}function to(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Zn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Zn(t)}function xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Fs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Cn=Math.random().toString(36).slice(2),Ge="__reactFiber$"+Cn,nr="__reactProps$"+Cn,rt="__reactContainer$"+Cn,$o="__reactEvents$"+Cn,Of="__reactListeners$"+Cn,Af="__reactHandles$"+Cn;function Lt(e){var t=e[Ge];if(t)return t;for(var n=e.parentNode;n;){if(t=n[rt]||n[Ge]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Fs(e);e!==null;){if(n=e[Ge])return n;e=Fs(e)}return t}e=n,n=e.parentNode}return null}function pr(e){return e=e[Ge]||e[rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function El(e){return e[nr]||null}var Uo=[],Jt=-1;function Tt(e){return{current:e}}function H(e){0>Jt||(e.current=Uo[Jt],Uo[Jt]=null,Jt--)}function U(e,t){Jt++,Uo[Jt]=e.current,e.current=t}var jt={},fe=Tt(jt),xe=Tt(!1),It=jt;function mn(e,t){var n=e.type.contextTypes;if(!n)return jt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function we(e){return e=e.childContextTypes,e!=null}function il(){H(xe),H(fe)}function Is(e,t,n){if(fe.current!==jt)throw Error(S(168));U(fe,t),U(xe,n)}function Lu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(S(108,Sd(e)||"Unknown",l));return b({},n,r)}function sl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jt,It=fe.current,U(fe,e),U(xe,xe.current),!0}function Os(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Lu(e,t,It),r.__reactInternalMemoizedMergedChildContext=e,H(xe),H(fe),U(fe,e)):H(xe),U(xe,n)}var Ze=null,Tl=!1,no=!1;function Mu(e){Ze===null?Ze=[e]:Ze.push(e)}function Wf(e){Tl=!0,Mu(e)}function zt(){if(!no&&Ze!==null){no=!0;var e=0,t=W;try{var n=Ze;for(W=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ze=null,Tl=!1}catch(l){throw Ze!==null&&(Ze=Ze.slice(e+1)),ru(xi,zt),l}finally{W=t,no=!1}}return null}var qt=[],en=0,al=null,ul=0,_e=[],Pe=0,Ot=null,Je=1,qe="";function _t(e,t){qt[en++]=ul,qt[en++]=al,al=e,ul=t}function Du(e,t,n){_e[Pe++]=Je,_e[Pe++]=qe,_e[Pe++]=Ot,Ot=e;var r=Je;e=qe;var l=32-$e(r)-1;r&=~(1<<l),n+=1;var o=32-$e(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,Je=1<<32-$e(t)+l|n<<l|r,qe=o+e}else Je=1<<o|n<<l|r,qe=e}function zi(e){e.return!==null&&(_t(e,1),Du(e,1,0))}function _i(e){for(;e===al;)al=qt[--en],qt[en]=null,ul=qt[--en],qt[en]=null;for(;e===Ot;)Ot=_e[--Pe],_e[Pe]=null,qe=_e[--Pe],_e[Pe]=null,Je=_e[--Pe],_e[Pe]=null}var je=null,Ne=null,V=!1,Ae=null;function Ru(e,t){var n=Le(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function As(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,je=e,Ne=xt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,je=e,Ne=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ot!==null?{id:Je,overflow:qe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Le(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,je=e,Ne=null,!0):!1;default:return!1}}function Bo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ho(e){if(V){var t=Ne;if(t){var n=t;if(!As(e,t)){if(Bo(e))throw Error(S(418));t=xt(n.nextSibling);var r=je;t&&As(e,t)?Ru(r,n):(e.flags=e.flags&-4097|2,V=!1,je=e)}}else{if(Bo(e))throw Error(S(418));e.flags=e.flags&-4097|2,V=!1,je=e}}}function Ws(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;je=e}function Mr(e){if(e!==je)return!1;if(!V)return Ws(e),V=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ao(e.type,e.memoizedProps)),t&&(t=Ne)){if(Bo(e))throw Fu(),Error(S(418));for(;t;)Ru(e,t),t=xt(t.nextSibling)}if(Ws(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ne=xt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ne=null}}else Ne=je?xt(e.stateNode.nextSibling):null;return!0}function Fu(){for(var e=Ne;e;)e=xt(e.nextSibling)}function hn(){Ne=je=null,V=!1}function Pi(e){Ae===null?Ae=[e]:Ae.push(e)}var $f=it.ReactCurrentBatchConfig;function _n(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var s=l.refs;i===null?delete s[o]:s[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Dr(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function $s(e){var t=e._init;return t(e._payload)}function Iu(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=Ct(f,c),f.index=0,f.sibling=null,f}function o(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,p,w){return c===null||c.tag!==6?(c=uo(p,f.mode,w),c.return=f,c):(c=l(c,p),c.return=f,c)}function u(f,c,p,w){var k=p.type;return k===bt?m(f,c,p.props.children,w,p.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ut&&$s(k)===c.type)?(w=l(c,p.props),w.ref=_n(f,c,p),w.return=f,w):(w=Xr(p.type,p.key,p.props,null,f.mode,w),w.ref=_n(f,c,p),w.return=f,w)}function d(f,c,p,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=co(p,f.mode,w),c.return=f,c):(c=l(c,p.children||[]),c.return=f,c)}function m(f,c,p,w,k){return c===null||c.tag!==7?(c=Ft(p,f.mode,w,k),c.return=f,c):(c=l(c,p),c.return=f,c)}function h(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=uo(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case kr:return p=Xr(c.type,c.key,c.props,null,f.mode,p),p.ref=_n(f,null,c),p.return=f,p;case Gt:return c=co(c,f.mode,p),c.return=f,c;case ut:var w=c._init;return h(f,w(c._payload),p)}if(Dn(c)||Nn(c))return c=Ft(c,f.mode,p,null),c.return=f,c;Dr(f,c)}return null}function g(f,c,p,w){var k=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return k!==null?null:s(f,c,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case kr:return p.key===k?u(f,c,p,w):null;case Gt:return p.key===k?d(f,c,p,w):null;case ut:return k=p._init,g(f,c,k(p._payload),w)}if(Dn(p)||Nn(p))return k!==null?null:m(f,c,p,w,null);Dr(f,p)}return null}function x(f,c,p,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(p)||null,s(c,f,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case kr:return f=f.get(w.key===null?p:w.key)||null,u(c,f,w,k);case Gt:return f=f.get(w.key===null?p:w.key)||null,d(c,f,w,k);case ut:var z=w._init;return x(f,c,p,z(w._payload),k)}if(Dn(w)||Nn(w))return f=f.get(p)||null,m(c,f,w,k,null);Dr(c,w)}return null}function v(f,c,p,w){for(var k=null,z=null,j=c,_=c=0,A=null;j!==null&&_<p.length;_++){j.index>_?(A=j,j=null):A=j.sibling;var P=g(f,j,p[_],w);if(P===null){j===null&&(j=A);break}e&&j&&P.alternate===null&&t(f,j),c=o(P,c,_),z===null?k=P:z.sibling=P,z=P,j=A}if(_===p.length)return n(f,j),V&&_t(f,_),k;if(j===null){for(;_<p.length;_++)j=h(f,p[_],w),j!==null&&(c=o(j,c,_),z===null?k=j:z.sibling=j,z=j);return V&&_t(f,_),k}for(j=r(f,j);_<p.length;_++)A=x(j,f,_,p[_],w),A!==null&&(e&&A.alternate!==null&&j.delete(A.key===null?_:A.key),c=o(A,c,_),z===null?k=A:z.sibling=A,z=A);return e&&j.forEach(function(J){return t(f,J)}),V&&_t(f,_),k}function y(f,c,p,w){var k=Nn(p);if(typeof k!="function")throw Error(S(150));if(p=k.call(p),p==null)throw Error(S(151));for(var z=k=null,j=c,_=c=0,A=null,P=p.next();j!==null&&!P.done;_++,P=p.next()){j.index>_?(A=j,j=null):A=j.sibling;var J=g(f,j,P.value,w);if(J===null){j===null&&(j=A);break}e&&j&&J.alternate===null&&t(f,j),c=o(J,c,_),z===null?k=J:z.sibling=J,z=J,j=A}if(P.done)return n(f,j),V&&_t(f,_),k;if(j===null){for(;!P.done;_++,P=p.next())P=h(f,P.value,w),P!==null&&(c=o(P,c,_),z===null?k=P:z.sibling=P,z=P);return V&&_t(f,_),k}for(j=r(f,j);!P.done;_++,P=p.next())P=x(j,f,_,P.value,w),P!==null&&(e&&P.alternate!==null&&j.delete(P.key===null?_:P.key),c=o(P,c,_),z===null?k=P:z.sibling=P,z=P);return e&&j.forEach(function($){return t(f,$)}),V&&_t(f,_),k}function C(f,c,p,w){if(typeof p=="object"&&p!==null&&p.type===bt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case kr:e:{for(var k=p.key,z=c;z!==null;){if(z.key===k){if(k=p.type,k===bt){if(z.tag===7){n(f,z.sibling),c=l(z,p.props.children),c.return=f,f=c;break e}}else if(z.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ut&&$s(k)===z.type){n(f,z.sibling),c=l(z,p.props),c.ref=_n(f,z,p),c.return=f,f=c;break e}n(f,z);break}else t(f,z);z=z.sibling}p.type===bt?(c=Ft(p.props.children,f.mode,w,p.key),c.return=f,f=c):(w=Xr(p.type,p.key,p.props,null,f.mode,w),w.ref=_n(f,c,p),w.return=f,f=w)}return i(f);case Gt:e:{for(z=p.key;c!==null;){if(c.key===z)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=l(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=co(p,f.mode,w),c.return=f,f=c}return i(f);case ut:return z=p._init,C(f,c,z(p._payload),w)}if(Dn(p))return v(f,c,p,w);if(Nn(p))return y(f,c,p,w);Dr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=l(c,p),c.return=f,f=c):(n(f,c),c=uo(p,f.mode,w),c.return=f,f=c),i(f)):n(f,c)}return C}var gn=Iu(!0),Ou=Iu(!1),cl=Tt(null),dl=null,tn=null,Li=null;function Mi(){Li=tn=dl=null}function Di(e){var t=cl.current;H(cl),e._currentValue=t}function Vo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function un(e,t){dl=e,Li=tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ye=!0),e.firstContext=null)}function De(e){var t=e._currentValue;if(Li!==e)if(e={context:e,memoizedValue:t,next:null},tn===null){if(dl===null)throw Error(S(308));tn=e,dl.dependencies={lanes:0,firstContext:e}}else tn=tn.next=e;return t}var Mt=null;function Ri(e){Mt===null?Mt=[e]:Mt.push(e)}function Au(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Ri(t)):(n.next=l.next,l.next=n),t.interleaved=n,lt(e,r)}function lt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ct=!1;function Fi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function tt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function wt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,lt(e,n)}return l=r.interleaved,l===null?(t.next=t,Ri(r)):(t.next=l.next,l.next=t),r.interleaved=t,lt(e,n)}function Vr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wi(e,n)}}function Us(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function fl(e,t,n,r){var l=e.updateQueue;ct=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,d=u.next;u.next=null,i===null?o=d:i.next=d,i=u;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==i&&(s===null?m.firstBaseUpdate=d:s.next=d,m.lastBaseUpdate=u))}if(o!==null){var h=l.baseState;i=0,m=d=u=null,s=o;do{var g=s.lane,x=s.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,y=s;switch(g=t,x=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){h=v.call(x,h,g);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,g=typeof v=="function"?v.call(x,h,g):v,g==null)break e;h=b({},h,g);break e;case 2:ct=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[s]:g.push(s))}else x={eventTime:x,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(d=m=x,u=h):m=m.next=x,i|=g;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;g=s,s=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);if(m===null&&(u=h),l.baseState=u,l.firstBaseUpdate=d,l.lastBaseUpdate=m,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);Wt|=i,e.lanes=i,e.memoizedState=h}}function Bs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(S(191,l));l.call(r)}}}var mr={},Ye=Tt(mr),rr=Tt(mr),lr=Tt(mr);function Dt(e){if(e===mr)throw Error(S(174));return e}function Ii(e,t){switch(U(lr,t),U(rr,e),U(Ye,mr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:No(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=No(t,e)}H(Ye),U(Ye,t)}function vn(){H(Ye),H(rr),H(lr)}function $u(e){Dt(lr.current);var t=Dt(Ye.current),n=No(t,e.type);t!==n&&(U(rr,e),U(Ye,n))}function Oi(e){rr.current===e&&(H(Ye),H(rr))}var Q=Tt(0);function pl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ro=[];function Ai(){for(var e=0;e<ro.length;e++)ro[e]._workInProgressVersionPrimary=null;ro.length=0}var Qr=it.ReactCurrentDispatcher,lo=it.ReactCurrentBatchConfig,At=0,G=null,te=null,re=null,ml=!1,Bn=!1,or=0,Uf=0;function ue(){throw Error(S(321))}function Wi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Be(e[n],t[n]))return!1;return!0}function $i(e,t,n,r,l,o){if(At=o,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Qr.current=e===null||e.memoizedState===null?Qf:Gf,e=n(r,l),Bn){o=0;do{if(Bn=!1,or=0,25<=o)throw Error(S(301));o+=1,re=te=null,t.updateQueue=null,Qr.current=bf,e=n(r,l)}while(Bn)}if(Qr.current=hl,t=te!==null&&te.next!==null,At=0,re=te=G=null,ml=!1,t)throw Error(S(300));return e}function Ui(){var e=or!==0;return or=0,e}function Qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?G.memoizedState=re=e:re=re.next=e,re}function Re(){if(te===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=re===null?G.memoizedState:re.next;if(t!==null)re=t,te=e;else{if(e===null)throw Error(S(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},re===null?G.memoizedState=re=e:re=re.next=e}return re}function ir(e,t){return typeof t=="function"?t(e):t}function oo(e){var t=Re(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=te,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=i=null,u=null,d=o;do{var m=d.lane;if((At&m)===m)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=h,i=r):u=u.next=h,G.lanes|=m,Wt|=m}d=d.next}while(d!==null&&d!==o);u===null?i=r:u.next=s,Be(r,t.memoizedState)||(ye=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,G.lanes|=o,Wt|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function io(e){var t=Re(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);Be(o,t.memoizedState)||(ye=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Uu(){}function Bu(e,t){var n=G,r=Re(),l=t(),o=!Be(r.memoizedState,l);if(o&&(r.memoizedState=l,ye=!0),r=r.queue,Bi(Qu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||re!==null&&re.memoizedState.tag&1){if(n.flags|=2048,sr(9,Vu.bind(null,n,r,l,t),void 0,null),le===null)throw Error(S(349));At&30||Hu(n,t,l)}return l}function Hu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vu(e,t,n,r){t.value=n,t.getSnapshot=r,Gu(t)&&bu(e)}function Qu(e,t,n){return n(function(){Gu(t)&&bu(e)})}function Gu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Be(e,n)}catch{return!0}}function bu(e){var t=lt(e,1);t!==null&&Ue(t,e,1,-1)}function Hs(e){var t=Qe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:e},t.queue=e,e=e.dispatch=Vf.bind(null,G,e),[t.memoizedState,e]}function sr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Yu(){return Re().memoizedState}function Gr(e,t,n,r){var l=Qe();G.flags|=e,l.memoizedState=sr(1|t,n,void 0,r===void 0?null:r)}function zl(e,t,n,r){var l=Re();r=r===void 0?null:r;var o=void 0;if(te!==null){var i=te.memoizedState;if(o=i.destroy,r!==null&&Wi(r,i.deps)){l.memoizedState=sr(t,n,o,r);return}}G.flags|=e,l.memoizedState=sr(1|t,n,o,r)}function Vs(e,t){return Gr(8390656,8,e,t)}function Bi(e,t){return zl(2048,8,e,t)}function Ku(e,t){return zl(4,2,e,t)}function Xu(e,t){return zl(4,4,e,t)}function Zu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ju(e,t,n){return n=n!=null?n.concat([e]):null,zl(4,4,Zu.bind(null,t,e),n)}function Hi(){}function qu(e,t){var n=Re();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ec(e,t){var n=Re();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function tc(e,t,n){return At&21?(Be(n,t)||(n=iu(),G.lanes|=n,Wt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ye=!0),e.memoizedState=n)}function Bf(e,t){var n=W;W=n!==0&&4>n?n:4,e(!0);var r=lo.transition;lo.transition={};try{e(!1),t()}finally{W=n,lo.transition=r}}function nc(){return Re().memoizedState}function Hf(e,t,n){var r=kt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rc(e))lc(t,n);else if(n=Au(e,t,n,r),n!==null){var l=me();Ue(n,e,r,l),oc(n,t,r)}}function Vf(e,t,n){var r=kt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rc(e))lc(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,s=o(i,n);if(l.hasEagerState=!0,l.eagerState=s,Be(s,i)){var u=t.interleaved;u===null?(l.next=l,Ri(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=Au(e,t,l,r),n!==null&&(l=me(),Ue(n,e,r,l),oc(n,t,r))}}function rc(e){var t=e.alternate;return e===G||t!==null&&t===G}function lc(e,t){Bn=ml=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function oc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wi(e,n)}}var hl={readContext:De,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},Qf={readContext:De,useCallback:function(e,t){return Qe().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:Vs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Gr(4194308,4,Zu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Gr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Gr(4,2,e,t)},useMemo:function(e,t){var n=Qe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Qe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Hf.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=Qe();return e={current:e},t.memoizedState=e},useState:Hs,useDebugValue:Hi,useDeferredValue:function(e){return Qe().memoizedState=e},useTransition:function(){var e=Hs(!1),t=e[0];return e=Bf.bind(null,e[1]),Qe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=G,l=Qe();if(V){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),le===null)throw Error(S(349));At&30||Hu(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Vs(Qu.bind(null,r,o,e),[e]),r.flags|=2048,sr(9,Vu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Qe(),t=le.identifierPrefix;if(V){var n=qe,r=Je;n=(r&~(1<<32-$e(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=or++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Uf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Gf={readContext:De,useCallback:qu,useContext:De,useEffect:Bi,useImperativeHandle:Ju,useInsertionEffect:Ku,useLayoutEffect:Xu,useMemo:ec,useReducer:oo,useRef:Yu,useState:function(){return oo(ir)},useDebugValue:Hi,useDeferredValue:function(e){var t=Re();return tc(t,te.memoizedState,e)},useTransition:function(){var e=oo(ir)[0],t=Re().memoizedState;return[e,t]},useMutableSource:Uu,useSyncExternalStore:Bu,useId:nc,unstable_isNewReconciler:!1},bf={readContext:De,useCallback:qu,useContext:De,useEffect:Bi,useImperativeHandle:Ju,useInsertionEffect:Ku,useLayoutEffect:Xu,useMemo:ec,useReducer:io,useRef:Yu,useState:function(){return io(ir)},useDebugValue:Hi,useDeferredValue:function(e){var t=Re();return te===null?t.memoizedState=e:tc(t,te.memoizedState,e)},useTransition:function(){var e=io(ir)[0],t=Re().memoizedState;return[e,t]},useMutableSource:Uu,useSyncExternalStore:Bu,useId:nc,unstable_isNewReconciler:!1};function Ie(e,t){if(e&&e.defaultProps){t=b({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Qo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:b({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _l={isMounted:function(e){return(e=e._reactInternals)?Bt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=me(),l=kt(e),o=tt(r,l);o.payload=t,n!=null&&(o.callback=n),t=wt(e,o,l),t!==null&&(Ue(t,e,l,r),Vr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=me(),l=kt(e),o=tt(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=wt(e,o,l),t!==null&&(Ue(t,e,l,r),Vr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=me(),r=kt(e),l=tt(n,r);l.tag=2,t!=null&&(l.callback=t),t=wt(e,l,r),t!==null&&(Ue(t,e,r,n),Vr(t,e,r))}};function Qs(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!qn(n,r)||!qn(l,o):!0}function ic(e,t,n){var r=!1,l=jt,o=t.contextType;return typeof o=="object"&&o!==null?o=De(o):(l=we(t)?It:fe.current,r=t.contextTypes,o=(r=r!=null)?mn(e,l):jt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_l,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Gs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&_l.enqueueReplaceState(t,t.state,null)}function Go(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Fi(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=De(o):(o=we(t)?It:fe.current,l.context=mn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Qo(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&_l.enqueueReplaceState(l,l.state,null),fl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function yn(e,t){try{var n="",r=t;do n+=wd(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function so(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function bo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Yf=typeof WeakMap=="function"?WeakMap:Map;function sc(e,t,n){n=tt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){vl||(vl=!0,ri=r),bo(e,t)},n}function ac(e,t,n){n=tt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){bo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){bo(e,t),typeof r!="function"&&(St===null?St=new Set([this]):St.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function bs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Yf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=ap.bind(null,e,t,n),t.then(e,e))}function Ys(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ks(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=tt(-1,1),t.tag=2,wt(n,t,1))),n.lanes|=1),e)}var Kf=it.ReactCurrentOwner,ye=!1;function pe(e,t,n,r){t.child=e===null?Ou(t,null,n,r):gn(t,e.child,n,r)}function Xs(e,t,n,r,l){n=n.render;var o=t.ref;return un(t,l),r=$i(e,t,n,r,o,l),n=Ui(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,ot(e,t,l)):(V&&n&&zi(t),t.flags|=1,pe(e,t,r,l),t.child)}function Zs(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Zi(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,uc(e,t,o,r,l)):(e=Xr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:qn,n(i,r)&&e.ref===t.ref)return ot(e,t,l)}return t.flags|=1,e=Ct(o,r),e.ref=t.ref,e.return=t,t.child=e}function uc(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(qn(o,r)&&e.ref===t.ref)if(ye=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(ye=!0);else return t.lanes=e.lanes,ot(e,t,l)}return Yo(e,t,n,r,l)}function cc(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(rn,Ce),Ce|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(rn,Ce),Ce|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,U(rn,Ce),Ce|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,U(rn,Ce),Ce|=r;return pe(e,t,l,n),t.child}function dc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Yo(e,t,n,r,l){var o=we(n)?It:fe.current;return o=mn(t,o),un(t,l),n=$i(e,t,n,r,o,l),r=Ui(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,ot(e,t,l)):(V&&r&&zi(t),t.flags|=1,pe(e,t,n,l),t.child)}function Js(e,t,n,r,l){if(we(n)){var o=!0;sl(t)}else o=!1;if(un(t,l),t.stateNode===null)br(e,t),ic(t,n,r),Go(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var u=i.context,d=n.contextType;typeof d=="object"&&d!==null?d=De(d):(d=we(n)?It:fe.current,d=mn(t,d));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function";h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||u!==d)&&Gs(t,i,r,d),ct=!1;var g=t.memoizedState;i.state=g,fl(t,r,i,l),u=t.memoizedState,s!==r||g!==u||xe.current||ct?(typeof m=="function"&&(Qo(t,n,m,r),u=t.memoizedState),(s=ct||Qs(t,n,s,r,g,u,d))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),i.props=r,i.state=u,i.context=d,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Wu(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Ie(t.type,s),i.props=d,h=t.pendingProps,g=i.context,u=n.contextType,typeof u=="object"&&u!==null?u=De(u):(u=we(n)?It:fe.current,u=mn(t,u));var x=n.getDerivedStateFromProps;(m=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==h||g!==u)&&Gs(t,i,r,u),ct=!1,g=t.memoizedState,i.state=g,fl(t,r,i,l);var v=t.memoizedState;s!==h||g!==v||xe.current||ct?(typeof x=="function"&&(Qo(t,n,x,r),v=t.memoizedState),(d=ct||Qs(t,n,d,r,g,v,u)||!1)?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,v,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,v,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),i.props=r,i.state=v,i.context=u,r=d):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Ko(e,t,n,r,o,l)}function Ko(e,t,n,r,l,o){dc(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&Os(t,n,!1),ot(e,t,o);r=t.stateNode,Kf.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=gn(t,e.child,null,o),t.child=gn(t,null,s,o)):pe(e,t,s,o),t.memoizedState=r.state,l&&Os(t,n,!0),t.child}function fc(e){var t=e.stateNode;t.pendingContext?Is(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Is(e,t.context,!1),Ii(e,t.containerInfo)}function qs(e,t,n,r,l){return hn(),Pi(l),t.flags|=256,pe(e,t,n,r),t.child}var Xo={dehydrated:null,treeContext:null,retryLane:0};function Zo(e){return{baseLanes:e,cachePool:null,transitions:null}}function pc(e,t,n){var r=t.pendingProps,l=Q.current,o=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),U(Q,l&1),e===null)return Ho(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Ml(i,r,0,null),e=Ft(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Zo(n),t.memoizedState=Xo,e):Vi(t,i));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return Xf(e,t,i,r,s,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Ct(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=Ct(s,o):(o=Ft(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?Zo(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=Xo,r}return o=e.child,e=o.sibling,r=Ct(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Vi(e,t){return t=Ml({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Rr(e,t,n,r){return r!==null&&Pi(r),gn(t,e.child,null,n),e=Vi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Xf(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=so(Error(S(422))),Rr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=Ml({mode:"visible",children:r.children},l,0,null),o=Ft(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&gn(t,e.child,null,i),t.child.memoizedState=Zo(i),t.memoizedState=Xo,o);if(!(t.mode&1))return Rr(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(S(419)),r=so(o,r,void 0),Rr(e,t,i,r)}if(s=(i&e.childLanes)!==0,ye||s){if(r=le,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,lt(e,l),Ue(r,e,l,-1))}return Xi(),r=so(Error(S(421))),Rr(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=up.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,Ne=xt(l.nextSibling),je=t,V=!0,Ae=null,e!==null&&(_e[Pe++]=Je,_e[Pe++]=qe,_e[Pe++]=Ot,Je=e.id,qe=e.overflow,Ot=t),t=Vi(t,r.children),t.flags|=4096,t)}function ea(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Vo(e.return,t,n)}function ao(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function mc(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(pe(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ea(e,n,t);else if(e.tag===19)ea(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(Q,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&pl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ao(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&pl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ao(t,!0,n,null,o);break;case"together":ao(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function br(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ot(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Ct(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ct(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Zf(e,t,n){switch(t.tag){case 3:fc(t),hn();break;case 5:$u(t);break;case 1:we(t.type)&&sl(t);break;case 4:Ii(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;U(cl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?pc(e,t,n):(U(Q,Q.current&1),e=ot(e,t,n),e!==null?e.sibling:null);U(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return mc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),U(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,cc(e,t,n)}return ot(e,t,n)}var hc,Jo,gc,vc;hc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Jo=function(){};gc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Dt(Ye.current);var o=null;switch(n){case"input":l=wo(e,l),r=wo(e,r),o=[];break;case"select":l=b({},l,{value:void 0}),r=b({},r,{value:void 0}),o=[];break;case"textarea":l=Co(e,l),r=Co(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ol)}jo(n,r);var i;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var s=l[d];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Gn.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var u=r[d];if(s=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(i in s)!s.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&s[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(o||(o=[]),o.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Gn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&B("scroll",e),o||s===u||(o=[])):(o=o||[]).push(d,u))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};vc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Pn(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Jf(e,t,n){var r=t.pendingProps;switch(_i(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return we(t.type)&&il(),ce(t),null;case 3:return r=t.stateNode,vn(),H(xe),H(fe),Ai(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Mr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ae!==null&&(ii(Ae),Ae=null))),Jo(e,t),ce(t),null;case 5:Oi(t);var l=Dt(lr.current);if(n=t.type,e!==null&&t.stateNode!=null)gc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return ce(t),null}if(e=Dt(Ye.current),Mr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ge]=t,r[nr]=o,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(l=0;l<Fn.length;l++)B(Fn[l],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":us(r,o),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},B("invalid",r);break;case"textarea":ds(r,o),B("invalid",r)}jo(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Lr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Lr(r.textContent,s,e),l=["children",""+s]):Gn.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&B("scroll",r)}switch(n){case"input":Cr(r),cs(r,o,!0);break;case"textarea":Cr(r),fs(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ol)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qa(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Ge]=t,e[nr]=r,hc(e,t,!1,!1),t.stateNode=e;e:{switch(i=Eo(n,r),n){case"dialog":B("cancel",e),B("close",e),l=r;break;case"iframe":case"object":case"embed":B("load",e),l=r;break;case"video":case"audio":for(l=0;l<Fn.length;l++)B(Fn[l],e);l=r;break;case"source":B("error",e),l=r;break;case"img":case"image":case"link":B("error",e),B("load",e),l=r;break;case"details":B("toggle",e),l=r;break;case"input":us(e,r),l=wo(e,r),B("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=b({},r,{value:void 0}),B("invalid",e);break;case"textarea":ds(e,r),l=Co(e,r),B("invalid",e);break;default:l=r}jo(n,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?Ya(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ga(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&bn(e,u):typeof u=="number"&&bn(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Gn.hasOwnProperty(o)?u!=null&&o==="onScroll"&&B("scroll",e):u!=null&&mi(e,o,u,i))}switch(n){case"input":Cr(e),cs(e,r,!1);break;case"textarea":Cr(e),fs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Nt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ln(e,!!r.multiple,o,!1):r.defaultValue!=null&&ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=ol)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)vc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Dt(lr.current),Dt(Ye.current),Mr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ge]=t,(o=r.nodeValue!==n)&&(e=je,e!==null))switch(e.tag){case 3:Lr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Lr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ge]=t,t.stateNode=r}return ce(t),null;case 13:if(H(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&Ne!==null&&t.mode&1&&!(t.flags&128))Fu(),hn(),t.flags|=98560,o=!1;else if(o=Mr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[Ge]=t}else hn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),o=!1}else Ae!==null&&(ii(Ae),Ae=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?ne===0&&(ne=3):Xi())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return vn(),Jo(e,t),e===null&&er(t.stateNode.containerInfo),ce(t),null;case 10:return Di(t.type._context),ce(t),null;case 17:return we(t.type)&&il(),ce(t),null;case 19:if(H(Q),o=t.memoizedState,o===null)return ce(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)Pn(o,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=pl(e),i!==null){for(t.flags|=128,Pn(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(Q,Q.current&1|2),t.child}e=e.sibling}o.tail!==null&&q()>xn&&(t.flags|=128,r=!0,Pn(o,!1),t.lanes=4194304)}else{if(!r)if(e=pl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Pn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!V)return ce(t),null}else 2*q()-o.renderingStartTime>xn&&n!==1073741824&&(t.flags|=128,r=!0,Pn(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=q(),t.sibling=null,n=Q.current,U(Q,r?n&1|2:n&1),t):(ce(t),null);case 22:case 23:return Ki(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ce&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function qf(e,t){switch(_i(t),t.tag){case 1:return we(t.type)&&il(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vn(),H(xe),H(fe),Ai(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Oi(t),null;case 13:if(H(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(Q),null;case 4:return vn(),null;case 10:return Di(t.type._context),null;case 22:case 23:return Ki(),null;case 24:return null;default:return null}}var Fr=!1,de=!1,ep=typeof WeakSet=="function"?WeakSet:Set,T=null;function nn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Z(e,t,r)}else n.current=null}function qo(e,t,n){try{n()}catch(r){Z(e,t,r)}}var ta=!1;function tp(e,t){if(Io=nl,e=ku(),Ti(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,s=-1,u=-1,d=0,m=0,h=e,g=null;t:for(;;){for(var x;h!==n||l!==0&&h.nodeType!==3||(s=i+l),h!==o||r!==0&&h.nodeType!==3||(u=i+r),h.nodeType===3&&(i+=h.nodeValue.length),(x=h.firstChild)!==null;)g=h,h=x;for(;;){if(h===e)break t;if(g===n&&++d===l&&(s=i),g===o&&++m===r&&(u=i),(x=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=x}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Oo={focusedElem:e,selectionRange:n},nl=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,C=v.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ie(t.type,y),C);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){Z(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return v=ta,ta=!1,v}function Hn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&qo(t,n,o)}l=l.next}while(l!==r)}}function Pl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ei(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function yc(e){var t=e.alternate;t!==null&&(e.alternate=null,yc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ge],delete t[nr],delete t[$o],delete t[Of],delete t[Af])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function xc(e){return e.tag===5||e.tag===3||e.tag===4}function na(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ti(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ol));else if(r!==4&&(e=e.child,e!==null))for(ti(e,t,n),e=e.sibling;e!==null;)ti(e,t,n),e=e.sibling}function ni(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ni(e,t,n),e=e.sibling;e!==null;)ni(e,t,n),e=e.sibling}var oe=null,Oe=!1;function st(e,t,n){for(n=n.child;n!==null;)wc(e,t,n),n=n.sibling}function wc(e,t,n){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(kl,n)}catch{}switch(n.tag){case 5:de||nn(n,t);case 6:var r=oe,l=Oe;oe=null,st(e,t,n),oe=r,Oe=l,oe!==null&&(Oe?(e=oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):oe.removeChild(n.stateNode));break;case 18:oe!==null&&(Oe?(e=oe,n=n.stateNode,e.nodeType===8?to(e.parentNode,n):e.nodeType===1&&to(e,n),Zn(e)):to(oe,n.stateNode));break;case 4:r=oe,l=Oe,oe=n.stateNode.containerInfo,Oe=!0,st(e,t,n),oe=r,Oe=l;break;case 0:case 11:case 14:case 15:if(!de&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&qo(n,t,i),l=l.next}while(l!==r)}st(e,t,n);break;case 1:if(!de&&(nn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Z(n,t,s)}st(e,t,n);break;case 21:st(e,t,n);break;case 22:n.mode&1?(de=(r=de)||n.memoizedState!==null,st(e,t,n),de=r):st(e,t,n);break;default:st(e,t,n)}}function ra(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ep),t.forEach(function(r){var l=cp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Fe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:oe=s.stateNode,Oe=!1;break e;case 3:oe=s.stateNode.containerInfo,Oe=!0;break e;case 4:oe=s.stateNode.containerInfo,Oe=!0;break e}s=s.return}if(oe===null)throw Error(S(160));wc(o,i,l),oe=null,Oe=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(d){Z(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Sc(t,e),t=t.sibling}function Sc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Fe(t,e),Ve(e),r&4){try{Hn(3,e,e.return),Pl(3,e)}catch(y){Z(e,e.return,y)}try{Hn(5,e,e.return)}catch(y){Z(e,e.return,y)}}break;case 1:Fe(t,e),Ve(e),r&512&&n!==null&&nn(n,n.return);break;case 5:if(Fe(t,e),Ve(e),r&512&&n!==null&&nn(n,n.return),e.flags&32){var l=e.stateNode;try{bn(l,"")}catch(y){Z(e,e.return,y)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Ha(l,o),Eo(s,i);var d=Eo(s,o);for(i=0;i<u.length;i+=2){var m=u[i],h=u[i+1];m==="style"?Ya(l,h):m==="dangerouslySetInnerHTML"?Ga(l,h):m==="children"?bn(l,h):mi(l,m,h,d)}switch(s){case"input":So(l,o);break;case"textarea":Va(l,o);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?ln(l,!!o.multiple,x,!1):g!==!!o.multiple&&(o.defaultValue!=null?ln(l,!!o.multiple,o.defaultValue,!0):ln(l,!!o.multiple,o.multiple?[]:"",!1))}l[nr]=o}catch(y){Z(e,e.return,y)}}break;case 6:if(Fe(t,e),Ve(e),r&4){if(e.stateNode===null)throw Error(S(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(y){Z(e,e.return,y)}}break;case 3:if(Fe(t,e),Ve(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Zn(t.containerInfo)}catch(y){Z(e,e.return,y)}break;case 4:Fe(t,e),Ve(e);break;case 13:Fe(t,e),Ve(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(bi=q())),r&4&&ra(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(de=(d=de)||m,Fe(t,e),de=d):Fe(t,e),Ve(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!m&&e.mode&1)for(T=e,m=e.child;m!==null;){for(h=T=m;T!==null;){switch(g=T,x=g.child,g.tag){case 0:case 11:case 14:case 15:Hn(4,g,g.return);break;case 1:nn(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(y){Z(r,n,y)}}break;case 5:nn(g,g.return);break;case 22:if(g.memoizedState!==null){oa(h);continue}}x!==null?(x.return=g,T=x):oa(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{l=h.stateNode,d?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=h.stateNode,u=h.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=ba("display",i))}catch(y){Z(e,e.return,y)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(y){Z(e,e.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Fe(t,e),Ve(e),r&4&&ra(e);break;case 21:break;default:Fe(t,e),Ve(e)}}function Ve(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(xc(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(bn(l,""),r.flags&=-33);var o=na(e);ni(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,s=na(e);ti(e,s,i);break;default:throw Error(S(161))}}catch(u){Z(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function np(e,t,n){T=e,kc(e)}function kc(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var l=T,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||Fr;if(!i){var s=l.alternate,u=s!==null&&s.memoizedState!==null||de;s=Fr;var d=de;if(Fr=i,(de=u)&&!d)for(T=l;T!==null;)i=T,u=i.child,i.tag===22&&i.memoizedState!==null?ia(l):u!==null?(u.return=i,T=u):ia(l);for(;o!==null;)T=o,kc(o),o=o.sibling;T=l,Fr=s,de=d}la(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,T=o):la(e)}}function la(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:de||Pl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!de)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Ie(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Bs(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Bs(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&Zn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}de||t.flags&512&&ei(t)}catch(g){Z(t,t.return,g)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function oa(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function ia(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Pl(4,t)}catch(u){Z(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){Z(t,l,u)}}var o=t.return;try{ei(t)}catch(u){Z(t,o,u)}break;case 5:var i=t.return;try{ei(t)}catch(u){Z(t,i,u)}}}catch(u){Z(t,t.return,u)}if(t===e){T=null;break}var s=t.sibling;if(s!==null){s.return=t.return,T=s;break}T=t.return}}var rp=Math.ceil,gl=it.ReactCurrentDispatcher,Qi=it.ReactCurrentOwner,Me=it.ReactCurrentBatchConfig,I=0,le=null,ee=null,ie=0,Ce=0,rn=Tt(0),ne=0,ar=null,Wt=0,Ll=0,Gi=0,Vn=null,ve=null,bi=0,xn=1/0,Xe=null,vl=!1,ri=null,St=null,Ir=!1,mt=null,yl=0,Qn=0,li=null,Yr=-1,Kr=0;function me(){return I&6?q():Yr!==-1?Yr:Yr=q()}function kt(e){return e.mode&1?I&2&&ie!==0?ie&-ie:$f.transition!==null?(Kr===0&&(Kr=iu()),Kr):(e=W,e!==0||(e=window.event,e=e===void 0?16:pu(e.type)),e):1}function Ue(e,t,n,r){if(50<Qn)throw Qn=0,li=null,Error(S(185));dr(e,n,r),(!(I&2)||e!==le)&&(e===le&&(!(I&2)&&(Ll|=n),ne===4&&ft(e,ie)),Se(e,r),n===1&&I===0&&!(t.mode&1)&&(xn=q()+500,Tl&&zt()))}function Se(e,t){var n=e.callbackNode;Wd(e,t);var r=tl(e,e===le?ie:0);if(r===0)n!==null&&hs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&hs(n),t===1)e.tag===0?Wf(sa.bind(null,e)):Mu(sa.bind(null,e)),Ff(function(){!(I&6)&&zt()}),n=null;else{switch(su(r)){case 1:n=xi;break;case 4:n=lu;break;case 16:n=el;break;case 536870912:n=ou;break;default:n=el}n=Pc(n,Cc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Cc(e,t){if(Yr=-1,Kr=0,I&6)throw Error(S(327));var n=e.callbackNode;if(cn()&&e.callbackNode!==n)return null;var r=tl(e,e===le?ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=xl(e,r);else{t=r;var l=I;I|=2;var o=jc();(le!==e||ie!==t)&&(Xe=null,xn=q()+500,Rt(e,t));do try{ip();break}catch(s){Nc(e,s)}while(!0);Mi(),gl.current=o,I=l,ee!==null?t=0:(le=null,ie=0,t=ne)}if(t!==0){if(t===2&&(l=Lo(e),l!==0&&(r=l,t=oi(e,l))),t===1)throw n=ar,Rt(e,0),ft(e,r),Se(e,q()),n;if(t===6)ft(e,r);else{if(l=e.current.alternate,!(r&30)&&!lp(l)&&(t=xl(e,r),t===2&&(o=Lo(e),o!==0&&(r=o,t=oi(e,o))),t===1))throw n=ar,Rt(e,0),ft(e,r),Se(e,q()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Pt(e,ve,Xe);break;case 3:if(ft(e,r),(r&130023424)===r&&(t=bi+500-q(),10<t)){if(tl(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){me(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Wo(Pt.bind(null,e,ve,Xe),t);break}Pt(e,ve,Xe);break;case 4:if(ft(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-$e(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*rp(r/1960))-r,10<r){e.timeoutHandle=Wo(Pt.bind(null,e,ve,Xe),r);break}Pt(e,ve,Xe);break;case 5:Pt(e,ve,Xe);break;default:throw Error(S(329))}}}return Se(e,q()),e.callbackNode===n?Cc.bind(null,e):null}function oi(e,t){var n=Vn;return e.current.memoizedState.isDehydrated&&(Rt(e,t).flags|=256),e=xl(e,t),e!==2&&(t=ve,ve=n,t!==null&&ii(t)),e}function ii(e){ve===null?ve=e:ve.push.apply(ve,e)}function lp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!Be(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ft(e,t){for(t&=~Gi,t&=~Ll,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-$e(t),r=1<<n;e[n]=-1,t&=~r}}function sa(e){if(I&6)throw Error(S(327));cn();var t=tl(e,0);if(!(t&1))return Se(e,q()),null;var n=xl(e,t);if(e.tag!==0&&n===2){var r=Lo(e);r!==0&&(t=r,n=oi(e,r))}if(n===1)throw n=ar,Rt(e,0),ft(e,t),Se(e,q()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pt(e,ve,Xe),Se(e,q()),null}function Yi(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(xn=q()+500,Tl&&zt())}}function $t(e){mt!==null&&mt.tag===0&&!(I&6)&&cn();var t=I;I|=1;var n=Me.transition,r=W;try{if(Me.transition=null,W=1,e)return e()}finally{W=r,Me.transition=n,I=t,!(I&6)&&zt()}}function Ki(){Ce=rn.current,H(rn)}function Rt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Rf(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(_i(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&il();break;case 3:vn(),H(xe),H(fe),Ai();break;case 5:Oi(r);break;case 4:vn();break;case 13:H(Q);break;case 19:H(Q);break;case 10:Di(r.type._context);break;case 22:case 23:Ki()}n=n.return}if(le=e,ee=e=Ct(e.current,null),ie=Ce=t,ne=0,ar=null,Gi=Ll=Wt=0,ve=Vn=null,Mt!==null){for(t=0;t<Mt.length;t++)if(n=Mt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}Mt=null}return e}function Nc(e,t){do{var n=ee;try{if(Mi(),Qr.current=hl,ml){for(var r=G.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}ml=!1}if(At=0,re=te=G=null,Bn=!1,or=0,Qi.current=null,n===null||n.return===null){ne=1,ar=t,ee=null;break}e:{var o=e,i=n.return,s=n,u=t;if(t=ie,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,m=s,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var x=Ys(i);if(x!==null){x.flags&=-257,Ks(x,i,s,o,t),x.mode&1&&bs(o,d,t),t=x,u=d;var v=t.updateQueue;if(v===null){var y=new Set;y.add(u),t.updateQueue=y}else v.add(u);break e}else{if(!(t&1)){bs(o,d,t),Xi();break e}u=Error(S(426))}}else if(V&&s.mode&1){var C=Ys(i);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Ks(C,i,s,o,t),Pi(yn(u,s));break e}}o=u=yn(u,s),ne!==4&&(ne=2),Vn===null?Vn=[o]:Vn.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=sc(o,u,t);Us(o,f);break e;case 1:s=u;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(St===null||!St.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=ac(o,s,t);Us(o,w);break e}}o=o.return}while(o!==null)}Tc(n)}catch(k){t=k,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(!0)}function jc(){var e=gl.current;return gl.current=hl,e===null?hl:e}function Xi(){(ne===0||ne===3||ne===2)&&(ne=4),le===null||!(Wt&268435455)&&!(Ll&268435455)||ft(le,ie)}function xl(e,t){var n=I;I|=2;var r=jc();(le!==e||ie!==t)&&(Xe=null,Rt(e,t));do try{op();break}catch(l){Nc(e,l)}while(!0);if(Mi(),I=n,gl.current=r,ee!==null)throw Error(S(261));return le=null,ie=0,ne}function op(){for(;ee!==null;)Ec(ee)}function ip(){for(;ee!==null&&!Pd();)Ec(ee)}function Ec(e){var t=_c(e.alternate,e,Ce);e.memoizedProps=e.pendingProps,t===null?Tc(e):ee=t,Qi.current=null}function Tc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=qf(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,ee=null;return}}else if(n=Jf(n,t,Ce),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);ne===0&&(ne=5)}function Pt(e,t,n){var r=W,l=Me.transition;try{Me.transition=null,W=1,sp(e,t,n,r)}finally{Me.transition=l,W=r}return null}function sp(e,t,n,r){do cn();while(mt!==null);if(I&6)throw Error(S(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if($d(e,o),e===le&&(ee=le=null,ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ir||(Ir=!0,Pc(el,function(){return cn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Me.transition,Me.transition=null;var i=W;W=1;var s=I;I|=4,Qi.current=null,tp(e,n),Sc(n,e),Tf(Oo),nl=!!Io,Oo=Io=null,e.current=n,np(n),Ld(),I=s,W=i,Me.transition=o}else e.current=n;if(Ir&&(Ir=!1,mt=e,yl=l),o=e.pendingLanes,o===0&&(St=null),Rd(n.stateNode),Se(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(vl)throw vl=!1,e=ri,ri=null,e;return yl&1&&e.tag!==0&&cn(),o=e.pendingLanes,o&1?e===li?Qn++:(Qn=0,li=e):Qn=0,zt(),null}function cn(){if(mt!==null){var e=su(yl),t=Me.transition,n=W;try{if(Me.transition=null,W=16>e?16:e,mt===null)var r=!1;else{if(e=mt,mt=null,yl=0,I&6)throw Error(S(331));var l=I;for(I|=4,T=e.current;T!==null;){var o=T,i=o.child;if(T.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(T=d;T!==null;){var m=T;switch(m.tag){case 0:case 11:case 15:Hn(8,m,o)}var h=m.child;if(h!==null)h.return=m,T=h;else for(;T!==null;){m=T;var g=m.sibling,x=m.return;if(yc(m),m===d){T=null;break}if(g!==null){g.return=x,T=g;break}T=x}}}var v=o.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var C=y.sibling;y.sibling=null,y=C}while(y!==null)}}T=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,T=i;else e:for(;T!==null;){if(o=T,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Hn(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,T=f;break e}T=o.return}}var c=e.current;for(T=c;T!==null;){i=T;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,T=p;else e:for(i=c;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Pl(9,s)}}catch(k){Z(s,s.return,k)}if(s===i){T=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,T=w;break e}T=s.return}}if(I=l,zt(),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(kl,e)}catch{}r=!0}return r}finally{W=n,Me.transition=t}}return!1}function aa(e,t,n){t=yn(n,t),t=sc(e,t,1),e=wt(e,t,1),t=me(),e!==null&&(dr(e,1,t),Se(e,t))}function Z(e,t,n){if(e.tag===3)aa(e,e,n);else for(;t!==null;){if(t.tag===3){aa(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(St===null||!St.has(r))){e=yn(n,e),e=ac(t,e,1),t=wt(t,e,1),e=me(),t!==null&&(dr(t,1,e),Se(t,e));break}}t=t.return}}function ap(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=me(),e.pingedLanes|=e.suspendedLanes&n,le===e&&(ie&n)===n&&(ne===4||ne===3&&(ie&130023424)===ie&&500>q()-bi?Rt(e,0):Gi|=n),Se(e,t)}function zc(e,t){t===0&&(e.mode&1?(t=Er,Er<<=1,!(Er&130023424)&&(Er=4194304)):t=1);var n=me();e=lt(e,t),e!==null&&(dr(e,t,n),Se(e,n))}function up(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),zc(e,n)}function cp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),zc(e,n)}var _c;_c=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||xe.current)ye=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ye=!1,Zf(e,t,n);ye=!!(e.flags&131072)}else ye=!1,V&&t.flags&1048576&&Du(t,ul,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;br(e,t),e=t.pendingProps;var l=mn(t,fe.current);un(t,n),l=$i(null,t,r,e,l,n);var o=Ui();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,we(r)?(o=!0,sl(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Fi(t),l.updater=_l,t.stateNode=l,l._reactInternals=t,Go(t,r,e,n),t=Ko(null,t,r,!0,o,n)):(t.tag=0,V&&o&&zi(t),pe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(br(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=fp(r),e=Ie(r,e),l){case 0:t=Yo(null,t,r,e,n);break e;case 1:t=Js(null,t,r,e,n);break e;case 11:t=Xs(null,t,r,e,n);break e;case 14:t=Zs(null,t,r,Ie(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ie(r,l),Yo(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ie(r,l),Js(e,t,r,l,n);case 3:e:{if(fc(t),e===null)throw Error(S(387));r=t.pendingProps,o=t.memoizedState,l=o.element,Wu(e,t),fl(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=yn(Error(S(423)),t),t=qs(e,t,r,n,l);break e}else if(r!==l){l=yn(Error(S(424)),t),t=qs(e,t,r,n,l);break e}else for(Ne=xt(t.stateNode.containerInfo.firstChild),je=t,V=!0,Ae=null,n=Ou(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hn(),r===l){t=ot(e,t,n);break e}pe(e,t,r,n)}t=t.child}return t;case 5:return $u(t),e===null&&Ho(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,Ao(r,l)?i=null:o!==null&&Ao(r,o)&&(t.flags|=32),dc(e,t),pe(e,t,i,n),t.child;case 6:return e===null&&Ho(t),null;case 13:return pc(e,t,n);case 4:return Ii(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=gn(t,null,r,n):pe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ie(r,l),Xs(e,t,r,l,n);case 7:return pe(e,t,t.pendingProps,n),t.child;case 8:return pe(e,t,t.pendingProps.children,n),t.child;case 12:return pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,U(cl,r._currentValue),r._currentValue=i,o!==null)if(Be(o.value,i)){if(o.children===l.children&&!xe.current){t=ot(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=tt(-1,n&-n),u.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?u.next=u:(u.next=m.next,m.next=u),d.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Vo(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(S(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Vo(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}pe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,un(t,n),l=De(l),r=r(l),t.flags|=1,pe(e,t,r,n),t.child;case 14:return r=t.type,l=Ie(r,t.pendingProps),l=Ie(r.type,l),Zs(e,t,r,l,n);case 15:return uc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ie(r,l),br(e,t),t.tag=1,we(r)?(e=!0,sl(t)):e=!1,un(t,n),ic(t,r,l),Go(t,r,l,n),Ko(null,t,r,!0,e,n);case 19:return mc(e,t,n);case 22:return cc(e,t,n)}throw Error(S(156,t.tag))};function Pc(e,t){return ru(e,t)}function dp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Le(e,t,n,r){return new dp(e,t,n,r)}function Zi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fp(e){if(typeof e=="function")return Zi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===gi)return 11;if(e===vi)return 14}return 2}function Ct(e,t){var n=e.alternate;return n===null?(n=Le(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xr(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")Zi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case bt:return Ft(n.children,l,o,t);case hi:i=8,l|=8;break;case go:return e=Le(12,n,t,l|2),e.elementType=go,e.lanes=o,e;case vo:return e=Le(13,n,t,l),e.elementType=vo,e.lanes=o,e;case yo:return e=Le(19,n,t,l),e.elementType=yo,e.lanes=o,e;case $a:return Ml(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Aa:i=10;break e;case Wa:i=9;break e;case gi:i=11;break e;case vi:i=14;break e;case ut:i=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Le(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function Ft(e,t,n,r){return e=Le(7,e,r,t),e.lanes=n,e}function Ml(e,t,n,r){return e=Le(22,e,r,t),e.elementType=$a,e.lanes=n,e.stateNode={isHidden:!1},e}function uo(e,t,n){return e=Le(6,e,null,t),e.lanes=n,e}function co(e,t,n){return t=Le(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function pp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vl(0),this.expirationTimes=Vl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ji(e,t,n,r,l,o,i,s,u){return e=new pp(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Le(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fi(o),e}function mp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Lc(e){if(!e)return jt;e=e._reactInternals;e:{if(Bt(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(we(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(we(n))return Lu(e,n,t)}return t}function Mc(e,t,n,r,l,o,i,s,u){return e=Ji(n,r,!0,e,l,o,i,s,u),e.context=Lc(null),n=e.current,r=me(),l=kt(n),o=tt(r,l),o.callback=t??null,wt(n,o,l),e.current.lanes=l,dr(e,l,r),Se(e,r),e}function Dl(e,t,n,r){var l=t.current,o=me(),i=kt(l);return n=Lc(n),t.context===null?t.context=n:t.pendingContext=n,t=tt(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=wt(l,t,i),e!==null&&(Ue(e,l,i,o),Vr(e,l,i)),i}function wl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ua(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function qi(e,t){ua(e,t),(e=e.alternate)&&ua(e,t)}function hp(){return null}var Dc=typeof reportError=="function"?reportError:function(e){console.error(e)};function es(e){this._internalRoot=e}Rl.prototype.render=es.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Dl(e,t,null,null)};Rl.prototype.unmount=es.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$t(function(){Dl(null,e,null,null)}),t[rt]=null}};function Rl(e){this._internalRoot=e}Rl.prototype.unstable_scheduleHydration=function(e){if(e){var t=cu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<dt.length&&t!==0&&t<dt[n].priority;n++);dt.splice(n,0,e),n===0&&fu(e)}};function ts(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ca(){}function gp(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var d=wl(i);o.call(d)}}var i=Mc(t,r,e,0,null,!1,!1,"",ca);return e._reactRootContainer=i,e[rt]=i.current,er(e.nodeType===8?e.parentNode:e),$t(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var d=wl(u);s.call(d)}}var u=Ji(e,0,!1,null,null,!1,!1,"",ca);return e._reactRootContainer=u,e[rt]=u.current,er(e.nodeType===8?e.parentNode:e),$t(function(){Dl(t,u,n,r)}),u}function Il(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var s=l;l=function(){var u=wl(i);s.call(u)}}Dl(t,i,e,l)}else i=gp(n,t,e,l,r);return wl(i)}au=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Rn(t.pendingLanes);n!==0&&(wi(t,n|1),Se(t,q()),!(I&6)&&(xn=q()+500,zt()))}break;case 13:$t(function(){var r=lt(e,1);if(r!==null){var l=me();Ue(r,e,1,l)}}),qi(e,1)}};Si=function(e){if(e.tag===13){var t=lt(e,134217728);if(t!==null){var n=me();Ue(t,e,134217728,n)}qi(e,134217728)}};uu=function(e){if(e.tag===13){var t=kt(e),n=lt(e,t);if(n!==null){var r=me();Ue(n,e,t,r)}qi(e,t)}};cu=function(){return W};du=function(e,t){var n=W;try{return W=e,t()}finally{W=n}};zo=function(e,t,n){switch(t){case"input":if(So(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=El(r);if(!l)throw Error(S(90));Ba(r),So(r,l)}}}break;case"textarea":Va(e,n);break;case"select":t=n.value,t!=null&&ln(e,!!n.multiple,t,!1)}};Za=Yi;Ja=$t;var vp={usingClientEntryPoint:!1,Events:[pr,Zt,El,Ka,Xa,Yi]},Ln={findFiberByHostInstance:Lt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yp={bundleType:Ln.bundleType,version:Ln.version,rendererPackageName:Ln.rendererPackageName,rendererConfig:Ln.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:it.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=tu(e),e===null?null:e.stateNode},findFiberByHostInstance:Ln.findFiberByHostInstance||hp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Or=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Or.isDisabled&&Or.supportsFiber)try{kl=Or.inject(yp),be=Or}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vp;Te.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ts(t))throw Error(S(200));return mp(e,t,null,n)};Te.createRoot=function(e,t){if(!ts(e))throw Error(S(299));var n=!1,r="",l=Dc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Ji(e,1,!1,null,null,n,!1,r,l),e[rt]=t.current,er(e.nodeType===8?e.parentNode:e),new es(t)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=tu(t),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return $t(e)};Te.hydrate=function(e,t,n){if(!Fl(t))throw Error(S(200));return Il(null,e,t,!0,n)};Te.hydrateRoot=function(e,t,n){if(!ts(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=Dc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Mc(t,null,e,1,n??null,l,!1,o,i),e[rt]=t.current,er(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Rl(t)};Te.render=function(e,t,n){if(!Fl(t))throw Error(S(200));return Il(null,e,t,!1,n)};Te.unmountComponentAtNode=function(e){if(!Fl(e))throw Error(S(40));return e._reactRootContainer?($t(function(){Il(null,null,e,!1,function(){e._reactRootContainer=null,e[rt]=null})}),!0):!1};Te.unstable_batchedUpdates=Yi;Te.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Fl(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Il(e,t,n,!1,r)};Te.version="18.3.1-next-f1338f8080-20240426";function Rc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rc)}catch(e){console.error(e)}}Rc(),Ra.exports=Te;var xp=Ra.exports,da=xp;mo.createRoot=da.createRoot,mo.hydrateRoot=da.hydrateRoot;const wp={},fa=e=>{let t;const n=new Set,r=(m,h)=>{const g=typeof m=="function"?m(t):m;if(!Object.is(g,t)){const x=t;t=h??(typeof g!="object"||g===null)?g:Object.assign({},t,g),n.forEach(v=>v(t,x))}},l=()=>t,u={setState:r,getState:l,getInitialState:()=>d,subscribe:m=>(n.add(m),()=>n.delete(m)),destroy:()=>{(wp?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},d=t=e(r,l,u);return u},Sp=e=>e?fa(e):fa;var Fc={exports:{}},Ic={},Oc={exports:{}},Ac={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wn=E;function kp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Cp=typeof Object.is=="function"?Object.is:kp,Np=wn.useState,jp=wn.useEffect,Ep=wn.useLayoutEffect,Tp=wn.useDebugValue;function zp(e,t){var n=t(),r=Np({inst:{value:n,getSnapshot:t}}),l=r[0].inst,o=r[1];return Ep(function(){l.value=n,l.getSnapshot=t,fo(l)&&o({inst:l})},[e,n,t]),jp(function(){return fo(l)&&o({inst:l}),e(function(){fo(l)&&o({inst:l})})},[e]),Tp(n),n}function fo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Cp(e,n)}catch{return!0}}function _p(e,t){return t()}var Pp=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?_p:zp;Ac.useSyncExternalStore=wn.useSyncExternalStore!==void 0?wn.useSyncExternalStore:Pp;Oc.exports=Ac;var Lp=Oc.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ol=E,Mp=Lp;function Dp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rp=typeof Object.is=="function"?Object.is:Dp,Fp=Mp.useSyncExternalStore,Ip=Ol.useRef,Op=Ol.useEffect,Ap=Ol.useMemo,Wp=Ol.useDebugValue;Ic.useSyncExternalStoreWithSelector=function(e,t,n,r,l){var o=Ip(null);if(o.current===null){var i={hasValue:!1,value:null};o.current=i}else i=o.current;o=Ap(function(){function u(x){if(!d){if(d=!0,m=x,x=r(x),l!==void 0&&i.hasValue){var v=i.value;if(l(v,x))return h=v}return h=x}if(v=h,Rp(m,x))return v;var y=r(x);return l!==void 0&&l(v,y)?(m=x,v):(m=x,h=y)}var d=!1,m,h,g=n===void 0?null:n;return[function(){return u(t())},g===null?void 0:function(){return u(g())}]},[t,n,r,l]);var s=Fp(e,o[0],o[1]);return Op(function(){i.hasValue=!0,i.value=s},[s]),Wp(s),s};Fc.exports=Ic;var $p=Fc.exports;const Up=Sa($p),Wc={},{useDebugValue:Bp}=Ma,{useSyncExternalStoreWithSelector:Hp}=Up;let pa=!1;const Vp=e=>e;function Qp(e,t=Vp,n){(Wc?"production":void 0)!=="production"&&n&&!pa&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),pa=!0);const r=Hp(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return Bp(r),r}const ma=e=>{(Wc?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?Sp(e):e,n=(r,l)=>Qp(t,r,l);return Object.assign(n,t),n},hr=e=>e?ma(e):ma,dn=hr((e,t)=>({phase:"menu",weather:"sunny",dayNumber:1,timeOfDay:0,isPaused:!1,lastUpdateTime:Date.now(),setPhase:n=>e({phase:n}),setWeather:n=>e({weather:n}),advanceDay:()=>e(n=>({dayNumber:n.dayNumber+1,timeOfDay:0,weather:ha()})),updateTimeOfDay:n=>e(r=>{const l=r.timeOfDay+n;return l>=100?{timeOfDay:0,dayNumber:r.dayNumber+1,weather:ha()}:{timeOfDay:l}}),togglePause:()=>e(n=>({isPaused:!n.isPaused,phase:n.isPaused?"playing":"paused"})),startGame:()=>e({phase:"playing",isPaused:!1,lastUpdateTime:Date.now()}),endGame:()=>e({phase:"gameover",isPaused:!1}),resetGame:()=>e({phase:"menu",weather:"sunny",dayNumber:1,timeOfDay:0,isPaused:!1,lastUpdateTime:Date.now()})}));function ha(){const e=["sunny","sunny","sunny","rainy","foggy"];return e[Math.floor(Math.random()*e.length)]}function Gp(){return`notif-${Date.now()}-${Math.random().toString(36).substr(2,9)}`}const Al=hr((e,t)=>({currentScreen:"title",isModalOpen:!1,modalContent:null,notifications:[],isLoading:!1,showTutorial:!0,setScreen:n=>{e({currentScreen:n})},openModal:n=>{e({isModalOpen:!0,modalContent:n})},closeModal:()=>{e({isModalOpen:!1,modalContent:null})},addNotification:(n,r="info",l=3e3)=>{const o={id:Gp(),message:n,type:r,duration:l,createdAt:Date.now()};e(i=>({notifications:[...i.notifications,o]})),l>0&&setTimeout(()=>{t().removeNotification(o.id)},l)},removeNotification:n=>{e(r=>({notifications:r.notifications.filter(l=>l.id!==n)}))},clearNotifications:()=>{e({notifications:[]})},setLoading:n=>{e({isLoading:n})},setShowTutorial:n=>{e({showTutorial:n})},resetUI:()=>{e({currentScreen:"title",isModalOpen:!1,modalContent:null,notifications:[],isLoading:!1})}})),bp={};function Yp(e,t){let n;try{n=e()}catch{return}return{getItem:l=>{var o;const i=u=>u===null?null:JSON.parse(u,void 0),s=(o=n.getItem(l))!=null?o:null;return s instanceof Promise?s.then(i):i(s)},setItem:(l,o)=>n.setItem(l,JSON.stringify(o,void 0)),removeItem:l=>n.removeItem(l)}}const ur=e=>t=>{try{const n=e(t);return n instanceof Promise?n:{then(r){return ur(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return ur(r)(n)}}}},Kp=(e,t)=>(n,r,l)=>{let o={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:C=>C,version:0,merge:(C,f)=>({...f,...C}),...t},i=!1;const s=new Set,u=new Set;let d;try{d=o.getStorage()}catch{}if(!d)return e((...C)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),n(...C)},r,l);const m=ur(o.serialize),h=()=>{const C=o.partialize({...r()});let f;const c=m({state:C,version:o.version}).then(p=>d.setItem(o.name,p)).catch(p=>{f=p});if(f)throw f;return c},g=l.setState;l.setState=(C,f)=>{g(C,f),h()};const x=e((...C)=>{n(...C),h()},r,l);let v;const y=()=>{var C;if(!d)return;i=!1,s.forEach(c=>c(r()));const f=((C=o.onRehydrateStorage)==null?void 0:C.call(o,r()))||void 0;return ur(d.getItem.bind(d))(o.name).then(c=>{if(c)return o.deserialize(c)}).then(c=>{if(c)if(typeof c.version=="number"&&c.version!==o.version){if(o.migrate)return o.migrate(c.state,c.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return c.state}).then(c=>{var p;return v=o.merge(c,(p=r())!=null?p:x),n(v,!0),h()}).then(()=>{f==null||f(v,void 0),i=!0,u.forEach(c=>c(v))}).catch(c=>{f==null||f(void 0,c)})};return l.persist={setOptions:C=>{o={...o,...C},C.getStorage&&(d=C.getStorage())},clearStorage:()=>{d==null||d.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>y(),hasHydrated:()=>i,onHydrate:C=>(s.add(C),()=>{s.delete(C)}),onFinishHydration:C=>(u.add(C),()=>{u.delete(C)})},y(),v||x},Xp=(e,t)=>(n,r,l)=>{let o={storage:Yp(()=>localStorage),partialize:y=>y,version:0,merge:(y,C)=>({...C,...y}),...t},i=!1;const s=new Set,u=new Set;let d=o.storage;if(!d)return e((...y)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),n(...y)},r,l);const m=()=>{const y=o.partialize({...r()});return d.setItem(o.name,{state:y,version:o.version})},h=l.setState;l.setState=(y,C)=>{h(y,C),m()};const g=e((...y)=>{n(...y),m()},r,l);l.getInitialState=()=>g;let x;const v=()=>{var y,C;if(!d)return;i=!1,s.forEach(c=>{var p;return c((p=r())!=null?p:g)});const f=((C=o.onRehydrateStorage)==null?void 0:C.call(o,(y=r())!=null?y:g))||void 0;return ur(d.getItem.bind(d))(o.name).then(c=>{if(c)if(typeof c.version=="number"&&c.version!==o.version){if(o.migrate)return[!0,o.migrate(c.state,c.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,c.state];return[!1,void 0]}).then(c=>{var p;const[w,k]=c;if(x=o.merge(k,(p=r())!=null?p:g),n(x,!0),w)return m()}).then(()=>{f==null||f(x,void 0),x=r(),i=!0,u.forEach(c=>c(x))}).catch(c=>{f==null||f(void 0,c)})};return l.persist={setOptions:y=>{o={...o,...y},y.storage&&(d=y.storage)},clearStorage:()=>{d==null||d.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>v(),hasHydrated:()=>i,onHydrate:y=>(s.add(y),()=>{s.delete(y)}),onFinishHydration:y=>(u.add(y),()=>{u.delete(y)})},o.skipHydration||v(),x||g},Zp=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?((bp?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),Kp(e,t)):Xp(e,t),$c=Zp,fn={carrot:{id:"carrot",name:"紅蘿蔔",emoji:"🥕",difficulty:1,minWordLength:3,maxWordLength:4,growthTime:3e4,harvestTimeLimit:8,sellPrice:5},onion:{id:"onion",name:"洋蔥",emoji:"🧅",difficulty:1,minWordLength:3,maxWordLength:5,growthTime:45e3,harvestTimeLimit:8,sellPrice:8},tomato:{id:"tomato",name:"番茄",emoji:"🍅",difficulty:2,minWordLength:4,maxWordLength:5,growthTime:6e4,harvestTimeLimit:7,sellPrice:10},lettuce:{id:"lettuce",name:"生菜",emoji:"🥬",difficulty:2,minWordLength:4,maxWordLength:6,growthTime:5e4,harvestTimeLimit:7,sellPrice:12},corn:{id:"corn",name:"粟米",emoji:"🌽",difficulty:3,minWordLength:5,maxWordLength:7,growthTime:9e4,harvestTimeLimit:6,sellPrice:20},pumpkin:{id:"pumpkin",name:"南瓜",emoji:"🎃",difficulty:3,minWordLength:6,maxWordLength:8,growthTime:15e4,harvestTimeLimit:5,sellPrice:40}},si={carrot:2,onion:3,tomato:5,lettuce:6,corn:10,pumpkin:20},ga=["carrot","onion"],at={rows:3,cols:4},va=50,Jp={carrot:5,onion:3},Ar={3:["cat","dog","sun","red","big","run","hat","cup","bed","pen"],4:["tree","farm","corn","seed","grow","rain","soil","leaf","root","stem"],5:["plant","water","earth","green","fruit","bloom","field","grain","wheat","berry"],6:["garden","flower","tomato","carrot","pepper","squash","sprout","branch","forest","meadow"],7:["harvest","pumpkin","farming","growing","seedling","cabbage","sunlight","organic","fertile","compost"],8:["gardener","cucumber","eggplant","broccoli","mushroom","radishes","beetroot","zucchini","parsley","spinach"]};function qp(e,t){const n=Object.keys(Ar).map(Number).filter(o=>o>=e&&o<=t);if(n.length===0){const i=Object.keys(Ar).map(Number).reduce((u,d)=>{const m=Math.min(Math.abs(u-e),Math.abs(u-t));return Math.min(Math.abs(d-e),Math.abs(d-t))<m?d:u}),s=Ar[i];return s[Math.floor(Math.random()*s.length)]}const r=n[Math.floor(Math.random()*n.length)],l=Ar[r];return l[Math.floor(Math.random()*l.length)]}function In(e){return qp(e.minWordLength,e.maxWordLength)}function em(e,t){const n=t.split("").map((o,i)=>o===e[i]),r=t.length===e.length,l=r&&n.every(o=>o);return{isComplete:r,isCorrect:l,correctChars:n}}function Uc(e,t,n,r){const l=(t-e)/6e4,o=n/5,i=l>0?Math.round(o/l):0,s=n+r,u=s>0?Math.round(n/s*100):100;return{wpm:i,accuracy:u}}function po(e,t){return Array(e).fill(null).map(()=>Array(t).fill(null))}function tm(e,t){return t<=0?"withered":e>=120?"overripe":e>=100?"mature":e>=60?"growing":e>=30?"sprout":"seed"}function nm(){return`crop-${Date.now()}-${Math.random().toString(36).substr(2,9)}`}const We=hr()($c((e,t)=>({grid:po(at.rows,at.cols),gridSize:{...at},selectedSlot:null,initializeGrid:(n=at.rows,r=at.cols)=>{e({grid:po(n,r),gridSize:{rows:n,cols:r},selectedSlot:null})},plantCrop:(n,r,l)=>{const{grid:o,gridSize:i}=t();if(n<0||n>=i.rows||r<0||r>=i.cols||o[n][r]!==null)return!1;const s={id:nm(),cropType:l,plantedAt:Date.now(),growthStage:"seed",waterLevel:50,fertilizerLevel:0,health:100,wordToHarvest:In(l),growthProgress:0},u=o.map((d,m)=>d.map((h,g)=>m===n&&g===r?s:h));return e({grid:u}),!0},harvestCrop:(n,r)=>{const{grid:l,gridSize:o}=t();if(n<0||n>=o.rows||r<0||r>=o.cols)return null;const i=l[n][r];if(!i||i.growthStage!=="mature")return null;const s=l.map((u,d)=>u.map((m,h)=>d===n&&h===r?null:m));return e({grid:s,selectedSlot:null}),i},removeCrop:(n,r)=>{const{grid:l,gridSize:o}=t();if(n<0||n>=o.rows||r<0||r>=o.cols)return;const i=l.map((s,u)=>s.map((d,m)=>u===n&&m===r?null:d));e({grid:i})},updateCropGrowth:n=>{const{grid:r}=t(),l=r.map(o=>o.map(i=>{if(!i)return null;const s=i.waterLevel>30?1:.5,u=1+i.fertilizerLevel/200,d=n/i.cropType.growthTime*100*s*u,m=n/1e4,h=Math.min(150,i.growthProgress+d),g=Math.max(0,i.waterLevel-m),x=Math.max(0,i.fertilizerLevel-n/6e4);let v=i.health;return g<=0&&(v=Math.max(0,i.health-n/5e3)),h>120&&(v=Math.max(0,i.health-n/1e4)),{...i,growthProgress:h,waterLevel:g,fertilizerLevel:x,health:v,growthStage:tm(h,v)}}));e({grid:l})},waterCrop:(n,r)=>{const{grid:l,gridSize:o}=t();if(n<0||n>=o.rows||r<0||r>=o.cols||!l[n][r])return;const s=l.map((u,d)=>u.map((m,h)=>d===n&&h===r&&m?{...m,waterLevel:Math.min(100,m.waterLevel+30)}:m));e({grid:s})},fertilizeCrop:(n,r)=>{const{grid:l,gridSize:o}=t();if(n<0||n>=o.rows||r<0||r>=o.cols||!l[n][r])return;const s=l.map((u,d)=>u.map((m,h)=>d===n&&h===r&&m?{...m,fertilizerLevel:Math.min(100,m.fertilizerLevel+25)}:m));e({grid:s})},selectSlot:(n,r)=>{e({selectedSlot:{row:n,col:r}})},clearSelection:()=>{e({selectedSlot:null})},getCropAt:(n,r)=>{const{grid:l,gridSize:o}=t();return n<0||n>=o.rows||r<0||r>=o.cols?null:l[n][r]},getMatureCrops:()=>{const{grid:n}=t(),r=[];return n.forEach((l,o)=>{l.forEach((i,s)=>{i&&i.growthStage==="mature"&&r.push({row:o,col:s,crop:i})})}),r},resetFarm:()=>{e({grid:po(at.rows,at.cols),gridSize:{...at},selectedSlot:null})}}),{name:"farm-typing-farm",partialize:e=>({grid:e.grid,gridSize:e.gridSize})})),ya={wpm:0,accuracy:100,totalWordsTyped:0,totalCropsHarvested:0,bestCombo:0,totalGoldEarned:0};function xa(){return Object.entries(Jp).map(([e,t],n)=>({id:`seed-${e}-${n}`,type:"seed",cropTypeId:e,quantity:t}))}const ht=hr()($c((e,t)=>({gold:va,stats:{...ya},inventory:xa(),unlockedCrops:[...ga],addGold:n=>e(r=>({gold:r.gold+n,stats:{...r.stats,totalGoldEarned:r.stats.totalGoldEarned+n}})),spendGold:n=>{const{gold:r}=t();return r>=n?(e({gold:r-n}),!0):!1},updateStats:n=>e(r=>({stats:{...r.stats,...n}})),addToInventory:n=>e(r=>{const l=r.inventory.findIndex(i=>i.type===n.type&&i.cropTypeId===n.cropTypeId);if(l>=0){const i=[...r.inventory];return i[l]={...i[l],quantity:i[l].quantity+n.quantity},{inventory:i}}const o={...n,id:`${n.type}-${n.cropTypeId||"generic"}-${Date.now()}`};return{inventory:[...r.inventory,o]}}),removeFromInventory:(n,r=1)=>{const{inventory:l}=t(),o=l.findIndex(u=>u.id===n);if(o<0)return!1;const i=l[o];if(i.quantity<r)return!1;const s=[...l];return i.quantity===r?s.splice(o,1):s[o]={...i,quantity:i.quantity-r},e({inventory:s}),!0},getInventoryItem:(n,r)=>{const{inventory:l}=t();return l.find(o=>o.type===n&&(r?o.cropTypeId===r:!0))},unlockCrop:n=>e(r=>r.unlockedCrops.includes(n)?r:{unlockedCrops:[...r.unlockedCrops,n]}),resetPlayer:()=>e({gold:va,stats:{...ya},inventory:xa(),unlockedCrops:[...ga]})}),{name:"farm-typing-player",partialize:e=>({gold:e.gold,stats:e.stats,inventory:e.inventory,unlockedCrops:e.unlockedCrops})})),Bc=hr((e,t)=>({activeSession:null,currentWPM:0,currentAccuracy:100,combo:0,maxCombo:0,errorCount:0,recentWPMs:[],sessionHistory:[],pendingSoundEffect:null,startSession:(n,r,l)=>{const o={targetWord:n,typedText:"",startTime:Date.now(),timeLimit:r,cropSlotId:l};e({activeSession:o,errorCount:0})},updateTypedText:n=>{const{activeSession:r,errorCount:l}=t();if(!r)return{isComplete:!1,isCorrect:!1};const o=em(r.targetWord,n);let i=0;const s=r.typedText.length;if(n.length>s)for(let u=s;u<n.length;u++)n[u]!==r.targetWord[u]&&i++;return e({activeSession:{...r,typedText:n},errorCount:l+i}),o},endSession:n=>{const{activeSession:r,errorCount:l,combo:o,maxCombo:i,recentWPMs:s,sessionHistory:u}=t();if(!r)return null;const d=Date.now(),m=Uc(r.startTime,d,r.targetWord.length,l),h={word:r.targetWord,wpm:m.wpm,accuracy:m.accuracy,time:(d-r.startTime)/1e3,success:n,timestamp:d},g=[...s,m.wpm].slice(-10),x=Math.round(g.reduce((y,C)=>y+C,0)/g.length),v=[...u,h].slice(-100);if(n){const y=o+1;e({activeSession:null,currentWPM:x,currentAccuracy:m.accuracy,combo:y,maxCombo:Math.max(i,y),errorCount:0,recentWPMs:g,sessionHistory:v,pendingSoundEffect:l===0?"perfect":"complete"})}else e({activeSession:null,currentWPM:x,currentAccuracy:m.accuracy,combo:0,errorCount:0,recentWPMs:g,sessionHistory:v,pendingSoundEffect:"timeout"});return m},cancelSession:()=>{e({activeSession:null,errorCount:0})},incrementCombo:()=>{const{combo:n,maxCombo:r}=t(),l=n+1;e({combo:l,maxCombo:Math.max(r,l)})},resetCombo:()=>{e({combo:0})},getSessionTimeRemaining:()=>{const{activeSession:n}=t();if(!n)return 0;const r=(Date.now()-n.startTime)/1e3;return Math.max(0,n.timeLimit-r)},resetTypingState:()=>{e({activeSession:null,currentWPM:0,currentAccuracy:100,combo:0,maxCombo:0,errorCount:0,recentWPMs:[],sessionHistory:[],pendingSoundEffect:null})},calculateAverageWPM:()=>{const{sessionHistory:n}=t();if(n.length===0)return 0;const r=n.filter(o=>o.success);if(r.length===0)return 0;const l=r.reduce((o,i)=>o+i.wpm,0);return Math.round(l/r.length)},calculateOverallAccuracy:()=>{const{sessionHistory:n}=t();if(n.length===0)return 100;const r=n.reduce((l,o)=>l+o.accuracy,0);return Math.round(r/n.length)},getSessionHistory:()=>t().sessionHistory,clearSessionHistory:()=>{e({sessionHistory:[]})},triggerSoundEffect:n=>{e({pendingSoundEffect:n})},clearSoundEffect:()=>{e({pendingSoundEffect:null})}})),rm=[10,25,50,100];function lm(e){const{targetWord:t,timeLimit:n,cropSlotId:r,onComplete:l,onTimeout:o,onComboMilestone:i}=e,s=Bc(),[u,d]=E.useState(""),[m,h]=E.useState([]),[g,x]=E.useState(n),[v,y]=E.useState(0),[C,f]=E.useState(100),[c,p]=E.useState(!1),[w,k]=E.useState(!1),[z,j]=E.useState(null),[_,A]=E.useState(!1),P=E.useRef(0),J=E.useRef(0),$=E.useRef(null),ke=E.useRef(0),O=E.useCallback(F=>t.split("").map((X,ae)=>ae<F.length?F[ae]===X?"correct":"wrong":ae===F.length?"current":"pending"),[t]),R=E.useCallback(F=>{if(P.current===0||F===0)return 0;const ae=(Date.now()-P.current)/6e4;return ae===0?0:Math.round(F/5/ae)},[]),Y=E.useCallback((F,X)=>X===0?100:Math.round(F/X*100),[]),He=E.useCallback(()=>{A(!0),P.current=Date.now(),J.current=0,ke.current=0,d(""),h(O("")),x(n),y(0),f(100),p(!1),k(!1),j(null),s.startSession(t,n,r)},[t,n,r,s,O]),N=E.useCallback(F=>{if(!_||c||w||F.length!==1)return;const X=u+F,ae=u.length;F===t[ae]||(J.current+=1,j("miss"),setTimeout(()=>j(null),300)),d(X),h(O(X)),s.updateTypedText(X);const Ke=X.split("").filter((vr,yr)=>vr===t[yr]).length,Ht=R(X.length),Vc=Y(Ke,X.length);if(y(Ht),f(Vc),X.length===t.length){const vr=X===t;p(!0),A(!1),$.current&&(clearInterval($.current),$.current=null);const yr=Uc(P.current,Date.now(),t.length,J.current),Vt=s.endSession(vr);if(vr){j(J.current===0?"perfect":"good");const ns=s.combo;for(const xr of rm)ns>=xr&&ke.current<xr&&(ke.current=xr,i==null||i(xr));l==null||l({wpm:(Vt==null?void 0:Vt.wpm)??yr.wpm,accuracy:(Vt==null?void 0:Vt.accuracy)??yr.accuracy,combo:ns})}else j("miss"),s.resetCombo(),o==null||o()}},[_,c,w,u,t,O,R,Y,s,l,i,o]),L=E.useCallback(()=>{A(!1),d(""),h(O("")),x(n),y(0),f(100),p(!1),k(!1),j(null),P.current=0,J.current=0,$.current&&(clearInterval($.current),$.current=null),s.cancelSession()},[n,O,s]);return E.useEffect(()=>{if(!_||c||w){$.current&&(clearInterval($.current),$.current=null);return}return $.current=setInterval(()=>{const F=(Date.now()-P.current)/1e3,X=Math.max(0,n-F);x(X),X<=0&&(k(!0),A(!1),j("miss"),$.current&&(clearInterval($.current),$.current=null),s.endSession(!1),s.resetCombo(),o==null||o())},100),()=>{$.current&&(clearInterval($.current),$.current=null)}},[_,c,w,n,s,o]),E.useEffect(()=>{h(O(""))},[O]),E.useEffect(()=>()=>{$.current&&clearInterval($.current)},[]),[{typedChars:u,charStatuses:m,timeRemaining:g,wpm:v,accuracy:C,combo:s.combo,isComplete:c,isTimeout:w,feedbackMessage:z},{handleKeyPress:N,reset:L,start:He}]}const om={perfect:{color:"#FFD700",textShadow:"0 0 10px #FFD700, 0 0 20px #FFA500"},good:{color:"#4CAF50",textShadow:"0 0 10px #4CAF50"},miss:{color:"#FF4444",textShadow:"0 0 10px #FF4444"}},im={perfect:"✨ Perfect! ✨",good:"👍 Good!",miss:"❌ Miss!"},sm=({message:e,combo:t,showCombo:n=!0,onAnimationEnd:r})=>{const[l,o]=E.useState(!1),[i,s]=E.useState(!1),[u,d]=E.useState(t);return E.useEffect(()=>{if(e){o(!0);const m=setTimeout(()=>{o(!1),r==null||r()},1e3);return()=>clearTimeout(m)}},[e,r]),E.useEffect(()=>{if(t>u&&t>0){s(!0);const m=setTimeout(()=>s(!1),150);return d(t),()=>clearTimeout(m)}d(t)},[t,u]),a.jsxs("div",{className:"typing-feedback-container",children:[e&&l&&a.jsx("div",{className:"feedback-message",style:{...om[e],animation:"feedbackPop 0.5s ease-out forwards"},children:im[e]}),n&&t>0&&a.jsxs("div",{className:`combo-display ${i?"bump":""}`,style:{color:t>=50?"#FFD700":t>=25?"#FFA500":t>=10?"#4CAF50":"#666"},children:[a.jsx("span",{className:"combo-icon",children:"🔥"}),a.jsxs("span",{className:"combo-text",children:["Combo x",t]}),t>=10&&a.jsx("span",{className:"combo-milestone",children:t>=100?"🏆":t>=50?"⭐":t>=25?"🌟":"✨"})]}),a.jsx("style",{children:`
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
      `})]})},Hc=({targetWord:e,timeLimit:t,cropSlotId:n,cropType:r,autoStart:l=!0,onComplete:o,onTimeout:i,onComboMilestone:s})=>{const u=E.useRef(null),d=E.useRef(null),m={targetWord:e,timeLimit:t,cropSlotId:n,onComplete:o,onTimeout:i,onComboMilestone:s},[h,g]=lm(m);E.useEffect(()=>{u.current&&u.current.focus()},[]),E.useEffect(()=>{l&&g.start()},[l,g]);const x=E.useCallback(f=>{if(f.key!=="Tab"&&f.key!=="Escape"&&f.preventDefault(),f.key.length===1){g.handleKeyPress(f.key);const c=h.typedChars.length;f.key!==e[c]&&d.current&&(d.current.classList.add("screen-shake"),setTimeout(()=>{var p;(p=d.current)==null||p.classList.remove("screen-shake")},300))}},[g,h.typedChars.length,e]),v=E.useCallback(()=>{var f;(f=u.current)==null||f.focus()},[]),y=f=>f.toFixed(1),C=h.timeRemaining<=3&&h.timeRemaining>0;return a.jsxs("div",{ref:d,className:"typing-area",onClick:v,children:[r&&a.jsxs("div",{className:"crop-header",children:[a.jsx("span",{className:"crop-emoji",children:r.emoji}),a.jsx("span",{className:"crop-label",children:"目前作物："}),a.jsx("span",{className:"crop-name",children:r.name})]}),a.jsxs("div",{className:"word-container",children:[a.jsx("div",{className:"target-word",children:e.split("").map((f,c)=>a.jsx("span",{className:`char char-${h.charStatuses[c]||"pending"}`,children:f},c))}),a.jsx("div",{className:"hint-text",children:e})]}),a.jsx("input",{ref:u,type:"text",className:"hidden-input",onKeyDown:x,autoComplete:"off",autoCapitalize:"off",autoCorrect:"off",spellCheck:!1,"aria-label":"Type the word"}),a.jsx(sm,{message:h.feedbackMessage,combo:h.combo,showCombo:!0}),a.jsxs("div",{className:"stats-row",children:[a.jsxs("div",{className:`stat timer ${C?"timer-warning":""}`,children:[a.jsx("span",{className:"stat-icon",children:"⏱️"}),a.jsx("span",{className:"stat-label",children:"剩餘"}),a.jsxs("span",{className:"stat-value",children:[y(h.timeRemaining)," 秒"]})]}),a.jsxs("div",{className:"stat accuracy",children:[a.jsx("span",{className:"stat-icon",children:"✅"}),a.jsx("span",{className:"stat-label",children:"正確率"}),a.jsxs("span",{className:"stat-value",children:[h.accuracy,"%"]})]})]}),a.jsxs("div",{className:"stats-row",children:[a.jsxs("div",{className:"stat combo",children:[a.jsx("span",{className:"stat-icon",children:"🔥"}),a.jsx("span",{className:"stat-label",children:"Combo"}),a.jsxs("span",{className:"stat-value",children:["x",h.combo]})]}),a.jsxs("div",{className:"stat wpm",children:[a.jsx("span",{className:"stat-icon",children:"⚡"}),a.jsx("span",{className:"stat-label",children:"WPM"}),a.jsx("span",{className:"stat-value",children:h.wpm})]})]}),h.isComplete&&a.jsx("div",{className:"status-complete",children:"✅ 完成!"}),h.isTimeout&&a.jsx("div",{className:"status-timeout",children:"⏰ 時間到!"}),a.jsx("style",{children:`
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
      `})]})},am={seed:{icon:"🟤",bgColor:"#8B4513",label:"種子"},sprout:{icon:"🌱",bgColor:"#90EE90",label:"發芽"},growing:{icon:"🌿",bgColor:"#32CD32",label:"生長中"},mature:{icon:"",bgColor:"#FFD700",animation:"pulse-glow",label:"成熟!"},overripe:{icon:"",bgColor:"#FFA500",animation:"shake-warning",label:"過熟!"},withered:{icon:"🥀",bgColor:"#808080",label:"枯萎"}},um=({crop:e,row:t,col:n,isSelected:r,onClick:l})=>{const o=e?am[e.growthStage]:null,i=E.useMemo(()=>e?e.growthStage==="mature"||e.growthStage==="overripe"?e.cropType.emoji:e.growthStage==="withered"?"🥀":(o==null?void 0:o.icon)||"🟤":null,[e,o]),s=e&&e.waterLevel<20,u=(e==null?void 0:e.growthStage)==="mature",d=(e==null?void 0:e.growthStage)==="overripe";return a.jsxs("div",{className:`crop-slot ${r?"selected":""} ${e?"has-crop":"empty"}`,onClick:l,"data-row":t,"data-col":n,children:[!e&&a.jsxs("div",{className:"empty-slot",children:[a.jsx("span",{className:"plus-icon",children:"+"}),a.jsx("span",{className:"dirt-texture",children:"🟫"})]}),e&&a.jsxs("div",{className:`crop-display ${(o==null?void 0:o.animation)||""}`,children:[a.jsx("span",{className:"crop-emoji",children:i}),a.jsx("div",{className:"progress-bar-container",children:a.jsx("div",{className:`progress-bar ${e.growthStage}`,style:{width:`${Math.min(100,e.growthProgress)}%`}})}),a.jsx("span",{className:"stage-label",children:o==null?void 0:o.label}),s&&a.jsx("div",{className:"water-warning",children:"💧"}),u&&a.jsx("div",{className:"ready-indicator",children:"✨"}),d&&a.jsx("div",{className:"warning-indicator",children:"⚠️"})]}),a.jsx("style",{children:`
        .crop-slot {
          width: 100px;
          height: 120px;
          border: 3px solid #8B7355;
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
        }

        .crop-emoji {
          font-size: 40px;
          margin-bottom: 4px;
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
        }

        .progress-bar.seed {
          background: #8B4513;
        }

        .progress-bar.sprout {
          background: #90EE90;
        }

        .progress-bar.growing {
          background: #32CD32;
        }

        .progress-bar.mature {
          background: linear-gradient(90deg, #FFD700, #FFA500);
        }

        .progress-bar.overripe {
          background: #FFA500;
        }

        .progress-bar.withered {
          background: #808080;
        }

        .stage-label {
          font-size: 12px;
          color: #FFF;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
          font-weight: bold;
        }

        .water-warning {
          position: absolute;
          top: 4px;
          left: 4px;
          font-size: 16px;
          animation: bounce 0.5s infinite alternate;
        }

        .ready-indicator {
          position: absolute;
          top: 4px;
          right: 4px;
          font-size: 16px;
          animation: sparkle 0.8s infinite;
        }

        .warning-indicator {
          position: absolute;
          top: 4px;
          right: 4px;
          font-size: 16px;
          animation: shake 0.3s infinite;
        }

        /* Animations */
        @keyframes pulse-glow {
          0%, 100% {
            filter: drop-shadow(0 0 4px rgba(255, 215, 0, 0.5));
          }
          50% {
            filter: drop-shadow(0 0 12px rgba(255, 215, 0, 0.8));
          }
        }

        @keyframes shake-warning {
          0%, 100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-2px);
          }
          75% {
            transform: translateX(2px);
          }
        }

        @keyframes bounce {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-4px);
          }
        }

        @keyframes sparkle {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.2);
          }
        }

        @keyframes shake {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-5deg);
          }
          75% {
            transform: rotate(5deg);
          }
        }

        .pulse-glow {
          animation: pulse-glow 1.5s infinite ease-in-out;
        }

        .shake-warning {
          animation: shake-warning 0.5s infinite ease-in-out;
        }
      `})]})};class cm{constructor(){wr(this,"updateInterval",null);wr(this,"lastUpdateTime",0);wr(this,"isRunning",!1)}start(){this.isRunning||(this.isRunning=!0,this.lastUpdateTime=Date.now(),console.log("[CropSystem] Started"))}stop(){this.isRunning=!1,this.updateInterval!==null&&(clearInterval(this.updateInterval),this.updateInterval=null),console.log("[CropSystem] Stopped")}updateCrops(){if(!this.isRunning)return;const t=Date.now(),n=t-this.lastUpdateTime;this.lastUpdateTime=t,We.getState().updateCropGrowth(n)}plantCrop(t,n,r){const l=We.getState();return l.plantCrop(t,n,r)?l.getCropAt(t,n):null}calculateGrowthStage(t){if(t.health<=0)return"withered";const n=t.growthProgress;return n>=140?"withered":n>=120?"overripe":n>=80?"mature":n>=40?"growing":n>=20?"sprout":"seed"}calculateGrowthProgress(t){const n=Date.now()-t.plantedAt,r=t.cropType.growthTime;let l=n/r*100;return t.waterLevel<20&&(l*=.5),t.fertilizerLevel>0&&(l*=1+t.fertilizerLevel/400),Math.min(150,l)}isHarvestable(t){return t.growthStage==="mature"}canHarvest(t){return t.growthStage==="mature"||t.growthStage==="overripe"}getSellPriceMultiplier(t){switch(t.growthStage){case"mature":return 1;case"overripe":return .5;case"withered":return 0;default:return 0}}calculateSellPrice(t){const n=t.cropType.sellPrice,r=this.getSellPriceMultiplier(t);return Math.floor(n*r)}harvestCrop(t,n){const r=We.getState(),l=r.getCropAt(t,n);if(!l)return{success:!1};if(!this.canHarvest(l))return{success:!1};const o=this.calculateSellPrice(l),i=r.harvestCrop(t,n);return i?{success:!0,crop:i,price:o}:{success:!1}}waterCrop(t,n){We.getState().waterCrop(t,n)}fertilizeCrop(t,n){We.getState().fertilizeCrop(t,n)}getTimeToNextStage(t){const n=t.growthProgress;let r;if(n<20)r=20;else if(n<40)r=40;else if(n<80)r=80;else if(n<100)r=100;else return 0;const l=r-n;let i=100/t.cropType.growthTime;return t.waterLevel<20&&(i*=.5),t.fertilizerLevel>0&&(i*=1+t.fertilizerLevel/400),l/i/1e3}getCropsNeedingAttention(){const t=We.getState(),{grid:n}=t,r=[];return n.forEach((l,o)=>{l.forEach((i,s)=>{i&&(i.waterLevel<20&&r.push({row:o,col:s,crop:i,reason:"needs_water"}),i.growthStage==="overripe"&&r.push({row:o,col:s,crop:i,reason:"overripe"}),i.growthStage==="mature"&&r.push({row:o,col:s,crop:i,reason:"ready_harvest"}))})}),r}getCropById(t){return fn[t]}}const et=new cm,dm={seed:{label:"種子",color:"#8B4513",emoji:"🟤"},sprout:{label:"發芽",color:"#90EE90",emoji:"🌱"},growing:{label:"生長中",color:"#32CD32",emoji:"🌿"},mature:{label:"成熟",color:"#FFD700",emoji:"✨"},overripe:{label:"過熟",color:"#FFA500",emoji:"⚠️"},withered:{label:"枯萎",color:"#808080",emoji:"💀"}},fm=({crop:e,onHarvest:t,onWater:n,onFertilize:r,onClose:l})=>{const o=dm[e.growthStage],i=et.calculateSellPrice(e),s=et.canHarvest(e),u=et.getTimeToNextStage(e),d=e.waterLevel<20,m=g=>{if(g<=0)return"準備完成!";const x=Math.floor(g/60),v=Math.floor(g%60);return`${x}:${v.toString().padStart(2,"0")}`},h=()=>"⭐".repeat(e.cropType.difficulty);return a.jsxs("div",{className:"crop-info-card",children:[a.jsxs("div",{className:"card-header",children:[a.jsxs("div",{className:"crop-identity",children:[a.jsx("span",{className:"crop-emoji-large",children:e.cropType.emoji}),a.jsxs("div",{className:"crop-details",children:[a.jsx("h3",{className:"crop-name",children:e.cropType.name}),a.jsx("span",{className:"difficulty",children:h()})]})]}),l&&a.jsx("button",{className:"close-btn",onClick:l,children:"✕"})]}),a.jsxs("div",{className:"info-section",children:[a.jsx("div",{className:"section-label",children:"生長階段"}),a.jsxs("div",{className:"growth-stage",style:{color:o.color},children:[a.jsx("span",{className:"stage-emoji",children:o.emoji}),a.jsx("span",{className:"stage-label",children:o.label})]}),a.jsxs("div",{className:"progress-container",children:[a.jsx("div",{className:"progress-track",children:a.jsx("div",{className:"progress-fill",style:{width:`${Math.min(100,e.growthProgress)}%`,backgroundColor:o.color}})}),a.jsxs("span",{className:"progress-text",children:[Math.floor(e.growthProgress),"%"]})]}),e.growthStage!=="mature"&&e.growthStage!=="overripe"&&e.growthStage!=="withered"&&a.jsxs("div",{className:"time-remaining",children:[a.jsx("span",{className:"time-icon",children:"⏱️"}),a.jsxs("span",{children:["下一階段: ",m(u)]})]})]}),a.jsxs("div",{className:"info-section",children:[a.jsx("div",{className:"section-label",children:"狀態"}),a.jsxs("div",{className:`status-row ${d?"warning":""}`,children:[a.jsx("span",{className:"status-icon",children:"💧"}),a.jsx("span",{className:"status-label",children:"水分"}),a.jsx("div",{className:"status-bar",children:a.jsx("div",{className:"status-fill water",style:{width:`${e.waterLevel}%`}})}),a.jsxs("span",{className:"status-value",children:[Math.floor(e.waterLevel),"%"]})]}),a.jsxs("div",{className:"status-row",children:[a.jsx("span",{className:"status-icon",children:"🌿"}),a.jsx("span",{className:"status-label",children:"肥料"}),a.jsx("div",{className:"status-bar",children:a.jsx("div",{className:"status-fill fertilizer",style:{width:`${e.fertilizerLevel}%`}})}),a.jsxs("span",{className:"status-value",children:[Math.floor(e.fertilizerLevel),"%"]})]}),a.jsxs("div",{className:`status-row ${e.health<50?"warning":""}`,children:[a.jsx("span",{className:"status-icon",children:"❤️"}),a.jsx("span",{className:"status-label",children:"健康"}),a.jsx("div",{className:"status-bar",children:a.jsx("div",{className:"status-fill health",style:{width:`${e.health}%`}})}),a.jsxs("span",{className:"status-value",children:[Math.floor(e.health),"%"]})]})]}),a.jsxs("div",{className:"info-section",children:[a.jsx("div",{className:"section-label",children:"收成資訊"}),a.jsxs("div",{className:"sell-info",children:[a.jsx("span",{className:"sell-icon",children:"💰"}),a.jsx("span",{className:"sell-label",children:"預計售價:"}),a.jsxs("span",{className:`sell-price ${e.growthStage==="overripe"?"reduced":""}`,children:[i," 金幣",e.growthStage==="overripe"&&a.jsx("span",{className:"price-note",children:"(減半)"})]})]}),s&&a.jsxs("div",{className:"harvest-word",children:[a.jsx("span",{className:"word-label",children:"收成打字:"}),a.jsx("span",{className:"word-preview",children:e.wordToHarvest})]})]}),a.jsxs("div",{className:"action-buttons",children:[a.jsx("button",{className:"action-btn water-btn",onClick:n,disabled:e.waterLevel>=100,children:"💧 澆水"}),a.jsx("button",{className:"action-btn fertilize-btn",onClick:r,disabled:e.fertilizerLevel>=100,children:"🌿 施肥"}),s&&a.jsx("button",{className:"action-btn harvest-btn",onClick:t,children:"🌾 收成"})]}),d&&a.jsx("div",{className:"warning-banner water-warning",children:"💧 需要澆水！生長速度已減慢"}),e.growthStage==="overripe"&&a.jsx("div",{className:"warning-banner overripe-warning",children:"⚠️ 過熟中！快收成否則會枯萎"}),e.growthStage==="withered"&&a.jsx("div",{className:"warning-banner withered-warning",children:"💀 已枯萎，無法收成"}),a.jsx("style",{children:`
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
      `})]})},pm=({row:e,col:t,onPlant:n,onClose:r})=>{const{gold:l,inventory:o,unlockedCrops:i}=ht(),s=v=>{const y=o.find(C=>C.type==="seed"&&C.cropTypeId===v);return(y==null?void 0:y.quantity)||0},u=v=>{if(!i.includes(v))return!1;if(s(v)>0)return!0;const C=si[v]||0;return l>=C},d=v=>"⭐".repeat(v),m=v=>{const y=v/1e3;return y<60?`${y}秒`:`${Math.floor(y/60)}分鐘`},h=v=>{u(v.id)&&n(v)},g=Object.values(fn).filter(v=>i.includes(v.id)).sort((v,y)=>v.difficulty-y.difficulty),x=Object.values(fn).filter(v=>!i.includes(v.id)).sort((v,y)=>v.difficulty-y.difficulty);return a.jsx("div",{className:"modal-overlay",onClick:r,children:a.jsxs("div",{className:"modal-content",onClick:v=>v.stopPropagation(),children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("h2",{children:"🌱 選擇種子"}),a.jsxs("span",{className:"slot-info",children:["種植位置: (",e+1,", ",t+1,")"]}),a.jsx("button",{className:"close-btn",onClick:r,children:"✕"})]}),a.jsxs("div",{className:"gold-display",children:[a.jsx("span",{className:"gold-icon",children:"💰"}),a.jsxs("span",{className:"gold-amount",children:[l," 金幣"]})]}),a.jsx("div",{className:"crop-grid",children:g.map(v=>{const y=s(v.id),C=si[v.id]||0,f=y>0||l>=C,c=u(v.id);return a.jsxs("div",{className:`crop-card ${c?"":"disabled"}`,onClick:()=>h(v),children:[a.jsx("span",{className:"crop-emoji",children:v.emoji}),a.jsx("span",{className:"crop-name",children:v.name}),a.jsx("span",{className:"difficulty",children:d(v.difficulty)}),a.jsxs("div",{className:"crop-stats",children:[a.jsxs("div",{className:"stat",children:[a.jsx("span",{className:"stat-icon",children:"⏱️"}),a.jsx("span",{children:m(v.growthTime)})]}),a.jsxs("div",{className:"stat",children:[a.jsx("span",{className:"stat-icon",children:"💰"}),a.jsx("span",{children:v.sellPrice})]})]}),a.jsx("div",{className:"seed-info",children:y>0?a.jsxs("span",{className:"seed-count",children:["🌱 擁有: ",y]}):a.jsxs("span",{className:`seed-price ${f?"":"expensive"}`,children:["購買: ",C," 💰"]})}),c&&a.jsx("div",{className:"plant-indicator",children:"點擊種植"})]},v.id)})}),x.length>0&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"section-divider",children:a.jsx("span",{children:"🔒 未解鎖的作物"})}),a.jsx("div",{className:"crop-grid locked",children:x.map(v=>a.jsxs("div",{className:"crop-card locked",children:[a.jsx("span",{className:"crop-emoji",children:v.emoji}),a.jsx("span",{className:"crop-name",children:v.name}),a.jsx("span",{className:"difficulty",children:d(v.difficulty)}),a.jsx("div",{className:"lock-overlay",children:a.jsx("span",{className:"lock-icon",children:"🔒"})})]},v.id))})]}),a.jsx("div",{className:"modal-footer",children:a.jsx("span",{className:"tip",children:"💡 提示: 難度越高的作物，打字時間越短但售價越高！"})}),a.jsx("style",{children:`
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
        `})]})})},mm=({crop:e,row:t,col:n,onClose:r,onSuccess:l,onFail:o})=>{const[i,s]=E.useState("ready"),[u,d]=E.useState(0),[m,h]=E.useState({wpm:0,accuracy:0,combo:0}),{addGold:g,updateStats:x,addToInventory:v}=ht(),{removeCrop:y}=We(),C=et.calculateSellPrice(e),f=E.useCallback(k=>{s("success"),h(k);const z=Math.floor(C*(k.combo*.1)),j=C+z;d(j),g(j),x({totalWordsTyped:ht.getState().stats.totalWordsTyped+1,totalCropsHarvested:ht.getState().stats.totalCropsHarvested+1,bestCombo:Math.max(ht.getState().stats.bestCombo,k.combo)}),v({type:"crop",cropTypeId:e.cropType.id,quantity:1}),y(t,n),l(j,e)},[C,g,x,v,y,t,n,e,l]),c=E.useCallback(()=>{s("failed"),We.getState().getCropAt(t,n),o()},[t,n,o]),p=E.useCallback(k=>{console.log(`Combo milestone reached: ${k}!`)},[]),w=()=>{s("typing")};return a.jsx("div",{className:"modal-overlay",children:a.jsxs("div",{className:"harvest-modal",children:[i==="ready"&&a.jsxs("div",{className:"ready-content",children:[a.jsxs("div",{className:"crop-preview",children:[a.jsx("span",{className:"crop-emoji-large",children:e.cropType.emoji}),a.jsx("h2",{children:e.cropType.name})]}),a.jsxs("div",{className:"harvest-info",children:[a.jsxs("p",{className:"word-preview",children:["打字收成: ",a.jsx("strong",{children:e.wordToHarvest})]}),a.jsxs("p",{className:"time-limit",children:["時間限制: ",a.jsxs("strong",{children:[e.cropType.harvestTimeLimit,"秒"]})]}),a.jsxs("p",{className:"reward",children:["獎勵: ",a.jsxs("strong",{children:[C," 💰"]})]})]}),a.jsxs("div",{className:"action-buttons",children:[a.jsx("button",{className:"start-btn",onClick:w,children:"🌾 開始收成!"}),a.jsx("button",{className:"cancel-btn",onClick:r,children:"取消"})]})]}),i==="typing"&&a.jsx("div",{className:"typing-content",children:a.jsx(Hc,{targetWord:e.wordToHarvest,timeLimit:e.cropType.harvestTimeLimit,cropSlotId:e.id,cropType:e.cropType,autoStart:!0,onComplete:f,onTimeout:c,onComboMilestone:p})}),i==="success"&&a.jsxs("div",{className:"success-content",children:[a.jsx("div",{className:"success-icon",children:"🎉"}),a.jsx("h2",{children:"收成成功!"}),a.jsx("div",{className:"crop-harvested",children:a.jsx("span",{className:"crop-emoji-large",children:e.cropType.emoji})}),a.jsxs("div",{className:"rewards-summary",children:[a.jsxs("div",{className:"reward-row",children:[a.jsx("span",{children:"基本獎勵:"}),a.jsxs("span",{className:"gold",children:[C," 💰"]})]}),m.combo>1&&a.jsxs("div",{className:"reward-row bonus",children:[a.jsxs("span",{children:["連擊加成 (x",m.combo,"):"]}),a.jsxs("span",{className:"gold",children:["+",u-C," 💰"]})]}),a.jsxs("div",{className:"reward-row total",children:[a.jsx("span",{children:"總計:"}),a.jsxs("span",{className:"gold",children:[u," 💰"]})]})]}),a.jsxs("div",{className:"typing-stats",children:[a.jsxs("div",{className:"stat",children:[a.jsx("span",{className:"stat-label",children:"速度"}),a.jsxs("span",{className:"stat-value",children:[m.wpm," WPM"]})]}),a.jsxs("div",{className:"stat",children:[a.jsx("span",{className:"stat-label",children:"正確率"}),a.jsxs("span",{className:"stat-value",children:[m.accuracy,"%"]})]}),a.jsxs("div",{className:"stat",children:[a.jsx("span",{className:"stat-label",children:"連擊"}),a.jsxs("span",{className:"stat-value",children:["x",m.combo]})]})]}),a.jsx("button",{className:"close-btn-primary",onClick:r,children:"繼續"})]}),i==="failed"&&a.jsxs("div",{className:"failed-content",children:[a.jsx("div",{className:"failed-icon",children:"😢"}),a.jsx("h2",{children:"時間到!"}),a.jsx("p",{className:"failed-message",children:"收成失敗，作物狀態已下降"}),a.jsx("button",{className:"close-btn-primary",onClick:r,children:"再試一次"})]}),a.jsx("style",{children:`
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
        `})]})})},hm=()=>{const{grid:e,gridSize:t,selectedSlot:n,selectSlot:r,clearSelection:l,plantCrop:o,waterCrop:i,fertilizeCrop:s}=We(),{spendGold:u,inventory:d,removeFromInventory:m}=ht(),[h,g]=E.useState(!1),[x,v]=E.useState(!1),[y,C]=E.useState(null),[f,c]=E.useState(null),[p,w]=E.useState(null),k=E.useCallback((R,Y="info")=>{w({message:R,type:Y}),setTimeout(()=>w(null),3e3)},[]),z=E.useCallback((R,Y)=>{e[R][Y]?(n==null?void 0:n.row)===R&&(n==null?void 0:n.col)===Y?l():r(R,Y):(C({row:R,col:Y}),g(!0))},[e,n,r,l]),j=E.useCallback(R=>{if(!y)return;const{row:Y,col:He}=y,N=d.find(M=>M.type==="seed"&&M.cropTypeId===R.id);if(N&&N.quantity>0)m(N.id,1);else{const M=si[R.id]||0;if(!u(M)){k("金幣不足!","error");return}}o(Y,He,R)?k(`種植了 ${R.emoji} ${R.name}!`,"success"):k("種植失敗!","error"),g(!1),C(null)},[y,d,m,u,o,k]),_=E.useCallback(()=>{n&&(i(n.row,n.col),k("💧 澆水完成!","info"))},[n,i,k]),A=E.useCallback(()=>{n&&(s(n.row,n.col),k("🌿 施肥完成!","info"))},[n,s,k]),P=E.useCallback(()=>{if(!n)return;const R=e[n.row][n.col];!R||!et.canHarvest(R)||(c({crop:R,row:n.row,col:n.col}),v(!0))},[n,e]),J=E.useCallback((R,Y)=>{k(`🎉 收成 ${Y.cropType.emoji} 獲得 ${R} 金幣!`,"success"),l()},[k,l]),$=E.useCallback(()=>{k("😢 收成失敗，下次加油!","error")},[k]),ke=E.useCallback(()=>{v(!1),c(null)},[]),O=n?e[n.row][n.col]:null;return a.jsxs("div",{className:"farm-container",children:[p&&a.jsx("div",{className:`notification ${p.type}`,children:p.message}),a.jsxs("div",{className:"farm-layout",children:[a.jsxs("div",{className:"farm-grid-container",children:[a.jsx("h2",{className:"farm-title",children:"🌾 我的農場"}),a.jsx("div",{className:"farm-grid",style:{gridTemplateColumns:`repeat(${t.cols}, 1fr)`,gridTemplateRows:`repeat(${t.rows}, 1fr)`},children:e.map((R,Y)=>R.map((He,N)=>a.jsx(um,{crop:He,row:Y,col:N,isSelected:(n==null?void 0:n.row)===Y&&(n==null?void 0:n.col)===N,onClick:()=>z(Y,N)},`${Y}-${N}`)))})]}),a.jsx("div",{className:"info-panel",children:O?a.jsx(fm,{crop:O,onHarvest:P,onWater:_,onFertilize:A,onClose:l}):a.jsxs("div",{className:"no-selection",children:[a.jsx("div",{className:"hint-icon",children:"👆"}),a.jsx("p",{children:"選擇一個農田格子"}),a.jsxs("p",{className:"hint",children:["點擊空格子種植",a.jsx("br",{}),"點擊作物查看資訊"]})]})})]}),h&&y&&a.jsx(pm,{row:y.row,col:y.col,onPlant:j,onClose:()=>{g(!1),C(null)}}),x&&f&&a.jsx(mm,{crop:f.crop,row:f.row,col:f.col,onClose:ke,onSuccess:J,onFail:$}),a.jsx("style",{children:`
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
      `})]})};function gm(){const e=dn(d=>d.phase),t=dn(d=>d.isPaused),n=dn(d=>d.updateTimeOfDay),r=E.useRef(),l=E.useRef(0),o=E.useRef(0),i=1e3,s=100/300,u=E.useCallback(d=>{l.current===0&&(l.current=d);const m=d-l.current;if(o.current+=m,l.current=d,o.current>=i){const h=Math.floor(o.current/i);o.current%=i,et.updateCrops(),n(s*h)}r.current=requestAnimationFrame(u)},[n]);return E.useEffect(()=>{if(e!=="playing"||t){r.current&&(cancelAnimationFrame(r.current),r.current=void 0),et.stop();return}return et.start(),l.current=0,o.current=0,r.current=requestAnimationFrame(u),()=>{et.stop(),r.current&&(cancelAnimationFrame(r.current),r.current=void 0)}},[e,t,u]),{isRunning:e==="playing"&&!t}}const wa=()=>{const{startGame:e}=dn(),{setScreen:t}=Al(),n=()=>{e(),t("game")};return a.jsx("div",{className:"screen title-screen",children:a.jsxs("div",{className:"title-content",children:[a.jsx("h1",{className:"game-title",children:"🌾 耕種收割 🌾"}),a.jsx("p",{className:"game-subtitle",children:"Farm Typing Game"}),a.jsx("p",{className:"game-description",children:"Plant crops, type to harvest, and build your farming empire!"}),a.jsxs("div",{className:"menu-buttons",children:[a.jsx("button",{className:"btn btn-primary",onClick:n,children:"🚜 Start Game"}),a.jsx("button",{className:"btn btn-secondary",onClick:()=>t("settings"),children:"⚙️ Settings"})]}),a.jsxs("div",{className:"instructions",children:[a.jsx("h3",{children:"How to Play:"}),a.jsxs("ul",{children:[a.jsx("li",{children:"🌱 Plant seeds in empty farm plots"}),a.jsx("li",{children:"⏳ Wait for crops to grow"}),a.jsx("li",{children:"⌨️ Type the word correctly to harvest"}),a.jsx("li",{children:"💰 Sell crops to earn gold"}),a.jsx("li",{children:"🌟 Build combos for bonus rewards!"})]})]})]})})},vm=()=>{const{phase:e,weather:t,dayNumber:n,timeOfDay:r,togglePause:l}=dn(),{setScreen:o}=Al(),{gold:i,stats:s}=ht(),{currentWPM:u,currentAccuracy:d,combo:m,calculateAverageWPM:h,calculateOverallAccuracy:g}=Bc(),{isRunning:x}=gm(),[v,y]=E.useState("farm"),[C,f]=E.useState(!1),[c,p]=E.useState("tomato"),[w,k]=E.useState(fn.tomato),[z,j]=E.useState(0),_=()=>{const O=In(w);p(O),f(!0)},A=O=>{console.log("Typing complete!",O),j(R=>R+1),setTimeout(()=>{const R=In(w);p(R)},1500)},P=()=>{console.log("Typing timeout!"),setTimeout(()=>{const O=In(w);p(O)},1500)},J=O=>{console.log(`Combo milestone reached: ${O}!`)},$=O=>{const R=fn[O];R&&(k(R),p(In(R)))},ke=()=>r<25?"🌅":r<50?"☀️":r<75?"🌇":"🌙";return a.jsxs("div",{className:"screen game-screen",children:[a.jsxs("header",{className:"game-header",children:[a.jsxs("div",{className:"header-left",children:[a.jsxs("span",{className:"day-counter",children:["🗓️ Day ",n]}),a.jsx("span",{className:"time-indicator",children:ke()}),a.jsxs("span",{className:"weather-indicator",children:[t==="sunny"&&"☀️",t==="rainy"&&"🌧️",t==="stormy"&&"⛈️",t==="foggy"&&"🌫️",t==="rainbow"&&"🌈"]})]}),a.jsx("div",{className:"header-center",children:a.jsxs("span",{className:"gold-display",children:["💰 ",i]})}),a.jsxs("div",{className:"header-right",children:[x&&a.jsx("span",{className:"running-indicator",children:"🟢"}),a.jsx("button",{className:"btn btn-small",onClick:l,children:e==="paused"?"▶️":"⏸️"}),a.jsx("button",{className:"btn btn-small",onClick:()=>o("title"),children:"🏠"})]})]}),a.jsxs("nav",{className:"game-tabs",children:[a.jsx("button",{className:`tab-btn ${v==="farm"?"active":""}`,onClick:()=>y("farm"),children:"🌾 Farm"}),a.jsx("button",{className:`tab-btn ${v==="typing-test"?"active":""}`,onClick:()=>y("typing-test"),children:"⌨️ Typing Test"})]}),a.jsxs("main",{className:"game-main",children:[v==="farm"&&a.jsx(hm,{}),v==="typing-test"&&a.jsx("div",{className:"typing-test-container",children:C?a.jsxs("div",{className:"typing-test-active",children:[a.jsx(Hc,{targetWord:c,timeLimit:w.harvestTimeLimit,cropSlotId:"test-slot",cropType:w,autoStart:!0,onComplete:A,onTimeout:P,onComboMilestone:J}),a.jsxs("div",{className:"typing-test-controls",children:[a.jsx("button",{className:"btn btn-secondary",onClick:()=>f(!1),children:"⏹️ Stop Test"}),a.jsxs("span",{className:"completed-count",children:["✅ Completed: ",z]})]})]}):a.jsxs("div",{className:"typing-test-start",children:[a.jsx("h2",{children:"⌨️ Typing Test Demo"}),a.jsx("p",{children:"Test the typing engine with different crop difficulties:"}),a.jsx("div",{className:"crop-selector",children:Object.values(fn).map(O=>a.jsxs("button",{className:`btn crop-btn ${w.id===O.id?"active":""}`,onClick:()=>$(O.id),children:[O.emoji," ",O.name," (Lv.",O.difficulty,")"]},O.id))}),a.jsx("button",{className:"btn btn-primary btn-large",onClick:_,children:"🚀 Start Typing Test"})]})}),a.jsxs("aside",{className:"game-sidebar",children:[a.jsxs("div",{className:"stats-panel",children:[a.jsx("h3",{children:"📊 Stats"}),a.jsxs("div",{className:"stat-row",children:[a.jsx("span",{children:"Current WPM:"}),a.jsx("span",{className:"stat-value",children:u})]}),a.jsxs("div",{className:"stat-row",children:[a.jsx("span",{children:"Accuracy:"}),a.jsxs("span",{className:"stat-value",children:[d,"%"]})]}),a.jsxs("div",{className:"stat-row",children:[a.jsx("span",{children:"Combo:"}),a.jsxs("span",{className:"stat-value combo",children:["x",m]})]}),a.jsx("hr",{}),a.jsxs("div",{className:"stat-row",children:[a.jsx("span",{children:"Avg WPM:"}),a.jsx("span",{className:"stat-value",children:h()})]}),a.jsxs("div",{className:"stat-row",children:[a.jsx("span",{children:"Overall:"}),a.jsxs("span",{className:"stat-value",children:[g(),"%"]})]})]}),a.jsxs("div",{className:"player-stats-panel",children:[a.jsx("h3",{children:"🏆 Progress"}),a.jsxs("div",{className:"stat-row",children:[a.jsx("span",{children:"Crops Harvested:"}),a.jsx("span",{className:"stat-value",children:s.totalCropsHarvested})]}),a.jsxs("div",{className:"stat-row",children:[a.jsx("span",{children:"Words Typed:"}),a.jsx("span",{className:"stat-value",children:s.totalWordsTyped})]}),a.jsxs("div",{className:"stat-row",children:[a.jsx("span",{children:"Best Combo:"}),a.jsxs("span",{className:"stat-value",children:["x",s.bestCombo]})]}),a.jsxs("div",{className:"stat-row",children:[a.jsx("span",{children:"Total Earned:"}),a.jsxs("span",{className:"stat-value gold",children:[s.totalGoldEarned," 💰"]})]})]})]})]}),e==="paused"&&a.jsx("div",{className:"pause-overlay",children:a.jsxs("div",{className:"pause-menu",children:[a.jsx("h2",{children:"⏸️ Paused"}),a.jsx("button",{className:"btn btn-primary",onClick:l,children:"▶️ Resume"}),a.jsx("button",{className:"btn btn-secondary",onClick:()=>o("title"),children:"🏠 Quit to Menu"})]})})]})},ym=()=>{const{setScreen:e}=Al(),{resetPlayer:t}=ht(),{resetFarm:n}=We(),{resetGame:r}=dn(),l=()=>{window.confirm("Are you sure you want to reset all progress? This cannot be undone!")&&(t(),n(),r(),e("title"))};return a.jsxs("div",{className:"screen settings-screen",children:[a.jsx("h2",{children:"⚙️ Settings"}),a.jsxs("div",{className:"settings-content",children:[a.jsxs("div",{className:"settings-section",children:[a.jsx("h3",{children:"Game Controls"}),a.jsx("p",{children:"Keyboard: Type displayed words to harvest crops"}),a.jsx("p",{children:"Mouse: Click farm slots to plant/view crops"})]}),a.jsxs("div",{className:"settings-section danger-zone",children:[a.jsx("h3",{children:"⚠️ Danger Zone"}),a.jsx("button",{className:"btn btn-danger",onClick:l,children:"🗑️ Reset All Progress"})]}),a.jsx("button",{className:"btn btn-secondary",onClick:()=>e("title"),children:"← Back to Menu"})]})]})},xm=()=>{const{currentScreen:e}=Al(),{initializeGrid:t}=We();E.useEffect(()=>{t()},[]);const n=()=>{switch(e){case"title":return a.jsx(wa,{});case"game":return a.jsx(vm,{});case"settings":return a.jsx(ym,{});case"shop":return a.jsx("div",{className:"screen",children:"Shop (Coming Soon)"});case"inventory":return a.jsx("div",{className:"screen",children:"Inventory (Coming Soon)"});default:return a.jsx(wa,{})}};return a.jsx("div",{className:"app-container",children:n()})};mo.createRoot(document.getElementById("root")).render(a.jsx(Ma.StrictMode,{children:a.jsx(xm,{})}));
//# sourceMappingURL=index-ZncCSkOK.js.map
