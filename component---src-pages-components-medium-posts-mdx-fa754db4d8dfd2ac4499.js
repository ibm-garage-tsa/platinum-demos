(window.webpackJsonp=window.webpackJsonp||[]).push([[40,18,20],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),b=a("NmYn"),o=a.n(b),i=a("Wbzz"),l=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),d=a.n(s),m=a("QH2O"),u=a.n(m),p=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,r=e.tabs,b=void 0===r?[]:r;return Object(p.b)("div",{className:d()(u.a.pageHeader,(t={},t[u.a.withTabs]=b.length,t[u.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:u.a.text},a)))))},j=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,b=r.baseUrl,o=r.subDirectory,l=b+"/edit/"+r.branch+o+"/src/pages"+t;return b?Object(p.b)("div",{className:"bx--row "+j.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:j.link,href:l},"Edit this page on GitHub"))):null},x=a("FCXl"),h=a("dI71"),N=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],b=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),b=a===r,l=new RegExp(r+"/?(#.*)?$"),c=n.replace(l,a);return Object(p.b)("li",{key:e,className:d()((t={},t[N.selectedItem]=b,t),N.listItem)},Object(p.b)(i.Link,{className:N.link,to:""+c},e))}));return Object(p.b)("div",{className:N.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:N.list},b))))))},t}(r.a.Component),T=a("MjG9"),y=a("CzIb"),P=a("Asxa"),v=a("OIbQ"),w=a.n(v),k=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(P.c,{className:w.a.row},Object(p.b)(P.a,null,Object(p.b)("div",{className:w.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,b=t.frontmatter,s=void 0===b?{}:b,d=t.relativePagePath,m=t.titleType,u=s.tabs,j=s.title,h=s.theme,N=s.description,P=s.keywords,v=s.date,w=Object(y.a)().interiorTheme,C=Object(i.useStaticQuery)("2456312558").site.pathPrefix,M=C?n.pathname.replace(C,""):n.pathname,I=u?M.split("/").filter(Boolean).slice(-1)[0]||o()(u[0],{lower:!0}):"",E=h||w;return Object(p.b)(c.a,{tabs:u,homepage:!1,theme:E,pageTitle:j,pageDescription:N,pageKeywords:P,titleType:m},Object(p.b)(g,{title:r?Object(p.b)(r,null):j,label:"label",tabs:u,theme:E}),u&&Object(p.b)(f,{title:j,slug:M,tabs:u,currentTab:I}),Object(p.b)(T.a,{padded:!0},a,Object(p.b)(O,{relativePagePath:d}),Object(p.b)(k,{date:v})),Object(p.b)(x.a,{pageContext:t,location:n,slug:M,tabs:u,currentTab:I}),Object(p.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},ncO7:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a("wx14"),r=a("zLVn"),b=(a("q1tI"),a("7ljp")),o=a("013z"),i=(a("qKvR"),["components"]),l={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(b.b)("div",t)}},s=c("PageDescription"),d=c("MediumPosts"),m={_frontmatter:l},u=o.a;function p(e){var t=e.components,a=Object(r.a)(e,i);return Object(b.b)(u,Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)(s,{mdxType:"PageDescription"},Object(b.b)("p",null,"Using a Gatsby plugin, this component automatically builds three ",Object(b.b)("inlineCode",{parentName:"p"},"ArticleCards"),"\npopulated with the most recent Medium posts at build time.")),Object(b.b)("h2",null,"Setup"),Object(b.b)("p",null,"To update the source account for this component, pass in a ",Object(b.b)("inlineCode",{parentName:"p"},"mediumAccount")," to\nyour theme options in ",Object(b.b)("inlineCode",{parentName:"p"},"gatsby-config.js"),"."),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-js"},"plugins: [\n  {\n    resolve: 'gatsby-theme-carbon',\n    options: {\n      mediumAccount: 'carbondesign',\n    },\n  },\n];\n")),Object(b.b)("h2",null,"Example"),Object(b.b)(d,{color:"dark",postLimit:3,mdxType:"MediumPosts"}),Object(b.b)("h2",null,"Code"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-mdx",metastring:"path=components/MediumPosts/MediumPosts.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/MediumPosts",path:"components/MediumPosts/MediumPosts.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/MediumPosts"},'<MediumPosts color="dark" postLimit={3} />\n')),Object(b.b)("h3",null,"Props"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"property"),Object(b.b)("th",{parentName:"tr",align:null},"propType"),Object(b.b)("th",{parentName:"tr",align:null},"required"),Object(b.b)("th",{parentName:"tr",align:null},"default"),Object(b.b)("th",{parentName:"tr",align:null},"description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"color"),Object(b.b)("td",{parentName:"tr",align:null},"string"),Object(b.b)("td",{parentName:"tr",align:null}),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"light")),Object(b.b)("td",{parentName:"tr",align:null},"Sets the card for the correct color theme, default is ",Object(b.b)("inlineCode",{parentName:"td"},"light"),", options are ",Object(b.b)("inlineCode",{parentName:"td"},"light")," and ",Object(b.b)("inlineCode",{parentName:"td"},"dark"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"postLimit"),Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null}),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"3")),Object(b.b)("td",{parentName:"tr",align:null},"Sets the number of posts pulled from Medium, default is ",Object(b.b)("inlineCode",{parentName:"td"},"3"),", maximum is ",Object(b.b)("inlineCode",{parentName:"td"},"10"),".")))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-components-medium-posts-mdx-fa754db4d8dfd2ac4499.js.map