(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),b=a.n(o),i=a("Wbzz"),s=a("Xrax"),l=a("k4MR"),c=a("TSYQ"),m=a.n(c),p=a("QH2O"),A=a.n(p),u=a("qKvR"),d=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(u.b)("div",{className:m()(A.a.pageHeader,(t={},t[A.a.withTabs]=o.length,t[A.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:A.a.text},a)))))},g=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,b=r.subDirectory,s=o+"/edit/"+r.branch+b+"/src/pages"+t;return o?Object(u.b)("div",{className:"bx--row "+g.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},j=a("FCXl"),O=a("dI71"),f=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=b()(e,{lower:!0,strict:!0}),o=a===r,s=new RegExp(r+"/?(#.*)?$"),l=n.replace(s,a);return Object(u.b)("li",{key:e,className:m()((t={},t[f.selectedItem]=o,t),f.listItem)},Object(u.b)(i.Link,{className:f.link,to:""+l},e))}));return Object(u.b)("div",{className:f.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:f.list},o))))))},t}(r.a.Component),w=a("MjG9"),x=a("CzIb"),v=a("Asxa"),y=a("OIbQ"),C=a.n(y),T=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(v.c,{className:C.a.row},Object(u.b)(v.a,null,Object(u.b)("div",{className:C.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,c=void 0===o?{}:o,m=t.relativePagePath,p=t.titleType,A=c.tabs,g=c.title,O=c.theme,f=c.description,v=c.keywords,y=c.date,C=Object(x.a)().interiorTheme,k=Object(i.useStaticQuery)("2456312558").site.pathPrefix,E=k?n.pathname.replace(k,""):n.pathname,Q=A?E.split("/").filter(Boolean).slice(-1)[0]||b()(A[0],{lower:!0}):"",B=O||C;return Object(u.b)(l.a,{tabs:A,homepage:!1,theme:B,pageTitle:g,pageDescription:f,pageKeywords:v,titleType:p},Object(u.b)(d,{title:r?Object(u.b)(r,null):g,label:"label",tabs:A,theme:B}),A&&Object(u.b)(N,{title:g,slug:E,tabs:A,currentTab:Q}),Object(u.b)(w.a,{padded:!0},a,Object(u.b)(h,{relativePagePath:m}),Object(u.b)(T,{date:y})),Object(u.b)(j.a,{pageContext:t,location:n,slug:E,tabs:A,currentTab:Q}),Object(u.b)(s.a,null))}},"A+kV":function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return s})),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),b=a("013z"),i=(a("qKvR"),["components"]),s=function(){return Object(o.b)("span",null,"Application resource management ",Object(o.b)("br",null)," 300-level live demo")},l={},c={Title:s,_frontmatter:l},m=b.a;function p(e){var t=e.components,a=Object(r.a)(e,i);return Object(o.b)(m,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"17.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAADABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEE/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwL/2gAMAwEAAhADEAAAAccFILP/xAAXEAADAQAAAAAAAAAAAAAAAAAAARFB/9oACAEBAAEFAjK7/8QAFhEAAwAAAAAAAAAAAAAAAAAAAxAx/9oACAEDAQE/ASRf/8QAFhEAAwAAAAAAAAAAAAAAAAAAAxAx/9oACAECAQE/AR1f/8QAFBABAAAAAAAAAAAAAAAAAAAAEP/aAAgBAQAGPwJ//8QAFxABAQEBAAAAAAAAAAAAAAAAAQAxYf/aAAgBAQABPyHlokkDf//aAAwDAQACAAMAAAAQgD//xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQMBAT8QgDL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAATH/2gAIAQIBAT8QV1//xAAaEAEAAgMBAAAAAAAAAAAAAAABABEhMUFh/9oACAEBAAE/EBstoGptq49iKaHHeT//2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/platinum-demos/static/0fad36365bf03332902f9ba2c7aa38f4/2e753/ARM-GitHub-prep-banner-12-15-21.jpg",srcSet:["/platinum-demos/static/0fad36365bf03332902f9ba2c7aa38f4/69549/ARM-GitHub-prep-banner-12-15-21.jpg 288w","/platinum-demos/static/0fad36365bf03332902f9ba2c7aa38f4/473e3/ARM-GitHub-prep-banner-12-15-21.jpg 576w","/platinum-demos/static/0fad36365bf03332902f9ba2c7aa38f4/2e753/ARM-GitHub-prep-banner-12-15-21.jpg 1152w","/platinum-demos/static/0fad36365bf03332902f9ba2c7aa38f4/74f4b/ARM-GitHub-prep-banner-12-15-21.jpg 1728w","/platinum-demos/static/0fad36365bf03332902f9ba2c7aa38f4/cbe2c/ARM-GitHub-prep-banner-12-15-21.jpg 2000w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(o.b)("span",{id:"top"}),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"DEMO OVERVIEW"),Object(o.b)("th",{parentName:"tr",align:"left"}))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Scenario overview")),Object(o.b)("td",{parentName:"tr",align:"left"},"This demo shows how Turbonomic and Instana work together to enable IT Ops to proactively assure application performance in increasingly complex hybrid, multi-cloud deployment environments.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Demo products")),Object(o.b)("td",{parentName:"tr",align:"left"},"Turbonomic 8.2, Instana 3.213")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Demo capabilities")),Object(o.b)("td",{parentName:"tr",align:"left"},"Full stack visibility, Resource optimization recommendations, Automatable actions")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"Demo guidance")),Object(o.b)("td",{parentName:"tr",align:"left"},"A complete demo script is on the second tab above. ",Object(o.b)("br",null),Object(o.b)("br",null)," This demo script has multiple tasks that each have multiple steps. In each step, you have the details about what you need to do (",Object(o.b)("strong",{parentName:"td"},"Actions"),"), what you can say while delivering this demo step (",Object(o.b)("strong",{parentName:"td"},"Narration"),"), and what diagrams and screenshots you will see.",Object(o.b)("br",null),Object(o.b)("br",null),"This demo script is a suggestion, and you are welcome to customize based on your sales opportunity. Most importantly, practice this demo in advance. If the demo seems easy for you to execute, the customer will focus on the content. If it seems difficult for you to execute, the customer will focus on your delivery.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("strong",{parentName:"td"},"How to get support")),Object(o.b)("td",{parentName:"tr",align:"left"},"Contact ",Object(o.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0124J683GW",target:"_blank",rel:"noreferrer"},"#itz-techzone-support")," or ",Object(o.b)("a",{href:"mailto:techzone.help@ibm.com"},Object(o.b)("a",{parentName:"td",href:"mailto:techzone.help@ibm.com"},"techzone.help@ibm.com"))," regarding issues with reserving and provisioning TechZone environments. ",Object(o.b)("br",null),Object(o.b)("br",null)," Contact ",Object(o.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0216F39ACU",target:"_blank",rel:"noreferrer"},"#platinumdemos-automation-support")," regarding issues with setting up and running this demo use case.")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"PREPARE TO GIVE THE DEMO")),Object(o.b)("details",null,Object(o.b)("summary",null,"Setting up clusters"),Object(o.b)("br",null),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"This demo uses the CoC-managed clusters at ",Object(o.b)("a",{href:"https://cmc.coc-ibm.com/home",target:"_blank",rel:"noreferrer"},Object(o.b)("a",{parentName:"li",href:"https://cmc.coc-ibm.com/home"},"https://cmc.coc-ibm.com/home")),".")),Object(o.b)("br",null),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"If you are not registered with the Center of Competence (CoC), complete the registration ",Object(o.b)("a",{href:"https://cmc.coc-ibm.com/registration",target:"_blank",rel:"noreferrer"},"here")," to get your personal credentials from the CoC LDAP systems.")),Object(o.b)("br",null),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"The clusters that will be used in this demo require you to reserve a time slot.")),Object(o.b)("br",null),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"The clusters that we will use here are available under the ",Object(o.b)("strong",{parentName:"li"},"Watson AIOps")," category. Click ",Object(o.b)("strong",{parentName:"li"},"View Clusters"),".")),Object(o.b)("undefined",null,Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/CoC-Managed-Clusters.jpg",width:800})),Object(o.b)("br",null),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"We will be using the ",Object(o.b)("strong",{parentName:"li"},"Vader")," cluster. The CoC clusters require a prior reservation. Click ",Object(o.b)("strong",{parentName:"li"},"Reservations")," to reserve or verify your reservation. Then, return to the main Watson AIOps clusters page.")),Object(o.b)("undefined",null,Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/Vader-Reservations.jpg",width:400})),Object(o.b)("br",null),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},"It is recommended that you take a quick look at the layout, current configuration, and capacity of the Vader cluster master and worker nodes. Use this page to verify, at a high-level, the health of the Vader cluster components before you start the demo. Then, browse the description on the Vader home page. Note that the RHOCP cluster consists of three master nodes and seven worker nodes.")),Object(o.b)("undefined",null,Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/Vader-Cluster-Health.jpg",width:800})),Object(o.b)("br",null),Object(o.b)("ol",{start:7},Object(o.b)("li",{parentName:"ol"},"Make note of the CoC-provided credentials to log in to the CoC-managed RHOCP cluster OCP console, Instana, and Turbonomic SaaS instances.",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("strong",{parentName:"li"},"Note"),": In the screenshot below, “CMC credentials” means the same thing as CoC-provided credentials.",Object(o.b)("undefined",{parentName:"li"},Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/Vader-Credentials.jpg",width:800})))),Object(o.b)("br",null),Object(o.b)("ol",{start:8},Object(o.b)("li",{parentName:"ol"},"Using the CoC-provided credentials, log in to the OCP cluster and examine the current utilization and health of the cluster components to ensure the applications are operational.",Object(o.b)("br",null),Object(o.b)("img",{parentName:"li",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/OCP-Cluster-Health.jpg",width:800}))),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("details",null,Object(o.b)("summary",null,"Logging into Turbonomic"),Object(o.b)("br",null),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Using the CoC-provided credentials, log in to the Turbonomic instance. ")),Object(o.b)("br",null),Object(o.b)("p",null,"You should now be on the Turbonomic home page as shown below, and you should be ready to start the demo. Good luck!",Object(o.b)("br",null),Object(o.b)("br",null)),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/Turbo-Home-Page.jpg",width:800}),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("details",null,Object(o.b)("summary",null,"[Optional] Logging into Instana"),Object(o.b)("br",null),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Using the CoC-provided credentials, log in to the Instana instance.")),Object(o.b)("br",null),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Check on the health of the RobotShop application to validate that Robotshop is up and running and properly handling user traffic.")),Object(o.b)("br",null),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"From the ",Object(o.b)("strong",{parentName:"li"},"Applications")," icon, select ",Object(o.b)("strong",{parentName:"li"},"RobotShop")," and view the summary page as shown below. It represents the golden signals and provides a quick view into the health of RobotShop.",Object(o.b)("br",null),Object(o.b)("img",{parentName:"li",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-application-resource-management/images/Instana-View.jpg",width:800}))),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("p",null,"Click ",Object(o.b)("a",{parentName:"p",href:"/platinum-demos/300-watson-aiops-application-resource-management/demo-script"},"here")," to go to ",Object(o.b)("strong",{parentName:"p"},"Demo Script")," on the next tab."))}p.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-300-watson-aiops-application-resource-management-demo-preparation-sandbox-feb-28-mdx-193d1eae1b0b68562a37.js.map