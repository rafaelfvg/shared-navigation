/*! For license information please see index.js.LICENSE.txt */
(()=>{var e,t,r,n,o={540:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},674:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},noSSR:function(){return u}});const n=r(9929),o=r(4848),a=(r(4953),n._(r(5925))),i="undefined"==typeof window;function s(e){return{default:(null==e?void 0:e.default)||e}}function u(e,t){if(delete t.webpack,delete t.modules,!i)return e(t);const r=t.loading;return()=>(0,o.jsx)(r,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}function l(e,t){let r=a.default,n={loading:e=>{let{error:t,isLoading:r,pastDelay:n}=e;return null}};e instanceof Promise?n.loader=()=>e:"function"==typeof e?n.loader=e:"object"==typeof e&&(n={...n,...e}),n={...n,...t};const o=n.loader;return n.loadableGenerated&&(n={...n,...n.loadableGenerated},delete n.loadableGenerated),"boolean"!=typeof n.ssr||n.ssr?r({...n,loader:()=>null!=o?o().then(s):Promise.resolve(s((()=>null)))}):(delete n.webpack,delete n.modules,u(r,n))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1113:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},1479:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return n}});const n=r(9929)._(r(4953)).default.createContext(null)},1601:e=>{"use strict";e.exports=function(e){return e[1]}},2694:(e,t,r)=>{"use strict";var n=r(6925);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},4848:(e,t,r)=>{"use strict";e.exports=r(9698)},4953:e=>{"use strict";e.exports=require("react")},5056:(e,t,r)=>{"use strict";e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},5072:e=>{"use strict";var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},i=[],s=0;s<e.length;s++){var u=e[s],l=n.base?u[0]+n.base:u[0],c=a[l]||0,d="".concat(l," ").concat(c);a[l]=c+1;var f=r(d),p={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var m=o(p,n);n.byIndex=s,t.splice(s,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=r(a[i]);t[s].references--}for(var u=n(e,o),l=0;l<a.length;l++){var c=r(a[l]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}a=u}}},5556:(e,t,r)=>{e.exports=r(2694)()},5925:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return f}});const n=r(9929)._(r(4953)),o=r(1479),a=[],i=[];let s=!1;function u(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((e=>(r.loading=!1,r.loaded=e,e))).catch((e=>{throw r.loading=!1,r.error=e,e})),r}class l{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};const{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout((()=>{this._update({pastDelay:!0})}),t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout((()=>{this._update({timedOut:!0})}),t.timeout))),this._res.promise.then((()=>{this._update({}),this._clearTimeouts()})).catch((e=>{this._update({}),this._clearTimeouts()})),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach((e=>e()))}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),u=null;function c(){if(!u){const t=new l(e,r);u={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return u.promise()}if("undefined"==typeof window&&a.push(c),!s&&"undefined"!=typeof window){const e=r.webpack?r.webpack():r.modules;e&&i.push((t=>{for(const r of e)if(t.includes(r))return c()}))}function d(e,t){!function(){c();const e=n.default.useContext(o.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach((t=>{e(t)}))}();const a=n.default.useSyncExternalStore(u.subscribe,u.getCurrentValue,u.getCurrentValue);return n.default.useImperativeHandle(t,(()=>({retry:u.retry})),[]),n.default.useMemo((()=>{return a.loading||a.error?n.default.createElement(r.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:u.retry}):a.loaded?n.default.createElement((t=a.loaded)&&t.default?t.default:t,e):null;var t}),[e,a])}return d.preload=()=>c(),d.displayName="LoadableComponent",n.default.forwardRef(d)}(u,e)}function d(e,t){let r=[];for(;e.length;){let n=e.pop();r.push(n(t))}return Promise.all(r).then((()=>{if(e.length)return d(e,t)}))}c.preloadAll=()=>new Promise(((e,t)=>{d(a).then(e,t)})),c.preloadReady=e=>(void 0===e&&(e=[]),new Promise((t=>{const r=()=>(s=!0,t());d(i,e).then(r,r)}))),"undefined"!=typeof window&&(window.__NEXT_PRELOADREADY=c.preloadReady);const f=c},6314:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var u=this[s][0];null!=u&&(i[u]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);n&&i[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),r&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=r):c[2]=r),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),t.push(c))}},t}},6523:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var n=r(1601),o=r.n(n),a=r(6314),i=r.n(a)()(o());i.push([e.id,".sidebar {\n  width: 250px;\n  background-color: #f0f0f0;\n  padding: 1rem;\n}\n\n.sidebar-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.sidebar-item {\n  margin-bottom: 0.5rem;\n}\n\n.submenu-title {\n  display: flex;\n  justify-content: space-between;\n  cursor: pointer;\n  padding: 0.5rem;\n  background-color: #ddd;\n}\n\n.submenu-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  margin-top: 0.5rem;\n}\n\n.submenu-item a {\n  display: block;\n  padding: 0.5rem 1rem;\n  text-decoration: none;\n  color: #333;\n}\n\n.submenu-item a:hover {\n  background-color: #eee;\n}\n\n.arrow {\n  font-size: 0.8rem;\n}",""]);const s=i},6925:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},7334:(e,t,r)=>{e.exports=r(674)},7659:e=>{"use strict";var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},7825:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},9698:(e,t)=>{"use strict";var r=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function o(e,t,n){var o=null;if(void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),"key"in t)for(var a in n={},t)"key"!==a&&(n[a]=t[a]);else n=t;return t=n.ref,{$$typeof:r,type:e,key:o,ref:void 0!==t?t:null,props:n}}t.Fragment=n,t.jsx=o,t.jsxs=o},9929:(e,t)=>{"use strict";t._=function(e){return e&&e.__esModule?e:{default:e}}}},a={};function i(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={id:e,exports:{}};return o[e](r,r.exports,i),r.exports}i.m=o,i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"==typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"==typeof r.then)return r}var o=Object.create(null);i.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&n&&r;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>a[e]=()=>r[e]));return a.default=()=>r,i.d(o,a),o},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>e+".index.js",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},n="shared-navigation-rafaelfvg:",i.l=(e,t,o,a)=>{if(r[e])r[e].push(t);else{var s,u;if(void 0!==o)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==n+o){s=d;break}}s||(u=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",n+o),s.src=e),r[e]=[t];var f=(t,n)=>{s.onerror=s.onload=null,clearTimeout(p);var o=r[e];if(delete r[e],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(n))),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{var e={792:0};i.f.j=(t,r)=>{var n=i.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var a=i.p+i.u(t),s=new Error;i.l(a,(r=>{if(i.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,n[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,o,[a,s,u]=r,l=0;if(a.some((t=>0!==e[t]))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);u&&u(i)}for(t&&t(r);l<a.length;l++)o=a[l],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkshared_navigation_rafaelfvg=self.webpackChunkshared_navigation_rafaelfvg||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),i.nc=void 0;var s={};(()=>{"use strict";i.r(s),i.d(s,{default:()=>x});var e=i(4953),t=i.n(e),r=i(7334),n=i.n(r),o=i(5556),a=i.n(o),u=i(5072),l=i.n(u),c=i(7825),d=i.n(c),f=i(7659),p=i.n(f),m=i(5056),y=i.n(m),b=i(540),h=i.n(b),v=i(1113),g=i.n(v),_=i(6523),O={};function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){S(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function S(e,t,r){return(t=function(e){var t=function(e){if("object"!=w(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==w(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}O.styleTagTransform=g(),O.setAttributes=y(),O.insert=p().bind(null,"head"),O.domAPI=d(),O.insertStyleElement=h(),l()(_.A,O),_.A&&_.A.locals&&_.A.locals;var T=n()((function(){return i.e(106).then(i.t.bind(i,1106,23))}),{ssr:!1}),k=function(r){var n,o,a=r.items,i=r.userPermissions,s=(n=(0,e.useState)({}),o=2,function(e){if(Array.isArray(e))return e}(n)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,s=[],u=!0,l=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(s.push(n.value),s.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw o}}return s}}(n,o)||function(e,t){if(e){if("string"==typeof e)return E(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?E(e,t):void 0}}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=s[0],l=s[1],c=function(e){return e.some((function(e){return i.includes(e)}))};return a?t().createElement("aside",{className:"sidebar"},t().createElement("ul",{className:"sidebar-list"},a.map((function(e){if(!c(e.permissions))return null;var r=T||"a";return e.submenu?t().createElement("li",{key:e.name,className:"sidebar-item"},t().createElement("div",{className:"submenu-title",onClick:function(){return t=e.name,void l((function(e){return P(P({},e),{},S({},t,!e[t]))}));var t}},e.name,t().createElement("span",{className:"arrow"},u[e.name]?"▲":"▼")),u[e.name]&&t().createElement("ul",{className:"submenu-list"},e.submenu.map((function(e){return c(e.permissions)?t().createElement("li",{key:e.name,className:"submenu-item"},t().createElement(r,{href:e.href},e.name)):null})))):t().createElement("li",{key:e.name,className:"sidebar-item"},t().createElement(r,{href:e.href},e.name))})))):null};k.propTypes={items:a().arrayOf(a().shape({name:a().string.isRequired,href:a().string.isRequired,permissions:a().arrayOf(a().string).isRequired,submenu:a().arrayOf(a().shape({name:a().string.isRequired,href:a().string.isRequired,permissions:a().arrayOf(a().string).isRequired}))})).isRequired,userPermissions:a().arrayOf(a().string).isRequired};const x=k})(),module.exports=s})();