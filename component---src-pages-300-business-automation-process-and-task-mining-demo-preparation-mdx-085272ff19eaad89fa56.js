(window.webpackJsonp=window.webpackJsonp||[]).push([[42,37,45,81],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),b=a("NmYn"),o=a.n(b),s=a("Wbzz"),i=a("Xrax"),c=a("k4MR"),l=a("TSYQ"),m=a.n(l),p=a("QH2O"),d=a.n(p),u=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,r=e.tabs,b=void 0===r?[]:r;return Object(u.b)("div",{className:m()(d.a.pageHeader,(t={},t[d.a.withTabs]=b.length,t[d.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:d.a.text},a)))))},A=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,b=r.baseUrl,o=r.subDirectory,i=b+"/edit/"+r.branch+o+"/src/pages"+t;return b?Object(u.b)("div",{className:"bx--row "+A.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:A.link,href:i},"Edit this page on GitHub"))):null},O=a("FCXl"),h=a("dI71"),N=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],b=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),b=a===r,i=new RegExp(r+"/?(#.*)?$"),c=n.replace(i,a);return Object(u.b)("li",{key:e,className:m()((t={},t[N.selectedItem]=b,t),N.listItem)},Object(u.b)(s.Link,{className:N.link,to:""+c},e))}));return Object(u.b)("div",{className:N.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:N.list},b))))))},t}(r.a.Component),w=a("MjG9"),y=a("CzIb"),x=a("Asxa"),v=a("OIbQ"),k=a.n(v),T=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(x.c,{className:k.a.row},Object(u.b)(x.a,null,Object(u.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,b=t.frontmatter,l=void 0===b?{}:b,m=t.relativePagePath,p=t.titleType,d=l.tabs,A=l.title,h=l.theme,N=l.description,x=l.keywords,v=l.date,k=Object(y.a)().interiorTheme,P=Object(s.useStaticQuery)("2456312558").site.pathPrefix,B=P?n.pathname.replace(P,""):n.pathname,E=d?B.split("/").filter(Boolean).slice(-1)[0]||o()(d[0],{lower:!0}):"",I=h||k;return Object(u.b)(c.a,{tabs:d,homepage:!1,theme:I,pageTitle:A,pageDescription:N,pageKeywords:x,titleType:p},Object(u.b)(g,{title:r?Object(u.b)(r,null):A,label:"label",tabs:d,theme:I}),d&&Object(u.b)(f,{title:A,slug:B,tabs:d,currentTab:E}),Object(u.b)(w.a,{padded:!0},a,Object(u.b)(j,{relativePagePath:m}),Object(u.b)(T,{date:v})),Object(u.b)(O.a,{pageContext:t,location:n,slug:B,tabs:d,currentTab:E}),Object(u.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},vdfm:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return c})),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return u}));var n,r=a("wx14"),b=a("zLVn"),o=(a("q1tI"),a("7ljp")),s=a("013z"),i=(a("qKvR"),["components"]),c=function(){return Object(o.b)("span",null,"Process and task mining ",Object(o.b)("br",null)," 300-level live demo")},l={},m=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),p={Title:c,_frontmatter:l},d=s.a;function u(e){var t=e.components,a=Object(b.a)(e,i);return Object(o.b)(d,Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"17.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAADABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQD/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQAC/9oADAMBAAIQAxAAAAGSkjcGv//EABgQAAIDAAAAAAAAAAAAAAAAAAECABET/9oACAEBAAEFAojHJzZ//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAEP/aAAgBAQAGPwJ//8QAGhABAAMAAwAAAAAAAAAAAAAAAQARIUFRgf/aAAgBAQABPyHhOoOo4C+3EBdyf//aAAwDAQACAAMAAAAQB+//xAAWEQEBAQAAAAAAAAAAAAAAAAABACH/2gAIAQMBAT8QIcv/xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAgEBPxBkL//EABoQAQACAwEAAAAAAAAAAAAAAAEAIRExQWH/2gAIAQEAAT8Q2jQryKqIRBx0iyixtCf/2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Banner",title:"Banner",src:"/platinum-demos/static/476b85816c6dca5c9948a21cd5ad04d4/2e753/Process_mining_prep_banner.jpg",srcSet:["/platinum-demos/static/476b85816c6dca5c9948a21cd5ad04d4/69549/Process_mining_prep_banner.jpg 288w","/platinum-demos/static/476b85816c6dca5c9948a21cd5ad04d4/473e3/Process_mining_prep_banner.jpg 576w","/platinum-demos/static/476b85816c6dca5c9948a21cd5ad04d4/2e753/Process_mining_prep_banner.jpg 1152w","/platinum-demos/static/476b85816c6dca5c9948a21cd5ad04d4/74f4b/Process_mining_prep_banner.jpg 1728w","/platinum-demos/static/476b85816c6dca5c9948a21cd5ad04d4/cbe2c/Process_mining_prep_banner.jpg 2000w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(o.b)("span",{id:"top"}),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"DEMO OVERVIEW"),Object(o.b)("th",{parentName:"tr",align:"left"}))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Scenario overview")),Object(o.b)("td",{parentName:"tr",align:"left"},"This demo shows how IBM’s process mining capabilities are used to discover and analyze business processes and identify areas for improvement. A customer account closing example is used to showcase how process mining helps an organization meet regulatory requirements while also reducing process execution cost.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Demo products")),Object(o.b)("td",{parentName:"tr",align:"left"},"Cloud Pak for Business Automation")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Demo capabilities")),Object(o.b)("td",{parentName:"tr",align:"left"},"Process mining; Task mining")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Sales guidance")),Object(o.b)("td",{parentName:"tr",align:"left"},"Download the sales guidance document ",Object(o.b)("a",{href:"https://ibm.box.com/s/jys2znu30mjuib2scvcmnm969pqq9gn2",target:"_blank",rel:"noreferrer"},"here"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Demo intro slides")),Object(o.b)("td",{parentName:"tr",align:"left"},"Download the Introduction and Overview slides ",Object(o.b)("a",{href:"https://ibm.box.com/s/5a62cvqnm12vsvvqguvaynyikvlag01r",target:"_blank",rel:"noreferrer"},"here"),". This is a short deck of customer-facing slides that sets the context for the demo.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Demo script")),Object(o.b)("td",{parentName:"tr",align:"left"},"A complete demo script is on the second tab above. You can download a printer-ready PDF of the demo script ",Object(o.b)("a",{href:"https://ibm.box.com/s/xafj4relmhnoyujom9d3m2goy50lyycc",target:"_blank",rel:"noreferrer"},"here"),". ",Object(o.b)("br",null),Object(o.b)("br",null),"This demo script has multiple tasks, that each have multiple steps. In each step, you have the details about what you need to do (",Object(o.b)("strong",{parentName:"td"},"Actions"),"), what you can say while delivering this demo step (",Object(o.b)("strong",{parentName:"td"},"Narration"),"), and what diagrams and screenshots you will see. ",Object(o.b)("br",null),Object(o.b)("br",null)," This demo script is a suggestion, and you are welcome to customize based on your sales opportunity. Most importantly, practice this demo in advance. If the demo seems easy for you to execute, the customer will focus on the content. If it seems difficult for you to execute, the customer will focus on your delivery.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Sales enablement video")),Object(o.b)("td",{parentName:"tr",align:"left"},"View the enablement video ",Object(o.b)("a",{href:"https://ibm.box.com/s/17bxesqj2gsffcnih4buddyn9tonp8qb",target:"_blank",rel:"noreferrer"},"here"),". This video is for enablement purposes only (IBMers and Business Partners) and is not customer-ready.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"How to get support")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"For IBMers:")," ",Object(o.b)("br",null),"• Contact ",Object(o.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0124J683GW",target:"_blank",rel:"noreferrer"},"#itz-techzone-support")," or ",Object(o.b)("a",{href:"mailto:techzone.help@ibm.com"},Object(o.b)("a",{parentName:"td",href:"mailto:techzone.help@ibm.com"},"techzone.help@ibm.com"))," regarding issues with reserving and provisioning Tech Zone environments.",Object(o.b)("br",null),"• Contact ",Object(o.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0216F39ACU",target:"_blank",rel:"noreferrer"},"#platinumdemos-automation-support")," regarding issues with setting up and running this demo. ",Object(o.b)("br",null),Object(o.b)("br",null)," ",Object(o.b)("strong",{parentName:"td"},"For Business Partners:")," ",Object(o.b)("br",null),"• Contact ",Object(o.b)("a",{href:"mailto:techzone.help@ibm.com"},"Tech Zone Support")," regarding issues with reserving and provisioning Tech Zone environments.",Object(o.b)("br",null),"• Contact ",Object(o.b)("a",{href:"mailto:automationplatinumdemos@ibm.com"}," Automation Platinum Demos Support")," regarding issues with setting up and running this demo.")))),Object(o.b)("h2",null,Object(o.b)("strong",{parentName:"h2"},"INSTALL THE DEMO")),Object(o.b)("details",null,Object(o.b)("summary",null,"1 - Provision a Technology Zone demo environment"),Object(o.b)("br",null),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Reserve a Technology Zone demo environment ",Object(o.b)("a",{href:"https://techzone.ibm.com/my/reservations/create/631b6a3b845753001803d600",target:"_blank",rel:"noreferrer"},"here"),". ",Object(o.b)("br",null))),Object(o.b)("br",null),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"On the reservation form, be sure to select ",Object(o.b)("strong",{parentName:"p"},"Enable")," for ",Object(o.b)("strong",{parentName:"p"},"VPN Access"),". ",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)(m,{mdxType:"InlineNotification"},"If you do not request to enable VPN access, you will not be able to access the Process mining workspace directly from a web browser on your local computer. ")," ",Object(o.b)("br",null),Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-business-automation-process-and-task-mining/images/prep-1.png",width:600}),Object(o.b)("br",null))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Wait until your reservation status is ready, and then access your Technology Zone environment using the link in the reservation email. You may also use the IBM Technology Zone’s ",Object(o.b)("strong",{parentName:"p"},"My Library")," → ",Object(o.b)("strong",{parentName:"p"},"My Reservations")," page. (You can either keep refreshing the ",Object(o.b)("strong",{parentName:"p"},"My Reservation")," page or wait for a confirmation email.)",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-business-automation-process-and-task-mining/images/prep-10.png",width:400}),Object(o.b)("br",null)))),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("details",null,Object(o.b)("summary",null,"2 - Install and configure WireGuard VPN software"),Object(o.b)("br",null),Object(o.b)(m,{mdxType:"InlineNotification"},"The demo environment can be accessed directly from your computer using WireGuard VPN. "),Object(o.b)("br",null),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Click ",Object(o.b)("a",{href:"https://www.wireguard.com/install/",target:"_blank",rel:"noreferrer"},"here")," to install WireGuard (if it is not already installed on your computer). ",Object(o.b)("br",null))),Object(o.b)("br",null),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"From the Technology Zone’s ",Object(o.b)("strong",{parentName:"p"},"My Reservations")," page, click the ",Object(o.b)("strong",{parentName:"p"},"IBM Process Mining 1.13 with Task Mining and ETL (includes IBM SPSS Modeler and Python and updated Task Mining labs)")," reservation tile. ",Object(o.b)("br",null),Object(o.b)("br",null)," ",Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-business-automation-process-and-task-mining/images/prep-12.png",width:400}),Object(o.b)("br",null))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click ",Object(o.b)("strong",{parentName:"p"},"Download Wireguard VPN config")," to download the ",Object(o.b)("strong",{parentName:"p"},"conf_wg_download.conf")," file. ",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-business-automation-process-and-task-mining/images/prep-13.png",width:200}),Object(o.b)("br",null)))),Object(o.b)(m,{mdxType:"InlineNotification"},"This config file is specific to each reservation. You will need to download and import a new config file each time you make a new reservation."),Object(o.b)("br",null),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Launch ",Object(o.b)("strong",{parentName:"li"},"WireGuard"),". ",Object(o.b)("br",null))),Object(o.b)("br",null),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"From the ",Object(o.b)("strong",{parentName:"li"},"File")," menu, select ",Object(o.b)("strong",{parentName:"li"},"Import Tunnel(s) from File")," and select the ",Object(o.b)("strong",{parentName:"li"},"conf_wg_download.conf")," file. ",Object(o.b)("br",null))),Object(o.b)("br",null),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},"Click the ",Object(o.b)("strong",{parentName:"li"},"Activate")," button to start the VPN connection.")),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("h2",null,Object(o.b)("strong",{parentName:"h2"},"PREPARE TO GIVE THE DEMO")),Object(o.b)("details",null,Object(o.b)("summary",null,"1 - Open the IBM Process Mining workspace"),Object(o.b)("br",null),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Open the following URL in a browser on your local computer: ",Object(o.b)("a",{href:"https://10.0.0.4/signin#!/workspace",target:"_blank",rel:"noreferrer"},Object(o.b)("a",{parentName:"li",href:"https://10.0.0.4/signin#!/workspace"},"https://10.0.0.4/signin#!/workspace"))," ")),Object(o.b)("br",null),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Accept all security risks.",Object(o.b)("br",null))),Object(o.b)("br",null),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Enter ’",Object(o.b)("strong",{parentName:"p"},"maintenance.admin"),"’ for the ",Object(o.b)("strong",{parentName:"p"},"Username")," and ’",Object(o.b)("strong",{parentName:"p"},"IBMDem0s!"),"’ for the ",Object(o.b)("strong",{parentName:"p"},"Password"),". Click ",Object(o.b)("strong",{parentName:"p"},"Log in"),". ",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-business-automation-process-and-task-mining/images/prep-11.png",width:300}),Object(o.b)("br",null))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"From the ",Object(o.b)("strong",{parentName:"p"},"Process mining")," workspace, click the ",Object(o.b)("strong",{parentName:"p"},"Account Closure")," tile. ",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-business-automation-process-and-task-mining/images/prep-8.png",width:800}),Object(o.b)("br",null))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click the ",Object(o.b)("strong",{parentName:"p"},"Manage")," tab (1) and then ",Object(o.b)("strong",{parentName:"p"},"Data source")," (2) from the left navigation panel. The ",Object(o.b)("strong",{parentName:"p"},"Data source")," tab is now open, and you’re ready to give the demo. ",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-business-automation-process-and-task-mining/images/prep-9.png",width:800})))),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("hr",null),Object(o.b)("p",null,"Click ",Object(o.b)("a",{parentName:"p",href:"/platinum-demos/300-business-automation-process-and-task-mining/demo-script"},"here")," to go to the ",Object(o.b)("strong",{parentName:"p"},"Demo script")," on the next tab."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-300-business-automation-process-and-task-mining-demo-preparation-mdx-085272ff19eaad89fa56.js.map