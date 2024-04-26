"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[3527,8823],{18823:(e,s,t)=>{t.r(s),t.d(s,{default:()=>x});var n=t(65043),a=t(58661),r=t(89923),i=t(56483),c=t(64159),o=t(20554),l=t(56629),d=t(53518),u=t(70579);const x=e=>{let{closeDeleteModalAndRefresh:s,deleteOpen:t,selectedServiceAccount:x}=e;const h=(0,o.jL)(),[p,m]=(0,n.useState)(!1);if(!x)return null;return(0,u.jsx)(a.A,{title:"Delete Access Key",confirmText:"Delete",isOpen:t,titleIcon:(0,u.jsx)(r.xWY,{}),isLoading:p,onConfirm:()=>{m(!0),l.F.serviceAccounts.deleteServiceAccount((0,i.nf)(x)).then((e=>{s(!0)})).catch((async e=>{const t=await e.json();h((0,c.C9)((0,d.S)(t))),s(!1)})).finally((()=>m(!1)))},onClose:()=>s(!1),confirmationContent:(0,u.jsxs)(n.Fragment,{children:["Are you sure you want to delete Access Key"," ",(0,u.jsx)("b",{style:{maxWidth:"200px",whiteSpace:"normal",wordWrap:"break-word"},children:x}),"?"]})})}},78619:(e,s,t)=>{t.d(s,{A:()=>A});var n=t(65043),a=t(33097),r=t.n(a),i=t(94574),c=t(89923),o=t(94141),l=t(61476),d=t.n(l),u=t(64159),x=t(20554),h=t(70579);const p=e=>{let{label:s="",value:t=""}=e;const n=(0,x.jL)();return(0,h.jsxs)(c.azJ,{sx:{marginTop:12},children:[(0,h.jsx)(c.l1Y,{children:s}),(0,h.jsx)(c.EmB,{actionButton:(0,h.jsx)(d(),{text:t,children:(0,h.jsx)(c.$nd,{id:"copy-path",variant:"regular",onClick:()=>{n((0,u.h0)("".concat(s," copied to clipboard")))},style:{marginRight:"5px",width:"28px",height:"28px",padding:"0px"},icon:(0,h.jsx)(c.TdU,{})})}),children:t})]})};var m=t(6681),j=t(77403);const y=i.Ay.div((e=>{let{theme:s}=e;return{color:r()(s,"signalColors.danger","#C51B3F"),fontSize:".85rem",margin:".5rem 0 .5rem 0",display:"flex",alignItems:"center","& svg ":{marginRight:".3rem",height:16,width:16}}})),g=(e,s)=>{let t=document.createElement("a");t.setAttribute("href","data:text/plain;charset=utf-8,"+s),t.setAttribute("download",e),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)},A=e=>{let{newServiceAccount:s,open:t,closeModal:a,entity:i}=e;if(!s)return null;const l=r()(s,"console",null),d=r()(s,"idp",!1);return(0,h.jsx)(o.A,{modalOpen:t,onClose:()=>{a()},title:"New ".concat(i," Created"),titleIcon:(0,h.jsx)(c.kQt,{}),children:(0,h.jsxs)(c.xA9,{container:!0,children:[(0,h.jsxs)(c.xA9,{item:!0,xs:12,children:["A new ",i," has been created with the following details:",!d&&l&&(0,h.jsx)(n.Fragment,{children:(0,h.jsxs)(c.xA9,{item:!0,xs:12,sx:{overflowY:"auto",maxHeight:350},children:[(0,h.jsx)(c.azJ,{sx:{padding:".8rem 0 0 0",fontWeight:600,fontSize:".9rem"},children:"Console Credentials"}),Array.isArray(l)&&l.map(((e,s)=>(0,h.jsxs)(n.Fragment,{children:[(0,h.jsx)(p,{label:"Access Key",value:e.accessKey}),(0,h.jsx)(p,{label:"Secret Key",value:e.secretKey})]}))),!Array.isArray(l)&&(0,h.jsxs)(n.Fragment,{children:[(0,h.jsx)(p,{label:"Access Key",value:l.accessKey}),(0,h.jsx)(p,{label:"Secret Key",value:l.secretKey})]})]})}),(null===l||void 0===l)&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(p,{label:"Access Key",value:s.accessKey||""}),(0,h.jsx)(p,{label:"Secret Key",value:s.secretKey||""})]}),d?(0,h.jsx)(y,{children:"Please Login via the configured external identity provider."}):(0,h.jsxs)(y,{children:[(0,h.jsx)(c.cJw,{}),(0,h.jsx)("span",{children:"Write these down, as this is the only time the secret will be displayed."})]})]}),(0,h.jsx)(c.xA9,{item:!0,xs:12,sx:{...j.Uz.modalButtonBar},children:!d&&(0,h.jsxs)(n.Fragment,{children:[(0,h.jsx)(m.A,{tooltip:"Download credentials in a JSON file formatted for import using mc alias import. This will only include the default login credentials.",children:(0,h.jsx)(c.$nd,{id:"download-button",label:"Download for import",onClick:()=>{let e={};if(l)if(Array.isArray(l)){e=l.map((e=>({url:e.url,accessKey:e.accessKey,secretKey:e.secretKey,api:"s3v4",path:"auto"})))[0]}else e={url:l.url,accessKey:l.accessKey,secretKey:l.secretKey,api:"s3v4",path:"auto"};else e={url:s.url,accessKey:s.accessKey,secretKey:s.secretKey,api:"s3v4",path:"auto"};g("credentials.json",JSON.stringify({...e}))},icon:(0,h.jsx)(c.s3U,{}),variant:"callAction"})}),Array.isArray(l)&&l.length>1&&(0,h.jsx)(m.A,{tooltip:"Download all access credentials to a JSON file. NOTE: This file is not formatted for import using mc alias import. If you plan to import this alias from the file, please use the Download for Import button. ",children:(0,h.jsx)(c.$nd,{id:"download-all-button",label:"Download all access credentials",onClick:()=>{let e={};if(l&&Array.isArray(l)&&l.length>1){e=l.map((e=>({accessKey:e.accessKey,secretKey:e.secretKey})))}g("all_credentials.json",JSON.stringify({...e}))},icon:(0,h.jsx)(c.s3U,{}),variant:"callAction",color:"primary"})})]})})]})})}},11441:(e,s,t)=>{t.d(s,{A:()=>i});t(65043);var n=t(94574),a=t(70579);const r=n.Ay.h1((()=>({padding:0,margin:0,fontSize:".9rem"}))),i=e=>{let{children:s}=e;return(0,a.jsx)(r,{children:s})}},42967:(e,s,t)=>{t.d(s,{A:()=>h});var n=t(65043),a=t(89923),r=t(8185),i=t(64681),c=t(64159),o=t(20554),l=t(62560),d=t(22166),u=t(56629),x=t(70579);const h=e=>{let{noTitle:s=!1}=e;const t=(0,o.jL)(),[h,p]=(0,n.useState)([]),[m,j]=(0,n.useState)(!1),[y,g]=(0,n.useState)(""),A=(0,d.d4)((e=>e.createUser.selectedPolicies)),f=(0,n.useCallback)((()=>{j(!0),u.F.policies.listPolicies().then((e=>{var s;const t=null!==(s=e.data.policies)&&void 0!==s?s:[];j(!1),p(t.sort(r.Hw))})).catch((e=>{j(!1),t((0,c.Dy)(e))}))}),[t]);(0,n.useEffect)((()=>{j(!0)}),[]),(0,n.useEffect)((()=>{m&&f()}),[m,f]);const b=h.filter((e=>e.name.includes(y)));return(0,x.jsxs)(a.xA9,{item:!0,xs:12,className:"inputItem",children:[m&&(0,x.jsx)(a.z21,{}),h.length>0?(0,x.jsxs)(n.Fragment,{children:[(0,x.jsx)(a.xA9,{item:!0,xs:12,className:"inputItem",children:(0,x.jsx)(i.A,{placeholder:"Start typing to search for a Policy",onChange:e=>{g(e)},value:y,label:s?"":"Assign Policies"})}),(0,x.jsx)(a.bQt,{columns:[{label:"Policy",elementKey:"name"}],onSelect:e=>{const s=e.target,n=s.value,a=s.checked;let r=[...A];a?r.push(n):r=r.filter((e=>e!==n)),r=r.filter((e=>""!==e)),t((0,l.Gy)(r))},selectedItems:A,isLoading:m,records:b,entityName:"Policies",idField:"name",customPaperHeight:"200px"})]}):(0,x.jsx)(a.azJ,{sx:{textAlign:"center",padding:"10px 0"},children:"No Policies Available"})]})}},56071:(e,s,t)=>{t.r(s),t.d(s,{default:()=>p});var n=t(65043),a=t(73216),r=t(64159),i=t(89923),c=t(56483),o=t(99161),l=t(58661),d=t(20554),u=t(56629),x=t(53518),h=t(70579);const p=e=>{let{closeDeleteModalAndRefresh:s,deleteOpen:t,selectedUsers:p}=e;const m=(0,a.Zp)(),j=(0,d.jL)(),y=()=>s(!1),[g,A]=(0,n.useState)(!0),[f,b]=(0,n.useState)(!1),[S,v]=(0,n.useState)([]),[C,_]=(0,n.useState)(!1),E=localStorage.getItem("userLoggedIn")||"";if((0,n.useEffect)((()=>{p&&u.F.users.checkUserServiceAccounts(p).then((e=>{var s;e.data&&(v(null!==(s=e.data.userServiceAccountList)&&void 0!==s?s:[]),e.data.hasSA&&b(!0))})).catch((e=>j((0,r.C9)((0,x.S)(e.error))))).finally((()=>A(!1)))}),[p,j]),!p)return null;const w=p.map((e=>(0,h.jsx)("div",{children:(0,h.jsx)("b",{children:e})},e))),U=[{type:"view",onClick:e=>{m("".concat(o.zZ.USERS,"/").concat((0,c.nf)(e.userName))),y()}}],O="Are you sure you want to delete the following "+p.length+" user"+(p.length>1?"s?":"?");return(0,h.jsx)(l.A,{title:"Delete User".concat(p.length>1?"s":""),confirmText:"Delete",isOpen:t,titleIcon:(0,h.jsx)(i.xWY,{}),isLoading:C,onConfirm:()=>{for(let e of p)e===E?(j((0,r.C9)({errorMessage:"Cannot delete currently logged in user",detailedError:"Cannot delete currently logged in user ".concat(E)})),s(!0)):u.F.user.removeUser((0,c.nf)(e)).then((e=>{s(!0),m("".concat(o.zZ.USERS))})).finally((()=>_(!1)))},onClose:y,confirmationContent:g?(0,h.jsx)(i.aHM,{}):(0,h.jsx)(n.Fragment,{children:f?(0,h.jsxs)(n.Fragment,{children:[(0,h.jsx)(i.Wei,{variant:"warning",message:(0,h.jsxs)(n.Fragment,{children:["Click on a user to view the full listing of associated Access Keys. All Access Keys associated with a user will be deleted along with the user.",(0,h.jsx)("br",{}),(0,h.jsx)("br",{}),(0,h.jsx)("strong",{children:"Are you sure you want to continue?"})]}),title:"Warning: One or more users selected has associated Access Keys.",sx:{margin:"15px 0"}}),(0,h.jsx)(i.bQt,{itemActions:U,columns:[{label:"Username",elementKey:"userName"},{label:"# Associated Access Keys",elementKey:"numSAs"}],isLoading:g,records:S,entityName:"User Access Keys",idField:"userName",customPaperHeight:"250"})]}):(0,h.jsxs)(n.Fragment,{children:[O,w]})})})}},13109:(e,s,t)=>{t.d(s,{A:()=>h});var n=t(65043),a=t(33097),r=t.n(a),i=t(89923),c=t(8185),o=t(64159),l=t(20554),d=t(20649),u=t(64681),x=t(70579);const h=e=>{let{selectedGroups:s,setSelectedGroups:t}=e;const a=(0,l.jL)(),[h,p]=(0,n.useState)([]),[m,j]=(0,n.useState)(!1),[y,g]=(0,n.useState)(""),A=(0,n.useCallback)((()=>{d.A.invoke("GET","/api/v1/groups").then((e=>{let s=r()(e,"groups",[]);s||(s=[]),p(s.sort(c.SO)),j(!1)})).catch((e=>{a((0,o.Dy)(e)),j(!1)}))}),[a]);(0,n.useEffect)((()=>{j(!0)}),[]),(0,n.useEffect)((()=>{m&&A()}),[m,A]);const f=s||[],b=h.filter((e=>e.includes(y)));return(0,x.jsxs)(i.xA9,{item:!0,xs:12,className:"inputItem",children:[m&&(0,x.jsx)(i.z21,{}),null!==h&&h.length>0?(0,x.jsxs)(n.Fragment,{children:[(0,x.jsx)(i.xA9,{item:!0,xs:12,className:"inputItem",children:(0,x.jsx)(u.A,{placeholder:"Start typing to search for Groups",onChange:g,value:y,label:"Assign Groups"})}),(0,x.jsx)(i.bQt,{columns:[{label:"Group"}],onSelect:e=>{const s=e.target,n=s.value,a=s.checked;let r=[...f];return a?r.push(n):r=r.filter((e=>e!==n)),t(r),r},selectedItems:f,isLoading:m,records:b,entityName:"Groups",idField:"",customPaperHeight:"200px"})]}):(0,x.jsx)(i.azJ,{sx:{textAlign:"center",padding:"10px 0"},children:"No Groups Available"})]})}},43527:(e,s,t)=>{t.r(s),t.d(s,{default:()=>ee});var n=t(65043),a=t(73216),r=t(39808),i=t(89923),c=t(8185),o=t(77403),l=t(56483),d=t(99161),u=t(20649),x=t(64681),h=t(72237),p=t(77938),m=t(64159),j=t(20554),y=t(6681),g=t(48793),A=t(92452),f=t(70579);const b=(0,h.A)(n.lazy((()=>Promise.resolve().then(t.bind(t,56071))))),S=(0,h.A)(n.lazy((()=>t.e(24).then(t.bind(t,60024))))),v=()=>{const e=(0,j.jL)(),s=(0,a.Zp)(),[t,r]=(0,n.useState)([]),[h,v]=(0,n.useState)(!0),[C,_]=(0,n.useState)(!1),[E,w]=(0,n.useState)(!1),[U,O]=(0,n.useState)(""),[I,M]=(0,n.useState)([]),K=(0,p._)(d.Ms,d.x6),R=(0,p._)(d.Ms,d.Ld),D=(0,p._)(d.Ms,d.BD),k=(0,p._)(d.Ms,d.Dg);(0,n.useEffect)((()=>{h&&(K?u.A.invoke("GET","/api/v1/users").then((e=>{const s=null===e.users?[]:e.users;v(!1),r(s.sort(c.LA))})).catch((s=>{v(!1),e((0,m.C9)(s))})):v(!1))}),[h,e,K]);const P=t.filter((e=>e.accessKey.includes(U))),z=e=>{s("".concat(d.zZ.USERS,"/").concat((0,l.nf)(e.accessKey)))},N=[{type:"view",onClick:z,disableButtonFunction:()=>!R},{type:"edit",onClick:z,disableButtonFunction:()=>!R}];return(0,n.useEffect)((()=>{e((0,m.ph)("list_users"))}),[]),(0,f.jsxs)(n.Fragment,{children:[C&&(0,f.jsx)(b,{deleteOpen:C,selectedUsers:I,closeDeleteModalAndRefresh:e=>{(e=>{_(!1),e&&(v(!0),M([]))})(e)}}),E&&(0,f.jsx)(S,{open:E,checkedUsers:I,closeModalAndRefresh:e=>{!function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];w(!1),e&&M([])}(e)}}),(0,f.jsx)(g.A,{label:"Users",actions:(0,f.jsx)(A.A,{})}),(0,f.jsx)(i.Mxu,{children:(0,f.jsxs)(i.xA9,{container:!0,children:[(0,f.jsxs)(i.xA9,{item:!0,xs:12,sx:o._0.actionsTray,children:[(0,f.jsx)(x.A,{placeholder:"Search Users",onChange:O,value:U,sx:{marginRight:"auto",maxWidth:380}}),(0,f.jsx)(p.R,{resource:d.Ms,scopes:[d.OV.ADMIN_DELETE_USER],matchAll:!0,errorProps:{disabled:!0},children:(0,f.jsx)(y.A,{tooltip:(0,p._)("console",[d.OV.ADMIN_DELETE_USER])?0===I.length?"Select Users to delete":"Delete Selected":(0,d.vj)([d.OV.ADMIN_DELETE_USER],"delete users"),children:(0,f.jsx)(i.$nd,{id:"delete-selected-users",onClick:()=>{_(!0)},label:"Delete Selected",icon:(0,f.jsx)(i.d7y,{}),disabled:0===I.length,variant:"secondary","aria-label":"delete-selected-users"})})}),(0,f.jsx)(p.R,{scopes:[d.OV.ADMIN_ADD_USER_TO_GROUP],resource:d.Ms,errorProps:{disabled:!0},children:(0,f.jsx)(y.A,{tooltip:(0,p._)("console",[d.OV.ADMIN_ADD_USER_TO_GROUP])?0===I.length?"Select Users to group":"Add to Group":(0,d.vj)([d.OV.ADMIN_ADD_USER_TO_GROUP],"add users to groups"),children:(0,f.jsx)(i.$nd,{id:"add-to-group",label:"Add to Group",icon:(0,f.jsx)(i.YXz,{}),disabled:I.length<=0,onClick:()=>{I.length>0&&w(!0)},variant:"regular"})})}),(0,f.jsx)(p.R,{scopes:[d.OV.ADMIN_CREATE_USER,d.OV.ADMIN_LIST_USER_POLICIES,d.OV.ADMIN_LIST_GROUPS],resource:d.HD,matchAll:!0,errorProps:{disabled:!0},children:(0,f.jsx)(y.A,{tooltip:(0,p._)("console-ui",[d.OV.ADMIN_CREATE_USER,d.OV.ADMIN_LIST_USER_POLICIES,d.OV.ADMIN_LIST_GROUPS,d.OV.ADMIN_ATTACH_USER_OR_GROUP_POLICY],!0)?"Create User":(0,d.vj)([d.OV.ADMIN_CREATE_USER,d.OV.ADMIN_LIST_USER_POLICIES,d.OV.ADMIN_LIST_GROUPS,d.OV.ADMIN_ATTACH_USER_OR_GROUP_POLICY],"create users"),children:(0,f.jsx)(i.$nd,{id:"create-user",label:"Create User",icon:(0,f.jsx)(i.REV,{}),onClick:()=>{s("".concat(d.zZ.USER_ADD))},variant:"callAction",disabled:!(0,p._)("console-ui",[d.OV.ADMIN_CREATE_USER,d.OV.ADMIN_LIST_USER_POLICIES,d.OV.ADMIN_LIST_GROUPS,d.OV.ADMIN_ATTACH_USER_OR_GROUP_POLICY],!0)})})})]}),h&&(0,f.jsx)(i.z21,{}),!h&&(0,f.jsxs)(n.Fragment,{children:[t.length>0&&(0,f.jsxs)(n.Fragment,{children:[(0,f.jsx)(i.xA9,{item:!0,xs:12,sx:{marginBottom:15},children:(0,f.jsx)(p.R,{scopes:[d.OV.ADMIN_LIST_USERS],resource:d.Ms,errorProps:{disabled:!0},children:(0,f.jsx)(i.bQt,{itemActions:N,columns:[{label:"Access Key",elementKey:"accessKey"}],onSelect:D||k?e=>{const{target:{value:s="",checked:t=!1}={}}=e;let n=[...I];return t?n.push(s):n=n.filter((e=>e!==s)),M(n),n}:void 0,selectedItems:I,isLoading:h,records:P,entityName:"Users",idField:"accessKey"})})}),(0,f.jsx)(i.lVp,{title:"Users",iconComponent:(0,f.jsx)(i.c2u,{}),help:(0,f.jsxs)(n.Fragment,{children:["A MinIO user consists of a unique access key (username) and corresponding secret key (password). Clients must authenticate their identity by specifying both a valid access key (username) and the corresponding secret key (password) of an existing MinIO user.",(0,f.jsx)("br",{}),"Groups provide a simplified method for managing shared permissions among users with common access patterns and workloads.",(0,f.jsx)("br",{}),(0,f.jsx)("br",{}),"Users inherit access permissions to data and resources through the groups they belong to.",(0,f.jsx)("br",{}),"MinIO uses Policy-Based Access Control (PBAC) to define the authorized actions and resources to which an authenticated user has access. Each policy describes one or more actions and conditions that outline the permissions of a user or group of users.",(0,f.jsx)("br",{}),(0,f.jsx)("br",{}),"Each user can access only those resources and operations which are explicitly granted by the built-in role. MinIO denies access to any other resource or action by default.",(0,f.jsx)("br",{}),(0,f.jsx)("br",{}),"You can learn more at our"," ",(0,f.jsx)("a",{href:"https://min.io/docs/minio/kubernetes/upstream/administration/identity-access-management/minio-user-management.html?ref=con",target:"_blank",rel:"noopener",children:"documentation"}),"."]})})]}),0===t.length&&(0,f.jsx)(i.xA9,{container:!0,children:(0,f.jsx)(i.xA9,{item:!0,xs:8,children:(0,f.jsx)(i.lVp,{title:"Users",iconComponent:(0,f.jsx)(i.c2u,{}),help:(0,f.jsxs)(n.Fragment,{children:["A MinIO user consists of a unique access key (username) and corresponding secret key (password). Clients must authenticate their identity by specifying both a valid access key (username) and the corresponding secret key (password) of an existing MinIO user.",(0,f.jsx)("br",{}),"Groups provide a simplified method for managing shared permissions among users with common access patterns and workloads.",(0,f.jsx)("br",{}),(0,f.jsx)("br",{}),"Users inherit access permissions to data and resources through the groups they belong to.",(0,f.jsx)("br",{}),"MinIO uses Policy-Based Access Control (PBAC) to define the authorized actions and resources to which an authenticated user has access. Each policy describes one or more actions and conditions that outline the permissions of a user or group of users.",(0,f.jsx)("br",{}),(0,f.jsx)("br",{}),"Each user can access only those resources and operations which are explicitly granted by the built-in role. MinIO denies access to any other resource or action by default.",(0,f.jsxs)(p.R,{scopes:[d.OV.ADMIN_CREATE_USER,d.OV.ADMIN_LIST_USER_POLICIES,d.OV.ADMIN_LIST_GROUPS],matchAll:!0,resource:d.Ms,children:[(0,f.jsx)("br",{}),(0,f.jsx)("br",{}),"To get started,"," ",(0,f.jsx)(i.t53,{onClick:()=>{s("".concat(d.zZ.USER_ADD))},children:"Create a User"}),"."]})]})})})})]})]})})]})};var C=t(13109),_=t(94141);const E=e=>{let{closeModalAndRefresh:s,selectedUser:t,open:a}=e;const r=(0,j.jL)(),[c,d]=(0,n.useState)(!1),[x,h]=(0,n.useState)(""),[p,y]=(0,n.useState)(""),[g,A]=(0,n.useState)(!1),[b,S]=(0,n.useState)([]),v=(0,n.useCallback)((()=>{if(!t)return null;u.A.invoke("GET","/api/v1/user/".concat((0,l.nf)(t))).then((e=>{d(!1),h(e.accessKey),S(e.memberOf||[]),A("enabled"===e.status)})).catch((e=>{d(!1),r((0,m.Dy)(e))}))}),[t,r]);(0,n.useEffect)((()=>{null===t?(h(""),y(""),S([])):v()}),[t,v]);const E=""!==x.trim()&&(""!==p.trim()&&null===t||null!==t);return(0,f.jsx)(_.A,{onClose:()=>{s()},modalOpen:a,title:"Set Groups",titleIcon:(0,f.jsx)(i.WC,{}),children:(0,f.jsx)(n.Fragment,{children:(0,f.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:e=>{e.preventDefault(),c||(d(!0),null!==t?u.A.invoke("PUT","/api/v1/user/".concat((0,l.nf)(t)),{status:g?"enabled":"disabled",groups:b}).then((e=>{d(!1),s()})).catch((e=>{d(!1),r((0,m.Dy)(e))})):u.A.invoke("POST","/api/v1/users",{accessKey:x,secretKey:p,groups:b}).then((e=>{d(!1),s()})).catch((e=>{d(!1),r((0,m.Dy)(e))})))},children:[(0,f.jsx)(i.Hbc,{withBorders:!1,containerPadding:!1,children:(0,f.jsx)(C.A,{selectedGroups:b,setSelectedGroups:e=>{S(e)}})}),(0,f.jsxs)(i.azJ,{sx:o.Uz.modalButtonBar,children:[(0,f.jsx)(i.$nd,{id:"clear-change-user-groups",type:"button",variant:"regular",onClick:()=>{null===t?(h(""),y(""),S([])):S([])},label:"Clear"}),(0,f.jsx)(i.$nd,{id:"save-user-groups",type:"submit",variant:"callAction",disabled:c||!E,label:"Save"})]}),c&&(0,f.jsx)(i.xA9,{item:!0,xs:12,children:(0,f.jsx)(i.z21,{})})]})})})};var w=t(22166),U=t(62560),O=t(42967);const I=e=>{let{closeModalAndRefresh:s,selectedUser:t,currentPolicies:a,open:r}=e;const c=(0,j.jL)(),[l,d]=(0,n.useState)(!1),[x,h]=(0,n.useState)([]),p=(0,w.d4)((e=>e.createUser.selectedPolicies));return(0,n.useEffect)((()=>{if(r){const e=a.map((e=>e.policy));h(e),c((0,U.Gy)(e))}}),[r,t]),(0,f.jsxs)(_.A,{onClose:()=>{s()},modalOpen:r,title:"Set Policies",titleIcon:(0,f.jsx)(i.n$X,{}),children:[(0,f.jsx)(i.Hbc,{withBorders:!1,containerPadding:!1,children:(0,f.jsx)(O.A,{selectedPolicy:p})}),(0,f.jsxs)(i.azJ,{sx:o.Uz.modalButtonBar,children:[(0,f.jsx)(i.$nd,{id:"reset-user-policies",type:"button",variant:"regular",color:"primary",onClick:()=>{c((0,U.Gy)(x))},label:"Reset"}),(0,f.jsx)(i.$nd,{id:"save-user-policy",type:"button",variant:"callAction",color:"primary",disabled:l,onClick:()=>{let e=t;d(!0),u.A.invoke("PUT","/api/v1/set-policy",{name:p,entityName:e,entityType:"user"}).then((()=>{d(!1),c((0,U.Gy)([])),s()})).catch((e=>{d(!1),c((0,m.Dy)(e))}))},label:"Save"})]}),l&&(0,f.jsx)(i.xA9,{item:!0,xs:12,children:(0,f.jsx)(i.z21,{})})]})};var M=t(18823),K=t(78619),R=t(68045),D=t(45479),k=t(10158),P=t(99956);const z=e=>{let{user:s,hasPolicy:t}=e;const r=(0,j.jL)(),o=(0,a.Zp)(),[x,h]=(0,n.useState)([]),[g,A]=(0,n.useState)(!1),[b,S]=(0,n.useState)(!1),[v,C]=(0,n.useState)(null),[_,E]=(0,n.useState)(!1),[w,U]=(0,n.useState)(null),[O,I]=(0,n.useState)([]),[z,N]=(0,n.useState)(!1),[T,L]=(0,n.useState)(!1);(0,n.useEffect)((()=>{F()}),[]),(0,n.useEffect)((()=>{g&&u.A.invoke("GET","/api/v1/user/".concat((0,l.nf)(s),"/service-accounts")).then((e=>{A(!1);const s=e.sort(c.LA);h(s)})).catch((e=>{r((0,m.C9)(e)),A(!1)}))}),[g,A,h,s,r]);const F=()=>{A(!0)},G=e=>{C(e),L(!0)},J=[{type:"view",onClick:e=>{e&&G(e.accessKey)}},{type:"delete",onClick:e=>{e&&(e=>{C(e),S(!0)})(e.accessKey)}},{type:"edit",onClick:e=>{e&&G(e.accessKey)}}];return(0,n.useEffect)((()=>{r((0,m.ph)("user_details_accounts"))}),[]),(0,f.jsxs)(n.Fragment,{children:[b&&(0,f.jsx)(M.default,{deleteOpen:b,selectedServiceAccount:v,closeDeleteModalAndRefresh:e=>{(e=>{S(!1),e&&F()})(e)}}),z&&(0,f.jsx)(R.A,{deleteOpen:z,selectedSAs:O,closeDeleteModalAndRefresh:e=>{N(!1),e&&(r((0,m.Hk)("Access Keys deleted successfully.")),I([]),A(!0))}}),_&&(0,f.jsx)(K.A,{newServiceAccount:w,open:_,closeModal:()=>{E(!1),U(null)},entity:"Access Key"}),T&&(0,f.jsx)(k.A,{open:T,selectedAccessKey:v,closeModalAndRefresh:()=>{L(!1),A(!0)}}),(0,f.jsx)(i._xt,{separator:!0,sx:{marginBottom:15},actions:(0,f.jsxs)(i.azJ,{sx:{display:"flex",justifyContent:"flex-end",gap:10},children:[(0,f.jsx)(y.A,{tooltip:"Delete Selected",children:(0,f.jsx)(i.$nd,{id:"delete-selected",onClick:()=>{N(!0)},label:"Delete Selected",icon:(0,f.jsx)(i.d7y,{}),disabled:0===O.length,variant:"secondary"})}),(0,f.jsx)(p.R,{scopes:[d.OV.ADMIN_CREATE_SERVICEACCOUNT,d.OV.ADMIN_UPDATE_SERVICEACCOUNT,d.OV.ADMIN_REMOVE_SERVICEACCOUNT,d.OV.ADMIN_LIST_SERVICEACCOUNTS],resource:d.Ms,matchAll:!0,errorProps:{disabled:!0},children:(0,f.jsx)(y.A,{tooltip:"Create Access Key",children:(0,f.jsx)(i.$nd,{id:"create-service-account",label:"Create Access Key",variant:"callAction",icon:(0,f.jsx)(i.REV,{}),onClick:()=>{o("/identity/users/new-user-sa/".concat((0,l.nf)(s)))},disabled:!t})})})]}),children:"Access Keys"}),(0,f.jsx)(i.bQt,{itemActions:J,entityName:"Access Keys",columns:P.X,onSelect:e=>(0,D.Qm)(e,I,O),selectedItems:O,isLoading:g,records:x,idField:"accessKey"})]})};var N=t(56629),T=t(53518);const L=e=>{let{open:s,userName:t,closeModal:a}=e;const r=(0,j.jL)(),[c,l]=(0,n.useState)(""),[d,u]=(0,n.useState)(""),[x,h]=(0,n.useState)(!1);return s?(0,f.jsx)(_.A,{title:"Change User Password",modalOpen:s,onClose:()=>{l(""),u(""),a()},titleIcon:(0,f.jsx)(i.Fwq,{}),children:(0,f.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:e=>{(e=>{if(e.preventDefault(),x)return;if(h(!0),c.length<8)return r((0,m.Dy)({errorMessage:"Passwords must be at least 8 characters long",detailedError:""})),void h(!1);let s={selectedUser:t,newSecretKey:c};N.F.account.changeUserPassword(s).then((e=>{h(!1),l(""),u(""),r((0,m.Hk)("Successfully updated the password for the user ".concat(t,"."))),a()})).catch((async e=>{h(!1),l(""),u("");const s=await e.json();r((0,m.C9)((0,T.S)(s)))}))})(e)},children:(0,f.jsxs)(i.Hbc,{withBorders:!1,containerPadding:!1,children:[(0,f.jsxs)(i.azJ,{sx:{margin:"10px 0 20px"},children:["Change password for: ",(0,f.jsx)("strong",{children:t})]}),(0,f.jsx)(i.cl_,{id:"new-password",name:"new-password",onChange:e=>{l(e.target.value)},label:"New Password",type:"password",value:c}),(0,f.jsx)(i.cl_,{id:"re-new-password",name:"re-new-password",onChange:e=>{u(e.target.value)},label:"Type New Password Again",type:"password",value:d}),(0,f.jsx)(i.azJ,{sx:o.Uz.modalButtonBar,children:(0,f.jsx)(i.$nd,{id:"save-user-password",type:"submit",variant:"callAction",color:"primary",disabled:x||!(d.length>0&&c===d),label:"Save"})}),x&&(0,f.jsx)(i.azJ,{children:(0,f.jsx)(i.z21,{})})]})})}):null};var F=t(56071);const G=()=>{const e=(0,j.jL)(),s=(0,a.g)(),t=(0,a.Zp)(),[r,o]=(0,n.useState)(!1),[x,h]=(0,n.useState)(!1),[b,S]=(0,n.useState)(!1),[v,C]=(0,n.useState)(!1),[_,w]=(0,n.useState)(!1),[U,O]=(0,n.useState)([]),[M,K]=(0,n.useState)([]),[R,D]=(0,n.useState)([]),[k,P]=(0,n.useState)(!1),[N,T]=(0,n.useState)(!1),[G,J]=(0,n.useState)(!1),[B,V]=(0,n.useState)("groups"),$=(0,p._)(d.Ms,d.Ho)&&!_,H=(0,p._)(d.Ms,d.m0)&&_,Y=(0,l.x6)(s.userName||""),Z=localStorage.getItem("userLoggedIn")||"",W=(0,p._)(d.Ms,d.$X,!0),Q=(0,p._)(d.Ms,d.Lb,!0),q=(0,p._)(d.Ms,d.Oh),X=(0,n.useCallback)((()=>{if(""===Y)return null;o(!0),u.A.invoke("GET","/api/v1/user/".concat((0,l.nf)(Y))).then((e=>{C(!1);const s=e.memberOf||[];O(s);const t=s.map((e=>({group:e})));K(t);const n=e.policy.map((e=>({policy:e})));n.sort(c.rY),D(n),w("enabled"===e.status),J(e.hasPolicy),o(!1)})).catch((s=>{C(!1),o(!1),e((0,m.Dy)(s))}))}),[Y,e]);(0,n.useEffect)((()=>{e((0,m.ph)("user_details_groups"))}),[]),(0,n.useEffect)((()=>{X()}),[X]);const ee=[{type:"view",onClick:e=>{t("".concat(d.zZ.GROUPS,"/").concat((0,l.nf)(e.group)))},disableButtonFunction:()=>!q}];return(0,f.jsxs)(n.Fragment,{children:[x&&(0,f.jsx)(E,{open:x,selectedUser:Y,closeModalAndRefresh:()=>{h(!1),X()}}),b&&(0,f.jsx)(I,{open:b,selectedUser:Y,currentPolicies:R,closeModalAndRefresh:()=>{S(!1),X()}}),N&&(0,f.jsx)(F.default,{deleteOpen:N,selectedUsers:[Y],closeDeleteModalAndRefresh:e=>{(e=>{T(!1),e&&X()})(e)}}),k&&(0,f.jsx)(L,{open:k,userName:Y,closeModal:()=>P(!1)}),(0,f.jsx)(g.A,{label:(0,f.jsx)(n.Fragment,{children:(0,f.jsx)(i.EGL,{label:"Users",onClick:()=>t(d.zZ.USERS)})}),actions:(0,f.jsx)(A.A,{})}),(0,f.jsx)(i.Mxu,{children:(0,f.jsxs)(i.xA9,{container:!0,children:[(0,f.jsx)(i.xA9,{item:!0,xs:12,children:(0,f.jsx)(i.lcx,{icon:(0,f.jsx)(i.c2u,{width:40}),title:Y,subTitle:"",actions:(0,f.jsxs)(n.Fragment,{children:[(0,f.jsx)("span",{style:{fontSize:".8rem",marginRight:".5rem"},children:"User Status:"}),(0,f.jsx)("span",{style:{fontWeight:"bold",fontSize:".9rem",marginRight:".5rem"},children:_?"Enabled":"Disabled"}),(0,f.jsx)(y.A,{tooltip:$||H?"":(0,p._)(d.Ms,d.Ho)?(0,d.vj)(d.m0,"disable users"):(0,p._)(d.Ms,d.m0)?(0,d.vj)(d.Ho,"enable users"):(0,d.vj)(d.ni,"enable or disable users"),children:(0,f.jsx)(i.dOG,{indicatorLabels:["Enabled","Disabled"],checked:_,value:"group_enabled",id:"group-status",name:"group-status",onChange:()=>{var s;w(!_),s=!_,v||(C(!0),u.A.invoke("PUT","/api/v1/user/".concat((0,l.nf)(Y)),{status:s?"enabled":"disabled",groups:U}).then((e=>{C(!1)})).catch((s=>{C(!1),e((0,m.Dy)(s))})))},switchOnly:!0,disabled:!$&&!H})}),(0,f.jsx)(y.A,{tooltip:(0,p._)(d.Ms,d.Dg)?Z===Y?"You cannot delete the currently logged in User":"Delete User":(0,d.vj)(d.Dg,"delete user"),children:(0,f.jsx)(i.$nd,{id:"delete-user",onClick:()=>{T(!0)},icon:(0,f.jsx)(i.ucK,{}),variant:"secondary",disabled:!(0,p._)(d.Ms,d.Dg)||Z===Y})}),(0,f.jsx)(y.A,{tooltip:"Change Password",children:(0,f.jsx)(i.$nd,{id:"change-user-password",onClick:()=>{P(!0)},icon:(0,f.jsx)(i.aJN,{}),variant:"regular",disabled:Z===Y})})]}),sx:{marginBottom:15}})}),(0,f.jsx)(i.xA9,{item:!0,xs:12,children:(0,f.jsx)(i.tUM,{currentTabOrPath:B,onTabClick:V,options:[{tabConfig:{id:"groups",label:"Groups",disabled:!Q},content:(0,f.jsxs)(n.Fragment,{children:[(0,f.jsx)(i.azJ,{onMouseMove:()=>e((0,m.ph)("user_details_groups")),children:(0,f.jsx)(i._xt,{separator:!0,sx:{marginBottom:15},actions:(0,f.jsx)(y.A,{tooltip:Q?"Assign groups":(0,d.vj)(d.Lb,"add users to groups"),children:(0,f.jsx)(i.$nd,{id:"add-groups",label:"Add to Groups",onClick:()=>{h(!0)},icon:(0,f.jsx)(i.REV,{}),variant:"callAction",disabled:!Q})}),children:"Groups"})}),(0,f.jsx)(i.xA9,{item:!0,xs:12,onMouseMove:()=>e((0,m.ph)("user_details_groups")),children:(0,f.jsx)(i.bQt,{itemActions:ee,columns:[{label:"Name",elementKey:"group"}],isLoading:r,records:M,entityName:"Groups",idField:"group"})})]})},{tabConfig:{id:"service_accounts",label:"Service Accounts",disabled:!(0,p._)(d.Ms,d.xw)},content:(0,f.jsx)(z,{user:Y,hasPolicy:G})},{tabConfig:{id:"policies",label:"Policies",disabled:!W},content:(0,f.jsxs)(n.Fragment,{children:[(0,f.jsx)(i.azJ,{onMouseMove:()=>e((0,m.ph)("user_details_policies")),children:(0,f.jsx)(i._xt,{separator:!0,sx:{marginBottom:15},actions:(0,f.jsx)(y.A,{tooltip:W?"Assign Policies":(0,d.vj)(d.$X,"assign policies"),children:(0,f.jsx)(i.$nd,{id:"assign-policies",label:"Assign Policies",onClick:()=>{S(!0)},icon:(0,f.jsx)(i.n$X,{}),variant:"callAction",disabled:!W})}),children:"Policies"})}),(0,f.jsx)(i.azJ,{children:(0,f.jsx)(i.bQt,{itemActions:[{type:"view",onClick:e=>{t("".concat(d.zZ.POLICIES,"/").concat((0,l.nf)(e.policy)))}}],columns:[{label:"Name",elementKey:"policy"}],isLoading:r,records:R,entityName:"Policies",idField:"policy"})})]})}]})})]})})]})};var J=t(88115);const B=e=>{let{icon:s,description:t}=e;return(0,f.jsxs)(i.azJ,{sx:{display:"flex","& .min-icon":{marginRight:"10px",height:"23px",width:"23px",marginBottom:"10px"}},children:[s," ",(0,f.jsx)("div",{style:{fontSize:"14px",fontStyle:"italic",color:"#5E5E5E"},children:t})]})},V=()=>(0,f.jsxs)(i.azJ,{sx:{flex:1,border:"1px solid #eaeaea",borderRadius:"2px",display:"flex",flexFlow:"column",padding:"20px",marginTop:0},children:[(0,f.jsxs)(i.azJ,{sx:{fontSize:"16px",fontWeight:600,display:"flex",alignItems:"center",marginBottom:"16px","& .min-icon":{height:"21px",width:"21px",marginRight:"15px"}},children:[(0,f.jsx)(i.nag,{}),(0,f.jsx)("div",{children:"Learn more about the Users feature"})]}),(0,f.jsxs)(i.azJ,{sx:{fontSize:"14px",marginBottom:"15px"},children:["A MinIO user consists of a unique access key (username) and corresponding secret key (password). Clients must authenticate their identity by specifying both a valid access key (username) and the corresponding secret key (password) of an existing MinIO user.",(0,f.jsx)("br",{}),(0,f.jsx)("br",{}),"Each user can have one or more assigned policies that explicitly list the actions and resources to which that user has access. Users can also inherit policies from the groups in which they have membership.",(0,f.jsx)("br",{})]}),(0,f.jsxs)(i.azJ,{sx:{display:"flex",flexFlow:"column"},children:[(0,f.jsx)(B,{icon:(0,f.jsx)(i.c2u,{}),description:"Create Users"}),(0,f.jsx)(B,{icon:(0,f.jsx)(i.YXz,{}),description:"Manage Groups"}),(0,f.jsx)(B,{icon:(0,f.jsx)(i.uYH,{}),description:"Assign Policies"})]})]}),$=()=>{const e=(0,j.jL)(),s=(0,w.d4)((e=>e.createUser.userName));return(0,f.jsx)(i.cl_,{id:"accesskey-input",name:"accesskey-input",label:"User Name",value:s,autoFocus:!0,onChange:s=>{e((0,U.ht)(s.target.value))}})},H=()=>{const e=(0,j.jL)(),s=(0,w.d4)((e=>e.createUser.secretKey));return(0,f.jsx)(i.cl_,{id:"standard-multiline-static",name:"standard-multiline-static",type:"password",label:"Password",value:s,onChange:s=>{e((0,U.ir)(s.target.value))},autoComplete:"current-password"})},Y=()=>{const e=(0,j.jL)(),s=(0,w.d4)((e=>e.createUser.selectedPolicies)),t=(0,w.d4)((e=>e.createUser.selectedGroups)),r=(0,w.d4)((e=>e.createUser.addLoading)),c=(0,w.d4)((e=>e.createUser.sendEnabled)),l=(0,w.d4)((e=>e.createUser.secretKeylength)),u=(0,a.Zp)();e((0,U.yt)());return(0,n.useEffect)((()=>{e((0,m.ph)("add_user"))}),[]),(0,f.jsx)(n.Fragment,{children:(0,f.jsxs)(i.xA9,{item:!0,xs:12,children:[(0,f.jsx)(g.A,{label:(0,f.jsx)(i.EGL,{label:"Users",onClick:()=>u(d.zZ.USERS)}),actions:(0,f.jsx)(A.A,{})}),(0,f.jsx)(i.Mxu,{children:(0,f.jsx)(i.Hbc,{title:"Create User",icon:(0,f.jsx)(i.R$W,{}),helpBox:(0,f.jsx)(V,{}),children:(0,f.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:s=>{(s=>{if(s.preventDefault(),l<8)return e((0,m.C9)({errorMessage:"Passwords must be at least 8 characters long",detailedError:""})),void e((0,U.AE)(!1));r||(e((0,U.AE)(!0)),e((0,J.y)()).unwrap().then((()=>u("".concat(d.zZ.USERS)))))})(s)},children:[(0,f.jsx)($,{}),(0,f.jsx)(H,{}),(0,f.jsx)(O.A,{selectedPolicy:s}),(0,f.jsx)(C.A,{selectedGroups:t,setSelectedGroups:s=>{e((0,U.yD)(s))}}),r&&(0,f.jsx)(i.xA9,{item:!0,xs:12,children:(0,f.jsx)(i.z21,{})}),(0,f.jsxs)(i.xA9,{item:!0,xs:12,sx:o.Uz.modalButtonBar,children:[(0,f.jsx)(i.$nd,{id:"clear-add-user",type:"button",variant:"regular",onClick:s=>{e((0,J.o)())},label:"Clear"}),(0,f.jsx)(i.$nd,{id:"save-user",type:"submit",variant:"callAction",color:"primary",disabled:r||!c,label:"Save"})]})]})})})]})})};var Z=t(41206);const W=e=>{let{icon:s,description:t}=e;return(0,f.jsxs)(i.azJ,{sx:{display:"flex","& .min-icon":{marginRight:"10px",height:"23px",width:"23px",marginBottom:"10px"}},children:[s," ",(0,f.jsx)("div",{style:{fontSize:"14px",fontStyle:"italic",color:"#5E5E5E"},children:t})]})},Q=()=>(0,f.jsxs)(i.azJ,{sx:{flex:1,border:"1px solid #eaeaea",borderRadius:"2px",display:"flex",flexFlow:"column",padding:"20px",marginTop:0},children:[(0,f.jsxs)(i.azJ,{sx:{fontSize:"16px",fontWeight:600,display:"flex",alignItems:"center",marginBottom:"16px",paddingBottom:"20px","& .min-icon":{height:"21px",width:"21px",marginRight:"15px"}},children:[(0,f.jsx)(i.nag,{}),(0,f.jsx)("div",{children:"Learn more about Access Keys"})]}),(0,f.jsxs)(i.azJ,{sx:{fontSize:"14px",marginBottom:"15px"},children:[(0,f.jsxs)(i.azJ,{sx:{paddingBottom:"20px"},children:[(0,f.jsx)(W,{icon:(0,f.jsx)(i.ehx,{}),description:"Create Access Keys"}),(0,f.jsx)(i.azJ,{sx:{paddingTop:"20px"},children:"Access Keys inherit the policies explicitly attached to the parent user, and the policies attached to each group in which the parent user has membership."})]}),(0,f.jsxs)(i.azJ,{sx:{paddingBottom:"20px"},children:[(0,f.jsx)(W,{icon:(0,f.jsx)(i.aJN,{}),description:"Assign Custom Credentials"}),(0,f.jsx)(i.azJ,{sx:{paddingTop:"10px"},children:"Randomized access credentials are recommended, and provided by default. You may use your own custom Access Key and Secret Key by replacing the default values. After creation of any Access Key, you will be given the opportunity to view and download the account credentials."}),(0,f.jsx)(i.azJ,{sx:{paddingTop:"10px"},children:"Access Keys support programmatic access by applications. You cannot use a Access Key to log into the MinIO Console."})]}),(0,f.jsxs)(i.azJ,{sx:{paddingBottom:"20px"},children:[(0,f.jsx)(W,{icon:(0,f.jsx)(i.n$X,{}),description:"Assign Access Policies"}),(0,f.jsx)(i.azJ,{sx:{paddingTop:"10px"},children:"You can specify an optional JSON-formatted IAM policy to further restrict Access Key access to a subset of the actions and resources explicitly allowed for the parent user. Additional access beyond that of the parent user cannot be implemented through these policies."}),(0,f.jsx)(i.azJ,{sx:{paddingTop:"10px"},children:"You cannot modify the optional Access Key IAM policy after saving."})]})]}),(0,f.jsx)(i.azJ,{sx:{display:"flex",flexFlow:"column"}})]});var q=t(11441);const X=()=>{const e=(0,j.jL)(),s=(0,a.g)(),t=(0,a.Zp)(),[r,c]=(0,n.useState)(!1),[x,h]=(0,n.useState)((0,l.$f)(20)),[p,y]=(0,n.useState)((0,l.$f)(40)),[b,S]=(0,n.useState)(!1),[v,C]=(0,n.useState)(null),[_,E]=(0,n.useState)(""),w=(0,l.x6)(s.userName||""),[U,O]=(0,n.useState)(""),[I,M]=(0,n.useState)(""),[R,D]=(0,n.useState)(""),[k,P]=(0,n.useState)();(0,n.useEffect)((()=>{if(r){const s=k?k.toJSDate().toISOString():null;u.A.invoke("POST","/api/v1/user/".concat((0,l.nf)(w),"/service-account-credentials"),{policy:_,accessKey:x,secretKey:p,description:I,comment:R,name:U,expiry:s}).then((e=>{c(!1),C({accessKey:e.accessKey||"",secretKey:e.secretKey||"",url:e.url||""})})).catch((s=>{c(!1),e((0,m.C9)(s))}))}}),[r,c,e,_,w,x,p,U,I,k,R]),(0,n.useEffect)((()=>{b&&u.A.invoke("GET","/api/v1/user/".concat((0,l.nf)(w),"/policies")).then((e=>{E(JSON.stringify(JSON.parse(e.policy),null,4))})).catch((e=>{(0,m.C9)(e)}))}),[b,w]);return(0,n.useEffect)((()=>{e((0,m.ph)("add_user_SA"))}),[]),(0,f.jsxs)(n.Fragment,{children:[v&&(0,f.jsx)(K.A,{newServiceAccount:v,open:!0,closeModal:()=>{C(null),t("".concat(d.zZ.USERS,"/").concat((0,l.nf)(w)))},entity:"Access Key"}),(0,f.jsxs)(i.xA9,{item:!0,xs:12,children:[(0,f.jsx)(g.A,{label:(0,f.jsx)(i.EGL,{onClick:()=>t("".concat(d.zZ.USERS,"/").concat((0,l.nf)(w))),label:"User Details - "+w}),actions:(0,f.jsx)(A.A,{})}),(0,f.jsx)(i.Mxu,{children:(0,f.jsx)(i.Hbc,{helpBox:(0,f.jsx)(Q,{}),icon:(0,f.jsx)(i.kQt,{}),title:"Create Access Key for ".concat(w),children:(0,f.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:e=>{e.preventDefault(),(e=>{e.preventDefault(),c(!0)})(e)},children:[(0,f.jsx)(i.cl_,{value:x,label:"Access Key",id:"accessKey",name:"accessKey",placeholder:"Enter Access Key",onChange:e=>{h(e.target.value)},startIcon:(0,f.jsx)(i.ehx,{})}),(0,f.jsx)(i.cl_,{value:p,label:"Secret Key",id:"secretKey",name:"secretKey",type:"password",placeholder:"Enter Secret Key",onChange:e=>{y(e.target.value)},startIcon:(0,f.jsx)(i.aJN,{})}),(0,f.jsx)(i.dOG,{value:"serviceAccountPolicy",id:"serviceAccountPolicy",name:"serviceAccountPolicy",checked:b,onChange:e=>{S(e.target.checked)},label:"Restrict beyond user policy",description:"You can specify an optional JSON-formatted IAM policy to further restrict Access Key access to a subset of the actions and resources explicitly allowed for the parent user. Additional access beyond that of the parent user cannot be implemented through these policies."}),b&&(0,f.jsxs)(i.xA9,{item:!0,xs:12,children:[(0,f.jsx)(i.azJ,{children:(0,f.jsx)(i.V7x,{content:(0,f.jsx)(n.Fragment,{children:(0,f.jsx)("a",{target:"blank",href:"https://min.io/docs/minio/kubernetes/upstream/administration/identity-access-management/policy-based-access-control.html#policy-document-structure",children:"Guide to access policy structure"})}),placement:"right",children:(0,f.jsx)(q.A,{children:"Current User Policy - edit the JSON to remove permissions for this Access Key"})})}),(0,f.jsx)(i.xA9,{item:!0,xs:12,sx:{...o.Uz.formScrollable},children:(0,f.jsx)(Z.A,{value:_,onChange:e=>{E(e)},editorHeight:"350px",helptip:(0,f.jsx)(n.Fragment,{children:(0,f.jsx)("a",{target:"blank",href:"https://min.io/docs/minio/kubernetes/upstream/administration/identity-access-management/policy-based-access-control.html#policy-document-structure",children:"Guide to access policy structure"})})})})]}),(0,f.jsx)(i.azJ,{sx:{marginBottom:"15px",marginTop:"15px",width:"100%","& label":{width:"180px"}},children:(0,f.jsx)(i.e8j,{noLabelMinWidth:!0,value:k,onChange:e=>{P(e)},id:"expiryTime",label:"Expiry",timeFormat:"24h",secondsSelector:!1})}),(0,f.jsx)(i.cl_,{value:U,label:"Name",id:"name",name:"name",type:"text",placeholder:"Enter a name",onChange:e=>{O(e.target.value)}}),(0,f.jsx)(i.cl_,{value:I,label:"Description",id:"description",name:"description",type:"text",placeholder:"Enter a description",onChange:e=>{M(e.target.value)}}),(0,f.jsx)(i.cl_,{value:R,label:"Comments",id:"comment",name:"comment",type:"text",placeholder:"Enter a comment",onChange:e=>{D(e.target.value)}}),(0,f.jsxs)(i.xA9,{item:!0,xs:12,sx:{...o.Uz.modalButtonBar},children:[(0,f.jsx)(i.$nd,{id:"clear",type:"button",variant:"regular",onClick:()=>{C(null),h(""),y("")},label:"Clear"}),(0,f.jsx)(i.$nd,{id:"create-sa",type:"submit",variant:"callAction",color:"primary",label:"Create"})]})]})})})]})]})},ee=()=>(0,f.jsxs)(a.BV,{children:[(0,f.jsx)(a.qh,{path:"add-user",element:(0,f.jsx)(Y,{})}),(0,f.jsx)(a.qh,{path:":userName",element:(0,f.jsx)(G,{})}),(0,f.jsx)(a.qh,{path:"new-user-sa/:userName",element:(0,f.jsx)(X,{})}),(0,f.jsx)(a.qh,{path:"/",element:(0,f.jsx)(v,{})}),(0,f.jsx)(a.qh,{element:(0,f.jsx)(r.A,{})})]})}}]);
//# sourceMappingURL=3527.59dee34f.chunk.js.map