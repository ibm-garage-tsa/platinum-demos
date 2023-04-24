(window.webpackJsonp=window.webpackJsonp||[]).push([[92,38,39,40,85],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),b=n("NmYn"),o=n.n(b),i=n("Wbzz"),l=n("Xrax"),s=n("k4MR"),c=n("TSYQ"),m=n.n(c),u=n("QH2O"),d=n.n(u),p=n("qKvR"),h=function(e){var t,n=e.title,a=e.theme,r=e.tabs,b=void 0===r?[]:r;return Object(p.b)("div",{className:m()(d.a.pageHeader,(t={},t[d.a.withTabs]=b.length,t[d.a.darkMode]="dark"===a,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:d.a.text},n)))))},O=n("BAC9"),j=function(e){var t=e.relativePagePath,n=e.repository,a=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=n||a,b=r.baseUrl,o=r.subDirectory,l=b+"/edit/"+r.branch+o+"/src/pages"+t;return b?Object(p.b)("div",{className:"bx--row "+O.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:O.link,href:l},"Edit this page on GitHub"))):null},g=n("FCXl"),f=n("dI71"),N=n("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],b=n.map((function(e){var t,n=o()(e,{lower:!0,strict:!0}),b=n===r,l=new RegExp(r+"/?(#.*)?$"),s=a.replace(l,n);return Object(p.b)("li",{key:e,className:m()((t={},t[N.selectedItem]=b,t),N.listItem)},Object(p.b)(i.Link,{className:N.link,to:""+s},e))}));return Object(p.b)("div",{className:N.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:N.list},b))))))},t}(r.a.Component),v=n("MjG9"),y=n("CzIb"),x=n("Asxa"),k=n("OIbQ"),T=n.n(k),I=function(e){var t=e.date,n=new Date(t);return t?Object(p.b)(x.c,{className:T.a.row},Object(p.b)(x.a,null,Object(p.b)("div",{className:T.a.text},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,r=e.Title,b=t.frontmatter,c=void 0===b?{}:b,m=t.relativePagePath,u=t.titleType,d=c.tabs,O=c.title,f=c.theme,N=c.description,x=c.keywords,k=c.date,T=Object(y.a)().interiorTheme,P=Object(i.useStaticQuery)("2456312558").site.pathPrefix,C=P?a.pathname.replace(P,""):a.pathname,E=d?C.split("/").filter(Boolean).slice(-1)[0]||o()(d[0],{lower:!0}):"",_=f||T;return Object(p.b)(s.a,{tabs:d,homepage:!1,theme:_,pageTitle:O,pageDescription:N,pageKeywords:x,titleType:u},Object(p.b)(h,{title:r?Object(p.b)(r,null):O,label:"label",tabs:d,theme:_}),d&&Object(p.b)(w,{title:O,slug:C,tabs:d,currentTab:E}),Object(p.b)(v.a,{padded:!0},n,Object(p.b)(j,{relativePagePath:m}),Object(p.b)(I,{date:k})),Object(p.b)(g.a,{pageContext:t,location:a,slug:C,tabs:d,currentTab:E}),Object(p.b)(l.a,null))}},"13cd":function(e,t,n){"use strict";n.r(t),n.d(t,"Title",(function(){return s})),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return p}));var a,r=n("wx14"),b=n("zLVn"),o=(n("q1tI"),n("7ljp")),i=n("013z"),l=(n("qKvR"),["components"]),s=function(){return Object(o.b)("span",null,"Observability ",Object(o.b)("br",null)," 300-level live demo")},c={},m=(a="InlineNotification",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),u={Title:s,_frontmatter:c},d=i.a;function p(e){var t=e.components,n=Object(b.a)(e,l);return Object(o.b)(d,Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("img",{src:"./images/AIOps_Observability_300_Prep.jpg",alt:"banner"}),Object(o.b)("span",{id:"top"}),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"DEMO OVERVIEW"),Object(o.b)("th",{parentName:"tr",align:"left"}))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Scenario overview")),Object(o.b)("td",{parentName:"tr",align:"left"},"This demo shows how IBM Instana helps quickly identify and resolve an incident in a microservices-based application. The application in this demo is called Stan’s Robot Shop, and it uses various technologies such as Java, Python, and MySQL.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Demo products")),Object(o.b)("td",{parentName:"tr",align:"left"},"Instana")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Demo capabilities")),Object(o.b)("td",{parentName:"tr",align:"left"},"Dependency mapping; Intelligent alerting; Distributed tracing")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Sales guidance")),Object(o.b)("td",{parentName:"tr",align:"left"},"Download the sales guidance document ",Object(o.b)("a",{href:"https://ibm.box.com/s/lf8cn8qe9h6dexpn66vo5s8rt2pp0aka",target:"_blank",rel:"noreferrer"},"here"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Demo intro slides")),Object(o.b)("td",{parentName:"tr",align:"left"},"Download the Introduction and Overview slides ",Object(o.b)("a",{href:"https://ibm.box.com/s/hdarww1v4mlgf8r1abxrt3a6zps8h92m",target:"_blank",rel:"noreferrer"},"here"),". This is a short deck of customer-facing slides that sets the context for the demo.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Demo script")),Object(o.b)("td",{parentName:"tr",align:"left"},"A complete demo script is on the second tab above. You can download a printer-ready PDF of the demo script ",Object(o.b)("a",{href:"https://ibm.box.com/s/ovlk0ek2vi4w75ca4tdomb3cprsm9w59",target:"_blank",rel:"noreferrer"},"here"),". ",Object(o.b)("br",null),Object(o.b)("br",null)," This demo script has multiple tasks, that each have multiple steps. In each step, you have the details about what you need to do (",Object(o.b)("strong",{parentName:"td"},"Actions"),"), what you can say while delivering this demo step (",Object(o.b)("strong",{parentName:"td"},"Narration"),"), and what diagrams and screenshots you will see. ",Object(o.b)("br",null),Object(o.b)("br",null)," This demo script is a suggestion, and you are welcome to customize based on your sales opportunity. Most importantly, practice this demo in advance. If the demo seems easy for you to execute, the customer will focus on the content. If it seems difficult for you to execute, the customer will focus on your delivery.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Demo guidance")),Object(o.b)("td",{parentName:"tr",align:"left"},"The demo environment is set to automatically inject an error into the application once every hour. ",Object(o.b)("br",null)," ",Object(o.b)("br",null)," The cycle begins on the half-hour (so 9:30, 10:30, etc). You should see errors begin to show up a few minutes after this (around 32 or 33 minutes past the hour). ",Object(o.b)("br",null)," ",Object(o.b)("br",null)," The error will resolve itself and go back to a normal state after about 10 minutes. ",Object(o.b)("br",null)," ",Object(o.b)("br",null)," There are two options for how to give demos, given how this demo environment functions: ",Object(o.b)("br",null),Object(o.b)("br",null)," 1. Schedule a meeting so that you can begin a live demo at 30 minutes past the hour. This will allow you to show the active incident in real time. ",Object(o.b)("br",null)," 2. Run through the demo flow using a past incident. You can set the time period to when an incident was active (instructions are in the demo script). You will be able to run through the same scenario, except it will not show the incident alerts on the events icon on the sidebar.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Customer-ready ",Object(o.b)("br",null)," demo video")),Object(o.b)("td",{parentName:"tr",align:"left"},"View the demo video ",Object(o.b)("a",{href:"https://ibm.ent.box.com/s/eogn2t43x23nk8ksyk236teqppe5d49e",target:"_blank",rel:"noreferrer"},"here"),". This is a short, but detailed, hands-on walkthrough of the scenario. The video is customer-ready. ",Object(o.b)("br",null)," ",Object(o.b)("br",null)," Potential uses of this video are: ",Object(o.b)("br",null),Object(o.b)("br",null)," 1. Familiarize yourself with the details of this scenario ",Object(o.b)("br",null)," 2. Gain customer agreement that they would like to have a tech-seller do a deep-dive demo of this scenario ",Object(o.b)("br",null)," 3. Use as a prospecting tool to generate customer interest in these capabilities")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Customer-facing ",Object(o.b)("br",null)," expert guidance")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{href:"https://ibm.box.com/s/l38ns6xwj441brp9jb85jqs7bpoaj7vl",target:"_blank",rel:"noreferrer"},"Observability is the new APM for cloud-native applications."))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Required versions")),Object(o.b)("td",{parentName:"tr",align:"left"},"Instana 3.213")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"How to get support")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"For IBMers:")," ",Object(o.b)("br",null),"• Contact ",Object(o.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0124J683GW",target:"_blank",rel:"noreferrer"},"#itz-techzone-support")," or ",Object(o.b)("a",{href:"mailto:techzone.help@ibm.com"},Object(o.b)("a",{parentName:"td",href:"mailto:techzone.help@ibm.com"},"techzone.help@ibm.com"))," regarding issues with reserving and provisioning Tech Zone environments.",Object(o.b)("br",null),"• Contact ",Object(o.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0216F39ACU",target:"_blank",rel:"noreferrer"},"#platinumdemos-automation-support")," regarding issues with setting up and running this demo. ",Object(o.b)("br",null),Object(o.b)("br",null)," ",Object(o.b)("strong",{parentName:"td"},"For Business Partners:")," ",Object(o.b)("br",null),"• Contact ",Object(o.b)("a",{href:"mailto:techzone.help@ibm.com"},"Tech Zone Support")," regarding issues with reserving and provisioning Tech Zone environments.",Object(o.b)("br",null),"• Contact ",Object(o.b)("a",{href:"mailto:automationplatinumdemos@ibm.com"}," Automation Platinum Demos Support")," regarding issues with setting up and running this demo.")))),Object(o.b)("h3",null,Object(o.b)("strong",{parentName:"h3"},"PREPARE TO GIVE THE DEMO")),Object(o.b)(m,{mdxType:"InlineNotification"},"Business partners will need to request access to the environment. See ",Object(o.b)("strong",null,"2 - Business partners requisition instructions")," below. Allow up to two business days to receive access."),Object(o.b)("details",null,Object(o.b)("summary",null,"1 - Environment setup (live incident)"),Object(o.b)("br",null),Object(o.b)("p",null,"If you will demonstrate using a live incident (i.e. beginning the demo at 30 minutes past the hour), follow these steps. "),Object(o.b)("br",null),Object(o.b)("p",null,"Log in to the demo environment: ",Object(o.b)("br",null),"\n•\tFor IBMers, click ",Object(o.b)("a",{href:"https://ibmdemo-instanaibm.instana.io",target:"_blank",rel:"noreferrer"},"here"),". ",Object(o.b)("br",null),"\n•\tFor business partners, click ",Object(o.b)("a",{href:"https://demo-partner.instana.io/",target:"_blank",rel:"noreferrer"},"here"),"."),Object(o.b)("br",null),Object(o.b)("p",null,"No additional setup is needed."),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("details",null,Object(o.b)("summary",null,"1 - Environment setup (past incident)"),Object(o.b)("br",null),Object(o.b)("p",null,"If you will demonstrate using a past incident, follow these steps. "),Object(o.b)("br",null),Object(o.b)("br",null),"Log in to the demo environment: ",Object(o.b)("br",null),"• For IBMers, click ",Object(o.b)("a",{href:"https://ibmdemo-instanaibm.instana.io",target:"_blank",rel:"noreferrer"},"here"),". ",Object(o.b)("br",null),"• For business partners, click ",Object(o.b)("a",{href:"https://demo-partner.instana.io/",target:"_blank",rel:"noreferrer"},"here"),". ",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("p",null,"Since you will be demonstrating using a past incident, you will need to set the time period."),Object(o.b)("undefined",null,Object(o.b)("br",null),"1. In the upper right, click the button showing the timeframe. ",Object(o.b)("br",null),Object(o.b)("br",null)," ",Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-observability/images/1_timeframe.png"})),Object(o.b)("br",null),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"At the bottom of the pop-up, set the timeframe to begin at 25 minutes past the hour and end at 35 minutes past the hour. It doesn’t matter which hour you pick. Click ",Object(o.b)("strong",{parentName:"li"},"Set Time"),".")),Object(o.b)("br",null),Object(o.b)(m,{mdxType:"InlineNotification"},"• This will ensure you see normal behavior and then a sudden change when the incident begins at 0:30.",Object(o.b)("br",null),"• Pressing 'enter' doesn’t work. You'll need to actually click the button. "),Object(o.b)("undefined",null,Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-observability/images/2_time_range.png",width:600})),Object(o.b)("br",null),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Check that the summary tab for the robot shop (",Object(o.b)("strong",{parentName:"li"},"Applications")," → ",Object(o.b)("strong",{parentName:"li"},"Robot Shop")," → ",Object(o.b)("strong",{parentName:"li"},"Summary"),") looks like the screenshot below (there should be a drop in call volume and spikes in erroneous calls and latency).")),Object(o.b)("undefined",null,Object(o.b)("br",null)," ",Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-observability/images/3_robot_shop_summary.png",width:600})),Object(o.b)("br",null),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Click ",Object(o.b)("strong",{parentName:"li"},"Events")," on the sidebar menu and check that there are open incidents, including ",Object(o.b)("strong",{parentName:"li"},"Sudden increase in the number of erroneous calls")," on the ‘discount’ service.")),Object(o.b)("undefined",null,Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-observability/images/4_open_incidents.png",width:600})," ",Object(o.b)("br",null)),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("details",null,Object(o.b)("span",{id:"requisition-instructions"}),Object(o.b)("summary",null,"2 - Business partners requisition instructions"),Object(o.b)("br",null),Object(o.b)("p",null,"To request access to the ",Object(o.b)("a",{href:"https://demo-partner.instana.io/",target:"_blank",rel:"noreferrer"},"demo environment"),", email the appropriate contact from the list below for guidance."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Region "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "),Object(o.b)("th",{parentName:"tr",align:null},"Name"),Object(o.b)("th",{parentName:"tr",align:null},"Email"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"NA, WW"),Object(o.b)("td",{parentName:"tr",align:null},"Tim Burke"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"mailto:timothy.burke@instana.com"},"timothy.burke@instana.com"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"EMEA, AP, Japan"),Object(o.b)("td",{parentName:"tr",align:null},"Allan Costigan"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"mailto:Allan.Costigan@instana.com"},"Allan.Costigan@instana.com"))))),Object(o.b)("h3",null,"Turnaround"),Object(o.b)("p",null,"The turnaround time for requests to access the environment is two business days."),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("hr",null),Object(o.b)("p",null,"Click ",Object(o.b)("a",{parentName:"p",href:"/platinum-demos/300-watson-aiops-observability/demo-script"},"here")," to go to the ",Object(o.b)("strong",{parentName:"p"},"Demo script")," on the next tab."))}p.isMDXComponent=!0},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,n){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-archive-2023-archived-4-3-23-demo-preparation-sandbox-mdx-053a321b6410b2e5cb81.js.map