(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{106:function(t,e,r){"use strict";r.r(e);var n=r(151),a=r.n(n);function o(t,e,r,n,a,o,i){try{var c=t[o](i),u=c.value}catch(l){return void r(l)}c.done?e(u):Promise.resolve(u).then(n,a)}var i=r(0),c=r.n(i),u=r(116),l=r(56),s=r.n(l),h=r(120);e.default=function(){var t=[{username:"Thor-x86",teamJob:"Founder \u2022 Developer"},{username:"yummyweb",teamJob:"Developer \u2022 Maintainer"},{username:"BraydenTW",teamJob:"Designer \u2022 Developer"}],e=Object(i.useState)([]),r=e[0],n=e[1];return Object(i.useEffect)((function(){t.forEach(function(){var t,e=(t=a.a.mark((function t(e){var r,o,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://cors-anywhere.herokuapp.com/https://api.github.com/users/"+e.username);case 2:return r=t.sent,t.next=5,r.json();case 5:o=t.sent,i={name:o.name?o.name:o.login,username:o.login,teamJob:e.teamJob,avatar:o.avatar_url,ghProfile:o.html_url},n((function(t){return[].concat(t,[i])}));case 8:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function c(t){o(i,n,a,c,u,"next",t)}function u(t){o(i,n,a,c,u,"throw",t)}c(void 0)}))});return function(t){return e.apply(this,arguments)}}())}),[]),c.a.createElement(u.a,{title:"About",description:"Description will go into a meta tag in <head />"},c.a.createElement("header",{className:s.a.aboutBanner},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:s.a.aboutLogo}),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("h1",{className:"hero__title"},"About Us"),c.a.createElement("p",{className:s.a.aboutParagraph},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vel exercitationem, aliquid voluptates explicabo recusandae labore similique corrupti, facilis dignissimos eum nihil distinctio esse voluptas."))),c.a.createElement("main",null,c.a.createElement("div",{className:s.a.aboutMain},c.a.createElement("h2",{className:s.a.teamTitle},"Meet the Team"),c.a.createElement("div",{className:s.a.team},r.map((function(t){return c.a.createElement("div",{className:s.a.teamItem,key:t.name},c.a.createElement("img",{alt:t.name,src:t.avatar}),c.a.createElement("h3",null,t.name),c.a.createElement("p",{className:s.a.teamJob},t.teamJob),c.a.createElement("p",null,c.a.createElement("a",{href:t.ghProfile,target:"_blank",rel:"noopener noreferrer"},"@",t.username)))}))),c.a.createElement(h.a,null))))}},120:function(t,e,r){"use strict";var n=r(0),a=r.n(n),o=r(57),i=r.n(o);e.a=function(){return a.a.createElement("div",null,a.a.createElement("div",{className:i.a.support},a.a.createElement("h2",null,"Love FIWL?"),a.a.createElement("p",null,"Here are a few ways that you can support our work. We deeply appreciate every bit of help."),a.a.createElement("a",{href:"https://github.com/fiwl-js/fiwl-js",target:"_blank",rel:"noopener noreferrer",className:i.a.supportGITHUB},"Star our Repository"),a.a.createElement("a",{href:"https://ko-fi.com/fiwl_js",target:"_blank",rel:"noopener noreferrer",className:i.a.supportKOFI},"Support us on Ko-Fi"),a.a.createElement("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",className:i.a.supportTWITTER},"Share on Twitter")))}},151:function(t,e,r){t.exports=r(152)},152:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(F){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof y?e:y,o=Object.create(a.prototype),i=new O(n||[]);return o._invoke=function(t,e,r){var n=h;return function(a,o){if(n===p)throw new Error("Generator is already running");if(n===m){if("throw"===a)throw o;return P()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=N(i,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?m:f,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=m,r.method="throw",r.arg=u.arg)}}}(t,r,i),o}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(F){return{type:"throw",arg:F}}}t.wrap=l;var h="suspendedStart",f="suspendedYield",p="executing",m="completed",v={};function y(){}function d(){}function g(){}var w={};w[o]=function(){return this};var E=Object.getPrototypeOf,b=E&&E(E(T([])));b&&b!==r&&n.call(b,o)&&(w=b);var x=g.prototype=y.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(a,o,i,c){var u=s(t[a],t,o);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(h).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var a;this._invoke=function(t,n){function o(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(o,o):o()}}function N(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,N(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=s(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,v;var o=a.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function T(t){if(t){var r=t[o];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:P}}function P(){return{value:e,done:!0}}return d.prototype=x.constructor=g,g.constructor=d,d.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(_.prototype),_.prototype[i]=function(){return this},t.AsyncIterator=_,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new _(l(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(x),u(x,c,"Generator"),x[o]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=T,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return c.type="throw",c.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;j(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}}}]);