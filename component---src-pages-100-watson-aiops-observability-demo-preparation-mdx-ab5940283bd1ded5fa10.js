(window.webpackJsonp=window.webpackJsonp||[]).push([[24,34,39,41,80],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),b=a.n(i),o=a("Wbzz"),s=a("Xrax"),l=a("k4MR"),c=a("TSYQ"),m=a.n(c),p=a("QH2O"),A=a.n(p),d=a("qKvR"),u=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(d.b)("div",{className:m()(A.a.pageHeader,(t={},t[A.a.withTabs]=i.length,t[A.a.darkMode]="dark"===n,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:A.a.text},a)))))},g=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,b=r.subDirectory,s=i+"/edit/"+r.branch+b+"/src/pages"+t;return i?Object(d.b)("div",{className:"bx--row "+g.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},O=a("FCXl"),j=a("dI71"),f=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=b()(e,{lower:!0,strict:!0}),i=a===r,s=new RegExp(r+"/?(#.*)?$"),l=n.replace(s,a);return Object(d.b)("li",{key:e,className:m()((t={},t[f.selectedItem]=i,t),f.listItem)},Object(d.b)(o.Link,{className:f.link,to:""+l},e))}));return Object(d.b)("div",{className:f.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",{"aria-label":t},Object(d.b)("ul",{className:f.list},i))))))},t}(r.a.Component),y=a("MjG9"),v=a("CzIb"),w=a("Asxa"),x=a("OIbQ"),k=a.n(x),B=function(e){var t=e.date,a=new Date(t);return t?Object(d.b)(w.c,{className:k.a.row},Object(d.b)(w.a,null,Object(d.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,c=void 0===i?{}:i,m=t.relativePagePath,p=t.titleType,A=c.tabs,g=c.title,j=c.theme,f=c.description,w=c.keywords,x=c.date,k=Object(v.a)().interiorTheme,T=Object(o.useStaticQuery)("2456312558").site.pathPrefix,E=T?n.pathname.replace(T,""):n.pathname,Q=A?E.split("/").filter(Boolean).slice(-1)[0]||b()(A[0],{lower:!0}):"",I=j||k;return Object(d.b)(l.a,{tabs:A,homepage:!1,theme:I,pageTitle:g,pageDescription:f,pageKeywords:w,titleType:p},Object(d.b)(u,{title:r?Object(d.b)(r,null):g,label:"label",tabs:A,theme:I}),A&&Object(d.b)(N,{title:g,slug:E,tabs:A,currentTab:Q}),Object(d.b)(y.a,{padded:!0},a,Object(d.b)(h,{relativePagePath:m}),Object(d.b)(B,{date:x})),Object(d.b)(O.a,{pageContext:t,location:n,slug:E,tabs:A,currentTab:Q}),Object(d.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},WZhW:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return l})),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return d}));var n,r=a("wx14"),i=a("zLVn"),b=(a("q1tI"),a("7ljp")),o=a("013z"),s=(a("qKvR"),["components"]),l=function(){return Object(b.b)("span",null,"Observability ",Object(b.b)("br",null)," 100-level live demo")},c={},m=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(b.b)("div",e)}),p={Title:l,_frontmatter:c},A=o.a;function d(e){var t=e.components,a=Object(i.a)(e,s);return Object(b.b)(A,Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(b.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"17.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAADABQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABkrEuFT//xAAYEAACAwAAAAAAAAAAAAAAAAABAgARM//aAAgBAQABBQKJq4F//8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQMBAT8BV//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABgQAAIDAAAAAAAAAAAAAAAAAAAQEWLB/9oACAEBAAY/AibYv//EABkQAAIDAQAAAAAAAAAAAAAAAAABIUFRMf/aAAgBAQABPyFZhNm7EVNH/9oADAMBAAIAAwAAABCHz//EABYRAQEBAAAAAAAAAAAAAAAAAAABMf/aAAgBAwEBPxCNP//EABYRAQEBAAAAAAAAAAAAAAAAAAABMf/aAAgBAgEBPxCJj//EABoQAAEFAQAAAAAAAAAAAAAAAAEAESExQWH/2gAIAQEAAT8QmXVTkqDAXnkZhMkaYv/Z')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(b.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/platinum-demos/static/2e3a77ce1c2d31dec5ac216fa39158c3/2e753/AIOps_Observability_100_Prep.jpg",srcSet:["/platinum-demos/static/2e3a77ce1c2d31dec5ac216fa39158c3/69549/AIOps_Observability_100_Prep.jpg 288w","/platinum-demos/static/2e3a77ce1c2d31dec5ac216fa39158c3/473e3/AIOps_Observability_100_Prep.jpg 576w","/platinum-demos/static/2e3a77ce1c2d31dec5ac216fa39158c3/2e753/AIOps_Observability_100_Prep.jpg 1152w","/platinum-demos/static/2e3a77ce1c2d31dec5ac216fa39158c3/74f4b/AIOps_Observability_100_Prep.jpg 1728w","/platinum-demos/static/2e3a77ce1c2d31dec5ac216fa39158c3/cbe2c/AIOps_Observability_100_Prep.jpg 2000w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(b.b)("span",{id:"top"}),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"NOTE"),": The provided demo environment is using Instana SaaS service, which follows the bi-weekly release schedule. This may result in minor differences between the screenshots in this guide and the actual environment you will see, however in most cases it will not impact the demo flow. In case you encounter significant differences please report in Slack support channel ",Object(b.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0124J683GW",target:"_blank",rel:"noreferrer"},"#itz-techzone-support"),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"DEMO OVERVIEW"),Object(b.b)("th",{parentName:"tr",align:"left"}))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Scenario overview")),Object(b.b)("td",{parentName:"tr",align:"left"},"This demo shows how IBM Instana helps quickly identify and resolve an incident in a microservices-based application. The application in this demo is called Stan’s Robot Shop, and it uses various technologies such as Java, Python, and MySQL.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Demo products")),Object(b.b)("td",{parentName:"tr",align:"left"},"Instana")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Demo capabilities")),Object(b.b)("td",{parentName:"tr",align:"left"},"Dependency mapping; Intelligent alerting; Distributed tracing")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Demo script")),Object(b.b)("td",{parentName:"tr",align:"left"},"A complete demo script is on the second tab above. You can download a printer-ready PDF of the demo script ",Object(b.b)("a",{href:"/platinum-demos/dcba452456980600d74375c3b49848c6/100-Observability-Demo-Script.pdf",target:"_blank",rel:"noreferrer"},"here"),". ",Object(b.b)("br",null),Object(b.b)("br",null)," This demo script has multiple tasks, that each have multiple steps. In each step, you have the details about what you need to do (",Object(b.b)("strong",{parentName:"td"},"Actions"),"), what you can say while delivering this demo step (",Object(b.b)("strong",{parentName:"td"},"Narration"),"), and what diagrams and screenshots you will see. ",Object(b.b)("br",null),Object(b.b)("br",null)," This demo script is a suggestion, and you are welcome to customize based on your sales opportunity. Most importantly, practice this demo in advance. If the demo seems easy for you to execute, the customer will focus on the content. If it seems difficult for you to execute, the customer will focus on your delivery.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Demo guidance")),Object(b.b)("td",{parentName:"tr",align:"left"},"The demo environment is set to automatically inject an error into the application once every hour. ",Object(b.b)("br",null)," ",Object(b.b)("br",null)," The cycle begins on the half-hour (so 9:30, 10:30, etc). You should see errors begin to show up a few minutes after this (around 32 or 33 minutes past the hour). ",Object(b.b)("br",null)," ",Object(b.b)("br",null)," The error will resolve itself and go back to a normal state after about 10 minutes. ",Object(b.b)("br",null)," ",Object(b.b)("br",null)," You can set the timeframe so that you can demo the active incident, even if your timing does not coincide with when the error cycle starts. See instructions below (under ",Object(b.b)("strong",{parentName:"td"},"1 - Environment setup"),").")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Customer-ready ",Object(b.b)("br",null)," demo video")),Object(b.b)("td",{parentName:"tr",align:"left"},"View the demo video ",Object(b.b)("a",{href:"https://ibm.ent.box.com/s/eogn2t43x23nk8ksyk236teqppe5d49e",target:"_blank",rel:"noreferrer"},"here"),". This is a short, but detailed, hands-on walkthrough of the scenario. The video is customer-ready. ",Object(b.b)("br",null)," ",Object(b.b)("br",null)," Potential uses of this video are: ",Object(b.b)("br",null),Object(b.b)("br",null)," 1. Familiarize yourself with the details of this scenario ",Object(b.b)("br",null)," 2. Gain customer agreement that they would like to have a tech-seller do a deep-dive demo of this scenario ",Object(b.b)("br",null)," 3. Use as a prospecting tool to generate customer interest in applying these capabilities")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Required version")),Object(b.b)("td",{parentName:"tr",align:"left"},"Instana 3.213")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"How to get support")),Object(b.b)("td",{parentName:"tr",align:"left"},"Contact ",Object(b.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0124J683GW",target:"_blank",rel:"noreferrer"},"#itz-techzone-support")," or ",Object(b.b)("a",{href:"mailto:techzone.help@ibm.com"},Object(b.b)("a",{parentName:"td",href:"mailto:techzone.help@ibm.com"},"techzone.help@ibm.com"))," regarding issues with reserving and provisioning TechZone environments. ",Object(b.b)("br",null),Object(b.b)("br",null)," Contact ",Object(b.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0216F39ACU",target:"_blank",rel:"noreferrer"},"#platinumdemos-automation-support")," regarding issues with setting up and running this demo use case.")))),Object(b.b)("h3",null,Object(b.b)("strong",{parentName:"h3"},"PREPARE TO GIVE THE DEMO")),Object(b.b)(m,{mdxType:"InlineNotification"},"Business partners will need to request access to the environment. See ",Object(b.b)("strong",null,"2 - Business partners requisition instructions")," below. Allow up to two business days to receive access."),Object(b.b)("details",null,Object(b.b)("summary",null,"1 - Environment setup"),Object(b.b)("br",null),Object(b.b)("p",null,"Log into the demo environment: ",Object(b.b)("br",null),Object(b.b)("br",null),"\n•\tFor IBMers, click ",Object(b.b)("a",{href:"https://ibmdemo-instanaibm.instana.io",target:"_blank",rel:"noreferrer"},"here"),". ",Object(b.b)("br",null),"\n•\tFor business partners, click ",Object(b.b)("a",{href:"https://demo-partner.instana.io/",target:"_blank",rel:"noreferrer"},"here"),". ",Object(b.b)("br",null)),Object(b.b)("br",null),Object(b.b)("p",null,"Set the time period to show an active incident, as detailed below: ",Object(b.b)("br",null)," ",Object(b.b)("br",null)),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"In the upper right, click the button showing the timeframe. ",Object(b.b)("br",null)," ",Object(b.b)("br",null),"\n",Object(b.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"288px"}},"\n      ",Object(b.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"19.444444444444443%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA4klEQVQY002P226DMBBE+f//6iWEBoRahAnQpiUhVSuuxuaScOo4L13paKXRzmjHSd8l+1yS5D0i7YiShiTrrfYfq5lbkUnCpOVyuXCbebnv63VF6RFnWjSe73P6PhtKIiH4qX7Rk0YqyTAqpB6Ylom6bWj7DvGlmOcZkaSM40iW51RVbcIXnGXWxLGgOBa87HZ4ho3rEgQB7nbL88bl4fHJmBOmeUJrRXwYrPmzOKKU5vUtoizPLOZbJzz0RIUmPEi8fYWfNQR5a/Gzll1aW256+NEbvcNP75XXFRtiK6/3yn88HClO5G3t8QAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(b.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"timeframe",title:"timeframe",src:"/platinum-demos/static/c0c30f5061e4458de3a14534b6f97023/7fc1e/1_timeframe.png",srcSet:["/platinum-demos/static/c0c30f5061e4458de3a14534b6f97023/7fc1e/1_timeframe.png 288w"],sizes:"(max-width: 288px) 100vw, 288px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")," ",Object(b.b)("br",null))),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"At the bottom of the pop-up, set the timeframe to begin at 25 minutes past the hour and end at 35 minutes past the hour. It doesn’t matter which hour you pick. Click ",Object(b.b)("strong",{parentName:"p"},"‘Set Time.’")," ",Object(b.b)("br",null)," ",Object(b.b)("br",null),"\n",Object(b.b)("strong",{parentName:"p"},"Notes:")," ",Object(b.b)("br",null),Object(b.b)("br",null),"\n• This will ensure you see normal behavior and then a sudden change when the incident begins at 0:30. ",Object(b.b)("br",null),"\n• Pressing ‘enter’ doesn’t work. You’ll need to actually click the button. ",Object(b.b)("br",null)," ",Object(b.b)("br",null),"\n",Object(b.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"400px"}},"\n      ",Object(b.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAACPUlEQVQ4y21Ty27bMBDUt/beL+h39FdybXNpjykKBLEFx7FkybKsl0VRpEQ9prO0GwRFDQxmSQ53Z1d04NyESTBNcKOD6Q1GsnPutn/HSAzjiE4bRLnC7lggjHLs0wqvSYGYe5emR9AyQTOMaJnk0nUIjwleTxmSsoJi0mYYeDZimmePdV2headVGsYOXMNj5lndXBFobiZljay+QjGpGhxaKfABihj+urzzzfENt9hhoC6wdGCthVIK8zTDGAPVKlhjPRpW7fveu6rqhi33UOxk4L15XnClttMajiMz1AdiW6A67WfUc1MEltVkf2IRL5aYbcnMJbbEyJGIXpzJ3A2NBRLIZU0XEvuETC7iimNorq13UtFpWdVeW1YNsrzwJgqOKy9KX0Q+ZCBZRSSJJMm8LFiWlW4Wn0gcCv6N/Xq+x7wjXcj4Askq85AZjmxZfvIlPzL+y/fPS8yrmFigOapAsk88djwQGLa9cG1ZcfU8ezZuemc57+WtUj+xm4qGnGhlhgOd6SxDl53R5zkU3+BQFNDnM7n0bLmW86Es31m0ovO4XGC5HiVhG4Yo93vk8REqv6BOT+QcLYucX/e+QHNM0Z1zTE3j4era48uPn/j87Ts+PT7i68MDUJcIuqcndJsNuu0WarMlhz7Wux1UHKONI1wPb2ijA9eR5+4Y+f0tNb+p/RVusX9+hm0rfmW6ScXlgReTBPHLBi05IsvzOfCvmLJt4ZjuCzp7CXdkPh26TpMTNHVvcYIT/65/AOkv43A/Py8tAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(b.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"time_range",title:"time_range",src:"/platinum-demos/static/87346ccdd8f0288594f09a6318af7db5/a45af/2_time_range.png",srcSet:["/platinum-demos/static/87346ccdd8f0288594f09a6318af7db5/7fc1e/2_time_range.png 288w","/platinum-demos/static/87346ccdd8f0288594f09a6318af7db5/a45af/2_time_range.png 400w"],sizes:"(max-width: 400px) 100vw, 400px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")," ",Object(b.b)("br",null))),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"Check that the summary tab for the robot shop (",Object(b.b)("strong",{parentName:"p"},"Applications")," -> ",Object(b.b)("strong",{parentName:"p"},"Robot Shop")," -> ",Object(b.b)("strong",{parentName:"p"},"Summary"),") looks like this (showing a drop in call volume and spikes in errors and latency). ",Object(b.b)("br",null)," ",Object(b.b)("br",null),"\n",Object(b.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"800px"}},"\n      ",Object(b.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.45833333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAABZUlEQVQoz12R3W7TQBSE/dC8TG8p6gUvwD1ShYRIlXBRNwqFRKUhcXFsbO+vvf6YjYpQa3m00nrOnJlxUR62fClLys2O282W2/UPbnY/+VhVNN4zp8Q4TS8w6S6lGecD1nlCHDHW6YwU7WCI43gmzWkCkt5EFLHr+v9C4mRk7mAsVgL/vpHn5nQWLg7VE10/6GKmsZH1yVObvNmx/3WgaVtCCEzPgpME6lNzRhbIJioT2XeeKF5hB1kVkTFwbAPXjxOtk9FRg3VN+6cj+56fkZ9e7nrTE1VJdrdpImUd0DaK99tPvLm5FN7x4XHBQ7+nbHacXI8sMKuXJOF0dUW6uGC6fEtU5KiFUQ69NVhTYzLsQHH39MDnw5rF8RvL6p6v1XdWx3uqrsHJXRgGwu+asFoRFgvCckmvbrvBSsALlk6iGUY1FaNX3JzpFUJQ+foxXi6couQWMhRSgx6nvrzcZ2Ruhleiv0cEFzJX6UxZAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(b.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"robot_shop_summary",title:"robot_shop_summary",src:"/platinum-demos/static/ba01e04fbbb9fb26a3f7f7dd78663311/acfc1/3_robot_shop_summary.png",srcSet:["/platinum-demos/static/ba01e04fbbb9fb26a3f7f7dd78663311/7fc1e/3_robot_shop_summary.png 288w","/platinum-demos/static/ba01e04fbbb9fb26a3f7f7dd78663311/a5df1/3_robot_shop_summary.png 576w","/platinum-demos/static/ba01e04fbbb9fb26a3f7f7dd78663311/acfc1/3_robot_shop_summary.png 800w"],sizes:"(max-width: 800px) 100vw, 800px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")," ",Object(b.b)("br",null))),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"Click on ",Object(b.b)("strong",{parentName:"p"},"Events")," on the sidebar menu and check that there are open incidents, including ‘sudden increase in the number of erroneous calls’ on the ‘discount’ service. ",Object(b.b)("br",null)," ",Object(b.b)("br",null),"\n",Object(b.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"400px"}},"\n      ",Object(b.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAABhklEQVQoz5VS23aEIBDz//+x3VYFLyB4V0Q3zeBun1vOyQmEmTAMZOd14TxPCF/EcRwIIaR50v+MK3lktxlwPZ+QsW4blmXFf4fkC7J1P+DGFn5e0S8BrZ/wXbUo2w5lc6MQ1Jaag7YeeW3SWhmXWODmjR67GAa4wSRDnwzHZFjZHooGYihcNBZ11xPDr1a7IZlLvJtehpH3DodBOCMibz3MCwpdwziPxjLJdmg7n6Aak9j6HlVr0XSOMR1mFhWvJ30iss05zOqBpW2IFmNVwRclBq0xKI1e3XzP1a3rl/7iUVfYpgkH3yPbmgbXUuJ5HgCbOnNDlQqOJ1tjYHhIZ21CU9eJXceqmdcZyxiL2XsEajKyhRUtVY6VgRtNppqBrFBO9q8K3+zKW++1zFViwUhtpeHJlmVh37H2D6zTiH3Z0qmPj09UDFKFQpmX0EwW5F85WXOvQvFdJK3MC3j2Uvq3h4P/kI8SeV15nJONlT7s/NxHPO8gIs1jTGvh994bkhP5mSP1Hwhf/R4K0Go5AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(b.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"open_incidents",title:"open_incidents",src:"/platinum-demos/static/cfa633a198e4172bc86df61774ac5e43/a45af/4_open_incidents.png",srcSet:["/platinum-demos/static/cfa633a198e4172bc86df61774ac5e43/7fc1e/4_open_incidents.png 288w","/platinum-demos/static/cfa633a198e4172bc86df61774ac5e43/a45af/4_open_incidents.png 400w"],sizes:"(max-width: 400px) 100vw, 400px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")))),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(b.b)("details",null,Object(b.b)("span",{id:"requisition-instructions"}),Object(b.b)("summary",null,"2 - Business partners requisition instructions"),Object(b.b)("br",null),Object(b.b)("p",null,"To request access to the ",Object(b.b)("a",{href:"https://demo-partner.instana.io/",target:"_blank",rel:"noreferrer"},"demo environment"),", email ",Object(b.b)("a",{href:"mailto:timothy.burke@instana.com"},"Tim Burke"),". The turnaround time for requests is two business days."),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(b.b)("hr",null),Object(b.b)("p",null,"Click ",Object(b.b)("a",{parentName:"p",href:"/platinum-demos/100-watson-aiops-observability/demo-script"},"here")," to go to the ",Object(b.b)("strong",{parentName:"p"},"Demo script")," on the next tab."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-100-watson-aiops-observability-demo-preparation-mdx-ab5940283bd1ded5fa10.js.map