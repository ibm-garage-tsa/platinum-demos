(window.webpackJsonp=window.webpackJsonp||[]).push([[44,49,70],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),A=a.n(n),i=a("NmYn"),r=a.n(i),c=a("Wbzz"),b=a("Xrax"),o=a("k4MR"),l=a("TSYQ"),s=a.n(l),d=a("QH2O"),m=a.n(d),p=a("qKvR"),u=function(e){var t,a=e.title,n=e.theme,A=e.tabs,i=void 0===A?[]:A;return Object(p.b)("div",{className:s()(m.a.pageHeader,(t={},t[m.a.withTabs]=i.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,A=a||n,i=A.baseUrl,r=A.subDirectory,b=i+"/edit/"+A.branch+r+"/src/pages"+t;return i?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:b},"Edit this page on GitHub"))):null},x=a("FCXl"),O=a("dI71"),f=a("I8xM"),h=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,A=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),i=a===A,b=new RegExp(A+"/?(#.*)?$"),o=n.replace(b,a);return Object(p.b)("li",{key:e,className:s()((t={},t[f.selectedItem]=i,t),f.listItem)},Object(p.b)(c.Link,{className:f.link,to:""+o},e))}));return Object(p.b)("div",{className:f.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:f.list},i))))))},t}(A.a.Component),N=a("MjG9"),E=a("CzIb"),B=a("Asxa"),v=a("OIbQ"),w=a.n(v),P=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(B.c,{className:w.a.row},Object(p.b)(B.a,null,Object(p.b)("div",{className:w.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,A=e.Title,i=t.frontmatter,l=void 0===i?{}:i,s=t.relativePagePath,d=t.titleType,m=l.tabs,g=l.title,O=l.theme,f=l.description,B=l.keywords,v=l.date,w=Object(E.a)().interiorTheme,k=Object(c.useStaticQuery)("2456312558").site.pathPrefix,T=k?n.pathname.replace(k,""):n.pathname,_=m?T.split("/").filter(Boolean).slice(-1)[0]||r()(m[0],{lower:!0}):"",D=O||w;return Object(p.b)(o.a,{tabs:m,homepage:!1,theme:D,pageTitle:g,pageDescription:f,pageKeywords:B,titleType:d},Object(p.b)(u,{title:A?Object(p.b)(A,null):g,label:"label",tabs:m,theme:D}),m&&Object(p.b)(h,{title:g,slug:T,tabs:m,currentTab:_}),Object(p.b)(N.a,{padded:!0},a,Object(p.b)(j,{relativePagePath:s}),Object(p.b)(P,{date:v})),Object(p.b)(x.a,{pageContext:t,location:n,slug:T,tabs:m,currentTab:_}),Object(p.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},x9UI:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return b})),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a("wx14"),A=a("zLVn"),i=(a("q1tI"),a("7ljp")),r=a("013z"),c=(a("qKvR"),["components"]),b=function(){return Object(i.b)("span",null,"Predictive decisioning ",Object(i.b)("br",null)," 300-level live demo")},o={},l={Title:b,_frontmatter:o},s=r.a;function d(e){var t=e.components,a=Object(A.a)(e,c);return Object(i.b)(s,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"17.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAADABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAIDBP/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHLaJEH/8QAGBAAAwEBAAAAAAAAAAAAAAAAAAEDAiH/2gAIAQEAAQUCRFspzf8A/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFhABAQEAAAAAAAAAAAAAAAAAAAEh/9oACAEBAAY/AlY//8QAGRAAAwEBAQAAAAAAAAAAAAAAAAEhEWFx/9oACAEBAAE/Iag5luJzhQmeen//2gAMAwEAAgADAAAAEHw//8QAFhEAAwAAAAAAAAAAAAAAAAAAARAx/9oACAEDAQE/EBV//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAGRABAQEBAQEAAAAAAAAAAAAAAREhAFFh/9oACAEBAAE/ENBAhYdURoD8JnnWWAEKzO//2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Predictive decisioning banner",title:"Predictive decisioning banner",src:"/platinum-demos/static/881a16677989c956ce2d5936c17d2b56/2e753/Predictive_Decisioning_Banner_V21.0.3.jpg",srcSet:["/platinum-demos/static/881a16677989c956ce2d5936c17d2b56/69549/Predictive_Decisioning_Banner_V21.0.3.jpg 288w","/platinum-demos/static/881a16677989c956ce2d5936c17d2b56/473e3/Predictive_Decisioning_Banner_V21.0.3.jpg 576w","/platinum-demos/static/881a16677989c956ce2d5936c17d2b56/2e753/Predictive_Decisioning_Banner_V21.0.3.jpg 1152w","/platinum-demos/static/881a16677989c956ce2d5936c17d2b56/74f4b/Predictive_Decisioning_Banner_V21.0.3.jpg 1728w","/platinum-demos/static/881a16677989c956ce2d5936c17d2b56/cbe2c/Predictive_Decisioning_Banner_V21.0.3.jpg 2000w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(i.b)("span",{id:"top"}),Object(i.b)("p",null,"This page contains all the setup and scenario instruction files that are required to install and execute the Predictive decisioning demo on ",Object(i.b)("strong",{parentName:"p"},"Cloud Pak for Business Automation V21.0.3"),"."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"REQUIRED FILES"),Object(i.b)("th",{parentName:"tr",align:"left"}))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("strong",{parentName:"td"},"Automation Decision Services project")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{href:"/platinum-demos/1fb402076091af43082e72909e1b7f4f/SkyTalk-customer-retention-DS_21.0.3_V1.zip",target:"_blank",rel:"noreferrer"},"SkyTalk-customer-retention-DS_21.0.3_V1.zip"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("strong",{parentName:"td"},"Business Automation application project")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{href:"/platinum-demos/cca0635fb0c4faa5b4c49209a17b2ac7/SkyTalk_call_center_application_21.0.3_V2.twx",target:"_blank",rel:"noreferrer"},"SkyTalk_call_center_application_21.0.3_V2.twx"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("strong",{parentName:"td"},"Demo instructions")),Object(i.b)("td",{parentName:"tr",align:"left"},"• ",Object(i.b)("a",{href:"/platinum-demos/a38f4502a3123775e88bfa4ea638f5e0/demo-prep-v21.0.3.pdf",target:"_blank",rel:"noreferrer"},"Demo preparation")," ",Object(i.b)("br",null)," • ",Object(i.b)("a",{href:"/platinum-demos/2181b22dc087543e601df37000f316d0/demo-script-v21.0.3.pdf",target:"_blank",rel:"noreferrer"},"Demo script"))))),Object(i.b)("br",null),Object(i.b)("hr",null))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-300-business-automation-predictive-decisioning-v-21-0-3-mdx-5838057c1bf53a55c3e8.js.map