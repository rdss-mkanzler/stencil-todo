let e,t,n=!1;const l="undefined"!=typeof window?window:{},s=l.document||{head:{}},o={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},c=e=>Promise.resolve(e),r=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),i=(e,t,n)=>{n&&n.map((([n,l,s])=>{const c=e,r=u(t,s),i=a(n);o.ael(c,l,r,i),(t.o=t.o||[]).push((()=>o.rel(c,l,r,i)))}))},u=(e,t)=>n=>{try{256&e.t?e.i[t](n):(e.u=e.u||[]).push([t,n])}catch(e){I(e)}},a=e=>0!=(2&e),f=new WeakMap,$=e=>"sc-"+e.$,d={},y=e=>"object"==(e=typeof e)||"function"===e,m=(e,t,...n)=>{let l=null,s=!1,o=!1;const c=[],r=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?r(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!y(l))&&(l+=""),s&&o?c[c.length-1].m+=l:c.push(s?h(null,l):l),o=s)};if(r(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}const i=h(e,null);return i.h=t,c.length>0&&(i.p=c),i},h=(e,t)=>({t:0,S:e,m:t,g:null,p:null,h:null}),p={},b=(e,t,n,s,c,r)=>{if(n!==s){let i=G(e,t),u=t.toLowerCase();if("class"===t){const t=e.classList,l=S(n),o=S(s);t.remove(...l.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!l.includes(e))))}else if("ref"===t)s&&s(e);else if(i||"o"!==t[0]||"n"!==t[1]){const l=y(s);if((i||l&&null!==s)&&!c)try{if(e.tagName.includes("-"))e[t]=s;else{const l=null==s?"":s;"list"===t?i=!1:null!=n&&e[t]==l||(e[t]=l)}}catch(e){}null==s||!1===s?!1===s&&""!==e.getAttribute(t)||e.removeAttribute(t):(!i||4&r||c)&&!l&&e.setAttribute(t,s=!0===s?"":s)}else t="-"===t[2]?t.slice(3):G(l,u)?u.slice(2):u[2]+t.slice(3),n&&o.rel(e,t,n,!1),s&&o.ael(e,t,s,!1)}},w=/\s/,S=e=>e?e.split(w):[],g=(e,t,n,l)=>{const s=11===t.g.nodeType&&t.g.host?t.g.host:t.g,o=e&&e.h||d,c=t.h||d;for(l in o)l in c||b(s,l,o[l],void 0,n,t.t);for(l in c)b(s,l,o[l],c[l],n,t.t)},j=(t,n,l)=>{const o=n.p[l];let c,r,i=0;if(null!==o.m)c=o.g=s.createTextNode(o.m);else if(c=o.g=s.createElement(o.S),g(null,o,!1),null!=e&&c["s-si"]!==e&&c.classList.add(c["s-si"]=e),o.p)for(i=0;i<o.p.length;++i)r=j(t,o,i),r&&c.appendChild(r);return c},v=(e,n,l,s,o,c)=>{let r,i=e;for(i.shadowRoot&&i.tagName===t&&(i=i.shadowRoot);o<=c;++o)s[o]&&(r=j(null,l,o),r&&(s[o].g=r,i.insertBefore(r,n)))},M=(e,t,n,l,s)=>{for(;t<=n;++t)(l=e[t])&&(s=l.g,O(l),s.remove())},k=(e,t)=>e.S===t.S,C=(e,t)=>{const n=t.g=e.g,l=e.p,s=t.p,o=t.m;null===o?(g(e,t,!1),null!==l&&null!==s?((e,t,n,l)=>{let s,o=0,c=0,r=t.length-1,i=t[0],u=t[r],a=l.length-1,f=l[0],$=l[a];for(;o<=r&&c<=a;)null==i?i=t[++o]:null==u?u=t[--r]:null==f?f=l[++c]:null==$?$=l[--a]:k(i,f)?(C(i,f),i=t[++o],f=l[++c]):k(u,$)?(C(u,$),u=t[--r],$=l[--a]):k(i,$)?(C(i,$),e.insertBefore(i.g,u.g.nextSibling),i=t[++o],$=l[--a]):k(u,f)?(C(u,f),e.insertBefore(u.g,i.g),u=t[--r],f=l[++c]):(s=j(t&&t[c],n,c),f=l[++c],s&&i.g.parentNode.insertBefore(s,i.g));o>r?v(e,null==l[a+1]?null:l[a+1].g,n,l,c,a):c>a&&M(t,o,r)})(n,l,t,s):null!==s?(null!==e.m&&(n.textContent=""),v(n,null,t,s,0,s.length-1)):null!==l&&M(l,0,l.length-1)):e.m!==o&&(n.data=o)},O=e=>{e.h&&e.h.ref&&e.h.ref(null),e.p&&e.p.map(O)},P=(e,t,n)=>{const l=(e=>z(e).j)(e);return{emit:e=>x(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},x=(e,t,n)=>{const l=o.ce(t,n);return e.dispatchEvent(l),l},E=(e,t)=>{t&&!e.v&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.v=t)))},L=(e,t)=>{if(e.t|=16,!(4&e.t))return E(e,e.M),le((()=>N(e,t)));e.t|=512},N=(e,t)=>{const n=e.i;let l;return t&&(e.t|=256,e.u&&(e.u.map((([e,t])=>U(n,e,t))),e.u=null),l=U(n,"componentWillLoad")),q(l,(()=>T(e,n,t)))},T=async(e,t,n)=>{const l=e.j,o=l["s-rc"];n&&(e=>{const t=e.k,n=e.j,l=t.t,o=((e,t)=>{let n=$(t);const l=Q.get(n);if(e=11===e.nodeType?e:s,l)if("string"==typeof l){let t,o=f.get(e=e.head||e);o||f.set(e,o=new Set),o.has(n)||(t=s.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(e);W(e,t),o&&(o.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>A(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},W=(n,l)=>{try{l=l.render(),n.t&=-17,n.t|=2,((n,l)=>{const s=n.j,o=n.C||h(null,null),c=(e=>e&&e.S===p)(l)?l:m(null,null,l);t=s.tagName,c.S=null,c.t|=4,n.C=c,c.g=o.g=s.shadowRoot||s,e=s["s-sc"],C(o,c)})(n,l)}catch(e){I(e,n.j)}return null},A=e=>{const t=e.j,n=e.M;64&e.t||(e.t|=64,F(t),e.O(t),n||R()),e.v&&(e.v(),e.v=void 0),512&e.t&&ne((()=>L(e,!1))),e.t&=-517},R=()=>{F(s.documentElement),ne((()=>x(l,"appload",{detail:{namespace:"stencil-todo"}})))},U=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){I(e)}},q=(e,t)=>e&&e.then?e.then(t):t(),F=e=>e.classList.add("hydrated"),H=(e,t,n)=>{if(t.P){e.watchers&&(t.L=e.watchers);const l=Object.entries(t.P),s=e.prototype;l.map((([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(s,e,{get(){return((e,t)=>z(this).N.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=z(e),o=s.j,c=s.N.get(t),r=s.t,i=s.i;if(n=(e=>(null==e||y(e),e))(n),(!(8&r)||void 0===c)&&n!==c&&(!Number.isNaN(c)||!Number.isNaN(n))&&(s.N.set(t,n),i)){if(l.L&&128&r){const e=l.L[t];e&&e.map((e=>{try{i[e](n,c,t)}catch(e){I(e,o)}}))}2==(18&r)&&L(s,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0})}))}return e},V=(e,t={})=>{const n=[],c=t.exclude||[],u=l.customElements,a=s.head,f=a.querySelector("meta[charset]"),d=s.createElement("style"),y=[];let m,h=!0;Object.assign(o,t),o.l=new URL(t.resourcesUrl||"./",s.baseURI).href,e.map((e=>{e[1].map((t=>{const l={t:t[0],$:t[1],P:t[2],T:t[3]};l.P=t[2],l.T=t[3],l.L={};const s=l.$,a=class extends HTMLElement{constructor(e){super(e),D(e=this,l),1&l.t&&e.attachShadow({mode:"open"})}connectedCallback(){m&&(clearTimeout(m),m=null),h?y.push(this):o.jmp((()=>(e=>{if(0==(1&o.t)){const t=z(e),n=t.k,l=()=>{};if(1&t.t)i(e,t,n.T);else{t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){E(t,t.M=n);break}}n.P&&Object.entries(n.P).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=K(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(n.L=s.watchers,H(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){I(e)}t.t&=-9,t.t|=128,e()}if(s.style){let e=s.style;const t=$(n);if(!Q.has(t)){const l=()=>{};((e,t,n)=>{let l=Q.get(e);r&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,Q.set(e,l)})(t,e,!!(1&n.t)),l()}}}const o=t.M,c=()=>L(t,!0);o&&o["s-rc"]?o["s-rc"].push(c):c()})(0,t,n)}l()}})(this)))}disconnectedCallback(){o.jmp((()=>(()=>{if(0==(1&o.t)){const e=z(this);e.o&&(e.o.map((e=>e())),e.o=void 0)}})()))}componentOnReady(){return z(this).W}};l.A=e[0],c.includes(s)||u.get(s)||(n.push(s),u.define(s,H(a,l,1)))}))})),d.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",d.setAttribute("data-styles",""),a.insertBefore(d,f?f.nextSibling:a.firstChild),h=!1,y.length?y.map((e=>e.connectedCallback())):o.jmp((()=>m=setTimeout(R,30)))},_=new WeakMap,z=e=>_.get(e),B=(e,t)=>_.set(t.i=e,t),D=(e,t)=>{const n={t:0,j:e,k:t,N:new Map};return n.W=new Promise((e=>n.O=e)),e["s-p"]=[],e["s-rc"]=[],i(e,n,t.T),_.set(e,n)},G=(e,t)=>t in e,I=(e,t)=>(0,console.error)(e,t),J=new Map,K=e=>{const t=e.$.replace(/-/g,"_"),n=e.A,l=J.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(J.set(n,e),e[t])),I)
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/},Q=new Map,X=[],Y=[],Z=(e,t)=>l=>{e.push(l),n||(n=!0,t&&4&o.t?ne(te):o.raf(te))},ee=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){I(e)}e.length=0},te=()=>{ee(X),ee(Y),(n=X.length>0)&&o.raf(te)},ne=e=>c().then(e),le=Z(Y,!0);export{V as b,P as c,m as h,c as p,B as r}