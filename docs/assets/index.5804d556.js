import{Q as o}from"./QBtn.3efedd32.js";import{Q as n,q as u,s as d,t as i,C as p}from"./ClosePopup.865f7e0e.js";import{ab as x,r as _,v as w,ai as V,d as e,y as a,G as f,C as m,ad as g,ae as Q,aa as v}from"./index.ef83bfb1.js";import"./scroll.c8994cd3.js";const h=l=>(g("data-v-b83ff2fe"),l=l(),Q(),l),b={class:"clearcache"},S=h(()=>v("span",{class:"q-ml-sm warntips"},"Warnning: clear cache will clear all data, are you sure you want to clear ?",-1)),k=h(()=>v("div",{class:"text-h6"},"Tips",-1)),B={__name:"index",setup(l){const t=_(!1),r=_(!1),C=()=>{t.value=!0},y=()=>{localStorage.clear(),t.value=!1,r.value=!0};return(I,s)=>(w(),V("div",b,[e(o,{class:"full-width",color:"purple",onClick:C},{default:a(()=>[f("clear cache")]),_:1}),e(n,{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=c=>t.value=c),persistent:""},{default:a(()=>[e(u,null,{default:a(()=>[e(d,{class:"row items-center"},{default:a(()=>[S]),_:1}),e(i,{align:"right"},{default:a(()=>[m(e(o,{flat:"",label:"Cancel",color:"primary"},null,512),[[p]]),e(o,{type:"primary",label:"Yes",color:"primary",onClick:y})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(n,{modelValue:r.value,"onUpdate:modelValue":s[1]||(s[1]=c=>r.value=c)},{default:a(()=>[e(u,null,{default:a(()=>[e(d,null,{default:a(()=>[k]),_:1}),e(d,{class:"q-pt-none"},{default:a(()=>[f("Clear successfully!")]),_:1}),e(i,{align:"right"},{default:a(()=>[m(e(o,{flat:"",label:"OK",color:"primary"},null,512),[[p]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};var U=x(B,[["__scopeId","data-v-b83ff2fe"]]);export{U as default};