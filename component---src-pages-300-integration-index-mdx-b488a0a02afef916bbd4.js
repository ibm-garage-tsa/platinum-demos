(window.webpackJsonp=window.webpackJsonp||[]).push([[40,25,37,39,41],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),i=a.n(o),b=a("Wbzz"),s=a("Xrax"),c=a("k4MR"),l=a("TSYQ"),d=a.n(l),m=a("QH2O"),u=a.n(m),p=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(p.b)("div",{className:d()(u.a.pageHeader,(t={},t[u.a.withTabs]=o.length,t[u.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:u.a.text},a)))))},g=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,i=r.subDirectory,s=o+"/edit/"+r.branch+i+"/src/pages"+t;return o?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},j=a("FCXl"),f=a("dI71"),x=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),o=a===r,s=new RegExp(r+"/?(#.*)?$"),c=n.replace(s,a);return Object(p.b)("li",{key:e,className:d()((t={},t[x.selectedItem]=o,t),x.listItem)},Object(p.b)(b.Link,{className:x.link,to:""+c},e))}));return Object(p.b)("div",{className:x.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:x.list},o))))))},t}(r.a.Component),y=a("MjG9"),v=a("CzIb"),w=a("Asxa"),T=a("OIbQ"),P=a.n(T),k=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(w.c,{className:P.a.row},Object(p.b)(w.a,null,Object(p.b)("div",{className:P.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,l=void 0===o?{}:o,d=t.relativePagePath,m=t.titleType,u=l.tabs,g=l.title,f=l.theme,x=l.description,w=l.keywords,T=l.date,P=Object(v.a)().interiorTheme,I=Object(b.useStaticQuery)("2456312558").site.pathPrefix,D=I?n.pathname.replace(I,""):n.pathname,A=u?D.split("/").filter(Boolean).slice(-1)[0]||i()(u[0],{lower:!0}):"",C=f||P;return Object(p.b)(c.a,{tabs:u,homepage:!1,theme:C,pageTitle:g,pageDescription:x,pageKeywords:w,titleType:m},Object(p.b)(h,{title:r?Object(p.b)(r,null):g,label:"label",tabs:u,theme:C}),u&&Object(p.b)(N,{title:g,slug:D,tabs:u,currentTab:A}),Object(p.b)(y.a,{padded:!0},a,Object(p.b)(O,{relativePagePath:d}),Object(p.b)(k,{date:T})),Object(p.b)(j.a,{pageContext:t,location:n,slug:D,tabs:u,currentTab:A}),Object(p.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},"bKv/":function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return s})),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return m}));var n=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),i=a("013z"),b=(a("qKvR"),["components"]),s=function(){return Object(o.b)("span",null,"API-enabled application integration ",Object(o.b)("br",null)," 300-level live demo")},c={},l={Title:s,_frontmatter:c},d=i.a;function m(e){var t=e.components,a=Object(r.a)(e,b);return Object(o.b)(d,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("img",{src:"./images/300-integration-preparation-github-banner.jpg",alt:"banner"}),Object(o.b)("span",{id:"place1"}),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Preparation"),Object(o.b)("th",{parentName:"tr",align:"left"}))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Scenario overview")),Object(o.b)("td",{parentName:"tr",align:"left"},"Access applications through APIs and integrations")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Demo outline")),Object(o.b)("td",{parentName:"tr",align:"left"},"Use Watson AI together with SaaS connectivity to Salesforce and ServiceNow to create a self-service car repair API giving customers real-time estimates and integrating directly with record systems. The demo shows easy API creation with no-code App Connect Designer, rate limiting plans, security policies and self-service API consumption using the API Connect portal.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Demo capabilities")),Object(o.b)("td",{parentName:"tr",align:"left"},"ACE Designer, ACE, APIC")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Demo products")),Object(o.b)("td",{parentName:"tr",align:"left"},"CP4I 2021.1 on ROKS 4.6")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Before the demo")),Object(o.b)("td",{parentName:"tr",align:"left"},"This demo shows how to automate customer interactions using APIs and Integrations. To put this in a context of a business it is based on a car repair scenario. The demo works through a series of steps to: obtain and validate input information from a customer with a concern, open a case in Salesforce, attach the incoming information to the case, analyze the tone of the situation, and respond to the customer with the case number and expected date for resolution. This should be applicable to almost every business. Do the planning to understand your customer’s customer and what type of interactions they might have that fit this pattern. Here you will be able to prepare yourself to deliver this demo. To be ready to deliver this demo, follow the steps below:",Object(o.b)("br",null),Object(o.b)("br",null),"1. ",Object(o.b)("a",{parentName:"td",href:"https://ibm-garage-tsa.github.io/cp4i-demohub/cp4i-on-roks/"},"Requesting your demo environment"),". Learn the Demo Scenario, check the Demo Video and review the Demo Sequence.",Object(o.b)("br",null),Object(o.b)("br",null),"2. ",Object(o.b)("a",{parentName:"td",href:"https://ibm-garage-tsa.github.io/cp4i-demohub/salesdemos/carrepair-new/prepare"},"Prerequisites and preparing your environment"),". Check the different delivery options and be ready to deliver the demo.",Object(o.b)("br",null),Object(o.b)("br",null),"3. Download the Demo slides ",Object(o.b)("a",{parentName:"td",href:"/platinum-demos/1d7406a4ef0d430029b9920c6d1125fe/slides.pptx"},"here"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Key demo considerations")),Object(o.b)("td",{parentName:"tr",align:"left"},"This Demo Script has multiple tasks, that each have multiple steps. In each step you have the details about what you need to do (",Object(o.b)("strong",{parentName:"td"},"Actions"),") and what you can say delivering this demo step (",Object(o.b)("strong",{parentName:"td"},"Narration"),"). This Demo Script is a suggestion, and you are welcome to customize based in your sales opportunity. Most importantly, practice this demo in advance. If the demo seems easy for you to execute the customer will notice this. If it seems difficult for you to execute the customer will notice this as well.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"How to get support")),Object(o.b)("td",{parentName:"tr",align:"left"},"Please direct any questions in preparation for the demo to the ",Object(o.b)("strong",{parentName:"td"},"#Techdemos-Automation-Support")," ",Object(o.b)("a",{parentName:"td",href:"https://ibm.enterprise.slack.com/app_redirect?channel=techdemos-automation-support"},"Slack channel"),".")))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-300-integration-index-mdx-b488a0a02afef916bbd4.js.map