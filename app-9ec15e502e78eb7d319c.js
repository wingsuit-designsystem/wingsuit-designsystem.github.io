webpackJsonp([0xd2a57dc1d883],{316:function(n,e,t){"use strict";function o(n,e,t){var o=a.map(function(t){if(t.plugin[n]){var o=t.plugin[n](e,t.options);return o}});return o=o.filter(function(n){return"undefined"!=typeof n}),o.length>0?o:t?[t]:[]}function r(n,e,t){return a.reduce(function(t,o){return o.plugin[n]?t.then(function(){return o.plugin[n](e,o.options)}):t},Promise.resolve())}e.__esModule=!0,e.apiRunner=o,e.apiRunnerAsync=r;var a=[{plugin:t(1299),options:{plugins:[]}},{plugin:t(1298),options:{plugins:[],writeKey:"Yp6DgNNFnTRzWk9yDOLFdMyrbeGInjYp"}},{plugin:t(1128),options:{plugins:[]}}]},1121:function(n,e,t){"use strict";e.components={"component---src-templates-docstemplate-jsx":t(1272),"component---src-pages-examples-index-jsx":t(1270),"component---src-pages-index-jsx":t(1271)},e.json={"layout-index.json":t(1273),"assets-overview.json":t(1278),"assets-javascript.json":t(1277),"404.json":t(1274),"assets-svg.json":t(1279),"components-globals.json":t(1281),"basics-introduction.json":t(1280),"assets-images.json":t(1276),"components-overview.json":t(1282),"components-twig.json":t(1284),"configurations-details.json":t(1287),"components-presentation.json":t(1283),"configurations-custom-webpack-config.json":t(1286),"components-wingsuit.json":t(1285),"drupal-overview.json":t(1291),"configurations-preset-webpack.json":t(1288),"drupal-ui-patterns.json":t(1292),"guides-create-component-guide.json":t(1294),"documentation-mdx.json":t(1289),"testing-manual-testing.json":t(1297),"documentation-overview.json":t(1290),"guides-quick-start-guide.json":t(1295),"404-html.json":t(1275),"examples.json":t(1293),"index.json":t(1296)},e.layouts={"layout---index":t(1269)}},1122:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function a(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function u(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},i=t(1),c=o(i),l=t(2),p=o(l),f=t(525),d=o(f),m=t(215),h=o(m),g=t(316),y=t(1678),v=o(y),x=function(n){var e=n.children;return c.default.createElement("div",null,e())},j=function(n){function e(t){r(this,e);var o=a(this,n.call(this)),u=t.location;return d.default.getPage(u.pathname)||(u=s({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},o}return u(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var t=d.default.getResourcesForPathname(n.location.pathname);if(t)this.setState({location:n.location,pageResources:t});else{var o=n.location;d.default.getPage(o.pathname)||(o=s({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(n){e.setState({location:o,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;h.default.on("onPostLoadPageResources",function(e){d.default.getPage(n.state.location.pathname)&&e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||(!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path)||(0,v.default)(this,n,e)))))},e.prototype.render=function(){var n=(0,g.apiRunner)("replaceComponentRenderer",{props:s({},this.props,{pageResources:this.state.pageResources}),loader:f.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,i.createElement)(this.state.pageResources.component,s({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:x,s({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(c.default.Component);j.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},e.default=j,n.exports=e.default},215:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(1524),a=o(r),u=(0,a.default)();n.exports=u},1123:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(231),a=t(526),u=o(a),s={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var o=decodeURIComponent(t),a=(0,u.default)(o,e);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),s[a])return s[a];var i=void 0;return n.some(function(n){if(n.matchPath){if((0,r.matchPath)(a,{path:n.path})||(0,r.matchPath)(a,{path:n.matchPath}))return i=n,s[a]=n,!0}else{if((0,r.matchPath)(a,{path:n.path,exact:!0}))return i=n,s[a]=n,!0;if((0,r.matchPath)(a,{path:n.path+"index.html"}))return i=n,s[a]=n,!0}return!1}),i}}},1124:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(1318),a=o(r),u=t(316),s=(0,u.apiRunner)("replaceHistory"),i=s[0],c=i||(0,a.default)();n.exports=c},1275:function(n,e,t){t(11),n.exports=function(n){return t.e(0xa2868bfb69fc,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(1362)})})}},1274:function(n,e,t){t(11),n.exports=function(n){return t.e(0xe70826b53c04,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(1363)})})}},1276:function(n,e,t){t(11),n.exports=function(n){return t.e(0xc3500e70cf9,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(1364)})})}},1277:function(n,e,t){t(11),n.exports=function(n){return t.e(0xa89fa2370e20,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(1365)})})}},1278:function(n,e,t){t(11),n.exports=function(n){return t.e(0xcbb82d3aa488,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(1366)})})}},1279:function(n,e,t){t(11),n.exports=function(n){return t.e(0x9eefceb1c5be,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(1367)})})}},1280:function(n,e,t){t(11),n.exports=function(n){return t.e(0xe1e4bcdf92ee,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(1368)})})}},1281:function(n,e,t){t(11),n.exports=function(n){return t.e(0x5e3ec616e7df,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(1369)})})}},1282:function(n,e,t){t(11),n.exports=function(n){return t.e(0xd47632b8685d,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(1370)})})}},1283:function(n,e,t){t(11),n.exports=function(n){return t.e(83206809846738,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(1371)})})}},1284:function(n,e,t){t(11),n.exports=function(n){return t.e(0xdc3a479674e6,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(1372)})})}},1285:function(n,e,t){t(11),n.exports=function(n){return t.e(77435175060493,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(1373)})})}},1286:function(n,e,t){t(11),n.exports=function(n){return t.e(0xc641b59d517c,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(1374)})})}},1287:function(n,e,t){t(11),n.exports=function(n){return t.e(0x71344d9b6fe0,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(1375)})})}},1288:function(n,e,t){t(11),n.exports=function(n){return t.e(87895020720080,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(1376)})})}},1289:function(n,e,t){t(11),n.exports=function(n){return t.e(0x750c3312a721,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(1377)})})}},1290:function(n,e,t){t(11),n.exports=function(n){return t.e(78719806963390,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(1378)})})}},1291:function(n,e,t){t(11),n.exports=function(n){return t.e(0xed8aa8815f72,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(1379)})})}},1292:function(n,e,t){t(11),n.exports=function(n){return t.e(58926615894339,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(1380)})})}},1293:function(n,e,t){t(11),n.exports=function(n){return t.e(20261293278027,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(1381)})})}},1294:function(n,e,t){t(11),n.exports=function(n){return t.e(49467494473929,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(1382)})})}},1295:function(n,e,t){t(11),n.exports=function(n){return t.e(21200481898654,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(1383)})})}},1296:function(n,e,t){t(11),n.exports=function(n){return t.e(0x81b8806e4260,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(1384)})})}},1273:function(n,e,t){t(11),n.exports=function(n){return t.e(60335399758886,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(366)})})}},1297:function(n,e,t){t(11),n.exports=function(n){return t.e(43821659636450,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(1385)})})}},1269:function(n,e,t){t(11),n.exports=function(n){return t.e(0x67ef26645b2a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(1125)})})}},525:function(n,e,t){(function(n){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var r=t(1),a=(o(r),t(1123)),u=o(a),s=t(215),i=o(s),c=t(526),l=o(c),p=void 0,f={},d={},m={},h={},g={},y=[],v=[],x={},j="",w=[],R={},N=function(n){return n&&n.default||n},C=void 0,b=!0,k=[],_={},P={},E=5;C=t(1126)({getNextQueuedResources:function(){return w.slice(-1)[0]},createResourceDownload:function(n){L(n,function(){w=w.filter(function(e){return e!==n}),C.onResourcedFinished(n)})}}),i.default.on("onPreLoadPageResources",function(n){C.onPreLoadPageResources(n)}),i.default.on("onPostLoadPageResources",function(n){C.onPostLoadPageResources(n)});var O=function(n,e){return R[n]>R[e]?1:R[n]<R[e]?-1:0},T=function(n,e){return x[n]>x[e]?1:x[n]<x[e]?-1:0},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(h[e])n.nextTick(function(){t(null,h[e])});else{var o=void 0;o="component---"===e.slice(0,12)?d.components[e]:"layout---"===e.slice(0,9)?d.layouts[e]:d.json[e],o(function(n,o){h[e]=o,k.push({resource:e,succeeded:!n}),P[e]||(P[e]=n),k=k.slice(-E),t(n,o)})}},S=function(e,t){g[e]?n.nextTick(function(){t(null,g[e])}):P[e]?n.nextTick(function(){t(P[e])}):L(e,function(n,o){if(n)t(n);else{var r=N(o());g[e]=r,t(n,r)}})},D=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=k.find(function(n){return n.succeeded});return!!e},A=function(n,e){console.log(e),_[n]||(_[n]=e),D()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},U=1,M={empty:function(){v=[],x={},R={},w=[],y=[],j=""},addPagesArray:function(n){y=n,j="",p=(0,u.default)(n,j)},addDevRequires:function(n){f=n},addProdRequires:function(n){d=n},dequeue:function(){return v.pop()},enqueue:function(n){var e=(0,l.default)(n,j);if(!y.some(function(n){return n.path===e}))return!1;var t=1/U;U+=1,x[e]?x[e]+=1:x[e]=1,M.has(e)||v.unshift(e),v.sort(T);var o=p(e);return o.jsonName&&(R[o.jsonName]?R[o.jsonName]+=1+t:R[o.jsonName]=1+t,w.indexOf(o.jsonName)!==-1||h[o.jsonName]||w.unshift(o.jsonName)),o.componentChunkName&&(R[o.componentChunkName]?R[o.componentChunkName]+=1+t:R[o.componentChunkName]=1+t,w.indexOf(o.componentChunkName)!==-1||h[o.jsonName]||w.unshift(o.componentChunkName)),w.sort(O),C.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:w,resourcesCount:R}},getPages:function(){return{pathArray:v,pathCount:x}},getPage:function(n){return p(n)},has:function(n){return v.some(function(e){return e===n})},getResourcesForPathname:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};b&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(p(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,t=Array.isArray(e),o=0,e=t?e:e[Symbol.iterator]();;){var r;if(t){if(o>=e.length)break;r=e[o++]}else{if(o=e.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()}})),b=!1;if(_[e])return A(e,'Previously detected load failure for "'+e+'"'),t();var o=p(e);if(!o)return A(e,"A page wasn't found for \""+e+'"'),t();if(e=o.path,m[e])return n.nextTick(function(){t(m[e]),i.default.emit("onPostLoadPageResources",{page:o,pageResources:m[e]})}),m[e];i.default.emit("onPreLoadPageResources",{path:e});var r=void 0,a=void 0,u=void 0,s=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){m[e]={component:r,json:a,layout:u,page:o};var n={component:r,json:a,layout:u,page:o};t(n),i.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return S(o.componentChunkName,function(n,e){n&&A(o.path,"Loading the component for "+o.path+" failed"),r=e,s()}),S(o.jsonName,function(n,e){n&&A(o.path,"Loading the JSON for "+o.path+" failed"),a=e,s()}),void(o.layoutComponentChunkName&&S(o.layout,function(n,e){n&&A(o.path,"Loading the Layout for "+o.path+" failed"),u=e,s()}))},peek:function(n){return v.slice(-1)[0]},length:function(){return v.length},indexOf:function(n){return v.length-v.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:M.getResourcesForPathname};e.default=M}).call(e,t(171))},1386:function(n,e){n.exports=[{componentChunkName:"component---src-templates-docstemplate-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"assets-overview.json",path:"/assets/overview/"},{componentChunkName:"component---src-templates-docstemplate-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"assets-javascript.json",path:"/assets/javascript/"},{componentChunkName:"component---src-templates-docstemplate-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-templates-docstemplate-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"assets-svg.json",path:"/assets/svg/"},{componentChunkName:"component---src-templates-docstemplate-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"components-globals.json",path:"/components/globals/"},{componentChunkName:"component---src-templates-docstemplate-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"basics-introduction.json",path:"/basics/introduction/"},{componentChunkName:"component---src-templates-docstemplate-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"assets-images.json",path:"/assets/images/"},{componentChunkName:"component---src-templates-docstemplate-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"components-overview.json",path:"/components/overview/"},{componentChunkName:"component---src-templates-docstemplate-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"components-twig.json",path:"/components/twig/"},{componentChunkName:"component---src-templates-docstemplate-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"configurations-details.json",path:"/configurations/details/"},{componentChunkName:"component---src-templates-docstemplate-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"components-presentation.json",path:"/components/presentation/"},{componentChunkName:"component---src-templates-docstemplate-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"configurations-custom-webpack-config.json",path:"/configurations/custom-webpack-config/"},{componentChunkName:"component---src-templates-docstemplate-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"components-wingsuit.json",path:"/components/wingsuit/"},{componentChunkName:"component---src-templates-docstemplate-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"drupal-overview.json",path:"/drupal/overview/"},{componentChunkName:"component---src-templates-docstemplate-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"configurations-preset-webpack.json",path:"/configurations/preset-webpack/"},{componentChunkName:"component---src-templates-docstemplate-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"drupal-ui-patterns.json",path:"/drupal/ui_patterns/"},{componentChunkName:"component---src-templates-docstemplate-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"guides-create-component-guide.json",path:"/guides/create-component-guide/"},{componentChunkName:"component---src-templates-docstemplate-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"documentation-mdx.json",path:"/documentation/mdx/"},{componentChunkName:"component---src-templates-docstemplate-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"testing-manual-testing.json",path:"/testing/manual-testing/"},{componentChunkName:"component---src-templates-docstemplate-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"documentation-overview.json",path:"/documentation/overview/"},{componentChunkName:"component---src-templates-docstemplate-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"guides-quick-start-guide.json",path:"/guides/quick-start-guide/"},{componentChunkName:"component---src-templates-docstemplate-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"},{componentChunkName:"component---src-pages-examples-index-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"examples.json",path:"/examples/"},{componentChunkName:"component---src-pages-index-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"}]},1126:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,t=n.createResourceDownload,o=[],r=[],a=function(){var n=e();n&&(r.push(n),t(n))},u=function(n){switch(n.type){case"RESOURCE_FINISHED":r=r.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(n){u({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},a=t(316),u=t(1),s=o(u),i=t(117),c=o(i),l=t(231),p=t(1303),f=t(1239),d=o(f),m=t(77),h=t(1124),g=o(h),y=t(215),v=o(y),x=t(1386),j=o(x),w=t(1387),R=o(w),N=t(1122),C=o(N),b=t(1121),k=o(b),_=t(525),P=o(_);t(1161),window.___history=g.default,window.___emitter=v.default,P.default.addPagesArray(j.default),P.default.addProdRequires(k.default),window.asyncRequires=k.default,window.___loader=P.default,window.matchPath=l.matchPath;var E=R.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),O=function(n){var e=E[n];return null!=e&&(g.default.replace(e.toPath),!0)};O(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&i!==!1||(window.___history=n,i=!0,n.listen(function(n,e){O(n.pathname)||setTimeout(function(){(0,a.apiRunner)("onRouteUpdate",{location:n,action:e})},0)}))}function e(n,e){var t=e.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:t});if(o.length>0)return o[0];if(n){var r=n.location.pathname;if(r===t)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&t(1127);var o=function(n,e){function t(n){n.page.path===P.default.getPage(r).path&&(v.default.off("onPostLoadPageResources",t),clearTimeout(i),s(o))}var o=(0,m.createLocation)(n,null,null,g.default.location),r=o.pathname,a=E[r];a&&(r=a.toPath);var u=window.location;if(u.pathname!==o.pathname||u.search!==o.search||u.hash!==o.hash){var s=e?window.___history.replace:window.___history.push,i=setTimeout(function(){v.default.off("onPostLoadPageResources",t),v.default.emit("onDelayedLoadPageResources",{pathname:r}),s(o)},1e3);P.default.getResourcesForPathname(r)?(clearTimeout(i),s(o)):v.default.on("onPostLoadPageResources",t)}};window.___push=function(n){return o(n,!1)},window.___replace=function(n){return o(n,!0)},window.___navigateTo=window.___push,(0,a.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var i=!1,f=(0,a.apiRunner)("replaceRouterComponent",{history:g.default})[0],h=function(n){var e=n.children;return s.default.createElement(l.Router,{history:g.default},e)},y=(0,l.withRouter)(C.default);P.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(f?f:h,null,(0,u.createElement)(p.ScrollContext,{shouldUpdateScroll:e},(0,u.createElement)(y,{layout:!0,children:function(e){return(0,u.createElement)(l.Route,{render:function(t){n(t.history);var o=e?e:t;return P.default.getPage(o.location.pathname)?(0,u.createElement)(C.default,r({page:!0},o)):(0,u.createElement)(C.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:t},t)[0],i=(0,a.apiRunner)("replaceHydrateFunction",void 0,c.default.render)[0];(0,d.default)(function(){return i(s.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},1387:function(n,e){n.exports=[]},1127:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(215),a=o(r),u="/";u="/","serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},526:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n},n.exports=e.default},1128:function(n,e,t){"use strict";var o=t(59),r=o.document;e.onRouteUpdate=function(n){n.hash&&setTimeout(function(){r.querySelector(""+n.hash).scrollIntoView()},0)}},7:function(n,e){function t(n){return n&&n.__esModule?n:{default:n}}n.exports=t},1239:function(n,e,t){!function(e,t){n.exports=t()}("domready",function(){var n,e=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return a||t.addEventListener(r,n=function(){for(t.removeEventListener(r,n),a=1;n=e.shift();)n()}),function(n){a?setTimeout(n,0):e.push(n)}})},11:function(n,e,t){"use strict";function o(){function n(n){var e=o.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,o=document.querySelector("head"),r=t.e,a=t.s;t.e=function(o,u){var s=!1,i=!0,c=function(n){u&&(u(t,n),u=null)};return!a&&e&&e[o]?void c(!0):(r(o,function(){s||(s=!0,i?setTimeout(function(){c()}):c())}),void(s||(i=!1,n(function(){s||(s=!0,a?a[o]=void 0:(e||(e={}),e[o]=!0),c(!0))}))))}}o()},1298:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="production",r=void 0===o?"development":o;e.onRouteUpdate=function(n){n.location;return window.analytics&&"function"==typeof window.analytics.page?void window.analytics.page():void("development"===r&&console.warn("Unable to locate analytics.js"))}},1299:function(n,e,t){"use strict";var o=function(n){setTimeout(function(){var e=window.decodeURI(window.location.hash.replace("#",""));if(""!==e){var t=document.getElementById(e);if(t){var o=t.offsetTop;window.scrollTo(0,o-n)}}},10)};e.onClientEntry=function(n,e){var t=0;e.offsetY&&(t=e.offsetY)},e.onRouteUpdate=function(n,e){var t=0;e.offsetY&&(t=e.offsetY),o(t)}},59:function(n,e){(function(e){var t;t="undefined"!=typeof window?window:"undefined"!=typeof e?e:"undefined"!=typeof self?self:{},n.exports=t}).call(e,function(){return this}())},232:function(n,e){"use strict";function t(n,e,p){if("string"!=typeof e){if(l){var f=c(e);f&&f!==l&&t(n,f,p)}var d=u(e);s&&(d=d.concat(s(e)));for(var m=0;m<d.length;++m){var h=d[m];if(!(o[h]||r[h]||p&&p[h])){var g=i(e,h);try{a(n,h,g)}catch(n){}}}return n}return n}var o={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,u=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,l=c&&c(Object);n.exports=t},1524:function(n,e){function t(n){return n=n||Object.create(null),{on:function(e,t){(n[e]||(n[e]=[])).push(t)},off:function(e,t){n[e]&&n[e].splice(n[e].indexOf(t)>>>0,1)},emit:function(e,t){(n[e]||[]).slice().map(function(n){n(t)}),(n["*"]||[]).slice().map(function(n){n(e,t)})}}}n.exports=t},171:function(n,e){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(n){if(l===setTimeout)return setTimeout(n,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(n,0);try{return l(n,0)}catch(e){try{return l.call(null,n,0)}catch(e){return l.call(this,n,0)}}}function a(n){if(p===clearTimeout)return clearTimeout(n);if((p===o||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(n);try{return p(n)}catch(e){try{return p.call(null,n)}catch(e){return p.call(this,n)}}}function u(){h&&d&&(h=!1,d.length?m=d.concat(m):g=-1,m.length&&s())}function s(){if(!h){var n=r(u);h=!0;for(var e=m.length;e;){for(d=m,m=[];++g<e;)d&&d[g].run();g=-1,e=m.length}d=null,h=!1,a(n)}}function i(n,e){this.fun=n,this.array=e}function c(){}var l,p,f=n.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(n){l=t}try{p="function"==typeof clearTimeout?clearTimeout:o}catch(n){p=o}}();var d,m=[],h=!1,g=-1;f.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];m.push(new i(n,e)),1!==m.length||h||r(s)},i.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(n){return[]},f.binding=function(n){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(n){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},1678:function(n,e){"use strict";function t(n,e){for(var t in n)if(!(t in e))return!0;for(var o in e)if(n[o]!==e[o])return!0;return!1}e.__esModule=!0,e.default=function(n,e,o){return t(n.props,e)||t(n.state,o)},n.exports=e.default},423:function(n,e,t){"use strict";function o(n,e){if(!n){if(r)throw new Error(a);throw new Error(a+": "+(e||""))}}Object.defineProperty(e,"__esModule",{value:!0});var r=!0,a="Invariant failed";e.default=o},424:function(n,e,t){"use strict";function o(n,e){if(!r){if(n)return;var t="Warning: "+e;"undefined"!=typeof console&&console.warn(t);try{throw Error(t)}catch(n){}}}var r=!0;n.exports=o},1270:function(n,e,t){t(11),n.exports=function(n){return t.e(73261030922168,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(1144)})})}},1271:function(n,e,t){t(11),n.exports=function(n){return t.e(0xc23565d713b7,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(1145)})})}},1272:function(n,e,t){t(11),n.exports=function(n){return t.e(27180705640166,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(1146)})})}}});
//# sourceMappingURL=app-9ec15e502e78eb7d319c.js.map