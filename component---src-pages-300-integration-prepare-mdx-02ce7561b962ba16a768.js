(window.webpackJsonp=window.webpackJsonp||[]).push([[21,18,20],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("NmYn"),i=a.n(r),s=a("Wbzz"),c=a("Xrax"),b=a("k4MR"),l=a("TSYQ"),u=a.n(l),d=a("QH2O"),m=a.n(d),p=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,o=e.tabs,r=void 0===o?[]:o;return Object(p.b)("div",{className:u()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,r=o.baseUrl,i=o.subDirectory,c=r+"/edit/"+o.branch+i+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:c},"Edit this page on GitHub"))):null},j=a("FCXl"),x=a("dI71"),f=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),r=a===o,c=new RegExp(o+"/?(#.*)?$"),b=n.replace(c,a);return Object(p.b)("li",{key:e,className:u()((t={},t[f.selectedItem]=r,t),f.listItem)},Object(p.b)(s.Link,{className:f.link,to:""+b},e))}));return Object(p.b)("div",{className:f.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:f.list},r))))))},t}(o.a.Component),y=a("MjG9"),w=a("CzIb"),N=a("Asxa"),T=a("OIbQ"),P=a.n(T),k=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(N.c,{className:P.a.row},Object(p.b)(N.a,null,Object(p.b)("div",{className:P.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,r=t.frontmatter,l=void 0===r?{}:r,u=t.relativePagePath,d=t.titleType,m=l.tabs,g=l.title,x=l.theme,f=l.description,N=l.keywords,T=l.date,P=Object(w.a)().interiorTheme,I=Object(s.useStaticQuery)("2456312558").site.pathPrefix,D=I?n.pathname.replace(I,""):n.pathname,A=m?D.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",C=x||P;return Object(p.b)(b.a,{tabs:m,homepage:!1,theme:C,pageTitle:g,pageDescription:f,pageKeywords:N,titleType:d},Object(p.b)(h,{title:o?Object(p.b)(o,null):g,label:"label",tabs:m,theme:C}),m&&Object(p.b)(v,{title:g,slug:D,tabs:m,currentTab:A}),Object(p.b)(y.a,{padded:!0},a,Object(p.b)(O,{relativePagePath:u}),Object(p.b)(k,{date:T})),Object(p.b)(j.a,{pageContext:t,location:n,slug:D,tabs:m,currentTab:A}),Object(p.b)(c.a,null))}},"7lnZ":function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return c})),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return g}));var n=a("wx14"),o=a("zLVn"),r=(a("q1tI"),a("7ljp")),i=a("013z"),s=(a("qKvR"),["components"]),c=function(){return Object(r.b)("span",null,"# Automate customer interactions using APIs and Integration 300-level Demo (Own Environment)")},b={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},u=l("FeatureCard"),d=l("AnchorLinks"),m=l("AnchorLink"),p={Title:c,_frontmatter:b},h=i.a;function g(e){var t=e.components,a=Object(o.a)(e,s);return Object(r.b)(h,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(u,{title:"300 Demo Script",color:"dark",mdxType:"FeatureCard"},Object(r.b)("img",{src:"./images/automation-tech-demos-screen-github.png",alt:"10"}),Object(r.b)("img",{src:"images/demo-script.jpg",alt:"banner"}),Object(r.b)("img",{src:"./images/automation-tech-demos-screen-github.png",alt:"10"})),Object(r.b)("p",null,"This demo shows how to automate customer interactions using APIs and Integrations.  To put this in a context of a business it is based on a car repair scenario.  Most likely this is not an exact scenario for your client.  It is up to you to make the linkage to your customer’s needs to support their customers."),Object(r.b)("p",null,"All businesses have customers.  Governments support citizens, B2B businesses have upstream and downstream businesses they deal with and most obviously B2C businesses have customers who need support.  The demo works through a series of steps to: obtain and validate input information from a customer with a concern, open a case in Salesforce, attach the incoming information to the case, analyze the tone of the situation, and respond to the customer with the case number and expected date for resolution.  This should be applicable to almost every business.  Do the planning to understand your customer’s customer and what type of interactions they might have that fit this pattern."),Object(r.b)("p",null,"This Demo Script has multiple tasks, that each have multiple steps. In each step you have the details about what you need to do (",Object(r.b)("strong",{parentName:"p"},"Actions"),") and what you can say delivering this demo step (",Object(r.b)("strong",{parentName:"p"},"Narration"),"). This Demo Script is a suggestion, and you are welcome to customize based in your sales opportunity. Most importantly, practice this demo in advance. If the demo seems easy for you to execute the customer will notice this. If it seems difficult for you to execute the customer will notice this as well."),Object(r.b)(d,{mdxType:"AnchorLinks"},Object(r.b)(m,{mdxType:"AnchorLink"},"1 - Demo preparation")),Object(r.b)("hr",null),Object(r.b)("span",{id:"place1"},"1 - Demo Preparation"),Object(r.b)("summary",null,"1.1 - Demo Preparation"),Object(r.b)("br",null),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Details"),Object(r.b)("th",{parentName:"tr",align:"left"}))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Demo Use Case")),Object(r.b)("td",{parentName:"tr",align:"left"},"Access applications through APIs and Integrations")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Demo Description")),Object(r.b)("td",{parentName:"tr",align:"left"},"Use Watson AI together with SaaS connectivity to Salesforce and ServiceNow to create a self-service car repair API giving customers real-time estimates and integrating directly with systems of record. The demo shows easy API creation with No-code App Connect Designer, rate limiting plans, security policies and Self-Service API consumption using the API Connect Portal.")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Demo Capabilities")," | ACE Designer, ACE, APIC\n",Object(r.b)("strong",{parentName:"p"},"Demo Products")," | CP4I 2021.1 on ROKS 4.6"),Object(r.b)("p",null,"Here you will be able to prepare yourself to deliver this demo. To deliver this demo, follow the steps below:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"https://ibm-garage-tsa.github.io/cp4i-demohub/cp4i-on-roks/"},"Requesting your demo environment"),"\nLearn the Demo Scenario, check the Demo Video and review the Demo Sequence.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"https://ibm-garage-tsa.github.io/cp4i-demohub/salesdemos/carrepair-new/prepare"},"Prerequisites and preparing your environment"),"\nCheck the different delivery options and be ready to deliver the demo"))),Object(r.b)("hr",null),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"#place1"},"Go to Top")))}g.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-300-integration-prepare-mdx-02ce7561b962ba16a768.js.map