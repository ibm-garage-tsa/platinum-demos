(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),b=a("NmYn"),o=a.n(b),i=a("Wbzz"),l=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),A=a.n(s),m=a("QH2O"),p=a.n(m),u=a("qKvR"),d=function(e){var t,a=e.title,n=e.theme,r=e.tabs,b=void 0===r?[]:r;return Object(u.b)("div",{className:A()(p.a.pageHeader,(t={},t[p.a.withTabs]=b.length,t[p.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:p.a.text},a)))))},g=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,b=r.baseUrl,o=r.subDirectory,l=b+"/edit/"+r.branch+o+"/src/pages"+t;return b?Object(u.b)("div",{className:"bx--row "+g.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:g.link,href:l},"Edit this page on GitHub"))):null},O=a("FCXl"),h=a("dI71"),f=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],b=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),b=a===r,l=new RegExp(r+"/?(#.*)?$"),c=n.replace(l,a);return Object(u.b)("li",{key:e,className:A()((t={},t[f.selectedItem]=b,t),f.listItem)},Object(u.b)(i.Link,{className:f.link,to:""+c},e))}));return Object(u.b)("div",{className:f.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:f.list},b))))))},t}(r.a.Component),x=a("MjG9"),w=a("CzIb"),v=a("Asxa"),y=a("OIbQ"),T=a.n(y),E=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(v.c,{className:T.a.row},Object(u.b)(v.a,null,Object(u.b)("div",{className:T.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,b=t.frontmatter,s=void 0===b?{}:b,A=t.relativePagePath,m=t.titleType,p=s.tabs,g=s.title,h=s.theme,f=s.description,v=s.keywords,y=s.date,T=Object(w.a)().interiorTheme,C=Object(i.useStaticQuery)("2456312558").site.pathPrefix,k=C?n.pathname.replace(C,""):n.pathname,Q=p?k.split("/").filter(Boolean).slice(-1)[0]||o()(p[0],{lower:!0}):"",B=h||T;return Object(u.b)(c.a,{tabs:p,homepage:!1,theme:B,pageTitle:g,pageDescription:f,pageKeywords:v,titleType:m},Object(u.b)(d,{title:r?Object(u.b)(r,null):g,label:"label",tabs:p,theme:B}),p&&Object(u.b)(N,{title:g,slug:k,tabs:p,currentTab:Q}),Object(u.b)(x.a,{padded:!0},a,Object(u.b)(j,{relativePagePath:A}),Object(u.b)(E,{date:y})),Object(u.b)(O.a,{pageContext:t,location:n,slug:k,tabs:p,currentTab:Q}),Object(u.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},eh9p:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return l})),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return m}));var n=a("wx14"),r=a("zLVn"),b=(a("q1tI"),a("7ljp")),o=a("013z"),i=(a("qKvR"),["components"]),l=function(){return Object(b.b)("span",null,"Application resource management ",Object(b.b)("br",null)," 300-level live demo")},c={},s={Title:l,_frontmatter:c},A=o.a;function m(e){var t=e.components,a=Object(r.a)(e,i);return Object(b.b)(A,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(b.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"17.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAADABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEE/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwL/2gAMAwEAAhADEAAAAccFILP/xAAXEAADAQAAAAAAAAAAAAAAAAAAARFB/9oACAEBAAEFAjK7/8QAFhEAAwAAAAAAAAAAAAAAAAAAAxAx/9oACAEDAQE/ASRf/8QAFhEAAwAAAAAAAAAAAAAAAAAAAxAx/9oACAECAQE/AR1f/8QAFBABAAAAAAAAAAAAAAAAAAAAEP/aAAgBAQAGPwJ//8QAFxABAQEBAAAAAAAAAAAAAAAAAQAxYf/aAAgBAQABPyHlokkDf//aAAwDAQACAAMAAAAQgD//xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQMBAT8QgDL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAATH/2gAIAQIBAT8QV1//xAAaEAEAAgMBAAAAAAAAAAAAAAABABEhMUFh/9oACAEBAAE/EBstoGptq49iKaHHeT//2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(b.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/platinum-demos/static/0fad36365bf03332902f9ba2c7aa38f4/2e753/ARM-GitHub-prep-banner-12-15-21.jpg",srcSet:["/platinum-demos/static/0fad36365bf03332902f9ba2c7aa38f4/69549/ARM-GitHub-prep-banner-12-15-21.jpg 288w","/platinum-demos/static/0fad36365bf03332902f9ba2c7aa38f4/473e3/ARM-GitHub-prep-banner-12-15-21.jpg 576w","/platinum-demos/static/0fad36365bf03332902f9ba2c7aa38f4/2e753/ARM-GitHub-prep-banner-12-15-21.jpg 1152w","/platinum-demos/static/0fad36365bf03332902f9ba2c7aa38f4/74f4b/ARM-GitHub-prep-banner-12-15-21.jpg 1728w","/platinum-demos/static/0fad36365bf03332902f9ba2c7aa38f4/cbe2c/ARM-GitHub-prep-banner-12-15-21.jpg 2000w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(b.b)("span",{id:"top"}),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"DEMO OVERVIEW"),Object(b.b)("th",{parentName:"tr",align:"left"}))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Scenario overview")),Object(b.b)("td",{parentName:"tr",align:"left"},"This demo shows how Turbonomic and Instana work together to enable IT Ops to proactively assure application performance in increasingly complex hybrid, multi-cloud deployment environments.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Demo products")),Object(b.b)("td",{parentName:"tr",align:"left"},"Turbonomic, Instana")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Demo capabilities")),Object(b.b)("td",{parentName:"tr",align:"left"},"Full stack visibility; Resource optimization recommendations; Automatable actions")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Demo guidance")),Object(b.b)("td",{parentName:"tr",align:"left"},"A complete demo script is on the second tab above. You can download a printer-ready PDF of the demo script ",Object(b.b)("a",{href:"/platinum-demos/3597732e9c4119338381f757a2febcb8/300-Application-Resource-Management.pdf",target:"_blank",rel:"noreferrer"},"here"),". ",Object(b.b)("br",null),Object(b.b)("br",null)," This demo script has multiple tasks that each have multiple steps. In each step, you have the details about what you need to do (",Object(b.b)("strong",{parentName:"td"},"Actions"),"), what you can say while delivering this demo step (",Object(b.b)("strong",{parentName:"td"},"Narration"),"), and what diagrams and screenshots you will see.",Object(b.b)("br",null),Object(b.b)("br",null),"This demo script is a suggestion, and you are welcome to customize based on your sales opportunity. Most importantly, practice this demo in advance. If the demo seems easy for you to execute, the customer will focus on the content. If it seems difficult for you to execute, the customer will focus on your delivery.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Required versions")),Object(b.b)("td",{parentName:"tr",align:"left"},"Turbonomic 8.2, Instana 3.213")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"How to get support")),Object(b.b)("td",{parentName:"tr",align:"left"},"Contact ",Object(b.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0124J683GW",target:"_blank",rel:"noreferrer"},"#itz-techzone-support")," or ",Object(b.b)("a",{href:"mailto:techzone.help@ibm.com"},Object(b.b)("a",{parentName:"td",href:"mailto:techzone.help@ibm.com"},"techzone.help@ibm.com"))," regarding issues with reserving and provisioning TechZone environments. ",Object(b.b)("br",null),Object(b.b)("br",null)," Contact ",Object(b.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0216F39ACU",target:"_blank",rel:"noreferrer"},"#platinumdemos-automation-support")," regarding issues with setting up and running this demo use case.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"PREPARE TO GIVE THE DEMO")),Object(b.b)("details",null,Object(b.b)("summary",null,"Logging in to the CoC-managed clusters"),Object(b.b)("br",null),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"This demo uses the CoC-managed clusters ",Object(b.b)("a",{href:"https://cmc.coc-ibm.com/home",target:"_blank",rel:"noreferrer"},"here"),".")),Object(b.b)("br",null),Object(b.b)("ol",{start:2},Object(b.b)("li",{parentName:"ol"},"If you are not registered with the Center of Competence (CoC), complete the registration ",Object(b.b)("a",{href:"https://cmc.coc-ibm.com/registration",target:"_blank",rel:"noreferrer"},"here")," to get your personal credentials from the CoC LDAP systems.")),Object(b.b)("br",null),Object(b.b)("ol",{start:3},Object(b.b)("li",{parentName:"ol"},"The clusters that will be used in this demo require you to reserve a time slot.")),Object(b.b)("br",null),Object(b.b)("ol",{start:4},Object(b.b)("li",{parentName:"ol"},"The clusters that we will use here are available under the ",Object(b.b)("strong",{parentName:"li"},"Watson AIOps")," category. Click ",Object(b.b)("strong",{parentName:"li"},"View Clusters"),".")),Object(b.b)("undefined",null,Object(b.b)("br",null),Object(b.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/CoC-Managed-Clusters.jpg",width:800})),Object(b.b)("br",null),Object(b.b)("ol",{start:5},Object(b.b)("li",{parentName:"ol"},"We will be using the ",Object(b.b)("strong",{parentName:"li"},"Vader")," cluster. The CoC clusters require a prior reservation. Click ",Object(b.b)("strong",{parentName:"li"},"Reservations")," to reserve or verify your reservation. Then, return to the main Watson AIOps clusters page. ",Object(b.b)("br",null),Object(b.b)("br",null)," ",Object(b.b)("strong",{parentName:"li"},"Note"),": You can select any time on the day, as long as it doesn’t overlap with another person’s reserved time.")),Object(b.b)("undefined",null,Object(b.b)("br",null),Object(b.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/Vader-Reservations.jpg",width:400})),Object(b.b)("br",null),Object(b.b)("ol",{start:6},Object(b.b)("li",{parentName:"ol"},"Make note of the URL (1) to access Turbonomic and the CoC-provided credentials (2) to log in to Turbonomic. ",Object(b.b)("br",null),Object(b.b)("br",null)," ",Object(b.b)("strong",{parentName:"li"},"Note"),": In the screenshot below, ”",Object(b.b)("strong",{parentName:"li"},"CMC credentials"),"” means the same thing as CoC-provided credentials. ",Object(b.b)("br",null)," ",Object(b.b)("img",{parentName:"li",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/Preparation_6.png",width:800}))),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(b.b)("details",null,Object(b.b)("summary",null,"Logging in to Turbonomic"),Object(b.b)("br",null),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"Using the CoC-provided credentials, log in to the Turbonomic instance. ")),Object(b.b)("br",null),Object(b.b)("p",null,"You should now be on the Turbonomic home page as shown below, and you should be ready to start the demo. Good luck!",Object(b.b)("br",null),Object(b.b)("br",null)),Object(b.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/Turbo-Home-Page.jpg",width:800}),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(b.b)("hr",null),Object(b.b)("p",null,"Click ",Object(b.b)("a",{parentName:"p",href:"/platinum-demos/300-watson-aiops-application-resource-management/demo-script"},"here")," to go to the ",Object(b.b)("strong",{parentName:"p"},"Demo script")," on the next tab."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-300-watson-aiops-application-resource-management-demo-preparation-mdx-0430701ec01e2373403b.js.map