(window.webpackJsonp=window.webpackJsonp||[]).push([[23,33,35,36],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),b=a.n(n),i=a("NmYn"),r=a.n(i),l=a("Wbzz"),c=a("Xrax"),o=a("k4MR"),s=a("TSYQ"),m=a.n(s),d=a("QH2O"),A=a.n(d),p=a("qKvR"),u=function(e){var t,a=e.title,n=e.theme,b=e.tabs,i=void 0===b?[]:b;return Object(p.b)("div",{className:m()(A.a.pageHeader,(t={},t[A.a.withTabs]=i.length,t[A.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:A.a.text},a)))))},g=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,b=a||n,i=b.baseUrl,r=b.subDirectory,c=i+"/edit/"+b.branch+r+"/src/pages"+t;return i?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:c},"Edit this page on GitHub"))):null},h=a("FCXl"),j=a("dI71"),N=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,b=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),i=a===b,c=new RegExp(b+"/?(#.*)?$"),o=n.replace(c,a);return Object(p.b)("li",{key:e,className:m()((t={},t[N.selectedItem]=i,t),N.listItem)},Object(p.b)(l.Link,{className:N.link,to:""+o},e))}));return Object(p.b)("div",{className:N.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:N.list},i))))))},t}(b.a.Component),y=a("MjG9"),x=a("CzIb"),w=a("Asxa"),v=a("OIbQ"),B=a.n(v),E=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(w.c,{className:B.a.row},Object(p.b)(w.a,null,Object(p.b)("div",{className:B.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,b=e.Title,i=t.frontmatter,s=void 0===i?{}:i,m=t.relativePagePath,d=t.titleType,A=s.tabs,g=s.title,j=s.theme,N=s.description,w=s.keywords,v=s.date,B=Object(x.a)().interiorTheme,k=Object(l.useStaticQuery)("2456312558").site.pathPrefix,T=k?n.pathname.replace(k,""):n.pathname,S=A?T.split("/").filter(Boolean).slice(-1)[0]||r()(A[0],{lower:!0}):"",I=j||B;return Object(p.b)(o.a,{tabs:A,homepage:!1,theme:I,pageTitle:g,pageDescription:N,pageKeywords:w,titleType:d},Object(p.b)(u,{title:b?Object(p.b)(b,null):g,label:"label",tabs:A,theme:I}),A&&Object(p.b)(f,{title:g,slug:T,tabs:A,currentTab:S}),Object(p.b)(y.a,{padded:!0},a,Object(p.b)(O,{relativePagePath:m}),Object(p.b)(E,{date:v})),Object(p.b)(h.a,{pageContext:t,location:n,slug:T,tabs:A,currentTab:S}),Object(p.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},WZhW:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return c})),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a("wx14"),b=a("zLVn"),i=(a("q1tI"),a("7ljp")),r=a("013z"),l=(a("qKvR"),["components"]),c=function(){return Object(i.b)("span",null,"Observability ",Object(i.b)("br",null)," 100-level live demo")},o={},s={Title:c,_frontmatter:o},m=r.a;function d(e){var t=e.components,a=Object(b.a)(e,l);return Object(i.b)(m,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"27.430555555555557%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAFABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAMEBf/EABUBAQEAAAAAAAAAAAAAAAAAAAEA/9oADAMBAAIQAxAAAAGpoEThP//EABkQAAEFAAAAAAAAAAAAAAAAAAMAARESIv/aAAgBAQABBQJkAeSRb//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABgQAQADAQAAAAAAAAAAAAAAAAABAjFx/9oACAEBAAY/AkX6x//EABsQAAICAwEAAAAAAAAAAAAAAAABESExQVFx/9oACAEBAAE/IUl+CHNuzrOhkhwf/9oADAMBAAIAAwAAABCP/wD/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQMBAT8QjI//xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQIBAT8QbX//xAAZEAEAAwEBAAAAAAAAAAAAAAABABEhMXH/2gAIAQEAAT8QqRDBWTp5ANtOPIXV8can/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/platinum-demos/static/e6c0d5fd483eedcc7a544204f8d9e417/2e753/AIOPS_Observability_100_Prep_GitHub_banner_7-30-21.jpg",srcSet:["/platinum-demos/static/e6c0d5fd483eedcc7a544204f8d9e417/69549/AIOPS_Observability_100_Prep_GitHub_banner_7-30-21.jpg 288w","/platinum-demos/static/e6c0d5fd483eedcc7a544204f8d9e417/473e3/AIOPS_Observability_100_Prep_GitHub_banner_7-30-21.jpg 576w","/platinum-demos/static/e6c0d5fd483eedcc7a544204f8d9e417/2e753/AIOPS_Observability_100_Prep_GitHub_banner_7-30-21.jpg 1152w","/platinum-demos/static/e6c0d5fd483eedcc7a544204f8d9e417/74f4b/AIOPS_Observability_100_Prep_GitHub_banner_7-30-21.jpg 1728w","/platinum-demos/static/e6c0d5fd483eedcc7a544204f8d9e417/cbe2c/AIOPS_Observability_100_Prep_GitHub_banner_7-30-21.jpg 2000w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Preparation"),Object(i.b)("th",{parentName:"tr",align:"left"}))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("strong",{parentName:"td"},"Scenario overview")),Object(i.b)("td",{parentName:"tr",align:"left"},"This demo shows how IBM Instana helps quickly identify and resolve an incident in a microservices-based application. The application in this demo is called Stan’s Robot Shop, and it uses various technologies such as Java, Python, and MySQL.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("strong",{parentName:"td"},"Demo outline")),Object(i.b)("td",{parentName:"tr",align:"left"},"Introduction ",Object(i.b)("br",null)," 1. Getting an incident alert ",Object(i.b)("br",null)," 2. Inspect auto-correlated incident details ",Object(i.b)("br",null)," 3. Debugging the incident by inspecting calls ",Object(i.b)("br",null)," 4. Drill down with end-to-end traces ",Object(i.b)("br",null)," 5. Confirm incident resolution was successful ",Object(i.b)("br",null)," Summary")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("strong",{parentName:"td"},"Before the demo")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("strong",{parentName:"td"},"Environment setup")," ",Object(i.b)("br",null)," •\tLog into ",Object(i.b)("a",{parentName:"td",href:"https://ibmdemo-instanaibm.instana.io."},"https://ibmdemo-instanaibm.instana.io.")," ",Object(i.b)("br",null)," •\tSet the time period to show an active incident, as detailed below: ",Object(i.b)("br",null)," ",Object(i.b)("br",null)," 1.\tIn the upper right, click the button showing the timeframe. ",Object(i.b)("br",null)," ",Object(i.b)("span",{parentName:"td",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"718px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"19.444444444444443%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA4ElEQVQY0z2PjVKDMBCEef/HaoVSrXSq1VKqEK1of4AE2oYkFNbkHJuZb24zm9vJekFSI8rOeLTM0hOmG4H7t5r0Pw/vjoaI2Bn+usb2KOFOd+1x7XvSSht4eaVw2H8jTjbgnNuZIM0yaKPQKgmlWmitYIym2TQcOy7Big7Hww5FyVFxgc9tbn39F+iMl9UaKWMYBxPMojlG/gSL56W9h6T9cApRCxgtKfCj7OxHbGDF8ZX/YP60hJQtvHEsbOUTVXZ1714LhHaGCSeCuITvWBXku7duh+0vt8rDMJDWxuAX2zMnFK6juboAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"timeframe",title:"timeframe",src:"/platinum-demos/static/24ab84dbe7bcb9c2fd3e4207d3c5b391/70c24/timeframe.png",srcSet:["/platinum-demos/static/24ab84dbe7bcb9c2fd3e4207d3c5b391/7fc1e/timeframe.png 288w","/platinum-demos/static/24ab84dbe7bcb9c2fd3e4207d3c5b391/a5df1/timeframe.png 576w","/platinum-demos/static/24ab84dbe7bcb9c2fd3e4207d3c5b391/70c24/timeframe.png 718w"],sizes:"(max-width: 718px) 100vw, 718px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")," ",Object(i.b)("br",null)," 2.\tAt the bottom of the pop-up, set the timeframe so that it begins at 25 minutes past the hour and ends at 35 minutes past the hour. It doesn’t matter which hour you pick. Click ",Object(i.b)("strong",{parentName:"td"},"‘set time’"),". ",Object(i.b)("br",null)," Note: Pressing ‘enter’ doesn’t work. You’ll need to actually click the button. ",Object(i.b)("br",null)," This will ensure you see normal behavior and then a sudden change when the incident begins at 0:30. ",Object(i.b)("br",null)," ",Object(i.b)("span",{parentName:"td",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.31944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAACR0lEQVQ4y31S2W7bMBDUtxfodwToa9/61ufEQQPksHPUdn3FdmA3VmSJhw6KkiaztAz0qQIWO1xSszNLRrVvUNc+hCdumxZNH6HW7zlG5RyOmcZir/E4e8OvxzmGf7YYTTd4Wh4Q6xqRLSuYukbuPdK8wOJth+0hxv6YwrgauuI+iWp/buqRqBy7OEOcWujcQdkKKq8RHxUiXRR41xaxzZGSfJ8qrg0ODEVCxWaSPRW3bYembYMTUVtVDl3X9dEiy0jo5CelEX8kaIJ9qqVSx8MVG1hjURYlcoZiE8mG+wX3ZFza5DAUIyMRrshysyKw+akoB7U5/ViSVOonXAVclCdyx8Yy5zyQl8GBEEeiSEiPaYZSFPVYLGVUJIfEUqYMG9kwy5SODnECLWMiTjhvESJNorKX7vsQleECiIM9/nTGYllUn7ANJIKlkbgUF1HVH/iQLszytf2gz9+/+H+fWI/kGbS8OZEr2DdNIAxZbpS5O6+Zm1DvTm+XWNQnYpdntdYkZNFxXiWfj2c2tNWyVvACOh4qONOOa7nthg0Ns5e5Wwuy004L+hUboUFk1xscHx5weH6BmkyRjsdQ02nAh8cnZOMJa5OwLpdLFBKLBdxqhR83N7i4vMTFYICfVwPkrEdmOIQiSbpcwbyuoRnSJN9skMwXMOt1CMu13+/hdruQG8a321t8JeGXqyt8v76Gm40RFVSTUGF6fw81GuGDhxSbxHd30CR5n83wdzoJsRv/RjyfYfvyjHdmu3qFpeJ6u0FGQXES4xO2TuDWFEXzZgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"time_range",title:"time_range",src:"/platinum-demos/static/c17d4df7aabb6cb3b39167e9710464ab/3cbba/time_range.png",srcSet:["/platinum-demos/static/c17d4df7aabb6cb3b39167e9710464ab/7fc1e/time_range.png 288w","/platinum-demos/static/c17d4df7aabb6cb3b39167e9710464ab/a5df1/time_range.png 576w","/platinum-demos/static/c17d4df7aabb6cb3b39167e9710464ab/3cbba/time_range.png 1152w","/platinum-demos/static/c17d4df7aabb6cb3b39167e9710464ab/0b124/time_range.png 1728w","/platinum-demos/static/c17d4df7aabb6cb3b39167e9710464ab/80566/time_range.png 1978w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")," ",Object(i.b)("br",null)," 3.\tCheck that the summary tab for the robot shop (",Object(i.b)("strong",{parentName:"td"},"Applications")," -> ",Object(i.b)("strong",{parentName:"td"},"Robot Shop")," -> ",Object(i.b)("strong",{parentName:"td"},"Summary"),") looks like this (seeing drop in call volume and spikes in errors and latency). ",Object(i.b)("br",null)," ",Object(i.b)("span",{parentName:"td",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.45833333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAABcUlEQVQoz22Ry27UMBSG89RseApYgtQNSDxA2cCK0kUloAKJEVUHwXTaQZPJ5DJ27MSxnXwcGwkJicVvnxzl/Bef4sP3FecXF3xbb1mt77i53XB9t+NtVVHagTnOTCHi/wM7jLSd4qR6dG8w8n/Rjoa211R1R9UI6pZ9e2KrNf3omOeZEOM/iAmpH4IQh9ybvJfvSFEKgdI9CwjSSa68mzjWDU7uNBh8gs91pxTdSf0VmAVyME2ewirD4udMc9Se1xvDz84RponyUFEdjzipk1TMUqCMpenaLJaI1p3nS+WIQQhvm1+8P9xwWa6EqOJgZ2xYcixr7R+yRbzv9yybDex2jOMofSEQ17OQdPJ2tRmyieL8/iOPrl/w+PMrXv54x1X5lTcPn9iqAwwyJKRRFhTOzghPnxCeP8NJ3MEFIfYMxtCbRlzX9FZTODuClyBBIskbZHVBurXSuXayTSeOnSwioRdHWoQG57ASe5C5hFHwG/1YFdPLZ3hnAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"robot_shop_summary",title:"robot_shop_summary",src:"/platinum-demos/static/dad1241f8ce6765b3753639c0199e00a/3cbba/robot_shop_summary.png",srcSet:["/platinum-demos/static/dad1241f8ce6765b3753639c0199e00a/7fc1e/robot_shop_summary.png 288w","/platinum-demos/static/dad1241f8ce6765b3753639c0199e00a/a5df1/robot_shop_summary.png 576w","/platinum-demos/static/dad1241f8ce6765b3753639c0199e00a/3cbba/robot_shop_summary.png 1152w","/platinum-demos/static/dad1241f8ce6765b3753639c0199e00a/0b124/robot_shop_summary.png 1728w","/platinum-demos/static/dad1241f8ce6765b3753639c0199e00a/cc86e/robot_shop_summary.png 2206w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")," ",Object(i.b)("br",null)," 4.\tClick on ",Object(i.b)("strong",{parentName:"td"},"Events")," on the sidebar menu and check that there are open incidents, including ‘sudden increase in the number of erroneous calls’ on the ‘discount’ service. ",Object(i.b)("br",null)," ",Object(i.b)("span",{parentName:"td",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.06944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAABxklEQVQoz51Ta7eiMAzk//++veo9rspD5CVIodgH4Ow0eNz9epfDkJk0TWmTRtZ7OD+/4eHnGfOy/OP7GSLPD14vvi+ExzPpMI6i/weRdR6WSa1fxD6twzgZuHl5Y5WxwG2AX/5qxvtl/fCAyLgVncrRqhat9igfI3bnDIfLFce0wJ78d1Zid0pFn/Naxr7jXHjwh5hmeKIdLf+Qq01WQ1sD7RYMxqHqFOrHgKYfhd+V/ujAGzWKbgeN6qFoJ8730JwbOSZxQ0Y0cNyqfvRIzzHyJEWR5bjGKar8JjyPN1/Q2SXBLb0SGYb2gZnbDgWNplsBkxxhyxy2qPBkcH+JoZhwYLBKErEb33zjh6dQ5DqOYcoSC4saTVxlUVess8aLBXDG4MakVVGiqWoUeYG2uQsvg69uRBeMqcsKNbWmdtThiUw/YDx/YUxOXPmK/nxB/muH29cO5f5Au6f9RrE7oBB+EB1iqre/O55geiXVjlgTzOtIWLAjpTXqrufhD+h46A0PvdeT8DsX70YtuumVxATfxNab1xe8tI21sHaGYZU27uRww6B/3xy5QYLN5z58g3WOc53YKDTyxERPQeCEsT+Ek7kBfwBuV5Y/9mK6iQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"open_incidents",title:"open_incidents",src:"/platinum-demos/static/2e84df558b318797502fe356b9e192a8/3cbba/open_incidents.png",srcSet:["/platinum-demos/static/2e84df558b318797502fe356b9e192a8/7fc1e/open_incidents.png 288w","/platinum-demos/static/2e84df558b318797502fe356b9e192a8/a5df1/open_incidents.png 576w","/platinum-demos/static/2e84df558b318797502fe356b9e192a8/3cbba/open_incidents.png 1152w","/platinum-demos/static/2e84df558b318797502fe356b9e192a8/0b124/open_incidents.png 1728w","/platinum-demos/static/2e84df558b318797502fe356b9e192a8/1be2d/open_incidents.png 1880w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")," ",Object(i.b)("br",null)," ",Object(i.b)("br",null)," ",Object(i.b)("strong",{parentName:"td"},"Requisition instructions")," ",Object(i.b)("br",null)," Please see ",Object(i.b)("a",{parentName:"td",href:"#place1"},"below"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("strong",{parentName:"td"},"Key demo considerations")),Object(i.b)("td",{parentName:"tr",align:"left"},"The demo environment is set to automatically inject an error into the application once every hour. ",Object(i.b)("br",null)," ",Object(i.b)("br",null)," The cycle begins on the half-hour (so 9:30, 10:30, etc). You should see errors begin to show up a few minutes after this (around 32 or 33 minutes past the hour). ",Object(i.b)("br",null)," ",Object(i.b)("br",null)," The error will resolve itself and go back to a normal state after about 10 minutes. ",Object(i.b)("br",null)," ",Object(i.b)("br",null)," You can set the timeframe so that you can demo the active incident, even if your timing does not coincide with when the error cycle starts. See instructions above (under ",Object(i.b)("strong",{parentName:"td"},"Environment setup"),").")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("strong",{parentName:"td"},"How to get support")),Object(i.b)("td",{parentName:"tr",align:"left"},"Please direct any questions in preparation for the demo to the ",Object(i.b)("a",{parentName:"td",href:"https://ibm.enterprise.slack.com/app_redirect?channel=techdemos-automation-support"},Object(i.b)("strong",{parentName:"a"},"#Techdemos-Automation-Support"))," Slack channel.")))),Object(i.b)("hr",null),Object(i.b)("span",{id:"place1"}),Object(i.b)("h2",null,"Requisition instructions"),Object(i.b)("p",null,"Two days before the demo, make sure you can access the environment: ",Object(i.b)("a",{parentName:"p",href:"https://ibmdemo-instanaibm.instana.io"},"https://ibmdemo-instanaibm.instana.io"),"."),Object(i.b)("p",null,"Email contacts to request access:"),Object(i.b)("h4",null,"Sales:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Region"),Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Email"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Americas"),Object(i.b)("td",{parentName:"tr",align:null},"Chris Marvin"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"mailto:camarvin@us.ibm.com"},"camarvin@us.ibm.com"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"EMEA"),Object(i.b)("td",{parentName:"tr",align:null},"Thomas Taschner"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"mailto:thota@at.ibm.com"},"thota@at.ibm.com"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"AP"),Object(i.b)("td",{parentName:"tr",align:null},"Mark Jones"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"mailto:marjones@au1.ibm.com"},"marjones@au1.ibm.com"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Japan"),Object(i.b)("td",{parentName:"tr",align:null},"Yasuhiro Tsutsumi"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"mailto:Yasuhiro.Tsutsumi@ibm.com"},"Yasuhiro.Tsutsumi@ibm.com"))))),Object(i.b)("h4",null,"Tech sales:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Region"),Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Email"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Americas"),Object(i.b)("td",{parentName:"tr",align:null},"Ganeshram Boodhoo"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"mailto:gbood@us.ibm.com"},"gbood@us.ibm.com"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"EMEA"),Object(i.b)("td",{parentName:"tr",align:null},"Alexandre Abi-Khaled"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"mailto:alexandre.abikhaled@nl.ibm.com"},"alexandre.abikhaled@nl.ibm.com"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"AP"),Object(i.b)("td",{parentName:"tr",align:null},"Kitman Cheung"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"mailto:cheungk@sg.ibm.com"},"cheungk@sg.ibm.com"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Japan"),Object(i.b)("td",{parentName:"tr",align:null},"Tomonori Iwashina"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"mailto:TOMONORI@jp.ibm.com"},"TOMONORI@jp.ibm.com"))))),Object(i.b)("h4",null,"Everybody else (IBMers that are not sales or tech sales):"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Email"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Aaron Tobin"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"mailto:atobin@us.ibm.com"},"atobin@us.ibm.com"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Maria Elena Taglieri"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"mailto:maria_elena.taglieri@it.ibm.com"},"maria_elena.taglieri@it.ibm.com"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Matthias Staub"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"mailto:matthias.staub@ch.ibm.com"},"matthias.staub@ch.ibm.com"))))),Object(i.b)("h4",null,"Business partners:"),Object(i.b)("p",null,"TBD"),Object(i.b)("h4",null,"Backup contacts:"),Object(i.b)("p",null,"If the person you contact initially is unavailable, contact the other person for your geo."),Object(i.b)("p",null,"Example: A seller in the Americas would contact Chris Marvin initially. If he’s unavailable, that seller would then contact the tech sales contact for Americas (Ganeshram Boodhoo)."),Object(i.b)("p",null,"You can also use the ‘everybody else’ contacts."),Object(i.b)("h4",null,"Turnaround:"),Object(i.b)("p",null,"The turnaround time for requests to access the environment is two business days."),Object(i.b)("hr",null))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-100-watson-aiops-observability-demo-preparation-mdx-cc39fcce06bfd75b66f2.js.map