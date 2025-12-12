var version = "1.0.2";
var repository = {
	type: "git",
	url: "https://github.com/davet2001/homeassistant-energy-sankey-card"
};

/******************************************************************************
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
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

// Material Design Icons v7.4.47
var mdiArrowLeft = "M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z";
var mdiArrowRight = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z";
var mdiBattery = "M16.67,4H15V2H9V4H7.33A1.33,1.33 0 0,0 6,5.33V20.67C6,21.4 6.6,22 7.33,22H16.67A1.33,1.33 0 0,0 18,20.67V5.33C18,4.6 17.4,4 16.67,4Z";
var mdiBatteryCharging = "M16.67,4H15V2H9V4H7.33A1.33,1.33 0 0,0 6,5.33V20.66C6,21.4 6.6,22 7.33,22H16.66C17.4,22 18,21.4 18,20.67V5.33C18,4.6 17.4,4 16.67,4M11,20V14.5H9L13,7V12.5H15";
var mdiClose = "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";
var mdiDrag = "M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z";
var mdiHelpRhombus = "M12 2C11.5 2 11 2.19 10.59 2.59L2.59 10.59C1.8 11.37 1.8 12.63 2.59 13.41L10.59 21.41C11.37 22.2 12.63 22.2 13.41 21.41L21.41 13.41C22.2 12.63 22.2 11.37 21.41 10.59L13.41 2.59C13 2.19 12.5 2 12 2M12 6.95C14.7 7.06 15.87 9.78 14.28 11.81C13.86 12.31 13.19 12.64 12.85 13.07C12.5 13.5 12.5 14 12.5 14.5H11C11 13.65 11 12.94 11.35 12.44C11.68 11.94 12.35 11.64 12.77 11.31C14 10.18 13.68 8.59 12 8.46C11.18 8.46 10.5 9.13 10.5 9.97H9C9 8.3 10.35 6.95 12 6.95M11 15.5H12.5V17H11V15.5Z";
var mdiPalette = "M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z";
var mdiSolarPower = "M11.45,2V5.55L15,3.77L11.45,2M10.45,8L8,10.46L11.75,11.71L10.45,8M2,11.45L3.77,15L5.55,11.45H2M10,2H2V10C2.57,10.17 3.17,10.25 3.77,10.25C7.35,10.26 10.26,7.35 10.27,3.75C10.26,3.16 10.17,2.57 10,2M17,22V16H14L19,7V13H22L17,22Z";
var mdiTransmissionTower = "M8.28,5.45L6.5,4.55L7.76,2H16.23L17.5,4.55L15.72,5.44L15,4H9L8.28,5.45M18.62,8H14.09L13.3,5H10.7L9.91,8H5.38L4.1,10.55L5.89,11.44L6.62,10H17.38L18.1,11.45L19.89,10.56L18.62,8M17.77,22H15.7L15.46,21.1L12,15.9L8.53,21.1L8.3,22H6.23L9.12,11H11.19L10.83,12.35L12,14.1L13.16,12.35L12.81,11H14.88L17.77,22M11.4,15L10.5,13.65L9.32,18.13L11.4,15M14.68,18.12L13.5,13.64L12.6,15L14.68,18.12Z";
var mdiWrench = "M22.7,19L13.6,9.9C14.5,7.6 14,4.9 12.1,3C10.1,1 7.1,0.6 4.7,1.7L9,6L6,9L1.6,4.7C0.4,7.1 0.9,10.1 2.9,12.1C4.8,14 7.5,14.5 9.8,13.6L18.9,22.7C19.3,23.1 19.9,23.1 20.3,22.7L22.6,20.4C23.1,20 23.1,19.3 22.7,19Z";

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$3=window,e$5=t$3.ShadowRoot&&(void 0===t$3.ShadyCSS||t$3.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$4=Symbol(),n$5=new WeakMap;let o$4 = class o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$4)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$5&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$5.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$5.set(s,t));}return t}toString(){return this.cssText}};const r$3=t=>new o$4("string"==typeof t?t:t+"",void 0,s$4),i$3=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$4(n,t,s$4)},S$1=(s,n)=>{e$5?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$3.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$3=e$5?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$3(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$3;const e$4=window,r$2=e$4.trustedTypes,h$1=r$2?r$2.emptyScript:"",o$3=e$4.reactiveElementPolyfillSupport,n$4={toAttribute(t,i){switch(i){case Boolean:t=t?h$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$2=(t,i)=>i!==t&&(i==i||t==t),l$3={attribute:!0,type:String,converter:n$4,reflect:!1,hasChanged:a$2},d$1="finalized";let u$2 = class u extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$3){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$3}static finalize(){if(this.hasOwnProperty(d$1))return !1;this[d$1]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$3(i));}else void 0!==i&&s.push(c$3(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$3){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$4).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$4;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$2)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}};u$2[d$1]=!0,u$2.elementProperties=new Map,u$2.elementStyles=[],u$2.shadowRootOptions={mode:"open"},null==o$3||o$3({ReactiveElement:u$2}),(null!==(s$3=e$4.reactiveElementVersions)&&void 0!==s$3?s$3:e$4.reactiveElementVersions=[]).push("1.6.3");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$2;const i$2=window,s$2=i$2.trustedTypes,e$3=s$2?s$2.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$2="$lit$",n$3=`lit$${(Math.random()+"").slice(9)}$`,l$2="?"+n$3,h=`<${l$2}>`,r$1=document,u$1=()=>r$1.createComment(""),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c$2=Array.isArray,v=t=>c$2(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a$1="[ \t\n\f\r]",f$1=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m$1=/>/g,p$1=RegExp(`>|${a$1}(?:([^\\s"'>=/]+)(${a$1}*=${a$1}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w(1),b=w(2),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r$1.createTreeWalker(r$1,129,null,!1);function P(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e$3?e$3.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,e=[];let l,r=2===i?"<svg>":"",u=f$1;for(let i=0;i<s;i++){const s=t[i];let d,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f$1?"!--"===c[1]?u=_:void 0!==c[1]?u=m$1:void 0!==c[2]?(y.test(c[2])&&(l=RegExp("</"+c[2],"g")),u=p$1):void 0!==c[3]&&(u=p$1):u===p$1?">"===c[0]?(u=null!=l?l:f$1,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,d=c[1],u=void 0===c[3]?p$1:'"'===c[3]?$:g):u===$||u===g?u=p$1:u===_||u===m$1?u=f$1:(u=p$1,l=void 0);const w=u===p$1&&t[i+1].startsWith("/>")?" ":"";r+=u===f$1?s+h:v>=0?(e.push(d),s.slice(0,v)+o$2+s.slice(v)+n$3+w):s+n$3+(-2===v?(e.push(void 0),i):w);}return [P(t,r+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};class N{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,d=0;const c=t.length-1,v=this.parts,[a,f]=V(t,i);if(this.el=N.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$2)||i.startsWith(n$3)){const s=f[d++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$2).split(n$3),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?H:"?"===i[1]?L:"@"===i[1]?z:k});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y.test(h.tagName)){const t=h.textContent.split(n$3),i=t.length-1;if(i>0){h.textContent=s$2?s$2.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],u$1()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],u$1());}}}else if(8===h.nodeType)if(h.data===l$2)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$3,t+1));)v.push({type:7,index:r}),t+=n$3.length-1;}r++;}}static createElement(t,i){const s=r$1.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=S(t,r._$AS(t,i.values),r,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r$1).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,u=e[0];for(;void 0!==u;){if(l===u.index){let i;2===u.type?i=new R(n,n.nextSibling,this,t):1===u.type?i=new u.ctor(n,u.name,u.strings,this,t):6===u.type&&(i=new Z(n,this,t)),this._$AV.push(i),u=e[++h];}l!==(null==u?void 0:u.index)&&(n=C.nextNode(),l++);}return C.currentNode=r$1,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),d(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A&&d(this._$AH)?this._$AA.nextSibling.data=t:this.$(r$1.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=N.createElement(P(e.h,e.h[0]),this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new M(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new N(t)),i}T(t){c$2(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new R(this.k(u$1()),this.k(u$1()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class k{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=S(this,t,i,0),n=!d(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=S(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!d(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}const I=s$2?s$2.emptyScript:"";class L extends k{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A?this.element.setAttribute(this.name,I):this.element.removeAttribute(this.name);}}class z extends k{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=S(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t);}}const j={O:o$2,P:n$3,A:l$2,C:1,M:V,L:M,R:v,D:S,I:R,V:k,H:L,N:z,U:H,F:Z},B=i$2.litHtmlPolyfillSupport;null==B||B(N,R),(null!==(t$2=i$2.litHtmlVersions)&&void 0!==t$2?t$2:i$2.litHtmlVersions=[]).push("2.8.0");const D=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new R(i.insertBefore(u$1(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l$1,o$1;let s$1 = class s extends u$2{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}};s$1.finalized=!0,s$1._$litElement$=!0,null===(l$1=globalThis.litElementHydrateSupport)||void 0===l$1||l$1.call(globalThis,{LitElement:s$1});const n$2=globalThis.litElementPolyfillSupport;null==n$2||n$2({LitElement:s$1});(null!==(o$1=globalThis.litElementVersions)&&void 0!==o$1?o$1:globalThis.litElementVersions=[]).push("3.3.3");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$2=e=>n=>"function"==typeof n?((e,n)=>(customElements.define(e,n),n))(e,n):((e,n)=>{const{kind:t,elements:s}=n;return {kind:t,elements:s,finisher(n){customElements.define(e,n);}}})(e,n);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i$1=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}},e$1=(i,e,n)=>{e.constructor.createProperty(n,i);};function n$1(n){return (t,o)=>void 0!==o?e$1(n,t,o):i$1(n,t)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function t$1(t){return n$1({...t,state:!0})}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n;null!=(null===(n=window.HTMLSlotElement)||void 0===n?void 0:n.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o=e(class extends i{constructor(t$1){var i;if(super(t$1),t$1.type!==t.ATTRIBUTE||"class"!==t$1.name||(null===(i=t$1.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return " "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(i,[s]){var r,o;if(void 0===this.it){this.it=new Set,void 0!==i.strings&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in s)s[t]&&!(null===(r=this.nt)||void 0===r?void 0:r.has(t))&&this.it.add(t);return this.render(s)}const e=i.element.classList;this.it.forEach((t=>{t in s||(e.remove(t),this.it.delete(t));}));for(const t in s){const i=!!s[t];i===this.it.has(t)||(null===(o=this.nt)||void 0===o?void 0:o.has(t))||(i?(e.add(t),this.it.add(t)):(e.remove(t),this.it.delete(t)));}return T}});

/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */


/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */
const millisecondsInDay = 86400000;

/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */
const millisecondsInHour = 3600000;

/**
 * @constant
 * @name constructFromSymbol
 * @summary Symbol enabling Date extensions to inherit properties from the reference date.
 *
 * The symbol is used to enable the `constructFrom` function to construct a date
 * using a reference date and a value. It allows to transfer extra properties
 * from the reference date to the new date. It's useful for extensions like
 * [`TZDate`](https://github.com/date-fns/tz) that accept a time zone as
 * a constructor argument.
 */
const constructFromSymbol = Symbol.for("constructDateFrom");

/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * Starting from v3.7.0, it allows to construct a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from "./constructFrom/date-fns";
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date>(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use constructor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   );
 * }
 */
function constructFrom(date, value) {
  if (typeof date === "function") return date(value);

  if (date && typeof date === "object" && constructFromSymbol in date)
    return date[constructFromSymbol](value);

  if (date instanceof Date) return new date.constructor(value);

  return new Date(value);
}

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * Starting from v3.7.0, it clones a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate$1(argument, context) {
  // [TODO] Get rid of `toDate` or `constructFrom`?
  return constructFrom(context || argument, argument);
}

/**
 * The {@link addDays} function options.
 */

/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be added.
 * @param options - An object with options
 *
 * @returns The new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(date, amount, options) {
  const _date = toDate$1(date, options?.in);
  if (isNaN(amount)) return constructFrom(options?.in || date, NaN);

  // If 0 days, no-op to avoid changing times in the hour before end of DST
  if (!amount) return _date;

  _date.setDate(_date.getDate() + amount);
  return _date;
}

/**
 * The {@link addMonths} function options.
 */

/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of months to be added.
 * @param options - The options object
 *
 * @returns The new date with the months added
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 *
 * // Add one month to 30 January 2023:
 * const result = addMonths(new Date(2023, 0, 30), 1)
 * //=> Tue Feb 28 2023 00:00:00
 */
function addMonths(date, amount, options) {
  const _date = toDate$1(date, options?.in);
  if (isNaN(amount)) return constructFrom(options?.in || date, NaN);
  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return _date;
  }
  const dayOfMonth = _date.getDate();

  // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.
  const endOfDesiredMonth = constructFrom(options?.in || date, _date.getTime());
  endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
  const daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    _date.setFullYear(
      endOfDesiredMonth.getFullYear(),
      endOfDesiredMonth.getMonth(),
      dayOfMonth,
    );
    return _date;
  }
}

/**
 * The {@link addMilliseconds} function options.
 */

/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of milliseconds to be added.
 * @param options - The options object
 *
 * @returns The new date with the milliseconds added
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
function addMilliseconds(date, amount, options) {
  return constructFrom(date, +toDate$1(date) + amount);
}

/**
 * The {@link addHours} function options.
 */

/**
 * @name addHours
 * @category Hour Helpers
 * @summary Add the specified number of hours to the given date.
 *
 * @description
 * Add the specified number of hours to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of hours to be added
 * @param options - An object with options
 *
 * @returns The new date with the hours added
 *
 * @example
 * // Add 2 hours to 10 July 2014 23:00:00:
 * const result = addHours(new Date(2014, 6, 10, 23, 0), 2)
 * //=> Fri Jul 11 2014 01:00:00
 */
function addHours(date, amount, options) {
  return addMilliseconds(date, amount * millisecondsInHour);
}

/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds$1(date) {
  const _date = toDate$1(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds(),
    ),
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}

function normalizeDates(context, ...dates) {
  const normalize = constructFrom.bind(
    null,
    context || dates.find((date) => typeof date === "object"),
  );
  return dates.map(normalize);
}

/**
 * The {@link startOfDay} function options.
 */

/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date, options) {
  const _date = toDate$1(date, options?.in);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

/**
 * The {@link differenceInCalendarDays} function options.
 */

/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - The options object
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
function differenceInCalendarDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );

  const laterStartOfDay = startOfDay(laterDate_);
  const earlierStartOfDay = startOfDay(earlierDate_);

  const laterTimestamp =
    +laterStartOfDay - getTimezoneOffsetInMilliseconds$1(laterStartOfDay);
  const earlierTimestamp =
    +earlierStartOfDay - getTimezoneOffsetInMilliseconds$1(earlierStartOfDay);

  // Round the number of days to the nearest integer because the number of
  // milliseconds in a day is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round((laterTimestamp - earlierTimestamp) / millisecondsInDay);
}

/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param dateLeft - The first date to compare
 * @param dateRight - The second date to compare
 *
 * @returns The result of the comparison
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc(dateLeft, dateRight) {
  const diff = +toDate$1(dateLeft) - +toDate$1(dateRight);

  if (diff < 0) return -1;
  else if (diff > 0) return 1;

  // Return 0 if diff is 0; return NaN if diff is NaN
  return diff;
}

/**
 * The {@link differenceInCalendarMonths} function options.
 */

/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of calendar months
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */
function differenceInCalendarMonths(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );

  const yearsDiff = laterDate_.getFullYear() - earlierDate_.getFullYear();
  const monthsDiff = laterDate_.getMonth() - earlierDate_.getMonth();

  return yearsDiff * 12 + monthsDiff;
}

/**
 * The {@link differenceInDays} function options.
 */

/**
 * @name differenceInDays
 * @category Day Helpers
 * @summary Get the number of full days between the given dates.
 *
 * @description
 * Get the number of full day periods between two dates. Fractional days are
 * truncated towards zero.
 *
 * One "full day" is the distance between a local time in one day to the same
 * local time on the next or previous day. A full day can sometimes be less than
 * or more than 24 hours if a daylight savings change happens between two dates.
 *
 * To ignore DST and only measure exact 24-hour periods, use this instead:
 * `Math.trunc(differenceInHours(dateLeft, dateRight)/24)|0`.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of full days according to the local timezone
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 365
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 0
 *
 * @example
 * // How many full days are between
 * // 1 March 2020 0:00 and 1 June 2020 0:00 ?
 * // Note: because local time is used, the
 * // result will always be 92 days, even in
 * // time zones where DST starts and the
 * // period has only 92*24-1 hours.
 * const result = differenceInDays(
 *   new Date(2020, 5, 1),
 *   new Date(2020, 2, 1)
 * )
 * //=> 92
 */
function differenceInDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );

  const sign = compareLocalAsc(laterDate_, earlierDate_);
  const difference = Math.abs(
    differenceInCalendarDays(laterDate_, earlierDate_),
  );

  laterDate_.setDate(laterDate_.getDate() - sign * difference);

  // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
  // If so, result must be decreased by 1 in absolute value
  const isLastDayNotFull = Number(
    compareLocalAsc(laterDate_, earlierDate_) === -sign,
  );

  const result = sign * (difference - isLastDayNotFull);
  // Prevent negative zero
  return result === 0 ? 0 : result;
}

// Like `compareAsc` but uses local time not UTC, which is needed
// for accurate equality comparisons of UTC timestamps that end up
// having the same representation in local time, e.g. one hour before
// DST ends vs. the instant that DST ends.
function compareLocalAsc(laterDate, earlierDate) {
  const diff =
    laterDate.getFullYear() - earlierDate.getFullYear() ||
    laterDate.getMonth() - earlierDate.getMonth() ||
    laterDate.getDate() - earlierDate.getDate() ||
    laterDate.getHours() - earlierDate.getHours() ||
    laterDate.getMinutes() - earlierDate.getMinutes() ||
    laterDate.getSeconds() - earlierDate.getSeconds() ||
    laterDate.getMilliseconds() - earlierDate.getMilliseconds();

  if (diff < 0) return -1;
  if (diff > 0) return 1;

  // Return 0 if diff is 0; return NaN if diff is NaN
  return diff;
}

/**
 * The {@link endOfDay} function options.
 */

/**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a day
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */
function endOfDay(date, options) {
  const _date = toDate$1(date, options?.in);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

/**
 * The {@link endOfMonth} function options.
 */

/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a month
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */
function endOfMonth(date, options) {
  const _date = toDate$1(date, options?.in);
  const month = _date.getMonth();
  _date.setFullYear(_date.getFullYear(), month + 1, 0);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

/**
 * @name isLastDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is the last day of a month
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * const result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */
function isLastDayOfMonth(date, options) {
  const _date = toDate$1(date, options?.in);
  return +endOfDay(_date, options) === +endOfMonth(_date, options);
}

/**
 * The {@link differenceInMonths} function options.
 */

/**
 * @name differenceInMonths
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of full months
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
 * //=> 7
 */
function differenceInMonths(laterDate, earlierDate, options) {
  const [laterDate_, workingLaterDate, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    laterDate,
    earlierDate,
  );

  const sign = compareAsc(workingLaterDate, earlierDate_);
  const difference = Math.abs(
    differenceInCalendarMonths(workingLaterDate, earlierDate_),
  );

  if (difference < 1) return 0;

  if (workingLaterDate.getMonth() === 1 && workingLaterDate.getDate() > 27)
    workingLaterDate.setDate(30);

  workingLaterDate.setMonth(workingLaterDate.getMonth() - sign * difference);

  let isLastMonthNotFull = compareAsc(workingLaterDate, earlierDate_) === -sign;

  if (
    isLastDayOfMonth(laterDate_) &&
    difference === 1 &&
    compareAsc(laterDate_, earlierDate_) === 1
  ) {
    isLastMonthNotFull = false;
  }

  const result = sign * (difference - +isLastMonthNotFull);
  return result === 0 ? 0 : result;
}

/**
 * The {@link isFirstDayOfMonth} function options.
 */

/**
 * @name isFirstDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the first day of a month?
 *
 * @description
 * Is the given date the first day of a month?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is the first day of a month
 *
 * @example
 * // Is 1 September 2014 the first day of a month?
 * const result = isFirstDayOfMonth(new Date(2014, 8, 1))
 * //=> true
 */
function isFirstDayOfMonth(date, options) {
  return toDate$1(date, options?.in).getDate() === 1;
}

const createStore = (state) => {
    let listeners = [];
    function unsubscribe(listener) {
        let out = [];
        for (let i = 0; i < listeners.length; i++) {
            if (listeners[i] === listener) {
                listener = null;
            }
            else {
                out.push(listeners[i]);
            }
        }
        listeners = out;
    }
    function setState(update, overwrite) {
        state = overwrite ? update : Object.assign(Object.assign({}, state), update);
        let currentListeners = listeners;
        for (let i = 0; i < currentListeners.length; i++) {
            currentListeners[i](state);
        }
    }
    /**
     * An observable state container, returned from {@link createStore}
     * @name store
     */
    return {
        get state() {
            return state;
        },
        /**
         * Create a bound copy of the given action function.
         * The bound returned function invokes action() and persists the result back to the store.
         * If the return value of `action` is a Promise, the resolved value will be used as state.
         * @param {Function} action	An action of the form `action(state, ...args) -> stateUpdate`
         * @returns {Function} boundAction()
         */
        action(action) {
            function apply(result) {
                setState(result, false);
            }
            // Note: perf tests verifying this implementation: https://esbench.com/bench/5a295e6299634800a0349500
            return function () {
                let args = [state];
                for (let i = 0; i < arguments.length; i++)
                    args.push(arguments[i]);
                // @ts-ignore
                let ret = action.apply(this, args);
                if (ret != null) {
                    return ret instanceof Promise ? ret.then(apply) : apply(ret);
                }
            };
        },
        /**
         * Apply a partial state object to the current state, invoking registered listeners.
         * @param {Object} update				An object with properties to be merged into state
         * @param {Boolean} [overwrite=false]	If `true`, update will replace state instead of being merged into it
         */
        setState,
        clearState() {
            state = undefined;
        },
        /**
         * Register a listener function to be called whenever state is changed. Returns an `unsubscribe()` function.
         * @param {Function} listener	A function to call when state changes. Gets passed the new state.
         * @returns {Function} unsubscribe()
         */
        subscribe(listener) {
            listeners.push(listener);
            return () => {
                unsubscribe(listener);
            };
        },
        // /**
        //  * Remove a previously-registered listener function.
        //  * @param {Function} listener	The callback previously passed to `subscribe()` that should be removed.
        //  * @function
        //  */
        // unsubscribe,
    };
};

// Time to wait to unsubscribe from updates after last subscriber unsubscribes
const UNSUB_GRACE_PERIOD = 5000; // 5 seconds
/**
 *
 * @param conn connection
 * @param key the key to store it on the connection. Must be unique for each collection.
 * @param fetchCollection fetch the current state. If undefined assumes subscribeUpdates receives current state
 * @param subscribeUpdates subscribe to updates on the current state
 * @returns
 */
const getCollection = (conn, key, fetchCollection, subscribeUpdates, options = { unsubGrace: true }) => {
    // @ts-ignore
    if (conn[key]) {
        // @ts-ignore
        return conn[key];
    }
    let active = 0;
    let unsubTimer;
    let store = createStore();
    const refresh = () => {
        if (!fetchCollection) {
            throw new Error("Collection does not support refresh");
        }
        return fetchCollection(conn).then((state) => store.setState(state, true));
    };
    const refreshSwallow = () => refresh().catch((err) => {
        // Swallow errors if socket is connecting, closing or closed.
        // We will automatically call refresh again when we re-establish the connection.
        if (conn.connected) {
            throw err;
        }
    });
    const setupUpdateSubscription = () => {
        if (unsubTimer !== undefined) {
            clearTimeout(unsubTimer);
            unsubTimer = undefined;
            return;
        }
        if (fetchCollection) {
            // Fetch when connection re-established.
            conn.addEventListener("ready", refreshSwallow);
            refreshSwallow();
        }
        conn.addEventListener("disconnected", handleDisconnect);
    };
    const teardownUpdateSubscription = () => {
        unsubTimer = undefined;
        store.clearState();
        conn.removeEventListener("ready", refresh);
        conn.removeEventListener("disconnected", handleDisconnect);
    };
    const scheduleTeardownUpdateSubscription = () => {
        unsubTimer = setTimeout(teardownUpdateSubscription, UNSUB_GRACE_PERIOD);
    };
    const handleDisconnect = () => {
        // If we're going to unsubscribe and then lose connection,
        // just unsubscribe immediately.
        if (unsubTimer) {
            clearTimeout(unsubTimer);
            teardownUpdateSubscription();
        }
    };
    // @ts-ignore
    conn[key] = {
        get state() {
            return store.state;
        },
        refresh,
        subscribe(subscriber) {
            active++;
            // If this was the first subscriber, attach collection
            if (active === 1) {
                setupUpdateSubscription();
            }
            const unsub = store.subscribe(subscriber);
            if (store.state !== undefined) {
                // Don't call it right away so that caller has time
                // to initialize all the things.
                setTimeout(() => subscriber(store.state), 0);
            }
            return () => {
                unsub();
                active--;
                if (!active) {
                    options.unsubGrace
                        ? scheduleTeardownUpdateSubscription()
                        : teardownUpdateSubscription();
                }
            };
        },
    };
    // @ts-ignore
    return conn[key];
};

const STATE_NOT_RUNNING = "NOT_RUNNING";

/**
 * Returns the [year, month, day, hour, minute, seconds] tokens of the provided
 * `date` as it will be rendered in the `timeZone`.
 */
function tzTokenizeDate(date, timeZone) {
    const dtf = getDateTimeFormat(timeZone);
    return 'formatToParts' in dtf ? partsOffset(dtf, date) : hackyOffset(dtf, date);
}
const typeToPos = {
    year: 0,
    month: 1,
    day: 2,
    hour: 3,
    minute: 4,
    second: 5,
};
function partsOffset(dtf, date) {
    try {
        const formatted = dtf.formatToParts(date);
        const filled = [];
        for (let i = 0; i < formatted.length; i++) {
            const pos = typeToPos[formatted[i].type];
            if (pos !== undefined) {
                filled[pos] = parseInt(formatted[i].value, 10);
            }
        }
        return filled;
    }
    catch (error) {
        if (error instanceof RangeError) {
            return [NaN];
        }
        throw error;
    }
}
function hackyOffset(dtf, date) {
    const formatted = dtf.format(date);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted);
    // const [, fMonth, fDay, fYear, fHour, fMinute, fSecond] = parsed
    // return [fYear, fMonth, fDay, fHour, fMinute, fSecond]
    return [
        parseInt(parsed[3], 10),
        parseInt(parsed[1], 10),
        parseInt(parsed[2], 10),
        parseInt(parsed[4], 10),
        parseInt(parsed[5], 10),
        parseInt(parsed[6], 10),
    ];
}
// Get a cached Intl.DateTimeFormat instance for the IANA `timeZone`. This can be used
// to get deterministic local date/time output according to the `en-US` locale which
// can be used to extract local time parts as necessary.
const dtfCache = {};
// New browsers use `hourCycle`, IE and Chrome <73 does not support it and uses `hour12`
const testDateFormatted = new Intl.DateTimeFormat('en-US', {
    hourCycle: 'h23',
    timeZone: 'America/New_York',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
}).format(new Date('2014-06-25T04:00:00.123Z'));
const hourCycleSupported = testDateFormatted === '06/25/2014, 00:00:00' ||
    testDateFormatted === '‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00';
function getDateTimeFormat(timeZone) {
    if (!dtfCache[timeZone]) {
        dtfCache[timeZone] = hourCycleSupported
            ? new Intl.DateTimeFormat('en-US', {
                hourCycle: 'h23',
                timeZone: timeZone,
                year: 'numeric',
                month: 'numeric',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            })
            : new Intl.DateTimeFormat('en-US', {
                hour12: false,
                timeZone: timeZone,
                year: 'numeric',
                month: 'numeric',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            });
    }
    return dtfCache[timeZone];
}

/**
 * Use instead of `new Date(Date.UTC(...))` to support years below 100 which doesn't work
 * otherwise due to the nature of the
 * [`Date` constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#interpretation_of_two-digit_years.
 *
 * For `Date.UTC(...)`, use `newDateUTC(...).getTime()`.
 */
function newDateUTC(fullYear, month, day, hour, minute, second, millisecond) {
    const utcDate = new Date(0);
    utcDate.setUTCFullYear(fullYear, month, day);
    utcDate.setUTCHours(hour, minute, second, millisecond);
    return utcDate;
}

const MILLISECONDS_IN_HOUR$1 = 3600000;
const MILLISECONDS_IN_MINUTE$1 = 60000;
const patterns$1 = {
    timezone: /([Z+-].*)$/,
    timezoneZ: /^(Z)$/,
    timezoneHH: /^([+-]\d{2})$/,
    timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/,
};
// Parse constious time zone offset formats to an offset in milliseconds
function tzParseTimezone(timezoneString, date, isUtcDate) {
    // Empty string
    if (!timezoneString) {
        return 0;
    }
    // Z
    let token = patterns$1.timezoneZ.exec(timezoneString);
    if (token) {
        return 0;
    }
    let hours;
    let absoluteOffset;
    // ±hh
    token = patterns$1.timezoneHH.exec(timezoneString);
    if (token) {
        hours = parseInt(token[1], 10);
        if (!validateTimezone(hours)) {
            return NaN;
        }
        return -(hours * MILLISECONDS_IN_HOUR$1);
    }
    // ±hh:mm or ±hhmm
    token = patterns$1.timezoneHHMM.exec(timezoneString);
    if (token) {
        hours = parseInt(token[2], 10);
        const minutes = parseInt(token[3], 10);
        if (!validateTimezone(hours, minutes)) {
            return NaN;
        }
        absoluteOffset = Math.abs(hours) * MILLISECONDS_IN_HOUR$1 + minutes * MILLISECONDS_IN_MINUTE$1;
        return token[1] === '+' ? -absoluteOffset : absoluteOffset;
    }
    // IANA time zone
    if (isValidTimezoneIANAString(timezoneString)) {
        date = new Date(date || Date.now());
        const utcDate = isUtcDate ? date : toUtcDate(date);
        const offset = calcOffset(utcDate, timezoneString);
        const fixedOffset = isUtcDate ? offset : fixOffset(date, offset, timezoneString);
        return -fixedOffset;
    }
    return NaN;
}
function toUtcDate(date) {
    return newDateUTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
}
function calcOffset(date, timezoneString) {
    const tokens = tzTokenizeDate(date, timezoneString);
    // ms dropped because it's not provided by tzTokenizeDate
    const asUTC = newDateUTC(tokens[0], tokens[1] - 1, tokens[2], tokens[3] % 24, tokens[4], tokens[5], 0).getTime();
    let asTS = date.getTime();
    const over = asTS % 1000;
    asTS -= over >= 0 ? over : 1000 + over;
    return asUTC - asTS;
}
function fixOffset(date, offset, timezoneString) {
    const localTS = date.getTime();
    // Our UTC time is just a guess because our offset is just a guess
    let utcGuess = localTS - offset;
    // Test whether the zone matches the offset for this ts
    const o2 = calcOffset(new Date(utcGuess), timezoneString);
    // If so, offset didn't change, and we're done
    if (offset === o2) {
        return offset;
    }
    // If not, change the ts by the difference in the offset
    utcGuess -= o2 - offset;
    // If that gives us the local time we want, we're done
    const o3 = calcOffset(new Date(utcGuess), timezoneString);
    if (o2 === o3) {
        return o2;
    }
    // If it's different, we're in a hole time. The offset has changed, but we don't adjust the time
    return Math.max(o2, o3);
}
function validateTimezone(hours, minutes) {
    return -23 <= hours && hours <= 23 && (minutes == null || (0 <= minutes && minutes <= 59));
}
const validIANATimezoneCache = {};
function isValidTimezoneIANAString(timeZoneString) {
    if (validIANATimezoneCache[timeZoneString])
        return true;
    try {
        new Intl.DateTimeFormat(undefined, { timeZone: timeZoneString });
        validIANATimezoneCache[timeZoneString] = true;
        return true;
    }
    catch (error) {
        return false;
    }
}

/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
    const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
    utcDate.setUTCFullYear(date.getFullYear());
    return +date - +utcDate;
}

/** Regex to identify the presence of a time zone specifier in a date string */
const tzPattern = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/;

const MILLISECONDS_IN_HOUR = 3600000;
const MILLISECONDS_IN_MINUTE = 60000;
const DEFAULT_ADDITIONAL_DIGITS = 2;
const patterns = {
    dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
    datePattern: /^([0-9W+-]+)(.*)/,
    plainTime: /:/,
    // year tokens
    YY: /^(\d{2})$/,
    YYY: [
        /^([+-]\d{2})$/, // 0 additional digits
        /^([+-]\d{3})$/, // 1 additional digit
        /^([+-]\d{4})$/, // 2 additional digits
    ],
    YYYY: /^(\d{4})/,
    YYYYY: [
        /^([+-]\d{4})/, // 0 additional digits
        /^([+-]\d{5})/, // 1 additional digit
        /^([+-]\d{6})/, // 2 additional digits
    ],
    // date tokens
    MM: /^-(\d{2})$/,
    DDD: /^-?(\d{3})$/,
    MMDD: /^-?(\d{2})-?(\d{2})$/,
    Www: /^-?W(\d{2})$/,
    WwwD: /^-?W(\d{2})-?(\d{1})$/,
    HH: /^(\d{2}([.,]\d*)?)$/,
    HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
    HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
    // time zone tokens (to identify the presence of a tz)
    timeZone: tzPattern,
};
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If an argument is a string, the function tries to parse it.
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 * If the function cannot parse the string or the values are invalid, it returns Invalid Date.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 * All *date-fns* functions will throw `RangeError` if `options.additionalDigits` is not 0, 1, 2 or undefined.
 *
 * @param argument the value to convert
 * @param options the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @param {string} [options.timeZone=''] - used to specify the IANA time zone offset of a date String.
 *
 * @returns the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = toDate('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = toDate('+02014101', {additionalDigits: 1})
 * //=> Fri Apr 11 2014 00:00:00
 */
function toDate(argument, options = {}) {
    if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
    }
    if (argument === null) {
        return new Date(NaN);
    }
    const additionalDigits = options.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : Number(options.additionalDigits);
    if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
        throw new RangeError('additionalDigits must be 0, 1 or 2');
    }
    // Clone the date
    if (argument instanceof Date ||
        (typeof argument === 'object' && Object.prototype.toString.call(argument) === '[object Date]')) {
        // Prevent the date to lose the milliseconds when passed to new Date() in IE10
        return new Date(argument.getTime());
    }
    else if (typeof argument === 'number' ||
        Object.prototype.toString.call(argument) === '[object Number]') {
        return new Date(argument);
    }
    else if (!(Object.prototype.toString.call(argument) === '[object String]')) {
        return new Date(NaN);
    }
    const dateStrings = splitDateString(argument);
    const { year, restDateString } = parseYear(dateStrings.date, additionalDigits);
    const date = parseDate(restDateString, year);
    if (date === null || isNaN(date.getTime())) {
        return new Date(NaN);
    }
    if (date) {
        const timestamp = date.getTime();
        let time = 0;
        let offset;
        if (dateStrings.time) {
            time = parseTime(dateStrings.time);
            if (time === null || isNaN(time)) {
                return new Date(NaN);
            }
        }
        if (dateStrings.timeZone || options.timeZone) {
            offset = tzParseTimezone(dateStrings.timeZone || options.timeZone, new Date(timestamp + time));
            if (isNaN(offset)) {
                return new Date(NaN);
            }
        }
        else {
            // get offset accurate to hour in time zones that change offset
            offset = getTimezoneOffsetInMilliseconds(new Date(timestamp + time));
            offset = getTimezoneOffsetInMilliseconds(new Date(timestamp + time + offset));
        }
        return new Date(timestamp + time + offset);
    }
    else {
        return new Date(NaN);
    }
}
function splitDateString(dateString) {
    const dateStrings = {};
    let parts = patterns.dateTimePattern.exec(dateString);
    let timeString;
    if (!parts) {
        parts = patterns.datePattern.exec(dateString);
        if (parts) {
            dateStrings.date = parts[1];
            timeString = parts[2];
        }
        else {
            dateStrings.date = null;
            timeString = dateString;
        }
    }
    else {
        dateStrings.date = parts[1];
        timeString = parts[3];
    }
    if (timeString) {
        const token = patterns.timeZone.exec(timeString);
        if (token) {
            dateStrings.time = timeString.replace(token[1], '');
            dateStrings.timeZone = token[1].trim();
        }
        else {
            dateStrings.time = timeString;
        }
    }
    return dateStrings;
}
function parseYear(dateString, additionalDigits) {
    if (dateString) {
        const patternYYY = patterns.YYY[additionalDigits];
        const patternYYYYY = patterns.YYYYY[additionalDigits];
        // YYYY or ±YYYYY
        let token = patterns.YYYY.exec(dateString) || patternYYYYY.exec(dateString);
        if (token) {
            const yearString = token[1];
            return {
                year: parseInt(yearString, 10),
                restDateString: dateString.slice(yearString.length),
            };
        }
        // YY or ±YYY
        token = patterns.YY.exec(dateString) || patternYYY.exec(dateString);
        if (token) {
            const centuryString = token[1];
            return {
                year: parseInt(centuryString, 10) * 100,
                restDateString: dateString.slice(centuryString.length),
            };
        }
    }
    // Invalid ISO-formatted year
    return {
        year: null,
    };
}
function parseDate(dateString, year) {
    // Invalid ISO-formatted year
    if (year === null) {
        return null;
    }
    let date;
    let month;
    let week;
    // YYYY
    if (!dateString || !dateString.length) {
        date = new Date(0);
        date.setUTCFullYear(year);
        return date;
    }
    // YYYY-MM
    let token = patterns.MM.exec(dateString);
    if (token) {
        date = new Date(0);
        month = parseInt(token[1], 10) - 1;
        if (!validateDate(year, month)) {
            return new Date(NaN);
        }
        date.setUTCFullYear(year, month);
        return date;
    }
    // YYYY-DDD or YYYYDDD
    token = patterns.DDD.exec(dateString);
    if (token) {
        date = new Date(0);
        const dayOfYear = parseInt(token[1], 10);
        if (!validateDayOfYearDate(year, dayOfYear)) {
            return new Date(NaN);
        }
        date.setUTCFullYear(year, 0, dayOfYear);
        return date;
    }
    // yyyy-MM-dd or YYYYMMDD
    token = patterns.MMDD.exec(dateString);
    if (token) {
        date = new Date(0);
        month = parseInt(token[1], 10) - 1;
        const day = parseInt(token[2], 10);
        if (!validateDate(year, month, day)) {
            return new Date(NaN);
        }
        date.setUTCFullYear(year, month, day);
        return date;
    }
    // YYYY-Www or YYYYWww
    token = patterns.Www.exec(dateString);
    if (token) {
        week = parseInt(token[1], 10) - 1;
        if (!validateWeekDate(week)) {
            return new Date(NaN);
        }
        return dayOfISOWeekYear(year, week);
    }
    // YYYY-Www-D or YYYYWwwD
    token = patterns.WwwD.exec(dateString);
    if (token) {
        week = parseInt(token[1], 10) - 1;
        const dayOfWeek = parseInt(token[2], 10) - 1;
        if (!validateWeekDate(week, dayOfWeek)) {
            return new Date(NaN);
        }
        return dayOfISOWeekYear(year, week, dayOfWeek);
    }
    // Invalid ISO-formatted date
    return null;
}
function parseTime(timeString) {
    let hours;
    let minutes;
    // hh
    let token = patterns.HH.exec(timeString);
    if (token) {
        hours = parseFloat(token[1].replace(',', '.'));
        if (!validateTime(hours)) {
            return NaN;
        }
        return (hours % 24) * MILLISECONDS_IN_HOUR;
    }
    // hh:mm or hhmm
    token = patterns.HHMM.exec(timeString);
    if (token) {
        hours = parseInt(token[1], 10);
        minutes = parseFloat(token[2].replace(',', '.'));
        if (!validateTime(hours, minutes)) {
            return NaN;
        }
        return (hours % 24) * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE;
    }
    // hh:mm:ss or hhmmss
    token = patterns.HHMMSS.exec(timeString);
    if (token) {
        hours = parseInt(token[1], 10);
        minutes = parseInt(token[2], 10);
        const seconds = parseFloat(token[3].replace(',', '.'));
        if (!validateTime(hours, minutes, seconds)) {
            return NaN;
        }
        return (hours % 24) * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1000;
    }
    // Invalid ISO-formatted time
    return null;
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
    week = week || 0;
    day = day || 0;
    const date = new Date(0);
    date.setUTCFullYear(isoWeekYear, 0, 4);
    const fourthOfJanuaryDay = date.getUTCDay() || 7;
    const diff = week * 7 + day + 1 - fourthOfJanuaryDay;
    date.setUTCDate(date.getUTCDate() + diff);
    return date;
}
// Validation functions
const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}
function validateDate(year, month, date) {
    if (month < 0 || month > 11) {
        return false;
    }
    if (date != null) {
        if (date < 1) {
            return false;
        }
        const isLeapYear = isLeapYearIndex(year);
        if (isLeapYear && date > DAYS_IN_MONTH_LEAP_YEAR[month]) {
            return false;
        }
        if (!isLeapYear && date > DAYS_IN_MONTH[month]) {
            return false;
        }
    }
    return true;
}
function validateDayOfYearDate(year, dayOfYear) {
    if (dayOfYear < 1) {
        return false;
    }
    const isLeapYear = isLeapYearIndex(year);
    if (isLeapYear && dayOfYear > 366) {
        return false;
    }
    if (!isLeapYear && dayOfYear > 365) {
        return false;
    }
    return true;
}
function validateWeekDate(week, day) {
    if (week < 0 || week > 52) {
        return false;
    }
    if (day != null && (day < 0 || day > 6)) {
        return false;
    }
    return true;
}
function validateTime(hours, minutes, seconds) {
    if (hours < 0 || hours >= 25) {
        return false;
    }
    if (minutes != null && (minutes < 0 || minutes >= 60)) {
        return false;
    }
    if (seconds != null && (seconds < 0 || seconds >= 60)) {
        return false;
    }
    return true;
}

/**
 * @name toZonedTime
 * @category Time Zone Helpers
 * @summary Get a date/time representing local time in a given time zone from the UTC date
 *
 * @description
 * Returns a date instance with values representing the local time in the time zone
 * specified of the UTC time from the date provided. In other words, when the new date
 * is formatted it will show the equivalent hours in the target time zone regardless
 * of the current system time zone.
 *
 * @param date the date with the relevant UTC time
 * @param timeZone the time zone to get local time for, can be an offset or IANA time zone
 * @param options the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 *
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // In June 10am UTC is 6am in New York (-04:00)
 * const result = toZonedTime('2014-06-25T10:00:00.000Z', 'America/New_York')
 * //=> Jun 25 2014 06:00:00
 */
function toZonedTime(date, timeZone, options) {
    date = toDate(date, options);
    const offsetMilliseconds = tzParseTimezone(timeZone, date, true);
    const d = new Date(date.getTime() - offsetMilliseconds);
    const resultDate = new Date(0);
    resultDate.setFullYear(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
    resultDate.setHours(d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds());
    return resultDate;
}

/**
 * @name fromZonedTime
 * @category Time Zone Helpers
 * @summary Get the UTC date/time from a date representing local time in a given time zone
 *
 * @description
 * Returns a date instance with the UTC time of the provided date of which the values
 * represented the local time in the time zone specified. In other words, if the input
 * date represented local time in time zone, the timestamp of the output date will
 * give the equivalent UTC of that local time regardless of the current system time zone.
 *
 * @param date the date with values representing the local time
 * @param timeZone the time zone of this local time, can be an offset or IANA time zone
 * @param options the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // In June 10am in Los Angeles is 5pm UTC
 * const result = fromZonedTime(new Date(2014, 5, 25, 10, 0, 0), 'America/Los_Angeles')
 * //=> 2014-06-25T17:00:00.000Z
 */
function fromZonedTime(date, timeZone, options) {
    if (typeof date === 'string' && !date.match(tzPattern)) {
        return toDate(date, { ...options, timeZone });
    }
    date = toDate(date, options);
    const utc = newDateUTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()).getTime();
    const offsetMilliseconds = tzParseTimezone(timeZone, new Date(utc));
    return new Date(utc + offsetMilliseconds);
}

var NumberFormat;
(function (NumberFormat) {
    NumberFormat["language"] = "language";
    NumberFormat["system"] = "system";
    NumberFormat["comma_decimal"] = "comma_decimal";
    NumberFormat["decimal_comma"] = "decimal_comma";
    NumberFormat["space_comma"] = "space_comma";
    NumberFormat["none"] = "none";
})(NumberFormat || (NumberFormat = {}));
var TimeFormat;
(function (TimeFormat) {
    TimeFormat["language"] = "language";
    TimeFormat["system"] = "system";
    TimeFormat["am_pm"] = "12";
    TimeFormat["twenty_four"] = "24";
})(TimeFormat || (TimeFormat = {}));
var TimeZone;
(function (TimeZone) {
    TimeZone["local"] = "local";
    TimeZone["server"] = "server";
})(TimeZone || (TimeZone = {}));
var DateFormat;
(function (DateFormat) {
    DateFormat["language"] = "language";
    DateFormat["system"] = "system";
    DateFormat["DMY"] = "DMY";
    DateFormat["MDY"] = "MDY";
    DateFormat["YMD"] = "YMD";
})(DateFormat || (DateFormat = {}));
var FirstWeekday;
(function (FirstWeekday) {
    FirstWeekday["language"] = "language";
    FirstWeekday["monday"] = "monday";
    FirstWeekday["tuesday"] = "tuesday";
    FirstWeekday["wednesday"] = "wednesday";
    FirstWeekday["thursday"] = "thursday";
    FirstWeekday["friday"] = "friday";
    FirstWeekday["saturday"] = "saturday";
    FirstWeekday["sunday"] = "sunday";
})(FirstWeekday || (FirstWeekday = {}));

const calcZonedDate = (date, tz, fn, options) => {
    const inputZoned = toZonedTime(date, tz);
    const fnZoned = fn(inputZoned, options);
    if (fnZoned instanceof Date) {
        return fromZonedTime(fnZoned, tz);
    }
    return fnZoned;
};
const calcDate = (date, fn, locale, config, options) => locale.time_zone === TimeZone.server
    ? calcZonedDate(date, config.time_zone, fn, options)
    : fn(date, options);
const calcDateProperty = (date, fn, locale, config, options) => locale.time_zone === TimeZone.server
    ? calcZonedDate(date, config.time_zone, fn, options)
    : fn(date, options);
const calcDateDifferenceProperty = (endDate, startDate, fn, locale, config) => calcDateProperty(endDate, fn, locale, config, locale.time_zone === TimeZone.server
    ? toZonedTime(startDate, config.time_zone)
    : startDate);

var safeIsNaN = Number.isNaN ||
    function ponyfill(value) {
        return typeof value === 'number' && value !== value;
    };
function isEqual(first, second) {
    if (first === second) {
        return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
    }
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (!isEqual(newInputs[i], lastInputs[i])) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var cache = null;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (cache && cache.lastThis === this && isEqual(newArgs, cache.lastArgs)) {
            return cache.lastResult;
        }
        var lastResult = resultFn.apply(this, newArgs);
        cache = {
            lastResult: lastResult,
            lastArgs: newArgs,
            lastThis: this,
        };
        return lastResult;
    }
    memoized.clear = function clear() {
        cache = null;
    };
    return memoized;
}

const useAmPm = memoizeOne((locale) => {
    if (locale.time_format === TimeFormat.language ||
        locale.time_format === TimeFormat.system) {
        const testLanguage = locale.time_format === TimeFormat.language ? locale.language : undefined;
        const test = new Date("January 1, 2023 22:00:00").toLocaleString(testLanguage);
        return test.includes("10");
    }
    return locale.time_format === TimeFormat.am_pm;
});

memoizeOne((locale, serverTimeZone) => new Intl.DateTimeFormat(locale.language === "en" && !useAmPm(locale)
    ? "en-u-hc-h23"
    : locale.language, {
    hour: "numeric",
    minute: "2-digit",
    hour12: useAmPm(locale),
    timeZone: locale.time_zone === "server" ? serverTimeZone : undefined,
}));
memoizeOne((locale, serverTimeZone) => new Intl.DateTimeFormat(locale.language === "en" && !useAmPm(locale)
    ? "en-u-hc-h23"
    : locale.language, {
    hour: useAmPm(locale) ? "numeric" : "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: useAmPm(locale),
    timeZone: locale.time_zone === "server" ? serverTimeZone : undefined,
}));
memoizeOne((locale, serverTimeZone) => new Intl.DateTimeFormat(locale.language === "en" && !useAmPm(locale)
    ? "en-u-hc-h23"
    : locale.language, {
    weekday: "long",
    hour: useAmPm(locale) ? "numeric" : "2-digit",
    minute: "2-digit",
    hour12: useAmPm(locale),
    timeZone: locale.time_zone === "server" ? serverTimeZone : undefined,
}));
// 21:15
const formatTime24h = (dateObj, locale, config) => formatTime24hMem(locale, config.time_zone).format(dateObj);
const formatTime24hMem = memoizeOne((locale, serverTimeZone) => 
// en-GB to fix Chrome 24:59 to 0:59 https://stackoverflow.com/a/60898146
new Intl.DateTimeFormat("en-GB", {
    hour: "numeric",
    minute: "2-digit",
    hour12: false,
    timeZone: locale.time_zone === "server" ? serverTimeZone : undefined,
}));

const groupBy = (list, keySelector) => {
    const result = {};
    for (const item of list) {
        const key = keySelector(item);
        if (key in result) {
            result[key].push(item);
        }
        else {
            result[key] = [item];
        }
    }
    return result;
};

/*
export type ConfigEntryMutableParams = Partial<
  Pick<
    ConfigEntry,
    "title" | "pref_disable_new_entities" | "pref_disable_polling"
  >
>;

// https://github.com/home-assistant/core/blob/2286dea636fda001f03433ba14d7adbda43979e5/homeassistant/config_entries.py#L81
export const ERROR_STATES: ConfigEntry["state"][] = [
  "migration_error",
  "setup_error",
  "setup_retry",
];

// https://github.com/home-assistant/core/blob/2286dea636fda001f03433ba14d7adbda43979e5/homeassistant/config_entries.py#L81
export const RECOVERABLE_STATES: ConfigEntry["state"][] = [
  "not_loaded",
  "loaded",
  "setup_error",
  "setup_retry",
];

export interface ConfigEntryUpdate {
  // null means no update as is the current state
  type: null | "added" | "removed" | "updated";
  entry: ConfigEntry;
}

export const subscribeConfigEntries = (
  hass: HomeAssistant,
  callbackFunction: (message: ConfigEntryUpdate[]) => void,
  filters?: {
    type?: IntegrationType[];
    domain?: string;
  }
): Promise<UnsubscribeFunc> => {
  const params: any = {
    type: "config_entries/subscribe",
  };
  if (filters && filters.type) {
    params.type_filter = filters.type;
  }
  return hass.connection.subscribeMessage<ConfigEntryUpdate[]>(
    (message) => callbackFunction(message),
    params
  );
};
*/
const getConfigEntries = (hass, filters) => {
    const params = {};
    if (filters) {
        if (filters.type) {
            params.type_filter = filters.type;
        }
        if (filters.domain) {
            params.domain = filters.domain;
        }
    }
    return hass.callWS(Object.assign({ type: "config_entries/get" }, params));
};
/*
export const getConfigEntry = (hass: HomeAssistant, configEntryId: string) =>
  hass.callWS<{ config_entry: ConfigEntry }>({
    type: "config_entries/get_single",
    entry_id: configEntryId,
  });

export const updateConfigEntry = (
  hass: HomeAssistant,
  configEntryId: string,
  updatedValues: ConfigEntryMutableParams
) =>
  hass.callWS<{ require_restart: boolean; config_entry: ConfigEntry }>({
    type: "config_entries/update",
    entry_id: configEntryId,
    ...updatedValues,
  });

export const deleteConfigEntry = (hass: HomeAssistant, configEntryId: string) =>
  hass.callApi<{
    require_restart: boolean;
  }>("DELETE", `config/config_entries/entry/${configEntryId}`);

export const reloadConfigEntry = (hass: HomeAssistant, configEntryId: string) =>
  hass.callApi<{
    require_restart: boolean;
  }>("POST", `config/config_entries/entry/${configEntryId}/reload`);

export interface DisableConfigEntryResult {
  require_restart: boolean;
}

export const disableConfigEntry = (
  hass: HomeAssistant,
  configEntryId: string
) =>
  hass.callWS<DisableConfigEntryResult>({
    type: "config_entries/disable",
    entry_id: configEntryId,
    disabled_by: "user",
  });

export const enableConfigEntry = (hass: HomeAssistant, configEntryId: string) =>
  hass.callWS<{
    require_restart: boolean;
  }>({
    type: "config_entries/disable",
    entry_id: configEntryId,
    disabled_by: null,
  });

export const sortConfigEntries = (
  configEntries: ConfigEntry[],
  manifestLookup: { [domain: string]: IntegrationManifest }
): ConfigEntry[] => {
  const sortedConfigEntries = [...configEntries];

  const getScore = (entry: ConfigEntry) => {
    const manifest = manifestLookup[entry.domain] as
      | IntegrationManifest
      | undefined;
    const isHelper = manifest?.integration_type === "helper";
    return isHelper ? -1 : 1;
  };

  const configEntriesCompare = (a: ConfigEntry, b: ConfigEntry) =>
    getScore(b) - getScore(a);

  return sortedConfigEntries.sort(configEntriesCompare);
};
*/

/** Compute the object ID of a state. */
const computeObjectId = (entityId) => entityId.substr(entityId.indexOf(".") + 1);

const computeStateNameFromEntityAttributes = (entityId, attributes) => {
    var _a;
    return attributes.friendly_name === undefined
        ? computeObjectId(entityId).replace(/_/g, " ")
        : ((_a = attributes.friendly_name) !== null && _a !== void 0 ? _a : "").toString();
};
const computeStateName = (stateObj) => computeStateNameFromEntityAttributes(stateObj.entity_id, stateObj.attributes);

const getStatisticMetadata = (hass, statistic_ids) => hass.callWS({
    type: "recorder/get_statistics_metadata",
    statistic_ids,
});
const fetchStatistics = (hass, startTime, endTime, statistic_ids, period = "hour", units, types) => hass.callWS({
    type: "recorder/statistics_during_period",
    start_time: startTime.toISOString(),
    end_time: endTime === null || endTime === void 0 ? void 0 : endTime.toISOString(),
    statistic_ids,
    period,
    units,
    types,
});
const calculateStatisticSumGrowth = (values) => {
    let growth = null;
    if (!values) {
        return null;
    }
    for (const value of values) {
        if (value.change === null || value.change === undefined) {
            continue;
        }
        if (growth === null) {
            growth = value.change;
        }
        else {
            growth += value.change;
        }
    }
    return growth;
};
const calculateStatisticsSumGrowth = (data, stats) => {
    let totalGrowth = null;
    for (const stat of stats) {
        if (!(stat in data)) {
            continue;
        }
        const statGrowth = calculateStatisticSumGrowth(data[stat]);
        if (statGrowth === null) {
            continue;
        }
        if (totalGrowth === null) {
            totalGrowth = statGrowth;
        }
        else {
            totalGrowth += statGrowth;
        }
    }
    return totalGrowth;
};
const getStatisticLabel = (hass, statisticsId, statisticsMetaData) => {
    const entity = hass.states[statisticsId];
    if (entity) {
        return computeStateName(entity);
    }
    return statisticsId;
};

const energyCollectionKeys = [];
// export interface EnergyValidationIssue {
//   type: string;
//   affected_entities: [string, unknown][];
//   translation_placeholders: Record<string, string>;
// }
// export interface EnergyPreferencesValidation {
//   energy_sources: EnergyValidationIssue[][];
//   device_consumption: EnergyValidationIssue[][];
// }
const getEnergyInfo = (hass) => hass.callWS({
    type: "energy/info",
});
// // export const getEnergyPreferenceValidation = async (hass: HomeAssistant) => {
// //   await hass.loadBackendTranslation("issues", "energy");
// //   return hass.callWS<EnergyPreferencesValidation>({
// //     type: "energy/validate",
// //   });
// // };
const getEnergyPreferences = (hass) => hass.callWS({
    type: "energy/get_prefs",
});
const getFossilEnergyConsumption = async (hass, startTime, energy_statistic_ids, co2_statistic_id, endTime, period = "hour") => hass.callWS({
    type: "energy/fossil_energy_consumption",
    start_time: startTime.toISOString(),
    end_time: endTime === null || endTime === void 0 ? void 0 : endTime.toISOString(),
    energy_statistic_ids,
    co2_statistic_id,
    period,
});
const energySourcesByType = (prefs) => groupBy(prefs.energy_sources, (item) => item.type);
const getReferencedStatisticIds = (prefs, info, includeTypes) => {
    const statIDs = [];
    for (const source of prefs.energy_sources) {
        if (includeTypes && !includeTypes.includes(source.type)) {
            continue;
        }
        if (source.type === "solar") {
            statIDs.push(source.stat_energy_from);
            continue;
        }
        if (source.type === "gas" || source.type === "water") {
            statIDs.push(source.stat_energy_from);
            if (source.stat_cost) {
                statIDs.push(source.stat_cost);
            }
            const costStatId = info.cost_sensors[source.stat_energy_from];
            if (costStatId) {
                statIDs.push(costStatId);
            }
            continue;
        }
        if (source.type === "battery") {
            statIDs.push(source.stat_energy_from);
            statIDs.push(source.stat_energy_to);
            continue;
        }
        // grid source
        for (const flowFrom of source.flow_from) {
            statIDs.push(flowFrom.stat_energy_from);
            if (flowFrom.stat_cost) {
                statIDs.push(flowFrom.stat_cost);
            }
            const costStatId = info.cost_sensors[flowFrom.stat_energy_from];
            if (costStatId) {
                statIDs.push(costStatId);
            }
        }
        for (const flowTo of source.flow_to) {
            statIDs.push(flowTo.stat_energy_to);
            if (flowTo.stat_compensation) {
                statIDs.push(flowTo.stat_compensation);
            }
            const costStatId = info.cost_sensors[flowTo.stat_energy_to];
            if (costStatId) {
                statIDs.push(costStatId);
            }
        }
    }
    if (!(includeTypes && !includeTypes.includes("device"))) {
        statIDs.push(...prefs.device_consumption.map((d) => d.stat_consumption));
    }
    return statIDs;
};
const getEnergyData = async (hass, prefs, start, end, compare) => {
    const [configEntries, info] = await Promise.all([
        getConfigEntries(hass, { domain: "co2signal" }),
        getEnergyInfo(hass),
    ]);
    const co2SignalConfigEntry = configEntries.length
        ? configEntries[0]
        : undefined;
    let co2SignalEntity;
    if (co2SignalConfigEntry) {
        for (const entity of Object.values(hass.entities)) {
            if (entity.platform !== "co2signal") {
                continue;
            }
            // The integration offers 2 entities. We want the % one.
            const co2State = hass.states[entity.entity_id];
            if (!co2State || co2State.attributes.unit_of_measurement !== "%") {
                continue;
            }
            co2SignalEntity = co2State.entity_id;
            break;
        }
    }
    const consumptionStatIDs = [];
    for (const source of prefs.energy_sources) {
        // grid source
        if (source.type === "grid") {
            for (const flowFrom of source.flow_from) {
                consumptionStatIDs.push(flowFrom.stat_energy_from);
            }
        }
    }
    const energyStatIds = getReferencedStatisticIds(prefs, info, [
        "grid",
        "solar",
        "battery",
        "gas",
        "device",
    ]);
    const waterStatIds = getReferencedStatisticIds(prefs, info, ["water"]);
    const allStatIDs = [...energyStatIds, ...waterStatIds];
    const dayDifference = differenceInDays(end || new Date(), start);
    const period = dayDifference > 35 ? "month" : dayDifference > 2 ? "day" : "hour";
    const lengthUnit = hass.config.unit_system.length || "";
    const energyUnits = {
        energy: "kWh",
        volume: lengthUnit === "km" ? "m³" : "ft³",
    };
    const waterUnits = {
        volume: lengthUnit === "km" ? "L" : "gal",
    };
    const _energyStats = energyStatIds.length
        ? fetchStatistics(hass, start, end, energyStatIds, period, energyUnits, [
            "change",
        ])
        : {};
    const _waterStats = waterStatIds.length
        ? fetchStatistics(hass, start, end, waterStatIds, period, waterUnits, [
            "change",
        ])
        : {};
    let statsCompare;
    let startCompare;
    let endCompare;
    let _energyStatsCompare = {};
    let _waterStatsCompare = {};
    if (compare) {
        if (calcDateProperty(start, isFirstDayOfMonth, hass.locale, hass.config) &&
            calcDateProperty(end || new Date(), isLastDayOfMonth, hass.locale, hass.config)) {
            // When comparing a month (or multiple), we want to start at the begining of the month
            startCompare = calcDate(start, addMonths, hass.locale, hass.config, -calcDateDifferenceProperty(end || new Date(), start, differenceInMonths, hass.locale, hass.config) - 1);
        }
        else {
            startCompare = calcDate(start, addDays, hass.locale, hass.config, (dayDifference + 1) * -1);
        }
        endCompare = addMilliseconds(start, -1);
        if (energyStatIds.length) {
            _energyStatsCompare = fetchStatistics(hass, startCompare, endCompare, energyStatIds, period, energyUnits, ["change"]);
        }
        if (waterStatIds.length) {
            _waterStatsCompare = fetchStatistics(hass, startCompare, endCompare, waterStatIds, period, waterUnits, ["change"]);
        }
    }
    let _fossilEnergyConsumption;
    let _fossilEnergyConsumptionCompare;
    if (co2SignalEntity !== undefined) {
        _fossilEnergyConsumption = getFossilEnergyConsumption(hass, start, consumptionStatIDs, co2SignalEntity, end, dayDifference > 35 ? "month" : dayDifference > 2 ? "day" : "hour");
        if (compare) {
            _fossilEnergyConsumptionCompare = getFossilEnergyConsumption(hass, startCompare, consumptionStatIDs, co2SignalEntity, endCompare, dayDifference > 35 ? "month" : dayDifference > 2 ? "day" : "hour");
        }
    }
    const statsMetadata = {};
    const _getStatisticMetadata = allStatIDs.length
        ? getStatisticMetadata(hass, allStatIDs)
        : [];
    const [energyStats, waterStats, energyStatsCompare, waterStatsCompare, statsMetadataArray, fossilEnergyConsumption, fossilEnergyConsumptionCompare,] = await Promise.all([
        _energyStats,
        _waterStats,
        _energyStatsCompare,
        _waterStatsCompare,
        _getStatisticMetadata,
        _fossilEnergyConsumption,
        _fossilEnergyConsumptionCompare,
    ]);
    const stats = Object.assign(Object.assign({}, energyStats), waterStats);
    if (compare) {
        statsCompare = Object.assign(Object.assign({}, energyStatsCompare), waterStatsCompare);
    }
    if (allStatIDs.length) {
        statsMetadataArray.forEach((x) => {
            statsMetadata[x.statistic_id] = x;
        });
    }
    const data = {
        start,
        end,
        startCompare,
        endCompare,
        info,
        prefs,
        stats,
        statsMetadata,
        statsCompare,
        co2SignalConfigEntry,
        co2SignalEntity,
        fossilEnergyConsumption,
        fossilEnergyConsumptionCompare,
    };
    return data;
};
// const clearEnergyCollectionPreferences = (hass: HomeAssistant) => {
//   energyCollectionKeys.forEach((key) => {
//     const energyCollection = getEnergyDataCollection(hass, { key });
//     energyCollection.clearPrefs();
//     if (energyCollection._active) {
//       energyCollection.refresh();
//     }
//   });
// };
const scheduleHourlyRefresh = (collection) => {
    if (collection._refreshTimeout) {
        clearTimeout(collection._refreshTimeout);
    }
    if (collection._active && (!collection.end || collection.end > new Date())) {
        // The stats are created every hour
        // Schedule a refresh for 20 minutes past the hour
        // If the end is larger than the current time.
        const nextFetch = new Date();
        if (nextFetch.getMinutes() >= 20) {
            nextFetch.setHours(nextFetch.getHours() + 1);
        }
        nextFetch.setMinutes(20, 0, 0);
        collection._refreshTimeout = window.setTimeout(() => collection.refresh(), nextFetch.getTime() - Date.now());
    }
};
const getEnergyDataCollection = (hass, options = {}) => {
    let key = "_energy";
    if (options.key) {
        if (!options.key.startsWith("energy_")) {
            throw new Error("Key need to start with energy_");
        }
        key = `_${options.key}`;
    }
    if (hass.connection[key]) {
        return hass.connection[key];
    }
    energyCollectionKeys.push(options.key);
    const collection = getCollection(hass.connection, key, async () => {
        if (!collection.prefs) {
            // This will raise if not found.
            // Detect by checking `e.code === "not_found"
            collection.prefs = await getEnergyPreferences(hass);
        }
        scheduleHourlyRefresh(collection);
        return getEnergyData(hass, collection.prefs, collection.start, collection.end, collection.compare);
    });
    const origSubscribe = collection.subscribe;
    collection.subscribe = (subscriber) => {
        const unsub = origSubscribe(subscriber);
        collection._active++;
        if (collection._refreshTimeout === undefined) {
            scheduleHourlyRefresh(collection);
        }
        return () => {
            collection._active--;
            if (collection._active < 1) {
                clearTimeout(collection._refreshTimeout);
                collection._refreshTimeout = undefined;
            }
            unsub();
        };
    };
    collection._active = 0;
    collection.prefs = options.prefs;
    const now = new Date();
    const hour = formatTime24h(now, hass.locale, hass.config).split(":")[0];
    // Set start to start of today if we have data for today, otherwise yesterday
    collection.start = calcDate(hour === "0" ? addDays(now, -1) : now, startOfDay, hass.locale, hass.config);
    collection.end = calcDate(hour === "0" ? addDays(now, -1) : now, endOfDay, hass.locale, hass.config);
    const scheduleUpdatePeriod = () => {
        collection._updatePeriodTimeout = window.setTimeout(() => {
            collection.start = calcDate(new Date(), startOfDay, hass.locale, hass.config);
            collection.end = calcDate(new Date(), endOfDay, hass.locale, hass.config);
            scheduleUpdatePeriod();
        }, addHours(calcDate(now, endOfDay, hass.locale, hass.config), 1).getTime() -
            Date.now() // Switch to next day an hour after the day changed
        );
    };
    scheduleUpdatePeriod();
    collection.clearPrefs = () => {
        collection.prefs = undefined;
    };
    collection.setPeriod = (newStart, newEnd) => {
        var _a;
        collection.start = newStart;
        collection.end = newEnd;
        if (collection.start.getTime() ===
            calcDate(new Date(), startOfDay, hass.locale, hass.config).getTime() &&
            ((_a = collection.end) === null || _a === void 0 ? void 0 : _a.getTime()) ===
                calcDate(new Date(), endOfDay, hass.locale, hass.config).getTime() &&
            !collection._updatePeriodTimeout) {
            scheduleUpdatePeriod();
        }
        else if (collection._updatePeriodTimeout) {
            clearTimeout(collection._updatePeriodTimeout);
            collection._updatePeriodTimeout = undefined;
        }
    };
    collection.setCompare = (compare) => {
        collection.compare = compare;
    };
    return collection;
};
// export const getEnergySolarForecasts = (hass: HomeAssistant) =>
//   hass.callWS<EnergySolarForecasts>({
//     type: "energy/solar_forecast",
//   });
// const energyGasUnitClass = ["volume", "energy"] as const;
// export type EnergyGasUnitClass = (typeof energyGasUnitClass)[number];
// export const getEnergyGasUnitClass = (
//   prefs: EnergyPreferences,
//   statisticsMetaData: Record<string, StatisticsMetaData> = {},
//   excludeSource?: string
// ): EnergyGasUnitClass | undefined => {
//   for (const source of prefs.energy_sources) {
//     if (source.type !== "gas") {
//       continue;
//     }
//     if (excludeSource && excludeSource === source.stat_energy_from) {
//       continue;
//     }
//     const statisticIdWithMeta = statisticsMetaData[source.stat_energy_from];
//     if (
//       energyGasUnitClass.includes(
//         statisticIdWithMeta?.unit_class as EnergyGasUnitClass
//       )
//     ) {
//       return statisticIdWithMeta.unit_class as EnergyGasUnitClass;
//     }
//   }
//   return undefined;
// };
// export const getEnergyGasUnit = (
//   hass: HomeAssistant,
//   prefs: EnergyPreferences,
//   statisticsMetaData: Record<string, StatisticsMetaData> = {}
// ): string | undefined => {
//   const unitClass = getEnergyGasUnitClass(prefs, statisticsMetaData);
//   if (unitClass === undefined) {
//     return undefined;
//   }
//   return unitClass === "energy"
//     ? "kWh"
//     : hass.config.unit_system.length === "km"
//       ? "m³"
//       : "ft³";
// };
// export const getEnergyWaterUnit = (hass: HomeAssistant): string =>
//   hass.config.unit_system.length === "km" ? "L" : "gal";
// export const energyStatisticHelpUrl =
//   "/docs/energy/faq/#troubleshooting-missing-entities";

function registerCustomCard(params) {
    const windowWithCards = window;
    windowWithCards.customCards = windowWithCards.customCards || [];
    windowWithCards.customCards.push(Object.assign(Object.assign({}, params), { preview: true, documentationURL: `${repository.url}/blob/main/README.md` }));
}

const PREFIX_NAME = "energy-sankey";
const GENERIC_LABELS = [
    "appearance",
    "advanced_options",
    "title",
    "max_consumer_branches",
];

const ENERGY_CARD_NAME = `${PREFIX_NAME}-energy-elec-flow-card`;
const ENERGY_CARD_EDITOR_NAME = `${ENERGY_CARD_NAME}-editor`;
const HIDE_CONSUMERS_BELOW_THRESHOLD_KWH = 0.1;

const SubscribeMixin = (superClass) => {
    class SubscribeClass extends superClass {
        connectedCallback() {
            super.connectedCallback();
            this.__checkSubscribed();
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            if (this.__unsubs) {
                while (this.__unsubs.length) {
                    const unsub = this.__unsubs.pop();
                    if (unsub instanceof Promise) {
                        unsub.then((unsubFunc) => unsubFunc());
                    }
                    else {
                        unsub();
                    }
                }
                this.__unsubs = undefined;
            }
        }
        updated(changedProps) {
            super.updated(changedProps);
            if (changedProps.has("hass")) {
                this.__checkSubscribed();
                return;
            }
            if (!this.hassSubscribeRequiredHostProps) {
                return;
            }
            for (const key of changedProps.keys()) {
                if (this.hassSubscribeRequiredHostProps.includes(key)) {
                    this.__checkSubscribed();
                    return;
                }
            }
        }
        hassSubscribe() {
            return [];
        }
        __checkSubscribed() {
            var _a;
            if (this.__unsubs !== undefined ||
                !this.isConnected ||
                this.hass === undefined ||
                ((_a = this.hassSubscribeRequiredHostProps) === null || _a === void 0 ? void 0 : _a.some((prop) => this[prop] === undefined))) {
                return;
            }
            this.__unsubs = this.hassSubscribe();
        }
    }
    __decorate([
        n$1({ attribute: false })
    ], SubscribeClass.prototype, "hass", void 0);
    return SubscribeClass;
};

var card$8 = {
	generic: {
		other: "Ostatní",
		home: "Domov",
		untracked: "Nerozlišeno"
	},
	power_sankey: {
		live_power_flow: "Aktuální tok energie"
	},
	energy_sankey: {
		energy_distribution_today: "Dnešní distribuce"
	}
};
var editor$8 = {
	card: {
		generic: {
			title: "Nadpis",
			max_consumer_branches: "Maximální počet zařízení (0 pro neomezeno)",
			appearance: "Zobrazení",
			advanced_options: "Další nastavení"
		},
		power_sankey: {
			power_from_grid_entity: "Import ze sítě (nepovinné)",
			power_to_grid_entity: "Export do sítě (nepovinné)",
			generation_entity: "Výroba (nepovinné)",
			hide_small_consumers: "Nerozlišovat spotřebu pod 20W",
			invert_battery_flows: "Nabíjení baterie je kladné číslo",
			battery_charge_only_from_generation: "Baterie se nabíjejí pouze z vyrobené energie",
			battery_hint_std: "Energie z baterií (kombinované nabíjení/vybíjení, kladná hodnota = vybíjení)",
			battery_hint_inverted: "Energie do baterií (kombinované nabíjení/vybíjení, kladná hodnota = nabíjení)",
			independent_grid_in_out: "Samostatné senzory pro import/export do sítě"
		},
		energy_sankey: {
			hide_small_consumers: "Nerozlišovat spotřebu pod 0.1kWh",
			battery_charge_only_from_generation: "Baterie se nabíjejí pouze z vyrobené energie"
		}
	}
};
var cs = {
	card: card$8,
	editor: editor$8
};

var cs$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  card: card$8,
  default: cs,
  editor: editor$8
});

var card$7 = {
	generic: {
		other: "Øvrige",
		home: "Hjem",
		untracked: "Usporede"
	},
	power_sankey: {
		live_power_flow: "Aktiv energi"
	},
	energy_sankey: {
		energy_distribution_today: "Dagens energi distribution"
	}
};
var editor$7 = {
	card: {
		generic: {
			title: "Titel",
			max_consumer_branches: "Begrænset antal af forbrugssteder (0 for uubegrænset)",
			appearance: "Udseende",
			advanced_options: "Avancerede Optioner"
		},
		power_sankey: {
			power_from_grid_entity: "Energi fra nettet (optional)",
			power_to_grid_entity: "Energi til nettet (optional)",
			generation_entity: "Energi fra produktion (optional)",
			hide_small_consumers: "Gruppér under 20W",
			invert_battery_flows: "Batteri flow er positiv ved opladning",
			battery_charge_only_from_generation: "Batterier kan kun oplade fra produceret energi",
			battery_hint_std: "Energi fra batteri (En samlet for ind/ud per batteri, positiv = afladning)",
			battery_hint_inverted: "Energi til batteri (En samlet for ind/ud per batteri, positiv = opladning)",
			independent_grid_in_out: "Brug seperate sensorer til ind/ud på nettet"
		},
		energy_sankey: {
			hide_small_consumers: "Saml forbrug under 0.1kWh",
			battery_charge_only_from_generation: "Batterier kan kun oplades fra genereret energi"
		}
	}
};
var da = {
	card: card$7,
	editor: editor$7
};

var da$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  card: card$7,
  default: da,
  editor: editor$7
});

var card$6 = {
	generic: {
		other: "Andere",
		home: "Zuhause",
		untracked: "nicht überwacht"
	},
	power_sankey: {
		live_power_flow: "Aktueller Leistungsfluss"
	},
	energy_sankey: {
		energy_distribution_today: "Heutige Energieaufteilung"
	}
};
var editor$6 = {
	card: {
		generic: {
			title: "Titel",
			max_consumer_branches: "Beschränkung der Anzahl an Verbrauchern (0 für kein Limit)",
			appearance: "Erscheinungsbild",
			advanced_options: "Erweiterte Optionen"
		},
		power_sankey: {
			power_from_grid_entity: "Netzbezug (optional)",
			power_to_grid_entity: "Netzeinspeisung (optional)",
			generation_entity: "Solarleistung (optional)",
			hide_small_consumers: "Gruppiere Verbraucher unter 20W",
			invert_battery_flows: "Batteriefluss für Laden ist positiv",
			battery_charge_only_from_generation: "Batterien werden nur über Solar geladen",
			battery_hint_std: "Entladeleistung der Batterie (Ein- und Ausgang kombiniert, positiver Wert = Entladen)",
			battery_hint_inverted: "Ladeleistung der Batterie (Ein- und Ausgang kombiniert, positiver Wert = Laden)",
			independent_grid_in_out: "Benutze separate Sensoren für Netzbezug/-einspeisung"
		},
		energy_sankey: {
			hide_small_consumers: "Gruppiere Verbraucher unter 0.1kWh",
			battery_charge_only_from_generation: "Batterien werden nur über Solar geladen"
		}
	}
};
var de = {
	card: card$6,
	editor: editor$6
};

var de$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  card: card$6,
  default: de,
  editor: editor$6
});

var card$5 = {
	generic: {
		other: "Other",
		home: "Home",
		untracked: "Untracked"
	},
	power_sankey: {
		live_power_flow: "Live power flow"
	},
	energy_sankey: {
		energy_distribution_today: "Energy distribution today"
	}
};
var editor$5 = {
	card: {
		generic: {
			title: "Title",
			max_consumer_branches: "Limit quantity of consumer branches (0 for unlimited)",
			appearance: "Appearance",
			advanced_options: "Advanced Options"
		},
		power_sankey: {
			power_from_grid_entity: "Power from grid (optional)",
			power_to_grid_entity: "Power to grid (optional)",
			generation_entity: "Power from generation (optional)",
			hide_small_consumers: "Group consumers below 20W",
			invert_battery_flows: "Battery flows are positive for charging",
			battery_charge_only_from_generation: "Batteries can only charge from generated power",
			battery_hint_std: "Power from battery (one combined in/out per battery, positive = discharging)",
			battery_hint_inverted: "Power to battery (one combined in/out per battery, positive = charging)",
			independent_grid_in_out: "Use separate sensors for grid in/out"
		},
		energy_sankey: {
			hide_small_consumers: "Group consumers below 0.1kWh",
			battery_charge_only_from_generation: "Batteries can only charge from generated energy"
		}
	}
};
var en = {
	card: card$5,
	editor: editor$5
};

var en$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  card: card$5,
  default: en,
  editor: editor$5
});

var card$4 = {
	generic: {
		other: "Otros",
		untracked: "Sin seguimiento"
	},
	power_sankey: {
		live_power_flow: "Flujo de energía en tiempo real"
	},
	energy_sankey: {
		energy_distribution_today: "Distribución de energía hoy"
	}
};
var editor$4 = {
	card: {
		generic: {
			title: "Título",
			max_consumer_branches: "Limitar cantidad de ramas de consumidores (0 para ilimitado)",
			appearance: "Apariencia",
			advanced_options: "Opciones avanzadas"
		},
		power_sankey: {
			power_from_grid_entity: "Potencia de la red (opcional)",
			power_to_grid_entity: "Potencia a la red (opcional)",
			generation_entity: "Potencia de generación (opcional)",
			hide_small_consumers: "Agrupar consumidores menores de 20W",
			invert_battery_flows: "Los flujos de la batería son positivos al cargar",
			battery_charge_only_from_generation: "Las baterías solo pueden cargarse con energía generada",
			battery_hint_std: "Potencia desde la batería (una combinación de entrada/salida por batería, positivo = descarga)",
			battery_hint_inverted: "Potencia hacia la batería (una combinación de entrada/salida por batería, positivo = carga)",
			independent_grid_in_out: "Utilizar sensores separados para entrada/salida de la red"
		},
		energy_sankey: {
			hide_small_consumers: "Agrupar consumidores menores de 0.1 kWh",
			battery_charge_only_from_generation: "Las baterías solo pueden cargarse con energía generada"
		}
	}
};
var es = {
	card: card$4,
	editor: editor$4
};

var es$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  card: card$4,
  default: es,
  editor: editor$4
});

var card$3 = {
	generic: {
		other: "Autre",
		home: "Maison",
		untracked: "Non suivi"
	},
	power_sankey: {
		live_power_flow: "Flux d'énergie en direct"
	},
	energy_sankey: {
		energy_distribution_today: "Répartition de l'énergie aujourd'hui"
	}
};
var editor$3 = {
	card: {
		generic: {
			title: "Titre",
			max_consumer_branches: "Limiter le nombre de consommateur (0 pour illimité)",
			appearance: "Apparence",
			advanced_options: "Options avancée"
		},
		power_sankey: {
			power_from_grid_entity: "Puissance depuis le réseaux (optionnel)",
			power_to_grid_entity: "Puissance vers le réseaux (optionnel)",
			generation_entity: "Puissance depuis les générateur/solaire (optionnel)",
			hide_small_consumers: "Groupper les consommateurs de moins de 20W",
			invert_battery_flows: "Le flux de batterie sont positifs pour la charge",
			battery_charge_only_from_generation: "Les batteries ne peuvent se charger qu'à partir de l'énergie générée",
			battery_hint_std: "Puissance depuis les batteries (une entrée/sortie combinée par batterie, positive = décharge)",
			battery_hint_inverted: "Puissance vers les batteries (une entrée/sortie combinée par batterie, positif = charge)",
			independent_grid_in_out: "Utiliser des capteurs séparés pour l'entrée/sortie du réseau"
		},
		energy_sankey: {
			hide_small_consumers: "Regrouper les consommateurs de moins de 0,1 kWh",
			battery_charge_only_from_generation: "Les batteries ne peuvent se charger qu'à partir de l'énergie générée"
		}
	}
};
var fr = {
	card: card$3,
	editor: editor$3
};

var fr$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  card: card$3,
  default: fr,
  editor: editor$3
});

var card$2 = {
	generic: {
		other: "Altro",
		home: "Casa",
		untracked: "Non tracciati"
	},
	power_sankey: {
		live_power_flow: "Flusso di potenza istantaneo"
	},
	energy_sankey: {
		energy_distribution_today: "Distribuzione di energia oggi"
	}
};
var editor$2 = {
	card: {
		generic: {
			title: "Titolo",
			max_consumer_branches: "Limita quantità di rami personalizzati (0 per illimitato)",
			appearance: "Aspetto",
			advanced_options: "Opzioni avanzate"
		},
		power_sankey: {
			power_from_grid_entity: "Potenza dalla rete (opzionale)",
			power_to_grid_entity: "Potenza alla rete (opzionale)",
			generation_entity: "Potenza da generazione (opzionale)",
			hide_small_consumers: "Raggruppa personalizzati sotto i 20W",
			invert_battery_flows: "Flussi batteria sono positivi quando in carica",
			battery_charge_only_from_generation: "Batterie possono essere ricaricate solo da generazione",
			battery_hint_std: "Potenza da batterie (combinato in/out per batteria, positivo = in scarica)",
			battery_hint_inverted: "Potenza a batterie (combinato in/out per batteria, positivo = in scarica)",
			independent_grid_in_out: "Usa sensori separati per rete (in/out)"
		},
		energy_sankey: {
			hide_small_consumers: "Raggruppa personalizzati sotto 0.1kWh",
			battery_charge_only_from_generation: "Batterie possono essere ricaricate solo da generazione"
		}
	}
};
var it = {
	card: card$2,
	editor: editor$2
};

var it$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  card: card$2,
  default: it,
  editor: editor$2
});

var card$1 = {
	generic: {
		other: "その他",
		home: "ホーム",
		untracked: "追跡外"
	},
	power_sankey: {
		live_power_flow: "ライブ電力フロー"
	},
	energy_sankey: {
		energy_distribution_today: "今日のエネルギー使用量"
	}
};
var editor$1 = {
	card: {
		generic: {
			title: "タイトル",
			max_consumer_branches: "消費デバイスの最大表示数(0で無制限)",
			appearance: "外観",
			advanced_options: "詳細設定"
		},
		power_sankey: {
			power_from_grid_entity: "系統からの電力 (任意)",
			power_to_grid_entity: "系統への電力 (任意)",
			generation_entity: "発電からの電力 (任意)",
			hide_small_consumers: "20W以下の消費をグループ化する",
			invert_battery_flows: "蓄電器の電力は＋で充電を示します",
			battery_charge_only_from_generation: "蓄電器は発電からの電力でのみ充電する",
			battery_hint_std: "蓄電器からの放電(入出力をまとめた値、＋は放電を示します)",
			battery_hint_inverted: "蓄電器への充電 (入出力をまとめた値、＋は充電を示します)",
			independent_grid_in_out: "充電と放電で異なるセンサーを割り当てる"
		},
		energy_sankey: {
			hide_small_consumers: "0.1kWh以下の消費をグループ化する",
			battery_charge_only_from_generation: "蓄電器は発電からの電力でのみ充電する"
		}
	}
};
var ja = {
	card: card$1,
	editor: editor$1
};

var ja$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  card: card$1,
  default: ja,
  editor: editor$1
});

var card = {
	generic: {
		other: "Outro",
		home: "Início",
		untracked: "Não rastreado"
	},
	power_sankey: {
		live_power_flow: "Fluxo de energia em tempo real"
	},
	energy_sankey: {
		energy_distribution_today: "Distribuição de energia hoje"
	}
};
var editor = {
	card: {
		generic: {
			title: "Título",
			max_consumer_branches: "Limite da quantidade de ramificações de consumidores (0 para ilimitado)",
			appearance: "Aparência",
			advanced_options: "Opções avançadas"
		},
		power_sankey: {
			power_from_grid_entity: "Potência da rede (opcional)",
			power_to_grid_entity: "Potência para a rede (opcional)",
			generation_entity: "Potência da geração (opcional)",
			hide_small_consumers: "Grupo de consumidores abaixo de 20W",
			invert_battery_flows: "Os fluxos da bateria são positivos ao carregar",
			battery_charge_only_from_generation: "As baterias só podem ser carregadas com energia gerada",
			battery_hint_std: "Potência da bateria (uma entrada/saída combinada por bateria, positivo = descarregando)",
			battery_hint_inverted: "Potência para bateria (uma entrada/saída combinada por bateria, positivo = carregando)",
			independent_grid_in_out: "Usar sensores separados para entrada/saída da rede"
		},
		energy_sankey: {
			hide_small_consumers: "Agrupar consumidores abaixo de 0.1kWh",
			battery_charge_only_from_generation: "As baterias só podem ser carregadas com energia gerada"
		}
	}
};
var ptBR = {
	card: card,
	editor: editor
};

var pt_BR = /*#__PURE__*/Object.freeze({
  __proto__: null,
  card: card,
  default: ptBR,
  editor: editor
});

// import * as ar from "./translations/ar.json";
// import * as bg from "./translations/bg.json";
// import * as ca from "./translations/ca.json";
// import * as pt_PT from "./translations/pt-PT.json";
// import * as ro from "./translations/ro.json";
// import * as ru from "./translations/ru.json";
// import * as sl from "./translations/sl.json";
// import * as sk from "./translations/sk.json";
// import * as sv from "./translations/sv.json";
// import * as tr from "./translations/tr.json";
// import * as uk from "./translations/uk.json";
// import * as vi from "./translations/vi.json";
// import * as zh_Hans from "./translations/zh-Hans.json";
// import * as zh_Hant from "./translations/zh-Hant.json";
const languages = {
    //   ar,
    //   bg,
    //   ca,
    cs: cs$1,
    da: da$1,
    de: de$1,
    //   el,
    en: en$1,
    es: es$1,
    //   fi,
    fr: fr$1,
    //   he,
    //   hu,
    //   id,
    it: it$1,
    ja: ja$1,
    //   "ko-KR": ko_KR,
    //   nb,
    //   nl,
    //   pl,
    "pt-BR": pt_BR,
    //   "pt-PT": pt_PT,
    //   ro,
    //   ru,
    //   sl,
    //   sk,
    //   sv,
    //   tr,
    //   uk,
    //   vi,
    //   "zh-Hans": zh_Hans,
    //   "zh-Hant": zh_Hant,
};
const DEFAULT_LANG = "en";
function getTranslatedString(key, lang) {
    try {
        return key
            .split(".")
            .reduce((o, i) => o[i], languages[lang]);
    }
    catch (_) {
        return undefined;
    }
}
function setupCustomlocalize(hass) {
    return function (key) {
        var _a;
        const lang = (_a = hass === null || hass === void 0 ? void 0 : hass.locale.language) !== null && _a !== void 0 ? _a : DEFAULT_LANG;
        let translated = getTranslatedString(key, lang);
        if (!translated)
            translated = getTranslatedString(key, DEFAULT_LANG);
        return translated !== null && translated !== void 0 ? translated : key;
    };
}

class ElecFlowCardBase extends SubscribeMixin(s$1) {
    constructor() {
        super(...arguments);
        this._localizer = (key) => {
            return key;
        };
        this._localizerIsSetup = false;
        this._localize = (key) => {
            if (!this._localizerIsSetup) {
                this._localizer = setupCustomlocalize(this.hass);
                this._localizerIsSetup = true;
            }
            console.info("[ElecFlowCardBase] Localizing key:", key);
            return this._localizer(key);
        };
    }
}
__decorate([
    n$1({ attribute: false })
], ElecFlowCardBase.prototype, "hass", void 0);

const DEFAULT_CONFIG$1 = {
    type: `custom:${ENERGY_CARD_NAME}`,
    title: "Energy distribution today",
    config_version: 1,
    hide_small_consumers: false,
    max_consumer_branches: 0,
    battery_charge_only_from_generation: false,
};
function verifyAndMigrateConfig$1(config) {
    if (!config) {
        throw new Error("Invalid configuration");
    }
    let newConfig = Object.assign({}, config);
    let currentVersion = config.config_version || 0;
    if (currentVersion === 0) {
        console.log("Migrating config from ? to version 1");
        currentVersion = 1;
        newConfig.type = `custom:${ENERGY_CARD_NAME}`;
    }
    newConfig.config_version = currentVersion;
    return newConfig;
}
registerCustomCard({
    type: ENERGY_CARD_NAME,
    name: "Sankey Energy Flow Card",
    description: "Card for showing the flow of electrical energy over a time period on a sankey chart",
});
let EnergyElecFlowCard = class EnergyElecFlowCard extends ElecFlowCardBase {
    constructor() {
        super(...arguments);
        this._generationInRoutes = {};
        this._consumerRoutes = {};
        this._batteryRoutes = {};
        this.hassSubscribeRequiredHostProps = ["_config"];
    }
    hassSubscribe() {
        var _a;
        return [
            getEnergyDataCollection(this.hass, {
                key: (_a = this._config) === null || _a === void 0 ? void 0 : _a.collection_key,
            }).subscribe((data) => this._getStatistics(data)),
        ];
    }
    getCardSize() {
        return 3;
    }
    static async getConfigElement() {
        await Promise.resolve().then(function () { return energyElecFlowCardEditor; });
        return document.createElement(ENERGY_CARD_EDITOR_NAME);
    }
    setConfig(config) {
        this._config = verifyAndMigrateConfig$1(config);
    }
    static getStubConfig(hass) {
        // We don't have access to instance localizer yet, so set up a temp one.
        const localize = setupCustomlocalize(hass);
        let config = DEFAULT_CONFIG$1;
        config.title = localize("card.energy_sankey.energy_distribution_today");
        return config;
    }
    render() {
        if (!this.hass || !this._config) {
            return A;
        }
        const maxConsumerBranches = this._config.max_consumer_branches || 0;
        const hideConsumersBelow = this._config.hide_small_consumers
            ? HIDE_CONSUMERS_BELOW_THRESHOLD_KWH
            : 0;
        const batteryChargeOnlyFromGeneration = this._config.battery_charge_only_from_generation || false;
        return x `
      <ha-card>
        ${this._config.title
            ? x `<h1 class="card-header">${this._config.title}</h1>`
            : ""}
        <div
          class="content ${o({
            "has-header": !!this._config.title,
        })}"
        >
          <ha-elec-sankey
            .hass=${this.hass}
            .gridInRoute=${this._gridInRoute || undefined}
            .gridOutRoute=${this._gridOutRoute || undefined}
            .generationInRoutes=${this._generationInRoutes || {}}
            .consumerRoutes=${this._consumerRoutes || {}}
            .batteryRoutes=${this._batteryRoutes || {}}
            .maxConsumerBranches=${maxConsumerBranches}
            .hideConsumersBelow=${hideConsumersBelow}
            .batteryChargeOnlyFromGeneration=${batteryChargeOnlyFromGeneration}
          ></ha-elec-sankey>
        </div>
      </ha-card>
    `;
    }
    async _getStatistics(energyData) {
        var _a, _b;
        const solarSources = energyData.prefs.energy_sources.filter((source) => source.type === "solar");
        const prefs = energyData.prefs;
        const types = energySourcesByType(prefs);
        if (types.grid && types.grid.length > 0) {
            if (types.grid[0].flow_from.length > 0) {
                const totalFromGrid = (_a = calculateStatisticsSumGrowth(energyData.stats, types.grid[0].flow_from.map((flow) => flow.stat_energy_from))) !== null && _a !== void 0 ? _a : 0;
                const gridInId = types.grid[0].flow_from[0].stat_energy_from;
                this._gridInRoute = {
                    id: gridInId,
                    rate: totalFromGrid,
                };
            }
            if (types.grid[0].flow_to.length > 0) {
                const totalToGrid = (_b = calculateStatisticsSumGrowth(energyData.stats, types.grid[0].flow_to.map((flow) => flow.stat_energy_to))) !== null && _b !== void 0 ? _b : 0;
                const gridOutId = types.grid[0].flow_to[0].stat_energy_to;
                this._gridOutRoute = {
                    id: gridOutId,
                    rate: totalToGrid,
                };
            }
        }
        solarSources.forEach((source) => {
            const label = getStatisticLabel(this.hass, source.stat_energy_from);
            const value = calculateStatisticsSumGrowth(energyData.stats, [
                source.stat_energy_from,
            ]);
            if (!(source.stat_energy_from in this._generationInRoutes)) {
                this._generationInRoutes[source.stat_energy_from] = {
                    id: source.stat_energy_from,
                    text: label,
                    rate: value !== null && value !== void 0 ? value : 0,
                    icon: mdiSolarPower,
                };
            }
            else {
                this._generationInRoutes[source.stat_energy_from].rate = value !== null && value !== void 0 ? value : 0;
            }
        });
        const consumers = energyData.prefs
            .device_consumption;
        // Filter out consumers that are higher level measurements in the hierarchy
        let consumerBlacklist = [];
        consumers.forEach((consumer) => {
            if (consumer.included_in_stat !== undefined) {
                consumerBlacklist.push(consumer.included_in_stat);
            }
        });
        consumers.forEach((consumer) => {
            if (consumerBlacklist.includes(consumer.stat_consumption)) {
                return;
            }
            const label = consumer.name ||
                getStatisticLabel(this.hass, consumer.stat_consumption);
            const value = calculateStatisticsSumGrowth(energyData.stats, [
                consumer.stat_consumption,
            ]);
            if (!(consumer.stat_consumption in this._consumerRoutes)) {
                this._consumerRoutes[consumer.stat_consumption] = {
                    id: consumer.stat_consumption,
                    text: label,
                    rate: value !== null && value !== void 0 ? value : 0,
                    icon: undefined,
                };
            }
            else {
                this._consumerRoutes[consumer.stat_consumption].rate = value !== null && value !== void 0 ? value : 0;
            }
        });
        const batteries = energyData.prefs.energy_sources.filter((source) => source.type === "battery");
        batteries.forEach((battery) => {
            getStatisticLabel(this.hass, battery.stat_energy_from);
            const inToSystem = calculateStatisticsSumGrowth(energyData.stats, [
                battery.stat_energy_from,
            ]);
            const outOfSystem = calculateStatisticsSumGrowth(energyData.stats, [
                battery.stat_energy_to,
            ]);
            this._batteryRoutes[battery.stat_energy_from] = {
                in: {
                    id: battery.stat_energy_from,
                    rate: inToSystem !== null && inToSystem !== void 0 ? inToSystem : 0,
                },
                out: {
                    id: battery.stat_energy_to,
                    rate: outOfSystem !== null && outOfSystem !== void 0 ? outOfSystem : 0,
                },
            };
        });
    }
};
EnergyElecFlowCard.styles = [
    i$3 `
      ha-card {
        height: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        box-sizing: border-box;
        padding-bottom: 16px;
      }
      ha-elec-sankey {
        --generation-color: var(--energy-solar-color);
        --grid-in-color: var(--energy-grid-consumption-color);
        --batt-in-color: var(--energy-battery-out-color);
      }
    `,
];
__decorate([
    t$1()
], EnergyElecFlowCard.prototype, "_config", void 0);
__decorate([
    t$1()
], EnergyElecFlowCard.prototype, "_gridInRoute", void 0);
__decorate([
    t$1()
], EnergyElecFlowCard.prototype, "_gridOutRoute", void 0);
__decorate([
    t$1()
], EnergyElecFlowCard.prototype, "_generationInRoutes", void 0);
__decorate([
    t$1()
], EnergyElecFlowCard.prototype, "_consumerRoutes", void 0);
__decorate([
    t$1()
], EnergyElecFlowCard.prototype, "_batteryRoutes", void 0);
EnergyElecFlowCard = __decorate([
    e$2(ENERGY_CARD_NAME)
], EnergyElecFlowCard);
// Legacy element name for backwards compatibility. Keep this until
// we are sure that noone is using pre config version 1 any more.
let HuiEnergyElecFlowCard = class HuiEnergyElecFlowCard extends EnergyElecFlowCard {
};
HuiEnergyElecFlowCard = __decorate([
    e$2("hui-energy-elec-flow-card")
], HuiEnergyElecFlowCard);

// Polymer legacy event helpers used courtesy of the Polymer project.
//
// Copyright (c) 2017 The Polymer Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
/**
 * Dispatches a custom event with an optional detail value.
 *
 * @param {string} type Name of event type.
 * @param {*=} detail Detail value containing event-specific
 *   payload.
 * @param {{ bubbles: (boolean|undefined),
 *           cancelable: (boolean|undefined),
 *           composed: (boolean|undefined) }=}
 *  options Object specifying options.  These may include:
 *  `bubbles` (boolean, defaults to `true`),
 *  `cancelable` (boolean, defaults to false), and
 *  `node` on which to fire the event (HTMLElement, defaults to `this`).
 * @return {Event} The new event that was fired.
 */
const fireEvent = (node, type, detail, options) => {
    options = options || {};
    // @ts-ignore
    detail = detail === null || detail === undefined ? {} : detail;
    const event = new Event(type, {
        bubbles: options.bubbles === undefined ? true : options.bubbles,
        cancelable: Boolean(options.cancelable),
        composed: options.composed === undefined ? true : options.composed,
    });
    event.detail = detail;
    node.dispatchEvent(event);
    return event;
};

const ENERGY_LABELS = [
    "hide_small_consumers",
    "battery_charge_only_from_generation",
];
const schema = [
    { name: "title", selector: { text: {} } },
    {
        name: "appearance",
        flatten: true,
        type: "expandable",
        iconPath: mdiPalette,
        schema: [
            {
                name: "max_consumer_branches",
                selector: {
                    number: {
                        min: 0,
                        max: 10,
                        mode: "slider",
                    },
                },
            },
            {
                name: "hide_small_consumers",
                selector: { boolean: {} },
            },
            {
                name: "battery_charge_only_from_generation",
                selector: { boolean: {} },
            },
        ],
    },
];
let EnergyFlowCardEditor = class EnergyFlowCardEditor extends s$1 {
    constructor() {
        super(...arguments);
        this._computeLabel = (schema) => {
            const customLocalize = setupCustomlocalize(this.hass);
            if (GENERIC_LABELS.includes(schema.name)) {
                return customLocalize(`editor.card.generic.${schema.name}`);
            }
            if (ENERGY_LABELS.includes(schema.name)) {
                return customLocalize(`editor.card.energy_sankey.${schema.name}`);
            }
            return this.hass.localize(`ui.panel.lovelace.editor.card.generic.${schema.name}`);
        };
    }
    setConfig(config) {
        this._config = verifyAndMigrateConfig$1(config);
    }
    render() {
        if (!this.hass || !this._config) {
            return A;
        }
        const data = Object.assign({}, this._config);
        const language = this.hass.locale.language;
        return x `
      <ha-form
        .hass=${this.hass}
        .data=${data}
        .schema=${schema}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <ha-alert alert-type="info" .title="Note">
        Energy flow entities are configured in the
        <a href="/config/energy">Energy Dashboard Config</a>. They cannot be
        modified via the card configuration.
      </ha-alert>
      ${!(language in languages)
            ? x ` <ha-alert alert-type="info" .title="Translations Wanted!">
            Do you want this card translated into ${language}? If you would like
            to translate this card into additional languages, please see the
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/davet2001/energy-sankey#language-translations"
              >project page</a
            >
            for instructions on how to contribute! Thanks!
          </ha-alert>`
            : x ` <ha-alert alert-type="info">
            Please note that this card is in development! If you see a bug or a
            possible improvement, please use the
            <a href="https://github.com/davet2001/energy-sankey/issues"
              >issue tracker</a
            >
            to help us improve it!
          </ha-alert>`}
    `;
    }
    _valueChanged(ev) {
        fireEvent(this, "config-changed", { config: ev.detail.value });
    }
};
__decorate([
    n$1({ attribute: false })
], EnergyFlowCardEditor.prototype, "hass", void 0);
__decorate([
    t$1()
], EnergyFlowCardEditor.prototype, "_config", void 0);
EnergyFlowCardEditor = __decorate([
    e$2(ENERGY_CARD_EDITOR_NAME)
], EnergyFlowCardEditor);

var energyElecFlowCardEditor = /*#__PURE__*/Object.freeze({
  __proto__: null,
  get EnergyFlowCardEditor () { return EnergyFlowCardEditor; }
});

const darkStyles = {
    "primary-background-color": "#111111",
    "card-background-color": "#1c1c1c",
    "secondary-background-color": "#282828",
    "clear-background-color": "#111111",
    "primary-text-color": "#e1e1e1",
    "secondary-text-color": "#9b9b9b",
    "disabled-text-color": "#6f6f6f",
    "app-header-text-color": "#e1e1e1",
    "app-header-background-color": "#101e24",
    "switch-unchecked-button-color": "#999999",
    "switch-unchecked-track-color": "#9b9b9b",
    "divider-color": "rgba(225, 225, 225, .12)",
    "outline-color": "rgba(225, 225, 225, .12)",
    "outline-hover-color": "rgba(225, 225, 225, .24)",
    "mdc-ripple-color": "#AAAAAA",
    "mdc-linear-progress-buffer-color": "rgba(255, 255, 255, 0.1)",
    "input-idle-line-color": "rgba(255, 255, 255, 0.42)",
    "input-hover-line-color": "rgba(255, 255, 255, 0.87)",
    "input-disabled-line-color": "rgba(255, 255, 255, 0.06)",
    "input-outlined-idle-border-color": "rgba(255, 255, 255, 0.38)",
    "input-outlined-hover-border-color": "rgba(255, 255, 255, 0.87)",
    "input-outlined-disabled-border-color": "rgba(255, 255, 255, 0.06)",
    "input-fill-color": "rgba(255, 255, 255, 0.05)",
    "input-disabled-fill-color": "rgba(255, 255, 255, 0.02)",
    "input-ink-color": "rgba(255, 255, 255, 0.87)",
    "input-label-ink-color": "rgba(255, 255, 255, 0.6)",
    "input-disabled-ink-color": "rgba(255, 255, 255, 0.37)",
    "input-dropdown-icon-color": "rgba(255, 255, 255, 0.54)",
    "codemirror-keyword": "#C792EA",
    "codemirror-operator": "#89DDFF",
    "codemirror-variable": "#f07178",
    "codemirror-variable-2": "#EEFFFF",
    "codemirror-variable-3": "#DECB6B",
    "codemirror-builtin": "#FFCB6B",
    "codemirror-atom": "#F78C6C",
    "codemirror-number": "#FF5370",
    "codemirror-def": "#82AAFF",
    "codemirror-string": "#C3E88D",
    "codemirror-string-2": "#f07178",
    "codemirror-comment": "#545454",
    "codemirror-tag": "#FF5370",
    "codemirror-meta": "#FFCB6B",
    "codemirror-attribute": "#C792EA",
    "codemirror-property": "#C792EA",
    "codemirror-qualifier": "#DECB6B",
    "codemirror-type": "#DECB6B",
    "energy-grid-return-color": "#a280db",
    "map-filter": "invert(.9) hue-rotate(170deg) brightness(1.5) contrast(1.2) saturate(.3)",
    "disabled-color": "#464646",
};
const derivedStyles = {
    "state-icon-error-color": "var(--error-state-color, var(--error-color))",
    "state-unavailable-color": "var(--state-icon-unavailable-color, var(--disabled-text-color))",
    "sidebar-text-color": "var(--primary-text-color)",
    "sidebar-background-color": "var(--card-background-color)",
    "sidebar-selected-text-color": "var(--primary-color)",
    "sidebar-selected-icon-color": "var(--primary-color)",
    "sidebar-icon-color": "rgba(var(--rgb-primary-text-color), 0.6)",
    "switch-checked-color": "var(--primary-color)",
    "switch-checked-button-color": "var(--switch-checked-color, var(--primary-background-color))",
    "switch-checked-track-color": "var(--switch-checked-color, #000000)",
    "switch-unchecked-button-color": "var(--switch-unchecked-color, var(--primary-background-color))",
    "switch-unchecked-track-color": "var(--switch-unchecked-color, #000000)",
    "slider-color": "var(--primary-color)",
    "slider-secondary-color": "var(--light-primary-color)",
    "slider-track-color": "var(--scrollbar-thumb-color)",
    "label-badge-background-color": "var(--card-background-color)",
    "label-badge-text-color": "rgba(var(--rgb-primary-text-color), 0.8)",
    "paper-listbox-background-color": "var(--card-background-color)",
    "paper-item-icon-color": "var(--state-icon-color)",
    "paper-item-icon-active-color": "var(--state-icon-active-color)",
    "table-header-background-color": "var(--input-fill-color)",
    "table-row-background-color": "var(--primary-background-color)",
    "table-row-alternative-background-color": "var(--secondary-background-color)",
    "data-table-background-color": "var(--card-background-color)",
    "markdown-code-background-color": "var(--primary-background-color)",
    // https://github.com/material-components/material-web/blob/master/docs/theming.md
    "mdc-theme-primary": "var(--primary-color)",
    "mdc-theme-secondary": "var(--accent-color)",
    "mdc-theme-background": "var(--primary-background-color)",
    "mdc-theme-surface": "var(--card-background-color)",
    "mdc-theme-on-primary": "var(--text-primary-color)",
    "mdc-theme-on-secondary": "var(--text-primary-color)",
    "mdc-theme-on-surface": "var(--primary-text-color)",
    "mdc-theme-text-disabled-on-light": "var(--disabled-text-color)",
    "mdc-theme-text-primary-on-background": "var(--primary-text-color)",
    "mdc-theme-text-secondary-on-background": "var(--secondary-text-color)",
    "mdc-theme-text-hint-on-background": "var(--secondary-text-color)",
    "mdc-theme-text-icon-on-background": "var(--secondary-text-color)",
    "mdc-theme-error": "var(--error-color)",
    "app-header-text-color": "var(--text-primary-color)",
    "app-header-background-color": "var(--primary-color)",
    "app-theme-color": "var(--primary-color)",
    "mdc-checkbox-unchecked-color": "rgba(var(--rgb-primary-text-color), 0.54)",
    "mdc-checkbox-disabled-color": "var(--disabled-text-color)",
    "mdc-radio-unchecked-color": "rgba(var(--rgb-primary-text-color), 0.54)",
    "mdc-radio-disabled-color": "var(--disabled-text-color)",
    "mdc-tab-text-label-color-default": "var(--primary-text-color)",
    "mdc-button-disabled-ink-color": "var(--disabled-text-color)",
    "mdc-button-outline-color": "var(--outline-color)",
    "mdc-dialog-scroll-divider-color": "var(--divider-color)",
    "mdc-dialog-heading-ink-color": "var(--primary-text-color)",
    "mdc-dialog-content-ink-color": "var(--primary-text-color)",
    "mdc-text-field-idle-line-color": "var(--input-idle-line-color)",
    "mdc-text-field-hover-line-color": "var(--input-hover-line-color)",
    "mdc-text-field-disabled-line-color": "var(--input-disabled-line-color)",
    "mdc-text-field-outlined-idle-border-color": "var(--input-outlined-idle-border-color)",
    "mdc-text-field-outlined-hover-border-color": "var(--input-outlined-hover-border-color)",
    "mdc-text-field-outlined-disabled-border-color": "var(--input-outlined-disabled-border-color)",
    "mdc-text-field-fill-color": "var(--input-fill-color)",
    "mdc-text-field-disabled-fill-color": "var(--input-disabled-fill-color)",
    "mdc-text-field-ink-color": "var(--input-ink-color)",
    "mdc-text-field-label-ink-color": "var(--input-label-ink-color)",
    "mdc-text-field-disabled-ink-color": "var(--input-disabled-ink-color)",
    "mdc-select-idle-line-color": "var(--input-idle-line-color)",
    "mdc-select-hover-line-color": "var(--input-hover-line-color)",
    "mdc-select-outlined-idle-border-color": "var(--input-outlined-idle-border-color)",
    "mdc-select-outlined-hover-border-color": "var(--input-outlined-hover-border-color)",
    "mdc-select-outlined-disabled-border-color": "var(--input-outlined-disabled-border-color)",
    "mdc-select-fill-color": "var(--input-fill-color)",
    "mdc-select-disabled-fill-color": "var(--input-disabled-fill-color)",
    "mdc-select-ink-color": "var(--input-ink-color)",
    "mdc-select-label-ink-color": "var(--input-label-ink-color)",
    "mdc-select-disabled-ink-color": "var(--input-disabled-ink-color)",
    "mdc-select-dropdown-icon-color": "var(--input-dropdown-icon-color)",
    "mdc-select-disabled-dropdown-icon-color": "var(--input-disabled-ink-color)",
    "ha-assist-chip-filled-container-color": "rgba(var(--rgb-primary-text-color),0.15)",
    "ha-assist-chip-active-container-color": "rgba(var(--rgb-primary-color),0.15)",
    "chip-background-color": "rgba(var(--rgb-primary-text-color), 0.15)",
    // Vaadin
    "material-body-text-color": "var(--primary-text-color)",
    "material-background-color": "var(--card-background-color)",
    "material-secondary-background-color": "var(--secondary-background-color)",
    "material-secondary-text-color": "var(--secondary-text-color)",
};

const expandHex = (hex) => {
    hex = hex.replace("#", "");
    if (hex.length === 6)
        return hex;
    let result = "";
    for (const val of hex) {
        result += val + val;
    }
    return result;
};
// Blend 2 hex colors: c1 is placed over c2, blend is c1's opacity.
const hexBlend = (c1, c2, blend = 50) => {
    let color = "";
    c1 = expandHex(c1);
    c2 = expandHex(c2);
    for (let i = 0; i <= 5; i += 2) {
        const h1 = parseInt(c1.substr(i, 2), 16);
        const h2 = parseInt(c2.substr(i, 2), 16);
        let hex = Math.floor(h2 + (h1 - h2) * (blend / 100)).toString(16);
        while (hex.length < 2)
            hex = "0" + hex;
        color += hex;
    }
    return `#${color}`;
};

// Conversion between HEX and RGB
const hex2rgb = (hex) => {
    hex = expandHex(hex);
    return [
        parseInt(hex.substring(0, 2), 16),
        parseInt(hex.substring(2, 4), 16),
        parseInt(hex.substring(4, 6), 16),
    ];
};

let PROCESSED_THEMES = {};
/**
 * Apply a theme to an element by setting the CSS variables on it.
 *
 * element: Element to apply theme on.
 * themes: HASS theme information (e.g. active dark mode and globally active theme name).
 * selectedTheme: Selected theme (used to override the globally active theme for this element).
 * themeSettings: Additional settings such as selected colors.
 */
const applyThemesOnElement = (element, themes, selectedTheme, themeSettings, main) => {
    var _a, _b, _c;
    // If there is no explicitly desired theme provided, and the element is the main element we automatically
    // use the active one from `themes`.
    const themeToApply = selectedTheme || (undefined);
    // If there is no explicitly desired dark mode provided, we automatically
    // use the active one from `themes`.
    const darkMode = (themes === null || themes === void 0 ? void 0 : themes.darkMode) || false;
    let cacheKey = themeToApply;
    let themeRules = {};
    if (themeToApply && darkMode) {
        cacheKey = `${cacheKey}__dark`;
        themeRules = Object.assign({}, darkStyles);
    }
    if (themeToApply === "default") {
        // Determine the primary and accent colors from the current settings.
        // Fallbacks are implicitly the HA default blue and orange or the
        // derived "darkStyles" values, depending on the light vs dark mode.
        const primaryColor = void 0 ;
        if (darkMode && primaryColor) {
            themeRules["app-theme-color"] = hexBlend(primaryColor, "#121212", 8);
            themeRules["app-header-background-color"] = themeRules["app-theme-color"];
        }
        // Nothing was changed
        if (((_a = element.__themes) === null || _a === void 0 ? void 0 : _a.cacheKey) === cacheKey) {
            return;
        }
    }
    // Custom theme logic (not relevant for default theme, since it would override
    // the derived calculations from above)
    if (themeToApply &&
        themeToApply !== "default" &&
        themes.themes[themeToApply]) {
        // Apply theme vars that are relevant for all modes (but extract the "modes" section first)
        const _d = themes.themes[themeToApply], { modes } = _d, baseThemeRules = __rest(_d, ["modes"]);
        themeRules = Object.assign(Object.assign({}, themeRules), baseThemeRules);
        // Apply theme vars for the specific mode if available
        if (modes) {
            if (darkMode) {
                themeRules = Object.assign(Object.assign({}, themeRules), modes.dark);
            }
            else {
                themeRules = Object.assign(Object.assign({}, themeRules), modes.light);
            }
        }
    }
    if (!((_b = element.__themes) === null || _b === void 0 ? void 0 : _b.keys) && !Object.keys(themeRules).length) {
        // No styles to reset, and no styles to set
        return;
    }
    const newTheme = Object.keys(themeRules).length && cacheKey
        ? PROCESSED_THEMES[cacheKey] || processTheme(cacheKey, themeRules)
        : undefined;
    // Add previous set keys to reset them, and new theme
    const styles = Object.assign(Object.assign({}, (_c = element.__themes) === null || _c === void 0 ? void 0 : _c.keys), newTheme === null || newTheme === void 0 ? void 0 : newTheme.styles);
    element.__themes = { cacheKey, keys: newTheme === null || newTheme === void 0 ? void 0 : newTheme.keys };
    // Set and/or reset styles
    if (element.updateStyles) {
        // Use updateStyles() method of Polymer elements
        element.updateStyles(styles);
    }
    else if (window.ShadyCSS) {
        // Use ShadyCSS if available
        window.ShadyCSS.styleSubtree(/** @type {!HTMLElement} */ element, styles);
    }
    else {
        for (const s in styles) {
            if (s === null) {
                element.style.removeProperty(s);
            }
            else {
                element.style.setProperty(s, styles[s]);
            }
        }
    }
};
const processTheme = (cacheKey, theme) => {
    if (!theme || !Object.keys(theme).length) {
        return undefined;
    }
    const combinedTheme = Object.assign(Object.assign({}, derivedStyles), theme);
    const styles = {};
    const keys = {};
    for (const key of Object.keys(combinedTheme)) {
        const prefixedKey = `--${key}`;
        const value = String(combinedTheme[key]);
        styles[prefixedKey] = value;
        keys[prefixedKey] = "";
        // Try to create a rgb value for this key if it is not a var
        if (!value.startsWith("#")) {
            // Can't convert non hex value
            continue;
        }
        const rgbKey = `rgb-${key}`;
        if (combinedTheme[rgbKey] !== undefined) {
            // Theme has it's own rgb value
            continue;
        }
        try {
            const rgbValue = hex2rgb(value).join(",");
            const prefixedRgbKey = `--${rgbKey}`;
            styles[prefixedRgbKey] = rgbValue;
            keys[prefixedRgbKey] = "";
        }
        catch (err) {
            continue;
        }
    }
    PROCESSED_THEMES[cacheKey] = { styles, keys };
    return { styles, keys };
};

const createEntityNotFoundWarning = (hass, entityId) => hass.config.state !== STATE_NOT_RUNNING
    ? hass.localize("ui.panel.lovelace.warning.entity_not_found", {
        entity: entityId || "[empty]",
    })
    : hass.localize("ui.panel.lovelace.warning.starting");

function hasConfigChanged(element, changedProps) {
    if (changedProps.has("_config")) {
        return true;
    }
    if (!changedProps.has("hass")) {
        return false;
    }
    const oldHass = changedProps.get("hass");
    if (!oldHass) {
        return true;
    }
    if (oldHass.connected !== element.hass.connected ||
        oldHass.themes !== element.hass.themes ||
        oldHass.locale !== element.hass.locale ||
        oldHass.localize !== element.hass.localize ||
        oldHass.formatEntityState !== element.hass.formatEntityState ||
        oldHass.formatEntityAttributeName !==
            element.hass.formatEntityAttributeName ||
        oldHass.formatEntityAttributeValue !==
            element.hass.formatEntityAttributeValue ||
        oldHass.config.state !== element.hass.config.state) {
        return true;
    }
    return false;
}

// export interface UpdateEntityRegistryEntryResult {
//   entity_entry: ExtEntityRegistryEntry;
//   reload_delay?: number;
//   require_restart?: boolean;
// }
// export interface SensorEntityOptions {
//   display_precision?: number | null;
//   suggested_display_precision?: number | null;
//   unit_of_measurement?: string | null;
// }
// export interface LightEntityOptions {
//   favorite_colors?: LightColor[];
// }
// export interface NumberEntityOptions {
//   unit_of_measurement?: string | null;
// }
// export interface LockEntityOptions {
//   default_code?: string | null;
// }
// export interface WeatherEntityOptions {
//   precipitation_unit?: string | null;
//   pressure_unit?: string | null;
//   temperature_unit?: string | null;
//   visibility_unit?: string | null;
//   wind_speed_unit?: string | null;
// }
// export interface SwitchAsXEntityOptions {
//   entity_id: string;
//   invert: boolean;
// }
// export interface EntityRegistryOptions {
//   number?: NumberEntityOptions;
//   sensor?: SensorEntityOptions;
//   lock?: LockEntityOptions;
//   weather?: WeatherEntityOptions;
//   light?: LightEntityOptions;
//   switch_as_x?: SwitchAsXEntityOptions;
//   conversation?: Record<string, unknown>;
//   "cloud.alexa"?: Record<string, unknown>;
//   "cloud.google_assistant"?: Record<string, unknown>;
// }
// export interface EntityRegistryEntryUpdateParams {
//   name?: string | null;
//   icon?: string | null;
//   device_class?: string | null;
//   area_id?: string | null;
//   disabled_by?: string | null;
//   hidden_by: string | null;
//   new_entity_id?: string;
//   options_domain?: string;
//   options?:
//     | SensorEntityOptions
//     | NumberEntityOptions
//     | LockEntityOptions
//     | WeatherEntityOptions
//     | LightEntityOptions;
//   aliases?: string[];
//   labels?: string[];
//   categories?: { [scope: string]: string | null };
// }
// const batteryPriorities = ["sensor", "binary_sensor"];
// export const findBatteryEntity = <T extends { entity_id: string }>(
//   hass: HomeAssistant,
//   entities: T[]
// ): T | undefined => {
//   const batteryEntities = entities
//     .filter(
//       (entity) =>
//         hass.states[entity.entity_id] &&
//         hass.states[entity.entity_id].attributes.device_class === "battery" &&
//         batteryPriorities.includes(computeDomain(entity.entity_id))
//     )
//     .sort(
//       (a, b) =>
//         batteryPriorities.indexOf(computeDomain(a.entity_id)) -
//         batteryPriorities.indexOf(computeDomain(b.entity_id))
//     );
//   if (batteryEntities.length > 0) {
//     return batteryEntities[0];
//   }
//   return undefined;
// };
// export const findBatteryChargingEntity = <T extends { entity_id: string }>(
//   hass: HomeAssistant,
//   entities: T[]
// ): T | undefined =>
//   entities.find(
//     (entity) =>
//       hass.states[entity.entity_id] &&
//       hass.states[entity.entity_id].attributes.device_class ===
//         "battery_charging"
//   );
// export const computeEntityRegistryName = (
//   hass: HomeAssistant,
//   entry: EntityRegistryEntry
// ): string | null => {
//   if (entry.name) {
//     return entry.name;
//   }
//   const state = hass.states[entry.entity_id];
//   if (state) {
//     return computeStateName(state);
//   }
//   return entry.original_name ? entry.original_name : entry.entity_id;
// };
const getExtendedEntityRegistryEntry = (hass, entityId) => hass.callWS({
    type: "config/entity_registry/get",
    entity_id: entityId,
});
// export const getExtendedEntityRegistryEntries = (
//   hass: HomeAssistant,
//   entityIds: string[]
// ): Promise<Record<string, ExtEntityRegistryEntry>> =>
//   hass.callWS({
//     type: "config/entity_registry/get_entries",
//     entity_ids: entityIds,
//   });
// export const updateEntityRegistryEntry = (
//   hass: HomeAssistant,
//   entityId: string,
//   updates: Partial<EntityRegistryEntryUpdateParams>
// ): Promise<UpdateEntityRegistryEntryResult> =>
//   hass.callWS({
//     type: "config/entity_registry/update",
//     entity_id: entityId,
//     ...updates,
//   });
// export const removeEntityRegistryEntry = (
//   hass: HomeAssistant,
//   entityId: string
// ): Promise<void> =>
//   hass.callWS({
//     type: "config/entity_registry/remove",
//     entity_id: entityId,
//   });
// export const fetchEntityRegistry = (conn: Connection) =>
//   conn.sendMessagePromise<EntityRegistryEntry[]>({
//     type: "config/entity_registry/list",
//   });
// export const fetchEntityRegistryDisplay = (conn: Connection) =>
//   conn.sendMessagePromise<EntityRegistryDisplayEntryResponse>({
//     type: "config/entity_registry/list_for_display",
//   });
// const subscribeEntityRegistryUpdates = (
//   conn: Connection,
//   store: Store<EntityRegistryEntry[]>
// ) =>
//   conn.subscribeEvents(
//     debounce(
//       () =>
//         fetchEntityRegistry(conn).then((entities) =>
//           store.setState(entities, true)
//         ),
//       500,
//       true
//     ),
//     "entity_registry_updated"
//   );
// export const subscribeEntityRegistry = (
//   conn: Connection,
//   onChange: (entities: EntityRegistryEntry[]) => void
// ) =>
//   createCollection<EntityRegistryEntry[]>(
//     "_entityRegistry",
//     fetchEntityRegistry,
//     subscribeEntityRegistryUpdates,
//     conn,
//     onChange
//   );
// export const sortEntityRegistryByName = (
//   entries: EntityRegistryEntry[],
//   language: string
// ) =>
//   entries.sort((entry1, entry2) =>
//     caseInsensitiveStringCompare(entry1.name || "", entry2.name || "", language)
//   );
// export const entityRegistryByEntityId = memoizeOne(
//   (entries: EntityRegistryEntry[]) => {
//     const entities: Record<string, EntityRegistryEntry> = {};
//     for (const entity of entries) {
//       entities[entity.entity_id] = entity;
//     }
//     return entities;
//   }
// );
// export const entityRegistryById = memoizeOne(
//   (entries: EntityRegistryEntry[]) => {
//     const entities: Record<string, EntityRegistryEntry> = {};
//     for (const entity of entries) {
//       entities[entity.id] = entity;
//     }
//     return entities;
//   }
// );
// export const getEntityPlatformLookup = (
//   entities: EntityRegistryEntry[]
// ): Record<string, string> => {
//   const entityLookup = {};
//   for (const confEnt of entities) {
//     if (!confEnt.platform) {
//       continue;
//     }
//     entityLookup[confEnt.entity_id] = confEnt.platform;
//   }
//   return entityLookup;
// };

const POWER_CARD_NAME = `${PREFIX_NAME}-power-flow-card`;
const POWER_CARD_EDITOR_NAME = `${POWER_CARD_NAME}-editor`;
const HIDE_CONSUMERS_BELOW_THRESHOLD_W = 20;

const DEFAULT_CONFIG = {
    type: `custom:${POWER_CARD_NAME}`,
    title: "Live power flow",
    config_version: 3,
    consumer_entities: [],
    battery_entities: [],
    generation_entity: undefined,
    power_from_grid_entity: undefined,
    power_to_grid_entity: undefined,
    invert_battery_flows: false,
    hide_small_consumers: false,
    max_consumer_branches: 0,
    independent_grid_in_out: false,
};
function verifyAndMigrateConfig(config) {
    if (!config) {
        throw new Error("Invalid configuration");
    }
    let newConfig = Object.assign({}, config);
    let currentVersion = config.config_version || 0;
    if (currentVersion === 0) {
        console.log("Migrating config from ? to version 1");
        currentVersion = 1;
        newConfig.battery_entities = newConfig.battery_entities || [];
        newConfig.hide_small_consumers = newConfig.hide_small_consumers || false;
        newConfig.max_consumer_branches = newConfig.max_consumer_branches || 0;
    }
    if (currentVersion === 1) {
        // Migrate from version 1 to version 2
        console.log("Migrating config from version 1 to version 2");
        currentVersion = 2;
        newConfig.invert_battery_flows = false;
    }
    if (currentVersion === 2) {
        // Migrate from version 2 to version 3
        console.log("Migrating config from version 2 to version 3");
        currentVersion = 3;
        newConfig.type = `custom:${POWER_CARD_NAME}`;
    }
    if (!config.power_from_grid_entity &&
        !config.power_to_grid_entity &&
        !config.generation_entity &&
        config.consumer_entities.length === 0) {
        throw new Error("Must specify at least one entity");
    }
    newConfig.config_version = currentVersion;
    return newConfig;
}
registerCustomCard({
    type: POWER_CARD_NAME,
    name: "Sankey Power Flow Card",
    description: "Card for showing the instantaneous flow of electrical power",
});
function computePower(stateObj) {
    /**
     * Returns the power of an entity, scaled to W.
     */
    let uom;
    let state = Number(stateObj.state);
    if ((uom = stateObj.attributes.unit_of_measurement)) {
        switch (uom) {
            case "kW": {
                return 1000 * state;
            }
            default: {
                return state;
            }
        }
    }
    else {
        return state;
    }
}
function htmlHuiWarning(hass, entity) {
    /**
     * Returns a not found warning for the given entity name.
     */
    return x `<hui-warning
    >${createEntityNotFoundWarning(hass, entity)}</hui-warning
  >`;
}
let PowerFlowCard = class PowerFlowCard extends ElecFlowCardBase {
    static async getConfigElement() {
        await Promise.resolve().then(function () { return powerFlowCardEditor; });
        return document.createElement(POWER_CARD_EDITOR_NAME);
    }
    getCardSize() {
        return 3;
    }
    setConfig(config) {
        const newConfig = verifyAndMigrateConfig(config);
        this._config = Object.assign({}, newConfig);
    }
    static async getExtendedEntityRegistryEntries(_hass) {
        // Get the full list of all extended entity registry entries as a dict.
        // @todo: uses multiple WS lookups - there's scope for optimising this.
        let extEntities = {};
        for (let key in _hass.entities) {
            const extEntity = await getExtendedEntityRegistryEntry(_hass, key);
            if (!extEntity) {
                continue;
            }
            extEntities[key] = extEntity;
        }
        return extEntities;
    }
    static async getPowerEntityIdForEnergyEntityId(_hass, energyEntityId, extEntities) {
        /**
         * Given an energy entity ID, find the associated power entity ID.
         * Looks up the device ID for the energy entity, then finds the most
         * likely power entity associated with that device.
         */
        const energyEntity = _hass.entities[energyEntityId];
        if (!energyEntity) {
            return "";
        }
        const deviceEntityId = energyEntity.device_id;
        if (!deviceEntityId) {
            return "";
        }
        const deviceEntity = _hass.devices[deviceEntityId];
        if (!deviceEntity) {
            return "";
        }
        let powerEntityIds = [];
        for (let key in extEntities) {
            const extEntity = extEntities[key];
            if (extEntity.device_id === deviceEntityId &&
                extEntity.original_device_class === "power") {
                powerEntityIds.push(extEntity.entity_id);
            }
        }
        if (powerEntityIds.length === 0) {
            return "";
        }
        else if (powerEntityIds.length === 1) {
            return powerEntityIds[0];
        }
        else {
            // We have multiple power entities for this device, pick the one
            // with the largest absolute power.
            let mostLikelyPowerEntityId = powerEntityIds[0];
            let maxPower = 0;
            for (let powerEntityId of powerEntityIds) {
                const power = Math.abs(+_hass.states[powerEntityId].state);
                if (power > maxPower) {
                    maxPower = power;
                    mostLikelyPowerEntityId = powerEntityId;
                }
            }
            return mostLikelyPowerEntityId;
        }
    }
    static async getPowerEntityIdForEnergyEntityIdWithFail(_hass, energyEntityId, extEntities) {
        /**
         * Given an energy entity ID, find the associated power entity ID.
         * If not found, return a string indicating the failure.
         */
        let powerEntityId = await this.getPowerEntityIdForEnergyEntityId(_hass, energyEntityId, extEntities);
        if (!powerEntityId) {
            powerEntityId =
                "please_manually_enter_power_entity_id_for " + energyEntityId;
        }
        return powerEntityId;
    }
    static async getStubConfig(_hass) {
        /**
         * We go on a bit of a hunt to get the stub config.
         * HA configures *energy* sources, not power sources, so we look for the
         * original devices associated with each energy source, and find an
         * associated power sensor for each.
         * It's not perfect, but even a partially populated config is a huge
         * help to the user.
         */
        const energyPrefs = await getEnergyPreferences(_hass);
        const extEntities = await this.getExtendedEntityRegistryEntries(_hass);
        // We don't have access to instance localizer here, so set up a temp one.
        const localize = setupCustomlocalize(_hass);
        let returnConfig = DEFAULT_CONFIG;
        returnConfig.title = localize("card.power_sankey.live_power_flow");
        // Parse energy sources from HA's energy prefs
        for (const source of energyPrefs.energy_sources) {
            switch (source.type) {
                case "grid":
                    let power_from_grid_entity = "";
                    power_from_grid_entity =
                        await this.getPowerEntityIdForEnergyEntityIdWithFail(_hass, source.flow_from[0].stat_energy_from, extEntities);
                    returnConfig.power_from_grid_entity = power_from_grid_entity;
                    break;
                case "solar":
                    let generation_entity = "";
                    // In future we might support multiple generation entities
                    generation_entity = await this.getPowerEntityIdForEnergyEntityId(_hass, source.stat_energy_from, extEntities);
                    if (generation_entity) {
                        returnConfig.generation_entity = generation_entity;
                    }
                    break;
                case "battery":
                    let batteryEntity = "";
                    batteryEntity = await this.getPowerEntityIdForEnergyEntityId(_hass, source.stat_energy_from, extEntities);
                    if (batteryEntity) {
                        returnConfig.battery_entities.push({ entity: batteryEntity });
                    }
                    break;
            }
        }
        // Filter out consumers that are higher level measurements in the hierarchy
        let consumerBlacklist = [];
        const consumers = energyPrefs.device_consumption;
        for (const consumer of consumers) {
            if (consumer.included_in_stat !== undefined) {
                consumerBlacklist.push(consumer.included_in_stat);
            }
        }
        // Parse energy consumers from HA's energy prefs
        for (const consumer of consumers) {
            if (consumerBlacklist.includes(consumer.stat_consumption)) {
                continue;
            }
            if (!returnConfig.consumer_entities) {
                returnConfig.consumer_entities = [];
            }
            const entityId = await this.getPowerEntityIdForEnergyEntityId(_hass, consumer.stat_consumption, extEntities);
            if (entityId) {
                returnConfig.consumer_entities.push({ entity: entityId });
            }
        }
        return returnConfig;
    }
    _getValues(config) {
        // The editor only supports a single generation entity, so we need to
        // convert the single entity to an array.
        config.generation_entities = config.generation_entity
            ? [config.generation_entity]
            : [];
        let gridInRoute = null;
        if (config.power_from_grid_entity) {
            const stateObj = this.hass.states[config.power_from_grid_entity];
            if (!stateObj) {
                return x `
          <hui-warning>
            ${createEntityNotFoundWarning(this.hass, config.power_from_grid_entity)}
          </hui-warning>
        `;
            }
            const name = computeStateName(stateObj);
            gridInRoute = {
                id: config.power_from_grid_entity,
                text: name,
                rate: computePower(stateObj),
            };
        }
        let gridOutRoute = null;
        if (config.independent_grid_in_out && config.power_to_grid_entity) {
            const stateObj = this.hass.states[config.power_to_grid_entity];
            if (!stateObj) {
                return htmlHuiWarning(this.hass, config.power_to_grid_entity);
            }
            gridOutRoute = {
                id: config.power_to_grid_entity,
                text: computeStateName(stateObj),
                rate: computePower(stateObj),
            };
        }
        const generationInRoutes = {};
        for (const entity of config.generation_entities) {
            if (!entity) {
                continue;
            }
            const stateObj = this.hass.states[entity];
            if (!stateObj) {
                return htmlHuiWarning(this.hass, entity);
            }
            generationInRoutes[entity] = {
                id: entity,
                text: computeStateName(stateObj),
                rate: computePower(stateObj),
                icon: mdiSolarPower,
            };
        }
        const consumerRoutes = {};
        if (config.consumer_entities) {
            for (const entity of config.consumer_entities) {
                let stateObj;
                stateObj = this.hass.states[entity.entity];
                if (!stateObj) {
                    return htmlHuiWarning(this.hass, entity.entity);
                }
                let name = entity.name;
                if (!name) {
                    name = computeStateName(stateObj);
                }
                consumerRoutes[entity.entity] = {
                    id: entity.entity,
                    text: name,
                    rate: computePower(stateObj),
                };
            }
        }
        const batteryRoutes = {};
        if (config.battery_entities) {
            for (const entity of config.battery_entities) {
                let stateObj;
                stateObj = this.hass.states[entity.entity];
                let name = entity.name;
                if (!stateObj) {
                    return htmlHuiWarning(this.hass, entity.entity);
                }
                if (!name) {
                    name = computeStateName(stateObj);
                }
                // power in refers to power into the energy distribution system
                // (i.e. out of the battery)
                let powerIn = (config.invert_battery_flows ? -1 : 1) * computePower(stateObj);
                batteryRoutes[entity.entity] = {
                    in: {
                        id: entity.entity,
                        text: name,
                        rate: powerIn > 0 ? powerIn : 0,
                    },
                    out: {
                        id: "null",
                        text: "null",
                        rate: powerIn < 0 ? -powerIn : 0,
                    },
                };
            }
        }
        return [
            gridInRoute,
            gridOutRoute,
            generationInRoutes,
            consumerRoutes,
            batteryRoutes,
        ];
    }
    render() {
        if (!this._config || !this.hass) {
            return A;
        }
        const config = this._config;
        const res = this._getValues(config);
        // If the result is an not an array, assume it is a error in the form of a
        // TemplateResult. Show it and stop.
        if (!Array.isArray(res)) {
            return res;
        }
        const [gridInRoute, gridOutRoute, generationInRoutes, consumerRoutes, batteryRoutes,] = res;
        const maxConsumerBranches = this._config.max_consumer_branches || 0;
        const hideConsumersBelow = this._config.hide_small_consumers
            ? HIDE_CONSUMERS_BELOW_THRESHOLD_W
            : 0;
        const batteryChargeOnlyFromGeneration = this._config.battery_charge_only_from_generation || false;
        return x `
      <ha-card>
        ${config.title
            ? x `<h1 class="card-header">${config.title}</h1>`
            : ""}
        <div
          class="content ${o({
            "has-header": !!this._config.title,
        })}"
        >
          <ha-elec-sankey
            .hass=${this.hass}
            .unit=${"W"}
            .gridInRoute=${gridInRoute || undefined}
            .gridOutRoute=${gridOutRoute || undefined}
            .generationInRoutes=${generationInRoutes}
            .consumerRoutes=${consumerRoutes}
            .batteryRoutes=${batteryRoutes}
            .maxConsumerBranches=${maxConsumerBranches}
            .hideConsumersBelow=${hideConsumersBelow}
            .batteryChargeOnlyFromGeneration=${batteryChargeOnlyFromGeneration}
          ></ha-elec-sankey>
        </div>
      </ha-card>
    `;
    }
    shouldUpdate(changedProps) {
        if (hasConfigChanged(this, changedProps)) {
            return true;
        }
        if (!changedProps.has("hass")) {
            return false;
        }
        const oldHass = changedProps.get("hass");
        const newHass = this.hass;
        if (this._config) {
            for (const id of [
                this._config.power_from_grid_entity,
                this._config.power_to_grid_entity,
                ...(this._config.generation_entities || []),
                ...(this._config.consumer_entities.map((a) => a.entity) || []),
                ...(this._config.battery_entities.map((a) => a.entity) || []),
            ]) {
                if (id) {
                    const oldState = oldHass.states[id];
                    const newState = newHass.states[id];
                    if (oldState !== newState) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    updated(changedProps) {
        super.updated(changedProps);
        if (!this._config || !this.hass) {
            return;
        }
        const oldHass = changedProps.get("hass");
        const oldConfig = changedProps.get("_config");
        if (!oldHass ||
            !oldConfig ||
            oldHass.themes !== this.hass.themes ||
            oldConfig.theme !== this._config.theme) {
            applyThemesOnElement(this, this.hass.themes, this._config.theme);
        }
    }
};
PowerFlowCard.styles = [
    i$3 `
      ha-card {
        height: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        box-sizing: border-box;
        padding-bottom: 16px;
      }
      ha-elec-sankey {
        --generation-color: var(--energy-solar-color);
        --grid-in-color: var(--energy-grid-consumption-color);
        --batt-in-color: var(--energy-battery-out-color);
      }
    `,
];
__decorate([
    t$1()
], PowerFlowCard.prototype, "_config", void 0);
PowerFlowCard = __decorate([
    e$2(POWER_CARD_NAME)
], PowerFlowCard);
// Legacy element name for backwards compatibility
// Can be dropped once we are sure noone is using config version 2 any more.
let HuiPowerFlowCard = class HuiPowerFlowCard extends PowerFlowCard {
};
HuiPowerFlowCard = __decorate([
    e$2("hui-power-flow-card")
], HuiPowerFlowCard);

function processEditorEntities(entities) {
    return entities.map((entityConf) => {
        if (typeof entityConf === "string") {
            return { entity: entityConf };
        }
        return entityConf;
    });
}

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const {I:l}=j,r=()=>document.createComment(""),c$1=(o,i,n)=>{var t;const v=o._$AA.parentNode,d=void 0===i?o._$AB:i._$AA;if(void 0===n){const i=v.insertBefore(r(),d),t=v.insertBefore(r(),d);n=new l(i,t,o,o.options);}else {const l=n._$AB.nextSibling,i=n._$AM,u=i!==o;if(u){let l;null===(t=n._$AQ)||void 0===t||t.call(n,o),n._$AM=o,void 0!==n._$AP&&(l=o._$AU)!==i._$AU&&n._$AP(l);}if(l!==d||u){let o=n._$AA;for(;o!==l;){const l=o.nextSibling;v.insertBefore(o,d),o=l;}}}return n},f=(o,l,i=o)=>(o._$AI(l,i),o),s={},a=(o,l=s)=>o._$AH=l,m=o=>o._$AH,p=o=>{var l;null===(l=o._$AP)||void 0===l||l.call(o,!1,!0);let i=o._$AA;const n=o._$AB.nextSibling;for(;i!==n;){const o=i.nextSibling;i.remove(),i=o;}};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const u=(e,s,t)=>{const r=new Map;for(let l=s;l<=t;l++)r.set(e[l],l);return r},c=e(class extends i{constructor(e){if(super(e),e.type!==t.CHILD)throw Error("repeat() can only be used in text expressions")}ct(e,s,t){let r;void 0===t?t=s:void 0!==s&&(r=s);const l=[],o=[];let i=0;for(const s of e)l[i]=r?r(s,i):i,o[i]=t(s,i),i++;return {values:o,keys:l}}render(e,s,t){return this.ct(e,s,t).values}update(s,[t,r,c]){var d;const a$1=m(s),{values:p$1,keys:v}=this.ct(t,r,c);if(!Array.isArray(a$1))return this.ut=v,p$1;const h=null!==(d=this.ut)&&void 0!==d?d:this.ut=[],m$1=[];let y,x,j=0,k=a$1.length-1,w=0,A=p$1.length-1;for(;j<=k&&w<=A;)if(null===a$1[j])j++;else if(null===a$1[k])k--;else if(h[j]===v[w])m$1[w]=f(a$1[j],p$1[w]),j++,w++;else if(h[k]===v[A])m$1[A]=f(a$1[k],p$1[A]),k--,A--;else if(h[j]===v[A])m$1[A]=f(a$1[j],p$1[A]),c$1(s,m$1[A+1],a$1[j]),j++,A--;else if(h[k]===v[w])m$1[w]=f(a$1[k],p$1[w]),c$1(s,a$1[j],a$1[k]),k--,w++;else if(void 0===y&&(y=u(v,w,A),x=u(h,j,k)),y.has(h[j]))if(y.has(h[k])){const e=x.get(v[w]),t=void 0!==e?a$1[e]:null;if(null===t){const e=c$1(s,a$1[j]);f(e,p$1[w]),m$1[w]=e;}else m$1[w]=f(t,p$1[w]),c$1(s,a$1[j],t),a$1[e]=null;w++;}else p(a$1[k]),k--;else p(a$1[j]),j++;for(;w<=A;){const e=c$1(s,m$1[A+1]);f(e,p$1[w]),m$1[w++]=e;}for(;j<=k;){const e=a$1[j++];null!==e&&p(e);}return this.ut=v,a(s,m$1),T}});

let HuiEntitiesCardRowEditor = class HuiEntitiesCardRowEditor extends s$1 {
    constructor() {
        super(...arguments);
        this._entityKeys = new WeakMap();
    }
    _getKey(action) {
        if (!this._entityKeys.has(action)) {
            this._entityKeys.set(action, Math.random().toString());
        }
        return this._entityKeys.get(action);
    }
    render() {
        var _a;
        if (!this.entities || !this.hass) {
            return A;
        }
        const deviceClassesFilter = this.includeDeviceClasses
            ? '["' + ((_a = this.includeDeviceClasses) === null || _a === void 0 ? void 0 : _a.join('","')) + '"]'
            : "";
        return x `
      <h3>
        ${this.label ||
            `${this.hass.localize("ui.panel.lovelace.editor.card.generic.entities")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.required")})`}
      </h3>
      <ha-sortable handle-selector=".handle" @item-moved=${this._rowMoved}>
        <div class="entities">
          ${c(this.entities, (entityConf) => this._getKey(entityConf), (entityConf, index) => x `
              <div class="entity">
                <div class="handle">
                  <ha-svg-icon .path=${mdiDrag}></ha-svg-icon>
                </div>
                ${entityConf.type
            ? x `
                      <div class="special-row">
                        <div>
                          <span>
                            ${this.hass.localize(`ui.panel.lovelace.editor.card.entities.entity_row.${entityConf.type}`)}
                          </span>
                          <span class="secondary"
                            >${this.hass.localize("ui.panel.lovelace.editor.card.entities.edit_special_row")}</span
                          >
                        </div>
                      </div>
                    `
            : x `
                      <ha-entity-picker
                        allow-custom-entity
                        include-device-classes=${deviceClassesFilter}
                        hideClearIcon
                        label=${this.subLabel || A}
                        .hass=${this.hass}
                        .value=${entityConf.entity}
                        .index=${index}
                        @value-changed=${this._valueChanged}
                      ></ha-entity-picker>
                    `}
                <ha-icon-button
                  .label=${this.hass.localize("ui.components.entity.entity-picker.clear")}
                  .path=${mdiClose}
                  class="remove-icon"
                  .index=${index}
                  @click=${this._removeRow}
                ></ha-icon-button>
              </div>
            `)}
        </div>
      </ha-sortable>
      <ha-entity-picker
        class="add-entity"
        include-device-classes=${deviceClassesFilter}
        label=${this.subLabel || A}
        .hass=${this.hass}
        @value-changed=${this._addEntity}
      ></ha-entity-picker>
    `;
    }
    async _addEntity(ev) {
        const value = ev.detail.value;
        if (value === "") {
            return;
        }
        const newConfigEntities = this.entities.concat({
            entity: value,
        });
        ev.target.value = "";
        fireEvent(this, "entities-changed", { entities: newConfigEntities });
    }
    _rowMoved(ev) {
        ev.stopPropagation();
        const { oldIndex, newIndex } = ev.detail;
        const newEntities = this.entities.concat();
        newEntities.splice(newIndex, 0, newEntities.splice(oldIndex, 1)[0]);
        fireEvent(this, "entities-changed", { entities: newEntities });
    }
    _removeRow(ev) {
        const index = ev.currentTarget.index;
        const newConfigEntities = this.entities.concat();
        newConfigEntities.splice(index, 1);
        fireEvent(this, "entities-changed", { entities: newConfigEntities });
    }
    _valueChanged(ev) {
        const value = ev.detail.value;
        const index = ev.target.index;
        const newConfigEntities = this.entities.concat();
        if (value === "" || value === undefined) {
            newConfigEntities.splice(index, 1);
        }
        else {
            newConfigEntities[index] = Object.assign(Object.assign({}, newConfigEntities[index]), { entity: value });
        }
        fireEvent(this, "entities-changed", { entities: newConfigEntities });
    }
    _editRow(ev) {
        const index = ev.currentTarget.index;
        fireEvent(this, "edit-detail-element", {
            subElementConfig: {
                index,
                type: "row",
                elementConfig: this.entities[index],
            },
        });
    }
    static get styles() {
        return i$3 `
      ha-entity-picker {
        margin-top: 8px;
      }
      .add-entity {
        display: block;
        margin-left: 31px;
        margin-right: 71px;
        margin-inline-start: 31px;
        margin-inline-end: 71px;
        direction: var(--direction);
      }
      .entity {
        display: flex;
        align-items: center;
      }

      .entity .handle {
        padding-right: 8px;
        cursor: move; /* fallback if grab cursor is unsupported */
        cursor: grab;
        padding-inline-end: 8px;
        padding-inline-start: initial;
        direction: var(--direction);
      }
      .entity .handle > * {
        pointer-events: none;
      }

      .entity ha-entity-picker {
        flex-grow: 1;
      }

      .special-row {
        height: 60px;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-grow: 1;
      }

      .special-row div {
        display: flex;
        flex-direction: column;
      }

      .remove-icon,
      .edit-icon {
        --mdc-icon-button-size: 36px;
        color: var(--secondary-text-color);
      }

      .secondary {
        font-size: 12px;
        color: var(--secondary-text-color);
      }
    `;
    }
};
__decorate([
    n$1({ attribute: false })
], HuiEntitiesCardRowEditor.prototype, "hass", void 0);
__decorate([
    n$1({ attribute: false })
], HuiEntitiesCardRowEditor.prototype, "entities", void 0);
__decorate([
    n$1()
], HuiEntitiesCardRowEditor.prototype, "includeDeviceClasses", void 0);
__decorate([
    n$1()
], HuiEntitiesCardRowEditor.prototype, "label", void 0);
__decorate([
    n$1()
], HuiEntitiesCardRowEditor.prototype, "subLabel", void 0);
HuiEntitiesCardRowEditor = __decorate([
    e$2("elec-sankey-hui-entities-card-row-editor")
], HuiEntitiesCardRowEditor);

const POWER_LABELS = [
    "power_from_grid_entity",
    "power_to_grid_entity",
    "generation_entity",
    "hide_small_consumers",
    "invert_battery_flows",
    "battery_charge_only_from_generation",
    "independent_grid_in_out",
];
let PowerFlowCardEditor = class PowerFlowCardEditor extends s$1 {
    constructor() {
        super(...arguments);
        this._configConsumerEntities = [];
        this._configBatteryEntities = [];
        this._computeLabel = (schema) => {
            const customLocalize = setupCustomlocalize(this.hass);
            if (GENERIC_LABELS.includes(schema.name)) {
                return customLocalize(`editor.card.generic.${schema.name}`);
            }
            if (POWER_LABELS.includes(schema.name)) {
                return customLocalize(`editor.card.power_sankey.${schema.name}`);
            }
            return this.hass.localize(`ui.panel.lovelace.editor.card.generic.${schema.name}`);
        };
    }
    _computeSchema() {
        var _a;
        const showSeparateToGridOption = (_a = this._config) === null || _a === void 0 ? void 0 : _a.independent_grid_in_out;
        return [
            { name: "title", selector: { text: {} } },
            {
                name: "power_from_grid_entity",
                selector: {
                    entity: {
                        domain: "sensor",
                        device_class: "power",
                    },
                },
            },
            ...(showSeparateToGridOption
                ? [
                    {
                        name: "power_to_grid_entity",
                        selector: {
                            entity: {
                                domain: "sensor",
                                device_class: "power",
                            },
                        },
                    },
                ]
                : []),
            {
                name: "generation_entity",
                selector: {
                    entity: {
                        domain: "sensor",
                        device_class: "power",
                    },
                },
            },
            {
                name: "appearance",
                flatten: true,
                type: "expandable",
                iconPath: mdiPalette,
                schema: [
                    {
                        name: "max_consumer_branches",
                        selector: {
                            number: {
                                min: 0,
                                max: 10,
                                mode: "slider",
                            },
                        },
                    },
                    {
                        name: "hide_small_consumers",
                        selector: { boolean: {} },
                    },
                    {
                        name: "invert_battery_flows",
                        selector: { boolean: {} },
                    },
                    {
                        name: "battery_charge_only_from_generation",
                        selector: { boolean: {} },
                    },
                ],
            },
            {
                name: "advanced_options",
                flatten: true,
                type: "expandable",
                iconPath: mdiWrench,
                schema: [
                    {
                        name: "independent_grid_in_out",
                        selector: { boolean: {} },
                    },
                ],
            },
        ];
    }
    setConfig(config) {
        this._config = verifyAndMigrateConfig(config);
        this._configBatteryEntities = processEditorEntities(this._config.battery_entities);
        this._configConsumerEntities = processEditorEntities(this._config.consumer_entities);
    }
    render() {
        if (!this.hass || !this._config) {
            return A;
        }
        const customLocalize = setupCustomlocalize(this.hass);
        // Unused feature - may be reinstated if we allow renaming sub-elements.
        //  if (this._subElementEditorConfig) {
        //   return html`
        //     <hui-sub-element-editor
        //       .hass=${this.hass}
        //       .config=${this._subElementEditorConfig}
        //       @go-back=${this._goBack}
        //       @config-changed=${this._handleSubElementChanged}
        //     >
        //     </hui-sub-element-editor>
        //   `;
        // }
        const data = Object.assign({}, this._config);
        const batteryHint = data.invert_battery_flows
            ? customLocalize(`editor.card.power_sankey.battery_hint_inverted`)
            : customLocalize(`editor.card.power_sankey.battery_hint_std`);
        return x `
      <ha-form
        .hass=${this.hass}
        .data=${data}
        .schema=${this._computeSchema()}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <elec-sankey-hui-entities-card-row-editor
        .hass=${this.hass}
        id="battery-entities"
        label="Battery Entities (Optional)"
        subLabel=${batteryHint}
        .entities=${this._configBatteryEntities}
        includeDeviceClasses=${["power"]}
        @entities-changed=${this._valueChanged}
      ></elec-sankey-hui-entities-card-row-editor>
      <elec-sankey-hui-entities-card-row-editor
        .hass=${this.hass}
        id="consumer-entities"
        label="Consumer Entities (Required)"
        .entities=${this._configConsumerEntities}
        includeDeviceClasses=${["power"]}
        @entities-changed=${this._valueChanged}
        @edit-detail-element=${this._editDetailElement}
      ></elec-sankey-hui-entities-card-row-editor>
      <ha-alert alert-type="info">
        Please note that this card is in development! If you see a bug or a
        possible improvement, please use the
        <a href="https://github.com/davet2001/energy-sankey/issues"
          >issue tracker</a
        >
        to help us improve it!
      </ha-alert>
    `;
    }
    _valueChanged(ev) {
        var _a;
        ev.stopPropagation();
        if (!this._config || !this.hass) {
            return;
        }
        const target = ev.target;
        let configValue = target.configValue || ((_a = this._subElementEditorConfig) === null || _a === void 0 ? void 0 : _a.type);
        let value = target.checked !== undefined
            ? target.checked
            : target.value || ev.detail.config || ev.detail.value;
        if (!configValue && value) {
            // A form value changed. We don't know which one.
            // Could be title or anything else in the schema.
            if (value.title !== this._config.title) {
                configValue = "title";
                value = value.title;
            }
            // else if (value.theme !== this._config.theme) {
            //   configValue = "theme";
            //   value = value.theme;
            // }
            else if (value.power_from_grid_entity !== this._config.power_from_grid_entity) {
                configValue = "power_from_grid_entity";
                value = value.power_from_grid_entity;
            }
            else if (value.power_to_grid_entity !== this._config.power_to_grid_entity) {
                configValue = "power_to_grid_entity";
                value = value.power_to_grid_entity;
            }
            else if (value.generation_entity !== this._config.generation_entity) {
                configValue = "generation_entity";
                value = value.generation_entity;
            }
            else if (value.max_consumer_branches != this._config.max_consumer_branches ||
                0) {
                configValue = "max_consumer_branches";
                value = value.max_consumer_branches;
            }
            else if (value.hide_small_consumers != this._config.hide_small_consumers) {
                configValue = "hide_small_consumers";
                value = value.hide_small_consumers;
            }
            else if (value.invert_battery_flows != this._config.invert_battery_flows) {
                configValue = "invert_battery_flows";
                value = value.invert_battery_flows;
            }
            else if (value.battery_charge_only_from_generation !=
                this._config.battery_charge_only_from_generation) {
                configValue = "battery_charge_only_from_generation";
                value = value.battery_charge_only_from_generation;
            }
            else if (value.independent_grid_in_out != this._config.independent_grid_in_out) {
                configValue = "independent_grid_in_out";
                value = value.independent_grid_in_out;
            }
            else {
                console.warn("unhandled change in <ha-form>");
            }
        }
        if (configValue === "row" || (ev.detail && ev.detail.entities)) {
            const newConfigEntities = ev.detail.entities || this._configConsumerEntities.concat();
            if (configValue === "row") {
                if (!value) {
                    newConfigEntities.splice(this._subElementEditorConfig.index, 1);
                    this._goBack();
                }
                else {
                    newConfigEntities[this._subElementEditorConfig.index] = value;
                }
                this._subElementEditorConfig.elementConfig = value;
            }
            if (ev.currentTarget &&
                ev.currentTarget.id === "consumer-entities") {
                this._config = Object.assign(Object.assign({}, this._config), { consumer_entities: newConfigEntities });
                this._configConsumerEntities = processEditorEntities(this._config.consumer_entities);
            }
            else if (ev.currentTarget &&
                ev.currentTarget.id === "battery-entities") {
                this._config = Object.assign(Object.assign({}, this._config), { battery_entities: newConfigEntities });
                this._configBatteryEntities = processEditorEntities(this._config.battery_entities);
            }
        }
        else if (configValue) {
            if (value === "") {
                this._config = Object.assign({}, this._config);
                delete this._config[configValue];
            }
            else {
                this._config = Object.assign(Object.assign({}, this._config), { [configValue]: value });
            }
        }
        fireEvent(this, "config-changed", { config: this._config });
    }
    // Unused function which may be reinstated if we allow renaming sub-elements.
    //  private _handleSubElementChanged(ev: CustomEvent): void {
    //   ev.stopPropagation();
    //   if (!this._config || !this.hass) {
    //     return;
    //   }
    //   const configValue = this._subElementEditorConfig?.type;
    //   const value = ev.detail.config;
    //   if (configValue === "row") {
    //     const newConfigEntities = this._configConsumerEntities!.concat();
    //     if (!value) {
    //       newConfigEntities.splice(this._subElementEditorConfig!.index!, 1);
    //       this._goBack();
    //     } else {
    //       newConfigEntities[this._subElementEditorConfig!.index!] = value;
    //     }
    //     this._config = { ...this._config!, entities: newConfigEntities };
    //     this._configConsumerEntities = processEditorEntities(this._config!.entities);
    //   } else if (configValue) {
    //     if (value === "") {
    //       this._config = { ...this._config };
    //       delete this._config[configValue!];
    //     } else {
    //       this._config = {
    //         ...this._config,
    //         [configValue]: value,
    //       };
    //     }
    //   }
    //   this._subElementEditorConfig = {
    //     ...this._subElementEditorConfig!,
    //     elementConfig: value,
    //   };
    //   fireEvent(this, "config-changed", { config: this._config });
    // }
    _editDetailElement(ev) {
        this._subElementEditorConfig = ev.detail.subElementConfig;
    }
    _goBack() {
        this._subElementEditorConfig = undefined;
    }
};
__decorate([
    n$1({ attribute: false })
], PowerFlowCardEditor.prototype, "hass", void 0);
__decorate([
    t$1()
], PowerFlowCardEditor.prototype, "_config", void 0);
__decorate([
    t$1()
], PowerFlowCardEditor.prototype, "_configConsumerEntities", void 0);
__decorate([
    t$1()
], PowerFlowCardEditor.prototype, "_configBatteryEntities", void 0);
__decorate([
    t$1()
], PowerFlowCardEditor.prototype, "_subElementEditorConfig", void 0);
PowerFlowCardEditor = __decorate([
    e$2(POWER_CARD_EDITOR_NAME)
], PowerFlowCardEditor);

var powerFlowCardEditor = /*#__PURE__*/Object.freeze({
  __proto__: null,
  get PowerFlowCardEditor () { return PowerFlowCardEditor; }
});

/**
 * Notes on graphical layout:
 *
 * The diagram contains elements that are fixed aspect ratio on the left,
 * and variable aspect ratio on the right. This is because the split of
 * renewables into two directions doesn't tend to stretch well and still
 * look good.
 *
 * The right side of the diagram shows the rates fanning out to consumers,
 * and this is much more easy to stretch. Changing the aspec ratio does not
 * adversely affect the diagram.
 *
 * The overall SVG is designed to fit within a bounding box, of 500px less
 * two 16px margins. Some experimentation with the value of
 * SVG_LHS_VISIBLE_WIDTH is needed to get the best fit.
 *
 * With the SVG_LHS_VISIBLE_WIDTH set, a scaling factor is automatically
 * calculated, and all other graphical elements are scaled by this factor.
 *
 * All other items in the diagram are an arbitrary scale, which is
 * multiplied by the scaling factor.
 *
 */
const TERMINATOR_BLOCK_LENGTH = 50;
const GENERATION_FAN_OUT_HORIZONTAL_GAP = 50;
const CONSUMERS_FAN_OUT_VERTICAL_GAP = 50;
const BATTERIES_FAN_OUT_VERTICAL_GAP = 70;
const CONSUMER_LABEL_HEIGHT = 50;
const TARGET_SCALED_TRUNK_WIDTH = 90;
const PAD_MULTIPLIER = 1.8;
const GEN_COLOR = "#0d6a04";
const GRID_IN_COLOR = "#920e83";
const BATT_IN_COLOR = "#01f4fc";
// The below two lengths must add up to 100.
const CONSUMER_BLEND_LENGTH = 80;
const CONSUMER_BLEND_LENGTH_PRE_FAN_OUT = 20;
const GRID_BLEND_LENGTH = 30;
const BATTERY_BLEND_LENGTH = 30;
const ARROW_HEAD_LENGTH = 10;
const TEXT_PADDING = 8;
const FONT_SIZE_PX = 16;
const ICON_SIZE_PX = 24;
const SVG_LHS_VISIBLE_WIDTH = 110;
const PAD_ANTIALIAS = 0.5;
const ZERO_CHECK_TOLERANCE = 0.1;
const UNTRACKED_ID = "untracked";
const OTHER_ID = "other";
// Color mixing from here: https://stackoverflow.com/a/76752232
function hex2dec(hex) {
    const matched = hex.replace("#", "").match(/.{2}/g);
    if (!matched)
        throw new Error("Invalid hex string");
    return matched.map((n) => parseInt(n, 16));
}
function rgb2hex(r, g, b) {
    r = Math.round(r);
    g = Math.round(g);
    b = Math.round(b);
    r = Math.min(r, 255);
    g = Math.min(g, 255);
    b = Math.min(b, 255);
    return "#" + [r, g, b].map((c) => c.toString(16).padStart(2, "0")).join("");
}
function mixHexes(hex1, hex2, ratio = 0.5) {
    if (ratio > 1 || ratio < 0) {
        throw new Error("Invalid ratio: " + ratio);
    }
    const [r1, g1, b1] = hex2dec(hex1);
    const [r2, g2, b2] = hex2dec(hex2);
    const r = Math.round(r1 * ratio + r2 * (1 - ratio));
    const g = Math.round(g1 * ratio + g2 * (1 - ratio));
    const b = Math.round(b1 * ratio + b2 * (1 - ratio));
    return rgb2hex(r, g, b);
}
// End of color mixing code from SO.
function mix3Hexes(hex1, hex2, hex3, ratio1, ratio2, ratio3) {
    [ratio1, ratio2, ratio3].forEach((ratio) => {
        if (ratio > 1.0 || ratio < 0) {
            throw new Error("Invalid ratio: " + ratio);
        }
    });
    const [r1, g1, b1] = hex2dec(hex1);
    const [r2, g2, b2] = hex2dec(hex2);
    const [r3, g3, b3] = hex2dec(hex3);
    const r = Math.round(r1 * ratio1 + r2 * ratio2 + r3 * ratio3);
    const g = Math.round(g1 * ratio1 + g2 * ratio2 + g3 * ratio3);
    const b = Math.round(b1 * ratio1 + b2 * ratio2 + b3 * ratio3);
    return rgb2hex(r, g, b);
}
/**
 * Calculates the intersection point of two lines defined by their endpoints.
 * i.e. if the lines are defined by
 * (x1, y1) -> (x2, y2) and (x3, y3) -> (x4, y4),
 * As long as the two lines are not parallel, the function will return the
 * extrapolated intersection point of where the line x1,y1 -> x2,y2 intersects
 * the line x3,y3 -> x4,y4.
 */
function line_intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
    // Based on https://stackoverflow.com/a/38977789
    const denom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
    if (denom === 0) {
        // eslint-disable-next-line no-console
        console.warn("Warning: Lines do not intersect.");
        return null;
    }
    const ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denom;
    const ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denom;
    const x = x1 + ua * (x2 - x1);
    const y = y1 + ua * (y2 - y1);
    const seg1 = ua >= 0 && ua <= 1;
    const seg2 = ub >= 0 && ub <= 1;
    return [x, y, seg1, seg2];
}
/**
 * Draws a flow based on the corners of the start and end.
 * Rather than draw a curve between two points, this function takes the
 * corners of a large stripe between two end lines, and constructs a 4-corner
 * bezier shape to join them. This is useful for creating a flow map where
 * there are significant changes in direction but we don't want curves to
 * overlap.
 * An extreme fan-out a spread out list could result in significant overlap
 * if this were to be constructed with curves of constant width.
 */
function renderFlowByCorners(startLX, startLY, startRX, startRY, endLX, endLY, endRX, endRY, classname = "", color = null) {
    // Don't attempt to draw curves for very narrow lines
    if (Math.sqrt((startLX - startLY) ** 2 + (startRX - startRY) ** 2) < 1 ||
        Math.sqrt((endLX - endLY) ** 2 + (endRX - endRY) ** 2) < 1) {
        return b ``;
    }
    // Find points to make a line along the the half way fold
    // between the start and the end ('Mirror' line).
    const pointAX = (startLX + endLX) / 2;
    const pointAY = (startLY + endLY) / 2;
    const pointBX = (startRX + endRX) / 2;
    const pointBY = (startRY + endRY) / 2;
    // The bezier points are defined by the intersection between:
    // - the lines perpendicular to the ends
    // - the mirror line.
    const ret1 = line_intersect(startLX, startLY, startLX - (startRY - startLY), startLY - (startLX - startRX), pointAX, pointAY, pointBX, pointBY);
    const ret2 = line_intersect(endLX, endLY, endLX + (endRY - endLY), endLY + (endLX - endRX), pointAX, pointAY, pointBX, pointBY);
    const ret3 = line_intersect(endRX, endRY, endRX + (endRY - endLY), endRY + (endLX - endRX), pointAX, pointAY, pointBX, pointBY);
    const ret4 = line_intersect(startRX, startRY, startRX - (startRY - startLY), startRY - (startLX - startRX), pointAX, pointAY, pointBX, pointBY);
    if (ret1 == null || ret2 == null || ret3 == null || ret4 == null) {
        // eslint-disable-next-line no-console
        console.warn("Warning: render flow failed.");
        return b ``;
    }
    const [bezierStartLX, bezierStartLY, ,] = ret1;
    const [bezierEndLX, bezierEndLY, ,] = ret2;
    const [bezierEndRX, bezierEndRY, ,] = ret3;
    const [bezierStartRX, bezierStartRY, ,] = ret4;
    const fillspec = color ? "fill:" + color : "";
    const svg_ret = b `
  <path
      class="flow ${classname}"
      d="M ${startLX},${startLY}
      C ${bezierStartLX},${bezierStartLY} ${bezierEndLX},${bezierEndLY} ${endLX},${endLY}
      L ${endRX},${endRY}
      C ${bezierEndRX},${bezierEndRY} ${bezierStartRX},${bezierStartRY} ${startRX},${startRY} Z"
      style="${fillspec}"
  />
`;
    return svg_ret;
}
function renderRect(x, y, width, height, classname, color = null) {
    const styleString = color ? `fill:${color};fill-opacity:1` : "";
    return b `
  <rect
  class=${classname}
  x="${x}"
  y="${y}"
  height="${height}"
  width="${width}"
  style=${styleString}
  />`;
}
/**
 * Generic render for rects where flow blends from one colour to another.
 */
function renderBlendRect(startLX, startLY, startRX, startRY, endLX, endLY, endRX, endRY, startColor, endColor, id) {
    if (!((startLX == startRX && endLX == endRX) ||
        (startLY == startRY && endLY == endRY))) {
        console.error("Unsupported blend flow dimensions - only horiz/vert are implemented.");
        return A;
    }
    const horizontal = startLX == startRX;
    let height, width;
    let x1, y1, x2, y2;
    if (horizontal) {
        height = Math.abs(startLY - startRY);
        width = Math.abs(startLX - endLX);
        y1 = "0%";
        y2 = "0%";
        x1 = startLX < endLX ? "0%" : "100%"; // Left to right.
        x2 = startLX < endLX ? "100%" : "0%"; // Rigth to left.
    }
    else {
        height = Math.abs(startLY - endLY);
        width = Math.abs(startLX - startRX);
        x1 = "0%";
        x2 = "0%";
        y1 = startLY < endLY ? "0%" : "100%"; // Top to bottom.
        y2 = startLY < endLY ? "100%" : "0%"; // Bottom to top.
    }
    const topLeftX = Math.min(startLX, startRX, endLX, endRX);
    const topLeftY = Math.min(startLY, startRY, endLY, endRY);
    const svgRet = b `
    <defs>
      <linearGradient id="${id}_grad" x1=${x1} y1=${y1} x2=${x2} y2=${y2}>
        <stop offset="0%" style="stop-color:${startColor};stop-opacity:1" />
        <stop offset="100%" style="stop-color:${endColor};stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect
      id="${id}"
      x="${topLeftX}"
      y="${topLeftY}"
      height="${height}"
      width="${width}"
      fill="url(#${id}_grad)"
      style="fill-opacity:1"
    />
  `;
    return svgRet;
}
/**
 * Sorts ElecRoute objects by their rate in ascending or descending order.
 */
function sortRoutesByRate(routes, ascending) {
    const routesSorted = Object.values(routes).sort((a, b) => {
        return ascending
            ? (a.rate || 0) - (b.rate || 0)
            : (b.rate || 0) - (a.rate || 0);
    });
    let ret = {};
    for (const val of routesSorted) {
        if (!val.id) {
            console.warn("Skipping route without id:", val);
            continue;
        }
        ret[val.id] = val;
    }
    return ret;
}
function sortRoutesByRateDescending(routes) {
    return sortRoutesByRate(routes, false);
}
function sortRoutesByRateAscending(routes) {
    return sortRoutesByRate(routes, true);
}
/**
 * Creates a flow map graphic showing the flow of electricity.
 *
 * In general, the aim of this class is to display a coherent and informative
 * visual representation of the flow of electricity. If a strange occurence
 * occurs, such as consumption exceeding total input power, the class should
 * attempt to display a sensible visual, including phantom sources or
 * consumers to convey a complete diagram.
 *
 * The reason for this is that the class is likely to receive asynchronous
 * updates from different sensors. It must display a glitch-free best
 * approximation of the reality until more information becomes available.
 *
 * Internally, the class deliberately avoids making reference to power or
 * energy because it can be used for either. By populating with
 * power (W) values it represents power flow. By populating with energy (kWh)
 * values it represents the energy flow over a period of time.
 * 'rate' is used as a generic variable name that can be power/energy.
 *
 * Architecture note:
 * While written for home assistant, this class deliberately makes no reference
 * to HA and is decoupled from it. It is designed to be subclassed within HA.
 *
 * The block of code below is useful when debugging the svg layouts.

* function debugPoint(x: number, y: number, label: string): TemplateResult {
 *   return svg`
 *     <circle cx="${x}" cy="${y}" r="3" fill="#22DDDD" />
 *     <text x="${x - 13}" y="${y - 6}" font-size="10px">${label}</text>
 * `;
 * }
 * ${debugPoint(x0, y0, "x0,y0")}
*  ${debugPoint(x1 - 20, y1, "x1,y1")}
*  ${debugPoint(x2 - 20, y2, "x2,y2")}
*  ${debugPoint(x10, y10, "x10,y10")}
*  ${debugPoint(x1 - 20, y5, "x1,y5")}
*  ${debugPoint(x1 - 20, y4, "x1,y4")}
*  ${debugPoint(x14, y0, "x14,y0")} ${debugPoint(x15, y0, "x15,y0")}
*  ${debugPoint(x16, y0, "x16,y0")} ${debugPoint(x10, y2, "x10,y2")}
*  ${debugPoint(x10, y11, "x10,y11")}
*  ${debugPoint(x10, y5, "x10,y5")}
*  ${debugPoint(x10, y13, "x10,y13")}
*  ${debugPoint(x17, y17, "x17,y17")}
*  ${debugPoint(x14, y17, "x14,y17")}
*  ${debugPoint(x15, y17, "x15,y17")}
*  ${debugPoint(x20, y17, "x20,y17")}
*  ${debugPoint(x21, y17, "x21,y17")}
 */
let ElecSankey = class ElecSankey extends s$1 {
    constructor() {
        super(...arguments);
        this.unit = "kWh";
        this.generationInRoutes = {};
        this.consumerRoutes = {};
        this.batteryRoutes = {};
        this.maxConsumerBranches = 0;
        this.hideConsumersBelow = 0;
        this.batteryChargeOnlyFromGeneration = false;
        this._rateToWidthMultplier = 0.2;
        this._untrackedConsumerRoute = {
            id: undefined,
            text: "Untracked",
            rate: 0,
        };
        this._gridExport = 0;
        this._batteriesToGridRate = 0;
        this._batteriesToConsumersRate = 0;
        this._gridToBatteriesRate = 0;
        this._gridToConsumersRate = 0;
        this._generationToBatteriesRate = 0;
        this._generationToGridRate = 0;
        this._generationToConsumersRate = 0;
        this._localize = (key, fallBack) => {
            // This is a simple localizer that can be overridden by the parent class.
            return fallBack || key;
        };
    }
    _generationTrackedTotal() {
        let totalGen = 0;
        for (const key in this.generationInRoutes) {
            if (Object.prototype.hasOwnProperty.call(this.generationInRoutes, key)) {
                totalGen += this.generationInRoutes[key].rate || 0;
            }
        }
        return totalGen;
    }
    _generationPhantom() {
        return this._phantomGenerationInRoute
            ? this._phantomGenerationInRoute.rate
            : 0;
    }
    _generationTotal() {
        return this._generationTrackedTotal() + this._generationPhantom();
    }
    _gridImport(excludePhantom = false) {
        if (this.gridInRoute) {
            return this.gridInRoute.rate > 0 ? this.gridInRoute.rate : 0;
        }
        else if (this.gridOutRoute) {
            return this.gridOutRoute.rate < 0 ? -this.gridOutRoute.rate : 0;
        }
        else if (!excludePhantom && this._phantomGridInRoute) {
            return this._phantomGridInRoute.rate;
        }
        return 0;
    }
    _consumerTrackedTotal() {
        let total = 0;
        for (const id in this.consumerRoutes) {
            if (Object.prototype.hasOwnProperty.call(this.consumerRoutes, id)) {
                total += this.consumerRoutes[id].rate || 0;
            }
        }
        return total;
    }
    _batteryOutTotal() {
        /**
         * Battery rate out of the electrical system (i.e. charging).
         */
        let total = 0;
        for (const id in this.batteryRoutes) {
            if (Object.prototype.hasOwnProperty.call(this.batteryRoutes, id)) {
                const inRate = this.batteryRoutes[id].in.rate || 0;
                const outRate = this.batteryRoutes[id].out.rate || 0;
                if (outRate > 0) {
                    total += outRate;
                }
                else if (outRate < 0) {
                    total -= inRate;
                }
            }
        }
        return total;
    }
    _batteryInTotal() {
        /**
         * Battery rate in to the electrical system (i.e. discharging)
         */
        let total = 0;
        for (const id in this.batteryRoutes) {
            if (Object.prototype.hasOwnProperty.call(this.batteryRoutes, id)) {
                const inRate = this.batteryRoutes[id].in.rate || 0;
                const outRate = this.batteryRoutes[id].out.rate || 0;
                if (inRate > 0) {
                    total += inRate;
                }
                else if (outRate < 0) {
                    total -= outRate;
                }
            }
        }
        return total;
    }
    _recalculate() {
        /**
         * Note that it is not 100% possible to fully determine the actual flow of
         * electrons in all secenarios.
         *
         * The goal of this strategy is to present a viable diagram given the
         * input data, with a leaning in specific directions where there is
         * uncertainty. The most complex version is for energy flow, which can
         * accumulate in both directions for certain flows (grid, batteries etc).
         * The calculation is based on energy. Power flow is a simpler case, with
         * each flow only possible to be in or out (not both), but they are both
         * calculated using the same algorithm, documented inline below.
         */
        const gridImport = this._gridImport(true);
        // Determine the grid import and export
        if (this.gridOutRoute) {
            this._gridExport =
                this.gridOutRoute.rate > 0 ? this.gridOutRoute.rate : 0;
        }
        else if (this.gridInRoute) {
            this._gridExport = this.gridInRoute.rate < 0 ? -this.gridInRoute.rate : 0;
        }
        else {
            this._gridExport = 0;
        }
        const generationTrackedTotal = this._generationTrackedTotal();
        const consumerTrackedTotal = this._consumerTrackedTotal();
        const batteryInTotal = this._batteryInTotal();
        const batteriesOutTotal = this._batteryOutTotal();
        // Balance the books.
        let phantomGridIn = 0;
        let phantomGeneration = 0;
        let untrackedConsumer = 0;
        let batteriesToGridTemp = 0;
        let generationToGridTemp = 0;
        let gridToBatteriesTemp = 0;
        let generationToBatteriesTemp = 0;
        let gridToConsumersTemp = 0;
        // Check if we are exporting more than we are generating plus flowing from
        // batteries.
        let x = this._gridExport - generationTrackedTotal - batteryInTotal;
        if (x > 0) {
            // If this is the case, we create a phantom generation source
            // of sufficient value to balance the equation, and assume that all
            // battery power is going to the grid.
            phantomGeneration = x;
            batteriesToGridTemp = batteryInTotal;
        }
        else {
            // If we aren't exporting more than generating + discharging, the diagram
            // is provisionally viable without a phantom generation source.
            // *For now* we assume the maximum possible split of battery rate that
            // could go the grid is going to the grid, the rest goes to consumers.
            if (this._gridExport > batteryInTotal) {
                batteriesToGridTemp = batteryInTotal;
            }
            else {
                batteriesToGridTemp = this._gridExport;
            }
        }
        // Whatever battery out is not going to the grid must be going to consumers.
        let batteriesToConsumersTemp = batteryInTotal - batteriesToGridTemp;
        // The user can specify that their batteries are only charged from
        // generation.
        if (this.batteryChargeOnlyFromGeneration) {
            // In this case, we assume that all the flow into the
            // batteries is coming from generation, and the grid is not contributing
            // at all.
            gridToBatteriesTemp = 0;
            generationToBatteriesTemp = batteriesOutTotal;
        }
        else {
            // Otherwise, we proceed on the basis that the full flow into the battery
            // is coming from the grid (as far as the grid input allows). If there is
            // more flow coming into the batteries than the grid would allow, we
            // assume that the additional flow is coming from generation.
            if (gridImport > batteriesOutTotal) {
                gridToBatteriesTemp = batteriesOutTotal;
            }
            else {
                gridToBatteriesTemp = gridImport;
                generationToBatteriesTemp = batteriesOutTotal - gridToBatteriesTemp;
            }
        }
        // If we have exceeded the total generation by doing this, we must
        // recalculate the phantom generation source.
        x =
            this._gridExport +
                generationToBatteriesTemp -
                (generationTrackedTotal + gridToBatteriesTemp + batteryInTotal);
        if (x > 0) {
            phantomGeneration = x;
        }
        // All grid input that is not going to batteries must be going to
        // consumers, so we calculate that next.
        gridToConsumersTemp = gridImport - gridToBatteriesTemp;
        // If we are exporting more than is coming from the batteries, we
        // must be generating this amount. We don't know whether it is phantom
        // or real yet.
        if (this._gridExport > batteryInTotal) {
            generationToGridTemp = this._gridExport - batteryInTotal;
        }
        else {
            generationToGridTemp = 0;
        }
        // Now that we have generation to grid & generation to batteries, the
        // remaining generation must be going to consumers, so we calculate that.
        let generationToConsumersTemp = generationTrackedTotal - generationToGridTemp - generationToBatteriesTemp;
        // Clip negative values.
        if (generationToConsumersTemp < 0) {
            generationToConsumersTemp = 0;
        }
        // If the generation to (grid + batteries + consumers) is more than
        // the total generation, we need to recalulate the phantom generation
        // source.
        x =
            generationToGridTemp +
                generationToBatteriesTemp +
                generationToConsumersTemp -
                generationTrackedTotal;
        if (x > 0) {
            phantomGeneration = x;
        }
        // The three items add together to give the consumer total.
        let consumerTotalA = generationToConsumersTemp +
            gridToConsumersTemp +
            batteriesToConsumersTemp;
        // Do we have an excess of consumption?
        x = consumerTrackedTotal - consumerTotalA;
        if (x > ZERO_CHECK_TOLERANCE) {
            // There is an unknown energy source.
            if (this.gridInRoute === undefined && this.gridOutRoute === undefined) {
                // If we aren't tracking grid sources, create a phantom one.
                phantomGridIn = x;
                gridToConsumersTemp = x;
                consumerTotalA =
                    generationToConsumersTemp +
                        gridToConsumersTemp +
                        batteriesToConsumersTemp;
            }
        }
        // If the generation to (grid + batteries + consumers) is more than
        // the total generation, we need to recalulate the phantom generation
        // source again
        x =
            generationToGridTemp +
                generationToBatteriesTemp +
                generationToConsumersTemp -
                generationTrackedTotal;
        if (x > ZERO_CHECK_TOLERANCE) {
            phantomGeneration = x;
            // generationToConsumersTemp =
            //   generationTrackedTotal +
            //   phantomGeneration -
            //   (generationToGridTemp + generationToBatteriesTemp);
        }
        if (this._gridExport > batteryInTotal) {
            generationToGridTemp = this._gridExport - batteryInTotal;
        }
        else {
            generationToGridTemp = 0;
        }
        consumerTotalA =
            generationToConsumersTemp +
                gridToConsumersTemp +
                batteriesToConsumersTemp;
        // If we are still sending more to consumers than we are tracking, we must
        // have untracked consumers (which will almost always be the case).
        x = consumerTotalA - consumerTrackedTotal;
        if (x > 0) {
            // In this case, calculate the size of the untracked consumer.
            untrackedConsumer = x;
        }
        else {
            // Conversely, if we are consuming more than we are sending to consumers,
            // we have not balanced the books - there must be more generation, so add
            // add to the generationToConsumers flow path.
            generationToConsumersTemp += -x;
            // ... and recalculate the phantom generation.
            phantomGeneration =
                generationToConsumersTemp +
                    generationToBatteriesTemp +
                    generationToGridTemp -
                    generationTrackedTotal;
        }
        this._phantomGridInRoute =
            phantomGridIn > 0
                ? {
                    text: "Unknown source",
                    icon: mdiHelpRhombus,
                    rate: phantomGridIn,
                }
                : undefined;
        this._phantomGenerationInRoute =
            phantomGeneration > 0.01
                ? {
                    text: "Unknown source",
                    icon: mdiHelpRhombus,
                    rate: phantomGeneration,
                }
                : undefined;
        // if we aren't tracking any consumers, use the word 'Home'
        const untrackedName = consumerTrackedTotal !== 0
            ? this._localize("untracked", "Untracked")
            : this._localize("home", "Home");
        this._untrackedConsumerRoute = {
            id: UNTRACKED_ID,
            text: untrackedName,
            rate: untrackedConsumer > 0 ? untrackedConsumer : 0,
        };
        /**
         * Calculate and update a scaling factor to make the UI look sensible.
         * Since there is no limit to the value of input/output rates, the scaling
         * needs to be dynamic. This function calculates the scaling factor based
         * on a sensible maximum 'trunk' width.
         */
        const genTotal = generationTrackedTotal + phantomGeneration;
        const gridInTotal = gridImport +
            (this._phantomGridInRoute ? this._phantomGridInRoute.rate : 0);
        const consumerTotal = consumerTrackedTotal +
            (this._untrackedConsumerRoute ? this._untrackedConsumerRoute.rate : 0);
        this._batteriesToGridRate = batteriesToGridTemp;
        this._batteriesToConsumersRate = batteriesToConsumersTemp;
        const batteriesTotal = batteriesToGridTemp + batteriesToConsumersTemp;
        this._generationToConsumersRate = generationToConsumersTemp;
        this._generationToBatteriesRate = generationToBatteriesTemp;
        this._generationToGridRate = generationToGridTemp;
        this._gridToBatteriesRate = gridToBatteriesTemp;
        this._gridToConsumersRate = gridToConsumersTemp;
        const widest_trunk = Math.max(genTotal, gridInTotal, consumerTotal, batteriesTotal, 1.0);
        this._rateToWidthMultplier = TARGET_SCALED_TRUNK_WIDTH / widest_trunk;
    }
    _rateToWidth(rate) {
        const value = rate * this._rateToWidthMultplier;
        return value > 1 ? value : 1;
    }
    _generationInFlowWidth() {
        const total = this._generationTrackedTotal() + this._generationPhantom();
        if (total === 0) {
            return 0;
        }
        return this._rateToWidth(total);
    }
    _generationToConsumersFlowWidth() {
        if (this._generationToConsumersRate == 0 &&
            !this.generationInRoutes.length) {
            return 0;
        }
        const rate = this._generationToConsumersRate;
        return rate ? this._rateToWidth(rate) : 0;
    }
    _generationToGridFlowWidth() {
        const rate = this._generationToGridRate;
        return rate ? this._rateToWidth(rate) : 0;
    }
    _gridOutFlowWidth() {
        const rate = this._gridExport;
        return rate ? this._rateToWidth(rate) : 0;
    }
    _gridToConsumersFlowWidth() {
        const rate = this._gridToConsumersRate;
        return rate ? this._rateToWidth(rate) : 0;
    }
    _batteriesToGridFlowWidth() {
        const rate = this._batteriesToGridRate;
        return rate ? this._rateToWidth(rate) : 0;
    }
    _batteryToConsumersFlowWidth() {
        const rate = this._batteriesToConsumersRate;
        return rate ? this._rateToWidth(rate) : 0;
    }
    _generationToBatteryFlowWidth() {
        const rate = this._generationToBatteriesRate;
        return rate ? this._rateToWidth(rate) : 0;
    }
    _gridToBatteriesFlowWidth() {
        const rate = this._gridToBatteriesRate;
        return rate ? this._rateToWidth(rate) : 0;
    }
    _genColor() {
        const computedStyles = getComputedStyle(this);
        const ret = computedStyles.getPropertyValue("--generation-color").trim();
        return ret || GEN_COLOR;
    }
    _gridColor() {
        const computedStyles = getComputedStyle(this);
        const ret = computedStyles.getPropertyValue("--grid-in-color").trim();
        return ret || GRID_IN_COLOR;
    }
    _battColor() {
        const computedStyles = getComputedStyle(this);
        const ret = computedStyles.getPropertyValue("--batt-in-color").trim();
        return ret || BATT_IN_COLOR;
    }
    _generateLabelDiv(_id, icon, _name, valueA, valueB = undefined, _valueAColor = undefined, _valueBColor = undefined, _displayClass = undefined, _ = true) {
        const valueARounded = Math.round(valueA * 10) / 10;
        const valueBRounded = valueB ? Math.round(valueB * 10) / 10 : undefined;
        return x `<div class="label">
      ${icon
            ? b `<svg x="0" y="0" height=${ICON_SIZE_PX}>
              <path d=${icon} />
            </svg>
            <br />`
            : A}${valueBRounded
            ? x `
            OUT ${valueBRounded} ${this.unit}<br />
            IN ${valueARounded} ${this.unit}
          `
            : x `${_name}<br />${valueARounded} ${this.unit} `}
    </div> `;
    }
    _generationToConsumersRadius() {
        return 50 + this._generationToConsumersFlowWidth();
    }
    renderGenerationToConsumersFlow(x0, y0, x15, x16, x1, y1, y2, svgScaleX) {
        const totalGenWidth = this._generationInFlowWidth();
        const genToConsWidth = this._generationToConsumersFlowWidth();
        const genFanOutGap = GENERATION_FAN_OUT_HORIZONTAL_GAP / svgScaleX;
        if (genToConsWidth === 0 && !Object.keys(this.generationInRoutes)) {
            return [[A], A];
        }
        const count = Object.keys(this.generationInRoutes).length +
            (this._phantomGenerationInRoute !== undefined ? 1 : 0);
        const fanOutWidth = totalGenWidth + (count - 1) * genFanOutGap;
        let xA = x0 + totalGenWidth / 2 - fanOutWidth / 2;
        let xB = x0;
        const svgArray = [];
        const divArray = [];
        const startTerminatorY = 0;
        let phantomRate = 0;
        const routes = structuredClone(this.generationInRoutes);
        if (this._phantomGenerationInRoute !== undefined) {
            routes.phantom = this._phantomGenerationInRoute;
            phantomRate = this._phantomGenerationInRoute.rate;
        }
        let i = 0;
        // eslint-disable-next-line guard-for-in
        for (const key in routes) {
            if (Object.prototype.hasOwnProperty.call(routes, key)) {
                // const friendlyName = routes.text;
                let width = 0;
                const rate = routes[key].rate || 0; // Handle undefined (NaN) rates.
                // Most of the time, if the rate is zero, we don't want to draw it.
                // Exception is if we have a >0 phantom source.
                if (rate || phantomRate > 0) {
                    width = this._rateToWidth(rate);
                    svgArray.push(renderFlowByCorners(xA + width, startTerminatorY, xA, startTerminatorY, xB + width, startTerminatorY + TERMINATOR_BLOCK_LENGTH, xB, startTerminatorY + TERMINATOR_BLOCK_LENGTH, "generation"));
                    svgArray.push(b `
            <polygon points="${xA + width},${startTerminatorY}
            ${xA},${startTerminatorY},
            ${xA + width / 2},${startTerminatorY + ARROW_HEAD_LENGTH}"
            class="tint"/>
          `);
                }
                const midX = xA + width / 2;
                const LABEL_WIDTH = 72;
                const icon = routes[key].icon;
                const id = routes[key].id || undefined;
                if (icon) {
                    divArray.push(x `<div
              class="label elecroute-label-horiz"
              style="left: ${midX * svgScaleX -
                        (i * LABEL_WIDTH) /
                            2}px; flex-basis: ${LABEL_WIDTH}px; margin: 0 0 0 ${-LABEL_WIDTH /
                        2}px;"
            >
              ${this._generateLabelDiv(id, icon, undefined, rate)}
            </div>`);
                }
                xA += width + genFanOutGap;
                xB += width;
            }
            i++;
        }
        const generatedFlowPath2 = genToConsWidth > 0
            ? renderFlowByCorners(x16, y0 - PAD_ANTIALIAS, x15, y0 - PAD_ANTIALIAS, x1, y1, x1, y2, "generation")
            : b ``;
        const svgRet = b `
    ${svgArray}
    ${generatedFlowPath2}
    `;
        return [divArray, svgRet];
    }
    renderGenerationToGridFlow(x0, y0, x11, y10, svgScaleX) {
        const arrow_head_length = ARROW_HEAD_LENGTH / svgScaleX;
        const width = this._generationToGridFlowWidth();
        if (width === 0) {
            return b ``;
        }
        const generatedFlowPath = renderFlowByCorners(x0 + width, y0, x0, y0, x11, y10 + width, x11, y10, "generation");
        return b `
    ${generatedFlowPath}
    ${renderRect(arrow_head_length, y10, x11 - arrow_head_length, width, "generation")}
  `;
    }
    renderGridOutFlowArrow(x10, y10, y2, svgScaleX, color) {
        const arrow_head_length = ARROW_HEAD_LENGTH / svgScaleX;
        if (this._gridOutFlowWidth() === 0) {
            return A;
        }
        return b `
    <polygon
      class="grid-out-arrow"
      points="${x10},${y10}
      ${x10},${y2}
      ${x10 - arrow_head_length},${(y10 + y2) / 2}"
      style="${color ? `fill:${color};fill-opacity:1` : ``}"
    />
  `;
    }
    renderGenerationToBatteriesFlow(x14, x15, y0, y17) {
        if (this._generationToBatteryFlowWidth() === 0) {
            return A;
        }
        return b `
    <rect
      class="generation"
      x="${x14}"
      y="${y0}"
      height="${y17 - y0}"
      width="${x15 - x14}"
    />
    `;
    }
    renderGridInFlow(y2, y13, y10, svgScaleX) {
        const gridRoute = this.gridInRoute ||
            this.gridOutRoute ||
            this._phantomGridInRoute ||
            undefined;
        if (!gridRoute) {
            return [A, A];
        }
        const arrow_head_length = ARROW_HEAD_LENGTH / svgScaleX;
        const in_width = y13 - y2;
        const rateA = this._gridImport();
        const rateB = this._gridExport;
        const midY = (y10 + y13) / 2;
        const divHeight = ICON_SIZE_PX + TEXT_PADDING + FONT_SIZE_PX * 2;
        const hasGridExport = Object.keys(this.batteryRoutes).length > 0 ||
            Object.keys(this.generationInRoutes).length > 0;
        const divRet = x `<div
      width=${ICON_SIZE_PX * 2}
      class="label elecroute-label-grid"
      style="left: 0px; height:${divHeight}px;
      top: ${midY * svgScaleX}px; margin: ${-divHeight / 2}px 0 0 0px;"
    >
      ${this._generateLabelDiv(gridRoute.id, gridRoute.icon || mdiTransmissionTower, undefined, rateA, rateB, undefined, undefined, "grid", hasGridExport)}
    </div>`;
        const svgRet = b `
    <rect
      class="grid"
      id="grid-in-rect"
      x="${0}"
      y="${y2}"
      height="${in_width}"
      width="${arrow_head_length}"
    />
    <polygon points="${0},${y2}
    ${0},${y2 + in_width}
    ${arrow_head_length},${y2 + in_width / 2}"
    class="tint"/>
  `;
        return [divRet, svgRet];
    }
    renderGridToConsumersFlow(x10, y2, y5, x1) {
        if (this._gridToConsumersFlowWidth() === 0) {
            return A;
        }
        return b `
    <rect
      class="grid"
      id="grid-to-cons-rect"
      x="${x10}"
      y="${y2}"
      height="${y5 - y2}"
      width="${x1 - x10}"
    />`;
    }
    renderGridToBatteriesFlow(x10, y5, y13, x17, y17, x14) {
        if (this._gridToBatteriesFlowWidth() === 0) {
            return A;
        }
        return renderFlowByCorners(x10, y5, x10, y13, x14, y17, x17, y17, "grid");
    }
    renderBatteriesToConsumersFlow(x1, y5, y4, x20, x21, y17) {
        if (this._batteryToConsumersFlowWidth() === 0) {
            return A;
        }
        return renderFlowByCorners(x20, y17, x21, y17, x1, y5, x1, y4, "battery");
    }
    renderBatteriesToGridFlow(x15, y17, x20, x11, y2, y11) {
        if (this._batteriesToGridFlowWidth() === 0) {
            return A;
        }
        return renderFlowByCorners(x15, y17, x20, y17, x11, y2, x11, y11, "battery");
    }
    renderGenToGridBlendFlow(x10, y10, x11, y11, endColor) {
        if (!this._generationToGridFlowWidth()) {
            return A;
        }
        return renderBlendRect(x11, y11, x11, y10, x10, y11, x10, y10, this._genColor(), endColor, "gen-grid-out-blend-rect");
    }
    renderBatteriesToGridBlendFlow(x10, y11, x11, y2, endColor) {
        if (!this._batteriesToGridFlowWidth()) {
            return A;
        }
        return renderBlendRect(x11, y2, x11, y11, x10, y2, x10, y11, this._battColor(), endColor, "batt-grid-out-blend-rect");
    }
    renderGenInBlendFlow(y1, y2, endColor) {
        if (!this._generationToConsumersFlowWidth()) {
            return A;
        }
        return renderBlendRect(0, y1, 0, y2, CONSUMER_BLEND_LENGTH + 1, y1, CONSUMER_BLEND_LENGTH + 1, y2, this._genColor(), endColor, "gen-in-blend-rect");
    }
    renderGridInBlendFlow(y2, y5, endColor) {
        return renderBlendRect(0, y2, 0, y5, CONSUMER_BLEND_LENGTH + 1, y2, CONSUMER_BLEND_LENGTH + 1, y5, this._gridColor(), endColor, "grid-in-blend-rect");
    }
    renderBatteriesToConsumersBlendFlow(y5, y4, endColor) {
        if (this._batteryToConsumersFlowWidth() === 0) {
            return A;
        }
        return renderBlendRect(0, y5, 0, y4, CONSUMER_BLEND_LENGTH + 1, y5, CONSUMER_BLEND_LENGTH + 1, y4, this._battColor(), endColor, "batt-in-blend-rect");
    }
    _renderBlendedFlowPreFanOut(y1, y4, color) {
        const svgRet = b `
    <rect
      id="blended-flow-pre-fan-out-rect"
      x=${CONSUMER_BLEND_LENGTH}
      y="${y1}"
      height="${y4 - y1}"
      width="${CONSUMER_BLEND_LENGTH_PRE_FAN_OUT + 1}"
      style="fill:${color};fill-opacity:1"
    />
  `;
        return svgRet;
    }
    _getExtrasLength() {
        return this.constructor.extrasLength;
    }
    _insertExtras(_topLeftX, _topLeftY, _width, _color, _route) {
        return b ``;
    }
    _renderConsumerFlow(topLeftX, topLeftY, topRightX, topRightY, consumer, color, svgScaleX, count = 1) {
        var _a;
        const width = this._rateToWidth(consumer.rate);
        const yEnd = topRightY + width / 2;
        const svgFlow = renderFlowByCorners(topLeftX, topLeftY, topLeftX, topLeftY + width, topRightX + PAD_ANTIALIAS, topRightY, topRightX + PAD_ANTIALIAS, topRightY + width, "consumer", color);
        const extrasLength = this._getExtrasLength();
        const svgExtras = this._insertExtras(topRightX, topRightY, width, color, consumer);
        const id = [UNTRACKED_ID, OTHER_ID].includes((_a = consumer.id) !== null && _a !== void 0 ? _a : "")
            ? undefined
            : consumer.id;
        const divHeight = CONSUMER_LABEL_HEIGHT;
        const divRet = x `<div
      class="label elecroute-label-consumer"
      style="height:${divHeight}px;
      top: ${yEnd * svgScaleX -
            (count * divHeight) / 2}px; margin: ${-divHeight / 2}px 0 0 0;"
    >
      ${this._generateLabelDiv(id, undefined, consumer.text, consumer.rate)}
    </div>`;
        const svgArrow = b `
      <polygon points="${extrasLength},${yEnd - width / 2}
        ${extrasLength},${yEnd + width / 2}
        ${extrasLength + ARROW_HEAD_LENGTH},${yEnd}"
        style="fill:${color}" />
    `;
        const bottomLeftY = topLeftY + (consumer.rate !== 0 ? width : 0);
        const bottomRightY = topRightY + width;
        return [divRet, svgFlow, svgExtras, svgArrow, bottomLeftY, bottomRightY];
    }
    _getGroupedConsumerRoutes() {
        let consumerRoutes = sortRoutesByRateDescending(this.consumerRoutes);
        let groupedConsumer = {
            id: OTHER_ID,
            text: this._localize("other", "Other"),
            rate: 0,
        };
        let groupedConsumerExists = false;
        if (this.hideConsumersBelow > 0) {
            for (const key in consumerRoutes) {
                let rate = consumerRoutes[key].rate || 0; // Treat undef/NaN as 0
                if (rate < this.hideConsumersBelow) {
                    groupedConsumer.rate += rate;
                    groupedConsumerExists = true;
                    delete consumerRoutes[key];
                }
            }
        }
        if (this.maxConsumerBranches !== 0) {
            const numConsumerRoutes = Object.keys(consumerRoutes).length;
            if (numConsumerRoutes > this.maxConsumerBranches - 1) {
                let otherCount = numConsumerRoutes + 2 - this.maxConsumerBranches;
                const ascendingConsumerRoutes = sortRoutesByRateAscending(consumerRoutes);
                for (const route of Object.values(ascendingConsumerRoutes)) {
                    if (otherCount > 0) {
                        groupedConsumer.rate += route.rate || 0;
                        groupedConsumerExists = true;
                        if (route.id) {
                            delete consumerRoutes[route.id];
                        }
                        otherCount--;
                    }
                }
            }
        }
        // Re-sort the consumer routes - deleting can break the order (issue #128).
        consumerRoutes = sortRoutesByRateDescending(consumerRoutes);
        if (groupedConsumerExists) {
            consumerRoutes[groupedConsumer.id] = groupedConsumer;
        }
        return consumerRoutes;
    }
    _renderConsumerFlows(y1, y4, color, svgScaleX) {
        const divRetArray = [];
        const svgFlowArray = [];
        const svgExtraArray = [];
        const svgArrowArray = [];
        const xLeft = 0;
        const xRight = 100;
        let i = 0;
        const consumerRoutes = this._getGroupedConsumerRoutes();
        const count = Object.keys(consumerRoutes).length;
        const gap = CONSUMERS_FAN_OUT_VERTICAL_GAP / svgScaleX;
        const total_height = y4 - y1 + count * gap;
        let yLeft = y1;
        let yRight = (y1 + y4) / 2 - total_height / 2;
        if (yRight < TEXT_PADDING) {
            yRight = TEXT_PADDING;
        }
        let svgFlow;
        let divRow;
        let svgExtra;
        let svgArrow;
        for (const key in consumerRoutes) {
            if (Object.prototype.hasOwnProperty.call(consumerRoutes, key)) {
                [divRow, svgFlow, svgExtra, svgArrow, yLeft, yRight] =
                    this._renderConsumerFlow(xLeft, yLeft, xRight, yRight, consumerRoutes[key], color, svgScaleX, i++);
                divRetArray.push(divRow);
                svgFlowArray.push(svgFlow);
                svgExtraArray.push(svgExtra);
                svgArrowArray.push(svgArrow);
                yRight += gap;
            }
        }
        [divRow, svgFlow, svgExtra, svgArrow, yLeft, yRight] =
            this._renderConsumerFlow(xLeft, yLeft, xRight, yRight, this._untrackedConsumerRoute, color, svgScaleX, i++);
        divRetArray.push(divRow);
        svgFlowArray.push(svgFlow);
        svgExtraArray.push(svgExtra);
        svgArrowArray.push(svgArrow);
        return [
            divRetArray,
            svgFlowArray,
            svgExtraArray,
            svgArrowArray,
            yRight + CONSUMER_LABEL_HEIGHT / 2,
        ];
    }
    renderBatteriesInOutFlow(x1, x17, x14, x15, x21, y17, y18, svgScaleX) {
        // Bottom layer
        const svgRetArray = [];
        // Top layer
        const svgRetArray2 = [];
        const divRetArray = [];
        // @todo if batteries aren't present, skip.
        const gap = BATTERIES_FAN_OUT_VERTICAL_GAP / svgScaleX;
        const arrow_head_length = ARROW_HEAD_LENGTH / svgScaleX;
        const gridColor = this._gridColor();
        const genColor = this._genColor();
        const ratio = x14 - x17 < 1 ? 0 : (x14 - x17) / (x15 - x17);
        const battOutBlendColor = mixHexes(gridColor, genColor, ratio);
        if (this._gridToBatteriesFlowWidth() !== 0) {
            svgRetArray.push(renderBlendRect(x14, y17, x17, y17, x14, y18, x17, y18, gridColor, battOutBlendColor, "grid-to-batt-blend"));
        }
        if (this._generationToBatteryFlowWidth() !== 0) {
            svgRetArray.push(renderBlendRect(x15, y17, x14, y17, x15, y18, x14, y18, genColor, battOutBlendColor, "gen-to-batt-blend"));
        }
        if (this._batteryInTotal() > 0) {
            svgRetArray.push(renderRect(x15, y17, x21 - x15, y18 - y17, "battery"));
        }
        const batteryRoutes = this.batteryRoutes;
        const divHeight = ICON_SIZE_PX + TEXT_PADDING + FONT_SIZE_PX * 2;
        let xA = x21;
        let yA = y18;
        let xB = x15;
        let count = 0;
        let curvePadTemp = 0;
        for (const key in batteryRoutes) {
            if (!Object.prototype.hasOwnProperty.call(batteryRoutes, key)) {
                console.error("error fetching battery route: " + key);
                continue;
            }
            const batt = batteryRoutes[key];
            const widthOut = batt.out.rate > 0 ? this._rateToWidth(batt.out.rate) : 0;
            const widthIn = batt.in.rate > 0 ? this._rateToWidth(batt.in.rate) : 0;
            curvePadTemp = x1 - x21;
            if (widthIn > 0) {
                svgRetArray.push(renderFlowByCorners(xA, yA, xA - widthIn, yA, x1, yA + curvePadTemp, x1, yA + curvePadTemp + widthIn, "battery"));
                svgRetArray.push(b `
          <polygon points="${x1},${yA + curvePadTemp}
          ${x1 - arrow_head_length},${yA + curvePadTemp + widthIn / 2},
          ${x1},${yA + curvePadTemp + widthIn}"
          class="tint"/>`);
                xA -= widthIn;
            }
            if (xA - x15 > 1) {
                svgRetArray.push(renderRect(x15, yA, xA - x15, gap + widthOut + widthIn, "battery"));
            }
            if (widthOut > 0) {
                svgRetArray2.push(renderFlowByCorners(xB, yA, xB - widthOut, yA, x1 - arrow_head_length, yA + curvePadTemp + widthIn, x1 - arrow_head_length, yA + curvePadTemp + widthIn + widthOut, "battery", battOutBlendColor));
                svgRetArray.push(b `
          <polygon points="${x1 - arrow_head_length},${yA + curvePadTemp + widthIn}
          ${x1},${yA + curvePadTemp + widthIn + widthOut / 2},
          ${x1 - arrow_head_length},${yA + curvePadTemp + widthIn + widthOut}"
          style="fill:${battOutBlendColor}" />`);
                xB -= widthOut;
            }
            if (xB - x17 > 1) {
                svgRetArray.push(renderRect(x17, yA, xB - x17, gap + widthOut + widthIn, "battery-in", battOutBlendColor));
            }
            divRetArray.push(x `<div
          class="label elecroute-label-battery"
          style="height:${divHeight}px;
            top: ${(yA + curvePadTemp + (widthOut + widthIn) / 2) * svgScaleX -
                (count * divHeight) / 2}px; margin: ${-divHeight / 2}px 0 0 0;"
        >
            ${this._generateLabelDiv(batt.in.id, batt.out.rate > 0 ? mdiBatteryCharging : mdiBattery, "", batt.out.rate, batt.in.rate, batt.out.rate > 0 ? battOutBlendColor : undefined, undefined, "battery")}
          </div>
        </div>`);
            count += 1;
            yA += gap + widthOut + widthIn;
        }
        return [
            divRetArray,
            b `
      ${svgRetArray}
      ${svgRetArray2}
      `,
            yA - gap + curvePadTemp + divHeight / 2,
        ];
    }
    _gridBlendRatio() {
        if (!this.gridInRoute) {
            return 0;
        }
        const grid = this.gridInRoute.rate > 0 ? this.gridInRoute.rate : 0;
        const renewable = this._generationTrackedTotal() +
            this._generationPhantom() -
            this._gridExport;
        const ratio = grid / (grid + renewable);
        if (ratio < 0) {
            return 0;
        }
        if (ratio > 1) {
            return 1;
        }
        return ratio;
    }
    _toConsumersBlendColor(genToConsFlow, gridToConsFlow, battToConsFlow) {
        const total = genToConsFlow + gridToConsFlow + battToConsFlow;
        if (total === 0) {
            return this._gridColor();
        }
        return mix3Hexes(this._genColor(), this._gridColor(), this._battColor(), genToConsFlow / total, gridToConsFlow / total, battToConsFlow / total);
    }
    _gridOutBlendColor(genToGridFlow, battToGridFlow) {
        return mixHexes(this._genColor(), this._battColor(), genToGridFlow / (genToGridFlow + battToGridFlow));
    }
    _toBatteriesBlendColor(gridToBattFlow, genToBattFlow) {
        return mixHexes(this._gridColor(), this._battColor(), gridToBattFlow / (gridToBattFlow + genToBattFlow));
    }
    _calc_xy() {
        const widthGenToConsumers = this._generationToConsumersFlowWidth();
        const widthGenToGrid = this._generationToGridFlowWidth();
        const widthGenToBatteries = this._generationToBatteryFlowWidth();
        const widthBatteriesToGrid = this._batteriesToGridFlowWidth();
        const widthGridToBatteries = this._gridToBatteriesFlowWidth();
        const widthBatteriesToConsumers = this._batteryToConsumersFlowWidth();
        const widthGridToConsumers = this._gridToConsumersFlowWidth();
        const mostLeft = Math.min(-widthGenToGrid, -widthGridToBatteries);
        const mostRight = widthGenToBatteries +
            Math.max(widthGenToConsumers, widthBatteriesToGrid + widthBatteriesToConsumers);
        const width = mostRight - mostLeft;
        const padX = Math.max(widthGenToGrid, widthGenToConsumers, widthGridToBatteries, widthBatteriesToConsumers, 30) * PAD_MULTIPLIER;
        const midX = ARROW_HEAD_LENGTH + GRID_BLEND_LENGTH + width / 2 + padX;
        const x0 = ARROW_HEAD_LENGTH + GRID_BLEND_LENGTH + widthGenToGrid >
            widthGridToBatteries
            ? midX - width / 2
            : midX - width / 2 + widthGridToBatteries - widthGenToGrid;
        const y0 = TERMINATOR_BLOCK_LENGTH;
        const y1 = TERMINATOR_BLOCK_LENGTH +
            Math.max(padX, widthGenToConsumers, padX + widthGenToGrid + widthBatteriesToGrid - widthGenToConsumers, widthGenToGrid * 2 + widthBatteriesToGrid - widthGenToConsumers);
        const x1 = midX + width / 2 + padX;
        const y2 = y1 + widthGenToConsumers;
        const y5 = y2 + widthGridToConsumers;
        const y10 = y2 - this._generationToGridFlowWidth() - widthBatteriesToGrid;
        const gridOutBlendColor = this._gridOutBlendColor(widthGenToGrid, widthBatteriesToGrid);
        const toConsumersBlendColor = this._toConsumersBlendColor(widthGenToConsumers, widthGridToConsumers, widthBatteriesToConsumers);
        const toBatteriesBlendColor = this._toBatteriesBlendColor(widthGridToBatteries, widthGenToBatteries);
        return [
            x0,
            y0,
            x1,
            y1,
            y2,
            y5,
            y10,
            gridOutBlendColor,
            toConsumersBlendColor,
            toBatteriesBlendColor,
        ];
    }
    render() {
        this._recalculate();
        const [x0, y0, x1, y1, y2, y5, y10, gridOutBlendColor, toConsumersBlendColor, toBatteriesBlendColor, // TODO refactor this
        ] = this._calc_xy();
        const svgCanvasWidth = x1;
        const svgVisibleWidth = SVG_LHS_VISIBLE_WIDTH;
        const svgScaleX = svgVisibleWidth / svgCanvasWidth;
        const x10 = ARROW_HEAD_LENGTH / svgScaleX;
        const x11 = x10 + GRID_BLEND_LENGTH;
        const generationToGridFlowSvg = this.renderGenerationToGridFlow(x0, y0, x11, y10, svgScaleX);
        const gridOutArrowSvg = this.renderGridOutFlowArrow(x10, y10, y2, svgScaleX, gridOutBlendColor);
        const genInBlendFlowSvg = this.renderGenInBlendFlow(y1, y2, toConsumersBlendColor);
        const gridInBlendFlowSvg = this.renderGridInBlendFlow(y2, y5, toConsumersBlendColor);
        const y11 = y2 - this._batteriesToGridFlowWidth();
        const y13 = y5 + this._gridToBatteriesFlowWidth();
        const y17 = y13 + (y10 - y0);
        const x14 = x0 + this._generationToGridFlowWidth();
        const x15 = x14 + this._generationToBatteryFlowWidth();
        const x16 = x15 + this._generationToConsumersFlowWidth();
        const x17 = x14 - this._gridToBatteriesFlowWidth();
        const x20 = x15 + this._batteriesToGridFlowWidth();
        const x21 = x20 + this._batteryToConsumersFlowWidth();
        const y4 = y5 + this._batteryToConsumersFlowWidth();
        const y18 = y17 + BATTERY_BLEND_LENGTH;
        const genToGridBlendSvg = this.renderGenToGridBlendFlow(x10, y10, x11, y11, gridOutBlendColor);
        const [gridInDiv, gridInFlowSvg] = this.renderGridInFlow(y2, y13, x10, svgScaleX);
        const gridToConsumersFlowSvg = this.renderGridToConsumersFlow(x10, y2, y5, x1);
        const genToBattFlowSvg = this.renderGenerationToBatteriesFlow(x14, x15, y0, y17);
        const [genInFlowDiv, genInFlowSvg] = this.renderGenerationToConsumersFlow(x0, y0, x15, x16, x1, y1, y2, svgScaleX);
        const [consOutFlowsDiv, consOutFlowsSvg, consOutExtrasSvg, consOutArrowsSvg, y8,] = this._renderConsumerFlows(y1, y4, toConsumersBlendColor, svgScaleX);
        const gridToBattFlowSvg = this.renderGridToBatteriesFlow(x10, y5, y13, x17, y17, x14);
        const battToConsFlowSvg = this.renderBatteriesToConsumersFlow(x1, y5, y4, x20, x21, y17);
        const battToGridFlowSvg = this.renderBatteriesToGridFlow(x15, y17, x20, x11, y2, y11);
        const battToGridBlendFlowSvg = this.renderBatteriesToGridBlendFlow(x10, y11, x11, y2, gridOutBlendColor);
        const [batteriesFlowInOutDiv, battInOutBlendSvg, y22] = this.renderBatteriesInOutFlow(x1, x17, x14, x15, x21, y17, y18, svgScaleX);
        const battToConsBlendFlowSvg = this.renderBatteriesToConsumersBlendFlow(y5, y4, toConsumersBlendColor);
        const blendedFlowPreFanOut = this._renderBlendedFlowPreFanOut(y1, y4, toConsumersBlendColor);
        const ymax = Math.max(y4, y8, y22 + 30);
        const arrowBoxWidth = ARROW_HEAD_LENGTH + this._getExtrasLength();
        return x `<div class="card-content">
      <div class="col1 container">
        <div class="col1top padding"></div>
        ${gridInDiv}
      </div>
      <div class="col2 container">
        <div class="col2top container">${genInFlowDiv}</div>
        <div class="col2bottom container">
          <div class="sankey-left">
            <svg
              viewBox="0 0 ${svgCanvasWidth} ${ymax}"
              width="100%"
              style="min-width: ${svgVisibleWidth}px"
              height=${ymax * svgScaleX}
              preserveAspectRatio="none"
            >
              ${genInFlowSvg} ${generationToGridFlowSvg} ${genToGridBlendSvg}
              ${gridOutArrowSvg} ${genToBattFlowSvg} ${gridToBattFlowSvg}
              ${battToGridBlendFlowSvg} ${gridInFlowSvg}
              ${gridToConsumersFlowSvg} ${battToConsFlowSvg}
              ${battToGridFlowSvg} ${battInOutBlendSvg}
            </svg>
          </div>
          <div class="sankey-mid">
            <div class="layer-wrapper">
              <div class="sankey-mid-svg" width="100%">
                <svg
                  viewBox="0 0 100 ${ymax}"
                  width="100%"
                  height=${ymax * svgScaleX}
                  preserveAspectRatio="none"
                >
                  ${genInBlendFlowSvg} ${gridInBlendFlowSvg}
                  ${battToConsBlendFlowSvg} ${blendedFlowPreFanOut}
                </svg>
              </div>
              <div class="sankey-mid-labels">${batteriesFlowInOutDiv}</div>
            </div>
          </div>
          <div class="sankey-right">
            <svg
              viewBox="0 0 100 ${ymax}"
              width="100%"
              height=${ymax * svgScaleX}
              preserveAspectRatio="none"
            >
              ${consOutFlowsSvg}
            </svg>
          </div>
          <div class="sankey-far-right">
            <svg
              viewBox="0 0 ${arrowBoxWidth} ${ymax}"
              width="100%"
              style="min-width: ${arrowBoxWidth}px"
              height=${ymax * svgScaleX}
              preserveAspectRatio="none"
            >
              ${consOutExtrasSvg} ${consOutArrowsSvg}
            </svg>
          </div>
        </div>
      </div>
      <div class="col3 container">
        <div class="col3top padding"></div>
        ${consOutFlowsDiv}
      </div>
    </div>`;
    }
    static get styles() {
        return i$3 `
      .card-content {
        position: relative;
        direction: ltr;
        display: flex;
      }
      .col1 {
        flex: 1;
        min-width: 60px;
        max-width: 120px;
      }
      .col1top {
        height: 60px;
      }
      .col2 {
        justify-content: left;
        flex-grow: 1;
      }
      .col2top {
        height: 60px;
        display: flex;
        justify-content: left;
      }
      .col2bottom {
        display: flex;
        justify-content: left;
      }
      .sankey-left {
        flex: 1;
        flex-grow: 0;
      }
      .sankey-mid {
        flex: 1;
        flex-grow: 1;
        min-width: 20px;
        position: relative;
      }
      .layer-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
      }
      .sankey-mid-labels {
        width: 100%;
        height: 100%;
        position: absolute;
      }
      .sankey-mid-svg {
        width: 100%;
        height: 100%;
        position: absolute;
      }
      .sankey-right {
        flex: 1;
        flex-grow: 2;
        min-width: 40px;
      }
      .sankey-far-right {
        flex: 1;
        flex-grow: 0;
        min-width: ${this.extrasLength + ARROW_HEAD_LENGTH}px;
      }
      .col3 {
        flex: 1;
        min-width: 80px;
        max-width: 120px;
        padding: 0px 16px 0px 0px;
      }
      .col3top {
        height: 60px;
      }
      .label {
        flex: 1;
        position: relative;
        font-size: 10px;
      }
      .elecroute-label-grid {
        display: flex;
        text-align: center;
      }
      .elecroute-label-battery {
        display: flex;
        min-width: 60px;
        padding-left: 6px;
      }
      .elecroute-label-horiz {
        display: flex;
        flex: 0 0 auto;
        flex-grow: 0;
        flex-shrink: 0;
        text-align: center;
      }
      .elecroute-label-consumer {
        display: flex;
        align-items: center;
        text-align: left;
        flex-grow: 0;
        flex-shrink: 0;
        justify-content: left;
        padding-left: 6px;
        white-space: pre;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      svg {
        rect {
          stroke: none;
          stroke-width: 0;
        }
        path {
          stroke: none;
          stroke-width: 0;
        }
        path.grid {
          fill: var(--grid-in-color, #920e83);
        }
        path.battery {
          fill: var(--batt-in-color, #01f4fc);
        }
        polygon {
          stroke: none;
        }
        polygon.generation {
          fill: var(--generation-color, #0d6a04);
        }
        polygon.grid {
          fill: var(--grid-in-color, #920e83);
        }
        polygon.tint {
          fill: #000000;
          opacity: 0.2;
        }
        path.generation {
          fill: var(--generation-color, #0d6a04);
          stroke: var(--generation-color, #0d6a04);
          stroke-width: 0;
        }
        rect.generation {
          fill: var(--generation-color, #0d6a04);
          stroke-width: 0;
        }
        rect.grid {
          fill: var(--grid-in-color, #920e83);
        }
        rect.battery {
          fill: var(--batt-in-color, #01f4fc);
        }
      }
    `;
    }
};
// Extras can be added in to the left of the consumer arrow by
// extending this class and overriding extrasLength.
ElecSankey.extrasLength = 0;
__decorate([
    n$1()
], ElecSankey.prototype, "unit", void 0);
__decorate([
    n$1({ attribute: false })
], ElecSankey.prototype, "generationInRoutes", void 0);
__decorate([
    n$1({ attribute: false })
], ElecSankey.prototype, "gridInRoute", void 0);
__decorate([
    n$1({ attribute: false })
], ElecSankey.prototype, "gridOutRoute", void 0);
__decorate([
    n$1({ attribute: false })
], ElecSankey.prototype, "consumerRoutes", void 0);
__decorate([
    n$1({ attribute: false })
], ElecSankey.prototype, "batteryRoutes", void 0);
__decorate([
    n$1({ attribute: false })
], ElecSankey.prototype, "maxConsumerBranches", void 0);
__decorate([
    n$1({ attribute: false })
], ElecSankey.prototype, "hideConsumersBelow", void 0);
__decorate([
    n$1({ attribute: false })
], ElecSankey.prototype, "batteryChargeOnlyFromGeneration", void 0);
ElecSankey = __decorate([
    e$2("elec-sankey")
], ElecSankey);

const round = (value, precision = 2) => Math.round(value * 10 ** precision) / 10 ** precision;

const numberFormatToLocale = (localeOptions) => {
    switch (localeOptions.number_format) {
        case NumberFormat.comma_decimal:
            return ["en-US", "en"]; // Use United States with fallback to English formatting 1,234,567.89
        case NumberFormat.decimal_comma:
            return ["de", "es", "it"]; // Use German with fallback to Spanish then Italian formatting 1.234.567,89
        case NumberFormat.space_comma:
            return ["fr", "sv", "cs"]; // Use French with fallback to Swedish and Czech formatting 1 234 567,89
        case NumberFormat.system:
            return undefined;
        default:
            return localeOptions.language;
    }
};
/**
 * Formats a number based on the user's preference with thousands separator(s) and decimal character for better legibility.
 *
 * @param num The number to format
 * @param localeOptions The user-selected language and formatting, from `hass.locale`
 * @param options Intl.NumberFormatOptions to use
 */
const formatNumber = (num, localeOptions, options) => {
    const locale = localeOptions
        ? numberFormatToLocale(localeOptions)
        : undefined;
    // Polyfill for Number.isNaN, which is more reliable than the global isNaN()
    Number.isNaN =
        Number.isNaN ||
            function isNaN(input) {
                return typeof input === "number" && isNaN(input);
            };
    if ((localeOptions === null || localeOptions === void 0 ? void 0 : localeOptions.number_format) !== NumberFormat.none &&
        !Number.isNaN(Number(num))) {
        return new Intl.NumberFormat(locale, getDefaultFormatOptions(num, options)).format(Number(num));
    }
    if (!Number.isNaN(Number(num)) &&
        num !== "" &&
        (localeOptions === null || localeOptions === void 0 ? void 0 : localeOptions.number_format) === NumberFormat.none) {
        // If NumberFormat is none, use en-US format without grouping.
        return new Intl.NumberFormat("en-US", getDefaultFormatOptions(num, Object.assign(Object.assign({}, options), { useGrouping: false }))).format(Number(num));
    }
    if (typeof num === "string") {
        return num;
    }
    return `${round(num, options === null || options === void 0 ? void 0 : options.maximumFractionDigits).toString()}${(options === null || options === void 0 ? void 0 : options.style) === "currency" ? ` ${options.currency}` : ""}`;
};
/**
 * Generates default options for Intl.NumberFormat
 * @param num The number to be formatted
 * @param options The Intl.NumberFormatOptions that should be included in the returned options
 */
const getDefaultFormatOptions = (num, options) => {
    const defaultOptions = Object.assign({ maximumFractionDigits: 2 }, options);
    if (typeof num !== "string") {
        return defaultOptions;
    }
    // Keep decimal trailing zeros if they are present in a string numeric value
    if (!options ||
        (options.minimumFractionDigits === undefined &&
            options.maximumFractionDigits === undefined)) {
        const digits = num.indexOf(".") > -1 ? num.split(".")[1].length : 0;
        defaultOptions.minimumFractionDigits = digits;
        defaultOptions.maximumFractionDigits = digits;
    }
    return defaultOptions;
};

// end of additional items from frontend src/dialogs/more-info/ha-more-info-dialog.ts
let HaElecSankey = class HaElecSankey extends ElecSankey {
    constructor() {
        super(...arguments);
        this._localizer = (key) => {
            return key;
        };
        this._localizerIsSetup = false;
        this._localize = (key) => {
            if (!this._localizerIsSetup) {
                this._localizer = setupCustomlocalize(this.hass);
                this._localizerIsSetup = true;
            }
            // The low level card ElecSankey doesn't know anything about the card
            // prefix, so we need to add it here.
            if (!key.startsWith("card.")) {
                key = "card.generic." + key;
            }
            return this._localizer(key);
        };
    }
    _generateLabelDiv(id, icon, _name, valueA, valueB, valueAColor = undefined, valueBColor = undefined, displayClass = undefined, showLeftValue = true) {
        const _id = id || "";
        const numFractionDigits = this.unit === "kWh" ? 1 : 0;
        // prettier-ignore
        return x `<div
      class="label ${id ? "label-action-clickable " : ""}${displayClass}"
      id=${_id}
      @click=${id ? this._handleMoreInfo : A}
    >${_name || A}${icon
            ? x `<ha-svg-icon id=${_id} .path=${icon}> </ha-svg-icon>`
            : A}${valueB !== undefined
            ? x `<br />${showLeftValue ? x `<span
              class="directionleft ${displayClass}"
              style=${valueBColor ? `color:${valueBColor}` : A}
              id=${_id}
            >
              <ha-svg-icon id=${_id} class="small" .path=${mdiArrowLeft}>
              </ha-svg-icon
              >${formatNumber(valueB, this.hass.locale, {
                maximumFractionDigits: numFractionDigits,
            })}&nbsp;${this.unit}</span
            >` : A}<br />
            <span
              class="directionright ${displayClass}"
              style=${valueAColor ? `color:${valueAColor}` : A}
              id=${_id}
            >
              <ha-svg-icon id=${_id} class="small" .path=${mdiArrowRight}>
              </ha-svg-icon
              >${formatNumber(valueA, this.hass.locale, {
                maximumFractionDigits: numFractionDigits,
            })}&nbsp;${this.unit}
            </span>`
            : x `<br />${formatNumber(valueA, this.hass.locale, {
                maximumFractionDigits: numFractionDigits,
            })}&nbsp;${this.unit}`}
    </div>`;
    }
    _handleMoreInfo(e) {
        const div = e.target;
        fireEvent(this, "hass-more-info", {
            entityId: div.id,
        });
    }
    static get styles() {
        return [
            super.styles,
            i$3 `
        ha-card:focus {
          outline: none;
        }
        .card-header {
          padding-bottom: 0;
        }
        .name {
          text-align: center;
          line-height: initial;
          color: var(--primary-text-color);
          width: 100%;
          font-size: 15px;
          margin-top: 8px;
        }
        .label {
          font-size: 12px;
        }
        .label-action-clickable {
          cursor: pointer;
        }
        ha-svg-icon {
          --icon-primary-color: var(--icon-primary-color);
        }
        ha-svg-icon.small {
          --mdc-icon-size: 12px;
        }
        .directionright.grid {
          color: var(--energy-grid-consumption-color);
        }
        .directionleft.grid {
          color: var(--energy-grid-return-color);
        }
        .directionleft.battery {
          color: var(--energy-battery-out-color);
        }
      `,
        ];
    }
};
__decorate([
    n$1({ attribute: false })
], HaElecSankey.prototype, "hass", void 0);
HaElecSankey = __decorate([
    e$2("ha-elec-sankey")
], HaElecSankey);

console.info(`Energy Sankey - ${version}`);
