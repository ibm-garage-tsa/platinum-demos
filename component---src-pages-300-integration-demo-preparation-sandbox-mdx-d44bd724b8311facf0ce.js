(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),b=a("NmYn"),o=a.n(b),i=a("Wbzz"),l=a("Xrax"),s=a("k4MR"),c=a("TSYQ"),m=a.n(c),p=a("QH2O"),u=a.n(p),d=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,r=e.tabs,b=void 0===r?[]:r;return Object(d.b)("div",{className:m()(u.a.pageHeader,(t={},t[u.a.withTabs]=b.length,t[u.a.darkMode]="dark"===n,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:u.a.text},a)))))},O=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,b=r.baseUrl,o=r.subDirectory,l=b+"/edit/"+r.branch+o+"/src/pages"+t;return b?Object(d.b)("div",{className:"bx--row "+O.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:O.link,href:l},"Edit this page on GitHub"))):null},h=a("FCXl"),A=a("dI71"),f=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(A.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],b=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),b=a===r,l=new RegExp(r+"/?(#.*)?$"),s=n.replace(l,a);return Object(d.b)("li",{key:e,className:m()((t={},t[f.selectedItem]=b,t),f.listItem)},Object(d.b)(i.Link,{className:f.link,to:""+s},e))}));return Object(d.b)("div",{className:f.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",{"aria-label":t},Object(d.b)("ul",{className:f.list},b))))))},t}(r.a.Component),N=a("MjG9"),y=a("CzIb"),v=a("Asxa"),P=a("OIbQ"),I=a.n(P),k=function(e){var t=e.date,a=new Date(t);return t?Object(d.b)(v.c,{className:I.a.row},Object(d.b)(v.a,null,Object(d.b)("div",{className:I.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,b=t.frontmatter,c=void 0===b?{}:b,m=t.relativePagePath,p=t.titleType,u=c.tabs,O=c.title,A=c.theme,f=c.description,v=c.keywords,P=c.date,I=Object(y.a)().interiorTheme,C=Object(i.useStaticQuery)("2456312558").site.pathPrefix,x=C?n.pathname.replace(C,""):n.pathname,E=u?x.split("/").filter(Boolean).slice(-1)[0]||o()(u[0],{lower:!0}):"",S=A||I;return Object(d.b)(s.a,{tabs:u,homepage:!1,theme:S,pageTitle:O,pageDescription:f,pageKeywords:v,titleType:p},Object(d.b)(g,{title:r?Object(d.b)(r,null):O,label:"label",tabs:u,theme:S}),u&&Object(d.b)(w,{title:O,slug:x,tabs:u,currentTab:E}),Object(d.b)(N.a,{padded:!0},a,Object(d.b)(j,{relativePagePath:m}),Object(d.b)(k,{date:P})),Object(d.b)(h.a,{pageContext:t,location:n,slug:x,tabs:u,currentTab:E}),Object(d.b)(l.a,null))}},"4mMv":function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return s})),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return d}));var n,r=a("wx14"),b=a("zLVn"),o=(a("q1tI"),a("7ljp")),i=a("013z"),l=(a("qKvR"),["components"]),s=function(){return Object(o.b)("span",null,"API-enabled application integration ",Object(o.b)("br",null)," 300-level live demo")},c={},m=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),p={Title:s,_frontmatter:c},u=i.a;function d(e){var t=e.components,a=Object(b.a)(e,l);return Object(o.b)(u,Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"17.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAADABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQC/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQAC/9oADAMBAAIQAxAAAAGTZFANf//EABcQAQADAAAAAAAAAAAAAAAAAAIAAQP/2gAIAQEAAQUCmjVHNqp//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFxAAAwEAAAAAAAAAAAAAAAAAAAERQf/aAAgBAQAGPwIl0aT0/8QAGRABAQADAQAAAAAAAAAAAAAAAQARIUFh/9oACAEBAAE/IePlhhgMgdQT/9oADAMBAAIAAwAAABAH7//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAEDAQE/ECf/xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPxBn/8QAHBABAAICAwEAAAAAAAAAAAAAAQARITFBUWHh/9oACAEBAAE/EDRwMeZggRYOr+sYiUQ3WCf/2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/platinum-demos/static/3789b63399db5a77a80896fb08467739/2e753/300-int-API-enabled-prep-GitHub-banner-8-3-21-short.jpg",srcSet:["/platinum-demos/static/3789b63399db5a77a80896fb08467739/69549/300-int-API-enabled-prep-GitHub-banner-8-3-21-short.jpg 288w","/platinum-demos/static/3789b63399db5a77a80896fb08467739/473e3/300-int-API-enabled-prep-GitHub-banner-8-3-21-short.jpg 576w","/platinum-demos/static/3789b63399db5a77a80896fb08467739/2e753/300-int-API-enabled-prep-GitHub-banner-8-3-21-short.jpg 1152w","/platinum-demos/static/3789b63399db5a77a80896fb08467739/74f4b/300-int-API-enabled-prep-GitHub-banner-8-3-21-short.jpg 1728w","/platinum-demos/static/3789b63399db5a77a80896fb08467739/cbe2c/300-int-API-enabled-prep-GitHub-banner-8-3-21-short.jpg 2000w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(o.b)("span",{id:"top"}),Object(o.b)("h3",null,Object(o.b)("strong",{parentName:"h3"},"WARNING"),":\u2028\u2028\u2028\u2028 March 15, 2022. This demonstration’s 1-click installation occasionally fails. As a result we have amended the below instructions to recommend use of the Demo Operator in order to provide a more options with regard to demo creation (see point 9 in “Create a ROKS Cluster in IBM Cloud” section ",Object(o.b)("a",{href:"https://ibm-garage-tsa.github.io/cp4i-demohub/cp4i-on-roks",target:"_blank",rel:"noreferrer"},"here"),". Should you prefer to continue to use the original mechanism and errors occur, please raise a ticket on the ",Object(o.b)("a",{href:"https://www.ibm.com/mysupport",target:"_blank",rel:"noreferrer"},"IBM Support Portal")," mentioning “1 click install”. We are working very closely with support, who will assist you in getting your environment running."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"DEMO OVERVIEW"),Object(o.b)("th",{parentName:"tr",align:null}))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"Scenario overview")),Object(o.b)("td",{parentName:"tr",align:null},"Access applications through APIs and integrations. Use Watson AI together with SaaS connectivity to Salesforce and ServiceNow to create a self-service car repair API giving customers real-time estimates and integrating directly with record systems. The demo shows easy API creation with no-code App Connect Designer, rate limiting plans, security policies and self-service API consumption using the API Connect portal.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"Demo products")),Object(o.b)("td",{parentName:"tr",align:null},"Cloud Pak for Integration V2021.3")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"Demo capabilities")),Object(o.b)("td",{parentName:"tr",align:null},"IBM App Connect Enterprise, IBM App Connect Enterprise Designer, API Connect (APIC)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"Demo guidance")),Object(o.b)("td",{parentName:"tr",align:null},"A complete demo script is on the second tab above. You can download a printer-ready PDF of the demo script ",Object(o.b)("a",{href:"/platinum-demos/fced1bb0bf716842da18f1ce00db3fd2/300-Integration-API-Demo-Script.pdf",target:"_blank",rel:"noreferrer"},"here"),". ",Object(o.b)("br",null),Object(o.b)("br",null)," This demo script has multiple tasks that each have multiple steps. In each step, you have the details about what you need to do (",Object(o.b)("strong",{parentName:"td"},"Actions"),"), what you can say while delivering this demo step (",Object(o.b)("strong",{parentName:"td"},"Narration"),"), and what diagrams and screenshots you will see.",Object(o.b)("br",null),Object(o.b)("br",null),"This demo script is a suggestion, and you are welcome to customize based on your sales opportunity. Most importantly, practice this demo in advance. If the demo seems easy for you to execute, the customer will focus on the content. If it seems difficult for you to execute, the customer will focus on your delivery.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"How to get support")),Object(o.b)("td",{parentName:"tr",align:null},"Contact ",Object(o.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0124J683GW",target:"_blank",rel:"noreferrer"},"#itz-techzone-support")," or ",Object(o.b)("a",{href:"mailto:techzone.help@ibm.com"},Object(o.b)("a",{parentName:"td",href:"mailto:techzone.help@ibm.com"},"techzone.help@ibm.com"))," regarding issues with reserving and provisioning TechZone environments. ",Object(o.b)("br",null),Object(o.b)("br",null)," Contact ",Object(o.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0216F39ACU",target:"_blank",rel:"noreferrer"},"#platinumdemos-automation-support")," regarding issues with setting up and running this demo use case.")))),Object(o.b)("h3",null,Object(o.b)("strong",{parentName:"h3"},"PREPARE TO GIVE THE DEMO")),Object(o.b)("details",null,Object(o.b)("summary",null,"1 - Create a ROKS cluster in IBM Cloud"),Object(o.b)("br",null),Object(o.b)("p",null,"A Cloud Pak for Integration ROKS cluster can be provisioned from IBMDemos by following these steps:"),Object(o.b)("br",null),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Log in to ",Object(o.b)("a",{href:"https://techzone.ibm.com/",target:"_blank",rel:"noreferrer"},"IBM Tech Zone site")," using your IBM credentials.")),Object(o.b)("br",null),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"You will arrive at the dashboard screen. Click the main menu navigation. Go to ",Object(o.b)("strong",{parentName:"li"},"Openshift"),", then to ",Object(o.b)("strong",{parentName:"li"},"Clusters"),".",Object(o.b)("undefined",{parentName:"li"},Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration/images/prep-ROKS-2.png",width:800})))),Object(o.b)("br",null),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Click ",Object(o.b)("strong",{parentName:"li"},"Create cluster"),".",Object(o.b)("undefined",{parentName:"li"},Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration/images/prep-ROKS-3.png",width:800})))),Object(o.b)("br",null),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Click the dropdown under ",Object(o.b)("strong",{parentName:"li"},"OCP entitlement")," and select ",Object(o.b)("strong",{parentName:"li"},"Apply my Cloud Pak OCP entitlement to this worker pool"),".",Object(o.b)("undefined",{parentName:"li"},Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration/images/prep-ROKS-4.png",width:800})))),Object(o.b)("br",null),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"Scroll down to ",Object(o.b)("strong",{parentName:"li"},"Location"),". Click under ",Object(o.b)("strong",{parentName:"li"},"Availability")," to select ",Object(o.b)("strong",{parentName:"li"},"Single zone"),".",Object(o.b)("undefined",{parentName:"li"},Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration/images/prep-ROKS-5.png",width:800})))),Object(o.b)("br",null),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},"Choose any location under “Worker Zone”.")),Object(o.b)("br",null),Object(o.b)("ol",{start:7},Object(o.b)("li",{parentName:"ol"},"Under ",Object(o.b)("strong",{parentName:"li"},"Worker Pool"),", click ",Object(o.b)("strong",{parentName:"li"},"Change flavor"),". Choose the option with 8 vCPU and 32GB Memory. Click ",Object(o.b)("strong",{parentName:"li"},"Save worker pool flavor"),".",Object(o.b)("undefined",{parentName:"li"},Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration/images/prep-ROKS-7.png",width:800})))),Object(o.b)("br",null),Object(o.b)("ol",{start:8},Object(o.b)("li",{parentName:"ol"},"Increase ",Object(o.b)("strong",{parentName:"li"},"Worker nodes per zone")," to ",Object(o.b)("strong",{parentName:"li"},"4"),".",Object(o.b)("undefined",{parentName:"li"},Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration/images/prep-ROKS-8.png",width:800})))),Object(o.b)("br",null),Object(o.b)("ol",{start:9},Object(o.b)("li",{parentName:"ol"},"Scroll down to ",Object(o.b)("strong",{parentName:"li"},"Integrations"),". In the first block, turn off ",Object(o.b)("strong",{parentName:"li"},"Activity tracking"),". ",Object(o.b)("undefined",{parentName:"li"},Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration/images/prep-ROKS-9.png",width:800})))),Object(o.b)("br",null),Object(o.b)("ol",{start:10},Object(o.b)("li",{parentName:"ol"},"Click ",Object(o.b)("strong",{parentName:"li"},"Create")," on the bottom right of the screen. ",Object(o.b)("undefined",{parentName:"li"},Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration/images/prep-ROKS-10.png",width:500}),Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration/images/prep-ROKS-10a.png",width:500})))),Object(o.b)("br",null),Object(o.b)("ol",{start:11},Object(o.b)("li",{parentName:"ol"},"You will “Ingress status” in the detailed cluster view, as well as  Pending and Node Health at Pending 100% while the cluster is building. ",Object(o.b)("undefined",{parentName:"li"},Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration/images/prep-ROKS-11.png",width:800})))),Object(o.b)("br",null),Object(o.b)("p",null,"Now you are ready to install Cloud Pak for Integration."),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("details",null,Object(o.b)("summary",null,"2 - Install Cloud Pak for Integration on ROKS cluster"),Object(o.b)("br",null),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Log in to ",Object(o.b)("a",{href:"https://cloud.ibm.com/catalog",target:"_blank",rel:"noreferrer"},Object(o.b)("a",{parentName:"li",href:"https://cloud.ibm.com/catalog"},"https://cloud.ibm.com/catalog")),". Confirm that you are using the ",Object(o.b)("strong",{parentName:"li"},"ITZ")," account.",Object(o.b)("undefined",{parentName:"li"},Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration/images/dte_org.png",width:800})))),Object(o.b)("br",null),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Select ",Object(o.b)("strong",{parentName:"li"},"Cloud Pak for Integration")," from the catalog.",Object(o.b)("undefined",{parentName:"li"},Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration/images/cp4i_catalog.png",width:800})))),Object(o.b)("br",null),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"On ",Object(o.b)("strong",{parentName:"li"},"Select a deployment method"),", select the version of Cloud Pak for Integration that you want to install. Since some demos are ready for a specific Pak version, please check what version is necessary on the demo page.",Object(o.b)("undefined",{parentName:"li"},Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration/images/cp4i-version.png",width:800})))),Object(o.b)("br",null),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Scroll down the page to the ",Object(o.b)("strong",{parentName:"li"},"Select your cluster")," section. From the list, select the Redhat Openshift Cluster that you just created.",Object(o.b)("undefined",{parentName:"li"},Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration/images/roks-cluster2.png",width:800})))),Object(o.b)("br",null),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"Click ",Object(o.b)("strong",{parentName:"li"},"Add project"),". Enter a project name and tag name to identify your cluster.",Object(o.b)("undefined",{parentName:"li"},Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration/images/add-project.png",width:800})))),Object(o.b)("br",null),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},"Enter ",Object(o.b)("strong",{parentName:"li"},"cp4i")," as Project name. Click ",Object(o.b)("strong",{parentName:"li"},"Add"),".",Object(o.b)("undefined",{parentName:"li"},Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration/images/cp4i-project.png",width:800})))),Object(o.b)("br",null),Object(o.b)("ol",{start:7},Object(o.b)("li",{parentName:"ol"},"Scroll down to the ",Object(o.b)("strong",{parentName:"li"},"Set the deployment values")," section. Uncheck the ",Object(o.b)("strong",{parentName:"li"},"Use an existing secret?")," option to define a new password. Enter a value for csDefaultAdminPassword. It is important that you choose a password that is 32 characters in length and it conforms to the password rule - number, letter, -.")),Object(o.b)("br",null),Object(o.b)(m,{mdxType:"InlineNotification"},Object(o.b)("strong",null,"NOTE"),": Currently password validation is not enforced on this page. If you proceed with an invalid password you will be able to start the installation but it will fail. There is no way to recover from this error other than provisioning a new cluster."),Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration/images/password.png",width:800}),Object(o.b)("br",null),Object(o.b)("ol",{start:8},Object(o.b)("li",{parentName:"ol"},"Scroll down to ",Object(o.b)("strong",{parentName:"li"},"Parameters with default values"),". Click the ‘twisty’ to open them. Change the default values parameters listed below.")),Object(o.b)("br",null),Object(o.b)(m,{mdxType:"InlineNotification"},Object(o.b)("strong",null,"Warning"),": Due to issues with the current provisioning mechanism, we advise that instead of setting demoPreparation to true as described below, you instead set it to false. Now it will only installsthe Cloud Pak for Integration product in this step. Once this step is complete, then use ",Object(o.b)("a",{href:"https://www.ibm.com/docs/en/cloud-paks/cp-integration/2021.1?topic=runtimes-deploying-cloud-pak-integration-demos",target:"_blank",rel:"noreferrer"},"these instructions")," from the documentation center to complete the demo preparation using the Demo Operator.",Object(o.b)("br",null),Object(o.b)("br",null),"There are a number of advantages to using the Demo Operator:",Object(o.b)("br",null),Object(o.b)("br",null),"• You can choose to install only the demos you plan to use, reducing the install time, and simplifying your environment. ",Object(o.b)("br",null),Object(o.b)("br",null),"• Should any errors occur, you can simply delete the Demo custom resource that you have created and try creating it again, perhaps with a reduced number of demos to install. Comparatively, if demoPreparation is set to true and that installation fails, you may have to start from scratch, reprovisioning the cluster.",Object(o.b)("br",null),Object(o.b)("br",null),"• You can use this Demo operator on any Cloud Pak for Integration installation, so you are not tied to the ROKS infrastructure as you are with the current approach. You could for example use a locally installed environment.",Object(o.b)("br",null),Object(o.b)("br",null),"Please note that use of the Demo Operator requires experience with creating custom resources in OpenShift. If you do not have the required skillset to use Demo Operator, please consider continuing with demoPreparation set to true. Should this fail, you will have to either raise a ticket via the ",Object(o.b)("a",{href:"https://www.ibm.com/mysupport",target:"_blank",rel:"noreferrer"},"IBM Support Portal")," for help."),Object(o.b)("undefined",null,Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration/images/cp4i-install-param.png",width:800})),Object(o.b)("br",null),Object(o.b)("p",null,"If you do have an SMTP email server and accounts that you can use, you may sign up for a free ",Object(o.b)("a",{href:"https://mailtrap.io",target:"_blank",rel:"noreferrer"},"Mailtrap.io account"),". Mailtrap.io is a free cloud service that mimics an SMTP server. It is used for development/demonstration purposes only."),Object(o.b)("br",null),Object(o.b)("p",null,"Fill in the following fields:"),Object(o.b)("br",null),Object(o.b)("p",null,"• demoPreparation: Set to ‘true’"),Object(o.b)("br",null),Object(o.b)("p",null,"• demoAPICEmailAddress: if you’re using mailtrap.io, use any email address. Use ’",Object(o.b)("a",{parentName:"p",href:"mailto:apicadmin@example.com"},"apicadmin@example.com"),"’ to be safe — example.com is guaranteed to not be a real domain. If you’re using your own mail server, use an email address that you can receive and read."),Object(o.b)("br",null),Object(o.b)("p",null,"• demoAPICMailServerPort: if you’re using mailtrap, leave this as 2525"),Object(o.b)("br",null),Object(o.b)("p",null,"• demoAPICMialServerUsername: Set this to your mailtrap username."),Object(o.b)("br",null),Object(o.b)("p",null,"• demoAPICMailServerPassword: Set this to your mailtrap password."),Object(o.b)("br",null),Object(o.b)("ol",{start:9},Object(o.b)("li",{parentName:"ol"},"Accept the license agreement and click ",Object(o.b)("strong",{parentName:"li"},"Install")," to install Cloud Pak for Integration. The installation will take up to 90 minutes.",Object(o.b)("undefined",{parentName:"li"},Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration/images/license.png",width:800})))),Object(o.b)("br",null),Object(o.b)("ol",{start:10},Object(o.b)("li",{parentName:"ol"},"You can view the progress in the Schematics progress bar or check the details in view log.",Object(o.b)("undefined",{parentName:"li"},Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration/images/progress-bar.png",width:800})))),Object(o.b)("br",null),Object(o.b)("ol",{start:11},Object(o.b)("li",{parentName:"ol"},"When the status is ",Object(o.b)("strong",{parentName:"li"},"Active"),", you will be able to access Cloud Pak for Integration Platform Navigator. Select ",Object(o.b)("strong",{parentName:"li"},"Offering Dashboard")," on the upper right corner of the page.",Object(o.b)("undefined",{parentName:"li"},Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration/images/offering_dashboard.png",width:800})))),Object(o.b)("br",null),Object(o.b)("p",null,"You can also get to the platform navigator page from a browser by manually entering ",Object(o.b)("strong",{parentName:"p"},"cpd-cp4i<.yourcluster-domain-name>"),". Your cluster domain is shown in the ",Object(o.b)("strong",{parentName:"p"},"Details")," section in ",Object(o.b)("strong",{parentName:"p"},"Reserved Instances"),"."),Object(o.b)("br",null),Object(o.b)("ol",{start:12},Object(o.b)("li",{parentName:"ol"},"On the log in page, select the authentication type ",Object(o.b)("strong",{parentName:"li"},"IBM provided credentials (admin only)"),".",Object(o.b)("undefined",{parentName:"li"},Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration/images/authentication-types.png",width:800})))),Object(o.b)("br",null),Object(o.b)("ol",{start:13},Object(o.b)("li",{parentName:"ol"},"Log in with your admin user and password.",Object(o.b)("undefined",{parentName:"li"},Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration/images/login.png",width:800})))),Object(o.b)("br",null),Object(o.b)("ol",{start:14},Object(o.b)("li",{parentName:"ol"},"Click ",Object(o.b)("strong",{parentName:"li"},"View capabilities"),".",Object(o.b)("undefined",{parentName:"li"},Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration/images/capabilities.png",width:800})))),Object(o.b)("br",null),Object(o.b)("ol",{start:15},Object(o.b)("li",{parentName:"ol"},"The instances for API Connect, App Connect Designer, App Connect Dashboard and Asset Repository dispay here. Additional instances for any of the integration capabilities can be created by selecting ",Object(o.b)("strong",{parentName:"li"},"Create capabilities"),".",Object(o.b)("undefined",{parentName:"li"},Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration/images/instances.png",width:800})))),Object(o.b)("br",null),Object(o.b)("p",null,"You have successfully completed cluster provisioning, installation of Cloud Pak for Integration, and deployment of API Connect and App Connect. You are ready to proceed to Sales Demos or CP4I Labs that are supported on Cloud Pak for Integration on ROKS."),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("details",null,Object(o.b)("summary",null,"3 - Prerequisites, preparing your environment, and delivery options"),Object(o.b)("br",null),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Learn about ",Object(o.b)("a",{href:"https://ibm-garage-tsa.github.io/cp4i-demohub/salesdemos/carrepair-new/prepare/",target:"_blank",rel:"noreferrer"},"prerequisites and preparing your environment")),Object(o.b)("li",{parentName:"ul"},"Check the different delivery options and be ready to deliver the demo"),Object(o.b)("li",{parentName:"ul"},"Download the ",Object(o.b)("a",{parentName:"li",href:"/platinum-demos/1ee23eddb8ed39d513b58b08978672b9/slides.pptx"},"demo slides"))),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("p",null,"Click ",Object(o.b)("a",{parentName:"p",href:"/platinum-demos/300-integration/demo-script"},"here")," to go to ",Object(o.b)("strong",{parentName:"p"},"Demo Script")," on the next tab."))}d.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-300-integration-demo-preparation-sandbox-mdx-d44bd724b8311facf0ce.js.map