(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),i=a.n(o),b=a("Wbzz"),c=a("Xrax"),s=a("k4MR"),l=a("TSYQ"),p=a.n(l),m=a("QH2O"),d=a.n(m),u=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(u.b)("div",{className:p()(d.a.pageHeader,(t={},t[d.a.withTabs]=o.length,t[d.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:d.a.text},a)))))},g=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,i=r.subDirectory,c=o+"/edit/"+r.branch+i+"/src/pages"+t;return o?Object(u.b)("div",{className:"bx--row "+g.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:g.link,href:c},"Edit this page on GitHub"))):null},j=a("FCXl"),f=a("dI71"),N=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),o=a===r,c=new RegExp(r+"/?(#.*)?$"),s=n.replace(c,a);return Object(u.b)("li",{key:e,className:p()((t={},t[N.selectedItem]=o,t),N.listItem)},Object(u.b)(b.Link,{className:N.link,to:""+s},e))}));return Object(u.b)("div",{className:N.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:N.list},o))))))},t}(r.a.Component),v=a("MjG9"),w=a("CzIb"),T=a("Asxa"),x=a("OIbQ"),k=a.n(x),A=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(T.c,{className:k.a.row},Object(u.b)(T.a,null,Object(u.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,l=void 0===o?{}:o,p=t.relativePagePath,m=t.titleType,d=l.tabs,g=l.title,f=l.theme,N=l.description,T=l.keywords,x=l.date,k=Object(w.a)().interiorTheme,S=Object(b.useStaticQuery)("2456312558").site.pathPrefix,R=S?n.pathname.replace(S,""):n.pathname,P=d?R.split("/").filter(Boolean).slice(-1)[0]||i()(d[0],{lower:!0}):"",z=f||k;return Object(u.b)(s.a,{tabs:d,homepage:!1,theme:z,pageTitle:g,pageDescription:N,pageKeywords:T,titleType:m},Object(u.b)(h,{title:r?Object(u.b)(r,null):g,label:"label",tabs:d,theme:z}),d&&Object(u.b)(y,{title:g,slug:R,tabs:d,currentTab:P}),Object(u.b)(v.a,{padded:!0},a,Object(u.b)(O,{relativePagePath:p}),Object(u.b)(A,{date:x})),Object(u.b)(j.a,{pageContext:t,location:n,slug:R,tabs:d,currentTab:P}),Object(u.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},DE36:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return c})),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return m}));var n=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),i=a("013z"),b=(a("qKvR"),["components"]),c=function(){return Object(o.b)("span",null,"Application resource management ",Object(o.b)("br",null)," 300-level live demo")},s={},l={Title:c,_frontmatter:s},p=i.a;function m(e){var t=e.components,a=Object(r.a)(e,b);return Object(o.b)(p,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("img",{src:"./images/Incident-Resolution-300-Script.jpg",alt:"banner"}),Object(o.b)("span",{id:"top"}),Object(o.b)("details",null,Object(o.b)("summary",null,"Introduction"),Object(o.b)("br",null),Object(o.b)("p",null,"In this demo, I’ll show you how Turbonomic helps SREs and IT Ops teams proactively assure application performance and drive operational efficiency across their mission critical deployments."),Object(o.b)("br",null),Object(o.b)("p",null,"Home Robots Inc is fully digital global consumer electronic company that sells a growing array of innovative robots that assist with mundane household chores. RobotShop is the primary market place where clients browse and make online purchases.  RobotShop is a microservices-based cloud native app. The spot promotions and other marketing events around the globe result in varying and unpredictable load patterns. The site has suffered from customer experience issues due to application performance that was caused by underlying resource issues. The IT Ops teams lack the full stack visibility and tend to either over or under provision based on best-guesses - this is highly inefficient, very costly and risky.  ",Object(o.b)("br",null),Object(o.b)("br",null)),Object(o.b)("p",null,"In this demo we will show you how Turbonomic, a solution based on Application Resource Management can help Home Robots Inc. We will:"),Object(o.b)("br",null),"• See how Turbonomic stitches together a full-stack view from business applications to the platform all the way to the underlying physical infrastructure. ",Object(o.b)("br",null),"• Examine a few types of resource optimization recommendations generated by the AI-based platform analytics. ",Object(o.b)("br",null),"• Demonstrate how the execution of the derived Actions can be automated. ",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("details",null,Object(o.b)("summary",null,"1 - Getting a global view of the applications and their infrastructure dependencies"),Object(o.b)("br",null),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"1.1")),Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"Ingest data from observability platforms and  other monitoring tools")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"Turbonomic requires configuration and operational performance data to make recommendations. The more data the better.",Object(o.b)("br",null),Object(o.b)("br",null),"RobotShop is being observed by Instana. Turbonomic in turn has tight integrations with Instana and other monitoring tools and therefore has access to this performance data.",Object(o.b)("br",null),Object(o.b)("br",null),"Turbonomic ingests, normalizes and builds a common data model to “stitch” together a graphical view of the application-to-resource dependencies. This is called the Supply Chain.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Actions")),Object(o.b)("td",{parentName:"tr",align:"left"},"1.1.1 - Click ",Object(o.b)("strong",{parentName:"td"},"Settings")," (1), select ",Object(o.b)("strong",{parentName:"td"},"Target Configurations")," (2), and select the ",Object(o.b)("strong",{parentName:"td"},"avar.coc-ibm.com")," Instana option (3). ",Object(o.b)("br",null)," ",Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-managements/images/target-configurations.jpg",width:800}))))),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"1.2")),Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"Examine the global supply chain")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"We are responsible for RobotShop - but before we dive into RobotShop it is important to take a step back and understand the global picture :-what others apps are consuming shared resources here, what platforms are applications deployed to and what are the underlying infrastructure components involved.",Object(o.b)("br",null),Object(o.b)("br",null),"The Global Supply Chain provides the  visualization and serves as a graphical organizer of the various entities in the IT stack and models the dynamic relationships all the way from the managed Application, across the underlying related infrastructure layers from the on-prem data center all the way out to the cloud.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 1.2.1"),Object(o.b)("td",{parentName:"tr",align:"left"},"Log in to the Turbonomic instance, ensuring that you are on the ",Object(o.b)("strong",{parentName:"td"},"Application")," tab of the ",Object(o.b)("strong",{parentName:"td"},"Turbonomic Home Page"),". ",Object(o.b)("br",null),Object(o.b)("br",null),"  ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-managements/images/Global-Supply-Chain.jpg",width:800}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"RobotShop is a modern containerized application. It is deployed to a highly virtualized on-prem environment based on Red Hat OpenShift. ",Object(o.b)("br",null),Object(o.b)("br",null),"RobotShop shares cluster resources with other applications. Hence the performance of RobotShop is directly impacted by competing apps and shared infrastructure. ",Object(o.b)("br",null),Object(o.b)("br",null),"Starting at the top you have all the Business Applications that Turbonomic is aware off in this deployment environment. Business Applications are composed of Business Transactions - which are logical business function that an end-user would execute. A purchase or add-to-cart is an example of a business transaction. Transactions in turn use Services - where a service is basically a REST endpoint.",Object(o.b)("br",null),Object(o.b)("br",null),"Going down the supply chain you see the components that build up the lower layers of the application stack - ranging from K8S and vSphere virtualization controllers to database servers, storage volumes, hosts and all the way out to availability zones on the public cloud. ",Object(o.b)("br",null),Object(o.b)("br",null),"Each circle represents an IT entity, the color reflects the current health of the entities - Red points to a critical risk, yellow is an area to improve efficiency and green is healthy. ",Object(o.b)("br",null),Object(o.b)("br",null),"You can set a time frame from recent hours to the past year - this flexibility to visualize resource relationships at varying points in time is also very valuable. ")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"Let’s see what are the Top Business Applications at risk - that need immediate attention. The list is ordered in terms of severity.",Object(o.b)("br",null),Object(o.b)("br",null),"We can observe that RobotShop currently has SLO violations - where response time is up and throughput is below expected service levels.",Object(o.b)("br",null),Object(o.b)("br",null),"The Application Resource Health bar indicates that there are some critical performance issues (in Red) as well as some area to improve efficiency (in Yellow).",Object(o.b)("br",null),Object(o.b)("br",null),"The Actions button will take you to the Actions panel enabling you to take the recommended actions directly from Turbonomic.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 1.2.2"),Object(o.b)("td",{parentName:"tr",align:"left"},"Hover your mouse over the ",Object(o.b)("strong",{parentName:"td"},"Business Applications")," entity and ",Object(o.b)("strong",{parentName:"td"},"Click Business Applications")," entity. ",Object(o.b)("br",null),Object(o.b)("br",null),"  ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-managements/images/RobotShop-SLO-Violation.png",width:800}))))),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("details",null,Object(o.b)("summary",null,"2 - Drilling into RobotShop"),Object(o.b)("br",null),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"2.1")),Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"Examine the RobotShop specific Supply Chain (Resource Dependencies)")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"Now that we have a broad understanding of the Global View, let’s examine the health of our app RobotShop. This is called Scoping. ",Object(o.b)("br",null),Object(o.b)("br",null),"The Supply Chain views, whether Global or Scoped to a specific app (like RobotShop in our case), serves as a single source of information and helps bridge the communication gap that often exists between the Application owners and IT Ops infrastructure teams.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 2.1.1"),Object(o.b)("td",{parentName:"tr",align:"left"},"Click the ",Object(o.b)("strong",{parentName:"td"},"RobotShop")," link to Scope to RobotShop.  ",Object(o.b)("br",null)," ",Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-managements/images/RobotShop-Supply-Chain.jpg",width:800}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"The Supply Chain is scoped to RobotShop. The charts provide a quick view of the overall operating health of RobotShop.",Object(o.b)("br",null),Object(o.b)("br",null),"Turbonomic builds its application-awareness from tools like Instana and discovers Kubernetes pods via a set of deployed probes. Notice that, since RobotShop is a Kubernetes-based cloud native application, all the entities appearing in the supply chain are specific to a Container Platform infrastructure. The container platform in this case is RHOCP and runs on a VMWare cluster on-prem. Hence, there are no cloud entities in the RobotShop supply chain.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 2.1.2"),Object(o.b)("td",{parentName:"tr",align:"left"},"In the ",Object(o.b)("strong",{parentName:"td"},"Pending Actions")," chart, click on ",Object(o.b)("strong",{parentName:"td"},"Show All"),". On the ",Object(o.b)("strong",{parentName:"td"},"Action Center")," panel, select ",Object(o.b)("strong",{parentName:"td"},"Workload Controller"),". Click ",Object(o.b)("strong",{parentName:"td"},"Details"),". ",Object(o.b)("br",null)," ",Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-managements/images/RobotShop-Performance-Action-click-DETAILS.jpg",width:800}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"Based on the ongoing holistic analysis that the Turbonomic engine does of your environment it generates actions that you can take to resolve and AVOID emerging problems. ",Object(o.b)("br",null),Object(o.b)("br",null),"The actions are scoped to the containers that are part of the  RobotShop deployment. ",Object(o.b)("br",null),Object(o.b)("br",null),"Here we can see container resize actions, categorized as Performance and Efficiency actions and displayed for you to investigate further or execute directly. ",Object(o.b)("br",null),Object(o.b)("br",null),"Container Resize UP actions are typically Performance-Centric actions that are driven to resolve an underlying resource congestion issue.",Object(o.b)("br",null),Object(o.b)("br",null),"Container Resize DOWN actions are typically Efficiency-centric actions that are pointing to a resource optimization opportunity likely a consequence of resource over-provisioning.")))),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("details",null,Object(o.b)("summary",null,"3 - Understanding the AI-Derived Resource Optimization Recommendations "),Object(o.b)("br",null),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"3.1")),Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"Analyze a RobotShop Performance Recommendation")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"Let’s explore one of the generated RobotShop Performance actions recommendations in more detail.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 3.1.1"),Object(o.b)("td",{parentName:"tr",align:"left"},"On the ",Object(o.b)("strong",{parentName:"td"},"Action Details")," page, click ",Object(o.b)("strong",{parentName:"td"},"Expand Details")," to inspect the rationale behind the recommendations.",Object(o.b)("br",null)," ",Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-managements/images/Expand-Action-Details.jpg",width:800}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"The graphs show an imminent congestion of virtual memory for the RobotShop card pod. This is based on the a percentile analysis from the last 30 days observation period. A recommendation to upsize the existing memory from 100 MB to 228 MB is being made. The analysis also shows that if this action is take it will result in a reduction of memory utilization from 82% to 36%. This memory upsizing will mitigate the detected risk of contention for memory resources. ")))),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"3.2")),Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"Analyze a RobotShop efficiency recommendation")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"When the architect initially does sizing, the values are based on best-guesses and taking a safer path typically resulting in over-provisioning of resources. Therefore there is often opportunity to reclaim unused expensive resources and save costs.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 3.2.1"),Object(o.b)("td",{parentName:"tr",align:"left"},"On the ",Object(o.b)("strong",{parentName:"td"},"Action Center")," panel, select ",Object(o.b)("strong",{parentName:"td"},"rabbitmq"),". Click ",Object(o.b)("strong",{parentName:"td"},"Details"),".",Object(o.b)("br",null),Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-managements/images/rabbitmq-overprovisioning-1.jpg",width:800})," ",Object(o.b)("br",null),Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-managements/images/rabbitmq-overprovisioning-2.jpg",width:800}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"Based on resource analysis of the RobotShop rabbitmq service we can see that memory is over-provisioned and can be reduced. An Efficiency recommendation is being made to reduce the memory of the pod from 512 MB to 384 MB. The downsizing will improve memory utilization without impacting overall service performance.",Object(o.b)("br",null),Object(o.b)("br",null),"CPU on the other hand is potentially risky at 90% utilization level. The CPU congestion can result in a performance degradation of this service.  A recommendation is also being made to double the CPU capacity of the RobotShop rabbitmq container.")))),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"3.3")),Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"Analyze an Efficiency action")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"The performance of service depends on the availability of compute resources to the encapsulating pod. The pod runs on a node - hence the performance and efficiency of the node matters. We will see how Turbonomic is able to intelligently and proactively redistribute workloads in real-time to better optimize the full stack.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 3.3.1"),Object(o.b)("td",{parentName:"tr",align:"left"},"On the ",Object(o.b)("strong",{parentName:"td"},"RobotShop")," Supply chain, hover over the ",Object(o.b)("strong",{parentName:"td"},"Namespace")," entity. Inspect the popup to get a quick view of the risks, then click ",Object(o.b)("strong",{parentName:"td"},"Namespace"),".",Object(o.b)("br",null)," ",Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-managements/images/RobotShop-Namespace.jpg",width:800}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"A Namespace is a logical pool of resources in a Kubernetes environment that manages workloads based on specific requirements or business needs.  The Capacity and Usage chart provides a quick view into quotas set on this cluster and the relative utilization of the resources. These quotas serve as the guardrails when making container sizing decisions. In the Top Services chart it shows that the RobotShop rabbitmq service can benefit from some performance and efficiency actions. ")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 3.3.2"),Object(o.b)("td",{parentName:"tr",align:"left"},"On the ",Object(o.b)("strong",{parentName:"td"},"Service-robot-shop/rabbitmq")," row, click on ",Object(o.b)("strong",{parentName:"td"},"Actions"),".",Object(o.b)("br",null),Object(o.b)("br",null),"  ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-managements/images/rabbitmq-Actions-Click.jpg",width:800}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 3.3.3"),Object(o.b)("td",{parentName:"tr",align:"left"},"On the ",Object(o.b)("strong",{parentName:"td"},"Action Center")," panel, under ",Object(o.b)("strong",{parentName:"td"},"Move"),", select ",Object(o.b)("strong",{parentName:"td"},"Container Pods"),", then ",Object(o.b)("strong",{parentName:"td"},"robotshop/rabbitmq")," under ",Object(o.b)("strong",{parentName:"td"},"Move Actions"),". Click ",Object(o.b)("strong",{parentName:"td"},"Details"),".",Object(o.b)("br",null)," ",Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-managements/images/rabbitmq-Action-Details-1.jpg",width:800}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"The RobotShop rabbitmq service is a queueing service hosting the RabbitMQ server. Turbonomic analysis indicates that the worker node currently hosting the rabbitmq service is under-utilized and operational efficiency can be further improved by moving this service to another worker node and in that process consolidating the cluster resources on fewer worker nodes. The analytics also computes the approximate future resource utilization rates of the source and target worker nodes if the actions were to be taken. In the absence of these capabilities the alternate manual approach can be slow, reactive, error-prone and increasingly challenging as the number of services on the cluster grow.",Object(o.b)("br",null),Object(o.b)("br",null),"Last but not least, the analytics also inform the user whether these resource optimization actions can be taken right from within Turbonomic. Let’s look at that next. ")))),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("details",null,Object(o.b)("summary",null,"4 - Taking Action - Putting your Application Resource Management into AutoPilot "),Object(o.b)("br",null),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"4.1")),Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"Take action")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"A key part of the Application Resource Management process is to generate a set of actions that the user can take to proactively avoid a potential performance issue. All actions generated appear as pending and can be viewed in the Pending Actions chart, as we’ve seen above. We can then determine whether to execute them manually right from within Turbonomic or automate the action execution and remove or minimize the human intervention. Let’s look at the manual execution process first.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 4.1.1"),Object(o.b)("td",{parentName:"tr",align:"left"},"In the ",Object(o.b)("strong",{parentName:"td"},"Action Center")," panel, under ",Object(o.b)("strong",{parentName:"td"},"Move"),", select the ",Object(o.b)("strong",{parentName:"td"},"robot-shop/rabbitmq")," action. Click ",Object(o.b)("strong",{parentName:"td"},"Execute Action"),".",Object(o.b)("br",null),Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-managements/images/Take-Action-Manually.jpg",width:800}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"Now let’s manually execute the recommended resource Efficiency action on the robot-shop/rabbitmq service. Turbonomic allows you to execute the recommended action right from within the platform - this is very convenient and enhances productivity as no tool hopping is necessary and all the audit trails of what actions were executed, by whom and when are easily available for compliance purposes if necessary.")))),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"4.2")),Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"Automating Action Execution - Towards Eliminating Manual Intervention")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"RobotShop is composed of a dozen or so microservices. Given the fluctuating demand patterns and the availability of compute resources resource optimization actions will be continuously generated by the platform - with the sole goal of keeping RobotShop in the ‘desired state’. ",Object(o.b)("br",null),Object(o.b)("br",null),"We will now briefly walk through how we can define automation policies to automate this action execution.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 4.1.1"),Object(o.b)("td",{parentName:"tr",align:"left"},"From ",Object(o.b)("strong",{parentName:"td"},"Settings"),", click  ",Object(o.b)("strong",{parentName:"td"},"Policies"),", then click ",Object(o.b)("strong",{parentName:"td"},"New Automation Policy")," and select ",Object(o.b)("strong",{parentName:"td"},"Container Pod"),".",Object(o.b)("br",null)," ",Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-managements/images/Automation-Policy-1.jpg",width:800}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"The process defining an automation policy is the same across the various entity types, but the Action Types vary as they are entity specific.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 4.1.1"),Object(o.b)("td",{parentName:"tr",align:"left"},"Fill out the ",Object(o.b)("strong",{parentName:"td"},"Action and Orchestration Panel")," as shown below.",Object(o.b)("br",null)," ",Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-managements/images/Automation-Policy-2.jpg",width:800}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"ARE MEANT TO BE ACTIONS? Define the Action Types that will be automated by this automation policy - Move, Suspend, Provision",Object(o.b)("br",null),Object(o.b)("br",null),"Set Action Generation —> Generate Actions",Object(o.b)("br",null),Object(o.b)("br",null),"Set Action Acceptance —> Automatic",Object(o.b)("br",null),Object(o.b)("br",null),"DO NOT click SUBMIT ")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"Once the Automation Policy is saved it will go into effect, all Actions generated such as Move - Suspend - Provision, will then be automatically executed.",Object(o.b)("br",null),Object(o.b)("br",null),"The main benefit and best-practice of Turbonomic, is to have an increasing number of actions be executed automatically. This will remove human intervention and leverage automation to maintain application performance and improve operational efficiency. ")))),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("details",null,Object(o.b)("summary",null,"Summary"),Object(o.b)("br",null),Object(o.b)("p",null,"In this demo we used RobotShop, a cloud-native application to demonstrate how Turbonomic, leverages the principles of Application Resource Management to:",Object(o.b)("br",null),Object(o.b)("br",null)),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Provide full stack visibility and control into your diverse deployment environments",Object(o.b)("br",null)),Object(o.b)("li",{parentName:"ul"},"Conduct continuous application-aware resource optimization, balancing demand and supply in realtime",Object(o.b)("br",null)),Object(o.b)("li",{parentName:"ul"},"Enable the Automated Execution of the AI-derived and platform-generated actions ")),Object(o.b)("br",null),Object(o.b)("p",null,"Using RobotShop, we walked through examples of container right sizing, over-provisioning and workload consolidation and how Turbonomic can  analyze-detect-act to assure the performance of your applications and to improve the operational efficiency of the supporting application infrastructure. "),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))))}m.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-300-watson-aiops-application-resource-management-demo-script-dec-13-mdx-994f45c030c5a0ffe31a.js.map