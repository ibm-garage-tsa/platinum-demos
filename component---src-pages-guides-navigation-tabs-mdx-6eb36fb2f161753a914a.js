(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),i=a("NmYn"),r=a.n(i),b=a("Wbzz"),l=a("Xrax"),s=a("k4MR"),c=a("TSYQ"),d=a.n(c),u=a("QH2O"),m=a.n(u),p=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,o=e.tabs,i=void 0===o?[]:o;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=i.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),x=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,i=o.baseUrl,r=o.subDirectory,l=i+"/edit/"+o.branch+r+"/src/pages"+t;return i?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:l},"Edit this page on GitHub"))):null},j=a("FCXl"),O=a("dI71"),f=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),i=a===o,l=new RegExp(o+"/?(#.*)?$"),s=n.replace(l,a);return Object(p.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=i,t),f.listItem)},Object(p.b)(b.Link,{className:f.link,to:""+s},e))}));return Object(p.b)("div",{className:f.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:f.list},i))))))},t}(o.a.Component),v=a("MjG9"),T=a("CzIb"),y=a("Asxa"),N=a("OIbQ"),k=a.n(N),P=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(y.c,{className:k.a.row},Object(p.b)(y.a,null,Object(p.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,i=t.frontmatter,c=void 0===i?{}:i,d=t.relativePagePath,u=t.titleType,m=c.tabs,g=c.title,O=c.theme,f=c.description,y=c.keywords,N=c.date,k=Object(T.a)().interiorTheme,I=Object(b.useStaticQuery)("2456312558").site.pathPrefix,C=I?n.pathname.replace(I,""):n.pathname,L=m?C.split("/").filter(Boolean).slice(-1)[0]||r()(m[0],{lower:!0}):"",M=O||k;return Object(p.b)(s.a,{tabs:m,homepage:!1,theme:M,pageTitle:g,pageDescription:f,pageKeywords:y,titleType:u},Object(p.b)(h,{title:o?Object(p.b)(o,null):g,label:"label",tabs:m,theme:M}),m&&Object(p.b)(w,{title:g,slug:C,tabs:m,currentTab:L}),Object(p.b)(v.a,{padded:!0},a,Object(p.b)(x,{relativePagePath:d}),Object(p.b)(P,{date:N})),Object(p.b)(j.a,{pageContext:t,location:n,slug:C,tabs:m,currentTab:L}),Object(p.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},ndPe:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return m}));var n,o=a("wx14"),i=a("zLVn"),r=(a("q1tI"),a("7ljp")),b=a("013z"),l=(a("qKvR"),["components"]),s={},c=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),d={_frontmatter:s},u=b.a;function m(e){var t=e.components,a=Object(i.a)(e,l);return Object(r.b)(u,Object(o.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(c,{mdxType:"PageDescription"},Object(r.b)("p",null,"You have the option of adding tabs to your pages. This is only recommended if\nyou have several pages that will use the same tabs. If you only have one page\nwith a set of tabs, it might be better for discoverability to change the tabs to\nmenu items.")),Object(r.b)("h2",null,"Tabs in YAML"),Object(r.b)("p",null,"To create a tabbed page, you just need to point the theme to the path of your\nfirst tab. This is the structure of the YAML configuration for this page and\nit’s siblings."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"- title: Guides\n  pages:\n    - title: Configuration\n      path: /guides/configuration\n    - title: Shadowing\n      path: /guides/shadowing\n    - title: Styling\n      path: /guides/styling\n    - title: Navigation\n      path: /guides/navigation/sidebar\n")),Object(r.b)("h2",null,"File structure"),Object(r.b)("p",null,"Let’s check out the directory structure for this page. Notice how you’ll add\nanother directory that corresponds with the one in the YAML file."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},".\n├── pages\n│   └── guides\n│       ├── configuration.mdx\n│       ├── shadowing.mdx\n│       ├── styling.mdx\n│       └── navigation\n│           ├── tabs.mdx\n│           └── sidebar.mdx\n")),Object(r.b)("h2",null,"Markdown updates"),Object(r.b)("p",null,"The last step is to add the name of your tabs to the front matter of each\nmarkdown file that has tabs."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-markdown"},"---\ntitle: Sidebar\ntabs: ['Sidebar', 'Tabs']\n---\n")),Object(r.b)("h3",null,"Tabs with apostrophes"),Object(r.b)("p",null,"If your tab name contains an apostrophe, you only need to include the\ngrammatically correct text in the frontmatter. Your file name and\n",Object(r.b)("inlineCode",{parentName:"p"},"nav-items.yaml")," should ",Object(r.b)("strong",{parentName:"p"},"not")," include the apostrophe."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-markdown"},"---\ntitle: Sidebar\ntabs: ['Sidebar', \"What’s new\"]\n---\n")),Object(r.b)("p",null,"For the ",Object(r.b)("em",{parentName:"p"},"“What’s new”")," tab above, the source file would be ",Object(r.b)("inlineCode",{parentName:"p"},"whats-new.mdx"),", and\nthe path would look like ",Object(r.b)("inlineCode",{parentName:"p"},"/guides/navigation/whats-new"),"."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-navigation-tabs-mdx-6eb36fb2f161753a914a.js.map