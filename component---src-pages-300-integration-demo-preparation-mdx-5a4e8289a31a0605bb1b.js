(window.webpackJsonp=window.webpackJsonp||[]).push([[40,23,35,41],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),b=a("NmYn"),l=a.n(b),o=a("Wbzz"),i=a("Xrax"),c=a("k4MR"),A=a("TSYQ"),s=a.n(A),d=a("QH2O"),u=a.n(d),p=a("qKvR"),m=function(e){var t,a=e.title,n=e.theme,r=e.tabs,b=void 0===r?[]:r;return Object(p.b)("div",{className:s()(u.a.pageHeader,(t={},t[u.a.withTabs]=b.length,t[u.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:u.a.text},a)))))},g=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,b=r.baseUrl,l=r.subDirectory,i=b+"/edit/"+r.branch+l+"/src/pages"+t;return b?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:i},"Edit this page on GitHub"))):null},O=a("FCXl"),h=a("dI71"),N=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],b=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),b=a===r,i=new RegExp(r+"/?(#.*)?$"),c=n.replace(i,a);return Object(p.b)("li",{key:e,className:s()((t={},t[N.selectedItem]=b,t),N.listItem)},Object(p.b)(o.Link,{className:N.link,to:""+c},e))}));return Object(p.b)("div",{className:N.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:N.list},b))))))},t}(r.a.Component),x=a("MjG9"),w=a("CzIb"),y=a("Asxa"),v=a("OIbQ"),E=a.n(v),P=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(y.c,{className:E.a.row},Object(p.b)(y.a,null,Object(p.b)("div",{className:E.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,b=t.frontmatter,A=void 0===b?{}:b,s=t.relativePagePath,d=t.titleType,u=A.tabs,g=A.title,h=A.theme,N=A.description,y=A.keywords,v=A.date,E=Object(w.a)().interiorTheme,I=Object(o.useStaticQuery)("2456312558").site.pathPrefix,B=I?n.pathname.replace(I,""):n.pathname,T=u?B.split("/").filter(Boolean).slice(-1)[0]||l()(u[0],{lower:!0}):"",k=h||E;return Object(p.b)(c.a,{tabs:u,homepage:!1,theme:k,pageTitle:g,pageDescription:N,pageKeywords:y,titleType:d},Object(p.b)(m,{title:r?Object(p.b)(r,null):g,label:"label",tabs:u,theme:k}),u&&Object(p.b)(f,{title:g,slug:B,tabs:u,currentTab:T}),Object(p.b)(x.a,{padded:!0},a,Object(p.b)(j,{relativePagePath:s}),Object(p.b)(P,{date:v})),Object(p.b)(O.a,{pageContext:t,location:n,slug:B,tabs:u,currentTab:T}),Object(p.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},s6RB:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return i})),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a("wx14"),r=a("zLVn"),b=(a("q1tI"),a("7ljp")),l=a("013z"),o=(a("qKvR"),["components"]),i=function(){return Object(b.b)("span",null,"API-enabled application integration ",Object(b.b)("br",null)," 300-level live demo")},c={},A={Title:i,_frontmatter:c},s=l.a;function d(e){var t=e.components,a=Object(r.a)(e,o);return Object(b.b)(s,Object(n.a)({},A,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(b.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"17.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAADABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQC/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQAC/9oADAMBAAIQAxAAAAGTZFANf//EABcQAQADAAAAAAAAAAAAAAAAAAIAAQP/2gAIAQEAAQUCmjVHNqp//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFxAAAwEAAAAAAAAAAAAAAAAAAAERQf/aAAgBAQAGPwIl0aT0/8QAGRABAQADAQAAAAAAAAAAAAAAAQARIUFh/9oACAEBAAE/IePlhhgMgdQT/9oADAMBAAIAAwAAABAH7//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAEDAQE/ECf/xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPxBn/8QAHBABAAICAwEAAAAAAAAAAAAAAQARITFBUWHh/9oACAEBAAE/EDRwMeZggRYOr+sYiUQ3WCf/2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(b.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/platinum-demos/static/3789b63399db5a77a80896fb08467739/2e753/300-int-API-enabled-prep-GitHub-banner-8-3-21-short.jpg",srcSet:["/platinum-demos/static/3789b63399db5a77a80896fb08467739/69549/300-int-API-enabled-prep-GitHub-banner-8-3-21-short.jpg 288w","/platinum-demos/static/3789b63399db5a77a80896fb08467739/473e3/300-int-API-enabled-prep-GitHub-banner-8-3-21-short.jpg 576w","/platinum-demos/static/3789b63399db5a77a80896fb08467739/2e753/300-int-API-enabled-prep-GitHub-banner-8-3-21-short.jpg 1152w","/platinum-demos/static/3789b63399db5a77a80896fb08467739/74f4b/300-int-API-enabled-prep-GitHub-banner-8-3-21-short.jpg 1728w","/platinum-demos/static/3789b63399db5a77a80896fb08467739/cbe2c/300-int-API-enabled-prep-GitHub-banner-8-3-21-short.jpg 2000w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(b.b)("span",{id:"place1"}),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"DEMO OVERVIEW"),Object(b.b)("th",{parentName:"tr",align:null}))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("strong",{parentName:"td"},"Scenario overview")),Object(b.b)("td",{parentName:"tr",align:null},"Access applications through APIs and integrations. Use Watson AI together with SaaS connectivity to Salesforce and ServiceNow to create a self-service car repair API giving customers real-time estimates and integrating directly with systems of record. The demo shows easy API creation with no-code App Connect Designer, rate limiting plans, security policies and self-service API consumption using the API Connect portal.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("strong",{parentName:"td"},"Demo products")),Object(b.b)("td",{parentName:"tr",align:null},"Cloud Pak for Integration 2021.1 on ROKS 4.6")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("strong",{parentName:"td"},"Demo capabilities")),Object(b.b)("td",{parentName:"tr",align:null},"IBM App Connect Enterprise, IBM App Connect Enterprise Designer, API Connect (APIC)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("strong",{parentName:"td"},"Demo guidance")),Object(b.b)("td",{parentName:"tr",align:null},"This demo script has multiple tasks that each have multiple steps. In each step, you have the details about what you need to do (",Object(b.b)("strong",{parentName:"td"},"Actions"),"), what you can say while delivering this demo step (",Object(b.b)("strong",{parentName:"td"},"Narration"),"), and what diagrams and screenshots you will see (",Object(b.b)("strong",{parentName:"td"},"Screenshots"),"). This demo script is a suggestion, and you are welcome to customize based in your sales opportunity. Most importantly, practice this demo in advance. If the demo seems easy for you to execute, the customer will focus on the content. If it seems difficult for you to execute, the customer will focus on your delivery.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("strong",{parentName:"td"},"How to get support")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("strong",{parentName:"td"},"#Techdemos-Automation-Support")," ",Object(b.b)("a",{href:"https://ibm.enterprise.slack.com/app_redirect?channel=techdemos-automation-support",target:"_blank",rel:"noreferrer"},"Slack channel"))))),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"PREPARE TO GIVE THE DEMO")),Object(b.b)("details",null,Object(b.b)("summary",null,"1 - Request your demo environment"),Object(b.b)("br",null),Object(b.b)("p",null,"Request your ",Object(b.b)("a",{href:"https://ibm-garage-tsa.github.io/cp4i-demohub/cp4i-on-roks/",target:"_blank",rel:"noreferrer"},"demo environment"),Object(b.b)("br",null),Object(b.b)("br",null)),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Create a ROKS cluster in IBM Cloud",Object(b.b)("br",null)),Object(b.b)("li",{parentName:"ul"},"Install Cloud Pak for Integration on ROKS Cluster",Object(b.b)("br",null)),Object(b.b)("li",{parentName:"ul"},"Access your ROKS cluster by Command Line",Object(b.b)("br",null))),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",{parentName:"strong",href:"#place1"},"Go to top")))),Object(b.b)("details",null,Object(b.b)("summary",null,"2 - Review demo content"),Object(b.b)("br",null),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Learn the demo scenario"),Object(b.b)("li",{parentName:"ul"},"Check the ",Object(b.b)("a",{href:"https://dw1.s81c.com/caas-storage/5Khi7XGf/_videos/IBM%20Cloud%20Pak%20for%20Integration%20Overview_%20Creating%20and%20Managing%20APIs.mp4",target:"_blank",rel:"noreferrer"},"demo video")),Object(b.b)("li",{parentName:"ul"},"Review the demo sequence")),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",{parentName:"strong",href:"#place1"},"Go to top")))),Object(b.b)("details",null,Object(b.b)("summary",null,"3 - Prerequisites, preparing your environment, and delivery options"),Object(b.b)("br",null),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Learn about ",Object(b.b)("a",{href:"https://ibm-garage-tsa.github.io/cp4i-demohub/salesdemos/carrepair-new/prepare",target:"_blank",rel:"noreferrer"},"prerequisites and preparing your environment")),Object(b.b)("li",{parentName:"ul"},"Check the different delivery options and be ready to deliver the demo"),Object(b.b)("li",{parentName:"ul"},"Download the ",Object(b.b)("a",{parentName:"li",href:"/platinum-demos/1d7406a4ef0d430029b9920c6d1125fe/slides.pptx"},"demo slides"))),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",{parentName:"strong",href:"#place1"},"Go to top")))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-300-integration-demo-preparation-mdx-5a4e8289a31a0605bb1b.js.map