(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"013z":function(t,e,a){"use strict";var n=a("q1tI"),b=a.n(n),r=a("NmYn"),l=a.n(r),o=a("Wbzz"),i=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),d=a.n(s),m=a("QH2O"),p=a.n(m),h=a("qKvR"),u=function(t){var e,a=t.title,n=t.theme,b=t.tabs,r=void 0===b?[]:b;return Object(h.b)("div",{className:d()(p.a.pageHeader,(e={},e[p.a.withTabs]=r.length,e[p.a.darkMode]="dark"===n,e))},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12"},Object(h.b)("h1",{id:"page-title",className:p.a.text},a)))))},g=a("BAC9"),j=function(t){var e=t.relativePagePath,a=t.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,b=a||n,r=b.baseUrl,l=b.subDirectory,i=r+"/edit/"+b.branch+l+"/src/pages"+e;return r?Object(h.b)("div",{className:"bx--row "+g.row},Object(h.b)("div",{className:"bx--col"},Object(h.b)("a",{className:g.link,href:i},"Edit this page on GitHub"))):null},O=a("FCXl"),A=a("dI71"),N=a("I8xM"),f=function(t){function e(){return t.apply(this,arguments)||this}return Object(A.a)(e,t),e.prototype.render=function(){var t=this.props,e=t.title,a=t.tabs,n=t.slug,b=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(t){var e,a=l()(t,{lower:!0,strict:!0}),r=a===b,i=new RegExp(b+"/?(#.*)?$"),c=n.replace(i,a);return Object(h.b)("li",{key:t,className:d()((e={},e[N.selectedItem]=r,e),N.listItem)},Object(h.b)(o.Link,{className:N.link,to:""+c},t))}));return Object(h.b)("div",{className:N.tabsContainer},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(h.b)("nav",{"aria-label":e},Object(h.b)("ul",{className:N.list},r))))))},e}(b.a.Component),y=a("MjG9"),w=a("CzIb"),v=a("Asxa"),x=a("OIbQ"),k=a.n(x),T=function(t){var e=t.date,a=new Date(e);return e?Object(h.b)(v.c,{className:k.a.row},Object(h.b)(v.a,null,Object(h.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};e.a=function(t){var e=t.pageContext,a=t.children,n=t.location,b=t.Title,r=e.frontmatter,s=void 0===r?{}:r,d=e.relativePagePath,m=e.titleType,p=s.tabs,g=s.title,A=s.theme,N=s.description,v=s.keywords,x=s.date,k=Object(w.a)().interiorTheme,B=Object(o.useStaticQuery)("2456312558").site.pathPrefix,I=B?n.pathname.replace(B,""):n.pathname,E=p?I.split("/").filter(Boolean).slice(-1)[0]||l()(p[0],{lower:!0}):"",Q=A||k;return Object(h.b)(c.a,{tabs:p,homepage:!1,theme:Q,pageTitle:g,pageDescription:N,pageKeywords:v,titleType:m},Object(h.b)(u,{title:b?Object(h.b)(b,null):g,label:"label",tabs:p,theme:Q}),p&&Object(h.b)(f,{title:g,slug:I,tabs:p,currentTab:E}),Object(h.b)(y.a,{padded:!0},a,Object(h.b)(j,{relativePagePath:d}),Object(h.b)(T,{date:x})),Object(h.b)(O.a,{pageContext:e,location:n,slug:I,tabs:p,currentTab:E}),Object(h.b)(i.a,null))}},BAC9:function(t,e,a){t.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(t,e,a){t.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(t,e,a){t.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},PTWi:function(t,e,a){"use strict";a.r(e),a.d(e,"Title",(function(){return i})),a.d(e,"_frontmatter",(function(){return c})),a.d(e,"default",(function(){return m}));var n=a("wx14"),b=a("zLVn"),r=(a("q1tI"),a("7ljp")),l=a("013z"),o=(a("qKvR"),["components"]),i=function(){return Object(r.b)("span",null,"Observability ",Object(r.b)("br",null)," 300-level live demo")},c={},s={Title:i,_frontmatter:c},d=l.a;function m(t){var e=t.components,a=Object(b.a)(t,o);return Object(r.b)(d,Object(n.a)({},s,a,{components:e,mdxType:"MDXLayout"}),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"17.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAADABQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABkrEuFT//xAAYEAACAwAAAAAAAAAAAAAAAAABAgARM//aAAgBAQABBQKJq4F//8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQMBAT8BV//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABgQAAIDAAAAAAAAAAAAAAAAAAAQEWLB/9oACAEBAAY/AibYv//EABkQAAIDAQAAAAAAAAAAAAAAAAABITFBcf/aAAgBAQABPyFXwmzXEZOH/9oADAMBAAIAAwAAABCHz//EABYRAQEBAAAAAAAAAAAAAAAAAAABMf/aAAgBAwEBPxCNP//EABYRAQEBAAAAAAAAAAAAAAAAAAABMf/aAAgBAgEBPxCJj//EABsQAAIDAAMAAAAAAAAAAAAAAAEhABFBMWFx/9oACAEBAAE/EBBbx04jAbrkZiUi8Mn/2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/platinum-demos/static/52f1f9156c1f9d499404ca06f36dddf7/2e753/AIOps_Observability_300_Script.jpg",srcSet:["/platinum-demos/static/52f1f9156c1f9d499404ca06f36dddf7/69549/AIOps_Observability_300_Script.jpg 288w","/platinum-demos/static/52f1f9156c1f9d499404ca06f36dddf7/473e3/AIOps_Observability_300_Script.jpg 576w","/platinum-demos/static/52f1f9156c1f9d499404ca06f36dddf7/2e753/AIOps_Observability_300_Script.jpg 1152w","/platinum-demos/static/52f1f9156c1f9d499404ca06f36dddf7/74f4b/AIOps_Observability_300_Script.jpg 1728w","/platinum-demos/static/52f1f9156c1f9d499404ca06f36dddf7/cbe2c/AIOps_Observability_300_Script.jpg 2000w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(r.b)("span",{id:"top"}),Object(r.b)("details",null,Object(r.b)("summary",null,"Introduction"),Object(r.b)("br",null),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"Starting point")),Object(r.b)("th",{parentName:"tr",align:"left"}," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Narration")),Object(r.b)("td",{parentName:"tr",align:"left"},"In this demo, I’ll show how IBM Instana helps quickly identify, debug, and resolve an incident in a microservices-based application. "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Action")," "," "," 0.1.1"),Object(r.b)("td",{parentName:"tr",align:"left"},"From the sidebar menu, click the ",Object(r.b)("strong",{parentName:"td"},"Applications")," icon and choose ",Object(r.b)("strong",{parentName:"td"},"RobotShop"),". ",Object(r.b)("br",null),Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-observability/images/applications-robotshop.png",width:800}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Action")," "," "," 0.1.2"),Object(r.b)("td",{parentName:"tr",align:"left"},"Click the ",Object(r.b)("strong",{parentName:"td"},"Dependencies")," tab. ",Object(r.b)("br",null),Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-observability/images/dependencies.png",width:800}))))),Object(r.b)("br",null),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"Context of demo:")),Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"Robot shop application")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Narration")),Object(r.b)("td",{parentName:"tr",align:"left"},"To set the context, our application is called Stan’s Robot Shop, and it uses various technologies such as Java, Python, and MySQL.",Object(r.b)("br",null),Object(r.b)("br",null),"This is a visualization of all the dependencies within the robot shop application. Instana automatically discovered the relationships between the services and correlated them into this dynamic graph. We can see how requests are moving through the application in real time. Instana is able to do this because it tracks every request that flows through the application.",Object(r.b)("br",null),Object(r.b)("br",null),"We can tell there are some problems with the application because several of the services are highlighted in yellow and red.",Object(r.b)("br",null),Object(r.b)("br",null),"But, you wouldn’t normally be looking at the dashboard when something like this happens, so let me walk you through what it looks like from the SRE/IT operator’s point of view when an incident occurs.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Action")," "," "," 0.2.1"),Object(r.b)("td",{parentName:"tr",align:"left"},"Hover over a few of the icons to show info on what technology they are built on. ",Object(r.b)("br",null),Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-observability/images/hover-icons.png",width:800}))))),Object(r.b)("br",null),Object(r.b)("p",null,"(Printer-ready PDF of demo script ",Object(r.b)("a",{href:"/platinum-demos/16597b223e9311d987431bf03d984f96/300-Observability-Demo-Script.pdf",target:"_blank",rel:"noreferrer"},"here"),")"),Object(r.b)("br",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(r.b)("details",null,Object(r.b)("summary",null,"1 - Getting an incident alert"),Object(r.b)("br",null),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"1.1")),Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"Automatically assessing events and alerts")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Narration")),Object(r.b)("td",{parentName:"tr",align:"left"},"We’ve just gotten an alert from Instana that there has been a sudden increase in erroneous calls on our ‘discount’ service, which is part of the robot shop application. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Although I don’t have it connected right now, the alert would show up via one of the configurable alert channels, like email, Microsoft Teams, Slack, and many others (",Object(r.b)("a",{href:"https://www.instana.com/docs/events_alerts/alert-channels",target:"_blank",rel:"noreferrer"},"full list"),"). ",Object(r.b)("br",null),Object(r.b)("br",null),"It’s important to note here that you’re not getting alerts for just anything. Instana automatically groups related events and issues into incidents. It determines that events and/or issues are related using the dynamic dependency graph that we just looked at. And Instana continuously assesses the groups of events and issues to determine which ones are impacting end users or posing an imminent risk of impacting end users. Those are the ones that Instana will alert on, so as a SRE/IT operator, you will not be interrupted constantly for things that are not very important. ",Object(r.b)("br",null),Object(r.b)("br",null)," Let’s go into the details for this incident.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Action")," "," "," 1.1.1"),Object(r.b)("td",{parentName:"tr",align:"left"},"Click the ",Object(r.b)("strong",{parentName:"td"},"Events")," icon (triangle) in sidebar menu. ",Object(r.b)("br",null),Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-observability/images/sidebar_menu.png",width:800}))))),Object(r.b)("br",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(r.b)("details",null,Object(r.b)("summary",null,"2 - Inspecting auto-correlated incident details"),Object(r.b)("br",null),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"2.1")),Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"Gather information from incident detail page")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Narration")),Object(r.b)("td",{parentName:"tr",align:"left"},"Instana recognized that the sudden increase in the number of erroneous calls was something important to alert on, so we did not have to do any configuration or set thresholds in order to get this alert. We get key information right away when we come into this incident detail page. There’s a timeline of the incident, the event that triggered Instana to create the incident, and all of the related events.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Action")," "," "," 2.1.1"),Object(r.b)("td",{parentName:"tr",align:"left"},"Click the incident called ",Object(r.b)("strong",{parentName:"td"},"Sudden increase in the number of erroneous calls")," on the ‘discount’ service. ",Object(r.b)("br",null),Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-observability/images/event_page.png",width:800}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Action")," "," "," 2.1.2"),Object(r.b)("td",{parentName:"tr",align:"left"},"You will see the ",Object(r.b)("strong",{parentName:"td"},"Incident Timeline"),", ",Object(r.b)("strong",{parentName:"td"},"Triggering Event"),", and ",Object(r.b)("strong",{parentName:"td"},"Related Events"),". ",Object(r.b)("br",null),Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-observability/images/incident_details_screen.png",width:800}))))),Object(r.b)("br",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(r.b)("details",null,Object(r.b)("summary",null,"3 - Debugging the incident by inspecting calls"),Object(r.b)("br",null),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"3.1")),Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"}," Understand the incident")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Narration")),Object(r.b)("td",{parentName:"tr",align:"left"},"By inspecting the related events, it looks like the abnormal termination of the MySQL database caused the problem. We can go into more detail about each call that failed to connect to the database, by choosing the event that relates to the sudden increase in erroneous calls, and going to analyze calls. Going into the actual trace for a request that resulted in an error will help us confirm that MySQL is really the source of the incident.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Action")," "," "," 3.1.1"),Object(r.b)("td",{parentName:"tr",align:"left"},"Under ",Object(r.b)("strong",{parentName:"td"},"Related Events"),", click the event that says ",Object(r.b)("strong",{parentName:"td"},"Sudden increase in the number of erroneous calls"),".",Object(r.b)("br",null),Object(r.b)("br",null),"Then, click ",Object(r.b)("strong",{parentName:"td"},"Analyze Calls"),". ",Object(r.b)("br",null),Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-observability/images/events.png",width:800}))))),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"3.2")),Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"Examine details")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Narration")),Object(r.b)("td",{parentName:"tr",align:"left"},"All the calls are grouped by endpoint. There is only one endpoint here, but if there were multiple, you’d see a list here. Endpoints are automatically discovered and mapped by Instana. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," We can go into the details for each erroneous call to MySQL via this endpoint (CONNECT).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Action")," "," "," 3.2.1"),Object(r.b)("td",{parentName:"tr",align:"left"},"Click the endpoint named ",Object(r.b)("strong",{parentName:"td"},"CONNECT"),".",Object(r.b)("br",null),Object(r.b)("br",null)," Then, click the first call (also named ",Object(r.b)("strong",{parentName:"td"},"CONNECT"),"). ",Object(r.b)("br",null),Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-observability/images/endpoint_connect.png",width:800}))))),Object(r.b)("br",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(r.b)("details",null,Object(r.b)("summary",null,"4 - Drilling down with end-to-end traces"),Object(r.b)("br",null),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"4.1")),Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"View call via visual dashboard")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Narration")),Object(r.b)("td",{parentName:"tr",align:"left"},"Let’s take a look at the first call in the list. Clicking on an individual call takes us to a view of the call in context of the end-to-end trace. We can see where the request began and each call that was made along the way. The timeline view gives a quick overview of the time spent on each span, as well as key performance indicators, such as the number of erroneous calls in this trace, the number of warning logs, and total latency.",Object(r.b)("br",null),Object(r.b)("br",null),"Everything is presented in an easy-to-navigate visual dashboard, so we can drill into increasingly detailed information to pinpoint the problem, without using multiple tools or navigating back and forth to lots of dashboards.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Action")," "," "," 4.1.1"),Object(r.b)("td",{parentName:"tr",align:"left"},"Click the first call on the list. ",Object(r.b)("br",null),Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-observability/images/call_timeline.png",width:800}))))),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"4.2")),Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"Understanding the impact and source of the incident")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Narration")),Object(r.b)("td",{parentName:"tr",align:"left"},"In the call stack, we can click each span to see more information, including the complete stack trace. We can see the source, in this case the ‘discount’ service, and ","[scroll down]"," the destination, which in this case is CONNECT of MySQL. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," It’s useful to have this context because we can easily see how the calls go from one service to another, just by clicking on them. We can also see how the error (red triangle) propagated up the call stack, in this case beginning with the MySQL database. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," So we can confirm that the root cause of the incident that affected the ‘discount’ service was with the MySQL database. The abnormal termination of the database caused a connection error, which then flowed back through the application. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," When we bring MySQL back online, it will fix the problem.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Action")," "," "," 4.2.1"),Object(r.b)("td",{parentName:"tr",align:"left"},"Scroll down to the section labeled ",Object(r.b)("strong",{parentName:"td"},"Calls"),". ",Object(r.b)("br",null),Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-observability/images/calls.png",width:800}))))),Object(r.b)("br",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(r.b)("details",null,Object(r.b)("summary",null,"5 - Confirming incident resolution was successful"),Object(r.b)("br",null),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"5.1")),Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"Metrics for the robot shop have returned to normal")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Narration")),Object(r.b)("td",{parentName:"tr",align:"left"},"Now that MySQL is working again, we can go back and confirm that the problems with the robot shop have been repaired. ",Object(r.b)("br",null),Object(r.b)("br",null)," You should see that the call volume has increased, the number of erroneous calls decreased, and latency also decreased. ",Object(r.b)("br",null),Object(r.b)("br",null),"If you’re giving the demo in real time, the incident should have reset itself by the time you’re done demo’ing. If not, this part can be skipped. ",Object(r.b)("br",null),Object(r.b)("br",null)," If you set the timeframe at the beginning of the demo, you can set it again to begin at 0:30 minutes past the hour and end at 0:45 minutes past the hour.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Action")," "," "," 5.1.1"),Object(r.b)("td",{parentName:"tr",align:"left"},"Navigate to ",Object(r.b)("strong",{parentName:"td"},"Applications")," in the sidebar menu, choose ",Object(r.b)("strong",{parentName:"td"},"Robot Shop"),", and click the ",Object(r.b)("strong",{parentName:"td"},"Summary")," tab. "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ",Object(r.b)("br",null),Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-observability/images/robot_shop_summary_end.png",width:800}))))),Object(r.b)("br",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(r.b)("details",null,Object(r.b)("summary",null,"Summary"),Object(r.b)("br",null),Object(r.b)("p",null,"Now, we can see that the metrics for the robot shop have returned to normal: the call volume has increased again, the erroneous call rate has decreased, and latency has decreased."),Object(r.b)("br",null),Object(r.b)("p",null,"The Dependencies tab is also showing that all the services are behaving normally."),Object(r.b)("br",null),Object(r.b)("p",null,"We’ve fixed the problem with the robot shop and restored normal service!"),Object(r.b)("br",null),Object(r.b)("p",null,"Hopefully, you’ve seen that Instana can help make the process of identifying problems and finding the root cause of those problems very frictionless. Since Instana automates so many of the manual and labor-intensive aspects of the process, you can focus on getting other work done and not worry about instrumenting observability or constantly monitoring for problems. And when problems do arise, all the trace data is there at your fingertips to dig into."),Object(r.b)("br",null),Object(r.b)("p",null,"I’m happy to take any questions or go back to any part of the demo."),Object(r.b)("br",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(r.b)("hr",null))}m.isMDXComponent=!0},QH2O:function(t,e,a){t.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-300-watson-aiops-observability-demo-script-updated-mdx-0ff50a881f9d51a0ac90.js.map