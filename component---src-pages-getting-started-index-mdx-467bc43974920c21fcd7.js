(window.webpackJsonp=window.webpackJsonp||[]).push([[86,38,45,46,82],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("NmYn"),i=a.n(r),b=a("Wbzz"),l=a("Xrax"),s=a("k4MR"),c=a("TSYQ"),p=a.n(c),d=a("QH2O"),m=a.n(d),u=a("qKvR"),j=function(e){var t,a=e.title,n=e.theme,o=e.tabs,r=void 0===o?[]:o;return Object(u.b)("div",{className:p()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},a)))))},h=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,r=o.baseUrl,i=o.subDirectory,l=r+"/edit/"+o.branch+i+"/src/pages"+t;return r?Object(u.b)("div",{className:"bx--row "+h.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:h.link,href:l},"Edit this page on GitHub"))):null},O=a("FCXl"),N=a("dI71"),f=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(N.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),r=a===o,l=new RegExp(o+"/?(#.*)?$"),s=n.replace(l,a);return Object(u.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=r,t),f.listItem)},Object(u.b)(b.Link,{className:f.link,to:""+s},e))}));return Object(u.b)("div",{className:f.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:f.list},r))))))},t}(o.a.Component),x=a("MjG9"),w=a("CzIb"),T=a("Asxa"),v=a("OIbQ"),k=a.n(v),C=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(T.c,{className:k.a.row},Object(u.b)(T.a,null,Object(u.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,r=t.frontmatter,c=void 0===r?{}:r,p=t.relativePagePath,d=t.titleType,m=c.tabs,h=c.title,N=c.theme,f=c.description,T=c.keywords,v=c.date,k=Object(w.a)().interiorTheme,P=Object(b.useStaticQuery)("2456312558").site.pathPrefix,I=P?n.pathname.replace(P,""):n.pathname,E=m?I.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",D=N||k;return Object(u.b)(s.a,{tabs:m,homepage:!1,theme:D,pageTitle:h,pageDescription:f,pageKeywords:T,titleType:d},Object(u.b)(j,{title:o?Object(u.b)(o,null):h,label:"label",tabs:m,theme:D}),m&&Object(u.b)(y,{title:h,slug:I,tabs:m,currentTab:E}),Object(u.b)(x.a,{padded:!0},a,Object(u.b)(g,{relativePagePath:p}),Object(u.b)(C,{date:v})),Object(u.b)(O.a,{pageContext:t,location:n,slug:I,tabs:m,currentTab:E}),Object(u.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},Uxid:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a("wx14"),o=a("zLVn"),r=(a("q1tI"),a("7ljp")),i=a("013z"),b=(a("qKvR"),["components"]),l={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},c=s("PageDescription"),p=s("Video"),d={_frontmatter:l},m=i.a;function u(e){var t=e.components,a=Object(o.a)(e,b);return Object(r.b)(m,Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(c,{mdxType:"PageDescription"},Object(r.b)("p",null,"This project is a\n",Object(r.b)("a",{parentName:"p",href:"https://www.gatsbyjs.org/docs/themes/what-are-gatsby-themes/"},"Gatsby theme"),"\nthat empowers developers, writers, and designers to create fast, accessible\nsites that look and feel like Carbon. Follow along to start creating your own\nsite.")),Object(r.b)("h2",null,"First steps"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Create your site")," – use the gatsby CLI to bootstrap your site with the\nstarter"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-sh"},"npx gatsby new my-carbon-site https://github.com/carbon-design-system/gatsby-starter-carbon-theme\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Start developing")," – navigate into your directory with ",Object(r.b)("inlineCode",{parentName:"p"},"cd my-carbon-site"),"."),Object(r.b)("p",{parentName:"li"},"Start it up using one of the following snippets. You can tell which command\nto use based on the lock file at the root of your project (",Object(r.b)("inlineCode",{parentName:"p"},"yarn.lock")," for\nyarn and ",Object(r.b)("inlineCode",{parentName:"p"},"package-lock.json")," for npm). For yarn, type ",Object(r.b)("inlineCode",{parentName:"p"},"yarn dev")," for npm,\nyou’ll use ",Object(r.b)("inlineCode",{parentName:"p"},"npm run dev"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Make some changes!")," – open ",Object(r.b)("a",{parentName:"p",href:"//localhost:8000"},"localhost:8000")," in your\nbrowser to see your site running."),Object(r.b)("p",{parentName:"li"},"Each of the Items in your side bar correlates to a MDX file in your\n",Object(r.b)("inlineCode",{parentName:"p"},"src/pages/")," directory. Navigate to a site and try editing the corresponding\nmarkdown file. You’ll be able to see it update live!"))),Object(r.b)("h2",null,"👀 Watch a newbie try it out"),Object(r.b)("p",null,"This is a demo of a new Carbon team member spinning up a Gatsby Theme Carbon\nsite while following the steps listed above. To forward through the\nintroduction, play from min ",Object(r.b)("inlineCode",{parentName:"p"},"3:50"),"."),Object(r.b)("div",{style:{border:"1px solid \t#c6c6c6"}},Object(r.b)(p,{title:"Gatsby Theme Carbon Site Demo",vimeoId:"437931932",mdxType:"Video"})),Object(r.b)("h2",null,"🔍 What’s in here?"),Object(r.b)("p",null,"Lets check out the structure of our project"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},".\n├── LICENSE\n├── README.md\n├── gatsby-config.js\n├── node_modules\n├── package.json\n├── public\n├── src\n│   ├── data\n│   ├── gatsby-theme-carbon\n│   ├── images\n│   └── pages\n└── yarn.lock\n")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"/node_modules")),": This directory contains all of the modules of code that\nyour project depends on (npm packages) are automatically installed.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"/src")),": This directory will contain all of the code related to what you\nwill see on the front-end of your site."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"data")," this is where you’ll update your sidebar order and contents"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"images")," you can colocate your images here or store them next to your\npages, whichver you chose"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"gatsby-theme-carbon")," this is where you’ll override (known as shadowing)\nthe default ",Object(r.b)("inlineCode",{parentName:"li"},"gatsby-theme-carbon")," components"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"pages")," This is where most of your content will live. You’ll represent\neach page with an MDX file."))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},".gitignore")),": This file tells git which files it should not track / not\nmaintain a version history for.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"gatsby-config.js")),": This is the main configuration file for a Gatsby\nsite. This is where you can specify information about your site (metadata)\nlike the site title and description. You’ll notice that all of the\nconfiguration for the site is coming from ",Object(r.b)("inlineCode",{parentName:"p"},"gatsby-theme-carbon"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"LICENSE")),": Gatsby is licensed under the Apache 2.0 license.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"yarn.lock"))," (See ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," below, first). This is an automatically\ngenerated file based on the exact versions of your npm dependencies that\nwere installed for your project. ",Object(r.b)("strong",{parentName:"p"},"(You won’t change this file directly)."))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"package.json")),": A manifest file for Node.js projects, which includes\nthings like metadata (the project’s name, author, etc). This manifest is how\nnpm knows which packages to install for your project."))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-index-mdx-467bc43974920c21fcd7.js.map