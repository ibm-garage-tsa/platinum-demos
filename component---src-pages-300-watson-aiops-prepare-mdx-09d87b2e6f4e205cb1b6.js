(window.webpackJsonp=window.webpackJsonp||[]).push([[50,22,35,36,41],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),c=a.n(i),o=a("Wbzz"),l=a("Xrax"),b=a("k4MR"),s=a("TSYQ"),d=a.n(s),m=a("QH2O"),p=a.n(m),g=a("qKvR"),u=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(g.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=i.length,t[p.a.darkMode]="dark"===n,t))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:p.a.text},a)))))},j=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,c=r.subDirectory,l=i+"/edit/"+r.branch+c+"/src/pages"+t;return i?Object(g.b)("div",{className:"bx--row "+j.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:j.link,href:l},"Edit this page on GitHub"))):null},h=a("FCXl"),x=a("dI71"),N=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=c()(e,{lower:!0,strict:!0}),i=a===r,l=new RegExp(r+"/?(#.*)?$"),b=n.replace(l,a);return Object(g.b)("li",{key:e,className:d()((t={},t[N.selectedItem]=i,t),N.listItem)},Object(g.b)(o.Link,{className:N.link,to:""+b},e))}));return Object(g.b)("div",{className:N.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",{"aria-label":t},Object(g.b)("ul",{className:N.list},i))))))},t}(r.a.Component),f=a("MjG9"),T=a("CzIb"),A=a("Asxa"),k=a("OIbQ"),v=a.n(k),y=function(e){var t=e.date,a=new Date(t);return t?Object(g.b)(A.c,{className:v.a.row},Object(g.b)(A.a,null,Object(g.b)("div",{className:v.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,s=void 0===i?{}:i,d=t.relativePagePath,m=t.titleType,p=s.tabs,j=s.title,x=s.theme,N=s.description,A=s.keywords,k=s.date,v=Object(T.a)().interiorTheme,P=Object(o.useStaticQuery)("2456312558").site.pathPrefix,I=P?n.pathname.replace(P,""):n.pathname,S=p?I.split("/").filter(Boolean).slice(-1)[0]||c()(p[0],{lower:!0}):"",E=x||v;return Object(g.b)(b.a,{tabs:p,homepage:!1,theme:E,pageTitle:j,pageDescription:N,pageKeywords:A,titleType:m},Object(g.b)(u,{title:r?Object(g.b)(r,null):j,label:"label",tabs:p,theme:E}),p&&Object(g.b)(w,{title:j,slug:I,tabs:p,currentTab:S}),Object(g.b)(f.a,{padded:!0},a,Object(g.b)(O,{relativePagePath:d}),Object(g.b)(y,{date:k})),Object(g.b)(h.a,{pageContext:t,location:n,slug:I,tabs:p,currentTab:S}),Object(g.b)(l.a,null))}},"8Qww":function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return l})),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return m}));var n=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),c=a("013z"),o=(a("qKvR"),["components"]),l=function(){return Object(i.b)("span",null,"NOTE: INTEGRATION CODE FOR DISPLAY PURPOSES")},b={},s={Title:l,_frontmatter:b},d=c.a;function m(e){var t=e.components,a=Object(r.a)(e,o);return Object(i.b)(d,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Preparation"),Object(i.b)("th",{parentName:"tr",align:"left"}))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("strong",{parentName:"td"},"Scenario overview")),Object(i.b)("td",{parentName:"tr",align:"left"},"Access applications through APIs and Integrations")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("strong",{parentName:"td"},"Demo outline")),Object(i.b)("td",{parentName:"tr",align:"left"},"Use Watson AI together with SaaS connectivity to Salesforce and ServiceNow to create a self-service car repair API giving customers real-time estimates and integrating directly with systems of record. The demo shows easy API creation with No-code App Connect Designer, rate limiting plans, security policies and Self-Service API consumption using the API Connect Portal.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("strong",{parentName:"td"},"Before the demo")),Object(i.b)("td",{parentName:"tr",align:"left"},"jghjkghjkghjkghjk")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("strong",{parentName:"td"},"Key demo considerations")),Object(i.b)("td",{parentName:"tr",align:"left"},"jghjkghjkghjkghjk")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("strong",{parentName:"td"},"How to get support")),Object(i.b)("td",{parentName:"tr",align:"left"},"jghjkghjkghjkghjk")))),Object(i.b)("hr",null),Object(i.b)("section",{className:"content"},"\n  ",Object(i.b)("article",{parentName:"section",className:"demo-area"},"\n    ",Object(i.b)("a",{parentName:"article",className:"demo-trigger",href:"http://demos.imgix.net/wristwatch.jpg?w=500&ch=DPR&dpr=2"},"\n      ",Object(i.b)("img",{parentName:"a",src:"https://demos.imgix.net/wristwatch.jpg?w=200&ch=DPR&dpr=2&border=1,ddd"}),"\n    "),"\n  ")),Object(i.b)("section",{className:"content"},"\n  ",Object(i.b)("article",{parentName:"section",className:"demo-area"},"\n    ",Object(i.b)("a",{parentName:"article",className:"demo-trigger",href:"./images/acknowledge.png?w=500&ch=DPR&dpr=2"},"\n      ",Object(i.b)("span",{parentName:"a",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"600px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.125%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAACB0lEQVQoz31SS0hUURi+i6JlqyAsqE0LaZFIZS6sjSINEtGmAnHTpoIygnYSEaToqGhl7xkfTZBtq5UQQyElzCYwoU3IhRwH752Ze899v77+89vIII7n3o/zn//xnXP+7yi9HX3oPduHB7ceIjORQXYyi7mpOeSe5xjv38xjPvMBuRfv8JZ9ND/LYZZyspPTjJnHs3iafoKFr9+gnD/Sg7Y9Z/D6/hQMx4KmlSEsG/UjSZL/hvyTHWNOICBcC8qFwymcVE5g7PYwB2zXRxgmWPq7DNOzUKtXjTX81v6wHScxE9WD/VEEpePYFTTv78bQwEt2uo6Lzx8/4af6C34csG/p+w8sLH6BEW9usJ2MQV8YhlA6W6/h+MGLeDTwiouFKZDP5yEq5taVCoUCVpZXGp6udkImvHS0B+f2tWP8zgg7i+sbUFUVuq7zOqJraJoGvVxGHMfYbTBhd1MKp0iU8XsT8CMHq6sqXNcjuPB9nwlrQ9r1CAnCMynX4nzbtknlJinKaQz3p+FRsFQsolKpwDAMnhnVKqq0lkW7QQhBhIdSaNvbjtG7Y/BoJ13TeSdhmijTNTdKJegEk2zP8xqSyZhl0bPpPNCFFqUVgzeHtkSxKeAQaUA98Sm5WlyDRX2MqIeyT40gSZXrXTdwueUqptMzm40NQu6PFKBeQVY83lnhIAiYUM7/AGlVBglj/RSwAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"acknowledge",title:"acknowledge",src:"/platinum-demos/static/ddd251d066463f83cc1289e675051407/dadad/acknowledge.png",srcSet:["/platinum-demos/static/ddd251d066463f83cc1289e675051407/7fc1e/acknowledge.png 288w","/platinum-demos/static/ddd251d066463f83cc1289e675051407/a5df1/acknowledge.png 576w","/platinum-demos/static/ddd251d066463f83cc1289e675051407/dadad/acknowledge.png 600w"],sizes:"(max-width: 600px) 100vw, 600px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),"\n    "),"\n  ")))}m.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-300-watson-aiops-prepare-mdx-09d87b2e6f4e205cb1b6.js.map