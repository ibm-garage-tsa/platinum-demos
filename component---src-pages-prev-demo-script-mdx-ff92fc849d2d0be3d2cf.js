(window.webpackJsonp=window.webpackJsonp||[]).push([[67,31,36,41],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),b=a.n(n),r=a("NmYn"),l=a.n(r),o=a("Wbzz"),c=a("Xrax"),i=a("k4MR"),s=a("TSYQ"),d=a.n(s),m=a("QH2O"),p=a.n(m),O=a("qKvR"),j=function(e){var t,a=e.title,n=e.theme,b=e.tabs,r=void 0===b?[]:b;return Object(O.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=r.length,t[p.a.darkMode]="dark"===n,t))},Object(O.b)("div",{className:"bx--grid"},Object(O.b)("div",{className:"bx--row"},Object(O.b)("div",{className:"bx--col-lg-12"},Object(O.b)("h1",{id:"page-title",className:p.a.text},a)))))},h=a("BAC9"),u=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,b=a||n,r=b.baseUrl,l=b.subDirectory,c=r+"/edit/"+b.branch+l+"/src/pages"+t;return r?Object(O.b)("div",{className:"bx--row "+h.row},Object(O.b)("div",{className:"bx--col"},Object(O.b)("a",{className:h.link,href:c},"Edit this page on GitHub"))):null},g=a("FCXl"),N=a("dI71"),f=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(N.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,b=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),r=a===b,c=new RegExp(b+"/?(#.*)?$"),i=n.replace(c,a);return Object(O.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=r,t),f.listItem)},Object(O.b)(o.Link,{className:f.link,to:""+i},e))}));return Object(O.b)("div",{className:f.tabsContainer},Object(O.b)("div",{className:"bx--grid"},Object(O.b)("div",{className:"bx--row"},Object(O.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(O.b)("nav",{"aria-label":t},Object(O.b)("ul",{className:f.list},r))))))},t}(b.a.Component),v=a("MjG9"),w=a("CzIb"),x=a("Asxa"),k=a("OIbQ"),T=a.n(k),_=function(e){var t=e.date,a=new Date(t);return t?Object(O.b)(x.c,{className:T.a.row},Object(O.b)(x.a,null,Object(O.b)("div",{className:T.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,b=e.Title,r=t.frontmatter,s=void 0===r?{}:r,d=t.relativePagePath,m=t.titleType,p=s.tabs,h=s.title,N=s.theme,f=s.description,x=s.keywords,k=s.date,T=Object(w.a)().interiorTheme,I=Object(o.useStaticQuery)("2456312558").site.pathPrefix,S=I?n.pathname.replace(I,""):n.pathname,C=p?S.split("/").filter(Boolean).slice(-1)[0]||l()(p[0],{lower:!0}):"",P=N||T;return Object(O.b)(i.a,{tabs:p,homepage:!1,theme:P,pageTitle:h,pageDescription:f,pageKeywords:x,titleType:m},Object(O.b)(j,{title:b?Object(O.b)(b,null):h,label:"label",tabs:p,theme:P}),p&&Object(O.b)(y,{title:h,slug:S,tabs:p,currentTab:C}),Object(O.b)(v.a,{padded:!0},a,Object(O.b)(u,{relativePagePath:d}),Object(O.b)(_,{date:k})),Object(O.b)(g.a,{pageContext:t,location:n,slug:S,tabs:p,currentTab:C}),Object(O.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},qf8h:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return c})),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return m}));var n=a("wx14"),b=a("zLVn"),r=(a("q1tI"),a("7ljp")),l=a("013z"),o=(a("qKvR"),["components"]),c=function(){return Object(r.b)("span",null,"Observability ",Object(r.b)("br",null)," 100-level live demo")},i={},s={Title:c,_frontmatter:i},d=l.a;function m(e){var t=e.components,a=Object(b.a)(e,o);return Object(r.b)(d,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("img",{src:"./images/AIOps_Observability_100_Script.jpg",alt:"banner"}),Object(r.b)("span",{id:"top"}),Object(r.b)("details",null,Object(r.b)("summary",null,"Introduction"),Object(r.b)("br",null),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"Details")),Object(r.b)("th",{parentName:"tr",align:"left"}))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Actions")),Object(r.b)("td",{parentName:"tr",align:"left"},"From sidebar menu, click on ",Object(r.b)("strong",{parentName:"td"},"Applications"),". Choose ",Object(r.b)("strong",{parentName:"td"},"Robot Shop.")," Click on the ",Object(r.b)("strong",{parentName:"td"},"Dependencies")," tab.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Narration")),Object(r.b)("td",{parentName:"tr",align:"left"},"In this demo, I’ll show how IBM Instana helps quickly identify, debug, and resolve an incident in a microservices-based application. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," To set the context, our application is called Stan’s Robot Shop, and it uses various technologies such as Java, Python, and MySQL. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," This is a visualization of all the dependencies within the robot shop application. Instana automatically discovered the relationships between the services and correlated them into this dynamic graph. We can see how requests are moving through the application in real-time. Instana is able to do this because it tracks every request that flows through the application. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," We can tell there are some problems with the application because several of the services are highlighted in yellow and red. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," But, you wouldn’t normally be looking at the dashboard when something like this happens, so let me walk you through what it looks like from the SRE/IT operator’s point of view when an incident occurs.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Screenshot")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"./images/robot_shop_starting_point_600.png",alt:"robot_shop_starting_point"}))))),Object(r.b)("br",null),Object(r.b)("p",null,"(Printer-ready PDF of demo script ",Object(r.b)("a",{href:"./100-Observability-Demo-Script.pdf",target:"_blank",rel:"noreferrer"},"here"),")"),Object(r.b)("br",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(r.b)("details",null,Object(r.b)("summary",null,"1 - Getting an incident alert"),Object(r.b)("br",null),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"1.1")),Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"Automatically assessing events and alerts")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Action")),Object(r.b)("td",{parentName:"tr",align:"left"},"Click on the ",Object(r.b)("strong",{parentName:"td"},"Events")," icon (triangle) in sidebar menu.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Narration")),Object(r.b)("td",{parentName:"tr",align:"left"},"We’ve just gotten an alert from Instana that there has been a sudden increase in erroneous calls on our ‘discount’ service, which is part of the robot shop application. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Although I don’t have it connected right now, the alert would show up via one of the configurable alert channels, like email, Microsoft Teams, Slack, and many others (",Object(r.b)("a",{href:"https://www.instana.com/docs/events_alerts/alert-channels",target:"_blank",rel:"noreferrer"},"full list"),"). ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," It’s important to note here that you’re not getting alerts for just anything. Behind the scenes, Instana is determining which events and issues are related, and it only sends alerts if a problem is likely to affect end users. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Let’s go into the details for this incident.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Screenshot")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"./images/sidebar_menu_600.png",alt:"sidebar_menu"}))))),Object(r.b)("br",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(r.b)("details",null,Object(r.b)("summary",null,"2 - Inspecting auto-correlated incident details"),Object(r.b)("br",null),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"2.1")),Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"Gather information from incident detail page")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Action")),Object(r.b)("td",{parentName:"tr",align:"left"},"Click on the incident called ",Object(r.b)("strong",{parentName:"td"},"Sudden increase in the number of erroneous calls")," on the ‘discount’ service.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Narration")),Object(r.b)("td",{parentName:"tr",align:"left"},"Instana recognized that the sudden increase in the number of erroneous calls was something important to alert on, so we did not have to do any configuration or set thresholds in order to get this alert. We get key information right away when we come into this incident detail page. There’s a timeline of the incident, the event that triggered Instana to create the incident, and all of the related events.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Screenshots")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"./images/event_page_600.png",alt:"event_page"})," ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Incident details screen: ",Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"./images/incident_details_screen_600.png",alt:"incident_details_screen"}))))),Object(r.b)("br",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(r.b)("details",null,Object(r.b)("summary",null,"3 - Debugging the incident by inspecting calls"),Object(r.b)("br",null),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"3.1")),Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"Understand the incident")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Actions")),Object(r.b)("td",{parentName:"tr",align:"left"},"Under ",Object(r.b)("strong",{parentName:"td"},"Related Events"),", click on the event that says ",Object(r.b)("strong",{parentName:"td"},"Sudden increase in the number of erroneous calls"),". Then, click ",Object(r.b)("strong",{parentName:"td"},"Analyze Calls"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Narration")),Object(r.b)("td",{parentName:"tr",align:"left"},"It looks like the abnormal termination of the MySQL database caused the problem. But we want to confirm this, and Instana makes it very easy to dig deeper into each individual call. "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Screenshot")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"./images/events_600.png",alt:"events"}))))),Object(r.b)("br",null),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"3.2")),Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"Examine details")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Actions")),Object(r.b)("td",{parentName:"tr",align:"left"},"Click on the endpoint named ",Object(r.b)("strong",{parentName:"td"},"CONNECT"),". Then, click on the first call (also named ",Object(r.b)("strong",{parentName:"td"},"CONNECT"),").")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Narration")),Object(r.b)("td",{parentName:"tr",align:"left"},"All the calls are grouped by endpoint. There is only one endpoint here, but if there were multiple, you’d see a list. Endpoints are automatically discovered and mapped by Instana. "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ",Object(r.b)("br",null),Object(r.b)("br",null)," We can go into the details for each erroneous call to MySQL via this endpoint (CONNECT).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Screenshot")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"./images/endpoint_connect_600.png",alt:"endpoint_connect"}))))),Object(r.b)("br",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(r.b)("details",null,Object(r.b)("summary",null,"4 - Drilling down with end-to-end traces"),Object(r.b)("br",null),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"4.1")),Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"View call via visual dashboard")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Action")),Object(r.b)("td",{parentName:"tr",align:"left"},"—")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Narration")),Object(r.b)("td",{parentName:"tr",align:"left"},"Clicking on an individual call takes us to a view of the call in context of the end-to-end trace. We can see where the request began and each call that was made along the way. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Everything is presented in an easy-to-navigate visual dashboard, so we can drill into increasingly detailed information to pinpoint the problem, without using multiple tools or navigating back and forth to lots of dashboards.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Screenshot")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"./images/call_timeline_600.png",alt:"call_timeline"}))))),Object(r.b)("br",null),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"4.2")),Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"Understand the impact and source of the incident")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Action")),Object(r.b)("td",{parentName:"tr",align:"left"},"Click on the span called ",Object(r.b)("strong",{parentName:"td"},"CONNECT")," and refer to the sidebar on the right side.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Narration")),Object(r.b)("td",{parentName:"tr",align:"left"},"Clicking on a span gives more details, including the source and destination as well as the full stack trace. In this case, we can see that the source is the ‘discount’ service, and ","[scroll down]"," the destination is CONNECT of MySQL. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," So we can confirm that the root cause of the incident that affected the ‘discount’ service was with the MySQL database. The abnormal termination of the database caused a connection error, which then flowed back through the application. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," When we bring MySQL back online, it will fix the problem.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Screenshot")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"./images/connect_600.png",alt:"connect"}))))),Object(r.b)("br",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(r.b)("details",null,Object(r.b)("summary",null,"5 - Confirming incident resolution was successful"),Object(r.b)("br",null),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"5.1")),Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"Metrics for the robot shop have returned to normal")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Actions")),Object(r.b)("td",{parentName:"tr",align:"left"},"Set the timeframe so it begins at 0:30 minutes past the hour and ends at 0:45 minutes past the hour. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Navigate to ",Object(r.b)("strong",{parentName:"td"},"Applications")," in the sidebar menu, choose ",Object(r.b)("strong",{parentName:"td"},"Robot Shop"),", and click on the ",Object(r.b)("strong",{parentName:"td"},"Summary")," tab. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Note: You should see that the call volume has increased, the number of erroneous calls decreased, and latency also decreased. "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Narration")),Object(r.b)("td",{parentName:"tr",align:"left"},"Now that MySQL is working again, we can go back and confirm that the problems with the robot shop have been repaired.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Screenshot")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"./images/robot_shop_summary_end_600.png",alt:"robot_shop_summary_end"}))))),Object(r.b)("br",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(r.b)("details",null,Object(r.b)("summary",null,"Summary"),Object(r.b)("br",null),Object(r.b)("p",null,"Now, we can see that the metrics for the robot shop have returned to normal: the call volume has increased again, the erroneous call rate has decreased, and latency has decreased."),Object(r.b)("br",null),Object(r.b)("p",null,"We’ve fixed the problem with the robot shop and restored normal service!"),Object(r.b)("br",null),Object(r.b)("p",null,"Hopefully, you’ve seen that Instana can help make the process of identifying problems and finding the root cause of those problems very frictionless. Since Instana automates so many of the manual and labor-intensive aspects of the process, you can focus on getting other work done and not worry about instrumenting observability or constantly monitoring for problems. And when problems do arise, all the trace data is there at your fingertips to dig into."),Object(r.b)("br",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(r.b)("hr",null))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-prev-demo-script-mdx-ff92fc849d2d0be3d2cf.js.map