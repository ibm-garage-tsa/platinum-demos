(window.webpackJsonp=window.webpackJsonp||[]).push([[27,38,40,42],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),b=a.n(o),i=a("Wbzz"),c=a("Xrax"),l=a("k4MR"),s=a("TSYQ"),d=a.n(s),m=a("QH2O"),u=a.n(m),p=a("qKvR"),j=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(p.b)("div",{className:d()(u.a.pageHeader,(t={},t[u.a.withTabs]=o.length,t[u.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:u.a.text},a)))))},O=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,b=r.subDirectory,c=o+"/edit/"+r.branch+b+"/src/pages"+t;return o?Object(p.b)("div",{className:"bx--row "+O.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:O.link,href:c},"Edit this page on GitHub"))):null},x=a("FCXl"),h=a("dI71"),f=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=b()(e,{lower:!0,strict:!0}),o=a===r,c=new RegExp(r+"/?(#.*)?$"),l=n.replace(c,a);return Object(p.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=o,t),f.listItem)},Object(p.b)(i.Link,{className:f.link,to:""+l},e))}));return Object(p.b)("div",{className:f.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:f.list},o))))))},t}(r.a.Component),T=a("MjG9"),v=a("CzIb"),w=a("Asxa"),P=a("OIbQ"),y=a.n(P),k=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(w.c,{className:y.a.row},Object(p.b)(w.a,null,Object(p.b)("div",{className:y.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,s=void 0===o?{}:o,d=t.relativePagePath,m=t.titleType,u=s.tabs,O=s.title,h=s.theme,f=s.description,w=s.keywords,P=s.date,y=Object(v.a)().interiorTheme,I=Object(i.useStaticQuery)("2456312558").site.pathPrefix,z=I?n.pathname.replace(I,""):n.pathname,H=u?z.split("/").filter(Boolean).slice(-1)[0]||b()(u[0],{lower:!0}):"",A=h||y;return Object(p.b)(l.a,{tabs:u,homepage:!1,theme:A,pageTitle:O,pageDescription:f,pageKeywords:w,titleType:m},Object(p.b)(j,{title:r?Object(p.b)(r,null):O,label:"label",tabs:u,theme:A}),u&&Object(p.b)(N,{title:O,slug:z,tabs:u,currentTab:H}),Object(p.b)(T.a,{padded:!0},a,Object(p.b)(g,{relativePagePath:d}),Object(p.b)(k,{date:P})),Object(p.b)(x.a,{pageContext:t,location:n,slug:z,tabs:u,currentTab:H}),Object(p.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},Ze17:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return c})),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return m}));var n=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),b=a("013z"),i=(a("qKvR"),["components"]),c=function(){return Object(o.b)("span",null,"API-enabled application integration ",Object(o.b)("br",null)," 100-level live demo")},l={},s={Title:c,_frontmatter:l},d=b.a;function m(e){var t=e.components,a=Object(r.a)(e,i);return Object(o.b)(d,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"![banner]","(./images/100-INT API-enabled 100 Prep GitHub banner 8-3-21 short_3.5.1.jpg)"),Object(o.b)("span",{id:"place1"}),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Preparation"),Object(o.b)("th",{parentName:"tr",align:"left"}))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Scenario overview")),Object(o.b)("td",{parentName:"tr",align:"left"},"Access applications through APIs and integrations")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Demo outline")),Object(o.b)("td",{parentName:"tr",align:"left"},"This demo automates a series of steps to: obtain and validate input information from a customer with a concern, open a case in Salesforce, attach the incoming information to the case, analyze the tone of the situation, and respond to the customer with the case number and expected date for resolution.",Object(o.b)("br",null),Object(o.b)("br",null),"To automate this customer interaction, we will use both APIs and integrations to back-end applications.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Before the demo")),Object(o.b)("td",{parentName:"tr",align:"left"})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Key demo considerations")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("em",{parentName:"td"},"You are using a shared demo environment with multiple sellers at the same time. Please don’t create custom flows or APIs in this environment. Don’t do any customization (including customer names). Please just follow the steps. If you need to do a customized demo, please select the 300 demo option."))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"How to get support")),Object(o.b)("td",{parentName:"tr",align:"left"},"Please direct any questions in preparation for the demo to the ",Object(o.b)("strong",{parentName:"td"},"#Techdemos-Automation-Support")," ",Object(o.b)("a",{parentName:"td",href:"https://ibm.enterprise.slack.com/app_redirect?channel=techdemos-automation-support"},"Slack channel"),".")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#place1"},"Go to top"))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-100-integration-index-mdx-5d78c9fc64a89f3f23ce.js.map