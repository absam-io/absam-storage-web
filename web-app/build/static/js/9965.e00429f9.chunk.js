"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[9965],{19965:(e,t,s)=>{s.r(t),s.d(t,{default:()=>b});var c=s(65043),n=s(89923),i=s(22166),o=s(73216),a=s(56629),l=s(53518),r=s(99161),u=s(77938),d=s(64159),_=s(39947),p=s(20554),h=s(72237),x=s(6681),C=s(70579);const S=(0,h.A)(c.lazy((()=>s.e(614).then(s.bind(s,30614))))),m=(0,h.A)(c.lazy((()=>s.e(502).then(s.bind(s,70502))))),O=(0,h.A)(c.lazy((()=>s.e(6799).then(s.bind(s,96799))))),b=()=>{const e=(0,p.jL)(),t=(0,o.g)(),s=(0,i.d4)(_.Nx),[h,b]=(0,c.useState)(!0),[A,T]=(0,c.useState)([]),[f,E]=(0,c.useState)(!1),[k,j]=(0,c.useState)(!1),[y,P]=(0,c.useState)(""),[V,B]=(0,c.useState)(!1),[I,U]=(0,c.useState)(""),[L,g]=(0,c.useState)(""),w=t.bucketName||"",K=(0,u._)(w,[r.OV.S3_GET_BUCKET_POLICY,r.OV.S3_GET_ACTIONS]),N=(0,u._)(w,[r.OV.S3_DELETE_BUCKET_POLICY]),R=(0,u._)(w,[r.OV.S3_PUT_BUCKET_POLICY,r.OV.S3_PUT_ACTIONS]);(0,c.useEffect)((()=>{s&&b(!0)}),[s,b]);const F=[{type:"delete",disableButtonFunction:()=>!N,onClick:e=>{j(!0),P(e.prefix)}},{type:"view",disableButtonFunction:()=>!R,onClick:e=>{U(e.prefix),g(e.access),B(!0)}}];(0,c.useEffect)((()=>{e((0,d.ph)("bucket_detail_prefix"))}),[]),(0,c.useEffect)((()=>{h&&(K?a.F.bucket.listAccessRulesWithBucket(w).then((e=>{T(e.data.accessRules),b(!1)})).catch((t=>{e((0,d.C9)((0,l.S)(t))),b(!1)})):b(!1))}),[h,e,K,w]);return(0,C.jsxs)(c.Fragment,{children:[f&&(0,C.jsx)(S,{modalOpen:f,onClose:()=>{E(!1),b(!0)},bucket:w}),k&&(0,C.jsx)(m,{modalOpen:k,onClose:()=>{j(!1),b(!0)},bucket:w,toDelete:y}),V&&(0,C.jsx)(O,{modalOpen:V,onClose:()=>{B(!1),b(!0)},bucket:w,toEdit:I,initial:L}),(0,C.jsx)(n._xt,{separator:!0,sx:{marginBottom:15},actions:(0,C.jsx)(u.R,{scopes:[r.OV.S3_GET_BUCKET_POLICY,r.OV.S3_PUT_BUCKET_POLICY,r.OV.S3_GET_ACTIONS,r.OV.S3_PUT_ACTIONS],resource:w,matchAll:!0,errorProps:{disabled:!0},children:(0,C.jsx)(x.A,{tooltip:"Add Access Rule",children:(0,C.jsx)(n.$nd,{id:"add-bucket-access-rule",onClick:()=>{E(!0)},label:"Add Access Rule",icon:(0,C.jsx)(n.REV,{}),variant:"callAction"})})}),children:(0,C.jsx)(n.V7x,{content:(0,C.jsxs)(c.Fragment,{children:["Setting an"," ",(0,C.jsx)("a",{href:"https://min.io/docs/minio/linux/reference/minio-mc/mc-anonymous-set.html",target:"blank",children:"Anonymous"})," ","policy allows clients to access the Bucket or prefix contents and perform actions consistent with the specified policy without authentication."]}),placement:"right",children:"Anonymous Access"})}),(0,C.jsx)(u.R,{scopes:[r.OV.S3_GET_BUCKET_POLICY,r.OV.S3_GET_ACTIONS],resource:w,errorProps:{disabled:!0},children:(0,C.jsx)(n.bQt,{itemActions:F,columns:[{label:"Prefix",elementKey:"prefix",renderFunction:e=>e||"/"},{label:"Access",elementKey:"access"}],isLoading:h,records:A||[],entityName:"Access Rules",idField:"prefix"})})]})}}}]);
//# sourceMappingURL=9965.e00429f9.chunk.js.map