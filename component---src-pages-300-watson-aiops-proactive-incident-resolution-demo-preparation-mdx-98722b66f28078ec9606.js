(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),b=a.n(o),l=a("Wbzz"),i=a("Xrax"),s=a("k4MR"),c=a("TSYQ"),u=a.n(c),d=a("QH2O"),m=a.n(d),p=a("qKvR"),A=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(p.b)("div",{className:u()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},h=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,b=r.subDirectory,i=o+"/edit/"+r.branch+b+"/src/pages"+t;return o?Object(p.b)("div",{className:"bx--row "+h.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:h.link,href:i},"Edit this page on GitHub"))):null},g=a("FCXl"),O=a("dI71"),f=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=b()(e,{lower:!0,strict:!0}),o=a===r,i=new RegExp(r+"/?(#.*)?$"),s=n.replace(i,a);return Object(p.b)("li",{key:e,className:u()((t={},t[f.selectedItem]=o,t),f.listItem)},Object(p.b)(l.Link,{className:f.link,to:""+s},e))}));return Object(p.b)("div",{className:f.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:f.list},o))))))},t}(r.a.Component),y=a("MjG9"),N=a("CzIb"),w=a("Asxa"),x=a("OIbQ"),k=a.n(x),E=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(w.c,{className:k.a.row},Object(p.b)(w.a,null,Object(p.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,c=void 0===o?{}:o,u=t.relativePagePath,d=t.titleType,m=c.tabs,h=c.title,O=c.theme,f=c.description,w=c.keywords,x=c.date,k=Object(N.a)().interiorTheme,T=Object(l.useStaticQuery)("2456312558").site.pathPrefix,C=T?n.pathname.replace(T,""):n.pathname,B=m?C.split("/").filter(Boolean).slice(-1)[0]||b()(m[0],{lower:!0}):"",I=O||k;return Object(p.b)(s.a,{tabs:m,homepage:!1,theme:I,pageTitle:h,pageDescription:f,pageKeywords:w,titleType:d},Object(p.b)(A,{title:r?Object(p.b)(r,null):h,label:"label",tabs:m,theme:I}),m&&Object(p.b)(v,{title:h,slug:C,tabs:m,currentTab:B}),Object(p.b)(y.a,{padded:!0},a,Object(p.b)(j,{relativePagePath:u}),Object(p.b)(E,{date:x})),Object(p.b)(g.a,{pageContext:t,location:n,slug:C,tabs:m,currentTab:B}),Object(p.b)(i.a,null))}},AxL5:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return i})),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),b=a("013z"),l=(a("qKvR"),["components"]),i=function(){return Object(o.b)("span",null,"Proactive incident resolution ",Object(o.b)("br",null)," 300-level live demo")},s={},c={Title:i,_frontmatter:s},u=b.a;function d(e){var t=e.components,a=Object(r.a)(e,l);return Object(o.b)(u,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"17.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAADABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQC/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAGS4ucA/8QAGBAAAgMAAAAAAAAAAAAAAAAAAAIBIjH/2gAIAQEAAQUCFii5/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFhAAAwAAAAAAAAAAAAAAAAAAABCB/9oACAEBAAY/Air/xAAYEAEBAQEBAAAAAAAAAAAAAAABABFR8P/aAAgBAQABPyE5EjT0iJ2//9oADAMBAAIAAwAAABB4L//EABcRAAMBAAAAAAAAAAAAAAAAAAABETH/2gAIAQMBAT8QeER//8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oACAECAQE/EI2v/8QAGxABAAMAAwEAAAAAAAAAAAAAAQARITFBUWH/2gAIAQEAAT8Q1a4DPmwIBur72jsLZ//Z')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/platinum-demos/static/c0428afea6e6adaf77698bd30164917f/2e753/proactive-incident-resolution-300-prep-github-banner.jpg",srcSet:["/platinum-demos/static/c0428afea6e6adaf77698bd30164917f/69549/proactive-incident-resolution-300-prep-github-banner.jpg 288w","/platinum-demos/static/c0428afea6e6adaf77698bd30164917f/473e3/proactive-incident-resolution-300-prep-github-banner.jpg 576w","/platinum-demos/static/c0428afea6e6adaf77698bd30164917f/2e753/proactive-incident-resolution-300-prep-github-banner.jpg 1152w","/platinum-demos/static/c0428afea6e6adaf77698bd30164917f/74f4b/proactive-incident-resolution-300-prep-github-banner.jpg 1728w","/platinum-demos/static/c0428afea6e6adaf77698bd30164917f/cbe2c/proactive-incident-resolution-300-prep-github-banner.jpg 2000w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(o.b)("span",{id:"top"}),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"DEMO OVERVIEW"),Object(o.b)("th",{parentName:"tr",align:"left"}))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Scenario overview")),Object(o.b)("td",{parentName:"tr",align:"left"},"This demo shows how Cloud Pak for Watson AIOps helps SREs and IT Ops proactively identify, diagnose, and resolve incidents across mission-critical workloads.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Demo products")),Object(o.b)("td",{parentName:"tr",align:"left"},"Cloud Pak for Watson AIOps V3.1")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Demo capabilities")),Object(o.b)("td",{parentName:"tr",align:"left"},"Anomaly Detection, Intelligent Root Cause Analysis, AI-driven Automated Remediation")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Demo video")),Object(o.b)("td",{parentName:"tr",align:"left"},"View the demo video ",Object(o.b)("a",{href:"https://ibm.ent.box.com/s/s6gj05hjc7h0zyvpykc32r71i3xr2ilb",target:"_blank",rel:"noreferrer"},"here"),". This is a short, but detailed, hands-on walkthrough of the scenario. The video is customer-ready. ",Object(o.b)("br",null)," ",Object(o.b)("br",null)," Potential uses of this video are: ",Object(o.b)("br",null)," 1. Familiarize yourself with the details of this scenario ",Object(o.b)("br",null)," 2. Gain customer agreement that they would like to have a tech-seller do a deep-dive demo of this scenario ",Object(o.b)("br",null)," 3. Use as a prospecting tool to generate customer interest in these capabilities")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Demo guidance")),Object(o.b)("td",{parentName:"tr",align:"left"},"A complete demo script is on the second tab above. You can download a printer-ready PDF of the demo script ",Object(o.b)("a",{href:"/platinum-demos/1ee444129ae4b647fcf518424e4d087a/300-Incident-Resolution-Demo-Script.pdf",target:"_blank",rel:"noreferrer"},"here"),". ",Object(o.b)("br",null),Object(o.b)("br",null)," This demo script has multiple tasks, that each have multiple steps. In each step, you have the details about what you need to do (",Object(o.b)("strong",{parentName:"td"},"Actions"),"), what you can say while delivering this demo step (",Object(o.b)("strong",{parentName:"td"},"Narration"),"), and what diagrams and screenshots you will see. ",Object(o.b)("br",null),Object(o.b)("br",null)," This demo script is a suggestion, and you are welcome to customize based on your sales opportunity. Most importantly, practice this demo in advance. If the demo seems easy for you to execute, the customer will focus on the content. If it seems difficult for you to execute, the customer will focus on your delivery.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"How to get support")),Object(o.b)("td",{parentName:"tr",align:"left"},"Contact ",Object(o.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0124J683GW",target:"_blank",rel:"noreferrer"},"#itz-techzone-support")," or ",Object(o.b)("a",{href:"mailto:techzone.help@ibm.com"},Object(o.b)("a",{parentName:"td",href:"mailto:techzone.help@ibm.com"},"techzone.help@ibm.com"))," regarding issues with reserving and provisioning TechZone environments. ",Object(o.b)("br",null),Object(o.b)("br",null)," Contact ",Object(o.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0216F39ACU",target:"_blank",rel:"noreferrer"},"#platinumdemos-automation-support")," regarding issues with setting up and running this demo use case.")))),Object(o.b)("h3",null,Object(o.b)("strong",{parentName:"h3"},"PREPARE TO GIVE THE DEMO")),Object(o.b)("details",null,Object(o.b)("summary",null,"Set up and practice"),Object(o.b)("br",null),Object(o.b)("p",null,"You will need to complete these steps:",Object(o.b)("br",null),Object(o.b)("br",null),"1. Register for access to ",Object(o.b)("a",{href:"https://cmc.coc-ibm.com/registration",target:"_blank",rel:"noreferrer"},"Center of Competency")," (CoC).",Object(o.b)("br",null),Object(o.b)("br",null),"2. Once you get an email confirming your access credentials, go to CoC’s ",Object(o.b)("a",{href:"https://cmc.coc-ibm.com/aiops",target:"_blank",rel:"noreferrer"},"Cloud Pak for Watson AIOps cluster page"),".",Object(o.b)("br",null),Object(o.b)("br",null),"3. On the cluster page, you will see several clusters. You will be using the ",Object(o.b)("strong",{parentName:"p"},"Sabine")," cluster. ",Object(o.b)("strong",{parentName:"p"},"IMPORTANT"),": Watson AIOps is NOT currently multi-tenant. Therefore, only ONE USER can use the environment at a time. Otherwise, you risk overwriting/undoing other users’ demos. You must reserve your timeslot. The reservations are NOT self-enforcing, meaning it’s up to everyone to adhere to only using the demo during the time you’ve reserved and ensuring you finish up prior to the next person’s time slot.",Object(o.b)("br",null),Object(o.b)("br",null),"4.\tReserve the cluster for a self-enablement session, following the steps below:",Object(o.b)("br",null),Object(o.b)("br",null),"a. Go to the ",Object(o.b)("a",{href:"https://cmc.coc-ibm.com/calendar/sabine",target:"_blank",rel:"noreferrer"},"reservations calendar"),".",Object(o.b)("br",null),"b. Make sure your reservation will not interfere with other reservations. Choosing the weekly calendar view at the top right makes it easy to see the duration of reservations, or you can click on reservations to see details.",Object(o.b)("br",null),"c. Reserve your timeslot and ensure you have sufficient time to set up, practice, and clean up. Reserve one or two hours, and choose self-enablement in the reservation pop-up. You don’t need any opportunity or revenue details to use the cluster for self-enablement.",Object(o.b)("br",null),Object(o.b)("br",null),"5. In the ",Object(o.b)("a",{href:"https://cmc.coc-ibm.com/cluster/sabine",target:"_blank",rel:"noreferrer"},"Sabine cluster details"),", go through the list of systems and test that you can log in to each of them with the provided credentials.",Object(o.b)("br",null),Object(o.b)("strong",{parentName:"p"},"Note"),": For logging into the IBM Automation Hub, use OpenShift as the authentication method.",Object(o.b)("br",null),Object(o.b)("strong",{parentName:"p"},"Note"),": The Slack channel you will use is called ",Object(o.b)("strong",{parentName:"p"},"#sabine-qotd-reactive"),".",Object(o.b)("br",null),Object(o.b)("br",null),"6. Practice the demo using the demo script.",Object(o.b)("br",null),Object(o.b)("br",null),"7. Reset the demo environment by going to IBM Event Manager -> Automation -> Runbooks, and click ",Object(o.b)("strong",{parentName:"p"},"Run")," on the ",Object(o.b)("strong",{parentName:"p"},"Reset Demo")," runbook. Click ",Object(o.b)("strong",{parentName:"p"},"Start Runbook"),". Click ",Object(o.b)("strong",{parentName:"p"},"Run")," on each automation step, and ensure it is successful. This process takes a minute or two to complete."),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("details",null,Object(o.b)("summary",null,"Reserve your demo time slot"),Object(o.b)("br",null),"1. Go to the ",Object(o.b)("a",{href:"https://cmc.coc-ibm.com/calendar/sabine",target:"_blank",rel:"noreferrer"},"reservations calendar")," and make your reservation.",Object(o.b)("br",null),Object(o.b)("br",null),"2. You will need a bit of time to set up prior to giving the demo (e.g., resetting the demo environment). For a customer demo, you will probably need a timeslot of at least two hours (the estimated delivery time for the demo is 30-60 minutes). You will need to reset the demo environment 15-20 minutes before your demo starts. Doing it any earlier may result in incorrect data.",Object(o.b)("br",null),Object(o.b)("br",null),"3. To reserve your time slot, click on the day you want and fill in the details in the pop-up menu. Make sure to fill in opportunity number, revenue, etc.",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("details",null,Object(o.b)("summary",null,"Run the checklist and reset the environment prior to giving the demo"),Object(o.b)("br",null),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Complete the checklist below:")),Object(o.b)("br",null),Object(o.b)("p",null,"▢ Have you registered with the CoC and received the CMC credentials? ",Object(o.b)("br",null),"\n▢ Have you reserved the Sabine demo system? ",Object(o.b)("br",null),"\n▢ Have you logged into all the various systems? ",Object(o.b)("br",null),"\n▢ Have you successfully run the Reset Demo Runbook? ",Object(o.b)("br",null),"\n▢ Have you validated the RESET so the AI Manager shows ",Object(o.b)("strong",{parentName:"p"},"No Stories"),"? ",Object(o.b)("br",null),"\n▢ Have you seen that all nodes in the Topology View are ",Object(o.b)("strong",{parentName:"p"},"green"),"? ",Object(o.b)("br",null),"\n▢ Have you validated that NO alerts are firing and that Prometheus is all ",Object(o.b)("strong",{parentName:"p"},"green"),"? ",Object(o.b)("br",null),"\n▢ Have you verified that the ELK and Kafka Integrations are set to ",Object(o.b)("strong",{parentName:"p"},"ON"),"? ",Object(o.b)("br",null),"\n▢ Have you checked that the Slack Test Connection succeeded? ",Object(o.b)("br",null),"\n▢ Have you ensured that the QotD Golden Signals in Instana shows normal behaviour? ",Object(o.b)("br",null),Object(o.b)("br",null),"\n2. Open and log in to the systems listed in the ",Object(o.b)("a",{href:"https://cmc.coc-ibm.com/cluster/sabine",target:"_blank",rel:"noreferrer"},"Sabine cluster details"),". Open a new tab for each system. ",Object(o.b)("strong",{parentName:"p"},"Note"),": You will not need Grafana, OCP Console, or OCP/OKD Cluster for this demo.",Object(o.b)("br",null),Object(o.b)("br",null),"3. You must reset the environment exactly 15-20 minutes before the demo starts. Reset the demo environment by going to IBM Event Manager -> Automation -> Runbooks, and click ",Object(o.b)("strong",{parentName:"p"},"Run")," on the ",Object(o.b)("strong",{parentName:"p"},"Reset Demo")," runbook. Click ",Object(o.b)("strong",{parentName:"p"},"Start Runbook"),". Click ",Object(o.b)("strong",{parentName:"p"},"Run")," on each automation step, and ensure it is successful. This process takes a minute or two to complete. ",Object(o.b)("br",null),Object(o.b)("br",null),"4. Check that the ",Object(o.b)("strong",{parentName:"p"},"#sabine-qotd-reactive")," Slack channel is cleared (no story/incident showing).",Object(o.b)("br",null),Object(o.b)("br",null),"5. You’re ready to begin your demo! Remember to execute the runbook to reset the environment when the demo is complete."),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("p",null,"Click ",Object(o.b)("a",{parentName:"p",href:"/platinum-demos/300-watson-aiops-proactive-incident-resolution/demo-script"},"here")," to go to ",Object(o.b)("strong",{parentName:"p"},"Demo Script")," on the next tab."))}d.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-300-watson-aiops-proactive-incident-resolution-demo-preparation-mdx-98722b66f28078ec9606.js.map