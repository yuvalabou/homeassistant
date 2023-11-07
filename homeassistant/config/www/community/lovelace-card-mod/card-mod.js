function t(t,e,o,s){var i,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,s);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(n<3?i(r):n>3?i(e,o,r):i(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r}const e=window,o=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),i=new WeakMap;const n=t=>new class{constructor(t,e,o){if(this._$cssResult$=!0,o!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(o&&void 0===t){const o=void 0!==e&&1===e.length;o&&(t=i.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&i.set(e,t))}return t}toString(){return this.cssText}}("string"==typeof t?t:t+"",void 0,s),r=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return n(e)})(t):t;var a;const d=window,l=d.trustedTypes,c=l?l.emptyScript:"",h=d.reactiveElementPolyfillSupport,u={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},p=(t,e)=>e!==t&&(e==e||t==t),m={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:p};let f=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,o)=>{const s=this._$Ep(o,e);void 0!==s&&(this._$Ev.set(s,o),t.push(s))})),t}static createProperty(t,e=m){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,o,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(s){const i=this[t];this[e]=s,this.requestUpdate(t,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Ep(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,o;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{o?t.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((o=>{const s=document.createElement("style"),i=e.litNonce;void 0!==i&&s.setAttribute("nonce",i),s.textContent=o.cssText,t.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e,o=m){var s;const i=this.constructor._$Ep(t,o);if(void 0!==i&&!0===o.reflect){const n=(void 0!==(null===(s=o.converter)||void 0===s?void 0:s.toAttribute)?o.converter:u).toAttribute(e,o.type);this._$El=t,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$El=null}}_$AK(t,e){var o;const s=this.constructor,i=s._$Ev.get(t);if(void 0!==i&&this._$El!==i){const t=s.getPropertyOptions(i),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(o=t.converter)||void 0===o?void 0:o.fromAttribute)?t.converter:u;this._$El=i,this[i]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,o){let s=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,o))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(o)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};var v;f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:f}),(null!==(a=d.reactiveElementVersions)&&void 0!==a?a:d.reactiveElementVersions=[]).push("1.4.2");const _=window,y=_.trustedTypes,g=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,w="?"+$,E=`<${w}>`,b=document,A=(t="")=>b.createComment(t),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,S=Array.isArray,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,O=/>/g,T=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),U=/'/g,M=/"/g,x=/^(?:script|style|textarea|title)$/i,R=(t=>(e,...o)=>({_$litType$:t,strings:e,values:o}))(1),D=Symbol.for("lit-noChange"),k=Symbol.for("lit-nothing"),H=new WeakMap,L=b.createTreeWalker(b,129,null,!1),j=(t,e)=>{const o=t.length-1,s=[];let i,n=2===e?"<svg>":"",r=P;for(let e=0;e<o;e++){const o=t[e];let a,d,l=-1,c=0;for(;c<o.length&&(r.lastIndex=c,d=r.exec(o),null!==d);)c=r.lastIndex,r===P?"!--"===d[1]?r=N:void 0!==d[1]?r=O:void 0!==d[2]?(x.test(d[2])&&(i=RegExp("</"+d[2],"g")),r=T):void 0!==d[3]&&(r=T):r===T?">"===d[0]?(r=null!=i?i:P,l=-1):void 0===d[1]?l=-2:(l=r.lastIndex-d[2].length,a=d[1],r=void 0===d[3]?T:'"'===d[3]?M:U):r===M||r===U?r=T:r===N||r===O?r=P:(r=T,i=void 0);const h=r===T&&t[e+1].startsWith("/>")?" ":"";n+=r===P?o+E:l>=0?(s.push(a),o.slice(0,l)+"$lit$"+o.slice(l)+$+h):o+$+(-2===l?(s.push(void 0),e):h)}const a=n+(t[o]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==g?g.createHTML(a):a,s]};class I{constructor({strings:t,_$litType$:e},o){let s;this.parts=[];let i=0,n=0;const r=t.length-1,a=this.parts,[d,l]=j(t,e);if(this.el=I.createElement(d,o),L.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=L.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith($)){const o=l[n++];if(t.push(e),void 0!==o){const t=s.getAttribute(o.toLowerCase()+"$lit$").split($),e=/([.?@])?(.*)/.exec(o);a.push({type:1,index:i,name:e[2],strings:t,ctor:"."===e[1]?J:"?"===e[1]?K:"@"===e[1]?Y:V})}else a.push({type:6,index:i})}for(const e of t)s.removeAttribute(e)}if(x.test(s.tagName)){const t=s.textContent.split($),e=t.length-1;if(e>0){s.textContent=y?y.emptyScript:"";for(let o=0;o<e;o++)s.append(t[o],A()),L.nextNode(),a.push({type:2,index:++i});s.append(t[e],A())}}}else if(8===s.nodeType)if(s.data===w)a.push({type:2,index:i});else{let t=-1;for(;-1!==(t=s.data.indexOf($,t+1));)a.push({type:7,index:i}),t+=$.length-1}i++}}static createElement(t,e){const o=b.createElement("template");return o.innerHTML=t,o}}function z(t,e,o=t,s){var i,n,r,a;if(e===D)return e;let d=void 0!==s?null===(i=o._$Co)||void 0===i?void 0:i[s]:o._$Cl;const l=C(e)?void 0:e._$litDirective$;return(null==d?void 0:d.constructor)!==l&&(null===(n=null==d?void 0:d._$AO)||void 0===n||n.call(d,!1),void 0===l?d=void 0:(d=new l(t),d._$AT(t,o,s)),void 0!==s?(null!==(r=(a=o)._$Co)&&void 0!==r?r:a._$Co=[])[s]=d:o._$Cl=d),void 0!==d&&(e=z(t,d._$AS(t,e.values),d,s)),e}class q{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:o},parts:s}=this._$AD,i=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:b).importNode(o,!0);L.currentNode=i;let n=L.nextNode(),r=0,a=0,d=s[0];for(;void 0!==d;){if(r===d.index){let e;2===d.type?e=new B(n,n.nextSibling,this,t):1===d.type?e=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(e=new Z(n,this,t)),this.u.push(e),d=s[++a]}r!==(null==d?void 0:d.index)&&(n=L.nextNode(),r++)}return i}p(t){let e=0;for(const o of this.u)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class B{constructor(t,e,o,s){var i;this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=s,this._$Cm=null===(i=null==s?void 0:s.isConnected)||void 0===i||i}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=z(this,t,e),C(t)?t===k||null==t||""===t?(this._$AH!==k&&this._$AR(),this._$AH=k):t!==this._$AH&&t!==D&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>S(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==k&&C(this._$AH)?this._$AA.nextSibling.data=t:this.T(b.createTextNode(t)),this._$AH=t}$(t){var e;const{values:o,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=I.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===i)this._$AH.p(o);else{const t=new q(i,this),e=t.v(this.options);t.p(o),this.T(e),this._$AH=t}}_$AC(t){let e=H.get(t.strings);return void 0===e&&H.set(t.strings,e=new I(t)),e}k(t){S(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,s=0;for(const i of t)s===e.length?e.push(o=new B(this.O(A()),this.O(A()),this,this.options)):o=e[s],o._$AI(i),s++;s<e.length&&(this._$AR(o&&o._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class V{constructor(t,e,o,s,i){this.type=1,this._$AH=k,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=k}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,s){const i=this.strings;let n=!1;if(void 0===i)t=z(this,t,e,0),n=!C(t)||t!==this._$AH&&t!==D,n&&(this._$AH=t);else{const s=t;let r,a;for(t=i[0],r=0;r<i.length-1;r++)a=z(this,s[o+r],e,r),a===D&&(a=this._$AH[r]),n||(n=!C(a)||a!==this._$AH[r]),a===k?t=k:t!==k&&(t+=(null!=a?a:"")+i[r+1]),this._$AH[r]=a}n&&!s&&this.j(t)}j(t){t===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class J extends V{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===k?void 0:t}}const W=y?y.emptyScript:"";class K extends V{constructor(){super(...arguments),this.type=4}j(t){t&&t!==k?this.element.setAttribute(this.name,W):this.element.removeAttribute(this.name)}}class Y extends V{constructor(t,e,o,s,i){super(t,e,o,s,i),this.type=5}_$AI(t,e=this){var o;if((t=null!==(o=z(this,t,e,0))&&void 0!==o?o:k)===D)return;const s=this._$AH,i=t===k&&s!==k||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==k&&(s===k||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this._$AH.handleEvent(t)}}class Z{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){z(this,t)}}const F=_.litHtmlPolyfillSupport;null==F||F(I,B),(null!==(v=_.litHtmlVersions)&&void 0!==v?v:_.litHtmlVersions=[]).push("2.4.0");var G,Q;class X extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,o)=>{var s,i;const n=null!==(s=null==o?void 0:o.renderBefore)&&void 0!==s?s:e;let r=n._$litPart$;if(void 0===r){const t=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:null;n._$litPart$=r=new B(e.insertBefore(A(),t),t,void 0,null!=o?o:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return D}}X.finalized=!0,X._$litElement$=!0,null===(G=globalThis.litElementHydrateSupport)||void 0===G||G.call(globalThis,{LitElement:X});const tt=globalThis.litElementPolyfillSupport;null==tt||tt({LitElement:X}),(null!==(Q=globalThis.litElementVersions)&&void 0!==Q?Q:globalThis.litElementVersions=[]).push("3.2.2");const et=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(o){o.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function ot(t){return(e,o)=>void 0!==o?((t,e,o)=>{e.constructor.createProperty(o,t)})(t,e,o):et(t,e)}var st;async function it(){const t=await async function(){await Promise.race([customElements.whenDefined("home-assistant"),customElements.whenDefined("hc-main")]);const t=customElements.get("home-assistant")?"home-assistant":"hc-main";for(;!document.querySelector(t);)await new Promise((t=>window.setTimeout(t,100)));return document.querySelector(t)}();for(;!t.hass;)await new Promise((t=>window.setTimeout(t,100)));return t.hass}null===(st=window.HTMLSlotElement)||void 0===st||st.prototype.assignedElements;window.cardMod_template_cache=window.cardMod_template_cache||{};const nt=window.cardMod_template_cache;async function rt(t,e,o){const s=await it(),i=s.connection,n=JSON.stringify([e,o]);let r=nt[n];r?(r.callbacks.has(t)||at(t),t(r.value),r.callbacks.add(t)):(at(t),t(""),o=Object.assign({user:s.user.name,browser:document.querySelector("hc-main")?"CAST":localStorage["browser_mod-browser-id"]?localStorage["browser_mod-browser-id"]:"",hash:location.hash.substr(1)||""},o),nt[n]=r={template:e,variables:o,value:"",callbacks:new Set([t]),unsubscribe:i.subscribeMessage((t=>function(t,e){const o=nt[t];o&&(o.value=e.result,o.callbacks.forEach((t=>t(e.result))))}(n,t)),{type:"render_template",template:e,variables:o})})}async function at(t){let e;for(const[o,s]of Object.entries(nt))if(s.callbacks.has(t)){s.callbacks.delete(t),0==s.callbacks.size&&(e=s.unsubscribe,delete nt[o]);break}e&&await(await e)()}var dt="3.2.4";const lt=async t=>{await(async()=>{if(customElements.get("developer-tools-event"))return;await customElements.whenDefined("partial-panel-resolver");const t=document.createElement("partial-panel-resolver");t.hass={panels:[{url_path:"tmp",component_name:"developer-tools"}]},t._updateRoutes(),await t.routerOptions.routes.tmp.load(),await customElements.whenDefined("developer-tools-router");const e=document.createElement("developer-tools-router");await e.routerOptions.routes.event.load()})();const e=document.createElement("ha-yaml-editor");return e._onChange(new CustomEvent("yaml",{detail:{value:t}})),e.value};async function ct(t,e,o="",s={},i=null,n=!0){var r;if(!t)return;let a;(null===(r=t.localName)||void 0===r?void 0:r.includes("-"))&&await customElements.whenDefined(t.localName),t.updateComplete&&await t.updateComplete,void 0===t._cardMod&&(t._cardMod=[]);for(const o of t._cardMod)if(o.type===e){a=o;break}return a||(a=document.createElement("card-mod"),a.type=e,t._cardMod.push(a)),queueMicrotask((async()=>{const e=t.modElement?t.modElement:n&&t.shadowRoot||t;e.contains(a)||e.appendChild(a),a.variables=s,a.styles=o})),a}function ht(t,e){const o=t=>t&&"object"==typeof t&&!Array.isArray(t);if(o(t)&&o(e))for(const s in e)o(e[s])?(t[s]||Object.assign(t,{[s]:{}}),"string"==typeof t[s]&&(t[s]={".":t[s]}),ht(t[s],e[s])):t[s]?t[s]=e[s]+t[s]:t[s]=e[s];return t}function ut(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(!(t instanceof Object&&e instanceof Object))return!1;for(const o in t)if(t.hasOwnProperty(o)){if(!e.hasOwnProperty(o))return!1;if(t[o]!==e[o]){if("object"!=typeof t[o])return!1;if(!ut(t[o],e[o]))return!1}}for(const o in e)if(e.hasOwnProperty(o)&&!t.hasOwnProperty(o))return!1;return!0}function pt(t){return t.config?t.config:t._config?t._config:t.host?pt(t.host):t.parentElement?pt(t.parentElement):t.parentNode?pt(t.parentNode):null}function mt(t,e){for(const o of e)t.add(o)}async function ft(t,e=0){let o=new Set;if(10==e)return o;if(!t)return o;if(t._cardMod)for(const e of t._cardMod)e.styles&&o.add(e);return t.updateComplete&&await t.updateComplete,t.parentElement?mt(o,await ft(t.parentElement,e+1)):t.parentNode&&mt(o,await ft(t.parentNode,e+1)),t.host&&mt(o,await ft(t.host,e+1)),o}async function vt(t,e=!1){var o;if((null===(o=t.localName)||void 0===o?void 0:o.includes("-"))&&await customElements.whenDefined(t.localName),t.updateComplete&&await t.updateComplete,e&&(t.pageRendered&&await t.pageRendered,t._panelState)){let e=0;for(;"loaded"!==t._panelState&&e++<5;)await new Promise((t=>setTimeout(t,100)))}}async function _t(t,e,o=!1){let s=[t];for("string"==typeof e&&(e=e.split(/(\$| )/));""===e[e.length-1];)e.pop();for(const[t,o]of e.entries()){const t=s[0];if(!t)return null;o.trim().length&&(vt(t),s="$"===o?[t.shadowRoot]:t.querySelectorAll(o))}return o?s:s[0]}async function yt(t,e,o=!1,s=1e4){return Promise.race([_t(t,e,o),new Promise(((t,e)=>setTimeout((()=>e(new Error("SELECTTREE-TIMEOUT"))),s)))]).catch((t=>{if(!t.message||"SELECTTREE-TIMEOUT"!==t.message)throw t;return null}))}class gt extends X{static get applyToElement(){return ct}constructor(){super(),this._rendered_styles="",this._styleChildren=new Set,this._observer=new MutationObserver((t=>{for(const e of t){if("card-mod"===e.target.localName)return;e.addedNodes.length&&e.addedNodes.forEach((t=>{t.localName})),e.removedNodes.length&&e.removedNodes.forEach((t=>{t.localName}))}stop||this.refresh()})),document.addEventListener("cm_update",(()=>{this.refresh()}))}connectedCallback(){super.connectedCallback(),this._connect(),this.setAttribute("slot","none"),this.style.display="none"}disconnectedCallback(){super.disconnectedCallback(),this._disconnect()}set styles(t){ut(t,this._input_styles)||(this._input_styles=t,(async()=>{let e=JSON.parse(JSON.stringify(t||{}));"string"==typeof e&&(e={".":e});ht(e,await async function(t){var e;if(!t.type)return null;const o=t.parentElement?t.parentElement:t,s=window.getComputedStyle(o).getPropertyValue("--card-mod-theme"),i=await it();if(!i)return{};const n=null!==(e=null==i?void 0:i.themes.themes)&&void 0!==e?e:{};return n[s]?n[s][`card-mod-${t.type}-yaml`]?lt(n[s][`card-mod-${t.type}-yaml`]):n[s][`card-mod-${t.type}`]?{".":n[s][`card-mod-${t.type}`]}:{}:{}}(this)),this._fixed_styles=e,this._connect()})())}get styles(){return this._styles}refresh(){this._connect()}async _styleChildEl(t,e){if(void 0===e){const o=this._fixed_styles;for(const[s,i]of Object.entries(o)){if("."===s)continue;if((await yt(this.parentElement||this.parentNode,s,!0)).forEach((o=>{o===t&&(e=i)})),void 0!==e)break}if(void 0===e)return}if(!t)return;const o=await ct(t,`${this.type}-child`,e,this.variables,null,!1);return o.refresh,o}async _connect(){var t;const e=null!==(t=this._fixed_styles)&&void 0!==t?t:{},o=new Set;let s="",i=!1;const n=this.parentElement||this.parentNode;for(const[t,r]of Object.entries(e))if("."===t)s=r;else{i=!0;const e=await yt(n,t,!0);if(!e)continue;for(const t of e){const e=await this._styleChildEl(t,r);e&&o.add(e)}}for(const t of this._styleChildren)o.has(t)||t&&(t.styles="");var r;(this._styleChildren=o,this._styles!==s)&&(this._styles=s,this._styles&&(r=this._styles,String(r).includes("{%")||String(r).includes("{{"))?(this._renderer=this._renderer||this._style_rendered.bind(this),rt(this._renderer,this._styles,this.variables)):this._style_rendered(this._styles||""),i&&(this._observer.disconnect(),this._observer.observe(function(t){if(!t)return;const e=t.parentElement||t.parentNode;return e?e.host?e.host:e:void 0}(this),{childList:!0})))}async _disconnect(){this._observer.disconnect(),this._styles="",await at(this._renderer)}_style_rendered(t){this._rendered_styles!==t&&(this._rendered_styles=t),this.dispatchEvent(new Event("card-mod-update"))}createRenderRoot(){return this}render(){return R`
      <style>
        ${this._rendered_styles}
      </style>
    `}}t([ot()],gt.prototype,"_rendered_styles",void 0),(async()=>{for(;void 0===customElements.get("home-assistant");)await new Promise((t=>window.setTimeout(t,100)));customElements.get("card-mod")||(customElements.define("card-mod",gt),console.info(`%cCARD-MOD ${dt} IS INSTALLED`,"color: green; font-weight: bold"))})(),customElements.whenDefined("ha-card").then((()=>{const t=customElements.get("ha-card");if(t.prototype.cardmod_patched)return;t.prototype.cardmod_patched=!0;const e=t.prototype.firstUpdated;t.prototype.firstUpdated=function(...t){var o,s;null==e||e.bind(this)(...t);const i=pt(this);(null===(o=null==i?void 0:i.card_mod)||void 0===o?void 0:o.class)&&this.classList.add(i.card_mod.class),(null==i?void 0:i.type)&&this.classList.add(`type-${i.type.replace(":","-")}`),ct(this,"card",(null===(s=null==i?void 0:i.card_mod)||void 0===s?void 0:s.style)||(null==i?void 0:i.style)||"",{config:i},null,!1).then((t=>{var e;const o=null===(e=this.parentNode)||void 0===e?void 0:e.host;if(o){if(o.setConfig&&!o.setConfig.cm_patched){const e=o.setConfig;o.setConfig=function(o,...s){var i;e.bind(this)(o,...s),t.variables={config:o},t.styles=(null===(i=o.card_mod)||void 0===i?void 0:i.style)||{}},o.setConfig.cm_patched=!0}if(o.update&&!o.update.cm_patched){const e=o.update;o.update=function(...o){e.bind(this)(...o),this.updateComplete?this.updateComplete.then((()=>{t.refresh()})):t.refresh()},o.update.cm_patched=!0}}}))}})),customElements.whenDefined("hui-entities-card").then((()=>{const t=customElements.get("hui-entities-card");if(t.prototype.cardmod_patched)return;t.prototype.cardmod_patched=!0;const e=t.prototype.renderEntity;t.prototype.renderEntity=function(t,...o){var s;const i=e.bind(this)(t,...o);if(!i||!i.values)return i;const n=i.values[0];if(!n)return i;if("custom:mod-card"===(null==t?void 0:t.type))return i;(null===(s=null==t?void 0:t.card_mod)||void 0===s?void 0:s.class)&&n.classList.add(t.card_mod.class),(null==t?void 0:t.type)&&n.classList.add(`type-${t.type.replace(":","-")}`);const r=async()=>{var e;return ct(n,"row",(null===(e=null==t?void 0:t.card_mod)||void 0===e?void 0:e.style)||(null==t?void 0:t.style)||"",{config:t})};return(async()=>{const t=await r();if(n.update&&!n.update.cm_patched){const e=n.update;n.update=function(...o){e.bind(this)(...o),this.updateComplete?this.updateComplete.then((()=>{t.refresh()})):t.refresh()}}})(),this.updateComplete.then((()=>r())),i.values[0]&&i.values[0].addEventListener("ll-rebuild",r),i}}));customElements.whenDefined("hui-glance-card").then((()=>{const t=customElements.get("hui-glance-card");if(t.prototype.cardmod_patched)return;t.prototype.cardmod_patched=!0;const e=t.prototype.updated;t.prototype.updated=function(...t){var o,s;null==e||e.bind(this)(...t);for(const t of this.shadowRoot.querySelectorAll("ha-card div.entity")){if(!t.cardmod_patched){t.cardmod_patched=!0;const e=t.attachShadow({mode:"open"});for(;t.firstChild;)e.append(t.firstChild);const o=document.createElement("style");e.appendChild(o),o.innerHTML="\ndiv {\n  width: 100%;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.name {\n  min-height: var(--paper-font-body1_-_line-height, 20px);\n}\nstate-badge {\n  margin: 8px 0;\n}\n"}const e=t.config||t.entityConf;(null===(o=null==e?void 0:e.card_mod)||void 0===o?void 0:o.class)&&t.classList.add(e.card_mod.class),ct(t,"glance",(null===(s=null==e?void 0:e.card_mod)||void 0===s?void 0:s.style)||(null==e?void 0:e.style)||"",{config:e})}}})),customElements.whenDefined("hui-state-label-badge").then((()=>{const t=customElements.get("hui-state-label-badge");if(t.prototype.cardmod_patched)return;t.prototype.cardmod_patched=!0;const e=t.prototype.firstUpdated;t.prototype.firstUpdated=function(...t){var o,s;null==e||e.bind(this)(...t);const i=this._config;(null===(o=null==i?void 0:i.card_mod)||void 0===o?void 0:o.class)&&this.classList.add(i.card_mod.class),ct(this,"badge",(null===(s=null==i?void 0:i.card_mod)||void 0===s?void 0:s.style)||(null==i?void 0:i.style)||"",{config:i})}})),customElements.whenDefined("hui-view").then((()=>{const t=customElements.get("hui-view");if(t.prototype.cardmod_patched)return;t.prototype.cardmod_patched=!0;const e=t.prototype.updated;t.prototype.updated=function(...t){null==e||e.bind(this)(...t),ct(this,"view","",{},null,!1)}})),customElements.whenDefined("hui-root").then((()=>{const t=customElements.get("hui-root");if(t.prototype.cardmod_patched)return;t.prototype.cardmod_patched=!0;const e=t.prototype.firstUpdated;t.prototype.firstUpdated=async function(...t){null==e||e.bind(this)(...t),ct(this,"root")},yt(document,"home-assistant$home-assistant-main$partial-panel-resolver ha-panel-lovelace$hui-root",!1).then((t=>{null==t||t.firstUpdated()}))})),customElements.whenDefined("ha-more-info-dialog").then((()=>{const t=customElements.get("ha-more-info-dialog");if(t.prototype.cardmod_patched)return;t.prototype.cardmod_patched=!0;const e=t.prototype.showDialog;t.prototype.showDialog=function(t,...o){null==e||e.bind(this)(t,...o),this.requestUpdate(),this.updateComplete.then((async()=>{const e=this.shadowRoot.querySelector("ha-dialog");e&&ct(e,"more-info","",{config:t},null,!1)}))},yt(document,"home-assistant$ha-more-info-dialog",!1).then((e=>{e&&(e.showDialog=t.prototype.showDialog.bind(e),e.showDialog({entityId:e.entityId}))}))})),customElements.whenDefined("ha-sidebar").then((()=>{const t=customElements.get("ha-sidebar");if(t.prototype.cardmod_patched)return;t.prototype.cardmod_patched=!0;const e=t.prototype.firstUpdated;t.prototype.firstUpdated=async function(...t){null==e||e.bind(this)(...t),ct(this,"sidebar")},yt(document,"home-assistant$home-assistant-main$ ha-sidebar",!1).then((t=>{null==t||t.firstUpdated()}))})),customElements.whenDefined("hui-card-element-editor").then((()=>{const t=customElements.get("hui-card-element-editor");if(t.prototype.cardmod_patched)return;t.prototype.cardmod_patched=!0;const e=t.prototype.getConfigElement;t.prototype.getConfigElement=async function(){const t=await e.bind(this)();if(t){const e=t.setConfig;t.setConfig=function(t,...o){var s,i;const n=JSON.parse(JSON.stringify(t));if(this._cardModData={card:n.card_mod,entities:[]},n.entities)for(const[t,e]of null===(s=n.entities)||void 0===s?void 0:s.entries())this._cardModData.entities[t]=e.card_mod,delete e.card_mod;if(delete n.card_mod,e.bind(this)(n,...o),n.entities)for(const[t,e]of null===(i=n.entities)||void 0===i?void 0:i.entries())this._cardModData.entities[t]&&(e.card_mod=this._cardModData.entities[t])}}return t};const o=t.prototype._handleUIConfigChanged;t.prototype._handleUIConfigChanged=function(t,...e){if(this._configElement&&this._configElement._cardModData){const e=this._configElement._cardModData;e.card&&(t.detail.config.card_mod=e.card)}o.bind(this)(t,...e)}})),customElements.whenDefined("hui-dialog-edit-card").then((()=>{const t=customElements.get("hui-dialog-edit-card");if(t.prototype.cardmod_patched)return;t.prototype.cardmod_patched=!0;const e=t.prototype.updated;t.prototype.updated=function(...t){null==e||e.bind(this)(...t),this.updateComplete.then((async()=>{var t,e,o;this._cardModIcon||(this._cardModIcon=document.createElement("ha-icon"),this._cardModIcon.icon="mdi:brush");const s=this.shadowRoot.querySelector("mwc-button[slot=secondaryAction]");s&&(s.appendChild(this._cardModIcon),(null===(t=this._cardConfig)||void 0===t?void 0:t.card_mod)||(null===(o=null===(e=this._cardConfig)||void 0===e?void 0:e.entities)||void 0===o?void 0:o.some((t=>t.card_mod)))?this._cardModIcon.style.visibility="visible":this._cardModIcon.style.visibility="hidden")}))}})),customElements.whenDefined("hui-picture-elements-card").then((()=>{const t=customElements.get("hui-picture-elements-card");if(t.prototype.cardmod_patched)return;t.prototype.cardmod_patched=!0;const e=t.prototype.setConfig;t.prototype.setConfig=function(...t){var o,s;null==e||e.bind(this)(...t);for(const[t,e]of this._elements.entries()){const i=this._config.elements[t];(null===(o=null==i?void 0:i.card_mod)||void 0===o?void 0:o.class)&&e.classList.add(i.card_mod.class),(null==i?void 0:i.type)&&e.classList.add(`type-${i.type.replace(":","-")}`),ct(e,"element",null===(s=null==i?void 0:i.card_mod)||void 0===s?void 0:s.style,{config:i})}}}));const $t=t=>{const e=window.getComputedStyle(t);"none"===e.getPropertyValue("--card-mod-icon-dim")&&(t.style.filter="none");const o=e.getPropertyValue("--card-mod-icon");o&&(t.icon=o.trim());const s=e.getPropertyValue("--card-mod-icon-color");s&&(t.style.color=s)},wt=async t=>{if(t.cardmod_bound)return;t.cardmod_bound=!0;const e=async()=>{const e=await ft(t);for(const o of e)o.addEventListener("card-mod-update",(async()=>{await o.updateComplete,$t(t)}));return $t(t),e};0==(await e()).size&&window.setTimeout((()=>e()),1e3)};customElements.whenDefined("ha-state-icon").then((()=>{const t=customElements.get("ha-state-icon");if(t.prototype.cardmod_patched)return;t.prototype.cardmod_patched=!0;const e=t.prototype.updated;t.prototype.updated=function(...t){e.bind(this)(...t),wt(this),$t(this)}})),customElements.whenDefined("ha-icon").then((()=>{const t=customElements.get("ha-icon");if(t.prototype.cardmod_patched)return;t.prototype.cardmod_patched=!0;const e=t.prototype.updated;t.prototype.updated=function(...t){null==e||e.bind(this)(...t),wt(this)}})),customElements.whenDefined("ha-svg-icon").then((()=>{const t=customElements.get("ha-svg-icon");if(t.prototype.cardmod_patched)return;t.prototype.cardmod_patched=!0;const e=t.prototype.updated;t.prototype.updated=function(...t){var o,s;null==e||e.bind(this)(...t),"ha-icon"!==(null===(s=null===(o=this.parentNode)||void 0===o?void 0:o.host)||void 0===s?void 0:s.localName)&&wt(this)}}));const Et="\nha-card {\n  background: none;\n  box-shadow: none;\n  border: none;\n  transition: none;\n}";class bt extends X{setConfig(t){var e;this._config=JSON.parse(JSON.stringify(t));let o=(null===(e=this._config.card_mod)||void 0===e?void 0:e.style)||this._config.style;void 0===o?o=Et:"string"==typeof o?o=Et+o:o["."]?o["."]=Et+o["."]:o["."]=Et,this._config.card_mod={style:o},this.build_card(t.card)}async build_card(t){void 0===this._hass&&await new Promise((t=>this._hassResolve=t)),this._hassResolve=void 0;const e=await window.loadCardHelpers();this.card=await e.createCardElement(t),this.card.hass=this._hass}firstUpdated(){window.setTimeout((()=>{var t,e;if(null===(e=null===(t=this.card)||void 0===t?void 0:t.shadowRoot)||void 0===e?void 0:e.querySelector("ha-card")){console.info("%cYou are doing it wrong!","color: red; font-weight: bold");let t=this.card.localName.replace(/hui-(.*)-card/,"$1");console.info(`mod-card should NEVER be used with a card that already has a ha-card element, such as ${t}`)}}),3e3)}set hass(t){this._hass=t,this.card&&(this.card.hass=t),this._hassResolve&&this._hassResolve()}render(){return R` <ha-card modcard> ${this.card} </ha-card> `}getCardSize(){if(this._config.report_size)return this._config.report_size;let t=this.shadowRoot;return t&&(t=t.querySelector("ha-card card-maker")),t&&(t=t.getCardSize),t&&(t=t()),t||1}}function At(){document.dispatchEvent(new Event("cm_update"))}t([ot()],bt.prototype,"card",void 0),(async()=>{for(;void 0===customElements.get("home-assistant");)await new Promise((t=>window.setTimeout(t,100)));customElements.get("mod-card")||customElements.define("mod-card",bt)})();const Ct=[customElements.whenDefined("home-assistant"),customElements.whenDefined("hc-main")];Promise.race(Ct).then((()=>{window.setTimeout((async()=>{var t,e;const o=await it();for(;!o;)await new Promise((t=>window.setTimeout(t,500)));o.connection.subscribeEvents((()=>{window.setTimeout(At,500)}),"themes_updated"),null===(t=document.querySelector("home-assistant"))||void 0===t||t.addEventListener("settheme",At),null===(e=document.querySelector("hc-main"))||void 0===e||e.addEventListener("settheme",At)}),1e3)}));const St=function(){var t,e,o;const s=document.querySelectorAll("script"),i=[];for(const n of s)if(null===(e=null===(t=null==n?void 0:n.innerText)||void 0===t?void 0:t.trim())||void 0===e?void 0:e.startsWith("import(")){const t=null===(o=n.innerText.split("\n"))||void 0===o?void 0:o.map((t=>t.trim()));for(const e of t)i.push(e.replace(/^import\(\"/,"").replace(/\"\);/,""))}return i}();St.some((t=>t.endsWith("card-mod.js")))||console.info("You may not be getting optimal performance out of card-mod.\nSee https://github.com/thomasloven/lovelace-card-mod#performance-improvements");
