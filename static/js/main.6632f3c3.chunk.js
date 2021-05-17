(this["webpackJsonpf5-waf-policy-editor"]=this["webpackJsonpf5-waf-policy-editor"]||[]).push([[0],{163:function(e,t,r){"use strict";r.r(t);var n,o=r(0),i=r.n(o),a=r(11),c=r.n(a),l=r(18),s=r(39),u=r(4),d=r(224),p=r(215),j=r(216),f=r(20),b=r(199),O=r(201),g=340,h=Object(b.a)((function(e){return console.log(e.mixins.toolbar),Object(O.a)({root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},title:{flexGrow:1},appBarShift:{width:"calc(100% - ".concat(g,"px)"),marginLeft:g,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none !important"},drawer:{width:g,flexShrink:0},drawerPaper:{width:g},drawerHeader:Object(f.a)(Object(f.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{overflow:"scroll",flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-340,maxWidth:"100vw",minWidth:"720px"},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0,maxWidth:"calc(100vw - ".concat(g,"px)")},nested:{paddingLeft:e.spacing(4)},nested2:{paddingLeft:e.spacing(8)},ellipsis:{overflow:"hidden",textOverflow:"ellipsis"},sectionButtons:{margin:e.spacing(2)},hidden:{display:"none"},pageContent:{padding:e.spacing(1)}})}),{index:1}),C=r(202),m=r(204),y=r(205),v=r(209),x=r(210),k=r(203),L=r(206),w=r(207),E=r(208),S=r(212),P=r(213),M=r(211),I=r(42),H=function(){return Object(I.c)((function(e){return e.dashboardState}))};!function(e){e[e.PolicyEditor=0]="PolicyEditor",e[e.PolicyWizard=1]="PolicyWizard",e[e.ApplicationPreset=2]="ApplicationPreset"}(n||(n={}));var V="dashboard::module::set",B="policy-editor::page:set";function W(e){return{type:V,currentModule:e}}var A,N,R,_,Z,F,T,D=r(3),G=function(e){var t=e.onDrawerClose,r=h(),i=Object(I.b)(),a=H();return Object(D.jsxs)(o.Fragment,{children:[Object(D.jsx)("div",{className:r.drawerHeader,children:Object(D.jsx)(C.a,{onClick:t,children:Object(D.jsx)(k.a,{})})}),Object(D.jsx)(m.a,{}),Object(D.jsx)(y.a,{children:[{text:"Policy Editor",id:n.PolicyEditor,icon:Object(D.jsx)(L.a,{}),onClick:function(){i(W(n.PolicyEditor))}},{text:"Policy Wizard",id:n.PolicyWizard,icon:Object(D.jsx)(w.a,{}),onClick:function(){i(W(n.PolicyWizard))}},{text:"Application Preset",id:n.ApplicationPreset,icon:Object(D.jsx)(E.a,{}),onClick:function(){i(W(n.ApplicationPreset))}}].map((function(e,t){var r=e.text,n=e.id,o=e.icon,i=e.onClick;return Object(D.jsxs)(v.a,{button:!0,onClick:function(){return i()},selected:n===a.currentModule,children:[Object(D.jsx)(x.a,{children:o}),Object(D.jsx)(M.a,{primary:r})]},t)}))}),Object(D.jsx)(m.a,{}),Object(D.jsx)(y.a,{children:[{text:"Download",icon:Object(D.jsx)(S.a,{}),onClick:function(){}},{text:"Share",icon:Object(D.jsx)(P.a,{}),onClick:function(){}}].map((function(e,t){var r=e.text,n=e.icon,o=e.onClick;return Object(D.jsxs)(v.a,{button:!0,onClick:function(){return o()},children:[Object(D.jsx)(x.a,{children:n}),Object(D.jsx)(M.a,{primary:r})]},t)}))})]})},z=r(115),J=r.n(z),U=r(214),X=r(81),Y=function(e){var t=e.open,r=e.onDrawerOpen,n=h();return Object(D.jsxs)(U.a,{children:[Object(D.jsx)(C.a,{color:"inherit","aria-label":"open drawer",onClick:r,edge:"start",className:Object(u.a)(n.menuButton,t&&n.hide),children:Object(D.jsx)(J.a,{})}),Object(D.jsx)(X.a,{variant:"h6",noWrap:!0,children:"WAF Policy Editor"})]})},$=function(e){var t=e.children,r=h(),n=Object(o.useState)(!1),i=Object(s.a)(n,2),a=i[0],c=i[1];return Object(D.jsxs)("div",{className:r.root,children:[Object(D.jsx)(p.a,{}),Object(D.jsx)(j.a,{position:"fixed",className:Object(u.a)(r.appBar,Object(l.a)({},r.appBarShift,a)),children:Object(D.jsx)(Y,{onDrawerOpen:function(){c(!0)},open:a})}),Object(D.jsx)(d.a,{className:r.drawer,variant:"persistent",anchor:"left",open:a,classes:{paper:r.drawerPaper},children:Object(D.jsx)(G,{onDrawerClose:function(){c(!1)}})}),Object(D.jsxs)("main",{className:Object(u.a)(r.content,Object(l.a)({},r.contentShift,a)),children:[Object(D.jsx)("div",{className:r.drawerHeader}),t]})]})},q=function(){return Object(D.jsx)(X.a,{children:"Application Preset is under development"})},K=r(225),Q=r(93),ee=r.n(Q),te=r(222),re=r(218),ne=ee()((function(e){return Object(O.a)({root:{borderBottom:"1px solid ".concat(e.palette.divider)},indicator:{backgroundColor:e.palette.primary.main}})}))(te.a),oe=ee()((function(e){return Object(O.a)({root:{textTransform:"none",minWidth:72,fontWeight:e.typography.fontWeightRegular,marginRight:e.spacing(4),"&:hover":{color:e.palette.primary.main,opacity:1},"&$selected":{color:e.palette.primary.main,fontWeight:e.typography.fontWeightMedium},"&:focus":{color:e.palette.primary.main}},selected:{}})}))((function(e){return Object(D.jsx)(re.a,Object(f.a)({},e))})),ie=r(219);function ae(){return(ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function ce(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function le(e,t){var r=e.title,n=e.titleId,i=ce(e,["title","titleId"]);return o.createElement("svg",ae({fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},i),r?o.createElement("title",{id:n},r):null,A||(A=o.createElement("path",{d:"M10 8.125V4.375",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})),N||(N=o.createElement("path",{d:"M6.25 11.875V8.125",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})),R||(R=o.createElement("path",{d:"M13.75 11.875V8.125",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})),_||(_=o.createElement("path",{d:"M10 15.625V11.875",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})),Z||(Z=o.createElement("path",{d:"M2.5 8.125H17.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})),F||(F=o.createElement("path",{d:"M2.5 11.875H17.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})),T||(T=o.createElement("path",{d:"M17.5 4.375H2.5V15.625H17.5V4.375Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})))}var se,ue,de=o.forwardRef(le);r.p;function pe(){return(pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function je(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function fe(e,t){var r=e.title,n=e.titleId,i=je(e,["title","titleId"]);return o.createElement("svg",pe({fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},i),r?o.createElement("title",{id:n},r):null,se||(se=o.createElement("path",{d:"M16.9444 16.25H3.07692C2.92405 16.2496 2.77757 16.1886 2.66947 16.0805C2.56137 15.9724 2.50045 15.8259 2.5 15.6731V6.25H16.875C17.0408 6.25 17.1997 6.31585 17.3169 6.43306C17.4342 6.55027 17.5 6.70924 17.5 6.875V15.6944C17.5 15.8418 17.4415 15.9831 17.3373 16.0873C17.2331 16.1915 17.0918 16.25 16.9444 16.25V16.25Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})),ue||(ue=o.createElement("path",{d:"M2.5 6.25V4.375C2.5 4.20924 2.56585 4.05027 2.68306 3.93306C2.80027 3.81585 2.95924 3.75 3.125 3.75H7.24112C7.32319 3.75 7.40447 3.76617 7.48029 3.79758C7.55612 3.82898 7.62502 3.87502 7.68306 3.93306L10 6.25",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})))}var be,Oe,ge=o.forwardRef(fe);r.p;function he(){return(he=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Ce(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function me(e,t){var r=e.title,n=e.titleId,i=Ce(e,["title","titleId"]);return o.createElement("svg",he({fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},i),r?o.createElement("title",{id:n},r):null,be||(be=o.createElement("path",{d:"M10 13.75C12.0711 13.75 13.75 12.0711 13.75 10C13.75 7.92893 12.0711 6.25 10 6.25C7.92893 6.25 6.25 7.92893 6.25 10C6.25 12.0711 7.92893 13.75 10 13.75Z",stroke:"currentColor",strokeWidth:1})),Oe||(Oe=o.createElement("path",{d:"M9.59935 3.44944L8.12517 2.34413C8.04608 2.28463 7.95397 2.24478 7.85645 2.22786C7.75893 2.21094 7.65879 2.21744 7.56427 2.24682C7.10771 2.38979 6.66475 2.57306 6.24063 2.79446C6.15284 2.84051 6.07725 2.90678 6.02012 2.9878C5.96298 3.06882 5.92593 3.16227 5.91203 3.26043L5.65142 5.08472C5.55209 5.17278 5.45484 5.26436 5.35967 5.35947C5.26453 5.45461 5.17293 5.55189 5.08485 5.6513L5.08481 5.65133L3.26085 5.91217C3.16284 5.92602 3.06954 5.96297 2.98862 6.01996C2.90769 6.07696 2.84148 6.15236 2.79542 6.23997C2.57367 6.66391 2.39005 7.10672 2.24671 7.56317C2.21719 7.65781 2.2106 7.75812 2.22749 7.85581C2.24438 7.9535 2.28426 8.04578 2.34384 8.12502L3.44953 9.59926C3.44155 9.73176 3.43754 9.86529 3.4375 9.99983C3.4375 10.1344 3.44151 10.2679 3.44953 10.4005L3.44953 10.4006L2.34422 11.8747C2.28472 11.9538 2.24487 12.0459 2.22795 12.1435C2.21103 12.241 2.21753 12.3411 2.24691 12.4356C2.38988 12.8922 2.57315 13.3352 2.79455 13.7593C2.84061 13.8471 2.90688 13.9227 2.9879 13.9798C3.06892 14.0369 3.16236 14.074 3.26052 14.0879L5.08481 14.3485C5.17286 14.4478 5.26445 14.5451 5.35956 14.6402C5.4547 14.7354 5.55197 14.827 5.65139 14.9151L5.65142 14.9151L5.91225 16.7391C5.92611 16.8371 5.96306 16.9304 6.02005 17.0113C6.07704 17.0922 6.15245 17.1584 6.24006 17.2045C6.664 17.4262 7.10681 17.6099 7.56326 17.7532C7.6579 17.7827 7.75821 17.7893 7.8559 17.7724C7.95359 17.7555 8.04587 17.7157 8.12511 17.6561L9.59935 16.5504C9.73185 16.5584 9.86538 16.5624 9.99992 16.5624C10.1345 16.5624 10.268 16.5584 10.4006 16.5504L10.4007 16.5504L11.8748 17.6557C11.9539 17.7152 12.046 17.755 12.1436 17.772C12.2411 17.7889 12.3412 17.7824 12.4357 17.753C12.8923 17.61 13.3353 17.4268 13.7594 17.2054C13.8472 17.1593 13.9228 17.093 13.9799 17.012C14.037 16.931 14.0741 16.8376 14.088 16.7394L14.3486 14.9151C14.4479 14.8271 14.5452 14.7355 14.6403 14.6404C14.7355 14.5452 14.8271 14.4479 14.9152 14.3485L14.9152 14.3485L16.7392 14.0877C16.8372 14.0738 16.9305 14.0369 17.0114 13.9799C17.0923 13.9229 17.1585 13.8475 17.2046 13.7599C17.4263 13.3359 17.61 12.8931 17.7533 12.4367C17.7828 12.342 17.7894 12.2417 17.7725 12.144C17.7556 12.0463 17.7158 11.9541 17.6562 11.8748L16.5505 10.4006C16.5585 10.2681 16.5625 10.1345 16.5625 9.99999C16.5625 9.86545 16.5585 9.73189 16.5505 9.59931L16.5505 9.59926L17.6558 8.12508C17.7153 8.04599 17.7551 7.95388 17.7721 7.85636C17.789 7.75884 17.7825 7.6587 17.7531 7.56418C17.6101 7.10761 17.4269 6.66466 17.2055 6.24054C17.1594 6.15275 17.0931 6.07716 17.0121 6.02002C16.9311 5.96289 16.8376 5.92584 16.7395 5.91193L14.9152 5.65133C14.8271 5.552 14.7356 5.45474 14.6404 5.35958C14.5453 5.26444 14.448 5.17284 14.3486 5.08476L14.3486 5.08472L14.0878 3.26075C14.0739 3.16275 14.037 3.06944 13.98 2.98852C13.923 2.9076 13.8476 2.84138 13.7599 2.79533C13.336 2.57358 12.8932 2.38996 12.4368 2.24662C12.3421 2.2171 12.2418 2.21051 12.1441 2.2274C12.0464 2.24429 11.9541 2.28417 11.8749 2.34374L10.4007 3.44944C10.2682 3.44146 10.1346 3.43745 10.0001 3.43741C9.86554 3.43741 9.73198 3.44142 9.5994 3.44944L9.59935 3.44944Z",stroke:"currentColor",strokeWidth:1})))}var ye,ve,xe=o.forwardRef(me);r.p;function ke(){return(ke=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Le(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function we(e,t){var r=e.title,n=e.titleId,i=Le(e,["title","titleId"]);return o.createElement("svg",ke({fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},i),r?o.createElement("title",{id:n},r):null,ye||(ye=o.createElement("path",{d:"M16.25 11.25H3.75C3.40482 11.25 3.125 11.5298 3.125 11.875V15C3.125 15.3452 3.40482 15.625 3.75 15.625H16.25C16.5952 15.625 16.875 15.3452 16.875 15V11.875C16.875 11.5298 16.5952 11.25 16.25 11.25Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})),ve||(ve=o.createElement("path",{d:"M16.25 4.375H3.75C3.40482 4.375 3.125 4.65482 3.125 5V8.125C3.125 8.47018 3.40482 8.75 3.75 8.75H16.25C16.5952 8.75 16.875 8.47018 16.875 8.125V5C16.875 4.65482 16.5952 4.375 16.25 4.375Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})))}var Ee,Se,Pe,Me,Ie=o.forwardRef(we);r.p;function He(){return(He=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Ve(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Be(e,t){var r=e.title,n=e.titleId,i=Ve(e,["title","titleId"]);return o.createElement("svg",He({fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},i),r?o.createElement("title",{id:n},r):null,Ee||(Ee=o.createElement("path",{d:"M9.99951 12.5C10.8625 12.5 11.562 11.8004 11.562 10.9375C11.562 10.0746 10.8625 9.375 9.99951 9.375C9.13657 9.375 8.43701 10.0746 8.43701 10.9375C8.43701 11.8004 9.13657 12.5 9.99951 12.5Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})),Se||(Se=o.createElement("path",{d:"M9.99951 12.5V14.375",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})),Pe||(Pe=o.createElement("path",{d:"M16.2495 6.875H3.74951C3.40433 6.875 3.12451 7.15482 3.12451 7.5V16.25C3.12451 16.5952 3.40433 16.875 3.74951 16.875H16.2495C16.5947 16.875 16.8745 16.5952 16.8745 16.25V7.5C16.8745 7.15482 16.5947 6.875 16.2495 6.875Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})),Me||(Me=o.createElement("path",{d:"M7.18701 6.875V4.0625C7.18701 3.31658 7.48333 2.60121 8.01077 2.07376C8.53822 1.54632 9.25359 1.25 9.99951 1.25C10.7454 1.25 11.4608 1.54632 11.9882 2.07376C12.5157 2.60121 12.812 3.31658 12.812 4.0625",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})))}var We,Ae,Ne,Re,_e,Ze,Fe=o.forwardRef(Be);r.p;function Te(){return(Te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function De(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Ge(e,t){var r=e.title,n=e.titleId,i=De(e,["title","titleId"]);return o.createElement("svg",Te({fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},i),r?o.createElement("title",{id:n},r):null,We||(We=o.createElement("path",{d:"M5.3125 16.875C6.52062 16.875 7.5 15.8956 7.5 14.6875C7.5 13.4794 6.52062 12.5 5.3125 12.5C4.10438 12.5 3.125 13.4794 3.125 14.6875C3.125 15.8956 4.10438 16.875 5.3125 16.875Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})),Ae||(Ae=o.createElement("path",{d:"M5.3125 7.5C6.52062 7.5 7.5 6.52062 7.5 5.3125C7.5 4.10438 6.52062 3.125 5.3125 3.125C4.10438 3.125 3.125 4.10438 3.125 5.3125C3.125 6.52062 4.10438 7.5 5.3125 7.5Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})),Ne||(Ne=o.createElement("path",{d:"M5.3125 7.5V12.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})),Re||(Re=o.createElement("path",{d:"M14.6877 16.875C15.8958 16.875 16.8752 15.8956 16.8752 14.6875C16.8752 13.4794 15.8958 12.5 14.6877 12.5C13.4796 12.5 12.5002 13.4794 12.5002 14.6875C12.5002 15.8956 13.4796 16.875 14.6877 16.875Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})),_e||(_e=o.createElement("path",{d:"M14.6877 12.5L14.6876 9.36571C14.6875 8.3712 14.2924 7.41744 13.5892 6.71421L10.625 3.75",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})),Ze||(Ze=o.createElement("path",{d:"M10.625 6.875V3.75H13.75",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})))}var ze,Je=o.forwardRef(Ge);r.p;function Ue(){return(Ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Xe(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Ye(e,t){var r=e.title,n=e.titleId,i=Xe(e,["title","titleId"]);return o.createElement("svg",Ue({fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},i),r?o.createElement("title",{id:n},r):null,ze||(ze=o.createElement("path",{d:"M14.4524 2.89582L11.1742 6.1741L11.6161 8.3838L13.8258 8.82575L17.1041 5.54747L17.1044 5.54734C17.5102 6.50517 17.6072 7.56569 17.382 8.58126C17.1568 9.59684 16.6206 10.5169 15.848 11.2135C15.0754 11.91 14.1049 12.3484 13.0715 12.4675C12.0381 12.5866 10.9933 12.3806 10.0824 11.8781L10.0825 11.8779L5.7008 16.9507C5.3491 17.302 4.8723 17.4993 4.3752 17.4992C3.8781 17.499 3.40141 17.3015 3.04991 16.95C2.69841 16.5985 2.50087 16.1218 2.50073 15.6247C2.50059 15.1276 2.69785 14.6508 3.04915 14.2991L8.12192 9.91742L8.12181 9.91748C7.61931 9.00666 7.41327 7.96183 7.53239 6.92843C7.65151 5.89504 8.08986 4.92449 8.78641 4.15188C9.48296 3.37928 10.4031 2.84306 11.4186 2.61788C12.4342 2.39269 13.4947 2.48974 14.4526 2.89551L14.4524 2.89582Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})))}var $e,qe,Ke,Qe=o.forwardRef(Ye);r.p;function et(){return(et=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function tt(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function rt(e,t){var r=e.title,n=e.titleId,i=tt(e,["title","titleId"]);return o.createElement("svg",et({fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},i),r?o.createElement("title",{id:n},r):null,$e||($e=o.createElement("path",{d:"M7.5 16.8749H3.75C3.58424 16.8749 3.42527 16.8091 3.30806 16.6918C3.19085 16.5746 3.125 16.4157 3.125 16.2499V12.7588C3.125 12.6767 3.14117 12.5954 3.17258 12.5196C3.20398 12.4438 3.25002 12.3749 3.30806 12.3168L12.6831 2.94185C12.8003 2.82464 12.9592 2.75879 13.125 2.75879C13.2908 2.75879 13.4497 2.82464 13.5669 2.94185L17.0581 6.43296C17.1753 6.55017 17.2411 6.70915 17.2411 6.87491C17.2411 7.04067 17.1753 7.19964 17.0581 7.31685L7.5 16.8749Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})),qe||(qe=o.createElement("path",{d:"M10.625 5L15 9.375",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})),Ke||(Ke=o.createElement("path",{d:"M16.875 16.875H7.50003L3.16479 12.5398",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})))}var nt,ot,it=o.forwardRef(rt);r.p;function at(){return(at=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function ct(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function lt(e,t){var r=e.title,n=e.titleId,i=ct(e,["title","titleId"]);return o.createElement("svg",at({fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},i),r?o.createElement("title",{id:n},r):null,nt||(nt=o.createElement("path",{d:"M9.55805 5.58063L11.1049 4.03383C11.424 3.71439 11.803 3.46095 12.2201 3.288C12.6372 3.11505 13.0843 3.02598 13.5359 3.02588C13.9874 3.02577 14.4346 3.11464 14.8518 3.28739C15.269 3.46014 15.648 3.7134 15.9673 4.0327C16.2866 4.352 16.5399 4.73107 16.7127 5.14827C16.8854 5.56548 16.9743 6.01263 16.9742 6.46418C16.9741 6.91573 16.885 7.36284 16.712 7.77996C16.5391 8.19708 16.2857 8.57604 15.9662 8.89519L13.7565 11.1049C13.4373 11.4241 13.0584 11.6773 12.6413 11.8501C12.2242 12.0228 11.7772 12.1117 11.3258 12.1117C10.8744 12.1117 10.4274 12.0228 10.0103 11.8501C9.59329 11.6773 9.21434 11.4241 8.89514 11.1049",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})),ot||(ot=o.createElement("path",{d:"M10.4419 14.4195L8.89513 15.9663C8.57598 16.2858 8.19702 16.5392 7.7799 16.7121C7.36278 16.8851 6.91567 16.9742 6.46412 16.9743C6.01256 16.9744 5.56541 16.8855 5.14821 16.7128C4.73101 16.54 4.35193 16.2867 4.03264 15.9674C3.71334 15.6482 3.46008 15.2691 3.28733 14.8519C3.11458 14.4347 3.02571 13.9875 3.02582 13.536C3.02592 13.0844 3.11499 12.6373 3.28794 12.2202C3.46089 11.8031 3.71433 11.4241 4.03377 11.105L6.24348 8.89525C6.56268 8.57605 6.94163 8.32284 7.35868 8.15009C7.77574 7.97734 8.22274 7.88843 8.67416 7.88843C9.12558 7.88843 9.57258 7.97734 9.98963 8.15009C10.4067 8.32284 10.7856 8.57605 11.1048 8.89525",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})))}var st,ut=o.forwardRef(lt);r.p;function dt(e,t,r){return Object(D.jsx)(o.Fragment,{children:Object(D.jsxs)(K.a,{children:[Object(D.jsx)("span",{style:{verticalAlign:"middle"},children:r}),Object(D.jsx)("span",{style:{verticalAlign:"middle"},children:t}),e&&Object(D.jsx)(ie.a,{style:{verticalAlign:"middle"}})]})})}!function(e){e[e.GeneralSettings=0]="GeneralSettings",e[e.BlockingSettings=1]="BlockingSettings",e[e.Methods=2]="Methods",e[e.URLs=3]="URLs",e[e.Filetypes=4]="Filetypes",e[e.Headers=5]="Headers",e[e.Parameters=6]="Parameters",e[e.Signatures=7]="Signatures",e[e.BotDefence=8]="BotDefence"}(st||(st={}));var pt={style:{verticalAlign:"middle"},width:30,height:23,color:"inherit",viewport:"0 0 20 20"},jt=[{label:dt(!0,"General Settings",Object(D.jsx)(xe,Object(f.a)({},pt))),id:st.GeneralSettings},{label:dt(!1,"Blocking Settings",Object(D.jsx)(Fe,Object(f.a)({},pt))),id:st.BlockingSettings},{label:dt(!1,"Methods",Object(D.jsx)(Je,Object(f.a)({},pt))),id:st.Methods},{label:dt(!1,"URLs",Object(D.jsx)(ut,Object(f.a)({},pt))),id:st.URLs},{label:dt(!0,"File Types",Object(D.jsx)(ge,Object(f.a)({},pt))),id:st.Filetypes},{label:dt(!1,"Headers",Object(D.jsx)(Ie,Object(f.a)({},pt))),id:st.Headers},{label:dt(!1,"Parameters",Object(D.jsx)(Qe,Object(f.a)({},pt))),id:st.Parameters},{label:dt(!0,"Signatures",Object(D.jsx)(it,Object(f.a)({},pt))),id:st.Signatures},{label:dt(!1,"Bot Defence",Object(D.jsx)(de,Object(f.a)({},pt))),id:st.BotDefence}];var ft=r(27),bt=r(49),Ot=r(220),gt=r(221),ht=function(e){var t=e.rows,r=Object(o.useState)(-1),n=Object(s.a)(r,2),i=n[0],a=n[1];return Object(D.jsx)(Ot.a,{container:!0,spacing:1,children:Object(D.jsx)(Ot.a,{container:!0,item:!0,spacing:1,xs:12,children:t.map((function(e,t){return Object(D.jsxs)(o.Fragment,{children:[Object(D.jsx)(Ot.a,{container:!0,item:!0,alignItems:"center",xs:3,children:Object(D.jsx)(X.a,{color:i===t?"primary":void 0,variant:"body2",children:e.title})}),Object(D.jsx)(Ot.a,{item:!0,xs:9,children:Object(D.jsx)(gt.a,{fullWidth:!0,hiddenLabel:!0,variant:"filled",margin:"dense",onSelect:function(e){return a(t)},onBlur:function(e){return a(-1)}})})]},t)}))})})},Ct=function(){var e=h();return Object(D.jsx)(K.a,{className:e.pageContent,children:Object(D.jsx)(ht,{rows:[{title:"Policy Name",value:"policy name"},{title:"Application Language",value:"utf-8"},{title:"Enforcement Mode",value:"blocking"},{title:"Template",value:"POLICY_TEMPLATE_NGINX_BASE"}]})})},mt=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(l.a)({},st.GeneralSettings,Object(D.jsx)(Ct,{}));Object(ft.a)(this,e),this.pages=t}return Object(bt.a)(e,[{key:"createPage",value:function(e){return this.pages[e]}}]),e}(),yt=r(116),vt=r.n(yt),xt=r(94),kt=(r(161),r(162),function(e){var t=e.jsonText,r=e.onTextChange,n=Object(o.useState)(t),i=Object(s.a)(n,2),a=i[0],c=i[1];return Object(o.useEffect)((function(){c(t)}),[t]),Object(D.jsx)(vt.a,{value:a,onValueChange:function(e){e!==a&&r&&r(e),c(e)},highlight:function(e){return Object(xt.highlight)(e,xt.languages.json,"json")},padding:10,className:"container__editor",style:{fontFamily:"monospace",fontSize:12,position:"relative",overflow:"scroll"}})}),Lt=r(169),wt=r(6),Et=Object(wt.a)((function(e){return Object(O.a)({root:{width:"100%"}})}))(Lt.a),St=Object(wt.a)((function(e){return Object(O.a)({root:{margin:e.spacing(3)}})}))(K.a),Pt=function(){var e=Object(o.useState)(0),t=Object(s.a)(e,2),r=t[0],n=t[1],i=Object(I.c)((function(e){return e.policyEditorState})),a=i.currentPage,c=i.currentPolicy,l=Object(I.b)(),u=new mt;return Object(D.jsxs)(o.Fragment,{children:[Object(D.jsx)(ne,{variant:"scrollable",scrollButtons:"auto",value:r,onChange:function(e,t){n(t),l(function(e){return{type:B,currentPage:e}}(jt[t].id))},children:jt.map((function(e){var t=e.label,r=e.id;return Object(D.jsx)(oe,{label:t},r)}))}),Object(D.jsx)(Ot.a,{container:!0,spacing:1,children:Object(D.jsxs)(Ot.a,{container:!0,item:!0,spacing:1,xs:12,children:[Object(D.jsx)(Ot.a,{container:!0,item:!0,spacing:1,xs:2}),Object(D.jsx)(Ot.a,{container:!0,item:!0,spacing:1,xs:8,children:Object(D.jsxs)(K.a,{children:[Object(D.jsx)(St,{children:u.createPage(a)}),Object(D.jsx)(Et,{children:Object(D.jsx)(kt,{jsonText:JSON.stringify(c,null,2)})})]})}),Object(D.jsx)(Ot.a,{container:!0,item:!0,spacing:1,xs:2})]})})]})},Mt=function(){return Object(D.jsx)(X.a,{children:"Policy Wizard is under development"})};var It=function(){var e,t=H().currentModule,r=(e={},Object(l.a)(e,n.ApplicationPreset,Object(D.jsx)(q,{})),Object(l.a)(e,n.PolicyEditor,Object(D.jsx)(Pt,{})),Object(l.a)(e,n.PolicyWizard,Object(D.jsx)(Mt,{})),e);return Object(D.jsx)($,{children:r[t]})},Ht=r(55),Vt=r(80),Bt=r(79),Wt=r(117),At=function(){function e(t,r){Object(ft.a)(this,e),this._currentState=t,this._reducerFactory=r}return Object(bt.a)(e,[{key:"process",value:function(e){var t=this._reducerFactory[e.type];return t?Object(Wt.a)(this._currentState,(function(r){return t(r,e)})):this._currentState}}]),e}(),Nt=function(e,t){return void 0===t.currentModule||(e.currentModule=t.currentModule),e};function Rt(){return{currentModule:n.PolicyEditor}}var _t=function(e){Object(Vt.a)(r,e);var t=Object(Bt.a)(r);function r(e){return Object(ft.a)(this,r),t.call(this,e,Object(l.a)({},V,Nt))}return r}(At),Zt=function(e,t){return void 0===t.currentPage||(e.currentPage=t.currentPage),e};function Ft(){return{currentPage:st.GeneralSettings,currentPolicy:{policy:{name:"policy_name",template:{name:"POLICY_TEMPLATE_NGINX_BASE"},applicationLanguage:"utf-8",enforcementMode:"blocking"}}}}var Tt=function(e){Object(Vt.a)(r,e);var t=Object(Bt.a)(r);function r(e){return Object(ft.a)(this,r),t.call(this,e,Object(l.a)({},B,Zt))}return r}(At),Dt=Object(Ht.combineReducers)({dashboardState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Rt(),t=arguments.length>1?arguments[1]:void 0,r=new _t(e);return r.process(t)},policyEditorState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ft(),t=arguments.length>1?arguments[1]:void 0,r=new Tt(e);return r.process(t)}});var Gt="editor-state#0.1",zt=function(){function e(){Object(ft.a)(this,e)}return Object(bt.a)(e,[{key:"loadState",value:function(){try{var e=sessionStorage.getItem(Gt);return JSON.parse(e||"")}catch(t){return{dashboardState:Rt(),policyEditorState:Ft()}}}},{key:"saveState",value:function(e){try{var t=JSON.stringify(e);sessionStorage.setItem(Gt,t)}catch(r){}}}]),e}(),Jt=r(118),Ut=new zt,Xt=Ut.loadState(),Yt=Object(Jt.composeWithDevTools)({trace:!0,traceLimit:25}),$t=Object(Ht.createStore)(Dt,Xt,Yt());$t.subscribe((function(){Ut.saveState($t.getState())})),c.a.render(Object(D.jsx)(i.a.StrictMode,{children:Object(D.jsx)(I.a,{store:$t,children:Object(D.jsx)(It,{})})}),document.getElementById("root"))}},[[163,1,2]]]);
//# sourceMappingURL=main.6632f3c3.chunk.js.map