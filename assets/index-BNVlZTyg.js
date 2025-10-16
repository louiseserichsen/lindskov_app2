(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Ld={exports:{}},Tl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y_;function qS(){if(Y_)return Tl;Y_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(a,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var m in l)m!=="key"&&(c[m]=l[m])}else c=l;return l=c.ref,{$$typeof:r,type:a,key:d,ref:l!==void 0?l:null,props:c}}return Tl.Fragment=e,Tl.jsx=i,Tl.jsxs=i,Tl}var Q_;function FS(){return Q_||(Q_=1,Ld.exports=qS()),Ld.exports}var H=FS(),Pd={exports:{}},ve={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X_;function GS(){if(X_)return ve;X_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),D=Symbol.iterator;function L(N){return N===null||typeof N!="object"?null:(N=D&&N[D]||N["@@iterator"],typeof N=="function"?N:null)}var K={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,G={};function ee(N,J,ae){this.props=N,this.context=J,this.refs=G,this.updater=ae||K}ee.prototype.isReactComponent={},ee.prototype.setState=function(N,J){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,J,"setState")},ee.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function ne(){}ne.prototype=ee.prototype;function re(N,J,ae){this.props=N,this.context=J,this.refs=G,this.updater=ae||K}var oe=re.prototype=new ne;oe.constructor=re,Z(oe,ee.prototype),oe.isPureReactComponent=!0;var me=Array.isArray;function Ee(){}var I={H:null,A:null,T:null,S:null},A=Object.prototype.hasOwnProperty;function w(N,J,ae){var le=ae.ref;return{$$typeof:r,type:N,key:J,ref:le!==void 0?le:null,props:ae}}function M(N,J){return w(N.type,J,N.props)}function O(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function V(N){var J={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ae){return J[ae]})}var R=/\/+/g;function We(N,J){return typeof N=="object"&&N!==null&&N.key!=null?V(""+N.key):J.toString(36)}function Dt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(Ee,Ee):(N.status="pending",N.then(function(J){N.status==="pending"&&(N.status="fulfilled",N.value=J)},function(J){N.status==="pending"&&(N.status="rejected",N.reason=J)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function Q(N,J,ae,le,_e){var Se=typeof N;(Se==="undefined"||Se==="boolean")&&(N=null);var Me=!1;if(N===null)Me=!0;else switch(Se){case"bigint":case"string":case"number":Me=!0;break;case"object":switch(N.$$typeof){case r:case e:Me=!0;break;case T:return Me=N._init,Q(Me(N._payload),J,ae,le,_e)}}if(Me)return _e=_e(N),Me=le===""?"."+We(N,0):le,me(_e)?(ae="",Me!=null&&(ae=Me.replace(R,"$&/")+"/"),Q(_e,J,ae,"",function(cs){return cs})):_e!=null&&(O(_e)&&(_e=M(_e,ae+(_e.key==null||N&&N.key===_e.key?"":(""+_e.key).replace(R,"$&/")+"/")+Me)),J.push(_e)),1;Me=0;var Ot=le===""?".":le+":";if(me(N))for(var et=0;et<N.length;et++)le=N[et],Se=Ot+We(le,et),Me+=Q(le,J,ae,Se,_e);else if(et=L(N),typeof et=="function")for(N=et.call(N),et=0;!(le=N.next()).done;)le=le.value,Se=Ot+We(le,et++),Me+=Q(le,J,ae,Se,_e);else if(Se==="object"){if(typeof N.then=="function")return Q(Dt(N),J,ae,le,_e);throw J=String(N),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Me}function se(N,J,ae){if(N==null)return N;var le=[],_e=0;return Q(N,le,"","",function(Se){return J.call(ae,Se,_e++)}),le}function pe(N){if(N._status===-1){var J=N._result;J=J(),J.then(function(ae){(N._status===0||N._status===-1)&&(N._status=1,N._result=ae)},function(ae){(N._status===0||N._status===-1)&&(N._status=2,N._result=ae)}),N._status===-1&&(N._status=0,N._result=J)}if(N._status===1)return N._result.default;throw N._result}var Ve=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},je={map:se,forEach:function(N,J,ae){se(N,function(){J.apply(this,arguments)},ae)},count:function(N){var J=0;return se(N,function(){J++}),J},toArray:function(N){return se(N,function(J){return J})||[]},only:function(N){if(!O(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return ve.Activity=S,ve.Children=je,ve.Component=ee,ve.Fragment=i,ve.Profiler=l,ve.PureComponent=re,ve.StrictMode=a,ve.Suspense=g,ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,ve.__COMPILER_RUNTIME={__proto__:null,c:function(N){return I.H.useMemoCache(N)}},ve.cache=function(N){return function(){return N.apply(null,arguments)}},ve.cacheSignal=function(){return null},ve.cloneElement=function(N,J,ae){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var le=Z({},N.props),_e=N.key;if(J!=null)for(Se in J.key!==void 0&&(_e=""+J.key),J)!A.call(J,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&J.ref===void 0||(le[Se]=J[Se]);var Se=arguments.length-2;if(Se===1)le.children=ae;else if(1<Se){for(var Me=Array(Se),Ot=0;Ot<Se;Ot++)Me[Ot]=arguments[Ot+2];le.children=Me}return w(N.type,_e,le)},ve.createContext=function(N){return N={$$typeof:d,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},ve.createElement=function(N,J,ae){var le,_e={},Se=null;if(J!=null)for(le in J.key!==void 0&&(Se=""+J.key),J)A.call(J,le)&&le!=="key"&&le!=="__self"&&le!=="__source"&&(_e[le]=J[le]);var Me=arguments.length-2;if(Me===1)_e.children=ae;else if(1<Me){for(var Ot=Array(Me),et=0;et<Me;et++)Ot[et]=arguments[et+2];_e.children=Ot}if(N&&N.defaultProps)for(le in Me=N.defaultProps,Me)_e[le]===void 0&&(_e[le]=Me[le]);return w(N,Se,_e)},ve.createRef=function(){return{current:null}},ve.forwardRef=function(N){return{$$typeof:m,render:N}},ve.isValidElement=O,ve.lazy=function(N){return{$$typeof:T,_payload:{_status:-1,_result:N},_init:pe}},ve.memo=function(N,J){return{$$typeof:y,type:N,compare:J===void 0?null:J}},ve.startTransition=function(N){var J=I.T,ae={};I.T=ae;try{var le=N(),_e=I.S;_e!==null&&_e(ae,le),typeof le=="object"&&le!==null&&typeof le.then=="function"&&le.then(Ee,Ve)}catch(Se){Ve(Se)}finally{J!==null&&ae.types!==null&&(J.types=ae.types),I.T=J}},ve.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},ve.use=function(N){return I.H.use(N)},ve.useActionState=function(N,J,ae){return I.H.useActionState(N,J,ae)},ve.useCallback=function(N,J){return I.H.useCallback(N,J)},ve.useContext=function(N){return I.H.useContext(N)},ve.useDebugValue=function(){},ve.useDeferredValue=function(N,J){return I.H.useDeferredValue(N,J)},ve.useEffect=function(N,J){return I.H.useEffect(N,J)},ve.useEffectEvent=function(N){return I.H.useEffectEvent(N)},ve.useId=function(){return I.H.useId()},ve.useImperativeHandle=function(N,J,ae){return I.H.useImperativeHandle(N,J,ae)},ve.useInsertionEffect=function(N,J){return I.H.useInsertionEffect(N,J)},ve.useLayoutEffect=function(N,J){return I.H.useLayoutEffect(N,J)},ve.useMemo=function(N,J){return I.H.useMemo(N,J)},ve.useOptimistic=function(N,J){return I.H.useOptimistic(N,J)},ve.useReducer=function(N,J,ae){return I.H.useReducer(N,J,ae)},ve.useRef=function(N){return I.H.useRef(N)},ve.useState=function(N){return I.H.useState(N)},ve.useSyncExternalStore=function(N,J,ae){return I.H.useSyncExternalStore(N,J,ae)},ve.useTransition=function(){return I.H.useTransition()},ve.version="19.2.0",ve}var $_;function Ip(){return $_||($_=1,Pd.exports=GS()),Pd.exports}var F=Ip(),zd={exports:{}},bl={},Bd={exports:{}},jd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J_;function KS(){return J_||(J_=1,(function(r){function e(Q,se){var pe=Q.length;Q.push(se);e:for(;0<pe;){var Ve=pe-1>>>1,je=Q[Ve];if(0<l(je,se))Q[Ve]=se,Q[pe]=je,pe=Ve;else break e}}function i(Q){return Q.length===0?null:Q[0]}function a(Q){if(Q.length===0)return null;var se=Q[0],pe=Q.pop();if(pe!==se){Q[0]=pe;e:for(var Ve=0,je=Q.length,N=je>>>1;Ve<N;){var J=2*(Ve+1)-1,ae=Q[J],le=J+1,_e=Q[le];if(0>l(ae,pe))le<je&&0>l(_e,ae)?(Q[Ve]=_e,Q[le]=pe,Ve=le):(Q[Ve]=ae,Q[J]=pe,Ve=J);else if(le<je&&0>l(_e,pe))Q[Ve]=_e,Q[le]=pe,Ve=le;else break e}}return se}function l(Q,se){var pe=Q.sortIndex-se.sortIndex;return pe!==0?pe:Q.id-se.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,m=d.now();r.unstable_now=function(){return d.now()-m}}var g=[],y=[],T=1,S=null,D=3,L=!1,K=!1,Z=!1,G=!1,ee=typeof setTimeout=="function"?setTimeout:null,ne=typeof clearTimeout=="function"?clearTimeout:null,re=typeof setImmediate<"u"?setImmediate:null;function oe(Q){for(var se=i(y);se!==null;){if(se.callback===null)a(y);else if(se.startTime<=Q)a(y),se.sortIndex=se.expirationTime,e(g,se);else break;se=i(y)}}function me(Q){if(Z=!1,oe(Q),!K)if(i(g)!==null)K=!0,Ee||(Ee=!0,V());else{var se=i(y);se!==null&&Dt(me,se.startTime-Q)}}var Ee=!1,I=-1,A=5,w=-1;function M(){return G?!0:!(r.unstable_now()-w<A)}function O(){if(G=!1,Ee){var Q=r.unstable_now();w=Q;var se=!0;try{e:{K=!1,Z&&(Z=!1,ne(I),I=-1),L=!0;var pe=D;try{t:{for(oe(Q),S=i(g);S!==null&&!(S.expirationTime>Q&&M());){var Ve=S.callback;if(typeof Ve=="function"){S.callback=null,D=S.priorityLevel;var je=Ve(S.expirationTime<=Q);if(Q=r.unstable_now(),typeof je=="function"){S.callback=je,oe(Q),se=!0;break t}S===i(g)&&a(g),oe(Q)}else a(g);S=i(g)}if(S!==null)se=!0;else{var N=i(y);N!==null&&Dt(me,N.startTime-Q),se=!1}}break e}finally{S=null,D=pe,L=!1}se=void 0}}finally{se?V():Ee=!1}}}var V;if(typeof re=="function")V=function(){re(O)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,We=R.port2;R.port1.onmessage=O,V=function(){We.postMessage(null)}}else V=function(){ee(O,0)};function Dt(Q,se){I=ee(function(){Q(r.unstable_now())},se)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Q){Q.callback=null},r.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<Q?Math.floor(1e3/Q):5},r.unstable_getCurrentPriorityLevel=function(){return D},r.unstable_next=function(Q){switch(D){case 1:case 2:case 3:var se=3;break;default:se=D}var pe=D;D=se;try{return Q()}finally{D=pe}},r.unstable_requestPaint=function(){G=!0},r.unstable_runWithPriority=function(Q,se){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var pe=D;D=Q;try{return se()}finally{D=pe}},r.unstable_scheduleCallback=function(Q,se,pe){var Ve=r.unstable_now();switch(typeof pe=="object"&&pe!==null?(pe=pe.delay,pe=typeof pe=="number"&&0<pe?Ve+pe:Ve):pe=Ve,Q){case 1:var je=-1;break;case 2:je=250;break;case 5:je=1073741823;break;case 4:je=1e4;break;default:je=5e3}return je=pe+je,Q={id:T++,callback:se,priorityLevel:Q,startTime:pe,expirationTime:je,sortIndex:-1},pe>Ve?(Q.sortIndex=pe,e(y,Q),i(g)===null&&Q===i(y)&&(Z?(ne(I),I=-1):Z=!0,Dt(me,pe-Ve))):(Q.sortIndex=je,e(g,Q),K||L||(K=!0,Ee||(Ee=!0,V()))),Q},r.unstable_shouldYield=M,r.unstable_wrapCallback=function(Q){var se=D;return function(){var pe=D;D=se;try{return Q.apply(this,arguments)}finally{D=pe}}}})(jd)),jd}var Z_;function YS(){return Z_||(Z_=1,Bd.exports=KS()),Bd.exports}var Hd={exports:{}},Xt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W_;function QS(){if(W_)return Xt;W_=1;var r=Ip();function e(g){var y="https://react.dev/errors/"+g;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)y+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+g+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(g,y,T){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:g,containerInfo:y,implementation:T}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,y){if(g==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Xt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Xt.createPortal=function(g,y){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(e(299));return c(g,y,null,T)},Xt.flushSync=function(g){var y=d.T,T=a.p;try{if(d.T=null,a.p=2,g)return g()}finally{d.T=y,a.p=T,a.d.f()}},Xt.preconnect=function(g,y){typeof g=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,a.d.C(g,y))},Xt.prefetchDNS=function(g){typeof g=="string"&&a.d.D(g)},Xt.preinit=function(g,y){if(typeof g=="string"&&y&&typeof y.as=="string"){var T=y.as,S=m(T,y.crossOrigin),D=typeof y.integrity=="string"?y.integrity:void 0,L=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;T==="style"?a.d.S(g,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:S,integrity:D,fetchPriority:L}):T==="script"&&a.d.X(g,{crossOrigin:S,integrity:D,fetchPriority:L,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Xt.preinitModule=function(g,y){if(typeof g=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var T=m(y.as,y.crossOrigin);a.d.M(g,{crossOrigin:T,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&a.d.M(g)},Xt.preload=function(g,y){if(typeof g=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var T=y.as,S=m(T,y.crossOrigin);a.d.L(g,T,{crossOrigin:S,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Xt.preloadModule=function(g,y){if(typeof g=="string")if(y){var T=m(y.as,y.crossOrigin);a.d.m(g,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:T,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else a.d.m(g)},Xt.requestFormReset=function(g){a.d.r(g)},Xt.unstable_batchedUpdates=function(g,y){return g(y)},Xt.useFormState=function(g,y,T){return d.H.useFormState(g,y,T)},Xt.useFormStatus=function(){return d.H.useHostTransitionStatus()},Xt.version="19.2.0",Xt}var ev;function XS(){if(ev)return Hd.exports;ev=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Hd.exports=QS(),Hd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tv;function $S(){if(tv)return bl;tv=1;var r=YS(),e=Ip(),i=XS();function a(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,s=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(s=n.return),t=n.return;while(t)}return n.tag===3?s:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function g(t){if(c(t)!==t)throw Error(a(188))}function y(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(a(188));return n!==t?null:t}for(var s=t,o=n;;){var h=s.return;if(h===null)break;var f=h.alternate;if(f===null){if(o=h.return,o!==null){s=o;continue}break}if(h.child===f.child){for(f=h.child;f;){if(f===s)return g(h),t;if(f===o)return g(h),n;f=f.sibling}throw Error(a(188))}if(s.return!==o.return)s=h,o=f;else{for(var _=!1,E=h.child;E;){if(E===s){_=!0,s=h,o=f;break}if(E===o){_=!0,o=h,s=f;break}E=E.sibling}if(!_){for(E=f.child;E;){if(E===s){_=!0,s=f,o=h;break}if(E===o){_=!0,o=f,s=h;break}E=E.sibling}if(!_)throw Error(a(189))}}if(s.alternate!==o)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:n}function T(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=T(t),n!==null)return n;t=t.sibling}return null}var S=Object.assign,D=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),K=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),ee=Symbol.for("react.profiler"),ne=Symbol.for("react.consumer"),re=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),me=Symbol.for("react.suspense"),Ee=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),M=Symbol.for("react.memo_cache_sentinel"),O=Symbol.iterator;function V(t){return t===null||typeof t!="object"?null:(t=O&&t[O]||t["@@iterator"],typeof t=="function"?t:null)}var R=Symbol.for("react.client.reference");function We(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===R?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Z:return"Fragment";case ee:return"Profiler";case G:return"StrictMode";case me:return"Suspense";case Ee:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case K:return"Portal";case re:return t.displayName||"Context";case ne:return(t._context.displayName||"Context")+".Consumer";case oe:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:We(t.type)||"Memo";case A:n=t._payload,t=t._init;try{return We(t(n))}catch{}}return null}var Dt=Array.isArray,Q=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pe={pending:!1,data:null,method:null,action:null},Ve=[],je=-1;function N(t){return{current:t}}function J(t){0>je||(t.current=Ve[je],Ve[je]=null,je--)}function ae(t,n){je++,Ve[je]=t.current,t.current=n}var le=N(null),_e=N(null),Se=N(null),Me=N(null);function Ot(t,n){switch(ae(Se,n),ae(_e,t),ae(le,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?g_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=g_(n),t=y_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}J(le),ae(le,t)}function et(){J(le),J(_e),J(Se)}function cs(t){t.memoizedState!==null&&ae(Me,t);var n=le.current,s=y_(n,t.type);n!==s&&(ae(_e,t),ae(le,s))}function aa(t){_e.current===t&&(J(le),J(_e)),Me.current===t&&(J(Me),yl._currentValue=pe)}var oa,la;function si(t){if(oa===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);oa=n&&n[1]||"",la=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+oa+t+la}var yo=!1;function hs(t,n){if(!t||yo)return"";yo=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var $=function(){throw Error()};if(Object.defineProperty($.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct($,[])}catch(q){var B=q}Reflect.construct(t,[],$)}else{try{$.call()}catch(q){B=q}t.call($.prototype)}}else{try{throw Error()}catch(q){B=q}($=t())&&typeof $.catch=="function"&&$.catch(function(){})}}catch(q){if(q&&B&&typeof q.stack=="string")return[q.stack,B.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),_=f[0],E=f[1];if(_&&E){var C=_.split(`
`),z=E.split(`
`);for(h=o=0;o<C.length&&!C[o].includes("DetermineComponentFrameRoot");)o++;for(;h<z.length&&!z[h].includes("DetermineComponentFrameRoot");)h++;if(o===C.length||h===z.length)for(o=C.length-1,h=z.length-1;1<=o&&0<=h&&C[o]!==z[h];)h--;for(;1<=o&&0<=h;o--,h--)if(C[o]!==z[h]){if(o!==1||h!==1)do if(o--,h--,0>h||C[o]!==z[h]){var Y=`
`+C[o].replace(" at new "," at ");return t.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",t.displayName)),Y}while(1<=o&&0<=h);break}}}finally{yo=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?si(s):""}function _o(t,n){switch(t.tag){case 26:case 27:case 5:return si(t.type);case 16:return si("Lazy");case 13:return t.child!==n&&n!==null?si("Suspense Fallback"):si("Suspense");case 19:return si("SuspenseList");case 0:case 15:return hs(t.type,!1);case 11:return hs(t.type.render,!1);case 1:return hs(t.type,!0);case 31:return si("Activity");default:return""}}function vo(t){try{var n="",s=null;do n+=_o(t,s),s=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var yt=Object.prototype.hasOwnProperty,xt=r.unstable_scheduleCallback,fr=r.unstable_cancelCallback,Ph=r.unstable_shouldYield,au=r.unstable_requestPaint,tn=r.unstable_now,fs=r.unstable_getCurrentPriorityLevel,Eo=r.unstable_ImmediatePriority,To=r.unstable_UserBlockingPriority,dr=r.unstable_NormalPriority,zh=r.unstable_LowPriority,ou=r.unstable_IdlePriority,lu=r.log,uu=r.unstable_setDisableYieldValue,zn=null,zt=null;function Rn(t){if(typeof lu=="function"&&uu(t),zt&&typeof zt.setStrictMode=="function")try{zt.setStrictMode(zn,t)}catch{}}var ft=Math.clz32?Math.clz32:hu,cu=Math.log,ua=Math.LN2;function hu(t){return t>>>=0,t===0?32:31-(cu(t)/ua|0)|0}var ai=256,ds=262144,_t=4194304;function oi(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function li(t,n,s){var o=t.pendingLanes;if(o===0)return 0;var h=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var E=o&134217727;return E!==0?(o=E&~f,o!==0?h=oi(o):(_&=E,_!==0?h=oi(_):s||(s=E&~t,s!==0&&(h=oi(s))))):(E=o&~f,E!==0?h=oi(E):_!==0?h=oi(_):s||(s=o&~t,s!==0&&(h=oi(s)))),h===0?0:n!==0&&n!==h&&(n&f)===0&&(f=h&-h,s=n&-n,f>=s||f===32&&(s&4194048)!==0)?n:h}function Bn(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Bh(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fu(){var t=_t;return _t<<=1,(_t&62914560)===0&&(_t=4194304),t}function ui(t){for(var n=[],s=0;31>s;s++)n.push(t);return n}function ps(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function jh(t,n,s,o,h,f){var _=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var E=t.entanglements,C=t.expirationTimes,z=t.hiddenUpdates;for(s=_&~s;0<s;){var Y=31-ft(s),$=1<<Y;E[Y]=0,C[Y]=-1;var B=z[Y];if(B!==null)for(z[Y]=null,Y=0;Y<B.length;Y++){var q=B[Y];q!==null&&(q.lane&=-536870913)}s&=~$}o!==0&&ms(t,o,0),f!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function ms(t,n,s){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-ft(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|s&261930}function bo(t,n){var s=t.entangledLanes|=n;for(t=t.entanglements;s;){var o=31-ft(s),h=1<<o;h&n|t[o]&n&&(t[o]|=n),s&=~h}}function So(t,n){var s=n&-n;return s=(s&42)!==0?1:gs(s),(s&(t.suspendedLanes|n))!==0?0:s}function gs(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ui(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function du(){var t=se.p;return t!==0?t:(t=window.event,t===void 0?32:B_(t.type))}function jn(t,n){var s=se.p;try{return se.p=t,n()}finally{se.p=s}}var Hn=Math.random().toString(36).slice(2),vt="__reactFiber$"+Hn,Mt="__reactProps$"+Hn,ci="__reactContainer$"+Hn,ca="__reactEvents$"+Hn,Hh="__reactListeners$"+Hn,pu="__reactHandles$"+Hn,mu="__reactResources$"+Hn,hi="__reactMarker$"+Hn;function ha(t){delete t[vt],delete t[Mt],delete t[ca],delete t[Hh],delete t[pu]}function fi(t){var n=t[vt];if(n)return n;for(var s=t.parentNode;s;){if(n=s[ci]||s[vt]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(t=A_(t);t!==null;){if(s=t[vt])return s;t=A_(t)}return n}t=s,s=t.parentNode}return null}function Cn(t){if(t=t[vt]||t[ci]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function mn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(a(33))}function di(t){var n=t[mu];return n||(n=t[mu]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Et(t){t[hi]=!0}var Ao=new Set,wo={};function pi(t,n){mi(t,n),mi(t+"Capture",n)}function mi(t,n){for(wo[t]=n,t=0;t<n.length;t++)Ao.add(n[t])}var Ro=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Co={},Io={};function gu(t){return yt.call(Io,t)?!0:yt.call(Co,t)?!1:Ro.test(t)?Io[t]=!0:(Co[t]=!0,!1)}function fa(t,n,s){if(gu(n))if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+s)}}function gn(t,n,s){if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+s)}}function Tt(t,n,s,o){if(o===null)t.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(n,s,""+o)}}function kt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function pr(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Do(t,n,s){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return h.call(this)},set:function(_){s=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return s},setValue:function(_){s=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function He(t){if(!t._valueTracker){var n=pr(t)?"checked":"value";t._valueTracker=Do(t,n,""+t[n])}}function ys(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var s=n.getValue(),o="";return t&&(o=pr(t)?t.checked?"true":"false":t.value),t=o,t!==s?(n.setValue(t),!0):!1}function gi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var _s=/[\n"\\]/g;function an(t){return t.replace(_s,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function da(t,n,s,o,h,f,_,E){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+kt(n)):t.value!==""+kt(n)&&(t.value=""+kt(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?Oo(t,_,kt(n)):s!=null?Oo(t,_,kt(s)):o!=null&&t.removeAttribute("value"),h==null&&f!=null&&(t.defaultChecked=!!f),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+kt(E):t.removeAttribute("name")}function yu(t,n,s,o,h,f,_,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||s!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){He(t);return}s=s!=null?""+kt(s):"",n=n!=null?""+kt(n):s,E||n===t.value||(t.value=n),t.defaultValue=n}o=o??h,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=E?t.checked:!!o,t.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),He(t)}function Oo(t,n,s){n==="number"&&gi(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function mr(t,n,s,o){if(t=t.options,n){n={};for(var h=0;h<s.length;h++)n["$"+s[h]]=!0;for(s=0;s<t.length;s++)h=n.hasOwnProperty("$"+t[s].value),t[s].selected!==h&&(t[s].selected=h),h&&o&&(t[s].defaultSelected=!0)}else{for(s=""+kt(s),n=null,h=0;h<t.length;h++){if(t[h].value===s){t[h].selected=!0,o&&(t[h].defaultSelected=!0);return}n!==null||t[h].disabled||(n=t[h])}n!==null&&(n.selected=!0)}}function _u(t,n,s){if(n!=null&&(n=""+kt(n),n!==t.value&&(t.value=n),s==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=s!=null?""+kt(s):""}function gr(t,n,s,o){if(n==null){if(o!=null){if(s!=null)throw Error(a(92));if(Dt(o)){if(1<o.length)throw Error(a(93));o=o[0]}s=o}s==null&&(s=""),n=s}s=kt(n),t.defaultValue=s,o=t.textContent,o===s&&o!==""&&o!==null&&(t.value=o),He(t)}function on(t,n){if(n){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=n;return}}t.textContent=n}var vu=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xo(t,n,s){var o=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,s):typeof s!="number"||s===0||vu.has(n)?n==="float"?t.cssFloat=s:t[n]=(""+s).trim():t[n]=s+"px"}function No(t,n,s){if(n!=null&&typeof n!="object")throw Error(a(62));if(t=t.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var h in n)o=n[h],n.hasOwnProperty(h)&&s[h]!==o&&xo(t,h,o)}else for(var f in n)n.hasOwnProperty(f)&&xo(t,f,n[f])}function pa(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Eu=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),yr=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ma(t){return yr.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function qn(){}var Mo=null;function In(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _r=null,yi=null;function vs(t){var n=Cn(t);if(n&&(t=n.stateNode)){var s=t[Mt]||null;e:switch(t=n.stateNode,n.type){case"input":if(da(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+an(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var o=s[n];if(o!==t&&o.form===t.form){var h=o[Mt]||null;if(!h)throw Error(a(90));da(o,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(n=0;n<s.length;n++)o=s[n],o.form===t.form&&ys(o)}break e;case"textarea":_u(t,s.value,s.defaultValue);break e;case"select":n=s.value,n!=null&&mr(t,!!s.multiple,n,!1)}}}var ga=!1;function vr(t,n,s){if(ga)return t(n,s);ga=!0;try{var o=t(n);return o}finally{if(ga=!1,(_r!==null||yi!==null)&&(dc(),_r&&(n=_r,t=yi,yi=_r=null,vs(n),t)))for(n=0;n<t.length;n++)vs(t[n])}}function Fn(t,n){var s=t.stateNode;if(s===null)return null;var o=s[Mt]||null;if(o===null)return null;s=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,n,typeof s));return s}var Dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Es=!1;if(Dn)try{var Ge={};Object.defineProperty(Ge,"passive",{get:function(){Es=!0}}),window.addEventListener("test",Ge,Ge),window.removeEventListener("test",Ge,Ge)}catch{Es=!1}var _i=null,ko=null,Ts=null;function Vo(){if(Ts)return Ts;var t,n=ko,s=n.length,o,h="value"in _i?_i.value:_i.textContent,f=h.length;for(t=0;t<s&&n[t]===h[t];t++);var _=s-t;for(o=1;o<=_&&n[s-o]===h[f-o];o++);return Ts=h.slice(t,1<o?1-o:void 0)}function bs(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Li(){return!0}function Gn(){return!1}function Bt(t){function n(s,o,h,f,_){this._reactName=s,this._targetInst=h,this.type=o,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(s=t[E],this[E]=s?s(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Li:Gn,this.isPropagationStopped=Gn,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Li)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Li)},persist:function(){},isPersistent:Li}),n}var Pi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vi=Bt(Pi),Er=S({},Pi,{view:0,detail:0}),Uo=Bt(Er),Tr,ya,Ei,_a=S({},Er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:br,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ei&&(Ei&&t.type==="mousemove"?(Tr=t.screenX-Ei.screenX,ya=t.screenY-Ei.screenY):ya=Tr=0,Ei=t),Tr)},movementY:function(t){return"movementY"in t?t.movementY:ya}}),Lo=Bt(_a),Ss=S({},_a,{dataTransfer:0}),Tu=Bt(Ss),bu=S({},Er,{relatedTarget:0}),As=Bt(bu),Po=S({},Pi,{animationName:0,elapsedTime:0,pseudoElement:0}),Su=Bt(Po),va=S({},Pi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Au=Bt(va),wu=S({},Pi,{data:0}),Ti=Bt(wu),Ru={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Iu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Du(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Iu[t])?!!n[t]:!1}function br(){return Du}var nn=S({},Er,{key:function(t){if(t.key){var n=Ru[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=bs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Cu[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:br,charCode:function(t){return t.type==="keypress"?bs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ou=Bt(nn),xu=S({},_a,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zi=Bt(xu),u=S({},Er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:br}),p=Bt(u),v=S({},Pi,{propertyName:0,elapsedTime:0,pseudoElement:0}),b=Bt(v),U=S({},_a,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),j=Bt(U),ie=S({},Pi,{newState:0,oldState:0}),Te=Bt(ie),dt=[9,13,27,32],Pe=Dn&&"CompositionEvent"in window,tt=null;Dn&&"documentMode"in document&&(tt=document.documentMode);var On=Dn&&"TextEvent"in window&&!tt,bi=Dn&&(!Pe||tt&&8<tt&&11>=tt),Kn=" ",Yn=!1;function ws(t,n){switch(t){case"keyup":return dt.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ea(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ta=!1;function db(t,n){switch(t){case"compositionend":return Ea(n);case"keypress":return n.which!==32?null:(Yn=!0,Kn);case"textInput":return t=n.data,t===Kn&&Yn?null:t;default:return null}}function pb(t,n){if(Ta)return t==="compositionend"||!Pe&&ws(t,n)?(t=Vo(),Ts=ko=_i=null,Ta=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return bi&&n.locale!=="ko"?null:n.data;default:return null}}var mb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!mb[t.type]:n==="textarea"}function Im(t,n,s,o){_r?yi?yi.push(o):yi=[o]:_r=o,n=Ec(n,"onChange"),0<n.length&&(s=new vi("onChange","change",null,s,o),t.push({event:s,listeners:n}))}var zo=null,Bo=null;function gb(t){c_(t,0)}function Nu(t){var n=mn(t);if(ys(n))return t}function Dm(t,n){if(t==="change")return n}var Om=!1;if(Dn){var qh;if(Dn){var Fh="oninput"in document;if(!Fh){var xm=document.createElement("div");xm.setAttribute("oninput","return;"),Fh=typeof xm.oninput=="function"}qh=Fh}else qh=!1;Om=qh&&(!document.documentMode||9<document.documentMode)}function Nm(){zo&&(zo.detachEvent("onpropertychange",Mm),Bo=zo=null)}function Mm(t){if(t.propertyName==="value"&&Nu(Bo)){var n=[];Im(n,Bo,t,In(t)),vr(gb,n)}}function yb(t,n,s){t==="focusin"?(Nm(),zo=n,Bo=s,zo.attachEvent("onpropertychange",Mm)):t==="focusout"&&Nm()}function _b(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Nu(Bo)}function vb(t,n){if(t==="click")return Nu(n)}function Eb(t,n){if(t==="input"||t==="change")return Nu(n)}function Tb(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var yn=typeof Object.is=="function"?Object.is:Tb;function jo(t,n){if(yn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var s=Object.keys(t),o=Object.keys(n);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var h=s[o];if(!yt.call(n,h)||!yn(t[h],n[h]))return!1}return!0}function km(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vm(t,n){var s=km(t);t=0;for(var o;s;){if(s.nodeType===3){if(o=t+s.textContent.length,t<=n&&o>=n)return{node:s,offset:n-t};t=o}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=km(s)}}function Um(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Um(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Lm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=gi(t.document);n instanceof t.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)t=n.contentWindow;else break;n=gi(t.document)}return n}function Gh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var bb=Dn&&"documentMode"in document&&11>=document.documentMode,ba=null,Kh=null,Ho=null,Yh=!1;function Pm(t,n,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Yh||ba==null||ba!==gi(o)||(o=ba,"selectionStart"in o&&Gh(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ho&&jo(Ho,o)||(Ho=o,o=Ec(Kh,"onSelect"),0<o.length&&(n=new vi("onSelect","select",null,n,s),t.push({event:n,listeners:o}),n.target=ba)))}function Rs(t,n){var s={};return s[t.toLowerCase()]=n.toLowerCase(),s["Webkit"+t]="webkit"+n,s["Moz"+t]="moz"+n,s}var Sa={animationend:Rs("Animation","AnimationEnd"),animationiteration:Rs("Animation","AnimationIteration"),animationstart:Rs("Animation","AnimationStart"),transitionrun:Rs("Transition","TransitionRun"),transitionstart:Rs("Transition","TransitionStart"),transitioncancel:Rs("Transition","TransitionCancel"),transitionend:Rs("Transition","TransitionEnd")},Qh={},zm={};Dn&&(zm=document.createElement("div").style,"AnimationEvent"in window||(delete Sa.animationend.animation,delete Sa.animationiteration.animation,delete Sa.animationstart.animation),"TransitionEvent"in window||delete Sa.transitionend.transition);function Cs(t){if(Qh[t])return Qh[t];if(!Sa[t])return t;var n=Sa[t],s;for(s in n)if(n.hasOwnProperty(s)&&s in zm)return Qh[t]=n[s];return t}var Bm=Cs("animationend"),jm=Cs("animationiteration"),Hm=Cs("animationstart"),Sb=Cs("transitionrun"),Ab=Cs("transitionstart"),wb=Cs("transitioncancel"),qm=Cs("transitionend"),Fm=new Map,Xh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xh.push("scrollEnd");function Qn(t,n){Fm.set(t,n),pi(n,[t])}var Mu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},xn=[],Aa=0,$h=0;function ku(){for(var t=Aa,n=$h=Aa=0;n<t;){var s=xn[n];xn[n++]=null;var o=xn[n];xn[n++]=null;var h=xn[n];xn[n++]=null;var f=xn[n];if(xn[n++]=null,o!==null&&h!==null){var _=o.pending;_===null?h.next=h:(h.next=_.next,_.next=h),o.pending=h}f!==0&&Gm(s,h,f)}}function Vu(t,n,s,o){xn[Aa++]=t,xn[Aa++]=n,xn[Aa++]=s,xn[Aa++]=o,$h|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Jh(t,n,s,o){return Vu(t,n,s,o),Uu(t)}function Is(t,n){return Vu(t,null,null,n),Uu(t)}function Gm(t,n,s){t.lanes|=s;var o=t.alternate;o!==null&&(o.lanes|=s);for(var h=!1,f=t.return;f!==null;)f.childLanes|=s,o=f.alternate,o!==null&&(o.childLanes|=s),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(h=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,h&&n!==null&&(h=31-ft(s),t=f.hiddenUpdates,o=t[h],o===null?t[h]=[n]:o.push(n),n.lane=s|536870912),f):null}function Uu(t){if(50<cl)throw cl=0,od=null,Error(a(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var wa={};function Rb(t,n,s,o){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(t,n,s,o){return new Rb(t,n,s,o)}function Zh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Bi(t,n){var s=t.alternate;return s===null?(s=_n(t.tag,n,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=n,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,n=t.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function Km(t,n){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,n=s.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Lu(t,n,s,o,h,f){var _=0;if(o=t,typeof t=="function")Zh(t)&&(_=1);else if(typeof t=="string")_=xS(t,s,le.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case w:return t=_n(31,s,n,h),t.elementType=w,t.lanes=f,t;case Z:return Ds(s.children,h,f,n);case G:_=8,h|=24;break;case ee:return t=_n(12,s,n,h|2),t.elementType=ee,t.lanes=f,t;case me:return t=_n(13,s,n,h),t.elementType=me,t.lanes=f,t;case Ee:return t=_n(19,s,n,h),t.elementType=Ee,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case re:_=10;break e;case ne:_=9;break e;case oe:_=11;break e;case I:_=14;break e;case A:_=16,o=null;break e}_=29,s=Error(a(130,t===null?"null":typeof t,"")),o=null}return n=_n(_,s,n,h),n.elementType=t,n.type=o,n.lanes=f,n}function Ds(t,n,s,o){return t=_n(7,t,o,n),t.lanes=s,t}function Wh(t,n,s){return t=_n(6,t,null,n),t.lanes=s,t}function Ym(t){var n=_n(18,null,null,0);return n.stateNode=t,n}function ef(t,n,s){return n=_n(4,t.children!==null?t.children:[],t.key,n),n.lanes=s,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Qm=new WeakMap;function Nn(t,n){if(typeof t=="object"&&t!==null){var s=Qm.get(t);return s!==void 0?s:(n={value:t,source:n,stack:vo(n)},Qm.set(t,n),n)}return{value:t,source:n,stack:vo(n)}}var Ra=[],Ca=0,Pu=null,qo=0,Mn=[],kn=0,Sr=null,Si=1,Ai="";function ji(t,n){Ra[Ca++]=qo,Ra[Ca++]=Pu,Pu=t,qo=n}function Xm(t,n,s){Mn[kn++]=Si,Mn[kn++]=Ai,Mn[kn++]=Sr,Sr=t;var o=Si;t=Ai;var h=32-ft(o)-1;o&=~(1<<h),s+=1;var f=32-ft(n)+h;if(30<f){var _=h-h%5;f=(o&(1<<_)-1).toString(32),o>>=_,h-=_,Si=1<<32-ft(n)+h|s<<h|o,Ai=f+t}else Si=1<<f|s<<h|o,Ai=t}function tf(t){t.return!==null&&(ji(t,1),Xm(t,1,0))}function nf(t){for(;t===Pu;)Pu=Ra[--Ca],Ra[Ca]=null,qo=Ra[--Ca],Ra[Ca]=null;for(;t===Sr;)Sr=Mn[--kn],Mn[kn]=null,Ai=Mn[--kn],Mn[kn]=null,Si=Mn[--kn],Mn[kn]=null}function $m(t,n){Mn[kn++]=Si,Mn[kn++]=Ai,Mn[kn++]=Sr,Si=n.id,Ai=n.overflow,Sr=t}var jt=null,Je=null,Ne=!1,Ar=null,Vn=!1,rf=Error(a(519));function wr(t){var n=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Fo(Nn(n,t)),rf}function Jm(t){var n=t.stateNode,s=t.type,o=t.memoizedProps;switch(n[vt]=t,n[Mt]=o,s){case"dialog":Ie("cancel",n),Ie("close",n);break;case"iframe":case"object":case"embed":Ie("load",n);break;case"video":case"audio":for(s=0;s<fl.length;s++)Ie(fl[s],n);break;case"source":Ie("error",n);break;case"img":case"image":case"link":Ie("error",n),Ie("load",n);break;case"details":Ie("toggle",n);break;case"input":Ie("invalid",n),yu(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ie("invalid",n);break;case"textarea":Ie("invalid",n),gr(n,o.value,o.defaultValue,o.children)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||o.suppressHydrationWarning===!0||p_(n.textContent,s)?(o.popover!=null&&(Ie("beforetoggle",n),Ie("toggle",n)),o.onScroll!=null&&Ie("scroll",n),o.onScrollEnd!=null&&Ie("scrollend",n),o.onClick!=null&&(n.onclick=qn),n=!0):n=!1,n||wr(t,!0)}function Zm(t){for(jt=t.return;jt;)switch(jt.tag){case 5:case 31:case 13:Vn=!1;return;case 27:case 3:Vn=!0;return;default:jt=jt.return}}function Ia(t){if(t!==jt)return!1;if(!Ne)return Zm(t),Ne=!0,!1;var n=t.tag,s;if((s=n!==3&&n!==27)&&((s=n===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||bd(t.type,t.memoizedProps)),s=!s),s&&Je&&wr(t),Zm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Je=S_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Je=S_(t)}else n===27?(n=Je,zr(t.type)?(t=Cd,Cd=null,Je=t):Je=n):Je=jt?Ln(t.stateNode.nextSibling):null;return!0}function Os(){Je=jt=null,Ne=!1}function sf(){var t=Ar;return t!==null&&(hn===null?hn=t:hn.push.apply(hn,t),Ar=null),t}function Fo(t){Ar===null?Ar=[t]:Ar.push(t)}var af=N(null),xs=null,Hi=null;function Rr(t,n,s){ae(af,n._currentValue),n._currentValue=s}function qi(t){t._currentValue=af.current,J(af)}function of(t,n,s){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===s)break;t=t.return}}function lf(t,n,s,o){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var f=h.dependencies;if(f!==null){var _=h.child;f=f.firstContext;e:for(;f!==null;){var E=f;f=h;for(var C=0;C<n.length;C++)if(E.context===n[C]){f.lanes|=s,E=f.alternate,E!==null&&(E.lanes|=s),of(f.return,s,t),o||(_=null);break e}f=E.next}}else if(h.tag===18){if(_=h.return,_===null)throw Error(a(341));_.lanes|=s,f=_.alternate,f!==null&&(f.lanes|=s),of(_,s,t),_=null}else _=h.child;if(_!==null)_.return=h;else for(_=h;_!==null;){if(_===t){_=null;break}if(h=_.sibling,h!==null){h.return=_.return,_=h;break}_=_.return}h=_}}function Da(t,n,s,o){t=null;for(var h=n,f=!1;h!==null;){if(!f){if((h.flags&524288)!==0)f=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var _=h.alternate;if(_===null)throw Error(a(387));if(_=_.memoizedProps,_!==null){var E=h.type;yn(h.pendingProps.value,_.value)||(t!==null?t.push(E):t=[E])}}else if(h===Me.current){if(_=h.alternate,_===null)throw Error(a(387));_.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(yl):t=[yl])}h=h.return}t!==null&&lf(n,t,s,o),n.flags|=262144}function zu(t){for(t=t.firstContext;t!==null;){if(!yn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ns(t){xs=t,Hi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ht(t){return Wm(xs,t)}function Bu(t,n){return xs===null&&Ns(t),Wm(t,n)}function Wm(t,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},Hi===null){if(t===null)throw Error(a(308));Hi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Hi=Hi.next=n;return s}var Cb=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(s,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(s){return s()})}},Ib=r.unstable_scheduleCallback,Db=r.unstable_NormalPriority,bt={$$typeof:re,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function uf(){return{controller:new Cb,data:new Map,refCount:0}}function Go(t){t.refCount--,t.refCount===0&&Ib(Db,function(){t.controller.abort()})}var Ko=null,cf=0,Oa=0,xa=null;function Ob(t,n){if(Ko===null){var s=Ko=[];cf=0,Oa=dd(),xa={status:"pending",value:void 0,then:function(o){s.push(o)}}}return cf++,n.then(eg,eg),n}function eg(){if(--cf===0&&Ko!==null){xa!==null&&(xa.status="fulfilled");var t=Ko;Ko=null,Oa=0,xa=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function xb(t,n){var s=[],o={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var h=0;h<s.length;h++)(0,s[h])(n)},function(h){for(o.status="rejected",o.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),o}var tg=Q.S;Q.S=function(t,n){Py=tn(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ob(t,n),tg!==null&&tg(t,n)};var Ms=N(null);function hf(){var t=Ms.current;return t!==null?t:Xe.pooledCache}function ju(t,n){n===null?ae(Ms,Ms.current):ae(Ms,n.pool)}function ng(){var t=hf();return t===null?null:{parent:bt._currentValue,pool:t}}var Na=Error(a(460)),ff=Error(a(474)),Hu=Error(a(542)),qu={then:function(){}};function ig(t){return t=t.status,t==="fulfilled"||t==="rejected"}function rg(t,n,s){switch(s=t[s],s===void 0?t.push(n):s!==n&&(n.then(qn,qn),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,ag(t),t;default:if(typeof n.status=="string")n.then(qn,qn);else{if(t=Xe,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var h=n;h.status="fulfilled",h.value=o}},function(o){if(n.status==="pending"){var h=n;h.status="rejected",h.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,ag(t),t}throw Vs=n,Na}}function ks(t){try{var n=t._init;return n(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Vs=s,Na):s}}var Vs=null;function sg(){if(Vs===null)throw Error(a(459));var t=Vs;return Vs=null,t}function ag(t){if(t===Na||t===Hu)throw Error(a(483))}var Ma=null,Yo=0;function Fu(t){var n=Yo;return Yo+=1,Ma===null&&(Ma=[]),rg(Ma,t,n)}function Qo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Gu(t,n){throw n.$$typeof===D?Error(a(525)):(t=Object.prototype.toString.call(n),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function og(t){function n(k,x){if(t){var P=k.deletions;P===null?(k.deletions=[x],k.flags|=16):P.push(x)}}function s(k,x){if(!t)return null;for(;x!==null;)n(k,x),x=x.sibling;return null}function o(k){for(var x=new Map;k!==null;)k.key!==null?x.set(k.key,k):x.set(k.index,k),k=k.sibling;return x}function h(k,x){return k=Bi(k,x),k.index=0,k.sibling=null,k}function f(k,x,P){return k.index=P,t?(P=k.alternate,P!==null?(P=P.index,P<x?(k.flags|=67108866,x):P):(k.flags|=67108866,x)):(k.flags|=1048576,x)}function _(k){return t&&k.alternate===null&&(k.flags|=67108866),k}function E(k,x,P,X){return x===null||x.tag!==6?(x=Wh(P,k.mode,X),x.return=k,x):(x=h(x,P),x.return=k,x)}function C(k,x,P,X){var fe=P.type;return fe===Z?Y(k,x,P.props.children,X,P.key):x!==null&&(x.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===A&&ks(fe)===x.type)?(x=h(x,P.props),Qo(x,P),x.return=k,x):(x=Lu(P.type,P.key,P.props,null,k.mode,X),Qo(x,P),x.return=k,x)}function z(k,x,P,X){return x===null||x.tag!==4||x.stateNode.containerInfo!==P.containerInfo||x.stateNode.implementation!==P.implementation?(x=ef(P,k.mode,X),x.return=k,x):(x=h(x,P.children||[]),x.return=k,x)}function Y(k,x,P,X,fe){return x===null||x.tag!==7?(x=Ds(P,k.mode,X,fe),x.return=k,x):(x=h(x,P),x.return=k,x)}function $(k,x,P){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=Wh(""+x,k.mode,P),x.return=k,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case L:return P=Lu(x.type,x.key,x.props,null,k.mode,P),Qo(P,x),P.return=k,P;case K:return x=ef(x,k.mode,P),x.return=k,x;case A:return x=ks(x),$(k,x,P)}if(Dt(x)||V(x))return x=Ds(x,k.mode,P,null),x.return=k,x;if(typeof x.then=="function")return $(k,Fu(x),P);if(x.$$typeof===re)return $(k,Bu(k,x),P);Gu(k,x)}return null}function B(k,x,P,X){var fe=x!==null?x.key:null;if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return fe!==null?null:E(k,x,""+P,X);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case L:return P.key===fe?C(k,x,P,X):null;case K:return P.key===fe?z(k,x,P,X):null;case A:return P=ks(P),B(k,x,P,X)}if(Dt(P)||V(P))return fe!==null?null:Y(k,x,P,X,null);if(typeof P.then=="function")return B(k,x,Fu(P),X);if(P.$$typeof===re)return B(k,x,Bu(k,P),X);Gu(k,P)}return null}function q(k,x,P,X,fe){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return k=k.get(P)||null,E(x,k,""+X,fe);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case L:return k=k.get(X.key===null?P:X.key)||null,C(x,k,X,fe);case K:return k=k.get(X.key===null?P:X.key)||null,z(x,k,X,fe);case A:return X=ks(X),q(k,x,P,X,fe)}if(Dt(X)||V(X))return k=k.get(P)||null,Y(x,k,X,fe,null);if(typeof X.then=="function")return q(k,x,P,Fu(X),fe);if(X.$$typeof===re)return q(k,x,P,Bu(x,X),fe);Gu(x,X)}return null}function ue(k,x,P,X){for(var fe=null,Ue=null,ce=x,Ae=x=0,Oe=null;ce!==null&&Ae<P.length;Ae++){ce.index>Ae?(Oe=ce,ce=null):Oe=ce.sibling;var Le=B(k,ce,P[Ae],X);if(Le===null){ce===null&&(ce=Oe);break}t&&ce&&Le.alternate===null&&n(k,ce),x=f(Le,x,Ae),Ue===null?fe=Le:Ue.sibling=Le,Ue=Le,ce=Oe}if(Ae===P.length)return s(k,ce),Ne&&ji(k,Ae),fe;if(ce===null){for(;Ae<P.length;Ae++)ce=$(k,P[Ae],X),ce!==null&&(x=f(ce,x,Ae),Ue===null?fe=ce:Ue.sibling=ce,Ue=ce);return Ne&&ji(k,Ae),fe}for(ce=o(ce);Ae<P.length;Ae++)Oe=q(ce,k,Ae,P[Ae],X),Oe!==null&&(t&&Oe.alternate!==null&&ce.delete(Oe.key===null?Ae:Oe.key),x=f(Oe,x,Ae),Ue===null?fe=Oe:Ue.sibling=Oe,Ue=Oe);return t&&ce.forEach(function(Fr){return n(k,Fr)}),Ne&&ji(k,Ae),fe}function ge(k,x,P,X){if(P==null)throw Error(a(151));for(var fe=null,Ue=null,ce=x,Ae=x=0,Oe=null,Le=P.next();ce!==null&&!Le.done;Ae++,Le=P.next()){ce.index>Ae?(Oe=ce,ce=null):Oe=ce.sibling;var Fr=B(k,ce,Le.value,X);if(Fr===null){ce===null&&(ce=Oe);break}t&&ce&&Fr.alternate===null&&n(k,ce),x=f(Fr,x,Ae),Ue===null?fe=Fr:Ue.sibling=Fr,Ue=Fr,ce=Oe}if(Le.done)return s(k,ce),Ne&&ji(k,Ae),fe;if(ce===null){for(;!Le.done;Ae++,Le=P.next())Le=$(k,Le.value,X),Le!==null&&(x=f(Le,x,Ae),Ue===null?fe=Le:Ue.sibling=Le,Ue=Le);return Ne&&ji(k,Ae),fe}for(ce=o(ce);!Le.done;Ae++,Le=P.next())Le=q(ce,k,Ae,Le.value,X),Le!==null&&(t&&Le.alternate!==null&&ce.delete(Le.key===null?Ae:Le.key),x=f(Le,x,Ae),Ue===null?fe=Le:Ue.sibling=Le,Ue=Le);return t&&ce.forEach(function(HS){return n(k,HS)}),Ne&&ji(k,Ae),fe}function Qe(k,x,P,X){if(typeof P=="object"&&P!==null&&P.type===Z&&P.key===null&&(P=P.props.children),typeof P=="object"&&P!==null){switch(P.$$typeof){case L:e:{for(var fe=P.key;x!==null;){if(x.key===fe){if(fe=P.type,fe===Z){if(x.tag===7){s(k,x.sibling),X=h(x,P.props.children),X.return=k,k=X;break e}}else if(x.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===A&&ks(fe)===x.type){s(k,x.sibling),X=h(x,P.props),Qo(X,P),X.return=k,k=X;break e}s(k,x);break}else n(k,x);x=x.sibling}P.type===Z?(X=Ds(P.props.children,k.mode,X,P.key),X.return=k,k=X):(X=Lu(P.type,P.key,P.props,null,k.mode,X),Qo(X,P),X.return=k,k=X)}return _(k);case K:e:{for(fe=P.key;x!==null;){if(x.key===fe)if(x.tag===4&&x.stateNode.containerInfo===P.containerInfo&&x.stateNode.implementation===P.implementation){s(k,x.sibling),X=h(x,P.children||[]),X.return=k,k=X;break e}else{s(k,x);break}else n(k,x);x=x.sibling}X=ef(P,k.mode,X),X.return=k,k=X}return _(k);case A:return P=ks(P),Qe(k,x,P,X)}if(Dt(P))return ue(k,x,P,X);if(V(P)){if(fe=V(P),typeof fe!="function")throw Error(a(150));return P=fe.call(P),ge(k,x,P,X)}if(typeof P.then=="function")return Qe(k,x,Fu(P),X);if(P.$$typeof===re)return Qe(k,x,Bu(k,P),X);Gu(k,P)}return typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint"?(P=""+P,x!==null&&x.tag===6?(s(k,x.sibling),X=h(x,P),X.return=k,k=X):(s(k,x),X=Wh(P,k.mode,X),X.return=k,k=X),_(k)):s(k,x)}return function(k,x,P,X){try{Yo=0;var fe=Qe(k,x,P,X);return Ma=null,fe}catch(ce){if(ce===Na||ce===Hu)throw ce;var Ue=_n(29,ce,null,k.mode);return Ue.lanes=X,Ue.return=k,Ue}finally{}}}var Us=og(!0),lg=og(!1),Cr=!1;function df(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ir(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Dr(t,n,s){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(ze&2)!==0){var h=o.pending;return h===null?n.next=n:(n.next=h.next,h.next=n),o.pending=n,n=Uu(t),Gm(t,null,s),n}return Vu(t,o,n,s),Uu(t)}function Xo(t,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,s|=o,n.lanes=s,bo(t,s)}}function mf(t,n){var s=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var h=null,f=null;if(s=s.firstBaseUpdate,s!==null){do{var _={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};f===null?h=f=_:f=f.next=_,s=s.next}while(s!==null);f===null?h=f=n:f=f.next=n}else h=f=n;s={baseState:o.baseState,firstBaseUpdate:h,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=n:t.next=n,s.lastBaseUpdate=n}var gf=!1;function $o(){if(gf){var t=xa;if(t!==null)throw t}}function Jo(t,n,s,o){gf=!1;var h=t.updateQueue;Cr=!1;var f=h.firstBaseUpdate,_=h.lastBaseUpdate,E=h.shared.pending;if(E!==null){h.shared.pending=null;var C=E,z=C.next;C.next=null,_===null?f=z:_.next=z,_=C;var Y=t.alternate;Y!==null&&(Y=Y.updateQueue,E=Y.lastBaseUpdate,E!==_&&(E===null?Y.firstBaseUpdate=z:E.next=z,Y.lastBaseUpdate=C))}if(f!==null){var $=h.baseState;_=0,Y=z=C=null,E=f;do{var B=E.lane&-536870913,q=B!==E.lane;if(q?(De&B)===B:(o&B)===B){B!==0&&B===Oa&&(gf=!0),Y!==null&&(Y=Y.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var ue=t,ge=E;B=n;var Qe=s;switch(ge.tag){case 1:if(ue=ge.payload,typeof ue=="function"){$=ue.call(Qe,$,B);break e}$=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=ge.payload,B=typeof ue=="function"?ue.call(Qe,$,B):ue,B==null)break e;$=S({},$,B);break e;case 2:Cr=!0}}B=E.callback,B!==null&&(t.flags|=64,q&&(t.flags|=8192),q=h.callbacks,q===null?h.callbacks=[B]:q.push(B))}else q={lane:B,tag:E.tag,payload:E.payload,callback:E.callback,next:null},Y===null?(z=Y=q,C=$):Y=Y.next=q,_|=B;if(E=E.next,E===null){if(E=h.shared.pending,E===null)break;q=E,E=q.next,q.next=null,h.lastBaseUpdate=q,h.shared.pending=null}}while(!0);Y===null&&(C=$),h.baseState=C,h.firstBaseUpdate=z,h.lastBaseUpdate=Y,f===null&&(h.shared.lanes=0),kr|=_,t.lanes=_,t.memoizedState=$}}function ug(t,n){if(typeof t!="function")throw Error(a(191,t));t.call(n)}function cg(t,n){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)ug(s[t],n)}var ka=N(null),Ku=N(0);function hg(t,n){t=Zi,ae(Ku,t),ae(ka,n),Zi=t|n.baseLanes}function yf(){ae(Ku,Zi),ae(ka,ka.current)}function _f(){Zi=Ku.current,J(ka),J(Ku)}var vn=N(null),Un=null;function Or(t){var n=t.alternate;ae(pt,pt.current&1),ae(vn,t),Un===null&&(n===null||ka.current!==null||n.memoizedState!==null)&&(Un=t)}function vf(t){ae(pt,pt.current),ae(vn,t),Un===null&&(Un=t)}function fg(t){t.tag===22?(ae(pt,pt.current),ae(vn,t),Un===null&&(Un=t)):xr()}function xr(){ae(pt,pt.current),ae(vn,vn.current)}function En(t){J(vn),Un===t&&(Un=null),J(pt)}var pt=N(0);function Yu(t){for(var n=t;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||wd(s)||Rd(s)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Fi=0,be=null,Ke=null,St=null,Qu=!1,Va=!1,Ls=!1,Xu=0,Zo=0,Ua=null,Nb=0;function ot(){throw Error(a(321))}function Ef(t,n){if(n===null)return!1;for(var s=0;s<n.length&&s<t.length;s++)if(!yn(t[s],n[s]))return!1;return!0}function Tf(t,n,s,o,h,f){return Fi=f,be=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Q.H=t===null||t.memoizedState===null?Xg:Uf,Ls=!1,f=s(o,h),Ls=!1,Va&&(f=pg(n,s,o,h)),dg(t),f}function dg(t){Q.H=tl;var n=Ke!==null&&Ke.next!==null;if(Fi=0,St=Ke=be=null,Qu=!1,Zo=0,Ua=null,n)throw Error(a(300));t===null||At||(t=t.dependencies,t!==null&&zu(t)&&(At=!0))}function pg(t,n,s,o){be=t;var h=0;do{if(Va&&(Ua=null),Zo=0,Va=!1,25<=h)throw Error(a(301));if(h+=1,St=Ke=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}Q.H=$g,f=n(s,o)}while(Va);return f}function Mb(){var t=Q.H,n=t.useState()[0];return n=typeof n.then=="function"?Wo(n):n,t=t.useState()[0],(Ke!==null?Ke.memoizedState:null)!==t&&(be.flags|=1024),n}function bf(){var t=Xu!==0;return Xu=0,t}function Sf(t,n,s){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~s}function Af(t){if(Qu){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Qu=!1}Fi=0,St=Ke=be=null,Va=!1,Zo=Xu=0,Ua=null}function rn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return St===null?be.memoizedState=St=t:St=St.next=t,St}function mt(){if(Ke===null){var t=be.alternate;t=t!==null?t.memoizedState:null}else t=Ke.next;var n=St===null?be.memoizedState:St.next;if(n!==null)St=n,Ke=t;else{if(t===null)throw be.alternate===null?Error(a(467)):Error(a(310));Ke=t,t={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},St===null?be.memoizedState=St=t:St=St.next=t}return St}function $u(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wo(t){var n=Zo;return Zo+=1,Ua===null&&(Ua=[]),t=rg(Ua,t,n),n=be,(St===null?n.memoizedState:St.next)===null&&(n=n.alternate,Q.H=n===null||n.memoizedState===null?Xg:Uf),t}function Ju(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Wo(t);if(t.$$typeof===re)return Ht(t)}throw Error(a(438,String(t)))}function wf(t){var n=null,s=be.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var o=be.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(h){return h.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=$u(),be.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(t),o=0;o<t;o++)s[o]=M;return n.index++,s}function Gi(t,n){return typeof n=="function"?n(t):n}function Zu(t){var n=mt();return Rf(n,Ke,t)}function Rf(t,n,s){var o=t.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=s;var h=t.baseQueue,f=o.pending;if(f!==null){if(h!==null){var _=h.next;h.next=f.next,f.next=_}n.baseQueue=h=f,o.pending=null}if(f=t.baseState,h===null)t.memoizedState=f;else{n=h.next;var E=_=null,C=null,z=n,Y=!1;do{var $=z.lane&-536870913;if($!==z.lane?(De&$)===$:(Fi&$)===$){var B=z.revertLane;if(B===0)C!==null&&(C=C.next={lane:0,revertLane:0,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),$===Oa&&(Y=!0);else if((Fi&B)===B){z=z.next,B===Oa&&(Y=!0);continue}else $={lane:0,revertLane:z.revertLane,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},C===null?(E=C=$,_=f):C=C.next=$,be.lanes|=B,kr|=B;$=z.action,Ls&&s(f,$),f=z.hasEagerState?z.eagerState:s(f,$)}else B={lane:$,revertLane:z.revertLane,gesture:z.gesture,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},C===null?(E=C=B,_=f):C=C.next=B,be.lanes|=$,kr|=$;z=z.next}while(z!==null&&z!==n);if(C===null?_=f:C.next=E,!yn(f,t.memoizedState)&&(At=!0,Y&&(s=xa,s!==null)))throw s;t.memoizedState=f,t.baseState=_,t.baseQueue=C,o.lastRenderedState=f}return h===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Cf(t){var n=mt(),s=n.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var o=s.dispatch,h=s.pending,f=n.memoizedState;if(h!==null){s.pending=null;var _=h=h.next;do f=t(f,_.action),_=_.next;while(_!==h);yn(f,n.memoizedState)||(At=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),s.lastRenderedState=f}return[f,o]}function mg(t,n,s){var o=be,h=mt(),f=Ne;if(f){if(s===void 0)throw Error(a(407));s=s()}else s=n();var _=!yn((Ke||h).memoizedState,s);if(_&&(h.memoizedState=s,At=!0),h=h.queue,Of(_g.bind(null,o,h,t),[t]),h.getSnapshot!==n||_||St!==null&&St.memoizedState.tag&1){if(o.flags|=2048,La(9,{destroy:void 0},yg.bind(null,o,h,s,n),null),Xe===null)throw Error(a(349));f||(Fi&127)!==0||gg(o,n,s)}return s}function gg(t,n,s){t.flags|=16384,t={getSnapshot:n,value:s},n=be.updateQueue,n===null?(n=$u(),be.updateQueue=n,n.stores=[t]):(s=n.stores,s===null?n.stores=[t]:s.push(t))}function yg(t,n,s,o){n.value=s,n.getSnapshot=o,vg(n)&&Eg(t)}function _g(t,n,s){return s(function(){vg(n)&&Eg(t)})}function vg(t){var n=t.getSnapshot;t=t.value;try{var s=n();return!yn(t,s)}catch{return!0}}function Eg(t){var n=Is(t,2);n!==null&&fn(n,t,2)}function If(t){var n=rn();if(typeof t=="function"){var s=t;if(t=s(),Ls){Rn(!0);try{s()}finally{Rn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:t},n}function Tg(t,n,s,o){return t.baseState=s,Rf(t,Ke,typeof o=="function"?o:Gi)}function kb(t,n,s,o,h){if(tc(t))throw Error(a(485));if(t=n.action,t!==null){var f={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};Q.T!==null?s(!0):f.isTransition=!1,o(f),s=n.pending,s===null?(f.next=n.pending=f,bg(n,f)):(f.next=s.next,n.pending=s.next=f)}}function bg(t,n){var s=n.action,o=n.payload,h=t.state;if(n.isTransition){var f=Q.T,_={};Q.T=_;try{var E=s(h,o),C=Q.S;C!==null&&C(_,E),Sg(t,n,E)}catch(z){Df(t,n,z)}finally{f!==null&&_.types!==null&&(f.types=_.types),Q.T=f}}else try{f=s(h,o),Sg(t,n,f)}catch(z){Df(t,n,z)}}function Sg(t,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){Ag(t,n,o)},function(o){return Df(t,n,o)}):Ag(t,n,s)}function Ag(t,n,s){n.status="fulfilled",n.value=s,wg(n),t.state=s,n=t.pending,n!==null&&(s=n.next,s===n?t.pending=null:(s=s.next,n.next=s,bg(t,s)))}function Df(t,n,s){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=s,wg(n),n=n.next;while(n!==o)}t.action=null}function wg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Rg(t,n){return n}function Cg(t,n){if(Ne){var s=Xe.formState;if(s!==null){e:{var o=be;if(Ne){if(Je){t:{for(var h=Je,f=Vn;h.nodeType!==8;){if(!f){h=null;break t}if(h=Ln(h.nextSibling),h===null){h=null;break t}}f=h.data,h=f==="F!"||f==="F"?h:null}if(h){Je=Ln(h.nextSibling),o=h.data==="F!";break e}}wr(o)}o=!1}o&&(n=s[0])}}return s=rn(),s.memoizedState=s.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rg,lastRenderedState:n},s.queue=o,s=Kg.bind(null,be,o),o.dispatch=s,o=If(!1),f=Vf.bind(null,be,!1,o.queue),o=rn(),h={state:n,dispatch:null,action:t,pending:null},o.queue=h,s=kb.bind(null,be,h,f,s),h.dispatch=s,o.memoizedState=t,[n,s,!1]}function Ig(t){var n=mt();return Dg(n,Ke,t)}function Dg(t,n,s){if(n=Rf(t,n,Rg)[0],t=Zu(Gi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Wo(n)}catch(_){throw _===Na?Hu:_}else o=n;n=mt();var h=n.queue,f=h.dispatch;return s!==n.memoizedState&&(be.flags|=2048,La(9,{destroy:void 0},Vb.bind(null,h,s),null)),[o,f,t]}function Vb(t,n){t.action=n}function Og(t){var n=mt(),s=Ke;if(s!==null)return Dg(n,s,t);mt(),n=n.memoizedState,s=mt();var o=s.queue.dispatch;return s.memoizedState=t,[n,o,!1]}function La(t,n,s,o){return t={tag:t,create:s,deps:o,inst:n,next:null},n=be.updateQueue,n===null&&(n=$u(),be.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=t.next=t:(o=s.next,s.next=t,t.next=o,n.lastEffect=t),t}function xg(){return mt().memoizedState}function Wu(t,n,s,o){var h=rn();be.flags|=t,h.memoizedState=La(1|n,{destroy:void 0},s,o===void 0?null:o)}function ec(t,n,s,o){var h=mt();o=o===void 0?null:o;var f=h.memoizedState.inst;Ke!==null&&o!==null&&Ef(o,Ke.memoizedState.deps)?h.memoizedState=La(n,f,s,o):(be.flags|=t,h.memoizedState=La(1|n,f,s,o))}function Ng(t,n){Wu(8390656,8,t,n)}function Of(t,n){ec(2048,8,t,n)}function Ub(t){be.flags|=4;var n=be.updateQueue;if(n===null)n=$u(),be.updateQueue=n,n.events=[t];else{var s=n.events;s===null?n.events=[t]:s.push(t)}}function Mg(t){var n=mt().memoizedState;return Ub({ref:n,nextImpl:t}),function(){if((ze&2)!==0)throw Error(a(440));return n.impl.apply(void 0,arguments)}}function kg(t,n){return ec(4,2,t,n)}function Vg(t,n){return ec(4,4,t,n)}function Ug(t,n){if(typeof n=="function"){t=t();var s=n(t);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Lg(t,n,s){s=s!=null?s.concat([t]):null,ec(4,4,Ug.bind(null,n,t),s)}function xf(){}function Pg(t,n){var s=mt();n=n===void 0?null:n;var o=s.memoizedState;return n!==null&&Ef(n,o[1])?o[0]:(s.memoizedState=[t,n],t)}function zg(t,n){var s=mt();n=n===void 0?null:n;var o=s.memoizedState;if(n!==null&&Ef(n,o[1]))return o[0];if(o=t(),Ls){Rn(!0);try{t()}finally{Rn(!1)}}return s.memoizedState=[o,n],o}function Nf(t,n,s){return s===void 0||(Fi&1073741824)!==0&&(De&261930)===0?t.memoizedState=n:(t.memoizedState=s,t=By(),be.lanes|=t,kr|=t,s)}function Bg(t,n,s,o){return yn(s,n)?s:ka.current!==null?(t=Nf(t,s,o),yn(t,n)||(At=!0),t):(Fi&42)===0||(Fi&1073741824)!==0&&(De&261930)===0?(At=!0,t.memoizedState=s):(t=By(),be.lanes|=t,kr|=t,n)}function jg(t,n,s,o,h){var f=se.p;se.p=f!==0&&8>f?f:8;var _=Q.T,E={};Q.T=E,Vf(t,!1,n,s);try{var C=h(),z=Q.S;if(z!==null&&z(E,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var Y=xb(C,o);el(t,n,Y,Sn(t))}else el(t,n,o,Sn(t))}catch($){el(t,n,{then:function(){},status:"rejected",reason:$},Sn())}finally{se.p=f,_!==null&&E.types!==null&&(_.types=E.types),Q.T=_}}function Lb(){}function Mf(t,n,s,o){if(t.tag!==5)throw Error(a(476));var h=Hg(t).queue;jg(t,h,n,pe,s===null?Lb:function(){return qg(t),s(o)})}function Hg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:pe,baseState:pe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:pe},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:s},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function qg(t){var n=Hg(t);n.next===null&&(n=t.alternate.memoizedState),el(t,n.next.queue,{},Sn())}function kf(){return Ht(yl)}function Fg(){return mt().memoizedState}function Gg(){return mt().memoizedState}function Pb(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var s=Sn();t=Ir(s);var o=Dr(n,t,s);o!==null&&(fn(o,n,s),Xo(o,n,s)),n={cache:uf()},t.payload=n;return}n=n.return}}function zb(t,n,s){var o=Sn();s={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},tc(t)?Yg(n,s):(s=Jh(t,n,s,o),s!==null&&(fn(s,t,o),Qg(s,n,o)))}function Kg(t,n,s){var o=Sn();el(t,n,s,o)}function el(t,n,s,o){var h={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(tc(t))Yg(n,h);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,E=f(_,s);if(h.hasEagerState=!0,h.eagerState=E,yn(E,_))return Vu(t,n,h,0),Xe===null&&ku(),!1}catch{}finally{}if(s=Jh(t,n,h,o),s!==null)return fn(s,t,o),Qg(s,n,o),!0}return!1}function Vf(t,n,s,o){if(o={lane:2,revertLane:dd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},tc(t)){if(n)throw Error(a(479))}else n=Jh(t,s,o,2),n!==null&&fn(n,t,2)}function tc(t){var n=t.alternate;return t===be||n!==null&&n===be}function Yg(t,n){Va=Qu=!0;var s=t.pending;s===null?n.next=n:(n.next=s.next,s.next=n),t.pending=n}function Qg(t,n,s){if((s&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,s|=o,n.lanes=s,bo(t,s)}}var tl={readContext:Ht,use:Ju,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useLayoutEffect:ot,useInsertionEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useSyncExternalStore:ot,useId:ot,useHostTransitionStatus:ot,useFormState:ot,useActionState:ot,useOptimistic:ot,useMemoCache:ot,useCacheRefresh:ot};tl.useEffectEvent=ot;var Xg={readContext:Ht,use:Ju,useCallback:function(t,n){return rn().memoizedState=[t,n===void 0?null:n],t},useContext:Ht,useEffect:Ng,useImperativeHandle:function(t,n,s){s=s!=null?s.concat([t]):null,Wu(4194308,4,Ug.bind(null,n,t),s)},useLayoutEffect:function(t,n){return Wu(4194308,4,t,n)},useInsertionEffect:function(t,n){Wu(4,2,t,n)},useMemo:function(t,n){var s=rn();n=n===void 0?null:n;var o=t();if(Ls){Rn(!0);try{t()}finally{Rn(!1)}}return s.memoizedState=[o,n],o},useReducer:function(t,n,s){var o=rn();if(s!==void 0){var h=s(n);if(Ls){Rn(!0);try{s(n)}finally{Rn(!1)}}}else h=n;return o.memoizedState=o.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},o.queue=t,t=t.dispatch=zb.bind(null,be,t),[o.memoizedState,t]},useRef:function(t){var n=rn();return t={current:t},n.memoizedState=t},useState:function(t){t=If(t);var n=t.queue,s=Kg.bind(null,be,n);return n.dispatch=s,[t.memoizedState,s]},useDebugValue:xf,useDeferredValue:function(t,n){var s=rn();return Nf(s,t,n)},useTransition:function(){var t=If(!1);return t=jg.bind(null,be,t.queue,!0,!1),rn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,s){var o=be,h=rn();if(Ne){if(s===void 0)throw Error(a(407));s=s()}else{if(s=n(),Xe===null)throw Error(a(349));(De&127)!==0||gg(o,n,s)}h.memoizedState=s;var f={value:s,getSnapshot:n};return h.queue=f,Ng(_g.bind(null,o,f,t),[t]),o.flags|=2048,La(9,{destroy:void 0},yg.bind(null,o,f,s,n),null),s},useId:function(){var t=rn(),n=Xe.identifierPrefix;if(Ne){var s=Ai,o=Si;s=(o&~(1<<32-ft(o)-1)).toString(32)+s,n="_"+n+"R_"+s,s=Xu++,0<s&&(n+="H"+s.toString(32)),n+="_"}else s=Nb++,n="_"+n+"r_"+s.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:kf,useFormState:Cg,useActionState:Cg,useOptimistic:function(t){var n=rn();n.memoizedState=n.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=Vf.bind(null,be,!0,s),s.dispatch=n,[t,n]},useMemoCache:wf,useCacheRefresh:function(){return rn().memoizedState=Pb.bind(null,be)},useEffectEvent:function(t){var n=rn(),s={impl:t};return n.memoizedState=s,function(){if((ze&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},Uf={readContext:Ht,use:Ju,useCallback:Pg,useContext:Ht,useEffect:Of,useImperativeHandle:Lg,useInsertionEffect:kg,useLayoutEffect:Vg,useMemo:zg,useReducer:Zu,useRef:xg,useState:function(){return Zu(Gi)},useDebugValue:xf,useDeferredValue:function(t,n){var s=mt();return Bg(s,Ke.memoizedState,t,n)},useTransition:function(){var t=Zu(Gi)[0],n=mt().memoizedState;return[typeof t=="boolean"?t:Wo(t),n]},useSyncExternalStore:mg,useId:Fg,useHostTransitionStatus:kf,useFormState:Ig,useActionState:Ig,useOptimistic:function(t,n){var s=mt();return Tg(s,Ke,t,n)},useMemoCache:wf,useCacheRefresh:Gg};Uf.useEffectEvent=Mg;var $g={readContext:Ht,use:Ju,useCallback:Pg,useContext:Ht,useEffect:Of,useImperativeHandle:Lg,useInsertionEffect:kg,useLayoutEffect:Vg,useMemo:zg,useReducer:Cf,useRef:xg,useState:function(){return Cf(Gi)},useDebugValue:xf,useDeferredValue:function(t,n){var s=mt();return Ke===null?Nf(s,t,n):Bg(s,Ke.memoizedState,t,n)},useTransition:function(){var t=Cf(Gi)[0],n=mt().memoizedState;return[typeof t=="boolean"?t:Wo(t),n]},useSyncExternalStore:mg,useId:Fg,useHostTransitionStatus:kf,useFormState:Og,useActionState:Og,useOptimistic:function(t,n){var s=mt();return Ke!==null?Tg(s,Ke,t,n):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:wf,useCacheRefresh:Gg};$g.useEffectEvent=Mg;function Lf(t,n,s,o){n=t.memoizedState,s=s(o,n),s=s==null?n:S({},n,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Pf={enqueueSetState:function(t,n,s){t=t._reactInternals;var o=Sn(),h=Ir(o);h.payload=n,s!=null&&(h.callback=s),n=Dr(t,h,o),n!==null&&(fn(n,t,o),Xo(n,t,o))},enqueueReplaceState:function(t,n,s){t=t._reactInternals;var o=Sn(),h=Ir(o);h.tag=1,h.payload=n,s!=null&&(h.callback=s),n=Dr(t,h,o),n!==null&&(fn(n,t,o),Xo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var s=Sn(),o=Ir(s);o.tag=2,n!=null&&(o.callback=n),n=Dr(t,o,s),n!==null&&(fn(n,t,s),Xo(n,t,s))}};function Jg(t,n,s,o,h,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,_):n.prototype&&n.prototype.isPureReactComponent?!jo(s,o)||!jo(h,f):!0}function Zg(t,n,s,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,o),n.state!==t&&Pf.enqueueReplaceState(n,n.state,null)}function Ps(t,n){var s=n;if("ref"in n){s={};for(var o in n)o!=="ref"&&(s[o]=n[o])}if(t=t.defaultProps){s===n&&(s=S({},s));for(var h in t)s[h]===void 0&&(s[h]=t[h])}return s}function Wg(t){Mu(t)}function ey(t){console.error(t)}function ty(t){Mu(t)}function nc(t,n){try{var s=t.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function ny(t,n,s){try{var o=t.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function zf(t,n,s){return s=Ir(s),s.tag=3,s.payload={element:null},s.callback=function(){nc(t,n)},s}function iy(t){return t=Ir(t),t.tag=3,t}function ry(t,n,s,o){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var f=o.value;t.payload=function(){return h(f)},t.callback=function(){ny(n,s,o)}}var _=s.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){ny(n,s,o),typeof h!="function"&&(Vr===null?Vr=new Set([this]):Vr.add(this));var E=o.stack;this.componentDidCatch(o.value,{componentStack:E!==null?E:""})})}function Bb(t,n,s,o,h){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=s.alternate,n!==null&&Da(n,s,h,!0),s=vn.current,s!==null){switch(s.tag){case 31:case 13:return Un===null?pc():s.alternate===null&&lt===0&&(lt=3),s.flags&=-257,s.flags|=65536,s.lanes=h,o===qu?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([o]):n.add(o),cd(t,o,h)),!1;case 22:return s.flags|=65536,o===qu?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([o]):s.add(o)),cd(t,o,h)),!1}throw Error(a(435,s.tag))}return cd(t,o,h),pc(),!1}if(Ne)return n=vn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=h,o!==rf&&(t=Error(a(422),{cause:o}),Fo(Nn(t,s)))):(o!==rf&&(n=Error(a(423),{cause:o}),Fo(Nn(n,s))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,o=Nn(o,s),h=zf(t.stateNode,o,h),mf(t,h),lt!==4&&(lt=2)),!1;var f=Error(a(520),{cause:o});if(f=Nn(f,s),ul===null?ul=[f]:ul.push(f),lt!==4&&(lt=2),n===null)return!0;o=Nn(o,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,t=h&-h,s.lanes|=t,t=zf(s.stateNode,o,t),mf(s,t),!1;case 1:if(n=s.type,f=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Vr===null||!Vr.has(f))))return s.flags|=65536,h&=-h,s.lanes|=h,h=iy(h),ry(h,t,s,o),mf(s,h),!1}s=s.return}while(s!==null);return!1}var Bf=Error(a(461)),At=!1;function qt(t,n,s,o){n.child=t===null?lg(n,null,s,o):Us(n,t.child,s,o)}function sy(t,n,s,o,h){s=s.render;var f=n.ref;if("ref"in o){var _={};for(var E in o)E!=="ref"&&(_[E]=o[E])}else _=o;return Ns(n),o=Tf(t,n,s,_,f,h),E=bf(),t!==null&&!At?(Sf(t,n,h),Ki(t,n,h)):(Ne&&E&&tf(n),n.flags|=1,qt(t,n,o,h),n.child)}function ay(t,n,s,o,h){if(t===null){var f=s.type;return typeof f=="function"&&!Zh(f)&&f.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=f,oy(t,n,f,o,h)):(t=Lu(s.type,null,o,n,n.mode,h),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Qf(t,h)){var _=f.memoizedProps;if(s=s.compare,s=s!==null?s:jo,s(_,o)&&t.ref===n.ref)return Ki(t,n,h)}return n.flags|=1,t=Bi(f,o),t.ref=n.ref,t.return=n,n.child=t}function oy(t,n,s,o,h){if(t!==null){var f=t.memoizedProps;if(jo(f,o)&&t.ref===n.ref)if(At=!1,n.pendingProps=o=f,Qf(t,h))(t.flags&131072)!==0&&(At=!0);else return n.lanes=t.lanes,Ki(t,n,h)}return jf(t,n,s,o,h)}function ly(t,n,s,o){var h=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|s:s,t!==null){for(o=n.child=t.child,h=0;o!==null;)h=h|o.lanes|o.childLanes,o=o.sibling;o=h&~f}else o=0,n.child=null;return uy(t,n,f,s,o)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&ju(n,f!==null?f.cachePool:null),f!==null?hg(n,f):yf(),fg(n);else return o=n.lanes=536870912,uy(t,n,f!==null?f.baseLanes|s:s,s,o)}else f!==null?(ju(n,f.cachePool),hg(n,f),xr(),n.memoizedState=null):(t!==null&&ju(n,null),yf(),xr());return qt(t,n,h,s),n.child}function nl(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function uy(t,n,s,o,h){var f=hf();return f=f===null?null:{parent:bt._currentValue,pool:f},n.memoizedState={baseLanes:s,cachePool:f},t!==null&&ju(n,null),yf(),fg(n),t!==null&&Da(t,n,o,!0),n.childLanes=h,null}function ic(t,n){return n=sc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function cy(t,n,s){return Us(n,t.child,null,s),t=ic(n,n.pendingProps),t.flags|=2,En(n),n.memoizedState=null,t}function jb(t,n,s){var o=n.pendingProps,h=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Ne){if(o.mode==="hidden")return t=ic(n,o),n.lanes=536870912,nl(null,t);if(vf(n),(t=Je)?(t=b_(t,Vn),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Sr!==null?{id:Si,overflow:Ai}:null,retryLane:536870912,hydrationErrors:null},s=Ym(t),s.return=n,n.child=s,jt=n,Je=null)):t=null,t===null)throw wr(n);return n.lanes=536870912,null}return ic(n,o)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(vf(n),h)if(n.flags&256)n.flags&=-257,n=cy(t,n,s);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(a(558));else if(At||Da(t,n,s,!1),h=(s&t.childLanes)!==0,At||h){if(o=Xe,o!==null&&(_=So(o,s),_!==0&&_!==f.retryLane))throw f.retryLane=_,Is(t,_),fn(o,t,_),Bf;pc(),n=cy(t,n,s)}else t=f.treeContext,Je=Ln(_.nextSibling),jt=n,Ne=!0,Ar=null,Vn=!1,t!==null&&$m(n,t),n=ic(n,o),n.flags|=4096;return n}return t=Bi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function rc(t,n){var s=n.ref;if(s===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(n.flags|=4194816)}}function jf(t,n,s,o,h){return Ns(n),s=Tf(t,n,s,o,void 0,h),o=bf(),t!==null&&!At?(Sf(t,n,h),Ki(t,n,h)):(Ne&&o&&tf(n),n.flags|=1,qt(t,n,s,h),n.child)}function hy(t,n,s,o,h,f){return Ns(n),n.updateQueue=null,s=pg(n,o,s,h),dg(t),o=bf(),t!==null&&!At?(Sf(t,n,f),Ki(t,n,f)):(Ne&&o&&tf(n),n.flags|=1,qt(t,n,s,f),n.child)}function fy(t,n,s,o,h){if(Ns(n),n.stateNode===null){var f=wa,_=s.contextType;typeof _=="object"&&_!==null&&(f=Ht(_)),f=new s(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Pf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},df(n),_=s.contextType,f.context=typeof _=="object"&&_!==null?Ht(_):wa,f.state=n.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(Lf(n,s,_,o),f.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&Pf.enqueueReplaceState(f,f.state,null),Jo(n,o,f,h),$o(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,C=Ps(s,E);f.props=C;var z=f.context,Y=s.contextType;_=wa,typeof Y=="object"&&Y!==null&&(_=Ht(Y));var $=s.getDerivedStateFromProps;Y=typeof $=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,Y||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||z!==_)&&Zg(n,f,o,_),Cr=!1;var B=n.memoizedState;f.state=B,Jo(n,o,f,h),$o(),z=n.memoizedState,E||B!==z||Cr?(typeof $=="function"&&(Lf(n,s,$,o),z=n.memoizedState),(C=Cr||Jg(n,s,C,o,B,z,_))?(Y||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=z),f.props=o,f.state=z,f.context=_,o=C):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,pf(t,n),_=n.memoizedProps,Y=Ps(s,_),f.props=Y,$=n.pendingProps,B=f.context,z=s.contextType,C=wa,typeof z=="object"&&z!==null&&(C=Ht(z)),E=s.getDerivedStateFromProps,(z=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==$||B!==C)&&Zg(n,f,o,C),Cr=!1,B=n.memoizedState,f.state=B,Jo(n,o,f,h),$o();var q=n.memoizedState;_!==$||B!==q||Cr||t!==null&&t.dependencies!==null&&zu(t.dependencies)?(typeof E=="function"&&(Lf(n,s,E,o),q=n.memoizedState),(Y=Cr||Jg(n,s,Y,o,B,q,C)||t!==null&&t.dependencies!==null&&zu(t.dependencies))?(z||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,q,C),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,q,C)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&B===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&B===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=q),f.props=o,f.state=q,f.context=C,o=Y):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&B===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&B===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,rc(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Us(n,t.child,null,h),n.child=Us(n,null,s,h)):qt(t,n,s,h),n.memoizedState=f.state,t=n.child):t=Ki(t,n,h),t}function dy(t,n,s,o){return Os(),n.flags|=256,qt(t,n,s,o),n.child}var Hf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qf(t){return{baseLanes:t,cachePool:ng()}}function Ff(t,n,s){return t=t!==null?t.childLanes&~s:0,n&&(t|=bn),t}function py(t,n,s){var o=n.pendingProps,h=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(pt.current&2)!==0),_&&(h=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ne){if(h?Or(n):xr(),(t=Je)?(t=b_(t,Vn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Sr!==null?{id:Si,overflow:Ai}:null,retryLane:536870912,hydrationErrors:null},s=Ym(t),s.return=n,n.child=s,jt=n,Je=null)):t=null,t===null)throw wr(n);return Rd(t)?n.lanes=32:n.lanes=536870912,null}var E=o.children;return o=o.fallback,h?(xr(),h=n.mode,E=sc({mode:"hidden",children:E},h),o=Ds(o,h,s,null),E.return=n,o.return=n,E.sibling=o,n.child=E,o=n.child,o.memoizedState=qf(s),o.childLanes=Ff(t,_,s),n.memoizedState=Hf,nl(null,o)):(Or(n),Gf(n,E))}var C=t.memoizedState;if(C!==null&&(E=C.dehydrated,E!==null)){if(f)n.flags&256?(Or(n),n.flags&=-257,n=Kf(t,n,s)):n.memoizedState!==null?(xr(),n.child=t.child,n.flags|=128,n=null):(xr(),E=o.fallback,h=n.mode,o=sc({mode:"visible",children:o.children},h),E=Ds(E,h,s,null),E.flags|=2,o.return=n,E.return=n,o.sibling=E,n.child=o,Us(n,t.child,null,s),o=n.child,o.memoizedState=qf(s),o.childLanes=Ff(t,_,s),n.memoizedState=Hf,n=nl(null,o));else if(Or(n),Rd(E)){if(_=E.nextSibling&&E.nextSibling.dataset,_)var z=_.dgst;_=z,o=Error(a(419)),o.stack="",o.digest=_,Fo({value:o,source:null,stack:null}),n=Kf(t,n,s)}else if(At||Da(t,n,s,!1),_=(s&t.childLanes)!==0,At||_){if(_=Xe,_!==null&&(o=So(_,s),o!==0&&o!==C.retryLane))throw C.retryLane=o,Is(t,o),fn(_,t,o),Bf;wd(E)||pc(),n=Kf(t,n,s)}else wd(E)?(n.flags|=192,n.child=t.child,n=null):(t=C.treeContext,Je=Ln(E.nextSibling),jt=n,Ne=!0,Ar=null,Vn=!1,t!==null&&$m(n,t),n=Gf(n,o.children),n.flags|=4096);return n}return h?(xr(),E=o.fallback,h=n.mode,C=t.child,z=C.sibling,o=Bi(C,{mode:"hidden",children:o.children}),o.subtreeFlags=C.subtreeFlags&65011712,z!==null?E=Bi(z,E):(E=Ds(E,h,s,null),E.flags|=2),E.return=n,o.return=n,o.sibling=E,n.child=o,nl(null,o),o=n.child,E=t.child.memoizedState,E===null?E=qf(s):(h=E.cachePool,h!==null?(C=bt._currentValue,h=h.parent!==C?{parent:C,pool:C}:h):h=ng(),E={baseLanes:E.baseLanes|s,cachePool:h}),o.memoizedState=E,o.childLanes=Ff(t,_,s),n.memoizedState=Hf,nl(t.child,o)):(Or(n),s=t.child,t=s.sibling,s=Bi(s,{mode:"visible",children:o.children}),s.return=n,s.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=s,n.memoizedState=null,s)}function Gf(t,n){return n=sc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function sc(t,n){return t=_n(22,t,null,n),t.lanes=0,t}function Kf(t,n,s){return Us(n,t.child,null,s),t=Gf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function my(t,n,s){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),of(t.return,n,s)}function Yf(t,n,s,o,h,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:h,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=o,_.tail=s,_.tailMode=h,_.treeForkCount=f)}function gy(t,n,s){var o=n.pendingProps,h=o.revealOrder,f=o.tail;o=o.children;var _=pt.current,E=(_&2)!==0;if(E?(_=_&1|2,n.flags|=128):_&=1,ae(pt,_),qt(t,n,o,s),o=Ne?qo:0,!E&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&my(t,s,n);else if(t.tag===19)my(t,s,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(h){case"forwards":for(s=n.child,h=null;s!==null;)t=s.alternate,t!==null&&Yu(t)===null&&(h=s),s=s.sibling;s=h,s===null?(h=n.child,n.child=null):(h=s.sibling,s.sibling=null),Yf(n,!1,h,s,f,o);break;case"backwards":case"unstable_legacy-backwards":for(s=null,h=n.child,n.child=null;h!==null;){if(t=h.alternate,t!==null&&Yu(t)===null){n.child=h;break}t=h.sibling,h.sibling=s,s=h,h=t}Yf(n,!0,s,null,f,o);break;case"together":Yf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Ki(t,n,s){if(t!==null&&(n.dependencies=t.dependencies),kr|=n.lanes,(s&n.childLanes)===0)if(t!==null){if(Da(t,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(a(153));if(n.child!==null){for(t=n.child,s=Bi(t,t.pendingProps),n.child=s,s.return=n;t.sibling!==null;)t=t.sibling,s=s.sibling=Bi(t,t.pendingProps),s.return=n;s.sibling=null}return n.child}function Qf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&zu(t)))}function Hb(t,n,s){switch(n.tag){case 3:Ot(n,n.stateNode.containerInfo),Rr(n,bt,t.memoizedState.cache),Os();break;case 27:case 5:cs(n);break;case 4:Ot(n,n.stateNode.containerInfo);break;case 10:Rr(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,vf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Or(n),n.flags|=128,null):(s&n.child.childLanes)!==0?py(t,n,s):(Or(n),t=Ki(t,n,s),t!==null?t.sibling:null);Or(n);break;case 19:var h=(t.flags&128)!==0;if(o=(s&n.childLanes)!==0,o||(Da(t,n,s,!1),o=(s&n.childLanes)!==0),h){if(o)return gy(t,n,s);n.flags|=128}if(h=n.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),ae(pt,pt.current),o)break;return null;case 22:return n.lanes=0,ly(t,n,s,n.pendingProps);case 24:Rr(n,bt,t.memoizedState.cache)}return Ki(t,n,s)}function yy(t,n,s){if(t!==null)if(t.memoizedProps!==n.pendingProps)At=!0;else{if(!Qf(t,s)&&(n.flags&128)===0)return At=!1,Hb(t,n,s);At=(t.flags&131072)!==0}else At=!1,Ne&&(n.flags&1048576)!==0&&Xm(n,qo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=ks(n.elementType),n.type=t,typeof t=="function")Zh(t)?(o=Ps(t,o),n.tag=1,n=fy(null,n,t,o,s)):(n.tag=0,n=jf(null,n,t,o,s));else{if(t!=null){var h=t.$$typeof;if(h===oe){n.tag=11,n=sy(null,n,t,o,s);break e}else if(h===I){n.tag=14,n=ay(null,n,t,o,s);break e}}throw n=We(t)||t,Error(a(306,n,""))}}return n;case 0:return jf(t,n,n.type,n.pendingProps,s);case 1:return o=n.type,h=Ps(o,n.pendingProps),fy(t,n,o,h,s);case 3:e:{if(Ot(n,n.stateNode.containerInfo),t===null)throw Error(a(387));o=n.pendingProps;var f=n.memoizedState;h=f.element,pf(t,n),Jo(n,o,null,s);var _=n.memoizedState;if(o=_.cache,Rr(n,bt,o),o!==f.cache&&lf(n,[bt],s,!0),$o(),o=_.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=dy(t,n,o,s);break e}else if(o!==h){h=Nn(Error(a(424)),n),Fo(h),n=dy(t,n,o,s);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Je=Ln(t.firstChild),jt=n,Ne=!0,Ar=null,Vn=!0,s=lg(n,null,o,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Os(),o===h){n=Ki(t,n,s);break e}qt(t,n,o,s)}n=n.child}return n;case 26:return rc(t,n),t===null?(s=I_(n.type,null,n.pendingProps,null))?n.memoizedState=s:Ne||(s=n.type,t=n.pendingProps,o=Tc(Se.current).createElement(s),o[vt]=n,o[Mt]=t,Ft(o,s,t),Et(o),n.stateNode=o):n.memoizedState=I_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return cs(n),t===null&&Ne&&(o=n.stateNode=w_(n.type,n.pendingProps,Se.current),jt=n,Vn=!0,h=Je,zr(n.type)?(Cd=h,Je=Ln(o.firstChild)):Je=h),qt(t,n,n.pendingProps.children,s),rc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ne&&((h=o=Je)&&(o=_S(o,n.type,n.pendingProps,Vn),o!==null?(n.stateNode=o,jt=n,Je=Ln(o.firstChild),Vn=!1,h=!0):h=!1),h||wr(n)),cs(n),h=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,o=f.children,bd(h,f)?o=null:_!==null&&bd(h,_)&&(n.flags|=32),n.memoizedState!==null&&(h=Tf(t,n,Mb,null,null,s),yl._currentValue=h),rc(t,n),qt(t,n,o,s),n.child;case 6:return t===null&&Ne&&((t=s=Je)&&(s=vS(s,n.pendingProps,Vn),s!==null?(n.stateNode=s,jt=n,Je=null,t=!0):t=!1),t||wr(n)),null;case 13:return py(t,n,s);case 4:return Ot(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Us(n,null,o,s):qt(t,n,o,s),n.child;case 11:return sy(t,n,n.type,n.pendingProps,s);case 7:return qt(t,n,n.pendingProps,s),n.child;case 8:return qt(t,n,n.pendingProps.children,s),n.child;case 12:return qt(t,n,n.pendingProps.children,s),n.child;case 10:return o=n.pendingProps,Rr(n,n.type,o.value),qt(t,n,o.children,s),n.child;case 9:return h=n.type._context,o=n.pendingProps.children,Ns(n),h=Ht(h),o=o(h),n.flags|=1,qt(t,n,o,s),n.child;case 14:return ay(t,n,n.type,n.pendingProps,s);case 15:return oy(t,n,n.type,n.pendingProps,s);case 19:return gy(t,n,s);case 31:return jb(t,n,s);case 22:return ly(t,n,s,n.pendingProps);case 24:return Ns(n),o=Ht(bt),t===null?(h=hf(),h===null&&(h=Xe,f=uf(),h.pooledCache=f,f.refCount++,f!==null&&(h.pooledCacheLanes|=s),h=f),n.memoizedState={parent:o,cache:h},df(n),Rr(n,bt,h)):((t.lanes&s)!==0&&(pf(t,n),Jo(n,null,null,s),$o()),h=t.memoizedState,f=n.memoizedState,h.parent!==o?(h={parent:o,cache:o},n.memoizedState=h,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=h),Rr(n,bt,o)):(o=f.cache,Rr(n,bt,o),o!==h.cache&&lf(n,[bt],s,!0))),qt(t,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function Yi(t){t.flags|=4}function Xf(t,n,s,o,h){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(h&335544128)===h)if(t.stateNode.complete)t.flags|=8192;else if(Fy())t.flags|=8192;else throw Vs=qu,ff}else t.flags&=-16777217}function _y(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!M_(n))if(Fy())t.flags|=8192;else throw Vs=qu,ff}function ac(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?fu():536870912,t.lanes|=n,ja|=n)}function il(t,n){if(!Ne)switch(t.tailMode){case"hidden":n=t.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Ze(t){var n=t.alternate!==null&&t.alternate.child===t.child,s=0,o=0;if(n)for(var h=t.child;h!==null;)s|=h.lanes|h.childLanes,o|=h.subtreeFlags&65011712,o|=h.flags&65011712,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)s|=h.lanes|h.childLanes,o|=h.subtreeFlags,o|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=o,t.childLanes=s,n}function qb(t,n,s){var o=n.pendingProps;switch(nf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return s=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),qi(bt),et(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Ia(n)?Yi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,sf())),Ze(n),null;case 26:var h=n.type,f=n.memoizedState;return t===null?(Yi(n),f!==null?(Ze(n),_y(n,f)):(Ze(n),Xf(n,h,null,o,s))):f?f!==t.memoizedState?(Yi(n),Ze(n),_y(n,f)):(Ze(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&Yi(n),Ze(n),Xf(n,h,t,o,s)),null;case 27:if(aa(n),s=Se.current,h=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Yi(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return Ze(n),null}t=le.current,Ia(n)?Jm(n):(t=w_(h,o,s),n.stateNode=t,Yi(n))}return Ze(n),null;case 5:if(aa(n),h=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Yi(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return Ze(n),null}if(f=le.current,Ia(n))Jm(n);else{var _=Tc(Se.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?_.createElement("select",{is:o.is}):_.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?_.createElement(h,{is:o.is}):_.createElement(h)}}f[vt]=n,f[Mt]=o;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(Ft(f,h,o),h){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Yi(n)}}return Ze(n),Xf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,s),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Yi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(a(166));if(t=Se.current,Ia(n)){if(t=n.stateNode,s=n.memoizedProps,o=null,h=jt,h!==null)switch(h.tag){case 27:case 5:o=h.memoizedProps}t[vt]=n,t=!!(t.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||p_(t.nodeValue,s)),t||wr(n,!0)}else t=Tc(t).createTextNode(o),t[vt]=n,n.stateNode=t}return Ze(n),null;case 31:if(s=n.memoizedState,t===null||t.memoizedState!==null){if(o=Ia(n),s!==null){if(t===null){if(!o)throw Error(a(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[vt]=n}else Os(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),t=!1}else s=sf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return n.flags&256?(En(n),n):(En(n),null);if((n.flags&128)!==0)throw Error(a(558))}return Ze(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=Ia(n),o!==null&&o.dehydrated!==null){if(t===null){if(!h)throw Error(a(318));if(h=n.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[vt]=n}else Os(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),h=!1}else h=sf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=h),h=!0;if(!h)return n.flags&256?(En(n),n):(En(n),null)}return En(n),(n.flags&128)!==0?(n.lanes=s,n):(s=o!==null,t=t!==null&&t.memoizedState!==null,s&&(o=n.child,h=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(h=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==h&&(o.flags|=2048)),s!==t&&s&&(n.child.flags|=8192),ac(n,n.updateQueue),Ze(n),null);case 4:return et(),t===null&&yd(n.stateNode.containerInfo),Ze(n),null;case 10:return qi(n.type),Ze(n),null;case 19:if(J(pt),o=n.memoizedState,o===null)return Ze(n),null;if(h=(n.flags&128)!==0,f=o.rendering,f===null)if(h)il(o,!1);else{if(lt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Yu(t),f!==null){for(n.flags|=128,il(o,!1),t=f.updateQueue,n.updateQueue=t,ac(n,t),n.subtreeFlags=0,t=s,s=n.child;s!==null;)Km(s,t),s=s.sibling;return ae(pt,pt.current&1|2),Ne&&ji(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&tn()>hc&&(n.flags|=128,h=!0,il(o,!1),n.lanes=4194304)}else{if(!h)if(t=Yu(f),t!==null){if(n.flags|=128,h=!0,t=t.updateQueue,n.updateQueue=t,ac(n,t),il(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Ne)return Ze(n),null}else 2*tn()-o.renderingStartTime>hc&&s!==536870912&&(n.flags|=128,h=!0,il(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=tn(),t.sibling=null,s=pt.current,ae(pt,h?s&1|2:s&1),Ne&&ji(n,o.treeForkCount),t):(Ze(n),null);case 22:case 23:return En(n),_f(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(s&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),s=n.updateQueue,s!==null&&ac(n,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==s&&(n.flags|=2048),t!==null&&J(Ms),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),qi(bt),Ze(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function Fb(t,n){switch(nf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return qi(bt),et(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return aa(n),null;case 31:if(n.memoizedState!==null){if(En(n),n.alternate===null)throw Error(a(340));Os()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(En(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(a(340));Os()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return J(pt),null;case 4:return et(),null;case 10:return qi(n.type),null;case 22:case 23:return En(n),_f(),t!==null&&J(Ms),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return qi(bt),null;case 25:return null;default:return null}}function vy(t,n){switch(nf(n),n.tag){case 3:qi(bt),et();break;case 26:case 27:case 5:aa(n);break;case 4:et();break;case 31:n.memoizedState!==null&&En(n);break;case 13:En(n);break;case 19:J(pt);break;case 10:qi(n.type);break;case 22:case 23:En(n),_f(),t!==null&&J(Ms);break;case 24:qi(bt)}}function rl(t,n){try{var s=n.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var h=o.next;s=h;do{if((s.tag&t)===t){o=void 0;var f=s.create,_=s.inst;o=f(),_.destroy=o}s=s.next}while(s!==h)}}catch(E){Fe(n,n.return,E)}}function Nr(t,n,s){try{var o=n.updateQueue,h=o!==null?o.lastEffect:null;if(h!==null){var f=h.next;o=f;do{if((o.tag&t)===t){var _=o.inst,E=_.destroy;if(E!==void 0){_.destroy=void 0,h=n;var C=s,z=E;try{z()}catch(Y){Fe(h,C,Y)}}}o=o.next}while(o!==f)}}catch(Y){Fe(n,n.return,Y)}}function Ey(t){var n=t.updateQueue;if(n!==null){var s=t.stateNode;try{cg(n,s)}catch(o){Fe(t,t.return,o)}}}function Ty(t,n,s){s.props=Ps(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(o){Fe(t,n,o)}}function sl(t,n){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof s=="function"?t.refCleanup=s(o):s.current=o}}catch(h){Fe(t,n,h)}}function wi(t,n){var s=t.ref,o=t.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(h){Fe(t,n,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){Fe(t,n,h)}else s.current=null}function by(t){var n=t.type,s=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break e;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(h){Fe(t,t.return,h)}}function $f(t,n,s){try{var o=t.stateNode;fS(o,t.type,s,n),o[Mt]=n}catch(h){Fe(t,t.return,h)}}function Sy(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&zr(t.type)||t.tag===4}function Jf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Sy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&zr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zf(t,n,s){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,n):(n=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,n.appendChild(t),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=qn));else if(o!==4&&(o===27&&zr(t.type)&&(s=t.stateNode,n=null),t=t.child,t!==null))for(Zf(t,n,s),t=t.sibling;t!==null;)Zf(t,n,s),t=t.sibling}function oc(t,n,s){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?s.insertBefore(t,n):s.appendChild(t);else if(o!==4&&(o===27&&zr(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(oc(t,n,s),t=t.sibling;t!==null;)oc(t,n,s),t=t.sibling}function Ay(t){var n=t.stateNode,s=t.memoizedProps;try{for(var o=t.type,h=n.attributes;h.length;)n.removeAttributeNode(h[0]);Ft(n,o,s),n[vt]=t,n[Mt]=s}catch(f){Fe(t,t.return,f)}}var Qi=!1,wt=!1,Wf=!1,wy=typeof WeakSet=="function"?WeakSet:Set,Vt=null;function Gb(t,n){if(t=t.containerInfo,Ed=Ic,t=Lm(t),Gh(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var h=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{s.nodeType,f.nodeType}catch{s=null;break e}var _=0,E=-1,C=-1,z=0,Y=0,$=t,B=null;t:for(;;){for(var q;$!==s||h!==0&&$.nodeType!==3||(E=_+h),$!==f||o!==0&&$.nodeType!==3||(C=_+o),$.nodeType===3&&(_+=$.nodeValue.length),(q=$.firstChild)!==null;)B=$,$=q;for(;;){if($===t)break t;if(B===s&&++z===h&&(E=_),B===f&&++Y===o&&(C=_),(q=$.nextSibling)!==null)break;$=B,B=$.parentNode}$=q}s=E===-1||C===-1?null:{start:E,end:C}}else s=null}s=s||{start:0,end:0}}else s=null;for(Td={focusedElem:t,selectionRange:s},Ic=!1,Vt=n;Vt!==null;)if(n=Vt,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Vt=t;else for(;Vt!==null;){switch(n=Vt,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)h=t[s],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,s=n,h=f.memoizedProps,f=f.memoizedState,o=s.stateNode;try{var ue=Ps(s.type,h);t=o.getSnapshotBeforeUpdate(ue,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(ge){Fe(s,s.return,ge)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,s=t.nodeType,s===9)Ad(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ad(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=n.sibling,t!==null){t.return=n.return,Vt=t;break}Vt=n.return}}function Ry(t,n,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:$i(t,s),o&4&&rl(5,s);break;case 1:if($i(t,s),o&4)if(t=s.stateNode,n===null)try{t.componentDidMount()}catch(_){Fe(s,s.return,_)}else{var h=Ps(s.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(h,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Fe(s,s.return,_)}}o&64&&Ey(s),o&512&&sl(s,s.return);break;case 3:if($i(t,s),o&64&&(t=s.updateQueue,t!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{cg(t,n)}catch(_){Fe(s,s.return,_)}}break;case 27:n===null&&o&4&&Ay(s);case 26:case 5:$i(t,s),n===null&&o&4&&by(s),o&512&&sl(s,s.return);break;case 12:$i(t,s);break;case 31:$i(t,s),o&4&&Dy(t,s);break;case 13:$i(t,s),o&4&&Oy(t,s),o&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=eS.bind(null,s),ES(t,s))));break;case 22:if(o=s.memoizedState!==null||Qi,!o){n=n!==null&&n.memoizedState!==null||wt,h=Qi;var f=wt;Qi=o,(wt=n)&&!f?Ji(t,s,(s.subtreeFlags&8772)!==0):$i(t,s),Qi=h,wt=f}break;case 30:break;default:$i(t,s)}}function Cy(t){var n=t.alternate;n!==null&&(t.alternate=null,Cy(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ha(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var nt=null,ln=!1;function Xi(t,n,s){for(s=s.child;s!==null;)Iy(t,n,s),s=s.sibling}function Iy(t,n,s){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(zn,s)}catch{}switch(s.tag){case 26:wt||wi(s,n),Xi(t,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:wt||wi(s,n);var o=nt,h=ln;zr(s.type)&&(nt=s.stateNode,ln=!1),Xi(t,n,s),pl(s.stateNode),nt=o,ln=h;break;case 5:wt||wi(s,n);case 6:if(o=nt,h=ln,nt=null,Xi(t,n,s),nt=o,ln=h,nt!==null)if(ln)try{(nt.nodeType===9?nt.body:nt.nodeName==="HTML"?nt.ownerDocument.body:nt).removeChild(s.stateNode)}catch(f){Fe(s,n,f)}else try{nt.removeChild(s.stateNode)}catch(f){Fe(s,n,f)}break;case 18:nt!==null&&(ln?(t=nt,E_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Xa(t)):E_(nt,s.stateNode));break;case 4:o=nt,h=ln,nt=s.stateNode.containerInfo,ln=!0,Xi(t,n,s),nt=o,ln=h;break;case 0:case 11:case 14:case 15:Nr(2,s,n),wt||Nr(4,s,n),Xi(t,n,s);break;case 1:wt||(wi(s,n),o=s.stateNode,typeof o.componentWillUnmount=="function"&&Ty(s,n,o)),Xi(t,n,s);break;case 21:Xi(t,n,s);break;case 22:wt=(o=wt)||s.memoizedState!==null,Xi(t,n,s),wt=o;break;default:Xi(t,n,s)}}function Dy(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Xa(t)}catch(s){Fe(n,n.return,s)}}}function Oy(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Xa(t)}catch(s){Fe(n,n.return,s)}}function Kb(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new wy),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new wy),n;default:throw Error(a(435,t.tag))}}function lc(t,n){var s=Kb(t);n.forEach(function(o){if(!s.has(o)){s.add(o);var h=tS.bind(null,t,o);o.then(h,h)}})}function un(t,n){var s=n.deletions;if(s!==null)for(var o=0;o<s.length;o++){var h=s[o],f=t,_=n,E=_;e:for(;E!==null;){switch(E.tag){case 27:if(zr(E.type)){nt=E.stateNode,ln=!1;break e}break;case 5:nt=E.stateNode,ln=!1;break e;case 3:case 4:nt=E.stateNode.containerInfo,ln=!0;break e}E=E.return}if(nt===null)throw Error(a(160));Iy(f,_,h),nt=null,ln=!1,f=h.alternate,f!==null&&(f.return=null),h.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)xy(n,t),n=n.sibling}var Xn=null;function xy(t,n){var s=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:un(n,t),cn(t),o&4&&(Nr(3,t,t.return),rl(3,t),Nr(5,t,t.return));break;case 1:un(n,t),cn(t),o&512&&(wt||s===null||wi(s,s.return)),o&64&&Qi&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var h=Xn;if(un(n,t),cn(t),o&512&&(wt||s===null||wi(s,s.return)),o&4){var f=s!==null?s.memoizedState:null;if(o=t.memoizedState,s===null)if(o===null)if(t.stateNode===null){e:{o=t.type,s=t.memoizedProps,h=h.ownerDocument||h;t:switch(o){case"title":f=h.getElementsByTagName("title")[0],(!f||f[hi]||f[vt]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=h.createElement(o),h.head.insertBefore(f,h.querySelector("head > title"))),Ft(f,o,s),f[vt]=t,Et(f),o=f;break e;case"link":var _=x_("link","href",h).get(o+(s.href||""));if(_){for(var E=0;E<_.length;E++)if(f=_[E],f.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&f.getAttribute("rel")===(s.rel==null?null:s.rel)&&f.getAttribute("title")===(s.title==null?null:s.title)&&f.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){_.splice(E,1);break t}}f=h.createElement(o),Ft(f,o,s),h.head.appendChild(f);break;case"meta":if(_=x_("meta","content",h).get(o+(s.content||""))){for(E=0;E<_.length;E++)if(f=_[E],f.getAttribute("content")===(s.content==null?null:""+s.content)&&f.getAttribute("name")===(s.name==null?null:s.name)&&f.getAttribute("property")===(s.property==null?null:s.property)&&f.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&f.getAttribute("charset")===(s.charSet==null?null:s.charSet)){_.splice(E,1);break t}}f=h.createElement(o),Ft(f,o,s),h.head.appendChild(f);break;default:throw Error(a(468,o))}f[vt]=t,Et(f),o=f}t.stateNode=o}else N_(h,t.type,t.stateNode);else t.stateNode=O_(h,o,t.memoizedProps);else f!==o?(f===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):f.count--,o===null?N_(h,t.type,t.stateNode):O_(h,o,t.memoizedProps)):o===null&&t.stateNode!==null&&$f(t,t.memoizedProps,s.memoizedProps)}break;case 27:un(n,t),cn(t),o&512&&(wt||s===null||wi(s,s.return)),s!==null&&o&4&&$f(t,t.memoizedProps,s.memoizedProps);break;case 5:if(un(n,t),cn(t),o&512&&(wt||s===null||wi(s,s.return)),t.flags&32){h=t.stateNode;try{on(h,"")}catch(ue){Fe(t,t.return,ue)}}o&4&&t.stateNode!=null&&(h=t.memoizedProps,$f(t,h,s!==null?s.memoizedProps:h)),o&1024&&(Wf=!0);break;case 6:if(un(n,t),cn(t),o&4){if(t.stateNode===null)throw Error(a(162));o=t.memoizedProps,s=t.stateNode;try{s.nodeValue=o}catch(ue){Fe(t,t.return,ue)}}break;case 3:if(Ac=null,h=Xn,Xn=bc(n.containerInfo),un(n,t),Xn=h,cn(t),o&4&&s!==null&&s.memoizedState.isDehydrated)try{Xa(n.containerInfo)}catch(ue){Fe(t,t.return,ue)}Wf&&(Wf=!1,Ny(t));break;case 4:o=Xn,Xn=bc(t.stateNode.containerInfo),un(n,t),cn(t),Xn=o;break;case 12:un(n,t),cn(t);break;case 31:un(n,t),cn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,lc(t,o)));break;case 13:un(n,t),cn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(cc=tn()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,lc(t,o)));break;case 22:h=t.memoizedState!==null;var C=s!==null&&s.memoizedState!==null,z=Qi,Y=wt;if(Qi=z||h,wt=Y||C,un(n,t),wt=Y,Qi=z,cn(t),o&8192)e:for(n=t.stateNode,n._visibility=h?n._visibility&-2:n._visibility|1,h&&(s===null||C||Qi||wt||zs(t)),s=null,n=t;;){if(n.tag===5||n.tag===26){if(s===null){C=s=n;try{if(f=C.stateNode,h)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{E=C.stateNode;var $=C.memoizedProps.style,B=$!=null&&$.hasOwnProperty("display")?$.display:null;E.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(ue){Fe(C,C.return,ue)}}}else if(n.tag===6){if(s===null){C=n;try{C.stateNode.nodeValue=h?"":C.memoizedProps}catch(ue){Fe(C,C.return,ue)}}}else if(n.tag===18){if(s===null){C=n;try{var q=C.stateNode;h?T_(q,!0):T_(C.stateNode,!1)}catch(ue){Fe(C,C.return,ue)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,lc(t,s))));break;case 19:un(n,t),cn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,lc(t,o)));break;case 30:break;case 21:break;default:un(n,t),cn(t)}}function cn(t){var n=t.flags;if(n&2){try{for(var s,o=t.return;o!==null;){if(Sy(o)){s=o;break}o=o.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var h=s.stateNode,f=Jf(t);oc(t,f,h);break;case 5:var _=s.stateNode;s.flags&32&&(on(_,""),s.flags&=-33);var E=Jf(t);oc(t,E,_);break;case 3:case 4:var C=s.stateNode.containerInfo,z=Jf(t);Zf(t,z,C);break;default:throw Error(a(161))}}catch(Y){Fe(t,t.return,Y)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Ny(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Ny(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function $i(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Ry(t,n.alternate,n),n=n.sibling}function zs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Nr(4,n,n.return),zs(n);break;case 1:wi(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&Ty(n,n.return,s),zs(n);break;case 27:pl(n.stateNode);case 26:case 5:wi(n,n.return),zs(n);break;case 22:n.memoizedState===null&&zs(n);break;case 30:zs(n);break;default:zs(n)}t=t.sibling}}function Ji(t,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,h=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:Ji(h,f,s),rl(4,f);break;case 1:if(Ji(h,f,s),o=f,h=o.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(z){Fe(o,o.return,z)}if(o=f,h=o.updateQueue,h!==null){var E=o.stateNode;try{var C=h.shared.hiddenCallbacks;if(C!==null)for(h.shared.hiddenCallbacks=null,h=0;h<C.length;h++)ug(C[h],E)}catch(z){Fe(o,o.return,z)}}s&&_&64&&Ey(f),sl(f,f.return);break;case 27:Ay(f);case 26:case 5:Ji(h,f,s),s&&o===null&&_&4&&by(f),sl(f,f.return);break;case 12:Ji(h,f,s);break;case 31:Ji(h,f,s),s&&_&4&&Dy(h,f);break;case 13:Ji(h,f,s),s&&_&4&&Oy(h,f);break;case 22:f.memoizedState===null&&Ji(h,f,s),sl(f,f.return);break;case 30:break;default:Ji(h,f,s)}n=n.sibling}}function ed(t,n){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Go(s))}function td(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Go(t))}function $n(t,n,s,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)My(t,n,s,o),n=n.sibling}function My(t,n,s,o){var h=n.flags;switch(n.tag){case 0:case 11:case 15:$n(t,n,s,o),h&2048&&rl(9,n);break;case 1:$n(t,n,s,o);break;case 3:$n(t,n,s,o),h&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Go(t)));break;case 12:if(h&2048){$n(t,n,s,o),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,E=f.onPostCommit;typeof E=="function"&&E(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(C){Fe(n,n.return,C)}}else $n(t,n,s,o);break;case 31:$n(t,n,s,o);break;case 13:$n(t,n,s,o);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?$n(t,n,s,o):al(t,n):f._visibility&2?$n(t,n,s,o):(f._visibility|=2,Pa(t,n,s,o,(n.subtreeFlags&10256)!==0||!1)),h&2048&&ed(_,n);break;case 24:$n(t,n,s,o),h&2048&&td(n.alternate,n);break;default:$n(t,n,s,o)}}function Pa(t,n,s,o,h){for(h=h&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,E=s,C=o,z=_.flags;switch(_.tag){case 0:case 11:case 15:Pa(f,_,E,C,h),rl(8,_);break;case 23:break;case 22:var Y=_.stateNode;_.memoizedState!==null?Y._visibility&2?Pa(f,_,E,C,h):al(f,_):(Y._visibility|=2,Pa(f,_,E,C,h)),h&&z&2048&&ed(_.alternate,_);break;case 24:Pa(f,_,E,C,h),h&&z&2048&&td(_.alternate,_);break;default:Pa(f,_,E,C,h)}n=n.sibling}}function al(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=t,o=n,h=o.flags;switch(o.tag){case 22:al(s,o),h&2048&&ed(o.alternate,o);break;case 24:al(s,o),h&2048&&td(o.alternate,o);break;default:al(s,o)}n=n.sibling}}var ol=8192;function za(t,n,s){if(t.subtreeFlags&ol)for(t=t.child;t!==null;)ky(t,n,s),t=t.sibling}function ky(t,n,s){switch(t.tag){case 26:za(t,n,s),t.flags&ol&&t.memoizedState!==null&&NS(s,Xn,t.memoizedState,t.memoizedProps);break;case 5:za(t,n,s);break;case 3:case 4:var o=Xn;Xn=bc(t.stateNode.containerInfo),za(t,n,s),Xn=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=ol,ol=16777216,za(t,n,s),ol=o):za(t,n,s));break;default:za(t,n,s)}}function Vy(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function ll(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var o=n[s];Vt=o,Ly(o,t)}Vy(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Uy(t),t=t.sibling}function Uy(t){switch(t.tag){case 0:case 11:case 15:ll(t),t.flags&2048&&Nr(9,t,t.return);break;case 3:ll(t);break;case 12:ll(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,uc(t)):ll(t);break;default:ll(t)}}function uc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var o=n[s];Vt=o,Ly(o,t)}Vy(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Nr(8,n,n.return),uc(n);break;case 22:s=n.stateNode,s._visibility&2&&(s._visibility&=-3,uc(n));break;default:uc(n)}t=t.sibling}}function Ly(t,n){for(;Vt!==null;){var s=Vt;switch(s.tag){case 0:case 11:case 15:Nr(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Go(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,Vt=o;else e:for(s=t;Vt!==null;){o=Vt;var h=o.sibling,f=o.return;if(Cy(o),o===s){Vt=null;break e}if(h!==null){h.return=f,Vt=h;break e}Vt=f}}}var Yb={getCacheForType:function(t){var n=Ht(bt),s=n.data.get(t);return s===void 0&&(s=t(),n.data.set(t,s)),s},cacheSignal:function(){return Ht(bt).controller.signal}},Qb=typeof WeakMap=="function"?WeakMap:Map,ze=0,Xe=null,Ce=null,De=0,qe=0,Tn=null,Mr=!1,Ba=!1,nd=!1,Zi=0,lt=0,kr=0,Bs=0,id=0,bn=0,ja=0,ul=null,hn=null,rd=!1,cc=0,Py=0,hc=1/0,fc=null,Vr=null,Nt=0,Ur=null,Ha=null,Wi=0,sd=0,ad=null,zy=null,cl=0,od=null;function Sn(){return(ze&2)!==0&&De!==0?De&-De:Q.T!==null?dd():du()}function By(){if(bn===0)if((De&536870912)===0||Ne){var t=ds;ds<<=1,(ds&3932160)===0&&(ds=262144),bn=t}else bn=536870912;return t=vn.current,t!==null&&(t.flags|=32),bn}function fn(t,n,s){(t===Xe&&(qe===2||qe===9)||t.cancelPendingCommit!==null)&&(qa(t,0),Lr(t,De,bn,!1)),ps(t,s),((ze&2)===0||t!==Xe)&&(t===Xe&&((ze&2)===0&&(Bs|=s),lt===4&&Lr(t,De,bn,!1)),Ri(t))}function jy(t,n,s){if((ze&6)!==0)throw Error(a(327));var o=!s&&(n&127)===0&&(n&t.expiredLanes)===0||Bn(t,n),h=o?Jb(t,n):ud(t,n,!0),f=o;do{if(h===0){Ba&&!o&&Lr(t,n,0,!1);break}else{if(s=t.current.alternate,f&&!Xb(s)){h=ud(t,n,!1),f=!1;continue}if(h===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var E=t;h=ul;var C=E.current.memoizedState.isDehydrated;if(C&&(qa(E,_).flags|=256),_=ud(E,_,!1),_!==2){if(nd&&!C){E.errorRecoveryDisabledLanes|=f,Bs|=f,h=4;break e}f=hn,hn=h,f!==null&&(hn===null?hn=f:hn.push.apply(hn,f))}h=_}if(f=!1,h!==2)continue}}if(h===1){qa(t,0),Lr(t,n,0,!0);break}e:{switch(o=t,f=h,f){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:Lr(o,n,bn,!Mr);break e;case 2:hn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(h=cc+300-tn(),10<h)){if(Lr(o,n,bn,!Mr),li(o,0,!0)!==0)break e;Wi=n,o.timeoutHandle=__(Hy.bind(null,o,s,hn,fc,rd,n,bn,Bs,ja,Mr,f,"Throttled",-0,0),h);break e}Hy(o,s,hn,fc,rd,n,bn,Bs,ja,Mr,f,null,-0,0)}}break}while(!0);Ri(t)}function Hy(t,n,s,o,h,f,_,E,C,z,Y,$,B,q){if(t.timeoutHandle=-1,$=n.subtreeFlags,$&8192||($&16785408)===16785408){$={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qn},ky(n,f,$);var ue=(f&62914560)===f?cc-tn():(f&4194048)===f?Py-tn():0;if(ue=MS($,ue),ue!==null){Wi=f,t.cancelPendingCommit=ue($y.bind(null,t,n,f,s,o,h,_,E,C,Y,$,null,B,q)),Lr(t,f,_,!z);return}}$y(t,n,f,s,o,h,_,E,C)}function Xb(t){for(var n=t;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var h=s[o],f=h.getSnapshot;h=h.value;try{if(!yn(f(),h))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Lr(t,n,s,o){n&=~id,n&=~Bs,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var h=n;0<h;){var f=31-ft(h),_=1<<f;o[f]=-1,h&=~_}s!==0&&ms(t,s,n)}function dc(){return(ze&6)===0?(hl(0),!1):!0}function ld(){if(Ce!==null){if(qe===0)var t=Ce.return;else t=Ce,Hi=xs=null,Af(t),Ma=null,Yo=0,t=Ce;for(;t!==null;)vy(t.alternate,t),t=t.return;Ce=null}}function qa(t,n){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,mS(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Wi=0,ld(),Xe=t,Ce=s=Bi(t.current,null),De=n,qe=0,Tn=null,Mr=!1,Ba=Bn(t,n),nd=!1,ja=bn=id=Bs=kr=lt=0,hn=ul=null,rd=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var h=31-ft(o),f=1<<h;n|=t[h],o&=~f}return Zi=n,ku(),s}function qy(t,n){be=null,Q.H=tl,n===Na||n===Hu?(n=sg(),qe=3):n===ff?(n=sg(),qe=4):qe=n===Bf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Tn=n,Ce===null&&(lt=1,nc(t,Nn(n,t.current)))}function Fy(){var t=vn.current;return t===null?!0:(De&4194048)===De?Un===null:(De&62914560)===De||(De&536870912)!==0?t===Un:!1}function Gy(){var t=Q.H;return Q.H=tl,t===null?tl:t}function Ky(){var t=Q.A;return Q.A=Yb,t}function pc(){lt=4,Mr||(De&4194048)!==De&&vn.current!==null||(Ba=!0),(kr&134217727)===0&&(Bs&134217727)===0||Xe===null||Lr(Xe,De,bn,!1)}function ud(t,n,s){var o=ze;ze|=2;var h=Gy(),f=Ky();(Xe!==t||De!==n)&&(fc=null,qa(t,n)),n=!1;var _=lt;e:do try{if(qe!==0&&Ce!==null){var E=Ce,C=Tn;switch(qe){case 8:ld(),_=6;break e;case 3:case 2:case 9:case 6:vn.current===null&&(n=!0);var z=qe;if(qe=0,Tn=null,Fa(t,E,C,z),s&&Ba){_=0;break e}break;default:z=qe,qe=0,Tn=null,Fa(t,E,C,z)}}$b(),_=lt;break}catch(Y){qy(t,Y)}while(!0);return n&&t.shellSuspendCounter++,Hi=xs=null,ze=o,Q.H=h,Q.A=f,Ce===null&&(Xe=null,De=0,ku()),_}function $b(){for(;Ce!==null;)Yy(Ce)}function Jb(t,n){var s=ze;ze|=2;var o=Gy(),h=Ky();Xe!==t||De!==n?(fc=null,hc=tn()+500,qa(t,n)):Ba=Bn(t,n);e:do try{if(qe!==0&&Ce!==null){n=Ce;var f=Tn;t:switch(qe){case 1:qe=0,Tn=null,Fa(t,n,f,1);break;case 2:case 9:if(ig(f)){qe=0,Tn=null,Qy(n);break}n=function(){qe!==2&&qe!==9||Xe!==t||(qe=7),Ri(t)},f.then(n,n);break e;case 3:qe=7;break e;case 4:qe=5;break e;case 7:ig(f)?(qe=0,Tn=null,Qy(n)):(qe=0,Tn=null,Fa(t,n,f,7));break;case 5:var _=null;switch(Ce.tag){case 26:_=Ce.memoizedState;case 5:case 27:var E=Ce;if(_?M_(_):E.stateNode.complete){qe=0,Tn=null;var C=E.sibling;if(C!==null)Ce=C;else{var z=E.return;z!==null?(Ce=z,mc(z)):Ce=null}break t}}qe=0,Tn=null,Fa(t,n,f,5);break;case 6:qe=0,Tn=null,Fa(t,n,f,6);break;case 8:ld(),lt=6;break e;default:throw Error(a(462))}}Zb();break}catch(Y){qy(t,Y)}while(!0);return Hi=xs=null,Q.H=o,Q.A=h,ze=s,Ce!==null?0:(Xe=null,De=0,ku(),lt)}function Zb(){for(;Ce!==null&&!Ph();)Yy(Ce)}function Yy(t){var n=yy(t.alternate,t,Zi);t.memoizedProps=t.pendingProps,n===null?mc(t):Ce=n}function Qy(t){var n=t,s=n.alternate;switch(n.tag){case 15:case 0:n=hy(s,n,n.pendingProps,n.type,void 0,De);break;case 11:n=hy(s,n,n.pendingProps,n.type.render,n.ref,De);break;case 5:Af(n);default:vy(s,n),n=Ce=Km(n,Zi),n=yy(s,n,Zi)}t.memoizedProps=t.pendingProps,n===null?mc(t):Ce=n}function Fa(t,n,s,o){Hi=xs=null,Af(n),Ma=null,Yo=0;var h=n.return;try{if(Bb(t,h,n,s,De)){lt=1,nc(t,Nn(s,t.current)),Ce=null;return}}catch(f){if(h!==null)throw Ce=h,f;lt=1,nc(t,Nn(s,t.current)),Ce=null;return}n.flags&32768?(Ne||o===1?t=!0:Ba||(De&536870912)!==0?t=!1:(Mr=t=!0,(o===2||o===9||o===3||o===6)&&(o=vn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Xy(n,t)):mc(n)}function mc(t){var n=t;do{if((n.flags&32768)!==0){Xy(n,Mr);return}t=n.return;var s=qb(n.alternate,n,Zi);if(s!==null){Ce=s;return}if(n=n.sibling,n!==null){Ce=n;return}Ce=n=t}while(n!==null);lt===0&&(lt=5)}function Xy(t,n){do{var s=Fb(t.alternate,t);if(s!==null){s.flags&=32767,Ce=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(t=t.sibling,t!==null)){Ce=t;return}Ce=t=s}while(t!==null);lt=6,Ce=null}function $y(t,n,s,o,h,f,_,E,C){t.cancelPendingCommit=null;do gc();while(Nt!==0);if((ze&6)!==0)throw Error(a(327));if(n!==null){if(n===t.current)throw Error(a(177));if(f=n.lanes|n.childLanes,f|=$h,jh(t,s,f,_,E,C),t===Xe&&(Ce=Xe=null,De=0),Ha=n,Ur=t,Wi=s,sd=f,ad=h,zy=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,nS(dr,function(){return t_(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=Q.T,Q.T=null,h=se.p,se.p=2,_=ze,ze|=4;try{Gb(t,n,s)}finally{ze=_,se.p=h,Q.T=o}}Nt=1,Jy(),Zy(),Wy()}}function Jy(){if(Nt===1){Nt=0;var t=Ur,n=Ha,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=Q.T,Q.T=null;var o=se.p;se.p=2;var h=ze;ze|=4;try{xy(n,t);var f=Td,_=Lm(t.containerInfo),E=f.focusedElem,C=f.selectionRange;if(_!==E&&E&&E.ownerDocument&&Um(E.ownerDocument.documentElement,E)){if(C!==null&&Gh(E)){var z=C.start,Y=C.end;if(Y===void 0&&(Y=z),"selectionStart"in E)E.selectionStart=z,E.selectionEnd=Math.min(Y,E.value.length);else{var $=E.ownerDocument||document,B=$&&$.defaultView||window;if(B.getSelection){var q=B.getSelection(),ue=E.textContent.length,ge=Math.min(C.start,ue),Qe=C.end===void 0?ge:Math.min(C.end,ue);!q.extend&&ge>Qe&&(_=Qe,Qe=ge,ge=_);var k=Vm(E,ge),x=Vm(E,Qe);if(k&&x&&(q.rangeCount!==1||q.anchorNode!==k.node||q.anchorOffset!==k.offset||q.focusNode!==x.node||q.focusOffset!==x.offset)){var P=$.createRange();P.setStart(k.node,k.offset),q.removeAllRanges(),ge>Qe?(q.addRange(P),q.extend(x.node,x.offset)):(P.setEnd(x.node,x.offset),q.addRange(P))}}}}for($=[],q=E;q=q.parentNode;)q.nodeType===1&&$.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<$.length;E++){var X=$[E];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}Ic=!!Ed,Td=Ed=null}finally{ze=h,se.p=o,Q.T=s}}t.current=n,Nt=2}}function Zy(){if(Nt===2){Nt=0;var t=Ur,n=Ha,s=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||s){s=Q.T,Q.T=null;var o=se.p;se.p=2;var h=ze;ze|=4;try{Ry(t,n.alternate,n)}finally{ze=h,se.p=o,Q.T=s}}Nt=3}}function Wy(){if(Nt===4||Nt===3){Nt=0,au();var t=Ur,n=Ha,s=Wi,o=zy;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Nt=5:(Nt=0,Ha=Ur=null,e_(t,t.pendingLanes));var h=t.pendingLanes;if(h===0&&(Vr=null),Ui(s),n=n.stateNode,zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(zn,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=Q.T,h=se.p,se.p=2,Q.T=null;try{for(var f=t.onRecoverableError,_=0;_<o.length;_++){var E=o[_];f(E.value,{componentStack:E.stack})}}finally{Q.T=n,se.p=h}}(Wi&3)!==0&&gc(),Ri(t),h=t.pendingLanes,(s&261930)!==0&&(h&42)!==0?t===od?cl++:(cl=0,od=t):cl=0,hl(0)}}function e_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Go(n)))}function gc(){return Jy(),Zy(),Wy(),t_()}function t_(){if(Nt!==5)return!1;var t=Ur,n=sd;sd=0;var s=Ui(Wi),o=Q.T,h=se.p;try{se.p=32>s?32:s,Q.T=null,s=ad,ad=null;var f=Ur,_=Wi;if(Nt=0,Ha=Ur=null,Wi=0,(ze&6)!==0)throw Error(a(331));var E=ze;if(ze|=4,Uy(f.current),My(f,f.current,_,s),ze=E,hl(0,!1),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(zn,f)}catch{}return!0}finally{se.p=h,Q.T=o,e_(t,n)}}function n_(t,n,s){n=Nn(s,n),n=zf(t.stateNode,n,2),t=Dr(t,n,2),t!==null&&(ps(t,2),Ri(t))}function Fe(t,n,s){if(t.tag===3)n_(t,t,s);else for(;n!==null;){if(n.tag===3){n_(n,t,s);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Vr===null||!Vr.has(o))){t=Nn(s,t),s=iy(2),o=Dr(n,s,2),o!==null&&(ry(s,o,n,t),ps(o,2),Ri(o));break}}n=n.return}}function cd(t,n,s){var o=t.pingCache;if(o===null){o=t.pingCache=new Qb;var h=new Set;o.set(n,h)}else h=o.get(n),h===void 0&&(h=new Set,o.set(n,h));h.has(s)||(nd=!0,h.add(s),t=Wb.bind(null,t,n,s),n.then(t,t))}function Wb(t,n,s){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Xe===t&&(De&s)===s&&(lt===4||lt===3&&(De&62914560)===De&&300>tn()-cc?(ze&2)===0&&qa(t,0):id|=s,ja===De&&(ja=0)),Ri(t)}function i_(t,n){n===0&&(n=fu()),t=Is(t,n),t!==null&&(ps(t,n),Ri(t))}function eS(t){var n=t.memoizedState,s=0;n!==null&&(s=n.retryLane),i_(t,s)}function tS(t,n){var s=0;switch(t.tag){case 31:case 13:var o=t.stateNode,h=t.memoizedState;h!==null&&(s=h.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(n),i_(t,s)}function nS(t,n){return xt(t,n)}var yc=null,Ga=null,hd=!1,_c=!1,fd=!1,Pr=0;function Ri(t){t!==Ga&&t.next===null&&(Ga===null?yc=Ga=t:Ga=Ga.next=t),_c=!0,hd||(hd=!0,rS())}function hl(t,n){if(!fd&&_c){fd=!0;do for(var s=!1,o=yc;o!==null;){if(t!==0){var h=o.pendingLanes;if(h===0)var f=0;else{var _=o.suspendedLanes,E=o.pingedLanes;f=(1<<31-ft(42|t)+1)-1,f&=h&~(_&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(s=!0,o_(o,f))}else f=De,f=li(o,o===Xe?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Bn(o,f)||(s=!0,o_(o,f));o=o.next}while(s);fd=!1}}function iS(){r_()}function r_(){_c=hd=!1;var t=0;Pr!==0&&pS()&&(t=Pr);for(var n=tn(),s=null,o=yc;o!==null;){var h=o.next,f=s_(o,n);f===0?(o.next=null,s===null?yc=h:s.next=h,h===null&&(Ga=s)):(s=o,(t!==0||(f&3)!==0)&&(_c=!0)),o=h}Nt!==0&&Nt!==5||hl(t),Pr!==0&&(Pr=0)}function s_(t,n){for(var s=t.suspendedLanes,o=t.pingedLanes,h=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-ft(f),E=1<<_,C=h[_];C===-1?((E&s)===0||(E&o)!==0)&&(h[_]=Bh(E,n)):C<=n&&(t.expiredLanes|=E),f&=~E}if(n=Xe,s=De,s=li(t,t===n?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,s===0||t===n&&(qe===2||qe===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&fr(o),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Bn(t,s)){if(n=s&-s,n===t.callbackPriority)return n;switch(o!==null&&fr(o),Ui(s)){case 2:case 8:s=To;break;case 32:s=dr;break;case 268435456:s=ou;break;default:s=dr}return o=a_.bind(null,t),s=xt(s,o),t.callbackPriority=n,t.callbackNode=s,n}return o!==null&&o!==null&&fr(o),t.callbackPriority=2,t.callbackNode=null,2}function a_(t,n){if(Nt!==0&&Nt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(gc()&&t.callbackNode!==s)return null;var o=De;return o=li(t,t===Xe?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(jy(t,o,n),s_(t,tn()),t.callbackNode!=null&&t.callbackNode===s?a_.bind(null,t):null)}function o_(t,n){if(gc())return null;jy(t,n,!0)}function rS(){gS(function(){(ze&6)!==0?xt(Eo,iS):r_()})}function dd(){if(Pr===0){var t=Oa;t===0&&(t=ai,ai<<=1,(ai&261888)===0&&(ai=256)),Pr=t}return Pr}function l_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ma(""+t)}function u_(t,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,t.id&&s.setAttribute("form",t.id),n.parentNode.insertBefore(s,n),t=new FormData(t),s.parentNode.removeChild(s),t}function sS(t,n,s,o,h){if(n==="submit"&&s&&s.stateNode===h){var f=l_((h[Mt]||null).action),_=o.submitter;_&&(n=(n=_[Mt]||null)?l_(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var E=new vi("action","action",null,o,h);t.push({event:E,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Pr!==0){var C=_?u_(h,_):new FormData(h);Mf(s,{pending:!0,data:C,method:h.method,action:f},null,C)}}else typeof f=="function"&&(E.preventDefault(),C=_?u_(h,_):new FormData(h),Mf(s,{pending:!0,data:C,method:h.method,action:f},f,C))},currentTarget:h}]})}}for(var pd=0;pd<Xh.length;pd++){var md=Xh[pd],aS=md.toLowerCase(),oS=md[0].toUpperCase()+md.slice(1);Qn(aS,"on"+oS)}Qn(Bm,"onAnimationEnd"),Qn(jm,"onAnimationIteration"),Qn(Hm,"onAnimationStart"),Qn("dblclick","onDoubleClick"),Qn("focusin","onFocus"),Qn("focusout","onBlur"),Qn(Sb,"onTransitionRun"),Qn(Ab,"onTransitionStart"),Qn(wb,"onTransitionCancel"),Qn(qm,"onTransitionEnd"),mi("onMouseEnter",["mouseout","mouseover"]),mi("onMouseLeave",["mouseout","mouseover"]),mi("onPointerEnter",["pointerout","pointerover"]),mi("onPointerLeave",["pointerout","pointerover"]),pi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),pi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),pi("onBeforeInput",["compositionend","keypress","textInput","paste"]),pi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),pi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),pi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fl));function c_(t,n){n=(n&4)!==0;for(var s=0;s<t.length;s++){var o=t[s],h=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var _=o.length-1;0<=_;_--){var E=o[_],C=E.instance,z=E.currentTarget;if(E=E.listener,C!==f&&h.isPropagationStopped())break e;f=E,h.currentTarget=z;try{f(h)}catch(Y){Mu(Y)}h.currentTarget=null,f=C}else for(_=0;_<o.length;_++){if(E=o[_],C=E.instance,z=E.currentTarget,E=E.listener,C!==f&&h.isPropagationStopped())break e;f=E,h.currentTarget=z;try{f(h)}catch(Y){Mu(Y)}h.currentTarget=null,f=C}}}}function Ie(t,n){var s=n[ca];s===void 0&&(s=n[ca]=new Set);var o=t+"__bubble";s.has(o)||(h_(n,t,2,!1),s.add(o))}function gd(t,n,s){var o=0;n&&(o|=4),h_(s,t,o,n)}var vc="_reactListening"+Math.random().toString(36).slice(2);function yd(t){if(!t[vc]){t[vc]=!0,Ao.forEach(function(s){s!=="selectionchange"&&(lS.has(s)||gd(s,!1,t),gd(s,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[vc]||(n[vc]=!0,gd("selectionchange",!1,n))}}function h_(t,n,s,o){switch(B_(n)){case 2:var h=US;break;case 8:h=LS;break;default:h=Nd}s=h.bind(null,n,s,t),h=void 0,!Es||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(h=!0),o?h!==void 0?t.addEventListener(n,s,{capture:!0,passive:h}):t.addEventListener(n,s,!0):h!==void 0?t.addEventListener(n,s,{passive:h}):t.addEventListener(n,s,!1)}function _d(t,n,s,o,h){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var E=o.stateNode.containerInfo;if(E===h)break;if(_===4)for(_=o.return;_!==null;){var C=_.tag;if((C===3||C===4)&&_.stateNode.containerInfo===h)return;_=_.return}for(;E!==null;){if(_=fi(E),_===null)return;if(C=_.tag,C===5||C===6||C===26||C===27){o=f=_;continue e}E=E.parentNode}}o=o.return}vr(function(){var z=f,Y=In(s),$=[];e:{var B=Fm.get(t);if(B!==void 0){var q=vi,ue=t;switch(t){case"keypress":if(bs(s)===0)break e;case"keydown":case"keyup":q=Ou;break;case"focusin":ue="focus",q=As;break;case"focusout":ue="blur",q=As;break;case"beforeblur":case"afterblur":q=As;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=Lo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=Tu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=p;break;case Bm:case jm:case Hm:q=Su;break;case qm:q=b;break;case"scroll":case"scrollend":q=Uo;break;case"wheel":q=j;break;case"copy":case"cut":case"paste":q=Au;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=zi;break;case"toggle":case"beforetoggle":q=Te}var ge=(n&4)!==0,Qe=!ge&&(t==="scroll"||t==="scrollend"),k=ge?B!==null?B+"Capture":null:B;ge=[];for(var x=z,P;x!==null;){var X=x;if(P=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||P===null||k===null||(X=Fn(x,k),X!=null&&ge.push(dl(x,X,P))),Qe)break;x=x.return}0<ge.length&&(B=new q(B,ue,null,s,Y),$.push({event:B,listeners:ge}))}}if((n&7)===0){e:{if(B=t==="mouseover"||t==="pointerover",q=t==="mouseout"||t==="pointerout",B&&s!==Mo&&(ue=s.relatedTarget||s.fromElement)&&(fi(ue)||ue[ci]))break e;if((q||B)&&(B=Y.window===Y?Y:(B=Y.ownerDocument)?B.defaultView||B.parentWindow:window,q?(ue=s.relatedTarget||s.toElement,q=z,ue=ue?fi(ue):null,ue!==null&&(Qe=c(ue),ge=ue.tag,ue!==Qe||ge!==5&&ge!==27&&ge!==6)&&(ue=null)):(q=null,ue=z),q!==ue)){if(ge=Lo,X="onMouseLeave",k="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(ge=zi,X="onPointerLeave",k="onPointerEnter",x="pointer"),Qe=q==null?B:mn(q),P=ue==null?B:mn(ue),B=new ge(X,x+"leave",q,s,Y),B.target=Qe,B.relatedTarget=P,X=null,fi(Y)===z&&(ge=new ge(k,x+"enter",ue,s,Y),ge.target=P,ge.relatedTarget=Qe,X=ge),Qe=X,q&&ue)t:{for(ge=uS,k=q,x=ue,P=0,X=k;X;X=ge(X))P++;X=0;for(var fe=x;fe;fe=ge(fe))X++;for(;0<P-X;)k=ge(k),P--;for(;0<X-P;)x=ge(x),X--;for(;P--;){if(k===x||x!==null&&k===x.alternate){ge=k;break t}k=ge(k),x=ge(x)}ge=null}else ge=null;q!==null&&f_($,B,q,ge,!1),ue!==null&&Qe!==null&&f_($,Qe,ue,ge,!0)}}e:{if(B=z?mn(z):window,q=B.nodeName&&B.nodeName.toLowerCase(),q==="select"||q==="input"&&B.type==="file")var Ue=Dm;else if(Cm(B))if(Om)Ue=Eb;else{Ue=_b;var ce=yb}else q=B.nodeName,!q||q.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?z&&pa(z.elementType)&&(Ue=Dm):Ue=vb;if(Ue&&(Ue=Ue(t,z))){Im($,Ue,s,Y);break e}ce&&ce(t,B,z),t==="focusout"&&z&&B.type==="number"&&z.memoizedProps.value!=null&&Oo(B,"number",B.value)}switch(ce=z?mn(z):window,t){case"focusin":(Cm(ce)||ce.contentEditable==="true")&&(ba=ce,Kh=z,Ho=null);break;case"focusout":Ho=Kh=ba=null;break;case"mousedown":Yh=!0;break;case"contextmenu":case"mouseup":case"dragend":Yh=!1,Pm($,s,Y);break;case"selectionchange":if(bb)break;case"keydown":case"keyup":Pm($,s,Y)}var Ae;if(Pe)e:{switch(t){case"compositionstart":var Oe="onCompositionStart";break e;case"compositionend":Oe="onCompositionEnd";break e;case"compositionupdate":Oe="onCompositionUpdate";break e}Oe=void 0}else Ta?ws(t,s)&&(Oe="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Oe="onCompositionStart");Oe&&(bi&&s.locale!=="ko"&&(Ta||Oe!=="onCompositionStart"?Oe==="onCompositionEnd"&&Ta&&(Ae=Vo()):(_i=Y,ko="value"in _i?_i.value:_i.textContent,Ta=!0)),ce=Ec(z,Oe),0<ce.length&&(Oe=new Ti(Oe,t,null,s,Y),$.push({event:Oe,listeners:ce}),Ae?Oe.data=Ae:(Ae=Ea(s),Ae!==null&&(Oe.data=Ae)))),(Ae=On?db(t,s):pb(t,s))&&(Oe=Ec(z,"onBeforeInput"),0<Oe.length&&(ce=new Ti("onBeforeInput","beforeinput",null,s,Y),$.push({event:ce,listeners:Oe}),ce.data=Ae)),sS($,t,z,s,Y)}c_($,n)})}function dl(t,n,s){return{instance:t,listener:n,currentTarget:s}}function Ec(t,n){for(var s=n+"Capture",o=[];t!==null;){var h=t,f=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||f===null||(h=Fn(t,s),h!=null&&o.unshift(dl(t,h,f)),h=Fn(t,n),h!=null&&o.push(dl(t,h,f))),t.tag===3)return o;t=t.return}return[]}function uS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function f_(t,n,s,o,h){for(var f=n._reactName,_=[];s!==null&&s!==o;){var E=s,C=E.alternate,z=E.stateNode;if(E=E.tag,C!==null&&C===o)break;E!==5&&E!==26&&E!==27||z===null||(C=z,h?(z=Fn(s,f),z!=null&&_.unshift(dl(s,z,C))):h||(z=Fn(s,f),z!=null&&_.push(dl(s,z,C)))),s=s.return}_.length!==0&&t.push({event:n,listeners:_})}var cS=/\r\n?/g,hS=/\u0000|\uFFFD/g;function d_(t){return(typeof t=="string"?t:""+t).replace(cS,`
`).replace(hS,"")}function p_(t,n){return n=d_(n),d_(t)===n}function Ye(t,n,s,o,h,f){switch(s){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||on(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&on(t,""+o);break;case"className":gn(t,"class",o);break;case"tabIndex":gn(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":gn(t,s,o);break;case"style":No(t,o,f);break;case"data":if(n!=="object"){gn(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||s!=="href")){t.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(s);break}o=ma(""+o),t.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(s==="formAction"?(n!=="input"&&Ye(t,n,"name",h.name,h,null),Ye(t,n,"formEncType",h.formEncType,h,null),Ye(t,n,"formMethod",h.formMethod,h,null),Ye(t,n,"formTarget",h.formTarget,h,null)):(Ye(t,n,"encType",h.encType,h,null),Ye(t,n,"method",h.method,h,null),Ye(t,n,"target",h.target,h,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(s);break}o=ma(""+o),t.setAttribute(s,o);break;case"onClick":o!=null&&(t.onclick=qn);break;case"onScroll":o!=null&&Ie("scroll",t);break;case"onScrollEnd":o!=null&&Ie("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(h.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}s=ma(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,""+o):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":o===!0?t.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,o):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(s,o):t.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(s):t.setAttribute(s,o);break;case"popover":Ie("beforetoggle",t),Ie("toggle",t),fa(t,"popover",o);break;case"xlinkActuate":Tt(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Tt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Tt(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Tt(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Tt(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Tt(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Tt(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Tt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Tt(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":fa(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Eu.get(s)||s,fa(t,s,o))}}function vd(t,n,s,o,h,f){switch(s){case"style":No(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(h.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof o=="string"?on(t,o):(typeof o=="number"||typeof o=="bigint")&&on(t,""+o);break;case"onScroll":o!=null&&Ie("scroll",t);break;case"onScrollEnd":o!=null&&Ie("scrollend",t);break;case"onClick":o!=null&&(t.onclick=qn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!wo.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),n=s.slice(2,h?s.length-7:void 0),f=t[Mt]||null,f=f!=null?f[s]:null,typeof f=="function"&&t.removeEventListener(n,f,h),typeof o=="function")){typeof f!="function"&&f!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(n,o,h);break e}s in t?t[s]=o:o===!0?t.setAttribute(s,""):fa(t,s,o)}}}function Ft(t,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ie("error",t),Ie("load",t);var o=!1,h=!1,f;for(f in s)if(s.hasOwnProperty(f)){var _=s[f];if(_!=null)switch(f){case"src":o=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Ye(t,n,f,_,s,null)}}h&&Ye(t,n,"srcSet",s.srcSet,s,null),o&&Ye(t,n,"src",s.src,s,null);return;case"input":Ie("invalid",t);var E=f=_=h=null,C=null,z=null;for(o in s)if(s.hasOwnProperty(o)){var Y=s[o];if(Y!=null)switch(o){case"name":h=Y;break;case"type":_=Y;break;case"checked":C=Y;break;case"defaultChecked":z=Y;break;case"value":f=Y;break;case"defaultValue":E=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(a(137,n));break;default:Ye(t,n,o,Y,s,null)}}yu(t,f,E,C,z,_,h,!1);return;case"select":Ie("invalid",t),o=_=f=null;for(h in s)if(s.hasOwnProperty(h)&&(E=s[h],E!=null))switch(h){case"value":f=E;break;case"defaultValue":_=E;break;case"multiple":o=E;default:Ye(t,n,h,E,s,null)}n=f,s=_,t.multiple=!!o,n!=null?mr(t,!!o,n,!1):s!=null&&mr(t,!!o,s,!0);return;case"textarea":Ie("invalid",t),f=h=o=null;for(_ in s)if(s.hasOwnProperty(_)&&(E=s[_],E!=null))switch(_){case"value":o=E;break;case"defaultValue":h=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(a(91));break;default:Ye(t,n,_,E,s,null)}gr(t,o,h,f);return;case"option":for(C in s)if(s.hasOwnProperty(C)&&(o=s[C],o!=null))switch(C){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ye(t,n,C,o,s,null)}return;case"dialog":Ie("beforetoggle",t),Ie("toggle",t),Ie("cancel",t),Ie("close",t);break;case"iframe":case"object":Ie("load",t);break;case"video":case"audio":for(o=0;o<fl.length;o++)Ie(fl[o],t);break;case"image":Ie("error",t),Ie("load",t);break;case"details":Ie("toggle",t);break;case"embed":case"source":case"link":Ie("error",t),Ie("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in s)if(s.hasOwnProperty(z)&&(o=s[z],o!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Ye(t,n,z,o,s,null)}return;default:if(pa(n)){for(Y in s)s.hasOwnProperty(Y)&&(o=s[Y],o!==void 0&&vd(t,n,Y,o,s,void 0));return}}for(E in s)s.hasOwnProperty(E)&&(o=s[E],o!=null&&Ye(t,n,E,o,s,null))}function fS(t,n,s,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,f=null,_=null,E=null,C=null,z=null,Y=null;for(q in s){var $=s[q];if(s.hasOwnProperty(q)&&$!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":C=$;default:o.hasOwnProperty(q)||Ye(t,n,q,null,o,$)}}for(var B in o){var q=o[B];if($=s[B],o.hasOwnProperty(B)&&(q!=null||$!=null))switch(B){case"type":f=q;break;case"name":h=q;break;case"checked":z=q;break;case"defaultChecked":Y=q;break;case"value":_=q;break;case"defaultValue":E=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(a(137,n));break;default:q!==$&&Ye(t,n,B,q,o,$)}}da(t,_,E,C,z,Y,f,h);return;case"select":q=_=E=B=null;for(f in s)if(C=s[f],s.hasOwnProperty(f)&&C!=null)switch(f){case"value":break;case"multiple":q=C;default:o.hasOwnProperty(f)||Ye(t,n,f,null,o,C)}for(h in o)if(f=o[h],C=s[h],o.hasOwnProperty(h)&&(f!=null||C!=null))switch(h){case"value":B=f;break;case"defaultValue":E=f;break;case"multiple":_=f;default:f!==C&&Ye(t,n,h,f,o,C)}n=E,s=_,o=q,B!=null?mr(t,!!s,B,!1):!!o!=!!s&&(n!=null?mr(t,!!s,n,!0):mr(t,!!s,s?[]:"",!1));return;case"textarea":q=B=null;for(E in s)if(h=s[E],s.hasOwnProperty(E)&&h!=null&&!o.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Ye(t,n,E,null,o,h)}for(_ in o)if(h=o[_],f=s[_],o.hasOwnProperty(_)&&(h!=null||f!=null))switch(_){case"value":B=h;break;case"defaultValue":q=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==f&&Ye(t,n,_,h,o,f)}_u(t,B,q);return;case"option":for(var ue in s)if(B=s[ue],s.hasOwnProperty(ue)&&B!=null&&!o.hasOwnProperty(ue))switch(ue){case"selected":t.selected=!1;break;default:Ye(t,n,ue,null,o,B)}for(C in o)if(B=o[C],q=s[C],o.hasOwnProperty(C)&&B!==q&&(B!=null||q!=null))switch(C){case"selected":t.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:Ye(t,n,C,B,o,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ge in s)B=s[ge],s.hasOwnProperty(ge)&&B!=null&&!o.hasOwnProperty(ge)&&Ye(t,n,ge,null,o,B);for(z in o)if(B=o[z],q=s[z],o.hasOwnProperty(z)&&B!==q&&(B!=null||q!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(a(137,n));break;default:Ye(t,n,z,B,o,q)}return;default:if(pa(n)){for(var Qe in s)B=s[Qe],s.hasOwnProperty(Qe)&&B!==void 0&&!o.hasOwnProperty(Qe)&&vd(t,n,Qe,void 0,o,B);for(Y in o)B=o[Y],q=s[Y],!o.hasOwnProperty(Y)||B===q||B===void 0&&q===void 0||vd(t,n,Y,B,o,q);return}}for(var k in s)B=s[k],s.hasOwnProperty(k)&&B!=null&&!o.hasOwnProperty(k)&&Ye(t,n,k,null,o,B);for($ in o)B=o[$],q=s[$],!o.hasOwnProperty($)||B===q||B==null&&q==null||Ye(t,n,$,B,o,q)}function m_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function dS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,s=performance.getEntriesByType("resource"),o=0;o<s.length;o++){var h=s[o],f=h.transferSize,_=h.initiatorType,E=h.duration;if(f&&E&&m_(_)){for(_=0,E=h.responseEnd,o+=1;o<s.length;o++){var C=s[o],z=C.startTime;if(z>E)break;var Y=C.transferSize,$=C.initiatorType;Y&&m_($)&&(C=C.responseEnd,_+=Y*(C<E?1:(E-z)/(C-z)))}if(--o,n+=8*(f+_)/(h.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Ed=null,Td=null;function Tc(t){return t.nodeType===9?t:t.ownerDocument}function g_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function y_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function bd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Sd=null;function pS(){var t=window.event;return t&&t.type==="popstate"?t===Sd?!1:(Sd=t,!0):(Sd=null,!1)}var __=typeof setTimeout=="function"?setTimeout:void 0,mS=typeof clearTimeout=="function"?clearTimeout:void 0,v_=typeof Promise=="function"?Promise:void 0,gS=typeof queueMicrotask=="function"?queueMicrotask:typeof v_<"u"?function(t){return v_.resolve(null).then(t).catch(yS)}:__;function yS(t){setTimeout(function(){throw t})}function zr(t){return t==="head"}function E_(t,n){var s=n,o=0;do{var h=s.nextSibling;if(t.removeChild(s),h&&h.nodeType===8)if(s=h.data,s==="/$"||s==="/&"){if(o===0){t.removeChild(h),Xa(n);return}o--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")o++;else if(s==="html")pl(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,pl(s);for(var f=s.firstChild;f;){var _=f.nextSibling,E=f.nodeName;f[hi]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||s.removeChild(f),f=_}}else s==="body"&&pl(t.ownerDocument.body);s=h}while(s);Xa(n)}function T_(t,n){var s=t;t=0;do{var o=s.nextSibling;if(s.nodeType===1?n?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(n?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),o&&o.nodeType===8)if(s=o.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=o}while(s)}function Ad(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Ad(s),ha(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function _S(t,n,s,o){for(;t.nodeType===1;){var h=s;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[hi])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==h.rel||t.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Ln(t.nextSibling),t===null)break}return null}function vS(t,n,s){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Ln(t.nextSibling),t===null))return null;return t}function b_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ln(t.nextSibling),t===null))return null;return t}function wd(t){return t.data==="$?"||t.data==="$~"}function Rd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function ES(t,n){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||s.readyState!=="loading")n();else{var o=function(){n(),s.removeEventListener("DOMContentLoaded",o)};s.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Ln(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Cd=null;function S_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(n===0)return Ln(t.nextSibling);n--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||n++}t=t.nextSibling}return null}function A_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(n===0)return t;n--}else s!=="/$"&&s!=="/&"||n++}t=t.previousSibling}return null}function w_(t,n,s){switch(n=Tc(s),t){case"html":if(t=n.documentElement,!t)throw Error(a(452));return t;case"head":if(t=n.head,!t)throw Error(a(453));return t;case"body":if(t=n.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function pl(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ha(t)}var Pn=new Map,R_=new Set;function bc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var er=se.d;se.d={f:TS,r:bS,D:SS,C:AS,L:wS,m:RS,X:IS,S:CS,M:DS};function TS(){var t=er.f(),n=dc();return t||n}function bS(t){var n=Cn(t);n!==null&&n.tag===5&&n.type==="form"?qg(n):er.r(t)}var Ka=typeof document>"u"?null:document;function C_(t,n,s){var o=Ka;if(o&&typeof n=="string"&&n){var h=an(n);h='link[rel="'+t+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),R_.has(h)||(R_.add(h),t={rel:t,crossOrigin:s,href:n},o.querySelector(h)===null&&(n=o.createElement("link"),Ft(n,"link",t),Et(n),o.head.appendChild(n)))}}function SS(t){er.D(t),C_("dns-prefetch",t,null)}function AS(t,n){er.C(t,n),C_("preconnect",t,n)}function wS(t,n,s){er.L(t,n,s);var o=Ka;if(o&&t&&n){var h='link[rel="preload"][as="'+an(n)+'"]';n==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+an(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+an(s.imageSizes)+'"]')):h+='[href="'+an(t)+'"]';var f=h;switch(n){case"style":f=Ya(t);break;case"script":f=Qa(t)}Pn.has(f)||(t=S({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:t,as:n},s),Pn.set(f,t),o.querySelector(h)!==null||n==="style"&&o.querySelector(ml(f))||n==="script"&&o.querySelector(gl(f))||(n=o.createElement("link"),Ft(n,"link",t),Et(n),o.head.appendChild(n)))}}function RS(t,n){er.m(t,n);var s=Ka;if(s&&t){var o=n&&typeof n.as=="string"?n.as:"script",h='link[rel="modulepreload"][as="'+an(o)+'"][href="'+an(t)+'"]',f=h;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Qa(t)}if(!Pn.has(f)&&(t=S({rel:"modulepreload",href:t},n),Pn.set(f,t),s.querySelector(h)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(gl(f)))return}o=s.createElement("link"),Ft(o,"link",t),Et(o),s.head.appendChild(o)}}}function CS(t,n,s){er.S(t,n,s);var o=Ka;if(o&&t){var h=di(o).hoistableStyles,f=Ya(t);n=n||"default";var _=h.get(f);if(!_){var E={loading:0,preload:null};if(_=o.querySelector(ml(f)))E.loading=5;else{t=S({rel:"stylesheet",href:t,"data-precedence":n},s),(s=Pn.get(f))&&Id(t,s);var C=_=o.createElement("link");Et(C),Ft(C,"link",t),C._p=new Promise(function(z,Y){C.onload=z,C.onerror=Y}),C.addEventListener("load",function(){E.loading|=1}),C.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Sc(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:E},h.set(f,_)}}}function IS(t,n){er.X(t,n);var s=Ka;if(s&&t){var o=di(s).hoistableScripts,h=Qa(t),f=o.get(h);f||(f=s.querySelector(gl(h)),f||(t=S({src:t,async:!0},n),(n=Pn.get(h))&&Dd(t,n),f=s.createElement("script"),Et(f),Ft(f,"link",t),s.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(h,f))}}function DS(t,n){er.M(t,n);var s=Ka;if(s&&t){var o=di(s).hoistableScripts,h=Qa(t),f=o.get(h);f||(f=s.querySelector(gl(h)),f||(t=S({src:t,async:!0,type:"module"},n),(n=Pn.get(h))&&Dd(t,n),f=s.createElement("script"),Et(f),Ft(f,"link",t),s.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(h,f))}}function I_(t,n,s,o){var h=(h=Se.current)?bc(h):null;if(!h)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=Ya(s.href),s=di(h).hoistableStyles,o=s.get(n),o||(o={type:"style",instance:null,count:0,state:null},s.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Ya(s.href);var f=di(h).hoistableStyles,_=f.get(t);if(_||(h=h.ownerDocument||h,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=h.querySelector(ml(t)))&&!f._p&&(_.instance=f,_.state.loading=5),Pn.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Pn.set(t,s),f||OS(h,t,s,_.state))),n&&o===null)throw Error(a(528,""));return _}if(n&&o!==null)throw Error(a(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Qa(s),s=di(h).hoistableScripts,o=s.get(n),o||(o={type:"script",instance:null,count:0,state:null},s.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function Ya(t){return'href="'+an(t)+'"'}function ml(t){return'link[rel="stylesheet"]['+t+"]"}function D_(t){return S({},t,{"data-precedence":t.precedence,precedence:null})}function OS(t,n,s,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Ft(n,"link",s),Et(n),t.head.appendChild(n))}function Qa(t){return'[src="'+an(t)+'"]'}function gl(t){return"script[async]"+t}function O_(t,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+an(s.href)+'"]');if(o)return n.instance=o,Et(o),o;var h=S({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),Et(o),Ft(o,"style",h),Sc(o,s.precedence,t),n.instance=o;case"stylesheet":h=Ya(s.href);var f=t.querySelector(ml(h));if(f)return n.state.loading|=4,n.instance=f,Et(f),f;o=D_(s),(h=Pn.get(h))&&Id(o,h),f=(t.ownerDocument||t).createElement("link"),Et(f);var _=f;return _._p=new Promise(function(E,C){_.onload=E,_.onerror=C}),Ft(f,"link",o),n.state.loading|=4,Sc(f,s.precedence,t),n.instance=f;case"script":return f=Qa(s.src),(h=t.querySelector(gl(f)))?(n.instance=h,Et(h),h):(o=s,(h=Pn.get(f))&&(o=S({},s),Dd(o,h)),t=t.ownerDocument||t,h=t.createElement("script"),Et(h),Ft(h,"link",o),t.head.appendChild(h),n.instance=h);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Sc(o,s.precedence,t));return n.instance}function Sc(t,n,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=o.length?o[o.length-1]:null,f=h,_=0;_<o.length;_++){var E=o[_];if(E.dataset.precedence===n)f=E;else if(f!==h)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(t,n.firstChild))}function Id(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Dd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Ac=null;function x_(t,n,s){if(Ac===null){var o=new Map,h=Ac=new Map;h.set(s,o)}else h=Ac,o=h.get(s),o||(o=new Map,h.set(s,o));if(o.has(t))return o;for(o.set(t,null),s=s.getElementsByTagName(t),h=0;h<s.length;h++){var f=s[h];if(!(f[hi]||f[vt]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var E=o.get(_);E?E.push(f):o.set(_,[f])}}return o}function N_(t,n,s){t=t.ownerDocument||t,t.head.insertBefore(s,n==="title"?t.querySelector("head > title"):null)}function xS(t,n,s){if(s===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function M_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function NS(t,n,s,o){if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var h=Ya(o.href),f=n.querySelector(ml(h));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=wc.bind(t),n.then(t,t)),s.state.loading|=4,s.instance=f,Et(f);return}f=n.ownerDocument||n,o=D_(o),(h=Pn.get(h))&&Id(o,h),f=f.createElement("link"),Et(f);var _=f;_._p=new Promise(function(E,C){_.onload=E,_.onerror=C}),Ft(f,"link",o),s.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,n),(n=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=wc.bind(t),n.addEventListener("load",s),n.addEventListener("error",s))}}var Od=0;function MS(t,n){return t.stylesheets&&t.count===0&&Cc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var o=setTimeout(function(){if(t.stylesheets&&Cc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Od===0&&(Od=62500*dS());var h=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Cc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Od?50:800)+n);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(h)}}:null}function wc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Cc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Rc=null;function Cc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Rc=new Map,n.forEach(kS,t),Rc=null,wc.call(t))}function kS(t,n){if(!(n.state.loading&4)){var s=Rc.get(t);if(s)var o=s.get(null);else{s=new Map,Rc.set(t,s);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<h.length;f++){var _=h[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(s.set(_.dataset.precedence,_),o=_)}o&&s.set(null,o)}h=n.instance,_=h.getAttribute("data-precedence"),f=s.get(_)||o,f===o&&s.set(null,h),s.set(_,h),this.count++,o=wc.bind(this),h.addEventListener("load",o),h.addEventListener("error",o),f?f.parentNode.insertBefore(h,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),n.state.loading|=4}}var yl={$$typeof:re,Provider:null,Consumer:null,_currentValue:pe,_currentValue2:pe,_threadCount:0};function VS(t,n,s,o,h,f,_,E,C){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ui(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ui(0),this.hiddenUpdates=ui(null),this.identifierPrefix=o,this.onUncaughtError=h,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=C,this.incompleteTransitions=new Map}function k_(t,n,s,o,h,f,_,E,C,z,Y,$){return t=new VS(t,n,s,_,C,z,Y,$,E),n=1,f===!0&&(n|=24),f=_n(3,null,null,n),t.current=f,f.stateNode=t,n=uf(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:s,cache:n},df(f),t}function V_(t){return t?(t=wa,t):wa}function U_(t,n,s,o,h,f){h=V_(h),o.context===null?o.context=h:o.pendingContext=h,o=Ir(n),o.payload={element:s},f=f===void 0?null:f,f!==null&&(o.callback=f),s=Dr(t,o,n),s!==null&&(fn(s,t,n),Xo(s,t,n))}function L_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<n?s:n}}function xd(t,n){L_(t,n),(t=t.alternate)&&L_(t,n)}function P_(t){if(t.tag===13||t.tag===31){var n=Is(t,67108864);n!==null&&fn(n,t,67108864),xd(t,67108864)}}function z_(t){if(t.tag===13||t.tag===31){var n=Sn();n=gs(n);var s=Is(t,n);s!==null&&fn(s,t,n),xd(t,n)}}var Ic=!0;function US(t,n,s,o){var h=Q.T;Q.T=null;var f=se.p;try{se.p=2,Nd(t,n,s,o)}finally{se.p=f,Q.T=h}}function LS(t,n,s,o){var h=Q.T;Q.T=null;var f=se.p;try{se.p=8,Nd(t,n,s,o)}finally{se.p=f,Q.T=h}}function Nd(t,n,s,o){if(Ic){var h=Md(o);if(h===null)_d(t,n,o,Dc,s),j_(t,o);else if(zS(h,t,n,s,o))o.stopPropagation();else if(j_(t,o),n&4&&-1<PS.indexOf(t)){for(;h!==null;){var f=Cn(h);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=oi(f.pendingLanes);if(_!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;_;){var C=1<<31-ft(_);E.entanglements[1]|=C,_&=~C}Ri(f),(ze&6)===0&&(hc=tn()+500,hl(0))}}break;case 31:case 13:E=Is(f,2),E!==null&&fn(E,f,2),dc(),xd(f,2)}if(f=Md(o),f===null&&_d(t,n,o,Dc,s),f===h)break;h=f}h!==null&&o.stopPropagation()}else _d(t,n,o,null,s)}}function Md(t){return t=In(t),kd(t)}var Dc=null;function kd(t){if(Dc=null,t=fi(t),t!==null){var n=c(t);if(n===null)t=null;else{var s=n.tag;if(s===13){if(t=d(n),t!==null)return t;t=null}else if(s===31){if(t=m(n),t!==null)return t;t=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Dc=t,null}function B_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(fs()){case Eo:return 2;case To:return 8;case dr:case zh:return 32;case ou:return 268435456;default:return 32}default:return 32}}var Vd=!1,Br=null,jr=null,Hr=null,_l=new Map,vl=new Map,qr=[],PS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function j_(t,n){switch(t){case"focusin":case"focusout":Br=null;break;case"dragenter":case"dragleave":jr=null;break;case"mouseover":case"mouseout":Hr=null;break;case"pointerover":case"pointerout":_l.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":vl.delete(n.pointerId)}}function El(t,n,s,o,h,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:s,eventSystemFlags:o,nativeEvent:f,targetContainers:[h]},n!==null&&(n=Cn(n),n!==null&&P_(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,h!==null&&n.indexOf(h)===-1&&n.push(h),t)}function zS(t,n,s,o,h){switch(n){case"focusin":return Br=El(Br,t,n,s,o,h),!0;case"dragenter":return jr=El(jr,t,n,s,o,h),!0;case"mouseover":return Hr=El(Hr,t,n,s,o,h),!0;case"pointerover":var f=h.pointerId;return _l.set(f,El(_l.get(f)||null,t,n,s,o,h)),!0;case"gotpointercapture":return f=h.pointerId,vl.set(f,El(vl.get(f)||null,t,n,s,o,h)),!0}return!1}function H_(t){var n=fi(t.target);if(n!==null){var s=c(n);if(s!==null){if(n=s.tag,n===13){if(n=d(s),n!==null){t.blockedOn=n,jn(t.priority,function(){z_(s)});return}}else if(n===31){if(n=m(s),n!==null){t.blockedOn=n,jn(t.priority,function(){z_(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Oc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var s=Md(t.nativeEvent);if(s===null){s=t.nativeEvent;var o=new s.constructor(s.type,s);Mo=o,s.target.dispatchEvent(o),Mo=null}else return n=Cn(s),n!==null&&P_(n),t.blockedOn=s,!1;n.shift()}return!0}function q_(t,n,s){Oc(t)&&s.delete(n)}function BS(){Vd=!1,Br!==null&&Oc(Br)&&(Br=null),jr!==null&&Oc(jr)&&(jr=null),Hr!==null&&Oc(Hr)&&(Hr=null),_l.forEach(q_),vl.forEach(q_)}function xc(t,n){t.blockedOn===n&&(t.blockedOn=null,Vd||(Vd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,BS)))}var Nc=null;function F_(t){Nc!==t&&(Nc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Nc===t&&(Nc=null);for(var n=0;n<t.length;n+=3){var s=t[n],o=t[n+1],h=t[n+2];if(typeof o!="function"){if(kd(o||s)===null)continue;break}var f=Cn(s);f!==null&&(t.splice(n,3),n-=3,Mf(f,{pending:!0,data:h,method:s.method,action:o},o,h))}}))}function Xa(t){function n(C){return xc(C,t)}Br!==null&&xc(Br,t),jr!==null&&xc(jr,t),Hr!==null&&xc(Hr,t),_l.forEach(n),vl.forEach(n);for(var s=0;s<qr.length;s++){var o=qr[s];o.blockedOn===t&&(o.blockedOn=null)}for(;0<qr.length&&(s=qr[0],s.blockedOn===null);)H_(s),s.blockedOn===null&&qr.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var h=s[o],f=s[o+1],_=h[Mt]||null;if(typeof f=="function")_||F_(s);else if(_){var E=null;if(f&&f.hasAttribute("formAction")){if(h=f,_=f[Mt]||null)E=_.formAction;else if(kd(h)!==null)continue}else E=_.action;typeof E=="function"?s[o+1]=E:(s.splice(o,3),o-=3),F_(s)}}}function G_(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return h=_})},focusReset:"manual",scroll:"manual"})}function n(){h!==null&&(h(),h=null),o||setTimeout(s,20)}function s(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,h=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(s,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),h!==null&&(h(),h=null)}}}function Ud(t){this._internalRoot=t}Mc.prototype.render=Ud.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(a(409));var s=n.current,o=Sn();U_(s,o,t,n,null,null)},Mc.prototype.unmount=Ud.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;U_(t.current,2,null,t,null,null),dc(),n[ci]=null}};function Mc(t){this._internalRoot=t}Mc.prototype.unstable_scheduleHydration=function(t){if(t){var n=du();t={blockedOn:null,target:t,priority:n};for(var s=0;s<qr.length&&n!==0&&n<qr[s].priority;s++);qr.splice(s,0,t),s===0&&H_(t)}};var K_=e.version;if(K_!=="19.2.0")throw Error(a(527,K_,"19.2.0"));se.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=y(n),t=t!==null?T(t):null,t=t===null?null:t.stateNode,t};var jS={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:Q,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kc.isDisabled&&kc.supportsFiber)try{zn=kc.inject(jS),zt=kc}catch{}}return bl.createRoot=function(t,n){if(!l(t))throw Error(a(299));var s=!1,o="",h=Wg,f=ey,_=ty;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(h=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=k_(t,1,!1,null,null,s,o,null,h,f,_,G_),t[ci]=n.current,yd(t),new Ud(n)},bl.hydrateRoot=function(t,n,s){if(!l(t))throw Error(a(299));var o=!1,h="",f=Wg,_=ey,E=ty,C=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(_=s.onCaughtError),s.onRecoverableError!==void 0&&(E=s.onRecoverableError),s.formState!==void 0&&(C=s.formState)),n=k_(t,1,!0,n,s??null,o,h,C,f,_,E,G_),n.context=V_(null),s=n.current,o=Sn(),o=gs(o),h=Ir(o),h.callback=null,Dr(s,h,o),s=o,n.current.lanes=s,ps(n,s),Ri(n),t[ci]=n.current,yd(t),new Mc(n)},bl.version="19.2.0",bl}var nv;function JS(){if(nv)return zd.exports;nv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),zd.exports=$S(),zd.exports}var ZS=JS();/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var iv="popstate";function WS(r={}){function e(a,l){let{pathname:c,search:d,hash:m}=a.location;return rp("",{pathname:c,search:d,hash:m},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(a,l){return typeof l=="string"?l:Pl(l)}return tA(e,i,null,r)}function st(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function ni(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function eA(){return Math.random().toString(36).substring(2,10)}function rv(r,e){return{usr:r.state,key:r.key,idx:e}}function rp(r,e,i=null,a){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?co(e):e,state:i,key:e&&e.key||a||eA()}}function Pl({pathname:r="/",search:e="",hash:i=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function co(r){let e={};if(r){let i=r.indexOf("#");i>=0&&(e.hash=r.substring(i),r=r.substring(0,i));let a=r.indexOf("?");a>=0&&(e.search=r.substring(a),r=r.substring(0,a)),r&&(e.pathname=r)}return e}function tA(r,e,i,a={}){let{window:l=document.defaultView,v5Compat:c=!1}=a,d=l.history,m="POP",g=null,y=T();y==null&&(y=0,d.replaceState({...d.state,idx:y},""));function T(){return(d.state||{idx:null}).idx}function S(){m="POP";let G=T(),ee=G==null?null:G-y;y=G,g&&g({action:m,location:Z.location,delta:ee})}function D(G,ee){m="PUSH";let ne=rp(Z.location,G,ee);y=T()+1;let re=rv(ne,y),oe=Z.createHref(ne);try{d.pushState(re,"",oe)}catch(me){if(me instanceof DOMException&&me.name==="DataCloneError")throw me;l.location.assign(oe)}c&&g&&g({action:m,location:Z.location,delta:1})}function L(G,ee){m="REPLACE";let ne=rp(Z.location,G,ee);y=T();let re=rv(ne,y),oe=Z.createHref(ne);d.replaceState(re,"",oe),c&&g&&g({action:m,location:Z.location,delta:0})}function K(G){return nA(G)}let Z={get action(){return m},get location(){return r(l,d)},listen(G){if(g)throw new Error("A history only accepts one active listener");return l.addEventListener(iv,S),g=G,()=>{l.removeEventListener(iv,S),g=null}},createHref(G){return e(l,G)},createURL:K,encodeLocation(G){let ee=K(G);return{pathname:ee.pathname,search:ee.search,hash:ee.hash}},push:D,replace:L,go(G){return d.go(G)}};return Z}function nA(r,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),st(i,"No window.location.(origin|href) available to create URL");let a=typeof r=="string"?r:Pl(r);return a=a.replace(/ $/,"%20"),!e&&a.startsWith("//")&&(a=i+a),new URL(a,i)}function xE(r,e,i="/"){return iA(r,e,i,!1)}function iA(r,e,i,a){let l=typeof e=="string"?co(e):e,c=lr(l.pathname||"/",i);if(c==null)return null;let d=NE(r);rA(d);let m=null;for(let g=0;m==null&&g<d.length;++g){let y=mA(c);m=dA(d[g],y,a)}return m}function NE(r,e=[],i=[],a="",l=!1){let c=(d,m,g=l,y)=>{let T={relativePath:y===void 0?d.path||"":y,caseSensitive:d.caseSensitive===!0,childrenIndex:m,route:d};if(T.relativePath.startsWith("/")){if(!T.relativePath.startsWith(a)&&g)return;st(T.relativePath.startsWith(a),`Absolute route path "${T.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),T.relativePath=T.relativePath.slice(a.length)}let S=ir([a,T.relativePath]),D=i.concat(T);d.children&&d.children.length>0&&(st(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${S}".`),NE(d.children,e,D,S,g)),!(d.path==null&&!d.index)&&e.push({path:S,score:hA(S,d.index),routesMeta:D})};return r.forEach((d,m)=>{if(d.path===""||!d.path?.includes("?"))c(d,m);else for(let g of ME(d.path))c(d,m,!0,g)}),e}function ME(r){let e=r.split("/");if(e.length===0)return[];let[i,...a]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(a.length===0)return l?[c,""]:[c];let d=ME(a.join("/")),m=[];return m.push(...d.map(g=>g===""?c:[c,g].join("/"))),l&&m.push(...d),m.map(g=>r.startsWith("/")&&g===""?"/":g)}function rA(r){r.sort((e,i)=>e.score!==i.score?i.score-e.score:fA(e.routesMeta.map(a=>a.childrenIndex),i.routesMeta.map(a=>a.childrenIndex)))}var sA=/^:[\w-]+$/,aA=3,oA=2,lA=1,uA=10,cA=-2,sv=r=>r==="*";function hA(r,e){let i=r.split("/"),a=i.length;return i.some(sv)&&(a+=cA),e&&(a+=oA),i.filter(l=>!sv(l)).reduce((l,c)=>l+(sA.test(c)?aA:c===""?lA:uA),a)}function fA(r,e){return r.length===e.length&&r.slice(0,-1).every((a,l)=>a===e[l])?r[r.length-1]-e[e.length-1]:0}function dA(r,e,i=!1){let{routesMeta:a}=r,l={},c="/",d=[];for(let m=0;m<a.length;++m){let g=a[m],y=m===a.length-1,T=c==="/"?e:e.slice(c.length)||"/",S=nh({path:g.relativePath,caseSensitive:g.caseSensitive,end:y},T),D=g.route;if(!S&&y&&i&&!a[a.length-1].route.index&&(S=nh({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},T)),!S)return null;Object.assign(l,S.params),d.push({params:l,pathname:ir([c,S.pathname]),pathnameBase:vA(ir([c,S.pathnameBase])),route:D}),S.pathnameBase!=="/"&&(c=ir([c,S.pathnameBase]))}return d}function nh(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,a]=pA(r.path,r.caseSensitive,r.end),l=e.match(i);if(!l)return null;let c=l[0],d=c.replace(/(.)\/+$/,"$1"),m=l.slice(1);return{params:a.reduce((y,{paramName:T,isOptional:S},D)=>{if(T==="*"){let K=m[D]||"";d=c.slice(0,c.length-K.length).replace(/(.)\/+$/,"$1")}const L=m[D];return S&&!L?y[T]=void 0:y[T]=(L||"").replace(/%2F/g,"/"),y},{}),pathname:c,pathnameBase:d,pattern:r}}function pA(r,e=!1,i=!0){ni(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let a=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,m,g)=>(a.push({paramName:m,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(a.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),a]}function mA(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ni(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function lr(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,a=r.charAt(i);return a&&a!=="/"?null:r.slice(i)||"/"}function gA(r,e="/"){let{pathname:i,search:a="",hash:l=""}=typeof r=="string"?co(r):r;return{pathname:i?i.startsWith("/")?i:yA(i,e):e,search:EA(a),hash:TA(l)}}function yA(r,e){let i=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function qd(r,e,i,a){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function _A(r){return r.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function Dp(r){let e=_A(r);return e.map((i,a)=>a===e.length-1?i.pathname:i.pathnameBase)}function Op(r,e,i,a=!1){let l;typeof r=="string"?l=co(r):(l={...r},st(!l.pathname||!l.pathname.includes("?"),qd("?","pathname","search",l)),st(!l.pathname||!l.pathname.includes("#"),qd("#","pathname","hash",l)),st(!l.search||!l.search.includes("#"),qd("#","search","hash",l)));let c=r===""||l.pathname==="",d=c?"/":l.pathname,m;if(d==null)m=i;else{let S=e.length-1;if(!a&&d.startsWith("..")){let D=d.split("/");for(;D[0]==="..";)D.shift(),S-=1;l.pathname=D.join("/")}m=S>=0?e[S]:"/"}let g=gA(l,m),y=d&&d!=="/"&&d.endsWith("/"),T=(c||d===".")&&i.endsWith("/");return!g.pathname.endsWith("/")&&(y||T)&&(g.pathname+="/"),g}var ir=r=>r.join("/").replace(/\/\/+/g,"/"),vA=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),EA=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,TA=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function bA(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var kE=["POST","PUT","PATCH","DELETE"];new Set(kE);var SA=["GET",...kE];new Set(SA);var ho=F.createContext(null);ho.displayName="DataRouter";var bh=F.createContext(null);bh.displayName="DataRouterState";F.createContext(!1);var VE=F.createContext({isTransitioning:!1});VE.displayName="ViewTransition";var AA=F.createContext(new Map);AA.displayName="Fetchers";var wA=F.createContext(null);wA.displayName="Await";var ri=F.createContext(null);ri.displayName="Navigation";var Kl=F.createContext(null);Kl.displayName="Location";var ki=F.createContext({outlet:null,matches:[],isDataRoute:!1});ki.displayName="Route";var xp=F.createContext(null);xp.displayName="RouteError";function RA(r,{relative:e}={}){st(fo(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:a}=F.useContext(ri),{hash:l,pathname:c,search:d}=Yl(r,{relative:e}),m=c;return i!=="/"&&(m=c==="/"?i:ir([i,c])),a.createHref({pathname:m,search:d,hash:l})}function fo(){return F.useContext(Kl)!=null}function os(){return st(fo(),"useLocation() may be used only in the context of a <Router> component."),F.useContext(Kl).location}var UE="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function LE(r){F.useContext(ri).static||F.useLayoutEffect(r)}function Np(){let{isDataRoute:r}=F.useContext(ki);return r?zA():CA()}function CA(){st(fo(),"useNavigate() may be used only in the context of a <Router> component.");let r=F.useContext(ho),{basename:e,navigator:i}=F.useContext(ri),{matches:a}=F.useContext(ki),{pathname:l}=os(),c=JSON.stringify(Dp(a)),d=F.useRef(!1);return LE(()=>{d.current=!0}),F.useCallback((g,y={})=>{if(ni(d.current,UE),!d.current)return;if(typeof g=="number"){i.go(g);return}let T=Op(g,JSON.parse(c),l,y.relative==="path");r==null&&e!=="/"&&(T.pathname=T.pathname==="/"?e:ir([e,T.pathname])),(y.replace?i.replace:i.push)(T,y.state,y)},[e,i,c,l,r])}F.createContext(null);function Yl(r,{relative:e}={}){let{matches:i}=F.useContext(ki),{pathname:a}=os(),l=JSON.stringify(Dp(i));return F.useMemo(()=>Op(r,JSON.parse(l),a,e==="path"),[r,l,a,e])}function IA(r,e){return PE(r,e)}function PE(r,e,i,a,l){st(fo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=F.useContext(ri),{matches:d}=F.useContext(ki),m=d[d.length-1],g=m?m.params:{},y=m?m.pathname:"/",T=m?m.pathnameBase:"/",S=m&&m.route;{let ne=S&&S.path||"";zE(y,!S||ne.endsWith("*")||ne.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${ne}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${ne}"> to <Route path="${ne==="/"?"*":`${ne}/*`}">.`)}let D=os(),L;if(e){let ne=typeof e=="string"?co(e):e;st(T==="/"||ne.pathname?.startsWith(T),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${T}" but pathname "${ne.pathname}" was given in the \`location\` prop.`),L=ne}else L=D;let K=L.pathname||"/",Z=K;if(T!=="/"){let ne=T.replace(/^\//,"").split("/");Z="/"+K.replace(/^\//,"").split("/").slice(ne.length).join("/")}let G=xE(r,{pathname:Z});ni(S||G!=null,`No routes matched location "${L.pathname}${L.search}${L.hash}" `),ni(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${L.pathname}${L.search}${L.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let ee=MA(G&&G.map(ne=>Object.assign({},ne,{params:Object.assign({},g,ne.params),pathname:ir([T,c.encodeLocation?c.encodeLocation(ne.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:ne.pathname]),pathnameBase:ne.pathnameBase==="/"?T:ir([T,c.encodeLocation?c.encodeLocation(ne.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:ne.pathnameBase])})),d,i,a,l);return e&&ee?F.createElement(Kl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...L},navigationType:"POP"}},ee):ee}function DA(){let r=PA(),e=bA(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,a="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:a},c={padding:"2px 4px",backgroundColor:a},d=null;return console.error("Error handled by React Router default ErrorBoundary:",r),d=F.createElement(F.Fragment,null,F.createElement("p",null,"💿 Hey developer 👋"),F.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",F.createElement("code",{style:c},"ErrorBoundary")," or"," ",F.createElement("code",{style:c},"errorElement")," prop on your route.")),F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},e),i?F.createElement("pre",{style:l},i):null,d)}var OA=F.createElement(DA,null),xA=class extends F.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.unstable_onError?this.props.unstable_onError(r,e):console.error("React Router caught the following error during render",r)}render(){return this.state.error!==void 0?F.createElement(ki.Provider,{value:this.props.routeContext},F.createElement(xp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function NA({routeContext:r,match:e,children:i}){let a=F.useContext(ho);return a&&a.static&&a.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=e.route.id),F.createElement(ki.Provider,{value:r},i)}function MA(r,e=[],i=null,a=null,l=null){if(r==null){if(!i)return null;if(i.errors)r=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)r=i.matches;else return null}let c=r,d=i?.errors;if(d!=null){let y=c.findIndex(T=>T.route.id&&d?.[T.route.id]!==void 0);st(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),c=c.slice(0,Math.min(c.length,y+1))}let m=!1,g=-1;if(i)for(let y=0;y<c.length;y++){let T=c[y];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(g=y),T.route.id){let{loaderData:S,errors:D}=i,L=T.route.loader&&!S.hasOwnProperty(T.route.id)&&(!D||D[T.route.id]===void 0);if(T.route.lazy||L){m=!0,g>=0?c=c.slice(0,g+1):c=[c[0]];break}}}return c.reduceRight((y,T,S)=>{let D,L=!1,K=null,Z=null;i&&(D=d&&T.route.id?d[T.route.id]:void 0,K=T.route.errorElement||OA,m&&(g<0&&S===0?(zE("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),L=!0,Z=null):g===S&&(L=!0,Z=T.route.hydrateFallbackElement||null)));let G=e.concat(c.slice(0,S+1)),ee=()=>{let ne;return D?ne=K:L?ne=Z:T.route.Component?ne=F.createElement(T.route.Component,null):T.route.element?ne=T.route.element:ne=y,F.createElement(NA,{match:T,routeContext:{outlet:y,matches:G,isDataRoute:i!=null},children:ne})};return i&&(T.route.ErrorBoundary||T.route.errorElement||S===0)?F.createElement(xA,{location:i.location,revalidation:i.revalidation,component:K,error:D,children:ee(),routeContext:{outlet:null,matches:G,isDataRoute:!0},unstable_onError:a}):ee()},null)}function Mp(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function kA(r){let e=F.useContext(ho);return st(e,Mp(r)),e}function VA(r){let e=F.useContext(bh);return st(e,Mp(r)),e}function UA(r){let e=F.useContext(ki);return st(e,Mp(r)),e}function kp(r){let e=UA(r),i=e.matches[e.matches.length-1];return st(i.route.id,`${r} can only be used on routes that contain a unique "id"`),i.route.id}function LA(){return kp("useRouteId")}function PA(){let r=F.useContext(xp),e=VA("useRouteError"),i=kp("useRouteError");return r!==void 0?r:e.errors?.[i]}function zA(){let{router:r}=kA("useNavigate"),e=kp("useNavigate"),i=F.useRef(!1);return LE(()=>{i.current=!0}),F.useCallback(async(l,c={})=>{ni(i.current,UE),i.current&&(typeof l=="number"?r.navigate(l):await r.navigate(l,{fromRouteId:e,...c}))},[r,e])}var av={};function zE(r,e,i){!e&&!av[r]&&(av[r]=!0,ni(!1,i))}F.memo(BA);function BA({routes:r,future:e,state:i,unstable_onError:a}){return PE(r,void 0,i,a,e)}function Sl({to:r,replace:e,state:i,relative:a}){st(fo(),"<Navigate> may be used only in the context of a <Router> component.");let{static:l}=F.useContext(ri);ni(!l,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=F.useContext(ki),{pathname:d}=os(),m=Np(),g=Op(r,Dp(c),d,a==="path"),y=JSON.stringify(g);return F.useEffect(()=>{m(JSON.parse(y),{replace:e,state:i,relative:a})},[m,y,a,e,i]),null}function Kr(r){st(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function jA({basename:r="/",children:e=null,location:i,navigationType:a="POP",navigator:l,static:c=!1}){st(!fo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=r.replace(/^\/*/,"/"),m=F.useMemo(()=>({basename:d,navigator:l,static:c,future:{}}),[d,l,c]);typeof i=="string"&&(i=co(i));let{pathname:g="/",search:y="",hash:T="",state:S=null,key:D="default"}=i,L=F.useMemo(()=>{let K=lr(g,d);return K==null?null:{location:{pathname:K,search:y,hash:T,state:S,key:D},navigationType:a}},[d,g,y,T,S,D,a]);return ni(L!=null,`<Router basename="${d}"> is not able to match the URL "${g}${y}${T}" because it does not start with the basename, so the <Router> won't render anything.`),L==null?null:F.createElement(ri.Provider,{value:m},F.createElement(Kl.Provider,{children:e,value:L}))}function HA({children:r,location:e}){return IA(sp(r),e)}function sp(r,e=[]){let i=[];return F.Children.forEach(r,(a,l)=>{if(!F.isValidElement(a))return;let c=[...e,l];if(a.type===F.Fragment){i.push.apply(i,sp(a.props.children,c));return}st(a.type===Kr,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),st(!a.props.index||!a.props.children,"An index route cannot have child routes.");let d={id:a.props.id||c.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,middleware:a.props.middleware,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(d.children=sp(a.props.children,c)),i.push(d)}),i}var Gc="get",Kc="application/x-www-form-urlencoded";function Sh(r){return r!=null&&typeof r.tagName=="string"}function qA(r){return Sh(r)&&r.tagName.toLowerCase()==="button"}function FA(r){return Sh(r)&&r.tagName.toLowerCase()==="form"}function GA(r){return Sh(r)&&r.tagName.toLowerCase()==="input"}function KA(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function YA(r,e){return r.button===0&&(!e||e==="_self")&&!KA(r)}var Vc=null;function QA(){if(Vc===null)try{new FormData(document.createElement("form"),0),Vc=!1}catch{Vc=!0}return Vc}var XA=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Fd(r){return r!=null&&!XA.has(r)?(ni(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Kc}"`),null):r}function $A(r,e){let i,a,l,c,d;if(FA(r)){let m=r.getAttribute("action");a=m?lr(m,e):null,i=r.getAttribute("method")||Gc,l=Fd(r.getAttribute("enctype"))||Kc,c=new FormData(r)}else if(qA(r)||GA(r)&&(r.type==="submit"||r.type==="image")){let m=r.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=r.getAttribute("formaction")||m.getAttribute("action");if(a=g?lr(g,e):null,i=r.getAttribute("formmethod")||m.getAttribute("method")||Gc,l=Fd(r.getAttribute("formenctype"))||Fd(m.getAttribute("enctype"))||Kc,c=new FormData(m,r),!QA()){let{name:y,type:T,value:S}=r;if(T==="image"){let D=y?`${y}.`:"";c.append(`${D}x`,"0"),c.append(`${D}y`,"0")}else y&&c.append(y,S)}}else{if(Sh(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Gc,a=null,l=Kc,d=r}return c&&l==="text/plain"&&(d=c,c=void 0),{action:a,method:i.toLowerCase(),encType:l,formData:c,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Vp(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function JA(r,e,i){let a=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return a.pathname==="/"?a.pathname=`_root.${i}`:e&&lr(a.pathname,e)==="/"?a.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${i}`,a}async function ZA(r,e){if(r.id in e)return e[r.id];try{let i=await import(r.module);return e[r.id]=i,i}catch(i){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function WA(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function e1(r,e,i){let a=await Promise.all(r.map(async l=>{let c=e.routes[l.route.id];if(c){let d=await ZA(c,i);return d.links?d.links():[]}return[]}));return r1(a.flat(1).filter(WA).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function ov(r,e,i,a,l,c){let d=(g,y)=>i[y]?g.route.id!==i[y].route.id:!0,m=(g,y)=>i[y].pathname!==g.pathname||i[y].route.path?.endsWith("*")&&i[y].params["*"]!==g.params["*"];return c==="assets"?e.filter((g,y)=>d(g,y)||m(g,y)):c==="data"?e.filter((g,y)=>{let T=a.routes[g.route.id];if(!T||!T.hasLoader)return!1;if(d(g,y)||m(g,y))return!0;if(g.route.shouldRevalidate){let S=g.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function t1(r,e,{includeHydrateFallback:i}={}){return n1(r.map(a=>{let l=e.routes[a.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function n1(r){return[...new Set(r)]}function i1(r){let e={},i=Object.keys(r).sort();for(let a of i)e[a]=r[a];return e}function r1(r,e){let i=new Set;return new Set(e),r.reduce((a,l)=>{let c=JSON.stringify(i1(l));return i.has(c)||(i.add(c),a.push({key:c,link:l})),a},[])}function BE(){let r=F.useContext(ho);return Vp(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function s1(){let r=F.useContext(bh);return Vp(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Up=F.createContext(void 0);Up.displayName="FrameworkContext";function jE(){let r=F.useContext(Up);return Vp(r,"You must render this element inside a <HydratedRouter> element"),r}function a1(r,e){let i=F.useContext(Up),[a,l]=F.useState(!1),[c,d]=F.useState(!1),{onFocus:m,onBlur:g,onMouseEnter:y,onMouseLeave:T,onTouchStart:S}=e,D=F.useRef(null);F.useEffect(()=>{if(r==="render"&&d(!0),r==="viewport"){let Z=ee=>{ee.forEach(ne=>{d(ne.isIntersecting)})},G=new IntersectionObserver(Z,{threshold:.5});return D.current&&G.observe(D.current),()=>{G.disconnect()}}},[r]),F.useEffect(()=>{if(a){let Z=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(Z)}}},[a]);let L=()=>{l(!0)},K=()=>{l(!1),d(!1)};return i?r!=="intent"?[c,D,{}]:[c,D,{onFocus:Al(m,L),onBlur:Al(g,K),onMouseEnter:Al(y,L),onMouseLeave:Al(T,K),onTouchStart:Al(S,L)}]:[!1,D,{}]}function Al(r,e){return i=>{r&&r(i),i.defaultPrevented||e(i)}}function o1({page:r,...e}){let{router:i}=BE(),a=F.useMemo(()=>xE(i.routes,r,i.basename),[i.routes,r,i.basename]);return a?F.createElement(u1,{page:r,matches:a,...e}):null}function l1(r){let{manifest:e,routeModules:i}=jE(),[a,l]=F.useState([]);return F.useEffect(()=>{let c=!1;return e1(r,e,i).then(d=>{c||l(d)}),()=>{c=!0}},[r,e,i]),a}function u1({page:r,matches:e,...i}){let a=os(),{manifest:l,routeModules:c}=jE(),{basename:d}=BE(),{loaderData:m,matches:g}=s1(),y=F.useMemo(()=>ov(r,e,g,l,a,"data"),[r,e,g,l,a]),T=F.useMemo(()=>ov(r,e,g,l,a,"assets"),[r,e,g,l,a]),S=F.useMemo(()=>{if(r===a.pathname+a.search+a.hash)return[];let K=new Set,Z=!1;if(e.forEach(ee=>{let ne=l.routes[ee.route.id];!ne||!ne.hasLoader||(!y.some(re=>re.route.id===ee.route.id)&&ee.route.id in m&&c[ee.route.id]?.shouldRevalidate||ne.hasClientLoader?Z=!0:K.add(ee.route.id))}),K.size===0)return[];let G=JA(r,d,"data");return Z&&K.size>0&&G.searchParams.set("_routes",e.filter(ee=>K.has(ee.route.id)).map(ee=>ee.route.id).join(",")),[G.pathname+G.search]},[d,m,a,l,y,e,r,c]),D=F.useMemo(()=>t1(T,l),[T,l]),L=l1(T);return F.createElement(F.Fragment,null,S.map(K=>F.createElement("link",{key:K,rel:"prefetch",as:"fetch",href:K,...i})),D.map(K=>F.createElement("link",{key:K,rel:"modulepreload",href:K,...i})),L.map(({key:K,link:Z})=>F.createElement("link",{key:K,nonce:i.nonce,...Z})))}function c1(...r){return e=>{r.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var HE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{HE&&(window.__reactRouterVersion="7.9.4")}catch{}function h1({basename:r,children:e,window:i}){let a=F.useRef();a.current==null&&(a.current=WS({window:i,v5Compat:!0}));let l=a.current,[c,d]=F.useState({action:l.action,location:l.location}),m=F.useCallback(g=>{F.startTransition(()=>d(g))},[d]);return F.useLayoutEffect(()=>l.listen(m),[l,m]),F.createElement(jA,{basename:r,children:e,location:c.location,navigationType:c.action,navigator:l})}var qE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hs=F.forwardRef(function({onClick:e,discover:i="render",prefetch:a="none",relative:l,reloadDocument:c,replace:d,state:m,target:g,to:y,preventScrollReset:T,viewTransition:S,...D},L){let{basename:K}=F.useContext(ri),Z=typeof y=="string"&&qE.test(y),G,ee=!1;if(typeof y=="string"&&Z&&(G=y,HE))try{let w=new URL(window.location.href),M=y.startsWith("//")?new URL(w.protocol+y):new URL(y),O=lr(M.pathname,K);M.origin===w.origin&&O!=null?y=O+M.search+M.hash:ee=!0}catch{ni(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let ne=RA(y,{relative:l}),[re,oe,me]=a1(a,D),Ee=m1(y,{replace:d,state:m,target:g,preventScrollReset:T,relative:l,viewTransition:S});function I(w){e&&e(w),w.defaultPrevented||Ee(w)}let A=F.createElement("a",{...D,...me,href:G||ne,onClick:ee||c?e:I,ref:c1(L,oe),target:g,"data-discover":!Z&&i==="render"?"true":void 0});return re&&!Z?F.createElement(F.Fragment,null,A,F.createElement(o1,{page:ne})):A});Hs.displayName="Link";var f1=F.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:a="",end:l=!1,style:c,to:d,viewTransition:m,children:g,...y},T){let S=Yl(d,{relative:y.relative}),D=os(),L=F.useContext(bh),{navigator:K,basename:Z}=F.useContext(ri),G=L!=null&&E1(S)&&m===!0,ee=K.encodeLocation?K.encodeLocation(S).pathname:S.pathname,ne=D.pathname,re=L&&L.navigation&&L.navigation.location?L.navigation.location.pathname:null;i||(ne=ne.toLowerCase(),re=re?re.toLowerCase():null,ee=ee.toLowerCase()),re&&Z&&(re=lr(re,Z)||re);const oe=ee!=="/"&&ee.endsWith("/")?ee.length-1:ee.length;let me=ne===ee||!l&&ne.startsWith(ee)&&ne.charAt(oe)==="/",Ee=re!=null&&(re===ee||!l&&re.startsWith(ee)&&re.charAt(ee.length)==="/"),I={isActive:me,isPending:Ee,isTransitioning:G},A=me?e:void 0,w;typeof a=="function"?w=a(I):w=[a,me?"active":null,Ee?"pending":null,G?"transitioning":null].filter(Boolean).join(" ");let M=typeof c=="function"?c(I):c;return F.createElement(Hs,{...y,"aria-current":A,className:w,ref:T,style:M,to:d,viewTransition:m},typeof g=="function"?g(I):g)});f1.displayName="NavLink";var d1=F.forwardRef(({discover:r="render",fetcherKey:e,navigate:i,reloadDocument:a,replace:l,state:c,method:d=Gc,action:m,onSubmit:g,relative:y,preventScrollReset:T,viewTransition:S,...D},L)=>{let K=_1(),Z=v1(m,{relative:y}),G=d.toLowerCase()==="get"?"get":"post",ee=typeof m=="string"&&qE.test(m),ne=re=>{if(g&&g(re),re.defaultPrevented)return;re.preventDefault();let oe=re.nativeEvent.submitter,me=oe?.getAttribute("formmethod")||d;K(oe||re.currentTarget,{fetcherKey:e,method:me,navigate:i,replace:l,state:c,relative:y,preventScrollReset:T,viewTransition:S})};return F.createElement("form",{ref:L,method:G,action:Z,onSubmit:a?g:ne,...D,"data-discover":!ee&&r==="render"?"true":void 0})});d1.displayName="Form";function p1(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function FE(r){let e=F.useContext(ho);return st(e,p1(r)),e}function m1(r,{target:e,replace:i,state:a,preventScrollReset:l,relative:c,viewTransition:d}={}){let m=Np(),g=os(),y=Yl(r,{relative:c});return F.useCallback(T=>{if(YA(T,e)){T.preventDefault();let S=i!==void 0?i:Pl(g)===Pl(y);m(r,{replace:S,state:a,preventScrollReset:l,relative:c,viewTransition:d})}},[g,m,y,i,a,e,r,l,c,d])}var g1=0,y1=()=>`__${String(++g1)}__`;function _1(){let{router:r}=FE("useSubmit"),{basename:e}=F.useContext(ri),i=LA();return F.useCallback(async(a,l={})=>{let{action:c,method:d,encType:m,formData:g,body:y}=$A(a,e);if(l.navigate===!1){let T=l.fetcherKey||y1();await r.fetch(T,i,l.action||c,{preventScrollReset:l.preventScrollReset,formData:g,body:y,formMethod:l.method||d,formEncType:l.encType||m,flushSync:l.flushSync})}else await r.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:g,body:y,formMethod:l.method||d,formEncType:l.encType||m,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[r,e,i])}function v1(r,{relative:e}={}){let{basename:i}=F.useContext(ri),a=F.useContext(ki);st(a,"useFormAction must be used inside a RouteContext");let[l]=a.matches.slice(-1),c={...Yl(r||".",{relative:e})},d=os();if(r==null){c.search=d.search;let m=new URLSearchParams(c.search),g=m.getAll("index");if(g.some(T=>T==="")){m.delete("index"),g.filter(S=>S).forEach(S=>m.append("index",S));let T=m.toString();c.search=T?`?${T}`:""}}return(!r||r===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:ir([i,c.pathname])),Pl(c)}function E1(r,{relative:e}={}){let i=F.useContext(VE);st(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=FE("useViewTransitionState"),l=Yl(r,{relative:e});if(!i.isTransitioning)return!1;let c=lr(i.currentLocation.pathname,a)||i.currentLocation.pathname,d=lr(i.nextLocation.pathname,a)||i.nextLocation.pathname;return nh(l.pathname,d)!=null||nh(l.pathname,c)!=null}const T1=()=>{};var lv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE=function(r){const e=[];let i=0;for(let a=0;a<r.length;a++){let l=r.charCodeAt(a);l<128?e[i++]=l:l<2048?(e[i++]=l>>6|192,e[i++]=l&63|128):(l&64512)===55296&&a+1<r.length&&(r.charCodeAt(a+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++a)&1023),e[i++]=l>>18|240,e[i++]=l>>12&63|128,e[i++]=l>>6&63|128,e[i++]=l&63|128):(e[i++]=l>>12|224,e[i++]=l>>6&63|128,e[i++]=l&63|128)}return e},b1=function(r){const e=[];let i=0,a=0;for(;i<r.length;){const l=r[i++];if(l<128)e[a++]=String.fromCharCode(l);else if(l>191&&l<224){const c=r[i++];e[a++]=String.fromCharCode((l&31)<<6|c&63)}else if(l>239&&l<365){const c=r[i++],d=r[i++],m=r[i++],g=((l&7)<<18|(c&63)<<12|(d&63)<<6|m&63)-65536;e[a++]=String.fromCharCode(55296+(g>>10)),e[a++]=String.fromCharCode(56320+(g&1023))}else{const c=r[i++],d=r[i++];e[a++]=String.fromCharCode((l&15)<<12|(c&63)<<6|d&63)}}return e.join("")},KE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let l=0;l<r.length;l+=3){const c=r[l],d=l+1<r.length,m=d?r[l+1]:0,g=l+2<r.length,y=g?r[l+2]:0,T=c>>2,S=(c&3)<<4|m>>4;let D=(m&15)<<2|y>>6,L=y&63;g||(L=64,d||(D=64)),a.push(i[T],i[S],i[D],i[L])}return a.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(GE(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):b1(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let l=0;l<r.length;){const c=i[r.charAt(l++)],m=l<r.length?i[r.charAt(l)]:0;++l;const y=l<r.length?i[r.charAt(l)]:64;++l;const S=l<r.length?i[r.charAt(l)]:64;if(++l,c==null||m==null||y==null||S==null)throw new S1;const D=c<<2|m>>4;if(a.push(D),y!==64){const L=m<<4&240|y>>2;if(a.push(L),S!==64){const K=y<<6&192|S;a.push(K)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class S1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const A1=function(r){const e=GE(r);return KE.encodeByteArray(e,!0)},ih=function(r){return A1(r).replace(/\./g,"")},YE=function(r){try{return KE.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1=()=>w1().__FIREBASE_DEFAULTS__,C1=()=>{if(typeof process>"u"||typeof lv>"u")return;const r=lv.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},I1=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&YE(r[1]);return e&&JSON.parse(e)},Ah=()=>{try{return T1()||R1()||C1()||I1()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},QE=r=>Ah()?.emulatorHosts?.[r],XE=r=>{const e=QE(r);if(!e)return;const i=e.lastIndexOf(":");if(i<=0||i+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const a=parseInt(e.substring(i+1),10);return e[0]==="["?[e.substring(1,i-1),a]:[e.substring(0,i),a]},$E=()=>Ah()?.config,JE=r=>Ah()?.[`_${r}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}wrapCallback(e){return(i,a)=>{i?this.reject(i):this.resolve(a),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(i):e(i,a))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Lp(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZE(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},a=e||"demo-project",l=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d={iss:`https://securetoken.google.com/${a}`,aud:a,iat:l,exp:l+3600,auth_time:l,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...r};return[ih(JSON.stringify(i)),ih(JSON.stringify(d)),""].join(".")}const Ol={};function O1(){const r={prod:[],emulator:[]};for(const e of Object.keys(Ol))Ol[e]?r.emulator.push(e):r.prod.push(e);return r}function x1(r){let e=document.getElementById(r),i=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),i=!0),{created:i,element:e}}let uv=!1;function Pp(r,e){if(typeof window>"u"||typeof document>"u"||!ls(window.location.host)||Ol[r]===e||Ol[r]||uv)return;Ol[r]=e;function i(D){return`__firebase__banner__${D}`}const a="__firebase__banner",c=O1().prod.length>0;function d(){const D=document.getElementById(a);D&&D.remove()}function m(D){D.style.display="flex",D.style.background="#7faaf0",D.style.position="fixed",D.style.bottom="5px",D.style.left="5px",D.style.padding=".5em",D.style.borderRadius="5px",D.style.alignItems="center"}function g(D,L){D.setAttribute("width","24"),D.setAttribute("id",L),D.setAttribute("height","24"),D.setAttribute("viewBox","0 0 24 24"),D.setAttribute("fill","none"),D.style.marginLeft="-6px"}function y(){const D=document.createElement("span");return D.style.cursor="pointer",D.style.marginLeft="16px",D.style.fontSize="24px",D.innerHTML=" &times;",D.onclick=()=>{uv=!0,d()},D}function T(D,L){D.setAttribute("id",L),D.innerText="Learn more",D.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",D.setAttribute("target","__blank"),D.style.paddingLeft="5px",D.style.textDecoration="underline"}function S(){const D=x1(a),L=i("text"),K=document.getElementById(L)||document.createElement("span"),Z=i("learnmore"),G=document.getElementById(Z)||document.createElement("a"),ee=i("preprendIcon"),ne=document.getElementById(ee)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(D.created){const re=D.element;m(re),T(G,Z);const oe=y();g(ne,ee),re.append(ne,K,G,oe),document.body.appendChild(re)}c?(K.innerText="Preview backend disconnected.",ne.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ne.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,K.innerText="Preview backend running in this workspace."),K.setAttribute("id",L)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",S):S()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function N1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(en())}function M1(){const r=Ah()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function k1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function V1(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function U1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function L1(){const r=en();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function P1(){return!M1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function z1(){try{return typeof indexedDB=="object"}catch{return!1}}function B1(){return new Promise((r,e)=>{try{let i=!0;const a="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(a);l.onsuccess=()=>{l.result.close(),i||self.indexedDB.deleteDatabase(a),r(!0)},l.onupgradeneeded=()=>{i=!1},l.onerror=()=>{e(l.error?.message||"")}}catch(i){e(i)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1="FirebaseError";class Vi extends Error{constructor(e,i,a){super(i),this.code=e,this.customData=a,this.name=j1,Object.setPrototypeOf(this,Vi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ql.prototype.create)}}class Ql{constructor(e,i,a){this.service=e,this.serviceName=i,this.errors=a}create(e,...i){const a=i[0]||{},l=`${this.service}/${e}`,c=this.errors[e],d=c?H1(c,a):"Error",m=`${this.serviceName}: ${d} (${l}).`;return new Vi(l,m,a)}}function H1(r,e){return r.replace(q1,(i,a)=>{const l=e[a];return l!=null?String(l):`<${a}?>`})}const q1=/\{\$([^}]+)}/g;function F1(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Ys(r,e){if(r===e)return!0;const i=Object.keys(r),a=Object.keys(e);for(const l of i){if(!a.includes(l))return!1;const c=r[l],d=e[l];if(cv(c)&&cv(d)){if(!Ys(c,d))return!1}else if(c!==d)return!1}for(const l of a)if(!i.includes(l))return!1;return!0}function cv(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(r){const e=[];for(const[i,a]of Object.entries(r))Array.isArray(a)?a.forEach(l=>{e.push(encodeURIComponent(i)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(i)+"="+encodeURIComponent(a));return e.length?"&"+e.join("&"):""}function Cl(r){const e={};return r.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[l,c]=a.split("=");e[decodeURIComponent(l)]=decodeURIComponent(c)}}),e}function Il(r){const e=r.indexOf("?");if(!e)return"";const i=r.indexOf("#",e);return r.substring(e,i>0?i:void 0)}function G1(r,e){const i=new K1(r,e);return i.subscribe.bind(i)}class K1{constructor(e,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{e(this)}).catch(a=>{this.error(a)})}next(e){this.forEachObserver(i=>{i.next(e)})}error(e){this.forEachObserver(i=>{i.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,i,a){let l;if(e===void 0&&i===void 0&&a===void 0)throw new Error("Missing Observer.");Y1(e,["next","error","complete"])?l=e:l={next:e,error:i,complete:a},l.next===void 0&&(l.next=Gd),l.error===void 0&&(l.error=Gd),l.complete===void 0&&(l.complete=Gd);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,e)}sendOne(e,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{i(this.observers[e])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Y1(r,e){if(typeof r!="object"||r===null)return!1;for(const i of e)if(i in r&&typeof r[i]=="function")return!0;return!1}function Gd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(r){return r&&r._delegate?r._delegate:r}class ns{constructor(e,i,a){this.name=e,this.instanceFactory=i,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(e,i){this.name=e,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const i=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(i)){const a=new D1;if(this.instancesDeferred.set(i,a),this.isInitialized(i)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:i});l&&a.resolve(l)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(e){const i=this.normalizeInstanceIdentifier(e?.identifier),a=e?.optional??!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($1(e))try{this.getOrInitializeService({instanceIdentifier:js})}catch{}for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);try{const c=this.getOrInitializeService({instanceIdentifier:l});a.resolve(c)}catch{}}}}clearInstance(e=js){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...e.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=js){return this.instances.has(e)}getOptions(e=js){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:i={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:a,options:i});for(const[c,d]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(c);a===m&&d.resolve(l)}return l}onInit(e,i){const a=this.normalizeInstanceIdentifier(i),l=this.onInitCallbacks.get(a)??new Set;l.add(e),this.onInitCallbacks.set(a,l);const c=this.instances.get(a);return c&&e(c,a),()=>{l.delete(e)}}invokeOnInitCallbacks(e,i){const a=this.onInitCallbacks.get(i);if(a)for(const l of a)try{l(e,i)}catch{}}getOrInitializeService({instanceIdentifier:e,options:i={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:X1(e),options:i}),this.instances.set(e,a),this.instancesOptions.set(e,i),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch{}return a||null}normalizeInstanceIdentifier(e=js){return this.component?this.component.multipleInstances?e:js:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function X1(r){return r===js?void 0:r}function $1(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const i=this.getProvider(e.name);if(i.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);i.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const i=new Q1(e,this);return this.providers.set(e,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(xe||(xe={}));const Z1={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},W1=xe.INFO,ew={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},tw=(r,e,...i)=>{if(e<r.logLevel)return;const a=new Date().toISOString(),l=ew[e];if(l)console[l](`[${a}]  ${r.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zp{constructor(e){this.name=e,this._logLevel=W1,this._logHandler=tw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Z1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...e),this._logHandler(this,xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...e),this._logHandler(this,xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...e),this._logHandler(this,xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...e),this._logHandler(this,xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...e),this._logHandler(this,xe.ERROR,...e)}}const nw=(r,e)=>e.some(i=>r instanceof i);let hv,fv;function iw(){return hv||(hv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rw(){return fv||(fv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const WE=new WeakMap,ap=new WeakMap,e0=new WeakMap,Kd=new WeakMap,Bp=new WeakMap;function sw(r){const e=new Promise((i,a)=>{const l=()=>{r.removeEventListener("success",c),r.removeEventListener("error",d)},c=()=>{i(Zr(r.result)),l()},d=()=>{a(r.error),l()};r.addEventListener("success",c),r.addEventListener("error",d)});return e.then(i=>{i instanceof IDBCursor&&WE.set(i,r)}).catch(()=>{}),Bp.set(e,r),e}function aw(r){if(ap.has(r))return;const e=new Promise((i,a)=>{const l=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",d),r.removeEventListener("abort",d)},c=()=>{i(),l()},d=()=>{a(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",c),r.addEventListener("error",d),r.addEventListener("abort",d)});ap.set(r,e)}let op={get(r,e,i){if(r instanceof IDBTransaction){if(e==="done")return ap.get(r);if(e==="objectStoreNames")return r.objectStoreNames||e0.get(r);if(e==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Zr(r[e])},set(r,e,i){return r[e]=i,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function ow(r){op=r(op)}function lw(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...i){const a=r.call(Yd(this),e,...i);return e0.set(a,e.sort?e.sort():[e]),Zr(a)}:rw().includes(r)?function(...e){return r.apply(Yd(this),e),Zr(WE.get(this))}:function(...e){return Zr(r.apply(Yd(this),e))}}function uw(r){return typeof r=="function"?lw(r):(r instanceof IDBTransaction&&aw(r),nw(r,iw())?new Proxy(r,op):r)}function Zr(r){if(r instanceof IDBRequest)return sw(r);if(Kd.has(r))return Kd.get(r);const e=uw(r);return e!==r&&(Kd.set(r,e),Bp.set(e,r)),e}const Yd=r=>Bp.get(r);function cw(r,e,{blocked:i,upgrade:a,blocking:l,terminated:c}={}){const d=indexedDB.open(r,e),m=Zr(d);return a&&d.addEventListener("upgradeneeded",g=>{a(Zr(d.result),g.oldVersion,g.newVersion,Zr(d.transaction),g)}),i&&d.addEventListener("blocked",g=>i(g.oldVersion,g.newVersion,g)),m.then(g=>{c&&g.addEventListener("close",()=>c()),l&&g.addEventListener("versionchange",y=>l(y.oldVersion,y.newVersion,y))}).catch(()=>{}),m}const hw=["get","getKey","getAll","getAllKeys","count"],fw=["put","add","delete","clear"],Qd=new Map;function dv(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Qd.get(e))return Qd.get(e);const i=e.replace(/FromIndex$/,""),a=e!==i,l=fw.includes(i);if(!(i in(a?IDBIndex:IDBObjectStore).prototype)||!(l||hw.includes(i)))return;const c=async function(d,...m){const g=this.transaction(d,l?"readwrite":"readonly");let y=g.store;return a&&(y=y.index(m.shift())),(await Promise.all([y[i](...m),l&&g.done]))[0]};return Qd.set(e,c),c}ow(r=>({...r,get:(e,i,a)=>dv(e,i)||r.get(e,i,a),has:(e,i)=>!!dv(e,i)||r.has(e,i)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(pw(i)){const a=i.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(i=>i).join(" ")}}function pw(r){return r.getComponent()?.type==="VERSION"}const lp="@firebase/app",pv="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur=new zp("@firebase/app"),mw="@firebase/app-compat",gw="@firebase/analytics-compat",yw="@firebase/analytics",_w="@firebase/app-check-compat",vw="@firebase/app-check",Ew="@firebase/auth",Tw="@firebase/auth-compat",bw="@firebase/database",Sw="@firebase/data-connect",Aw="@firebase/database-compat",ww="@firebase/functions",Rw="@firebase/functions-compat",Cw="@firebase/installations",Iw="@firebase/installations-compat",Dw="@firebase/messaging",Ow="@firebase/messaging-compat",xw="@firebase/performance",Nw="@firebase/performance-compat",Mw="@firebase/remote-config",kw="@firebase/remote-config-compat",Vw="@firebase/storage",Uw="@firebase/storage-compat",Lw="@firebase/firestore",Pw="@firebase/ai",zw="@firebase/firestore-compat",Bw="firebase",jw="12.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up="[DEFAULT]",Hw={[lp]:"fire-core",[mw]:"fire-core-compat",[yw]:"fire-analytics",[gw]:"fire-analytics-compat",[vw]:"fire-app-check",[_w]:"fire-app-check-compat",[Ew]:"fire-auth",[Tw]:"fire-auth-compat",[bw]:"fire-rtdb",[Sw]:"fire-data-connect",[Aw]:"fire-rtdb-compat",[ww]:"fire-fn",[Rw]:"fire-fn-compat",[Cw]:"fire-iid",[Iw]:"fire-iid-compat",[Dw]:"fire-fcm",[Ow]:"fire-fcm-compat",[xw]:"fire-perf",[Nw]:"fire-perf-compat",[Mw]:"fire-rc",[kw]:"fire-rc-compat",[Vw]:"fire-gcs",[Uw]:"fire-gcs-compat",[Lw]:"fire-fst",[zw]:"fire-fst-compat",[Pw]:"fire-vertex","fire-js":"fire-js",[Bw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh=new Map,qw=new Map,cp=new Map;function mv(r,e){try{r.container.addComponent(e)}catch(i){ur.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,i)}}function Qs(r){const e=r.name;if(cp.has(e))return ur.debug(`There were multiple attempts to register component ${e}.`),!1;cp.set(e,r);for(const i of rh.values())mv(i,r);for(const i of qw.values())mv(i,r);return!0}function wh(r,e){const i=r.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),r.container.getProvider(e)}function An(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wr=new Ql("app","Firebase",Fw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e,i,a){this._isDeleted=!1,this._options={...e},this._config={...i},this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new ns("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na=jw;function t0(r,e={}){let i=r;typeof e!="object"&&(e={name:e});const a={name:up,automaticDataCollectionEnabled:!0,...e},l=a.name;if(typeof l!="string"||!l)throw Wr.create("bad-app-name",{appName:String(l)});if(i||(i=$E()),!i)throw Wr.create("no-options");const c=rh.get(l);if(c){if(Ys(i,c.options)&&Ys(a,c.config))return c;throw Wr.create("duplicate-app",{appName:l})}const d=new J1(l);for(const g of cp.values())d.addComponent(g);const m=new Gw(i,a,d);return rh.set(l,m),m}function jp(r=up){const e=rh.get(r);if(!e&&r===up&&$E())return t0();if(!e)throw Wr.create("no-app",{appName:r});return e}function Di(r,e,i){let a=Hw[r]??r;i&&(a+=`-${i}`);const l=a.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const d=[`Unable to register library "${a}" with version "${e}":`];l&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ur.warn(d.join(" "));return}Qs(new ns(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw="firebase-heartbeat-database",Yw=1,zl="firebase-heartbeat-store";let Xd=null;function n0(){return Xd||(Xd=cw(Kw,Yw,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(zl)}catch(i){console.warn(i)}}}}).catch(r=>{throw Wr.create("idb-open",{originalErrorMessage:r.message})})),Xd}async function Qw(r){try{const i=(await n0()).transaction(zl),a=await i.objectStore(zl).get(i0(r));return await i.done,a}catch(e){if(e instanceof Vi)ur.warn(e.message);else{const i=Wr.create("idb-get",{originalErrorMessage:e?.message});ur.warn(i.message)}}}async function gv(r,e){try{const a=(await n0()).transaction(zl,"readwrite");await a.objectStore(zl).put(e,i0(r)),await a.done}catch(i){if(i instanceof Vi)ur.warn(i.message);else{const a=Wr.create("idb-set",{originalErrorMessage:i?.message});ur.warn(a.message)}}}function i0(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw=1024,$w=30;class Jw{constructor(e){this.container=e,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new Ww(i),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=yv();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(l=>l.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:i}),this._heartbeatsCache.heartbeats.length>$w){const l=eR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){ur.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=yv(),{heartbeatsToSend:i,unsentEntries:a}=Zw(this._heartbeatsCache.heartbeats),l=ih(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(e){return ur.warn(e),""}}}function yv(){return new Date().toISOString().substring(0,10)}function Zw(r,e=Xw){const i=[];let a=r.slice();for(const l of r){const c=i.find(d=>d.agent===l.agent);if(c){if(c.dates.push(l.date),_v(i)>e){c.dates.pop();break}}else if(i.push({agent:l.agent,dates:[l.date]}),_v(i)>e){i.pop();break}a=a.slice(1)}return{heartbeatsToSend:i,unsentEntries:a}}class Ww{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return z1()?B1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await Qw(this.app);return i?.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const a=await this.read();return gv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const a=await this.read();return gv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function _v(r){return ih(JSON.stringify({version:2,heartbeats:r})).length}function eR(r){if(r.length===0)return-1;let e=0,i=r[0].date;for(let a=1;a<r.length;a++)r[a].date<i&&(i=r[a].date,e=a);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tR(r){Qs(new ns("platform-logger",e=>new dw(e),"PRIVATE")),Qs(new ns("heartbeat",e=>new Jw(e),"PRIVATE")),Di(lp,pv,r),Di(lp,pv,"esm2020"),Di("fire-js","")}tR("");var nR="firebase",iR="12.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Di(nR,iR,"app");function r0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rR=r0,s0=new Ql("auth","Firebase",r0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh=new zp("@firebase/auth");function sR(r,...e){sh.logLevel<=xe.WARN&&sh.warn(`Auth (${na}): ${r}`,...e)}function Yc(r,...e){sh.logLevel<=xe.ERROR&&sh.error(`Auth (${na}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(r,...e){throw Hp(r,...e)}function Oi(r,...e){return Hp(r,...e)}function a0(r,e,i){const a={...rR(),[e]:i};return new Ql("auth","Firebase",a).create(e,{appName:r.name})}function rr(r){return a0(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Hp(r,...e){if(typeof r!="string"){const i=e[0],a=[...e.slice(1)];return a[0]&&(a[0].appName=r.name),r._errorFactory.create(i,...a)}return s0.create(r,...e)}function ye(r,e,...i){if(!r)throw Hp(e,...i)}function tr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Yc(e),new Error(e)}function cr(r,e){r||tr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(){return typeof self<"u"&&self.location?.href||""}function aR(){return vv()==="http:"||vv()==="https:"}function vv(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(aR()||V1()||"connection"in navigator)?navigator.onLine:!0}function lR(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,i){this.shortDelay=e,this.longDelay=i,cr(i>e,"Short delay should be less than long delay!"),this.isMobile=N1()||U1()}get(){return oR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp(r,e){cr(r.emulator,"Emulator should always be set here");const{url:i}=r.emulator;return e?`${i}${e.startsWith("/")?e.slice(1):e}`:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{static initialize(e,i,a){this.fetchImpl=e,i&&(this.headersImpl=i),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;tr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;tr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;tr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],hR=new $l(3e4,6e4);function us(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function hr(r,e,i,a,l={}){return l0(r,l,async()=>{let c={},d={};a&&(e==="GET"?d=a:c={body:JSON.stringify(a)});const m=Xl({key:r.config.apiKey,...d}).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const y={method:e,headers:g,...c};return k1()||(y.referrerPolicy="no-referrer"),r.emulatorConfig&&ls(r.emulatorConfig.host)&&(y.credentials="include"),o0.fetch()(await u0(r,r.config.apiHost,i,m),y)})}async function l0(r,e,i){r._canInitEmulator=!1;const a={...uR,...e};try{const l=new dR(r),c=await Promise.race([i(),l.promise]);l.clearNetworkTimeout();const d=await c.json();if("needConfirmation"in d)throw Uc(r,"account-exists-with-different-credential",d);if(c.ok&&!("errorMessage"in d))return d;{const m=c.ok?d.errorMessage:d.error.message,[g,y]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Uc(r,"credential-already-in-use",d);if(g==="EMAIL_EXISTS")throw Uc(r,"email-already-in-use",d);if(g==="USER_DISABLED")throw Uc(r,"user-disabled",d);const T=a[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw a0(r,T,y);ii(r,T)}}catch(l){if(l instanceof Vi)throw l;ii(r,"network-request-failed",{message:String(l)})}}async function Jl(r,e,i,a,l={}){const c=await hr(r,e,i,a,l);return"mfaPendingCredential"in c&&ii(r,"multi-factor-auth-required",{_serverResponse:c}),c}async function u0(r,e,i,a){const l=`${e}${i}?${a}`,c=r,d=c.config.emulator?qp(r.config,l):`${r.config.apiScheme}://${l}`;return cR.includes(i)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(d).toString():d}function fR(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class dR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((i,a)=>{this.timer=setTimeout(()=>a(Oi(this.auth,"network-request-failed")),hR.get())})}}function Uc(r,e,i){const a={appName:r.name};i.email&&(a.email=i.email),i.phoneNumber&&(a.phoneNumber=i.phoneNumber);const l=Oi(r,e,a);return l.customData._tokenResponse=i,l}function Ev(r){return r!==void 0&&r.enterprise!==void 0}class pR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const i of this.recaptchaEnforcementState)if(i.provider&&i.provider===e)return fR(i.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function mR(r,e){return hr(r,"GET","/v2/recaptchaConfig",us(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gR(r,e){return hr(r,"POST","/v1/accounts:delete",e)}async function ah(r,e){return hr(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yR(r,e=!1){const i=Pt(r),a=await i.getIdToken(e),l=Fp(a);ye(l&&l.exp&&l.auth_time&&l.iat,i.auth,"internal-error");const c=typeof l.firebase=="object"?l.firebase:void 0,d=c?.sign_in_provider;return{claims:l,token:a,authTime:xl($d(l.auth_time)),issuedAtTime:xl($d(l.iat)),expirationTime:xl($d(l.exp)),signInProvider:d||null,signInSecondFactor:c?.sign_in_second_factor||null}}function $d(r){return Number(r)*1e3}function Fp(r){const[e,i,a]=r.split(".");if(e===void 0||i===void 0||a===void 0)return Yc("JWT malformed, contained fewer than 3 sections"),null;try{const l=YE(i);return l?JSON.parse(l):(Yc("Failed to decode base64 JWT payload"),null)}catch(l){return Yc("Caught error parsing JWT payload as JSON",l?.toString()),null}}function Tv(r){const e=Fp(r);return ye(e,"internal-error"),ye(typeof e.exp<"u","internal-error"),ye(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ro(r,e,i=!1){if(i)return e;try{return await e}catch(a){throw a instanceof Vi&&_R(a)&&r.auth.currentUser===r&&await r.auth.signOut(),a}}function _R({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const a=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const i=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e,i){this.createdAt=e,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=xl(this.lastLoginAt),this.creationTime=xl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oh(r){const e=r.auth,i=await r.getIdToken(),a=await ro(r,ah(e,{idToken:i}));ye(a?.users.length,e,"internal-error");const l=a.users[0];r._notifyReloadListener(l);const c=l.providerUserInfo?.length?c0(l.providerUserInfo):[],d=TR(r.providerData,c),m=r.isAnonymous,g=!(r.email&&l.passwordHash)&&!d?.length,y=m?g:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new fp(l.createdAt,l.lastLoginAt),isAnonymous:y};Object.assign(r,T)}async function ER(r){const e=Pt(r);await oh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function TR(r,e){return[...r.filter(a=>!e.some(l=>l.providerId===a.providerId)),...e]}function c0(r){return r.map(({providerId:e,...i})=>({providerId:e,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bR(r,e){const i=await l0(r,{},async()=>{const a=Xl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:c}=r.config,d=await u0(r,l,"/v1/token",`key=${c}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:a};return r.emulatorConfig&&ls(r.emulatorConfig.host)&&(g.credentials="include"),o0.fetch()(d,g)});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function SR(r,e){return hr(r,"POST","/v2/accounts:revokeToken",us(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ye(e.idToken,"internal-error"),ye(typeof e.idToken<"u","internal-error"),ye(typeof e.refreshToken<"u","internal-error");const i="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Tv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,i)}updateFromIdToken(e){ye(e.length!==0,"internal-error");const i=Tv(e);this.updateTokensAndExpiration(e,null,i)}async getToken(e,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(ye(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,i){const{accessToken:a,refreshToken:l,expiresIn:c}=await bR(e,i);this.updateTokensAndExpiration(a,l,Number(c))}updateTokensAndExpiration(e,i,a){this.refreshToken=i||null,this.accessToken=e||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(e,i){const{refreshToken:a,accessToken:l,expirationTime:c}=i,d=new Wa;return a&&(ye(typeof a=="string","internal-error",{appName:e}),d.refreshToken=a),l&&(ye(typeof l=="string","internal-error",{appName:e}),d.accessToken=l),c&&(ye(typeof c=="number","internal-error",{appName:e}),d.expirationTime=c),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wa,this.toJSON())}_performRefresh(){return tr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(r,e){ye(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class ei{constructor({uid:e,auth:i,stsTokenManager:a,...l}){this.providerId="firebase",this.proactiveRefresh=new vR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new fp(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const i=await ro(this,this.stsTokenManager.getToken(this.auth,e));return ye(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(e){return yR(this,e)}reload(){return ER(this)}_assign(e){this!==e&&(ye(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(i=>({...i})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const i=new ei({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return i.metadata._copy(this.metadata),i}_onReload(e){ye(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,i=!1){let a=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),a=!0),i&&await oh(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(An(this.auth.app))return Promise.reject(rr(this.auth));const e=await this.getIdToken();return await ro(this,gR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,i){const a=i.displayName??void 0,l=i.email??void 0,c=i.phoneNumber??void 0,d=i.photoURL??void 0,m=i.tenantId??void 0,g=i._redirectEventId??void 0,y=i.createdAt??void 0,T=i.lastLoginAt??void 0,{uid:S,emailVerified:D,isAnonymous:L,providerData:K,stsTokenManager:Z}=i;ye(S&&Z,e,"internal-error");const G=Wa.fromJSON(this.name,Z);ye(typeof S=="string",e,"internal-error"),Gr(a,e.name),Gr(l,e.name),ye(typeof D=="boolean",e,"internal-error"),ye(typeof L=="boolean",e,"internal-error"),Gr(c,e.name),Gr(d,e.name),Gr(m,e.name),Gr(g,e.name),Gr(y,e.name),Gr(T,e.name);const ee=new ei({uid:S,auth:e,email:l,emailVerified:D,displayName:a,isAnonymous:L,photoURL:d,phoneNumber:c,tenantId:m,stsTokenManager:G,createdAt:y,lastLoginAt:T});return K&&Array.isArray(K)&&(ee.providerData=K.map(ne=>({...ne}))),g&&(ee._redirectEventId=g),ee}static async _fromIdTokenResponse(e,i,a=!1){const l=new Wa;l.updateFromServerResponse(i);const c=new ei({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a});return await oh(c),c}static async _fromGetAccountInfoResponse(e,i,a){const l=i.users[0];ye(l.localId!==void 0,"internal-error");const c=l.providerUserInfo!==void 0?c0(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!c?.length,m=new Wa;m.updateFromIdToken(a);const g=new ei({uid:l.localId,auth:e,stsTokenManager:m,isAnonymous:d}),y={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:c,metadata:new fp(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!c?.length};return Object.assign(g,y),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv=new Map;function nr(r){cr(r instanceof Function,"Expected a class definition");let e=bv.get(r);return e?(cr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,bv.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,i){this.storage[e]=i}async _get(e){const i=this.storage[e];return i===void 0?null:i}async _remove(e){delete this.storage[e]}_addListener(e,i){}_removeListener(e,i){}}h0.type="NONE";const Sv=h0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(r,e,i){return`firebase:${r}:${e}:${i}`}class eo{constructor(e,i,a){this.persistence=e,this.auth=i,this.userKey=a;const{config:l,name:c}=this.auth;this.fullUserKey=Qc(this.userKey,l.apiKey,c),this.fullPersistenceKey=Qc("persistence",l.apiKey,c),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const i=await ah(this.auth,{idToken:e}).catch(()=>{});return i?ei._fromGetAccountInfoResponse(this.auth,i,e):null}return ei._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,i,a="authUser"){if(!i.length)return new eo(nr(Sv),e,a);const l=(await Promise.all(i.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let c=l[0]||nr(Sv);const d=Qc(a,e.config.apiKey,e.name);let m=null;for(const y of i)try{const T=await y._get(d);if(T){let S;if(typeof T=="string"){const D=await ah(e,{idToken:T}).catch(()=>{});if(!D)break;S=await ei._fromGetAccountInfoResponse(e,D,T)}else S=ei._fromJSON(e,T);y!==c&&(m=S),c=y;break}}catch{}const g=l.filter(y=>y._shouldAllowMigration);return!c._shouldAllowMigration||!g.length?new eo(c,e,a):(c=g[0],m&&await c._set(d,m.toJSON()),await Promise.all(i.map(async y=>{if(y!==c)try{await y._remove(d)}catch{}})),new eo(c,e,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(m0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(f0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(y0(e))return"Blackberry";if(_0(e))return"Webos";if(d0(e))return"Safari";if((e.includes("chrome/")||p0(e))&&!e.includes("edge/"))return"Chrome";if(g0(e))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=r.match(i);if(a?.length===2)return a[1]}return"Other"}function f0(r=en()){return/firefox\//i.test(r)}function d0(r=en()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function p0(r=en()){return/crios\//i.test(r)}function m0(r=en()){return/iemobile/i.test(r)}function g0(r=en()){return/android/i.test(r)}function y0(r=en()){return/blackberry/i.test(r)}function _0(r=en()){return/webos/i.test(r)}function Gp(r=en()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function AR(r=en()){return Gp(r)&&!!window.navigator?.standalone}function wR(){return L1()&&document.documentMode===10}function v0(r=en()){return Gp(r)||g0(r)||_0(r)||y0(r)||/windows phone/i.test(r)||m0(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(r,e=[]){let i;switch(r){case"Browser":i=Av(en());break;case"Worker":i=`${Av(en())}-${r}`;break;default:i=r}const a=e.length?e.join(","):"FirebaseCore-web";return`${i}/JsCore/${na}/${a}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,i){const a=c=>new Promise((d,m)=>{try{const g=e(c);d(g)}catch(g){m(g)}});a.onAbort=i,this.queue.push(a);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const i=[];try{for(const a of this.queue)await a(e),a.onAbort&&i.push(a.onAbort)}catch(a){i.reverse();for(const l of i)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CR(r,e={}){return hr(r,"GET","/v2/passwordPolicy",us(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR=6;class DR{constructor(e){const i=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=i.minPasswordLength??IR,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),i.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),i.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),i.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),i.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const i={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,i),this.validatePasswordCharacterOptions(e,i),i.isValid&&(i.isValid=i.meetsMinPasswordLength??!0),i.isValid&&(i.isValid=i.meetsMaxPasswordLength??!0),i.isValid&&(i.isValid=i.containsLowercaseLetter??!0),i.isValid&&(i.isValid=i.containsUppercaseLetter??!0),i.isValid&&(i.isValid=i.containsNumericCharacter??!0),i.isValid&&(i.isValid=i.containsNonAlphanumericCharacter??!0),i}validatePasswordLengthOptions(e,i){const a=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;a&&(i.meetsMinPasswordLength=e.length>=a),l&&(i.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let a;for(let l=0;l<e.length;l++)a=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(i,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(e,i,a,l,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(e,i,a,l){this.app=e,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=a,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wv(this),this.idTokenSubscription=new wv(this),this.beforeStateQueue=new RR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=s0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,i){return i&&(this._popupRedirectResolver=nr(i)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await eo.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const i=await ah(this,{idToken:e}),a=await ei._fromGetAccountInfoResponse(this,i,e);await this.directlySetCurrentUser(a)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(An(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let a=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,d=a?._redirectEventId,m=await this.tryRedirectSignIn(e);(!c||c===d)&&m?.user&&(a=m.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(c){a=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return ye(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(e){try{await oh(e)}catch(i){if(i?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(An(this.app))return Promise.reject(rr(this));const i=e?Pt(e):null;return i&&ye(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(e,i=!1){if(!this._deleted)return e&&ye(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return An(this.app)?Promise.reject(rr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return An(this.app)?Promise.reject(rr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await CR(this),i=new DR(e);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ql("auth","Firebase",e())}onAuthStateChanged(e,i,a){return this.registerStateListener(this.authStateSubscription,e,i,a)}beforeAuthStateChanged(e,i){return this.beforeStateQueue.pushCallback(e,i)}onIdTokenChanged(e,i,a){return this.registerStateListener(this.idTokenSubscription,e,i,a)}authStateReady(){return new Promise((e,i)=>{if(this.currentUser)e();else{const a=this.onAuthStateChanged(()=>{a(),e()},i)}})}async revokeAccessToken(e){if(this.currentUser){const i=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:i};this.tenantId!=null&&(a.tenantId=this.tenantId),await SR(this,a)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,i){const a=await this.getOrInitRedirectPersistenceManager(i);return e===null?a.removeCurrentUser():a.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const i=e&&nr(e)||this._popupRedirectResolver;ye(i,this,"argument-error"),this.redirectPersistenceManager=await eo.create(this,[nr(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,i,a,l){if(this._deleted)return()=>{};const c=typeof i=="function"?i:i.next.bind(i);let d=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(ye(m,this,"internal-error"),m.then(()=>{d||c(this.currentUser)}),typeof i=="function"){const g=e.addObserver(i,a,l);return()=>{d=!0,g()}}else{const g=e.addObserver(i);return()=>{d=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ye(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=E0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const i=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();i&&(e["X-Firebase-Client"]=i);const a=await this._getAppCheckToken();return a&&(e["X-Firebase-AppCheck"]=a),e}async _getAppCheckToken(){if(An(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&sR(`Error while retrieving App Check token: ${e.error}`),e?.token}}function ia(r){return Pt(r)}class wv{constructor(e){this.auth=e,this.observer=null,this.addObserver=G1(i=>this.observer=i)}get next(){return ye(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xR(r){Rh=r}function T0(r){return Rh.loadJS(r)}function NR(){return Rh.recaptchaEnterpriseScript}function MR(){return Rh.gapiScript}function kR(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class VR{constructor(){this.enterprise=new UR}ready(e){e()}execute(e,i){return Promise.resolve("token")}render(e,i){return""}}class UR{ready(e){e()}execute(e,i){return Promise.resolve("token")}render(e,i){return""}}const LR="recaptcha-enterprise",b0="NO_RECAPTCHA";class PR{constructor(e){this.type=LR,this.auth=ia(e)}async verify(e="verify",i=!1){async function a(c){if(!i){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(d,m)=>{mR(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const y=new pR(g);return c.tenantId==null?c._agentRecaptchaConfig=y:c._tenantRecaptchaConfigs[c.tenantId]=y,d(y.siteKey)}}).catch(g=>{m(g)})})}function l(c,d,m){const g=window.grecaptcha;Ev(g)?g.enterprise.ready(()=>{g.enterprise.execute(c,{action:e}).then(y=>{d(y)}).catch(()=>{d(b0)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new VR().execute("siteKey",{action:"verify"}):new Promise((c,d)=>{a(this.auth).then(m=>{if(!i&&Ev(window.grecaptcha))l(m,c,d);else{if(typeof window>"u"){d(new Error("RecaptchaVerifier is only supported in browser"));return}let g=NR();g.length!==0&&(g+=m),T0(g).then(()=>{l(m,c,d)}).catch(y=>{d(y)})}}).catch(m=>{d(m)})})}}async function Rv(r,e,i,a=!1,l=!1){const c=new PR(r);let d;if(l)d=b0;else try{d=await c.verify(i)}catch{d=await c.verify(i,!0)}const m={...e};if(i==="mfaSmsEnrollment"||i==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const g=m.phoneEnrollmentInfo.phoneNumber,y=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:y,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const g=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return a?Object.assign(m,{captchaResp:d}):Object.assign(m,{captchaResponse:d}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function dp(r,e,i,a,l){if(r._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Rv(r,e,i,i==="getOobCode");return a(r,c)}else return a(r,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await Rv(r,e,i,i==="getOobCode");return a(r,d)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zR(r,e){const i=wh(r,"auth");if(i.isInitialized()){const l=i.getImmediate(),c=i.getOptions();if(Ys(c,e??{}))return l;ii(l,"already-initialized")}return i.initialize({options:e})}function BR(r,e){const i=e?.persistence||[],a=(Array.isArray(i)?i:[i]).map(nr);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(a,e?.popupRedirectResolver)}function jR(r,e,i){const a=ia(r);ye(/^https?:\/\//.test(e),a,"invalid-emulator-scheme");const l=!1,c=S0(e),{host:d,port:m}=HR(e),g=m===null?"":`:${m}`,y={url:`${c}//${d}${g}/`},T=Object.freeze({host:d,port:m,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!a._canInitEmulator){ye(a.config.emulator&&a.emulatorConfig,a,"emulator-config-failed"),ye(Ys(y,a.config.emulator)&&Ys(T,a.emulatorConfig),a,"emulator-config-failed");return}a.config.emulator=y,a.emulatorConfig=T,a.settings.appVerificationDisabledForTesting=!0,ls(d)?(Lp(`${c}//${d}${g}`),Pp("Auth",!0)):qR()}function S0(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function HR(r){const e=S0(r),i=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!i)return{host:"",port:null};const a=i[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(a);if(l){const c=l[1];return{host:c,port:Cv(a.substr(c.length+1))}}else{const[c,d]=a.split(":");return{host:c,port:Cv(d)}}}function Cv(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function qR(){function r(){const e=document.createElement("p"),i=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e,i){this.providerId=e,this.signInMethod=i}toJSON(){return tr("not implemented")}_getIdTokenResponse(e){return tr("not implemented")}_linkToIdToken(e,i){return tr("not implemented")}_getReauthenticationResolver(e){return tr("not implemented")}}async function FR(r,e){return hr(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GR(r,e){return Jl(r,"POST","/v1/accounts:signInWithPassword",us(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KR(r,e){return Jl(r,"POST","/v1/accounts:signInWithEmailLink",us(r,e))}async function YR(r,e){return Jl(r,"POST","/v1/accounts:signInWithEmailLink",us(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl extends Kp{constructor(e,i,a,l=null){super("password",a),this._email=e,this._password=i,this._tenantId=l}static _fromEmailAndPassword(e,i){return new Bl(e,i,"password")}static _fromEmailAndCode(e,i,a=null){return new Bl(e,i,"emailLink",a)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e;if(i?.email&&i?.password){if(i.signInMethod==="password")return this._fromEmailAndPassword(i.email,i.password);if(i.signInMethod==="emailLink")return this._fromEmailAndCode(i.email,i.password,i.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return dp(e,i,"signInWithPassword",GR);case"emailLink":return KR(e,{email:this._email,oobCode:this._password});default:ii(e,"internal-error")}}async _linkToIdToken(e,i){switch(this.signInMethod){case"password":const a={idToken:i,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return dp(e,a,"signUpPassword",FR);case"emailLink":return YR(e,{idToken:i,email:this._email,oobCode:this._password});default:ii(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function to(r,e){return Jl(r,"POST","/v1/accounts:signInWithIdp",us(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QR="http://localhost";class Xs extends Kp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const i=new Xs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(i.idToken=e.idToken),e.accessToken&&(i.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(i.nonce=e.nonce),e.pendingToken&&(i.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(i.accessToken=e.oauthToken,i.secret=e.oauthTokenSecret):ii("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e,{providerId:a,signInMethod:l,...c}=i;if(!a||!l)return null;const d=new Xs(a,l);return d.idToken=c.idToken||void 0,d.accessToken=c.accessToken||void 0,d.secret=c.secret,d.nonce=c.nonce,d.pendingToken=c.pendingToken||null,d}_getIdTokenResponse(e){const i=this.buildRequest();return to(e,i)}_linkToIdToken(e,i){const a=this.buildRequest();return a.idToken=i,to(e,a)}_getReauthenticationResolver(e){const i=this.buildRequest();return i.autoCreate=!1,to(e,i)}buildRequest(){const e={requestUri:QR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),e.postBody=Xl(i)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XR(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $R(r){const e=Cl(Il(r)).link,i=e?Cl(Il(e)).deep_link_id:null,a=Cl(Il(r)).deep_link_id;return(a?Cl(Il(a)).link:null)||a||i||e||r}class Yp{constructor(e){const i=Cl(Il(e)),a=i.apiKey??null,l=i.oobCode??null,c=XR(i.mode??null);ye(a&&l&&c,"argument-error"),this.apiKey=a,this.operation=c,this.code=l,this.continueUrl=i.continueUrl??null,this.languageCode=i.lang??null,this.tenantId=i.tenantId??null}static parseLink(e){const i=$R(e);try{return new Yp(i)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(){this.providerId=po.PROVIDER_ID}static credential(e,i){return Bl._fromEmailAndPassword(e,i)}static credentialWithLink(e,i){const a=Yp.parseLink(i);return ye(a,"argument-error"),Bl._fromEmailAndCode(e,a.code,a.tenantId)}}po.PROVIDER_ID="password";po.EMAIL_PASSWORD_SIGN_IN_METHOD="password";po.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl extends A0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr extends Zl{constructor(){super("facebook.com")}static credential(e){return Xs._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yr.credential(e.oauthAccessToken)}catch{return null}}}Yr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends Zl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,i){return Xs._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:i})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:i,oauthAccessToken:a}=e;if(!i&&!a)return null;try{return Qr.credential(i,a)}catch{return null}}}Qr.GOOGLE_SIGN_IN_METHOD="google.com";Qr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends Zl{constructor(){super("github.com")}static credential(e){return Xs._fromParams({providerId:Xr.PROVIDER_ID,signInMethod:Xr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xr.credentialFromTaggedObject(e)}static credentialFromError(e){return Xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xr.credential(e.oauthAccessToken)}catch{return null}}}Xr.GITHUB_SIGN_IN_METHOD="github.com";Xr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r extends Zl{constructor(){super("twitter.com")}static credential(e,i){return Xs._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:i})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:i,oauthTokenSecret:a}=e;if(!i||!a)return null;try{return $r.credential(i,a)}catch{return null}}}$r.TWITTER_SIGN_IN_METHOD="twitter.com";$r.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JR(r,e){return Jl(r,"POST","/v1/accounts:signUp",us(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,i,a,l=!1){const c=await ei._fromIdTokenResponse(e,a,l),d=Iv(a);return new $s({user:c,providerId:d,_tokenResponse:a,operationType:i})}static async _forOperation(e,i,a){await e._updateTokensIfNecessary(a,!0);const l=Iv(a);return new $s({user:e,providerId:l,_tokenResponse:a,operationType:i})}}function Iv(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh extends Vi{constructor(e,i,a,l){super(i.code,i.message),this.operationType=a,this.user=l,Object.setPrototypeOf(this,lh.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:i.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(e,i,a,l){return new lh(e,i,a,l)}}function w0(r,e,i,a){return(e==="reauthenticate"?i._getReauthenticationResolver(r):i._getIdTokenResponse(r)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?lh._fromErrorAndOperation(r,c,e,a):c})}async function ZR(r,e,i=!1){const a=await ro(r,e._linkToIdToken(r.auth,await r.getIdToken()),i);return $s._forOperation(r,"link",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WR(r,e,i=!1){const{auth:a}=r;if(An(a.app))return Promise.reject(rr(a));const l="reauthenticate";try{const c=await ro(r,w0(a,l,e,r),i);ye(c.idToken,a,"internal-error");const d=Fp(c.idToken);ye(d,a,"internal-error");const{sub:m}=d;return ye(r.uid===m,a,"user-mismatch"),$s._forOperation(r,l,c)}catch(c){throw c?.code==="auth/user-not-found"&&ii(a,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R0(r,e,i=!1){if(An(r.app))return Promise.reject(rr(r));const a="signIn",l=await w0(r,a,e),c=await $s._fromIdTokenResponse(r,a,l);return i||await r._updateCurrentUser(c.user),c}async function eC(r,e){return R0(ia(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C0(r){const e=ia(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function tC(r,e,i){if(An(r.app))return Promise.reject(rr(r));const a=ia(r),d=await dp(a,{returnSecureToken:!0,email:e,password:i,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",JR).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&C0(r),g}),m=await $s._fromIdTokenResponse(a,"signIn",d);return await a._updateCurrentUser(m.user),m}function nC(r,e,i){return An(r.app)?Promise.reject(rr(r)):eC(Pt(r),po.credential(e,i)).catch(async a=>{throw a.code==="auth/password-does-not-meet-requirements"&&C0(r),a})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iC(r,e){return hr(r,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rC(r,{displayName:e,photoURL:i}){if(e===void 0&&i===void 0)return;const a=Pt(r),c={idToken:await a.getIdToken(),displayName:e,photoUrl:i,returnSecureToken:!0},d=await ro(a,iC(a.auth,c));a.displayName=d.displayName||null,a.photoURL=d.photoUrl||null;const m=a.providerData.find(({providerId:g})=>g==="password");m&&(m.displayName=a.displayName,m.photoURL=a.photoURL),await a._updateTokensIfNecessary(d)}function sC(r,e,i,a){return Pt(r).onIdTokenChanged(e,i,a)}function aC(r,e,i){return Pt(r).beforeAuthStateChanged(e,i)}function oC(r,e,i,a){return Pt(r).onAuthStateChanged(e,i,a)}const uh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(e,i){this.storageRetriever=e,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(uh,"1"),this.storage.removeItem(uh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,i){return this.storage.setItem(e,JSON.stringify(i)),Promise.resolve()}_get(e){const i=this.storage.getItem(e);return Promise.resolve(i?JSON.parse(i):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC=1e3,uC=10;class D0 extends I0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,i)=>this.onStorageEvent(e,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=v0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const i of Object.keys(this.listeners)){const a=this.storage.getItem(i),l=this.localCache[i];a!==l&&e(i,l,a)}}onStorageEvent(e,i=!1){if(!e.key){this.forAllChangedKeys((d,m,g)=>{this.notifyListeners(d,g)});return}const a=e.key;i?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(a);!i&&this.localCache[a]===d||this.notifyListeners(a,d)},c=this.storage.getItem(a);wR()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,uC):l()}notifyListeners(e,i){this.localCache[e]=i;const a=this.listeners[e];if(a)for(const l of Array.from(a))l(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,i,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:i,newValue:a}),!0)})},lC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,i){await super._set(e,i),this.localCache[e]=JSON.stringify(i)}async _get(e){const i=await super._get(e);return this.localCache[e]=JSON.stringify(i),i}async _remove(e){await super._remove(e),delete this.localCache[e]}}D0.type="LOCAL";const cC=D0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0 extends I0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,i){}_removeListener(e,i){}}O0.type="SESSION";const x0=O0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hC(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const i=this.receivers.find(l=>l.isListeningto(e));if(i)return i;const a=new Ch(e);return this.receivers.push(a),a}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const i=e,{eventId:a,eventType:l,data:c}=i.data,d=this.handlersMap[l];if(!d?.size)return;i.ports[0].postMessage({status:"ack",eventId:a,eventType:l});const m=Array.from(d).map(async y=>y(i.origin,c)),g=await hC(m);i.ports[0].postMessage({status:"done",eventId:a,eventType:l,response:g})}_subscribe(e,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(i)}_unsubscribe(e,i){this.handlersMap[e]&&i&&this.handlersMap[e].delete(i),(!i||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ch.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(r="",e=10){let i="";for(let a=0;a<e;a++)i+=Math.floor(Math.random()*10);return r+i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,i,a=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let c,d;return new Promise((m,g)=>{const y=Qp("",20);l.port1.start();const T=setTimeout(()=>{g(new Error("unsupported_event"))},a);d={messageChannel:l,onMessage(S){const D=S;if(D.data.eventId===y)switch(D.data.status){case"ack":clearTimeout(T),c=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),m(D.data.response);break;default:clearTimeout(T),clearTimeout(c),g(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:y,data:i},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(){return window}function dC(r){xi().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N0(){return typeof xi().WorkerGlobalScope<"u"&&typeof xi().importScripts=="function"}async function pC(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mC(){return navigator?.serviceWorker?.controller||null}function gC(){return N0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0="firebaseLocalStorageDb",yC=1,ch="firebaseLocalStorage",k0="fbase_key";class Wl{constructor(e){this.request=e}toPromise(){return new Promise((e,i)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function Ih(r,e){return r.transaction([ch],e?"readwrite":"readonly").objectStore(ch)}function _C(){const r=indexedDB.deleteDatabase(M0);return new Wl(r).toPromise()}function pp(){const r=indexedDB.open(M0,yC);return new Promise((e,i)=>{r.addEventListener("error",()=>{i(r.error)}),r.addEventListener("upgradeneeded",()=>{const a=r.result;try{a.createObjectStore(ch,{keyPath:k0})}catch(l){i(l)}}),r.addEventListener("success",async()=>{const a=r.result;a.objectStoreNames.contains(ch)?e(a):(a.close(),await _C(),e(await pp()))})})}async function Dv(r,e,i){const a=Ih(r,!0).put({[k0]:e,value:i});return new Wl(a).toPromise()}async function vC(r,e){const i=Ih(r,!1).get(e),a=await new Wl(i).toPromise();return a===void 0?null:a.value}function Ov(r,e){const i=Ih(r,!0).delete(e);return new Wl(i).toPromise()}const EC=800,TC=3;class V0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pp(),this.db)}async _withRetries(e){let i=0;for(;;)try{const a=await this._openDb();return await e(a)}catch(a){if(i++>TC)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return N0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ch._getInstance(gC()),this.receiver._subscribe("keyChanged",async(e,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(e,i)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await pC(),!this.activeServiceWorker)return;this.sender=new fC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pp();return await Dv(e,uh,"1"),await Ov(e,uh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,i){return this._withPendingWrite(async()=>(await this._withRetries(a=>Dv(a,e,i)),this.localCache[e]=i,this.notifyServiceWorker(e)))}async _get(e){const i=await this._withRetries(a=>vC(a,e));return this.localCache[e]=i,i}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(i=>Ov(i,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const c=Ih(l,!1).getAll();return new Wl(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const i=[],a=new Set;if(e.length!==0)for(const{fbase_key:l,value:c}of e)a.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(c)&&(this.notifyListeners(l,c),i.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!a.has(l)&&(this.notifyListeners(l,null),i.push(l));return i}notifyListeners(e,i){this.localCache[e]=i;const a=this.listeners[e];if(a)for(const l of Array.from(a))l(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),EC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}V0.type="LOCAL";const bC=V0;new $l(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SC(r,e){return e?nr(e):(ye(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp extends Kp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return to(e,this._buildIdpRequest())}_linkToIdToken(e,i){return to(e,this._buildIdpRequest(i))}_getReauthenticationResolver(e){return to(e,this._buildIdpRequest())}_buildIdpRequest(e){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(i.idToken=e),i}}function AC(r){return R0(r.auth,new Xp(r),r.bypassAuthState)}function wC(r){const{auth:e,user:i}=r;return ye(i,e,"internal-error"),WR(i,new Xp(r),r.bypassAuthState)}async function RC(r){const{auth:e,user:i}=r;return ye(i,e,"internal-error"),ZR(i,new Xp(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e,i,a,l,c=!1){this.auth=e,this.resolver=a,this.user=l,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(e,i)=>{this.pendingPromise={resolve:e,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(e){const{urlResponse:i,sessionId:a,postBody:l,tenantId:c,error:d,type:m}=e;if(d){this.reject(d);return}const g={auth:this.auth,requestUri:i,sessionId:a,tenantId:c||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return AC;case"linkViaPopup":case"linkViaRedirect":return RC;case"reauthViaPopup":case"reauthViaRedirect":return wC;default:ii(this.auth,"internal-error")}}resolve(e){cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC=new $l(2e3,1e4);class Za extends U0{constructor(e,i,a,l,c){super(e,i,l,c),this.provider=a,this.authWindow=null,this.pollId=null,Za.currentPopupAction&&Za.currentPopupAction.cancel(),Za.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ye(e,this.auth,"internal-error"),e}async onExecution(){cr(this.filter.length===1,"Popup operations only handle one event");const e=Qp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(Oi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Oi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Za.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Oi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,CC.get())};e()}}Za.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC="pendingRedirect",Xc=new Map;class DC extends U0{constructor(e,i,a=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,a),this.eventId=null}async execute(){let e=Xc.get(this.auth._key());if(!e){try{const a=await OC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(a)}catch(i){e=()=>Promise.reject(i)}Xc.set(this.auth._key(),e)}return this.bypassAuthState||Xc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const i=await this.auth._redirectUserForId(e.eventId);if(i)return this.user=i,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function OC(r,e){const i=MC(e),a=NC(r);if(!await a._isAvailable())return!1;const l=await a._get(i)==="true";return await a._remove(i),l}function xC(r,e){Xc.set(r._key(),e)}function NC(r){return nr(r._redirectPersistence)}function MC(r){return Qc(IC,r.config.apiKey,r.name)}async function kC(r,e,i=!1){if(An(r.app))return Promise.reject(rr(r));const a=ia(r),l=SC(a,e),d=await new DC(a,l,i).execute();return d&&!i&&(delete d.user._redirectEventId,await a._persistUserIfCurrent(d.user),await a._setRedirectUser(null,e)),d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VC=600*1e3;class UC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let i=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(e,a)&&(i=!0,this.sendToConsumer(e,a),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!LC(e)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=e,i=!0)),i}sendToConsumer(e,i){if(e.error&&!L0(e)){const a=e.error.code?.split("auth/")[1]||"internal-error";i.onError(Oi(this.auth,a))}else i.onAuthEvent(e)}isEventForConsumer(e,i){const a=i.eventId===null||!!e.eventId&&e.eventId===i.eventId;return i.filter.includes(e.type)&&a}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=VC&&this.cachedEventUids.clear(),this.cachedEventUids.has(xv(e))}saveEventToCache(e){this.cachedEventUids.add(xv(e)),this.lastProcessedEventTime=Date.now()}}function xv(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function L0({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function LC(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return L0(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PC(r,e={}){return hr(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,BC=/^https?/;async function jC(r){if(r.config.emulator)return;const{authorizedDomains:e}=await PC(r);for(const i of e)try{if(HC(i))return}catch{}ii(r,"unauthorized-domain")}function HC(r){const e=hp(),{protocol:i,hostname:a}=new URL(e);if(r.startsWith("chrome-extension://")){const d=new URL(r);return d.hostname===""&&a===""?i==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):i==="chrome-extension:"&&d.hostname===a}if(!BC.test(i))return!1;if(zC.test(r))return a===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(a)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qC=new $l(3e4,6e4);function Nv(){const r=xi().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let i=0;i<r.CP.length;i++)r.CP[i]=null}}function FC(r){return new Promise((e,i)=>{function a(){Nv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nv(),i(Oi(r,"network-request-failed"))},timeout:qC.get()})}if(xi().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(xi().gapi?.load)a();else{const l=kR("iframefcb");return xi()[l]=()=>{gapi.load?a():i(Oi(r,"network-request-failed"))},T0(`${MR()}?onload=${l}`).catch(c=>i(c))}}).catch(e=>{throw $c=null,e})}let $c=null;function GC(r){return $c=$c||FC(r),$c}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC=new $l(5e3,15e3),YC="__/auth/iframe",QC="emulator/auth/iframe",XC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$C=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function JC(r){const e=r.config;ye(e.authDomain,r,"auth-domain-config-required");const i=e.emulator?qp(e,QC):`https://${r.config.authDomain}/${YC}`,a={apiKey:e.apiKey,appName:r.name,v:na},l=$C.get(r.config.apiHost);l&&(a.eid=l);const c=r._getFrameworks();return c.length&&(a.fw=c.join(",")),`${i}?${Xl(a).slice(1)}`}async function ZC(r){const e=await GC(r),i=xi().gapi;return ye(i,r,"internal-error"),e.open({where:document.body,url:JC(r),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XC,dontclear:!0},a=>new Promise(async(l,c)=>{await a.restyle({setHideOnLeave:!1});const d=Oi(r,"network-request-failed"),m=xi().setTimeout(()=>{c(d)},KC.get());function g(){xi().clearTimeout(m),l(a)}a.ping(g).then(g,()=>{c(d)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},e2=500,t2=600,n2="_blank",i2="http://localhost";class Mv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function r2(r,e,i,a=e2,l=t2){const c=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-a)/2,0).toString();let m="";const g={...WC,width:a.toString(),height:l.toString(),top:c,left:d},y=en().toLowerCase();i&&(m=p0(y)?n2:i),f0(y)&&(e=e||i2,g.scrollbars="yes");const T=Object.entries(g).reduce((D,[L,K])=>`${D}${L}=${K},`,"");if(AR(y)&&m!=="_self")return s2(e||"",m),new Mv(null);const S=window.open(e||"",m,T);ye(S,r,"popup-blocked");try{S.focus()}catch{}return new Mv(S)}function s2(r,e){const i=document.createElement("a");i.href=r,i.target=e;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a2="__/auth/handler",o2="emulator/auth/handler",l2=encodeURIComponent("fac");async function kv(r,e,i,a,l,c){ye(r.config.authDomain,r,"auth-domain-config-required"),ye(r.config.apiKey,r,"invalid-api-key");const d={apiKey:r.config.apiKey,appName:r.name,authType:i,redirectUrl:a,v:na,eventId:l};if(e instanceof A0){e.setDefaultLanguage(r.languageCode),d.providerId=e.providerId||"",F1(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[T,S]of Object.entries({}))d[T]=S}if(e instanceof Zl){const T=e.getScopes().filter(S=>S!=="");T.length>0&&(d.scopes=T.join(","))}r.tenantId&&(d.tid=r.tenantId);const m=d;for(const T of Object.keys(m))m[T]===void 0&&delete m[T];const g=await r._getAppCheckToken(),y=g?`#${l2}=${encodeURIComponent(g)}`:"";return`${u2(r)}?${Xl(m).slice(1)}${y}`}function u2({config:r}){return r.emulator?qp(r,o2):`https://${r.authDomain}/${a2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd="webStorageSupport";class c2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=x0,this._completeRedirectFn=kC,this._overrideRedirectResult=xC}async _openPopup(e,i,a,l){cr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const c=await kv(e,i,a,hp(),l);return r2(e,c,Qp())}async _openRedirect(e,i,a,l){await this._originValidation(e);const c=await kv(e,i,a,hp(),l);return dC(c),new Promise(()=>{})}_initialize(e){const i=e._key();if(this.eventManagers[i]){const{manager:l,promise:c}=this.eventManagers[i];return l?Promise.resolve(l):(cr(c,"If manager is not set, promise should be"),c)}const a=this.initAndGetManager(e);return this.eventManagers[i]={promise:a},a.catch(()=>{delete this.eventManagers[i]}),a}async initAndGetManager(e){const i=await ZC(e),a=new UC(e);return i.register("authEvent",l=>(ye(l?.authEvent,e,"invalid-auth-event"),{status:a.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:a},this.iframes[e._key()]=i,a}_isIframeWebStorageSupported(e,i){this.iframes[e._key()].send(Jd,{type:Jd},l=>{const c=l?.[0]?.[Jd];c!==void 0&&i(!!c),ii(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const i=e._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=jC(e)),this.originValidationPromises[i]}get _shouldInitProactively(){return v0()||d0()||Gp()}}const h2=c2;var Vv="@firebase/auth",Uv="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const i=this.auth.onIdTokenChanged(a=>{e(a?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,i),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const i=this.internalListeners.get(e);i&&(this.internalListeners.delete(e),i(),this.updateProactiveRefresh())}assertAuthConfigured(){ye(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d2(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function p2(r){Qs(new ns("auth",(e,{options:i})=>{const a=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:d,authDomain:m}=a.options;ye(d&&!d.includes(":"),"invalid-api-key",{appName:a.name});const g={apiKey:d,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:E0(r)},y=new OR(a,l,c,g);return BR(y,i),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,i,a)=>{e.getProvider("auth-internal").initialize()})),Qs(new ns("auth-internal",e=>{const i=ia(e.getProvider("auth").getImmediate());return(a=>new f2(a))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),Di(Vv,Uv,d2(r)),Di(Vv,Uv,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m2=300,g2=JE("authIdTokenMaxAge")||m2;let Lv=null;const y2=r=>async e=>{const i=e&&await e.getIdTokenResult(),a=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(a&&a>g2)return;const l=i?.token;Lv!==l&&(Lv=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function _2(r=jp()){const e=wh(r,"auth");if(e.isInitialized())return e.getImmediate();const i=zR(r,{popupRedirectResolver:h2,persistence:[bC,cC,x0]}),a=JE("authTokenSyncURL");if(a&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(a,location.origin);if(location.origin===c.origin){const d=y2(c.toString());aC(i,d,()=>d(i.currentUser)),sC(i,m=>d(m))}}const l=QE("auth");return l&&jR(i,`http://${l}`),i}function v2(){return document.getElementsByTagName("head")?.[0]??document}xR({loadJS(r){return new Promise((e,i)=>{const a=document.createElement("script");a.setAttribute("src",r),a.onload=e,a.onerror=l=>{const c=Oi("internal-error");c.customData=l,i(c)},a.type="text/javascript",a.charset="UTF-8",v2().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});p2("Browser");var Pv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $p;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,A){function w(){}w.prototype=A.prototype,I.F=A.prototype,I.prototype=new w,I.prototype.constructor=I,I.D=function(M,O,V){for(var R=Array(arguments.length-2),We=2;We<arguments.length;We++)R[We-2]=arguments[We];return A.prototype[O].apply(M,R)}}function i(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(a,i),a.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function l(I,A,w){w||(w=0);const M=Array(16);if(typeof A=="string")for(var O=0;O<16;++O)M[O]=A.charCodeAt(w++)|A.charCodeAt(w++)<<8|A.charCodeAt(w++)<<16|A.charCodeAt(w++)<<24;else for(O=0;O<16;++O)M[O]=A[w++]|A[w++]<<8|A[w++]<<16|A[w++]<<24;A=I.g[0],w=I.g[1],O=I.g[2];let V=I.g[3],R;R=A+(V^w&(O^V))+M[0]+3614090360&4294967295,A=w+(R<<7&4294967295|R>>>25),R=V+(O^A&(w^O))+M[1]+3905402710&4294967295,V=A+(R<<12&4294967295|R>>>20),R=O+(w^V&(A^w))+M[2]+606105819&4294967295,O=V+(R<<17&4294967295|R>>>15),R=w+(A^O&(V^A))+M[3]+3250441966&4294967295,w=O+(R<<22&4294967295|R>>>10),R=A+(V^w&(O^V))+M[4]+4118548399&4294967295,A=w+(R<<7&4294967295|R>>>25),R=V+(O^A&(w^O))+M[5]+1200080426&4294967295,V=A+(R<<12&4294967295|R>>>20),R=O+(w^V&(A^w))+M[6]+2821735955&4294967295,O=V+(R<<17&4294967295|R>>>15),R=w+(A^O&(V^A))+M[7]+4249261313&4294967295,w=O+(R<<22&4294967295|R>>>10),R=A+(V^w&(O^V))+M[8]+1770035416&4294967295,A=w+(R<<7&4294967295|R>>>25),R=V+(O^A&(w^O))+M[9]+2336552879&4294967295,V=A+(R<<12&4294967295|R>>>20),R=O+(w^V&(A^w))+M[10]+4294925233&4294967295,O=V+(R<<17&4294967295|R>>>15),R=w+(A^O&(V^A))+M[11]+2304563134&4294967295,w=O+(R<<22&4294967295|R>>>10),R=A+(V^w&(O^V))+M[12]+1804603682&4294967295,A=w+(R<<7&4294967295|R>>>25),R=V+(O^A&(w^O))+M[13]+4254626195&4294967295,V=A+(R<<12&4294967295|R>>>20),R=O+(w^V&(A^w))+M[14]+2792965006&4294967295,O=V+(R<<17&4294967295|R>>>15),R=w+(A^O&(V^A))+M[15]+1236535329&4294967295,w=O+(R<<22&4294967295|R>>>10),R=A+(O^V&(w^O))+M[1]+4129170786&4294967295,A=w+(R<<5&4294967295|R>>>27),R=V+(w^O&(A^w))+M[6]+3225465664&4294967295,V=A+(R<<9&4294967295|R>>>23),R=O+(A^w&(V^A))+M[11]+643717713&4294967295,O=V+(R<<14&4294967295|R>>>18),R=w+(V^A&(O^V))+M[0]+3921069994&4294967295,w=O+(R<<20&4294967295|R>>>12),R=A+(O^V&(w^O))+M[5]+3593408605&4294967295,A=w+(R<<5&4294967295|R>>>27),R=V+(w^O&(A^w))+M[10]+38016083&4294967295,V=A+(R<<9&4294967295|R>>>23),R=O+(A^w&(V^A))+M[15]+3634488961&4294967295,O=V+(R<<14&4294967295|R>>>18),R=w+(V^A&(O^V))+M[4]+3889429448&4294967295,w=O+(R<<20&4294967295|R>>>12),R=A+(O^V&(w^O))+M[9]+568446438&4294967295,A=w+(R<<5&4294967295|R>>>27),R=V+(w^O&(A^w))+M[14]+3275163606&4294967295,V=A+(R<<9&4294967295|R>>>23),R=O+(A^w&(V^A))+M[3]+4107603335&4294967295,O=V+(R<<14&4294967295|R>>>18),R=w+(V^A&(O^V))+M[8]+1163531501&4294967295,w=O+(R<<20&4294967295|R>>>12),R=A+(O^V&(w^O))+M[13]+2850285829&4294967295,A=w+(R<<5&4294967295|R>>>27),R=V+(w^O&(A^w))+M[2]+4243563512&4294967295,V=A+(R<<9&4294967295|R>>>23),R=O+(A^w&(V^A))+M[7]+1735328473&4294967295,O=V+(R<<14&4294967295|R>>>18),R=w+(V^A&(O^V))+M[12]+2368359562&4294967295,w=O+(R<<20&4294967295|R>>>12),R=A+(w^O^V)+M[5]+4294588738&4294967295,A=w+(R<<4&4294967295|R>>>28),R=V+(A^w^O)+M[8]+2272392833&4294967295,V=A+(R<<11&4294967295|R>>>21),R=O+(V^A^w)+M[11]+1839030562&4294967295,O=V+(R<<16&4294967295|R>>>16),R=w+(O^V^A)+M[14]+4259657740&4294967295,w=O+(R<<23&4294967295|R>>>9),R=A+(w^O^V)+M[1]+2763975236&4294967295,A=w+(R<<4&4294967295|R>>>28),R=V+(A^w^O)+M[4]+1272893353&4294967295,V=A+(R<<11&4294967295|R>>>21),R=O+(V^A^w)+M[7]+4139469664&4294967295,O=V+(R<<16&4294967295|R>>>16),R=w+(O^V^A)+M[10]+3200236656&4294967295,w=O+(R<<23&4294967295|R>>>9),R=A+(w^O^V)+M[13]+681279174&4294967295,A=w+(R<<4&4294967295|R>>>28),R=V+(A^w^O)+M[0]+3936430074&4294967295,V=A+(R<<11&4294967295|R>>>21),R=O+(V^A^w)+M[3]+3572445317&4294967295,O=V+(R<<16&4294967295|R>>>16),R=w+(O^V^A)+M[6]+76029189&4294967295,w=O+(R<<23&4294967295|R>>>9),R=A+(w^O^V)+M[9]+3654602809&4294967295,A=w+(R<<4&4294967295|R>>>28),R=V+(A^w^O)+M[12]+3873151461&4294967295,V=A+(R<<11&4294967295|R>>>21),R=O+(V^A^w)+M[15]+530742520&4294967295,O=V+(R<<16&4294967295|R>>>16),R=w+(O^V^A)+M[2]+3299628645&4294967295,w=O+(R<<23&4294967295|R>>>9),R=A+(O^(w|~V))+M[0]+4096336452&4294967295,A=w+(R<<6&4294967295|R>>>26),R=V+(w^(A|~O))+M[7]+1126891415&4294967295,V=A+(R<<10&4294967295|R>>>22),R=O+(A^(V|~w))+M[14]+2878612391&4294967295,O=V+(R<<15&4294967295|R>>>17),R=w+(V^(O|~A))+M[5]+4237533241&4294967295,w=O+(R<<21&4294967295|R>>>11),R=A+(O^(w|~V))+M[12]+1700485571&4294967295,A=w+(R<<6&4294967295|R>>>26),R=V+(w^(A|~O))+M[3]+2399980690&4294967295,V=A+(R<<10&4294967295|R>>>22),R=O+(A^(V|~w))+M[10]+4293915773&4294967295,O=V+(R<<15&4294967295|R>>>17),R=w+(V^(O|~A))+M[1]+2240044497&4294967295,w=O+(R<<21&4294967295|R>>>11),R=A+(O^(w|~V))+M[8]+1873313359&4294967295,A=w+(R<<6&4294967295|R>>>26),R=V+(w^(A|~O))+M[15]+4264355552&4294967295,V=A+(R<<10&4294967295|R>>>22),R=O+(A^(V|~w))+M[6]+2734768916&4294967295,O=V+(R<<15&4294967295|R>>>17),R=w+(V^(O|~A))+M[13]+1309151649&4294967295,w=O+(R<<21&4294967295|R>>>11),R=A+(O^(w|~V))+M[4]+4149444226&4294967295,A=w+(R<<6&4294967295|R>>>26),R=V+(w^(A|~O))+M[11]+3174756917&4294967295,V=A+(R<<10&4294967295|R>>>22),R=O+(A^(V|~w))+M[2]+718787259&4294967295,O=V+(R<<15&4294967295|R>>>17),R=w+(V^(O|~A))+M[9]+3951481745&4294967295,I.g[0]=I.g[0]+A&4294967295,I.g[1]=I.g[1]+(O+(R<<21&4294967295|R>>>11))&4294967295,I.g[2]=I.g[2]+O&4294967295,I.g[3]=I.g[3]+V&4294967295}a.prototype.v=function(I,A){A===void 0&&(A=I.length);const w=A-this.blockSize,M=this.C;let O=this.h,V=0;for(;V<A;){if(O==0)for(;V<=w;)l(this,I,V),V+=this.blockSize;if(typeof I=="string"){for(;V<A;)if(M[O++]=I.charCodeAt(V++),O==this.blockSize){l(this,M),O=0;break}}else for(;V<A;)if(M[O++]=I[V++],O==this.blockSize){l(this,M),O=0;break}}this.h=O,this.o+=A},a.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var A=1;A<I.length-8;++A)I[A]=0;A=this.o*8;for(var w=I.length-8;w<I.length;++w)I[w]=A&255,A/=256;for(this.v(I),I=Array(16),A=0,w=0;w<4;++w)for(let M=0;M<32;M+=8)I[A++]=this.g[w]>>>M&255;return I};function c(I,A){var w=m;return Object.prototype.hasOwnProperty.call(w,I)?w[I]:w[I]=A(I)}function d(I,A){this.h=A;const w=[];let M=!0;for(let O=I.length-1;O>=0;O--){const V=I[O]|0;M&&V==A||(w[O]=V,M=!1)}this.g=w}var m={};function g(I){return-128<=I&&I<128?c(I,function(A){return new d([A|0],A<0?-1:0)}):new d([I|0],I<0?-1:0)}function y(I){if(isNaN(I)||!isFinite(I))return S;if(I<0)return G(y(-I));const A=[];let w=1;for(let M=0;I>=w;M++)A[M]=I/w|0,w*=4294967296;return new d(A,0)}function T(I,A){if(I.length==0)throw Error("number format error: empty string");if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(I.charAt(0)=="-")return G(T(I.substring(1),A));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=y(Math.pow(A,8));let M=S;for(let V=0;V<I.length;V+=8){var O=Math.min(8,I.length-V);const R=parseInt(I.substring(V,V+O),A);O<8?(O=y(Math.pow(A,O)),M=M.j(O).add(y(R))):(M=M.j(w),M=M.add(y(R)))}return M}var S=g(0),D=g(1),L=g(16777216);r=d.prototype,r.m=function(){if(Z(this))return-G(this).m();let I=0,A=1;for(let w=0;w<this.g.length;w++){const M=this.i(w);I+=(M>=0?M:4294967296+M)*A,A*=4294967296}return I},r.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(K(this))return"0";if(Z(this))return"-"+G(this).toString(I);const A=y(Math.pow(I,6));var w=this;let M="";for(;;){const O=oe(w,A).g;w=ee(w,O.j(A));let V=((w.g.length>0?w.g[0]:w.h)>>>0).toString(I);if(w=O,K(w))return V+M;for(;V.length<6;)V="0"+V;M=V+M}},r.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function K(I){if(I.h!=0)return!1;for(let A=0;A<I.g.length;A++)if(I.g[A]!=0)return!1;return!0}function Z(I){return I.h==-1}r.l=function(I){return I=ee(this,I),Z(I)?-1:K(I)?0:1};function G(I){const A=I.g.length,w=[];for(let M=0;M<A;M++)w[M]=~I.g[M];return new d(w,~I.h).add(D)}r.abs=function(){return Z(this)?G(this):this},r.add=function(I){const A=Math.max(this.g.length,I.g.length),w=[];let M=0;for(let O=0;O<=A;O++){let V=M+(this.i(O)&65535)+(I.i(O)&65535),R=(V>>>16)+(this.i(O)>>>16)+(I.i(O)>>>16);M=R>>>16,V&=65535,R&=65535,w[O]=R<<16|V}return new d(w,w[w.length-1]&-2147483648?-1:0)};function ee(I,A){return I.add(G(A))}r.j=function(I){if(K(this)||K(I))return S;if(Z(this))return Z(I)?G(this).j(G(I)):G(G(this).j(I));if(Z(I))return G(this.j(G(I)));if(this.l(L)<0&&I.l(L)<0)return y(this.m()*I.m());const A=this.g.length+I.g.length,w=[];for(var M=0;M<2*A;M++)w[M]=0;for(M=0;M<this.g.length;M++)for(let O=0;O<I.g.length;O++){const V=this.i(M)>>>16,R=this.i(M)&65535,We=I.i(O)>>>16,Dt=I.i(O)&65535;w[2*M+2*O]+=R*Dt,ne(w,2*M+2*O),w[2*M+2*O+1]+=V*Dt,ne(w,2*M+2*O+1),w[2*M+2*O+1]+=R*We,ne(w,2*M+2*O+1),w[2*M+2*O+2]+=V*We,ne(w,2*M+2*O+2)}for(I=0;I<A;I++)w[I]=w[2*I+1]<<16|w[2*I];for(I=A;I<2*A;I++)w[I]=0;return new d(w,0)};function ne(I,A){for(;(I[A]&65535)!=I[A];)I[A+1]+=I[A]>>>16,I[A]&=65535,A++}function re(I,A){this.g=I,this.h=A}function oe(I,A){if(K(A))throw Error("division by zero");if(K(I))return new re(S,S);if(Z(I))return A=oe(G(I),A),new re(G(A.g),G(A.h));if(Z(A))return A=oe(I,G(A)),new re(G(A.g),A.h);if(I.g.length>30){if(Z(I)||Z(A))throw Error("slowDivide_ only works with positive integers.");for(var w=D,M=A;M.l(I)<=0;)w=me(w),M=me(M);var O=Ee(w,1),V=Ee(M,1);for(M=Ee(M,2),w=Ee(w,2);!K(M);){var R=V.add(M);R.l(I)<=0&&(O=O.add(w),V=R),M=Ee(M,1),w=Ee(w,1)}return A=ee(I,O.j(A)),new re(O,A)}for(O=S;I.l(A)>=0;){for(w=Math.max(1,Math.floor(I.m()/A.m())),M=Math.ceil(Math.log(w)/Math.LN2),M=M<=48?1:Math.pow(2,M-48),V=y(w),R=V.j(A);Z(R)||R.l(I)>0;)w-=M,V=y(w),R=V.j(A);K(V)&&(V=D),O=O.add(V),I=ee(I,R)}return new re(O,I)}r.B=function(I){return oe(this,I).h},r.and=function(I){const A=Math.max(this.g.length,I.g.length),w=[];for(let M=0;M<A;M++)w[M]=this.i(M)&I.i(M);return new d(w,this.h&I.h)},r.or=function(I){const A=Math.max(this.g.length,I.g.length),w=[];for(let M=0;M<A;M++)w[M]=this.i(M)|I.i(M);return new d(w,this.h|I.h)},r.xor=function(I){const A=Math.max(this.g.length,I.g.length),w=[];for(let M=0;M<A;M++)w[M]=this.i(M)^I.i(M);return new d(w,this.h^I.h)};function me(I){const A=I.g.length+1,w=[];for(let M=0;M<A;M++)w[M]=I.i(M)<<1|I.i(M-1)>>>31;return new d(w,I.h)}function Ee(I,A){const w=A>>5;A%=32;const M=I.g.length-w,O=[];for(let V=0;V<M;V++)O[V]=A>0?I.i(V+w)>>>A|I.i(V+w+1)<<32-A:I.i(V+w);return new d(O,I.h)}a.prototype.digest=a.prototype.A,a.prototype.reset=a.prototype.u,a.prototype.update=a.prototype.v,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.B,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=y,d.fromString=T,$p=d}).apply(typeof Pv<"u"?Pv:typeof self<"u"?self:typeof window<"u"?window:{});var Lc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var P0,Dl,z0,Jc,mp,B0,j0,H0;(function(){var r,e=Object.defineProperty;function i(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Lc=="object"&&Lc];for(var p=0;p<u.length;++p){var v=u[p];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var a=i(this);function l(u,p){if(p)e:{var v=a;u=u.split(".");for(var b=0;b<u.length-1;b++){var U=u[b];if(!(U in v))break e;v=v[U]}u=u[u.length-1],b=v[u],p=p(b),p!=b&&p!=null&&e(v,u,{configurable:!0,writable:!0,value:p})}}l("Symbol.dispose",function(u){return u||Symbol("Symbol.dispose")}),l("Array.prototype.values",function(u){return u||function(){return this[Symbol.iterator]()}}),l("Object.entries",function(u){return u||function(p){var v=[],b;for(b in p)Object.prototype.hasOwnProperty.call(p,b)&&v.push([b,p[b]]);return v}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function m(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function g(u,p,v){return u.call.apply(u.bind,arguments)}function y(u,p,v){return y=g,y.apply(null,arguments)}function T(u,p){var v=Array.prototype.slice.call(arguments,1);return function(){var b=v.slice();return b.push.apply(b,arguments),u.apply(this,b)}}function S(u,p){function v(){}v.prototype=p.prototype,u.Z=p.prototype,u.prototype=new v,u.prototype.constructor=u,u.Ob=function(b,U,j){for(var ie=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)ie[Te-2]=arguments[Te];return p.prototype[U].apply(b,ie)}}var D=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?u=>u&&AsyncContext.Snapshot.wrap(u):u=>u;function L(u){const p=u.length;if(p>0){const v=Array(p);for(let b=0;b<p;b++)v[b]=u[b];return v}return[]}function K(u,p){for(let b=1;b<arguments.length;b++){const U=arguments[b];var v=typeof U;if(v=v!="object"?v:U?Array.isArray(U)?"array":v:"null",v=="array"||v=="object"&&typeof U.length=="number"){v=u.length||0;const j=U.length||0;u.length=v+j;for(let ie=0;ie<j;ie++)u[v+ie]=U[ie]}else u.push(U)}}class Z{constructor(p,v){this.i=p,this.j=v,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function G(u){d.setTimeout(()=>{throw u},0)}function ee(){var u=I;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class ne{constructor(){this.h=this.g=null}add(p,v){const b=re.get();b.set(p,v),this.h?this.h.next=b:this.g=b,this.h=b}}var re=new Z(()=>new oe,u=>u.reset());class oe{constructor(){this.next=this.g=this.h=null}set(p,v){this.h=p,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let me,Ee=!1,I=new ne,A=()=>{const u=Promise.resolve(void 0);me=()=>{u.then(w)}};function w(){for(var u;u=ee();){try{u.h.call(u.g)}catch(v){G(v)}var p=re;p.j(u),p.h<100&&(p.h++,u.next=p.g,p.g=u)}Ee=!1}function M(){this.u=this.u,this.C=this.C}M.prototype.u=!1,M.prototype.dispose=function(){this.u||(this.u=!0,this.N())},M.prototype[Symbol.dispose]=function(){this.dispose()},M.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function O(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}O.prototype.h=function(){this.defaultPrevented=!0};var V=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const v=()=>{};d.addEventListener("test",v,p),d.removeEventListener("test",v,p)}catch{}return u})();function R(u){return/^[\s\xa0]*$/.test(u)}function We(u,p){O.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u&&this.init(u,p)}S(We,O),We.prototype.init=function(u,p){const v=this.type=u.type,b=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget,p||(v=="mouseover"?p=u.fromElement:v=="mouseout"&&(p=u.toElement)),this.relatedTarget=p,b?(this.clientX=b.clientX!==void 0?b.clientX:b.pageX,this.clientY=b.clientY!==void 0?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=u.pointerType,this.state=u.state,this.i=u,u.defaultPrevented&&We.Z.h.call(this)},We.prototype.h=function(){We.Z.h.call(this);const u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Dt="closure_listenable_"+(Math.random()*1e6|0),Q=0;function se(u,p,v,b,U){this.listener=u,this.proxy=null,this.src=p,this.type=v,this.capture=!!b,this.ha=U,this.key=++Q,this.da=this.fa=!1}function pe(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Ve(u,p,v){for(const b in u)p.call(v,u[b],b,u)}function je(u,p){for(const v in u)p.call(void 0,u[v],v,u)}function N(u){const p={};for(const v in u)p[v]=u[v];return p}const J="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ae(u,p){let v,b;for(let U=1;U<arguments.length;U++){b=arguments[U];for(v in b)u[v]=b[v];for(let j=0;j<J.length;j++)v=J[j],Object.prototype.hasOwnProperty.call(b,v)&&(u[v]=b[v])}}function le(u){this.src=u,this.g={},this.h=0}le.prototype.add=function(u,p,v,b,U){const j=u.toString();u=this.g[j],u||(u=this.g[j]=[],this.h++);const ie=Se(u,p,b,U);return ie>-1?(p=u[ie],v||(p.fa=!1)):(p=new se(p,this.src,j,!!b,U),p.fa=v,u.push(p)),p};function _e(u,p){const v=p.type;if(v in u.g){var b=u.g[v],U=Array.prototype.indexOf.call(b,p,void 0),j;(j=U>=0)&&Array.prototype.splice.call(b,U,1),j&&(pe(p),u.g[v].length==0&&(delete u.g[v],u.h--))}}function Se(u,p,v,b){for(let U=0;U<u.length;++U){const j=u[U];if(!j.da&&j.listener==p&&j.capture==!!v&&j.ha==b)return U}return-1}var Me="closure_lm_"+(Math.random()*1e6|0),Ot={};function et(u,p,v,b,U){if(Array.isArray(p)){for(let j=0;j<p.length;j++)et(u,p[j],v,b,U);return null}return v=vo(v),u&&u[Dt]?u.J(p,v,m(b)?!!b.capture:!1,U):cs(u,p,v,!1,b,U)}function cs(u,p,v,b,U,j){if(!p)throw Error("Invalid event type");const ie=m(U)?!!U.capture:!!U;let Te=hs(u);if(Te||(u[Me]=Te=new le(u)),v=Te.add(p,v,b,ie,j),v.proxy)return v;if(b=aa(),v.proxy=b,b.src=u,b.listener=v,u.addEventListener)V||(U=ie),U===void 0&&(U=!1),u.addEventListener(p.toString(),b,U);else if(u.attachEvent)u.attachEvent(si(p.toString()),b);else if(u.addListener&&u.removeListener)u.addListener(b);else throw Error("addEventListener and attachEvent are unavailable.");return v}function aa(){function u(v){return p.call(u.src,u.listener,v)}const p=yo;return u}function oa(u,p,v,b,U){if(Array.isArray(p))for(var j=0;j<p.length;j++)oa(u,p[j],v,b,U);else b=m(b)?!!b.capture:!!b,v=vo(v),u&&u[Dt]?(u=u.i,j=String(p).toString(),j in u.g&&(p=u.g[j],v=Se(p,v,b,U),v>-1&&(pe(p[v]),Array.prototype.splice.call(p,v,1),p.length==0&&(delete u.g[j],u.h--)))):u&&(u=hs(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Se(p,v,b,U)),(v=u>-1?p[u]:null)&&la(v))}function la(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[Dt])_e(p.i,u);else{var v=u.type,b=u.proxy;p.removeEventListener?p.removeEventListener(v,b,u.capture):p.detachEvent?p.detachEvent(si(v),b):p.addListener&&p.removeListener&&p.removeListener(b),(v=hs(p))?(_e(v,u),v.h==0&&(v.src=null,p[Me]=null)):pe(u)}}}function si(u){return u in Ot?Ot[u]:Ot[u]="on"+u}function yo(u,p){if(u.da)u=!0;else{p=new We(p,this);const v=u.listener,b=u.ha||u.src;u.fa&&la(u),u=v.call(b,p)}return u}function hs(u){return u=u[Me],u instanceof le?u:null}var _o="__closure_events_fn_"+(Math.random()*1e9>>>0);function vo(u){return typeof u=="function"?u:(u[_o]||(u[_o]=function(p){return u.handleEvent(p)}),u[_o])}function yt(){M.call(this),this.i=new le(this),this.M=this,this.G=null}S(yt,M),yt.prototype[Dt]=!0,yt.prototype.removeEventListener=function(u,p,v,b){oa(this,u,p,v,b)};function xt(u,p){var v,b=u.G;if(b)for(v=[];b;b=b.G)v.push(b);if(u=u.M,b=p.type||p,typeof p=="string")p=new O(p,u);else if(p instanceof O)p.target=p.target||u;else{var U=p;p=new O(b,u),ae(p,U)}U=!0;let j,ie;if(v)for(ie=v.length-1;ie>=0;ie--)j=p.g=v[ie],U=fr(j,b,!0,p)&&U;if(j=p.g=u,U=fr(j,b,!0,p)&&U,U=fr(j,b,!1,p)&&U,v)for(ie=0;ie<v.length;ie++)j=p.g=v[ie],U=fr(j,b,!1,p)&&U}yt.prototype.N=function(){if(yt.Z.N.call(this),this.i){var u=this.i;for(const p in u.g){const v=u.g[p];for(let b=0;b<v.length;b++)pe(v[b]);delete u.g[p],u.h--}}this.G=null},yt.prototype.J=function(u,p,v,b){return this.i.add(String(u),p,!1,v,b)},yt.prototype.K=function(u,p,v,b){return this.i.add(String(u),p,!0,v,b)};function fr(u,p,v,b){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();let U=!0;for(let j=0;j<p.length;++j){const ie=p[j];if(ie&&!ie.da&&ie.capture==v){const Te=ie.listener,dt=ie.ha||ie.src;ie.fa&&_e(u.i,ie),U=Te.call(dt,b)!==!1&&U}}return U&&!b.defaultPrevented}function Ph(u,p){if(typeof u!="function")if(u&&typeof u.handleEvent=="function")u=y(u.handleEvent,u);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:d.setTimeout(u,p||0)}function au(u){u.g=Ph(()=>{u.g=null,u.i&&(u.i=!1,au(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class tn extends M{constructor(p,v){super(),this.m=p,this.l=v,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:au(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fs(u){M.call(this),this.h=u,this.g={}}S(fs,M);var Eo=[];function To(u){Ve(u.g,function(p,v){this.g.hasOwnProperty(v)&&la(p)},u),u.g={}}fs.prototype.N=function(){fs.Z.N.call(this),To(this)},fs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var dr=d.JSON.stringify,zh=d.JSON.parse,ou=class{stringify(u){return d.JSON.stringify(u,void 0)}parse(u){return d.JSON.parse(u,void 0)}};function lu(){}function uu(){}var zn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function zt(){O.call(this,"d")}S(zt,O);function Rn(){O.call(this,"c")}S(Rn,O);var ft={},cu=null;function ua(){return cu=cu||new yt}ft.Ia="serverreachability";function hu(u){O.call(this,ft.Ia,u)}S(hu,O);function ai(u){const p=ua();xt(p,new hu(p))}ft.STAT_EVENT="statevent";function ds(u,p){O.call(this,ft.STAT_EVENT,u),this.stat=p}S(ds,O);function _t(u){const p=ua();xt(p,new ds(p,u))}ft.Ja="timingevent";function oi(u,p){O.call(this,ft.Ja,u),this.size=p}S(oi,O);function li(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){u()},p)}function Bn(){this.g=!0}Bn.prototype.ua=function(){this.g=!1};function Bh(u,p,v,b,U,j){u.info(function(){if(u.g)if(j){var ie="",Te=j.split("&");for(let Pe=0;Pe<Te.length;Pe++){var dt=Te[Pe].split("=");if(dt.length>1){const tt=dt[0];dt=dt[1];const On=tt.split("_");ie=On.length>=2&&On[1]=="type"?ie+(tt+"="+dt+"&"):ie+(tt+"=redacted&")}}}else ie=null;else ie=j;return"XMLHTTP REQ ("+b+") [attempt "+U+"]: "+p+`
`+v+`
`+ie})}function fu(u,p,v,b,U,j,ie){u.info(function(){return"XMLHTTP RESP ("+b+") [ attempt "+U+"]: "+p+`
`+v+`
`+j+" "+ie})}function ui(u,p,v,b){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+jh(u,v)+(b?" "+b:"")})}function ps(u,p){u.info(function(){return"TIMEOUT: "+p})}Bn.prototype.info=function(){};function jh(u,p){if(!u.g)return p;if(!p)return null;try{const j=JSON.parse(p);if(j){for(u=0;u<j.length;u++)if(Array.isArray(j[u])){var v=j[u];if(!(v.length<2)){var b=v[1];if(Array.isArray(b)&&!(b.length<1)){var U=b[0];if(U!="noop"&&U!="stop"&&U!="close")for(let ie=1;ie<b.length;ie++)b[ie]=""}}}}return dr(j)}catch{return p}}var ms={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},bo={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},So;function gs(){}S(gs,lu),gs.prototype.g=function(){return new XMLHttpRequest},So=new gs;function Ui(u){return encodeURIComponent(String(u))}function du(u){var p=1;u=u.split(":");const v=[];for(;p>0&&u.length;)v.push(u.shift()),p--;return u.length&&v.push(u.join(":")),v}function jn(u,p,v,b){this.j=u,this.i=p,this.l=v,this.S=b||1,this.V=new fs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Hn}function Hn(){this.i=null,this.g="",this.h=!1}var vt={},Mt={};function ci(u,p,v){u.M=1,u.A=ys(Tt(p)),u.u=v,u.R=!0,ca(u,null)}function ca(u,p){u.F=Date.now(),hi(u),u.B=Tt(u.A);var v=u.B,b=u.S;Array.isArray(b)||(b=[String(b)]),pa(v.i,"t",b),u.C=0,v=u.j.L,u.h=new Hn,u.g=Iu(u.j,v?p:null,!u.u),u.P>0&&(u.O=new tn(y(u.Y,u,u.g),u.P)),p=u.V,v=u.g,b=u.ba;var U="readystatechange";Array.isArray(U)||(U&&(Eo[0]=U.toString()),U=Eo);for(let j=0;j<U.length;j++){const ie=et(v,U[j],b||p.handleEvent,!1,p.h||p);if(!ie)break;p.g[ie.key]=ie}p=u.J?N(u.J):{},u.u?(u.v||(u.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.B,u.v,u.u,p)):(u.v="GET",u.g.ea(u.B,u.v,null,p)),ai(),Bh(u.i,u.v,u.B,u.l,u.S,u.u)}jn.prototype.ba=function(u){u=u.target;const p=this.O;p&&Gn(u)==3?p.j():this.Y(u)},jn.prototype.Y=function(u){try{if(u==this.g)e:{const Te=Gn(this.g),dt=this.g.ya(),Pe=this.g.ca();if(!(Te<3)&&(Te!=3||this.g&&(this.h.h||this.g.la()||Bt(this.g)))){this.K||Te!=4||dt==7||(dt==8||Pe<=0?ai(3):ai(2)),fi(this);var p=this.g.ca();this.X=p;var v=Hh(this);if(this.o=p==200,fu(this.i,this.v,this.B,this.l,this.S,Te,p),this.o){if(this.U&&!this.L){t:{if(this.g){var b,U=this.g;if((b=U.g?U.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(b)){var j=b;break t}}j=null}if(u=j)ui(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,di(this,u);else{this.o=!1,this.m=3,_t(12),mn(this),Cn(this);break e}}if(this.R){u=!0;let tt;for(;!this.K&&this.C<v.length;)if(tt=mu(this,v),tt==Mt){Te==4&&(this.m=4,_t(14),u=!1),ui(this.i,this.l,null,"[Incomplete Response]");break}else if(tt==vt){this.m=4,_t(15),ui(this.i,this.l,v,"[Invalid Chunk]"),u=!1;break}else ui(this.i,this.l,tt,null),di(this,tt);if(pu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Te!=4||v.length!=0||this.h.h||(this.m=1,_t(16),u=!1),this.o=this.o&&u,!u)ui(this.i,this.l,v,"[Invalid Chunked Response]"),mn(this),Cn(this);else if(v.length>0&&!this.W){this.W=!0;var ie=this.j;ie.g==this&&ie.aa&&!ie.P&&(ie.j.info("Great, no buffering proxy detected. Bytes received: "+v.length),Po(ie),ie.P=!0,_t(11))}}else ui(this.i,this.l,v,null),di(this,v);Te==4&&mn(this),this.o&&!this.K&&(Te==4?Au(this.j,this):(this.o=!1,hi(this)))}else Pi(this.g),p==400&&v.indexOf("Unknown SID")>0?(this.m=3,_t(12)):(this.m=0,_t(13)),mn(this),Cn(this)}}}catch{}finally{}};function Hh(u){if(!pu(u))return u.g.la();const p=Bt(u.g);if(p==="")return"";let v="";const b=p.length,U=Gn(u.g)==4;if(!u.h.i){if(typeof TextDecoder>"u")return mn(u),Cn(u),"";u.h.i=new d.TextDecoder}for(let j=0;j<b;j++)u.h.h=!0,v+=u.h.i.decode(p[j],{stream:!(U&&j==b-1)});return p.length=0,u.h.g+=v,u.C=0,u.h.g}function pu(u){return u.g?u.v=="GET"&&u.M!=2&&u.j.Aa:!1}function mu(u,p){var v=u.C,b=p.indexOf(`
`,v);return b==-1?Mt:(v=Number(p.substring(v,b)),isNaN(v)?vt:(b+=1,b+v>p.length?Mt:(p=p.slice(b,b+v),u.C=b+v,p)))}jn.prototype.cancel=function(){this.K=!0,mn(this)};function hi(u){u.T=Date.now()+u.H,ha(u,u.H)}function ha(u,p){if(u.D!=null)throw Error("WatchDog timer not null");u.D=li(y(u.aa,u),p)}function fi(u){u.D&&(d.clearTimeout(u.D),u.D=null)}jn.prototype.aa=function(){this.D=null;const u=Date.now();u-this.T>=0?(ps(this.i,this.B),this.M!=2&&(ai(),_t(17)),mn(this),this.m=2,Cn(this)):ha(this,this.T-u)};function Cn(u){u.j.I==0||u.K||Au(u.j,u)}function mn(u){fi(u);var p=u.O;p&&typeof p.dispose=="function"&&p.dispose(),u.O=null,To(u.V),u.g&&(p=u.g,u.g=null,p.abort(),p.dispose())}function di(u,p){try{var v=u.j;if(v.I!=0&&(v.g==u||mi(v.h,u))){if(!u.L&&mi(v.h,u)&&v.I==3){try{var b=v.Ba.g.parse(p)}catch{b=null}if(Array.isArray(b)&&b.length==3){var U=b;if(U[0]==0){e:if(!v.v){if(v.g)if(v.g.F+3e3<u.F)va(v),Tr(v);else break e;As(v),_t(18)}}else v.xa=U[1],0<v.xa-v.K&&U[2]<37500&&v.F&&v.A==0&&!v.C&&(v.C=li(y(v.Va,v),6e3));pi(v.h)<=1&&v.ta&&(v.ta=void 0)}else Ti(v,11)}else if((u.L||v.g==u)&&va(v),!R(p))for(U=v.Ba.g.parse(p),p=0;p<U.length;p++){let Pe=U[p];const tt=Pe[0];if(!(tt<=v.K))if(v.K=tt,Pe=Pe[1],v.I==2)if(Pe[0]=="c"){v.M=Pe[1],v.ba=Pe[2];const On=Pe[3];On!=null&&(v.ka=On,v.j.info("VER="+v.ka));const bi=Pe[4];bi!=null&&(v.za=bi,v.j.info("SVER="+v.za));const Kn=Pe[5];Kn!=null&&typeof Kn=="number"&&Kn>0&&(b=1.5*Kn,v.O=b,v.j.info("backChannelRequestTimeoutMs_="+b)),b=v;const Yn=u.g;if(Yn){const ws=Yn.g?Yn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ws){var j=b.h;j.g||ws.indexOf("spdy")==-1&&ws.indexOf("quic")==-1&&ws.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Ro(j,j.h),j.h=null))}if(b.G){const Ea=Yn.g?Yn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ea&&(b.wa=Ea,He(b.J,b.G,Ea))}}v.I=3,v.l&&v.l.ra(),v.aa&&(v.T=Date.now()-u.F,v.j.info("Handshake RTT: "+v.T+"ms")),b=v;var ie=u;if(b.na=Cu(b,b.L?b.ba:null,b.W),ie.L){Co(b.h,ie);var Te=ie,dt=b.O;dt&&(Te.H=dt),Te.D&&(fi(Te),hi(Te)),b.g=ie}else bu(b);v.i.length>0&&Ei(v)}else Pe[0]!="stop"&&Pe[0]!="close"||Ti(v,7);else v.I==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?Ti(v,7):Uo(v):Pe[0]!="noop"&&v.l&&v.l.qa(Pe),v.A=0)}}ai(4)}catch{}}var Et=class{constructor(u,p){this.g=u,this.map=p}};function Ao(u){this.l=u||10,d.PerformanceNavigationTiming?(u=d.performance.getEntriesByType("navigation"),u=u.length>0&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function wo(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function pi(u){return u.h?1:u.g?u.g.size:0}function mi(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function Ro(u,p){u.g?u.g.add(p):u.h=p}function Co(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}Ao.prototype.cancel=function(){if(this.i=Io(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Io(u){if(u.h!=null)return u.i.concat(u.h.G);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const v of u.g.values())p=p.concat(v.G);return p}return L(u.i)}var gu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fa(u,p){if(u){u=u.split("&");for(let v=0;v<u.length;v++){const b=u[v].indexOf("=");let U,j=null;b>=0?(U=u[v].substring(0,b),j=u[v].substring(b+1)):U=u[v],p(U,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function gn(u){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;u instanceof gn?(this.l=u.l,kt(this,u.j),this.o=u.o,this.g=u.g,pr(this,u.u),this.h=u.h,Do(this,Eu(u.i)),this.m=u.m):u&&(p=String(u).match(gu))?(this.l=!1,kt(this,p[1]||"",!0),this.o=gi(p[2]||""),this.g=gi(p[3]||"",!0),pr(this,p[4]),this.h=gi(p[5]||"",!0),Do(this,p[6]||"",!0),this.m=gi(p[7]||"")):(this.l=!1,this.i=new gr(null,this.l))}gn.prototype.toString=function(){const u=[];var p=this.j;p&&u.push(_s(p,da,!0),":");var v=this.g;return(v||p=="file")&&(u.push("//"),(p=this.o)&&u.push(_s(p,da,!0),"@"),u.push(Ui(v).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.u,v!=null&&u.push(":",String(v))),(v=this.h)&&(this.g&&v.charAt(0)!="/"&&u.push("/"),u.push(_s(v,v.charAt(0)=="/"?Oo:yu,!0))),(v=this.i.toString())&&u.push("?",v),(v=this.m)&&u.push("#",_s(v,_u)),u.join("")},gn.prototype.resolve=function(u){const p=Tt(this);let v=!!u.j;v?kt(p,u.j):v=!!u.o,v?p.o=u.o:v=!!u.g,v?p.g=u.g:v=u.u!=null;var b=u.h;if(v)pr(p,u.u);else if(v=!!u.h){if(b.charAt(0)!="/")if(this.g&&!this.h)b="/"+b;else{var U=p.h.lastIndexOf("/");U!=-1&&(b=p.h.slice(0,U+1)+b)}if(U=b,U==".."||U==".")b="";else if(U.indexOf("./")!=-1||U.indexOf("/.")!=-1){b=U.lastIndexOf("/",0)==0,U=U.split("/");const j=[];for(let ie=0;ie<U.length;){const Te=U[ie++];Te=="."?b&&ie==U.length&&j.push(""):Te==".."?((j.length>1||j.length==1&&j[0]!="")&&j.pop(),b&&ie==U.length&&j.push("")):(j.push(Te),b=!0)}b=j.join("/")}else b=U}return v?p.h=b:v=u.i.toString()!=="",v?Do(p,Eu(u.i)):v=!!u.m,v&&(p.m=u.m),p};function Tt(u){return new gn(u)}function kt(u,p,v){u.j=v?gi(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function pr(u,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);u.u=p}else u.u=null}function Do(u,p,v){p instanceof gr?(u.i=p,ma(u.i,u.l)):(v||(p=_s(p,mr)),u.i=new gr(p,u.l))}function He(u,p,v){u.i.set(p,v)}function ys(u){return He(u,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),u}function gi(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function _s(u,p,v){return typeof u=="string"?(u=encodeURI(u).replace(p,an),v&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function an(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var da=/[#\/\?@]/g,yu=/[#\?:]/g,Oo=/[#\?]/g,mr=/[#\?@]/g,_u=/#/g;function gr(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function on(u){u.g||(u.g=new Map,u.h=0,u.i&&fa(u.i,function(p,v){u.add(decodeURIComponent(p.replace(/\+/g," ")),v)}))}r=gr.prototype,r.add=function(u,p){on(this),this.i=null,u=yr(this,u);let v=this.g.get(u);return v||this.g.set(u,v=[]),v.push(p),this.h+=1,this};function vu(u,p){on(u),p=yr(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function xo(u,p){return on(u),p=yr(u,p),u.g.has(p)}r.forEach=function(u,p){on(this),this.g.forEach(function(v,b){v.forEach(function(U){u.call(p,U,b,this)},this)},this)};function No(u,p){on(u);let v=[];if(typeof p=="string")xo(u,p)&&(v=v.concat(u.g.get(yr(u,p))));else for(u=Array.from(u.g.values()),p=0;p<u.length;p++)v=v.concat(u[p]);return v}r.set=function(u,p){return on(this),this.i=null,u=yr(this,u),xo(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},r.get=function(u,p){return u?(u=No(this,u),u.length>0?String(u[0]):p):p};function pa(u,p,v){vu(u,p),v.length>0&&(u.i=null,u.g.set(yr(u,p),L(v)),u.h+=v.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(let b=0;b<p.length;b++){var v=p[b];const U=Ui(v);v=No(this,v);for(let j=0;j<v.length;j++){let ie=U;v[j]!==""&&(ie+="="+Ui(v[j])),u.push(ie)}}return this.i=u.join("&")};function Eu(u){const p=new gr;return p.i=u.i,u.g&&(p.g=new Map(u.g),p.h=u.h),p}function yr(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function ma(u,p){p&&!u.j&&(on(u),u.i=null,u.g.forEach(function(v,b){const U=b.toLowerCase();b!=U&&(vu(this,b),pa(this,U,v))},u)),u.j=p}function qn(u,p){const v=new Bn;if(d.Image){const b=new Image;b.onload=T(In,v,"TestLoadImage: loaded",!0,p,b),b.onerror=T(In,v,"TestLoadImage: error",!1,p,b),b.onabort=T(In,v,"TestLoadImage: abort",!1,p,b),b.ontimeout=T(In,v,"TestLoadImage: timeout",!1,p,b),d.setTimeout(function(){b.ontimeout&&b.ontimeout()},1e4),b.src=u}else p(!1)}function Mo(u,p){const v=new Bn,b=new AbortController,U=setTimeout(()=>{b.abort(),In(v,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:b.signal}).then(j=>{clearTimeout(U),j.ok?In(v,"TestPingServer: ok",!0,p):In(v,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(U),In(v,"TestPingServer: error",!1,p)})}function In(u,p,v,b,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),b(v)}catch{}}function _r(){this.g=new ou}function yi(u){this.i=u.Sb||null,this.h=u.ab||!1}S(yi,lu),yi.prototype.g=function(){return new vs(this.i,this.h)};function vs(u,p){yt.call(this),this.H=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}S(vs,yt),r=vs.prototype,r.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=u,this.D=p,this.readyState=1,Fn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};u&&(p.body=u),(this.H||d).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,vr(this)),this.readyState=0},r.Pa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Fn(this)),this.g&&(this.readyState=3,Fn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;ga(this)}else u.text().then(this.Oa.bind(this),this.ga.bind(this))};function ga(u){u.j.read().then(u.Ma.bind(u)).catch(u.ga.bind(u))}r.Ma=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?vr(this):Fn(this),this.readyState==3&&ga(this)}},r.Oa=function(u){this.g&&(this.response=this.responseText=u,vr(this))},r.Na=function(u){this.g&&(this.response=u,vr(this))},r.ga=function(){this.g&&vr(this)};function vr(u){u.readyState=4,u.l=null,u.j=null,u.B=null,Fn(u)}r.setRequestHeader=function(u,p){this.A.append(u,p)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var v=p.next();!v.done;)v=v.value,u.push(v[0]+": "+v[1]),v=p.next();return u.join(`\r
`)};function Fn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(vs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Dn(u){let p="";return Ve(u,function(v,b){p+=b,p+=":",p+=v,p+=`\r
`}),p}function Es(u,p,v){e:{for(b in v){var b=!1;break e}b=!0}b||(v=Dn(v),typeof u=="string"?v!=null&&Ui(v):He(u,p,v))}function Ge(u){yt.call(this),this.headers=new Map,this.L=u||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}S(Ge,yt);var _i=/^https?$/i,ko=["POST","PUT"];r=Ge.prototype,r.Fa=function(u){this.H=u},r.ea=function(u,p,v,b){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():So.g(),this.g.onreadystatechange=D(y(this.Ca,this));try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(j){Ts(this,j);return}if(u=v||"",v=new Map(this.headers),b)if(Object.getPrototypeOf(b)===Object.prototype)for(var U in b)v.set(U,b[U]);else if(typeof b.keys=="function"&&typeof b.get=="function")for(const j of b.keys())v.set(j,b.get(j));else throw Error("Unknown input type for opt_headers: "+String(b));b=Array.from(v.keys()).find(j=>j.toLowerCase()=="content-type"),U=d.FormData&&u instanceof d.FormData,!(Array.prototype.indexOf.call(ko,p,void 0)>=0)||b||U||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,ie]of v)this.g.setRequestHeader(j,ie);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(u),this.v=!1}catch(j){Ts(this,j)}};function Ts(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.o=5,Vo(u),Li(u)}function Vo(u){u.A||(u.A=!0,xt(u,"complete"),xt(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=u||7,xt(this,"complete"),xt(this,"abort"),Li(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Li(this,!0)),Ge.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?bs(this):this.Xa())},r.Xa=function(){bs(this)};function bs(u){if(u.h&&typeof c<"u"){if(u.v&&Gn(u)==4)setTimeout(u.Ca.bind(u),0);else if(xt(u,"readystatechange"),Gn(u)==4){u.h=!1;try{const j=u.ca();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var v;if(!(v=p)){var b;if(b=j===0){let ie=String(u.D).match(gu)[1]||null;!ie&&d.self&&d.self.location&&(ie=d.self.location.protocol.slice(0,-1)),b=!_i.test(ie?ie.toLowerCase():"")}v=b}if(v)xt(u,"complete"),xt(u,"success");else{u.o=6;try{var U=Gn(u)>2?u.g.statusText:""}catch{U=""}u.l=U+" ["+u.ca()+"]",Vo(u)}}finally{Li(u)}}}}function Li(u,p){if(u.g){u.m&&(clearTimeout(u.m),u.m=null);const v=u.g;u.g=null,p||xt(u,"ready");try{v.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function Gn(u){return u.g?u.g.readyState:0}r.ca=function(){try{return Gn(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),zh(p)}};function Bt(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.F){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Pi(u){const p={};u=(u.g&&Gn(u)>=2&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let b=0;b<u.length;b++){if(R(u[b]))continue;var v=du(u[b]);const U=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const j=p[U]||[];p[U]=j,j.push(v)}je(p,function(b){return b.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function vi(u,p,v){return v&&v.internalChannelParams&&v.internalChannelParams[u]||p}function Er(u){this.za=0,this.i=[],this.j=new Bn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=vi("failFast",!1,u),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=vi("baseRetryDelayMs",5e3,u),this.Za=vi("retryDelaySeedMs",1e4,u),this.Ta=vi("forwardChannelMaxRetries",2,u),this.va=vi("forwardChannelRequestTimeoutMs",2e4,u),this.ma=u&&u.xmlHttpFactory||void 0,this.Ua=u&&u.Rb||void 0,this.Aa=u&&u.useFetchStreams||!1,this.O=void 0,this.L=u&&u.supportsCrossDomainXhr||!1,this.M="",this.h=new Ao(u&&u.concurrentRequestLimit),this.Ba=new _r,this.S=u&&u.fastHandshake||!1,this.R=u&&u.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=u&&u.Pb||!1,u&&u.ua&&this.j.ua(),u&&u.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&u&&u.detectBufferingProxy||!1,this.ia=void 0,u&&u.longPollingTimeout&&u.longPollingTimeout>0&&(this.ia=u.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=Er.prototype,r.ka=8,r.I=1,r.connect=function(u,p,v,b){_t(0),this.W=u,this.H=p||{},v&&b!==void 0&&(this.H.OSID=v,this.H.OAID=b),this.F=this.X,this.J=Cu(this,null,this.W),Ei(this)};function Uo(u){if(ya(u),u.I==3){var p=u.V++,v=Tt(u.J);if(He(v,"SID",u.M),He(v,"RID",p),He(v,"TYPE","terminate"),Ss(u,v),p=new jn(u,u.j,p),p.M=2,p.A=ys(Tt(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(p.A.toString(),"")}catch{}!v&&d.Image&&(new Image().src=p.A,v=!0),v||(p.g=Iu(p.j,null),p.g.ea(p.A)),p.F=Date.now(),hi(p)}Ru(u)}function Tr(u){u.g&&(Po(u),u.g.cancel(),u.g=null)}function ya(u){Tr(u),u.v&&(d.clearTimeout(u.v),u.v=null),va(u),u.h.cancel(),u.m&&(typeof u.m=="number"&&d.clearTimeout(u.m),u.m=null)}function Ei(u){if(!wo(u.h)&&!u.m){u.m=!0;var p=u.Ea;me||A(),Ee||(me(),Ee=!0),I.add(p,u),u.D=0}}function _a(u,p){return pi(u.h)>=u.h.j-(u.m?1:0)?!1:u.m?(u.i=p.G.concat(u.i),!0):u.I==1||u.I==2||u.D>=(u.Sa?0:u.Ta)?!1:(u.m=li(y(u.Ea,u,p),wu(u,u.D)),u.D++,!0)}r.Ea=function(u){if(this.m)if(this.m=null,this.I==1){if(!u){this.V=Math.floor(Math.random()*1e5),u=this.V++;const U=new jn(this,this.j,u);let j=this.o;if(this.U&&(j?(j=N(j),ae(j,this.U)):j=this.U),this.u!==null||this.R||(U.J=j,j=null),this.S)e:{for(var p=0,v=0;v<this.i.length;v++){t:{var b=this.i[v];if("__data__"in b.map&&(b=b.map.__data__,typeof b=="string")){b=b.length;break t}b=void 0}if(b===void 0)break;if(p+=b,p>4096){p=v;break e}if(p===4096||v===this.i.length-1){p=v+1;break e}}p=1e3}else p=1e3;p=Tu(this,U,p),v=Tt(this.J),He(v,"RID",u),He(v,"CVER",22),this.G&&He(v,"X-HTTP-Session-Id",this.G),Ss(this,v),j&&(this.R?p="headers="+Ui(Dn(j))+"&"+p:this.u&&Es(v,this.u,j)),Ro(this.h,U),this.Ra&&He(v,"TYPE","init"),this.S?(He(v,"$req",p),He(v,"SID","null"),U.U=!0,ci(U,v,null)):ci(U,v,p),this.I=2}}else this.I==3&&(u?Lo(this,u):this.i.length==0||wo(this.h)||Lo(this))};function Lo(u,p){var v;p?v=p.l:v=u.V++;const b=Tt(u.J);He(b,"SID",u.M),He(b,"RID",v),He(b,"AID",u.K),Ss(u,b),u.u&&u.o&&Es(b,u.u,u.o),v=new jn(u,u.j,v,u.D+1),u.u===null&&(v.J=u.o),p&&(u.i=p.G.concat(u.i)),p=Tu(u,v,1e3),v.H=Math.round(u.va*.5)+Math.round(u.va*.5*Math.random()),Ro(u.h,v),ci(v,b,p)}function Ss(u,p){u.H&&Ve(u.H,function(v,b){He(p,b,v)}),u.l&&Ve({},function(v,b){He(p,b,v)})}function Tu(u,p,v){v=Math.min(u.i.length,v);const b=u.l?y(u.l.Ka,u.l,u):null;e:{var U=u.i;let Te=-1;for(;;){const dt=["count="+v];Te==-1?v>0?(Te=U[0].g,dt.push("ofs="+Te)):Te=0:dt.push("ofs="+Te);let Pe=!0;for(let tt=0;tt<v;tt++){var j=U[tt].g;const On=U[tt].map;if(j-=Te,j<0)Te=Math.max(0,U[tt].g-100),Pe=!1;else try{j="req"+j+"_"||"";try{var ie=On instanceof Map?On:Object.entries(On);for(const[bi,Kn]of ie){let Yn=Kn;m(Kn)&&(Yn=dr(Kn)),dt.push(j+bi+"="+encodeURIComponent(Yn))}}catch(bi){throw dt.push(j+"type="+encodeURIComponent("_badmap")),bi}}catch{b&&b(On)}}if(Pe){ie=dt.join("&");break e}}ie=void 0}return u=u.i.splice(0,v),p.G=u,ie}function bu(u){if(!u.g&&!u.v){u.Y=1;var p=u.Da;me||A(),Ee||(me(),Ee=!0),I.add(p,u),u.A=0}}function As(u){return u.g||u.v||u.A>=3?!1:(u.Y++,u.v=li(y(u.Da,u),wu(u,u.A)),u.A++,!0)}r.Da=function(){if(this.v=null,Su(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var u=4*this.T;this.j.info("BP detection timer enabled: "+u),this.B=li(y(this.Wa,this),u)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,_t(10),Tr(this),Su(this))};function Po(u){u.B!=null&&(d.clearTimeout(u.B),u.B=null)}function Su(u){u.g=new jn(u,u.j,"rpc",u.Y),u.u===null&&(u.g.J=u.o),u.g.P=0;var p=Tt(u.na);He(p,"RID","rpc"),He(p,"SID",u.M),He(p,"AID",u.K),He(p,"CI",u.F?"0":"1"),!u.F&&u.ia&&He(p,"TO",u.ia),He(p,"TYPE","xmlhttp"),Ss(u,p),u.u&&u.o&&Es(p,u.u,u.o),u.O&&(u.g.H=u.O);var v=u.g;u=u.ba,v.M=1,v.A=ys(Tt(p)),v.u=null,v.R=!0,ca(v,u)}r.Va=function(){this.C!=null&&(this.C=null,Tr(this),As(this),_t(19))};function va(u){u.C!=null&&(d.clearTimeout(u.C),u.C=null)}function Au(u,p){var v=null;if(u.g==p){va(u),Po(u),u.g=null;var b=2}else if(mi(u.h,p))v=p.G,Co(u.h,p),b=1;else return;if(u.I!=0){if(p.o)if(b==1){v=p.u?p.u.length:0,p=Date.now()-p.F;var U=u.D;b=ua(),xt(b,new oi(b,v)),Ei(u)}else bu(u);else if(U=p.m,U==3||U==0&&p.X>0||!(b==1&&_a(u,p)||b==2&&As(u)))switch(v&&v.length>0&&(p=u.h,p.i=p.i.concat(v)),U){case 1:Ti(u,5);break;case 4:Ti(u,10);break;case 3:Ti(u,6);break;default:Ti(u,2)}}}function wu(u,p){let v=u.Qa+Math.floor(Math.random()*u.Za);return u.isActive()||(v*=2),v*p}function Ti(u,p){if(u.j.info("Error code "+p),p==2){var v=y(u.bb,u),b=u.Ua;const U=!b;b=new gn(b||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||kt(b,"https"),ys(b),U?qn(b.toString(),v):Mo(b.toString(),v)}else _t(2);u.I=0,u.l&&u.l.pa(p),Ru(u),ya(u)}r.bb=function(u){u?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function Ru(u){if(u.I=0,u.ja=[],u.l){const p=Io(u.h);(p.length!=0||u.i.length!=0)&&(K(u.ja,p),K(u.ja,u.i),u.h.i.length=0,L(u.i),u.i.length=0),u.l.oa()}}function Cu(u,p,v){var b=v instanceof gn?Tt(v):new gn(v);if(b.g!="")p&&(b.g=p+"."+b.g),pr(b,b.u);else{var U=d.location;b=U.protocol,p=p?p+"."+U.hostname:U.hostname,U=+U.port;const j=new gn(null);b&&kt(j,b),p&&(j.g=p),U&&pr(j,U),v&&(j.h=v),b=j}return v=u.G,p=u.wa,v&&p&&He(b,v,p),He(b,"VER",u.ka),Ss(u,b),b}function Iu(u,p,v){if(p&&!u.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Aa&&!u.ma?new Ge(new yi({ab:v})):new Ge(u.ma),p.Fa(u.L),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Du(){}r=Du.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function br(){}br.prototype.g=function(u,p){return new nn(u,p)};function nn(u,p){yt.call(this),this.g=new Er(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(u?u["X-WebChannel-Client-Profile"]=p.sa:u={"X-WebChannel-Client-Profile":p.sa}),this.g.U=u,(u=p&&p.Qb)&&!R(u)&&(this.g.u=u),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!R(p)&&(this.g.G=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new zi(this)}S(nn,yt),nn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},nn.prototype.close=function(){Uo(this.g)},nn.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var v={};v.__data__=u,u=v}else this.v&&(v={},v.__data__=dr(u),u=v);p.i.push(new Et(p.Ya++,u)),p.I==3&&Ei(p)},nn.prototype.N=function(){this.g.l=null,delete this.j,Uo(this.g),delete this.g,nn.Z.N.call(this)};function Ou(u){zt.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const v in p){u=v;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}S(Ou,zt);function xu(){Rn.call(this),this.status=1}S(xu,Rn);function zi(u){this.g=u}S(zi,Du),zi.prototype.ra=function(){xt(this.g,"a")},zi.prototype.qa=function(u){xt(this.g,new Ou(u))},zi.prototype.pa=function(u){xt(this.g,new xu)},zi.prototype.oa=function(){xt(this.g,"b")},br.prototype.createWebChannel=br.prototype.g,nn.prototype.send=nn.prototype.o,nn.prototype.open=nn.prototype.m,nn.prototype.close=nn.prototype.close,H0=function(){return new br},j0=function(){return ua()},B0=ft,mp={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ms.NO_ERROR=0,ms.TIMEOUT=8,ms.HTTP_ERROR=6,Jc=ms,bo.COMPLETE="complete",z0=bo,uu.EventType=zn,zn.OPEN="a",zn.CLOSE="b",zn.ERROR="c",zn.MESSAGE="d",yt.prototype.listen=yt.prototype.J,Dl=uu,Ge.prototype.listenOnce=Ge.prototype.K,Ge.prototype.getLastError=Ge.prototype.Ha,Ge.prototype.getLastErrorCode=Ge.prototype.ya,Ge.prototype.getStatus=Ge.prototype.ca,Ge.prototype.getResponseJson=Ge.prototype.La,Ge.prototype.getResponseText=Ge.prototype.la,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Fa,P0=Ge}).apply(typeof Lc<"u"?Lc:typeof self<"u"?self:typeof window<"u"?window:{});const zv="@firebase/firestore",Bv="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Jt.UNAUTHENTICATED=new Jt(null),Jt.GOOGLE_CREDENTIALS=new Jt("google-credentials-uid"),Jt.FIRST_PARTY=new Jt("first-party-uid"),Jt.MOCK_USER=new Jt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mo="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=new zp("@firebase/firestore");function $a(){return Js.logLevel}function he(r,...e){if(Js.logLevel<=xe.DEBUG){const i=e.map(Jp);Js.debug(`Firestore (${mo}): ${r}`,...i)}}function Zs(r,...e){if(Js.logLevel<=xe.ERROR){const i=e.map(Jp);Js.error(`Firestore (${mo}): ${r}`,...i)}}function Dh(r,...e){if(Js.logLevel<=xe.WARN){const i=e.map(Jp);Js.warn(`Firestore (${mo}): ${r}`,...i)}}function Jp(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(i){return JSON.stringify(i)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(r,e,i){let a="Unexpected state";typeof e=="string"?a=e:i=e,q0(r,a,i)}function q0(r,e,i){let a=`FIRESTORE (${mo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(i!==void 0)try{a+=" CONTEXT: "+JSON.stringify(i)}catch{a+=" CONTEXT: "+i}throw Zs(a),new Error(a)}function ut(r,e,i,a){let l="Unexpected state";typeof i=="string"?l=i:a=i,r||q0(e,l,a)}function $e(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class de extends Vi{constructor(e,i){super(e,i),this.code=e,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(){this.promise=new Promise(((e,i)=>{this.resolve=e,this.reject=i}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class E2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,i){e.enqueueRetryable((()=>i(Jt.UNAUTHENTICATED)))}shutdown(){}}class T2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,i){this.changeListener=i,e.enqueueRetryable((()=>i(this.token.user)))}shutdown(){this.changeListener=null}}class b2{constructor(e){this.t=e,this.currentUser=Jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,i){ut(this.o===void 0,42304);let a=this.i;const l=g=>this.i!==a?(a=this.i,i(g)):Promise.resolve();let c=new Fs;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Fs,e.enqueueRetryable((()=>l(this.currentUser)))};const d=()=>{const g=c;e.enqueueRetryable((async()=>{await g.promise,await l(this.currentUser)}))},m=g=>{he("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit((g=>m(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(he("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Fs)}}),0),d()}getToken(){const e=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then((a=>this.i!==e?(he("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(ut(typeof a.accessToken=="string",31837,{l:a}),new F0(a.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ut(e===null||typeof e=="string",2055,{h:e}),new Jt(e)}}class S2{constructor(e,i,a){this.P=e,this.T=i,this.I=a,this.type="FirstParty",this.user=Jt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class A2{constructor(e,i,a){this.P=e,this.T=i,this.I=a}getToken(){return Promise.resolve(new S2(this.P,this.T,this.I))}start(e,i){e.enqueueRetryable((()=>i(Jt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class jv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class w2{constructor(e,i){this.V=i,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,An(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,i){ut(this.o===void 0,3512);const a=c=>{c.error!=null&&he("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const d=c.token!==this.m;return this.m=c.token,he("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?i(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable((()=>a(c)))};const l=c=>{he("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((c=>l(c))),setTimeout((()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?l(c):he("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new jv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((i=>i?(ut(typeof i.token=="string",44558,{tokenResult:i}),this.m=i.token,new jv(i.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R2(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),i=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(i);else for(let a=0;a<r;a++)i[a]=Math.floor(256*Math.random());return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=62*Math.floor(4.129032258064516);let a="";for(;a.length<20;){const l=R2(40);for(let c=0;c<l.length;++c)a.length<20&&l[c]<i&&(a+=e.charAt(l[c]%62))}return a}}function Be(r,e){return r<e?-1:r>e?1:0}function gp(r,e){const i=Math.min(r.length,e.length);for(let a=0;a<i;a++){const l=r.charAt(a),c=e.charAt(a);if(l!==c)return Zd(l)===Zd(c)?Be(l,c):Zd(l)?1:-1}return Be(r.length,e.length)}const C2=55296,I2=57343;function Zd(r){const e=r.charCodeAt(0);return e>=C2&&e<=I2}function so(r,e,i){return r.length===e.length&&r.every(((a,l)=>i(a,e[l])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv="__name__";class Ci{constructor(e,i,a){i===void 0?i=0:i>e.length&&Re(637,{offset:i,range:e.length}),a===void 0?a=e.length-i:a>e.length-i&&Re(1746,{length:a,range:e.length-i}),this.segments=e,this.offset=i,this.len=a}get length(){return this.len}isEqual(e){return Ci.comparator(this,e)===0}child(e){const i=this.segments.slice(this.offset,this.limit());return e instanceof Ci?e.forEach((a=>{i.push(a)})):i.push(e),this.construct(i)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==e.get(i))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==e.get(i))return!1;return!0}forEach(e){for(let i=this.offset,a=this.limit();i<a;i++)e(this.segments[i])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,i){const a=Math.min(e.length,i.length);for(let l=0;l<a;l++){const c=Ci.compareSegments(e.get(l),i.get(l));if(c!==0)return c}return Be(e.length,i.length)}static compareSegments(e,i){const a=Ci.isNumericId(e),l=Ci.isNumericId(i);return a&&!l?-1:!a&&l?1:a&&l?Ci.extractNumericId(e).compare(Ci.extractNumericId(i)):gp(e,i)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return $p.fromString(e.substring(4,e.length-2))}}class at extends Ci{construct(e,i,a){return new at(e,i,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const i=[];for(const a of e){if(a.indexOf("//")>=0)throw new de(te.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);i.push(...a.split("/").filter((l=>l.length>0)))}return new at(i)}static emptyPath(){return new at([])}}const D2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Yt extends Ci{construct(e,i,a){return new Yt(e,i,a)}static isValidIdentifier(e){return D2.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Yt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Hv}static keyField(){return new Yt([Hv])}static fromServerFormat(e){const i=[];let a="",l=0;const c=()=>{if(a.length===0)throw new de(te.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);i.push(a),a=""};let d=!1;for(;l<e.length;){const m=e[l];if(m==="\\"){if(l+1===e.length)throw new de(te.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[l+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new de(te.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);a+=g,l+=2}else m==="`"?(d=!d,l++):m!=="."||d?(a+=m,l++):(c(),l++)}if(c(),d)throw new de(te.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Yt(i)}static emptyPath(){return new Yt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.path=e}static fromPath(e){return new we(at.fromString(e))}static fromName(e){return new we(at.fromString(e).popFirst(5))}static empty(){return new we(at.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&at.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,i){return at.comparator(e.path,i.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new we(new at(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(r,e,i){if(!i)throw new de(te.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function O2(r,e,i,a){if(e===!0&&a===!0)throw new de(te.INVALID_ARGUMENT,`${r} and ${i} cannot be used together.`)}function qv(r){if(!we.isDocumentKey(r))throw new de(te.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Fv(r){if(we.isDocumentKey(r))throw new de(te.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function K0(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Wp(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(a){return a.constructor?a.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Re(12329,{type:typeof r})}function Y0(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new de(te.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=Wp(r);throw new de(te.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${i}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(r,e){const i={typeString:r};return e&&(i.value=e),i}function eu(r,e){if(!K0(r))throw new de(te.INVALID_ARGUMENT,"JSON must be an object");let i;for(const a in e)if(e[a]){const l=e[a].typeString,c="value"in e[a]?{value:e[a].value}:void 0;if(!(a in r)){i=`JSON missing required field: '${a}'`;break}const d=r[a];if(l&&typeof d!==l){i=`JSON field '${a}' must be a ${l}.`;break}if(c!==void 0&&d!==c.value){i=`Expected '${a}' field to equal '${c.value}'`;break}}if(i)throw new de(te.INVALID_ARGUMENT,i);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv=-62135596800,Kv=1e6;class rt{static now(){return rt.fromMillis(Date.now())}static fromDate(e){return rt.fromMillis(e.getTime())}static fromMillis(e){const i=Math.floor(e/1e3),a=Math.floor((e-1e3*i)*Kv);return new rt(i,a)}constructor(e,i){if(this.seconds=e,this.nanoseconds=i,i<0)throw new de(te.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(i>=1e9)throw new de(te.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(e<Gv)throw new de(te.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new de(te.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Kv}_compareTo(e){return this.seconds===e.seconds?Be(this.nanoseconds,e.nanoseconds):Be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:rt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(eu(e,rt._jsonSchema))return new rt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Gv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}rt._jsonSchemaVersion="firestore/timestamp/1.0",rt._jsonSchema={type:It("string",rt._jsonSchemaVersion),seconds:It("number"),nanoseconds:It("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{static fromTimestamp(e){return new it(e)}static min(){return new it(new rt(0,0))}static max(){return new it(new rt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl=-1;function x2(r,e){const i=r.toTimestamp().seconds,a=r.toTimestamp().nanoseconds+1,l=it.fromTimestamp(a===1e9?new rt(i+1,0):new rt(i,a));return new is(l,we.empty(),e)}function N2(r){return new is(r.readTime,r.key,jl)}class is{constructor(e,i,a){this.readTime=e,this.documentKey=i,this.largestBatchId=a}static min(){return new is(it.min(),we.empty(),jl)}static max(){return new is(it.max(),we.empty(),jl)}}function M2(r,e){let i=r.readTime.compareTo(e.readTime);return i!==0?i:(i=we.comparator(r.documentKey,e.documentKey),i!==0?i:Be(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class V2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function em(r){if(r.code!==te.FAILED_PRECONDITION||r.message!==k2)throw r;he("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((i=>{this.isDone=!0,this.result=i,this.nextCallback&&this.nextCallback(i)}),(i=>{this.isDone=!0,this.error=i,this.catchCallback&&this.catchCallback(i)}))}catch(e){return this.next(void 0,e)}next(e,i){return this.callbackAttached&&Re(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(i,this.error):this.wrapSuccess(e,this.result):new W(((a,l)=>{this.nextCallback=c=>{this.wrapSuccess(e,c).next(a,l)},this.catchCallback=c=>{this.wrapFailure(i,c).next(a,l)}}))}toPromise(){return new Promise(((e,i)=>{this.next(e,i)}))}wrapUserFunction(e){try{const i=e();return i instanceof W?i:W.resolve(i)}catch(i){return W.reject(i)}}wrapSuccess(e,i){return e?this.wrapUserFunction((()=>e(i))):W.resolve(i)}wrapFailure(e,i){return e?this.wrapUserFunction((()=>e(i))):W.reject(i)}static resolve(e){return new W(((i,a)=>{i(e)}))}static reject(e){return new W(((i,a)=>{a(e)}))}static waitFor(e){return new W(((i,a)=>{let l=0,c=0,d=!1;e.forEach((m=>{++l,m.next((()=>{++c,d&&c===l&&i()}),(g=>a(g)))})),d=!0,c===l&&i()}))}static or(e){let i=W.resolve(!1);for(const a of e)i=i.next((l=>l?W.resolve(l):a()));return i}static forEach(e,i){const a=[];return e.forEach(((l,c)=>{a.push(i.call(this,l,c))})),this.waitFor(a)}static mapArray(e,i){return new W(((a,l)=>{const c=e.length,d=new Array(c);let m=0;for(let g=0;g<c;g++){const y=g;i(e[y]).next((T=>{d[y]=T,++m,m===c&&a(d)}),(T=>l(T)))}}))}static doWhile(e,i){return new W(((a,l)=>{const c=()=>{e()===!0?i().next((()=>{c()}),l):a()};c()}))}}function U2(r){const e=r.match(/Android ([\d.]+)/i),i=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(i)}function tu(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e,i){this.previousValue=e,i&&(i.sequenceNumberHandler=a=>this.ae(a),this.ue=a=>i.writeSequenceNumber(a))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}tm.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm=-1;function im(r){return r==null}function hh(r){return r===0&&1/r==-1/0}function L2(r){return typeof r=="number"&&Number.isInteger(r)&&!hh(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0="";function P2(r){let e="";for(let i=0;i<r.length;i++)e.length>0&&(e=Yv(e)),e=z2(r.get(i),e);return Yv(e)}function z2(r,e){let i=e;const a=r.length;for(let l=0;l<a;l++){const c=r.charAt(l);switch(c){case"\0":i+="";break;case Q0:i+="";break;default:i+=c}}return i}function Yv(r){return r+Q0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qv(r){let e=0;for(const i in r)Object.prototype.hasOwnProperty.call(r,i)&&e++;return e}function go(r,e){for(const i in r)Object.prototype.hasOwnProperty.call(r,i)&&e(i,r[i])}function X0(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,i){this.comparator=e,this.root=i||Gt.EMPTY}insert(e,i){return new pn(this.comparator,this.root.insert(e,i,this.comparator).copy(null,null,Gt.BLACK,null,null))}remove(e){return new pn(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Gt.BLACK,null,null))}get(e){let i=this.root;for(;!i.isEmpty();){const a=this.comparator(e,i.key);if(a===0)return i.value;a<0?i=i.left:a>0&&(i=i.right)}return null}indexOf(e){let i=0,a=this.root;for(;!a.isEmpty();){const l=this.comparator(e,a.key);if(l===0)return i+a.left.size;l<0?a=a.left:(i+=a.left.size+1,a=a.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((i,a)=>(e(i,a),!1)))}toString(){const e=[];return this.inorderTraversal(((i,a)=>(e.push(`${i}:${a}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pc(this.root,e,this.comparator,!0)}}class Pc{constructor(e,i,a,l){this.isReverse=l,this.nodeStack=[];let c=1;for(;!e.isEmpty();)if(c=i?a(e.key,i):1,i&&l&&(c*=-1),c<0)e=this.isReverse?e.left:e.right;else{if(c===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const i={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return i}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Gt{constructor(e,i,a,l,c){this.key=e,this.value=i,this.color=a??Gt.RED,this.left=l??Gt.EMPTY,this.right=c??Gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,i,a,l,c){return new Gt(e??this.key,i??this.value,a??this.color,l??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,i,a){let l=this;const c=a(e,l.key);return l=c<0?l.copy(null,null,null,l.left.insert(e,i,a),null):c===0?l.copy(null,i,null,null,null):l.copy(null,null,null,null,l.right.insert(e,i,a)),l.fixUp()}removeMin(){if(this.left.isEmpty())return Gt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,i){let a,l=this;if(i(e,l.key)<0)l.left.isEmpty()||l.left.isRed()||l.left.left.isRed()||(l=l.moveRedLeft()),l=l.copy(null,null,null,l.left.remove(e,i),null);else{if(l.left.isRed()&&(l=l.rotateRight()),l.right.isEmpty()||l.right.isRed()||l.right.left.isRed()||(l=l.moveRedRight()),i(e,l.key)===0){if(l.right.isEmpty())return Gt.EMPTY;a=l.right.min(),l=l.copy(a.key,a.value,null,null,l.right.removeMin())}l=l.copy(null,null,null,null,l.right.remove(e,i))}return l.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,i)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Re(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Re(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Re(27949);return e+(this.isRed()?0:1)}}Gt.EMPTY=null,Gt.RED=!0,Gt.BLACK=!1;Gt.EMPTY=new class{constructor(){this.size=0}get key(){throw Re(57766)}get value(){throw Re(16141)}get color(){throw Re(16727)}get left(){throw Re(29726)}get right(){throw Re(36894)}copy(e,i,a,l,c){return this}insert(e,i,a){return new Gt(e,i)}remove(e,i){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.comparator=e,this.data=new pn(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((i,a)=>(e(i),!1)))}forEachInRange(e,i){const a=this.data.getIteratorFrom(e[0]);for(;a.hasNext();){const l=a.getNext();if(this.comparator(l.key,e[1])>=0)return;i(l.key)}}forEachWhile(e,i){let a;for(a=i!==void 0?this.data.getIteratorFrom(i):this.data.getIterator();a.hasNext();)if(!e(a.getNext().key))return}firstAfterOrEqual(e){const i=this.data.getIteratorFrom(e);return i.hasNext()?i.getNext().key:null}getIterator(){return new Xv(this.data.getIterator())}getIteratorFrom(e){return new Xv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let i=this;return i.size<e.size&&(i=e,e=this),e.forEach((a=>{i=i.add(a)})),i}isEqual(e){if(!(e instanceof Qt)||this.size!==e.size)return!1;const i=this.data.getIterator(),a=e.data.getIterator();for(;i.hasNext();){const l=i.getNext().key,c=a.getNext().key;if(this.comparator(l,c)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((i=>{e.push(i)})),e}toString(){const e=[];return this.forEach((i=>e.push(i))),"SortedSet("+e.toString()+")"}copy(e){const i=new Qt(this.comparator);return i.data=e,i}}class Xv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this.fields=e,e.sort(Yt.comparator)}static empty(){return new ti([])}unionWith(e){let i=new Qt(Yt.comparator);for(const a of this.fields)i=i.add(a);for(const a of e)i=i.add(a);return new ti(i.toArray())}covers(e){for(const i of this.fields)if(i.isPrefixOf(e))return!0;return!1}isEqual(e){return so(this.fields,e.fields,((i,a)=>i.isEqual(a)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e){this.binaryString=e}static fromBase64String(e){const i=(function(l){try{return atob(l)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new B2("Invalid base64 string: "+c):c}})(e);return new Ni(i)}static fromUint8Array(e){const i=(function(l){let c="";for(let d=0;d<l.length;++d)c+=String.fromCharCode(l[d]);return c})(e);return new Ni(i)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(i){return btoa(i)})(this.binaryString)}toUint8Array(){return(function(i){const a=new Uint8Array(i.length);for(let l=0;l<i.length;l++)a[l]=i.charCodeAt(l);return a})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ni.EMPTY_BYTE_STRING=new Ni("");const j2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ws(r){if(ut(!!r,39018),typeof r=="string"){let e=0;const i=j2.exec(r);if(ut(!!i,46558,{timestamp:r}),i[1]){let l=i[1];l=(l+"000000000").substr(0,9),e=Number(l)}const a=new Date(r);return{seconds:Math.floor(a.getTime()/1e3),nanos:e}}return{seconds:Kt(r.seconds),nanos:Kt(r.nanos)}}function Kt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ao(r){return typeof r=="string"?Ni.fromBase64String(r):Ni.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0="server_timestamp",J0="__type__",Z0="__previous_value__",W0="__local_write_time__";function rm(r){return(r?.mapValue?.fields||{})[J0]?.stringValue===$0}function sm(r){const e=r.mapValue.fields[Z0];return rm(e)?sm(e):e}function fh(r){const e=Ws(r.mapValue.fields[W0].timestampValue);return new rt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(e,i,a,l,c,d,m,g,y,T){this.databaseId=e,this.appId=i,this.persistenceKey=a,this.host=l,this.ssl=c,this.forceLongPolling=d,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=y,this.isUsingEmulator=T}}const dh="(default)";class ph{constructor(e,i){this.projectId=e,this.database=i||dh}static empty(){return new ph("","")}get isDefaultDatabase(){return this.database===dh}isEqual(e){return e instanceof ph&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT="__type__",q2="__max__",zc={mapValue:{}},tT="__vector__",yp="value";function ea(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?rm(r)?4:G2(r)?9007199254740991:F2(r)?10:11:Re(28295,{value:r})}function Mi(r,e){if(r===e)return!0;const i=ea(r);if(i!==ea(e))return!1;switch(i){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return fh(r).isEqual(fh(e));case 3:return(function(l,c){if(typeof l.timestampValue=="string"&&typeof c.timestampValue=="string"&&l.timestampValue.length===c.timestampValue.length)return l.timestampValue===c.timestampValue;const d=Ws(l.timestampValue),m=Ws(c.timestampValue);return d.seconds===m.seconds&&d.nanos===m.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(l,c){return ao(l.bytesValue).isEqual(ao(c.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(l,c){return Kt(l.geoPointValue.latitude)===Kt(c.geoPointValue.latitude)&&Kt(l.geoPointValue.longitude)===Kt(c.geoPointValue.longitude)})(r,e);case 2:return(function(l,c){if("integerValue"in l&&"integerValue"in c)return Kt(l.integerValue)===Kt(c.integerValue);if("doubleValue"in l&&"doubleValue"in c){const d=Kt(l.doubleValue),m=Kt(c.doubleValue);return d===m?hh(d)===hh(m):isNaN(d)&&isNaN(m)}return!1})(r,e);case 9:return so(r.arrayValue.values||[],e.arrayValue.values||[],Mi);case 10:case 11:return(function(l,c){const d=l.mapValue.fields||{},m=c.mapValue.fields||{};if(Qv(d)!==Qv(m))return!1;for(const g in d)if(d.hasOwnProperty(g)&&(m[g]===void 0||!Mi(d[g],m[g])))return!1;return!0})(r,e);default:return Re(52216,{left:r})}}function Hl(r,e){return(r.values||[]).find((i=>Mi(i,e)))!==void 0}function oo(r,e){if(r===e)return 0;const i=ea(r),a=ea(e);if(i!==a)return Be(i,a);switch(i){case 0:case 9007199254740991:return 0;case 1:return Be(r.booleanValue,e.booleanValue);case 2:return(function(c,d){const m=Kt(c.integerValue||c.doubleValue),g=Kt(d.integerValue||d.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1})(r,e);case 3:return $v(r.timestampValue,e.timestampValue);case 4:return $v(fh(r),fh(e));case 5:return gp(r.stringValue,e.stringValue);case 6:return(function(c,d){const m=ao(c),g=ao(d);return m.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(c,d){const m=c.split("/"),g=d.split("/");for(let y=0;y<m.length&&y<g.length;y++){const T=Be(m[y],g[y]);if(T!==0)return T}return Be(m.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(c,d){const m=Be(Kt(c.latitude),Kt(d.latitude));return m!==0?m:Be(Kt(c.longitude),Kt(d.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return Jv(r.arrayValue,e.arrayValue);case 10:return(function(c,d){const m=c.fields||{},g=d.fields||{},y=m[yp]?.arrayValue,T=g[yp]?.arrayValue,S=Be(y?.values?.length||0,T?.values?.length||0);return S!==0?S:Jv(y,T)})(r.mapValue,e.mapValue);case 11:return(function(c,d){if(c===zc.mapValue&&d===zc.mapValue)return 0;if(c===zc.mapValue)return 1;if(d===zc.mapValue)return-1;const m=c.fields||{},g=Object.keys(m),y=d.fields||{},T=Object.keys(y);g.sort(),T.sort();for(let S=0;S<g.length&&S<T.length;++S){const D=gp(g[S],T[S]);if(D!==0)return D;const L=oo(m[g[S]],y[T[S]]);if(L!==0)return L}return Be(g.length,T.length)})(r.mapValue,e.mapValue);default:throw Re(23264,{he:i})}}function $v(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Be(r,e);const i=Ws(r),a=Ws(e),l=Be(i.seconds,a.seconds);return l!==0?l:Be(i.nanos,a.nanos)}function Jv(r,e){const i=r.values||[],a=e.values||[];for(let l=0;l<i.length&&l<a.length;++l){const c=oo(i[l],a[l]);if(c)return c}return Be(i.length,a.length)}function lo(r){return _p(r)}function _p(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(i){const a=Ws(i);return`time(${a.seconds},${a.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(i){return ao(i).toBase64()})(r.bytesValue):"referenceValue"in r?(function(i){return we.fromName(i).toString()})(r.referenceValue):"geoPointValue"in r?(function(i){return`geo(${i.latitude},${i.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(i){let a="[",l=!0;for(const c of i.values||[])l?l=!1:a+=",",a+=_p(c);return a+"]"})(r.arrayValue):"mapValue"in r?(function(i){const a=Object.keys(i.fields||{}).sort();let l="{",c=!0;for(const d of a)c?c=!1:l+=",",l+=`${d}:${_p(i.fields[d])}`;return l+"}"})(r.mapValue):Re(61005,{value:r})}function Zc(r){switch(ea(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=sm(r);return e?16+Zc(e):16;case 5:return 2*r.stringValue.length;case 6:return ao(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(a){return(a.values||[]).reduce(((l,c)=>l+Zc(c)),0)})(r.arrayValue);case 10:case 11:return(function(a){let l=0;return go(a.fields,((c,d)=>{l+=c.length+Zc(d)})),l})(r.mapValue);default:throw Re(13486,{value:r})}}function vp(r){return!!r&&"integerValue"in r}function am(r){return!!r&&"arrayValue"in r}function Wc(r){return!!r&&"mapValue"in r}function F2(r){return(r?.mapValue?.fields||{})[eT]?.stringValue===tT}function Nl(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return go(r.mapValue.fields,((i,a)=>e.mapValue.fields[i]=Nl(a))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let i=0;i<(r.arrayValue.values||[]).length;++i)e.arrayValue.values[i]=Nl(r.arrayValue.values[i]);return e}return{...r}}function G2(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===q2}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e){this.value=e}static empty(){return new Zn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let i=this.value;for(let a=0;a<e.length-1;++a)if(i=(i.mapValue.fields||{})[e.get(a)],!Wc(i))return null;return i=(i.mapValue.fields||{})[e.lastSegment()],i||null}}set(e,i){this.getFieldsMap(e.popLast())[e.lastSegment()]=Nl(i)}setAll(e){let i=Yt.emptyPath(),a={},l=[];e.forEach(((d,m)=>{if(!i.isImmediateParentOf(m)){const g=this.getFieldsMap(i);this.applyChanges(g,a,l),a={},l=[],i=m.popLast()}d?a[m.lastSegment()]=Nl(d):l.push(m.lastSegment())}));const c=this.getFieldsMap(i);this.applyChanges(c,a,l)}delete(e){const i=this.field(e.popLast());Wc(i)&&i.mapValue.fields&&delete i.mapValue.fields[e.lastSegment()]}isEqual(e){return Mi(this.value,e.value)}getFieldsMap(e){let i=this.value;i.mapValue.fields||(i.mapValue={fields:{}});for(let a=0;a<e.length;++a){let l=i.mapValue.fields[e.get(a)];Wc(l)&&l.mapValue.fields||(l={mapValue:{fields:{}}},i.mapValue.fields[e.get(a)]=l),i=l}return i.mapValue.fields}applyChanges(e,i,a){go(i,((l,c)=>e[l]=c));for(const l of a)delete e[l]}clone(){return new Zn(Nl(this.value))}}function nT(r){const e=[];return go(r.fields,((i,a)=>{const l=new Yt([i]);if(Wc(a)){const c=nT(a.mapValue).fields;if(c.length===0)e.push(l);else for(const d of c)e.push(l.child(d))}else e.push(l)})),new ti(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,i,a,l,c,d,m){this.key=e,this.documentType=i,this.version=a,this.readTime=l,this.createTime=c,this.data=d,this.documentState=m}static newInvalidDocument(e){return new Jn(e,0,it.min(),it.min(),it.min(),Zn.empty(),0)}static newFoundDocument(e,i,a,l){return new Jn(e,1,i,it.min(),a,l,0)}static newNoDocument(e,i){return new Jn(e,2,i,it.min(),it.min(),Zn.empty(),0)}static newUnknownDocument(e,i){return new Jn(e,3,i,it.min(),it.min(),Zn.empty(),2)}convertToFoundDocument(e,i){return!this.createTime.isEqual(it.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=i,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Zn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Zn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=it.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Jn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Jn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e,i){this.position=e,this.inclusive=i}}function Zv(r,e,i){let a=0;for(let l=0;l<r.position.length;l++){const c=e[l],d=r.position[l];if(c.field.isKeyField()?a=we.comparator(we.fromName(d.referenceValue),i.key):a=oo(d,i.data.field(c.field)),c.dir==="desc"&&(a*=-1),a!==0)break}return a}function Wv(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let i=0;i<r.position.length;i++)if(!Mi(r.position[i],e.position[i]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e,i="asc"){this.field=e,this.dir=i}}function K2(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{}class Lt extends iT{constructor(e,i,a){super(),this.field=e,this.op=i,this.value=a}static create(e,i,a){return e.isKeyField()?i==="in"||i==="not-in"?this.createKeyFieldInFilter(e,i,a):new Q2(e,i,a):i==="array-contains"?new J2(e,a):i==="in"?new Z2(e,a):i==="not-in"?new W2(e,a):i==="array-contains-any"?new eI(e,a):new Lt(e,i,a)}static createKeyFieldInFilter(e,i,a){return i==="in"?new X2(e,a):new $2(e,a)}matches(e){const i=e.data.field(this.field);return this.op==="!="?i!==null&&i.nullValue===void 0&&this.matchesComparison(oo(i,this.value)):i!==null&&ea(this.value)===ea(i)&&this.matchesComparison(oo(i,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Re(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rs extends iT{constructor(e,i){super(),this.filters=e,this.op=i,this.Pe=null}static create(e,i){return new rs(e,i)}matches(e){return rT(this)?this.filters.find((i=>!i.matches(e)))===void 0:this.filters.find((i=>i.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,i)=>e.concat(i.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function rT(r){return r.op==="and"}function sT(r){return Y2(r)&&rT(r)}function Y2(r){for(const e of r.filters)if(e instanceof rs)return!1;return!0}function Ep(r){if(r instanceof Lt)return r.field.canonicalString()+r.op.toString()+lo(r.value);if(sT(r))return r.filters.map((e=>Ep(e))).join(",");{const e=r.filters.map((i=>Ep(i))).join(",");return`${r.op}(${e})`}}function aT(r,e){return r instanceof Lt?(function(a,l){return l instanceof Lt&&a.op===l.op&&a.field.isEqual(l.field)&&Mi(a.value,l.value)})(r,e):r instanceof rs?(function(a,l){return l instanceof rs&&a.op===l.op&&a.filters.length===l.filters.length?a.filters.reduce(((c,d,m)=>c&&aT(d,l.filters[m])),!0):!1})(r,e):void Re(19439)}function oT(r){return r instanceof Lt?(function(i){return`${i.field.canonicalString()} ${i.op} ${lo(i.value)}`})(r):r instanceof rs?(function(i){return i.op.toString()+" {"+i.getFilters().map(oT).join(" ,")+"}"})(r):"Filter"}class Q2 extends Lt{constructor(e,i,a){super(e,i,a),this.key=we.fromName(a.referenceValue)}matches(e){const i=we.comparator(e.key,this.key);return this.matchesComparison(i)}}class X2 extends Lt{constructor(e,i){super(e,"in",i),this.keys=lT("in",i)}matches(e){return this.keys.some((i=>i.isEqual(e.key)))}}class $2 extends Lt{constructor(e,i){super(e,"not-in",i),this.keys=lT("not-in",i)}matches(e){return!this.keys.some((i=>i.isEqual(e.key)))}}function lT(r,e){return(e.arrayValue?.values||[]).map((i=>we.fromName(i.referenceValue)))}class J2 extends Lt{constructor(e,i){super(e,"array-contains",i)}matches(e){const i=e.data.field(this.field);return am(i)&&Hl(i.arrayValue,this.value)}}class Z2 extends Lt{constructor(e,i){super(e,"in",i)}matches(e){const i=e.data.field(this.field);return i!==null&&Hl(this.value.arrayValue,i)}}class W2 extends Lt{constructor(e,i){super(e,"not-in",i)}matches(e){if(Hl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const i=e.data.field(this.field);return i!==null&&i.nullValue===void 0&&!Hl(this.value.arrayValue,i)}}class eI extends Lt{constructor(e,i){super(e,"array-contains-any",i)}matches(e){const i=e.data.field(this.field);return!(!am(i)||!i.arrayValue.values)&&i.arrayValue.values.some((a=>Hl(this.value.arrayValue,a)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e,i=null,a=[],l=[],c=null,d=null,m=null){this.path=e,this.collectionGroup=i,this.orderBy=a,this.filters=l,this.limit=c,this.startAt=d,this.endAt=m,this.Te=null}}function eE(r,e=null,i=[],a=[],l=null,c=null,d=null){return new tI(r,e,i,a,l,c,d)}function om(r){const e=$e(r);if(e.Te===null){let i=e.path.canonicalString();e.collectionGroup!==null&&(i+="|cg:"+e.collectionGroup),i+="|f:",i+=e.filters.map((a=>Ep(a))).join(","),i+="|ob:",i+=e.orderBy.map((a=>(function(c){return c.field.canonicalString()+c.dir})(a))).join(","),im(e.limit)||(i+="|l:",i+=e.limit),e.startAt&&(i+="|lb:",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map((a=>lo(a))).join(",")),e.endAt&&(i+="|ub:",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map((a=>lo(a))).join(",")),e.Te=i}return e.Te}function lm(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<r.orderBy.length;i++)if(!K2(r.orderBy[i],e.orderBy[i]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let i=0;i<r.filters.length;i++)if(!aT(r.filters[i],e.filters[i]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Wv(r.startAt,e.startAt)&&Wv(r.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e,i=null,a=[],l=[],c=null,d="F",m=null,g=null){this.path=e,this.collectionGroup=i,this.explicitOrderBy=a,this.filters=l,this.limit=c,this.limitType=d,this.startAt=m,this.endAt=g,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function nI(r,e,i,a,l,c,d,m){return new Oh(r,e,i,a,l,c,d,m)}function iI(r){return new Oh(r)}function tE(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function rI(r){return r.collectionGroup!==null}function Ml(r){const e=$e(r);if(e.Ie===null){e.Ie=[];const i=new Set;for(const c of e.explicitOrderBy)e.Ie.push(c),i.add(c.field.canonicalString());const a=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(d){let m=new Qt(Yt.comparator);return d.filters.forEach((g=>{g.getFlattenedFilters().forEach((y=>{y.isInequality()&&(m=m.add(y.field))}))})),m})(e).forEach((c=>{i.has(c.canonicalString())||c.isKeyField()||e.Ie.push(new gh(c,a))})),i.has(Yt.keyField().canonicalString())||e.Ie.push(new gh(Yt.keyField(),a))}return e.Ie}function Gs(r){const e=$e(r);return e.Ee||(e.Ee=sI(e,Ml(r))),e.Ee}function sI(r,e){if(r.limitType==="F")return eE(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((l=>{const c=l.dir==="desc"?"asc":"desc";return new gh(l.field,c)}));const i=r.endAt?new mh(r.endAt.position,r.endAt.inclusive):null,a=r.startAt?new mh(r.startAt.position,r.startAt.inclusive):null;return eE(r.path,r.collectionGroup,e,r.filters,r.limit,i,a)}}function Tp(r,e,i){return new Oh(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,i,r.startAt,r.endAt)}function uT(r,e){return lm(Gs(r),Gs(e))&&r.limitType===e.limitType}function cT(r){return`${om(Gs(r))}|lt:${r.limitType}`}function wl(r){return`Query(target=${(function(i){let a=i.path.canonicalString();return i.collectionGroup!==null&&(a+=" collectionGroup="+i.collectionGroup),i.filters.length>0&&(a+=`, filters: [${i.filters.map((l=>oT(l))).join(", ")}]`),im(i.limit)||(a+=", limit: "+i.limit),i.orderBy.length>0&&(a+=`, orderBy: [${i.orderBy.map((l=>(function(d){return`${d.field.canonicalString()} (${d.dir})`})(l))).join(", ")}]`),i.startAt&&(a+=", startAt: ",a+=i.startAt.inclusive?"b:":"a:",a+=i.startAt.position.map((l=>lo(l))).join(",")),i.endAt&&(a+=", endAt: ",a+=i.endAt.inclusive?"a:":"b:",a+=i.endAt.position.map((l=>lo(l))).join(",")),`Target(${a})`})(Gs(r))}; limitType=${r.limitType})`}function um(r,e){return e.isFoundDocument()&&(function(a,l){const c=l.key.path;return a.collectionGroup!==null?l.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(c):we.isDocumentKey(a.path)?a.path.isEqual(c):a.path.isImmediateParentOf(c)})(r,e)&&(function(a,l){for(const c of Ml(a))if(!c.field.isKeyField()&&l.data.field(c.field)===null)return!1;return!0})(r,e)&&(function(a,l){for(const c of a.filters)if(!c.matches(l))return!1;return!0})(r,e)&&(function(a,l){return!(a.startAt&&!(function(d,m,g){const y=Zv(d,m,g);return d.inclusive?y<=0:y<0})(a.startAt,Ml(a),l)||a.endAt&&!(function(d,m,g){const y=Zv(d,m,g);return d.inclusive?y>=0:y>0})(a.endAt,Ml(a),l))})(r,e)}function aI(r){return(e,i)=>{let a=!1;for(const l of Ml(r)){const c=oI(l,e,i);if(c!==0)return c;a=a||l.field.isKeyField()}return 0}}function oI(r,e,i){const a=r.field.isKeyField()?we.comparator(e.key,i.key):(function(c,d,m){const g=d.data.field(c),y=m.data.field(c);return g!==null&&y!==null?oo(g,y):Re(42886)})(r.field,e,i);switch(r.dir){case"asc":return a;case"desc":return-1*a;default:return Re(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,i){this.mapKeyFn=e,this.equalsFn=i,this.inner={},this.innerSize=0}get(e){const i=this.mapKeyFn(e),a=this.inner[i];if(a!==void 0){for(const[l,c]of a)if(this.equalsFn(l,e))return c}}has(e){return this.get(e)!==void 0}set(e,i){const a=this.mapKeyFn(e),l=this.inner[a];if(l===void 0)return this.inner[a]=[[e,i]],void this.innerSize++;for(let c=0;c<l.length;c++)if(this.equalsFn(l[c][0],e))return void(l[c]=[e,i]);l.push([e,i]),this.innerSize++}delete(e){const i=this.mapKeyFn(e),a=this.inner[i];if(a===void 0)return!1;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return a.length===1?delete this.inner[i]:a.splice(l,1),this.innerSize--,!0;return!1}forEach(e){go(this.inner,((i,a)=>{for(const[l,c]of a)e(l,c)}))}isEmpty(){return X0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI=new pn(we.comparator);function yh(){return lI}const hT=new pn(we.comparator);function Bc(...r){let e=hT;for(const i of r)e=e.insert(i.key,i);return e}function fT(r){let e=hT;return r.forEach(((i,a)=>e=e.insert(i,a.overlayedDocument))),e}function qs(){return kl()}function dT(){return kl()}function kl(){return new ra((r=>r.toString()),((r,e)=>r.isEqual(e)))}const uI=new pn(we.comparator),cI=new Qt(we.comparator);function Zt(...r){let e=cI;for(const i of r)e=e.add(i);return e}const hI=new Qt(Be);function fI(){return hI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hh(e)?"-0":e}}function pT(r){return{integerValue:""+r}}function dI(r,e){return L2(e)?pT(e):cm(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(){this._=void 0}}function pI(r,e,i){return r instanceof ql?(function(l,c){const d={fields:{[J0]:{stringValue:$0},[W0]:{timestampValue:{seconds:l.seconds,nanos:l.nanoseconds}}}};return c&&rm(c)&&(c=sm(c)),c&&(d.fields[Z0]=c),{mapValue:d}})(i,e):r instanceof Fl?gT(r,e):r instanceof Gl?yT(r,e):(function(l,c){const d=mT(l,c),m=nE(d)+nE(l.Ae);return vp(d)&&vp(l.Ae)?pT(m):cm(l.serializer,m)})(r,e)}function mI(r,e,i){return r instanceof Fl?gT(r,e):r instanceof Gl?yT(r,e):i}function mT(r,e){return r instanceof _h?(function(a){return vp(a)||(function(c){return!!c&&"doubleValue"in c})(a)})(e)?e:{integerValue:0}:null}class ql extends xh{}class Fl extends xh{constructor(e){super(),this.elements=e}}function gT(r,e){const i=_T(e);for(const a of r.elements)i.some((l=>Mi(l,a)))||i.push(a);return{arrayValue:{values:i}}}class Gl extends xh{constructor(e){super(),this.elements=e}}function yT(r,e){let i=_T(e);for(const a of r.elements)i=i.filter((l=>!Mi(l,a)));return{arrayValue:{values:i}}}class _h extends xh{constructor(e,i){super(),this.serializer=e,this.Ae=i}}function nE(r){return Kt(r.integerValue||r.doubleValue)}function _T(r){return am(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e,i){this.field=e,this.transform=i}}function yI(r,e){return r.field.isEqual(e.field)&&(function(a,l){return a instanceof Fl&&l instanceof Fl||a instanceof Gl&&l instanceof Gl?so(a.elements,l.elements,Mi):a instanceof _h&&l instanceof _h?Mi(a.Ae,l.Ae):a instanceof ql&&l instanceof ql})(r.transform,e.transform)}class _I{constructor(e,i){this.version=e,this.transformResults=i}}class sr{constructor(e,i){this.updateTime=e,this.exists=i}static none(){return new sr}static exists(e){return new sr(void 0,e)}static updateTime(e){return new sr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function eh(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Nh{}function vT(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new TT(r.key,sr.none()):new nu(r.key,r.data,sr.none());{const i=r.data,a=Zn.empty();let l=new Qt(Yt.comparator);for(let c of e.fields)if(!l.has(c)){let d=i.field(c);d===null&&c.length>1&&(c=c.popLast(),d=i.field(c)),d===null?a.delete(c):a.set(c,d),l=l.add(c)}return new sa(r.key,a,new ti(l.toArray()),sr.none())}}function vI(r,e,i){r instanceof nu?(function(l,c,d){const m=l.value.clone(),g=rE(l.fieldTransforms,c,d.transformResults);m.setAll(g),c.convertToFoundDocument(d.version,m).setHasCommittedMutations()})(r,e,i):r instanceof sa?(function(l,c,d){if(!eh(l.precondition,c))return void c.convertToUnknownDocument(d.version);const m=rE(l.fieldTransforms,c,d.transformResults),g=c.data;g.setAll(ET(l)),g.setAll(m),c.convertToFoundDocument(d.version,g).setHasCommittedMutations()})(r,e,i):(function(l,c,d){c.convertToNoDocument(d.version).setHasCommittedMutations()})(0,e,i)}function Vl(r,e,i,a){return r instanceof nu?(function(c,d,m,g){if(!eh(c.precondition,d))return m;const y=c.value.clone(),T=sE(c.fieldTransforms,g,d);return y.setAll(T),d.convertToFoundDocument(d.version,y).setHasLocalMutations(),null})(r,e,i,a):r instanceof sa?(function(c,d,m,g){if(!eh(c.precondition,d))return m;const y=sE(c.fieldTransforms,g,d),T=d.data;return T.setAll(ET(c)),T.setAll(y),d.convertToFoundDocument(d.version,T).setHasLocalMutations(),m===null?null:m.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map((S=>S.field)))})(r,e,i,a):(function(c,d,m){return eh(c.precondition,d)?(d.convertToNoDocument(d.version).setHasLocalMutations(),null):m})(r,e,i)}function EI(r,e){let i=null;for(const a of r.fieldTransforms){const l=e.data.field(a.field),c=mT(a.transform,l||null);c!=null&&(i===null&&(i=Zn.empty()),i.set(a.field,c))}return i||null}function iE(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(a,l){return a===void 0&&l===void 0||!(!a||!l)&&so(a,l,((c,d)=>yI(c,d)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class nu extends Nh{constructor(e,i,a,l=[]){super(),this.key=e,this.value=i,this.precondition=a,this.fieldTransforms=l,this.type=0}getFieldMask(){return null}}class sa extends Nh{constructor(e,i,a,l,c=[]){super(),this.key=e,this.data=i,this.fieldMask=a,this.precondition=l,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function ET(r){const e=new Map;return r.fieldMask.fields.forEach((i=>{if(!i.isEmpty()){const a=r.data.field(i);e.set(i,a)}})),e}function rE(r,e,i){const a=new Map;ut(r.length===i.length,32656,{Re:i.length,Ve:r.length});for(let l=0;l<i.length;l++){const c=r[l],d=c.transform,m=e.data.field(c.field);a.set(c.field,mI(d,m,i[l]))}return a}function sE(r,e,i){const a=new Map;for(const l of r){const c=l.transform,d=i.data.field(l.field);a.set(l.field,pI(c,d,e))}return a}class TT extends Nh{constructor(e,i){super(),this.key=e,this.precondition=i,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class TI extends Nh{constructor(e,i){super(),this.key=e,this.precondition=i,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e,i,a,l){this.batchId=e,this.localWriteTime=i,this.baseMutations=a,this.mutations=l}applyToRemoteDocument(e,i){const a=i.mutationResults;for(let l=0;l<this.mutations.length;l++){const c=this.mutations[l];c.key.isEqual(e.key)&&vI(c,e,a[l])}}applyToLocalView(e,i){for(const a of this.baseMutations)a.key.isEqual(e.key)&&(i=Vl(a,e,i,this.localWriteTime));for(const a of this.mutations)a.key.isEqual(e.key)&&(i=Vl(a,e,i,this.localWriteTime));return i}applyToLocalDocumentSet(e,i){const a=dT();return this.mutations.forEach((l=>{const c=e.get(l.key),d=c.overlayedDocument;let m=this.applyToLocalView(d,c.mutatedFields);m=i.has(l.key)?null:m;const g=vT(d,m);g!==null&&a.set(l.key,g),d.isValidDocument()||d.convertToNoDocument(it.min())})),a}keys(){return this.mutations.reduce(((e,i)=>e.add(i.key)),Zt())}isEqual(e){return this.batchId===e.batchId&&so(this.mutations,e.mutations,((i,a)=>iE(i,a)))&&so(this.baseMutations,e.baseMutations,((i,a)=>iE(i,a)))}}class hm{constructor(e,i,a,l){this.batch=e,this.commitVersion=i,this.mutationResults=a,this.docVersions=l}static from(e,i,a){ut(e.mutations.length===a.length,58842,{me:e.mutations.length,fe:a.length});let l=(function(){return uI})();const c=e.mutations;for(let d=0;d<c.length;d++)l=l.insert(c[d].key,a[d].version);return new hm(e,i,a,l)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e,i){this.largestBatchId=e,this.mutation=i}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ct,ke;function AI(r){switch(r){case te.OK:return Re(64938);case te.CANCELLED:case te.UNKNOWN:case te.DEADLINE_EXCEEDED:case te.RESOURCE_EXHAUSTED:case te.INTERNAL:case te.UNAVAILABLE:case te.UNAUTHENTICATED:return!1;case te.INVALID_ARGUMENT:case te.NOT_FOUND:case te.ALREADY_EXISTS:case te.PERMISSION_DENIED:case te.FAILED_PRECONDITION:case te.ABORTED:case te.OUT_OF_RANGE:case te.UNIMPLEMENTED:case te.DATA_LOSS:return!0;default:return Re(15467,{code:r})}}function wI(r){if(r===void 0)return Zs("GRPC error has no .code"),te.UNKNOWN;switch(r){case Ct.OK:return te.OK;case Ct.CANCELLED:return te.CANCELLED;case Ct.UNKNOWN:return te.UNKNOWN;case Ct.DEADLINE_EXCEEDED:return te.DEADLINE_EXCEEDED;case Ct.RESOURCE_EXHAUSTED:return te.RESOURCE_EXHAUSTED;case Ct.INTERNAL:return te.INTERNAL;case Ct.UNAVAILABLE:return te.UNAVAILABLE;case Ct.UNAUTHENTICATED:return te.UNAUTHENTICATED;case Ct.INVALID_ARGUMENT:return te.INVALID_ARGUMENT;case Ct.NOT_FOUND:return te.NOT_FOUND;case Ct.ALREADY_EXISTS:return te.ALREADY_EXISTS;case Ct.PERMISSION_DENIED:return te.PERMISSION_DENIED;case Ct.FAILED_PRECONDITION:return te.FAILED_PRECONDITION;case Ct.ABORTED:return te.ABORTED;case Ct.OUT_OF_RANGE:return te.OUT_OF_RANGE;case Ct.UNIMPLEMENTED:return te.UNIMPLEMENTED;case Ct.DATA_LOSS:return te.DATA_LOSS;default:return Re(39323,{code:r})}}(ke=Ct||(Ct={}))[ke.OK=0]="OK",ke[ke.CANCELLED=1]="CANCELLED",ke[ke.UNKNOWN=2]="UNKNOWN",ke[ke.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ke[ke.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ke[ke.NOT_FOUND=5]="NOT_FOUND",ke[ke.ALREADY_EXISTS=6]="ALREADY_EXISTS",ke[ke.PERMISSION_DENIED=7]="PERMISSION_DENIED",ke[ke.UNAUTHENTICATED=16]="UNAUTHENTICATED",ke[ke.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ke[ke.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ke[ke.ABORTED=10]="ABORTED",ke[ke.OUT_OF_RANGE=11]="OUT_OF_RANGE",ke[ke.UNIMPLEMENTED=12]="UNIMPLEMENTED",ke[ke.INTERNAL=13]="INTERNAL",ke[ke.UNAVAILABLE=14]="UNAVAILABLE",ke[ke.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new $p([4294967295,4294967295],0);class RI{constructor(e,i){this.databaseId=e,this.useProto3Json=i}}function bp(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function CI(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function II(r,e){return bp(r,e.toTimestamp())}function no(r){return ut(!!r,49232),it.fromTimestamp((function(i){const a=Ws(i);return new rt(a.seconds,a.nanos)})(r))}function bT(r,e){return Sp(r,e).canonicalString()}function Sp(r,e){const i=(function(l){return new at(["projects",l.projectId,"databases",l.database])})(r).child("documents");return e===void 0?i:i.child(e)}function DI(r){const e=at.fromString(r);return ut(LI(e),10190,{key:e.toString()}),e}function Ap(r,e){return bT(r.databaseId,e.path)}function OI(r){const e=DI(r);return e.length===4?at.emptyPath():NI(e)}function xI(r){return new at(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function NI(r){return ut(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function aE(r,e,i){return{name:Ap(r,e),fields:i.value.mapValue.fields}}function MI(r,e){let i;if(e instanceof nu)i={update:aE(r,e.key,e.value)};else if(e instanceof TT)i={delete:Ap(r,e.key)};else if(e instanceof sa)i={update:aE(r,e.key,e.data),updateMask:UI(e.fieldMask)};else{if(!(e instanceof TI))return Re(16599,{Vt:e.type});i={verify:Ap(r,e.key)}}return e.fieldTransforms.length>0&&(i.updateTransforms=e.fieldTransforms.map((a=>(function(c,d){const m=d.transform;if(m instanceof ql)return{fieldPath:d.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Fl)return{fieldPath:d.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Gl)return{fieldPath:d.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof _h)return{fieldPath:d.field.canonicalString(),increment:m.Ae};throw Re(20930,{transform:d.transform})})(0,a)))),e.precondition.isNone||(i.currentDocument=(function(l,c){return c.updateTime!==void 0?{updateTime:II(l,c.updateTime)}:c.exists!==void 0?{exists:c.exists}:Re(27497)})(r,e.precondition)),i}function kI(r,e){return r&&r.length>0?(ut(e!==void 0,14353),r.map((i=>(function(l,c){let d=l.updateTime?no(l.updateTime):no(c);return d.isEqual(it.min())&&(d=no(c)),new _I(d,l.transformResults||[])})(i,e)))):[]}function VI(r){let e=OI(r.parent);const i=r.structuredQuery,a=i.from?i.from.length:0;let l=null;if(a>0){ut(a===1,65062);const T=i.from[0];T.allDescendants?l=T.collectionId:e=e.child(T.collectionId)}let c=[];i.where&&(c=(function(S){const D=ST(S);return D instanceof rs&&sT(D)?D.getFilters():[D]})(i.where));let d=[];i.orderBy&&(d=(function(S){return S.map((D=>(function(K){return new gh(Ja(K.field),(function(G){switch(G){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(K.direction))})(D)))})(i.orderBy));let m=null;i.limit&&(m=(function(S){let D;return D=typeof S=="object"?S.value:S,im(D)?null:D})(i.limit));let g=null;i.startAt&&(g=(function(S){const D=!!S.before,L=S.values||[];return new mh(L,D)})(i.startAt));let y=null;return i.endAt&&(y=(function(S){const D=!S.before,L=S.values||[];return new mh(L,D)})(i.endAt)),nI(e,l,d,c,m,"F",g,y)}function ST(r){return r.unaryFilter!==void 0?(function(i){switch(i.unaryFilter.op){case"IS_NAN":const a=Ja(i.unaryFilter.field);return Lt.create(a,"==",{doubleValue:NaN});case"IS_NULL":const l=Ja(i.unaryFilter.field);return Lt.create(l,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=Ja(i.unaryFilter.field);return Lt.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const d=Ja(i.unaryFilter.field);return Lt.create(d,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Re(61313);default:return Re(60726)}})(r):r.fieldFilter!==void 0?(function(i){return Lt.create(Ja(i.fieldFilter.field),(function(l){switch(l){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Re(58110);default:return Re(50506)}})(i.fieldFilter.op),i.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(i){return rs.create(i.compositeFilter.filters.map((a=>ST(a))),(function(l){switch(l){case"AND":return"and";case"OR":return"or";default:return Re(1026)}})(i.compositeFilter.op))})(r):Re(30097,{filter:r})}function Ja(r){return Yt.fromServerFormat(r.fieldPath)}function UI(r){const e=[];return r.fields.forEach((i=>e.push(i.canonicalString()))),{fieldPaths:e}}function LI(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e){this.yt=e}}function zI(r){const e=VI({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Tp(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(){this.Cn=new jI}addToCollectionParentIndex(e,i){return this.Cn.add(i),W.resolve()}getCollectionParents(e,i){return W.resolve(this.Cn.getEntries(i))}addFieldIndex(e,i){return W.resolve()}deleteFieldIndex(e,i){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,i){return W.resolve()}getDocumentsMatchingTarget(e,i){return W.resolve(null)}getIndexType(e,i){return W.resolve(0)}getFieldIndexes(e,i){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,i){return W.resolve(is.min())}getMinOffsetFromCollectionGroup(e,i){return W.resolve(is.min())}updateCollectionGroup(e,i,a){return W.resolve()}updateIndexEntries(e,i){return W.resolve()}}class jI{constructor(){this.index={}}add(e){const i=e.lastSegment(),a=e.popLast(),l=this.index[i]||new Qt(at.comparator),c=!l.has(a);return this.index[i]=l.add(a),c}has(e){const i=e.lastSegment(),a=e.popLast(),l=this.index[i];return l&&l.has(a)}getEntries(e){return(this.index[e]||new Qt(at.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},AT=41943040;class dn{static withCacheSize(e){return new dn(e,dn.DEFAULT_COLLECTION_PERCENTILE,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,i,a){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=i,this.maximumSequenceNumbersToCollect=a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dn.DEFAULT_COLLECTION_PERCENTILE=10,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,dn.DEFAULT=new dn(AT,dn.DEFAULT_COLLECTION_PERCENTILE,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),dn.DISABLED=new dn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new uo(0)}static cr(){return new uo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE="LruGarbageCollector",HI=1048576;function uE([r,e],[i,a]){const l=Be(r,i);return l===0?Be(e,a):l}class qI{constructor(e){this.Ir=e,this.buffer=new Qt(uE),this.Er=0}dr(){return++this.Er}Ar(e){const i=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(i);else{const a=this.buffer.last();uE(i,a)<0&&(this.buffer=this.buffer.delete(a).add(i))}}get maxValue(){return this.buffer.last()[0]}}class FI{constructor(e,i,a){this.garbageCollector=e,this.asyncQueue=i,this.localStore=a,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){he(lE,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(i){tu(i)?he(lE,"Ignoring IndexedDB error during garbage collection: ",i):await em(i)}await this.Vr(3e5)}))}}class GI{constructor(e,i){this.mr=e,this.params=i}calculateTargetCount(e,i){return this.mr.gr(e).next((a=>Math.floor(i/100*a)))}nthSequenceNumber(e,i){if(i===0)return W.resolve(tm.ce);const a=new qI(i);return this.mr.forEachTarget(e,(l=>a.Ar(l.sequenceNumber))).next((()=>this.mr.pr(e,(l=>a.Ar(l))))).next((()=>a.maxValue))}removeTargets(e,i,a){return this.mr.removeTargets(e,i,a)}removeOrphanedDocuments(e,i){return this.mr.removeOrphanedDocuments(e,i)}collect(e,i){return this.params.cacheSizeCollectionThreshold===-1?(he("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(oE)):this.getCacheSize(e).next((a=>a<this.params.cacheSizeCollectionThreshold?(he("LruGarbageCollector",`Garbage collection skipped; Cache size ${a} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),oE):this.yr(e,i)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,i){let a,l,c,d,m,g,y;const T=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((S=>(S>this.params.maximumSequenceNumbersToCollect?(he("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),l=this.params.maximumSequenceNumbersToCollect):l=S,d=Date.now(),this.nthSequenceNumber(e,l)))).next((S=>(a=S,m=Date.now(),this.removeTargets(e,a,i)))).next((S=>(c=S,g=Date.now(),this.removeOrphanedDocuments(e,a)))).next((S=>(y=Date.now(),$a()<=xe.DEBUG&&he("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${d-T}ms
	Determined least recently used ${l} in `+(m-d)+`ms
	Removed ${c} targets in `+(g-m)+`ms
	Removed ${S} documents in `+(y-g)+`ms
Total Duration: ${y-T}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:l,targetsRemoved:c,documentsRemoved:S}))))}}function KI(r,e){return new GI(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(){this.changes=new ra((e=>e.toString()),((e,i)=>e.isEqual(i))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,i){this.assertNotApplied(),this.changes.set(e,Jn.newInvalidDocument(e).setReadTime(i))}getEntry(e,i){this.assertNotApplied();const a=this.changes.get(i);return a!==void 0?W.resolve(a):this.getFromCache(e,i)}getEntries(e,i){return this.getAllFromCache(e,i)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e,i){this.overlayedDocument=e,this.mutatedFields=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e,i,a,l){this.remoteDocumentCache=e,this.mutationQueue=i,this.documentOverlayCache=a,this.indexManager=l}getDocument(e,i){let a=null;return this.documentOverlayCache.getOverlay(e,i).next((l=>(a=l,this.remoteDocumentCache.getEntry(e,i)))).next((l=>(a!==null&&Vl(a.mutation,l,ti.empty(),rt.now()),l)))}getDocuments(e,i){return this.remoteDocumentCache.getEntries(e,i).next((a=>this.getLocalViewOfDocuments(e,a,Zt()).next((()=>a))))}getLocalViewOfDocuments(e,i,a=Zt()){const l=qs();return this.populateOverlays(e,l,i).next((()=>this.computeViews(e,i,l,a).next((c=>{let d=Bc();return c.forEach(((m,g)=>{d=d.insert(m,g.overlayedDocument)})),d}))))}getOverlayedDocuments(e,i){const a=qs();return this.populateOverlays(e,a,i).next((()=>this.computeViews(e,i,a,Zt())))}populateOverlays(e,i,a){const l=[];return a.forEach((c=>{i.has(c)||l.push(c)})),this.documentOverlayCache.getOverlays(e,l).next((c=>{c.forEach(((d,m)=>{i.set(d,m)}))}))}computeViews(e,i,a,l){let c=yh();const d=kl(),m=(function(){return kl()})();return i.forEach(((g,y)=>{const T=a.get(y.key);l.has(y.key)&&(T===void 0||T.mutation instanceof sa)?c=c.insert(y.key,y):T!==void 0?(d.set(y.key,T.mutation.getFieldMask()),Vl(T.mutation,y,T.mutation.getFieldMask(),rt.now())):d.set(y.key,ti.empty())})),this.recalculateAndSaveOverlays(e,c).next((g=>(g.forEach(((y,T)=>d.set(y,T))),i.forEach(((y,T)=>m.set(y,new QI(T,d.get(y)??null)))),m)))}recalculateAndSaveOverlays(e,i){const a=kl();let l=new pn(((d,m)=>d-m)),c=Zt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,i).next((d=>{for(const m of d)m.keys().forEach((g=>{const y=i.get(g);if(y===null)return;let T=a.get(g)||ti.empty();T=m.applyToLocalView(y,T),a.set(g,T);const S=(l.get(m.batchId)||Zt()).add(g);l=l.insert(m.batchId,S)}))})).next((()=>{const d=[],m=l.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),y=g.key,T=g.value,S=dT();T.forEach((D=>{if(!c.has(D)){const L=vT(i.get(D),a.get(D));L!==null&&S.set(D,L),c=c.add(D)}})),d.push(this.documentOverlayCache.saveOverlays(e,y,S))}return W.waitFor(d)})).next((()=>a))}recalculateAndSaveOverlaysForDocumentKeys(e,i){return this.remoteDocumentCache.getEntries(e,i).next((a=>this.recalculateAndSaveOverlays(e,a)))}getDocumentsMatchingQuery(e,i,a,l){return(function(d){return we.isDocumentKey(d.path)&&d.collectionGroup===null&&d.filters.length===0})(i)?this.getDocumentsMatchingDocumentQuery(e,i.path):rI(i)?this.getDocumentsMatchingCollectionGroupQuery(e,i,a,l):this.getDocumentsMatchingCollectionQuery(e,i,a,l)}getNextDocuments(e,i,a,l){return this.remoteDocumentCache.getAllFromCollectionGroup(e,i,a,l).next((c=>{const d=l-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,i,a.largestBatchId,l-c.size):W.resolve(qs());let m=jl,g=c;return d.next((y=>W.forEach(y,((T,S)=>(m<S.largestBatchId&&(m=S.largestBatchId),c.get(T)?W.resolve():this.remoteDocumentCache.getEntry(e,T).next((D=>{g=g.insert(T,D)}))))).next((()=>this.populateOverlays(e,y,c))).next((()=>this.computeViews(e,g,y,Zt()))).next((T=>({batchId:m,changes:fT(T)})))))}))}getDocumentsMatchingDocumentQuery(e,i){return this.getDocument(e,new we(i)).next((a=>{let l=Bc();return a.isFoundDocument()&&(l=l.insert(a.key,a)),l}))}getDocumentsMatchingCollectionGroupQuery(e,i,a,l){const c=i.collectionGroup;let d=Bc();return this.indexManager.getCollectionParents(e,c).next((m=>W.forEach(m,(g=>{const y=(function(S,D){return new Oh(D,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)})(i,g.child(c));return this.getDocumentsMatchingCollectionQuery(e,y,a,l).next((T=>{T.forEach(((S,D)=>{d=d.insert(S,D)}))}))})).next((()=>d))))}getDocumentsMatchingCollectionQuery(e,i,a,l){let c;return this.documentOverlayCache.getOverlaysForCollection(e,i.path,a.largestBatchId).next((d=>(c=d,this.remoteDocumentCache.getDocumentsMatchingQuery(e,i,a,c,l)))).next((d=>{c.forEach(((g,y)=>{const T=y.getKey();d.get(T)===null&&(d=d.insert(T,Jn.newInvalidDocument(T)))}));let m=Bc();return d.forEach(((g,y)=>{const T=c.get(g);T!==void 0&&Vl(T.mutation,y,ti.empty(),rt.now()),um(i,y)&&(m=m.insert(g,y))})),m}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,i){return W.resolve(this.Lr.get(i))}saveBundleMetadata(e,i){return this.Lr.set(i.id,(function(l){return{id:l.id,version:l.version,createTime:no(l.createTime)}})(i)),W.resolve()}getNamedQuery(e,i){return W.resolve(this.kr.get(i))}saveNamedQuery(e,i){return this.kr.set(i.name,(function(l){return{name:l.name,query:zI(l.bundledQuery),readTime:no(l.readTime)}})(i)),W.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(){this.overlays=new pn(we.comparator),this.qr=new Map}getOverlay(e,i){return W.resolve(this.overlays.get(i))}getOverlays(e,i){const a=qs();return W.forEach(i,(l=>this.getOverlay(e,l).next((c=>{c!==null&&a.set(l,c)})))).next((()=>a))}saveOverlays(e,i,a){return a.forEach(((l,c)=>{this.St(e,i,c)})),W.resolve()}removeOverlaysForBatchId(e,i,a){const l=this.qr.get(a);return l!==void 0&&(l.forEach((c=>this.overlays=this.overlays.remove(c))),this.qr.delete(a)),W.resolve()}getOverlaysForCollection(e,i,a){const l=qs(),c=i.length+1,d=new we(i.child("")),m=this.overlays.getIteratorFrom(d);for(;m.hasNext();){const g=m.getNext().value,y=g.getKey();if(!i.isPrefixOf(y.path))break;y.path.length===c&&g.largestBatchId>a&&l.set(g.getKey(),g)}return W.resolve(l)}getOverlaysForCollectionGroup(e,i,a,l){let c=new pn(((y,T)=>y-T));const d=this.overlays.getIterator();for(;d.hasNext();){const y=d.getNext().value;if(y.getKey().getCollectionGroup()===i&&y.largestBatchId>a){let T=c.get(y.largestBatchId);T===null&&(T=qs(),c=c.insert(y.largestBatchId,T)),T.set(y.getKey(),y)}}const m=qs(),g=c.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((y,T)=>m.set(y,T))),!(m.size()>=l)););return W.resolve(m)}St(e,i,a){const l=this.overlays.get(a.key);if(l!==null){const d=this.qr.get(l.largestBatchId).delete(a.key);this.qr.set(l.largestBatchId,d)}this.overlays=this.overlays.insert(a.key,new SI(i,a));let c=this.qr.get(i);c===void 0&&(c=Zt(),this.qr.set(i,c)),this.qr.set(i,c.add(a.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(){this.sessionToken=Ni.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,i){return this.sessionToken=i,W.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(){this.Qr=new Qt(Ut.$r),this.Ur=new Qt(Ut.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,i){const a=new Ut(e,i);this.Qr=this.Qr.add(a),this.Ur=this.Ur.add(a)}Wr(e,i){e.forEach((a=>this.addReference(a,i)))}removeReference(e,i){this.Gr(new Ut(e,i))}zr(e,i){e.forEach((a=>this.removeReference(a,i)))}jr(e){const i=new we(new at([])),a=new Ut(i,e),l=new Ut(i,e+1),c=[];return this.Ur.forEachInRange([a,l],(d=>{this.Gr(d),c.push(d.key)})),c}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const i=new we(new at([])),a=new Ut(i,e),l=new Ut(i,e+1);let c=Zt();return this.Ur.forEachInRange([a,l],(d=>{c=c.add(d.key)})),c}containsKey(e){const i=new Ut(e,0),a=this.Qr.firstAfterOrEqual(i);return a!==null&&e.isEqual(a.key)}}class Ut{constructor(e,i){this.key=e,this.Yr=i}static $r(e,i){return we.comparator(e.key,i.key)||Be(e.Yr,i.Yr)}static Kr(e,i){return Be(e.Yr,i.Yr)||we.comparator(e.key,i.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e,i){this.indexManager=e,this.referenceDelegate=i,this.mutationQueue=[],this.tr=1,this.Zr=new Qt(Ut.$r)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,i,a,l){const c=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const d=new bI(c,i,a,l);this.mutationQueue.push(d);for(const m of l)this.Zr=this.Zr.add(new Ut(m.key,c)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return W.resolve(d)}lookupMutationBatch(e,i){return W.resolve(this.Xr(i))}getNextMutationBatchAfterBatchId(e,i){const a=i+1,l=this.ei(a),c=l<0?0:l;return W.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?nm:this.tr-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,i){const a=new Ut(i,0),l=new Ut(i,Number.POSITIVE_INFINITY),c=[];return this.Zr.forEachInRange([a,l],(d=>{const m=this.Xr(d.Yr);c.push(m)})),W.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(e,i){let a=new Qt(Be);return i.forEach((l=>{const c=new Ut(l,0),d=new Ut(l,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([c,d],(m=>{a=a.add(m.Yr)}))})),W.resolve(this.ti(a))}getAllMutationBatchesAffectingQuery(e,i){const a=i.path,l=a.length+1;let c=a;we.isDocumentKey(c)||(c=c.child(""));const d=new Ut(new we(c),0);let m=new Qt(Be);return this.Zr.forEachWhile((g=>{const y=g.key.path;return!!a.isPrefixOf(y)&&(y.length===l&&(m=m.add(g.Yr)),!0)}),d),W.resolve(this.ti(m))}ti(e){const i=[];return e.forEach((a=>{const l=this.Xr(a);l!==null&&i.push(l)})),i}removeMutationBatch(e,i){ut(this.ni(i.batchId,"removed")===0,55003),this.mutationQueue.shift();let a=this.Zr;return W.forEach(i.mutations,(l=>{const c=new Ut(l.key,i.batchId);return a=a.delete(c),this.referenceDelegate.markPotentiallyOrphaned(e,l.key)})).next((()=>{this.Zr=a}))}ir(e){}containsKey(e,i){const a=new Ut(i,0),l=this.Zr.firstAfterOrEqual(a);return W.resolve(i.isEqual(l&&l.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}ni(e,i){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const i=this.ei(e);return i<0||i>=this.mutationQueue.length?null:this.mutationQueue[i]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(e){this.ri=e,this.docs=(function(){return new pn(we.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,i){const a=i.key,l=this.docs.get(a),c=l?l.size:0,d=this.ri(i);return this.docs=this.docs.insert(a,{document:i.mutableCopy(),size:d}),this.size+=d-c,this.indexManager.addToCollectionParentIndex(e,a.path.popLast())}removeEntry(e){const i=this.docs.get(e);i&&(this.docs=this.docs.remove(e),this.size-=i.size)}getEntry(e,i){const a=this.docs.get(i);return W.resolve(a?a.document.mutableCopy():Jn.newInvalidDocument(i))}getEntries(e,i){let a=yh();return i.forEach((l=>{const c=this.docs.get(l);a=a.insert(l,c?c.document.mutableCopy():Jn.newInvalidDocument(l))})),W.resolve(a)}getDocumentsMatchingQuery(e,i,a,l){let c=yh();const d=i.path,m=new we(d.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:y,value:{document:T}}=g.getNext();if(!d.isPrefixOf(y.path))break;y.path.length>d.length+1||M2(N2(T),a)<=0||(l.has(T.key)||um(i,T))&&(c=c.insert(T.key,T.mutableCopy()))}return W.resolve(c)}getAllFromCollectionGroup(e,i,a,l){Re(9500)}ii(e,i){return W.forEach(this.docs,(a=>i(a)))}newChangeBuffer(e){return new tD(this)}getSize(e){return W.resolve(this.size)}}class tD extends YI{constructor(e){super(),this.Nr=e}applyChanges(e){const i=[];return this.changes.forEach(((a,l)=>{l.isValidDocument()?i.push(this.Nr.addEntry(e,l)):this.Nr.removeEntry(a)})),W.waitFor(i)}getFromCache(e,i){return this.Nr.getEntry(e,i)}getAllFromCache(e,i){return this.Nr.getEntries(e,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e){this.persistence=e,this.si=new ra((i=>om(i)),lm),this.lastRemoteSnapshotVersion=it.min(),this.highestTargetId=0,this.oi=0,this._i=new fm,this.targetCount=0,this.ai=uo.ur()}forEachTarget(e,i){return this.si.forEach(((a,l)=>i(l))),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,i,a){return a&&(this.lastRemoteSnapshotVersion=a),i>this.oi&&(this.oi=i),W.resolve()}Pr(e){this.si.set(e.target,e);const i=e.targetId;i>this.highestTargetId&&(this.ai=new uo(i),this.highestTargetId=i),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,i){return this.Pr(i),this.targetCount+=1,W.resolve()}updateTargetData(e,i){return this.Pr(i),W.resolve()}removeTargetData(e,i){return this.si.delete(i.target),this._i.jr(i.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,i,a){let l=0;const c=[];return this.si.forEach(((d,m)=>{m.sequenceNumber<=i&&a.get(m.targetId)===null&&(this.si.delete(d),c.push(this.removeMatchingKeysForTargetId(e,m.targetId)),l++)})),W.waitFor(c).next((()=>l))}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,i){const a=this.si.get(i)||null;return W.resolve(a)}addMatchingKeys(e,i,a){return this._i.Wr(i,a),W.resolve()}removeMatchingKeys(e,i,a){this._i.zr(i,a);const l=this.persistence.referenceDelegate,c=[];return l&&i.forEach((d=>{c.push(l.markPotentiallyOrphaned(e,d))})),W.waitFor(c)}removeMatchingKeysForTargetId(e,i){return this._i.jr(i),W.resolve()}getMatchingKeysForTargetId(e,i){const a=this._i.Hr(i);return W.resolve(a)}containsKey(e,i){return W.resolve(this._i.containsKey(i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(e,i){this.ui={},this.overlays={},this.ci=new tm(0),this.li=!1,this.li=!0,this.hi=new ZI,this.referenceDelegate=e(this),this.Pi=new nD(this),this.indexManager=new BI,this.remoteDocumentCache=(function(l){return new eD(l)})((a=>this.referenceDelegate.Ti(a))),this.serializer=new PI(i),this.Ii=new $I(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let i=this.overlays[e.toKey()];return i||(i=new JI,this.overlays[e.toKey()]=i),i}getMutationQueue(e,i){let a=this.ui[e.toKey()];return a||(a=new WI(i,this.referenceDelegate),this.ui[e.toKey()]=a),a}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,i,a){he("MemoryPersistence","Starting transaction:",e);const l=new iD(this.ci.next());return this.referenceDelegate.Ei(),a(l).next((c=>this.referenceDelegate.di(l).next((()=>c)))).toPromise().then((c=>(l.raiseOnCommittedEvent(),c)))}Ai(e,i){return W.or(Object.values(this.ui).map((a=>()=>a.containsKey(e,i))))}}class iD extends V2{constructor(e){super(),this.currentSequenceNumber=e}}class dm{constructor(e){this.persistence=e,this.Ri=new fm,this.Vi=null}static mi(e){return new dm(e)}get fi(){if(this.Vi)return this.Vi;throw Re(60996)}addReference(e,i,a){return this.Ri.addReference(a,i),this.fi.delete(a.toString()),W.resolve()}removeReference(e,i,a){return this.Ri.removeReference(a,i),this.fi.add(a.toString()),W.resolve()}markPotentiallyOrphaned(e,i){return this.fi.add(i.toString()),W.resolve()}removeTarget(e,i){this.Ri.jr(i.targetId).forEach((l=>this.fi.add(l.toString())));const a=this.persistence.getTargetCache();return a.getMatchingKeysForTargetId(e,i.targetId).next((l=>{l.forEach((c=>this.fi.add(c.toString())))})).next((()=>a.removeTargetData(e,i)))}Ei(){this.Vi=new Set}di(e){const i=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.fi,(a=>{const l=we.fromPath(a);return this.gi(e,l).next((c=>{c||i.removeEntry(l,it.min())}))})).next((()=>(this.Vi=null,i.apply(e))))}updateLimboDocument(e,i){return this.gi(e,i).next((a=>{a?this.fi.delete(i.toString()):this.fi.add(i.toString())}))}Ti(e){return 0}gi(e,i){return W.or([()=>W.resolve(this.Ri.containsKey(i)),()=>this.persistence.getTargetCache().containsKey(e,i),()=>this.persistence.Ai(e,i)])}}class vh{constructor(e,i){this.persistence=e,this.pi=new ra((a=>P2(a.path)),((a,l)=>a.isEqual(l))),this.garbageCollector=KI(this,i)}static mi(e,i){return new vh(e,i)}Ei(){}di(e){return W.resolve()}forEachTarget(e,i){return this.persistence.getTargetCache().forEachTarget(e,i)}gr(e){const i=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((a=>i.next((l=>a+l))))}wr(e){let i=0;return this.pr(e,(a=>{i++})).next((()=>i))}pr(e,i){return W.forEach(this.pi,((a,l)=>this.br(e,a,l).next((c=>c?W.resolve():i(l)))))}removeTargets(e,i,a){return this.persistence.getTargetCache().removeTargets(e,i,a)}removeOrphanedDocuments(e,i){let a=0;const l=this.persistence.getRemoteDocumentCache(),c=l.newChangeBuffer();return l.ii(e,(d=>this.br(e,d,i).next((m=>{m||(a++,c.removeEntry(d,it.min()))})))).next((()=>c.apply(e))).next((()=>a))}markPotentiallyOrphaned(e,i){return this.pi.set(i,e.currentSequenceNumber),W.resolve()}removeTarget(e,i){const a=i.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,a)}addReference(e,i,a){return this.pi.set(a,e.currentSequenceNumber),W.resolve()}removeReference(e,i,a){return this.pi.set(a,e.currentSequenceNumber),W.resolve()}updateLimboDocument(e,i){return this.pi.set(i,e.currentSequenceNumber),W.resolve()}Ti(e){let i=e.key.toString().length;return e.isFoundDocument()&&(i+=Zc(e.data.value)),i}br(e,i,a){return W.or([()=>this.persistence.Ai(e,i),()=>this.persistence.getTargetCache().containsKey(e,i),()=>{const l=this.pi.get(i);return W.resolve(l!==void 0&&l>a)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e,i,a,l){this.targetId=e,this.fromCache=i,this.Es=a,this.ds=l}static As(e,i){let a=Zt(),l=Zt();for(const c of i.docChanges)switch(c.type){case 0:a=a.add(c.doc.key);break;case 1:l=l.add(c.doc.key)}return new pm(e,i.fromCache,a,l)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return P1()?8:U2(en())>0?6:4})()}initialize(e,i){this.ps=e,this.indexManager=i,this.Rs=!0}getDocumentsMatchingQuery(e,i,a,l){const c={result:null};return this.ys(e,i).next((d=>{c.result=d})).next((()=>{if(!c.result)return this.ws(e,i,l,a).next((d=>{c.result=d}))})).next((()=>{if(c.result)return;const d=new rD;return this.Ss(e,i,d).next((m=>{if(c.result=m,this.Vs)return this.bs(e,i,d,m.size)}))})).next((()=>c.result))}bs(e,i,a,l){return a.documentReadCount<this.fs?($a()<=xe.DEBUG&&he("QueryEngine","SDK will not create cache indexes for query:",wl(i),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),W.resolve()):($a()<=xe.DEBUG&&he("QueryEngine","Query:",wl(i),"scans",a.documentReadCount,"local documents and returns",l,"documents as results."),a.documentReadCount>this.gs*l?($a()<=xe.DEBUG&&he("QueryEngine","The SDK decides to create cache indexes for query:",wl(i),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Gs(i))):W.resolve())}ys(e,i){if(tE(i))return W.resolve(null);let a=Gs(i);return this.indexManager.getIndexType(e,a).next((l=>l===0?null:(i.limit!==null&&l===1&&(i=Tp(i,null,"F"),a=Gs(i)),this.indexManager.getDocumentsMatchingTarget(e,a).next((c=>{const d=Zt(...c);return this.ps.getDocuments(e,d).next((m=>this.indexManager.getMinOffset(e,a).next((g=>{const y=this.Ds(i,m);return this.Cs(i,y,d,g.readTime)?this.ys(e,Tp(i,null,"F")):this.vs(e,y,i,g)}))))})))))}ws(e,i,a,l){return tE(i)||l.isEqual(it.min())?W.resolve(null):this.ps.getDocuments(e,a).next((c=>{const d=this.Ds(i,c);return this.Cs(i,d,a,l)?W.resolve(null):($a()<=xe.DEBUG&&he("QueryEngine","Re-using previous result from %s to execute query: %s",l.toString(),wl(i)),this.vs(e,d,i,x2(l,jl)).next((m=>m)))}))}Ds(e,i){let a=new Qt(aI(e));return i.forEach(((l,c)=>{um(e,c)&&(a=a.add(c))})),a}Cs(e,i,a,l){if(e.limit===null)return!1;if(a.size!==i.size)return!0;const c=e.limitType==="F"?i.last():i.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(l)>0)}Ss(e,i,a){return $a()<=xe.DEBUG&&he("QueryEngine","Using full collection scan to execute query:",wl(i)),this.ps.getDocumentsMatchingQuery(e,i,is.min(),a)}vs(e,i,a,l){return this.ps.getDocumentsMatchingQuery(e,a,l).next((c=>(i.forEach((d=>{c=c.insert(d.key,d)})),c)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aD="LocalStore";class oD{constructor(e,i,a,l){this.persistence=e,this.Fs=i,this.serializer=l,this.Ms=new pn(Be),this.xs=new ra((c=>om(c)),lm),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(a)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new XI(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(i=>e.collect(i,this.Ms)))}}function lD(r,e,i,a){return new oD(r,e,i,a)}async function RT(r,e){const i=$e(r);return await i.persistence.runTransaction("Handle user change","readonly",(a=>{let l;return i.mutationQueue.getAllMutationBatches(a).next((c=>(l=c,i.Bs(e),i.mutationQueue.getAllMutationBatches(a)))).next((c=>{const d=[],m=[];let g=Zt();for(const y of l){d.push(y.batchId);for(const T of y.mutations)g=g.add(T.key)}for(const y of c){m.push(y.batchId);for(const T of y.mutations)g=g.add(T.key)}return i.localDocuments.getDocuments(a,g).next((y=>({Ls:y,removedBatchIds:d,addedBatchIds:m})))}))}))}function uD(r,e){const i=$e(r);return i.persistence.runTransaction("Acknowledge batch","readwrite-primary",(a=>{const l=e.batch.keys(),c=i.Ns.newChangeBuffer({trackRemovals:!0});return(function(m,g,y,T){const S=y.batch,D=S.keys();let L=W.resolve();return D.forEach((K=>{L=L.next((()=>T.getEntry(g,K))).next((Z=>{const G=y.docVersions.get(K);ut(G!==null,48541),Z.version.compareTo(G)<0&&(S.applyToRemoteDocument(Z,y),Z.isValidDocument()&&(Z.setReadTime(y.commitVersion),T.addEntry(Z)))}))})),L.next((()=>m.mutationQueue.removeMutationBatch(g,S)))})(i,a,e,c).next((()=>c.apply(a))).next((()=>i.mutationQueue.performConsistencyCheck(a))).next((()=>i.documentOverlayCache.removeOverlaysForBatchId(a,l,e.batch.batchId))).next((()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,(function(m){let g=Zt();for(let y=0;y<m.mutationResults.length;++y)m.mutationResults[y].transformResults.length>0&&(g=g.add(m.batch.mutations[y].key));return g})(e)))).next((()=>i.localDocuments.getDocuments(a,l)))}))}function cD(r){const e=$e(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(i=>e.Pi.getLastRemoteSnapshotVersion(i)))}function hD(r,e){const i=$e(r);return i.persistence.runTransaction("Get next mutation batch","readonly",(a=>(e===void 0&&(e=nm),i.mutationQueue.getNextMutationBatchAfterBatchId(a,e))))}class cE{constructor(){this.activeTargetIds=fI()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fD{constructor(){this.Mo=new cE,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,i,a){}addLocalQueryTarget(e,i=!0){return i&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,i,a){this.xo[e]=i}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new cE,Promise.resolve()}handleUserChange(e,i,a){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dD{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE="ConnectivityMonitor";class fE{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){he(hE,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){he(hE,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jc=null;function wp(){return jc===null?jc=(function(){return 268435456+Math.round(2147483648*Math.random())})():jc++,"0x"+jc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd="RestConnection",pD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class mD{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const i=e.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Uo=i+"://"+e.host,this.Ko=`projects/${a}/databases/${l}`,this.Wo=this.databaseId.database===dh?`project_id=${a}`:`project_id=${a}&database_id=${l}`}Go(e,i,a,l,c){const d=wp(),m=this.zo(e,i.toUriEncodedString());he(Wd,`Sending RPC '${e}' ${d}:`,m,a);const g={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(g,l,c);const{host:y}=new URL(m),T=ls(y);return this.Jo(e,m,g,a,T).then((S=>(he(Wd,`Received RPC '${e}' ${d}: `,S),S)),(S=>{throw Dh(Wd,`RPC '${e}' ${d} failed with error: `,S,"url: ",m,"request:",a),S}))}Ho(e,i,a,l,c,d){return this.Go(e,i,a,l,c)}jo(e,i,a){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+mo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach(((l,c)=>e[c]=l)),a&&a.headers.forEach(((l,c)=>e[c]=l))}zo(e,i){const a=pD[e];return`${this.Uo}/v1/${i}:${a}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t="WebChannelConnection";class yD extends mD{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,i,a,l,c){const d=wp();return new Promise(((m,g)=>{const y=new P0;y.setWithCredentials(!0),y.listenOnce(z0.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case Jc.NO_ERROR:const S=y.getResponseJson();he($t,`XHR for RPC '${e}' ${d} received:`,JSON.stringify(S)),m(S);break;case Jc.TIMEOUT:he($t,`RPC '${e}' ${d} timed out`),g(new de(te.DEADLINE_EXCEEDED,"Request time out"));break;case Jc.HTTP_ERROR:const D=y.getStatus();if(he($t,`RPC '${e}' ${d} failed with status:`,D,"response text:",y.getResponseText()),D>0){let L=y.getResponseJson();Array.isArray(L)&&(L=L[0]);const K=L?.error;if(K&&K.status&&K.message){const Z=(function(ee){const ne=ee.toLowerCase().replace(/_/g,"-");return Object.values(te).indexOf(ne)>=0?ne:te.UNKNOWN})(K.status);g(new de(Z,K.message))}else g(new de(te.UNKNOWN,"Server responded with status "+y.getStatus()))}else g(new de(te.UNAVAILABLE,"Connection failed."));break;default:Re(9055,{l_:e,streamId:d,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{he($t,`RPC '${e}' ${d} completed.`)}}));const T=JSON.stringify(l);he($t,`RPC '${e}' ${d} sending request:`,l),y.send(i,"POST",T,a,15)}))}T_(e,i,a){const l=wp(),c=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],d=H0(),m=j0(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(g.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(g.useFetchStreams=!0),this.jo(g.initMessageHeaders,i,a),g.encodeInitMessageHeaders=!0;const T=c.join("");he($t,`Creating RPC '${e}' stream ${l}: ${T}`,g);const S=d.createWebChannel(T,g);this.I_(S);let D=!1,L=!1;const K=new gD({Yo:G=>{L?he($t,`Not sending because RPC '${e}' stream ${l} is closed:`,G):(D||(he($t,`Opening RPC '${e}' stream ${l} transport.`),S.open(),D=!0),he($t,`RPC '${e}' stream ${l} sending:`,G),S.send(G))},Zo:()=>S.close()}),Z=(G,ee,ne)=>{G.listen(ee,(re=>{try{ne(re)}catch(oe){setTimeout((()=>{throw oe}),0)}}))};return Z(S,Dl.EventType.OPEN,(()=>{L||(he($t,`RPC '${e}' stream ${l} transport opened.`),K.o_())})),Z(S,Dl.EventType.CLOSE,(()=>{L||(L=!0,he($t,`RPC '${e}' stream ${l} transport closed`),K.a_(),this.E_(S))})),Z(S,Dl.EventType.ERROR,(G=>{L||(L=!0,Dh($t,`RPC '${e}' stream ${l} transport errored. Name:`,G.name,"Message:",G.message),K.a_(new de(te.UNAVAILABLE,"The operation could not be completed")))})),Z(S,Dl.EventType.MESSAGE,(G=>{if(!L){const ee=G.data[0];ut(!!ee,16349);const ne=ee,re=ne?.error||ne[0]?.error;if(re){he($t,`RPC '${e}' stream ${l} received error:`,re);const oe=re.status;let me=(function(A){const w=Ct[A];if(w!==void 0)return wI(w)})(oe),Ee=re.message;me===void 0&&(me=te.INTERNAL,Ee="Unknown error status: "+oe+" with message "+re.message),L=!0,K.a_(new de(me,Ee)),S.close()}else he($t,`RPC '${e}' stream ${l} received:`,ee),K.u_(ee)}})),Z(m,B0.STAT_EVENT,(G=>{G.stat===mp.PROXY?he($t,`RPC '${e}' stream ${l} detected buffering proxy`):G.stat===mp.NOPROXY&&he($t,`RPC '${e}' stream ${l} detected no buffering proxy`)})),setTimeout((()=>{K.__()}),0),K}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((i=>i===e))}}function ep(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(r){return new RI(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e,i,a=1e3,l=1.5,c=6e4){this.Mi=e,this.timerId=i,this.d_=a,this.A_=l,this.R_=c,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const i=Math.floor(this.V_+this.y_()),a=Math.max(0,Date.now()-this.f_),l=Math.max(0,i-a);l>0&&he("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.V_} ms, delay with jitter: ${i} ms, last attempt: ${a} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,l,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE="PersistentStream";class _D{constructor(e,i,a,l,c,d,m,g){this.Mi=e,this.S_=a,this.b_=l,this.connection=c,this.authCredentialsProvider=d,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new CT(e,i)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,i){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():i&&i.code===te.RESOURCE_EXHAUSTED?(Zs(i.toString()),Zs("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):i&&i.code===te.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(i)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),i=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([a,l])=>{this.D_===i&&this.G_(a,l)}),(a=>{e((()=>{const l=new de(te.UNKNOWN,"Fetching auth token failed: "+a.message);return this.z_(l)}))}))}G_(e,i){const a=this.W_(this.D_);this.stream=this.j_(e,i),this.stream.Xo((()=>{a((()=>this.listener.Xo()))})),this.stream.t_((()=>{a((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((l=>{a((()=>this.z_(l)))})),this.stream.onMessage((l=>{a((()=>++this.F_==1?this.J_(l):this.onNext(l)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return he(dE,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return i=>{this.Mi.enqueueAndForget((()=>this.D_===e?i():(he(dE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class vD extends _D{constructor(e,i,a,l,c,d){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",i,a,l,d),this.serializer=c}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,i){return this.connection.T_("Write",e,i)}J_(e){return ut(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ut(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ut(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const i=kI(e.writeResults,e.commitTime),a=no(e.commitTime);return this.listener.na(a,i)}ra(){const e={};e.database=xI(this.serializer),this.q_(e)}ea(e){const i={streamToken:this.lastStreamToken,writes:e.map((a=>MI(this.serializer,a)))};this.q_(i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{}class TD extends ED{constructor(e,i,a,l){super(),this.authCredentials=e,this.appCheckCredentials=i,this.connection=a,this.serializer=l,this.ia=!1}sa(){if(this.ia)throw new de(te.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,i,a,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,d])=>this.connection.Go(e,Sp(i,a),l,c,d))).catch((c=>{throw c.name==="FirebaseError"?(c.code===te.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new de(te.UNKNOWN,c.toString())}))}Ho(e,i,a,l,c){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([d,m])=>this.connection.Ho(e,Sp(i,a),l,d,m,c))).catch((d=>{throw d.name==="FirebaseError"?(d.code===te.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),d):new de(te.UNKNOWN,d.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class bD{constructor(e,i){this.asyncQueue=e,this.onlineStateHandler=i,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const i=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Zs(i),this.aa=!1):he("OnlineStateTracker",i)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu="RemoteStore";class SD{constructor(e,i,a,l,c){this.localStore=e,this.datastore=i,this.asyncQueue=a,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=c,this.Aa.Oo((d=>{a.enqueueAndForget((async()=>{su(this)&&(he(iu,"Restarting streams for network reachability change."),await(async function(g){const y=$e(g);y.Ea.add(4),await ru(y),y.Ra.set("Unknown"),y.Ea.delete(4),await kh(y)})(this))}))})),this.Ra=new bD(a,l)}}async function kh(r){if(su(r))for(const e of r.da)await e(!0)}async function ru(r){for(const e of r.da)await e(!1)}function su(r){return $e(r).Ea.size===0}async function IT(r,e,i){if(!tu(e))throw e;r.Ea.add(1),await ru(r),r.Ra.set("Offline"),i||(i=()=>cD(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{he(iu,"Retrying IndexedDB access"),await i(),r.Ea.delete(1),await kh(r)}))}function DT(r,e){return e().catch((i=>IT(r,i,e)))}async function Vh(r){const e=$e(r),i=ss(e);let a=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:nm;for(;AD(e);)try{const l=await hD(e.localStore,a);if(l===null){e.Ta.length===0&&i.L_();break}a=l.batchId,wD(e,l)}catch(l){await IT(e,l)}OT(e)&&xT(e)}function AD(r){return su(r)&&r.Ta.length<10}function wD(r,e){r.Ta.push(e);const i=ss(r);i.O_()&&i.X_&&i.ea(e.mutations)}function OT(r){return su(r)&&!ss(r).x_()&&r.Ta.length>0}function xT(r){ss(r).start()}async function RD(r){ss(r).ra()}async function CD(r){const e=ss(r);for(const i of r.Ta)e.ea(i.mutations)}async function ID(r,e,i){const a=r.Ta.shift(),l=hm.from(a,e,i);await DT(r,(()=>r.remoteSyncer.applySuccessfulWrite(l))),await Vh(r)}async function DD(r,e){e&&ss(r).X_&&await(async function(a,l){if((function(d){return AI(d)&&d!==te.ABORTED})(l.code)){const c=a.Ta.shift();ss(a).B_(),await DT(a,(()=>a.remoteSyncer.rejectFailedWrite(c.batchId,l))),await Vh(a)}})(r,e),OT(r)&&xT(r)}async function pE(r,e){const i=$e(r);i.asyncQueue.verifyOperationInProgress(),he(iu,"RemoteStore received new credentials");const a=su(i);i.Ea.add(3),await ru(i),a&&i.Ra.set("Unknown"),await i.remoteSyncer.handleCredentialChange(e),i.Ea.delete(3),await kh(i)}async function OD(r,e){const i=$e(r);e?(i.Ea.delete(2),await kh(i)):e||(i.Ea.add(2),await ru(i),i.Ra.set("Unknown"))}function ss(r){return r.fa||(r.fa=(function(i,a,l){const c=$e(i);return c.sa(),new vD(a,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,l)})(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:RD.bind(null,r),r_:DD.bind(null,r),ta:CD.bind(null,r),na:ID.bind(null,r)}),r.da.push((async e=>{e?(r.fa.B_(),await Vh(r)):(await r.fa.stop(),r.Ta.length>0&&(he(iu,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e,i,a,l,c){this.asyncQueue=e,this.timerId=i,this.targetTimeMs=a,this.op=l,this.removalCallback=c,this.deferred=new Fs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((d=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,i,a,l,c){const d=Date.now()+a,m=new mm(e,i,d,l,c);return m.start(a),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new de(te.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function NT(r,e){if(Zs("AsyncQueue",`${e}: ${r}`),tu(r))return new de(te.UNAVAILABLE,`${e}: ${r}`);throw r}class xD{constructor(){this.queries=mE(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(i,a){const l=$e(i),c=l.queries;l.queries=mE(),c.forEach(((d,m)=>{for(const g of m.Sa)g.onError(a)}))})(this,new de(te.ABORTED,"Firestore shutting down"))}}function mE(){return new ra((r=>cT(r)),uT)}function ND(r){r.Ca.forEach((e=>{e.next()}))}var gE,yE;(yE=gE||(gE={})).Ma="default",yE.Cache="cache";const MD="SyncEngine";class kD{constructor(e,i,a,l,c,d){this.localStore=e,this.remoteStore=i,this.eventManager=a,this.sharedClientState=l,this.currentUser=c,this.maxConcurrentLimboResolutions=d,this.Pu={},this.Tu=new ra((m=>cT(m)),uT),this.Iu=new Map,this.Eu=new Set,this.du=new pn(we.comparator),this.Au=new Map,this.Ru=new fm,this.Vu={},this.mu=new Map,this.fu=uo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function VD(r,e,i){const a=zD(r);try{const l=await(function(d,m){const g=$e(d),y=rt.now(),T=m.reduce(((L,K)=>L.add(K.key)),Zt());let S,D;return g.persistence.runTransaction("Locally write mutations","readwrite",(L=>{let K=yh(),Z=Zt();return g.Ns.getEntries(L,T).next((G=>{K=G,K.forEach(((ee,ne)=>{ne.isValidDocument()||(Z=Z.add(ee))}))})).next((()=>g.localDocuments.getOverlayedDocuments(L,K))).next((G=>{S=G;const ee=[];for(const ne of m){const re=EI(ne,S.get(ne.key).overlayedDocument);re!=null&&ee.push(new sa(ne.key,re,nT(re.value.mapValue),sr.exists(!0)))}return g.mutationQueue.addMutationBatch(L,y,ee,m)})).next((G=>{D=G;const ee=G.applyToLocalDocumentSet(S,Z);return g.documentOverlayCache.saveOverlays(L,G.batchId,ee)}))})).then((()=>({batchId:D.batchId,changes:fT(S)})))})(a.localStore,e);a.sharedClientState.addPendingMutation(l.batchId),(function(d,m,g){let y=d.Vu[d.currentUser.toKey()];y||(y=new pn(Be)),y=y.insert(m,g),d.Vu[d.currentUser.toKey()]=y})(a,l.batchId,i),await Uh(a,l.changes),await Vh(a.remoteStore)}catch(l){const c=NT(l,"Failed to persist write");i.reject(c)}}function _E(r,e,i){const a=$e(r);if(a.isPrimaryClient&&i===0||!a.isPrimaryClient&&i===1){const l=[];a.Tu.forEach(((c,d)=>{const m=d.view.va(e);m.snapshot&&l.push(m.snapshot)})),(function(d,m){const g=$e(d);g.onlineState=m;let y=!1;g.queries.forEach(((T,S)=>{for(const D of S.Sa)D.va(m)&&(y=!0)})),y&&ND(g)})(a.eventManager,e),l.length&&a.Pu.H_(l),a.onlineState=e,a.isPrimaryClient&&a.sharedClientState.setOnlineState(e)}}async function UD(r,e){const i=$e(r),a=e.batch.batchId;try{const l=await uD(i.localStore,e);kT(i,a,null),MT(i,a),i.sharedClientState.updateMutationState(a,"acknowledged"),await Uh(i,l)}catch(l){await em(l)}}async function LD(r,e,i){const a=$e(r);try{const l=await(function(d,m){const g=$e(d);return g.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let T;return g.mutationQueue.lookupMutationBatch(y,m).next((S=>(ut(S!==null,37113),T=S.keys(),g.mutationQueue.removeMutationBatch(y,S)))).next((()=>g.mutationQueue.performConsistencyCheck(y))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(y,T,m))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,T))).next((()=>g.localDocuments.getDocuments(y,T)))}))})(a.localStore,e);kT(a,e,i),MT(a,e),a.sharedClientState.updateMutationState(e,"rejected",i),await Uh(a,l)}catch(l){await em(l)}}function MT(r,e){(r.mu.get(e)||[]).forEach((i=>{i.resolve()})),r.mu.delete(e)}function kT(r,e,i){const a=$e(r);let l=a.Vu[a.currentUser.toKey()];if(l){const c=l.get(e);c&&(i?c.reject(i):c.resolve(),l=l.remove(e)),a.Vu[a.currentUser.toKey()]=l}}async function Uh(r,e,i){const a=$e(r),l=[],c=[],d=[];a.Tu.isEmpty()||(a.Tu.forEach(((m,g)=>{d.push(a.pu(g,e,i).then((y=>{if((y||i)&&a.isPrimaryClient){const T=y?!y.fromCache:i?.targetChanges.get(g.targetId)?.current;a.sharedClientState.updateQueryState(g.targetId,T?"current":"not-current")}if(y){l.push(y);const T=pm.As(g.targetId,y);c.push(T)}})))})),await Promise.all(d),a.Pu.H_(l),await(async function(g,y){const T=$e(g);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",(S=>W.forEach(y,(D=>W.forEach(D.Es,(L=>T.persistence.referenceDelegate.addReference(S,D.targetId,L))).next((()=>W.forEach(D.ds,(L=>T.persistence.referenceDelegate.removeReference(S,D.targetId,L)))))))))}catch(S){if(!tu(S))throw S;he(aD,"Failed to update sequence numbers: "+S)}for(const S of y){const D=S.targetId;if(!S.fromCache){const L=T.Ms.get(D),K=L.snapshotVersion,Z=L.withLastLimboFreeSnapshotVersion(K);T.Ms=T.Ms.insert(D,Z)}}})(a.localStore,c))}async function PD(r,e){const i=$e(r);if(!i.currentUser.isEqual(e)){he(MD,"User change. New user:",e.toKey());const a=await RT(i.localStore,e);i.currentUser=e,(function(c,d){c.mu.forEach((m=>{m.forEach((g=>{g.reject(new de(te.CANCELLED,d))}))})),c.mu.clear()})(i,"'waitForPendingWrites' promise is rejected due to a user change."),i.sharedClientState.handleUserChange(e,a.removedBatchIds,a.addedBatchIds),await Uh(i,a.Ls)}}function zD(r){const e=$e(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=UD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=LD.bind(null,e),e}class Eh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Mh(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,i){return null}Mu(e,i){return null}vu(e){return lD(this.persistence,new sD,e.initialUser,this.serializer)}Cu(e){return new wT(dm.mi,this.serializer)}Du(e){return new fD}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Eh.provider={build:()=>new Eh};class BD extends Eh{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,i){ut(this.persistence.referenceDelegate instanceof vh,46915);const a=this.persistence.referenceDelegate.garbageCollector;return new FI(a,e.asyncQueue,i)}Cu(e){const i=this.cacheSizeBytes!==void 0?dn.withCacheSize(this.cacheSizeBytes):dn.DEFAULT;return new wT((a=>vh.mi(a,i)),this.serializer)}}class Rp{async initialize(e,i){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(i),this.remoteStore=this.createRemoteStore(i),this.eventManager=this.createEventManager(i),this.syncEngine=this.createSyncEngine(i,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>_E(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=PD.bind(null,this.syncEngine),await OD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new xD})()}createDatastore(e){const i=Mh(e.databaseInfo.databaseId),a=(function(c){return new yD(c)})(e.databaseInfo);return(function(c,d,m,g){return new TD(c,d,m,g)})(e.authCredentials,e.appCheckCredentials,a,i)}createRemoteStore(e){return(function(a,l,c,d,m){return new SD(a,l,c,d,m)})(this.localStore,this.datastore,e.asyncQueue,(i=>_E(this.syncEngine,i,0)),(function(){return fE.v()?new fE:new dD})())}createSyncEngine(e,i){return(function(l,c,d,m,g,y,T){const S=new kD(l,c,d,m,g,y);return T&&(S.gu=!0),S})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,i)}async terminate(){await(async function(i){const a=$e(i);he(iu,"RemoteStore shutting down."),a.Ea.add(5),await ru(a),a.Aa.shutdown(),a.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Rp.provider={build:()=>new Rp};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as="FirestoreClient";class jD{constructor(e,i,a,l,c){this.authCredentials=e,this.appCheckCredentials=i,this.asyncQueue=a,this.databaseInfo=l,this.user=Jt.UNAUTHENTICATED,this.clientId=Zp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(a,(async d=>{he(as,"Received user=",d.uid),await this.authCredentialListener(d),this.user=d})),this.appCheckCredentials.start(a,(d=>(he(as,"Received new app check token=",d),this.appCheckCredentialListener(d,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(i){const a=NT(i,"Failed to shutdown persistence");e.reject(a)}})),e.promise}}async function tp(r,e){r.asyncQueue.verifyOperationInProgress(),he(as,"Initializing OfflineComponentProvider");const i=r.configuration;await e.initialize(i);let a=i.initialUser;r.setCredentialChangeListener((async l=>{a.isEqual(l)||(await RT(e.localStore,l),a=l)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function vE(r,e){r.asyncQueue.verifyOperationInProgress();const i=await HD(r);he(as,"Initializing OnlineComponentProvider"),await e.initialize(i,r.configuration),r.setCredentialChangeListener((a=>pE(e.remoteStore,a))),r.setAppCheckTokenChangeListener(((a,l)=>pE(e.remoteStore,l))),r._onlineComponents=e}async function HD(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){he(as,"Using user provided OfflineComponentProvider");try{await tp(r,r._uninitializedComponentsProvider._offline)}catch(e){const i=e;if(!(function(l){return l.name==="FirebaseError"?l.code===te.FAILED_PRECONDITION||l.code===te.UNIMPLEMENTED:!(typeof DOMException<"u"&&l instanceof DOMException)||l.code===22||l.code===20||l.code===11})(i))throw i;Dh("Error using user provided cache. Falling back to memory cache: "+i),await tp(r,new Eh)}}else he(as,"Using default OfflineComponentProvider"),await tp(r,new BD(void 0));return r._offlineComponents}async function qD(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(he(as,"Using user provided OnlineComponentProvider"),await vE(r,r._uninitializedComponentsProvider._online)):(he(as,"Using default OnlineComponentProvider"),await vE(r,new Rp))),r._onlineComponents}function FD(r){return qD(r).then((e=>e.syncEngine))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VT(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EE=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT="firestore.googleapis.com",TE=!0;class bE{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new de(te.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=UT,this.ssl=TE}else this.host=e.host,this.ssl=e.ssl??TE;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=AT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<HI)throw new de(te.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}O2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=VT(e.experimentalLongPollingOptions??{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new de(te.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new de(te.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new de(te.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(a,l){return a.timeoutSeconds===l.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Lh{constructor(e,i,a,l){this._authCredentials=e,this._appCheckCredentials=i,this._databaseId=a,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new de(te.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new de(te.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bE(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(a){if(!a)return new E2;switch(a.type){case"firstParty":return new A2(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new de(te.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(i){const a=EE.get(i);a&&(he("ComponentProvider","Removing Datastore"),EE.delete(i),a.terminate())})(this),Promise.resolve()}}function GD(r,e,i,a={}){r=Y0(r,Lh);const l=ls(e),c=r._getSettings(),d={...c,emulatorOptions:r._getEmulatorOptions()},m=`${e}:${i}`;l&&(Lp(`https://${m}`),Pp("Firestore",!0)),c.host!==UT&&c.host!==m&&Dh("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...c,host:m,ssl:l,emulatorOptions:a};if(!Ys(g,d)&&(r._setSettings(g),a.mockUserToken)){let y,T;if(typeof a.mockUserToken=="string")y=a.mockUserToken,T=Jt.MOCK_USER;else{y=ZE(a.mockUserToken,r._app?.options.projectId);const S=a.mockUserToken.sub||a.mockUserToken.user_id;if(!S)throw new de(te.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new Jt(S)}r._authCredentials=new T2(new F0(y,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e,i,a){this.converter=i,this._query=a,this.type="query",this.firestore=e}withConverter(e){return new gm(this.firestore,e,this._query)}}class Wt{constructor(e,i,a){this.converter=i,this._key=a,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new es(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Wt(this.firestore,e,this._key)}toJSON(){return{type:Wt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,i,a){if(eu(i,Wt._jsonSchema))return new Wt(e,a||null,new we(at.fromString(i.referencePath)))}}Wt._jsonSchemaVersion="firestore/documentReference/1.0",Wt._jsonSchema={type:It("string",Wt._jsonSchemaVersion),referencePath:It("string")};class es extends gm{constructor(e,i,a){super(e,i,iI(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Wt(this.firestore,null,new we(e))}withConverter(e){return new es(this.firestore,e,this._path)}}function KD(r,e,...i){if(r=Pt(r),G0("collection","path",e),r instanceof Lh){const a=at.fromString(e,...i);return Fv(a),new es(r,null,a)}{if(!(r instanceof Wt||r instanceof es))throw new de(te.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=r._path.child(at.fromString(e,...i));return Fv(a),new es(r.firestore,null,a)}}function YD(r,e,...i){if(r=Pt(r),arguments.length===1&&(e=Zp.newId()),G0("doc","path",e),r instanceof Lh){const a=at.fromString(e,...i);return qv(a),new Wt(r,null,new we(a))}{if(!(r instanceof Wt||r instanceof es))throw new de(te.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=r._path.child(at.fromString(e,...i));return qv(a),new Wt(r.firestore,r instanceof es?r.converter:null,new we(a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE="AsyncQueue";class AE{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new CT(this,"async_queue_retry"),this._c=()=>{const a=ep();a&&he(SE,"Visibility state changed to "+a.visibilityState),this.M_.w_()},this.ac=e;const i=ep();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const i=ep();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const i=new Fs;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(i.resolve,i.reject),i.promise))).then((()=>i.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!tu(e))throw e;he(SE,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const i=this.ac.then((()=>(this.rc=!0,e().catch((a=>{throw this.nc=a,this.rc=!1,Zs("INTERNAL UNHANDLED ERROR: ",wE(a)),a})).then((a=>(this.rc=!1,a))))));return this.ac=i,i}enqueueAfterDelay(e,i,a){this.uc(),this.oc.indexOf(e)>-1&&(i=0);const l=mm.createAndSchedule(this,e,i,a,(c=>this.hc(c)));return this.tc.push(l),l}uc(){this.nc&&Re(47125,{Pc:wE(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const i of this.tc)if(i.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((i,a)=>i.targetTimeMs-a.targetTimeMs));for(const i of this.tc)if(i.skipDelay(),e!=="all"&&i.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const i=this.tc.indexOf(e);this.tc.splice(i,1)}}function wE(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class LT extends Lh{constructor(e,i,a,l){super(e,i,a,l),this.type="firestore",this._queue=new AE,this._persistenceKey=l?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new AE(e),this._firestoreClient=void 0,await e}}}function QD(r,e){const i=typeof r=="object"?r:jp(),a=typeof r=="string"?r:dh,l=wh(i,"firestore").getImmediate({identifier:a});if(!l._initialized){const c=XE("firestore");c&&GD(l,...c)}return l}function XD(r){if(r._terminated)throw new de(te.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||$D(r),r._firestoreClient}function $D(r){const e=r._freezeSettings(),i=(function(l,c,d,m){return new H2(l,c,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,VT(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)})(r._databaseId,r._app?.options.appId||"",r._persistenceKey,e);r._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new jD(r._authCredentials,r._appCheckCredentials,r._queue,i,r._componentsProvider&&(function(l){const c=l?._online.build();return{_offline:l?._offline.build(c),_online:c}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Wn(Ni.fromBase64String(e))}catch(i){throw new de(te.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(e){return new Wn(Ni.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Wn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(eu(e,Wn._jsonSchema))return Wn.fromBase64String(e.bytes)}}Wn._jsonSchemaVersion="firestore/bytes/1.0",Wn._jsonSchema={type:It("string",Wn._jsonSchemaVersion),bytes:It("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(...e){for(let i=0;i<e.length;++i)if(e[i].length===0)throw new de(te.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Yt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,i){if(!isFinite(e)||e<-90||e>90)throw new de(te.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(i)||i<-180||i>180)throw new de(te.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+i);this._lat=e,this._long=i}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Be(this._lat,e._lat)||Be(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ar._jsonSchemaVersion}}static fromJSON(e){if(eu(e,ar._jsonSchema))return new ar(e.latitude,e.longitude)}}ar._jsonSchemaVersion="firestore/geoPoint/1.0",ar._jsonSchema={type:It("string",ar._jsonSchemaVersion),latitude:It("number"),longitude:It("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e){this._values=(e||[]).map((i=>i))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(a,l){if(a.length!==l.length)return!1;for(let c=0;c<a.length;++c)if(a[c]!==l[c])return!1;return!0})(this._values,e._values)}toJSON(){return{type:or._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(eu(e,or._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((i=>typeof i=="number")))return new or(e.vectorValues);throw new de(te.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}or._jsonSchemaVersion="firestore/vectorValue/1.0",or._jsonSchema={type:It("string",or._jsonSchemaVersion),vectorValues:It("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JD=/^__.*__$/;class ZD{constructor(e,i,a){this.data=e,this.fieldMask=i,this.fieldTransforms=a}toMutation(e,i){return this.fieldMask!==null?new sa(e,this.data,this.fieldMask,i,this.fieldTransforms):new nu(e,this.data,i,this.fieldTransforms)}}function PT(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Re(40011,{Ac:r})}}class vm{constructor(e,i,a,l,c,d){this.settings=e,this.databaseId=i,this.serializer=a,this.ignoreUndefinedProperties=l,c===void 0&&this.Rc(),this.fieldTransforms=c||[],this.fieldMask=d||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new vm({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const i=this.path?.child(e),a=this.Vc({path:i,fc:!1});return a.gc(e),a}yc(e){const i=this.path?.child(e),a=this.Vc({path:i,fc:!1});return a.Rc(),a}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Th(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((i=>e.isPrefixOf(i)))!==void 0||this.fieldTransforms.find((i=>e.isPrefixOf(i.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(PT(this.Ac)&&JD.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class WD{constructor(e,i,a){this.databaseId=e,this.ignoreUndefinedProperties=i,this.serializer=a||Mh(e)}Cc(e,i,a,l=!1){return new vm({Ac:e,methodName:i,Dc:a,path:Yt.emptyPath(),fc:!1,bc:l},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function eO(r){const e=r._freezeSettings(),i=Mh(r._databaseId);return new WD(r._databaseId,!!e.ignoreUndefinedProperties,i)}function tO(r,e,i,a,l,c={}){const d=r.Cc(c.merge||c.mergeFields?2:0,e,i,l);HT("Data must be an object, but it was:",d,a);const m=BT(a,d);let g,y;if(c.merge)g=new ti(d.fieldMask),y=d.fieldTransforms;else if(c.mergeFields){const T=[];for(const S of c.mergeFields){const D=nO(e,S,i);if(!d.contains(D))throw new de(te.INVALID_ARGUMENT,`Field '${D}' is specified in your field mask but missing from your input data.`);rO(T,D)||T.push(D)}g=new ti(T),y=d.fieldTransforms.filter((S=>g.covers(S.field)))}else g=null,y=d.fieldTransforms;return new ZD(new Zn(m),g,y)}class Em extends _m{_toFieldTransform(e){return new gI(e.path,new ql)}isEqual(e){return e instanceof Em}}function zT(r,e){if(jT(r=Pt(r)))return HT("Unsupported field value:",e,r),BT(r,e);if(r instanceof _m)return(function(a,l){if(!PT(l.Ac))throw l.Sc(`${a._methodName}() can only be used with update() and set()`);if(!l.path)throw l.Sc(`${a._methodName}() is not currently supported inside arrays`);const c=a._toFieldTransform(l);c&&l.fieldTransforms.push(c)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(a,l){const c=[];let d=0;for(const m of a){let g=zT(m,l.wc(d));g==null&&(g={nullValue:"NULL_VALUE"}),c.push(g),d++}return{arrayValue:{values:c}}})(r,e)}return(function(a,l){if((a=Pt(a))===null)return{nullValue:"NULL_VALUE"};if(typeof a=="number")return dI(l.serializer,a);if(typeof a=="boolean")return{booleanValue:a};if(typeof a=="string")return{stringValue:a};if(a instanceof Date){const c=rt.fromDate(a);return{timestampValue:bp(l.serializer,c)}}if(a instanceof rt){const c=new rt(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:bp(l.serializer,c)}}if(a instanceof ar)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof Wn)return{bytesValue:CI(l.serializer,a._byteString)};if(a instanceof Wt){const c=l.databaseId,d=a.firestore._databaseId;if(!d.isEqual(c))throw l.Sc(`Document reference is for database ${d.projectId}/${d.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:bT(a.firestore._databaseId||l.databaseId,a._key.path)}}if(a instanceof or)return(function(d,m){return{mapValue:{fields:{[eT]:{stringValue:tT},[yp]:{arrayValue:{values:d.toArray().map((y=>{if(typeof y!="number")throw m.Sc("VectorValues must only contain numeric values.");return cm(m.serializer,y)}))}}}}}})(a,l);throw l.Sc(`Unsupported field value: ${Wp(a)}`)})(r,e)}function BT(r,e){const i={};return X0(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):go(r,((a,l)=>{const c=zT(l,e.mc(a));c!=null&&(i[a]=c)})),{mapValue:{fields:i}}}function jT(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof rt||r instanceof ar||r instanceof Wn||r instanceof Wt||r instanceof _m||r instanceof or)}function HT(r,e,i){if(!jT(i)||!K0(i)){const a=Wp(i);throw a==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+a)}}function nO(r,e,i){if((e=Pt(e))instanceof ym)return e._internalPath;if(typeof e=="string")return qT(r,e);throw Th("Field path arguments must be of type string or ",r,!1,void 0,i)}const iO=new RegExp("[~\\*/\\[\\]]");function qT(r,e,i){if(e.search(iO)>=0)throw Th(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,i);try{return new ym(...e.split("."))._internalPath}catch{throw Th(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,i)}}function Th(r,e,i,a,l){const c=a&&!a.isEmpty(),d=l!==void 0;let m=`Function ${e}() called with invalid data`;i&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(c||d)&&(g+=" (found",c&&(g+=` in field ${a}`),d&&(g+=` in document ${l}`),g+=")"),new de(te.INVALID_ARGUMENT,m+r+g)}function rO(r,e){return r.some((i=>i.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(e,i,a,l,c){this._firestore=e,this._userDataWriter=i,this._key=a,this._document=l,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new Wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const i=this._document.data.field(GT("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i)}}}class sO extends FT{data(){return super.data()}}function GT(r,e){return typeof e=="string"?qT(r,e):e instanceof ym?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aO(r,e,i){let a;return a=r?r.toFirestore(e):e,a}class Hc{constructor(e,i){this.hasPendingWrites=e,this.fromCache=i}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class io extends FT{constructor(e,i,a,l,c,d){super(e,i,a,l,d),this._firestore=e,this._firestoreImpl=e,this.metadata=c}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const i=new th(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(i,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,i={}){if(this._document){const a=this._document.data.field(GT("DocumentSnapshot.get",e));if(a!==null)return this._userDataWriter.convertValue(a,i.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new de(te.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,i={};return i.type=io._jsonSchemaVersion,i.bundle="",i.bundleSource="DocumentSnapshot",i.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?i:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),i.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),i)}}io._jsonSchemaVersion="firestore/documentSnapshot/1.0",io._jsonSchema={type:It("string",io._jsonSchemaVersion),bundleSource:It("string","DocumentSnapshot"),bundleName:It("string"),bundle:It("string")};class th extends io{data(e={}){return super.data(e)}}class Ul{constructor(e,i,a,l){this._firestore=e,this._userDataWriter=i,this._snapshot=l,this.metadata=new Hc(l.hasPendingWrites,l.fromCache),this.query=a}get docs(){const e=[];return this.forEach((i=>e.push(i))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,i){this._snapshot.docs.forEach((a=>{e.call(i,new th(this._firestore,this._userDataWriter,a.key,a,new Hc(this._snapshot.mutatedKeys.has(a.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const i=!!e.includeMetadataChanges;if(i&&this._snapshot.excludesMetadataChanges)throw new de(te.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===i||(this._cachedChanges=(function(l,c){if(l._snapshot.oldDocs.isEmpty()){let d=0;return l._snapshot.docChanges.map((m=>{const g=new th(l._firestore,l._userDataWriter,m.doc.key,m.doc,new Hc(l._snapshot.mutatedKeys.has(m.doc.key),l._snapshot.fromCache),l.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:d++}}))}{let d=l._snapshot.oldDocs;return l._snapshot.docChanges.filter((m=>c||m.type!==3)).map((m=>{const g=new th(l._firestore,l._userDataWriter,m.doc.key,m.doc,new Hc(l._snapshot.mutatedKeys.has(m.doc.key),l._snapshot.fromCache),l.query.converter);let y=-1,T=-1;return m.type!==0&&(y=d.indexOf(m.doc.key),d=d.delete(m.doc.key)),m.type!==1&&(d=d.add(m.doc),T=d.indexOf(m.doc.key)),{type:oO(m.type),doc:g,oldIndex:y,newIndex:T}}))}})(this,i),this._cachedChangesIncludeMetadataChanges=i),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new de(te.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ul._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Zp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const i=[],a=[],l=[];return this.docs.forEach((c=>{c._document!==null&&(i.push(c._document),a.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),l.push(c.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function oO(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Re(61501,{type:r})}}Ul._jsonSchemaVersion="firestore/querySnapshot/1.0",Ul._jsonSchema={type:It("string",Ul._jsonSchemaVersion),bundleSource:It("string","QuerySnapshot"),bundleName:It("string"),bundle:It("string")};function lO(r,e){const i=Y0(r.firestore,LT),a=YD(r),l=aO(r.converter,e);return uO(i,[tO(eO(r.firestore),"addDoc",a._key,l,r.converter!==null,{}).toMutation(a._key,sr.exists(!1))]).then((()=>a))}function uO(r,e){return(function(a,l){const c=new Fs;return a.asyncQueue.enqueueAndForget((async()=>VD(await FD(a),l,c))),c.promise})(XD(r),e)}function cO(){return new Em("serverTimestamp")}(function(e,i=!0){(function(l){mo=l})(na),Qs(new ns("firestore",((a,{instanceIdentifier:l,options:c})=>{const d=a.getProvider("app").getImmediate(),m=new LT(new b2(a.getProvider("auth-internal")),new w2(d,a.getProvider("app-check-internal")),(function(y,T){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new de(te.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ph(y.options.projectId,T)})(d,l),d);return c={useFetchStreams:i,...c},m._setSettings(c),m}),"PUBLIC").setMultipleInstances(!0)),Di(zv,Bv,e),Di(zv,Bv,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT="firebasestorage.googleapis.com",YT="storageBucket",hO=120*1e3,fO=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends Vi{constructor(e,i,a=0){super(np(e),`Firebase Storage: ${i} (${np(e)})`),this.status_=a,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ht.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return np(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ct;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ct||(ct={}));function np(r){return"storage/"+r}function Tm(){const r="An unknown error occurred, please check the error payload for server response.";return new ht(ct.UNKNOWN,r)}function dO(r){return new ht(ct.OBJECT_NOT_FOUND,"Object '"+r+"' does not exist.")}function pO(r){return new ht(ct.QUOTA_EXCEEDED,"Quota for bucket '"+r+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function mO(){const r="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ht(ct.UNAUTHENTICATED,r)}function gO(){return new ht(ct.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function yO(r){return new ht(ct.UNAUTHORIZED,"User does not have permission to access '"+r+"'.")}function _O(){return new ht(ct.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function vO(){return new ht(ct.CANCELED,"User canceled the upload/download.")}function EO(r){return new ht(ct.INVALID_URL,"Invalid URL '"+r+"'.")}function TO(r){return new ht(ct.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function bO(){return new ht(ct.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+YT+"' property when initializing the app?")}function SO(){return new ht(ct.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function AO(){return new ht(ct.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function wO(r){return new ht(ct.UNSUPPORTED_ENVIRONMENT,`${r} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Cp(r){return new ht(ct.INVALID_ARGUMENT,r)}function QT(){return new ht(ct.APP_DELETED,"The Firebase app was deleted.")}function RO(r){return new ht(ct.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ll(r,e){return new ht(ct.INVALID_FORMAT,"String does not match format '"+r+"': "+e)}function Rl(r){throw new ht(ct.INTERNAL_ERROR,"Internal error: "+r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,i){this.bucket=e,this.path_=i}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,i){let a;try{a=wn.makeFromUrl(e,i)}catch{return new wn(e,"")}if(a.path==="")return a;throw TO(e)}static makeFromUrl(e,i){let a=null;const l="([A-Za-z0-9.\\-_]+)";function c(oe){oe.path.charAt(oe.path.length-1)==="/"&&(oe.path_=oe.path_.slice(0,-1))}const d="(/(.*))?$",m=new RegExp("^gs://"+l+d,"i"),g={bucket:1,path:3};function y(oe){oe.path_=decodeURIComponent(oe.path)}const T="v[A-Za-z0-9_]+",S=i.replace(/[.]/g,"\\."),D="(/([^?#]*).*)?$",L=new RegExp(`^https?://${S}/${T}/b/${l}/o${D}`,"i"),K={bucket:1,path:3},Z=i===KT?"(?:storage.googleapis.com|storage.cloud.google.com)":i,G="([^?#]*)",ee=new RegExp(`^https?://${Z}/${l}/${G}`,"i"),re=[{regex:m,indices:g,postModify:c},{regex:L,indices:K,postModify:y},{regex:ee,indices:{bucket:1,path:2},postModify:y}];for(let oe=0;oe<re.length;oe++){const me=re[oe],Ee=me.regex.exec(e);if(Ee){const I=Ee[me.indices.bucket];let A=Ee[me.indices.path];A||(A=""),a=new wn(I,A),me.postModify(a);break}}if(a==null)throw EO(e);return a}}class CO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IO(r,e,i){let a=1,l=null,c=null,d=!1,m=0;function g(){return m===2}let y=!1;function T(...G){y||(y=!0,e.apply(null,G))}function S(G){l=setTimeout(()=>{l=null,r(L,g())},G)}function D(){c&&clearTimeout(c)}function L(G,...ee){if(y){D();return}if(G){D(),T.call(null,G,...ee);return}if(g()||d){D(),T.call(null,G,...ee);return}a<64&&(a*=2);let re;m===1?(m=2,re=0):re=(a+Math.random())*1e3,S(re)}let K=!1;function Z(G){K||(K=!0,D(),!y&&(l!==null?(G||(m=2),clearTimeout(l),S(0)):G||(m=1)))}return S(0),c=setTimeout(()=>{d=!0,Z(!0)},i),Z}function DO(r){r(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OO(r){return r!==void 0}function xO(r){return typeof r=="object"&&!Array.isArray(r)}function bm(r){return typeof r=="string"||r instanceof String}function RE(r){return Sm()&&r instanceof Blob}function Sm(){return typeof Blob<"u"}function CE(r,e,i,a){if(a<e)throw Cp(`Invalid value for '${r}'. Expected ${e} or greater.`);if(a>i)throw Cp(`Invalid value for '${r}'. Expected ${i} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(r,e,i){let a=e;return i==null&&(a=`https://${e}`),`${i}://${a}/v0${r}`}function XT(r){const e=encodeURIComponent;let i="?";for(const a in r)if(r.hasOwnProperty(a)){const l=e(a)+"="+e(r[a]);i=i+l+"&"}return i=i.slice(0,-1),i}var Ks;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(Ks||(Ks={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NO(r,e){const i=r>=500&&r<600,l=[408,429].indexOf(r)!==-1,c=e.indexOf(r)!==-1;return i||l||c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{constructor(e,i,a,l,c,d,m,g,y,T,S,D=!0,L=!1){this.url_=e,this.method_=i,this.headers_=a,this.body_=l,this.successCodes_=c,this.additionalRetryCodes_=d,this.callback_=m,this.errorCallback_=g,this.timeout_=y,this.progressCallback_=T,this.connectionFactory_=S,this.retry=D,this.isUsingEmulator=L,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((K,Z)=>{this.resolve_=K,this.reject_=Z,this.start_()})}start_(){const e=(a,l)=>{if(l){a(!1,new qc(!1,null,!0));return}const c=this.connectionFactory_();this.pendingConnection_=c;const d=m=>{const g=m.loaded,y=m.lengthComputable?m.total:-1;this.progressCallback_!==null&&this.progressCallback_(g,y)};this.progressCallback_!==null&&c.addUploadProgressListener(d),c.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&c.removeUploadProgressListener(d),this.pendingConnection_=null;const m=c.getErrorCode()===Ks.NO_ERROR,g=c.getStatus();if(!m||NO(g,this.additionalRetryCodes_)&&this.retry){const T=c.getErrorCode()===Ks.ABORT;a(!1,new qc(!1,null,T));return}const y=this.successCodes_.indexOf(g)!==-1;a(!0,new qc(y,c))})},i=(a,l)=>{const c=this.resolve_,d=this.reject_,m=l.connection;if(l.wasSuccessCode)try{const g=this.callback_(m,m.getResponse());OO(g)?c(g):c()}catch(g){d(g)}else if(m!==null){const g=Tm();g.serverResponse=m.getErrorText(),this.errorCallback_?d(this.errorCallback_(m,g)):d(g)}else if(l.canceled){const g=this.appDelete_?QT():vO();d(g)}else{const g=_O();d(g)}};this.canceled_?i(!1,new qc(!1,null,!0)):this.backoffId_=IO(e,i,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&DO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class qc{constructor(e,i,a){this.wasSuccessCode=e,this.connection=i,this.canceled=!!a}}function kO(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function VO(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function UO(r,e){e&&(r["X-Firebase-GMPID"]=e)}function LO(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function PO(r,e,i,a,l,c,d=!0,m=!1){const g=XT(r.urlParams),y=r.url+g,T=Object.assign({},r.headers);return UO(T,e),kO(T,i),VO(T,c),LO(T,a),new MO(y,r.method,T,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,l,d,m)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zO(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function BO(...r){const e=zO();if(e!==void 0){const i=new e;for(let a=0;a<r.length;a++)i.append(r[a]);return i.getBlob()}else{if(Sm())return new Blob(r);throw new ht(ct.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function jO(r,e,i){return r.webkitSlice?r.webkitSlice(e,i):r.mozSlice?r.mozSlice(e,i):r.slice?r.slice(e,i):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HO(r){if(typeof atob>"u")throw wO("base-64");return atob(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ip{constructor(e,i){this.data=e,this.contentType=i||null}}function qO(r,e){switch(r){case Ii.RAW:return new ip($T(e));case Ii.BASE64:case Ii.BASE64URL:return new ip(JT(r,e));case Ii.DATA_URL:return new ip(GO(e),KO(e))}throw Tm()}function $T(r){const e=[];for(let i=0;i<r.length;i++){let a=r.charCodeAt(i);if(a<=127)e.push(a);else if(a<=2047)e.push(192|a>>6,128|a&63);else if((a&64512)===55296)if(!(i<r.length-1&&(r.charCodeAt(i+1)&64512)===56320))e.push(239,191,189);else{const c=a,d=r.charCodeAt(++i);a=65536|(c&1023)<<10|d&1023,e.push(240|a>>18,128|a>>12&63,128|a>>6&63,128|a&63)}else(a&64512)===56320?e.push(239,191,189):e.push(224|a>>12,128|a>>6&63,128|a&63)}return new Uint8Array(e)}function FO(r){let e;try{e=decodeURIComponent(r)}catch{throw Ll(Ii.DATA_URL,"Malformed data URL.")}return $T(e)}function JT(r,e){switch(r){case Ii.BASE64:{const l=e.indexOf("-")!==-1,c=e.indexOf("_")!==-1;if(l||c)throw Ll(r,"Invalid character '"+(l?"-":"_")+"' found: is it base64url encoded?");break}case Ii.BASE64URL:{const l=e.indexOf("+")!==-1,c=e.indexOf("/")!==-1;if(l||c)throw Ll(r,"Invalid character '"+(l?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let i;try{i=HO(e)}catch(l){throw l.message.includes("polyfill")?l:Ll(r,"Invalid character found")}const a=new Uint8Array(i.length);for(let l=0;l<i.length;l++)a[l]=i.charCodeAt(l);return a}class ZT{constructor(e){this.base64=!1,this.contentType=null;const i=e.match(/^data:([^,]+)?,/);if(i===null)throw Ll(Ii.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const a=i[1]||null;a!=null&&(this.base64=YO(a,";base64"),this.contentType=this.base64?a.substring(0,a.length-7):a),this.rest=e.substring(e.indexOf(",")+1)}}function GO(r){const e=new ZT(r);return e.base64?JT(Ii.BASE64,e.rest):FO(e.rest)}function KO(r){return new ZT(r).contentType}function YO(r,e){return r.length>=e.length?r.substring(r.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,i){let a=0,l="";RE(e)?(this.data_=e,a=e.size,l=e.type):e instanceof ArrayBuffer?(i?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),a=this.data_.length):e instanceof Uint8Array&&(i?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),a=e.length),this.size_=a,this.type_=l}size(){return this.size_}type(){return this.type_}slice(e,i){if(RE(this.data_)){const a=this.data_,l=jO(a,e,i);return l===null?null:new Jr(l)}else{const a=new Uint8Array(this.data_.buffer,e,i-e);return new Jr(a,!0)}}static getBlob(...e){if(Sm()){const i=e.map(a=>a instanceof Jr?a.data_:a);return new Jr(BO.apply(null,i))}else{const i=e.map(d=>bm(d)?qO(Ii.RAW,d).data:d.data_);let a=0;i.forEach(d=>{a+=d.byteLength});const l=new Uint8Array(a);let c=0;return i.forEach(d=>{for(let m=0;m<d.length;m++)l[c++]=d[m]}),new Jr(l,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WT(r){let e;try{e=JSON.parse(r)}catch{return null}return xO(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QO(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function XO(r,e){const i=e.split("/").filter(a=>a.length>0).join("/");return r.length===0?i:r+"/"+i}function eb(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $O(r,e){return e}class sn{constructor(e,i,a,l){this.server=e,this.local=i||e,this.writable=!!a,this.xform=l||$O}}let Fc=null;function JO(r){return!bm(r)||r.length<2?r:eb(r)}function tb(){if(Fc)return Fc;const r=[];r.push(new sn("bucket")),r.push(new sn("generation")),r.push(new sn("metageneration")),r.push(new sn("name","fullPath",!0));function e(c,d){return JO(d)}const i=new sn("name");i.xform=e,r.push(i);function a(c,d){return d!==void 0?Number(d):d}const l=new sn("size");return l.xform=a,r.push(l),r.push(new sn("timeCreated")),r.push(new sn("updated")),r.push(new sn("md5Hash",null,!0)),r.push(new sn("cacheControl",null,!0)),r.push(new sn("contentDisposition",null,!0)),r.push(new sn("contentEncoding",null,!0)),r.push(new sn("contentLanguage",null,!0)),r.push(new sn("contentType",null,!0)),r.push(new sn("metadata","customMetadata",!0)),Fc=r,Fc}function ZO(r,e){function i(){const a=r.bucket,l=r.fullPath,c=new wn(a,l);return e._makeStorageReference(c)}Object.defineProperty(r,"ref",{get:i})}function WO(r,e,i){const a={};a.type="file";const l=i.length;for(let c=0;c<l;c++){const d=i[c];a[d.local]=d.xform(a,e[d.server])}return ZO(a,r),a}function nb(r,e,i){const a=WT(e);return a===null?null:WO(r,a,i)}function ex(r,e,i,a){const l=WT(e);if(l===null||!bm(l.downloadTokens))return null;const c=l.downloadTokens;if(c.length===0)return null;const d=encodeURIComponent;return c.split(",").map(y=>{const T=r.bucket,S=r.fullPath,D="/b/"+d(T)+"/o/"+d(S),L=Am(D,i,a),K=XT({alt:"media",token:y});return L+K})[0]}function tx(r,e){const i={},a=e.length;for(let l=0;l<a;l++){const c=e[l];c.writable&&(i[c.server]=r[c.local])}return JSON.stringify(i)}class ib{constructor(e,i,a,l){this.url=e,this.method=i,this.handler=a,this.timeout=l,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rb(r){if(!r)throw Tm()}function nx(r,e){function i(a,l){const c=nb(r,l,e);return rb(c!==null),c}return i}function ix(r,e){function i(a,l){const c=nb(r,l,e);return rb(c!==null),ex(c,l,r.host,r._protocol)}return i}function sb(r){function e(i,a){let l;return i.getStatus()===401?i.getErrorText().includes("Firebase App Check token is invalid")?l=gO():l=mO():i.getStatus()===402?l=pO(r.bucket):i.getStatus()===403?l=yO(r.path):l=a,l.status=i.getStatus(),l.serverResponse=a.serverResponse,l}return e}function rx(r){const e=sb(r);function i(a,l){let c=e(a,l);return a.getStatus()===404&&(c=dO(r.path)),c.serverResponse=l.serverResponse,c}return i}function sx(r,e,i){const a=e.fullServerUrl(),l=Am(a,r.host,r._protocol),c="GET",d=r.maxOperationRetryTime,m=new ib(l,c,ix(r,i),d);return m.errorHandler=rx(e),m}function ax(r,e){return r&&r.contentType||e&&e.type()||"application/octet-stream"}function ox(r,e,i){const a=Object.assign({},i);return a.fullPath=r.path,a.size=e.size(),a.contentType||(a.contentType=ax(null,e)),a}function lx(r,e,i,a,l){const c=e.bucketOnlyServerUrl(),d={"X-Goog-Upload-Protocol":"multipart"};function m(){let re="";for(let oe=0;oe<2;oe++)re=re+Math.random().toString().slice(2);return re}const g=m();d["Content-Type"]="multipart/related; boundary="+g;const y=ox(e,a,l),T=tx(y,i),S="--"+g+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+T+`\r
--`+g+`\r
Content-Type: `+y.contentType+`\r
\r
`,D=`\r
--`+g+"--",L=Jr.getBlob(S,a,D);if(L===null)throw SO();const K={name:y.fullPath},Z=Am(c,r.host,r._protocol),G="POST",ee=r.maxUploadRetryTime,ne=new ib(Z,G,nx(r,i),ee);return ne.urlParams=K,ne.headers=d,ne.body=L.uploadData(),ne.errorHandler=sb(e),ne}class ux{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ks.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ks.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ks.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,i,a,l,c){if(this.sent_)throw Rl("cannot .send() more than once");if(ls(e)&&a&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(i,e,!0),c!==void 0)for(const d in c)c.hasOwnProperty(d)&&this.xhr_.setRequestHeader(d,c[d].toString());return l!==void 0?this.xhr_.send(l):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Rl("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Rl("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Rl("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Rl("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class cx extends ux{initXhr(){this.xhr_.responseType="text"}}function ab(){return new cx}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,i){this._service=e,i instanceof wn?this._location=i:this._location=wn.makeFromUrl(i,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,i){return new ta(e,i)}get root(){const e=new wn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return eb(this._location.path)}get storage(){return this._service}get parent(){const e=QO(this._location.path);if(e===null)return null;const i=new wn(this._location.bucket,e);return new ta(this._service,i)}_throwIfRoot(e){if(this._location.path==="")throw RO(e)}}function hx(r,e,i){r._throwIfRoot("uploadBytes");const a=lx(r.storage,r._location,tb(),new Jr(e,!0),i);return r.storage.makeRequestWithTokens(a,ab).then(l=>({metadata:l,ref:r}))}function fx(r){r._throwIfRoot("getDownloadURL");const e=sx(r.storage,r._location,tb());return r.storage.makeRequestWithTokens(e,ab).then(i=>{if(i===null)throw AO();return i})}function dx(r,e){const i=XO(r._location.path,e),a=new wn(r._location.bucket,i);return new ta(r.storage,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function px(r){return/^[A-Za-z]+:\/\//.test(r)}function mx(r,e){return new ta(r,e)}function ob(r,e){if(r instanceof wm){const i=r;if(i._bucket==null)throw bO();const a=new ta(i,i._bucket);return e!=null?ob(a,e):a}else return e!==void 0?dx(r,e):r}function gx(r,e){if(e&&px(e)){if(r instanceof wm)return mx(r,e);throw Cp("To use ref(service, url), the first argument must be a Storage instance.")}else return ob(r,e)}function IE(r,e){const i=e?.[YT];return i==null?null:wn.makeFromBucketSpec(i,r)}function yx(r,e,i,a={}){r.host=`${e}:${i}`;const l=ls(e);l&&(Lp(`https://${r.host}/b`),Pp("Storage",!0)),r._isUsingEmulator=!0,r._protocol=l?"https":"http";const{mockUserToken:c}=a;c&&(r._overrideAuthToken=typeof c=="string"?c:ZE(c,r.app.options.projectId))}class wm{constructor(e,i,a,l,c,d=!1){this.app=e,this._authProvider=i,this._appCheckProvider=a,this._url=l,this._firebaseVersion=c,this._isUsingEmulator=d,this._bucket=null,this._host=KT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=hO,this._maxUploadRetryTime=fO,this._requests=new Set,l!=null?this._bucket=wn.makeFromBucketSpec(l,this._host):this._bucket=IE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=wn.makeFromBucketSpec(this._url,e):this._bucket=IE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){CE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){CE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const i=await e.getToken();if(i!==null)return i.accessToken}return null}async _getAppCheckToken(){if(An(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ta(this,e)}_makeRequest(e,i,a,l,c=!0){if(this._deleted)return new CO(QT());{const d=PO(e,this._appId,a,l,i,this._firebaseVersion,c,this._isUsingEmulator);return this._requests.add(d),d.getPromise().then(()=>this._requests.delete(d),()=>this._requests.delete(d)),d}}async makeRequestWithTokens(e,i){const[a,l]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,i,a,l).getPromise()}}const DE="@firebase/storage",OE="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb="storage";function ub(r,e,i){return r=Pt(r),hx(r,e,i)}function cb(r){return r=Pt(r),fx(r)}function hb(r,e){return r=Pt(r),gx(r,e)}function _x(r=jp(),e){r=Pt(r);const a=wh(r,lb).getImmediate({identifier:e}),l=XE("storage");return l&&vx(a,...l),a}function vx(r,e,i,a={}){yx(r,e,i,a)}function Ex(r,{instanceIdentifier:e}){const i=r.getProvider("app").getImmediate(),a=r.getProvider("auth-internal"),l=r.getProvider("app-check-internal");return new wm(i,a,l,e,na)}function Tx(){Qs(new ns(lb,Ex,"PUBLIC").setMultipleInstances(!0)),Di(DE,OE,""),Di(DE,OE,"esm2020")}Tx();const bx={apiKey:"AIzaSyB3bxK8gkAtNH84EzFoCavUc3uiEWUW3tE",authDomain:"lindskov-app2.firebaseapp.com",projectId:"lindskov-app2",storageBucket:"lindskov-app2.appspot.com",messagingSenderId:"256113264017",appId:"1:256113264017:web:96927bdacf52d0aa364630"},Rm=t0(bx),ts=_2(Rm),Sx=QD(Rm),fb=_x(Rm);function Ax(){return H.jsxs(H.Fragment,{children:[H.jsx("style",{children:`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html, body, #root {
          height: 100%;
          width: 100%;
        }

        body {
          font-family: Arial, sans-serif;
          background-color: #111;
          color: #fff;
          overflow-x: hidden;
        }

        .home-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          width: 100%;
          min-height: 100vh;
        }

        .home-banner {
          width: 100%;
          min-height: 100vh;
          background: url("/lindskov3.jpg") no-repeat center center / cover;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-size: 4rem;
          font-weight: bold;
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
          padding-top: 0;
        }

        .home-content {
          background-color: #222;
          border-radius: 12px;
          padding: 30px;
          max-width: 800px;
          width: 90%;
          text-align: left;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
          font-size: 20px;
          line-height: 1.6;
          margin-top: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .home-content p {
          margin: 0 0 20px 0;
          text-align: left;
        }

        .help-button {
          display: inline-block;
          text-decoration: none;
          padding: 12px 25px;
          background-color: #c9a700ff;
          border: none;
          border-radius: 6px;
          font-size: 18px;
          font-weight: bold;
          cursor: pointer;
          color: #fff;
          margin-bottom: 20px;
        }

        /* --- Knapper med billeder --- */
        .image-buttons {
          display: flex;
          gap: 20px;
          margin-top: 40px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .image-buttons a img {
          width: 50px;
          height: 50px;
          object-fit: contain;
          border-radius: 6px;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .image-buttons a.web img {
          width: 100px; /* dobbelt størrelse på desktop */
          height: 100px;
        }

        .image-buttons a img:hover {
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .home-banner {
            min-height: 60vh;
            font-size: 2.2rem;
            padding: 60px 20px 20px 20px;
            justify-content: flex-start;
          }

          .home-content {
            padding: 20px;
            font-size: 18px;
            line-height: 1.5;
          }

          .help-button {
            width: 100%;
            font-size: 16px;
            text-align: center;
          }

          .image-buttons a img {
            width: 40px;
            height: 40px;
          }

          .image-buttons a.web img {
            width: 80px; /* lidt større på mobil */
            height: 80px;
          }
        }
      `}),H.jsx("div",{className:"home-container",children:H.jsxs("div",{className:"home-banner",children:["Velkommen til Lindskov App!",H.jsxs("div",{className:"home-content",children:[H.jsxs("p",{children:["Dette er Lindskovs kunde app.",H.jsx("br",{}),"Som kunde har du en personlig profil med login, som du kan bruge til dig/din virksomhed.",H.jsx("br",{}),H.jsx("br",{}),"Her kan du som kunde se hvilke aftaler og samarbejder dig/din virksomhed har hos Lindskov.",H.jsx("br",{}),H.jsx("br",{}),"Du kan se hvilke filer du har delt og modtaget og læse om nye og kommende projekter hos Lindskov."]}),H.jsx("a",{href:"/help",className:"help-button",children:"FAQ"})]}),H.jsxs("div",{className:"image-buttons",children:[H.jsx("a",{href:"https://www.linkedin.com/company/lindskov-communication/posts/?feedView=all",target:"_blank",rel:"noopener noreferrer",children:H.jsx("img",{src:"/linked.png",alt:"LinkedIn"})}),H.jsx("a",{href:"https://lindskov.com/",className:"web",target:"_blank",rel:"noopener noreferrer",children:H.jsx("img",{src:"/lindskovlogo.png",alt:"Web"})})]})]})})]})}function wx(){const[r,e]=F.useState(""),[i,a]=F.useState(""),[l,c]=F.useState(""),[d,m]=F.useState(!1),g=Np(),y=async G=>{G.preventDefault(),c("");try{d?(await tC(ts,r,i),g("/profile")):(await nC(ts,r,i),g("/profile"))}catch(ee){console.error(ee),c("Noget gik galt: "+ee.message)}};F.useEffect(()=>(document.body.style.backgroundColor="#333",document.documentElement.style.backgroundColor="#333",document.body.style.margin="0",document.documentElement.style.margin="0",()=>{document.body.style.backgroundColor="",document.documentElement.style.backgroundColor=""}),[]);const T={position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"90%",maxWidth:"400px",padding:"20px",boxSizing:"border-box"},S={backgroundColor:"#222",padding:"30px 20px",borderRadius:"12px",boxShadow:"0 4px 12px rgba(0,0,0,0.4)",width:"100%",textAlign:"center",color:"#fff"},D={width:"100%",padding:"12px",margin:"10px 0",borderRadius:"6px",border:"1px solid #ccc",boxSizing:"border-box"},L={width:"100%",padding:"12px",marginTop:"10px",borderRadius:"6px",border:"none",backgroundColor:"#C8A800",color:"#fff",fontWeight:"bold",cursor:"pointer"},K={marginTop:"15px",fontSize:"14px",color:"#C8A800",cursor:"pointer",background:"none",border:"none"},Z={color:"red",marginTop:"10px",textAlign:"center"};return H.jsxs(H.Fragment,{children:[H.jsx("style",{children:`
        @media (max-width: 480px) {
          form {
            padding: 20px 15px !important;
          }
        }
      `}),H.jsx("div",{style:T,children:H.jsxs("form",{onSubmit:y,style:S,children:[H.jsx("h2",{children:d?"Opret ny bruger":"Login"}),H.jsx("label",{children:"Email:"}),H.jsx("input",{type:"email",value:r,onChange:G=>e(G.target.value),style:D,required:!0}),H.jsx("label",{children:"Password:"}),H.jsx("input",{type:"password",value:i,onChange:G=>a(G.target.value),style:D,required:!0}),H.jsx("button",{type:"submit",style:L,children:d?"Opret bruger":"Login"}),l&&H.jsx("p",{style:Z,children:l}),H.jsx("button",{type:"button",style:K,onClick:()=>m(!d),children:d?"Har du allerede en konto? Log ind":"Opret ny bruger"})]})})]})}function Rx(){const[r,e]=F.useState(null),[i,a]=F.useState(!1),[l,c]=F.useState(""),[d,m]=F.useState(""),[g,y]=F.useState(!1),[T,S]=F.useState(!1),[D,L]=F.useState(null),K=F.useRef(null);F.useEffect(()=>{const oe=oC(ts,me=>{e(me),me?.displayName&&c(me.displayName)});return()=>oe()},[]);const Z=async()=>{if(!l.trim()){m("❌ Indtast et navn før du gemmer.");return}try{await rC(ts.currentUser,{displayName:l}),m("✅ Profil opdateret!"),a(!1),e({...ts.currentUser})}catch(oe){console.error(oe),m("❌ Der opstod en fejl under opdatering.")}},G=()=>K.current.click(),ee=oe=>{const me=oe.target.files[0];if(!me)return;const Ee=new FileReader;Ee.onloadend=()=>L(Ee.result),Ee.readAsDataURL(me),m("✅ Billede valgt (ikke gemt online)")},ne=[{name:"Mickey Mouse",phone:"01 23 45 67",email:"mickey@disney.com"},{name:"Minni Mouse",phone:"89 01 23 45",email:"minni@disney.com"},{name:"Anders And",phone:"12 34 56 78",email:"anders@lindskov.dk"}],re=[{platform:"Facebook",url:"https://facebook.com",color:"#1877F2"},{platform:"Instagram",url:"https://instagram.com",color:"#E4405F"},{platform:"LinkedIn",url:"https://linkedin.com",color:"#0A66C2"}];return r?H.jsxs(H.Fragment,{children:[H.jsx("style",{children:`
        html, body, #root {
          margin: 0;
          padding: 0;
          height: 100%;
        }
      `}),H.jsx("div",{style:gt.pageWrapper,children:H.jsxs("div",{style:gt.card,children:[H.jsx("h2",{style:gt.title,children:"👤 Din profil"}),H.jsxs("div",{style:gt.imageWrapper,onClick:G,children:[H.jsx("img",{src:D||"https://via.placeholder.com/100x100.png?text=Profil",alt:"Profil",style:gt.profileImage}),H.jsx("p",{style:gt.changePhoto,children:"Klik for at ændre billede"}),H.jsx("input",{type:"file",accept:"image/*",ref:K,onChange:ee,style:{display:"none"}})]}),H.jsxs("p",{children:[H.jsx("strong",{children:"Email:"})," ",r.email]}),H.jsxs("p",{children:[H.jsx("strong",{children:"UID:"})," ",r.uid]}),i?H.jsxs(H.Fragment,{children:[H.jsx("input",{style:gt.input,type:"text",value:l,onChange:oe=>c(oe.target.value),placeholder:"Dit navn"}),H.jsxs("div",{style:gt.btnRow,children:[H.jsx("button",{style:gt.saveBtn,onClick:Z,children:"Gem"}),H.jsx("button",{style:gt.cancelBtn,onClick:()=>a(!1),children:"Annuller"})]})]}):H.jsxs(H.Fragment,{children:[H.jsxs("p",{children:[H.jsx("strong",{children:"Navn:"})," ",r.displayName||"Ikke angivet"]}),H.jsx("button",{style:gt.editBtn,onClick:()=>a(!0),children:"Rediger profil"})]}),d&&H.jsx("p",{style:gt.status,children:d}),H.jsxs("div",{style:gt.section,children:[H.jsx("button",{style:gt.toggleBtn,onClick:()=>y(!g),children:g?"Skjul kontakter":"Vis gemte kontakter"}),g&&H.jsx("ul",{style:gt.list,children:ne.map((oe,me)=>H.jsxs("li",{style:gt.listItem,children:[H.jsx("strong",{children:oe.name}),H.jsx("br",{}),"📞 ",oe.phone,H.jsx("br",{}),"✉️ ",oe.email]},me))})]}),H.jsxs("div",{style:gt.section,children:[H.jsx("button",{style:gt.toggleBtn,onClick:()=>S(!T),children:T?"Skjul SoMe-links":"Vis SoMe-links"}),T&&H.jsx("div",{style:gt.socialContainer,children:re.map((oe,me)=>H.jsx("a",{href:oe.url,target:"_blank",rel:"noopener noreferrer",style:{...gt.socialLink,backgroundColor:oe.color},children:oe.platform},me))})]})]})})]}):H.jsx("p",{style:gt.loading,children:"Indlæser bruger..."})}const gt={pageWrapper:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",background:"linear-gradient(135deg, #f9f9f9, #e6e6e6)",boxSizing:"border-box"},card:{backgroundColor:"#fff",borderRadius:"16px",padding:"40px 30px",boxShadow:"0 4px 16px rgba(0,0,0,0.15)",width:"100%",maxWidth:"480px",textAlign:"center",boxSizing:"border-box"},title:{color:"#c9a700ff",fontSize:"26px",marginBottom:"20px"},imageWrapper:{textAlign:"center",marginBottom:"20px",cursor:"pointer"},profileImage:{width:"110px",height:"110px",borderRadius:"50%",objectFit:"cover",border:"2px solid #C8A800"},changePhoto:{color:"#777",fontSize:"12px",marginTop:"5px"},input:{padding:"10px",width:"100%",borderRadius:"8px",border:"1px solid #ccc",marginBottom:"15px"},btnRow:{display:"flex",justifyContent:"center",gap:"10px"},saveBtn:{backgroundColor:"#aa8e00ff",color:"#fff",border:"none",borderRadius:"8px",padding:"8px 14px",cursor:"pointer"},cancelBtn:{backgroundColor:"#777",color:"#fff",border:"none",borderRadius:"8px",padding:"8px 14px",cursor:"pointer"},editBtn:{backgroundColor:"#C8A800",color:"#fff",border:"none",borderRadius:"8px",padding:"10px 16px",cursor:"pointer",marginTop:"10px"},status:{marginTop:"15px",fontWeight:"bold"},section:{marginTop:"25px"},toggleBtn:{backgroundColor:"#333",color:"#fff",border:"none",borderRadius:"8px",padding:"8px 12px",cursor:"pointer",fontSize:"14px"},list:{marginTop:"15px",listStyle:"none",padding:0},listItem:{background:"#f2f2f2",borderRadius:"8px",padding:"10px",marginBottom:"10px",textAlign:"left"},socialContainer:{display:"flex",justifyContent:"center",gap:"10px",marginTop:"15px",flexWrap:"wrap"},socialLink:{color:"#fff",textDecoration:"none",padding:"8px 12px",borderRadius:"6px",fontWeight:"bold",fontSize:"14px"},loading:{textAlign:"center",marginTop:"50px",color:"#666"}};function Cx(){const[r,e]=F.useState(null),[i,a]=F.useState(!1),[l,c]=F.useState(""),d=async m=>{if(m.preventDefault(),!r)return;a(!0);const g=hb(fb,`uploads/${r.name}`);try{await ub(g,r);const y=await cb(g);c(y)}catch(y){console.error(y)}finally{a(!1)}};return H.jsxs("div",{children:[H.jsx("h2",{children:"Upload Video/Filer"}),H.jsxs("form",{onSubmit:d,children:[H.jsx("input",{type:"file",onChange:m=>e(m.target.files[0])}),H.jsx("button",{type:"submit",disabled:i,children:i?"Uploader...":"Upload"})]}),l&&H.jsxs("p",{children:["Fil uploadet! ",H.jsx("a",{href:l,target:"_blank",children:"Se fil"})]})]})}function Ix(){const[r,e]=F.useState(null),[i,a]=F.useState(""),[l,c]=F.useState("kunde1"),[d,m]=F.useState("kunde1"),[g,y]=F.useState([]),T=["kunde1","kunde2","kunde3"],S=L=>{L.target.files[0]&&(e(L.target.files[0]),a(`✅ "${L.target.files[0].name}" valgt`))},D=async()=>{if(!r){a("❌ Vælg en fil før upload");return}const L=ts.currentUser;if(!L){a("❌ Du skal være logget ind for at uploade filer");return}try{const K=hb(fb,`userFiles/${L.uid}/${r.name}`);await ub(K,r);const Z=await cb(K);await lO(KD(Sx,"files"),{uid:L.uid,fileName:r.name,fileURL:Z,createdAt:cO(),customer:l}),a(`✅ Fil "${r.name}" uploaded!`),y(G=>[...G,r.name]),e(null)}catch(K){console.error(K),a("❌ Upload fejlede. Prøv igen.")}};return H.jsx("div",{style:Rt.pageWrapper,children:H.jsxs("div",{style:Rt.wrapper,children:[H.jsx("h2",{style:Rt.title,children:"📂 Dine filer"}),H.jsxs("div",{style:Rt.uploadSection,children:[H.jsx("input",{type:"file",onChange:S,style:Rt.fileInput}),H.jsx("button",{style:Rt.uploadBtn,onClick:D,children:"Upload"})]}),i&&H.jsx("p",{style:Rt.status,children:i}),H.jsxs("div",{style:Rt.row,children:[H.jsxs("div",{style:Rt.box,children:[H.jsx("h3",{style:Rt.boxTitle,children:"Filer delt af dig"}),H.jsx("div",{style:Rt.customerTabs,children:T.map(L=>H.jsx("button",{onClick:()=>c(L),style:l===L?Rt.activeTab:Rt.tab,children:L.toUpperCase()},L))}),H.jsx("div",{style:Rt.filesList,children:H.jsxs("p",{children:["Her vises filer du har delt til: ",H.jsx("strong",{children:l})]})})]}),H.jsxs("div",{style:Rt.box,children:[H.jsx("h3",{style:Rt.boxTitle,children:"Filer delt med dig"}),H.jsx("div",{style:Rt.customerTabs,children:T.map(L=>H.jsx("button",{onClick:()=>m(L),style:d===L?Rt.activeTab:Rt.tab,children:L.toUpperCase()},L))}),H.jsxs("div",{style:Rt.filesList,children:[H.jsxs("p",{children:["Her vises filer delt med dig fra: ",H.jsx("strong",{children:d})]}),H.jsx("ul",{children:g.map((L,K)=>H.jsx("li",{children:L},K))})]})]})]})]})})}const Rt={pageWrapper:{minHeight:"100vh",display:"grid",placeItems:"center",backgroundColor:"#f3f3f3",padding:"20px",boxSizing:"border-box"},wrapper:{display:"flex",flexDirection:"column",alignItems:"center",gap:"30px",width:"100%",maxWidth:"900px",padding:"20px",boxSizing:"border-box"},row:{display:"flex",justifyContent:"center",alignItems:"flex-start",gap:"20px",flexWrap:"wrap",width:"100%"},title:{fontSize:"28px",fontWeight:"bold",color:"#333",textAlign:"center"},uploadSection:{display:"flex",flexDirection:"column",alignItems:"center",gap:"10px"},fileInput:{cursor:"pointer"},uploadBtn:{backgroundColor:"#C8A800",color:"#fff",border:"none",borderRadius:"8px",padding:"10px 16px",cursor:"pointer"},status:{textAlign:"center",fontWeight:"bold"},box:{backgroundColor:"#fff",borderRadius:"12px",boxShadow:"0 4px 10px rgba(0, 0, 0, 0.1)",padding:"20px",display:"flex",flexDirection:"column",alignItems:"center",width:"300px"},boxTitle:{fontSize:"20px",color:"#C8A800",marginBottom:"15px",borderBottom:"2px solid #C8A800",paddingBottom:"8px",textAlign:"center",width:"100%"},customerTabs:{display:"flex",gap:"10px",marginBottom:"15px",justifyContent:"center",width:"100%"},tab:{backgroundColor:"#eee",border:"1px solid #ccc",borderRadius:"6px",padding:"6px 12px",cursor:"pointer"},activeTab:{backgroundColor:"#C8A800",color:"#fff",border:"1px solid #C8A800",borderRadius:"6px",padding:"6px 12px",cursor:"pointer"},filesList:{textAlign:"center",fontStyle:"italic",width:"100%"}};function Dx(){return H.jsxs("div",{className:"help-banner",children:[H.jsx("h1",{className:"help-title",children:"FAQ"}),[...Array(5)].map((r,e)=>H.jsxs("div",{className:"help-box",children:[H.jsxs("h3",{children:["Eksempel spørgsmål ",e+1]}),H.jsx("p",{children:"Her kan du skrive vejledningstekst eller svar på spørgsmål. Teksten vises inde i boksen med den mørke baggrund, og baggrundsbilledet fylder hele siden som på forsiden."})]},e)),H.jsx("style",{children:`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html, body, #root {
          height: 100%;
          width: 100%;
        }

        body {
          font-family: Arial, sans-serif;
          background-color: #111;
          color: #fff;
          overflow-x: hidden;
        }

        /* Hele siden med baggrund */
        .help-banner {
          width: 100%;
          min-height: 100vh;
          background: url("/lindskov3.jpg") no-repeat center center / cover;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: 40px 20px;
        }

        .help-title {
          color: #fff;
          margin-bottom: 40px;
          font-size: 3rem;
        }

        .help-box {
          background-color: rgba(34,34,34,0.9);
          border-radius: 12px;
          max-width: 800px;
          width: 100%;
          padding: 30px;
          margin-top: 40px;
          line-height: 1.6;
          color: #fff;
        }

        .help-box h3 {
          margin-top: 0;
        }

        @media (max-width: 768px) {
          .help-banner {
            padding: 20px 15px;
          }

          .help-title {
            font-size: 2rem;
          }

          .help-box {
            padding: 20px;
            line-height: 1.5;
          }
        }
      `})]})}var Ox={};function xx(){const[r,e]=F.useState(null),[i,a]=F.useState(!0),[l,c]=F.useState(!1);F.useEffect(()=>{const K=ts.onAuthStateChanged(Z=>{e(Z),a(!1)});return()=>K()},[]);const d=()=>{ts.signOut(),c(!1)},m={display:"flex",alignItems:"center",justifyContent:"flex-start",padding:"10px 20px",backgroundColor:"#000",position:"fixed",top:0,width:"100%",zIndex:1e3,boxShadow:"0 2px 8px rgba(0,0,0,0.3)"},g={height:"50px",width:"auto",marginRight:"30px",borderRadius:"8px"},y={backgroundColor:"#C8A800",color:"#fff",border:"none",borderRadius:4,padding:"8px 14px",cursor:"pointer",fontWeight:"bold"},T={position:"absolute",left:120,top:55,backgroundColor:"#fff",border:"1px solid #ccc",borderRadius:6,boxShadow:"0 2px 8px rgba(0,0,0,0.2)",zIndex:1e3,padding:10,display:"flex",flexDirection:"column"},S={color:"#C8A800",textDecoration:"none",margin:"6px 0",fontWeight:"bold"},D={display:"block",background:"none",border:"none",padding:8,width:"100%",textAlign:"left",color:"#C8A800",cursor:"pointer",fontWeight:"bold"},L={paddingTop:"80px"};return i?H.jsx("p",{children:"Loading..."}):H.jsxs(h1,{basename:"/lindskov_app2",children:[H.jsxs("nav",{style:m,children:[H.jsx("img",{src:`${Ox.PUBLIC_URL}/lindskovlogo.png`,alt:"Lindskov Logo",style:g}),H.jsx("button",{style:y,onClick:()=>c(!l),children:"Menu ▾"}),l&&H.jsxs("div",{style:T,children:[H.jsx(Hs,{to:"/",style:S,onClick:()=>c(!1),children:"Home"}),r&&H.jsx(Hs,{to:"/profile",style:S,onClick:()=>c(!1),children:"Profile"}),r&&H.jsx(Hs,{to:"/files",style:S,onClick:()=>c(!1),children:"Files"}),r&&H.jsx(Hs,{to:"/help",style:S,onClick:()=>c(!1),children:"FAQ"}),r&&H.jsx("button",{style:D,onClick:d,children:"Log ud"}),!r&&H.jsx(Hs,{to:"/login",style:S,onClick:()=>c(!1),children:"Login"})]})]}),H.jsx("div",{style:L,children:H.jsxs(HA,{children:[H.jsx(Kr,{path:"/",element:H.jsx(Ax,{})}),H.jsx(Kr,{path:"/login",element:r?H.jsx(Sl,{to:"/profile"}):H.jsx(wx,{})}),H.jsx(Kr,{path:"/profile",element:r?H.jsx(Rx,{}):H.jsx(Sl,{to:"/login"})}),H.jsx(Kr,{path:"/upload",element:r?H.jsx(Cx,{}):H.jsx(Sl,{to:"/login"})}),H.jsx(Kr,{path:"/files",element:r?H.jsx(Ix,{}):H.jsx(Sl,{to:"/login"})}),H.jsx(Kr,{path:"/help",element:r?H.jsx(Dx,{}):H.jsx(Sl,{to:"/login"})}),H.jsx(Kr,{path:"*",element:H.jsx("p",{children:"Page not found"})})]})})]})}ZS.createRoot(document.getElementById("root")).render(H.jsx(F.StrictMode,{children:H.jsx(xx,{})}));
