(window.webpackJsonp=window.webpackJsonp||[]).push([[26,18,20],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),i=a("NmYn"),r=a.n(i),b=a("Wbzz"),c=a("Xrax"),o=a("k4MR"),m=a("TSYQ"),s=a.n(m),d=a("QH2O"),p=a.n(d),u=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,l=e.tabs,i=void 0===l?[]:l;return Object(u.b)("div",{className:s()(p.a.pageHeader,(t={},t[p.a.withTabs]=i.length,t[p.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:p.a.text},a)))))},A=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||n,i=l.baseUrl,r=l.subDirectory,c=i+"/edit/"+l.branch+r+"/src/pages"+t;return i?Object(u.b)("div",{className:"bx--row "+A.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:A.link,href:c},"Edit this page on GitHub"))):null},N=a("FCXl"),j=a("dI71"),w=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,l=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),i=a===l,c=new RegExp(l+"/?(#.*)?$"),o=n.replace(c,a);return Object(u.b)("li",{key:e,className:s()((t={},t[w.selectedItem]=i,t),w.listItem)},Object(u.b)(b.Link,{className:w.link,to:""+o},e))}));return Object(u.b)("div",{className:w.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:w.list},i))))))},t}(l.a.Component),x=a("MjG9"),h=a("CzIb"),C=a("Asxa"),y=a("OIbQ"),B=a.n(y),v=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(C.c,{className:B.a.row},Object(u.b)(C.a,null,Object(u.b)("div",{className:B.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,l=e.Title,i=t.frontmatter,m=void 0===i?{}:i,s=t.relativePagePath,d=t.titleType,p=m.tabs,A=m.title,j=m.theme,w=m.description,C=m.keywords,y=m.date,B=Object(h.a)().interiorTheme,k=Object(b.useStaticQuery)("2456312558").site.pathPrefix,T=k?n.pathname.replace(k,""):n.pathname,E=p?T.split("/").filter(Boolean).slice(-1)[0]||r()(p[0],{lower:!0}):"",R=j||B;return Object(u.b)(o.a,{tabs:p,homepage:!1,theme:R,pageTitle:A,pageDescription:w,pageKeywords:C,titleType:d},Object(u.b)(g,{title:l?Object(u.b)(l,null):A,label:"label",tabs:p,theme:R}),p&&Object(u.b)(f,{title:A,slug:T,tabs:p,currentTab:E}),Object(u.b)(x.a,{padded:!0},a,Object(u.b)(O,{relativePagePath:s}),Object(u.b)(v,{date:y})),Object(u.b)(N.a,{pageContext:t,location:n,slug:T,tabs:p,currentTab:E}),Object(u.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},IeCj:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return A}));var n=a("wx14"),l=a("zLVn"),i=(a("q1tI"),a("7ljp")),r=a("013z"),b=(a("qKvR"),["components"]),c={},o=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},m=o("PageDescription"),s=o("Row"),d=o("Column"),p=o("ArticleCard"),u={_frontmatter:c},g=r.a;function A(e){var t=e.components,a=Object(l.a)(e,b);return Object(i.b)(g,Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(m,{mdxType:"PageDescription"},Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"<ArticleCard>")," component should generally be used inside of a ",Object(i.b)("inlineCode",{parentName:"p"},"<Row>")," and\n",Object(i.b)("inlineCode",{parentName:"p"},"<Column>")," with a ",Object(i.b)("inlineCode",{parentName:"p"},"noGutterMdLeft")," prop on the ",Object(i.b)("inlineCode",{parentName:"p"},"<Column>")," to allow it to “hang”\nto the left.")),Object(i.b)("h2",null,"Example"),Object(i.b)(s,{mdxType:"Row"},Object(i.b)(d,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(p,{subTitle:"subTitle",title:"Title",author:"Josh Black",date:"April 29, 2019",readTime:"Read time: 5 min",href:"/",mdxType:"ArticleCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC5klEQVQoz3WTd0gUYBjGv2tvGhREVFbQNu8a2HVXZ56WUdiStAFpBJkN2hZoQ7PUw2xDtAuvrIzKwoYNysCZaUNNva5sWVnZ1jvv13sF0T/98Xx8fOPhed/v96mNBS4SSiDk6EeUqRCNXwHKJ4t5hhdYRv8g3sfFNpOLGFMdHuYKlG8OjUx30Iga++ej9AX4b3uDpQw25LtQfw2PfUJ5Z6K0p1BD0pilLSJ6UCnROhubTN/pbi6Ry+koz1TRWZSXSCdnvS79x/BIjWxepPXsBwxM/sSUOCfhS11E6O108c5DGbJQIzLotMyO7ug3PHfV0mFBOWrAefwTq/4xlCGhFIJTPtN6vp2gmxBfCUkLYWk46HZ8ocXcctqFVtIjrobQMz+IjqxmewWE5UG7xVX47XqP5YnbsAEVe989ceK1sxpDWj0HnkL6tZeEDz+FNeUrC4rBY7ONbuseE5wN1hs/WeudxaH9xZy0w4SMBvolV7Pmbh1xRaDipVzfqFyJbmX8uTpsDlg9bzNdmxiwl0taG7QNuorGmEpEDtTWg1E7jRlDl/P+O8y6JSaj0vEMvcKWRzKPewB9Z19C9T+B9tBXkiTF3pAalvfLZs/uN8zNheYBGdK/VAKvw77MOqL0uaRnfuDAMwmTJmWOuEBHnxQ2FYqh27X/HLnQ6widwmwEW1xEBsESYxnT5z/BI1YeS3cGNfg4nVe+IORiPWsOfiFKgky/4aJ9RJVUd5qOvlZipH1qq2zMPGyjs/8VFulrWT+1gbBVTrSRb2mzsFK4u48anoYaahVOC2gVWk4fyzs8NrymeXDJb3abmS4zMaGILQ/FMFaGmBwH66Y9J8nQQJLRQbLeSc8xctiYjcYshsNOC5/HUeZ7qNGC0CjpuSEPzVj5BFK+2fKKZCHDjaDaeNvBooB8VvQtJnGsIGRykOjjpLdvGcovn6aTKmg5WRRYRtPAp7Lm/k33fqvRuELUyFzGCdiJpX84/AVbiUBWgaDp0wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Dark article layout mockup",title:"Dark article layout mockup",src:"/platinum-demos/static/ebd956040be4c438af81a5204152b45c/3cbba/Article_06.png",srcSet:["/platinum-demos/static/ebd956040be4c438af81a5204152b45c/7fc1e/Article_06.png 288w","/platinum-demos/static/ebd956040be4c438af81a5204152b45c/a5df1/Article_06.png 576w","/platinum-demos/static/ebd956040be4c438af81a5204152b45c/3cbba/Article_06.png 1152w","/platinum-demos/static/ebd956040be4c438af81a5204152b45c/0b124/Article_06.png 1728w","/platinum-demos/static/ebd956040be4c438af81a5204152b45c/0c3f5/Article_06.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(i.b)(d,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(p,{title:"Explore & Create",author:"Josh Black",href:"https://www.ibm.com",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC5klEQVQoz3WTd0gUYBjGv2tvGhREVFbQNu8a2HVXZ56WUdiStAFpBJkN2hZoQ7PUw2xDtAuvrIzKwoYNysCZaUNNva5sWVnZ1jvv13sF0T/98Xx8fOPhed/v96mNBS4SSiDk6EeUqRCNXwHKJ4t5hhdYRv8g3sfFNpOLGFMdHuYKlG8OjUx30Iga++ej9AX4b3uDpQw25LtQfw2PfUJ5Z6K0p1BD0pilLSJ6UCnROhubTN/pbi6Ry+koz1TRWZSXSCdnvS79x/BIjWxepPXsBwxM/sSUOCfhS11E6O108c5DGbJQIzLotMyO7ug3PHfV0mFBOWrAefwTq/4xlCGhFIJTPtN6vp2gmxBfCUkLYWk46HZ8ocXcctqFVtIjrobQMz+IjqxmewWE5UG7xVX47XqP5YnbsAEVe989ceK1sxpDWj0HnkL6tZeEDz+FNeUrC4rBY7ONbuseE5wN1hs/WeudxaH9xZy0w4SMBvolV7Pmbh1xRaDipVzfqFyJbmX8uTpsDlg9bzNdmxiwl0taG7QNuorGmEpEDtTWg1E7jRlDl/P+O8y6JSaj0vEMvcKWRzKPewB9Z19C9T+B9tBXkiTF3pAalvfLZs/uN8zNheYBGdK/VAKvw77MOqL0uaRnfuDAMwmTJmWOuEBHnxQ2FYqh27X/HLnQ6widwmwEW1xEBsESYxnT5z/BI1YeS3cGNfg4nVe+IORiPWsOfiFKgky/4aJ9RJVUd5qOvlZipH1qq2zMPGyjs/8VFulrWT+1gbBVTrSRb2mzsFK4u48anoYaahVOC2gVWk4fyzs8NrymeXDJb3abmS4zMaGILQ/FMFaGmBwH66Y9J8nQQJLRQbLeSc8xctiYjcYshsNOC5/HUeZ7qNGC0CjpuSEPzVj5BFK+2fKKZCHDjaDaeNvBooB8VvQtJnGsIGRykOjjpLdvGcovn6aTKmg5WRRYRtPAp7Lm/k33fqvRuELUyFzGCdiJpX84/AVbiUBWgaDp0wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Dark article layout mockup",title:"Dark article layout mockup",src:"/platinum-demos/static/ebd956040be4c438af81a5204152b45c/3cbba/Article_06.png",srcSet:["/platinum-demos/static/ebd956040be4c438af81a5204152b45c/7fc1e/Article_06.png 288w","/platinum-demos/static/ebd956040be4c438af81a5204152b45c/a5df1/Article_06.png 576w","/platinum-demos/static/ebd956040be4c438af81a5204152b45c/3cbba/Article_06.png 1152w","/platinum-demos/static/ebd956040be4c438af81a5204152b45c/0b124/Article_06.png 1728w","/platinum-demos/static/ebd956040be4c438af81a5204152b45c/0c3f5/Article_06.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(i.b)(d,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(p,{title:"Explore & Create a longer title example in this space",href:"https://www.ibm.com",disabled:!0,mdxType:"ArticleCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC5klEQVQoz3WTd0gUYBjGv2tvGhREVFbQNu8a2HVXZ56WUdiStAFpBJkN2hZoQ7PUw2xDtAuvrIzKwoYNysCZaUNNva5sWVnZ1jvv13sF0T/98Xx8fOPhed/v96mNBS4SSiDk6EeUqRCNXwHKJ4t5hhdYRv8g3sfFNpOLGFMdHuYKlG8OjUx30Iga++ej9AX4b3uDpQw25LtQfw2PfUJ5Z6K0p1BD0pilLSJ6UCnROhubTN/pbi6Ry+koz1TRWZSXSCdnvS79x/BIjWxepPXsBwxM/sSUOCfhS11E6O108c5DGbJQIzLotMyO7ug3PHfV0mFBOWrAefwTq/4xlCGhFIJTPtN6vp2gmxBfCUkLYWk46HZ8ocXcctqFVtIjrobQMz+IjqxmewWE5UG7xVX47XqP5YnbsAEVe989ceK1sxpDWj0HnkL6tZeEDz+FNeUrC4rBY7ONbuseE5wN1hs/WeudxaH9xZy0w4SMBvolV7Pmbh1xRaDipVzfqFyJbmX8uTpsDlg9bzNdmxiwl0taG7QNuorGmEpEDtTWg1E7jRlDl/P+O8y6JSaj0vEMvcKWRzKPewB9Z19C9T+B9tBXkiTF3pAalvfLZs/uN8zNheYBGdK/VAKvw77MOqL0uaRnfuDAMwmTJmWOuEBHnxQ2FYqh27X/HLnQ6widwmwEW1xEBsESYxnT5z/BI1YeS3cGNfg4nVe+IORiPWsOfiFKgky/4aJ9RJVUd5qOvlZipH1qq2zMPGyjs/8VFulrWT+1gbBVTrSRb2mzsFK4u48anoYaahVOC2gVWk4fyzs8NrymeXDJb3abmS4zMaGILQ/FMFaGmBwH66Y9J8nQQJLRQbLeSc8xctiYjcYshsNOC5/HUeZ7qNGC0CjpuSEPzVj5BFK+2fKKZCHDjaDaeNvBooB8VvQtJnGsIGRykOjjpLdvGcovn6aTKmg5WRRYRtPAp7Lm/k33fqvRuELUyFzGCdiJpX84/AVbiUBWgaDp0wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Dark article layout mockup",title:"Dark article layout mockup",src:"/platinum-demos/static/ebd956040be4c438af81a5204152b45c/3cbba/Article_06.png",srcSet:["/platinum-demos/static/ebd956040be4c438af81a5204152b45c/7fc1e/Article_06.png 288w","/platinum-demos/static/ebd956040be4c438af81a5204152b45c/a5df1/Article_06.png 576w","/platinum-demos/static/ebd956040be4c438af81a5204152b45c/3cbba/Article_06.png 1152w","/platinum-demos/static/ebd956040be4c438af81a5204152b45c/0b124/Article_06.png 1728w","/platinum-demos/static/ebd956040be4c438af81a5204152b45c/0c3f5/Article_06.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(i.b)(d,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(p,{title:"Explore & Create",color:"dark",href:"https://www.ibm.com",actionIcon:"download",mdxType:"ArticleCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC5klEQVQoz3WTd0gUYBjGv2tvGhREVFbQNu8a2HVXZ56WUdiStAFpBJkN2hZoQ7PUw2xDtAuvrIzKwoYNysCZaUNNva5sWVnZ1jvv13sF0T/98Xx8fOPhed/v96mNBS4SSiDk6EeUqRCNXwHKJ4t5hhdYRv8g3sfFNpOLGFMdHuYKlG8OjUx30Iga++ej9AX4b3uDpQw25LtQfw2PfUJ5Z6K0p1BD0pilLSJ6UCnROhubTN/pbi6Ry+koz1TRWZSXSCdnvS79x/BIjWxepPXsBwxM/sSUOCfhS11E6O108c5DGbJQIzLotMyO7ug3PHfV0mFBOWrAefwTq/4xlCGhFIJTPtN6vp2gmxBfCUkLYWk46HZ8ocXcctqFVtIjrobQMz+IjqxmewWE5UG7xVX47XqP5YnbsAEVe989ceK1sxpDWj0HnkL6tZeEDz+FNeUrC4rBY7ONbuseE5wN1hs/WeudxaH9xZy0w4SMBvolV7Pmbh1xRaDipVzfqFyJbmX8uTpsDlg9bzNdmxiwl0taG7QNuorGmEpEDtTWg1E7jRlDl/P+O8y6JSaj0vEMvcKWRzKPewB9Z19C9T+B9tBXkiTF3pAalvfLZs/uN8zNheYBGdK/VAKvw77MOqL0uaRnfuDAMwmTJmWOuEBHnxQ2FYqh27X/HLnQ6widwmwEW1xEBsESYxnT5z/BI1YeS3cGNfg4nVe+IORiPWsOfiFKgky/4aJ9RJVUd5qOvlZipH1qq2zMPGyjs/8VFulrWT+1gbBVTrSRb2mzsFK4u48anoYaahVOC2gVWk4fyzs8NrymeXDJb3abmS4zMaGILQ/FMFaGmBwH66Y9J8nQQJLRQbLeSc8xctiYjcYshsNOC5/HUeZ7qNGC0CjpuSEPzVj5BFK+2fKKZCHDjaDaeNvBooB8VvQtJnGsIGRykOjjpLdvGcovn6aTKmg5WRRYRtPAp7Lm/k33fqvRuELUyFzGCdiJpX84/AVbiUBWgaDp0wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Dark article layout mockup",title:"Dark article layout mockup",src:"/platinum-demos/static/ebd956040be4c438af81a5204152b45c/3cbba/Article_06.png",srcSet:["/platinum-demos/static/ebd956040be4c438af81a5204152b45c/7fc1e/Article_06.png 288w","/platinum-demos/static/ebd956040be4c438af81a5204152b45c/a5df1/Article_06.png 576w","/platinum-demos/static/ebd956040be4c438af81a5204152b45c/3cbba/Article_06.png 1152w","/platinum-demos/static/ebd956040be4c438af81a5204152b45c/0b124/Article_06.png 1728w","/platinum-demos/static/ebd956040be4c438af81a5204152b45c/0c3f5/Article_06.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(i.b)(d,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(p,{subTitle:"subTitle",title:"Explore & Create",author:"Josh Black",readTime:"Read time: 5 min",color:"dark",href:"https://www.ibm.com",actionIcon:"email",mdxType:"ArticleCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC5klEQVQoz3WTd0gUYBjGv2tvGhREVFbQNu8a2HVXZ56WUdiStAFpBJkN2hZoQ7PUw2xDtAuvrIzKwoYNysCZaUNNva5sWVnZ1jvv13sF0T/98Xx8fOPhed/v96mNBS4SSiDk6EeUqRCNXwHKJ4t5hhdYRv8g3sfFNpOLGFMdHuYKlG8OjUx30Iga++ej9AX4b3uDpQw25LtQfw2PfUJ5Z6K0p1BD0pilLSJ6UCnROhubTN/pbi6Ry+koz1TRWZSXSCdnvS79x/BIjWxepPXsBwxM/sSUOCfhS11E6O108c5DGbJQIzLotMyO7ug3PHfV0mFBOWrAefwTq/4xlCGhFIJTPtN6vp2gmxBfCUkLYWk46HZ8ocXcctqFVtIjrobQMz+IjqxmewWE5UG7xVX47XqP5YnbsAEVe989ceK1sxpDWj0HnkL6tZeEDz+FNeUrC4rBY7ONbuseE5wN1hs/WeudxaH9xZy0w4SMBvolV7Pmbh1xRaDipVzfqFyJbmX8uTpsDlg9bzNdmxiwl0taG7QNuorGmEpEDtTWg1E7jRlDl/P+O8y6JSaj0vEMvcKWRzKPewB9Z19C9T+B9tBXkiTF3pAalvfLZs/uN8zNheYBGdK/VAKvw77MOqL0uaRnfuDAMwmTJmWOuEBHnxQ2FYqh27X/HLnQ6widwmwEW1xEBsESYxnT5z/BI1YeS3cGNfg4nVe+IORiPWsOfiFKgky/4aJ9RJVUd5qOvlZipH1qq2zMPGyjs/8VFulrWT+1gbBVTrSRb2mzsFK4u48anoYaahVOC2gVWk4fyzs8NrymeXDJb3abmS4zMaGILQ/FMFaGmBwH66Y9J8nQQJLRQbLeSc8xctiYjcYshsNOC5/HUeZ7qNGC0CjpuSEPzVj5BFK+2fKKZCHDjaDaeNvBooB8VvQtJnGsIGRykOjjpLdvGcovn6aTKmg5WRRYRtPAp7Lm/k33fqvRuELUyFzGCdiJpX84/AVbiUBWgaDp0wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Dark article layout mockup",title:"Dark article layout mockup",src:"/platinum-demos/static/ebd956040be4c438af81a5204152b45c/3cbba/Article_06.png",srcSet:["/platinum-demos/static/ebd956040be4c438af81a5204152b45c/7fc1e/Article_06.png 288w","/platinum-demos/static/ebd956040be4c438af81a5204152b45c/a5df1/Article_06.png 576w","/platinum-demos/static/ebd956040be4c438af81a5204152b45c/3cbba/Article_06.png 1152w","/platinum-demos/static/ebd956040be4c438af81a5204152b45c/0b124/Article_06.png 1728w","/platinum-demos/static/ebd956040be4c438af81a5204152b45c/0c3f5/Article_06.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(i.b)(d,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(p,{subTitle:"subTitle",title:"Explore & Create",author:"Josh Black",date:"April 29, 2019",readTime:"Read time: 5 min",color:"dark",disabled:!0,mdxType:"ArticleCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC5klEQVQoz3WTd0gUYBjGv2tvGhREVFbQNu8a2HVXZ56WUdiStAFpBJkN2hZoQ7PUw2xDtAuvrIzKwoYNysCZaUNNva5sWVnZ1jvv13sF0T/98Xx8fOPhed/v96mNBS4SSiDk6EeUqRCNXwHKJ4t5hhdYRv8g3sfFNpOLGFMdHuYKlG8OjUx30Iga++ej9AX4b3uDpQw25LtQfw2PfUJ5Z6K0p1BD0pilLSJ6UCnROhubTN/pbi6Ry+koz1TRWZSXSCdnvS79x/BIjWxepPXsBwxM/sSUOCfhS11E6O108c5DGbJQIzLotMyO7ug3PHfV0mFBOWrAefwTq/4xlCGhFIJTPtN6vp2gmxBfCUkLYWk46HZ8ocXcctqFVtIjrobQMz+IjqxmewWE5UG7xVX47XqP5YnbsAEVe989ceK1sxpDWj0HnkL6tZeEDz+FNeUrC4rBY7ONbuseE5wN1hs/WeudxaH9xZy0w4SMBvolV7Pmbh1xRaDipVzfqFyJbmX8uTpsDlg9bzNdmxiwl0taG7QNuorGmEpEDtTWg1E7jRlDl/P+O8y6JSaj0vEMvcKWRzKPewB9Z19C9T+B9tBXkiTF3pAalvfLZs/uN8zNheYBGdK/VAKvw77MOqL0uaRnfuDAMwmTJmWOuEBHnxQ2FYqh27X/HLnQ6widwmwEW1xEBsESYxnT5z/BI1YeS3cGNfg4nVe+IORiPWsOfiFKgky/4aJ9RJVUd5qOvlZipH1qq2zMPGyjs/8VFulrWT+1gbBVTrSRb2mzsFK4u48anoYaahVOC2gVWk4fyzs8NrymeXDJb3abmS4zMaGILQ/FMFaGmBwH66Y9J8nQQJLRQbLeSc8xctiYjcYshsNOC5/HUeZ7qNGC0CjpuSEPzVj5BFK+2fKKZCHDjaDaeNvBooB8VvQtJnGsIGRykOjjpLdvGcovn6aTKmg5WRRYRtPAp7Lm/k33fqvRuELUyFzGCdiJpX84/AVbiUBWgaDp0wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Dark article layout mockup",title:"Dark article layout mockup",src:"/platinum-demos/static/ebd956040be4c438af81a5204152b45c/3cbba/Article_06.png",srcSet:["/platinum-demos/static/ebd956040be4c438af81a5204152b45c/7fc1e/Article_06.png 288w","/platinum-demos/static/ebd956040be4c438af81a5204152b45c/a5df1/Article_06.png 576w","/platinum-demos/static/ebd956040be4c438af81a5204152b45c/3cbba/Article_06.png 1152w","/platinum-demos/static/ebd956040be4c438af81a5204152b45c/0b124/Article_06.png 1728w","/platinum-demos/static/ebd956040be4c438af81a5204152b45c/0c3f5/Article_06.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")))),Object(i.b)("h2",null,"Code"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-mdx",metastring:"path=components/ArticleCard/ArticleCard.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/ArticleCard",path:"components/ArticleCard/ArticleCard.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/ArticleCard"},'<Row>\n  <Column colMd={4} colLg={4} noGutterMdLeft>\n    <ArticleCard\n      subTitle="subTitle"\n      title="Title"\n      author="Josh Black"\n      date="April 29, 2019"\n      readTime="Read time: 5 min"\n      href="/">\n      \n![Dark article layout mockup](/images/Article_06.png)\n\n\n    </ArticleCard>\n\n  </Column>\n  <Column colMd={4} colLg={4} noGutterMdLeft>\n    <ArticleCard\n      title="Explore & Create"\n      author="Josh Black"\n      href="https://www.ibm.com"\n      actionIcon="arrowRight">\n      \n![Dark article layout mockup](/images/Article_06.png)\n\n\n    </ArticleCard>\n\n  </Column>\n  <Column colMd={4} colLg={4} noGutterMdLeft>\n    <ArticleCard\n      title="Explore & Create a longer title example in this space"\n      href="https://www.ibm.com"\n      disabled>\n      \n![Dark article layout mockup](/images/Article_06.png)\n\n\n    </ArticleCard>\n\n  </Column>\n  <Column colMd={4} colLg={4} noGutterMdLeft>\n    <ArticleCard\n      title="Explore & Create"\n      color="dark"\n      href="https://www.ibm.com"\n      actionIcon="download">\n      \n![Dark article layout mockup](/images/Article_06.png)\n\n\n    </ArticleCard>\n\n  </Column>\n  <Column colMd={4} colLg={4} noGutterMdLeft>\n    <ArticleCard\n      title="Explore & Create"\n      author="Josh Black"\n      readTime="Read time: 5 min"\n      color="dark"\n      href="https://www.ibm.com"\n      actionIcon="email">\n      \n![Dark article layout mockup](/images/Article_06.png)\n\n\n    </ArticleCard>\n\n  </Column>\n  <Column colMd={4} colLg={4} noGutterMdLeft>\n    <ArticleCard\n      title="Explore & Create"\n      author="Josh Black"\n      date="April 29, 2019"\n      readTime="Read time: 5 min"\n      color="dark"\n      disabled>\n      \n![Dark article layout mockup](/images/Article_06.png)\n\n\n    </ArticleCard>\n\n  </Column>\n</Row>\n\n')),Object(i.b)("h3",null,"Props"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"property"),Object(i.b)("th",{parentName:"tr",align:null},"propType"),Object(i.b)("th",{parentName:"tr",align:null},"required"),Object(i.b)("th",{parentName:"tr",align:null},"default"),Object(i.b)("th",{parentName:"tr",align:null},"description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"children"),Object(i.b)("td",{parentName:"tr",align:null},"node"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"Use 32x32 image as child, will display in bottom left of card")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"href"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"Set url for card")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"title"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"Card title")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"subTitle"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"Card smaller sub title")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"author"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"Author of article")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"date"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"Date article published")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"readTime"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"Read time of article")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"actionIcon"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"launch")),Object(i.b)("td",{parentName:"tr",align:null},"Action icon, default is launch, options are ",Object(i.b)("inlineCode",{parentName:"td"},"Launch"),", ",Object(i.b)("inlineCode",{parentName:"td"},"ArrowRight"),", ",Object(i.b)("inlineCode",{parentName:"td"},"Download"),", ",Object(i.b)("inlineCode",{parentName:"td"},"Disabled"),", ",Object(i.b)("inlineCode",{parentName:"td"},"Email"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"color"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"light"),Object(i.b)("td",{parentName:"tr",align:null},"Set to ",Object(i.b)("inlineCode",{parentName:"td"},"dark")," for dark background")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"disabled"),Object(i.b)("td",{parentName:"tr",align:null},"bool"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"false"),Object(i.b)("td",{parentName:"tr",align:null},"Set for disabled card")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"className"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"Add custom class name")))))}A.isMDXComponent=!0},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-components-article-card-mdx-a82ee45fdd1c0b1d8b3e.js.map