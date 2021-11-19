(window.webpackJsonp=window.webpackJsonp||[]).push([[68,35,37],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),b=a("NmYn"),l=a.n(b),o=a("Wbzz"),c=a("Xrax"),i=a("k4MR"),s=a("TSYQ"),d=a.n(s),p=a("QH2O"),m=a.n(p),h=a("qKvR"),u=function(e){var t,a=e.title,n=e.theme,r=e.tabs,b=void 0===r?[]:r;return Object(h.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=b.length,t[m.a.darkMode]="dark"===n,t))},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12"},Object(h.b)("h1",{id:"page-title",className:m.a.text},a)))))},O=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,b=r.baseUrl,l=r.subDirectory,c=b+"/edit/"+r.branch+l+"/src/pages"+t;return b?Object(h.b)("div",{className:"bx--row "+O.row},Object(h.b)("div",{className:"bx--col"},Object(h.b)("a",{className:O.link,href:c},"Edit this page on GitHub"))):null},g=a("FCXl"),N=a("dI71"),f=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(N.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],b=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),b=a===r,c=new RegExp(r+"/?(#.*)?$"),i=n.replace(c,a);return Object(h.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=b,t),f.listItem)},Object(h.b)(o.Link,{className:f.link,to:""+i},e))}));return Object(h.b)("div",{className:f.tabsContainer},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(h.b)("nav",{"aria-label":t},Object(h.b)("ul",{className:f.list},b))))))},t}(r.a.Component),v=a("MjG9"),w=a("CzIb"),x=a("Asxa"),k=a("OIbQ"),T=a.n(k),_=function(e){var t=e.date,a=new Date(t);return t?Object(h.b)(x.c,{className:T.a.row},Object(h.b)(x.a,null,Object(h.b)("div",{className:T.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,b=t.frontmatter,s=void 0===b?{}:b,d=t.relativePagePath,p=t.titleType,m=s.tabs,O=s.title,N=s.theme,f=s.description,x=s.keywords,k=s.date,T=Object(w.a)().interiorTheme,I=Object(o.useStaticQuery)("2456312558").site.pathPrefix,S=I?n.pathname.replace(I,""):n.pathname,C=m?S.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"",E=N||T;return Object(h.b)(i.a,{tabs:m,homepage:!1,theme:E,pageTitle:O,pageDescription:f,pageKeywords:x,titleType:p},Object(h.b)(u,{title:r?Object(h.b)(r,null):O,label:"label",tabs:m,theme:E}),m&&Object(h.b)(y,{title:O,slug:S,tabs:m,currentTab:C}),Object(h.b)(v.a,{padded:!0},a,Object(h.b)(j,{relativePagePath:d}),Object(h.b)(_,{date:k})),Object(h.b)(g.a,{pageContext:t,location:n,slug:S,tabs:m,currentTab:C}),Object(h.b)(c.a,null))}},"49O2":function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return c})),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a("wx14"),r=a("zLVn"),b=(a("q1tI"),a("7ljp")),l=a("013z"),o=(a("qKvR"),["components"]),c=function(){return Object(b.b)("span",null,"Observability ",Object(b.b)("br",null)," 100-level live demo")},i={},s={Title:c,_frontmatter:i},d=l.a;function p(e){var t=e.components,a=Object(r.a)(e,o);return Object(b.b)(d,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("img",{src:"./images/AIOps_Observability_100_Script.jpg",alt:"banner"}),Object(b.b)("span",{id:"top"}),Object(b.b)("details",null,Object(b.b)("summary",null,"Introduction"),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"NOTE"),": The provided demo environment is using Instana SaaS service, which follows the bi-weekly release schedule. This may result in minor differences between the screenshots in this guide and the actual environment you will see, however in most cases it will not impact the demo flow. In case you encounter significant differences please report in Slack support channel ",Object(b.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0124J683GW",target:"_blank",rel:"noreferrer"},"#itz-techzone-support"),".",Object(b.b)("br",null)),Object(b.b)("p",null,"In this demo, I’ll show how IBM Instana helps quickly identify, debug, and resolve an incident in a microservices-based application. ",Object(b.b)("br",null)," ",Object(b.b)("br",null),"To set the context, our application is called Stan’s Robot Shop, and it is modern, cloud-native application with microservices leveraging various technologies such as Java, Python, and MySQL and deployed in containers on top of Kubernetes cluster. ",Object(b.b)("br",null),Object(b.b)("br",null),"\nSuch applications create a serious challenge for managing application performance because components are dynamic and loosly coupled. They use different technologies so usually require broad knowledge and multiple tools to diagnose. ",Object(b.b)("br",null),Object(b.b)("br",null),"\nInstana, with a single agent deployed per host, automates the discovery process. Application components are discovered and observed as they are deployed. Over 200 technologies are supported with zero or minimal configuration, releasing you from installing and configuring multiple tools or plugins. The discovered components can be grouped into Application perspective giving the application owner easy overview of key metrics (“golden signals”) like ",Object(b.b)("em",{parentName:"p"},"Traffic"),", ",Object(b.b)("em",{parentName:"p"},"Errors")," and ",Object(b.b)("em",{parentName:"p"},"Latency")," on a single pane of glass."),Object(b.b)("br",null),"(Printer-ready PDF of demo script ",Object(b.b)("a",{href:"./100-Observability-Demo-Script.pdf",target:"_blank",rel:"noreferrer"},"here"),")",Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(b.b)("details",null,Object(b.b)("summary",null,"1 - Understanding context"),Object(b.b)("br",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"1.1")),Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"Automated discovery and dependency mapping")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Actions")),Object(b.b)("td",{parentName:"tr",align:"left"},"From sidebar menu, click ",Object(b.b)("strong",{parentName:"td"},"Applications"),Object(b.b)("br",null),Object(b.b)("br",null),"Choose ",Object(b.b)("strong",{parentName:"td"},"Robot Shop")," ",Object(b.b)("br",null),Object(b.b)("br",null),"Click the ",Object(b.b)("strong",{parentName:"td"},"Dependencies")," tab")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"Understanding the context of the observability data is essential for modern distributed applications with extensive dependencies between components. Here you can a visualization of all the dependencies within the Robot Shop application. Instana automatically discovered the relationships between the services and correlated them into this dynamic graph. This provides necessery context to understand how different components affect each other. We can see how requests are moving through the application in real-time. Instana is able to do this because it tracks every request that flows through the application. ",Object(b.b)("br",null)," ",Object(b.b)("br",null)," We can tell there are some problems with the application because several of the services are highlighted in yellow and red. ",Object(b.b)("br",null)," ",Object(b.b)("br",null)," You wouldn’t normally be looking at the dependency map when something like this happens, so let’s walk through what it looks like from the Site Reliability Engineer (SRE) or IT Operator’s point of view when an incident occurs.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Screenshots")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"./images/1_introduction_1.png",alt:"robot_shop_starting_point"}),Object(b.b)("br",null),Object(b.b)("img",{parentName:"td",src:"./images/2_discovery_1.png",alt:"robot_shop_dashboard"}),Object(b.b)("br",null),Object(b.b)("img",{parentName:"td",src:"./images/2_discovery_2.png",alt:"robot_shop_dependency_map"}))))),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(b.b)("details",null,Object(b.b)("summary",null,"2 - Working with events and incidents"),Object(b.b)("br",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"2.1")),Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"Automatically assess events and alerts")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")),Object(b.b)("td",{parentName:"tr",align:"left"},"Click on the ",Object(b.b)("strong",{parentName:"td"},"Events")," icon (triangle) in sidebar menu")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"We’ve just gotten an alert from Instana that there has been a sudden increase in erroneous calls on our ‘discount’ service, which is part of the robot shop application. ",Object(b.b)("br",null)," ",Object(b.b)("br",null)," Although I don’t have it connected right now, the alert would show up via one of the configurable alert channels, like Pager Duty, Microsoft Teams, Slack, and many others (",Object(b.b)("a",{href:"https://www.instana.com/docs/events_alerts/alert-channels",target:"_blank",rel:"noreferrer"},"full list"),"). ",Object(b.b)("br",null)," ",Object(b.b)("br",null)," It’s important to note here that you’re not getting alerts for just anything. Behind the scenes, Instana is determining which events and issues are related, and it only sends alerts on incidents if a problem is likely to affect end users. ",Object(b.b)("br",null)," ",Object(b.b)("br",null)," Let’s go into the details for this incident.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Screenshot")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"./images/3_events_1.png",alt:"sidebar_menu"}))))),Object(b.b)("br",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"2.2")),Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"Inspect the auto-correlated incident details")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")),Object(b.b)("td",{parentName:"tr",align:"left"},"Click on the incident called ",Object(b.b)("strong",{parentName:"td"},"Sudden increase in the number of erroneous calls")," on the ‘discount’ service")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"Instana recognized that the sudden increase in the number of erroneous calls was something important to alert on, so we did not have to do any configuration or set thresholds in order to get this alert. We get key information right away when we come into this incident detail page. There’s a timeline of the incident, the event that triggered Instana to create the incident, and all of the related events.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Screenshots")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"./images/3_events_2.png",alt:"event_page"})," ",Object(b.b)("br",null)," ",Object(b.b)("br",null)," Incident details screen: ",Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"./images/3_events_3.png",alt:"incident_details_screen"}))))),Object(b.b)("br",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"2.3")),Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"Understand the incident")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Actions")),Object(b.b)("td",{parentName:"tr",align:"left"},"Under ",Object(b.b)("strong",{parentName:"td"},"Related Events"),", click on the event that says ",Object(b.b)("strong",{parentName:"td"},"Sudden increase in the number of erroneous calls"),Object(b.b)("br",null),Object(b.b)("br",null)," At the end, click ",Object(b.b)("strong",{parentName:"td"},"Analyze Calls")," button")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"It looks like the abnormal termination of the MySQL database caused the problem. It shows how one data store issue rippled out to effect a number of directly and indirectly connected services. Instana’s automatic root cause analysis uses the relationship information from the Dynamic Graph to accurately collate the individual issues into one incident. This completely eliminates alert storms. Providing your DevOps engineers and SREs with a single notification of actionable information to enable them to promptly restore normal service. Let’s look at some related traces for this.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Screenshot")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"./images/3_events_4.png",alt:"events"}))))),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(b.b)("details",null,Object(b.b)("summary",null,"3 - Unbounded Analytics "),Object(b.b)("br",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"3.1")),Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"Examine call details")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Actions")),Object(b.b)("td",{parentName:"tr",align:"left"},"Click on the endpoint named ",Object(b.b)("strong",{parentName:"td"},"CONNECT"),Object(b.b)("br",null),Object(b.b)("br",null),"Then, click on the first call (also named ",Object(b.b)("strong",{parentName:"td"},"CONNECT"),")")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"Now, we moved to the Analytics view. You can see, how Instana UI allows for easy navigation between different views, keeping the time span and context. At the top you can see Filter that was applied to all collected traces. All filtered requests are grouped by endpoint ","[",Object(b.b)("em",{parentName:"td"},"In this case it is database CONNECT exposed my MySQL server"),"]",". There is only one endpoint here, but if there were multiple, you’d see a list. Endpoints are automatically discovered and mapped by Instana. ",Object(b.b)("br",null),Object(b.b)("br",null)," We can go into the details for each erroneous call to MySQL via this endpoint (CONNECT).")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Screenshot")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"./images/4_traces_1.png",alt:"endpoint_connect"}))))),Object(b.b)("br",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"3.2")),Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"View call via visual dashboard")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"Clicking on an individual call takes us to a view of the call in context of the end-to-end trace. We can see where the request began () and each call that was made along the way. ",Object(b.b)("br",null)," ",Object(b.b)("br",null)," Everything is presented in an easy-to-navigate visual dashboard, so we can drill into increasingly detailed information to pinpoint the problem, without using multiple tools or navigating back and forth to lots of dashboards.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Screenshot")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"./images/4_traces_2.png",alt:"call_timeline"}))))),Object(b.b)("br",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"3.3")),Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"Understand the impact and source of the incident")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")),Object(b.b)("td",{parentName:"tr",align:"left"},"Click on the span called ",Object(b.b)("strong",{parentName:"td"},"CONNECT")," and refer to the sidebar on the right side")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"Clicking on a span gives more details, including the source and destination as well as the full stack trace. In this case, we can see that the source is the ‘discount’ service, and scroll down to see the destination is CONNECT of MySQL.",Object(b.b)("br",null),Object(b.b)("br",null),"So we can confirm that the root cause of the incident that affected the ‘discount’ service was with the MySQL database. The abnormal termination of the database caused a connection error, which then flowed back through the application.",Object(b.b)("br",null),Object(b.b)("br",null),"When we bring MySQL back online, it will fix the problem.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Screenshot")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"./images/4_traces_3.png",alt:"connect"}))))),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(b.b)("details",null,Object(b.b)("summary",null,"4 - Confirming incident resolution was successful"),Object(b.b)("br",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"4.1")),Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"Observe that metrics for the Robot Shop have returned to normal")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Actions")),Object(b.b)("td",{parentName:"tr",align:"left"},"In the top-right corner set the timeframe so it begins at 30 minutes past the hour and ends at 45 minutes past the hour",Object(b.b)("br",null),Object(b.b)("br",null),"Click ",Object(b.b)("strong",{parentName:"td"},"Set time")," ",Object(b.b)("br",null),Object(b.b)("br",null),"Navigate to ",Object(b.b)("strong",{parentName:"td"},"Applications")," in the sidebar menu, choose ",Object(b.b)("strong",{parentName:"td"},"Robot Shop"),", and click on the ",Object(b.b)("strong",{parentName:"td"},"Summary")," tab ",Object(b.b)("br",null)," ",Object(b.b)("br",null),Object(b.b)("strong",{parentName:"td"},"Note"),": You should see that the call volume has increased, the number of erroneous calls decreased, and latency also decreased.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"Now that MySQL is working again, we can go back and confirm that the problems with the Robot Shop have been repaired. "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ;"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Screenshot")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"./images/5_confirmation_1.png",alt:"robot_shop_summary_end"}))))),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(b.b)("details",null,Object(b.b)("summary",null,"Summary"),Object(b.b)("br",null),Object(b.b)("p",null,"Now, we can see that the metrics for the Robot Shop have returned to normal: the call volume has increased again, the erroneous call rate as well as latency has dropped."),Object(b.b)("br",null),Object(b.b)("p",null,"The problem with the Robot Shop has been fixed and the application normal state was restored!"),Object(b.b)("br",null),Object(b.b)("p",null,"Hopefully, you’ve seen that Instana can help make the process of identifying problems and finding the root cause of those problems very frictionless. Since Instana automates so many of the manual and labor-intensive aspects of the process, you can focus on getting other work done and not worry about instrumenting observability or constantly monitoring for problems. And when problems do arise, all the trace data is there at your fingertips to dig into."),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(b.b)("hr",null))}p.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-demo-script-with-disclaimer-mdx-542487f23e845f6b5b84.js.map