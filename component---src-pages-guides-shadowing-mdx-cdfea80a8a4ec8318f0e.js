(window.webpackJsonp=window.webpackJsonp||[]).push([[57,18,20],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("NmYn"),b=a.n(r),s=a("Wbzz"),l=a("Xrax"),c=a("k4MR"),i=a("TSYQ"),m=a.n(i),p=a("QH2O"),d=a.n(p),u=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,o=e.tabs,r=void 0===o?[]:o;return Object(u.b)("div",{className:m()(d.a.pageHeader,(t={},t[d.a.withTabs]=r.length,t[d.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:d.a.text},a)))))},g=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,r=o.baseUrl,b=o.subDirectory,l=r+"/edit/"+o.branch+b+"/src/pages"+t;return r?Object(u.b)("div",{className:"bx--row "+g.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:g.link,href:l},"Edit this page on GitHub"))):null},O=a("FCXl"),f=a("dI71"),y=a("I8xM"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=b()(e,{lower:!0,strict:!0}),r=a===o,l=new RegExp(o+"/?(#.*)?$"),c=n.replace(l,a);return Object(u.b)("li",{key:e,className:m()((t={},t[y.selectedItem]=r,t),y.listItem)},Object(u.b)(s.Link,{className:y.link,to:""+c},e))}));return Object(u.b)("div",{className:y.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:y.list},r))))))},t}(o.a.Component),N=a("MjG9"),w=a("CzIb"),v=a("Asxa"),T=a("OIbQ"),k=a.n(T),P=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(v.c,{className:k.a.row},Object(u.b)(v.a,null,Object(u.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,r=t.frontmatter,i=void 0===r?{}:r,m=t.relativePagePath,p=t.titleType,d=i.tabs,g=i.title,f=i.theme,y=i.description,v=i.keywords,T=i.date,k=Object(w.a)().interiorTheme,C=Object(s.useStaticQuery)("2456312558").site.pathPrefix,I=C?n.pathname.replace(C,""):n.pathname,H=d?I.split("/").filter(Boolean).slice(-1)[0]||b()(d[0],{lower:!0}):"",L=f||k;return Object(u.b)(c.a,{tabs:d,homepage:!1,theme:L,pageTitle:g,pageDescription:y,pageKeywords:v,titleType:p},Object(u.b)(h,{title:o?Object(u.b)(o,null):g,label:"label",tabs:d,theme:L}),d&&Object(u.b)(x,{title:g,slug:I,tabs:d,currentTab:H}),Object(u.b)(N.a,{padded:!0},a,Object(u.b)(j,{relativePagePath:m}),Object(u.b)(P,{date:T})),Object(u.b)(O.a,{pageContext:t,location:n,slug:I,tabs:d,currentTab:H}),Object(u.b)(l.a,null))}},"72HU":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return d}));var n,o=a("wx14"),r=a("zLVn"),b=(a("q1tI"),a("7ljp")),s=a("013z"),l=(a("qKvR"),["components"]),c={},i=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(b.b)("div",e)}),m={_frontmatter:c},p=s.a;function d(e){var t=e.components,a=Object(r.a)(e,l);return Object(b.b)(p,Object(o.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)(i,{mdxType:"PageDescription"},Object(b.b)("p",null,"In the world of Gatsby themes,\n",Object(b.b)("a",{parentName:"p",href:"https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/"},"component shadowing"),"\nis an extremely powerful way for developers to provide their ",Object(b.b)("em",{parentName:"p"},"own")," components\nfor the theme to use over the defaults. You can shadow any file that is\nprocessed by webpack. This includes sass files, mdx files, and the react\ncomponents themselves.")),Object(b.b)("h2",null,"Caveats"),Object(b.b)("p",null,"If you completely shadow a file you won’t get future updates to that individual\nfile. These are some golden rules to make sure you stay as close to the theme as\npossible and not forgo future updates."),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"Open a\n",Object(b.b)("a",{parentName:"p",href:"https://github.com/carbon-design-system/gatsby-theme-carbon/issues/new"},"quick issue"),"\nin the gatsby-theme-carbon repo to make sure we’re not working on your\nchange.")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"Shadow as few files as you can to achieve your goal. If you can shadow just a\nsingle file, that’s ideal.")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"If you do end up shadowing a component, please tell us! We might use it to\ninform future development."))),Object(b.b)("h2",null,"Shadowing basics"),Object(b.b)("p",null,"In order to shadow a component in the theme, all you need to do is place a file\nin the ",Object(b.b)("inlineCode",{parentName:"p"},"src/gatsby-theme-carbon")," in your project. The file should have the same\nname as the file you’re shadowing."),Object(b.b)("p",null,"In order to place your own title in the Header component:"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"Create a file at the same directory as the component you wish to shadow.\nEverything after ",Object(b.b)("inlineCode",{parentName:"p"},"src/gatsby-theme-carbon/")," refers to the\n",Object(b.b)("a",{parentName:"p",href:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src"},"src directory of gatsby-theme-carbon"),".")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"Import the component you wish to shadow by providing the full url pointing at\nthe component within the theme")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"Your component will ",Object(b.b)("strong",{parentName:"p"},"receive the same props")," as the one you’re shadowing.\nYou’ll can log those props to see if you’ll need any of them")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"Regardless, you should ",Object(b.b)("em",{parentName:"p"},"ALWAYS")," spread the extra props into the original\ncomponent, this allows the core component to function as needed. Even if it\ndoesn’t receive any props now, it might in the future.")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"Provide your new, custom component as the default export"))),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Header from 'gatsby-theme-carbon/src/components/Header';\n\nconst CustomHeader = (props) => (\n  <Header {...props}>\n    <span>Gatsby theme</span>&nbsp;Carbon\n  </Header>\n);\n\nexport default CustomHeader;\n")),Object(b.b)("h2",null,"Components you’ll need to shadow"),Object(b.b)("p",null,"We’ve already provided pre-shadowed, dummy components however these are the ones\nyou’ll definitely need to shadow."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Component"),Object(b.b)("th",{parentName:"tr",align:null},"Path"),Object(b.b)("th",{parentName:"tr",align:null},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"ResourceLinks"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"https://github.com/carbon-design-system/gatsby-theme-carbon/blob/main/packages/example/src/gatsby-theme-carbon/components/LeftNav/ResourceLinks.js"},Object(b.b)("inlineCode",{parentName:"a"},"src/gatsby-theme-carbon/components/LeftNav/ResourceLinks.js"))),Object(b.b)("td",{parentName:"tr",align:null},"The bottom links on the SideNav, pass ",Object(b.b)("inlineCode",{parentName:"td"},"shouldOpenNewTabs")," to open links externally")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Footer"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"https://github.com/carbon-design-system/gatsby-theme-carbon/blob/main/packages/example/src/gatsby-theme-carbon/components/Footer.js"},Object(b.b)("inlineCode",{parentName:"a"},"src/gatsby-theme-carbon/components/Footer.js"))),Object(b.b)("td",{parentName:"tr",align:null},"The links and content at the bottom of each page")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Header"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"https://github.com/carbon-design-system/gatsby-theme-carbon/blob/main/packages/example/src/gatsby-theme-carbon/components/Header.js"},Object(b.b)("inlineCode",{parentName:"a"},"src/gatsby-theme-carbon/components/Header.js"))),Object(b.b)("td",{parentName:"tr",align:null},"The text in the top left corner of the UI Shell")))))}d.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-guides-shadowing-mdx-cdfea80a8a4ec8318f0e.js.map