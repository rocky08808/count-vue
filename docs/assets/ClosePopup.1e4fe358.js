import{c as v,w as R,o as Me,g as F,l as oe,ad as se,r as $,a as Ae,V as ze,h as g,ae as Qe,R as be,k as I,Y as b,H as ye,a1 as ae,m as y,N as Ke,af as Oe,M as re}from"./index.24a21571.js";import{v as Re,o as K,p as qe,c as N,h as W,n as Ie,q as Ne,r as We,s as Ue}from"./QBtn.2e5d6c0b.js";import{b as je,a as Ye,h as Ge}from"./scroll.093045ed.js";const Xe={dark:{type:Boolean,default:null}};function Je(e,t){return v(()=>e.dark===null?t.dark.isActive:e.dark)}let k=[],H=[];function ke(e){H=H.filter(t=>t!==e)}function Ze(e){ke(e),H.push(e)}function ue(e){ke(e),H.length===0&&k.length>0&&(k[k.length-1](),k=[])}function et(e){H.length===0?e():k.push(e)}function Bt(e){k=k.filter(t=>t!==e)}const tt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},ot=["beforeShow","show","beforeHide","hide"];function nt({showing:e,canShow:t,hideOnRouteChange:o,handleShow:n,handleHide:l,processOnMount:u}){const a=F(),{props:r,emit:c,proxy:m}=a;let f;function h(s){e.value===!0?_(s):w(s)}function w(s){if(r.disable===!0||s!==void 0&&s.qAnchorHandled===!0||t!==void 0&&t(s)!==!0)return;const p=r["onUpdate:modelValue"]!==void 0;p===!0&&(c("update:modelValue",!0),f=s,oe(()=>{f===s&&(f=void 0)})),(r.modelValue===null||p===!1)&&P(s)}function P(s){e.value!==!0&&(e.value=!0,c("beforeShow",s),n!==void 0?n(s):c("show",s))}function _(s){if(r.disable===!0)return;const p=r["onUpdate:modelValue"]!==void 0;p===!0&&(c("update:modelValue",!1),f=s,oe(()=>{f===s&&(f=void 0)})),(r.modelValue===null||p===!1)&&D(s)}function D(s){e.value!==!1&&(e.value=!1,c("beforeHide",s),l!==void 0?l(s):c("hide",s))}function S(s){r.disable===!0&&s===!0?r["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):s===!0!==e.value&&(s===!0?P:D)(f)}R(()=>r.modelValue,S),o!==void 0&&Re(a)===!0&&R(()=>m.$route.fullPath,()=>{o.value===!0&&e.value===!0&&_()}),u===!0&&Me(()=>{S(r.modelValue)});const V={show:w,hide:_,toggle:h};return Object.assign(m,V),V}let lt=1,it=document.body;function st(e,t){const o=document.createElement("div");if(o.id=t!==void 0?`q-portal--${t}--${lt++}`:e,se.globalNodes!==void 0){const n=se.globalNodes.class;n!==void 0&&(o.className=n)}return it.appendChild(o),o}function at(e){e.remove()}const O=[];function rt(e){return O.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function ut(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return K(e)}else if(e.__qPortal===!0){const o=K(e);return o!==void 0&&o.$options.name==="QPopupProxy"?(e.hide(t),o):e}e=K(e)}while(e!=null)}function ct(e,t,o){for(;o!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(o--,e.$options.name==="QMenu"){e=ut(e,t);continue}e.hide(t)}e=K(e)}}function dt(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function ft(e,t,o,n){const l=$(!1),u=$(!1);let a=null;const r={},c=n==="dialog"&&dt(e);function m(h){if(h===!0){ue(r),u.value=!0;return}u.value=!1,l.value===!1&&(c===!1&&a===null&&(a=st(!1,n)),l.value=!0,O.push(e.proxy),Ze(r))}function f(h){if(u.value=!1,h!==!0)return;ue(r),l.value=!1;const w=O.indexOf(e.proxy);w!==-1&&O.splice(w,1),a!==null&&(at(a),a=null)}return Ae(()=>{f(!0)}),e.proxy.__qPortal=!0,ze(e.proxy,"contentEl",()=>t.value),{showPortal:m,hidePortal:f,portalIsActive:l,portalIsAccessible:u,renderPortal:()=>c===!0?o():l.value===!0?[g(Qe,{to:a},o())]:void 0}}const mt={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function vt(e,t=()=>{},o=()=>{}){return{transitionProps:v(()=>{const n=`q-transition--${e.transitionShow||t()}`,l=`q-transition--${e.transitionHide||o()}`;return{appear:!0,enterFromClass:`${n}-enter-from`,enterActiveClass:`${n}-enter-active`,enterToClass:`${n}-enter-to`,leaveFromClass:`${l}-leave-from`,leaveActiveClass:`${l}-leave-active`,leaveToClass:`${l}-leave-to`}}),transitionStyle:v(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function ht(){let e;const t=F();function o(){e=void 0}return be(o),I(o),{removeTick:o,registerTick(n){e=n,oe(()=>{e===n&&(qe(t)===!1&&e(),e=void 0)})}}}function pt(){let e=null;const t=F();function o(){e!==null&&(clearTimeout(e),e=null)}return be(o),I(o),{removeTimeout:o,registerTimeout(n,l){o(),qe(t)===!1&&(e=setTimeout(n,l))}}}const T=[];let C;function gt(e){C=e.keyCode===27}function wt(){C===!0&&(C=!1)}function bt(e){C===!0&&(C=!1,ye(e,27)===!0&&T[T.length-1](e))}function Te(e){window[e]("keydown",gt),window[e]("blur",wt),window[e]("keyup",bt),C=!1}function yt(e){b.is.desktop===!0&&(T.push(e),T.length===1&&Te("addEventListener"))}function ce(e){const t=T.indexOf(e);t>-1&&(T.splice(t,1),T.length===0&&Te("removeEventListener"))}const E=[];function Ee(e){E[E.length-1](e)}function qt(e){b.is.desktop===!0&&(E.push(e),E.length===1&&document.body.addEventListener("focusin",Ee))}function de(e){const t=E.indexOf(e);t>-1&&(E.splice(t,1),E.length===0&&document.body.removeEventListener("focusin",Ee))}function kt(e,t,o){let n;function l(){n!==void 0&&(ae.remove(n),n=void 0)}return I(()=>{e.value===!0&&l()}),{removeFromHistory:l,addToHistory(){n={condition:()=>o.value===!0,handler:t},ae.add(n)}}}let L=0,Z,ee,B,te=!1,fe,me,ve,q=null;function Tt(e){Et(e)&&Ke(e)}function Et(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=Oe(e),o=e.shiftKey&&!e.deltaX,n=!o&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),l=o||n?e.deltaY:e.deltaX;for(let u=0;u<t.length;u++){const a=t[u];if(Ge(a,n))return n?l<0&&a.scrollTop===0?!0:l>0&&a.scrollTop+a.clientHeight===a.scrollHeight:l<0&&a.scrollLeft===0?!0:l>0&&a.scrollLeft+a.clientWidth===a.scrollWidth}return!0}function he(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function z(e){te!==!0&&(te=!0,requestAnimationFrame(()=>{te=!1;const{height:t}=e.target,{clientHeight:o,scrollTop:n}=document.scrollingElement;(B===void 0||t!==window.innerHeight)&&(B=o-t,document.scrollingElement.scrollTop=n),n>B&&(document.scrollingElement.scrollTop-=Math.ceil((n-B)/8))}))}function pe(e){const t=document.body,o=window.visualViewport!==void 0;if(e==="add"){const{overflowY:n,overflowX:l}=window.getComputedStyle(t);Z=je(window),ee=Ye(window),fe=t.style.left,me=t.style.top,ve=window.location.href,t.style.left=`-${Z}px`,t.style.top=`-${ee}px`,l!=="hidden"&&(l==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),n!=="hidden"&&(n==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,b.is.ios===!0&&(o===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",z,y.passiveCapture),window.visualViewport.addEventListener("scroll",z,y.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",he,y.passiveCapture))}b.is.desktop===!0&&b.is.mac===!0&&window[`${e}EventListener`]("wheel",Tt,y.notPassive),e==="remove"&&(b.is.ios===!0&&(o===!0?(window.visualViewport.removeEventListener("resize",z,y.passiveCapture),window.visualViewport.removeEventListener("scroll",z,y.passiveCapture)):window.removeEventListener("scroll",he,y.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=fe,t.style.top=me,window.location.href===ve&&window.scrollTo(Z,ee),B=void 0)}function _t(e){let t="add";if(e===!0){if(L++,q!==null){clearTimeout(q),q=null;return}if(L>1)return}else{if(L===0||(L--,L>0))return;if(t="remove",b.is.ios===!0&&b.is.nativeMobile===!0){q!==null&&clearTimeout(q),q=setTimeout(()=>{pe(t),q=null},100);return}}pe(t)}function Ct(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,_t(t))}}}let Q=0;const Pt={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},ge={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var $t=N({name:"QDialog",inheritAttrs:!1,props:{...tt,...mt,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...ot,"shake","click","escapeKey"],setup(e,{slots:t,emit:o,attrs:n}){const l=F(),u=$(null),a=$(!1),r=$(!1);let c=null,m=null,f,h;const w=v(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:P}=Ct(),{registerTimeout:_}=pt(),{registerTick:D,removeTick:S}=ht(),{transitionProps:V,transitionStyle:s}=vt(e,()=>ge[e.position][0],()=>ge[e.position][1]),{showPortal:p,hidePortal:ne,portalIsAccessible:_e,renderPortal:Ce}=ft(l,u,Ve,"dialog"),{hide:M}=nt({showing:a,hideOnRouteChange:w,handleShow:$e,handleHide:He,processOnMount:!0}),{addToHistory:Pe,removeFromHistory:Se}=kt(a,M,w),xe=v(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${Pt[e.position]}`+(r.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),A=v(()=>a.value===!0&&e.seamless!==!0),Le=v(()=>e.autoClose===!0?{onClick:Fe}:{}),Be=v(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${A.value===!0?"modal":"seamless"}`,n.class]);R(()=>e.maximized,i=>{a.value===!0&&Y(i)}),R(A,i=>{P(i),i===!0?(qt(G),yt(j)):(de(G),ce(j))});function $e(i){Pe(),m=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,Y(e.maximized),p(),r.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),D(x)):S(),_(()=>{if(l.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:d,bottom:X}=document.activeElement.getBoundingClientRect(),{innerHeight:ie}=window,J=window.visualViewport!==void 0?window.visualViewport.height:ie;d>0&&X>J/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-J,X>=ie?1/0:Math.ceil(document.scrollingElement.scrollTop+X-J/2))),document.activeElement.scrollIntoView()}h=!0,u.value.click(),h=!1}p(!0),r.value=!1,o("show",i)},e.transitionDuration)}function He(i){S(),Se(),le(!0),r.value=!0,ne(),m!==null&&(((i&&i.type.indexOf("key")===0?m.closest('[tabindex]:not([tabindex^="-"])'):void 0)||m).focus(),m=null),_(()=>{ne(!0),r.value=!1,o("hide",i)},e.transitionDuration)}function x(i){et(()=>{let d=u.value;d===null||d.contains(document.activeElement)===!0||(d=(i!==""?d.querySelector(i):null)||d.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||d.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||d.querySelector("[autofocus], [data-autofocus]")||d,d.focus({preventScroll:!0}))})}function U(i){i&&typeof i.focus=="function"?i.focus({preventScroll:!0}):x(),o("shake");const d=u.value;d!==null&&(d.classList.remove("q-animate--scale"),d.classList.add("q-animate--scale"),c!==null&&clearTimeout(c),c=setTimeout(()=>{c=null,u.value!==null&&(d.classList.remove("q-animate--scale"),x())},170))}function j(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&U():(o("escapeKey"),M()))}function le(i){c!==null&&(clearTimeout(c),c=null),(i===!0||a.value===!0)&&(Y(!1),e.seamless!==!0&&(P(!1),de(G),ce(j))),i!==!0&&(m=null)}function Y(i){i===!0?f!==!0&&(Q<1&&document.body.classList.add("q-body--dialog"),Q++,f=!0):f===!0&&(Q<2&&document.body.classList.remove("q-body--dialog"),Q--,f=!1)}function Fe(i){h!==!0&&(M(i),o("click",i))}function De(i){e.persistent!==!0&&e.noBackdropDismiss!==!0?M(i):e.noShake!==!0&&U()}function G(i){e.allowFocusOutside!==!0&&_e.value===!0&&Ie(u.value,i.target)!==!0&&x('[tabindex]:not([tabindex="-1"])')}Object.assign(l.proxy,{focus:x,shake:U,__updateRefocusTarget(i){m=i||null}}),I(le);function Ve(){return g("div",{role:"dialog","aria-modal":A.value===!0?"true":"false",...n,class:Be.value},[g(re,{name:"q-transition--fade",appear:!0},()=>A.value===!0?g("div",{class:"q-dialog__backdrop fixed-full",style:s.value,"aria-hidden":"true",tabindex:-1,onClick:De}):null),g(re,V.value,()=>a.value===!0?g("div",{ref:u,class:xe.value,style:s.value,tabindex:-1,...Le.value},W(t.default)):null)])}return Ce}}),Ht=N({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:t}){const o=v(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>g(e.tag,{class:o.value},W(t.default))}}),Ft=N({name:"QCardActions",props:{...Ne,vertical:Boolean},setup(e,{slots:t}){const o=We(e),n=v(()=>`q-card__actions ${o.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>g("div",{class:n.value},W(t.default))}}),Dt=N({name:"QCard",props:{...Xe,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const{proxy:{$q:o}}=F(),n=Je(e,o),l=v(()=>"q-card"+(n.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>g(e.tag,{class:l.value},W(t.default))}});function we(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}var Vt=Ue({name:"close-popup",beforeMount(e,{value:t}){const o={depth:we(t),handler(n){o.depth!==0&&setTimeout(()=>{const l=rt(e);l!==void 0&&ct(l,n,o.depth)})},handlerKey(n){ye(n,13)===!0&&o.handler(n)}};e.__qclosepopup=o,e.addEventListener("click",o.handler),e.addEventListener("keyup",o.handlerKey)},updated(e,{value:t,oldValue:o}){t!==o&&(e.__qclosepopup.depth=we(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}});export{Vt as C,$t as Q,Je as a,et as b,tt as c,mt as d,ot as e,ht as f,pt as g,vt as h,nt as i,ft as j,qt as k,de as l,ce as m,yt as n,ut as o,O as p,Dt as q,Bt as r,Ht as s,Ft as t,Xe as u};
