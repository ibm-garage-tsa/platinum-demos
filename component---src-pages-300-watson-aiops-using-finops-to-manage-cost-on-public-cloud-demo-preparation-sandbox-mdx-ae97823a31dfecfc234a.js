(window.webpackJsonp=window.webpackJsonp||[]).push([[77,36,37,82],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),b=a.n(o),i=a("Wbzz"),s=a("Xrax"),c=a("k4MR"),l=a("TSYQ"),m=a.n(l),p=a("QH2O"),d=a.n(p),u=a("qKvR"),A=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(u.b)("div",{className:m()(d.a.pageHeader,(t={},t[d.a.withTabs]=o.length,t[d.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:d.a.text},a)))))},g=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,b=r.subDirectory,s=o+"/edit/"+r.branch+b+"/src/pages"+t;return o?Object(u.b)("div",{className:"bx--row "+g.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},O=a("FCXl"),h=a("dI71"),f=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=b()(e,{lower:!0,strict:!0}),o=a===r,s=new RegExp(r+"/?(#.*)?$"),c=n.replace(s,a);return Object(u.b)("li",{key:e,className:m()((t={},t[f.selectedItem]=o,t),f.listItem)},Object(u.b)(i.Link,{className:f.link,to:""+c},e))}));return Object(u.b)("div",{className:f.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:f.list},o))))))},t}(r.a.Component),x=a("MjG9"),w=a("CzIb"),v=a("Asxa"),y=a("OIbQ"),T=a.n(y),k=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(v.c,{className:T.a.row},Object(u.b)(v.a,null,Object(u.b)("div",{className:T.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,l=void 0===o?{}:o,m=t.relativePagePath,p=t.titleType,d=l.tabs,g=l.title,h=l.theme,f=l.description,v=l.keywords,y=l.date,T=Object(w.a)().interiorTheme,E=Object(i.useStaticQuery)("2456312558").site.pathPrefix,B=E?n.pathname.replace(E,""):n.pathname,C=d?B.split("/").filter(Boolean).slice(-1)[0]||b()(d[0],{lower:!0}):"",I=h||T;return Object(u.b)(c.a,{tabs:d,homepage:!1,theme:I,pageTitle:g,pageDescription:f,pageKeywords:v,titleType:p},Object(u.b)(A,{title:r?Object(u.b)(r,null):g,label:"label",tabs:d,theme:I}),d&&Object(u.b)(N,{title:g,slug:B,tabs:d,currentTab:C}),Object(u.b)(x.a,{padded:!0},a,Object(u.b)(j,{relativePagePath:m}),Object(u.b)(k,{date:y})),Object(u.b)(O.a,{pageContext:t,location:n,slug:B,tabs:d,currentTab:C}),Object(u.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},qkkW:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return c})),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return u}));var n,r=a("wx14"),o=a("zLVn"),b=(a("q1tI"),a("7ljp")),i=a("013z"),s=(a("qKvR"),["components"]),c=function(){return Object(b.b)("span",null,"Using FinOps to manage cost on public cloud ",Object(b.b)("br",null)," 300-level live demo")},l={},m=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(b.b)("div",e)}),p={Title:c,_frontmatter:l},d=i.a;function u(e){var t=e.components,a=Object(o.a)(e,s);return Object(b.b)(d,Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(b.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"17.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAADABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQB/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwAB/9oADAMBAAIQAxAAAAGTTKgC3//EABcQAAMBAAAAAAAAAAAAAAAAAAABAiL/2gAIAQEAAQUCJeaZ/8QAFREBAQAAAAAAAAAAAAAAAAAAAhD/2gAIAQMBAT8BM//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAECAQE/AWf/xAAXEAEAAwAAAAAAAAAAAAAAAAAAAQJx/9oACAEBAAY/AlkY/8QAGRABAAIDAAAAAAAAAAAAAAAAAQBBETFh/9oACAEBAAE/IaeRzAxHek//2gAMAwEAAgADAAAAEHfv/8QAFhEAAwAAAAAAAAAAAAAAAAAAARAx/9oACAEDAQE/EKK//8QAFhEAAwAAAAAAAAAAAAAAAAAAARAx/9oACAECAQE/EJC//8QAHBABAAICAwEAAAAAAAAAAAAAAQAhETFBUWGx/9oACAEBAAE/ENhwK8uJ2Ck12QZKy/Kf/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(b.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/platinum-demos/static/0268e50a3021cba3b9cffddcd238a108/2e753/finops-300-prep-banner.jpg",srcSet:["/platinum-demos/static/0268e50a3021cba3b9cffddcd238a108/69549/finops-300-prep-banner.jpg 288w","/platinum-demos/static/0268e50a3021cba3b9cffddcd238a108/473e3/finops-300-prep-banner.jpg 576w","/platinum-demos/static/0268e50a3021cba3b9cffddcd238a108/2e753/finops-300-prep-banner.jpg 1152w","/platinum-demos/static/0268e50a3021cba3b9cffddcd238a108/74f4b/finops-300-prep-banner.jpg 1728w","/platinum-demos/static/0268e50a3021cba3b9cffddcd238a108/cbe2c/finops-300-prep-banner.jpg 2000w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(b.b)("span",{id:"top"}),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"DEMO OVERVIEW"),Object(b.b)("th",{parentName:"tr",align:"left"}))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Scenario overview")),Object(b.b)("td",{parentName:"tr",align:"left"},"This demo shows how Turbonomic can be used to help organizations optimize their costs on public cloud.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Demo products")),Object(b.b)("td",{parentName:"tr",align:"left"},"Turbonomic")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Demo capabilities")),Object(b.b)("td",{parentName:"tr",align:"left"},"Cloud cost visibility; Usage optimization; Rate optimization")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Sales guidance")),Object(b.b)("td",{parentName:"tr",align:"left"},"Download the sales guidance document ",Object(b.b)("a",{href:"https://ibm.box.com/s/pmmj58ezdl1cboqomhaibz49z1nplzbs",target:"_blank",rel:"noreferrer"},"here"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Demo intro slides")),Object(b.b)("td",{parentName:"tr",align:"left"},"Download the Introduction and Overview slides ",Object(b.b)("a",{href:"https://ibm.box.com/s/i18u1myz37fb4r2b5ia9yh10zk1aa9tk",target:"_blank",rel:"noreferrer"},"here"),". This is a short deck of customer-facing slides that sets the context for the demo.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Demo script")),Object(b.b)("td",{parentName:"tr",align:"left"},"A complete demo script is on the second tab above. You can download a printer-ready PDF of the demo script ",Object(b.b)("a",{href:"https://ibm.box.com/s/9jrpatc44qkt2ywycldaamntt1toqz4y",target:"_blank",rel:"noreferrer"},"here"),". ",Object(b.b)("br",null),Object(b.b)("br",null)," This demo script has multiple tasks that each have multiple steps. In each step, you have the details about what you need to do (",Object(b.b)("strong",{parentName:"td"},"Actions"),"), what you can say while delivering this demo step (",Object(b.b)("strong",{parentName:"td"},"Narration"),"), and what diagrams and screenshots you will see.",Object(b.b)("br",null),Object(b.b)("br",null),"This demo script is a suggestion, and you are welcome to customize based on your sales opportunity. Most importantly, practice this demo in advance. If the demo seems easy for you to execute, the customer will focus on the content. If it seems difficult for you to execute, the customer will focus on your delivery.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Customer-facing ",Object(b.b)("br",null)," expert guidance")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{href:"https://ibm.ent.box.com/file/976326479317?s=wedp2b31uy81y8jes92czhv0d7xt5ixc",target:"_blank",rel:"noreferrer"},"Don’t overpay for cloud. Avoid these six common mistakes."))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Sales enablement video")),Object(b.b)("td",{parentName:"tr",align:"left"},"View the enablement video ",Object(b.b)("a",{href:"https://ibm.box.com/s/s7h8h9faiiijiyrgwoodyipn3h14gxu2",target:"_blank",rel:"noreferrer"},"here"),". This video is for enablement purposes only (IBMers and Business Partners) and is not customer-ready.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Required versions")),Object(b.b)("td",{parentName:"tr",align:"left"},"Turbonomic 8.5")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"How to get support")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"For IBMers:")," ",Object(b.b)("br",null),"• Contact ",Object(b.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0124J683GW",target:"_blank",rel:"noreferrer"},"#itz-techzone-support")," or ",Object(b.b)("a",{href:"mailto:techzone.help@ibm.com"},Object(b.b)("a",{parentName:"td",href:"mailto:techzone.help@ibm.com"},"techzone.help@ibm.com"))," regarding issues with reserving and provisioning Tech Zone environments.",Object(b.b)("br",null),"• Contact ",Object(b.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0216F39ACU",target:"_blank",rel:"noreferrer"},"#platinumdemos-automation-support")," regarding issues with setting up and running this demo. ",Object(b.b)("br",null),Object(b.b)("br",null)," ",Object(b.b)("strong",{parentName:"td"},"For Business Partners:")," ",Object(b.b)("br",null),"• Contact ",Object(b.b)("a",{href:"mailto:techzone.help@ibm.com"},"Tech Zone Support")," regarding issues with reserving and provisioning Tech Zone environments.",Object(b.b)("br",null),"• Contact ",Object(b.b)("a",{href:"mailto:automationplatinumdemos@ibm.com"}," Automation Platinum Demos Support")," regarding issues with setting up and running this demo.")))),Object(b.b)("h3",null,Object(b.b)("strong",{parentName:"h3"},"DEMO INSTALLATION")),Object(b.b)("details",null,Object(b.b)("summary",null,"1 - Request a demo instance "),Object(b.b)("br",null),Object(b.b)("p",null,"To request access to a demo instance via Techzone for 75 minutes of access, follow these steps: ",Object(b.b)("br",null),Object(b.b)("br",null)),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"Go ",Object(b.b)("a",{href:"https://techzone.ibm.com/my/reservations/create/64027512b90e3000171bc0a2",target:"_blank",rel:"noreferrer"},"here")," and complete the form.",Object(b.b)("br",null),Object(b.b)("br",null),"\n• ",Object(b.b)("strong",{parentName:"p"},"Purpose"),": Select ",Object(b.b)("strong",{parentName:"p"},"Customer Demo")," if presenting to a customer, or ",Object(b.b)("strong",{parentName:"p"},"Practice/Self-Education")," if you are practicing the demonstration.",Object(b.b)("br",null),"\n• ",Object(b.b)("strong",{parentName:"p"},"Purpose description"),": Provide a brief description of why you need access to the demo instances.",Object(b.b)("br",null),"\n• ",Object(b.b)("strong",{parentName:"p"},"Preferred Geography"),": Select any option. This setting has no bearing on access to the demo instances.",Object(b.b)("br",null),"\n• ",Object(b.b)("strong",{parentName:"p"},"End date and time"),": The default time (and max time) is 75 minutes. ",Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-using-finops-to-manage-cost-on-public-cloud/images/turbonomic-prep-reservation.png",width:800}),Object(b.b)("br",null))),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"Click ",Object(b.b)("strong",{parentName:"p"},"Submit"),". In less than a minute, you should receive an email confirming your access is being provisioned.",Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-using-finops-to-manage-cost-on-public-cloud/images/turbonomic-prep-reservation-email-confirmation.png",width:500})))),Object(b.b)("br",null),Object(b.b)("ol",{start:3},Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"You will receive a second email once the environment is provisioned, in approximately 5 minutes. This email contains information, including a table of accessible URLs, allowing you to connect to the instance. Click the link for ",Object(b.b)("strong",{parentName:"p"},"Sales1")," or ",Object(b.b)("strong",{parentName:"p"},"Sales2"),".",Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-using-finops-to-manage-cost-on-public-cloud/images/turbonomic-prep-reservation-ready.png",width:500}),Object(b.b)("br",null))),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"After 75 minutes, your access to the Demo Instances will be removed. You will receive the following email.",Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-watson-aiops-using-finops-to-manage-cost-on-public-cloud/images/turbonomic-prep-reservation-deleted.png",width:500}),Object(b.b)("br",null)))),Object(b.b)("p",null,"Repeat these whenever you need access again."),Object(b.b)("br",null),Object(b.b)(m,{mdxType:"InlineNotification"},"If you have back-to-back Customer Demos you will need to re-request access after 75 minutes. If you have multiple demonstrations, you can schedule access to demo instances ahead of time to minimize disruption.",Object(b.b)("br",null),Object(b.b)("br",null)," In step 1 (above), select Schedule instead of Reserve Now to choose a future 75 minute window. Be sure to set your start time to one minute after your previous reservation expires. For example: If Reservation 1 is from 9:00-10:15 (75 mins), schedule Reservation 2 to start at 10:16."),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(b.b)("hr",null),Object(b.b)("p",null,"Click ",Object(b.b)("a",{parentName:"p",href:"/platinum-demos/300-watson-aiops-using-finops-to-manage-cost-on-public-cloud/demo-script"},"here")," to go to the ",Object(b.b)("strong",{parentName:"p"},"Demo script")," on the next tab."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-300-watson-aiops-using-finops-to-manage-cost-on-public-cloud-demo-preparation-sandbox-mdx-ae97823a31dfecfc234a.js.map