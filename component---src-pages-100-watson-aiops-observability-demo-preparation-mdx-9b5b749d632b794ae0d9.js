(window.webpackJsonp=window.webpackJsonp||[]).push([[24,22],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),b=a.n(n),r=a("NmYn"),i=a.n(r),l=a("Wbzz"),o=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),m=a.n(s),p=a("QH2O"),d=a.n(p),A=a("qKvR"),u=function(e){var t,a=e.title,n=e.theme,b=e.tabs,r=void 0===b?[]:b;return Object(A.b)("div",{className:m()(d.a.pageHeader,(t={},t[d.a.withTabs]=r.length,t[d.a.darkMode]="dark"===n,t))},Object(A.b)("div",{className:"bx--grid"},Object(A.b)("div",{className:"bx--row"},Object(A.b)("div",{className:"bx--col-lg-12"},Object(A.b)("h1",{id:"page-title",className:d.a.text},a)))))},g=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,b=a||n,r=b.baseUrl,i=b.subDirectory,o=r+"/edit/"+b.branch+i+"/src/pages"+t;return r?Object(A.b)("div",{className:"bx--row "+g.row},Object(A.b)("div",{className:"bx--col"},Object(A.b)("a",{className:g.link,href:o},"Edit this page on GitHub"))):null},h=a("FCXl"),j=a("dI71"),N=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,b=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),r=a===b,o=new RegExp(b+"/?(#.*)?$"),c=n.replace(o,a);return Object(A.b)("li",{key:e,className:m()((t={},t[N.selectedItem]=r,t),N.listItem)},Object(A.b)(l.Link,{className:N.link,to:""+c},e))}));return Object(A.b)("div",{className:N.tabsContainer},Object(A.b)("div",{className:"bx--grid"},Object(A.b)("div",{className:"bx--row"},Object(A.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(A.b)("nav",{"aria-label":t},Object(A.b)("ul",{className:N.list},r))))))},t}(b.a.Component),y=a("MjG9"),w=a("CzIb"),v=a("Asxa"),x=a("OIbQ"),k=a.n(x),B=function(e){var t=e.date,a=new Date(t);return t?Object(A.b)(v.c,{className:k.a.row},Object(A.b)(v.a,null,Object(A.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,b=e.Title,r=t.frontmatter,s=void 0===r?{}:r,m=t.relativePagePath,p=t.titleType,d=s.tabs,g=s.title,j=s.theme,N=s.description,v=s.keywords,x=s.date,k=Object(w.a)().interiorTheme,T=Object(l.useStaticQuery)("2456312558").site.pathPrefix,E=T?n.pathname.replace(T,""):n.pathname,I=d?E.split("/").filter(Boolean).slice(-1)[0]||i()(d[0],{lower:!0}):"",Q=j||k;return Object(A.b)(c.a,{tabs:d,homepage:!1,theme:Q,pageTitle:g,pageDescription:N,pageKeywords:v,titleType:p},Object(A.b)(u,{title:b?Object(A.b)(b,null):g,label:"label",tabs:d,theme:Q}),d&&Object(A.b)(f,{title:g,slug:E,tabs:d,currentTab:I}),Object(A.b)(y.a,{padded:!0},a,Object(A.b)(O,{relativePagePath:m}),Object(A.b)(B,{date:x})),Object(A.b)(h.a,{pageContext:t,location:n,slug:E,tabs:d,currentTab:I}),Object(A.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},WZhW:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return o})),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a("wx14"),b=a("zLVn"),r=(a("q1tI"),a("7ljp")),i=a("013z"),l=(a("qKvR"),["components"]),o=function(){return Object(r.b)("span",null,"Observability ",Object(r.b)("br",null)," 100-level live demo")},c={},s={Title:o,_frontmatter:c},m=i.a;function p(e){var t=e.components,a=Object(b.a)(e,l);return Object(r.b)(m,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"17.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAADABQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABkrEqDP8A/8QAGRAAAQUAAAAAAAAAAAAAAAAAAAECAyIz/9oACAEBAAEFAhmsqW//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAXEAADAQAAAAAAAAAAAAAAAAAAEBFi/9oACAEBAAY/Ai6X/8QAGxAAAQQDAAAAAAAAAAAAAAAAAQARITFBUaH/2gAIAQEAAT8hFtpTIreOITYwv//aAAwDAQACAAMAAAAQh+//xAAWEQEBAQAAAAAAAAAAAAAAAAAAATH/2gAIAQMBAT8Qi6//xAAWEQEBAQAAAAAAAAAAAAAAAAAAATH/2gAIAQIBAT8QiY//xAAbEAACAgMBAAAAAAAAAAAAAAABMQAhEUFhwf/aAAgBAQABPxC+RJy5RAJ5BGtYmF9n/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/platinum-demos/static/6b565aca74b8eeed70d06cac096de121/2e753/AIOps_Observability_100_Prep_GitHub_banner_8-3-21_short.jpg",srcSet:["/platinum-demos/static/6b565aca74b8eeed70d06cac096de121/69549/AIOps_Observability_100_Prep_GitHub_banner_8-3-21_short.jpg 288w","/platinum-demos/static/6b565aca74b8eeed70d06cac096de121/473e3/AIOps_Observability_100_Prep_GitHub_banner_8-3-21_short.jpg 576w","/platinum-demos/static/6b565aca74b8eeed70d06cac096de121/2e753/AIOps_Observability_100_Prep_GitHub_banner_8-3-21_short.jpg 1152w","/platinum-demos/static/6b565aca74b8eeed70d06cac096de121/74f4b/AIOps_Observability_100_Prep_GitHub_banner_8-3-21_short.jpg 1728w","/platinum-demos/static/6b565aca74b8eeed70d06cac096de121/cbe2c/AIOps_Observability_100_Prep_GitHub_banner_8-3-21_short.jpg 2000w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(r.b)("span",{id:"top"}),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"DEMO OVERVIEW"),Object(r.b)("th",{parentName:"tr",align:"left"}))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Scenario overview")),Object(r.b)("td",{parentName:"tr",align:"left"},"This demo shows how IBM Instana helps quickly identify and resolve an incident in a microservices-based application. The application in this demo is called Stan’s Robot Shop, and it uses various technologies such as Java, Python, and MySQL.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Demo products")),Object(r.b)("td",{parentName:"tr",align:"left"},"Cloud Pak for Watson AIOps")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Demo capabilities")),Object(r.b)("td",{parentName:"tr",align:"left"},"Dependency Mapping, Intelligent Alerting, Full Stack Tracing")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Demo video")),Object(r.b)("td",{parentName:"tr",align:"left"},"View the demo video ",Object(r.b)("a",{href:"https://ibm.ent.box.com/s/eogn2t43x23nk8ksyk236teqppe5d49e",target:"_blank",rel:"noreferrer"},"here"),". This is a short, but detailed, hands-on walkthrough of the scenario. (This is not a high-level marketing video.) The video is customer-ready. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Potential uses of this video are: ",Object(r.b)("br",null)," 1. Familiarize yourself with the details of this scenario ",Object(r.b)("br",null)," 2. Gain customer agreement that they would like to have a tech-seller do a deep-dive demo of this scenario ",Object(r.b)("br",null)," 3. Use as a prospecting tool to generate customer interest in applying these capabilities to enable straight-through processing")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Key demo considerations")),Object(r.b)("td",{parentName:"tr",align:"left"},"The demo environment is set to automatically inject an error into the application once every hour. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," The cycle begins on the half-hour (so 9:30, 10:30, etc). You should see errors begin to show up a few minutes after this (around 32 or 33 minutes past the hour). ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," The error will resolve itself and go back to a normal state after about 10 minutes. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," You can set the timeframe so that you can demo the active incident, even if your timing does not coincide with when the error cycle starts. See instructions below (under ",Object(r.b)("strong",{parentName:"td"},"1 - Environment setup"),"). ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," This demo script has multiple tasks, that each have multiple steps. In each step, you have the details about what you need to do (",Object(r.b)("strong",{parentName:"td"},"Actions"),"), what you can say while delivering this demo step (",Object(r.b)("strong",{parentName:"td"},"Narration"),"), and what diagrams and screenshots you will see (",Object(r.b)("strong",{parentName:"td"},"Screenshots"),"). This demo script is a suggestion, and you are welcome to customize based in your sales opportunity. Most importantly, practice this demo in advance. If the demo seems easy for you to execute, the customer will focus on the content. If it seems difficult for you to execute, the customer will focus on your delivery.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"How to get support")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{href:"https://ibm.enterprise.slack.com/app_redirect?channel=techdemos-automation-support",target:"_blank",rel:"noreferrer"},"#Techdemos-Automation-Support")," Slack channel")))),Object(r.b)("br",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"PREPARE TO GIVE THE DEMO")),Object(r.b)("details",null,Object(r.b)("summary",null,"1 - Environment setup"),Object(r.b)("br",null),Object(r.b)("p",null,"Log into the demo environment: ",Object(r.b)("br",null),"\n•\tFor IBMers, click ",Object(r.b)("a",{href:"https://ibmdemo-instanaibm.instana.io",target:"_blank",rel:"noreferrer"},"here")," ",Object(r.b)("br",null),"\n•\tFor business partners, click ",Object(r.b)("a",{href:"https://demo-partner.instana.io/",target:"_blank",rel:"noreferrer"},"here")," ",Object(r.b)("br",null),"\n•\tIf it is your first time accessing the environment, you will need to request access (See ",Object(r.b)("strong",{parentName:"p"},"2 - Requisition instructions")," below). Allow up to two business days to receive access. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)),Object(r.b)("p",null,"Set the time period to show an active incident, as detailed below: ",Object(r.b)("br",null)," ",Object(r.b)("br",null)),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In the upper right, click the button showing the timeframe. ",Object(r.b)("br",null)," ",Object(r.b)("br",null),"\n",Object(r.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"288px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"19.444444444444443%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA4klEQVQY002P226DMBBE+f//6iWEBoRahAnQpiUhVSuuxuaScOo4L13paKXRzmjHSd8l+1yS5D0i7YiShiTrrfYfq5lbkUnCpOVyuXCbebnv63VF6RFnWjSe73P6PhtKIiH4qX7Rk0YqyTAqpB6Ylom6bWj7DvGlmOcZkaSM40iW51RVbcIXnGXWxLGgOBa87HZ4ho3rEgQB7nbL88bl4fHJmBOmeUJrRXwYrPmzOKKU5vUtoizPLOZbJzz0RIUmPEi8fYWfNQR5a/Gzll1aW256+NEbvcNP75XXFRtiK6/3yn88HClO5G3t8QAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"timeframe",title:"timeframe",src:"/platinum-demos/static/c0c30f5061e4458de3a14534b6f97023/7fc1e/1_timeframe.png",srcSet:["/platinum-demos/static/c0c30f5061e4458de3a14534b6f97023/7fc1e/1_timeframe.png 288w"],sizes:"(max-width: 288px) 100vw, 288px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")," ",Object(r.b)("br",null))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"At the bottom of the pop-up, set the timeframe to begin at 25 minutes past the hour and end at 35 minutes past the hour. It doesn’t matter which hour you pick. Click ",Object(r.b)("strong",{parentName:"p"},"‘Set Time.’")," ",Object(r.b)("br",null)," ",Object(r.b)("br",null),"\nNote: ",Object(r.b)("br",null),"\n• This will ensure you see normal behavior and then a sudden change when the incident begins at 0:30. ",Object(r.b)("br",null),"\n• Pressing ‘enter’ doesn’t work. You’ll need to actually click the button. ",Object(r.b)("br",null)," ",Object(r.b)("br",null),"\n",Object(r.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"576px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAACLElEQVQ4y21T2W7bMBDUN/ex39Bf6I/kJY8tgsBHkQK2c9j1kVi2LNGkqFueztBRUxQ1sJjlcrU7s0tHTduhbtpg8rv+grbr0dCGeDDeVXUDc7aY7yxGsw2+TZ8wWWwxXezwc3XCPqsQKanrOvQsUBYlklOKs3Xw3qNjkbZtgzWhcIOa+XGaYxtn2NGOxvPsiAWSLEeU8cO9y3H0BdHh8XWPx7cYv5IUaVUjKUukZRXYi7kUVHUNl+coeX+5XIL1fQ9jzmJY40QnyUyQFaS2V4kFP/AsVpKVlKhA9e6rgUyx4V4qIk+ZZVXBUmbDQp5MNSfFZYq73COnEo0i572lIhHpyGqIqbhyAsOCsizlaj4FGekDLUKFVaynzIz+ED9RzZGzVsMkNeF8ZV+zoCjT1EW0laSuiqmYirRcmqWvBopb5/+oOPPevOeHgpJ7TbrKGH4a9PDTwP8X//DoU4WURsOTEBvJCQXeNxe2J/wnJtP82r4PaPmcGqIj00hvsObcatJvND9KacnUk3HPxIBs6hjveBa2UsSXASnSdkkG4U/Rc8txDDNfwDw/w74sA+arVfBlZ+Hyei7W63DnidVmg+8PD7iZTHAznWI8GqE+8x262Qzm9RVJfIBnV6vtGQOXpojXWxRpBntMUHKTKApc+DRk8r/8mOLz3R0+3d/j6+0tkB4R2fEYKbsYYkbMhDJ2dWRxeHrC22J+tfnsL1wE5m65hCfr7PkFh9MBvwG90eONjkWsDQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"time_range",title:"time_range",src:"/platinum-demos/static/aaa40e3c00194c970dd5a18a5604f56a/a5df1/2_time_range.png",srcSet:["/platinum-demos/static/aaa40e3c00194c970dd5a18a5604f56a/7fc1e/2_time_range.png 288w","/platinum-demos/static/aaa40e3c00194c970dd5a18a5604f56a/a5df1/2_time_range.png 576w"],sizes:"(max-width: 576px) 100vw, 576px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")," ",Object(r.b)("br",null))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Check that the summary tab for the robot shop (",Object(r.b)("strong",{parentName:"p"},"Applications")," -> ",Object(r.b)("strong",{parentName:"p"},"Robot Shop")," -> ",Object(r.b)("strong",{parentName:"p"},"Summary"),") looks like this (seeing drop in call volume and spikes in errors and latency). ",Object(r.b)("br",null)," ",Object(r.b)("br",null),"\n",Object(r.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"720px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.45833333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAABbUlEQVQoz12R227TQBRF/c3wMX2G9oUv4BkJCaS2aXmJqcIlgSZt3Ph+mYs9XuwxlRC1tDTSzDn77LOdpI9brtI16WbHerNlffeT6909H7InSmuZQ2Ccpv+YwkwQxjoGY3F+pB+MTk9StT1eF5MaifD3HFXYNO0/oXFc8KLrBwYJTM9vBDGHRTh5OGbUbaeLmdJ47gpLPsTJhv3hkbKqcc4xRUE1BAnkRcmpKBaBWWJZ7zk0Fq+6ZOjMMpXRcawcH/cTlZHRUY15TlnXaD7zM/Fr5a7pWpwiie42pSfNHbJM8m77iVerc16vLni/v+Z3e2Bd7ihMiywwK5cg4XBxTjg7Y3r7Bq+V/RiWqJzpGfqcvi+UY0eSPv3i88NXro4bbrPvfMl+cHv8RtaUmKrBtXJyOuFWK9zlJe7mhlbZNt0gASuhgUZCtegVUzJarRt3eoFzCl8/xsqFmQIxhYiWVKPFKC8r95GYZay32ugPIb0XALen5KwAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"robot_shop_summary",title:"robot_shop_summary",src:"/platinum-demos/static/94795d942bcd3e873415a22a62d4d5af/b85f6/3_robot_shop_summary.png",srcSet:["/platinum-demos/static/94795d942bcd3e873415a22a62d4d5af/7fc1e/3_robot_shop_summary.png 288w","/platinum-demos/static/94795d942bcd3e873415a22a62d4d5af/a5df1/3_robot_shop_summary.png 576w","/platinum-demos/static/94795d942bcd3e873415a22a62d4d5af/b85f6/3_robot_shop_summary.png 720w"],sizes:"(max-width: 720px) 100vw, 720px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")," ",Object(r.b)("br",null))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Click on ",Object(r.b)("strong",{parentName:"p"},"Events")," on the sidebar menu and check that there are open incidents, including ‘sudden increase in the number of erroneous calls’ on the ‘discount’ service. ",Object(r.b)("br",null)," ",Object(r.b)("br",null),"\n",Object(r.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"576px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAABn0lEQVQoz2VSi46cMAzk/z/w1Op2ee4SSMLrgPBmOjG31faKNBrbsceOSbAfB/Z9x0E+jhPLssC5SXwfv3C88Vv8LeeqPxBsdLYdcugFp3nGSEH/ncB//I/9coBvcQq6ZUPd5aiHEc24oKg6hI8CiTKCONdkK5wWVmLRU4uflZVw+ChR9RM1ZgQTBdu+QjtO6NwK0w5ImPQ0NR4syCiSm0ZY2YZoJf7UtTSXJsxvKNa6xV/5xDwV3N2ElXdvuy9kzxyltii0gSo1tK1QGgqrUmLaVFCFlhzP/eCwcV3zsnLCqkKf3TAWBVGiezyh7yGqJIWNE5gwQp1mYtsoZjxBLWex+IZo0xRT22H1O5zZ+VxyrvWQ5Q7OcUIFw0baXlPaupEp/bSGbOta4qYis773YlpLfeCYNOQJHIs9evoNr/zlp1UF2lwxdtkvvM46pS4/z+EovPG3B+u6cdwbpqHD4mYY7uTXx28kUYLoHuH+eUeWZIjDWGzPaZwivIXMuWKW02687kKtwL+97fDv6BQc7HJ+L+Avzh/+D+ysud7zjj/2h/ugdJcLtwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"open_incidents",title:"open_incidents",src:"/platinum-demos/static/683941e1d9b61261bc3703167cddc886/a5df1/4_open_incidents.png",srcSet:["/platinum-demos/static/683941e1d9b61261bc3703167cddc886/7fc1e/4_open_incidents.png 288w","/platinum-demos/static/683941e1d9b61261bc3703167cddc886/a5df1/4_open_incidents.png 576w"],sizes:"(max-width: 576px) 100vw, 576px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(r.b)("details",null,Object(r.b)("span",{id:"requisition-instructions"}),Object(r.b)("summary",null,"2 - Requisition instructions"),Object(r.b)("br",null),Object(r.b)("p",null,"Two days before the demo, make sure you can access the environment: ",Object(r.b)("br",null),"\n•\tFor IBMers, click ",Object(r.b)("a",{href:"https://ibmdemo-instanaibm.instana.io",target:"_blank",rel:"noreferrer"},"here")," ",Object(r.b)("br",null),"\n•\tFor business partners, click ",Object(r.b)("a",{href:"https://demo-partner.instana.io/",target:"_blank",rel:"noreferrer"},"here")),Object(r.b)("br",null),Object(r.b)("p",null,"Email contacts to request access:"),Object(r.b)("h3",null,"Sales"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Region"),Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Email"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Americas"),Object(r.b)("td",{parentName:"tr",align:null},"Chris Marvin"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"mailto:camarvin@us.ibm.com"},"camarvin@us.ibm.com"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"EMEA"),Object(r.b)("td",{parentName:"tr",align:null},"Thomas Taschner"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"mailto:thota@at.ibm.com"},"thota@at.ibm.com"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"AP"),Object(r.b)("td",{parentName:"tr",align:null},"Mark Jones"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"mailto:marjones@au1.ibm.com"},"marjones@au1.ibm.com"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Japan"),Object(r.b)("td",{parentName:"tr",align:null},"Yasuhiro Tsutsumi"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"mailto:Yasuhiro.Tsutsumi@ibm.com"},"Yasuhiro.Tsutsumi@ibm.com"))))),Object(r.b)("h3",null,"Tech sales"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Region "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "),Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Email"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Americas"),Object(r.b)("td",{parentName:"tr",align:null},"Ganeshram Boodhoo"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"mailto:gbood@us.ibm.com"},"gbood@us.ibm.com"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"EMEA"),Object(r.b)("td",{parentName:"tr",align:null},"Alexandre Abi-Khaled"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"mailto:alexandre.abikhaled@nl.ibm.com"},"alexandre.abikhaled@nl.ibm.com"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"AP"),Object(r.b)("td",{parentName:"tr",align:null},"Kitman Cheung"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"mailto:cheungk@sg.ibm.com"},"cheungk@sg.ibm.com"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Japan"),Object(r.b)("td",{parentName:"tr",align:null},"Tomonori Iwashina"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"mailto:TOMONORI@jp.ibm.com"},"TOMONORI@jp.ibm.com"))))),Object(r.b)("h3",null,"Everybody else (IBMers that are not sales or tech sales)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Email"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Aaron Tobin"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"mailto:atobin@us.ibm.com"},"atobin@us.ibm.com"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Maria Elena Taglieri"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"mailto:maria_elena.taglieri@it.ibm.com"},"maria_elena.taglieri@it.ibm.com"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Matthias Staub"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"mailto:matthias.staub@ch.ibm.com"},"matthias.staub@ch.ibm.com"))))),Object(r.b)("h3",null,"Business partners"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Region "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "),Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Email"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"NA, WW"),Object(r.b)("td",{parentName:"tr",align:null},"Tim Burke"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"mailto:timothy.burke@instana.com"},"timothy.burke@instana.com"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"EMEA, AP, Japan"),Object(r.b)("td",{parentName:"tr",align:null},"Allan Costigan"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"mailto:Allan.Costigan@instana.com"},"Allan.Costigan@instana.com"))))),Object(r.b)("h3",null,"Backup contacts"),Object(r.b)("p",null,"If the person you contact initially is unavailable, contact the other person for your geo. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)),Object(r.b)("p",null,"Example: A seller in the Americas would contact Chris Marvin initially. If he’s unavailable, that seller would then contact the tech sales contact for Americas (Ganeshram Boodhoo). ",Object(r.b)("br",null)," ",Object(r.b)("br",null)),Object(r.b)("p",null,"You can also use the ",Object(r.b)("strong",{parentName:"p"},"Everybody else")," contacts."),Object(r.b)("h3",null,"Turnaround"),Object(r.b)("p",null,"The turnaround time for requests to access the environment is two business days."),Object(r.b)("br",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"#top"},"Go to top")))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-100-watson-aiops-observability-demo-preparation-mdx-9b5b749d632b794ae0d9.js.map