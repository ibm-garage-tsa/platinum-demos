(window.webpackJsonp=window.webpackJsonp||[]).push([[24,18,20],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),b=n("NmYn"),c=n.n(b),i=n("Wbzz"),l=n("Xrax"),o=n("k4MR"),s=n("TSYQ"),d=n.n(s),m=n("QH2O"),p=n.n(m),u=n("qKvR"),h=function(e){var t,n=e.title,a=e.theme,r=e.tabs,b=void 0===r?[]:r;return Object(u.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=b.length,t[p.a.darkMode]="dark"===a,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:p.a.text},n)))))},j=n("BAC9"),O=function(e){var t=e.relativePagePath,n=e.repository,a=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=n||a,b=r.baseUrl,c=r.subDirectory,l=b+"/edit/"+r.branch+c+"/src/pages"+t;return b?Object(u.b)("div",{className:"bx--row "+j.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:j.link,href:l},"Edit this page on GitHub"))):null},g=n("FCXl"),k=n("dI71"),x=n("I8xM"),L=function(e){function t(){return e.apply(this,arguments)||this}return Object(k.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],b=n.map((function(e){var t,n=c()(e,{lower:!0,strict:!0}),b=n===r,l=new RegExp(r+"/?(#.*)?$"),o=a.replace(l,n);return Object(u.b)("li",{key:e,className:d()((t={},t[x.selectedItem]=b,t),x.listItem)},Object(u.b)(i.Link,{className:x.link,to:""+o},e))}));return Object(u.b)("div",{className:x.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:x.list},b))))))},t}(r.a.Component),N=n("MjG9"),y=n("CzIb"),T=n("Asxa"),A=n("OIbQ"),f=n.n(A),w=function(e){var t=e.date,n=new Date(t);return t?Object(u.b)(T.c,{className:f.a.row},Object(u.b)(T.a,null,Object(u.b)("div",{className:f.a.text},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,r=e.Title,b=t.frontmatter,s=void 0===b?{}:b,d=t.relativePagePath,m=t.titleType,p=s.tabs,j=s.title,k=s.theme,x=s.description,T=s.keywords,A=s.date,f=Object(y.a)().interiorTheme,v=Object(i.useStaticQuery)("2456312558").site.pathPrefix,P=v?a.pathname.replace(v,""):a.pathname,C=p?P.split("/").filter(Boolean).slice(-1)[0]||c()(p[0],{lower:!0}):"",I=k||f;return Object(u.b)(o.a,{tabs:p,homepage:!1,theme:I,pageTitle:j,pageDescription:x,pageKeywords:T,titleType:m},Object(u.b)(h,{title:r?Object(u.b)(r,null):j,label:"label",tabs:p,theme:I}),p&&Object(u.b)(L,{title:j,slug:P,tabs:p,currentTab:C}),Object(u.b)(N.a,{padded:!0},n,Object(u.b)(O,{relativePagePath:d}),Object(u.b)(w,{date:A})),Object(u.b)(g.a,{pageContext:t,location:a,slug:P,tabs:p,currentTab:C}),Object(u.b)(l.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,n){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},e0YI:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return j}));var a=n("wx14"),r=n("zLVn"),b=(n("q1tI"),n("7ljp")),c=n("013z"),i=(n("qKvR"),["components"]),l={},o=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(b.b)("div",t)}},s=o("PageDescription"),d=o("Title"),m=o("AnchorLinks"),p=o("AnchorLink"),u={_frontmatter:l},h=c.a;function j(e){var t=e.components,n=Object(r.a)(e,i);return Object(b.b)(h,Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)(s,{mdxType:"PageDescription"},Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"<AnchorLinks>")," and ",Object(b.b)("inlineCode",{parentName:"p"},"<AnchorLink>")," components are used together to display a\nlist of anchor links for navigation within the page. Use these to link to ",Object(b.b)("inlineCode",{parentName:"p"},"<h2>"),"\nor ",Object(b.b)("inlineCode",{parentName:"p"},"<h3>")," anywhere within your page. As long as the anchor link text and header\ntext matches the link will work."),Object(b.b)("p",null,"For most pages, we recommend starting with a ",Object(b.b)("inlineCode",{parentName:"p"},"PageDescription")," followed by\n",Object(b.b)("inlineCode",{parentName:"p"},"AnchorLinks")," if the content is long enough.")),Object(b.b)("h2",null,"Example"),Object(b.b)(d,{mdxType:"Title"},"Normal"),Object(b.b)(m,{mdxType:"AnchorLinks"},Object(b.b)(p,{mdxType:"AnchorLink"},"Link 1"),Object(b.b)(p,{mdxType:"AnchorLink"},"Link 2"),Object(b.b)(p,{mdxType:"AnchorLink"},"Link 3"),Object(b.b)(p,{mdxType:"AnchorLink"},"Link 4"),Object(b.b)(p,{mdxType:"AnchorLink"},"Link 5"),Object(b.b)(p,{mdxType:"AnchorLink"},"Link 6"),Object(b.b)(p,{mdxType:"AnchorLink"},"Link 7")),Object(b.b)(d,{mdxType:"Title"},"Small"),Object(b.b)(m,{small:!0,mdxType:"AnchorLinks"},Object(b.b)(p,{mdxType:"AnchorLink"},"Small link 1"),Object(b.b)(p,{mdxType:"AnchorLink"},"Small link 2"),Object(b.b)(p,{mdxType:"AnchorLink"},"Small link 3")),Object(b.b)("h2",null,"Code"),Object(b.b)(d,{mdxType:"Title"},"Normal"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-mdx",metastring:"path=components/AnchorLinks/AnchorLinks.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/AnchorLinks",path:"components/AnchorLinks/AnchorLinks.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/AnchorLinks"},"<AnchorLinks>\n  <AnchorLink>Link 1</AnchorLink>\n  <AnchorLink>Link 2</AnchorLink>\n  <AnchorLink>Link 3</AnchorLink>\n  <AnchorLink>Link 4</AnchorLink>\n  <AnchorLink>Link 5</AnchorLink>\n  <AnchorLink>Link 6</AnchorLink>\n  <AnchorLink>Link 7</AnchorLink>\n</AnchorLinks>\n")),Object(b.b)(d,{mdxType:"Title"},"Small"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-mdx",metastring:"path=components/AnchorLinks/AnchorLinks.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/AnchorLinks",path:"components/AnchorLinks/AnchorLinks.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/AnchorLinks"},"<AnchorLinks small>\n  <AnchorLink>Small link 1</AnchorLink>\n  <AnchorLink>Small link 2</AnchorLink>\n  <AnchorLink>Small link 3</AnchorLink>\n</AnchorLinks>\n")),Object(b.b)("h3",null,"Props"),Object(b.b)(d,{mdxType:"Title"},"AnchorLinks"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"property"),Object(b.b)("th",{parentName:"tr",align:null},"propType"),Object(b.b)("th",{parentName:"tr",align:null},"required"),Object(b.b)("th",{parentName:"tr",align:null},"default"),Object(b.b)("th",{parentName:"tr",align:null},"description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"children"),Object(b.b)("td",{parentName:"tr",align:null},"node"),Object(b.b)("td",{parentName:"tr",align:null}),Object(b.b)("td",{parentName:"tr",align:null}),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"small"),Object(b.b)("td",{parentName:"tr",align:null},"bool"),Object(b.b)("td",{parentName:"tr",align:null}),Object(b.b)("td",{parentName:"tr",align:null}),Object(b.b)("td",{parentName:"tr",align:null},"Display small font size")))),Object(b.b)(d,{mdxType:"Title"},"AnchorLink"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"property"),Object(b.b)("th",{parentName:"tr",align:null},"propType"),Object(b.b)("th",{parentName:"tr",align:null},"required"),Object(b.b)("th",{parentName:"tr",align:null},"default"),Object(b.b)("th",{parentName:"tr",align:null},"description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"children"),Object(b.b)("td",{parentName:"tr",align:null},"node"),Object(b.b)("td",{parentName:"tr",align:null}),Object(b.b)("td",{parentName:"tr",align:null}),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"to"),Object(b.b)("td",{parentName:"tr",align:null},"string"),Object(b.b)("td",{parentName:"tr",align:null}),Object(b.b)("td",{parentName:"tr",align:null},"props.children"),Object(b.b)("td",{parentName:"tr",align:null},"By default, the ",Object(b.b)("inlineCode",{parentName:"td"},"AnchorLink")," slugifys the children you pass in. Use the to prop to override this target.")))))}j.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-components-anchor-links-mdx-afc94fd8086e73c5aacc.js.map