(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"013z":function(t,e,a){"use strict";var n=a("q1tI"),r=a.n(n),b=a("NmYn"),o=a.n(b),i=a("Wbzz"),c=a("Xrax"),s=a("k4MR"),l=a("TSYQ"),p=a.n(l),m=a("QH2O"),d=a.n(m),g=a("qKvR"),u=function(t){var e,a=t.title,n=t.theme,r=t.tabs,b=void 0===r?[]:r;return Object(g.b)("div",{className:p()(d.a.pageHeader,(e={},e[d.a.withTabs]=b.length,e[d.a.darkMode]="dark"===n,e))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:d.a.text},a)))))},j=a("BAC9"),O=function(t){var e=t.relativePagePath,a=t.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,b=r.baseUrl,o=r.subDirectory,c=b+"/edit/"+r.branch+o+"/src/pages"+e;return b?Object(g.b)("div",{className:"bx--row "+j.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:j.link,href:c},"Edit this page on GitHub"))):null},h=a("FCXl"),A=a("dI71"),N=a("I8xM"),f=function(t){function e(){return t.apply(this,arguments)||this}return Object(A.a)(e,t),e.prototype.render=function(){var t=this.props,e=t.title,a=t.tabs,n=t.slug,r=n.split("/").filter(Boolean).slice(-1)[0],b=a.map((function(t){var e,a=o()(t,{lower:!0,strict:!0}),b=a===r,c=new RegExp(r+"/?(#.*)?$"),s=n.replace(c,a);return Object(g.b)("li",{key:t,className:p()((e={},e[N.selectedItem]=b,e),N.listItem)},Object(g.b)(i.Link,{className:N.link,to:""+s},t))}));return Object(g.b)("div",{className:N.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",{"aria-label":e},Object(g.b)("ul",{className:N.list},b))))))},e}(r.a.Component),y=a("MjG9"),w=a("CzIb"),v=a("Asxa"),x=a("OIbQ"),T=a.n(x),k=function(t){var e=t.date,a=new Date(e);return e?Object(g.b)(v.c,{className:T.a.row},Object(g.b)(v.a,null,Object(g.b)("div",{className:T.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};e.a=function(t){var e=t.pageContext,a=t.children,n=t.location,r=t.Title,b=e.frontmatter,l=void 0===b?{}:b,p=e.relativePagePath,m=e.titleType,d=l.tabs,j=l.title,A=l.theme,N=l.description,v=l.keywords,x=l.date,T=Object(w.a)().interiorTheme,S=Object(i.useStaticQuery)("2456312558").site.pathPrefix,E=S?n.pathname.replace(S,""):n.pathname,R=d?E.split("/").filter(Boolean).slice(-1)[0]||o()(d[0],{lower:!0}):"",B=A||T;return Object(g.b)(s.a,{tabs:d,homepage:!1,theme:B,pageTitle:j,pageDescription:N,pageKeywords:v,titleType:m},Object(g.b)(u,{title:r?Object(g.b)(r,null):j,label:"label",tabs:d,theme:B}),d&&Object(g.b)(f,{title:j,slug:E,tabs:d,currentTab:R}),Object(g.b)(y.a,{padded:!0},a,Object(g.b)(O,{relativePagePath:p}),Object(g.b)(k,{date:x})),Object(g.b)(h.a,{pageContext:e,location:n,slug:E,tabs:d,currentTab:R}),Object(g.b)(c.a,null))}},BAC9:function(t,e,a){t.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(t,e,a){t.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(t,e,a){t.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(t,e,a){t.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},uafL:function(t,e,a){"use strict";a.r(e),a.d(e,"Title",(function(){return c})),a.d(e,"_frontmatter",(function(){return s})),a.d(e,"default",(function(){return m}));var n=a("wx14"),r=a("zLVn"),b=(a("q1tI"),a("7ljp")),o=a("013z"),i=(a("qKvR"),["components"]),c=function(){return Object(b.b)("span",null,"Application resource management",Object(b.b)("br",null)," 300-level live demo")},s={},l={Title:c,_frontmatter:s},p=o.a;function m(t){var e=t.components,a=Object(r.a)(t,i);return Object(b.b)(p,Object(n.a)({},l,a,{components:e,mdxType:"MDXLayout"}),Object(b.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(b.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"17.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAADABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAIE/8QAFAEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAABySIUBT//xAAYEAACAwAAAAAAAAAAAAAAAAAAAQIhQf/aAAgBAQABBQIyTv8A/8QAFxEBAAMAAAAAAAAAAAAAAAAAAAEDMf/aAAgBAwEBPwGzEP/EABYRAAMAAAAAAAAAAAAAAAAAAAMQMf/aAAgBAgEBPwEdX//EABQQAQAAAAAAAAAAAAAAAAAAABD/2gAIAQEABj8Cf//EABgQAQADAQAAAAAAAAAAAAAAAAEAIXFB/9oACAEBAAE/IS3IWtjAB5P/2gAMAwEAAgADAAAAEAff/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAEh/9oACAEDAQE/EDGR/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAEx/9oACAECAQE/EDdf/8QAGhABAQACAwAAAAAAAAAAAAAAAREAIUFRYf/aAAgBAQABPxAgDsqeYSq67YmAI5z/2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(b.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/platinum-demos/static/a3889f730b45bcb72f4f72a8de28e931/2e753/ARM-GitHub-script-banner-12-15-21.jpg",srcSet:["/platinum-demos/static/a3889f730b45bcb72f4f72a8de28e931/69549/ARM-GitHub-script-banner-12-15-21.jpg 288w","/platinum-demos/static/a3889f730b45bcb72f4f72a8de28e931/473e3/ARM-GitHub-script-banner-12-15-21.jpg 576w","/platinum-demos/static/a3889f730b45bcb72f4f72a8de28e931/2e753/ARM-GitHub-script-banner-12-15-21.jpg 1152w","/platinum-demos/static/a3889f730b45bcb72f4f72a8de28e931/74f4b/ARM-GitHub-script-banner-12-15-21.jpg 1728w","/platinum-demos/static/a3889f730b45bcb72f4f72a8de28e931/cbe2c/ARM-GitHub-script-banner-12-15-21.jpg 2000w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(b.b)("span",{id:"top"}),Object(b.b)("details",null,Object(b.b)("summary",null,"Introduction"),Object(b.b)("br",null),Object(b.b)("p",null,"In this growing digital economy, the application is the business. Application performance, therefore, is one of highest CIO priorities."),Object(b.b)("br",null),Object(b.b)("p",null,"Home Robots Inc is a fully digital company selling innovative “household chores” robots globally via its RobotShop online marketplace. Clients browse and purchase through RobotShop’s microservices-based cloud native app. Spot promotions and other marketing events, however, generate unpredictable load patterns. The result? Poor application performance and bad customer experiences. Without full stack visibility, IT Ops teams tend to either over or under provision resources based on best-guesses - which is highly inefficient, very costly and risky."),Object(b.b)("br",null),Object(b.b)("p",null,"In this demo, I’ll show you how IBM Turbonomic, a solution based on Application Resource Management, helps RobotShop’s SREs and IT Ops teams proactively assure application performance and operational efficiency across their mission critical deployments. We will:"),Object(b.b)("br",null),"• See how Turbonomic stitches together a full-stack view from business applications to their supporting infrastructure ",Object(b.b)("br",null),"• Examine the resource optimization recommendations generated by AI-based platform analytics ",Object(b.b)("br",null),"• Demonstrate how to automate execution of platform-derived 'Actions' ",Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("p",null,"Let’s get started!"),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Note"),": This demo will be focus on application resource management in private clouds. A different demo will illustrate application resource management as it pertains to public clouds. "),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(b.b)("details",null,Object(b.b)("summary",null,"1 - Getting a global view of the applications and their infrastructure dependencies"),Object(b.b)("br",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"1.1")),Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"Ingesting data from observability platforms and other sources")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"Turbonomic requires configuration and operational performance data to make resource optimization recommendations. The more data the better.",Object(b.b)("br",null),Object(b.b)("br",null),"RobotShop is being observed by Instana. Turbonomic ingests data from Instana and builds a common data model to ‘stitch’ together a graphical view of the application-to-resource dependencies. This is called the ‘Supply Chain’.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 1.1.1"),Object(b.b)("td",{parentName:"tr",align:"left"},"Click ",Object(b.b)("strong",{parentName:"td"},"Settings")," (1) and select ",Object(b.b)("strong",{parentName:"td"},"Target Configurations")," (2). Select ",Object(b.b)("strong",{parentName:"td"},"Instana")," (3). ",Object(b.b)("br",null)," ",Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/target-configurations.jpg",width:500}))))),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"1.2")),Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"Examine the global supply chain")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"The global supply chain models the dynamic relationships from the managed application, across the dependent infrastructure layers.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 1.2.1"),Object(b.b)("td",{parentName:"tr",align:"left"},"Log in to the Turbonomic instance and click the home ",Object(b.b)("strong",{parentName:"td"},"On")," button. ",Object(b.b)("strong",{parentName:"td"},"Note"),": the next seven steps will refer to the below graphic.",Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/global-supply-chain-6.jpg",width:800}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 1.2.2"),Object(b.b)("td",{parentName:"tr",align:"left"},"Hover over the ",Object(b.b)("strong",{parentName:"td"},"Business Application")," entity (1), which shows the ",Object(b.b)("strong",{parentName:"td"},"business applications")," that Turbonomic is aware of. The color of each circle reflects the current health of the entities: red represents performance recommendations, yellow represents efficiency recommendations, and green is healthy.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 1.2.3"),Object(b.b)("td",{parentName:"tr",align:"left"},"Hover over the ",Object(b.b)("strong",{parentName:"td"},"Business Transaction")," entity (2), which shows logical business functions that an end-user would execute (such as a purchase or add-to-cart). Business applications are composed of these business transactions.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 1.2.4"),Object(b.b)("td",{parentName:"tr",align:"left"},"Hover over the ",Object(b.b)("strong",{parentName:"td"},"Service")," entity (3). A service is basically a REST endpoint, and transactions use the services.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 1.2.5"),Object(b.b)("td",{parentName:"tr",align:"left"},"Hover over the ",Object(b.b)("strong",{parentName:"td"},"Application Component")," entity (4). Services are hosted and executed in an Application component, like a JVM.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 1.2.6"),Object(b.b)("td",{parentName:"tr",align:"left"},"Hover over the ",Object(b.b)("strong",{parentName:"td"},"Container")," (5). Application components run on a container platform like Kubernetes.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 1.2.7"),Object(b.b)("td",{parentName:"tr",align:"left"},"Hover over the ",Object(b.b)("strong",{parentName:"td"},"Virtual Machine")," entity (6). Application platforms are hosted in virtualized environments like vSphere.")))),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"1.3")),Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"Explore the Top Business Applications")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"Turbonomic displays the applications in order of risk. "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 1.3.1"),Object(b.b)("td",{parentName:"tr",align:"left"},"Click the ",Object(b.b)("strong",{parentName:"td"},"Business Applications")," entity. "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ",Object(b.b)("br",null),Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/RobotShop-SLO-Violation-5.jpg",width:800}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"We see that RobotShop currently has SLO violations - response time is up and service levels are below expectations."," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ",Object(b.b)("br",null),Object(b.b)("br",null),"The Application Resource Health bar indicates that there are some critical performance issues as well as some areas to improve efficiency. "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ",Object(b.b)("br",null),Object(b.b)("br",null),"The Actions button will enable you to take the recommended actions directly from Turbonomic.")))),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(b.b)("details",null,Object(b.b)("summary",null,"2 - Drilling into the RobotShop application"),Object(b.b)("br",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"2.1")),Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"Examine RobotShop resource dependencies")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"Now that we have a broad understanding of the global view, let’s examine the health of RobotShop. This is called ‘scoping’.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 2.1.1"),Object(b.b)("td",{parentName:"tr",align:"left"},"Click the ",Object(b.b)("strong",{parentName:"td"},"RobotShop")," link to scope to RobotShop.",Object(b.b)("br",null),Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/2021-12-16_23-44-25.png",width:800}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 2.1.2"),Object(b.b)("td",{parentName:"tr",align:"left"},"Notice that we are scoped to RobotShop, with data coming from Instana. ",Object(b.b)("br",null),Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/RobotShop-Supply-Chain.jpg",width:800}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"The supply chain is scoped to RobotShop, and the charts provide a quick view of RobotShop’s overall operating health.",Object(b.b)("br",null),Object(b.b)("br",null),"Since RobotShop is a Kubernetes-based cloud native application, all the entities in the supply chain are specific to a container infrastructure.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 2.1.3"),Object(b.b)("td",{parentName:"tr",align:"left"},"On the ",Object(b.b)("strong",{parentName:"td"},"Pending Actions")," chart, click ",Object(b.b)("strong",{parentName:"td"},"Show All"),".",Object(b.b)("br",null)," ",Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/pending-actions-show-all-6.png",width:800}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"The Turbonomic engine performs an ongoing holistic analysis of the environment, generating actions that you can take to resolve and avoid emerging problems. ",Object(b.b)("br",null),Object(b.b)("br",null),"Here we can see container resize actions, categorized as performance and efficiency actions. These are displayed for you to either investigate further or execute directly.",Object(b.b)("br",null),Object(b.b)("br",null),"Container resize up actions are typically performance-centric actions that are driven to resolve an underlying resource congestion issue. Container resize down actions are typically efficiency-centric actions that are pointing to a resource optimization opportunity, likely a consequence of resource over-provisioning.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 2.1.4"),Object(b.b)("td",{parentName:"tr",align:"left"},"On the ",Object(b.b)("strong",{parentName:"td"},"Action Center")," panel, select ",Object(b.b)("strong",{parentName:"td"},"Workload Controller")," (1) and click ",Object(b.b)("strong",{parentName:"td"},"Details")," (2). ",Object(b.b)("br",null)," ",Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/RobotShop-Performance-Action-click-DETAILS.jpg",width:800}))))),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(b.b)("details",null,Object(b.b)("summary",null,"3 - Understanding the AI-derived resource optimization recommendations "),Object(b.b)("br",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"3.1")),Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"Analyze a RobotShop performance recommendation")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"Let’s explore one of the performance recommendations in more detail.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 3.1.1"),Object(b.b)("td",{parentName:"tr",align:"left"},"On the ",Object(b.b)("strong",{parentName:"td"},"Action Details")," page, click ",Object(b.b)("strong",{parentName:"td"},"Expand Details")," to inspect the rationale behind the recommendations.",Object(b.b)("br",null)," ",Object(b.b)("br",null),Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/Expand-Performance-Action-Details.png",width:800}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"The graphs show an imminent congestion for the RobotShop card pod, based on the a percentile analysis from the last 30 days observation period. A recommendation to upsize the existing memory from 100 MB to 228 MB is made. The analysis also shows that if this action is taken, it will result in a reduction of memory utilization from 82% to 36%. This memory upsizing will mitigate the detected risk of contention for memory resources. ")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 3.1.2"),Object(b.b)("td",{parentName:"tr",align:"left"},"Review the performance action details.",Object(b.b)("br",null)," ",Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/performance-action-details.png",width:800}))))),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"3.2")),Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"Analyze a RobotShop Efficiency recommendation")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"When the architect initially does sizing, the values are based on best guesses and taking a safer path - typically resulting in the over-provisioning of resources. There is often opportunity to reclaim unused expensive resources and save costs.",Object(b.b)("br",null),Object(b.b)("br",null)," Based on resource analysis of the RobotShop rabbitmq service, we can see that memory is over-provisioned and can be reduced. An Efficiency recommendation is made to reduce the memory of the pod from 512 MB to 384 MB. The downsizing will improve memory utilization without impacting overall service performance.",Object(b.b)("br",null),Object(b.b)("br",null),"CPU, on the other hand, is potentially risky at 90% utilization level. The CPU congestion can result in a performance degradation of this service. A recommendation is also made to double the CPU capacity of the RobotShop rabbitmq container.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 3.2.1"),Object(b.b)("td",{parentName:"tr",align:"left"},"On the ",Object(b.b)("strong",{parentName:"td"},"Action Center")," panel, select ",Object(b.b)("strong",{parentName:"td"},"rabbitmq"),". Click ",Object(b.b)("strong",{parentName:"td"},"Details"),".",Object(b.b)("br",null),Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/rabbitmq-overprovisioning-1.jpg",width:800})," ",Object(b.b)("br",null),Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/rabbitmq-overprovisioning-2.jpg",width:800}))))),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"3.3")),Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"Analyze a workload consolidation recommendation")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"The performance of a service depends on the availability of compute resources to the encapsulating pod. The pod runs on a node, so the performance and efficiency of the node matters. We will see how Turbonomic intelligently and proactively redistributes workloads in real time to better optimize the full stack.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 3.3.1"),Object(b.b)("td",{parentName:"tr",align:"left"},"On the ",Object(b.b)("strong",{parentName:"td"},"RobotShop")," supply chain, click ",Object(b.b)("strong",{parentName:"td"},"Namespace"),".",Object(b.b)("br",null)," ",Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/RobotShop-Namespace.png",width:500}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"A Namespace is a logical pool of resources that manages workloads based on specific requirements or business needs. The Capacity and Usage chart provides a quick view into quotas set on this cluster, and the relative utilization of the resources. These quotas serve as the guardrails when making container sizing decisions. The Top Services chart shows that the RobotShop rabbitmq service can benefit from some performance and efficiency actions. ")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 3.3.2"),Object(b.b)("td",{parentName:"tr",align:"left"},"On the ",Object(b.b)("strong",{parentName:"td"},"Service-robot-shop/rabbitmq")," row, click ",Object(b.b)("strong",{parentName:"td"},"Actions"),".",Object(b.b)("br",null),Object(b.b)("br",null),"  ",Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/RabbitMQ-Actions-Click.png",width:800}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 3.3.3"),Object(b.b)("td",{parentName:"tr",align:"left"},"Under ",Object(b.b)("strong",{parentName:"td"},"Move"),", select ",Object(b.b)("strong",{parentName:"td"},"Container Pods")," (1), then click ",Object(b.b)("strong",{parentName:"td"},"Details")," (2) in the ",Object(b.b)("strong",{parentName:"td"},"robotshop/rabbitmq")," line.",Object(b.b)("br",null),Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/action-center.png",width:800}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 3.3.4"),Object(b.b)("td",{parentName:"tr",align:"left"},"Review the analytics behind the workload consolidation recommendation.",Object(b.b)("br",null)," ",Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/rabbitmq-Action-Details-1.png",width:800}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"The RobotShop rabbitmq service is a queueing service hosting the RabbitMQ server. Turbonomic analysis indicates that the worker node currently hosting the rabbitmq service is under-utilized and that operational efficiency can be further improved by moving this service to another worker node - consolidating the cluster resources on fewer worker nodes. The analytics also compute the approximate future resource utilization rates of the source and target worker nodes if the actions were to be taken. Without these capabilities, the alternate manual approach can be slow, reactive, error-prone and increasingly challenging as the number of services on the cluster grow.",Object(b.b)("br",null),Object(b.b)("br",null),"Last but not least, the analytics also inform the user whether these resource optimization actions can be taken from within Turbonomic. Let’s look at that next. ")))),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(b.b)("details",null,Object(b.b)("summary",null,"4 - Automating actions"),Object(b.b)("br",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"4.1")),Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"Automate action execution and eliminate manual intervention")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"Though Turbonomic allows you to take action from the platform with the click of a button, it is a best practice to automate these actions. ",Object(b.b)("br",null),Object(b.b)("br",null),"We will now define an automation policy that enables you to automate the platform-derived actions.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 4.1.1"),Object(b.b)("td",{parentName:"tr",align:"left"},"From ",Object(b.b)("strong",{parentName:"td"},"Settings"),", click ",Object(b.b)("strong",{parentName:"td"},"Policies"),". Click ",Object(b.b)("strong",{parentName:"td"},"New Automation Policy"),". Select ",Object(b.b)("strong",{parentName:"td"},"Container Pod"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 4.1.2"),Object(b.b)("td",{parentName:"tr",align:"left"},"We will give the policy a name (1), schedule (2), and then define how an action is accepted (3). ",Object(b.b)("br",null)," ",Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/Automation-Policy-1.jpg",width:500}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 4.1.2"),Object(b.b)("td",{parentName:"tr",align:"left"},"Fill out the ",Object(b.b)("strong",{parentName:"td"},"Action and Orchestration")," panel.",Object(b.b)("br",null),Object(b.b)("br",null)," Define the ",Object(b.b)("strong",{parentName:"td"},"Action Types")," that will be automated by this automation policy: ",Object(b.b)("strong",{parentName:"td"},"Move"),", ",Object(b.b)("strong",{parentName:"td"},"Suspend"),", ",Object(b.b)("strong",{parentName:"td"},"Provision")," (1).",Object(b.b)("br",null),Object(b.b)("br",null),"Set ",Object(b.b)("strong",{parentName:"td"},"Action Generation")," to ",Object(b.b)("strong",{parentName:"td"},"Generate Actions")," (2).",Object(b.b)("br",null),Object(b.b)("br",null),"Set ",Object(b.b)("strong",{parentName:"td"},"Action Acceptance")," to ",Object(b.b)("strong",{parentName:"td"},"Automatic")," (3).",Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("strong",{parentName:"td"},"Do not")," click ",Object(b.b)("strong",{parentName:"td"},"Submit"),".",Object(b.b)("br",null)," ",Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/Automation-Policy-2.jpg",width:500}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"Once the Automation Policy is saved, it will go into effect - all configured actions will now be executed automatically.",Object(b.b)("br",null),Object(b.b)("br",null),"The main benefit and best practice of Turbonomic is to execute an increasing number of actions automatically. Removing human intervention and leveraging automation will maintain application performance and improve operational efficiency. ")))),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(b.b)("details",null,Object(b.b)("summary",null,"Summary"),Object(b.b)("br",null),Object(b.b)("p",null,"In this demo we showed you how Turbonomic can assure the performance of your applications and improve the operational efficiency of the supporting application infrastructure. Using RobotShop, we walked through examples of how Turbonomic can augment the well-known benefits of a container platform to provide additional and high-value capabilities - ranging from intelligent container right sizing and SLA management to over-provisioning and cluster-wide workload consolidation."),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",{parentName:"strong",href:"#top"},"Go to top")))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-300-watson-aiops-application-resource-management-demo-script-mdx-8c3029cb766a86c68526.js.map