(window.webpackJsonp=window.webpackJsonp||[]).push([[57,33,78],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),b=a("NmYn"),o=a.n(b),i=a("Wbzz"),l=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),d=a.n(s),m=a("QH2O"),u=a.n(m),p=a("qKvR"),O=function(e){var t,a=e.title,n=e.theme,r=e.tabs,b=void 0===r?[]:r;return Object(p.b)("div",{className:d()(u.a.pageHeader,(t={},t[u.a.withTabs]=b.length,t[u.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:u.a.text},a)))))},j=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,b=r.baseUrl,o=r.subDirectory,l=b+"/edit/"+r.branch+o+"/src/pages"+t;return b?Object(p.b)("div",{className:"bx--row "+j.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:j.link,href:l},"Edit this page on GitHub"))):null},h=a("FCXl"),f=a("dI71"),N=a("I8xM"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],b=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),b=a===r,l=new RegExp(r+"/?(#.*)?$"),c=n.replace(l,a);return Object(p.b)("li",{key:e,className:d()((t={},t[N.selectedItem]=b,t),N.listItem)},Object(p.b)(i.Link,{className:N.link,to:""+c},e))}));return Object(p.b)("div",{className:N.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:N.list},b))))))},t}(r.a.Component),v=a("MjG9"),y=a("CzIb"),T=a("Asxa"),w=a("OIbQ"),k=a.n(w),P=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(T.c,{className:k.a.row},Object(p.b)(T.a,null,Object(p.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,b=t.frontmatter,s=void 0===b?{}:b,d=t.relativePagePath,m=t.titleType,u=s.tabs,j=s.title,f=s.theme,N=s.description,T=s.keywords,w=s.date,k=Object(y.a)().interiorTheme,I=Object(i.useStaticQuery)("2456312558").site.pathPrefix,D=I?n.pathname.replace(I,""):n.pathname,C=u?D.split("/").filter(Boolean).slice(-1)[0]||o()(u[0],{lower:!0}):"",E=f||k;return Object(p.b)(c.a,{tabs:u,homepage:!1,theme:E,pageTitle:j,pageDescription:N,pageKeywords:T,titleType:m},Object(p.b)(O,{title:r?Object(p.b)(r,null):j,label:"label",tabs:u,theme:E}),u&&Object(p.b)(x,{title:j,slug:D,tabs:u,currentTab:C}),Object(p.b)(v.a,{padded:!0},a,Object(p.b)(g,{relativePagePath:d}),Object(p.b)(P,{date:w})),Object(p.b)(h.a,{pageContext:t,location:n,slug:D,tabs:u,currentTab:C}),Object(p.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},"oq/1":function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return l})),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return m}));var n=a("wx14"),r=a("zLVn"),b=(a("q1tI"),a("7ljp")),o=a("013z"),i=(a("qKvR"),["components"]),l=function(){return Object(b.b)("span",null,Object(b.b)("h1",{style:{fontSize:"60px"}},"Scalable and resilient cloud native integration",Object(b.b)("br",null)," 300-level live demo"))},c={},s={Title:l,_frontmatter:c},d=o.a;function m(e){var t=e.components,a=Object(r.a)(e,i);return Object(b.b)(d,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"![banner]","(BANNER IMAGE COMING)"),Object(b.b)("span",{id:"place1"}),Object(b.b)("span",{id:"top"}),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"DEMO OVERVIEW"),Object(b.b)("th",{parentName:"tr",align:"left"}))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Scenario overview")),Object(b.b)("td",{parentName:"tr",align:"left"},"TDB")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Demo products")),Object(b.b)("td",{parentName:"tr",align:"left"},"Cloud Pak for Integration")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Demo capabilities")),Object(b.b)("td",{parentName:"tr",align:"left"},"Pipeline deployment; Container scalability and availability")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Sales guidance")),Object(b.b)("td",{parentName:"tr",align:"left"},"Download the sales guidance document ",Object(b.b)("a",{href:"https://ibm.box.com/s/z2vyalsi2c6dh8s0oar7rw94z2uykd65",target:"_blank",rel:"noreferrer"},"here"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Demo intro slides")),Object(b.b)("td",{parentName:"tr",align:"left"},"Download the Introduction and Overview slides ",Object(b.b)("a",{href:"SLIDES PENDING",target:"_blank",rel:"noreferrer"},"here"),". This is a short deck of customer-facing slides that sets the context for the demo.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Demo script")),Object(b.b)("td",{parentName:"tr",align:"left"},"A complete demo script is on the second tab above. You can download a printer-ready PDF of the demo script ",Object(b.b)("a",{href:"PDF TO COME",target:"_blank",rel:"noreferrer"},"here"),".",Object(b.b)("br",null),Object(b.b)("br",null)," This demo script has multiple tasks that each have multiple steps. In each step, you have the details about what you need to do (",Object(b.b)("strong",{parentName:"td"},"Actions"),"), what you can say while delivering this demo step (",Object(b.b)("strong",{parentName:"td"},"Narration"),"), and what diagrams and screenshots you will see.",Object(b.b)("br",null),Object(b.b)("br",null),"This demo script is a suggestion, and you are welcome to customize based in your sales opportunity. Most importantly, practice this demo in advance. If the demo seems easy for you to execute, the customer will focus on the content. If it seems difficult for you to execute, the customer will focus on your delivery.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Sales enablement video")),Object(b.b)("td",{parentName:"tr",align:"left"},"View the enablement video ",Object(b.b)("a",{href:"VIDEO TO COME",target:"_blank",rel:"noreferrer"},"here"),". This video is for enablement purposes only (IBMers and Business Partners) and is not customer-ready.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Required versions")),Object(b.b)("td",{parentName:"tr",align:"left"},"Cloud Pak for Integration 2022.2.1")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"How to get support")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"For IBMers:")," ",Object(b.b)("br",null),"• Contact ",Object(b.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0124J683GW",target:"_blank",rel:"noreferrer"},"#itz-techzone-support")," or ",Object(b.b)("a",{href:"mailto:techzone.help@ibm.com"},Object(b.b)("a",{parentName:"td",href:"mailto:techzone.help@ibm.com"},"techzone.help@ibm.com"))," regarding issues with reserving and provisioning Tech Zone environments.",Object(b.b)("br",null),"• Contact ",Object(b.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0216F39ACU",target:"_blank",rel:"noreferrer"},"#platinumdemos-automation-support")," regarding issues with setting up and running this demo. ",Object(b.b)("br",null),Object(b.b)("br",null)," ",Object(b.b)("strong",{parentName:"td"},"For Business Partners:")," ",Object(b.b)("br",null),"• Contact ",Object(b.b)("a",{href:"mailto:techzone.help@ibm.com"},"Tech Zone Support")," regarding issues with reserving and provisioning Tech Zone environments.",Object(b.b)("br",null),"• Contact ",Object(b.b)("a",{href:"mailto:automationplatinumdemos@ibm.com"}," Automation Platinum Demos Support")," regarding issues with setting up and running this demo.")))),Object(b.b)("h2",null,Object(b.b)("strong",{parentName:"h2"},"DEMO INSTALLATION AND SETUP")),Object(b.b)("details",null,Object(b.b)("summary",null,"1 - TBD"),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(b.b)("p",null,"Click ",Object(b.b)("a",{parentName:"p",href:"/platinum-demos/300-integration-scalable-and-resilient-cloud-native-integration/demo-script"},"here")," to go to the ",Object(b.b)("strong",{parentName:"p"},"Demo script")," on the next tab."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-300-integration-scalable-and-resilient-cloud-native-integration-demo-preparation-mdx-ff4cbf9dfcc5377897b0.js.map