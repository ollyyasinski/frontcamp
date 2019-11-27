(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{36:function(r,e){function n(r){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}function t(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?r.exports=t=function(r){return n(r)}:r.exports=t=function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":n(r)},t(e)}r.exports=t},37:function(r,e,n){var t=n(38);"string"==typeof t&&(t=[[r.i,t,""]]);var o={insert:"head",singleton:!1};n(3)(t,o);t.locals&&(r.exports=t.locals)},38:function(r,e,n){(r.exports=n(2)(!1)).push([r.i,".error-popup__wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: fixed;\r\n  z-index: 1;\r\n  padding-top: 100px;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: auto;\r\n  background-color: rgb(0, 0, 0);\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.error-popup {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 250px;\r\n  width: 600px;\r\n  border-radius: 3px;\r\n  background-color: #fff;\r\n}\r\n\r\n.error-popup__header {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  width: 100%;\r\n  height: 60px;\r\n  align-items: center;\r\n  border-radius: 3px 3px 0 0;\r\n  background-color: var(--color-blue);\r\n  color: #fff;\r\n}\r\n\r\n.error-popup__title {\r\n  color: #fff;\r\n}\r\n\r\n.error-popup__close-btn {\r\n  display: block;\r\n  position: relative;\r\n  top: 0px;\r\n  left: 220px;\r\n  border: none;\r\n  border-radius: 3px;\r\n  background-color: var(--color-blue);\r\n  color: #fff;\r\n  font-size: 19px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n}\r\n\r\n.error-popup__close-btn:hover {\r\n  color: var(--color-grey);\r\n}\r\n\r\n.error-popup__text-wrapper {\r\n  margin: 15px 40px;\r\n}\r\n.error-popup__text-wrapper p:first-child {\r\n  font-weight: 700;\r\n  font-size: 22px;\r\n}\r\n\r\n.error-popup__text-wrapper span {\r\n  font-size: 18px;\r\n}\r\n\r\n.error-popup__details {\r\n  font-weight: 600;\r\n  font-size: 18px;\r\n}\r\n",""])},39:function(r,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return u}));var t=n(36),o=n.n(t),p=n(0),i=n.n(p),l=n(1),c=n.n(l),a=(n(37),n(8)),u=function(){function r(e,n){return i()(this,r),this.htmlService=e,this.errorMessage=n.message,this.errorCode=n.code,"object"===o()(r.instance)?r.instance:(r.instance=this,this)}return c()(r,[{key:"createErrorPopup",value:function(){var r=this.htmlService.createSimpleElement("div",["error-popup__wrapper"]),e=this.htmlService.createSimpleElement("div",["error-popup"]),n=this.createHeader(),t=this.createErrorText();return e.appendChild(n),e.appendChild(t),r.appendChild(e),r}},{key:"createHeader",value:function(){var r=this.htmlService.createSimpleElement("div",["error-popup__header"]),e=this.htmlService.createSimpleElement("h2",["error-popup__title"]),n=this.createCloseButton();return e.innerHTML="Error",r.appendChild(e),r.appendChild(n),r}},{key:"createCloseButton",value:function(){var r=this.htmlService.createSimpleElement("button",["error-popup__close-btn"]);return r.innerHTML="X",r.addEventListener("click",(function(){document.querySelector(".error-popup__wrapper").style.display="none"})),r}},{key:"createErrorText",value:function(){var r=this.htmlService.createSimpleElement("div",["error-popup__text-wrapper"]),e=this.htmlService.createSimpleElement("p"),n=this.htmlService.createSimpleElement("span"),t=this.htmlService.createSimpleElement("span",["error-popup__details"]);return e.innerHTML=a.b,t.innerHTML=a.a+" ",n.innerHTML=this.errorMessage,r.appendChild(e),r.appendChild(t),r.appendChild(n),r}}]),r}()}}]);