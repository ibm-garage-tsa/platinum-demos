(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),b=a("NmYn"),o=a.n(b),c=a("Wbzz"),i=a("Xrax"),l=a("k4MR"),s=a("TSYQ"),m=a.n(s),d=a("QH2O"),p=a.n(d),g=a("qKvR"),A=function(e){var t,a=e.title,n=e.theme,r=e.tabs,b=void 0===r?[]:r;return Object(g.b)("div",{className:m()(p.a.pageHeader,(t={},t[p.a.withTabs]=b.length,t[p.a.darkMode]="dark"===n,t))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:p.a.text},a)))))},u=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,b=r.baseUrl,o=r.subDirectory,i=b+"/edit/"+r.branch+o+"/src/pages"+t;return b?Object(g.b)("div",{className:"bx--row "+u.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:u.link,href:i},"Edit this page on GitHub"))):null},O=a("FCXl"),h=a("dI71"),N=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],b=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),b=a===r,i=new RegExp(r+"/?(#.*)?$"),l=n.replace(i,a);return Object(g.b)("li",{key:e,className:m()((t={},t[N.selectedItem]=b,t),N.listItem)},Object(g.b)(c.Link,{className:N.link,to:""+l},e))}));return Object(g.b)("div",{className:N.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",{"aria-label":t},Object(g.b)("ul",{className:N.list},b))))))},t}(r.a.Component),w=a("MjG9"),y=a("CzIb"),x=a("Asxa"),v=a("OIbQ"),P=a.n(v),I=function(e){var t=e.date,a=new Date(t);return t?Object(g.b)(x.c,{className:P.a.row},Object(g.b)(x.a,null,Object(g.b)("div",{className:P.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,b=t.frontmatter,s=void 0===b?{}:b,m=t.relativePagePath,d=t.titleType,p=s.tabs,u=s.title,h=s.theme,N=s.description,x=s.keywords,v=s.date,P=Object(y.a)().interiorTheme,T=Object(c.useStaticQuery)("2456312558").site.pathPrefix,E=T?n.pathname.replace(T,""):n.pathname,k=p?E.split("/").filter(Boolean).slice(-1)[0]||o()(p[0],{lower:!0}):"",B=h||P;return Object(g.b)(l.a,{tabs:p,homepage:!1,theme:B,pageTitle:u,pageDescription:N,pageKeywords:x,titleType:d},Object(g.b)(A,{title:r?Object(g.b)(r,null):u,label:"label",tabs:p,theme:B}),p&&Object(g.b)(f,{title:u,slug:E,tabs:p,currentTab:k}),Object(g.b)(w.a,{padded:!0},a,Object(g.b)(j,{relativePagePath:m}),Object(g.b)(I,{date:v})),Object(g.b)(O.a,{pageContext:t,location:n,slug:E,tabs:p,currentTab:k}),Object(g.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},oylH:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return l})),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return g}));var n,r=a("wx14"),b=a("zLVn"),o=(a("q1tI"),a("7ljp")),c=a("013z"),i=(a("qKvR"),["components"]),l=function(){return Object(o.b)("span",null,"API-enabled application integration ",Object(o.b)("br",null)," 100-level live demo")},s={},m=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),d={Title:l,_frontmatter:s},p=c.a;function g(e){var t=e.components,a=Object(b.a)(e,i);return Object(o.b)(p,Object(r.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"17.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAADABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQC/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQAC/9oADAMBAAIQAxAAAAGTZFANf//EABcQAQADAAAAAAAAAAAAAAAAAAIAAQP/2gAIAQEAAQUCmjVHNqp//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFxAAAwEAAAAAAAAAAAAAAAAAAAERQf/aAAgBAQAGPwIl0aT0/8QAGRABAQADAQAAAAAAAAAAAAAAAQARIUFh/9oACAEBAAE/IePlhhgMgdQT/9oADAMBAAIAAwAAABAH7//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAEDAQE/ECf/xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPxBn/8QAHBABAAICAwEAAAAAAAAAAAAAAQARITFBUWHh/9oACAEBAAE/EDRwMeZggRYOr+sYiUQ3WCf/2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/platinum-demos/static/6632d8dc0e368ad39f42cb5cab5cd877/2e753/100-INT-API-enabled-Prep-GitHub-banner-short.jpg",srcSet:["/platinum-demos/static/6632d8dc0e368ad39f42cb5cab5cd877/69549/100-INT-API-enabled-Prep-GitHub-banner-short.jpg 288w","/platinum-demos/static/6632d8dc0e368ad39f42cb5cab5cd877/473e3/100-INT-API-enabled-Prep-GitHub-banner-short.jpg 576w","/platinum-demos/static/6632d8dc0e368ad39f42cb5cab5cd877/2e753/100-INT-API-enabled-Prep-GitHub-banner-short.jpg 1152w","/platinum-demos/static/6632d8dc0e368ad39f42cb5cab5cd877/74f4b/100-INT-API-enabled-Prep-GitHub-banner-short.jpg 1728w","/platinum-demos/static/6632d8dc0e368ad39f42cb5cab5cd877/cbe2c/100-INT-API-enabled-Prep-GitHub-banner-short.jpg 2000w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(o.b)("br",null),Object(o.b)("span",{id:"place1"}),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"DEMO OVERVIEW"),Object(o.b)("th",{parentName:"tr",align:"left"}))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Scenario overview")),Object(o.b)("td",{parentName:"tr",align:"left"},"Access applications through APIs and integrations. This demo automates a series of steps to: obtain and validate input information from a customer with a concern; open a case in Salesforce; attach the incoming information to the case; analyze the tone of the situation, and; respond to the customer with the case number and expected date for resolution.",Object(o.b)("br",null),Object(o.b)("br",null),"To automate this customer interaction, we will use both APIs and integrations to back-end applications.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Demo products")),Object(o.b)("td",{parentName:"tr",align:"left"},"Cloud Pak for Integration")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Demo capabilities")),Object(o.b)("td",{parentName:"tr",align:"left"},"API management; Application integration; Connectors")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Demo script")),Object(o.b)("td",{parentName:"tr",align:"left"},"This demo script has multiple tasks that each have multiple steps. In each step, you have the details about what you need to do (",Object(o.b)("strong",{parentName:"td"},"Actions"),"), what you can say while delivering this demo step (",Object(o.b)("strong",{parentName:"td"},"Narration"),"), and what diagrams and screenshots you will see.",Object(o.b)("br",null),Object(o.b)("br",null)," This demo script is a suggestion, and you are welcome to customize based on your sales opportunity. Most importantly, practice this demo in advance. If the demo seems easy for you to execute, the customer will focus on the content. If it seems difficult for you to execute, the customer will focus on your delivery. ",Object(o.b)("br",null),Object(o.b)("br",null)," You are using a shared demo environment with multiple sellers at the same time. Please don’t create custom flows or APIs in this environment. Also, don’t do any customization (including customer names). Please just follow the steps. If you need to do a customized demo, please select the 300-level demo option.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Demo downloads")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{href:"/platinum-demos/6e687db46493a663b04a5f107f3d2d1c/100-Integration-API-Demo-Script.pdf",target:"_blank",rel:"noreferrer"},"API-enabled application integration script PDF"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Required versions")),Object(o.b)("td",{parentName:"tr",align:"left"},"Cloud Pak for Integration V2021.2")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"How to get support")),Object(o.b)("td",{parentName:"tr",align:"left"},"Contact ",Object(o.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0124J683GW",target:"_blank",rel:"noreferrer"},"#itz-techzone-support")," or ",Object(o.b)("a",{href:"mailto:techzone.help@ibm.com"},Object(o.b)("a",{parentName:"td",href:"mailto:techzone.help@ibm.com"},"techzone.help@ibm.com"))," regarding issues with reserving and provisioning TechZone environments. ",Object(o.b)("br",null),Object(o.b)("br",null)," Contact ",Object(o.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0216F39ACU",target:"_blank",rel:"noreferrer"},"#platinumdemos-automation-support")," regarding issues with setting up and running this demo use case.")))),Object(o.b)("h3",null,Object(o.b)("strong",{parentName:"h3"},"PREPARE TO GIVE THE DEMO")),Object(o.b)("details",null,Object(o.b)("summary",null,"1 - Requesting access to the shared environment"),Object(o.b)("br",null),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"1.1")),Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"Accessing the Cloud Pak Outcomes collection")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 1.1.1"),Object(o.b)("td",{parentName:"tr",align:"left"},"Access the ",Object(o.b)("a",{href:"https://techzone.ibm.com/my/reservations/create/610af4dfcdbe520017f00ac7",target:"_blank",rel:"noreferrer"},"Cloud Pak for Integration - Outcomes")," page on IBM Asset Repo, and log in using your IBM credentials. "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ")))),Object(o.b)("br",null),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"1.2")),Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"Defining the details of your ROKS reservation")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 1.2.1"),Object(o.b)("td",{parentName:"tr",align:"left"},"Select your ",Object(o.b)("strong",{parentName:"td"},"Reservation type"),". "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ",Object(o.b)("br",null),Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/100-integration/images/outcomes-reservation-type.png",width:800}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 1.2.2"),Object(o.b)("td",{parentName:"tr",align:"left"},"Follow the ",Object(o.b)("strong",{parentName:"td"},"Create a reservation")," form to define the details of your ROKS Reservation. "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ",Object(o.b)("br",null),Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/100-integration/images/outcomes-create-reservation.png",width:800}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 1.2.3"),Object(o.b)("td",{parentName:"tr",align:"left"},"After a few seconds, your Cloud Pak for Integration Outcomes Demonstration is ready. ",Object(o.b)("br",null),Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/100-integration/images/outcomes-ready.png",width:800}))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#place1"},"Go to top")))),Object(o.b)("details",null,Object(o.b)("summary",null,"2 - Accepting the invitation for API provider organizations"),Object(o.b)("br",null),Object(o.b)(m,{mdxType:"InlineNotification"},Object(o.b)("strong",null,"NOTE"),": There is a known issue with Firefox when trying to access the API. For the best user experience, we recommend that you use the latest version of Safari or Chrome."),Object(o.b)("br",null),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"2.1")),Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"Copy login and password")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 2.1.1"),Object(o.b)("td",{parentName:"tr",align:"left"},"Check your email. You should have received two emails, one from IBM Technology Zone and the second one from the APIC Administrator. Let’s start with the email from ",Object(o.b)("strong",{parentName:"td"},"IBM Technology Zone"),". In this email, you should have the environment URL, login, and password. Copy the ",Object(o.b)("strong",{parentName:"td"},"login")," and ",Object(o.b)("strong",{parentName:"td"},"password"),". ",Object(o.b)("br",null),Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/100-integration/images/outcomes-email.png",width:800}))))),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"2.2")),Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"Access the demo API provider organization")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 2.2.1"),Object(o.b)("td",{parentName:"tr",align:"left"},"As part of the demo, you will need to access the Demo API provider organization in IBM API Connect. Open the email from the ",Object(o.b)("strong",{parentName:"td"},"APIC Administrator"),", and click the link to accept the invitation. ",Object(o.b)("br",null),Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/100-integration/images/api-org-invitation.png",width:800}))))),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"2.3")),Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"Log in to present demo")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 2.3.1"),Object(o.b)("td",{parentName:"tr",align:"left"},"Select the ",Object(o.b)("strong",{parentName:"td"},"openldap Outcomes")," authentication type. "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ",Object(o.b)("br",null),Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/100-integration/images/100-preparation-2-3-1.png",width:800}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 2.3.2"),Object(o.b)("td",{parentName:"tr",align:"left"},"Log in using the ",Object(o.b)("strong",{parentName:"td"},"username")," and ",Object(o.b)("strong",{parentName:"td"},"password")," from Action 2.1.1. "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ",Object(o.b)("br",null),Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/100-integration/images/apic-login.png",width:800}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 2.3.3"),Object(o.b)("td",{parentName:"tr",align:"left"},"Now you should see a ",Object(o.b)("strong",{parentName:"td"},"Registration completed successfully")," screen. You are ready to present the demo! "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ",Object(o.b)("br",null),Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/100-integration/images/apic-registration.png",width:800}))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#place1"},"Go to top")))),Object(o.b)("details",null,Object(o.b)("summary",null,"3 - Accessing the environment"),Object(o.b)("br",null),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"3.1")),Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"Receive and review emails")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 3.1.1"),Object(o.b)("td",{parentName:"tr",align:"left"},"When you need to access your demo environment, use the URL, login, and password provided in the email from IBM Technology Zone. ",Object(o.b)("strong",{parentName:"td"},"Note"),": Take note of these as you will use them multiple times during the demo. ",Object(o.b)("br",null),Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/100-integration/images/outcomes-email.png",width:800}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 3.1.2"),Object(o.b)("td",{parentName:"tr",align:"left"},"Open the ",Object(o.b)("strong",{parentName:"td"},"URL"),".",Object(o.b)("br",null))))),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"3.2")),Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"Log in to Enterprise LDAP")," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 3.2.1"),Object(o.b)("td",{parentName:"tr",align:"left"},"If necessary, accept the risks. On the ",Object(o.b)("em",{parentName:"td"},"Log in")," page, click on the ",Object(o.b)("strong",{parentName:"td"},"Enterprise LDAP")," link. ",Object(o.b)("br",null),Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/100-integration/images/100-preparation-3-2-1.png",width:800}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 3.2.2"),Object(o.b)("td",{parentName:"tr",align:"left"},"Log in using the username and password that you received in your email. ",Object(o.b)("br",null),Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/100-integration/images/100-preparation-3-2-2.png",width:800}))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#place1"},"Go to top")))),Object(o.b)("hr",null),Object(o.b)("p",null,"Click ",Object(o.b)("a",{parentName:"p",href:"/platinum-demos/100-integration/demo-script"},"here")," to go to the ",Object(o.b)("strong",{parentName:"p"},"Demo script")," on the next tab."))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-100-integration-demo-preparation-mdx-855261f406a63a25006e.js.map