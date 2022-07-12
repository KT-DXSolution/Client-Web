"use strict";(self.webpackChunkclient_web=self.webpackChunkclient_web||[]).push([[88],{9616:function(e,r,n){var t=n(1413),i=n(4925),a=n(1340),c=n(8735),o=n(184),s=["variant","children"];r.Z=function(e){var r=e.variant,n=e.children,l=(0,i.Z)(e,s),d=(0,a.mq)("Card",{variant:r});return(0,o.jsx)(c.xu,(0,t.Z)((0,t.Z)({__css:d},l),{},{children:n}))}},6954:function(e,r,n){var t=n(1413),i=n(4925),a=n(1340),c=n(8735),o=n(184),s=["variant","children"];r.Z=function(e){var r=e.variant,n=e.children,l=(0,i.Z)(e,s),d=(0,a.mq)("CardHeader",{variant:r});return(0,o.jsx)(c.xu,(0,t.Z)((0,t.Z)({__css:d},l),{},{children:n}))}},3088:function(e,r,n){n.r(r),n.d(r,{default:function(){return S}});var t=n(5861),i=n(8152),a=n(7757),c=n.n(a),o=n(2791),s=n(4569),l=n.n(s),d=n(8227),x=n(8735),u=n(9113),h=n(3853),p=n(7005),f=n(9616),g=n(6954),j=n(9686),m=n(184),v=function(e){var r=e.data,n=e.onClick,t=(0,o.useState)(!1),a=(0,i.Z)(t,2),c=a[0],s=a[1],l=(0,d.ff)("gray.100","rgba(255, 255, 255, 0.5)"),u=(0,d.ff)("gray.700","white");return(0,m.jsxs)(p.Tr,{cursor:"pointer",transition:"all .25s ease",_hover:{bg:l},borderRadius:"15px",onClick:function(){n(r.id),s(!c)},backgroundColor:c?l:"",children:[(0,m.jsx)(p.Td,{minWidth:{sm:"200px"},pr:"0px",children:(0,m.jsxs)(x.kC,{align:"center",py:".8rem",flexWrap:"nowrap",children:[(0,m.jsx)(j.qE,{src:r.imageUrl,w:"50px",borderRadius:"12px",me:"18px"}),(0,m.jsx)(x.xv,{fontSize:"md",color:u,fontWeight:"bold",children:r.name})]})}),(0,m.jsx)(p.Td,{pr:"10px",children:(0,m.jsx)(x.xv,{fontSize:"md",mr:"1rem",color:u,fontWeight:"bold",children:r.price})})]})},b=function(e){var r=e.title,n=e.data,t=e.onClick,i=(0,d.ff)("gray.700","white");return(0,m.jsxs)(f.Z,{p:"10px",height:"900px",alignItems:"center",children:[(0,m.jsx)(g.Z,{p:"20px 0px 0px 20px",children:(0,m.jsx)(x.kC,{justify:"space-between",align:"center",mb:"1rem",w:"100%",children:(0,m.jsx)(x.xv,{fontSize:"lg",color:i,fontWeight:"bold",pb:".5rem",style:{paddingTop:"10px"},children:r})})}),(0,m.jsx)(f.Z,{p:"0px",overflowX:"auto",children:(0,m.jsxs)(p.iA,{variant:"simple",color:i,maxWidth:"100%",children:[(0,m.jsx)(p.hr,{children:(0,m.jsxs)(p.Tr,{my:".8rem",ps:"0px",children:[(0,m.jsx)(p.Th,{color:"gray.400",children:"\uba54\ub274"}),(0,m.jsx)(p.Th,{color:"gray.400",children:"\uac00\uaca9"})]})}),(0,m.jsx)(p.p3,{children:n.map((function(e){return(0,m.jsx)(v,{data:e,onClick:t},e.id)}))})]})})]})},w=n(5798),y=n(5154),k=n(7805),C=n(6871),T=n(3197),Z=function(e){var r=e.title,n=e.data,t=(0,d.ff)("teal.700","white"),i=(0,C.s0)();return(0,m.jsxs)(f.Z,{p:"0px",height:"900px",alignItems:"center",children:[(0,m.jsx)(g.Z,{p:"20px 0px 0px 20px",children:(0,m.jsx)(x.kC,{justify:"space-between",align:"center",mb:"1rem",w:"100%",children:(0,m.jsx)(x.xv,{fontSize:"lg",color:t,fontWeight:"bold",pb:".5rem",style:{paddingTop:"10px"},children:r})})}),(0,m.jsxs)(p.iA,{variant:"simple",color:t,children:[(0,m.jsx)(p.hr,{children:(0,m.jsxs)(p.Tr,{my:".8rem",children:[(0,m.jsx)(p.Th,{color:"gray.400",children:"\uba54\ub274"}),(0,m.jsx)(p.Th,{color:"gray.400",children:"\uac00\uaca9"}),(0,m.jsx)(p.Th,{color:"gray.400",children:"\ud560\uc778\uc728"}),(0,m.jsx)(p.Th,{color:"gray.400",children:"\uc218\ub7c9"}),(0,m.jsx)(p.Th,{color:"gray.400",children:"\ub9cc\ub8cc\uc77c"})]})}),(0,m.jsx)(p.p3,{children:n.map((function(e){return(0,m.jsxs)(p.Tr,{children:[(0,m.jsx)(p.Td,{minWidth:{sm:"250px"},children:(0,m.jsxs)(x.kC,{align:"center",py:".8rem",minWidth:"100%",flexWrap:"nowrap",children:[(0,m.jsx)(j.qE,{src:e.imageUrl,w:"50px",borderRadius:"12px",me:"18px"}),(0,m.jsx)(x.xv,{fontSize:"md",color:t,fontWeight:"bold",children:e.name})]})}),(0,m.jsx)(p.Td,{children:(0,m.jsx)(x.xv,{fontSize:"md",color:t,fontWeight:"bold",pb:".5rem",children:e.price})}),(0,m.jsx)(p.Td,{children:(0,m.jsxs)(w.BZ,{children:[(0,m.jsx)(w.II,{type:"number",id:"discountRate",defaultValue:e.discountRate,onChange:function(r){return function(e,r){n.find((function(e){return e.id==r})).discountRate=e.target.value}(r,e.id)},style:{width:"100px",textAlign:"right"}},e.id),"%",(0,m.jsx)(w.xH,{children:"%",style:{paddingRight:"15px"}})]},e.id)}),(0,m.jsx)(p.Td,{children:(0,m.jsxs)(y.Y2,{defaultValue:e.quantity,min:1,max:100,style:{width:"100px"},onChange:function(r){return function(e,r){n.find((function(e){return e.id==r})).quantity=e}(r,e.id)},children:[(0,m.jsx)(y.zu,{}),(0,m.jsxs)(y.Fi,{children:[(0,m.jsx)(y.WQ,{}),(0,m.jsx)(y.Y_,{})]})]})}),(0,m.jsx)(p.Td,{children:(0,m.jsx)(w.II,{type:"date",defaultValue:e.expiredAt,onChange:function(r){return function(e,r){n.find((function(e){return e.id==r})).expiredAt=e.target.value}(r,e.id)}})})]},e.id)}))})]}),(0,m.jsx)(k.zx,{pos:"absolute",bottom:"10",w:"20%",h:"60px",bg:"teal.300",_hover:{bg:"teal.200"},onClick:function(){var e={headers:{Authorization:"Bearer ".concat(localStorage.getItem("apiToken")||T.k)},rejectUnauthorized:!1},r=[];n.forEach((function(e){r.push({itemId:e.id,discountRate:e.discountRate,expiredAt:e.expiredAt+"T00:00:00",quantity:e.quantity})})),console.log(r),l().post("".concat(T._,"/api/v1/manager/stocks"),r,e).then((function(e){201===e.status&&(alert("\ub4f1\ub85d\ub418\uc5c8\uc2b5\ub2c8\ub2e4"),i("/"))}))},children:"\ub4f1\ub85d"})]})},S=function(){var e=(0,d.ff)("gray.100","rgba(255, 255, 255, 0.5)"),r=(0,o.useState)(!1),n=(0,i.Z)(r,2),a=n[0],s=n[1],p=(0,o.useState)(null),g=(0,i.Z)(p,2),j=g[0],v=g[1],w=(0,o.useState)(null),y=(0,i.Z)(w,2),k=y[0],C=y[1],S=(0,o.useState)([]),R=(0,i.Z)(S,2),_=R[0],z=R[1],W=(0,o.useRef)(new Set),A=localStorage.getItem("ceoSeq");if((0,o.useEffect)((function(){var e=function(){var e=(0,t.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{v(null),C(null),s(!0),l().get("".concat(T._,"/api/v1/manager/store/").concat(A,"/item"),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("apiToken")||T.k)},rejectUnauthorized:!1}).then((function(e){e.data.data.itemList.map((function(e){e.price=e.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")})),C(e.data.data.itemList)}))}catch(r){v(r)}s(!1);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),a)return(0,m.jsx)("div",{children:"\ub85c\ub529\uc911"});if(j)return(0,m.jsx)("div",{children:"\uc5d0\ub7ec\ubc1c\uc0dd"});if(!k)return null;return(0,m.jsx)(x.kC,{alignItems:"center",justifyContent:"center",flexDirection:"column",children:(0,m.jsxs)(x.rj,{templateColumns:{sm:"1fr",lg:"1fr 0.1fr 2fr"},templateRows:{sm:"1fr auto",md:"1fr",lg:"1fr"},gap:"50px",style:{width:"100rem"},pt:"20px",mb:"50px",children:[(0,m.jsx)(f.Z,{padding:"0px",width:"100%",children:(0,m.jsx)(b,{title:"\uc6b0\ub9ac \uac00\uac8c \uba54\ub274",data:k,onClick:function(e){W.current.has(e)?W.current.delete(e):W.current.add(e),console.log(W)}})}),(0,m.jsxs)(x.xu,{w:"100%",h:"50vw",pt:"300px",children:[(0,m.jsx)(x.kC,{justify:"center",align:"center",w:"70px",h:"70px",borderRadius:"15px",cursor:"pointer",transition:"all .25s ease",mb:"24px",bg:"white",boxShadow:"lg",children:(0,m.jsx)(u.JO,{as:h.Rgz,w:"40px",h:"40px",cursor:"pointer",_hover:{filter:"brightness(120%)"},onClick:function(){var e=(new Date).getMonth()+2,r=Array.from(W.current);console.log("moveItem :",r),z(k.filter((function(e){return r.includes(e.id)})).map((function(r){return r.discountRate=10,r.expiredAt="2022-0".concat(e,"-01"),r.quantity=1,r})))}})}),(0,m.jsx)(x.kC,{justify:"center",align:"center",w:"70px",h:"70px",borderRadius:"15px",cursor:"pointer",transition:"all .25s ease",_hover:{bg:e},mb:"24px",bg:"white",boxShadow:"lg",children:(0,m.jsx)(u.JO,{as:h.Ao2,w:"40px",h:"40px",cursor:"pointer",_hover:{filter:"brightness(120%)"}})})]}),(0,m.jsx)(Z,{title:"\ub4f1\ub85d\ub420 \uc7ac\uace0",amount:30,captions:["\uba54\ub274","\ud560\uc778\uc728","\uac00\uaca9","\ub9cc\ub8cc\uc77c"],data:_})]})})}}}]);
//# sourceMappingURL=88.22a09005.chunk.js.map