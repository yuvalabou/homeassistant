import{I as e,J as s,L as t,N as r}from"./main-c66a9a06.js";import{m as l,u as n,r as o,p as i,a}from"./c.a5550d10.js";const u=(e,s,t)=>{const r=new Map;for(let l=s;l<=t;l++)r.set(e[l],l);return r},f=e(class extends s{constructor(e){if(super(e),e.type!==t.CHILD)throw Error("repeat() can only be used in text expressions")}ht(e,s,t){let r;void 0===t?t=s:void 0!==s&&(r=s);const l=[],n=[];let o=0;for(const s of e)l[o]=r?r(s,o):o,n[o]=t(s,o),o++;return{values:n,keys:l}}render(e,s,t){return this.ht(e,s,t).values}update(e,[s,t,f]){var c;const h=l(e),{values:d,keys:p}=this.ht(s,t,f);if(!Array.isArray(h))return this.ut=p,d;const v=null!==(c=this.ut)&&void 0!==c?c:this.ut=[],y=[];let m,x,g=0,j=h.length-1,k=0,w=d.length-1;for(;g<=j&&k<=w;)if(null===h[g])g++;else if(null===h[j])j--;else if(v[g]===p[k])y[k]=n(h[g],d[k]),g++,k++;else if(v[j]===p[w])y[w]=n(h[j],d[w]),j--,w--;else if(v[g]===p[w])y[w]=n(h[g],d[w]),o(e,y[w+1],h[g]),g++,w--;else if(v[j]===p[k])y[k]=n(h[j],d[k]),o(e,h[g],h[j]),j--,k++;else if(void 0===m&&(m=u(p,k,w),x=u(v,g,j)),m.has(v[g]))if(m.has(v[j])){const s=x.get(p[k]),t=void 0!==s?h[s]:null;if(null===t){const s=o(e,h[g]);n(s,d[k]),y[k]=s}else y[k]=n(t,d[k]),o(e,h[g],t),h[s]=null;k++}else i(h[j]),j--;else i(h[g]),g++;for(;k<=w;){const s=o(e,y[w+1]);n(s,d[k]),y[k++]=s}for(;g<=j;){const e=h[g++];null!==e&&i(e)}return this.ut=p,a(e,y),r}});export{f as c};
