(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"013z":function(e,t,a){"use strict";var i=a("q1tI"),n=a.n(i),r=a("NmYn"),o=a.n(r),s=a("Wbzz"),l=a("Xrax"),c=a("k4MR"),b=a("TSYQ"),A=a.n(b),d=a("QH2O"),m=a.n(d),p=a("qKvR"),u=function(e){var t,a=e.title,i=e.theme,n=e.tabs,r=void 0===n?[]:n;return Object(p.b)("div",{className:A()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===i,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,i=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||i,r=n.baseUrl,o=n.subDirectory,l=r+"/edit/"+n.branch+o+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:l},"Edit this page on GitHub"))):null},j=a("FCXl"),x=a("dI71"),w=a("I8xM"),O=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,n=i.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),r=a===n,l=new RegExp(n+"/?(#.*)?$"),c=i.replace(l,a);return Object(p.b)("li",{key:e,className:A()((t={},t[w.selectedItem]=r,t),w.listItem)},Object(p.b)(s.Link,{className:w.link,to:""+c},e))}));return Object(p.b)("div",{className:w.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:w.list},r))))))},t}(n.a.Component),y=a("MjG9"),f=a("CzIb"),k=a("Asxa"),N=a("OIbQ"),B=a.n(N),v=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(k.c,{className:B.a.row},Object(p.b)(k.a,null,Object(p.b)("div",{className:B.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,n=e.Title,r=t.frontmatter,b=void 0===r?{}:r,A=t.relativePagePath,d=t.titleType,m=b.tabs,g=b.title,x=b.theme,w=b.description,k=b.keywords,N=b.date,B=Object(f.a)().interiorTheme,T=Object(s.useStaticQuery)("2456312558").site.pathPrefix,E=T?i.pathname.replace(T,""):i.pathname,z=m?E.split("/").filter(Boolean).slice(-1)[0]||o()(m[0],{lower:!0}):"",C=x||B;return Object(p.b)(c.a,{tabs:m,homepage:!1,theme:C,pageTitle:g,pageDescription:w,pageKeywords:k,titleType:d},Object(p.b)(u,{title:n?Object(p.b)(n,null):g,label:"label",tabs:m,theme:C}),m&&Object(p.b)(O,{title:g,slug:E,tabs:m,currentTab:z}),Object(p.b)(y.a,{padded:!0},a,Object(p.b)(h,{relativePagePath:A}),Object(p.b)(v,{date:N})),Object(p.b)(j.a,{pageContext:t,location:i,slug:E,tabs:m,currentTab:z}),Object(p.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},lmlK:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return w}));var i=a("wx14"),n=a("zLVn"),r=(a("q1tI"),a("7ljp")),o=a("013z"),s=(a("qKvR"),["components"]),l={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},b=c("PageDescription"),A=c("AnchorLinks"),d=c("AnchorLink"),m=c("Row"),p=c("Column"),u=c("ArticleCard"),g=c("Aside"),h=c("Video"),j={_frontmatter:l},x=o.a;function w(e){var t=e.components,a=Object(n.a)(e,s);return Object(r.b)(x,Object(i.a)({},j,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(b,{mdxType:"PageDescription"},Object(r.b)("p",null,"This page is meant to demonstrate some of the components in action. You can\ncheck out the markdown used for this page\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/carbon-design-system/gatsby-theme-carbon/blob/main/packages/example/src/pages/demo/index.mdx"},"on github"),".")),Object(r.b)(A,{mdxType:"AnchorLinks"},Object(r.b)(d,{mdxType:"AnchorLink"},"Building bonds"),Object(r.b)(d,{mdxType:"AnchorLink"},"Global accessibility standards"),Object(r.b)(d,{mdxType:"AnchorLink"},"Small anchor links"),Object(r.b)(d,{mdxType:"AnchorLink"},"Videos")),Object(r.b)(m,{mdxType:"Row"},Object(r.b)(p,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(r.b)(u,{title:"Getting started",href:"/getting-started",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC5klEQVQoz3WTd0gUYBjGv2tvGhREVFbQNu8a2HVXZ56WUdiStAFpBJkN2hZoQ7PUw2xDtAuvrIzKwoYNysCZaUNNva5sWVnZ1jvv13sF0T/98Xx8fOPhed/v96mNBS4SSiDk6EeUqRCNXwHKJ4t5hhdYRv8g3sfFNpOLGFMdHuYKlG8OjUx30Iga++ej9AX4b3uDpQw25LtQfw2PfUJ5Z6K0p1BD0pilLSJ6UCnROhubTN/pbi6Ry+koz1TRWZSXSCdnvS79x/BIjWxepPXsBwxM/sSUOCfhS11E6O108c5DGbJQIzLotMyO7ug3PHfV0mFBOWrAefwTq/4xlCGhFIJTPtN6vp2gmxBfCUkLYWk46HZ8ocXcctqFVtIjrobQMz+IjqxmewWE5UG7xVX47XqP5YnbsAEVe989ceK1sxpDWj0HnkL6tZeEDz+FNeUrC4rBY7ONbuseE5wN1hs/WeudxaH9xZy0w4SMBvolV7Pmbh1xRaDipVzfqFyJbmX8uTpsDlg9bzNdmxiwl0taG7QNuorGmEpEDtTWg1E7jRlDl/P+O8y6JSaj0vEMvcKWRzKPewB9Z19C9T+B9tBXkiTF3pAalvfLZs/uN8zNheYBGdK/VAKvw77MOqL0uaRnfuDAMwmTJmWOuEBHnxQ2FYqh27X/HLnQ6widwmwEW1xEBsESYxnT5z/BI1YeS3cGNfg4nVe+IORiPWsOfiFKgky/4aJ9RJVUd5qOvlZipH1qq2zMPGyjs/8VFulrWT+1gbBVTrSRb2mzsFK4u48anoYaahVOC2gVWk4fyzs8NrymeXDJb3abmS4zMaGILQ/FMFaGmBwH66Y9J8nQQJLRQbLeSc8xctiYjcYshsNOC5/HUeZ7qNGC0CjpuSEPzVj5BFK+2fKKZCHDjaDaeNvBooB8VvQtJnGsIGRykOjjpLdvGcovn6aTKmg5WRRYRtPAp7Lm/k33fqvRuELUyFzGCdiJpX84/AVbiUBWgaDp0wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Dark article layout mockup",title:"Dark article layout mockup",src:"/platinum-demos/static/ebd956040be4c438af81a5204152b45c/3cbba/Article_06.png",srcSet:["/platinum-demos/static/ebd956040be4c438af81a5204152b45c/7fc1e/Article_06.png 288w","/platinum-demos/static/ebd956040be4c438af81a5204152b45c/a5df1/Article_06.png 576w","/platinum-demos/static/ebd956040be4c438af81a5204152b45c/3cbba/Article_06.png 1152w","/platinum-demos/static/ebd956040be4c438af81a5204152b45c/0b124/Article_06.png 1728w","/platinum-demos/static/ebd956040be4c438af81a5204152b45c/0c3f5/Article_06.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(r.b)(p,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(r.b)(u,{title:"Theme configuration",href:"/guides/configuration",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC5klEQVQoz3WTd0gUYBjGv2tvGhREVFbQNu8a2HVXZ56WUdiStAFpBJkN2hZoQ7PUw2xDtAuvrIzKwoYNysCZaUNNva5sWVnZ1jvv13sF0T/98Xx8fOPhed/v96mNBS4SSiDk6EeUqRCNXwHKJ4t5hhdYRv8g3sfFNpOLGFMdHuYKlG8OjUx30Iga++ej9AX4b3uDpQw25LtQfw2PfUJ5Z6K0p1BD0pilLSJ6UCnROhubTN/pbi6Ry+koz1TRWZSXSCdnvS79x/BIjWxepPXsBwxM/sSUOCfhS11E6O108c5DGbJQIzLotMyO7ug3PHfV0mFBOWrAefwTq/4xlCGhFIJTPtN6vp2gmxBfCUkLYWk46HZ8ocXcctqFVtIjrobQMz+IjqxmewWE5UG7xVX47XqP5YnbsAEVe989ceK1sxpDWj0HnkL6tZeEDz+FNeUrC4rBY7ONbuseE5wN1hs/WeudxaH9xZy0w4SMBvolV7Pmbh1xRaDipVzfqFyJbmX8uTpsDlg9bzNdmxiwl0taG7QNuorGmEpEDtTWg1E7jRlDl/P+O8y6JSaj0vEMvcKWRzKPewB9Z19C9T+B9tBXkiTF3pAalvfLZs/uN8zNheYBGdK/VAKvw77MOqL0uaRnfuDAMwmTJmWOuEBHnxQ2FYqh27X/HLnQ6widwmwEW1xEBsESYxnT5z/BI1YeS3cGNfg4nVe+IORiPWsOfiFKgky/4aJ9RJVUd5qOvlZipH1qq2zMPGyjs/8VFulrWT+1gbBVTrSRb2mzsFK4u48anoYaahVOC2gVWk4fyzs8NrymeXDJb3abmS4zMaGILQ/FMFaGmBwH66Y9J8nQQJLRQbLeSc8xctiYjcYshsNOC5/HUeZ7qNGC0CjpuSEPzVj5BFK+2fKKZCHDjaDaeNvBooB8VvQtJnGsIGRykOjjpLdvGcovn6aTKmg5WRRYRtPAp7Lm/k33fqvRuELUyFzGCdiJpX84/AVbiUBWgaDp0wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Dark article layout mockup",title:"Dark article layout mockup",src:"/platinum-demos/static/ebd956040be4c438af81a5204152b45c/3cbba/Article_06.png",srcSet:["/platinum-demos/static/ebd956040be4c438af81a5204152b45c/7fc1e/Article_06.png 288w","/platinum-demos/static/ebd956040be4c438af81a5204152b45c/a5df1/Article_06.png 576w","/platinum-demos/static/ebd956040be4c438af81a5204152b45c/3cbba/Article_06.png 1152w","/platinum-demos/static/ebd956040be4c438af81a5204152b45c/0b124/Article_06.png 1728w","/platinum-demos/static/ebd956040be4c438af81a5204152b45c/0c3f5/Article_06.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(r.b)(p,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(r.b)(u,{title:"Contributions",href:"/contributions",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC5klEQVQoz3WTd0gUYBjGv2tvGhREVFbQNu8a2HVXZ56WUdiStAFpBJkN2hZoQ7PUw2xDtAuvrIzKwoYNysCZaUNNva5sWVnZ1jvv13sF0T/98Xx8fOPhed/v96mNBS4SSiDk6EeUqRCNXwHKJ4t5hhdYRv8g3sfFNpOLGFMdHuYKlG8OjUx30Iga++ej9AX4b3uDpQw25LtQfw2PfUJ5Z6K0p1BD0pilLSJ6UCnROhubTN/pbi6Ry+koz1TRWZSXSCdnvS79x/BIjWxepPXsBwxM/sSUOCfhS11E6O108c5DGbJQIzLotMyO7ug3PHfV0mFBOWrAefwTq/4xlCGhFIJTPtN6vp2gmxBfCUkLYWk46HZ8ocXcctqFVtIjrobQMz+IjqxmewWE5UG7xVX47XqP5YnbsAEVe989ceK1sxpDWj0HnkL6tZeEDz+FNeUrC4rBY7ONbuseE5wN1hs/WeudxaH9xZy0w4SMBvolV7Pmbh1xRaDipVzfqFyJbmX8uTpsDlg9bzNdmxiwl0taG7QNuorGmEpEDtTWg1E7jRlDl/P+O8y6JSaj0vEMvcKWRzKPewB9Z19C9T+B9tBXkiTF3pAalvfLZs/uN8zNheYBGdK/VAKvw77MOqL0uaRnfuDAMwmTJmWOuEBHnxQ2FYqh27X/HLnQ6widwmwEW1xEBsESYxnT5z/BI1YeS3cGNfg4nVe+IORiPWsOfiFKgky/4aJ9RJVUd5qOvlZipH1qq2zMPGyjs/8VFulrWT+1gbBVTrSRb2mzsFK4u48anoYaahVOC2gVWk4fyzs8NrymeXDJb3abmS4zMaGILQ/FMFaGmBwH66Y9J8nQQJLRQbLeSc8xctiYjcYshsNOC5/HUeZ7qNGC0CjpuSEPzVj5BFK+2fKKZCHDjaDaeNvBooB8VvQtJnGsIGRykOjjpLdvGcovn6aTKmg5WRRYRtPAp7Lm/k33fqvRuELUyFzGCdiJpX84/AVbiUBWgaDp0wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Dark article layout mockup",title:"Dark article layout mockup",src:"/platinum-demos/static/ebd956040be4c438af81a5204152b45c/3cbba/Article_06.png",srcSet:["/platinum-demos/static/ebd956040be4c438af81a5204152b45c/7fc1e/Article_06.png 288w","/platinum-demos/static/ebd956040be4c438af81a5204152b45c/a5df1/Article_06.png 576w","/platinum-demos/static/ebd956040be4c438af81a5204152b45c/3cbba/Article_06.png 1152w","/platinum-demos/static/ebd956040be4c438af81a5204152b45c/0b124/Article_06.png 1728w","/platinum-demos/static/ebd956040be4c438af81a5204152b45c/0c3f5/Article_06.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")))),Object(r.b)(b,{mdxType:"PageDescription"},Object(r.b)("p",null,"Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm.\nPinnace holystone mizzenmast quarter crow’s nest nipperkin grog yardarm hempen\nhalter furl. Swab barque interloper chantey doubloon starboard grog black jack\ngangway rutters.")),Object(r.b)("p",null,"Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm.\nPinnace holystone mizzenmast quarter crow’s nest nipperkin grog yardarm hempen\nhalter furl. Swab barque interloper chantey doubloon starboard grog black jack\ngangway rutters."),Object(r.b)(m,{mdxType:"Row"},Object(r.b)(p,{colMd:5,colLg:8,mdxType:"Column"},Object(r.b)("h2",null,"Section heading"),Object(r.b)("p",null,"Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm.\nPinnace holystone mizzenmast quarter crow’s nest nipperkin grog yardarm hempen\nhalter furl. Swab barque interloper chantey doubloon starboard grog black jack\ngangway rutters."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Add-on repositories, or repos, are components built for a specific product or\nexperience. The repos are built on top of the core Carbon repo, and enable")),Object(r.b)("p",null,"IBMers believe in progress—that application of intelligence, reason and science\ncan improve business, society and the human condition.")),Object(r.b)(p,{colMd:2,colLg:3,offsetMd:1,offsetLg:1,mdxType:"Column"},Object(r.b)(g,{mdxType:"Aside"},Object(r.b)("p",null,Object(r.b)("strong",null,"Good design is always",Object(r.b)("br",null),"good design.")),Object(r.b)("p",null,"What we borrow from our own design history is not a mid-century aesthetic in\nstylistic terms, but the modernist attitudes and approach used at the time.")))),Object(r.b)("h2",null,"Small anchor links"),Object(r.b)("p",null,"Swab barque interloper™ chantey doubloon starboard grog black jack gangway\nrutters π."),Object(r.b)(A,{small:!0,mdxType:"AnchorLinks"},Object(r.b)(d,{mdxType:"AnchorLink"},"Header"),Object(r.b)(d,{mdxType:"AnchorLink"},"Header again")),Object(r.b)("h3",null,"Header"),Object(r.b)("p",null,"Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm.\nPinnace holystone mizzenmast quarter crow’s nest nipperkin grog yardarm hempen\nhalter furl. Swab barque interloper chantey doubloon starboard grog black jack\ngangway rutters."),Object(r.b)("h3",null,"Header again"),Object(r.b)("p",null,"Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm.\nPinnace holystone mizzenmast quarter crow’s nest nipperkin grog yardarm hempen\nhalter furl. Swab barque interloper chantey doubloon starboard grog black jack\ngangway rutters."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"This is a demonstration of an ordered list item. This list item is\nparticularly long to demonstrate how the text wraps and aligns with the first\nline.",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"This is a nested list item, it should wrap in the same way. Typically,\nnested list items should be of the same type (ordered, unordered) as their\nparent."))),Object(r.b)("li",{parentName:"ol"},"Ordered list item"),Object(r.b)("li",{parentName:"ol"},"Ordered list item")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"This is a demonstration of an unordered list item. This list item is\nparticularly long to demonstrate how the text wraps and aligns with the first\nline.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"This is a nested list item, it should wrap in the same way. Typically,\nnested list items should be of the same type (ordered, unordered) as their\nparent."))),Object(r.b)("li",{parentName:"ul"},"Unordered list item"),Object(r.b)("li",{parentName:"ul"},"Unordered list item")),Object(r.b)("h2",null,"Images"),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMFAf/EABUBAQEAAAAAAAAAAAAAAAAAAAQD/9oADAMBAAIQAxAAAAHXzbizxBgqP//EABsQAAEEAwAAAAAAAAAAAAAAAAABAgMREhQz/9oACAEBAAEFAth5Pggt2Ixty9P/xAAXEQADAQAAAAAAAAAAAAAAAAAAAQIR/9oACAEDAQE/AY2kM//EABkRAQACAwAAAAAAAAAAAAAAAAEAAgMSMf/aAAgBAgEBPwHLrREhyf/EAB4QAAIBAwUAAAAAAAAAAAAAAAARIQECEBIxQVFx/9oACAEBAAY/AuCjersnfDUl3p//xAAcEAACAgIDAAAAAAAAAAAAAAAAAREhMVGBkaH/2gAIAQEAAT8hbFFJ0iQmBSZ5JmvtIsinaOz1j//aAAwDAQACAAMAAAAQHw//xAAXEQEBAQEAAAAAAAAAAAAAAAABABFx/9oACAEDAQE/EEoXewxS/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQARMYH/2gAIAQIBAT8QAxW5yOwz/8QAHRABAQABBAMAAAAAAAAAAAAAAREAIVFhcTFB8P/aAAgBAQABPxBdMkqCcmuBpJtY0SHbfEnqHkvOeDvI4UWIoqvvPlb5/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Large blocky illustration",title:"Large blocky illustration",src:"/platinum-demos/static/8006174cef307d9cf1a013bc15b3dd6c/2e753/large-image.jpg",srcSet:["/platinum-demos/static/8006174cef307d9cf1a013bc15b3dd6c/69549/large-image.jpg 288w","/platinum-demos/static/8006174cef307d9cf1a013bc15b3dd6c/473e3/large-image.jpg 576w","/platinum-demos/static/8006174cef307d9cf1a013bc15b3dd6c/2e753/large-image.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(r.b)("h2",null,"Videos"),Object(r.b)(h,{title:"Eyes",vimeoId:"310583077",mdxType:"Video"}))}w.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-demo-index-mdx-234c974776bdce1641ca.js.map