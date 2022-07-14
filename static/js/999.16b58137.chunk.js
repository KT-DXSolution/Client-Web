"use strict";(self.webpackChunkclient_web=self.webpackChunkclient_web||[]).push([[999],{9616:function(e,t,n){var r=n(1413),i=n(4925),o=n(1340),a=n(8735),c=n(3329),s=["variant","children"];t.Z=function(e){var t=e.variant,n=e.children,l=(0,i.Z)(e,s),u=(0,o.mq)("Card",{variant:t});return(0,c.jsx)(a.xu,(0,r.Z)((0,r.Z)({__css:u},l),{},{children:n}))}},6954:function(e,t,n){var r=n(1413),i=n(4925),o=n(1340),a=n(8735),c=n(3329),s=["variant","children"];t.Z=function(e){var t=e.variant,n=e.children,l=(0,i.Z)(e,s),u=(0,o.mq)("CardHeader",{variant:t});return(0,c.jsx)(a.xu,(0,r.Z)((0,r.Z)({__css:u},l),{},{children:n}))}},1257:function(e,t,n){n.d(t,{Z:function(){return S}});var r=n(5861),i=n(8152),o=n(7757),a=n.n(o),c=n(8227),s=n(8735),l=n(7805),u=n(7005),d=n(9616),p=n(6954),h=n(9686),f=n(7279),x=n(2791),m=n(3329);var g=function(e){var t=e.name,n=e.price,r=e.discountPrice,i=e.progression,o=e.imageUrl,a=e.expiredAt,l=e.purchasers,d=(0,c.ff)("gray.700","white");return(0,m.jsxs)(u.Tr,{children:[(0,m.jsx)(u.Td,{minWidth:{sm:"250px"},pl:"0px",children:(0,m.jsxs)(s.kC,{align:"center",py:".8rem",minWidth:"100%",flexWrap:"nowrap",children:[(0,m.jsx)(h.qE,{src:o,w:"50px",borderRadius:"12px",me:"18px"}),(0,m.jsx)(s.xv,{fontSize:"md",color:d,fontWeight:"bold",minWidth:"100%",children:t})]})}),(0,m.jsx)(u.Td,{children:(0,m.jsx)(h.HE,{size:"sm",max:5,children:l.map((function(e){return(0,m.jsx)(h.qE,{name:e.purchaser.name,src:e.purchaser.thumbnail,_hover:{zIndex:"3",cursor:"pointer"}},e.id)}))})}),(0,m.jsxs)(u.Td,{children:[(0,m.jsx)(s.xv,{fontSize:"md",color:"lightgray",pb:".5rem",children:n}),(0,m.jsx)(s.xv,{fontSize:"lg",color:d,fontWeight:"bold",pb:".5rem",paddingLeft:"20px",children:"\u2192 "+r})]}),(0,m.jsx)(u.Td,{children:(0,m.jsxs)(s.kC,{direction:"column",children:[(0,m.jsx)(s.xv,{fontSize:"md",color:"teal.300",fontWeight:"bold",pb:".2rem",children:"".concat(i,"%")}),(0,m.jsx)(f.Ex,{colorScheme:100===i?"teal":"cyan",size:"xs",value:i,borderRadius:"15px"})]})}),(0,m.jsx)(u.Td,{minWidth:{sm:"150px"},children:a})]})},v=n(3504),j=n(4569),b=n.n(j),k=n(3197),S=function(e){var t=e.title,n=e.captions,o=e.notification,h=e.option,f=(0,c.ff)("gray.700","white"),j=(0,x.useState)(!1),S=(0,i.Z)(j,2),y=S[0],w=S[1],Z=(0,x.useState)(null),z=(0,i.Z)(Z,2),I=z[0],C=z[1],_=(0,x.useState)([]),T=(0,i.Z)(_,2),W=T[0],A=T[1],E=localStorage.getItem("ceoSeq");function U(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}var B=function(){var e=(0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C(null),w(!0),e.abrupt("return",b().get("".concat(k._,"/api/v1/manager/store/").concat(E,"/item"),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("apiToken")||k.k)},rejectUnauthorized:!1}).then((function(e){return e.data.data.itemList})));case 6:e.prev=6,e.t0=e.catch(0),C(e.t0);case 9:return e.prev=9,w(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=(0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C(null),w(!0),e.abrupt("return",b().get("".concat(k._,"/api/v1/manager/store/").concat(E,"/stock"),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("apiToken")||k.k)},rejectUnauthorized:!1}).then((function(e){return e.data.data})));case 6:e.prev=6,e.t0=e.catch(0),C(e.t0);case 9:return e.prev=9,w(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=(0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C(null),w(!0),e.abrupt("return",b().get("".concat(k._,"/api/v1/manager/store/").concat(E,"/order"),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("apiToken")||k.k)},rejectUnauthorized:!1}).then((function(e){return console.log(e.data.data),e.data.data})));case 6:e.prev=6,e.t0=e.catch(0),C(e.t0);case 9:return e.prev=9,w(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})));return function(){return e.apply(this,arguments)}}();if((0,x.useEffect)((function(){!function(){var e=[],t=[],n=[];Promise.all([B(),P(),D()]).then((function(r){var o=(0,i.Z)(r,3);e=o[0],t=o[1],n=o[2];var a=[];t.forEach((function(t){a=n.filter((function(e){return e.stockId===t.stockId})),Object.assign(t,e.find((function(e){return e.id===t.itemId}))).purchasers=a})),t.sort((function(e,t){return t.purchasers.length-e.purchasers.length})),console.log(t),A(t)}))}()}),[o]),y)return(0,m.jsx)("div",{children:"\ub85c\ub529\uc911"});if(I)return(0,m.jsx)("div",{children:"\uc5d0\ub7ec\ubc1c\uc0dd"});return(0,m.jsxs)(d.Z,{p:"36px",overflowX:{sm:"scroll",xl:"hidden"},children:[(0,m.jsx)(p.Z,{p:"12px 0px 28px 10px",children:(0,m.jsxs)(s.kC,{justify:"space-between",align:"center",mb:"1rem",w:"100%",children:[(0,m.jsxs)(s.kC,{direction:"column",children:[(0,m.jsx)(s.xv,{fontSize:"lg",color:f,fontWeight:"bold",pb:".5rem",style:{padding:"0"},children:t}),(0,m.jsxs)(s.xv,{fontSize:"sm",color:"gray.400",fontWeight:"normal",children:["\ud604\uc7ac \ub4f1\ub85d\ub41c \uc7ac\uace0 \uc218\ub7c9"," ",(0,m.jsx)(s.xv,{fontWeight:"bold",as:"span",color:"teal.300",children:"".concat(W.length)})," ","\uac74."]})]}),(0,m.jsx)(v.rU,{to:"/registerStock",children:h&&(0,m.jsx)(l.zx,{colorScheme:"teal",variant:"solid",fontSize:"s",p:"8px 32px",style:{cursor:"pointer"},children:"\ub4f1\ub85d"})})]})}),(0,m.jsx)(d.Z,{style:{padding:"0px",margin:"0px",height:"750px",overflowY:"scroll",overflowX:"auto",WebkitScrollBar:"display:none"},children:(0,m.jsxs)(u.iA,{variant:"simple",color:f,children:[(0,m.jsx)(u.hr,{children:(0,m.jsx)(u.Tr,{my:".8rem",ps:"0px",children:n.map((function(e,t){return(0,m.jsx)(u.Th,{color:"gray.400",ps:0===t?"0px":null,children:e},t)}))})}),(0,m.jsx)(u.p3,{overflow:"auto",overflowX:"hidden",height:"700px",children:W.map((function(e){return(0,m.jsx)(g,{name:e.name,price:U(e.price),discountPrice:U(e.price*(100-e.discountRate)/100),progression:Math.round((e.registeredQuantity-e.quantity)/e.registeredQuantity*100)||0,imageUrl:e.imageUrl,expiredAt:e.expiredAt.substr(0,10),purchasers:e.purchasers},e.stockId)}))})]})})]})}},3999:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});var r=n(5861),i=n(8152),o=n(7757),a=n.n(o),c=n(8227),s=n(8735),l=n(9616),u=n(1413),d=n(4925),p=n(1340),h=n(3329),f=["variant","children"];var x=function(e){var t=e.variant,n=e.children,r=(0,d.Z)(e,f),i=(0,p.mq)("CardBody",{variant:t});return(0,h.jsx)(s.xu,(0,u.Z)((0,u.Z)({__css:i},r),{},{children:n}))},m=n(6954),g=n(9113),v=n(2791);var j=function(e){var t=e.logo,n=e.title,r=e.date,i=e.color,o=e.index,a=e.arrLength,l=(0,c.ff)("gray.700","white.300"),u=(0,c.ff)("white.300","gray.700");return(0,h.jsxs)(s.kC,{alignItems:"center",minH:"78px",justifyContent:"start",mb:"5px",children:[(0,h.jsxs)(s.kC,{direction:"column",h:"100%",children:[(0,h.jsx)(g.JO,{as:t,bg:u,color:i,h:"30px",w:"26px",pe:"6px",zIndex:"1",position:"relative",right:"rtl"===document.documentElement.dir?"-8px":"",left:"rtl"===document.documentElement.dir?"":"-8px"}),(0,h.jsx)(s.xu,{w:"2px",bg:"gray.200",h:o===a-1?"15px":"100%"})]}),(0,h.jsxs)(s.kC,{direction:"column",justifyContent:"flex-start",h:"100%",children:[(0,h.jsx)(s.xv,{fontSize:"sm",color:l,fontWeight:"bold",children:n}),(0,h.jsx)(s.xv,{fontSize:"sm",color:"gray.400",fontWeight:"normal",children:r})]})]})},b=n(4569),k=n.n(b),S=n(6355),y=n(3197),w=function(e){var t=e.title,n=e.amount,o=e.notification,u=(0,c.ff)("gray.700","white"),d=(0,v.useState)(!1),p=(0,i.Z)(d,2),f=(p[0],p[1]),g=(0,v.useState)(null),b=(0,i.Z)(g,2),w=(b[0],b[1]),Z=(0,v.useState)([]),z=(0,i.Z)(Z,2),I=z[0],C=z[1],_=localStorage.getItem("ceoSeq"),T=function(){var e=(0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(null),f(!0),e.abrupt("return",k().get("".concat(y._,"/api/v1/manager/store/").concat(_,"/item"),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("apiToken")||y.k)},rejectUnauthorized:!1}).then((function(e){return e.data.data.itemList})));case 6:e.prev=6,e.t0=e.catch(0),w(e.t0);case 9:return e.prev=9,f(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=(0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(null),f(!0),e.abrupt("return",k().get("".concat(y._,"/api/v1/manager/store/").concat(_,"/stock"),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("apiToken")||y.k)},rejectUnauthorized:!1}).then((function(e){return e.data.data})));case 6:e.prev=6,e.t0=e.catch(0),w(e.t0);case 9:return e.prev=9,f(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=(0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(null),f(!0),e.abrupt("return",k().get("".concat(y._,"/api/v1/manager/store/").concat(_,"/order"),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("apiToken")||y.k)},rejectUnauthorized:!1}).then((function(e){return e.data.data})));case 6:e.prev=6,e.t0=e.catch(0),w(e.t0);case 9:return e.prev=9,f(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})));return function(){return e.apply(this,arguments)}}();return(0,v.useEffect)((function(){!function(){var e=[],t=[],n=[];Promise.all([T(),W(),A()]).then((function(r){var o=(0,i.Z)(r,3);e=o[0],t=o[1],n=o[2];var a,c,s,l,u=[],d=[S.Z3q,S.gtO,S.FeP,S.ypE],p=["teal.300","orange","blue.400","orange.300"];n.sort((function(e,t){return t.id-e.id})),n.map((function(n){a=n.purchaser.name,c=e.find((function(e){return e.id==t.find((function(e){return e.stockId==n.stockId})).itemId})).name,s=n.quantity,l=n.createdAt.substr(5,11).replace("T"," ").replace("-","/"),u.push({logo:d[n.id%4],title:"[\uc8fc\ubb38] ".concat(c," ").concat(s,"\uac1c (").concat(a,")"),date:l,color:p[n.id%4]})})),console.log("\uc8fc\ubb38\ud604\ud669",u),C(u)}))}()}),[o]),(0,h.jsxs)(l.Z,{maxH:"100%",children:[(0,h.jsx)(m.Z,{p:"22px 0px 35px 14px",children:(0,h.jsxs)(s.kC,{direction:"column",children:[(0,h.jsx)(s.xv,{fontSize:"lg",color:u,fontWeight:"bold",pb:".5rem",children:t}),(0,h.jsxs)(s.xv,{fontSize:"sm",color:"gray.400",fontWeight:"normal",children:[(0,h.jsx)(s.xv,{fontWeight:"bold",as:"span",color:"teal.300",children:"".concat(n,"%")})," ","this month."]})]})}),(0,h.jsx)(x,{ps:"20px",pe:"0px",position:"relative",height:"750px",overflowY:"scroll",overflowX:"hidden",children:(0,h.jsx)(s.kC,{direction:"column",children:I.map((function(e,t,n){return(0,h.jsx)(j,{logo:e.logo,title:e.title,date:e.date,color:e.color,index:t,arrLength:n.length},t)}))})})]})},Z=n(1257),z=n(7957),I=n(487),C=n(2426);n(66);C.Z.initializeApp({apiKey:"AIzaSyADWtr1syccBY5AN0WUWA39Jl9V0VvDKUQ",authDomain:"closing-sale.firebaseapp.com",projectId:"closing-sale",storageBucket:"closing-sale.appspot.com",messagingSenderId:"1001500685848",appId:"1:1001500685848:web:4a4b57a74c5bf0cb8d356d",measurementId:"G-H12V3N2XDH"});var _={NODE_ENV:"production",PUBLIC_URL:"/Client-Web",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.PUBLIC_VAPID_KEY,T=C.Z.messaging(),W=!1,A=function(){var e=(0,z.pm)(),t=new Audio(I),n=(0,v.useState)(!1),o=(0,i.Z)(n,2),c=(o[0],o[1]),l=(0,v.useState)(!1),u=(0,i.Z)(l,2),d=u[0],p=u[1],f=(0,v.useState)({title:"",body:""}),x=(0,i.Z)(f,2),m=x[0],g=x[1];return new Promise((function(e){T.onMessage((function(t){e(t)}))})).then((function(e){c(!0),g({title:e.notification.title,body:e.notification.body}),console.log("receive at App.js : ",e)})).catch((function(e){return console.log("failed: ",e)})),(0,v.useEffect)((function(){t.muted=!1,m&&m.title&&(t.play(),e({title:m.title,description:m.body,status:"success",duration:9e3,isClosable:!0,position:"top-right"})),console.log(m)}),[m]),(0,v.useEffect)((0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d||new Promise((function(e){navigator.serviceWorker.register("".concat("/Client-Web","/firebase-messaging-sw.js")).then((function(t){W||(T.useServiceWorker(t),W=!0),T.getToken({vapidKey:_}).then((function(t){e(t)}))}))})).then((function(e){console.log("token:",e);var t={pushId:e};fetch("".concat(y._,"/api/v1/manager/pushid"),{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("apiToken")||y.k)},body:JSON.stringify(t)}).then((function(e){console.log("send token status",e.status),p(!0)}))}));case 1:case"end":return e.stop()}}),e)}))),[]),(0,h.jsx)(s.kC,{flexDirection:"column",pt:{md:"10px"},style:{alignItems:"center"},children:(0,h.jsxs)(s.rj,{templateColumns:{sm:"1fr",md:"1fr 1fr",lg:"2fr 1fr"},templateRows:{sm:"1fr auto",md:"1fr",lg:"1fr"},gap:"24px",style:{width:"85vw"},children:[(0,h.jsx)(Z.Z,{title:"\uc6b0\ub9ac \uac00\uac8c \uc7ac\uace0 \ud604\ud669",captions:["\uba54\ub274","\uc8fc\ubb38 \uace0\uac1d","\uac00\uaca9","\ud310\ub9e4\uc728","\ub9c8\uac10\uc2dc\uac04"],notification:m,option:!0}),(0,h.jsx)(w,{title:"\uc2e4\uc2dc\uac04 \uc8fc\ubb38 \ud604\ud669",amount:30,notification:m})]})})}},487:function(e,t,n){e.exports=n.p+"static/media/MP_TaDa.915994bf46ea16ab5998.mp3"}}]);
//# sourceMappingURL=999.16b58137.chunk.js.map