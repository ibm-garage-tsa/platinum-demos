(window.webpackJsonp=window.webpackJsonp||[]).push([[22,23,35,41],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),b=a("NmYn"),r=a.n(b),c=a("Wbzz"),o=a("Xrax"),s=a("k4MR"),l=a("TSYQ"),d=a.n(l),m=a("QH2O"),A=a.n(m),p=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,i=e.tabs,b=void 0===i?[]:i;return Object(p.b)("div",{className:d()(A.a.pageHeader,(t={},t[A.a.withTabs]=b.length,t[A.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:A.a.text},a)))))},u=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,b=i.baseUrl,r=i.subDirectory,o=b+"/edit/"+i.branch+r+"/src/pages"+t;return b?Object(p.b)("div",{className:"bx--row "+u.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:u.link,href:o},"Edit this page on GitHub"))):null},O=a("FCXl"),h=a("dI71"),N=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],b=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),b=a===i,o=new RegExp(i+"/?(#.*)?$"),s=n.replace(o,a);return Object(p.b)("li",{key:e,className:d()((t={},t[N.selectedItem]=b,t),N.listItem)},Object(p.b)(c.Link,{className:N.link,to:""+s},e))}));return Object(p.b)("div",{className:N.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:N.list},b))))))},t}(i.a.Component),w=a("MjG9"),y=a("CzIb"),B=a("Asxa"),x=a("OIbQ"),E=a.n(x),v=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(B.c,{className:E.a.row},Object(p.b)(B.a,null,Object(p.b)("div",{className:E.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,b=t.frontmatter,l=void 0===b?{}:b,d=t.relativePagePath,m=t.titleType,A=l.tabs,u=l.title,h=l.theme,N=l.description,B=l.keywords,x=l.date,E=Object(y.a)().interiorTheme,k=Object(c.useStaticQuery)("2456312558").site.pathPrefix,I=k?n.pathname.replace(k,""):n.pathname,Q=A?I.split("/").filter(Boolean).slice(-1)[0]||r()(A[0],{lower:!0}):"",C=h||E;return Object(p.b)(s.a,{tabs:A,homepage:!1,theme:C,pageTitle:u,pageDescription:N,pageKeywords:B,titleType:m},Object(p.b)(g,{title:i?Object(p.b)(i,null):u,label:"label",tabs:A,theme:C}),A&&Object(p.b)(f,{title:u,slug:I,tabs:A,currentTab:Q}),Object(p.b)(w.a,{padded:!0},a,Object(p.b)(j,{relativePagePath:d}),Object(p.b)(v,{date:x})),Object(p.b)(O.a,{pageContext:t,location:n,slug:I,tabs:A,currentTab:Q}),Object(p.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},oylH:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return o})),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return m}));var n=a("wx14"),i=a("zLVn"),b=(a("q1tI"),a("7ljp")),r=a("013z"),c=(a("qKvR"),["components"]),o=function(){return Object(b.b)("span",null,"API-enabled application integration ",Object(b.b)("br",null)," 100-level live demo")},s={},l={Title:o,_frontmatter:s},d=r.a;function m(e){var t=e.components,a=Object(i.a)(e,c);return Object(b.b)(d,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(b.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"17.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAADABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQC/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQAC/9oADAMBAAIQAxAAAAGTZFANf//EABcQAQADAAAAAAAAAAAAAAAAAAIAAQP/2gAIAQEAAQUCmjVHNqp//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFxAAAwEAAAAAAAAAAAAAAAAAAAERQf/aAAgBAQAGPwIl0aT0/8QAGRABAQADAQAAAAAAAAAAAAAAAQARIUFh/9oACAEBAAE/IePlhhgMgdQT/9oADAMBAAIAAwAAABAH7//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAEDAQE/ECf/xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPxBn/8QAHBABAAICAwEAAAAAAAAAAAAAAQARITFBUWHh/9oACAEBAAE/EDRwMeZggRYOr+sYiUQ3WCf/2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(b.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/platinum-demos/static/6632d8dc0e368ad39f42cb5cab5cd877/2e753/100-INT-API-enabled-Prep-GitHub-banner-short.jpg",srcSet:["/platinum-demos/static/6632d8dc0e368ad39f42cb5cab5cd877/69549/100-INT-API-enabled-Prep-GitHub-banner-short.jpg 288w","/platinum-demos/static/6632d8dc0e368ad39f42cb5cab5cd877/473e3/100-INT-API-enabled-Prep-GitHub-banner-short.jpg 576w","/platinum-demos/static/6632d8dc0e368ad39f42cb5cab5cd877/2e753/100-INT-API-enabled-Prep-GitHub-banner-short.jpg 1152w","/platinum-demos/static/6632d8dc0e368ad39f42cb5cab5cd877/74f4b/100-INT-API-enabled-Prep-GitHub-banner-short.jpg 1728w","/platinum-demos/static/6632d8dc0e368ad39f42cb5cab5cd877/cbe2c/100-INT-API-enabled-Prep-GitHub-banner-short.jpg 2000w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(b.b)("span",{id:"place1"}),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"DEMO OVERVIEW"),Object(b.b)("th",{parentName:"tr",align:"left"}))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Scenario overview")),Object(b.b)("td",{parentName:"tr",align:"left"},"Access applications through APIs and integrations. This demo automates a series of steps to: obtain and validate input information from a customer with a concern, open a case in Salesforce, attach the incoming information to the case, analyze the tone of the situation, and respond to the customer with the case number and expected date for resolution.",Object(b.b)("br",null),Object(b.b)("br",null),"To automate this customer interaction, we will use both APIs and integrations to back-end applications.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Demo products")),Object(b.b)("td",{parentName:"tr",align:"left"},"Cloud Pak for Integration V2021.1")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Demo capabilities")),Object(b.b)("td",{parentName:"tr",align:"left"},"IBM App Connect Enterprise, IBM App Connect Enterprise Designer, API Connect (APIC)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Demo guidance")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"You are using a shared demo environment with multiple sellers at the same time. Please don’t create custom flows or APIs in this environment. Don’t do any customization (including customer names). Please just follow the steps. If you need to do a customized demo, please select the 300 demo option."),Object(b.b)("br",null),Object(b.b)("br",null),"This demo script has multiple tasks that each have multiple steps. In each step, you have the details about what you need to do (",Object(b.b)("strong",{parentName:"td"},"Actions"),"), what you can say while delivering this demo step (",Object(b.b)("strong",{parentName:"td"},"Narration"),"), and what diagrams and screenshots you will see (",Object(b.b)("strong",{parentName:"td"},"Screenshots"),"). This demo script is a suggestion, and you are welcome to customize based in your sales opportunity. Most importantly, practice this demo in advance. If the demo seems easy for you to execute, the customer will focus on the content. If it seems difficult for you to execute, the customer will focus on your delivery.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"How to get support")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"#Techdemos-Automation-Support")," ",Object(b.b)("a",{href:"https://ibm.enterprise.slack.com/app_redirect?channel=techdemos-automation-support",target:"_blank",rel:"noreferrer"},"Slack channel"))))),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"PREPARE TO GIVE THE DEMO")),Object(b.b)("details",null,Object(b.b)("summary",null,"1 - Requesting access to the shared environment"),Object(b.b)("br",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"1.1")),Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"Accessing the Cloud Pak Outcomes collection")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Actions")),Object(b.b)("td",{parentName:"tr",align:"left"},"Access the ",Object(b.b)("a",{href:"https://assetrepo.ibm.com/collection/cloud-pak-outcomes",target:"_blank",rel:"noreferrer"},"Cloud Pak Outcomes")," collection on IBM Asset Repo and log in using your IBM credentials")))),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"1.2")),Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"Reserve your OpenShift cluster")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Actions")),Object(b.b)("td",{parentName:"tr",align:"left"},"On the Outcomes Environments, click on the ",Object(b.b)("strong",{parentName:"td"},"Environments")," section (1) and select ",Object(b.b)("strong",{parentName:"td"},"Cloud Pak for Integration - Outcomes")," (2)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Screenshot")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("br",null)," ",Object(b.b)("span",{parentName:"td",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"600px"}},"\n      ",Object(b.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.125%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAABlklEQVQoz62S0Y6bMBBF+eWNVolWfcrH5H/al63UqJs03YADAWNjAwbs2xmTbLOij7V0ZHtmuB6unWy3W2w2G6zX60+sVqt/8/S0iH15ecEzxXe7HRL855GI768wxzeM1sBToOs6VFWFtm3hnEPf9xE3DOhkBUm1Kj1DP5Kl0Ief6Cmf1LQZaomJhHhYa3E6nSCEQFEUKMsyztpY6IvA7/0e5zRFTusrxa95jsYY1HRQX1yQTCF8apk7FCJDToXcqZQyipY01xRPfx1IMIsxzjOc09SdLfLZw0Ci4Sbc9Q6VVFBKoa7rv2gNxQe9Z5SXMcY1MxoNCbMVyV3sLuiGCcaSZ67/8G/2cERLXcnDCSYXaLIMjUhvZDDndyiyb77lKBbmCeHGcsRM8PDTFJke8N6jJbsWHbKHujEfEi3driZGzhMd/YGbApwPi2NZePEOVevx7TigNHP5lZ7OD7r5xvu4z+2Ii51QUN2jIL8KTT4n7A93xTjXoZAtvu4VXo8aV1oP5OXIPt5qBvaz7yL371iDxfjG/wCnYzZfxA+Z9gAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(b.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"outcomes cp4i",title:"outcomes cp4i",src:"/platinum-demos/static/d59b9677e898e64d0d19190e14dee8ea/dadad/outcomes-cp4i.png",srcSet:["/platinum-demos/static/d59b9677e898e64d0d19190e14dee8ea/7fc1e/outcomes-cp4i.png 288w","/platinum-demos/static/d59b9677e898e64d0d19190e14dee8ea/a5df1/outcomes-cp4i.png 576w","/platinum-demos/static/d59b9677e898e64d0d19190e14dee8ea/dadad/outcomes-cp4i.png 600w"],sizes:"(max-width: 600px) 100vw, 600px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))))),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"1.3")),Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"Defining the details of your ROKS reservation")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Actions")),Object(b.b)("td",{parentName:"tr",align:"left"},"Select your ",Object(b.b)("em",{parentName:"td"},"Reservation type"),Object(b.b)("br",null),Object(b.b)("br",null),"Follow the ",Object(b.b)("strong",{parentName:"td"},"Create a reservation")," form to define the details of your ROKS Reservation",Object(b.b)("br",null),Object(b.b)("br",null),"After few seconds, your Cloud Pak for Integration Outcomes Demonstration is ready")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Screenshot")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("br",null)," ![](images/outcomes-reservation-type.png",Object(b.b)("br",null),Object(b.b)("span",{parentName:"td",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"600px"}},"\n      ",Object(b.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"61.45833333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB1ElEQVQoz5WS22oTURSG56q0UoqIVLxRMIoExIbJQTQ9eAjWUlFLTWgrJQWvgrmS0ou8TB4jT5HXUJrJZI6ZyZzyd//bbolopF3ws2Zm7fnXt/bemv4kj+rmK+RyD1HSddSqZexuFLFVeIT8g3u4e2cVN5cWsLy4gOdreTT299BoNLDzbhu3lm8ILeH24wJWSttYvZ+DVi5XsLmxjpfrL3D8+SNaR3toH75H80MNW5Ui9nfe4HX1GUqFp2idfEH7WwvHRwfYfVtDtayj8ukQ+tczlJrfUWyeQrNsF0PTwWjkwBg6+PHTxOB8iJFp4dzwMTBsGIYFy/bhuZ5YN4JtWbBtG74vvgUhLC+Q2RuH0JIkQRAECMMQk8kEcRwLJZf5b3E9lWUZGEmawQ0iZNOpfNdo5DjOr26e99t89ud/KU1TpMJ0EsUYCPqh42MqTLUoiqQJ6a4jSZykctRQeMSkVoakIxWfZecriCNTiTClISUJ2c0Sm8yxSUpT6iqEDI5NMxWSUB2IyhS/zzsY1riPDFJNLw9EErJAI2VGyvF4LPM8sc61ymQ2NBZ5t1zXlVl1V9fifzFLpvZW63a7qNfr6HQ6Mvd6PfT7fZim+cdI88RgczXhBboiSori4hI6AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(b.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"outcomes create reservation",title:"outcomes create reservation",src:"/platinum-demos/static/ae11f4fb71165e31cd52c0bc9d5e5b9d/dadad/outcomes-create-reservation.png",srcSet:["/platinum-demos/static/ae11f4fb71165e31cd52c0bc9d5e5b9d/7fc1e/outcomes-create-reservation.png 288w","/platinum-demos/static/ae11f4fb71165e31cd52c0bc9d5e5b9d/a5df1/outcomes-create-reservation.png 576w","/platinum-demos/static/ae11f4fb71165e31cd52c0bc9d5e5b9d/dadad/outcomes-create-reservation.png 600w"],sizes:"(max-width: 600px) 100vw, 600px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")," ",Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("span",{parentName:"td",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"600px"}},"\n      ",Object(b.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.76388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB+UlEQVQoz41RXWsTQRQdsD6oBSuVpiWbkA9cTdq0JSlijKX42BdBgvgPtklqChWFQKCV+hHT4KMvffNF/AU+2r+T0k2yG5P9mP04zkxNG5e0eOBw5+7ce+65O2T9cR4PH+URi8eRSCYhyzIy6QdYSd1D6r4MKRLF/NwcIlIYcjyK1eVlZLM5LKbTmA+FIN29g1hUQjKVwVIsDJKIhrGaXWMNEvJrWWwWcnj2ZAWFVASx0CwWZmcwPUUwRQg2chm8fFFEsfgcTzfWcfMawa3bM7ixVMD13CamE4sgylYJlXIZ1UoZB/Uamns1tPbe4n3tNaolBe9qb7D7ahtlRcGXxke0Dg+xX69jt7qNnQrrPWhBaR2h1PiKreYRCBh8XGD8HITtsPurChhIv99Hu93GcDiA53lwXRcOtQUpjw4VtG1LkH8bRV5vWBQn2hC/TZazaUJQVVUhqGkd9HpdlvfQ6XRZrkHTdeiMvM4wTEZDkFIqBCzqQO0P0RuYZw75paqeosumnHYNnHQs6AMfpkmFA8/zRfQn7Go7DgYmc85EqeOKOvLr+BjNz5/w7aeOD9+Bxg9WSP/+z4AGFw3SdfnaNnN6ZoBw69ylZfMLX9Cb0DjiuDiHy0RsSi8eJeDhPF71miOx4ABO8q8DnMdJK18mOn4mk6b9Dy4T/AMUQiuzQcLXHgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(b.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"outcomes ready",title:"outcomes ready",src:"/platinum-demos/static/f288269ec7c85172037a6ee63c67d263/dadad/outcomes-ready.png",srcSet:["/platinum-demos/static/f288269ec7c85172037a6ee63c67d263/7fc1e/outcomes-ready.png 288w","/platinum-demos/static/f288269ec7c85172037a6ee63c67d263/a5df1/outcomes-ready.png 576w","/platinum-demos/static/f288269ec7c85172037a6ee63c67d263/dadad/outcomes-ready.png 600w"],sizes:"(max-width: 600px) 100vw, 600px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))))),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",{parentName:"strong",href:"#place1"},"Go to top")))),Object(b.b)("details",null,Object(b.b)("summary",null,"2 - Accessing the Environment"),Object(b.b)("br",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"1.1")),Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"Receive and review emails")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Actions")),Object(b.b)("td",{parentName:"tr",align:"left"},"Check your email",Object(b.b)("br",null),Object(b.b)("br",null),"You should have received two emails, one from IBM Cloud and the second one from APIC Administrator",Object(b.b)("br",null),Object(b.b)("br",null)," Let’s start with the IBM Cloud’s email, and in the next section you will use the APIC Administrator’s email",Object(b.b)("br",null),Object(b.b)("br",null),"In this first email, you should have the Environment URL, login and password (",Object(b.b)("strong",{parentName:"td"},"Note"),": Take note of them, you will use them multiple times during the demo Open the ",Object(b.b)("strong",{parentName:"td"},"URL"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Screenshots")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("br",null)," ",Object(b.b)("span",{parentName:"td",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"600px"}},"\n      ",Object(b.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.29166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC30lEQVQoz22SXUiTcRTGJfFby+m+576cy20659QZJZURFloJXRTURRdddCdtRVCILIq8CFHDyCKiLqKbbsO7YYqbmJqkSH6EOn37D99X55xFWHme3ve9sJD+cODPged3nvNwUoLBINlsxfB6K1Fb66NKrxcejwetbfdwrvkCGq+9xcPOd2i9/wYdN4fo1PFm3H3QTg0Np8npdMDn85Gkrahwi7oKpLS0tCA1dR+pVIWk1+ugUqlwYH8elIUKaPUWOKrP42pHP2ruLMFb2wqrxkxKtQoFBQVSyRqlslD8K+RKCQQCyMnJhsGgh8VqhU6tQHndFRw7dRmK/DzYii04e6kF9RfvkNVSjNy8XCorK6fr/ttQqzUwGotQVGSAVquBTqdFit/vR1ZWJqRJZrNJbhbb3XC63ChUKmA0GWG3WaiizI4yl4tKS+U10dR0hhxOJ+z2Elmj0ahl6B6gGVqNBlqTDibXETgdddAqNXI/FOqn9+8HMDg4SKFQiPr6+sBxHLW3P5D10oZ7gHqYTHrYHHXkPtFIJWLA5aWHyX3oJFXVH8X05BRFIhGMj4/T2NgYRaNRiI96e59Qenra/4CiK1MRKfJVUNvtKDlYSUZTDfLUZpitZhodHaVwOIzh4WEaGRmhRCJBEvBRdzdlZKRLQNoFZmdnSRmQy+VEV1cX9fR006vnr+nFs5fU3dVBT3t7EYsx4vlVEgQBPM8jHo9LDtHz+DEyMtLoX4ckAsWzUZKvuoo2F75QMholYX6GEksLlFz5SlsrHPFzc+Dn5iHMztDa7OcdNvVpZyfG7XQE2yhT1BsMOskh7TpUibdV43EjIWaT+PEL8c3v4ONbWOQExIQNrPLr28J6YjuZ/LZNRPj5+7fssDPYBhH4N8NAwM9EIBOBrNrrYasfIiw5/YltTk2wtYlRxkUGGDc8yFaG+pe58MBybCS8sjH5kQkTYwyL8+zhrRssMzeHGfQ6JgLZH4Bs15HadE31AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(b.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"outcomes email",title:"outcomes email",src:"/platinum-demos/static/679eed94cb2a071bb09e04d531aaa274/dadad/outcomes-email.png",srcSet:["/platinum-demos/static/679eed94cb2a071bb09e04d531aaa274/7fc1e/outcomes-email.png 288w","/platinum-demos/static/679eed94cb2a071bb09e04d531aaa274/a5df1/outcomes-email.png 576w","/platinum-demos/static/679eed94cb2a071bb09e04d531aaa274/dadad/outcomes-email.png 600w"],sizes:"(max-width: 600px) 100vw, 600px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))))),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"1.1")),Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"Log in to Enterprise LDAP")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Actions")),Object(b.b)("td",{parentName:"tr",align:"left"},"If necessary, accept the risks. On the ",Object(b.b)("em",{parentName:"td"},"Log in")," page, click on ",Object(b.b)("strong",{parentName:"td"},"Enterprise LDAP")," link.",Object(b.b)("br",null),Object(b.b)("br",null),"Log in, using the username and password that you received in your email")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Screenshots")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("br",null)," ",Object(b.b)("span",{parentName:"td",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"600px"}},"\n      ",Object(b.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.72222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsTAAALEwEAmpwYAAABYUlEQVQoz5WTbU/CMBSF+RNru8Ecwvq2F9gcEQwkmqjhgzF+8v//lONtO8hQIPLh5K537bNz2m5kjIHWGq6e0+GdVAqMczDGgqIIEYlTj/d9IQRGh0VB9DwAHeTHBExjAZEkmOW5n5dTdaA/wCAbqpa/HFvY3uEmS9Hlc3RlhcZozObzy0CtcoJp2GqFql7A2oLAMvQJqgjIOUMznWFjFiize0SMX4qsUNQrlKt32G4Pu9zAWHJM8KLZedcBSAvjCeJMIckkksmUeuK4rx6oZI7d6we67R6mXqO0Ck3bwcgp7GKNav3pEygp/QLGIn8gXj3oxKHbr7Zdot1+oSCAc+Mi190z7MMbTPMCQ7GdwwBkx5hDnUR2X9empJilj6+pFk/f5PjRj/2cW4DhhHUv4w9Hy3uq6njSNwLPyZ6M/w0cXuBrkrQtfPinXNCoqip/54riupzL8XiMOI7PSpDu0hQ/3nxPKSUU0SoAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(b.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"outcomes login",title:"outcomes login",src:"/platinum-demos/static/4a4c363b4ea52c0738817dcca6dc2937/dadad/outcomes-login.png",srcSet:["/platinum-demos/static/4a4c363b4ea52c0738817dcca6dc2937/7fc1e/outcomes-login.png 288w","/platinum-demos/static/4a4c363b4ea52c0738817dcca6dc2937/a5df1/outcomes-login.png 576w","/platinum-demos/static/4a4c363b4ea52c0738817dcca6dc2937/dadad/outcomes-login.png 600w"],sizes:"(max-width: 600px) 100vw, 600px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("span",{parentName:"td",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"600px"}},"\n      ",Object(b.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.06944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsTAAALEwEAmpwYAAABpElEQVQoz42T207jMBCGeQO4SJwmEU1C48PYadI2XVhWKisESIgbLrjk+fY5/x27OG3ZReLil2OP5xvPIWfGGGit4df/KdqUUsiyDEIIpGmKJEnC6s/iuV/PotOkCXQ4j3e8Q57naJorSA7QNA0SD2edAE90BP/8Uu/UVHM4/rZagaREW9dYVNX00g8gBZDhS4Y6ONeByIa91jLYFdsLdrhuF/hhLTZKYmT7SAa3skXBwcSUsmoZtIRb70DbF9j1L5B1MHaA7W8COAIHBlLnbcR3OKhz6PksF+keqHhz8/sZm9sHBt3D8cXlauQg7Li8RvfzNaTsa1bOMtj6CnVrQx19DSuWq6vDC31t1uOI7Y4dGUBGou8HuGELWt3BrB9DBkoTyvQcXf+G+ukPissl8uQCGYOozFH6TseUleTXuA1rxc5cNyJ0u3fQcMdd5/oaHVLOMgE5X8BJvttw4y7nkEUOXRaYHQP3TVF7xU5zkP3+dGwSrlXq6zXLkWYz3ougr8dmEv0zNmE0vKOIq/jGYE86DPfnPyVCjvUN4OmAHwO/krf/BSVjUwGkaU0OAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(b.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"outcomes username",title:"outcomes username",src:"/platinum-demos/static/dca50ec7ca34c222f2132dfc70afbbd2/dadad/outcomes-username.png",srcSet:["/platinum-demos/static/dca50ec7ca34c222f2132dfc70afbbd2/7fc1e/outcomes-username.png 288w","/platinum-demos/static/dca50ec7ca34c222f2132dfc70afbbd2/a5df1/outcomes-username.png 576w","/platinum-demos/static/dca50ec7ca34c222f2132dfc70afbbd2/dadad/outcomes-username.png 600w"],sizes:"(max-width: 600px) 100vw, 600px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))))),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",{parentName:"strong",href:"#place1"},"Go to top")))),Object(b.b)("details",null,Object(b.b)("summary",null,"3 - Accepting the invitation for API Provider Organizations"),Object(b.b)("br",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"1.1")),Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"Access the Demo API Provider Organization")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Actions")),Object(b.b)("td",{parentName:"tr",align:"left"},"As part of the demo, you will need to access the Demo API Provider Organization in IBM API Connect. You should have received an email from APIC Administrator to join the demo organization. Open this email, and click the link to accept the invitation.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Screenshots")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("br",null)," ",Object(b.b)("span",{parentName:"td",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"600px"}},"\n      ",Object(b.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.94444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAABxUlEQVQoz12SWW/bMBCE9f9/TRsHiJMCfW8LBEEfmgA+dF+WRImWSFHUMV3ScmpXwIeZXZEjrkBHKYXz+QwhhKVt2zs457Zv1lzXmf48z1iW5ROtBwzDAMdsiOMYeZ6jrmu7oes6i9l4G2J6Usr7QKMAWCvBCUdT6jSOwPol/A/wr288BVx1niYbNkuBRWvbd4Zxguh79BQsCUXhgn7DFaVHTBQ2EhNtMHqJXh8KG15/fpaOoFFZEKCOQrAwRE00UWQ9p19h3nc32DrLIAjJGNivH6jfXqGbGiPhZG+/sfvwsf9zxOHdxZ7Ykb9VQ7gPkHsRMjdESmTkc498kKCIc7RxBOUe4JTHAB7T8AuBsOrhlxJeIRGRNxqQXvo9Itbf1NKS1ArdsEAMMxSd2il2Lg55By9p4KUcLnFMOLyM29rPzrZnof4hbqxnvAfvlEWqkW5AD5Ukl0DvRKdbA6746X1tSMqOaJEULcpG2tCK1IYKhTFLKZBGPlR6HYHGJEKmcGo1Uq6RnYlVKzGh7mdLJSewFW5G1nQTTjmc/HmL45cHuF83Vj1S/2GDYPOI0/MTqm9blC9PF6guVm598/0FfPsIQdfnLwbXPJSH2fMYAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(b.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"api org invitation",title:"api org invitation",src:"/platinum-demos/static/fbd5898b3498a415ca5ff8db04d655d2/dadad/api-org-invitation.png",srcSet:["/platinum-demos/static/fbd5898b3498a415ca5ff8db04d655d2/7fc1e/api-org-invitation.png 288w","/platinum-demos/static/fbd5898b3498a415ca5ff8db04d655d2/a5df1/api-org-invitation.png 576w","/platinum-demos/static/fbd5898b3498a415ca5ff8db04d655d2/dadad/api-org-invitation.png 600w"],sizes:"(max-width: 600px) 100vw, 600px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(b.b)("br",null),Object(b.b)("br",null))))),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"1.2")),Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"Access the Demo API Provider Organization")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Actions")),Object(b.b)("td",{parentName:"tr",align:"left"},"Select the ",Object(b.b)("strong",{parentName:"td"},"LDAP User Registry for Outcomes")," authentication type",Object(b.b)("br",null),Object(b.b)("br",null),"Log in using the username and password",Object(b.b)("br",null),Object(b.b)("br",null),"Now you should see a ",Object(b.b)("strong",{parentName:"td"},"Registration completed successfully")," screen. You are ready to present the demo!")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Screenshots")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("br",null)," ",Object(b.b)("span",{parentName:"td",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"600px"}},"\n      ",Object(b.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.81944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAABzElEQVQoz5VSXUsbQRTdn9anPvkbEpNQQiHNa1/FJ39AaR9KqYKgUPApggVFtA+lraStaLE1aLQx1QaT7Hxkd2Z25/TOTjcuaAsOnL33zuw5cz8maDQaqNfrKJVKKJfLt1CpVFCr1VCtVu+EO6vMzuLp/ByeNJsI4jiGUgrGGGh9Ax9r3HcFjDFwzuGs99nUD8Mwu8xaizRN/4v8n0BKmREZ4wiZwDgU4EJCCpGJFrN0pCJSiwwJfZLE7wX9fg9rrV3EscbVZQ/t/SP8OPmFwbXP3AkqnSBWhoiASbyAX4bgLsxjEjztnqG99x77ZxofjxgmfIju+QW+d84hhBdMNYNVQyKoKdFpHpwQ51uEL8cJ2sdARMeBjjk29jheb03wuSOhIk5CAlKKrA2GBHe+GqxsK7zZibG8GeHdgYUm9qO533jYHOHB42vMNAfoDSjDaCLQ+SkwHDEkiobDRVYqJ8vIGqPR+gC8WLd49dbiecti/RMVOomwuNrHwuIY8y/HeLZ0hREjQUd2WeUZuTLdnssy72FeZtGmUQR0D8kjCzltR5ALeJGifyPo+mVoivk0XWzpnRoqm2aExHpkU3bEf6GY4fS5/PXvfEoU/wEclCbs9q/LBwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(b.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"apic ldap",title:"apic ldap",src:"/platinum-demos/static/c65f0ac3055ecb512a93eb0be3edb9bd/dadad/apic-ldap.png",srcSet:["/platinum-demos/static/c65f0ac3055ecb512a93eb0be3edb9bd/7fc1e/apic-ldap.png 288w","/platinum-demos/static/c65f0ac3055ecb512a93eb0be3edb9bd/a5df1/apic-ldap.png 576w","/platinum-demos/static/c65f0ac3055ecb512a93eb0be3edb9bd/dadad/apic-ldap.png 600w"],sizes:"(max-width: 600px) 100vw, 600px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("span",{parentName:"td",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"600px"}},"\n      ",Object(b.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.81944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB4klEQVQoz5WSvW4TQRSF9+mQKHkBO7YLNxYKSCmiiB9RI5B4AAKCKgUVDUUKKoSAFKksTMAby94ktsfe+dnZndmZw51drxEKIDHS0b2j3fvdO3MmGgwG6Pf7aLVaaLfb19TpdNDr9dDtdv+o8K2zs4O9h/dxe3cXUZ7nKIoC1loY80v13uB/V8Q5hxACIdY53+ZpmiKnZs3y3sM5t5UtgzyMraNzHpFSCpwKORdIucQ6lRBSQUlZQcOk4Z90kzdgBCE0U6SyaYkomU3x5u176LzA1cUUJ6dDfP2e4GpZT24IkucagoBaZyhLSyxXlb86djh46bB/6PHgtQfjBByPY3z59AGnscHHIUcmGOLzKYajGFJJWK0xH58j+THBYpLgMp6BUXSZJAhw48Dj5j2PW488LhgBTS7w7rPA4XGGk5FCoQUkHVepcHQJQ5NljCHLg3ElTEkiI+2KYcqAs5nHWeIxmoa7JKCmTt8mEmzFURZkjpDVUSujCGjJpHmywoxZXDKDhOKCEXC92t7bby6HwjBVmCgYI2UNk6RU0IVrjhdHc9x5kmL/2Rp3n6Z4/HwJvVhWqHLjblAwK2oAFUTKa7mhZ5OT6xm9AE1qots4HtyuXG8mDIV/UwX8x+MOIN/EjX4C+MUl2rDOINAAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(b.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"apic login",title:"apic login",src:"/platinum-demos/static/9ae4fd2fdda7fb009a3620c8c51df0c0/dadad/apic-login.png",srcSet:["/platinum-demos/static/9ae4fd2fdda7fb009a3620c8c51df0c0/7fc1e/apic-login.png 288w","/platinum-demos/static/9ae4fd2fdda7fb009a3620c8c51df0c0/a5df1/apic-login.png 576w","/platinum-demos/static/9ae4fd2fdda7fb009a3620c8c51df0c0/dadad/apic-login.png 600w"],sizes:"(max-width: 600px) 100vw, 600px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("span",{parentName:"td",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"600px"}},"\n      ",Object(b.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.47222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB1UlEQVQoz32Ry27TQBSG/VhlmRdou4gE7JoocRWBFMFrEAmxAKnseAA2qN12wcIVXlDUVUG5VEkvuPF9xuPLxPmZM45LkgpG+jVH9pzv/8+M0e/30ev10Gq10G63H6nT6cA0TXS73Q0dmod4+vwZ9vb3sbe7i4MXPRyo80ae5yiKAlLKR6Lv/1uDD2/RaDTQbDbxZGcHg8EbGHEcgzEG2qs6fqijKAIZLpdLBZcIghCMc5RlqYGj0QiWZcG2bVhnZxgOhzCShKvGUAEYopgjjLhqSpCoRoLWKQkSBAFc19VGFKIGry/j+nqKz8dfVZICd7cznF9c4uf4DnOvSl4DKSXBHMd5EBlyZbxYLLTIwBhPrvDj+zecTyTsyxiC+7ia3uDXaKoPryckgBACWZYhTVMkSaJ3MqtNjSLjOLE5Pp0KXIwT5CnTILqK7ZEd514n8zwPvu/ra+IKugEUgmM4U3cXMshcPQ7jelS22tdHvnd+Yzqd4PZmBnfuqLQMqdgCUhOlqh6B0jENopSbwBJ+mMBxOdxAwAszzH2BmGf0F8TUwBpQQdbrTaAaGh9PCrx8L/HqSOL1UQHzncQXK9dAevAVkONf2h45K0qkmVL+V4UsVwkr/QHlPiAHMmqycQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(b.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"apic registration",title:"apic registration",src:"/platinum-demos/static/af08ba3565c28f6de0f2e0009e859894/dadad/apic-registration.png",srcSet:["/platinum-demos/static/af08ba3565c28f6de0f2e0009e859894/7fc1e/apic-registration.png 288w","/platinum-demos/static/af08ba3565c28f6de0f2e0009e859894/a5df1/apic-registration.png 576w","/platinum-demos/static/af08ba3565c28f6de0f2e0009e859894/dadad/apic-registration.png 600w"],sizes:"(max-width: 600px) 100vw, 600px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))))),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",{parentName:"strong",href:"#place1"},"Go to top")))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-100-integration-demo-preparation-mdx-cc2f8f96ab6a430ebdae.js.map