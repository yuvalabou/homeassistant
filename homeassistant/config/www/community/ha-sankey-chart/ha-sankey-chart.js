function t(t,e,s,i){var n,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,s,o):n(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o}const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),i=new Map;class n{constructor(t,e){if(this._$cssResult$=!0,e!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=i.get(this.cssText);return e&&void 0===t&&(i.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new n("string"==typeof t?t:t+"",s))(e)})(t):t;var o,a;const l={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},h=(t,e)=>e!==t&&(e==e||t==t),c={attribute:!0,type:String,converter:l,reflect:!1,hasChanged:h};class d extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const i=this._$Eh(s,e);void 0!==i&&(this._$Eu.set(i,s),t.push(i))})),t}static createProperty(t,e=c){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||c}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eh(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this._$Em)&&void 0!==e?e:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$Em)||void 0===e||e.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{e?t.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((e=>{const s=document.createElement("style"),i=window.litNonce;void 0!==i&&s.setAttribute("nonce",i),s.textContent=e.cssText,t.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$Eg(t,e,s=c){var i,n;const r=this.constructor._$Eh(t,s);if(void 0!==r&&!0===s.reflect){const o=(null!==(n=null===(i=s.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==n?n:l.toAttribute)(e,s.type);this._$Ei=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Ei=null}}_$AK(t,e){var s,i,n;const r=this.constructor,o=r._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=r.getPropertyOptions(o),a=t.converter,h=null!==(n=null!==(i=null===(s=a)||void 0===s?void 0:s.fromAttribute)&&void 0!==i?i:"function"==typeof a?a:null)&&void 0!==n?n:l.fromAttribute;this._$Ei=o,this[o]=h(e,t.type),this._$Ei=null}}requestUpdate(t,e,s){let i=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||h)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Em)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,e)=>this._$Eg(e,this[e],t))),this._$ES=void 0),this._$ET()}updated(t){}firstUpdated(t){}}var u,p;d.finalized=!0,d.elementProperties=new Map,d.elementStyles=[],d.shadowRootOptions={mode:"open"},null===(o=globalThis.reactiveElementPolyfillSupport)||void 0===o||o.call(globalThis,{ReactiveElement:d}),(null!==(a=globalThis.reactiveElementVersions)&&void 0!==a?a:globalThis.reactiveElementVersions=[]).push("1.0.0");const m=globalThis.trustedTypes,f=m?m.createPolicy("lit-html",{createHTML:t=>t}):void 0,g=`lit$${(Math.random()+"").slice(9)}$`,v="?"+g,_=`<${v}>`,y=document,$=(t="")=>y.createComment(t),b=t=>null===t||"object"!=typeof t&&"function"!=typeof t,w=Array.isArray,A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,x=/-->/g,S=/>/g,E=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,C=/'/g,P=/"/g,k=/^(?:script|style|textarea)$/i,O=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),T=O(1),z=O(2),N=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),H=new WeakMap,M=y.createTreeWalker(y,129,null,!1),R=(t,e)=>{const s=t.length-1,i=[];let n,r=2===e?"<svg>":"",o=A;for(let e=0;e<s;e++){const s=t[e];let a,l,h=-1,c=0;for(;c<s.length&&(o.lastIndex=c,l=o.exec(s),null!==l);)c=o.lastIndex,o===A?"!--"===l[1]?o=x:void 0!==l[1]?o=S:void 0!==l[2]?(k.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=E):void 0!==l[3]&&(o=E):o===E?">"===l[0]?(o=null!=n?n:A,h=-1):void 0===l[1]?h=-2:(h=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?E:'"'===l[3]?P:C):o===P||o===C?o=E:o===x||o===S?o=A:(o=E,n=void 0);const d=o===E&&t[e+1].startsWith("/>")?" ":"";r+=o===A?s+_:h>=0?(i.push(a),s.slice(0,h)+"$lit$"+s.slice(h)+g+d):s+g+(-2===h?(i.push(void 0),e):d)}const a=r+(t[s]||"<?>")+(2===e?"</svg>":"");return[void 0!==f?f.createHTML(a):a,i]};class j{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,r=0;const o=t.length-1,a=this.parts,[l,h]=R(t,e);if(this.el=j.createElement(l,s),M.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=M.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(g)){const s=h[r++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+"$lit$").split(g),e=/([.?@])?(.*)/.exec(s);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?I:"?"===e[1]?V:"@"===e[1]?q:D})}else a.push({type:6,index:n})}for(const e of t)i.removeAttribute(e)}if(k.test(i.tagName)){const t=i.textContent.split(g),e=t.length-1;if(e>0){i.textContent=m?m.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],$()),M.nextNode(),a.push({type:2,index:++n});i.append(t[e],$())}}}else if(8===i.nodeType)if(i.data===v)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(g,t+1));)a.push({type:7,index:n}),t+=g.length-1}n++}}static createElement(t,e){const s=y.createElement("template");return s.innerHTML=t,s}}function L(t,e,s=t,i){var n,r,o,a;if(e===N)return e;let l=void 0!==i?null===(n=s._$Cl)||void 0===n?void 0:n[i]:s._$Cu;const h=b(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,s,i)),void 0!==i?(null!==(o=(a=s)._$Cl)&&void 0!==o?o:a._$Cl=[])[i]=l:s._$Cu=l),void 0!==l&&(e=L(t,l._$AS(t,e.values),l,i)),e}class Y{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:s},parts:i}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:y).importNode(s,!0);M.currentNode=n;let r=M.nextNode(),o=0,a=0,l=i[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new B(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new F(r,this,t)),this.v.push(e),l=i[++a]}o!==(null==l?void 0:l.index)&&(r=M.nextNode(),o++)}return n}m(t){let e=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class B{constructor(t,e,s,i){var n;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cg=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=L(this,t,e),b(t)?t===U||null==t||""===t?(this._$AH!==U&&this._$AR(),this._$AH=U):t!==this._$AH&&t!==N&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return w(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==U&&b(this._$AH)?this._$AA.nextSibling.data=t:this.S(y.createTextNode(t)),this._$AH=t}T(t){var e;const{values:s,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=j.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(s);else{const t=new Y(n,this),e=t.p(this.options);t.m(s),this.S(e),this._$AH=t}}_$AC(t){let e=H.get(t.strings);return void 0===e&&H.set(t.strings,e=new j(t)),e}M(t){w(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new B(this.A($()),this.A($()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class D{constructor(t,e,s,i,n){this.type=1,this._$AH=U,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const n=this.strings;let r=!1;if(void 0===n)t=L(this,t,e,0),r=!b(t)||t!==this._$AH&&t!==N,r&&(this._$AH=t);else{const i=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=L(this,i[s+o],e,o),a===N&&(a=this._$AH[o]),r||(r=!b(a)||a!==this._$AH[o]),a===U?t=U:t!==U&&(t+=(null!=a?a:"")+n[o+1]),this._$AH[o]=a}r&&!i&&this.k(t)}k(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class I extends D{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===U?void 0:t}}class V extends D{constructor(){super(...arguments),this.type=4}k(t){t&&t!==U?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class q extends D{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=L(this,t,e,0))&&void 0!==s?s:U)===N)return;const i=this._$AH,n=t===U&&i!==U||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==U&&(i===U||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class F{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){L(this,t)}}var W,J,Z;null===(u=globalThis.litHtmlPolyfillSupport)||void 0===u||u.call(globalThis,j,B),(null!==(p=globalThis.litHtmlVersions)&&void 0!==p?p:globalThis.litHtmlVersions=[]).push("2.0.0");class G extends d{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,s)=>{var i,n;const r=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new B(e.insertBefore($(),t),t,void 0,null!=s?s:{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return N}}G.finalized=!0,G._$litElement$=!0,null===(W=globalThis.litElementHydrateSupport)||void 0===W||W.call(globalThis,{LitElement:G}),null===(J=globalThis.litElementPolyfillSupport)||void 0===J||J.call(globalThis,{LitElement:G}),(null!==(Z=globalThis.litElementVersions)&&void 0!==Z?Z:globalThis.litElementVersions=[]).push("3.0.0");const K=1,Q=t=>(...e)=>({_$litDirective$:t,values:e});class X{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const tt=Q(class extends X{constructor(t){var e;if(super(t),t.type!==K||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,s)=>{const i=t[s];return null==i?e:e+`${s=s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(t,[e]){const{style:s}=t.element;if(void 0===this.ut){this.ut=new Set;for(const t in e)this.ut.add(t);return this.render(e)}this.ut.forEach((t=>{null==e[t]&&(this.ut.delete(t),t.includes("-")?s.removeProperty(t):s[t]="")}));for(const t in e){const i=e[t];null!=i&&(this.ut.add(t),t.includes("-")?s.setProperty(t,i):s[t]=i)}return N}}),et=Q(class extends X{constructor(t){var e;if(super(t),t.type!==K||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var s,i;if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.et=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(s=this.et)||void 0===s?void 0:s.has(t))&&this.st.add(t);return this.render(e)}const n=t.element.classList;this.st.forEach((t=>{t in e||(n.remove(t),this.st.delete(t))}));for(const t in e){const s=!!e[t];s===this.st.has(t)||(null===(i=this.et)||void 0===i?void 0:i.has(t))||(s?(n.add(t),this.st.add(t)):(n.remove(t),this.st.delete(t)))}return N}}),st=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(s){s.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}};function it(t){return(e,s)=>void 0!==s?((t,e,s)=>{e.constructor.createProperty(s,t)})(t,e,s):st(t,e)}function nt(t){return it({...t,state:!0})}var rt="[^\\s]+";function ot(t,e){for(var s=[],i=0,n=t.length;i<n;i++)s.push(t[i].substr(0,e));return s}var at=function(t){return function(e,s){var i=s[t].map((function(t){return t.toLowerCase()})),n=i.indexOf(e.toLowerCase());return n>-1?n:null}};function lt(t){for(var e=[],s=1;s<arguments.length;s++)e[s-1]=arguments[s];for(var i=0,n=e;i<n.length;i++){var r=n[i];for(var o in r)t[o]=r[o]}return t}var ht=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ct=["January","February","March","April","May","June","July","August","September","October","November","December"],dt=ot(ct,3),ut={dayNamesShort:ot(ht,3),dayNames:ht,monthNamesShort:dt,monthNames:ct,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},pt=(lt({},ut),function(t){return+t-1}),mt=[null,"[1-9]\\d?"],ft=[null,rt],gt=["isPm",rt,function(t,e){var s=t.toLowerCase();return s===e.amPm[0]?0:s===e.amPm[1]?1:null}],vt=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var e=(t+"").match(/([+-]|\d\d)/gi);if(e){var s=60*+e[1]+parseInt(e[2],10);return"+"===e[0]?s:-s}return 0}];at("monthNamesShort"),at("monthNames");var _t,yt;!function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}(),function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(_t||(_t={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(yt||(yt={}));var $t={alert:"hass:alert",automation:"hass:playlist-play",calendar:"hass:calendar",camera:"hass:video",climate:"hass:thermostat",configurator:"hass:settings",conversation:"hass:text-to-speech",device_tracker:"hass:account",fan:"hass:fan",group:"hass:google-circles-communities",history_graph:"hass:chart-line",homeassistant:"hass:home-assistant",homekit:"hass:home-automation",image_processing:"hass:image-filter-frames",input_boolean:"hass:drawing",input_datetime:"hass:calendar-clock",input_number:"hass:ray-vertex",input_select:"hass:format-list-bulleted",input_text:"hass:textbox",light:"hass:lightbulb",mailbox:"hass:mailbox",notify:"hass:comment-alert",person:"hass:account",plant:"hass:flower",proximity:"hass:apple-safari",remote:"hass:remote",scene:"hass:google-pages",script:"hass:file-document",sensor:"hass:eye",simple_alarm:"hass:bell",sun:"hass:white-balance-sunny",switch:"hass:flash",timer:"hass:timer",updater:"hass:cloud-upload",vacuum:"hass:robot-vacuum",water_heater:"hass:thermometer",weblink:"hass:open-in-new"};function bt(t,e){if(t in $t)return $t[t];switch(t){case"alarm_control_panel":switch(e){case"armed_home":return"hass:bell-plus";case"armed_night":return"hass:bell-sleep";case"disarmed":return"hass:bell-outline";case"triggered":return"hass:bell-ring";default:return"hass:bell"}case"binary_sensor":return e&&"off"===e?"hass:radiobox-blank":"hass:checkbox-marked-circle";case"cover":return"closed"===e?"hass:window-closed":"hass:window-open";case"lock":return e&&"unlocked"===e?"hass:lock-open":"hass:lock";case"media_player":return e&&"off"!==e&&"idle"!==e?"hass:cast-connected":"hass:cast";case"zwave":switch(e){case"dead":return"hass:emoticon-dead";case"sleeping":return"hass:sleep";case"initializing":return"hass:timer-sand";default:return"hass:z-wave"}default:return console.warn("Unable to find icon for domain "+t+" ("+e+")"),"hass:bookmark"}}var wt={humidity:"hass:water-percent",illuminance:"hass:brightness-5",temperature:"hass:thermometer",pressure:"hass:gauge",power:"hass:flash",signal_strength:"hass:wifi"},At={binary_sensor:function(t){var e=t.state&&"off"===t.state;switch(t.attributes.device_class){case"battery":return e?"hass:battery":"hass:battery-outline";case"cold":return e?"hass:thermometer":"hass:snowflake";case"connectivity":return e?"hass:server-network-off":"hass:server-network";case"door":return e?"hass:door-closed":"hass:door-open";case"garage_door":return e?"hass:garage":"hass:garage-open";case"gas":case"power":case"problem":case"safety":case"smoke":return e?"hass:shield-check":"hass:alert";case"heat":return e?"hass:thermometer":"hass:fire";case"light":return e?"hass:brightness-5":"hass:brightness-7";case"lock":return e?"hass:lock":"hass:lock-open";case"moisture":return e?"hass:water-off":"hass:water";case"motion":return e?"hass:walk":"hass:run";case"occupancy":case"presence":return e?"hass:home-outline":"hass:home";case"opening":return e?"hass:square":"hass:square-outline";case"plug":return e?"hass:power-plug-off":"hass:power-plug";case"sound":return e?"hass:music-note-off":"hass:music-note";case"vibration":return e?"hass:crop-portrait":"hass:vibrate";case"window":return e?"hass:window-closed":"hass:window-open";default:return e?"hass:radiobox-blank":"hass:checkbox-marked-circle"}},cover:function(t){var e="closed"!==t.state;switch(t.attributes.device_class){case"garage":return e?"hass:garage-open":"hass:garage";case"door":return e?"hass:door-open":"hass:door-closed";case"shutter":return e?"hass:window-shutter-open":"hass:window-shutter";case"blind":return e?"hass:blinds-open":"hass:blinds";case"window":return e?"hass:window-open":"hass:window-closed";default:return bt("cover",t.state)}},sensor:function(t){var e=t.attributes.device_class;if(e&&e in wt)return wt[e];if("battery"===e){var s=Number(t.state);if(isNaN(s))return"hass:battery-unknown";var i=10*Math.round(s/10);return i>=100?"hass:battery":i<=0?"hass:battery-alert":"hass:battery-"+i}var n=t.attributes.unit_of_measurement;return"°C"===n||"°F"===n?"hass:thermometer":bt("sensor")},input_datetime:function(t){return t.attributes.has_date?t.attributes.has_time?bt("input_datetime"):"hass:calendar":"hass:clock"}};const xt={m:.001,k:1e3,M:1e6,G:1e9,T:1e12};var St={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",entity_not_found:"Entity state not found"},Et={common:St};const Ct={en:Object.freeze({__proto__:null,common:St,default:Et})};function Pt(t,e="",s=""){const i=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let n;try{n=t.split(".").reduce(((t,e)=>t[e]),Ct[i])}catch(e){n=t.split(".").reduce(((t,e)=>t[e]),Ct.en)}return void 0===n&&(n=t.split(".").reduce(((t,e)=>t[e]),Ct.en)),""!==e&&""!==s&&(n=n.replace(e,s)),n}console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");var kt=((t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new n(i,s)})`.container{display:flex;position:relative;padding:16px}.container.with-header{padding-top:0}.section{flex:1;flex-direction:column;position:relative;min-width:0;max-width:50%}.wide .section:last-child{flex:initial}.spacerv{transition:height .2s}.box{display:flex;align-items:center;transition:height .25s}.box div:first-child{display:flex;justify-content:center;align-items:center;overflow:hidden;background-color:var(--primary-color);width:15px;height:100%;cursor:pointer}.box .label{flex:1;display:flex;align-items:center;padding:0 10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.box .label span{font-style:italic}.connectors{position:absolute;top:0;left:14px;right:-1px;height:100%}.connectors svg{width:100%;height:100%}.connectors path{opacity:.4}`;console.info(`%c sankey-chart %c ${Pt("common.version")} 1.4.1 `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"sankey-chart",name:"Sankey Chart",description:"A card to display a sankey chart. For example for power consumptionA template custom card for you to create something awesome"});let Ot=class extends G{constructor(){super(...arguments),this.entities=[],this.height=200,this.sections=[],this.statePerPixelY=0}static getStubConfig(){return{}}setConfig(t){if(!t||!Array.isArray(t.sections))throw new Error(Pt("common.invalid_configuration"));t.test_gui&&function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null}().setEditMode(!0),this.config=Object.assign({height:200,unit_prefix:"",round:0,min_box_height:3,min_box_distance:5,show_states:!0},t),this.height=this.config.height;const e=[];t.sections.forEach((t=>{t.entities.forEach((t=>{e.push(this._getEntityId(t))}))})),this.entities=e}getCardSize(){return 4}shouldUpdate(t){return!!this.config&&(!!t.has("config")||this.entities.some((e=>{const s=t.get("hass");return!s||s.states[e]!==this.hass.states[e]})))}render(){const t=this.entities.find((t=>!this._getEntityState(t)));if(t)return console.warn(t),this._showError(Pt("common.entity_not_found"));this._calcElements();const e=et({container:!0,wide:!!this.config.wide,"with-header":!!this.config.title});return T`<ha-card tabindex="0" label="Sankey Chart" .header="${this.config.title}"><div class="${e}" style="${tt({height:this.height+"px"})}">${this.sections.map(((t,e)=>this.renderSection(e)))}</div></ha-card>`}renderSection(t){const{show_names:e,show_icons:s,show_states:i}=this.config,n=this.sections[t],{boxes:r,spacerH:o}=n,a=t<this.sections.length-1&&r.some((t=>t.children.length>0));return T`<div class="section">${a?T`<div class="connectors"><svg viewBox="0 0 100 ${this.height}" preserveAspectRatio="none">${this.renderBranchConnectors(t)}</svg></div>`:null} ${r.map(((t,n)=>{const r=parseFloat(t.state.toFixed(this.config.round)),a=t.config.name||t.entity.attributes.friendly_name||"",l=t.size+o-1,h=l<15?{maxHeight:l+"px",fontSize:l/15+"em"}:{};return T`${n>0?T`<div class="spacerv" style="${tt({height:o+"px"})}"></div>`:null}<div class="box" style="${tt({height:t.size+"px"})}"><div style="${tt({backgroundColor:t.color})}" @click="${()=>this._handleBoxClick(t)}" title="${a}">${s?T`<ha-icon .icon="${function(t){if(!t)return"hass:bookmark";if(t.attributes.icon)return t.attributes.icon;var e=function(t){return t.substr(0,t.indexOf("."))}(t.entity_id);return e in At?At[e](t):bt(e,t.state)}(t.entity)}"></ha-icon>`:null}</div><div class="label" style="${tt(h)}">${i?T`<span class="state">${r}</span><span class="unit">${t.unit_of_measurement}</span>`:null} ${e?T`<span class="name"> ${a}</span>`:null}</div></div>`}))}</div>`}renderBranchConnectors(t){const e=this.sections[t],{boxes:s}=e;return s.filter((t=>t.children.length>0)).map((e=>{const s=this.sections[t+1].boxes.filter((t=>e.children.includes(t.entity_id)));let i=0;const n=s.map((t=>{const s=t.connections.parents.reduce(((t,e)=>t+e.endSize),0),n=e.top+i,r=t.state-s/t.size*t.state,o=Math.max(Math.min(r/e.state*e.size,e.size-i),1),a=t.top+s,l=Math.min(t.size-s,e.size-i);l>0&&(i+=o);const h={startY:n,startSize:o,startColor:e.color,endY:a,endSize:l,endColor:t.color};return t.connections.parents.push(h),h})).filter((t=>t.endSize>0));return z`<defs>${n.map(((t,s)=>z`<linearGradient id="gradient${e.entity_id+s}"><stop offset="0%" stop-color="${t.startColor}"></stop><stop offset="100%" stop-color="${t.endColor}"></stop></linearGradient>`))}</defs>${n.map(((t,s)=>z`<path d="M0,${t.startY} C50,${t.startY} 50,${t.endY} 100,${t.endY} L100,${t.endY+t.endSize} C50,${t.endY+t.endSize} 50,${t.startY+t.startSize} 0,${t.startY+t.startSize} Z" fill="url(#gradient${e.entity_id+s})">`))}`}))}_calcElements(){this.statePerPixelY=0;const t=this.config.sections.map((()=>[]));this.sections=this.config.sections.map(((e,s)=>{let i=0;const n=e.entities.reduce(((e,i)=>{const n="string"==typeof i?{entity_id:i}:i,r=t[s].find((t=>t.children[t.children.length-1]===n.entity_id));return r?[...e,n,r]:[...e,n]}),[]);let r=n.filter((t=>{const e=Number(this._getEntityState(t).state);return!isNaN(e)&&e>0})).map((e=>{const n=this._getEntityState(e);let{state:r,unit_of_measurement:o}=this._normalizeStateValue(Number(n.state),n.attributes.unit_of_measurement);e.accountedState&&(r-=e.accountedState),i+=r,t[s]&&t[s].some((t=>{t.children.some((t=>t===e.entity_id))&&(t.accountedState+=r)}));let a=e.children||[];if(e.remaining&&t[s+1]){a=[...a,e.entity_id];const i="string"==typeof e.remaining?{name:e.remaining}:e.remaining;t[s+1].push(Object.assign(Object.assign(Object.assign(Object.assign({},e),{color:void 0}),i),{accountedState:0}))}let l=e.color||"var(--primary-color)";if(void 0!==e.color_on_state&&e.color_on_state){const t=void 0===e.color_limit?1:e.color_limit,s=void 0===e.color_below?"var(--primary-color)":e.color_below,i=void 0===e.color_above?"var(--paper-item-icon-color)":e.color_above;l=r>t?i:s}return{config:e,entity:n,entity_id:this._getEntityId(e),state:r,unit_of_measurement:o,color:l,children:a,connections:{parents:[]},top:0,size:0}}));if(!r.length)return{boxes:r,total:i,spacerH:0,statePerPixelY:0};const o=this.height-(r.length-1)*this.config.min_box_distance,a=this._calcBoxHeights(r,o,i);r=a.boxes;const l=r.reduce(((t,e)=>t+e.size),0),h=this.height-l,c=r.length>1?h/(r.length-1):0;let d=0;return r=r.map((t=>{const e=d;return d+=t.size+c,Object.assign(Object.assign({},t),{top:e})})),{boxes:r,total:i,spacerH:c,statePerPixelY:a.statePerPixelY}})).filter((t=>t.boxes.length>0)).map((t=>{let e=0,{boxes:s}=t;t.statePerPixelY!==this.statePerPixelY?s=s.map((t=>{const s=Math.max(this.config.min_box_height,Math.floor(t.state/this.statePerPixelY));return e+=s,Object.assign(Object.assign({},t),{size:s})})):e=s.reduce(((t,e)=>t+e.size),0);const i=this.height-e,n=s.length>1?i/(s.length-1):0;let r=0;return s=s.map((t=>{const e=r;return r+=t.size+n,Object.assign(Object.assign({},t),{top:e})})),Object.assign(Object.assign({},t),{boxes:s,spacerH:n})}))}_calcBoxHeights(t,e,s){const i=s/e;i>this.statePerPixelY&&(this.statePerPixelY=i);let n=0;const r=t.map((t=>{if(t.size===this.config.min_box_height)return t;let e=Math.floor(t.state/this.statePerPixelY);return e<this.config.min_box_height&&(n+=this.config.min_box_height-e,e=this.config.min_box_height),Object.assign(Object.assign({},t),{size:e})}));return n>0?this._calcBoxHeights(r,e-n,s):{boxes:r,statePerPixelY:this.statePerPixelY}}_normalizeStateValue(t,e){if(!e)return{state:t,unit_of_measurement:e};const{unit_prefix:s}=this.config,i=Object.keys(xt).find((t=>0===e.indexOf(t)))||"",n=xt[i]||1,r=xt[s]||1;return n===r?{state:t,unit_of_measurement:e}:{state:t*n/r,unit_of_measurement:i?e.replace(i,s):s+e}}_handleBoxClick(t){!function(t,e,s,i){i=i||{},s=null==s?{}:s;var n=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});n.detail=s,t.dispatchEvent(n)}(this,"hass-more-info",{entityId:t.entity_id})}_showError(t){const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t,origConfig:this.config}),T`${e}`}_getEntityId(t){return"string"==typeof t?t:t.entity_id}_getEntityState(t){return this.hass.states[this._getEntityId(t)]}static get styles(){return kt}};t([it({attribute:!1})],Ot.prototype,"hass",void 0),t([it({attribute:!1})],Ot.prototype,"entities",void 0),t([nt()],Ot.prototype,"config",void 0),t([nt()],Ot.prototype,"height",void 0),t([nt()],Ot.prototype,"sections",void 0),t([nt()],Ot.prototype,"statePerPixelY",void 0),Ot=t([(t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:s,elements:i}=e;return{kind:s,elements:i,finisher(e){window.customElements.define(t,e)}}})(t,e))("sankey-chart")],Ot);export{Ot as SankeyChart};