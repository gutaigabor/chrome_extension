var $t=Object.defineProperty;var It=(e,t,r)=>t in e?$t(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var ye=(e,t,r)=>It(e,typeof t!="symbol"?t+"":t,r);function zt(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const o in n)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(n,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>n[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}function Ft(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var tt={exports:{}},ae={},rt={exports:{}},g={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y=Symbol.for("react.element"),Lt=Symbol.for("react.portal"),Ut=Symbol.for("react.fragment"),Wt=Symbol.for("react.strict_mode"),qt=Symbol.for("react.profiler"),Bt=Symbol.for("react.provider"),Vt=Symbol.for("react.context"),Kt=Symbol.for("react.forward_ref"),Ht=Symbol.for("react.suspense"),Gt=Symbol.for("react.memo"),Xt=Symbol.for("react.lazy"),Ie=Symbol.iterator;function Yt(e){return e===null||typeof e!="object"?null:(e=Ie&&e[Ie]||e["@@iterator"],typeof e=="function"?e:null)}var nt={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ot=Object.assign,it={};function W(e,t,r){this.props=e,this.context=t,this.refs=it,this.updater=r||nt}W.prototype.isReactComponent={};W.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};W.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ut(){}ut.prototype=W.prototype;function Pe(e,t,r){this.props=e,this.context=t,this.refs=it,this.updater=r||nt}var Ae=Pe.prototype=new ut;Ae.constructor=Pe;ot(Ae,W.prototype);Ae.isPureReactComponent=!0;var ze=Array.isArray,st=Object.prototype.hasOwnProperty,ke={current:null},ct={key:!0,ref:!0,__self:!0,__source:!0};function ft(e,t,r){var n,o={},i=null,u=null;if(t!=null)for(n in t.ref!==void 0&&(u=t.ref),t.key!==void 0&&(i=""+t.key),t)st.call(t,n)&&!ct.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(c===1)o.children=r;else if(1<c){for(var s=Array(c),f=0;f<c;f++)s[f]=arguments[f+2];o.children=s}if(e&&e.defaultProps)for(n in c=e.defaultProps,c)o[n]===void 0&&(o[n]=c[n]);return{$$typeof:Y,type:e,key:i,ref:u,props:o,_owner:ke.current}}function Jt(e,t){return{$$typeof:Y,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function je(e){return typeof e=="object"&&e!==null&&e.$$typeof===Y}function Qt(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Fe=/\/+/g;function he(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Qt(""+e.key):t.toString(36)}function oe(e,t,r,n,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var u=!1;if(e===null)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case Y:case Lt:u=!0}}if(u)return u=e,o=o(u),e=n===""?"."+he(u,0):n,ze(o)?(r="",e!=null&&(r=e.replace(Fe,"$&/")+"/"),oe(o,t,r,"",function(f){return f})):o!=null&&(je(o)&&(o=Jt(o,r+(!o.key||u&&u.key===o.key?"":(""+o.key).replace(Fe,"$&/")+"/")+e)),t.push(o)),1;if(u=0,n=n===""?".":n+":",ze(e))for(var c=0;c<e.length;c++){i=e[c];var s=n+he(i,c);u+=oe(i,t,r,s,o)}else if(s=Yt(e),typeof s=="function")for(e=s.call(e),c=0;!(i=e.next()).done;)i=i.value,s=n+he(i,c++),u+=oe(i,t,r,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function re(e,t,r){if(e==null)return e;var n=[],o=0;return oe(e,n,"","",function(i){return t.call(r,i,o++)}),n}function Zt(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var A={current:null},ie={transition:null},er={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:ie,ReactCurrentOwner:ke};function at(){throw Error("act(...) is not supported in production builds of React.")}g.Children={map:re,forEach:function(e,t,r){re(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return re(e,function(){t++}),t},toArray:function(e){return re(e,function(t){return t})||[]},only:function(e){if(!je(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};g.Component=W;g.Fragment=Ut;g.Profiler=qt;g.PureComponent=Pe;g.StrictMode=Wt;g.Suspense=Ht;g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=er;g.act=at;g.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=ot({},e.props),o=e.key,i=e.ref,u=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,u=ke.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(s in t)st.call(t,s)&&!ct.hasOwnProperty(s)&&(n[s]=t[s]===void 0&&c!==void 0?c[s]:t[s])}var s=arguments.length-2;if(s===1)n.children=r;else if(1<s){c=Array(s);for(var f=0;f<s;f++)c[f]=arguments[f+2];n.children=c}return{$$typeof:Y,type:e.type,key:o,ref:i,props:n,_owner:u}};g.createContext=function(e){return e={$$typeof:Vt,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Bt,_context:e},e.Consumer=e};g.createElement=ft;g.createFactory=function(e){var t=ft.bind(null,e);return t.type=e,t};g.createRef=function(){return{current:null}};g.forwardRef=function(e){return{$$typeof:Kt,render:e}};g.isValidElement=je;g.lazy=function(e){return{$$typeof:Xt,_payload:{_status:-1,_result:e},_init:Zt}};g.memo=function(e,t){return{$$typeof:Gt,type:e,compare:t===void 0?null:t}};g.startTransition=function(e){var t=ie.transition;ie.transition={};try{e()}finally{ie.transition=t}};g.unstable_act=at;g.useCallback=function(e,t){return A.current.useCallback(e,t)};g.useContext=function(e){return A.current.useContext(e)};g.useDebugValue=function(){};g.useDeferredValue=function(e){return A.current.useDeferredValue(e)};g.useEffect=function(e,t){return A.current.useEffect(e,t)};g.useId=function(){return A.current.useId()};g.useImperativeHandle=function(e,t,r){return A.current.useImperativeHandle(e,t,r)};g.useInsertionEffect=function(e,t){return A.current.useInsertionEffect(e,t)};g.useLayoutEffect=function(e,t){return A.current.useLayoutEffect(e,t)};g.useMemo=function(e,t){return A.current.useMemo(e,t)};g.useReducer=function(e,t,r){return A.current.useReducer(e,t,r)};g.useRef=function(e){return A.current.useRef(e)};g.useState=function(e){return A.current.useState(e)};g.useSyncExternalStore=function(e,t,r){return A.current.useSyncExternalStore(e,t,r)};g.useTransition=function(){return A.current.useTransition()};g.version="18.3.1";rt.exports=g;var le=rt.exports;const lt=Ft(le),Le=zt({__proto__:null,default:lt},[le]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tr=le,rr=Symbol.for("react.element"),nr=Symbol.for("react.fragment"),or=Object.prototype.hasOwnProperty,ir=tr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ur={key:!0,ref:!0,__self:!0,__source:!0};function dt(e,t,r){var n,o={},i=null,u=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(u=t.ref);for(n in t)or.call(t,n)&&!ur.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:rr,type:e,key:i,ref:u,props:o,_owner:ir.current}}ae.Fragment=nr;ae.jsx=dt;ae.jsxs=dt;tt.exports=ae;var O=tt.exports,pt={exports:{}},yt={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J=le;function sr(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var cr=typeof Object.is=="function"?Object.is:sr,fr=J.useSyncExternalStore,ar=J.useRef,lr=J.useEffect,dr=J.useMemo,pr=J.useDebugValue;yt.useSyncExternalStoreWithSelector=function(e,t,r,n,o){var i=ar(null);if(i.current===null){var u={hasValue:!1,value:null};i.current=u}else u=i.current;i=dr(function(){function s(h){if(!f){if(f=!0,a=h,h=n(h),o!==void 0&&u.hasValue){var p=u.value;if(o(p,h))return m=p}return m=h}if(p=m,cr(a,h))return p;var b=n(h);return o!==void 0&&o(p,b)?p:(a=h,m=b)}var f=!1,a,m,l=r===void 0?null:r;return[function(){return s(t())},l===null?void 0:function(){return s(l())}]},[t,r,n,o]);var c=fr(e,i[0],i[1]);return lr(function(){u.hasValue=!0,u.value=c},[c]),pr(c),c};pt.exports=yt;var yr=pt.exports,j="default"in Le?lt:Le,Ue=Symbol.for("react-redux-context"),We=typeof globalThis<"u"?globalThis:{};function hr(){if(!j.createContext)return{};const e=We[Ue]??(We[Ue]=new Map);let t=e.get(j.createContext);return t||(t=j.createContext(null),e.set(j.createContext,t)),t}var I=hr(),mr=()=>{throw new Error("uSES not initialized!")};function Ne(e=I){return function(){return j.useContext(e)}}var ht=Ne(),mt=mr,_r=e=>{mt=e},wr=(e,t)=>e===t;function vr(e=I){const t=e===I?ht:Ne(e),r=(n,o={})=>{const{equalityFn:i=wr,devModeChecks:u={}}=typeof o=="function"?{equalityFn:o}:o,{store:c,subscription:s,getServerState:f,stabilityCheck:a,identityFunctionCheck:m}=t();j.useRef(!0);const l=j.useCallback({[n.name](p){return n(p)}}[n.name],[n,a,u.stabilityCheck]),h=mt(s.addNestedSub,c.getState,f||c.getState,l,i);return j.useDebugValue(h),h};return Object.assign(r,{withTypes:()=>r}),r}var gr=vr();function _t(e){e()}function br(){let e=null,t=null;return{clear(){e=null,t=null},notify(){_t(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){const r=[];let n=e;for(;n;)r.push(n),n=n.next;return r},subscribe(r){let n=!0;const o=t={callback:r,next:null,prev:t};return o.prev?o.prev.next=o:e=o,function(){!n||e===null||(n=!1,o.next?o.next.prev=o.prev:t=o.prev,o.prev?o.prev.next=o.next:e=o.next)}}}}var qe={notify(){},get:()=>[]};function Sr(e,t){let r,n=qe,o=0,i=!1;function u(b){a();const v=n.subscribe(b);let _=!1;return()=>{_||(_=!0,v(),m())}}function c(){n.notify()}function s(){p.onStateChange&&p.onStateChange()}function f(){return i}function a(){o++,r||(r=e.subscribe(s),n=br())}function m(){o--,r&&o===0&&(r(),r=void 0,n.clear(),n=qe)}function l(){i||(i=!0,a())}function h(){i&&(i=!1,m())}const p={addNestedSub:u,notifyNestedSubs:c,handleChangeWrapper:s,isSubscribed:f,trySubscribe:l,tryUnsubscribe:h,getListeners:()=>n};return p}var Er=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Cr=typeof navigator<"u"&&navigator.product==="ReactNative",xr=Er||Cr?j.useLayoutEffect:j.useEffect;function Be(e,t){return e===t?e!==0||t!==0||1/e===1/t:e!==e&&t!==t}function Nn(e,t){if(Be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;const r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(let o=0;o<r.length;o++)if(!Object.prototype.hasOwnProperty.call(t,r[o])||!Be(e[r[o]],t[r[o]]))return!1;return!0}function Or({store:e,context:t,children:r,serverState:n,stabilityCheck:o="once",identityFunctionCheck:i="once"}){const u=j.useMemo(()=>{const f=Sr(e);return{store:e,subscription:f,getServerState:n?()=>n:void 0,stabilityCheck:o,identityFunctionCheck:i}},[e,n,o,i]),c=j.useMemo(()=>e.getState(),[e]);xr(()=>{const{subscription:f}=u;return f.onStateChange=f.notifyNestedSubs,f.trySubscribe(),c!==e.getState()&&f.notifyNestedSubs(),()=>{f.tryUnsubscribe(),f.onStateChange=void 0}},[u,c]);const s=t||I;return j.createElement(s.Provider,{value:u},r)}var Dn=Or;function wt(e=I){const t=e===I?ht:Ne(e),r=()=>{const{store:n}=t();return n};return Object.assign(r,{withTypes:()=>r}),r}var Rr=wt();function Pr(e=I){const t=e===I?Rr:wt(e),r=()=>t().dispatch;return Object.assign(r,{withTypes:()=>r}),r}var Ar=Pr(),Mn=_t;_r(yr.useSyncExternalStoreWithSelector);function R(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var kr=typeof Symbol=="function"&&Symbol.observable||"@@observable",Ve=kr,me=()=>Math.random().toString(36).substring(7).split("").join("."),jr={INIT:`@@redux/INIT${me()}`,REPLACE:`@@redux/REPLACE${me()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${me()}`},ue=jr;function De(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function vt(e,t,r){if(typeof e!="function")throw new Error(R(2));if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(R(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(R(1));return r(vt)(e,t)}let n=e,o=t,i=new Map,u=i,c=0,s=!1;function f(){u===i&&(u=new Map,i.forEach((v,_)=>{u.set(_,v)}))}function a(){if(s)throw new Error(R(3));return o}function m(v){if(typeof v!="function")throw new Error(R(4));if(s)throw new Error(R(5));let _=!0;f();const w=c++;return u.set(w,v),function(){if(_){if(s)throw new Error(R(6));_=!1,f(),u.delete(w),i=null}}}function l(v){if(!De(v))throw new Error(R(7));if(typeof v.type>"u")throw new Error(R(8));if(typeof v.type!="string")throw new Error(R(17));if(s)throw new Error(R(9));try{s=!0,o=n(o,v)}finally{s=!1}return(i=u).forEach(w=>{w()}),v}function h(v){if(typeof v!="function")throw new Error(R(10));n=v,l({type:ue.REPLACE})}function p(){const v=m;return{subscribe(_){if(typeof _!="object"||_===null)throw new Error(R(11));function w(){const y=_;y.next&&y.next(a())}return w(),{unsubscribe:v(w)}},[Ve](){return this}}}return l({type:ue.INIT}),{dispatch:l,subscribe:m,getState:a,replaceReducer:h,[Ve]:p}}function Nr(e){Object.keys(e).forEach(t=>{const r=e[t];if(typeof r(void 0,{type:ue.INIT})>"u")throw new Error(R(12));if(typeof r(void 0,{type:ue.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(R(13))})}function Dr(e){const t=Object.keys(e),r={};for(let i=0;i<t.length;i++){const u=t[i];typeof e[u]=="function"&&(r[u]=e[u])}const n=Object.keys(r);let o;try{Nr(r)}catch(i){o=i}return function(u={},c){if(o)throw o;let s=!1;const f={};for(let a=0;a<n.length;a++){const m=n[a],l=r[m],h=u[m],p=l(h,c);if(typeof p>"u")throw c&&c.type,new Error(R(14));f[m]=p,s=s||p!==h}return s=s||n.length!==Object.keys(u).length,s?f:u}}function se(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,r)=>(...n)=>t(r(...n)))}function Mr(...e){return t=>(r,n)=>{const o=t(r,n);let i=()=>{throw new Error(R(15))};const u={getState:o.getState,dispatch:(s,...f)=>i(s,...f)},c=e.map(s=>s(u));return i=se(...c)(o.dispatch),{...o,dispatch:i}}}function Tr(e){return De(e)&&"type"in e&&typeof e.type=="string"}var Me=Symbol.for("immer-nothing"),B=Symbol.for("immer-draftable"),k=Symbol.for("immer-state");function P(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var F=Object.getPrototypeOf;function T(e){return!!e&&!!e[k]}function M(e){var t;return e?gt(e)||Array.isArray(e)||!!e[B]||!!((t=e.constructor)!=null&&t[B])||Q(e)||Z(e):!1}var $r=Object.prototype.constructor.toString();function gt(e){if(!e||typeof e!="object")return!1;const t=F(e);if(t===null)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===$r}function Tn(e){return T(e)||P(15,e),e[k].base_}function K(e,t){L(e)===0?Reflect.ownKeys(e).forEach(r=>{t(r,e[r],e)}):e.forEach((r,n)=>t(n,r,e))}function L(e){const t=e[k];return t?t.type_:Array.isArray(e)?1:Q(e)?2:Z(e)?3:0}function H(e,t){return L(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function _e(e,t){return L(e)===2?e.get(t):e[t]}function bt(e,t,r){const n=L(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function Ir(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function Q(e){return e instanceof Map}function Z(e){return e instanceof Set}function z(e){return e.copy_||e.base_}function be(e,t){if(Q(e))return new Map(e);if(Z(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=gt(e);if(t===!0||t==="class_only"&&!r){const n=Object.getOwnPropertyDescriptors(e);delete n[k];let o=Reflect.ownKeys(n);for(let i=0;i<o.length;i++){const u=o[i],c=n[u];c.writable===!1&&(c.writable=!0,c.configurable=!0),(c.get||c.set)&&(n[u]={configurable:!0,writable:!0,enumerable:c.enumerable,value:e[u]})}return Object.create(F(e),n)}else{const n=F(e);if(n!==null&&r)return{...e};const o=Object.create(n);return Object.assign(o,e)}}function Te(e,t=!1){return de(e)||T(e)||!M(e)||(L(e)>1&&(e.set=e.add=e.clear=e.delete=zr),Object.freeze(e),t&&Object.entries(e).forEach(([r,n])=>Te(n,!0))),e}function zr(){P(2)}function de(e){return Object.isFrozen(e)}var Se={};function U(e){const t=Se[e];return t||P(0,e),t}function Fr(e,t){Se[e]||(Se[e]=t)}var G;function St(){return G}function Lr(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Ke(e,t){t&&(U("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Ee(e){Ce(e),e.drafts_.forEach(Ur),e.drafts_=null}function Ce(e){e===G&&(G=e.parent_)}function He(e){return G=Lr(G,e)}function Ur(e){const t=e[k];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function Ge(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return e!==void 0&&e!==r?(r[k].modified_&&(Ee(t),P(4)),M(e)&&(e=ce(t,e),t.parent_||fe(t,e)),t.patches_&&U("Patches").generateReplacementPatches_(r[k].base_,e,t.patches_,t.inversePatches_)):e=ce(t,r,[]),Ee(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Me?e:void 0}function ce(e,t,r){if(de(t))return t;const n=t[k];if(!n)return K(t,(o,i)=>Xe(e,n,t,o,i,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return fe(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const o=n.copy_;let i=o,u=!1;n.type_===3&&(i=new Set(o),o.clear(),u=!0),K(i,(c,s)=>Xe(e,n,o,c,s,r,u)),fe(e,o,!1),r&&e.patches_&&U("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function Xe(e,t,r,n,o,i,u){if(T(o)){const c=i&&t&&t.type_!==3&&!H(t.assigned_,n)?i.concat(n):void 0,s=ce(e,o,c);if(bt(r,n,s),T(s))e.canAutoFreeze_=!1;else return}else u&&r.add(o);if(M(o)&&!de(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;ce(e,o),(!t||!t.scope_.parent_)&&typeof n!="symbol"&&Object.prototype.propertyIsEnumerable.call(r,n)&&fe(e,o)}}function fe(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Te(t,r)}function Wr(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:St(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=n,i=$e;r&&(o=[n],i=X);const{revoke:u,proxy:c}=Proxy.revocable(o,i);return n.draft_=c,n.revoke_=u,c}var $e={get(e,t){if(t===k)return e;const r=z(e);if(!H(r,t))return qr(e,r,t);const n=r[t];return e.finalized_||!M(n)?n:n===we(e.base_,t)?(ve(e),e.copy_[t]=Oe(n,e)):n},has(e,t){return t in z(e)},ownKeys(e){return Reflect.ownKeys(z(e))},set(e,t,r){const n=Et(z(e),t);if(n!=null&&n.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const o=we(z(e),t),i=o==null?void 0:o[k];if(i&&i.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(Ir(r,o)&&(r!==void 0||H(e.base_,t)))return!0;ve(e),xe(e)}return e.copy_[t]===r&&(r!==void 0||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty(e,t){return we(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,ve(e),xe(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const r=z(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty(){P(11)},getPrototypeOf(e){return F(e.base_)},setPrototypeOf(){P(12)}},X={};K($e,(e,t)=>{X[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});X.deleteProperty=function(e,t){return X.set.call(this,e,t,void 0)};X.set=function(e,t,r){return $e.set.call(this,e[0],t,r,e[0])};function we(e,t){const r=e[k];return(r?z(r):e)[t]}function qr(e,t,r){var o;const n=Et(t,r);return n?"value"in n?n.value:(o=n.get)==null?void 0:o.call(e.draft_):void 0}function Et(e,t){if(!(t in e))return;let r=F(e);for(;r;){const n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=F(r)}}function xe(e){e.modified_||(e.modified_=!0,e.parent_&&xe(e.parent_))}function ve(e){e.copy_||(e.copy_=be(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var Br=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,r,n)=>{if(typeof t=="function"&&typeof r!="function"){const i=r;r=t;const u=this;return function(s=i,...f){return u.produce(s,a=>r.call(this,a,...f))}}typeof r!="function"&&P(6),n!==void 0&&typeof n!="function"&&P(7);let o;if(M(t)){const i=He(this),u=Oe(t,void 0);let c=!0;try{o=r(u),c=!1}finally{c?Ee(i):Ce(i)}return Ke(i,n),Ge(o,i)}else if(!t||typeof t!="object"){if(o=r(t),o===void 0&&(o=t),o===Me&&(o=void 0),this.autoFreeze_&&Te(o,!0),n){const i=[],u=[];U("Patches").generateReplacementPatches_(t,o,i,u),n(i,u)}return o}else P(1,t)},this.produceWithPatches=(t,r)=>{if(typeof t=="function")return(u,...c)=>this.produceWithPatches(u,s=>t(s,...c));let n,o;return[this.produce(t,r,(u,c)=>{n=u,o=c}),n,o]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){M(e)||P(8),T(e)&&(e=Vr(e));const t=He(this),r=Oe(e,void 0);return r[k].isManual_=!0,Ce(t),r}finishDraft(e,t){const r=e&&e[k];(!r||!r.isManual_)&&P(9);const{scope_:n}=r;return Ke(n,t),Ge(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const o=t[r];if(o.path.length===0&&o.op==="replace"){e=o.value;break}}r>-1&&(t=t.slice(r+1));const n=U("Patches").applyPatches_;return T(e)?n(e,t):this.produce(e,o=>n(o,t))}};function Oe(e,t){const r=Q(e)?U("MapSet").proxyMap_(e,t):Z(e)?U("MapSet").proxySet_(e,t):Wr(e,t);return(t?t.scope_:St()).drafts_.push(r),r}function Vr(e){return T(e)||P(10,e),Ct(e)}function Ct(e){if(!M(e)||de(e))return e;const t=e[k];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=be(e,t.scope_.immer_.useStrictShallowCopy_)}else r=be(e,!0);return K(r,(n,o)=>{bt(r,n,Ct(o))}),t&&(t.finalized_=!1),r}function $n(){const t="replace",r="add",n="remove";function o(l,h,p,b){switch(l.type_){case 0:case 2:return u(l,h,p,b);case 1:return i(l,h,p,b);case 3:return c(l,h,p,b)}}function i(l,h,p,b){let{base_:v,assigned_:_}=l,w=l.copy_;w.length<v.length&&([v,w]=[w,v],[p,b]=[b,p]);for(let d=0;d<v.length;d++)if(_[d]&&w[d]!==v[d]){const y=h.concat([d]);p.push({op:t,path:y,value:m(w[d])}),b.push({op:t,path:y,value:m(v[d])})}for(let d=v.length;d<w.length;d++){const y=h.concat([d]);p.push({op:r,path:y,value:m(w[d])})}for(let d=w.length-1;v.length<=d;--d){const y=h.concat([d]);b.push({op:n,path:y})}}function u(l,h,p,b){const{base_:v,copy_:_}=l;K(l.assigned_,(w,d)=>{const y=_e(v,w),x=_e(_,w),S=d?H(v,w)?t:r:n;if(y===x&&S===t)return;const E=h.concat(w);p.push(S===n?{op:S,path:E}:{op:S,path:E,value:x}),b.push(S===r?{op:n,path:E}:S===n?{op:r,path:E,value:m(y)}:{op:t,path:E,value:m(y)})})}function c(l,h,p,b){let{base_:v,copy_:_}=l,w=0;v.forEach(d=>{if(!_.has(d)){const y=h.concat([w]);p.push({op:n,path:y,value:d}),b.unshift({op:r,path:y,value:d})}w++}),w=0,_.forEach(d=>{if(!v.has(d)){const y=h.concat([w]);p.push({op:r,path:y,value:d}),b.unshift({op:n,path:y,value:d})}w++})}function s(l,h,p,b){p.push({op:t,path:[],value:h===Me?void 0:h}),b.push({op:t,path:[],value:l})}function f(l,h){return h.forEach(p=>{const{path:b,op:v}=p;let _=l;for(let x=0;x<b.length-1;x++){const S=L(_);let E=b[x];typeof E!="string"&&typeof E!="number"&&(E=""+E),(S===0||S===1)&&(E==="__proto__"||E==="constructor")&&P(19),typeof _=="function"&&E==="prototype"&&P(19),_=_e(_,E),typeof _!="object"&&P(18,b.join("/"))}const w=L(_),d=a(p.value),y=b[b.length-1];switch(v){case t:switch(w){case 2:return _.set(y,d);case 3:P(16);default:return _[y]=d}case r:switch(w){case 1:return y==="-"?_.push(d):_.splice(y,0,d);case 2:return _.set(y,d);case 3:return _.add(d);default:return _[y]=d}case n:switch(w){case 1:return _.splice(y,1);case 2:return _.delete(y);case 3:return _.delete(p.value);default:return delete _[y]}default:P(17,v)}}),l}function a(l){if(!M(l))return l;if(Array.isArray(l))return l.map(a);if(Q(l))return new Map(Array.from(l.entries()).map(([p,b])=>[p,a(b)]));if(Z(l))return new Set(Array.from(l).map(a));const h=Object.create(F(l));for(const p in l)h[p]=a(l[p]);return H(l,B)&&(h[B]=l[B]),h}function m(l){return T(l)?a(l):l}Fr("Patches",{applyPatches_:f,generatePatches_:o,generateReplacementPatches_:s})}var N=new Br,xt=N.produce,In=N.produceWithPatches.bind(N);N.setAutoFreeze.bind(N);N.setUseStrictShallowCopy.bind(N);var zn=N.applyPatches.bind(N);N.createDraft.bind(N);N.finishDraft.bind(N);function Ot(e){return({dispatch:r,getState:n})=>o=>i=>typeof i=="function"?i(r,n,e):o(i)}var Kr=Ot(),Hr=Ot,Gr=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?se:se.apply(null,arguments)},Xr=e=>e&&typeof e.match=="function";function V(e,t){function r(...n){if(t){let o=t(...n);if(!o)throw new Error(D(0));return{type:e,payload:o.payload,..."meta"in o&&{meta:o.meta},..."error"in o&&{error:o.error}}}return{type:e,payload:n[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=n=>Tr(n)&&n.type===e,r}var Rt=class q extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,q.prototype)}static get[Symbol.species](){return q}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new q(...t[0].concat(this)):new q(...t.concat(this))}};function Ye(e){return M(e)?xt(e,()=>{}):e}function Je(e,t,r){if(e.has(t)){let o=e.get(t);return r.update&&(o=r.update(o,t,e),e.set(t,o)),o}if(!r.insert)throw new Error(D(10));const n=r.insert(t,e);return e.set(t,n),n}function Yr(e){return typeof e=="boolean"}var Jr=()=>function(t){const{thunk:r=!0,immutableCheck:n=!0,serializableCheck:o=!0,actionCreatorCheck:i=!0}=t??{};let u=new Rt;return r&&(Yr(r)?u.push(Kr):u.push(Hr(r.extraArgument))),u},Pt="RTK_autoBatch",Fn=()=>e=>({payload:e,meta:{[Pt]:!0}}),At=e=>t=>{setTimeout(t,e)},Qr=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:At(10),Zr=(e={type:"raf"})=>t=>(...r)=>{const n=t(...r);let o=!0,i=!1,u=!1;const c=new Set,s=e.type==="tick"?queueMicrotask:e.type==="raf"?Qr:e.type==="callback"?e.queueNotification:At(e.timeout),f=()=>{u=!1,i&&(i=!1,c.forEach(a=>a()))};return Object.assign({},n,{subscribe(a){const m=()=>o&&a(),l=n.subscribe(m);return c.add(a),()=>{l(),c.delete(a)}},dispatch(a){var m;try{return o=!((m=a==null?void 0:a.meta)!=null&&m[Pt]),i=!o,i&&(u||(u=!0,s(f))),n.dispatch(a)}finally{o=!0}}})},en=e=>function(r){const{autoBatch:n=!0}=r??{};let o=new Rt(e);return n&&o.push(Zr(typeof n=="object"?n:void 0)),o};function Ln(e){const t=Jr(),{reducer:r=void 0,middleware:n,devTools:o=!0,preloadedState:i=void 0,enhancers:u=void 0}=e||{};let c;if(typeof r=="function")c=r;else if(De(r))c=Dr(r);else throw new Error(D(1));let s;typeof n=="function"?s=n(t):s=t();let f=se;o&&(f=Gr({trace:!1,...typeof o=="object"&&o}));const a=Mr(...s),m=en(a);let l=typeof u=="function"?u(m):m();const h=f(...l);return vt(c,i,h)}function kt(e){const t={},r=[];let n;const o={addCase(i,u){const c=typeof i=="string"?i:i.type;if(!c)throw new Error(D(28));if(c in t)throw new Error(D(29));return t[c]=u,o},addMatcher(i,u){return r.push({matcher:i,reducer:u}),o},addDefaultCase(i){return n=i,o}};return e(o),[t,r,n]}function tn(e){return typeof e=="function"}function rn(e,t){let[r,n,o]=kt(t),i;if(tn(e))i=()=>Ye(e());else{const c=Ye(e);i=()=>c}function u(c=i(),s){let f=[r[s.type],...n.filter(({matcher:a})=>a(s)).map(({reducer:a})=>a)];return f.filter(a=>!!a).length===0&&(f=[o]),f.reduce((a,m)=>{if(m)if(T(a)){const h=m(a,s);return h===void 0?a:h}else{if(M(a))return xt(a,l=>m(l,s));{const l=m(a,s);if(l===void 0){if(a===null)return a;throw Error("A case reducer on a non-draftable value must not return undefined")}return l}}return a},c)}return u.getInitialState=i,u}var jt=(e,t)=>Xr(e)?e.match(t):e(t);function ee(...e){return t=>e.some(r=>jt(r,t))}function Qe(...e){return t=>e.every(r=>jt(r,t))}function pe(e,t){if(!e||!e.meta)return!1;const r=typeof e.meta.requestId=="string",n=t.indexOf(e.meta.requestStatus)>-1;return r&&n}function te(e){return typeof e[0]=="function"&&"pending"in e[0]&&"fulfilled"in e[0]&&"rejected"in e[0]}function nn(...e){return e.length===0?t=>pe(t,["pending"]):te(e)?ee(...e.map(t=>t.pending)):nn()(e[0])}function Re(...e){return e.length===0?t=>pe(t,["rejected"]):te(e)?ee(...e.map(t=>t.rejected)):Re()(e[0])}function on(...e){const t=r=>r&&r.meta&&r.meta.rejectedWithValue;return e.length===0?Qe(Re(...e),t):te(e)?Qe(Re(...e),t):on()(e[0])}function un(...e){return e.length===0?t=>pe(t,["fulfilled"]):te(e)?ee(...e.map(t=>t.fulfilled)):un()(e[0])}function sn(...e){return e.length===0?t=>pe(t,["pending","fulfilled","rejected"]):te(e)?ee(...e.flatMap(t=>[t.pending,t.rejected,t.fulfilled])):sn()(e[0])}var cn="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",fn=(e=21)=>{let t="",r=e;for(;r--;)t+=cn[Math.random()*64|0];return t},an=["name","message","stack","code"],ge=class{constructor(e,t){ye(this,"_type");this.payload=e,this.meta=t}},Ze=class{constructor(e,t){ye(this,"_type");this.payload=e,this.meta=t}},ln=e=>{if(typeof e=="object"&&e!==null){const t={};for(const r of an)typeof e[r]=="string"&&(t[r]=e[r]);return t}return{message:String(e)}},Un=(()=>{function e(t,r,n){const o=V(t+"/fulfilled",(s,f,a,m)=>({payload:s,meta:{...m||{},arg:a,requestId:f,requestStatus:"fulfilled"}})),i=V(t+"/pending",(s,f,a)=>({payload:void 0,meta:{...a||{},arg:f,requestId:s,requestStatus:"pending"}})),u=V(t+"/rejected",(s,f,a,m,l)=>({payload:m,error:(n&&n.serializeError||ln)(s||"Rejected"),meta:{...l||{},arg:a,requestId:f,rejectedWithValue:!!m,requestStatus:"rejected",aborted:(s==null?void 0:s.name)==="AbortError",condition:(s==null?void 0:s.name)==="ConditionError"}}));function c(s){return(f,a,m)=>{const l=n!=null&&n.idGenerator?n.idGenerator(s):fn(),h=new AbortController;let p,b;function v(w){b=w,h.abort()}const _=async function(){var y,x;let w;try{let S=(y=n==null?void 0:n.condition)==null?void 0:y.call(n,s,{getState:a,extra:m});if(pn(S)&&(S=await S),S===!1||h.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const E=new Promise((C,$)=>{p=()=>{$({name:"AbortError",message:b||"Aborted"})},h.signal.addEventListener("abort",p)});f(i(l,s,(x=n==null?void 0:n.getPendingMeta)==null?void 0:x.call(n,{requestId:l,arg:s},{getState:a,extra:m}))),w=await Promise.race([E,Promise.resolve(r(s,{dispatch:f,getState:a,extra:m,requestId:l,signal:h.signal,abort:v,rejectWithValue:(C,$)=>new ge(C,$),fulfillWithValue:(C,$)=>new Ze(C,$)})).then(C=>{if(C instanceof ge)throw C;return C instanceof Ze?o(C.payload,l,s,C.meta):o(C,l,s)})])}catch(S){w=S instanceof ge?u(null,l,s,S.payload,S.meta):u(S,l,s)}finally{p&&h.signal.removeEventListener("abort",p)}return n&&!n.dispatchConditionRejection&&u.match(w)&&w.meta.condition||f(w),w}();return Object.assign(_,{abort:v,requestId:l,arg:s,unwrap(){return _.then(dn)}})}}return Object.assign(c,{pending:i,rejected:u,fulfilled:o,settled:ee(u,o),typePrefix:t})}return e.withTypes=()=>e,e})();function dn(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function pn(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var yn=Symbol.for("rtk-slice-createasyncthunk");function hn(e,t){return`${e}/${t}`}function mn({creators:e}={}){var r;const t=(r=e==null?void 0:e.asyncThunk)==null?void 0:r[yn];return function(o){const{name:i,reducerPath:u=i}=o;if(!i)throw new Error(D(11));typeof process<"u";const c=(typeof o.reducers=="function"?o.reducers(vn()):o.reducers)||{},s=Object.keys(c),f={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},a={addCase(d,y){const x=typeof d=="string"?d:d.type;if(!x)throw new Error(D(12));if(x in f.sliceCaseReducersByType)throw new Error(D(13));return f.sliceCaseReducersByType[x]=y,a},addMatcher(d,y){return f.sliceMatchers.push({matcher:d,reducer:y}),a},exposeAction(d,y){return f.actionCreators[d]=y,a},exposeCaseReducer(d,y){return f.sliceCaseReducersByName[d]=y,a}};s.forEach(d=>{const y=c[d],x={reducerName:d,type:hn(i,d),createNotation:typeof o.reducers=="function"};bn(y)?En(x,y,a,t):gn(x,y,a)});function m(){const[d={},y=[],x=void 0]=typeof o.extraReducers=="function"?kt(o.extraReducers):[o.extraReducers],S={...d,...f.sliceCaseReducersByType};return rn(o.initialState,E=>{for(let C in S)E.addCase(C,S[C]);for(let C of f.sliceMatchers)E.addMatcher(C.matcher,C.reducer);for(let C of y)E.addMatcher(C.matcher,C.reducer);x&&E.addDefaultCase(x)})}const l=d=>d,h=new Map;let p;function b(d,y){return p||(p=m()),p(d,y)}function v(){return p||(p=m()),p.getInitialState()}function _(d,y=!1){function x(E){let C=E[d];return typeof C>"u"&&y&&(C=v()),C}function S(E=l){const C=Je(h,y,{insert:()=>new WeakMap});return Je(C,E,{insert:()=>{const $={};for(const[Mt,Tt]of Object.entries(o.selectors??{}))$[Mt]=_n(Tt,E,v,y);return $}})}return{reducerPath:d,getSelectors:S,get selectors(){return S(x)},selectSlice:x}}const w={name:i,reducer:b,actions:f.actionCreators,caseReducers:f.sliceCaseReducersByName,getInitialState:v,..._(u),injectInto(d,{reducerPath:y,...x}={}){const S=y??u;return d.inject({reducerPath:S,reducer:b},x),{...w,..._(S,!0)}}};return w}}function _n(e,t,r,n){function o(i,...u){let c=t(i);return typeof c>"u"&&n&&(c=r()),e(c,...u)}return o.unwrapped=e,o}var wn=mn();function vn(){function e(t,r){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...r}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...r){return t(...r)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,r){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:r}},asyncThunk:e}}function gn({type:e,reducerName:t,createNotation:r},n,o){let i,u;if("reducer"in n){if(r&&!Sn(n))throw new Error(D(17));i=n.reducer,u=n.prepare}else i=n;o.addCase(e,i).exposeCaseReducer(t,i).exposeAction(t,u?V(e,u):V(e))}function bn(e){return e._reducerDefinitionType==="asyncThunk"}function Sn(e){return e._reducerDefinitionType==="reducerWithPrepare"}function En({type:e,reducerName:t},r,n,o){if(!o)throw new Error(D(18));const{payloadCreator:i,fulfilled:u,pending:c,rejected:s,settled:f,options:a}=r,m=o(e,i,a);n.exposeAction(t,m),u&&n.addCase(m.fulfilled,u),c&&n.addCase(m.pending,c),s&&n.addCase(m.rejected,s),f&&n.addMatcher(m.settled,f),n.exposeCaseReducer(t,{fulfilled:u||ne,pending:c||ne,rejected:s||ne,settled:f||ne})}function ne(){}function D(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const Cn=e=>{const{label:t,onClick:r,className:n}=e;return O.jsx("button",{onClick:r,className:`${n} bg-transparent hover:bg-slate-500 text-slate-600 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded`,children:t})},et=e=>{const{text:t,type:r,className:n}=e;return O.jsx("header",{className:`${n} p-2 text-slate-600`,children:O.jsx("h1",{className:`${n} ${r==="primary"?"text-2xl":"text-xl"} font-semibold `,children:t})})},xn="GRAY",On="ZINC",Nt="SLATE",Rn=e=>{const{children:t}=e;return O.jsx("div",{className:"sticky top-0 bg-slate-300 z-50",children:t})},Pn={colorScheme:Nt},Dt=wn({name:"options",initialState:Pn,reducers:{setColorScheme:(e,{payload:t})=>{e.colorScheme=t}}}),{setColorScheme:An}=Dt.actions,Wn=Dt.reducer,kn=e=>{const{isSelected:t,label:r,className:n,onClick:o}=e;return O.jsx("div",{className:`${n} w-full`,onClick:o,children:O.jsxs("div",{className:`relative flex items-center mb-4 cursor-pointer ${t&&"bg-slate-100"} p-2 rounded-md`,children:[O.jsx("div",{className:"w-12 h-12 bg-slate-300 rounded-full mr-3",children:O.jsx("img",{src:"https://placehold.co/200x/dddddd/999999.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato",alt:"User Avatar",className:"w-12 h-12 rounded-full"})}),O.jsx("div",{className:"flex-1",children:O.jsx("h2",{className:"text-lg text-slate-400 font-semibold",children:r})})]})})},qn=e=>{const{setInSettings:t}=e,r=Ar(),n=gr(i=>i.options.colorScheme),o=[xn,On,Nt];return O.jsxs(O.Fragment,{children:[O.jsxs(Rn,{children:[O.jsx(et,{text:"Settings",type:"primary"}),O.jsx(Cn,{label:"<",onClick:()=>t(!1),className:"m-2"})]}),O.jsxs("div",{className:"p-4",children:[O.jsx(et,{text:"Background color",type:"secondary"}),o.map(i=>O.jsx(kn,{isSelected:n===i,label:i,onClick:()=>r(An(i))}))]})]})};export{gr as A,Rr as B,Nn as C,Nt as D,O as E,Cn as F,xn as G,et as H,vt as I,Wn as J,Ln as K,Rn as N,qn as O,Dn as P,Pt as S,On as Z,Un as a,wn as b,V as c,ee as d,on as e,D as f,un as g,zn as h,De as i,Dr as j,$n as k,M as l,In as m,fn as n,Qe as o,Fn as p,nn as q,le as r,Re as s,xt as t,T as u,Tn as v,Tr as w,sn as x,Mn as y,Ar as z};
