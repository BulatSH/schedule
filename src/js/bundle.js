!function(){var t={216:function(t){var e;e=function(){var t="top",e="bottom",n="left",r="right";return function(i){return a=i.getBoundingClientRect(),(o={}).x=o[0>(o.width=(o[r]=a[r])-(o[n]=a[n]))?r:n],o.y=o[0>(o.height=(o[e]=a[e])-(o[t]=a[t]))?e:t],o;var a,o}},t.exports?t.exports=e():this.bounding=e()},828:function(){function t(){var t=Array.prototype.slice.call(arguments),e=document.createDocumentFragment();t.forEach((function(t){var n=t instanceof Node;e.appendChild(n?t:document.createTextNode(String(t)))})),this.appendChild(e)}function e(){var t=Array.prototype.slice.call(arguments),e=document.createDocumentFragment();t.forEach((function(t){var n=t instanceof Node;e.appendChild(n?t:document.createTextNode(String(t)))})),this.insertBefore(e,this.firstChild)}function n(){var t=Array.prototype.slice.call(arguments),e=document.createDocumentFragment();t.forEach((function(t){var n=t instanceof Node;e.appendChild(n?t:document.createTextNode(String(t)))})),this.parentNode.insertBefore(e,this)}function r(){var t=Array.prototype.slice.call(arguments),e=document.createDocumentFragment();t.forEach((function(t){var n=t instanceof Node;e.appendChild(n?t:document.createTextNode(String(t)))})),this.parentNode.insertBefore(e,this.nextSibling)}function i(){null!==this.parentNode&&this.parentNode.removeChild(this)}function a(){var t,e=this.parentNode,n=arguments.length;if(e)for(n||e.removeChild(this);n--;)"object"!=typeof(t=arguments[n])?t=this.ownerDocument.createTextNode(t):t.parentNode&&t.parentNode.removeChild(t),n?e.insertBefore(t,this.previousSibling):e.replaceChild(t,this)}[Element.prototype,Document.prototype,DocumentFragment.prototype].forEach((function(o){o.hasOwnProperty("append")||Object.defineProperty(o,"append",{configurable:!0,enumerable:!0,writable:!0,value:t}),o.hasOwnProperty("prepend")||Object.defineProperty(o,"prepend",{configurable:!0,enumerable:!0,writable:!0,value:e}),o.hasOwnProperty("before")||Object.defineProperty(o,"before",{configurable:!0,enumerable:!0,writable:!0,value:n}),o.hasOwnProperty("after")||Object.defineProperty(o,"after",{configurable:!0,enumerable:!0,writable:!0,value:r}),o.hasOwnProperty("remove")||Object.defineProperty(o,"remove",{configurable:!0,enumerable:!0,writable:!0,value:i}),o.replaceWith||(o.replaceWith=a)}))}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var a=e[r]={exports:{}};return t[r].call(a.exports,a,a.exports,n),a.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";n(828);var t=n(216);window.addEventListener("DOMContentLoaded",(function(){var e=[{content:{venue:"Стадион",date:"30",month:"мая",time:"19:00",button:"Купить билет"},rivals:{rival1:"Соперник №1",rival2:"Соперник №2"}},{content:{venue:"Стадион",date:"17",month:"июня",time:"19:00",button:"Купить билет"},rivals:{rival1:"Соперник №3",rival2:"Соперник №4"}},{content:{venue:"Стадион",date:"26",month:"июня",time:"19:00",button:"Купить билет"},current:"current",rivals:{rival1:"Соперник №5",rival2:"Соперник №6"}},{content:{venue:"Стадион",date:"16",month:"июля",time:"19:00",button:"Купить билет"},rivals:{rival1:"Соперник №7",rival2:"Соперник №8"}},{content:{venue:"Стадион",date:"30",month:"сентября",time:"19:00",button:"Купить билет"},rivals:{rival1:"Соперник №9",rival2:"Соперник №10"}}],n=document.querySelector(".main-page");n.append(function(t){var e=document.createElement("div");e.classList.add("schedule-container"),e.innerHTML='\n\t\t\t<p class="rival rival_left">\n\t\t\t\t<span>\n\t\t\t\t</span>\n\t\t\t</p>\n\t\t\t<div class="schedule-inner">\n\t\t\t\t<ul class="schedule">\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<p class="rival rival_right">\n\t\t\t\t<span>\n\t\t\t\t</span>\n\t\t\t</p>\n\t\t';for(var n=0;n<t.length;n++)e.querySelector(".schedule").innerHTML+='\n\t\t\t\t<li class="schedule__item">\n\t\t\t\t\t<div class="event-container">\n\t\t\t\t\t\t<p class="event__venue">\n\t\t\t\t\t\t\t'.concat(t[n].content.venue,'\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p class="event__date">\n\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t').concat(t[n].content.date,"\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t").concat(t[n].content.month,'\n\t\t\t\t\t\t\t</span>\t\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<div class="event__bottom">\n\t\t\t\t\t\t\t<p class="event__time">\n\t\t\t\t\t\t\t\t').concat(t[n].content.time,'\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<button class="event__button">\n\t\t\t\t\t\t\t\t').concat(t[n].content.button,"\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t");for(var r=0;r<t.length;r++)t[r].current&&(e.querySelector(".rival_left span").innerHTML=t[r].rivals.rival1,e.querySelector(".rival_right span").innerHTML=t[r].rivals.rival2,e.querySelectorAll(".schedule__item")[r].classList.add("schedule__item_".concat(t[r].current)),c(e.querySelectorAll(".schedule__item"),r));return e}(e));var r=n.querySelector(".schedule"),i=r.children;function a(t){for(var e=0;e<t.length;e++)if(t[e].classList.contains("schedule__item_current")&&0===e||t[e].classList.contains("schedule__item_current")&&e===t.length-1)return e}function o(t){for(var e=0;e<t.length;e++)if(t[e].classList.contains("schedule__item_current"))return e}function c(t,e){t[e-1].classList.add("schedule__item_side"),t[e].classList.add("schedule__item_current"),t[e+1].classList.add("schedule__item_side")}function l(t,e,n){for(var r=0;r<t.length;r++)t[r].classList.remove("schedule__item_side","schedule__item_current");!function(t,e,n){"next"===n?e===t.length-1?(t[e-1].classList.add("schedule__item_side"),t[e].classList.add("schedule__item_current")):e>=1&&c(t,e):"prev"===n&&(0===e?(t[e].classList.add("schedule__item_current"),t[e+1].classList.add("schedule__item_side")):e<=t.length-2&&c(t,e))}(t,e,n)}function s(e,n){var r=+e.getBoundingClientRect().width/2+ +t(e).x,i=+e.getBoundingClientRect().height/2+ +t(e).y,a=+e.children[n].getBoundingClientRect().width/2+ +t(e.children[n]).x,o=+e.children[n].getBoundingClientRect().height/2+ +t(e.children[n]).y;e.style.transform="translate(".concat(r-a,"px, ").concat(i-o,"px) rotate(-30deg)")}function u(t){n.querySelector(".rival_left span").innerHTML=e[t].rivals.rival1,n.querySelector(".rival_right span").innerHTML=e[t].rivals.rival2}s(r,o(i)),window.addEventListener("wheel",(function(t){return function(t){if(0===a(i)&&t.deltaY<0||a(i)===i.length-1&&t.deltaY>0)return!1;if(t.deltaY<0){if(0!==o(i)){var e=o(i)-1;l(i,e,"prev"),u(o(i))}0===o(i)&&(l(i,o(i),"prev"),u(o(i))),s(r,o(i))}else if(t.deltaY>0){if(o(i)!==i.length-1){var n=o(i)+1;l(i,n,"next"),u(o(i))}o(i)===i.length-1&&l(i,o(i),"next"),s(r,o(i)),u(o(i))}}(t)}));for(var d=function(t){i[t].addEventListener("click",(function(){o(i)<t?l(i,t,"next"):o(i)>t&&l(i,t,"prev"),s(r,t),u(o(i))}))},v=0;v<i.length;v++)d(v)}))}()}();
//# sourceMappingURL=bundle.js.map