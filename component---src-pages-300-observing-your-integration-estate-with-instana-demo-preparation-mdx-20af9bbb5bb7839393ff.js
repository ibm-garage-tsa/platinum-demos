(window.webpackJsonp=window.webpackJsonp||[]).push([[65,37,38,39,84],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),b=a("NmYn"),o=a.n(b),i=a("Wbzz"),l=a("Xrax"),s=a("k4MR"),c=a("TSYQ"),d=a.n(c),m=a("QH2O"),u=a.n(m),p=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,r=e.tabs,b=void 0===r?[]:r;return Object(p.b)("div",{className:d()(u.a.pageHeader,(t={},t[u.a.withTabs]=b.length,t[u.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:u.a.text},a)))))},O=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,b=r.baseUrl,o=r.subDirectory,l=b+"/edit/"+r.branch+o+"/src/pages"+t;return b?Object(p.b)("div",{className:"bx--row "+O.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:O.link,href:l},"Edit this page on GitHub"))):null},g=a("FCXl"),f=a("dI71"),N=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],b=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),b=a===r,l=new RegExp(r+"/?(#.*)?$"),s=n.replace(l,a);return Object(p.b)("li",{key:e,className:d()((t={},t[N.selectedItem]=b,t),N.listItem)},Object(p.b)(i.Link,{className:N.link,to:""+s},e))}));return Object(p.b)("div",{className:N.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:N.list},b))))))},t}(r.a.Component),w=a("MjG9"),x=a("CzIb"),v=a("Asxa"),T=a("OIbQ"),I=a.n(T),k=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(v.c,{className:I.a.row},Object(p.b)(v.a,null,Object(p.b)("div",{className:I.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,b=t.frontmatter,c=void 0===b?{}:b,d=t.relativePagePath,m=t.titleType,u=c.tabs,O=c.title,f=c.theme,N=c.description,v=c.keywords,T=c.date,I=Object(x.a)().interiorTheme,P=Object(i.useStaticQuery)("2456312558").site.pathPrefix,D=P?n.pathname.replace(P,""):n.pathname,E=u?D.split("/").filter(Boolean).slice(-1)[0]||o()(u[0],{lower:!0}):"",C=f||I;return Object(p.b)(s.a,{tabs:u,homepage:!1,theme:C,pageTitle:O,pageDescription:N,pageKeywords:v,titleType:m},Object(p.b)(h,{title:r?Object(p.b)(r,null):O,label:"label",tabs:u,theme:C}),u&&Object(p.b)(y,{title:O,slug:D,tabs:u,currentTab:E}),Object(p.b)(w.a,{padded:!0},a,Object(p.b)(j,{relativePagePath:d}),Object(p.b)(k,{date:T})),Object(p.b)(g.a,{pageContext:t,location:n,slug:D,tabs:u,currentTab:E}),Object(p.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},e5Tg:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return s})),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return p}));var n,r=a("wx14"),b=a("zLVn"),o=(a("q1tI"),a("7ljp")),i=a("013z"),l=(a("qKvR"),["components"]),s=function(){return Object(o.b)("span",null,Object(o.b)("h1",{style:{fontSize:"60px"}}," Using Instana to monitor integration deployment",Object(o.b)("br",null)," 300-level live demo"))},c={},d=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),m={Title:s,_frontmatter:c},u=i.a;function p(e){var t=e.components,a=Object(b.a)(e,l);return Object(o.b)(u,Object(r.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"![banner]","(./images/image to come)"),Object(o.b)("span",{id:"top"}),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"DEMO OVERVIEW"),Object(o.b)("th",{parentName:"tr",align:"left"}))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Scenario overview")),Object(o.b)("td",{parentName:"tr",align:"left"},"This demo shows how IBM Instana helps quickly identify and resolve an incident in a bank microservices-based application. The application uses IBM API Connect, IBM App Connect Enterprise and IBM MQ from the Cloud Pak for Integration.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Demo products")),Object(o.b)("td",{parentName:"tr",align:"left"},"Cloud Pak for Integration (CP4I), Instana, IBM App Connect Enterprise")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Demo capabilities")),Object(o.b)("td",{parentName:"tr",align:"left"},"Dependency mapping; Intelligent alerting; Distributed tracing")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Sales guidance")),Object(o.b)("td",{parentName:"tr",align:"left"},"Download the sales guidance document ",Object(o.b)("a",{href:"LINK PENDING",target:"_blank",rel:"noreferrer"},"here"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Demo intro slides")),Object(o.b)("td",{parentName:"tr",align:"left"},"Download the Introduction and Overview slides ",Object(o.b)("a",{href:"https://ibm.box.com/s/c7h0gc1wy16yyhiy7ygrxad4vj5wl1km",target:"_blank",rel:"noreferrer"},"here"),". This is a short deck of customer-facing slides that sets the context for the demo.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Demo script")),Object(o.b)("td",{parentName:"tr",align:"left"},"A complete demo script is on the second tab above. You can download a printer-ready PDF of the demo script ",Object(o.b)("a",{href:"LINK PENDING",target:"_blank",rel:"noreferrer"},"here"),". ",Object(o.b)("br",null),Object(o.b)("br",null)," This demo script has multiple tasks, that each have multiple steps. In each step, you have the details about what you need to do (",Object(o.b)("strong",{parentName:"td"},"Actions"),"), what you can say while delivering this demo step (",Object(o.b)("strong",{parentName:"td"},"Narration"),"), and what diagrams and screenshots you will see. ",Object(o.b)("br",null),Object(o.b)("br",null)," This demo script is a suggestion, and you are welcome to customize based on your sales opportunity. Most importantly, practice this demo in advance. If the demo seems easy for you to execute, the customer will focus on the content. If it seems difficult for you to execute, the customer will focus on your delivery.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Demo guidance")),Object(o.b)("td",{parentName:"tr",align:"left"},"The demo environment is set to automatically inject an error into the application once every hour. ",Object(o.b)("br",null)," ",Object(o.b)("br",null),"The cycle begins at ten minutes to the hour (so 9:50, 10:50, etc). You should see errors begin to show up a few minutes after this (around 52 or 53 minutes past the hour), with the errors lasting 10 minutes.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Customer-ready ",Object(o.b)("br",null)," demo video")),Object(o.b)("td",{parentName:"tr",align:"left"},"View the demo video ",Object(o.b)("a",{href:"LINK PENDING",target:"_blank",rel:"noreferrer"},"here"),". This is a short, but detailed, hands-on walkthrough of the scenario. The video is customer-ready. ",Object(o.b)("br",null)," ",Object(o.b)("br",null)," Potential uses of this video are: ",Object(o.b)("br",null),Object(o.b)("br",null)," 1. Familiarize yourself with the details of this scenario ",Object(o.b)("br",null)," 2. Gain customer agreement that they would like to have a tech-seller do a deep-dive demo of this scenario ",Object(o.b)("br",null)," 3. Use as a prospecting tool to generate customer interest in these capabilities")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Customer-facing ",Object(o.b)("br",null)," expert guidance")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{href:"LINK PENDING",target:"_blank",rel:"noreferrer"},"Observability is the new APM for cloud-native applications."))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Required versions")),Object(o.b)("td",{parentName:"tr",align:"left"},"Instana 3.248")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"How to get support")),Object(o.b)("td",{parentName:"tr",align:"left"},"• Open a support case at ",Object(o.b)("a",{href:"https://techzone.ibm.com/help",target:"_blank",rel:"noreferrer"},"IBM Technology Zone Help")," regarding issues with reserving and provisioning Tech Zone environments.",Object(o.b)("br",null),"• Contact ",Object(o.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0216F39ACU",target:"_blank",rel:"noreferrer"},"#platinumdemos-automation-support")," regarding issues with setting up and running this demo.")))),Object(o.b)("h3",null,Object(o.b)("strong",{parentName:"h3"},"PREPARE TO GIVE THE DEMO")),Object(o.b)(d,{mdxType:"InlineNotification"},"Business partners will need to request access to the environment. See ",Object(o.b)("strong",null,"2 - Business partners requisition instructions")," below. Allow up to two business days to receive access."),Object(o.b)("details",null,Object(o.b)("summary",null,"1 - Environment setup "),Object(o.b)("br",null),Object(o.b)("p",null,"Log in to the demo environment: ",Object(o.b)("br",null),"\n•\tFor IBMers, click ",Object(o.b)("a",{href:"https://ibmdemo-instanaibm.instana.io",target:"_blank",rel:"noreferrer"},"here"),". ",Object(o.b)("br",null),"\n•\tFor business partners, click ",Object(o.b)("a",{href:"https://demo-partner.instana.io/",target:"_blank",rel:"noreferrer"},"here"),"."),Object(o.b)("br",null),Object(o.b)(d,{mdxType:"InlineNotification"},"If IBMers have difficulties accessing the environment please reach out to bstern@us.ibm.com who will provide access."),Object(o.b)("br",null),Object(o.b)("p",null,"Since you will be demonstrating using a past incident, you will need to set the time period."),Object(o.b)("br",null),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In the upper right, click the button showing the timeframe. ",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-observing-your-integration-estate-with-instana/images/prep-1-1-timeframe.png",width:400}),Object(o.b)("br",null))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"At the bottom of the pop-up, set the timeframe to begin at ",Object(o.b)("strong",{parentName:"p"},"45 minutes past the hour")," and end at ",Object(o.b)("strong",{parentName:"p"},"55 minutes past the hour")," (1). It doesn’t matter which hour you pick. Click ",Object(o.b)("strong",{parentName:"p"},"Set Time")," (2). ",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)(d,{mdxType:"InlineNotification"},"This will ensure you see normal behavior for the application. During the demo you will change the time window to observe a failure occurring. "),Object(o.b)("br",null),Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-observing-your-integration-estate-with-instana/images/prep-1-2-set-time.png",width:800}),Object(o.b)("br",null)))),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("details",null,Object(o.b)("span",{id:"requisition-instructions"}),Object(o.b)("summary",null,"2 - Business partners requisition instructions"),Object(o.b)("br",null),Object(o.b)("p",null,"To request access to the ",Object(o.b)("a",{href:"https://demo-partner.instana.io/",target:"_blank",rel:"noreferrer"},"demo environment"),", email ",Object(o.b)("a",{href:"mailto:timothy.burke@instana.com"},"Tim Burke"),". The turnaround time for requests is two business days."),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("hr",null),Object(o.b)("p",null,"Click ",Object(o.b)("a",{parentName:"p",href:"/platinum-demos/300-observing-your-integration-estate-with-instana/demo-script"},"here")," to go to the ",Object(o.b)("strong",{parentName:"p"},"Demo script")," on the next tab."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-300-observing-your-integration-estate-with-instana-demo-preparation-mdx-20af9bbb5bb7839393ff.js.map