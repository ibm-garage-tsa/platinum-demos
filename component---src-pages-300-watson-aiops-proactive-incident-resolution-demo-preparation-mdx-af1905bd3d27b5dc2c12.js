(window.webpackJsonp=window.webpackJsonp||[]).push([[55,22,35,36,41],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("NmYn"),b=n.n(o),l=n("Wbzz"),s=n("Xrax"),c=n("k4MR"),i=n("TSYQ"),u=n.n(i),d=n("QH2O"),m=n.n(d),p=n("qKvR"),O=function(e){var t,n=e.title,a=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(p.b)("div",{className:u()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===a,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},n)))))},h=n("BAC9"),j=function(e){var t=e.relativePagePath,n=e.repository,a=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,r=n||a,o=r.baseUrl,b=r.subDirectory,s=o+"/edit/"+r.branch+b+"/src/pages"+t;return o?Object(p.b)("div",{className:"bx--row "+h.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:h.link,href:s},"Edit this page on GitHub"))):null},g=n("FCXl"),f=n("dI71"),v=n("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],o=n.map((function(e){var t,n=b()(e,{lower:!0,strict:!0}),o=n===r,s=new RegExp(r+"/?(#.*)?$"),c=a.replace(s,n);return Object(p.b)("li",{key:e,className:u()((t={},t[v.selectedItem]=o,t),v.listItem)},Object(p.b)(l.Link,{className:v.link,to:""+c},e))}));return Object(p.b)("div",{className:v.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:v.list},o))))))},t}(r.a.Component),N=n("MjG9"),w=n("CzIb"),k=n("Asxa"),x=n("OIbQ"),T=n.n(x),C=function(e){var t=e.date,n=new Date(t);return t?Object(p.b)(k.c,{className:T.a.row},Object(p.b)(k.a,null,Object(p.b)("div",{className:T.a.text},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,r=e.Title,o=t.frontmatter,i=void 0===o?{}:o,u=t.relativePagePath,d=t.titleType,m=i.tabs,h=i.title,f=i.theme,v=i.description,k=i.keywords,x=i.date,T=Object(w.a)().interiorTheme,I=Object(l.useStaticQuery)("2456312558").site.pathPrefix,R=I?a.pathname.replace(I,""):a.pathname,P=m?R.split("/").filter(Boolean).slice(-1)[0]||b()(m[0],{lower:!0}):"",E=f||T;return Object(p.b)(c.a,{tabs:m,homepage:!1,theme:E,pageTitle:h,pageDescription:v,pageKeywords:k,titleType:d},Object(p.b)(O,{title:r?Object(p.b)(r,null):h,label:"label",tabs:m,theme:E}),m&&Object(p.b)(y,{title:h,slug:R,tabs:m,currentTab:P}),Object(p.b)(N.a,{padded:!0},n,Object(p.b)(j,{relativePagePath:u}),Object(p.b)(C,{date:x})),Object(p.b)(g.a,{pageContext:t,location:a,slug:R,tabs:m,currentTab:P}),Object(p.b)(s.a,null))}},AxL5:function(e,t,n){"use strict";n.r(t),n.d(t,"Title",(function(){return s})),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n("wx14"),r=n("zLVn"),o=(n("q1tI"),n("7ljp")),b=n("013z"),l=(n("qKvR"),["components"]),s=function(){return Object(o.b)("span",null,"Proactive incident resolution ",Object(o.b)("br",null)," 300-level live demo")},c={},i={Title:s,_frontmatter:c},u=b.a;function d(e){var t=e.components,n=Object(r.a)(e,l);return Object(o.b)(u,Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("img",{src:"./images/src/pages/300-watson-aiops-proactive-incident-resolution/images/proactive-incident-resolution-300-prep-github-banner.jpg",alt:"banner"}),Object(o.b)("span",{id:"top"}),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"DEMO OVERVIEW"),Object(o.b)("th",{parentName:"tr",align:"left"}))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Scenario overview")),Object(o.b)("td",{parentName:"tr",align:"left"},"This demo shows how Cloud Pak for Watson AIOps helps SREs and IT Ops proactively identify, diagnose, and resolve incidents across mission-critical workloads.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Demo products")),Object(o.b)("td",{parentName:"tr",align:"left"},"Cloud Pak for Watson AIOps V3.1")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Demo capabilities")),Object(o.b)("td",{parentName:"tr",align:"left"},"Anomaly Detection, Intelligent Root Cause Analysis, AI-driven Automated Remediation")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Demo guidance")),Object(o.b)("td",{parentName:"tr",align:"left"},"A complete demo script is on the second tab above. You can download a printer-ready PDF of the demo script ",Object(o.b)("a",{href:"/platinum-demos/58ada964a8db718eb900ad7eb96badfc/300-Incident-Resolution-Demo-Script.pdf",target:"_blank",rel:"noreferrer"},"here"),". ",Object(o.b)("br",null),Object(o.b)("br",null)," This demo script has multiple tasks, that each have multiple steps. In each step, you have the details about what you need to do (",Object(o.b)("strong",{parentName:"td"},"Actions"),"), what you can say while delivering this demo step (",Object(o.b)("strong",{parentName:"td"},"Narration"),"), and what diagrams and screenshots you will see (",Object(o.b)("strong",{parentName:"td"},"Screenshots"),"). ",Object(o.b)("br",null),Object(o.b)("br",null)," This demo script is a suggestion, and you are welcome to customize based on your sales opportunity. Most importantly, practice this demo in advance. If the demo seems easy for you to execute, the customer will focus on the content. If it seems difficult for you to execute, the customer will focus on your delivery.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"How to get support")),Object(o.b)("td",{parentName:"tr",align:"left"},"Contact ",Object(o.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0124J683GW",target:"_blank",rel:"noreferrer"},"#itz-techzone-support")," regarding issues with reserving and provisioning TechZone environments. ",Object(o.b)("br",null),Object(o.b)("br",null)," Contact ",Object(o.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0216F39ACU",target:"_blank",rel:"noreferrer"},"#platinumdemos-automation-support")," regarding issues with setting up and running this demo use case.")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"PREPARE TO GIVE THE DEMO")),Object(o.b)("details",null,Object(o.b)("summary",null,"Set up and practice"),Object(o.b)("br",null),Object(o.b)("p",null,"You will need to complete these steps:",Object(o.b)("br",null),Object(o.b)("br",null),"1. Register for access to ",Object(o.b)("a",{href:"https://cmc.coc-ibm.com/registration",target:"_blank",rel:"noreferrer"},"Center of Competency")," (CoC).",Object(o.b)("br",null),Object(o.b)("br",null),"2. Once you get an email confirming your access credentials, go to CoC’s ",Object(o.b)("a",{href:"https://cmc.coc-ibm.com/aiops",target:"_blank",rel:"noreferrer"},"Cloud Pak for Watson AIOps cluster page"),".",Object(o.b)("br",null),Object(o.b)("br",null),"3. On the cluster page, you will see several clusters. You will be using the ",Object(o.b)("strong",{parentName:"p"},"Sabine")," cluster. ",Object(o.b)("strong",{parentName:"p"},"IMPORTANT"),": Watson AIOps is NOT currently multi-tenant. Therefore, only ONE USER can use the environment at a time. Otherwise, you risk overwriting/undoing other users’ demos. You must reserve your timeslot. The reservations are NOT self-enforcing, meaning it’s up to everyone to adhere to only using the demo during the time you’ve reserved and ensuring you finish up prior to the next person’s time slot.",Object(o.b)("br",null),Object(o.b)("br",null),"4.\tReserve the cluster for a self-enablement session, following the steps below:",Object(o.b)("br",null),Object(o.b)("br",null),"a. Go to the ",Object(o.b)("a",{href:"https://cmc.coc-ibm.com/calendar/sabine",target:"_blank",rel:"noreferrer"},"reservations calendar"),".",Object(o.b)("br",null),"b. Make sure your reservation will not interfere with other reservations. Choosing the weekly calendar view at the top right makes it easy to see the duration of reservations, or you can click on reservations to see details.",Object(o.b)("br",null),"c. Reserve your timeslot and ensure you have sufficient time to set up, practice, and clean up. Reserve one or two hours, and choose self-enablement in the reservation pop-up. You don’t need any opportunity or revenue details to use the cluster for self-enablement.",Object(o.b)("br",null),Object(o.b)("br",null),"5. In the ",Object(o.b)("a",{href:"https://cmc.coc-ibm.com/cluster/sabine",target:"_blank",rel:"noreferrer"},"Sabine cluster details"),", go through the list of systems and test that you can log in to each of them with the provided credentials.",Object(o.b)("br",null),Object(o.b)("strong",{parentName:"p"},"Note"),": For logging into the IBM Automation Hub, use OpenShift as the authentication method.",Object(o.b)("br",null),Object(o.b)("strong",{parentName:"p"},"Note"),": The Slack channel you will use is called ",Object(o.b)("strong",{parentName:"p"},"#sabine-qotd-reactive"),".",Object(o.b)("br",null),Object(o.b)("br",null),"6. Practice the demo using the demo script.",Object(o.b)("br",null),Object(o.b)("br",null),"7. Reset the demo environment by going to IBM Event Manager -> Automation -> Runbooks, and click ",Object(o.b)("strong",{parentName:"p"},"Run")," on the ",Object(o.b)("strong",{parentName:"p"},"Reset Demo")," runbook. Click ",Object(o.b)("strong",{parentName:"p"},"Start Runbook"),". Click ",Object(o.b)("strong",{parentName:"p"},"Run")," on each automation step, and ensure it is successful. This process takes a minute or two to complete."),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("details",null,Object(o.b)("summary",null,"Reserve your demo time slot"),Object(o.b)("br",null),"1. Go to the ",Object(o.b)("a",{href:"https://cmc.coc-ibm.com/calendar/sabine",target:"_blank",rel:"noreferrer"},"reservations calendar")," and make your reservation.",Object(o.b)("br",null),Object(o.b)("br",null),"2. You will need a bit of time to set up prior to giving the demo (e.g., resetting the demo environment). For a customer demo, you will probably need a timeslot of at least two hours (the estimated delivery time for the demo is 30-60 minutes). You will need to reset the demo environment 15-20 minutes before your demo starts. Doing it any earlier may result in incorrect data.",Object(o.b)("br",null),Object(o.b)("br",null),"3. To reserve your time slot, click on the day you want and fill in the details in the pop-up menu. Make sure to fill in opportunity number, revenue, etc.",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("details",null,Object(o.b)("summary",null,"Run the checklist and reset the environment prior to giving the demo"),Object(o.b)("br",null),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Complete the checklist below:")),Object(o.b)("br",null),Object(o.b)("p",null,"▢ Have you registered with the CoC and received the CMC credentials? ",Object(o.b)("br",null),"\n▢ Have you reserved the Sabine Demo system?",Object(o.b)("br",null),"\n▢ Have you logged into all the various systems? ",Object(o.b)("br",null),"\n▢ Have you successfully run the Reset Demo Runbook?",Object(o.b)("br",null),"\n▢ Have you validated the RESET so the AI Manager shows ",Object(o.b)("strong",{parentName:"p"},"No Stories"),"?",Object(o.b)("br",null),"\n▢ Have you seen that all nodes in the Topology View are ",Object(o.b)("strong",{parentName:"p"},"green"),"? ",Object(o.b)("br",null),"\n▢ Have you validated that NO Alerts are firing and that Prometheus is all ",Object(o.b)("strong",{parentName:"p"},"green"),"?",Object(o.b)("br",null),"\n▢ Have you verified that the ELK and Kafka Integrations are set to ",Object(o.b)("strong",{parentName:"p"},"ON")," ?",Object(o.b)("br",null),"\n▢ Have you checked that the Slack Test Connection succeeded? ",Object(o.b)("br",null),"\n▢ Have you ensured that the QotD Golden Signals in Instana shows normal behaviour? ",Object(o.b)("br",null),Object(o.b)("br",null),"\n2. Open and log in to the systems listed in the ",Object(o.b)("a",{href:"https://cmc.coc-ibm.com/cluster/sabine",target:"_blank",rel:"noreferrer"},"Sabine cluster details"),". ",Object(o.b)("strong",{parentName:"p"},"Note"),": You will not need Grafana, OCP Console, or OCP/OKD Cluster for this demo.",Object(o.b)("br",null),Object(o.b)("br",null),"3. You must reset the environment exactly 15-20 minutes before the demo starts. Reset the demo environment by going to IBM Event Manager -> Automation -> Runbooks, and click ",Object(o.b)("strong",{parentName:"p"},"Run")," on the ",Object(o.b)("strong",{parentName:"p"},"Reset Demo")," runbook. Click ",Object(o.b)("strong",{parentName:"p"},"Start Runbook"),". Click ",Object(o.b)("strong",{parentName:"p"},"Run")," on each automation step, and ensure it is successful. This process takes a minute or two to complete. ",Object(o.b)("br",null),Object(o.b)("br",null),"4. Check that the ",Object(o.b)("strong",{parentName:"p"},"#sabine-qotd-reactive")," Slack channel is cleared (no story/incident showing).",Object(o.b)("br",null),Object(o.b)("br",null),"5. You’re ready to begin your demo! Remember to execute the runbook to reset the environment when the demo is complete."),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))))}d.isMDXComponent=!0},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,n){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-300-watson-aiops-proactive-incident-resolution-demo-preparation-mdx-af1905bd3d27b5dc2c12.js.map