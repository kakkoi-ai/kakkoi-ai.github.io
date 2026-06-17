(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function SM(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var $v={exports:{}},jc={},qv={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fa=Symbol.for("react.element"),MM=Symbol.for("react.portal"),EM=Symbol.for("react.fragment"),TM=Symbol.for("react.strict_mode"),wM=Symbol.for("react.profiler"),AM=Symbol.for("react.provider"),CM=Symbol.for("react.context"),bM=Symbol.for("react.forward_ref"),RM=Symbol.for("react.suspense"),PM=Symbol.for("react.memo"),DM=Symbol.for("react.lazy"),Um=Symbol.iterator;function LM(t){return t===null||typeof t!="object"?null:(t=Um&&t[Um]||t["@@iterator"],typeof t=="function"?t:null)}var Kv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zv=Object.assign,Qv={};function _o(t,e,n){this.props=t,this.context=e,this.refs=Qv,this.updater=n||Kv}_o.prototype.isReactComponent={};_o.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};_o.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Jv(){}Jv.prototype=_o.prototype;function Gh(t,e,n){this.props=t,this.context=e,this.refs=Qv,this.updater=n||Kv}var Wh=Gh.prototype=new Jv;Wh.constructor=Gh;Zv(Wh,_o.prototype);Wh.isPureReactComponent=!0;var Fm=Array.isArray,ex=Object.prototype.hasOwnProperty,jh={current:null},tx={key:!0,ref:!0,__self:!0,__source:!0};function nx(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ex.call(e,i)&&!tx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Fa,type:t,key:s,ref:o,props:r,_owner:jh.current}}function NM(t,e){return{$$typeof:Fa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Xh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fa}function IM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Om=/\/+/g;function Su(t,e){return typeof t=="object"&&t!==null&&t.key!=null?IM(""+t.key):e.toString(36)}function Vl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Fa:case MM:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Su(o,0):i,Fm(r)?(n="",t!=null&&(n=t.replace(Om,"$&/")+"/"),Vl(r,e,n,"",function(c){return c})):r!=null&&(Xh(r)&&(r=NM(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Om,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Fm(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Su(s,a);o+=Vl(s,e,n,l,r)}else if(l=LM(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Su(s,a++),o+=Vl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ka(t,e,n){if(t==null)return t;var i=[],r=0;return Vl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function UM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var hn={current:null},zl={transition:null},FM={ReactCurrentDispatcher:hn,ReactCurrentBatchConfig:zl,ReactCurrentOwner:jh};function ix(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:Ka,forEach:function(t,e,n){Ka(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ka(t,function(){e++}),e},toArray:function(t){return Ka(t,function(e){return e})||[]},only:function(t){if(!Xh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=_o;je.Fragment=EM;je.Profiler=wM;je.PureComponent=Gh;je.StrictMode=TM;je.Suspense=RM;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=FM;je.act=ix;je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Zv({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=jh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)ex.call(e,l)&&!tx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Fa,type:t.type,key:r,ref:s,props:i,_owner:o}};je.createContext=function(t){return t={$$typeof:CM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:AM,_context:t},t.Consumer=t};je.createElement=nx;je.createFactory=function(t){var e=nx.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:bM,render:t}};je.isValidElement=Xh;je.lazy=function(t){return{$$typeof:DM,_payload:{_status:-1,_result:t},_init:UM}};je.memo=function(t,e){return{$$typeof:PM,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=zl.transition;zl.transition={};try{t()}finally{zl.transition=e}};je.unstable_act=ix;je.useCallback=function(t,e){return hn.current.useCallback(t,e)};je.useContext=function(t){return hn.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return hn.current.useDeferredValue(t)};je.useEffect=function(t,e){return hn.current.useEffect(t,e)};je.useId=function(){return hn.current.useId()};je.useImperativeHandle=function(t,e,n){return hn.current.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return hn.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return hn.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return hn.current.useMemo(t,e)};je.useReducer=function(t,e,n){return hn.current.useReducer(t,e,n)};je.useRef=function(t){return hn.current.useRef(t)};je.useState=function(t){return hn.current.useState(t)};je.useSyncExternalStore=function(t,e,n){return hn.current.useSyncExternalStore(t,e,n)};je.useTransition=function(){return hn.current.useTransition()};je.version="18.3.1";qv.exports=je;var re=qv.exports;const Yh=SM(re);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var OM=re,kM=Symbol.for("react.element"),BM=Symbol.for("react.fragment"),VM=Object.prototype.hasOwnProperty,zM=OM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,HM={key:!0,ref:!0,__self:!0,__source:!0};function rx(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)VM.call(e,i)&&!HM.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:kM,type:t,key:s,ref:o,props:r,_owner:zM.current}}jc.Fragment=BM;jc.jsx=rx;jc.jsxs=rx;$v.exports=jc;var G=$v.exports,Wf={},sx={exports:{}},Nn={},ox={exports:{}},ax={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(V,Y){var K=V.length;V.push(Y);e:for(;0<K;){var ee=K-1>>>1,ce=V[ee];if(0<r(ce,Y))V[ee]=Y,V[K]=ce,K=ee;else break e}}function n(V){return V.length===0?null:V[0]}function i(V){if(V.length===0)return null;var Y=V[0],K=V.pop();if(K!==Y){V[0]=K;e:for(var ee=0,ce=V.length,Ue=ce>>>1;ee<Ue;){var ze=2*(ee+1)-1,De=V[ze],q=ze+1,he=V[q];if(0>r(De,K))q<ce&&0>r(he,De)?(V[ee]=he,V[q]=K,ee=q):(V[ee]=De,V[ze]=K,ee=ze);else if(q<ce&&0>r(he,K))V[ee]=he,V[q]=K,ee=q;else break e}}return Y}function r(V,Y){var K=V.sortIndex-Y.sortIndex;return K!==0?K:V.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,p=!1,g=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(V){for(var Y=n(c);Y!==null;){if(Y.callback===null)i(c);else if(Y.startTime<=V)i(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(c)}}function M(V){if(y=!1,x(V),!g)if(n(l)!==null)g=!0,k(w);else{var Y=n(c);Y!==null&&B(M,Y.startTime-V)}}function w(V,Y){g=!1,y&&(y=!1,h(_),_=-1),p=!0;var K=f;try{for(x(Y),d=n(l);d!==null&&(!(d.expirationTime>Y)||V&&!R());){var ee=d.callback;if(typeof ee=="function"){d.callback=null,f=d.priorityLevel;var ce=ee(d.expirationTime<=Y);Y=t.unstable_now(),typeof ce=="function"?d.callback=ce:d===n(l)&&i(l),x(Y)}else i(l);d=n(l)}if(d!==null)var Ue=!0;else{var ze=n(c);ze!==null&&B(M,ze.startTime-Y),Ue=!1}return Ue}finally{d=null,f=K,p=!1}}var T=!1,b=null,_=-1,C=5,P=-1;function R(){return!(t.unstable_now()-P<C)}function L(){if(b!==null){var V=t.unstable_now();P=V;var Y=!0;try{Y=b(!0,V)}finally{Y?U():(T=!1,b=null)}}else T=!1}var U;if(typeof m=="function")U=function(){m(L)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,D=O.port2;O.port1.onmessage=L,U=function(){D.postMessage(null)}}else U=function(){v(L,0)};function k(V){b=V,T||(T=!0,U())}function B(V,Y){_=v(function(){V(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(V){V.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,k(w))},t.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<V?Math.floor(1e3/V):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(V){switch(f){case 1:case 2:case 3:var Y=3;break;default:Y=f}var K=f;f=Y;try{return V()}finally{f=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(V,Y){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var K=f;f=V;try{return Y()}finally{f=K}},t.unstable_scheduleCallback=function(V,Y,K){var ee=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ee+K:ee):K=ee,V){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=K+ce,V={id:u++,callback:Y,priorityLevel:V,startTime:K,expirationTime:ce,sortIndex:-1},K>ee?(V.sortIndex=K,e(c,V),n(l)===null&&V===n(c)&&(y?(h(_),_=-1):y=!0,B(M,K-ee))):(V.sortIndex=ce,e(l,V),g||p||(g=!0,k(w))),V},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(V){var Y=f;return function(){var K=f;f=Y;try{return V.apply(this,arguments)}finally{f=K}}}})(ax);ox.exports=ax;var GM=ox.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WM=re,Dn=GM;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lx=new Set,da={};function hs(t,e){so(t,e),so(t+"Capture",e)}function so(t,e){for(da[t]=e,t=0;t<e.length;t++)lx.add(e[t])}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jf=Object.prototype.hasOwnProperty,jM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,km={},Bm={};function XM(t){return jf.call(Bm,t)?!0:jf.call(km,t)?!1:jM.test(t)?Bm[t]=!0:(km[t]=!0,!1)}function YM(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function $M(t,e,n,i){if(e===null||typeof e>"u"||YM(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var $t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$t[t]=new pn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$t[e]=new pn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$t[t]=new pn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$t[t]=new pn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$t[t]=new pn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$t[t]=new pn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$t[t]=new pn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$t[t]=new pn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$t[t]=new pn(t,5,!1,t.toLowerCase(),null,!1,!1)});var $h=/[\-:]([a-z])/g;function qh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace($h,qh);$t[e]=new pn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace($h,qh);$t[e]=new pn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace($h,qh);$t[e]=new pn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$t[t]=new pn(t,1,!1,t.toLowerCase(),null,!1,!1)});$t.xlinkHref=new pn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$t[t]=new pn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Kh(t,e,n,i){var r=$t.hasOwnProperty(e)?$t[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&($M(e,n,r,i)&&(n=null),i||r===null?XM(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ki=WM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Za=Symbol.for("react.element"),Us=Symbol.for("react.portal"),Fs=Symbol.for("react.fragment"),Zh=Symbol.for("react.strict_mode"),Xf=Symbol.for("react.profiler"),cx=Symbol.for("react.provider"),ux=Symbol.for("react.context"),Qh=Symbol.for("react.forward_ref"),Yf=Symbol.for("react.suspense"),$f=Symbol.for("react.suspense_list"),Jh=Symbol.for("react.memo"),lr=Symbol.for("react.lazy"),fx=Symbol.for("react.offscreen"),Vm=Symbol.iterator;function Co(t){return t===null||typeof t!="object"?null:(t=Vm&&t[Vm]||t["@@iterator"],typeof t=="function"?t:null)}var Mt=Object.assign,Mu;function Xo(t){if(Mu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Mu=e&&e[1]||""}return`
`+Mu+t}var Eu=!1;function Tu(t,e){if(!t||Eu)return"";Eu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Eu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Xo(t):""}function qM(t){switch(t.tag){case 5:return Xo(t.type);case 16:return Xo("Lazy");case 13:return Xo("Suspense");case 19:return Xo("SuspenseList");case 0:case 2:case 15:return t=Tu(t.type,!1),t;case 11:return t=Tu(t.type.render,!1),t;case 1:return t=Tu(t.type,!0),t;default:return""}}function qf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Fs:return"Fragment";case Us:return"Portal";case Xf:return"Profiler";case Zh:return"StrictMode";case Yf:return"Suspense";case $f:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ux:return(t.displayName||"Context")+".Consumer";case cx:return(t._context.displayName||"Context")+".Provider";case Qh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Jh:return e=t.displayName||null,e!==null?e:qf(t.type)||"Memo";case lr:e=t._payload,t=t._init;try{return qf(t(e))}catch{}}return null}function KM(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qf(e);case 8:return e===Zh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Cr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ZM(t){var e=dx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Qa(t){t._valueTracker||(t._valueTracker=ZM(t))}function hx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=dx(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function oc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Kf(t,e){var n=e.checked;return Mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function zm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Cr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function px(t,e){e=e.checked,e!=null&&Kh(t,"checked",e,!1)}function Zf(t,e){px(t,e);var n=Cr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Qf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Qf(t,e.type,Cr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Qf(t,e,n){(e!=="number"||oc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Yo=Array.isArray;function Zs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Cr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Jf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return Mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Gm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(Yo(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Cr(n)}}function mx(t,e){var n=Cr(e.value),i=Cr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Wm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function gx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ed(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?gx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ja,vx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ja=Ja||document.createElement("div"),Ja.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ja.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ha(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Jo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},QM=["Webkit","ms","Moz","O"];Object.keys(Jo).forEach(function(t){QM.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Jo[e]=Jo[t]})});function xx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Jo.hasOwnProperty(t)&&Jo[t]?(""+e).trim():e+"px"}function _x(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=xx(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var JM=Mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function td(t,e){if(e){if(JM[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function nd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var id=null;function ep(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rd=null,Qs=null,Js=null;function jm(t){if(t=Ba(t)){if(typeof rd!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=Kc(e),rd(t.stateNode,t.type,e))}}function yx(t){Qs?Js?Js.push(t):Js=[t]:Qs=t}function Sx(){if(Qs){var t=Qs,e=Js;if(Js=Qs=null,jm(t),e)for(t=0;t<e.length;t++)jm(e[t])}}function Mx(t,e){return t(e)}function Ex(){}var wu=!1;function Tx(t,e,n){if(wu)return t(e,n);wu=!0;try{return Mx(t,e,n)}finally{wu=!1,(Qs!==null||Js!==null)&&(Ex(),Sx())}}function pa(t,e){var n=t.stateNode;if(n===null)return null;var i=Kc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var sd=!1;if(Gi)try{var bo={};Object.defineProperty(bo,"passive",{get:function(){sd=!0}}),window.addEventListener("test",bo,bo),window.removeEventListener("test",bo,bo)}catch{sd=!1}function eE(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var ea=!1,ac=null,lc=!1,od=null,tE={onError:function(t){ea=!0,ac=t}};function nE(t,e,n,i,r,s,o,a,l){ea=!1,ac=null,eE.apply(tE,arguments)}function iE(t,e,n,i,r,s,o,a,l){if(nE.apply(this,arguments),ea){if(ea){var c=ac;ea=!1,ac=null}else throw Error(ie(198));lc||(lc=!0,od=c)}}function ps(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function wx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Xm(t){if(ps(t)!==t)throw Error(ie(188))}function rE(t){var e=t.alternate;if(!e){if(e=ps(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Xm(r),t;if(s===i)return Xm(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function Ax(t){return t=rE(t),t!==null?Cx(t):null}function Cx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Cx(t);if(e!==null)return e;t=t.sibling}return null}var bx=Dn.unstable_scheduleCallback,Ym=Dn.unstable_cancelCallback,sE=Dn.unstable_shouldYield,oE=Dn.unstable_requestPaint,Dt=Dn.unstable_now,aE=Dn.unstable_getCurrentPriorityLevel,tp=Dn.unstable_ImmediatePriority,Rx=Dn.unstable_UserBlockingPriority,cc=Dn.unstable_NormalPriority,lE=Dn.unstable_LowPriority,Px=Dn.unstable_IdlePriority,Xc=null,vi=null;function cE(t){if(vi&&typeof vi.onCommitFiberRoot=="function")try{vi.onCommitFiberRoot(Xc,t,void 0,(t.current.flags&128)===128)}catch{}}var ii=Math.clz32?Math.clz32:dE,uE=Math.log,fE=Math.LN2;function dE(t){return t>>>=0,t===0?32:31-(uE(t)/fE|0)|0}var el=64,tl=4194304;function $o(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function uc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=$o(a):(s&=o,s!==0&&(i=$o(s)))}else o=n&~r,o!==0?i=$o(o):s!==0&&(i=$o(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ii(e),r=1<<n,i|=t[n],e&=~r;return i}function hE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pE(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ii(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=hE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ad(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Dx(){var t=el;return el<<=1,!(el&4194240)&&(el=64),t}function Au(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Oa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ii(e),t[e]=n}function mE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ii(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function np(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ii(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function Lx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Nx,ip,Ix,Ux,Fx,ld=!1,nl=[],vr=null,xr=null,_r=null,ma=new Map,ga=new Map,fr=[],gE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $m(t,e){switch(t){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":ma.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ga.delete(e.pointerId)}}function Ro(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ba(e),e!==null&&ip(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function vE(t,e,n,i,r){switch(e){case"focusin":return vr=Ro(vr,t,e,n,i,r),!0;case"dragenter":return xr=Ro(xr,t,e,n,i,r),!0;case"mouseover":return _r=Ro(_r,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ma.set(s,Ro(ma.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ga.set(s,Ro(ga.get(s)||null,t,e,n,i,r)),!0}return!1}function Ox(t){var e=Zr(t.target);if(e!==null){var n=ps(e);if(n!==null){if(e=n.tag,e===13){if(e=wx(n),e!==null){t.blockedOn=e,Fx(t.priority,function(){Ix(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=cd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);id=i,n.target.dispatchEvent(i),id=null}else return e=Ba(n),e!==null&&ip(e),t.blockedOn=n,!1;e.shift()}return!0}function qm(t,e,n){Hl(t)&&n.delete(e)}function xE(){ld=!1,vr!==null&&Hl(vr)&&(vr=null),xr!==null&&Hl(xr)&&(xr=null),_r!==null&&Hl(_r)&&(_r=null),ma.forEach(qm),ga.forEach(qm)}function Po(t,e){t.blockedOn===e&&(t.blockedOn=null,ld||(ld=!0,Dn.unstable_scheduleCallback(Dn.unstable_NormalPriority,xE)))}function va(t){function e(r){return Po(r,t)}if(0<nl.length){Po(nl[0],t);for(var n=1;n<nl.length;n++){var i=nl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(vr!==null&&Po(vr,t),xr!==null&&Po(xr,t),_r!==null&&Po(_r,t),ma.forEach(e),ga.forEach(e),n=0;n<fr.length;n++)i=fr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<fr.length&&(n=fr[0],n.blockedOn===null);)Ox(n),n.blockedOn===null&&fr.shift()}var eo=Ki.ReactCurrentBatchConfig,fc=!0;function _E(t,e,n,i){var r=it,s=eo.transition;eo.transition=null;try{it=1,rp(t,e,n,i)}finally{it=r,eo.transition=s}}function yE(t,e,n,i){var r=it,s=eo.transition;eo.transition=null;try{it=4,rp(t,e,n,i)}finally{it=r,eo.transition=s}}function rp(t,e,n,i){if(fc){var r=cd(t,e,n,i);if(r===null)Fu(t,e,i,dc,n),$m(t,i);else if(vE(r,t,e,n,i))i.stopPropagation();else if($m(t,i),e&4&&-1<gE.indexOf(t)){for(;r!==null;){var s=Ba(r);if(s!==null&&Nx(s),s=cd(t,e,n,i),s===null&&Fu(t,e,i,dc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Fu(t,e,i,null,n)}}var dc=null;function cd(t,e,n,i){if(dc=null,t=ep(i),t=Zr(t),t!==null)if(e=ps(t),e===null)t=null;else if(n=e.tag,n===13){if(t=wx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return dc=t,null}function kx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(aE()){case tp:return 1;case Rx:return 4;case cc:case lE:return 16;case Px:return 536870912;default:return 16}default:return 16}}var pr=null,sp=null,Gl=null;function Bx(){if(Gl)return Gl;var t,e=sp,n=e.length,i,r="value"in pr?pr.value:pr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Gl=r.slice(t,1<i?1-i:void 0)}function Wl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function il(){return!0}function Km(){return!1}function In(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?il:Km,this.isPropagationStopped=Km,this}return Mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=il)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=il)},persist:function(){},isPersistent:il}),e}var yo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},op=In(yo),ka=Mt({},yo,{view:0,detail:0}),SE=In(ka),Cu,bu,Do,Yc=Mt({},ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ap,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Do&&(Do&&t.type==="mousemove"?(Cu=t.screenX-Do.screenX,bu=t.screenY-Do.screenY):bu=Cu=0,Do=t),Cu)},movementY:function(t){return"movementY"in t?t.movementY:bu}}),Zm=In(Yc),ME=Mt({},Yc,{dataTransfer:0}),EE=In(ME),TE=Mt({},ka,{relatedTarget:0}),Ru=In(TE),wE=Mt({},yo,{animationName:0,elapsedTime:0,pseudoElement:0}),AE=In(wE),CE=Mt({},yo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bE=In(CE),RE=Mt({},yo,{data:0}),Qm=In(RE),PE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},DE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},LE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function NE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=LE[t])?!!e[t]:!1}function ap(){return NE}var IE=Mt({},ka,{key:function(t){if(t.key){var e=PE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Wl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?DE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ap,charCode:function(t){return t.type==="keypress"?Wl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),UE=In(IE),FE=Mt({},Yc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jm=In(FE),OE=Mt({},ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ap}),kE=In(OE),BE=Mt({},yo,{propertyName:0,elapsedTime:0,pseudoElement:0}),VE=In(BE),zE=Mt({},Yc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),HE=In(zE),GE=[9,13,27,32],lp=Gi&&"CompositionEvent"in window,ta=null;Gi&&"documentMode"in document&&(ta=document.documentMode);var WE=Gi&&"TextEvent"in window&&!ta,Vx=Gi&&(!lp||ta&&8<ta&&11>=ta),eg=String.fromCharCode(32),tg=!1;function zx(t,e){switch(t){case"keyup":return GE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Os=!1;function jE(t,e){switch(t){case"compositionend":return Hx(e);case"keypress":return e.which!==32?null:(tg=!0,eg);case"textInput":return t=e.data,t===eg&&tg?null:t;default:return null}}function XE(t,e){if(Os)return t==="compositionend"||!lp&&zx(t,e)?(t=Bx(),Gl=sp=pr=null,Os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Vx&&e.locale!=="ko"?null:e.data;default:return null}}var YE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ng(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!YE[t.type]:e==="textarea"}function Gx(t,e,n,i){yx(i),e=hc(e,"onChange"),0<e.length&&(n=new op("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var na=null,xa=null;function $E(t){e_(t,0)}function $c(t){var e=Vs(t);if(hx(e))return t}function qE(t,e){if(t==="change")return e}var Wx=!1;if(Gi){var Pu;if(Gi){var Du="oninput"in document;if(!Du){var ig=document.createElement("div");ig.setAttribute("oninput","return;"),Du=typeof ig.oninput=="function"}Pu=Du}else Pu=!1;Wx=Pu&&(!document.documentMode||9<document.documentMode)}function rg(){na&&(na.detachEvent("onpropertychange",jx),xa=na=null)}function jx(t){if(t.propertyName==="value"&&$c(xa)){var e=[];Gx(e,xa,t,ep(t)),Tx($E,e)}}function KE(t,e,n){t==="focusin"?(rg(),na=e,xa=n,na.attachEvent("onpropertychange",jx)):t==="focusout"&&rg()}function ZE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $c(xa)}function QE(t,e){if(t==="click")return $c(e)}function JE(t,e){if(t==="input"||t==="change")return $c(e)}function e1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var si=typeof Object.is=="function"?Object.is:e1;function _a(t,e){if(si(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!jf.call(e,r)||!si(t[r],e[r]))return!1}return!0}function sg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function og(t,e){var n=sg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sg(n)}}function Xx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Xx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Yx(){for(var t=window,e=oc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=oc(t.document)}return e}function cp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function t1(t){var e=Yx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Xx(n.ownerDocument.documentElement,n)){if(i!==null&&cp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=og(n,s);var o=og(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var n1=Gi&&"documentMode"in document&&11>=document.documentMode,ks=null,ud=null,ia=null,fd=!1;function ag(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fd||ks==null||ks!==oc(i)||(i=ks,"selectionStart"in i&&cp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ia&&_a(ia,i)||(ia=i,i=hc(ud,"onSelect"),0<i.length&&(e=new op("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ks)))}function rl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Bs={animationend:rl("Animation","AnimationEnd"),animationiteration:rl("Animation","AnimationIteration"),animationstart:rl("Animation","AnimationStart"),transitionend:rl("Transition","TransitionEnd")},Lu={},$x={};Gi&&($x=document.createElement("div").style,"AnimationEvent"in window||(delete Bs.animationend.animation,delete Bs.animationiteration.animation,delete Bs.animationstart.animation),"TransitionEvent"in window||delete Bs.transitionend.transition);function qc(t){if(Lu[t])return Lu[t];if(!Bs[t])return t;var e=Bs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in $x)return Lu[t]=e[n];return t}var qx=qc("animationend"),Kx=qc("animationiteration"),Zx=qc("animationstart"),Qx=qc("transitionend"),Jx=new Map,lg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(t,e){Jx.set(t,e),hs(e,[t])}for(var Nu=0;Nu<lg.length;Nu++){var Iu=lg[Nu],i1=Iu.toLowerCase(),r1=Iu[0].toUpperCase()+Iu.slice(1);Nr(i1,"on"+r1)}Nr(qx,"onAnimationEnd");Nr(Kx,"onAnimationIteration");Nr(Zx,"onAnimationStart");Nr("dblclick","onDoubleClick");Nr("focusin","onFocus");Nr("focusout","onBlur");Nr(Qx,"onTransitionEnd");so("onMouseEnter",["mouseout","mouseover"]);so("onMouseLeave",["mouseout","mouseover"]);so("onPointerEnter",["pointerout","pointerover"]);so("onPointerLeave",["pointerout","pointerover"]);hs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hs("onBeforeInput",["compositionend","keypress","textInput","paste"]);hs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),s1=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function cg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,iE(i,e,void 0,t),t.currentTarget=null}function e_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;cg(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;cg(r,a,c),s=l}}}if(lc)throw t=od,lc=!1,od=null,t}function pt(t,e){var n=e[gd];n===void 0&&(n=e[gd]=new Set);var i=t+"__bubble";n.has(i)||(t_(e,t,2,!1),n.add(i))}function Uu(t,e,n){var i=0;e&&(i|=4),t_(n,t,i,e)}var sl="_reactListening"+Math.random().toString(36).slice(2);function ya(t){if(!t[sl]){t[sl]=!0,lx.forEach(function(n){n!=="selectionchange"&&(s1.has(n)||Uu(n,!1,t),Uu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[sl]||(e[sl]=!0,Uu("selectionchange",!1,e))}}function t_(t,e,n,i){switch(kx(e)){case 1:var r=_E;break;case 4:r=yE;break;default:r=rp}n=r.bind(null,e,n,t),r=void 0,!sd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Fu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Zr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Tx(function(){var c=s,u=ep(n),d=[];e:{var f=Jx.get(t);if(f!==void 0){var p=op,g=t;switch(t){case"keypress":if(Wl(n)===0)break e;case"keydown":case"keyup":p=UE;break;case"focusin":g="focus",p=Ru;break;case"focusout":g="blur",p=Ru;break;case"beforeblur":case"afterblur":p=Ru;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Zm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=EE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=kE;break;case qx:case Kx:case Zx:p=AE;break;case Qx:p=VE;break;case"scroll":p=SE;break;case"wheel":p=HE;break;case"copy":case"cut":case"paste":p=bE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Jm}var y=(e&4)!==0,v=!y&&t==="scroll",h=y?f!==null?f+"Capture":null:f;y=[];for(var m=c,x;m!==null;){x=m;var M=x.stateNode;if(x.tag===5&&M!==null&&(x=M,h!==null&&(M=pa(m,h),M!=null&&y.push(Sa(m,M,x)))),v)break;m=m.return}0<y.length&&(f=new p(f,g,null,n,u),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==id&&(g=n.relatedTarget||n.fromElement)&&(Zr(g)||g[Wi]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?Zr(g):null,g!==null&&(v=ps(g),g!==v||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(y=Zm,M="onMouseLeave",h="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=Jm,M="onPointerLeave",h="onPointerEnter",m="pointer"),v=p==null?f:Vs(p),x=g==null?f:Vs(g),f=new y(M,m+"leave",p,n,u),f.target=v,f.relatedTarget=x,M=null,Zr(u)===c&&(y=new y(h,m+"enter",g,n,u),y.target=x,y.relatedTarget=v,M=y),v=M,p&&g)t:{for(y=p,h=g,m=0,x=y;x;x=ys(x))m++;for(x=0,M=h;M;M=ys(M))x++;for(;0<m-x;)y=ys(y),m--;for(;0<x-m;)h=ys(h),x--;for(;m--;){if(y===h||h!==null&&y===h.alternate)break t;y=ys(y),h=ys(h)}y=null}else y=null;p!==null&&ug(d,f,p,y,!1),g!==null&&v!==null&&ug(d,v,g,y,!0)}}e:{if(f=c?Vs(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var w=qE;else if(ng(f))if(Wx)w=JE;else{w=ZE;var T=KE}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(w=QE);if(w&&(w=w(t,c))){Gx(d,w,n,u);break e}T&&T(t,f,c),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&Qf(f,"number",f.value)}switch(T=c?Vs(c):window,t){case"focusin":(ng(T)||T.contentEditable==="true")&&(ks=T,ud=c,ia=null);break;case"focusout":ia=ud=ks=null;break;case"mousedown":fd=!0;break;case"contextmenu":case"mouseup":case"dragend":fd=!1,ag(d,n,u);break;case"selectionchange":if(n1)break;case"keydown":case"keyup":ag(d,n,u)}var b;if(lp)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Os?zx(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Vx&&n.locale!=="ko"&&(Os||_!=="onCompositionStart"?_==="onCompositionEnd"&&Os&&(b=Bx()):(pr=u,sp="value"in pr?pr.value:pr.textContent,Os=!0)),T=hc(c,_),0<T.length&&(_=new Qm(_,t,null,n,u),d.push({event:_,listeners:T}),b?_.data=b:(b=Hx(n),b!==null&&(_.data=b)))),(b=WE?jE(t,n):XE(t,n))&&(c=hc(c,"onBeforeInput"),0<c.length&&(u=new Qm("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=b))}e_(d,e)})}function Sa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function hc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=pa(t,n),s!=null&&i.unshift(Sa(t,s,r)),s=pa(t,e),s!=null&&i.push(Sa(t,s,r))),t=t.return}return i}function ys(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ug(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=pa(n,s),l!=null&&o.unshift(Sa(n,l,a))):r||(l=pa(n,s),l!=null&&o.push(Sa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var o1=/\r\n?/g,a1=/\u0000|\uFFFD/g;function fg(t){return(typeof t=="string"?t:""+t).replace(o1,`
`).replace(a1,"")}function ol(t,e,n){if(e=fg(e),fg(t)!==e&&n)throw Error(ie(425))}function pc(){}var dd=null,hd=null;function pd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var md=typeof setTimeout=="function"?setTimeout:void 0,l1=typeof clearTimeout=="function"?clearTimeout:void 0,dg=typeof Promise=="function"?Promise:void 0,c1=typeof queueMicrotask=="function"?queueMicrotask:typeof dg<"u"?function(t){return dg.resolve(null).then(t).catch(u1)}:md;function u1(t){setTimeout(function(){throw t})}function Ou(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),va(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);va(e)}function yr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function hg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var So=Math.random().toString(36).slice(2),pi="__reactFiber$"+So,Ma="__reactProps$"+So,Wi="__reactContainer$"+So,gd="__reactEvents$"+So,f1="__reactListeners$"+So,d1="__reactHandles$"+So;function Zr(t){var e=t[pi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wi]||n[pi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=hg(t);t!==null;){if(n=t[pi])return n;t=hg(t)}return e}t=n,n=t.parentNode}return null}function Ba(t){return t=t[pi]||t[Wi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Vs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function Kc(t){return t[Ma]||null}var vd=[],zs=-1;function Ir(t){return{current:t}}function mt(t){0>zs||(t.current=vd[zs],vd[zs]=null,zs--)}function ft(t,e){zs++,vd[zs]=t.current,t.current=e}var br={},sn=Ir(br),xn=Ir(!1),os=br;function oo(t,e){var n=t.type.contextTypes;if(!n)return br;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function _n(t){return t=t.childContextTypes,t!=null}function mc(){mt(xn),mt(sn)}function pg(t,e,n){if(sn.current!==br)throw Error(ie(168));ft(sn,e),ft(xn,n)}function n_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,KM(t)||"Unknown",r));return Mt({},n,i)}function gc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||br,os=sn.current,ft(sn,t),ft(xn,xn.current),!0}function mg(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=n_(t,e,os),i.__reactInternalMemoizedMergedChildContext=t,mt(xn),mt(sn),ft(sn,t)):mt(xn),ft(xn,n)}var Li=null,Zc=!1,ku=!1;function i_(t){Li===null?Li=[t]:Li.push(t)}function h1(t){Zc=!0,i_(t)}function Ur(){if(!ku&&Li!==null){ku=!0;var t=0,e=it;try{var n=Li;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Li=null,Zc=!1}catch(r){throw Li!==null&&(Li=Li.slice(t+1)),bx(tp,Ur),r}finally{it=e,ku=!1}}return null}var Hs=[],Gs=0,vc=null,xc=0,zn=[],Hn=0,as=null,Ii=1,Ui="";function Gr(t,e){Hs[Gs++]=xc,Hs[Gs++]=vc,vc=t,xc=e}function r_(t,e,n){zn[Hn++]=Ii,zn[Hn++]=Ui,zn[Hn++]=as,as=t;var i=Ii;t=Ui;var r=32-ii(i)-1;i&=~(1<<r),n+=1;var s=32-ii(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ii=1<<32-ii(e)+r|n<<r|i,Ui=s+t}else Ii=1<<s|n<<r|i,Ui=t}function up(t){t.return!==null&&(Gr(t,1),r_(t,1,0))}function fp(t){for(;t===vc;)vc=Hs[--Gs],Hs[Gs]=null,xc=Hs[--Gs],Hs[Gs]=null;for(;t===as;)as=zn[--Hn],zn[Hn]=null,Ui=zn[--Hn],zn[Hn]=null,Ii=zn[--Hn],zn[Hn]=null}var Pn=null,Rn=null,vt=!1,ei=null;function s_(t,e){var n=Wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function gg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pn=t,Rn=yr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pn=t,Rn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=as!==null?{id:Ii,overflow:Ui}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pn=t,Rn=null,!0):!1;default:return!1}}function xd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _d(t){if(vt){var e=Rn;if(e){var n=e;if(!gg(t,e)){if(xd(t))throw Error(ie(418));e=yr(n.nextSibling);var i=Pn;e&&gg(t,e)?s_(i,n):(t.flags=t.flags&-4097|2,vt=!1,Pn=t)}}else{if(xd(t))throw Error(ie(418));t.flags=t.flags&-4097|2,vt=!1,Pn=t}}}function vg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pn=t}function al(t){if(t!==Pn)return!1;if(!vt)return vg(t),vt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!pd(t.type,t.memoizedProps)),e&&(e=Rn)){if(xd(t))throw o_(),Error(ie(418));for(;e;)s_(t,e),e=yr(e.nextSibling)}if(vg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Rn=yr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Rn=null}}else Rn=Pn?yr(t.stateNode.nextSibling):null;return!0}function o_(){for(var t=Rn;t;)t=yr(t.nextSibling)}function ao(){Rn=Pn=null,vt=!1}function dp(t){ei===null?ei=[t]:ei.push(t)}var p1=Ki.ReactCurrentBatchConfig;function Lo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function ll(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function xg(t){var e=t._init;return e(t._payload)}function a_(t){function e(h,m){if(t){var x=h.deletions;x===null?(h.deletions=[m],h.flags|=16):x.push(m)}}function n(h,m){if(!t)return null;for(;m!==null;)e(h,m),m=m.sibling;return null}function i(h,m){for(h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function r(h,m){return h=Tr(h,m),h.index=0,h.sibling=null,h}function s(h,m,x){return h.index=x,t?(x=h.alternate,x!==null?(x=x.index,x<m?(h.flags|=2,m):x):(h.flags|=2,m)):(h.flags|=1048576,m)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,m,x,M){return m===null||m.tag!==6?(m=ju(x,h.mode,M),m.return=h,m):(m=r(m,x),m.return=h,m)}function l(h,m,x,M){var w=x.type;return w===Fs?u(h,m,x.props.children,M,x.key):m!==null&&(m.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===lr&&xg(w)===m.type)?(M=r(m,x.props),M.ref=Lo(h,m,x),M.return=h,M):(M=Zl(x.type,x.key,x.props,null,h.mode,M),M.ref=Lo(h,m,x),M.return=h,M)}function c(h,m,x,M){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=Xu(x,h.mode,M),m.return=h,m):(m=r(m,x.children||[]),m.return=h,m)}function u(h,m,x,M,w){return m===null||m.tag!==7?(m=ss(x,h.mode,M,w),m.return=h,m):(m=r(m,x),m.return=h,m)}function d(h,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=ju(""+m,h.mode,x),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Za:return x=Zl(m.type,m.key,m.props,null,h.mode,x),x.ref=Lo(h,null,m),x.return=h,x;case Us:return m=Xu(m,h.mode,x),m.return=h,m;case lr:var M=m._init;return d(h,M(m._payload),x)}if(Yo(m)||Co(m))return m=ss(m,h.mode,x,null),m.return=h,m;ll(h,m)}return null}function f(h,m,x,M){var w=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return w!==null?null:a(h,m,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Za:return x.key===w?l(h,m,x,M):null;case Us:return x.key===w?c(h,m,x,M):null;case lr:return w=x._init,f(h,m,w(x._payload),M)}if(Yo(x)||Co(x))return w!==null?null:u(h,m,x,M,null);ll(h,x)}return null}function p(h,m,x,M,w){if(typeof M=="string"&&M!==""||typeof M=="number")return h=h.get(x)||null,a(m,h,""+M,w);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Za:return h=h.get(M.key===null?x:M.key)||null,l(m,h,M,w);case Us:return h=h.get(M.key===null?x:M.key)||null,c(m,h,M,w);case lr:var T=M._init;return p(h,m,x,T(M._payload),w)}if(Yo(M)||Co(M))return h=h.get(x)||null,u(m,h,M,w,null);ll(m,M)}return null}function g(h,m,x,M){for(var w=null,T=null,b=m,_=m=0,C=null;b!==null&&_<x.length;_++){b.index>_?(C=b,b=null):C=b.sibling;var P=f(h,b,x[_],M);if(P===null){b===null&&(b=C);break}t&&b&&P.alternate===null&&e(h,b),m=s(P,m,_),T===null?w=P:T.sibling=P,T=P,b=C}if(_===x.length)return n(h,b),vt&&Gr(h,_),w;if(b===null){for(;_<x.length;_++)b=d(h,x[_],M),b!==null&&(m=s(b,m,_),T===null?w=b:T.sibling=b,T=b);return vt&&Gr(h,_),w}for(b=i(h,b);_<x.length;_++)C=p(b,h,_,x[_],M),C!==null&&(t&&C.alternate!==null&&b.delete(C.key===null?_:C.key),m=s(C,m,_),T===null?w=C:T.sibling=C,T=C);return t&&b.forEach(function(R){return e(h,R)}),vt&&Gr(h,_),w}function y(h,m,x,M){var w=Co(x);if(typeof w!="function")throw Error(ie(150));if(x=w.call(x),x==null)throw Error(ie(151));for(var T=w=null,b=m,_=m=0,C=null,P=x.next();b!==null&&!P.done;_++,P=x.next()){b.index>_?(C=b,b=null):C=b.sibling;var R=f(h,b,P.value,M);if(R===null){b===null&&(b=C);break}t&&b&&R.alternate===null&&e(h,b),m=s(R,m,_),T===null?w=R:T.sibling=R,T=R,b=C}if(P.done)return n(h,b),vt&&Gr(h,_),w;if(b===null){for(;!P.done;_++,P=x.next())P=d(h,P.value,M),P!==null&&(m=s(P,m,_),T===null?w=P:T.sibling=P,T=P);return vt&&Gr(h,_),w}for(b=i(h,b);!P.done;_++,P=x.next())P=p(b,h,_,P.value,M),P!==null&&(t&&P.alternate!==null&&b.delete(P.key===null?_:P.key),m=s(P,m,_),T===null?w=P:T.sibling=P,T=P);return t&&b.forEach(function(L){return e(h,L)}),vt&&Gr(h,_),w}function v(h,m,x,M){if(typeof x=="object"&&x!==null&&x.type===Fs&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Za:e:{for(var w=x.key,T=m;T!==null;){if(T.key===w){if(w=x.type,w===Fs){if(T.tag===7){n(h,T.sibling),m=r(T,x.props.children),m.return=h,h=m;break e}}else if(T.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===lr&&xg(w)===T.type){n(h,T.sibling),m=r(T,x.props),m.ref=Lo(h,T,x),m.return=h,h=m;break e}n(h,T);break}else e(h,T);T=T.sibling}x.type===Fs?(m=ss(x.props.children,h.mode,M,x.key),m.return=h,h=m):(M=Zl(x.type,x.key,x.props,null,h.mode,M),M.ref=Lo(h,m,x),M.return=h,h=M)}return o(h);case Us:e:{for(T=x.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){n(h,m.sibling),m=r(m,x.children||[]),m.return=h,h=m;break e}else{n(h,m);break}else e(h,m);m=m.sibling}m=Xu(x,h.mode,M),m.return=h,h=m}return o(h);case lr:return T=x._init,v(h,m,T(x._payload),M)}if(Yo(x))return g(h,m,x,M);if(Co(x))return y(h,m,x,M);ll(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(n(h,m.sibling),m=r(m,x),m.return=h,h=m):(n(h,m),m=ju(x,h.mode,M),m.return=h,h=m),o(h)):n(h,m)}return v}var lo=a_(!0),l_=a_(!1),_c=Ir(null),yc=null,Ws=null,hp=null;function pp(){hp=Ws=yc=null}function mp(t){var e=_c.current;mt(_c),t._currentValue=e}function yd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function to(t,e){yc=t,hp=Ws=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vn=!0),t.firstContext=null)}function Xn(t){var e=t._currentValue;if(hp!==t)if(t={context:t,memoizedValue:e,next:null},Ws===null){if(yc===null)throw Error(ie(308));Ws=t,yc.dependencies={lanes:0,firstContext:t}}else Ws=Ws.next=t;return e}var Qr=null;function gp(t){Qr===null?Qr=[t]:Qr.push(t)}function c_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,gp(e)):(n.next=r.next,r.next=n),e.interleaved=n,ji(t,i)}function ji(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var cr=!1;function vp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function u_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ki(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Sr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ji(t,n)}return r=i.interleaved,r===null?(e.next=e,gp(i)):(e.next=r.next,r.next=e),i.interleaved=e,ji(t,n)}function jl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,np(t,n)}}function _g(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Sc(t,e,n,i){var r=t.updateQueue;cr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,y=a;switch(f=e,p=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){d=g.call(p,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,f=typeof g=="function"?g.call(p,d,f):g,f==null)break e;d=Mt({},d,f);break e;case 2:cr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(1);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);cs|=o,t.lanes=o,t.memoizedState=d}}function yg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var Va={},xi=Ir(Va),Ea=Ir(Va),Ta=Ir(Va);function Jr(t){if(t===Va)throw Error(ie(174));return t}function xp(t,e){switch(ft(Ta,e),ft(Ea,t),ft(xi,Va),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ed(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ed(e,t)}mt(xi),ft(xi,e)}function co(){mt(xi),mt(Ea),mt(Ta)}function f_(t){Jr(Ta.current);var e=Jr(xi.current),n=ed(e,t.type);e!==n&&(ft(Ea,t),ft(xi,n))}function _p(t){Ea.current===t&&(mt(xi),mt(Ea))}var _t=Ir(0);function Mc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bu=[];function yp(){for(var t=0;t<Bu.length;t++)Bu[t]._workInProgressVersionPrimary=null;Bu.length=0}var Xl=Ki.ReactCurrentDispatcher,Vu=Ki.ReactCurrentBatchConfig,ls=0,St=null,kt=null,Gt=null,Ec=!1,ra=!1,wa=0,m1=0;function Kt(){throw Error(ie(321))}function Sp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!si(t[n],e[n]))return!1;return!0}function Mp(t,e,n,i,r,s){if(ls=s,St=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Xl.current=t===null||t.memoizedState===null?_1:y1,t=n(i,r),ra){s=0;do{if(ra=!1,wa=0,25<=s)throw Error(ie(301));s+=1,Gt=kt=null,e.updateQueue=null,Xl.current=S1,t=n(i,r)}while(ra)}if(Xl.current=Tc,e=kt!==null&&kt.next!==null,ls=0,Gt=kt=St=null,Ec=!1,e)throw Error(ie(300));return t}function Ep(){var t=wa!==0;return wa=0,t}function di(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?St.memoizedState=Gt=t:Gt=Gt.next=t,Gt}function Yn(){if(kt===null){var t=St.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var e=Gt===null?St.memoizedState:Gt.next;if(e!==null)Gt=e,kt=t;else{if(t===null)throw Error(ie(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},Gt===null?St.memoizedState=Gt=t:Gt=Gt.next=t}return Gt}function Aa(t,e){return typeof e=="function"?e(t):e}function zu(t){var e=Yn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=kt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((ls&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,St.lanes|=u,cs|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,si(i,e.memoizedState)||(vn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,St.lanes|=s,cs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Hu(t){var e=Yn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);si(s,e.memoizedState)||(vn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function d_(){}function h_(t,e){var n=St,i=Yn(),r=e(),s=!si(i.memoizedState,r);if(s&&(i.memoizedState=r,vn=!0),i=i.queue,Tp(g_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Gt!==null&&Gt.memoizedState.tag&1){if(n.flags|=2048,Ca(9,m_.bind(null,n,i,r,e),void 0,null),Wt===null)throw Error(ie(349));ls&30||p_(n,e,r)}return r}function p_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function m_(t,e,n,i){e.value=n,e.getSnapshot=i,v_(e)&&x_(t)}function g_(t,e,n){return n(function(){v_(e)&&x_(t)})}function v_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!si(t,n)}catch{return!0}}function x_(t){var e=ji(t,1);e!==null&&ri(e,t,1,-1)}function Sg(t){var e=di();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:t},e.queue=t,t=t.dispatch=x1.bind(null,St,t),[e.memoizedState,t]}function Ca(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function __(){return Yn().memoizedState}function Yl(t,e,n,i){var r=di();St.flags|=t,r.memoizedState=Ca(1|e,n,void 0,i===void 0?null:i)}function Qc(t,e,n,i){var r=Yn();i=i===void 0?null:i;var s=void 0;if(kt!==null){var o=kt.memoizedState;if(s=o.destroy,i!==null&&Sp(i,o.deps)){r.memoizedState=Ca(e,n,s,i);return}}St.flags|=t,r.memoizedState=Ca(1|e,n,s,i)}function Mg(t,e){return Yl(8390656,8,t,e)}function Tp(t,e){return Qc(2048,8,t,e)}function y_(t,e){return Qc(4,2,t,e)}function S_(t,e){return Qc(4,4,t,e)}function M_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function E_(t,e,n){return n=n!=null?n.concat([t]):null,Qc(4,4,M_.bind(null,e,t),n)}function wp(){}function T_(t,e){var n=Yn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Sp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function w_(t,e){var n=Yn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Sp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function A_(t,e,n){return ls&21?(si(n,e)||(n=Dx(),St.lanes|=n,cs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vn=!0),t.memoizedState=n)}function g1(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=Vu.transition;Vu.transition={};try{t(!1),e()}finally{it=n,Vu.transition=i}}function C_(){return Yn().memoizedState}function v1(t,e,n){var i=Er(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},b_(t))R_(e,n);else if(n=c_(t,e,n,i),n!==null){var r=un();ri(n,t,i,r),P_(n,e,i)}}function x1(t,e,n){var i=Er(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(b_(t))R_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,si(a,o)){var l=e.interleaved;l===null?(r.next=r,gp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=c_(t,e,r,i),n!==null&&(r=un(),ri(n,t,i,r),P_(n,e,i))}}function b_(t){var e=t.alternate;return t===St||e!==null&&e===St}function R_(t,e){ra=Ec=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function P_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,np(t,n)}}var Tc={readContext:Xn,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useInsertionEffect:Kt,useLayoutEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useMutableSource:Kt,useSyncExternalStore:Kt,useId:Kt,unstable_isNewReconciler:!1},_1={readContext:Xn,useCallback:function(t,e){return di().memoizedState=[t,e===void 0?null:e],t},useContext:Xn,useEffect:Mg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Yl(4194308,4,M_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Yl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Yl(4,2,t,e)},useMemo:function(t,e){var n=di();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=di();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=v1.bind(null,St,t),[i.memoizedState,t]},useRef:function(t){var e=di();return t={current:t},e.memoizedState=t},useState:Sg,useDebugValue:wp,useDeferredValue:function(t){return di().memoizedState=t},useTransition:function(){var t=Sg(!1),e=t[0];return t=g1.bind(null,t[1]),di().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=St,r=di();if(vt){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Wt===null)throw Error(ie(349));ls&30||p_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Mg(g_.bind(null,i,s,t),[t]),i.flags|=2048,Ca(9,m_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=di(),e=Wt.identifierPrefix;if(vt){var n=Ui,i=Ii;n=(i&~(1<<32-ii(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=wa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=m1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},y1={readContext:Xn,useCallback:T_,useContext:Xn,useEffect:Tp,useImperativeHandle:E_,useInsertionEffect:y_,useLayoutEffect:S_,useMemo:w_,useReducer:zu,useRef:__,useState:function(){return zu(Aa)},useDebugValue:wp,useDeferredValue:function(t){var e=Yn();return A_(e,kt.memoizedState,t)},useTransition:function(){var t=zu(Aa)[0],e=Yn().memoizedState;return[t,e]},useMutableSource:d_,useSyncExternalStore:h_,useId:C_,unstable_isNewReconciler:!1},S1={readContext:Xn,useCallback:T_,useContext:Xn,useEffect:Tp,useImperativeHandle:E_,useInsertionEffect:y_,useLayoutEffect:S_,useMemo:w_,useReducer:Hu,useRef:__,useState:function(){return Hu(Aa)},useDebugValue:wp,useDeferredValue:function(t){var e=Yn();return kt===null?e.memoizedState=t:A_(e,kt.memoizedState,t)},useTransition:function(){var t=Hu(Aa)[0],e=Yn().memoizedState;return[t,e]},useMutableSource:d_,useSyncExternalStore:h_,useId:C_,unstable_isNewReconciler:!1};function Qn(t,e){if(t&&t.defaultProps){e=Mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Sd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Jc={isMounted:function(t){return(t=t._reactInternals)?ps(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=un(),r=Er(t),s=ki(i,r);s.payload=e,n!=null&&(s.callback=n),e=Sr(t,s,r),e!==null&&(ri(e,t,r,i),jl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=un(),r=Er(t),s=ki(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Sr(t,s,r),e!==null&&(ri(e,t,r,i),jl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=un(),i=Er(t),r=ki(n,i);r.tag=2,e!=null&&(r.callback=e),e=Sr(t,r,i),e!==null&&(ri(e,t,i,n),jl(e,t,i))}};function Eg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!_a(n,i)||!_a(r,s):!0}function D_(t,e,n){var i=!1,r=br,s=e.contextType;return typeof s=="object"&&s!==null?s=Xn(s):(r=_n(e)?os:sn.current,i=e.contextTypes,s=(i=i!=null)?oo(t,r):br),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Jc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Tg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Jc.enqueueReplaceState(e,e.state,null)}function Md(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},vp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Xn(s):(s=_n(e)?os:sn.current,r.context=oo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Sd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Jc.enqueueReplaceState(r,r.state,null),Sc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function uo(t,e){try{var n="",i=e;do n+=qM(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Gu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ed(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var M1=typeof WeakMap=="function"?WeakMap:Map;function L_(t,e,n){n=ki(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ac||(Ac=!0,Nd=i),Ed(t,e)},n}function N_(t,e,n){n=ki(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ed(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ed(t,e),typeof i!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function wg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new M1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=F1.bind(null,t,e,n),e.then(t,t))}function Ag(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Cg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ki(-1,1),e.tag=2,Sr(n,e,1))),n.lanes|=1),t)}var E1=Ki.ReactCurrentOwner,vn=!1;function ln(t,e,n,i){e.child=t===null?l_(e,null,n,i):lo(e,t.child,n,i)}function bg(t,e,n,i,r){n=n.render;var s=e.ref;return to(e,r),i=Mp(t,e,n,i,s,r),n=Ep(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Xi(t,e,r)):(vt&&n&&up(e),e.flags|=1,ln(t,e,i,r),e.child)}function Rg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Np(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,I_(t,e,s,i,r)):(t=Zl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:_a,n(o,i)&&t.ref===e.ref)return Xi(t,e,r)}return e.flags|=1,t=Tr(s,i),t.ref=e.ref,t.return=e,e.child=t}function I_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(_a(s,i)&&t.ref===e.ref)if(vn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(vn=!0);else return e.lanes=t.lanes,Xi(t,e,r)}return Td(t,e,n,i,r)}function U_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ft(Xs,Cn),Cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ft(Xs,Cn),Cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ft(Xs,Cn),Cn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ft(Xs,Cn),Cn|=i;return ln(t,e,r,n),e.child}function F_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Td(t,e,n,i,r){var s=_n(n)?os:sn.current;return s=oo(e,s),to(e,r),n=Mp(t,e,n,i,s,r),i=Ep(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Xi(t,e,r)):(vt&&i&&up(e),e.flags|=1,ln(t,e,n,r),e.child)}function Pg(t,e,n,i,r){if(_n(n)){var s=!0;gc(e)}else s=!1;if(to(e,r),e.stateNode===null)$l(t,e),D_(e,n,i),Md(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Xn(c):(c=_n(n)?os:sn.current,c=oo(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Tg(e,o,i,c),cr=!1;var f=e.memoizedState;o.state=f,Sc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||xn.current||cr?(typeof u=="function"&&(Sd(e,n,u,i),l=e.memoizedState),(a=cr||Eg(e,n,a,i,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,u_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Qn(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Xn(l):(l=_n(n)?os:sn.current,l=oo(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Tg(e,o,i,l),cr=!1,f=e.memoizedState,o.state=f,Sc(e,i,o,r);var g=e.memoizedState;a!==d||f!==g||xn.current||cr?(typeof p=="function"&&(Sd(e,n,p,i),g=e.memoizedState),(c=cr||Eg(e,n,c,i,f,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return wd(t,e,n,i,s,r)}function wd(t,e,n,i,r,s){F_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&mg(e,n,!1),Xi(t,e,s);i=e.stateNode,E1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=lo(e,t.child,null,s),e.child=lo(e,null,a,s)):ln(t,e,a,s),e.memoizedState=i.state,r&&mg(e,n,!0),e.child}function O_(t){var e=t.stateNode;e.pendingContext?pg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&pg(t,e.context,!1),xp(t,e.containerInfo)}function Dg(t,e,n,i,r){return ao(),dp(r),e.flags|=256,ln(t,e,n,i),e.child}var Ad={dehydrated:null,treeContext:null,retryLane:0};function Cd(t){return{baseLanes:t,cachePool:null,transitions:null}}function k_(t,e,n){var i=e.pendingProps,r=_t.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ft(_t,r&1),t===null)return _d(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=nu(o,i,0,null),t=ss(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Cd(n),e.memoizedState=Ad,t):Ap(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return T1(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Tr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Tr(a,s):(s=ss(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Cd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ad,i}return s=t.child,t=s.sibling,i=Tr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ap(t,e){return e=nu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function cl(t,e,n,i){return i!==null&&dp(i),lo(e,t.child,null,n),t=Ap(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function T1(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Gu(Error(ie(422))),cl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=nu({mode:"visible",children:i.children},r,0,null),s=ss(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&lo(e,t.child,null,o),e.child.memoizedState=Cd(o),e.memoizedState=Ad,s);if(!(e.mode&1))return cl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ie(419)),i=Gu(s,i,void 0),cl(t,e,o,i)}if(a=(o&t.childLanes)!==0,vn||a){if(i=Wt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ji(t,r),ri(i,t,r,-1))}return Lp(),i=Gu(Error(ie(421))),cl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=O1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Rn=yr(r.nextSibling),Pn=e,vt=!0,ei=null,t!==null&&(zn[Hn++]=Ii,zn[Hn++]=Ui,zn[Hn++]=as,Ii=t.id,Ui=t.overflow,as=e),e=Ap(e,i.children),e.flags|=4096,e)}function Lg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),yd(t.return,e,n)}function Wu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function B_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ln(t,e,i.children,n),i=_t.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Lg(t,n,e);else if(t.tag===19)Lg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ft(_t,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Mc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Wu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Mc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Wu(e,!0,n,null,s);break;case"together":Wu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function $l(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Xi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),cs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=Tr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Tr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function w1(t,e,n){switch(e.tag){case 3:O_(e),ao();break;case 5:f_(e);break;case 1:_n(e.type)&&gc(e);break;case 4:xp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ft(_c,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ft(_t,_t.current&1),e.flags|=128,null):n&e.child.childLanes?k_(t,e,n):(ft(_t,_t.current&1),t=Xi(t,e,n),t!==null?t.sibling:null);ft(_t,_t.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return B_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ft(_t,_t.current),i)break;return null;case 22:case 23:return e.lanes=0,U_(t,e,n)}return Xi(t,e,n)}var V_,bd,z_,H_;V_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bd=function(){};z_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Jr(xi.current);var s=null;switch(n){case"input":r=Kf(t,r),i=Kf(t,i),s=[];break;case"select":r=Mt({},r,{value:void 0}),i=Mt({},i,{value:void 0}),s=[];break;case"textarea":r=Jf(t,r),i=Jf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=pc)}td(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(da.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(da.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&pt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};H_=function(t,e,n,i){n!==i&&(e.flags|=4)};function No(t,e){if(!vt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function A1(t,e,n){var i=e.pendingProps;switch(fp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(e),null;case 1:return _n(e.type)&&mc(),Zt(e),null;case 3:return i=e.stateNode,co(),mt(xn),mt(sn),yp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(al(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ei!==null&&(Fd(ei),ei=null))),bd(t,e),Zt(e),null;case 5:_p(e);var r=Jr(Ta.current);if(n=e.type,t!==null&&e.stateNode!=null)z_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return Zt(e),null}if(t=Jr(xi.current),al(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[pi]=e,i[Ma]=s,t=(e.mode&1)!==0,n){case"dialog":pt("cancel",i),pt("close",i);break;case"iframe":case"object":case"embed":pt("load",i);break;case"video":case"audio":for(r=0;r<qo.length;r++)pt(qo[r],i);break;case"source":pt("error",i);break;case"img":case"image":case"link":pt("error",i),pt("load",i);break;case"details":pt("toggle",i);break;case"input":zm(i,s),pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},pt("invalid",i);break;case"textarea":Gm(i,s),pt("invalid",i)}td(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ol(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ol(i.textContent,a,t),r=["children",""+a]):da.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&pt("scroll",i)}switch(n){case"input":Qa(i),Hm(i,s,!0);break;case"textarea":Qa(i),Wm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=pc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=gx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[pi]=e,t[Ma]=i,V_(t,e,!1,!1),e.stateNode=t;e:{switch(o=nd(n,i),n){case"dialog":pt("cancel",t),pt("close",t),r=i;break;case"iframe":case"object":case"embed":pt("load",t),r=i;break;case"video":case"audio":for(r=0;r<qo.length;r++)pt(qo[r],t);r=i;break;case"source":pt("error",t),r=i;break;case"img":case"image":case"link":pt("error",t),pt("load",t),r=i;break;case"details":pt("toggle",t),r=i;break;case"input":zm(t,i),r=Kf(t,i),pt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Mt({},i,{value:void 0}),pt("invalid",t);break;case"textarea":Gm(t,i),r=Jf(t,i),pt("invalid",t);break;default:r=i}td(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?_x(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&vx(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ha(t,l):typeof l=="number"&&ha(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(da.hasOwnProperty(s)?l!=null&&s==="onScroll"&&pt("scroll",t):l!=null&&Kh(t,s,l,o))}switch(n){case"input":Qa(t),Hm(t,i,!1);break;case"textarea":Qa(t),Wm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Cr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Zs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Zs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=pc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Zt(e),null;case 6:if(t&&e.stateNode!=null)H_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=Jr(Ta.current),Jr(xi.current),al(e)){if(i=e.stateNode,n=e.memoizedProps,i[pi]=e,(s=i.nodeValue!==n)&&(t=Pn,t!==null))switch(t.tag){case 3:ol(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ol(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[pi]=e,e.stateNode=i}return Zt(e),null;case 13:if(mt(_t),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(vt&&Rn!==null&&e.mode&1&&!(e.flags&128))o_(),ao(),e.flags|=98560,s=!1;else if(s=al(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[pi]=e}else ao(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Zt(e),s=!1}else ei!==null&&(Fd(ei),ei=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||_t.current&1?Bt===0&&(Bt=3):Lp())),e.updateQueue!==null&&(e.flags|=4),Zt(e),null);case 4:return co(),bd(t,e),t===null&&ya(e.stateNode.containerInfo),Zt(e),null;case 10:return mp(e.type._context),Zt(e),null;case 17:return _n(e.type)&&mc(),Zt(e),null;case 19:if(mt(_t),s=e.memoizedState,s===null)return Zt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)No(s,!1);else{if(Bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Mc(t),o!==null){for(e.flags|=128,No(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ft(_t,_t.current&1|2),e.child}t=t.sibling}s.tail!==null&&Dt()>fo&&(e.flags|=128,i=!0,No(s,!1),e.lanes=4194304)}else{if(!i)if(t=Mc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),No(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!vt)return Zt(e),null}else 2*Dt()-s.renderingStartTime>fo&&n!==1073741824&&(e.flags|=128,i=!0,No(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Dt(),e.sibling=null,n=_t.current,ft(_t,i?n&1|2:n&1),e):(Zt(e),null);case 22:case 23:return Dp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Cn&1073741824&&(Zt(e),e.subtreeFlags&6&&(e.flags|=8192)):Zt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function C1(t,e){switch(fp(e),e.tag){case 1:return _n(e.type)&&mc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return co(),mt(xn),mt(sn),yp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return _p(e),null;case 13:if(mt(_t),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));ao()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return mt(_t),null;case 4:return co(),null;case 10:return mp(e.type._context),null;case 22:case 23:return Dp(),null;case 24:return null;default:return null}}var ul=!1,tn=!1,b1=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function js(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){wt(t,e,i)}else n.current=null}function Rd(t,e,n){try{n()}catch(i){wt(t,e,i)}}var Ng=!1;function R1(t,e){if(dd=fc,t=Yx(),cp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(hd={focusedElem:t,selectionRange:n},fc=!1,Ee=e;Ee!==null;)if(e=Ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ee=t;else for(;Ee!==null;){e=Ee;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,v=g.memoizedState,h=e.stateNode,m=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:Qn(e.type,y),v);h.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(M){wt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}return g=Ng,Ng=!1,g}function sa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Rd(e,n,s)}r=r.next}while(r!==i)}}function eu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Pd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function G_(t){var e=t.alternate;e!==null&&(t.alternate=null,G_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[pi],delete e[Ma],delete e[gd],delete e[f1],delete e[d1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function W_(t){return t.tag===5||t.tag===3||t.tag===4}function Ig(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||W_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Dd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=pc));else if(i!==4&&(t=t.child,t!==null))for(Dd(t,e,n),t=t.sibling;t!==null;)Dd(t,e,n),t=t.sibling}function Ld(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ld(t,e,n),t=t.sibling;t!==null;)Ld(t,e,n),t=t.sibling}var jt=null,Jn=!1;function er(t,e,n){for(n=n.child;n!==null;)j_(t,e,n),n=n.sibling}function j_(t,e,n){if(vi&&typeof vi.onCommitFiberUnmount=="function")try{vi.onCommitFiberUnmount(Xc,n)}catch{}switch(n.tag){case 5:tn||js(n,e);case 6:var i=jt,r=Jn;jt=null,er(t,e,n),jt=i,Jn=r,jt!==null&&(Jn?(t=jt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):jt.removeChild(n.stateNode));break;case 18:jt!==null&&(Jn?(t=jt,n=n.stateNode,t.nodeType===8?Ou(t.parentNode,n):t.nodeType===1&&Ou(t,n),va(t)):Ou(jt,n.stateNode));break;case 4:i=jt,r=Jn,jt=n.stateNode.containerInfo,Jn=!0,er(t,e,n),jt=i,Jn=r;break;case 0:case 11:case 14:case 15:if(!tn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Rd(n,e,o),r=r.next}while(r!==i)}er(t,e,n);break;case 1:if(!tn&&(js(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){wt(n,e,a)}er(t,e,n);break;case 21:er(t,e,n);break;case 22:n.mode&1?(tn=(i=tn)||n.memoizedState!==null,er(t,e,n),tn=i):er(t,e,n);break;default:er(t,e,n)}}function Ug(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new b1),e.forEach(function(i){var r=k1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function $n(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:jt=a.stateNode,Jn=!1;break e;case 3:jt=a.stateNode.containerInfo,Jn=!0;break e;case 4:jt=a.stateNode.containerInfo,Jn=!0;break e}a=a.return}if(jt===null)throw Error(ie(160));j_(s,o,r),jt=null,Jn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){wt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)X_(e,t),e=e.sibling}function X_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if($n(e,t),ci(t),i&4){try{sa(3,t,t.return),eu(3,t)}catch(y){wt(t,t.return,y)}try{sa(5,t,t.return)}catch(y){wt(t,t.return,y)}}break;case 1:$n(e,t),ci(t),i&512&&n!==null&&js(n,n.return);break;case 5:if($n(e,t),ci(t),i&512&&n!==null&&js(n,n.return),t.flags&32){var r=t.stateNode;try{ha(r,"")}catch(y){wt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&px(r,s),nd(a,o);var c=nd(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?_x(r,d):u==="dangerouslySetInnerHTML"?vx(r,d):u==="children"?ha(r,d):Kh(r,u,d,c)}switch(a){case"input":Zf(r,s);break;case"textarea":mx(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Zs(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Zs(r,!!s.multiple,s.defaultValue,!0):Zs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ma]=s}catch(y){wt(t,t.return,y)}}break;case 6:if($n(e,t),ci(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){wt(t,t.return,y)}}break;case 3:if($n(e,t),ci(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{va(e.containerInfo)}catch(y){wt(t,t.return,y)}break;case 4:$n(e,t),ci(t);break;case 13:$n(e,t),ci(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Rp=Dt())),i&4&&Ug(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(tn=(c=tn)||u,$n(e,t),tn=c):$n(e,t),ci(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Ee=t,u=t.child;u!==null;){for(d=Ee=u;Ee!==null;){switch(f=Ee,p=f.child,f.tag){case 0:case 11:case 14:case 15:sa(4,f,f.return);break;case 1:js(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){wt(i,n,y)}}break;case 5:js(f,f.return);break;case 22:if(f.memoizedState!==null){Og(d);continue}}p!==null?(p.return=f,Ee=p):Og(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=xx("display",o))}catch(y){wt(t,t.return,y)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){wt(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:$n(e,t),ci(t),i&4&&Ug(t);break;case 21:break;default:$n(e,t),ci(t)}}function ci(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(W_(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ha(r,""),i.flags&=-33);var s=Ig(t);Ld(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Ig(t);Dd(t,a,o);break;default:throw Error(ie(161))}}catch(l){wt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function P1(t,e,n){Ee=t,Y_(t)}function Y_(t,e,n){for(var i=(t.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ul;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||tn;a=ul;var c=tn;if(ul=o,(tn=l)&&!c)for(Ee=r;Ee!==null;)o=Ee,l=o.child,o.tag===22&&o.memoizedState!==null?kg(r):l!==null?(l.return=o,Ee=l):kg(r);for(;s!==null;)Ee=s,Y_(s),s=s.sibling;Ee=r,ul=a,tn=c}Fg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):Fg(t)}}function Fg(t){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tn||eu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!tn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Qn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&yg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}yg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&va(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}tn||e.flags&512&&Pd(e)}catch(f){wt(e,e.return,f)}}if(e===t){Ee=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function Og(t){for(;Ee!==null;){var e=Ee;if(e===t){Ee=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function kg(t){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{eu(4,e)}catch(l){wt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){wt(e,r,l)}}var s=e.return;try{Pd(e)}catch(l){wt(e,s,l)}break;case 5:var o=e.return;try{Pd(e)}catch(l){wt(e,o,l)}}}catch(l){wt(e,e.return,l)}if(e===t){Ee=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ee=a;break}Ee=e.return}}var D1=Math.ceil,wc=Ki.ReactCurrentDispatcher,Cp=Ki.ReactCurrentOwner,jn=Ki.ReactCurrentBatchConfig,Qe=0,Wt=null,Ut=null,Yt=0,Cn=0,Xs=Ir(0),Bt=0,ba=null,cs=0,tu=0,bp=0,oa=null,gn=null,Rp=0,fo=1/0,Di=null,Ac=!1,Nd=null,Mr=null,fl=!1,mr=null,Cc=0,aa=0,Id=null,ql=-1,Kl=0;function un(){return Qe&6?Dt():ql!==-1?ql:ql=Dt()}function Er(t){return t.mode&1?Qe&2&&Yt!==0?Yt&-Yt:p1.transition!==null?(Kl===0&&(Kl=Dx()),Kl):(t=it,t!==0||(t=window.event,t=t===void 0?16:kx(t.type)),t):1}function ri(t,e,n,i){if(50<aa)throw aa=0,Id=null,Error(ie(185));Oa(t,n,i),(!(Qe&2)||t!==Wt)&&(t===Wt&&(!(Qe&2)&&(tu|=n),Bt===4&&dr(t,Yt)),yn(t,i),n===1&&Qe===0&&!(e.mode&1)&&(fo=Dt()+500,Zc&&Ur()))}function yn(t,e){var n=t.callbackNode;pE(t,e);var i=uc(t,t===Wt?Yt:0);if(i===0)n!==null&&Ym(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Ym(n),e===1)t.tag===0?h1(Bg.bind(null,t)):i_(Bg.bind(null,t)),c1(function(){!(Qe&6)&&Ur()}),n=null;else{switch(Lx(i)){case 1:n=tp;break;case 4:n=Rx;break;case 16:n=cc;break;case 536870912:n=Px;break;default:n=cc}n=ty(n,$_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function $_(t,e){if(ql=-1,Kl=0,Qe&6)throw Error(ie(327));var n=t.callbackNode;if(no()&&t.callbackNode!==n)return null;var i=uc(t,t===Wt?Yt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=bc(t,i);else{e=i;var r=Qe;Qe|=2;var s=K_();(Wt!==t||Yt!==e)&&(Di=null,fo=Dt()+500,rs(t,e));do try{I1();break}catch(a){q_(t,a)}while(1);pp(),wc.current=s,Qe=r,Ut!==null?e=0:(Wt=null,Yt=0,e=Bt)}if(e!==0){if(e===2&&(r=ad(t),r!==0&&(i=r,e=Ud(t,r))),e===1)throw n=ba,rs(t,0),dr(t,i),yn(t,Dt()),n;if(e===6)dr(t,i);else{if(r=t.current.alternate,!(i&30)&&!L1(r)&&(e=bc(t,i),e===2&&(s=ad(t),s!==0&&(i=s,e=Ud(t,s))),e===1))throw n=ba,rs(t,0),dr(t,i),yn(t,Dt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:Wr(t,gn,Di);break;case 3:if(dr(t,i),(i&130023424)===i&&(e=Rp+500-Dt(),10<e)){if(uc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){un(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=md(Wr.bind(null,t,gn,Di),e);break}Wr(t,gn,Di);break;case 4:if(dr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ii(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Dt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*D1(i/1960))-i,10<i){t.timeoutHandle=md(Wr.bind(null,t,gn,Di),i);break}Wr(t,gn,Di);break;case 5:Wr(t,gn,Di);break;default:throw Error(ie(329))}}}return yn(t,Dt()),t.callbackNode===n?$_.bind(null,t):null}function Ud(t,e){var n=oa;return t.current.memoizedState.isDehydrated&&(rs(t,e).flags|=256),t=bc(t,e),t!==2&&(e=gn,gn=n,e!==null&&Fd(e)),t}function Fd(t){gn===null?gn=t:gn.push.apply(gn,t)}function L1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!si(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function dr(t,e){for(e&=~bp,e&=~tu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ii(e),i=1<<n;t[n]=-1,e&=~i}}function Bg(t){if(Qe&6)throw Error(ie(327));no();var e=uc(t,0);if(!(e&1))return yn(t,Dt()),null;var n=bc(t,e);if(t.tag!==0&&n===2){var i=ad(t);i!==0&&(e=i,n=Ud(t,i))}if(n===1)throw n=ba,rs(t,0),dr(t,e),yn(t,Dt()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Wr(t,gn,Di),yn(t,Dt()),null}function Pp(t,e){var n=Qe;Qe|=1;try{return t(e)}finally{Qe=n,Qe===0&&(fo=Dt()+500,Zc&&Ur())}}function us(t){mr!==null&&mr.tag===0&&!(Qe&6)&&no();var e=Qe;Qe|=1;var n=jn.transition,i=it;try{if(jn.transition=null,it=1,t)return t()}finally{it=i,jn.transition=n,Qe=e,!(Qe&6)&&Ur()}}function Dp(){Cn=Xs.current,mt(Xs)}function rs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,l1(n)),Ut!==null)for(n=Ut.return;n!==null;){var i=n;switch(fp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&mc();break;case 3:co(),mt(xn),mt(sn),yp();break;case 5:_p(i);break;case 4:co();break;case 13:mt(_t);break;case 19:mt(_t);break;case 10:mp(i.type._context);break;case 22:case 23:Dp()}n=n.return}if(Wt=t,Ut=t=Tr(t.current,null),Yt=Cn=e,Bt=0,ba=null,bp=tu=cs=0,gn=oa=null,Qr!==null){for(e=0;e<Qr.length;e++)if(n=Qr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Qr=null}return t}function q_(t,e){do{var n=Ut;try{if(pp(),Xl.current=Tc,Ec){for(var i=St.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ec=!1}if(ls=0,Gt=kt=St=null,ra=!1,wa=0,Cp.current=null,n===null||n.return===null){Bt=1,ba=e,Ut=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Yt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Ag(o);if(p!==null){p.flags&=-257,Cg(p,o,a,s,e),p.mode&1&&wg(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var y=new Set;y.add(l),e.updateQueue=y}else g.add(l);break e}else{if(!(e&1)){wg(s,c,e),Lp();break e}l=Error(ie(426))}}else if(vt&&a.mode&1){var v=Ag(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),Cg(v,o,a,s,e),dp(uo(l,a));break e}}s=l=uo(l,a),Bt!==4&&(Bt=2),oa===null?oa=[s]:oa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=L_(s,l,e);_g(s,h);break e;case 1:a=l;var m=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Mr===null||!Mr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=N_(s,a,e);_g(s,M);break e}}s=s.return}while(s!==null)}Q_(n)}catch(w){e=w,Ut===n&&n!==null&&(Ut=n=n.return);continue}break}while(1)}function K_(){var t=wc.current;return wc.current=Tc,t===null?Tc:t}function Lp(){(Bt===0||Bt===3||Bt===2)&&(Bt=4),Wt===null||!(cs&268435455)&&!(tu&268435455)||dr(Wt,Yt)}function bc(t,e){var n=Qe;Qe|=2;var i=K_();(Wt!==t||Yt!==e)&&(Di=null,rs(t,e));do try{N1();break}catch(r){q_(t,r)}while(1);if(pp(),Qe=n,wc.current=i,Ut!==null)throw Error(ie(261));return Wt=null,Yt=0,Bt}function N1(){for(;Ut!==null;)Z_(Ut)}function I1(){for(;Ut!==null&&!sE();)Z_(Ut)}function Z_(t){var e=ey(t.alternate,t,Cn);t.memoizedProps=t.pendingProps,e===null?Q_(t):Ut=e,Cp.current=null}function Q_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=C1(n,e),n!==null){n.flags&=32767,Ut=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Bt=6,Ut=null;return}}else if(n=A1(n,e,Cn),n!==null){Ut=n;return}if(e=e.sibling,e!==null){Ut=e;return}Ut=e=t}while(e!==null);Bt===0&&(Bt=5)}function Wr(t,e,n){var i=it,r=jn.transition;try{jn.transition=null,it=1,U1(t,e,n,i)}finally{jn.transition=r,it=i}return null}function U1(t,e,n,i){do no();while(mr!==null);if(Qe&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(mE(t,s),t===Wt&&(Ut=Wt=null,Yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fl||(fl=!0,ty(cc,function(){return no(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=jn.transition,jn.transition=null;var o=it;it=1;var a=Qe;Qe|=4,Cp.current=null,R1(t,n),X_(n,t),t1(hd),fc=!!dd,hd=dd=null,t.current=n,P1(n),oE(),Qe=a,it=o,jn.transition=s}else t.current=n;if(fl&&(fl=!1,mr=t,Cc=r),s=t.pendingLanes,s===0&&(Mr=null),cE(n.stateNode),yn(t,Dt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ac)throw Ac=!1,t=Nd,Nd=null,t;return Cc&1&&t.tag!==0&&no(),s=t.pendingLanes,s&1?t===Id?aa++:(aa=0,Id=t):aa=0,Ur(),null}function no(){if(mr!==null){var t=Lx(Cc),e=jn.transition,n=it;try{if(jn.transition=null,it=16>t?16:t,mr===null)var i=!1;else{if(t=mr,mr=null,Cc=0,Qe&6)throw Error(ie(331));var r=Qe;for(Qe|=4,Ee=t.current;Ee!==null;){var s=Ee,o=s.child;if(Ee.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ee=c;Ee!==null;){var u=Ee;switch(u.tag){case 0:case 11:case 15:sa(8,u,s)}var d=u.child;if(d!==null)d.return=u,Ee=d;else for(;Ee!==null;){u=Ee;var f=u.sibling,p=u.return;if(G_(u),u===c){Ee=null;break}if(f!==null){f.return=p,Ee=f;break}Ee=p}}}var g=s.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var v=y.sibling;y.sibling=null,y=v}while(y!==null)}}Ee=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ee=o;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:sa(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Ee=h;break e}Ee=s.return}}var m=t.current;for(Ee=m;Ee!==null;){o=Ee;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Ee=x;else e:for(o=m;Ee!==null;){if(a=Ee,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:eu(9,a)}}catch(w){wt(a,a.return,w)}if(a===o){Ee=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,Ee=M;break e}Ee=a.return}}if(Qe=r,Ur(),vi&&typeof vi.onPostCommitFiberRoot=="function")try{vi.onPostCommitFiberRoot(Xc,t)}catch{}i=!0}return i}finally{it=n,jn.transition=e}}return!1}function Vg(t,e,n){e=uo(n,e),e=L_(t,e,1),t=Sr(t,e,1),e=un(),t!==null&&(Oa(t,1,e),yn(t,e))}function wt(t,e,n){if(t.tag===3)Vg(t,t,n);else for(;e!==null;){if(e.tag===3){Vg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Mr===null||!Mr.has(i))){t=uo(n,t),t=N_(e,t,1),e=Sr(e,t,1),t=un(),e!==null&&(Oa(e,1,t),yn(e,t));break}}e=e.return}}function F1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=un(),t.pingedLanes|=t.suspendedLanes&n,Wt===t&&(Yt&n)===n&&(Bt===4||Bt===3&&(Yt&130023424)===Yt&&500>Dt()-Rp?rs(t,0):bp|=n),yn(t,e)}function J_(t,e){e===0&&(t.mode&1?(e=tl,tl<<=1,!(tl&130023424)&&(tl=4194304)):e=1);var n=un();t=ji(t,e),t!==null&&(Oa(t,e,n),yn(t,n))}function O1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),J_(t,n)}function k1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),J_(t,n)}var ey;ey=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||xn.current)vn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vn=!1,w1(t,e,n);vn=!!(t.flags&131072)}else vn=!1,vt&&e.flags&1048576&&r_(e,xc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;$l(t,e),t=e.pendingProps;var r=oo(e,sn.current);to(e,n),r=Mp(null,e,i,t,r,n);var s=Ep();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_n(i)?(s=!0,gc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,vp(e),r.updater=Jc,e.stateNode=r,r._reactInternals=e,Md(e,i,t,n),e=wd(null,e,i,!0,s,n)):(e.tag=0,vt&&s&&up(e),ln(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch($l(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=V1(i),t=Qn(i,t),r){case 0:e=Td(null,e,i,t,n);break e;case 1:e=Pg(null,e,i,t,n);break e;case 11:e=bg(null,e,i,t,n);break e;case 14:e=Rg(null,e,i,Qn(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),Td(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),Pg(t,e,i,r,n);case 3:e:{if(O_(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,u_(t,e),Sc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=uo(Error(ie(423)),e),e=Dg(t,e,i,n,r);break e}else if(i!==r){r=uo(Error(ie(424)),e),e=Dg(t,e,i,n,r);break e}else for(Rn=yr(e.stateNode.containerInfo.firstChild),Pn=e,vt=!0,ei=null,n=l_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ao(),i===r){e=Xi(t,e,n);break e}ln(t,e,i,n)}e=e.child}return e;case 5:return f_(e),t===null&&_d(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,pd(i,r)?o=null:s!==null&&pd(i,s)&&(e.flags|=32),F_(t,e),ln(t,e,o,n),e.child;case 6:return t===null&&_d(e),null;case 13:return k_(t,e,n);case 4:return xp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=lo(e,null,i,n):ln(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),bg(t,e,i,r,n);case 7:return ln(t,e,e.pendingProps,n),e.child;case 8:return ln(t,e,e.pendingProps.children,n),e.child;case 12:return ln(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ft(_c,i._currentValue),i._currentValue=o,s!==null)if(si(s.value,o)){if(s.children===r.children&&!xn.current){e=Xi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ki(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),yd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ie(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),yd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ln(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,to(e,n),r=Xn(r),i=i(r),e.flags|=1,ln(t,e,i,n),e.child;case 14:return i=e.type,r=Qn(i,e.pendingProps),r=Qn(i.type,r),Rg(t,e,i,r,n);case 15:return I_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),$l(t,e),e.tag=1,_n(i)?(t=!0,gc(e)):t=!1,to(e,n),D_(e,i,r),Md(e,i,r,n),wd(null,e,i,!0,t,n);case 19:return B_(t,e,n);case 22:return U_(t,e,n)}throw Error(ie(156,e.tag))};function ty(t,e){return bx(t,e)}function B1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,e,n,i){return new B1(t,e,n,i)}function Np(t){return t=t.prototype,!(!t||!t.isReactComponent)}function V1(t){if(typeof t=="function")return Np(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Qh)return 11;if(t===Jh)return 14}return 2}function Tr(t,e){var n=t.alternate;return n===null?(n=Wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Zl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Np(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Fs:return ss(n.children,r,s,e);case Zh:o=8,r|=8;break;case Xf:return t=Wn(12,n,e,r|2),t.elementType=Xf,t.lanes=s,t;case Yf:return t=Wn(13,n,e,r),t.elementType=Yf,t.lanes=s,t;case $f:return t=Wn(19,n,e,r),t.elementType=$f,t.lanes=s,t;case fx:return nu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case cx:o=10;break e;case ux:o=9;break e;case Qh:o=11;break e;case Jh:o=14;break e;case lr:o=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=Wn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ss(t,e,n,i){return t=Wn(7,t,i,e),t.lanes=n,t}function nu(t,e,n,i){return t=Wn(22,t,i,e),t.elementType=fx,t.lanes=n,t.stateNode={isHidden:!1},t}function ju(t,e,n){return t=Wn(6,t,null,e),t.lanes=n,t}function Xu(t,e,n){return e=Wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function z1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Au(0),this.expirationTimes=Au(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Au(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ip(t,e,n,i,r,s,o,a,l){return t=new z1(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Wn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vp(s),t}function H1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Us,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function ny(t){if(!t)return br;t=t._reactInternals;e:{if(ps(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_n(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(_n(n))return n_(t,n,e)}return e}function iy(t,e,n,i,r,s,o,a,l){return t=Ip(n,i,!0,t,r,s,o,a,l),t.context=ny(null),n=t.current,i=un(),r=Er(n),s=ki(i,r),s.callback=e??null,Sr(n,s,r),t.current.lanes=r,Oa(t,r,i),yn(t,i),t}function iu(t,e,n,i){var r=e.current,s=un(),o=Er(r);return n=ny(n),e.context===null?e.context=n:e.pendingContext=n,e=ki(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Sr(r,e,o),t!==null&&(ri(t,r,o,s),jl(t,r,o)),o}function Rc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function zg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Up(t,e){zg(t,e),(t=t.alternate)&&zg(t,e)}function G1(){return null}var ry=typeof reportError=="function"?reportError:function(t){console.error(t)};function Fp(t){this._internalRoot=t}ru.prototype.render=Fp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));iu(t,e,null,null)};ru.prototype.unmount=Fp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;us(function(){iu(null,t,null,null)}),e[Wi]=null}};function ru(t){this._internalRoot=t}ru.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ux();t={blockedOn:null,target:t,priority:e};for(var n=0;n<fr.length&&e!==0&&e<fr[n].priority;n++);fr.splice(n,0,t),n===0&&Ox(t)}};function Op(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function su(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hg(){}function W1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Rc(o);s.call(c)}}var o=iy(e,i,t,0,null,!1,!1,"",Hg);return t._reactRootContainer=o,t[Wi]=o.current,ya(t.nodeType===8?t.parentNode:t),us(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Rc(l);a.call(c)}}var l=Ip(t,0,!1,null,null,!1,!1,"",Hg);return t._reactRootContainer=l,t[Wi]=l.current,ya(t.nodeType===8?t.parentNode:t),us(function(){iu(e,l,n,i)}),l}function ou(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Rc(o);a.call(l)}}iu(e,o,t,r)}else o=W1(n,e,t,r,i);return Rc(o)}Nx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=$o(e.pendingLanes);n!==0&&(np(e,n|1),yn(e,Dt()),!(Qe&6)&&(fo=Dt()+500,Ur()))}break;case 13:us(function(){var i=ji(t,1);if(i!==null){var r=un();ri(i,t,1,r)}}),Up(t,1)}};ip=function(t){if(t.tag===13){var e=ji(t,134217728);if(e!==null){var n=un();ri(e,t,134217728,n)}Up(t,134217728)}};Ix=function(t){if(t.tag===13){var e=Er(t),n=ji(t,e);if(n!==null){var i=un();ri(n,t,e,i)}Up(t,e)}};Ux=function(){return it};Fx=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};rd=function(t,e,n){switch(e){case"input":if(Zf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Kc(i);if(!r)throw Error(ie(90));hx(i),Zf(i,r)}}}break;case"textarea":mx(t,n);break;case"select":e=n.value,e!=null&&Zs(t,!!n.multiple,e,!1)}};Mx=Pp;Ex=us;var j1={usingClientEntryPoint:!1,Events:[Ba,Vs,Kc,yx,Sx,Pp]},Io={findFiberByHostInstance:Zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},X1={bundleType:Io.bundleType,version:Io.version,rendererPackageName:Io.rendererPackageName,rendererConfig:Io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ki.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ax(t),t===null?null:t.stateNode},findFiberByHostInstance:Io.findFiberByHostInstance||G1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dl.isDisabled&&dl.supportsFiber)try{Xc=dl.inject(X1),vi=dl}catch{}}Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j1;Nn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Op(e))throw Error(ie(200));return H1(t,e,null,n)};Nn.createRoot=function(t,e){if(!Op(t))throw Error(ie(299));var n=!1,i="",r=ry;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ip(t,1,!1,null,null,n,!1,i,r),t[Wi]=e.current,ya(t.nodeType===8?t.parentNode:t),new Fp(e)};Nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=Ax(e),t=t===null?null:t.stateNode,t};Nn.flushSync=function(t){return us(t)};Nn.hydrate=function(t,e,n){if(!su(e))throw Error(ie(200));return ou(null,t,e,!0,n)};Nn.hydrateRoot=function(t,e,n){if(!Op(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=ry;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=iy(e,null,t,1,n??null,r,!1,s,o),t[Wi]=e.current,ya(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ru(e)};Nn.render=function(t,e,n){if(!su(e))throw Error(ie(200));return ou(null,t,e,!1,n)};Nn.unmountComponentAtNode=function(t){if(!su(t))throw Error(ie(40));return t._reactRootContainer?(us(function(){ou(null,null,t,!1,function(){t._reactRootContainer=null,t[Wi]=null})}),!0):!1};Nn.unstable_batchedUpdates=Pp;Nn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!su(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return ou(t,e,n,!1,i)};Nn.version="18.3.1-next-f1338f8080-20240426";function sy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sy)}catch(t){console.error(t)}}sy(),sx.exports=Nn;var Y1=sx.exports,Gg=Y1;Wf.createRoot=Gg.createRoot,Wf.hydrateRoot=Gg.hydrateRoot;const oy=re.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),au=re.createContext({}),lu=re.createContext(null),cu=typeof document<"u",uu=cu?re.useLayoutEffect:re.useEffect,ay=re.createContext({strict:!1}),kp=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),$1="framerAppearId",ly="data-"+kp($1);function q1(t,e,n,i){const{visualElement:r}=re.useContext(au),s=re.useContext(ay),o=re.useContext(lu),a=re.useContext(oy).reducedMotion,l=re.useRef();i=i||s.renderer,!l.current&&i&&(l.current=i(t,{visualState:e,parent:r,props:n,presenceContext:o,blockInitialAnimation:o?o.initial===!1:!1,reducedMotionConfig:a}));const c=l.current;re.useInsertionEffect(()=>{c&&c.update(n,o)});const u=re.useRef(!!(n[ly]&&!window.HandoffComplete));return uu(()=>{c&&(c.render(),u.current&&c.animationState&&c.animationState.animateChanges())}),re.useEffect(()=>{c&&(c.updateFeatures(),!u.current&&c.animationState&&c.animationState.animateChanges(),u.current&&(u.current=!1,window.HandoffComplete=!0))}),c}function Ys(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function K1(t,e,n){return re.useCallback(i=>{i&&t.mount&&t.mount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):Ys(n)&&(n.current=i))},[e])}function Ra(t){return typeof t=="string"||Array.isArray(t)}function fu(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Bp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Vp=["initial",...Bp];function du(t){return fu(t.animate)||Vp.some(e=>Ra(t[e]))}function cy(t){return!!(du(t)||t.variants)}function Z1(t,e){if(du(t)){const{initial:n,animate:i}=t;return{initial:n===!1||Ra(n)?n:void 0,animate:Ra(i)?i:void 0}}return t.inherit!==!1?e:{}}function Q1(t){const{initial:e,animate:n}=Z1(t,re.useContext(au));return re.useMemo(()=>({initial:e,animate:n}),[Wg(e),Wg(n)])}function Wg(t){return Array.isArray(t)?t.join(" "):t}const jg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Pa={};for(const t in jg)Pa[t]={isEnabled:e=>jg[t].some(n=>!!e[n])};function J1(t){for(const e in t)Pa[e]={...Pa[e],...t[e]}}const zp=re.createContext({}),uy=re.createContext({}),eT=Symbol.for("motionComponentSymbol");function tT({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){t&&J1(t);function s(a,l){let c;const u={...re.useContext(oy),...a,layoutId:nT(a)},{isStatic:d}=u,f=Q1(a),p=i(a,d);if(!d&&cu){f.visualElement=q1(r,p,u,e);const g=re.useContext(uy),y=re.useContext(ay).strict;f.visualElement&&(c=f.visualElement.loadFeatures(u,y,t,g))}return re.createElement(au.Provider,{value:f},c&&f.visualElement?re.createElement(c,{visualElement:f.visualElement,...u}):null,n(r,a,K1(p,f.visualElement,l),p,d,f.visualElement))}const o=re.forwardRef(s);return o[eT]=r,o}function nT({layoutId:t}){const e=re.useContext(zp).id;return e&&t!==void 0?e+"-"+t:t}function iT(t){function e(i,r={}){return tT(t(i,r))}if(typeof Proxy>"u")return e;const n=new Map;return new Proxy(e,{get:(i,r)=>(n.has(r)||n.set(r,e(r)),n.get(r))})}const rT=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Hp(t){return typeof t!="string"||t.includes("-")?!1:!!(rT.indexOf(t)>-1||/[A-Z]/.test(t))}const Pc={};function sT(t){Object.assign(Pc,t)}const za=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ms=new Set(za);function fy(t,{layout:e,layoutId:n}){return ms.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Pc[t]||t==="opacity")}const Mn=t=>!!(t&&t.getVelocity),oT={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},aT=za.length;function lT(t,{enableHardwareAcceleration:e=!0,allowTransformNone:n=!0},i,r){let s="";for(let o=0;o<aT;o++){const a=za[o];if(t[a]!==void 0){const l=oT[a]||a;s+=`${l}(${t[a]}) `}}return e&&!t.z&&(s+="translateZ(0)"),s=s.trim(),r?s=r(t,i?"":s):n&&i&&(s="none"),s}const dy=t=>e=>typeof e=="string"&&e.startsWith(t),hy=dy("--"),Od=dy("var(--"),cT=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,uT=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Rr=(t,e,n)=>Math.min(Math.max(n,t),e),gs={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},la={...gs,transform:t=>Rr(0,1,t)},hl={...gs,default:1},ca=t=>Math.round(t*1e5)/1e5,hu=/(-)?([\d]*\.?[\d])+/g,py=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,fT=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Ha(t){return typeof t=="string"}const Ga=t=>({test:e=>Ha(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),ar=Ga("deg"),_i=Ga("%"),Pe=Ga("px"),dT=Ga("vh"),hT=Ga("vw"),Xg={..._i,parse:t=>_i.parse(t)/100,transform:t=>_i.transform(t*100)},Yg={...gs,transform:Math.round},my={borderWidth:Pe,borderTopWidth:Pe,borderRightWidth:Pe,borderBottomWidth:Pe,borderLeftWidth:Pe,borderRadius:Pe,radius:Pe,borderTopLeftRadius:Pe,borderTopRightRadius:Pe,borderBottomRightRadius:Pe,borderBottomLeftRadius:Pe,width:Pe,maxWidth:Pe,height:Pe,maxHeight:Pe,size:Pe,top:Pe,right:Pe,bottom:Pe,left:Pe,padding:Pe,paddingTop:Pe,paddingRight:Pe,paddingBottom:Pe,paddingLeft:Pe,margin:Pe,marginTop:Pe,marginRight:Pe,marginBottom:Pe,marginLeft:Pe,rotate:ar,rotateX:ar,rotateY:ar,rotateZ:ar,scale:hl,scaleX:hl,scaleY:hl,scaleZ:hl,skew:ar,skewX:ar,skewY:ar,distance:Pe,translateX:Pe,translateY:Pe,translateZ:Pe,x:Pe,y:Pe,z:Pe,perspective:Pe,transformPerspective:Pe,opacity:la,originX:Xg,originY:Xg,originZ:Pe,zIndex:Yg,fillOpacity:la,strokeOpacity:la,numOctaves:Yg};function Gp(t,e,n,i){const{style:r,vars:s,transform:o,transformOrigin:a}=t;let l=!1,c=!1,u=!0;for(const d in e){const f=e[d];if(hy(d)){s[d]=f;continue}const p=my[d],g=uT(f,p);if(ms.has(d)){if(l=!0,o[d]=g,!u)continue;f!==(p.default||0)&&(u=!1)}else d.startsWith("origin")?(c=!0,a[d]=g):r[d]=g}if(e.transform||(l||i?r.transform=lT(t.transform,n,u,i):r.transform&&(r.transform="none")),c){const{originX:d="50%",originY:f="50%",originZ:p=0}=a;r.transformOrigin=`${d} ${f} ${p}`}}const Wp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function gy(t,e,n){for(const i in e)!Mn(e[i])&&!fy(i,n)&&(t[i]=e[i])}function pT({transformTemplate:t},e,n){return re.useMemo(()=>{const i=Wp();return Gp(i,e,{enableHardwareAcceleration:!n},t),Object.assign({},i.vars,i.style)},[e])}function mT(t,e,n){const i=t.style||{},r={};return gy(r,i,t),Object.assign(r,pT(t,e,n)),t.transformValues?t.transformValues(r):r}function gT(t,e,n){const i={},r=mT(t,e,n);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=r,i}const vT=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Dc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||vT.has(t)}let vy=t=>!Dc(t);function xT(t){t&&(vy=e=>e.startsWith("on")?!Dc(e):t(e))}try{xT(require("@emotion/is-prop-valid").default)}catch{}function _T(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(vy(r)||n===!0&&Dc(r)||!e&&!Dc(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function $g(t,e,n){return typeof t=="string"?t:Pe.transform(e+n*t)}function yT(t,e,n){const i=$g(e,t.x,t.width),r=$g(n,t.y,t.height);return`${i} ${r}`}const ST={offset:"stroke-dashoffset",array:"stroke-dasharray"},MT={offset:"strokeDashoffset",array:"strokeDasharray"};function ET(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?ST:MT;t[s.offset]=Pe.transform(-i);const o=Pe.transform(e),a=Pe.transform(n);t[s.array]=`${o} ${a}`}function jp(t,{attrX:e,attrY:n,attrScale:i,originX:r,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},u,d,f){if(Gp(t,c,u,f),d){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:p,style:g,dimensions:y}=t;p.transform&&(y&&(g.transform=p.transform),delete p.transform),y&&(r!==void 0||s!==void 0||g.transform)&&(g.transformOrigin=yT(y,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(p.x=e),n!==void 0&&(p.y=n),i!==void 0&&(p.scale=i),o!==void 0&&ET(p,o,a,l,!1)}const xy=()=>({...Wp(),attrs:{}}),Xp=t=>typeof t=="string"&&t.toLowerCase()==="svg";function TT(t,e,n,i){const r=re.useMemo(()=>{const s=xy();return jp(s,e,{enableHardwareAcceleration:!1},Xp(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};gy(s,t.style,t),r.style={...s,...r.style}}return r}function wT(t=!1){return(n,i,r,{latestValues:s},o)=>{const l=(Hp(n)?TT:gT)(i,s,o,n),u={..._T(i,typeof n=="string",t),...l,ref:r},{children:d}=i,f=re.useMemo(()=>Mn(d)?d.get():d,[d]);return re.createElement(n,{...u,children:f})}}function _y(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const yy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Sy(t,e,n,i){_y(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(yy.has(r)?r:kp(r),e.attrs[r])}function Yp(t,e){const{style:n}=t,i={};for(const r in n)(Mn(n[r])||e.style&&Mn(e.style[r])||fy(r,t))&&(i[r]=n[r]);return i}function My(t,e){const n=Yp(t,e);for(const i in t)if(Mn(t[i])||Mn(e[i])){const r=za.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;n[r]=t[i]}return n}function $p(t,e,n,i={},r={}){return typeof e=="function"&&(e=e(n!==void 0?n:t.custom,i,r)),typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"&&(e=e(n!==void 0?n:t.custom,i,r)),e}function qp(t){const e=re.useRef(null);return e.current===null&&(e.current=t()),e.current}const Lc=t=>Array.isArray(t),AT=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),CT=t=>Lc(t)?t[t.length-1]||0:t;function Ql(t){const e=Mn(t)?t.get():t;return AT(e)?e.toValue():e}function bT({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:n},i,r,s){const o={latestValues:RT(i,r,s,t),renderState:e()};return n&&(o.mount=a=>n(i,a,o)),o}const Ey=t=>(e,n)=>{const i=re.useContext(au),r=re.useContext(lu),s=()=>bT(t,e,i,r);return n?s():qp(s)};function RT(t,e,n,i){const r={},s=i(t,{});for(const f in s)r[f]=Ql(s[f]);let{initial:o,animate:a}=t;const l=du(t),c=cy(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const d=u?a:o;return d&&typeof d!="boolean"&&!fu(d)&&(Array.isArray(d)?d:[d]).forEach(p=>{const g=$p(t,p);if(!g)return;const{transitionEnd:y,transition:v,...h}=g;for(const m in h){let x=h[m];if(Array.isArray(x)){const M=u?x.length-1:0;x=x[M]}x!==null&&(r[m]=x)}for(const m in y)r[m]=y[m]}),r}const At=t=>t;class qg{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const n=this.order.indexOf(e);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}function PT(t){let e=new qg,n=new qg,i=0,r=!1,s=!1;const o=new WeakSet,a={schedule:(l,c=!1,u=!1)=>{const d=u&&r,f=d?e:n;return c&&o.add(l),f.add(l)&&d&&r&&(i=e.order.length),l},cancel:l=>{n.remove(l),o.delete(l)},process:l=>{if(r){s=!0;return}if(r=!0,[e,n]=[n,e],n.clear(),i=e.order.length,i)for(let c=0;c<i;c++){const u=e.order[c];u(l),o.has(u)&&(a.schedule(u),t())}r=!1,s&&(s=!1,a.process(l))}};return a}const pl=["prepare","read","update","preRender","render","postRender"],DT=40;function LT(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=pl.reduce((d,f)=>(d[f]=PT(()=>n=!0),d),{}),o=d=>s[d].process(r),a=()=>{const d=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(d-r.timestamp,DT),1),r.timestamp=d,r.isProcessing=!0,pl.forEach(o),r.isProcessing=!1,n&&e&&(i=!1,t(a))},l=()=>{n=!0,i=!0,r.isProcessing||t(a)};return{schedule:pl.reduce((d,f)=>{const p=s[f];return d[f]=(g,y=!1,v=!1)=>(n||l(),p.schedule(g,y,v)),d},{}),cancel:d=>pl.forEach(f=>s[f].cancel(d)),state:r,steps:s}}const{schedule:dt,cancel:Yi,state:en,steps:Yu}=LT(typeof requestAnimationFrame<"u"?requestAnimationFrame:At,!0),NT={useVisualState:Ey({scrapeMotionValuesFromProps:My,createRenderState:xy,onMount:(t,e,{renderState:n,latestValues:i})=>{dt.read(()=>{try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),dt.render(()=>{jp(n,i,{enableHardwareAcceleration:!1},Xp(e.tagName),t.transformTemplate),Sy(e,n)})}})},IT={useVisualState:Ey({scrapeMotionValuesFromProps:Yp,createRenderState:Wp})};function UT(t,{forwardMotionProps:e=!1},n,i){return{...Hp(t)?NT:IT,preloadedFeatures:n,useRender:wT(e),createVisualElement:i,Component:t}}function Fi(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}const Ty=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function pu(t,e="page"){return{point:{x:t[e+"X"],y:t[e+"Y"]}}}const FT=t=>e=>Ty(e)&&t(e,pu(e));function Bi(t,e,n,i){return Fi(t,e,FT(n),i)}const OT=(t,e)=>n=>e(t(n)),wr=(...t)=>t.reduce(OT);function wy(t){let e=null;return()=>{const n=()=>{e=null};return e===null?(e=t,n):!1}}const Kg=wy("dragHorizontal"),Zg=wy("dragVertical");function Ay(t){let e=!1;if(t==="y")e=Zg();else if(t==="x")e=Kg();else{const n=Kg(),i=Zg();n&&i?e=()=>{n(),i()}:(n&&n(),i&&i())}return e}function Cy(){const t=Ay(!0);return t?(t(),!1):!0}class Fr{constructor(e){this.isMounted=!1,this.node=e}update(){}}function Qg(t,e){const n="pointer"+(e?"enter":"leave"),i="onHover"+(e?"Start":"End"),r=(s,o)=>{if(s.pointerType==="touch"||Cy())return;const a=t.getProps();t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",e),a[i]&&dt.update(()=>a[i](s,o))};return Bi(t.current,n,r,{passive:!t.getProps()[i]})}class kT extends Fr{mount(){this.unmount=wr(Qg(this.node,!0),Qg(this.node,!1))}unmount(){}}class BT extends Fr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=wr(Fi(this.node.current,"focus",()=>this.onFocus()),Fi(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const by=(t,e)=>e?t===e?!0:by(t,e.parentElement):!1;function $u(t,e){if(!e)return;const n=new PointerEvent("pointer"+t);e(n,pu(n))}class VT extends Fr{constructor(){super(...arguments),this.removeStartListeners=At,this.removeEndListeners=At,this.removeAccessibleListeners=At,this.startPointerPress=(e,n)=>{if(this.isPressing)return;this.removeEndListeners();const i=this.node.getProps(),s=Bi(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:c,onTapCancel:u,globalTapTarget:d}=this.node.getProps();dt.update(()=>{!d&&!by(this.node.current,a.target)?u&&u(a,l):c&&c(a,l)})},{passive:!(i.onTap||i.onPointerUp)}),o=Bi(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(i.onTapCancel||i.onPointerCancel)});this.removeEndListeners=wr(s,o),this.startPress(e,n)},this.startAccessiblePress=()=>{const e=s=>{if(s.key!=="Enter"||this.isPressing)return;const o=a=>{a.key!=="Enter"||!this.checkPressEnd()||$u("up",(l,c)=>{const{onTap:u}=this.node.getProps();u&&dt.update(()=>u(l,c))})};this.removeEndListeners(),this.removeEndListeners=Fi(this.node.current,"keyup",o),$u("down",(a,l)=>{this.startPress(a,l)})},n=Fi(this.node.current,"keydown",e),i=()=>{this.isPressing&&$u("cancel",(s,o)=>this.cancelPress(s,o))},r=Fi(this.node.current,"blur",i);this.removeAccessibleListeners=wr(n,r)}}startPress(e,n){this.isPressing=!0;const{onTapStart:i,whileTap:r}=this.node.getProps();r&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),i&&dt.update(()=>i(e,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Cy()}cancelPress(e,n){if(!this.checkPressEnd())return;const{onTapCancel:i}=this.node.getProps();i&&dt.update(()=>i(e,n))}mount(){const e=this.node.getProps(),n=Bi(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),i=Fi(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=wr(n,i)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const kd=new WeakMap,qu=new WeakMap,zT=t=>{const e=kd.get(t.target);e&&e(t)},HT=t=>{t.forEach(zT)};function GT({root:t,...e}){const n=t||document;qu.has(n)||qu.set(n,{});const i=qu.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(HT,{root:t,...e})),i[r]}function WT(t,e,n){const i=GT(e);return kd.set(t,n),i.observe(t),()=>{kd.delete(t),i.unobserve(t)}}const jT={some:0,all:1};class XT extends Fr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:jT[r]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:d}=this.node.getProps(),f=c?u:d;f&&f(l)};return WT(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(YT(e,n))&&this.startObserver()}unmount(){}}function YT({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const $T={inView:{Feature:XT},tap:{Feature:VT},focus:{Feature:BT},hover:{Feature:kT}};function Ry(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function qT(t){const e={};return t.values.forEach((n,i)=>e[i]=n.get()),e}function KT(t){const e={};return t.values.forEach((n,i)=>e[i]=n.getVelocity()),e}function mu(t,e,n){const i=t.getProps();return $p(i,e,n!==void 0?n:i.custom,qT(t),KT(t))}let ZT=At,Kp=At;const Ar=t=>t*1e3,Vi=t=>t/1e3,QT={current:!1},Py=t=>Array.isArray(t)&&typeof t[0]=="number";function Dy(t){return!!(!t||typeof t=="string"&&Ly[t]||Py(t)||Array.isArray(t)&&t.every(Dy))}const Ko=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,Ly={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ko([0,.65,.55,1]),circOut:Ko([.55,0,1,.45]),backIn:Ko([.31,.01,.66,-.59]),backOut:Ko([.33,1.53,.69,.99])};function Ny(t){if(t)return Py(t)?Ko(t):Array.isArray(t)?t.map(Ny):Ly[t]}function JT(t,e,n,{delay:i=0,duration:r,repeat:s=0,repeatType:o="loop",ease:a,times:l}={}){const c={[e]:n};l&&(c.offset=l);const u=Ny(a);return Array.isArray(u)&&(c.easing=u),t.animate(c,{delay:i,duration:r,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}function ew(t,{repeat:e,repeatType:n="loop"}){const i=e&&n!=="loop"&&e%2===1?0:t.length-1;return t[i]}const Iy=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,tw=1e-7,nw=12;function iw(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=Iy(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>tw&&++a<nw);return o}function Wa(t,e,n,i){if(t===e&&n===i)return At;const r=s=>iw(s,0,1,t,n);return s=>s===0||s===1?s:Iy(r(s),e,i)}const rw=Wa(.42,0,1,1),sw=Wa(0,0,.58,1),Uy=Wa(.42,0,.58,1),ow=t=>Array.isArray(t)&&typeof t[0]!="number",Fy=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,Oy=t=>e=>1-t(1-e),Zp=t=>1-Math.sin(Math.acos(t)),ky=Oy(Zp),aw=Fy(Zp),By=Wa(.33,1.53,.69,.99),Qp=Oy(By),lw=Fy(Qp),cw=t=>(t*=2)<1?.5*Qp(t):.5*(2-Math.pow(2,-10*(t-1))),uw={linear:At,easeIn:rw,easeInOut:Uy,easeOut:sw,circIn:Zp,circInOut:aw,circOut:ky,backIn:Qp,backInOut:lw,backOut:By,anticipate:cw},Jg=t=>{if(Array.isArray(t)){Kp(t.length===4);const[e,n,i,r]=t;return Wa(e,n,i,r)}else if(typeof t=="string")return uw[t];return t},Jp=(t,e)=>n=>!!(Ha(n)&&fT.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),Vy=(t,e,n)=>i=>{if(!Ha(i))return i;const[r,s,o,a]=i.match(hu);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},fw=t=>Rr(0,255,t),Ku={...gs,transform:t=>Math.round(fw(t))},es={test:Jp("rgb","red"),parse:Vy("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+Ku.transform(t)+", "+Ku.transform(e)+", "+Ku.transform(n)+", "+ca(la.transform(i))+")"};function dw(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Bd={test:Jp("#"),parse:dw,transform:es.transform},$s={test:Jp("hsl","hue"),parse:Vy("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+_i.transform(ca(e))+", "+_i.transform(ca(n))+", "+ca(la.transform(i))+")"},an={test:t=>es.test(t)||Bd.test(t)||$s.test(t),parse:t=>es.test(t)?es.parse(t):$s.test(t)?$s.parse(t):Bd.parse(t),transform:t=>Ha(t)?t:t.hasOwnProperty("red")?es.transform(t):$s.transform(t)},yt=(t,e,n)=>-n*t+n*e+t;function Zu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function hw({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=Zu(l,a,t+1/3),s=Zu(l,a,t),o=Zu(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}const Qu=(t,e,n)=>{const i=t*t;return Math.sqrt(Math.max(0,n*(e*e-i)+i))},pw=[Bd,es,$s],mw=t=>pw.find(e=>e.test(t));function e0(t){const e=mw(t);let n=e.parse(t);return e===$s&&(n=hw(n)),n}const zy=(t,e)=>{const n=e0(t),i=e0(e),r={...n};return s=>(r.red=Qu(n.red,i.red,s),r.green=Qu(n.green,i.green,s),r.blue=Qu(n.blue,i.blue,s),r.alpha=yt(n.alpha,i.alpha,s),es.transform(r))};function gw(t){var e,n;return isNaN(t)&&Ha(t)&&(((e=t.match(hu))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(py))===null||n===void 0?void 0:n.length)||0)>0}const Hy={regex:cT,countKey:"Vars",token:"${v}",parse:At},Gy={regex:py,countKey:"Colors",token:"${c}",parse:an.parse},Wy={regex:hu,countKey:"Numbers",token:"${n}",parse:gs.parse};function Ju(t,{regex:e,countKey:n,token:i,parse:r}){const s=t.tokenised.match(e);s&&(t["num"+n]=s.length,t.tokenised=t.tokenised.replace(e,i),t.values.push(...s.map(r)))}function Nc(t){const e=t.toString(),n={value:e,tokenised:e,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&Ju(n,Hy),Ju(n,Gy),Ju(n,Wy),n}function jy(t){return Nc(t).values}function Xy(t){const{values:e,numColors:n,numVars:i,tokenised:r}=Nc(t),s=e.length;return o=>{let a=r;for(let l=0;l<s;l++)l<i?a=a.replace(Hy.token,o[l]):l<i+n?a=a.replace(Gy.token,an.transform(o[l])):a=a.replace(Wy.token,ca(o[l]));return a}}const vw=t=>typeof t=="number"?0:t;function xw(t){const e=jy(t);return Xy(t)(e.map(vw))}const Pr={test:gw,parse:jy,createTransformer:Xy,getAnimatableNone:xw},Yy=(t,e)=>n=>`${n>0?e:t}`;function $y(t,e){return typeof t=="number"?n=>yt(t,e,n):an.test(t)?zy(t,e):t.startsWith("var(")?Yy(t,e):Ky(t,e)}const qy=(t,e)=>{const n=[...t],i=n.length,r=t.map((s,o)=>$y(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}},_w=(t,e)=>{const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=$y(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}},Ky=(t,e)=>{const n=Pr.createTransformer(e),i=Nc(t),r=Nc(e);return i.numVars===r.numVars&&i.numColors===r.numColors&&i.numNumbers>=r.numNumbers?wr(qy(i.values,r.values),n):Yy(t,e)},Da=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},t0=(t,e)=>n=>yt(t,e,n);function yw(t){return typeof t=="number"?t0:typeof t=="string"?an.test(t)?zy:Ky:Array.isArray(t)?qy:typeof t=="object"?_w:t0}function Sw(t,e,n){const i=[],r=n||yw(t[0]),s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||At:e;a=wr(l,a)}i.push(a)}return i}function Zy(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(Kp(s===e.length),s===1)return()=>e[0];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const o=Sw(e,i,r),a=o.length,l=c=>{let u=0;if(a>1)for(;u<t.length-2&&!(c<t[u+1]);u++);const d=Da(t[u],t[u+1],c);return o[u](d)};return n?c=>l(Rr(t[0],t[s-1],c)):l}function Mw(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=Da(0,e,i);t.push(yt(n,1,r))}}function Ew(t){const e=[0];return Mw(e,t.length-1),e}function Tw(t,e){return t.map(n=>n*e)}function ww(t,e){return t.map(()=>e||Uy).splice(0,t.length-1)}function Ic({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=ow(i)?i.map(Jg):Jg(i),s={done:!1,value:e[0]},o=Tw(n&&n.length===e.length?n:Ew(e),t),a=Zy(o,e,{ease:Array.isArray(r)?r:ww(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}function Qy(t,e){return e?t*(1e3/e):0}const Aw=5;function Jy(t,e,n){const i=Math.max(e-Aw,0);return Qy(n-t(i),e-i)}const ef=.001,Cw=.01,n0=10,bw=.05,Rw=1;function Pw({duration:t=800,bounce:e=.25,velocity:n=0,mass:i=1}){let r,s;ZT(t<=Ar(n0));let o=1-e;o=Rr(bw,Rw,o),t=Rr(Cw,n0,Vi(t)),o<1?(r=c=>{const u=c*o,d=u*t,f=u-n,p=Vd(c,o),g=Math.exp(-d);return ef-f/p*g},s=c=>{const d=c*o*t,f=d*n+n,p=Math.pow(o,2)*Math.pow(c,2)*t,g=Math.exp(-d),y=Vd(Math.pow(c,2),o);return(-r(c)+ef>0?-1:1)*((f-p)*g)/y}):(r=c=>{const u=Math.exp(-c*t),d=(c-n)*t+1;return-ef+u*d},s=c=>{const u=Math.exp(-c*t),d=(n-c)*(t*t);return u*d});const a=5/t,l=Lw(r,s,a);if(t=Ar(t),isNaN(l))return{stiffness:100,damping:10,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const Dw=12;function Lw(t,e,n){let i=n;for(let r=1;r<Dw;r++)i=i-t(i)/e(i);return i}function Vd(t,e){return t*Math.sqrt(1-e*e)}const Nw=["duration","bounce"],Iw=["stiffness","damping","mass"];function i0(t,e){return e.some(n=>t[n]!==void 0)}function Uw(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!i0(t,Iw)&&i0(t,Nw)){const n=Pw(t);e={...e,...n,mass:1},e.isResolvedFromDuration=!0}return e}function eS({keyframes:t,restDelta:e,restSpeed:n,...i}){const r=t[0],s=t[t.length-1],o={done:!1,value:r},{stiffness:a,damping:l,mass:c,duration:u,velocity:d,isResolvedFromDuration:f}=Uw({...i,velocity:-Vi(i.velocity||0)}),p=d||0,g=l/(2*Math.sqrt(a*c)),y=s-r,v=Vi(Math.sqrt(a/c)),h=Math.abs(y)<5;n||(n=h?.01:2),e||(e=h?.005:.5);let m;if(g<1){const x=Vd(v,g);m=M=>{const w=Math.exp(-g*v*M);return s-w*((p+g*v*y)/x*Math.sin(x*M)+y*Math.cos(x*M))}}else if(g===1)m=x=>s-Math.exp(-v*x)*(y+(p+v*y)*x);else{const x=v*Math.sqrt(g*g-1);m=M=>{const w=Math.exp(-g*v*M),T=Math.min(x*M,300);return s-w*((p+g*v*y)*Math.sinh(T)+x*y*Math.cosh(T))/x}}return{calculatedDuration:f&&u||null,next:x=>{const M=m(x);if(f)o.done=x>=u;else{let w=p;x!==0&&(g<1?w=Jy(m,x,M):w=0);const T=Math.abs(w)<=n,b=Math.abs(s-M)<=e;o.done=T&&b}return o.value=o.done?s:M,o}}}function r0({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const d=t[0],f={done:!1,value:d},p=_=>a!==void 0&&_<a||l!==void 0&&_>l,g=_=>a===void 0?l:l===void 0||Math.abs(a-_)<Math.abs(l-_)?a:l;let y=n*e;const v=d+y,h=o===void 0?v:o(v);h!==v&&(y=h-d);const m=_=>-y*Math.exp(-_/i),x=_=>h+m(_),M=_=>{const C=m(_),P=x(_);f.done=Math.abs(C)<=c,f.value=f.done?h:P};let w,T;const b=_=>{p(f.value)&&(w=_,T=eS({keyframes:[f.value,g(f.value)],velocity:Jy(x,_,f.value),damping:r,stiffness:s,restDelta:c,restSpeed:u}))};return b(0),{calculatedDuration:null,next:_=>{let C=!1;return!T&&w===void 0&&(C=!0,M(_),b(_)),w!==void 0&&_>w?T.next(_-w):(!C&&M(_),f)}}}const Fw=t=>{const e=({timestamp:n})=>t(n);return{start:()=>dt.update(e,!0),stop:()=>Yi(e),now:()=>en.isProcessing?en.timestamp:performance.now()}},s0=2e4;function o0(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<s0;)e+=n,i=t.next(e);return e>=s0?1/0:e}const Ow={decay:r0,inertia:r0,tween:Ic,keyframes:Ic,spring:eS};function Uc({autoplay:t=!0,delay:e=0,driver:n=Fw,keyframes:i,type:r="keyframes",repeat:s=0,repeatDelay:o=0,repeatType:a="loop",onPlay:l,onStop:c,onComplete:u,onUpdate:d,...f}){let p=1,g=!1,y,v;const h=()=>{v=new Promise(ee=>{y=ee})};h();let m;const x=Ow[r]||Ic;let M;x!==Ic&&typeof i[0]!="number"&&(M=Zy([0,100],i,{clamp:!1}),i=[0,100]);const w=x({...f,keyframes:i});let T;a==="mirror"&&(T=x({...f,keyframes:[...i].reverse(),velocity:-(f.velocity||0)}));let b="idle",_=null,C=null,P=null;w.calculatedDuration===null&&s&&(w.calculatedDuration=o0(w));const{calculatedDuration:R}=w;let L=1/0,U=1/0;R!==null&&(L=R+o,U=L*(s+1)-o);let O=0;const D=ee=>{if(C===null)return;p>0&&(C=Math.min(C,ee)),p<0&&(C=Math.min(ee-U/p,C)),_!==null?O=_:O=Math.round(ee-C)*p;const ce=O-e*(p>=0?1:-1),Ue=p>=0?ce<0:ce>U;O=Math.max(ce,0),b==="finished"&&_===null&&(O=U);let ze=O,De=w;if(s){const Re=Math.min(O,U)/L;let Le=Math.floor(Re),Ce=Re%1;!Ce&&Re>=1&&(Ce=1),Ce===1&&Le--,Le=Math.min(Le,s+1),!!(Le%2)&&(a==="reverse"?(Ce=1-Ce,o&&(Ce-=o/L)):a==="mirror"&&(De=T)),ze=Rr(0,1,Ce)*L}const q=Ue?{done:!1,value:i[0]}:De.next(ze);M&&(q.value=M(q.value));let{done:he}=q;!Ue&&R!==null&&(he=p>=0?O>=U:O<=0);const le=_===null&&(b==="finished"||b==="running"&&he);return d&&d(q.value),le&&V(),q},k=()=>{m&&m.stop(),m=void 0},B=()=>{b="idle",k(),y(),h(),C=P=null},V=()=>{b="finished",u&&u(),k(),y()},Y=()=>{if(g)return;m||(m=n(D));const ee=m.now();l&&l(),_!==null?C=ee-_:(!C||b==="finished")&&(C=ee),b==="finished"&&h(),P=C,_=null,b="running",m.start()};t&&Y();const K={then(ee,ce){return v.then(ee,ce)},get time(){return Vi(O)},set time(ee){ee=Ar(ee),O=ee,_!==null||!m||p===0?_=ee:C=m.now()-ee/p},get duration(){const ee=w.calculatedDuration===null?o0(w):w.calculatedDuration;return Vi(ee)},get speed(){return p},set speed(ee){ee===p||!m||(p=ee,K.time=Vi(O))},get state(){return b},play:Y,pause:()=>{b="paused",_=O},stop:()=>{g=!0,b!=="idle"&&(b="idle",c&&c(),B())},cancel:()=>{P!==null&&D(P),B()},complete:()=>{b="finished"},sample:ee=>(C=0,D(ee))};return K}function kw(t){let e;return()=>(e===void 0&&(e=t()),e)}const Bw=kw(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Vw=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),ml=10,zw=2e4,Hw=(t,e)=>e.type==="spring"||t==="backgroundColor"||!Dy(e.ease);function Gw(t,e,{onUpdate:n,onComplete:i,...r}){if(!(Bw()&&Vw.has(e)&&!r.repeatDelay&&r.repeatType!=="mirror"&&r.damping!==0&&r.type!=="inertia"))return!1;let o=!1,a,l,c=!1;const u=()=>{l=new Promise(x=>{a=x})};u();let{keyframes:d,duration:f=300,ease:p,times:g}=r;if(Hw(e,r)){const x=Uc({...r,repeat:0,delay:0});let M={done:!1,value:d[0]};const w=[];let T=0;for(;!M.done&&T<zw;)M=x.sample(T),w.push(M.value),T+=ml;g=void 0,d=w,f=T-ml,p="linear"}const y=JT(t.owner.current,e,d,{...r,duration:f,ease:p,times:g}),v=()=>{c=!1,y.cancel()},h=()=>{c=!0,dt.update(v),a(),u()};return y.onfinish=()=>{c||(t.set(ew(d,r)),i&&i(),h())},{then(x,M){return l.then(x,M)},attachTimeline(x){return y.timeline=x,y.onfinish=null,At},get time(){return Vi(y.currentTime||0)},set time(x){y.currentTime=Ar(x)},get speed(){return y.playbackRate},set speed(x){y.playbackRate=x},get duration(){return Vi(f)},play:()=>{o||(y.play(),Yi(v))},pause:()=>y.pause(),stop:()=>{if(o=!0,y.playState==="idle")return;const{currentTime:x}=y;if(x){const M=Uc({...r,autoplay:!1});t.setWithVelocity(M.sample(x-ml).value,M.sample(x).value,ml)}h()},complete:()=>{c||y.finish()},cancel:h}}function Ww({keyframes:t,delay:e,onUpdate:n,onComplete:i}){const r=()=>(n&&n(t[t.length-1]),i&&i(),{time:0,speed:1,duration:0,play:At,pause:At,stop:At,then:s=>(s(),Promise.resolve()),cancel:At,complete:At});return e?Uc({keyframes:[0,1],duration:0,delay:e,onComplete:r}):r()}const jw={type:"spring",stiffness:500,damping:25,restSpeed:10},Xw=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),Yw={type:"keyframes",duration:.8},$w={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},qw=(t,{keyframes:e})=>e.length>2?Yw:ms.has(t)?t.startsWith("scale")?Xw(e[1]):jw:$w,zd=(t,e)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Pr.test(e)||e==="0")&&!e.startsWith("url(")),Kw=new Set(["brightness","contrast","saturate","opacity"]);function Zw(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(hu)||[];if(!i)return t;const r=n.replace(i,"");let s=Kw.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const Qw=/([a-z-]*)\(.*?\)/g,Hd={...Pr,getAnimatableNone:t=>{const e=t.match(Qw);return e?e.map(Zw).join(" "):t}},Jw={...my,color:an,backgroundColor:an,outlineColor:an,fill:an,stroke:an,borderColor:an,borderTopColor:an,borderRightColor:an,borderBottomColor:an,borderLeftColor:an,filter:Hd,WebkitFilter:Hd},em=t=>Jw[t];function tS(t,e){let n=em(t);return n!==Hd&&(n=Pr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const nS=t=>/^0[^.\s]+$/.test(t);function eA(t){if(typeof t=="number")return t===0;if(t!==null)return t==="none"||t==="0"||nS(t)}function tA(t,e,n,i){const r=zd(e,n);let s;Array.isArray(n)?s=[...n]:s=[null,n];const o=i.from!==void 0?i.from:t.get();let a;const l=[];for(let c=0;c<s.length;c++)s[c]===null&&(s[c]=c===0?o:s[c-1]),eA(s[c])&&l.push(c),typeof s[c]=="string"&&s[c]!=="none"&&s[c]!=="0"&&(a=s[c]);if(r&&l.length&&a)for(let c=0;c<l.length;c++){const u=l[c];s[u]=tS(e,a)}return s}function nA({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}function tm(t,e){return t[e]||t.default||t}const iA={skipAnimations:!1},nm=(t,e,n,i={})=>r=>{const s=tm(i,t)||{},o=s.delay||i.delay||0;let{elapsed:a=0}=i;a=a-Ar(o);const l=tA(e,t,n,s),c=l[0],u=l[l.length-1],d=zd(t,c),f=zd(t,u);let p={keyframes:l,velocity:e.getVelocity(),ease:"easeOut",...s,delay:-a,onUpdate:g=>{e.set(g),s.onUpdate&&s.onUpdate(g)},onComplete:()=>{r(),s.onComplete&&s.onComplete()}};if(nA(s)||(p={...p,...qw(t,p)}),p.duration&&(p.duration=Ar(p.duration)),p.repeatDelay&&(p.repeatDelay=Ar(p.repeatDelay)),!d||!f||QT.current||s.type===!1||iA.skipAnimations)return Ww(p);if(!i.isHandoff&&e.owner&&e.owner.current instanceof HTMLElement&&!e.owner.getProps().onUpdate){const g=Gw(e,t,p);if(g)return g}return Uc(p)};function Fc(t){return!!(Mn(t)&&t.add)}const iS=t=>/^\-?\d*\.?\d+$/.test(t);function im(t,e){t.indexOf(e)===-1&&t.push(e)}function rm(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class sm{constructor(){this.subscriptions=[]}add(e){return im(this.subscriptions,e),()=>rm(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const rA=t=>!isNaN(parseFloat(t));class sA{constructor(e,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(i,r=!0)=>{this.prev=this.current,this.current=i;const{delta:s,timestamp:o}=en;this.lastUpdated!==o&&(this.timeDelta=s,this.lastUpdated=o,dt.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>dt.postRender(this.velocityCheck),this.velocityCheck=({timestamp:i})=>{i!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=rA(this.current),this.owner=n.owner}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new sm);const i=this.events[e].add(n);return e==="change"?()=>{i(),dt.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=e,this.timeDelta=i}jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Qy(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ho(t,e){return new sA(t,e)}const rS=t=>e=>e.test(t),oA={test:t=>t==="auto",parse:t=>t},sS=[gs,Pe,_i,ar,hT,dT,oA],Uo=t=>sS.find(rS(t)),aA=[...sS,an,Pr],lA=t=>aA.find(rS(t));function cA(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,ho(n))}function om(t,e){const n=mu(t,e);let{transitionEnd:i={},transition:r={},...s}=n?t.makeTargetAnimatable(n,!1):{};s={...s,...i};for(const o in s){const a=CT(s[o]);cA(t,o,a)}}function Gd(t,e){[...e].reverse().forEach(i=>{const r=t.getVariant(i);r&&om(t,r),t.variantChildren&&t.variantChildren.forEach(s=>{Gd(s,e)})})}function uA(t,e){if(Array.isArray(e))return Gd(t,e);if(typeof e=="string")return Gd(t,[e]);om(t,e)}function fA(t,e,n){var i,r;const s=Object.keys(e).filter(a=>!t.hasValue(a)),o=s.length;if(o)for(let a=0;a<o;a++){const l=s[a],c=e[l];let u=null;Array.isArray(c)&&(u=c[0]),u===null&&(u=(r=(i=n[l])!==null&&i!==void 0?i:t.readValue(l))!==null&&r!==void 0?r:e[l]),u!=null&&(typeof u=="string"&&(iS(u)||nS(u))?u=parseFloat(u):!lA(u)&&Pr.test(c)&&(u=tS(l,c)),t.addValue(l,ho(u,{owner:t})),n[l]===void 0&&(n[l]=u),u!==null&&t.setBaseTarget(l,u))}}function dA(t,e){return e?(e[t]||e.default||e).from:void 0}function hA(t,e,n){const i={};for(const r in t){const s=dA(r,e);if(s!==void 0)i[r]=s;else{const o=n.getValue(r);o&&(i[r]=o.get())}}return i}function pA({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function mA(t,e){const n=t.get();if(Array.isArray(e)){for(let i=0;i<e.length;i++)if(e[i]!==n)return!0}else return n!==e}function oS(t,e,{delay:n=0,transitionOverride:i,type:r}={}){let{transition:s=t.getDefaultTransition(),transitionEnd:o,...a}=t.makeTargetAnimatable(e);const l=t.getValue("willChange");i&&(s=i);const c=[],u=r&&t.animationState&&t.animationState.getState()[r];for(const d in a){const f=t.getValue(d),p=a[d];if(!f||p===void 0||u&&pA(u,d))continue;const g={delay:n,elapsed:0,...tm(s||{},d)};if(window.HandoffAppearAnimations){const h=t.getProps()[ly];if(h){const m=window.HandoffAppearAnimations(h,d,f,dt);m!==null&&(g.elapsed=m,g.isHandoff=!0)}}let y=!g.isHandoff&&!mA(f,p);if(g.type==="spring"&&(f.getVelocity()||g.velocity)&&(y=!1),f.animation&&(y=!1),y)continue;f.start(nm(d,f,p,t.shouldReduceMotion&&ms.has(d)?{type:!1}:g));const v=f.animation;Fc(l)&&(l.add(d),v.then(()=>l.remove(d))),c.push(v)}return o&&Promise.all(c).then(()=>{o&&om(t,o)}),c}function Wd(t,e,n={}){const i=mu(t,e,n.custom);let{transition:r=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);const s=i?()=>Promise.all(oS(t,i,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(l=0)=>{const{delayChildren:c=0,staggerChildren:u,staggerDirection:d}=r;return gA(t,e,c+l,u,d,n)}:()=>Promise.resolve(),{when:a}=r;if(a){const[l,c]=a==="beforeChildren"?[s,o]:[o,s];return l().then(()=>c())}else return Promise.all([s(),o(n.delay)])}function gA(t,e,n=0,i=0,r=1,s){const o=[],a=(t.variantChildren.size-1)*i,l=r===1?(c=0)=>c*i:(c=0)=>a-c*i;return Array.from(t.variantChildren).sort(vA).forEach((c,u)=>{c.notify("AnimationStart",e),o.push(Wd(c,e,{...s,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(o)}function vA(t,e){return t.sortNodePosition(e)}function aS(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>Wd(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=Wd(t,e,n);else{const r=typeof e=="function"?mu(t,e,n.custom):e;i=Promise.all(oS(t,r,n))}return i.then(()=>t.notify("AnimationComplete",e))}const xA=[...Bp].reverse(),_A=Bp.length;function yA(t){return e=>Promise.all(e.map(({animation:n,options:i})=>aS(t,n,i)))}function SA(t){let e=yA(t);const n=EA();let i=!0;const r=(l,c)=>{const u=mu(t,c);if(u){const{transition:d,transitionEnd:f,...p}=u;l={...l,...p,...f}}return l};function s(l){e=l(t)}function o(l,c){const u=t.getProps(),d=t.getVariantContext(!0)||{},f=[],p=new Set;let g={},y=1/0;for(let h=0;h<_A;h++){const m=xA[h],x=n[m],M=u[m]!==void 0?u[m]:d[m],w=Ra(M),T=m===c?x.isActive:null;T===!1&&(y=h);let b=M===d[m]&&M!==u[m]&&w;if(b&&i&&t.manuallyAnimateOnMount&&(b=!1),x.protectedKeys={...g},!x.isActive&&T===null||!M&&!x.prevProp||fu(M)||typeof M=="boolean")continue;let C=MA(x.prevProp,M)||m===c&&x.isActive&&!b&&w||h>y&&w,P=!1;const R=Array.isArray(M)?M:[M];let L=R.reduce(r,{});T===!1&&(L={});const{prevResolvedValues:U={}}=x,O={...U,...L},D=k=>{C=!0,p.has(k)&&(P=!0,p.delete(k)),x.needsAnimating[k]=!0};for(const k in O){const B=L[k],V=U[k];if(g.hasOwnProperty(k))continue;let Y=!1;Lc(B)&&Lc(V)?Y=!Ry(B,V):Y=B!==V,Y?B!==void 0?D(k):p.add(k):B!==void 0&&p.has(k)?D(k):x.protectedKeys[k]=!0}x.prevProp=M,x.prevResolvedValues=L,x.isActive&&(g={...g,...L}),i&&t.blockInitialAnimation&&(C=!1),C&&(!b||P)&&f.push(...R.map(k=>({animation:k,options:{type:m,...l}})))}if(p.size){const h={};p.forEach(m=>{const x=t.getBaseTarget(m);x!==void 0&&(h[m]=x)}),f.push({animation:h})}let v=!!f.length;return i&&(u.initial===!1||u.initial===u.animate)&&!t.manuallyAnimateOnMount&&(v=!1),i=!1,v?e(f):Promise.resolve()}function a(l,c,u){var d;if(n[l].isActive===c)return Promise.resolve();(d=t.variantChildren)===null||d===void 0||d.forEach(p=>{var g;return(g=p.animationState)===null||g===void 0?void 0:g.setActive(l,c)}),n[l].isActive=c;const f=o(u,l);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n}}function MA(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!Ry(e,t):!1}function kr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function EA(){return{animate:kr(!0),whileInView:kr(),whileHover:kr(),whileTap:kr(),whileDrag:kr(),whileFocus:kr(),exit:kr()}}class TA extends Fr{constructor(e){super(e),e.animationState||(e.animationState=SA(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),fu(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let wA=0;class AA extends Fr{constructor(){super(...arguments),this.id=wA++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n,custom:i}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const s=this.node.animationState.setActive("exit",!e,{custom:i??this.node.getProps().custom});n&&!e&&s.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const CA={animation:{Feature:TA},exit:{Feature:AA}},a0=(t,e)=>Math.abs(t-e);function bA(t,e){const n=a0(t.x,e.x),i=a0(t.y,e.y);return Math.sqrt(n**2+i**2)}class lS{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=nf(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,p=bA(d.offset,{x:0,y:0})>=3;if(!f&&!p)return;const{point:g}=d,{timestamp:y}=en;this.history.push({...g,timestamp:y});const{onStart:v,onMove:h}=this.handlers;f||(v&&v(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),h&&h(this.lastMoveEvent,d)},this.handlePointerMove=(d,f)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=tf(f,this.transformPagePoint),dt.update(this.updatePoint,!0)},this.handlePointerUp=(d,f)=>{this.end();const{onEnd:p,onSessionEnd:g,resumeAnimation:y}=this.handlers;if(this.dragSnapToOrigin&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=nf(d.type==="pointercancel"?this.lastMoveEventInfo:tf(f,this.transformPagePoint),this.history);this.startEvent&&p&&p(d,v),g&&g(d,v)},!Ty(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const o=pu(e),a=tf(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=en;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=n;u&&u(e,nf(a,this.history)),this.removeListeners=wr(Bi(this.contextWindow,"pointermove",this.handlePointerMove),Bi(this.contextWindow,"pointerup",this.handlePointerUp),Bi(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Yi(this.updatePoint)}}function tf(t,e){return e?{point:e(t.point)}:t}function l0(t,e){return{x:t.x-e.x,y:t.y-e.y}}function nf({point:t},e){return{point:t,delta:l0(t,cS(e)),offset:l0(t,RA(e)),velocity:PA(e,.1)}}function RA(t){return t[0]}function cS(t){return t[t.length-1]}function PA(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=cS(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Ar(e)));)n--;if(!i)return{x:0,y:0};const s=Vi(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Ln(t){return t.max-t.min}function jd(t,e=0,n=.01){return Math.abs(t-e)<=n}function c0(t,e,n,i=.5){t.origin=i,t.originPoint=yt(e.min,e.max,t.origin),t.scale=Ln(n)/Ln(e),(jd(t.scale,1,1e-4)||isNaN(t.scale))&&(t.scale=1),t.translate=yt(n.min,n.max,t.origin)-t.originPoint,(jd(t.translate)||isNaN(t.translate))&&(t.translate=0)}function ua(t,e,n,i){c0(t.x,e.x,n.x,i?i.originX:void 0),c0(t.y,e.y,n.y,i?i.originY:void 0)}function u0(t,e,n){t.min=n.min+e.min,t.max=t.min+Ln(e)}function DA(t,e,n){u0(t.x,e.x,n.x),u0(t.y,e.y,n.y)}function f0(t,e,n){t.min=e.min-n.min,t.max=t.min+Ln(e)}function fa(t,e,n){f0(t.x,e.x,n.x),f0(t.y,e.y,n.y)}function LA(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?yt(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?yt(n,t,i.max):Math.min(t,n)),t}function d0(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function NA(t,{top:e,left:n,bottom:i,right:r}){return{x:d0(t.x,n,r),y:d0(t.y,e,i)}}function h0(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function IA(t,e){return{x:h0(t.x,e.x),y:h0(t.y,e.y)}}function UA(t,e){let n=.5;const i=Ln(t),r=Ln(e);return r>i?n=Da(e.min,e.max-i,t.min):i>r&&(n=Da(t.min,t.max-r,e.min)),Rr(0,1,n)}function FA(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Xd=.35;function OA(t=Xd){return t===!1?t=0:t===!0&&(t=Xd),{x:p0(t,"left","right"),y:p0(t,"top","bottom")}}function p0(t,e,n){return{min:m0(t,e),max:m0(t,n)}}function m0(t,e){return typeof t=="number"?t:t[e]||0}const g0=()=>({translate:0,scale:1,origin:0,originPoint:0}),qs=()=>({x:g0(),y:g0()}),v0=()=>({min:0,max:0}),It=()=>({x:v0(),y:v0()});function Bn(t){return[t("x"),t("y")]}function uS({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function kA({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function BA(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function rf(t){return t===void 0||t===1}function Yd({scale:t,scaleX:e,scaleY:n}){return!rf(t)||!rf(e)||!rf(n)}function jr(t){return Yd(t)||fS(t)||t.z||t.rotate||t.rotateX||t.rotateY}function fS(t){return x0(t.x)||x0(t.y)}function x0(t){return t&&t!=="0%"}function Oc(t,e,n){const i=t-n,r=e*i;return n+r}function _0(t,e,n,i,r){return r!==void 0&&(t=Oc(t,r,i)),Oc(t,n,i)+e}function $d(t,e=0,n=1,i,r){t.min=_0(t.min,e,n,i,r),t.max=_0(t.max,e,n,i,r)}function dS(t,{x:e,y:n}){$d(t.x,e.translate,e.scale,e.originPoint),$d(t.y,n.translate,n.scale,n.originPoint)}function VA(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const l=s.instance;l&&l.style&&l.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Ks(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,dS(t,o)),i&&jr(s.latestValues)&&Ks(t,s.latestValues))}e.x=y0(e.x),e.y=y0(e.y)}function y0(t){return Number.isInteger(t)||t>1.0000000000001||t<.999999999999?t:1}function ur(t,e){t.min=t.min+e,t.max=t.max+e}function S0(t,e,[n,i,r]){const s=e[r]!==void 0?e[r]:.5,o=yt(t.min,t.max,s);$d(t,e[n],e[i],o,e.scale)}const zA=["x","scaleX","originX"],HA=["y","scaleY","originY"];function Ks(t,e){S0(t.x,e,zA),S0(t.y,e,HA)}function hS(t,e){return uS(BA(t.getBoundingClientRect(),e))}function GA(t,e,n){const i=hS(t,n),{scroll:r}=e;return r&&(ur(i.x,r.offset.x),ur(i.y,r.offset.y)),i}const pS=({current:t})=>t?t.ownerDocument.defaultView:null,WA=new WeakMap;class jA{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=It(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=u=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(pu(u,"page").point)},s=(u,d)=>{const{drag:f,dragPropagation:p,onDragStart:g}=this.getProps();if(f&&!p&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Ay(f),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Bn(v=>{let h=this.getAxisMotionValue(v).get()||0;if(_i.test(h)){const{projection:m}=this.visualElement;if(m&&m.layout){const x=m.layout.layoutBox[v];x&&(h=Ln(x)*(parseFloat(h)/100))}}this.originPoint[v]=h}),g&&dt.update(()=>g(u,d),!1,!0);const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},o=(u,d)=>{const{dragPropagation:f,dragDirectionLock:p,onDirectionLock:g,onDrag:y}=this.getProps();if(!f&&!this.openGlobalLock)return;const{offset:v}=d;if(p&&this.currentDirection===null){this.currentDirection=XA(v),this.currentDirection!==null&&g&&g(this.currentDirection);return}this.updateAxis("x",d.point,v),this.updateAxis("y",d.point,v),this.visualElement.render(),y&&y(u,d)},a=(u,d)=>this.stop(u,d),l=()=>Bn(u=>{var d;return this.getAnimationState(u)==="paused"&&((d=this.getAxisMotionValue(u).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new lS(e,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:pS(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&dt.update(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!gl(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=LA(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&Ys(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=NA(r.layoutBox,n):this.constraints=!1,this.elastic=OA(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Bn(o=>{this.getAxisMotionValue(o)&&(this.constraints[o]=FA(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Ys(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=GA(i,r.root,this.visualElement.getTransformPagePoint());let o=IA(r.layout.layoutBox,s);if(n){const a=n(kA(o));this.hasMutatedConstraints=!!a,a&&(o=uS(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Bn(u=>{if(!gl(u,n,this.currentDirection))return;let d=l&&l[u]||{};o&&(d={min:0,max:0});const f=r?200:1e6,p=r?40:1e7,g={type:"inertia",velocity:i?e[u]:0,bounceStiffness:f,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(u,g)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return i.start(nm(e,i,0,n))}stopAnimation(){Bn(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Bn(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n="_drag"+e.toUpperCase(),i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){Bn(n=>{const{drag:i}=this.getProps();if(!gl(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-yt(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Ys(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Bn(o=>{const a=this.getAxisMotionValue(o);if(a){const l=a.get();r[o]=UA({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Bn(o=>{if(!gl(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(yt(l,c,r[o]))})}addListeners(){if(!this.visualElement.current)return;WA.set(this.visualElement,this);const e=this.visualElement.current,n=Bi(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();Ys(l)&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),i();const o=Fi(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Bn(u=>{const d=this.getAxisMotionValue(u);d&&(this.originPoint[u]+=l[u].translate,d.set(d.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=Xd,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function gl(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function XA(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class YA extends Fr{constructor(e){super(e),this.removeGroupControls=At,this.removeListeners=At,this.controls=new jA(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||At}unmount(){this.removeGroupControls(),this.removeListeners()}}const M0=t=>(e,n)=>{t&&dt.update(()=>t(e,n))};class $A extends Fr{constructor(){super(...arguments),this.removePointerDownListener=At}onPointerDown(e){this.session=new lS(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:pS(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:M0(e),onStart:M0(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&dt.update(()=>r(s,o))}}}mount(){this.removePointerDownListener=Bi(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function qA(){const t=re.useContext(lu);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:n,register:i}=t,r=re.useId();return re.useEffect(()=>i(r),[]),!e&&n?[!1,()=>n&&n(r)]:[!0]}const Jl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function E0(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Fo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Pe.test(t))t=parseFloat(t);else return t;const n=E0(t,e.target.x),i=E0(t,e.target.y);return`${n}% ${i}%`}},KA={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=Pr.parse(t);if(r.length>5)return i;const s=Pr.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const c=yt(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}};class ZA extends Yh.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;sT(QA),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Jl.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,o=i.projection;return o&&(o.isPresent=s,r||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||dt.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function mS(t){const[e,n]=qA(),i=re.useContext(zp);return Yh.createElement(ZA,{...t,layoutGroup:i,switchLayoutGroup:re.useContext(uy),isPresent:e,safeToRemove:n})}const QA={borderRadius:{...Fo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Fo,borderTopRightRadius:Fo,borderBottomLeftRadius:Fo,borderBottomRightRadius:Fo,boxShadow:KA},gS=["TopLeft","TopRight","BottomLeft","BottomRight"],JA=gS.length,T0=t=>typeof t=="string"?parseFloat(t):t,w0=t=>typeof t=="number"||Pe.test(t);function eC(t,e,n,i,r,s){r?(t.opacity=yt(0,n.opacity!==void 0?n.opacity:1,tC(i)),t.opacityExit=yt(e.opacity!==void 0?e.opacity:1,0,nC(i))):s&&(t.opacity=yt(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<JA;o++){const a=`border${gS[o]}Radius`;let l=A0(e,a),c=A0(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||w0(l)===w0(c)?(t[a]=Math.max(yt(T0(l),T0(c),i),0),(_i.test(c)||_i.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=yt(e.rotate||0,n.rotate||0,i))}function A0(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const tC=vS(0,.5,ky),nC=vS(.5,.95,At);function vS(t,e,n){return i=>i<t?0:i>e?1:n(Da(t,e,i))}function C0(t,e){t.min=e.min,t.max=e.max}function Fn(t,e){C0(t.x,e.x),C0(t.y,e.y)}function b0(t,e,n,i,r){return t-=e,t=Oc(t,1/n,i),r!==void 0&&(t=Oc(t,1/r,i)),t}function iC(t,e=0,n=1,i=.5,r,s=t,o=t){if(_i.test(e)&&(e=parseFloat(e),e=yt(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=yt(s.min,s.max,i);t===s&&(a-=e),t.min=b0(t.min,e,n,a,r),t.max=b0(t.max,e,n,a,r)}function R0(t,e,[n,i,r],s,o){iC(t,e[n],e[i],e[r],e.scale,s,o)}const rC=["x","scaleX","originX"],sC=["y","scaleY","originY"];function P0(t,e,n,i){R0(t.x,e,rC,n?n.x:void 0,i?i.x:void 0),R0(t.y,e,sC,n?n.y:void 0,i?i.y:void 0)}function D0(t){return t.translate===0&&t.scale===1}function xS(t){return D0(t.x)&&D0(t.y)}function oC(t,e){return t.x.min===e.x.min&&t.x.max===e.x.max&&t.y.min===e.y.min&&t.y.max===e.y.max}function _S(t,e){return Math.round(t.x.min)===Math.round(e.x.min)&&Math.round(t.x.max)===Math.round(e.x.max)&&Math.round(t.y.min)===Math.round(e.y.min)&&Math.round(t.y.max)===Math.round(e.y.max)}function L0(t){return Ln(t.x)/Ln(t.y)}class aC{constructor(){this.members=[]}add(e){im(this.members,e),e.scheduleRender()}remove(e){if(rm(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function N0(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y;if((r||s)&&(i=`translate3d(${r}px, ${s}px, 0) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{rotate:l,rotateX:c,rotateY:u}=n;l&&(i+=`rotate(${l}deg) `),c&&(i+=`rotateX(${c}deg) `),u&&(i+=`rotateY(${u}deg) `)}const o=t.x.scale*e.x,a=t.y.scale*e.y;return(o!==1||a!==1)&&(i+=`scale(${o}, ${a})`),i||"none"}const lC=(t,e)=>t.depth-e.depth;class cC{constructor(){this.children=[],this.isDirty=!1}add(e){im(this.children,e),this.isDirty=!0}remove(e){rm(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(lC),this.isDirty=!1,this.children.forEach(e)}}function uC(t,e){const n=performance.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(Yi(i),t(s-e))};return dt.read(i,!0),()=>Yi(i)}function fC(t){window.MotionDebug&&window.MotionDebug.record(t)}function dC(t){return t instanceof SVGElement&&t.tagName!=="svg"}function hC(t,e,n){const i=Mn(t)?t:ho(t);return i.start(nm("",i,e,n)),i.animation}const I0=["","X","Y","Z"],pC={visibility:"hidden"},U0=1e3;let mC=0;const Xr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function yS({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=mC++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Xr.totalNodes=Xr.resolvedTargetDeltas=Xr.recalculatedProjection=0,this.nodes.forEach(xC),this.nodes.forEach(EC),this.nodes.forEach(TC),this.nodes.forEach(_C),fC(Xr)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new cC)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new sm),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=dC(o),this.instance=o;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),t){let d;const f=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=uC(f,250),Jl.hasAnimatedSinceResize&&(Jl.hasAnimatedSinceResize=!1,this.nodes.forEach(O0))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f,hasRelativeTargetChanged:p,layout:g})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||u.getDefaultTransition()||RC,{onLayoutAnimationStart:v,onLayoutAnimationComplete:h}=u.getProps(),m=!this.targetLayout||!_S(this.targetLayout,g)||p,x=!f&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||x||f&&(m||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,x);const M={...tm(y,"layout"),onPlay:v,onComplete:h};(u.shouldReduceMotion||this.options.layoutRoot)&&(M.delay=0,M.type=!1),this.startAnimation(M)}else f||O0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=g})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Yi(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(wC),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const d=this.path[u];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(F0);return}this.isUpdating||this.nodes.forEach(SC),this.isUpdating=!1,this.nodes.forEach(MC),this.nodes.forEach(gC),this.nodes.forEach(vC),this.clearAllSnapshots();const a=performance.now();en.delta=Rr(0,1e3/60,a-en.timestamp),en.timestamp=a,en.isProcessing=!0,Yu.update.process(en),Yu.preRender.process(en),Yu.render.process(en),en.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(yC),this.sharedNodes.forEach(AC)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,dt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){dt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=It(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:o,isRoot:i(this.instance),offset:n(this.instance)})}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!xS(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&(a||jr(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),PC(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:o}=this.options;if(!o)return It();const a=o.measureViewportBox(),{scroll:l}=this.root;return l&&(ur(a.x,l.offset.x),ur(a.y,l.offset.y)),a}removeElementScroll(o){const a=It();Fn(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l],{scroll:u,options:d}=c;if(c!==this.root&&u&&d.layoutScroll){if(u.isRoot){Fn(a,o);const{scroll:f}=this.root;f&&(ur(a.x,-f.offset.x),ur(a.y,-f.offset.y))}ur(a.x,u.offset.x),ur(a.y,u.offset.y)}}return a}applyTransform(o,a=!1){const l=It();Fn(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Ks(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),jr(u.latestValues)&&Ks(l,u.latestValues)}return jr(this.latestValues)&&Ks(l,this.latestValues),l}removeTransform(o){const a=It();Fn(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!jr(c.latestValues))continue;Yd(c.latestValues)&&c.updateSnapshot();const u=It(),d=c.measurePageBox();Fn(u,d),P0(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return jr(this.latestValues)&&P0(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==en.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:d,layoutId:f}=this.options;if(!(!this.layout||!(d||f))){if(this.resolvedRelativeTargetAt=en.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=It(),this.relativeTargetOrigin=It(),fa(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),Fn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=It(),this.targetWithTransforms=It()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),DA(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Fn(this.target,this.layout.layoutBox),dS(this.target,this.targetDelta)):Fn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=It(),this.relativeTargetOrigin=It(),fa(this.relativeTargetOrigin,this.target,p.target),Fn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Xr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Yd(this.parent.latestValues)||fS(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===en.timestamp&&(c=!1),c)return;const{layout:u,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||d))return;Fn(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,p=this.treeScale.y;VA(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox);const{target:g}=a;if(!g){this.projectionTransform&&(this.projectionDelta=qs(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=qs(),this.projectionDeltaWithTransform=qs());const y=this.projectionTransform;ua(this.projectionDelta,this.layoutCorrected,g,this.latestValues),this.projectionTransform=N0(this.projectionDelta,this.treeScale),(this.projectionTransform!==y||this.treeScale.x!==f||this.treeScale.y!==p)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",g)),Xr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),o){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},d=qs();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=It(),p=l?l.source:void 0,g=this.layout?this.layout.source:void 0,y=p!==g,v=this.getStack(),h=!v||v.members.length<=1,m=!!(y&&!h&&this.options.crossfade===!0&&!this.path.some(bC));this.animationProgress=0;let x;this.mixTargetDelta=M=>{const w=M/1e3;k0(d.x,o.x,w),k0(d.y,o.y,w),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(fa(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),CC(this.relativeTarget,this.relativeTargetOrigin,f,w),x&&oC(this.relativeTarget,x)&&(this.isProjectionDirty=!1),x||(x=It()),Fn(x,this.relativeTarget)),y&&(this.animationValues=u,eC(u,c,this.latestValues,w,m,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=w},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Yi(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=dt.update(()=>{Jl.hasAnimatedSinceResize=!0,this.currentAnimation=hC(0,U0,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(U0),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&SS(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||It();const d=Ln(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const f=Ln(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+f}Fn(a,l),Ks(a,u),ua(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new aC),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const c={};for(let u=0;u<I0.length;u++){const d="rotate"+I0[u];l[d]&&(c[d]=l[d],o.setStaticValue(d,0))}o.render();for(const u in c)o.setStaticValue(u,c[u]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return pC;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=Ql(o==null?void 0:o.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=Ql(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!jr(this.latestValues)&&(y.transform=u?u({},""):"none",this.hasProjected=!1),y}const f=d.animationValues||d.latestValues;this.applyTransformsToTarget(),c.transform=N0(this.projectionDeltaWithTransform,this.treeScale,f),u&&(c.transform=u(f,c.transform));const{x:p,y:g}=this.projectionDelta;c.transformOrigin=`${p.origin*100}% ${g.origin*100}% 0`,d.animationValues?c.opacity=d===this?(l=(a=f.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:c.opacity=d===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const y in Pc){if(f[y]===void 0)continue;const{correct:v,applyTo:h}=Pc[y],m=c.transform==="none"?f[y]:v(f[y],d);if(h){const x=h.length;for(let M=0;M<x;M++)c[h[M]]=m}else c[y]=m}return this.options.layoutId&&(c.pointerEvents=d===this?Ql(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(F0),this.root.sharedNodes.clear()}}}function gC(t){t.updateLayout()}function vC(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?Bn(d=>{const f=o?n.measuredBox[d]:n.layoutBox[d],p=Ln(f);f.min=i[d].min,f.max=f.min+p}):SS(s,n.layoutBox,i)&&Bn(d=>{const f=o?n.measuredBox[d]:n.layoutBox[d],p=Ln(i[d]);f.max=f.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[d].max=t.relativeTarget[d].min+p)});const a=qs();ua(a,i,n.layoutBox);const l=qs();o?ua(l,t.applyTransform(r,!0),n.measuredBox):ua(l,i,n.layoutBox);const c=!xS(a);let u=!1;if(!t.resumeFrom){const d=t.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:f,layout:p}=d;if(f&&p){const g=It();fa(g,n.layoutBox,f.layoutBox);const y=It();fa(y,i,p.layoutBox),_S(g,y)||(u=!0),d.options.layoutRoot&&(t.relativeTarget=y,t.relativeTargetOrigin=g,t.relativeParent=d)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function xC(t){Xr.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function _C(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function yC(t){t.clearSnapshot()}function F0(t){t.clearMeasurements()}function SC(t){t.isLayoutDirty=!1}function MC(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function O0(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function EC(t){t.resolveTargetDelta()}function TC(t){t.calcProjection()}function wC(t){t.resetRotation()}function AC(t){t.removeLeadSnapshot()}function k0(t,e,n){t.translate=yt(e.translate,0,n),t.scale=yt(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function B0(t,e,n,i){t.min=yt(e.min,n.min,i),t.max=yt(e.max,n.max,i)}function CC(t,e,n,i){B0(t.x,e.x,n.x,i),B0(t.y,e.y,n.y,i)}function bC(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const RC={duration:.45,ease:[.4,0,.1,1]},V0=t=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(t),z0=V0("applewebkit/")&&!V0("chrome/")?Math.round:At;function H0(t){t.min=z0(t.min),t.max=z0(t.max)}function PC(t){H0(t.x),H0(t.y)}function SS(t,e,n){return t==="position"||t==="preserve-aspect"&&!jd(L0(e),L0(n),.2)}const DC=yS({attachResizeListener:(t,e)=>Fi(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),sf={current:void 0},MS=yS({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!sf.current){const t=new DC({});t.mount(window),t.setOptions({layoutScroll:!0}),sf.current=t}return sf.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),LC={pan:{Feature:$A},drag:{Feature:YA,ProjectionNode:MS,MeasureLayout:mS}},NC=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function IC(t){const e=NC.exec(t);if(!e)return[,];const[,n,i]=e;return[n,i]}function qd(t,e,n=1){const[i,r]=IC(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return iS(o)?parseFloat(o):o}else return Od(r)?qd(r,e,n+1):r}function UC(t,{...e},n){const i=t.current;if(!(i instanceof Element))return{target:e,transitionEnd:n};n&&(n={...n}),t.values.forEach(r=>{const s=r.get();if(!Od(s))return;const o=qd(s,i);o&&r.set(o)});for(const r in e){const s=e[r];if(!Od(s))continue;const o=qd(s,i);o&&(e[r]=o,n||(n={}),n[r]===void 0&&(n[r]=s))}return{target:e,transitionEnd:n}}const FC=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),ES=t=>FC.has(t),OC=t=>Object.keys(t).some(ES),G0=t=>t===gs||t===Pe,W0=(t,e)=>parseFloat(t.split(", ")[e]),j0=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/);if(r)return W0(r[1],e);{const s=i.match(/^matrix\((.+)\)$/);return s?W0(s[1],t):0}},kC=new Set(["x","y","z"]),BC=za.filter(t=>!kC.has(t));function VC(t){const e=[];return BC.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e.length&&t.render(),e}const po={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:j0(4,13),y:j0(5,14)};po.translateX=po.x;po.translateY=po.y;const zC=(t,e,n)=>{const i=e.measureViewportBox(),r=e.current,s=getComputedStyle(r),{display:o}=s,a={};o==="none"&&e.setStaticValue("display",t.display||"block"),n.forEach(c=>{a[c]=po[c](i,s)}),e.render();const l=e.measureViewportBox();return n.forEach(c=>{const u=e.getValue(c);u&&u.jump(a[c]),t[c]=po[c](l,s)}),t},HC=(t,e,n={},i={})=>{e={...e},i={...i};const r=Object.keys(e).filter(ES);let s=[],o=!1;const a=[];if(r.forEach(l=>{const c=t.getValue(l);if(!t.hasValue(l))return;let u=n[l],d=Uo(u);const f=e[l];let p;if(Lc(f)){const g=f.length,y=f[0]===null?1:0;u=f[y],d=Uo(u);for(let v=y;v<g&&f[v]!==null;v++)p?Kp(Uo(f[v])===p):p=Uo(f[v])}else p=Uo(f);if(d!==p)if(G0(d)&&G0(p)){const g=c.get();typeof g=="string"&&c.set(parseFloat(g)),typeof f=="string"?e[l]=parseFloat(f):Array.isArray(f)&&p===Pe&&(e[l]=f.map(parseFloat))}else d!=null&&d.transform&&(p!=null&&p.transform)&&(u===0||f===0)?u===0?c.set(p.transform(u)):e[l]=d.transform(f):(o||(s=VC(t),o=!0),a.push(l),i[l]=i[l]!==void 0?i[l]:e[l],c.jump(f))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,c=zC(e,t,a);return s.length&&s.forEach(([u,d])=>{t.getValue(u).set(d)}),t.render(),cu&&l!==null&&window.scrollTo({top:l}),{target:c,transitionEnd:i}}else return{target:e,transitionEnd:i}};function GC(t,e,n,i){return OC(e)?HC(t,e,n,i):{target:e,transitionEnd:i}}const WC=(t,e,n,i)=>{const r=UC(t,e,i);return e=r.target,i=r.transitionEnd,GC(t,e,n,i)},Kd={current:null},TS={current:!1};function jC(){if(TS.current=!0,!!cu)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Kd.current=t.matches;t.addListener(e),e()}else Kd.current=!1}function XC(t,e,n){const{willChange:i}=e;for(const r in e){const s=e[r],o=n[r];if(Mn(s))t.addValue(r,s),Fc(i)&&i.add(r);else if(Mn(o))t.addValue(r,ho(s,{owner:t})),Fc(i)&&i.remove(r);else if(o!==s)if(t.hasValue(r)){const a=t.getValue(r);!a.hasAnimated&&a.set(s)}else{const a=t.getStaticValue(r);t.addValue(r,ho(a!==void 0?a:s,{owner:t}))}}for(const r in n)e[r]===void 0&&t.removeValue(r);return e}const X0=new WeakMap,wS=Object.keys(Pa),YC=wS.length,Y0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],$C=Vp.length;class qC{constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,visualState:s},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>dt.render(this.render,!1,!0);const{latestValues:a,renderState:l}=s;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=l,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=o,this.isControllingVariants=du(n),this.isVariantNode=cy(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:c,...u}=this.scrapeMotionValuesFromProps(n,{});for(const d in u){const f=u[d];a[d]!==void 0&&Mn(f)&&(f.set(a[d],!1),Fc(c)&&c.add(d))}}scrapeMotionValuesFromProps(e,n){return{}}mount(e){this.current=e,X0.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),TS.current||jC(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Kd.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){X0.delete(this.current),this.projection&&this.projection.unmount(),Yi(this.notifyUpdate),Yi(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,n){const i=ms.has(e),r=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&dt.update(this.notifyUpdate,!1,!0),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{r(),s()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}loadFeatures({children:e,...n},i,r,s){let o,a;for(let l=0;l<YC;l++){const c=wS[l],{isEnabled:u,Feature:d,ProjectionNode:f,MeasureLayout:p}=Pa[c];f&&(o=f),u(n)&&(!this.features[c]&&d&&(this.features[c]=new d(this)),p&&(a=p))}if((this.type==="html"||this.type==="svg")&&!this.projection&&o){this.projection=new o(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:c,drag:u,dragConstraints:d,layoutScroll:f,layoutRoot:p}=n;this.projection.setOptions({layoutId:l,layout:c,alwaysMeasureLayout:!!u||d&&Ys(d),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof c=="string"?c:"both",initialPromotionConfig:s,layoutScroll:f,layoutRoot:p})}return a}updateFeatures(){for(const e in this.features){const n=this.features[e];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):It()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}makeTargetAnimatable(e,n=!0){return this.makeTargetAnimatableFromInstance(e,this.props,n)}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<Y0.length;i++){const r=Y0[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s=e["on"+r];s&&(this.propEventSubscriptions[r]=this.on(r,s))}this.prevMotionValues=XC(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const i=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(i.initial=this.props.initial),i}const n={};for(let i=0;i<$C;i++){const r=Vp[i],s=this.props[r];(Ra(s)||s===!1)&&(n[r]=s)}return n}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){n!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,n)),this.values.set(e,n),this.latestValues[e]=n.get()}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=ho(n,{owner:this}),this.addValue(e,i)),i}readValue(e){var n;return this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(n=this.getBaseTargetFromProps(this.props,e))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,e,this.options)}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props,r=typeof i=="string"||typeof i=="object"?(n=$p(this.props,i))===null||n===void 0?void 0:n[e]:void 0;if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!Mn(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new sm),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class AS extends qC{sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}makeTargetAnimatableFromInstance({transition:e,transitionEnd:n,...i},{transformValues:r},s){let o=hA(i,e||{},this);if(r&&(n&&(n=r(n)),i&&(i=r(i)),o&&(o=r(o))),s){fA(this,i,o);const a=WC(this,i,o,n);n=a.transitionEnd,i=a.target}return{transition:e,transitionEnd:n,...i}}}function KC(t){return window.getComputedStyle(t)}class ZC extends AS{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,n){if(ms.has(n)){const i=em(n);return i&&i.default||0}else{const i=KC(e),r=(hy(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return hS(e,n)}build(e,n,i,r){Gp(e,n,i,r.transformTemplate)}scrapeMotionValuesFromProps(e,n){return Yp(e,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Mn(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(e,n,i,r){_y(e,n,i,r)}}class QC extends AS{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(ms.has(n)){const i=em(n);return i&&i.default||0}return n=yy.has(n)?n:kp(n),e.getAttribute(n)}measureInstanceViewportBox(){return It()}scrapeMotionValuesFromProps(e,n){return My(e,n)}build(e,n,i,r){jp(e,n,i,this.isSVGTag,r.transformTemplate)}renderInstance(e,n,i,r){Sy(e,n,i,r)}mount(e){this.isSVGTag=Xp(e.tagName),super.mount(e)}}const JC=(t,e)=>Hp(t)?new QC(e,{enableHardwareAcceleration:!1}):new ZC(e,{enableHardwareAcceleration:!0}),eb={layout:{ProjectionNode:MS,MeasureLayout:mS}},tb={...CA,...$T,...LC,...eb},We=iT((t,e)=>UT(t,e,tb,JC));function CS(){const t=re.useRef(!1);return uu(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function nb(){const t=CS(),[e,n]=re.useState(0),i=re.useCallback(()=>{t.current&&n(e+1)},[e]);return[re.useCallback(()=>dt.postRender(i),[i]),e]}class ib extends re.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function rb({children:t,isPresent:e}){const n=re.useId(),i=re.useRef(null),r=re.useRef({width:0,height:0,top:0,left:0});return re.useInsertionEffect(()=>{const{width:s,height:o,top:a,left:l}=r.current;if(e||!i.current||!s||!o)return;i.current.dataset.motionPopId=n;const c=document.createElement("style");return document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${o}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[e]),re.createElement(ib,{isPresent:e,childRef:i,sizeRef:r},re.cloneElement(t,{ref:i}))}const of=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o})=>{const a=qp(sb),l=re.useId(),c=re.useMemo(()=>({id:l,initial:e,isPresent:n,custom:r,onExitComplete:u=>{a.set(u,!0);for(const d of a.values())if(!d)return;i&&i()},register:u=>(a.set(u,!1),()=>a.delete(u))}),s?void 0:[n]);return re.useMemo(()=>{a.forEach((u,d)=>a.set(d,!1))},[n]),re.useEffect(()=>{!n&&!a.size&&i&&i()},[n]),o==="popLayout"&&(t=re.createElement(rb,{isPresent:n},t)),re.createElement(lu.Provider,{value:c},t)};function sb(){return new Map}function ob(t){return re.useEffect(()=>()=>t(),[])}const Yr=t=>t.key||"";function ab(t,e){t.forEach(n=>{const i=Yr(n);e.set(i,n)})}function lb(t){const e=[];return re.Children.forEach(t,n=>{re.isValidElement(n)&&e.push(n)}),e}const La=({children:t,custom:e,initial:n=!0,onExitComplete:i,exitBeforeEnter:r,presenceAffectsLayout:s=!0,mode:o="sync"})=>{const a=re.useContext(zp).forceRender||nb()[0],l=CS(),c=lb(t);let u=c;const d=re.useRef(new Map).current,f=re.useRef(u),p=re.useRef(new Map).current,g=re.useRef(!0);if(uu(()=>{g.current=!1,ab(c,p),f.current=u}),ob(()=>{g.current=!0,p.clear(),d.clear()}),g.current)return re.createElement(re.Fragment,null,u.map(m=>re.createElement(of,{key:Yr(m),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:s,mode:o},m)));u=[...u];const y=f.current.map(Yr),v=c.map(Yr),h=y.length;for(let m=0;m<h;m++){const x=y[m];v.indexOf(x)===-1&&!d.has(x)&&d.set(x,void 0)}return o==="wait"&&d.size&&(u=[]),d.forEach((m,x)=>{if(v.indexOf(x)!==-1)return;const M=p.get(x);if(!M)return;const w=y.indexOf(x);let T=m;if(!T){const b=()=>{d.delete(x);const _=Array.from(p.keys()).filter(C=>!v.includes(C));if(_.forEach(C=>p.delete(C)),f.current=c.filter(C=>{const P=Yr(C);return P===x||_.includes(P)}),!d.size){if(l.current===!1)return;a(),i&&i()}};T=re.createElement(of,{key:Yr(M),isPresent:!1,onExitComplete:b,custom:e,presenceAffectsLayout:s,mode:o},M),d.set(x,T)}u.splice(w,0,T)}),u=u.map(m=>{const x=m.key;return d.has(x)?m:re.createElement(of,{key:Yr(m),isPresent:!0,presenceAffectsLayout:s,mode:o},m)}),re.createElement(re.Fragment,null,d.size?u:u.map(m=>re.cloneElement(m)))};function cb(t){t.values.forEach(e=>e.stop())}function ub(){const t=new Set,e={subscribe(n){return t.add(n),()=>void t.delete(n)},start(n,i){const r=[];return t.forEach(s=>{r.push(aS(s,n,{transitionOverride:i}))}),Promise.all(r)},set(n){return t.forEach(i=>{uA(i,n)})},stop(){t.forEach(n=>{cb(n)})},mount(){return()=>{e.stop()}}};return e}function fb(){const t=qp(ub);return uu(t.mount,[]),t}const db=fb;var hb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const pb=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Mo=(t,e)=>{const n=re.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,children:a,...l},c)=>re.createElement("svg",{ref:c,...hb,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:`lucide lucide-${pb(t)}`,...l},[...e.map(([u,d])=>re.createElement(u,d)),...(Array.isArray(a)?a:[a])||[]]));return n.displayName=`${t}`,n},mb=Mo("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]),gb=Mo("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]),vb=Mo("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["polyline",{points:"22 4 12 14.01 9 11.01",key:"6xbx8j"}]]),xb=Mo("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),bS=Mo("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),_b=Mo("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),Oo={title:"kakkoï AI",hero:{title:"Les avatars qui ressentent et racontent.",highlight:"Pour donner vie à vos personnages.",subtitle:"Personnages de bandes dessinées, de dessins animés, de jeux vidéo, logos de marques, kakkoï AI permet à chaque utilisateur une expérience singulière avec vos avatars."},ocean:[{id:"O",title:"Ouverture",desc:"Capacité de l'avatar à apprécier l'art, l'émotion, l'aventure et les idées non conventionnelles."},{id:"C",title:"Conscience",desc:"Autodiscipline et orientation vers un but. kakkoï agit avec intention, pas seulement par réaction."},{id:"E",title:"Extraversion",desc:"Énergie, émotions positives et tendance à rechercher la stimulation dans la compagnie des autres."},{id:"A",title:"Agréabilité",desc:"Empathie et coopération. L'avatar comprend vos sentiments et s'y adapte avec une véritable compassion."},{id:"N",title:"Nervosité",desc:"Vulnérabilité émotionnelle mesurée. Un avatar capable d'hésiter et de ressentir la complexité du monde."}]},yb=()=>G.jsxs("div",{className:"relative w-full",children:[G.jsx(We.div,{animate:{scale:[1,1.2,1],opacity:[.1,.2,.1]},transition:{duration:8,repeat:1/0},className:"absolute inset-0 bg-[#4E7D8B]/10 blur-[120px] rounded-full z-0 pointer-events-none",style:{willChange:"transform, opacity"}}),G.jsxs("div",{className:"w-full relative z-10",children:[G.jsxs(We.div,{className:"text-center mb-6",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.8,ease:[.16,1,.3,1]},children:[G.jsx("h2",{className:"text-3xl md:text-5xl font-[600] tracking-[-0.02em] text-title-primary mb-2 [-webkit-text-stroke:0.5px_currentcolor]",children:"Polymood"}),G.jsx("p",{className:"text-muted text-sm md:text-base max-w-2xl mx-auto",children:"Au cœur de Kakkoï AI, notre algorithme ne se contente pas de répondre. Il simule la psychologie et les émotions de vos avatars."})]}),G.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch justify-items-center w-full",children:[G.jsxs(We.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-50px"},whileHover:{scale:1.04,y:-5},transition:{duration:.8,ease:[.16,1,.3,1]},className:"card-glass p-5 flex flex-col items-start text-left w-full justify-center hover:border-[#4E7D8B]/40 hover:shadow-[0_20px_40px_rgba(78,125,139,0.2)] cursor-default",children:[G.jsx(gb,{className:"text-accent mb-3",size:28,"aria-hidden":"true"}),G.jsx("h3",{className:"title-3 mb-2",children:"Entrée verbale"}),G.jsx("p",{className:"text-muted text-xs leading-tight",children:"Analyse sémantique des questions."})]}),G.jsxs(We.div,{className:"flex justify-center items-center relative w-full h-full py-6 md:py-0",initial:{opacity:0,scale:.7},whileInView:{opacity:1,scale:1},viewport:{once:!0,margin:"-50px"},transition:{duration:.8,delay:.2,ease:[.16,1,.3,1]},children:[G.jsxs(We.div,{animate:{rotate:360},transition:{duration:20,repeat:1/0,ease:"linear"},className:"w-40 h-40 border-2 border-dashed border-[#4E7D8B]/30 rounded-full flex items-center justify-center",style:{willChange:"transform"},children:[G.jsx(We.div,{animate:{scale:[1,1.1,1]},transition:{duration:2,repeat:1/0},className:"w-24 h-24 bg-[#E63946]/15 rounded-full blur-2xl absolute",style:{willChange:"transform"}}),G.jsx("div",{className:"w-16 h-16 rounded-full bg-gradient-to-br from-[#E63946] to-[#4E7D8B] shadow-[0_0_40px_rgba(78,125,139,0.3)] animate-pulse relative z-20"})]}),G.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:G.jsx(mb,{className:"text-[#4E7D8B]/30",size:64,"aria-hidden":"true"})})]}),G.jsxs(We.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-50px"},whileHover:{scale:1.04,y:-5},transition:{duration:.8,delay:.2,ease:[.16,1,.3,1]},className:"card-glass p-5 flex flex-col items-start text-left w-full justify-center hover:border-[#4E7D8B]/40 hover:shadow-[0_20px_40px_rgba(78,125,139,0.2)] cursor-default",children:[G.jsx(_b,{className:"text-accent mb-3",size:28,"aria-hidden":"true"}),G.jsx("h3",{className:"title-3 mb-2",children:"Réponse en sortie"}),G.jsx("p",{className:"text-muted text-xs leading-tight",children:"Génération d'une réponse imprégnée de l'état émotionnel actuel de l'avatar."})]})]})]})]}),Sb=()=>{const[t,e]=re.useState(""),[n,i]=re.useState("idle"),r=o=>{o.preventDefault(),i("submitting"),setTimeout(()=>i("success"),1500)},s={duration:.8,ease:[.16,1,.3,1]};return G.jsx("div",{className:"px-6 relative z-10 w-full",children:G.jsx(We.div,{className:"max-w-xl mx-auto card-glass p-10 md:p-14 text-center min-h-[300px] flex flex-col justify-center","aria-live":"polite",initial:{opacity:0,y:20,scale:.95},whileInView:{opacity:1,y:0,scale:1},viewport:{once:!0,margin:"-50px"},transition:s,children:G.jsx(La,{mode:"wait",children:n!=="success"?G.jsxs(We.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20,transition:{duration:.2}},transition:s,children:[G.jsx("h2",{className:"text-3xl md:text-4xl font-[600] tracking-[-0.02em] text-title-primary mb-6 [-webkit-text-stroke:0.5px_currentcolor]",children:"Rejoignez l'évolution."}),G.jsxs("form",{onSubmit:r,className:"relative",children:[G.jsx("input",{type:"email",required:!0,value:t,onChange:o=>e(o.target.value),placeholder:"votre@email.com","aria-label":"Adresse e-mail pour la liste d'attente",className:"ui-input py-4 text-base w-full",disabled:n==="submitting"}),G.jsx("div",{className:"w-full mt-4",children:G.jsx(We.button,{type:"submit",disabled:n==="submitting",className:"ui-btn-primary w-full py-4 text-base",whileHover:{scale:1.03},whileTap:{scale:.97},children:n==="submitting"?"Envoi...":"S'inscrire"})})]})]},"form"):G.jsxs(We.div,{initial:{opacity:0,scale:.8,y:20},animate:{opacity:1,scale:1,y:0},transition:s,className:"flex flex-col items-center justify-center",children:[G.jsx(We.div,{initial:{scale:0},animate:{scale:1},transition:{...s,delay:.1},children:G.jsx(vb,{size:56,className:"text-success mb-6",strokeWidth:2})}),G.jsx("h2",{className:"text-3xl md:text-4xl font-[600] tracking-[-0.02em] text-title-primary mb-3 [-webkit-text-stroke:0.5px_currentcolor]",children:"Bienvenue."}),G.jsx("p",{className:"text-muted text-lg",children:"Vous êtes sur la liste d'attente."})]},"success")})})})};function RS(t){return`./${t.replace(/^\/+/,"")}`}const Mb=({onFinished:t})=>{const[e,n]=re.useState(!0);return re.useEffect(()=>{const i=setTimeout(()=>{n(!1),setTimeout(t,800)},2500);return()=>clearTimeout(i)},[t]),G.jsx(La,{children:e&&G.jsxs(We.div,{initial:{opacity:1},exit:{opacity:0,y:-20},transition:{duration:.8,ease:"easeInOut"},className:"fixed inset-0 z-[100] bg-[#FAF9F6] flex flex-col items-center justify-center",children:[G.jsxs(We.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:1},className:"relative flex flex-col items-center",children:[G.jsx(We.img,{src:RS("vertical6.png"),alt:"kakkoï AI",className:"loader-logo z-10",animate:{scale:[1,1.04,1],opacity:[.8,1,.8]},transition:{duration:2.5,repeat:1/0,ease:"easeInOut"}}),G.jsx(We.div,{className:"absolute -bottom-4 left-0 h-[1px] bg-accent",initial:{width:0},animate:{width:"100%"},transition:{duration:2,ease:"easeInOut"}})]}),G.jsx(We.p,{initial:{opacity:0},animate:{opacity:[0,1,0]},transition:{duration:2,repeat:1/0},className:"mt-12 text-[10px] uppercase tracking-[0.3em] text-[#2D2D2D] font-[600]",children:"Initialisation de l'avatar..."})]})})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const am="184",Eb=0,$0=1,Tb=2,ec=1,PS=2,Zo=3,Dr=0,Sn=1,Ni=2,zi=0,io=1,q0=2,K0=3,Z0=4,wb=5,qr=100,Ab=101,Cb=102,bb=103,Rb=104,Pb=200,Db=201,Lb=202,Nb=203,Zd=204,Qd=205,Ib=206,Ub=207,Fb=208,Ob=209,kb=210,Bb=211,Vb=212,zb=213,Hb=214,Jd=0,eh=1,th=2,mo=3,nh=4,ih=5,rh=6,sh=7,DS=0,Gb=1,Wb=2,yi=0,LS=1,NS=2,IS=3,US=4,FS=5,OS=6,kS=7,BS=300,fs=301,go=302,af=303,lf=304,gu=306,oh=1e3,Oi=1001,ah=1002,Xt=1003,jb=1004,vl=1005,nn=1006,cf=1007,ts=1008,bn=1009,VS=1010,zS=1011,Na=1012,lm=1013,Ei=1014,mi=1015,$i=1016,cm=1017,um=1018,Ia=1020,HS=35902,GS=35899,WS=1021,jS=1022,ni=1023,qi=1026,ns=1027,XS=1028,fm=1029,ds=1030,dm=1031,hm=1033,tc=33776,nc=33777,ic=33778,rc=33779,lh=35840,ch=35841,uh=35842,fh=35843,dh=36196,hh=37492,ph=37496,mh=37488,gh=37489,kc=37490,vh=37491,xh=37808,_h=37809,yh=37810,Sh=37811,Mh=37812,Eh=37813,Th=37814,wh=37815,Ah=37816,Ch=37817,bh=37818,Rh=37819,Ph=37820,Dh=37821,Lh=36492,Nh=36494,Ih=36495,Uh=36283,Fh=36284,Bc=36285,Oh=36286,Xb=3200,kh=0,Yb=1,hr="",Vn="srgb",Vc="srgb-linear",zc="linear",nt="srgb",Ss=7680,Q0=519,$b=512,qb=513,Kb=514,pm=515,Zb=516,Qb=517,mm=518,Jb=519,J0=35044,ev="300 es",gi=2e3,Ua=2001;function eR(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Hc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function tR(){const t=Hc("canvas");return t.style.display="block",t}const tv={};function nv(...t){const e="THREE."+t.shift();console.log(e,...t)}function YS(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ne(...t){t=YS(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Ze(...t){t=YS(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Bh(...t){const e=t.join(" ");e in tv||(tv[e]=!0,Ne(...t))}function nR(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const iR={[Jd]:eh,[th]:rh,[nh]:sh,[mo]:ih,[eh]:Jd,[rh]:th,[sh]:nh,[ih]:mo};class vs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uf=Math.PI/180,Vh=180/Math.PI;function ja(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[t&255]+Qt[t>>8&255]+Qt[t>>16&255]+Qt[t>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[n&63|128]+Qt[n>>8&255]+"-"+Qt[n>>16&255]+Qt[n>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function qe(t,e,n){return Math.max(e,Math.min(n,t))}function rR(t,e){return(t%e+e)%e}function ff(t,e,n){return(1-n)*t+n*e}function ko(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function mn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Mm=class Mm{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Mm.prototype.isVector2=!0;let tt=Mm;class Eo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],p=s[o+1],g=s[o+2],y=s[o+3];if(d!==y||l!==f||c!==p||u!==g){let v=l*f+c*p+u*g+d*y;v<0&&(f=-f,p=-p,g=-g,y=-y,v=-v);let h=1-a;if(v<.9995){const m=Math.acos(v),x=Math.sin(m);h=Math.sin(h*m)/x,a=Math.sin(a*m)/x,l=l*h+f*a,c=c*h+p*a,u=u*h+g*a,d=d*h+y*a}else{l=l*h+f*a,c=c*h+p*a,u=u*h+g*a,d=d*h+y*a;const m=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=m,c*=m,u*=m,d*=m}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*d+l*p-c*f,e[n+1]=l*g+u*f+c*d-a*p,e[n+2]=c*g+u*p+a*f-l*d,e[n+3]=u*g-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"YXZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"ZXY":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"ZYX":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"YZX":this._x=f*u*d+c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d-f*p*g;break;case"XZY":this._x=f*u*d-c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d+f*p*g;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Em=class Em{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(iv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(iv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return df.copy(this).projectOnVector(e),this.sub(df)}reflect(e){return this.sub(df.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Em.prototype.isVector3=!0;let H=Em;const df=new H,iv=new Eo,Tm=class Tm{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],g=i[8],y=r[0],v=r[3],h=r[6],m=r[1],x=r[4],M=r[7],w=r[2],T=r[5],b=r[8];return s[0]=o*y+a*m+l*w,s[3]=o*v+a*x+l*T,s[6]=o*h+a*M+l*b,s[1]=c*y+u*m+d*w,s[4]=c*v+u*x+d*T,s[7]=c*h+u*M+d*b,s[2]=f*y+p*m+g*w,s[5]=f*v+p*x+g*T,s[8]=f*h+p*M+g*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,p=c*s-o*l,g=n*d+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=d*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(hf.makeScale(e,n)),this}rotate(e){return this.premultiply(hf.makeRotation(-e)),this}translate(e,n){return this.premultiply(hf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Tm.prototype.isMatrix3=!0;let Fe=Tm;const hf=new Fe,rv=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sv=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sR(){const t={enabled:!0,workingColorSpace:Vc,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===nt&&(r.r=Hi(r.r),r.g=Hi(r.g),r.b=Hi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===nt&&(r.r=ro(r.r),r.g=ro(r.g),r.b=ro(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===hr?zc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Bh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Bh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Vc]:{primaries:e,whitePoint:i,transfer:zc,toXYZ:rv,fromXYZ:sv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Vn},outputColorSpaceConfig:{drawingBufferColorSpace:Vn}},[Vn]:{primaries:e,whitePoint:i,transfer:nt,toXYZ:rv,fromXYZ:sv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Vn}}}),t}const $e=sR();function Hi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ro(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ms;class oR{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ms===void 0&&(Ms=Hc("canvas")),Ms.width=e.width,Ms.height=e.height;const r=Ms.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ms}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Hc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Hi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Hi(n[i]/255)*255):n[i]=Hi(n[i]);return{data:n,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let aR=0;class gm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aR++}),this.uuid=ja(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(pf(r[o].image)):s.push(pf(r[o]))}else s=pf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function pf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?oR.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}let lR=0;const mf=new H;class fn extends vs{constructor(e=fn.DEFAULT_IMAGE,n=fn.DEFAULT_MAPPING,i=Oi,r=Oi,s=nn,o=ts,a=ni,l=bn,c=fn.DEFAULT_ANISOTROPY,u=hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lR++}),this.uuid=ja(),this.name="",this.source=new gm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(mf).x}get height(){return this.source.getSize(mf).y}get depth(){return this.source.getSize(mf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ne(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ne(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==BS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oh:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case ah:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oh:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case ah:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=BS;fn.DEFAULT_ANISOTROPY=1;const wm=class wm{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],g=l[9],y=l[2],v=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(g-v)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(g+v)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,M=(p+1)/2,w=(h+1)/2,T=(u+f)/4,b=(d+y)/4,_=(g+v)/4;return x>M&&x>w?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=T/i,s=b/i):M>w?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=T/r,s=_/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=b/s,r=_/s),this.set(i,r,s,n),this}let m=Math.sqrt((v-g)*(v-g)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(m)<.001&&(m=1),this.x=(v-g)/m,this.y=(d-y)/m,this.z=(f-u)/m,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this.w=qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this.w=qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};wm.prototype.isVector4=!0;let Ct=wm;class cR extends vs{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new fn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new gm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Si extends cR{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class $S extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class uR extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wc=class Wc{constructor(e,n,i,r,s,o,a,l,c,u,d,f,p,g,y,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,f,p,g,y,v)}set(e,n,i,r,s,o,a,l,c,u,d,f,p,g,y,v){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=g,h[11]=y,h[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Es.setFromMatrixColumn(e,0).length(),s=1/Es.setFromMatrixColumn(e,1).length(),o=1/Es.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*d,g=a*u,y=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+g*c,n[5]=f-y*c,n[9]=-a*l,n[2]=y-f*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,g=c*u,y=c*d;n[0]=f+y*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=y+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,g=c*u,y=c*d;n[0]=f-y*a,n[4]=-o*d,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=y-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,g=a*u,y=a*d;n[0]=l*u,n[4]=g*c-p,n[8]=f*c+y,n[1]=l*d,n[5]=y*c+f,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,y=a*c;n[0]=l*u,n[4]=y-f*d,n[8]=g*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+g,n[10]=f-y*d}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,y=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+y,n[5]=o*u,n[9]=p*d-g,n[2]=g*d-p,n[6]=a*u,n[10]=y*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fR,e,dR)}lookAt(e,n,i){const r=this.elements;return wn.subVectors(e,n),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),tr.crossVectors(i,wn),tr.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),tr.crossVectors(i,wn)),tr.normalize(),xl.crossVectors(wn,tr),r[0]=tr.x,r[4]=xl.x,r[8]=wn.x,r[1]=tr.y,r[5]=xl.y,r[9]=wn.y,r[2]=tr.z,r[6]=xl.z,r[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],g=i[2],y=i[6],v=i[10],h=i[14],m=i[3],x=i[7],M=i[11],w=i[15],T=r[0],b=r[4],_=r[8],C=r[12],P=r[1],R=r[5],L=r[9],U=r[13],O=r[2],D=r[6],k=r[10],B=r[14],V=r[3],Y=r[7],K=r[11],ee=r[15];return s[0]=o*T+a*P+l*O+c*V,s[4]=o*b+a*R+l*D+c*Y,s[8]=o*_+a*L+l*k+c*K,s[12]=o*C+a*U+l*B+c*ee,s[1]=u*T+d*P+f*O+p*V,s[5]=u*b+d*R+f*D+p*Y,s[9]=u*_+d*L+f*k+p*K,s[13]=u*C+d*U+f*B+p*ee,s[2]=g*T+y*P+v*O+h*V,s[6]=g*b+y*R+v*D+h*Y,s[10]=g*_+y*L+v*k+h*K,s[14]=g*C+y*U+v*B+h*ee,s[3]=m*T+x*P+M*O+w*V,s[7]=m*b+x*R+M*D+w*Y,s[11]=m*_+x*L+M*k+w*K,s[15]=m*C+x*U+M*B+w*ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],g=e[3],y=e[7],v=e[11],h=e[15],m=l*p-c*f,x=a*p-c*d,M=a*f-l*d,w=o*p-c*u,T=o*f-l*u,b=o*d-a*u;return n*(y*m-v*x+h*M)-i*(g*m-v*w+h*T)+r*(g*x-y*w+h*b)-s*(g*M-y*T+v*b)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],g=e[12],y=e[13],v=e[14],h=e[15],m=n*a-i*o,x=n*l-r*o,M=n*c-s*o,w=i*l-r*a,T=i*c-s*a,b=r*c-s*l,_=u*y-d*g,C=u*v-f*g,P=u*h-p*g,R=d*v-f*y,L=d*h-p*y,U=f*h-p*v,O=m*U-x*L+M*R+w*P-T*C+b*_;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/O;return e[0]=(a*U-l*L+c*R)*D,e[1]=(r*L-i*U-s*R)*D,e[2]=(y*b-v*T+h*w)*D,e[3]=(f*T-d*b-p*w)*D,e[4]=(l*P-o*U-c*C)*D,e[5]=(n*U-r*P+s*C)*D,e[6]=(v*M-g*b-h*x)*D,e[7]=(u*b-f*M+p*x)*D,e[8]=(o*L-a*P+c*_)*D,e[9]=(i*P-n*L-s*_)*D,e[10]=(g*T-y*M+h*m)*D,e[11]=(d*M-u*T-p*m)*D,e[12]=(a*C-o*R-l*_)*D,e[13]=(n*R-i*C+r*_)*D,e[14]=(y*x-g*w-v*m)*D,e[15]=(u*w-d*x+f*m)*D,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,f=s*c,p=s*u,g=s*d,y=o*u,v=o*d,h=a*d,m=l*c,x=l*u,M=l*d,w=i.x,T=i.y,b=i.z;return r[0]=(1-(y+h))*w,r[1]=(p+M)*w,r[2]=(g-x)*w,r[3]=0,r[4]=(p-M)*T,r[5]=(1-(f+h))*T,r[6]=(v+m)*T,r[7]=0,r[8]=(g+x)*b,r[9]=(v-m)*b,r[10]=(1-(f+y))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let o=Es.set(r[0],r[1],r[2]).length();const a=Es.set(r[4],r[5],r[6]).length(),l=Es.set(r[8],r[9],r[10]).length();s<0&&(o=-o),qn.copy(this);const c=1/o,u=1/a,d=1/l;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=u,qn.elements[5]*=u,qn.elements[6]*=u,qn.elements[8]*=d,qn.elements[9]*=d,qn.elements[10]*=d,n.setFromRotationMatrix(qn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=gi,l=!1){const c=this.elements,u=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let g,y;if(l)g=s/(o-s),y=o*s/(o-s);else if(a===gi)g=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Ua)g=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=gi,l=!1){const c=this.elements,u=2/(n-e),d=2/(i-r),f=-(n+e)/(n-e),p=-(i+r)/(i-r);let g,y;if(l)g=1/(o-s),y=o/(o-s);else if(a===gi)g=-2/(o-s),y=-(o+s)/(o-s);else if(a===Ua)g=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Wc.prototype.isMatrix4=!0;let Lt=Wc;const Es=new H,qn=new Lt,fR=new H(0,0,0),dR=new H(1,1,1),tr=new H,xl=new H,wn=new H,ov=new Lt,av=new Eo;class Lr{constructor(e=0,n=0,i=0,r=Lr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ov.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ov,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return av.setFromEuler(this),this.setFromQuaternion(av,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Lr.DEFAULT_ORDER="XYZ";class qS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hR=0;const lv=new H,Ts=new Eo,Ai=new Lt,_l=new H,Bo=new H,pR=new H,mR=new Eo,cv=new H(1,0,0),uv=new H(0,1,0),fv=new H(0,0,1),dv={type:"added"},gR={type:"removed"},ws={type:"childadded",child:null},gf={type:"childremoved",child:null};class rn extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hR++}),this.uuid=ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const e=new H,n=new Lr,i=new Eo,r=new H(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Lt},normalMatrix:{value:new Fe}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ts.setFromAxisAngle(e,n),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,n){return Ts.setFromAxisAngle(e,n),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(cv,e)}rotateY(e){return this.rotateOnAxis(uv,e)}rotateZ(e){return this.rotateOnAxis(fv,e)}translateOnAxis(e,n){return lv.copy(e).applyQuaternion(this.quaternion),this.position.add(lv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(cv,e)}translateY(e){return this.translateOnAxis(uv,e)}translateZ(e){return this.translateOnAxis(fv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?_l.copy(e):_l.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(Bo,_l,this.up):Ai.lookAt(_l,Bo,this.up),this.quaternion.setFromRotationMatrix(Ai),r&&(Ai.extractRotation(r.matrixWorld),Ts.setFromRotationMatrix(Ai),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dv),ws.child=e,this.dispatchEvent(ws),ws.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(gR),gf.child=e,this.dispatchEvent(gf),gf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dv),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,e,pR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,mR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}rn.DEFAULT_UP=new H(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class is extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vR={type:"move"};class vf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new is,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new is,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new is,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const v=n.getJointPose(y,i),h=this._getHandJoint(c,y);v!==null&&(h.matrix.fromArray(v.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=v.radius),h.visible=v!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vR)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new is;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const KS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},yl={h:0,s:0,l:0};function xf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class et{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=$e.workingColorSpace){return this.r=e,this.g=n,this.b=i,$e.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=$e.workingColorSpace){if(e=rR(e,1),n=qe(n,0,1),i=qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=xf(o,s,e+1/3),this.g=xf(o,s,e),this.b=xf(o,s,e-1/3)}return $e.colorSpaceToWorking(this,r),this}setStyle(e,n=Vn){function i(s){s!==void 0&&parseFloat(s)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ne("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Vn){const i=KS[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=ro(e.r),this.g=ro(e.g),this.b=ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vn){return $e.workingToColorSpace(Jt.copy(this),e),Math.round(qe(Jt.r*255,0,255))*65536+Math.round(qe(Jt.g*255,0,255))*256+Math.round(qe(Jt.b*255,0,255))}getHexString(e=Vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=$e.workingColorSpace){$e.workingToColorSpace(Jt.copy(this),n);const i=Jt.r,r=Jt.g,s=Jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=$e.workingColorSpace){return $e.workingToColorSpace(Jt.copy(this),n),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Vn){$e.workingToColorSpace(Jt.copy(this),e);const n=Jt.r,i=Jt.g,r=Jt.b;return e!==Vn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(nr),this.setHSL(nr.h+e,nr.s+n,nr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(nr),e.getHSL(yl);const i=ff(nr.h,yl.h,n),r=ff(nr.s,yl.s,n),s=ff(nr.l,yl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new et;et.NAMES=KS;class xR extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Lr,this.environmentIntensity=1,this.environmentRotation=new Lr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Kn=new H,Ci=new H,_f=new H,bi=new H,As=new H,Cs=new H,hv=new H,yf=new H,Sf=new H,Mf=new H,Ef=new Ct,Tf=new Ct,wf=new Ct;class ti{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Kn.subVectors(e,n),r.cross(Kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Kn.subVectors(r,n),Ci.subVectors(i,n),_f.subVectors(e,n);const o=Kn.dot(Kn),a=Kn.dot(Ci),l=Kn.dot(_f),c=Ci.dot(Ci),u=Ci.dot(_f),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,bi.x),l.addScaledVector(o,bi.y),l.addScaledVector(a,bi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Ef.setScalar(0),Tf.setScalar(0),wf.setScalar(0),Ef.fromBufferAttribute(e,n),Tf.fromBufferAttribute(e,i),wf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ef,s.x),o.addScaledVector(Tf,s.y),o.addScaledVector(wf,s.z),o}static isFrontFacing(e,n,i,r){return Kn.subVectors(i,n),Ci.subVectors(e,n),Kn.cross(Ci).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),Kn.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ti.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ti.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;As.subVectors(r,i),Cs.subVectors(s,i),yf.subVectors(e,i);const l=As.dot(yf),c=Cs.dot(yf);if(l<=0&&c<=0)return n.copy(i);Sf.subVectors(e,r);const u=As.dot(Sf),d=Cs.dot(Sf);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(As,o);Mf.subVectors(e,s);const p=As.dot(Mf),g=Cs.dot(Mf);if(g>=0&&p<=g)return n.copy(s);const y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Cs,a);const v=u*g-p*d;if(v<=0&&d-u>=0&&p-g>=0)return hv.subVectors(s,r),a=(d-u)/(d-u+(p-g)),n.copy(r).addScaledVector(hv,a);const h=1/(v+y+f);return o=y*h,a=f*h,n.copy(i).addScaledVector(As,o).addScaledVector(Cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Xa{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Zn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Zn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Zn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zn):Zn.fromBufferAttribute(s,o),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Sl.copy(i.boundingBox)),Sl.applyMatrix4(e.matrixWorld),this.union(Sl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vo),Ml.subVectors(this.max,Vo),bs.subVectors(e.a,Vo),Rs.subVectors(e.b,Vo),Ps.subVectors(e.c,Vo),ir.subVectors(Rs,bs),rr.subVectors(Ps,Rs),Br.subVectors(bs,Ps);let n=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-Br.z,Br.y,ir.z,0,-ir.x,rr.z,0,-rr.x,Br.z,0,-Br.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-Br.y,Br.x,0];return!Af(n,bs,Rs,Ps,Ml)||(n=[1,0,0,0,1,0,0,0,1],!Af(n,bs,Rs,Ps,Ml))?!1:(El.crossVectors(ir,rr),n=[El.x,El.y,El.z],Af(n,bs,Rs,Ps,Ml))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ri=[new H,new H,new H,new H,new H,new H,new H,new H],Zn=new H,Sl=new Xa,bs=new H,Rs=new H,Ps=new H,ir=new H,rr=new H,Br=new H,Vo=new H,Ml=new H,El=new H,Vr=new H;function Af(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Vr.fromArray(t,s);const a=r.x*Math.abs(Vr.x)+r.y*Math.abs(Vr.y)+r.z*Math.abs(Vr.z),l=e.dot(Vr),c=n.dot(Vr),u=i.dot(Vr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Nt=new H,Tl=new tt;let _R=0;class Mi extends vs{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_R++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=J0,this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Tl.fromBufferAttribute(this,n),Tl.applyMatrix3(e),this.setXY(n,Tl.x,Tl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix3(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix4(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyNormalMatrix(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.transformDirection(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ko(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=mn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ko(n,this.array)),n}setX(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ko(n,this.array)),n}setY(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ko(n,this.array)),n}setZ(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ko(n,this.array)),n}setW(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),i=mn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),i=mn(i,this.array),r=mn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),i=mn(i,this.array),r=mn(r,this.array),s=mn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==J0&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class ZS extends Mi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class QS extends Mi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class dn extends Mi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const yR=new Xa,zo=new H,Cf=new H;class vm{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):yR.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zo.subVectors(e,this.center);const n=zo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(zo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zo.copy(e.center).add(Cf)),this.expandByPoint(zo.copy(e.center).sub(Cf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let SR=0;const On=new Lt,bf=new rn,Ds=new H,An=new Xa,Ho=new Xa,Ht=new H;class oi extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:SR++}),this.uuid=ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(eR(e)?QS:ZS)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,n,i){return On.makeTranslation(e,n,i),this.applyMatrix4(On),this}scale(e,n,i){return On.makeScale(e,n,i),this.applyMatrix4(On),this}lookAt(e){return bf.lookAt(e),bf.updateMatrix(),this.applyMatrix4(bf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new dn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];An.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vm);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ho.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(An.min,Ho.min),An.expandByPoint(Ht),Ht.addVectors(An.max,Ho.max),An.expandByPoint(Ht)):(An.expandByPoint(Ho.min),An.expandByPoint(Ho.max))}An.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ht));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ht.fromBufferAttribute(a,c),l&&(Ds.fromBufferAttribute(e,c),Ht.add(Ds)),r=Math.max(r,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let _=0;_<i.count;_++)a[_]=new H,l[_]=new H;const c=new H,u=new H,d=new H,f=new tt,p=new tt,g=new tt,y=new H,v=new H;function h(_,C,P){c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,P),f.fromBufferAttribute(s,_),p.fromBufferAttribute(s,C),g.fromBufferAttribute(s,P),u.sub(c),d.sub(c),p.sub(f),g.sub(f);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(R),v.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(R),a[_].add(y),a[C].add(y),a[P].add(y),l[_].add(v),l[C].add(v),l[P].add(v))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let _=0,C=m.length;_<C;++_){const P=m[_],R=P.start,L=P.count;for(let U=R,O=R+L;U<O;U+=3)h(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const x=new H,M=new H,w=new H,T=new H;function b(_){w.fromBufferAttribute(r,_),T.copy(w);const C=a[_];x.copy(C),x.sub(w.multiplyScalar(w.dot(C))).normalize(),M.crossVectors(T,C);const R=M.dot(l[_])<0?-1:1;o.setXYZW(_,x.x,x.y,x.z,R)}for(let _=0,C=m.length;_<C;++_){const P=m[_],R=P.start,L=P.count;for(let U=R,O=R+L;U<O;U+=3)b(e.getX(U+0)),b(e.getX(U+1)),b(e.getX(U+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Mi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new H,s=new H,o=new H,a=new H,l=new H,c=new H,u=new H,d=new H;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),y=e.getX(f+1),v=e.getX(f+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,v),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,v),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ht.fromBufferAttribute(e,n),Ht.normalize(),e.setXYZ(n,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let y=0,v=l.length;y<v;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let h=0;h<u;h++)f[g++]=c[p++]}return new Mi(f,u,d)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new oi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let MR=0;class To extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:MR++}),this.uuid=ja(),this.name="",this.type="Material",this.blending=io,this.side=Dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zd,this.blendDst=Qd,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Q0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ne(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ne(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==io&&(i.blending=this.blending),this.side!==Dr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Zd&&(i.blendSrc=this.blendSrc),this.blendDst!==Qd&&(i.blendDst=this.blendDst),this.blendEquation!==qr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==mo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Q0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Pi=new H,Rf=new H,wl=new H,sr=new H,Pf=new H,Al=new H,Df=new H;class ER{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Pi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,n),Pi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Rf.copy(e).add(n).multiplyScalar(.5),wl.copy(n).sub(e).normalize(),sr.copy(this.origin).sub(Rf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(wl),a=sr.dot(this.direction),l=-sr.dot(wl),c=sr.lengthSq(),u=Math.abs(1-o*o);let d,f,p,g;if(u>0)if(d=o*l-a,f=o*a-l,g=s*u,d>=0)if(f>=-g)if(f<=g){const y=1/u;d*=y,f*=y,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Rf).addScaledVector(wl,f),p}intersectSphere(e,n){Pi.subVectors(e.center,this.origin);const i=Pi.dot(this.direction),r=Pi.dot(Pi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,n,i,r,s){Pf.subVectors(n,e),Al.subVectors(i,e),Df.crossVectors(Pf,Al);let o=this.direction.dot(Df),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;sr.subVectors(this.origin,e);const l=a*this.direction.dot(Al.crossVectors(sr,Al));if(l<0)return null;const c=a*this.direction.dot(Pf.cross(sr));if(c<0||l+c>o)return null;const u=-a*sr.dot(Df);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class JS extends To{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lr,this.combine=DS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pv=new Lt,zr=new ER,Cl=new vm,mv=new H,bl=new H,Rl=new H,Pl=new H,Lf=new H,Dl=new H,gv=new H,Ll=new H;class cn extends rn{constructor(e=new oi,n=new JS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Dl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Lf.fromBufferAttribute(d,e),o?Dl.addScaledVector(Lf,u):Dl.addScaledVector(Lf.sub(n),u))}n.add(Dl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Cl.copy(i.boundingSphere),Cl.applyMatrix4(s),zr.copy(e.ray).recast(e.near),!(Cl.containsPoint(zr.origin)===!1&&(zr.intersectSphere(Cl,mv)===null||zr.origin.distanceToSquared(mv)>(e.far-e.near)**2))&&(pv.copy(s).invert(),zr.copy(e.ray).applyMatrix4(pv),!(i.boundingBox!==null&&zr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,zr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){const v=f[g],h=o[v.materialIndex],m=Math.max(v.start,p.start),x=Math.min(a.count,Math.min(v.start+v.count,p.start+p.count));for(let M=m,w=x;M<w;M+=3){const T=a.getX(M),b=a.getX(M+1),_=a.getX(M+2);r=Nl(this,h,e,i,c,u,d,T,b,_),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let v=g,h=y;v<h;v+=3){const m=a.getX(v),x=a.getX(v+1),M=a.getX(v+2);r=Nl(this,o,e,i,c,u,d,m,x,M),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){const v=f[g],h=o[v.materialIndex],m=Math.max(v.start,p.start),x=Math.min(l.count,Math.min(v.start+v.count,p.start+p.count));for(let M=m,w=x;M<w;M+=3){const T=M,b=M+1,_=M+2;r=Nl(this,h,e,i,c,u,d,T,b,_),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let v=g,h=y;v<h;v+=3){const m=v,x=v+1,M=v+2;r=Nl(this,o,e,i,c,u,d,m,x,M),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}}}function TR(t,e,n,i,r,s,o,a){let l;if(e.side===Sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Dr,a),l===null)return null;Ll.copy(a),Ll.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ll);return c<n.near||c>n.far?null:{distance:c,point:Ll.clone(),object:t}}function Nl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,bl),t.getVertexPosition(l,Rl),t.getVertexPosition(c,Pl);const u=TR(t,e,n,i,bl,Rl,Pl,gv);if(u){const d=new H;ti.getBarycoord(gv,bl,Rl,Pl,d),r&&(u.uv=ti.getInterpolatedAttribute(r,a,l,c,d,new tt)),s&&(u.uv1=ti.getInterpolatedAttribute(s,a,l,c,d,new tt)),o&&(u.normal=ti.getInterpolatedAttribute(o,a,l,c,d,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new H,materialIndex:0};ti.getNormal(bl,Rl,Pl,f.normal),u.face=f,u.barycoord=d}return u}class wR extends fn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Xt,u=Xt,d,f){super(null,o,a,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nf=new H,AR=new H,CR=new Fe;class $r{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Nf.subVectors(i,n).cross(AR.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Nf),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||CR.getNormalMatrix(e),r=this.coplanarPoint(Nf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new vm,bR=new tt(.5,.5),Il=new H;class xm{constructor(e=new $r,n=new $r,i=new $r,r=new $r,s=new $r,o=new $r){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=gi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],p=s[7],g=s[8],y=s[9],v=s[10],h=s[11],m=s[12],x=s[13],M=s[14],w=s[15];if(r[0].setComponents(c-o,p-u,h-g,w-m).normalize(),r[1].setComponents(c+o,p+u,h+g,w+m).normalize(),r[2].setComponents(c+a,p+d,h+y,w+x).normalize(),r[3].setComponents(c-a,p-d,h-y,w-x).normalize(),i)r[4].setComponents(l,f,v,M).normalize(),r[5].setComponents(c-l,p-f,h-v,w-M).normalize();else if(r[4].setComponents(c-l,p-f,h-v,w-M).normalize(),n===gi)r[5].setComponents(c+l,p+f,h+v,w+M).normalize();else if(n===Ua)r[5].setComponents(l,f,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){Hr.center.set(0,0,0);const n=bR.distanceTo(e.center);return Hr.radius=.7071067811865476+n,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Il.x=r.normal.x>0?e.max.x:e.min.x,Il.y=r.normal.y>0?e.max.y:e.min.y,Il.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Il)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class eM extends fn{constructor(e=[],n=fs,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vo extends fn{constructor(e,n,i=Ei,r,s,o,a=Xt,l=Xt,c,u=qi,d=1){if(u!==qi&&u!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class RR extends vo{constructor(e,n=Ei,i=fs,r,s,o=Xt,a=Xt,l,c=qi){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,n,i,r,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class tM extends fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class wo extends oi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new dn(c,3)),this.setAttribute("normal",new dn(u,3)),this.setAttribute("uv",new dn(d,2));function g(y,v,h,m,x,M,w,T,b,_,C){const P=M/b,R=w/_,L=M/2,U=w/2,O=T/2,D=b+1,k=_+1;let B=0,V=0;const Y=new H;for(let K=0;K<k;K++){const ee=K*R-U;for(let ce=0;ce<D;ce++){const Ue=ce*P-L;Y[y]=Ue*m,Y[v]=ee*x,Y[h]=O,c.push(Y.x,Y.y,Y.z),Y[y]=0,Y[v]=0,Y[h]=T>0?1:-1,u.push(Y.x,Y.y,Y.z),d.push(ce/b),d.push(1-K/_),B+=1}}for(let K=0;K<_;K++)for(let ee=0;ee<b;ee++){const ce=f+ee+D*K,Ue=f+ee+D*(K+1),ze=f+(ee+1)+D*(K+1),De=f+(ee+1)+D*K;l.push(ce,Ue,De),l.push(Ue,ze,De),V+=6}a.addGroup(p,V,C),p+=V,f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class _m extends oi{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],f=[],p=[];let g=0;const y=[],v=i/2;let h=0;m(),o===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new dn(d,3)),this.setAttribute("normal",new dn(f,3)),this.setAttribute("uv",new dn(p,2));function m(){const M=new H,w=new H;let T=0;const b=(n-e)/i;for(let _=0;_<=s;_++){const C=[],P=_/s,R=P*(n-e)+e;for(let L=0;L<=r;L++){const U=L/r,O=U*l+a,D=Math.sin(O),k=Math.cos(O);w.x=R*D,w.y=-P*i+v,w.z=R*k,d.push(w.x,w.y,w.z),M.set(D,b,k).normalize(),f.push(M.x,M.y,M.z),p.push(U,1-P),C.push(g++)}y.push(C)}for(let _=0;_<r;_++)for(let C=0;C<s;C++){const P=y[C][_],R=y[C+1][_],L=y[C+1][_+1],U=y[C][_+1];(e>0||C!==0)&&(u.push(P,R,U),T+=3),(n>0||C!==s-1)&&(u.push(R,L,U),T+=3)}c.addGroup(h,T,0),h+=T}function x(M){const w=g,T=new tt,b=new H;let _=0;const C=M===!0?e:n,P=M===!0?1:-1;for(let L=1;L<=r;L++)d.push(0,v*P,0),f.push(0,P,0),p.push(.5,.5),g++;const R=g;for(let L=0;L<=r;L++){const O=L/r*l+a,D=Math.cos(O),k=Math.sin(O);b.x=C*k,b.y=v*P,b.z=C*D,d.push(b.x,b.y,b.z),f.push(0,P,0),T.x=D*.5+.5,T.y=k*.5*P+.5,p.push(T.x,T.y),g++}for(let L=0;L<r;L++){const U=w+L,O=R+L;M===!0?u.push(O,O+1,U):u.push(O+1,O,U),_+=3}c.addGroup(h,_,M===!0?1:2),h+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _m(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ya extends oi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=n/l,p=[],g=[],y=[],v=[];for(let h=0;h<u;h++){const m=h*f-o;for(let x=0;x<c;x++){const M=x*d-s;g.push(M,-m,0),y.push(0,0,1),v.push(x/a),v.push(1-h/l)}}for(let h=0;h<l;h++)for(let m=0;m<a;m++){const x=m+c*h,M=m+c*(h+1),w=m+1+c*(h+1),T=m+1+c*h;p.push(x,M,T),p.push(M,w,T)}this.setIndex(p),this.setAttribute("position",new dn(g,3)),this.setAttribute("normal",new dn(y,3)),this.setAttribute("uv",new dn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ya(e.width,e.height,e.widthSegments,e.heightSegments)}}class Gc extends oi{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new H,f=new H,p=[],g=[],y=[],v=[];for(let h=0;h<=i;h++){const m=[],x=h/i;let M=0;h===0&&o===0?M=.5/n:h===i&&l===Math.PI&&(M=-.5/n);for(let w=0;w<=n;w++){const T=w/n;d.x=-e*Math.cos(r+T*s)*Math.sin(o+x*a),d.y=e*Math.cos(o+x*a),d.z=e*Math.sin(r+T*s)*Math.sin(o+x*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),y.push(f.x,f.y,f.z),v.push(T+M,1-x),m.push(c++)}u.push(m)}for(let h=0;h<i;h++)for(let m=0;m<n;m++){const x=u[h][m+1],M=u[h][m],w=u[h+1][m],T=u[h+1][m+1];(h!==0||o>0)&&p.push(x,M,T),(h!==i-1||l<Math.PI)&&p.push(M,w,T)}this.setIndex(p),this.setAttribute("position",new dn(g,3)),this.setAttribute("normal",new dn(y,3)),this.setAttribute("uv",new dn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class PR extends To{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new et(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function xo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(vv(r))r.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(vv(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function on(t){const e={};for(let n=0;n<t.length;n++){const i=xo(t[n]);for(const r in i)e[r]=i[r]}return e}function vv(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function DR(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function nM(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const LR={clone:xo,merge:on};var NR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,IR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends To{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NR,this.fragmentShader=IR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xo(e.uniforms),this.uniformsGroups=DR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class UR extends Ti{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class If extends To{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kh,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class FR extends To{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class OR extends To{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class iM extends rn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Uf=new Lt,xv=new H,_v=new H;class kR{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xm,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;xv.setFromMatrixPosition(e.matrixWorld),n.position.copy(xv),_v.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(_v),n.updateMatrixWorld(),Uf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uf,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Ua||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Uf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ul=new H,Fl=new Eo,ui=new H;class rM extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ul,Fl,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ul,Fl,ui.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Ul,Fl,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ul,Fl,ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const or=new H,yv=new tt,Sv=new tt;class Gn extends rM{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Vh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(uf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vh*2*Math.atan(Math.tan(uf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(or.x,or.y).multiplyScalar(-e/or.z),or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(or.x,or.y).multiplyScalar(-e/or.z)}getViewSize(e,n){return this.getViewBounds(e,yv,Sv),n.subVectors(Sv,yv)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(uf*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class ym extends rM{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class BR extends kR{constructor(){super(new ym(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ff extends iM{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new BR}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class VR extends iM{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ls=-90,Ns=1;class zR extends rn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gn(Ls,Ns,e,n);r.layers=this.layers,this.add(r);const s=new Gn(Ls,Ns,e,n);s.layers=this.layers,this.add(s);const o=new Gn(Ls,Ns,e,n);o.layers=this.layers,this.add(o);const a=new Gn(Ls,Ns,e,n);a.layers=this.layers,this.add(a);const l=new Gn(Ls,Ns,e,n);l.layers=this.layers,this.add(l);const c=new Gn(Ls,Ns,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ua)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class HR extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class GR{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ne("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const Am=class Am{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Am.prototype.isMatrix2=!0;let Mv=Am;function Ev(t,e,n,i){const r=WR(i);switch(n){case WS:return t*e;case XS:return t*e/r.components*r.byteLength;case fm:return t*e/r.components*r.byteLength;case ds:return t*e*2/r.components*r.byteLength;case dm:return t*e*2/r.components*r.byteLength;case jS:return t*e*3/r.components*r.byteLength;case ni:return t*e*4/r.components*r.byteLength;case hm:return t*e*4/r.components*r.byteLength;case tc:case nc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ic:case rc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ch:case fh:return Math.max(t,16)*Math.max(e,8)/4;case lh:case uh:return Math.max(t,8)*Math.max(e,8)/2;case dh:case hh:case mh:case gh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ph:case kc:case vh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case xh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case _h:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case yh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Mh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Eh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Th:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case wh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Ah:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case bh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Rh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Ph:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Dh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Lh:case Nh:case Ih:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Uh:case Fh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Bc:case Oh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function WR(t){switch(t){case bn:case VS:return{byteLength:1,components:1};case Na:case zS:case $i:return{byteLength:2,components:1};case cm:case um:return{byteLength:2,components:4};case Ei:case lm:case mi:return{byteLength:4,components:1};case HS:case GS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:am}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=am);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function sM(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function jR(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){const g=d[f],y=d[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,d[f]=y)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){const y=d[p];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var XR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,YR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$R=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ZR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,QR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,JR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eP=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,tP=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nP=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iP=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rP=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sP=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,oP=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,aP=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uP=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,dP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,mP=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gP=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vP=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xP=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_P=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yP=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,SP=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,MP="gl_FragColor = linearToOutputTexel( gl_FragColor );",EP=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,TP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,wP=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,AP=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,CP=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,RP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,NP=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,IP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,UP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,FP=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OP=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,kP=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,BP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,VP=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HP=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GP=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,WP=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jP=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,XP=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,YP=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$P=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,qP=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KP=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZP=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QP=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,JP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,e2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,n2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,i2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,r2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,s2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,o2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,a2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,c2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,f2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,d2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,m2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,g2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,v2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,x2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,y2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,S2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,M2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,E2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,T2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,C2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,b2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,R2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,P2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,D2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,L2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,I2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,U2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,F2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,k2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,B2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,V2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,z2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,H2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,G2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,W2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,j2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const X2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Y2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,J2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,e3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,t3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,n3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,s3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,a3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,f3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,h3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,p3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,v3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,S3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,w3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:XR,alphahash_pars_fragment:YR,alphamap_fragment:$R,alphamap_pars_fragment:qR,alphatest_fragment:KR,alphatest_pars_fragment:ZR,aomap_fragment:QR,aomap_pars_fragment:JR,batching_pars_vertex:eP,batching_vertex:tP,begin_vertex:nP,beginnormal_vertex:iP,bsdfs:rP,iridescence_fragment:sP,bumpmap_pars_fragment:oP,clipping_planes_fragment:aP,clipping_planes_pars_fragment:lP,clipping_planes_pars_vertex:cP,clipping_planes_vertex:uP,color_fragment:fP,color_pars_fragment:dP,color_pars_vertex:hP,color_vertex:pP,common:mP,cube_uv_reflection_fragment:gP,defaultnormal_vertex:vP,displacementmap_pars_vertex:xP,displacementmap_vertex:_P,emissivemap_fragment:yP,emissivemap_pars_fragment:SP,colorspace_fragment:MP,colorspace_pars_fragment:EP,envmap_fragment:TP,envmap_common_pars_fragment:wP,envmap_pars_fragment:AP,envmap_pars_vertex:CP,envmap_physical_pars_fragment:kP,envmap_vertex:bP,fog_vertex:RP,fog_pars_vertex:PP,fog_fragment:DP,fog_pars_fragment:LP,gradientmap_pars_fragment:NP,lightmap_pars_fragment:IP,lights_lambert_fragment:UP,lights_lambert_pars_fragment:FP,lights_pars_begin:OP,lights_toon_fragment:BP,lights_toon_pars_fragment:VP,lights_phong_fragment:zP,lights_phong_pars_fragment:HP,lights_physical_fragment:GP,lights_physical_pars_fragment:WP,lights_fragment_begin:jP,lights_fragment_maps:XP,lights_fragment_end:YP,lightprobes_pars_fragment:$P,logdepthbuf_fragment:qP,logdepthbuf_pars_fragment:KP,logdepthbuf_pars_vertex:ZP,logdepthbuf_vertex:QP,map_fragment:JP,map_pars_fragment:e2,map_particle_fragment:t2,map_particle_pars_fragment:n2,metalnessmap_fragment:i2,metalnessmap_pars_fragment:r2,morphinstance_vertex:s2,morphcolor_vertex:o2,morphnormal_vertex:a2,morphtarget_pars_vertex:l2,morphtarget_vertex:c2,normal_fragment_begin:u2,normal_fragment_maps:f2,normal_pars_fragment:d2,normal_pars_vertex:h2,normal_vertex:p2,normalmap_pars_fragment:m2,clearcoat_normal_fragment_begin:g2,clearcoat_normal_fragment_maps:v2,clearcoat_pars_fragment:x2,iridescence_pars_fragment:_2,opaque_fragment:y2,packing:S2,premultiplied_alpha_fragment:M2,project_vertex:E2,dithering_fragment:T2,dithering_pars_fragment:w2,roughnessmap_fragment:A2,roughnessmap_pars_fragment:C2,shadowmap_pars_fragment:b2,shadowmap_pars_vertex:R2,shadowmap_vertex:P2,shadowmask_pars_fragment:D2,skinbase_vertex:L2,skinning_pars_vertex:N2,skinning_vertex:I2,skinnormal_vertex:U2,specularmap_fragment:F2,specularmap_pars_fragment:O2,tonemapping_fragment:k2,tonemapping_pars_fragment:B2,transmission_fragment:V2,transmission_pars_fragment:z2,uv_pars_fragment:H2,uv_pars_vertex:G2,uv_vertex:W2,worldpos_vertex:j2,background_vert:X2,background_frag:Y2,backgroundCube_vert:$2,backgroundCube_frag:q2,cube_vert:K2,cube_frag:Z2,depth_vert:Q2,depth_frag:J2,distance_vert:e3,distance_frag:t3,equirect_vert:n3,equirect_frag:i3,linedashed_vert:r3,linedashed_frag:s3,meshbasic_vert:o3,meshbasic_frag:a3,meshlambert_vert:l3,meshlambert_frag:c3,meshmatcap_vert:u3,meshmatcap_frag:f3,meshnormal_vert:d3,meshnormal_frag:h3,meshphong_vert:p3,meshphong_frag:m3,meshphysical_vert:g3,meshphysical_frag:v3,meshtoon_vert:x3,meshtoon_frag:_3,points_vert:y3,points_frag:S3,shadow_vert:M3,shadow_frag:E3,sprite_vert:T3,sprite_frag:w3},me={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},hi={basic:{uniforms:on([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:on([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new et(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:on([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:on([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:on([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new et(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:on([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:on([me.points,me.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:on([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:on([me.common,me.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:on([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:on([me.sprite,me.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:on([me.common,me.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:on([me.lights,me.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};hi.physical={uniforms:on([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Ol={r:0,b:0,g:0},A3=new Lt,oM=new Fe;oM.set(-1,0,0,0,1,0,0,0,1);function C3(t,e,n,i,r,s){const o=new et(0);let a=r===!0?0:1,l,c,u=null,d=0,f=null;function p(m){let x=m.isScene===!0?m.background:null;if(x&&x.isTexture){const M=m.backgroundBlurriness>0;x=e.get(x,M)}return x}function g(m){let x=!1;const M=p(m);M===null?v(o,a):M&&M.isColor&&(v(M,1),x=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function y(m,x){const M=p(x);M&&(M.isCubeTexture||M.mapping===gu)?(c===void 0&&(c=new cn(new wo(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:xo(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(A3.makeRotationFromEuler(x.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(oM),c.material.toneMapped=$e.getTransfer(M.colorSpace)!==nt,(u!==M||d!==M.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,f=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new cn(new Ya(2,2),new Ti({name:"BackgroundMaterial",uniforms:xo(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:Dr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=$e.getTransfer(M.colorSpace)!==nt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,f=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function v(m,x){m.getRGB(Ol,nM(t)),n.buffers.color.setClear(Ol.r,Ol.g,Ol.b,x,s)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(m,x=1){o.set(m),a=x,v(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,v(o,a)},render:g,addToRenderList:y,dispose:h}}function b3(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(R,L,U,O,D){let k=!1;const B=d(R,O,U,L);s!==B&&(s=B,c(s.object)),k=p(R,O,U,D),k&&g(R,O,U,D),D!==null&&e.update(D,t.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,M(R,L,U,O),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return t.createVertexArray()}function c(R){return t.bindVertexArray(R)}function u(R){return t.deleteVertexArray(R)}function d(R,L,U,O){const D=O.wireframe===!0;let k=i[L.id];k===void 0&&(k={},i[L.id]=k);const B=R.isInstancedMesh===!0?R.id:0;let V=k[B];V===void 0&&(V={},k[B]=V);let Y=V[U.id];Y===void 0&&(Y={},V[U.id]=Y);let K=Y[D];return K===void 0&&(K=f(l()),Y[D]=K),K}function f(R){const L=[],U=[],O=[];for(let D=0;D<n;D++)L[D]=0,U[D]=0,O[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:O,object:R,attributes:{},index:null}}function p(R,L,U,O){const D=s.attributes,k=L.attributes;let B=0;const V=U.getAttributes();for(const Y in V)if(V[Y].location>=0){const ee=D[Y];let ce=k[Y];if(ce===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(ce=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(ce=R.instanceColor)),ee===void 0||ee.attribute!==ce||ce&&ee.data!==ce.data)return!0;B++}return s.attributesNum!==B||s.index!==O}function g(R,L,U,O){const D={},k=L.attributes;let B=0;const V=U.getAttributes();for(const Y in V)if(V[Y].location>=0){let ee=k[Y];ee===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(ee=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(ee=R.instanceColor));const ce={};ce.attribute=ee,ee&&ee.data&&(ce.data=ee.data),D[Y]=ce,B++}s.attributes=D,s.attributesNum=B,s.index=O}function y(){const R=s.newAttributes;for(let L=0,U=R.length;L<U;L++)R[L]=0}function v(R){h(R,0)}function h(R,L){const U=s.newAttributes,O=s.enabledAttributes,D=s.attributeDivisors;U[R]=1,O[R]===0&&(t.enableVertexAttribArray(R),O[R]=1),D[R]!==L&&(t.vertexAttribDivisor(R,L),D[R]=L)}function m(){const R=s.newAttributes,L=s.enabledAttributes;for(let U=0,O=L.length;U<O;U++)L[U]!==R[U]&&(t.disableVertexAttribArray(U),L[U]=0)}function x(R,L,U,O,D,k,B){B===!0?t.vertexAttribIPointer(R,L,U,D,k):t.vertexAttribPointer(R,L,U,O,D,k)}function M(R,L,U,O){y();const D=O.attributes,k=U.getAttributes(),B=L.defaultAttributeValues;for(const V in k){const Y=k[V];if(Y.location>=0){let K=D[V];if(K===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(K=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(K=R.instanceColor)),K!==void 0){const ee=K.normalized,ce=K.itemSize,Ue=e.get(K);if(Ue===void 0)continue;const ze=Ue.buffer,De=Ue.type,q=Ue.bytesPerElement,he=De===t.INT||De===t.UNSIGNED_INT||K.gpuType===lm;if(K.isInterleavedBufferAttribute){const le=K.data,Re=le.stride,Le=K.offset;if(le.isInstancedInterleavedBuffer){for(let Ce=0;Ce<Y.locationSize;Ce++)h(Y.location+Ce,le.meshPerAttribute);R.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ce=0;Ce<Y.locationSize;Ce++)v(Y.location+Ce);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let Ce=0;Ce<Y.locationSize;Ce++)x(Y.location+Ce,ce/Y.locationSize,De,ee,Re*q,(Le+ce/Y.locationSize*Ce)*q,he)}else{if(K.isInstancedBufferAttribute){for(let le=0;le<Y.locationSize;le++)h(Y.location+le,K.meshPerAttribute);R.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let le=0;le<Y.locationSize;le++)v(Y.location+le);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let le=0;le<Y.locationSize;le++)x(Y.location+le,ce/Y.locationSize,De,ee,ce*q,ce/Y.locationSize*le*q,he)}}else if(B!==void 0){const ee=B[V];if(ee!==void 0)switch(ee.length){case 2:t.vertexAttrib2fv(Y.location,ee);break;case 3:t.vertexAttrib3fv(Y.location,ee);break;case 4:t.vertexAttrib4fv(Y.location,ee);break;default:t.vertexAttrib1fv(Y.location,ee)}}}}m()}function w(){C();for(const R in i){const L=i[R];for(const U in L){const O=L[U];for(const D in O){const k=O[D];for(const B in k)u(k[B].object),delete k[B];delete O[D]}}delete i[R]}}function T(R){if(i[R.id]===void 0)return;const L=i[R.id];for(const U in L){const O=L[U];for(const D in O){const k=O[D];for(const B in k)u(k[B].object),delete k[B];delete O[D]}}delete i[R.id]}function b(R){for(const L in i){const U=i[L];for(const O in U){const D=U[O];if(D[R.id]===void 0)continue;const k=D[R.id];for(const B in k)u(k[B].object),delete k[B];delete D[R.id]}}}function _(R){for(const L in i){const U=i[L],O=R.isInstancedMesh===!0?R.id:0,D=U[O];if(D!==void 0){for(const k in D){const B=D[k];for(const V in B)u(B[V].object),delete B[V];delete D[k]}delete U[O],Object.keys(U).length===0&&delete i[L]}}}function C(){P(),o=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:b,initAttributes:y,enableAttribute:v,disableUnusedAttributes:m}}function R3(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let p=0;p<u;p++)f+=c[p];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function P3(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==ni&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const _=b===$i&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==bn&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==mi&&!_)}function l(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Ne("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:v,maxAttributes:h,maxVertexUniforms:m,maxVaryings:x,maxFragmentUniforms:M,maxSamples:w,samples:T}}function D3(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new $r,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,y=d.clipIntersection,v=d.clipShadows,h=t.get(d);if(!r||g===null||g.length===0||s&&!v)s?u(null):c();else{const m=s?0:i,x=m*4;let M=h.clippingState||null;l.value=M,M=u(g,f,x,p);for(let w=0;w!==x;++w)M[w]=n[w];h.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,g){const y=d!==null?d.length:0;let v=null;if(y!==0){if(v=l.value,g!==!0||v===null){const h=p+y*4,m=f.matrixWorldInverse;a.getNormalMatrix(m),(v===null||v.length<h)&&(v=new Float32Array(h));for(let x=0,M=p;x!==y;++x,M+=4)o.copy(d[x]).applyMatrix4(m,a),o.normal.toArray(v,M),v[M+3]=o.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,v}}const gr=4,Tv=[.125,.215,.35,.446,.526,.582],Kr=20,L3=256,Go=new ym,wv=new et;let Of=null,kf=0,Bf=0,Vf=!1;const N3=new H;class Av{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=N3}=s;Of=this._renderer.getRenderTarget(),kf=this._renderer.getActiveCubeFace(),Bf=this._renderer.getActiveMipmapLevel(),Vf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Of,kf,Bf),this._renderer.xr.enabled=Vf,e.scissorTest=!1,Is(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===fs||e.mapping===go?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Of=this._renderer.getRenderTarget(),kf=this._renderer.getActiveCubeFace(),Bf=this._renderer.getActiveMipmapLevel(),Vf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:$i,format:ni,colorSpace:Vc,depthBuffer:!1},r=Cv(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cv(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=I3(s)),this._blurMaterial=F3(s,e,n),this._ggxMaterial=U3(s,e,n)}return r}_compileMaterial(e){const n=new cn(new oi,e);this._renderer.compile(n,Go)}_sceneToCubeUV(e,n,i,r,s){const l=new Gn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(wv),d.toneMapping=yi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new cn(new wo,new JS({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,v=y.material;let h=!1;const m=e.background;m?m.isColor&&(v.color.copy(m),e.background=null,h=!0):(v.color.copy(wv),h=!0);for(let x=0;x<6;x++){const M=x%3;M===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[x],s.y,s.z)):M===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[x]));const w=this._cubeSize;Is(r,M*w,x>2?w:0,w,w),d.setRenderTarget(r),h&&d.render(y,l),d.render(e,l)}d.toneMapping=p,d.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===fs||e.mapping===go;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Is(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Go)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),f=0+c*1.25,p=d*f,{_lodMax:g}=this,y=this._sizeLods[i],v=3*y*(i>g-gr?i-g+gr:0),h=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-n,Is(s,v,h,3*y,2*y),r.setRenderTarget(s),r.render(a,Go),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,Is(e,v,h,3*y,2*y),r.setRenderTarget(e),r.render(a,Go)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ze("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=c;const f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Kr-1),y=s/g,v=isFinite(s)?1+Math.floor(u*y):Kr;v>Kr&&Ne(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Kr}`);const h=[];let m=0;for(let b=0;b<Kr;++b){const _=b/y,C=Math.exp(-_*_/2);h.push(C),b===0?m+=C:b<v&&(m+=2*C)}for(let b=0;b<h.length;b++)h[b]=h[b]/m;f.envMap.value=e.texture,f.samples.value=v,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const M=this._sizeLods[r],w=3*M*(r>x-gr?r-x+gr:0),T=4*(this._cubeSize-M);Is(n,w,T,3*M,2*M),l.setRenderTarget(n),l.render(d,Go)}}function I3(t){const e=[],n=[],i=[];let r=t;const s=t-gr+1+Tv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-gr?l=Tv[o-t+gr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,y=3,v=2,h=1,m=new Float32Array(y*g*p),x=new Float32Array(v*g*p),M=new Float32Array(h*g*p);for(let T=0;T<p;T++){const b=T%3*2/3-1,_=T>2?0:-1,C=[b,_,0,b+2/3,_,0,b+2/3,_+1,0,b,_,0,b+2/3,_+1,0,b,_+1,0];m.set(C,y*g*T),x.set(f,v*g*T);const P=[T,T,T,T,T,T];M.set(P,h*g*T)}const w=new oi;w.setAttribute("position",new Mi(m,y)),w.setAttribute("uv",new Mi(x,v)),w.setAttribute("faceIndex",new Mi(M,h)),i.push(new cn(w,null)),r>gr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Cv(t,e,n){const i=new Si(t,e,n);return i.texture.mapping=gu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Is(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function U3(t,e,n){return new Ti({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:L3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function F3(t,e,n){const i=new Float32Array(Kr),r=new H(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:Kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function bv(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Rv(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function vu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class aM extends Si{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new eM(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new wo(5,5,5),s=new Ti({name:"CubemapFromEquirect",uniforms:xo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:zi});s.uniforms.tEquirect.value=n;const o=new cn(r,s),a=n.minFilter;return n.minFilter===ts&&(n.minFilter=nn),new zR(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function O3(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,p=!1){return f==null?null:p?o(f):s(f)}function s(f){if(f&&f.isTexture){const p=f.mapping;if(p===af||p===lf)if(e.has(f)){const g=e.get(f).texture;return a(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const y=new aM(g.height);return y.fromEquirectangularTexture(t,f),e.set(f,y),f.addEventListener("dispose",c),a(y.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const p=f.mapping,g=p===af||p===lf,y=p===fs||p===go;if(g||y){let v=n.get(f);const h=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==h)return i===null&&(i=new Av(t)),v=g?i.fromEquirectangular(f,v):i.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,n.set(f,v),v.texture;if(v!==void 0)return v.texture;{const m=f.image;return g&&m&&m.height>0||y&&m&&l(m)?(i===null&&(i=new Av(t)),v=g?i.fromEquirectangular(f):i.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,n.set(f,v),f.addEventListener("dispose",u),v.texture):null}}}return f}function a(f,p){return p===af?f.mapping=fs:p===lf&&(f.mapping=go),f}function l(f){let p=0;const g=6;for(let y=0;y<g;y++)f[y]!==void 0&&p++;return p===g}function c(f){const p=f.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(f){const p=f.target;p.removeEventListener("dispose",u);const g=n.get(p);g!==void 0&&(n.delete(p),g.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function k3(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Bh("WebGLRenderer: "+i+" extension not supported."),r}}}function B3(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],t.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,g=d.attributes.position;let y=0;if(g===void 0)return;if(p!==null){const m=p.array;y=p.version;for(let x=0,M=m.length;x<M;x+=3){const w=m[x+0],T=m[x+1],b=m[x+2];f.push(w,T,T,b,b,w)}}else{const m=g.array;y=g.version;for(let x=0,M=m.length/3-1;x<M;x+=3){const w=x+0,T=x+1,b=x+2;f.push(w,T,T,b,b,w)}}const v=new(g.count>=65535?QS:ZS)(f,1);v.version=y;const h=s.get(d);h&&e.remove(h),s.set(d,v)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function V3(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){t.drawElements(i,f,s,d*o),n.update(f,i,1)}function c(d,f,p){p!==0&&(t.drawElementsInstanced(i,f,s,d*o,p),n.update(f,i,p))}function u(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,p);let y=0;for(let v=0;v<p;v++)y+=f[v];n.update(y,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function z3(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:Ze("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function H3(t,e,n){const i=new WeakMap,r=new Ct;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let P=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",P)};var p=P;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),y===!0&&(M=2),v===!0&&(M=3);let w=a.attributes.position.count*M,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const b=new Float32Array(w*T*4*d),_=new $S(b,w,T,d);_.type=mi,_.needsUpdate=!0;const C=M*4;for(let R=0;R<d;R++){const L=h[R],U=m[R],O=x[R],D=w*T*4*R;for(let k=0;k<L.count;k++){const B=k*C;g===!0&&(r.fromBufferAttribute(L,k),b[D+B+0]=r.x,b[D+B+1]=r.y,b[D+B+2]=r.z,b[D+B+3]=0),y===!0&&(r.fromBufferAttribute(U,k),b[D+B+4]=r.x,b[D+B+5]=r.y,b[D+B+6]=r.z,b[D+B+7]=0),v===!0&&(r.fromBufferAttribute(O,k),b[D+B+8]=r.x,b[D+B+9]=r.y,b[D+B+10]=r.z,b[D+B+11]=O.itemSize===4?r.w:1)}}f={count:d,texture:_,size:new tt(w,T)},i.set(a,f),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let v=0;v<c.length;v++)g+=c[v];const y=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function G3(t,e,n,i,r){let s=new WeakMap;function o(c){const u=r.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return f}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const W3={[LS]:"LINEAR_TONE_MAPPING",[NS]:"REINHARD_TONE_MAPPING",[IS]:"CINEON_TONE_MAPPING",[US]:"ACES_FILMIC_TONE_MAPPING",[OS]:"AGX_TONE_MAPPING",[kS]:"NEUTRAL_TONE_MAPPING",[FS]:"CUSTOM_TONE_MAPPING"};function j3(t,e,n,i,r){const s=new Si(e,n,{type:t,depthBuffer:i,stencilBuffer:r,depthTexture:i?new vo(e,n):void 0}),o=new Si(e,n,{type:$i,depthBuffer:!1,stencilBuffer:!1}),a=new oi;a.setAttribute("position",new dn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new dn([0,2,0,0,2,0],2));const l=new UR({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new cn(a,l),u=new ym(-1,1,1,-1,0,1);let d=null,f=null,p=!1,g,y=null,v=[],h=!1;this.setSize=function(m,x){s.setSize(m,x),o.setSize(m,x);for(let M=0;M<v.length;M++){const w=v[M];w.setSize&&w.setSize(m,x)}},this.setEffects=function(m){v=m,h=v.length>0&&v[0].isRenderPass===!0;const x=s.width,M=s.height;for(let w=0;w<v.length;w++){const T=v[w];T.setSize&&T.setSize(x,M)}},this.begin=function(m,x){if(p||m.toneMapping===yi&&v.length===0)return!1;if(y=x,x!==null){const M=x.width,w=x.height;(s.width!==M||s.height!==w)&&this.setSize(M,w)}return h===!1&&m.setRenderTarget(s),g=m.toneMapping,m.toneMapping=yi,!0},this.hasRenderPass=function(){return h},this.end=function(m,x){m.toneMapping=g,p=!0;let M=s,w=o;for(let T=0;T<v.length;T++){const b=v[T];if(b.enabled!==!1&&(b.render(m,w,M,x),b.needsSwap!==!1)){const _=M;M=w,w=_}}if(d!==m.outputColorSpace||f!==m.toneMapping){d=m.outputColorSpace,f=m.toneMapping,l.defines={},$e.getTransfer(d)===nt&&(l.defines.SRGB_TRANSFER="");const T=W3[f];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,m.setRenderTarget(y),m.render(c,u),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const lM=new fn,zh=new vo(1,1),cM=new $S,uM=new uR,fM=new eM,Pv=[],Dv=[],Lv=new Float32Array(16),Nv=new Float32Array(9),Iv=new Float32Array(4);function Ao(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Pv[r];if(s===void 0&&(s=new Float32Array(r),Pv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Vt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function xu(t,e){let n=Dv[e];n===void 0&&(n=new Int32Array(e),Dv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function X3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Y3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2fv(this.addr,e),zt(n,e)}}function $3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Vt(n,e))return;t.uniform3fv(this.addr,e),zt(n,e)}}function q3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4fv(this.addr,e),zt(n,e)}}function K3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),zt(n,e)}else{if(Vt(n,i))return;Iv.set(i),t.uniformMatrix2fv(this.addr,!1,Iv),zt(n,i)}}function Z3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),zt(n,e)}else{if(Vt(n,i))return;Nv.set(i),t.uniformMatrix3fv(this.addr,!1,Nv),zt(n,i)}}function Q3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),zt(n,e)}else{if(Vt(n,i))return;Lv.set(i),t.uniformMatrix4fv(this.addr,!1,Lv),zt(n,i)}}function J3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function eD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2iv(this.addr,e),zt(n,e)}}function tD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3iv(this.addr,e),zt(n,e)}}function nD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4iv(this.addr,e),zt(n,e)}}function iD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function rD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2uiv(this.addr,e),zt(n,e)}}function sD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3uiv(this.addr,e),zt(n,e)}}function oD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4uiv(this.addr,e),zt(n,e)}}function aD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(zh.compareFunction=n.isReversedDepthBuffer()?mm:pm,s=zh):s=lM,n.setTexture2D(e||s,r)}function lD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||uM,r)}function cD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||fM,r)}function uD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||cM,r)}function fD(t){switch(t){case 5126:return X3;case 35664:return Y3;case 35665:return $3;case 35666:return q3;case 35674:return K3;case 35675:return Z3;case 35676:return Q3;case 5124:case 35670:return J3;case 35667:case 35671:return eD;case 35668:case 35672:return tD;case 35669:case 35673:return nD;case 5125:return iD;case 36294:return rD;case 36295:return sD;case 36296:return oD;case 35678:case 36198:case 36298:case 36306:case 35682:return aD;case 35679:case 36299:case 36307:return lD;case 35680:case 36300:case 36308:case 36293:return cD;case 36289:case 36303:case 36311:case 36292:return uD}}function dD(t,e){t.uniform1fv(this.addr,e)}function hD(t,e){const n=Ao(e,this.size,2);t.uniform2fv(this.addr,n)}function pD(t,e){const n=Ao(e,this.size,3);t.uniform3fv(this.addr,n)}function mD(t,e){const n=Ao(e,this.size,4);t.uniform4fv(this.addr,n)}function gD(t,e){const n=Ao(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function vD(t,e){const n=Ao(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function xD(t,e){const n=Ao(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function _D(t,e){t.uniform1iv(this.addr,e)}function yD(t,e){t.uniform2iv(this.addr,e)}function SD(t,e){t.uniform3iv(this.addr,e)}function MD(t,e){t.uniform4iv(this.addr,e)}function ED(t,e){t.uniform1uiv(this.addr,e)}function TD(t,e){t.uniform2uiv(this.addr,e)}function wD(t,e){t.uniform3uiv(this.addr,e)}function AD(t,e){t.uniform4uiv(this.addr,e)}function CD(t,e,n){const i=this.cache,r=e.length,s=xu(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=zh:o=lM;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function bD(t,e,n){const i=this.cache,r=e.length,s=xu(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||uM,s[o])}function RD(t,e,n){const i=this.cache,r=e.length,s=xu(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||fM,s[o])}function PD(t,e,n){const i=this.cache,r=e.length,s=xu(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||cM,s[o])}function DD(t){switch(t){case 5126:return dD;case 35664:return hD;case 35665:return pD;case 35666:return mD;case 35674:return gD;case 35675:return vD;case 35676:return xD;case 5124:case 35670:return _D;case 35667:case 35671:return yD;case 35668:case 35672:return SD;case 35669:case 35673:return MD;case 5125:return ED;case 36294:return TD;case 36295:return wD;case 36296:return AD;case 35678:case 36198:case 36298:case 36306:case 35682:return CD;case 35679:case 36299:case 36307:return bD;case 35680:case 36300:case 36308:case 36293:return RD;case 36289:case 36303:case 36311:case 36292:return PD}}class LD{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=fD(n.type)}}class ND{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=DD(n.type)}}class ID{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const zf=/(\w+)(\])?(\[|\.)?/g;function Uv(t,e){t.seq.push(e),t.map[e.id]=e}function UD(t,e,n){const i=t.name,r=i.length;for(zf.lastIndex=0;;){const s=zf.exec(i),o=zf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Uv(n,c===void 0?new LD(a,t,e):new ND(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new ID(a),Uv(n,d)),n=d}}}class sc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);UD(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Fv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const FD=37297;let OD=0;function kD(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Ov=new Fe;function BD(t){$e._getMatrix(Ov,$e.workingColorSpace,t);const e=`mat3( ${Ov.elements.map(n=>n.toFixed(4))} )`;switch($e.getTransfer(t)){case zc:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function kv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+kD(t.getShaderSource(e),a)}else return s}function VD(t,e){const n=BD(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const zD={[LS]:"Linear",[NS]:"Reinhard",[IS]:"Cineon",[US]:"ACESFilmic",[OS]:"AgX",[kS]:"Neutral",[FS]:"Custom"};function HD(t,e){const n=zD[e];return n===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const kl=new H;function GD(){$e.getLuminanceCoefficients(kl);const t=kl.x.toFixed(4),e=kl.y.toFixed(4),n=kl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WD(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function jD(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function XD(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Qo(t){return t!==""}function Bv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const YD=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hh(t){return t.replace(YD,qD)}const $D=new Map;function qD(t,e){let n=Ve[e];if(n===void 0){const i=$D.get(e);if(i!==void 0)n=Ve[i],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Hh(n)}const KD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zv(t){return t.replace(KD,ZD)}function ZD(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hv(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const QD={[ec]:"SHADOWMAP_TYPE_PCF",[Zo]:"SHADOWMAP_TYPE_VSM"};function JD(t){return QD[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const eL={[fs]:"ENVMAP_TYPE_CUBE",[go]:"ENVMAP_TYPE_CUBE",[gu]:"ENVMAP_TYPE_CUBE_UV"};function tL(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":eL[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const nL={[go]:"ENVMAP_MODE_REFRACTION"};function iL(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":nL[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const rL={[DS]:"ENVMAP_BLENDING_MULTIPLY",[Gb]:"ENVMAP_BLENDING_MIX",[Wb]:"ENVMAP_BLENDING_ADD"};function sL(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":rL[t.combine]||"ENVMAP_BLENDING_NONE"}function oL(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function aL(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=JD(n),c=tL(n),u=iL(n),d=sL(n),f=oL(n),p=WD(n),g=jD(s),y=r.createProgram();let v,h,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Qo).join(`
`),v.length>0&&(v+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Qo).join(`
`),h.length>0&&(h+=`
`)):(v=[Hv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),h=[Hv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==yi?"#define TONE_MAPPING":"",n.toneMapping!==yi?Ve.tonemapping_pars_fragment:"",n.toneMapping!==yi?HD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,VD("linearToOutputTexel",n.outputColorSpace),GD(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Qo).join(`
`)),o=Hh(o),o=Bv(o,n),o=Vv(o,n),a=Hh(a),a=Bv(a,n),a=Vv(a,n),o=zv(o),a=zv(a),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,h=["#define varying in",n.glslVersion===ev?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ev?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=m+v+o,M=m+h+a,w=Fv(r,r.VERTEX_SHADER,x),T=Fv(r,r.FRAGMENT_SHADER,M);r.attachShader(y,w),r.attachShader(y,T),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function b(R){if(t.debug.checkShaderErrors){const L=r.getProgramInfoLog(y)||"",U=r.getShaderInfoLog(w)||"",O=r.getShaderInfoLog(T)||"",D=L.trim(),k=U.trim(),B=O.trim();let V=!0,Y=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,w,T);else{const K=kv(r,w,"vertex"),ee=kv(r,T,"fragment");Ze("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+D+`
`+K+`
`+ee)}else D!==""?Ne("WebGLProgram: Program Info Log:",D):(k===""||B==="")&&(Y=!1);Y&&(R.diagnostics={runnable:V,programLog:D,vertexShader:{log:k,prefix:v},fragmentShader:{log:B,prefix:h}})}r.deleteShader(w),r.deleteShader(T),_=new sc(r,y),C=XD(r,y)}let _;this.getUniforms=function(){return _===void 0&&b(this),_};let C;this.getAttributes=function(){return C===void 0&&b(this),C};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(y,FD)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=OD++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=T,this}let lL=0;class cL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new uL(e),n.set(e,i)),i}}class uL{constructor(e){this.id=lL++,this.code=e,this.usedTimes=0}}function fL(t){return t===ds||t===kc||t===Bc}function dL(t,e,n,i,r,s){const o=new qS,a=new cL,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function y(_,C,P,R,L,U){const O=R.fog,D=L.geometry,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,V=e.get(_.envMap||k,B),Y=V&&V.mapping===gu?V.image.height:null,K=p[_.type];_.precision!==null&&(f=i.getMaxPrecision(_.precision),f!==_.precision&&Ne("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));const ee=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ce=ee!==void 0?ee.length:0;let Ue=0;D.morphAttributes.position!==void 0&&(Ue=1),D.morphAttributes.normal!==void 0&&(Ue=2),D.morphAttributes.color!==void 0&&(Ue=3);let ze,De,q,he;if(K){const Oe=hi[K];ze=Oe.vertexShader,De=Oe.fragmentShader}else ze=_.vertexShader,De=_.fragmentShader,a.update(_),q=a.getVertexShaderID(_),he=a.getFragmentShaderID(_);const le=t.getRenderTarget(),Re=t.state.buffers.depth.getReversed(),Le=L.isInstancedMesh===!0,Ce=L.isBatchedMesh===!0,gt=!!_.map,Xe=!!_.matcap,rt=!!V,ht=!!_.aoMap,Ge=!!_.lightMap,Ft=!!_.bumpMap,xt=!!_.normalMap,En=!!_.displacementMap,I=!!_.emissiveMap,Ot=!!_.metalnessMap,Ye=!!_.roughnessMap,ct=_.anisotropy>0,pe=_.clearcoat>0,Et=_.dispersion>0,A=_.iridescence>0,S=_.sheen>0,z=_.transmission>0,Q=ct&&!!_.anisotropyMap,ne=pe&&!!_.clearcoatMap,se=pe&&!!_.clearcoatNormalMap,de=pe&&!!_.clearcoatRoughnessMap,$=A&&!!_.iridescenceMap,J=A&&!!_.iridescenceThicknessMap,xe=S&&!!_.sheenColorMap,Se=S&&!!_.sheenRoughnessMap,ue=!!_.specularMap,oe=!!_.specularColorMap,Ie=!!_.specularIntensityMap,Be=z&&!!_.transmissionMap,Je=z&&!!_.thicknessMap,N=!!_.gradientMap,ae=!!_.alphaMap,Z=_.alphaTest>0,_e=!!_.alphaHash,fe=!!_.extensions;let te=yi;_.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(te=t.toneMapping);const we={shaderID:K,shaderType:_.type,shaderName:_.name,vertexShader:ze,fragmentShader:De,defines:_.defines,customVertexShaderID:q,customFragmentShaderID:he,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:Ce,batchingColor:Ce&&L._colorsTexture!==null,instancing:Le,instancingColor:Le&&L.instanceColor!==null,instancingMorph:Le&&L.morphTexture!==null,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:$e.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:gt,matcap:Xe,envMap:rt,envMapMode:rt&&V.mapping,envMapCubeUVHeight:Y,aoMap:ht,lightMap:Ge,bumpMap:Ft,normalMap:xt,displacementMap:En,emissiveMap:I,normalMapObjectSpace:xt&&_.normalMapType===Yb,normalMapTangentSpace:xt&&_.normalMapType===kh,packedNormalMap:xt&&_.normalMapType===kh&&fL(_.normalMap.format),metalnessMap:Ot,roughnessMap:Ye,anisotropy:ct,anisotropyMap:Q,clearcoat:pe,clearcoatMap:ne,clearcoatNormalMap:se,clearcoatRoughnessMap:de,dispersion:Et,iridescence:A,iridescenceMap:$,iridescenceThicknessMap:J,sheen:S,sheenColorMap:xe,sheenRoughnessMap:Se,specularMap:ue,specularColorMap:oe,specularIntensityMap:Ie,transmission:z,transmissionMap:Be,thicknessMap:Je,gradientMap:N,opaque:_.transparent===!1&&_.blending===io&&_.alphaToCoverage===!1,alphaMap:ae,alphaTest:Z,alphaHash:_e,combine:_.combine,mapUv:gt&&g(_.map.channel),aoMapUv:ht&&g(_.aoMap.channel),lightMapUv:Ge&&g(_.lightMap.channel),bumpMapUv:Ft&&g(_.bumpMap.channel),normalMapUv:xt&&g(_.normalMap.channel),displacementMapUv:En&&g(_.displacementMap.channel),emissiveMapUv:I&&g(_.emissiveMap.channel),metalnessMapUv:Ot&&g(_.metalnessMap.channel),roughnessMapUv:Ye&&g(_.roughnessMap.channel),anisotropyMapUv:Q&&g(_.anisotropyMap.channel),clearcoatMapUv:ne&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:se&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:J&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Se&&g(_.sheenRoughnessMap.channel),specularMapUv:ue&&g(_.specularMap.channel),specularColorMapUv:oe&&g(_.specularColorMap.channel),specularIntensityMapUv:Ie&&g(_.specularIntensityMap.channel),transmissionMapUv:Be&&g(_.transmissionMap.channel),thicknessMapUv:Je&&g(_.thicknessMap.channel),alphaMapUv:ae&&g(_.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(xt||ct),vertexNormals:!!D.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!D.attributes.uv&&(gt||ae),fog:!!O,useFog:_.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||D.attributes.normal===void 0&&xt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Re,skinning:L.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Ue,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:te,decodeVideoTexture:gt&&_.map.isVideoTexture===!0&&$e.getTransfer(_.map.colorSpace)===nt,decodeVideoTextureEmissive:I&&_.emissiveMap.isVideoTexture===!0&&$e.getTransfer(_.emissiveMap.colorSpace)===nt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ni,flipSided:_.side===Sn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:fe&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&_.extensions.multiDraw===!0||Ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function v(_){const C=[];if(_.shaderID?C.push(_.shaderID):(C.push(_.customVertexShaderID),C.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)C.push(P),C.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(h(C,_),m(C,_),C.push(t.outputColorSpace)),C.push(_.customProgramCacheKey),C.join()}function h(_,C){_.push(C.precision),_.push(C.outputColorSpace),_.push(C.envMapMode),_.push(C.envMapCubeUVHeight),_.push(C.mapUv),_.push(C.alphaMapUv),_.push(C.lightMapUv),_.push(C.aoMapUv),_.push(C.bumpMapUv),_.push(C.normalMapUv),_.push(C.displacementMapUv),_.push(C.emissiveMapUv),_.push(C.metalnessMapUv),_.push(C.roughnessMapUv),_.push(C.anisotropyMapUv),_.push(C.clearcoatMapUv),_.push(C.clearcoatNormalMapUv),_.push(C.clearcoatRoughnessMapUv),_.push(C.iridescenceMapUv),_.push(C.iridescenceThicknessMapUv),_.push(C.sheenColorMapUv),_.push(C.sheenRoughnessMapUv),_.push(C.specularMapUv),_.push(C.specularColorMapUv),_.push(C.specularIntensityMapUv),_.push(C.transmissionMapUv),_.push(C.thicknessMapUv),_.push(C.combine),_.push(C.fogExp2),_.push(C.sizeAttenuation),_.push(C.morphTargetsCount),_.push(C.morphAttributeCount),_.push(C.numDirLights),_.push(C.numPointLights),_.push(C.numSpotLights),_.push(C.numSpotLightMaps),_.push(C.numHemiLights),_.push(C.numRectAreaLights),_.push(C.numDirLightShadows),_.push(C.numPointLightShadows),_.push(C.numSpotLightShadows),_.push(C.numSpotLightShadowsWithMaps),_.push(C.numLightProbes),_.push(C.shadowMapType),_.push(C.toneMapping),_.push(C.numClippingPlanes),_.push(C.numClipIntersection),_.push(C.depthPacking)}function m(_,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),_.push(o.mask)}function x(_){const C=p[_.type];let P;if(C){const R=hi[C];P=LR.clone(R.uniforms)}else P=_.uniforms;return P}function M(_,C){let P=u.get(C);return P!==void 0?++P.usedTimes:(P=new aL(t,C,_,r),c.push(P),u.set(C,P)),P}function w(_){if(--_.usedTimes===0){const C=c.indexOf(_);c[C]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function T(_){a.remove(_)}function b(){a.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:x,acquireProgram:M,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:b}}function hL(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function pL(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Gv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Wv(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function a(f,p,g,y,v,h){let m=t[e];return m===void 0?(m={id:f.id,object:f,geometry:p,material:g,materialVariant:o(f),groupOrder:y,renderOrder:f.renderOrder,z:v,group:h},t[e]=m):(m.id=f.id,m.object=f,m.geometry=p,m.material=g,m.materialVariant=o(f),m.groupOrder=y,m.renderOrder=f.renderOrder,m.z=v,m.group=h),e++,m}function l(f,p,g,y,v,h){const m=a(f,p,g,y,v,h);g.transmission>0?i.push(m):g.transparent===!0?r.push(m):n.push(m)}function c(f,p,g,y,v,h){const m=a(f,p,g,y,v,h);g.transmission>0?i.unshift(m):g.transparent===!0?r.unshift(m):n.unshift(m)}function u(f,p){n.length>1&&n.sort(f||pL),i.length>1&&i.sort(p||Gv),r.length>1&&r.sort(p||Gv)}function d(){for(let f=e,p=t.length;f<p;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function mL(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Wv,t.set(i,[o])):r>=s.length?(o=new Wv,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function gL(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new et};break;case"SpotLight":n={position:new H,direction:new H,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function vL(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let xL=0;function _L(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function yL(t){const e=new gL,n=vL(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,s=new Lt,o=new Lt;function a(c){let u=0,d=0,f=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let p=0,g=0,y=0,v=0,h=0,m=0,x=0,M=0,w=0,T=0,b=0;c.sort(_L);for(let C=0,P=c.length;C<P;C++){const R=c[C],L=R.color,U=R.intensity,O=R.distance;let D=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===ds?D=R.shadow.map.texture:D=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=L.r*U,d+=L.g*U,f+=L.b*U;else if(R.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(R.sh.coefficients[k],U);b++}else if(R.isDirectionalLight){const k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const B=R.shadow,V=n.get(R);V.shadowIntensity=B.intensity,V.shadowBias=B.bias,V.shadowNormalBias=B.normalBias,V.shadowRadius=B.radius,V.shadowMapSize=B.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=D,i.directionalShadowMatrix[p]=R.shadow.matrix,m++}i.directional[p]=k,p++}else if(R.isSpotLight){const k=e.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(L).multiplyScalar(U),k.distance=O,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,i.spot[y]=k;const B=R.shadow;if(R.map&&(i.spotLightMap[w]=R.map,w++,B.updateMatrices(R),R.castShadow&&T++),i.spotLightMatrix[y]=B.matrix,R.castShadow){const V=n.get(R);V.shadowIntensity=B.intensity,V.shadowBias=B.bias,V.shadowNormalBias=B.normalBias,V.shadowRadius=B.radius,V.shadowMapSize=B.mapSize,i.spotShadow[y]=V,i.spotShadowMap[y]=D,M++}y++}else if(R.isRectAreaLight){const k=e.get(R);k.color.copy(L).multiplyScalar(U),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),i.rectArea[v]=k,v++}else if(R.isPointLight){const k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),k.distance=R.distance,k.decay=R.decay,R.castShadow){const B=R.shadow,V=n.get(R);V.shadowIntensity=B.intensity,V.shadowBias=B.bias,V.shadowNormalBias=B.normalBias,V.shadowRadius=B.radius,V.shadowMapSize=B.mapSize,V.shadowCameraNear=B.camera.near,V.shadowCameraFar=B.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=D,i.pointShadowMatrix[g]=R.shadow.matrix,x++}i.point[g]=k,g++}else if(R.isHemisphereLight){const k=e.get(R);k.skyColor.copy(R.color).multiplyScalar(U),k.groundColor.copy(R.groundColor).multiplyScalar(U),i.hemi[h]=k,h++}}v>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const _=i.hash;(_.directionalLength!==p||_.pointLength!==g||_.spotLength!==y||_.rectAreaLength!==v||_.hemiLength!==h||_.numDirectionalShadows!==m||_.numPointShadows!==x||_.numSpotShadows!==M||_.numSpotMaps!==w||_.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=v,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=M+w-T,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=b,_.directionalLength=p,_.pointLength=g,_.spotLength=y,_.rectAreaLength=v,_.hemiLength=h,_.numDirectionalShadows=m,_.numPointShadows=x,_.numSpotShadows=M,_.numSpotMaps=w,_.numLightProbes=b,i.version=xL++)}function l(c,u){let d=0,f=0,p=0,g=0,y=0;const v=u.matrixWorldInverse;for(let h=0,m=c.length;h<m;h++){const x=c[h];if(x.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(v),d++}else if(x.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(v),M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(v),p++}else if(x.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(v),o.identity(),s.copy(x.matrixWorld),s.premultiply(v),o.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(v),f++}else if(x.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(v),y++}}}return{setup:a,setupView:l,state:i}}function jv(t){const e=new yL(t),n=[],i=[],r=[];function s(f){d.camera=f,n.length=0,i.length=0,r.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){r.push(f)}function c(){e.setup(n)}function u(f){e.setupView(n,f)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function SL(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new jv(t),e.set(r,[a])):s>=o.length?(a=new jv(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const ML=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,TL=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],wL=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Xv=new Lt,Wo=new H,Hf=new H;function AL(t,e,n){let i=new xm;const r=new tt,s=new tt,o=new Ct,a=new FR,l=new OR,c={},u=n.maxTextureSize,d={[Dr]:Sn,[Sn]:Dr,[Ni]:Ni},f=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:ML,fragmentShader:EL}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new oi;g.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new cn(g,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ec;let h=this.type;this.render=function(T,b,_){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||T.length===0)return;this.type===PS&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ec);const C=t.getRenderTarget(),P=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),L=t.state;L.setBlending(zi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const U=h!==this.type;U&&b.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(D=>D.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,D=T.length;O<D;O++){const k=T[O],B=k.shadow;if(B===void 0){Ne("WebGLShadowMap:",k,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const V=B.getFrameExtents();r.multiply(V),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/V.x),r.x=s.x*V.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/V.y),r.y=s.y*V.y,B.mapSize.y=s.y));const Y=t.state.buffers.depth.getReversed();if(B.camera._reversedDepth=Y,B.map===null||U===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Zo){if(k.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Si(r.x,r.y,{format:ds,type:$i,minFilter:nn,magFilter:nn,generateMipmaps:!1}),B.map.texture.name=k.name+".shadowMap",B.map.depthTexture=new vo(r.x,r.y,mi),B.map.depthTexture.name=k.name+".shadowMapDepth",B.map.depthTexture.format=qi,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Xt,B.map.depthTexture.magFilter=Xt}else k.isPointLight?(B.map=new aM(r.x),B.map.depthTexture=new RR(r.x,Ei)):(B.map=new Si(r.x,r.y),B.map.depthTexture=new vo(r.x,r.y,Ei)),B.map.depthTexture.name=k.name+".shadowMap",B.map.depthTexture.format=qi,this.type===ec?(B.map.depthTexture.compareFunction=Y?mm:pm,B.map.depthTexture.minFilter=nn,B.map.depthTexture.magFilter=nn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Xt,B.map.depthTexture.magFilter=Xt);B.camera.updateProjectionMatrix()}const K=B.map.isWebGLCubeRenderTarget?6:1;for(let ee=0;ee<K;ee++){if(B.map.isWebGLCubeRenderTarget)t.setRenderTarget(B.map,ee),t.clear();else{ee===0&&(t.setRenderTarget(B.map),t.clear());const ce=B.getViewport(ee);o.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),L.viewport(o)}if(k.isPointLight){const ce=B.camera,Ue=B.matrix,ze=k.distance||ce.far;ze!==ce.far&&(ce.far=ze,ce.updateProjectionMatrix()),Wo.setFromMatrixPosition(k.matrixWorld),ce.position.copy(Wo),Hf.copy(ce.position),Hf.add(TL[ee]),ce.up.copy(wL[ee]),ce.lookAt(Hf),ce.updateMatrixWorld(),Ue.makeTranslation(-Wo.x,-Wo.y,-Wo.z),Xv.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Xv,ce.coordinateSystem,ce.reversedDepth)}else B.updateMatrices(k);i=B.getFrustum(),M(b,_,B.camera,k,this.type)}B.isPointLightShadow!==!0&&this.type===Zo&&m(B,_),B.needsUpdate=!1}h=this.type,v.needsUpdate=!1,t.setRenderTarget(C,P,R)};function m(T,b){const _=e.update(y);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Si(r.x,r.y,{format:ds,type:$i})),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(b,null,_,f,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(b,null,_,p,y,null)}function x(T,b,_,C){let P=null;const R=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)P=R;else if(P=_.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const L=P.uuid,U=b.uuid;let O=c[L];O===void 0&&(O={},c[L]=O);let D=O[U];D===void 0&&(D=P.clone(),O[U]=D,b.addEventListener("dispose",w)),P=D}if(P.visible=b.visible,P.wireframe=b.wireframe,C===Zo?P.side=b.shadowSide!==null?b.shadowSide:b.side:P.side=b.shadowSide!==null?b.shadowSide:d[b.side],P.alphaMap=b.alphaMap,P.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,P.map=b.map,P.clipShadows=b.clipShadows,P.clippingPlanes=b.clippingPlanes,P.clipIntersection=b.clipIntersection,P.displacementMap=b.displacementMap,P.displacementScale=b.displacementScale,P.displacementBias=b.displacementBias,P.wireframeLinewidth=b.wireframeLinewidth,P.linewidth=b.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const L=t.properties.get(P);L.light=_}return P}function M(T,b,_,C,P){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===Zo)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);const U=e.update(T),O=T.material;if(Array.isArray(O)){const D=U.groups;for(let k=0,B=D.length;k<B;k++){const V=D[k],Y=O[V.materialIndex];if(Y&&Y.visible){const K=x(T,Y,C,P);T.onBeforeShadow(t,T,b,_,U,K,V),t.renderBufferDirect(_,null,U,K,T,V),T.onAfterShadow(t,T,b,_,U,K,V)}}}else if(O.visible){const D=x(T,O,C,P);T.onBeforeShadow(t,T,b,_,U,D,null),t.renderBufferDirect(_,null,U,D,T,null),T.onAfterShadow(t,T,b,_,U,D,null)}}const L=T.children;for(let U=0,O=L.length;U<O;U++)M(L[U],b,_,C,P)}function w(T){T.target.removeEventListener("dispose",w);for(const _ in c){const C=c[_],P=T.target.uuid;P in C&&(C[P].dispose(),delete C[P])}}}function CL(t,e){function n(){let N=!1;const ae=new Ct;let Z=null;const _e=new Ct(0,0,0,0);return{setMask:function(fe){Z!==fe&&!N&&(t.colorMask(fe,fe,fe,fe),Z=fe)},setLocked:function(fe){N=fe},setClear:function(fe,te,we,Oe,bt){bt===!0&&(fe*=Oe,te*=Oe,we*=Oe),ae.set(fe,te,we,Oe),_e.equals(ae)===!1&&(t.clearColor(fe,te,we,Oe),_e.copy(ae))},reset:function(){N=!1,Z=null,_e.set(-1,0,0,0)}}}function i(){let N=!1,ae=!1,Z=null,_e=null,fe=null;return{setReversed:function(te){if(ae!==te){const we=e.get("EXT_clip_control");te?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),ae=te;const Oe=fe;fe=null,this.setClear(Oe)}},getReversed:function(){return ae},setTest:function(te){te?le(t.DEPTH_TEST):Re(t.DEPTH_TEST)},setMask:function(te){Z!==te&&!N&&(t.depthMask(te),Z=te)},setFunc:function(te){if(ae&&(te=iR[te]),_e!==te){switch(te){case Jd:t.depthFunc(t.NEVER);break;case eh:t.depthFunc(t.ALWAYS);break;case th:t.depthFunc(t.LESS);break;case mo:t.depthFunc(t.LEQUAL);break;case nh:t.depthFunc(t.EQUAL);break;case ih:t.depthFunc(t.GEQUAL);break;case rh:t.depthFunc(t.GREATER);break;case sh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}_e=te}},setLocked:function(te){N=te},setClear:function(te){fe!==te&&(fe=te,ae&&(te=1-te),t.clearDepth(te))},reset:function(){N=!1,Z=null,_e=null,fe=null,ae=!1}}}function r(){let N=!1,ae=null,Z=null,_e=null,fe=null,te=null,we=null,Oe=null,bt=null;return{setTest:function(st){N||(st?le(t.STENCIL_TEST):Re(t.STENCIL_TEST))},setMask:function(st){ae!==st&&!N&&(t.stencilMask(st),ae=st)},setFunc:function(st,wi,ai){(Z!==st||_e!==wi||fe!==ai)&&(t.stencilFunc(st,wi,ai),Z=st,_e=wi,fe=ai)},setOp:function(st,wi,ai){(te!==st||we!==wi||Oe!==ai)&&(t.stencilOp(st,wi,ai),te=st,we=wi,Oe=ai)},setLocked:function(st){N=st},setClear:function(st){bt!==st&&(t.clearStencil(st),bt=st)},reset:function(){N=!1,ae=null,Z=null,_e=null,fe=null,te=null,we=null,Oe=null,bt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f={},p=new WeakMap,g=[],y=null,v=!1,h=null,m=null,x=null,M=null,w=null,T=null,b=null,_=new et(0,0,0),C=0,P=!1,R=null,L=null,U=null,O=null,D=null;const k=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,V=0;const Y=t.getParameter(t.VERSION);Y.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Y)[1]),B=V>=1):Y.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),B=V>=2);let K=null,ee={};const ce=t.getParameter(t.SCISSOR_BOX),Ue=t.getParameter(t.VIEWPORT),ze=new Ct().fromArray(ce),De=new Ct().fromArray(Ue);function q(N,ae,Z,_e){const fe=new Uint8Array(4),te=t.createTexture();t.bindTexture(N,te),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let we=0;we<Z;we++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(ae,0,t.RGBA,1,1,_e,0,t.RGBA,t.UNSIGNED_BYTE,fe):t.texImage2D(ae+we,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,fe);return te}const he={};he[t.TEXTURE_2D]=q(t.TEXTURE_2D,t.TEXTURE_2D,1),he[t.TEXTURE_CUBE_MAP]=q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[t.TEXTURE_2D_ARRAY]=q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),he[t.TEXTURE_3D]=q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(t.DEPTH_TEST),o.setFunc(mo),Ft(!1),xt($0),le(t.CULL_FACE),ht(zi);function le(N){u[N]!==!0&&(t.enable(N),u[N]=!0)}function Re(N){u[N]!==!1&&(t.disable(N),u[N]=!1)}function Le(N,ae){return f[N]!==ae?(t.bindFramebuffer(N,ae),f[N]=ae,N===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ae),N===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ae),!0):!1}function Ce(N,ae){let Z=g,_e=!1;if(N){Z=p.get(ae),Z===void 0&&(Z=[],p.set(ae,Z));const fe=N.textures;if(Z.length!==fe.length||Z[0]!==t.COLOR_ATTACHMENT0){for(let te=0,we=fe.length;te<we;te++)Z[te]=t.COLOR_ATTACHMENT0+te;Z.length=fe.length,_e=!0}}else Z[0]!==t.BACK&&(Z[0]=t.BACK,_e=!0);_e&&t.drawBuffers(Z)}function gt(N){return y!==N?(t.useProgram(N),y=N,!0):!1}const Xe={[qr]:t.FUNC_ADD,[Ab]:t.FUNC_SUBTRACT,[Cb]:t.FUNC_REVERSE_SUBTRACT};Xe[bb]=t.MIN,Xe[Rb]=t.MAX;const rt={[Pb]:t.ZERO,[Db]:t.ONE,[Lb]:t.SRC_COLOR,[Zd]:t.SRC_ALPHA,[kb]:t.SRC_ALPHA_SATURATE,[Fb]:t.DST_COLOR,[Ib]:t.DST_ALPHA,[Nb]:t.ONE_MINUS_SRC_COLOR,[Qd]:t.ONE_MINUS_SRC_ALPHA,[Ob]:t.ONE_MINUS_DST_COLOR,[Ub]:t.ONE_MINUS_DST_ALPHA,[Bb]:t.CONSTANT_COLOR,[Vb]:t.ONE_MINUS_CONSTANT_COLOR,[zb]:t.CONSTANT_ALPHA,[Hb]:t.ONE_MINUS_CONSTANT_ALPHA};function ht(N,ae,Z,_e,fe,te,we,Oe,bt,st){if(N===zi){v===!0&&(Re(t.BLEND),v=!1);return}if(v===!1&&(le(t.BLEND),v=!0),N!==wb){if(N!==h||st!==P){if((m!==qr||w!==qr)&&(t.blendEquation(t.FUNC_ADD),m=qr,w=qr),st)switch(N){case io:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case q0:t.blendFunc(t.ONE,t.ONE);break;case K0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Z0:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Ze("WebGLState: Invalid blending: ",N);break}else switch(N){case io:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case q0:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case K0:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Z0:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",N);break}x=null,M=null,T=null,b=null,_.set(0,0,0),C=0,h=N,P=st}return}fe=fe||ae,te=te||Z,we=we||_e,(ae!==m||fe!==w)&&(t.blendEquationSeparate(Xe[ae],Xe[fe]),m=ae,w=fe),(Z!==x||_e!==M||te!==T||we!==b)&&(t.blendFuncSeparate(rt[Z],rt[_e],rt[te],rt[we]),x=Z,M=_e,T=te,b=we),(Oe.equals(_)===!1||bt!==C)&&(t.blendColor(Oe.r,Oe.g,Oe.b,bt),_.copy(Oe),C=bt),h=N,P=!1}function Ge(N,ae){N.side===Ni?Re(t.CULL_FACE):le(t.CULL_FACE);let Z=N.side===Sn;ae&&(Z=!Z),Ft(Z),N.blending===io&&N.transparent===!1?ht(zi):ht(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const _e=N.stencilWrite;a.setTest(_e),_e&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),I(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):Re(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(N){R!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),R=N)}function xt(N){N!==Eb?(le(t.CULL_FACE),N!==L&&(N===$0?t.cullFace(t.BACK):N===Tb?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Re(t.CULL_FACE),L=N}function En(N){N!==U&&(B&&t.lineWidth(N),U=N)}function I(N,ae,Z){N?(le(t.POLYGON_OFFSET_FILL),(O!==ae||D!==Z)&&(O=ae,D=Z,o.getReversed()&&(ae=-ae),t.polygonOffset(ae,Z))):Re(t.POLYGON_OFFSET_FILL)}function Ot(N){N?le(t.SCISSOR_TEST):Re(t.SCISSOR_TEST)}function Ye(N){N===void 0&&(N=t.TEXTURE0+k-1),K!==N&&(t.activeTexture(N),K=N)}function ct(N,ae,Z){Z===void 0&&(K===null?Z=t.TEXTURE0+k-1:Z=K);let _e=ee[Z];_e===void 0&&(_e={type:void 0,texture:void 0},ee[Z]=_e),(_e.type!==N||_e.texture!==ae)&&(K!==Z&&(t.activeTexture(Z),K=Z),t.bindTexture(N,ae||he[N]),_e.type=N,_e.texture=ae)}function pe(){const N=ee[K];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Et(){try{t.compressedTexImage2D(...arguments)}catch(N){Ze("WebGLState:",N)}}function A(){try{t.compressedTexImage3D(...arguments)}catch(N){Ze("WebGLState:",N)}}function S(){try{t.texSubImage2D(...arguments)}catch(N){Ze("WebGLState:",N)}}function z(){try{t.texSubImage3D(...arguments)}catch(N){Ze("WebGLState:",N)}}function Q(){try{t.compressedTexSubImage2D(...arguments)}catch(N){Ze("WebGLState:",N)}}function ne(){try{t.compressedTexSubImage3D(...arguments)}catch(N){Ze("WebGLState:",N)}}function se(){try{t.texStorage2D(...arguments)}catch(N){Ze("WebGLState:",N)}}function de(){try{t.texStorage3D(...arguments)}catch(N){Ze("WebGLState:",N)}}function $(){try{t.texImage2D(...arguments)}catch(N){Ze("WebGLState:",N)}}function J(){try{t.texImage3D(...arguments)}catch(N){Ze("WebGLState:",N)}}function xe(N){return d[N]!==void 0?d[N]:t.getParameter(N)}function Se(N,ae){d[N]!==ae&&(t.pixelStorei(N,ae),d[N]=ae)}function ue(N){ze.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),ze.copy(N))}function oe(N){De.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),De.copy(N))}function Ie(N,ae){let Z=c.get(ae);Z===void 0&&(Z=new WeakMap,c.set(ae,Z));let _e=Z.get(N);_e===void 0&&(_e=t.getUniformBlockIndex(ae,N.name),Z.set(N,_e))}function Be(N,ae){const _e=c.get(ae).get(N);l.get(ae)!==_e&&(t.uniformBlockBinding(ae,_e,N.__bindingPointIndex),l.set(ae,_e))}function Je(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},d={},K=null,ee={},f={},p=new WeakMap,g=[],y=null,v=!1,h=null,m=null,x=null,M=null,w=null,T=null,b=null,_=new et(0,0,0),C=0,P=!1,R=null,L=null,U=null,O=null,D=null,ze.set(0,0,t.canvas.width,t.canvas.height),De.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:le,disable:Re,bindFramebuffer:Le,drawBuffers:Ce,useProgram:gt,setBlending:ht,setMaterial:Ge,setFlipSided:Ft,setCullFace:xt,setLineWidth:En,setPolygonOffset:I,setScissorTest:Ot,activeTexture:Ye,bindTexture:ct,unbindTexture:pe,compressedTexImage2D:Et,compressedTexImage3D:A,texImage2D:$,texImage3D:J,pixelStorei:Se,getParameter:xe,updateUBOMapping:Ie,uniformBlockBinding:Be,texStorage2D:se,texStorage3D:de,texSubImage2D:S,texSubImage3D:z,compressedTexSubImage2D:Q,compressedTexSubImage3D:ne,scissor:ue,viewport:oe,reset:Je}}function bL(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,u=new WeakMap,d=new Set;let f;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,S){return g?new OffscreenCanvas(A,S):Hc("canvas")}function v(A,S,z){let Q=1;const ne=Et(A);if((ne.width>z||ne.height>z)&&(Q=z/Math.max(ne.width,ne.height)),Q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const se=Math.floor(Q*ne.width),de=Math.floor(Q*ne.height);f===void 0&&(f=y(se,de));const $=S?y(se,de):f;return $.width=se,$.height=de,$.getContext("2d").drawImage(A,0,0,se,de),Ne("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+se+"x"+de+")."),$}else return"data"in A&&Ne("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),A;return A}function h(A){return A.generateMipmaps}function m(A){t.generateMipmap(A)}function x(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(A,S,z,Q,ne,se=!1){if(A!==null){if(t[A]!==void 0)return t[A];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let de;Q&&(de=e.get("EXT_texture_norm16"),de||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=S;if(S===t.RED&&(z===t.FLOAT&&($=t.R32F),z===t.HALF_FLOAT&&($=t.R16F),z===t.UNSIGNED_BYTE&&($=t.R8),z===t.UNSIGNED_SHORT&&de&&($=de.R16_EXT),z===t.SHORT&&de&&($=de.R16_SNORM_EXT)),S===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&($=t.R8UI),z===t.UNSIGNED_SHORT&&($=t.R16UI),z===t.UNSIGNED_INT&&($=t.R32UI),z===t.BYTE&&($=t.R8I),z===t.SHORT&&($=t.R16I),z===t.INT&&($=t.R32I)),S===t.RG&&(z===t.FLOAT&&($=t.RG32F),z===t.HALF_FLOAT&&($=t.RG16F),z===t.UNSIGNED_BYTE&&($=t.RG8),z===t.UNSIGNED_SHORT&&de&&($=de.RG16_EXT),z===t.SHORT&&de&&($=de.RG16_SNORM_EXT)),S===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&($=t.RG8UI),z===t.UNSIGNED_SHORT&&($=t.RG16UI),z===t.UNSIGNED_INT&&($=t.RG32UI),z===t.BYTE&&($=t.RG8I),z===t.SHORT&&($=t.RG16I),z===t.INT&&($=t.RG32I)),S===t.RGB_INTEGER&&(z===t.UNSIGNED_BYTE&&($=t.RGB8UI),z===t.UNSIGNED_SHORT&&($=t.RGB16UI),z===t.UNSIGNED_INT&&($=t.RGB32UI),z===t.BYTE&&($=t.RGB8I),z===t.SHORT&&($=t.RGB16I),z===t.INT&&($=t.RGB32I)),S===t.RGBA_INTEGER&&(z===t.UNSIGNED_BYTE&&($=t.RGBA8UI),z===t.UNSIGNED_SHORT&&($=t.RGBA16UI),z===t.UNSIGNED_INT&&($=t.RGBA32UI),z===t.BYTE&&($=t.RGBA8I),z===t.SHORT&&($=t.RGBA16I),z===t.INT&&($=t.RGBA32I)),S===t.RGB&&(z===t.UNSIGNED_SHORT&&de&&($=de.RGB16_EXT),z===t.SHORT&&de&&($=de.RGB16_SNORM_EXT),z===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),z===t.UNSIGNED_INT_10F_11F_11F_REV&&($=t.R11F_G11F_B10F)),S===t.RGBA){const J=se?zc:$e.getTransfer(ne);z===t.FLOAT&&($=t.RGBA32F),z===t.HALF_FLOAT&&($=t.RGBA16F),z===t.UNSIGNED_BYTE&&($=J===nt?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT&&de&&($=de.RGBA16_EXT),z===t.SHORT&&de&&($=de.RGBA16_SNORM_EXT),z===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function w(A,S){let z;return A?S===null||S===Ei||S===Ia?z=t.DEPTH24_STENCIL8:S===mi?z=t.DEPTH32F_STENCIL8:S===Na&&(z=t.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ei||S===Ia?z=t.DEPTH_COMPONENT24:S===mi?z=t.DEPTH_COMPONENT32F:S===Na&&(z=t.DEPTH_COMPONENT16),z}function T(A,S){return h(A)===!0||A.isFramebufferTexture&&A.minFilter!==Xt&&A.minFilter!==nn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function b(A){const S=A.target;S.removeEventListener("dispose",b),C(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&d.delete(S)}function _(A){const S=A.target;S.removeEventListener("dispose",_),R(S)}function C(A){const S=i.get(A);if(S.__webglInit===void 0)return;const z=A.source,Q=p.get(z);if(Q){const ne=Q[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&P(A),Object.keys(Q).length===0&&p.delete(z)}i.remove(A)}function P(A){const S=i.get(A);t.deleteTexture(S.__webglTexture);const z=A.source,Q=p.get(z);delete Q[S.__cacheKey],o.memory.textures--}function R(A){const S=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let ne=0;ne<S.__webglFramebuffer[Q].length;ne++)t.deleteFramebuffer(S.__webglFramebuffer[Q][ne]);else t.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)t.deleteFramebuffer(S.__webglFramebuffer[Q]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=A.textures;for(let Q=0,ne=z.length;Q<ne;Q++){const se=i.get(z[Q]);se.__webglTexture&&(t.deleteTexture(se.__webglTexture),o.memory.textures--),i.remove(z[Q])}i.remove(A)}let L=0;function U(){L=0}function O(){return L}function D(A){L=A}function k(){const A=L;return A>=r.maxTextures&&Ne("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),L+=1,A}function B(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function V(A,S){const z=i.get(A);if(A.isVideoTexture&&ct(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){const Q=A.image;if(Q===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(z,A,S);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+S)}function Y(A,S){const z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){Re(z,A,S);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+S)}function K(A,S){const z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){Re(z,A,S);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+S)}function ee(A,S){const z=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&z.__version!==A.version){Le(z,A,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+S)}const ce={[oh]:t.REPEAT,[Oi]:t.CLAMP_TO_EDGE,[ah]:t.MIRRORED_REPEAT},Ue={[Xt]:t.NEAREST,[jb]:t.NEAREST_MIPMAP_NEAREST,[vl]:t.NEAREST_MIPMAP_LINEAR,[nn]:t.LINEAR,[cf]:t.LINEAR_MIPMAP_NEAREST,[ts]:t.LINEAR_MIPMAP_LINEAR},ze={[$b]:t.NEVER,[Jb]:t.ALWAYS,[qb]:t.LESS,[pm]:t.LEQUAL,[Kb]:t.EQUAL,[mm]:t.GEQUAL,[Zb]:t.GREATER,[Qb]:t.NOTEQUAL};function De(A,S){if(S.type===mi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===nn||S.magFilter===cf||S.magFilter===vl||S.magFilter===ts||S.minFilter===nn||S.minFilter===cf||S.minFilter===vl||S.minFilter===ts)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,ce[S.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,ce[S.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,ce[S.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,Ue[S.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,Ue[S.minFilter]),S.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,ze[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Xt||S.minFilter!==vl&&S.minFilter!==ts||S.type===mi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function q(A,S){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",b));const Q=S.source;let ne=p.get(Q);ne===void 0&&(ne={},p.set(Q,ne));const se=B(S);if(se!==A.__cacheKey){ne[se]===void 0&&(ne[se]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ne[se].usedTimes++;const de=ne[A.__cacheKey];de!==void 0&&(ne[A.__cacheKey].usedTimes--,de.usedTimes===0&&P(S)),A.__cacheKey=se,A.__webglTexture=ne[se].texture}return z}function he(A,S,z){return Math.floor(Math.floor(A/z)/S)}function le(A,S,z,Q){const se=A.updateRanges;if(se.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,z,Q,S.data);else{se.sort((Se,ue)=>Se.start-ue.start);let de=0;for(let Se=1;Se<se.length;Se++){const ue=se[de],oe=se[Se],Ie=ue.start+ue.count,Be=he(oe.start,S.width,4),Je=he(ue.start,S.width,4);oe.start<=Ie+1&&Be===Je&&he(oe.start+oe.count-1,S.width,4)===Be?ue.count=Math.max(ue.count,oe.start+oe.count-ue.start):(++de,se[de]=oe)}se.length=de+1;const $=n.getParameter(t.UNPACK_ROW_LENGTH),J=n.getParameter(t.UNPACK_SKIP_PIXELS),xe=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let Se=0,ue=se.length;Se<ue;Se++){const oe=se[Se],Ie=Math.floor(oe.start/4),Be=Math.ceil(oe.count/4),Je=Ie%S.width,N=Math.floor(Ie/S.width),ae=Be,Z=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Je),n.pixelStorei(t.UNPACK_SKIP_ROWS,N),n.texSubImage2D(t.TEXTURE_2D,0,Je,N,ae,Z,z,Q,S.data)}A.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,$),n.pixelStorei(t.UNPACK_SKIP_PIXELS,J),n.pixelStorei(t.UNPACK_SKIP_ROWS,xe)}}function Re(A,S,z){let Q=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=t.TEXTURE_3D);const ne=q(A,S),se=S.source;n.bindTexture(Q,A.__webglTexture,t.TEXTURE0+z);const de=i.get(se);if(se.version!==de.__version||ne===!0){if(n.activeTexture(t.TEXTURE0+z),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const Z=$e.getPrimaries($e.workingColorSpace),_e=S.colorSpace===hr?null:$e.getPrimaries(S.colorSpace),fe=S.colorSpace===hr||Z===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe)}n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment);let J=v(S.image,!1,r.maxTextureSize);J=pe(S,J);const xe=s.convert(S.format,S.colorSpace),Se=s.convert(S.type);let ue=M(S.internalFormat,xe,Se,S.normalized,S.colorSpace,S.isVideoTexture);De(Q,S);let oe;const Ie=S.mipmaps,Be=S.isVideoTexture!==!0,Je=de.__version===void 0||ne===!0,N=se.dataReady,ae=T(S,J);if(S.isDepthTexture)ue=w(S.format===ns,S.type),Je&&(Be?n.texStorage2D(t.TEXTURE_2D,1,ue,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,ue,J.width,J.height,0,xe,Se,null));else if(S.isDataTexture)if(Ie.length>0){Be&&Je&&n.texStorage2D(t.TEXTURE_2D,ae,ue,Ie[0].width,Ie[0].height);for(let Z=0,_e=Ie.length;Z<_e;Z++)oe=Ie[Z],Be?N&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,oe.width,oe.height,xe,Se,oe.data):n.texImage2D(t.TEXTURE_2D,Z,ue,oe.width,oe.height,0,xe,Se,oe.data);S.generateMipmaps=!1}else Be?(Je&&n.texStorage2D(t.TEXTURE_2D,ae,ue,J.width,J.height),N&&le(S,J,xe,Se)):n.texImage2D(t.TEXTURE_2D,0,ue,J.width,J.height,0,xe,Se,J.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Be&&Je&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ae,ue,Ie[0].width,Ie[0].height,J.depth);for(let Z=0,_e=Ie.length;Z<_e;Z++)if(oe=Ie[Z],S.format!==ni)if(xe!==null)if(Be){if(N)if(S.layerUpdates.size>0){const fe=Ev(oe.width,oe.height,S.format,S.type);for(const te of S.layerUpdates){const we=oe.data.subarray(te*fe/oe.data.BYTES_PER_ELEMENT,(te+1)*fe/oe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,te,oe.width,oe.height,1,xe,we)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,oe.width,oe.height,J.depth,xe,oe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Z,ue,oe.width,oe.height,J.depth,0,oe.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,oe.width,oe.height,J.depth,xe,Se,oe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Z,ue,oe.width,oe.height,J.depth,0,xe,Se,oe.data)}else{Be&&Je&&n.texStorage2D(t.TEXTURE_2D,ae,ue,Ie[0].width,Ie[0].height);for(let Z=0,_e=Ie.length;Z<_e;Z++)oe=Ie[Z],S.format!==ni?xe!==null?Be?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,Z,0,0,oe.width,oe.height,xe,oe.data):n.compressedTexImage2D(t.TEXTURE_2D,Z,ue,oe.width,oe.height,0,oe.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?N&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,oe.width,oe.height,xe,Se,oe.data):n.texImage2D(t.TEXTURE_2D,Z,ue,oe.width,oe.height,0,xe,Se,oe.data)}else if(S.isDataArrayTexture)if(Be){if(Je&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ae,ue,J.width,J.height,J.depth),N)if(S.layerUpdates.size>0){const Z=Ev(J.width,J.height,S.format,S.type);for(const _e of S.layerUpdates){const fe=J.data.subarray(_e*Z/J.data.BYTES_PER_ELEMENT,(_e+1)*Z/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,_e,J.width,J.height,1,xe,Se,fe)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,xe,Se,J.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ue,J.width,J.height,J.depth,0,xe,Se,J.data);else if(S.isData3DTexture)Be?(Je&&n.texStorage3D(t.TEXTURE_3D,ae,ue,J.width,J.height,J.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,xe,Se,J.data)):n.texImage3D(t.TEXTURE_3D,0,ue,J.width,J.height,J.depth,0,xe,Se,J.data);else if(S.isFramebufferTexture){if(Je)if(Be)n.texStorage2D(t.TEXTURE_2D,ae,ue,J.width,J.height);else{let Z=J.width,_e=J.height;for(let fe=0;fe<ae;fe++)n.texImage2D(t.TEXTURE_2D,fe,ue,Z,_e,0,xe,Se,null),Z>>=1,_e>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in t){const Z=t.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),J.parentNode!==Z){Z.appendChild(J),d.add(S),Z.onpaint=Oe=>{const bt=Oe.changedElements;for(const st of d)bt.includes(st.image)&&(st.needsUpdate=!0)},Z.requestPaint();return}const _e=0,fe=t.RGBA,te=t.RGBA,we=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,_e,fe,te,we,J),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(Be&&Je){const Z=Et(Ie[0]);n.texStorage2D(t.TEXTURE_2D,ae,ue,Z.width,Z.height)}for(let Z=0,_e=Ie.length;Z<_e;Z++)oe=Ie[Z],Be?N&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,xe,Se,oe):n.texImage2D(t.TEXTURE_2D,Z,ue,xe,Se,oe);S.generateMipmaps=!1}else if(Be){if(Je){const Z=Et(J);n.texStorage2D(t.TEXTURE_2D,ae,ue,Z.width,Z.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,Se,J)}else n.texImage2D(t.TEXTURE_2D,0,ue,xe,Se,J);h(S)&&m(Q),de.__version=se.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Le(A,S,z){if(S.image.length!==6)return;const Q=q(A,S),ne=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+z);const se=i.get(ne);if(ne.version!==se.__version||Q===!0){n.activeTexture(t.TEXTURE0+z);const de=$e.getPrimaries($e.workingColorSpace),$=S.colorSpace===hr?null:$e.getPrimaries(S.colorSpace),J=S.colorSpace===hr||de===$?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const xe=S.isCompressedTexture||S.image[0].isCompressedTexture,Se=S.image[0]&&S.image[0].isDataTexture,ue=[];for(let te=0;te<6;te++)!xe&&!Se?ue[te]=v(S.image[te],!0,r.maxCubemapSize):ue[te]=Se?S.image[te].image:S.image[te],ue[te]=pe(S,ue[te]);const oe=ue[0],Ie=s.convert(S.format,S.colorSpace),Be=s.convert(S.type),Je=M(S.internalFormat,Ie,Be,S.normalized,S.colorSpace),N=S.isVideoTexture!==!0,ae=se.__version===void 0||Q===!0,Z=ne.dataReady;let _e=T(S,oe);De(t.TEXTURE_CUBE_MAP,S);let fe;if(xe){N&&ae&&n.texStorage2D(t.TEXTURE_CUBE_MAP,_e,Je,oe.width,oe.height);for(let te=0;te<6;te++){fe=ue[te].mipmaps;for(let we=0;we<fe.length;we++){const Oe=fe[we];S.format!==ni?Ie!==null?N?Z&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,0,0,Oe.width,Oe.height,Ie,Oe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,Je,Oe.width,Oe.height,0,Oe.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,0,0,Oe.width,Oe.height,Ie,Be,Oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,Je,Oe.width,Oe.height,0,Ie,Be,Oe.data)}}}else{if(fe=S.mipmaps,N&&ae){fe.length>0&&_e++;const te=Et(ue[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,_e,Je,te.width,te.height)}for(let te=0;te<6;te++)if(Se){N?Z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ue[te].width,ue[te].height,Ie,Be,ue[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Je,ue[te].width,ue[te].height,0,Ie,Be,ue[te].data);for(let we=0;we<fe.length;we++){const bt=fe[we].image[te].image;N?Z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,0,0,bt.width,bt.height,Ie,Be,bt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,Je,bt.width,bt.height,0,Ie,Be,bt.data)}}else{N?Z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ie,Be,ue[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Je,Ie,Be,ue[te]);for(let we=0;we<fe.length;we++){const Oe=fe[we];N?Z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,0,0,Ie,Be,Oe.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,Je,Ie,Be,Oe.image[te])}}}h(S)&&m(t.TEXTURE_CUBE_MAP),se.__version=ne.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Ce(A,S,z,Q,ne,se){const de=s.convert(z.format,z.colorSpace),$=s.convert(z.type),J=M(z.internalFormat,de,$,z.normalized,z.colorSpace),xe=i.get(S),Se=i.get(z);if(Se.__renderTarget=S,!xe.__hasExternalTextures){const ue=Math.max(1,S.width>>se),oe=Math.max(1,S.height>>se);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,se,J,ue,oe,S.depth,0,de,$,null):n.texImage2D(ne,se,J,ue,oe,0,de,$,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Ye(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,ne,Se.__webglTexture,0,Ot(S)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,ne,Se.__webglTexture,se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function gt(A,S,z){if(t.bindRenderbuffer(t.RENDERBUFFER,A),S.depthBuffer){const Q=S.depthTexture,ne=Q&&Q.isDepthTexture?Q.type:null,se=w(S.stencilBuffer,ne),de=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Ye(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ot(S),se,S.width,S.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ot(S),se,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,se,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,de,t.RENDERBUFFER,A)}else{const Q=S.textures;for(let ne=0;ne<Q.length;ne++){const se=Q[ne],de=s.convert(se.format,se.colorSpace),$=s.convert(se.type),J=M(se.internalFormat,de,$,se.normalized,se.colorSpace);Ye(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ot(S),J,S.width,S.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ot(S),J,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,J,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Xe(A,S,z){const Q=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=i.get(S.depthTexture);if(ne.__renderTarget=S,(!ne.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Q){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,S.depthTexture.addEventListener("dispose",b)),ne.__webglTexture===void 0){ne.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),De(t.TEXTURE_CUBE_MAP,S.depthTexture);const xe=s.convert(S.depthTexture.format),Se=s.convert(S.depthTexture.type);let ue;S.depthTexture.format===qi?ue=t.DEPTH_COMPONENT24:S.depthTexture.format===ns&&(ue=t.DEPTH24_STENCIL8);for(let oe=0;oe<6;oe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ue,S.width,S.height,0,xe,Se,null)}}else V(S.depthTexture,0);const se=ne.__webglTexture,de=Ot(S),$=Q?t.TEXTURE_CUBE_MAP_POSITIVE_X+z:t.TEXTURE_2D,J=S.depthTexture.format===ns?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(S.depthTexture.format===qi)Ye(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,$,se,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,J,$,se,0);else if(S.depthTexture.format===ns)Ye(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,$,se,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,J,$,se,0);else throw new Error("Unknown depthTexture format")}function rt(A){const S=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const Q=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Q){const ne=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Q.removeEventListener("dispose",ne)};Q.addEventListener("dispose",ne),S.__depthDisposeCallback=ne}S.__boundDepthTexture=Q}if(A.depthTexture&&!S.__autoAllocateDepthBuffer)if(z)for(let Q=0;Q<6;Q++)Xe(S.__webglFramebuffer[Q],A,Q);else{const Q=A.texture.mipmaps;Q&&Q.length>0?Xe(S.__webglFramebuffer[0],A,0):Xe(S.__webglFramebuffer,A,0)}else if(z){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]===void 0)S.__webglDepthbuffer[Q]=t.createRenderbuffer(),gt(S.__webglDepthbuffer[Q],A,!1);else{const ne=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=S.__webglDepthbuffer[Q];t.bindRenderbuffer(t.RENDERBUFFER,se),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,se)}}else{const Q=A.texture.mipmaps;if(Q&&Q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),gt(S.__webglDepthbuffer,A,!1);else{const ne=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,se),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,se)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ht(A,S,z){const Q=i.get(A);S!==void 0&&Ce(Q.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&rt(A)}function Ge(A){const S=A.texture,z=i.get(A),Q=i.get(S);A.addEventListener("dispose",_);const ne=A.textures,se=A.isWebGLCubeRenderTarget===!0,de=ne.length>1;if(de||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=S.version,o.memory.textures++),se){z.__webglFramebuffer=[];for(let $=0;$<6;$++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[$]=[];for(let J=0;J<S.mipmaps.length;J++)z.__webglFramebuffer[$][J]=t.createFramebuffer()}else z.__webglFramebuffer[$]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let $=0;$<S.mipmaps.length;$++)z.__webglFramebuffer[$]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(de)for(let $=0,J=ne.length;$<J;$++){const xe=i.get(ne[$]);xe.__webglTexture===void 0&&(xe.__webglTexture=t.createTexture(),o.memory.textures++)}if(A.samples>0&&Ye(A)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let $=0;$<ne.length;$++){const J=ne[$];z.__webglColorRenderbuffer[$]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[$]);const xe=s.convert(J.format,J.colorSpace),Se=s.convert(J.type),ue=M(J.internalFormat,xe,Se,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),oe=Ot(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,oe,ue,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+$,t.RENDERBUFFER,z.__webglColorRenderbuffer[$])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),gt(z.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(se){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),De(t.TEXTURE_CUBE_MAP,S);for(let $=0;$<6;$++)if(S.mipmaps&&S.mipmaps.length>0)for(let J=0;J<S.mipmaps.length;J++)Ce(z.__webglFramebuffer[$][J],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+$,J);else Ce(z.__webglFramebuffer[$],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);h(S)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(de){for(let $=0,J=ne.length;$<J;$++){const xe=ne[$],Se=i.get(xe);let ue=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ue=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,Se.__webglTexture),De(ue,xe),Ce(z.__webglFramebuffer,A,xe,t.COLOR_ATTACHMENT0+$,ue,0),h(xe)&&m(ue)}n.unbindTexture()}else{let $=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&($=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture($,Q.__webglTexture),De($,S),S.mipmaps&&S.mipmaps.length>0)for(let J=0;J<S.mipmaps.length;J++)Ce(z.__webglFramebuffer[J],A,S,t.COLOR_ATTACHMENT0,$,J);else Ce(z.__webglFramebuffer,A,S,t.COLOR_ATTACHMENT0,$,0);h(S)&&m($),n.unbindTexture()}A.depthBuffer&&rt(A)}function Ft(A){const S=A.textures;for(let z=0,Q=S.length;z<Q;z++){const ne=S[z];if(h(ne)){const se=x(A),de=i.get(ne).__webglTexture;n.bindTexture(se,de),m(se),n.unbindTexture()}}}const xt=[],En=[];function I(A){if(A.samples>0){if(Ye(A)===!1){const S=A.textures,z=A.width,Q=A.height;let ne=t.COLOR_BUFFER_BIT;const se=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=i.get(A),$=S.length>1;if($)for(let xe=0;xe<S.length;xe++)n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);const J=A.texture.mipmaps;J&&J.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let xe=0;xe<S.length;xe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),$){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,de.__webglColorRenderbuffer[xe]);const Se=i.get(S[xe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Se,0)}t.blitFramebuffer(0,0,z,Q,0,0,z,Q,ne,t.NEAREST),l===!0&&(xt.length=0,En.length=0,xt.push(t.COLOR_ATTACHMENT0+xe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(xt.push(se),En.push(se),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,En)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,xt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),$)for(let xe=0;xe<S.length;xe++){n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,de.__webglColorRenderbuffer[xe]);const Se=i.get(S[xe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,Se,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function Ot(A){return Math.min(r.maxSamples,A.samples)}function Ye(A){const S=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ct(A){const S=o.render.frame;u.get(A)!==S&&(u.set(A,S),A.update())}function pe(A,S){const z=A.colorSpace,Q=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Vc&&z!==hr&&($e.getTransfer(z)===nt?(Q!==ni||ne!==bn)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",z)),S}function Et(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=U,this.getTextureUnits=O,this.setTextureUnits=D,this.setTexture2D=V,this.setTexture2DArray=Y,this.setTexture3D=K,this.setTextureCube=ee,this.rebindTextures=ht,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Ye,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function RL(t,e){function n(i,r=hr){let s;const o=$e.getTransfer(r);if(i===bn)return t.UNSIGNED_BYTE;if(i===cm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===um)return t.UNSIGNED_SHORT_5_5_5_1;if(i===HS)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===GS)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===VS)return t.BYTE;if(i===zS)return t.SHORT;if(i===Na)return t.UNSIGNED_SHORT;if(i===lm)return t.INT;if(i===Ei)return t.UNSIGNED_INT;if(i===mi)return t.FLOAT;if(i===$i)return t.HALF_FLOAT;if(i===WS)return t.ALPHA;if(i===jS)return t.RGB;if(i===ni)return t.RGBA;if(i===qi)return t.DEPTH_COMPONENT;if(i===ns)return t.DEPTH_STENCIL;if(i===XS)return t.RED;if(i===fm)return t.RED_INTEGER;if(i===ds)return t.RG;if(i===dm)return t.RG_INTEGER;if(i===hm)return t.RGBA_INTEGER;if(i===tc||i===nc||i===ic||i===rc)if(o===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===tc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===nc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ic)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===tc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===nc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ic)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===rc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===lh||i===ch||i===uh||i===fh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===lh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ch)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===uh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===dh||i===hh||i===ph||i===mh||i===gh||i===kc||i===vh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===dh||i===hh)return o===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ph)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===mh)return s.COMPRESSED_R11_EAC;if(i===gh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===kc)return s.COMPRESSED_RG11_EAC;if(i===vh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===xh||i===_h||i===yh||i===Sh||i===Mh||i===Eh||i===Th||i===wh||i===Ah||i===Ch||i===bh||i===Rh||i===Ph||i===Dh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===xh)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_h)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===yh)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sh)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Mh)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Eh)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Th)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wh)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ah)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ch)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===bh)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Rh)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ph)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Dh)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Lh||i===Nh||i===Ih)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Lh)return o===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Nh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ih)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Uh||i===Fh||i===Bc||i===Oh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Uh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Fh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Oh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ia?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const PL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DL=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class LL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new tM(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ti({vertexShader:PL,fragmentShader:DL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new cn(new Ya(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class NL extends vs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,g=null;const y=typeof XRWebGLBinding<"u",v=new LL,h={},m=n.getContextAttributes();let x=null,M=null;const w=[],T=[],b=new tt;let _=null;const C=new Gn;C.viewport=new Ct;const P=new Gn;P.viewport=new Ct;const R=[C,P],L=new HR;let U=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let he=w[q];return he===void 0&&(he=new vf,w[q]=he),he.getTargetRaySpace()},this.getControllerGrip=function(q){let he=w[q];return he===void 0&&(he=new vf,w[q]=he),he.getGripSpace()},this.getHand=function(q){let he=w[q];return he===void 0&&(he=new vf,w[q]=he),he.getHandSpace()};function D(q){const he=T.indexOf(q.inputSource);if(he===-1)return;const le=w[he];le!==void 0&&(le.update(q.inputSource,q.frame,c||o),le.dispatchEvent({type:q.type,data:q.inputSource}))}function k(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",B);for(let q=0;q<w.length;q++){const he=T[q];he!==null&&(T[q]=null,w[q].disconnect(he))}U=null,O=null,v.reset();for(const q in h)delete h[q];e.setRenderTarget(x),p=null,f=null,d=null,r=null,M=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",k),r.addEventListener("inputsourceschange",B),m.xrCompatible!==!0&&await n.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(b),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Re=null,Le=null;m.depth&&(Le=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,le=m.stencil?ns:qi,Re=m.stencil?Ia:Ei);const Ce={colorFormat:n.RGBA8,depthFormat:Le,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Ce),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Si(f.textureWidth,f.textureHeight,{format:ni,type:bn,depthTexture:new vo(f.textureWidth,f.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const le={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,le),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Si(p.framebufferWidth,p.framebufferHeight,{format:ni,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),De.setContext(r),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function B(q){for(let he=0;he<q.removed.length;he++){const le=q.removed[he],Re=T.indexOf(le);Re>=0&&(T[Re]=null,w[Re].disconnect(le))}for(let he=0;he<q.added.length;he++){const le=q.added[he];let Re=T.indexOf(le);if(Re===-1){for(let Ce=0;Ce<w.length;Ce++)if(Ce>=T.length){T.push(le),Re=Ce;break}else if(T[Ce]===null){T[Ce]=le,Re=Ce;break}if(Re===-1)break}const Le=w[Re];Le&&Le.connect(le)}}const V=new H,Y=new H;function K(q,he,le){V.setFromMatrixPosition(he.matrixWorld),Y.setFromMatrixPosition(le.matrixWorld);const Re=V.distanceTo(Y),Le=he.projectionMatrix.elements,Ce=le.projectionMatrix.elements,gt=Le[14]/(Le[10]-1),Xe=Le[14]/(Le[10]+1),rt=(Le[9]+1)/Le[5],ht=(Le[9]-1)/Le[5],Ge=(Le[8]-1)/Le[0],Ft=(Ce[8]+1)/Ce[0],xt=gt*Ge,En=gt*Ft,I=Re/(-Ge+Ft),Ot=I*-Ge;if(he.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ot),q.translateZ(I),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Le[10]===-1)q.projectionMatrix.copy(he.projectionMatrix),q.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Ye=gt+I,ct=Xe+I,pe=xt-Ot,Et=En+(Re-Ot),A=rt*Xe/ct*Ye,S=ht*Xe/ct*Ye;q.projectionMatrix.makePerspective(pe,Et,A,S,Ye,ct),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ee(q,he){he===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(he.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let he=q.near,le=q.far;v.texture!==null&&(v.depthNear>0&&(he=v.depthNear),v.depthFar>0&&(le=v.depthFar)),L.near=P.near=C.near=he,L.far=P.far=C.far=le,(U!==L.near||O!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),U=L.near,O=L.far),L.layers.mask=q.layers.mask|6,C.layers.mask=L.layers.mask&-5,P.layers.mask=L.layers.mask&-3;const Re=q.parent,Le=L.cameras;ee(L,Re);for(let Ce=0;Ce<Le.length;Ce++)ee(Le[Ce],Re);Le.length===2?K(L,C,P):L.projectionMatrix.copy(C.projectionMatrix),ce(q,L,Re)};function ce(q,he,le){le===null?q.matrix.copy(he.matrixWorld):(q.matrix.copy(le.matrixWorld),q.matrix.invert(),q.matrix.multiply(he.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(he.projectionMatrix),q.projectionMatrixInverse.copy(he.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Vh*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(L)},this.getCameraTexture=function(q){return h[q]};let Ue=null;function ze(q,he){if(u=he.getViewerPose(c||o),g=he,u!==null){const le=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Re=!1;le.length!==L.cameras.length&&(L.cameras.length=0,Re=!0);for(let Xe=0;Xe<le.length;Xe++){const rt=le[Xe];let ht=null;if(p!==null)ht=p.getViewport(rt);else{const Ft=d.getViewSubImage(f,rt);ht=Ft.viewport,Xe===0&&(e.setRenderTargetTextures(M,Ft.colorTexture,Ft.depthStencilTexture),e.setRenderTarget(M))}let Ge=R[Xe];Ge===void 0&&(Ge=new Gn,Ge.layers.enable(Xe),Ge.viewport=new Ct,R[Xe]=Ge),Ge.matrix.fromArray(rt.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(rt.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(ht.x,ht.y,ht.width,ht.height),Xe===0&&(L.matrix.copy(Ge.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Re===!0&&L.cameras.push(Ge)}const Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){d=i.getBinding();const Xe=d.getDepthInformation(le[0]);Xe&&Xe.isValid&&Xe.texture&&v.init(Xe,r.renderState)}if(Le&&Le.includes("camera-access")&&y){e.state.unbindTexture(),d=i.getBinding();for(let Xe=0;Xe<le.length;Xe++){const rt=le[Xe].camera;if(rt){let ht=h[rt];ht||(ht=new tM,h[rt]=ht);const Ge=d.getCameraImage(rt);ht.sourceTexture=Ge}}}}for(let le=0;le<w.length;le++){const Re=T[le],Le=w[le];Re!==null&&Le!==void 0&&Le.update(Re,he,c||o)}Ue&&Ue(q,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),g=null}const De=new sM;De.setAnimationLoop(ze),this.setAnimationLoop=function(q){Ue=q},this.dispose=function(){}}}const IL=new Lt,dM=new Fe;dM.set(-1,0,0,0,1,0,0,0,1);function UL(t,e){function n(v,h){v.matrixAutoUpdate===!0&&v.updateMatrix(),h.value.copy(v.matrix)}function i(v,h){h.color.getRGB(v.fogColor.value,nM(t)),h.isFog?(v.fogNear.value=h.near,v.fogFar.value=h.far):h.isFogExp2&&(v.fogDensity.value=h.density)}function r(v,h,m,x,M){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(v,h):h.isMeshLambertMaterial?(s(v,h),h.envMap&&(v.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(v,h),d(v,h)):h.isMeshPhongMaterial?(s(v,h),u(v,h),h.envMap&&(v.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(v,h),f(v,h),h.isMeshPhysicalMaterial&&p(v,h,M)):h.isMeshMatcapMaterial?(s(v,h),g(v,h)):h.isMeshDepthMaterial?s(v,h):h.isMeshDistanceMaterial?(s(v,h),y(v,h)):h.isMeshNormalMaterial?s(v,h):h.isLineBasicMaterial?(o(v,h),h.isLineDashedMaterial&&a(v,h)):h.isPointsMaterial?l(v,h,m,x):h.isSpriteMaterial?c(v,h):h.isShadowMaterial?(v.color.value.copy(h.color),v.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(v,h){v.opacity.value=h.opacity,h.color&&v.diffuse.value.copy(h.color),h.emissive&&v.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(v.map.value=h.map,n(h.map,v.mapTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,n(h.alphaMap,v.alphaMapTransform)),h.bumpMap&&(v.bumpMap.value=h.bumpMap,n(h.bumpMap,v.bumpMapTransform),v.bumpScale.value=h.bumpScale,h.side===Sn&&(v.bumpScale.value*=-1)),h.normalMap&&(v.normalMap.value=h.normalMap,n(h.normalMap,v.normalMapTransform),v.normalScale.value.copy(h.normalScale),h.side===Sn&&v.normalScale.value.negate()),h.displacementMap&&(v.displacementMap.value=h.displacementMap,n(h.displacementMap,v.displacementMapTransform),v.displacementScale.value=h.displacementScale,v.displacementBias.value=h.displacementBias),h.emissiveMap&&(v.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,v.emissiveMapTransform)),h.specularMap&&(v.specularMap.value=h.specularMap,n(h.specularMap,v.specularMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest);const m=e.get(h),x=m.envMap,M=m.envMapRotation;x&&(v.envMap.value=x,v.envMapRotation.value.setFromMatrix4(IL.makeRotationFromEuler(M)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(dM),v.reflectivity.value=h.reflectivity,v.ior.value=h.ior,v.refractionRatio.value=h.refractionRatio),h.lightMap&&(v.lightMap.value=h.lightMap,v.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,v.lightMapTransform)),h.aoMap&&(v.aoMap.value=h.aoMap,v.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,v.aoMapTransform))}function o(v,h){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,h.map&&(v.map.value=h.map,n(h.map,v.mapTransform))}function a(v,h){v.dashSize.value=h.dashSize,v.totalSize.value=h.dashSize+h.gapSize,v.scale.value=h.scale}function l(v,h,m,x){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,v.size.value=h.size*m,v.scale.value=x*.5,h.map&&(v.map.value=h.map,n(h.map,v.uvTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,n(h.alphaMap,v.alphaMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest)}function c(v,h){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,v.rotation.value=h.rotation,h.map&&(v.map.value=h.map,n(h.map,v.mapTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,n(h.alphaMap,v.alphaMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest)}function u(v,h){v.specular.value.copy(h.specular),v.shininess.value=Math.max(h.shininess,1e-4)}function d(v,h){h.gradientMap&&(v.gradientMap.value=h.gradientMap)}function f(v,h){v.metalness.value=h.metalness,h.metalnessMap&&(v.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,v.metalnessMapTransform)),v.roughness.value=h.roughness,h.roughnessMap&&(v.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,v.roughnessMapTransform)),h.envMap&&(v.envMapIntensity.value=h.envMapIntensity)}function p(v,h,m){v.ior.value=h.ior,h.sheen>0&&(v.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),v.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(v.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,v.sheenColorMapTransform)),h.sheenRoughnessMap&&(v.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,v.sheenRoughnessMapTransform))),h.clearcoat>0&&(v.clearcoat.value=h.clearcoat,v.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(v.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,v.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(v.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Sn&&v.clearcoatNormalScale.value.negate())),h.dispersion>0&&(v.dispersion.value=h.dispersion),h.iridescence>0&&(v.iridescence.value=h.iridescence,v.iridescenceIOR.value=h.iridescenceIOR,v.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(v.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,v.iridescenceMapTransform)),h.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),h.transmission>0&&(v.transmission.value=h.transmission,v.transmissionSamplerMap.value=m.texture,v.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(v.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,v.transmissionMapTransform)),v.thickness.value=h.thickness,h.thicknessMap&&(v.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=h.attenuationDistance,v.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(v.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(v.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=h.specularIntensity,v.specularColor.value.copy(h.specularColor),h.specularColorMap&&(v.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,v.specularColorMapTransform)),h.specularIntensityMap&&(v.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,v.specularIntensityMapTransform))}function g(v,h){h.matcap&&(v.matcap.value=h.matcap)}function y(v,h){const m=e.get(h).light;v.referencePosition.value.setFromMatrixPosition(m.matrixWorld),v.nearDistance.value=m.shadow.camera.near,v.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function FL(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,x){const M=x.program;i.uniformBlockBinding(m,M)}function c(m,x){let M=r[m.id];M===void 0&&(g(m),M=u(m),r[m.id]=M,m.addEventListener("dispose",v));const w=x.program;i.updateUBOMapping(m,w);const T=e.render.frame;s[m.id]!==T&&(f(m),s[m.id]=T)}function u(m){const x=d();m.__bindingPointIndex=x;const M=t.createBuffer(),w=m.__size,T=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,w,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,M),M}function d(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(m){const x=r[m.id],M=m.uniforms,w=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let T=0,b=M.length;T<b;T++){const _=Array.isArray(M[T])?M[T]:[M[T]];for(let C=0,P=_.length;C<P;C++){const R=_[C];if(p(R,T,C,w)===!0){const L=R.__offset,U=Array.isArray(R.value)?R.value:[R.value];let O=0;for(let D=0;D<U.length;D++){const k=U[D],B=y(k);typeof k=="number"||typeof k=="boolean"?(R.__data[0]=k,t.bufferSubData(t.UNIFORM_BUFFER,L+O,R.__data)):k.isMatrix3?(R.__data[0]=k.elements[0],R.__data[1]=k.elements[1],R.__data[2]=k.elements[2],R.__data[3]=0,R.__data[4]=k.elements[3],R.__data[5]=k.elements[4],R.__data[6]=k.elements[5],R.__data[7]=0,R.__data[8]=k.elements[6],R.__data[9]=k.elements[7],R.__data[10]=k.elements[8],R.__data[11]=0):ArrayBuffer.isView(k)?R.__data.set(new k.constructor(k.buffer,k.byteOffset,R.__data.length)):(k.toArray(R.__data,O),O+=B.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,L,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,x,M,w){const T=m.value,b=x+"_"+M;if(w[b]===void 0)return typeof T=="number"||typeof T=="boolean"?w[b]=T:ArrayBuffer.isView(T)?w[b]=T.slice():w[b]=T.clone(),!0;{const _=w[b];if(typeof T=="number"||typeof T=="boolean"){if(_!==T)return w[b]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(_.equals(T)===!1)return _.copy(T),!0}}return!1}function g(m){const x=m.uniforms;let M=0;const w=16;for(let b=0,_=x.length;b<_;b++){const C=Array.isArray(x[b])?x[b]:[x[b]];for(let P=0,R=C.length;P<R;P++){const L=C[P],U=Array.isArray(L.value)?L.value:[L.value];for(let O=0,D=U.length;O<D;O++){const k=U[O],B=y(k),V=M%w,Y=V%B.boundary,K=V+Y;M+=Y,K!==0&&w-K<B.storage&&(M+=w-K),L.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=M,M+=B.storage}}}const T=M%w;return T>0&&(M+=w-T),m.__size=M,m.__cache={},this}function y(m){const x={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(x.boundary=4,x.storage=4):m.isVector2?(x.boundary=8,x.storage=8):m.isVector3||m.isColor?(x.boundary=16,x.storage=12):m.isVector4?(x.boundary=16,x.storage=16):m.isMatrix3?(x.boundary=48,x.storage=48):m.isMatrix4?(x.boundary=64,x.storage=64):m.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(x.boundary=16,x.storage=m.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",m),x}function v(m){const x=m.target;x.removeEventListener("dispose",v);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function h(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}const OL=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let fi=null;function kL(){return fi===null&&(fi=new wR(OL,16,16,ds,$i),fi.name="DFG_LUT",fi.minFilter=nn,fi.magFilter=nn,fi.wrapS=Oi,fi.wrapT=Oi,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}class BL{constructor(e={}){const{canvas:n=tR(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:p=bn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const y=p,v=new Set([hm,dm,fm]),h=new Set([bn,Ei,Na,Ia,cm,um]),m=new Uint32Array(4),x=new Int32Array(4),M=new H;let w=null,T=null;const b=[],_=[];let C=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let R=!1,L=null;this._outputColorSpace=Vn;let U=0,O=0,D=null,k=-1,B=null;const V=new Ct,Y=new Ct;let K=null;const ee=new et(0);let ce=0,Ue=n.width,ze=n.height,De=1,q=null,he=null;const le=new Ct(0,0,Ue,ze),Re=new Ct(0,0,Ue,ze);let Le=!1;const Ce=new xm;let gt=!1,Xe=!1;const rt=new Lt,ht=new H,Ge=new Ct,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function En(){return D===null?De:1}let I=i;function Ot(E,F){return n.getContext(E,F)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${am}`),n.addEventListener("webglcontextlost",te,!1),n.addEventListener("webglcontextrestored",we,!1),n.addEventListener("webglcontextcreationerror",Oe,!1),I===null){const F="webgl2";if(I=Ot(F,E),I===null)throw Ot(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Ze("WebGLRenderer: "+E.message),E}let Ye,ct,pe,Et,A,S,z,Q,ne,se,de,$,J,xe,Se,ue,oe,Ie,Be,Je,N,ae,Z;function _e(){Ye=new k3(I),Ye.init(),N=new RL(I,Ye),ct=new P3(I,Ye,e,N),pe=new CL(I,Ye),ct.reversedDepthBuffer&&f&&pe.buffers.depth.setReversed(!0),Et=new z3(I),A=new hL,S=new bL(I,Ye,pe,A,ct,N,Et),z=new O3(P),Q=new jR(I),ae=new b3(I,Q),ne=new B3(I,Q,Et,ae),se=new G3(I,ne,Q,ae,Et),Ie=new H3(I,ct,S),Se=new D3(A),de=new dL(P,z,Ye,ct,ae,Se),$=new UL(P,A),J=new mL,xe=new SL(Ye),oe=new C3(P,z,pe,se,g,l),ue=new AL(P,se,ct),Z=new FL(I,Et,ct,pe),Be=new R3(I,Ye,Et),Je=new V3(I,Ye,Et),Et.programs=de.programs,P.capabilities=ct,P.extensions=Ye,P.properties=A,P.renderLists=J,P.shadowMap=ue,P.state=pe,P.info=Et}_e(),y!==bn&&(C=new j3(y,n.width,n.height,r,s));const fe=new NL(P,I);this.xr=fe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=Ye.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ye.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return De},this.setPixelRatio=function(E){E!==void 0&&(De=E,this.setSize(Ue,ze,!1))},this.getSize=function(E){return E.set(Ue,ze)},this.setSize=function(E,F,X=!0){if(fe.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}Ue=E,ze=F,n.width=Math.floor(E*De),n.height=Math.floor(F*De),X===!0&&(n.style.width=E+"px",n.style.height=F+"px"),C!==null&&C.setSize(n.width,n.height),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(Ue*De,ze*De).floor()},this.setDrawingBufferSize=function(E,F,X){Ue=E,ze=F,De=X,n.width=Math.floor(E*X),n.height=Math.floor(F*X),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(y===bn){Ze("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){Ne("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(V)},this.getViewport=function(E){return E.copy(le)},this.setViewport=function(E,F,X,W){E.isVector4?le.set(E.x,E.y,E.z,E.w):le.set(E,F,X,W),pe.viewport(V.copy(le).multiplyScalar(De).round())},this.getScissor=function(E){return E.copy(Re)},this.setScissor=function(E,F,X,W){E.isVector4?Re.set(E.x,E.y,E.z,E.w):Re.set(E,F,X,W),pe.scissor(Y.copy(Re).multiplyScalar(De).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(E){pe.setScissorTest(Le=E)},this.setOpaqueSort=function(E){q=E},this.setTransparentSort=function(E){he=E},this.getClearColor=function(E){return E.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,X=!0){let W=0;if(E){let j=!1;if(D!==null){const ve=D.texture.format;j=v.has(ve)}if(j){const ve=D.texture.type,Me=h.has(ve),ge=oe.getClearColor(),Te=oe.getClearAlpha(),Ae=ge.r,ke=ge.g,He=ge.b;Me?(m[0]=Ae,m[1]=ke,m[2]=He,m[3]=Te,I.clearBufferuiv(I.COLOR,0,m)):(x[0]=Ae,x[1]=ke,x[2]=He,x[3]=Te,I.clearBufferiv(I.COLOR,0,x))}else W|=I.COLOR_BUFFER_BIT}F&&(W|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),L=E},this.dispose=function(){n.removeEventListener("webglcontextlost",te,!1),n.removeEventListener("webglcontextrestored",we,!1),n.removeEventListener("webglcontextcreationerror",Oe,!1),oe.dispose(),J.dispose(),xe.dispose(),A.dispose(),z.dispose(),se.dispose(),ae.dispose(),Z.dispose(),de.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Cm),fe.removeEventListener("sessionend",bm),Or.stop()};function te(E){E.preventDefault(),nv("WebGLRenderer: Context Lost."),R=!0}function we(){nv("WebGLRenderer: Context Restored."),R=!1;const E=Et.autoReset,F=ue.enabled,X=ue.autoUpdate,W=ue.needsUpdate,j=ue.type;_e(),Et.autoReset=E,ue.enabled=F,ue.autoUpdate=X,ue.needsUpdate=W,ue.type=j}function Oe(E){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function bt(E){const F=E.target;F.removeEventListener("dispose",bt),st(F)}function st(E){wi(E),A.remove(E)}function wi(E){const F=A.get(E).programs;F!==void 0&&(F.forEach(function(X){de.releaseProgram(X)}),E.isShaderMaterial&&de.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,X,W,j,ve){F===null&&(F=Ft);const Me=j.isMesh&&j.matrixWorld.determinant()<0,ge=mM(E,F,X,W,j);pe.setMaterial(W,Me);let Te=X.index,Ae=1;if(W.wireframe===!0){if(Te=ne.getWireframeAttribute(X),Te===void 0)return;Ae=2}const ke=X.drawRange,He=X.attributes.position;let be=ke.start*Ae,ot=(ke.start+ke.count)*Ae;ve!==null&&(be=Math.max(be,ve.start*Ae),ot=Math.min(ot,(ve.start+ve.count)*Ae)),Te!==null?(be=Math.max(be,0),ot=Math.min(ot,Te.count)):He!=null&&(be=Math.max(be,0),ot=Math.min(ot,He.count));const Rt=ot-be;if(Rt<0||Rt===1/0)return;ae.setup(j,W,ge,X,Te);let Tt,at=Be;if(Te!==null&&(Tt=Q.get(Te),at=Je,at.setIndex(Tt)),j.isMesh)W.wireframe===!0?(pe.setLineWidth(W.wireframeLinewidth*En()),at.setMode(I.LINES)):at.setMode(I.TRIANGLES);else if(j.isLine){let qt=W.linewidth;qt===void 0&&(qt=1),pe.setLineWidth(qt*En()),j.isLineSegments?at.setMode(I.LINES):j.isLineLoop?at.setMode(I.LINE_LOOP):at.setMode(I.LINE_STRIP)}else j.isPoints?at.setMode(I.POINTS):j.isSprite&&at.setMode(I.TRIANGLES);if(j.isBatchedMesh)if(Ye.get("WEBGL_multi_draw"))at.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const qt=j._multiDrawStarts,ye=j._multiDrawCounts,Tn=j._multiDrawCount,Ke=Te?Q.get(Te).bytesPerElement:1,Un=A.get(W).currentProgram.getUniforms();for(let li=0;li<Tn;li++)Un.setValue(I,"_gl_DrawID",li),at.render(qt[li]/Ke,ye[li])}else if(j.isInstancedMesh)at.renderInstances(be,Rt,j.count);else if(X.isInstancedBufferGeometry){const qt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ye=Math.min(X.instanceCount,qt);at.renderInstances(be,Rt,ye)}else at.render(be,Rt)};function ai(E,F,X){E.transparent===!0&&E.side===Ni&&E.forceSinglePass===!1?(E.side=Sn,E.needsUpdate=!0,qa(E,F,X),E.side=Dr,E.needsUpdate=!0,qa(E,F,X),E.side=Ni):qa(E,F,X)}this.compile=function(E,F,X=null){X===null&&(X=E),T=xe.get(X),T.init(F),_.push(T),X.traverseVisible(function(j){j.isLight&&j.layers.test(F.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),E!==X&&E.traverseVisible(function(j){j.isLight&&j.layers.test(F.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),T.setupLights();const W=new Set;return E.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const ve=j.material;if(ve)if(Array.isArray(ve))for(let Me=0;Me<ve.length;Me++){const ge=ve[Me];ai(ge,X,j),W.add(ge)}else ai(ve,X,j),W.add(ve)}),T=_.pop(),W},this.compileAsync=function(E,F,X=null){const W=this.compile(E,F,X);return new Promise(j=>{function ve(){if(W.forEach(function(Me){A.get(Me).currentProgram.isReady()&&W.delete(Me)}),W.size===0){j(E);return}setTimeout(ve,10)}Ye.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let _u=null;function hM(E){_u&&_u(E)}function Cm(){Or.stop()}function bm(){Or.start()}const Or=new sM;Or.setAnimationLoop(hM),typeof self<"u"&&Or.setContext(self),this.setAnimationLoop=function(E){_u=E,fe.setAnimationLoop(E),E===null?Or.stop():Or.start()},fe.addEventListener("sessionstart",Cm),fe.addEventListener("sessionend",bm),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;L!==null&&L.renderStart(E,F);const X=fe.enabled===!0&&fe.isPresenting===!0,W=C!==null&&(D===null||X)&&C.begin(P,D);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(F),F=fe.getCamera()),E.isScene===!0&&E.onBeforeRender(P,E,F,D),T=xe.get(E,_.length),T.init(F),T.state.textureUnits=S.getTextureUnits(),_.push(T),rt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ce.setFromProjectionMatrix(rt,gi,F.reversedDepth),Xe=this.localClippingEnabled,gt=Se.init(this.clippingPlanes,Xe),w=J.get(E,b.length),w.init(),b.push(w),fe.enabled===!0&&fe.isPresenting===!0){const Me=P.xr.getDepthSensingMesh();Me!==null&&yu(Me,F,-1/0,P.sortObjects)}yu(E,F,0,P.sortObjects),w.finish(),P.sortObjects===!0&&w.sort(q,he),xt=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,xt&&oe.addToRenderList(w,E),this.info.render.frame++,gt===!0&&Se.beginShadows();const j=T.state.shadowsArray;if(ue.render(j,E,F),gt===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&C.hasRenderPass())===!1){const Me=w.opaque,ge=w.transmissive;if(T.setupLights(),F.isArrayCamera){const Te=F.cameras;if(ge.length>0)for(let Ae=0,ke=Te.length;Ae<ke;Ae++){const He=Te[Ae];Pm(Me,ge,E,He)}xt&&oe.render(E);for(let Ae=0,ke=Te.length;Ae<ke;Ae++){const He=Te[Ae];Rm(w,E,He,He.viewport)}}else ge.length>0&&Pm(Me,ge,E,F),xt&&oe.render(E),Rm(w,E,F)}D!==null&&O===0&&(S.updateMultisampleRenderTarget(D),S.updateRenderTargetMipmap(D)),W&&C.end(P),E.isScene===!0&&E.onAfterRender(P,E,F),ae.resetDefaultState(),k=-1,B=null,_.pop(),_.length>0?(T=_[_.length-1],S.setTextureUnits(T.state.textureUnits),gt===!0&&Se.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,b.pop(),b.length>0?w=b[b.length-1]:w=null,L!==null&&L.renderEnd()};function yu(E,F,X,W){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ce.intersectsSprite(E)){W&&Ge.setFromMatrixPosition(E.matrixWorld).applyMatrix4(rt);const Me=se.update(E),ge=E.material;ge.visible&&w.push(E,Me,ge,X,Ge.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ce.intersectsObject(E))){const Me=se.update(E),ge=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ge.copy(E.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ge.copy(Me.boundingSphere.center)),Ge.applyMatrix4(E.matrixWorld).applyMatrix4(rt)),Array.isArray(ge)){const Te=Me.groups;for(let Ae=0,ke=Te.length;Ae<ke;Ae++){const He=Te[Ae],be=ge[He.materialIndex];be&&be.visible&&w.push(E,Me,be,X,Ge.z,He)}}else ge.visible&&w.push(E,Me,ge,X,Ge.z,null)}}const ve=E.children;for(let Me=0,ge=ve.length;Me<ge;Me++)yu(ve[Me],F,X,W)}function Rm(E,F,X,W){const{opaque:j,transmissive:ve,transparent:Me}=E;T.setupLightsView(X),gt===!0&&Se.setGlobalState(P.clippingPlanes,X),W&&pe.viewport(V.copy(W)),j.length>0&&$a(j,F,X),ve.length>0&&$a(ve,F,X),Me.length>0&&$a(Me,F,X),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Pm(E,F,X,W){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[W.id]===void 0){const be=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[W.id]=new Si(1,1,{generateMipmaps:!0,type:be?$i:bn,minFilter:ts,samples:Math.max(4,ct.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace})}const ve=T.state.transmissionRenderTarget[W.id],Me=W.viewport||V;ve.setSize(Me.z*P.transmissionResolutionScale,Me.w*P.transmissionResolutionScale);const ge=P.getRenderTarget(),Te=P.getActiveCubeFace(),Ae=P.getActiveMipmapLevel();P.setRenderTarget(ve),P.getClearColor(ee),ce=P.getClearAlpha(),ce<1&&P.setClearColor(16777215,.5),P.clear(),xt&&oe.render(X);const ke=P.toneMapping;P.toneMapping=yi;const He=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),T.setupLightsView(W),gt===!0&&Se.setGlobalState(P.clippingPlanes,W),$a(E,X,W),S.updateMultisampleRenderTarget(ve),S.updateRenderTargetMipmap(ve),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let ot=0,Rt=F.length;ot<Rt;ot++){const Tt=F[ot],{object:at,geometry:qt,material:ye,group:Tn}=Tt;if(ye.side===Ni&&at.layers.test(W.layers)){const Ke=ye.side;ye.side=Sn,ye.needsUpdate=!0,Dm(at,X,W,qt,ye,Tn),ye.side=Ke,ye.needsUpdate=!0,be=!0}}be===!0&&(S.updateMultisampleRenderTarget(ve),S.updateRenderTargetMipmap(ve))}P.setRenderTarget(ge,Te,Ae),P.setClearColor(ee,ce),He!==void 0&&(W.viewport=He),P.toneMapping=ke}function $a(E,F,X){const W=F.isScene===!0?F.overrideMaterial:null;for(let j=0,ve=E.length;j<ve;j++){const Me=E[j],{object:ge,geometry:Te,group:Ae}=Me;let ke=Me.material;ke.allowOverride===!0&&W!==null&&(ke=W),ge.layers.test(X.layers)&&Dm(ge,F,X,Te,ke,Ae)}}function Dm(E,F,X,W,j,ve){E.onBeforeRender(P,F,X,W,j,ve),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),j.onBeforeRender(P,F,X,W,E,ve),j.transparent===!0&&j.side===Ni&&j.forceSinglePass===!1?(j.side=Sn,j.needsUpdate=!0,P.renderBufferDirect(X,F,W,j,E,ve),j.side=Dr,j.needsUpdate=!0,P.renderBufferDirect(X,F,W,j,E,ve),j.side=Ni):P.renderBufferDirect(X,F,W,j,E,ve),E.onAfterRender(P,F,X,W,j,ve)}function qa(E,F,X){F.isScene!==!0&&(F=Ft);const W=A.get(E),j=T.state.lights,ve=T.state.shadowsArray,Me=j.state.version,ge=de.getParameters(E,j.state,ve,F,X,T.state.lightProbeGridArray),Te=de.getProgramCacheKey(ge);let Ae=W.programs;W.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,W.fog=F.fog;const ke=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;W.envMap=z.get(E.envMap||W.environment,ke),W.envMapRotation=W.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Ae===void 0&&(E.addEventListener("dispose",bt),Ae=new Map,W.programs=Ae);let He=Ae.get(Te);if(He!==void 0){if(W.currentProgram===He&&W.lightsStateVersion===Me)return Nm(E,ge),He}else ge.uniforms=de.getUniforms(E),L!==null&&E.isNodeMaterial&&L.build(E,X,ge),E.onBeforeCompile(ge,P),He=de.acquireProgram(ge,Te),Ae.set(Te,He),W.uniforms=ge.uniforms;const be=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(be.clippingPlanes=Se.uniform),Nm(E,ge),W.needsLights=vM(E),W.lightsStateVersion=Me,W.needsLights&&(be.ambientLightColor.value=j.state.ambient,be.lightProbe.value=j.state.probe,be.directionalLights.value=j.state.directional,be.directionalLightShadows.value=j.state.directionalShadow,be.spotLights.value=j.state.spot,be.spotLightShadows.value=j.state.spotShadow,be.rectAreaLights.value=j.state.rectArea,be.ltc_1.value=j.state.rectAreaLTC1,be.ltc_2.value=j.state.rectAreaLTC2,be.pointLights.value=j.state.point,be.pointLightShadows.value=j.state.pointShadow,be.hemisphereLights.value=j.state.hemi,be.directionalShadowMatrix.value=j.state.directionalShadowMatrix,be.spotLightMatrix.value=j.state.spotLightMatrix,be.spotLightMap.value=j.state.spotLightMap,be.pointShadowMatrix.value=j.state.pointShadowMatrix),W.lightProbeGrid=T.state.lightProbeGridArray.length>0,W.currentProgram=He,W.uniformsList=null,He}function Lm(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=sc.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Nm(E,F){const X=A.get(E);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function pM(E,F){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;M.setFromMatrixPosition(F.matrixWorld);for(let X=0,W=E.length;X<W;X++){const j=E[X];if(j.texture!==null&&j.boundingBox.containsPoint(M))return j}return null}function mM(E,F,X,W,j){F.isScene!==!0&&(F=Ft),S.resetTextureUnits();const ve=F.fog,Me=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?F.environment:null,ge=D===null?P.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:$e.workingColorSpace,Te=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ae=z.get(W.envMap||Me,Te),ke=W.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,He=!!X.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),be=!!X.morphAttributes.position,ot=!!X.morphAttributes.normal,Rt=!!X.morphAttributes.color;let Tt=yi;W.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Tt=P.toneMapping);const at=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,qt=at!==void 0?at.length:0,ye=A.get(W),Tn=T.state.lights;if(gt===!0&&(Xe===!0||E!==B)){const ut=E===B&&W.id===k;Se.setState(W,E,ut)}let Ke=!1;W.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==Tn.state.version||ye.outputColorSpace!==ge||j.isBatchedMesh&&ye.batching===!1||!j.isBatchedMesh&&ye.batching===!0||j.isBatchedMesh&&ye.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&ye.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&ye.instancing===!1||!j.isInstancedMesh&&ye.instancing===!0||j.isSkinnedMesh&&ye.skinning===!1||!j.isSkinnedMesh&&ye.skinning===!0||j.isInstancedMesh&&ye.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&ye.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&ye.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&ye.instancingMorph===!1&&j.morphTexture!==null||ye.envMap!==Ae||W.fog===!0&&ye.fog!==ve||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Se.numPlanes||ye.numIntersection!==Se.numIntersection)||ye.vertexAlphas!==ke||ye.vertexTangents!==He||ye.morphTargets!==be||ye.morphNormals!==ot||ye.morphColors!==Rt||ye.toneMapping!==Tt||ye.morphTargetsCount!==qt||!!ye.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Ke=!0):(Ke=!0,ye.__version=W.version);let Un=ye.currentProgram;Ke===!0&&(Un=qa(W,F,j),L&&W.isNodeMaterial&&L.onUpdateProgram(W,Un,ye));let li=!1,Zi=!1,xs=!1;const lt=Un.getUniforms(),Pt=ye.uniforms;if(pe.useProgram(Un.program)&&(li=!0,Zi=!0,xs=!0),W.id!==k&&(k=W.id,Zi=!0),ye.needsLights){const ut=pM(T.state.lightProbeGridArray,j);ye.lightProbeGrid!==ut&&(ye.lightProbeGrid=ut,Zi=!0)}if(li||B!==E){pe.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),lt.setValue(I,"projectionMatrix",E.projectionMatrix),lt.setValue(I,"viewMatrix",E.matrixWorldInverse);const Ji=lt.map.cameraPosition;Ji!==void 0&&Ji.setValue(I,ht.setFromMatrixPosition(E.matrixWorld)),ct.logarithmicDepthBuffer&&lt.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&lt.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),B!==E&&(B=E,Zi=!0,xs=!0)}if(ye.needsLights&&(Tn.state.directionalShadowMap.length>0&&lt.setValue(I,"directionalShadowMap",Tn.state.directionalShadowMap,S),Tn.state.spotShadowMap.length>0&&lt.setValue(I,"spotShadowMap",Tn.state.spotShadowMap,S),Tn.state.pointShadowMap.length>0&&lt.setValue(I,"pointShadowMap",Tn.state.pointShadowMap,S)),j.isSkinnedMesh){lt.setOptional(I,j,"bindMatrix"),lt.setOptional(I,j,"bindMatrixInverse");const ut=j.skeleton;ut&&(ut.boneTexture===null&&ut.computeBoneTexture(),lt.setValue(I,"boneTexture",ut.boneTexture,S))}j.isBatchedMesh&&(lt.setOptional(I,j,"batchingTexture"),lt.setValue(I,"batchingTexture",j._matricesTexture,S),lt.setOptional(I,j,"batchingIdTexture"),lt.setValue(I,"batchingIdTexture",j._indirectTexture,S),lt.setOptional(I,j,"batchingColorTexture"),j._colorsTexture!==null&&lt.setValue(I,"batchingColorTexture",j._colorsTexture,S));const Qi=X.morphAttributes;if((Qi.position!==void 0||Qi.normal!==void 0||Qi.color!==void 0)&&Ie.update(j,X,Un),(Zi||ye.receiveShadow!==j.receiveShadow)&&(ye.receiveShadow=j.receiveShadow,lt.setValue(I,"receiveShadow",j.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&F.environment!==null&&(Pt.envMapIntensity.value=F.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=kL()),Zi){if(lt.setValue(I,"toneMappingExposure",P.toneMappingExposure),ye.needsLights&&gM(Pt,xs),ve&&W.fog===!0&&$.refreshFogUniforms(Pt,ve),$.refreshMaterialUniforms(Pt,W,De,ze,T.state.transmissionRenderTarget[E.id]),ye.needsLights&&ye.lightProbeGrid){const ut=ye.lightProbeGrid;Pt.probesSH.value=ut.texture,Pt.probesMin.value.copy(ut.boundingBox.min),Pt.probesMax.value.copy(ut.boundingBox.max),Pt.probesResolution.value.copy(ut.resolution)}sc.upload(I,Lm(ye),Pt,S)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(sc.upload(I,Lm(ye),Pt,S),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&lt.setValue(I,"center",j.center),lt.setValue(I,"modelViewMatrix",j.modelViewMatrix),lt.setValue(I,"normalMatrix",j.normalMatrix),lt.setValue(I,"modelMatrix",j.matrixWorld),W.uniformsGroups!==void 0){const ut=W.uniformsGroups;for(let Ji=0,_s=ut.length;Ji<_s;Ji++){const Im=ut[Ji];Z.update(Im,Un),Z.bind(Im,Un)}}return Un}function gM(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function vM(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,F,X){const W=A.get(E);W.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),A.get(E.texture).__webglTexture=F,A.get(E.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:X,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){const X=A.get(E);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0};const xM=I.createFramebuffer();this.setRenderTarget=function(E,F=0,X=0){D=E,U=F,O=X;let W=null,j=!1,ve=!1;if(E){const ge=A.get(E);if(ge.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(I.FRAMEBUFFER,ge.__webglFramebuffer),V.copy(E.viewport),Y.copy(E.scissor),K=E.scissorTest,pe.viewport(V),pe.scissor(Y),pe.setScissorTest(K),k=-1;return}else if(ge.__webglFramebuffer===void 0)S.setupRenderTarget(E);else if(ge.__hasExternalTextures)S.rebindTextures(E,A.get(E.texture).__webglTexture,A.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ke=E.depthTexture;if(ge.__boundDepthTexture!==ke){if(ke!==null&&A.has(ke)&&(E.width!==ke.image.width||E.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(E)}}const Te=E.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ve=!0);const Ae=A.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ae[F])?W=Ae[F][X]:W=Ae[F],j=!0):E.samples>0&&S.useMultisampledRTT(E)===!1?W=A.get(E).__webglMultisampledFramebuffer:Array.isArray(Ae)?W=Ae[X]:W=Ae,V.copy(E.viewport),Y.copy(E.scissor),K=E.scissorTest}else V.copy(le).multiplyScalar(De).floor(),Y.copy(Re).multiplyScalar(De).floor(),K=Le;if(X!==0&&(W=xM),pe.bindFramebuffer(I.FRAMEBUFFER,W)&&pe.drawBuffers(E,W),pe.viewport(V),pe.scissor(Y),pe.setScissorTest(K),j){const ge=A.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,ge.__webglTexture,X)}else if(ve){const ge=F;for(let Te=0;Te<E.textures.length;Te++){const Ae=A.get(E.textures[Te]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Te,Ae.__webglTexture,X,ge)}}else if(E!==null&&X!==0){const ge=A.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ge.__webglTexture,X)}k=-1},this.readRenderTargetPixels=function(E,F,X,W,j,ve,Me,ge=0){if(!(E&&E.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=A.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){pe.bindFramebuffer(I.FRAMEBUFFER,Te);try{const Ae=E.textures[ge],ke=Ae.format,He=Ae.type;if(E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ge),!ct.textureFormatReadable(ke)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(He)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-W&&X>=0&&X<=E.height-j&&I.readPixels(F,X,W,j,N.convert(ke),N.convert(He),ve)}finally{const Ae=D!==null?A.get(D).__webglFramebuffer:null;pe.bindFramebuffer(I.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(E,F,X,W,j,ve,Me,ge=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=A.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te)if(F>=0&&F<=E.width-W&&X>=0&&X<=E.height-j){pe.bindFramebuffer(I.FRAMEBUFFER,Te);const Ae=E.textures[ge],ke=Ae.format,He=Ae.type;if(E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ge),!ct.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const be=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,be),I.bufferData(I.PIXEL_PACK_BUFFER,ve.byteLength,I.STREAM_READ),I.readPixels(F,X,W,j,N.convert(ke),N.convert(He),0);const ot=D!==null?A.get(D).__webglFramebuffer:null;pe.bindFramebuffer(I.FRAMEBUFFER,ot);const Rt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await nR(I,Rt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,be),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ve),I.deleteBuffer(be),I.deleteSync(Rt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,X=0){const W=Math.pow(2,-X),j=Math.floor(E.image.width*W),ve=Math.floor(E.image.height*W),Me=F!==null?F.x:0,ge=F!==null?F.y:0;S.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,Me,ge,j,ve),pe.unbindTexture()};const _M=I.createFramebuffer(),yM=I.createFramebuffer();this.copyTextureToTexture=function(E,F,X=null,W=null,j=0,ve=0){let Me,ge,Te,Ae,ke,He,be,ot,Rt;const Tt=E.isCompressedTexture?E.mipmaps[ve]:E.image;if(X!==null)Me=X.max.x-X.min.x,ge=X.max.y-X.min.y,Te=X.isBox3?X.max.z-X.min.z:1,Ae=X.min.x,ke=X.min.y,He=X.isBox3?X.min.z:0;else{const Pt=Math.pow(2,-j);Me=Math.floor(Tt.width*Pt),ge=Math.floor(Tt.height*Pt),E.isDataArrayTexture?Te=Tt.depth:E.isData3DTexture?Te=Math.floor(Tt.depth*Pt):Te=1,Ae=0,ke=0,He=0}W!==null?(be=W.x,ot=W.y,Rt=W.z):(be=0,ot=0,Rt=0);const at=N.convert(F.format),qt=N.convert(F.type);let ye;F.isData3DTexture?(S.setTexture3D(F,0),ye=I.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(S.setTexture2DArray(F,0),ye=I.TEXTURE_2D_ARRAY):(S.setTexture2D(F,0),ye=I.TEXTURE_2D),pe.activeTexture(I.TEXTURE0),pe.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),pe.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),pe.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const Tn=pe.getParameter(I.UNPACK_ROW_LENGTH),Ke=pe.getParameter(I.UNPACK_IMAGE_HEIGHT),Un=pe.getParameter(I.UNPACK_SKIP_PIXELS),li=pe.getParameter(I.UNPACK_SKIP_ROWS),Zi=pe.getParameter(I.UNPACK_SKIP_IMAGES);pe.pixelStorei(I.UNPACK_ROW_LENGTH,Tt.width),pe.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Tt.height),pe.pixelStorei(I.UNPACK_SKIP_PIXELS,Ae),pe.pixelStorei(I.UNPACK_SKIP_ROWS,ke),pe.pixelStorei(I.UNPACK_SKIP_IMAGES,He);const xs=E.isDataArrayTexture||E.isData3DTexture,lt=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){const Pt=A.get(E),Qi=A.get(F),ut=A.get(Pt.__renderTarget),Ji=A.get(Qi.__renderTarget);pe.bindFramebuffer(I.READ_FRAMEBUFFER,ut.__webglFramebuffer),pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ji.__webglFramebuffer);for(let _s=0;_s<Te;_s++)xs&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,A.get(E).__webglTexture,j,He+_s),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,A.get(F).__webglTexture,ve,Rt+_s)),I.blitFramebuffer(Ae,ke,Me,ge,be,ot,Me,ge,I.DEPTH_BUFFER_BIT,I.NEAREST);pe.bindFramebuffer(I.READ_FRAMEBUFFER,null),pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(j!==0||E.isRenderTargetTexture||A.has(E)){const Pt=A.get(E),Qi=A.get(F);pe.bindFramebuffer(I.READ_FRAMEBUFFER,_M),pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,yM);for(let ut=0;ut<Te;ut++)xs?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Pt.__webglTexture,j,He+ut):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Pt.__webglTexture,j),lt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Qi.__webglTexture,ve,Rt+ut):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Qi.__webglTexture,ve),j!==0?I.blitFramebuffer(Ae,ke,Me,ge,be,ot,Me,ge,I.COLOR_BUFFER_BIT,I.NEAREST):lt?I.copyTexSubImage3D(ye,ve,be,ot,Rt+ut,Ae,ke,Me,ge):I.copyTexSubImage2D(ye,ve,be,ot,Ae,ke,Me,ge);pe.bindFramebuffer(I.READ_FRAMEBUFFER,null),pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else lt?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(ye,ve,be,ot,Rt,Me,ge,Te,at,qt,Tt.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(ye,ve,be,ot,Rt,Me,ge,Te,at,Tt.data):I.texSubImage3D(ye,ve,be,ot,Rt,Me,ge,Te,at,qt,Tt):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ve,be,ot,Me,ge,at,qt,Tt.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ve,be,ot,Tt.width,Tt.height,at,Tt.data):I.texSubImage2D(I.TEXTURE_2D,ve,be,ot,Me,ge,at,qt,Tt);pe.pixelStorei(I.UNPACK_ROW_LENGTH,Tn),pe.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ke),pe.pixelStorei(I.UNPACK_SKIP_PIXELS,Un),pe.pixelStorei(I.UNPACK_SKIP_ROWS,li),pe.pixelStorei(I.UNPACK_SKIP_IMAGES,Zi),ve===0&&F.generateMipmaps&&I.generateMipmap(ye),pe.unbindTexture()},this.initRenderTarget=function(E){A.get(E).__webglFramebuffer===void 0&&S.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?S.setTextureCube(E,0):E.isData3DTexture?S.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?S.setTexture2DArray(E,0):S.setTexture2D(E,0),pe.unbindTexture()},this.resetState=function(){U=0,O=0,D=null,pe.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),n.unpackColorSpace=$e._getUnpackColorSpace()}}const jo=new H;function kn(t,e,n,i,r,s){const o=2*Math.PI*r/4,a=Math.max(s-2*r,0),l=Math.PI/4;jo.copy(e),jo[i]=0,jo.normalize();const c=.5*o/(o+a),u=1-jo.angleTo(t)/l;return Math.sign(jo[n])===1?u*c:a/(o+a)+c+c*(1-u)}class Sm extends wo{constructor(e=1,n=1,i=1,r=2,s=.1){const o=r*2+1;if(s=Math.min(e/2,n/2,i/2,s),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:n,depth:i,segments:r,radius:s},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new H,c=new H,u=new H(e,n,i).divideScalar(2).subScalar(s),d=this.attributes.position.array,f=this.attributes.normal.array,p=this.attributes.uv.array,g=d.length/6,y=new H,v=.5/o;for(let h=0,m=0;h<d.length;h+=3,m+=2)switch(l.fromArray(d,h),c.copy(l),c.x-=Math.sign(c.x)*v,c.y-=Math.sign(c.y)*v,c.z-=Math.sign(c.z)*v,c.normalize(),d[h+0]=u.x*Math.sign(l.x)+c.x*s,d[h+1]=u.y*Math.sign(l.y)+c.y*s,d[h+2]=u.z*Math.sign(l.z)+c.z*s,f[h+0]=c.x,f[h+1]=c.y,f[h+2]=c.z,Math.floor(h/g)){case 0:y.set(1,0,0),p[m+0]=kn(y,c,"z","y",s,i),p[m+1]=1-kn(y,c,"y","z",s,n);break;case 1:y.set(-1,0,0),p[m+0]=1-kn(y,c,"z","y",s,i),p[m+1]=1-kn(y,c,"y","z",s,n);break;case 2:y.set(0,1,0),p[m+0]=1-kn(y,c,"x","z",s,e),p[m+1]=kn(y,c,"z","x",s,i);break;case 3:y.set(0,-1,0),p[m+0]=1-kn(y,c,"x","z",s,e),p[m+1]=1-kn(y,c,"z","x",s,i);break;case 4:y.set(0,0,1),p[m+0]=1-kn(y,c,"x","y",s,e),p[m+1]=1-kn(y,c,"y","x",s,n);break;case 5:y.set(0,0,-1),p[m+0]=kn(y,c,"x","y",s,e),p[m+1]=1-kn(y,c,"y","x",s,n);break}}static fromJSON(e){return new Sm(e.width,e.height,e.depth,e.segments,e.radius)}}const VL=({isReplay:t=!1})=>{const e=re.useRef(null);return re.useEffect(()=>{if(!e.current)return;const n=new xR,i=()=>window.innerWidth,r=()=>window.innerWidth<768?400:window.innerHeight,s=new Gn(40,i()/r(),.1,1e3),o=new BL({canvas:e.current,alpha:!0,antialias:!0});o.setPixelRatio(window.innerWidth<768?Math.min(window.devicePixelRatio,1.5):Math.min(window.devicePixelRatio,2)),o.setSize(i(),r()),o.shadowMap.enabled=!0,o.shadowMap.type=PS,n.add(new VR(16777215,1.78));const a=new Ff(16777215,1.19);a.position.set(5.8,6.8,5.3),a.castShadow=!0,n.add(a);const l=new Ff(16777215,1.25);l.position.set(-3.5,2,-2),n.add(l);const c=new Ff(16746055,3.09);c.position.set(10,-1.3,6.1),n.add(c);const u=new cn(new Ya(100,100),new PR({opacity:.08}));u.rotation.x=-Math.PI/2,u.position.y=-1,u.receiveShadow=!0,n.add(u);function d(R){const L=new is,U=new If({color:R}),O=new is,D=new cn(new Gc(.5,32,16,0,Math.PI*2,0,Math.PI/2),U);D.position.y=.6,D.castShadow=!0;const k=new cn(new _m(.5,.5,1.2,32),U);k.position.y=0,k.castShadow=!0,O.add(D,k),O.position.y=-.3,L.add(O);const B=new is;B.position.y=.25,B.scale.set(.5,.5,.5),L.add(B);const V=new cn(new Gc(1,32,32),new If({transparent:!0,opacity:0})),Y=new If({color:16777215}),K=new cn(new Sm(.38,.38,.38,4,.12),Y),ee=K.clone();K.position.set(-.22,0,.88),ee.position.set(.22,0,.88),K.rotation.y=-.25,ee.rotation.y=.25,K.userData.targetScale=1,ee.userData.targetScale=1,B.add(V,K,ee);const ce={timer:0,interval:2+Math.random()*3,isBlinking:!1,duration:.08},Ue={type:"normal",timer:0,interval:4+Math.random()*4,active:!1};return{group:L,headGroup:B,eyeLeft:K,eyeRight:ee,blink:ce,emotion:Ue}}const f=d(16711680),p=d(9323693),g=d(3066993);n.add(f.group,p.group,g.group);const y=t?0:.4;f.group.position.set(2,-8,1.4),f.group.userData.baseY=-8,f.group.userData.targetBaseY=-.4,f.group.userData.delay=y,p.group.position.set(-1.8,-8,1.7),p.group.userData.baseY=-8,p.group.userData.targetBaseY=-.6,p.group.userData.delay=y+.2,g.group.position.set(-2.5,-8,1.3),g.group.userData.baseY=-8,g.group.userData.targetBaseY=.2,g.group.userData.delay=y+.4,f.group.scale.set(.5,.5,.5),p.group.scale.set(.4,.4,.4),g.group.scale.set(.5,.5,.5);const v={x:0,y:0},h=R=>{v.x=R.clientX/window.innerWidth*2-1,v.y=-(R.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",h);const m=()=>{const R=window.innerWidth<768,L=i(),U=r();s.aspect=L/U,s.updateProjectionMatrix(),o.setSize(L,U),s.position.z=R?8.5:6,f.group.position.x=R?1.3:2,p.group.position.x=R?-.5:-1.8,g.group.position.x=R?-1.6:-2.5;const O=R?.85:1;f.group.scale.set(.5*O,.5*O,.5*O),p.group.scale.set(.4*O,.4*O,.4*O),g.group.scale.set(.5*O,.5*O,.5*O)};m();function x(R,L){const U=R.emotion;if(U.timer+=L,!U.active&&U.timer>U.interval){U.timer=0,U.active=!0;const k=["suspicious","happy"];U.type=k[Math.floor(Math.random()*k.length)]}U.active&&U.timer>2&&(U.active=!1,U.timer=0,U.interval=4+Math.random()*5,U.type="normal");let O=1,D=1;U.active&&(U.type==="suspicious"&&(O=.3),U.type==="happy"&&(O=.2,D=.2)),R.eyeLeft.userData.targetScale=O,R.eyeRight.userData.targetScale=D}function M(R,L){const U=R.blink;if(U.timer+=L,!U.isBlinking&&U.timer>U.interval&&(U.isBlinking=!0,U.timer=0),!U.isBlinking)return;const O=U.timer/U.duration,D=1-Math.sin(Math.min(O,1)*Math.PI);R.eyeLeft.scale.y=R.eyeLeft.userData.targetScale*D,R.eyeRight.scale.y=R.eyeRight.userData.targetScale*D,O>=1&&(U.isBlinking=!1,U.interval=2+Math.random()*4)}const w=new H;function T(R){R.group.getWorldPosition(w),w.project(s);const L=v.x-w.x,U=v.y-w.y,O=L*.5,D=-U*.5;R.headGroup.rotation.y+=(O-R.headGroup.rotation.y)*.1,R.headGroup.rotation.x+=(D-R.headGroup.rotation.x)*.1}const b=new GR;let _;const C=()=>{_=requestAnimationFrame(C);const R=b.getDelta(),L=b.getElapsedTime(),U=window.innerWidth<768;s.position.y=U?0:-(window.scrollY/window.innerHeight)*5.5,[f,p,g].forEach((O,D)=>{T(O),x(O,R),O.eyeLeft.scale.y+=(O.eyeLeft.userData.targetScale-O.eyeLeft.scale.y)*.15,O.eyeRight.scale.y+=(O.eyeRight.userData.targetScale-O.eyeRight.scale.y)*.15,L>O.group.userData.delay&&(O.group.userData.baseY+=(O.group.userData.targetBaseY-O.group.userData.baseY)*(R*3.5)),O.group.position.y=O.group.userData.baseY,M(O,R)}),o.render(n,s)};C();const P=()=>{m()};return window.addEventListener("resize",P),()=>{window.removeEventListener("mousemove",h),window.removeEventListener("resize",P),cancelAnimationFrame(_),n.traverse(R=>{R instanceof cn&&(R.geometry.dispose(),Array.isArray(R.material)?R.material.forEach(L=>L.dispose()):R.material.dispose())}),o.dispose()}},[]),G.jsx("canvas",{className:"webgl outline-none pointer-events-none relative w-full h-[400px] -mt-64 mb-12 z-0 md:fixed md:top-0 md:left-0 md:w-full md:h-full md:-z-10 md:mt-0 md:mb-0",style:{background:"transparent"},ref:e})},zL=({isOpen:t,modalType:e,onClose:n})=>(re.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[t]),G.jsxs(G.Fragment,{children:[G.jsx("style",{children:`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}),G.jsx(La,{children:t&&G.jsx(We.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},className:"fixed inset-0 z-[200] flex items-center justify-center bg-[#2D2D2D]/20 backdrop-blur-sm p-4 sm:p-6",onClick:n,children:G.jsxs(We.div,{initial:{y:40,opacity:0,scale:.95},animate:{y:0,opacity:1,scale:1},exit:{y:20,opacity:0,scale:.95},transition:{type:"spring",stiffness:300,damping:25},className:"relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#F5F0EB] rounded-2xl shadow-[0_20px_40px_rgba(45,45,45,0.15)] p-8 md:p-12 text-[#2D2D2D] scrollbar-hide",onClick:i=>i.stopPropagation(),children:[G.jsx("button",{onClick:n,className:"absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full hover:bg-[#2D2D2D]/10 transition-colors focus:outline-none","aria-label":"Fermer les mentions légales",children:G.jsx(bS,{size:28,strokeWidth:2})}),G.jsx("h2",{className:"text-3xl md:text-4xl font-[600] tracking-[-0.02em] mb-8 [-webkit-text-stroke:0.5px_currentcolor]",children:e==="legal"?"Mentions Légales":"Politique de Confidentialité"}),G.jsxs("div",{className:"space-y-8 text-sm md:text-base leading-relaxed",children:[e==="legal"&&G.jsxs(G.Fragment,{children:[G.jsxs("section",{children:[G.jsx("h3",{className:"text-xl font-[600] tracking-[-0.02em] mb-2 [-webkit-text-stroke:0.5px_currentcolor]",children:"Éditeur"}),G.jsxs("p",{children:["Le site est édité par deux particuliers, Emmanuel Reau et Maurice Pang. Pour toute demande, contactez : ",G.jsx("a",{href:"mailto:contact@kakkoi-ai.com",className:"text-accent hover:underline font-semibold whitespace-nowrap",children:"contact@kakkoi-ai.com"}),"."]})]}),G.jsxs("section",{children:[G.jsx("h3",{className:"text-xl font-[600] tracking-[-0.02em] mb-2 [-webkit-text-stroke:0.5px_currentcolor]",children:"Hébergement"}),G.jsxs("p",{children:["Le site est hébergé par la société OVH SAS.",G.jsx("br",{}),"SIREN : 424 761 419.",G.jsx("br",{}),"Siège social : 2 rue Kellermann - 59100 Roubaix - France.",G.jsx("br",{}),"Site web : ",G.jsx("a",{href:"https://www.ovhcloud.com",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline font-semibold",children:"www.ovhcloud.com"}),"."]})]}),G.jsxs("section",{children:[G.jsx("h3",{className:"text-xl font-[600] tracking-[-0.02em] mb-2 [-webkit-text-stroke:0.5px_currentcolor]",children:"Propriété Intellectuelle"}),G.jsx("p",{children:"Tous les éléments présents sur ce site (logo, textes, personnages 3D, animations, code source) sont la propriété exclusive de leurs auteurs et sont protégés par les lois françaises et internationales sur la propriété intellectuelle. Toute reproduction, représentation, modification ou adaptation de tout ou partie des éléments du site est strictement interdite sans l'accord écrit préalable des éditeurs."})]}),G.jsxs("section",{className:"bg-[#2D2D2D]/5 p-5 md:p-6 rounded-xl border border-[#2D2D2D]/10",children:[G.jsx("h3",{className:"text-xl md:text-2xl font-[600] tracking-[-0.02em] mb-4 [-webkit-text-stroke:0.5px_currentcolor]",children:"Clause relative à l'Intelligence Artificielle"}),G.jsxs("div",{className:"space-y-4",children:[G.jsxs("div",{children:[G.jsx("h4",{className:"text-base font-[600] tracking-[-0.02em] mb-1 [-webkit-text-stroke:0.5px_currentcolor]",children:"Nature des contenus"}),G.jsx("p",{children:"L'utilisateur est informé que les interactions, les réponses et les comportements des avatars sur kakkoï AI sont générés par des systèmes d'Intelligence Artificielle basés sur des modèles de langage et de personnalité (OCEAN)."})]}),G.jsxs("div",{children:[G.jsx("h4",{className:"text-base font-[600] tracking-[-0.02em] mb-1 [-webkit-text-stroke:0.5px_currentcolor]",children:"Responsabilité"}),G.jsx("p",{children:`Bien que nous travaillions à rendre ces avatars "empathiques" et cohérents, les contenus générés ne reflètent pas nécessairement l'opinion des éditeurs. L'IA peut parfois produire des réponses imprévisibles ou inexactes.`})]}),G.jsxs("div",{children:[G.jsx("h4",{className:"text-base font-[600] tracking-[-0.02em] mb-1 [-webkit-text-stroke:0.5px_currentcolor]",children:"Usage Éthique"}),G.jsx("p",{children:"L'utilisateur s'engage à ne pas détourner les avatars pour générer des contenus haineux, illégaux ou diffamatoires."})]})]})]})]}),e==="privacy"&&G.jsxs(G.Fragment,{children:[G.jsxs("section",{children:[G.jsx("h3",{className:"text-xl font-[600] tracking-[-0.02em] mb-2 [-webkit-text-stroke:0.5px_currentcolor]",children:"Collecte"}),G.jsx("p",{children:"Nous collectons votre adresse e-mail uniquement pour vous informer du lancement de kakkoï AI."})]}),G.jsxs("section",{children:[G.jsx("h3",{className:"text-xl font-[600] tracking-[-0.02em] mb-2 [-webkit-text-stroke:0.5px_currentcolor]",children:"Engagement"}),G.jsx("p",{children:"Pas de revente de données, pas de cookies publicitaires."})]}),G.jsxs("section",{children:[G.jsx("h3",{className:"text-xl font-[600] tracking-[-0.02em] mb-2 [-webkit-text-stroke:0.5px_currentcolor]",children:"Vos droits"}),G.jsxs("p",{children:["Droit de suppression et d'accès sur simple demande à ",G.jsx("a",{href:"mailto:contact@kakkoi-ai.com",className:"text-accent hover:underline font-semibold whitespace-nowrap",children:"contact@kakkoi-ai.com"}),"."]})]})]})]})]})})})]})),Yv=["text-[#4E7D8B]","text-[#E63946]","text-[#83A598]","text-[#E8B878]","text-[#4A6FA5]"],HL={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.4}}},Gf={hidden:{opacity:0,y:40,scale:.8,rotate:-4},visible:{opacity:1,y:0,scale:1,rotate:0,transition:{type:"spring",stiffness:250,damping:10,mass:1.2}}},GL={hidden:{y:"-100%",opacity:1},visible:{y:0,opacity:1,transition:{type:"spring",stiffness:100,damping:20,staggerChildren:.05,delayChildren:.1}}},Bl={hidden:{opacity:0,y:20,scale:.9},visible:{opacity:1,y:0,scale:1,transition:{type:"spring",stiffness:300,damping:24}}};function WL(){const[t,e]=re.useState(!0),[n,i]=re.useState(!1),[r,s]=re.useState(0),[o,a]=re.useState(null),l=db();return re.useEffect(()=>{window.scrollTo(0,0)},[]),re.useEffect(()=>{n?document.body.style.overflow="hidden":document.body.style.overflow="unset";const c=()=>{window.innerWidth>=768&&i(!1)};return window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)},[n]),re.useEffect(()=>{t||l.start("visible")},[t,l]),G.jsxs("div",{className:"relative min-h-screen bg-[#FAF9F6] z-0 page text-primary selection:bg-accent/30 overflow-x-hidden",children:[G.jsx(Mb,{onFinished:()=>e(!1)}),!t&&G.jsxs(We.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1},children:[G.jsx("div",{className:"fixed inset-0 z-2 opacity-[0.035] mix-blend-multiply pointer-events-none",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`}}),G.jsxs("header",{className:"fixed top-0 left-0 w-full z-[100] bg-[#F5F0EB]/90 backdrop-blur-md border-b border-[#DED5CC]/20 transition-all duration-500 ease-in-out",children:[G.jsxs("div",{className:"w-full px-4 md:px-8 lg:px-12 h-20 flex items-center justify-between",children:[G.jsx("a",{onClick:c=>{c.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),l.set("hidden"),l.start("visible"),s(u=>u+1)},className:`relative cursor-pointer hover:scale-105 transition-all duration-300 flex items-center z-[110] ${n?"opacity-0 pointer-events-none":"opacity-100"}`,children:G.jsx("img",{src:RS("vertical6.png"),alt:"kakkoï AI",className:"logo-img"})}),G.jsxs("nav",{className:"hidden md:flex items-center gap-16 lg:gap-24",children:[G.jsx("a",{href:"#technologie",className:"ui-link text-lg font-bold tracking-wide",children:"Technologie"}),G.jsx("a",{href:"#vision",className:"ui-link text-lg font-bold tracking-wide",children:"Vision"}),G.jsx("a",{href:"#waitlist",className:"ui-link text-lg font-bold tracking-wide",children:"Accès"})]}),G.jsx(We.div,{className:"hidden md:flex items-center",children:G.jsx(We.a,{href:"#waitlist",className:"ui-btn-primary",whileHover:{scale:1.03},whileTap:{scale:.97},children:"EN SAVOIR PLUS"})}),G.jsx("button",{className:"md:hidden relative z-[110] p-3 -mr-3 text-primary focus:outline-none",onClick:()=>i(!n),children:G.jsx(La,{mode:"wait",children:G.jsx(We.div,{initial:{opacity:0,rotate:-90},animate:{opacity:1,rotate:0},exit:{opacity:0,rotate:90},transition:{duration:.15},children:n?G.jsx(bS,{size:28,strokeWidth:2.5}):G.jsx(xb,{size:28,strokeWidth:2.5})},n?"close":"menu")})})]}),G.jsx(La,{children:n&&G.jsx(We.div,{initial:"hidden",animate:"visible",exit:"hidden",variants:GL,className:"fixed top-0 left-0 w-full h-screen z-[100] bg-[#F5F0EB] shadow-2xl border-b border-border-subtle flex flex-col items-center justify-center pt-24 md:hidden",children:G.jsxs("nav",{className:"flex flex-col items-center gap-10 w-full px-6",children:[G.jsx(We.a,{variants:Bl,href:"#technologie",onClick:()=>i(!1),className:"text-4xl font-[600] tracking-[-0.02em] text-primary hover:text-[#4E7D8B] transition-colors [-webkit-text-stroke:0.5px_currentcolor]",children:"Technologie"}),G.jsx(We.a,{variants:Bl,href:"#vision",onClick:()=>i(!1),className:"text-4xl font-[600] tracking-[-0.02em] text-primary hover:text-[#E63946] transition-colors [-webkit-text-stroke:0.5px_currentcolor]",children:"Vision"}),G.jsx(We.a,{variants:Bl,href:"#waitlist",onClick:()=>i(!1),className:"text-4xl font-[600] tracking-[-0.02em] text-primary hover:text-[#E8B878] transition-colors [-webkit-text-stroke:0.5px_currentcolor]",children:"Accès"}),G.jsx(We.div,{variants:Bl,className:"mt-8 w-full max-w-xs",children:G.jsx(We.a,{href:"#waitlist",onClick:()=>i(!1),className:"ui-btn-primary w-full py-4 text-xl",whileHover:{scale:1.03},whileTap:{scale:.97},children:"EN SAVOIR PLUS"})})]})})})]}),G.jsxs("main",{className:"relative w-full",children:[G.jsxs(We.section,{id:"hero",variants:HL,initial:"hidden",animate:l,className:"relative z-[10] bg-transparent min-h-screen flex flex-col justify-center items-center text-center ui-container ui-section pt-[14vh] md:pt-[14vh] pb-16 md:pb-24",children:[G.jsx("h1",{className:"text-[3.25rem] md:text-[4.45rem] font-[600] tracking-[-0.02em] leading-[1.05] max-w-[18ch] mx-auto mb-4 [-webkit-text-stroke:0.5px_currentcolor] flex flex-wrap justify-center gap-x-[0.25em] gap-y-2",children:Oo.hero.title.split(" ").map((c,u)=>G.jsx(We.span,{variants:Gf,className:"inline-block origin-bottom",children:c},u))}),G.jsx(We.h2,{variants:Gf,className:"text-2xl md:text-3xl font-[600] tracking-[-0.02em] text-accent mb-8 [-webkit-text-stroke:0.5px_currentcolor]",children:Oo.hero.highlight}),G.jsx(We.p,{variants:Gf,className:"text-base md:text-lg leading-relaxed text-muted max-w-2xl mx-auto mb-10",children:Oo.hero.subtitle})]}),G.jsx("div",{className:"relative z-[1] pointer-events-none",children:G.jsx(VL,{isReplay:r>0},r)}),G.jsx("section",{id:"technologie",className:"relative z-[10] bg-transparent min-h-screen flex flex-col justify-center items-center scroll-mt-24 pb-[5vh] md:pb-[15vh]",children:G.jsxs("div",{className:"ui-container flex flex-col gap-8",children:[G.jsx(yb,{}),G.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:Oo.ocean.slice(0,3).map((c,u)=>G.jsxs(We.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},whileHover:{scale:1.03,y:-5},transition:{duration:.8,delay:u*.15,ease:[.16,1,.3,1]},className:"card-glass p-6 group flex flex-col text-left w-full h-full hover:border-[#4E7D8B]/40 hover:shadow-[0_20px_40px_rgba(78,125,139,0.2)]",children:[G.jsx("div",{className:`${Yv[u]} font-[600] tracking-[-0.02em] text-5xl xl:text-6xl mb-3 drop-shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 [-webkit-text-stroke:0.5px_currentcolor]`,children:c.id}),G.jsx("h3",{className:"title-3 mb-2",children:c.title}),G.jsx("p",{className:"text-muted text-xs leading-tight flex-grow",children:c.desc})]},c.id))}),G.jsx("div",{className:"flex flex-wrap justify-center gap-4",children:Oo.ocean.slice(3,5).map((c,u)=>G.jsxs(We.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},whileHover:{scale:1.03,y:-5},transition:{duration:.8,delay:(u+3)*.15,ease:[.16,1,.3,1]},className:"card-glass p-6 group flex flex-col text-left w-full md:w-[calc(33.333%-10.66px)] h-full hover:border-[#4E7D8B]/40 hover:shadow-[0_20px_40px_rgba(78,125,139,0.2)]",children:[G.jsx("div",{className:`${Yv[u+3]} font-[600] tracking-[-0.02em] text-5xl xl:text-6xl mb-3 drop-shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 [-webkit-text-stroke:0.5px_currentcolor]`,children:c.id}),G.jsx("h3",{className:"title-3 mb-2",children:c.title}),G.jsx("p",{className:"text-muted text-xs leading-tight flex-grow",children:c.desc})]},c.id))})]})}),G.jsxs("section",{id:"vision",className:"relative z-[10] bg-transparent min-h-screen flex flex-col justify-center items-center ui-container scroll-mt-24 pb-[5vh] md:pb-[15vh]",children:[G.jsx(We.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.8,ease:[.16,1,.3,1]},className:"ui-kicker-muted mb-8 text-center",children:"L'Âme du Projet"}),G.jsx(We.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.8,delay:.1,ease:[.16,1,.3,1]},className:"card-glass p-10 md:p-16 w-full md:w-[60%] text-center flex flex-col items-center",children:G.jsx("h2",{className:"text-3xl md:text-5xl font-[600] tracking-[-0.02em] text-title-primary mb-6 [-webkit-text-stroke:0.5px_currentcolor]",children:"Faire de vos avatars des personnages dotés d’une psychologie évolutive."})})]}),G.jsx("section",{id:"waitlist",className:"relative z-[10] bg-transparent min-h-screen flex flex-col justify-center items-center ui-container scroll-mt-24 pb-[5vh] md:pb-[15vh]",children:G.jsx(Sb,{})})]}),G.jsx("footer",{className:"py-12 border-t border-border-subtle",children:G.jsxs("div",{className:"ui-container flex flex-col items-center gap-8",children:[G.jsx("p",{className:"text-muted text-[10px] uppercase tracking-widest italic",children:'"Donner une personnalité à la machine."'}),G.jsxs("div",{className:"w-full flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted",children:[G.jsxs("div",{className:"flex items-center gap-1",children:[G.jsx("span",{className:"font-bold text-primary tracking-tight",children:"kakkoï AI"})," © ",new Date().getFullYear()]}),G.jsxs("div",{className:"flex items-center gap-6",children:[G.jsx("a",{href:"mailto:contact@kakkoi-ai.com",className:"text-primary hover:text-accent transition-colors",children:"contact@kakkoi-ai.com"}),G.jsx("a",{href:"#legal",onClick:c=>{c.preventDefault(),a("legal")},className:"py-2 md:py-0 hover:text-accent transition-colors cursor-pointer",children:"Mentions Légales"}),G.jsx("a",{href:"#privacy",onClick:c=>{c.preventDefault(),a("privacy")},className:"py-2 md:py-0 hover:text-accent transition-colors cursor-pointer",children:"Confidentialité"})]})]})]})}),G.jsx(zL,{isOpen:o!==null,modalType:o||"legal",onClose:()=>a(null)})]})]})}Wf.createRoot(document.getElementById("root")).render(G.jsx(Yh.StrictMode,{children:G.jsx(WL,{})}));
