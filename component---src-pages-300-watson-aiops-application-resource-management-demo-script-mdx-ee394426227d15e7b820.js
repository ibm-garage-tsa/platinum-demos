(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),b=a.n(o),i=a("Wbzz"),c=a("Xrax"),s=a("k4MR"),l=a("TSYQ"),p=a.n(l),m=a("QH2O"),d=a.n(m),u=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(u.b)("div",{className:p()(d.a.pageHeader,(t={},t[d.a.withTabs]=o.length,t[d.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:d.a.text},a)))))},h=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,b=r.subDirectory,c=o+"/edit/"+r.branch+b+"/src/pages"+t;return o?Object(u.b)("div",{className:"bx--row "+h.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:h.link,href:c},"Edit this page on GitHub"))):null},O=a("FCXl"),A=a("dI71"),N=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(A.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=b()(e,{lower:!0,strict:!0}),o=a===r,c=new RegExp(r+"/?(#.*)?$"),s=n.replace(c,a);return Object(u.b)("li",{key:e,className:p()((t={},t[N.selectedItem]=o,t),N.listItem)},Object(u.b)(i.Link,{className:N.link,to:""+s},e))}));return Object(u.b)("div",{className:N.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:N.list},o))))))},t}(r.a.Component),y=a("MjG9"),w=a("CzIb"),v=a("Asxa"),x=a("OIbQ"),T=a.n(x),k=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(v.c,{className:T.a.row},Object(u.b)(v.a,null,Object(u.b)("div",{className:T.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,l=void 0===o?{}:o,p=t.relativePagePath,m=t.titleType,d=l.tabs,h=l.title,A=l.theme,N=l.description,v=l.keywords,x=l.date,T=Object(w.a)().interiorTheme,S=Object(i.useStaticQuery)("2456312558").site.pathPrefix,E=S?n.pathname.replace(S,""):n.pathname,R=d?E.split("/").filter(Boolean).slice(-1)[0]||b()(d[0],{lower:!0}):"",B=A||T;return Object(u.b)(s.a,{tabs:d,homepage:!1,theme:B,pageTitle:h,pageDescription:N,pageKeywords:v,titleType:m},Object(u.b)(g,{title:r?Object(u.b)(r,null):h,label:"label",tabs:d,theme:B}),d&&Object(u.b)(f,{title:h,slug:E,tabs:d,currentTab:R}),Object(u.b)(y.a,{padded:!0},a,Object(u.b)(j,{relativePagePath:p}),Object(u.b)(k,{date:x})),Object(u.b)(O.a,{pageContext:t,location:n,slug:E,tabs:d,currentTab:R}),Object(u.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},uafL:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return c})),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return m}));var n=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),b=a("013z"),i=(a("qKvR"),["components"]),c=function(){return Object(o.b)("span",null,"Application resource management",Object(o.b)("br",null)," 300-level live demo")},s={},l={Title:c,_frontmatter:s},p=b.a;function m(e){var t=e.components,a=Object(r.a)(e,i);return Object(o.b)(p,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"17.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAADABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAIE/8QAFAEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAABySIUBT//xAAYEAACAwAAAAAAAAAAAAAAAAAAAQIhQf/aAAgBAQABBQIyTv8A/8QAFxEBAAMAAAAAAAAAAAAAAAAAAAEDMf/aAAgBAwEBPwGzEP/EABYRAAMAAAAAAAAAAAAAAAAAAAMQMf/aAAgBAgEBPwEdX//EABQQAQAAAAAAAAAAAAAAAAAAABD/2gAIAQEABj8Cf//EABgQAQADAQAAAAAAAAAAAAAAAAEAIXFB/9oACAEBAAE/IS3IWtjAB5P/2gAMAwEAAgADAAAAEAff/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAEh/9oACAEDAQE/EDGR/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAEx/9oACAECAQE/EDdf/8QAGhABAQACAwAAAAAAAAAAAAAAAREAIUFRYf/aAAgBAQABPxAgDsqeYSq67YmAI5z/2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/platinum-demos/static/a3889f730b45bcb72f4f72a8de28e931/2e753/ARM-GitHub-script-banner-12-15-21.jpg",srcSet:["/platinum-demos/static/a3889f730b45bcb72f4f72a8de28e931/69549/ARM-GitHub-script-banner-12-15-21.jpg 288w","/platinum-demos/static/a3889f730b45bcb72f4f72a8de28e931/473e3/ARM-GitHub-script-banner-12-15-21.jpg 576w","/platinum-demos/static/a3889f730b45bcb72f4f72a8de28e931/2e753/ARM-GitHub-script-banner-12-15-21.jpg 1152w","/platinum-demos/static/a3889f730b45bcb72f4f72a8de28e931/74f4b/ARM-GitHub-script-banner-12-15-21.jpg 1728w","/platinum-demos/static/a3889f730b45bcb72f4f72a8de28e931/cbe2c/ARM-GitHub-script-banner-12-15-21.jpg 2000w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(o.b)("span",{id:"top"}),Object(o.b)("details",null,Object(o.b)("summary",null,"Introduction"),Object(o.b)("br",null),Object(o.b)("p",null,"In this growing digital economy, the application is the business. Application performance, therefore, is one of highest CIO priorities."),Object(o.b)("br",null),Object(o.b)("p",null,"Most application performance issues are caused due to a lack of compute resources. Application resource management proactively focuses to address this issue just-in-time and alleviate potential resource starvation. "),Object(o.b)("br",null),Object(o.b)("p",null,"Home Robots Inc is a fully digital global company selling innovative robots to assist with mundane household chores. RobotShop, a microservices-based cloud native app, is the online marketplace where clients browse and make purchases. Spot promotions and other marketing events create unpredictable load patterns for RobotShop, resulting in poor application performance (due to underlying resource issues) and bad customer experiences. The IT Ops teams, lacking full stack visibility, tend to either over or under provision based on best-guesses - which is highly inefficient, very costly and risky."),Object(o.b)("br",null),Object(o.b)("p",null,"In this demo, I’ll show you how IBM Turbonomic, a solution based on Application Resource Management, helps RobotShop’s SREs and IT Ops teams proactively assure application performance and operational efficiency across their mission critical deployments. We will:"),Object(o.b)("br",null),"• See how Turbonomic stitches together a full-stack view from business applications, to the platform, all the way to the underlying physical infrastructure ",Object(o.b)("br",null),"• Examine the resource optimization recommendations generated by AI-based platform analytics ",Object(o.b)("br",null),"• Demonstrate how to automate execution of platform-derived 'Actions' ",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note"),": The scope of this demo will be restricted to application resource management of resources in private clouds. A different demo will illustrate application resource management as it pertains to public clouds. "),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("details",null,Object(o.b)("summary",null,"1 - Getting a global view of the applications and their infrastructure dependencies"),Object(o.b)("br",null),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"1.1")),Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"Ingesting data from observability platforms and other sources")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"Turbonomic requires configuration and operational performance data to make resource optimization recommendations. The more data the better.",Object(o.b)("br",null),Object(o.b)("br",null),"RobotShop is being observed by Instana. Turbonomic ingests data from APM tools and other sources and builds a common data model to ‘stitch’ together a graphical view of the application-to-resource dependencies. This is called the ‘Supply Chain’.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 1.1.1"),Object(o.b)("td",{parentName:"tr",align:"left"},"Click ",Object(o.b)("strong",{parentName:"td"},"Settings")," (1) and select ",Object(o.b)("strong",{parentName:"td"},"Target Configurations")," (2). Select ",Object(o.b)("strong",{parentName:"td"},"Instana")," (3). ",Object(o.b)("br",null)," ",Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/target-configurations.jpg",width:500}))))),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"1.2")),Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"Examine the global supply chain")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"The global supply chain graphically organizes the various entities in the IT stack. It models the dynamic relationships from the managed application, across the underlying related infrastructure layers from the on-prem data center, all the way out to the cloud.",Object(o.b)("br",null),Object(o.b)("br",null)," Let’s look at the various elements of the Turbonomic instance. Each circle represents an IT entity, and the color reflects the current health of the entities: red points to a critical risk, yellow points to areas to improve efficiency, and green is healthy.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 1.2.1"),Object(o.b)("td",{parentName:"tr",align:"left"},"Log in to the Turbonomic instance and click the home ",Object(o.b)("strong",{parentName:"td"},"On")," button. ",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/global-supply-chain-5.jpg",width:800}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 1.2.2"),Object(o.b)("td",{parentName:"tr",align:"left"},"Hover over the ",Object(o.b)("strong",{parentName:"td"},"Business Application")," entity (1), which shows the ",Object(o.b)("strong",{parentName:"td"},"business applications")," that Turbonomic is aware of in this deployment environment.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 1.2.3"),Object(o.b)("td",{parentName:"tr",align:"left"},"Hover over the ",Object(o.b)("strong",{parentName:"td"},"Business Transaction")," entity (2), which shows logical business functions that an end-user would execute (such as a purchase or add-to-cart). Business applications are composed of these business transactions.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 1.2.4"),Object(o.b)("td",{parentName:"tr",align:"left"},"Hover over the ",Object(o.b)("strong",{parentName:"td"},"Service")," entity (3). A service is basically a REST endpoint, and transactions use the services.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 1.2.5"),Object(o.b)("td",{parentName:"tr",align:"left"},"Hover over the ",Object(o.b)("strong",{parentName:"td"},"Application Component")," entity (4). Services are hosted and executed in an Application component, like a JVM.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 1.2.6"),Object(o.b)("td",{parentName:"tr",align:"left"},"Hover over the ",Object(o.b)("strong",{parentName:"td"},"Container")," (5). Application components run on an ",Object(o.b)("strong",{parentName:"td"},"application platform")," - for example a container platform like Kubernetes or a VM-based platform like vSphere.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 1.2.7"),Object(o.b)("td",{parentName:"tr",align:"left"},"Hover over the ",Object(o.b)("strong",{parentName:"td"},"Virtual Machine")," entity (6). Application platforms run on virtualized environments like vSphere and consume datacenter resources on-premise, and all the way out to the public cloud.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 1.2.8"),Object(o.b)("td",{parentName:"tr",align:"left"},"Hover over the ",Object(o.b)("strong",{parentName:"td"},"Data Center")," entity (7), which shows the public cloud components (defined as resources that exist in a region and in availability zones). ")))),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"1.3")),Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"Explore the Top Business Applications")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"Let’s see which Top Business Applications are at risk and  need immediate attention, ordered in terms of severity.",Object(o.b)("br",null),Object(o.b)("br",null),"We see that RobotShop currently has SLO violations - response time is up and throughput is below expected service levels.",Object(o.b)("br",null),Object(o.b)("br",null),"The Application Resource Health bar indicates that there are some critical performance issues (in red) as well as some areas to improve efficiency (in yellow).",Object(o.b)("br",null),Object(o.b)("br",null),"The Actions button will take you to the Actions panel enabling you to take the recommended actions directly from Turbonomic.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 1.3.1"),Object(o.b)("td",{parentName:"tr",align:"left"},"Click the ",Object(o.b)("strong",{parentName:"td"},"Business Applications")," entity, the root and first node in the supply chain. ",Object(o.b)("br",null),Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/RobotShop-SLO-Violation-5.jpg",width:800}))))),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("details",null,Object(o.b)("summary",null,"2 - Drilling into the RobotShop application"),Object(o.b)("br",null),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"2.1")),Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"Examine RobotShop resource dependencies")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"Now that we have a broad understanding of the global view, let’s examine the health of RobotShop. This is called ‘scoping’.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 2.1.1"),Object(o.b)("td",{parentName:"tr",align:"left"},"Click the ",Object(o.b)("strong",{parentName:"td"},"RobotShop")," link to scope to RobotShop. ",Object(o.b)("br",null),Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/RobotShop-Supply-Chain.jpg",width:800}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"The supply chain is scoped to RobotShop, and the charts provide a quick view of RobotShop’s overall operating health.",Object(o.b)("br",null),Object(o.b)("br",null),"Turbonomic builds its application-awareness from tools like Instana and discovers Kubernetes pods via a set of deployed probes. Since RobotShop is a Kubernetes-based cloud native application, all the entities appearing in the supply chain are specific to a container platform infrastructure. The container platform is RHOCP and runs on a VMWare cluster on-premise. Hence, there are no cloud entities in the RobotShop supply chain.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 2.1.2"),Object(o.b)("td",{parentName:"tr",align:"left"},"On the ",Object(o.b)("strong",{parentName:"td"},"Pending Actions")," chart, click ",Object(o.b)("strong",{parentName:"td"},"Show All"),".",Object(o.b)("br",null)," ",Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/pending-actions-show-all-5.jpg",width:500}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"The Turbonomic engine performs an ongoing holistic analysis of the environment, generating actions that you can take to resolve and avoid emerging problems. ",Object(o.b)("br",null),Object(o.b)("br",null),"Here we can see container resize actions, categorized as performance and efficiency actions. These are displayed for you to either investigate further or execute directly.",Object(o.b)("br",null),Object(o.b)("br",null)," Container Resize up actions are typically performance-centric actions that are driven to resolve an underlying resource congestion issue. Container Resize down actions are typically efficiency-centric actions that are pointing to a resource optimization opportunity, likely a consequence of resource over-provisioning.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 2.1.3"),Object(o.b)("td",{parentName:"tr",align:"left"},"On the ",Object(o.b)("strong",{parentName:"td"},"Action Center")," panel, select ",Object(o.b)("strong",{parentName:"td"},"Workload Controller")," and click ",Object(o.b)("strong",{parentName:"td"},"Details"),". ",Object(o.b)("br",null)," ",Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/RobotShop-Performance-Action-click-DETAILS.jpg",width:800}))))),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("details",null,Object(o.b)("summary",null,"3 - Understanding the AI-derived resource optimization recommendations "),Object(o.b)("br",null),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"3.1")),Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"Analyze a RobotShop performance recommendation")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"Let’s explore one of the ((generated RobotShop)) performance actions recommendations in more detail.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 3.1.1"),Object(o.b)("td",{parentName:"tr",align:"left"},"On the ",Object(o.b)("strong",{parentName:"td"},"Action Details")," page, click ",Object(o.b)("strong",{parentName:"td"},"Expand Details")," to inspect the rationale behind the recommendations.",Object(o.b)("br",null)," ",Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/Expand-Action-Details.jpg",width:800}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"The graphs show an imminent congestion for the RobotShop card pod, based on the a percentile analysis from the last 30 days observation period. A recommendation to upsize the existing memory from 100 MB to 228 MB is made. The analysis also shows that if this action is taken, it will result in a reduction of memory utilization from 82% to 36%. This memory upsizing will mitigate the detected risk of contention for memory resources.  ")))),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"3.2")),Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"Analyze a RobotShop Efficiency recommendation")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"When the architect initially does sizing, the values are based on best guesses and taking a safer path - typically resulting in the over-provisioning of resources. There is often opportunity to reclaim unused expensive resources and save costs.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 3.2.1"),Object(o.b)("td",{parentName:"tr",align:"left"},"On the ",Object(o.b)("strong",{parentName:"td"},"Action Center")," panel, select ",Object(o.b)("strong",{parentName:"td"},"rabbitmq"),". Click ",Object(o.b)("strong",{parentName:"td"},"Details"),".",Object(o.b)("br",null),Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/rabbitmq-overprovisioning-1.jpg",width:800})," ",Object(o.b)("br",null),Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/rabbitmq-overprovisioning-2.jpg",width:800}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"Based on resource analysis of the RobotShop rabbitmq service, we can see that memory is over-provisioned and can be reduced. An Efficiency recommendation is made to reduce the memory of the pod from 512 MB to 384 MB. The downsizing will improve memory utilization without impacting overall service performance.",Object(o.b)("br",null),Object(o.b)("br",null),"CPU, on the other hand, is potentially risky at 90% utilization level. The CPU congestion can result in a performance degradation of this service. A recommendation is also made to double the CPU capacity of the RobotShop rabbitmq container.")))),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"3.3")),Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"Analyze an Efficiency action")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"The performance of service depends on the availability of compute resources to the encapsulating pod. The pod runs on a node, so the performance and efficiency of the node matters. We will see how Turbonomic intelligently and proactively redistributes workloads in real time to better optimize the full stack.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 3.3.1"),Object(o.b)("td",{parentName:"tr",align:"left"},"On the ",Object(o.b)("strong",{parentName:"td"},"RobotShop")," Supply chain, hover over the ",Object(o.b)("strong",{parentName:"td"},"Namespace")," entity. Inspect the popup to get a quick view of the risks, then click ",Object(o.b)("strong",{parentName:"td"},"Namespace"),".",Object(o.b)("br",null)," ",Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/RobotShop-Namespace.jpg",width:500}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"A Namespace is a logical pool of resources in a Kubernetes environment that manages workloads based on specific requirements or business needs. The Capacity and Usage chart provides a quick view into quotas set on this cluster, and the relative utilization of the resources. These quotas serve as the guardrails when making container sizing decisions. The Top Services chart shows that the RobotShop rabbitmq service can benefit from some performance and efficiency actions. ")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 3.3.2"),Object(o.b)("td",{parentName:"tr",align:"left"},"On the ",Object(o.b)("strong",{parentName:"td"},"Service-robot-shop/rabbitmq")," row, click ",Object(o.b)("strong",{parentName:"td"},"Actions"),".",Object(o.b)("br",null),Object(o.b)("br",null),"  ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/RabbitMQ-Actions-Click.jpg",width:800}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 3.3.3"),Object(o.b)("td",{parentName:"tr",align:"left"},"On the ",Object(o.b)("strong",{parentName:"td"},"Action Center")," panel, under ",Object(o.b)("strong",{parentName:"td"},"Move"),", select ",Object(o.b)("strong",{parentName:"td"},"Container Pods"),", then ",Object(o.b)("strong",{parentName:"td"},"robotshop/rabbitmq")," under ",Object(o.b)("strong",{parentName:"td"},"Move Actions"),". Click ",Object(o.b)("strong",{parentName:"td"},"Details"),".",Object(o.b)("br",null)," ",Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/rabbitmq-Action-Details-1.jpg",width:800}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"The RobotShop rabbitmq service is a queueing service hosting the RabbitMQ server. Turbonomic analysis indicates that the worker node currently hosting the rabbitmq service is under-utilized and that operational efficiency can be further improved by moving this service to another worker node - consolidating the cluster resources on fewer worker nodes. The analytics also compute the approximate future resource utilization rates of the source and target worker nodes if the actions were to be taken. Without these capabilities, the alternate manual approach can be slow, reactive, error-prone and increasingly challenging as the number of services on the cluster grow.",Object(o.b)("br",null),Object(o.b)("br",null),"Last but not least, the analytics also inform the user whether these resource optimization actions can be taken from within Turbonomic. Let’s look at that next. ")))),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("details",null,Object(o.b)("summary",null,"4 - Taking action and putting your application resource management into autopilot "),Object(o.b)("br",null),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"4.1")),Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"Manually executing an action")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"The application resource management process generates a set of actions that the user can take to proactively avoid a potential performance issue. All actions generated appear as pending, viewable in the Pending Actions chart (as seen above). We can then determine whether to execute them manually from within Turbonomic, or to automate the action execution and remove or minimize the human intervention. Let’s look at the manual execution process first. <br/",Object(o.b)("br",null),"Manually execute the recommended resource Efficiency action on the robot-shop/rabbitmq service. Turbonomic conveniently allows you to execute the recommended action right from within the platform. This enhances productivity as no tool hopping is necessary, and makes all the audit trails (eg, what actions were executed, by whom and when) easily available for compliance purposes if necessary.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 4.1.1"),Object(o.b)("td",{parentName:"tr",align:"left"},"In the ",Object(o.b)("strong",{parentName:"td"},"Action Center")," panel, under ",Object(o.b)("strong",{parentName:"td"},"Move"),", select the ",Object(o.b)("strong",{parentName:"td"},"robot-shop/rabbitmq")," action. Click ",Object(o.b)("strong",{parentName:"td"},"Execute Action"),".",Object(o.b)("br",null),Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/Take-Action-Manually.jpg",width:800}))))),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"4.2")),Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"Automate action execution and eliminate manual intervention")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"RobotShop is composed of a dozen or so microservices. Given the fluctuating demand patterns and the availability of computing capacity, resource optimization actions will be continuously generated by the platform - with the sole goal of keeping RobotShop in the ‘desired state’. ",Object(o.b)("br",null),Object(o.b)("br",null),"We will now briefly walk through defining automation policies to automate the execution of these actions.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 4.2.1"),Object(o.b)("td",{parentName:"tr",align:"left"},"From ",Object(o.b)("strong",{parentName:"td"},"Settings"),", click ",Object(o.b)("strong",{parentName:"td"},"Policies"),". Then click ",Object(o.b)("strong",{parentName:"td"},"New Automation Policy")," and select ",Object(o.b)("strong",{parentName:"td"},"Container Pod"),".",Object(o.b)("br",null)," ",Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/Automation-Policy-1.jpg",width:500}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"The process defining an automation policy is the same across the various entity types, but the Action Types vary as they are entity specific.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 4.2.2"),Object(o.b)("td",{parentName:"tr",align:"left"},"Fill out the ",Object(o.b)("strong",{parentName:"td"},"Action and Orchestration")," panel.",Object(o.b)("br",null),Object(o.b)("br",null)," Define the ",Object(o.b)("strong",{parentName:"td"},"Action Types")," that will be automated by this automation policy: ",Object(o.b)("strong",{parentName:"td"},"Move"),", ",Object(o.b)("strong",{parentName:"td"},"Suspend"),", ",Object(o.b)("strong",{parentName:"td"},"Provision"),".",Object(o.b)("br",null),Object(o.b)("br",null),"Set ",Object(o.b)("strong",{parentName:"td"},"Action Generation")," to ",Object(o.b)("strong",{parentName:"td"},"Generate Actions"),".",Object(o.b)("br",null),Object(o.b)("br",null),"Set ",Object(o.b)("strong",{parentName:"td"},"Action Acceptance")," to ",Object(o.b)("strong",{parentName:"td"},"Automatic"),".",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("strong",{parentName:"td"},"Do not")," click ",Object(o.b)("strong",{parentName:"td"},"Submit"),".",Object(o.b)("br",null)," ",Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/Automation-Policy-2.jpg",width:500}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"Once the Automation Policy is saved, it will go into effect. All actions generated such as Move, Suspend, and Provision will now be executed automatically.",Object(o.b)("br",null),Object(o.b)("br",null),"The main benefit and best practice of Turbonomic is to execute an increasing number of actions automatically. Removing human intervention and leveraging automation will maintain application performance and improve operational efficiency. ")))),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("details",null,Object(o.b)("summary",null,"Summary"),Object(o.b)("br",null),Object(o.b)("p",null,"In this demo we showed you how Turbonomic can assure the performance of your applications and improve the operational efficiency of the supporting application infrastructure. Using RobotShop, we walked through examples of how Turbonomic can augment the well-known benefits of a container platform to provide additional and high-value capabilities - ranging from intelligent container right sizing and SLA management to over-provisioning and cluster-wide workload consolidation."),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-300-watson-aiops-application-resource-management-demo-script-mdx-ee394426227d15e7b820.js.map