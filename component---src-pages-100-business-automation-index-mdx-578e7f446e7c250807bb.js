(window.webpackJsonp=window.webpackJsonp||[]).push([[19,23,35,41],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),i=a.n(o),b=a("Wbzz"),l=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),d=a.n(s),u=a("QH2O"),m=a.n(u),x=a("qKvR"),p=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(x.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===n,t))},Object(x.b)("div",{className:"bx--grid"},Object(x.b)("div",{className:"bx--row"},Object(x.b)("div",{className:"bx--col-lg-12"},Object(x.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,i=r.subDirectory,l=o+"/edit/"+r.branch+i+"/src/pages"+t;return o?Object(x.b)("div",{className:"bx--row "+g.row},Object(x.b)("div",{className:"bx--col"},Object(x.b)("a",{className:g.link,href:l},"Edit this page on GitHub"))):null},j=a("FCXl"),T=a("dI71"),f=a("I8xM"),h=function(e){function t(){return e.apply(this,arguments)||this}return Object(T.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),o=a===r,l=new RegExp(r+"/?(#.*)?$"),c=n.replace(l,a);return Object(x.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=o,t),f.listItem)},Object(x.b)(b.Link,{className:f.link,to:""+c},e))}));return Object(x.b)("div",{className:f.tabsContainer},Object(x.b)("div",{className:"bx--grid"},Object(x.b)("div",{className:"bx--row"},Object(x.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(x.b)("nav",{"aria-label":t},Object(x.b)("ul",{className:f.list},o))))))},t}(r.a.Component),v=a("MjG9"),w=a("CzIb"),k=a("Asxa"),P=a("OIbQ"),N=a.n(P),y=function(e){var t=e.date,a=new Date(t);return t?Object(x.b)(k.c,{className:N.a.row},Object(x.b)(k.a,null,Object(x.b)("div",{className:N.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,s=void 0===o?{}:o,d=t.relativePagePath,u=t.titleType,m=s.tabs,g=s.title,T=s.theme,f=s.description,k=s.keywords,P=s.date,N=Object(w.a)().interiorTheme,I=Object(b.useStaticQuery)("2456312558").site.pathPrefix,E=I?n.pathname.replace(I,""):n.pathname,C=m?E.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",H=T||N;return Object(x.b)(c.a,{tabs:m,homepage:!1,theme:H,pageTitle:g,pageDescription:f,pageKeywords:k,titleType:u},Object(x.b)(p,{title:r?Object(x.b)(r,null):g,label:"label",tabs:m,theme:H}),m&&Object(x.b)(h,{title:g,slug:E,tabs:m,currentTab:C}),Object(x.b)(v.a,{padded:!0},a,Object(x.b)(O,{relativePagePath:d}),Object(x.b)(y,{date:P})),Object(x.b)(j.a,{pageContext:t,location:n,slug:E,tabs:m,currentTab:C}),Object(x.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},RfW3:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),i=a("013z"),b=(a("qKvR"),["components"]),l={},c={_frontmatter:l},s=i.a;function d(e){var t=e.components,a=Object(r.a)(e,b);return Object(o.b)(s,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",null,"Business Automation"),Object(o.b)("p",null,"Content TBD"))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-100-business-automation-index-mdx-578e7f446e7c250807bb.js.map