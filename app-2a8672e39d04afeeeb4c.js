webpackJsonp([0xd2a57dc1d883],{177:function(e,n,t){"use strict";function o(e,n,t){var o=a.map(function(t){if(t.plugin[e]){var o=t.plugin[e](n,t.options);return o}});return o=o.filter(function(e){return"undefined"!=typeof e}),o.length>0?o:t?[t]:[]}function r(e,n,t){return a.reduce(function(t,o){return o.plugin[e]?t.then(function(){return o.plugin[e](n,o.options)}):t},Promise.resolve())}n.__esModule=!0,n.apiRunner=o,n.apiRunnerAsync=r;var a=[{plugin:t(613),options:{plugins:[]}},{plugin:t(612),options:{plugins:[],writeKey:"Yp6DgNNFnTRzWk9yDOLFdMyrbeGInjYp"}},{plugin:t(451),options:{plugins:[]}}]},444:function(e,n,t){"use strict";n.components={"component---src-templates-docstemplate-jsx":t(587),"component---src-pages-examples-index-jsx":t(585),"component---src-pages-index-jsx":t(586)},n.json={"layout-index.json":t(588),"assets-javascript.json":t(592),"assets-images.json":t(591),"404.json":t(589),"components-globals.json":t(596),"assets-overview.json":t(593),"components-overview.json":t(597),"assets-svg.json":t(594),"components-presentation.json":t(598),"components-twig.json":t(599),"components-wingsuit.json":t(600),"configurations-custom-webpack-config.json":t(601),"configurations-details.json":t(602),"drupal-ui-patterns.json":t(606),"basics-introduction.json":t(595),"configurations-preset-webpack.json":t(603),"drupal-overview.json":t(604),"drupal-presenter.json":t(605),"guides-create-component-guide.json":t(608),"guides-quick-start-guide.json":t(609),"testing-manual-testing.json":t(611),"404-html.json":t(590),"examples.json":t(607),"index.json":t(610)},n.layouts={"layout---index":t(584)}},445:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function u(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}n.__esModule=!0;var s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},i=t(1),c=o(i),l=t(3),p=o(l),f=t(294),d=o(f),m=t(130),h=o(m),g=t(177),y=t(851),v=o(y),x=function(e){var n=e.children;return c.default.createElement("div",null,n())},j=function(e){function n(t){r(this,n);var o=a(this,e.call(this)),u=t.location;return d.default.getPage(u.pathname)||(u=s({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},o}return u(n,e),n.prototype.componentWillReceiveProps=function(e){var n=this;if(this.state.location.pathname!==e.location.pathname){var t=d.default.getResourcesForPathname(e.location.pathname);if(t)this.setState({location:e.location,pageResources:t});else{var o=e.location;d.default.getPage(o.pathname)||(o=s({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(e){n.setState({location:o,pageResources:e})})}}},n.prototype.componentDidMount=function(){var e=this;h.default.on("onPostLoadPageResources",function(n){d.default.getPage(e.state.location.pathname)&&n.page.path===d.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:n.pageResources})})},n.prototype.shouldComponentUpdate=function(e,n){return!n.pageResources||(!(this.state.pageResources||!n.pageResources)||(this.state.pageResources.component!==n.pageResources.component||(this.state.pageResources.json!==n.pageResources.json||(!(this.state.location.key===n.location.key||!n.pageResources.page||!n.pageResources.page.matchPath&&!n.pageResources.page.path)||(0,v.default)(this,e,n)))))},n.prototype.render=function(){var e=(0,g.apiRunner)("replaceComponentRenderer",{props:s({},this.props,{pageResources:this.state.pageResources}),loader:f.publicLoader}),n=e[0];return this.props.page?this.state.pageResources?n||(0,i.createElement)(this.state.pageResources.component,s({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?n||(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:x,s({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},n}(c.default.Component);j.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},n.default=j,e.exports=n.default},130:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(793),a=o(r),u=(0,a.default)();e.exports=u},446:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(157),a=t(295),u=o(a),s={};e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var o=decodeURIComponent(t),a=(0,u.default)(o,n);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),s[a])return s[a];var i=void 0;return e.some(function(e){if(e.matchPath){if((0,r.matchPath)(a,{path:e.path})||(0,r.matchPath)(a,{path:e.matchPath}))return i=e,s[a]=e,!0}else{if((0,r.matchPath)(a,{path:e.path,exact:!0}))return i=e,s[a]=e,!0;if((0,r.matchPath)(a,{path:e.path+"index.html"}))return i=e,s[a]=e,!0}return!1}),i}}},447:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(701),a=o(r),u=t(177),s=(0,u.apiRunner)("replaceHistory"),i=s[0],c=i||(0,a.default)();e.exports=c},590:function(e,n,t){t(8),e.exports=function(e){return t.e(0xa2868bfb69fc,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(745)})})}},589:function(e,n,t){t(8),e.exports=function(e){return t.e(0xe70826b53c04,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(746)})})}},591:function(e,n,t){t(8),e.exports=function(e){return t.e(0xc3500e70cf9,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(747)})})}},592:function(e,n,t){t(8),e.exports=function(e){return t.e(0xa89fa2370e20,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(748)})})}},593:function(e,n,t){t(8),e.exports=function(e){return t.e(0xcbb82d3aa488,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(749)})})}},594:function(e,n,t){t(8),e.exports=function(e){return t.e(0x9eefceb1c5be,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(750)})})}},595:function(e,n,t){t(8),e.exports=function(e){return t.e(0xe1e4bcdf92ee,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(751)})})}},596:function(e,n,t){t(8),e.exports=function(e){return t.e(0x5e3ec616e7df,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(752)})})}},597:function(e,n,t){t(8),e.exports=function(e){return t.e(0xd47632b8685d,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(753)})})}},598:function(e,n,t){t(8),e.exports=function(e){return t.e(83206809846738,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(754)})})}},599:function(e,n,t){t(8),e.exports=function(e){return t.e(0xdc3a479674e6,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(755)})})}},600:function(e,n,t){t(8),e.exports=function(e){return t.e(77435175060493,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(756)})})}},601:function(e,n,t){t(8),e.exports=function(e){return t.e(0xc641b59d517c,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(757)})})}},602:function(e,n,t){t(8),e.exports=function(e){return t.e(0x71344d9b6fe0,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(758)})})}},603:function(e,n,t){t(8),e.exports=function(e){return t.e(87895020720080,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(759)})})}},604:function(e,n,t){t(8),e.exports=function(e){return t.e(0xed8aa8815f72,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(760)})})}},605:function(e,n,t){t(8),e.exports=function(e){return t.e(0xcb80a8291676,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(761)})})}},606:function(e,n,t){t(8),e.exports=function(e){return t.e(58926615894339,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(762)})})}},607:function(e,n,t){t(8),e.exports=function(e){return t.e(20261293278027,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(763)})})}},608:function(e,n,t){t(8),e.exports=function(e){return t.e(49467494473929,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(764)})})}},609:function(e,n,t){t(8),e.exports=function(e){return t.e(21200481898654,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(765)})})}},610:function(e,n,t){t(8),e.exports=function(e){return t.e(0x81b8806e4260,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(766)})})}},588:function(e,n,t){t(8),e.exports=function(e){return t.e(60335399758886,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(252)})})}},611:function(e,n,t){t(8),e.exports=function(e){return t.e(43821659636450,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(767)})})}},584:function(e,n,t){t(8),e.exports=function(e){return t.e(0x67ef26645b2a,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(448)})})}},294:function(e,n,t){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0,n.publicLoader=void 0;var r=t(1),a=(o(r),t(446)),u=o(a),s=t(130),i=o(s),c=t(295),l=o(c),p=void 0,f={},d={},m={},h={},g={},y=[],v=[],x={},j="",w=[],R={},N=function(e){return e&&e.default||e},b=void 0,C=!0,_=[],k={},P={},E=5;b=t(449)({getNextQueuedResources:function(){return w.slice(-1)[0]},createResourceDownload:function(e){L(e,function(){w=w.filter(function(n){return n!==e}),b.onResourcedFinished(e)})}}),i.default.on("onPreLoadPageResources",function(e){b.onPreLoadPageResources(e)}),i.default.on("onPostLoadPageResources",function(e){b.onPostLoadPageResources(e)});var O=function(e,n){return R[e]>R[n]?1:R[e]<R[n]?-1:0},T=function(e,n){return x[e]>x[n]?1:x[e]<x[n]?-1:0},L=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(h[n])e.nextTick(function(){t(null,h[n])});else{var o=void 0;o="component---"===n.slice(0,12)?d.components[n]:"layout---"===n.slice(0,9)?d.layouts[n]:d.json[n],o(function(e,o){h[n]=o,_.push({resource:n,succeeded:!e}),P[n]||(P[n]=e),_=_.slice(-E),t(e,o)})}},S=function(n,t){g[n]?e.nextTick(function(){t(null,g[n])}):P[n]?e.nextTick(function(){t(P[n])}):L(n,function(e,o){if(e)t(e);else{var r=N(o());g[n]=r,t(e,r)}})},D=function(){var e=navigator.onLine;if("boolean"==typeof e)return e;var n=_.find(function(e){return e.succeeded});return!!n},A=function(e,n){console.log(n),k[e]||(k[e]=n),D()&&window.location.pathname.replace(/\/$/g,"")!==e.replace(/\/$/g,"")&&(window.location.pathname=e)},U=1,M={empty:function(){v=[],x={},R={},w=[],y=[],j=""},addPagesArray:function(e){y=e,j="",p=(0,u.default)(e,j)},addDevRequires:function(e){f=e},addProdRequires:function(e){d=e},dequeue:function(){return v.pop()},enqueue:function(e){var n=(0,l.default)(e,j);if(!y.some(function(e){return e.path===n}))return!1;var t=1/U;U+=1,x[n]?x[n]+=1:x[n]=1,M.has(n)||v.unshift(n),v.sort(T);var o=p(n);return o.jsonName&&(R[o.jsonName]?R[o.jsonName]+=1+t:R[o.jsonName]=1+t,w.indexOf(o.jsonName)!==-1||h[o.jsonName]||w.unshift(o.jsonName)),o.componentChunkName&&(R[o.componentChunkName]?R[o.componentChunkName]+=1+t:R[o.componentChunkName]=1+t,w.indexOf(o.componentChunkName)!==-1||h[o.jsonName]||w.unshift(o.componentChunkName)),w.sort(O),b.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:w,resourcesCount:R}},getPages:function(){return{pathArray:v,pathCount:x}},getPage:function(e){return p(e)},has:function(e){return v.some(function(n){return n===e})},getResourcesForPathname:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};C&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(p(n)||navigator.serviceWorker.getRegistrations().then(function(e){if(e.length){for(var n=e,t=Array.isArray(n),o=0,n=t?n:n[Symbol.iterator]();;){var r;if(t){if(o>=n.length)break;r=n[o++]}else{if(o=n.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()}})),C=!1;if(k[n])return A(n,'Previously detected load failure for "'+n+'"'),t();var o=p(n);if(!o)return A(n,"A page wasn't found for \""+n+'"'),t();if(n=o.path,m[n])return e.nextTick(function(){t(m[n]),i.default.emit("onPostLoadPageResources",{page:o,pageResources:m[n]})}),m[n];i.default.emit("onPreLoadPageResources",{path:n});var r=void 0,a=void 0,u=void 0,s=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){m[n]={component:r,json:a,layout:u,page:o};var e={component:r,json:a,layout:u,page:o};t(e),i.default.emit("onPostLoadPageResources",{page:o,pageResources:e})}};return S(o.componentChunkName,function(e,n){e&&A(o.path,"Loading the component for "+o.path+" failed"),r=n,s()}),S(o.jsonName,function(e,n){e&&A(o.path,"Loading the JSON for "+o.path+" failed"),a=n,s()}),void(o.layoutComponentChunkName&&S(o.layout,function(e,n){e&&A(o.path,"Loading the Layout for "+o.path+" failed"),u=n,s()}))},peek:function(e){return v.slice(-1)[0]},length:function(){return v.length},indexOf:function(e){return v.length-v.indexOf(e)-1}};n.publicLoader={getResourcesForPathname:M.getResourcesForPathname};n.default=M}).call(n,t(116))},768:function(e,n){e.exports=[{componentChunkName:"component---src-templates-docstemplate-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"assets-javascript.json",path:"/assets/javascript/"},{componentChunkName:"component---src-templates-docstemplate-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"assets-images.json",path:"/assets/images/"},{componentChunkName:"component---src-templates-docstemplate-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-templates-docstemplate-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"components-globals.json",path:"/components/globals/"},{componentChunkName:"component---src-templates-docstemplate-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"assets-overview.json",path:"/assets/overview/"},{componentChunkName:"component---src-templates-docstemplate-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"components-overview.json",path:"/components/overview/"},{componentChunkName:"component---src-templates-docstemplate-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"assets-svg.json",path:"/assets/svg/"},{componentChunkName:"component---src-templates-docstemplate-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"components-presentation.json",path:"/components/presentation/"},{componentChunkName:"component---src-templates-docstemplate-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"components-twig.json",path:"/components/twig/"},{componentChunkName:"component---src-templates-docstemplate-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"components-wingsuit.json",path:"/components/wingsuit/"},{componentChunkName:"component---src-templates-docstemplate-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"configurations-custom-webpack-config.json",path:"/configurations/custom-webpack-config/"},{componentChunkName:"component---src-templates-docstemplate-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"configurations-details.json",path:"/configurations/details/"},{componentChunkName:"component---src-templates-docstemplate-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"drupal-ui-patterns.json",path:"/drupal/ui_patterns/"},{componentChunkName:"component---src-templates-docstemplate-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"basics-introduction.json",path:"/basics/introduction/"},{componentChunkName:"component---src-templates-docstemplate-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"configurations-preset-webpack.json",path:"/configurations/preset-webpack/"},{componentChunkName:"component---src-templates-docstemplate-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"drupal-overview.json",path:"/drupal/overview/"},{componentChunkName:"component---src-templates-docstemplate-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"drupal-presenter.json",path:"/drupal/presenter/"},{componentChunkName:"component---src-templates-docstemplate-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"guides-create-component-guide.json",path:"/guides/create-component-guide/"},{componentChunkName:"component---src-templates-docstemplate-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"guides-quick-start-guide.json",path:"/guides/quick-start-guide/"},{componentChunkName:"component---src-templates-docstemplate-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"testing-manual-testing.json",path:"/testing/manual-testing/"},{componentChunkName:"component---src-templates-docstemplate-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"},{componentChunkName:"component---src-pages-examples-index-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"examples.json",path:"/examples/"},{componentChunkName:"component---src-pages-index-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"}]},449:function(e,n){"use strict";e.exports=function(e){var n=e.getNextQueuedResources,t=e.createResourceDownload,o=[],r=[],a=function(){var e=n();e&&(r.push(e),t(e))},u=function(e){switch(e.type){case"RESOURCE_FINISHED":r=r.filter(function(n){return n!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(n){return n!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(e){u({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a=t(177),u=t(1),s=o(u),i=t(79),c=o(i),l=t(157),p=t(687),f=t(557),d=o(f),m=t(56),h=t(447),g=o(h),y=t(130),v=o(y),x=t(768),j=o(x),w=t(769),R=o(w),N=t(445),b=o(N),C=t(444),_=o(C),k=t(294),P=o(k);t(614),window.___history=g.default,window.___emitter=v.default,P.default.addPagesArray(j.default),P.default.addProdRequires(_.default),window.asyncRequires=_.default,window.___loader=P.default,window.matchPath=l.matchPath;var E=R.default.reduce(function(e,n){return e[n.fromPath]=n,e},{}),O=function(e){var n=E[e];return null!=n&&(g.default.replace(n.toPath),!0)};O(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history&&i!==!1||(window.___history=e,i=!0,e.listen(function(e,n){O(e.pathname)||setTimeout(function(){(0,a.apiRunner)("onRouteUpdate",{location:e,action:n})},0)}))}function n(e,n){var t=n.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:t});if(o.length>0)return o[0];if(e){var r=e.location.pathname;if(r===t)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&t(450);var o=function(e,n){function t(e){e.page.path===P.default.getPage(r).path&&(v.default.off("onPostLoadPageResources",t),clearTimeout(i),s(o))}var o=(0,m.createLocation)(e,null,null,g.default.location),r=o.pathname,a=E[r];a&&(r=a.toPath);var u=window.location;if(u.pathname!==o.pathname||u.search!==o.search||u.hash!==o.hash){var s=n?window.___history.replace:window.___history.push,i=setTimeout(function(){v.default.off("onPostLoadPageResources",t),v.default.emit("onDelayedLoadPageResources",{pathname:r}),s(o)},1e3);P.default.getResourcesForPathname(r)?(clearTimeout(i),s(o)):v.default.on("onPostLoadPageResources",t)}};window.___push=function(e){return o(e,!1)},window.___replace=function(e){return o(e,!0)},window.___navigateTo=window.___push,(0,a.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var i=!1,f=(0,a.apiRunner)("replaceRouterComponent",{history:g.default})[0],h=function(e){var n=e.children;return s.default.createElement(l.Router,{history:g.default},n)},y=(0,l.withRouter)(b.default);P.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(f?f:h,null,(0,u.createElement)(p.ScrollContext,{shouldUpdateScroll:n},(0,u.createElement)(y,{layout:!0,children:function(n){return(0,u.createElement)(l.Route,{render:function(t){e(t.history);var o=n?n:t;return P.default.getPage(o.location.pathname)?(0,u.createElement)(b.default,r({page:!0},o)):(0,u.createElement)(b.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:t},t)[0],i=(0,a.apiRunner)("replaceHydrateFunction",void 0,c.default.render)[0];(0,d.default)(function(){return i(s.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},769:function(e,n){e.exports=[]},450:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(130),a=o(r),u="/";u="/","serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var n=e.installing;console.log("installingWorker",n),n.addEventListener("statechange",function(){switch(n.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},295:function(e,n){"use strict";n.__esModule=!0,n.default=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.substr(0,n.length)===n?e.slice(n.length):e},e.exports=n.default},451:function(e,n,t){"use strict";var o=t(55),r=o.document;n.onRouteUpdate=function(e){e.hash&&setTimeout(function(){r.querySelector(""+e.hash).scrollIntoView()},0)}},17:function(e,n){function t(e){return e&&e.__esModule?e:{default:e}}e.exports=t},557:function(e,n,t){!function(n,t){e.exports=t()}("domready",function(){var e,n=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return a||t.addEventListener(r,e=function(){for(t.removeEventListener(r,e),a=1;e=n.shift();)e()}),function(e){a?setTimeout(e,0):n.push(e)}})},8:function(e,n,t){"use strict";function o(){function e(e){var n=o.lastChild;return"SCRIPT"!==n.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",n)):void(n.onload=n.onerror=function(){n.onload=n.onerror=null,setTimeout(e,0)})}var n,o=document.querySelector("head"),r=t.e,a=t.s;t.e=function(o,u){var s=!1,i=!0,c=function(e){u&&(u(t,e),u=null)};return!a&&n&&n[o]?void c(!0):(r(o,function(){s||(s=!0,i?setTimeout(function(){c()}):c())}),void(s||(i=!1,e(function(){s||(s=!0,a?a[o]=void 0:(n||(n={}),n[o]=!0),c(!0))}))))}}o()},612:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o="production",r=void 0===o?"development":o;n.onRouteUpdate=function(e){e.location;return window.analytics&&"function"==typeof window.analytics.page?void window.analytics.page():void("development"===r&&console.warn("Unable to locate analytics.js"))}},613:function(e,n,t){"use strict";var o=function(e){setTimeout(function(){var n=window.decodeURI(window.location.hash.replace("#",""));if(""!==n){var t=document.getElementById(n);if(t){var o=t.offsetTop;window.scrollTo(0,o-e)}}},10)};n.onClientEntry=function(e,n){var t=0;n.offsetY&&(t=n.offsetY)},n.onRouteUpdate=function(e,n){var t=0;n.offsetY&&(t=n.offsetY),o(t)}},55:function(e,n){(function(n){var t;t="undefined"!=typeof window?window:"undefined"!=typeof n?n:"undefined"!=typeof self?self:{},e.exports=t}).call(n,function(){return this}())},158:function(e,n){"use strict";function t(e,n,p){if("string"!=typeof n){if(l){var f=c(n);f&&f!==l&&t(e,f,p)}var d=u(n);s&&(d=d.concat(s(n)));for(var m=0;m<d.length;++m){var h=d[m];if(!(o[h]||r[h]||p&&p[h])){var g=i(n,h);try{a(e,h,g)}catch(e){}}}return e}return e}var o={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,u=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,l=c&&c(Object);e.exports=t},793:function(e,n){function t(e){return e=e||Object.create(null),{on:function(n,t){(e[n]||(e[n]=[])).push(t)},off:function(n,t){e[n]&&e[n].splice(e[n].indexOf(t)>>>0,1)},emit:function(n,t){(e[n]||[]).slice().map(function(e){e(t)}),(e["*"]||[]).slice().map(function(e){e(n,t)})}}}e.exports=t},116:function(e,n){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(n){try{return l.call(null,e,0)}catch(n){return l.call(this,e,0)}}}function a(e){if(p===clearTimeout)return clearTimeout(e);if((p===o||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{return p(e)}catch(n){try{return p.call(null,e)}catch(n){return p.call(this,e)}}}function u(){h&&d&&(h=!1,d.length?m=d.concat(m):g=-1,m.length&&s())}function s(){if(!h){var e=r(u);h=!0;for(var n=m.length;n;){for(d=m,m=[];++g<n;)d&&d[g].run();g=-1,n=m.length}d=null,h=!1,a(e)}}function i(e,n){this.fun=e,this.array=n}function c(){}var l,p,f=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(e){l=t}try{p="function"==typeof clearTimeout?clearTimeout:o}catch(e){p=o}}();var d,m=[],h=!1,g=-1;f.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];m.push(new i(e,n)),1!==m.length||h||r(s)},i.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},851:function(e,n){"use strict";function t(e,n){for(var t in e)if(!(t in n))return!0;for(var o in n)if(e[o]!==n[o])return!0;return!1}n.__esModule=!0,n.default=function(e,n,o){return t(e.props,n)||t(e.state,o)},e.exports=n.default},277:function(e,n,t){"use strict";function o(e,n){if(!e){if(r)throw new Error(a);throw new Error(a+": "+(n||""))}}Object.defineProperty(n,"__esModule",{value:!0});var r=!0,a="Invariant failed";n.default=o},278:function(e,n,t){"use strict";function o(e,n){if(!r){if(e)return;var t="Warning: "+n;"undefined"!=typeof console&&console.warn(t);try{throw Error(t)}catch(e){}}}var r=!0;e.exports=o},585:function(e,n,t){t(8),e.exports=function(e){return t.e(73261030922168,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(467)})})}},586:function(e,n,t){t(8),e.exports=function(e){return t.e(0xc23565d713b7,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(468)})})}},587:function(e,n,t){t(8),e.exports=function(e){return t.e(27180705640166,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(469)})})}}});
//# sourceMappingURL=app-2a8672e39d04afeeeb4c.js.map