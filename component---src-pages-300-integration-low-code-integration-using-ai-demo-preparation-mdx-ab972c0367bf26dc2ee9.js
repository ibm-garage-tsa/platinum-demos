(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),b=a("NmYn"),o=a.n(b),i=a("Wbzz"),c=a("Xrax"),l=a("k4MR"),s=a("TSYQ"),p=a.n(s),m=a("QH2O"),g=a.n(m),u=a("qKvR"),d=function(e){var t,a=e.title,n=e.theme,r=e.tabs,b=void 0===r?[]:r;return Object(u.b)("div",{className:p()(g.a.pageHeader,(t={},t[g.a.withTabs]=b.length,t[g.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:g.a.text},a)))))},j=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,b=r.baseUrl,o=r.subDirectory,c=b+"/edit/"+r.branch+o+"/src/pages"+t;return b?Object(u.b)("div",{className:"bx--row "+j.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:j.link,href:c},"Edit this page on GitHub"))):null},h=a("FCXl"),A=a("dI71"),N=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(A.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],b=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),b=a===r,c=new RegExp(r+"/?(#.*)?$"),l=n.replace(c,a);return Object(u.b)("li",{key:e,className:p()((t={},t[N.selectedItem]=b,t),N.listItem)},Object(u.b)(i.Link,{className:N.link,to:""+l},e))}));return Object(u.b)("div",{className:N.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:N.list},b))))))},t}(r.a.Component),f=a("MjG9"),y=a("CzIb"),v=a("Asxa"),k=a("OIbQ"),x=a.n(k),I=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(v.c,{className:x.a.row},Object(u.b)(v.a,null,Object(u.b)("div",{className:x.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,b=t.frontmatter,s=void 0===b?{}:b,p=t.relativePagePath,m=t.titleType,g=s.tabs,j=s.title,A=s.theme,N=s.description,v=s.keywords,k=s.date,x=Object(y.a)().interiorTheme,C=Object(i.useStaticQuery)("2456312558").site.pathPrefix,P=C?n.pathname.replace(C,""):n.pathname,T=g?P.split("/").filter(Boolean).slice(-1)[0]||o()(g[0],{lower:!0}):"",E=A||x;return Object(u.b)(l.a,{tabs:g,homepage:!1,theme:E,pageTitle:j,pageDescription:N,pageKeywords:v,titleType:m},Object(u.b)(d,{title:r?Object(u.b)(r,null):j,label:"label",tabs:g,theme:E}),g&&Object(u.b)(w,{title:j,slug:P,tabs:g,currentTab:T}),Object(u.b)(f.a,{padded:!0},a,Object(u.b)(O,{relativePagePath:p}),Object(u.b)(I,{date:k})),Object(u.b)(h.a,{pageContext:t,location:n,slug:P,tabs:g,currentTab:T}),Object(u.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},jqYL:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return l})),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return u}));var n,r=a("wx14"),b=a("zLVn"),o=(a("q1tI"),a("7ljp")),i=a("013z"),c=(a("qKvR"),["components"]),l=function(){return Object(o.b)("span",null,"AI powered low-code integration ",Object(o.b)("br",null)," 300-level live demo")},s={},p=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),m={Title:l,_frontmatter:s},g=i.a;function u(e){var t=e.components,a=Object(b.a)(e,c);return Object(o.b)(g,Object(r.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"17.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAADABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAZNQScV//8QAGRAAAgMBAAAAAAAAAAAAAAAAAQIAAwQR/9oACAEBAAEFAoh6dDFbP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABkQAAIDAQAAAAAAAAAAAAAAAAABAhEhIv/aAAgBAQAGPwIijl1h/8QAGRABAAMBAQAAAAAAAAAAAAAAAQARIVFh/9oACAEBAAE/Ie+RknDZRkFMJ//aAAwDAQACAAMAAAAQfB//xAAWEQADAAAAAAAAAAAAAAAAAAABEDH/2gAIAQMBAT8QEX//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAbEAACAgMBAAAAAAAAAAAAAAABEQAhMUFh4f/aAAgBAQABPxAYDQVy4ygJB1RhvISINeT/2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/platinum-demos/static/95f244b41872cfaabbb95732a11226a0/2e753/Low-code-integration-300Prep.jpg",srcSet:["/platinum-demos/static/95f244b41872cfaabbb95732a11226a0/69549/Low-code-integration-300Prep.jpg 288w","/platinum-demos/static/95f244b41872cfaabbb95732a11226a0/473e3/Low-code-integration-300Prep.jpg 576w","/platinum-demos/static/95f244b41872cfaabbb95732a11226a0/2e753/Low-code-integration-300Prep.jpg 1152w","/platinum-demos/static/95f244b41872cfaabbb95732a11226a0/74f4b/Low-code-integration-300Prep.jpg 1728w","/platinum-demos/static/95f244b41872cfaabbb95732a11226a0/cbe2c/Low-code-integration-300Prep.jpg 2000w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(o.b)("span",{id:"top"}),Object(o.b)("h3",null,Object(o.b)("strong",{parentName:"h3"},"WARNING"),":\u2028\u2028\u2028\u2028 March 10, 2022. This demonstration’s 1-click installation does not work on the current product version. A support ticket has been submitted, and updates will be provided here daily."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"DEMO OVERVIEW"),Object(o.b)("th",{parentName:"tr",align:null}))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"Scenario overview")),Object(o.b)("td",{parentName:"tr",align:null},"In this demo, you are going to synchronize data between Salesforce and Insightly cloud CRM. You need to have these services and endpoints created and all the credentials necessary to access them securely in the demo. ",Object(o.b)("br",null),Object(o.b)("br",null)," Both Salesforce and Insightly are CRM systems provided as a SaaS (i.e., they are hosted in the cloud). In this scenario, we will synchronize contact information data between both solutions.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"Demo products")),Object(o.b)("td",{parentName:"tr",align:null},"Cloud Pak for Integration V2021.2.1")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"Demo capabilities")),Object(o.b)("td",{parentName:"tr",align:null},"Application integration, Artificial intelligence")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"Demo guidance")),Object(o.b)("td",{parentName:"tr",align:null},"A complete demo script is on the second tab above. You can download a printer-ready PDF of the demo script ",Object(o.b)("a",{href:"/platinum-demos/2b32a03cf35679913fd47f307dedc173/AI-powered-low-code-integration.pdf",target:"_blank",rel:"noreferrer"},"here"),". ",Object(o.b)("br",null),Object(o.b)("br",null)," This demo script has multiple tasks that each have multiple steps. In each step, you have the details about what you need to do (",Object(o.b)("strong",{parentName:"td"},"Actions"),"), what you can say while delivering this demo step (",Object(o.b)("strong",{parentName:"td"},"Narration"),"), and what diagrams and screenshots you will see.",Object(o.b)("br",null),Object(o.b)("br",null),"This demo script is a suggestion, and you are welcome to customize based in your sales opportunity. Most importantly, practice this demo in advance. If the demo seems easy for you to execute, the customer will focus on the content. If it seems difficult for you to execute, the customer will focus on your delivery.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"How to get support")),Object(o.b)("td",{parentName:"tr",align:null},"Contact ",Object(o.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0124J683GW",target:"_blank",rel:"noreferrer"},"#itz-techzone-support")," or ",Object(o.b)("a",{href:"mailto:techzone.help@ibm.com"},Object(o.b)("a",{parentName:"td",href:"mailto:techzone.help@ibm.com"},"techzone.help@ibm.com"))," regarding issues with reserving and provisioning TechZone environments. ",Object(o.b)("br",null),Object(o.b)("br",null)," Contact ",Object(o.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0216F39ACU",target:"_blank",rel:"noreferrer"},"#platinumdemos-automation-support")," regarding issues with setting up and running this demo use case.")))),Object(o.b)("h2",null,Object(o.b)("strong",{parentName:"h2"},"PREPARE TO GIVE THE DEMO")),Object(o.b)("span",{id:"place2"}),Object(o.b)("details",null,Object(o.b)("summary",null,"1 - Request your demo environment"),Object(o.b)("br",null),Object(o.b)("p",null,"Request your ",Object(o.b)("a",{href:"https://ibm-garage-tsa.github.io/cp4i-demohub/cp4i-on-roks/",target:"_blank",rel:"noreferrer"},"demo environment"),": ",Object(o.b)("br",null),Object(o.b)("br",null),"\na. Create a ROKS cluster in IBM Cloud ",Object(o.b)("br",null),"\nb. Install Cloud Pak for Integration on ROKS cluster ",Object(o.b)("br",null)),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#place1"},"Go to top")))),Object(o.b)("details",null,Object(o.b)("summary",null,"2 - Set up Salesforce"),Object(o.b)("br",null),Object(o.b)("p",null,"Now, let’s set up Salesforce. You will need a developer account to use for testing. If you already have a Salesforce developer account, you can use that. If not, you can sign up for a free developer account now."),Object(o.b)("br",null),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Go to ",Object(o.b)("a",{href:"https://developer.salesforce.com",target:"_blank",rel:"noreferrer"},"Salesforce Developers"),", and click ",Object(o.b)("strong",{parentName:"p"},"Sign Up"),".",Object(o.b)("br",null),Object(o.b)("br",null)),Object(o.b)("undefined",{parentName:"li"},Object(o.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-low-code-integration-using-ai/images/salesforce-dev-signup.png",width:800}),Object(o.b)("br",null))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"As soon as you have your account, log in with your dev admin account.",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-low-code-integration-using-ai/images/salesforce-dev-home.png",width:800}),Object(o.b)("br",null))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"To get your Salesforce integration URL, click your ",Object(o.b)("strong",{parentName:"p"},"user profile"),". The URL text below your account name is your login URL. Copy and paste it somewhere for later use in this demo.",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-low-code-integration-using-ai/images/salesforce-url.png",width:800}),Object(o.b)("br",null))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Next, you need to retrieve a security token. For this, click your ",Object(o.b)("strong",{parentName:"p"},"user profile")," and select ",Object(o.b)("strong",{parentName:"p"},"Settings")," in the profile panel.",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-low-code-integration-using-ai/images/salesforce-settings.png",width:800}),Object(o.b)("br",null))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Under ",Object(o.b)("strong",{parentName:"p"},"Settings"),", find and click ",Object(o.b)("strong",{parentName:"p"},"Reset Security Token"),". Then, click ",Object(o.b)("strong",{parentName:"p"},"Reset Security Token"),", and the newly-generated security token will be sent to your email.",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-low-code-integration-using-ai/images/salesforce-reset-token.png",width:800}),Object(o.b)("br",null))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Next, you will retrieve the Consumer Key and Consumer Secret. Click the ",Object(o.b)("strong",{parentName:"p"},"setup cogwheel")," at the top right.",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-low-code-integration-using-ai/images/salesforce-setup.png",width:800}),Object(o.b)("br",null))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"On the left navigator, go to ",Object(o.b)("strong",{parentName:"p"},"PLATFORM TOOLS")," > ",Object(o.b)("strong",{parentName:"p"},"Apps")," > ",Object(o.b)("strong",{parentName:"p"},"App Manager"),".",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-low-code-integration-using-ai/images/salesforce-appmanager.png",width:800}),Object(o.b)("br",null))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click ",Object(o.b)("strong",{parentName:"p"},"New Connected App"),".",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-low-code-integration-using-ai/images/salesforce-newconnectedapp.png",width:800}),Object(o.b)("br",null))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Enter ",Object(o.b)("strong",{parentName:"p"},"App Connect")," as the ",Object(o.b)("strong",{parentName:"p"},"Connect App Name"),". Enter your admin email as the ",Object(o.b)("strong",{parentName:"p"},"Contact Email"),". Mark ",Object(o.b)("strong",{parentName:"p"},"Enable OAuth Settings")," and also mark ",Object(o.b)("strong",{parentName:"p"},"Enable for Device Flow"),". Now select ",Object(o.b)("strong",{parentName:"p"},"Access and manage your data (api)")," as the ",Object(o.b)("strong",{parentName:"p"},"Selected OAuth Scopes"),", and then click ",Object(o.b)("strong",{parentName:"p"},"Save"),".",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-low-code-integration-using-ai/images/salesforce-connect-app.png",width:800}),Object(o.b)("br",null))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"It may take several minutes for the newly created connected app to be registered. Once registered, go back to ",Object(o.b)("strong",{parentName:"p"},"Apps")," > ",Object(o.b)("strong",{parentName:"p"},"Connected Apps")," > ",Object(o.b)("strong",{parentName:"p"},"Manage Connected Apps"),". Here you can copy the ",Object(o.b)("strong",{parentName:"p"},"Consumer Key")," and ",Object(o.b)("strong",{parentName:"p"},"Secret"),".",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-low-code-integration-using-ai/images/salesforce-credentials.png",width:800}),Object(o.b)("br",null)))),Object(o.b)("p",null,"Great, your Salesforce dev account is ready."),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("details",null,Object(o.b)("summary",null,"3 - Set up Insightly"),Object(o.b)("br",null),Object(o.b)("p",null,"Now, let’s set up Insightly. Insightly is a cloud-based customer relationship management (CRM) solution."),Object(o.b)("br",null),Object(o.b)("p",null,"Let’s create a trial account (15 days). Don’t worry about this time limitation. After the trial period, you can migrate your trial account to a free account (with limited users)."),Object(o.b)("br",null),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Go to ",Object(o.b)("a",{href:"https://www.insightly.com/",target:"_blank",rel:"noreferrer"},Object(o.b)("a",{parentName:"p",href:"http://www.insightly.com/"},"www.insightly.com/"))," and click ",Object(o.b)("strong",{parentName:"p"},"TRY CRM FREE"),".",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-low-code-integration-using-ai/images/prep-insightly-1.png",width:800}),Object(o.b)("br",null))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Complete the form with your personal data to create a free Insightly account. Accept the ",Object(o.b)("strong",{parentName:"p"},"Terms of Service and Privacy Policy")," and click ",Object(o.b)("strong",{parentName:"p"},"Create My Account"),".",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-low-code-integration-using-ai/images/prep-insightly-2.png",width:800}),Object(o.b)("br",null))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Confirm your email address.",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-low-code-integration-using-ai/images/prep-insightly-3.png",width:800}),Object(o.b)("br",null),Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-low-code-integration-using-ai/images/prep-insightly-4.png",width:800}),Object(o.b)("br",null))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"As soon as you confirm your email by clicking the email link, you should see an initial Insightly screen asking basic information about your company. Add some information here, and click ",Object(o.b)("strong",{parentName:"p"},"Let’s go!"),Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-low-code-integration-using-ai/images/prep-insightly-5.png",width:800}),Object(o.b)("br",null))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Close the ",Object(o.b)("strong",{parentName:"p"},"Invite your team")," dialog.",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-low-code-integration-using-ai/images/prep-insightly-6.png",width:800}),Object(o.b)("br",null))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Great! You have an Insightly account. Let’s get the API Key to enable App Connect to authenticate when making API calls. Click the ",Object(o.b)("strong",{parentName:"p"},"Profile")," icon in Insightly and select ",Object(o.b)("strong",{parentName:"p"},"User Settings"),".",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-low-code-integration-using-ai/images/prep-insightly-7.png",width:800}),Object(o.b)("br",null))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Scroll down to the bottom of the page and copy the ",Object(o.b)("strong",{parentName:"p"},"API key"),", which is a long string of characters.",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-low-code-integration-using-ai/images/prep-insightly-8.png",width:800}),Object(o.b)("br",null))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"To avoid any issues with your trial expiration date, let’s subscribe to a free account. On the top of the page, click ",Object(o.b)("strong",{parentName:"p"},"Subscribe Now"),".",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-low-code-integration-using-ai/images/prep-insightly-9.png",width:800}),Object(o.b)("br",null))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Under the ",Object(o.b)("strong",{parentName:"p"},"Free")," plan, click ",Object(o.b)("strong",{parentName:"p"},"Select Plan"),".",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-low-code-integration-using-ai/images/prep-insightly-10.png",width:800}),Object(o.b)("br",null))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"On the confirmation dialog, click ",Object(o.b)("strong",{parentName:"p"},"OK"),".",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-low-code-integration-using-ai/images/prep-insightly-11.png",width:800}),Object(o.b)("br",null)))),Object(o.b)("p",null,"Great, your Insightly account is ready."),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("details",null,Object(o.b)("summary",null,"4 - Connect Cloud Pak for Integration to your endpoints"),Object(o.b)("br",null),Object(o.b)("p",null,"Let’s configure our services endpoints in Cloud Pak for Integration."),Object(o.b)("br",null),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Open your ",Object(o.b)("strong",{parentName:"p"},"Cloud Pak for Integration")," home page. Under ",Object(o.b)("strong",{parentName:"p"},"Integrations"),", click ",Object(o.b)("strong",{parentName:"p"},"ace-designer-demo"),".",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-low-code-integration-using-ai/images/endpoint-home.png",width:800}),Object(o.b)("br",null))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Open the ",Object(o.b)("strong",{parentName:"p"},"Catalog"),".",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-low-code-integration-using-ai/images/endpoint-catalog.png",width:800}),Object(o.b)("br",null))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Here you can see a list of the available connectors.",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-low-code-integration-using-ai/images/endpoint-connectors.png",width:800}),Object(o.b)("br",null))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Search for ",Object(o.b)("strong",{parentName:"p"},"Salesforce")," and click ",Object(o.b)("strong",{parentName:"p"},"Connect"),".",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-low-code-integration-using-ai/images/endpoint-salesforce-connect.png",width:800}),Object(o.b)("br",null))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Enter your Salesforce credentials here. Insert the login URL into the connector account form, as shown below. ",Object(o.b)("strong",{parentName:"p"},"IMPORTANT"),": You ",Object(o.b)("strong",{parentName:"p"},"MUST")," enter the ",Object(o.b)("strong",{parentName:"p"},"‘https://’")," part as well. It won’t work if you just copy and paste the login URL from the Salesforce screen.",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-low-code-integration-using-ai/images/endpoint-salesforce-login-details.png",width:800}),Object(o.b)("br",null))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"To populate the ",Object(o.b)("strong",{parentName:"p"},"Password")," field on the ",Object(o.b)("strong",{parentName:"p"},"Connect to Salesforce")," screen, you will need to concatenate the password used to log into the Salesforce account with the security token received via email. For example, if your Salesforce password is ‘myGreatPassword’ and your Salesforce security token is ‘2325jsdhew4312hs534dh’ then you should enter ‘myGreatPassword2325jsdhew4312hs534dh’ in the Password field.",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-low-code-integration-using-ai/images/endpoint-salesforce-login-details2.png",width:800}),Object(o.b)("br",null))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"As needed in the connector account UI, use Salesforce’s Consumer Key and Consumer Secret as the ",Object(o.b)("strong",{parentName:"p"},"Client ID")," and ",Object(o.b)("strong",{parentName:"p"},"Client Secret"),", respectively. Click ",Object(o.b)("strong",{parentName:"p"},"Connect"),".",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-low-code-integration-using-ai/images/endpoint-salesforce-login-details3.png",width:800}),Object(o.b)("br",null))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Search for ",Object(o.b)("strong",{parentName:"p"},"Insightly")," and click ",Object(o.b)("strong",{parentName:"p"},"Connect"),".",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-low-code-integration-using-ai/images/prep-insightly-12.png",width:800}),Object(o.b)("br",null))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Paste your ",Object(o.b)("strong",{parentName:"p"},"API Key")," (1). In the ",Object(o.b)("strong",{parentName:"p"},"API Version")," field, keep ",Object(o.b)("strong",{parentName:"p"},"v3.1")," (2). Click ",Object(o.b)("strong",{parentName:"p"},"Connect")," (3).",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-low-code-integration-using-ai/images/prep-insightly-13.png",width:800}),Object(o.b)("br",null))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Your environment is ready to demo.",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-low-code-integration-using-ai/images/prep-insightly-14.png",width:800}),Object(o.b)("br",null)))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("details",null,Object(o.b)("summary",null,"5 - Reset the environment"),Object(o.b)("br",null),"1. After practicing the demo you will need to reset the environment. ",Object(o.b)("br",null),Object(o.b)("br",null),"a. Delete any contacts that were added in Insightly.",Object(o.b)("br",null),'b. Reinstall Cloud Pak for Integration to ensure you have a clean environment. Follow the "Request your demo environment" instructions (step 1) from the "Prepare to give the demo" section above.',Object(o.b)("br",null),'c. Reconnect the end points, following the "Connect Cloud Pak for Integration to your endpoints" instructions (step 4) from the "Prepare to give the demo" section above.',Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)(p,{mdxType:"InlineNotification"},"NOTE: Attempting to reuse the same environment may result in inconsistencies between your environment and what is shown in the script and screenshots."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(o.b)("p",null,"Click ",Object(o.b)("a",{parentName:"p",href:"/platinum-demos/300-integration-low-code-integration-using-ai/demo-script"},"here")," to go to ",Object(o.b)("strong",{parentName:"p"},"Demo Script")," on the next tab."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-300-integration-low-code-integration-using-ai-demo-preparation-mdx-ab972c0367bf26dc2ee9.js.map