"use strict";(self.webpackChunkclient_web=self.webpackChunkclient_web||[]).push([[599],{9616:function(e,r,n){var t=n(1413),i=n(4925),a=n(1340),o=n(8735),s=n(3329),c=["variant","children"];r.Z=function(e){var r=e.variant,n=e.children,l=(0,i.Z)(e,c),u=(0,a.mq)("Card",{variant:r});return(0,s.jsx)(o.xu,(0,t.Z)((0,t.Z)({__css:u},l),{},{children:n}))}},6954:function(e,r,n){var t=n(1413),i=n(4925),a=n(1340),o=n(8735),s=n(3329),c=["variant","children"];r.Z=function(e){var r=e.variant,n=e.children,l=(0,i.Z)(e,c),u=(0,a.mq)("CardHeader",{variant:r});return(0,s.jsx)(o.xu,(0,t.Z)((0,t.Z)({__css:u},l),{},{children:n}))}},1257:function(e,r,n){n.d(r,{Z:function(){return w}});var t=n(5861),i=n(8152),a=n(7757),o=n.n(a),s=n(8227),c=n(8735),l=n(7805),u=n(7005),d=n(9616),h=n(6954),p=n(9686),f=n(7279),m=n(2791),x=n(3329);var v=function(e){var r=e.name,n=e.price,t=e.discountPrice,i=e.progression,a=e.imageUrl,o=e.expiredAt,l=e.purchasers,d=(0,s.ff)("gray.700","white");return(0,x.jsxs)(u.Tr,{children:[(0,x.jsx)(u.Td,{minWidth:{sm:"250px"},pl:"0px",children:(0,x.jsxs)(c.kC,{align:"center",py:".8rem",minWidth:"100%",flexWrap:"nowrap",children:[(0,x.jsx)(p.qE,{src:a,w:"50px",borderRadius:"12px",me:"18px"}),(0,x.jsx)(c.xv,{fontSize:"md",color:d,fontWeight:"bold",minWidth:"100%",children:r})]})}),(0,x.jsx)(u.Td,{children:(0,x.jsx)(p.HE,{size:"sm",max:5,children:l.map((function(e){return(0,x.jsx)(p.qE,{name:e.purchaser.name,src:e.purchaser.thumbnail,_hover:{zIndex:"3",cursor:"pointer"}},e.id)}))})}),(0,x.jsxs)(u.Td,{children:[(0,x.jsx)(c.xv,{fontSize:"md",color:"lightgray",pb:".5rem",children:n}),(0,x.jsx)(c.xv,{fontSize:"lg",color:d,fontWeight:"bold",pb:".5rem",paddingLeft:"20px",children:"\u2192 "+t})]}),(0,x.jsx)(u.Td,{children:(0,x.jsxs)(c.kC,{direction:"column",children:[(0,x.jsx)(c.xv,{fontSize:"md",color:"teal.300",fontWeight:"bold",pb:".2rem",children:"".concat(i,"%")}),(0,x.jsx)(f.Ex,{colorScheme:100===i?"teal":"cyan",size:"xs",value:i,borderRadius:"15px"})]})}),(0,x.jsx)(u.Td,{minWidth:{sm:"150px"},children:o})]})},g=n(3504),b=n(6030),j=n(4569),y=n.n(j),k=n(3197),w=function(e){var r=e.title,n=e.captions,a=e.notification,p=e.option,f=(0,s.ff)("gray.700","white"),j=(0,m.useState)(!1),w=(0,i.Z)(j,2),S=w[0],z=w[1],T=(0,m.useState)(null),Z=(0,i.Z)(T,2),_=Z[0],I=Z[1],C=(0,m.useState)([]),E=(0,i.Z)(C,2),W=E[0],A=E[1],R=(0,b.v9)((function(e){return e.auth}));function P(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}var q=function(){var e=(0,t.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,I(null),z(!0),e.abrupt("return",y().get("".concat(k._,"/api/v1/manager/store/").concat(R.ceoSeq,"/item"),{headers:{Authorization:"Bearer ".concat(R.apiToken)},rejectUnauthorized:!1}).then((function(e){return e.data.data.itemList})));case 6:e.prev=6,e.t0=e.catch(0),I(e.t0);case 9:return e.prev=9,z(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=(0,t.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,I(null),z(!0),e.abrupt("return",y().get("".concat(k._,"/api/v1/manager/store/").concat(R.ceoSeq,"/stock"),{headers:{Authorization:"Bearer ".concat(R.apiToken)},rejectUnauthorized:!1}).then((function(e){return e.data.data})));case 6:e.prev=6,e.t0=e.catch(0),I(e.t0);case 9:return e.prev=9,z(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=(0,t.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,I(null),z(!0),e.abrupt("return",y().get("".concat(k._,"/api/v1/manager/store/").concat(R.ceoSeq,"/order"),{headers:{Authorization:"Bearer ".concat(R.apiToken)},rejectUnauthorized:!1}).then((function(e){return console.log(e.data.data),e.data.data})));case 6:e.prev=6,e.t0=e.catch(0),I(e.t0);case 9:return e.prev=9,z(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})));return function(){return e.apply(this,arguments)}}();if((0,m.useEffect)((function(){!function(){var e=[],r=[],n=[];Promise.all([q(),D(),U()]).then((function(t){var a=(0,i.Z)(t,3);e=a[0],r=a[1],n=a[2];var o=[];r.forEach((function(r){o=n.filter((function(e){return e.stockId===r.stockId})),Object.assign(r,e.find((function(e){return e.id===r.itemId}))).purchasers=o})),r.sort((function(e,r){return r.purchasers.length-e.purchasers.length})),console.log(r),A(r)}))}()}),[a]),S)return(0,x.jsx)("div",{children:"\ub85c\ub529\uc911"});if(_)return(0,x.jsx)("div",{children:"\uc5d0\ub7ec\ubc1c\uc0dd"});return(0,x.jsxs)(d.Z,{p:"36px",overflowX:{sm:"scroll",xl:"hidden"},children:[(0,x.jsx)(h.Z,{p:"12px 0px 28px 10px",children:(0,x.jsxs)(c.kC,{justify:"space-between",align:"center",mb:"1rem",w:"100%",children:[(0,x.jsxs)(c.kC,{direction:"column",children:[(0,x.jsx)(c.xv,{fontSize:"lg",color:f,fontWeight:"bold",pb:".5rem",style:{padding:"0"},children:r}),(0,x.jsxs)(c.xv,{fontSize:"sm",color:"gray.400",fontWeight:"normal",children:["\ud604\uc7ac \ub4f1\ub85d\ub41c \uc7ac\uace0 \uc218\ub7c9"," ",(0,x.jsx)(c.xv,{fontWeight:"bold",as:"span",color:"teal.300",children:"".concat(W.length)})," ","\uac74."]})]}),(0,x.jsx)(g.rU,{to:"/registerStock",children:p&&(0,x.jsx)(l.zx,{colorScheme:"teal",variant:"solid",fontSize:"s",p:"8px 32px",style:{cursor:"pointer"},children:"\ub4f1\ub85d"})})]})}),(0,x.jsx)(d.Z,{style:{padding:"0px",margin:"0px",height:"750px",overflowY:"scroll",overflowX:"auto",WebkitScrollBar:"display:none"},children:(0,x.jsxs)(u.iA,{variant:"simple",color:f,children:[(0,x.jsx)(u.hr,{children:(0,x.jsx)(u.Tr,{my:".8rem",ps:"0px",children:n.map((function(e,r){return(0,x.jsx)(u.Th,{color:"gray.400",ps:0===r?"0px":null,children:e},r)}))})}),(0,x.jsx)(u.p3,{overflow:"auto",overflowX:"hidden",height:"700px",children:W.map((function(e){return(0,x.jsx)(v,{name:e.name,price:P(e.price),discountPrice:P(e.price*(100-e.discountRate)/100),progression:Math.round((e.registeredQuantity-e.quantity)/e.registeredQuantity*100)||0,imageUrl:e.imageUrl,expiredAt:e.expiredAt.substr(0,10),purchasers:e.purchasers},e.stockId)}))})]})})]})}},4599:function(e,r,n){n.r(r);n(2791);var t=n(1257),i=n(8735),a=n(3329);r.default=function(){return(0,a.jsx)(i.kC,{flexDirection:"column",pt:{md:"10px"},style:{alignItems:"center"},children:(0,a.jsx)(i.rj,{templateColumns:{sm:"1fr",md:"1fr ",lg:"1fr"},templateRows:{sm:"1fr auto",md:"1fr",lg:"1fr"},gap:"24px",style:{width:"85vw"},children:(0,a.jsx)(t.Z,{title:"\uc8fc\ubb38 \ud604\ud669",captions:["\uba54\ub274","\uc8fc\ubb38 \uace0\uac1d","\uac00\uaca9","\ud310\ub9e4\uc728","\ub9c8\uac10\uc2dc\uac04"],option:!1})})})}},7279:function(e,r,n){n.d(r,{Ex:function(){return j}});var t=n(2554),i=n(1340),a=n(6134),o=n(2791);function s(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}function c(){return c=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},c.apply(this,arguments)}(0,t.F4)({"0%":{strokeDasharray:"1, 400",strokeDashoffset:"0"},"50%":{strokeDasharray:"400, 400",strokeDashoffset:"-100"},"100%":{strokeDasharray:"400, 400",strokeDashoffset:"-260"}});var l=(0,t.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),u=(0,t.F4)({"0%":{left:"-40%"},"100%":{left:"100%"}}),d=(0,t.F4)({from:{backgroundPosition:"1rem 0"},to:{backgroundPosition:"0 0"}});function h(e){var r=e.value,n=void 0===r?0:r,t=e.min,i=e.max,o=e.valueText,s=e.getValueText,c=e.isIndeterminate,l=(0,a.Rg)(n,t,i);return{bind:{"data-indeterminate":c?"":void 0,"aria-valuemax":i,"aria-valuemin":t,"aria-valuenow":c?void 0:n,"aria-valuetext":function(){if(null!=n)return(0,a.mf)(s)?s(n,l):o}(),role:"progressbar"},percent:l,value:n}}var p=["size","isIndeterminate"],f=function(e){return o.createElement(i.m$.circle,c({cx:50,cy:50,r:42,fill:"transparent"},e))};a.Ts&&(f.displayName="Circle");var m=function(e){var r=e.size,n=e.isIndeterminate,t=s(e,p);return o.createElement(i.m$.svg,c({viewBox:"0 0 100 100",__css:{width:r,height:r,animation:n?l+" 2s linear infinite":void 0}},t))};a.Ts&&(m.displayName="Shape");a.Ts;var x=(0,i.m$)("div",{baseStyle:{fontSize:"0.24em",top:"50%",left:"50%",width:"100%",textAlign:"center",position:"absolute",transform:"translate(-50%, -50%)"}});a.Ts&&(x.displayName="CircularProgressLabel");var v=["min","max","value","isIndeterminate"],g=["value","min","max","hasStripe","isAnimated","children","borderRadius","isIndeterminate","aria-label","aria-labelledby"];a.Ts;var b=function(e){var r=e.min,n=e.max,t=e.value,a=e.isIndeterminate,l=s(e,v),u=h({value:t,min:r,max:n,isIndeterminate:a}),d=c({height:"100%"},(0,i.yK)().filledTrack);return o.createElement(i.m$.div,c({style:c({width:u.percent+"%"},l.style)},u.bind,l,{__css:d}))},j=function(e){var r,n=(0,i.Lr)(e),t=n.value,a=n.min,l=void 0===a?0:a,h=n.max,p=void 0===h?100:h,f=n.hasStripe,m=n.isAnimated,x=n.children,v=n.borderRadius,j=n.isIndeterminate,y=n["aria-label"],k=n["aria-labelledby"],w=s(n,g),S=(0,i.jC)("Progress",e),z=null!=v?v:null==(r=S.track)?void 0:r.borderRadius,T=c({},!j&&f&&m&&{animation:d+" 1s linear infinite"},j&&{position:"absolute",willChange:"left",minWidth:"50%",animation:u+" 1s ease infinite normal none running"}),Z=c({overflow:"hidden",position:"relative"},S.track);return o.createElement(i.m$.div,c({borderRadius:z,__css:Z},w),o.createElement(i.Fo,{value:S},o.createElement(b,{"aria-label":y,"aria-labelledby":k,min:l,max:p,value:t,isIndeterminate:j,css:T,borderRadius:z}),x))};a.Ts&&(j.displayName="Progress")}}]);
//# sourceMappingURL=599.9b8b2ed9.chunk.js.map