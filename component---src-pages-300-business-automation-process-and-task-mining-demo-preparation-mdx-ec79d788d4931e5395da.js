(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),b=a("NmYn"),s=a.n(b),o=a("Wbzz"),c=a("Xrax"),i=a("k4MR"),l=a("TSYQ"),m=a.n(l),p=a("QH2O"),u=a.n(p),A=a("qKvR"),d=function(e){var t,a=e.title,n=e.theme,r=e.tabs,b=void 0===r?[]:r;return Object(A.b)("div",{className:m()(u.a.pageHeader,(t={},t[u.a.withTabs]=b.length,t[u.a.darkMode]="dark"===n,t))},Object(A.b)("div",{className:"bx--grid"},Object(A.b)("div",{className:"bx--row"},Object(A.b)("div",{className:"bx--col-lg-12"},Object(A.b)("h1",{id:"page-title",className:u.a.text},a)))))},g=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,b=r.baseUrl,s=r.subDirectory,c=b+"/edit/"+r.branch+s+"/src/pages"+t;return b?Object(A.b)("div",{className:"bx--row "+g.row},Object(A.b)("div",{className:"bx--col"},Object(A.b)("a",{className:g.link,href:c},"Edit this page on GitHub"))):null},O=a("FCXl"),h=a("dI71"),N=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],b=a.map((function(e){var t,a=s()(e,{lower:!0,strict:!0}),b=a===r,c=new RegExp(r+"/?(#.*)?$"),i=n.replace(c,a);return Object(A.b)("li",{key:e,className:m()((t={},t[N.selectedItem]=b,t),N.listItem)},Object(A.b)(o.Link,{className:N.link,to:""+i},e))}));return Object(A.b)("div",{className:N.tabsContainer},Object(A.b)("div",{className:"bx--grid"},Object(A.b)("div",{className:"bx--row"},Object(A.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(A.b)("nav",{"aria-label":t},Object(A.b)("ul",{className:N.list},b))))))},t}(r.a.Component),x=a("MjG9"),w=a("CzIb"),v=a("Asxa"),y=a("OIbQ"),k=a.n(y),T=function(e){var t=e.date,a=new Date(t);return t?Object(A.b)(v.c,{className:k.a.row},Object(A.b)(v.a,null,Object(A.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,b=t.frontmatter,l=void 0===b?{}:b,m=t.relativePagePath,p=t.titleType,u=l.tabs,g=l.title,h=l.theme,N=l.description,v=l.keywords,y=l.date,k=Object(w.a)().interiorTheme,E=Object(o.useStaticQuery)("2456312558").site.pathPrefix,B=E?n.pathname.replace(E,""):n.pathname,I=u?B.split("/").filter(Boolean).slice(-1)[0]||s()(u[0],{lower:!0}):"",P=h||k;return Object(A.b)(i.a,{tabs:u,homepage:!1,theme:P,pageTitle:g,pageDescription:N,pageKeywords:v,titleType:p},Object(A.b)(d,{title:r?Object(A.b)(r,null):g,label:"label",tabs:u,theme:P}),u&&Object(A.b)(f,{title:g,slug:B,tabs:u,currentTab:I}),Object(A.b)(x.a,{padded:!0},a,Object(A.b)(j,{relativePagePath:m}),Object(A.b)(T,{date:y})),Object(A.b)(O.a,{pageContext:t,location:n,slug:B,tabs:u,currentTab:I}),Object(A.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},vdfm:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return i})),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return A}));var n,r=a("wx14"),b=a("zLVn"),s=(a("q1tI"),a("7ljp")),o=a("013z"),c=(a("qKvR"),["components"]),i=function(){return Object(s.b)("span",null,"Process and task mining ",Object(s.b)("br",null)," 300-level live demo")},l={},m=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.b)("div",e)}),p={Title:i,_frontmatter:l},u=o.a;function A(e){var t=e.components,a=Object(b.a)(e,c);return Object(s.b)(u,Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"17.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAADABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQC/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQAC/9oADAMBAAIQAxAAAAGSojQNf//EABgQAAMBAQAAAAAAAAAAAAAAAAECAwAh/9oACAEBAAEFAsHInXr/AP/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABcQAQADAAAAAAAAAAAAAAAAAAABIWH/2gAIAQEABj8CRi3/xAAaEAACAgMAAAAAAAAAAAAAAAAAASExEUFh/9oACAEBAAE/IdPhip0TUUWpQf/aAAwDAQACAAMAAAAQd+//xAAWEQEBAQAAAAAAAAAAAAAAAAABACH/2gAIAQMBAT8QIcv/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQIBAT8QrI//xAAZEAEBAAMBAAAAAAAAAAAAAAABEQAhMWH/2gAIAQEAAT8Q6Dwa8wqiaCaVrhIFALn/2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Banner",title:"Banner",src:"/platinum-demos/static/c0ed0ac7136cf5b98c995061dfe362c9/2e753/Process_mining_prep_banner.jpg",srcSet:["/platinum-demos/static/c0ed0ac7136cf5b98c995061dfe362c9/69549/Process_mining_prep_banner.jpg 288w","/platinum-demos/static/c0ed0ac7136cf5b98c995061dfe362c9/473e3/Process_mining_prep_banner.jpg 576w","/platinum-demos/static/c0ed0ac7136cf5b98c995061dfe362c9/2e753/Process_mining_prep_banner.jpg 1152w","/platinum-demos/static/c0ed0ac7136cf5b98c995061dfe362c9/74f4b/Process_mining_prep_banner.jpg 1728w","/platinum-demos/static/c0ed0ac7136cf5b98c995061dfe362c9/cbe2c/Process_mining_prep_banner.jpg 2000w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(s.b)("span",{id:"top"}),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:"left"},"DEMO OVERVIEW"),Object(s.b)("th",{parentName:"tr",align:"left"}))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:"left"},Object(s.b)("strong",{parentName:"td"},"Scenario overview")),Object(s.b)("td",{parentName:"tr",align:"left"},"This demo shows how IBM’s process mining capabilities are used to discover and analyze business processes and identify areas for improvement. A customer account closing example is used to showcase how process mining helps an organization meet regulatory requirements while also reducing process execution cost.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:"left"},Object(s.b)("strong",{parentName:"td"},"Demo products")),Object(s.b)("td",{parentName:"tr",align:"left"},"Cloud Pak for Business Automation")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:"left"},Object(s.b)("strong",{parentName:"td"},"Demo capabilities")),Object(s.b)("td",{parentName:"tr",align:"left"},"Process mining; Task mining")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:"left"},Object(s.b)("strong",{parentName:"td"},"Demo script")),Object(s.b)("td",{parentName:"tr",align:"left"},"A complete demo script is on the second tab above. ",Object(s.b)("br",null),Object(s.b)("br",null)," This demo script has multiple tasks, that each have multiple steps. In each step, you have the details about what you need to do (",Object(s.b)("strong",{parentName:"td"},"Actions"),"), what you can say while delivering this demo step (",Object(s.b)("strong",{parentName:"td"},"Narration"),"), and what diagrams and screenshots you will see. ",Object(s.b)("br",null),Object(s.b)("br",null)," This demo script is a suggestion, and you are welcome to customize based on your sales opportunity. Most importantly, practice this demo in advance. If the demo seems easy for you to execute, the customer will focus on the content. If it seems difficult for you to execute, the customer will focus on your delivery.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:"left"},Object(s.b)("strong",{parentName:"td"},"How to get support")),Object(s.b)("td",{parentName:"tr",align:"left"},"Contact ",Object(s.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0124J683GW",target:"_blank",rel:"noreferrer"},"#itz-techzone-support")," or ",Object(s.b)("a",{href:"mailto:techzone.help@ibm.com"},Object(s.b)("a",{parentName:"td",href:"mailto:techzone.help@ibm.com"},"techzone.help@ibm.com"))," regarding issues with reserving and provisioning TechZone environments. ",Object(s.b)("br",null),Object(s.b)("br",null)," Contact ",Object(s.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0216F39ACU",target:"_blank",rel:"noreferrer"},"#platinumdemos-automation-support")," regarding issues with setting up and running this demo use case.")))),Object(s.b)("h2",null,Object(s.b)("strong",{parentName:"h2"},"INSTALL THE DEMO")),Object(s.b)("details",null,Object(s.b)("summary",null,"1 - Provision a Technology Zone demo environment"),Object(s.b)("br",null),Object(s.b)("p",null,"Reserve a Technology Zone demo environment ",Object(s.b)("a",{href:"https://techzone.ibm.com/my/reservations/create/60b62d34e2a9990017299f83",target:"_blank",rel:"noreferrer"},"here"),"."),Object(s.b)("br",null),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(s.b)("details",null,Object(s.b)("summary",null,"2 - Restart the Process Mining VMs"),Object(s.b)("br",null),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Access your Technology Zone environment using the link in the reservation email. You may also use the IBM Technology Zone’s ",Object(s.b)("strong",{parentName:"li"},"My Library")," → ",Object(s.b)("strong",{parentName:"li"},"My Reservations")," page.")),Object(s.b)("br",null),Object(s.b)("ol",{start:2},Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Click the ",Object(s.b)("strong",{parentName:"p"},"Run VM(s)")," button to start the VM. ",Object(s.b)("br",null),Object(s.b)("br",null),Object(s.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-business-automation-process-and-task-mining/images/prep-3.png",width:600}),Object(s.b)("br",null))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Click to open the ",Object(s.b)("strong",{parentName:"p"},"IBM Process Mining Server")," VM. ",Object(s.b)("br",null),Object(s.b)("br",null),Object(s.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-business-automation-process-and-task-mining/images/prep-4.png",width:600}),Object(s.b)("br",null),Object(s.b)(m,{mdxType:"InlineNotification"}," ",Object(s.b)("strong",null,"NOTE"),": You will need to wait several minutes for the ",Object(s.b)("strong",null,"Process Mining server")," to start. ")))),Object(s.b)("br",null),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(s.b)("h2",null,Object(s.b)("strong",{parentName:"h2"},"PREPARE TO GIVE THE DEMO")),Object(s.b)("details",null,Object(s.b)("summary",null,"1 - Open the IBM Process Mining workspace"),Object(s.b)("br",null),Object(s.b)(m,{mdxType:"InlineNotification"}," ",Object(s.b)("strong",null,"NOTES"),": ",Object(s.b)("br",null)," • If you're already logged in, skip steps 1-4 and start at step 5 below. ",Object(s.b)("br",null)," • If a ",Object(s.b)("strong",null,"System Not Registered")," registration request appears at the top of the screen, click ",Object(s.b)("strong",null,"X")," to close it."),Object(s.b)("br",null),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Click ",Object(s.b)("strong",{parentName:"p"},"Activities"),". ",Object(s.b)("br",null),Object(s.b)("br",null),Object(s.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-business-automation-process-and-task-mining/images/activities.png",width:200}),Object(s.b)("br",null))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Click ",Object(s.b)("strong",{parentName:"p"},"Firefox"),". ",Object(s.b)("br",null),Object(s.b)("br",null),Object(s.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-business-automation-process-and-task-mining/images/firefox.png",width:200}),Object(s.b)("br",null))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Click ",Object(s.b)("strong",{parentName:"p"},"IBM Process Mining | Sign in")," on the bookmark toolbar. ",Object(s.b)("br",null),Object(s.b)("br",null),Object(s.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-business-automation-process-and-task-mining/images/toolbar.png",width:500}),Object(s.b)("br",null)," ",Object(s.b)(m,{mdxType:"InlineNotification"}," ",Object(s.b)("strong",null,"NOTE"),": If you see a ",Object(s.b)("strong",null,"Warning: Potential Security Risk Ahead")," screen, click ",Object(s.b)("strong",null,"Advanced")," and then scroll down and click ",Object(s.b)("strong",null,"Accept the Risk and Continue"),". ")," ",Object(s.b)("br",null))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Enter ’",Object(s.b)("strong",{parentName:"p"},"maintenance.admin"),"’ for the ",Object(s.b)("strong",{parentName:"p"},"UserID")," (1) and ’",Object(s.b)("strong",{parentName:"p"},"IBMDem0s!"),"’ for the ",Object(s.b)("strong",{parentName:"p"},"Password")," (2), and click ",Object(s.b)("strong",{parentName:"p"},"Sign in")," (3). ",Object(s.b)("br",null),Object(s.b)("br",null),Object(s.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-business-automation-process-and-task-mining/images/sign-in.png",width:300}),Object(s.b)("br",null))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"From the ",Object(s.b)("strong",{parentName:"p"},"Process mining")," workspace, click ",Object(s.b)("strong",{parentName:"p"},"Account Closure"),". ",Object(s.b)("br",null),Object(s.b)("br",null),Object(s.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-business-automation-process-and-task-mining/images/process-mining.png",width:800}),Object(s.b)("br",null))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"The ",Object(s.b)("strong",{parentName:"p"},"Account Closure")," model is now open. Click the ",Object(s.b)("strong",{parentName:"p"},"Datasource")," tab. ",Object(s.b)("br",null),Object(s.b)("br",null),Object(s.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-business-automation-process-and-task-mining/images/account-closure.png",width:800}),Object(s.b)("br",null))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"The ",Object(s.b)("strong",{parentName:"p"},"Datasource")," tab is now open. You’re ready to give the demo. ",Object(s.b)("br",null),Object(s.b)("br",null),Object(s.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-business-automation-process-and-task-mining/images/datasource-tab.png",width:800}),Object(s.b)("br",null)))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(s.b)("hr",null),Object(s.b)("p",null,"Click ",Object(s.b)("a",{parentName:"p",href:"/platinum-demos/300-business-automation-process-and-task-mining/demo-script"},"here")," to go to the ",Object(s.b)("strong",{parentName:"p"},"Demo script")," on the next tab."))}A.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-300-business-automation-process-and-task-mining-demo-preparation-mdx-ec79d788d4931e5395da.js.map