(window.webpackJsonp=window.webpackJsonp||[]).push([[71,37,40,48],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),b=a.n(n),r=a("NmYn"),l=a.n(r),i=a("Wbzz"),o=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),m=a.n(s),u=a("QH2O"),d=a.n(u),p=a("qKvR"),j=function(e){var t,a=e.title,n=e.theme,b=e.tabs,r=void 0===b?[]:b;return Object(p.b)("div",{className:m()(d.a.pageHeader,(t={},t[d.a.withTabs]=r.length,t[d.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:d.a.text},a)))))},O=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,b=a||n,r=b.baseUrl,l=b.subDirectory,o=r+"/edit/"+b.branch+l+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+O.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:O.link,href:o},"Edit this page on GitHub"))):null},A=a("FCXl"),g=a("dI71"),N=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(g.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,b=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),r=a===b,o=new RegExp(b+"/?(#.*)?$"),c=n.replace(o,a);return Object(p.b)("li",{key:e,className:m()((t={},t[N.selectedItem]=r,t),N.listItem)},Object(p.b)(i.Link,{className:N.link,to:""+c},e))}));return Object(p.b)("div",{className:N.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:N.list},r))))))},t}(b.a.Component),y=a("MjG9"),w=a("CzIb"),v=a("Asxa"),x=a("OIbQ"),k=a.n(x),T=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(v.c,{className:k.a.row},Object(p.b)(v.a,null,Object(p.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,b=e.Title,r=t.frontmatter,s=void 0===r?{}:r,m=t.relativePagePath,u=t.titleType,d=s.tabs,O=s.title,g=s.theme,N=s.description,v=s.keywords,x=s.date,k=Object(w.a)().interiorTheme,E=Object(i.useStaticQuery)("2456312558").site.pathPrefix,B=E?n.pathname.replace(E,""):n.pathname,I=d?B.split("/").filter(Boolean).slice(-1)[0]||l()(d[0],{lower:!0}):"",P=g||k;return Object(p.b)(c.a,{tabs:d,homepage:!1,theme:P,pageTitle:O,pageDescription:N,pageKeywords:v,titleType:u},Object(p.b)(j,{title:b?Object(p.b)(b,null):O,label:"label",tabs:d,theme:P}),d&&Object(p.b)(f,{title:O,slug:B,tabs:d,currentTab:I}),Object(p.b)(y.a,{padded:!0},a,Object(p.b)(h,{relativePagePath:m}),Object(p.b)(T,{date:x})),Object(p.b)(A.a,{pageContext:t,location:n,slug:B,tabs:d,currentTab:I}),Object(p.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},gV2B:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return c})),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return p}));var n,b=a("wx14"),r=a("zLVn"),l=(a("q1tI"),a("7ljp")),i=a("013z"),o=(a("qKvR"),["components"]),c=function(){return Object(l.b)("span",null,"Observability ",Object(l.b)("br",null)," 300-level live demo")},s={},m=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",e)}),u={Title:c,_frontmatter:s},d=i.a;function p(e){var t=e.components,a=Object(r.a)(e,o);return Object(l.b)(d,Object(b.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"17.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAADABQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABkrEuFT//xAAYEAACAwAAAAAAAAAAAAAAAAABAgARM//aAAgBAQABBQKJq4F//8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQMBAT8BV//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABgQAAIDAAAAAAAAAAAAAAAAAAAQEWLB/9oACAEBAAY/AibYv//EABkQAAIDAQAAAAAAAAAAAAAAAAABIUFRMf/aAAgBAQABPyFZhNm7EVNH/9oADAMBAAIAAwAAABCHz//EABYRAQEBAAAAAAAAAAAAAAAAAAABMf/aAAgBAwEBPxCNP//EABYRAQEBAAAAAAAAAAAAAAAAAAABMf/aAAgBAgEBPxCJj//EABoQAAEFAQAAAAAAAAAAAAAAAAEAESExQWH/2gAIAQEAAT8QmXVTkqDAXnkZhMkaYv/Z')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/platinum-demos/static/c21ae891a42d59cabc6a2ab317f4f3b3/2e753/AIOps_Observability_300_Prep.jpg",srcSet:["/platinum-demos/static/c21ae891a42d59cabc6a2ab317f4f3b3/69549/AIOps_Observability_300_Prep.jpg 288w","/platinum-demos/static/c21ae891a42d59cabc6a2ab317f4f3b3/473e3/AIOps_Observability_300_Prep.jpg 576w","/platinum-demos/static/c21ae891a42d59cabc6a2ab317f4f3b3/2e753/AIOps_Observability_300_Prep.jpg 1152w","/platinum-demos/static/c21ae891a42d59cabc6a2ab317f4f3b3/74f4b/AIOps_Observability_300_Prep.jpg 1728w","/platinum-demos/static/c21ae891a42d59cabc6a2ab317f4f3b3/cbe2c/AIOps_Observability_300_Prep.jpg 2000w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(l.b)("span",{id:"top"}),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"DEMO OVERVIEW"),Object(l.b)("th",{parentName:"tr",align:"left"}))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("strong",{parentName:"td"},"Scenario overview")),Object(l.b)("td",{parentName:"tr",align:"left"},"This demo shows how IBM Instana helps quickly identify and resolve an incident in a microservices-based application. The application in this demo is called Stan’s Robot Shop, and it uses various technologies such as Java, Python, and MySQL.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("strong",{parentName:"td"},"Demo products")),Object(l.b)("td",{parentName:"tr",align:"left"},"Instana")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("strong",{parentName:"td"},"Demo capabilities")),Object(l.b)("td",{parentName:"tr",align:"left"},"Dependency mapping; Intelligent alerting; Distributed tracing")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("strong",{parentName:"td"},"Sales guidance")),Object(l.b)("td",{parentName:"tr",align:"left"},"Download the sales guidance document ",Object(l.b)("a",{href:"https://ibm.box.com/s/lf8cn8qe9h6dexpn66vo5s8rt2pp0aka",target:"_blank",rel:"noreferrer"},"here"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("strong",{parentName:"td"},"Demo intro slides")),Object(l.b)("td",{parentName:"tr",align:"left"},"Download the Introduction and Overview slides ",Object(l.b)("a",{href:"https://ibm.box.com/s/hdarww1v4mlgf8r1abxrt3a6zps8h92m",target:"_blank",rel:"noreferrer"},"here"),". This is a short deck of customer-facing slides that sets the context for the demo.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("strong",{parentName:"td"},"Demo script")),Object(l.b)("td",{parentName:"tr",align:"left"},"A complete demo script is on the second tab above. You can download a printer-ready PDF of the demo script ",Object(l.b)("a",{href:"https://ibm.box.com/s/ovlk0ek2vi4w75ca4tdomb3cprsm9w59",target:"_blank",rel:"noreferrer"},"here"),". ",Object(l.b)("br",null),Object(l.b)("br",null)," This demo script has multiple tasks, that each have multiple steps. In each step, you have the details about what you need to do (",Object(l.b)("strong",{parentName:"td"},"Actions"),"), what you can say while delivering this demo step (",Object(l.b)("strong",{parentName:"td"},"Narration"),"), and what diagrams and screenshots you will see. ",Object(l.b)("br",null),Object(l.b)("br",null)," This demo script is a suggestion, and you are welcome to customize based on your sales opportunity. Most importantly, practice this demo in advance. If the demo seems easy for you to execute, the customer will focus on the content. If it seems difficult for you to execute, the customer will focus on your delivery.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("strong",{parentName:"td"},"Demo guidance")),Object(l.b)("td",{parentName:"tr",align:"left"},"The demo environment is set to automatically inject an error into the application once every hour. ",Object(l.b)("br",null)," ",Object(l.b)("br",null)," The cycle begins on the half-hour (so 9:30, 10:30, etc). You should see errors begin to show up a few minutes after this (around 32 or 33 minutes past the hour). ",Object(l.b)("br",null)," ",Object(l.b)("br",null)," The error will resolve itself and go back to a normal state after about 10 minutes. ",Object(l.b)("br",null)," ",Object(l.b)("br",null)," There are two options for how to give demos, given how this demo environment functions: ",Object(l.b)("br",null),Object(l.b)("br",null)," 1. Schedule a meeting so that you can begin a live demo at 30 minutes past the hour. This will allow you to show the active incident in real time. ",Object(l.b)("br",null)," 2. Run through the demo flow using a past incident. You can set the time period to when an incident was active (instructions are in the demo script). You will be able to run through the same scenario, except it will not show the incident alerts on the events icon on the sidebar.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("strong",{parentName:"td"},"Customer-ready ",Object(l.b)("br",null)," demo video")),Object(l.b)("td",{parentName:"tr",align:"left"},"View the demo video ",Object(l.b)("a",{href:"https://ibm.ent.box.com/s/eogn2t43x23nk8ksyk236teqppe5d49e",target:"_blank",rel:"noreferrer"},"here"),". This is a short, but detailed, hands-on walkthrough of the scenario. The video is customer-ready. ",Object(l.b)("br",null)," ",Object(l.b)("br",null)," Potential uses of this video are: ",Object(l.b)("br",null),Object(l.b)("br",null)," 1. Familiarize yourself with the details of this scenario ",Object(l.b)("br",null)," 2. Gain customer agreement that they would like to have a tech-seller do a deep-dive demo of this scenario ",Object(l.b)("br",null)," 3. Use as a prospecting tool to generate customer interest in these capabilities")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("strong",{parentName:"td"},"Required versions")),Object(l.b)("td",{parentName:"tr",align:"left"},"Instana 3.213")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("strong",{parentName:"td"},"How to get support")),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("strong",{parentName:"td"},"For IBMers:")," ",Object(l.b)("br",null),"• Contact ",Object(l.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0124J683GW",target:"_blank",rel:"noreferrer"},"#itz-techzone-support")," or ",Object(l.b)("a",{href:"mailto:techzone.help@ibm.com"},Object(l.b)("a",{parentName:"td",href:"mailto:techzone.help@ibm.com"},"techzone.help@ibm.com"))," regarding issues with reserving and provisioning Tech Zone environments.",Object(l.b)("br",null),"• Contact ",Object(l.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0216F39ACU",target:"_blank",rel:"noreferrer"},"#platinumdemos-automation-support")," regarding issues with setting up and running this demo. ",Object(l.b)("br",null),Object(l.b)("br",null)," ",Object(l.b)("strong",{parentName:"td"},"For Business Partners:")," ",Object(l.b)("br",null),"• Contact ",Object(l.b)("a",{href:"mailto:techzone.help@ibm.com"},"Tech Zone Support")," regarding issues with reserving and provisioning Tech Zone environments.",Object(l.b)("br",null),"• Contact ",Object(l.b)("a",{href:"mailto:automationplatinumdemos@ibm.com"}," Automation Platinum Demos Support")," regarding issues with setting up and running this demo.")))),Object(l.b)("h3",null,Object(l.b)("strong",{parentName:"h3"},"PREPARE TO GIVE THE DEMO")),Object(l.b)("details",null,Object(l.b)("summary",null,"1 - Environment setup (live incident)"),Object(l.b)("br",null),Object(l.b)(m,{mdxType:"InlineNotification"},"If you will demonstrate using a live incident (i.e. beginning the demo at 30 minutes past the hour), follow these steps. "),Object(l.b)("br",null),Object(l.b)("p",null,"If it is your first time accessing the environment, you will need to request access. See ",Object(l.b)("strong",{parentName:"p"},"2 - Requisition instructions")," below. Allow up to two business days to receive access."),Object(l.b)("br",null),Object(l.b)("p",null,"Log in to the demo environment: ",Object(l.b)("br",null),"\n•\tFor IBMers, click ",Object(l.b)("a",{href:"https://ibmdemo-instanaibm.instana.io",target:"_blank",rel:"noreferrer"},"here"),". ",Object(l.b)("br",null),"\n•\tFor business partners, click ",Object(l.b)("a",{href:"https://demo-partner.instana.io/",target:"_blank",rel:"noreferrer"},"here"),". ",Object(l.b)("br",null),Object(l.b)("br",null)),Object(l.b)("p",null,"No additional setup is needed."),Object(l.b)("br",null),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(l.b)("details",null,Object(l.b)("summary",null,"1 - Environment setup (past incident)"),Object(l.b)("br",null),Object(l.b)(m,{mdxType:"InlineNotification"},"If you will demonstrate using a past incident, follow these steps. "),Object(l.b)("br",null),Object(l.b)("p",null,"If it is your first time accessing the environment, you will need to request access. See ",Object(l.b)("strong",{parentName:"p"},"2 - Requisition instructions")," below. Allow up to two business days to receive access."),Object(l.b)("br",null),"Log in to the demo environment: ",Object(l.b)("br",null),"• For IBMers, click ",Object(l.b)("a",{href:"https://ibmdemo-instanaibm.instana.io",target:"_blank",rel:"noreferrer"},"here"),". ",Object(l.b)("br",null),"• For business partners, click ",Object(l.b)("a",{href:"https://demo-partner.instana.io/",target:"_blank",rel:"noreferrer"},"here"),". ",Object(l.b)("br",null),Object(l.b)("br",null),Object(l.b)("p",null,"Since you will be demonstrating using a past incident, you will need to set the time period."),Object(l.b)("undefined",null,Object(l.b)("br",null),"1. In the upper right, click the button showing the timeframe. ",Object(l.b)("br",null),Object(l.b)("br",null)," ",Object(l.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-observability/images/1_timeframe.png"})),Object(l.b)("br",null),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"At the bottom of the pop-up, set the timeframe to begin at 25 minutes past the hour and end at 35 minutes past the hour. It doesn’t matter which hour you pick. Click ",Object(l.b)("strong",{parentName:"li"},"Set Time"),".")),Object(l.b)("br",null),Object(l.b)(m,{mdxType:"InlineNotification"},"• This will ensure you see normal behavior and then a sudden change when the incident begins at 0:30.",Object(l.b)("br",null),"• Pressing 'enter' doesn’t work. You'll need to actually click the button. "),Object(l.b)("undefined",null,Object(l.b)("br",null),Object(l.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-observability/images/2_time_range.png",width:600})),Object(l.b)("br",null),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},"Check that the summary tab for the robot shop (",Object(l.b)("strong",{parentName:"li"},"Applications")," → ",Object(l.b)("strong",{parentName:"li"},"Robot Shop")," → ",Object(l.b)("strong",{parentName:"li"},"Summary"),") looks like the screenshot below (there should be a drop in call volume and spikes in erroneous calls and latency).")),Object(l.b)("undefined",null,Object(l.b)("br",null)," ",Object(l.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-observability/images/3_robot_shop_summary.png",width:600})),Object(l.b)("br",null),Object(l.b)("ol",{start:4},Object(l.b)("li",{parentName:"ol"},"Click ",Object(l.b)("strong",{parentName:"li"},"Events")," on the sidebar menu and check that there are open incidents, including ",Object(l.b)("strong",{parentName:"li"},"Sudden increase in the number of erroneous calls")," on the ‘discount’ service.")),Object(l.b)("undefined",null,Object(l.b)("br",null),Object(l.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-observability/images/4_open_incidents.png",width:600})," ",Object(l.b)("br",null)),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(l.b)("details",null,Object(l.b)("span",{id:"requisition-instructions"}),Object(l.b)("summary",null,"2 - Requisition instructions"),Object(l.b)("br",null),Object(l.b)("p",null,"Two days before the demo, make sure you can access the environment: ",Object(l.b)("br",null),"\n•\tFor IBMers, click ",Object(l.b)("a",{href:"https://ibmdemo-instanaibm.instana.io",target:"_blank",rel:"noreferrer"},"here")," ",Object(l.b)("br",null),"\n•\tFor business partners, click ",Object(l.b)("a",{href:"https://demo-partner.instana.io/",target:"_blank",rel:"noreferrer"},"here")),Object(l.b)("br",null),Object(l.b)("p",null,"Email contacts to request access:"),Object(l.b)("h3",null,"Sales"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Region"),Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Email"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Americas"),Object(l.b)("td",{parentName:"tr",align:null},"Chris Marvin"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"mailto:camarvin@us.ibm.com"},"camarvin@us.ibm.com"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"EMEA"),Object(l.b)("td",{parentName:"tr",align:null},"Thomas Taschner"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"mailto:thota@at.ibm.com"},"thota@at.ibm.com"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AP"),Object(l.b)("td",{parentName:"tr",align:null},"Mark Jones"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"mailto:marjones@au1.ibm.com"},"marjones@au1.ibm.com"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Japan"),Object(l.b)("td",{parentName:"tr",align:null},"Yasuhiro Tsutsumi"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"mailto:Yasuhiro.Tsutsumi@ibm.com"},"Yasuhiro.Tsutsumi@ibm.com"))))),Object(l.b)("h3",null,"Tech sales"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Region"),Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Email"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Americas"),Object(l.b)("td",{parentName:"tr",align:null},"Ganeshram Boodhoo"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"mailto:gbood@us.ibm.com"},"gbood@us.ibm.com"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"EMEA"),Object(l.b)("td",{parentName:"tr",align:null},"Petr Styblo"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"mailto:petr.styblo@cz.ibm.com"},"petr.styblo@cz.ibm.com"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AP"),Object(l.b)("td",{parentName:"tr",align:null},"Kitman Cheung"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"mailto:cheungk@sg.ibm.com"},"cheungk@sg.ibm.com"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Japan"),Object(l.b)("td",{parentName:"tr",align:null},"Tomonori Iwashina"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"mailto:TOMONORI@jp.ibm.com"},"TOMONORI@jp.ibm.com"))))),Object(l.b)("h3",null,"Everybody else (IBMers that are not sales or tech sales)"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Email"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Aaron Tobin"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"mailto:atobin@us.ibm.com"},"atobin@us.ibm.com"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Maria Elena Taglieri"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"mailto:maria_elena.taglieri@it.ibm.com"},"maria_elena.taglieri@it.ibm.com"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Matthias Staub"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"mailto:matthias.staub@ch.ibm.com"},"matthias.staub@ch.ibm.com"))))),Object(l.b)("h3",null,"Business partners"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Region "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "),Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Email"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"NA, WW"),Object(l.b)("td",{parentName:"tr",align:null},"Tim Burke"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"mailto:timothy.burke@instana.com"},"timothy.burke@instana.com"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"EMEA, AP, Japan"),Object(l.b)("td",{parentName:"tr",align:null},"Allan Costigan"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"mailto:Allan.Costigan@instana.com"},"Allan.Costigan@instana.com"))))),Object(l.b)("h3",null,"Backup contacts"),Object(l.b)("p",null,"If the person you contact initially is unavailable, contact the other person for your geo. ",Object(l.b)("br",null)," ",Object(l.b)("br",null)),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example:")," A seller in the Americas would contact Chris Marvin initially. If he’s unavailable, that seller would then contact the tech sales contact for Americas (Ganeshram Boodhoo). ",Object(l.b)("br",null)," ",Object(l.b)("br",null)),Object(l.b)("p",null,"You can also use the ",Object(l.b)("strong",{parentName:"p"},"Everybody else")," contacts."),Object(l.b)("h3",null,"Turnaround"),Object(l.b)("p",null,"The turnaround time for requests to access the environment is two business days."),Object(l.b)("br",null),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(l.b)("hr",null),Object(l.b)("p",null,"Click ",Object(l.b)("a",{parentName:"p",href:"/platinum-demos/300-watson-aiops-observability/demo-script"},"here")," to go to the ",Object(l.b)("strong",{parentName:"p"},"Demo script")," on the next tab."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-300-watson-aiops-observability-demo-preparation-mdx-419652a4b086e8c68186.js.map