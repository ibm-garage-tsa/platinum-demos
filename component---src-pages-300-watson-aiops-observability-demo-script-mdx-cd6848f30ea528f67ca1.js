(window.webpackJsonp=window.webpackJsonp||[]).push([[72,37,40,48],{"013z":function(t,e,a){"use strict";var n=a("q1tI"),r=a.n(n),b=a("NmYn"),o=a.n(b),i=a("Wbzz"),l=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),d=a.n(s),m=a("QH2O"),p=a.n(m),h=a("qKvR"),g=function(t){var e,a=t.title,n=t.theme,r=t.tabs,b=void 0===r?[]:r;return Object(h.b)("div",{className:d()(p.a.pageHeader,(e={},e[p.a.withTabs]=b.length,e[p.a.darkMode]="dark"===n,e))},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12"},Object(h.b)("h1",{id:"page-title",className:p.a.text},a)))))},u=a("BAC9"),j=function(t){var e=t.relativePagePath,a=t.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,b=r.baseUrl,o=r.subDirectory,l=b+"/edit/"+r.branch+o+"/src/pages"+e;return b?Object(h.b)("div",{className:"bx--row "+u.row},Object(h.b)("div",{className:"bx--col"},Object(h.b)("a",{className:u.link,href:l},"Edit this page on GitHub"))):null},O=a("FCXl"),A=a("dI71"),N=a("I8xM"),f=function(t){function e(){return t.apply(this,arguments)||this}return Object(A.a)(e,t),e.prototype.render=function(){var t=this.props,e=t.title,a=t.tabs,n=t.slug,r=n.split("/").filter(Boolean).slice(-1)[0],b=a.map((function(t){var e,a=o()(t,{lower:!0,strict:!0}),b=a===r,l=new RegExp(r+"/?(#.*)?$"),c=n.replace(l,a);return Object(h.b)("li",{key:t,className:d()((e={},e[N.selectedItem]=b,e),N.listItem)},Object(h.b)(i.Link,{className:N.link,to:""+c},t))}));return Object(h.b)("div",{className:N.tabsContainer},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(h.b)("nav",{"aria-label":e},Object(h.b)("ul",{className:N.list},b))))))},e}(r.a.Component),y=a("MjG9"),w=a("CzIb"),v=a("Asxa"),x=a("OIbQ"),k=a.n(x),I=function(t){var e=t.date,a=new Date(e);return e?Object(h.b)(v.c,{className:k.a.row},Object(h.b)(v.a,null,Object(h.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};e.a=function(t){var e=t.pageContext,a=t.children,n=t.location,r=t.Title,b=e.frontmatter,s=void 0===b?{}:b,d=e.relativePagePath,m=e.titleType,p=s.tabs,u=s.title,A=s.theme,N=s.description,v=s.keywords,x=s.date,k=Object(w.a)().interiorTheme,B=Object(i.useStaticQuery)("2456312558").site.pathPrefix,T=B?n.pathname.replace(B,""):n.pathname,E=p?T.split("/").filter(Boolean).slice(-1)[0]||o()(p[0],{lower:!0}):"",Q=A||k;return Object(h.b)(c.a,{tabs:p,homepage:!1,theme:Q,pageTitle:u,pageDescription:N,pageKeywords:v,titleType:m},Object(h.b)(g,{title:r?Object(h.b)(r,null):u,label:"label",tabs:p,theme:Q}),p&&Object(h.b)(f,{title:u,slug:T,tabs:p,currentTab:E}),Object(h.b)(y.a,{padded:!0},a,Object(h.b)(j,{relativePagePath:d}),Object(h.b)(I,{date:x})),Object(h.b)(O.a,{pageContext:e,location:n,slug:T,tabs:p,currentTab:E}),Object(h.b)(l.a,null))}},BAC9:function(t,e,a){t.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(t,e,a){t.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(t,e,a){t.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(t,e,a){t.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},yiQE:function(t,e,a){"use strict";a.r(e),a.d(e,"Title",(function(){return c})),a.d(e,"_frontmatter",(function(){return s})),a.d(e,"default",(function(){return h}));var n,r=a("wx14"),b=a("zLVn"),o=(a("q1tI"),a("7ljp")),i=a("013z"),l=(a("qKvR"),["components"]),c=function(){return Object(o.b)("span",null,"Observability ",Object(o.b)("br",null)," 300-level live demo")},s={},d=(n="InlineNotification",function(t){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}),m={Title:c,_frontmatter:s},p=i.a;function h(t){var e=t.components,a=Object(b.a)(t,l);return Object(o.b)(p,Object(r.a)({},m,a,{components:e,mdxType:"MDXLayout"}),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"17.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAADABQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABkrEuFT//xAAYEAACAwAAAAAAAAAAAAAAAAABAgARM//aAAgBAQABBQKJq4F//8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQMBAT8BV//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABgQAAIDAAAAAAAAAAAAAAAAAAAQEWLB/9oACAEBAAY/AibYv//EABkQAAIDAQAAAAAAAAAAAAAAAAABITFBcf/aAAgBAQABPyFXwmzXEZOH/9oADAMBAAIAAwAAABCHz//EABYRAQEBAAAAAAAAAAAAAAAAAAABMf/aAAgBAwEBPxCNP//EABYRAQEBAAAAAAAAAAAAAAAAAAABMf/aAAgBAgEBPxCJj//EABsQAAIDAAMAAAAAAAAAAAAAAAEhABFBMWFx/9oACAEBAAE/EBBbx04jAbrkZiUi8Mn/2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/platinum-demos/static/52f1f9156c1f9d499404ca06f36dddf7/2e753/AIOps_Observability_300_Script.jpg",srcSet:["/platinum-demos/static/52f1f9156c1f9d499404ca06f36dddf7/69549/AIOps_Observability_300_Script.jpg 288w","/platinum-demos/static/52f1f9156c1f9d499404ca06f36dddf7/473e3/AIOps_Observability_300_Script.jpg 576w","/platinum-demos/static/52f1f9156c1f9d499404ca06f36dddf7/2e753/AIOps_Observability_300_Script.jpg 1152w","/platinum-demos/static/52f1f9156c1f9d499404ca06f36dddf7/74f4b/AIOps_Observability_300_Script.jpg 1728w","/platinum-demos/static/52f1f9156c1f9d499404ca06f36dddf7/cbe2c/AIOps_Observability_300_Script.jpg 2000w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(o.b)("span",{id:"top"}),Object(o.b)("details",null,Object(o.b)("summary",null,"Introduction"),Object(o.b)("br",null),Object(o.b)("p",null,"In this demo, I’ll show how IBM Instana helps quickly identify, debug, and resolve an incident in a microservices-based application. Our application is called Stan’s Robot Shop, and it uses various technologies such as Java, Python, and MySQL to sell robots online."),Object(o.b)("br",null),Object(o.b)("p",null,"Let’s get started!"),Object(o.b)("br",null),Object(o.b)("p",null,"(Demo intro slides ",Object(o.b)("a",{href:"https://ibm.box.com/s/hdarww1v4mlgf8r1abxrt3a6zps8h92m",target:"_blank",rel:"noreferrer"},"here"),")"),Object(o.b)("br",null),Object(o.b)("p",null,"(Printer-ready PDF of demo script ",Object(o.b)("a",{href:"https://ibm.box.com/s/ovlk0ek2vi4w75ca4tdomb3cprsm9w59",target:"_blank",rel:"noreferrer"},"here"),")"),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("details",null,Object(o.b)("summary",null,"1 - Assessing RobotShop's dependencies, events, and alerts using Instana"),Object(o.b)("br",null),Object(o.b)(d,{mdxType:"InlineNotification"},"Before proceeding, ensure you have Instana open, as per instructions in the ",Object(o.b)("strong",null,"Demo preparation"),". "),Object(o.b)("br",null),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"1.1")),Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"Navigate to RobotShop’s dependencies ")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"We’re going to use Instana to view all the dependencies within the RobotShop application. Instana automatically discovers the relationships between the services and correlates them into a dynamic graph.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 1.1.1"),Object(o.b)("td",{parentName:"tr",align:"left"},"From the sidebar menu, click the ",Object(o.b)("strong",{parentName:"td"},"Applications")," icon (1) and choose ",Object(o.b)("strong",{parentName:"td"},"RobotShop")," (2). ",Object(o.b)("br",null),Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-observability/images/applications-robotshop.png",width:800}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 1.1.2"),Object(o.b)("td",{parentName:"tr",align:"left"},"Click the ",Object(o.b)("strong",{parentName:"td"},"Dependencies")," tab. ",Object(o.b)("br",null),Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-observability/images/dependencies.png",width:800}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"We can see how requests are moving through the application in real time. Instana is able to do this because it tracks every request that flows through the application.",Object(o.b)("br",null),Object(o.b)("br",null),"We can tell there are some problems with the application because several services are highlighted in yellow and red.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 1.1.3"),Object(o.b)("td",{parentName:"tr",align:"left"},"Hover the cursor over a few of the icons to show info on what technology they are built on. For example, we can see how the catalogue-demo is built on HTTP, Java Virtual Machine (JVM), and Spring Boot, while the catalogue database is built on MongoDB. ",Object(o.b)("br",null),Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-observability/images/hover-icons.png",width:800}))))),Object(o.b)("br",null),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"1.2")),Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"Automatically assess events and alerts")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"Since you wouldn’t normally be looking at the dashboard when something like this happens, let’s see the SRE/IT operator’s point of view when an incident occurs. ",Object(o.b)("br",null),Object(o.b)("br",null),"We’ve just gotten an alert from Instana that there has been a sudden increase in erroneous calls on our ‘discount’ service, which is part of the robot shop application. ",Object(o.b)("br",null),Object(o.b)("br",null),"Although I don’t have it connected right now, the alert would show up via one of the configurable alert channels, like PagerDuty, Microsoft Teams, Slack, and many others ",Object(o.b)("a",{href:"https://www.instana.com/docs/events_alerts/alert-channels",target:"_blank",rel:"noreferrer"},"(full list)"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 1.2.1"),Object(o.b)("td",{parentName:"tr",align:"left"},"Click the ",Object(o.b)("strong",{parentName:"td"},"Events")," icon (triangle) on the sidebar menu. ",Object(o.b)("br",null),Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-observability/images/sidebar_menu.png",width:800}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"It’s important to note here that you’re not getting alerts for just anything. Instana automatically groups related events and issues into incidents. It determines what events and/or issues are related using the dynamic dependency graph that we just looked at. ",Object(o.b)("br",null),Object(o.b)("br",null),"Instana also continuously assesses the groups of events and issues to determine which ones are impacting end users or posing an imminent risk of impacting end users. Those are the ones that Instana will alert on, so as a SRE/IT operator, you will not be interrupted constantly for things that are not very important. ",Object(o.b)("br",null),Object(o.b)("br",null),"Let’s go into the details for this incident.")))),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("details",null,Object(o.b)("summary",null,"2 - Inspecting auto-correlated incident details"),Object(o.b)("br",null),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"2.1")),Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"Gather information from the incident detail page")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"Instana recognized that the sudden increase of erroneous calls was something important to alert on, so we did not have to do any configuration or set thresholds in order to get this alert. "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ",Object(o.b)("br",null),Object(o.b)("br",null),"Let’s click the incident on the ‘discount’ service for more details. "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 2.1.1"),Object(o.b)("td",{parentName:"tr",align:"left"},"Click the incident called ",Object(o.b)("strong",{parentName:"td"},"Sudden increase in the number of erroneous calls")," on the ",Object(o.b)("strong",{parentName:"td"},"discount")," service. "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ",Object(o.b)("br",null),Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-observability/images/event_page.png",width:800}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"We  can now see a timeline of the incident, the event that triggered Instana to create the incident, and all of the related events. "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 2.1.2"),Object(o.b)("td",{parentName:"tr",align:"left"},"Hover the cursor over to show ",Object(o.b)("strong",{parentName:"td"},"Incident Timeline"),", ",Object(o.b)("strong",{parentName:"td"},"Triggering Event"),", and ",Object(o.b)("strong",{parentName:"td"},"Related Events"),". "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ",Object(o.b)("br",null),Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-observability/images/incident_details_screen.png",width:800}))))),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("details",null,Object(o.b)("summary",null,"3 - Debugging the incident by inspecting calls"),Object(o.b)("br",null),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"3.1")),Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"Understand the incident")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"Let’s take a closer look. ",Object(o.b)("br",null),Object(o.b)("br",null)," By inspecting the related events, it looks like the abnormal termination of the MySQL database caused the problem. We can go into more detail about each call that failed to connect to the database. Simply select the event that relates to the sudden increase in erroneous calls, then go in to analyze calls. Going into the actual trace for a request that resulted in an error will help us confirm that MySQL is really the source of the incident.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 3.1.1"),Object(o.b)("td",{parentName:"tr",align:"left"},"Under ",Object(o.b)("strong",{parentName:"td"},"Related Events"),", click the event that says ",Object(o.b)("strong",{parentName:"td"},"Sudden increase in the number of erroneous calls")," (1). Then, click ",Object(o.b)("strong",{parentName:"td"},"Analyze Calls")," (2). ",Object(o.b)("br",null),Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-observability/images/events.png",width:800}))))),Object(o.b)("br",null),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"3.2")),Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"Examine the details")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"All the calls are grouped by endpoint. There is only one endpoint showing, but if there were more you’d see a list here. Endpoints are automatically discovered and mapped by Instana. We can go into the details for each erroneous call to MySQL via this endpoint (CONNECT).")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 3.2.1"),Object(o.b)("td",{parentName:"tr",align:"left"},"Click the endpoint named ",Object(o.b)("strong",{parentName:"td"},"CONNECT")," (1). Then, click the first call that is also named ",Object(o.b)("strong",{parentName:"td"},"CONNECT")," (2). ",Object(o.b)("br",null),Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-observability/images/endpoint_connect.png",width:800}))))),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("details",null,Object(o.b)("summary",null,"4 - Drilling down with end-to-end traces"),Object(o.b)("br",null),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"4.1")),Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"View the call via the visual dashboard")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"Now that we’ve clicked on an individual call, in this case the first call in the list, we can view the call in the context of the end-to-end trace.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 4.1.1"),Object(o.b)("td",{parentName:"tr",align:"left"},"Highlight the middle dashboard area showing elements of the first call on the list. You will need to scroll down to the timeline view, and then change focus to the right column. ",Object(o.b)("br",null),Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-observability/images/call_timeline.png",width:800}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"We can see where the request began and each call that was made along the way. The timeline view gives a quick overview of the time spent on each span, as well as key performance indicators, such as the number of erroneous calls in this trace, the number of warning logs, and total latency.",Object(o.b)("br",null),Object(o.b)("br",null),"Everything is presented in an easy-to-navigate visual dashboard, so we can drill into increasingly detailed information to pinpoint the problem, without using multiple tools or navigating back and forth to lots of dashboards. ",Object(o.b)("br",null),Object(o.b)("br",null),"In the call stack ","[move to right column]",", we can click each span to see more information, including the complete stack trace. We can see the source, in this case the ‘discount’ service, and ","[scroll down]"," the destination, which in this case is CONNECT of MySQL. ",Object(o.b)("br",null)," ",Object(o.b)("br",null)," It’s useful to have this context because we can easily see how the calls go from one service to another, just by clicking them. We can also see how the error (red triangle) propagated up the call stack, in this case beginning with the MySQL database.")))),Object(o.b)("br",null),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"4.2")),Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"Understand the impact and source of the incident")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"Let’s identify the root cause of the incident affecting the ‘discount’ service.  "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 4.2.1"),Object(o.b)("td",{parentName:"tr",align:"left"},"In the middle area, scroll down to the section labeled ",Object(o.b)("strong",{parentName:"td"},"Calls")," until you reach the MySQL database row at bottom. ",Object(o.b)("br",null),Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-observability/images/calls.png",width:800}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"We’ve confirmed that the root cause of the incident that affected the ‘discount’ service was with the MySQL database. We can see the abnormal termination of the database caused a connection error, which then flowed back through the application. "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ")))),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("details",null,Object(o.b)("summary",null,"5 - Confirming the incident resolution was successful"),Object(o.b)("br",null),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"5.1")),Object(o.b)("th",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"th"},"Observe that metrics for the robot shop have returned to normal")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"When we bring MySQL back online, it will fix the problem. For the sake of this demonstration, we will assume it is brought back online, rather than depicting it. ",Object(o.b)("br",null),Object(o.b)("br",null),"Now that MySQL is working again, we can go back and confirm that the problems with the robot shop have been repaired.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 5.1.1"),Object(o.b)("td",{parentName:"tr",align:"left"},"Navigate to ",Object(o.b)("strong",{parentName:"td"},"Applications")," in the sidebar menu, and choose ",Object(o.b)("strong",{parentName:"td"},"Robot Shop"),". If you are not already on the ",Object(o.b)("strong",{parentName:"td"},"Summary")," tab, click the tab.",Object(o.b)("br",null),Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-observability/images/robot_shop_summary_end.png",width:800}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Narration")),Object(o.b)("td",{parentName:"tr",align:"left"},"You should see that the call volume has increased, the number of erroneous calls decreased, and latency also decreased. ",Object(o.b)("br",null),Object(o.b)("br",null),"We’ve fixed the problem with the robot shop and restored normal service!")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Action")," "," "," 5.1.2"),Object(o.b)("td",{parentName:"tr",align:"left"},"If you’re giving the demo in real time, the incident should have reset itself by the time you’re done demo’ing. ",Object(o.b)("br",null),Object(o.b)("br",null)," If you set the timeframe at the beginning of the demo, you can set it again to begin at 0:30 minutes past the hour and end at 0:45 minutes past the hour. Refer to the ",Object(o.b)("strong",{parentName:"td"},"1 - Environment setup (past incident)")," instructions in the ",Object(o.b)("strong",{parentName:"td"},"Prepare to give the demo")," section of the ",Object(o.b)("strong",{parentName:"td"},"Demo preparation")," if you need a refresher of how to do this.")))),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("details",null,Object(o.b)("summary",null,"Summary"),Object(o.b)("br",null),Object(o.b)("p",null,"Hopefully, you’ve seen that Instana can help make the process of identifying problems and finding the root cause of those problems very frictionless. Since Instana automates so many of the manual and labor-intensive aspects of the process, you can focus on getting other work done and not worry about instrumenting observability or constantly monitoring for problems. And when problems do arise, all the trace data is there at your fingertips to dig into."),Object(o.b)("br",null),Object(o.b)("p",null,"I’m happy to take any questions or go back to any part of the demo."),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-300-watson-aiops-observability-demo-script-mdx-cd6848f30ea528f67ca1.js.map