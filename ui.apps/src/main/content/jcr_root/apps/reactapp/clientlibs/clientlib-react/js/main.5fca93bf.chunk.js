(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{295:function(n,e,t){var i={".":63,"./":63,"./index":63,"./index.js":63};function a(n){var e=o(n);return t(e)}function o(n){if(!t.o(i,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return i[n]}a.keys=function(){return Object.keys(i)},a.resolve=o,n.exports=a,a.id=295},300:function(n,e,t){},301:function(n,e,t){},302:function(n,e,t){"use strict";t.r(e);t(152),t(225),t(275);var i=t(35),a=t(22),o=t(1),c=t(143),r=t(15),s=t(8),p=t(2);class l extends s.Page{render(){return Object(p.jsxs)("div",{children:[this.childComponents,this.childPages]})}}var d=Object(s.withModel)(l);i.ModelClient;var b=t(101),x=t.n(b);const h=()=>Object(p.jsx)("div",{children:"Error loading chunks!"}),j=(m=n=>Object(p.jsx)("div",{className:"loading-skeleton loading-skeleton__block",style:{height:n.skeletonHeight?n.skeletonHeight:"50px"}}),g={skeletonHeight:1e3},function(n){return Object(p.jsx)(m,{...g,...n})});var m,g;var u=function(n){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:j;return x()(n,{loading:e,error:h})};t(300);class O extends s.Page{get containerProps(){let n=super.containerProps;return n.className=(n.className||"")+" page "+(this.props.cssClassNames||""),n}}var f,w;Object(s.MapTo)("reactapp/components/page")(Object(s.withComponentMappingContext)((f=O,class extends o.Component{render(){let n=this.props.cqPath;return n?(w=w||"html",Object(p.jsx)(r.d,{exact:!0,path:"(.*)"+n+"(."+w+")?",render:n=>Object(p.jsx)(f,{...this.props,...n})},n)):Object(p.jsx)(f,{...this.props})}})));Object(s.MapTo)("reactapp/components/container")(Object(s.withComponentMappingContext)(s.AllowedComponentsContainer),{emptyLabel:"Container",isEmpty:function(n){return!n||!n.cqItemsOrder||0===n.cqItemsOrder.length}});Object(s.MapTo)("reactapp/components/experiencefragment")(Object(s.withComponentMappingContext)(s.Container),{emptyLabel:"Experience Fragment",isEmpty:function(n){return!n||!n.configured}});var y,v=t(28),k=t(6),I=t(7);const q=I.a.section(y||(y=Object(k.a)([""])));var S;Object(v.MapTo)("reactapp/components/content/image")((()=>Object(p.jsx)(q,{children:Object(p.jsx)("p",{children:"SUA IMAGEM AQUI!"})})));const z=I.a.section(S||(S=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100vh;\n  max-height: 1080px;\n\n  svg {\n    color: white;\n    font-size: 20px;\n  }\n\n  h2 {\n    font-weight: 400;\n    font-size: 30px;\n    color: #e0e0e0;\n    margin-top: 25%;\n  }\n\n  button {\n    background: linear-gradient(90deg, #ff2d04 0%, #c13216 100%);\n    box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);\n    border-radius: 50px;\n    margin-top: 5%;\n    width: 100%;\n    color: white;\n    font-size: 18px;\n    font-weight: 400;\n    border: 0;\n    height: 65px;\n    cursor: pointer;\n    transition: 0.6s;\n\n    &:hover {\n      border: #ff2d04 solid 1px;\n      background: transparent;\n      color: #ff2d04;\n    }\n  }\n"])));var A,M;const P=I.a.input(A||(A=Object(k.a)(['\n  width: 100%;\n  background-color: transparent;\n  border: 0;\n  color: #e0e0e0;\n  font-size: 16px;\n  outline: none;\n\n  &::placeholder {\n    color: #e0e0e0;\n    font-size: 16px;\n    font-family: "Poppins", sans-serif;\n    font-weight: 300;\n  }\n']))),T=I.a.div(M||(M=Object(k.a)(["\n  display: flex;\n  justify-content: space-between;\n  border: solid 2px #e0e0e0;\n  border-radius: 30px;\n  margin-bottom: 6%;\n  padding: 4%;\n"])));var V,Z,G=n=>{let{type:e,placeholder:t,onChange:i}=n;return Object(p.jsx)(T,{children:Object(p.jsx)(P,{onChange:i,type:e,placeholder:t})})};const K=I.a.h1(V||(V=Object(k.a)(["\n  font-weight: 400;\n  font-size: 60px;\n  color: #e0e0e0;\n  margin: 0;\n"]))),R=I.a.p(Z||(Z=Object(k.a)(["\n  font-weight: 200;\n  font-size: 16px;\n  color: #e0e0e0;\n  width: 70%;\n  margin: 0;\n"])));var C,J=n=>{let{text1:e,text2:t}=n;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(K,{children:e}),Object(p.jsx)(R,{children:t})]})};const E=I.a.h3(C||(C=Object(k.a)(["\n  color: #e9b425;\n  text-align: center;\n  visibility: ",";\n  font-size: 16px;\n"])),(n=>n.visibility));var F=n=>{let{visibility:e}=n;return Object(p.jsxs)(E,{visibility:e,children:["Ops, usu\xe1rio ou senha inv\xe1lidos. ",Object(p.jsx)("br",{})," Tente novamente!"]})},N=t(149),X=t(148);var H;Object(v.MapTo)("reactapp/components/content/form")((n=>{let{text1:e,text2:t}=n;const i=Object(r.k)(),[a,c]=Object(o.useState)(),[s,l]=Object(o.useState)(),[d,b]=Object(o.useState)("hidden");return Object(p.jsxs)(z,{children:[Object(p.jsxs)("div",{children:[Object(p.jsx)(J,{text1:e,text2:t}),Object(p.jsx)("h2",{children:"Login"}),Object(p.jsx)(G,{onChange:n=>l(n.target.value),placeholder:"Usu\xe1rio",children:Object(p.jsx)(X.a,{})}),Object(p.jsx)(G,{onChange:n=>c(n.target.value),placeholder:"Senha",type:"password",children:Object(p.jsx)(N.a,{})})]}),Object(p.jsx)(F,{visibility:d}),Object(p.jsx)("button",{onClick:()=>{"admin"===a&&"admin"===s?(i.push("/content/reactapp/us/en/home.html?wcmmode=disabled"),window.location.reload()):b("visible")},children:"Continuar"})]})}));const L=I.a.section(H||(H=Object(k.a)(["\n  height: 20vh;\n  display: flex;\n  justify-content: space-between;\n  box-sizing: border-box;\n  padding: 1% 2%;\n\n  @media (max-width: 900px) {\n    #logo {\n      display: none;\n    }\n  }\n"])));var U;const W=I.a.section(U||(U=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 1.5%;\n\n  @media (max-width: 1500px) {\n    margin-left: 5%;\n  }\n\n  @media (max-width: 900px) {\n    display: none;\n  }\n\n  h1 {\n    font-size: 144px;\n    font-weight: 700;\n    color: #222222;\n    line-height: 120px;\n    margin: 0;\n  }\n\n  p {\n    font-weight: 500;\n    font-size: 14px;\n    color: #222222;\n    margin: 0;\n  }\n"]))),Y=new Array("janeiro","fevereiro","mar\xe7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"),B=new Array("domingo","segunda-feira","ter\xe7a-feira","quarta-feira","quinta-feira","sexta-feira","s\xe1bado");var D,Q=()=>{const[n,e]=Object(o.useState)(),[t,i]=Object(o.useState)();return Object(o.useEffect)((()=>{setInterval((()=>{let n=new Date,t=n.getHours(),a=n.getMinutes(),o=n.getDate(),c=n.getDay(),r=n.getMonth(),s=n.getFullYear();e("".concat(t<10?"0":"").concat(t,":").concat(a<10?"0":"").concat(a)),i("".concat(B[c],", ").concat(o," de ").concat(Y[r]," de ").concat(s))}),1e3)})),Object(p.jsxs)(W,{children:[Object(p.jsx)("h1",{children:n}),Object(p.jsx)("p",{children:t})]})};const _=I.a.section(D||(D=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  width: 300px;\n\n  div {\n    display: flex;\n    align-items: center;\n  }\n\n  h1 {\n    font-size: 48px;\n    color: #222222;\n    margin: 0;\n  }\n\n  p {\n    font-weight: 500;\n    font-size: 14px;\n    color: #222222;\n    margin: 0;\n  }\n"])));function $(n){let e="";switch(n){case"Acre":e="AC";break;case"Alagoas":e="AL";break;case"Amap\xe1":e="AP";break;case"Amazonas":e="AM";break;case"Bhaia":e="BA";break;case"Cear\xe1":e="CE";break;case"Esp\xedrito Santo":e="ES";break;case"Goi\xe1s":e="GO";break;case"Maranh\xe3o":e="MA";break;case"Mato Grosso":e="MT";break;case"Mato Grosso do Sul":e="MS";break;case"Minas Gerais":e="MG";break;case"Par\xe1":e="PA";break;case"Para\xedba":e="PB";break;case"Paran\xe1":e="PR";break;case"Pernambuco":e="PE";break;case"Piau\xed":e="PI";break;case"Rio de Janeiro":e="RJ";break;case"Rio Grande do Norte":e="RN";break;case"Rio Grande do Sul":e="RS";break;case"Rond\xf4nia":e="RO";break;case"Roraima":e="RR";break;case"Santa Catarina":e="SC";break;case"S\xe3o Paulo":e="SP";break;case"Sergipe":e="SE";break;case"Tocantins":e="TO"}return e}var nn=()=>{const[n,e]=Object(o.useState)(),[t,i]=Object(o.useState)(),[a,c]=Object(o.useState)(),[r,s]=Object(o.useState)();return navigator.geolocation&&navigator.geolocation.getCurrentPosition((n=>{let t=n.coords.latitude,a=n.coords.longitude;fetch("https://api.weatherapi.com/v1/current.json?key=8eb8f003f8984fbe9a3172745220802&q=".concat(t,",").concat(a)).then((n=>n.json())).then((n=>{let t=n.current.temp_c.toFixed()+"\xb0",a=n.current.condition.icon,o=n.location.name,r=n.location.region;"Divino Espirito Santo Do Carangola"===o&&(o="Divino"),e(t),i(a),c(o),s(r)}))})),Object(p.jsxs)(_,{children:[Object(p.jsxs)("p",{children:[a," - ",$(r)]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("img",{src:t,alt:"Weather icon"}),Object(p.jsx)("h1",{children:n})]})]})};var en;Object(v.MapTo)("reactapp/components/content/header")((()=>Object(p.jsxs)(L,{children:[Object(p.jsx)("div",{children:Object(p.jsx)("img",{id:"logo",src:"data:image/png;base64,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",alt:"Compass logo"})}),Object(p.jsx)(Q,{}),Object(p.jsx)(nn,{})]})));const tn=I.a.section(en||(en=Object(k.a)(["\n  display: flex;\n  height: 80vh;\n  justify-content: space-between;\n  max-height: 900px;\n\n  div {\n    display: flex;\n    align-items: flex-end;\n    margin-right: 1%;\n\n    @media (max-width: 900px) {\n      margin-right: 5%;\n    }\n  }\n\n  @media (max-width: 1520px) {\n    img {\n      height: 50vh;\n    }\n  }\n\n  @media (max-width: 900px) {\n    img {\n      max-width: 100%;\n    }\n  }\n"])));var an,on,cn,rn=t.p+"static/media/uolball.86be5879.png";const sn=I.a.section(an||(an=Object(k.a)(["\n  margin-top: 6%;\n  margin-right: 6%;\n"]))),pn=I.a.h1(on||(on=Object(k.a)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: 700;\n  text-align: right;\n  color: #c12d18;\n  margin: 0;\n\n  @media (max-width: 1520px) {\n    font-size: 40px;\n    line-height: 60px;\n  }\n\n  @media (max-width: 900px) {\n    display: none;\n  }\n"])),(n=>n.size),(n=>n.height)),ln=I.a.p(cn||(cn=Object(k.a)(["\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 24px;\n  text-align: right;\n  color: #222222;\n  margin: 0;\n\n  @media (max-width: 1520px) {\n    font-size: 20px;\n    line-height: 20px;\n  }\n\n  @media (max-width: 900px) {\n    display: none;\n  }\n"])));var dn=n=>{let{text1:e,text2:t,text3:i,text4:a,p1:o,p2:c,p3:r,p4:s}=n;return Object(p.jsxs)(sn,{children:[Object(p.jsx)(pn,{size:"36px",height:"36px",children:e}),Object(p.jsx)(ln,{children:o}),Object(p.jsx)(pn,{size:"64px",height:"60px",children:t}),Object(p.jsx)(ln,{children:c}),Object(p.jsx)(pn,{size:"64px",height:"80px",children:i}),Object(p.jsx)(ln,{children:r}),Object(p.jsx)(pn,{size:"64px",height:"90px",children:a}),Object(p.jsx)(ln,{children:s})]})};var bn;Object(v.MapTo)("reactapp/components/content/content")((n=>{let{text1:e,p1:t,text2:i,p2:a,text3:o,p3:c,text4:r,p4:s}=n;return Object(p.jsxs)(tn,{children:[Object(p.jsx)("div",{children:Object(p.jsx)("img",{src:rn,alt:"Uol ball"})}),Object(p.jsx)(dn,{text1:e,p1:t,text2:i,p2:a,text3:o,p3:c,text4:r,p4:s})]})}));const xn=I.a.section(bn||(bn=Object(k.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  position: absolute;\n  background: linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%);\n  height: 10vh;\n  width: 100%;\n  bottom: 0;\n\n  .left {\n    display: flex;\n    justify-content: flex-end;\n    box-sizing: border-box;\n  }\n\n  .right {\n    display: flex;\n    align-items: center;\n    border-left: 1px solid white;\n    box-sizing: border-box;\n    padding-left: 8%;\n    width: 40%;\n\n    @media (max-width: 1500px) {\n      padding-left: 2%;\n    }\n\n    @media (max-width: 900px) {\n      display: none;\n    }\n    padding-right: 5%;\n    padding-left: 5%;\n  }\n\n  p {\n    text-align: right;\n    font-size: 12px;\n    color: white;\n    font-weight: 300;\n    margin: 0;\n    margin-right: 4%;\n    width: 56%;\n\n    @media (max-width: 1500px) {\n      width: 90%;\n    }\n\n    @media (max-width: 900px) {\n      display: none;\n    }\n  }\n\n  span {\n    font-size: 14px;\n    font-weight: 300;\n    margin: 0;\n    color: white;\n    text-align: right;\n  }\n"])));var hn,jn,mn;const gn=I.a.div(hn||(hn=Object(k.a)(["\n  display: flex;\n  height: 10vh;\n  justify-content: flex-end;\n  width: fit-content;\n\n  @media (max-width: 900px) {\n    flex-direction: row-reverse;\n    width: 100%;\n  }\n"]))),un=I.a.button(jn||(jn=Object(k.a)(['\n  width: 130px;\n  border: none;\n  background: transparent;\n  color: white;\n  font-family: "Poppins";\n  font-weight: 500;\n  cursor: pointer;\n  transition: 0.2s;\n\n  &:hover {\n    color: #c13216;\n  }\n']))),On=I.a.button(mn||(mn=Object(k.a)(['\n  font-family: "Poppins";\n  font-weight: 500;\n  width: 130px;\n  background-color: white;\n  border: none;\n  color: #c13216;\n  align-items: center;\n  cursor: pointer;\n  transition: 0.2s;\n\n  @media (max-width: 900px) {\n    width: 100%;\n  }\n\n  &:hover {\n    color: #c13216;\n    background-color: transparent;\n  }\n'])));var fn,wn=n=>{let{reset:e,logout:t}=n;return Object(p.jsxs)(gn,{children:[Object(p.jsxs)(On,{onClick:e,children:["Continuar",Object(p.jsx)("br",{}),"Navegando"]}),Object(p.jsx)(un,{onClick:t,children:"Logout"})]})};const yn=I.a.section(fn||(fn=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-left: 5%;\n  width: 40%;\n\n  @media (max-width: 1500px) {\n    width: 100%;\n    margin-left: 10%;\n  }\n\n  h1 {\n    font-size: 48px;\n    font-weight: 600;\n    color: white;\n    margin: 0;\n    line-height: 44px;\n  }\n\n  span {\n    font-size: 14px;\n    font-weight: 300;\n    margin: 0;\n    color: white;\n    text-align: right;\n    line-height: 14px;\n  }\n"])));var vn=()=>{let[n,e]=Object(o.useState)(600);const t=Object(r.k)();return localStorage.getItem("Name"),"reset"===localStorage.Name&&(n="Infinity"),setTimeout((()=>{n>0&&e(n-1)}),1e3),0===n&&(t.push("content/reactapp/us/en/login.html?wcmmode=disabled"),window.location.reload()),Object(p.jsxs)(yn,{children:[Object(p.jsx)("h1",{children:n}),Object(p.jsx)("span",{children:"seconds"})]})};Object(v.MapTo)("reactapp/components/content/footer")((n=>{let{text:e}=n;const t=Object(r.k)();return Object(p.jsxs)(xn,{children:[Object(p.jsx)("div",{className:"left",children:Object(p.jsx)("p",{children:e})}),Object(p.jsxs)("div",{className:"right",children:[Object(p.jsxs)("span",{children:["Application",Object(p.jsx)("br",{}),"refresh in"]}),Object(p.jsx)(vn,{})]}),Object(p.jsx)(wn,{reset:()=>{localStorage.setItem("Name","reset")},logout:()=>{t.push("/content/reactapp/us/en/login.html?wcmmode=disabled"),window.location.reload(),localStorage.clear()}})]})}));var kn=t(150),In=t(151),qn=t(46),Sn=t(21);const zn=u((()=>t.e(3).then(t.t.bind(null,303,7)))),An=u((()=>t.e(4).then(t.t.bind(null,304,7))));Object(s.MapTo)("reactapp/components/download")(Sn.DownloadV1,{isEmpty:Sn.DownloadV1IsEmptyFn}),Object(s.MapTo)("reactapp/components/list")(Sn.ListV2,{isEmpty:Sn.ListV2IsEmptyFn}),Object(s.MapTo)("reactapp/components/separator")(Sn.SeparatorV1,{isEmpty:Sn.SeparatorV1IsEmptyFn}),Object(s.MapTo)("reactapp/components/button")(Sn.ButtonV1,{isEmpty:Sn.ButtonV1IsEmptyFn}),Object(s.MapTo)("reactapp/components/teaser")(Sn.TeaserV1,{isEmpty:Sn.TeaserV1IsEmptyFn}),Object(s.MapTo)("reactapp/components/image")(Sn.ImageV2,{isEmpty:Sn.ImageV2IsEmptyFn}),Object(s.MapTo)("reactapp/components/title")(zn,{isEmpty:In.TitleV2IsEmptyFn}),Object(s.MapTo)("reactapp/components/breadcrumb")(Sn.BreadCrumbV2,{isEmpty:Sn.BreadCrumbV2IsEmptyFn}),Object(s.MapTo)("reactapp/components/navigation")(Sn.NavigationV1),Object(s.MapTo)("reactapp/components/languagenavigation")(Sn.LanguageNavigationV1),Object(s.MapTo)("reactapp/components/tabs")(qn.TabsV1,{isEmpty:qn.TabsV1IsEmptyFn}),Object(s.MapTo)("reactapp/components/accordion")(qn.AccordionV1,{isEmpty:qn.AccordionV1IsEmptyFn}),Object(s.MapTo)("reactapp/components/carousel")(An,{isEmpty:kn.CarouselV1IsEmptyFn}),Object(s.MapTo)("reactapp/components/container")(qn.ContainerV1,{isEmpty:qn.ContainerV1IsEmptyFn});t(301);const Mn={};document.addEventListener("DOMContentLoaded",(()=>{i.ModelManager.initialize(Mn).then((n=>{const e=Object(a.a)();Object(c.render)(Object(p.jsx)(r.e,{history:e,children:Object(p.jsx)(d,{history:e,cqChildren:n[i.Constants.CHILDREN_PROP],cqItems:n[i.Constants.ITEMS_PROP],cqItemsOrder:n[i.Constants.ITEMS_ORDER_PROP],cqPath:n[i.Constants.PATH_PROP],locationPathname:window.location.pathname})}),document.getElementById("spa-root"))}))}))}},[[302,1,2]]]);
//# sourceMappingURL=main.5fca93bf.chunk.js.map