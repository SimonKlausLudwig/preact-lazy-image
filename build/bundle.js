!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s="pwNi")}({BtxX:function(e){!function(t){function n(){}function o(e,t){return function(){e.apply(t,arguments)}}function r(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(e,this)}function i(e,t){for(;3===e._state;)e=e._value;if(0===e._state)return void e._deferreds.push(t);e._handled=!0,r._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null===n)return void(1===e._state?u:c)(t.promise,e._value);var o;try{o=n(e._value)}catch(e){return void c(t.promise,e)}u(t.promise,o)})}function u(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof r)return e._state=3,e._value=t,void a(e);if("function"==typeof n)return void l(o(n,t),e)}e._state=1,e._value=t,a(e)}catch(t){c(e,t)}}function c(e,t){e._state=2,e._value=t,a(e)}function a(e){2===e._state&&0===e._deferreds.length&&r._immediateFn(function(){e._handled||r._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)i(e,e._deferreds[t]);e._deferreds=null}function s(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function l(e,t){var n=!1;try{e(function(e){n||(n=!0,u(t,e))},function(e){n||(n=!0,c(t,e))})}catch(e){if(n)return;n=!0,c(t,e)}}var f=setTimeout;r.prototype.catch=function(e){return this.then(null,e)},r.prototype.then=function(e,t){var o=new this.constructor(n);return i(this,new s(e,t,o)),o},r.all=function(e){var t=Array.prototype.slice.call(e);return new r(function(e,n){function o(i,u){try{if(u&&("object"==typeof u||"function"==typeof u)){var c=u.then;if("function"==typeof c)return void c.call(u,function(e){o(i,e)},n)}t[i]=u,0==--r&&e(t)}catch(e){n(e)}}if(0===t.length)return e([]);for(var r=t.length,i=0;i<t.length;i++)o(i,t[i])})},r.resolve=function(e){return e&&"object"==typeof e&&e.constructor===r?e:new r(function(t){t(e)})},r.reject=function(e){return new r(function(t,n){n(e)})},r.race=function(e){return new r(function(t,n){for(var o=0,r=e.length;o<r;o++)e[o].then(t,n)})},r._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){f(e,0)},r._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},r._setImmediateFn=function(e){r._immediateFn=e},r._setUnhandledRejectionFn=function(e){r._unhandledRejectionFn=e},void 0!==e&&e.exports?e.exports=r:t.Promise||(t.Promise=r)}(this)},JkW7:function(e,t,n){"use strict";function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n("KM04"),u=n.n(i),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(e){return e.replace(/-([a-z])/gi,function(e,t){return t.toUpperCase()})},s=function(){return document.currentScript||function(){var e=document.getElementsByTagName("script");return e[e.length-1]}()},l=function(e){var t=e.attributes,n={};return Object.keys(t).forEach(function(e){if(t.hasOwnProperty(e)){var o=t[e].name;if(!o||"string"!=typeof o)return!1;var r=o.split(/(data-props?-)/).pop()||"";if(r=a(r),o!==r){n[r]=t[e].nodeValue}}}),[].forEach.call(e.getElementsByTagName("script"),function(e){var t={};if(e.hasAttribute("type")){if("text/props"!==e.getAttribute("type"))return;try{t=JSON.parse(e.innerHTML)}catch(e){throw new Error(e)}c(n,t)}}),n},f=function(e){var t=e.attributes,n=null;return Object.keys(t).forEach(function(e){if(t.hasOwnProperty(e)){"data-mount-in"===t[e].name&&(n=t[e].nodeValue)}}),n},p=function(e){var t=e.selector,n=e.inline,o=e.clientSpecified,r=[],i=s();if(!0===n){r.push(i.parentNode)}return!0!==o||t||(t="[data-widget='"+f(i)+"']"),t&&[].forEach.call(document.querySelectorAll(t),function(e){r.push(e)}),r},d=function(e,t,n,o){t.forEach(function(t){var r=t;if(!r._habitat){r._habitat=!0;var i=l(t)||{};return o&&(r.innerHTML=""),u.a.render(u.a.h(e,i),r,n)}})},h=function(e){var t=e;return{render:function(e){void 0===e&&(e={});var n=e.selector;void 0===n&&(n=null);var o=e.inline;void 0===o&&(o=!1);var r=e.clean;void 0===r&&(r=!1);var i=e.clientSpecified;void 0===i&&(i=!1);var u=p({selector:n,inline:o,clientSpecified:i}),c=function(){if(u.length>0){var e=p({selector:n,inline:o,clientSpecified:i});return d(t,e,null,r)}};c(),document.addEventListener("DOMContentLoaded",c),document.addEventListener("load",c)}}},_=h,v=function(e){function t(){return o(this,e.apply(this,arguments))}return r(t,e),t.prototype.componentWillMount=function(){this.init(this.props)},t.prototype.componentDidMount=function(){this.observe()},t.prototype.componentWillUnmount=function(){this.unobserve()},t.prototype.componentWillReceiveProps=function(e){e.src!==this.props.src&&(this.unobserve(),this.init(e),this.observe())},t.prototype.init=function(e){this.setState({url:e.placeholder})},t.prototype.unobserve=function(){this.observer&&this.observer.unobserve(this.img)},t.prototype.observe=function(){var e=this,t=this;this.observer=new IntersectionObserver(function(n){n.forEach(function(n){n.intersectionRatio>0&&(e.loadRealImage(t.props.src),e.observer.unobserve(n.target))})},{rootMargin:this.props.rootMargin||"150px 0px",threshold:.1}),this.observer.observe(this.img)},t.prototype.loadRealImage=function(e){var t=this;this.loadImage(e,function(){t.setState({url:e,loaded:!0})})},t.prototype.loadImage=function(e,t){if(this.img.src.endsWith(e))return console.log("image already loaded!"),void t();var n=new Image;n.onload=t,n.src=e},t.prototype.render=function(){var e=this;return Object(i.h)("div",{style:"display: grid;",className:this.props.className},Object(i.h)("img",{style:" grid-row: 1;grid-column: 1;opacity: 1;align-self: end;z-index: 0;",alt:"lazy-image-main",ref:function(t){return e.img=t},src:this.state.url}),Object(i.h)("img",{alt:"lazy-image-placeholder",style:" grid-row: 1;grid-column: 1;opacity: 1;align-self: end;",src:this.props.backup||this.props.placeholder}))},t}(i.Component);n("m+Gh");_(v).render({selector:'[data-widget-host="habitat"]',clean:!0})},KM04:function(e){!function(){"use strict";function t(){}function n(e,n){var o,r,i,u,c=L;for(u=arguments.length;u-- >2;)T.push(arguments[u]);for(n&&null!=n.children&&(T.length||T.push(n.children),delete n.children);T.length;)if((r=T.pop())&&void 0!==r.pop)for(u=r.length;u--;)T.push(r[u]);else"boolean"==typeof r&&(r=null),(i="function"!=typeof e)&&(null==r?r="":"number"==typeof r?r+="":"string"!=typeof r&&(i=!1)),i&&o?c[c.length-1]+=r:c===L?c=[r]:c.push(r),o=i;var a=new t;return a.nodeName=e,a.children=c,a.attributes=null==n?void 0:n,a.key=null==n?void 0:n.key,void 0!==S.vnode&&S.vnode(a),a}function o(e,t){for(var n in t)e[n]=t[n];return e}function r(e,t){return n(e.nodeName,o(o({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function i(e){!e.__d&&(e.__d=!0)&&1==W.push(e)&&(S.debounceRendering||R)(u)}function u(){var e,t=W;for(W=[];e=t.pop();)e.__d&&P(e)}function c(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&a(e,t.nodeName):n||e._componentConstructor===t.nodeName}function a(e,t){return e.__n===t||e.nodeName.toLowerCase()===t.toLowerCase()}function s(e){var t=o({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function l(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.__n=e,n}function f(e){var t=e.parentNode;t&&t.removeChild(e)}function p(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),o&&o(e);else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var i in n)i in o||(e.style[i]="");for(var i in o)e.style[i]="number"==typeof o[i]&&!1===U.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var u=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,h,u):e.removeEventListener(t,h,u),(e.__l||(e.__l={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e)d(e,t,null==o?"":o),null!=o&&!1!==o||e.removeAttribute(t);else{var c=r&&t!==(t=t.replace(/^xlink\:?/,""));null==o||!1===o?c?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(c?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function d(e,t,n){try{e[t]=n}catch(e){}}function h(e){return this.__l[e.type](S.event&&S.event(e)||e)}function _(){for(var e;e=A.pop();)S.afterMount&&S.afterMount(e),e.componentDidMount&&e.componentDidMount()}function v(e,t,n,o,r,i){F++||(I=null!=r&&void 0!==r.ownerSVGElement,V=null!=e&&!("__preactattr_"in e));var u=m(e,t,n,o,i);return r&&u.parentNode!==r&&r.appendChild(u),--F||(V=!1,i||_()),u}function m(e,t,n,o,r){var i=e,u=I;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),b(e,!0))),i.__preactattr_=!0,i;var c=t.nodeName;if("function"==typeof c)return k(e,t,n,o);if(I="svg"===c||"foreignObject"!==c&&I,c+="",(!e||!a(e,c))&&(i=l(c,I),e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),b(e,!0)}var s=i.firstChild,f=i.__preactattr_,p=t.children;if(null==f){f=i.__preactattr_={};for(var d=i.attributes,h=d.length;h--;)f[d[h].name]=d[h].value}return!V&&p&&1===p.length&&"string"==typeof p[0]&&null!=s&&void 0!==s.splitText&&null==s.nextSibling?s.nodeValue!=p[0]&&(s.nodeValue=p[0]):(p&&p.length||null!=s)&&y(i,p,n,o,V||null!=f.dangerouslySetInnerHTML),w(i,t.attributes,f),I=u,i}function y(e,t,n,o,r){var i,u,a,s,l,p=e.childNodes,d=[],h={},_=0,v=0,y=p.length,g=0,w=t?t.length:0;if(0!==y)for(var x=0;x<y;x++){var C=p[x],N=C.__preactattr_,j=w&&N?C._component?C._component.__k:N.key:null;null!=j?(_++,h[j]=C):(N||(void 0!==C.splitText?!r||C.nodeValue.trim():r))&&(d[g++]=C)}if(0!==w)for(var x=0;x<w;x++){s=t[x],l=null;var j=s.key;if(null!=j)_&&void 0!==h[j]&&(l=h[j],h[j]=void 0,_--);else if(!l&&v<g)for(i=v;i<g;i++)if(void 0!==d[i]&&c(u=d[i],s,r)){l=u,d[i]=void 0,i===g-1&&g--,i===v&&v++;break}l=m(l,s,n,o),a=p[x],l&&l!==e&&l!==a&&(null==a?e.appendChild(l):l===a.nextSibling?f(a):e.insertBefore(l,a))}if(_)for(var x in h)void 0!==h[x]&&b(h[x],!1);for(;v<=g;)void 0!==(l=d[g--])&&b(l,!1)}function b(e,t){var n=e._component;n?O(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||f(e),g(e))}function g(e){for(e=e.lastChild;e;){var t=e.previousSibling;b(e,!0),e=t}}function w(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||p(e,o,n[o],n[o]=void 0,I);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||p(e,o,n[o],n[o]=t[o],I)}function x(e){var t=e.constructor.name;(H[t]||(H[t]=[])).push(e)}function C(e,t,n){var o,r=H[e.name];if(e.prototype&&e.prototype.render?(o=new e(t,n),E.call(o,t,n)):(o=new E(t,n),o.constructor=e,o.render=N),r)for(var i=r.length;i--;)if(r[i].constructor===e){o.__b=r[i].__b,r.splice(i,1);break}return o}function N(e,t,n){return this.constructor(e,n)}function j(e,t,n,o,r){e.__x||(e.__x=!0,(e.__r=t.ref)&&delete t.ref,(e.__k=t.key)&&delete t.key,!e.base||r?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o),o&&o!==e.context&&(e.__c||(e.__c=e.context),e.context=o),e.__p||(e.__p=e.props),e.props=t,e.__x=!1,0!==n&&(1!==n&&!1===S.syncComponentUpdates&&e.base?i(e):P(e,1,r)),e.__r&&e.__r(e))}function P(e,t,n,r){if(!e.__x){var i,u,c,a=e.props,l=e.state,f=e.context,p=e.__p||a,d=e.__s||l,h=e.__c||f,m=e.base,y=e.__b,g=m||y,w=e._component,x=!1;if(m&&(e.props=p,e.state=d,e.context=h,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(a,l,f)?x=!0:e.componentWillUpdate&&e.componentWillUpdate(a,l,f),e.props=a,e.state=l,e.context=f),e.__p=e.__s=e.__c=e.__b=null,e.__d=!1,!x){i=e.render(a,l,f),e.getChildContext&&(f=o(o({},f),e.getChildContext()));var N,k,E=i&&i.nodeName;if("function"==typeof E){var M=s(i);u=w,u&&u.constructor===E&&M.key==u.__k?j(u,M,1,f,!1):(N=u,e._component=u=C(E,M,f),u.__b=u.__b||y,u.__u=e,j(u,M,0,f,!1),P(u,1,n,!0)),k=u.base}else c=g,N=w,N&&(c=e._component=null),(g||1===t)&&(c&&(c._component=null),k=v(c,i,f,n||!m,g&&g.parentNode,!0));if(g&&k!==g&&u!==w){var T=g.parentNode;T&&k!==T&&(T.replaceChild(k,g),N||(g._component=null,b(g,!1)))}if(N&&O(N),e.base=k,k&&!r){for(var L=e,R=e;R=R.__u;)(L=R).base=k;k._component=L,k._componentConstructor=L.constructor}}if(!m||n?A.unshift(e):x||(e.componentDidUpdate&&e.componentDidUpdate(p,d,h),S.afterUpdate&&S.afterUpdate(e)),null!=e.__h)for(;e.__h.length;)e.__h.pop().call(e);F||r||_()}}function k(e,t,n,o){for(var r=e&&e._component,i=r,u=e,c=r&&e._componentConstructor===t.nodeName,a=c,l=s(t);r&&!a&&(r=r.__u);)a=r.constructor===t.nodeName;return r&&a&&(!o||r._component)?(j(r,l,3,n,o),e=r.base):(i&&!c&&(O(i),e=u=null),r=C(t.nodeName,l,n),e&&!r.__b&&(r.__b=e,u=null),j(r,l,1,n,o),e=r.base,u&&e!==u&&(u._component=null,b(u,!1))),e}function O(e){S.beforeUnmount&&S.beforeUnmount(e);var t=e.base;e.__x=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?O(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.__b=t,f(t),x(e),g(t)),e.__r&&e.__r(null)}function E(e,t){this.__d=!0,this.context=t,this.props=e,this.state=this.state||{}}function M(e,t,n){return v(n,e,{},!1,t,!1)}var S={},T=[],L=[],R="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,U=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,W=[],A=[],F=0,I=!1,V=!1,H={};o(E.prototype,{setState:function(e,t){var n=this.state;this.__s||(this.__s=o({},n)),o(n,"function"==typeof e?e(n,this.props):e),t&&(this.__h=this.__h||[]).push(t),i(this)},forceUpdate:function(e){e&&(this.__h=this.__h||[]).push(e),P(this,2)},render:function(){}});var B={h:n,createElement:n,cloneElement:r,Component:E,render:M,rerender:u,options:S};e.exports=B}()},QAmr:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="function"==typeof fetch?fetch.bind():function(e,t){return t=t||{},new Promise(function(n,o){function r(){var e,t=[],n=[],o={};return i.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm,function(r,i,u){t.push(i=i.toLowerCase()),n.push([i,u]),e=o[i],o[i]=e?e+","+u:u}),{ok:1==(i.status/200|0),status:i.status,statusText:i.statusText,url:i.responseURL,clone:r,text:function(){return Promise.resolve(i.responseText)},json:function(){return Promise.resolve(i.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([i.response]))},headers:{keys:function(){return t},entries:function(){return n},get:function(e){return o[e.toLowerCase()]},has:function(e){return e.toLowerCase()in o}}}}var i=new XMLHttpRequest;i.open(t.method||"get",e);for(var u in t.headers)i.setRequestHeader(u,t.headers[u]);i.withCredentials="include"==t.credentials,i.onload=function(){n(r())},i.onerror=o,i.send(t.body)})}},VS7n:function(e,t,n){e.exports=window.fetch||(window.fetch=n("QAmr").default||n("QAmr"))},h6ac:function(e){var t;t=function(){return this}();try{t=t||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(t=window)}e.exports=t},"m+Gh":function(e,t,n){"use strict";(function(e){e.Promise||(e.Promise=n("BtxX")),e.fetch||(e.fetch=n("VS7n"))}).call(t,n("h6ac"))},pwNi:function(e,t,n){"use strict";var o=n("KM04"),r=function(e){return e&&e.default?e.default:e};if("function"==typeof r(n("JkW7"))){var i=document.body.firstElementChild,u=function(){var e=r(n("JkW7"));i=(0,o.render)((0,o.h)(e),document.body,i)};u()}}})});
//# sourceMappingURL=bundle.js.map