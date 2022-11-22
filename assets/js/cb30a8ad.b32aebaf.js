"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3148],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=m(r),f=a,d=l["".concat(s,".").concat(f)]||l[f]||u[f]||p;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=l;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var m=2;m<p;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},3687:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return c},default:function(){return l}});var n=r(7462),a=r(3366),p=(r(7294),r(3905)),o=["components"],i={slug:"/refine",id:"refine",title:"Refine"},s=void 0,m={unversionedId:"refine",id:"refine",isDocsHomePage:!1,title:"Refine",description:"What is refine?",source:"@site/docs/refine.md",sourceDirName:".",slug:"/refine",permalink:"/superplate/docs/refine",editUrl:"https://github.com/pankod/superplate/tree/master/documentation/docs/refine.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1669119743,formattedLastUpdatedAt:"11/22/2022",frontMatter:{slug:"/refine",id:"refine",title:"Refine"},sidebar:"someSidebar",previous:{title:"Overview",permalink:"/superplate/docs/"},next:{title:"Tailwind CSS",permalink:"/superplate/docs/nextjs/tailwind"}},c=[{value:"What is refine?",id:"what-is-refine",children:[]},{value:"What do you mean by &quot;headless&quot; ?",id:"what-do-you-mean-by-headless-",children:[]},{value:"Use cases",id:"use-cases",children:[]},{value:"Key Features",id:"key-features",children:[]}],u={toc:c};function l(e){var t=e.components,r=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"what-is-refine"},"What is refine?"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"refine")," is a React-based framework for the rapid \u2728 development of web applications.\nIt eliminates the repetitive tasks demanded by ",(0,p.kt)("strong",{parentName:"p"},"CRUD")," operations and provides industry standard solutions for critical parts like ",(0,p.kt)("strong",{parentName:"p"},"authentication"),", ",(0,p.kt)("strong",{parentName:"p"},"access control"),", ",(0,p.kt)("strong",{parentName:"p"},"routing"),", ",(0,p.kt)("strong",{parentName:"p"},"networking"),", ",(0,p.kt)("strong",{parentName:"p"},"state management"),", and ",(0,p.kt)("strong",{parentName:"p"},"i18n"),"."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"refine")," is ",(0,p.kt)("em",{parentName:"p"},"headless by design")," offering unlimited styling and customization options. "),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine"},"Refer to refine repository for more information \u27a1\ufe0f ")),(0,p.kt)("h2",{id:"what-do-you-mean-by-headless-"},'What do you mean by "headless" ?'),(0,p.kt)("p",null,"Instead of being a limited set of pre-styled components, ",(0,p.kt)("strong",{parentName:"p"},"refine")," is a collection of helper\xa0",(0,p.kt)("inlineCode",{parentName:"p"},"hooks"),",\xa0",(0,p.kt)("inlineCode",{parentName:"p"},"components"),"\xa0and\xa0",(0,p.kt)("inlineCode",{parentName:"p"},"providers"),". They are all decoupled from your ",(0,p.kt)("em",{parentName:"p"},"UI components")," and ",(0,p.kt)("em",{parentName:"p"},"business logic"),", so they never keep you from customizing your ",(0,p.kt)("em",{parentName:"p"},"UI")," or coding your own flow."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"refine")," seamlessly works with any ",(0,p.kt)("strong",{parentName:"p"},"custom design")," or ",(0,p.kt)("strong",{parentName:"p"},"UI framework you favor"),". For convenience, it ships with ready-made integrations for ",(0,p.kt)("a",{parentName:"p",href:"https://ant.design/"},"Ant Design System"),", ",(0,p.kt)("a",{parentName:"p",href:"https://mui.com/"},"Material UI"),", ",(0,p.kt)("a",{parentName:"p",href:"https://mantine.dev/"},"Mantine"),", and ",(0,p.kt)("a",{parentName:"p",href:"https://chakra-ui.com/"},"Chakra UI"),"."),(0,p.kt)("h2",{id:"use-cases"},"Use cases"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"refine"),"\xa0shines on ",(0,p.kt)("em",{parentName:"p"},"data-intensive")," applications like ",(0,p.kt)("em",{parentName:"p"},"admin panels"),", ",(0,p.kt)("em",{parentName:"p"},"dashboards")," and ",(0,p.kt)("em",{parentName:"p"},"internal tools"),". Thanks to built-in ",(0,p.kt)("strong",{parentName:"p"},"SSR support"),", ",(0,p.kt)("strong",{parentName:"p"},"refine"),"\xa0can also power ",(0,p.kt)("em",{parentName:"p"},"customer-facing")," applications like ",(0,p.kt)("em",{parentName:"p"},"storefronts"),"."),(0,p.kt)("br",null),(0,p.kt)("a",{href:"https://github.com/refinedev/refine"},(0,p.kt)("img",{alt:"how-works-refine",src:"https://user-images.githubusercontent.com/18739364/200257209-8fc0c8b1-2568-453e-873f-00513434deed.png"})),(0,p.kt)("br",null),(0,p.kt)("br",null),(0,p.kt)("h2",{id:"key-features"},"Key Features"),(0,p.kt)("p",null,"\u2699\ufe0f Zero-config, ",(0,p.kt)("strong",{parentName:"p"},"one-minute setup")," with a ",(0,p.kt)("strong",{parentName:"p"},"single CLI command")),(0,p.kt)("p",null,"\ud83d\udd0c Connectors for ",(0,p.kt)("strong",{parentName:"p"},"15+ backend services")," including ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/simple-rest"},"REST API"),", ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/graphql"},"GraphQL"),", ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/nestjsx-crud"},"NestJs CRUD"),", ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/airtable"},"Airtable"),", ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/strapi"},"Strapi"),", ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/strapi-v4"},"Strapi v4"),", ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/strapi-graphql"},"Strapi GraphQL"),", ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/supabase"},"Supabase"),", ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/hasura"},"Hasura"),", ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/nhost"},"Nhost"),", ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/appwrite"},"Appwrite"),", ",(0,p.kt)("a",{parentName:"p",href:"https://firebase.google.com/"},"Firebase"),", ",(0,p.kt)("a",{parentName:"p",href:"https://directus.io/"},"Directus")," and ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/altogic"},"Altogic")),(0,p.kt)("p",null,"\ud83c\udf10 ",(0,p.kt)("strong",{parentName:"p"},"SSR support")," with ",(0,p.kt)("strong",{parentName:"p"},"Next.js")," or ",(0,p.kt)("strong",{parentName:"p"},"Remix")),(0,p.kt)("p",null,"\u269b Perfect ",(0,p.kt)("strong",{parentName:"p"},"state management")," & ",(0,p.kt)("strong",{parentName:"p"},"mutations")," with ",(0,p.kt)("strong",{parentName:"p"},"React Query")),(0,p.kt)("p",null,"\ud83d\udd00 ",(0,p.kt)("strong",{parentName:"p"},"Advanced routing")," with any router library of your choice"),(0,p.kt)("p",null,"\ud83d\udd10 Providers for seamless ",(0,p.kt)("strong",{parentName:"p"},"authentication")," and ",(0,p.kt)("strong",{parentName:"p"},"access control")," flows"),(0,p.kt)("p",null,"\u26a1 Out-of-the-box support for ",(0,p.kt)("strong",{parentName:"p"},"live / real-time applications")),(0,p.kt)("p",null,"\ud83d\udcc4 Easy ",(0,p.kt)("strong",{parentName:"p"},"audit logs")," & ",(0,p.kt)("strong",{parentName:"p"},"document versioning")),(0,p.kt)("p",null,"\ud83d\udcac Support for any ",(0,p.kt)("strong",{parentName:"p"},"i18n")," framework"),(0,p.kt)("p",null,"\ud83d\udcaa Future-proof, ",(0,p.kt)("strong",{parentName:"p"},"robust architecture")),(0,p.kt)("p",null,"\u2705 Full ",(0,p.kt)("strong",{parentName:"p"},"test coverage")))}l.isMDXComponent=!0}}]);