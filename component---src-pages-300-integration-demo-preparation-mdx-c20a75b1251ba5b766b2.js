(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),b=a("NmYn"),o=a.n(b),l=a("Wbzz"),i=a("Xrax"),s=a("k4MR"),c=a("TSYQ"),p=a.n(c),m=a("QH2O"),u=a.n(m),d=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,r=e.tabs,b=void 0===r?[]:r;return Object(d.b)("div",{className:p()(u.a.pageHeader,(t={},t[u.a.withTabs]=b.length,t[u.a.darkMode]="dark"===n,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:u.a.text},a)))))},O=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,b=r.baseUrl,o=r.subDirectory,i=b+"/edit/"+r.branch+o+"/src/pages"+t;return b?Object(d.b)("div",{className:"bx--row "+O.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:O.link,href:i},"Edit this page on GitHub"))):null},h=a("FCXl"),A=a("dI71"),N=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(A.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],b=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),b=a===r,i=new RegExp(r+"/?(#.*)?$"),s=n.replace(i,a);return Object(d.b)("li",{key:e,className:p()((t={},t[N.selectedItem]=b,t),N.listItem)},Object(d.b)(l.Link,{className:N.link,to:""+s},e))}));return Object(d.b)("div",{className:N.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",{"aria-label":t},Object(d.b)("ul",{className:N.list},b))))))},t}(r.a.Component),y=a("MjG9"),w=a("CzIb"),v=a("Asxa"),I=a("OIbQ"),P=a.n(I),x=function(e){var t=e.date,a=new Date(t);return t?Object(d.b)(v.c,{className:P.a.row},Object(d.b)(v.a,null,Object(d.b)("div",{className:P.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,b=t.frontmatter,c=void 0===b?{}:b,p=t.relativePagePath,m=t.titleType,u=c.tabs,O=c.title,A=c.theme,N=c.description,v=c.keywords,I=c.date,P=Object(w.a)().interiorTheme,C=Object(l.useStaticQuery)("2456312558").site.pathPrefix,k=C?n.pathname.replace(C,""):n.pathname,T=u?k.split("/").filter(Boolean).slice(-1)[0]||o()(u[0],{lower:!0}):"",E=A||P;return Object(d.b)(s.a,{tabs:u,homepage:!1,theme:E,pageTitle:O,pageDescription:N,pageKeywords:v,titleType:m},Object(d.b)(g,{title:r?Object(d.b)(r,null):O,label:"label",tabs:u,theme:E}),u&&Object(d.b)(f,{title:O,slug:k,tabs:u,currentTab:T}),Object(d.b)(y.a,{padded:!0},a,Object(d.b)(j,{relativePagePath:p}),Object(d.b)(x,{date:I})),Object(d.b)(h.a,{pageContext:t,location:n,slug:k,tabs:u,currentTab:T}),Object(d.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},s6RB:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return s})),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return d}));var n,r=a("wx14"),b=a("zLVn"),o=(a("q1tI"),a("7ljp")),l=a("013z"),i=(a("qKvR"),["components"]),s=function(){return Object(o.b)("span",null,"API-enabled application integration ",Object(o.b)("br",null)," 300-level live demo")},c={},p=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),m={Title:s,_frontmatter:c},u=l.a;function d(e){var t=e.components,a=Object(b.a)(e,i);return Object(o.b)(u,Object(r.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"17.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAADABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQC/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQAC/9oADAMBAAIQAxAAAAGTZFANf//EABcQAQADAAAAAAAAAAAAAAAAAAIAAQP/2gAIAQEAAQUCmjVHNqp//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFxAAAwEAAAAAAAAAAAAAAAAAAAERQf/aAAgBAQAGPwIl0aT0/8QAGRABAQADAQAAAAAAAAAAAAAAAQARIUFh/9oACAEBAAE/IePlhhgMgdQT/9oADAMBAAIAAwAAABAH7//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAEDAQE/ECf/xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPxBn/8QAHBABAAICAwEAAAAAAAAAAAAAAQARITFBUWHh/9oACAEBAAE/EDRwMeZggRYOr+sYiUQ3WCf/2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/platinum-demos/static/3789b63399db5a77a80896fb08467739/2e753/300-int-API-enabled-prep-GitHub-banner-8-3-21-short.jpg",srcSet:["/platinum-demos/static/3789b63399db5a77a80896fb08467739/69549/300-int-API-enabled-prep-GitHub-banner-8-3-21-short.jpg 288w","/platinum-demos/static/3789b63399db5a77a80896fb08467739/473e3/300-int-API-enabled-prep-GitHub-banner-8-3-21-short.jpg 576w","/platinum-demos/static/3789b63399db5a77a80896fb08467739/2e753/300-int-API-enabled-prep-GitHub-banner-8-3-21-short.jpg 1152w","/platinum-demos/static/3789b63399db5a77a80896fb08467739/74f4b/300-int-API-enabled-prep-GitHub-banner-8-3-21-short.jpg 1728w","/platinum-demos/static/3789b63399db5a77a80896fb08467739/cbe2c/300-int-API-enabled-prep-GitHub-banner-8-3-21-short.jpg 2000w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(o.b)("h3",null,Object(o.b)("strong",{parentName:"h3"},"WARNING"),":\u2028\u2028\u2028\u2028 May 10, 2022. This demonstration’s 1-click installation occasionally fails. We have added optional instructions to use the Demo Operator for demo creation. See step 7 in the ",Object(o.b)("a",{parentName:"h3",href:"#ROKSinstall"},"“2 - Install Cloud Pak for Integration on ROKS cluster”")," section below. Should you prefer to continue to use the original mechanism and errors occur, please raise a ticket on the ",Object(o.b)("a",{href:"https://www.ibm.com/mysupport",target:"_blank",rel:"noreferrer"},"IBM Support Portal")," mentioning “1 click install”. We are working very closely with support, who will assist you in getting your environment running."),Object(o.b)("span",{id:"top"}),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"DEMO OVERVIEW"),Object(o.b)("th",{parentName:"tr",align:null}))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"Scenario overview")),Object(o.b)("td",{parentName:"tr",align:null},"Access applications through APIs and integrations. Use Watson AI together with SaaS connectivity to Salesforce and ServiceNow to create a self-service car repair API giving customers real-time estimates and integrating directly with record systems. The demo shows easy API creation with no-code App Connect Designer, rate limiting plans, security policies and self-service API consumption using the API Connect portal.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"Demo products")),Object(o.b)("td",{parentName:"tr",align:null},"Cloud Pak for Integration")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"Demo capabilities")),Object(o.b)("td",{parentName:"tr",align:null},"IBM App Connect Enterprise; IBM App Connect Enterprise Designer; API Connect (APIC)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"Demo guidance")),Object(o.b)("td",{parentName:"tr",align:null},"This demo script has multiple tasks that each have multiple steps. In each step, you have the details about what you need to do (",Object(o.b)("strong",{parentName:"td"},"Actions"),"), what you can say while delivering this demo step (",Object(o.b)("strong",{parentName:"td"},"Narration"),"), and what diagrams and screenshots you will see.",Object(o.b)("br",null),Object(o.b)("br",null),"This demo script is a suggestion, and you are welcome to customize based on your sales opportunity. Most importantly, practice this demo in advance. If the demo seems easy for you to execute, the customer will focus on the content. If it seems difficult for you to execute, the customer will focus on your delivery.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"Required versions")),Object(o.b)("td",{parentName:"tr",align:null},"Cloud Pak for Integration V2021.3")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"How to get support")),Object(o.b)("td",{parentName:"tr",align:null},"Contact ",Object(o.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0124J683GW",target:"_blank",rel:"noreferrer"},"#itz-techzone-support")," or ",Object(o.b)("a",{href:"mailto:techzone.help@ibm.com"},Object(o.b)("a",{parentName:"td",href:"mailto:techzone.help@ibm.com"},"techzone.help@ibm.com"))," regarding issues with reserving and provisioning TechZone environments. ",Object(o.b)("br",null),Object(o.b)("br",null)," Contact ",Object(o.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0216F39ACU",target:"_blank",rel:"noreferrer"},"#platinumdemos-automation-support")," regarding issues with setting up and running this demo use case.")))),Object(o.b)("h3",null,Object(o.b)("strong",{parentName:"h3"},"DEMO INSTALLATION AND SETUP")),Object(o.b)("details",null,Object(o.b)("summary",null,"1 - Provision a Cloud Pak for Integration environment"),Object(o.b)("br",null),Object(o.b)("p",null,"Install Cloud Pak for Integration, or provision a ROKS environment. To reserve your ROKS instance, follow these steps: ",Object(o.b)("br",null),Object(o.b)("br",null)),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"To reserve a preinstalled Cloud Pak for Integration (CP4I) ROKS 4.6 cluster on Red Hat OpenShift, go ",Object(o.b)("a",{href:"https://techzone.ibm.com/my/reservations/create/611bf99bd21122001e42d3fc",target:"_blank",rel:"noreferrer"},"here")," and complete the form. (If you do not have a sales opportunity, select the purpose ",Object(o.b)("strong",{parentName:"li"},"Practice / Self-Education")," to create a two-week reservation.)")),Object(o.b)("br",null),Object(o.b)(p,{mdxType:"InlineNotification"},Object(o.b)("strong",null,"NOTE")," If there are no clusters availabile in Express installation, go ahead with the Custom installation. While the process is the same, Express is a 5 minute request (because you will receive a pre-created ROKS cluster from a queue), and custom is a 2 hour provisioning (because the ROKS cluster will be installed, behind the scenes, from scratch for you)."),Object(o.b)("br",null),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"You will receive a confirmation email confirming the instance is provisioning.",Object(o.b)("br",null),Object(o.b)("br",null))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"You will receive a second email once the environment is provisioned. You should expect this to take about 30 minutes. This email contains information, such as URLs, allowing you to connect to the instance."),Object(o.b)("undefined",{parentName:"li"},Object(o.b)("br",null),"If you have issues connecting to your instance, please contact ",Object(o.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0124J683GW",target:"_blank",rel:"noreferrer"},"#itz-techzone-support"),".\n",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration/images/prep-image006.png",width:800}),Object(o.b)("br",null)))),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("span",{id:"ROKSinstall"}),Object(o.b)("details",null,Object(o.b)("summary",null,"2 - Install Cloud Pak for Integration on ROKS cluster"),Object(o.b)("br",null),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("strong",{parentName:"li"},"Cluster URL")," from the enviroment confirmation email. Log into IBM Cloud using your IBMid.",Object(o.b)("br",null),Object(o.b)("img",{parentName:"li",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration/images/prep-image2.1.png",width:800}))),Object(o.b)("br",null),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"After you are logged in, click ",Object(o.b)("a",{href:"https://cloud.ibm.com/catalog/content/ibm-cp-integration-72f63273-f2f6-4e9c-8626-60fe798c57be-global",target:"_blank",rel:"noreferrer"},"here")," to install Cloud Pak for Integration.",Object(o.b)("br",null),Object(o.b)("br",null),"Make sure you are in an ",Object(o.b)("strong",{parentName:"li"},"ITZ")," account (1) and the ",Object(o.b)("strong",{parentName:"li"},"Product version")," is 2021.4.1-0 (2).",Object(o.b)("br",null),Object(o.b)("img",{parentName:"li",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration/images/prep-image2.2.png",width:800}))),Object(o.b)("br",null),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Scroll down to the ",Object(o.b)("strong",{parentName:"li"},"Select your cluster")," section. From the list, select the Redhat Openshift Cluster (1) that you just created. Then click ",Object(o.b)("strong",{parentName:"li"},"Add project")," (2).",Object(o.b)("undefined",{parentName:"li"},Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration/images/prep-image2.3.png",width:800})))),Object(o.b)("br",null),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Enter ",Object(o.b)("strong",{parentName:"li"},"cp4i")," as the ",Object(o.b)("strong",{parentName:"li"},"Project")," (1) name. Click ",Object(o.b)("strong",{parentName:"li"},"Add")," (2).",Object(o.b)("undefined",{parentName:"li"},Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration/images/prep-image2.4.png",width:500})))),Object(o.b)("br",null),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"Scroll down to the ",Object(o.b)("strong",{parentName:"li"},"Set the deployment values")," section and toggle the ",Object(o.b)("strong",{parentName:"li"},"Use an existing secret?")," slider to ",Object(o.b)("strong",{parentName:"li"},"no")," (1). Enter a value for csDefaultAdminPassword (2). It is important that you choose a password that is 32 characters in length and is composed of only letters and numbers. You will need this password in step 12.",Object(o.b)("br",null),Object(o.b)(p,{mdxType:"InlineNotification"},Object(o.b)("strong",null,"NOTE"),": Currently password validation is not enforced on this page. If you proceed with an invalid password you will be able to start the installation but it will fail. There is no way to recover from this error other than provisioning a new cluster."),Object(o.b)("br",null),Object(o.b)("img",{parentName:"li",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration/images/prep-image2.5.png",width:800}))),Object(o.b)("br",null),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},"Scroll down to ",Object(o.b)("strong",{parentName:"li"},"Parameters with default values"),". Click the collapsible section to open them. Change the default values parameters using the table below.")),Object(o.b)("br",null),Object(o.b)(p,{mdxType:"InlineNotification"},Object(o.b)("strong",null,"Warning"),": This demonstration’s 1-click installation occasionally fails. Due to issues with the current provisioning mechanism, we have alternate instructions to install the Cloud Pak for Integration product and complete preparation with the Demo Operator. Scroll to the bottom of this page for the ",Object(o.b)("strong",null,"Alternative install option: completing demo preparation with the Demo Operator")," section."),Object(o.b)("br",null),Object(o.b)("p",null,"If you do have an SMTP email server and accounts that you can use, you may sign up for a free ",Object(o.b)("a",{href:"https://mailtrap.io",target:"_blank",rel:"noreferrer"},"Mailtrap.io account"),". Mailtrap.io is a free cloud service that mimics an SMTP server. It is used for development/demonstration purposes only."),Object(o.b)("br",null),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"FIELD"),Object(o.b)("th",{parentName:"tr",align:null},"ACTION"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"demoPreparation:")," (1)"),Object(o.b)("td",{parentName:"tr",align:null},"Set to ‘true’")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"demoAPICMailServerPort:")," (2)"),Object(o.b)("td",{parentName:"tr",align:null},"If you’re using mailtrap, leave this smtp.mailtrap.io.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"demoAPICMailServerPort:")," (3)"),Object(o.b)("td",{parentName:"tr",align:null},"If you’re using mailtrap, leave this as 2525.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"demoAPICEmailAddress:")," (4)"),Object(o.b)("td",{parentName:"tr",align:null},"If you’re using mailtrap, you can use any email address.",Object(o.b)("br",null),"The dummy address ’",Object(o.b)("a",{parentName:"td",href:"mailto:apicadmin@example.com"},"apicadmin@example.com"),"’ is recommended. If you’re using your own mail server, use an email address that you can receive and read.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"demoAPICMialServerUsername:")," (5)"),Object(o.b)("td",{parentName:"tr",align:null},"Set this to your mailtrap username.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"demoAPICMailServerPassword:")," (6)"),Object(o.b)("td",{parentName:"tr",align:null},"Set this to your mailtrap password.")))),Object(o.b)("undefined",null,Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration/images/prep-image2.6.png",width:800})),Object(o.b)("br",null),Object(o.b)("ol",{start:7},Object(o.b)("li",{parentName:"ol"},"Accept the license agreement and click ",Object(o.b)("strong",{parentName:"li"},"Install")," to install Cloud Pak for Integration. The installation will take up to 90 minutes.",Object(o.b)("undefined",{parentName:"li"},Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration/images/license.png",width:500})))),Object(o.b)("br",null),Object(o.b)("ol",{start:8},Object(o.b)("li",{parentName:"ol"},"You can view the progress in the Schematics progress bar or check the details in view log.",Object(o.b)("undefined",{parentName:"li"},Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration/images/progress-bar.png",width:800})))),Object(o.b)("br",null),Object(o.b)("ol",{start:9},Object(o.b)("li",{parentName:"ol"},"When the status is ",Object(o.b)("strong",{parentName:"li"},"Active"),", you will be able to access Cloud Pak for Integration Platform Navigator. Select ",Object(o.b)("strong",{parentName:"li"},"Offering Dashboard")," on the upper right corner of the page.",Object(o.b)("undefined",{parentName:"li"},Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration/images/offering_dashboard.png",width:800})))),Object(o.b)("br",null),Object(o.b)("ol",{start:10},Object(o.b)("li",{parentName:"ol"},"On the log in page, select the authentication type ",Object(o.b)("strong",{parentName:"li"},"IBM provided credentials (admin only)"),".",Object(o.b)("undefined",{parentName:"li"},Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration/images/authentication-types.png",width:800})))),Object(o.b)("br",null),Object(o.b)("ol",{start:11},Object(o.b)("li",{parentName:"ol"},"Log in using the admin userid and password you created in step 6.",Object(o.b)("undefined",{parentName:"li"},Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration/images/login.png",width:800})))),Object(o.b)("br",null),Object(o.b)("ol",{start:12},Object(o.b)("li",{parentName:"ol"},"Click ",Object(o.b)("strong",{parentName:"li"},"Integration instances"),".",Object(o.b)("undefined",{parentName:"li"},Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration/images/integration-instances.png",width:800})))),Object(o.b)("br",null),Object(o.b)("ol",{start:13},Object(o.b)("li",{parentName:"ol"},"The parts of the Cloud Pak (API Connect, App Connect Designer, App Connect Dashboard and Asset Repository) will display here. Additional instances for any of the integration capabilities can be created by selecting ",Object(o.b)("strong",{parentName:"li"},"Create capability"),".",Object(o.b)("undefined",{parentName:"li"},Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration/images/instances.png",width:800})))),Object(o.b)("br",null),Object(o.b)("p",null,"You have successfully completed cluster provisioning, installation of Cloud Pak for Integration, and deployment of API Connect and App Connect. You are ready to proceed."),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("span",{id:"prereq"}),Object(o.b)("details",null,Object(o.b)("summary",null,"3 - Prerequisites, preparing your environment, and delivery options"),Object(o.b)("br",null),Object(o.b)(p,{mdxType:"InlineNotification"},Object(o.b)("strong",null,"NOTE")," The Watson Tone Analyzer referenced in preprequisites has been deprecated."),Object(o.b)("br",null),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Learn about ",Object(o.b)("a",{href:"https://ibm-garage-tsa.github.io/cp4i-demohub/salesdemos/carrepair-new/prepare/",target:"_blank",rel:"noreferrer"},"prerequisites and preparing your environment")),Object(o.b)("li",{parentName:"ul"},"Check the different delivery options and be ready to deliver the demo"),Object(o.b)("li",{parentName:"ul"},"Download the ",Object(o.b)("a",{parentName:"li",href:"/platinum-demos/1ee23eddb8ed39d513b58b08978672b9/slides.pptx"},"demo slides"))),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("br",null),Object(o.b)("span",{id:"alternative"}),Object(o.b)(p,{mdxType:"InlineNotification"},Object(o.b)("strong",null,"NOTE"),": To complete installation using the Demo Operator, open the collapsible section below."),Object(o.b)("details",null,Object(o.b)("summary",null,"Alternative install option: completing demo preparation with the Demo Operator"),Object(o.b)("br",null),Object(o.b)(p,{mdxType:"InlineNotification"},Object(o.b)("strong",null,"NOTE"),": There are a number of advantages to using the Demo Operator:",Object(o.b)("br",null),Object(o.b)("br",null),"• You can choose to install only the demos you plan to use, reducing the install time, and simplifying your environment. ",Object(o.b)("br",null),Object(o.b)("br",null),"• Should any errors occur, you can simply delete the Demo custom resource that you have created and try creating it again, perhaps with a reduced number of demos to install. Comparatively, if demoPreparation is set to true and that installation fails, you may have to start from scratch, reprovisioning the cluster.",Object(o.b)("br",null),Object(o.b)("br",null),"• You can use this Demo operator on any Cloud Pak for Integration installation, so you are not tied to the ROKS infrastructure as you are with the current approach. You could for example use a locally installed environment.",Object(o.b)("br",null),Object(o.b)("br",null),"Please note that use of the Demo Operator requires experience with creating custom resources in OpenShift. If you do not have the required skillset to use Demo Operator, please complete the install instructions in section 2 above. Should this fail,please raise a ticket via the ",Object(o.b)("a",{href:"https://www.ibm.com/mysupport",target:"_blank",rel:"noreferrer"},"IBM Support Portal")," for help."),Object(o.b)("br",null),Object(o.b)("p",null,"Ensure that you have completed steps 1-6 in the ",Object(o.b)("strong",{parentName:"p"},"2 - Install Cloud Pak for Integration on ROKS cluster")," section above."),Object(o.b)("br",null),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Scroll down to ",Object(o.b)("strong",{parentName:"li"},"Parameters with default values"),". Click the collapsible section to open them. Change the default values parameters using the table below.")),Object(o.b)("br",null),Object(o.b)("p",null,"If you do have an SMTP email server and accounts that you can use, you may sign up for a free ",Object(o.b)("a",{href:"https://mailtrap.io",target:"_blank",rel:"noreferrer"},"Mailtrap.io")," account. Mailtrap is a free cloud service that mimics an SMTP server. It is used for development/demonstration purposes only."),Object(o.b)("br",null),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"FIELD"),Object(o.b)("th",{parentName:"tr",align:null},"ACTION"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"demoPreparation:")," (1)"),Object(o.b)("td",{parentName:"tr",align:null},"Set to ‘false’")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"demoAPICMailServerPort:")," (2)"),Object(o.b)("td",{parentName:"tr",align:null},"If you’re using mailtrap, leave this smtp.mailtrap.io.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"demoAPICMailServerPort:")," (3)"),Object(o.b)("td",{parentName:"tr",align:null},"If you’re using mailtrap, leave this as 2525.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"demoAPICEmailAddress:")," (4)"),Object(o.b)("td",{parentName:"tr",align:null},"If you’re using mailtrap, you can use any email address.",Object(o.b)("br",null),"The dummy address ’",Object(o.b)("a",{parentName:"td",href:"mailto:apicadmin@example.com"},"apicadmin@example.com"),"’ is recommended. If you’re using your own mail server, use an email address that you can receive and read.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"demoAPICMialServerUsername:")," (5)"),Object(o.b)("td",{parentName:"tr",align:null},"Set this to your mailtrap username.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"demoAPICMailServerPassword:")," (6)"),Object(o.b)("td",{parentName:"tr",align:null},"Set this to your mailtrap password.")))),Object(o.b)("undefined",null,Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration/images/cp4i-install-param-false.png",width:800})),Object(o.b)("br",null),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Once this step is complete, go ",Object(o.b)("a",{href:"https://www.ibm.com/docs/en/cloud-paks/cp-integration/2021.1?topic=runtimes-deploying-cloud-pak-integration-demos",target:"_blank",rel:"noreferrer"},"here")," to complete the demo preparation using the Demo Operator. Refer to the ",Object(o.b)("strong",{parentName:"li"},"Car Crash Repair")," details.")),Object(o.b)("br",null),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Finally, proceed to ",Object(o.b)("a",{parentName:"li",href:"#prereq"},"3 - Prerequisites, preparing your environment, and delivery options")," above.")),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("p",null,"Click ",Object(o.b)("a",{parentName:"p",href:"/platinum-demos/300-integration/demo-script"},"here")," to go to the ",Object(o.b)("strong",{parentName:"p"},"Demo script")," on the next tab."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-300-integration-demo-preparation-mdx-c20a75b1251ba5b766b2.js.map