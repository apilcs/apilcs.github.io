(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{228:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(239),i=n(238);t.default=function(){return o.a.createElement(r.a,null,o.a.createElement(i.a,{title:"404: Not found"}),o.a.createElement("h1",null,"NOT FOUND"),o.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},233:function(e,t,n){"use strict";var a=n(240),o=n.n(a),r=n(241),i=n.n(r);i.a.headerFontFamily=["Alegreya Sans","KaiTi","楷体","STKaiti","华文楷体"],i.a.bodyFontFamily=["Alegreya","Microsoft YaHei New","Microsoft Yahei","微软雅黑","宋体","SimHei","STXihei","华文细黑"];var l=new o.a(i.a),c=(l.scale,l.rhythm,l.options);t.a={colors:{main:"#508084",mainAlt:"ghostwhite",pageBg:"white",highlight:"#f4ff99",bodyText:c.bodyColor,headerText:c.headerColor},fonts:{body:c.bodyFontFamily.map(function(e){return'"'+e+'"'}).join(","),header:c.headerFontFamily.map(function(e){return'"'+e+'"'}).join(",")},contentMaxWidth:"960px",contentOverhang:"20px",pageShadow:'\n    position: relative;\n\n    &::before,\n    &::after {\n      border-radius: 100px / 10px;\n      bottom: 10px;\n      box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);\n      content: "";\n      left: 0;\n      position: absolute;\n      right: 0;\n      top: 10px;\n      z-index: -1;\n    }\n\n    &::after {\n      left: auto;\n      right: 10px;\n      transform: skew(8deg) rotate(3deg);\n    }\n  '}},235:function(e,t,n){e.exports=n.p+"static/WaterPlain0008_1_270-639e0f9bcb49e2df527b0af0da421ff2.jpg"},236:function(e,t,n){e.exports=n.p+"static/apilcs_trsp_202x202-0d5e0d2ad01c2a8260c167d7b9586475.png"},237:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAQAAAAD+Fb1AAAAGklEQVR4AWN6WgaBTAzPIJDp/xsIZGL4CoEAcqcUjTsQ+dQAAAAASUVORK5CYII="},238:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(232),i=n.n(r),l=n(230);n(152);function c(e){var t=e.description,n=e.meta,a=e.title,r=e.intl,l=t||r.formatMessage({id:"description"});return o.a.createElement(i.a,{htmlAttributes:{lang:r.locale},title:a,titleTemplate:"%s | "+r.formatMessage({id:"title"}),meta:[{name:"description",content:l},{property:"og:title",content:a},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:r.formatMessage({id:"author"})},{name:"twitter:title",content:a},{name:"twitter:description",content:l}].concat(n)})}c.defaultProps={meta:[],description:""},t.a=Object(l.injectIntl)(c)},239:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(232),i=n.n(r),l=n(231),c=n(230),m=(n(152),n(233)),s=n(235),u=n.n(s);function d(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(['\n\n  html, body, #___gatsby {\n    height: 100%;\n  }\n\n  div[role="group"][tabindex] {\n    height: 100%;\n  }\n\n  body {\n    padding: 0;\n    margin: 0;\n    background: url(',');\n\n    &::before {\n      box-shadow: 0 0 10px rgba(0,0,0,.8);\n      content: "";\n      height: 10px;\n      left: 0;\n      position: fixed;\n      top: -10px;\n      width: 100%;\n      z-index: 100;\n    }\n  }\n\n  a {\n    color: ',";\n  }\n"]);return d=function(){return e},e}var g=Object(l.b)(d(),u.a,function(e){return e.theme.colors.main}),p={en:"English",zh:"中文"},h=l.c.div.withConfig({displayName:"language-switcher__Container",componentId:"s6ntyk-0"})(["position:absolute;top:40px;right:10px;"]),f=l.c.button.withConfig({displayName:"language-switcher__LanguageButton",componentId:"s6ntyk-1"})(["background:none;border:none;color:",";cursor:pointer;margin:10;"],function(e){return e.activeLocale?"yellow":"white"}),x=function(){return o.a.createElement(h,null,o.a.createElement(c.IntlContextConsumer,null,function(e){var t=e.languages,n=e.language;return t.map(function(e){return o.a.createElement(f,{type:"button",key:e,onClick:function(){return Object(c.changeLocale)("en"===e?"":e)},activeLocale:n===e},p[e])})}))},b=n(236),y=n.n(b),v=n(237),w=n.n(v),E=l.c.div.withConfig({displayName:"layout__Container",componentId:"sc-1orxqys-0"})(["display:flex;flex-direction:column;min-height:100%;overflow:hidden;main{"," background:",";background-image:url(",");border-radius:0 0 8px 0;flex-grow:1;margin:"," auto 0;max-width:",";padding:60px 120px 20px;width:100%;}"],function(e){return e.theme.pageShadow},function(e){return e.theme.colors.pageBg},w.a,function(e){return"-"+e.theme.contentOverhang},function(e){return e.theme.contentMaxWidth}),A=l.c.header.withConfig({displayName:"layout__Header",componentId:"sc-1orxqys-1"})(["background:rgba(0,0,0,0.7);border-bottom:1px solid ",";display:flex;padding-bottom:",";> div{flex-grow:1;margin:0 auto;max-width:",";position:relative;}"],function(e){return e.theme.colors.main},function(e){return e.theme.contentOverhang},function(e){return e.theme.contentMaxWidth}),k=l.c.div.withConfig({displayName:"layout__Branding",componentId:"sc-1orxqys-2"})(["display:flex;flex-direction:row-reverse;margin-bottom:10px;align-items:flex-end;> div{flex-grow:1;}h1{margin-bottom:0;}h2{color:",";font-size:1.4rem;margin-top:0.375rem;}img{height:100px;margin:5px 20px 5px 0;}"],function(e){return e.theme.colors.mainAlt}),C=l.c.nav.withConfig({displayName:"layout__Naivgation",componentId:"sc-1orxqys-3"})([""," background:",";border-radius:0 8px 0 0;color:",";font-family:",";ul{display:flex;margin:0;}li{border-right:1px solid rgba(255,255,255,0.07);display:inline-block;list-style:none;margin-bottom:0;text-align:center;a{color:",";display:inline-block;padding:4px 10px;transition:background-color 0.25s ease;&:hover,&.active{background-color:rgba(255,255,255,0.2);box-shadow:none;}}}"],function(e){return e.theme.pageShadow},function(e){return e.theme.colors.main},function(e){return e.theme.colors.mainAlt},function(e){return e.theme.fonts.header},function(e){return e.theme.colors.mainAlt}),_=l.c.footer.withConfig({displayName:"layout__Footer",componentId:"sc-1orxqys-4"})(["background:rgba(0,0,0,0.7);color:",";padding-top:",";margin-top:-",";> div{margin:0 auto;max-width:",";line-height:50px;text-align:right;}"],function(e){return e.theme.colors.mainAlt},function(e){return e.theme.contentOverhang},function(e){return e.theme.contentOverhang},function(e){return e.theme.contentMaxWidth});t.a=Object(c.injectIntl)(function(e){var t=e.children,n=e.intl;return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,null,o.a.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com",crossOrigin:!0})),o.a.createElement(l.a,{theme:m.a},o.a.createElement(o.a.Fragment,null,o.a.createElement(g,null),o.a.createElement(E,null,o.a.createElement(A,null,o.a.createElement("div",null,o.a.createElement(k,null,o.a.createElement("div",null,o.a.createElement("h1",null,o.a.createElement(c.Link,{to:"/"},n.formatMessage({id:"title"}))),o.a.createElement("h2",null,n.formatMessage({id:"subtitle"}))),o.a.createElement("img",{src:y.a,alt:"APILS Logo"})),o.a.createElement(C,null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(c.Link,{to:"/",activeClassName:"active"},n.formatMessage({id:"nav.home"}))),o.a.createElement("li",null,o.a.createElement(c.Link,{to:"/about/",activeClassName:"active"},n.formatMessage({id:"nav.about"}))),o.a.createElement("li",null,o.a.createElement(c.Link,{to:"/volumes/",activeClassName:"active"},n.formatMessage({id:"nav.volumes"}))),o.a.createElement("li",null,o.a.createElement(c.Link,{to:"/submissions/",activeClassName:"active"},n.formatMessage({id:"nav.submissions"}))))),o.a.createElement(x,null))),o.a.createElement("main",null,t),o.a.createElement(_,null,o.a.createElement("div",null,"© ",(new Date).getFullYear(),", APILS"))))))})}}]);
//# sourceMappingURL=component---src-pages-404-js-a6445d6f0a1bbb7cbe97.js.map