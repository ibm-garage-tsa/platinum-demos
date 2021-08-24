(window.webpackJsonp=window.webpackJsonp||[]).push([[36,23,35,41],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),i=a("NmYn"),r=a.n(i),s=a("Wbzz"),l=a("Xrax"),c=a("k4MR"),b=a("TSYQ"),d=a.n(b),u=a("QH2O"),m=a.n(u),p=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,o=e.tabs,i=void 0===o?[]:o;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=i.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},h=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,i=o.baseUrl,r=o.subDirectory,l=i+"/edit/"+o.branch+r+"/src/pages"+t;return i?Object(p.b)("div",{className:"bx--row "+h.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:h.link,href:l},"Edit this page on GitHub"))):null},O=a("FCXl"),j=a("dI71"),w=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),i=a===o,l=new RegExp(o+"/?(#.*)?$"),c=n.replace(l,a);return Object(p.b)("li",{key:e,className:d()((t={},t[w.selectedItem]=i,t),w.listItem)},Object(p.b)(s.Link,{className:w.link,to:""+c},e))}));return Object(p.b)("div",{className:w.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:w.list},i))))))},t}(o.a.Component),A=a("MjG9"),v=a("CzIb"),N=a("Asxa"),x=a("OIbQ"),k=a.n(x),T=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(N.c,{className:k.a.row},Object(p.b)(N.a,null,Object(p.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,i=t.frontmatter,b=void 0===i?{}:i,d=t.relativePagePath,u=t.titleType,m=b.tabs,h=b.title,j=b.theme,w=b.description,N=b.keywords,x=b.date,k=Object(v.a)().interiorTheme,P=Object(s.useStaticQuery)("2456312558").site.pathPrefix,I=P?n.pathname.replace(P,""):n.pathname,S=m?I.split("/").filter(Boolean).slice(-1)[0]||r()(m[0],{lower:!0}):"",B=j||k;return Object(p.b)(c.a,{tabs:m,homepage:!1,theme:B,pageTitle:h,pageDescription:w,pageKeywords:N,titleType:u},Object(p.b)(g,{title:o?Object(p.b)(o,null):h,label:"label",tabs:m,theme:B}),m&&Object(p.b)(y,{title:h,slug:I,tabs:m,currentTab:S}),Object(p.b)(A.a,{padded:!0},a,Object(p.b)(f,{relativePagePath:d}),Object(p.b)(T,{date:x})),Object(p.b)(O.a,{pageContext:t,location:n,slug:I,tabs:m,currentTab:S}),Object(p.b)(l.a,null))}},"5nLB":function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return l})),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a("wx14"),o=a("zLVn"),i=(a("q1tI"),a("7ljp")),r=a("013z"),s=(a("qKvR"),["components"]),l=function(){return Object(i.b)("span",null,"Predictive decisioning ",Object(i.b)("br",null)," 300-level live demo")},c={},b={Title:l,_frontmatter:c},d=r.a;function u(e){var t=e.components,a=Object(o.a)(e,s);return Object(i.b)(d,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("span",{id:"top"}),Object(i.b)("details",null,Object(i.b)("summary",null,"Introduction"),Object(i.b)("br",null),Object(i.b)("p",null,"Welcome to the call center customer retention demonstration. Today, I will show you how to rapidly improve your call center agent’s productivity when looking at retaining important valuable customers, so the agent can provide retention offers while interacting with customers on the phone. ",Object(i.b)("br",null),Object(i.b)("br",null)),Object(i.b)("p",null,"A key aspect of this demonstration is the use of artificial intelligence services inside automated rules-based decisions. We will use 2 IBM Cloud Paks: ",Object(i.b)("br",null),"\n•\t",Object(i.b)("strong",{parentName:"p"},"IBM Cloud Pak for Data")," allows us to create and host the prediction services that we will use to better understand the customer’s situation ",Object(i.b)("br",null),"\n•\t",Object(i.b)("strong",{parentName:"p"},"IBM Cloud Pak for Business Automation")," allows us to create the automated call center application end-to-end using low-code/no-code editors ",Object(i.b)("br",null),Object(i.b)("br",null)),Object(i.b)("p",null,"I will show you how to: ",Object(i.b)("br",null),"\n•\tRapidly create prediction services from your historical data with no data science skills ",Object(i.b)("br",null),"\n•\tBuild an automated decision service that will mix business rules with machine learning predictions to select the most appropriate customer retention offer ",Object(i.b)("br",null),"\n•\tRapidly build a fully automated application that will invoke this decision service, which the call center agent will use to propose adapted retention offers ",Object(i.b)("br",null),Object(i.b)("br",null)),Object(i.b)("p",null,"Let’s get started!"),Object(i.b)("br",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(i.b)("details",null,Object(i.b)("summary",null,"1 - Before situation"),Object(i.b)("br",null),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},Object(i.b)("strong",{parentName:"th"},"1.1")),Object(i.b)("th",{parentName:"tr",align:"left"},Object(i.b)("strong",{parentName:"th"},"Present the retention policy")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("strong",{parentName:"td"},"Action")),Object(i.b)("td",{parentName:"tr",align:"left"},"Open the ",Object(i.b)("strong",{parentName:"td"},"Retention-Policy.pdf")," document from your local environment. Note: This data file was already downloaded as one of the prerequisites in ",Object(i.b)("a",{href:"https://ibm-garage-tsa.github.io/platinum-demos/300-business-automation-predictive-decisioning/demo-preparation/#install-the-demo",target:"_blank",rel:"noreferrer"},"Demo preparation"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("strong",{parentName:"td"},"Screenshot")),Object(i.b)("td",{parentName:"tr",align:"left"}," ","  ",Object(i.b)("br",null)," ",Object(i.b)("span",{parentName:"td",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"600px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"97.91666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAACH0lEQVQ4y51UiYrCMBTM//+RoIIgqHjifV+tZ701Vm3N28xbsnRL13U3MCQvSV8n8yYRx+ORbNsmKSVdLpcvIHZdl87n87c5pRShmT7cxO12o/l8zliv17RYLHjsOA7t93uazWY8t1wuabVa0fP5fJ3Q933yPI/u9zvj8Xh8xRgjAXqzD0Ayg3BysdvtKJfLUaVSoXK5TM1mk/tisUjVapXHnU6HGo0GlUolZh5sYaYCGtXrdf4IWo5GI2q1WtTv9/m4tVqNYzM3mUwom81yHzy+ASfEZjBrt9s0HA5ZS+h1OByYEfTDHIA5xNvtNlJHLgqYAdPplKv6bgPDMAQEv16vLDoaYlgE2qLKsA7mYBlTJOyNSsZHxpESiQQVCgXqdrsEX+K4qVSKMpkMFwV7NpsNJ39lGT4yPBaLxRj5fJ4TWpZF8XickskkpdNpLgzmggl/gnDdK9l6s2VNNQuHEEN4aDoej1l86IwfwYO/MsSar6uPLeg9//myEK/YfTK8eWSvjrTeXmjunMjZSS1w9OZ3mjidTmxmWAbHRkFw7VB5VBa9QTgOr8FyAlkHgwGbutfrsWlRUfO6RCG4ZsboOSHYgB1uCJKhIIB5LP4CMBWwApiBJe6u+SP+BjmAn8bhGE7AkZU2rtJ+VJqp0uyUvhFKW0Xpv0YiuGbG6DVDJUATLw1uCS7/u9pFrbGG+l5KrZ/UT5PUTKWWQP636aTyA/5F/HVdWzH/AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Open PDF",title:"Open PDF",src:"/platinum-demos/static/fdf8d39eb275560a85ceabd6e71e99a0/dadad/1.1_Open_PDF_600.png",srcSet:["/platinum-demos/static/fdf8d39eb275560a85ceabd6e71e99a0/7fc1e/1.1_Open_PDF_600.png 288w","/platinum-demos/static/fdf8d39eb275560a85ceabd6e71e99a0/a5df1/1.1_Open_PDF_600.png 576w","/platinum-demos/static/fdf8d39eb275560a85ceabd6e71e99a0/dadad/1.1_Open_PDF_600.png 600w"],sizes:"(max-width: 600px) 100vw, 600px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("strong",{parentName:"td"},"Action")),Object(i.b)("td",{parentName:"tr",align:"left"},"Rapidly scroll down the document to show how retention offers were managed in the past.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("strong",{parentName:"td"},"Screenshot")),Object(i.b)("td",{parentName:"tr",align:"left"}," ","  ",Object(i.b)("br",null)," ",Object(i.b)("span",{parentName:"td",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"565px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"106.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAACXBIWXMAABYlAAAWJQFJUiTwAAAC8klEQVQ4y52U547iUAyFef+nmSeYfyONNIDoNZCEThJa6CTEez/Pmi1/VtpIxrceHx/7UhL3HQ4H2e12cj6f5Xg8SpqmOrb55XLR8fP5lH99JX7W67X0ej2J41iSJNH5drtVm06nMh6PZTabyf1+l9yB5nmulmW5PB4PXTdTwMlkIuVyWXzflzAMFSQIApnP57LZbKTZaknF7Qe+A56GEgbffhL6EkdrybO7PPOHni0R6Xq9akqNRkNa7nK1WpXRaCTL5VLXry7lwSiQSieQWi+UaseXcnss3SASb7GXSXyW5f4um93hGxCN0BCwbrcr7XZbAYlIsJuz/sCTSqMv9Y4n/ixSCxaJeOFSBv5cFkkqh/QoJYQGjELs9/uXdhiasBfHiQwHAxl7QzkdUymemRT5T3PjPHv8ShkN0Q29uAyICY2nSLBF3yiKtGDxz8Kt15GsnLd7nFWGp9NJ0zq5FsldVAPMsuzVNlS6VqupJMPhUD2dgc7IgnRkqAyvt7ukp6scTzfZpxd5OCCAAQQcbz3IRVszT/Db7aamgLP5UsrVujRaPWm2e8oGFnjah7bCwwhPavSs9S1B/mhsXkrktFg5+qvlQvWkkReLhQKTKhqyhvBIgEyYvSiMeakoCr0ICOO/PxigV6fTUUDP8zQITK1YaIfWWmVAoM4BA6Zl7ENwGFUqFfn6+lLPSyIrM84D+mobIsOERYxDeFIgULPZVIampwHAytImKG2lgN/NGyswDGFqQWh45gDRr6wDzJh02dPX5CpMAAVcrVbKAOv3+xqJgwQhmKXDJWsTQGgb2ok5DJm/XgrvGAOU9vj4+JD393d5e3tT3XjfMDJpaBVSZ42gNldAqsglqjdwb9aY1et13aOyMGeMJFTX/iPxZIg07AFYOGaFAywcSOF0UO9YFO5vrHCHCid84S6oMebs5+dn4Ri9zmMuQKEM7W/fWgSPwZI9W7c9a5Xfz9oZAJPLLUui7TlZJcdks78krjcT1v/HfgDMZSwz93KOeQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Scroll PDF",title:"Scroll PDF",src:"/platinum-demos/static/bf5f006fcc40d949a2b772b67aea70e3/60441/1.1_Scroll_PDF_600.png",srcSet:["/platinum-demos/static/bf5f006fcc40d949a2b772b67aea70e3/7fc1e/1.1_Scroll_PDF_600.png 288w","/platinum-demos/static/bf5f006fcc40d949a2b772b67aea70e3/60441/1.1_Scroll_PDF_600.png 565w"],sizes:"(max-width: 565px) 100vw, 565px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("strong",{parentName:"td"},"Narration")),Object(i.b)("td",{parentName:"tr",align:"left"},"We’ve just gotten an alert from Instana that there has been a sudden increase in erroneous calls on our ‘discount’ service, which is part of the robot shop application. ",Object(i.b)("br",null)," ",Object(i.b)("br",null)," Although I don’t have it connected right now, the alert would show up via one of the configurable alert channels, like email, Microsoft Teams, Slack, and many others (",Object(i.b)("a",{parentName:"td",href:"https://www.instana.com/docs/events_alerts/alert-channels"},"full list"),"). ",Object(i.b)("br",null)," ",Object(i.b)("br",null)," It’s important to note here that you’re not getting alerts for just anything. Behind the scenes, Instana is determining which events and issues are related, and it only sends alerts if a problem is likely to affect end users. ",Object(i.b)("br",null)," ",Object(i.b)("br",null)," Let’s go into the details for this incident.")))),Object(i.b)("p",null,"We will use a telecommunication call center example in this demo. SkyTalk call center agents are asked to offer retention promotions to customers who are upset. To do this, they have to use their own judgment to consider the opportunity to grant a retention offer. They also must choose what retention to suggest when they are discussing with the customer."),Object(i.b)("p",null,"SkyTalk’s sales and marketing division is regularly issuing a document explaining how agents could identify upset customers and what retention offers they can apply depending on the customer’s situation."),Object(i.b)("p",null,"This process leads to some various issues:\n•\tComplexity for an agent to identify upset customers\n•\tCustomers may receive offers not adapted to their needs\n•\tNo cost control on how customers are retained\n•\tRequires training and skills to distribute offers\n•\tRetentions offers are not equally proposed across call center agents creating compliance issues\n•\tIt takes time on the phone for a call center agent to decide whet retention offer to propose"),Object(i.b)("p",null,"Seeing its retention budget increase, SkyTalk was looking at a more efficient process to retain customers.\nA system that would be able to automatically:\n•\tAsses the propensity to churn for a customer\n•\tEstimate the lifetime values of the customer\n•\tFind the most adapted retention offer for the customer\n•\tHave a controlled and compliant way to give retention offers across the entire call centers"),Object(i.b)("p",null,"Let’s see how SkyTalk has faced all these challenges:"),Object(i.b)("p",null,"To do this we are going to visit 3 IBM Products with 2 IBM Cloud Paks"),Object(i.b)("p",null,"I will start by showing you how you can create rapidly some prediction services in Cloud Pak for Data using IBM Watson Studio and IBM Machine learning."),Object(i.b)("p",null,"In a second phase, We will move in the IBM Automation space with IBM Cloud Pak for Business Automation. There, I will show you how the Retention offer decision service will mix these services insights with some automated business rules using IBM Automation Decision Services, an IBM Business Automation Studio (BAS) component that will allow you to deliver automated decision services without writing code."),Object(i.b)("p",null,"Finally, we will move in a second component of BAS – Application Designer – that is the low code environment that has allowed us to design the Call center front end application that calls this decision service and provides recommendations to the call center agents.\nLet’s start our journey now"),Object(i.b)("br",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",{parentName:"strong",href:"#top"},"Go to top")))))}u.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-300-business-automation-predictive-decisioning-demo-script-mdx-ada687a1a9c2f33f4eff.js.map