(window.webpackJsonp=window.webpackJsonp||[]).push([[26,31,33,34],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),b=n.n(a),r=n("NmYn"),l=n.n(r),o=n("Wbzz"),c=n("Xrax"),s=n("k4MR"),i=n("TSYQ"),u=n.n(i),d=n("QH2O"),p=n.n(d),O=n("qKvR"),m=function(e){var t,n=e.title,a=e.theme,b=e.tabs,r=void 0===b?[]:b;return Object(O.b)("div",{className:u()(p.a.pageHeader,(t={},t[p.a.withTabs]=r.length,t[p.a.darkMode]="dark"===a,t))},Object(O.b)("div",{className:"bx--grid"},Object(O.b)("div",{className:"bx--row"},Object(O.b)("div",{className:"bx--col-lg-12"},Object(O.b)("h1",{id:"page-title",className:p.a.text},n)))))},j=n("BAC9"),h=function(e){var t=e.relativePagePath,n=e.repository,a=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,b=n||a,r=b.baseUrl,l=b.subDirectory,c=r+"/edit/"+b.branch+l+"/src/pages"+t;return r?Object(O.b)("div",{className:"bx--row "+j.row},Object(O.b)("div",{className:"bx--col"},Object(O.b)("a",{className:j.link,href:c},"Edit this page on GitHub"))):null},g=n("FCXl"),N=n("dI71"),f=n("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(N.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,a=e.slug,b=a.split("/").filter(Boolean).slice(-1)[0],r=n.map((function(e){var t,n=l()(e,{lower:!0,strict:!0}),r=n===b,c=new RegExp(b+"/?(#.*)?$"),s=a.replace(c,n);return Object(O.b)("li",{key:e,className:u()((t={},t[f.selectedItem]=r,t),f.listItem)},Object(O.b)(o.Link,{className:f.link,to:""+s},e))}));return Object(O.b)("div",{className:f.tabsContainer},Object(O.b)("div",{className:"bx--grid"},Object(O.b)("div",{className:"bx--row"},Object(O.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(O.b)("nav",{"aria-label":t},Object(O.b)("ul",{className:f.list},r))))))},t}(b.a.Component),S=n("MjG9"),y=n("CzIb"),k=n("Asxa"),T=n("OIbQ"),v=n.n(T),x=function(e){var t=e.date,n=new Date(t);return t?Object(O.b)(k.c,{className:v.a.row},Object(O.b)(k.a,null,Object(O.b)("div",{className:v.a.text},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,b=e.Title,r=t.frontmatter,i=void 0===r?{}:r,u=t.relativePagePath,d=t.titleType,p=i.tabs,j=i.title,N=i.theme,f=i.description,k=i.keywords,T=i.date,v=Object(y.a)().interiorTheme,_=Object(o.useStaticQuery)("2456312558").site.pathPrefix,R=_?a.pathname.replace(_,""):a.pathname,A=p?R.split("/").filter(Boolean).slice(-1)[0]||l()(p[0],{lower:!0}):"",P=N||v;return Object(O.b)(s.a,{tabs:p,homepage:!1,theme:P,pageTitle:j,pageDescription:f,pageKeywords:k,titleType:d},Object(O.b)(m,{title:b?Object(O.b)(b,null):j,label:"label",tabs:p,theme:P}),p&&Object(O.b)(w,{title:j,slug:R,tabs:p,currentTab:A}),Object(O.b)(S.a,{padded:!0},n,Object(O.b)(h,{relativePagePath:u}),Object(O.b)(x,{date:T})),Object(O.b)(g.a,{pageContext:t,location:a,slug:R,tabs:p,currentTab:A}),Object(O.b)(c.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,n){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},fh6d:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n("wx14"),b=n("zLVn"),r=(n("q1tI"),n("7ljp")),l=n("013z"),o=(n("qKvR"),["components"]),c={},s={_frontmatter:c},i=l.a;function u(e){var t=e.components,n=Object(b.a)(e,o);return Object(r.b)(i,Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"[BA_STP_300_Prep_GitHub_banner_7-30-21]","(./images/BA_STP_300_Prep_GitHub_banner_7-30-21.png” width=“900”)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Preparation"),Object(r.b)("th",{parentName:"tr",align:"left"}))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Scenario overview")),Object(r.b)("td",{parentName:"tr",align:"left"},"This demo shows how the IBM Cloud Pak for Business Automation enables straight-through processing. To illustrate this, a customer’s refund process is automated. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," The capabilities used in this demo are workflow, decisions, and operational intelligence.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Demo outline")),Object(r.b)("td",{parentName:"tr",align:"left"},"Introduction ",Object(r.b)("br",null)," 1. Model workflow ",Object(r.b)("br",null)," 2. Execute workflow without straight-through processing ",Object(r.b)("br",null)," 3. Change the workflow for straight-through processing ",Object(r.b)("br",null)," 4. Execute workflow with straight-through processing ",Object(r.b)("br",null)," 5. Monitor operational intelligence ",Object(r.b)("br",null)," 6. Model decisions ",Object(r.b)("br",null)," 7. Reduce manual work ",Object(r.b)("br",null)," Summary")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Before the demo")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Requisition instructions")," ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," IBM maintains a SaaS environment that can be accessed by IBM employees. Business Partners and IBMers can deploy the solution onto a ROKS environment. At the current time, the SaaS environment is restricted for privacy and confidentiality reasons to employees of IBM. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Select a delivery option: ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," 1.\t",Object(r.b)("strong",{parentName:"td"},"SaaS"),": Using the Cloud Pak for Business Automation as a Service demo environment (likely an IBMer). If you need to request access, follow the instructions ",Object(r.b)("a",{parentName:"td",href:"https://techzone.ibm.com/collection/5fdfcf8b99cf35001ee4954d"},"here"),". Your environment is pre-deployed. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," 2.\t",Object(r.b)("strong",{parentName:"td"},"Self-install"),": Install on a TechZone cluster. ",Object(r.b)("br",null)," Step 1: Reserve on TechZone ",Object(r.b)("br",null)," For IBMers and Business Partners that have access to TechZone, reserve a Cloud Pak for Automation OpenShift Demo Environment via the ",Object(r.b)("a",{parentName:"td",href:"https://techzone.ibm.com/collection/5ef5196556dfa7001728cb71#tab-1"},"Straight-through processing")," TechZone page. ",Object(r.b)("br",null)," Step 2: Install the demo. ",Object(r.b)("br",null)," Access the ",Object(r.b)("a",{parentName:"td",href:"https://github.com/ibm-cloud-architecture/dba-refund-request"},"dba-refund-request")," GitHub page to read technical architecture information and find deployment instructions. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," 3. ",Object(r.b)("strong",{parentName:"td"},"Self-install"),": Install the demo into your own cluster. This is an advanced option. You will need own OpenShift-based cluster with the Cloud Pak for Business Automation installed and configured for access to all the required user interfaces. ",Object(r.b)("br",null)," Access the ",Object(r.b)("a",{parentName:"td",href:"https://github.com/ibm-cloud-architecture/dba-refund-request"},"dba-refund-request")," GitHub page to read technical architecture information and find deployment instructions. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Once your environment is ready, continue to the next steps below.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Key demo considerations")),Object(r.b)("td",{parentName:"tr",align:"left"},"The demo environment is set to automatically inject an error into the application once every hour. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," The cycle begins on the half-hour (so 9:30, 10:30, etc). You should see errors begin to show up a few minutes after this (around 32 or 33 minutes past the hour). ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," The error will resolve itself and go back to a normal state after about 10 minutes. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," There are a few options for how to give demos, given how this demo environment functions. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," 1.\tSchedule a meeting so that you can begin a live demo at 30 minutes past the hour. This will allow you to show the active incident in real time. ",Object(r.b)("br",null)," 2.\tRun through the demo flow using a past incident. You can set the time period to when an incident was active (instructions are in the demo script). You will be able to run through the same scenario, except it will not show the incident alerts on the events icon on the sidebar. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," 3.\tPrior to a meeting, coinciding with an error cycle time, take a screen recording of yourself going through the demo environment following the storyline in the script. Then, you can play the recording and speak to it live. ",Object(r.b)("br",null)," 4.\tUse the Platinum Demo video or the click-thru demo, both of which roughly follow the same flow. The video also includes a voiceover, which you can either use or mute and speak to it live. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," After doing option 3 or 4, you can always go into the demo environment to show customers the capabilities in more depth and/or go back through the incident flow as in option 2 above.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"How to get support")),Object(r.b)("td",{parentName:"tr",align:"left"},"Please direct any questions in preparation for the demo to the ",Object(r.b)("strong",{parentName:"td"},"#Techdemos-Automation-Support")," Slack channel.")))),Object(r.b)("hr",null),Object(r.b)("h2",null,"Key demo considerations"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"1 - Open the Refund Request Demo Launchpad - SaaS")),Object(r.b)("th",{parentName:"tr",align:"left"}))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Description")),Object(r.b)("td",{parentName:"tr",align:"left"},"Follow these steps for the ",Object(r.b)("strong",{parentName:"td"},"SaaS")," environment. The Refund Request Demo Launchpad is used to open all the user interfaces used in the demo.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Actions")),Object(r.b)("td",{parentName:"tr",align:"left"},"For ",Object(r.b)("strong",{parentName:"td"},"SaaS"),", follow these steps: ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," 1 - Access your IBM Cloud Pak for Business Automation as a Service tenet ",Object(r.b)("a",{parentName:"td",href:"https://www.automationcloud.ibm.com/"},"here"),". Enter your email address. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Steps 1.1, 1.2, and 1.3 are for ",Object(r.b)("strong",{parentName:"td"},"technical sellers only"),". Most technical sellers initially land in the development environment. If this happens to you, follow these steps to get to the production/runtime environment: ",Object(r.b)("br",null)," 1.1 - Click on the dropdown menu in the top left corner of the screen. ",Object(r.b)("br",null)," 1.2 - Click Deployment on the left-hand side and click Production to switch to that environment. ",Object(r.b)("br",null)," 1.3 - On the left-hand side click Run. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," 2 - Click Business Automation Apps. ",Object(r.b)("br",null)," 3 - Click on the Refund Request tile. ",Object(r.b)("br",null)," 4 - The demo launchpad should now appear.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Screenshots")),Object(r.b)("td",{parentName:"tr",align:"left"}," ","  ",Object(r.b)("br",null)," Action 1 ",Object(r.b)("br",null)," ","[1.1]","(./images/Stu_1.1.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Action 1.1 (technical seller only) ",Object(r.b)("br",null)," ","[1.1.1_tech_seller]","(./images/Stu_1.1.1_tech_seller.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Action 1.2 (technical seller only) ",Object(r.b)("br",null)," ","[1.1.2_tech_seller]","(./images/Stu_1.1.2_tech_seller.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Action 1.3 (technical seller only) ",Object(r.b)("br",null)," ","[1.1.3_tech_seller]","(./images/Stu_1.1.3_tech_seller.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Action 2 ",Object(r.b)("br",null)," ","[1.2]","(./images/Stu_1.2.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Action 3 ",Object(r.b)("br",null)," ","[1.3]","(./images/Stu_1.3.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Final screen ",Object(r.b)("br",null)," ","[Final screen]","(./images/Stu_1.4.png” width=“600”)")))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"2 - Open the Refund Request Demo Launchpad – Self-install")),Object(r.b)("th",{parentName:"tr",align:"left"}))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Description")),Object(r.b)("td",{parentName:"tr",align:"left"},"Follow these steps for ",Object(r.b)("strong",{parentName:"td"},"self-installed")," environments. The Refund Request Demo Launchpad is used to open all the user interfaces you will use in the demo.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Actions")),Object(r.b)("td",{parentName:"tr",align:"left"},"1. Open the ",Object(r.b)("strong",{parentName:"td"},"Navigator")," app. Click on the ",Object(r.b)("strong",{parentName:"td"},"Refund Request")," tile. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," If you need the URL, open the OCP console under ",Object(r.b)("strong",{parentName:"td"},"Workloads")," -> ",Object(r.b)("strong",{parentName:"td"},"Config Maps"),". Locate the ",Object(r.b)("strong",{parentName:"td"},"icp4adeploy-cp4ba-access-info")," config map. Then, go to the ",Object(r.b)("strong",{parentName:"td"},"Navigator")," section of the config map to find the URL and add ",Object(r.b)("strong",{parentName:"td"},"?desktop=appDesktop1")," at the end for the correct desktop. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," 2.\tThe demo launchpad should now appear.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Screenshots")),Object(r.b)("td",{parentName:"tr",align:"left"}," ","  ",Object(r.b)("br",null)," Action 1 ",Object(r.b)("br",null)," ","[2.1]","(./images/Stu_2.1.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Final screen ",Object(r.b)("br",null)," ","[Final screen]","(./images/Stu_2.2.png” width=“600”)")))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"3 - Open the process diagram for refund request without straight-through processing inside Workflow Process Designer")),Object(r.b)("th",{parentName:"tr",align:"left"}))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Description")),Object(r.b)("td",{parentName:"tr",align:"left"},"Open a browser tab with ",Object(r.b)("strong",{parentName:"td"},"Workflow Process Designer")," and open the ",Object(r.b)("strong",{parentName:"td"},"Refund Request without Straight-through Processing")," process diagram.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Actions")),Object(r.b)("td",{parentName:"tr",align:"left"},"1 - Go to the ",Object(r.b)("strong",{parentName:"td"},"Refund Request Demo Launcher")," and click ",Object(r.b)("strong",{parentName:"td"},"Process Analyst"),". ",Object(r.b)("br",null)," 2 - Use the provided URL to open ",Object(r.b)("strong",{parentName:"td"},"Business Automation Studio")," in a new tab. ",Object(r.b)("br",null)," 3 - From the top left-hand menu, select ",Object(r.b)("strong",{parentName:"td"},"Design")," and then ",Object(r.b)("strong",{parentName:"td"},"Business Automations"),". ",Object(r.b)("br",null)," 4 - From the ",Object(r.b)("strong",{parentName:"td"},"Business Automations")," page, select ",Object(r.b)("strong",{parentName:"td"},"Workflow"),". ",Object(r.b)("br",null)," 5 - Within the ",Object(r.b)("strong",{parentName:"td"},"Refund Request")," tile, select ",Object(r.b)("strong",{parentName:"td"},"Open"),". ",Object(r.b)("br",null)," 6 - Inside the ",Object(r.b)("strong",{parentName:"td"},"Process App"),", select ",Object(r.b)("strong",{parentName:"td"},"Processes"),", ",Object(r.b)("strong",{parentName:"td"},"Refund Request without STP"),". ",Object(r.b)("br",null)," 7 - The ",Object(r.b)("strong",{parentName:"td"},"Refund Request without STP")," process diagram will open. Note: This will be the tab to display when you start the demo.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Screenshots")),Object(r.b)("td",{parentName:"tr",align:"left"}," ","  ",Object(r.b)("br",null)," Action 1 ",Object(r.b)("br",null)," ","[3.1]","(./images/Stu_3.1.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Action 2 ",Object(r.b)("br",null)," ","[3.2]","(./images/Stu_3.2.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Action 3 ",Object(r.b)("br",null)," ","[3.3]","(./images/Stu_3.3.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Action 4 ",Object(r.b)("br",null)," ","[3.4]","(./images/Stu_3.4.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Action 5 ",Object(r.b)("br",null)," ","[3.5]","(./images/Stu_3.5.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Action 6 ",Object(r.b)("br",null)," ","[3.6]","(./images/Stu_3.6.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Final screen ",Object(r.b)("br",null)," ","[Final screen]","(./images/Stu_3.7.png” width=“600”)")))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"4 - Open task list and populate some in-flight tasks")),Object(r.b)("th",{parentName:"tr",align:"left"}))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Description")),Object(r.b)("td",{parentName:"tr",align:"left"},"Open the task list view in a new tab. (",Object(r.b)("strong",{parentName:"td"},"SaaS Process Portal")," is used since Workplace is not yet available on SaaS.) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Also, populate some in-flight process instances, so there are some tasks in the inbox. Note: The tasks will be automatically deleted after 12 hours to keep things clean for other users.)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Actions")),Object(r.b)("td",{parentName:"tr",align:"left"},"1 - Go to the ",Object(r.b)("strong",{parentName:"td"},"Refund Request Demo Launcher")," and click on the ",Object(r.b)("strong",{parentName:"td"},"Refund Investigator"),". ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," 2 - The task list view will open in a new tab as follows: ",Object(r.b)("br",null)," 2.1 (",Object(r.b)("strong",{parentName:"td"},"Saas"),") - Process Portal will open in a new tab (the new Workplace is not yet available on SaaS). ",Object(r.b)("br",null)," 2.2 (",Object(r.b)("strong",{parentName:"td"},"Self-install"),") - Workplace will open in a new tab. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," 3 (",Object(r.b)("strong",{parentName:"td"},"SaaS"),") - Populate some in-flight tasks from ",Object(r.b)("strong",{parentName:"td"},"Process Portal"),": ",Object(r.b)("br",null)," 3.1 (",Object(r.b)("strong",{parentName:"td"},"SaaS"),") - REPEAT THREE TIMES: Under ",Object(r.b)("strong",{parentName:"td"},"Launch"),", click on ",Object(r.b)("strong",{parentName:"td"},"Request Refund"),". Click ",Object(r.b)("strong",{parentName:"td"},"three times")," to generate three new tasks. ",Object(r.b)("br",null)," 3.2 (",Object(r.b)("strong",{parentName:"td"},"SaaS"),") - REPEAT TWO TIMES: Under ",Object(r.b)("strong",{parentName:"td"},"Launch"),", click on ",Object(r.b)("strong",{parentName:"td"},"Quote Exception"),". Click ",Object(r.b)("strong",{parentName:"td"},"two times")," to generate two new tasks. ",Object(r.b)("br",null)," 3.3 (",Object(r.b)("strong",{parentName:"td"},"SaaS"),") - You should now see (at least) five tasks in the task inbox. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," 4 (",Object(r.b)("strong",{parentName:"td"},"Self-install"),") - Populate some in-flight tasks from Workplace: ",Object(r.b)("br",null)," 4.1 (",Object(r.b)("strong",{parentName:"td"},"Self-install"),") - From ",Object(r.b)("strong",{parentName:"td"},"Workplace"),", click on ",Object(r.b)("strong",{parentName:"td"},"Start Workflow"),". ",Object(r.b)("br",null)," 4.2 (",Object(r.b)("strong",{parentName:"td"},"Self-install"),") - REPEAT THREE TIMES:  Select the ",Object(r.b)("strong",{parentName:"td"},"Refund Request")," tile (may need to scroll down). Then, select Tip. Then, select ",Object(r.b)("strong",{parentName:"td"},"Launch"),". Repeat ",Object(r.b)("strong",{parentName:"td"},"three times")," to generate three tasks. ",Object(r.b)("br",null)," 4.3 (",Object(r.b)("strong",{parentName:"td"},"Self-install"),") - REPEAT TWO TIMES:  Click on ",Object(r.b)("strong",{parentName:"td"},"Start Workflow"),", Select the ",Object(r.b)("strong",{parentName:"td"},"Quote Exception")," tile (may need to scroll down). Then, select ",Object(r.b)("strong",{parentName:"td"},"Tip"),". Then, select ",Object(r.b)("strong",{parentName:"td"},"Launch"),". Repeat two times to generate two tasks. ",Object(r.b)("br",null)," 4.4 (",Object(r.b)("strong",{parentName:"td"},"Self-install"),") - You should now see (at least) five tasks in the task inbox.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Screenshots")),Object(r.b)("td",{parentName:"tr",align:"left"}," ","  ",Object(r.b)("br",null)," Action 1 ",Object(r.b)("br",null)," ","[4.1]","(./images/Stu_4.1.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Action 2.1 (SaaS) ",Object(r.b)("br",null)," ","[4.2.1 (SaaS)]","(./images/Stu_4.2.1_SaaS.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Action 2.2 (Self-install) ",Object(r.b)("br",null)," ","[4.2.2 (Self-install)]","(./images/Stu_4.2.2_Self_Install.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Action 3.1 (SaaS) ",Object(r.b)("br",null)," ","[4.3.1 (SaaS)]","(./images/Stu_4.3.1_SaaS.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Action 3.2 (SaaS) ",Object(r.b)("br",null)," ","[4.3.2 (SaaS)]","(./images/Stu_4.3.2_SaaS.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Action 3.3 (SaaS) ",Object(r.b)("br",null)," ","[4.3.3 (SaaS)]","(./images/Stu_4.3.3_SaaS.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Action 4.1 (Self-install) ",Object(r.b)("br",null)," ","[4.4.1 (Self-install)]","(./images/Stu_4.4.1_Self Install.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Action 4.2 (Self-install) ",Object(r.b)("br",null)," ","[4.4.2 (Self-install)]","(./images/Stu_4.4.2_Self_Install.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Action 4.3 (Self-install) ",Object(r.b)("br",null)," ","[4.4.3 (Self-install)]","(./images/Stu_4.4.3_Self_install.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Action 4.4 (Self-install) ",Object(r.b)("br",null)," ","[4.4.4 (Self-install)]","(./images/Stu_4.4.4_Self_install.png” width=“600”)")))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"5 - Open Refund Request Dashboard")),Object(r.b)("th",{parentName:"tr",align:"left"}))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Description")),Object(r.b)("td",{parentName:"tr",align:"left"},"Open the ",Object(r.b)("strong",{parentName:"td"},"Refund Request Dashboard")," in a new tab.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Actions")),Object(r.b)("td",{parentName:"tr",align:"left"},"1 - Go to the ",Object(r.b)("strong",{parentName:"td"},"Demo Launcher")," and click on the ",Object(r.b)("strong",{parentName:"td"},"Business Analyst"),". ",Object(r.b)("br",null)," 2 - From the ",Object(r.b)("strong",{parentName:"td"},"BAI Dashboards")," page, click on the ",Object(r.b)("strong",{parentName:"td"},"Refund Request (RR) Week1")," dashboard. ",Object(r.b)("br",null)," 3 - The ",Object(r.b)("strong",{parentName:"td"},"Refund Request (RR) - Week 1")," dashboard will open.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Screenshots")),Object(r.b)("td",{parentName:"tr",align:"left"}," ","  ",Object(r.b)("br",null)," Action 1 ",Object(r.b)("br",null)," ","[5.1]","(./images/Stu_5.1.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Action 2 ",Object(r.b)("br",null)," ","[5.2]","(./images/Stu_5.2.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Final screen ",Object(r.b)("br",null)," ","[Final screen]","(./images/Stu_5.3.png” width=“600”)")))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"6 - Open Decision Center")),Object(r.b)("th",{parentName:"tr",align:"left"}))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Description")),Object(r.b)("td",{parentName:"tr",align:"left"},"Open ",Object(r.b)("strong",{parentName:"td"},"Decision Center")," in a new tab.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Actions")),Object(r.b)("td",{parentName:"tr",align:"left"},"1 - Go to the ",Object(r.b)("strong",{parentName:"td"},"Demo Launcher")," and click on the ",Object(r.b)("strong",{parentName:"td"},"Rules Manager"),". ",Object(r.b)("br",null)," 2 - ",Object(r.b)("strong",{parentName:"td"},"Decision Center")," will open in a new tab.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Screenshots")),Object(r.b)("td",{parentName:"tr",align:"left"}," ","  ",Object(r.b)("br",null)," Action 1 ",Object(r.b)("br",null)," ","[6.1]","(./images/Stu",Object(r.b)("em",{parentName:"td"},"6.1.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Final screen ",Object(r.b)("br",null)," ","[Final screen]","(./images/Stu_6.2"),".png” width=“600”)")))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"7 - Open Focus Corp’s Your Returns and Refunds page")),Object(r.b)("th",{parentName:"tr",align:"left"}))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Description")),Object(r.b)("td",{parentName:"tr",align:"left"},"Open Focus Corp’s ",Object(r.b)("strong",{parentName:"td"},"Your Returns and Refunds")," page in a new tab. This is where you will show submitting the refund requests.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Actions")),Object(r.b)("td",{parentName:"tr",align:"left"},"1 - Go to the ",Object(r.b)("strong",{parentName:"td"},"Demo Launcher"),", and click on the ",Object(r.b)("strong",{parentName:"td"},"Customer"),". ",Object(r.b)("br",null)," 2 - Go to Focus Corp’s ",Object(r.b)("strong",{parentName:"td"},"Your Returns and Refunds")," page.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Screenshots")),Object(r.b)("td",{parentName:"tr",align:"left"}," ","  ",Object(r.b)("br",null)," Action 1 ",Object(r.b)("br",null)," ","[7.1]","(./images/Stu_7.1.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Final screen ",Object(r.b)("br",null)," ","[Final screen]","(./images/Stu_7.2.png” width=“600”)")))),Object(r.b)("hr",null),Object(r.b)("h2",null,"How to get support"),Object(r.b)("p",null,"Please direct any questions in preparation for the demo to the ",Object(r.b)("strong",{parentName:"p"},"#Techdemos-Automation-Support")," Slack channel."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-300-business-automation-demo-preparation-mdx-ba3b99a20c2ea74f71d6.js.map