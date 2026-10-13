(()=>{var dn="products/",vc=(i,t)=>Math.round(i*(1-t/100)),Tu=[{id:"skin-oil",name:"CBD Hudpleje Olie",strength:"1000 mg",size:"30 ml",eyebrow:"CBD Skin Care",price0:499,pct:25,img:dn+"skin-oil.webp",hires:dn+"skin-oil-hires.webp",hero:!0,badge:"badges/vidunder-olien.svg",nickname:"Vidunder Olien",claim:"Efterlader huden bl\xF8d, velplejet og smuk \u2013 til alle hudtyper.",notes:"CBD i samspil med MCT-olie. Absorberes hurtigt og fedter ikke."},{id:"day-cream",name:"CBD Dagcreme",size:"50 ml",eyebrow:"CBD Skin Care",price0:399,pct:25,img:dn+"day-cream.webp",hires:dn+"day-cream-hires.webp",claim:"Let dagcreme med CBD, aloe vera og sheasm\xF8r til en glat og velplejet hud."},{id:"night-cream",name:"CBD Natcreme",size:"50 ml",eyebrow:"CBD Skin Care",price0:449,pct:25,img:dn+"night-cream.webp",hires:dn+"night-cream-bottle-hires.webp",claim:"N\xE6rende natcreme med mandelolie og squalane, der underst\xF8tter hudens naturlige fugt."},{id:"serum",name:"CBD Hyaluronic Serum",size:"30 ml",eyebrow:"CBD Skin Care",price0:299,pct:25,img:dn+"hyaluron-serum.webp",hires:dn+"hyaluron-serum-hires.webp",claim:"Fugtboostende serum med hyaluronsyre og CBD til et udhvilet hududtryk."},{id:"cleansing-gel",name:"CBD Rensegel",size:"100 ml",eyebrow:"CBD Skin Care",price0:299,pct:25,img:dn+"cleansing-gel.webp",hires:dn+"cleansing-gel-bottle-hires.webp",claim:"Mild ansigtsrens, der renser og samtidig bevarer hudens fugtbalance."},{id:"body-lotion",name:"CBD Bodylotion",size:"200 ml",eyebrow:"CBD Skin Care",price0:249,pct:25,img:dn+"body-lotion.webp",claim:"Tr\xE6kker hurtigt ind og efterlader kroppen bl\xF8d. Giver intensiv fugtighed til t\xF8r hud."},{id:"shampoo",name:"CBD Shampoo",strength:"750 mg",size:"300 ml",eyebrow:"CBD Hair Care",price0:199,pct:25,img:dn+"shampoo.webp",claim:"Mild shampoo uden un\xF8dvendige ingredienser \u2013 til hele familien."},{id:"komplet-pakken",name:"Komplet Pakken",size:"Rens \xB7 Dag \xB7 Nat \xB7 Olie",eyebrow:"Sampakke",price0:1198,valueLoose:1646,pct:25,img:dn+"startpakke-plus.webp",bundle:!0,badge:"badges/komplet-pakken.svg",contains:["cleansing-gel","day-cream","night-cream","skin-oil"],claim:"Hele rutinen, morgen og aften \u2013 fire produkter i \xE9n pakke."},{id:"all-day-facial",name:"All Day Facial",size:"Rens \xB7 Dag \xB7 Nat",eyebrow:"Sampakke",price0:860,valueLoose:1147,pct:25,img:dn+"all-day-facial.webp",bundle:!0,badge:"badges/all-day-facial.svg",contains:["cleansing-gel","day-cream","night-cream"],claim:"Den daglige ansigtsrutine samlet \u2013 rens, dag og nat."},{id:"lip-balm",name:"CBD Lip Balm",size:"",eyebrow:"Gave",price0:79,pct:0,img:null,gift:!0,claim:"Gratis ved k\xF8b over 699 kr."}],qa=Tu.map(i=>({...i,price:vc(i.price0,i.pct),save:i.price0-vc(i.price0,i.pct)})),Dr={name:"Black Week",startsAt:"2026-11-23T00:00:00+01:00",endsAt:"2026-11-30T23:59:59+01:00",headlinePct:25,giftThreshold:699,giftId:"lip-balm",giftValue:79,freeShipping:399,code:null};var Ur=[];function fn(i,t){Ur.push([i,t])}var _u=Date.parse("2026-11-27T10:00:00+01:00"),Ru=performance.now(),Cu={now:()=>_u+(performance.now()-Ru),end:Date.parse(Dr.endsAt),start:Date.parse(Dr.startsAt)},Ya=new Set,hi={cart:[]},Iu={get:()=>hi,on:i=>(Ya.add(i),()=>Ya.delete(i)),emit:(i,t)=>Ya.forEach(e=>e(i,t,hi)),add(i,t=1){let e=hi.cart.find(n=>n.id===i);e?e.qty+=t:hi.cart.push({id:i,qty:t}),this.emit("cart:add",{id:i,qty:t})},setQty(i,t){let e=hi.cart.find(n=>n.id===i);e&&(e.qty=Math.max(0,t),e.qty||hi.cart.splice(hi.cart.indexOf(e),1),this.emit("cart:change",{id:i}))},count:()=>hi.cart.reduce((i,t)=>i+t.qty,0),subtotal:()=>hi.cart.reduce((i,t)=>i+t.qty*yc[t.id].price,0),openCart(){this.emit("cart:open")}},yc=Object.fromEntries(qa.map(i=>[i.id,i])),Pu={kr:i=>`${Math.round(i).toLocaleString("da-DK")} kr.`,pct:i=>`${Math.round(i)}%`},xc=document.currentScript&&document.currentScript.src,Lu=window.NC_ASSET_BASE||(xc?new URL("../assets/",xc).href:"../assets/"),Du=i=>Lu+i;function Mc(){let i={store:Iu,clock:Cu,fmt:Pu,products:qa,byId:yc,campaign:Dr,asset:Du,prefersReducedMotion:matchMedia("(prefers-reduced-motion: reduce)").matches,isMobile:()=>matchMedia("(max-width: 760px)").matches},t=()=>{let n=0;for(let[r,a]of Ur){let o=document.querySelector(`[data-section="${r}"]`);if(o&&(n++,!o.dataset.ncInit)){o.dataset.ncInit="1";try{a(o,i)}catch(l){console.error(`[section ${r}]`,l)}}}let s=new IntersectionObserver(r=>r.forEach(a=>{a.isIntersecting&&(a.target.classList.add("is-in"),s.unobserve(a.target))}),{rootMargin:"0px 0px -8% 0px"});return document.querySelectorAll("[data-reveal]:not(.is-in)").forEach(r=>s.observe(r)),n},e=()=>{if(t()>=Ur.length)return;let n=new MutationObserver(()=>{t()>=Ur.length&&n.disconnect()});n.observe(document.body,{childList:!0,subtree:!0}),setTimeout(()=>n.disconnect(),2e4)};window.NCBW={ctx:i,run:t},window.NC_DEFER_BOOT||(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e):e())}var hs={};try{hs=JSON.parse(sessionStorage.getItem("nc_ps")||"{}")||{}}catch{hs={}}var Uu=()=>{try{sessionStorage.setItem("nc_ps",JSON.stringify(hs))}catch{}};function Nu(i,t){if(hs[i])return t(hs[i]);let e=new Image;e.onload=()=>{let n=e.naturalWidth,s=e.naturalHeight;if(!n||!s)return t(null);let r=Math.min(1,120/Math.max(n,s)),a=Math.max(1,Math.round(n*r)),o=Math.max(1,Math.round(s*r)),l=document.createElement("canvas");l.width=a,l.height=o;let c=l.getContext("2d",{willReadFrequently:!0}),u;try{c.drawImage(e,0,0,a,o),u=c.getImageData(0,0,a,o).data}catch{return t(null)}let d=(x,C)=>{let E=(C*a+x)*4;return[u[E],u[E+1],u[E+2],u[E+3]]},p=[d(0,0),d(a-1,0),d(0,o-1),d(a-1,o-1),d(a>>1,0),d(a>>1,o-1),d(0,o>>1),d(a-1,o>>1)],f=[0,1,2,3].map(x=>p.map(C=>C[x]).sort((C,E)=>C-E)[4]),v=f[3]<20,g=a,m=-1,h=o,b=-1;for(let x=0;x<o;x++)for(let C=0;C<a;C++){let E=(x*a+C)*4,R=u[E+3];(v?R>40:R>40&&(Math.abs(u[E]-f[0])>26||Math.abs(u[E+1]-f[1])>26||Math.abs(u[E+2]-f[2])>26))&&(C<g&&(g=C),C>m&&(m=C),x<h&&(h=x),x>b&&(b=x))}if(m<0||m-g<2||b-h<2||(m-g+1)/a>.97&&(b-h+1)/o>.97)return t(null);let w={x0:g/a,x1:(m+1)/a,y0:h/o,y1:(b+1)/o,w:n,h:s};hs[i]=w,Uu(),t(w)},e.onerror=()=>t(null),e.src=i}function bc(i){let t=i._ncPs;if(!t)return;let e=i.clientWidth,n=i.clientHeight;if(!e||!n)return;let s=Math.min(e/t.w,n/t.h),r=t.w*s,a=t.h*s,o=(e-r)/2,l=(n-a)/2,c=o+t.x0*r,u=o+t.x1*r,d=l+t.y0*a,p=l+t.y1*a,f=u-c,v=p-d,g=(c+u)/2,m=1;v>.78*n?m=.78*n/v:v<.52*n&&(m=Math.min(1.6,.52*n/v)),f*m>.78*e&&(m=.78*e/f);let h=e/2-m*g,b=.86*n-m*p;i.style.transform=`translate(${h.toFixed(2)}px,${b.toFixed(2)}px) scale(${m.toFixed(4)})`,i.classList.add("is-placed")}function Sc(i){if(!document.createElement("canvas").getContext)return;let t="ResizeObserver"in window?new ResizeObserver(n=>n.forEach(s=>bc(s.target))):null,e=n=>{if(n._ncPsInit)return;n._ncPsInit=!0;let s=n.currentSrc||n.src;s&&Nu(s,r=>{r&&(n._ncPs=r,bc(n),t&&t.observe(n))})};i.querySelectorAll("img.nc-packshot").forEach(n=>{n.complete&&n.naturalWidth?e(n):n.addEventListener("load",()=>e(n),{once:!0})})}function Qa(i,t){let e=(h,b=i)=>b.querySelector(h),n=(h,b=i)=>Array.from(b.querySelectorAll(h)),s=e("[data-nc-header]"),r=e("[data-nc-mega]"),a=n("[data-nc-mega-toggle]"),o=e("[data-nc-mobilenav]"),l=e("[data-nc-burger]"),c=document.documentElement,u=h=>{r.classList.toggle("is-open",h),a.forEach(b=>b.setAttribute("aria-expanded",h?"true":"false"))};a.forEach(h=>h.addEventListener("click",b=>{b.preventDefault(),u(!r.classList.contains("is-open"))})),document.addEventListener("click",h=>{r.classList.contains("is-open")&&!s.contains(h.target)&&u(!1)}),n("[data-nc-tabs]").forEach(h=>{let b=n("[data-nc-tab]",h),w=n("[data-nc-panel]",h);b.forEach(x=>x.addEventListener("click",()=>{let C=x.getAttribute("data-nc-tab");b.forEach(E=>{E.classList.toggle("is-active",E===x),E.setAttribute("aria-selected",E===x?"true":"false")}),w.forEach(E=>{E.hidden=E.getAttribute("data-nc-panel")!==C})}))});let d=h=>{if(o.classList.toggle("is-open",h),o.setAttribute("aria-hidden",h?"false":"true"),l.setAttribute("aria-expanded",h?"true":"false"),c.classList.toggle("nc-lock",h),h){let b=e(".nc-mobilenav__head [data-nc-close]");b&&b.focus({preventScroll:!0})}};l.addEventListener("click",()=>d(!o.classList.contains("is-open"))),n("[data-nc-close]",o).forEach(h=>h.addEventListener("click",()=>{d(!1),l.focus({preventScroll:!0})})),document.addEventListener("keydown",h=>{h.key==="Escape"&&(r.classList.contains("is-open")&&u(!1),o.classList.contains("is-open")&&(d(!1),l.focus({preventScroll:!0})))});let p=n("[data-nc-cart-count]"),f=()=>{let h=t.store.count();p.forEach(b=>{b.textContent=h,b.classList.toggle("is-empty",h===0)})};t.store.on(h=>{(h==="cart:add"||h==="cart:change")&&f()}),f(),n("[data-nc-cart-open]").forEach(h=>h.addEventListener("click",b=>{b.preventDefault(),t.store.openCart()}));let v=n("[data-nc-fav-count]"),g=()=>{let h=[];try{h=JSON.parse(localStorage.getItem("nc_favs")||"[]")||[]}catch{h=[]}v.forEach(b=>{b.textContent=h.length,b.classList.toggle("is-empty",h.length===0)})};window.addEventListener("nc-favs-changed",g),g();let m=e(".nc-skip-link");m&&!document.getElementById("nc-main")&&m.addEventListener("click",h=>{let b=i.nextElementSibling;b&&(h.preventDefault(),b.hasAttribute("tabindex")||b.setAttribute("tabindex","-1"),b.focus())}),Sc(i)}function Ac(i,t){let e=!1;return new IntersectionObserver(([s])=>{e=s.isIntersecting,t&&t(e)},{rootMargin:"120px"}).observe(i),()=>e}var wc=()=>Math.min(window.devicePixelRatio||1,2);var Fu=0,Ec=1,Bu=2;var Dh=1,Ou=2,gi=3,Li=0,tn=1,kn=2,ei=0,Pi=1,Di=2,Tc=3,_c=4,Ar=5,Jn=100,ku=101,zu=102,Vu=103,Hu=104,Ra=200,Vl=201,Ca=202,Gu=203,Eo=204,dr=205,Wu=206,Xu=207,qu=208,Yu=209,Qu=210,Zu=211,Ku=212,Ju=213,ju=214,To=0,_o=1,Ro=2,Ps=3,Co=4,Io=5,Po=6,Lo=7,Uh=0,$u=1,td=2,ni=0,ed=1,nd=2,id=3,sd=4,rd=5,ad=6,od=7;var Nh=300,Ls=301,Ds=302,Do=303,Uo=304,Ia=306,fr=1e3,Ji=1001,No=1002,wn=1003,ld=1004;var Nr=1005;var jn=1006,Za=1007;var ji=1008;var Mi=1009,Fh=1010,Bh=1011,pr=1012,Hl=1013,$i=1014,$n=1015,Tn=1016,Gl=1017,Wl=1018,Us=1020,Oh=35902,kh=1021,zh=1022,Vn=1023,Vh=1024,Hh=1025,Rs=1026,Ns=1027,Xl=1028,ql=1029,Gh=1030,Yl=1031;var Ql=1033,sa=33776,ra=33777,aa=33778,oa=33779,Fo=35840,Bo=35841,Oo=35842,ko=35843,zo=36196,Vo=37492,Ho=37496,Go=37808,Wo=37809,Xo=37810,qo=37811,Yo=37812,Qo=37813,Zo=37814,Ko=37815,Jo=37816,jo=37817,$o=37818,tl=37819,el=37820,nl=37821,la=36492,il=36494,sl=36495,Wh=36283,rl=36284,al=36285,ol=36286;var ca=2300,ll=2301,Ka=2302,Rc=2400,Cc=2401,Ic=2402;var cd=3200,hd=3201;var Xh=0,ud=1,zn="",pn="srgb",Hs="srgb-linear",Pa="linear",be="srgb";var us=7680;var Pc=519,dd=512,fd=513,pd=514,qh=515,md=516,gd=517,vd=518,xd=519,Lc=35044;var Dc="300 es",xi=2e3,ha=2001,Ui=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uc=1234567,cr=Math.PI/180,mr=180/Math.PI;function Gs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function ke(i,t,e){return Math.max(t,Math.min(e,i))}function Zl(i,t){return(i%t+t)%t}function yd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Md(i,t,e){return i!==t?(e-i)/(t-i):0}function hr(i,t,e){return(1-e)*i+e*t}function bd(i,t,e,n){return hr(i,t,1-Math.exp(-e*n))}function Sd(i,t=1){return t-Math.abs(Zl(i,t*2)-t)}function Ad(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function wd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ed(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Td(i,t){return i+Math.random()*(t-i)}function _d(i){return i*(.5-Math.random())}function Rd(i){i!==void 0&&(Uc=i);let t=Uc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Cd(i){return i*cr}function Id(i){return i*mr}function Pd(i){return(i&i-1)===0&&i!==0}function Ld(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Dd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ud(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),d=r((t-n)/2),p=a((t-n)/2),f=r((n-t)/2),v=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*d,l*p,o*c);break;case"YZY":i.set(l*p,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*p,o*u,o*c);break;case"XZX":i.set(o*u,l*v,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*v,o*c);break;case"ZYZ":i.set(l*v,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ts(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function rn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var wr={DEG2RAD:cr,RAD2DEG:mr,generateUUID:Gs,clamp:ke,euclideanModulo:Zl,mapLinear:yd,inverseLerp:Md,lerp:hr,damp:bd,pingpong:Sd,smoothstep:Ad,smootherstep:wd,randInt:Ed,randFloat:Td,randFloatSpread:_d,seededRandom:Rd,degToRad:Cd,radToDeg:Id,isPowerOfTwo:Pd,ceilPowerOfTwo:Ld,floorPowerOfTwo:Dd,setQuaternionFromProperEuler:Ud,normalize:rn,denormalize:Ts},St=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},te=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],p=n[2],f=n[5],v=n[8],g=s[0],m=s[3],h=s[6],b=s[1],w=s[4],x=s[7],C=s[2],E=s[5],R=s[8];return r[0]=a*g+o*b+l*C,r[3]=a*m+o*w+l*E,r[6]=a*h+o*x+l*R,r[1]=c*g+u*b+d*C,r[4]=c*m+u*w+d*E,r[7]=c*h+u*x+d*R,r[2]=p*g+f*b+v*C,r[5]=p*m+f*w+v*E,r[8]=p*h+f*x+v*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,p=o*l-u*r,f=c*r-a*l,v=e*d+n*p+s*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/v;return t[0]=d*g,t[1]=(s*c-u*n)*g,t[2]=(o*n-s*a)*g,t[3]=p*g,t[4]=(u*e-s*l)*g,t[5]=(s*r-o*e)*g,t[6]=f*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ja.makeScale(t,e)),this}rotate(t){return this.premultiply(Ja.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ja.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ja=new te;function Yh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ua(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Nd(){let i=ua("canvas");return i.style.display="block",i}var Nc={};function or(i){i in Nc||(Nc[i]=!0,console.warn(i))}function Fd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Bd(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Od(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var me={enabled:!0,workingColorSpace:Hs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===be&&(i.r=yi(i.r),i.g=yi(i.g),i.b=yi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===be&&(i.r=Cs(i.r),i.g=Cs(i.g),i.b=Cs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===zn?Pa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function yi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Fc=[.64,.33,.3,.6,.15,.06],Bc=[.2126,.7152,.0722],Oc=[.3127,.329],kc=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zc=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);me.define({[Hs]:{primaries:Fc,whitePoint:Oc,transfer:Pa,toXYZ:kc,fromXYZ:zc,luminanceCoefficients:Bc,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:Fc,whitePoint:Oc,transfer:be,toXYZ:kc,fromXYZ:zc,luminanceCoefficients:Bc,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}});var ds,cl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ds===void 0&&(ds=ua("canvas")),ds.width=t.width,ds.height=t.height;let n=ds.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ds}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ua("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=yi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(yi(e[n]/255)*255):e[n]=yi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},kd=0,da=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=Gs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ja(s[a].image)):r.push(ja(s[a]))}else r=ja(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ja(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?cl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var zd=0,mn=class i extends Ui{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ji,s=Ji,r=jn,a=ji,o=Vn,l=Mi,c=i.DEFAULT_ANISOTROPY,u=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Gs(),this.name="",this.source=new da(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fr:t.x=t.x-Math.floor(t.x);break;case Ji:t.x=t.x<0?0:1;break;case No:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fr:t.y=t.y-Math.floor(t.y);break;case Ji:t.y=t.y<0?0:1;break;case No:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=Nh;mn.DEFAULT_ANISOTROPY=1;var Ue=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],d=l[8],p=l[1],f=l[5],v=l[9],g=l[2],m=l[6],h=l[10];if(Math.abs(u-p)<.01&&Math.abs(d-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+g)<.1&&Math.abs(v+m)<.1&&Math.abs(c+f+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,x=(f+1)/2,C=(h+1)/2,E=(u+p)/4,R=(d+g)/4,I=(v+m)/4;return w>x&&w>C?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=E/n,r=R/n):x>C?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=E/s,r=I/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=R/r,s=I/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-v)*(m-v)+(d-g)*(d-g)+(p-u)*(p-u));return Math.abs(b)<.001&&(b=1),this.x=(m-v)/b,this.y=(d-g)/b,this.z=(p-u)/b,this.w=Math.acos((c+f+h-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},hl=class extends Ui{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ue(0,0,t,e),this.scissorTest=!1,this.viewport=new Ue(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new mn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new da(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qe=class extends hl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},fa=class extends mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ul=class extends mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ni=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],p=r[a+0],f=r[a+1],v=r[a+2],g=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(o===1){t[e+0]=p,t[e+1]=f,t[e+2]=v,t[e+3]=g;return}if(d!==g||l!==p||c!==f||u!==v){let m=1-o,h=l*p+c*f+u*v+d*g,b=h>=0?1:-1,w=1-h*h;if(w>Number.EPSILON){let C=Math.sqrt(w),E=Math.atan2(C,h*b);m=Math.sin(m*E)/C,o=Math.sin(o*E)/C}let x=o*b;if(l=l*m+p*x,c=c*m+f*x,u=u*m+v*x,d=d*m+g*x,m===1-o){let C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],p=r[a+1],f=r[a+2],v=r[a+3];return t[e]=o*v+u*d+l*f-c*p,t[e+1]=l*v+u*p+c*d-o*f,t[e+2]=c*v+u*f+o*p-l*d,t[e+3]=u*v-o*d-l*p-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),p=l(n/2),f=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=p*u*d+c*f*v,this._y=c*f*d-p*u*v,this._z=c*u*v+p*f*d,this._w=c*u*d-p*f*v;break;case"YXZ":this._x=p*u*d+c*f*v,this._y=c*f*d-p*u*v,this._z=c*u*v-p*f*d,this._w=c*u*d+p*f*v;break;case"ZXY":this._x=p*u*d-c*f*v,this._y=c*f*d+p*u*v,this._z=c*u*v+p*f*d,this._w=c*u*d-p*f*v;break;case"ZYX":this._x=p*u*d-c*f*v,this._y=c*f*d+p*u*v,this._z=c*u*v-p*f*d,this._w=c*u*d+p*f*v;break;case"YZX":this._x=p*u*d+c*f*v,this._y=c*f*d+p*u*v,this._z=c*u*v-p*f*d,this._w=c*u*d-p*f*v;break;case"XZY":this._x=p*u*d-c*f*v,this._y=c*f*d-p*u*v,this._z=c*u*v+p*f*d,this._w=c*u*d+p*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],p=n+o+d;if(p>0){let f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ke(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-e)*u)/c,p=Math.sin(e*u)/c;return this._w=a*d+this._w*p,this._x=n*d+this._x*p,this._y=s*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return $a.copy(this).projectOnVector(t),this.sub($a)}reflect(t){return this.sub($a.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$a=new N,Vc=new Ni,bi=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Fn):Fn.fromBufferAttribute(r,a),Fn.applyMatrix4(t.matrixWorld),this.expandByPoint(Fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fr.copy(n.boundingBox)),Fr.applyMatrix4(t.matrixWorld),this.union(Fr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fn),Fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(er),Br.subVectors(this.max,er),fs.subVectors(t.a,er),ps.subVectors(t.b,er),ms.subVectors(t.c,er),Ei.subVectors(ps,fs),Ti.subVectors(ms,ps),Hi.subVectors(fs,ms);let e=[0,-Ei.z,Ei.y,0,-Ti.z,Ti.y,0,-Hi.z,Hi.y,Ei.z,0,-Ei.x,Ti.z,0,-Ti.x,Hi.z,0,-Hi.x,-Ei.y,Ei.x,0,-Ti.y,Ti.x,0,-Hi.y,Hi.x,0];return!to(e,fs,ps,ms,Br)||(e=[1,0,0,0,1,0,0,0,1],!to(e,fs,ps,ms,Br))?!1:(Or.crossVectors(Ei,Ti),e=[Or.x,Or.y,Or.z],to(e,fs,ps,ms,Br))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ui=[new N,new N,new N,new N,new N,new N,new N,new N],Fn=new N,Fr=new bi,fs=new N,ps=new N,ms=new N,Ei=new N,Ti=new N,Hi=new N,er=new N,Br=new N,Or=new N,Gi=new N;function to(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Gi.fromArray(i,r);let o=s.x*Math.abs(Gi.x)+s.y*Math.abs(Gi.y)+s.z*Math.abs(Gi.z),l=t.dot(Gi),c=e.dot(Gi),u=n.dot(Gi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Vd=new bi,nr=new N,eo=new N,ts=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Vd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;nr.subVectors(t,this.center);let e=nr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(nr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(eo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(nr.copy(t.center).add(eo)),this.expandByPoint(nr.copy(t.center).sub(eo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},di=new N,no=new N,kr=new N,_i=new N,io=new N,zr=new N,so=new N,pa=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(di.copy(this.origin).addScaledVector(this.direction,e),di.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){no.copy(t).add(e).multiplyScalar(.5),kr.copy(e).sub(t).normalize(),_i.copy(this.origin).sub(no);let r=t.distanceTo(e)*.5,a=-this.direction.dot(kr),o=_i.dot(this.direction),l=-_i.dot(kr),c=_i.lengthSq(),u=Math.abs(1-a*a),d,p,f,v;if(u>0)if(d=a*l-o,p=a*o-l,v=r*u,d>=0)if(p>=-v)if(p<=v){let g=1/u;d*=g,p*=g,f=d*(d+a*p+2*o)+p*(a*d+p+2*l)+c}else p=r,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*l)+c;else p=-r,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*l)+c;else p<=-v?(d=Math.max(0,-(-a*r+o)),p=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+p*(p+2*l)+c):p<=v?(d=0,p=Math.min(Math.max(-r,-l),r),f=p*(p+2*l)+c):(d=Math.max(0,-(a*r+o)),p=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+p*(p+2*l)+c);else p=a>0?-r:r,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(no).addScaledVector(kr,p),f}intersectSphere(t,e){di.subVectors(t.center,this.origin);let n=di.dot(this.direction),s=di.dot(di)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),u>=0?(r=(t.min.y-p.y)*u,a=(t.max.y-p.y)*u):(r=(t.max.y-p.y)*u,a=(t.min.y-p.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-p.z)*d,l=(t.max.z-p.z)*d):(o=(t.max.z-p.z)*d,l=(t.min.z-p.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,di)!==null}intersectTriangle(t,e,n,s,r){io.subVectors(e,t),zr.subVectors(n,t),so.crossVectors(io,zr);let a=this.direction.dot(so),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_i.subVectors(this.origin,t);let l=o*this.direction.dot(zr.crossVectors(_i,zr));if(l<0)return null;let c=o*this.direction.dot(io.cross(_i));if(c<0||l+c>a)return null;let u=-o*_i.dot(so);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Se=class i{constructor(t,e,n,s,r,a,o,l,c,u,d,p,f,v,g,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,d,p,f,v,g,m)}set(t,e,n,s,r,a,o,l,c,u,d,p,f,v,g,m){let h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=p,h[3]=f,h[7]=v,h[11]=g,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/gs.setFromMatrixColumn(t,0).length(),r=1/gs.setFromMatrixColumn(t,1).length(),a=1/gs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let p=a*u,f=a*d,v=o*u,g=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+v*c,e[5]=p-g*c,e[9]=-o*l,e[2]=g-p*c,e[6]=v+f*c,e[10]=a*l}else if(t.order==="YXZ"){let p=l*u,f=l*d,v=c*u,g=c*d;e[0]=p+g*o,e[4]=v*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=f*o-v,e[6]=g+p*o,e[10]=a*l}else if(t.order==="ZXY"){let p=l*u,f=l*d,v=c*u,g=c*d;e[0]=p-g*o,e[4]=-a*d,e[8]=v+f*o,e[1]=f+v*o,e[5]=a*u,e[9]=g-p*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let p=a*u,f=a*d,v=o*u,g=o*d;e[0]=l*u,e[4]=v*c-f,e[8]=p*c+g,e[1]=l*d,e[5]=g*c+p,e[9]=f*c-v,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let p=a*l,f=a*c,v=o*l,g=o*c;e[0]=l*u,e[4]=g-p*d,e[8]=v*d+f,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*d+v,e[10]=p-g*d}else if(t.order==="XZY"){let p=a*l,f=a*c,v=o*l,g=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=p*d+g,e[5]=a*u,e[9]=f*d-v,e[2]=v*d-f,e[6]=o*u,e[10]=g*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hd,t,Gd)}lookAt(t,e,n){let s=this.elements;return Sn.subVectors(t,e),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Ri.crossVectors(n,Sn),Ri.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Ri.crossVectors(n,Sn)),Ri.normalize(),Vr.crossVectors(Sn,Ri),s[0]=Ri.x,s[4]=Vr.x,s[8]=Sn.x,s[1]=Ri.y,s[5]=Vr.y,s[9]=Sn.y,s[2]=Ri.z,s[6]=Vr.z,s[10]=Sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],p=n[9],f=n[13],v=n[2],g=n[6],m=n[10],h=n[14],b=n[3],w=n[7],x=n[11],C=n[15],E=s[0],R=s[4],I=s[8],A=s[12],S=s[1],P=s[5],G=s[9],z=s[13],Y=s[2],X=s[6],k=s[10],V=s[14],H=s[3],st=s[7],ut=s[11],Pt=s[15];return r[0]=a*E+o*S+l*Y+c*H,r[4]=a*R+o*P+l*X+c*st,r[8]=a*I+o*G+l*k+c*ut,r[12]=a*A+o*z+l*V+c*Pt,r[1]=u*E+d*S+p*Y+f*H,r[5]=u*R+d*P+p*X+f*st,r[9]=u*I+d*G+p*k+f*ut,r[13]=u*A+d*z+p*V+f*Pt,r[2]=v*E+g*S+m*Y+h*H,r[6]=v*R+g*P+m*X+h*st,r[10]=v*I+g*G+m*k+h*ut,r[14]=v*A+g*z+m*V+h*Pt,r[3]=b*E+w*S+x*Y+C*H,r[7]=b*R+w*P+x*X+C*st,r[11]=b*I+w*G+x*k+C*ut,r[15]=b*A+w*z+x*V+C*Pt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],p=t[10],f=t[14],v=t[3],g=t[7],m=t[11],h=t[15];return v*(+r*l*d-s*c*d-r*o*p+n*c*p+s*o*f-n*l*f)+g*(+e*l*f-e*c*p+r*a*p-s*a*f+s*c*u-r*l*u)+m*(+e*c*d-e*o*f-r*a*d+n*a*f+r*o*u-n*c*u)+h*(-s*o*u-e*l*d+e*o*p+s*a*d-n*a*p+n*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],p=t[10],f=t[11],v=t[12],g=t[13],m=t[14],h=t[15],b=d*m*c-g*p*c+g*l*f-o*m*f-d*l*h+o*p*h,w=v*p*c-u*m*c-v*l*f+a*m*f+u*l*h-a*p*h,x=u*g*c-v*d*c+v*o*f-a*g*f-u*o*h+a*d*h,C=v*d*l-u*g*l-v*o*p+a*g*p+u*o*m-a*d*m,E=e*b+n*w+s*x+r*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/E;return t[0]=b*R,t[1]=(g*p*r-d*m*r-g*s*f+n*m*f+d*s*h-n*p*h)*R,t[2]=(o*m*r-g*l*r+g*s*c-n*m*c-o*s*h+n*l*h)*R,t[3]=(d*l*r-o*p*r-d*s*c+n*p*c+o*s*f-n*l*f)*R,t[4]=w*R,t[5]=(u*m*r-v*p*r+v*s*f-e*m*f-u*s*h+e*p*h)*R,t[6]=(v*l*r-a*m*r-v*s*c+e*m*c+a*s*h-e*l*h)*R,t[7]=(a*p*r-u*l*r+u*s*c-e*p*c-a*s*f+e*l*f)*R,t[8]=x*R,t[9]=(v*d*r-u*g*r-v*n*f+e*g*f+u*n*h-e*d*h)*R,t[10]=(a*g*r-v*o*r+v*n*c-e*g*c-a*n*h+e*o*h)*R,t[11]=(u*o*r-a*d*r-u*n*c+e*d*c+a*n*f-e*o*f)*R,t[12]=C*R,t[13]=(u*g*s-v*d*s+v*n*p-e*g*p-u*n*m+e*d*m)*R,t[14]=(v*o*s-a*g*s-v*n*l+e*g*l+a*n*m-e*o*m)*R,t[15]=(a*d*s-u*o*s+u*n*l-e*d*l-a*n*p+e*o*p)*R,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,p=r*c,f=r*u,v=r*d,g=a*u,m=a*d,h=o*d,b=l*c,w=l*u,x=l*d,C=n.x,E=n.y,R=n.z;return s[0]=(1-(g+h))*C,s[1]=(f+x)*C,s[2]=(v-w)*C,s[3]=0,s[4]=(f-x)*E,s[5]=(1-(p+h))*E,s[6]=(m+b)*E,s[7]=0,s[8]=(v+w)*R,s[9]=(m-b)*R,s[10]=(1-(p+g))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=gs.set(s[0],s[1],s[2]).length(),a=gs.set(s[4],s[5],s[6]).length(),o=gs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Bn.copy(this);let c=1/r,u=1/a,d=1/o;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=u,Bn.elements[5]*=u,Bn.elements[6]*=u,Bn.elements[8]*=d,Bn.elements[9]*=d,Bn.elements[10]*=d,e.setFromRotationMatrix(Bn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=xi){let l=this.elements,c=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s),f,v;if(o===xi)f=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===ha)f=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=xi){let l=this.elements,c=1/(e-t),u=1/(n-s),d=1/(a-r),p=(e+t)*c,f=(n+s)*u,v,g;if(o===xi)v=(a+r)*d,g=-2*d;else if(o===ha)v=r*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},gs=new N,Bn=new Se,Hd=new N(0,0,0),Gd=new N(1,1,1),Ri=new N,Vr=new N,Sn=new N,Hc=new Se,Gc=new Ni,ii=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],p=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ke(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Hc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gc.setFromEuler(this),this.setFromQuaternion(Gc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ii.DEFAULT_ORDER="XYZ";var gr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Wd=0,Wc=new N,vs=new Ni,fi=new Se,Hr=new N,ir=new N,Xd=new N,qd=new Ni,Xc=new N(1,0,0),qc=new N(0,1,0),Yc=new N(0,0,1),Qc={type:"added"},Yd={type:"removed"},xs={type:"childadded",child:null},ro={type:"childremoved",child:null},gn=class i extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=Gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new ii,n=new Ni,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Se},normalMatrix:{value:new te}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vs.setFromAxisAngle(t,e),this.quaternion.multiply(vs),this}rotateOnWorldAxis(t,e){return vs.setFromAxisAngle(t,e),this.quaternion.premultiply(vs),this}rotateX(t){return this.rotateOnAxis(Xc,t)}rotateY(t){return this.rotateOnAxis(qc,t)}rotateZ(t){return this.rotateOnAxis(Yc,t)}translateOnAxis(t,e){return Wc.copy(t).applyQuaternion(this.quaternion),this.position.add(Wc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xc,t)}translateY(t){return this.translateOnAxis(qc,t)}translateZ(t){return this.translateOnAxis(Yc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Hr.copy(t):Hr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(ir,Hr,this.up):fi.lookAt(Hr,ir,this.up),this.quaternion.setFromRotationMatrix(fi),s&&(fi.extractRotation(s.matrixWorld),vs.setFromRotationMatrix(fi),this.quaternion.premultiply(vs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qc),xs.child=t,this.dispatchEvent(xs),xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yd),ro.child=t,this.dispatchEvent(ro),ro.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fi.multiply(t.parent.matrixWorld)),t.applyMatrix4(fi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qc),xs.child=t,this.dispatchEvent(xs),xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,t,Xd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,qd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),p=a(t.skeletons),f=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};gn.DEFAULT_UP=new N(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var On=new N,pi=new N,ao=new N,mi=new N,ys=new N,Ms=new N,Zc=new N,oo=new N,lo=new N,co=new N,ho=new Ue,uo=new Ue,fo=new Ue,Zi=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),On.subVectors(t,e),s.cross(On);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){On.subVectors(s,e),pi.subVectors(n,e),ao.subVectors(t,e);let a=On.dot(On),o=On.dot(pi),l=On.dot(ao),c=pi.dot(pi),u=pi.dot(ao),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let p=1/d,f=(c*l-o*u)*p,v=(a*u-o*l)*p;return r.set(1-f-v,v,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,mi.x),l.addScaledVector(a,mi.y),l.addScaledVector(o,mi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return ho.setScalar(0),uo.setScalar(0),fo.setScalar(0),ho.fromBufferAttribute(t,e),uo.fromBufferAttribute(t,n),fo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ho,r.x),a.addScaledVector(uo,r.y),a.addScaledVector(fo,r.z),a}static isFrontFacing(t,e,n,s){return On.subVectors(n,e),pi.subVectors(t,e),On.cross(pi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return On.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),On.cross(pi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ys.subVectors(s,n),Ms.subVectors(r,n),oo.subVectors(t,n);let l=ys.dot(oo),c=Ms.dot(oo);if(l<=0&&c<=0)return e.copy(n);lo.subVectors(t,s);let u=ys.dot(lo),d=Ms.dot(lo);if(u>=0&&d<=u)return e.copy(s);let p=l*d-u*c;if(p<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(ys,a);co.subVectors(t,r);let f=ys.dot(co),v=Ms.dot(co);if(v>=0&&f<=v)return e.copy(r);let g=f*c-l*v;if(g<=0&&c>=0&&v<=0)return o=c/(c-v),e.copy(n).addScaledVector(Ms,o);let m=u*v-f*d;if(m<=0&&d-u>=0&&f-v>=0)return Zc.subVectors(r,s),o=(d-u)/(d-u+(f-v)),e.copy(s).addScaledVector(Zc,o);let h=1/(m+g+p);return a=g*h,o=p*h,e.copy(n).addScaledVector(ys,a).addScaledVector(Ms,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Qh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function po(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=me.workingColorSpace){if(t=Zl(t,1),e=ke(e,0,1),n=ke(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=po(a,r,t+1/3),this.g=po(a,r,t),this.b=po(a,r,t-1/3)}return me.toWorkingColorSpace(this,s),this}setStyle(t,e=pn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pn){let n=Qh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yi(t.r),this.g=yi(t.g),this.b=yi(t.b),this}copyLinearToSRGB(t){return this.r=Cs(t.r),this.g=Cs(t.g),this.b=Cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pn){return me.fromWorkingColorSpace($e.copy(this),t),Math.round(ke($e.r*255,0,255))*65536+Math.round(ke($e.g*255,0,255))*256+Math.round(ke($e.b*255,0,255))}getHexString(t=pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.fromWorkingColorSpace($e.copy(this),e);let n=$e.r,s=$e.g,r=$e.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=me.workingColorSpace){return me.fromWorkingColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=pn){me.fromWorkingColorSpace($e.copy(this),t);let e=$e.r,n=$e.g,s=$e.b;return t!==pn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ci),this.setHSL(Ci.h+t,Ci.s+e,Ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ci),t.getHSL(Gr);let n=hr(Ci.h,Gr.h,e),s=hr(Ci.s,Gr.s,e),r=hr(Ci.l,Gr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$e=new Kt;Kt.NAMES=Qh;var Qd=0,es=class extends Ui{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=Gs(),this.name="",this.blending=Pi,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eo,this.blendDst=dr,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pi&&(n.blending=this.blending),this.side!==Li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Eo&&(n.blendSrc=this.blendSrc),this.blendDst!==dr&&(n.blendDst=this.blendDst),this.blendEquation!==Jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Hn=class extends es{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=Uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Be=new N,Wr=new St,En=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Lc,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Wr.fromBufferAttribute(this,e),Wr.applyMatrix3(t),this.setXY(e,Wr.x,Wr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ts(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=rn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ts(e,this.array)),e}setX(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ts(e,this.array)),e}setY(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ts(e,this.array)),e}setZ(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ts(e,this.array)),e}setW(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),s=rn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),s=rn(s,this.array),r=rn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Lc&&(t.usage=this.usage),t}};var ma=class extends En{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ga=class extends En{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ye=class extends En{constructor(t,e,n){super(new Float32Array(t),e,n)}},Zd=0,In=new Se,mo=new gn,bs=new N,An=new bi,sr=new bi,We=new N,en=class i extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yh(t)?ga:ma)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return In.makeRotationFromQuaternion(t),this.applyMatrix4(In),this}rotateX(t){return In.makeRotationX(t),this.applyMatrix4(In),this}rotateY(t){return In.makeRotationY(t),this.applyMatrix4(In),this}rotateZ(t){return In.makeRotationZ(t),this.applyMatrix4(In),this}translate(t,e,n){return In.makeTranslation(t,e,n),this.applyMatrix4(In),this}scale(t,e,n){return In.makeScale(t,e,n),this.applyMatrix4(In),this}lookAt(t){return mo.lookAt(t),mo.updateMatrix(),this.applyMatrix4(mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ye(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];An.setFromBufferAttribute(r),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ts);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(An.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];sr.setFromBufferAttribute(o),this.morphTargetsRelative?(We.addVectors(An.min,sr.min),An.expandByPoint(We),We.addVectors(An.max,sr.max),An.expandByPoint(We)):(An.expandByPoint(sr.min),An.expandByPoint(sr.max))}An.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)We.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(We));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)We.fromBufferAttribute(o,c),l&&(bs.fromBufferAttribute(t,c),We.add(bs)),s=Math.max(s,n.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new N,l[I]=new N;let c=new N,u=new N,d=new N,p=new St,f=new St,v=new St,g=new N,m=new N;function h(I,A,S){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,A),d.fromBufferAttribute(n,S),p.fromBufferAttribute(r,I),f.fromBufferAttribute(r,A),v.fromBufferAttribute(r,S),u.sub(c),d.sub(c),f.sub(p),v.sub(p);let P=1/(f.x*v.y-v.x*f.y);isFinite(P)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-v.x).multiplyScalar(P),o[I].add(g),o[A].add(g),o[S].add(g),l[I].add(m),l[A].add(m),l[S].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let I=0,A=b.length;I<A;++I){let S=b[I],P=S.start,G=S.count;for(let z=P,Y=P+G;z<Y;z+=3)h(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let w=new N,x=new N,C=new N,E=new N;function R(I){C.fromBufferAttribute(s,I),E.copy(C);let A=o[I];w.copy(A),w.sub(C.multiplyScalar(C.dot(A))).normalize(),x.crossVectors(E,A);let P=x.dot(l[I])<0?-1:1;a.setXYZW(I,w.x,w.y,w.z,P)}for(let I=0,A=b.length;I<A;++I){let S=b[I],P=S.start,G=S.count;for(let z=P,Y=P+G;z<Y;z+=3)R(t.getX(z+0)),R(t.getX(z+1)),R(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new En(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);let s=new N,r=new N,a=new N,o=new N,l=new N,c=new N,u=new N,d=new N;if(t)for(let p=0,f=t.count;p<f;p+=3){let v=t.getX(p+0),g=t.getX(p+1),m=t.getX(p+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,f=e.count;p<f;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,d=o.normalized,p=new c.constructor(l.length*u),f=0,v=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*u;for(let h=0;h<u;h++)p[v++]=c[f++]}return new En(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let p=c[u],f=t(p,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,p=c.length;d<p;d++){let f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let p=0,f=d.length;p<f;p++)u.push(d[p].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kc=new Se,Wi=new pa,Xr=new ts,Jc=new N,qr=new N,Yr=new N,Qr=new N,go=new N,Zr=new N,jc=new N,Kr=new N,ae=class extends gn{constructor(t=new en,e=new Hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Zr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(go.fromBufferAttribute(d,t),a?Zr.addScaledVector(go,u):Zr.addScaledVector(go.sub(e),u))}e.add(Zr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(r),Wi.copy(t.ray).recast(t.near),!(Xr.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(Xr,Jc)===null||Wi.origin.distanceToSquared(Jc)>(t.far-t.near)**2))&&(Kc.copy(r).invert(),Wi.copy(t.ray).applyMatrix4(Kc),!(n.boundingBox!==null&&Wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Wi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,p=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,g=p.length;v<g;v++){let m=p[v],h=a[m.materialIndex],b=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=b,C=w;x<C;x+=3){let E=o.getX(x),R=o.getX(x+1),I=o.getX(x+2);s=Jr(this,h,t,n,c,u,d,E,R,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let v=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=v,h=g;m<h;m+=3){let b=o.getX(m),w=o.getX(m+1),x=o.getX(m+2);s=Jr(this,a,t,n,c,u,d,b,w,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,g=p.length;v<g;v++){let m=p[v],h=a[m.materialIndex],b=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=b,C=w;x<C;x+=3){let E=x,R=x+1,I=x+2;s=Jr(this,h,t,n,c,u,d,E,R,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let v=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=v,h=g;m<h;m+=3){let b=m,w=m+1,x=m+2;s=Jr(this,a,t,n,c,u,d,b,w,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Kd(i,t,e,n,s,r,a,o){let l;if(t.side===tn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Li,o),l===null)return null;Kr.copy(o),Kr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Kr);return c<e.near||c>e.far?null:{distance:c,point:Kr.clone(),object:i}}function Jr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,qr),i.getVertexPosition(l,Yr),i.getVertexPosition(c,Qr);let u=Kd(i,t,e,n,qr,Yr,Qr,jc);if(u){let d=new N;Zi.getBarycoord(jc,qr,Yr,Qr,d),s&&(u.uv=Zi.getInterpolatedAttribute(s,o,l,c,d,new St)),r&&(u.uv1=Zi.getInterpolatedAttribute(r,o,l,c,d,new St)),a&&(u.normal=Zi.getInterpolatedAttribute(a,o,l,c,d,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let p={a:o,b:l,c,normal:new N,materialIndex:0};Zi.getNormal(qr,Yr,Qr,p.normal),u.face=p,u.barycoord=d}return u}var ns=class i extends en{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],p=0,f=0;v("z","y","x",-1,-1,n,e,t,a,r,0),v("z","y","x",1,-1,n,e,-t,a,r,1),v("x","z","y",1,1,t,n,e,s,a,2),v("x","z","y",1,-1,t,n,-e,s,a,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(u,3)),this.setAttribute("uv",new ye(d,2));function v(g,m,h,b,w,x,C,E,R,I,A){let S=x/R,P=C/I,G=x/2,z=C/2,Y=E/2,X=R+1,k=I+1,V=0,H=0,st=new N;for(let ut=0;ut<k;ut++){let Pt=ut*P-z;for(let At=0;At<X;At++){let de=At*S-G;st[g]=de*b,st[m]=Pt*w,st[h]=Y,c.push(st.x,st.y,st.z),st[g]=0,st[m]=0,st[h]=E>0?1:-1,u.push(st.x,st.y,st.z),d.push(At/R),d.push(1-ut/I),V+=1}}for(let ut=0;ut<I;ut++)for(let Pt=0;Pt<R;Pt++){let At=p+Pt+X*ut,de=p+Pt+X*(ut+1),K=p+(Pt+1)+X*(ut+1),rt=p+(Pt+1)+X*ut;l.push(At,de,rt),l.push(de,K,rt),H+=6}o.addGroup(f,H,A),f+=H,p+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Fs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function an(i){let t={};for(let e=0;e<i.length;e++){let n=Fs(i[e]);for(let s in n)t[s]=n[s]}return t}function Jd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Zh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}var Ws={clone:Fs,merge:an},jd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$d=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pe=class extends es{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jd,this.fragmentShader=$d,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fs(t.uniforms),this.uniformsGroups=Jd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},va=class extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=xi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ii=new N,$c=new St,th=new St,on=class extends va{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=mr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(cr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return mr*2*Math.atan(Math.tan(cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z)}getViewSize(t,e){return this.getViewBounds(t,$c,th),e.subVectors(th,$c)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(cr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ss=-90,As=1,dl=class extends gn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new on(Ss,As,t,e);s.layers=this.layers,this.add(s);let r=new on(Ss,As,t,e);r.layers=this.layers,this.add(r);let a=new on(Ss,As,t,e);a.layers=this.layers,this.add(a);let o=new on(Ss,As,t,e);o.layers=this.layers,this.add(o);let l=new on(Ss,As,t,e);l.layers=this.layers,this.add(l);let c=new on(Ss,As,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===xi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ha)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(d,p,f),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},xa=class extends mn{constructor(t,e,n,s,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Ls,super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},fl=class extends Qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new xa(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:jn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ns(5,5,5),r=new Pe({name:"CubemapFromEquirect",uniforms:Fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:ei});r.uniforms.tEquirect.value=e;let a=new ae(s,r),o=e.minFilter;return e.minFilter===ji&&(e.minFilter=jn),new dl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},vo=new N,tf=new N,ef=new te,vi=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=vo.subVectors(n,e).cross(tf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(vo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ef.getNormalMatrix(t),s=this.coplanarPoint(vo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Xi=new ts,jr=new N,vr=class{constructor(t=new vi,e=new vi,n=new vi,s=new vi,r=new vi,a=new vi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=xi){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],d=s[6],p=s[7],f=s[8],v=s[9],g=s[10],m=s[11],h=s[12],b=s[13],w=s[14],x=s[15];if(n[0].setComponents(l-r,p-c,m-f,x-h).normalize(),n[1].setComponents(l+r,p+c,m+f,x+h).normalize(),n[2].setComponents(l+a,p+u,m+v,x+b).normalize(),n[3].setComponents(l-a,p-u,m-v,x-b).normalize(),n[4].setComponents(l-o,p-d,m-g,x-w).normalize(),e===xi)n[5].setComponents(l+o,p+d,m+g,x+w).normalize();else if(e===ha)n[5].setComponents(o,d,g,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(t){return Xi.center.set(0,0,0),Xi.radius=.7071067811865476,Xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(jr.x=s.normal.x>0?t.max.x:t.min.x,jr.y=s.normal.y>0?t.max.y:t.min.y,jr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(jr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Kh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function nf(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,d=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,v)=>f.start-v.start);let p=0;for(let f=1;f<d.length;f++){let v=d[p],g=d[f];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++p,d[p]=g)}d.length=p+1;for(let f=0,v=d.length;f<v;f++){let g=d[f];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Si=class i extends en{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=t/o,p=e/l,f=[],v=[],g=[],m=[];for(let h=0;h<u;h++){let b=h*p-a;for(let w=0;w<c;w++){let x=w*d-r;v.push(x,-b,0),g.push(0,0,1),m.push(w/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let b=0;b<o;b++){let w=b+c*h,x=b+c*(h+1),C=b+1+c*(h+1),E=b+1+c*h;f.push(w,x,E),f.push(x,C,E)}this.setIndex(f),this.setAttribute("position",new ye(v,3)),this.setAttribute("normal",new ye(g,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},sf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,af=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,of=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,df=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ff=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,_f=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Rf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,If=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Df=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ff=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Bf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Of=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Kf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Jf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$f=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ep=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,np=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ip=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ap=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,op=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,up=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Mp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Sp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ep=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_p=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ip=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Dp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Up=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Np=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Op=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,im=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,am=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,um=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ym=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Sm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Am=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Em=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_m=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Rm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Im=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Lm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Um=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Nm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ne={alphahash_fragment:sf,alphahash_pars_fragment:rf,alphamap_fragment:af,alphamap_pars_fragment:of,alphatest_fragment:lf,alphatest_pars_fragment:cf,aomap_fragment:hf,aomap_pars_fragment:uf,batching_pars_vertex:df,batching_vertex:ff,begin_vertex:pf,beginnormal_vertex:mf,bsdfs:gf,iridescence_fragment:vf,bumpmap_pars_fragment:xf,clipping_planes_fragment:yf,clipping_planes_pars_fragment:Mf,clipping_planes_pars_vertex:bf,clipping_planes_vertex:Sf,color_fragment:Af,color_pars_fragment:wf,color_pars_vertex:Ef,color_vertex:Tf,common:_f,cube_uv_reflection_fragment:Rf,defaultnormal_vertex:Cf,displacementmap_pars_vertex:If,displacementmap_vertex:Pf,emissivemap_fragment:Lf,emissivemap_pars_fragment:Df,colorspace_fragment:Uf,colorspace_pars_fragment:Nf,envmap_fragment:Ff,envmap_common_pars_fragment:Bf,envmap_pars_fragment:Of,envmap_pars_vertex:kf,envmap_physical_pars_fragment:Kf,envmap_vertex:zf,fog_vertex:Vf,fog_pars_vertex:Hf,fog_fragment:Gf,fog_pars_fragment:Wf,gradientmap_pars_fragment:Xf,lightmap_pars_fragment:qf,lights_lambert_fragment:Yf,lights_lambert_pars_fragment:Qf,lights_pars_begin:Zf,lights_toon_fragment:Jf,lights_toon_pars_fragment:jf,lights_phong_fragment:$f,lights_phong_pars_fragment:tp,lights_physical_fragment:ep,lights_physical_pars_fragment:np,lights_fragment_begin:ip,lights_fragment_maps:sp,lights_fragment_end:rp,logdepthbuf_fragment:ap,logdepthbuf_pars_fragment:op,logdepthbuf_pars_vertex:lp,logdepthbuf_vertex:cp,map_fragment:hp,map_pars_fragment:up,map_particle_fragment:dp,map_particle_pars_fragment:fp,metalnessmap_fragment:pp,metalnessmap_pars_fragment:mp,morphinstance_vertex:gp,morphcolor_vertex:vp,morphnormal_vertex:xp,morphtarget_pars_vertex:yp,morphtarget_vertex:Mp,normal_fragment_begin:bp,normal_fragment_maps:Sp,normal_pars_fragment:Ap,normal_pars_vertex:wp,normal_vertex:Ep,normalmap_pars_fragment:Tp,clearcoat_normal_fragment_begin:_p,clearcoat_normal_fragment_maps:Rp,clearcoat_pars_fragment:Cp,iridescence_pars_fragment:Ip,opaque_fragment:Pp,packing:Lp,premultiplied_alpha_fragment:Dp,project_vertex:Up,dithering_fragment:Np,dithering_pars_fragment:Fp,roughnessmap_fragment:Bp,roughnessmap_pars_fragment:Op,shadowmap_pars_fragment:kp,shadowmap_pars_vertex:zp,shadowmap_vertex:Vp,shadowmask_pars_fragment:Hp,skinbase_vertex:Gp,skinning_pars_vertex:Wp,skinning_vertex:Xp,skinnormal_vertex:qp,specularmap_fragment:Yp,specularmap_pars_fragment:Qp,tonemapping_fragment:Zp,tonemapping_pars_fragment:Kp,transmission_fragment:Jp,transmission_pars_fragment:jp,uv_pars_fragment:$p,uv_pars_vertex:tm,uv_vertex:em,worldpos_vertex:nm,background_vert:im,background_frag:sm,backgroundCube_vert:rm,backgroundCube_frag:am,cube_vert:om,cube_frag:lm,depth_vert:cm,depth_frag:hm,distanceRGBA_vert:um,distanceRGBA_frag:dm,equirect_vert:fm,equirect_frag:pm,linedashed_vert:mm,linedashed_frag:gm,meshbasic_vert:vm,meshbasic_frag:xm,meshlambert_vert:ym,meshlambert_frag:Mm,meshmatcap_vert:bm,meshmatcap_frag:Sm,meshnormal_vert:Am,meshnormal_frag:wm,meshphong_vert:Em,meshphong_frag:Tm,meshphysical_vert:_m,meshphysical_frag:Rm,meshtoon_vert:Cm,meshtoon_frag:Im,points_vert:Pm,points_frag:Lm,shadow_vert:Dm,shadow_frag:Um,sprite_vert:Nm,sprite_frag:Fm},Mt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},Kn={basic:{uniforms:an([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:an([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:an([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:an([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:an([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:an([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:an([Mt.points,Mt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:an([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:an([Mt.common,Mt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:an([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:an([Mt.sprite,Mt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distanceRGBA:{uniforms:an([Mt.common,Mt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distanceRGBA_vert,fragmentShader:ne.distanceRGBA_frag},shadow:{uniforms:an([Mt.lights,Mt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};Kn.physical={uniforms:an([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};var $r={r:0,b:0,g:0},qi=new ii,Bm=new Se;function Om(i,t,e,n,s,r,a){let o=new Kt(0),l=r===!0?0:1,c,u,d=null,p=0,f=null;function v(b){let w=b.isScene===!0?b.background:null;return w&&w.isTexture&&(w=(b.backgroundBlurriness>0?e:t).get(w)),w}function g(b){let w=!1,x=v(b);x===null?h(o,l):x&&x.isColor&&(h(x,1),w=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,w){let x=v(w);x&&(x.isCubeTexture||x.mapping===Ia)?(u===void 0&&(u=new ae(new ns(1,1,1),new Pe({name:"BackgroundCubeMaterial",uniforms:Fs(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),qi.copy(w.backgroundRotation),qi.x*=-1,qi.y*=-1,qi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Bm.makeRotationFromEuler(qi)),u.material.toneMapped=me.getTransfer(x.colorSpace)!==be,(d!==x||p!==x.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=x,p=x.version,f=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ae(new Si(2,2),new Pe({name:"BackgroundMaterial",uniforms:Fs(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=me.getTransfer(x.colorSpace)!==be,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||p!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=x,p=x.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function h(b,w){b.getRGB($r,Zh(i)),n.buffers.color.setClear($r.r,$r.g,$r.b,w,a)}return{getClearColor:function(){return o},setClearColor:function(b,w=1){o.set(b),l=w,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,h(o,l)},render:g,addToRenderList:m}}function km(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,a=!1;function o(S,P,G,z,Y){let X=!1,k=d(z,G,P);r!==k&&(r=k,c(r.object)),X=f(S,z,G,Y),X&&v(S,z,G,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,x(S,P,G,z),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function d(S,P,G){let z=G.wireframe===!0,Y=n[S.id];Y===void 0&&(Y={},n[S.id]=Y);let X=Y[P.id];X===void 0&&(X={},Y[P.id]=X);let k=X[z];return k===void 0&&(k=p(l()),X[z]=k),k}function p(S){let P=[],G=[],z=[];for(let Y=0;Y<e;Y++)P[Y]=0,G[Y]=0,z[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:G,attributeDivisors:z,object:S,attributes:{},index:null}}function f(S,P,G,z){let Y=r.attributes,X=P.attributes,k=0,V=G.getAttributes();for(let H in V)if(V[H].location>=0){let ut=Y[H],Pt=X[H];if(Pt===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(Pt=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(Pt=S.instanceColor)),ut===void 0||ut.attribute!==Pt||Pt&&ut.data!==Pt.data)return!0;k++}return r.attributesNum!==k||r.index!==z}function v(S,P,G,z){let Y={},X=P.attributes,k=0,V=G.getAttributes();for(let H in V)if(V[H].location>=0){let ut=X[H];ut===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(ut=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(ut=S.instanceColor));let Pt={};Pt.attribute=ut,ut&&ut.data&&(Pt.data=ut.data),Y[H]=Pt,k++}r.attributes=Y,r.attributesNum=k,r.index=z}function g(){let S=r.newAttributes;for(let P=0,G=S.length;P<G;P++)S[P]=0}function m(S){h(S,0)}function h(S,P){let G=r.newAttributes,z=r.enabledAttributes,Y=r.attributeDivisors;G[S]=1,z[S]===0&&(i.enableVertexAttribArray(S),z[S]=1),Y[S]!==P&&(i.vertexAttribDivisor(S,P),Y[S]=P)}function b(){let S=r.newAttributes,P=r.enabledAttributes;for(let G=0,z=P.length;G<z;G++)P[G]!==S[G]&&(i.disableVertexAttribArray(G),P[G]=0)}function w(S,P,G,z,Y,X,k){k===!0?i.vertexAttribIPointer(S,P,G,Y,X):i.vertexAttribPointer(S,P,G,z,Y,X)}function x(S,P,G,z){g();let Y=z.attributes,X=G.getAttributes(),k=P.defaultAttributeValues;for(let V in X){let H=X[V];if(H.location>=0){let st=Y[V];if(st===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(st=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(st=S.instanceColor)),st!==void 0){let ut=st.normalized,Pt=st.itemSize,At=t.get(st);if(At===void 0)continue;let de=At.buffer,K=At.type,rt=At.bytesPerElement,Rt=K===i.INT||K===i.UNSIGNED_INT||st.gpuType===Hl;if(st.isInterleavedBufferAttribute){let dt=st.data,zt=dt.stride,Vt=st.offset;if(dt.isInstancedInterleavedBuffer){for(let qt=0;qt<H.locationSize;qt++)h(H.location+qt,dt.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let qt=0;qt<H.locationSize;qt++)m(H.location+qt);i.bindBuffer(i.ARRAY_BUFFER,de);for(let qt=0;qt<H.locationSize;qt++)w(H.location+qt,Pt/H.locationSize,K,ut,zt*rt,(Vt+Pt/H.locationSize*qt)*rt,Rt)}else{if(st.isInstancedBufferAttribute){for(let dt=0;dt<H.locationSize;dt++)h(H.location+dt,st.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let dt=0;dt<H.locationSize;dt++)m(H.location+dt);i.bindBuffer(i.ARRAY_BUFFER,de);for(let dt=0;dt<H.locationSize;dt++)w(H.location+dt,Pt/H.locationSize,K,ut,Pt*rt,Pt/H.locationSize*dt*rt,Rt)}}else if(k!==void 0){let ut=k[V];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(H.location,ut);break;case 3:i.vertexAttrib3fv(H.location,ut);break;case 4:i.vertexAttrib4fv(H.location,ut);break;default:i.vertexAttrib1fv(H.location,ut)}}}}b()}function C(){I();for(let S in n){let P=n[S];for(let G in P){let z=P[G];for(let Y in z)u(z[Y].object),delete z[Y];delete P[G]}delete n[S]}}function E(S){if(n[S.id]===void 0)return;let P=n[S.id];for(let G in P){let z=P[G];for(let Y in z)u(z[Y].object),delete z[Y];delete P[G]}delete n[S.id]}function R(S){for(let P in n){let G=n[P];if(G[S.id]===void 0)continue;let z=G[S.id];for(let Y in z)u(z[Y].object),delete z[Y];delete G[S.id]}}function I(){A(),a=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:A,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:m,disableUnusedAttributes:b}}function zm(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),e.update(u,n,d))}function o(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let f=0;for(let v=0;v<d;v++)f+=u[v];e.update(f,n,1)}function l(c,u,d,p){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<c.length;v++)a(c[v],u[v],p[v]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,p,0,d);let v=0;for(let g=0;g<d;g++)v+=u[g]*p[g];e.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Vm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Vn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let I=R===Tn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Mi&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==$n&&!I)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=v>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:p,maxTextures:f,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:x,vertexTextures:C,maxSamples:E}}function Hm(i){let t=this,e=null,n=0,s=!1,r=!1,a=new vi,o=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let f=d.length!==0||p||n!==0||s;return s=p,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){e=u(d,p,0)},this.setState=function(d,p,f){let v=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,h=i.get(d);if(!s||v===null||v.length===0||r&&!m)r?u(null):c();else{let b=r?0:n,w=b*4,x=h.clippingState||null;l.value=x,x=u(v,p,w,f);for(let C=0;C!==w;++C)x[C]=e[C];h.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,p,f,v){let g=d!==null?d.length:0,m=null;if(g!==0){if(m=l.value,v!==!0||m===null){let h=f+g*4,b=p.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<h)&&(m=new Float32Array(h));for(let w=0,x=f;w!==g;++w,x+=4)a.copy(d[w]).applyMatrix4(b,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Gm(i){let t=new WeakMap;function e(a,o){return o===Do?a.mapping=Ls:o===Uo&&(a.mapping=Ds),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Do||o===Uo)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new fl(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Bs=class extends va{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},_s=4,eh=[.125,.215,.35,.446,.526,.582],Ki=20,xo=new Bs,nh=new Kt,yo=null,Mo=0,bo=0,So=!1,Qi=(1+Math.sqrt(5))/2,ws=1/Qi,ih=[new N(-Qi,ws,0),new N(Qi,ws,0),new N(-ws,0,Qi),new N(ws,0,Qi),new N(0,Qi,-ws),new N(0,Qi,ws),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],Os=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){yo=this._renderer.getRenderTarget(),Mo=this._renderer.getActiveCubeFace(),bo=this._renderer.getActiveMipmapLevel(),So=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ah(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(yo,Mo,bo),this._renderer.xr.enabled=So,t.scissorTest=!1,ta(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ls||t.mapping===Ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yo=this._renderer.getRenderTarget(),Mo=this._renderer.getActiveCubeFace(),bo=this._renderer.getActiveMipmapLevel(),So=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:Tn,format:Vn,colorSpace:Hs,depthBuffer:!1},s=sh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wm(r)),this._blurMaterial=Xm(r,t,e)}return s}_compileMaterial(t){let e=new ae(this._lodPlanes[0],t);this._renderer.compile(e,xo)}_sceneToCubeUV(t,e,n,s){let o=new on(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(nh),u.toneMapping=ni,u.autoClear=!1;let f=new Hn({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),v=new ae(new ns,f),g=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,g=!0):(f.color.copy(nh),g=!0);for(let h=0;h<6;h++){let b=h%3;b===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):b===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));let w=this._cubeSize;ta(s,b*w,h>2?w:0,w,w),u.setRenderTarget(s),g&&u.render(v,o),u.render(t,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=p,u.autoClear=d,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ls||t.mapping===Ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ah()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ae(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;ta(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,xo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ih[(s-r-1)%ih.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new ae(this._lodPlanes[s],c),p=c.uniforms,f=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ki-1),g=r/v,m=isFinite(r)?1+Math.floor(u*g):Ki;m>Ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ki}`);let h=[],b=0;for(let R=0;R<Ki;++R){let I=R/g,A=Math.exp(-I*I/2);h.push(A),R===0?b+=A:R<m&&(b+=2*A)}for(let R=0;R<h.length;R++)h[R]=h[R]/b;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=h,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:w}=this;p.dTheta.value=v,p.mipInt.value=w-n;let x=this._sizeLods[s],C=3*x*(s>w-_s?s-w+_s:0),E=4*(this._cubeSize-x);ta(e,C,E,3*x,2*x),l.setRenderTarget(e),l.render(d,xo)}};function Wm(i){let t=[],e=[],n=[],s=i,r=i-_s+1+eh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-_s?l=eh[a-i+_s-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,d=1+c,p=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,v=6,g=3,m=2,h=1,b=new Float32Array(g*v*f),w=new Float32Array(m*v*f),x=new Float32Array(h*v*f);for(let E=0;E<f;E++){let R=E%3*2/3-1,I=E>2?0:-1,A=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];b.set(A,g*v*E),w.set(p,m*v*E);let S=[E,E,E,E,E,E];x.set(S,h*v*E)}let C=new en;C.setAttribute("position",new En(b,g)),C.setAttribute("uv",new En(w,m)),C.setAttribute("faceIndex",new En(x,h)),t.push(C),s>_s&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function sh(i,t,e){let n=new Qe(i,t,e);return n.texture.mapping=Ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ta(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Xm(i,t,e){let n=new Float32Array(Ki),s=new N(0,1,0);return new Pe({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function rh(){return new Pe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function ah(){return new Pe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Kl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qm(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Do||l===Uo,u=l===Ls||l===Ds;if(c||u){let d=t.get(o),p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new Os(i)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let f=o.image;return c&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new Os(i)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Ym(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&or("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Qm(i,t,e,n){let s={},r=new WeakMap;function a(d){let p=d.target;p.index!==null&&t.remove(p.index);for(let v in p.attributes)t.remove(p.attributes[v]);for(let v in p.morphAttributes){let g=p.morphAttributes[v];for(let m=0,h=g.length;m<h;m++)t.remove(g[m])}p.removeEventListener("dispose",a),delete s[p.id];let f=r.get(p);f&&(t.remove(f),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(d,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,e.memory.geometries++),p}function l(d){let p=d.attributes;for(let v in p)t.update(p[v],i.ARRAY_BUFFER);let f=d.morphAttributes;for(let v in f){let g=f[v];for(let m=0,h=g.length;m<h;m++)t.update(g[m],i.ARRAY_BUFFER)}}function c(d){let p=[],f=d.index,v=d.attributes.position,g=0;if(f!==null){let b=f.array;g=f.version;for(let w=0,x=b.length;w<x;w+=3){let C=b[w+0],E=b[w+1],R=b[w+2];p.push(C,E,E,R,R,C)}}else if(v!==void 0){let b=v.array;g=v.version;for(let w=0,x=b.length/3-1;w<x;w+=3){let C=w+0,E=w+1,R=w+2;p.push(C,E,E,R,R,C)}}else return;let m=new(Yh(p)?ga:ma)(p,1);m.version=g;let h=r.get(d);h&&t.remove(h),r.set(d,m)}function u(d){let p=r.get(d);if(p){let f=d.index;f!==null&&p.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Zm(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,f){i.drawElements(n,f,r,p*a),e.update(f,n,1)}function c(p,f,v){v!==0&&(i.drawElementsInstanced(n,f,r,p*a,v),e.update(f,n,v))}function u(p,f,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,p,0,v);let m=0;for(let h=0;h<v;h++)m+=f[h];e.update(m,n,1)}function d(p,f,v,g){if(v===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<p.length;h++)c(p[h]/a,f[h],g[h]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,p,0,g,0,v);let h=0;for(let b=0;b<v;b++)h+=f[b]*g[b];e.update(h,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Km(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Jm(i,t,e){let n=new WeakMap,s=new Ue;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,p=n.get(o);if(p===void 0||p.count!==d){let A=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",A)};p!==void 0&&p.texture.dispose();let f=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],w=0;f===!0&&(w=1),v===!0&&(w=2),g===!0&&(w=3);let x=o.attributes.position.count*w,C=1;x>t.maxTextureSize&&(C=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let E=new Float32Array(x*C*4*d),R=new fa(E,x,C,d);R.type=$n,R.needsUpdate=!0;let I=w*4;for(let S=0;S<d;S++){let P=m[S],G=h[S],z=b[S],Y=x*C*4*S;for(let X=0;X<P.count;X++){let k=X*I;f===!0&&(s.fromBufferAttribute(P,X),E[Y+k+0]=s.x,E[Y+k+1]=s.y,E[Y+k+2]=s.z,E[Y+k+3]=0),v===!0&&(s.fromBufferAttribute(G,X),E[Y+k+4]=s.x,E[Y+k+5]=s.y,E[Y+k+6]=s.z,E[Y+k+7]=0),g===!0&&(s.fromBufferAttribute(z,X),E[Y+k+8]=s.x,E[Y+k+9]=s.y,E[Y+k+10]=s.z,E[Y+k+11]=z.itemSize===4?s.w:1)}}p={count:d,texture:R,size:new St(x,C)},n.set(o,p),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];let v=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function jm(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,d=t.get(l,u);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var ya=class extends mn{constructor(t,e,n,s,r,a,o,l,c,u=Rs){if(u!==Rs&&u!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Rs&&(n=$i),n===void 0&&u===Ns&&(n=Us),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:wn,this.minFilter=l!==void 0?l:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Jh=new mn,oh=new ya(1,1),jh=new fa,$h=new ul,tu=new xa,lh=[],ch=[],hh=new Float32Array(16),uh=new Float32Array(9),dh=new Float32Array(4);function Xs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=lh[s];if(r===void 0&&(r=new Float32Array(s),lh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function La(i,t){let e=ch[t];e===void 0&&(e=new Int32Array(t),ch[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function $m(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2fv(this.addr,t),Ve(e,t)}}function eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;i.uniform3fv(this.addr,t),Ve(e,t)}}function ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4fv(this.addr,t),Ve(e,t)}}function ig(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(ze(e,n))return;dh.set(n),i.uniformMatrix2fv(this.addr,!1,dh),Ve(e,n)}}function sg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(ze(e,n))return;uh.set(n),i.uniformMatrix3fv(this.addr,!1,uh),Ve(e,n)}}function rg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(ze(e,n))return;hh.set(n),i.uniformMatrix4fv(this.addr,!1,hh),Ve(e,n)}}function ag(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2iv(this.addr,t),Ve(e,t)}}function lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3iv(this.addr,t),Ve(e,t)}}function cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4iv(this.addr,t),Ve(e,t)}}function hg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2uiv(this.addr,t),Ve(e,t)}}function dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3uiv(this.addr,t),Ve(e,t)}}function fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4uiv(this.addr,t),Ve(e,t)}}function pg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(oh.compareFunction=qh,r=oh):r=Jh,e.setTexture2D(t||r,s)}function mg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||$h,s)}function gg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||tu,s)}function vg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||jh,s)}function xg(i){switch(i){case 5126:return $m;case 35664:return tg;case 35665:return eg;case 35666:return ng;case 35674:return ig;case 35675:return sg;case 35676:return rg;case 5124:case 35670:return ag;case 35667:case 35671:return og;case 35668:case 35672:return lg;case 35669:case 35673:return cg;case 5125:return hg;case 36294:return ug;case 36295:return dg;case 36296:return fg;case 35678:case 36198:case 36298:case 36306:case 35682:return pg;case 35679:case 36299:case 36307:return mg;case 35680:case 36300:case 36308:case 36293:return gg;case 36289:case 36303:case 36311:case 36292:return vg}}function yg(i,t){i.uniform1fv(this.addr,t)}function Mg(i,t){let e=Xs(t,this.size,2);i.uniform2fv(this.addr,e)}function bg(i,t){let e=Xs(t,this.size,3);i.uniform3fv(this.addr,e)}function Sg(i,t){let e=Xs(t,this.size,4);i.uniform4fv(this.addr,e)}function Ag(i,t){let e=Xs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function wg(i,t){let e=Xs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Eg(i,t){let e=Xs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Tg(i,t){i.uniform1iv(this.addr,t)}function _g(i,t){i.uniform2iv(this.addr,t)}function Rg(i,t){i.uniform3iv(this.addr,t)}function Cg(i,t){i.uniform4iv(this.addr,t)}function Ig(i,t){i.uniform1uiv(this.addr,t)}function Pg(i,t){i.uniform2uiv(this.addr,t)}function Lg(i,t){i.uniform3uiv(this.addr,t)}function Dg(i,t){i.uniform4uiv(this.addr,t)}function Ug(i,t,e){let n=this.cache,s=t.length,r=La(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Jh,r[a])}function Ng(i,t,e){let n=this.cache,s=t.length,r=La(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||$h,r[a])}function Fg(i,t,e){let n=this.cache,s=t.length,r=La(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||tu,r[a])}function Bg(i,t,e){let n=this.cache,s=t.length,r=La(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||jh,r[a])}function Og(i){switch(i){case 5126:return yg;case 35664:return Mg;case 35665:return bg;case 35666:return Sg;case 35674:return Ag;case 35675:return wg;case 35676:return Eg;case 5124:case 35670:return Tg;case 35667:case 35671:return _g;case 35668:case 35672:return Rg;case 35669:case 35673:return Cg;case 5125:return Ig;case 36294:return Pg;case 36295:return Lg;case 36296:return Dg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ug;case 35679:case 36299:case 36307:return Ng;case 35680:case 36300:case 36308:case 36293:return Fg;case 36289:case 36303:case 36311:case 36292:return Bg}}var pl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=xg(e.type)}},ml=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Og(e.type)}},gl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Ao=/(\w+)(\])?(\[|\.)?/g;function fh(i,t){i.seq.push(t),i.map[t.id]=t}function kg(i,t,e){let n=i.name,s=n.length;for(Ao.lastIndex=0;;){let r=Ao.exec(n),a=Ao.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){fh(e,c===void 0?new pl(o,i,t):new ml(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new gl(o),fh(e,d)),e=d}}}var Is=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);kg(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function ph(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var zg=37297,Vg=0;function Hg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var mh=new te;function Gg(i){me._getMatrix(mh,me.workingColorSpace,i);let t=`mat3( ${mh.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(i)){case Pa:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function gh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Hg(i.getShaderSource(t),a)}else return s}function Wg(i,t){let e=Gg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Xg(i,t){let e;switch(t){case ed:e="Linear";break;case nd:e="Reinhard";break;case id:e="Cineon";break;case sd:e="ACESFilmic";break;case ad:e="AgX";break;case od:e="Neutral";break;case rd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ea=new N;function qg(){me.getLuminanceCoefficients(ea);let i=ea.x.toFixed(4),t=ea.y.toFixed(4),e=ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lr).join(`
`)}function Qg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Zg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function lr(i){return i!==""}function vh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Kg=/^[ \t]*#include +<([\w\d./]+)>/gm;function vl(i){return i.replace(Kg,jg)}var Jg=new Map;function jg(i,t){let e=ne[t];if(e===void 0){let n=Jg.get(t);if(n!==void 0)e=ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return vl(e)}var $g=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yh(i){return i.replace($g,t0)}function t0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function e0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Dh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ou?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===gi&&(t="SHADOWMAP_TYPE_VSM"),t}function n0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ls:case Ds:t="ENVMAP_TYPE_CUBE";break;case Ia:t="ENVMAP_TYPE_CUBE_UV";break}return t}function i0(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ds&&(t="ENVMAP_MODE_REFRACTION"),t}function s0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Uh:t="ENVMAP_BLENDING_MULTIPLY";break;case $u:t="ENVMAP_BLENDING_MIX";break;case td:t="ENVMAP_BLENDING_ADD";break}return t}function r0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function a0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=e0(e),c=n0(e),u=i0(e),d=s0(e),p=r0(e),f=Yg(e),v=Qg(r),g=s.createProgram(),m,h,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(lr).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(lr).join(`
`),h.length>0&&(h+=`
`)):(m=[Mh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),h=[Mh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ni?"#define TONE_MAPPING":"",e.toneMapping!==ni?ne.tonemapping_pars_fragment:"",e.toneMapping!==ni?Xg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,Wg("linearToOutputTexel",e.outputColorSpace),qg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(lr).join(`
`)),a=vl(a),a=vh(a,e),a=xh(a,e),o=vl(o),o=vh(o,e),o=xh(o,e),a=yh(a),o=yh(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",e.glslVersion===Dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let w=b+m+a,x=b+h+o,C=ph(s,s.VERTEX_SHADER,w),E=ph(s,s.FRAGMENT_SHADER,x);s.attachShader(g,C),s.attachShader(g,E),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function R(P){if(i.debug.checkShaderErrors){let G=s.getProgramInfoLog(g).trim(),z=s.getShaderInfoLog(C).trim(),Y=s.getShaderInfoLog(E).trim(),X=!0,k=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,C,E);else{let V=gh(s,C,"vertex"),H=gh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+V+`
`+H)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(z===""||Y==="")&&(k=!1);k&&(P.diagnostics={runnable:X,programLog:G,vertexShader:{log:z,prefix:m},fragmentShader:{log:Y,prefix:h}})}s.deleteShader(C),s.deleteShader(E),I=new Is(s,g),A=Zg(s,g)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(g,zg)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vg++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=E,this}var o0=0,xl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new yl(t),e.set(t,n)),n}},yl=class{constructor(t){this.id=o0++,this.code=t,this.usedTimes=0}};function l0(i,t,e,n,s,r,a){let o=new gr,l=new xl,c=new Set,u=[],d=s.logarithmicDepthBuffer,p=s.vertexTextures,f=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(A){return c.add(A),A===0?"uv":`uv${A}`}function m(A,S,P,G,z){let Y=G.fog,X=z.geometry,k=A.isMeshStandardMaterial?G.environment:null,V=(A.isMeshStandardMaterial?e:t).get(A.envMap||k),H=V&&V.mapping===Ia?V.image.height:null,st=v[A.type];A.precision!==null&&(f=s.getMaxPrecision(A.precision),f!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",f,"instead."));let ut=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Pt=ut!==void 0?ut.length:0,At=0;X.morphAttributes.position!==void 0&&(At=1),X.morphAttributes.normal!==void 0&&(At=2),X.morphAttributes.color!==void 0&&(At=3);let de,K,rt,Rt;if(st){let re=Kn[st];de=re.vertexShader,K=re.fragmentShader}else de=A.vertexShader,K=A.fragmentShader,l.update(A),rt=l.getVertexShaderID(A),Rt=l.getFragmentShaderID(A);let dt=i.getRenderTarget(),zt=i.state.buffers.depth.getReversed(),Vt=z.isInstancedMesh===!0,qt=z.isBatchedMesh===!0,se=!!A.map,Qt=!!A.matcap,ge=!!V,F=!!A.aoMap,Ne=!!A.lightMap,Xt=!!A.bumpMap,jt=!!A.normalMap,Ut=!!A.displacementMap,oe=!!A.emissiveMap,Ft=!!A.metalnessMap,_=!!A.roughnessMap,M=A.anisotropy>0,B=A.clearcoat>0,J=A.dispersion>0,et=A.iridescence>0,Z=A.sheen>0,Et=A.transmission>0,ft=M&&!!A.anisotropyMap,mt=B&&!!A.clearcoatMap,ie=B&&!!A.clearcoatNormalMap,it=B&&!!A.clearcoatRoughnessMap,xt=et&&!!A.iridescenceMap,kt=et&&!!A.iridescenceThicknessMap,Bt=Z&&!!A.sheenColorMap,pt=Z&&!!A.sheenRoughnessMap,Jt=!!A.specularMap,Ht=!!A.specularColorMap,fe=!!A.specularIntensityMap,D=Et&&!!A.transmissionMap,gt=Et&&!!A.thicknessMap,Q=!!A.gradientMap,j=!!A.alphaMap,vt=A.alphaTest>0,yt=!!A.alphaHash,Ot=!!A.extensions,Wt=ni;A.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Wt=i.toneMapping);let Re={shaderID:st,shaderType:A.type,shaderName:A.name,vertexShader:de,fragmentShader:K,defines:A.defines,customVertexShaderID:rt,customFragmentShaderID:Rt,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:f,batching:qt,batchingColor:qt&&z._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&z.instanceColor!==null,instancingMorph:Vt&&z.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:dt===null?i.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:Hs,alphaToCoverage:!!A.alphaToCoverage,map:se,matcap:Qt,envMap:ge,envMapMode:ge&&V.mapping,envMapCubeUVHeight:H,aoMap:F,lightMap:Ne,bumpMap:Xt,normalMap:jt,displacementMap:p&&Ut,emissiveMap:oe,normalMapObjectSpace:jt&&A.normalMapType===ud,normalMapTangentSpace:jt&&A.normalMapType===Xh,metalnessMap:Ft,roughnessMap:_,anisotropy:M,anisotropyMap:ft,clearcoat:B,clearcoatMap:mt,clearcoatNormalMap:ie,clearcoatRoughnessMap:it,dispersion:J,iridescence:et,iridescenceMap:xt,iridescenceThicknessMap:kt,sheen:Z,sheenColorMap:Bt,sheenRoughnessMap:pt,specularMap:Jt,specularColorMap:Ht,specularIntensityMap:fe,transmission:Et,transmissionMap:D,thicknessMap:gt,gradientMap:Q,opaque:A.transparent===!1&&A.blending===Pi&&A.alphaToCoverage===!1,alphaMap:j,alphaTest:vt,alphaHash:yt,combine:A.combine,mapUv:se&&g(A.map.channel),aoMapUv:F&&g(A.aoMap.channel),lightMapUv:Ne&&g(A.lightMap.channel),bumpMapUv:Xt&&g(A.bumpMap.channel),normalMapUv:jt&&g(A.normalMap.channel),displacementMapUv:Ut&&g(A.displacementMap.channel),emissiveMapUv:oe&&g(A.emissiveMap.channel),metalnessMapUv:Ft&&g(A.metalnessMap.channel),roughnessMapUv:_&&g(A.roughnessMap.channel),anisotropyMapUv:ft&&g(A.anisotropyMap.channel),clearcoatMapUv:mt&&g(A.clearcoatMap.channel),clearcoatNormalMapUv:ie&&g(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&g(A.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&g(A.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&g(A.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&g(A.sheenColorMap.channel),sheenRoughnessMapUv:pt&&g(A.sheenRoughnessMap.channel),specularMapUv:Jt&&g(A.specularMap.channel),specularColorMapUv:Ht&&g(A.specularColorMap.channel),specularIntensityMapUv:fe&&g(A.specularIntensityMap.channel),transmissionMapUv:D&&g(A.transmissionMap.channel),thicknessMapUv:gt&&g(A.thicknessMap.channel),alphaMapUv:j&&g(A.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(jt||M),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!X.attributes.uv&&(se||j),fog:!!Y,useFog:A.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:zt,skinning:z.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:At,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Wt,decodeVideoTexture:se&&A.map.isVideoTexture===!0&&me.getTransfer(A.map.colorSpace)===be,decodeVideoTextureEmissive:oe&&A.emissiveMap.isVideoTexture===!0&&me.getTransfer(A.emissiveMap.colorSpace)===be,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===kn,flipSided:A.side===tn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ot&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&A.extensions.multiDraw===!0||qt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function h(A){let S=[];if(A.shaderID?S.push(A.shaderID):(S.push(A.customVertexShaderID),S.push(A.customFragmentShaderID)),A.defines!==void 0)for(let P in A.defines)S.push(P),S.push(A.defines[P]);return A.isRawShaderMaterial===!1&&(b(S,A),w(S,A),S.push(i.outputColorSpace)),S.push(A.customProgramCacheKey),S.join()}function b(A,S){A.push(S.precision),A.push(S.outputColorSpace),A.push(S.envMapMode),A.push(S.envMapCubeUVHeight),A.push(S.mapUv),A.push(S.alphaMapUv),A.push(S.lightMapUv),A.push(S.aoMapUv),A.push(S.bumpMapUv),A.push(S.normalMapUv),A.push(S.displacementMapUv),A.push(S.emissiveMapUv),A.push(S.metalnessMapUv),A.push(S.roughnessMapUv),A.push(S.anisotropyMapUv),A.push(S.clearcoatMapUv),A.push(S.clearcoatNormalMapUv),A.push(S.clearcoatRoughnessMapUv),A.push(S.iridescenceMapUv),A.push(S.iridescenceThicknessMapUv),A.push(S.sheenColorMapUv),A.push(S.sheenRoughnessMapUv),A.push(S.specularMapUv),A.push(S.specularColorMapUv),A.push(S.specularIntensityMapUv),A.push(S.transmissionMapUv),A.push(S.thicknessMapUv),A.push(S.combine),A.push(S.fogExp2),A.push(S.sizeAttenuation),A.push(S.morphTargetsCount),A.push(S.morphAttributeCount),A.push(S.numDirLights),A.push(S.numPointLights),A.push(S.numSpotLights),A.push(S.numSpotLightMaps),A.push(S.numHemiLights),A.push(S.numRectAreaLights),A.push(S.numDirLightShadows),A.push(S.numPointLightShadows),A.push(S.numSpotLightShadows),A.push(S.numSpotLightShadowsWithMaps),A.push(S.numLightProbes),A.push(S.shadowMapType),A.push(S.toneMapping),A.push(S.numClippingPlanes),A.push(S.numClipIntersection),A.push(S.depthPacking)}function w(A,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),A.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),A.push(o.mask)}function x(A){let S=v[A.type],P;if(S){let G=Kn[S];P=Ws.clone(G.uniforms)}else P=A.uniforms;return P}function C(A,S){let P;for(let G=0,z=u.length;G<z;G++){let Y=u[G];if(Y.cacheKey===S){P=Y,++P.usedTimes;break}}return P===void 0&&(P=new a0(i,S,A,r),u.push(P)),P}function E(A){if(--A.usedTimes===0){let S=u.indexOf(A);u[S]=u[u.length-1],u.pop(),A.destroy()}}function R(A){l.remove(A)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:x,acquireProgram:C,releaseProgram:E,releaseShaderCache:R,programs:u,dispose:I}}function c0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function h0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function bh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Sh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,p,f,v,g,m){let h=i[t];return h===void 0?(h={id:d.id,object:d,geometry:p,material:f,groupOrder:v,renderOrder:d.renderOrder,z:g,group:m},i[t]=h):(h.id=d.id,h.object=d,h.geometry=p,h.material=f,h.groupOrder=v,h.renderOrder=d.renderOrder,h.z=g,h.group=m),t++,h}function o(d,p,f,v,g,m){let h=a(d,p,f,v,g,m);f.transmission>0?n.push(h):f.transparent===!0?s.push(h):e.push(h)}function l(d,p,f,v,g,m){let h=a(d,p,f,v,g,m);f.transmission>0?n.unshift(h):f.transparent===!0?s.unshift(h):e.unshift(h)}function c(d,p){e.length>1&&e.sort(d||h0),n.length>1&&n.sort(p||bh),s.length>1&&s.sort(p||bh)}function u(){for(let d=t,p=i.length;d<p;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function u0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Sh,i.set(n,[a])):s>=r.length?(a=new Sh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function d0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Kt};break;case"SpotLight":e={position:new N,direction:new N,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function f0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var p0=0;function m0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function g0(i){let t=new d0,e=f0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new Se,a=new Se;function o(c){let u=0,d=0,p=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let f=0,v=0,g=0,m=0,h=0,b=0,w=0,x=0,C=0,E=0,R=0;c.sort(m0);for(let A=0,S=c.length;A<S;A++){let P=c[A],G=P.color,z=P.intensity,Y=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=G.r*z,d+=G.g*z,p+=G.b*z;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],z);R++}else if(P.isDirectionalLight){let k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let V=P.shadow,H=e.get(P);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=P.shadow.matrix,b++}n.directional[f]=k,f++}else if(P.isSpotLight){let k=t.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(G).multiplyScalar(z),k.distance=Y,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[g]=k;let V=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,V.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[g]=V.matrix,P.castShadow){let H=e.get(P);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,n.spotShadow[g]=H,n.spotShadowMap[g]=X,x++}g++}else if(P.isRectAreaLight){let k=t.get(P);k.color.copy(G).multiplyScalar(z),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=k,m++}else if(P.isPointLight){let k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){let V=P.shadow,H=e.get(P);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,H.shadowCameraNear=V.camera.near,H.shadowCameraFar=V.camera.far,n.pointShadow[v]=H,n.pointShadowMap[v]=X,n.pointShadowMatrix[v]=P.shadow.matrix,w++}n.point[v]=k,v++}else if(P.isHemisphereLight){let k=t.get(P);k.skyColor.copy(P.color).multiplyScalar(z),k.groundColor.copy(P.groundColor).multiplyScalar(z),n.hemi[h]=k,h++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=p;let I=n.hash;(I.directionalLength!==f||I.pointLength!==v||I.spotLength!==g||I.rectAreaLength!==m||I.hemiLength!==h||I.numDirectionalShadows!==b||I.numPointShadows!==w||I.numSpotShadows!==x||I.numSpotMaps!==C||I.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=v,n.hemi.length=h,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=x+C-E,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,I.directionalLength=f,I.pointLength=v,I.spotLength=g,I.rectAreaLength=m,I.hemiLength=h,I.numDirectionalShadows=b,I.numPointShadows=w,I.numSpotShadows=x,I.numSpotMaps=C,I.numLightProbes=R,n.version=p0++)}function l(c,u){let d=0,p=0,f=0,v=0,g=0,m=u.matrixWorldInverse;for(let h=0,b=c.length;h<b;h++){let w=c[h];if(w.isDirectionalLight){let x=n.directional[d];x.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(w.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(w.isRectAreaLight){let x=n.rectArea[v];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(w.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(w.width*.5,0,0),x.halfHeight.set(0,w.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),v++}else if(w.isPointLight){let x=n.point[p];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(m),p++}else if(w.isHemisphereLight){let x=n.hemi[g];x.direction.setFromMatrixPosition(w.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function Ah(i){let t=new g0(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function v0(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Ah(i),t.set(s,[o])):r>=a.length?(o=new Ah(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ml=class extends es{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=cd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},bl=class extends es{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},x0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function M0(i,t,e){let n=new vr,s=new St,r=new St,a=new Ue,o=new Ml({depthPacking:hd}),l=new bl,c={},u=e.maxTextureSize,d={[Li]:tn,[tn]:Li,[kn]:kn},p=new Pe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:x0,fragmentShader:y0}),f=p.clone();f.defines.HORIZONTAL_PASS=1;let v=new en;v.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new ae(v,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dh;let h=this.type;this.render=function(E,R,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let A=i.getRenderTarget(),S=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),G=i.state;G.setBlending(ei),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let z=h!==gi&&this.type===gi,Y=h===gi&&this.type!==gi;for(let X=0,k=E.length;X<k;X++){let V=E[X],H=V.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let st=H.getFrameExtents();if(s.multiply(st),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/st.x),s.x=r.x*st.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/st.y),s.y=r.y*st.y,H.mapSize.y=r.y)),H.map===null||z===!0||Y===!0){let Pt=this.type!==gi?{minFilter:wn,magFilter:wn}:{};H.map!==null&&H.map.dispose(),H.map=new Qe(s.x,s.y,Pt),H.map.texture.name=V.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let ut=H.getViewportCount();for(let Pt=0;Pt<ut;Pt++){let At=H.getViewport(Pt);a.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),G.viewport(a),H.updateMatrices(V,Pt),n=H.getFrustum(),x(R,I,H.camera,V,this.type)}H.isPointLightShadow!==!0&&this.type===gi&&b(H,I),H.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(A,S,P)};function b(E,R){let I=t.update(g);p.defines.VSM_SAMPLES!==E.blurSamples&&(p.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Qe(s.x,s.y)),p.uniforms.shadow_pass.value=E.map.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,I,p,g,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,I,f,g,null)}function w(E,R,I,A){let S=null,P=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)S=P;else if(S=I.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let G=S.uuid,z=R.uuid,Y=c[G];Y===void 0&&(Y={},c[G]=Y);let X=Y[z];X===void 0&&(X=S.clone(),Y[z]=X,R.addEventListener("dispose",C)),S=X}if(S.visible=R.visible,S.wireframe=R.wireframe,A===gi?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:d[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let G=i.properties.get(S);G.light=I}return S}function x(E,R,I,A,S){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===gi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);let z=t.update(E),Y=E.material;if(Array.isArray(Y)){let X=z.groups;for(let k=0,V=X.length;k<V;k++){let H=X[k],st=Y[H.materialIndex];if(st&&st.visible){let ut=w(E,st,A,S);E.onBeforeShadow(i,E,R,I,z,ut,H),i.renderBufferDirect(I,null,z,ut,E,H),E.onAfterShadow(i,E,R,I,z,ut,H)}}}else if(Y.visible){let X=w(E,Y,A,S);E.onBeforeShadow(i,E,R,I,z,X,null),i.renderBufferDirect(I,null,z,X,E,null),E.onAfterShadow(i,E,R,I,z,X,null)}}let G=E.children;for(let z=0,Y=G.length;z<Y;z++)x(G[z],R,I,A,S)}function C(E){E.target.removeEventListener("dispose",C);for(let I in c){let A=c[I],S=E.target.uuid;S in A&&(A[S].dispose(),delete A[S])}}}var b0={[To]:_o,[Ro]:Po,[Co]:Lo,[Ps]:Io,[_o]:To,[Po]:Ro,[Lo]:Co,[Io]:Ps};function S0(i,t){function e(){let D=!1,gt=new Ue,Q=null,j=new Ue(0,0,0,0);return{setMask:function(vt){Q!==vt&&!D&&(i.colorMask(vt,vt,vt,vt),Q=vt)},setLocked:function(vt){D=vt},setClear:function(vt,yt,Ot,Wt,Re){Re===!0&&(vt*=Wt,yt*=Wt,Ot*=Wt),gt.set(vt,yt,Ot,Wt),j.equals(gt)===!1&&(i.clearColor(vt,yt,Ot,Wt),j.copy(gt))},reset:function(){D=!1,Q=null,j.set(-1,0,0,0)}}}function n(){let D=!1,gt=!1,Q=null,j=null,vt=null;return{setReversed:function(yt){if(gt!==yt){let Ot=t.get("EXT_clip_control");gt?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT);let Wt=vt;vt=null,this.setClear(Wt)}gt=yt},getReversed:function(){return gt},setTest:function(yt){yt?dt(i.DEPTH_TEST):zt(i.DEPTH_TEST)},setMask:function(yt){Q!==yt&&!D&&(i.depthMask(yt),Q=yt)},setFunc:function(yt){if(gt&&(yt=b0[yt]),j!==yt){switch(yt){case To:i.depthFunc(i.NEVER);break;case _o:i.depthFunc(i.ALWAYS);break;case Ro:i.depthFunc(i.LESS);break;case Ps:i.depthFunc(i.LEQUAL);break;case Co:i.depthFunc(i.EQUAL);break;case Io:i.depthFunc(i.GEQUAL);break;case Po:i.depthFunc(i.GREATER);break;case Lo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=yt}},setLocked:function(yt){D=yt},setClear:function(yt){vt!==yt&&(gt&&(yt=1-yt),i.clearDepth(yt),vt=yt)},reset:function(){D=!1,Q=null,j=null,vt=null,gt=!1}}}function s(){let D=!1,gt=null,Q=null,j=null,vt=null,yt=null,Ot=null,Wt=null,Re=null;return{setTest:function(re){D||(re?dt(i.STENCIL_TEST):zt(i.STENCIL_TEST))},setMask:function(re){gt!==re&&!D&&(i.stencilMask(re),gt=re)},setFunc:function(re,Me,xn){(Q!==re||j!==Me||vt!==xn)&&(i.stencilFunc(re,Me,xn),Q=re,j=Me,vt=xn)},setOp:function(re,Me,xn){(yt!==re||Ot!==Me||Wt!==xn)&&(i.stencilOp(re,Me,xn),yt=re,Ot=Me,Wt=xn)},setLocked:function(re){D=re},setClear:function(re){Re!==re&&(i.clearStencil(re),Re=re)},reset:function(){D=!1,gt=null,Q=null,j=null,vt=null,yt=null,Ot=null,Wt=null,Re=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},p=new WeakMap,f=[],v=null,g=!1,m=null,h=null,b=null,w=null,x=null,C=null,E=null,R=new Kt(0,0,0),I=0,A=!1,S=null,P=null,G=null,z=null,Y=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,V=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(H)[1]),k=V>=1):H.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),k=V>=2);let st=null,ut={},Pt=i.getParameter(i.SCISSOR_BOX),At=i.getParameter(i.VIEWPORT),de=new Ue().fromArray(Pt),K=new Ue().fromArray(At);function rt(D,gt,Q,j){let vt=new Uint8Array(4),yt=i.createTexture();i.bindTexture(D,yt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<Q;Ot++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(gt,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(gt+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return yt}let Rt={};Rt[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),Rt[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Rt[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Rt[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),dt(i.DEPTH_TEST),a.setFunc(Ps),Xt(!1),jt(Ec),dt(i.CULL_FACE),F(ei);function dt(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function zt(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function Vt(D,gt){return d[D]!==gt?(i.bindFramebuffer(D,gt),d[D]=gt,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=gt),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=gt),!0):!1}function qt(D,gt){let Q=f,j=!1;if(D){Q=p.get(gt),Q===void 0&&(Q=[],p.set(gt,Q));let vt=D.textures;if(Q.length!==vt.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let yt=0,Ot=vt.length;yt<Ot;yt++)Q[yt]=i.COLOR_ATTACHMENT0+yt;Q.length=vt.length,j=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,j=!0);j&&i.drawBuffers(Q)}function se(D){return v!==D?(i.useProgram(D),v=D,!0):!1}let Qt={[Jn]:i.FUNC_ADD,[ku]:i.FUNC_SUBTRACT,[zu]:i.FUNC_REVERSE_SUBTRACT};Qt[Vu]=i.MIN,Qt[Hu]=i.MAX;let ge={[Ra]:i.ZERO,[Vl]:i.ONE,[Ca]:i.SRC_COLOR,[Eo]:i.SRC_ALPHA,[Qu]:i.SRC_ALPHA_SATURATE,[qu]:i.DST_COLOR,[Wu]:i.DST_ALPHA,[Gu]:i.ONE_MINUS_SRC_COLOR,[dr]:i.ONE_MINUS_SRC_ALPHA,[Yu]:i.ONE_MINUS_DST_COLOR,[Xu]:i.ONE_MINUS_DST_ALPHA,[Zu]:i.CONSTANT_COLOR,[Ku]:i.ONE_MINUS_CONSTANT_COLOR,[Ju]:i.CONSTANT_ALPHA,[ju]:i.ONE_MINUS_CONSTANT_ALPHA};function F(D,gt,Q,j,vt,yt,Ot,Wt,Re,re){if(D===ei){g===!0&&(zt(i.BLEND),g=!1);return}if(g===!1&&(dt(i.BLEND),g=!0),D!==Ar){if(D!==m||re!==A){if((h!==Jn||x!==Jn)&&(i.blendEquation(i.FUNC_ADD),h=Jn,x=Jn),re)switch(D){case Pi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Di:i.blendFunc(i.ONE,i.ONE);break;case Tc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _c:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Pi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Di:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Tc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _c:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,w=null,C=null,E=null,R.set(0,0,0),I=0,m=D,A=re}return}vt=vt||gt,yt=yt||Q,Ot=Ot||j,(gt!==h||vt!==x)&&(i.blendEquationSeparate(Qt[gt],Qt[vt]),h=gt,x=vt),(Q!==b||j!==w||yt!==C||Ot!==E)&&(i.blendFuncSeparate(ge[Q],ge[j],ge[yt],ge[Ot]),b=Q,w=j,C=yt,E=Ot),(Wt.equals(R)===!1||Re!==I)&&(i.blendColor(Wt.r,Wt.g,Wt.b,Re),R.copy(Wt),I=Re),m=D,A=!1}function Ne(D,gt){D.side===kn?zt(i.CULL_FACE):dt(i.CULL_FACE);let Q=D.side===tn;gt&&(Q=!Q),Xt(Q),D.blending===Pi&&D.transparent===!1?F(ei):F(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let j=D.stencilWrite;o.setTest(j),j&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),oe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?dt(i.SAMPLE_ALPHA_TO_COVERAGE):zt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(D){S!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),S=D)}function jt(D){D!==Fu?(dt(i.CULL_FACE),D!==P&&(D===Ec?i.cullFace(i.BACK):D===Bu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):zt(i.CULL_FACE),P=D}function Ut(D){D!==G&&(k&&i.lineWidth(D),G=D)}function oe(D,gt,Q){D?(dt(i.POLYGON_OFFSET_FILL),(z!==gt||Y!==Q)&&(i.polygonOffset(gt,Q),z=gt,Y=Q)):zt(i.POLYGON_OFFSET_FILL)}function Ft(D){D?dt(i.SCISSOR_TEST):zt(i.SCISSOR_TEST)}function _(D){D===void 0&&(D=i.TEXTURE0+X-1),st!==D&&(i.activeTexture(D),st=D)}function M(D,gt,Q){Q===void 0&&(st===null?Q=i.TEXTURE0+X-1:Q=st);let j=ut[Q];j===void 0&&(j={type:void 0,texture:void 0},ut[Q]=j),(j.type!==D||j.texture!==gt)&&(st!==Q&&(i.activeTexture(Q),st=Q),i.bindTexture(D,gt||Rt[D]),j.type=D,j.texture=gt)}function B(){let D=ut[st];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function kt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Bt(D){de.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),de.copy(D))}function pt(D){K.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),K.copy(D))}function Jt(D,gt){let Q=c.get(gt);Q===void 0&&(Q=new WeakMap,c.set(gt,Q));let j=Q.get(D);j===void 0&&(j=i.getUniformBlockIndex(gt,D.name),Q.set(D,j))}function Ht(D,gt){let j=c.get(gt).get(D);l.get(gt)!==j&&(i.uniformBlockBinding(gt,j,D.__bindingPointIndex),l.set(gt,j))}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},st=null,ut={},d={},p=new WeakMap,f=[],v=null,g=!1,m=null,h=null,b=null,w=null,x=null,C=null,E=null,R=new Kt(0,0,0),I=0,A=!1,S=null,P=null,G=null,z=null,Y=null,de.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:dt,disable:zt,bindFramebuffer:Vt,drawBuffers:qt,useProgram:se,setBlending:F,setMaterial:Ne,setFlipSided:Xt,setCullFace:jt,setLineWidth:Ut,setPolygonOffset:oe,setScissorTest:Ft,activeTexture:_,bindTexture:M,unbindTexture:B,compressedTexImage2D:J,compressedTexImage3D:et,texImage2D:xt,texImage3D:kt,updateUBOMapping:Jt,uniformBlockBinding:Ht,texStorage2D:ie,texStorage3D:it,texSubImage2D:Z,texSubImage3D:Et,compressedTexSubImage2D:ft,compressedTexSubImage3D:mt,scissor:Bt,viewport:pt,reset:fe}}function wh(i,t,e,n){let s=A0(n);switch(e){case kh:return i*t;case Vh:return i*t;case Hh:return i*t*2;case Xl:return i*t/s.components*s.byteLength;case ql:return i*t/s.components*s.byteLength;case Gh:return i*t*2/s.components*s.byteLength;case Yl:return i*t*2/s.components*s.byteLength;case zh:return i*t*3/s.components*s.byteLength;case Vn:return i*t*4/s.components*s.byteLength;case Ql:return i*t*4/s.components*s.byteLength;case sa:case ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case aa:case oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bo:case ko:return Math.max(i,16)*Math.max(t,8)/4;case Fo:case Oo:return Math.max(i,8)*Math.max(t,8)/2;case zo:case Vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Xo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case qo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Yo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Qo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ko:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Jo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case jo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case $o:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case tl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case el:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case nl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case la:case il:case sl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Wh:case rl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case al:case ol:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function A0(i){switch(i){case Mi:case Fh:return{byteLength:1,components:1};case pr:case Bh:case Tn:return{byteLength:2,components:1};case Gl:case Wl:return{byteLength:2,components:4};case $i:case Hl:case $n:return{byteLength:4,components:1};case Oh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function w0(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new St,u=new WeakMap,d,p=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(_,M){return f?new OffscreenCanvas(_,M):ua("canvas")}function g(_,M,B){let J=1,et=Ft(_);if((et.width>B||et.height>B)&&(J=B/Math.max(et.width,et.height)),J<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){let Z=Math.floor(J*et.width),Et=Math.floor(J*et.height);d===void 0&&(d=v(Z,Et));let ft=M?v(Z,Et):d;return ft.width=Z,ft.height=Et,ft.getContext("2d").drawImage(_,0,0,Z,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Z+"x"+Et+")."),ft}else return"data"in _&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),_;return _}function m(_){return _.generateMipmaps}function h(_){i.generateMipmap(_)}function b(_){return _.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:_.isWebGL3DRenderTarget?i.TEXTURE_3D:_.isWebGLArrayRenderTarget||_.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(_,M,B,J,et=!1){if(_!==null){if(i[_]!==void 0)return i[_];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let Z=M;if(M===i.RED&&(B===i.FLOAT&&(Z=i.R32F),B===i.HALF_FLOAT&&(Z=i.R16F),B===i.UNSIGNED_BYTE&&(Z=i.R8)),M===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.R8UI),B===i.UNSIGNED_SHORT&&(Z=i.R16UI),B===i.UNSIGNED_INT&&(Z=i.R32UI),B===i.BYTE&&(Z=i.R8I),B===i.SHORT&&(Z=i.R16I),B===i.INT&&(Z=i.R32I)),M===i.RG&&(B===i.FLOAT&&(Z=i.RG32F),B===i.HALF_FLOAT&&(Z=i.RG16F),B===i.UNSIGNED_BYTE&&(Z=i.RG8)),M===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RG8UI),B===i.UNSIGNED_SHORT&&(Z=i.RG16UI),B===i.UNSIGNED_INT&&(Z=i.RG32UI),B===i.BYTE&&(Z=i.RG8I),B===i.SHORT&&(Z=i.RG16I),B===i.INT&&(Z=i.RG32I)),M===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),B===i.UNSIGNED_INT&&(Z=i.RGB32UI),B===i.BYTE&&(Z=i.RGB8I),B===i.SHORT&&(Z=i.RGB16I),B===i.INT&&(Z=i.RGB32I)),M===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),B===i.UNSIGNED_INT&&(Z=i.RGBA32UI),B===i.BYTE&&(Z=i.RGBA8I),B===i.SHORT&&(Z=i.RGBA16I),B===i.INT&&(Z=i.RGBA32I)),M===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),M===i.RGBA){let Et=et?Pa:me.getTransfer(J);B===i.FLOAT&&(Z=i.RGBA32F),B===i.HALF_FLOAT&&(Z=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Z=Et===be?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(_,M){let B;return _?M===null||M===$i||M===Us?B=i.DEPTH24_STENCIL8:M===$n?B=i.DEPTH32F_STENCIL8:M===pr&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===$i||M===Us?B=i.DEPTH_COMPONENT24:M===$n?B=i.DEPTH_COMPONENT32F:M===pr&&(B=i.DEPTH_COMPONENT16),B}function C(_,M){return m(_)===!0||_.isFramebufferTexture&&_.minFilter!==wn&&_.minFilter!==jn?Math.log2(Math.max(M.width,M.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?M.mipmaps.length:1}function E(_){let M=_.target;M.removeEventListener("dispose",E),I(M),M.isVideoTexture&&u.delete(M)}function R(_){let M=_.target;M.removeEventListener("dispose",R),S(M)}function I(_){let M=n.get(_);if(M.__webglInit===void 0)return;let B=_.source,J=p.get(B);if(J){let et=J[M.__cacheKey];et.usedTimes--,et.usedTimes===0&&A(_),Object.keys(J).length===0&&p.delete(B)}n.remove(_)}function A(_){let M=n.get(_);i.deleteTexture(M.__webglTexture);let B=_.source,J=p.get(B);delete J[M.__cacheKey],a.memory.textures--}function S(_){let M=n.get(_);if(_.depthTexture&&(_.depthTexture.dispose(),n.remove(_.depthTexture)),_.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let et=0;et<M.__webglFramebuffer[J].length;et++)i.deleteFramebuffer(M.__webglFramebuffer[J][et]);else i.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)i.deleteFramebuffer(M.__webglFramebuffer[J]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let B=_.textures;for(let J=0,et=B.length;J<et;J++){let Z=n.get(B[J]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(B[J])}n.remove(_)}let P=0;function G(){P=0}function z(){let _=P;return _>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+s.maxTextures),P+=1,_}function Y(_){let M=[];return M.push(_.wrapS),M.push(_.wrapT),M.push(_.wrapR||0),M.push(_.magFilter),M.push(_.minFilter),M.push(_.anisotropy),M.push(_.internalFormat),M.push(_.format),M.push(_.type),M.push(_.generateMipmaps),M.push(_.premultiplyAlpha),M.push(_.flipY),M.push(_.unpackAlignment),M.push(_.colorSpace),M.join()}function X(_,M){let B=n.get(_);if(_.isVideoTexture&&Ut(_),_.isRenderTargetTexture===!1&&_.version>0&&B.__version!==_.version){let J=_.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(B,_,M);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+M)}function k(_,M){let B=n.get(_);if(_.version>0&&B.__version!==_.version){K(B,_,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+M)}function V(_,M){let B=n.get(_);if(_.version>0&&B.__version!==_.version){K(B,_,M);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+M)}function H(_,M){let B=n.get(_);if(_.version>0&&B.__version!==_.version){rt(B,_,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+M)}let st={[fr]:i.REPEAT,[Ji]:i.CLAMP_TO_EDGE,[No]:i.MIRRORED_REPEAT},ut={[wn]:i.NEAREST,[ld]:i.NEAREST_MIPMAP_NEAREST,[Nr]:i.NEAREST_MIPMAP_LINEAR,[jn]:i.LINEAR,[Za]:i.LINEAR_MIPMAP_NEAREST,[ji]:i.LINEAR_MIPMAP_LINEAR},Pt={[dd]:i.NEVER,[xd]:i.ALWAYS,[fd]:i.LESS,[qh]:i.LEQUAL,[pd]:i.EQUAL,[vd]:i.GEQUAL,[md]:i.GREATER,[gd]:i.NOTEQUAL};function At(_,M){if(M.type===$n&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===jn||M.magFilter===Za||M.magFilter===Nr||M.magFilter===ji||M.minFilter===jn||M.minFilter===Za||M.minFilter===Nr||M.minFilter===ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(_,i.TEXTURE_WRAP_S,st[M.wrapS]),i.texParameteri(_,i.TEXTURE_WRAP_T,st[M.wrapT]),(_===i.TEXTURE_3D||_===i.TEXTURE_2D_ARRAY)&&i.texParameteri(_,i.TEXTURE_WRAP_R,st[M.wrapR]),i.texParameteri(_,i.TEXTURE_MAG_FILTER,ut[M.magFilter]),i.texParameteri(_,i.TEXTURE_MIN_FILTER,ut[M.minFilter]),M.compareFunction&&(i.texParameteri(_,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(_,i.TEXTURE_COMPARE_FUNC,Pt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===wn||M.minFilter!==Nr&&M.minFilter!==ji||M.type===$n&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(_,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function de(_,M){let B=!1;_.__webglInit===void 0&&(_.__webglInit=!0,M.addEventListener("dispose",E));let J=M.source,et=p.get(J);et===void 0&&(et={},p.set(J,et));let Z=Y(M);if(Z!==_.__cacheKey){et[Z]===void 0&&(et[Z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),et[Z].usedTimes++;let Et=et[_.__cacheKey];Et!==void 0&&(et[_.__cacheKey].usedTimes--,Et.usedTimes===0&&A(M)),_.__cacheKey=Z,_.__webglTexture=et[Z].texture}return B}function K(_,M,B){let J=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=i.TEXTURE_3D);let et=de(_,M),Z=M.source;e.bindTexture(J,_.__webglTexture,i.TEXTURE0+B);let Et=n.get(Z);if(Z.version!==Et.__version||et===!0){e.activeTexture(i.TEXTURE0+B);let ft=me.getPrimaries(me.workingColorSpace),mt=M.colorSpace===zn?null:me.getPrimaries(M.colorSpace),ie=M.colorSpace===zn||ft===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let it=g(M.image,!1,s.maxTextureSize);it=oe(M,it);let xt=r.convert(M.format,M.colorSpace),kt=r.convert(M.type),Bt=w(M.internalFormat,xt,kt,M.colorSpace,M.isVideoTexture);At(J,M);let pt,Jt=M.mipmaps,Ht=M.isVideoTexture!==!0,fe=Et.__version===void 0||et===!0,D=Z.dataReady,gt=C(M,it);if(M.isDepthTexture)Bt=x(M.format===Ns,M.type),fe&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,Bt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Bt,it.width,it.height,0,xt,kt,null));else if(M.isDataTexture)if(Jt.length>0){Ht&&fe&&e.texStorage2D(i.TEXTURE_2D,gt,Bt,Jt[0].width,Jt[0].height);for(let Q=0,j=Jt.length;Q<j;Q++)pt=Jt[Q],Ht?D&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,pt.width,pt.height,xt,kt,pt.data):e.texImage2D(i.TEXTURE_2D,Q,Bt,pt.width,pt.height,0,xt,kt,pt.data);M.generateMipmaps=!1}else Ht?(fe&&e.texStorage2D(i.TEXTURE_2D,gt,Bt,it.width,it.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,xt,kt,it.data)):e.texImage2D(i.TEXTURE_2D,0,Bt,it.width,it.height,0,xt,kt,it.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ht&&fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Bt,Jt[0].width,Jt[0].height,it.depth);for(let Q=0,j=Jt.length;Q<j;Q++)if(pt=Jt[Q],M.format!==Vn)if(xt!==null)if(Ht){if(D)if(M.layerUpdates.size>0){let vt=wh(pt.width,pt.height,M.format,M.type);for(let yt of M.layerUpdates){let Ot=pt.data.subarray(yt*vt/pt.data.BYTES_PER_ELEMENT,(yt+1)*vt/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,yt,pt.width,pt.height,1,xt,Ot)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,pt.width,pt.height,it.depth,xt,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Bt,pt.width,pt.height,it.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,pt.width,pt.height,it.depth,xt,kt,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,Bt,pt.width,pt.height,it.depth,0,xt,kt,pt.data)}else{Ht&&fe&&e.texStorage2D(i.TEXTURE_2D,gt,Bt,Jt[0].width,Jt[0].height);for(let Q=0,j=Jt.length;Q<j;Q++)pt=Jt[Q],M.format!==Vn?xt!==null?Ht?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,pt.width,pt.height,xt,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,Bt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?D&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,pt.width,pt.height,xt,kt,pt.data):e.texImage2D(i.TEXTURE_2D,Q,Bt,pt.width,pt.height,0,xt,kt,pt.data)}else if(M.isDataArrayTexture)if(Ht){if(fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Bt,it.width,it.height,it.depth),D)if(M.layerUpdates.size>0){let Q=wh(it.width,it.height,M.format,M.type);for(let j of M.layerUpdates){let vt=it.data.subarray(j*Q/it.data.BYTES_PER_ELEMENT,(j+1)*Q/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,it.width,it.height,1,xt,kt,vt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,xt,kt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,it.width,it.height,it.depth,0,xt,kt,it.data);else if(M.isData3DTexture)Ht?(fe&&e.texStorage3D(i.TEXTURE_3D,gt,Bt,it.width,it.height,it.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,xt,kt,it.data)):e.texImage3D(i.TEXTURE_3D,0,Bt,it.width,it.height,it.depth,0,xt,kt,it.data);else if(M.isFramebufferTexture){if(fe)if(Ht)e.texStorage2D(i.TEXTURE_2D,gt,Bt,it.width,it.height);else{let Q=it.width,j=it.height;for(let vt=0;vt<gt;vt++)e.texImage2D(i.TEXTURE_2D,vt,Bt,Q,j,0,xt,kt,null),Q>>=1,j>>=1}}else if(Jt.length>0){if(Ht&&fe){let Q=Ft(Jt[0]);e.texStorage2D(i.TEXTURE_2D,gt,Bt,Q.width,Q.height)}for(let Q=0,j=Jt.length;Q<j;Q++)pt=Jt[Q],Ht?D&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,xt,kt,pt):e.texImage2D(i.TEXTURE_2D,Q,Bt,xt,kt,pt);M.generateMipmaps=!1}else if(Ht){if(fe){let Q=Ft(it);e.texStorage2D(i.TEXTURE_2D,gt,Bt,Q.width,Q.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,kt,it)}else e.texImage2D(i.TEXTURE_2D,0,Bt,xt,kt,it);m(M)&&h(J),Et.__version=Z.version,M.onUpdate&&M.onUpdate(M)}_.__version=M.version}function rt(_,M,B){if(M.image.length!==6)return;let J=de(_,M),et=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,_.__webglTexture,i.TEXTURE0+B);let Z=n.get(et);if(et.version!==Z.__version||J===!0){e.activeTexture(i.TEXTURE0+B);let Et=me.getPrimaries(me.workingColorSpace),ft=M.colorSpace===zn?null:me.getPrimaries(M.colorSpace),mt=M.colorSpace===zn||Et===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let ie=M.isCompressedTexture||M.image[0].isCompressedTexture,it=M.image[0]&&M.image[0].isDataTexture,xt=[];for(let j=0;j<6;j++)!ie&&!it?xt[j]=g(M.image[j],!0,s.maxCubemapSize):xt[j]=it?M.image[j].image:M.image[j],xt[j]=oe(M,xt[j]);let kt=xt[0],Bt=r.convert(M.format,M.colorSpace),pt=r.convert(M.type),Jt=w(M.internalFormat,Bt,pt,M.colorSpace),Ht=M.isVideoTexture!==!0,fe=Z.__version===void 0||J===!0,D=et.dataReady,gt=C(M,kt);At(i.TEXTURE_CUBE_MAP,M);let Q;if(ie){Ht&&fe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Jt,kt.width,kt.height);for(let j=0;j<6;j++){Q=xt[j].mipmaps;for(let vt=0;vt<Q.length;vt++){let yt=Q[vt];M.format!==Vn?Bt!==null?Ht?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,vt,0,0,yt.width,yt.height,Bt,yt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,vt,Jt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,vt,0,0,yt.width,yt.height,Bt,pt,yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,vt,Jt,yt.width,yt.height,0,Bt,pt,yt.data)}}}else{if(Q=M.mipmaps,Ht&&fe){Q.length>0&&gt++;let j=Ft(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Jt,j.width,j.height)}for(let j=0;j<6;j++)if(it){Ht?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,xt[j].width,xt[j].height,Bt,pt,xt[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Jt,xt[j].width,xt[j].height,0,Bt,pt,xt[j].data);for(let vt=0;vt<Q.length;vt++){let Ot=Q[vt].image[j].image;Ht?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,vt+1,0,0,Ot.width,Ot.height,Bt,pt,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,vt+1,Jt,Ot.width,Ot.height,0,Bt,pt,Ot.data)}}else{Ht?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Bt,pt,xt[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Jt,Bt,pt,xt[j]);for(let vt=0;vt<Q.length;vt++){let yt=Q[vt];Ht?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,vt+1,0,0,Bt,pt,yt.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,vt+1,Jt,Bt,pt,yt.image[j])}}}m(M)&&h(i.TEXTURE_CUBE_MAP),Z.__version=et.version,M.onUpdate&&M.onUpdate(M)}_.__version=M.version}function Rt(_,M,B,J,et,Z){let Et=r.convert(B.format,B.colorSpace),ft=r.convert(B.type),mt=w(B.internalFormat,Et,ft,B.colorSpace),ie=n.get(M),it=n.get(B);if(it.__renderTarget=M,!ie.__hasExternalTextures){let xt=Math.max(1,M.width>>Z),kt=Math.max(1,M.height>>Z);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,Z,mt,xt,kt,M.depth,0,Et,ft,null):e.texImage2D(et,Z,mt,xt,kt,0,Et,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,_),jt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,et,it.__webglTexture,0,Xt(M)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,et,it.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(_,M,B){if(i.bindRenderbuffer(i.RENDERBUFFER,_),M.depthBuffer){let J=M.depthTexture,et=J&&J.isDepthTexture?J.type:null,Z=x(M.stencilBuffer,et),Et=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=Xt(M);jt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,Z,M.width,M.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,Z,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Z,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,_)}else{let J=M.textures;for(let et=0;et<J.length;et++){let Z=J[et],Et=r.convert(Z.format,Z.colorSpace),ft=r.convert(Z.type),mt=w(Z.internalFormat,Et,ft,Z.colorSpace),ie=Xt(M);B&&jt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,mt,M.width,M.height):jt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,mt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,mt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function zt(_,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,_),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=n.get(M.depthTexture);J.__renderTarget=M,(!J.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X(M.depthTexture,0);let et=J.__webglTexture,Z=Xt(M);if(M.depthTexture.format===Rs)jt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(M.depthTexture.format===Ns)jt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Vt(_){let M=n.get(_),B=_.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==_.depthTexture){let J=_.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){let et=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",et)};J.addEventListener("dispose",et),M.__depthDisposeCallback=et}M.__boundDepthTexture=J}if(_.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");zt(M.__webglFramebuffer,_)}else if(B){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=i.createRenderbuffer(),dt(M.__webglDepthbuffer[J],_,!1);else{let et=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),dt(M.__webglDepthbuffer,_,!1);else{let J=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function qt(_,M,B){let J=n.get(_);M!==void 0&&Rt(J.__webglFramebuffer,_,_.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Vt(_)}function se(_){let M=_.texture,B=n.get(_),J=n.get(M);_.addEventListener("dispose",R);let et=_.textures,Z=_.isWebGLCubeRenderTarget===!0,Et=et.length>1;if(Et||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=M.version,a.memory.textures++),Z){B.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[ft]=[];for(let mt=0;mt<M.mipmaps.length;mt++)B.__webglFramebuffer[ft][mt]=i.createFramebuffer()}else B.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let ft=0;ft<M.mipmaps.length;ft++)B.__webglFramebuffer[ft]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Et)for(let ft=0,mt=et.length;ft<mt;ft++){let ie=n.get(et[ft]);ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture(),a.memory.textures++)}if(_.samples>0&&jt(_)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ft=0;ft<et.length;ft++){let mt=et[ft];B.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ft]);let ie=r.convert(mt.format,mt.colorSpace),it=r.convert(mt.type),xt=w(mt.internalFormat,ie,it,mt.colorSpace,_.isXRRenderTarget===!0),kt=Xt(_);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,xt,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,B.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),_.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),dt(B.__webglDepthRenderbuffer,_,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),At(i.TEXTURE_CUBE_MAP,M);for(let ft=0;ft<6;ft++)if(M.mipmaps&&M.mipmaps.length>0)for(let mt=0;mt<M.mipmaps.length;mt++)Rt(B.__webglFramebuffer[ft][mt],_,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,mt);else Rt(B.__webglFramebuffer[ft],_,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(M)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ft=0,mt=et.length;ft<mt;ft++){let ie=et[ft],it=n.get(ie);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),At(i.TEXTURE_2D,ie),Rt(B.__webglFramebuffer,_,ie,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,0),m(ie)&&h(i.TEXTURE_2D)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(ft=_.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,J.__webglTexture),At(ft,M),M.mipmaps&&M.mipmaps.length>0)for(let mt=0;mt<M.mipmaps.length;mt++)Rt(B.__webglFramebuffer[mt],_,M,i.COLOR_ATTACHMENT0,ft,mt);else Rt(B.__webglFramebuffer,_,M,i.COLOR_ATTACHMENT0,ft,0);m(M)&&h(ft),e.unbindTexture()}_.depthBuffer&&Vt(_)}function Qt(_){let M=_.textures;for(let B=0,J=M.length;B<J;B++){let et=M[B];if(m(et)){let Z=b(_),Et=n.get(et).__webglTexture;e.bindTexture(Z,Et),h(Z),e.unbindTexture()}}}let ge=[],F=[];function Ne(_){if(_.samples>0){if(jt(_)===!1){let M=_.textures,B=_.width,J=_.height,et=i.COLOR_BUFFER_BIT,Z=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(_),ft=M.length>1;if(ft)for(let mt=0;mt<M.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let mt=0;mt<M.length;mt++){if(_.resolveDepthBuffer&&(_.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),_.stencilBuffer&&_.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[mt]);let ie=n.get(M[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ie,0)}i.blitFramebuffer(0,0,B,J,0,0,B,J,et,i.NEAREST),l===!0&&(ge.length=0,F.length=0,ge.push(i.COLOR_ATTACHMENT0+mt),_.depthBuffer&&_.resolveDepthBuffer===!1&&(ge.push(Z),F.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ge))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let mt=0;mt<M.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[mt]);let ie=n.get(M[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,ie,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.resolveDepthBuffer===!1&&l){let M=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Xt(_){return Math.min(s.maxSamples,_.samples)}function jt(_){let M=n.get(_);return _.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ut(_){let M=a.render.frame;u.get(_)!==M&&(u.set(_,M),_.update())}function oe(_,M){let B=_.colorSpace,J=_.format,et=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||B!==Hs&&B!==zn&&(me.getTransfer(B)===be?(J!==Vn||et!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function Ft(_){return typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement?(c.width=_.naturalWidth||_.width,c.height=_.naturalHeight||_.height):typeof VideoFrame<"u"&&_ instanceof VideoFrame?(c.width=_.displayWidth,c.height=_.displayHeight):(c.width=_.width,c.height=_.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=G,this.setTexture2D=X,this.setTexture2DArray=k,this.setTexture3D=V,this.setTextureCube=H,this.rebindTextures=qt,this.setupRenderTarget=se,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=jt}function E0(i,t){function e(n,s=zn){let r,a=me.getTransfer(s);if(n===Mi)return i.UNSIGNED_BYTE;if(n===Gl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Oh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Fh)return i.BYTE;if(n===Bh)return i.SHORT;if(n===pr)return i.UNSIGNED_SHORT;if(n===Hl)return i.INT;if(n===$i)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===Tn)return i.HALF_FLOAT;if(n===kh)return i.ALPHA;if(n===zh)return i.RGB;if(n===Vn)return i.RGBA;if(n===Vh)return i.LUMINANCE;if(n===Hh)return i.LUMINANCE_ALPHA;if(n===Rs)return i.DEPTH_COMPONENT;if(n===Ns)return i.DEPTH_STENCIL;if(n===Xl)return i.RED;if(n===ql)return i.RED_INTEGER;if(n===Gh)return i.RG;if(n===Yl)return i.RG_INTEGER;if(n===Ql)return i.RGBA_INTEGER;if(n===sa||n===ra||n===aa||n===oa)if(a===be)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===oa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fo||n===Bo||n===Oo||n===ko)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ko)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zo||n===Vo||n===Ho)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===zo||n===Vo)return a===be?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ho)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Go||n===Wo||n===Xo||n===qo||n===Yo||n===Qo||n===Zo||n===Ko||n===Jo||n===jo||n===$o||n===tl||n===el||n===nl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Go)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wo)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xo)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qo)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yo)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qo)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zo)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ko)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jo)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===jo)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$o)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tl)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===el)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nl)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===la||n===il||n===sl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===la)return a===be?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===il)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wh||n===rl||n===al||n===ol)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===la)return r.COMPRESSED_RED_RGTC1_EXT;if(n===rl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===al)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ol)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Us?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Sl=class extends on{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ti=class extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}},T0={type:"move"},ur=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,n),h=this._getHandJoint(c,g);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=u.position.distanceTo(d.position),f=.02,v=.005;c.inputState.pinching&&p>f+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=f-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(T0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ti;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},_0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Al=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new mn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Pe({vertexShader:_0,fragmentShader:R0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ae(new Si(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wl=class extends Ui{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,p=null,f=null,v=null,g=new Al,m=e.getContextAttributes(),h=null,b=null,w=[],x=[],C=new St,E=null,R=new on;R.viewport=new Ue;let I=new on;I.viewport=new Ue;let A=[R,I],S=new Sl,P=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let rt=w[K];return rt===void 0&&(rt=new ur,w[K]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(K){let rt=w[K];return rt===void 0&&(rt=new ur,w[K]=rt),rt.getGripSpace()},this.getHand=function(K){let rt=w[K];return rt===void 0&&(rt=new ur,w[K]=rt),rt.getHandSpace()};function z(K){let rt=x.indexOf(K.inputSource);if(rt===-1)return;let Rt=w[rt];Rt!==void 0&&(Rt.update(K.inputSource,K.frame,c||a),Rt.dispatchEvent({type:K.type,data:K.inputSource}))}function Y(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",X);for(let K=0;K<w.length;K++){let rt=x[K];rt!==null&&(x[K]=null,w[K].disconnect(rt))}P=null,G=null,g.reset(),t.setRenderTarget(h),f=null,p=null,d=null,s=null,b=null,de.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(h=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){let rt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Qe(f.framebufferWidth,f.framebufferHeight,{format:Vn,type:Mi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let rt=null,Rt=null,dt=null;m.depth&&(dt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=m.stencil?Ns:Rs,Rt=m.stencil?Us:$i);let zt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};d=new XRWebGLBinding(s,e),p=d.createProjectionLayer(zt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),b=new Qe(p.textureWidth,p.textureHeight,{format:Vn,type:Mi,depthTexture:new ya(p.textureWidth,p.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),de.setContext(s),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function X(K){for(let rt=0;rt<K.removed.length;rt++){let Rt=K.removed[rt],dt=x.indexOf(Rt);dt>=0&&(x[dt]=null,w[dt].disconnect(Rt))}for(let rt=0;rt<K.added.length;rt++){let Rt=K.added[rt],dt=x.indexOf(Rt);if(dt===-1){for(let Vt=0;Vt<w.length;Vt++)if(Vt>=x.length){x.push(Rt),dt=Vt;break}else if(x[Vt]===null){x[Vt]=Rt,dt=Vt;break}if(dt===-1)break}let zt=w[dt];zt&&zt.connect(Rt)}}let k=new N,V=new N;function H(K,rt,Rt){k.setFromMatrixPosition(rt.matrixWorld),V.setFromMatrixPosition(Rt.matrixWorld);let dt=k.distanceTo(V),zt=rt.projectionMatrix.elements,Vt=Rt.projectionMatrix.elements,qt=zt[14]/(zt[10]-1),se=zt[14]/(zt[10]+1),Qt=(zt[9]+1)/zt[5],ge=(zt[9]-1)/zt[5],F=(zt[8]-1)/zt[0],Ne=(Vt[8]+1)/Vt[0],Xt=qt*F,jt=qt*Ne,Ut=dt/(-F+Ne),oe=Ut*-F;if(rt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(oe),K.translateZ(Ut),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),zt[10]===-1)K.projectionMatrix.copy(rt.projectionMatrix),K.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{let Ft=qt+Ut,_=se+Ut,M=Xt-oe,B=jt+(dt-oe),J=Qt*se/_*Ft,et=ge*se/_*Ft;K.projectionMatrix.makePerspective(M,B,J,et,Ft,_),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function st(K,rt){rt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(rt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let rt=K.near,Rt=K.far;g.texture!==null&&(g.depthNear>0&&(rt=g.depthNear),g.depthFar>0&&(Rt=g.depthFar)),S.near=I.near=R.near=rt,S.far=I.far=R.far=Rt,(P!==S.near||G!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,G=S.far),R.layers.mask=K.layers.mask|2,I.layers.mask=K.layers.mask|4,S.layers.mask=R.layers.mask|I.layers.mask;let dt=K.parent,zt=S.cameras;st(S,dt);for(let Vt=0;Vt<zt.length;Vt++)st(zt[Vt],dt);zt.length===2?H(S,R,I):S.projectionMatrix.copy(R.projectionMatrix),ut(K,S,dt)};function ut(K,rt,Rt){Rt===null?K.matrix.copy(rt.matrixWorld):(K.matrix.copy(Rt.matrixWorld),K.matrix.invert(),K.matrix.multiply(rt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(rt.projectionMatrix),K.projectionMatrixInverse.copy(rt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=mr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(K){l=K,p!==null&&(p.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(S)};let Pt=null;function At(K,rt){if(u=rt.getViewerPose(c||a),v=rt,u!==null){let Rt=u.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let dt=!1;Rt.length!==S.cameras.length&&(S.cameras.length=0,dt=!0);for(let Vt=0;Vt<Rt.length;Vt++){let qt=Rt[Vt],se=null;if(f!==null)se=f.getViewport(qt);else{let ge=d.getViewSubImage(p,qt);se=ge.viewport,Vt===0&&(t.setRenderTargetTextures(b,ge.colorTexture,p.ignoreDepthValues?void 0:ge.depthStencilTexture),t.setRenderTarget(b))}let Qt=A[Vt];Qt===void 0&&(Qt=new on,Qt.layers.enable(Vt),Qt.viewport=new Ue,A[Vt]=Qt),Qt.matrix.fromArray(qt.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(qt.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(se.x,se.y,se.width,se.height),Vt===0&&(S.matrix.copy(Qt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),dt===!0&&S.cameras.push(Qt)}let zt=s.enabledFeatures;if(zt&&zt.includes("depth-sensing")){let Vt=d.getDepthInformation(Rt[0]);Vt&&Vt.isValid&&Vt.texture&&g.init(t,Vt,s.renderState)}}for(let Rt=0;Rt<w.length;Rt++){let dt=x[Rt],zt=w[Rt];dt!==null&&zt!==void 0&&zt.update(dt,rt,c||a)}Pt&&Pt(K,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),v=null}let de=new Kh;de.setAnimationLoop(At),this.setAnimationLoop=function(K){Pt=K},this.dispose=function(){}}},Yi=new ii,C0=new Se;function I0(i,t){function e(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,Zh(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,b,w,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),d(m,h)):h.isMeshPhongMaterial?(r(m,h),u(m,h)):h.isMeshStandardMaterial?(r(m,h),p(m,h),h.isMeshPhysicalMaterial&&f(m,h,x)):h.isMeshMatcapMaterial?(r(m,h),v(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),g(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,b,w):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,e(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===tn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,e(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===tn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,e(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,e(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let b=t.get(h),w=b.envMap,x=b.envMapRotation;w&&(m.envMap.value=w,Yi.copy(x),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),m.envMapRotation.value.setFromMatrix4(C0.makeRotationFromEuler(Yi)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,b,w){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*b,m.scale.value=w*.5,h.map&&(m.map.value=h.map,e(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function p(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function f(m,h,b){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===tn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function g(m,h){let b=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function P0(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,w){let x=w.program;n.uniformBlockBinding(b,x)}function c(b,w){let x=s[b.id];x===void 0&&(v(b),x=u(b),s[b.id]=x,b.addEventListener("dispose",m));let C=w.program;n.updateUBOMapping(b,C);let E=t.render.frame;r[b.id]!==E&&(p(b),r[b.id]=E)}function u(b){let w=d();b.__bindingPointIndex=w;let x=i.createBuffer(),C=b.__size,E=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,C,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,x),x}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(b){let w=s[b.id],x=b.uniforms,C=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let E=0,R=x.length;E<R;E++){let I=Array.isArray(x[E])?x[E]:[x[E]];for(let A=0,S=I.length;A<S;A++){let P=I[A];if(f(P,E,A,C)===!0){let G=P.__offset,z=Array.isArray(P.value)?P.value:[P.value],Y=0;for(let X=0;X<z.length;X++){let k=z[X],V=g(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,G+Y,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,Y),Y+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,w,x,C){let E=b.value,R=w+"_"+x;if(C[R]===void 0)return typeof E=="number"||typeof E=="boolean"?C[R]=E:C[R]=E.clone(),!0;{let I=C[R];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return C[R]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function v(b){let w=b.uniforms,x=0,C=16;for(let R=0,I=w.length;R<I;R++){let A=Array.isArray(w[R])?w[R]:[w[R]];for(let S=0,P=A.length;S<P;S++){let G=A[S],z=Array.isArray(G.value)?G.value:[G.value];for(let Y=0,X=z.length;Y<X;Y++){let k=z[Y],V=g(k),H=x%C,st=H%V.boundary,ut=H+st;x+=st,ut!==0&&C-ut<V.storage&&(x+=C-ut),G.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=x,x+=V.storage}}}let E=x%C;return E>0&&(x+=C-E),b.__size=x,b.__cache={},this}function g(b){let w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),w}function m(b){let w=b.target;w.removeEventListener("dispose",m);let x=a.indexOf(w.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function h(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:h}}var Ma=class{constructor(t={}){let{canvas:e=Nd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let v=new Uint32Array(4),g=new Int32Array(4),m=null,h=null,b=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pn,this.toneMapping=ni,this.toneMappingExposure=1;let x=this,C=!1,E=0,R=0,I=null,A=-1,S=null,P=new Ue,G=new Ue,z=null,Y=new Kt(0),X=0,k=e.width,V=e.height,H=1,st=null,ut=null,Pt=new Ue(0,0,k,V),At=new Ue(0,0,k,V),de=!1,K=new vr,rt=!1,Rt=!1,dt=new Se,zt=new Se,Vt=new N,qt=new Ue,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qt=!1;function ge(){return I===null?H:1}let F=n;function Ne(y,L){return e.getContext(y,L)}try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",yt,!1),F===null){let L="webgl2";if(F=Ne(L,y),F===null)throw Ne(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Xt,jt,Ut,oe,Ft,_,M,B,J,et,Z,Et,ft,mt,ie,it,xt,kt,Bt,pt,Jt,Ht,fe,D;function gt(){Xt=new Ym(F),Xt.init(),Ht=new E0(F,Xt),jt=new Vm(F,Xt,t,Ht),Ut=new S0(F,Xt),jt.reverseDepthBuffer&&p&&Ut.buffers.depth.setReversed(!0),oe=new Km(F),Ft=new c0,_=new w0(F,Xt,Ut,Ft,jt,Ht,oe),M=new Gm(x),B=new qm(x),J=new nf(F),fe=new km(F,J),et=new Qm(F,J,oe,fe),Z=new jm(F,et,J,oe),Bt=new Jm(F,jt,_),it=new Hm(Ft),Et=new l0(x,M,B,Xt,jt,fe,it),ft=new I0(x,Ft),mt=new u0,ie=new v0(Xt),kt=new Om(x,M,B,Ut,Z,f,l),xt=new M0(x,Z,jt),D=new P0(F,oe,jt,Ut),pt=new zm(F,Xt,oe),Jt=new Zm(F,Xt,oe),oe.programs=Et.programs,x.capabilities=jt,x.extensions=Xt,x.properties=Ft,x.renderLists=mt,x.shadowMap=xt,x.state=Ut,x.info=oe}gt();let Q=new wl(x,F);this.xr=Q,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let y=Xt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Xt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(y){y!==void 0&&(H=y,this.setSize(k,V,!1))},this.getSize=function(y){return y.set(k,V)},this.setSize=function(y,L,O=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=y,V=L,e.width=Math.floor(y*H),e.height=Math.floor(L*H),O===!0&&(e.style.width=y+"px",e.style.height=L+"px"),this.setViewport(0,0,y,L)},this.getDrawingBufferSize=function(y){return y.set(k*H,V*H).floor()},this.setDrawingBufferSize=function(y,L,O){k=y,V=L,H=O,e.width=Math.floor(y*O),e.height=Math.floor(L*O),this.setViewport(0,0,y,L)},this.getCurrentViewport=function(y){return y.copy(P)},this.getViewport=function(y){return y.copy(Pt)},this.setViewport=function(y,L,O,W){y.isVector4?Pt.set(y.x,y.y,y.z,y.w):Pt.set(y,L,O,W),Ut.viewport(P.copy(Pt).multiplyScalar(H).round())},this.getScissor=function(y){return y.copy(At)},this.setScissor=function(y,L,O,W){y.isVector4?At.set(y.x,y.y,y.z,y.w):At.set(y,L,O,W),Ut.scissor(G.copy(At).multiplyScalar(H).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(y){Ut.setScissorTest(de=y)},this.setOpaqueSort=function(y){st=y},this.setTransparentSort=function(y){ut=y},this.getClearColor=function(y){return y.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(y=!0,L=!0,O=!0){let W=0;if(y){let U=!1;if(I!==null){let at=I.texture.format;U=at===Ql||at===Yl||at===ql}if(U){let at=I.texture.type,ht=at===Mi||at===$i||at===pr||at===Us||at===Gl||at===Wl,Ct=kt.getClearColor(),wt=kt.getClearAlpha(),It=Ct.r,ct=Ct.g,Tt=Ct.b;ht?(v[0]=It,v[1]=ct,v[2]=Tt,v[3]=wt,F.clearBufferuiv(F.COLOR,0,v)):(g[0]=It,g[1]=ct,g[2]=Tt,g[3]=wt,F.clearBufferiv(F.COLOR,0,g))}else W|=F.COLOR_BUFFER_BIT}L&&(W|=F.DEPTH_BUFFER_BIT),O&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),mt.dispose(),ie.dispose(),Ft.dispose(),M.dispose(),B.dispose(),Z.dispose(),fe.dispose(),D.dispose(),Et.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Ze),Q.removeEventListener("sessionend",ln),T.stop()};function j(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let y=oe.autoReset,L=xt.enabled,O=xt.autoUpdate,W=xt.needsUpdate,U=xt.type;gt(),oe.autoReset=y,xt.enabled=L,xt.autoUpdate=O,xt.needsUpdate=W,xt.type=U}function yt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ot(y){let L=y.target;L.removeEventListener("dispose",Ot),Wt(L)}function Wt(y){Re(y),Ft.remove(y)}function Re(y){let L=Ft.get(y).programs;L!==void 0&&(L.forEach(function(O){Et.releaseProgram(O)}),y.isShaderMaterial&&Et.releaseShaderCache(y))}this.renderBufferDirect=function(y,L,O,W,U,at){L===null&&(L=se);let ht=U.isMesh&&U.matrixWorld.determinant()<0,Ct=Ee(y,L,O,W,U);Ut.setMaterial(W,ht);let wt=O.index,It=1;if(W.wireframe===!0){if(wt=et.getWireframeAttribute(O),wt===void 0)return;It=2}let ct=O.drawRange,Tt=O.attributes.position,$t=ct.start*It,he=(ct.start+ct.count)*It;at!==null&&($t=Math.max($t,at.start*It),he=Math.min(he,(at.start+at.count)*It)),wt!==null?($t=Math.max($t,0),he=Math.min(he,wt.count)):Tt!=null&&($t=Math.max($t,0),he=Math.min(he,Tt.count));let ue=he-$t;if(ue<0||ue===1/0)return;fe.setup(U,W,Ct,O,wt);let Te,ee=pt;if(wt!==null&&(Te=J.get(wt),ee=Jt,ee.setIndex(Te)),U.isMesh)W.wireframe===!0?(Ut.setLineWidth(W.wireframeLinewidth*ge()),ee.setMode(F.LINES)):ee.setMode(F.TRIANGLES);else if(U.isLine){let _t=W.linewidth;_t===void 0&&(_t=1),Ut.setLineWidth(_t*ge()),U.isLineSegments?ee.setMode(F.LINES):U.isLineLoop?ee.setMode(F.LINE_LOOP):ee.setMode(F.LINE_STRIP)}else U.isPoints?ee.setMode(F.POINTS):U.isSprite&&ee.setMode(F.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)ee.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Xt.get("WEBGL_multi_draw"))ee.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let _t=U._multiDrawStarts,Le=U._multiDrawCounts,le=U._multiDrawCount,Xe=wt?J.get(wt).bytesPerElement:1,Ke=Ft.get(W).currentProgram.getUniforms();for(let Fe=0;Fe<le;Fe++)Ke.setValue(F,"_gl_DrawID",Fe),ee.render(_t[Fe]/Xe,Le[Fe])}else if(U.isInstancedMesh)ee.renderInstances($t,ue,U.count);else if(O.isInstancedBufferGeometry){let _t=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Le=Math.min(O.instanceCount,_t);ee.renderInstances($t,ue,Le)}else ee.render($t,ue)};function re(y,L,O){y.transparent===!0&&y.side===kn&&y.forceSinglePass===!1?(y.side=tn,y.needsUpdate=!0,Yt(y,L,O),y.side=Li,y.needsUpdate=!0,Yt(y,L,O),y.side=kn):Yt(y,L,O)}this.compile=function(y,L,O=null){O===null&&(O=y),h=ie.get(O),h.init(L),w.push(h),O.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(h.pushLight(U),U.castShadow&&h.pushShadow(U))}),y!==O&&y.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(h.pushLight(U),U.castShadow&&h.pushShadow(U))}),h.setupLights();let W=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let at=U.material;if(at)if(Array.isArray(at))for(let ht=0;ht<at.length;ht++){let Ct=at[ht];re(Ct,O,U),W.add(Ct)}else re(at,O,U),W.add(at)}),w.pop(),h=null,W},this.compileAsync=function(y,L,O=null){let W=this.compile(y,L,O);return new Promise(U=>{function at(){if(W.forEach(function(ht){Ft.get(ht).currentProgram.isReady()&&W.delete(ht)}),W.size===0){U(y);return}setTimeout(at,10)}Xt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let Me=null;function xn(y){Me&&Me(y)}function Ze(){T.stop()}function ln(){T.start()}let T=new Kh;T.setAnimationLoop(xn),typeof self<"u"&&T.setContext(self),this.setAnimationLoop=function(y){Me=y,Q.setAnimationLoop(y),y===null?T.stop():T.start()},Q.addEventListener("sessionstart",Ze),Q.addEventListener("sessionend",ln),this.render=function(y,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(L),L=Q.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,L,I),h=ie.get(y,w.length),h.init(L),w.push(h),zt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),K.setFromProjectionMatrix(zt),Rt=this.localClippingEnabled,rt=it.init(this.clippingPlanes,Rt),m=mt.get(y,b.length),m.init(),b.push(m),Q.enabled===!0&&Q.isPresenting===!0){let at=x.xr.getDepthSensingMesh();at!==null&&q(at,L,-1/0,x.sortObjects)}q(y,L,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(st,ut),Qt=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,Qt&&kt.addToRenderList(m,y),this.info.render.frame++,rt===!0&&it.beginShadows();let O=h.state.shadowsArray;xt.render(O,y,L),rt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,U=m.transmissive;if(h.setupLights(),L.isArrayCamera){let at=L.cameras;if(U.length>0)for(let ht=0,Ct=at.length;ht<Ct;ht++){let wt=at[ht];lt(W,U,y,wt)}Qt&&kt.render(y);for(let ht=0,Ct=at.length;ht<Ct;ht++){let wt=at[ht];tt(m,y,wt,wt.viewport)}}else U.length>0&&lt(W,U,y,L),Qt&&kt.render(y),tt(m,y,L);I!==null&&(_.updateMultisampleRenderTarget(I),_.updateRenderTargetMipmap(I)),y.isScene===!0&&y.onAfterRender(x,y,L),fe.resetDefaultState(),A=-1,S=null,w.pop(),w.length>0?(h=w[w.length-1],rt===!0&&it.setGlobalState(x.clippingPlanes,h.state.camera)):h=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function q(y,L,O,W){if(y.visible===!1)return;if(y.layers.test(L.layers)){if(y.isGroup)O=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(L);else if(y.isLight)h.pushLight(y),y.castShadow&&h.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||K.intersectsSprite(y)){W&&qt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(zt);let ht=Z.update(y),Ct=y.material;Ct.visible&&m.push(y,ht,Ct,O,qt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||K.intersectsObject(y))){let ht=Z.update(y),Ct=y.material;if(W&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),qt.copy(y.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),qt.copy(ht.boundingSphere.center)),qt.applyMatrix4(y.matrixWorld).applyMatrix4(zt)),Array.isArray(Ct)){let wt=ht.groups;for(let It=0,ct=wt.length;It<ct;It++){let Tt=wt[It],$t=Ct[Tt.materialIndex];$t&&$t.visible&&m.push(y,ht,$t,O,qt.z,Tt)}}else Ct.visible&&m.push(y,ht,Ct,O,qt.z,null)}}let at=y.children;for(let ht=0,Ct=at.length;ht<Ct;ht++)q(at[ht],L,O,W)}function tt(y,L,O,W){let U=y.opaque,at=y.transmissive,ht=y.transparent;h.setupLightsView(O),rt===!0&&it.setGlobalState(x.clippingPlanes,O),W&&Ut.viewport(P.copy(W)),U.length>0&&$(U,L,O),at.length>0&&$(at,L,O),ht.length>0&&$(ht,L,O),Ut.buffers.depth.setTest(!0),Ut.buffers.depth.setMask(!0),Ut.buffers.color.setMask(!0),Ut.setPolygonOffset(!1)}function lt(y,L,O,W){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[W.id]===void 0&&(h.state.transmissionRenderTarget[W.id]=new Qe(1,1,{generateMipmaps:!0,type:Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float")?Tn:Mi,minFilter:ji,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:me.workingColorSpace}));let at=h.state.transmissionRenderTarget[W.id],ht=W.viewport||P;at.setSize(ht.z,ht.w);let Ct=x.getRenderTarget();x.setRenderTarget(at),x.getClearColor(Y),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),Qt&&kt.render(O);let wt=x.toneMapping;x.toneMapping=ni;let It=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),h.setupLightsView(W),rt===!0&&it.setGlobalState(x.clippingPlanes,W),$(y,O,W),_.updateMultisampleRenderTarget(at),_.updateRenderTargetMipmap(at),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let Tt=0,$t=L.length;Tt<$t;Tt++){let he=L[Tt],ue=he.object,Te=he.geometry,ee=he.material,_t=he.group;if(ee.side===kn&&ue.layers.test(W.layers)){let Le=ee.side;ee.side=tn,ee.needsUpdate=!0,Lt(ue,O,W,Te,ee,_t),ee.side=Le,ee.needsUpdate=!0,ct=!0}}ct===!0&&(_.updateMultisampleRenderTarget(at),_.updateRenderTargetMipmap(at))}x.setRenderTarget(Ct),x.setClearColor(Y,X),It!==void 0&&(W.viewport=It),x.toneMapping=wt}function $(y,L,O){let W=L.isScene===!0?L.overrideMaterial:null;for(let U=0,at=y.length;U<at;U++){let ht=y[U],Ct=ht.object,wt=ht.geometry,It=W===null?ht.material:W,ct=ht.group;Ct.layers.test(O.layers)&&Lt(Ct,L,O,wt,It,ct)}}function Lt(y,L,O,W,U,at){y.onBeforeRender(x,L,O,W,U,at),y.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(x,L,O,W,y,at),U.transparent===!0&&U.side===kn&&U.forceSinglePass===!1?(U.side=tn,U.needsUpdate=!0,x.renderBufferDirect(O,L,W,U,y,at),U.side=Li,U.needsUpdate=!0,x.renderBufferDirect(O,L,W,U,y,at),U.side=kn):x.renderBufferDirect(O,L,W,U,y,at),y.onAfterRender(x,L,O,W,U,at)}function Yt(y,L,O){L.isScene!==!0&&(L=se);let W=Ft.get(y),U=h.state.lights,at=h.state.shadowsArray,ht=U.state.version,Ct=Et.getParameters(y,U.state,at,L,O),wt=Et.getProgramCacheKey(Ct),It=W.programs;W.environment=y.isMeshStandardMaterial?L.environment:null,W.fog=L.fog,W.envMap=(y.isMeshStandardMaterial?B:M).get(y.envMap||W.environment),W.envMapRotation=W.environment!==null&&y.envMap===null?L.environmentRotation:y.envMapRotation,It===void 0&&(y.addEventListener("dispose",Ot),It=new Map,W.programs=It);let ct=It.get(wt);if(ct!==void 0){if(W.currentProgram===ct&&W.lightsStateVersion===ht)return Nt(y,Ct),ct}else Ct.uniforms=Et.getUniforms(y),y.onBeforeCompile(Ct,x),ct=Et.acquireProgram(Ct,wt),It.set(wt,ct),W.uniforms=Ct.uniforms;let Tt=W.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Tt.clippingPlanes=it.uniform),Nt(y,Ct),W.needsLights=ot(y),W.lightsStateVersion=ht,W.needsLights&&(Tt.ambientLightColor.value=U.state.ambient,Tt.lightProbe.value=U.state.probe,Tt.directionalLights.value=U.state.directional,Tt.directionalLightShadows.value=U.state.directionalShadow,Tt.spotLights.value=U.state.spot,Tt.spotLightShadows.value=U.state.spotShadow,Tt.rectAreaLights.value=U.state.rectArea,Tt.ltc_1.value=U.state.rectAreaLTC1,Tt.ltc_2.value=U.state.rectAreaLTC2,Tt.pointLights.value=U.state.point,Tt.pointLightShadows.value=U.state.pointShadow,Tt.hemisphereLights.value=U.state.hemi,Tt.directionalShadowMap.value=U.state.directionalShadowMap,Tt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Tt.spotShadowMap.value=U.state.spotShadowMap,Tt.spotLightMatrix.value=U.state.spotLightMatrix,Tt.spotLightMap.value=U.state.spotLightMap,Tt.pointShadowMap.value=U.state.pointShadowMap,Tt.pointShadowMatrix.value=U.state.pointShadowMatrix),W.currentProgram=ct,W.uniformsList=null,ct}function Gt(y){if(y.uniformsList===null){let L=y.currentProgram.getUniforms();y.uniformsList=Is.seqWithValue(L.seq,y.uniforms)}return y.uniformsList}function Nt(y,L){let O=Ft.get(y);O.outputColorSpace=L.outputColorSpace,O.batching=L.batching,O.batchingColor=L.batchingColor,O.instancing=L.instancing,O.instancingColor=L.instancingColor,O.instancingMorph=L.instancingMorph,O.skinning=L.skinning,O.morphTargets=L.morphTargets,O.morphNormals=L.morphNormals,O.morphColors=L.morphColors,O.morphTargetsCount=L.morphTargetsCount,O.numClippingPlanes=L.numClippingPlanes,O.numIntersection=L.numClipIntersection,O.vertexAlphas=L.vertexAlphas,O.vertexTangents=L.vertexTangents,O.toneMapping=L.toneMapping}function Ee(y,L,O,W,U){L.isScene!==!0&&(L=se),_.resetTextureUnits();let at=L.fog,ht=W.isMeshStandardMaterial?L.environment:null,Ct=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Hs,wt=(W.isMeshStandardMaterial?B:M).get(W.envMap||ht),It=W.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,ct=!!O.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Tt=!!O.morphAttributes.position,$t=!!O.morphAttributes.normal,he=!!O.morphAttributes.color,ue=ni;W.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ue=x.toneMapping);let Te=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ee=Te!==void 0?Te.length:0,_t=Ft.get(W),Le=h.state.lights;if(rt===!0&&(Rt===!0||y!==S)){let Zt=y===S&&W.id===A;it.setState(W,y,Zt)}let le=!1;W.version===_t.__version?(_t.needsLights&&_t.lightsStateVersion!==Le.state.version||_t.outputColorSpace!==Ct||U.isBatchedMesh&&_t.batching===!1||!U.isBatchedMesh&&_t.batching===!0||U.isBatchedMesh&&_t.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&_t.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&_t.instancing===!1||!U.isInstancedMesh&&_t.instancing===!0||U.isSkinnedMesh&&_t.skinning===!1||!U.isSkinnedMesh&&_t.skinning===!0||U.isInstancedMesh&&_t.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&_t.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&_t.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&_t.instancingMorph===!1&&U.morphTexture!==null||_t.envMap!==wt||W.fog===!0&&_t.fog!==at||_t.numClippingPlanes!==void 0&&(_t.numClippingPlanes!==it.numPlanes||_t.numIntersection!==it.numIntersection)||_t.vertexAlphas!==It||_t.vertexTangents!==ct||_t.morphTargets!==Tt||_t.morphNormals!==$t||_t.morphColors!==he||_t.toneMapping!==ue||_t.morphTargetsCount!==ee)&&(le=!0):(le=!0,_t.__version=W.version);let Xe=_t.currentProgram;le===!0&&(Xe=Yt(W,L,U));let Ke=!1,Fe=!1,Pn=!1,xe=Xe.getUniforms(),nt=_t.uniforms;if(Ut.useProgram(Xe.program)&&(Ke=!0,Fe=!0,Pn=!0),W.id!==A&&(A=W.id,Fe=!0),Ke||S!==y){Ut.buffers.depth.getReversed()?(dt.copy(y.projectionMatrix),Bd(dt),Od(dt),xe.setValue(F,"projectionMatrix",dt)):xe.setValue(F,"projectionMatrix",y.projectionMatrix),xe.setValue(F,"viewMatrix",y.matrixWorldInverse);let pe=xe.map.cameraPosition;pe!==void 0&&pe.setValue(F,Vt.setFromMatrixPosition(y.matrixWorld)),jt.logarithmicDepthBuffer&&xe.setValue(F,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&xe.setValue(F,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,Fe=!0,Pn=!0)}if(U.isSkinnedMesh){xe.setOptional(F,U,"bindMatrix"),xe.setOptional(F,U,"bindMatrixInverse");let Zt=U.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),xe.setValue(F,"boneTexture",Zt.boneTexture,_))}U.isBatchedMesh&&(xe.setOptional(F,U,"batchingTexture"),xe.setValue(F,"batchingTexture",U._matricesTexture,_),xe.setOptional(F,U,"batchingIdTexture"),xe.setValue(F,"batchingIdTexture",U._indirectTexture,_),xe.setOptional(F,U,"batchingColorTexture"),U._colorsTexture!==null&&xe.setValue(F,"batchingColorTexture",U._colorsTexture,_));let Dt=O.morphAttributes;if((Dt.position!==void 0||Dt.normal!==void 0||Dt.color!==void 0)&&Bt.update(U,O,Xe),(Fe||_t.receiveShadow!==U.receiveShadow)&&(_t.receiveShadow=U.receiveShadow,xe.setValue(F,"receiveShadow",U.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(nt.envMap.value=wt,nt.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&L.environment!==null&&(nt.envMapIntensity.value=L.environmentIntensity),Fe&&(xe.setValue(F,"toneMappingExposure",x.toneMappingExposure),_t.needsLights&&ve(nt,Pn),at&&W.fog===!0&&ft.refreshFogUniforms(nt,at),ft.refreshMaterialUniforms(nt,W,H,V,h.state.transmissionRenderTarget[y.id]),Is.upload(F,Gt(_t),nt,_)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Is.upload(F,Gt(_t),nt,_),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&xe.setValue(F,"center",U.center),xe.setValue(F,"modelViewMatrix",U.modelViewMatrix),xe.setValue(F,"normalMatrix",U.normalMatrix),xe.setValue(F,"modelMatrix",U.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let Zt=W.uniformsGroups;for(let pe=0,He=Zt.length;pe<He;pe++){let Ge=Zt[pe];D.update(Ge,Xe),D.bind(Ge,Xe)}}return Xe}function ve(y,L){y.ambientLightColor.needsUpdate=L,y.lightProbe.needsUpdate=L,y.directionalLights.needsUpdate=L,y.directionalLightShadows.needsUpdate=L,y.pointLights.needsUpdate=L,y.pointLightShadows.needsUpdate=L,y.spotLights.needsUpdate=L,y.spotLightShadows.needsUpdate=L,y.rectAreaLights.needsUpdate=L,y.hemisphereLights.needsUpdate=L}function ot(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(y,L,O){Ft.get(y.texture).__webglTexture=L,Ft.get(y.depthTexture).__webglTexture=O;let W=Ft.get(y);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=O===void 0,W.__autoAllocateDepthBuffer||Xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,L){let O=Ft.get(y);O.__webglFramebuffer=L,O.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(y,L=0,O=0){I=y,E=L,R=O;let W=!0,U=null,at=!1,ht=!1;if(y){let wt=Ft.get(y);if(wt.__useDefaultFramebuffer!==void 0)Ut.bindFramebuffer(F.FRAMEBUFFER,null),W=!1;else if(wt.__webglFramebuffer===void 0)_.setupRenderTarget(y);else if(wt.__hasExternalTextures)_.rebindTextures(y,Ft.get(y.texture).__webglTexture,Ft.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Tt=y.depthTexture;if(wt.__boundDepthTexture!==Tt){if(Tt!==null&&Ft.has(Tt)&&(y.width!==Tt.image.width||y.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(y)}}let It=y.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(ht=!0);let ct=Ft.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(ct[L])?U=ct[L][O]:U=ct[L],at=!0):y.samples>0&&_.useMultisampledRTT(y)===!1?U=Ft.get(y).__webglMultisampledFramebuffer:Array.isArray(ct)?U=ct[O]:U=ct,P.copy(y.viewport),G.copy(y.scissor),z=y.scissorTest}else P.copy(Pt).multiplyScalar(H).floor(),G.copy(At).multiplyScalar(H).floor(),z=de;if(Ut.bindFramebuffer(F.FRAMEBUFFER,U)&&W&&Ut.drawBuffers(y,U),Ut.viewport(P),Ut.scissor(G),Ut.setScissorTest(z),at){let wt=Ft.get(y.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+L,wt.__webglTexture,O)}else if(ht){let wt=Ft.get(y.texture),It=L||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,wt.__webglTexture,O||0,It)}A=-1},this.readRenderTargetPixels=function(y,L,O,W,U,at,ht){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Ft.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ht!==void 0&&(Ct=Ct[ht]),Ct){Ut.bindFramebuffer(F.FRAMEBUFFER,Ct);try{let wt=y.texture,It=wt.format,ct=wt.type;if(!jt.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!jt.textureTypeReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=y.width-W&&O>=0&&O<=y.height-U&&F.readPixels(L,O,W,U,Ht.convert(It),Ht.convert(ct),at)}finally{let wt=I!==null?Ft.get(I).__webglFramebuffer:null;Ut.bindFramebuffer(F.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(y,L,O,W,U,at,ht){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=Ft.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ht!==void 0&&(Ct=Ct[ht]),Ct){let wt=y.texture,It=wt.format,ct=wt.type;if(!jt.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!jt.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=y.width-W&&O>=0&&O<=y.height-U){Ut.bindFramebuffer(F.FRAMEBUFFER,Ct);let Tt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Tt),F.bufferData(F.PIXEL_PACK_BUFFER,at.byteLength,F.STREAM_READ),F.readPixels(L,O,W,U,Ht.convert(It),Ht.convert(ct),0);let $t=I!==null?Ft.get(I).__webglFramebuffer:null;Ut.bindFramebuffer(F.FRAMEBUFFER,$t);let he=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Fd(F,he,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Tt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,at),F.deleteBuffer(Tt),F.deleteSync(he),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,L=null,O=0){y.isTexture!==!0&&(or("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,y=arguments[1]);let W=Math.pow(2,-O),U=Math.floor(y.image.width*W),at=Math.floor(y.image.height*W),ht=L!==null?L.x:0,Ct=L!==null?L.y:0;_.setTexture2D(y,0),F.copyTexSubImage2D(F.TEXTURE_2D,O,0,0,ht,Ct,U,at),Ut.unbindTexture()},this.copyTextureToTexture=function(y,L,O=null,W=null,U=0){y.isTexture!==!0&&(or("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,y=arguments[1],L=arguments[2],U=arguments[3]||0,O=null);let at,ht,Ct,wt,It,ct,Tt,$t,he,ue=y.isCompressedTexture?y.mipmaps[U]:y.image;O!==null?(at=O.max.x-O.min.x,ht=O.max.y-O.min.y,Ct=O.isBox3?O.max.z-O.min.z:1,wt=O.min.x,It=O.min.y,ct=O.isBox3?O.min.z:0):(at=ue.width,ht=ue.height,Ct=ue.depth||1,wt=0,It=0,ct=0),W!==null?(Tt=W.x,$t=W.y,he=W.z):(Tt=0,$t=0,he=0);let Te=Ht.convert(L.format),ee=Ht.convert(L.type),_t;L.isData3DTexture?(_.setTexture3D(L,0),_t=F.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(_.setTexture2DArray(L,0),_t=F.TEXTURE_2D_ARRAY):(_.setTexture2D(L,0),_t=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,L.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,L.unpackAlignment);let Le=F.getParameter(F.UNPACK_ROW_LENGTH),le=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Xe=F.getParameter(F.UNPACK_SKIP_PIXELS),Ke=F.getParameter(F.UNPACK_SKIP_ROWS),Fe=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ue.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ue.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,wt),F.pixelStorei(F.UNPACK_SKIP_ROWS,It),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ct);let Pn=y.isDataArrayTexture||y.isData3DTexture,xe=L.isDataArrayTexture||L.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){let nt=Ft.get(y),Dt=Ft.get(L),Zt=Ft.get(nt.__renderTarget),pe=Ft.get(Dt.__renderTarget);Ut.bindFramebuffer(F.READ_FRAMEBUFFER,Zt.__webglFramebuffer),Ut.bindFramebuffer(F.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let He=0;He<Ct;He++)Pn&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ft.get(y).__webglTexture,U,ct+He),y.isDepthTexture?(xe&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ft.get(L).__webglTexture,U,he+He),F.blitFramebuffer(wt,It,at,ht,Tt,$t,at,ht,F.DEPTH_BUFFER_BIT,F.NEAREST)):xe?F.copyTexSubImage3D(_t,U,Tt,$t,he+He,wt,It,at,ht):F.copyTexSubImage2D(_t,U,Tt,$t,he+He,wt,It,at,ht);Ut.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else xe?y.isDataTexture||y.isData3DTexture?F.texSubImage3D(_t,U,Tt,$t,he,at,ht,Ct,Te,ee,ue.data):L.isCompressedArrayTexture?F.compressedTexSubImage3D(_t,U,Tt,$t,he,at,ht,Ct,Te,ue.data):F.texSubImage3D(_t,U,Tt,$t,he,at,ht,Ct,Te,ee,ue):y.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,U,Tt,$t,at,ht,Te,ee,ue.data):y.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,U,Tt,$t,ue.width,ue.height,Te,ue.data):F.texSubImage2D(F.TEXTURE_2D,U,Tt,$t,at,ht,Te,ee,ue);F.pixelStorei(F.UNPACK_ROW_LENGTH,Le),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,le),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Xe),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ke),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Fe),U===0&&L.generateMipmaps&&F.generateMipmap(_t),Ut.unbindTexture()},this.copyTextureToTexture3D=function(y,L,O=null,W=null,U=0){return y.isTexture!==!0&&(or("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,W=arguments[1]||null,y=arguments[2],L=arguments[3],U=arguments[4]||0),or('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,L,O,W,U)},this.initRenderTarget=function(y){Ft.get(y).__webglFramebuffer===void 0&&_.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?_.setTextureCube(y,0):y.isData3DTexture?_.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?_.setTexture2DArray(y,0):_.setTexture2D(y,0),Ut.unbindTexture()},this.resetState=function(){E=0,R=0,I=null,Ut.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=me._getDrawingBufferColorSpace(t),e.unpackColorSpace=me._getUnpackColorSpace()}};var xr=class extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var El=class extends mn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=wn,u=wn,d,p){super(null,a,o,l,c,u,s,r,d,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ai=class extends En{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Es=new Se,Eh=new Se,na=[],Th=new bi,L0=new Se,rr=new ae,ar=new ts,ba=class extends ae{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ai(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,L0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new bi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Es),Th.copy(t.boundingBox).applyMatrix4(Es),this.boundingBox.union(Th)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ts),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Es),ar.copy(t.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(ar)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(rr.geometry=this.geometry,rr.material=this.material,rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ar.copy(this.boundingSphere),ar.applyMatrix4(n),t.ray.intersectsSphere(ar)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Es),Eh.multiplyMatrices(n,Es),rr.matrixWorld=Eh,rr.raycast(t,na);for(let a=0,o=na.length;a<o;a++){let l=na[a];l.instanceId=r,l.object=this,e.push(l)}na.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ai(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new El(new Float32Array(s*this.count),s,this.count,Xl,$n));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ks=class extends mn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Tl=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],p=n[s+1]-u,f=(a-u)/p;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new St:new N);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new N,s=[],r=[],a=[],o=new N,l=new Se;for(let f=0;f<=t;f++){let v=f/t;s[f]=this.getTangentAt(v,new N)}r[0]=new N,a[0]=new N;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),p=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),p<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let v=Math.acos(ke(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,v))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ke(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let v=1;v<=t;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],f*v)),a[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}};function _h(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}var Sa=class extends Tl{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new St){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(_h(o,l.x,c.x,u.x,d.x),_h(o,l.y,c.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new St().fromArray(s))}return this}};var yr=class i extends en{constructor(t=[new St(0,-.5),new St(.5,0),new St(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ke(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/e,d=new N,p=new St,f=new N,v=new N,g=new N,m=0,h=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,h=t[b+1].y-t[b].y,f.x=h*1,f.y=-m,f.z=h*0,g.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(g.x,g.y,g.z);break;default:m=t[b+1].x-t[b].x,h=t[b+1].y-t[b].y,f.x=h*1,f.y=-m,f.z=h*0,v.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),l.push(f.x,f.y,f.z),g.copy(v)}for(let b=0;b<=e;b++){let w=n+b*u*s,x=Math.sin(w),C=Math.cos(w);for(let E=0;E<=t.length-1;E++){d.x=t[E].x*x,d.y=t[E].y,d.z=t[E].x*C,a.push(d.x,d.y,d.z),p.x=b/e,p.y=E/(t.length-1),o.push(p.x,p.y);let R=l[3*E+0]*x,I=l[3*E+1],A=l[3*E+0]*C;c.push(R,I,A)}}for(let b=0;b<e;b++)for(let w=0;w<t.length-1;w++){let x=w+b*t.length,C=x,E=x+t.length,R=x+t.length+1,I=x+1;r.push(C,E,I),r.push(R,I,E)}this.setIndex(r),this.setAttribute("position",new ye(a,3)),this.setAttribute("uv",new ye(o,2)),this.setAttribute("normal",new ye(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Mr=class i extends en{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],p=[],f=[],v=0,g=[],m=n/2,h=0;b(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new ye(d,3)),this.setAttribute("normal",new ye(p,3)),this.setAttribute("uv",new ye(f,2));function b(){let x=new N,C=new N,E=0,R=(e-t)/n;for(let I=0;I<=r;I++){let A=[],S=I/r,P=S*(e-t)+t;for(let G=0;G<=s;G++){let z=G/s,Y=z*l+o,X=Math.sin(Y),k=Math.cos(Y);C.x=P*X,C.y=-S*n+m,C.z=P*k,d.push(C.x,C.y,C.z),x.set(X,R,k).normalize(),p.push(x.x,x.y,x.z),f.push(z,1-S),A.push(v++)}g.push(A)}for(let I=0;I<s;I++)for(let A=0;A<r;A++){let S=g[A][I],P=g[A+1][I],G=g[A+1][I+1],z=g[A][I+1];(t>0||A!==0)&&(u.push(S,P,z),E+=3),(e>0||A!==r-1)&&(u.push(P,G,z),E+=3)}c.addGroup(h,E,0),h+=E}function w(x){let C=v,E=new St,R=new N,I=0,A=x===!0?t:e,S=x===!0?1:-1;for(let G=1;G<=s;G++)d.push(0,m*S,0),p.push(0,S,0),f.push(.5,.5),v++;let P=v;for(let G=0;G<=s;G++){let Y=G/s*l+o,X=Math.cos(Y),k=Math.sin(Y);R.x=A*k,R.y=m*S,R.z=A*X,d.push(R.x,R.y,R.z),p.push(0,S,0),E.x=X*.5+.5,E.y=k*.5*S+.5,f.push(E.x,E.y),v++}for(let G=0;G<s;G++){let z=C+G,Y=P+G;x===!0?u.push(Y,Y+1,z):u.push(Y+1,Y,z),I+=3}c.addGroup(h,I,x===!0?1:2),h+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Aa=class i extends en{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],d=t,p=(e-t)/s,f=new N,v=new St;for(let g=0;g<=s;g++){for(let m=0;m<=n;m++){let h=r+m/n*a;f.x=d*Math.cos(h),f.y=d*Math.sin(h),l.push(f.x,f.y,f.z),c.push(0,0,1),v.x=(f.x/e+1)/2,v.y=(f.y/e+1)/2,u.push(v.x,v.y)}d+=p}for(let g=0;g<s;g++){let m=g*(n+1);for(let h=0;h<n;h++){let b=h+m,w=b,x=b+n+1,C=b+n+2,E=b+1;o.push(w,x,E),o.push(x,C,E)}}this.setIndex(o),this.setAttribute("position",new ye(l,3)),this.setAttribute("normal",new ye(c,3)),this.setAttribute("uv",new ye(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var br=class i extends en{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],d=new N,p=new N,f=[],v=[],g=[],m=[];for(let h=0;h<=n;h++){let b=[],w=h/n,x=0;h===0&&a===0?x=.5/e:h===n&&l===Math.PI&&(x=-.5/e);for(let C=0;C<=e;C++){let E=C/e;d.x=-t*Math.cos(s+E*r)*Math.sin(a+w*o),d.y=t*Math.cos(a+w*o),d.z=t*Math.sin(s+E*r)*Math.sin(a+w*o),v.push(d.x,d.y,d.z),p.copy(d).normalize(),g.push(p.x,p.y,p.z),m.push(E+x,1-w),b.push(c++)}u.push(b)}for(let h=0;h<n;h++)for(let b=0;b<e;b++){let w=u[h][b+1],x=u[h][b],C=u[h+1][b],E=u[h+1][b+1];(h!==0||a>0)&&f.push(w,x,E),(h!==n-1||l<Math.PI)&&f.push(x,C,E)}this.setIndex(f),this.setAttribute("position",new ye(v,3)),this.setAttribute("normal",new ye(g,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var wa=class i extends en{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],u=new N,d=new N,p=new N;for(let f=0;f<=n;f++)for(let v=0;v<=s;v++){let g=v/s*r,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(g),d.y=(t+e*Math.cos(m))*Math.sin(g),d.z=e*Math.sin(m),o.push(d.x,d.y,d.z),u.x=t*Math.cos(g),u.y=t*Math.sin(g),p.subVectors(d,u).normalize(),l.push(p.x,p.y,p.z),c.push(v/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let v=1;v<=s;v++){let g=(s+1)*f+v-1,m=(s+1)*(f-1)+v-1,h=(s+1)*(f-1)+v,b=(s+1)*f+v;a.push(g,m,b),a.push(m,h,b)}this.setIndex(a),this.setAttribute("position",new ye(o,3)),this.setAttribute("normal",new ye(l,3)),this.setAttribute("uv",new ye(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Sr=class extends es{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xh,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},si=class extends Sr{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new St(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Kt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Kt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Kt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function ia(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function D0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var zs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},_l=class extends zs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rc,endingEnd:Rc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Cc:r=t,o=2*e-n;break;case Ic:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Cc:a=t,l=2*n-e;break;case Ic:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,f=this._weightNext,v=(n-e)/(s-e),g=v*v,m=g*v,h=-p*m+2*p*g-p*v,b=(1+p)*m+(-1.5-2*p)*g+(-.5+p)*v+1,w=(-1-f)*m+(1.5+f)*g+.5*v,x=f*m-f*g;for(let C=0;C!==o;++C)r[C]=h*a[u+C]+b*a[c+C]+w*a[l+C]+x*a[d+C];return r}},Rl=class extends zs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),d=1-u;for(let p=0;p!==o;++p)r[p]=a[c+p]*d+a[l+p]*u;return r}},Cl=class extends zs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Gn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ia(e,this.TimeBufferType),this.values=ia(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ia(t.times,Array),values:ia(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Cl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Rl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new _l(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ca:e=this.InterpolantFactoryMethodDiscrete;break;case ll:e=this.InterpolantFactoryMethodLinear;break;case Ka:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ca;case this.InterpolantFactoryMethodLinear:return ll;case this.InterpolantFactoryMethodSmooth:return Ka}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&D0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ka,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,p=d-n,f=d+n;for(let v=0;v!==n;++v){let g=e[d+v];if(g!==e[p+v]||g!==e[f+v]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,p=a*n;for(let f=0;f!==n;++f)e[p+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=ll;var is=class extends Gn{constructor(t,e,n){super(t,e,n)}};is.prototype.ValueTypeName="bool";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=ca;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var Il=class extends Gn{};Il.prototype.ValueTypeName="color";var Pl=class extends Gn{};Pl.prototype.ValueTypeName="number";var Ll=class extends zs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)Ni.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ea=class extends Gn{InterpolantFactoryMethodLinear(t){return new Ll(this.times,this.values,this.getValueSize(),t)}};Ea.prototype.ValueTypeName="quaternion";Ea.prototype.InterpolantFactoryMethodSmooth=void 0;var ss=class extends Gn{constructor(t,e,n){super(t,e,n)}};ss.prototype.ValueTypeName="string";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=ca;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Dl=class extends Gn{};Dl.prototype.ValueTypeName="vector";var Ul=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,p=c.length;d<p;d+=2){let f=c[d],v=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return v}return null}}},U0=new Ul,Nl=class{constructor(t){this.manager=t!==void 0?t:U0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Nl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fl=class extends gn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var wo=new Se,Rh=new N,Ch=new N,Bl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vr,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Rh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Rh),Ch.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ch),e.updateMatrixWorld(),wo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Ol=class extends Bl{constructor(){super(new Bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vs=class extends Fl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new Ol}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ta=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ih(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Ih();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Ih(){return performance.now()}var Jl="\\[\\]\\.:\\/",N0=new RegExp("["+Jl+"]","g"),jl="[^"+Jl+"]",F0="[^"+Jl.replace("\\.","")+"]",B0=/((?:WC+[\/:])*)/.source.replace("WC",jl),O0=/(WCOD+)?/.source.replace("WCOD",F0),k0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jl),z0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jl),V0=new RegExp("^"+B0+O0+k0+z0+"$"),H0=["material","materials","bones","map"],kl=class{constructor(t,e,n){let s=n||Ie.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ie=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(N0,"")}static parseTrackName(t){let e=V0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);H0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ie.Composite=kl;Ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ie.prototype.GetterByBindingType=[Ie.prototype._getValue_direct,Ie.prototype._getValue_array,Ie.prototype._getValue_arrayElement,Ie.prototype._getValue_toArray];Ie.prototype.SetterByBindingTypeAndVersioning=[[Ie.prototype._setValue_direct,Ie.prototype._setValue_direct_setNeedsUpdate,Ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_array,Ie.prototype._setValue_array_setNeedsUpdate,Ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_arrayElement,Ie.prototype._setValue_arrayElement_setNeedsUpdate,Ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_fromArray,Ie.prototype._setValue_fromArray_setNeedsUpdate,Ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Qv=new Float32Array(1);var Ph=new Se,_a=class{constructor(t,e,n=0,s=1/0){this.ray=new pa(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new gr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ph.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ph),this}intersectObject(t,e=!0,n=[]){return zl(t,this,n,e),n.sort(Lh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)zl(t[s],this,n,e);return n.sort(Lh),n}};function Lh(i,t){return i.distance-t.distance}function zl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)zl(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Da={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Wn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},W0=new Bs(-1,1,1,-1,0,1),$l=class extends en{constructor(){super(),this.setAttribute("position",new ye([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ye([0,2,0,0,2,0],2))}},X0=new $l,qs=class{constructor(t){this._mesh=new ae(X0,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,W0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ys=class extends Wn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Pe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ws.clone(t.uniforms),this.material=new Pe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new qs(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Er=class extends Wn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ua=class extends Wn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Na=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new St);this._width=n.width,this._height=n.height,e=new Qe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Tn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ys(Da),this.copyPass.material.blending=ei,this.clock=new Ta}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Er!==void 0&&(a instanceof Er?n=!0:a instanceof Ua&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new St);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Fa=class extends Wn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Kt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var eu={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Kt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Qs=class i extends Wn{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new St(t.x,t.y):new St(256,256),this.clearColor=new Kt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Qe(r,a,{type:Tn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let p=new Qe(r,a,{type:Tn});p.texture.name="UnrealBloomPass.h"+d,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let f=new Qe(r,a,{type:Tn});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=eu;this.highPassUniforms=Ws.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Pe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new St(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Da;this.copyUniforms=Ws.clone(u.uniforms),this.blendMaterial=new Pe({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Di,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Kt,this.oldClearAlpha=1,this.basic=new Hn,this.fsQuad=new qs(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new St(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Pe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new St(.5,.5)},direction:{value:new St(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Pe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Qs.BlurDirectionX=new St(1,0);Qs.BlurDirectionY=new St(0,1);var q0="#6c998c",Y0="#5f8b7f",Q0="#d3dfd9",Z0="rgba(226,238,233,0.34)",K0="#7a478a",J0="#ffffff";async function nu(i,t,e){let s=(await(await fetch(i)).text()).replace("<svg ",`<svg width="${t}" height="${e}" preserveAspectRatio="xMidYMid meet" `),r=new Blob([s],{type:"image/svg+xml"}),a=URL.createObjectURL(r),o=new Image;return o.decoding="async",o.src=a,await o.decode(),o}function iu(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}async function su(i,t=3072,e=1500){let n=document.createElement("canvas");n.width=t,n.height=e;let s=n.getContext("2d"),r=t/2,a=t/3,o=t/(360*.97),l=X=>r+X*o,c=[l(3),e*.82],u=[l(-79),e*.27],d=[l(79),e*.28],p=(X,k)=>{let V=k[0]-X[0],H=k[1]-X[1],st=Math.hypot(V,H);return[V/st,H/st]},f=p(c,u),v=p(c,d),g=(X,k,V)=>[X[0]+k[0]*V,X[1]+k[1]*V],m=[f[1],-f[0]],h=(X,k)=>[X[0]+m[0]*k,X[1]+m[1]*k],b=t,w=g(c,v,-(e+10-c[1])/-v[1]);s.fillStyle=q0,s.fillRect(0,0,t,e),s.fillStyle=Y0,s.beginPath(),s.moveTo(...c),s.lineTo(...g(c,v,b)),s.lineTo(t+10,e+10),s.lineTo(...w),s.closePath(),s.fill();let x=150,C=13;s.save(),s.beginPath(),s.moveTo(...g(c,f,b)),s.lineTo(...c),s.lineTo(...w),s.lineTo(l(-125),e+10),s.lineTo(l(-125),-10),s.closePath(),s.clip(),s.fillStyle=Q0,s.beginPath(),s.moveTo(...g(c,f,b)),s.lineTo(...g(c,f,-b)),s.lineTo(...h(g(c,f,-b),x)),s.lineTo(...h(g(c,f,b),x)),s.closePath(),s.fill(),s.fillStyle=K0,s.beginPath(),s.moveTo(...h(g(c,f,b),x-C)),s.lineTo(...h(g(c,f,-b),x-C)),s.lineTo(...h(g(c,f,-b),x)),s.lineTo(...h(g(c,f,b),x)),s.closePath(),s.fill(),s.strokeStyle=Z0,s.lineWidth=5,s.lineCap="butt";for(let X=0;X<26;X++){let k=x+24+X*27;s.beginPath(),s.moveTo(...h(g(c,f,b),k)),s.lineTo(...h(g(c,f,-b),k)),s.stroke()}s.restore(),s.strokeStyle="rgba(255,255,255,0.10)",s.lineWidth=2,s.beginPath(),s.moveTo(...g(c,f,b)),s.lineTo(...c),s.stroke();let[E,R]=await Promise.all([nu(i("logo-mark-white.svg"),600,600),nu(i("logo-wordmark-white.svg"),1071,302)]);try{await Promise.all([document.fonts.load("700 60px Philosopher"),document.fonts.load("400 60px Philosopher"),document.fonts.load('500 40px "Roboto Flex"')])}catch{}let I=30*o;s.drawImage(E,r-I/2,e*.072,I,I);let A=79*o,S=A*302/1071;s.drawImage(R,r-A/2+A*.025,e*.285,A,S),s.fillStyle=J0,s.textAlign="center",s.textBaseline="alphabetic";let P=(X,k,V)=>{s.font=k(100);let H=s.measureText(X).width;return k(Math.round(100*V/H))};"letterSpacing"in s&&(s.letterSpacing="0px"),s.font=P("CBD SKIN CARE",X=>`500 ${X}px "Roboto Flex", Arial, sans-serif`,a*.42),s.fillText("CBD SKIN CARE",r,e*.525),s.font=P("CBD SKIN OIL",X=>`700 ${X}px Philosopher, Georgia, serif`,a*.5),s.fillText("CBD SKIN OIL",r,e*.605),s.font=P("1000 mg",X=>`700 ${X}px Philosopher, Georgia, serif`,a*.19),s.fillText("1000 mg",r,e*.66),s.textAlign="right";let G=l(50);s.font=`400 ${Math.round(a*.04)}px "Roboto Flex", Arial, sans-serif`,s.fillText("For all skin types",G,e*.85),s.font=`500 ${Math.round(a*.043)}px "Roboto Flex", Arial, sans-serif`,s.fillText("Contains natural &",G,e*.892),s.fillText("organic ingredients",G,e*.929),s.font=`400 ${Math.round(a*.03)}px "Roboto Flex", Arial, sans-serif`,s.fillText("30 ml/1 oz \u212E",G,e*.968),s.fillStyle="rgba(255,255,255,0.55)";let z=iu(7);for(let X of[l(-168),l(124)])for(let k=0;k<22;k++){let V=a*(.32+z()*.22);s.fillRect(X,e*.22+k*e*.026,V,e*.008)}let Y=iu(11);s.globalCompositeOperation="soft-light";for(let X=0;X<9e3;X++){let k=Y()*t,V=Y()*e,H=Y()*.08;s.fillStyle=Y()>.5?`rgba(255,255,255,${H})`:`rgba(0,0,0,${H})`,s.fillRect(k,V,1+Y()*3,1+Y()*1.5)}return s.globalCompositeOperation="source-over",n}function ru(i){let e=Math.round(1024*i.height/i.width),n=document.createElement("canvas");n.width=1024,n.height=e;let s=n.getContext("2d");s.drawImage(i,0,0,1024,e);let r=s.getImageData(0,0,1024,e),a=r.data;for(let o=0;o<a.length;o+=4){let l=(a[o]+a[o+1]+a[o+2])/3,u=205-Math.max(0,(l-200)/55)*95;a[o]=a[o+1]=a[o+2]=u}return s.putImageData(r,0,0),n}var ce=i=>new Kt(i),rs=Math.PI*2,ri=(i,t,e)=>Math.min(e,Math.max(t,i)),vn=(i,t,e)=>{let n=ri((e-i)/(t-i),0,1);return n*n*(3-2*n)},j0=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,_n=1.35,Tr=0,Ba=.57,_r=new N(-.5,7.3,.75),Xn=5.9;function Zs(i,t=96,e=0){let n=i.map(([r,a])=>new St(r,a));e&&(n=new Sa(n).getSpacedPoints(e));let s=new yr(n,t);return s.computeVertexNormals(),s}function $0(i,t,e,n,s=360){let r=new Mr(i,i,t,s,6,!0),a=r.attributes.position;for(let o=0;o<a.count;o++){let l=a.getX(o),c=a.getZ(o),u=a.getY(o),d=Math.atan2(l,c),p=Math.pow(Math.abs(Math.cos(d*e*.5)),.6),f=vn(t/2,t/2-.08,Math.abs(u)),g=(i-n+n*p*f+n*(1-f)*.5)/Math.hypot(l,c);a.setX(o,l*g),a.setZ(o,c*g)}return r.computeVertexNormals(),r}function tv(i,t,e=44,n=128,s=3){let r=[],a=[],o=[],l=u=>i*(1+.075*Math.sin(2*u+s)+.05*Math.sin(3*u+1.7*s)+.022*Math.sin(5*u+.3)+.012*Math.sin(9*u+2.1));r.push(0,t,0),o.push(0);for(let u=1;u<=e;u++){let d=Math.pow(u/e,.8);for(let p=0;p<n;p++){let f=p/n*rs,v=l(f)*d,g=t*Math.pow(Math.max(0,1-d*d),.55);r.push(Math.sin(f)*v,g,Math.cos(f)*v),o.push(d)}}for(let u=0;u<n;u++)a.push(0,1+u,1+(u+1)%n);for(let u=1;u<e;u++){let d=1+(u-1)*n,p=1+u*n;for(let f=0;f<n;f++){let v=(f+1)%n;a.push(d+f,p+f,p+v,d+f,p+v,d+v)}}let c=new en;return c.setAttribute("position",new ye(r,3)),c.setAttribute("aT",new ye(o,1)),c.setIndex(a),c.computeVertexNormals(),c}function Oa(i,t=256){let e=document.createElement("canvas");e.width=e.height=t;let n=e.getContext("2d"),s=n.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);i.forEach(([a,o])=>s.addColorStop(a,`rgba(255,255,255,${o})`)),n.fillStyle=s,n.fillRect(0,0,t,t);let r=new ks(e);return r.colorSpace=zn,r}function ev(i){let t=new xr,e=new ae(new ns(60,30,60),new Hn({color:ce("#28403b").multiplyScalar(.55),side:tn}));e.position.y=10,t.add(e);let n=new ae(new Si(60,60),new Hn({color:ce("#28403b").multiplyScalar(.35)}));n.rotation.x=-Math.PI/2,n.position.y=-2,t.add(n);let s=(o,l,c,u,d)=>{let p=new ae(new Si(o,l),new Hn({color:ce(u).multiplyScalar(d),side:kn}));return p.position.set(...c),p.lookAt(0,4,0),t.add(p),p};s(11,8,[-15,13,12],"#fff0dc",7),s(2.6,18,[-17,7,-9],"#fff7ee",4.2),s(2.2,18,[16,7,-5],"#eef3ee",3),s(18,18,[0,24,2],"#f6efe4",.7),s(14,5,[6,3,18],"#ddbfa3",.55),s(6,4.5,[-7,4.4,-22],"#f6e2c4",1.9),s(2.5,4.5,[5,4.4,-22],"#f3ece2",1.5);let r=new Os(i),a=r.fromScene(t,.03).texture;return r.dispose(),t.traverse(o=>{o.isMesh&&(o.geometry.dispose(),o.material.dispose())}),a}var nv=`
  varying vec2 vUv;
  void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.99999, 1.0); }`,iv=`
  precision highp float;
  uniform vec2 uRes; uniform float uDpr;
  uniform vec3 uNight, uDeep, uWarm, uAmber, uSage, uThread;
  uniform vec2 uGlow; uniform float uGlowR;
  uniform vec2 uPool; uniform vec2 uPoolR;
  uniform vec2 uTA, uTB; uniform float uThreadAlpha;
  varying vec2 vUv;
  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f*f*(3.0-2.0*f);
    return mix(mix(hash(i), hash(i+vec2(1,0)), u.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), u.x), u.y); }
  float fbm(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a*noise(p); p *= 2.03; a *= 0.5; } return s; }
  float segDist(vec2 p, vec2 a, vec2 b){ vec2 pa = p-a, ba = b-a; float h = clamp(dot(pa,ba)/dot(ba,ba), 0.0, 1.0); return length(pa - ba*h); }
  void main(){
    vec2 p = gl_FragCoord.xy;
    float sc = uRes.y;
    // night green, a touch deeper toward the top edge and the floor-front (studio sweep)
    vec3 col = uNight;
    float vy = p.y / uRes.y;
    col = mix(col, uDeep, smoothstep(0.55, 1.15, vy) * 0.55);
    col = mix(col, uDeep, smoothstep(0.35, -0.2, vy) * 0.35);
    // painted-backdrop mottling: very low-frequency, \xB12.5%
    float m = fbm(p / sc * 2.2);
    col *= 0.975 + 0.05 * m;
    // warm evening light behind the bottle
    float d = length((p - uGlow) / uGlowR);
    col += uSage * 0.05 * exp(-d*d*1.1);
    col += uWarm * 0.042 * exp(-d*d*2.6);
    col += uAmber * 0.03 * exp(-d*d*6.0);
    // light pooling on the (invisible) floor
    vec2 q = (p - uPool) / uPoolR;
    col += mix(uSage, uWarm, 0.5) * 0.035 * exp(-dot(q,q) * 1.6);
    // one diagonal thread hairline (mauve), faded at both ends
    float dl = segDist(p, uTA, uTB);
    float w = 0.35 * uDpr;
    float line = 1.0 - smoothstep(w, w + 0.9 * uDpr, dl);
    vec2 ab = uTB - uTA; float tt = clamp(dot(p - uTA, ab) / dot(ab, ab), 0.0, 1.0);
    float fade = smoothstep(0.0, 0.18, tt) * smoothstep(1.0, 0.7, tt);
    col = mix(col, uThread, line * fade * uThreadAlpha);
    gl_FragColor = vec4(col, 1.0);
  }`,sv=`
  attribute vec3 iColor; attribute float iSoft; attribute float iAlpha; attribute vec3 iHi;
  varying vec3 vN; varying vec3 vV; varying vec3 vColor; varying float vSoft; varying float vAlpha; varying vec3 vVN; varying vec3 vHi;
  void main(){
    mat4 m = modelMatrix * instanceMatrix;
    vec4 wp = m * vec4(position, 1.0);
    vN = normalize(mat3(m) * normal);
    vV = normalize(cameraPosition - wp.xyz);
    vVN = normalize(normalMatrix * mat3(instanceMatrix) * normal);
    vColor = iColor; vSoft = iSoft; vAlpha = iAlpha; vHi = iHi;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }`,rv=`
  precision highp float;
  uniform vec3 uKey; uniform vec3 uRim; uniform float uFade;
  varying vec3 vN; varying vec3 vV; varying vec3 vColor; varying float vSoft; varying float vAlpha; varying vec3 vVN; varying vec3 vHi;
  void main(){
    vec3 n = normalize(vN), v = normalize(vV), nv = normalize(vVN);
    float ndv = clamp(dot(n, v), 0.0, 1.0);
    float rimT = 1.0 - ndv;
    float fres = pow(rimT, 3.0);
    float edge = smoothstep(0.0, 0.05 + vSoft * 0.6, ndv);                 // depth-of-field softness at the silhouette
    // refraction: the sphere inverts the dark room \u2192 a darker band just inside the rim, clear centre
    float band = smoothstep(0.42, 0.74, rimT) * (1.0 - smoothstep(0.86, 0.985, rimT));
    // key highlight (upper-left, jittered per sphere) + a faint secondary window from the fill, lower-right
    vec3 L = normalize(vec3(-0.62 + vHi.x, 0.66 + vHi.y, 0.42));
    float sharp = mix(260.0, 36.0, vSoft);
    float sp = pow(max(dot(n, normalize(L + v)), 0.0), sharp);
    vec3 L2 = normalize(vec3(0.55, -0.35, 0.5));
    float sp2 = pow(max(dot(n, normalize(L2 + v)), 0.0), sharp * 0.35) * 0.18;
    // focused light inside the sphere, opposite the key (caustic crescent)
    vec2 Ld = normalize(vec2(-0.62 + vHi.x, 0.72 + vHi.y));
    float caust = smoothstep(0.2, 0.95, dot(nv.xy, -Ld)) * smoothstep(0.05, 0.5, ndv);
    // thin-film iridescence, only at grazing angles, very quiet
    vec3 irid = 0.5 + 0.5 * cos(6.2831 * (rimT * 1.3 + vHi.z + vec3(0.0, 0.33, 0.67)));
    vec3 rimCol = mix(vColor, irid, 0.38) * 0.75 + uRim * 0.12;
    vec3 col = vColor * (0.05 + caust * 0.6) + rimCol * fres * 0.75;
    float a = 0.05 + band * 0.32 + fres * 0.42 + caust * 0.12;
    col *= edge; a *= edge;
    float hi = (sp * 1.5 + sp2) * (1.0 - vSoft * 0.7);
    col += uKey * hi; a += hi * 0.55;
    float k = vAlpha * uFade;
    gl_FragColor = vec4(col * k, clamp(a, 0.0, 1.0) * k);
  }`,av=`
  attribute float aT;
  varying float vT; varying vec3 vWN; varying vec3 vWV;
  void main(){
    vT = aT;
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWN = normalize(mat3(modelMatrix) * normal);
    vWV = normalize(cameraPosition - wp.xyz);
    gl_Position = projectionMatrix * viewMatrix * wp;
  }`,ov=`
  precision highp float;
  uniform vec3 uSigma; uniform float uFeather;
  varying float vT; varying vec3 vWN; varying vec3 vWV;
  void main(){
    float ndv = max(abs(dot(normalize(vWN), normalize(vWV))), 0.16);
    float thick = 1.0 - smoothstep(0.35, 1.0, vT);                       // film thins toward the rim
    float feather = 1.0 - smoothstep(1.0 - uFeather, 1.0, vT);           // no hard edge
    vec3 T = exp(-uSigma * thick / ndv * 0.1);
    float F = 0.04 + 0.96 * pow(1.0 - ndv, 5.0);                          // light reflected away is not transmitted
    gl_FragColor = vec4(mix(vec3(1.0), T * (1.0 - F * 0.85), feather), 1.0);
  }`,lv={uniforms:{tDiffuse:{value:null},uRes:{value:new St(1,1)},uTime:{value:0},uVig:{value:.32},uVigCenter:{value:new St(.62,.52)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
    precision highp float;
    uniform sampler2D tDiffuse; uniform vec2 uRes; uniform float uTime; uniform float uVig; uniform vec2 uVigCenter;
    varying vec2 vUv;
    // hue-preserving shoulder: identity below 0.72, soft roll-off above (keeps the brand night green exact)
    vec3 shoulder(vec3 c){
      float peak = max(c.r, max(c.g, c.b));
      const float s = 0.72;
      if (peak <= s) return c;
      float d = 1.0 - s;
      float np = 1.0 - d * d / (peak - s + d);
      c *= np / peak;
      float g = 1.0 - 1.0 / (0.15 * (peak - np) + 1.0);
      return mix(c, vec3(np), g);
    }
    vec3 toSRGB(vec3 c){ return mix(c * 12.92, 1.055 * pow(c, vec3(1.0/2.4)) - 0.055, step(0.0031308, c)); }
    float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main(){
      vec3 c = texture2D(tDiffuse, vUv).rgb;
      vec2 asp = vec2(uRes.x / uRes.y, 1.0);
      vec2 q = (vUv - uVigCenter) * asp;
      float v = smoothstep(0.45, 1.35, length(q * vec2(0.82, 1.0)));
      c *= 1.0 - uVig * v;
      c = shoulder(c);
      vec3 s = toSRGB(clamp(c, 0.0, 1.0));
      // triangular dither (kills banding in the dark gradients), a whisper of temporal grain
      float n = hash(gl_FragCoord.xy + fract(uTime) * 61.0) + hash(gl_FragCoord.xy * 1.37 + fract(uTime * 1.3) * 17.0) - 1.0;
      s += n / 255.0 * 1.4;
      gl_FragColor = vec4(s, 1.0);
    }`};async function au({canvas:i,host:t,asset:e,reduced:n,onFrame:s,onFirstFrame:r}){let a=new Ma({canvas:i,antialias:!1,alpha:!1,powerPreference:"high-performance",stencil:!1});a.toneMapping=ni,a.setClearColor(ce("#28403b"),1);let o=wc();a.setPixelRatio(o);let l=new xr,c=new on(20,1,1,200),u=ev(a);l.environment=u;let d={uRes:{value:new St(1,1)},uDpr:{value:o},uNight:{value:ce("#28403b")},uDeep:{value:ce("#213631")},uWarm:{value:ce("#ddbfa3")},uAmber:{value:ce("#c7ae92")},uSage:{value:ce("#9ab4ac")},uThread:{value:ce("#b07a7f")},uGlow:{value:new St},uGlowR:{value:400},uPool:{value:new St},uPoolR:{value:new St(300,60)},uTA:{value:new St},uTB:{value:new St},uThreadAlpha:{value:.36}},p=new ae(new Si(2,2),new Pe({uniforms:d,vertexShader:nv,fragmentShader:iv,depthWrite:!1,depthTest:!1}));p.frustumCulled=!1,p.renderOrder=-100,l.add(p);let f=new Vs(ce("#fff1e0"),2.5);f.position.set(-7,9,8),l.add(f);let v=new Vs(ce("#b6c9c2"),.25);v.position.set(6,2,6),l.add(v);let g=new Vs(ce("#ffe6c4"),1.6);g.position.set(3,6,-10),l.add(g);let m=new si({color:16777215,metalness:0,roughness:.035,transmission:1,ior:1.52,thickness:1.25,attenuationColor:ce("#a24a12"),attenuationDistance:.85,specularIntensity:1,envMapIntensity:1.35}),h={uAxis:{value:new N(0,1,0)},uK1:{value:new N(-17,7,-9).normalize()},uK2:{value:new N(-7,9,8).normalize()},uK3:{value:new N(16,7,-5).normalize()}},b=new Pe({uniforms:h,transparent:!0,depthWrite:!1,blending:Di,vertexShader:`
      varying vec3 vN; varying vec3 vV; varying float vY;
      void main(){ vec4 wp = modelMatrix * vec4(position, 1.0); vN = normalize(mat3(modelMatrix) * normal); vV = normalize(cameraPosition - wp.xyz); vY = position.y;
        gl_Position = projectionMatrix * viewMatrix * wp; }`,fragmentShader:`
      precision highp float;
      uniform vec3 uAxis, uK1, uK2, uK3;
      varying vec3 vN; varying vec3 vV; varying float vY;
      float streak(vec3 r, vec3 L, float p){ vec3 rp = normalize(r - uAxis * dot(r, uAxis)); vec3 lp = normalize(L - uAxis * dot(L, uAxis)); return pow(max(dot(rp, lp), 0.0), p); }
      void main(){
        vec3 n = normalize(vN), v = normalize(vV);
        float ndv = clamp(abs(dot(n, v)), 0.0, 1.0);
        vec3 r = reflect(-v, n);
        float rim = pow(1.0 - ndv, 7.0);
        float s = streak(r, uK1, 900.0) * 1.1 + streak(r, uK2, 420.0) * 0.55 + streak(r, uK3, 700.0) * 0.5;
        float lenFade = smoothstep(-${Xn.toFixed(2)}, -${(Xn-.25).toFixed(2)}, vY) * (1.0 - smoothstep(-0.2, 0.05, vY));
        vec3 c = vec3(1.0, 0.97, 0.92) * (rim * 0.42 + s * 1.0) * lenFade;
        gl_FragColor = vec4(c, 1.0);
      }`}),w=new si({color:ce("#2a1404"),emissive:ce("#e9a440"),emissiveIntensity:1,roughness:.08,metalness:0,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:1.4});w.onBeforeCompile=nt=>{nt.vertexShader=nt.vertexShader.replace("#include <common>",`#include <common>
varying float vOilY;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vOilY = position.y;`),nt.fragmentShader=nt.fragmentShader.replace("#include <common>",`#include <common>
varying float vOilY;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      { vec3 nn = normalize(vNormal); float ndv = clamp(dot(nn, normalize(vViewPosition)), 0.0, 1.0);
        float body = 0.1 + 0.62 * pow(ndv, 1.8);
        float side = dot(normalize(nn.xy + 1e-4), normalize(vec2(-0.55, 0.83)));
        float lineB = exp(-pow((ndv - 0.34) / 0.1, 2.0)) * smoothstep(0.1, 0.8, -side);
        float thin = 1.0 - smoothstep(-${(Xn-.2).toFixed(2)}, -${(Xn-2.4).toFixed(2)}, vOilY);
        float e = (body + lineB * 0.95) * mix(0.82, 1.45, thin) * smoothstep(0.0, 0.2, ndv);
        totalEmissiveRadiance *= e; }`)};let x=new si({color:ce("#ffd890"),roughness:0,transmission:.9,ior:1.47,thickness:.6,attenuationColor:ce("#e09a2e"),attenuationDistance:.6,emissive:ce("#f2b04a"),emissiveIntensity:1,envMapIntensity:2.6,specularIntensity:1,clearcoat:1,clearcoatRoughness:0});x.onBeforeCompile=nt=>{nt.fragmentShader=nt.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      { vec3 nn = normalize(vNormal); float ndv = clamp(dot(nn, normalize(vViewPosition)), 0.0, 1.0);
        vec2 c = nn.xy - vec2(0.26, -0.38);
        float core = exp(-dot(c, c) / 0.12);
        float e = (0.2 + 0.25 * ndv + 1.5 * core) * smoothstep(0.04, 0.5, ndv);
        totalEmissiveRadiance *= e; }`)};let C=new Pe({uniforms:{uSigma:{value:new N(.45,1.6,4.2)},uFeather:{value:.3}},vertexShader:av,fragmentShader:ov,transparent:!0,depthWrite:!1,blending:Ar,blendEquation:Jn,blendSrc:Ra,blendDst:Ca}),E=new si({color:0,roughness:.03,metalness:0,ior:1.47,specularIntensity:1,envMapIntensity:2,emissive:ce("#c27b22"),emissiveIntensity:1,transparent:!0,depthWrite:!1,blending:Di}),R=new si({color:ce("#151817"),roughness:.38,metalness:0,clearcoat:.25,clearcoatRoughness:.4,envMapIntensity:1}),I=new si({color:ce("#1a1c1b"),roughness:.58,sheen:.6,sheenRoughness:.5,sheenColor:ce("#5a6662"),envMapIntensity:.9}),A=new ti;A.position.set(_n,0,Tr),A.rotation.y=-.26,l.add(A),A.updateMatrixWorld(!0);let S=[[0,.16],[.55,.13],[1.05,.06],[1.42,0],[1.545,.035],[1.592,.13],[1.6,.3],[1.6,5.35],[1.592,5.55],[1.55,5.74],[1.46,5.92],[1.3,6.08],[1.1,6.2],[.93,6.28],[.83,6.36],[.8,6.46],[.8,6.52],[.85,6.56],[.85,6.62],[.8,6.66],[.8,6.72],[.85,6.76],[.85,6.82],[.8,6.86],[.81,6.93],[.79,6.99],[.72,7.02],[.64,7],[.61,6.94],[.6,6.7],[.6,6.1]],P=new ae(Zs(S,128),m);A.add(P);let G=new si({color:ce("#6c998c"),roughness:.78,metalness:0,sheen:.1,sheenRoughness:.8,sheenColor:ce("#ffffff"),envMapIntensity:.42}),z=new Mr(1.614,1.614,4.75,160,1,!0,-rs*.97/2,rs*.97),Y=new ae(z,G);Y.position.y=.48+4.75/2,Y.rotation.y=0,A.add(Y);for(let nt of[.48,.48+4.75]){let Dt=new ae(new wa(1.613,.006,6,160),new Sr({color:ce("#9dbab0"),roughness:.8}));Dt.rotation.x=Math.PI/2,Dt.position.y=nt,A.add(Dt)}su(e).then(nt=>{let Dt=new ks(nt);Dt.colorSpace=pn,Dt.anisotropy=a.capabilities.getMaxAnisotropy(),Dt.wrapS=fr;let Zt=new ks(ru(nt));Zt.colorSpace=zn,G.map=Dt,G.roughnessMap=Zt,G.roughness=1,G.color.set(16777215),G.needsUpdate=!0,Tt=!0,n&&Te&&xe()}).catch(nt=>console.warn("[hero] label",nt));let X=new ti,k=new ti;k.position.copy(_r),k.rotation.z=-Ba,k.add(X),l.add(k);let V=new ae(Zs([[.86,0],[1.16,0],[1.205,.035],[1.215,.12],[1.215,.74],[1.2,.79],[1.15,.815],[1.03,.83]],128),R);X.add(V);let H=new ae($0(1.04,1.18,44,.05),R);H.position.y=.83+.59,X.add(H);let st=new ae(Zs([[1,2],[1.01,2.02],[.95,2.06],[.66,2.07]],96),R);X.add(st);let ut=new ae(new Aa(.3,.86,64),R);ut.rotation.x=Math.PI/2,ut.position.y=.002,X.add(ut);let Pt=new ae(Zs([[0,2],[.66,2],[.69,2.06],[.68,2.14],[.6,2.2],[.585,2.32],[.56,2.9],[.5,3.45],[.465,3.72],[.455,3.85],[.43,3.96],[.37,4.04],[.27,4.1],[.14,4.13],[0,4.14]],96,80),I);X.add(Pt);let At=Xn,de=[[0,-At],[.05,-At],[.066,-At+.02],[.078,-At+.1],[.1,-At+.32],[.15,-At+.62],[.22,-At+.95],[.275,-At+1.22],[.298,-At+1.45],[.302,-At+1.7],[.302,.05],[0,.05]],K=Zs(de,72,60),rt=new ae(K,new Pe({transparent:!0,depthWrite:!1,blending:Ar,blendEquation:Jn,blendSrc:Ra,blendDst:Ca,vertexShader:"varying vec3 vN; varying vec3 vV; void main(){ vec4 wp = modelMatrix * vec4(position, 1.0); vN = normalize(mat3(modelMatrix) * normal); vV = normalize(cameraPosition - wp.xyz); gl_Position = projectionMatrix * viewMatrix * wp; }",fragmentShader:`precision highp float; varying vec3 vN; varying vec3 vV; void main(){ float ndv = clamp(abs(dot(normalize(vN), normalize(vV))), 0.0, 1.0);
      vec3 c = mix(vec3(0.9, 0.93, 0.91), vec3(0.5, 0.56, 0.54), pow(1.0 - ndv, 2.2)); gl_FragColor = vec4(c, 1.0); }`}));rt.renderOrder=4,X.add(rt);let Rt=new ae(K,b);Rt.renderOrder=5,X.add(Rt);let dt=-2.5,zt=new ae(Zs([[0,-At+.012],[.034,-At+.014],[.042,-At+.1],[.06,-At+.32],[.105,-At+.62],[.168,-At+.95],[.212,-At+1.22],[.228,-At+1.45],[.23,-At+1.7],[.23,dt],[.222,dt-.03],[.19,dt-.06],[.12,dt-.078],[0,dt-.082]],48,60),w);X.add(zt),X.traverse(nt=>{nt.isMesh&&nt!==Rt&&nt!==rt&&(nt.renderOrder=2)});let Vt=new N(0,-Xn+.004,0),qt=Oa([[0,1],[.35,.72],[.7,.22],[1,0]]),se=Oa([[0,1],[.5,.45],[1,0]]),Qt=(nt,Dt,Zt,pe,He,Ge,qn,Ln=0,cn=!1)=>{let nn=new ae(new Si(1,1),new Hn({color:ce(Dt),alphaMap:nt,transparent:!0,opacity:Zt,depthWrite:!1,blending:cn?Di:Pi,toneMapped:!1}));return cn&&(nn.material.map=nt,nn.material.alphaMap=null),nn.rotation.x=-Math.PI/2,nn.rotation.z=Ln,nn.scale.set(pe,He,1),nn.position.set(Ge,.004,qn),nn.renderOrder=-50,l.add(nn),nn},ge="#0f1d1a";Qt(se,"#ddbfa3",.06,14,7,_n-2.2,.6,0,!0),Qt(qt,ge,.72,3.9,3.9,_n+.05,Tr+.02),Qt(se,ge,.42,7.4,2.6,_n+2.6,Tr-.9,-.42);let F=Qt(Oa([[0,1],[.25,.55],[.6,.12],[1,0]]),"#d9902f",.3,2.2,1,_n+1.75,Tr-.6,-.42,!0),Ne=Qt(se,ge,.18,4.6,1.5,-2.5,.2,-.62);k.updateMatrixWorld(!0);let Xt=X.localToWorld(Vt.clone()),jt=.016,Ut=1.1,oe={uAge:{value:99},uImpact:{value:new St(0,0)},uAmp:{value:.012}},Ft=`
        uniform float uAge; uniform vec2 uImpact; uniform float uAmp;
        float wave(float r){
          float h = 0.0;
          for (int i = 0; i < 2; i++){
            float age = uAge - float(i) * 0.5;
            if (age <= 0.0) continue;
            float front = 0.5 * age + 0.03;
            float d = r - front;
            h += uAmp * exp(-1.4 * age) * exp(-d * d / 0.03) * cos(d * 15.0) * (1.0 - float(i) * 0.35);
          }
          return h;
        }`;E.onBeforeCompile=nt=>{Object.assign(nt.uniforms,oe),nt.vertexShader=nt.vertexShader.replace("#include <common>",`#include <common>
        attribute float aT;
        varying float vPoolT; varying vec2 vPoolXZ; varying float vRipple;
        ${Ft}`).replace("#include <beginnormal_vertex>",`
        vec3 objectNormal = vec3(normal);
        {
          vec2 xz = position.xz - uImpact; float r = max(length(xz), 1e-4);
          float e = 0.01; float dw = (wave(r + e) - wave(max(r - e, 0.0))) / (2.0 * e);
          objectNormal = normalize(objectNormal + vec3(-dw * xz.x / r, 0.0, -dw * xz.y / r) * 1.4);
          vRipple = abs(dw);
        }
        #ifdef USE_TANGENT
          vec3 objectTangent = vec3( tangent.xyz );
        #endif`).replace("#include <begin_vertex>",`
        vec3 transformed = vec3(position);
        vPoolT = aT; vPoolXZ = position.xz;
        { vec2 xz = position.xz - uImpact; float r = length(xz); transformed.y += wave(r) * (1.0 - smoothstep(0.6, 0.95, aT)); }`),nt.fragmentShader=nt.fragmentShader.replace("#include <common>",`#include <common>
        varying float vPoolT; varying vec2 vPoolXZ; varying float vRipple;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        {
          float thick = 1.0 - smoothstep(0.3, 1.0, vPoolT);
          // key light scattered back up through the film from the floor: warm, strongest where the oil is thick
          float back = smoothstep(0.5, -0.7, vPoolXZ.y / ${Ut.toFixed(2)});   // light enters from the key side, glows toward the back
          totalEmissiveRadiance *= (0.05 + 0.2 * thick * (0.55 + 0.45 * back)) + 0.22 * min(vRipple * 5.0, 1.0) * thick;
          // one crisp glint streak of the key softbox across the far half (follows the ripple via the normal)
          vec3 nn = normalize(vNormal);
          vec2 hq = (vPoolXZ - vec2(-0.1, -0.36)) / vec2(0.54, 0.05);
          float gl = exp(-pow(dot(hq, hq), 1.5)) * (1.0 + 0.8 * min(vRipple * 4.0, 1.0));   // flat core, crisp falloff
          totalEmissiveRadiance += vec3(1.0, 0.93, 0.8) * 0.8 * gl * thick;
          // meniscus: the thin rim catches a hairline of warm light on the far side only
          float far = smoothstep(0.1, -0.6, vPoolXZ.y / ${Ut.toFixed(2)});
          totalEmissiveRadiance += vec3(1.0, 0.8, 0.5) * 0.07 * smoothstep(0.72, 0.86, vPoolT) * (1.0 - smoothstep(0.86, 0.97, vPoolT)) * far;
        }`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
        gl_FragColor.rgb *= 1.0 - smoothstep(0.7, 1.0, vPoolT);`)},C.onBeforeCompile=nt=>{Object.assign(nt.uniforms,oe)};let _=tv(Ut,jt),M=new ae(_,C);M.renderOrder=1;let B=new ae(_,E);B.renderOrder=2,B.position.set(Xt.x+.1,.003,Xt.z-.05),M.position.copy(B.position),l.add(M,B),Qt(qt,ge,.1,Ut*2.3,Ut*1.9,B.position.x,B.position.z+.05);let J=Qt(Oa([[0,1],[.3,.5],[.65,.12],[1,0]]),"#e9a443",.12,1.9,.9,B.position.x+.6,B.position.z-.55,-.42,!0);oe.uImpact.value.set(Xt.x-B.position.x,Xt.z-B.position.z);let et=40,Z=34,Et=new yr(Array.from({length:Z},(nt,Dt)=>new St(.01,-Dt*.01)),et),ft=new ae(Et,x);ft.renderOrder=3,ft.frustumCulled=!1,l.add(ft);let mt=Array.from({length:Z},()=>[0,0]),ie=(nt,Dt,Zt)=>{let pe=ri(.5+.5*(Dt-nt)/Zt,0,1);return nt*(1-pe)+Dt*pe+Zt*pe*(1-pe)};function it(nt,Dt,Zt,pe,He){let Ge=-(pe+Dt*.92),qn=Dt*.95,Ln=Dt*Zt,cn=18;for(let Ae=0;Ae<cn;Ae++){let Yn=Ae/cn,Rn=Ge*Math.pow(Yn,.85),Bi=Math.abs(Rn-Ge)<qn?Dt*Math.sqrt(1-Math.pow((Rn-Ge)/qn,2)):0,Qn=(nt+(nt*.55-nt)*vn(0,1,-Rn/Math.max(-Ge,.001)))*(1-He*vn(.2,.9,-Rn/Math.max(-Ge,.001)));mt[Ae][0]=Math.max(5e-4,ie(Qn,Bi,.035*(1-He*.8)+.004)),mt[Ae][1]=Rn}for(let Ae=cn;Ae<Z;Ae++){let Yn=(Ae-cn)/(Z-1-cn)*Math.PI/2;mt[Ae][0]=Dt*Math.cos(Yn),mt[Ae][1]=Ge-Ln*Math.sin(Yn)}mt[Z-1][0]=0;let nn=Et.attributes.position.array,Je=Et.attributes.normal.array;for(let Ae=0;Ae<Z;Ae++){let Yn=mt[Math.max(0,Ae-1)],Rn=mt[Math.min(Z-1,Ae+1)],Bi=Rn[0]-Yn[0],Qn=Rn[1]-Yn[1],Js=Math.hypot(Bi,Qn)||1;Bi/=Js,Qn/=Js;let Oi=-Qn,os=Bi;Ae===Z-1&&(Oi=0,os=-1);for(let _e=0;_e<=et;_e++){let we=_e/et*rs,bt=Math.sin(we),Ce=Math.cos(we),De=(_e*Z+(Z-1-Ae))*3;nn[De]=mt[Ae][0]*bt,nn[De+1]=mt[Ae][1],nn[De+2]=mt[Ae][0]*Ce,Je[De]=Oi*bt,Je[De+1]=os,Je[De+2]=Oi*Ce}}return Et.attributes.position.needsUpdate=!0,Et.attributes.normal.needsUpdate=!0,Ge-Ln}let xt=new ae(new br(1,48,32),x);xt.renderOrder=3,l.add(xt);let kt=!1,Bt=()=>kt,pt=10,Jt=[ce("#9ab4ac"),ce("#f9b5c4"),ce("#ddbfa3"),ce("#b6c9c2"),ce("#e8d6c3"),ce("#c49b9f")],Ht=new br(1,40,28),fe=new Float32Array(pt*3),D=new Float32Array(pt),gt=new Float32Array(pt),Q=new Float32Array(pt*3);Ht.setAttribute("iColor",new Ai(fe,3)),Ht.setAttribute("iSoft",new Ai(D,1)),Ht.setAttribute("iAlpha",new Ai(gt,1)),Ht.setAttribute("iHi",new Ai(Q,3));let j=new Pe({uniforms:{uKey:{value:ce("#fff6ea").multiplyScalar(1.6)},uRim:{value:ce("#f6f4ee")},uFade:{value:1}},vertexShader:sv,fragmentShader:rv,transparent:!0,depthWrite:!1,blending:Ar,blendSrc:Vl,blendDst:dr}),vt=new ba(Ht,j,pt);vt.frustumCulled=!1,vt.renderOrder=10,l.add(vt);let yt=4,Ot=()=>(yt=yt*16807%2147483647)/2147483647,Wt=[],Re=[[3.9,8.9,-2.5,.3,0,.12],[-3.1,10.2,-1.5,.22,1,.08],[4.6,2.6,1.2,.17,2,.04],[-6,7.4,-4.5,.34,3,.42],[2.6,11.6,-5,.4,2,.5],[-1.9,3.3,1.6,.12,1,.02],[5.9,5.6,-1.5,.26,5,.12],[-4.4,11.6,.8,.18,4,.06],[6.6,10.4,-.5,.32,1,.45],[-2.6,7,-4.8,.28,0,.3]],re=nt=>{Q[nt*3]=(Ot()-.5)*.26,Q[nt*3+1]=(Ot()-.5)*.2,Q[nt*3+2]=Ot()};for(let nt=0;nt<pt;nt++){let[Dt,Zt,pe,He,Ge,qn]=Re[nt];Wt.push({p:new N(Dt,Zt,pe),v:new N,r:He,tint:Ge,soft:qn,phase:Ot()*100,born:-10,a:0}),Jt[Ge].toArray(fe,nt*3),D[nt]=qn,gt[nt]=0,re(nt)}let Me={x0:-7,x1:7.5,y0:-1,y1:13.2,z0:-6,z1:2.5};function xn(nt,Dt){let Zt=Wt.indexOf(nt);nt.p.set(Me.x0+Ot()*(Me.x1-Me.x0),-.4+Ot()*3.2,Me.z0+Ot()*(Me.z1-Me.z0)),nt.v.set(0,0,0),nt.born=Dt,nt.a=0,nt.r=.12+Math.pow(Ot(),1.8)*.3,nt.soft=ri((nt.p.z>1.6?.5:0)+(nt.p.z<-4?.35:0)+Ot()*.15,0,.85),nt.tint=Math.floor(Ot()*Jt.length),Jt[nt.tint].toArray(fe,Zt*3),D[Zt]=nt.soft,re(Zt),Ht.attributes.iColor.needsUpdate=!0,Ht.attributes.iSoft.needsUpdate=!0,Ht.attributes.iHi.needsUpdate=!0}let Ze={discR:0,tagW:0,tagH:0,copyTop:1e9},ln=[0,0],T=[0,0],q={ndc:new St(.3,0),target:new St(.3,0),active:!1,vel:new St},tt=new _a,lt=new N,$=new N,Lt=new N,Yt={az:0,el:0},Gt={cx:-.75,cy:5.2,h:11},Nt=-2,Ee=.01,ve=1,ot=1,y={fx:.66,fy:.5,hs:.8,D:30},L=new N;function O(){ve=Math.max(1,t.clientWidth),ot=Math.max(1,t.clientHeight);let nt=ve<761;if(kt=nt,a.setPixelRatio(o),a.setSize(ve,ot,!1),ht.setPixelRatio(o),ht.setSize(ve,ot),c.aspect=ve/ot,nt){let Zt=Math.min(300,ve*.78,ot*.42);y={fx:.5,fy:(38+Zt/2)/ot,hs:Zt,D:0}}else{let Zt=ve/ot,pe=Math.min(ot*.8,ve*.44*(11/7.6));y={fx:Zt>1.9?.62:.6,fy:.5,hs:pe,D:0}}Nt=nt?-2:Math.min(ve*.5,780)/ve*2-1,Ee=2*(y.hs/Gt.h)/ve;let Dt=Math.tan(wr.degToRad(c.fov/2));y.D=ot*Gt.h/(y.hs*2*Dt),d.uRes.value.set(ve*o,ot*o),d.uDpr.value=o,wt.uniforms.uRes.value.set(ve*o,ot*o),wt.uniforms.uVigCenter.value.set(nt?.5:.6,nt?.62:.5),wt.uniforms.uVig.value=nt?.26:.34,Tt=!0}function W(nt){let Dt=Yt.az,Zt=wr.degToRad(11)+Yt.el,pe=y.D*(1+.045*nt);L.set(Gt.cx,Gt.cy,0),c.position.set(L.x+Math.sin(Dt)*Math.cos(Zt)*pe,L.y+Math.sin(Zt)*pe,Math.cos(Dt)*Math.cos(Zt)*pe),c.lookAt(L),c.near=pe*.5,c.far=pe*2.2,c.updateProjectionMatrix(),c.projectionMatrix.elements[8]=-(2*y.fx-1),c.projectionMatrix.elements[9]=-(1-2*y.fy),c.projectionMatrixInverse.copy(c.projectionMatrix).invert(),c.updateMatrixWorld()}let U=nt=>(Lt.copy(nt).project(c),[(Lt.x*.5+.5)*ve,(-Lt.y*.5+.5)*ot]),at=new Qe(2,2,{type:Tn,samples:4}),ht=new Na(a,at);ht.addPass(new Fa(l,c));let Ct=new Qs(new St(256,256),.42,.62,.86);ht.addPass(Ct);let wt=new Ys(lv);ht.addPass(wt);let It={period:5.6,grow:2.9,hang:.35,fallG:5.2,drag:1.6},ct={t:0,phase:.6,dropY:0,dropV:0,falling:!1,landed:!1,impactT:-99,cyc:0,intro:1},Tt=!0,$t=!1,he=0,ue=0,Te=!1,ee=new N,_t=new N(Math.sin(.95)*1.62,2.7,Math.cos(.95)*1.62),Le={bubble:new N(_n+2.35,8.05,.2),tag:new N,glow:new N(_n-.6,4.6,-1.5),pool:new N(_n-1.6,0,.4),tA:new N(_n+9.5,12.8,-4),tB:new N(_n-2.6,-1.55,-4)};function le(nt,Dt){ct.intro=n?0:Math.max(0,ct.intro-nt/2.6);let Zt=Math.pow(ct.intro,3),pe=1-Math.exp(-nt/.9),He=q.active?q.target.x:.15*Math.sin(Dt*.13),Ge=q.active?q.target.y:.1*Math.sin(Dt*.11+1);q.vel.set((He-q.ndc.x)/Math.max(nt,.001),(Ge-q.ndc.y)/Math.max(nt,.001)).multiplyScalar(pe),q.ndc.x+=(He-q.ndc.x)*pe,q.ndc.y+=(Ge-q.ndc.y)*pe,n||(Yt.az=-q.ndc.x*wr.degToRad(2.4),Yt.el=q.ndc.y*wr.degToRad(1.3)),W(Zt);let qn=n?0:Math.sin(Dt*rs/7.5)*.07+Math.sin(Dt*rs/11.3)*.03;k.position.set(_r.x,_r.y+qn,_r.z),k.rotation.z=-Ba+(n?0:Math.sin(Dt*rs/9.1)*.012),k.updateMatrixWorld(!0);let Ln=X.localToWorld(lt.copy(Vt));Ne.position.x=Ln.x+1.6+qn*.4,h.uAxis.value.set(-Math.sin(k.rotation.z),Math.cos(k.rotation.z),0),A.localToWorld(Le.tag.copy(_t));{let _e=U(Le.bubble),we=Ze.discR+14;ln[0]=ri(_e[0],we,ve-we),ln[1]=_e[1];let bt=U(Le.tag);T[0]=bt[0],T[1]=bt[1]}let cn=n?2.3:(Dt+ct.phase)%It.period,nn=Math.floor((Dt+ct.phase)/It.period),Je=.19,Ae=.046;if(ft.position.copy(Ln),cn<It.grow+It.hang){ct.falling=!1,ct.landed=!1,ct.dropV=0;let _e=j0(ri(cn/It.grow,0,1)),we=cn>It.grow?vn(It.grow,It.grow+It.hang,cn):0,bt=Ae+(Je-Ae)*_e,Ce=1.02+.3*_e+.1*we,De=.008+.05*_e+.12*we;it(Ae,bt,Ce,De,vn(.35,1,we)),ft.visible=!0,xt.visible=!1,ct.dropY=Ln.y-(De+bt*.92)}else{let _e=cn-(It.grow+It.hang);if(it(Ae,Ae+.034*Math.exp(-_e*5),1.04,.004,0),ft.visible=!0,!ct.falling&&!ct.landed&&(ct.falling=!0,ct.cyc=nn,ct.x0=Ln.x,ct.z0=Ln.z,ct.y0=Ln.y-(.008+.05+.12+Je*.92)),ct.falling){let we=It.fallG/It.drag,bt=Math.exp(-It.drag*_e);ct.dropV=we*(1-bt),ct.dropY=ct.y0-we*(_e-(1-bt)/It.drag);let Ce=1+ri(ct.dropV/3.2,0,1)*.16,De=1+.42*Math.exp(-_e*7);xt.scale.set(Je/Math.sqrt(Ce*De),Je*Ce*De,Je/Math.sqrt(Ce*De)),xt.position.set(ct.x0,ct.dropY,ct.z0),xt.visible=!0;let ai=jt+.01;if(ct.dropY-Je*Ce<ai+.02){let Dn=ri((ai+.02-(ct.dropY-Je*Ce))/(Je*2.2),0,1);xt.scale.set(Je*(1+.5*Dn),Je*Ce*(1-Dn*.92),Je*(1+.5*Dn)),xt.position.y=Math.max(ct.dropY,ai+Je*Ce*(1-Dn)*.5),(ct.impactT<0||ct.impactCyc!==ct.cyc)&&(ct.impactT=Dt,ct.impactCyc=ct.cyc,oe.uImpact.value.set(ct.x0-B.position.x,ct.z0-B.position.z)),Dn>=1&&(ct.falling=!1,ct.landed=!0,xt.visible=!1)}}else xt.visible=!1}oe.uAge.value=n?99:Dt-ct.impactT;{tt.setFromCamera(q.ndc,c);let _e=Bt();for(let we=0;we<pt;we++){let bt=Wt[we],Ce=1.25,De=.16+.22*bt.r,ai=Math.sin(Dt*.21+bt.phase)*.06+Math.sin(Dt*.47+bt.phase*1.7)*.03,Dn=Math.cos(Dt*.17+bt.phase*.7)*.03,js=ai,ki=Ce*De,$s=Dn;if(q.active&&!_e&&!n){tt.ray.closestPointToPoint(bt.p,$);let li=bt.p.x-$.x,yn=bt.p.y-$.y,sn=bt.p.z-$.z,qe=Math.hypot(li,yn,sn),Mn=1.9+bt.r;if(qe<Mn){let wi=Math.pow(1-qe/Mn,2)*3.4/Math.max(qe,.05);js+=li*wi,ki+=yn*wi,$s+=sn*wi*.3,js+=q.vel.x*2.6*(1-qe/Mn),ki+=q.vel.y*2*(1-qe/Mn)}}n||(bt.v.x+=(js-Ce*bt.v.x)*nt,bt.v.y+=(ki-Ce*bt.v.y)*nt,bt.v.z+=($s-Ce*bt.v.z)*nt,bt.p.addScaledVector(bt.v,nt));let oi=(li,yn,sn,qe,Mn,wi,tr)=>{let Ye=qe-li,bn=Mn-yn,hn=wi-sn,un=ri(((bt.p.x-li)*Ye+(bt.p.y-yn)*bn+(bt.p.z-sn)*hn)/(Ye*Ye+bn*bn+hn*hn),0,1),Ir=li+Ye*un,Pr=yn+bn*un,cs=sn+hn*un,ci=bt.p.x-Ir,Nn=bt.p.y-Pr,Zn=bt.p.z-cs,zi=Math.hypot(ci,Nn,Zn)||1e-4,Vi=tr+bt.r;if(zi<Vi){ci/=zi,Nn/=zi,Zn/=zi,bt.p.set(Ir+ci*Vi,Pr+Nn*Vi,cs+Zn*Vi);let Lr=bt.v.x*ci+bt.v.y*Nn+bt.v.z*Zn;Lr<0&&(bt.v.x-=Lr*ci,bt.v.y-=Lr*Nn,bt.v.z-=Lr*Zn)}},mc=bt.p.z>-1.5,Un=1;{Lt.copy(bt.p).applyMatrix4(c.matrixWorldInverse);let li=c.projectionMatrix.elements[5]*ot*.5/Math.max(-Lt.z,.1);Lt.copy(bt.p).project(c);let yn=(Lt.x*.5+.5)*ve,sn=(-Lt.y*.5+.5)*ot,qe=bt.r*li,Mn=26,wi=Math.min(1,nt*3)/li,tr=(Ye,bn,hn)=>{bt.p.x+=Ye*hn*wi,bt.p.y-=bn*hn*wi;let un=bt.v.x*Ye-bt.v.y*bn;un<0&&(bt.v.x-=un*Ye,bt.v.y+=un*bn)};if(Ze.discR>0){let Ye=yn-ln[0],bn=sn-ln[1],hn=Math.hypot(Ye,bn)||.001,un=hn-qe-Ze.discR;un<Mn&&tr(Ye/hn,bn/hn,Mn-un),Un=Math.min(Un,vn(2,Mn,un))}if(Ze.tagW>0){let Ye=T[0]-8,bn=T[0]+Ze.tagW,hn=T[1]-Ze.tagH/2,un=T[1]+Ze.tagH/2,Ir=ri(yn,Ye,bn),Pr=ri(sn,hn,un),cs=yn-Ir,ci=sn-Pr,Nn=Math.hypot(cs,ci),Zn=Nn-qe;if(Nn<.001){let zi=sn-hn,Vi=un-sn;cs=0,ci=zi<Vi?-1:1,Nn=1,Zn=-Math.min(zi,Vi)-qe}Zn<Mn&&tr(cs/Nn,ci/Nn,Mn-Zn),Un=Math.min(Un,vn(2,Mn,Zn))}if(_e)Un=Math.min(Un,vn(6,40,Ze.copyTop-(sn+qe)));else{let Ye=yn-qe-(Nt*.5+.5)*ve;Ye<0&&tr(1,0,-Ye),Un=Math.min(Un,vn(0,48,Ye))}Un=Math.min(Un,vn(0,80,sn-qe),vn(0,36,ve-yn-qe),vn(0,36,yn-qe)),sn+qe<0&&(bt.p.y=Me.y1+1)}let gc=mc?bt.p.z:Tr;oi(_n,-.5,gc,_n,7.3,gc,1.85);let Cn=_r,Cr=Math.sin(Ba),Wa=Math.cos(Ba),ls=mc?bt.p.z:Cn.z;oi(Cn.x,Cn.y,ls,Cn.x+4.1*Cr,Cn.y+4.1*Wa,ls,1.35),oi(Cn.x,Cn.y,ls,Cn.x-Xn*Cr,Cn.y-Xn*Wa,ls,.5),oi(Cn.x-Xn*Cr,-.5,ls,Cn.x-Xn*Cr,Cn.y-Xn*Wa,ls,.6);let Xa=vn(0,2.4,Dt-bt.born)*(1-vn(Me.y1-2.4,Me.y1,bt.p.y))*Un;bt.a=n||Xa<bt.a?Xa:bt.a+(Xa-bt.a)*Math.min(1,nt*3),gt[we]=bt.a,(bt.p.y>Me.y1||bt.p.x<Me.x0-2||bt.p.x>Me.x1+2)&&xn(bt,Dt)}for(let we=0;we<pt;we++)for(let bt=we+1;bt<pt;bt++){let Ce=Wt[we],De=Wt[bt],ai=De.p.x-Ce.p.x,Dn=De.p.y-Ce.p.y,js=(De.p.z-Ce.p.z)*.35,ki=Math.hypot(ai,Dn,js)||1e-4,$s=(Ce.r+De.r)*1.6+.25;if(ki<$s){let oi=($s-ki)/ki*Math.min(1,nt*2);Ce.p.x-=ai*oi*.5,Ce.p.y-=Dn*oi*.5,De.p.x+=ai*oi*.5,De.p.y+=Dn*oi*.5}}Ht.attributes.iAlpha.needsUpdate=!0}let Yn=new Se;for(let _e=0;_e<pt;_e++){let we=Wt[_e];Yn.makeScale(we.r,we.r,we.r).setPosition(we.p),vt.setMatrixAt(_e,Yn)}vt.instanceMatrix.needsUpdate=!0;let Rn=U(Le.glow);d.uGlow.value.set(Rn[0]*o,(ot-Rn[1])*o);let Bi=U($.set(Le.glow.x,Le.glow.y+1,Le.glow.z)),Qn=Math.abs(Bi[1]-Rn[1]);d.uGlowR.value=Qn*6.2*o;let Js=U(Le.pool);d.uPool.value.set(Js[0]*o,(ot-Js[1])*o),d.uPoolR.value.set(Qn*7.5*o,Qn*1.9*o);let Oi=U(Le.tA),os=U(Le.tB);if(Bt()){let _e=U($.set(_n,0,0));Oi=[-24,ot*.05],os=[ve+24,Math.max(_e[1]-34,ln[1]+Ze.discR+90)]}d.uTA.value.set(Oi[0]*o,(ot-Oi[1])*o),d.uTB.value.set(os[0]*o,(ot-os[1])*o),wt.uniforms.uTime.value=Dt,F.material.opacity=.26+.04*Math.sin(Dt*.7),s&&s({bubble:ln,tag:T,ppu:Qn,W:ve,H:ot})}let Xe=0,Ke=0,Fe=0;function Pn(nt){he=$t?requestAnimationFrame(Pn):0;let Dt=nt/1e3,Zt=ue?Math.min(.05,Dt-ue):1/60;if(ue=Dt,le(Zt,Dt),ht.render(Zt),Te||(Te=!0,r&&r()),Fe++,Fe>120&&(Xe+=Zt,Ke++,Ke===90)){let pe=Xe/Ke;Xe=0,Ke=0,pe>.026&&o>1&&(o=Math.max(1,o-.25),O())}}function xe(){let nt=performance.now()/1e3;le(1/60,nt),ht.render(1/60),Te||(Te=!0,r&&r())}return O(),{start(){if(!$t){if(n){xe();return}$t=!0,ue=0,he=requestAnimationFrame(Pn)}},stop(){$t=!1,cancelAnimationFrame(he),he=0},resize(){O(),$t||xe()},pointer(nt,Dt,Zt){q.target.set(nt,Dt),q.active=Zt},setOverlays(nt){Object.assign(Ze,nt)},get dirty(){return Tt},dispose(){this.stop(),a.dispose()}}}function cv(){try{let i=document.createElement("canvas");return!!(window.WebGL2RenderingContext&&i.getContext("webgl2"))}catch{return!1}}function tc(i,t){let e=i.querySelector(".hero-canvas"),n=i.querySelector(".hero-stage"),s=i.querySelector(".hero-bubble"),r=i.querySelector(".hero-tag"),a=i.querySelector("[data-hero-add]"),o=t.byId["skin-oil"];if(o){let g=i.querySelector("[data-hero-price]");g&&(g.textContent=t.fmt.kr(o.price));let m=i.querySelector("[data-hero-was]");m&&(m.textContent=t.fmt.kr(o.price0));let h=i.querySelector(".hero-bubble__pct");h&&(h.textContent=`\u2212${t.campaign.headlinePct}%`)}let l=0;a&&a.addEventListener("click",()=>{t.store.add("skin-oil",1),a.classList.add("is-added"),a.setAttribute("aria-label","Vidunder Olien er lagt i kurven"),clearTimeout(l),l=setTimeout(()=>{a.classList.remove("is-added"),a.setAttribute("aria-label","L\xE6g Vidunder Olien i kurv")},2200)}),requestAnimationFrame(()=>i.classList.add("is-ready"));let c=()=>{i.classList.add("is-static");let g=i.querySelector(".hero-fallback");g&&g.dataset.src&&!g.src&&(g.src=g.dataset.src)};if(!cv()||/[?&]hero=static\b/.test(location.search)){c();return}let u=null,d=!1,p=i.querySelector(".hero-copy"),f=()=>{if(!u)return;let g=n.getBoundingClientRect(),m=p.getBoundingClientRect();u.setOverlays({discR:s.firstElementChild.offsetWidth/2,tagW:r.offsetWidth,tagH:r.offsetHeight,copyTop:m.top-g.top+parseFloat(getComputedStyle(p).paddingTop||0)})},v=({bubble:g,tag:m})=>{s.style.transform=`translate3d(${g[0].toFixed(1)}px, ${g[1].toFixed(1)}px, 0)`,r.style.transform=`translate3d(${m[0].toFixed(1)}px, ${m[1].toFixed(1)}px, 0) translateY(-50%)`,d||(d=!0,i.classList.add("is-tracked"))};au({canvas:e,host:n,asset:t.asset,reduced:t.prefersReducedMotion,onFrame:v,onFirstFrame:()=>requestAnimationFrame(()=>i.classList.add("is-live"))}).then(g=>{u=g,f(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(f);let m=!0,h=()=>{m&&!document.hidden?g.start():g.stop()};Ac(i,w=>{m=w,h()}),document.addEventListener("visibilitychange",h),h();let b=0;if(new ResizeObserver(()=>{cancelAnimationFrame(b),b=requestAnimationFrame(()=>{f(),g.resize()})}).observe(n),matchMedia("(pointer: fine)").matches){let w=!1;r.addEventListener("pointerenter",()=>{w=!0}),r.addEventListener("pointerleave",()=>{w=!1}),i.addEventListener("pointermove",x=>{if(w)return;let C=n.getBoundingClientRect();g.pointer((x.clientX-C.left)/C.width*2-1,-((x.clientY-C.top)/C.height*2-1),!0)},{passive:!0}),i.addEventListener("pointerleave",()=>g.pointer(0,0,!1))}e.addEventListener("webglcontextlost",w=>{w.preventDefault(),g.stop(),c()})}).catch(g=>{console.warn("[hero] WebGL scene unavailable, using still",g),c()})}function ec(i,t){let e=new URLSearchParams(location.search),n=t.prefersReducedMotion;hv(i,t,e,n),uv(i,t),dv(i,t,e,n),fv(i,n)}function hv(i,t,e,n){let s=i.querySelector(".offers-clock");if(!s)return;let r=0,a=e.get("offers-now");if(a){let x=Date.parse(a);Number.isNaN(x)||(r=x-t.clock.now())}let o=()=>t.clock.now()+r,l=t.clock.end,c=t.clock.start,u=s.querySelector("[data-clock-label]"),d=s.querySelector("[data-clock-done]"),p=s.querySelector("[data-clock-sr]"),f=["d","h","m","s"].map(x=>{let C=s.querySelector(`[data-unit="${x}"]`);return{dgs:[...C.querySelectorAll(".offers-dg")].map(R=>{let I=R.textContent.trim();R.textContent="";let A=document.createElement("span");return A.className="offers-dg__v",A.textContent=I,R.append(A),{el:R,v:I,cur:A}}),lbl:C.querySelector("[data-lbl]")}}),v="cubic-bezier(.2,.72,.22,1)";function g(x,C,E){if(x.v===C)return;if(x.v=C,!E||n||!x.el.animate||document.hidden){x.el.querySelectorAll(".offers-dg__v").forEach(S=>S!==x.cur&&S.remove()),x.cur.textContent=C;return}let R=x.cur,I=document.createElement("span");I.className="offers-dg__v",I.textContent=C,x.el.append(I),x.cur=I;let A=R.animate([{transform:"translateY(0)",opacity:1,filter:"blur(0px)"},{transform:"translateY(55%)",opacity:0,filter:"blur(1px)"}],{duration:640,easing:v,fill:"forwards"});A.onfinish=()=>R.remove(),I.animate([{transform:"translateY(-55%)",opacity:0,filter:"blur(1px)"},{transform:"translateY(0)",opacity:1,filter:"blur(0px)"}],{duration:820,easing:v})}let m="",h=-1;function b(x){let C=o(),E=C<c?"pre":C>=l?"ended":l-C<=864e5?"last":"live";if(E!==m&&(s.dataset.state=E,m=E,u.textContent=E==="pre"?"Black Week begynder om":E==="ended"?"Black Week er slut":E==="last"?"Sidste dag \u2013 slutter om":"Black Week slutter om",d&&(d.hidden=E!=="ended"),i.dataset.campaign=E),E==="ended"){p&&(p.textContent="Black Week er slut.");return}let I=Math.max(0,Math.floor(((E==="pre"?c:l)-C)/1e3)),A=[Math.floor(I/86400),Math.floor(I/3600)%24,Math.floor(I/60)%60,I%60];A.forEach((P,G)=>{let z=String(Math.min(P,99)).padStart(2,"0");f[G].dgs.forEach((Y,X)=>g(Y,z[X],x))}),f[0].lbl&&(f[0].lbl.textContent=A[0]===1?"dag":"dage"),f[1].lbl&&(f[1].lbl.textContent=A[1]===1?"time":"timer");let S=Math.floor(I/60);if(p&&S!==h){h=S;let[P,G,z]=A;p.textContent=`${E==="pre"?"Black Week begynder om":"Black Week slutter om"} ${P} ${P===1?"dag":"dage"}, ${G} ${G===1?"time":"timer"} og ${z} ${z===1?"minut":"minutter"} \u2013 mandag 30. november kl. 23.59.`}}b(!1);let w=()=>{b(!0),setTimeout(w,1e3-o()%1e3+12)};setTimeout(w,1e3-o()%1e3+12)}function uv(i,t){let e=i.querySelector("[data-add]");if(!e)return;let n=e.querySelector("[data-add-txt]"),s=t.byId[e.dataset.add];if(!s){e.disabled=!0;return}let r=0;e.addEventListener("click",()=>{t.store.add(s.id,1),e.classList.add("is-added"),n.textContent="Lagt i kurven",e.setAttribute("aria-label",`${s.name} er lagt i kurven`),clearTimeout(r),r=setTimeout(()=>{e.classList.remove("is-added"),n.textContent="L\xE6g i kurv",e.setAttribute("aria-label",`L\xE6g ${s.name} i kurv`)},2600)})}function dv(i,t,e,n){let s=i.querySelector("[data-route]");if(!s)return;let{giftThreshold:r,freeShipping:a}=t.campaign,o=t.fmt.kr,l=[1,2].map(V=>s.querySelector(`[data-seg="${V}"]`)),c=[1,2].map(V=>s.querySelector(`[data-fill="${V}"]`)),u=s.querySelector("[data-cursor]"),d=s.querySelector("[data-cartline-sum]"),p=s.querySelector("[data-cartline-next]"),f=s.querySelector("[data-route-status]"),v={ship:s.querySelector(".offers-stop--ship"),gift:s.querySelector(".offers-stop--gift")},g={ship:v.ship.querySelector(".offers-stop__disc"),gift:v.gift.querySelector(".offers-stop__disc")};c.forEach(V=>V.setAttribute("pathLength","1"));let m=l.map(V=>V.getTotalLength()),h=10,b=15,w=()=>{let V=s.clientWidth/120;V&&(h=g.ship.offsetWidth/2/V+3.2,b=g.gift.offsetWidth/2/V+3.2)};w(),new ResizeObserver(()=>{w(),z(R,A)}).observe(s);let x=V=>V<=a?V/a:1+Math.min(1,(V-a)/(r-a)),C=(V,H)=>{let st=l[V].getPointAtLength(Math.max(0,Math.min(m[V],H)));return{x:st.x/120*100,y:st.y}},E=(V,H,st)=>{let ut=Math.max(0,Math.min(1,(st-V)/(H-V)));return ut*ut*(3-2*ut)},R=0,I=0,A=0,S=0,P=0,G=0;function z(V){let H,st,ut;if(V<=1){let At=(m[0]-h)*V;H=C(0,At),st=At/m[0],ut=0}else{let At=h+(m[1]-h-b)*(V-1);H=C(1,At),st=1,ut=At/m[1]}c[0].style.strokeDashoffset=String(1-st),c[1].style.strokeDashoffset=String(1-ut),u.style.left=H.x+"%",u.style.top=H.y+"%";let Pt=Math.min(E(.005,.05,V),E(0,.05,Math.abs(V-1)),E(0,.05,2-V));u.style.opacity=String(Pt)}function Y(V){let H=Math.min(.05,(V-(G||V))/1e3);G=V;let st=1-Math.exp(-H*2.4);R+=(I-R)*st,A+=(S-A)*st,Math.abs(I-R)<5e-4&&(R=I,A=S),z(R),R!==I?P=requestAnimationFrame(Y):(P=0,G=0)}function X(){let V=t.store.subtotal(),H=V>=r?2:V>=a?1:0;s.classList.toggle("has-cart",V>0),s.dataset.level=H,v.ship.classList.toggle("is-reached",H>=1),v.gift.classList.toggle("is-reached",H>=2),V>0&&(d.textContent=`Din kurv \xB7 ${o(V)}`,p.textContent=H===2?"Fri fragt og gaven er med":H===1?`${o(r-V)} til gaven`:`${o(a-V)} til fri fragt`),I=x(V),S=V,n?(R=I,A=V,z(R)):P||(P=requestAnimationFrame(Y)),f&&(f.textContent=V===0?"":H===2?`Din kurv er p\xE5 ${o(V)}. Fri fragt og en gratis CBD Lip Balm f\xF8lger med.`:H===1?`Din kurv er p\xE5 ${o(V)}. Fri fragt er n\xE5et \u2013 ${o(r-V)} mere, s\xE5 f\xF8lger gaven med.`:`Din kurv er p\xE5 ${o(V)}. ${o(a-V)} mere til fri fragt.`)}t.store.on(V=>{(V==="cart:add"||V==="cart:change")&&X()}),z(0),X();let k=e.get("offers-cart");k&&setTimeout(()=>k.split(",").forEach(V=>t.byId[V]&&t.store.add(V,1)),+(e.get("offers-cart-delay")||600))}function fv(i,t){let e=i.querySelector("[data-rail]"),n=[...i.querySelectorAll(".offers-tile")],s=[...i.querySelectorAll("[data-dot]")];if(!e||!s.length)return;let r=o=>s.forEach((l,c)=>l.setAttribute("aria-current",c===o?"true":"false")),a=new IntersectionObserver(o=>{let l=null;o.forEach(c=>{c.isIntersecting&&(!l||c.intersectionRatio>l.intersectionRatio)&&(l=c)}),l&&l.intersectionRatio>.6&&r(n.indexOf(l.target))},{root:e,threshold:[.6,.8,1]});n.forEach(o=>a.observe(o)),s.forEach((o,l)=>o.addEventListener("click",()=>{let c=parseFloat(getComputedStyle(e).scrollPaddingInlineStart)||0;e.scrollTo({left:n[l].offsetLeft-c,behavior:t?"auto":"smooth"}),r(l)}))}var pv='<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><symbol id="nc-cbd" viewBox="0 0 5586 2734"><rect x="87" y="87" width="5412" height="2560" rx="1280" fill="none" stroke="currentColor" stroke-width="174"/><path fill="currentColor" d="M906 1412Q906 1756 1084 1940Q1262 2124 1547 2124Q1819 2124 1971 1980Q2123 1837 2135 1619L2136 1596H1850L1849 1619Q1841 1745 1767 1824Q1694 1903 1548 1903Q1386 1903 1291 1785Q1197 1666 1197 1439V1295Q1197 1049 1293 940Q1390 831 1545 831Q1699 831 1774 906Q1850 981 1850 1113V1138H2136V1117Q2136 896 1977 753Q1819 609 1547 609Q1263 609 1084 792Q906 975 906 1321Z M2289 2095H2848Q3081 2095 3224 1985Q3367 1875 3367 1675Q3367 1534 3300 1447Q3234 1361 3132 1331V1327Q3215 1297 3271 1221Q3328 1144 3328 1024Q3328 826 3192 732Q3057 639 2819 639H2289ZM2569 1890V1437H2843Q2968 1437 3026 1497Q3085 1558 3085 1662Q3085 1767 3026 1828Q2968 1890 2843 1890ZM2569 1241V845H2814Q2938 845 2993 896Q3047 947 3047 1042Q3047 1136 2993 1189Q2938 1241 2814 1241Z M3520 2095H3997Q4288 2095 4484 1914Q4680 1733 4680 1412V1321Q4680 1000 4484 820Q4288 639 3997 639H3520ZM3802 1880V854H3993Q4172 854 4281 972Q4391 1090 4391 1316V1417Q4391 1644 4281 1762Q4172 1880 3993 1880Z"/></symbol><symbol id="nc-cbg" viewBox="0 0 5586 2734"><rect x="87" y="87" width="5412" height="2560" rx="1280" fill="none" stroke="currentColor" stroke-width="174"/><path fill="currentColor" d="M906 1412Q906 1756 1084 1940Q1262 2124 1547 2124Q1819 2124 1971 1980Q2123 1837 2135 1619L2136 1596H1850L1849 1619Q1841 1745 1767 1824Q1694 1903 1548 1903Q1386 1903 1291 1785Q1197 1666 1197 1439V1295Q1197 1049 1293 940Q1390 831 1545 831Q1699 831 1774 906Q1850 981 1850 1113V1138H2136V1117Q2136 896 1977 753Q1819 609 1547 609Q1263 609 1084 792Q906 975 906 1321Z M2289 2095H2848Q3081 2095 3224 1985Q3367 1875 3367 1675Q3367 1534 3300 1447Q3234 1361 3132 1331V1327Q3215 1297 3271 1221Q3328 1144 3328 1024Q3328 826 3192 732Q3057 639 2819 639H2289ZM2569 1890V1437H2843Q2968 1437 3026 1497Q3085 1558 3085 1662Q3085 1767 3026 1828Q2968 1890 2843 1890ZM2569 1241V845H2814Q2938 845 2993 896Q3047 947 3047 1042Q3047 1136 2993 1189Q2938 1241 2814 1241Z M3486 1412Q3486 1759 3665 1942Q3845 2124 4156 2124Q4359 2124 4499 2060Q4639 1996 4714 1920L4714 1334L4137 1334L4137 1550L4432 1550L4432 1823Q4373 1865 4309 1883Q4246 1902 4157 1902Q3981 1902 3881 1787Q3780 1672 3780 1439L3780 1294Q3780 1066 3875 949Q3970 833 4127 833Q4274 833 4349 905Q4424 977 4424 1072L4424 1083L4714 1083L4713 1069Q4710 874 4556 741Q4402 609 4137 609Q3844 609 3665 792Q3486 974 3486 1321Z"/></symbol></svg>';function ka(){document.getElementById("nc-cbd")||document.body.insertAdjacentHTML("afterbegin",pv)}function nc(){ka()}var ou="data:image/webp;base64,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";var lu={"cleansing-gel":{url:"data:image/webp;base64,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",w:229,h:674},"day-cream":{url:"data:image/webp;base64,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",w:166,h:760},"night-cream":{url:"data:image/webp;base64,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",w:167,h:759},"skin-oil":{url:"data:image/webp;base64,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",w:157,h:498}};var cu={"skin-oil":{url:ou,box:[1e3,1e3,232,100,769,960],h:.635},serum:{src:"products/hyaluron-serum.webp",box:[800,1200,108,225,700,1107],h:.635},"day-cream":{src:"products/day-cream.webp",box:[1200,1200,345,97,864,1152],h:.86},"night-cream":{src:"products/night-cream.webp",box:[1200,1200,345,96,862,1153],h:.86},"cleansing-gel":{src:"products/cleansing-gel-box.webp",box:[1200,1200,223,64,933,1113],h:.825},"body-lotion":{src:"products/body-lotion.webp",box:[800,1200,186,163,601,1138],h:.92},shampoo:{src:"products/shampoo.webp",box:[1200,1200,455,65,764,1148],h:1}},mv={"cleansing-gel":.748,"day-cream":.841,"night-cream":.841,"skin-oil":.553},za=Object.fromEntries(Object.entries(lu).map(([i,t])=>[i,{url:t.url,box:[t.w,t.h,0,0,t.w,t.h],h:mv[i]}])),hu=.22,gv=["komplet-pakken","skin-oil","serum","day-cream","night-cream","all-day-facial","cleansing-gel","body-lotion","shampoo"],vv={"skin-oil":"face",serum:"face","day-cream":"face","night-cream":"face","cleansing-gel":"face","body-lotion":"body",shampoo:"body"},uu=i=>i.bundle?"sets":vv[i.id]||"face",du={"cleansing-gel":"Rens","day-cream":"Dag","night-cream":"Nat","skin-oil":"Olie"},Fi={bag:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.6 8.25h12.8l-1.05 10.6a2 2 0 0 1-1.99 1.8H8.64a2 2 0 0 1-1.99-1.8z"/><path d="M9 10.5V7a3 3 0 0 1 6 0v3.5"/></svg>',check:'<svg viewBox="0 0 24 24" aria-hidden="true"><path class="deals-check" d="m5.5 12.6 4.1 4.1 8.9-9.4"/></svg>',tick:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 12.4 3.9 3.9L18 8"/></svg>',eye:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.75 12S6.1 5.75 12 5.75 21.25 12 21.25 12 17.9 18.25 12 18.25 2.75 12 2.75 12z"/><circle cx="12" cy="12" r="2.75"/></svg>',close:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/></svg>',truck:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 7.5h10.5v8.5H3.5z"/><path d="M14 10.5h3.6l2.9 3v2.5H14"/><circle cx="7.25" cy="17.25" r="1.75"/><circle cx="16.75" cy="17.25" r="1.75"/></svg>',back:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3"/><path d="M4.25 4.5v3.25H7.5"/></svg>',shield:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.75 5.25 6.5v5c0 4.2 2.9 7.4 6.75 8.75 3.85-1.35 6.75-4.55 6.75-8.75v-5z"/><path d="m9.25 12 1.95 1.95 3.75-3.9"/></svg>'},Oe=i=>String(i??"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Ks=(i,t,e)=>Math.max(t,Math.min(e,i));function ic(i,t){let{fmt:e,store:n}=t,s=T=>e.kr(T).replace(/ (?=kr\.)/,"\xA0"),r=(T,q=i)=>q.querySelector(T),a=(T,q=i)=>[...q.querySelectorAll(T)],o=t.prefersReducedMotion,l=matchMedia("(hover: hover) and (pointer: fine)").matches,c="cubic-bezier(.16, 1, .3, 1)",u=+((location.search.match(/[?&]dealsSlow=(\d+)/)||[])[1]||1),d=matchMedia("(hover: none), (pointer: coarse)").matches||navigator.maxTouchPoints>0&&t.isMobile();i.classList.toggle("deals-touch",d);let p=r("[data-deals-grid]"),f=r("[data-deals-live]"),v=gv.map(T=>t.byId[T]).filter(T=>T&&!T.gift&&(cu[T.id]||T.bundle));t.products.forEach(T=>{!T.gift&&T.img&&!v.includes(T)&&!/drops|lubricant/.test(T.img)&&v.push(T)});let g=(T,q)=>T&&T.url?T.url:t.asset(T?T.src:q.img);function m(T,q,tt,lt="",$=0,Lt=1){let[Yt,Gt,Nt,Ee,ve,ot]=T.box,y=ve-Nt,L=ot-Ee,O=`width:${(Yt/y*100).toFixed(3)}%;left:${(-Nt/y*100).toFixed(3)}%;top:${(-Ee/L*100).toFixed(3)}%`;return`<div class="deals-prod" style="--ar:${(y/L).toFixed(4)};--ph:${T.h.toFixed(4)};--o:${($*100).toFixed(2)}%;--s:${Lt.toFixed(4)};--wu:${(y/L*T.h).toFixed(4)}">
      <span class="deals-prod__shadow" aria-hidden="true"></span>
      <span class="deals-prod__pack"><img src="${q}" alt="${Oe(tt)}" width="${Yt}" height="${Gt}" draggable="false" style="${O}"><span class="deals-gloss" aria-hidden="true" style="${O};aspect-ratio:${Yt}/${Gt};-webkit-mask-image:url('${q}');mask-image:url('${q}')"></span></span>
      ${lt}
    </div>`}let h=T=>T.reduce((q,tt)=>q+(tt.box[4]-tt.box[2])/(tt.box[5]-tt.box[3])*tt.h,0)+hu*(T.length-1);function b(T){if(T.bundle){let tt=(T.contains||[]).filter(Nt=>za[Nt]),lt=tt.map(Nt=>za[Nt]),$=h(lt),Lt=Nt=>(Nt.box[4]-Nt.box[2])/(Nt.box[5]-Nt.box[3])*Nt.h,Yt=0,Gt=lt.map(Nt=>{let Ee=Yt/$;return Yt+=Lt(Nt)+hu,[Ee,Lt(Nt)/$]});return`<div class="deals-line deals-line--set" style="--lw:${$.toFixed(4)};--n:${tt.length}" role="img" aria-label="${Oe(T.name)}: ${tt.map(Nt=>Oe(t.byId[Nt]?.name||Nt)).join(", ")}">
        ${tt.map((Nt,Ee)=>m(za[Nt],za[Nt].url,"",`<span class="deals-prod__lbl" aria-hidden="true"><span class="deals-no">${Ee+1}</span>${du[Nt]||""}</span>`,Gt[Ee][0],Gt[Ee][1])).join("")}
      </div>`}let q=cu[T.id]||{src:T.img,box:[1e3,1e3,0,0,1e3,1e3],h:.8};return`<div class="deals-line" style="--lw:${h([q]).toFixed(4)}">${m(q,g(q,T),`${T.name}${T.size?", "+T.size:""}`)}</div>`}let w=(T,q=!1)=>`
    <div class="deals-price${q?" deals-price--big":""}">
      <span class="deals-price__now"><span class="nc-sr">Black Week-pris </span>${s(T.price)}</span>
      <span class="deals-price__save">Spar ${s(T.save)}</span>
      <span class="deals-price__was">F\xF8rpris ${s(T.price0)}</span>
    </div>`,x=(T,q="")=>`
    <button class="nc-btn deals-add${q}" type="button" data-add="${T.id}">
      <span class="deals-add__ink" aria-hidden="true"></span>
      <span class="deals-add__a">${Fi.bag}<span>L\xE6g i kurv</span><span class="nc-sr"> \u2013 ${Oe(T.name)}</span></span>
      <span class="deals-add__b" aria-hidden="true">${Fi.check}<span>Lagt i kurv</span></span>
    </button>`,C=T=>[T.size,T.strength].filter(Boolean).join(" \xB7 "),E=T=>{let q=(T.contains||[]).map(tt=>t.byId[tt]).filter(Boolean);return q.length?`<div class="deals-set__contents">
      <p class="deals-set__cap"><span>Indhold</span><span>F\xF8rpris enkeltvis</span></p>
      <dl class="deals-set__list">
        ${q.map((tt,lt)=>`<div class="deals-set__row"><dt><span class="deals-no" aria-hidden="true">${lt+1}</span>${Oe(tt.name)}</dt><dd>${s(tt.price0)}</dd></div>`).join("")}
        <div class="deals-set__row deals-set__row--sum"><dt>V\xE6rdi ved l\xF8sk\xF8b</dt><dd>${s(T.valueLoose)}</dd></div>
      </dl>
    </div>`:""},R=t.campaign.giftThreshold,I=t.campaign.freeShipping,A=T=>{let q=[];return T.price>=R&&q.push("Udl\xF8ser gratis CBD Lip Balm"),T.price>=I&&q.push("Fri fragt"),q.push("Ingen kode \u2013 rabatten tr\xE6kkes i kurven"),`<ul class="deals-set__perks">${q.map(tt=>`<li>${Fi.tick}${tt}</li>`).join("")}</ul>`},S=T=>`<span class="nc-bubble nc-bubble--sale deals-bubble" aria-hidden="true">\u2212${T.pct}%</span>`,P=T=>`<button class="deals-quick" type="button" data-qv="${T.id}">${Fi.eye}<span class="nc-sr">Hurtig visning \u2013 ${Oe(T.name)}</span></button>`;function G(T,q){let tt=uu(T);if(T.bundle){let lt=(T.contains||[]).length;return`<li class="deals-item deals-item--set" data-id="${T.id}" data-cat="${tt}" style="--ri:${q}">
        <article class="deals-card deals-card--set" aria-labelledby="deals-n-${T.id}">
          <div class="deals-card__stage" data-stage>
            <span class="deals-ground" aria-hidden="true"></span>
            ${b(T)}${S(T)}
            ${P(T)}
          </div>
          <div class="deals-card__body deals-set__body">
            <div class="deals-set__intro">
              ${T.badge?`<img class="deals-set__badge" src="${t.asset(T.badge)}" alt="" width="56" height="56">`:""}
              <p class="deals-card__eyebrow">Sampakke \xB7 ${lt} produkter</p>
              <h3 class="deals-card__name deals-card__name--set" id="deals-n-${T.id}">${Oe(T.name)}</h3>
              <p class="deals-card__claim deals-card__claim--set">${Oe(T.claim)}</p>
              ${A(T)}
            </div>
            <div class="deals-set__side">
              ${E(T)}
              <div class="deals-card__buy">${w(T,!0)}${x(T)}</div>
            </div>
          </div>
        </article>
      </li>`}return`<li class="deals-item" data-id="${T.id}" data-cat="${tt}" style="--ri:${q}">
      <article class="deals-card" aria-labelledby="deals-n-${T.id}">
        <div class="deals-card__stage" data-stage>
          <span class="deals-ground" aria-hidden="true"></span>
          ${b(T)}${S(T)}${P(T)}
        </div>
        <div class="deals-card__body">
          <p class="deals-card__eyebrow">${Oe(T.nickname||T.eyebrow)}</p>
          <h3 class="deals-card__name" id="deals-n-${T.id}">${Oe(T.name)}</h3>
          <p class="deals-card__size">${Oe(C(T))}</p>
          <p class="deals-card__claim">${Oe(T.claim)}</p>
          <div class="deals-card__buy">${w(T)}${x(T)}</div>
        </div>
      </article>
    </li>`}let z=t.byId[t.campaign.giftId],Y=z?z.name:"CBD Lip Balm",X=`<li class="deals-item deals-item--gift" data-cat="gift" style="--ri:${v.length}">
    <aside class="deals-gift nc-grain" aria-labelledby="deals-gift-t">
      <span class="deals-gift__glow" aria-hidden="true"></span>
      <div class="deals-gift__in">
        <div class="deals-gift__head">
          <p class="deals-gift__eyebrow">Black Week-gave</p>
          <h3 class="deals-gift__title" id="deals-gift-t">${Oe(Y)} med i k\xF8bet</h3>
        </div>
        <div class="deals-gift__art" aria-hidden="true">
          <span class="deals-drop"><span class="deals-drop__core"></span><span class="deals-drop__spec"></span></span>
          <span class="deals-drop__floor"></span>
          <span class="nc-bubble nc-bubble--sand deals-gift__bubble"><span>V\xE6rdi<br>${s(t.campaign.giftValue)}</span></span>
        </div>
        <p class="deals-gift__copy">Gratis, n\xE5r du handler for over ${s(R)}</p>
        <div class="deals-gift__meter">
          <div class="deals-gift__track" role="progressbar" aria-label="Fremskridt mod gratis ${Oe(Y)}" aria-valuemin="0" aria-valuemax="${R}" aria-valuenow="0" aria-valuetext="0 kr. af ${R} kr.">
            <span class="deals-gift__fill"></span>
            <span class="deals-gift__tick" style="--at:${(I/R*100).toFixed(2)}%"></span>
            <span class="deals-gift__tick deals-gift__tick--end" style="--at:100%"></span>
          </div>
          <div class="deals-gift__labels" aria-hidden="true">
            <span style="--at:${(I/R*100).toFixed(2)}%">Fri fragt</span>
            <span style="--at:100%">Gave</span>
          </div>
        </div>
        <p class="deals-gift__status" data-gift-status></p>
      </div>
    </aside>
  </li>`;p.innerHTML=v.map(G).join("")+X,p.classList.add("deals-rv");let k=a(".deals-head [data-reveal]");k.forEach(T=>{T.removeAttribute("data-reveal"),T.classList.add("deals-hd")});let V=()=>k.forEach(T=>T.classList.add("is-in")),H=()=>{V(),p.classList.add("is-in"),o||setTimeout(()=>de(0),650)};if(o)V(),p.classList.add("is-in");else{let T=new IntersectionObserver(tt=>{tt.some(lt=>lt.isIntersecting)&&(V(),T.disconnect())},{rootMargin:"0px 0px -4% 0px"});T.observe(r(".deals-head"));let q=new IntersectionObserver(tt=>{tt.some(lt=>lt.isIntersecting)&&(H(),q.disconnect())},{rootMargin:"0px 0px -6% 0px"});q.observe(p)}let st=r(".deals-foot");st&&st.removeAttribute("data-reveal");let ut={all:v.length,face:0,body:0,sets:0};v.forEach(T=>ut[uu(T)]++),a("[data-count]").forEach(T=>{T.textContent=ut[T.dataset.count]});let Pt=!1,At=!1;new IntersectionObserver(T=>{Pt=T.some(q=>q.isIntersecting)},{threshold:.15}).observe(p);function de(T=0){if(o)return;let q=Ne().filter($=>!$.hidden&&$!==Xt).map($=>r(".deals-card",$)).filter(Boolean),tt=q.map($=>$.getBoundingClientRect()).map($=>$.top),lt=Math.min(...tt);q.forEach(($,Lt)=>{let Yt=$.getBoundingClientRect(),Gt=(Yt.top-lt)/260+Yt.left/360;setTimeout(()=>{$.classList.remove("is-sweep"),$.offsetWidth,$.classList.add("is-sweep")},T+Gt*140)})}o||setInterval(()=>{Pt&&!At&&!document.hidden&&p.classList.contains("is-in")&&de(0)},12e3),p.addEventListener("animationend",T=>{T.animationName==="deals-sweep"&&T.target.closest(".deals-card")?.classList.remove("is-sweep")});let K=r(".deals-gift__fill"),rt=r(".deals-gift__track"),Rt=r("[data-gift-status]"),dt=r(".deals-gift");function zt(){let T=n.subtotal();K.style.setProperty("--p",Ks(T/R,0,1).toFixed(4)),rt.setAttribute("aria-valuenow",String(Math.min(T,R))),rt.setAttribute("aria-valuetext",`${Math.min(T,R)} kr. af ${R} kr.`),dt.classList.toggle("is-ship",T>=I),dt.classList.toggle("is-done",T>=R);let q;T<=0?q=`Fri fragt fra ${s(I)} \u2013 gaven f\xF8lger med fra ${s(R)}`:T<I?q=`Du mangler <b>${s(I-T)}</b> til fri fragt og <b>${s(R-T)}</b> til din gave.`:T<R?q=`Fri fragt er din. Du mangler <b>${s(R-T)}</b> til din gave.`:q=`<b>Din ${Oe(Y)} f\xF8lger med.</b> Fri fragt er ogs\xE5 din.`,Rt.innerHTML=q}zt(),n.on(T=>{(T==="cart:add"||T==="cart:change")&&zt()});let Vt=r(".deals-filter"),qt=r(".deals-filter__ink"),se=a(".deals-chip"),Qt="all";function ge(T,q){let tt=T.offsetLeft,lt=T.offsetWidth;qt.style.transition=q||o?"none":"",qt.style.width=`${lt}px`,qt.style.transform=`translateX(${tt}px)`,q&&(qt.offsetWidth,qt.style.transition=""),qt.classList.add("is-on")}let F=()=>se.find(T=>T.getAttribute("aria-pressed")==="true")||se[0];requestAnimationFrame(()=>ge(F(),!0)),document.fonts&&document.fonts.ready.then(()=>ge(F(),!0)),new ResizeObserver(()=>ge(F(),!0)).observe(Vt);let Ne=()=>a(".deals-item",p),Xt=r(".deals-item--gift",p),jt=()=>getComputedStyle(p).gridTemplateColumns.split(" ").filter(Boolean).length||1,Ut=T=>T.classList.contains("deals-item--set")?Math.min(2,jt()):1;function oe(T=Qt){let q=jt(),lt=Ne().filter(Lt=>Lt!==Xt&&(T==="all"||Lt.dataset.cat===T)).reduce((Lt,Yt)=>Lt+Ut(Yt),0),$=(q-lt%q)%q||q;return Xt.style.gridColumn=`span ${$}`,Xt.dataset.span=$,Xt.classList.toggle("is-wide",$>=2),$}oe();let Ft=jt();new ResizeObserver(()=>{let T=jt();T!==Ft&&(Ft=T,oe())}).observe(p);let _=[];function M(T){if(T===Qt)return;Qt=T,_.forEach(ot=>ot.cancel()),_=[],p.classList.add("is-in"),Ne().forEach(ot=>{ot.style.position=ot.style.left=ot.style.top=ot.style.width=ot.style.height="",ot.classList.remove("is-leaving"),ot.dataset.leaving&&(ot.hidden=!0,delete ot.dataset.leaving)});let q=p.getBoundingClientRect(),tt=q.height,lt=new Map(Ne().filter(ot=>!ot.hidden).map(ot=>[ot,ot.getBoundingClientRect()])),$=Xt.dataset.span,Lt=ot=>ot===Xt||T==="all"||ot.dataset.cat===T,Yt=[...lt.keys()].filter(ot=>!Lt(ot)),Gt=Ne().filter(ot=>ot.hidden&&Lt(ot));Yt.forEach(ot=>{let y=lt.get(ot);Object.assign(ot.style,{position:"absolute",left:`${y.left-q.left}px`,top:`${y.top-q.top}px`,width:`${y.width}px`,height:`${y.height}px`}),ot.classList.add("is-leaving"),ot.dataset.leaving="1"}),Gt.forEach(ot=>{ot.hidden=!1});let Nt=String(oe(T)),Ee=p.getBoundingClientRect().height;if(o){Yt.forEach(ot=>{ot.hidden=!0,ot.style.position="",ot.classList.remove("is-leaving"),delete ot.dataset.leaving});return}Yt.forEach(ot=>{let y=ot.animate([{opacity:1,transform:"none",filter:"blur(0)"},{opacity:0,transform:"translateY(6px) scale(.965)",filter:"blur(2px)"}],{duration:300,easing:"cubic-bezier(.4,0,.6,1)",fill:"forwards"});_.push(y),y.onfinish=()=>{ot.hidden=!0,Object.assign(ot.style,{position:"",left:"",top:"",width:"",height:""}),ot.classList.remove("is-leaving"),delete ot.dataset.leaving,y.cancel()}});let ve=0;Ne().filter(ot=>!ot.hidden&&!ot.dataset.leaving).forEach(ot=>{let y=ot.getBoundingClientRect(),L=lt.get(ot);if(ot===Xt&&$!==Nt)_.push(ot.animate([{opacity:0,transform:"translateY(14px)"},{opacity:1,transform:"none"}],{duration:640,delay:260,easing:c,fill:"backwards"}));else if(L){let O=L.left-y.left,W=L.top-y.top;Math.abs(O)+Math.abs(W)>.5&&_.push(ot.animate([{transform:`translate(${O}px, ${W}px)`},{transform:"none"}],{duration:760,easing:c}))}else _.push(ot.animate([{opacity:0,transform:"translateY(18px) scale(.985)"},{opacity:1,transform:"none"}],{duration:720,delay:160+ve++*55,easing:c,fill:"backwards"}))}),Math.abs(Ee-tt)>1&&_.push(p.animate([{height:`${tt}px`},{height:`${Ee}px`}],{duration:640,easing:c})),setTimeout(()=>de(0),520)}se.forEach(T=>T.addEventListener("click",()=>{se.forEach(tt=>tt.setAttribute("aria-pressed",String(tt===T))),ge(T),Vt.scrollWidth>Vt.clientWidth&&Vt.scrollTo({left:T.offsetLeft-(Vt.clientWidth-T.offsetWidth)/2,behavior:o?"auto":"smooth"}),M(T.dataset.filter);let q=ut[T.dataset.filter];f.textContent=`Viser ${q} ${q===1?"produkt":"produkter"}`})),Vt.addEventListener("keydown",T=>{let q=se.indexOf(document.activeElement);if(q<0)return;let tt=T.key==="ArrowRight"?q+1:T.key==="ArrowLeft"?q-1:T.key==="Home"?0:T.key==="End"?se.length-1:-1;tt<0&&T.key!=="ArrowLeft"||(T.preventDefault(),se[(tt+se.length)%se.length].focus())});let B=new Map,J=0,et=0;function Z(T){let q=Math.min(.05,(T-et)/1e3);et=T;let tt=1-Math.exp(-q*8),lt=1-Math.exp(-q*6.5);B.forEach(($,Lt)=>{$.rx+=($.trx-$.rx)*tt,$.ry+=($.try-$.ry)*tt,$.h+=($.th-$.h)*lt,$.mx+=($.tmx-$.mx)*tt,$.my+=($.tmy-$.my)*tt,Lt.style.transform=`perspective(1200px) rotateX(${$.rx.toFixed(3)}deg) rotateY(${$.ry.toFixed(3)}deg) translateY(${(-$.h*3).toFixed(2)}px)`,Lt.style.setProperty("--h",$.h.toFixed(4)),Lt.style.setProperty("--deals-lx",`${($.mx*100).toFixed(2)}%`),Lt.style.setProperty("--px",($.ry/5).toFixed(4)),Lt.style.setProperty("--py",($.rx/4).toFixed(4)),Math.abs($.trx-$.rx)+Math.abs($.try-$.ry)+Math.abs($.th-$.h)+Math.abs($.tmx-$.mx)<.002&&$.th===0&&(Lt.style.transform="",["--h","--deals-lx","--px","--py"].forEach(Gt=>Lt.style.removeProperty(Gt)),B.delete(Lt))}),J=B.size?requestAnimationFrame(Z):0}let Et=()=>{J||(et=performance.now(),J=requestAnimationFrame(Z))};function ft(T){let q=B.get(T);return q||(q={rx:0,ry:0,trx:0,try:0,h:0,th:0,mx:.5,my:.3,tmx:.5,tmy:.3},B.set(T,q)),q}l&&!d&&!o&&(p.addEventListener("pointermove",T=>{let q=T.target.closest(".deals-card");if(!q||T.pointerType!=="mouse")return;At=!0;let tt=q.getBoundingClientRect(),lt=Ks((T.clientX-tt.left)/tt.width,0,1),$=Ks((T.clientY-tt.top)/tt.height,0,1),Lt=ft(q),Yt=q.classList.contains("deals-card--set")?.5:1,Gt=q.querySelectorAll(".deals-prod"),Nt=Gt[0].getBoundingClientRect(),Ee=Gt[Gt.length-1].getBoundingClientRect(),ve=Ks((T.clientX-Nt.left)/Math.max(1,Ee.right-Nt.left),-.4,1.4);Lt.try=(lt-.5)*6*Yt,Lt.trx=-($-.5)*4.5*Yt,Lt.th=1,Lt.tmx=ve,Lt.tmy=$,Et()}),p.addEventListener("pointerout",T=>{let q=T.target.closest(".deals-card");if(!q||q.contains(T.relatedTarget))return;At=!1;let tt=B.get(q);tt&&(tt.trx=0,tt.try=0,tt.th=0,tt.tmx=.5,tt.tmy=.3,Et())}));let mt=new WeakMap;function ie(T,q){let tt=T.getBoundingClientRect(),lt=q&&q.clientX?q.clientX-tt.left:tt.width/2,$=q&&q.clientY?q.clientY-tt.top:tt.height/2;T.style.setProperty("--ix",`${lt}px`),T.style.setProperty("--iy",`${$}px`),T.classList.remove("is-added"),T.offsetWidth,T.classList.add("is-added"),clearTimeout(mt.get(T)),mt.set(T,setTimeout(()=>T.classList.remove("is-added"),2600))}function it(){let T=innerWidth,tt=[...document.querySelectorAll("[data-cart]")].map(lt=>lt.querySelector(".hdr-cart__icon")||lt).map(lt=>lt.getBoundingClientRect()).filter(lt=>lt.width>0&&lt.bottom>0&&lt.top<innerHeight&&lt.left<T)[0];return tt?{x:tt.left+tt.width/2,y:tt.top+tt.height/2,real:!0}:{x:T-36,y:30,real:!1}}let xt=(T,q,tt,lt,$)=>{let Lt=1-$;return Lt*Lt*Lt*T+3*Lt*Lt*$*q+3*Lt*$*$*tt+$*$*$*lt},kt=T=>(T<.5?4*T*T*T:1-Math.pow(-2*T+2,3)/2)*.82+(1-Math.pow(1-T,3))*.18,Bt=null,pt=[],Jt=0,Ht=getComputedStyle(i),fe=(T,q)=>Ht.getPropertyValue(T).trim()||q,D=(T,q)=>{let tt=T.replace("#",""),lt=parseInt(tt.length===3?tt.replace(/./g,"$&$&"):tt,16);return`rgba(${lt>>16&255}, ${lt>>8&255}, ${lt&255}, ${q})`},gt=fe("--sage-500","#80a097"),Q=fe("--sand-500","#ddbfa3");function j(){Bt||(Bt=document.createElement("canvas"),Bt.className="deals-trail",Bt.setAttribute("aria-hidden","true"),i.appendChild(Bt))}function vt(T){let q=Bt,tt=Math.min(devicePixelRatio||1,2);(q.width!==Math.round(innerWidth*tt)||q.height!==Math.round(innerHeight*tt))&&(q.width=Math.round(innerWidth*tt),q.height=Math.round(innerHeight*tt));let lt=q.getContext("2d");lt.setTransform(tt,0,0,tt,0,0),lt.clearRect(0,0,innerWidth,innerHeight),lt.lineCap="round",pt=pt.filter($=>T-$.end<520*u||!$.done);for(let $ of pt){let Lt=$.pts,Yt=$.done?Math.max(0,1-(T-$.end)/(520*u)):1;for(let Gt=1;Gt<Lt.length;Gt++){let Nt=(T-Lt[Gt].t)/(420*u);if(Nt>1)continue;let Ee=(1-Nt)*(1-Nt)*Yt;lt.strokeStyle=D(gt,(.38*Ee).toFixed(3)),lt.lineWidth=1+9*Ee*Lt[Gt].s,lt.beginPath(),lt.moveTo(Lt[Gt-1].x,Lt[Gt-1].y),lt.lineTo(Lt[Gt].x,Lt[Gt].y),lt.stroke()}for(let Gt of $.drops){let Nt=(T-Gt.t)/(700*u);Nt>1||Nt<0||(lt.fillStyle=D(Q,(.55*(1-Nt)*Yt).toFixed(3)),lt.beginPath(),lt.arc(Gt.x,Gt.y+Nt*10,Gt.r*(1-Nt*.6),0,Math.PI*2),lt.fill())}}pt.length?Jt=requestAnimationFrame(vt):(Jt=0,lt.clearRect(0,0,innerWidth,innerHeight))}function yt(T,q){let tt=T?[...T.querySelectorAll(".deals-prod__pack")]:[];if(o||!tt.length){q();return}let lt=it(),$=!1;tt.forEach((Lt,Yt)=>{let Gt=Lt.getBoundingClientRect();if(Gt.width<2){Yt===tt.length-1&&!$&&($=!0,q());return}let Nt=Lt.cloneNode(!0);Nt.className="deals-fly",Object.assign(Nt.style,{left:`${Gt.left}px`,top:`${Gt.top}px`,width:`${Gt.width}px`,height:`${Gt.height}px`});let Ee=Nt.querySelector("img");Ee&&(Ee.loading="eager"),Nt.querySelector(".deals-gloss")?.remove(),i.appendChild(Nt);let ve=Yt===0,ot=ve?Object.assign(document.createElement("span"),{className:"deals-fly__drop"}):null;ot&&i.appendChild(ot);let y=null;ve&&(j(),y={pts:[],drops:[],done:!1,end:0},pt.push(y),Jt||(Jt=requestAnimationFrame(vt)));let L=Gt.left+Gt.width/2,O=Gt.top+Gt.height/2,W=Math.hypot(lt.x-L,lt.y-O),U=Ks(620+W*.42,760,1150)*u,at=Math.min(140,40+W*.12),ht=14,Ct=L,wt=Math.max(ht,O-at-Math.max(0,O-lt.y)*.35),It=L+(lt.x-L)*.62,ct=Math.max(ht,Math.min(lt.y,O)-at*.55),Tt=22/Math.max(Gt.width,Gt.height),$t=performance.now()+Yt*85*u,he=.18;function ue(Te){if(Te<$t){requestAnimationFrame(ue);return}let ee=Ks((Te-$t)/U,0,1),_t=kt(ee),Le=it(),le=lt.real?Le.x:lt.x,Xe=lt.real?Le.y:lt.y,Ke=xt(L,Ct,It,le,_t),Fe=xt(O,wt,ct,Xe,_t),Pn=1+(Tt-1)*Math.pow(_t,.8),xe=Math.sin(_t*Math.PI)*-7;Nt.style.transform=`translate(${(Ke-L).toFixed(2)}px, ${(Fe-O).toFixed(2)}px) scale(${Pn.toFixed(4)}) rotate(${xe.toFixed(2)}deg)`,Nt.style.opacity=String(ee<.82?1:1-(ee-.82)/.18),ot&&(ot.style.transform=`translate(${(Ke-6).toFixed(2)}px, ${(Fe-6).toFixed(2)}px) scale(${(.4+.6*Math.sin(_t*Math.PI)).toFixed(3)})`,ot.style.opacity=String(Math.sin(ee*Math.PI)*.9)),y&&(y.pts.push({x:Ke,y:Fe,t:Te,s:Math.max(.25,Pn)}),y.pts.length>60&&y.pts.shift(),ee>he&&ee<.8&&(y.drops.push({x:Ke+(Math.random()-.5)*10,y:Fe+(Math.random()-.5)*8,r:1.4+Math.random()*1.8,t:Te}),he+=.12+Math.random()*.08)),ee>=.93&&Yt===tt.length-1&&!$&&($=!0,q()),ee<1?requestAnimationFrame(ue):(Nt.remove(),ot&&ot.remove(),y&&(y.done=!0,y.end=Te))}requestAnimationFrame(ue)})}function Ot(T,q,tt,lt){q&&ie(q,tt);let $=!1;yt(lt,()=>{$||($=!0,n.add(T.id,1),f.textContent=`${T.name} er lagt i kurven.`)})}p.addEventListener("click",T=>{let q=T.target.closest("[data-add]");if(q){let $=t.byId[q.dataset.add];Ot($,q,T,q.closest(".deals-card").querySelector("[data-stage]"));return}let tt=T.target.closest("[data-qv]");if(tt){Ze(t.byId[tt.dataset.qv],tt);return}let lt=T.target.closest("[data-stage]");if(lt){let $=lt.querySelector("[data-qv]");$&&Ze(t.byId[$.dataset.qv],$)}});let Wt=document.createElement("dialog");Wt.className="deals-qv",Wt.setAttribute("aria-labelledby","deals-qv-title"),i.appendChild(Wt);let Re=null,re=null,Me=!1;function xn(T){let q=`<ul class="deals-qv__usp">
      <li>${Fi.truck}Fri fragt over ${s(t.campaign.freeShipping)}</li>
      <li>${Fi.back}14 dages fortrydelsesret</li>
      <li>${Fi.shield}Testet til under 0,2% THC</li>
    </ul>`;return`<div class="deals-qv__sheet">
      <button class="deals-qv__close" type="button" aria-label="Luk hurtig visning" data-qv-close>${Fi.close}</button>
      <div class="deals-qv__stage${T.bundle?" deals-qv__stage--set":""}" data-stage>
        <span class="deals-ground" aria-hidden="true"></span>
        ${b(T)}
        <span class="nc-bubble nc-bubble--sale deals-bubble deals-bubble--qv" aria-hidden="true">\u2212${T.pct}%</span>
        ${T.badge&&T.bundle?`<img class="deals-qv__badge" src="${t.asset(T.badge)}" alt="" width="64" height="64">`:""}
      </div>
      <div class="deals-qv__body">
        <p class="deals-card__eyebrow">${Oe(T.bundle?`Sampakke \xB7 ${(T.contains||[]).length} produkter`:T.nickname?`${T.nickname} \xB7 ${T.eyebrow}`:T.eyebrow)}</p>
        <h2 class="deals-qv__title" id="deals-qv-title">${Oe(T.name)}</h2>
        <p class="deals-card__size">${Oe(T.bundle?(T.contains||[]).map(tt=>du[tt]||t.byId[tt]?.name).join(" \xB7 "):C(T))}</p>
        <p class="deals-qv__claim">${Oe(T.claim)}</p>
        ${T.notes?`<p class="deals-qv__notes">${Oe(T.notes)}</p>`:""}
        ${T.bundle?E(T):""}
        <hr class="nc-dotline deals-qv__rule">
        <div class="deals-qv__buy">${w(T,!0)}${x(T," nc-btn--lg")}</div>
        ${q}
      </div>
    </div>`}function Ze(T,q){T&&(re=T,Re=q,Me=!1,Wt.innerHTML=xn(T),a("img",Wt).forEach(tt=>{tt.loading="eager"}),Wt.showModal(),document.documentElement.classList.add("deals-lock"),o||(r(".deals-qv__sheet",Wt).animate([{opacity:0,transform:"translateY(22px) scale(.985)"},{opacity:1,transform:"none"}],{duration:620,easing:c}),a(".deals-prod",Wt).forEach((lt,$)=>lt.animate([{opacity:0,transform:"translateY(16px)"},{opacity:1,transform:"none"}],{duration:900,delay:90+$*70,easing:c,fill:"backwards"})),r(".deals-qv__stage",Wt).classList.add("is-sweep")),r("[data-qv-close]",Wt).focus({preventScroll:!0}))}function ln(T){if(!Wt.open||Me)return;Me=!0;let q=()=>{Wt.close(),Me=!1,document.documentElement.classList.remove("deals-lock"),Re&&!T&&Re.focus({preventScroll:!0}),T&&T()};if(o)return q();Wt.classList.add("is-closing");let tt=r(".deals-qv__sheet",Wt).animate([{opacity:1,transform:"none"},{opacity:0,transform:"translateY(14px) scale(.99)"}],{duration:220,easing:"cubic-bezier(.4,0,1,1)",fill:"forwards"});tt.onfinish=()=>{Wt.classList.remove("is-closing"),q()}}Wt.addEventListener("cancel",T=>{T.preventDefault(),ln()}),Wt.addEventListener("click",T=>{if(T.target===Wt||T.target.closest("[data-qv-close]"))return ln();let q=T.target.closest("[data-add]");if(q&&re){let tt=re;ie(q,T);let lt=p.querySelector(`.deals-item[data-id="${tt.id}"]`),$=lt&&lt.querySelector("[data-add]"),Lt=a(".deals-prod__pack",Wt).map(Yt=>[Yt,Yt.getBoundingClientRect()]);setTimeout(()=>ln(()=>{let Yt=document.createElement("div");Yt.style.cssText="position:fixed;left:0;top:0;width:0;height:0;pointer-events:none",Lt.forEach(([Gt,Nt])=>{let Ee=Gt.cloneNode(!0);Ee.style.cssText=`position:fixed;left:${Nt.left}px;top:${Nt.top}px;width:${Nt.width}px;height:${Nt.height}px;overflow:hidden`,Yt.appendChild(Ee)}),i.appendChild(Yt),$&&ie($),Ot(tt,null,null,Yt),setTimeout(()=>Yt.remove(),40),Re&&Re.focus({preventScroll:!0})}),o?0:380)}})}var sc={};function xv(i,t){if(sc[i])return t(sc[i]);let e=new Image;e.onload=()=>{let n=e.naturalWidth,s=e.naturalHeight;if(!n||!s)return t(null);let r=Math.min(1,120/Math.max(n,s)),a=Math.max(1,Math.round(n*r)),o=Math.max(1,Math.round(s*r)),l=document.createElement("canvas");l.width=a,l.height=o;let c=l.getContext("2d",{willReadFrequently:!0}),u;try{c.drawImage(e,0,0,a,o),u=c.getImageData(0,0,a,o).data}catch{return t(null)}let d=(x,C)=>{let E=(C*a+x)*4;return[u[E],u[E+1],u[E+2],u[E+3]]},p=[d(0,0),d(a-1,0),d(0,o-1),d(a-1,o-1),d(a>>1,0),d(a>>1,o-1),d(0,o>>1),d(a-1,o>>1)],f=[0,1,2,3].map(x=>p.map(C=>C[x]).sort((C,E)=>C-E)[4]),v=f[3]<20,g=a,m=-1,h=o,b=-1;for(let x=0;x<o;x++)for(let C=0;C<a;C++){let E=(x*a+C)*4,R=u[E+3];(v?R>40:R>40&&(Math.abs(u[E]-f[0])>26||Math.abs(u[E+1]-f[1])>26||Math.abs(u[E+2]-f[2])>26))&&(C<g&&(g=C),C>m&&(m=C),x<h&&(h=x),x>b&&(b=x))}if(m<0||m-g<2||b-h<2||(m-g+1)/a>.97&&(b-h+1)/o>.97)return t(null);let w={x0:g/a,x1:(m+1)/a,y0:h/o,y1:(b+1)/o,w:n,h:s};sc[i]=w,t(w)},e.onerror=()=>t(null),e.src=i}function rc(i){let t=i._ncPs;if(!t)return;let e=i.clientWidth,n=i.clientHeight;if(!e||!n)return;let s=Math.min(e/t.w,n/t.h),r=t.w*s,a=t.h*s,o=(e-r)/2,l=(n-a)/2,c=o+t.x0*r,u=o+t.x1*r,d=l+t.y0*a,p=l+t.y1*a,f=u-c,v=p-d,g=(c+u)/2,m=1;v>.78*n?m=.78*n/v:v<.52*n&&(m=Math.min(1.6,.52*n/v)),f*m>.78*e&&(m=.78*e/f);let h=e/2-m*g,b=.86*n-m*p;i.style.transform=`translate(${h.toFixed(2)}px,${b.toFixed(2)}px) scale(${m.toFixed(4)})`,i.classList.add("is-placed")}var fu="ResizeObserver"in window?new ResizeObserver(i=>i.forEach(t=>rc(t.target))):null;function pu(i){if(i._ncPsInit)return;i._ncPsInit=!0;let t=i.currentSrc||i.src;t&&xv(t,e=>{e&&(i._ncPs=e,rc(i),fu?fu.observe(i):window.addEventListener("resize",()=>rc(i)))})}function mu(i){i.querySelectorAll("img.nc-packshot").forEach(t=>{t.complete&&t.naturalWidth?pu(t):t.addEventListener("load",()=>pu(t),{once:!0})})}function yv(i){i.querySelectorAll("[data-nc-tabs]").forEach(t=>{let e=[...t.querySelectorAll("[data-nc-tab]")],n=[...t.querySelectorAll("[data-nc-panel]")];e.forEach(s=>{s.addEventListener("click",()=>{let r=s.getAttribute("data-nc-tab");e.forEach(a=>{a.classList.toggle("is-active",a===s),a.setAttribute("aria-selected",a===s?"true":"false")}),n.forEach(a=>{a.hidden=a.getAttribute("data-nc-panel")!==r})})})})}function Mv(i){i.querySelectorAll("[data-nc-rail]").forEach(t=>{let e=null,n=0;t.getAttribute("data-nc-rail")!=="nodots"&&(e=document.createElement("div"),e.className="nc-raildots",e.setAttribute("aria-hidden","true"),e.hidden=!0,t.insertAdjacentElement("afterend",e));function s(){let a=t.clientWidth?Math.ceil((t.scrollWidth-2)/t.clientWidth):1;if(a!==n){n=a,e.innerHTML="",e.hidden=a<2;for(let o=0;o<a;o++){let l=document.createElement("button");l.type="button",l.tabIndex=-1,l.addEventListener("click",()=>t.scrollTo({left:o*t.clientWidth,behavior:"smooth"})),e.appendChild(l)}}}function r(){let a=t.scrollWidth-t.clientWidth;if(t.classList.toggle("is-more",t.scrollLeft<a-4),t.classList.toggle("is-before",t.scrollLeft>4),!e||(s(),n<2))return;let o=t.scrollLeft>=a-4?n-1:Math.min(n-1,Math.round(t.scrollLeft/t.clientWidth));[...e.children].forEach((l,c)=>l.classList.toggle("is-active",c===o))}t.addEventListener("scroll",r,{passive:!0}),window.addEventListener("resize",r),"ResizeObserver"in window&&new ResizeObserver(r).observe(t),r()})}function ac(i){yv(i),Mv(i),mu(i)}var Va=4.7,bv=615,gu=i=>i>=4.3?"Fremragende":i>=3.8?"Rigtig godt":i>=2.8?"Middel":i>=1.8?"D\xE5rligt":"Meget d\xE5rligt",Sv="M23 31.2l7.1-1.8 3 9.2L23 31.2zm16.4-11.9H26.9L23 7.4l-3.9 11.9H6.6l10.2 7.4-3.9 11.9 10.2-7.4 6.3-4.5 10.1-7.4z";function Av(i){let t=Math.round(i*2)/2,e='<svg class="tp-mc__stars" viewBox="0 0 251 46" aria-hidden="true" focusable="false">';for(let n=0;n<5;n++){let s=n*51,r=t-n;e+=`<rect x="${s}" width="46" height="46" fill="#dcdce6"/>`,r>=1?e+=`<rect x="${s}" width="46" height="46" fill="#00b67a"/>`:r>=.5&&(e+=`<rect x="${s}" width="23" height="46" fill="#00b67a"/>`),e+=`<path transform="translate(${s} 0)" fill="#fff" d="${Sv}"/>`}return e+"</svg>"}function oc(i){let t=i.firstElementChild;if(!t)return;t.style.transform="";let e=Math.min(1,i.clientWidth/t.scrollWidth);e<1&&(t.style.transform=`scale(${e.toFixed(3)})`)}function wv(i){let t=i.querySelector("a");if(!t||i.dataset.tpHydrated)return;let e=i.getAttribute("data-text-color")||"#2f4b45",n=bv.toLocaleString("da-DK");t.className="tp-mc",t.style.setProperty("--tp-text",e),t.setAttribute("aria-label",`${gu(Va)}: ${String(Va).replace(".",",")} ud af 5 p\xE5 Trustpilot, ${n} anmeldelser`),t.innerHTML=`<span class="tp-mc__in"><span class="tp-mc__word">${gu(Va)}</span>${Av(Va)}<span class="tp-mc__count"><b>${n}</b> anmeldelser p\xE5</span><span class="tp-mc__logo"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 1.5l2.6 7.9H23l-6.8 4.9 2.6 7.9L12 17.3l-6.8 4.9 2.6-7.9L1 9.4h8.4z"/></svg>Trustpilot</span></span>`,oc(t),window.addEventListener("resize",()=>oc(t)),document.fonts&&document.fonts.ready.then(()=>oc(t)),i.dataset.tpHydrated="1"}function lc(i){ka(),i.querySelectorAll(".trustpilot-widget").forEach(wv)}function cc(i,t){let e=i.querySelector(".nc-lifestyle__main video");if(!e)return;if(e.muted=!0,t&&t.prefersReducedMotion){e.removeAttribute("autoplay"),e.pause();return}let n=e.play&&e.play();n&&n.catch&&n.catch(()=>{})}var Ev='<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><symbol id="nc-cbd" viewBox="0 0 5586 2734"><rect x="87" y="87" width="5412" height="2560" rx="1280" fill="none" stroke="currentColor" stroke-width="174"/><path fill="currentColor" d="M906 1412Q906 1756 1084 1940Q1262 2124 1547 2124Q1819 2124 1971 1980Q2123 1837 2135 1619L2136 1596H1850L1849 1619Q1841 1745 1767 1824Q1694 1903 1548 1903Q1386 1903 1291 1785Q1197 1666 1197 1439V1295Q1197 1049 1293 940Q1390 831 1545 831Q1699 831 1774 906Q1850 981 1850 1113V1138H2136V1117Q2136 896 1977 753Q1819 609 1547 609Q1263 609 1084 792Q906 975 906 1321Z M2289 2095H2848Q3081 2095 3224 1985Q3367 1875 3367 1675Q3367 1534 3300 1447Q3234 1361 3132 1331V1327Q3215 1297 3271 1221Q3328 1144 3328 1024Q3328 826 3192 732Q3057 639 2819 639H2289ZM2569 1890V1437H2843Q2968 1437 3026 1497Q3085 1558 3085 1662Q3085 1767 3026 1828Q2968 1890 2843 1890ZM2569 1241V845H2814Q2938 845 2993 896Q3047 947 3047 1042Q3047 1136 2993 1189Q2938 1241 2814 1241Z M3520 2095H3997Q4288 2095 4484 1914Q4680 1733 4680 1412V1321Q4680 1000 4484 820Q4288 639 3997 639H3520ZM3802 1880V854H3993Q4172 854 4281 972Q4391 1090 4391 1316V1417Q4391 1644 4281 1762Q4172 1880 3993 1880Z"/></symbol><symbol id="nc-cbg" viewBox="0 0 5586 2734"><rect x="87" y="87" width="5412" height="2560" rx="1280" fill="none" stroke="currentColor" stroke-width="174"/><path fill="currentColor" d="M906 1412Q906 1756 1084 1940Q1262 2124 1547 2124Q1819 2124 1971 1980Q2123 1837 2135 1619L2136 1596H1850L1849 1619Q1841 1745 1767 1824Q1694 1903 1548 1903Q1386 1903 1291 1785Q1197 1666 1197 1439V1295Q1197 1049 1293 940Q1390 831 1545 831Q1699 831 1774 906Q1850 981 1850 1113V1138H2136V1117Q2136 896 1977 753Q1819 609 1547 609Q1263 609 1084 792Q906 975 906 1321Z M2289 2095H2848Q3081 2095 3224 1985Q3367 1875 3367 1675Q3367 1534 3300 1447Q3234 1361 3132 1331V1327Q3215 1297 3271 1221Q3328 1144 3328 1024Q3328 826 3192 732Q3057 639 2819 639H2289ZM2569 1890V1437H2843Q2968 1437 3026 1497Q3085 1558 3085 1662Q3085 1767 3026 1828Q2968 1890 2843 1890ZM2569 1241V845H2814Q2938 845 2993 896Q3047 947 3047 1042Q3047 1136 2993 1189Q2938 1241 2814 1241Z M3486 1412Q3486 1759 3665 1942Q3845 2124 4156 2124Q4359 2124 4499 2060Q4639 1996 4714 1920L4714 1334L4137 1334L4137 1550L4432 1550L4432 1823Q4373 1865 4309 1883Q4246 1902 4157 1902Q3981 1902 3881 1787Q3780 1672 3780 1439L3780 1294Q3780 1066 3875 949Q3970 833 4127 833Q4274 833 4349 905Q4424 977 4424 1072L4424 1083L4714 1083L4713 1069Q4710 874 4556 741Q4402 609 4137 609Q3844 609 3665 792Q3486 974 3486 1321Z"/></symbol></svg>';function vu(){document.getElementById("nc-cbd")||document.body.insertAdjacentHTML("afterbegin",Ev)}function Tv(i){let t=i.querySelector("[data-nc-railscroll]");t&&(i.querySelectorAll("[data-nc-rail-prev]").forEach(e=>e.addEventListener("click",()=>{t.scrollBy({left:-Math.max(320,t.clientWidth*.7),behavior:"smooth"})})),i.querySelectorAll("[data-nc-rail-next]").forEach(e=>e.addEventListener("click",()=>{t.scrollBy({left:Math.max(320,t.clientWidth*.7),behavior:"smooth"})})))}function _v(i){if(i.dataset.ncRailInit)return;i.dataset.ncRailInit="1";let t=null,e=0;i.getAttribute("data-nc-rail")!=="nodots"&&(t=document.createElement("div"),t.className="nc-raildots",t.setAttribute("aria-hidden","true"),t.hidden=!0,i.insertAdjacentElement("afterend",t));function n(){let r=i.clientWidth?Math.ceil((i.scrollWidth-2)/i.clientWidth):1;if(r!==e){e=r,t.innerHTML="",t.hidden=r<2;for(let a=0;a<r;a++){let o=document.createElement("button");o.type="button",o.tabIndex=-1,o.addEventListener("click",()=>i.scrollTo({left:a*i.clientWidth,behavior:"smooth"})),t.appendChild(o)}}}function s(){let r=i.scrollWidth-i.clientWidth;if(i.classList.toggle("is-more",i.scrollLeft<r-4),i.classList.toggle("is-before",i.scrollLeft>4),!t||(n(),e<2))return;let a=i.scrollLeft>=r-4?e-1:Math.min(e-1,Math.round(i.scrollLeft/i.clientWidth));Array.from(t.children).forEach((o,l)=>o.classList.toggle("is-active",l===a))}i.addEventListener("scroll",s,{passive:!0}),window.addEventListener("resize",s),"ResizeObserver"in window&&new ResizeObserver(s).observe(i),s()}function hc(i){vu(),i.querySelectorAll("[data-nc-railwrap]").forEach(Tv),i.querySelectorAll("[data-nc-rail]").forEach(_v)}var xu="https://dk.trustpilot.com/review/naturecell.dk",yu=i=>i>=4.3?"Fremragende":i>=3.8?"Rigtig godt":i>=2.8?"Middel":i>=1.8?"D\xE5rligt":"Meget d\xE5rligt",Rv="M23 31.2l7.1-1.8 3 9.2L23 31.2zm16.4-11.9H26.9L23 7.4l-3.9 11.9H6.6l10.2 7.4-3.9 11.9 10.2-7.4 6.3-4.5 10.1-7.4z",Cv=[{stars:5,title:"Bl\xF8d hud hele dagen",text:"Jeg bruger dagcremen hver morgen. Den tr\xE6kker hurtigt ind og efterlader huden bl\xF8d.",name:"Hanne",when:"for 2 dage siden"},{stars:5,title:"Hurtig levering og venlig service",text:"Pakken kom dagen efter, flot pakket, og jeg fik hurtigt svar p\xE5 mit sp\xF8rgsm\xE5l.",name:"Mette",when:"for 4 dage siden"},{stars:5,title:"Fast del af min aftenrutine",text:"Olien har en mild duft, og min hud f\xF8les velplejet om morgenen.",name:"Lars",when:"for 6 dage siden"},{stars:4,title:"Fedter ikke",text:"H\xE5ndcremen giver god fugt uden at fedte. Den st\xE5r nu ved k\xF8kkenvasken.",name:"Susanne",when:"for 1 uge siden"},{stars:5,title:"Rart at handle dansk",text:"Fin kvalitet fra en dansk familievirksomhed, og emballagen er rigtig p\xE6n.",name:"Karin",when:"for 1 uge siden"},{stars:5,title:"Mild mod min sarte hud",text:"Rensegelen er mild, og huden strammer ikke bagefter. Jeg k\xF8ber den igen.",name:"Jonas",when:"for 2 uger siden"}];function Mu(i,t="tp-stars"){let e=Math.round(i*2)/2,n=`<svg class="${t}" viewBox="0 0 251 46" aria-hidden="true" focusable="false">`;for(let s=0;s<5;s++){let r=s*51,a=e-s;n+=`<rect x="${r}" width="46" height="46" fill="#dcdce6"/>`,a>=1?n+=`<rect x="${r}" width="46" height="46" fill="#00b67a"/>`:a>=.5&&(n+=`<rect x="${r}" width="23" height="46" fill="#00b67a"/>`),n+=`<path transform="translate(${r} 0)" fill="#fff" d="${Rv}"/>`}return n+"</svg>"}var Iv='<span class="tp-logo"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 1.5l2.6 7.9H23l-6.8 4.9 2.6 7.9L12 17.3l-6.8 4.9 2.6-7.9L1 9.4h8.4z"/></svg>Trustpilot</span>',bu=i=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${i}"/></svg>`,Pv='<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="11" fill="currentColor"/><path d="m7 12.5 3.2 3L17 9" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',Ha=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function Lv(i){if(i.dataset.tpHydrated)return;let t=615 .toLocaleString("da-DK"),e=String(4.7).replace(".",","),n=Cv.map(d=>`<a class="tp-rv" href="${xu}" target="_blank" rel="noopener" data-standin><span class="tp-rv__top">${Mu(d.stars)}<span class="tp-rv__ver">${Pv}Verificeret</span></span><span class="tp-rv__title">${Ha(d.title)}</span><span class="tp-rv__text">${Ha(d.text)}</span><span class="tp-rv__who"><b>${Ha(d.name)}</b>, ${Ha(d.when)}</span></a>`).join(""),s=document.createElement("div");s.className="tp-cr",s.innerHTML=`<a class="tp-cr__sum" href="${xu}" target="_blank" rel="noopener" aria-label="${yu(4.7)}: ${e} ud af 5 p\xE5 Trustpilot, baseret p\xE5 ${t} anmeldelser"><span class="tp-cr__word">${yu(4.7)}</span>${Mu(4.7)}<span class="tp-cr__based">Baseret p\xE5 <b>${t} anmeldelser</b></span>${Iv}</a><div class="tp-cr__main"><div class="tp-cr__row"><button type="button" class="tp-cr__arrow" data-dir="-1" aria-label="Forrige anmeldelse">${bu("m15 18-6-6 6-6")}</button><div class="tp-cr__track" role="list" aria-label="Anmeldelser p\xE5 Trustpilot">${n}</div><button type="button" class="tp-cr__arrow" data-dir="1" aria-label="N\xE6ste anmeldelse">${bu("m9 18 6-6-6-6")}</button></div><p class="tp-cr__foot" data-standin>Mockup: eksempler p\xE5 anmeldelser \u2013 live-siden viser de rigtige fra Trustpilot</p></div>`,s.querySelectorAll(".tp-rv").forEach(d=>d.setAttribute("role","listitem"));let r=i.querySelector(".nc-testi__tp-fallback");r&&(r.style.display="none"),i.appendChild(s);let a=s.querySelector(".tp-cr__track"),[o,l]=s.querySelectorAll(".tp-cr__arrow"),c=()=>{let d=a.querySelector(".tp-rv"),p=parseFloat(getComputedStyle(a).columnGap)||0;return d?d.getBoundingClientRect().width+p:a.clientWidth},u=()=>{let d=a.scrollWidth-a.clientWidth;o.disabled=a.scrollLeft<=2,l.disabled=a.scrollLeft>=d-2};[o,l].forEach(d=>d.addEventListener("click",()=>a.scrollBy({left:c()*+d.dataset.dir}))),a.addEventListener("scroll",u,{passive:!0}),window.addEventListener("resize",u),u(),i.dataset.tpHydrated="1"}function uc(i){i.querySelectorAll(".trustpilot-widget").forEach(Lv)}var Dv='<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><symbol id="nc-cbd" viewBox="0 0 5586 2734"><rect x="87" y="87" width="5412" height="2560" rx="1280" fill="none" stroke="currentColor" stroke-width="174"/><path fill="currentColor" d="M906 1412Q906 1756 1084 1940Q1262 2124 1547 2124Q1819 2124 1971 1980Q2123 1837 2135 1619L2136 1596H1850L1849 1619Q1841 1745 1767 1824Q1694 1903 1548 1903Q1386 1903 1291 1785Q1197 1666 1197 1439V1295Q1197 1049 1293 940Q1390 831 1545 831Q1699 831 1774 906Q1850 981 1850 1113V1138H2136V1117Q2136 896 1977 753Q1819 609 1547 609Q1263 609 1084 792Q906 975 906 1321Z M2289 2095H2848Q3081 2095 3224 1985Q3367 1875 3367 1675Q3367 1534 3300 1447Q3234 1361 3132 1331V1327Q3215 1297 3271 1221Q3328 1144 3328 1024Q3328 826 3192 732Q3057 639 2819 639H2289ZM2569 1890V1437H2843Q2968 1437 3026 1497Q3085 1558 3085 1662Q3085 1767 3026 1828Q2968 1890 2843 1890ZM2569 1241V845H2814Q2938 845 2993 896Q3047 947 3047 1042Q3047 1136 2993 1189Q2938 1241 2814 1241Z M3520 2095H3997Q4288 2095 4484 1914Q4680 1733 4680 1412V1321Q4680 1000 4484 820Q4288 639 3997 639H3520ZM3802 1880V854H3993Q4172 854 4281 972Q4391 1090 4391 1316V1417Q4391 1644 4281 1762Q4172 1880 3993 1880Z"/></symbol><symbol id="nc-cbg" viewBox="0 0 5586 2734"><rect x="87" y="87" width="5412" height="2560" rx="1280" fill="none" stroke="currentColor" stroke-width="174"/><path fill="currentColor" d="M906 1412Q906 1756 1084 1940Q1262 2124 1547 2124Q1819 2124 1971 1980Q2123 1837 2135 1619L2136 1596H1850L1849 1619Q1841 1745 1767 1824Q1694 1903 1548 1903Q1386 1903 1291 1785Q1197 1666 1197 1439V1295Q1197 1049 1293 940Q1390 831 1545 831Q1699 831 1774 906Q1850 981 1850 1113V1138H2136V1117Q2136 896 1977 753Q1819 609 1547 609Q1263 609 1084 792Q906 975 906 1321Z M2289 2095H2848Q3081 2095 3224 1985Q3367 1875 3367 1675Q3367 1534 3300 1447Q3234 1361 3132 1331V1327Q3215 1297 3271 1221Q3328 1144 3328 1024Q3328 826 3192 732Q3057 639 2819 639H2289ZM2569 1890V1437H2843Q2968 1437 3026 1497Q3085 1558 3085 1662Q3085 1767 3026 1828Q2968 1890 2843 1890ZM2569 1241V845H2814Q2938 845 2993 896Q3047 947 3047 1042Q3047 1136 2993 1189Q2938 1241 2814 1241Z M3486 1412Q3486 1759 3665 1942Q3845 2124 4156 2124Q4359 2124 4499 2060Q4639 1996 4714 1920L4714 1334L4137 1334L4137 1550L4432 1550L4432 1823Q4373 1865 4309 1883Q4246 1902 4157 1902Q3981 1902 3881 1787Q3780 1672 3780 1439L3780 1294Q3780 1066 3875 949Q3970 833 4127 833Q4274 833 4349 905Q4424 977 4424 1072L4424 1083L4714 1083L4713 1069Q4710 874 4556 741Q4402 609 4137 609Q3844 609 3665 792Q3486 974 3486 1321Z"/></symbol></svg>';function Su(){document.getElementById("nc-cbd")||document.body.insertAdjacentHTML("afterbegin",Dv)}function dc(){Su()}function fc(i){let t=i.querySelector("form[data-theme-footer-news]");if(!t)return;let e=t.querySelector('input[type="email"]');t.addEventListener("submit",n=>{n.preventDefault(),t.querySelectorAll("[data-theme-footer-msg]").forEach(a=>a.remove());let s=e.value.trim()!==""&&e.checkValidity(),r=document.createElement("p");r.setAttribute("data-theme-footer-msg",""),r.setAttribute("role",s?"status":"alert"),r.style.marginTop="8px",r.textContent=s?"Tak for din tilmelding.":"Tjek din e-mailadresse og pr\xF8v igen.",t.appendChild(r),s?t.reset():e.focus()})}var Rr="https://naturecell.dk",as=i=>i.toLocaleString("da-DK",{minimumFractionDigits:2,maximumFractionDigits:2})+" kr",Eu=i=>String(i).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),Au='<span class="nc-cbd-i"><svg class="nc-cbd" aria-hidden="true" focusable="false"><use href="#nc-cbd"></use></svg></span>',Uv=i=>Eu(i).replace(/CBD-/g,"").replace(/CBD/g,Au).replace(/\u0001/g,`<span class="nc-cbd-w">${Au}-</span>`),wu={"skin-oil":["Hudpleje Olie med 1000mg CBD | 30ml","/products/cbd-olie-1000mg"],"day-cream":["Dagcreme NatureCell | Dagcreme, 50ml","/products/dagcreme"],"night-cream":["Natcreme NatureCell | Natcreme, 50ml","/products/natcreme"],serum:["Hyaluronic Serum med CBD | 30ml","/products/naturecell-cbd-hyaluronic-serum"],"cleansing-gel":["Rensegel med CBD | 100ml","/products/rensegel"],"body-lotion":["Bodylotion med CBD - 200ml","/products/bodylotion"],shampoo:["Shampoo med CBD | 300ml","/products/shampoo-300ml"],"komplet-pakken":["Komplet Pakken","/products/hudpleje-startpakke-plus-1"],"all-day-facial":["All Day Facial","/collections/sampakker"],"lip-balm":["Lip Balm | med CBD 6ml","/products/lip-balm"]},Ga={"skin-oil":[1.318,.21,-2.04],"day-cream":[.954,-3.42,-2.04],"night-cream":[.952,-3.63,-2.12],serum:[1.134,-3.04,-5.79],"cleansing-gel":[.994,0,-.67],"body-lotion":[1.024,.54,-4.58],shampoo:[.927,-.79,-.62],"komplet-pakken":[.958,-5.87,-.25],"all-day-facial":[.959,-6.67,-.29]},Nv=i=>Ga[i]?` style="transform: scale(${Ga[i][0]}) translate(${Ga[i][1]}%, ${Ga[i][2]}%);"`:"",Fv='<svg viewBox="22 16 56 76" width="100%" height="100%" aria-hidden="true" style="display:block"><ellipse cx="50" cy="86.4" rx="9" ry="1.8" fill="rgba(62,93,88,0.13)"/><rect x="43" y="22" width="14" height="20" rx="2.6" fill="#fff" stroke="rgba(62,93,88,0.22)" stroke-width=".7"/><rect x="43" y="42" width="14" height="44.4" rx="1.6" fill="#fff" stroke="rgba(62,93,88,0.22)" stroke-width=".7"/><rect x="43" y="49" width="14" height="30" fill="#80A097"/><path d="M45 41.6h10" stroke="rgba(62,93,88,0.22)" stroke-width=".9"/></svg>',Bv='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>',Ov='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>',kv='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 18H3V6h12v4"/><path d="M14 9h4l3 3v6h-2"/><circle cx="7.5" cy="18.5" r="1.5"/><circle cx="17.5" cy="18.5" r="1.5"/></svg>',zv='<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>';function pc(i,t){let{store:e,byId:n,campaign:s,asset:r}=t,a=i.querySelector("[data-nc-drawer]"),o=document.documentElement,l=null,c=!1;function u(){let g=e.get().cart.map(({id:x,qty:C})=>{let E=n[x],[R,I]=wu[x]||[E.name,"/collections/cbd-hudpleje"],A=E.save*C;return{key:x,p:E,qty:C,title:R,url:Rr+I,img:E.img?r(E.img):null,original:E.price0*C,final:E.price*C,unitWas:E.price0,allocations:A>0?[{title:s.name,amount:A}]:[]}}),m=g.reduce((x,C)=>x+C.final,0),h=n[s.giftId];if(h&&m>=s.giftThreshold){let[x,C]=wu[h.id];g.push({key:h.id,p:h,qty:1,title:x,url:Rr+C,img:null,gift:!0,original:s.giftValue,final:0,unitWas:null,allocations:[{title:`Gave ved k\xF8b over ${s.giftThreshold} kr.`,amount:s.giftValue}]})}let b=g.reduce((x,C)=>x+C.final,0),w=g.reduce((x,C)=>x+C.allocations.reduce((E,R)=>E+R.amount,0),0);return{items:g,total:b,totalDiscount:w,count:g.reduce((x,C)=>x+C.qty,0)}}function d(g){let m=g.img?`<img src="${g.img}" alt="" loading="lazy" width="148" height="148"${Nv(g.p.id)}>`:g.p.id==="lip-balm"?Fv:"",h=g.gift?'<span class="nc-drawer__qty theme-cart-gift-qty" aria-label="Antal 1">1</span>':`<span class="nc-drawer__qty">
                  <button type="button" data-nc-line="${g.key}" data-nc-line-qty="${g.qty-1}" aria-label="F\xE6rre">\u2212</button>
                  <span>${g.qty}</span>
                  <button type="button" data-nc-line="${g.key}" data-nc-line-qty="${g.qty+1}" aria-label="Flere">+</button>
                </span>`;return`<div class="nc-drawer__line">
            <a class="nc-drawer__line-media" href="${g.url}" tabindex="-1" aria-hidden="true">${m}</a>
            <div class="nc-drawer__line-info">
              <a class="nc-drawer__line-title" href="${g.url}">${Uv(g.title)}</a>${g.unitWas?`<span class="nc-drawer__line-meta">F\xF8rpris ${as(g.unitWas)}${g.qty>1?" / stk.":""}</span>`:""}${g.allocations.map(b=>`<span class="nc-drawer__line-discount">${Eu(b.title)} \u2212${as(b.amount)}</span>`).join("")}
              <div class="nc-drawer__line-row">
                ${h}
                <span class="nc-drawer__line-price">${g.allocations.length?`<s class="nc-drawer__line-was">${as(g.original)}</s> `:""}${as(g.final)}</span>
              </div>
            </div>${g.gift?"":`
            <button class="nc-drawer__remove" type="button" data-nc-line="${g.key}" data-nc-line-qty="0" aria-label="Fjern">${Bv}</button>`}
          </div>`}function p(){let g=u(),m=s.freeShipping,h=Math.min(100,Math.floor(g.total*100/m)),b=`<div class="nc-drawer__head">
      <h2>Din kurv</h2>
      <button class="nc-drawer__close" type="button" data-nc-cart-close aria-label="Luk kurv">${Ov}</button>
    </div>`,w;g.count>0?w=`<div class="nc-drawer__ship">
        <p>${kv}<span>${g.total>=m?"Du har fri fragt":`K\xF8b for ${as(m-g.total)} mere og f\xE5 fri fragt`}</span></p>
        <div class="nc-drawer__bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${h}" aria-label="Fri fragt-status">
          <div class="nc-drawer__fill" style="width: ${h}%;"></div>
        </div>
      </div>
      <div class="nc-drawer__lines">${g.items.map(d).join("")}</div>
      <div class="nc-drawer__foot">${g.totalDiscount>0?`
        <div class="nc-drawer__savings">
          <span>Du sparer i alt</span>
          <span>\u2212${as(g.totalDiscount)}</span>
        </div>`:""}
        <div class="nc-drawer__totals">
          <span>Subtotal</span>
          <strong>${as(g.total)}</strong>
        </div>
        <label class="nc-terms nc-drawer__terms" data-nc-terms-scope>
          <input type="checkbox" data-nc-terms${c?" checked":""}>
          <span>Jeg accepterer <a href="${Rr}/policies/terms-of-service" target="_blank" rel="noopener">handelsbetingelserne</a></span>
        </label>
        <a class="nc-drawer__checkout" href="${Rr}/cart/checkout" data-nc-terms-btn aria-disabled="${c?"false":"true"}">G\xE5 til kassen \u2192</a>
        <p class="nc-drawer__note">Moms inkluderet \xB7 fragt beregnes ved kassen</p>
      </div>`:w=`<div class="nc-drawer__empty">
        ${zv}
        <p>Din kurv er tom</p>
        <a href="${Rr}/collections/cbd-hudpleje" data-nc-cart-close>Shop hudpleje</a>
      </div>`;let x=document.activeElement,C=x&&a.contains(x)&&x.matches("[data-nc-line]")?x.getAttribute("data-nc-line")+"|"+x.getAttribute("aria-label"):null;if(a.innerHTML=`<div class="nc-drawer__overlay" data-nc-drawer-overlay></div>
  <div class="nc-drawer__panel">
    ${b}${w}</div>`,C){let[E,R]=C.split("|"),I=a.querySelector(`[data-nc-line="${E}"][aria-label="${R}"]`)||a.querySelector(".nc-drawer__close");I&&I.focus({preventScroll:!0})}}function f(){a.classList.contains("is-open")||(l=document.activeElement),a.classList.add("is-open"),a.removeAttribute("inert"),o.classList.add("nc-lock");let g=!navigator.userActivation||navigator.userActivation.hasBeenActive,m=a.querySelector(".nc-drawer__close");g&&requestAnimationFrame(()=>m&&m.focus({preventScroll:!0}))}function v(){a.classList.contains("is-open")&&(a.classList.remove("is-open"),a.setAttribute("inert",""),o.classList.remove("nc-lock"),l&&l.focus&&l.focus({preventScroll:!0}))}a.addEventListener("click",g=>{let m=g.target;if(m.closest("[data-nc-cart-close]")){g.preventDefault(),v();return}if(m.closest("[data-nc-drawer-overlay]")){v();return}let h=m.closest("[data-nc-line-qty]");if(h){g.preventDefault(),e.setQty(h.getAttribute("data-nc-line"),parseInt(h.getAttribute("data-nc-line-qty"),10));return}let b=m.closest("[data-nc-terms-btn]");if(b&&b.getAttribute("aria-disabled")==="true"){g.preventDefault();let w=a.querySelector("[data-nc-terms]");w&&w.focus();return}b&&g.preventDefault()}),a.addEventListener("change",g=>{if(!g.target.matches("[data-nc-terms]"))return;c=g.target.checked;let m=a.querySelector("[data-nc-terms-btn]");m&&m.setAttribute("aria-disabled",c?"false":"true")}),document.addEventListener("keydown",g=>{if(g.key==="Escape"&&v(),g.key==="Tab"&&a.classList.contains("is-open")){let m=Array.from(a.querySelectorAll('a[href]:not([tabindex="-1"]), button, input')).filter(w=>w.offsetParent!==null);if(!m.length)return;let h=m[0],b=m[m.length-1];g.shiftKey&&document.activeElement===h?(g.preventDefault(),b.focus()):!g.shiftKey&&document.activeElement===b&&(g.preventDefault(),h.focus())}}),e.on(g=>{g==="cart:add"?(p(),f()):g==="cart:change"?p():g==="cart:open"&&(p(),f())}),p(),new URLSearchParams(location.search).get("open")==="1"&&e.count()===0&&(e.add("skin-oil",1),e.add("day-cream",1))}fn("theme-header",Qa);fn("hero",tc);fn("offers",ec);fn("theme-trust-bar",nc);fn("deals",ic);fn("theme-shop-tabs",ac);fn("theme-trust",lc);fn("theme-lifestyle",cc);fn("theme-cases",hc);fn("theme-testimonials",uc);fn("theme-story",dc);fn("theme-footer",fc);fn("theme-cart",pc);Mc();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
