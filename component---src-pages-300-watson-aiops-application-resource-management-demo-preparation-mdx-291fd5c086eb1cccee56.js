(window.webpackJsonp=window.webpackJsonp||[]).push([[61,33,78],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),b=a.n(o),i=a("Wbzz"),l=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),m=a.n(s),p=a("QH2O"),A=a.n(p),u=a("qKvR"),d=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(u.b)("div",{className:m()(A.a.pageHeader,(t={},t[A.a.withTabs]=o.length,t[A.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:A.a.text},a)))))},j=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,b=r.subDirectory,l=o+"/edit/"+r.branch+b+"/src/pages"+t;return o?Object(u.b)("div",{className:"bx--row "+j.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:j.link,href:l},"Edit this page on GitHub"))):null},h=a("FCXl"),O=a("dI71"),f=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=b()(e,{lower:!0,strict:!0}),o=a===r,l=new RegExp(r+"/?(#.*)?$"),c=n.replace(l,a);return Object(u.b)("li",{key:e,className:m()((t={},t[f.selectedItem]=o,t),f.listItem)},Object(u.b)(i.Link,{className:f.link,to:""+c},e))}));return Object(u.b)("div",{className:f.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:f.list},o))))))},t}(r.a.Component),x=a("MjG9"),w=a("CzIb"),y=a("Asxa"),v=a("OIbQ"),T=a.n(v),k=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(y.c,{className:T.a.row},Object(u.b)(y.a,null,Object(u.b)("div",{className:T.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,s=void 0===o?{}:o,m=t.relativePagePath,p=t.titleType,A=s.tabs,j=s.title,O=s.theme,f=s.description,y=s.keywords,v=s.date,T=Object(w.a)().interiorTheme,E=Object(i.useStaticQuery)("2456312558").site.pathPrefix,B=E?n.pathname.replace(E,""):n.pathname,C=A?B.split("/").filter(Boolean).slice(-1)[0]||b()(A[0],{lower:!0}):"",P=O||T;return Object(u.b)(c.a,{tabs:A,homepage:!1,theme:P,pageTitle:j,pageDescription:f,pageKeywords:y,titleType:p},Object(u.b)(d,{title:r?Object(u.b)(r,null):j,label:"label",tabs:A,theme:P}),A&&Object(u.b)(N,{title:j,slug:B,tabs:A,currentTab:C}),Object(u.b)(x.a,{padded:!0},a,Object(u.b)(g,{relativePagePath:m}),Object(u.b)(k,{date:v})),Object(u.b)(h.a,{pageContext:t,location:n,slug:B,tabs:A,currentTab:C}),Object(u.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},eh9p:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return c})),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return u}));var n,r=a("wx14"),o=a("zLVn"),b=(a("q1tI"),a("7ljp")),i=a("013z"),l=(a("qKvR"),["components"]),c=function(){return Object(b.b)("span",null,"Application resource management ",Object(b.b)("br",null)," 300-level live demo")},s={},m=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(b.b)("div",e)}),p={Title:c,_frontmatter:s},A=i.a;function u(e){var t=e.components,a=Object(o.a)(e,l);return Object(b.b)(A,Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(b.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"17.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAADABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEE/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwL/2gAMAwEAAhADEAAAAccFILP/xAAXEAADAQAAAAAAAAAAAAAAAAAAARFB/9oACAEBAAEFAjK7/8QAFhEAAwAAAAAAAAAAAAAAAAAAAxAx/9oACAEDAQE/ASRf/8QAFhEAAwAAAAAAAAAAAAAAAAAAAxAx/9oACAECAQE/AR1f/8QAFBABAAAAAAAAAAAAAAAAAAAAEP/aAAgBAQAGPwJ//8QAFxABAQEBAAAAAAAAAAAAAAAAAQAxYf/aAAgBAQABPyHlokkDf//aAAwDAQACAAMAAAAQgD//xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQMBAT8QgDL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAATH/2gAIAQIBAT8QV1//xAAaEAEAAgMBAAAAAAAAAAAAAAABABEhMUFh/9oACAEBAAE/EBstoGptq49iKaHHeT//2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(b.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/platinum-demos/static/0fad36365bf03332902f9ba2c7aa38f4/2e753/ARM-GitHub-prep-banner-12-15-21.jpg",srcSet:["/platinum-demos/static/0fad36365bf03332902f9ba2c7aa38f4/69549/ARM-GitHub-prep-banner-12-15-21.jpg 288w","/platinum-demos/static/0fad36365bf03332902f9ba2c7aa38f4/473e3/ARM-GitHub-prep-banner-12-15-21.jpg 576w","/platinum-demos/static/0fad36365bf03332902f9ba2c7aa38f4/2e753/ARM-GitHub-prep-banner-12-15-21.jpg 1152w","/platinum-demos/static/0fad36365bf03332902f9ba2c7aa38f4/74f4b/ARM-GitHub-prep-banner-12-15-21.jpg 1728w","/platinum-demos/static/0fad36365bf03332902f9ba2c7aa38f4/cbe2c/ARM-GitHub-prep-banner-12-15-21.jpg 2000w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(b.b)("span",{id:"top"}),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"DEMO OVERVIEW"),Object(b.b)("th",{parentName:"tr",align:"left"}))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Scenario overview")),Object(b.b)("td",{parentName:"tr",align:"left"},"This demo shows how Turbonomic and Instana work together to enable IT Ops to proactively assure application performance in increasingly complex hybrid, multi-cloud deployment environments.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Demo products")),Object(b.b)("td",{parentName:"tr",align:"left"},"Turbonomic, Instana")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Demo capabilities")),Object(b.b)("td",{parentName:"tr",align:"left"},"Full stack visibility; Resource optimization; Automatable actions")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Sales guidance")),Object(b.b)("td",{parentName:"tr",align:"left"},"Download the sales guidance document ",Object(b.b)("a",{href:"https://ibm.box.com/s/scwl7zeb9zlmc351234emqw9uz21k3fh",target:"_blank",rel:"noreferrer"},"here"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Demo intro slides")),Object(b.b)("td",{parentName:"tr",align:"left"},"Download the Introduction and Overview slides ",Object(b.b)("a",{href:"https://ibm.box.com/s/00aanzgy45vapgmsf8so4rm7047s8m0h",target:"_blank",rel:"noreferrer"},"here"),". This is a short deck of customer-facing slides that sets the context for the demo.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Demo script")),Object(b.b)("td",{parentName:"tr",align:"left"},"A complete demo script is on the second tab above. You can download a printer-ready PDF of the demo script ",Object(b.b)("a",{href:"https://ibm.box.com/s/lpjnz8gjwrbuw9iq2t8vouazaesb91yu",target:"_blank",rel:"noreferrer"},"here"),". ",Object(b.b)("br",null),Object(b.b)("br",null)," This demo script has multiple tasks that each have multiple steps. In each step, you have the details about what you need to do (",Object(b.b)("strong",{parentName:"td"},"Actions"),"), what you can say while delivering this demo step (",Object(b.b)("strong",{parentName:"td"},"Narration"),"), and what diagrams and screenshots you will see.",Object(b.b)("br",null),Object(b.b)("br",null),"This demo script is a suggestion, and you are welcome to customize based on your sales opportunity. Most importantly, practice this demo in advance. If the demo seems easy for you to execute, the customer will focus on the content. If it seems difficult for you to execute, the customer will focus on your delivery.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Sales enablement video")),Object(b.b)("td",{parentName:"tr",align:"left"},"View the enablement video ",Object(b.b)("a",{href:"https://ibm.box.com/s/e9tu0ztb5qo0fxydt2ytgshsvqx36jyn",target:"_blank",rel:"noreferrer"},"here"),". This video is for enablement purposes only (IBMers and Business Partners) and is not customer-ready.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Required versions")),Object(b.b)("td",{parentName:"tr",align:"left"},"Turbonomic 8.2, Instana 3.213")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"How to get support")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"For IBMers:")," ",Object(b.b)("br",null),"• Contact ",Object(b.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0124J683GW",target:"_blank",rel:"noreferrer"},"#itz-techzone-support")," or ",Object(b.b)("a",{href:"mailto:techzone.help@ibm.com"},Object(b.b)("a",{parentName:"td",href:"mailto:techzone.help@ibm.com"},"techzone.help@ibm.com"))," regarding issues with reserving and provisioning Tech Zone environments.",Object(b.b)("br",null),"• Contact ",Object(b.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0216F39ACU",target:"_blank",rel:"noreferrer"},"#platinumdemos-automation-support")," regarding issues with setting up and running this demo. ",Object(b.b)("br",null),Object(b.b)("br",null)," ",Object(b.b)("strong",{parentName:"td"},"For Business Partners:")," ",Object(b.b)("br",null),"• Contact ",Object(b.b)("a",{href:"mailto:techzone.help@ibm.com"},"Tech Zone Support")," regarding issues with reserving and provisioning Tech Zone environments.",Object(b.b)("br",null),"• Contact ",Object(b.b)("a",{href:"mailto:automationplatinumdemos@ibm.com"}," Automation Platinum Demos Support")," regarding issues with setting up and running this demo.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"PREPARE TO GIVE THE DEMO")),Object(b.b)("details",null,Object(b.b)("summary",null,"Sign up for a time to use the Center of Competency (CoC) environment"),Object(b.b)("br",null),Object(b.b)("p",null,"This demo uses a CoC-managed cluster. For tracking purposes, it is important to indicate an estimate of the time and date you plan to practice, set up, or deliver this demo. IBMers: Access the ",Object(b.b)("a",{href:"https://cmc.coc-ibm.com/calendar/luke",target:"_blank",rel:"noreferrer"},"environment reservations calendar")," using your W3 login. Select the ",Object(b.b)("strong",{parentName:"p"},"estimated")," date and times you plan to use the demo environment. For non-IBMers, email the estimated date and times to Jim Conallen (",Object(b.b)("a",{href:"mailto:jconallen@us.ibm.com"},Object(b.b)("a",{parentName:"p",href:"mailto:jconallen@us.ibm.com"},"jconallen@us.ibm.com")),"). Please copy ",Object(b.b)("a",{href:"mailto:automationplatinumdemos@ibm.com"},Object(b.b)("a",{parentName:"p",href:"mailto:automationplatinumdemos@ibm.com"},"automationplatinumdemos@ibm.com")),".",Object(b.b)("br",null),Object(b.b)("br",null)),Object(b.b)(m,{mdxType:"InlineNotification"},"These steps are for ",Object(b.b)("strong",null,"tracking purposes only"),". Concurrent users are permitted in this environment, therefore scheduling conflicts will not keep you from performing the demo. "),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(b.b)("details",null,Object(b.b)("summary",null,"Log in to Turbonomic"),Object(b.b)("br",null),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"Navigate to the ",Object(b.b)("a",{href:"https://nginx-turbonomic.apps.luke.coc-ibm.com/app/",target:"_blank",rel:"noreferrer"},"Turbonomic login page"),".")),Object(b.b)("br",null),Object(b.b)("ol",{start:2},Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"Accept any initial risk prompts and then log in using these credentials: ",Object(b.b)("br",null),Object(b.b)("br",null)," ",Object(b.b)("strong",{parentName:"p"},"USERID"),": cocdemo ",Object(b.b)("br",null),Object(b.b)("strong",{parentName:"p"},"PASSWORD"),": CoC#Rulz! ",Object(b.b)("br",null),Object(b.b)("br",null)," Check ",Object(b.b)("a",{href:"https://cmc.coc-ibm.com/cluster/luke",target:"_blank",rel:"noreferrer"},"here")," to verify the current login credentials. ",Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/prep-image1.png",width:800})),Object(b.b)(m,{mdxType:"InlineNotification"},"Occasional system maintenance causes the cluster to be unavailable. If you have an issue with the environment, please email Jim Conallen ",Object(b.b)("br",null)," (",Object(b.b)("a",{href:"mailto:jconallen@us.ibm.com"},"jconallen@us.ibm.com"),") with the details. Please copy ",Object(b.b)("a",{href:"mailto:automationplatinumdemos@ibm.com"},"Automation Platinum Demos Support")," on your message. ")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"You should now be on the Turbonomic home page as shown below, and you should be ready to start the demo. ",Object(b.b)("br",null)),Object(b.b)("img",{parentName:"li",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/Turbo-Home-Page.jpg",width:800}))),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(b.b)("hr",null),Object(b.b)("p",null,"Click ",Object(b.b)("a",{parentName:"p",href:"/platinum-demos/300-watson-aiops-application-resource-management/demo-script"},"here")," to go to the ",Object(b.b)("strong",{parentName:"p"},"Demo script")," on the next tab."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-300-watson-aiops-application-resource-management-demo-preparation-mdx-291fd5c086eb1cccee56.js.map