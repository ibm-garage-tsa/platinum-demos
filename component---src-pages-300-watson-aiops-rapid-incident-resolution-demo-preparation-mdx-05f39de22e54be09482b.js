(window.webpackJsonp=window.webpackJsonp||[]).push([[49,22,33,34,39],{"013z":function(e,t,n){"use strict";var o=n("q1tI"),a=n.n(o),r=n("NmYn"),b=n.n(r),l=n("Wbzz"),s=n("Xrax"),i=n("k4MR"),c=n("TSYQ"),u=n.n(c),m=n("QH2O"),d=n.n(m),p=n("qKvR"),h=function(e){var t,n=e.title,o=e.theme,a=e.tabs,r=void 0===a?[]:a;return Object(p.b)("div",{className:u()(d.a.pageHeader,(t={},t[d.a.withTabs]=r.length,t[d.a.darkMode]="dark"===o,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:d.a.text},n)))))},O=n("BAC9"),j=function(e){var t=e.relativePagePath,n=e.repository,o=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,a=n||o,r=a.baseUrl,b=a.subDirectory,s=r+"/edit/"+a.branch+b+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+O.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:O.link,href:s},"Edit this page on GitHub"))):null},g=n("FCXl"),f=n("dI71"),y=n("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,o=e.slug,a=o.split("/").filter(Boolean).slice(-1)[0],r=n.map((function(e){var t,n=b()(e,{lower:!0,strict:!0}),r=n===a,s=new RegExp(a+"/?(#.*)?$"),i=o.replace(s,n);return Object(p.b)("li",{key:e,className:u()((t={},t[y.selectedItem]=r,t),y.listItem)},Object(p.b)(l.Link,{className:y.link,to:""+i},e))}));return Object(p.b)("div",{className:y.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:y.list},r))))))},t}(a.a.Component),w=n("MjG9"),N=n("CzIb"),k=n("Asxa"),x=n("OIbQ"),T=n.n(x),I=function(e){var t=e.date,n=new Date(t);return t?Object(p.b)(k.c,{className:T.a.row},Object(p.b)(k.a,null,Object(p.b)("div",{className:T.a.text},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,n=e.children,o=e.location,a=e.Title,r=t.frontmatter,c=void 0===r?{}:r,u=t.relativePagePath,m=t.titleType,d=c.tabs,O=c.title,f=c.theme,y=c.description,k=c.keywords,x=c.date,T=Object(N.a)().interiorTheme,P=Object(l.useStaticQuery)("2456312558").site.pathPrefix,C=P?o.pathname.replace(P,""):o.pathname,E=d?C.split("/").filter(Boolean).slice(-1)[0]||b()(d[0],{lower:!0}):"",R=f||T;return Object(p.b)(i.a,{tabs:d,homepage:!1,theme:R,pageTitle:O,pageDescription:y,pageKeywords:k,titleType:m},Object(p.b)(h,{title:a?Object(p.b)(a,null):O,label:"label",tabs:d,theme:R}),d&&Object(p.b)(v,{title:O,slug:C,tabs:d,currentTab:E}),Object(p.b)(w.a,{padded:!0},n,Object(p.b)(j,{relativePagePath:u}),Object(p.b)(I,{date:x})),Object(p.b)(g.a,{pageContext:t,location:o,slug:C,tabs:d,currentTab:E}),Object(p.b)(s.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,n){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},yc3W:function(e,t,n){"use strict";n.r(t),n.d(t,"Title",(function(){return s})),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return m}));var o=n("wx14"),a=n("zLVn"),r=(n("q1tI"),n("7ljp")),b=n("013z"),l=(n("qKvR"),["components"]),s=function(){return Object(r.b)("span",null,"Rapid incident resolution ",Object(r.b)("br",null)," 300-level live demo")},i={},c={Title:s,_frontmatter:i},u=b.a;function m(e){var t=e.components,n=Object(a.a)(e,l);return Object(r.b)(u,Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("span",{id:"top"}),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"DEMO OVERVIEW"),Object(r.b)("th",{parentName:"tr",align:"left"}))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Scenario overview")),Object(r.b)("td",{parentName:"tr",align:"left"},"This demo shows how Cloud Pak for Watson AIOps helps SREs and IT Ops quickly identify, diagnose, and resolve incidents across mission-critical workloads.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Demo products")),Object(r.b)("td",{parentName:"tr",align:"left"},"Cloud Pak for Watson AIOps V3.1")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Demo capabilities")),Object(r.b)("td",{parentName:"tr",align:"left"},"Anomaly Detection, Intelligent Root Cause Analysis, AI-Driven Automated Remediation")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Demo guidance")),Object(r.b)("td",{parentName:"tr",align:"left"},"This demo script has multiple tasks, that each have multiple steps. In each step, you have the details about what you need to do (",Object(r.b)("strong",{parentName:"td"},"Actions"),"), what you can say while delivering this demo step (",Object(r.b)("strong",{parentName:"td"},"Narration"),"), and what diagrams and screenshots you will see (",Object(r.b)("strong",{parentName:"td"},"Screenshots"),"). ",Object(r.b)("br",null),Object(r.b)("br",null)," This demo script is a suggestion, and you are welcome to customize based on your sales opportunity. Most importantly, practice this demo in advance. If the demo seems easy for you to execute, the customer will focus on the content. If it seems difficult for you to execute, the customer will focus on your delivery.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"How to get support")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{href:"https://ibm.enterprise.slack.com/app_redirect?channel=techdemos-automation-support",target:"_blank",rel:"noreferrer"},"#Techdemos-Automation-Support")," Slack channel")))),Object(r.b)("br",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"PREPARE TO GIVE THE DEMO")),Object(r.b)("details",null,Object(r.b)("summary",null,"Several days before customer demo: complete one-time setup [time: 2-3 hrs]"),Object(r.b)("br",null),Object(r.b)("p",null,"Follow these steps:",Object(r.b)("br",null),Object(r.b)("br",null),"1. Register for access to ",Object(r.b)("a",{href:"https://cmc.coc-ibm.com/registration",target:"_blank",rel:"noreferrer"},"Center of Competency")," (CoC).",Object(r.b)("br",null),Object(r.b)("br",null),"2. Once you get an email confirming your access credentials, go to CoC’s ",Object(r.b)("a",{href:"https://cmc.coc-ibm.com/aiops",target:"_blank",rel:"noreferrer"},"Cloud Pak for Watson AIOps cluster page"),".",Object(r.b)("br",null),Object(r.b)("br",null),"3.\tYou will be using the ",Object(r.b)("strong",{parentName:"p"},"Sabine")," cluster. ",Object(r.b)("strong",{parentName:"p"},"IMPORTANT"),": Watson AIOps is NOT currently multi-tenant. Therefore, only ONE USER can use the environment at a time. Otherwise, you risk overwriting/undoing other users’ demos. YOU MUST RESERVE YOUR TIMESLOT! The reservations are NOT self-enforcing, meaning it’s up to everyone to adhere to only using the demo during the time you’ve reserved and ensuring you finish up prior to the next person’s time slot.",Object(r.b)("br",null),Object(r.b)("br",null),"4.\tMake sure you can access all components of the environment. To do so, you’ll reserve the cluster for self-enablement. You can also use this time to familiarize yourself with the navigation and flow of the demo. Follow the steps below to reserve your time slot:",Object(r.b)("br",null),Object(r.b)("br",null),"a. Go to the ",Object(r.b)("a",{href:"https://cmc.coc-ibm.com/calendar/sabine",target:"_blank",rel:"noreferrer"},"reservations calendar"),".",Object(r.b)("br",null),"b. Make sure your reservation will not interfere with other reservations. All geographies have access to the environment, so be mindful of other time zones. Choosing the weekly calendar view at the top right makes it easy to see the duration of reservations, or you can click on reservations to see details.",Object(r.b)("br",null),"c. As a best practice, try not to schedule self-enablement directly after a customer demo reservation. You don’t want to accidentally kick a colleague out of the demo environment if their presentation runs long.",Object(r.b)("br",null),"d. Reserve one or two hours, and choose self-enablement in the reservation pop-up. You don’t need any opportunity or revenue details to use the cluster for self-enablement.",Object(r.b)("br",null),Object(r.b)("br",null),"5. In the ",Object(r.b)("a",{href:"https://cmc.coc-ibm.com/cluster/sabine",target:"_blank",rel:"noreferrer"},"Sabine cluster details"),", go through the list of systems and test that you can access and log in to them with the provided credentials. Review the demo script to make sure you understand how each component interacts with others, when it gets used in the demo, and how to navigate between them. Refer to the demo script for detailed instructions.",Object(r.b)("br",null),Object(r.b)("br",null),"a. For logging into the IBM Automation Hub, use OpenShift as the authentication method.",Object(r.b)("br",null),"b. The Slack channel you will use is called #sabine-qotd-reactive."),Object(r.b)("br",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(r.b)("details",null,Object(r.b)("summary",null,"Several days before customer demo: reserve time for your demo [time: 10 mins]"),Object(r.b)("br",null),Object(r.b)("p",null,"Follow these steps:",Object(r.b)("br",null),Object(r.b)("br",null),"1. Go to the ",Object(r.b)("a",{href:"https://cmc.coc-ibm.com/calendar/sabine",target:"_blank",rel:"noreferrer"},"reservations calendar"),".",Object(r.b)("br",null),Object(r.b)("br",null),"2. Make sure your reservation will not interfere with other reservations. All geographies have access to the environment, so be mindful of other time zones. Choosing the weekly calendar view at the top right makes it easy to see duration of reservations, or you can click on reservations to see details, including who made the reservation.",Object(r.b)("br",null),Object(r.b)("br",null),"a. You may want to send a Slack/email to coordinate reservations, especially in the following cases: Someone has made a reservation for self-education, but you have a customer demo you’d like to give at the same time; You need to reserve the environment directly after another person’s time slot ends (your message letting them know the times, so they can ensure to finish up before your time slot begins).",Object(r.b)("br",null),Object(r.b)("br",null),"3. You will need a bit of time to set up prior to giving the demo (e.g., resetting the demo environment). Reserve the environment starting about 15-30 minutes before you actually want to start demo’ing.",Object(r.b)("br",null),Object(r.b)("br",null),"4. To reserve your time slot, click on the day you want, and fill in the details in the pop-up menu. Make sure to fill in opportunity number, revenue, etc."),Object(r.b)("br",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(r.b)("details",null,Object(r.b)("summary",null,"Day of customer demo (beginning of your reserved time slot): log in to demo systems and reset the demo [time: 15-20 mins]"),Object(r.b)("br",null),Object(r.b)("p",null,"Follow these steps:",Object(r.b)("br",null),Object(r.b)("br",null),"1. Open and log in to the systems listed in the ",Object(r.b)("a",{href:"https://cmc.coc-ibm.com/cluster/sabine",target:"_blank",rel:"noreferrer"},"Sabine cluster details"),". ",Object(r.b)("strong",{parentName:"p"},"Note"),": you will not need Grafana, OCP Console, or OCP/OKD Cluster for this demo.",Object(r.b)("br",null),Object(r.b)("br",null),"2. It may be helpful to put your browser tabs in the order you’ll use them in the demo:",Object(r.b)("br",null),Object(r.b)("br",null),"a. Instana",Object(r.b)("br",null),"b. Prometheus",Object(r.b)("br",null),"c. ELK",Object(r.b)("br",null),"d. Netcool",Object(r.b)("br",null),"e. Anomaly generator",Object(r.b)("br",null),"f. Slack",Object(r.b)("br",null),"g. Automation hub",Object(r.b)("br",null),Object(r.b)("br",null),"3. Reset the demo environment by going to Netcool -> Automation -> Runbooks, and click ",Object(r.b)("strong",{parentName:"p"},"Run")," on the ",Object(r.b)("strong",{parentName:"p"},"Reset Demo")," runbook. Click ",Object(r.b)("strong",{parentName:"p"},"Start Runbook"),". Click ",Object(r.b)("strong",{parentName:"p"},"Run")," on each automation step, and ensure it is successful. This process takes a minute or two to complete. Make sure you do it prior to getting in front of the customer.",Object(r.b)("br",null),Object(r.b)("br",null),"4. Check that the #sabine-qotd-reactive Slack channel is cleared (no story/incident showing).",Object(r.b)("br",null),Object(r.b)("br",null),"5.\tYou’re ready to begin your demo! Go to the ",Object(r.b)("a",{href:"https://ibm-garage-tsa.github.io/platinum-demos/300-watson-aiops-rapid-incident-resolution/demo-script/"},"demo script"),".",Object(r.b)("br",null),Object(r.b)("br",null),"6. When you’re done with your demo, run the ",Object(r.b)("strong",{parentName:"p"},"Reset Demo")," runbook again to reset it for the next person."),Object(r.b)("br",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"#top"},"Go to top")))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-300-watson-aiops-rapid-incident-resolution-demo-preparation-mdx-05f39de22e54be09482b.js.map