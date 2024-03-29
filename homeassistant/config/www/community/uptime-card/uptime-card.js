/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function e(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}var t=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,n="[^\\s]+",i=/\[([^]*?)\]/gm;function r(e,t){for(var n=[],i=0,r=e.length;i<r;i++)n.push(e[i].substr(0,t));return n}var o=function(e){return function(t,n){var i=n[e].map((function(e){return e.toLowerCase()})).indexOf(t.toLowerCase());return i>-1?i:null}};function a(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var i=0,r=t;i<r.length;i++){var o=r[i];for(var a in o)e[a]=o[a]}return e}var s=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],c=["January","February","March","April","May","June","July","August","September","October","November","December"],l=r(c,3),u={dayNamesShort:r(s,3),dayNames:s,monthNamesShort:l,monthNames:c,amPm:["am","pm"],DoFn:function(e){return e+["th","st","nd","rd"][e%10>3?0:(e-e%10!=10?1:0)*e%10]}},d=a({},u),h=function(e,t){for(void 0===t&&(t=2),e=String(e);e.length<t;)e="0"+e;return e},f={D:function(e){return String(e.getDate())},DD:function(e){return h(e.getDate())},Do:function(e,t){return t.DoFn(e.getDate())},d:function(e){return String(e.getDay())},dd:function(e){return h(e.getDay())},ddd:function(e,t){return t.dayNamesShort[e.getDay()]},dddd:function(e,t){return t.dayNames[e.getDay()]},M:function(e){return String(e.getMonth()+1)},MM:function(e){return h(e.getMonth()+1)},MMM:function(e,t){return t.monthNamesShort[e.getMonth()]},MMMM:function(e,t){return t.monthNames[e.getMonth()]},YY:function(e){return h(String(e.getFullYear()),4).substr(2)},YYYY:function(e){return h(e.getFullYear(),4)},h:function(e){return String(e.getHours()%12||12)},hh:function(e){return h(e.getHours()%12||12)},H:function(e){return String(e.getHours())},HH:function(e){return h(e.getHours())},m:function(e){return String(e.getMinutes())},mm:function(e){return h(e.getMinutes())},s:function(e){return String(e.getSeconds())},ss:function(e){return h(e.getSeconds())},S:function(e){return String(Math.round(e.getMilliseconds()/100))},SS:function(e){return h(Math.round(e.getMilliseconds()/10),2)},SSS:function(e){return h(e.getMilliseconds(),3)},a:function(e,t){return e.getHours()<12?t.amPm[0]:t.amPm[1]},A:function(e,t){return e.getHours()<12?t.amPm[0].toUpperCase():t.amPm[1].toUpperCase()},ZZ:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+h(100*Math.floor(Math.abs(t)/60)+Math.abs(t)%60,4)},Z:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+h(Math.floor(Math.abs(t)/60),2)+":"+h(Math.abs(t)%60,2)}},p=function(e){return+e-1},m=[null,"[1-9]\\d?"],g=[null,n],v=["isPm",n,function(e,t){var n=e.toLowerCase();return n===t.amPm[0]?0:n===t.amPm[1]?1:null}],y=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(e){var t=(e+"").match(/([+-]|\d\d)/gi);if(t){var n=60*+t[1]+parseInt(t[2],10);return"+"===t[0]?n:-n}return 0}],b=(o("monthNamesShort"),o("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var _=function(e,n,r){if(void 0===n&&(n=b.default),void 0===r&&(r={}),"number"==typeof e&&(e=new Date(e)),"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))throw new Error("Invalid Date pass to format");var o=[];n=(n=b[n]||n).replace(i,(function(e,t){return o.push(t),"@@@"}));var s=a(a({},d),r);return(n=n.replace(t,(function(t){return f[t](e,s)}))).replace(/@@@/g,(function(){return o.shift()}))};(function(){try{(new Date).toLocaleDateString("i")}catch(e){return"RangeError"===e.name}})(),function(){try{(new Date).toLocaleString("i")}catch(e){return"RangeError"===e.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(e){return"RangeError"===e.name}}();var w=["closed","locked","off"],S=function(e,t,n,i){i=i||{},n=null==n?{}:n;var r=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return r.detail=n,e.dispatchEvent(r),r},x=function(e){S(window,"haptic",e)},k=function(e,t,n,i,r){var o;if(r&&n.double_tap_action?o=n.double_tap_action:i&&n.hold_action?o=n.hold_action:!i&&n.tap_action&&(o=n.tap_action),o||(o={action:"more-info"}),!o.confirmation||o.confirmation.exemptions&&o.confirmation.exemptions.some((function(e){return e.user===t.user.id}))||confirm(o.confirmation.text||"Are you sure you want to "+o.action+"?"))switch(o.action){case"more-info":(o.entity||n.entity||n.camera_image)&&(S(e,"hass-more-info",{entityId:o.entity?o.entity:n.entity?n.entity:n.camera_image}),o.haptic&&x(o.haptic));break;case"navigate":o.navigation_path&&(function(e,t,n){void 0===n&&(n=!1),n?history.replaceState(null,"",t):history.pushState(null,"",t),S(window,"location-changed",{replace:n})}(0,o.navigation_path),o.haptic&&x(o.haptic));break;case"url":o.url_path&&window.open(o.url_path),o.haptic&&x(o.haptic);break;case"toggle":n.entity&&(function(e,t){(function(e,t,n){void 0===n&&(n=!0);var i,r=function(e){return e.substr(0,e.indexOf("."))}(t),o="group"===r?"homeassistant":r;switch(r){case"lock":i=n?"unlock":"lock";break;case"cover":i=n?"open_cover":"close_cover";break;default:i=n?"turn_on":"turn_off"}e.callService(o,i,{entity_id:t})})(e,t,w.includes(e.states[t].state))}(t,n.entity),o.haptic&&x(o.haptic));break;case"call-service":if(!o.service)return;var a=o.service.split(".",2),s=a[0],c=a[1],l=Object.assign({},o.service_data);"entity"===l.entity_id&&(l.entity_id=n.entity),t.callService(s,c,l),o.haptic&&x(o.haptic);break;case"fire-dom-event":S(e,"ll-custom",o),o.haptic&&x(o.haptic)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const P="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,O=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},C=`{{lit-${String(Math.random()).slice(2)}}}`,N=`\x3c!--${C}--\x3e`,I=new RegExp(`${C}|${N}`);class T{constructor(e,t){this.parts=[],this.element=t;const n=[],i=[],r=document.createTreeWalker(t.content,133,null,!1);let o=0,a=-1,s=0;const{strings:c,values:{length:l}}=e;for(;s<l;){const e=r.nextNode();if(null!==e){if(a++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let i=0;for(let e=0;e<n;e++)A(t[e].name,"$lit$")&&i++;for(;i-- >0;){const t=c[s],n=D.exec(t)[2],i=n.toLowerCase()+"$lit$",r=e.getAttribute(i);e.removeAttribute(i);const o=r.split(I);this.parts.push({type:"attribute",index:a,name:n,strings:o}),s+=o.length-1}}"TEMPLATE"===e.tagName&&(i.push(e),r.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(C)>=0){const i=e.parentNode,r=t.split(I),o=r.length-1;for(let t=0;t<o;t++){let n,o=r[t];if(""===o)n=$();else{const e=D.exec(o);null!==e&&A(e[2],"$lit$")&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),n=document.createTextNode(o)}i.insertBefore(n,e),this.parts.push({type:"node",index:++a})}""===r[o]?(i.insertBefore($(),e),n.push(e)):e.data=r[o],s+=o}}else if(8===e.nodeType)if(e.data===C){const t=e.parentNode;null!==e.previousSibling&&a!==o||(a++,t.insertBefore($(),e)),o=a,this.parts.push({type:"node",index:a}),null===e.nextSibling?e.data="":(n.push(e),a--),s++}else{let t=-1;for(;-1!==(t=e.data.indexOf(C,t+1));)this.parts.push({type:"node",index:-1}),s++}}else r.currentNode=i.pop()}for(const e of n)e.parentNode.removeChild(e)}}const A=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},E=e=>-1!==e.index,$=()=>document.createComment(""),D=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function j(e,t){const{element:{content:n},parts:i}=e,r=document.createTreeWalker(n,133,null,!1);let o=R(i),a=i[o],s=-1,c=0;const l=[];let u=null;for(;r.nextNode();){s++;const e=r.currentNode;for(e.previousSibling===u&&(u=null),t.has(e)&&(l.push(e),null===u&&(u=e)),null!==u&&c++;void 0!==a&&a.index===s;)a.index=null!==u?-1:a.index-c,o=R(i,o),a=i[o]}l.forEach(e=>e.parentNode.removeChild(e))}const M=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,133,null,!1);for(;n.nextNode();)t++;return t},R=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(E(t))return n}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const B=new WeakMap,z=e=>"function"==typeof e&&B.has(e),U={},V={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class F{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=P?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let r,o=0,a=0,s=i.nextNode();for(;o<n.length;)if(r=n[o],E(r)){for(;a<r.index;)a++,"TEMPLATE"===s.nodeName&&(t.push(s),i.currentNode=s.content),null===(s=i.nextNode())&&(i.currentNode=t.pop(),s=i.nextNode());if("node"===r.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(s.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(s,r.name,r.strings,this.options));o++}else this.__parts.push(void 0),o++;return P&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const H=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),L=` ${C} `;class q{constructor(e,t,n,i){this.strings=e,this.values=t,this.type=n,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let i=0;i<e;i++){const e=this.strings[i],r=e.lastIndexOf("\x3c!--");n=(r>-1||n)&&-1===e.indexOf("--\x3e",r+1);const o=D.exec(e);t+=null===o?e+(n?L:N):e.substr(0,o.index)+o[1]+o[2]+"$lit$"+o[3]+C}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==H&&(t=H.createHTML(t)),e.innerHTML=t,e}}class Y extends q{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,n=t.firstChild;return t.removeChild(n),((e,t,n=null,i=null)=>{for(;t!==n;){const n=t.nextSibling;e.insertBefore(t,i),t=n}})(t,n.firstChild),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const W=e=>null===e||!("object"==typeof e||"function"==typeof e),J=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class K{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new Z(this)}_getValue(){const e=this.strings,t=e.length-1,n=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=n[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!J(e))return e}let i="";for(let r=0;r<t;r++){i+=e[r];const t=n[r];if(void 0!==t){const e=t.value;if(W(e)||!J(e))i+="string"==typeof e?e:String(e);else for(const t of e)i+="string"==typeof t?t:String(t)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Z{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===U||W(e)&&e===this.value||(this.value=e,z(e)||(this.committer.dirty=!0))}commit(){for(;z(this.value);){const e=this.value;this.value=U,e(this)}this.value!==U&&this.committer.commit()}}class Q{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild($()),this.endNode=e.appendChild($())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=$()),e.__insert(this.endNode=$())}insertAfterPart(e){e.__insert(this.startNode=$()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;z(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=U,e(this)}const e=this.__pendingValue;e!==U&&(W(e)?e!==this.value&&this.__commitText(e):e instanceof q?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):J(e)?this.__commitIterable(e):e===V?(this.value=V,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof F&&this.value.template===t)this.value.update(e.values);else{const n=new F(t,e.processor,this.options),i=n._clone();n.update(e.values),this.__commitNode(i),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,i=0;for(const r of e)n=t[i],void 0===n&&(n=new Q(this.options),t.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(t[i-1])),n.setValue(r),n.commit(),i++;i<t.length&&(t.length=i,this.clear(n&&n.endNode))}clear(e=this.startNode){O(this.startNode.parentNode,e.nextSibling,this.endNode)}}class G{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;z(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=U,e(this)}if(this.__pendingValue===U)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=U}}class X extends K{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new ee(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class ee extends Z{}let te=!1;(()=>{try{const e={get capture(){return te=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class ne{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;z(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=U,e(this)}if(this.__pendingValue===U)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),i=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=ie(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=U}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const ie=e=>e&&(te?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function re(e){let t=oe.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},oe.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const i=e.strings.join(C);return n=t.keyString.get(i),void 0===n&&(n=new T(e,e.getTemplateElement()),t.keyString.set(i,n)),t.stringsArray.set(e.strings,n),n}const oe=new Map,ae=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const se=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(e,t,n,i){const r=t[0];if("."===r){return new X(e,t.slice(1),n).parts}if("@"===r)return[new ne(e,t.slice(1),i.eventContext)];if("?"===r)return[new G(e,t.slice(1),n)];return new K(e,t,n).parts}handleTextExpression(e){return new Q(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const ce=(e,...t)=>new q(e,t,"html",se),le=(e,...t)=>new Y(e,t,"svg",se)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,ue=(e,t)=>`${e}--${t}`;let de=!0;void 0===window.ShadyCSS?de=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),de=!1);const he=e=>t=>{const n=ue(t.type,e);let i=oe.get(n);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},oe.set(n,i));let r=i.stringsArray.get(t.strings);if(void 0!==r)return r;const o=t.strings.join(C);if(r=i.keyString.get(o),void 0===r){const n=t.getTemplateElement();de&&window.ShadyCSS.prepareTemplateDom(n,e),r=new T(t,n),i.keyString.set(o,r)}return i.stringsArray.set(t.strings,r),r},fe=["html","svg"],pe=new Set,me=(e,t,n)=>{pe.add(e);const i=n?n.element:document.createElement("template"),r=t.querySelectorAll("style"),{length:o}=r;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(i,e);const a=document.createElement("style");for(let e=0;e<o;e++){const t=r[e];t.parentNode.removeChild(t),a.textContent+=t.textContent}(e=>{fe.forEach(t=>{const n=oe.get(ue(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),j(e,n)})})})(e);const s=i.content;n?function(e,t,n=null){const{element:{content:i},parts:r}=e;if(null==n)return void i.appendChild(t);const o=document.createTreeWalker(i,133,null,!1);let a=R(r),s=0,c=-1;for(;o.nextNode();){c++;for(o.currentNode===n&&(s=M(t),n.parentNode.insertBefore(t,n));-1!==a&&r[a].index===c;){if(s>0){for(;-1!==a;)r[a].index+=s,a=R(r,a);return}a=R(r,a)}}}(n,a,s.firstChild):s.insertBefore(a,s.firstChild),window.ShadyCSS.prepareTemplateStyles(i,e);const c=s.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(n){s.insertBefore(a,s.firstChild);const e=new Set;e.add(a),j(n,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const ge={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},ve=(e,t)=>t!==e&&(t==t||e==e),ye={attribute:!0,type:String,converter:ge,reflect:!1,hasChanged:ve};class be extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const i=this._attributeNameForProperty(n,t);void 0!==i&&(this._attributeToPropertyMap.set(i,n),e.push(i))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=ye){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,n,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(i){const r=this[e];this[t]=i,this.requestUpdateInternal(e,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||ye}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=ve){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,i=t.converter||ge,r="function"==typeof i?i:i.fromAttribute;return r?r(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,i=t.converter;return(i&&i.toAttribute||ge.toAttribute)(e,n)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=ye){const i=this.constructor,r=i._attributeNameForProperty(e,n);if(void 0!==r){const e=i._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(r):this.setAttribute(r,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const n=this.constructor,i=n._attributeToPropertyMap.get(e);if(void 0!==i){const e=n.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=n._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,n){let i=!0;if(void 0!==e){const r=this.constructor;n=n||r.getPropertyOptions(e),r._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}be.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const _e=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:n,elements:i}=t;return{kind:n,elements:i,finisher(t){window.customElements.define(e,t)}}})(e,t),we=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(n){n.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}};function Se(e){return(t,n)=>void 0!==n?((e,t,n)=>{t.constructor.createProperty(n,e)})(e,t,n):we(e,t)}function xe(e){return Se({attribute:!1,hasChanged:null==e?void 0:e.hasChanged})}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const ke=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Pe=Symbol();class Oe{constructor(e,t){if(t!==Pe)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(ke?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Ce=(e,...t)=>{const n=t.reduce((t,n,i)=>t+(e=>{if(e instanceof Oe)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[i+1],e[0]);return new Oe(n,Pe)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const Ne={};class Ie extends be{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,n)=>e.reduceRight((e,n)=>Array.isArray(n)?t(n,e):(e.add(n),e),n),n=t(e,new Set),i=[];n.forEach(e=>i.unshift(e)),this._styles=i}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!ke){const t=Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e+t.cssText,"");return new Oe(String(t),Pe)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?ke?this.renderRoot.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==Ne&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return Ne}}Ie.finalized=!0,Ie.render=(e,t,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const i=n.scopeName,r=ae.has(t),o=de&&11===t.nodeType&&!!t.host,a=o&&!pe.has(i),s=a?document.createDocumentFragment():t;if(((e,t,n)=>{let i=ae.get(t);void 0===i&&(O(t,t.firstChild),ae.set(t,i=new Q(Object.assign({templateFactory:re},n))),i.appendInto(t)),i.setValue(e),i.commit()})(e,s,Object.assign({templateFactory:he(i)},n)),a){const e=ae.get(s);ae.delete(s);const n=e.value instanceof F?e.value.template:void 0;me(i,s,n),O(t,t.firstChild),t.appendChild(s),ae.set(t,e)}!r&&o&&window.ShadyCSS.styleElement(t.host)};const Te={severity:100,update_interval:30,title_template:"[[[ return entity.attributes.friendly_name; ]]]",average_template:"[[[ return variables.uptime.toFixed(2); ]]]%",status_template:"[[[ return variables.current; ]]]",title_adaptive_color:!1,status_adaptive_color:!1,icon_adaptive_color:!1,tooltip_adaptive_color:!1},Ae={ok:"#45C669",ko:"#C66445",half:"#C6B145",none:"#C9C9C9",title:"grey",status:"grey",tooltip:"grey",footer:"#AAAAAA",icon:"var(--state-icon-color)"},Ee={header:!0,title:!0,icon:!0,status:!0,timeline:!0,footer:!0,average:!0},$e={height:46,round:1,spacing:4,amount:36},De={hour24:!1,template:"[[[ return variables.from_date; ]]] -         [[[ return variables.to_date; ]]] |         [[[ return variables.average; ]]]%",animation:!0},je={action:"more-info"},Me={header:"spaced",icon_first:!1,status:"spaced",tooltip_first:!1},Re={animation:"raise",duration:.5},Be={title:25,status:25},ze={quantity:1,unit:"day"};let Ue=class extends Ie{constructor(){super(...arguments),this._initialized=!1}setConfig(e){this._config=e,this.loadCardHelpers()}shouldUpdate(){return this._initialized||this._initialize(),!0}render(){return this.hass&&this._helpers&&this.options?(this._helpers.importMoreInfoControl("climate"),ce`
      <div class="card-config">
        ${Object.entries(this.options).map(e=>this.renderOption(e[0],e[1]))}
      </div>
    `):ce``}renderOption(e,t){return ce`
      <div class="option" @click=${this._toggleOption} .option=${e}>
        <div class="row">
          <ha-icon .icon=${"mdi:"+t.icon}></ha-icon>
          <div class="title">${t.name}</div>
        </div>
        <div class="secondary">${t.description}</div>
      </div>

      ${t.show?ce`
            <div class="values">
              ${t.properties.map(e=>this.renderProperty(e))}
            </div>
          `:""}
    `}renderProperty(e){return"input"==e.type?this.renderInputProperty(e):"number"==e.type?this.renderNumberProperty(e):"dropdown"==e.type?this.renderDropdownProperty(e):"switch"==e.type?this.renderSwitchProperty(e):ce``}renderInputProperty(e){return ce`
      <paper-input
        label=${e.label}
        placeholder=${e.default||""}
        .value=${this.getPropertyValue(e)}
        .configValue=${e.name}
        .configSection=${e.section}
        @value-changed=${this._valueChanged}
      ></paper-input>
    `}renderNumberProperty(e){return ce`
      <paper-input
        label=${e.label}
        placeholder=${e.default||""}
        .value=${this.getPropertyValue(e)}
        .configValue=${e.name}
        .configSection=${e.section}
        .number=${!0}
        @value-changed=${this._valueChanged}
        min=${e.min}
        max=${e.max}
        type="number"
      ></paper-input>
    `}renderSwitchProperty(e){const t=this.getPropertyValue(e);return ce`
      <br />
      <ha-formfield .label=${e.label}>
        <ha-switch
          .checked=${null!=t?t:null!=e.default&&e.default}
          .configValue=${e.name}
          .configSection=${e.section}
          @change=${this._valueChanged}
        ></ha-switch>
      </ha-formfield>
    `}renderDropdownProperty(e){return ce`
      <paper-dropdown-menu
        label=${e.label}
        .value=${this.getPropertyValue(e)||e.default||""}
        @value-changed=${this._valueChanged}
        .configValue=${e.name}
        .configSection=${e.section}
      >
        <paper-listbox slot="dropdown-content" .selected=${e.selected}>
          ${e.items.map(e=>ce`
              <paper-item>${e}</paper-item>
            `)}
        </paper-listbox>
      </paper-dropdown-menu>
    `}getPropertyValue(e){if(null==this._config)return;const t=e.section?this._config[e.section]:this._config;return null!=t?t[e.name]:void 0}_initialize(){var e,t,n,i,r,o,a,s,c,l,u,d,h,f,p,m,g;if(void 0===this.hass)return;if(void 0===this._config)return;if(void 0===this._helpers)return;this._initialized=!0;const v=Object.keys(this.hass.states),y=["more-info","url","navigate","toggle","call-service","fire-dom-event"],b=["center","right","left","spaced"],_=["fade","shadow"],w=["card","status","title","icon"],S=["none","raise","reveal","slide"],x=["minute","hour","day","week","month","year"];this.options={mandatory:{icon:"tune",name:"Mandatory",description:"Required options for this card to function",show:!0,properties:[{type:"dropdown",items:v,name:"entity",label:"Entity",selected:v.indexOf((null===(e=this._config)||void 0===e?void 0:e.entity)||"")}]},customization:{icon:"cog",name:"Global customization",description:"Customize the name, icon, etc",show:!1,properties:[{type:"input",name:"attribute",label:"Attribute"},{type:"input",name:"icon",label:"Icon"},{type:"input",name:"ko_icon",label:"KO Icon"},{type:"input",name:"none_icon",label:"None Icon"},{type:"number",name:"severity",label:"Severity",min:0,max:100,default:Te.severity},{type:"number",name:"update_interval",label:"Update interval",min:0,max:86400,default:Te.update_interval},{type:"input",name:"ok",label:"Ok status name"},{type:"input",name:"ko",label:"Ko status name"},{type:"input",name:"none",label:"None status name"},{type:"input",name:"title_template",label:"Title template",default:Te.title_template},{type:"input",name:"status_template",label:"The template of the status",default:Te.status_template},{type:"input",name:"average_template",label:"Average template",default:Te.average_template},{type:"switch",name:"title_adaptive_color",label:"Adaptive color for title",default:Te.title_adaptive_color},{type:"switch",name:"status_adaptive_color",label:"Adaptive color for status",default:Te.status_adaptive_color},{type:"switch",name:"icon_adaptive_color",label:"Adaptive color for icon",default:Te.icon_adaptive_color},{type:"switch",name:"tooltip_adaptive_color",label:"Adaptive color for tooltip",default:Te.tooltip_adaptive_color}]},bar:{icon:"chart-bar",name:"Bar customization",description:"Customize the bar style",show:!1,properties:[{type:"number",name:"height",section:"bar",label:"Height",min:4,max:200,default:$e.height},{type:"number",name:"round",section:"bar",label:"Round corner ratio",min:0,max:100,default:$e.round},{type:"number",name:"spacing",section:"bar",label:"Spacing",min:0,max:10,default:$e.spacing},{type:"number",name:"amount",section:"bar",label:"Amount",min:1,max:100,default:$e.amount}]},init:{icon:"watch",name:"Init customization",description:"Customize the initialization animation",show:!1,properties:[{type:"dropdown",items:S,name:"animation",section:"init",label:"Animation during initilization",selected:S.indexOf((null===(n=null===(t=this._config)||void 0===t?void 0:t.init)||void 0===n?void 0:n.animation)||Re.animation)},{type:"number",name:"duration",section:"init",label:"Animation duration",min:0,max:10,default:Re.duration}]},color:{icon:"palette",name:"Color customization",description:"Customize the color palette",show:!1,properties:[{type:"input",name:"ok",section:"color",label:"Ok's element color",default:Ae.ok},{type:"input",name:"ko",section:"color",label:"Ko's element color",default:Ae.ko},{type:"input",name:"none",section:"color",label:"Unknown's element color",default:Ae.none},{type:"input",name:"half",section:"color",label:"Half's element color",default:Ae.half},{type:"input",name:"title",section:"color",label:"Title text color",default:Ae.title},{type:"input",name:"status",section:"color",label:"Status text color",default:Ae.status},{type:"input",name:"icon",section:"color",label:"Icon color",default:Ae.icon},{type:"input",name:"ko_icon",section:"color",label:"KO Icon color"},{type:"input",name:"tooltip",section:"color",label:"Tooltip text color",default:Ae.tooltip},{type:"input",name:"footer",section:"color",label:"Footer text color",default:Ae.footer}]},show:{icon:"eye",name:"Toggle elements",description:"Show or hide uptime card elements",show:!1,properties:[{type:"switch",name:"header",section:"show",label:"Toggle header",default:Ee.header},{type:"switch",name:"title",section:"show",label:"Toggle title",default:Ee.title},{type:"switch",name:"icon",section:"show",label:"Toggle icon",default:Ee.icon},{type:"switch",name:"status",section:"show",label:"Toggle status",default:Ee.status},{type:"switch",name:"timeline",section:"show",label:"Toggle timeline",default:Ee.timeline},{type:"switch",name:"footer",section:"show",label:"Toggle footer",default:Ee.footer},{type:"switch",name:"average",section:"show",label:"Toggle average",default:Ee.average}]},alias:{icon:"reload",name:"Alias",description:"Replace status name by alias",show:!1,properties:[{type:"input",name:"ok",section:"alias",label:"Alias for Ok status"},{type:"input",name:"ko",section:"alias",label:"Alias for Ko status"}]},tooltip:{icon:"tooltip-text",name:"Tooltip elements",description:"Handle tooltip information",show:!1,properties:[{type:"switch",name:"hour24",section:"tooltip",label:"Set to true to display times in 24-hour format.",default:De.hour24},{type:"switch",name:"animation",section:"tooltip",label:"Set to true to show the animation.",default:De.animation},{type:"input",name:"template",section:"tooltip",label:"Template of the tooltip.",default:De.template}]},tap_action:{icon:"gesture-tap",name:"Tap action elements",description:"Handle tap action information",show:!1,properties:[{type:"dropdown",items:y,name:"action",section:"tap_action",label:"Action to perform.",selected:y.indexOf((null===(r=null===(i=this._config)||void 0===i?void 0:i.tap_action)||void 0===r?void 0:r.action)||je.action)},{type:"input",name:"entity",section:"tap_action",label:"(Only for more-info) Override the entity for more information."},{type:"input",name:"navigation_path",section:"tap_action",label:"(Only for navigate) Path to navigate to (e.g. `/lovelace/0/`)."},{type:"input",name:"url_path",section:"tap_action",label:"(Only for url) URL to open."},{type:"input",name:"service",section:"tap_action",label:"(Only for call-service) Service to call."},{type:"input",name:"service-data",section:"tap_action",label:"(Only for call-service) Service data to include."},{type:"dropdown",items:["success","warning","failure","light","medium","heavy","selection"],name:"haptic",section:"tap_action",label:"Haptic feedback.",selected:y.indexOf((null===(a=null===(o=this._config)||void 0===o?void 0:o.tap_action)||void 0===a?void 0:a.haptic)||"")}]},alignment:{icon:"ruler",name:"Alignment",description:"Align elements from the card",show:!1,properties:[{type:"dropdown",items:b,name:"header",section:"alignment",label:"Alignment of the header.",selected:b.indexOf((null===(c=null===(s=this._config)||void 0===s?void 0:s.alignment)||void 0===c?void 0:c.header)||Me.header)},{type:"switch",name:"icon_first",section:"alignment",label:"Set to true if the icon should be placed before the title.",default:Me.icon_first},{type:"dropdown",items:b,name:"status",section:"alignment",label:"Alignment of the status.",selected:b.indexOf((null===(u=null===(l=this._config)||void 0===l?void 0:l.alignment)||void 0===u?void 0:u.status)||Me.status)},{type:"switch",name:"tooltip_first",section:"alignment",label:"Set to true if the tooltip should be placed before the state.",default:Me.tooltip_first}]},blink:{icon:"alert",name:"Blink customization",description:"Customize blink",show:!1,properties:[{type:"dropdown",items:_,name:"effect",section:"blink",label:"The blink effect.",selected:_.indexOf(null===(h=null===(d=this._config)||void 0===d?void 0:d.blink)||void 0===h?void 0:h.effect)},{type:"dropdown",items:w,name:"target",section:"blink",label:"Set the component to blink.",selected:w.indexOf(null===(p=null===(f=this._config)||void 0===f?void 0:f.blink)||void 0===p?void 0:p.target)},{type:"number",name:"speed",label:"The animation speed.",section:"blink",min:0,max:100}]},clip:{icon:"scissors-cutting",name:"Clip customization",description:"Customize max length of texts",show:!1,properties:[{name:"title",type:"number",label:"The max length of the title before clipping.",section:"clip",min:0,max:100,default:Be.title},{name:"status",type:"number",label:"The max length of the status before clipping.",section:"clip",min:0,max:100,default:Be.status}]},duration:{icon:"clock",name:"Duration customization",description:"Customize the uptime duration",show:!1,properties:[{type:"number",name:"quantity",section:"duration",label:"Duration quantity",min:0,max:24,default:ze.quantity},{type:"dropdown",items:x,name:"unit",section:"duration",label:"Duration unit",selected:x.indexOf((null===(g=null===(m=this._config)||void 0===m?void 0:m.duration)||void 0===g?void 0:g.unit)||ze.unit)}]}}}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_toggleOption(e){if(null==this.options)return;const t=!this.options[e.target.option].show;for(const[e]of Object.entries(this.options))this.options[e].show=!1;this.options[e.target.option].show=t,this._toggle=!this._toggle}_valueChanged(e){if(!this._config||!this.hass)return;const t=e.target,n=t.configSection,i=Object.assign({},this._config),r=(n?Object.assign({},i[n]):i)||{};if(t.configValue)if(void 0===t.value&&void 0===t.checked||""===t.value)delete r[t.configValue],this._config=n?Object.assign(Object.assign({},i),{[n]:r}):Object.assign({},r);else{const e=t.configValue,r=void 0!==t.checked?t.checked:t.value,o=t.number?parseFloat(r):r;this._config=n?Object.assign(Object.assign({},i),{[n]:Object.assign(Object.assign({},i[n]),{[e]:o})}):Object.assign(Object.assign({},i),{[e]:o})}S(this,"config-changed",{config:this._config})}static get styles(){return Ce`
      .option {
        padding: 4px 0px;
        cursor: pointer;
      }
      .row {
        display: flex;
        margin-bottom: -14px;
        pointer-events: none;
      }
      .title {
        padding-left: 16px;
        margin-top: -6px;
        pointer-events: none;
      }
      .secondary {
        padding-left: 40px;
        color: var(--secondary-text-color);
        pointer-events: none;
      }
      .values {
        padding-left: 16px;
        background: var(--secondary-background-color);
        display: grid;
      }
      ha-formfield {
        padding-bottom: 8px;
      }
    `}};e([Se({attribute:!1})],Ue.prototype,"hass",void 0),e([xe()],Ue.prototype,"_config",void 0),e([xe()],Ue.prototype,"_toggle",void 0),e([xe()],Ue.prototype,"_helpers",void 0),e([xe()],Ue.prototype,"options",void 0),Ue=e([_e("uptime-card-editor")],Ue);var Ve=function(){try{if("undefined"!=typeof indexedDB)return indexedDB;if("undefined"!=typeof webkitIndexedDB)return webkitIndexedDB;if("undefined"!=typeof mozIndexedDB)return mozIndexedDB;if("undefined"!=typeof OIndexedDB)return OIndexedDB;if("undefined"!=typeof msIndexedDB)return msIndexedDB}catch(e){return}}();function Fe(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(r){if("TypeError"!==r.name)throw r;for(var n=new("undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder),i=0;i<e.length;i+=1)n.append(e[i]);return n.getBlob(t.type)}}function He(e,t){t&&e.then((function(e){t(null,e)}),(function(e){t(e)}))}function Le(e,t,n){"function"==typeof t&&e.then(t),"function"==typeof n&&e.catch(n)}function qe(e){return"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e)),e}function Ye(){if(arguments.length&&"function"==typeof arguments[arguments.length-1])return arguments[arguments.length-1]}"undefined"==typeof Promise&&require("lie/polyfill");let We;const Je={},Ke=Object.prototype.toString;function Ze(e){return"boolean"==typeof We?Promise.resolve(We):function(e){return new Promise((function(t){var n=e.transaction("local-forage-detect-blob-support","readwrite"),i=Fe([""]);n.objectStore("local-forage-detect-blob-support").put(i,"key"),n.onabort=function(e){e.preventDefault(),e.stopPropagation(),t(!1)},n.oncomplete=function(){var e=navigator.userAgent.match(/Chrome\/(\d+)/),n=navigator.userAgent.match(/Edge\//);t(n||!e||parseInt(e[1],10)>=43)}})).catch((function(){return!1}))}(e).then((function(e){return We=e,We}))}function Qe(e){var t=Je[e.name],n={};n.promise=new Promise((function(e,t){n.resolve=e,n.reject=t})),t.deferredOperations.push(n),t.dbReady?t.dbReady=t.dbReady.then((function(){return n.promise})):t.dbReady=n.promise}function Ge(e){var t=Je[e.name].deferredOperations.pop();if(t)return t.resolve(),t.promise}function Xe(e,t){var n=Je[e.name].deferredOperations.pop();if(n)return n.reject(t),n.promise}function et(e,t){return new Promise((function(n,i){if(Je[e.name]=Je[e.name]||{forages:[],db:null,dbReady:null,deferredOperations:[]},e.db){if(!t)return n(e.db);Qe(e),e.db.close()}var r=[e.name];t&&r.push(e.version);var o=Ve.open.apply(Ve,r);t&&(o.onupgradeneeded=function(t){var n=o.result;try{n.createObjectStore(e.storeName),t.oldVersion<=1&&n.createObjectStore("local-forage-detect-blob-support")}catch(n){if("ConstraintError"!==n.name)throw n;console.warn('The database "'+e.name+'" has been upgraded from version '+t.oldVersion+" to version "+t.newVersion+', but the storage "'+e.storeName+'" already exists.')}}),o.onerror=function(e){e.preventDefault(),i(o.error)},o.onsuccess=function(){n(o.result),Ge(e)}}))}function tt(e){return et(e,!1)}function nt(e){return et(e,!0)}function it(e,t){if(!e.db)return!0;var n=!e.db.objectStoreNames.contains(e.storeName),i=e.version<e.db.version,r=e.version>e.db.version;if(i&&(e.version!==t&&console.warn('The database "'+e.name+"\" can't be downgraded from version "+e.db.version+" to version "+e.version+"."),e.version=e.db.version),r||n){if(n){var o=e.db.version+1;o>e.version&&(e.version=o)}return!0}return!1}function rt(e){return Fe([function(e){for(var t=e.length,n=new ArrayBuffer(t),i=new Uint8Array(n),r=0;r<t;r++)i[r]=e.charCodeAt(r);return n}(atob(e.data))],{type:e.type})}function ot(e){return e&&e.__local_forage_encoded_blob}function at(e){var t=this,n=t._initReady().then((function(){var e=Je[t._dbInfo.name];if(e&&e.dbReady)return e.dbReady}));return Le(n,e,e),n}function st(e,t,n,i){void 0===i&&(i=1);try{var r=e.db.transaction(e.storeName,t);n(null,r)}catch(r){if(i>0&&(!e.db||"InvalidStateError"===r.name||"NotFoundError"===r.name))return Promise.resolve().then(()=>{if(!e.db||"NotFoundError"===r.name&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),nt(e)}).then(()=>function(e){Qe(e);for(var t=Je[e.name],n=t.forages,i=0;i<n.length;i++){const e=n[i];e._dbInfo.db&&(e._dbInfo.db.close(),e._dbInfo.db=null)}return e.db=null,tt(e).then(t=>(e.db=t,it(e)?nt(e):t)).then(i=>{e.db=t.db=i;for(var r=0;r<n.length;r++)n[r]._dbInfo.db=i}).catch(t=>{throw Xe(e,t),t})}(e).then((function(){st(e,t,n,i-1)}))).catch(n);n(r)}}var ct={_driver:"asyncStorage",_initStorage:function(e){var t=this,n={db:null};if(e)for(var i in e)n[i]=e[i];var r=Je[n.name];r||(r={forages:[],db:null,dbReady:null,deferredOperations:[]},Je[n.name]=r),r.forages.push(t),t._initReady||(t._initReady=t.ready,t.ready=at);var o=[];function a(){return Promise.resolve()}for(var s=0;s<r.forages.length;s++){var c=r.forages[s];c!==t&&o.push(c._initReady().catch(a))}var l=r.forages.slice(0);return Promise.all(o).then((function(){return n.db=r.db,tt(n)})).then((function(e){return n.db=e,it(n,t._defaultConfig.version)?nt(n):e})).then((function(e){n.db=r.db=e,t._dbInfo=n;for(var i=0;i<l.length;i++){var o=l[i];o!==t&&(o._dbInfo.db=n.db,o._dbInfo.version=n.version)}}))},_support:function(){try{if(!Ve||!Ve.open)return!1;var e="undefined"!=typeof openDatabase&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),t="function"==typeof fetch&&-1!==fetch.toString().indexOf("[native code");return(!e||t)&&"undefined"!=typeof indexedDB&&"undefined"!=typeof IDBKeyRange}catch(e){return!1}}(),iterate:function(e,t){var n=this,i=new Promise((function(t,i){n.ready().then((function(){st(n._dbInfo,"readonly",(function(r,o){if(r)return i(r);try{var a=o.objectStore(n._dbInfo.storeName).openCursor(),s=1;a.onsuccess=function(){var n=a.result;if(n){var i=n.value;ot(i)&&(i=rt(i));var r=e(i,n.key,s++);void 0!==r?t(r):n.continue()}else t()},a.onerror=function(){i(a.error)}}catch(e){i(e)}}))})).catch(i)}));return He(i,t),i},getItem:function(e,t){var n=this;e=qe(e);var i=new Promise((function(t,i){n.ready().then((function(){st(n._dbInfo,"readonly",(function(r,o){if(r)return i(r);try{var a=o.objectStore(n._dbInfo.storeName).get(e);a.onsuccess=function(){var e=a.result;void 0===e&&(e=null),ot(e)&&(e=rt(e)),t(e)},a.onerror=function(){i(a.error)}}catch(e){i(e)}}))})).catch(i)}));return He(i,t),i},setItem:function(e,t,n){var i=this;e=qe(e);var r=new Promise((function(n,r){var o;i.ready().then((function(){return o=i._dbInfo,"[object Blob]"===Ke.call(t)?Ze(o.db).then((function(e){return e?t:(n=t,new Promise((function(e,t){var i=new FileReader;i.onerror=t,i.onloadend=function(t){var i=btoa(t.target.result||"");e({__local_forage_encoded_blob:!0,data:i,type:n.type})},i.readAsBinaryString(n)})));var n})):t})).then((function(t){st(i._dbInfo,"readwrite",(function(o,a){if(o)return r(o);try{var s=a.objectStore(i._dbInfo.storeName);null===t&&(t=void 0);var c=s.put(t,e);a.oncomplete=function(){void 0===t&&(t=null),n(t)},a.onabort=a.onerror=function(){var e=c.error?c.error:c.transaction.error;r(e)}}catch(e){r(e)}}))})).catch(r)}));return He(r,n),r},removeItem:function(e,t){var n=this;e=qe(e);var i=new Promise((function(t,i){n.ready().then((function(){st(n._dbInfo,"readwrite",(function(r,o){if(r)return i(r);try{var a=o.objectStore(n._dbInfo.storeName).delete(e);o.oncomplete=function(){t()},o.onerror=function(){i(a.error)},o.onabort=function(){var e=a.error?a.error:a.transaction.error;i(e)}}catch(e){i(e)}}))})).catch(i)}));return He(i,t),i},clear:function(e){var t=this,n=new Promise((function(e,n){t.ready().then((function(){st(t._dbInfo,"readwrite",(function(i,r){if(i)return n(i);try{var o=r.objectStore(t._dbInfo.storeName).clear();r.oncomplete=function(){e()},r.onabort=r.onerror=function(){var e=o.error?o.error:o.transaction.error;n(e)}}catch(e){n(e)}}))})).catch(n)}));return He(n,e),n},length:function(e){var t=this,n=new Promise((function(e,n){t.ready().then((function(){st(t._dbInfo,"readonly",(function(i,r){if(i)return n(i);try{var o=r.objectStore(t._dbInfo.storeName).count();o.onsuccess=function(){e(o.result)},o.onerror=function(){n(o.error)}}catch(e){n(e)}}))})).catch(n)}));return He(n,e),n},key:function(e,t){var n=this,i=new Promise((function(t,i){e<0?t(null):n.ready().then((function(){st(n._dbInfo,"readonly",(function(r,o){if(r)return i(r);try{var a=o.objectStore(n._dbInfo.storeName),s=!1,c=a.openKeyCursor();c.onsuccess=function(){var n=c.result;n?0===e||s?t(n.key):(s=!0,n.advance(e)):t(null)},c.onerror=function(){i(c.error)}}catch(e){i(e)}}))})).catch(i)}));return He(i,t),i},keys:function(e){var t=this,n=new Promise((function(e,n){t.ready().then((function(){st(t._dbInfo,"readonly",(function(i,r){if(i)return n(i);try{var o=r.objectStore(t._dbInfo.storeName).openKeyCursor(),a=[];o.onsuccess=function(){var t=o.result;t?(a.push(t.key),t.continue()):e(a)},o.onerror=function(){n(o.error)}}catch(e){n(e)}}))})).catch(n)}));return He(n,e),n},dropInstance:function(e,t){t=Ye.apply(this,arguments);var n=this.config();(e="function"!=typeof e&&e||{}).name||(e.name=e.name||n.name,e.storeName=e.storeName||n.storeName);var i,r=this;if(e.name){const t=e.name===n.name&&r._dbInfo.db?Promise.resolve(r._dbInfo.db):tt(e).then(t=>{const n=Je[e.name],i=n.forages;n.db=t;for(var r=0;r<i.length;r++)i[r]._dbInfo.db=t;return t});i=e.storeName?t.then(t=>{if(!t.objectStoreNames.contains(e.storeName))return;const n=t.version+1;Qe(e);const i=Je[e.name],r=i.forages;t.close();for(let e=0;e<r.length;e++){const t=r[e];t._dbInfo.db=null,t._dbInfo.version=n}return new Promise((t,i)=>{const r=Ve.open(e.name,n);r.onerror=e=>{r.result.close(),i(e)},r.onupgradeneeded=()=>{r.result.deleteObjectStore(e.storeName)},r.onsuccess=()=>{const e=r.result;e.close(),t(e)}}).then(e=>{i.db=e;for(let t=0;t<r.length;t++){const n=r[t];n._dbInfo.db=e,Ge(n._dbInfo)}}).catch(t=>{throw(Xe(e,t)||Promise.resolve()).catch(()=>{}),t})}):t.then(t=>{Qe(e);const n=Je[e.name],i=n.forages;t.close();for(var r=0;r<i.length;r++){i[r]._dbInfo.db=null}return new Promise((t,n)=>{var i=Ve.deleteDatabase(e.name);i.onerror=i.onblocked=e=>{const t=i.result;t&&t.close(),n(e)},i.onsuccess=()=>{const e=i.result;e&&e.close(),t(e)}}).then(e=>{n.db=e;for(var t=0;t<i.length;t++){Ge(i[t]._dbInfo)}}).catch(t=>{throw(Xe(e,t)||Promise.resolve()).catch(()=>{}),t})})}else i=Promise.reject("Invalid arguments");return He(i,t),i}};var lt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ut=/^~~local_forage_type~([^~]+)~/,dt="__lfsc__:".length,ht=dt+"arbf".length,ft=Object.prototype.toString;function pt(e){var t,n,i,r,o,a=.75*e.length,s=e.length,c=0;"="===e[e.length-1]&&(a--,"="===e[e.length-2]&&a--);var l=new ArrayBuffer(a),u=new Uint8Array(l);for(t=0;t<s;t+=4)n=lt.indexOf(e[t]),i=lt.indexOf(e[t+1]),r=lt.indexOf(e[t+2]),o=lt.indexOf(e[t+3]),u[c++]=n<<2|i>>4,u[c++]=(15&i)<<4|r>>2,u[c++]=(3&r)<<6|63&o;return l}function mt(e){var t,n=new Uint8Array(e),i="";for(t=0;t<n.length;t+=3)i+=lt[n[t]>>2],i+=lt[(3&n[t])<<4|n[t+1]>>4],i+=lt[(15&n[t+1])<<2|n[t+2]>>6],i+=lt[63&n[t+2]];return n.length%3==2?i=i.substring(0,i.length-1)+"=":n.length%3==1&&(i=i.substring(0,i.length-2)+"=="),i}var gt={serialize:function(e,t){var n="";if(e&&(n=ft.call(e)),e&&("[object ArrayBuffer]"===n||e.buffer&&"[object ArrayBuffer]"===ft.call(e.buffer))){var i,r="__lfsc__:";e instanceof ArrayBuffer?(i=e,r+="arbf"):(i=e.buffer,"[object Int8Array]"===n?r+="si08":"[object Uint8Array]"===n?r+="ui08":"[object Uint8ClampedArray]"===n?r+="uic8":"[object Int16Array]"===n?r+="si16":"[object Uint16Array]"===n?r+="ur16":"[object Int32Array]"===n?r+="si32":"[object Uint32Array]"===n?r+="ui32":"[object Float32Array]"===n?r+="fl32":"[object Float64Array]"===n?r+="fl64":t(new Error("Failed to get type for BinaryArray"))),t(r+mt(i))}else if("[object Blob]"===n){var o=new FileReader;o.onload=function(){var n="~~local_forage_type~"+e.type+"~"+mt(this.result);t("__lfsc__:blob"+n)},o.readAsArrayBuffer(e)}else try{t(JSON.stringify(e))}catch(n){console.error("Couldn't convert value into a JSON string: ",e),t(null,n)}},deserialize:function(e){if("__lfsc__:"!==e.substring(0,dt))return JSON.parse(e);var t,n=e.substring(ht),i=e.substring(dt,ht);if("blob"===i&&ut.test(n)){var r=n.match(ut);t=r[1],n=n.substring(r[0].length)}var o=pt(n);switch(i){case"arbf":return o;case"blob":return Fe([o],{type:t});case"si08":return new Int8Array(o);case"ui08":return new Uint8Array(o);case"uic8":return new Uint8ClampedArray(o);case"si16":return new Int16Array(o);case"ur16":return new Uint16Array(o);case"si32":return new Int32Array(o);case"ui32":return new Uint32Array(o);case"fl32":return new Float32Array(o);case"fl64":return new Float64Array(o);default:throw new Error("Unkown type: "+i)}},stringToBuffer:pt,bufferToString:mt};function vt(e,t,n,i){e.executeSql(`CREATE TABLE IF NOT EXISTS ${t.storeName} (id INTEGER PRIMARY KEY, key unique, value)`,[],n,i)}function yt(e,t,n,i,r,o){e.executeSql(n,i,r,(function(e,a){a.code===a.SYNTAX_ERR?e.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[t.storeName],(function(e,s){s.rows.length?o(e,a):vt(e,t,(function(){e.executeSql(n,i,r,o)}),o)}),o):o(e,a)}),o)}function bt(e,t,n,i){var r=this;e=qe(e);var o=new Promise((function(o,a){r.ready().then((function(){void 0===t&&(t=null);var s=t,c=r._dbInfo;c.serializer.serialize(t,(function(t,l){l?a(l):c.db.transaction((function(n){yt(n,c,`INSERT OR REPLACE INTO ${c.storeName} (key, value) VALUES (?, ?)`,[e,t],(function(){o(s)}),(function(e,t){a(t)}))}),(function(t){if(t.code===t.QUOTA_ERR){if(i>0)return void o(bt.apply(r,[e,s,n,i-1]));a(t)}}))}))})).catch(a)}));return He(o,n),o}function _t(e){return new Promise((function(t,n){e.transaction((function(i){i.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],(function(n,i){for(var r=[],o=0;o<i.rows.length;o++)r.push(i.rows.item(o).name);t({db:e,storeNames:r})}),(function(e,t){n(t)}))}),(function(e){n(e)}))}))}var wt={_driver:"webSQLStorage",_initStorage:function(e){var t=this,n={db:null};if(e)for(var i in e)n[i]="string"!=typeof e[i]?e[i].toString():e[i];var r=new Promise((function(e,i){try{n.db=openDatabase(n.name,String(n.version),n.description,n.size)}catch(e){return i(e)}n.db.transaction((function(r){vt(r,n,(function(){t._dbInfo=n,e()}),(function(e,t){i(t)}))}),i)}));return n.serializer=gt,r},_support:"function"==typeof openDatabase,iterate:function(e,t){var n=this,i=new Promise((function(t,i){n.ready().then((function(){var r=n._dbInfo;r.db.transaction((function(n){yt(n,r,"SELECT * FROM "+r.storeName,[],(function(n,i){for(var o=i.rows,a=o.length,s=0;s<a;s++){var c=o.item(s),l=c.value;if(l&&(l=r.serializer.deserialize(l)),void 0!==(l=e(l,c.key,s+1)))return void t(l)}t()}),(function(e,t){i(t)}))}))})).catch(i)}));return He(i,t),i},getItem:function(e,t){var n=this;e=qe(e);var i=new Promise((function(t,i){n.ready().then((function(){var r=n._dbInfo;r.db.transaction((function(n){yt(n,r,`SELECT * FROM ${r.storeName} WHERE key = ? LIMIT 1`,[e],(function(e,n){var i=n.rows.length?n.rows.item(0).value:null;i&&(i=r.serializer.deserialize(i)),t(i)}),(function(e,t){i(t)}))}))})).catch(i)}));return He(i,t),i},setItem:function(e,t,n){return bt.apply(this,[e,t,n,1])},removeItem:function(e,t){var n=this;e=qe(e);var i=new Promise((function(t,i){n.ready().then((function(){var r=n._dbInfo;r.db.transaction((function(n){yt(n,r,`DELETE FROM ${r.storeName} WHERE key = ?`,[e],(function(){t()}),(function(e,t){i(t)}))}))})).catch(i)}));return He(i,t),i},clear:function(e){var t=this,n=new Promise((function(e,n){t.ready().then((function(){var i=t._dbInfo;i.db.transaction((function(t){yt(t,i,"DELETE FROM "+i.storeName,[],(function(){e()}),(function(e,t){n(t)}))}))})).catch(n)}));return He(n,e),n},length:function(e){var t=this,n=new Promise((function(e,n){t.ready().then((function(){var i=t._dbInfo;i.db.transaction((function(t){yt(t,i,"SELECT COUNT(key) as c FROM "+i.storeName,[],(function(t,n){var i=n.rows.item(0).c;e(i)}),(function(e,t){n(t)}))}))})).catch(n)}));return He(n,e),n},key:function(e,t){var n=this,i=new Promise((function(t,i){n.ready().then((function(){var r=n._dbInfo;r.db.transaction((function(n){yt(n,r,`SELECT key FROM ${r.storeName} WHERE id = ? LIMIT 1`,[e+1],(function(e,n){var i=n.rows.length?n.rows.item(0).key:null;t(i)}),(function(e,t){i(t)}))}))})).catch(i)}));return He(i,t),i},keys:function(e){var t=this,n=new Promise((function(e,n){t.ready().then((function(){var i=t._dbInfo;i.db.transaction((function(t){yt(t,i,"SELECT key FROM "+i.storeName,[],(function(t,n){for(var i=[],r=0;r<n.rows.length;r++)i.push(n.rows.item(r).key);e(i)}),(function(e,t){n(t)}))}))})).catch(n)}));return He(n,e),n},dropInstance:function(e,t){t=Ye.apply(this,arguments);var n=this.config();(e="function"!=typeof e&&e||{}).name||(e.name=e.name||n.name,e.storeName=e.storeName||n.storeName);var i,r=this;return He(i=e.name?new Promise((function(t){var i;i=e.name===n.name?r._dbInfo.db:openDatabase(e.name,"","",0),e.storeName?t({db:i,storeNames:[e.storeName]}):t(_t(i))})).then((function(e){return new Promise((function(t,n){e.db.transaction((function(i){function r(e){return new Promise((function(t,n){i.executeSql("DROP TABLE IF EXISTS "+e,[],(function(){t()}),(function(e,t){n(t)}))}))}for(var o=[],a=0,s=e.storeNames.length;a<s;a++)o.push(r(e.storeNames[a]));Promise.all(o).then((function(){t()})).catch((function(e){n(e)}))}),(function(e){n(e)}))}))})):Promise.reject("Invalid arguments"),t),i}};function St(e,t){var n=e.name+"/";return e.storeName!==t.storeName&&(n+=e.storeName+"/"),n}function xt(){return!function(){try{return localStorage.setItem("_localforage_support_test",!0),localStorage.removeItem("_localforage_support_test"),!1}catch(e){return!0}}()||localStorage.length>0}var kt={_driver:"localStorageWrapper",_initStorage:function(e){var t={};if(e)for(var n in e)t[n]=e[n];return t.keyPrefix=St(e,this._defaultConfig),xt()?(this._dbInfo=t,t.serializer=gt,Promise.resolve()):Promise.reject()},_support:function(){try{return"undefined"!=typeof localStorage&&"setItem"in localStorage&&!!localStorage.setItem}catch(e){return!1}}(),iterate:function(e,t){var n=this,i=n.ready().then((function(){for(var t=n._dbInfo,i=t.keyPrefix,r=i.length,o=localStorage.length,a=1,s=0;s<o;s++){var c=localStorage.key(s);if(0===c.indexOf(i)){var l=localStorage.getItem(c);if(l&&(l=t.serializer.deserialize(l)),void 0!==(l=e(l,c.substring(r),a++)))return l}}}));return He(i,t),i},getItem:function(e,t){var n=this;e=qe(e);var i=n.ready().then((function(){var t=n._dbInfo,i=localStorage.getItem(t.keyPrefix+e);return i&&(i=t.serializer.deserialize(i)),i}));return He(i,t),i},setItem:function(e,t,n){var i=this;e=qe(e);var r=i.ready().then((function(){void 0===t&&(t=null);var n=t;return new Promise((function(r,o){var a=i._dbInfo;a.serializer.serialize(t,(function(t,i){if(i)o(i);else try{localStorage.setItem(a.keyPrefix+e,t),r(n)}catch(e){"QuotaExceededError"!==e.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==e.name||o(e),o(e)}}))}))}));return He(r,n),r},removeItem:function(e,t){var n=this;e=qe(e);var i=n.ready().then((function(){var t=n._dbInfo;localStorage.removeItem(t.keyPrefix+e)}));return He(i,t),i},clear:function(e){var t=this,n=t.ready().then((function(){for(var e=t._dbInfo.keyPrefix,n=localStorage.length-1;n>=0;n--){var i=localStorage.key(n);0===i.indexOf(e)&&localStorage.removeItem(i)}}));return He(n,e),n},length:function(e){var t=this.keys().then((function(e){return e.length}));return He(t,e),t},key:function(e,t){var n=this,i=n.ready().then((function(){var t,i=n._dbInfo;try{t=localStorage.key(e)}catch(e){t=null}return t&&(t=t.substring(i.keyPrefix.length)),t}));return He(i,t),i},keys:function(e){var t=this,n=t.ready().then((function(){for(var e=t._dbInfo,n=localStorage.length,i=[],r=0;r<n;r++){var o=localStorage.key(r);0===o.indexOf(e.keyPrefix)&&i.push(o.substring(e.keyPrefix.length))}return i}));return He(n,e),n},dropInstance:function(e,t){if(t=Ye.apply(this,arguments),!(e="function"!=typeof e&&e||{}).name){var n=this.config();e.name=e.name||n.name,e.storeName=e.storeName||n.storeName}var i,r=this;return He(i=e.name?new Promise((function(t){e.storeName?t(St(e,r._defaultConfig)):t(e.name+"/")})).then((function(e){for(var t=localStorage.length-1;t>=0;t--){var n=localStorage.key(t);0===n.indexOf(e)&&localStorage.removeItem(n)}})):Promise.reject("Invalid arguments"),t),i}};const Pt=(e,t)=>{const n=e.length;let i=0;for(;i<n;){if((r=e[i])===(o=t)||"number"==typeof r&&"number"==typeof o&&isNaN(r)&&isNaN(o))return!0;i++}var r,o;return!1},Ot=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},Ct={},Nt={},It={INDEXEDDB:ct,WEBSQL:wt,LOCALSTORAGE:kt},Tt=[It.INDEXEDDB._driver,It.WEBSQL._driver,It.LOCALSTORAGE._driver],At=["dropInstance"],Et=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(At),$t={description:"",driver:Tt.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Dt(e,t){e[t]=function(){const n=arguments;return e.ready().then((function(){return e[t].apply(e,n)}))}}function jt(){for(let e=1;e<arguments.length;e++){const t=arguments[e];if(t)for(let e in t)t.hasOwnProperty(e)&&(Ot(t[e])?arguments[0][e]=t[e].slice():arguments[0][e]=t[e])}return arguments[0]}class Mt{constructor(e){for(let e in It)if(It.hasOwnProperty(e)){const t=It[e],n=t._driver;this[e]=n,Ct[n]||this.defineDriver(t)}this._defaultConfig=jt({},$t),this._config=jt({},this._defaultConfig,e),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(()=>{})}config(e){if("object"==typeof e){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(let t in e){if("storeName"===t&&(e[t]=e[t].replace(/\W/g,"_")),"version"===t&&"number"!=typeof e[t])return new Error("Database version must be a number.");this._config[t]=e[t]}return!("driver"in e)||!e.driver||this.setDriver(this._config.driver)}return"string"==typeof e?this._config[e]:this._config}defineDriver(e,t,n){const i=new Promise((function(t,n){try{const i=e._driver,r=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!e._driver)return void n(r);const o=Et.concat("_initStorage");for(let t=0,i=o.length;t<i;t++){const i=o[t];if((!Pt(At,i)||e[i])&&"function"!=typeof e[i])return void n(r)}(function(){const t=function(e){return function(){const t=new Error(`Method ${e} is not implemented by the current driver`),n=Promise.reject(t);return He(n,arguments[arguments.length-1]),n}};for(let n=0,i=At.length;n<i;n++){const i=At[n];e[i]||(e[i]=t(i))}})();const a=function(n){Ct[i]&&console.info("Redefining LocalForage driver: "+i),Ct[i]=e,Nt[i]=n,t()};"_support"in e?e._support&&"function"==typeof e._support?e._support().then(a,n):a(!!e._support):a(!0)}catch(e){n(e)}}));return Le(i,t,n),i}driver(){return this._driver||null}getDriver(e,t,n){const i=Ct[e]?Promise.resolve(Ct[e]):Promise.reject(new Error("Driver not found."));return Le(i,t,n),i}getSerializer(e){const t=Promise.resolve(gt);return Le(t,e),t}ready(e){const t=this,n=t._driverSet.then(()=>(null===t._ready&&(t._ready=t._initDriver()),t._ready));return Le(n,e,e),n}setDriver(e,t,n){const i=this;Ot(e)||(e=[e]);const r=this._getSupportedDrivers(e);function o(){i._config.driver=i.driver()}function a(e){return i._extend(e),o(),i._ready=i._initStorage(i._config),i._ready}const s=null!==this._driverSet?this._driverSet.catch(()=>Promise.resolve()):Promise.resolve();return this._driverSet=s.then(()=>{const e=r[0];return i._dbInfo=null,i._ready=null,i.getDriver(e).then(e=>{i._driver=e._driver,o(),i._wrapLibraryMethodsWithReady(),i._initDriver=function(e){return function(){let t=0;return function n(){for(;t<e.length;){let r=e[t];return t++,i._dbInfo=null,i._ready=null,i.getDriver(r).then(a).catch(n)}o();const r=new Error("No available storage method found.");return i._driverSet=Promise.reject(r),i._driverSet}()}}(r)})}).catch(()=>{o();const e=new Error("No available storage method found.");return i._driverSet=Promise.reject(e),i._driverSet}),Le(this._driverSet,t,n),this._driverSet}supports(e){return!!Nt[e]}_extend(e){jt(this,e)}_getSupportedDrivers(e){const t=[];for(let n=0,i=e.length;n<i;n++){const i=e[n];this.supports(i)&&t.push(i)}return t}_wrapLibraryMethodsWithReady(){for(let e=0,t=Et.length;e<t;e++)Dt(this,Et[e])}createInstance(e){return new Mt(e)}}var Rt=new Mt;const Bt=Ce`
  @keyframes blink-fade {
    50% {
      opacity: 0;
    }
  }

  @keyframes blink-shadow {
    50% {
      box-shadow: 0 0 20px red;
    }
  }

  @keyframes raise {
    0% {
      transform: scaleY(0);
    }
    100% {
      transform: scaleY(1);
    }
  }

  @keyframes reveal {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  :host {
    display: flex;
    flex-direction: column;
  }

  ha-card {
    flex-direction: column;
    flex: 1;
    padding: 16px 0;
    position: relative;
    overflow: hidden;
  }

  ha-card > div {
    padding: 0px 16px;
  }

  .flex {
    display: flex;
    display: -webkit-flex;
    min-width: 0;
  }

  .information[hover] {
    cursor: pointer;
  }

  .header {
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    gap: 4px;
  }

  .header[alignment='center'] {
    justify-content: center;
  }

  .header[alignment='left'] {
    justify-content: flex-start;
  }

  .header[alignment='right'] {
    justify-content: flex-end;
  }

  .header[reverse] {
    flex-direction: row-reverse;
  }

  .name > span {
    font-size: 1.2em;
    font-weight: var(--mcg-title-font-weight, 500);
  }

  .icon {
    display: inline-block;
    flex: 0 0 1.7em;
    text-align: center;
  }

  .icon > * {
    height: 1.7em;
    width: 1.7em;
  }

  .status {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
  }

  .status[alignment='center'] {
    justify-content: center;
  }

  .status[alignment='left'] {
    align-self: flex-start;
  }

  .status[alignment='right'] {
    align-self: flex-end;
  }
  .status[reverse] {
    flex-direction: row-reverse;
  }

  .status > span {
    font-size: 1em;
    font-weight: var(--mcg-title-font-weight, 500);
    max-height: 1em;
    min-height: 1em;
  }

  .status > .tooltip {
    font-size: 0.8em;
  }

  .bar {
    transform-origin: 0 100%;
    transition-property: height y;
    transition-duration: 0.3s;
    transition-timing-function: ease;
  }

  .timeline {
    padding-top: 6px;
    padding-bottom: 0px;
  }

  .footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .footer-text {
    opacity: 0.6;
  }

  .footer-average {
    transition: visibility 0s, opacity 0.1s linear;
    opacity: 0;
  }

  .footer-average[initialized] {
    opacity: 0.6;
  }

  .line {
    opacity: 0.3;
    flex: 1;
    margin: 0.75rem 1rem 0 1rem;
    height: 1px;
    transition: width 0.25s;
  }
`,zt=(e,t)=>e.length>t?e.slice(0,t)+"...":e,Ut=(e,t,n,i)=>([...e.matchAll(/\[\[\[ (.*?) \]\]\]/g)].map(e=>e[1]).forEach(r=>{const o=`[[[ ${r} ]]]`;try{const a=new Function("entity","variables","configuration",r);e=e.replace(o,a(i,t,n))}catch(t){e=e.replace(o,"error")}}),e);console.info("%c uptime-card \n   0.16.0    ","color: white; background-color: #C6B145; font-weight: 700;"),window.customCards=window.customCards||[],window.customCards.push({type:"uptime-card",name:"Uptime Card",description:"The uptime card show you the history of your binary sensors in a cool way."});let Vt=class extends Ie{constructor(){super(...arguments),this.lastUpdate=0}static async getConfigElement(){return document.createElement("uptime-card-editor")}static getStubConfig(){return{}}set hass(e){const t=(new Date).getTime();t-this.lastUpdate<1e3*this.config.update_interval||(this._hass=e,this.updateData(),this.lastUpdate=t)}get actions(){return["more-info","url","navigate","toggle","call-service","fire-dom-event"]}setConfig(e){if(!e)throw new Error("Invalid configuration !");const t=void 0!==e.hours_to_show?{quantity:e.hours_to_show,unit:"hour"}:{};this.config=Object.assign(Object.assign(Object.assign({},Te),e),{color:Object.assign(Object.assign({},Ae),e.color),alias:Object.assign({},e.alias),show:Object.assign(Object.assign({},Ee),e.show),bar:Object.assign(Object.assign({},$e),e.bar),tooltip:Object.assign(Object.assign({},De),e.tooltip),tap_action:Object.assign(Object.assign({},je),e.tap_action),alignment:Object.assign(Object.assign({},Me),e.alignment),init:Object.assign(Object.assign({},Re),e.init),clip:Object.assign(Object.assign({},Be),e.clip),duration:Object.assign(Object.assign(Object.assign({},ze),t),e.duration)}),"string"==typeof this.config.ok&&(this.config.ok=[this.config.ok]),"string"==typeof this.config.ko&&(this.config.ko=[this.config.ko]),null!=this.config.ok&&(this.config.ok=this.config.ok.map(e=>e.toString())),null!=this.config.ko&&(this.config.ko=this.config.ko.map(e=>e.toString())),this.updateData()}shouldUpdate(e){return!!this.config&&function(e,t,n){if(t.has("config")||n)return!0;if(e.config.entity){var i=t.get("hass");return!i||i.states[e.config.entity]!==e.hass.states[e.config.entity]}return!1}(this,e,!1)}firstUpdated(e){this.updateData()}connectedCallback(){super.connectedCallback()}disconnectedCallback(){this.interval&&clearInterval(this.interval),super.disconnectedCallback()}async updateData(){if(null==this.config||null==this._hass)return;const{entity:e,duration:t,attribute:n}=this.config,i=this.durationToHoursToShow(t);if(this.sensor!=this._hass.states[this.config.entity]&&(this.sensor=this._hass.states[this.config.entity],null==this.sensor))return;const r=this.getStatus();if(null==r)return void(this.cache={points:[],lastFetched:-1,lastChanged:-1,hoursToShow:i});const o=n?`${e}#${n}`:e,a=await this.getCache(o);let s;null!=a&&(this.cache=a);const c=null==a||a.hoursToShow<i,l=c?this.getMinimumDate():a.lastFetched,u=new Date(l),d=new Date;if(d.getTime()-u.getTime()<1e4)return;const h=(new Date).getTime(),f=await this.fetchRecent(o,u,d),p=c?f:[...a.points,...f],m=p.findIndex(e=>e.x>this.getMinimumDate()),g=0==m?p:p.slice(m-1),v=this.cleanPoints(g);if(v.length>0)s={points:v,lastFetched:h,lastChanged:v[v.length-1].x,hoursToShow:i};else{const e=new Date(this.sensor.last_changed).getTime();s={points:[{x:e,y:r}],lastFetched:h,lastChanged:e,hoursToShow:i}}await this.setCache(o,s),this.cache=s}async getCache(e){const t=await Rt.getItem(e);return null==t?(console.warn(`Can't load the key ${e} from cache.`),null):(n=t,JSON.parse(n));var n}async setCache(e,t){return Rt.setItem(e,(n=t,JSON.stringify(n)));var n}isOk(e){const{ok:t,ko:n,entity:i,none:r}=this.config;if(null!=e){if(null==t?void 0:t.includes(e))return!0;if(null==n?void 0:n.includes(e))return!1;if(!(null==r?void 0:r.includes(e))){if(null==t&&null==n){const t=i.startsWith("binary_sensor.")||i.startsWith("switch.")||i.startsWith("input_boolean.");return null!=i&&t?"on"==e||"off"!=e&&void 0:void 0}return null==t}}}findBarPeriod(e){const{bar:t}=this.config,n=this.getUptimeSize()/t.amount,i=(new Date).getTime()-(t.amount-1-e)*n;return{from:i-n+1,to:i}}findBarRepartition(e){var t,n;const i={ok:0,ko:0,none:100};if(null==this.cache)return i;const r=this.cache.points.findIndex(t=>t.x>=e.from),o=this.cache.points.findIndex(t=>t.x>e.to);let a;if(0==this.cache.points.length)return i;if(-1==r)a=[this.cache.points[this.cache.points.length-1]];else{if(0==r&&0==o)return i;{const e=0==r?0:1,t=-1==o?this.cache.points.length:o;a=this.cache.points.slice(r-e,t)}}const s={ok:0,ko:0,none:0},c=e.to-e.from;for(let i=0;i<a.length;i++){const r=(a[i+1]?a[i+1].x:e.to)-Math.max(a[i].x,e.from);1==this.isOk(null===(t=a[i].y)||void 0===t?void 0:t.toString())?s.ok+=r:0==this.isOk(null===(n=a[i].y)||void 0===n?void 0:n.toString())?s.ko+=r:s.none+=r}const l=s.ok/c*100,u=s.ko/c*100;return{ok:l,ko:u,none:100-(l+u)}}getUptimeSize(){const{duration:e}=this.config;return 36e5*this.durationToHoursToShow(e)}getMinimumDate(){return(new Date).getTime()-this.getUptimeSize()}getColor(e){const{color:t}=this.config;return 1==this.isOk(e)?t.ok:0==this.isOk(e)?t.ko:t.none}getCssColor(e,t){const n=1==e?this.getColor(this.getStatus()):t||void 0;return n?`color: ${n};`:""}getStatus(){var e,t;const{attribute:n}=this.config,i=n?null===(e=this.sensor)||void 0===e?void 0:e.attributes[n]:null===(t=this.sensor)||void 0===t?void 0:t.state;return null!=i?i.toString():void 0}async fetchRecent(e,t,n){const{attribute:i}=this.config;let r="history/period";t&&(r+="/"+t.toISOString()),r+="?filter_entity_id="+e,n&&(r+="&end_time="+n.toISOString()),null==i&&(r+="&minimal_response");const o=await this._hass.callApi("GET",r);return o[0]?o[0].map(e=>{const t=i?e.attributes[i]:e.state;return{x:new Date(e.last_changed).getTime(),y:t}}):[]}cleanPoints(e){const t=[];let n=void 0;for(const i of e)i.y!=n&&(t.push(i),n=i.y);return t}handleClick(e){e.stopPropagation(),this.config&&this._hass&&k(this,this._hass,this.config,!1,!1)}computeBarColor(e){const{severity:t,color:n,color_thresholds:i}=this.config;if(100==e.none)return n.none;if(i){const t=i.slice().sort((e,t)=>e.value-t.value).find(t=>t.value>=e.ok);return t?t.color:n.none}return 100==e.ok?n.ok:e.ko>=t?n.ko:n.half}attachBlink(e){const t=this.config.blink;return this.isOk(this.getStatus())||!t||e!=t.target||"card"!=t.target&&"shadow"==t.effect?"":`animation: blink-${t.effect} ${t.speed}s infinite;`}render(){const{bar:e}=this.config,t=[...Array(e.amount).keys()].map((e,t)=>{const n=this.findBarPeriod(t);return{period:n,repartition:this.findBarRepartition(n),index:t}});return ce`
      <ha-card class="flex" style="${this.attachBlink("card")}">
        ${this.renderInformation()} ${this.renderTimeline(t)}
        ${this.renderFooter(t.map(e=>e.repartition))}
      </ha-card>
    `}renderInformation(){const{tap_action:e}=this.config;return ce`
      <div class="information" @click=${this.handleClick} ?hover=${this.actions.includes(e.action)}>
        ${this.renderHeader()} ${this.renderStatus()}
      </div>
    `}renderHeader(){const{show:e,alignment:t}=this.config;let n=t.header;return t.icon_first&&("right"===n?n="left":"left"===n&&(n="right")),e.header?ce`
          <div class="header flex" alignment="${n}" ?reverse="${t.icon_first}">
            ${this.renderTitle()} ${this.renderIcon()}
          </div>
        `:ce``}renderTitle(){const{color:e,title_adaptive_color:t,show:n,title_template:i}=this.config,r=Ut(i,{},this.config,this.sensor);return n.title?ce`
          <div class="name" style="${this.attachBlink("title")}">
            <span style=${this.getCssColor(t,e.title)}
              >${zt(r,this.config.clip.title)}</span
            >
          </div>
        `:ce``}renderStatus(){const{show:e,alignment:t}=this.config;return e.status?ce`
          <div class="status" alignment="${t.status}" ?reverse="${t.tooltip_first}">
            ${this.renderState()} ${this.renderTooltip()}
          </div>
        `:ce``}renderState(){const{alias:e,color:t,status_adaptive_color:n,status_template:i,ok:r,ko:o}=this.config;let a;a=null==this.sensor?"Unknown":1==this.isOk(this.getStatus())&&e.ok?e.ok:0==this.isOk(this.getStatus())&&e.ko?e.ko:null==this.isOk(this.getStatus())?"Unknown":this.getStatus()||"Unknown";const s=Ut(i,{current:a,ok:e.ok||r||"[[[ return variables.ok ]]]",ko:e.ko||o||"[[[ return variables.ko ]]]"},this.config,this.sensor);return ce`
      <span style="${this.getCssColor(n,t.status)} ${this.attachBlink("status")}"
        >${zt(s,this.config.clip.status)}</span
      >
    `}durationToHoursToShow(e){switch(e.unit){case"minute":return e.quantity/60;case"hour":return e.quantity;case"day":return 24*e.quantity;case"week":return 24*e.quantity*7;case"month":return 24*e.quantity*30;case"year":return 24*e.quantity*30*12}}durationToFormatOptions(e,t){const n={hour:"numeric",minute:"numeric",second:"numeric",hour12:0==t},i={hour:"numeric",minute:"numeric",hour12:0==t},r={weekday:"short",day:"numeric"},o=Object.assign(Object.assign({},i),r),a=Object.assign(Object.assign({},i),r),s=Object.assign(Object.assign(Object.assign({},r),{month:"short"}),{year:"numeric"});switch(e.unit){case"minute":return[n,n];case"hour":return[o,i];case"day":return[o,o];case"week":return[a,a];case"month":case"year":return[s,s]}}renderTooltip(){const{duration:e,tooltip:t,tooltip_adaptive_color:n,color:i}=this.config;if(null==this.tooltip)return ce``;const r=this._hass.language,[o,a]=this.durationToFormatOptions(e,t.hour24),s=new Date(this.tooltip.period.from).toLocaleString(r,o),c=new Date(this.tooltip.period.to).toLocaleString(r,a),l=this.tooltip.repartition.ok.toFixed(2),u=Ut(t.template,{from_date:s,to_date:c,average:l},this.config,this.sensor);let d=i.tooltip;return n&&(d=100==this.tooltip.repartition.ok?i.ok:100==this.tooltip.repartition.ko?i.ko:100==this.tooltip.repartition.none?i.none:i.half),ce`
      <span class="tooltip" style="color: ${d};">${u}</span>
    `}renderIcon(){var e;const{icon:t,ko_icon:n,none_icon:i,show:r,icon_adaptive_color:o,color:a}=this.config,s=this.isOk(this.getStatus()),c=void 0===s&&i?i:!1===s&&n?n:t,l=!1===s&&a.ko_icon?a.ko_icon:a.icon,u=c||(null===(e=this.sensor)||void 0===e?void 0:e.attributes.icon)||"mdi:heart",d=`background-image: url(${u}); background-size: cover;`,h=(null==u?void 0:u.startsWith("/local"))||(null==u?void 0:u.startsWith("http"))?ce`
            <div class="icon-image" style="${d} ${this.attachBlink("icon")}"></div>
          `:ce`
            <ha-icon .icon=${u}></ha-icon>
          `;return r.icon?ce`
          <div
            class="icon"
            style="${this.getCssColor(o,l)} ${this.attachBlink("icon")}"
          >
            ${h}
          </div>
        `:""}renderTimeline(e){const{show:t,bar:n,tooltip:i}=this.config,r=t.status&&i.animation,o=r?n.height+5:n.height,a=n.spacing*(n.amount-1),s=Math.floor((500-a)/n.amount),c=500-a-s*n.amount;if(0==t.timeline)return"";const l=e.map((e,t)=>{var i;const o=this.computeBarColor(e.repartition),a=(null===(i=this.tooltip)||void 0===i?void 0:i.index)==t&&r,l=a?n.height+5:n.height,u=r?a?0:5:0;return this.renderBar(t,t*(s+n.spacing)+c/2,u,s,l,n.amount,o,n.round,e)});return ce`
      <div class="timeline">
        <svg width="100%" height="100%" } viewBox="0 0 ${500} ${o}">
          ${l}
        </svg>
      </div>
    `}getInitAnimationCss(e,t,n,i){const r="cubic-bezier(0.11, 0.95, 0.66, 1)";if("none"==n)return"";if("raise"==n)return`\n        transform: scaleY(0);\n        animation: raise ${i}s ${r} forwards;\n      `;if("reveal"==n)return`\n        opacity: 0;\n        animation: reveal ${i}s ${r} forwards;\n      `;const o=i/t;return`\n      opacity: 0;\n      animation: reveal ${o}s ${r} forwards;\n      animation-delay: ${e*o}s;\n    `}renderBar(e,t,n,i,r,o,a,s,c){const{init:l}=this.config,u=this.getInitAnimationCss(e,o,l.animation,l.duration);return le`
        <rect
            class='bar'
            x=${t}
            y=${n}
            rx=${s}
            ry=${s}
            height=${r}
            width=${i}
            fill=${a}
            style=${u}
            @mouseover=${()=>this.tooltip=c}
            @mouseout=${()=>this.tooltip=void 0}>
        ></rect>`}renderFooter(e){const{show:t,color:n}=this.config,i=this.generateMinimalDate();return t.footer&&t.timeline&&i?ce`
          <div class="footer" style="color: ${n.footer};">
            <div class="footer-text">${i}</div>
            ${t.average?this.renderLine(n.footer):ce``} ${this.renderAverage(e)}
            ${this.renderLine(n.footer)}
            <div class="footer-text">Now</div>
          </div>
        `:ce``}renderAverage(e){const{show:t,average_template:n}=this.config,i=e.reduce((e,t)=>e+t.ok,0)/e.length,r=Ut(n,{uptime:i},this.config,this.sensor);return t.average?ce`
          <div ?initialized=${!0} class="footer-average">${r}</div>
        `:ce``}generateMinimalDate(){const{duration:e}=this.config;if(e.quantity<=0)return"Now";switch(e.unit){case"minute":return 1==e.quantity?"1 min ago":e.quantity+" mins ago";case"hour":return 1==e.quantity?"1 hour ago":e.quantity+" hours ago";case"day":return 1==e.quantity?"1 day ago":e.quantity+" days ago";case"week":return 1==e.quantity?"1 week ago":e.quantity+" weeks ago";case"month":return 1==e.quantity?"1 month ago":e.quantity+" months ago";case"year":return 1==e.quantity?"1 year ago":e.quantity+" years ago"}}renderLine(e){return ce`
      <div class="line" style="background: ${e};"></div>
    `}static get styles(){return Bt}};e([Se({attribute:!1})],Vt.prototype,"_hass",void 0),e([xe()],Vt.prototype,"config",void 0),e([xe()],Vt.prototype,"sensor",void 0),e([xe()],Vt.prototype,"interval",void 0),e([xe()],Vt.prototype,"cache",void 0),e([xe()],Vt.prototype,"tooltip",void 0),e([xe()],Vt.prototype,"lastUpdate",void 0),Vt=e([_e("uptime-card")],Vt);export{Vt as UptimeCard};
