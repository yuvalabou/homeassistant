/*! For license information please see room-card.js.LICENSE.txt */
(()=>{"use strict";const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),n=new Map;class i{constructor(t,n){if(this._$cssResult$=!0,n!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=n.get(this.cssText);return t&&void 0===e&&(n.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const r=(t,...n)=>{const r=1===t.length?t[0]:n.reduce(((e,n,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[i+1]),t[0]);return new i(r,e)},o=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let n="";for(const e of t.cssRules)n+=e.cssText;return(t=>new i("string"==typeof t?t:t+"",e))(n)})(t):t;var s;const a=window.trustedTypes,c=a?a.emptyScript:"",l=window.reactiveElementPolyfillSupport,u={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch(t){n=null}}return n}},h=(t,e)=>e!==t&&(e==e||t==t),d={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:h};class f extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,n)=>{const i=this._$Eh(n,e);void 0!==i&&(this._$Eu.set(i,n),t.push(i))})),t}static createProperty(t,e=d){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const n="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,n,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(i){const r=this[t];this[e]=i,this.requestUpdate(t,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||d}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of e)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const t of n)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eh(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,n;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(n=t.hostConnected)||void 0===n||n.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const n=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,n)=>{t?e.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((t=>{const n=document.createElement("style"),i=window.litNonce;void 0!==i&&n.setAttribute("nonce",i),n.textContent=t.cssText,e.appendChild(n)}))})(n,this.constructor.elementStyles),n}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ES(t,e,n=d){var i,r;const o=this.constructor._$Eh(t,n);if(void 0!==o&&!0===n.reflect){const s=(null!==(r=null===(i=n.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==r?r:u.toAttribute)(e,n.type);this._$Ei=t,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Ei=null}}_$AK(t,e){var n,i,r;const o=this.constructor,s=o._$Eu.get(t);if(void 0!==s&&this._$Ei!==s){const t=o.getPropertyOptions(s),a=t.converter,c=null!==(r=null!==(i=null===(n=a)||void 0===n?void 0:n.fromAttribute)&&void 0!==i?i:"function"==typeof a?a:null)&&void 0!==r?r:u.fromAttribute;this._$Ei=s,this[s]=c(e,t.type),this._$Ei=null}}requestUpdate(t,e,n){let i=!0;void 0!==t&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||h)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===n.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,n))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(n)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(n)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}var p;f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==l||l({ReactiveElement:f}),(null!==(s=globalThis.reactiveElementVersions)&&void 0!==s?s:globalThis.reactiveElementVersions=[]).push("1.2.1");const m=globalThis.trustedTypes,y=m?m.createPolicy("lit-html",{createHTML:t=>t}):void 0,v=`lit$${(Math.random()+"").slice(9)}$`,b="?"+v,_=`<${b}>`,g=document,$=(t="")=>g.createComment(t),w=t=>null===t||"object"!=typeof t&&"function"!=typeof t,A=Array.isArray,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,S=/>/g,j=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,x=/'/g,P=/"/g,k=/^(?:script|style|textarea)$/i,C=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),N=C(1),D=(C(2),Symbol.for("lit-noChange")),U=Symbol.for("lit-nothing"),T=new WeakMap,H=g.createTreeWalker(g,129,null,!1),M=(t,e)=>{const n=t.length-1,i=[];let r,o=2===e?"<svg>":"",s=O;for(let e=0;e<n;e++){const n=t[e];let a,c,l=-1,u=0;for(;u<n.length&&(s.lastIndex=u,c=s.exec(n),null!==c);)u=s.lastIndex,s===O?"!--"===c[1]?s=E:void 0!==c[1]?s=S:void 0!==c[2]?(k.test(c[2])&&(r=RegExp("</"+c[2],"g")),s=j):void 0!==c[3]&&(s=j):s===j?">"===c[0]?(s=null!=r?r:O,l=-1):void 0===c[1]?l=-2:(l=s.lastIndex-c[2].length,a=c[1],s=void 0===c[3]?j:'"'===c[3]?P:x):s===P||s===x?s=j:s===E||s===S?s=O:(s=j,r=void 0);const h=s===j&&t[e+1].startsWith("/>")?" ":"";o+=s===O?n+_:l>=0?(i.push(a),n.slice(0,l)+"$lit$"+n.slice(l)+v+h):n+v+(-2===l?(i.push(void 0),e):h)}const a=o+(t[n]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==y?y.createHTML(a):a,i]};class R{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let r=0,o=0;const s=t.length-1,a=this.parts,[c,l]=M(t,e);if(this.el=R.createElement(c,n),H.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=H.nextNode())&&a.length<s;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(v)){const n=l[o++];if(t.push(e),void 0!==n){const t=i.getAttribute(n.toLowerCase()+"$lit$").split(v),e=/([.?@])?(.*)/.exec(n);a.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?L:"?"===e[1]?W:"@"===e[1]?q:B})}else a.push({type:6,index:r})}for(const e of t)i.removeAttribute(e)}if(k.test(i.tagName)){const t=i.textContent.split(v),e=t.length-1;if(e>0){i.textContent=m?m.emptyScript:"";for(let n=0;n<e;n++)i.append(t[n],$()),H.nextNode(),a.push({type:2,index:++r});i.append(t[e],$())}}}else if(8===i.nodeType)if(i.data===b)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(v,t+1));)a.push({type:7,index:r}),t+=v.length-1}r++}}static createElement(t,e){const n=g.createElement("template");return n.innerHTML=t,n}}function I(t,e,n=t,i){var r,o,s,a;if(e===D)return e;let c=void 0!==i?null===(r=n._$Cl)||void 0===r?void 0:r[i]:n._$Cu;const l=w(e)?void 0:e._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(o=null==c?void 0:c._$AO)||void 0===o||o.call(c,!1),void 0===l?c=void 0:(c=new l(t),c._$AT(t,n,i)),void 0!==i?(null!==(s=(a=n)._$Cl)&&void 0!==s?s:a._$Cl=[])[i]=c:n._$Cu=c),void 0!==c&&(e=I(t,c._$AS(t,e.values),c,i)),e}class z{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:n},parts:i}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:g).importNode(n,!0);H.currentNode=r;let o=H.nextNode(),s=0,a=0,c=i[0];for(;void 0!==c;){if(s===c.index){let e;2===c.type?e=new F(o,o.nextSibling,this,t):1===c.type?e=new c.ctor(o,c.name,c.strings,this,t):6===c.type&&(e=new J(o,this,t)),this.v.push(e),c=i[++a]}s!==(null==c?void 0:c.index)&&(o=H.nextNode(),s++)}return r}m(t){let e=0;for(const n of this.v)void 0!==n&&(void 0!==n.strings?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class F{constructor(t,e,n,i){var r;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cg=null===(r=null==i?void 0:i.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=I(this,t,e),w(t)?t===U||null==t||""===t?(this._$AH!==U&&this._$AR(),this._$AH=U):t!==this._$AH&&t!==D&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return A(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.A(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==U&&w(this._$AH)?this._$AA.nextSibling.data=t:this.S(g.createTextNode(t)),this._$AH=t}T(t){var e;const{values:n,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=R.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.m(n);else{const t=new z(r,this),e=t.p(this.options);t.m(n),this.S(e),this._$AH=t}}_$AC(t){let e=T.get(t.strings);return void 0===e&&T.set(t.strings,e=new R(t)),e}A(t){A(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,i=0;for(const r of t)i===e.length?e.push(n=new F(this.M($()),this.M($()),this,this.options)):n=e[i],n._$AI(r),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var n;for(null===(n=this._$AP)||void 0===n||n.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class B{constructor(t,e,n,i,r){this.type=1,this._$AH=U,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,n,i){const r=this.strings;let o=!1;if(void 0===r)t=I(this,t,e,0),o=!w(t)||t!==this._$AH&&t!==D,o&&(this._$AH=t);else{const i=t;let s,a;for(t=r[0],s=0;s<r.length-1;s++)a=I(this,i[n+s],e,s),a===D&&(a=this._$AH[s]),o||(o=!w(a)||a!==this._$AH[s]),a===U?t=U:t!==U&&(t+=(null!=a?a:"")+r[s+1]),this._$AH[s]=a}o&&!i&&this.k(t)}k(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class L extends B{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===U?void 0:t}}const V=m?m.emptyScript:"";class W extends B{constructor(){super(...arguments),this.type=4}k(t){t&&t!==U?this.element.setAttribute(this.name,V):this.element.removeAttribute(this.name)}}class q extends B{constructor(t,e,n,i,r){super(t,e,n,i,r),this.type=5}_$AI(t,e=this){var n;if((t=null!==(n=I(this,t,e,0))&&void 0!==n?n:U)===D)return;const i=this._$AH,r=t===U&&i!==U||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==U&&(i===U||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,n;"function"==typeof this._$AH?this._$AH.call(null!==(n=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==n?n:this.element,t):this._$AH.handleEvent(t)}}class J{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){I(this,t)}}const K=window.litHtmlPolyfillSupport;var Z,G;null==K||K(R,F),(null!==(p=globalThis.litHtmlVersions)&&void 0!==p?p:globalThis.litHtmlVersions=[]).push("2.1.2");class Q extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const n=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=n.firstChild),n}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,n)=>{var i,r;const o=null!==(i=null==n?void 0:n.renderBefore)&&void 0!==i?i:e;let s=o._$litPart$;if(void 0===s){const t=null!==(r=null==n?void 0:n.renderBefore)&&void 0!==r?r:null;o._$litPart$=s=new F(e.insertBefore($(),t),t,void 0,null!=n?n:{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return D}}Q.finalized=!0,Q._$litElement$=!0,null===(Z=globalThis.litElementHydrateSupport)||void 0===Z||Z.call(globalThis,{LitElement:Q});const X=globalThis.litElementPolyfillSupport;var Y,tt,et;function nt(){return(nt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}null==X||X({LitElement:Q}),(null!==(G=globalThis.litElementVersions)&&void 0!==G?G:globalThis.litElementVersions=[]).push("3.1.2"),(et=Y||(Y={})).language="language",et.system="system",et.comma_decimal="comma_decimal",et.decimal_comma="decimal_comma",et.space_comma="space_comma",et.none="none",function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(tt||(tt={}));var it=["closed","locked","off"],rt=(new Set(["fan","input_boolean","light","switch","group","automation"]),function(t,e,n,i){i=i||{},n=null==n?{}:n;var r=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return r.detail=n,t.dispatchEvent(r),r});new Set(["call-service","divider","section","weblink","cast","select"]);var ot=function(t){rt(window,"haptic",t)},st=function(t,e,n,i,r){var o;if(r&&n.double_tap_action?o=n.double_tap_action:i&&n.hold_action?o=n.hold_action:!i&&n.tap_action&&(o=n.tap_action),o||(o={action:"more-info"}),!o.confirmation||o.confirmation.exemptions&&o.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||confirm(o.confirmation.text||"Are you sure you want to "+o.action+"?"))switch(o.action){case"more-info":(o.entity||n.entity||n.camera_image)&&(rt(t,"hass-more-info",{entityId:o.entity?o.entity:n.entity?n.entity:n.camera_image}),o.haptic&&ot(o.haptic));break;case"navigate":o.navigation_path&&(function(t,e,n){void 0===n&&(n=!1),n?history.replaceState(null,"",e):history.pushState(null,"",e),rt(window,"location-changed",{replace:n})}(0,o.navigation_path),o.haptic&&ot(o.haptic));break;case"url":o.url_path&&window.open(o.url_path),o.haptic&&ot(o.haptic);break;case"toggle":n.entity&&(function(t,e){(function(t,e,n){void 0===n&&(n=!0);var i,r=function(t){return t.substr(0,t.indexOf("."))}(e),o="group"===r?"homeassistant":r;switch(r){case"lock":i=n?"unlock":"lock";break;case"cover":i=n?"open_cover":"close_cover";break;default:i=n?"turn_on":"turn_off"}t.callService(o,i,{entity_id:e})})(t,e,it.includes(t.states[e].state))}(e,n.entity),o.haptic&&ot(o.haptic));break;case"call-service":if(!o.service)return;var s=o.service.split(".",2),a=s[0],c=s[1],l=nt({},o.service_data);"entity"===l.entity_id&&(l.entity_id=n.entity),e.callService(a,c,l,o.target),o.haptic&&ot(o.haptic);break;case"fire-dom-event":rt(t,"ll-custom",o),o.haptic&&ot(o.haptic)}},at="unavailable",ct="unknown",lt=[at,ct],ut="last-changed",ht="last-updated",dt=["relative","total","date","time","datetime"],ft="language",pt=function(t){return t<10?"0".concat(t):t};function mt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function yt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var vt=function(t,e,n){var i=e?function(t){switch(t.number_format){case"comma_decimal":return["en-US","en"];case"decimal_comma":return["de","es","it"];case"space_comma":return["fr","sv","cs"];case"system":return;default:return t.language}}(e):void 0;if(Number.isNaN=Number.isNaN||function t(e){return"number"==typeof e&&t(e)},"none"!==(null==e?void 0:e.number_format)&&!Number.isNaN(Number(t))&&Intl)try{return new Intl.NumberFormat(i,bt(t,n)).format(Number(t))}catch(e){return console.error(e),new Intl.NumberFormat(void 0,bt(t,n)).format(Number(t))}return"string"==typeof t?t:"".concat(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Math.round(t*Math.pow(10,e))/Math.pow(10,e)}(t,null==n?void 0:n.maximumFractionDigits).toString()).concat("currency"===(null==n?void 0:n.style)?" ".concat(n.currency):"")},bt=function(t,e){var n=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?mt(Object(n),!0).forEach((function(e){yt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):mt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({maximumFractionDigits:2},e);if("string"!=typeof t)return n;if(!e||!e.minimumFractionDigits&&!e.maximumFractionDigits){var i=t.indexOf(".")>-1?t.split(".")[1].length:0;n.minimumFractionDigits=i,n.maximumFractionDigits=i}return n},_t=Number.isNaN||function(t){return"number"==typeof t&&t!=t};function gt(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(!((i=t[n])===(r=e[n])||_t(i)&&_t(r)))return!1;var i,r;return!0}function $t(t,e){void 0===e&&(e=gt);var n=null;function i(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];if(n&&n.lastThis===this&&e(i,n.lastArgs))return n.lastResult;var o=t.apply(this,i);return n={lastResult:o,lastArgs:i,lastThis:this},o}return i.clear=function(){n=null},i}var wt=function(t,e){return At(e).format(t)},At=$t((function(t){return new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric"})})),Ot=$t((function(t){if(t.time_format===ft||"system"===t.time_format){var e=t.time_format===ft?t.language:void 0,n=(new Date).toLocaleString(e);return n.includes("AM")||n.includes("PM")}return"12"===t.time_format})),Et=function(t,e){return St(e).format(t)},St=$t((function(t){return new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric",hour:Ot(t)?"numeric":"2-digit",minute:"2-digit",hour12:Ot(t)})})),jt=function(t,e){return xt(e).format(t)},xt=$t((function(t){return new Intl.DateTimeFormat(t.language,{hour:"numeric",minute:"2-digit",hour12:Ot(t)})})),Pt=function(t){return t.entity_id.substr(0,t.entity_id.indexOf("."))};function kt(t){return kt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},kt(t)}var Ct=function(t){return"object"===kt(t)&&!Array.isArray(t)&&!!t},Nt=function(t){return!t||lt.includes(t.state)},Dt=function(t,e){if(function(t,e){return e.hide_unavailable&&(Nt(t)||e.attribute&&void 0===t.attributes[e.attribute])}(t,e))return!0;if(void 0===e.hide_if)return!1;var n=e.attribute?t.attributes[e.attribute]:t.state,i=[];if(Ct(e.hide_if)){if(e.hide_if.below&&n<e.hide_if.below)return!0;if(e.hide_if.above&&n>e.hide_if.above)return!0;e.hide_if.value&&(i=i.concat(e.hide_if.value))}else i=i.concat(e.hide_if);return i.some((function(t){return"number"==typeof t?t===+n:t===n}))};function Ut(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function Tt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Ut(Object(n),!0).forEach((function(e){Ht(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ut(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Ht(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Mt,Rt,It,zt,Ft,Bt,Lt,Vt,Wt,qt,Jt,Kt=function(t){if(Ct(t)&&!(t.entity||t.attribute||t.icon))throw new Error("Entity object requires at least one 'entity', 'attribute' or 'icon'.");if("string"==typeof t&&""===t)throw new Error("Entity ID string must not be blank.");if("string"!=typeof t&&!Ct(t))throw new Error("Entity config must be a valid entity ID string or entity object.")},Zt=function(t){return Ct(null==t?void 0:t.styles)?Object.keys(t.styles).map((function(e){return"".concat(e,": ").concat(t.styles[e],";")})).join(""):""};function Gt(t){return Gt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Gt(t)}function Qt(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function Xt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function Yt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Xt(Object(n),!0).forEach((function(e){te(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Xt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function te(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ee(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ne(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function ie(t,e){return ie=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},ie(t,e)}function re(t,e){if(e&&("object"===Gt(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function oe(t){return oe=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},oe(t)}console.info("%c ROOM-CARD %c 0.0.7 ","color: cyan; background: black; font-weight: bold;","color: darkblue; background: white; font-weight: bold;");var se=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&ie(t,e)}(c,t);var e,n,i,o,s,a=(o=c,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=oe(o);if(s){var n=oe(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return re(this,t)});function c(){return ee(this,c),a.apply(this,arguments)}return e=c,i=[{key:"properties",get:function(){return{_hass:Object,config:Object,stateObj:Object,_refCards:[]}}},{key:"styles",get:function(){return r(Mt||(t=["\n    ha-card .card-header {\n        padding-bottom: 0px;\n    }\n    .icon-small {\n        display: inline-block;\n    }\n    .entity {\n        text-align: center;\n        cursor: pointer;\n    }\n    .entity span {\n        font-size: 10px;\n        color: var(--secondary-text-color);\n    }\n    .entities-row {\n        flex-direction: row;\n        display: inline-flex;\n        justify-content: space-between;\n        align-items: center;\n        padding: 0 20px 10px 20px;\n    }\n    .entities-row .entity {\n        margin-right: 16px;\n    }\n    .entities-row .entity:last-of-type,\n    .entities-info-row .entity:last-of-type {\n        margin-right: 0;\n    }\n    .entities-column {\n        flex-direction: column;\n        display: flex;\n        align-items: flex-end;\n        justify-content: space-evenly;\n    }\n    .entities-column .entity div {\n        display: inline-block;\n        vertical-align: middle;\n    }\n\n    .entities-info-row {\n        flex-direction: row;\n        display: inline-flex;\n        justify-content: space-between;\n        align-items: center;\n        padding: 0 20px 10px 20px;\n        font-size: 12px;\n        position: absolute;\n        right: 20px;\n        top: 15px;\n    }\n    .entities-info-row .entity {\n        margin-right: 16px;\n    }\n    .main-state {\n        float: left;\n        margin-right: 10px;\n    }\n    .main-state > ha-state-icon > ha-svg-icon {\n        vertical-align: baseline;\n    }\n    .main-icon {\n        vertical-align: baseline;\n        font-size: 30px;\n    }\n"],e||(e=t.slice(0)),Mt=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))));var t,e}}],(n=[{key:"setConfig",value:function(t){if(!t||!t.entities&&!t.entity&&!t.info_entities)throw new Error("Please define entities.");t.entity&&Kt(t.entity),t.entities&&t.entities.forEach((function(t){return Kt(t)})),t.info_entities&&t.info_entities.forEach((function(t){return Kt(t)})),this.entityIds=function(t){var e,n;return[t.entity,t.entities,t.info_entities].concat(null===(e=t.entities)||void 0===e?void 0:e.map((function(t){return"string"==typeof t?t:t.entity}))).concat(null===(n=t.info_entities)||void 0===n?void 0:n.map((function(t){return"string"==typeof t?t:t.entity}))).filter((function(t){return t}))}(t),this.config=Yt(Yt({},t),{},{name:!1===t.name?" ":t.name})}},{key:"shouldUpdate",value:function(t){return function(t,e){if(e.has("config"))return!0;var n=e.get("_hass");return!!n&&t.entityIds.some((function(e){return n.states[e]!==t._hass.states[e]}))}(this,t)}},{key:"hass",set:function(t){var e=this;if(this._hass=t,t&&this.config){var n,i,r,o,s;if(this.config.entity){this.stateObj=t.states[this.config.entity];var a="string"==typeof config?{entity:this.config.entity}:this.config.entity;this.entity=Yt(Yt({},a),{},{stateObj:a.entity?t.states[a.entity]:this.stateObj})}this.info_entities=null!==(n=null===(i=this.config.info_entities)||void 0===i?void 0:i.map((function(n){var i="string"==typeof n?{entity:n}:n;return Yt(Yt({},i),{},{stateObj:i.entity?t.states[i.entity]:e.stateObj})})))&&void 0!==n?n:[],this.entities=null!==(r=null===(o=this.config.entities)||void 0===o?void 0:o.map((function(n){var i="string"==typeof n?{entity:n}:n;return Yt(Yt({},i),{},{stateObj:i.entity?t.states[i.entity]:e.stateObj})})))&&void 0!==r?r:[],this._refCards=null===(s=this.config.cards)||void 0===s?void 0:s.map((function(n){return e.createCardElement(n,t)}))}}},{key:"createCardElement",value:function(t,e){if(!t.show_states||t.show_states.includes(e.states[t.entity].state)){var n=function(t,e){var i,r=document.createElement(t);try{r.setConfig(e)}catch(r){return console.error(t,r),i=r.message,n("hui-error-card",{type:"error",error:i,origConfig:e})}return r},i=t.type;i=i.startsWith("divider")?"hui-divider-row":i.startsWith("custom:")?i.substr("custom:".length):"hui-".concat(i,"-card");var r=n(i,t);return r.hass=e,r.style.boxShadow="none",r.style.borderRadius="0",r}}},{key:"render",value:function(){var t=this;return this._hass&&this.config?N(It||(It=Qt(['\n            <ha-card elevation="2" style="','">\n                <div class="card-header">\n                    <div>'," ",'</div>\n                    <div class="entities-info-row">\n                        ','\n                    </div>\n                </div>\n                <div class="','">\n                    ',"\n                </div>\n                ","\n            </ha-card>\n        "])),Zt(this.config),this.renderMainEntity(),this.config.title,this.info_entities.map((function(e){return t.renderInfoEntity(e.stateObj,e)})),this.config.column?"entities-column":"entities-row",this.entities.map((function(e){return t.renderEntity(e.stateObj,e)})),this._refCards):N(Rt||(Rt=Qt([""])))}},{key:"renderInfoEntity",value:function(t,e){if(!t||Dt(t,e))return null;var n=this.clickHandler(t.entity_id,e.tap_action);return N(zt||(zt=Qt(['<div class="state entity" @click="','">',"</div>"])),n,this.renderValue(t,e))}},{key:"renderEntity",value:function(t,e){if(!t||Dt(t,e))return null;var n=this.clickHandler(t.entity_id,e.tap_action),i=this.dblClickHandler(t.entity_id,e.double_tap_action);return N(Ft||(Ft=Qt(['<div class="entity" style="','" @click="','" @dblclick="','">\n            <span>',"</span>\n            <div>","</div>\n        </div>"])),Zt(e),n,i,function(t,e){return!1===e.name?null:e.name||(e.entity?t.attributes.friendly_name||(n=t.entity_id).substr(n.indexOf(".")+1):null)||null;var n}(t,e),this.renderIcon(t,e))}},{key:"renderMainEntity",value:function(){if(!this.entity)return null;var t=this.clickHandler(this.stateObj.entity_id,this.config.tap_action),e=this.dblClickHandler(this.stateObj.entity_id,this.config.double_tap_action);return N(Bt||(Bt=Qt(['<div\n            class="main-state entity"\n            style="','"\n            @click="','"\n            @dblclick="','"\n        >\n            ',"\n        </div>"])),Zt(this.config),t,e,0===this.entities.length||this.config.icon?this.renderIcon(this.stateObj,this.config,"main-icon"):this.renderValue(this.stateObj,this.config))}},{key:"renderValue",value:function(t,e){if(!0===e.toggle)return N(Lt||(Lt=Qt(['<ha-entity-toggle .stateObj="','" .hass="','"></ha-entity-toggle>'])),t,this._hass);if(!0===e.show_icon)return this.renderIcon(t,e);var n;if(e.attribute&&[ut,ht].includes(e.attribute))return N(Vt||(Vt=Qt(["<ha-relative-time\n                .hass=","\n                .datetime=","\n                capitalize\n            ></ha-relative-time>"])),this._hass,t[null===(n=e.attribute)||void 0===n?void 0:n.replace("-","_")]);if(e.format&&dt.includes(e.format)){var i=e.attribute?t.attributes[e.attribute]:t.state,r=new Date(i);return r instanceof Date&&!isNaN(r.getTime())?N(Wt||(Wt=Qt(["<hui-timestamp-display\n                .hass=","\n                .ts=","\n                .format=","\n                capitalize\n            ></hui-timestamp-display>"])),this._hass,r,e.format):i}return function(t,e,n){if(Nt(e))return t.localize("state.default.".concat(e.state));var i=n.attribute?e.attributes[n.attribute]:e.state,r=!1===n.unit?void 0:void 0!==n.attribute?n.unit:n.unit||e.attributes.unit_of_measurement;if(n.format){if(isNaN(parseFloat(i))||!isFinite(i));else if("brightness"===n.format)i=Math.round(i/255*100),r="%";else if(n.format.startsWith("duration"))i=function(t){var e=Math.floor(t/3600),n=Math.floor(t%3600/60),i=Math.floor(t%3600%60);return e>0?"".concat(e,":").concat(pt(n),":").concat(pt(i)):n>0?"".concat(n,":").concat(pt(i)):i>0?""+i:null}("duration-m"===n.format?i/1e3:i),r=void 0;else if(n.format.startsWith("precision")){var o=parseInt(n.format.slice(-1),10);i=vt(parseFloat(i),t.locale,{minimumFractionDigits:o,maximumFractionDigits:o})}else"kilo"===n.format?i=vt(i/1e3,t.locale,{maximumFractionDigits:2}):"invert"===n.format?i=vt(i-2*i,t.locale):"position"===n.format&&(i=vt(100-i,t.locale));return"".concat(i).concat(r?" ".concat(r):"")}if(n.attribute)return"".concat(isNaN(i)?i:vt(i,t.locale)).concat(r?" ".concat(r):"");var s=Tt(Tt({},e),{},{attributes:Tt(Tt({},e.attributes),{},{unit_of_measurement:r})});return function(t,e,n,i){var r=e.state;if(r===ct||r===at)return t("state.default.".concat(r));if(function(t){return!!t.attributes.unit_of_measurement||!!t.attributes.state_class}(e)){if("monetary"===e.attributes.device_class)try{return vt(r,n,{style:"currency",currency:e.attributes.unit_of_measurement})}catch(t){}return"".concat(vt(r,n)).concat(e.attributes.unit_of_measurement?" "+e.attributes.unit_of_measurement:"")}var o,s=Pt(e);return"input_datetime"===s?e.attributes.has_date&&e.attributes.has_time?(o=new Date(e.attributes.year,e.attributes.month-1,e.attributes.day,e.attributes.hour,e.attributes.minute),Et(o,n)):e.attributes.has_date?(o=new Date(e.attributes.year,e.attributes.month-1,e.attributes.day),wt(o,n)):e.attributes.has_time?((o=new Date).setHours(e.attributes.hour,e.attributes.minute),jt(o,n)):e.state:"humidifier"===s&&"on"===r&&e.attributes.humidity?"".concat(e.attributes.humidity," %"):"counter"===s||"number"===s||"input_number"===s?vt(r,n):"button"===s||"sensor"===s&&"timestamp"===e.attributes.device_class?Et(new Date(r),n):e.attributes.device_class&&t("component.".concat(s,".state.").concat(e.attributes.device_class,".").concat(r))||t("component.".concat(s,".state._.").concat(r))||r}(t.localize,s,t.locale)}(this._hass,t,e)}},{key:"renderIcon",value:function(t,e,n){return N(qt||(qt=Qt(['<state-badge\n            class="icon-small ','"\n            .stateObj="','"\n            .overrideIcon="','"\n            .stateColor="','"\n        ></state-badge>'])),n,t,function(t,e){if(!("icon"in e))return t.attributes.icon||null;if("string"==typeof e.icon)return e.icon||null;var n=Pt(t);switch(console.log(n),n){case"light":case"switch":case"binary_sensor":return"on"===t.state?e.icon.state_on:e.icon.state_off}}(t,e),e.state_color)}},{key:"renderWarning",value:function(){return N(Jt||(Jt=Qt(["<hui-warning>\n            ","\n        </hui-warning>"])),this._hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this.config.entity))}},{key:"clickHandler",value:function(t,e){var n=this;return function(){return st(n,n._hass,{entity:t,tap_action:e},!1,!1)}}},{key:"dblClickHandler",value:function(t,e){var n=this;return function(){return st(n,n._hass,{entity:t,double_tap_action:e},!0,!1)}}}])&&ne(e.prototype,n),i&&ne(e,i),Object.defineProperty(e,"prototype",{writable:!1}),c}(Q);customElements.define("room-card",se)})();