(window.webpackJsonp=window.webpackJsonp||[]).push([[73,38,45,46,87],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),b=a("NmYn"),o=a.n(b),i=a("Wbzz"),s=a("Xrax"),l=a("k4MR"),c=a("TSYQ"),m=a.n(c),u=a("QH2O"),d=a.n(u),p=a("qKvR"),A=function(e){var t,a=e.title,n=e.theme,r=e.tabs,b=void 0===r?[]:r;return Object(p.b)("div",{className:m()(d.a.pageHeader,(t={},t[d.a.withTabs]=b.length,t[d.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:d.a.text},a)))))},h=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,b=r.baseUrl,o=r.subDirectory,s=b+"/edit/"+r.branch+o+"/src/pages"+t;return b?Object(p.b)("div",{className:"bx--row "+h.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:h.link,href:s},"Edit this page on GitHub"))):null},g=a("FCXl"),O=a("dI71"),f=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],b=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),b=a===r,s=new RegExp(r+"/?(#.*)?$"),l=n.replace(s,a);return Object(p.b)("li",{key:e,className:m()((t={},t[f.selectedItem]=b,t),f.listItem)},Object(p.b)(i.Link,{className:f.link,to:""+l},e))}));return Object(p.b)("div",{className:f.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:f.list},b))))))},t}(r.a.Component),w=a("MjG9"),v=a("CzIb"),y=a("Asxa"),x=a("OIbQ"),k=a.n(x),T=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(y.c,{className:k.a.row},Object(p.b)(y.a,null,Object(p.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,b=t.frontmatter,c=void 0===b?{}:b,m=t.relativePagePath,u=t.titleType,d=c.tabs,h=c.title,O=c.theme,f=c.description,y=c.keywords,x=c.date,k=Object(v.a)().interiorTheme,B=Object(i.useStaticQuery)("2456312558").site.pathPrefix,E=B?n.pathname.replace(B,""):n.pathname,I=d?E.split("/").filter(Boolean).slice(-1)[0]||o()(d[0],{lower:!0}):"",P=O||k;return Object(p.b)(l.a,{tabs:d,homepage:!1,theme:P,pageTitle:h,pageDescription:f,pageKeywords:y,titleType:u},Object(p.b)(A,{title:r?Object(p.b)(r,null):h,label:"label",tabs:d,theme:P}),d&&Object(p.b)(N,{title:h,slug:E,tabs:d,currentTab:I}),Object(p.b)(w.a,{padded:!0},a,Object(p.b)(j,{relativePagePath:m}),Object(p.b)(T,{date:x})),Object(p.b)(g.a,{pageContext:t,location:n,slug:E,tabs:d,currentTab:I}),Object(p.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},gV2B:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return l})),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return p}));var n,r=a("wx14"),b=a("zLVn"),o=(a("q1tI"),a("7ljp")),i=a("013z"),s=(a("qKvR"),["components"]),l=function(){return Object(o.b)("span",null,"Observability ",Object(o.b)("br",null)," 300-level live demo")},c={},m=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),u={Title:l,_frontmatter:c},d=i.a;function p(e){var t=e.components,a=Object(b.a)(e,s);return Object(o.b)(d,Object(r.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"17.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAADABQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABkrEuFT//xAAYEAACAwAAAAAAAAAAAAAAAAABAgARM//aAAgBAQABBQKJq4F//8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQMBAT8BV//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABgQAAIDAAAAAAAAAAAAAAAAAAAQEWLB/9oACAEBAAY/AibYv//EABkQAAIDAQAAAAAAAAAAAAAAAAABIUFRMf/aAAgBAQABPyFZhNm7EVNH/9oADAMBAAIAAwAAABCHz//EABYRAQEBAAAAAAAAAAAAAAAAAAABMf/aAAgBAwEBPxCNP//EABYRAQEBAAAAAAAAAAAAAAAAAAABMf/aAAgBAgEBPxCJj//EABoQAAEFAQAAAAAAAAAAAAAAAAEAESExQWH/2gAIAQEAAT8QmXVTkqDAXnkZhMkaYv/Z')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/platinum-demos/static/c21ae891a42d59cabc6a2ab317f4f3b3/2e753/AIOps_Observability_300_Prep.jpg",srcSet:["/platinum-demos/static/c21ae891a42d59cabc6a2ab317f4f3b3/69549/AIOps_Observability_300_Prep.jpg 288w","/platinum-demos/static/c21ae891a42d59cabc6a2ab317f4f3b3/473e3/AIOps_Observability_300_Prep.jpg 576w","/platinum-demos/static/c21ae891a42d59cabc6a2ab317f4f3b3/2e753/AIOps_Observability_300_Prep.jpg 1152w","/platinum-demos/static/c21ae891a42d59cabc6a2ab317f4f3b3/74f4b/AIOps_Observability_300_Prep.jpg 1728w","/platinum-demos/static/c21ae891a42d59cabc6a2ab317f4f3b3/cbe2c/AIOps_Observability_300_Prep.jpg 2000w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(o.b)("span",{id:"top"}),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"DEMO OVERVIEW"),Object(o.b)("th",{parentName:"tr",align:"left"}))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Scenario overview")),Object(o.b)("td",{parentName:"tr",align:"left"},"This demo shows how IBM Instana helps quickly identify and resolve an incident in a microservices-based application. The application in this demo is called Stan’s Robot Shop, and it uses various technologies such as Java, Python, and MySQL.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Demo products")),Object(o.b)("td",{parentName:"tr",align:"left"},"Instana")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Demo capabilities")),Object(o.b)("td",{parentName:"tr",align:"left"},"Dependency mapping; Intelligent alerting; Distributed tracing")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Sales guidance")),Object(o.b)("td",{parentName:"tr",align:"left"},"Download the sales guidance document ",Object(o.b)("a",{href:"https://ibm.box.com/s/lf8cn8qe9h6dexpn66vo5s8rt2pp0aka",target:"_blank",rel:"noreferrer"},"here"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Demo intro slides")),Object(o.b)("td",{parentName:"tr",align:"left"},"Download the Introduction and Overview slides ",Object(o.b)("a",{href:"https://ibm.box.com/s/hdarww1v4mlgf8r1abxrt3a6zps8h92m",target:"_blank",rel:"noreferrer"},"here"),". This is a short deck of customer-facing slides that sets the context for the demo.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Demo script")),Object(o.b)("td",{parentName:"tr",align:"left"},"A complete demo script is on the second tab above. You can download a printer-ready PDF of the demo script ",Object(o.b)("a",{href:"https://ibm.box.com/s/ovlk0ek2vi4w75ca4tdomb3cprsm9w59",target:"_blank",rel:"noreferrer"},"here"),". ",Object(o.b)("br",null),Object(o.b)("br",null)," This demo script has multiple tasks, that each have multiple steps. In each step, you have the details about what you need to do (",Object(o.b)("strong",{parentName:"td"},"Actions"),"), what you can say while delivering this demo step (",Object(o.b)("strong",{parentName:"td"},"Narration"),"), and what diagrams and screenshots you will see. ",Object(o.b)("br",null),Object(o.b)("br",null)," This demo script is a suggestion, and you are welcome to customize based on your sales opportunity. Most importantly, practice this demo in advance. If the demo seems easy for you to execute, the customer will focus on the content. If it seems difficult for you to execute, the customer will focus on your delivery.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Demo guidance")),Object(o.b)("td",{parentName:"tr",align:"left"},"The demo environment is set to automatically inject an error into the application once every hour. ",Object(o.b)("br",null)," ",Object(o.b)("br",null)," The cycle begins on the half-hour (so 9:30, 10:30, etc). You should see errors begin to show up a few minutes after this (around 32 or 33 minutes past the hour). ",Object(o.b)("br",null)," ",Object(o.b)("br",null)," The error will resolve itself and go back to a normal state after about 10 minutes. ",Object(o.b)("br",null)," ",Object(o.b)("br",null)," There are two options for how to give demos, given how this demo environment functions: ",Object(o.b)("br",null),Object(o.b)("br",null)," 1. Schedule a meeting so that you can begin a live demo at 30 minutes past the hour. This will allow you to show the active incident in real time. ",Object(o.b)("br",null)," 2. Run through the demo flow using a past incident. You can set the time period to when an incident was active (instructions are in the demo script). You will be able to run through the same scenario, except it will not show the incident alerts on the events icon on the sidebar.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Customer-ready ",Object(o.b)("br",null)," demo video")),Object(o.b)("td",{parentName:"tr",align:"left"},"View the demo video ",Object(o.b)("a",{href:"https://ibm.ent.box.com/s/eogn2t43x23nk8ksyk236teqppe5d49e",target:"_blank",rel:"noreferrer"},"here"),". This is a short, but detailed, hands-on walkthrough of the scenario. The video is customer-ready. ",Object(o.b)("br",null)," ",Object(o.b)("br",null)," Potential uses of this video are: ",Object(o.b)("br",null),Object(o.b)("br",null)," 1. Familiarize yourself with the details of this scenario ",Object(o.b)("br",null)," 2. Gain customer agreement that they would like to have a tech-seller do a deep-dive demo of this scenario ",Object(o.b)("br",null)," 3. Use as a prospecting tool to generate customer interest in these capabilities")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Customer-facing ",Object(o.b)("br",null)," expert guidance")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{href:"https://ibm.box.com/s/l38ns6xwj441brp9jb85jqs7bpoaj7vl",target:"_blank",rel:"noreferrer"},"Observability is the new APM for cloud-native applications."))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Required versions")),Object(o.b)("td",{parentName:"tr",align:"left"},"Instana 3.213")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"How to get support")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"For IBMers:")," ",Object(o.b)("br",null),"• Contact ",Object(o.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0124J683GW",target:"_blank",rel:"noreferrer"},"#itz-techzone-support")," or ",Object(o.b)("a",{href:"mailto:techzone.help@ibm.com"},Object(o.b)("a",{parentName:"td",href:"mailto:techzone.help@ibm.com"},"techzone.help@ibm.com"))," regarding issues with reserving and provisioning Tech Zone environments.",Object(o.b)("br",null),"• Contact ",Object(o.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0216F39ACU",target:"_blank",rel:"noreferrer"},"#platinumdemos-automation-support")," regarding issues with setting up and running this demo. ",Object(o.b)("br",null),Object(o.b)("br",null)," ",Object(o.b)("strong",{parentName:"td"},"For Business Partners:")," ",Object(o.b)("br",null),"• Contact ",Object(o.b)("a",{href:"mailto:techzone.help@ibm.com"},"Tech Zone Support")," regarding issues with reserving and provisioning Tech Zone environments.",Object(o.b)("br",null),"• Contact ",Object(o.b)("a",{href:"mailto:automationplatinumdemos@ibm.com"}," Automation Platinum Demos Support")," regarding issues with setting up and running this demo.")))),Object(o.b)("h3",null,Object(o.b)("strong",{parentName:"h3"},"PREPARE TO GIVE THE DEMO")),Object(o.b)(m,{mdxType:"InlineNotification"},"Business partners will need to request access to the environment. See ",Object(o.b)("strong",null,"2 - Business partners requisition instructions")," below. Allow up to two business days to receive access."),Object(o.b)("details",null,Object(o.b)("summary",null,"1 - Environment setup (live incident)"),Object(o.b)("br",null),Object(o.b)("p",null,"If you will demonstrate using a live incident (i.e. beginning the demo at 30 minutes past the hour), follow these steps. "),Object(o.b)("br",null),Object(o.b)("p",null,"Log in to the demo environment: ",Object(o.b)("br",null),"\n•\tFor IBMers, click ",Object(o.b)("a",{href:"https://ibmdemo-instanaibm.instana.io",target:"_blank",rel:"noreferrer"},"here"),". ",Object(o.b)("br",null),"\n•\tFor business partners, click ",Object(o.b)("a",{href:"https://demo-partner.instana.io/",target:"_blank",rel:"noreferrer"},"here"),"."),Object(o.b)("br",null),Object(o.b)("p",null,"No additional setup is needed."),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("details",null,Object(o.b)("summary",null,"1 - Environment setup (past incident)"),Object(o.b)("br",null),Object(o.b)("p",null,"If you will demonstrate using a past incident, follow these steps. "),Object(o.b)("br",null),Object(o.b)("p",null,"Log in to the demo environment: ",Object(o.b)("br",null),"\n•\tFor IBMers, click ",Object(o.b)("a",{href:"https://ibmdemo-instanaibm.instana.io",target:"_blank",rel:"noreferrer"},"here"),". ",Object(o.b)("br",null),"\n•\tFor business partners, click ",Object(o.b)("a",{href:"https://demo-partner.instana.io/",target:"_blank",rel:"noreferrer"},"here"),". ",Object(o.b)("br",null),Object(o.b)("br",null)),Object(o.b)("p",null,"Since you will be demonstrating using a past incident, you will need to set the time period."),Object(o.b)("undefined",null,Object(o.b)("br",null),"1. In the upper right, click the button showing the timeframe. ",Object(o.b)("br",null),Object(o.b)("br",null)," ",Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-observability/images/1_timeframe.png"})),Object(o.b)("br",null),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"At the bottom of the pop-up, set the timeframe to begin at 25 minutes past the hour and end at 35 minutes past the hour. It doesn’t matter which hour you pick. Click ",Object(o.b)("strong",{parentName:"li"},"Set Time"),".")),Object(o.b)("br",null),Object(o.b)(m,{mdxType:"InlineNotification"},"• This will ensure you see normal behavior and then a sudden change when the incident begins at 0:30.",Object(o.b)("br",null),"• Pressing 'enter' doesn’t work. You'll need to actually click the button. "),Object(o.b)("undefined",null,Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-observability/images/2_time_range.png",width:600})),Object(o.b)("br",null),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Check that the summary tab for the robot shop (",Object(o.b)("strong",{parentName:"li"},"Applications")," → ",Object(o.b)("strong",{parentName:"li"},"Robot Shop")," → ",Object(o.b)("strong",{parentName:"li"},"Summary"),") looks like the screenshot below (there should be a drop in call volume and spikes in erroneous calls and latency).")),Object(o.b)("undefined",null,Object(o.b)("br",null)," ",Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-observability/images/3_robot_shop_summary.png",width:600})),Object(o.b)("br",null),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Click ",Object(o.b)("strong",{parentName:"li"},"Events")," on the sidebar menu and check that there are open incidents, including ",Object(o.b)("strong",{parentName:"li"},"Sudden increase in the number of erroneous calls")," on the ‘discount’ service.")),Object(o.b)("undefined",null,Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-observability/images/4_open_incidents.png",width:600})," ",Object(o.b)("br",null)),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("details",null,Object(o.b)("span",{id:"requisition-instructions"}),Object(o.b)("summary",null,"2 - Business partners requisition instructions"),Object(o.b)("br",null),Object(o.b)("p",null,"To request access to the ",Object(o.b)("a",{href:"https://demo-partner.instana.io/",target:"_blank",rel:"noreferrer"},"demo environment"),", email ",Object(o.b)("a",{href:"mailto:timothy.burke@instana.com"},"Tim Burke"),". The turnaround time for requests is two business days."),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("hr",null),Object(o.b)("p",null,"Click ",Object(o.b)("a",{parentName:"p",href:"/platinum-demos/300-watson-aiops-observability/demo-script"},"here")," to go to the ",Object(o.b)("strong",{parentName:"p"},"Demo script")," on the next tab."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-300-watson-aiops-observability-demo-preparation-mdx-c80218551a2aa77f0e87.js.map