(()=>{"use strict";var e,o={807:()=>{const e=window.wp.blocks,o=window.wp.i18n,t=window.wp.blockEditor,l=window.wp.components,r=JSON.parse('{"UU":"blocks/curvy","KR":"curvy"}'),i=window.ReactJSXRuntime,n=({width:e,height:o,flipX:t,flipY:l,color:r,isBottom:n})=>(0,i.jsx)("div",{style:{position:"absolute",top:n?"initial":0,bottom:n?0:"initial",left:0,width:"100%",overflow:"hidden",height:`${o}px`,transform:`scaleX(${t?-1:1}) rotate(${l?"180deg":"0"}) scaleY(${n?-1:1})`},children:(0,i.jsx)("svg",{style:{position:"absolute",top:0,left:0,height:`${o}px`,width:`${e}%`},preserveAspectRatio:"none",viewBox:"0 0 1200 120",children:(0,i.jsx)("path",{style:{fill:r||"white"},d:l?"M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z":"M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"})})}),s=({attributes:e,setAttributes:n})=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.HorizontalRule,{}),(0,i.jsx)(l.RangeControl,{label:(0,o.__)("Width",r.KR),min:100,max:300,value:e.topWidth||100,onChange:e=>{n({topWidth:parseInt(e)})}}),(0,i.jsx)(l.RangeControl,{label:(0,o.__)("Height",r.KR),min:0,max:200,value:e.topHeight,onChange:e=>{n({topHeight:parseInt(e)})}}),(0,i.jsx)(l.HorizontalRule,{}),(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)(l.ToggleControl,{checked:e.topFlipX,onChange:e=>n({topFlipX:e})}),(0,i.jsx)("span",{children:(0,o.__)("Flip horizontally",r.KR)})]}),(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)(l.ToggleControl,{checked:e.topFlipY,onChange:e=>n({topFlipY:e})}),(0,i.jsx)("span",{children:(0,o.__)("Flip vertically",r.KR)})]}),(0,i.jsx)(l.HorizontalRule,{}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{children:(0,o.__)("Curve color",r.KR)}),(0,i.jsx)(t.ColorPalette,{value:e.topColor,onChange:e=>{n({topColor:e})}})]})]}),a=({attributes:e,setAttributes:n})=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.HorizontalRule,{}),(0,i.jsx)(l.RangeControl,{label:(0,o.__)("Width",r.KR),min:100,max:300,value:e.bottomWidth||100,onChange:e=>{n({bottomWidth:parseInt(e)})}}),(0,i.jsx)(l.RangeControl,{label:(0,o.__)("Height",r.KR),min:0,max:200,value:e.bottomHeight,onChange:e=>{n({bottomHeight:parseInt(e)})}}),(0,i.jsx)(l.HorizontalRule,{}),(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)(l.ToggleControl,{checked:e.bottomFlipX,onChange:e=>n({bottomFlipX:e})}),(0,i.jsx)("span",{children:(0,o.__)("Flip horizontally",r.KR)})]}),(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)(l.ToggleControl,{checked:e.bottomFlipY,onChange:e=>n({bottomFlipY:e})}),(0,i.jsx)("span",{children:(0,o.__)("Flip vertically",r.KR)})]}),(0,i.jsx)(l.HorizontalRule,{}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{children:(0,o.__)("Curve color",r.KR)}),(0,i.jsx)(t.ColorPalette,{value:e.bottomColor,onChange:e=>{n({bottomColor:e})}})]})]});(0,e.registerBlockType)(r.UU,{edit:function({attributes:e,setAttributes:c}){const{className:p,...h}=(0,t.useBlockProps)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("section",{className:`${p} alignfull`,...h,children:[e.enableTopCurve&&(0,i.jsx)(n,{width:e.topWidth,height:e.topHeight,flipX:e.topFlipX,flipY:e.topFlipY,color:e.topColor}),(0,i.jsx)(t.InnerBlocks,{}),e.enableBottomCurve&&(0,i.jsx)(n,{isBottom:!0,width:e.bottomWidth,height:e.bottomHeight,flipX:e.bottomFlipX,flipY:e.bottomFlipY,color:e.bottomColor})]}),(0,i.jsxs)(t.InspectorControls,{children:[(0,i.jsxs)(l.PanelBody,{title:(0,o.__)("Top curve",r.KR),children:[(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)(l.ToggleControl,{checked:e.enableTopCurve,onChange:e=>c({enableTopCurve:e})}),(0,i.jsx)("span",{children:(0,o.__)("Enable top curve",r.KR)})]}),e.enableTopCurve&&(0,i.jsx)(s,{attributes:e,setAttributes:c})]}),(0,i.jsxs)(l.PanelBody,{title:(0,o.__)("Enable bottom curve",r.KR),children:[(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)(l.ToggleControl,{checked:e.enableBottomCurve,onChange:e=>c({enableBottomCurve:e})}),(0,i.jsx)("span",{children:(0,o.__)("Enable bottom curve",r.KR)})]}),e.enableBottomCurve&&(0,i.jsx)(a,{attributes:e,setAttributes:c})]})]})]})},save:function(){return(0,i.jsx)(t.InnerBlocks.Content,{})},transforms:{from:[{type:"block",blocks:["core/paragraph"],transform:o=>(0,e.createBlock)("blocks/curvy",{},[(0,e.createBlock)("core/paragraph",o)])},{type:"block",blocks:["core/heading"],transform:o=>(0,e.createBlock)("blocks/curvy",{},[(0,e.createBlock)("core/heading",o)])}]}})}},t={};function l(e){var r=t[e];if(void 0!==r)return r.exports;var i=t[e]={exports:{}};return o[e](i,i.exports,l),i.exports}l.m=o,e=[],l.O=(o,t,r,i)=>{if(!t){var n=1/0;for(p=0;p<e.length;p++){for(var[t,r,i]=e[p],s=!0,a=0;a<t.length;a++)(!1&i||n>=i)&&Object.keys(l.O).every((e=>l.O[e](t[a])))?t.splice(a--,1):(s=!1,i<n&&(n=i));if(s){e.splice(p--,1);var c=r();void 0!==c&&(o=c)}}return o}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[t,r,i]},l.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={529:0,645:0};l.O.j=o=>0===e[o];var o=(o,t)=>{var r,i,[n,s,a]=t,c=0;if(n.some((o=>0!==e[o]))){for(r in s)l.o(s,r)&&(l.m[r]=s[r]);if(a)var p=a(l)}for(o&&o(t);c<n.length;c++)i=n[c],l.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return l.O(p)},t=globalThis.webpackChunkcurvy=globalThis.webpackChunkcurvy||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))})();var r=l.O(void 0,[645],(()=>l(807)));r=l.O(r)})();