(window.webpackJsonp=window.webpackJsonp||[]).push([[17,38,45,46,82],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),b=a.n(n),r=a("NmYn"),s=a.n(r),o=a("Wbzz"),l=a("Xrax"),c=a("k4MR"),i=a("TSYQ"),u=a.n(i),m=a("QH2O"),p=a.n(m),d=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,b=e.tabs,r=void 0===b?[]:b;return Object(d.b)("div",{className:u()(p.a.pageHeader,(t={},t[p.a.withTabs]=r.length,t[p.a.darkMode]="dark"===n,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:p.a.text},a)))))},A=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,b=a||n,r=b.baseUrl,s=b.subDirectory,l=r+"/edit/"+b.branch+s+"/src/pages"+t;return r?Object(d.b)("div",{className:"bx--row "+A.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:A.link,href:l},"Edit this page on GitHub"))):null},O=a("FCXl"),h=a("dI71"),f=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,b=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=s()(e,{lower:!0,strict:!0}),r=a===b,l=new RegExp(b+"/?(#.*)?$"),c=n.replace(l,a);return Object(d.b)("li",{key:e,className:u()((t={},t[f.selectedItem]=r,t),f.listItem)},Object(d.b)(o.Link,{className:f.link,to:""+c},e))}));return Object(d.b)("div",{className:f.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",{"aria-label":t},Object(d.b)("ul",{className:f.list},r))))))},t}(b.a.Component),w=a("MjG9"),x=a("CzIb"),v=a("Asxa"),k=a("OIbQ"),y=a.n(k),_=function(e){var t=e.date,a=new Date(t);return t?Object(d.b)(v.c,{className:y.a.row},Object(d.b)(v.a,null,Object(d.b)("div",{className:y.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,b=e.Title,r=t.frontmatter,i=void 0===r?{}:r,u=t.relativePagePath,m=t.titleType,p=i.tabs,A=i.title,h=i.theme,f=i.description,v=i.keywords,k=i.date,y=Object(x.a)().interiorTheme,T=Object(o.useStaticQuery)("2456312558").site.pathPrefix,B=T?n.pathname.replace(T,""):n.pathname,P=p?B.split("/").filter(Boolean).slice(-1)[0]||s()(p[0],{lower:!0}):"",R=h||y;return Object(d.b)(c.a,{tabs:p,homepage:!1,theme:R,pageTitle:A,pageDescription:f,pageKeywords:v,titleType:m},Object(d.b)(g,{title:b?Object(d.b)(b,null):A,label:"label",tabs:p,theme:R}),p&&Object(d.b)(N,{title:A,slug:B,tabs:p,currentTab:P}),Object(d.b)(w.a,{padded:!0},a,Object(d.b)(j,{relativePagePath:u}),Object(d.b)(_,{date:k})),Object(d.b)(O.a,{pageContext:t,location:n,slug:B,tabs:p,currentTab:P}),Object(d.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},icMP:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return l})),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return m}));var n=a("wx14"),b=a("zLVn"),r=(a("q1tI"),a("7ljp")),s=a("013z"),o=(a("qKvR"),["components"]),l=function(){return Object(r.b)("span",null,"Straight-through processing ",Object(r.b)("br",null)," 100-level live demo")},c={},i={Title:l,_frontmatter:c},u=s.a;function m(e){var t=e.components,a=Object(b.a)(e,o);return Object(r.b)(u,Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"17.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAADABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAIE/8QAFAEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAByUJYH//EABQQAQAAAAAAAAAAAAAAAAAAABD/2gAIAQEAAQUCf//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABQQAQAAAAAAAAAAAAAAAAAAABD/2gAIAQEABj8Cf//EABkQAQEAAwEAAAAAAAAAAAAAAAEAESFBUf/aAAgBAQABPyHieQujMX//2gAMAwEAAgADAAAAEAQv/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQMBAT8QJ//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABoQAAIDAQEAAAAAAAAAAAAAAAExABEhUWH/2gAIAQEAAT8QZCDPNjYolXNXpfZ//9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/platinum-demos/static/86877d953595506f9307abf16efe0cfe/2e753/BA_STP_100_Prep_GitHub_banner_8-3-21_short.jpg",srcSet:["/platinum-demos/static/86877d953595506f9307abf16efe0cfe/69549/BA_STP_100_Prep_GitHub_banner_8-3-21_short.jpg 288w","/platinum-demos/static/86877d953595506f9307abf16efe0cfe/473e3/BA_STP_100_Prep_GitHub_banner_8-3-21_short.jpg 576w","/platinum-demos/static/86877d953595506f9307abf16efe0cfe/2e753/BA_STP_100_Prep_GitHub_banner_8-3-21_short.jpg 1152w","/platinum-demos/static/86877d953595506f9307abf16efe0cfe/74f4b/BA_STP_100_Prep_GitHub_banner_8-3-21_short.jpg 1728w","/platinum-demos/static/86877d953595506f9307abf16efe0cfe/cbe2c/BA_STP_100_Prep_GitHub_banner_8-3-21_short.jpg 2000w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(r.b)("span",{id:"place1"}),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"DEMO OVERVIEW"),Object(r.b)("th",{parentName:"tr",align:"left"}))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Scenario overview")),Object(r.b)("td",{parentName:"tr",align:"left"},"This demo shows how the Cloud Pak for Business Automation enables straight-through processing, using a customer refund example.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Demo products")),Object(r.b)("td",{parentName:"tr",align:"left"},"Cloud Pak for Business Automation")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Demo capabilities")),Object(r.b)("td",{parentName:"tr",align:"left"},"Workflow; Decision management; Operational intelligence")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Demo script")),Object(r.b)("td",{parentName:"tr",align:"left"},"A complete demo script is on the second tab above. You can download a printer-ready PDF of the demo script ",Object(r.b)("a",{href:"/platinum-demos/29ff4495a73e69192c4dc0dfd6053f03/100-BA-STP-Demo-Script.pdf",target:"_blank",rel:"noreferrer"},"here"),". ",Object(r.b)("br",null),Object(r.b)("br",null)," This demo script has multiple tasks that each have multiple steps. In each step, you have the details about what you need to do (",Object(r.b)("strong",{parentName:"td"},"Actions"),"), what you can say while delivering this demo step (",Object(r.b)("strong",{parentName:"td"},"Narration"),"), and what diagrams and screenshots you will see. ",Object(r.b)("br",null),Object(r.b)("br",null)," This demo script is a suggestion, and you are welcome to customize based on your sales opportunity. Most importantly, practice this demo in advance. If the demo seems easy for you to execute, the customer will focus on the content. If it seems difficult for you to execute, the customer will focus on your delivery.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Demo video")),Object(r.b)("td",{parentName:"tr",align:"left"},"View the demo video ",Object(r.b)("a",{href:"https://ibm.ent.box.com/s/4yskrkefl1ssjxjmxx3kln87z5on4thx",target:"_blank",rel:"noreferrer"},"here"),". This is a short, but detailed, hands-on walkthrough of the scenario. The video is customer-ready.",Object(r.b)("br",null),Object(r.b)("br",null),"Potential uses of this video are:",Object(r.b)("br",null),Object(r.b)("br",null),"1. Familiarize yourself with the details of this scenario ",Object(r.b)("br",null),"2. Gain customer agreement that they would like to have a tech-seller do a deep-dive demo of this scenario ",Object(r.b)("br",null),"3. Use as a prospecting tool to generate customer interest in applying these capabilities")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Required versions")),Object(r.b)("td",{parentName:"tr",align:"left"},"Cloud Pak for Business Automation as a Service (or Cloud Pak for Business Automation V21.0.2)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"How to get support")),Object(r.b)("td",{parentName:"tr",align:"left"},"Contact ",Object(r.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0124J683GW",target:"_blank",rel:"noreferrer"},"#itz-techzone-support")," or ",Object(r.b)("a",{href:"mailto:techzone.help@ibm.com"},Object(r.b)("a",{parentName:"td",href:"mailto:techzone.help@ibm.com"},"techzone.help@ibm.com"))," regarding issues with reserving and provisioning TechZone environments. ",Object(r.b)("br",null),Object(r.b)("br",null)," Contact ",Object(r.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0216F39ACU",target:"_blank",rel:"noreferrer"},"#platinumdemos-automation-support")," regarding issues with setting up and running this demo use case.")))),Object(r.b)("h2",null,Object(r.b)("strong",{parentName:"h2"},"GAIN ACCESS TO AN ENVIRONMENT")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Cloud Pak for Business Automation as a Service (SaaS)"),Object(r.b)("br",null),"\nThis demo is preinstalled on Cloud Pak for Business Automation as a Service. IBM maintains multiple SaaS tenants that can be reserved and accessed by both IBMers and Business Partners. IBMers who already have permanent access to a demo tenant can log in ",Object(r.b)("a",{href:"https://www.automationcloud.ibm.com/",target:"_blank",rel:"noreferrer"},"here"),". IBMers and Business Partners who do not already have access can reserve ",Object(r.b)("a",{href:"https://techzone.ibm.com/collection/5fdfcf8b99cf35001ee4954d",target:"_blank",rel:"noreferrer"},"here"),"."),Object(r.b)("p",null,"Once your environment access is ready, continue to ",Object(r.b)("a",{parentName:"p",href:"#prepare"},"Prepare to give the demo")," below."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Alternative environment option (self-install on ROKS)"),Object(r.b)("br",null),"\nThe demo can also be deployed in a Red Hat OpenShift on IBM Cloud (ROKS) environment for complete control and administrative access. To use a TechZone ROKS cluster, go to ",Object(r.b)("a",{parentName:"p",href:"#selfinstall"},"Alternative deployment option: Self-install on ROKS"),"."),Object(r.b)("h2",null,Object(r.b)("strong",{parentName:"h2"},"PREPARE TO GIVE THE DEMO")),Object(r.b)("span",{id:"prepare"}),Object(r.b)("details",null,Object(r.b)("summary",null,"1 - Open the demo launchpad (SaaS)"),Object(r.b)("br",null),Object(r.b)("p",null,"Follow these steps for the ",Object(r.b)("strong",{parentName:"p"},"SaaS")," environment. The Refund Request Demo Launchpad is used to open all the user interfaces used in the demo."),Object(r.b)("p",null,"Access your IBM Cloud Pak for Business Automation as a Service tenant ",Object(r.b)("a",{href:"https://www.automationcloud.ibm.com/",target:"_blank",rel:"noreferrer"},"here"),".",Object(r.b)("br",null),Object(r.b)("br",null)),Object(r.b)("p",null,"a. Enter your email address and log in to IBM Cloud Pak for Business Automation as a Service. ",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-business-automation/images/Stu_1.1.png",width:800}),Object(r.b)("br",null)),Object(r.b)("p",null,"b. Click the dropdown menu in the top left corner of the screen. ",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-business-automation/images/Stu_1.1.1_tech_seller.png",width:800}),Object(r.b)("br",null)),Object(r.b)("p",null,"c. Click ",Object(r.b)("strong",{parentName:"p"},"Development")," on the left-hand side, and click ",Object(r.b)("strong",{parentName:"p"},"Production")," to switch to that environment. ",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-business-automation/images/Stu_1.1.2_tech_seller.png",width:800}),Object(r.b)("br",null)),Object(r.b)("p",null,"d. On the left-hand side, click ",Object(r.b)("strong",{parentName:"p"},"Run"),".",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-business-automation/images/Stu_1.1.3_tech_seller.png",width:800}),Object(r.b)("br",null)),Object(r.b)("p",null,"e. Click ",Object(r.b)("strong",{parentName:"p"},"Business Automation Apps"),"."),Object(r.b)("br",null),Object(r.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-business-automation/images/Stu_1.2.png",width:800}),Object(r.b)("br",null),Object(r.b)("p",null,"f. Click the ",Object(r.b)("strong",{parentName:"p"},"Refund Request")," tile."),Object(r.b)("br",null),Object(r.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-business-automation/images/Stu_1.3.png",width:800}),Object(r.b)("br",null),Object(r.b)("p",null,"The demo launchpad should now appear."),Object(r.b)("br",null),Object(r.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-business-automation/images/Stu_1.4.png",width:800}),Object(r.b)("br",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"#place1"},"Go to top")))),Object(r.b)("details",null,Object(r.b)("summary",null,"1 - Open the demo launchpad (Self-install)"),Object(r.b)("br",null),Object(r.b)("p",null,"Open ",Object(r.b)("strong",{parentName:"p"},"Navigator")," and click the ",Object(r.b)("strong",{parentName:"p"},"Refund Request")," tile.",Object(r.b)("br",null),Object(r.b)("br",null)," ",Object(r.b)("strong",{parentName:"p"},"Note:")," If you need the URL, open the OCP web console under ",Object(r.b)("strong",{parentName:"p"},"Workloads")," -> ",Object(r.b)("strong",{parentName:"p"},"Config Maps"),". Locate the ",Object(r.b)("inlineCode",{parentName:"p"},"icp4adeploy-cp4ba-access-info")," config map. Then, go to the ",Object(r.b)("strong",{parentName:"p"},"Navigator")," section of the config map to find the URL and add ",Object(r.b)("inlineCode",{parentName:"p"},"?desktop=appDesktop1")," at the end for the correct desktop.",Object(r.b)("br",null),Object(r.b)("br",null)),Object(r.b)("undefined",null,Object(r.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-business-automation/images/Stu_2.1.png",width:800}),Object(r.b)("br",null)),Object(r.b)("br",null),"The demo launchpad should now appear.",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("undefined",null,Object(r.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-business-automation/images/Stu_2.2.png",width:800}),Object(r.b)("br",null)),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"#place1"},"Go to top")))),Object(r.b)("details",null,Object(r.b)("summary",null,"2 - Open the process dashboard"),Object(r.b)("br",null),Object(r.b)("p",null,"You will open the ",Object(r.b)("strong",{parentName:"p"},"Refund Request dashboard")," in a new tab.",Object(r.b)("br",null),Object(r.b)("br",null)),Object(r.b)("p",null,"a. Go to the Refund Request Demo Launcher, and click ",Object(r.b)("strong",{parentName:"p"},"Tom, the Business Analyst"),"."),Object(r.b)("br",null),Object(r.b)("undefined",null,Object(r.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-business-automation/images/Stu_5.1.png",width:800}),Object(r.b)("br",null)),Object(r.b)("p",null,"b. From the ",Object(r.b)("strong",{parentName:"p"},"BAI Dashboards")," page, click the ",Object(r.b)("strong",{parentName:"p"},"Refund Request (RR) - Week 1")," dashboard.",Object(r.b)("br",null),Object(r.b)("br",null)),Object(r.b)("undefined",null,Object(r.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-business-automation/images/Stu_5.2.png",width:800}),Object(r.b)("br",null)),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"Refund Request (RR) - Week 1")," dashboard will open.",Object(r.b)("br",null),Object(r.b)("br",null)),Object(r.b)("undefined",null,Object(r.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-business-automation/images/Stu_5.3.png",width:800}),Object(r.b)("br",null)),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"#place1"},"Go to top")))),Object(r.b)("details",null,Object(r.b)("summary",null,"3 - Open the Decision Center"),Object(r.b)("br",null),Object(r.b)("p",null,"You will open ",Object(r.b)("strong",{parentName:"p"},"Decision Center")," in a new tab.",Object(r.b)("br",null),Object(r.b)("br",null)),Object(r.b)("p",null,"Go to the Refund Request Demo Launcher, and click ",Object(r.b)("strong",{parentName:"p"},"Emma, the Rules Manager"),"."),Object(r.b)("br",null),Object(r.b)("undefined",null,Object(r.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-business-automation/images/Stu_6.1.png",width:800}),Object(r.b)("br",null)),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Decision Center")," will open in a new tab. ",Object(r.b)("br",null),Object(r.b)("br",null)),Object(r.b)("undefined",null,Object(r.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-business-automation/images/DecisionCenter.png",width:800}),Object(r.b)("br",null)),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"#place1"},"Go to top")))),Object(r.b)("details",null,Object(r.b)("summary",null,"4 - Open the 'Focus Corp - Your Returns and Refunds' page"),Object(r.b)("br",null),Object(r.b)("p",null,"You will open the ",Object(r.b)("strong",{parentName:"p"},"Focus Corp - Your Returns and Refunds")," page in a new tab. This is where you will demonstrate how to submit the refund requests.",Object(r.b)("br",null),Object(r.b)("br",null)),Object(r.b)("p",null,"Go to the Refund Request Demo Launcher, and click ",Object(r.b)("strong",{parentName:"p"},"Anna, the Customer"),"."),Object(r.b)("br",null),Object(r.b)("undefined",null,Object(r.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-business-automation/images/Stu_7.1.png",width:800}),Object(r.b)("br",null)),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"Focus Corp - Your Returns and Refunds")," page will open. ",Object(r.b)("br",null),Object(r.b)("br",null)),Object(r.b)("undefined",null,Object(r.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-business-automation/images/Stu_7.2.png",width:800}),Object(r.b)("br",null)),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"#place1"},"Go to top")))),Object(r.b)("hr",null),Object(r.b)("p",null,"Click ",Object(r.b)("a",{parentName:"p",href:"/platinum-demos/100-business-automation/demo-script"},"here")," to go to the ",Object(r.b)("strong",{parentName:"p"},"Demo script")," on the next tab."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-100-business-automation-demo-preparation-mdx-06f8f3b2aebe0c5a70d9.js.map