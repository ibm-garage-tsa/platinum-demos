(window.webpackJsonp=window.webpackJsonp||[]).push([[65,35,40],{"013z":function(A,e,t){"use strict";var a=t("q1tI"),i=t.n(a),s=t("NmYn"),r=t.n(s),n=t("Wbzz"),o=t("Xrax"),b=t("k4MR"),l=t("TSYQ"),d=t.n(l),c=t("QH2O"),p=t.n(c),m=t("qKvR"),g=function(A){var e,t=A.title,a=A.theme,i=A.tabs,s=void 0===i?[]:i;return Object(m.b)("div",{className:d()(p.a.pageHeader,(e={},e[p.a.withTabs]=s.length,e[p.a.darkMode]="dark"===a,e))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},t)))))},u=t("BAC9"),j=function(A){var e=A.relativePagePath,t=A.repository,a=Object(n.useStaticQuery)("1364590287").site.siteMetadata.repository,i=t||a,s=i.baseUrl,r=i.subDirectory,o=s+"/edit/"+i.branch+r+"/src/pages"+e;return s?Object(m.b)("div",{className:"bx--row "+u.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:u.link,href:o},"Edit this page on GitHub"))):null},Q=t("FCXl"),E=t("dI71"),x=t("I8xM"),h=function(A){function e(){return A.apply(this,arguments)||this}return Object(E.a)(e,A),e.prototype.render=function(){var A=this.props,e=A.title,t=A.tabs,a=A.slug,i=a.split("/").filter(Boolean).slice(-1)[0],s=t.map((function(A){var e,t=r()(A,{lower:!0,strict:!0}),s=t===i,o=new RegExp(i+"/?(#.*)?$"),b=a.replace(o,t);return Object(m.b)("li",{key:A,className:d()((e={},e[x.selectedItem]=s,e),x.listItem)},Object(m.b)(n.Link,{className:x.link,to:""+b},A))}));return Object(m.b)("div",{className:x.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":e},Object(m.b)("ul",{className:x.list},s))))))},e}(i.a.Component),B=t("MjG9"),f=t("CzIb"),N=t("Asxa"),w=t("OIbQ"),O=t.n(w),D=function(A){var e=A.date,t=new Date(e);return e?Object(m.b)(N.c,{className:O.a.row},Object(m.b)(N.a,null,Object(m.b)("div",{className:O.a.text},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};e.a=function(A){var e=A.pageContext,t=A.children,a=A.location,i=A.Title,s=e.frontmatter,l=void 0===s?{}:s,d=e.relativePagePath,c=e.titleType,p=l.tabs,u=l.title,E=l.theme,x=l.description,N=l.keywords,w=l.date,O=Object(f.a)().interiorTheme,Y=Object(n.useStaticQuery)("2456312558").site.pathPrefix,v=Y?a.pathname.replace(Y,""):a.pathname,y=p?v.split("/").filter(Boolean).slice(-1)[0]||r()(p[0],{lower:!0}):"",k=E||O;return Object(m.b)(b.a,{tabs:p,homepage:!1,theme:k,pageTitle:u,pageDescription:x,pageKeywords:N,titleType:c},Object(m.b)(g,{title:i?Object(m.b)(i,null):u,label:"label",tabs:p,theme:k}),p&&Object(m.b)(h,{title:u,slug:v,tabs:p,currentTab:y}),Object(m.b)(B.a,{padded:!0},t,Object(m.b)(j,{relativePagePath:d}),Object(m.b)(D,{date:w})),Object(m.b)(Q.a,{pageContext:e,location:a,slug:v,tabs:p,currentTab:y}),Object(m.b)(o.a,null))}},BAC9:function(A,e,t){A.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(A,e,t){A.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(A,e,t){A.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(A,e,t){A.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},pfKO:function(A,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return o})),t.d(e,"default",(function(){return g}));var a=t("wx14"),i=t("zLVn"),s=(t("q1tI"),t("7ljp")),r=(t("013z"),t("QH4P")),n=(t("qKvR"),["components"]),o={},b=function(A){return function(e){return console.warn("Component "+A+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.b)("div",e)}},l=b("PageDescription"),d=b("FeatureCard"),c=b("ArtDirection"),p={_frontmatter:o},m=r.a;function g(A){var e=A.components,t=Object(i.a)(A,n);return Object(s.b)(m,Object(a.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(s.b)("h2",null,"MDX content starts here"),Object(s.b)(l,{mdxType:"PageDescription"},Object(s.b)("p",null,"The homepage content here lives in the ",Object(s.b)("inlineCode",{parentName:"p"},"src/pages/index.mdx")," directory at the\nroot of your project. Just like the other mdx pages, you can use all of our\ntheme components here without importing them. Review the\n",Object(s.b)("a",{parentName:"p",href:"https://github.com/carbon-design-system/gatsby-theme-carbon/blob/main/packages/example/src/pages/index.mdx"},"MDX example source"),".")),Object(s.b)(d,{color:"dark",href:"/getting-started",title:"Getting started",actionIcon:"arrowRight",className:"homepage-feature",mdxType:"FeatureCard"},Object(s.b)(c,{mdxType:"ArtDirection"},Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQD/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/aAAwDAQACEAMQAAABHeBesBiqN//EABcQAAMBAAAAAAAAAAAAAAAAAAABAzH/2gAIAQEAAQUCmQFkyAs//8QAFhEAAwAAAAAAAAAAAAAAAAAAAhAy/9oACAEDAQE/ASpf/8QAFhEAAwAAAAAAAAAAAAAAAAAAARAz/9oACAECAQE/ARNf/8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAFhABAQEAAAAAAAAAAAAAAAAAQQAQ/9oACAEBAAE/IRDAQw//2gAMAwEAAgADAAAAEAPv/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAEx/9oACAEDAQE/EMUf/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAEx/9oACAECAQE/EFdf/8QAFhABAQEAAAAAAAAAAAAAAAAAMQAQ/9oACAEBAAE/EFiKWIr/2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"blue vertical stripes",title:"blue vertical stripes",src:"/platinum-demos/static/87ecbd854f091db4777edb316c6ad385/2e753/blue-stripes-mobile.jpg",srcSet:["/platinum-demos/static/87ecbd854f091db4777edb316c6ad385/69549/blue-stripes-mobile.jpg 288w","/platinum-demos/static/87ecbd854f091db4777edb316c6ad385/473e3/blue-stripes-mobile.jpg 576w","/platinum-demos/static/87ecbd854f091db4777edb316c6ad385/2e753/blue-stripes-mobile.jpg 1152w","/platinum-demos/static/87ecbd854f091db4777edb316c6ad385/490e5/blue-stripes-mobile.jpg 1600w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQD/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/aAAwDAQACEAMQAAABHeBesBiqN//EABcQAAMBAAAAAAAAAAAAAAAAAAABAzH/2gAIAQEAAQUCmQFkyAs//8QAFhEAAwAAAAAAAAAAAAAAAAAAAhAy/9oACAEDAQE/ASpf/8QAFhEAAwAAAAAAAAAAAAAAAAAAARAz/9oACAECAQE/ARNf/8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAFhABAQEAAAAAAAAAAAAAAAAAQQAQ/9oACAEBAAE/IRDAQw//2gAMAwEAAgADAAAAEAPv/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAEx/9oACAEDAQE/EMUf/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAEx/9oACAECAQE/EFdf/8QAFhABAQEAAAAAAAAAAAAAAAAAMQAQ/9oACAEBAAE/EFiKWIr/2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"blue vertical stripes",title:"blue vertical stripes",src:"/platinum-demos/static/87ecbd854f091db4777edb316c6ad385/2e753/blue-stripes-tablet.jpg",srcSet:["/platinum-demos/static/87ecbd854f091db4777edb316c6ad385/69549/blue-stripes-tablet.jpg 288w","/platinum-demos/static/87ecbd854f091db4777edb316c6ad385/473e3/blue-stripes-tablet.jpg 576w","/platinum-demos/static/87ecbd854f091db4777edb316c6ad385/2e753/blue-stripes-tablet.jpg 1152w","/platinum-demos/static/87ecbd854f091db4777edb316c6ad385/490e5/blue-stripes-tablet.jpg 1600w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"33.33333333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAHABQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/9oADAMBAAIQAxAAAAGRdGnsASP/xAAYEAACAwAAAAAAAAAAAAAAAAAAAQIDMf/aAAgBAQABBQKBQLP/xAAWEQADAAAAAAAAAAAAAAAAAAABEDL/2gAIAQMBAT8BNL//xAAVEQEBAAAAAAAAAAAAAAAAAAAQQ//aAAgBAgEBPwGZ/8QAFBABAAAAAAAAAAAAAAAAAAAAEP/aAAgBAQAGPwJ//8QAGBAAAgMAAAAAAAAAAAAAAAAAAAEQMUH/2gAIAQEAAT8hujEH/9oADAMBAAIAAwAAABB/7//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDAQE/EHH/xAAWEQEBAQAAAAAAAAAAAAAAAAAAATH/2gAIAQIBAT8Qhdf/xAAWEAADAAAAAAAAAAAAAAAAAAAAEDH/2gAIAQEAAT8QU5H/2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"blue vertical stripes",title:"blue vertical stripes",src:"/platinum-demos/static/975d1aa038d98bafcfea654439fbd98d/2e753/blue-stripes.jpg",srcSet:["/platinum-demos/static/975d1aa038d98bafcfea654439fbd98d/69549/blue-stripes.jpg 288w","/platinum-demos/static/975d1aa038d98bafcfea654439fbd98d/473e3/blue-stripes.jpg 576w","/platinum-demos/static/975d1aa038d98bafcfea654439fbd98d/2e753/blue-stripes.jpg 1152w","/platinum-demos/static/975d1aa038d98bafcfea654439fbd98d/74f4b/blue-stripes.jpg 1728w","/platinum-demos/static/975d1aa038d98bafcfea654439fbd98d/1ca3f/blue-stripes.jpg 1920w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-index-mdx-61615f2bb6dc939d482e.js.map