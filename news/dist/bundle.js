!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=34)}([function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},function(e,t,r){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var i=(a=n,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),o=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot).concat(e," */")}));return[r].concat(o).concat([i]).join("\n")}var a,c,s;return[r].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(r,"}"):r})).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(n[o]=!0)}for(var a=0;a<e.length;a++){var c=e[a];null!=c[0]&&n[c[0]]||(r&&!c[2]?c[2]=r:r&&(c[2]="(".concat(c[2],") and (").concat(r,")")),t.push(c))}},t}},function(e,t,r){"use strict";var n,i={},o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},a=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}();function c(e,t){for(var r=[],n={},i=0;i<e.length;i++){var o=e[i],a=t.base?o[0]+t.base:o[0],c={css:o[1],media:o[2],sourceMap:o[3]};n[a]?n[a].parts.push(c):r.push(n[a]={id:a,parts:[c]})}return r}function s(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=i[n.id],a=0;if(o){for(o.refs++;a<o.parts.length;a++)o.parts[a](n.parts[a]);for(;a<n.parts.length;a++)o.parts.push(g(n.parts[a],t))}else{for(var c=[];a<n.parts.length;a++)c.push(g(n.parts[a],t));i[n.id]={id:n.id,refs:1,parts:c}}}}function l(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var n=r.nc;n&&(e.attributes.nonce=n)}if(Object.keys(e.attributes).forEach((function(r){t.setAttribute(r,e.attributes[r])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var u,p=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function h(e,t,r,n){var i=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=p(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function f(e,t,r){var n=r.css,i=r.media,o=r.sourceMap;if(i&&e.setAttribute("media",i),o&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var d=null,v=0;function g(e,t){var r,n,i;if(t.singleton){var o=v++;r=d||(d=l(t)),n=h.bind(null,r,o,!1),i=h.bind(null,r,o,!0)}else r=l(t),n=f.bind(null,r,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o());var r=c(e,t);return s(r,t),function(e){for(var n=[],o=0;o<r.length;o++){var a=r[o],l=i[a.id];l&&(l.refs--,n.push(l))}e&&s(c(e,t),t);for(var u=0;u<n.length;u++){var p=n[u];if(0===p.refs){for(var h=0;h<p.parts.length;h++)p.parts[h]();delete i[p.id]}}}}},function(e,t,r){e.exports=r(26)},function(e,t,r){var n=r(27);function i(t,r,o){return!function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()?e.exports=i=function(e,t,r){var i=[null];i.push.apply(i,t);var o=new(Function.bind.apply(e,i));return r&&n(o,r.prototype),o}:e.exports=i=Reflect.construct,i.apply(null,arguments)}e.exports=i},function(e,t,r){"use strict";e.exports=function(e,t){return"string"!=typeof(e=e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)||t?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},function(e,t,r){var n=r(23),i=r(24),o=r(25);e.exports=function(e){return n(e)||i(e)||o()}},function(e,t){function r(e,t,r,n,i,o,a){try{var c=e[o](a),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,i)}e.exports=function(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var a=e.apply(t,n);function c(e){r(a,i,o,c,s,"next",e)}function s(e){r(a,i,o,c,s,"throw",e)}c(void 0)}))}}},function(e,t,r){e.exports=r.p+"fe1230df3f6b8dcd5b967796d2b3806c.png"},function(e,t,r){var n=r(12);"string"==typeof n&&(n=[[e.i,n,""]]);var i={insert:"head",singleton:!1};r(3)(n,i);n.locals&&(e.exports=n.locals)},function(e,t,r){(e.exports=r(2)(!1)).push([e.i,':root {\r\n  --color-blue: #0a6abe;\r\n  --color-dark-blue: #084b86;\r\n  --color-ligth-grey: #f1f4f9;\r\n  --color-dark-grey: #313131;\r\n  --font: "Geomanist", sans-serif;\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n  background-color: var(--color-ligth-grey);\r\n  font-family: var(--font);\r\n  overflow: hidden;\r\n}\r\n\r\nh1 {\r\n  font-size: 40px;\r\n}\r\n\r\np {\r\n  color: var(--color-dark-grey);\r\n}\r\n\r\n@media screen and (max-width: 900px) {\r\n  .article-card {\r\n    width: 500px;\r\n  }\r\n\r\n  .article-card__image {\r\n    max-height: 300px;\r\n  }\r\n}\r\n',""])},function(e,t,r){var n=r(14);"string"==typeof n&&(n=[[e.i,n,""]]);var i={insert:"head",singleton:!1};r(3)(n,i);n.locals&&(e.exports=n.locals)},function(e,t,r){(e.exports=r(2)(!1)).push([e.i,".landing-page {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n}\r\n",""])},function(e,t,r){var n=r(16);"string"==typeof n&&(n=[[e.i,n,""]]);var i={insert:"head",singleton:!1};r(3)(n,i);n.locals&&(e.exports=n.locals)},function(e,t,r){t=e.exports=r(2)(!1);var n=r(6)(r(17));t.push([e.i,".header {\r\n  display: flex;\r\n  flex: 0 0 auto;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  width: 100%;\r\n  height: 80px;\r\n  align-items: center;\r\n  background-color: var(--color-blue);\r\n  color: #fff;\r\n  text-shadow: 2px 0px black;\r\n}\r\n\r\n.header__back-button {\r\n  display: block;\r\n  position: absolute;\r\n  top: 20px;\r\n  left: 40px;\r\n  height: 40px;\r\n  width: 60px;\r\n  border: none;\r\n  border-radius: 3px;\r\n  fill: #fff;\r\n  background: url("+n+") no-repeat center;\r\n  background-size: contain;\r\n  transition-duration: 0.4s;\r\n  cursor: pointer;\r\n}\r\n\r\n.header__back-button:hover {\r\n  background-color: var(--color-dark-blue);\r\n}\r\n",""])},function(e,t,r){e.exports=r.p+"eab1104b4b8ce07ef551b3b7d242c555.svg"},function(e,t,r){var n=r(19);"string"==typeof n&&(n=[[e.i,n,""]]);var i={insert:"head",singleton:!1};r(3)(n,i);n.locals&&(e.exports=n.locals)},function(e,t,r){(e.exports=r(2)(!1)).push([e.i,".channel-cards {\r\n  position: relative;\r\n  display: grid;\r\n  flex: 1 1 auto;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 50px;\r\n  grid-template-columns: repeat(auto-fill, 400px);\r\n  grid-gap: 30px;\r\n  overflow-y: auto;\r\n}\r\n",""])},function(e,t,r){var n=r(21);"string"==typeof n&&(n=[[e.i,n,""]]);var i={insert:"head",singleton:!1};r(3)(n,i);n.locals&&(e.exports=n.locals)},function(e,t,r){t=e.exports=r(2)(!1);var n=r(6)(r(22));t.push([e.i,".channel-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  border-radius: 3px;\r\n  background-color: #fff;\r\n  box-shadow: 0 6px 16px 2px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.channel-card__title-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-end;\r\n  height: 80px;\r\n  padding: 0 20px;\r\n  border-radius: 3px 3px 0 0;\r\n  background: url("+n+") no-repeat center;\r\n  background-size: cover;\r\n}\r\n\r\n.channel-card__title {\r\n  font-size: 25px;\r\n  color: #fff;\r\n  text-shadow: 1px 0px black;\r\n}\r\n\r\n.channel-card__description {\r\n  height: 120px;\r\n  margin: 0;\r\n  padding: 20px;\r\n}\r\n\r\n.channel-card__footer {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: end;\r\n  align-items: center;\r\n  height: 70px;\r\n  padding: 0 20px;\r\n  border-top: 1px solid var(--color-blue);\r\n}\r\n\r\n.channel-card__footer button {\r\n  height: 35px;\r\n  width: 130px;\r\n  background-color: var(--color-blue);\r\n  border: none;\r\n  border-radius: 3px;\r\n  color: white;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 4px 2px;\r\n  transition-duration: 0.4s;\r\n  cursor: pointer;\r\n}\r\n\r\n.channel-card__footer button:hover {\r\n  background-color: #0a4c85;\r\n}\r\n",""])},function(e,t,r){e.exports=r.p+"c16c362e546b8a4f5ff41f22473edb2a.png"},function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}},function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(e,t,r){var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(e,t,r,n){var i=t&&t.prototype instanceof v?t:v,o=Object.create(i.prototype),a=new C(n||[]);return o._invoke=function(e,t,r){var n=u;return function(i,o){if(n===h)throw new Error("Generator is already running");if(n===f){if("throw"===i)throw o;return T()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var c=_(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===u)throw n=f,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var s=l(e,t,r);if("normal"===s.type){if(n=r.done?f:p,s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=f,r.method="throw",r.arg=s.arg)}}}(e,r,a),o}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var u="suspendedStart",p="suspendedYield",h="executing",f="completed",d={};function v(){}function g(){}function m(){}var y={};y[o]=function(){return this};var x=Object.getPrototypeOf,b=x&&x(x(j([])));b&&b!==r&&n.call(b,o)&&(y=b);var w=m.prototype=v.prototype=Object.create(y);function S(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function k(e){var t;this._invoke=function(r,i){function o(){return new Promise((function(t,o){!function t(r,i,o,a){var c=l(e[r],e,i);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"==typeof u&&n.call(u,"__await")?Promise.resolve(u.__await).then((function(e){t("next",e,o,a)}),(function(e){t("throw",e,o,a)})):Promise.resolve(u).then((function(e){s.value=e,o(s)}),(function(e){return t("throw",e,o,a)}))}a(c.arg)}(r,i,t,o)}))}return t=t?t.then(o,o):o()}}function _(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,_(e,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var i=l(n,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,d;var o=i.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,d):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function j(e){if(e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:T}}function T(){return{value:t,done:!0}}return g.prototype=w.constructor=m,m.constructor=g,m[c]=g.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c in e||(e[c]="GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},S(k.prototype),k.prototype[a]=function(){return this},e.AsyncIterator=k,e.async=function(t,r,n,i){var o=new k(s(t,r,n,i));return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},S(w),w[c]="Generator",w[o]=function(){return this},w.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=j,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return c.type="throw",c.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;L(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:j(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),d}},e}(e.exports);try{regeneratorRuntime=n}catch(e){Function("r","regeneratorRuntime = r")(n)}},function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},function(e,t,r){var n=r(29);"string"==typeof n&&(n=[[e.i,n,""]]);var i={insert:"head",singleton:!1};r(3)(n,i);n.locals&&(e.exports=n.locals)},function(e,t,r){(e.exports=r(2)(!1)).push([e.i,".top-news-page {\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n",""])},function(e,t,r){var n=r(31);"string"==typeof n&&(n=[[e.i,n,""]]);var i={insert:"head",singleton:!1};r(3)(n,i);n.locals&&(e.exports=n.locals)},function(e,t,r){(e.exports=r(2)(!1)).push([e.i,".news-articles {\r\n  position: relative;\r\n  display: flex;\r\n  flex: 1 1 auto;\r\n  flex-direction: column;\r\n  grid-gap: 30px;\r\n  align-items: center;\r\n  padding: 50px;\r\n  overflow-y: auto;\r\n}\r\n\r\n.news-api-link {\r\n  color: var(--color-blue);\r\n}\r\n\r\n.news-api-link:hover {\r\n  color: var(--color-dark-blue);\r\n}\r\n",""])},function(e,t,r){var n=r(33);"string"==typeof n&&(n=[[e.i,n,""]]);var i={insert:"head",singleton:!1};r(3)(n,i);n.locals&&(e.exports=n.locals)},function(e,t,r){(e.exports=r(2)(!1)).push([e.i,".article-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 800px;\r\n  padding: 10px;\r\n  margin-bottom: 50px;\r\n  border-radius: 3px;\r\n  background-color: #fff;\r\n  cursor: pointer;\r\n}\r\n\r\n.article-card__image {\r\n  max-height: 500px;\r\n  object-fit: cover;\r\n}\r\n\r\n.article-card__description {\r\n  margin-top: 0;\r\n}\r\n\r\n.article-card:hover {\r\n  box-shadow: 0 6px 16px 2px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n@media screen and (max-width: 900px) {\r\n  .article-card {\r\n    width: 500px;\r\n  }\r\n\r\n  .article-card__image {\r\n    max-height: 300px;\r\n  }\r\n}\r\n\r\n\r\n@media screen and (max-width: 600px) {\r\n  .article-card {\r\n    width: 300px;\r\n  }\r\n\r\n  .article-card__image {\r\n    max-height: 150px;\r\n  }\r\n}\r\n\r\n",""])},function(e,t,r){"use strict";r.r(t);r(11);var n=r(0),i=r.n(n),o=r(1),a=r.n(o),c=(r(13),r(15),function(){function e(t,r,n,o,a){i()(this,e),this.name=t,this.isBackButtonDisplayed=r,this.htmlService=n,this.networkService=o,this.routingService=a}return a()(e,[{key:"createHeader",value:function(){var e=this.htmlService.createSimpleElement("div",["header"]),t=this.createTitle(this.name);if(this.isBackButtonDisplayed){var r=this.createBackButton();e.appendChild(r)}return e.appendChild(t),e}},{key:"createTitle",value:function(e){var t=this.htmlService.createSimpleElement("h1",["header__name"]);return t.innerHTML=e,t}},{key:"createBackButton",value:function(){var e=this,t=document.createElement("button");return t.classList.add("header__back-button"),t.addEventListener("click",(function(){e.routingService.navigateToLandingPage(e.htmlService,e.networkService,e.routingService)})),t}}]),e}()),s=(r(18),r(20),function(){function e(t,r,n,o,a,c){i()(this,e),this.name=t,this.description=r,this.id=n,this.htmlService=o,this.networkService=a,this.routingService=c}return a()(e,[{key:"createNewsChannelCard",value:function(){var e=this.htmlService.createSimpleElement("div",["channel-card"]),t=this.createCardTitle(),r=this.createCardDescription(),n=this.createCardFooter();return e.appendChild(t),e.appendChild(r),e.appendChild(n),e}},{key:"createCardTitle",value:function(){var e=this.htmlService.createSimpleElement("div",["channel-card__title-wrapper"]),t=this.htmlService.createSimpleElement("h3",["channel-card__title"]);return e.appendChild(t),t.innerHTML=this.name,e}},{key:"createCardDescription",value:function(){var e=this.htmlService.createSimpleElement("p",["channel-card__description"]);return e.innerHTML=this.description,e}},{key:"createCardFooter",value:function(){var e=this,t=this.htmlService.createSimpleElement("div",["channel-card__footer"]),r=this.htmlService.createSimpleElement("button");return r.innerHTML="Read more »",r.addEventListener("click",(function(){return e.routingService.navigateToTopNewsPage(e.id,e.name,e.htmlService,e.networkService,e.routingService)})),t.appendChild(r),t}}]),e}()),l=function(){function e(t,r,n,o){i()(this,e),this.cards=t,this.htmlService=r,this.networkService=n,this.routingService=o}return a()(e,[{key:"createNewsChannelCards",value:function(){var e=this,t=this.htmlService.createSimpleElement("div",["channel-cards"]);return this.cards.forEach((function(r){var n=new s(r.name,r.description,r.id,e.htmlService,e.networkService,e.routingService).createNewsChannelCard();t.appendChild(n)})),t}}]),e}(),u=r(7),p=r.n(u);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var f={sources:"sources",topHeadlines:"top-headlines"},d=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(r,!0).forEach((function(t){p()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},f,{apiKey:"apiKey",language:"language"}),v=document.querySelector("body"),g=function(){function e(t,r,n){i()(this,e),this.htmlService=t,this.networkService=r,this.routingService=n}return a()(e,[{key:"createPage",value:function(){var e=this,t=localStorage.getItem("cards");t?this.createPageElements(JSON.parse(t)):this.networkService.getSources().then((function(t){var r=t.sources.map((function(e){return{name:e.name,description:e.description,id:e.id}}));localStorage.setItem("cards",JSON.stringify(r)),e.createPageElements(r)}))}},{key:"createPageElements",value:function(e){var t=this.htmlService.createSimpleElement("div",["landing-page"]),r=new c("News Channels",!1,this.htmlService).createHeader(),n=new l(e,this.htmlService,this.networkService,this.routingService).createNewsChannelCards();t.appendChild(r),t.appendChild(n),v.appendChild(t)}}]),e}(),m=r(8),y=r.n(m),x=function(){function e(){i()(this,e)}return a()(e,[{key:"createSimpleElement",value:function(e,t){var r,n=document.createElement(e);t&&(r=n.classList).add.apply(r,y()(t));return n}}]),e}(),b="95fcd3bbff6e48ed8e0eee2d40923176",w=r(4),S=r.n(w),k=r(9),_=r.n(k),E=function(){function e(){i()(this,e)}var t;return a()(e,[{key:"getRequest",value:(t=_()(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t).then((function(e){return e.json()})).catch((function(e){return console.log("Error: ",e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})}]),e}(),L=function(){function e(){i()(this,e)}return a()(e,[{key:"getSources",value:function(){var e="".concat("https://newsapi.org/v2/","/").concat(f.sources,"?").concat(d.language,"=en&").concat(d.apiKey,"=").concat(b);return(new E).getRequest(e)}},{key:"getTopNewsBySource",value:function(e){var t="".concat("https://newsapi.org/v2/","/").concat(f.topHeadlines,"?").concat(d.sources,"=").concat(e,"&").concat(d.apiKey,"=").concat(b);return(new E).getRequest(t)}}]),e}(),C=r(5),j=r.n(C),T=(r(28),r(30),r(32),r(10)),O=r.n(T),P=function(){function e(t,r,n,o,a,c,s){i()(this,e),this.description=t,this.title=r,this.url=n,this.urlToImage=o,this.htmlService=a,this.networkService=c,this.routingService=s}return a()(e,[{key:"createNewsArticleCard",value:function(){var e=this,t=this.htmlService.createSimpleElement("div",["article-card"]),r=this.createArticaleImage(),n=this.createArticleTitle(),i=this.createArticleDescription();return t.appendChild(r),t.appendChild(n),t.appendChild(i),t.addEventListener("click",(function(){window.location.href=e.url})),t}},{key:"createArticaleImage",value:function(){var e=this.htmlService.createSimpleElement("img",["article-card__image"]);return e.src=this.urlToImage?this.urlToImage:O.a,e.alt=this.title,e}},{key:"createArticleTitle",value:function(){var e=this.htmlService.createSimpleElement("h2",["article-card__title"]);return e.innerHTML=this.title,e}},{key:"createArticleDescription",value:function(){var e=this.htmlService.createSimpleElement("p",["article-card__description"]);return e.innerHTML=this.description,e}}]),e}(),N=function(){function e(t,r,n,o){i()(this,e),this.articles=t,this.htmlService=r,this.networkService=n,this.routingService=o}return a()(e,[{key:"createNewsArticlesCards",value:function(){var e=this,t=this.htmlService.createSimpleElement("div",["news-articles"]),r=this.createAttributionLink();return this.articles.forEach((function(r){var n=new P(r.description,r.title,r.url,r.urlToImage,e.htmlService,e.networkService,e.routingService).createNewsArticleCard();t.appendChild(n)})),t.appendChild(r),t}},{key:"createAttributionLink",value:function(){var e=this.htmlService.createSimpleElement("a",["news-api-link"]);return e.href="https://newsapi.org/",e.innerHTML="Powered by News API",e}}]),e}(),A=document.querySelector("body"),M=function(){function e(t,r,n,o,a){i()(this,e),this.sourceId=t,this.pageName=r,this.htmlService=n,this.networkService=o,this.routingService=a}return a()(e,[{key:"createPage",value:function(){var e=this;this.networkService.getTopNewsBySource(this.sourceId).then((function(t){var r=t.articles.map((function(e){return{description:e.description,title:e.title,url:e.url,urlToImage:e.urlToImage}}));e.createPageElements(r)}))}},{key:"createPageElements",value:function(e){var t=this.htmlService.createSimpleElement("div",["top-news-page"]),r=new c(this.pageName,!0,this.htmlService,this.networkService,this.routingService).createHeader(),n=new N(e,this.htmlService,this.networkService,this.routingService).createNewsArticlesCards();t.appendChild(r),t.appendChild(n),A.appendChild(t)}}]),e}(),I=function(){function e(){i()(this,e)}return a()(e,[{key:"navigateToLandingPage",value:function(){var e=document.querySelector("body");e.innerHTML="",j()(g,Array.prototype.slice.call(arguments)).createPage()}},{key:"navigateToTopNewsPage",value:function(){var e=document.querySelector("body");e.innerHTML="",j()(M,Array.prototype.slice.call(arguments)).createPage()}}]),e}(),R=new x,H=new L,B=new I;new g(R,H,B).createPage()}]);