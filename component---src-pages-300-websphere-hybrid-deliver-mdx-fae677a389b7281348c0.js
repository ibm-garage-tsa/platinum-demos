(window.webpackJsonp=window.webpackJsonp||[]).push([[47,22],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),i=a.n(o),s=a("Wbzz"),b=a("Xrax"),c=a("k4MR"),l=a("TSYQ"),d=a.n(l),m=a("QH2O"),p=a.n(m),u=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(u.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=o.length,t[p.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:p.a.text},a)))))},g=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,i=r.subDirectory,b=o+"/edit/"+r.branch+i+"/src/pages"+t;return o?Object(u.b)("div",{className:"bx--row "+g.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:g.link,href:b},"Edit this page on GitHub"))):null},O=a("FCXl"),f=a("dI71"),N=a("I8xM"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),o=a===r,b=new RegExp(r+"/?(#.*)?$"),c=n.replace(b,a);return Object(u.b)("li",{key:e,className:d()((t={},t[N.selectedItem]=o,t),N.listItem)},Object(u.b)(s.Link,{className:N.link,to:""+c},e))}));return Object(u.b)("div",{className:N.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:N.list},o))))))},t}(r.a.Component),y=a("MjG9"),v=a("CzIb"),w=a("Asxa"),T=a("OIbQ"),k=a.n(T),P=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(w.c,{className:k.a.row},Object(u.b)(w.a,null,Object(u.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,l=void 0===o?{}:o,d=t.relativePagePath,m=t.titleType,p=l.tabs,g=l.title,f=l.theme,N=l.description,w=l.keywords,T=l.date,k=Object(v.a)().interiorTheme,I=Object(s.useStaticQuery)("2456312558").site.pathPrefix,A=I?n.pathname.replace(I,""):n.pathname,D=p?A.split("/").filter(Boolean).slice(-1)[0]||i()(p[0],{lower:!0}):"",S=f||k;return Object(u.b)(c.a,{tabs:p,homepage:!1,theme:S,pageTitle:g,pageDescription:N,pageKeywords:w,titleType:m},Object(u.b)(h,{title:r?Object(u.b)(r,null):g,label:"label",tabs:p,theme:S}),p&&Object(u.b)(x,{title:g,slug:A,tabs:p,currentTab:D}),Object(u.b)(y.a,{padded:!0},a,Object(u.b)(j,{relativePagePath:d}),Object(u.b)(P,{date:T})),Object(u.b)(O.a,{pageContext:t,location:n,slug:A,tabs:p,currentTab:D}),Object(u.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},mgW7:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return b})),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return g}));var n=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),i=a("013z"),s=(a("qKvR"),["components"]),b=function(){return Object(o.b)("span",null,"NOTE: INTEGRATION CODE FOR DISPLAY PURPOSES")},c={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},d=l("FeatureCard"),m=l("AnchorLinks"),p=l("AnchorLink"),u={Title:b,_frontmatter:c},h=i.a;function g(e){var t=e.components,a=Object(r.a)(e,s);return Object(o.b)(h,Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(d,{title:"Demo preparation",color:"dark",mdxType:"FeatureCard"},Object(o.b)("img",{src:"./images/demo-script.jpg",alt:"banner"})),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Preparation"),Object(o.b)("th",{parentName:"tr",align:"left"}))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Scenario overview")),Object(o.b)("td",{parentName:"tr",align:"left"},"Access applications through APIs and Integrations")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Demo outline")),Object(o.b)("td",{parentName:"tr",align:"left"},"Use Watson AI together with SaaS connectivity to Salesforce and ServiceNow to create a self-service car repair API giving customers real-time estimates and integrating directly with systems of record. The demo shows easy API creation with No-code App Connect Designer, rate limiting plans, security policies and Self-Service API consumption using the API Connect Portal.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Before the demo")),Object(o.b)("td",{parentName:"tr",align:"left"},"jghjkghjkghjkghjk")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Key demo considerations")),Object(o.b)("td",{parentName:"tr",align:"left"},"jghjkghjkghjkghjk")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"How to get support")),Object(o.b)("td",{parentName:"tr",align:"left"},"jghjkghjkghjkghjk")))),Object(o.b)("p",null,"WHAT IS THIS? This demo shows how to automate customer interactions using APIs and Integrations.  To put this in a context of a business it is based on a car repair scenario.  Most likely this is not an exact scenario for your client.  It is up to you to make the linkage to your customer’s needs to support their customers."),Object(o.b)("p",null,"All businesses have customers.  Governments support citizens, B2B businesses have upstream and downstream businesses they deal with and most obviously B2C businesses have customers who need support.  The demo works through a series of steps to: obtain and validate input information from a customer with a concern, open a case in Salesforce, attach the incoming information to the case, analyze the tone of the situation, and respond to the customer with the case number and expected date for resolution.  This should be applicable to almost every business.  Do the planning to understand your customer’s customer and what type of interactions they might have that fit this pattern."),Object(o.b)("p",null,"This Demo Script has multiple tasks, that each have multiple steps. In each step you have the details about what you need to do (",Object(o.b)("strong",{parentName:"p"},"Actions"),") and what you can say delivering this demo step (",Object(o.b)("strong",{parentName:"p"},"Narration"),"). This Demo Script is a suggestion, and you are welcome to customize based in your sales opportunity. Most importantly, practice this demo in advance. If the demo seems easy for you to execute the customer will notice this. If it seems difficult for you to execute the customer will notice this as well."),Object(o.b)(m,{mdxType:"AnchorLinks"},Object(o.b)(p,{mdxType:"AnchorLink"},"1 - Demo preparation")),Object(o.b)("hr",null),Object(o.b)("span",{id:"place1"},"1 - Demo Preparation"),Object(o.b)("summary",null,"1.1 - Demo Preparation"),Object(o.b)("br",null),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Details"),Object(o.b)("th",{parentName:"tr",align:"left"}))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Demo Use Case")),Object(o.b)("td",{parentName:"tr",align:"left"},"Access applications through APIs and Integrations")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Demo Description")),Object(o.b)("td",{parentName:"tr",align:"left"},"Use Watson AI together with SaaS connectivity to Salesforce and ServiceNow to create a self-service car repair API giving customers real-time estimates and integrating directly with systems of record. The demo shows easy API creation with No-code App Connect Designer, rate limiting plans, security policies and Self-Service API consumption using the API Connect Portal.")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Demo Capabilities")," | ACE Designer, ACE, APIC\n",Object(o.b)("strong",{parentName:"p"},"Demo Products")," | CP4I 2021.1 on ROKS 4.6"),Object(o.b)("p",null,"Here you will be able to prepare yourself to deliver this demo. To deliver this demo, follow the steps below:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://ibm-garage-tsa.github.io/cp4i-demohub/cp4i-on-roks/"},"Requesting your demo environment"),"\nLearn the Demo Scenario, check the Demo Video and review the Demo Sequence.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://ibm-garage-tsa.github.io/cp4i-demohub/salesdemos/carrepair-new/prepare"},"Prerequisites and preparing your environment"),"\nCheck the different delivery options and be ready to deliver the demo"))),Object(o.b)("hr",null),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"#place1"},"Go to Top")))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-300-websphere-hybrid-deliver-mdx-fae677a389b7281348c0.js.map