(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"013z":function(e,t,n){"use strict";var b=n("q1tI"),a=n.n(b),r=n("NmYn"),l=n.n(r),o=n("Wbzz"),i=n("Xrax"),c=n("k4MR"),s=n("TSYQ"),p=n.n(s),m=n("QH2O"),u=n.n(m),d=n("qKvR"),O=function(e){var t,n=e.title,b=e.theme,a=e.tabs,r=void 0===a?[]:a;return Object(d.b)("div",{className:p()(u.a.pageHeader,(t={},t[u.a.withTabs]=r.length,t[u.a.darkMode]="dark"===b,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:u.a.text},n)))))},j=n("BAC9"),g=function(e){var t=e.relativePagePath,n=e.repository,b=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,a=n||b,r=a.baseUrl,l=a.subDirectory,i=r+"/edit/"+a.branch+l+"/src/pages"+t;return r?Object(d.b)("div",{className:"bx--row "+j.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:j.link,href:i},"Edit this page on GitHub"))):null},h=n("FCXl"),N=n("dI71"),f=n("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(N.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,b=e.slug,a=b.split("/").filter(Boolean).slice(-1)[0],r=n.map((function(e){var t,n=l()(e,{lower:!0,strict:!0}),r=n===a,i=new RegExp(a+"/?(#.*)?$"),c=b.replace(i,n);return Object(d.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=r,t),f.listItem)},Object(d.b)(o.Link,{className:f.link,to:""+c},e))}));return Object(d.b)("div",{className:f.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",{"aria-label":t},Object(d.b)("ul",{className:f.list},r))))))},t}(a.a.Component),y=n("MjG9"),x=n("CzIb"),v=n("Asxa"),k=n("OIbQ"),T=n.n(k),I=function(e){var t=e.date,n=new Date(t);return t?Object(d.b)(v.c,{className:T.a.row},Object(d.b)(v.a,null,Object(d.b)("div",{className:T.a.text},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,n=e.children,b=e.location,a=e.Title,r=t.frontmatter,s=void 0===r?{}:r,p=t.relativePagePath,m=t.titleType,u=s.tabs,j=s.title,N=s.theme,f=s.description,v=s.keywords,k=s.date,T=Object(x.a)().interiorTheme,C=Object(o.useStaticQuery)("2456312558").site.pathPrefix,P=C?b.pathname.replace(C,""):b.pathname,D=u?P.split("/").filter(Boolean).slice(-1)[0]||l()(u[0],{lower:!0}):"",S=N||T;return Object(d.b)(c.a,{tabs:u,homepage:!1,theme:S,pageTitle:j,pageDescription:f,pageKeywords:v,titleType:m},Object(d.b)(O,{title:a?Object(d.b)(a,null):j,label:"label",tabs:u,theme:S}),u&&Object(d.b)(w,{title:j,slug:P,tabs:u,currentTab:D}),Object(d.b)(y.a,{padded:!0},n,Object(d.b)(g,{relativePagePath:p}),Object(d.b)(I,{date:k})),Object(d.b)(h.a,{pageContext:t,location:b,slug:P,tabs:u,currentTab:D}),Object(d.b)(i.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,n){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},pyOq:function(e,t,n){"use strict";n.r(t),n.d(t,"Title",(function(){return c})),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return d}));var b,a=n("wx14"),r=n("zLVn"),l=(n("q1tI"),n("7ljp")),o=n("013z"),i=(n("qKvR"),["components"]),c=function(){return Object(l.b)("span",null,"Automating deployment of multi-style integrations ",Object(l.b)("br",null)," 300-level live demo")},s={},p=(b="InlineNotification",function(e){return console.warn("Component "+b+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",e)}),m={Title:c,_frontmatter:s},u=o.a;function d(e){var t=e.components,n=Object(r.a)(e,i);return Object(l.b)(u,Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("img",{src:"./images/TBD",alt:"PENDING Dent Deletion banner"}),Object(l.b)("span",{id:"top"}),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"DEMO OVERVIEW"),Object(l.b)("th",{parentName:"tr",align:"left"}))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("strong",{parentName:"td"},"Scenario overview")),Object(l.b)("td",{parentName:"tr",align:"left"},"Automating integration deployment using a cloud native approach, to achieve the benefits of greater productivity and simplified operations.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("strong",{parentName:"td"},"Demo products")),Object(l.b)("td",{parentName:"tr",align:"left"},"** Cloud Pak for Integration V2021.3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("strong",{parentName:"td"},"Demo capabilities")),Object(l.b)("td",{parentName:"tr",align:"left"},"** IBM App Connect Enterprise, IBM App Connect Enterprise Designer, API Connect (APIC)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("strong",{parentName:"td"},"Demo guidance")),Object(l.b)("td",{parentName:"tr",align:"left"},"This demo script has multiple tasks that each have multiple steps. In each step, you have the details about what you need to do (",Object(l.b)("strong",{parentName:"td"},"Actions"),"), what you can say while delivering this demo step (",Object(l.b)("strong",{parentName:"td"},"Narration"),"), and what diagrams and screenshots you will see.",Object(l.b)("br",null),Object(l.b)("br",null),"This demo script is a suggestion, and you are welcome to customize based on your sales opportunity. Most importantly, practice this demo in advance. If the demo seems easy for you to execute, the customer will focus on the content. If it seems difficult for you to execute, the customer will focus on your delivery.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("strong",{parentName:"td"},"Demo downloads")),Object(l.b)("td",{parentName:"tr",align:"left"})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("strong",{parentName:"td"},"How to get support")),Object(l.b)("td",{parentName:"tr",align:"left"},"Contact ",Object(l.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0124J683GW",target:"_blank",rel:"noreferrer"},"#itz-techzone-support")," or ",Object(l.b)("a",{href:"mailto:techzone.help@ibm.com"},Object(l.b)("a",{parentName:"td",href:"mailto:techzone.help@ibm.com"},"techzone.help@ibm.com"))," regarding issues with reserving and provisioning TechZone environments. ",Object(l.b)("br",null),Object(l.b)("br",null)," Contact ",Object(l.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0216F39ACU",target:"_blank",rel:"noreferrer"},"#platinumdemos-automation-support")," regarding issues with setting up and running this demo use case.")))),Object(l.b)("h2",null,Object(l.b)("strong",{parentName:"h2"},"DEMO INSTALLATION AND SETUP")),Object(l.b)("details",null,Object(l.b)("summary",null,"1 - Fork the Github Repository"),Object(l.b)("br",null),Object(l.b)("p",null,"This demo uses a Tekton pipeline to build images and deploy them for four App Connect Integration Servers and one MQ server. In this section, you fork a github repository with all necessary assets for the demo, including the script to create the pipeline."),Object(l.b)("br",null),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Open a browser and navigate ",Object(l.b)("a",{href:"https://github.com/IBM/cp4i-deployment-samples/",target:"_blank",rel:"noreferrer"},"here"),"."),Object(l.b)("undefined",{parentName:"li"},Object(l.b)("br",null),Object(l.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-dent-deletion/images/prepare-1-1.png",width:800}),Object(l.b)("br",null))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"If necessary, log in with your personal GitHub account."))),Object(l.b)("br",null),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Click ",Object(l.b)("strong",{parentName:"p"},"Fork"),". ",Object(l.b)("br",null),Object(l.b)("br",null),Object(l.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-dent-deletion/images/prepare-1-3.png",width:800}),Object(l.b)("br",null))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Select the organization where you want to fork. "),Object(l.b)("undefined",{parentName:"li"},Object(l.b)("br",null),Object(l.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-dent-deletion/images/prepare-1-4.png",width:800}),Object(l.b)("br",null))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"The ",Object(l.b)("strong",{parentName:"p"},"cp4i-deployment-samples")," folder was forked to your organization. You will need its URL in section 5 of this preparation."),Object(l.b)("undefined",{parentName:"li"},Object(l.b)("br",null),Object(l.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-dent-deletion/images/prepare-1-5.png",width:800}),Object(l.b)("br",null)))),Object(l.b)("br",null),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(l.b)("details",null,Object(l.b)("summary",null,"2 - Clone the Github Repository to your machine"),Object(l.b)("br",null),Object(l.b)(p,{mdxType:"InlineNotification"},Object(l.b)("strong",null,"NOTE"),": To copy the repo you will need to have the Git CLI in your machine. If you don’t have it, follow the installation steps described in this page, based in your operational system."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"On the forked repo, click ",Object(l.b)("strong",{parentName:"li"},"Code")," (1) and click ",Object(l.b)("strong",{parentName:"li"},"Copy URL button")," (2) on the ",Object(l.b)("strong",{parentName:"li"},"Clone HTTPS")," section. ",Object(l.b)("br",null),Object(l.b)("img",{parentName:"li",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-dent-deletion/images/prepare-2-1.png",width:800}))),Object(l.b)("br",null),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"Open your terminal window and execute this command:")),Object(l.b)("br",null),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"git clone <your_copied_repo_url.git>\n")),Object(l.b)("br",null),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},"Open the cp4i-deployment-samples folder with this command:")),Object(l.b)("br",null),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"cd cp4i-deployment-samples\n")),Object(l.b)("br",null),Object(l.b)("ol",{start:4},Object(l.b)("li",{parentName:"ol"},"Here you should see multiple files and folder. To execute our script files, we need to change the file permission to be able to execute them. Execute this command:")),Object(l.b)("br",null),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"chmod 755 *\n")),Object(l.b)("br",null),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(l.b)("details",null,Object(l.b)("summary",null,"3- Access your ROKS cluster and install OC CLI"),Object(l.b)("br",null),Object(l.b)("p",null,"In this section, you access your ROKS cluster and install the OpenShift command line tool. If you already have the Command line tool, you are welcome to skip this section."),Object(l.b)("br",null),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Open ",Object(l.b)("a",{href:"https://techzone.ibm.com/my/reservations",target:"_blank",rel:"noreferrer"},"My reservations")," in IBM Technology Zone.")),Object(l.b)("br",null),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"Select your CP4I ROKS cluster.",Object(l.b)("br",null),Object(l.b)("undefined",{parentName:"li"},Object(l.b)("br",null),Object(l.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-dent-deletion/images/prepare-3-2.png",width:800})))),Object(l.b)("br",null),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},"Click ",Object(l.b)("strong",{parentName:"li"},"Open your Managed OpenShift (ROKS) environment"),".",Object(l.b)("br",null),Object(l.b)("undefined",{parentName:"li"},Object(l.b)("br",null),Object(l.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-dent-deletion/images/prepare-3-3.png",width:800})))),Object(l.b)("br",null),Object(l.b)("ol",{start:4},Object(l.b)("li",{parentName:"ol"},"Click ",Object(l.b)("strong",{parentName:"li"},"OpenShift web console"),".",Object(l.b)("br",null),Object(l.b)("undefined",{parentName:"li"},Object(l.b)("br",null),Object(l.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-dent-deletion/images/prepare-3-4.png",width:800})))),Object(l.b)("br",null),Object(l.b)("ol",{start:5},Object(l.b)("li",{parentName:"ol"},"On Web console page, click ",Object(l.b)("strong",{parentName:"li"},"?")," (1), and select ",Object(l.b)("strong",{parentName:"li"},"Command line tools")," (2). ",Object(l.b)("br",null),Object(l.b)("undefined",{parentName:"li"},Object(l.b)("br",null),Object(l.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-dent-deletion/images/prepare-3-5.png",width:800})))),Object(l.b)("br",null),Object(l.b)("ol",{start:6},Object(l.b)("li",{parentName:"ol"},"Follow the links to install the OpenShift Command Line Interface (CLI) for your Operational System. ",Object(l.b)("br",null),Object(l.b)("undefined",{parentName:"li"},Object(l.b)("br",null),Object(l.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-dent-deletion/images/prepare-3-6.png",width:800})))),Object(l.b)("br",null),Object(l.b)("br",null),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(l.b)("details",null,Object(l.b)("summary",null,"4 - Access your ROKS cluster using CLI"),Object(l.b)("br",null),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Log in OpenShift cluster using CLI.")),Object(l.b)("br",null),Object(l.b)("p",null,"From the dropdown menu in the upper right of the page, where you see your username (1), click ",Object(l.b)("strong",{parentName:"p"},"Copy login command")," (2).",Object(l.b)("br",null)),Object(l.b)("undefined",null,Object(l.b)("br",null),Object(l.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-dent-deletion/images/prepare-4-1.png",width:800})),Object(l.b)("br",null),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"Click ",Object(l.b)("strong",{parentName:"li"},"Display Token"),".",Object(l.b)("br",null),Object(l.b)("undefined",{parentName:"li"},Object(l.b)("br",null),Object(l.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-dent-deletion/images/prepare-4-2.png",width:800})))),Object(l.b)("br",null),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},"Copy the ",Object(l.b)("strong",{parentName:"li"},"login")," command.",Object(l.b)("br",null),Object(l.b)("undefined",{parentName:"li"},Object(l.b)("br",null),Object(l.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-dent-deletion/images/prepare-4-3.png",width:800})))),Object(l.b)("br",null),Object(l.b)("ol",{start:4},Object(l.b)("li",{parentName:"ol"},"Open your terminal window and paste the login command to access your OpenShift cluster.",Object(l.b)("br",null),Object(l.b)("undefined",{parentName:"li"},Object(l.b)("br",null),Object(l.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-dent-deletion/images/prepare-4-4.png",width:500})))),Object(l.b)("br",null),Object(l.b)("br",null),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(l.b)("details",null,Object(l.b)("summary",null,"5 - Set up the parameters to install the pipeline"),Object(l.b)("br",null),Object(l.b)("p",null,"We’re now going to set up pipeline triggers. We will link your GitHub repository to your OpenShift pipelines, so that when you commit a change to GitHub, your OpenShift pipeline runs automatically."),Object(l.b)("br",null),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Set the namespace to be the correct namespace. It should be cp4i. On your terminal window, run this command:")),Object(l.b)("br",null),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"export NAMESPACE=cp4i\n")),Object(l.b)("br",null),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"We’ll set the GitHub branch to main. Don’t worry if you don’t understand this fully – it’s telling the script which version of the GitHub artifacts to use.")),Object(l.b)("br",null),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"export BRANCH=main\n")),Object(l.b)("br",null),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"We now need to set which GitHub repository to use. It’s the URL of your forked repository that you made earlier in section 1. You can see it in your browser address bar, as seen in the image below.\n ",Object(l.b)("br",null),Object(l.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-dent-deletion/images/prepare-5-3-1.png",width:800}),Object(l.b)("br",null)),Object(l.b)("p",{parentName:"li"},"  For example, ours is: ",Object(l.b)("a",{parentName:"p",href:"https://github.com/rosorio/cp4i-deployment-samples.git"},"https://github.com/rosorio/cp4i-deployment-samples.git"),". Note that rosorio is our github id, yours will be different."))),Object(l.b)("br",null),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"export FORKED_REPO=https://github.com/<your_id>/cp4i-deployment-samples.git\n")),Object(l.b)("br",null),Object(l.b)("undefined",null,Object(l.b)("br",null),Object(l.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-dent-deletion/images/dent-deletion-1-2-1.png",width:800}),Object(l.b)("br",null)),Object(l.b)("br",null),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(l.b)("details",null,Object(l.b)("summary",null,"6 - Create the pipeline"),Object(l.b)("br",null),Object(l.b)("p",null,"In this section, you create the pipeline in OpenShift Pipeline page. "),Object(l.b)("br",null),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Back to cp4i-deployment-samples folder, open DrivewayDentDeletion/Operators folder.",Object(l.b)("br",null))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"cd DrivewayDentDeletion/Operators\n")),Object(l.b)("undefined",null,Object(l.b)("br",null),Object(l.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-dent-deletion/images/prepare-6-1.png",width:800}),Object(l.b)("br",null)),Object(l.b)("br",null),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"Now, you are ready to create the pipeline. Run the command below to do it.")),Object(l.b)("br",null),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"./cicd-apply-test-apic-pipeline.sh -n $NAMESPACE -r $FORKED_REPO -b $BRANCH\n")),Object(l.b)("undefined",null,Object(l.b)("br",null),Object(l.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-dent-deletion/images/prepare-6-2.png",width:800}),Object(l.b)("br",null)),Object(l.b)("br",null),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},"You can check it’s all there - go to OpenShift Console again, and on left menu, open Pipelines > Pipelines.",Object(l.b)("undefined",{parentName:"li"},Object(l.b)("br",null),Object(l.b)("br",null),Object(l.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-dent-deletion/images/prepare-6-3.png",width:800}),Object(l.b)("br",null)))),Object(l.b)("br",null),Object(l.b)("ol",{start:4},Object(l.b)("li",{parentName:"ol"},"On the Project combobox (1), select cp4i project (2).",Object(l.b)("undefined",{parentName:"li"},Object(l.b)("br",null),Object(l.b)("br",null),Object(l.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-dent-deletion/images/prepare-6-4.png",width:800}),Object(l.b)("br",null)))),Object(l.b)("br",null),Object(l.b)("p",null,"5. You should see two pipelines. In the Demo Script, you will run the pipeline. "),Object(l.b)("undefined",null,Object(l.b)("br",null),Object(l.b)("br",null),Object(l.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-dent-deletion/images/prepare-6-5.png",width:800}),Object(l.b)("br",null)),Object(l.b)("br",null),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(l.b)("details",null,Object(l.b)("summary",null,"7 - Download the BAR file"),Object(l.b)("br",null),Object(l.b)("p",null,"In this section, you download a BAR file to be used during the demo. "),Object(l.b)("br",null),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"On a Browser window, open the URL below.\n",Object(l.b)("a",{parentName:"li",href:"https://github.com/amarIBM/hello-world/blob/master/HttpEchoApp.bar"},"https://github.com/amarIBM/hello-world/blob/master/HttpEchoApp.bar"))),Object(l.b)("br",null),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"Click Download button. ",Object(l.b)("undefined",{parentName:"li"},Object(l.b)("br",null),Object(l.b)("br",null),Object(l.b)("img",{src:"https://raw.githubusercontent.com/ibm-garage-tsa/platinum-demos/master/src/pages/300-integration-dent-deletion/images/prepare-7-2.png",width:800}),Object(l.b)("br",null)))),Object(l.b)("br",null),Object(l.b)("p",null,"Great! Your are ready to demo. Now, it is time to learn how to deliver the demo, by exploring the Demo Script document."),Object(l.b)("br",null),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(l.b)("br",null),Object(l.b)("p",null,"Click ",Object(l.b)("a",{parentName:"p",href:"/platinum-demos/300-business-automation-predictive-decisioning/demo-script"},"here")," to go to ",Object(l.b)("strong",{parentName:"p"},"Demo Script")," on the next tab."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-300-integration-dent-deletion-demo-preparation-mdx-3371ff623b39822b7614.js.map