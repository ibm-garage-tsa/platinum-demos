(window.webpackJsonp=window.webpackJsonp||[]).push([[21,22,34],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),b=a("NmYn"),o=a.n(b),l=a("Wbzz"),i=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),A=a.n(s),d=a("QH2O"),m=a.n(d),u=a("qKvR"),p=function(e){var t,a=e.title,n=e.theme,r=e.tabs,b=void 0===r?[]:r;return Object(u.b)("div",{className:A()(m.a.pageHeader,(t={},t[m.a.withTabs]=b.length,t[m.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},a)))))},j=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,b=r.baseUrl,o=r.subDirectory,i=b+"/edit/"+r.branch+o+"/src/pages"+t;return b?Object(u.b)("div",{className:"bx--row "+j.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:j.link,href:i},"Edit this page on GitHub"))):null},O=a("FCXl"),h=a("dI71"),f=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],b=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),b=a===r,i=new RegExp(r+"/?(#.*)?$"),c=n.replace(i,a);return Object(u.b)("li",{key:e,className:A()((t={},t[f.selectedItem]=b,t),f.listItem)},Object(u.b)(l.Link,{className:f.link,to:""+c},e))}));return Object(u.b)("div",{className:f.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:f.list},b))))))},t}(r.a.Component),x=a("MjG9"),w=a("CzIb"),y=a("Asxa"),P=a("OIbQ"),E=a.n(P),v=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(y.c,{className:E.a.row},Object(u.b)(y.a,null,Object(u.b)("div",{className:E.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,b=t.frontmatter,s=void 0===b?{}:b,A=t.relativePagePath,d=t.titleType,m=s.tabs,j=s.title,h=s.theme,f=s.description,y=s.keywords,P=s.date,E=Object(w.a)().interiorTheme,I=Object(l.useStaticQuery)("2456312558").site.pathPrefix,T=I?n.pathname.replace(I,""):n.pathname,B=m?T.split("/").filter(Boolean).slice(-1)[0]||o()(m[0],{lower:!0}):"",k=h||E;return Object(u.b)(c.a,{tabs:m,homepage:!1,theme:k,pageTitle:j,pageDescription:f,pageKeywords:y,titleType:d},Object(u.b)(p,{title:r?Object(u.b)(r,null):j,label:"label",tabs:m,theme:k}),m&&Object(u.b)(N,{title:j,slug:T,tabs:m,currentTab:B}),Object(u.b)(x.a,{padded:!0},a,Object(u.b)(g,{relativePagePath:A}),Object(u.b)(v,{date:P})),Object(u.b)(O.a,{pageContext:t,location:n,slug:T,tabs:m,currentTab:B}),Object(u.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},oylH:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return i})),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a("wx14"),r=a("zLVn"),b=(a("q1tI"),a("7ljp")),o=a("013z"),l=(a("qKvR"),["components"]),i=function(){return Object(b.b)("span",null,"API-enabled application integration ",Object(b.b)("br",null)," 100-level live demo")},c={},s={Title:i,_frontmatter:c},A=o.a;function d(e){var t=e.components,a=Object(r.a)(e,l);return Object(b.b)(A,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(b.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"17.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAADABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQC/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQAC/9oADAMBAAIQAxAAAAGTZFANf//EABcQAQADAAAAAAAAAAAAAAAAAAIAAQP/2gAIAQEAAQUCmjVHNqp//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFxAAAwEAAAAAAAAAAAAAAAAAAAERQf/aAAgBAQAGPwIl0aT0/8QAGRABAQADAQAAAAAAAAAAAAAAAQARIUFh/9oACAEBAAE/IePlhhgMgdQT/9oADAMBAAIAAwAAABAH7//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAEDAQE/ECf/xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPxBn/8QAHBABAAICAwEAAAAAAAAAAAAAAQARITFBUWHh/9oACAEBAAE/EDRwMeZggRYOr+sYiUQ3WCf/2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(b.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/platinum-demos/static/6632d8dc0e368ad39f42cb5cab5cd877/2e753/100-INT-API-enabled-Prep-GitHub-banner-short.jpg",srcSet:["/platinum-demos/static/6632d8dc0e368ad39f42cb5cab5cd877/69549/100-INT-API-enabled-Prep-GitHub-banner-short.jpg 288w","/platinum-demos/static/6632d8dc0e368ad39f42cb5cab5cd877/473e3/100-INT-API-enabled-Prep-GitHub-banner-short.jpg 576w","/platinum-demos/static/6632d8dc0e368ad39f42cb5cab5cd877/2e753/100-INT-API-enabled-Prep-GitHub-banner-short.jpg 1152w","/platinum-demos/static/6632d8dc0e368ad39f42cb5cab5cd877/74f4b/100-INT-API-enabled-Prep-GitHub-banner-short.jpg 1728w","/platinum-demos/static/6632d8dc0e368ad39f42cb5cab5cd877/cbe2c/100-INT-API-enabled-Prep-GitHub-banner-short.jpg 2000w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(b.b)("span",{id:"place1"}),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"DEMO OVERVIEW"),Object(b.b)("th",{parentName:"tr",align:"left"}))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Scenario overview")),Object(b.b)("td",{parentName:"tr",align:"left"},"Access applications through APIs and integrations. This demo automates a series of steps to: obtain and validate input information from a customer with a concern, open a case in Salesforce, attach the incoming information to the case, analyze the tone of the situation, and respond to the customer with the case number and expected date for resolution.",Object(b.b)("br",null),Object(b.b)("br",null),"To automate this customer interaction, we will use both APIs and integrations to back-end applications.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Demo products")),Object(b.b)("td",{parentName:"tr",align:"left"},"Cloud Pak for Integration 2021.1 on ROKS 4.6")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Demo capabilities")),Object(b.b)("td",{parentName:"tr",align:"left"},"IBM App Connect Enterprise, IBM App Connect Enterprise Designer, API Connect (APIC)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Key demo considerations")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"You are using a shared demo environment with multiple sellers at the same time. Please don’t create custom flows or APIs in this environment. Don’t do any customization (including customer names). Please just follow the steps. If you need to do a customized demo, please select the 300 demo option."),Object(b.b)("br",null),Object(b.b)("br",null),"This demo script has multiple tasks that each have multiple steps. In each step, you have the details about what you need to do (",Object(b.b)("strong",{parentName:"td"},"Actions"),"), what you can say while delivering this demo step (",Object(b.b)("strong",{parentName:"td"},"Narration"),"), and what diagrams and screenshots you will see (",Object(b.b)("strong",{parentName:"td"},"Screenshots"),"). This demo script is a suggestion, and you are welcome to customize based in your sales opportunity. Most importantly, practice this demo in advance. If the demo seems easy for you to execute, the customer will focus on the content. If it seems difficult for you to execute, the customer will focus on your delivery.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"How to get support")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"#Techdemos-Automation-Support")," ",Object(b.b)("a",{href:"https://ibm.enterprise.slack.com/app_redirect?channel=techdemos-automation-support",target:"_blank",rel:"noreferrer"},"Slack channel"))))),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"PREPARE TO GIVE THE DEMO")),Object(b.b)("details",null,Object(b.b)("summary",null,"1 - Request your demo environment"),Object(b.b)("br",null),Object(b.b)("p",null,"Request your ",Object(b.b)("a",{href:"https://ibm-garage-tsa.github.io/cp4i-demohub/cp4i-on-roks/",target:"_blank",rel:"noreferrer"},"demo environment"),Object(b.b)("br",null),Object(b.b)("br",null)),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Create a ROKS cluster in IBM Cloud",Object(b.b)("br",null)),Object(b.b)("li",{parentName:"ul"},"Install Cloud Pak for Integration on ROKS Cluster",Object(b.b)("br",null)),Object(b.b)("li",{parentName:"ul"},"Access your ROKS cluster by Command Line",Object(b.b)("br",null))),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",{parentName:"strong",href:"#place1"},"Go to top")))),Object(b.b)("details",null,Object(b.b)("summary",null,"2 - Review demo content"),Object(b.b)("br",null),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Learn the demo scenario"),Object(b.b)("li",{parentName:"ul"},"Check the ",Object(b.b)("a",{href:"https://dw1.s81c.com/caas-storage/5Khi7XGf/_videos/IBM%20Cloud%20Pak%20for%20Integration%20Overview_%20Creating%20and%20Managing%20APIs.mp4",target:"_blank",rel:"noreferrer"},"demo video")),Object(b.b)("li",{parentName:"ul"},"Review the demo sequence")),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",{parentName:"strong",href:"#place1"},"Go to top")))),Object(b.b)("details",null,Object(b.b)("summary",null,"3 - Prerequisites, preparing your environment, and delivery options"),Object(b.b)("br",null),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Learn about ",Object(b.b)("a",{href:"https://ibm-garage-tsa.github.io/cp4i-demohub/salesdemos/carrepair-new/prepare",target:"_blank",rel:"noreferrer"},"prerequisites and preparing your environment")),Object(b.b)("li",{parentName:"ul"},"Check the different delivery options and be ready to deliver the demo"),Object(b.b)("li",{parentName:"ul"},"Download the ",Object(b.b)("a",{parentName:"li",href:"/platinum-demos/1d7406a4ef0d430029b9920c6d1125fe/slides.pptx"},"demo slides"))),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",{parentName:"strong",href:"#place1"},"Go to top")))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-100-integration-demo-preparation-mdx-27dd859ee8ef81916518.js.map