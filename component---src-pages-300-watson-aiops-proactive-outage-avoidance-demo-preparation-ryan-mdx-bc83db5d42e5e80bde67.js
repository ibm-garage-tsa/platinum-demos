(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),i=a.n(o),b=a("Wbzz"),s=a("Xrax"),l=a("k4MR"),c=a("TSYQ"),m=a.n(c),u=a("QH2O"),p=a.n(u),d=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(d.b)("div",{className:m()(p.a.pageHeader,(t={},t[p.a.withTabs]=o.length,t[p.a.darkMode]="dark"===n,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:p.a.text},a)))))},h=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,i=r.subDirectory,s=o+"/edit/"+r.branch+i+"/src/pages"+t;return o?Object(d.b)("div",{className:"bx--row "+h.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:h.link,href:s},"Edit this page on GitHub"))):null},O=a("FCXl"),A=a("dI71"),f=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(A.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),o=a===r,s=new RegExp(r+"/?(#.*)?$"),l=n.replace(s,a);return Object(d.b)("li",{key:e,className:m()((t={},t[f.selectedItem]=o,t),f.listItem)},Object(d.b)(b.Link,{className:f.link,to:""+l},e))}));return Object(d.b)("div",{className:f.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",{"aria-label":t},Object(d.b)("ul",{className:f.list},o))))))},t}(r.a.Component),w=a("MjG9"),N=a("CzIb"),y=a("Asxa"),k=a("OIbQ"),x=a.n(k),T=function(e){var t=e.date,a=new Date(t);return t?Object(d.b)(y.c,{className:x.a.row},Object(d.b)(y.a,null,Object(d.b)("div",{className:x.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,c=void 0===o?{}:o,m=t.relativePagePath,u=t.titleType,p=c.tabs,h=c.title,A=c.theme,f=c.description,y=c.keywords,k=c.date,x=Object(N.a)().interiorTheme,E=Object(b.useStaticQuery)("2456312558").site.pathPrefix,C=E?n.pathname.replace(E,""):n.pathname,R=p?C.split("/").filter(Boolean).slice(-1)[0]||i()(p[0],{lower:!0}):"",B=A||x;return Object(d.b)(l.a,{tabs:p,homepage:!1,theme:B,pageTitle:h,pageDescription:f,pageKeywords:y,titleType:u},Object(d.b)(g,{title:r?Object(d.b)(r,null):h,label:"label",tabs:p,theme:B}),p&&Object(d.b)(v,{title:h,slug:C,tabs:p,currentTab:R}),Object(d.b)(w.a,{padded:!0},a,Object(d.b)(j,{relativePagePath:m}),Object(d.b)(T,{date:k})),Object(d.b)(O.a,{pageContext:t,location:n,slug:C,tabs:p,currentTab:R}),Object(d.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},CtmR:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return l})),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return d}));var n,r=a("wx14"),o=a("zLVn"),i=(a("q1tI"),a("7ljp")),b=a("013z"),s=(a("qKvR"),["components"]),l=function(){return Object(i.b)("span",null,"Proactive outage avoidance ",Object(i.b)("br",null)," 300-level live demo")},c={},m=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),u={Title:l,_frontmatter:c},p=b.a;function d(e){var t=e.components,a=Object(o.a)(e,s);return Object(i.b)(p,Object(r.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"17.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAADABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQC/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAGS4ucA/8QAGBAAAgMAAAAAAAAAAAAAAAAAAAIBIjH/2gAIAQEAAQUCFii5/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFhAAAwAAAAAAAAAAAAAAAAAAABCB/9oACAEBAAY/Air/xAAYEAEAAwEAAAAAAAAAAAAAAAABABFR8P/aAAgBAQABPyEzISLOkIm5/9oADAMBAAIAAwAAABB4L//EABcRAAMBAAAAAAAAAAAAAAAAAAABETH/2gAIAQMBAT8QeER//8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oACAECAQE/EI2v/8QAGxABAAMAAwEAAAAAAAAAAAAAAQARITFBUWH/2gAIAQEAAT8Q1a4GfNgQDdX3tHYWz//Z')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/platinum-demos/static/48817183873344fee0090e74afd359ff/2e753/proactive-outage-avoidance-300-prep-github-banner.jpg",srcSet:["/platinum-demos/static/48817183873344fee0090e74afd359ff/69549/proactive-outage-avoidance-300-prep-github-banner.jpg 288w","/platinum-demos/static/48817183873344fee0090e74afd359ff/473e3/proactive-outage-avoidance-300-prep-github-banner.jpg 576w","/platinum-demos/static/48817183873344fee0090e74afd359ff/2e753/proactive-outage-avoidance-300-prep-github-banner.jpg 1152w","/platinum-demos/static/48817183873344fee0090e74afd359ff/74f4b/proactive-outage-avoidance-300-prep-github-banner.jpg 1728w","/platinum-demos/static/48817183873344fee0090e74afd359ff/cbe2c/proactive-outage-avoidance-300-prep-github-banner.jpg 2000w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(i.b)("span",{id:"top"}),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"DEMO OVERVIEW"),Object(i.b)("th",{parentName:"tr",align:"left"}))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("strong",{parentName:"td"},"Scenario overview")),Object(i.b)("td",{parentName:"tr",align:"left"},"This demo uses a web application to show how the Cloud Pak for Watson AIOps helps SREs and IT Ops proactively identify, diagnose, and resolve incidents across mission critical workloads.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("strong",{parentName:"td"},"Demo products")),Object(i.b)("td",{parentName:"tr",align:"left"},"Cloud Pak for Watson AIOps")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("strong",{parentName:"td"},"Demo capabilities")),Object(i.b)("td",{parentName:"tr",align:"left"},"Anomaly detection; Event grouping; Automated remediation")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("strong",{parentName:"td"},"Demo video")),Object(i.b)("td",{parentName:"tr",align:"left"},"View the demo video ",Object(i.b)("a",{href:"https://ibm.ent.box.com/s/s6gj05hjc7h0zyvpykc32r71i3xr2ilb",target:"_blank",rel:"noreferrer"},"here"),". This is a short, but detailed, hands-on walkthrough of the scenario. The video is customer-ready. ",Object(i.b)("br",null)," ",Object(i.b)("br",null)," Potential uses of this video are: ",Object(i.b)("br",null)," 1. Familiarize yourself with the details of this scenario ",Object(i.b)("br",null)," 2. Gain customer agreement that they would like to have a tech-seller do a deep-dive demo of this scenario ",Object(i.b)("br",null)," 3. Use as a prospecting tool to generate customer interest in these capabilities")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("strong",{parentName:"td"},"Demo guidance")),Object(i.b)("td",{parentName:"tr",align:"left"},"A complete demo script is on the second tab above. You can download a printer-ready PDF of the demo script ",Object(i.b)("a",{href:"/platinum-demos/2606ee6001e52d9499859dc875c2dd98/300-Incident-Resolution-Demo-Script.pdf",target:"_blank",rel:"noreferrer"},"here"),". ",Object(i.b)("br",null),Object(i.b)("br",null)," This demo script has multiple tasks, that each have multiple steps. In each step, you have the details about what you need to do (",Object(i.b)("strong",{parentName:"td"},"Actions"),"), what you can say while delivering this demo step (",Object(i.b)("strong",{parentName:"td"},"Narration"),"), and what diagrams and screenshots you will see. ",Object(i.b)("br",null),Object(i.b)("br",null)," This demo script is a suggestion, and you are welcome to customize based on your sales opportunity. Most importantly, practice this demo in advance. If the demo seems easy for you to execute, the customer will focus on the content. If it seems difficult for you to execute, the customer will focus on your delivery.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("strong",{parentName:"td"},"Required versions")),Object(i.b)("td",{parentName:"tr",align:"left"},"Cloud Pak for Watson AIOps V3.1")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("strong",{parentName:"td"},"How to get support")),Object(i.b)("td",{parentName:"tr",align:"left"},"Contact ",Object(i.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0124J683GW",target:"_blank",rel:"noreferrer"},"#itz-techzone-support")," or ",Object(i.b)("a",{href:"mailto:techzone.help@ibm.com"},Object(i.b)("a",{parentName:"td",href:"mailto:techzone.help@ibm.com"},"techzone.help@ibm.com"))," regarding issues with reserving and provisioning TechZone environments. ",Object(i.b)("br",null),Object(i.b)("br",null)," Contact ",Object(i.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0216F39ACU",target:"_blank",rel:"noreferrer"},"#platinumdemos-automation-support")," regarding issues with setting up and running this demo use case.")))),Object(i.b)("h3",null,Object(i.b)("strong",{parentName:"h3"},"PREPARE TO GIVE THE DEMO")),Object(i.b)("details",null,Object(i.b)("summary",null,"Set up and practice"),Object(i.b)("br",null),Object(i.b)("p",null,"You will need to complete these steps:"),Object(i.b)("br",null),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Register for access to the ",Object(i.b)("a",{href:"https://cmc.coc-ibm.com/registration",target:"_blank",rel:"noreferrer"},"Center of Competency")," (CoC).")),Object(i.b)("br",null),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Once you get an email confirming your access credentials, go to the CoC’s ",Object(i.b)("a",{href:"https://cmc.coc-ibm.com/aiops",target:"_blank",rel:"noreferrer"},"Watson AIOps")," cluster page.")),Object(i.b)("br",null),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"On the cluster page, you will see several clusters. You will be using the ",Object(i.b)("strong",{parentName:"li"},"Qui Gon")," cluster.")),Object(i.b)("br",null),Object(i.b)(m,{mdxType:"InlineNotification"},Object(i.b)("strong",null,"IMPORTANT"),": Watson AIOps is NOT currently multi-tenant. Therefore, only ONE USER can use the environment at a time. Otherwise, you risk overwriting/undoing other users’ demos. You must reserve your timeslot. The reservations are NOT self-enforcing, meaning it’s up to everyone to adhere to only using the demo during the time you’ve reserved and ensuring you finish up prior to the next person’s time slot."),Object(i.b)("br",null),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"Reserve the ",Object(i.b)("strong",{parentName:"li"},"Qui Gon")," cluster for a self-enablement session by following the steps below:",Object(i.b)("br",null),"a. Click ",Object(i.b)("strong",{parentName:"li"},"Reservations")," to access ",Object(i.b)("a",{href:"https://cmc.coc-ibm.com/calendar/qui-gon",target:"_blank",rel:"noreferrer"},"Qui Jon’s Demo Schedule"),".",Object(i.b)("br",null),Object(i.b)("img",{parentName:"li",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-proactive-incident-resolution/images/4a.png",width:300}),Object(i.b)("br",null),"b. To easily view the duration of reservations and avoid interfering with existing reservations, click ",Object(i.b)("strong",{parentName:"li"},"week")," at the top right to access the weekly calendar view, or you can click individual reservations to see details.",Object(i.b)("br",null),Object(i.b)("img",{parentName:"li",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-proactive-incident-resolution/images/4b.png",width:800}),Object(i.b)("br",null),"c. Click a date of interest in the calendar, and a reservation pop-up window will open.",Object(i.b)("br",null),Object(i.b)("img",{parentName:"li",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-proactive-incident-resolution/images/4c.png",width:800}),Object(i.b)("br",null),"d. To ensure you have sufficient time to set up, practice, and clean up, reserve one to two hours (1). Choose ",Object(i.b)("strong",{parentName:"li"},"Self enablement")," (2). You don’t need any opportunity or revenue details to use the cluster for self-enablement. Then, click ",Object(i.b)("strong",{parentName:"li"},"Reserve Time")," (3).",Object(i.b)("br",null),Object(i.b)("img",{parentName:"li",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-proactive-incident-resolution/images/4d.png",width:400}))),Object(i.b)("br",null),Object(i.b)("ol",{start:5},Object(i.b)("li",{parentName:"ol"},"In the ",Object(i.b)("a",{href:"https://cmc.coc-ibm.com/cluster/qui-gon",target:"_blank",rel:"noreferrer"},"Qui Gon cluster details")," page, go through the list of systems and test that you can log in to each of them with the provided credentials. ",Object(i.b)("br",null),Object(i.b)("br",null)," ",Object(i.b)("strong",{parentName:"li"},"Notes"),": ",Object(i.b)("br",null)," • For logging in to the IBM Automation Hub, use OpenShift as the authentication method. ",Object(i.b)("br",null)," • The Slack channel you will use is called ",Object(i.b)("strong",{parentName:"li"},"#qui-gon-qotd"),".",Object(i.b)("br",null),Object(i.b)("img",{parentName:"li",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-proactive-incident-resolution/images/5-cluster-details.png",width:800}))),Object(i.b)("br",null),Object(i.b)("ol",{start:6},Object(i.b)("li",{parentName:"ol"},"Practice the demo using the ",Object(i.b)("a",{parentName:"li",href:"/platinum-demos/300-watson-aiops-proactive-incident-resolution/demo-script"},"demo script")," on the next tab.")),Object(i.b)("br",null),Object(i.b)("ol",{start:7},Object(i.b)("li",{parentName:"ol"},"Reset the demo environment by following the steps below (this process takes a minute or two to complete):",Object(i.b)("br",null),Object(i.b)("br",null),"a. Go to ",Object(i.b)("strong",{parentName:"li"},"Event Manager")," and click the ",Object(i.b)("strong",{parentName:"li"},"Open menu")," icon in the top left corner (1). Then, select ",Object(i.b)("strong",{parentName:"li"},"Automations")," (2) → ",Object(i.b)("strong",{parentName:"li"},"Runbooks")," (3).",Object(i.b)("br",null),Object(i.b)("img",{parentName:"li",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-proactive-incident-resolution/images/event-manager-1.png",width:500}),Object(i.b)("br",null),"b. Click ",Object(i.b)("strong",{parentName:"li"},"Run")," on the row of the ",Object(i.b)("strong",{parentName:"li"},"Reset Ratings Service")," runbook.",Object(i.b)("br",null),Object(i.b)("img",{parentName:"li",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-proactive-incident-resolution/images/event-manager-2.png",width:800}),Object(i.b)("br",null),"c. Click ",Object(i.b)("strong",{parentName:"li"},"Start Runbook"),".",Object(i.b)("br",null),Object(i.b)("img",{parentName:"li",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-proactive-incident-resolution/images/event-manager-3.png",width:800}),Object(i.b)("br",null),"d. Click ",Object(i.b)("strong",{parentName:"li"},"Run"),". ",Object(i.b)("br",null),Object(i.b)("img",{parentName:"li",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-proactive-incident-resolution/images/event-manager-4.png",width:800}),Object(i.b)("br",null),"e. After it runs successfully, click ",Object(i.b)("strong",{parentName:"li"},"Complete"),".",Object(i.b)("br",null),Object(i.b)("img",{parentName:"li",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-proactive-incident-resolution/images/event-manager-5.png",width:800}),Object(i.b)("br",null),"f. Provide feedback and rate the runbook (1). Then, click ",Object(i.b)("strong",{parentName:"li"},"Runbook worked")," (2).",Object(i.b)("br",null),Object(i.b)("img",{parentName:"li",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-proactive-incident-resolution/images/event-manager-6.png",width:800}),Object(i.b)("br",null))),Object(i.b)("br",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(i.b)("details",null,Object(i.b)("summary",null,"Reserve your demo timeslot"),Object(i.b)("br",null)," 1. Go to ",Object(i.b)("a",{href:"https://cmc.coc-ibm.com/calendar/qui-gon",target:"_blank",rel:"noreferrer"},"Qui Gon's Demo Schedule"),". ",Object(i.b)("br",null),Object(i.b)("br",null)," 2. Click a date of interest in the calendar, and a reservation pop-up window will open. ",Object(i.b)("br",null),Object(i.b)("br",null)," 3. Fill in the details in the pop-up window and reserve your timeslot. ",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Notes"),": ",Object(i.b)("br",null)," • You will need a bit of time to set up prior to giving the demo (e.g., resetting the demo environment). For a customer demo, you will probably need a timeslot of at least two hours (the estimated delivery time for the demo is 30-60 minutes). You will need to reset the demo environment 15-20 minutes before your demo starts. Doing it any earlier may result in incorrect data. ",Object(i.b)("br",null)," • Make sure to provide opportunity and revenue details."),Object(i.b)("br",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(i.b)("details",null,Object(i.b)("summary",null,"Run the checklist and reset the environment prior to giving the demo"),Object(i.b)("br",null)," 1. Complete the checklist below:",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("p",null,"▢ Have you registered with the CoC and received the CMC credentials? ",Object(i.b)("br",null),"\n▢ Have you reserved the Qui Gon demo system? ",Object(i.b)("br",null),"\n▢ Have you logged into all the various systems? ",Object(i.b)("br",null),"\n▢ Have you successfully run the Reset Ratings Service runbook? ",Object(i.b)("br",null),"\n▢ Have you validated the reset so that the AI Manager shows no stories? ",Object(i.b)("br",null),"\n▢ Have you seen that all nodes in the topology view are green? ",Object(i.b)("br",null),"\n▢ Have you checked that the Slack test connection succeeded? ",Object(i.b)("br",null),"\n▢ Have you ensured that the QotD golden signals in Instana shows normal behavior (i.e., the erroneous call rate is 0)?"),Object(i.b)("br",null),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Open and log in to the systems listed under ",Object(i.b)("strong",{parentName:"li"},"Primary Tools/Application UIs")," in the ",Object(i.b)("a",{href:"https://cmc.coc-ibm.com/cluster/qui-gon",target:"_blank",rel:"noreferrer"},"Qui Gon cluster details")," page. Open a new tab for each system. ",Object(i.b)("br",null),Object(i.b)("img",{parentName:"li",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-proactive-incident-resolution/images/5-cluster-details.png",width:800}))),Object(i.b)("br",null),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"You must reset the environment exactly 15-20 minutes before the demo starts. Reset the demo environment by following the steps below (this process takes a minute or two to complete):",Object(i.b)("br",null),Object(i.b)("br",null),"a. Go to ",Object(i.b)("strong",{parentName:"li"},"Event Manager")," and click the ",Object(i.b)("strong",{parentName:"li"},"Open menu")," icon in the top left corner (1). Then, select ",Object(i.b)("strong",{parentName:"li"},"Automations")," (2) → ",Object(i.b)("strong",{parentName:"li"},"Runbooks")," (3).",Object(i.b)("br",null),Object(i.b)("img",{parentName:"li",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-proactive-incident-resolution/images/event-manager-1.png",width:500}),Object(i.b)("br",null),"b. Click ",Object(i.b)("strong",{parentName:"li"},"Run")," on the row of the ",Object(i.b)("strong",{parentName:"li"},"Reset Ratings Service")," runbook.",Object(i.b)("br",null),Object(i.b)("img",{parentName:"li",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-proactive-incident-resolution/images/event-manager-2.png",width:800}),Object(i.b)("br",null),"c. Click ",Object(i.b)("strong",{parentName:"li"},"Start Runbook"),".",Object(i.b)("br",null),Object(i.b)("img",{parentName:"li",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-proactive-incident-resolution/images/event-manager-3.png",width:800}),Object(i.b)("br",null),"d. Click ",Object(i.b)("strong",{parentName:"li"},"Run"),". ",Object(i.b)("br",null),Object(i.b)("img",{parentName:"li",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-proactive-incident-resolution/images/event-manager-4.png",width:800}),Object(i.b)("br",null),"e. After it runs successfully, click ",Object(i.b)("strong",{parentName:"li"},"Complete"),". ",Object(i.b)("br",null),Object(i.b)("img",{parentName:"li",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-proactive-incident-resolution/images/event-manager-5.png",width:800}),Object(i.b)("br",null),"f. Provide feedback and rate the runbook (1). Then, click ",Object(i.b)("strong",{parentName:"li"},"Runbook worked")," (2).",Object(i.b)("br",null),Object(i.b)("img",{parentName:"li",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-proactive-incident-resolution/images/event-manager-6.png",width:800}))),Object(i.b)("br",null),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"Check that the ",Object(i.b)("strong",{parentName:"li"},"#qui-gon-qotd")," Slack channel is cleared (no story/incident showing).")),Object(i.b)("br",null),Object(i.b)("ol",{start:5},Object(i.b)("li",{parentName:"ol"},"You’re ready to begin your demo! Remember to execute the runbook to reset the environment when the demo is complete.")),Object(i.b)("br",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(i.b)("hr",null),Object(i.b)("p",null,"Click ",Object(i.b)("a",{parentName:"p",href:"/platinum-demos/300-watson-aiops-proactive-incident-resolution/demo-script"},"here")," to go to the ",Object(i.b)("strong",{parentName:"p"},"Demo script")," on the next tab."))}d.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-300-watson-aiops-proactive-outage-avoidance-demo-preparation-ryan-mdx-bc83db5d42e5e80bde67.js.map