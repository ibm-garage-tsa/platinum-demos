(window.webpackJsonp=window.webpackJsonp||[]).push([[24,33,35,36],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),b=a("NmYn"),s=a.n(b),r=a("Wbzz"),l=a("Xrax"),o=a("k4MR"),c=a("TSYQ"),d=a.n(c),m=a("QH2O"),p=a.n(m),A=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,i=e.tabs,b=void 0===i?[]:i;return Object(A.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=b.length,t[p.a.darkMode]="dark"===n,t))},Object(A.b)("div",{className:"bx--grid"},Object(A.b)("div",{className:"bx--row"},Object(A.b)("div",{className:"bx--col-lg-12"},Object(A.b)("h1",{id:"page-title",className:p.a.text},a)))))},u=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,b=i.baseUrl,s=i.subDirectory,l=b+"/edit/"+i.branch+s+"/src/pages"+t;return b?Object(A.b)("div",{className:"bx--row "+u.row},Object(A.b)("div",{className:"bx--col"},Object(A.b)("a",{className:u.link,href:l},"Edit this page on GitHub"))):null},j=a("FCXl"),O=a("dI71"),f=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],b=a.map((function(e){var t,a=s()(e,{lower:!0,strict:!0}),b=a===i,l=new RegExp(i+"/?(#.*)?$"),o=n.replace(l,a);return Object(A.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=b,t),f.listItem)},Object(A.b)(r.Link,{className:f.link,to:""+o},e))}));return Object(A.b)("div",{className:f.tabsContainer},Object(A.b)("div",{className:"bx--grid"},Object(A.b)("div",{className:"bx--row"},Object(A.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(A.b)("nav",{"aria-label":t},Object(A.b)("ul",{className:f.list},b))))))},t}(i.a.Component),y=a("MjG9"),w=a("CzIb"),v=a("Asxa"),k=a("OIbQ"),x=a.n(k),B=function(e){var t=e.date,a=new Date(t);return t?Object(A.b)(v.c,{className:x.a.row},Object(A.b)(v.a,null,Object(A.b)("div",{className:x.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,b=t.frontmatter,c=void 0===b?{}:b,d=t.relativePagePath,m=t.titleType,p=c.tabs,u=c.title,O=c.theme,f=c.description,v=c.keywords,k=c.date,x=Object(w.a)().interiorTheme,I=Object(r.useStaticQuery)("2456312558").site.pathPrefix,E=I?n.pathname.replace(I,""):n.pathname,Q=p?E.split("/").filter(Boolean).slice(-1)[0]||s()(p[0],{lower:!0}):"",S=O||x;return Object(A.b)(o.a,{tabs:p,homepage:!1,theme:S,pageTitle:u,pageDescription:f,pageKeywords:v,titleType:m},Object(A.b)(g,{title:i?Object(A.b)(i,null):u,label:"label",tabs:p,theme:S}),p&&Object(A.b)(N,{title:u,slug:E,tabs:p,currentTab:Q}),Object(A.b)(y.a,{padded:!0},a,Object(A.b)(h,{relativePagePath:d}),Object(A.b)(B,{date:k})),Object(A.b)(j.a,{pageContext:t,location:n,slug:E,tabs:p,currentTab:Q}),Object(A.b)(l.a,null))}},"6cuA":function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return l})),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return m}));var n=a("wx14"),i=a("zLVn"),b=(a("q1tI"),a("7ljp")),s=a("013z"),r=(a("qKvR"),["components"]),l=function(){return Object(b.b)("span",null,"Observability ",Object(b.b)("br",null)," 300-level live demo")},o={},c={Title:l,_frontmatter:o},d=s.a;function m(e){var t=e.components,a=Object(i.a)(e,r);return Object(b.b)(d,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(b.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"27.430555555555557%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAFABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAMEBf/EABUBAQEAAAAAAAAAAAAAAAAAAAEA/9oADAMBAAIQAxAAAAGpoEThP//EABkQAAEFAAAAAAAAAAAAAAAAAAMBERIiMf/aAAgBAQABBQJNAOpGl//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABgQAQADAQAAAAAAAAAAAAAAAAABAjFx/9oACAEBAAY/AkX6x//EABsQAAICAwEAAAAAAAAAAAAAAAABESExQVFx/9oACAEBAAE/IUnwIc27Os6GSHB//9oADAMBAAIAAwAAABAP/wD/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQMBAT8QjI//xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQIBAT8QbX//xAAZEAADAQEBAAAAAAAAAAAAAAABESEAMXH/2gAIAQEAAT8QWNRN08gAtRjzC5PHCt//2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(b.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/platinum-demos/static/dcd14ea800ec451d9dff38a084bb0e96/2e753/AIOPS_Observability_100_Script_GitHub_banner_7-30-21.jpg",srcSet:["/platinum-demos/static/dcd14ea800ec451d9dff38a084bb0e96/69549/AIOPS_Observability_100_Script_GitHub_banner_7-30-21.jpg 288w","/platinum-demos/static/dcd14ea800ec451d9dff38a084bb0e96/473e3/AIOPS_Observability_100_Script_GitHub_banner_7-30-21.jpg 576w","/platinum-demos/static/dcd14ea800ec451d9dff38a084bb0e96/2e753/AIOPS_Observability_100_Script_GitHub_banner_7-30-21.jpg 1152w","/platinum-demos/static/dcd14ea800ec451d9dff38a084bb0e96/74f4b/AIOPS_Observability_100_Script_GitHub_banner_7-30-21.jpg 1728w","/platinum-demos/static/dcd14ea800ec451d9dff38a084bb0e96/cbe2c/AIOPS_Observability_100_Script_GitHub_banner_7-30-21.jpg 2000w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(b.b)("details",{open:""},Object(b.b)("summary",null,"Introduction"),Object(b.b)("br",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"Details")),Object(b.b)("th",{parentName:"tr",align:"left"}))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")),Object(b.b)("td",{parentName:"tr",align:"left"},"From sidebar menu, click on ",Object(b.b)("strong",{parentName:"td"},"Applications"),". Choose ",Object(b.b)("strong",{parentName:"td"},"Robot Shop.")," Click on the ",Object(b.b)("strong",{parentName:"td"},"Dependencies")," tab.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"In this demo, I’ll show how IBM Instana helps quickly identify, debug, and resolve an incident in a microservices-based application. ",Object(b.b)("br",null)," ",Object(b.b)("br",null)," To set the context, our application is called Stan’s Robot Shop, and it uses various technologies such as Java, Python, and MySQL. ",Object(b.b)("br",null)," ",Object(b.b)("br",null)," This is a visualization of all the dependencies within the robot shop application. Instana automatically discovered the relationships between the services and correlated them into this dynamic graph. We can see how requests are moving through the application in real-time. Instana is able to do this because it tracks every request that flows through the application. ",Object(b.b)("br",null)," ",Object(b.b)("br",null)," We can tell there are some problems with the application because several of the services are highlighted in yellow and red. ",Object(b.b)("br",null)," ",Object(b.b)("br",null)," But, you wouldn’t normally be looking at the dashboard when something like this happens, so let me walk you through what it looks like from the SRE/IT operator’s point of view when an incident occurs.")))),Object(b.b)("div",{style:{width:"60%"}},Object(b.b)("span",{parentName:"div",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(b.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"73.61111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAABYlAAAWJQFJUiTwAAACGklEQVQ4y41TyY4TMRDt30AckAbBHbFJQGY0EpqIA7/HgY/gwJkDHNiydxYNSSZkenrS7vSSpLP2kuRRdsdNHGBESU+2y65Xi6u0eyevYLMuTKOOywGDN5nBGwXwxgF8Wp1gBmM+B1ssEcUJYkJ0A7QHp6/h9t5h0nmDwtcSPn4q4HOpiS/lFr4Vm/jQ6uCtYeC9ZSEkgyRZI1aQKGctn8vDNxkmfROXlSr8RoOiiBFFEhGSMEJMCGm/2WwUcNk/a4+P87DtIabjCXyLIXB9iiQWl+v1OoXYq0Tb7RYJ3QXTmdhnhEe5M4xJ+b/CjaXwDDq9vqLX7r84Q0jpCOXOs7y8uh7ApI+SaUnh0fI3qzDEj24vI+TQ7j5/KWqzr5SE12wIa+hkRDw923F/R0il6RnmAeGzGwivTLBdhFx8qrNJdZZJL5dLtFvnKuGdp6cK4f46GlgY0YcdpgyeLtm4rgere4FgvhDtJGp4+9HxH4TS2KMIPSKVuuw3d9HMKcJm+2J3v/07oWwHLpbtwh66CuF+SUQN+4aaskqYekqo+7k4jgXHtcWeOzls6NUqxPnhL3PC5WqVGiXpZPBJSdZbMKsHxgzwbLgT3uR85eCkC5rvdvenIEqHgBr71sNcVmubdYhsnp1nU0Zw/93l5MnudBWVdvTkBMViGbreQIHWcqWGWq0uUK3qqNb03VnP9AJ6HRV6+71QEu+k/hf1nmMsbu7LDgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(b.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"robot_shop_starting_point",title:"robot_shop_starting_point",src:"/platinum-demos/static/54d1c1b2ed2f8643ee8eb5f8b8b8d76e/3cbba/robot_shop_starting_point.png",srcSet:["/platinum-demos/static/54d1c1b2ed2f8643ee8eb5f8b8b8d76e/7fc1e/robot_shop_starting_point.png 288w","/platinum-demos/static/54d1c1b2ed2f8643ee8eb5f8b8b8d76e/a5df1/robot_shop_starting_point.png 576w","/platinum-demos/static/54d1c1b2ed2f8643ee8eb5f8b8b8d76e/3cbba/robot_shop_starting_point.png 1152w","/platinum-demos/static/54d1c1b2ed2f8643ee8eb5f8b8b8d76e/0b124/robot_shop_starting_point.png 1728w","/platinum-demos/static/54d1c1b2ed2f8643ee8eb5f8b8b8d76e/671e2/robot_shop_starting_point.png 2072w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(b.b)("details",null,Object(b.b)("summary",null,"1 - Getting an incident alert"),Object(b.b)("br",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"1.1 - Automatically assessing events and alerts")),Object(b.b)("th",{parentName:"tr",align:"left"}))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")),Object(b.b)("td",{parentName:"tr",align:"left"},"Click on the ",Object(b.b)("strong",{parentName:"td"},"Events")," icon (triangle) in sidebar menu.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"We’ve just gotten an alert from Instana that there has been a sudden increase in erroneous calls on our ‘discount’ service, which is part of the robot shop application. ",Object(b.b)("br",null)," ",Object(b.b)("br",null)," Although I don’t have it connected right now, the alert would show up via one of the configurable alert channels, like email, Microsoft Teams, Slack, and many others (",Object(b.b)("a",{parentName:"td",href:"https://www.instana.com/docs/events_alerts/alert-channels"},"full list"),"). ",Object(b.b)("br",null)," ",Object(b.b)("br",null)," It’s important to note here that you’re not getting alerts for just anything. Behind the scenes, Instana is determining which events and issues are related, and it only sends alerts if a problem is likely to affect end users. ",Object(b.b)("br",null)," ",Object(b.b)("br",null)," Let’s go into the details for this incident.")))),Object(b.b)("div",{style:{width:"60%"}},Object(b.b)("span",{parentName:"div",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(b.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.513888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABnElEQVQoz4WS2y8DQRTGJ6HiiSBB3FptI9QlEWlF3IJ68iJexKt4859KEBSru93u7K07e+m/8DkzsjQsHk5m98w5vznfN8NGFteRm11AobaHpmHC9XxwxwX3PFi+Dz8IEIgAneD3cKnWph4RhmBT9XMM7ZyhcnqJm7sHPGs6np413Bst3LbbcDsdCCEI+hXf/wOC+n4HYRiBlU+vMHxwgZXza3DOkSQxbQiEVBSLUDWHdHIaURT9yMlIc2ywuAw2Oo2Z6q6SmiSJkqA1ddX8vVHuvWpNuK6nJMqatC6OY7C12j7yixvYOzoBN00k3S488s5omZnAIBDkdUt5F2YBS6ubGCtUUN09BifPUmDLbGcCZU4eln73rgqYK62Bjc+jsF2H7X5IdmiVsrKAMqQd8jIygX1zS2ATRZQl0HGQUFI+Ae1Nz4R9AklyJrA/X1HAEgG5baukR29RN748jHqaZEjJ4tcJe4Bysi55KE+3uKUKZKTPIm38c8IBuhA2WUJx6xAvrxockm0YOhqNB1gWh01TPz41yIKm8vc/4DuJ/eVWx65duQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(b.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"sidebar_menu",title:"sidebar_menu",src:"/platinum-demos/static/273548110ee16501734450ca8ab15358/3cbba/sidebar_menu.png",srcSet:["/platinum-demos/static/273548110ee16501734450ca8ab15358/7fc1e/sidebar_menu.png 288w","/platinum-demos/static/273548110ee16501734450ca8ab15358/a5df1/sidebar_menu.png 576w","/platinum-demos/static/273548110ee16501734450ca8ab15358/3cbba/sidebar_menu.png 1152w","/platinum-demos/static/273548110ee16501734450ca8ab15358/0b124/sidebar_menu.png 1728w","/platinum-demos/static/273548110ee16501734450ca8ab15358/4ea69/sidebar_menu.png 2304w","/platinum-demos/static/273548110ee16501734450ca8ab15358/ea2e7/sidebar_menu.png 2322w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(b.b)("details",null,Object(b.b)("summary",null,"2 - Inspect auto-correlated incident details"),Object(b.b)("br",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"2.1 - Gather information from incident detail page")),Object(b.b)("th",{parentName:"tr",align:"left"}))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")),Object(b.b)("td",{parentName:"tr",align:"left"},"Click on the incident called ",Object(b.b)("strong",{parentName:"td"},"Sudden increase in the number of erroneous calls")," on the ‘discount’ service.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"Instana recognized that the sudden increase in the number of erroneous calls was something important to alert on, so we did not have to do any configuration or set thresholds in order to get this alert. We get key information right away when we come into this incident detail page. There’s a timeline of the incident, the event that triggered Instana to create the incident, and all of the related events.")))),Object(b.b)("undefined",null,Object(b.b)("div",{style:{width:"60%"}},Object(b.b)("span",{parentName:"div",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(b.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.083333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAABxElEQVQoz3WS224TMRCG9xnLVSWIUBFCSIiooiAET8ILcIHEJffcoIorlFNboClNk2w32TR7Xs/Y3v0Zm4RDVFb69I9nxvb6t4NO9wWIGVWtUCuCIvKxU5cn+g9SU9KfFwXSNENZljJfIXhw9BqlTM6KEqw1mLUsxl61MdB6g48lp/kPtoFpAC2QBMa2CO4+fQ5Sleyosfu1t+g/GEKrUrSUy4oZGq4QdA5f+mYjO26xRu+o5K2FLZawl59gJ8cw44+wH7ow7/Zh3t+HfbsH8/kNgnuHr9BaI37U0ExgUr+VaauCeMZ5DJr1oMMBeN4HX59AL85A0SkoHILXMwT7T575PyzkIhylGO1oNseycP5Y36MlkaoGLLGr59yC2l99zrDaAMGdg8dAlWM5C7G4mmE5nSOWuFonUHJ7Tm/CCCpJUd6spWeKbLGUcYJocoUkikBpimK1Qiy1YK/zEDydIByMMO8PEPaHiEYnyMYXnvT8AtfDEZLv58JYeoZYnX3ztXlvgPj0K4ofl4glN/3Skz981PXHqeSWa3keagPLk9ji83JsktjVnAW8Ezt1Pd5D50ElvtXy/tSG+i/U5m3WOzV1y/gnWSTvt8IUw7AAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(b.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"event_page",title:"event_page",src:"/platinum-demos/static/50771ceea701d08782cf8934826cfc69/3cbba/event_page.png",srcSet:["/platinum-demos/static/50771ceea701d08782cf8934826cfc69/7fc1e/event_page.png 288w","/platinum-demos/static/50771ceea701d08782cf8934826cfc69/a5df1/event_page.png 576w","/platinum-demos/static/50771ceea701d08782cf8934826cfc69/3cbba/event_page.png 1152w","/platinum-demos/static/50771ceea701d08782cf8934826cfc69/0b124/event_page.png 1728w","/platinum-demos/static/50771ceea701d08782cf8934826cfc69/459f3/event_page.png 2248w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),"\nIncident details screen:\n",Object(b.b)("div",{style:{width:"60%"}},Object(b.b)("span",{parentName:"div",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(b.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.083333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAABuElEQVQoz32S3WsUMRTF549U8MkiCAo+WClaH/znRFCoW7cIfWm7tXZbt53dyXxk8p3J6ckMFbtIh/lxQ3Luyc1Niue7+/A+wFgHx+hDgHV+jCHGR8kaYyyU1mN+9ilevv8EqQ164ryHlA1WtyXKTYV1Jf6imZg3zJvdk/V5zv1TULGz+4HOHnXTUuTQyH7ExWFKpFDUDcUOm6qisUHbdVyz4zjnGDtVmfXFi719lq2xuilHwebkFNfzI9THx4jcKCaA3lPEFpwbhmnd2EhouLP3EZ2UuFj+QVW3UG0HVdcwTQNrFGx/CidnCM03gKSajPErkvyO5H4i2R8IhjrXo3j25h0k+7NaC4iuh6F5Yj/RKyQ2PoYOg/uFcHuA+Psz4uWXiTxezxDdAtGcYPAXCL5F8eTVW+RPs1eGPRCLcyzmBzg7OkSj+vEmtQ0YeDz+4OkexjSRUkKgtnj6ejJUrDKbqk5BiEssyyUa08E7yR53rLTHEBUiGba4n/PePDTMV7/mpVzN5igP5zBKs8LIm/ZjjOz+Y2TNVoU0DQlX4gZnq2uUQvCJ1KgYtZY05tOw6r8Y0/OVaNwBN3D0FXkiq4oAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(b.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"incident_details_screen",title:"incident_details_screen",src:"/platinum-demos/static/83a196141a850b70dead5f9ecc5ae810/3cbba/incident_details_screen.png",srcSet:["/platinum-demos/static/83a196141a850b70dead5f9ecc5ae810/7fc1e/incident_details_screen.png 288w","/platinum-demos/static/83a196141a850b70dead5f9ecc5ae810/a5df1/incident_details_screen.png 576w","/platinum-demos/static/83a196141a850b70dead5f9ecc5ae810/3cbba/incident_details_screen.png 1152w","/platinum-demos/static/83a196141a850b70dead5f9ecc5ae810/0b124/incident_details_screen.png 1728w","/platinum-demos/static/83a196141a850b70dead5f9ecc5ae810/94e1b/incident_details_screen.png 2244w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")))),Object(b.b)("details",null,Object(b.b)("summary",null,"3 - Debugging the incident by inspecting calls"),Object(b.b)("br",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"3.1 - Understand the incident")),Object(b.b)("th",{parentName:"tr",align:"left"}))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")),Object(b.b)("td",{parentName:"tr",align:"left"},"Click on the event that says ",Object(b.b)("strong",{parentName:"td"},"Sudden increase in the number of erroneous calls"),". Then, click ",Object(b.b)("strong",{parentName:"td"},"Analyze Calls"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"It looks like the abnormal termination of the MySQL database caused the problem. But we want to confirm this, and Instana makes it very easy to dig deeper into each individual call.")))),Object(b.b)("div",{style:{width:"60%"}},Object(b.b)("span",{parentName:"div",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(b.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.041666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB3UlEQVQoz42S22oUQRCG53kF8UpRRAVZjBH1DfIEXnjhMeIhu4vZCKuEqGRNXNeNyR5m57Bz6PP0/Fb3SBi9suGjuqjqv6qrO7jcuQdrLYRUUNpAm+rcmqoF+fofXB7jHEVRggtJvkZwbeMBJB0ouYBSGnmeYhmukKQp4jhpSFIqKKHpgDukWxhjPFIpXzS40tn0HWZ5AUldcgqu0hyzKEO4LqmQQpwzcEUdVTWkIWRFApW3QpKYx+2pw6t3NskROJstwKiL7Ncc0/1nOD3YRnjYRXK4g+hrF2zcBz/uQfwcwOofsPKY+N7iCFqF1OHGfRKUOFuEyMoSVSkw+7aN/cEWotEjsNMnkIvnMKuXMMsX3ta8i5rttHD+a1QkHFy61UFBA53Olojo2rDA54NXePpuC8noMVD0Uas91HKXGHhr+XsSbbPrRSs5QXDxZgduMRLlbvAVKOELkL+BKfvUcc9jCVX0wLM+JBUROY2AsD7u8t7CyDEJ3mgE3Su7GdKDY81G9Eh7UOUniGJ4Di8+QpZDaDakWOM3MWc/QIoTBBeu3/5LUGmLSXiEaXiCNF7Qt5nTldeAzojG1n9o712OUYz+4d2HjaC/svKC4/kYk+UMeRIjSyLUovgvDP2W36+06iPTWmQ0AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(b.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"events",title:"events",src:"/platinum-demos/static/684f3c33260760576bee1154f689a2f9/3cbba/events.png",srcSet:["/platinum-demos/static/684f3c33260760576bee1154f689a2f9/7fc1e/events.png 288w","/platinum-demos/static/684f3c33260760576bee1154f689a2f9/a5df1/events.png 576w","/platinum-demos/static/684f3c33260760576bee1154f689a2f9/3cbba/events.png 1152w","/platinum-demos/static/684f3c33260760576bee1154f689a2f9/0b124/events.png 1728w","/platinum-demos/static/684f3c33260760576bee1154f689a2f9/cdeaf/events.png 1752w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"3.2 - Examine details")),Object(b.b)("th",{parentName:"tr",align:"left"}))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")),Object(b.b)("td",{parentName:"tr",align:"left"},"Click on the endpoint named ",Object(b.b)("strong",{parentName:"td"},"CONNECT")," and then on the first call (also named ",Object(b.b)("strong",{parentName:"td"},"CONNECT"),").")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"All the calls are grouped by endpoint. There is only one endpoint here, but if there were multiple, you’d see a list. Endpoints are automatically discovered and mapped by Instana. ",Object(b.b)("br",null)," ",Object(b.b)("br",null)," We can go into the details for each erroneous call to MySQL via this endpoint (CONNECT).")))),Object(b.b)("div",{style:{width:"60%"}},Object(b.b)("span",{parentName:"div",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(b.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.73611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAAByklEQVQoz21Ty27UQBD0Z3HmwsdEiUKClFMggiQCEik/wgFx5oa4oARYKZEQsFmvvbG9Xhuv356HXXSPHcMiLJVmRl1T013dtvafv0LXAXlRIiMUZWX2jZAQkiAGSPUPJHGE4a7TDFVdo24aWAcnZ+BPaY0sL1AQoeYgkcuK1roxApLiUrcjdNtSIt2Ils6aONbjo1NopaAIcbJGRSKGMBIpfXT438exTW5LGb68MEFWx3B1fLXrhVaVxulVir2PCbY+/MIure/dur/Xdht868nxaxNgnySXNmTL4FLRaUyTBo/eBXj41jfrgzcezj8nFKPylTZ2KVpNybvPToxgRV7di0kpe6jefK0V58JF/gE9lN/7Tc1gv/OyhLXz9Lj3g9TTMMLK9ZAuI2RhjNQPRyReiJXjIbBdxHcB4oUP/3aOyLnDcubCm84Rzxewtg9f9CWTuj+5xvzyK4LJDZbX3xDZixHhzEEwteH/mNHeRXjrICIBj84M/6eNmB6wdg77DCWNiXAc2F8m+P7pEsr38Hd/G/IobRQa3W50ep1lVLIw1iju8vYgyD5wU3IKFoK8pO6ZweZGEcpaICnIp6rnicFjHmr+GdhDHvTfSiXxUd3fI6IAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(b.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"endpoint_connect",title:"endpoint_connect",src:"/platinum-demos/static/4365ec4425369d9230d2bd4c0f9e799c/3cbba/endpoint_connect.png",srcSet:["/platinum-demos/static/4365ec4425369d9230d2bd4c0f9e799c/7fc1e/endpoint_connect.png 288w","/platinum-demos/static/4365ec4425369d9230d2bd4c0f9e799c/a5df1/endpoint_connect.png 576w","/platinum-demos/static/4365ec4425369d9230d2bd4c0f9e799c/3cbba/endpoint_connect.png 1152w","/platinum-demos/static/4365ec4425369d9230d2bd4c0f9e799c/0b124/endpoint_connect.png 1728w","/platinum-demos/static/4365ec4425369d9230d2bd4c0f9e799c/3f5bb/endpoint_connect.png 2152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(b.b)("details",null,Object(b.b)("summary",null,"4 - Drill down with end-to-end traces"),Object(b.b)("br",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"4.1 - View call via visual dashboard")),Object(b.b)("th",{parentName:"tr",align:"left"}))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")),Object(b.b)("td",{parentName:"tr",align:"left"},"—")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"Clicking on an individual call takes us to a view of the call in context of the end-to-end trace. We can see where the request began and each call that was made along the way. ",Object(b.b)("br",null)," ",Object(b.b)("br",null)," Everything is presented in an easy-to-navigate visual dashboard, so we can drill into increasingly detailed information to pinpoint the problem, without using multiple tools or navigating back and forth to lots of dashboards.")))),Object(b.b)("div",{style:{width:"60%"}},Object(b.b)("span",{parentName:"div",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(b.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.43055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB2ElEQVQoz4VS22oUQRScrzXgJYJEWE2MIooPEfwTnxJ88NVXkWh0grJxI8lOZufW9+mevZTVvYssIthDMX071afqnGz38CWWK8C4HsY6WOchlYFQGkpbuN4nDMMc4S/4MEAbm9D7kJDd23+OSihUUkOQrOokyqZFIxU6EhuSRYT5An4bG9KB87BZR2R3Hz3jCy4Fx0xU3UBVNVwnYNsOJoIP6DqiWc+553kuuO6txiIELCKh98juP3kBHeVRbtAG9fgCjtmZmxk0g005g2Wwris4ITG7LiAvf6FvecY4T7krSl+RdB4l3xk9hSSBplzPC6IsseAH0Ng0tv8DCjfgw7iGbRqq0ugYq6KHJHVEdnt0iH7jk9ca9qbEz8IhL5c4nyEh3yDOvxCTS0oVHQQVSSIWVNt+Tbiz9xiWcgUr6q2F+THG23cXePNe4Oi4wtFJ/QevTyq8Om7x8bTAIDu00qXM+jBPZInw1oMRVPSQhQk0tb+6gjzPUeXfUOdf/4EzqMmEj7uUXbTLGJNaqB8i4d7+WjLTTm2wXOJ/I7oZe/Z6WrDlNCrl0GhH21iUnYcHCGSPr0VCFStNw4WU6x7bauLADOLduC+p6tPpZ5xNpsinLb4XLTqq/A0lpexkS8beywAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(b.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"call_timeline",title:"call_timeline",src:"/platinum-demos/static/f4e607c713bf01c92d53433420a12379/3cbba/call_timeline.png",srcSet:["/platinum-demos/static/f4e607c713bf01c92d53433420a12379/7fc1e/call_timeline.png 288w","/platinum-demos/static/f4e607c713bf01c92d53433420a12379/a5df1/call_timeline.png 576w","/platinum-demos/static/f4e607c713bf01c92d53433420a12379/3cbba/call_timeline.png 1152w","/platinum-demos/static/f4e607c713bf01c92d53433420a12379/0b124/call_timeline.png 1728w","/platinum-demos/static/f4e607c713bf01c92d53433420a12379/8ef4d/call_timeline.png 2234w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"4.2 - Understand the impact and source of the incident")),Object(b.b)("th",{parentName:"tr",align:"left"}))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")),Object(b.b)("td",{parentName:"tr",align:"left"},"Click on the span called ",Object(b.b)("strong",{parentName:"td"},"CONNECT")," and refer to the sidebar on the right side.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"Clicking on a span gives more details, including the source and destination as well as the full stack trace. In this case, we can see that the source is the ‘discount’ service, and ","[scroll down]"," the destination is CONNECT of MySQL. ",Object(b.b)("br",null)," ",Object(b.b)("br",null)," So we can confirm that the root cause of the incident that affected the ‘discount’ service was with the MySQL database. The abnormal termination of the database caused a connection error, which then flowed back through the application. ",Object(b.b)("br",null)," ",Object(b.b)("br",null)," When we bring MySQL back online, it will fix the problem.")))),Object(b.b)("div",{style:{width:"60%"}},Object(b.b)("span",{parentName:"div",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(b.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.43055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB30lEQVQoz31Sy27TQBT17wISIBBCqFAoQoIFCxb8BYKu+ICiLli0RUmBIERQgoLTxHH8mPfYyeHcKRVZYeloMtfOPY97szsHL7DdAsY6aGNhnEejNOpWodUGlnfnA2LXI8SO6BHllDuh+B+BZ82HiOz2/jOsGkWwiXEoygqLokRZ1ajqNpEI5ONdOCEisSepE2IK8CTObj18SgaHNZtaFrQo5cdXjI6Q+iV8Og1r6scY5WQKfTFHKApEa1EeHyO7++Q5FJnEptgSq6kJ72JfznR3hiQ9VusKVkinv1ATJp8jLhbo2xbV0Qcq3DtAyyaSgzRstUYfHYB+BxuiA7Yes1rj44WjPbqSWJoWKmUdEDZbZDfZULxLThKyJ/s4t/i6AkY7kPs3YrAEm3IgIaRmrTIpJoktDeX6/UfJQs0MI3WYWY7DtwO8fp/j1bsJMf2Hwylevpng82iJLngOTuLoEqwMi7ln1+7t0bImEzOkZL8soIafUJ+foTk/Ja7Oy9/18AT65xj+73o1VKlpOU2/60ThfloBkS17FjcbcC3/+8h7ZQxmv3MUzLRoOWFluQG0fOPB47SowiYNRelqVTKCBl0nSxxZl90L6QxUIvWays4GQ3yZzDHK1/g+X6Nhjn8A7qTszJxBkDcAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(b.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"connect",title:"connect",src:"/platinum-demos/static/527522b8795de968d5d920bde2d7107b/3cbba/connect.png",srcSet:["/platinum-demos/static/527522b8795de968d5d920bde2d7107b/7fc1e/connect.png 288w","/platinum-demos/static/527522b8795de968d5d920bde2d7107b/a5df1/connect.png 576w","/platinum-demos/static/527522b8795de968d5d920bde2d7107b/3cbba/connect.png 1152w","/platinum-demos/static/527522b8795de968d5d920bde2d7107b/0b124/connect.png 1728w","/platinum-demos/static/527522b8795de968d5d920bde2d7107b/1192c/connect.png 2150w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(b.b)("details",null,Object(b.b)("summary",null,"5 - Confirm incident resolution was successful"),Object(b.b)("br",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"th"},"5.1 - Metrics for the robot shop have returned to normal")),Object(b.b)("th",{parentName:"tr",align:"left"}))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Action")),Object(b.b)("td",{parentName:"tr",align:"left"},"Set the timeframe so it begins at 0:30 minutes past the hour and ends at 0:45 minutes past the hour. ",Object(b.b)("br",null)," ",Object(b.b)("br",null)," Navigate to ",Object(b.b)("strong",{parentName:"td"},"Applications")," in the sidebar menu, choose ",Object(b.b)("strong",{parentName:"td"},"Robot Shop"),", and click on the ",Object(b.b)("strong",{parentName:"td"},"Summary")," tab. Note: You should see that the call volume has increased, the number of erroneous calls decreased, and latency also decreased.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Narration")),Object(b.b)("td",{parentName:"tr",align:"left"},"Now that MySQL is working again, we can go back and confirm that the problems with Robot Shop have been repaired.")))),Object(b.b)("div",{style:{width:"60%"}},Object(b.b)("span",{parentName:"div",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(b.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.43055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAACKklEQVQoz11SyY7TQBD1n8FcQAiJC8wEgRhAXCLBZ/ALnOAAf4AGCQlucAgaMWJThsBkYRwn8dK247a77V5sP8oeFkFLT892u6reqyrn0p0hFjzE5NTFZOri+8LDdO7h/SbAKElQGQtja2iC+Q9KG2R5gTTjyAuBQkg4wxt3sRp/hB9FWPkMq4BhTTxjCaacQxmDum5gKYGt/6Jump4rpWCoaKk0FdBwrt68B+atUUqJFt1pz9C2qKgizzJKZv9J1gWm2wyKknTFmqammIaeazgXd28h/nGKIghA2jFfJHg7ZlBhisz34Qch0s0GOmLQcdyjDCME8wUKutcsQuJHeHO8hqB358KVPVRZDmE1PrETvPa+4WB5guMiQOV5yJ89RTWb/tHeHUuqcr6FFhyW7Cpqx0bY3gklHOA4mOL58hD3j57gwdFjDA8f4eH8Jcp3IzTXB6hfHJzZJpW2KGDIqlYClcwgywpVpWG17ofknLt8DVvXRU5yVUi2ooSYrEUxuB8gjxNIYukuIZce5GrVW0vWG+RkvaCW5NQuTt86dnb2boNTgxldxowhpR61pKYh5LQSIRVprcE41vgcSlIlkPEC25j1MaqUsDTp3zHOzu4+am0hyQbLBTTJFrbue8WVBdc02W7itoWqiU2NLf0nyaYoDe2n6Sf/azfgnB/sg49myD648F59Qfp1jUnKYaQCp6C8MmibbjWanrt97Ba4g+hQlgR6J+WSnn8Cb0njx4iE40IAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(b.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"robot_shop_summary_end",title:"robot_shop_summary_end",src:"/platinum-demos/static/d950e39d50481e30969b4c7485291936/3cbba/robot_shop_summary_end.png",srcSet:["/platinum-demos/static/d950e39d50481e30969b4c7485291936/7fc1e/robot_shop_summary_end.png 288w","/platinum-demos/static/d950e39d50481e30969b4c7485291936/a5df1/robot_shop_summary_end.png 576w","/platinum-demos/static/d950e39d50481e30969b4c7485291936/3cbba/robot_shop_summary_end.png 1152w","/platinum-demos/static/d950e39d50481e30969b4c7485291936/0b124/robot_shop_summary_end.png 1728w","/platinum-demos/static/d950e39d50481e30969b4c7485291936/8838e/robot_shop_summary_end.png 1738w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(b.b)("details",null,Object(b.b)("summary",null,"Summary"),Object(b.b)("br",null),Object(b.b)("p",null,"Now, we can see that the metrics for the robot shop have returned to normal: the call volume has increased again, the erroneous call rate has decreased, and latency has decreased."),Object(b.b)("p",null,"We’ve fixed the problem with the robot shop and restored normal service!"),Object(b.b)("p",null,"Hopefully, you’ve seen that Instana can help make the process of identifying problems and finding the root cause of those problems very frictionless. Since Instana automates so many of the manual and labor-intensive aspects of the process, you can focus on getting other work done and not worry about instrumenting observability or constantly monitoring for problems. And when problems do arise, all the trace data is there at your fingertips to dig into.")),Object(b.b)("hr",null))}m.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-100-watson-aiops-observability-demo-script-mdx-755bd11d6075a63a8907.js.map