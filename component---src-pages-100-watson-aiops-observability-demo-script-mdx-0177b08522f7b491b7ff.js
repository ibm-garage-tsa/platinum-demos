(window.webpackJsonp=window.webpackJsonp||[]).push([[24,36,37,82],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),b=a("NmYn"),l=a.n(b),o=a("Wbzz"),i=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),d=a.n(s),p=a("QH2O"),m=a.n(p),u=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,r=e.tabs,b=void 0===r?[]:r;return Object(u.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=b.length,t[m.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,b=r.baseUrl,l=r.subDirectory,i=b+"/edit/"+r.branch+l+"/src/pages"+t;return b?Object(u.b)("div",{className:"bx--row "+g.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:g.link,href:i},"Edit this page on GitHub"))):null},O=a("FCXl"),A=a("dI71"),N=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(A.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],b=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),b=a===r,i=new RegExp(r+"/?(#.*)?$"),c=n.replace(i,a);return Object(u.b)("li",{key:e,className:d()((t={},t[N.selectedItem]=b,t),N.listItem)},Object(u.b)(o.Link,{className:N.link,to:""+c},e))}));return Object(u.b)("div",{className:N.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:N.list},b))))))},t}(r.a.Component),y=a("MjG9"),w=a("CzIb"),v=a("Asxa"),x=a("OIbQ"),k=a.n(x),B=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(v.c,{className:k.a.row},Object(u.b)(v.a,null,Object(u.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,b=t.frontmatter,s=void 0===b?{}:b,d=t.relativePagePath,p=t.titleType,m=s.tabs,g=s.title,A=s.theme,N=s.description,v=s.keywords,x=s.date,k=Object(w.a)().interiorTheme,T=Object(o.useStaticQuery)("2456312558").site.pathPrefix,I=T?n.pathname.replace(T,""):n.pathname,E=m?I.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"",Q=A||k;return Object(u.b)(c.a,{tabs:m,homepage:!1,theme:Q,pageTitle:g,pageDescription:N,pageKeywords:v,titleType:p},Object(u.b)(h,{title:r?Object(u.b)(r,null):g,label:"label",tabs:m,theme:Q}),m&&Object(u.b)(f,{title:g,slug:I,tabs:m,currentTab:E}),Object(u.b)(y.a,{padded:!0},a,Object(u.b)(j,{relativePagePath:d}),Object(u.b)(B,{date:x})),Object(u.b)(O.a,{pageContext:t,location:n,slug:I,tabs:m,currentTab:E}),Object(u.b)(i.a,null))}},"6cuA":function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return i})),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a("wx14"),r=a("zLVn"),b=(a("q1tI"),a("7ljp")),l=a("013z"),o=(a("qKvR"),["components"]),i=function(){return Object(b.b)("span",null,"Observability ",Object(b.b)("br",null)," 100-level live demo")},c={},s={Title:i,_frontmatter:c},d=l.a;function p(e){var t=e.components,a=Object(r.a)(e,o);return Object(b.b)(d,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(b.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"17.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAADABQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABkrEuFT//xAAYEAACAwAAAAAAAAAAAAAAAAABAgARM//aAAgBAQABBQKJq4F//8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQMBAT8BV//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABgQAAIDAAAAAAAAAAAAAAAAAAAQEWLB/9oACAEBAAY/AibYv//EABkQAAIDAQAAAAAAAAAAAAAAAAABITFBcf/aAAgBAQABPyFXwmzXEZOH/9oADAMBAAIAAwAAABCHz//EABYRAQEBAAAAAAAAAAAAAAAAAAABMf/aAAgBAwEBPxCNP//EABYRAQEBAAAAAAAAAAAAAAAAAAABMf/aAAgBAgEBPxCJj//EABsQAAIDAAMAAAAAAAAAAAAAAAEhABFBMWFx/9oACAEBAAE/EBBbx04jAbrkZiUi8Mn/2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(b.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/platinum-demos/static/1c147f217099cd42ae0e71d1911bb911/2e753/AIOps_Observability_100_Script.jpg",srcSet:["/platinum-demos/static/1c147f217099cd42ae0e71d1911bb911/69549/AIOps_Observability_100_Script.jpg 288w","/platinum-demos/static/1c147f217099cd42ae0e71d1911bb911/473e3/AIOps_Observability_100_Script.jpg 576w","/platinum-demos/static/1c147f217099cd42ae0e71d1911bb911/2e753/AIOps_Observability_100_Script.jpg 1152w","/platinum-demos/static/1c147f217099cd42ae0e71d1911bb911/74f4b/AIOps_Observability_100_Script.jpg 1728w","/platinum-demos/static/1c147f217099cd42ae0e71d1911bb911/cbe2c/AIOps_Observability_100_Script.jpg 2000w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(b.b)("span",{id:"top"}),Object(b.b)("details",null,Object(b.b)("summary",null,"Introduction"),Object(b.b)("br",null),Object(b.b)("p",null,"In this demo, I’ll show how IBM Instana helps quickly identify, debug, and resolve an incident in a microservices-based application. Our application is called Stan’s Robot Shop, and it uses various technologies such as Java, Python, and MySQL to sell robots online."),Object(b.b)("br",null),Object(b.b)("p",null,"Let’s get started!"),Object(b.b)("br",null),Object(b.b)("p",null,"(Printer-ready PDF of demo script ",Object(b.b)("a",{href:"/platinum-demos/dcba452456980600d74375c3b49848c6/100-Observability-Demo-Script.pdf",target:"_blank",rel:"noreferrer"},"here"),")"),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(b.b)("details",null,Object(b.b)("summary",null,"1 - Getting an incident alert"),Object(b.b)("br",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"1.1")),Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"Automatically assess events and alerts")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"Such applications create a serious challenge for managing application performance because components are dynamic and loosely coupled. They use different technologies so usually require broad knowledge and multiple tools to diagnose. Instana, with a single agent deployed per host, automates the discovery process.",Object(b.b)("br",null)," ",Object(b.b)("br",null),"Application components are discovered and observed as they are deployed. Over 200 technologies are supported with zero or minimal configuration, releasing you from installing and configuring multiple tools or plugins. The discovered components can be grouped into an Application perspective giving the application owner an easy overview of key metrics (“golden signals”) like Traffic, Errors, and Latency on a single pane of glass.",Object(b.b)("br",null),Object(b.b)("br",null)," This is a visualization of all the dependencies within the robot shop application. Instana automatically discovered the relationships between the services and correlated them into this dynamic graph. We can see how requests are moving through the application in real-time. Instana is able to do this because it tracks every request that flows through the application. ",Object(b.b)("br",null)," ",Object(b.b)("br",null)," We can tell there are some problems with the application because several of the services are highlighted in yellow and red. ",Object(b.b)("br",null),Object(b.b)("br",null),"But, you wouldn’t normally be looking at the dashboard when something like this happens, so let me walk you through what it looks like from the SRE/IT operator’s point of view when an incident occurs.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 1.1.1"),Object(b.b)("td",{parentName:"tr",align:"left"},"From sidebar menu, click ",Object(b.b)("strong",{parentName:"td"},"Applications"),". Choose ",Object(b.b)("strong",{parentName:"td"},"Robot Shop.")," Click the ",Object(b.b)("strong",{parentName:"td"},"Dependencies")," tab. ",Object(b.b)("br",null),Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-observability/images/robot_shop_starting_point.png",width:800}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"We’ve just gotten an alert from Instana that there has been a sudden increase in erroneous calls on our ‘discount’ service, which is part of the robot shop application. ",Object(b.b)("br",null)," ",Object(b.b)("br",null)," Although I don’t have it connected right now, the alert would show up via one of the configurable alert channels, like PagerDuty, Microsoft Teams, Slack, and many others ",Object(b.b)("a",{href:"https://www.instana.com/docs/events_alerts/alert-channels",target:"_blank",rel:"noreferrer"},"(full list)"),". ",Object(b.b)("br",null)," ",Object(b.b)("br",null)," It’s important to note here that you’re not getting alerts for just anything. Behind the scenes, Instana is determining which events and issues are related, and it only sends alerts if a problem is likely to affect end users. ",Object(b.b)("br",null)," ",Object(b.b)("br",null)," Let’s go into the details for this incident.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 1.1.1"),Object(b.b)("td",{parentName:"tr",align:"left"},"Click the ",Object(b.b)("strong",{parentName:"td"},"Events")," icon (triangle) on the sidebar menu. ",Object(b.b)("br",null),Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-observability/images/sidebar_menu.png",width:800}))))),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(b.b)("details",null,Object(b.b)("summary",null,"2 - Inspecting auto-correlated incident details"),Object(b.b)("br",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"2.1")),Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"Gather information from the incident detail page")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"Instana recognized that the sudden increase in the number of erroneous calls was something important to alert on, so we did not have to do any configuration or set thresholds in order to get this alert. We get key information right away when we come into this incident detail page. There’s a timeline of the incident, the event that triggered Instana to create the incident, and all of the related events.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 2.1.1"),Object(b.b)("td",{parentName:"tr",align:"left"},"Click the incident called ",Object(b.b)("strong",{parentName:"td"},"Sudden increase in the number of erroneous calls")," on the ‘discount’ service. ",Object(b.b)("br",null),Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-observability/images/event_page.png",width:800}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 2.1.2"),Object(b.b)("td",{parentName:"tr",align:"left"},"You will see the ",Object(b.b)("strong",{parentName:"td"},"Incident Timeline"),", ",Object(b.b)("strong",{parentName:"td"},"Triggering Event"),", and ",Object(b.b)("strong",{parentName:"td"},"Related Events"),". ",Object(b.b)("br",null),Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-observability/images/incident_details_screen.png",width:800}))))),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(b.b)("details",null,Object(b.b)("summary",null,"3 - Debugging the incident by inspecting calls"),Object(b.b)("br",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"3.1")),Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"Understand the incident")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"Let’s take a closer look. ",Object(b.b)("br",null),Object(b.b)("br",null)," By inspecting the related events, it looks like the abnormal termination of the MySQL database caused the problem. We can go into more detail about each call that failed to connect to the database. Simply select the event that relates to the sudden increase in erroneous calls, then go in to analyze calls. Going into the actual trace for a request that resulted in an error will help us confirm that MySQL is really the source of the incident.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 3.1.1"),Object(b.b)("td",{parentName:"tr",align:"left"},"Under ",Object(b.b)("strong",{parentName:"td"},"Related Events"),", click the event that says ",Object(b.b)("strong",{parentName:"td"},"Sudden increase in the number of erroneous calls"),". Then, click ",Object(b.b)("strong",{parentName:"td"},"Analyze Calls"),". ",Object(b.b)("br",null),Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-observability/images/events.png",width:800}))))),Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"3.2")),Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"Examine the details")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"Now, we moved to the Analytics view. You can see how Instana UI allows for easy navigation between different views, keeping the time span and context. At the top, you can see the filter that was applied to all collected traces. All filtered requests are grouped by endpoint (in this case, it is the database CONNECT exposed by the MySQL server). ",Object(b.b)("br",null),Object(b.b)("br",null)," There is only one endpoint here, but if there were multiple, you’d see a list. Endpoints are automatically discovered and mapped by Instana. We can go into the details for each erroneous call to MySQL via this endpoint (CONNECT). "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 3.2.1"),Object(b.b)("td",{parentName:"tr",align:"left"},"Click the endpoint named ",Object(b.b)("strong",{parentName:"td"},"CONNECT"),". Then, click the first call (also named ",Object(b.b)("strong",{parentName:"td"},"CONNECT"),"). ",Object(b.b)("br",null),Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-observability/images/endpoint_connect.png",width:800}))))),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(b.b)("details",null,Object(b.b)("summary",null,"4 - Drilling down with end-to-end traces"),Object(b.b)("br",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"4.1")),Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"View the call via the visual dashboard")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"Clicking an individual call takes us to a view of the call in the context of the end-to-end trace. We can see where the request began and each call that was made along the way. ",Object(b.b)("br",null)," ",Object(b.b)("br",null)," Everything is presented in an easy-to-navigate visual dashboard, so we can drill into increasingly detailed information to pinpoint the problem, without using multiple tools or navigating back and forth to lots of dashboards.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 4.1.1"),Object(b.b)("td",{parentName:"tr",align:"left"},"Click the first call on the list. ",Object(b.b)("br",null),Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-observability/images/call_timeline.png",width:800}))))),Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"4.2")),Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"Understand the impact and source of the incident")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"In the call stack, we can click each span to see more information, including the complete stack trace. We can see the source, in this case the ‘discount’ service, and ","[scroll down]"," the destination, which in this case is CONNECT of MySQL. ",Object(b.b)("br",null)," ",Object(b.b)("br",null)," It’s useful to have this context because we can easily see how the calls go from one service to another, just by clicking them. We can also see how the error (red triangle) propagated up the call stack, in this case beginning with the MySQL database. ",Object(b.b)("br",null)," ",Object(b.b)("br",null)," So we can confirm that the root cause of the incident that affected the ‘discount’ service was with the MySQL database. The abnormal termination of the database caused a connection error, which then flowed back through the application. ",Object(b.b)("br",null)," ",Object(b.b)("br",null)," When we bring MySQL back online, it will fix the problem.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 4.2.1"),Object(b.b)("td",{parentName:"tr",align:"left"},"Scroll down to the section labeled ",Object(b.b)("strong",{parentName:"td"},"Calls"),". ",Object(b.b)("br",null),Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-observability/images/calls.png",width:800}))))),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(b.b)("details",null,Object(b.b)("summary",null,"5 - Confirming the incident resolution was successful"),Object(b.b)("br",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"5.1")),Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"Observe that metrics for the robot shop have returned to normal")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"Now that MySQL is working again, we can go back and confirm that the problems with the robot shop have been repaired. ",Object(b.b)("br",null),Object(b.b)("br",null)," You should see that the call volume has increased, the number of erroneous calls decreased, and latency also decreased. ",Object(b.b)("br",null),Object(b.b)("br",null),"If you’re giving the demo in real time, the incident should have reset itself by the time you’re done demo’ing. If not, this part can be skipped. ",Object(b.b)("br",null),Object(b.b)("br",null)," If you set the timeframe at the beginning of the demo, you can set it again to begin at 0:30 minutes past the hour and end at 0:45 minutes past the hour.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")," "," "," 5.1.1"),Object(b.b)("td",{parentName:"tr",align:"left"},"Navigate to ",Object(b.b)("strong",{parentName:"td"},"Applications")," in the sidebar menu, choose ",Object(b.b)("strong",{parentName:"td"},"Robot Shop"),", and click the ",Object(b.b)("strong",{parentName:"td"},"Summary")," tab. "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ",Object(b.b)("br",null),Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-observability/images/robot_shop_summary_end.png",width:800}))))),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(b.b)("details",null,Object(b.b)("summary",null,"Summary"),Object(b.b)("br",null),Object(b.b)("p",null,"Now, we can see that the metrics for the robot shop have returned to normal: the call volume has increased again, the erroneous call rate has decreased, and latency has decreased."),Object(b.b)("br",null),Object(b.b)("p",null,"We’ve fixed the problem with the robot shop and restored normal service!"),Object(b.b)("br",null),Object(b.b)("p",null,"Hopefully, you’ve seen that Instana can help make the process of identifying problems and finding the root cause of those problems very frictionless. Since Instana automates so many of the manual and labor-intensive aspects of the process, you can focus on getting other work done and not worry about instrumenting observability or constantly monitoring for problems. And when problems do arise, all the trace data is there at your fingertips to dig into."),Object(b.b)("br",null),Object(b.b)("p",null,"Thank you for attending today’s presentation."),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",{parentName:"strong",href:"#top"},"Go to top")))))}p.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-100-watson-aiops-observability-demo-script-mdx-0177b08522f7b491b7ff.js.map