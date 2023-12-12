"use strict";(self.webpackChunkevantay_com=self.webpackChunkevantay_com||[]).push([[5988],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8925:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={title:"NodeJS Auto-reload server"},s=void 0,d={unversionedId:"nodejs-auto-reload",id:"nodejs-auto-reload",title:"NodeJS Auto-reload server",description:"Published on December 23, 2020",source:"@site/docs/nodejs-auto-reload.md",sourceDirName:".",slug:"/nodejs-auto-reload",permalink:"/docs/nodejs-auto-reload",draft:!1,tags:[],version:"current",frontMatter:{title:"NodeJS Auto-reload server"},sidebar:"docs",previous:{title:"MongoDB Cheatsheet",permalink:"/docs/mongodb-cheatsheet"},next:{title:"NodeJS Set npm run shell",permalink:"/docs/nodejs-set-npm-run-shell"}},u={},p=[{value:"Nodemon",id:"nodemon",level:2},{value:"How-to-use",id:"how-to-use",level:3},{value:"Add to npm scripts",id:"add-to-npm-scripts",level:3},{value:"Resources",id:"resources",level:2}],c={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Published on December 23, 2020"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"This document was migrated from ",(0,a.kt)("a",{parentName:"em",href:"https://digipie.github.io/digidocs/nodejs/auto-reload/"},"DigiDocs"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Problem:")," Manually reloading the NodeJS server by hitting ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl + C")," and entering ",(0,a.kt)("inlineCode",{parentName:"p"},"npm start")," repeatedly in development is exhausting."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Solution:")," Automatically reload the server each time there is a change!"),(0,a.kt)("h2",{id:"nodemon"},"Nodemon"),(0,a.kt)("admonition",{title:"Cite",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Nodemon is a utility that will monitor for any changes in your source and automatically restart your server.")),(0,a.kt)("h3",{id:"how-to-use"},"How-to-use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -g nodemon\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install ",(0,a.kt)("inlineCode",{parentName:"li"},"nodemon"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"npm i -g nodemon"),"."),(0,a.kt)("li",{parentName:"ol"},"Replace ",(0,a.kt)("inlineCode",{parentName:"li"},"node")," with ",(0,a.kt)("inlineCode",{parentName:"li"},"nodemon")," in your command. For example, change ",(0,a.kt)("inlineCode",{parentName:"li"},"node index.js")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"nodemon index.js"),". That's it.")),(0,a.kt)("h3",{id:"add-to-npm-scripts"},"Add to npm scripts"),(0,a.kt)("p",null,"You can also add it to npm scripts to make life even easier."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "start": "node index.js",\n    "dev": "nodemon index.js"\n  }\n}\n')),(0,a.kt)("p",null,"After doing so, you can enter ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run dev")," subsequently, which will resolve to ",(0,a.kt)("inlineCode",{parentName:"p"},"nodemon index.js"),"."),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://digipie.github.io/digidocs/nodejs/auto-reload/"},"Original copy of this document at DigiDocs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodemon.io/"},"Nodemon's landing page"))))}m.isMDXComponent=!0}}]);