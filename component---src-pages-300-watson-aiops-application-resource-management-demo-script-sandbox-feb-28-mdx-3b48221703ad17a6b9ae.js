(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"013z":function(t,e,a){"use strict";var n=a("q1tI"),r=a.n(n),b=a("NmYn"),o=a.n(b),i=a("Wbzz"),c=a("Xrax"),l=a("k4MR"),s=a("TSYQ"),m=a.n(s),p=a("QH2O"),d=a.n(p),g=a("qKvR"),u=function(t){var e,a=t.title,n=t.theme,r=t.tabs,b=void 0===r?[]:r;return Object(g.b)("div",{className:m()(d.a.pageHeader,(e={},e[d.a.withTabs]=b.length,e[d.a.darkMode]="dark"===n,e))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:d.a.text},a)))))},j=a("BAC9"),O=function(t){var e=t.relativePagePath,a=t.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,b=r.baseUrl,o=r.subDirectory,c=b+"/edit/"+r.branch+o+"/src/pages"+e;return b?Object(g.b)("div",{className:"bx--row "+j.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:j.link,href:c},"Edit this page on GitHub"))):null},h=a("FCXl"),N=a("dI71"),A=a("I8xM"),f=function(t){function e(){return t.apply(this,arguments)||this}return Object(N.a)(e,t),e.prototype.render=function(){var t=this.props,e=t.title,a=t.tabs,n=t.slug,r=n.split("/").filter(Boolean).slice(-1)[0],b=a.map((function(t){var e,a=o()(t,{lower:!0,strict:!0}),b=a===r,c=new RegExp(r+"/?(#.*)?$"),l=n.replace(c,a);return Object(g.b)("li",{key:t,className:m()((e={},e[A.selectedItem]=b,e),A.listItem)},Object(g.b)(i.Link,{className:A.link,to:""+l},t))}));return Object(g.b)("div",{className:A.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",{"aria-label":e},Object(g.b)("ul",{className:A.list},b))))))},e}(r.a.Component),w=a("MjG9"),y=a("CzIb"),v=a("Asxa"),T=a("OIbQ"),x=a.n(T),k=function(t){var e=t.date,a=new Date(e);return e?Object(g.b)(v.c,{className:x.a.row},Object(g.b)(v.a,null,Object(g.b)("div",{className:x.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};e.a=function(t){var e=t.pageContext,a=t.children,n=t.location,r=t.Title,b=e.frontmatter,s=void 0===b?{}:b,m=e.relativePagePath,p=e.titleType,d=s.tabs,j=s.title,N=s.theme,A=s.description,v=s.keywords,T=s.date,x=Object(y.a)().interiorTheme,E=Object(i.useStaticQuery)("2456312558").site.pathPrefix,R=E?n.pathname.replace(E,""):n.pathname,S=d?R.split("/").filter(Boolean).slice(-1)[0]||o()(d[0],{lower:!0}):"",I=N||x;return Object(g.b)(l.a,{tabs:d,homepage:!1,theme:I,pageTitle:j,pageDescription:A,pageKeywords:v,titleType:p},Object(g.b)(u,{title:r?Object(g.b)(r,null):j,label:"label",tabs:d,theme:I}),d&&Object(g.b)(f,{title:j,slug:R,tabs:d,currentTab:S}),Object(g.b)(w.a,{padded:!0},a,Object(g.b)(O,{relativePagePath:m}),Object(g.b)(k,{date:T})),Object(g.b)(h.a,{pageContext:e,location:n,slug:R,tabs:d,currentTab:S}),Object(g.b)(c.a,null))}},BAC9:function(t,e,a){t.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(t,e,a){t.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(t,e,a){t.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(t,e,a){t.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},"d/q8":function(t,e,a){"use strict";a.r(e),a.d(e,"Title",(function(){return c})),a.d(e,"_frontmatter",(function(){return l})),a.d(e,"default",(function(){return p}));var n=a("wx14"),r=a("zLVn"),b=(a("q1tI"),a("7ljp")),o=a("013z"),i=(a("qKvR"),["components"]),c=function(){return Object(b.b)("span",null,"Application resource management",Object(b.b)("br",null)," 300-level live demo")},l={},s={Title:c,_frontmatter:l},m=o.a;function p(t){var e=t.components,a=Object(r.a)(t,i);return Object(b.b)(m,Object(n.a)({},s,a,{components:e,mdxType:"MDXLayout"}),Object(b.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(b.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"17.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAADABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEE/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwL/2gAMAwEAAhADEAAAAccFILP/xAAXEAADAQAAAAAAAAAAAAAAAAAAARFB/9oACAEBAAEFAjK7/8QAFhEAAwAAAAAAAAAAAAAAAAAAAxAx/9oACAEDAQE/ASRf/8QAFhEAAwAAAAAAAAAAAAAAAAAAAxAx/9oACAECAQE/AR1f/8QAFBABAAAAAAAAAAAAAAAAAAAAEP/aAAgBAQAGPwJ//8QAFxABAQEBAAAAAAAAAAAAAAAAAQAxwf/aAAgBAQABPyHlokkDf//aAAwDAQACAAMAAAAQgD//xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQMBAT8QgDL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAATH/2gAIAQIBAT8QV1//xAAaEAEAAgMBAAAAAAAAAAAAAAABACERQWEx/9oACAEBAAE/EC6dHHJ61a7EU4Gt6n//2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(b.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/platinum-demos/static/9863822464329ce2ab80d1ef2d49430e/2e753/ARM-GitHub-script-banner-12-15-21.jpg",srcSet:["/platinum-demos/static/9863822464329ce2ab80d1ef2d49430e/69549/ARM-GitHub-script-banner-12-15-21.jpg 288w","/platinum-demos/static/9863822464329ce2ab80d1ef2d49430e/473e3/ARM-GitHub-script-banner-12-15-21.jpg 576w","/platinum-demos/static/9863822464329ce2ab80d1ef2d49430e/2e753/ARM-GitHub-script-banner-12-15-21.jpg 1152w","/platinum-demos/static/9863822464329ce2ab80d1ef2d49430e/74f4b/ARM-GitHub-script-banner-12-15-21.jpg 1728w","/platinum-demos/static/9863822464329ce2ab80d1ef2d49430e/cbe2c/ARM-GitHub-script-banner-12-15-21.jpg 2000w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(b.b)("span",{id:"top"}),Object(b.b)("details",null,Object(b.b)("summary",null,"Introduction"),Object(b.b)("br",null),Object(b.b)("p",null,"In this growing digital economy, the application is the business. Application performance, therefore, is one of highest CIO priorities."),Object(b.b)("br",null),Object(b.b)("p",null,"Home Robots Inc. is a fully digital company selling innovative “household chores” robots globally via its RobotShop online marketplace. Clients browse and purchase through RobotShop’s microservices-based cloud native app. Promotions and other marketing events, however, generate unpredictable load patterns. This often results in poor application performance and bad customer experiences. Without full stack visibility, IT Ops teams tend to either over or under-provision resources based on best guesses - which is highly inefficient, costly and risky."),Object(b.b)("br",null),Object(b.b)("p",null,"In this demo, I’ll show you how IBM Turbonomic, a solution based on the principles of Application Resource Management (ARM), helps SREs and IT Ops teams proactively assure application performance and operational efficiency across their mission critical deployments. We will: ",Object(b.b)("br",null),"\n• See how Turbonomic stitches together a full-stack view from business applications down to the supporting infrastructure ",Object(b.b)("br",null),"\n• Examine the resource optimization recommendations generated by analytics ",Object(b.b)("br",null),"\n• Demonstrate how to automate the execution of platform-derived “actions” ",Object(b.b)("br",null)),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Note"),": This demo will be focus on application resource management in private clouds."),Object(b.b)("br",null),Object(b.b)("p",null,"(Printer-ready PDF of demo script ",Object(b.b)("a",{href:"/platinum-demos/4928dabbbc3569fcbc8ace4efe10eeaf/300-Application-Resource-Management.pdf",target:"_blank",rel:"noreferrer"},"here"),")"),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(b.b)("details",null,Object(b.b)("summary",null,"1 - Getting a global view of the applications and their infrastructure dependencies"),Object(b.b)("br",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"1.1")),Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"Examine the global supply chain")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"Turbonomic requires configuration and operational performance data to make resource optimization recommendations. The more data the better. ",Object(b.b)("br",null),Object(b.b)("br",null)," The RobotShop application is being observed by Instana. Turbonomic ingests data from Instana and builds a common data model to stitch together a graphical view of the application and its resource dependencies. In the Turbonomic nomenclature, this is called the “supply chain.” ",Object(b.b)("br",null),Object(b.b)("br",null)," The global supply chain models the dynamic relationship of the managed application and its dependent infrastructure layers.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 1.1.0"),Object(b.b)("td",{parentName:"tr",align:"left"},"Log in to the Turbonomic instance and click the ",Object(b.b)("strong",{parentName:"td"},"On")," button in the upper left corner. ",Object(b.b)("br",null),Object(b.b)("br",null)," ",Object(b.b)("strong",{parentName:"td"},"Note"),": The next six steps will refer to the graphic below.",Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/global-supply-chain-6.jpg",width:800}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 1.1.1"),Object(b.b)("td",{parentName:"tr",align:"left"},"Hover over the ",Object(b.b)("strong",{parentName:"td"},"Business Application")," entity (1), which shows the business applications of which Turbonomic is aware.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 1.1.2"),Object(b.b)("td",{parentName:"tr",align:"left"},"Hover over the ",Object(b.b)("strong",{parentName:"td"},"Business Transaction")," entity (2), which shows logical business functions that an end-user would execute (such as a purchase or add-to-cart). Business applications are composed of these business transactions.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 1.1.3"),Object(b.b)("td",{parentName:"tr",align:"left"},"Hover over the ",Object(b.b)("strong",{parentName:"td"},"Service")," entity (3). A service is basically a REST endpoint. Transactions use the services.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 1.1.4"),Object(b.b)("td",{parentName:"tr",align:"left"},"Hover over the ",Object(b.b)("strong",{parentName:"td"},"Application Component")," entity (4). Services are hosted and executed in an application component, like a JVM.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 1.1.5"),Object(b.b)("td",{parentName:"tr",align:"left"},"Hover over the ",Object(b.b)("strong",{parentName:"td"},"Container")," (5). Application components run on a container platform like Kubernetes.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 1.1.6"),Object(b.b)("td",{parentName:"tr",align:"left"},"Hover over the ",Object(b.b)("strong",{parentName:"td"},"Virtual Machine")," entity (6). Application platforms are hosted in virtualized environments like vSphere.")))),Object(b.b)("br",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"1.2")),Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"Explore the top business applications view")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"Turbonomic displays the applications in order of risk. "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 1.2.1"),Object(b.b)("td",{parentName:"tr",align:"left"},"Click the ",Object(b.b)("strong",{parentName:"td"},"Business Application")," entity. "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ",Object(b.b)("br",null),Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/RobotShop-SLO-Violation-5.jpg",width:800}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"We see that there’s an increase in the average response time."," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ",Object(b.b)("br",null),Object(b.b)("br",null),"In the Application Resource Health bar, the color of each circle reflects the current health of the entities: “red” represents performance recommendations, “yellow” represents efficiency recommendations, and “green” is healthy. The current status indicates that there are some critical performance issues as well as some areas to improve efficiency. "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ",Object(b.b)("br",null),Object(b.b)("br",null),"The Actions button enables you to take the recommended actions directly from Turbonomic. ",Object(b.b)("strong",{parentName:"td"},"Note"),": We won’t click the Actions button at this time.")))),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(b.b)("details",null,Object(b.b)("summary",null,"2 - Drilling into the RobotShop application"),Object(b.b)("br",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"2.1")),Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"Examine RobotShop resource dependencies")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"Now that we have a broad understanding of the global view, let’s examine the health of the RobotShop application. This is called “scoping.”")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 2.1.1"),Object(b.b)("td",{parentName:"tr",align:"left"},"Click the ",Object(b.b)("strong",{parentName:"td"},"RobotShop")," link to scope to RobotShop.",Object(b.b)("br",null),Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/1-Top_Business_Applications.png",width:800}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 2.1.2"),Object(b.b)("td",{parentName:"tr",align:"left"},"Notice that we are scoped to RobotShop, with data coming from Instana. ",Object(b.b)("br",null),Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/2-Home.png",width:800}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"The supply chain is scoped to RobotShop, and the charts provide a quick view of RobotShop’s overall operating health.",Object(b.b)("br",null),Object(b.b)("br",null),"Since RobotShop is a Kubernetes-based cloud native application, all the entities in the supply chain are specific to a container infrastructure.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 2.1.3"),Object(b.b)("td",{parentName:"tr",align:"left"},"On the ",Object(b.b)("strong",{parentName:"td"},"Pending Actions")," chart, click ",Object(b.b)("strong",{parentName:"td"},"SHOW ALL"),".",Object(b.b)("br",null),Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/3-Show_All.png",width:800}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"The Turbonomic engine performs an ongoing (real-time) holistic analysis of the environment, generating resource optimization recommendations (and associated actions) that you can take to resolve and avoid emerging problems. ",Object(b.b)("br",null),Object(b.b)("br",null),"Here we see container resize actions, categorized as ‘performance’ and ‘efficiency’ actions. These are displayed for you to either investigate further or execute manually.",Object(b.b)("br",null),Object(b.b)("br",null),"Container resize ",Object(b.b)("em",{parentName:"td"},"UP")," actions are typically performance-centric actions that are driven to resolve an underlying resource congestion issue. ",Object(b.b)("br",null),Object(b.b)("br",null)," Container resize ",Object(b.b)("em",{parentName:"td"},"DOWN")," actions are typically efficiency-centric actions that are pointing to a resource optimization opportunity, likely a consequence of resource over-provisioning.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 2.1.4"),Object(b.b)("td",{parentName:"tr",align:"left"},"On the ",Object(b.b)("strong",{parentName:"td"},"Action Center")," panel, under  ",Object(b.b)("strong",{parentName:"td"},"RESIZE"),", select ",Object(b.b)("strong",{parentName:"td"},"Workload Controllers")," (1). Then, click ",Object(b.b)("strong",{parentName:"td"},"DETAILS")," (2) in the ",Object(b.b)("strong",{parentName:"td"},"cart")," row. ",Object(b.b)("br",null)," ",Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/4-Resize.png",width:800}))))),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(b.b)("details",null,Object(b.b)("summary",null,"3 - Understanding the resource optimization recommendations "),Object(b.b)("br",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"3.1")),Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"Analyze a container right-sizing performance recommendation")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"Let’s explore one of the performance recommendations in more detail.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 3.1.1"),Object(b.b)("td",{parentName:"tr",align:"left"},"On the ",Object(b.b)("strong",{parentName:"td"},"Action Details")," page, click ",Object(b.b)("strong",{parentName:"td"},"Expand Details")," to inspect the rationale behind the recommendations.",Object(b.b)("br",null)," ",Object(b.b)("br",null),Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/5-Resize_Expand.png",width:800}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 3.1.2"),Object(b.b)("td",{parentName:"tr",align:"left"},"Review the ",Object(b.b)("strong",{parentName:"td"},"performance action")," details. Notice the recommendation to upsize 100 MB to 228 MB.",Object(b.b)("br",null)," ",Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/5-Resize_Details.png",width:800}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"The graphs show an imminent congestion for the RobotShop cart pod, based on a percentile analysis from the 30 day observation period. Turbonomic recommends upsizing the existing memory from 100 MB to 228 MB. The analysis shows that if this action is taken, it will result in a reduction of memory utilization from 82% to 36%. This memory upsizing will mitigate the detected risk of congestion for memory resources. ")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 3.1.3"),Object(b.b)("td",{parentName:"tr",align:"left"},"Click the ",Object(b.b)("strong",{parentName:"td"},"x")," in the upper right corner to close the ",Object(b.b)("strong",{parentName:"td"},"Action Details")," page.",Object(b.b)("br",null),Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/5-Resize_X.png",width:800}))))),Object(b.b)("br",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"3.2")),Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"Analyze a proactive workload redistribution recommendation")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"When the architect initially does sizing, the values are based on best guesses and taking a safer path, typically resulting in the overprovisioning of resources. There is often opportunity to reclaim unused expensive resources and save costs.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 3.2.1"),Object(b.b)("td",{parentName:"tr",align:"left"},"On the ",Object(b.b)("strong",{parentName:"td"},"Action Center")," panel, under ",Object(b.b)("strong",{parentName:"td"},"MOVE"),", select ",Object(b.b)("strong",{parentName:"td"},"Container Pods")," (1). Then, click ",Object(b.b)("strong",{parentName:"td"},"DETAILS")," (2) in the ",Object(b.b)("strong",{parentName:"td"},"robot-shop/web-5488d5545f-2r2bd")," row.  ",Object(b.b)("br",null),Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/6-Move.png",width:800}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"The Turbonomic platform has discovered that the RobotShop ‘Ratings’ service (a microservice to accept user feedback; i.e. five stars) is overprovisioned with memory. Let’s take a look at the recommendation.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 3.2.2"),Object(b.b)("td",{parentName:"tr",align:"left"},"Point out the increase in memory utilization as a result of the recommended memory downsizing. ",Object(b.b)("br",null),Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/7-Move_Details.png",width:800}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"An efficiency recommendation is being made to reduce the memory of the ratings pod from 1 GB to 232 MB. The downsizing will improve memory utilization from 11% to 47.4%, without impacting overall service performance. ",Object(b.b)("br",null),Object(b.b)("br",null)," In addition to providing detailed analytics behind the recommendation, Turbonomic is able to take the remedial action without having to jump to other tools or involve other cumbersome IT processes.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 3.2.3"),Object(b.b)("td",{parentName:"tr",align:"left"},"Click the ",Object(b.b)("strong",{parentName:"td"},"x")," in the upper right corner to close the ",Object(b.b)("strong",{parentName:"td"},"Action Details")," page.",Object(b.b)("br",null),Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/7-Move_X.png",width:800}))))),Object(b.b)("br",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"3.3")),Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"Analyze an intelligent cluster scaling recommendation")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"The performance of a service depends on the availability of compute resources to the encapsulating pod. The pod runs on a node, so the performance and efficiency of the node matters. We will see how Turbonomic intelligently and proactively redistributes workloads in real time to better optimize the full stack.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 3.3.1"),Object(b.b)("td",{parentName:"tr",align:"left"},"On the ",Object(b.b)("strong",{parentName:"td"},"Action Center")," panel, under ",Object(b.b)("strong",{parentName:"td"},"SUSPEND"),", select ",Object(b.b)("strong",{parentName:"td"},"Virtual Machines")," (1). Then, click ",Object(b.b)("strong",{parentName:"td"},"DETAILS")," (2) in the ",Object(b.b)("strong",{parentName:"td"},"worker3.vader.coc-ibm.com")," row. ",Object(b.b)("br",null),Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/8-Suspend.png",width:800}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 3.3.2"),Object(b.b)("td",{parentName:"tr",align:"left"},"Review the analytics behind the workload consolidation recommendation.",Object(b.b)("br",null)," ",Object(b.b)("br",null)," Click the ",Object(b.b)("strong",{parentName:"td"},"x")," in the upper right corner to close the ",Object(b.b)("strong",{parentName:"td"},"Action Details")," page.",Object(b.b)("br",null),Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/9-Suspend_X.png",width:800}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"The overall benefit of this recommendation is the ability to ",Object(b.b)("em",{parentName:"td"},"consolidate")," workloads on a fewer number of nodes and thereby drive down operational costs. This Move action will migrate the workload from worker node1 to worker node7. This will approximately double the resource utilization on worker node7, increasing memory usage from 12% to 24% and CPU utilization from 6% to 11%. This still leaves worker node7 with enough capacity to absorb additional workloads. However, we were able to retain the capacity of worker node1. ",Object(b.b)("br",null),Object(b.b)("br",null)," Turbonomic’s analysis indicates that worker node1, currently hosting the RobotShop rabbitmq service, is underutilized and that by moving this pod to worker node7, overall cluster efficiency can be improved. ")))),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(b.b)("details",null,Object(b.b)("summary",null,"4 - Automating actions"),Object(b.b)("br",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"4.1")),Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"Automate the execution of actions and eliminate manual intervention")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"Though Turbonomic allows you to initiate action from the platform with the click of a button, it is a best practice to automate the execution of these actions. ",Object(b.b)("br",null),Object(b.b)("br",null)," We will now define an automation policy that enables you to automate the platform-derived actions without having to jump into multiple tools.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 4.1.1"),Object(b.b)("td",{parentName:"tr",align:"left"},"Click ",Object(b.b)("strong",{parentName:"td"},"SETTINGS")," (1) and select ",Object(b.b)("strong",{parentName:"td"},"Policies")," (2). ",Object(b.b)("br",null),Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/Settings.png",width:800}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 4.1.2"),Object(b.b)("td",{parentName:"tr",align:"left"},"Click ",Object(b.b)("strong",{parentName:"td"},"NEW AUTOMATION POLICY"),". ",Object(b.b)("br",null),Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/New-Policy.png",width:500}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 4.1.3"),Object(b.b)("td",{parentName:"tr",align:"left"},"Select ",Object(b.b)("strong",{parentName:"td"},"Container Pod"),". ",Object(b.b)("br",null),Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/Container-Pod.png",width:300}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 4.1.4"),Object(b.b)("td",{parentName:"tr",align:"left"},"Give the policy a ",Object(b.b)("strong",{parentName:"td"},"NAME"),". Then, expand ",Object(b.b)("strong",{parentName:"td"},"AUTOMATION AND ORCHESTRATION")," (2) and click ",Object(b.b)("strong",{parentName:"td"},"ADD ACTION")," (3) to define how an action is accepted. ",Object(b.b)("br",null),Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/Automation-Policy-1.jpg",width:500}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 4.1.5"),Object(b.b)("td",{parentName:"tr",align:"left"},"Fill out the ",Object(b.b)("strong",{parentName:"td"},"Automation and Orchestration")," panel.",Object(b.b)("br",null),Object(b.b)("br",null)," Define the ",Object(b.b)("strong",{parentName:"td"},"ACTION TYPE")," that will be automated by this automation policy: ",Object(b.b)("strong",{parentName:"td"},"Move"),", ",Object(b.b)("strong",{parentName:"td"},"Suspend"),", ",Object(b.b)("strong",{parentName:"td"},"Provision")," (1).",Object(b.b)("br",null),Object(b.b)("br",null),"Set ",Object(b.b)("strong",{parentName:"td"},"ACTION GENERATION")," to ",Object(b.b)("strong",{parentName:"td"},"Generate Actions")," (2).",Object(b.b)("br",null),Object(b.b)("br",null),"Set ",Object(b.b)("strong",{parentName:"td"},"ACTION ACCEPTANCE")," to ",Object(b.b)("strong",{parentName:"td"},"Automatic")," (3).",Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("strong",{parentName:"td"},"Note"),": Do ",Object(b.b)("strong",{parentName:"td"},"not")," click ",Object(b.b)("strong",{parentName:"td"},"Submit"),", as this is a read-only environment.",Object(b.b)("br",null)," ",Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/Automation-Policy-2.jpg",width:500}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"Once the automation policy is saved, it will go into effect. All configured actions will now be executed automatically. ",Object(b.b)("br",null),Object(b.b)("br",null)," The main benefit and best practice of Turbonomic is to execute an increasing number of actions automatically. Removing human intervention and leveraging automation will maintain application performance and improve operational efficiency. ",Object(b.b)("br",null),Object(b.b)("br",null)," Although we have demonstrated how actions can be taken automatically from Turbonomic, it is typical that IT organizations first build a level of trust where actions are initially triggered manually by a human operator. And as the organization’s level of comfort matures over time, we evolve into a semi-automatic and then a relatively fully automatic set of executions, where a number of actions are being taken automatically.")))),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(b.b)("details",null,Object(b.b)("summary",null,"Summary"),Object(b.b)("br",null),Object(b.b)("p",null,"In this demo, we showed how Home Robots Inc. leveraged Turbonomic to assure application performance and improve the operational efficiency of the supporting application infrastructure. We demonstrated how Turbonomic can augment the well-known benefits of a container platform to provide additional and high-value capabilities, ranging from full-stack visibility and analytics-driven resource optimization recommendations (e.g., vertical scaling, container right-sizing, and workload consolidation) to intelligent platform-derived automatable actions."),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",{parentName:"strong",href:"#top"},"Go to top")))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-300-watson-aiops-application-resource-management-demo-script-sandbox-feb-28-mdx-3b48221703ad17a6b9ae.js.map