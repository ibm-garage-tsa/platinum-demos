(window.webpackJsonp=window.webpackJsonp||[]).push([[16,34],{"013z":function(t,e,a){"use strict";var n=a("q1tI"),b=a.n(n),r=a("NmYn"),s=a.n(r),i=a("Wbzz"),c=a("Xrax"),o=a("k4MR"),l=a("TSYQ"),d=a.n(l),m=a("QH2O"),p=a.n(m),u=a("qKvR"),g=function(t){var e,a=t.title,n=t.theme,b=t.tabs,r=void 0===b?[]:b;return Object(u.b)("div",{className:d()(p.a.pageHeader,(e={},e[p.a.withTabs]=r.length,e[p.a.darkMode]="dark"===n,e))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:p.a.text},a)))))},j=a("BAC9"),O=function(t){var e=t.relativePagePath,a=t.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,b=a||n,r=b.baseUrl,s=b.subDirectory,c=r+"/edit/"+b.branch+s+"/src/pages"+e;return r?Object(u.b)("div",{className:"bx--row "+j.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:j.link,href:c},"Edit this page on GitHub"))):null},h=a("FCXl"),N=a("dI71"),A=a("I8xM"),f=function(t){function e(){return t.apply(this,arguments)||this}return Object(N.a)(e,t),e.prototype.render=function(){var t=this.props,e=t.title,a=t.tabs,n=t.slug,b=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(t){var e,a=s()(t,{lower:!0,strict:!0}),r=a===b,c=new RegExp(b+"/?(#.*)?$"),o=n.replace(c,a);return Object(u.b)("li",{key:t,className:d()((e={},e[A.selectedItem]=r,e),A.listItem)},Object(u.b)(i.Link,{className:A.link,to:""+o},t))}));return Object(u.b)("div",{className:A.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":e},Object(u.b)("ul",{className:A.list},r))))))},e}(b.a.Component),w=a("MjG9"),_=a("CzIb"),y=a("Asxa"),x=a("OIbQ"),k=a.n(x),v=function(t){var e=t.date,a=new Date(e);return e?Object(u.b)(y.c,{className:k.a.row},Object(u.b)(y.a,null,Object(u.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};e.a=function(t){var e=t.pageContext,a=t.children,n=t.location,b=t.Title,r=e.frontmatter,l=void 0===r?{}:r,d=e.relativePagePath,m=e.titleType,p=l.tabs,j=l.title,N=l.theme,A=l.description,y=l.keywords,x=l.date,k=Object(_.a)().interiorTheme,T=Object(i.useStaticQuery)("2456312558").site.pathPrefix,B=T?n.pathname.replace(T,""):n.pathname,S=p?B.split("/").filter(Boolean).slice(-1)[0]||s()(p[0],{lower:!0}):"",P=N||k;return Object(u.b)(o.a,{tabs:p,homepage:!1,theme:P,pageTitle:j,pageDescription:A,pageKeywords:y,titleType:m},Object(u.b)(g,{title:b?Object(u.b)(b,null):j,label:"label",tabs:p,theme:P}),p&&Object(u.b)(f,{title:j,slug:B,tabs:p,currentTab:S}),Object(u.b)(w.a,{padded:!0},a,Object(u.b)(O,{relativePagePath:d}),Object(u.b)(v,{date:x})),Object(u.b)(h.a,{pageContext:e,location:n,slug:B,tabs:p,currentTab:S}),Object(u.b)(c.a,null))}},BAC9:function(t,e,a){t.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(t,e,a){t.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},LxGe:function(t,e,a){"use strict";a.r(e),a.d(e,"Title",(function(){return c})),a.d(e,"_frontmatter",(function(){return o})),a.d(e,"default",(function(){return m}));var n=a("wx14"),b=a("zLVn"),r=(a("q1tI"),a("7ljp")),s=a("013z"),i=(a("qKvR"),["components"]),c=function(){return Object(r.b)("span",null,"Straight-through processing ",Object(r.b)("br",null)," 100-level live demo")},o={},l={Title:c,_frontmatter:o},d=s.a;function m(t){var e=t.components,a=Object(b.a)(t,i);return Object(r.b)(d,Object(n.a)({},l,a,{components:e,mdxType:"MDXLayout"}),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"17.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAADABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAIE/8QAFAEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABx2JYH//EABQQAQAAAAAAAAAAAAAAAAAAABD/2gAIAQEAAQUCf//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABQQAQAAAAAAAAAAAAAAAAAAABD/2gAIAQEABj8Cf//EABkQAQEAAwEAAAAAAAAAAAAAAAEAESFBYf/aAAgBAQABPyHj5C6Mxf/aAAwDAQACAAMAAAAQhC//xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAwEBPxAn/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAGxAAAgMAAwAAAAAAAAAAAAAAAREAITFBUWH/2gAIAQEAAT8QQLOFeXNYROOWdne5/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/platinum-demos/static/bd9ca1c40de30bd34eb184765abd3e6c/2e753/BA_STP_100_Script_GitHub_banner_8-3-21_short.jpg",srcSet:["/platinum-demos/static/bd9ca1c40de30bd34eb184765abd3e6c/69549/BA_STP_100_Script_GitHub_banner_8-3-21_short.jpg 288w","/platinum-demos/static/bd9ca1c40de30bd34eb184765abd3e6c/473e3/BA_STP_100_Script_GitHub_banner_8-3-21_short.jpg 576w","/platinum-demos/static/bd9ca1c40de30bd34eb184765abd3e6c/2e753/BA_STP_100_Script_GitHub_banner_8-3-21_short.jpg 1152w","/platinum-demos/static/bd9ca1c40de30bd34eb184765abd3e6c/74f4b/BA_STP_100_Script_GitHub_banner_8-3-21_short.jpg 1728w","/platinum-demos/static/bd9ca1c40de30bd34eb184765abd3e6c/cbe2c/BA_STP_100_Script_GitHub_banner_8-3-21_short.jpg 2000w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(r.b)("span",{id:"top"}),Object(r.b)("details",null,Object(r.b)("summary",null,"Introduction"),Object(r.b)("br",null),Object(r.b)("p",null,"Welcome to the straight-through processing demonstration."),Object(r.b)("br",null),Object(r.b)("p",null,"Today, I will demonstrate how the IBM Cloud Pak for Business Automation supports straight-through processing to automate customer refund requests quickly and easily. We’ll take advantage of the Pak’s workflow and decision management features - along with its operational intelligence capabilities - to show how business users can lead the effort to transform customer service. Let’s get started."),Object(r.b)("br",null),Object(r.b)("p",null,"(Printer-ready PDF of demo script ",Object(r.b)("a",{href:"/platinum-demos/6dffd1e7c1f8b0c74d5b8fe689bb6279/100-BA-STP-Demo-Script.pdf",target:"_blank",rel:"noreferrer"},"here"),")"),Object(r.b)("br",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(r.b)("details",null,Object(r.b)("summary",null,"1 - Executing workflow with straight-through processing"),Object(r.b)("br",null),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"1.1")),Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"Refund request approved")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Narration")),Object(r.b)("td",{parentName:"tr",align:"left"},"Let’s look at how straight-through processing transforms the refund process.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Action")," "," "," 1.1.1"),Object(r.b)("td",{parentName:"tr",align:"left"},"Go to Focus Corp’s ",Object(r.b)("strong",{parentName:"td"},"Your Returns and Refunds")," page. ",Object(r.b)("br",null),Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/100-business-automation/images/Stu_7.2.png",width:800}),Object(r.b)("br",null))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Action")," "," "," 1.1.2"),Object(r.b)("td",{parentName:"tr",align:"left"},"Click to select an order. Of the three orders that display, click the refund request ending in ’",Object(r.b)("strong",{parentName:"td"},"AP"),".’ ",Object(r.b)("br",null),Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/100-business-automation/images/Step_4.1_action_2.png",width:800}),Object(r.b)("br",null))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Action")," "," "," 1.1.3"),Object(r.b)("td",{parentName:"tr",align:"left"},"Click ",Object(r.b)("strong",{parentName:"td"},"Submit Request")," to process the refund. ",Object(r.b)("br",null),Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/100-business-automation/images/Step_4.1_action_3.png",width:800}),Object(r.b)("br",null))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Action")," "," "," 1.1.4"),Object(r.b)("td",{parentName:"tr",align:"left"},"The process executes and generates a refund-approved result. ",Object(r.b)("br",null),Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/100-business-automation/images/Step_4.1_results_screen.png",width:800}),Object(r.b)("br",null))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Narration")),Object(r.b)("td",{parentName:"tr",align:"left"},"In this first example, when the customer submits the refund request, the criteria is evaluated by the refund decision, and the approval is granted in real time, avoiding a time-consuming manual investigation.")))),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"1.2")),Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"Refund request denied")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Narration")),Object(r.b)("td",{parentName:"tr",align:"left"},"Let’s look at a second example.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Action")," "," "," 1.2.1"),Object(r.b)("td",{parentName:"tr",align:"left"},"Click ",Object(r.b)("strong",{parentName:"td"},"Submit Another Refund Request"),". ",Object(r.b)("br",null),Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/100-business-automation/images/Step_4.2_action_1.png",width:800}),Object(r.b)("br",null))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Action")," "," "," 1.2.2"),Object(r.b)("td",{parentName:"tr",align:"left"},"Click to select an order. Of the three orders that display, click the refund request ending in ’",Object(r.b)("strong",{parentName:"td"},"DE"),".’ ",Object(r.b)("br",null),Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/100-business-automation/images/Step_4.2_action_2.png",width:800}),Object(r.b)("br",null))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Action")," "," "," 1.2.3"),Object(r.b)("td",{parentName:"tr",align:"left"},"Click ",Object(r.b)("strong",{parentName:"td"},"Submit Request")," to process the refund. ",Object(r.b)("br",null),Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/100-business-automation/images/Step_4.2_action_3.png",width:800}),Object(r.b)("br",null))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Action")," "," "," 1.2.4"),Object(r.b)("td",{parentName:"tr",align:"left"},"The process executes and generates a refund-denied result. ",Object(r.b)("br",null),Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/100-business-automation/images/Step_4.2_results_screen.png",width:800}),Object(r.b)("br",null))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Narration")),Object(r.b)("td",{parentName:"tr",align:"left"},"This one clearly did not meet our criteria and resulted in a denial because it was well outside the time window. This refund request resulted in a denial, but it is still straight-through processing because there is no manual work.")))),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"1.3")),Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"Refund request requires manual investigation")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Narration")),Object(r.b)("td",{parentName:"tr",align:"left"},"But what if the business rules determine this request requires investigation? "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Action")," "," "," 1.3.1"),Object(r.b)("td",{parentName:"tr",align:"left"},"Click ",Object(r.b)("strong",{parentName:"td"},"Submit Another Refund Request"),". ",Object(r.b)("br",null),Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/100-business-automation/images/Step_4.3_action_1.png",width:800}),Object(r.b)("br",null))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Action")," "," "," 1.3.2"),Object(r.b)("td",{parentName:"tr",align:"left"},"Click to select an order. Of the three orders that display, click the refund request ending in ‘",Object(r.b)("strong",{parentName:"td"},"MA"),".’ ",Object(r.b)("br",null),Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/100-business-automation/images/Step_4.3_action_2.png",width:800}),Object(r.b)("br",null))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Action")," "," "," 1.3.3"),Object(r.b)("td",{parentName:"tr",align:"left"},"Click ",Object(r.b)("strong",{parentName:"td"},"Submit Request")," to process the refund. "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ",Object(r.b)("br",null),Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/100-business-automation/images/Step_4.3_action_3.png",width:800}),Object(r.b)("br",null))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Action")," "," "," 1.3.4"),Object(r.b)("td",{parentName:"tr",align:"left"},"The process executes and generates a refund investigation result. "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ",Object(r.b)("br",null),Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/100-business-automation/images/Step_4.3_results_screen.png",width:800}),Object(r.b)("br",null))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Narration")),Object(r.b)("td",{parentName:"tr",align:"left"},"In that case, workflow would route the request to our customer service agent to do the investigation. "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ")))),Object(r.b)("br",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(r.b)("details",null,Object(r.b)("summary",null,"2 - Monitoring operational intelligence"),Object(r.b)("br",null),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"2.1")),Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"Review the refund dashboard")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Narration")),Object(r.b)("td",{parentName:"tr",align:"left"},"Let’s look at the refund dashboard to see how much straight-through processing we’ve achieved.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Action")," "," "," 2.1.1"),Object(r.b)("td",{parentName:"tr",align:"left"},"Click the ",Object(r.b)("strong",{parentName:"td"},"Refund Dashboard")," tab, which you opened in the demo preparation. In this step, you are just speaking to the displayed dashboard. ",Object(r.b)("br",null),Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/100-business-automation/images/Step_5.1_action_1.png",width:800}),Object(r.b)("br",null))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Narration")),Object(r.b)("td",{parentName:"tr",align:"left"},"So far, the percentage of manually processed requests is still around 70%, with the average manual investigation taking over two hours. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Let’s look at what’s behind this dashboard. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," First, as the refund process runs, the system can collect and process historical data and make it available for visualization. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Next, we provide the Business Performance Center, a no-code monitoring application for the IBM Cloud Pak for Business Automation. Dashboards can be designed and shared in minutes that provide insight into important business activities and processes. You can prepare, track, and design visualizations of metrics, key performance indicators (KPIs), and other measurements of business performance in customizable dashboards. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Additionally, the historical data can be used to feed a data lake to apply machine learning to our automations. For example, to make even more sophisticated refund decisions, we could use a data lake to incorporate machine learning into our refund process. The Cloud Pak for Business Automation includes some machine learning samples to help you get started.")))),Object(r.b)("br",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(r.b)("details",null,Object(r.b)("summary",null,"3 - Modeling decisions"),Object(r.b)("br",null),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"3.1")),Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"Review the refund approval decision model")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Narration")),Object(r.b)("td",{parentName:"tr",align:"left"},"Let’s look at how the business analyst can create and manage business rules to further increase straight-through processing. The business rules replicate how experts make refund decisions. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Using no-code decision modeling, business analysts can easily author and test refund decision criteria.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Action")," "," "," 3.1.1"),Object(r.b)("td",{parentName:"tr",align:"left"},"Go to your ",Object(r.b)("strong",{parentName:"td"},"Decision Center"),", having already logged in with your credentials, if necessary. ",Object(r.b)("br",null),Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/100-business-automation/images/DecisionCenter.png",width:800}),Object(r.b)("br",null))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Action")," "," "," 3.1.2"),Object(r.b)("td",{parentName:"tr",align:"left"},"Click the decision service named ",Object(r.b)("strong",{parentName:"td"},"Refund Processing"),". ",Object(r.b)("br",null),Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/100-business-automation/images/Step_6.1_action_2.png",width:800}),Object(r.b)("br",null))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Action")," "," "," 3.1.3"),Object(r.b)("td",{parentName:"tr",align:"left"},"When the ",Object(r.b)("strong",{parentName:"td"},"Refund Processing")," decision screen appears, click ",Object(r.b)("strong",{parentName:"td"},"main"),". ",Object(r.b)("br",null),Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/100-business-automation/images/Step_6.1_action_3.png",width:800}),Object(r.b)("br",null))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Action")," "," "," 3.1.4"),Object(r.b)("td",{parentName:"tr",align:"left"},"The next screen has several blue tabs at the top. Click ",Object(r.b)("strong",{parentName:"td"},"Decision Model"),". ",Object(r.b)("br",null),Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/100-business-automation/images/Step_6.1_action_4.png",width:800}),Object(r.b)("br",null))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Narration")),Object(r.b)("td",{parentName:"tr",align:"left"},"This is the decision model for the refund request decision service. A decision model uses a diagram to break the decision down into sub-decisions, which all contribute to the final refund decision. "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ")))),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"3.2")),Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"Review the decision tables")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Narration")),Object(r.b)("td",{parentName:"tr",align:"left"},"To automate the refund request process, we’ve used two decision tables. A decision table groups rules that have similar conditions and actions but use different thresholds.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Action")," "," "," 3.2.1"),Object(r.b)("td",{parentName:"tr",align:"left"},"Click ",Object(r.b)("strong",{parentName:"td"},"Validate Time Window")," in the decision diagram. ",Object(r.b)("br",null),Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/100-business-automation/images/Step_6.1_action_5.png",width:800}),Object(r.b)("br",null))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Action")," "," "," 3.2.2"),Object(r.b)("td",{parentName:"tr",align:"left"},"Click ",Object(r.b)("strong",{parentName:"td"},"Validate Time Window")," in the Decision Logic section on the left side of the screen.  ",Object(r.b)("br",null),Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/100-business-automation/images/Step_6.1_action_6.png",width:800}),Object(r.b)("br",null))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Action")," "," "," 3.2.3"),Object(r.b)("td",{parentName:"tr",align:"left"},"This opens a rule table based on the refund reason, days since order, and goods condition. Close the ",Object(r.b)("strong",{parentName:"td"},"Validate Time Window")," table. ",Object(r.b)("br",null),Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/100-business-automation/images/Step_6.1_action_7.png",width:800}),Object(r.b)("br",null))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Narration")),Object(r.b)("td",{parentName:"tr",align:"left"},"The first decision table considers the customer’s reason for return, the days since delivery, and the condition of the item. These are the same criteria that a customer service agent would have used to make a refund request decision, but now, the decision is automated and executes in real time.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Action")," "," "," 3.2.4"),Object(r.b)("td",{parentName:"tr",align:"left"},"Click ",Object(r.b)("strong",{parentName:"td"},"Validate Type of Goods")," in the decision diagram. ",Object(r.b)("br",null),Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/100-business-automation/images/Step_6.1_action_8.png",width:800}),Object(r.b)("br",null))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Action")," "," "," 3.2.5"),Object(r.b)("td",{parentName:"tr",align:"left"},"Click ",Object(r.b)("strong",{parentName:"td"},"Validate Type of Goods")," in the Decision Logic section on the left side of the screen. ",Object(r.b)("br",null),Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/100-business-automation/images/Step_6.1_action_9.png",width:800}),Object(r.b)("br",null))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Action")," "," "," 3.2.6"),Object(r.b)("td",{parentName:"tr",align:"left"},"This opens a rule table based on goods type and goods condition. Close the ",Object(r.b)("strong",{parentName:"td"},"Validate Type of Goods")," window. ",Object(r.b)("br",null),Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/100-business-automation/images/Step_6.1_action_10.png",width:800}),Object(r.b)("br",null))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Narration")),Object(r.b)("td",{parentName:"tr",align:"left"},"The second sub-decision has a table that considers the type of item being returned.")))),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"3.3")),Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"Make the final refund decision")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Narration")),Object(r.b)("td",{parentName:"tr",align:"left"},"The final refund decision is made by combining the results of the ‘Validate Time Window’ and ‘Validate Type of Goods’ decisions. "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Action")," "," "," 3.3.1"),Object(r.b)("td",{parentName:"tr",align:"left"},"Click ",Object(r.b)("strong",{parentName:"td"},"Final Refund Decision")," in the decision diagram. ",Object(r.b)("br",null),Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/100-business-automation/images/Step_6.1_action_11.png",width:800}),Object(r.b)("br",null))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Action")," "," "," 3.3.2"),Object(r.b)("td",{parentName:"tr",align:"left"},"Click ",Object(r.b)("strong",{parentName:"td"},"Manual Decision")," in the Decision Logic section on the left side of the screen. ",Object(r.b)("br",null),Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/100-business-automation/images/Step_6.1_action_12.png",width:800}),Object(r.b)("br",null))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Action")," "," "," 3.3.3"),Object(r.b)("td",{parentName:"tr",align:"left"},"This opens a rule script based on the time window and type of goods. Close the ",Object(r.b)("strong",{parentName:"td"},"Manual Decision")," rule logic window. ",Object(r.b)("br",null),Object(r.b)("br",null)," ",Object(r.b)("img",{parentName:"td",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/100-business-automation/images/Step_6.1_action_13.png",width:800}),Object(r.b)("br",null))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Narration")),Object(r.b)("td",{parentName:"tr",align:"left"},"We’ve combined the two sub-decisions to make the final response using a simple text rule. ",Object(r.b)("br",null),Object(r.b)("br",null)," Business analysts can change the rules to achieve higher levels of straight-through processing or to adapt to changing business conditions.")))),Object(r.b)("br",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(r.b)("details",null,Object(r.b)("summary",null,"Summary"),Object(r.b)("br",null),Object(r.b)("p",null,"Using the Cloud Pak for Business Automation, we had all the capabilities needed to significantly reduce the amount of manual refund processing. We combined workflow and decision automation to increase straight-through processing, which resulted in a lower average completion time, lower costs, and more consistent customer communication throughout the process."),Object(r.b)("br",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"#top"},"Go to top")))))}m.isMDXComponent=!0},OIbQ:function(t,e,a){t.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(t,e,a){t.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-100-business-automation-demo-script-mdx-f651212e9fa200d2e039.js.map