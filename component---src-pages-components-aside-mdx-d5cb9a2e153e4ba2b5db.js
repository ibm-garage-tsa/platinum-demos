(window.webpackJsonp=window.webpackJsonp||[]).push([[27,18,20],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("NmYn"),l=n.n(i),o=n("Wbzz"),b=n("Xrax"),s=n("k4MR"),c=n("TSYQ"),d=n.n(c),m=n("QH2O"),p=n.n(m),u=n("qKvR"),g=function(e){var t,n=e.title,a=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(u.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=i.length,t[p.a.darkMode]="dark"===a,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:p.a.text},n)))))},h=n("BAC9"),j=function(e){var t=e.relativePagePath,n=e.repository,a=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,r=n||a,i=r.baseUrl,l=r.subDirectory,b=i+"/edit/"+r.branch+l+"/src/pages"+t;return i?Object(u.b)("div",{className:"bx--row "+h.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:h.link,href:b},"Edit this page on GitHub"))):null},O=n("FCXl"),f=n("dI71"),y=n("I8xM"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],i=n.map((function(e){var t,n=l()(e,{lower:!0,strict:!0}),i=n===r,b=new RegExp(r+"/?(#.*)?$"),s=a.replace(b,n);return Object(u.b)("li",{key:e,className:d()((t={},t[y.selectedItem]=i,t),y.listItem)},Object(u.b)(o.Link,{className:y.link,to:""+s},e))}));return Object(u.b)("div",{className:y.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:y.list},i))))))},t}(r.a.Component),N=n("MjG9"),v=n("CzIb"),w=n("Asxa"),T=n("OIbQ"),k=n.n(T),A=function(e){var t=e.date,n=new Date(t);return t?Object(u.b)(w.c,{className:k.a.row},Object(u.b)(w.a,null,Object(u.b)("div",{className:k.a.text},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,r=e.Title,i=t.frontmatter,c=void 0===i?{}:i,d=t.relativePagePath,m=t.titleType,p=c.tabs,h=c.title,f=c.theme,y=c.description,w=c.keywords,T=c.date,k=Object(v.a)().interiorTheme,C=Object(o.useStaticQuery)("2456312558").site.pathPrefix,M=C?a.pathname.replace(C,""):a.pathname,P=p?M.split("/").filter(Boolean).slice(-1)[0]||l()(p[0],{lower:!0}):"",I=f||k;return Object(u.b)(s.a,{tabs:p,homepage:!1,theme:I,pageTitle:h,pageDescription:y,pageKeywords:w,titleType:m},Object(u.b)(g,{title:r?Object(u.b)(r,null):h,label:"label",tabs:p,theme:I}),p&&Object(u.b)(x,{title:h,slug:M,tabs:p,currentTab:P}),Object(u.b)(N.a,{padded:!0},n,Object(u.b)(j,{relativePagePath:d}),Object(u.b)(A,{date:T})),Object(u.b)(O.a,{pageContext:t,location:a,slug:M,tabs:p,currentTab:P}),Object(u.b)(b.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},LvKH:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return b})),n.d(t,"default",(function(){return O}));var a=n("wx14"),r=n("zLVn"),i=(n("q1tI"),n("7ljp")),l=n("013z"),o=(n("qKvR"),["components"]),b={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},c=s("PageDescription"),d=s("InlineNotification"),m=s("Title"),p=s("Row"),u=s("Column"),g=s("Aside"),h={_frontmatter:b},j=l.a;function O(e){var t=e.components,n=Object(r.a)(e,o);return Object(i.b)(j,Object(a.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(c,{mdxType:"PageDescription"},Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"<Aside>")," component is a wrapper component that adds styling to make the\ntext display smaller than the default body text; using ",Object(i.b)("inlineCode",{parentName:"p"},"body-long-01")," and adds\nthe correct top border styles."),Object(i.b)("p",null,"It should only be used within a ",Object(i.b)("inlineCode",{parentName:"p"},"<Column>")," component with specific parameters.\n",Object(i.b)("inlineCode",{parentName:"p"},"<Column colMd={2} colLg={3} offsetMd={1} offsetLg={1}>"))),Object(i.b)(d,{kind:"warning",mdxType:"InlineNotification"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Warning:")," If you use more than one ",Object(i.b)("inlineCode",{parentName:"p"},"<Aside>")," component on a single page, you\nneed to provide an accessibility label so that someone using assistive\ntechnology can quickly understand the purpose of the landmark. See\n",Object(i.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Complementary_role#Labeling_landmarks"},"Mozilla Developer Network’s documentation"),"\nfor more information. Props for accessibility labels are described in the\n",Object(i.b)("a",{parentName:"p",href:"#props"},"Props section")," below.")),Object(i.b)("h2",null,"Example"),Object(i.b)(m,{mdxType:"Title"},"With hanging rule"),Object(i.b)(p,{mdxType:"Row"},Object(i.b)(u,{colMd:5,colLg:8,mdxType:"Column"},Object(i.b)("p",null,"It is more important than ever that we own our own ethos, make palpable our\nbrand values, and incorporate an instantly identifiable IBMness in everything we\ndo."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Without aesthetic, design is either the humdrum repetition of familiar clichés\nor a wild scramble for novelty. Without aesthetic, the computer is but a\nmindless speed machine, producing effects without substance, form without\nrelevant content, or content without meaningful form."),Object(i.b)("cite",null,"– Paul Rand")),Object(i.b)("p",null,"Aesthetic is defined as the philosophical theory or set of principles governing\noutward appearance or actions.")),Object(i.b)(u,{colMd:2,colLg:3,offsetMd:1,offsetLg:1,mdxType:"Column"},Object(i.b)(g,{"aria-label":"Example aside",mdxType:"Aside"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Good design is always good design.")),Object(i.b)("p",null,"What we borrow from our own design history is not a mid-century aesthetic in\nstylistic terms, but the modernist attitudes and approach used at the time.")))),Object(i.b)(m,{mdxType:"Title"},"Without hanging rule"),Object(i.b)(p,{mdxType:"Row"},Object(i.b)(u,{colMd:5,colLg:8,mdxType:"Column"},Object(i.b)("p",null,"Like our brand values, our design ethos must be palpable in everything we\nproduce. Our philosophy and principles are for designers and non-designers\nalike–anyone authoring or authorizing any form of design on behalf of IBM."),Object(i.b)("p",null,"They provide clear criteria for the conception, creativity and craftsmanship our\nbrand demands and our clients deserve. The expression of our philosophy may\nevolve and expand over time, but our principles are designed to endure, ensuring\neverything IBM is distinctly IBM.")),Object(i.b)(u,{colMd:2,colLg:3,offsetMd:1,offsetLg:1,mdxType:"Column"},Object(i.b)(g,{"aria-label":"Example aside",hideRule:!0,mdxType:"Aside"},Object(i.b)("p",null,"A by-product of every experience with IBM should be time—time saved or time\nwell-spent.")))),Object(i.b)("h2",null,"Code"),Object(i.b)(m,{mdxType:"Title"},"With hanging rule"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-mdx",metastring:"path=components/Aside/Aside.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/Aside",path:"components/Aside/Aside.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/Aside"},"<Column colMd={2} colLg={3} offsetMd={1} offsetLg={1}>\n  <Aside>\n\n**Good design is always good design.** What we borrow from our own design\nhistory is not a mid-century aesthetic in stylistic terms, but the modernist\nattitudes and approach used at the time.\n\n  </Aside>\n</Column>\n")),Object(i.b)(m,{mdxType:"Title"},"Without hanging rule"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-mdx",metastring:"path=components/Aside/Aside.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/Aside",path:"components/Aside/Aside.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/Aside"},"<Column colMd={2} colLg={3} offsetMd={1} offsetLg={1} hideRule>\n  <Aside>\n\nA by-product of every experience with IBM should be time—time saved or time\nwell-spent.\n\n  </Aside>\n</Column>\n")),Object(i.b)("h3",null,"Props"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"property"),Object(i.b)("th",{parentName:"tr",align:null},"propType"),Object(i.b)("th",{parentName:"tr",align:null},"required"),Object(i.b)("th",{parentName:"tr",align:null},"default"),Object(i.b)("th",{parentName:"tr",align:null},"description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"aria-label"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"Specify an ",Object(i.b)("inlineCode",{parentName:"td"},"aria-label")," value to provide a label to the inner aside element.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"aria-labelledBy"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"Specify an ",Object(i.b)("inlineCode",{parentName:"td"},"aria-labelledby")," value that references the id of an existing element to serve as a label for the inner aside element.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"children"),Object(i.b)("td",{parentName:"tr",align:null},"node"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"className"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"Add custom class name")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"hideRule"),Object(i.b)("td",{parentName:"tr",align:null},"bool"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"Hide the hanging rule")))))}O.isMDXComponent=!0},OIbQ:function(e,t,n){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-components-aside-mdx-d5cb9a2e153e4ba2b5db.js.map