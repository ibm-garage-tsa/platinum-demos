(window.webpackJsonp=window.webpackJsonp||[]).push([[31,18,20],{"013z":function(t,e,a){"use strict";var n=a("q1tI"),A=a.n(n),o=a("NmYn"),l=a.n(o),b=a("Wbzz"),c=a("Xrax"),r=a("k4MR"),i=a("TSYQ"),s=a.n(i),m=a("QH2O"),p=a.n(m),d=a("qKvR"),g=function(t){var e,a=t.title,n=t.theme,A=t.tabs,o=void 0===A?[]:A;return Object(d.b)("div",{className:s()(p.a.pageHeader,(e={},e[p.a.withTabs]=o.length,e[p.a.darkMode]="dark"===n,e))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:p.a.text},a)))))},j=a("BAC9"),u=function(t){var e=t.relativePagePath,a=t.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,A=a||n,o=A.baseUrl,l=A.subDirectory,c=o+"/edit/"+A.branch+l+"/src/pages"+e;return o?Object(d.b)("div",{className:"bx--row "+j.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:j.link,href:c},"Edit this page on GitHub"))):null},O=a("FCXl"),D=a("dI71"),N=a("I8xM"),h=function(t){function e(){return t.apply(this,arguments)||this}return Object(D.a)(e,t),e.prototype.render=function(){var t=this.props,e=t.title,a=t.tabs,n=t.slug,A=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(t){var e,a=l()(t,{lower:!0,strict:!0}),o=a===A,c=new RegExp(A+"/?(#.*)?$"),r=n.replace(c,a);return Object(d.b)("li",{key:t,className:s()((e={},e[N.selectedItem]=o,e),N.listItem)},Object(d.b)(b.Link,{className:N.link,to:""+r},t))}));return Object(d.b)("div",{className:N.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",{"aria-label":e},Object(d.b)("ul",{className:N.list},o))))))},e}(A.a.Component),x=a("MjG9"),y=a("CzIb"),w=a("Asxa"),B=a("OIbQ"),E=a.n(B),Q=function(t){var e=t.date,a=new Date(e);return e?Object(d.b)(w.c,{className:E.a.row},Object(d.b)(w.a,null,Object(d.b)("div",{className:E.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};e.a=function(t){var e=t.pageContext,a=t.children,n=t.location,A=t.Title,o=e.frontmatter,i=void 0===o?{}:o,s=e.relativePagePath,m=e.titleType,p=i.tabs,j=i.title,D=i.theme,N=i.description,w=i.keywords,B=i.date,E=Object(y.a)().interiorTheme,R=Object(b.useStaticQuery)("2456312558").site.pathPrefix,T=R?n.pathname.replace(R,""):n.pathname,f=p?T.split("/").filter(Boolean).slice(-1)[0]||l()(p[0],{lower:!0}):"",C=D||E;return Object(d.b)(r.a,{tabs:p,homepage:!1,theme:C,pageTitle:j,pageDescription:N,pageKeywords:w,titleType:m},Object(d.b)(g,{title:A?Object(d.b)(A,null):j,label:"label",tabs:p,theme:C}),p&&Object(d.b)(h,{title:j,slug:T,tabs:p,currentTab:f}),Object(d.b)(x.a,{padded:!0},a,Object(d.b)(u,{relativePagePath:s}),Object(d.b)(Q,{date:B})),Object(d.b)(O.a,{pageContext:e,location:n,slug:T,tabs:p,currentTab:f}),Object(d.b)(c.a,null))}},"1mzG":function(t,e,a){"use strict";a.r(e),a.d(e,"_frontmatter",(function(){return c})),a.d(e,"default",(function(){return j}));var n=a("wx14"),A=a("zLVn"),o=(a("q1tI"),a("7ljp")),l=a("013z"),b=(a("qKvR"),["components"]),c={},r=function(t){return function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}},i=r("PageDescription"),s=r("DoDontRow"),m=r("DoDont"),p=r("Video"),d={_frontmatter:c},g=l.a;function j(t){var e=t.components,a=Object(A.a)(t,b);return Object(o.b)(g,Object(n.a)({},d,a,{components:e,mdxType:"MDXLayout"}),Object(o.b)(i,{mdxType:"PageDescription"},Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"<DoDontRow>")," component is a custom row used alongside the ",Object(o.b)("inlineCode",{parentName:"p"},"<DoDont>"),"\ncomponent, which now includes built in columns.")),Object(o.b)("h2",null,"Example"),Object(o.b)(s,{mdxType:"DoDontRow"},Object(o.b)(m,{aspectRatio:"1:1",mdxType:"DoDont"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1088px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIBBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAe7s0SAAD//EABYQAQEBAAAAAAAAAAAAAAAAACABEf/aAAgBAQABBQIZD//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABQQAQAAAAAAAAAAAAAAAAAAADD/2gAIAQEABj8CH//EABkQAAIDAQAAAAAAAAAAAAAAAAERABAgMf/aAAgBAQABPyGKkD3R/9oADAMBAAIAAwAAABAjzzz/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/EB//xAAbEAACAQUAAAAAAAAAAAAAAAABEQAQIEFh8P/aAAgBAQABPxABx6MA4bnDt//Z')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Alt text",title:"Alt text",src:"/platinum-demos/static/151c08285741565650307880afc0c3cc/c3319/light-theme.jpg",srcSet:["/platinum-demos/static/151c08285741565650307880afc0c3cc/69549/light-theme.jpg 288w","/platinum-demos/static/151c08285741565650307880afc0c3cc/473e3/light-theme.jpg 576w","/platinum-demos/static/151c08285741565650307880afc0c3cc/c3319/light-theme.jpg 1088w"],sizes:"(max-width: 1088px) 100vw, 1088px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(o.b)(m,{aspectRatio:"1:1",type:"dont",mdxType:"DoDont"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1088px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIBBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAe7s0SAAD//EABYQAQEBAAAAAAAAAAAAAAAAACABEf/aAAgBAQABBQIZD//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABQQAQAAAAAAAAAAAAAAAAAAADD/2gAIAQEABj8CH//EABkQAAIDAQAAAAAAAAAAAAAAAAERABAgMf/aAAgBAQABPyGKkD3R/9oADAMBAAIAAwAAABAjzzz/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/EB//xAAbEAACAQUAAAAAAAAAAAAAAAABEQAQIEFh8P/aAAgBAQABPxABx6MA4bnDt//Z')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Alt text",title:"Alt text",src:"/platinum-demos/static/151c08285741565650307880afc0c3cc/c3319/light-theme.jpg",srcSet:["/platinum-demos/static/151c08285741565650307880afc0c3cc/69549/light-theme.jpg 288w","/platinum-demos/static/151c08285741565650307880afc0c3cc/473e3/light-theme.jpg 576w","/platinum-demos/static/151c08285741565650307880afc0c3cc/c3319/light-theme.jpg 1088w"],sizes:"(max-width: 1088px) 100vw, 1088px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(o.b)(s,{mdxType:"DoDontRow"},Object(o.b)(m,{aspectRatio:"1:1",text:"This is some text",mdxType:"DoDont"}),Object(o.b)(m,{type:"dont",aspectRatio:"1:1",text:"This is some text",color:"dark",mdxType:"DoDont"})),Object(o.b)(s,{mdxType:"DoDontRow"},Object(o.b)(m,{text:"This is some text",color:"dark",captionTitle:"Caption title",caption:"Caption",colLg:"8",mdxType:"DoDont"})),Object(o.b)(s,{mdxType:"DoDontRow"},Object(o.b)(m,{colLg:"8",captionTitle:"Caption title",caption:"Caption",mdxType:"DoDont"},Object(o.b)(p,{title:"Video example",vimeoId:"310583077",mdxType:"Video"}))),Object(o.b)("h2",null,"Code"),Object(o.b)("h3",null,"Image"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-mdx",metastring:"path=components/DoDontRow/DoDontRow.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/DoDontRow",path:"components/DoDontRow/DoDontRow.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/DoDontRow"},'<DoDontRow>\n  <DoDont aspectRatio="1:1">![Alt text](./images/light-theme.jpg)</DoDont>\n  <DoDont type="dont" aspectRatio="1:1">\n    ![Alt text](./images/light-theme.jpg)\n  </DoDont>\n</DoDontRow>\n')),Object(o.b)("h3",null,"Text"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-mdx",metastring:"path=components/DoDontRow/DoDontRow.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/DoDontRow",path:"components/DoDontRow/DoDontRow.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/DoDontRow"},'<DoDontRow>\n  <DoDont text="This is some text" aspectRatio="1:1" />\n  <DoDont type="dont" text="This is some text" color="dark" aspectRatio="1:1" />\n</DoDontRow>\n<DoDontRow>\n  <DoDont\n    text="This is some text"\n    captionTitle="Caption title"\n    caption="Caption"\n    aspectRatio="1:1"\n    colLg="8"\n  />\n</DoDontRow>\n')),Object(o.b)("h3",null,"Video"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-mdx",metastring:"path=components/DoDontRow/DoDontRow.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/DoDontRow",path:"components/DoDontRow/DoDontRow.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/DoDontRow"},'<DoDontRow>\n  <DoDont captionTitle="Caption title" caption="Caption" colLg="8">\n    <Video title="Video example" vimeoId="310583077" />\n  </DoDont>\n</DoDontRow>\n')),Object(o.b)("h2",null,"Props"),Object(o.b)("h3",null,"DoDontRow"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"property"),Object(o.b)("th",{parentName:"tr",align:null},"propType"),Object(o.b)("th",{parentName:"tr",align:null},"required"),Object(o.b)("th",{parentName:"tr",align:null},"default"),Object(o.b)("th",{parentName:"tr",align:null},"description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"children"),Object(o.b)("td",{parentName:"tr",align:null},"node"),Object(o.b)("td",{parentName:"tr",align:null},"yes"),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"child node, expects a ",Object(o.b)("inlineCode",{parentName:"td"},"DoDont")," component")))),Object(o.b)("h3",null,"Do & Dont"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"property"),Object(o.b)("th",{parentName:"tr",align:null},"propType"),Object(o.b)("th",{parentName:"tr",align:null},"required"),Object(o.b)("th",{parentName:"tr",align:null},"default"),Object(o.b)("th",{parentName:"tr",align:null},"description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"children"),Object(o.b)("td",{parentName:"tr",align:null},"node"),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"child node, expects a markdown image or ",Object(o.b)("inlineCode",{parentName:"td"},"<Video>")," component")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"text"),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"text to display inside the component instead of an image or video")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"caption"),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"caption")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"captionTitle"),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"caption title")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"color"),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"light"),Object(o.b)("td",{parentName:"tr",align:null},"set to ",Object(o.b)("inlineCode",{parentName:"td"},"dark")," for dark background card")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"aspectRatio"),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"set to ",Object(o.b)("inlineCode",{parentName:"td"},"1:1")," to force square example ",Object(o.b)("br",null),Object(o.b)("em",{parentName:"td"},"(We welcome ",Object(o.b)("a",{parentName:"em",href:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/DoDontExample"},"contributions")," to add additional aspect ratio options)"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"type"),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"do")),Object(o.b)("td",{parentName:"tr",align:null},"specify the type of example with ",Object(o.b)("inlineCode",{parentName:"td"},"do")," or ",Object(o.b)("inlineCode",{parentName:"td"},"dont"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"…columnProps"),Object(o.b)("td",{parentName:"tr",align:null},"number"),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"colMd=4, colLg=4")),Object(o.b)("td",{parentName:"tr",align:null},"specify any ",Object(o.b)("inlineCode",{parentName:"td"},"<Column>")," props to pass down")))))}j.isMDXComponent=!0},BAC9:function(t,e,a){t.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(t,e,a){t.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(t,e,a){t.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(t,e,a){t.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-components-do-dont-row-mdx-c8370660f9576c71181e.js.map