(window.webpackJsonp=window.webpackJsonp||[]).push([[51,22,35,36,41],{"013z":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("NmYn"),b=n.n(o),l=n("Wbzz"),s=n("Xrax"),c=n("k4MR"),i=n("TSYQ"),u=n.n(i),m=n("QH2O"),d=n.n(m),p=n("qKvR"),O=function(e){var t,n=e.title,r=e.theme,a=e.tabs,o=void 0===a?[]:a;return Object(p.b)("div",{className:u()(d.a.pageHeader,(t={},t[d.a.withTabs]=o.length,t[d.a.darkMode]="dark"===r,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:d.a.text},n)))))},h=n("BAC9"),j=function(e){var t=e.relativePagePath,n=e.repository,r=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,a=n||r,o=a.baseUrl,b=a.subDirectory,s=o+"/edit/"+a.branch+b+"/src/pages"+t;return o?Object(p.b)("div",{className:"bx--row "+h.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:h.link,href:s},"Edit this page on GitHub"))):null},g=n("FCXl"),f=n("dI71"),y=n("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,r=e.slug,a=r.split("/").filter(Boolean).slice(-1)[0],o=n.map((function(e){var t,n=b()(e,{lower:!0,strict:!0}),o=n===a,s=new RegExp(a+"/?(#.*)?$"),c=r.replace(s,n);return Object(p.b)("li",{key:e,className:u()((t={},t[y.selectedItem]=o,t),y.listItem)},Object(p.b)(l.Link,{className:y.link,to:""+c},e))}));return Object(p.b)("div",{className:y.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:y.list},o))))))},t}(a.a.Component),N=n("MjG9"),w=n("CzIb"),x=n("Asxa"),k=n("OIbQ"),T=n.n(k),I=function(e){var t=e.date,n=new Date(t);return t?Object(p.b)(x.c,{className:T.a.row},Object(p.b)(x.a,null,Object(p.b)("div",{className:T.a.text},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,n=e.children,r=e.location,a=e.Title,o=t.frontmatter,i=void 0===o?{}:o,u=t.relativePagePath,m=t.titleType,d=i.tabs,h=i.title,f=i.theme,y=i.description,x=i.keywords,k=i.date,T=Object(w.a)().interiorTheme,P=Object(l.useStaticQuery)("2456312558").site.pathPrefix,C=P?r.pathname.replace(P,""):r.pathname,R=d?C.split("/").filter(Boolean).slice(-1)[0]||b()(d[0],{lower:!0}):"",E=f||T;return Object(p.b)(c.a,{tabs:d,homepage:!1,theme:E,pageTitle:h,pageDescription:y,pageKeywords:x,titleType:m},Object(p.b)(O,{title:a?Object(p.b)(a,null):h,label:"label",tabs:d,theme:E}),d&&Object(p.b)(v,{title:h,slug:C,tabs:d,currentTab:R}),Object(p.b)(N.a,{padded:!0},n,Object(p.b)(j,{relativePagePath:u}),Object(p.b)(I,{date:k})),Object(p.b)(g.a,{pageContext:t,location:r,slug:C,tabs:d,currentTab:R}),Object(p.b)(s.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,n){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},yc3W:function(e,t,n){"use strict";n.r(t),n.d(t,"Title",(function(){return s})),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return m}));var r=n("wx14"),a=n("zLVn"),o=(n("q1tI"),n("7ljp")),b=n("013z"),l=(n("qKvR"),["components"]),s=function(){return Object(o.b)("span",null,"Rapid incident resolution ",Object(o.b)("br",null)," 300-level live demo")},c={},i={Title:s,_frontmatter:c},u=b.a;function m(e){var t=e.components,n=Object(a.a)(e,l);return Object(o.b)(u,Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("span",{id:"top"}),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"DEMO OVERVIEW"),Object(o.b)("th",{parentName:"tr",align:"left"}))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Scenario overview")),Object(o.b)("td",{parentName:"tr",align:"left"},"This demo shows how Cloud Pak for Watson AIOps helps SREs and IT Ops quickly identify, diagnose, and resolve incidents across mission-critical workloads.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Demo products")),Object(o.b)("td",{parentName:"tr",align:"left"},"Cloud Pak for Watson AIOps V3.1")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Demo capabilities")),Object(o.b)("td",{parentName:"tr",align:"left"},"Anomaly Detection, Intelligent Root Cause Analysis, AI-Driven Automated Remediation")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Demo guidance")),Object(o.b)("td",{parentName:"tr",align:"left"},"This demo script has multiple tasks, that each have multiple steps. In each step, you have the details about what you need to do (",Object(o.b)("strong",{parentName:"td"},"Actions"),"), what you can say while delivering this demo step (",Object(o.b)("strong",{parentName:"td"},"Narration"),"), and what diagrams and screenshots you will see (",Object(o.b)("strong",{parentName:"td"},"Screenshots"),"). ",Object(o.b)("br",null),Object(o.b)("br",null)," This demo script is a suggestion, and you are welcome to customize based on your sales opportunity. Most importantly, practice this demo in advance. If the demo seems easy for you to execute, the customer will focus on the content. If it seems difficult for you to execute, the customer will focus on your delivery.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"How to get support")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{href:"https://ibm.enterprise.slack.com/app_redirect?channel=techdemos-automation-support",target:"_blank",rel:"noreferrer"},"#Techdemos-Automation-Support")," Slack channel")))),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"PREPARE TO GIVE THE DEMO")),Object(o.b)("details",null,Object(o.b)("summary",null,"Several days before customer demo: set up and practice demos complete one-time setup (time: 2-3 hrs)"),Object(o.b)("br",null),Object(o.b)("p",null,"Follow these steps:",Object(o.b)("br",null),Object(o.b)("br",null),"1. Register for access to ",Object(o.b)("a",{href:"https://cmc.coc-ibm.com/registration",target:"_blank",rel:"noreferrer"},"Center of Competency")," (CoC).",Object(o.b)("br",null),Object(o.b)("br",null),"2. Once you get an email confirming your access credentials, go to CoC’s ",Object(o.b)("a",{href:"https://cmc.coc-ibm.com/aiops",target:"_blank",rel:"noreferrer"},"Cloud Pak for Watson AIOps cluster page"),".",Object(o.b)("br",null),Object(o.b)("br",null),"3.\tYou will be using the ",Object(o.b)("strong",{parentName:"p"},"Sabine")," cluster. ",Object(o.b)("strong",{parentName:"p"},"IMPORTANT"),": Watson AIOps is NOT currently multi-tenant. Therefore, only ONE USER can use the environment at a time. Otherwise, you risk overwriting/undoing other users’ demos. ",Object(o.b)("strong",{parentName:"p"},"You must reserve your timeslot"),"! The reservations are NOT self-enforcing, meaning it’s up to everyone to adhere to only using the demo during the time you’ve reserved and ensuring you finish up prior to the next person’s time slot.",Object(o.b)("br",null),Object(o.b)("br",null),"4.\tMake sure you can access all components of the environment. To do so, you’ll reserve the cluster for self-enablement. Follow the steps below to reserve your time slot:",Object(o.b)("br",null),Object(o.b)("br",null),"a. Go to the ",Object(o.b)("a",{href:"https://cmc.coc-ibm.com/calendar/sabine",target:"_blank",rel:"noreferrer"},"reservations calendar"),".",Object(o.b)("br",null),"b. Make sure your reservation will not interfere with other reservations. All geographies have access to the environment, so be mindful of other time zones. Choosing the weekly calendar view at the top right makes it easy to see the duration of reservations, or you can click on reservations to see details.",Object(o.b)("br",null),"c. Reserve your timeslot and ensure you have sufficient time to set up, demo, and clean up. Reserve one or two hours, and choose self-enablement in the reservation pop-up. You don’t need any opportunity or revenue details to use the cluster for self-enablement.",Object(o.b)("br",null),Object(o.b)("br",null),"5. In the ",Object(o.b)("a",{href:"https://cmc.coc-ibm.com/cluster/sabine",target:"_blank",rel:"noreferrer"},"Sabine cluster details"),", go through the list of systems and test that you can access and log in to them with the provided credentials. Review the demo script to make sure you understand how each component interacts with others, when it gets used in the demo, and how to navigate between them. Refer to the demo script for detailed instructions.",Object(o.b)("br",null),Object(o.b)("br",null),"a. For logging into the IBM Automation Hub, use OpenShift as the authentication method.",Object(o.b)("br",null),"b. The Slack channel you will use is called #sabine-qotd-reactive."),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("details",null,Object(o.b)("summary",null,"Several days before customer demo: reserve your demo time"),Object(o.b)("br",null),Object(o.b)("p",null,"Follow these steps:",Object(o.b)("br",null),Object(o.b)("br",null),"1. Go to the ",Object(o.b)("a",{href:"https://cmc.coc-ibm.com/calendar/sabine",target:"_blank",rel:"noreferrer"},"reservations calendar")," and make your reservation.",Object(o.b)("br",null),Object(o.b)("br",null),"2. You will need a bit of time to set up prior to giving the demo (e.g., resetting the demo environment). For a customer demo, you will probably need at least two hours. You will need to reset the demo environment 15-20 minutes before your demo starts. Doing it any earlier may result in incorrect data.",Object(o.b)("br",null),Object(o.b)("br",null),"3. To reserve your time slot, click on the day you want, and fill in the details in the pop-up menu. Make sure to fill in opportunity number, revenue, etc."),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("details",null,Object(o.b)("summary",null,"Day of customer demo (beginning of your reserved time slot): log in to demo systems and reset the demo (time: 15-20 mins)"),Object(o.b)("br",null),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Open and log in to the systems listed in the ",Object(o.b)("a",{href:"https://cmc.coc-ibm.com/cluster/sabine",target:"_blank",rel:"noreferrer"},"Sabine cluster details"),". ",Object(o.b)("strong",{parentName:"li"},"Note"),": you will not need Grafana, OCP Console, or OCP/OKD Cluster for this demo.",Object(o.b)("br",null),Object(o.b)("br",null),"2. It may be helpful to put your browser tabs in the order you’ll use them in the demo:",Object(o.b)("br",null),Object(o.b)("br",null),"a. Instana",Object(o.b)("br",null),"b. Prometheus",Object(o.b)("br",null),"c. ELK",Object(o.b)("br",null),"d. Netcool",Object(o.b)("br",null),"e. Anomaly generator",Object(o.b)("br",null),"f. Slack",Object(o.b)("br",null),"g. Automation hub",Object(o.b)("br",null),Object(o.b)("br",null),"3. You must reset the environment exactly 15-20 minutes before the demo starts. Reset the demo environment by going to Netcool -> Automation -> Runbooks, and click ",Object(o.b)("strong",{parentName:"li"},"Run")," on the ",Object(o.b)("strong",{parentName:"li"},"Reset Demo")," runbook. Click ",Object(o.b)("strong",{parentName:"li"},"Start Runbook"),". Click ",Object(o.b)("strong",{parentName:"li"},"Run")," on each automation step, and ensure it is successful. This process takes a minute or two to complete. ",Object(o.b)("br",null),Object(o.b)("br",null),"4. Check that the #sabine-qotd-reactive Slack channel is cleared (no story/incident showing).",Object(o.b)("br",null),Object(o.b)("br",null),"5.\tYou’re ready to begin your demo! Go to the ",Object(o.b)("a",{href:"https://ibm-garage-tsa.github.io/platinum-demos/300-watson-aiops-rapid-incident-resolution/demo-script/"},"demo script"),".",Object(o.b)("br",null),Object(o.b)("br",null),"6. When you’re done with your demo, run the ",Object(o.b)("strong",{parentName:"li"},"Reset Demo")," runbook again to reset it for the next person.")),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-300-watson-aiops-rapid-incident-resolution-demo-preparation-mdx-e4305c45a68ab6de20e7.js.map